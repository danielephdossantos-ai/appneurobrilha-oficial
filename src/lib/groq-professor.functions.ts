import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { chatCompletionFallback, type ChatMsg } from "./ai-chat-fallback";

const MessageSchema = z.object({
  role: z.enum(["system", "user", "assistant"]),
  content: z.string().min(1).max(8000),
});

const InputSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(40),
  modulo: z.enum([
    "reforco-brilha",
    "jornada-365",
    "missao-prova",
    "missao-trabalho",
    "missao-tarefa",
  ]),
  contexto: z.string().max(2000).optional(),
  crianca: z
    .object({
      nome: z.string().max(60).optional(),
      idade: z.number().int().min(2).max(18).optional(),
      serie: z.string().max(40).optional(),
      perfil: z.string().max(200).optional(),
    })
    .optional(),
});

const MODULE_PERSONA: Record<string, string> = {
  "reforco-brilha":
    "Você está no Reforço Brilho. Identifique a dificuldade da criança, reforce o conceito com analogia simples e ofereça 2-3 exercícios graduais.",
  "jornada-365":
    "Você está na Jornada 365 (rotina diária neurodivergente). Ajude com a tarefa do dia em passos curtíssimos, celebrando cada conquista.",
  "missao-prova":
    "Você está em Missão Prova. Aja como tutor de revisão: faça perguntas tipo prova, dê feedback imediato e dica de memorização.",
  "missao-trabalho":
    "Você está em Missão Trabalho. Ajude a planejar o trabalho escolar em etapas (pesquisa, esboço, escrita, revisão) sem fazer pela criança.",
  "missao-tarefa":
    "Você está em Missão Tarefa (tarefa de casa do dia). NUNCA entregue a resposta pronta. Sempre dê pistas, perguntas socráticas e mini-exemplos pra criança raciocinar sozinha.",
};

function buildSystemPrompt(input: z.infer<typeof InputSchema>) {
  const persona = MODULE_PERSONA[input.modulo];
  const c = input.crianca;
  const childLine = c
    ? `Aluno: ${c.nome ?? "criança"}${c.idade ? `, ${c.idade} anos` : ""}${c.serie ? `, ${c.serie}` : ""}${c.perfil ? ` — perfil: ${c.perfil}` : ""}.`
    : "Aluno: criança brasileira em idade escolar.";
  const ctx = input.contexto ? `\nContexto da tela atual: ${input.contexto}` : "";
  return `Você é o Professor Brilho, tutor virtual do app Neuro Brilha Kids para crianças neurodivergentes (TDAH, TEA, dislexia, etc.).

REGRAS:
- Fale em português do Brasil, tom acolhedor, frases curtas (máx. 2 linhas por parágrafo).
- Sem jargão. Use emojis com moderação (1-2 por resposta).
- Nunca diga "não posso ajudar". Reformule em linguagem infantil.
- Se a pergunta sair do escopo escolar, traga gentilmente de volta.
- Acessibilidade: evite ironia, metáforas obscuras e textos longos.

${childLine}
${persona}${ctx}`;
}

export const askProfessorBrilho = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const messages: ChatMsg[] = [
      { role: "system", content: buildSystemPrompt(data) },
      ...data.messages,
    ];
    const r = await chatCompletionFallback({
      messages,
      max_tokens: 600,
      temperature: 0.6,
      label: `professor:${data.modulo}`,
    });
    if (!r.ok) {
      return { ok: false as const, error: r.motivo, reply: null as string | null };
    }
    return { ok: true as const, reply: r.text, error: null };
  });

// ============================================================
// EXPLICAR ERRO — Professor Brilho dentro das atividades.
// ============================================================

const ExplicarErroSchema = z.object({
  pergunta: z.string().trim().min(2).max(800),
  gabarito: z.string().trim().min(1).max(400),
  respostaErrada: z.string().trim().min(1).max(400),
  bnccCode: z.string().max(20).optional(),
  idade: z.number().int().min(5).max(16).optional(),
  modulo: z
    .enum(["reforco-brilha", "jornada-365", "missao-prova", "missao-trabalho"])
    .optional(),
});

