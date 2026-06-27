import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  topic: z.string().trim().min(2).max(140),
  idade: z.number().int().min(3).max(18).optional(),
  serie: z.string().max(40).optional(),
});

const StepSchema = z.object({
  type: z.enum(["explanation", "example", "exercise", "tip", "premium_tip"]),
  text: z.string().min(12).max(700),
  difficulty: z.enum(["basic", "intermediate", "advanced"]).optional(),
  content: z
    .object({
      question: z.string().max(260).optional(),
      options: z.array(z.string().max(90)).max(4).optional(),
      answer: z.union([z.string(), z.number()]).optional(),
      explanation: z.string().max(420).optional(),
    })
    .optional(),
});

const ReforcoLessonSchema = z.object({
  title: z.string().min(3).max(120),
  topic: z.string().min(2).max(140),
  category: z.string().min(2).max(60),
  explanation: z.string().min(30).max(700),
  levels: z.object({
    basic: z.array(StepSchema).min(5).max(8),
    intermediate: z.array(StepSchema).min(5).max(8),
    advanced: z.array(StepSchema).min(4).max(8),
  }),
  premiumTips: z.array(z.string().min(10).max(260)).min(3).max(6),
  activityId: z.string().optional(),
});

const SYSTEM = `Você é Professor Brilho, um tutor pedagógico infantil.

Sua missão é gerar UMA AULA DE REFORÇO DE VERDADE, não texto genérico.

REGRAS ABSOLUTAS:
- Fale diretamente com a criança, não com pais.
- Explique passo a passo, como professor na lousa.
- Use exemplos reais do tema informado: contas reais, palavras reais, mini-textos reais, perguntas reais.
- Proibido escrever frases vagas: "vamos aprender", "use objetos do cotidiano", "pratique bastante", "conceitos fundamentais".
- Cada nível precisa ter: explicação concreta, exemplo resolvido, prática guiada, exercício com resposta, correção explicada.
- Em matemática: mostre cálculo e por que funciona.
- Em leitura/português: mostre letra/som/sílaba/palavra/frase ou mini-texto, conforme o tema.
- Em atenção/memória: transforme em exercício escolar concreto, não conselho.

FORMATO OBRIGATÓRIO: responda APENAS JSON válido com:
{
  "title": "...",
  "topic": "...",
  "category": "Matemática|Português|Alfabetização|Atenção|Geral",
  "explanation": "resumo concreto da aula",
  "levels": {
    "basic": [
      {"type":"explanation","text":"..."},
      {"type":"example","text":"..."},
      {"type":"exercise","text":"...","content":{"question":"...","options":["..."],"answer":"...","explanation":"..."}}
    ],
    "intermediate": [...],
    "advanced": [...]
  },
  "premiumTips": ["dica para a criança fazer agora", "..."]
}`;

type ReforcoLessonIA = z.infer<typeof ReforcoLessonSchema>;

