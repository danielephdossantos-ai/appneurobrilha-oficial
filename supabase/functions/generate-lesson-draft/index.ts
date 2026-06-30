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

type GenerationMode = "auto" | "groq" | "local";

const SECTION_KEYS = [
  "titulo","tempo_estimado","respostas",
  "objetivo","introducao","explicacao","contextualizacao","resumo",
  "palavras_chave","atividade_guiada","atividade_pratica","exemplos",
  "curiosidades","quiz","desafios","avaliacao","adaptacoes",
  "explicacoes_extra","revisao",
];

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function parseRetryAfterMs(raw: string, fallbackMs = 8000) {
  const match = raw.match(/try again in\s+([\d.]+)s/i);
  if (!match) return fallbackMs;
  return Math.max(Math.ceil(Number(match[1]) * 1000) + 1200, fallbackMs);
}

function safeErrorMessage(error: unknown) {
  return String((error as Error)?.message ?? error);
}

function normalizeText(value: unknown, fallback: string) {
  const text = String(value ?? "").trim();
  return text.length ? text : fallback;
}

function subjectNoun(disciplina: unknown) {
  const disc = normalizeText(disciplina, "conteúdo").toLowerCase();
  if (disc.includes("mat")) return "ideia matemática";
  if (disc.includes("port") || disc.includes("língua")) return "ideia de leitura e escrita";
  if (disc.includes("ciên")) return "descoberta científica";
  if (disc.includes("hist")) return "aprendizagem sobre o tempo e as pessoas";
  if (disc.includes("geo")) return "observação do lugar onde vivemos";
  if (disc.includes("arte")) return "criação artística";
  if (disc.includes("física")) return "movimento corporal";
  if (disc.includes("ingl")) return "palavra em inglês";
  return "aprendizagem";
}