const EXPLICAR_ERRO_SYSTEM = `Você é o Professor Brilho, tutor virtual para crianças neurodivergentes no app Neuro Brilha Kids.

Sua única função aqui: a criança ERROU uma questão. Você deve explicar por que a resposta dela está incorreta, de forma fofa e pedagógica.

REGRAS RÍGIDAS:
- NUNCA entregue a resposta certa de bandeja. Dê DICAS para a criança raciocinar e chegar sozinha à conclusão.
- Máximo 3 frases. Português do Brasil, tom acolhedor, frases curtas.
- Comece reconhecendo o esforço ("Boa tentativa!", "Quase lá!").
- Explique de forma simples o equívoco no raciocínio dela.
- Termine com 1 dica de estudo concreta para revisar o conceito.
- 1 emoji no máximo. Sem markdown, sem listas.`;

export const explicarErroAtividade = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ExplicarErroSchema.parse(input))
  .handler(async ({ data }) => {
    const userPrompt = `A questão era: ${data.pergunta}
A resposta certa era: ${data.gabarito}
O aluno marcou: ${data.respostaErrada}${data.bnccCode ? `\nHabilidade BNCC: ${data.bnccCode}` : ""}${data.idade ? `\nIdade do aluno: ${data.idade} anos` : ""}

Explique de forma fofa e pedagógica por que a resposta dele está incorreta e dê uma dica de estudo. Lembre: não entregue o gabarito de bandeja, guie o raciocínio.`;

    const r = await chatCompletionFallback({
      messages: [
        { role: "system", content: EXPLICAR_ERRO_SYSTEM },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 240,
      temperature: 0.6,
      label: "explicar-erro",
    });
    if (!r.ok) return { ok: false as const, error: r.motivo, reply: null as string | null };
    return { ok: true as const, reply: r.text, error: null };
  });


// ============================================================
// QUIZ MISSÃO PROVA — gera mini-simulado (3 questões objetivas)
// ============================================================

const QuizInputSchema = z.object({
  topico: z.string().trim().min(2).max(300),
  materia: z.string().trim().min(2).max(80),
  idade: z.number().int().min(5).max(16).optional(),
  bnccCode: z.string().max(20).optional(),
});

const QuizQuestionSchema = z.object({
  pergunta: z.string().min(3).max(400),
  alternativas: z.array(z.string().min(1).max(200)).min(3).max(4),
  correta: z.number().int().min(0).max(3),
});

const QuizSchema = z.object({
  questoes: z.array(QuizQuestionSchema).min(2).max(4),
});

export type QuizQuestion = z.infer<typeof QuizQuestionSchema>;

const QUIZ_SYSTEM = `Você gera mini-simulados curtos para crianças neurodivergentes em revisão de prova.

REGRAS:
- Sempre responda APENAS com JSON válido no formato:
  {"questoes":[{"pergunta":"...","alternativas":["A","B","C","D"],"correta":0}, ...]}
- Exatamente 3 questões objetivas, 4 alternativas cada.
- Português do Brasil, frases curtas, vocabulário adequado à idade.
- Cada questão deve ter UMA única alternativa correta clara.
- Não inclua explicações, markdown, comentários — só o JSON.`;

function tryExtractJson(raw: string): unknown {
  const cleaned = raw
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/i, "")
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const m = cleaned.match(/\{[\s\S]*\}/);
    if (m) {
      try {
        return JSON.parse(m[0]);
      } catch {
        return null;
      }
    }
    return null;
  }
}

