import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
);

const GROQ_KEY = Deno.env.get("GROQ_API_KEY") ?? "";

const SECTION_KEYS = [
  "titulo","tempo_estimado","respostas",
  "objetivo","introducao","explicacao","contextualizacao","resumo",
  "palavras_chave","atividade_guiada","atividade_pratica","exemplos",
  "curiosidades","quiz","desafios","avaliacao","adaptacoes",
  "explicacoes_extra","revisao",
];

function buildPrompt(h: any) {
  const ano = h.ano || "ano não informado";
  const disc = h.disciplina || "disciplina não informada";
  return `Você é um professor brasileiro especialista em BNCC criando UMA aula completa, INÉDITA, adequada à faixa etária.

Habilidade BNCC: ${h.codigo_bncc}
Ano: ${ano}
Disciplina: ${disc}
Título de referência: ${h.titulo || "(sem título)"}
Objetivo de referência: ${h.objetivo || "(sem objetivo)"}

Regras:
- NÃO copie o texto da habilidade. Reescreva com linguagem adequada à criança do ${ano}.
- Conteúdo pedagógico real, exemplos concretos do cotidiano brasileiro.
- Sem emojis. Português do Brasil.

Retorne SOMENTE um JSON válido com EXATAMENTE estas chaves:
{
  "titulo": string,
  "tempo_estimado": int (minutos, 20-60),
  "respostas": [ {"questao": int, "resposta": string, "explicacao": string} ],
  "objetivo": string (1-2 frases),
  "introducao": string (3-5 frases motivadoras),
  "explicacao": string (parágrafo explicativo principal),
  "contextualizacao": string (onde isso aparece na vida real),
  "resumo": string (3-4 frases),
  "palavras_chave": [string, ...] (5-8 termos),
  "atividade_guiada": [ {"passo": int, "instrucao": string, "dica": string} ] (3-5 passos),
  "atividade_pratica": [ {"enunciado": string, "tipo": string} ] (3-5 itens),
  "exemplos": [ {"titulo": string, "descricao": string} ] (2-4 exemplos),
  "curiosidades": [ {"titulo": string, "texto": string} ] (2-3 itens),
  "quiz": { "perguntas": [ {"pergunta": string, "alternativas": [string,string,string,string], "correta": int (0-3)} ] } (4-6 perguntas),
  "desafios": [ {"titulo": string, "descricao": string, "nivel": "facil"|"medio"|"dificil"} ] (2-3),
  "avaliacao": { "criterios": [string], "rubrica": string },
  "adaptacoes": [ {"perfil": string, "estrategia": string} ] (TEA, TDAH, Dislexia, Discalculia),
  "explicacoes_extra": [ {"titulo": string, "texto": string} ] (2-3),
  "revisao": { "perguntas_chave": [string], "sintese": string }
}`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    if (!GROQ_KEY) throw new Error("GROQ_API_KEY ausente");
    const { codigo_bncc } = await req.json();
    if (!codigo_bncc) throw new Error("codigo_bncc obrigatório");

    // Skip se já existe pending ou aula publicada
    const { data: existing } = await supabase
      .from("lesson_drafts")
      .select("id")
      .eq("codigo_bncc", codigo_bncc)
      .eq("status", "pending")
      .maybeSingle();
    if (existing) return new Response(JSON.stringify({ skipped: true, reason: "draft_exists" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const { data: hab, error: hErr } = await supabase
      .from("bncc_habilidades")
      .select("codigo_bncc, ano, disciplina, titulo, objetivo")
      .eq("codigo_bncc", codigo_bncc)
      .single();
    if (hErr || !hab) throw new Error("Habilidade não encontrada: " + codigo_bncc);

    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${GROQ_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: "Você gera aulas escolares completas em JSON estrito conforme o esquema solicitado." },
          { role: "user", content: buildPrompt(hab) },
        ],
      }),
    });
    if (!r.ok) throw new Error(`Groq ${r.status}: ${await r.text()}`);
    const out = await r.json();
    const content = out?.choices?.[0]?.message?.content;
    if (!content) throw new Error("Groq vazio");
    const payload = JSON.parse(content);

    const missing = SECTION_KEYS.filter((k) => payload[k] === undefined || payload[k] === null);
    if (missing.length) throw new Error("Campos ausentes: " + missing.join(","));

    const { error: insErr } = await supabase.from("lesson_drafts").insert({
      codigo_bncc,
      ano: hab.ano,
      disciplina: hab.disciplina,
      titulo: payload.titulo,
      payload,
      status: "pending",
      model: "llama-3.3-70b-versatile",
      tokens_used: out?.usage?.total_tokens ?? 0,
    });
    if (insErr) throw new Error("Insert: " + insErr.message);

    return new Response(JSON.stringify({ ok: true, codigo_bncc, tokens: out?.usage?.total_tokens ?? 0 }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String((e as Error).message ?? e) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