function buildLocalDraft(h: any) {
  const codigo = normalizeText(h.codigo_bncc, "habilidade");
  const ano = normalizeText(h.ano, "ano escolar");
  const disciplina = normalizeText(h.disciplina, "disciplina");
  const tituloBase = normalizeText(h.titulo, `Aula prática de ${disciplina}`);
  const objetivoBase = normalizeText(h.objetivo, `Compreender e praticar a habilidade ${codigo} em situações simples.`);
  const tema = subjectNoun(disciplina);
  const titulo = `${tituloBase} — aula guiada`;

  return {
    titulo,
    tempo_estimado: 35,
    respostas: [
      { questao: 1, resposta: "Resposta pessoal orientada pelo exemplo da aula.", explicacao: "A criança deve usar uma situação concreta e explicar seu raciocínio com apoio do adulto." },
      { questao: 2, resposta: "Alternativa 1", explicacao: "A primeira alternativa retoma diretamente a ideia trabalhada na explicação." },
      { questao: 3, resposta: "Produção própria", explicacao: "O importante é aplicar a habilidade em uma nova situação do cotidiano." },
    ],
    objetivo: `Nesta aula, a criança vai trabalhar ${objetivoBase.toLowerCase()} com exemplos simples, fala guiada e prática independente.`,
    introducao: `Hoje vamos explorar uma ${tema} de um jeito calmo e prático. Primeiro, a criança observa uma situação conhecida. Depois, conversa sobre o que percebeu e tenta resolver pequenas tarefas. A aula foi pensada para o ${ano}, com passos curtos e linguagem simples.`,
    explicacao: `A habilidade ${codigo} será apresentada a partir de uma situação concreta. O adulto pode ler cada parte, pedir que a criança observe, responda oralmente e só depois registre a resposta. O foco principal é entender a ideia, comparar exemplos e praticar sem pressa.`,
    contextualizacao: `Essa aprendizagem aparece em momentos comuns, como organizar objetos, ler placas, contar histórias, observar a casa, brincar, conversar com familiares ou resolver pequenos desafios da rotina escolar.`,
    resumo: `A criança conheceu o tema principal da aula. Ela viu um exemplo, respondeu perguntas e praticou com apoio. Depois, tentou resolver sozinha uma atividade parecida. Para finalizar, revisou o que aprendeu em poucas palavras.`,
    palavras_chave: [codigo, disciplina, ano, "observação", "prática", "exemplo", "revisão"],
    atividade_guiada: [
      { passo: 1, instrucao: `Leia o título da aula e converse sobre o que a criança já sabe: ${tituloBase}.`, dica: "Valorize respostas orais, desenhos e gestos." },
      { passo: 2, instrucao: "Mostre um exemplo concreto usando objetos, imagens, sons, palavras ou situações da rotina.", dica: "Use algo que esteja perto da criança." },
      { passo: 3, instrucao: "Peça que a criança explique com suas palavras o que percebeu.", dica: "Se ela travar, ofereça duas opções para escolher." },
      { passo: 4, instrucao: "Resolva uma questão junto com a criança, falando cada etapa do pensamento.", dica: "Não corrija rápido; pergunte como ela pensou." },
    ],
    atividade_pratica: [
      { enunciado: `Observe uma situação do dia a dia e diga onde aparece esta aprendizagem: ${tituloBase}.`, tipo: "oral" },
      { enunciado: "Crie um exemplo parecido com o da aula usando desenho, fala ou escrita.", tipo: "produção" },
      { enunciado: "Resolva uma nova situação e explique o caminho usado para chegar à resposta.", tipo: "resolução" },
      { enunciado: "Compare dois exemplos e diga qual combina melhor com a ideia estudada.", tipo: "comparação" },
    ],
    exemplos: [
      { titulo: "Exemplo com objetos", descricao: "Use lápis, brinquedos, tampinhas, livros ou figuras para representar a situação antes de responder." },
      { titulo: "Exemplo com conversa", descricao: "Conte uma pequena história e peça que a criança encontre nela a ideia principal da aula." },
      { titulo: "Exemplo da rotina", descricao: "Procure em casa ou na escola uma situação em que a habilidade possa ser usada de forma natural." },
    ],
    curiosidades: [
      { titulo: "Aprender praticando", texto: "Quando a criança explica o próprio pensamento, ela fortalece a memória e entende melhor o conteúdo." },
      { titulo: "Um passo por vez", texto: "Atividades curtas ajudam a manter atenção, confiança e vontade de tentar novamente." },
    ],
    quiz: {
      perguntas: [
        { pergunta: "Qual é o primeiro passo para resolver uma atividade nova?", alternativas: ["Observar com calma", "Chutar rápido", "Pular a pergunta", "Copiar sem pensar"], correta: 0 },
        { pergunta: "O que ajuda a entender melhor uma ideia?", alternativas: ["Usar exemplos", "Fazer tudo correndo", "Não perguntar", "Apagar tudo"], correta: 0 },
        { pergunta: "Depois de responder, o que é bom fazer?", alternativas: ["Revisar o pensamento", "Fechar a aula", "Ignorar o erro", "Trocar de assunto"], correta: 0 },
        { pergunta: `Esta aula trabalha principalmente qual área?`, alternativas: [disciplina, "Receita", "Trânsito", "Compras"], correta: 0 },
      ],
    },
    desafios: [
      { titulo: "Desafio fácil", descricao: "Dê um exemplo oral sobre o tema da aula.", nivel: "facil" },
      { titulo: "Desafio médio", descricao: "Crie uma situação parecida e peça para outra pessoa resolver.", nivel: "medio" },
      { titulo: "Desafio difícil", descricao: "Explique o conteúdo usando suas próprias palavras e um exemplo novo.", nivel: "dificil" },
    ],
    avaliacao: {
      criterios: ["Participou da conversa inicial", "Compreendeu o exemplo", "Tentou resolver a prática", "Conseguiu revisar o que aprendeu"],
      rubrica: "Observe se a criança entende a ideia central, explica o raciocínio e consegue aplicar o conteúdo em pelo menos uma situação nova.",
    },
    adaptacoes: [
      { perfil: "TEA", estrategia: "Antecipe a sequência da aula e use instruções curtas, previsíveis e com apoio visual." },
      { perfil: "TDAH", estrategia: "Divida a atividade em blocos pequenos e ofereça pausas rápidas entre as etapas." },
      { perfil: "Dislexia", estrategia: "Leia os enunciados em voz alta e aceite respostas orais, desenhos ou marcações." },
      { perfil: "Discalculia", estrategia: "Use material concreto, contagem visual e exemplos manipuláveis quando houver números." },
    ],
    explicacoes_extra: [
      { titulo: "Se a criança errar", texto: "Retome o exemplo, simplifique a pergunta e peça que ela escolha entre duas possibilidades antes de responder sozinha." },
      { titulo: "Se a criança acertar rápido", texto: "Peça que explique como pensou e crie outro exemplo para confirmar a aprendizagem." },
    ],
    revisao: {
      perguntas_chave: ["O que aprendemos hoje?", "Onde isso aparece na vida real?", "Qual exemplo ajudou mais?", "O que ainda precisa treinar?"],
      sintese: `A aula trabalhou ${codigo} em ${disciplina}, com objetivo de transformar a habilidade em prática compreensível para a criança do ${ano}.`,
    },
  };
}