function buildFallbackReforco(data: z.infer<typeof InputSchema>): ReforcoLessonIA {
  const topic = data.topic.trim();
  const lower = topic.toLowerCase();
  const isMath = /matem|conta|soma|subtra|multiplica|divis|fraç|frac|tabuada|número|numero|problema/.test(lower);
  const isPort = /port|leitura|texto|frase|palavra|sílaba|silaba|verbo|ortografia|escrita|interpreta/.test(lower);
  const category = isMath ? "Matemática" : isPort ? "Português" : "Geral";

  if (isMath) {
    const n = Number(topic.match(/\d+/)?.[0] ?? 6);
    return {
      title: `Aula de verdade: ${topic}`,
      topic,
      category,
      explanation: `Hoje você vai resolver ${topic} sem chute: ler o pedido, separar os números, montar a conta e conferir a resposta dentro da história.`,
      levels: {
        basic: [
          { type: "explanation", text: `Quando aparece uma questão de ${topic}, a primeira missão é descobrir se a quantidade aumenta, diminui, forma grupos iguais ou precisa ser repartida.` },
          { type: "example", text: `Exemplo: “Tenho ${n} caixas com 3 lápis em cada.” São grupos iguais, então fazemos ${n} × 3 = ${n * 3}.` },
          { type: "explanation", text: `Se fosse “tinha ${n * 3} lápis e perdi 3”, aí seria subtração: ${n * 3} - 3 = ${n * 3 - 3}. A palavra da história muda a conta.` },
          { type: "exercise", text: `Resolva olhando a palavra-chave: “ganhou” aumenta ou diminui?`, content: { question: `Lia tinha ${n} adesivos e ganhou 4. Quantos tem agora?`, options: [String(n + 4), String(Math.max(0, n - 4)), String(n * 4)], answer: String(n + 4), explanation: `Ganhou indica juntar: ${n} + 4 = ${n + 4}.` } },
          { type: "tip", text: "Antes de fazer a conta, diga em voz alta: estou juntando, tirando, formando grupos ou repartindo?" },
        ],
        intermediate: [
          { type: "explanation", text: `Agora vamos resolver em duas etapas: primeiro descubra a operação; depois calcule devagar e confira a frase final.` },
          { type: "example", text: `Exemplo resolvido: 4 pacotes com ${n} balas. Cada pacote tem ${n}; então 4 grupos de ${n}: ${n} + ${n} + ${n} + ${n} = ${4 * n}.` },
          { type: "exercise", text: "Escolha a conta que combina com grupos iguais.", content: { question: `3 sacolas com ${n} maçãs em cada. Qual conta resolve?`, options: [`3 × ${n}`, `3 + ${n}`, `${n} - 3`], answer: `3 × ${n}`, explanation: `“Em cada” mostra grupos iguais: 3 grupos de ${n}.` } },
          { type: "example", text: `Conferência: se cada sacola tem ${n}, o resultado precisa ser maior que ${n}. Por isso ${3 * n} faz sentido.` },
          { type: "tip", text: "Quando aparecer “cada”, pense em grupos iguais." },
        ],
        advanced: [
          { type: "explanation", text: "No desafio, além de acertar, você precisa explicar o caminho: dados, operação e conclusão." },
          { type: "example", text: `Modelo: “Eu vi ${n} em cada grupo e 5 grupos. Usei multiplicação porque são grupos iguais. ${n} × 5 = ${n * 5}.”` },
          { type: "exercise", text: "Resolva e explique.", content: { question: `Uma turma fez 5 cartazes com ${n} estrelas em cada. Quantas estrelas há ao todo?`, options: [String(5 * n), String(5 + n), String(Math.max(0, n - 5))], answer: String(5 * n), explanation: `São 5 grupos de ${n}: 5 × ${n} = ${5 * n}.` } },
          { type: "example", text: `Como conferir: ${5 * n} é maior que ${n}, porque juntamos 5 grupos. Se desse menos que ${n}, teria algo errado.` },
          { type: "tip", text: "Uma resposta completa termina com unidade: estrelas, lápis, pontos, reais." },
        ],
      },
      premiumTips: [
        "Leia o problema duas vezes: uma para entender a história e outra para achar os números.",
        "Escreva a conta antes de calcular.",
        "Depois do resultado, complete a frase: a resposta é ___ .",
      ],
    };
  }

  if (isPort) {
    return {
      title: `Aula de verdade: ${topic}`,
      topic,
      category,
      explanation: `Hoje você vai aprender ${topic} lendo uma frase real, procurando pistas e explicando a resposta com palavras do texto.`,
      levels: {
        basic: [
          { type: "explanation", text: "Para entender um texto, não comece chutando. Primeiro leia a frase inteira; depois procure palavras que mostram motivo, tempo, lugar ou oposição." },
          { type: "example", text: "Frase: “A menina guardou o caderno porque começou a chover.” A palavra “porque” mostra o motivo." },
          { type: "example", text: "Pergunta: por que ela guardou o caderno? Resposta: porque começou a chover. A resposta saiu do próprio texto." },
          { type: "exercise", text: "Ache a pista na frase.", content: { question: "Em “Pedro correu, mas chegou atrasado”, qual palavra mostra oposição?", options: ["mas", "Pedro", "correu"], answer: "mas", explanation: "“Mas” mostra que a segunda parte quebra a expectativa da primeira." } },
          { type: "tip", text: "Quando responder leitura, mostre a palavra do texto que provou sua resposta." },
        ],
        intermediate: [
          { type: "explanation", text: "Agora vamos separar ideia principal e detalhe. Ideia principal é sobre o que a frase ou parágrafo fala; detalhe explica melhor essa ideia." },
          { type: "example", text: "Mini-texto: “O cachorro de Ana fugiu pelo portão. Ela chamou o vizinho para ajudar.” Ideia principal: Ana procura o cachorro. Detalhe: ele fugiu pelo portão." },
          { type: "exercise", text: "Identifique o motivo.", content: { question: "“A flor murchou porque ficou sem água.” Qual foi a causa?", options: ["ficou sem água", "a flor", "murchou"], answer: "ficou sem água", explanation: "A causa vem depois de “porque”." } },
          { type: "example", text: "Boa resposta: “A causa foi ficar sem água, porque essa informação aparece depois da palavra porque.”" },
          { type: "tip", text: "Use esta frase: “Eu sei disso porque no texto aparece...”" },
        ],
        advanced: [
          { type: "explanation", text: "No nível avançado, você vai comparar duas pistas do texto para responder com mais segurança." },
          { type: "example", text: "Se o texto diz “estava nublado” e depois “pegou o guarda-chuva”, as duas pistas indicam possibilidade de chuva." },
          { type: "exercise", text: "Responda pela pista.", content: { question: "“O céu escureceu, então Marta fechou a janela.” Por que ela fechou?", options: ["porque parecia que ia chover", "porque queria dormir", "porque a janela quebrou"], answer: "porque parecia que ia chover", explanation: "O céu escurecido é a pista que explica a ação." } },
          { type: "example", text: "Resposta completa: “Marta fechou a janela porque o céu escureceu, uma pista de que poderia chover.”" },
          { type: "tip", text: "Não invente informação: resposta boa nasce do texto." },
        ],
      },
      premiumTips: [
        "Leia apontando com o dedo para não pular palavras.",
        "Circule palavras como porque, mas, então, quando e onde.",
        "Responda sempre com uma prova do texto.",
      ],
    };
  }

  return {
    title: `Aula de verdade: ${topic}`,
    topic,
    category,
    explanation: `Hoje você vai estudar ${topic} com um método simples: observar, entender a regra, ver exemplo e praticar com correção.`,
    levels: {
      basic: [
        { type: "explanation", text: `Comece observando ${topic}: o que aparece, que palavras são importantes e qual pergunta precisa ser respondida.` },
        { type: "example", text: `Exemplo: se o tema é ${topic}, escreva três pistas que você consegue ver ou ler antes de responder.` },
        { type: "exercise", text: "Treino de observação", content: { question: "Qual é o primeiro passo para aprender um tema novo?", options: ["observar as pistas", "chutar rápido", "pular a explicação"], answer: "observar as pistas", explanation: "Observar evita resposta no impulso e ajuda a entender." } },
        { type: "example", text: "Depois de observar, explique com suas palavras: “Eu percebi que... por isso acho que...”." },
        { type: "tip", text: "Uma resposta boa mostra o caminho do pensamento, não só o resultado." },
      ],
      intermediate: [
        { type: "explanation", text: `Agora transforme ${topic} em passos: 1) o que é; 2) como funciona; 3) exemplo; 4) como conferir.` },
        { type: "example", text: "Modelo: conceito → exemplo → tentativa → correção. Esse ciclo ensina de verdade." },
        { type: "exercise", text: "Organize a aprendizagem", content: { question: "Qual sequência ajuda mais?", options: ["entender, ver exemplo, praticar, corrigir", "decorar sem entender", "copiar sem ler"], answer: "entender, ver exemplo, praticar, corrigir", explanation: "Essa sequência constrói aprendizagem passo a passo." } },
        { type: "tip", text: "Se errar, procure em qual passo o erro nasceu." },
        { type: "example", text: "Correção inteligente: “errei porque pulei a pista principal; vou reler e tentar de novo.”" },
      ],
      advanced: [
        { type: "explanation", text: "No desafio, explique o conteúdo para outra pessoa. Quem consegue ensinar mostra que entendeu." },
        { type: "example", text: `Modelo de explicação para ${topic}: “primeiro eu observo o tema, depois encontro a pista principal e por fim explico com um exemplo.”` },
        { type: "exercise", text: "Explique o tema", content: { question: `Complete: ${topic} é importante porque...`, options: ["ajuda a entender e resolver situações", "não serve para nada", "só precisa copiar"], answer: "ajuda a entender e resolver situações", explanation: "Aprender é usar o conhecimento para pensar melhor." } },
        { type: "tip", text: "Fale em voz alta: “primeiro..., depois..., por isso...”" },
        { type: "example", text: "Resposta completa: “Eu observei a pista, usei a regra e conferi a resposta.”" },
      ],
    },
    premiumTips: [
      "Estude em blocos pequenos: explicação, exemplo e uma atividade.",
      "Corrigir o erro faz parte da aula, não é fracasso.",
      "Explique o que aprendeu em uma frase curta.",
    ],
  };
}

