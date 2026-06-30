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
  const fullMatch = raw.match(/try again in\s+(?:(\d+)m)?\s*([\d.]+)s/i);
  if (fullMatch) {
    const minutes = Number(fullMatch[1] ?? 0);
    const seconds = Number(fullMatch[2] ?? 0);
    return Math.max(Math.ceil((minutes * 60 + seconds) * 1000) + 1200, fallbackMs);
  }

  const secondsOnly = raw.match(/try again in\s+([\d.]+)\s*seconds?/i);
  if (!secondsOnly) return fallbackMs;
  return Math.max(Math.ceil(Number(secondsOnly[1]) * 1000) + 1200, fallbackMs);
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

function shortTitle(text: string, max = 90) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const sp = cut.lastIndexOf(" ");
  return (sp > 40 ? cut.slice(0, sp) : cut) + "…";
}

function extractKeywords(text: string): string[] {
  const stop = new Set("a o e de da do das dos em no na nas nos para por com sem que se um uma uns umas as os ao aos à às pela pelo pelas pelos ou ser ter este esta isso esse essa entre sobre como mais menos seu sua seus suas".split(" "));
  return Array.from(new Set(
    text.toLowerCase()
      .replace(/[^\p{L}\s]/gu, " ")
      .split(/\s+/)
      .filter((w) => w.length >= 4 && !stop.has(w))
  )).slice(0, 8);
}

function disciplineExamples(disc: string, objetivo: string) {
  const d = disc.toLowerCase();
  const obj = objetivo.toLowerCase();
  if (d.includes("mat")) return [
    { titulo: "Com objetos da casa", descricao: `Use tampinhas, lápis ou brinquedos para representar a situação descrita em "${shortTitle(objetivo,80)}".` },
    { titulo: "Desenhando no papel", descricao: "Peça que a criança represente o problema com riscos, bolinhas ou tabelas antes de calcular." },
    { titulo: "Na compra do mercado", descricao: "Mostre uma situação real (preço, troco, quantidade) que envolva exatamente o que a habilidade pede." },
  ];
  if (d.includes("port") || d.includes("língua")) return [
    { titulo: "Lendo em voz alta", descricao: `Leia um trecho curto e pergunte à criança o que ela percebeu sobre "${shortTitle(objetivo,80)}".` },
    { titulo: "Comparando textos", descricao: "Mostre dois textos diferentes e peça que ela aponte onde aparece a característica estudada." },
    { titulo: "Escrevendo o próprio", descricao: "Convide a criança a produzir um pequeno texto aplicando o que a habilidade pede." },
  ];
  if (d.includes("ciên")) return [
    { titulo: "Observando o mundo", descricao: `Saia com a criança e procure exemplos reais do que diz: "${shortTitle(objetivo,80)}".` },
    { titulo: "Pequeno experimento", descricao: "Monte uma demonstração simples em casa que ilustre o conceito estudado." },
    { titulo: "Pesquisa rápida", descricao: "Veja juntos um vídeo curto ou figura que explique o fenômeno." },
  ];
  if (d.includes("hist")) return [
    { titulo: "Conversa com a família", descricao: `Pergunte aos mais velhos algo relacionado a "${shortTitle(objetivo,80)}" e compare com hoje.` },
    { titulo: "Linha do tempo", descricao: "Desenhe uma linha do tempo simples marcando os momentos citados na habilidade." },
    { titulo: "Comparar antes e agora", descricao: "Mostre uma imagem antiga e uma atual e converse sobre as mudanças." },
  ];
  if (d.includes("geo")) return [
    { titulo: "Observar o bairro", descricao: `Saia com a criança e identifique elementos que aparecem em "${shortTitle(objetivo,80)}".` },
    { titulo: "Mapa caseiro", descricao: "Desenhe junto um mapa do quarto, da casa ou da rua aplicando a ideia da aula." },
    { titulo: "Comparar lugares", descricao: "Mostre fotos de lugares diferentes e converse sobre as características pedidas." },
  ];
  if (d.includes("arte")) return [
    { titulo: "Criar livremente", descricao: `Convide a criança a produzir uma obra simples inspirada em "${shortTitle(objetivo,80)}".` },
    { titulo: "Observar obras", descricao: "Mostre 2 ou 3 imagens de arte e converse sobre o que cada uma comunica." },
    { titulo: "Apresentar a criação", descricao: "Peça que ela conte para a família o que fez e por quê." },
  ];
  if (d.includes("inglês") || d.includes("ingl")) return [
    { titulo: "Falar em voz alta", descricao: `Repita junto da criança as palavras-chave de "${shortTitle(objetivo,80)}".` },
    { titulo: "Apontar e nomear", descricao: "Mostre objetos da casa e diga o nome em inglês, depois peça que ela repita." },
    { titulo: "Pequeno diálogo", descricao: "Crie uma cena curta e treine as frases junto." },
  ];
  return [
    { titulo: "Exemplo da rotina", descricao: `Mostre uma situação concreta ligada a "${shortTitle(objetivo,80)}".` },
    { titulo: "Conversa guiada", descricao: "Peça que a criança explique com as próprias palavras o que percebeu." },
    { titulo: "Aplicar em casa", descricao: "Procurem juntos uma situação parecida no dia a dia." },
  ];
}