async function insertDraft(hab: any, payload: Record<string, unknown>, model: string, tokens = 0) {
  const missing = SECTION_KEYS.filter((k) => payload[k] === undefined || payload[k] === null);
  if (missing.length) throw new Error("Campos ausentes: " + missing.join(","));

  const { error: insErr } = await supabase.from("lesson_drafts").insert({
    codigo_bncc: hab.codigo_bncc,
    ano: hab.ano,
    disciplina: hab.disciplina,
    titulo: payload.titulo,
    payload,
    status: "pending",
    model,
    tokens_used: tokens,
  });
  if (insErr) throw new Error("Insert: " + insErr.message);
}

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
    const { codigo_bncc, mode = "auto" } = await req.json();
    const generationMode: GenerationMode = ["auto", "groq", "local"].includes(mode) ? mode : "auto";
    if (!codigo_bncc) throw new Error("codigo_bncc obrigatório");

    // Skip se já existe pending ou aula publicada
    const { data: existing } = await supabase
      .from("lesson_drafts")
      .select("id")
      .eq("codigo_bncc", codigo_bncc)
      .eq("status", "pending")
      .maybeSingle();
    if (existing) return jsonResponse({ ok: true, skipped: true, reason: "draft_exists" });

    const { data: hab, error: hErr } = await supabase
      .from("bncc_habilidades")
      .select("codigo_bncc, ano, disciplina, titulo, objetivo")
      .eq("codigo_bncc", codigo_bncc)
      .single();
    if (hErr || !hab) throw new Error("Habilidade não encontrada: " + codigo_bncc);

    if (generationMode === "local" || !GROQ_KEY) {
      const payload = buildLocalDraft(hab);
      await insertDraft(hab, payload, "local-pedagogical-template", 0);
      return jsonResponse({ ok: true, codigo_bncc, mode: "local", tokens: 0 });
    }

    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${GROQ_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.55,
        max_tokens: 2200,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: "Você gera aulas escolares completas em JSON estrito conforme o esquema solicitado." },
          { role: "user", content: buildPrompt(hab) },
        ],
      }),
    });
    if (!r.ok) {
      const errorText = await r.text();
      console.error("Groq API error:", r.status, errorText);
      if (r.status === 429 || errorText.toLowerCase().includes("rate limit")) {
        if (generationMode === "auto") {
          const payload = buildLocalDraft(hab);
          await insertDraft(hab, payload, "local-pedagogical-template", 0);
          return jsonResponse({ ok: true, codigo_bncc, mode: "local_fallback", tokens: 0, warning: "Groq no limite; rascunho criado pelo modelo pedagógico local." });
        }
        return jsonResponse({
          ok: false,
          retryable: true,
          errorType: "RATE_LIMIT",
          retryAfterMs: parseRetryAfterMs(errorText),
          error: "Limite temporário do Groq. O gerador vai esperar e tentar de novo.",
        });
      }
      return jsonResponse({
        ok: false,
        retryable: r.status >= 500,
        errorType: r.status >= 500 ? "SERVICE_UNAVAILABLE" : "GROQ_ERROR",
        error: `Falha no Groq (${r.status}).`,
      }, r.status >= 500 ? 200 : 400);
    }
    const out = await r.json();
    const content = out?.choices?.[0]?.message?.content;
    if (!content) throw new Error("Groq vazio");
    const payload = JSON.parse(content);

    await insertDraft(hab, payload, "llama-3.3-70b-versatile", out?.usage?.total_tokens ?? 0);

    return jsonResponse({ ok: true, codigo_bncc, mode: "groq", tokens: out?.usage?.total_tokens ?? 0 });
  } catch (e) {
    console.error("generate-lesson-draft error:", e);
    return jsonResponse({ ok: false, retryable: false, errorType: "FUNCTION_ERROR", error: safeErrorMessage(e) });
  }
});