function prompt(data: z.infer<typeof InputSchema>) {
  return `Tema pedido: ${data.topic}
Idade: ${data.idade ?? "não informada"}
Série: ${data.serie ?? "não informada"}

Gere a aula completa com conteúdo específico e atividades corrigidas.`;
}

function extractJson(raw: string) {
  let txt = raw.trim();
  if (txt.startsWith("```")) txt = txt.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
  const first = txt.indexOf("{");
  const last = txt.lastIndexOf("}");
  if (first >= 0 && last > first) txt = txt.slice(first, last + 1);
  return JSON.parse(txt);
}

export const gerarAulaReforco = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: true as const, error: "GROQ_API_KEY ausente; usando aula estruturada local", lesson: buildFallbackReforco(data) };
    }

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: SYSTEM },
            { role: "user", content: prompt(data) },
          ],
          temperature: 0.55,
          max_tokens: 4200,
          response_format: { type: "json_object" },
        }),
      });

      if (!res.ok) {
        const t = await res.text();
        console.error("[gerarAulaReforco] groq", res.status, t.slice(0, 300));
        return { ok: true as const, error: `Groq ${res.status}; usando aula estruturada local`, lesson: buildFallbackReforco(data) };
      }

      const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
      const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!raw) return { ok: true as const, error: "Resposta vazia; usando aula estruturada local", lesson: buildFallbackReforco(data) };
      const lesson = ReforcoLessonSchema.parse(extractJson(raw));
      return { ok: true as const, lesson, error: null };
    } catch (e) {
      console.error("[gerarAulaReforco]", e);
      return {
        ok: true as const,
        error: e instanceof Error ? `${e.message}; usando aula estruturada local` : "Falha ao gerar aula; usando aula estruturada local",
        lesson: buildFallbackReforco(data),
      };
    }
  });