export const gerarQuizMissaoProva = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => QuizInputSchema.parse(input))
  .handler(async ({ data }) => {
    const userPrompt = `Tópico: ${data.topico}
Matéria: ${data.materia}${data.idade ? `\nIdade do aluno: ${data.idade} anos` : ""}${data.bnccCode ? `\nHabilidade BNCC: ${data.bnccCode}` : ""}

Gere 3 questões objetivas de revisão (4 alternativas, 1 correta).`;

    const r = await chatCompletionFallback({
      messages: [
        { role: "system", content: QUIZ_SYSTEM },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 900,
      temperature: 0.4,
      json: true,
      label: "quiz-missao-prova",
    });
    if (!r.ok) return { ok: false as const, error: r.motivo, quiz: null };

    const parsed = tryExtractJson(r.text);
    const safe = QuizSchema.safeParse(parsed);
    if (!safe.success) {
      console.error("[quiz-missao-prova] JSON inválido", safe.error.message);
      return { ok: false as const, error: "JSON inválido", quiz: null };
    }
    return { ok: true as const, quiz: safe.data, error: null };
  });

// ============================================================
// PLANO DE ESTUDOS MISSÃO PROVA — multimodal (aceita foto)
// ============================================================

const PlanoEstudosInputSchema = z.object({
  materia: z.string().trim().min(2).max(80),
  dataProva: z.string().trim().min(8).max(12),
  diasAteProva: z.number().int().min(1).max(60),
  conteudos: z.array(z.string().min(1).max(160)).max(20).optional(),
  observacoes: z.string().max(800).optional(),
  idade: z.number().int().min(5).max(16).optional(),
  serie: z.string().max(20).optional(),
  fotoBase64: z.string().max(8_000_000).optional(),
});

const SessaoSchema = z.object({
  scheduled_date: z.string().min(8).max(12),
  title: z.string().min(2).max(120),
  description: z.string().min(2).max(800),
});

const PlanoSchema = z.object({
  resumoMaterial: z.string().max(600).optional(),
  sessoes: z.array(SessaoSchema).min(1).max(20),
});

export type SessaoEstudo = z.infer<typeof SessaoSchema>;

const PLANO_SYSTEM = `Você é um tutor pedagógico especialista em crianças neurodivergentes brasileiras. Sua missão: gerar um plano de estudos diário e realista até a data da prova.

REGRAS:
- Distribua o conteúdo em sessões curtas (20-40 min cada), uma por dia, começando AMANHÃ até o dia ANTERIOR à prova.
- Sempre responda APENAS com JSON válido neste schema EXATO:
  {"resumoMaterial":"...","sessoes":[{"scheduled_date":"YYYY-MM-DD","title":"...","description":"..."}]}
- Se receber uma FOTO de caderno/livro/lista, leia o conteúdo da imagem e use ESSES tópicos para montar o plano (citando o que viu).
- title curto (ex: "Estudo: Frações - parte 1"). description com 1-3 frases: o que revisar + uma dica prática (mapa mental, flashcard, exemplo do dia a dia).
- Português do Brasil, vocabulário adequado à idade.
- Não inclua markdown, comentários ou texto fora do JSON.`;

export const gerarPlanoEstudosMissaoProva = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => PlanoEstudosInputSchema.parse(input))
  .handler(async ({ data }) => {
    const hasImage = !!data.fotoBase64;
    const imageUrl = hasImage
      ? data.fotoBase64!.startsWith("data:")
        ? data.fotoBase64!
        : `data:image/jpeg;base64,${data.fotoBase64}`
      : null;

    const textPrompt = `Matéria: ${data.materia}
Data da prova: ${data.dataProva}
Dias disponíveis até a prova: ${data.diasAteProva}${data.idade ? `\nIdade do aluno: ${data.idade} anos` : ""}${data.serie ? `\nSérie: ${data.serie}` : ""}
Conteúdos informados pela família: ${data.conteudos?.length ? data.conteudos.join(", ") : "(não informados — extraia da foto ou da matéria)"}
Observações: ${data.observacoes || "(nenhuma)"}

${hasImage ? "Leia a FOTO do material escolar anexada e use o conteúdo que aparece nela para montar o plano." : ""}
Gere o plano de estudos JSON (uma sessão por dia, até a véspera da prova).`;

    const userContent: unknown = hasImage
      ? [
          { type: "text", text: textPrompt },
          { type: "image_url", image_url: { url: imageUrl } },
        ]
      : textPrompt;

    const r = await chatCompletionFallback({
      messages: [
        { role: "system", content: PLANO_SYSTEM },
        { role: "user", content: userContent },
      ],
      max_tokens: 1800,
      temperature: 0.4,
      json: true,
      // Gemini 3 Flash já é multimodal; no Groq usa scout p/ visão.
      groqModel: hasImage ? "meta-llama/llama-4-scout-17b-16e-instruct" : "llama-3.3-70b-versatile",
      label: "plano-estudos",
    });
    if (!r.ok) return { ok: false as const, error: r.motivo, plano: null };

    const parsed = tryExtractJson(r.text);
    const safe = PlanoSchema.safeParse(parsed);
    if (!safe.success) {
      console.error("[plano-estudos] JSON inválido", safe.error.message);
      return { ok: false as const, error: "JSON inválido da IA", plano: null };
    }
    return { ok: true as const, plano: safe.data, error: null };
  });

// ============================================================
// MISSÃO TAREFA — analisa tarefa de casa (texto ou foto)
// ============================================================