function quizFromObjective(disc: string, objetivo: string) {
  const kws = extractKeywords(objetivo);
  const principal = kws[0] || disc;
  const secundaria = kws[1] || "exemplo";
  return [
    {
      pergunta: `Esta aula trabalha principalmente: "${shortTitle(objetivo, 110)}". Qual palavra resume melhor o que vamos aprender?`,
      alternativas: [principal, "viagem", "futebol", "filme"],
      correta: 0,
    },
    {
      pergunta: `Qual é o objetivo central da aula?`,
      alternativas: [shortTitle(objetivo, 90), "Decorar palavras difíceis", "Brincar sem regra", "Copiar do livro"],
      correta: 0,
    },
    {
      pergunta: `Para entender melhor o que a aula pede, o melhor caminho é:`,
      alternativas: [`Observar um exemplo concreto envolvendo ${secundaria}`, "Pular para o quiz", "Apagar a folha", "Adivinhar a resposta"],
      correta: 0,
    },
    {
      pergunta: `Esta habilidade pertence a qual área?`,
      alternativas: [disc, "Cinema", "Trânsito", "Esporte radical"],
      correta: 0,
    },
  ];
}

function buildLocalDraft(h: any) {
  const codigo = normalizeText(h.codigo_bncc, "habilidade");
  const ano = normalizeText(h.ano, "ano escolar");
  const disciplina = normalizeText(h.disciplina, "disciplina");
  const objetivoReal = normalizeText(h.objetivo, normalizeText(h.titulo, `Compreender a habilidade ${codigo}.`));
  const tituloCurto = shortTitle(normalizeText(h.titulo, objetivoReal), 80);
  const titulo = tituloCurto;
  const kws = extractKeywords(objetivoReal);

  return {
    titulo,
    tempo_estimado: 35,
    respostas: [
      { questao: 1, resposta: `Exemplo aplicado a: "${shortTitle(objetivoReal, 90)}".`, explicacao: "A criança deve usar uma situação concreta ligada exatamente ao que a habilidade pede." },
      { questao: 2, resposta: shortTitle(objetivoReal, 80), explicacao: "A primeira alternativa retoma o objetivo central da aula." },
      { questao: 3, resposta: "Produção própria", explicacao: `Aplicar "${shortTitle(objetivoReal, 80)}" em uma nova situação do cotidiano.` },
    ],
    objetivo: `Ao final desta aula a criança será capaz de: ${objetivoReal}`,
    introducao: `Olá! Hoje vamos trabalhar uma habilidade muito importante de ${disciplina} do ${ano}: "${tituloCurto}". A aula tem passos curtos, exemplos concretos e momentos para a criança falar, tentar e revisar. O foco é EXATAMENTE o que a BNCC pede nesta habilidade (${codigo}) — nada genérico.`,
    explicacao: `A habilidade ${codigo} pede que a criança consiga: ${objetivoReal}. Vamos quebrar isso em pedaços pequenos. Primeiro, observamos um exemplo concreto. Depois conversamos sobre o que apareceu e damos um nome para cada parte. Em seguida tentamos um exemplo parecido, com apoio. No fim, a criança tenta sozinha e revisa com você o que aprendeu. O importante NÃO é responder rápido, é entender o que está fazendo e conseguir explicar.`,
    contextualizacao: `Essa aprendizagem (${tituloCurto}) aparece em situações reais de ${disciplina}: na escola, em casa, em conversas, em jogos, em leituras, em compras e em descobertas do dia a dia. Sempre que possível, conecte a aula com algo que a criança já viveu — isso fixa muito mais.`,
    resumo: `Nesta aula a criança trabalhou a habilidade ${codigo}: "${tituloCurto}". Ela viu exemplos concretos ligados a ${disciplina}, conversou sobre o que percebeu, praticou com apoio e depois sozinha. Para fechar, revisou o que aprendeu com suas próprias palavras.`,
    palavras_chave: Array.from(new Set([codigo, disciplina, ano, ...kws])).slice(0, 10),
    atividade_guiada: [
      { passo: 1, instrucao: `Leia em voz alta o objetivo desta aula: "${shortTitle(objetivoReal, 120)}". Pergunte à criança o que ela já sabe sobre isso.`, dica: "Aceite respostas curtas, gestos ou desenhos." },
      { passo: 2, instrucao: `Mostre um exemplo concreto de ${disciplina} ligado diretamente a esse objetivo. Use objetos, imagens ou uma cena rápida da rotina.`, dica: "Quanto mais próximo da vida da criança, melhor." },
      { passo: 3, instrucao: `Peça que a criança identifique no exemplo onde aparece exatamente o que a habilidade pede.`, dica: "Se travar, ofereça duas opções para ela escolher." },
      { passo: 4, instrucao: `Resolvam JUNTOS um exercício pensando em voz alta cada etapa.`, dica: "Você modela o raciocínio; ela copia o jeito de pensar." },
    ],
    atividade_pratica: [
      { enunciado: `Crie um exemplo seu mostrando "${tituloCurto}".`, tipo: "produção" },
      { enunciado: `Encontre na sua casa ou na escola uma situação onde isso aparece.`, tipo: "observação" },
      { enunciado: `Explique para alguém da família, com suas palavras, o que você aprendeu hoje sobre ${disciplina}.`, tipo: "oral" },
      { enunciado: `Resolva mais um exercício parecido sozinho(a) e confira a resposta com um adulto.`, tipo: "resolução" },
    ],
    exemplos: disciplineExamples(disciplina, objetivoReal),
    curiosidades: [
      { titulo: `Por que ${disciplina} importa`, texto: `Aprender "${tituloCurto}" ajuda a criança a entender melhor o mundo de ${disciplina} e a se virar em situações reais do dia a dia.` },
      { titulo: "Cérebro em ação", texto: `Quando a criança explica o próprio pensamento, o cérebro grava a aprendizagem com muito mais força.` },
    ],
    quiz: { perguntas: quizFromObjective(disciplina, objetivoReal) },
    desafios: [
      { titulo: "Desafio fácil", descricao: `Diga em UMA frase o que esta aula ensinou sobre ${disciplina}.`, nivel: "facil" },
      { titulo: "Desafio médio", descricao: `Crie um exemplo NOVO que mostre "${tituloCurto}".`, nivel: "medio" },
      { titulo: "Desafio difícil", descricao: `Ensine alguém da família o que você aprendeu sobre ${codigo}: "${tituloCurto}". Use exemplos e suas próprias palavras.`, nivel: "dificil" },
    ],
    avaliacao: {
      criterios: [
        `Identifica o que a habilidade ${codigo} pede`,
        "Dá pelo menos um exemplo concreto",
        "Explica o raciocínio com as próprias palavras",
        "Aplica a aprendizagem em uma situação nova",
      ],
      rubrica: `Observe se a criança compreende especificamente "${tituloCurto}" e consegue aplicar em pelo menos uma situação diferente da apresentada.`,
    },
    adaptacoes: [
      { perfil: "TEA", estrategia: `Antecipe a sequência da aula com agenda visual. Apresente "${tituloCurto}" com apoio de imagens e frases curtas. Evite mudanças bruscas.` },
      { perfil: "TDAH", estrategia: `Divida a aula em blocos de 5–7 minutos. Faça pausas ativas entre cada passo. Reforce positivamente cada tentativa.` },
      { perfil: "Dislexia", estrategia: `Leia TODOS os enunciados em voz alta. Aceite respostas orais, gravadas ou em desenho. Use letra grande e espaçada nos materiais.` },
      { perfil: "Discalculia", estrategia: `Use material concreto e contagem visual sempre que houver número. Permita o uso de dedos, palitos ou tabela de apoio.` },
    ],
    explicacoes_extra: [
      { titulo: "Se a criança errar", texto: `Retome o exemplo concreto. Mostre de novo o objetivo ("${shortTitle(objetivoReal, 90)}") e ofereça duas alternativas para ela escolher antes de tentar sozinha.` },
      { titulo: "Se a criança acertar rápido", texto: `Peça que ela crie um exemplo NOVO e explique como pensou. Aproveite para introduzir uma variação um pouco mais difícil da mesma habilidade.` },
    ],
    revisao: {
      perguntas_chave: [
        `O que a habilidade ${codigo} pede?`,
        `Qual exemplo de ${disciplina} ajudou mais a entender?`,
        `Onde "${tituloCurto}" aparece na vida real?`,
        `O que ainda precisa treinar?`,
      ],
      sintese: `Esta aula trabalhou a habilidade ${codigo} (${disciplina} · ${ano}): ${objetivoReal}`,
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