const TarefaInputSchema = z.object({
  titulo: z.string().trim().min(1).max(120),
  materia: z.string().trim().max(60).optional(),
  enunciado: z.string().trim().max(2000).optional(),
  fotoBase64: z.string().max(8_000_000).optional(),
  crianca: z
    .object({
      nome: z.string().max(60).optional(),
      idade: z.number().int().min(2).max(18).optional(),
      serie: z.string().max(40).optional(),
      diagnostico: z.string().max(200).optional(),
      hiperfoco: z.string().max(200).optional(),
      hyperfocusList: z.array(z.string().max(60)).max(10).optional(),
      tempoAtencaoMin: z.number().int().min(1).max(120).optional(),
    })
    .optional(),
});

const TarefaDicasSchema = z.object({
  tema: z.string().min(2).max(120),
  o_que_a_tarefa_pede: z.string().min(2).max(400),
  dicas: z.array(z.string().min(2).max(400)).length(3),
  pergunta_pra_pensar: z.string().min(2).max(280),
  sugestao_visual: z.string().min(2).max(280),
});

export type TarefaDicas = z.infer<typeof TarefaDicasSchema>;

const TAREFA_SYSTEM = `Você é o Professor Brilho ajudando uma criança brasileira neurodivergente com a TAREFA DE CASA dela.

REGRA DE OURO INVIOLÁVEL: NUNCA entregue a resposta pronta. Seu papel é DAR PISTAS pra ela chegar sozinha. Se a tarefa é "quanto é 7+8", você NÃO diz "15". Você diz "comece somando 7+3 pra fechar uma dezena…".

VOCÊ RECEBE: o título/enunciado da tarefa (ou uma FOTO do caderno) e o PERFIL NEURODIVERGENTE da criança (diagnóstico, hiperfoco favorito, dificuldades).

VOCÊ DEVE: responder APENAS um JSON válido neste schema EXATO:
{
  "tema": "tema/assunto curto da tarefa",
  "o_que_a_tarefa_pede": "1 frase em linguagem infantil explicando o que a criança precisa fazer",
  "dicas": [
    "DICA 1: pista bem leve, só pra dar coragem (não revela quase nada)",
    "DICA 2: caminho do meio, mostra um passo concreto",
    "DICA 3: quase a resposta, mas a criança ainda precisa completar o último pedaço"
  ],
  "pergunta_pra_pensar": "1 pergunta socrática que faz a criança pensar",
  "sugestao_visual": "Sugestão de desenho/objeto/exemplo do hiperfoco da criança pra visualizar (ex: 'imagine 7 dinossauros + 8 dinossauros'). Se a criança tem hiperfoco, USE ELE aqui."
}

REGRAS:
- Português do Brasil, frases CURTAS (máx. 2 linhas cada).
- USE O HIPERFOCO da criança nos exemplos sempre que possível (é o que faz ela engajar).
- Se houver diagnóstico TDAH: divida em passos micro. TEA: instruções literais. Dislexia: pistas visuais e fonéticas, sem trocadilhos.
- Sem markdown, sem crase, sem texto fora do JSON.`;

function montarContextoCrianca(row: Record<string, unknown> | null): string {
  if (!row) return "";
  const nome = (row.nome as string) || "a criança";
  const idade = row.idade as number | null;
  const serie = (row.serie as string) || null;
  const diag = (row.diagnostico as string) || null;
  const hiperfoco = (row.hiperfoco as string) || null;
  const hyperList = (row.hyperfocus_list as string[] | null) || null;
  const tempo = row.tempo_atencao_min as number | null;

  const partes: string[] = [];
  partes.push(`Aluno: ${nome}${idade ? `, ${idade} anos` : ""}${serie ? `, ${serie}` : ""}.`);
  if (diag) partes.push(`Diagnóstico/perfil: ${diag}.`);
  const focos = hyperList?.length ? hyperList.join(", ") : hiperfoco;
  if (focos) partes.push(`Hiperfoco favorito (USE NOS EXEMPLOS): ${focos}.`);
  if (tempo) partes.push(`Tempo de atenção: ~${tempo} min — seja conciso.`);
  return partes.join(" ");
}

export const analisarTarefaCasa = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => TarefaInputSchema.parse(input))
  .handler(async ({ data }) => {
    const c = data.crianca;
    const ctxCrianca = montarContextoCrianca(
      c
        ? {
            nome: c.nome,
            idade: c.idade,
            serie: c.serie,
            diagnostico: c.diagnostico,
            hiperfoco: c.hiperfoco,
            hyperfocus_list: c.hyperfocusList,
            tempo_atencao_min: c.tempoAtencaoMin,
          }
        : null,
    );

    const hasImage = !!data.fotoBase64;
    const imageUrl = hasImage
      ? data.fotoBase64!.startsWith("data:")
        ? data.fotoBase64!
        : `data:image/jpeg;base64,${data.fotoBase64}`
      : null;

    const textPrompt = `PERFIL DA CRIANÇA: ${ctxCrianca || "(não informado)"}

TAREFA: ${data.titulo}${data.materia ? `\nMatéria: ${data.materia}` : ""}${data.enunciado ? `\nEnunciado: ${data.enunciado}` : ""}
${hasImage ? "\nLeia a FOTO do caderno em anexo e use o que aparece nela como enunciado." : ""}

Gere o JSON com as 3 dicas progressivas (NUNCA a resposta) usando o hiperfoco da criança no exemplo visual.`;

    const userContent: unknown = hasImage
      ? [
          { type: "text", text: textPrompt },
          { type: "image_url", image_url: { url: imageUrl } },
        ]
      : textPrompt;

    const r = await chatCompletionFallback({
      messages: [
        { role: "system", content: TAREFA_SYSTEM },
        { role: "user", content: userContent },
      ],
      max_tokens: 1100,
      temperature: 0.5,
      json: true,
      groqModel: hasImage ? "meta-llama/llama-4-scout-17b-16e-instruct" : "llama-3.3-70b-versatile",
      label: "missao-tarefa",
    });
    if (!r.ok) return { ok: false as const, error: r.motivo, resultado: null };

    const parsed = tryExtractJson(r.text);
    const safe = TarefaDicasSchema.safeParse(parsed);
    if (!safe.success) {
      console.error("[missao-tarefa] JSON inválido", safe.error.message);
      return { ok: false as const, error: "JSON inválido da IA", resultado: null };
    }
    return { ok: true as const, resultado: safe.data, error: null };
  });


// ============================================================
// ANÁLISE DO TRABALHO ESCOLAR — Missão Trabalho
// ============================================================

const AnaliseTrabalhoInput = z.object({
  titulo: z.string().max(200).default(""),
  tema: z.string().max(200).default(""),
  materia: z.string().max(80).optional().nullable(),
  instrucoesProfessor: z.string().max(2000).optional().nullable(),
  texto: z.string().min(1).max(12000),
  idade: z.number().int().min(4).max(18).optional(),
  serie: z.string().max(40).optional(),
});

export const analisarTrabalho = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AnaliseTrabalhoInput.parse(input))
  .handler(async ({ data }) => {
    const sys = `Você é o Professor Brilho, tutor pedagógico para crianças brasileiras neurodivergentes.
Analise o trabalho escolar de uma criança comparando com o que o professor pediu.
Devolva em português do Brasil, tom acolhedor, frases curtas, EXATAMENTE neste formato Markdown:

## ✅ O que está bom
- (3 a 5 pontos curtos e específicos)

## ✏️ O que precisa melhorar
- (3 a 5 pontos com exemplo concreto do texto, sem reescrever tudo)

## 💡 Dicas pra deixar nota máxima
- (3 a 5 dicas práticas e acionáveis)

## 🎯 Nota geral
(uma frase + nota de 0 a 10)

Nunca reescreva o trabalho inteiro pela criança. Aponte e ensine.`;

    const user = [
      `Matéria: ${data.materia || "não informada"}`,
      `Tema: ${data.tema || "não informado"}`,
      `Título: ${data.titulo || "(sem título)"}`,
      data.serie ? `Série: ${data.serie}` : "",
      data.idade ? `Idade: ${data.idade} anos` : "",
      "",
      `INSTRUÇÕES DO PROFESSOR:`,
      data.instrucoesProfessor?.trim() ||
        "(não fornecidas — avalie pelo padrão esperado para a série/idade: introdução, desenvolvimento, conclusão, fontes, clareza, ortografia, coerência com o tema)",
      "",
      `TRABALHO DA CRIANÇA:`,
      data.texto,
    ]
      .filter(Boolean)
      .join("\n");

    const r = await chatCompletionFallback({
      messages: [
        { role: "system", content: sys },
        { role: "user", content: user },
      ],
      max_tokens: 900,
      temperature: 0.4,
      label: "analisar-trabalho",
    });
    if (!r.ok) return { ok: false as const, error: r.motivo, analise: null };
    return { ok: true as const, analise: r.text, error: null };
  });
