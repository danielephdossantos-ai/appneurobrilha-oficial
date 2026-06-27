import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["system", "user", "assistant"]),
  content: z.string().min(1).max(8000),
});

const InputSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(40),
  modulo: z.enum([
    "escola-brilha",
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
  "escola-brilha":
    "Você está ajudando dentro do módulo Escola Brilha (aulas BNCC). Explique a habilidade em frases curtas, use exemplos visuais e proponha 1 desafio prático.",
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

type GroqMsg = { role: "system" | "user" | "assistant"; content: string };

export const askProfessorBrilho = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return {
        ok: false as const,
        error:
          "GROQ_API_KEY ausente. Adicione a chave nas Secrets do projeto.",
        reply: null as string | null,
      };
    }

    const messages: GroqMsg[] = [
      { role: "system", content: buildSystemPrompt(data) },
      ...data.messages,
    ];

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages,
            temperature: 0.6,
            max_tokens: 600,
            top_p: 0.9,
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq] HTTP", res.status, errText.slice(0, 400));
        return {
          ok: false as const,
          error: `Groq ${res.status}: ${errText.slice(0, 160)}`,
          reply: null,
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const reply = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!reply) {
        return { ok: false as const, error: "Resposta vazia", reply: null };
      }
      return { ok: true as const, reply, error: null };
    } catch (e) {
      console.error("[groq] fetch", e);
      return {
        ok: false as const,
        error: "Falha de rede ao chamar Groq",
        reply: null,
      };
    }
  });

// ============================================================
// PROFESSOR CONSTRUTOR DE AULAS — Escola Brilha (1º ao 9º ano)
// Gera JSON estruturado para as 9 telas do app a partir de BNCC.
// ============================================================

const AulaInputSchema = z.object({
  bnccCode: z.string().min(3).max(20),
  descricao: z.string().min(5).max(1200),
  idade: z.number().int().min(5).max(16),
  serie: z.string().max(20).optional(),
  componente: z.string().max(60).optional(),
});

const AULA_SYSTEM_PROMPT = `Você é um Designer Pedagógico e Professor especialista em Ensino Fundamental alinhado à BNCC. Sua missão é transformar um código de habilidade abstrato em uma aula viva, interativa e extremamente prática para crianças.

Você recebe [Código BNCC], [Descrição da Habilidade] e [Idade do Aluno] e gera a aula seguindo RIGIDAMENTE estas 4 partes:

1. INTRODUÇÃO VISUAL E LÚDICA: comece com uma metáfora do mundo real da criança (frações → fatias de pizza; história → máquina do tempo). Nunca teoria seca.
2. PASSO A PASSO da montagem do conceito/conta: visual e literal, em micro-passos numerados ("Primeiro coloque o número maior em cima...").
3. EXEMPLO PRÁTICO do dia a dia: um problema real e divertido onde a habilidade aparece.
4. DESAFIO DE FIXAÇÃO: 1 pergunta interativa baseada no exemplo, com 3 opções e a correta indicada.

REGRAS DE FORMATAÇÃO OBRIGATÓRIAS:
- Linguagem acolhedora, divertida, clara, adaptada à idade.
- Sem blocos gigantes de texto. Parágrafos curtos para tela de celular (máx. 2 linhas cada).
- Português do Brasil. Sem jargão acadêmico.
- Responda ESTRITAMENTE em JSON válido (sem markdown, sem \`\`\`), com este schema exato para preencher as 9 telas do app:

{
  "titulo": "string curto",
  "metafora": "string (1-2 frases ligando o conceito a algo do mundo real)",
  "telas": {
    "missao": { "titulo": "string", "texto": "string curto" },
    "exploracao": { "titulo": "string", "texto": "string", "imagemSugestao": "string" },
    "explicacao": { "titulo": "string", "paragrafos": ["string", "string", "string"] },
    "passoAPasso": { "titulo": "string", "passos": ["passo 1", "passo 2", "passo 3", "passo 4"] },
    "exemploAplicado": { "titulo": "string", "enunciado": "string", "resolucao": ["string", "string"] },
    "atividadeGuiada": { "titulo": "string", "pergunta": "string", "dica": "string" },
    "desafio": {
      "titulo": "string",
      "enunciado": "string",
      "opcoes": ["A) ...", "B) ...", "C) ..."],
      "respostaCorreta": "A" | "B" | "C",
      "explicacaoResposta": "string"
    },
    "revisao": { "titulo": "string", "pontosChave": ["string", "string", "string"] },
    "conclusao": { "titulo": "string", "mensagemFinal": "string" }
  }
}

Não inclua nenhum texto fora do JSON. Não use crase nem markdown.`;

const s = (min = 1, max = 600) => z.string().trim().min(min).max(max);

export const AulaSchema = z.object({
  titulo: s(2, 120),
  metafora: s(5, 400),
  telas: z.object({
    missao: z.object({ titulo: s(2, 80), texto: s(2, 400) }),
    exploracao: z.object({
      titulo: s(2, 80),
      texto: s(2, 600),
      imagemSugestao: s(2, 200),
    }),
    explicacao: z.object({
      titulo: s(2, 80),
      paragrafos: z.array(s(2, 400)).min(2).max(6),
    }),
    passoAPasso: z.object({
      titulo: s(2, 80),
      passos: z.array(s(2, 300)).min(2).max(8),
    }),
    exemploAplicado: z.object({
      titulo: s(2, 80),
      enunciado: s(2, 500),
      resolucao: z.array(s(2, 400)).min(1).max(6),
    }),
    atividadeGuiada: z.object({
      titulo: s(2, 80),
      pergunta: s(2, 400),
      dica: s(2, 300),
    }),
    desafio: z.object({
      titulo: s(2, 80),
      enunciado: s(2, 500),
      opcoes: z.array(s(1, 200)).length(3),
      respostaCorreta: z.enum(["A", "B", "C"]),
      explicacaoResposta: s(2, 400),
    }),
    revisao: z.object({
      titulo: s(2, 80),
      pontosChave: z.array(s(2, 300)).min(2).max(6),
    }),
    conclusao: z.object({
      titulo: s(2, 80),
      mensagemFinal: s(2, 400),
    }),
  }),
});

export type Aula = z.infer<typeof AulaSchema>;

function extractJson(raw: string): unknown {
  let cleaned = raw.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();
  const start = cleaned.search(/[{[]/);
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("JSON não encontrado");
  cleaned = cleaned.substring(start, end + 1);
  try {
    return JSON.parse(cleaned);
  } catch {
    cleaned = cleaned
      .replace(/,\s*}/g, "}")
      .replace(/,\s*]/g, "]")
      .replace(/[\x00-\x1F\x7F]/g, "");
    return JSON.parse(cleaned);
  }
}

function parseAndValidateAula(raw: string): Aula {
  const parsed = extractJson(raw);
  const result = AulaSchema.safeParse(parsed);
  if (!result.success) {
    const issues = result.error.issues
      .slice(0, 3)
      .map((i) => `${i.path.join(".")}: ${i.message}`)
      .join(" | ");
    throw new Error(`Schema inválido: ${issues}`);
  }
  return result.data;
}


export const gerarAulaGroq = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AulaInputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", aulaJson: null };
    }

    const userPrompt = `Código BNCC: ${data.bnccCode}
Descrição da Habilidade: ${data.descricao}
Idade do Aluno: ${data.idade} anos${data.serie ? `\nSérie: ${data.serie}` : ""}${data.componente ? `\nComponente: ${data.componente}` : ""}

Gere a aula completa em JSON conforme o schema definido.`;

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: AULA_SYSTEM_PROMPT },
              { role: "user", content: userPrompt },
            ],
            temperature: 0.7,
            max_tokens: 2400,
            top_p: 0.9,
            response_format: { type: "json_object" },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:aula] HTTP", res.status, errText.slice(0, 400));
        return {
          ok: false as const,
          error: `Groq ${res.status}: ${errText.slice(0, 160)}`,
          aulaJson: null,
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!raw) {
        return { ok: false as const, error: "Resposta vazia", aulaJson: null };
      }

      const aula = parseAndValidateAula(raw);
      return { ok: true as const, aulaJson: JSON.stringify(aula), error: null };
    } catch (e) {
      console.error("[groq:aula]", e);
      return {
        ok: false as const,
        error: e instanceof Error ? e.message : "Falha ao gerar aula",
        aulaJson: null,
      };
    }
  });

// ============================================================
// AULA DINÂMICA — Groq llama-3.1-8b-instant + cache Supabase
// Gera aula a partir de um código BNCC, com termos de busca de
// imagens por tela e elementos interativos. Cacheia em
// public.aulas_geradas_ia para não regenerar de graça.
// ============================================================

const AulaDinamicaInputSchema = z.object({
  bnccCode: z.string().trim().min(3).max(20),
  descricao: z.string().trim().min(5).max(1200),
  idade: z.number().int().min(5).max(16).optional(),
  serie: z.string().max(20).optional(),
  componente: z.string().max(60).optional(),
  force: z.boolean().optional(),
});

const InteractiveItemSchema = z.object({
  label: s(1, 40),
  termoBusca: s(2, 80),
  explicacao: s(2, 240),
});

export const AulaDinamicaSchema = z.object({
  titulo: s(2, 120),
  metafora: s(5, 400),
  telas: z.object({
    missao: z.object({
      titulo: s(2, 80),
      texto: s(2, 400),
      termoBusca: s(2, 80),
    }),
    exploracao: z.object({
      titulo: s(2, 80),
      texto: s(2, 600),
      termoBusca: s(2, 80),
      interativos: z.array(InteractiveItemSchema).min(2).max(5),
    }),
    explicacao: z.object({
      titulo: s(2, 80),
      paragrafos: z.array(s(2, 400)).min(2).max(6),
      termoBusca: s(2, 80),
    }),
    passoAPasso: z.object({
      titulo: s(2, 80),
      passos: z.array(s(2, 300)).min(2).max(8),
      termoBusca: s(2, 80),
    }),
    exemploAplicado: z.object({
      titulo: s(2, 80),
      enunciado: s(2, 500),
      resolucao: z.array(s(2, 400)).min(1).max(6),
      termoBusca: s(2, 80),
    }),
    desafio: z.object({
      titulo: s(2, 80),
      enunciado: s(2, 500),
      opcoes: z.array(s(1, 200)).length(3),
      respostaCorreta: z.enum(["A", "B", "C"]),
      explicacaoResposta: s(2, 400),
      termoBusca: s(2, 80),
    }),
    conclusao: z.object({
      titulo: s(2, 80),
      mensagemFinal: s(2, 400),
      termoBusca: s(2, 80),
    }),
  }),
});

export type AulaDinamica = z.infer<typeof AulaDinamicaSchema>;

const AULA_DINAMICA_PROMPT = `Você é Designer Pedagógico BNCC. Recebe [Código BNCC], [Descrição da Habilidade] e [Idade]. Gere uma aula viva para crianças neurodivergentes brasileiras.

REGRAS:
- Linguagem PT-BR acolhedora, frases curtas (máx 2 linhas).
- Metáfora do mundo real (frações = pizza, etc.).
- Cada tela traz um "termoBusca" em INGLÊS simples (1-4 palavras) para buscar imagem ilustrativa (ex.: "red apple", "pizza slices", "ancient egypt").
- "interativos" da tela exploracao: 2 a 5 elementos clicáveis. Cada um com label PT-BR (palavra curta), termoBusca em inglês simples (objeto único), e explicação curta que aparece ao clicar.
- Desafio: 3 opções (A/B/C), respostaCorreta sendo "A", "B" ou "C".
- Responda ESTRITAMENTE JSON válido (sem markdown, sem crase) com este schema:

{
  "titulo": "string",
  "metafora": "string",
  "telas": {
    "missao": { "titulo": "string", "texto": "string", "termoBusca": "english search" },
    "exploracao": {
      "titulo": "string", "texto": "string", "termoBusca": "english search",
      "interativos": [
        { "label": "Maçã", "termoBusca": "red apple", "explicacao": "..." }
      ]
    },
    "explicacao": { "titulo": "string", "paragrafos": ["...","..."], "termoBusca": "english search" },
    "passoAPasso": { "titulo": "string", "passos": ["...","..."], "termoBusca": "english search" },
    "exemploAplicado": { "titulo": "string", "enunciado": "string", "resolucao": ["...","..."], "termoBusca": "english search" },
    "desafio": { "titulo": "string", "enunciado": "string", "opcoes": ["A) ...","B) ...","C) ..."], "respostaCorreta": "A", "explicacaoResposta": "string", "termoBusca": "english search" },
    "conclusao": { "titulo": "string", "mensagemFinal": "string", "termoBusca": "english search" }
  }
}`;

function buildFallbackAulaDinamica(data: z.infer<typeof AulaDinamicaInputSchema>): AulaDinamica {
  const desc = data.descricao || `Habilidade ${data.bnccCode}`;
  const assunto = desc.length > 92 ? `${desc.slice(0, 89)}...` : desc;
  const comp = (data.componente ?? "").toLowerCase();
  const code = data.bnccCode.toUpperCase();
  const isMath = code.includes("MA") || comp.includes("mat");
  const isPort = code.includes("LP") || comp.includes("port") || comp.includes("língua");

  if (isMath) {
    return {
      titulo: `Aula passo a passo: ${data.bnccCode}`,
      metafora: "Matemática é como montar um brinquedo: uma peça por vez. Se você segue os passos, a resposta aparece.",
      telas: {
        missao: { titulo: "Missão de hoje", texto: `Você vai aprender ${assunto} resolvendo uma situação real, sem decorar e sem chutar.`, termoBusca: "child counting blocks" },
        exploracao: {
          titulo: "Observe a história",
          texto: "Imagine uma caixa com grupos de objetos. Antes da conta, descubra se a história quer juntar, tirar, formar grupos iguais ou repartir.",
          termoBusca: "toy boxes numbers",
          interativos: [
            { label: "Juntar", termoBusca: "two piles apples", explicacao: "Quando ganha ou recebe mais, a quantidade aumenta. Normalmente usamos adição." },
            { label: "Tirar", termoBusca: "empty basket", explicacao: "Quando perde, gasta ou falta, a quantidade diminui. Normalmente usamos subtração." },
            { label: "Grupos", termoBusca: "equal groups candy", explicacao: "Quando aparece 'cada' ou grupos iguais, a multiplicação pode ajudar." },
          ],
        },
        explicacao: {
          titulo: "Como pensar",
          paragrafos: [
            "Primeiro leia a pergunta final. Ela diz o que você precisa descobrir.",
            "Depois marque os números importantes. Nem todo número da história precisa entrar na conta.",
            "Escolha a operação pela ação da história: ganhou, perdeu, cada grupo ou repartir.",
            "No final, responda com frase completa e confira se faz sentido.",
          ],
          termoBusca: "math notebook pencil",
        },
        passoAPasso: {
          titulo: "Passo a passo real",
          passos: [
            "Leia: Ana tem 4 caixas com 6 figurinhas em cada caixa.",
            "Pergunte: quero saber o total de figurinhas.",
            "Veja a pista: 'em cada caixa' mostra grupos iguais.",
            "Monte: 4 grupos de 6 = 4 × 6.",
            "Calcule: 6 + 6 + 6 + 6 = 24.",
            "Responda: Ana tem 24 figurinhas ao todo.",
          ],
          termoBusca: "multiplication blocks",
        },
        exemploAplicado: {
          titulo: "Exemplo resolvido",
          enunciado: "Uma criança colocou 5 carrinhos em cada uma de 3 prateleiras. Quantos carrinhos há no total?",
          resolucao: [
            "A pergunta quer o total de carrinhos.",
            "São 3 prateleiras e cada uma tem 5 carrinhos.",
            "Isso forma 3 grupos iguais de 5.",
            "5 + 5 + 5 = 15, então 3 × 5 = 15.",
          ],
          termoBusca: "toy cars shelves",
        },
        desafio: {
          titulo: "Sua vez",
          enunciado: "Há 4 pacotes com 7 adesivos em cada. Quantos adesivos há ao todo?",
          opcoes: ["A) 11 adesivos", "B) 28 adesivos", "C) 3 adesivos"],
          respostaCorreta: "B",
          explicacaoResposta: "A palavra 'cada' mostra grupos iguais: 4 grupos de 7. Então 7 + 7 + 7 + 7 = 28.",
          termoBusca: "sticker packs",
        },
        conclusao: { titulo: "Você aprendeu", mensagemFinal: "Hoje você treinou leitura do problema, escolha da operação, cálculo e conferência. Isso é aprender de verdade!", termoBusca: "happy student math" },
      },
    };
  }

  if (isPort) {
    return {
      titulo: `Aula de leitura: ${data.bnccCode}`,
      metafora: "Ler é como ser detetive: você encontra pistas no texto para provar sua resposta.",
      telas: {
        missao: { titulo: "Missão de hoje", texto: `Você vai aprender ${assunto} usando frases reais, pistas e explicação curta.`, termoBusca: "child reading book" },
        exploracao: {
          titulo: "Caça às pistas",
          texto: "Leia a frase: “A menina guardou o livro porque começou a chover.” A palavra 'porque' abre a pista do motivo.",
          termoBusca: "rain book child",
          interativos: [
            { label: "Porque", termoBusca: "question mark because", explicacao: "Mostra causa ou motivo. Pergunte: por que aconteceu?" },
            { label: "Mas", termoBusca: "opposite arrows", explicacao: "Mostra oposição. Uma ideia quebra a expectativa da outra." },
            { label: "Então", termoBusca: "arrow forward", explicacao: "Mostra consequência. Algo acontece por causa do que veio antes." },
          ],
        },
        explicacao: {
          titulo: "Como responder leitura",
          paragrafos: [
            "Primeiro leia a frase inteira, sem pular palavras pequenas.",
            "Depois procure uma palavra-pista: porque, mas, então, quando, onde ou quem.",
            "Responda usando uma informação que apareceu no texto.",
            "Uma boa resposta diz: 'Eu sei disso porque no texto aparece...'.",
          ],
          termoBusca: "reading clues notebook",
        },
        passoAPasso: {
          titulo: "Passo a passo real",
          passos: [
            "Leia: 'Pedro correu, mas chegou atrasado'.",
            "Ache a palavra-pista: 'mas'.",
            "'Mas' mostra oposição entre correr e chegar atrasado.",
            "Explique: ele se esforçou correndo, porém mesmo assim atrasou.",
          ],
          termoBusca: "child reading sentence",
        },
        exemploAplicado: {
          titulo: "Exemplo resolvido",
          enunciado: "Na frase “A flor murchou porque ficou sem água”, qual é a causa?",
          resolucao: [
            "A pergunta pede a causa, ou seja, o motivo.",
            "A palavra 'porque' mostra onde está o motivo.",
            "Depois de 'porque' aparece: ficou sem água.",
            "Resposta: a flor murchou porque ficou sem água.",
          ],
          termoBusca: "dry flower water",
        },
        desafio: {
          titulo: "Sua vez",
          enunciado: "Em “O céu escureceu, então Marta fechou a janela”, por que Marta fechou a janela?",
          opcoes: ["A) Porque parecia que ia chover", "B) Porque queria dormir", "C) Porque a janela quebrou"],
          respostaCorreta: "A",
          explicacaoResposta: "A pista está em 'O céu escureceu'. Isso indica chuva chegando, então ela fechou a janela.",
          termoBusca: "dark sky window",
        },
        conclusao: { titulo: "Você aprendeu", mensagemFinal: "Hoje você leu, achou pistas e explicou com prova do texto. Esse é o caminho para interpretar melhor.", termoBusca: "happy child reading" },
      },
    };
  }

  return {
    titulo: `Aula guiada: ${data.bnccCode}`,
    metafora: "Aprender é como acender uma lanterna: primeiro vemos as pistas, depois entendemos o caminho.",
    telas: {
      missao: { titulo: "Missão de hoje", texto: `Você vai estudar ${assunto} com observação, exemplo e desafio.`, termoBusca: "student learning" },
      exploracao: {
        titulo: "Observe antes de responder",
        texto: "Olhe para o tema como um investigador: o que acontece, quem participa, qual é a causa e qual é a consequência?",
        termoBusca: "magnifying glass learning",
        interativos: [
          { label: "O quê", termoBusca: "question what", explicacao: "Descubra qual fato ou ideia está sendo estudada." },
          { label: "Por quê", termoBusca: "question why", explicacao: "Procure a causa ou explicação do acontecimento." },
          { label: "Como", termoBusca: "question how", explicacao: "Veja o passo a passo ou o jeito que acontece." },
        ],
      },
      explicacao: { titulo: "Entenda o conceito", paragrafos: ["Comece separando o tema em partes pequenas.", "Depois ligue cada parte a um exemplo concreto.", "Para saber se entendeu, tente explicar com suas palavras."], termoBusca: "concept map" },
      passoAPasso: { titulo: "Passo a passo", passos: ["Leia o tema.", "Marque palavras importantes.", "Veja um exemplo.", "Explique o que aconteceu.", "Responda e confira."], termoBusca: "steps learning" },
      exemploAplicado: { titulo: "Exemplo aplicado", enunciado: `Exemplo sobre ${assunto}: observe uma situação da escola e diga qual pista ajuda a entender o tema.`, resolucao: ["Primeiro identifico a situação.", "Depois encontro a pista principal.", "Por fim explico a relação entre a pista e a resposta."], termoBusca: "classroom example" },
      desafio: { titulo: "Desafio", enunciado: "Qual atitude mostra que você entendeu um conteúdo novo?", opcoes: ["A) Copiar sem ler", "B) Explicar com suas palavras e dar exemplo", "C) Chutar rápido"], respostaCorreta: "B", explicacaoResposta: "Quem explica com palavras próprias e dá exemplo mostra compreensão real.", termoBusca: "student explaining" },
      conclusao: { titulo: "Fechamento", mensagemFinal: "Você praticou observar, entender, exemplificar e responder. Amanhã o Professor Brilho continua com você.", termoBusca: "learning success" },
    },
  };
}

function parseAulaDinamica(raw: string): AulaDinamica {
  const parsed = extractJson(raw);
  const r = AulaDinamicaSchema.safeParse(parsed);
  if (!r.success) {
    const issues = r.error.issues
      .slice(0, 3)
      .map((i) => `${i.path.join(".")}: ${i.message}`)
      .join(" | ");
    throw new Error(`Schema inválido: ${issues}`);
  }
  return r.data;
}

export const gerarAulaDinamica = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AulaDinamicaInputSchema.parse(input))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const hasSupabaseAdmin = !!process.env.SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabaseAdmin = hasSupabaseAdmin
      ? createClient(
          process.env.SUPABASE_URL!,
          process.env.SUPABASE_SERVICE_ROLE_KEY!,
          { auth: { persistSession: false, autoRefreshToken: false } },
        )
      : null;


    // 1) Cache lookup
    if (!data.force && supabaseAdmin) {
      const { data: cached } = await supabaseAdmin
        .from("aulas_geradas_ia")
        .select("codigo_bncc, titulo, screens, modelo, versao, gerada_em")
        .eq("codigo_bncc", data.bnccCode)
        .maybeSingle();
      if (cached?.screens) {
        return {
          ok: true as const,
          cached: true,
          aula: cached.screens as unknown as AulaDinamica,
          error: null,
        };
      }
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return {
        ok: true as const,
        cached: false,
        error: "GROQ_API_KEY ausente; usando aula estruturada local",
        aula: buildFallbackAulaDinamica(data),
      };
    }

    const userPrompt = `Código BNCC: ${data.bnccCode}
Descrição: ${data.descricao}
Idade: ${data.idade ?? 9} anos${data.serie ? `\nSérie: ${data.serie}` : ""}${data.componente ? `\nComponente: ${data.componente}` : ""}

Gere a aula JSON completa.`;

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              { role: "system", content: AULA_DINAMICA_PROMPT },
              { role: "user", content: userPrompt },
            ],
            temperature: 0.7,
            max_tokens: 2400,
            top_p: 0.9,
            response_format: { type: "json_object" },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:dinamica] HTTP", res.status, errText.slice(0, 400));
        return {
          ok: true as const,
          cached: false,
          error: `Groq ${res.status}; usando aula estruturada local`,
          aula: buildFallbackAulaDinamica(data),
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!raw) {
        return {
          ok: true as const,
          cached: false,
          error: "Resposta vazia; usando aula estruturada local",
          aula: buildFallbackAulaDinamica(data),
        };
      }

      const aula = parseAulaDinamica(raw);

      // 2) Save cache (upsert by codigo_bncc)
      if (supabaseAdmin) {
        const { error: upErr } = await supabaseAdmin
          .from("aulas_geradas_ia")
          .upsert(
            {
              codigo_bncc: data.bnccCode,
              titulo: aula.titulo,
              screens: aula as unknown as Record<string, unknown>,
              modelo: "llama-3.1-8b-instant",
              disciplina: data.componente ?? null,
              ano: data.serie ?? null,
              aprovada: false,
              gerada_em: new Date().toISOString(),
            },
            { onConflict: "codigo_bncc" },
          );
        if (upErr) console.error("[groq:dinamica] upsert", upErr.message);
      }

      return { ok: true as const, cached: false, aula, error: null };
    } catch (e) {
      console.error("[groq:dinamica]", e);
      return {
        ok: true as const,
        cached: false,
        error: e instanceof Error ? `${e.message}; usando aula estruturada local` : "Falha ao gerar aula; usando aula estruturada local",
        aula: buildFallbackAulaDinamica(data),
      };
    }
  });

// ============================================================
// EXPLICAR ERRO — Professor Brilho dentro das atividades.
// Só roda quando a criança erra. Gera explicação curta,
// fofa e pedagógica, sem entregar a resposta de bandeja.
// ============================================================

const ExplicarErroSchema = z.object({
  pergunta: z.string().trim().min(2).max(800),
  gabarito: z.string().trim().min(1).max(400),
  respostaErrada: z.string().trim().min(1).max(400),
  bnccCode: z.string().max(20).optional(),
  idade: z.number().int().min(5).max(16).optional(),
  modulo: z
    .enum([
      "escola-brilha",
      "reforco-brilha",
      "jornada-365",
      "missao-prova",
      "missao-trabalho",
    ])
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
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", reply: null };
    }

    const userPrompt = `A questão era: ${data.pergunta}
A resposta certa era: ${data.gabarito}
O aluno marcou: ${data.respostaErrada}${data.bnccCode ? `\nHabilidade BNCC: ${data.bnccCode}` : ""}${data.idade ? `\nIdade do aluno: ${data.idade} anos` : ""}

Explique de forma fofa e pedagógica por que a resposta dele está incorreta e dê uma dica de estudo. Lembre: não entregue o gabarito de bandeja, guie o raciocínio.`;

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: EXPLICAR_ERRO_SYSTEM },
              { role: "user", content: userPrompt },
            ],
            temperature: 0.6,
            max_tokens: 240,
            top_p: 0.9,
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:erro] HTTP", res.status, errText.slice(0, 300));
        return {
          ok: false as const,
          error: `Groq ${res.status}`,
          reply: null,
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const reply = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!reply) {
        return { ok: false as const, error: "Resposta vazia", reply: null };
      }
      return { ok: true as const, reply, error: null };
    } catch (e) {
      console.error("[groq:erro]", e);
      return {
        ok: false as const,
        error: "Falha de rede ao chamar Groq",
        reply: null,
      };
    }
  });


// ============================================================
// QUIZ MISSÃO PROVA — gera mini-simulado (3 questões objetivas)
// sobre o tópico que a criança acabou de estudar. Usado pelo
// componente MissaoProvaQuiz; o feedback de erro fica a cargo
// do ProfessorBrilhaErroExplainer.
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
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", quiz: null };
    }

    const userPrompt = `Tópico: ${data.topico}
Matéria: ${data.materia}${data.idade ? `\nIdade do aluno: ${data.idade} anos` : ""}${data.bnccCode ? `\nHabilidade BNCC: ${data.bnccCode}` : ""}

Gere 3 questões objetivas de revisão (4 alternativas, 1 correta).`;

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: QUIZ_SYSTEM },
              { role: "user", content: userPrompt },
            ],
            temperature: 0.4,
            max_tokens: 900,
            response_format: { type: "json_object" },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:quiz] HTTP", res.status, errText.slice(0, 300));
        return { ok: false as const, error: `Groq ${res.status}`, quiz: null };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const raw = json.choices?.[0]?.message?.content ?? "";
      const parsed = tryExtractJson(raw);
      const safe = QuizSchema.safeParse(parsed);
      if (!safe.success) {
        console.error("[groq:quiz] JSON inválido", safe.error.message);
        return { ok: false as const, error: "JSON inválido", quiz: null };
      }
      return { ok: true as const, quiz: safe.data, error: null };
    } catch (e) {
      console.error("[groq:quiz]", e);
      return { ok: false as const, error: "Falha de rede", quiz: null };
    }
  });

// ============================================================
// PLANO DE ESTUDOS MISSÃO PROVA — gera sessões diárias até a
// data da prova. Aceita opcionalmente uma FOTO do material
// escolar (caderno, livro, lista) para personalizar o plano.
// ============================================================

const PlanoEstudosInputSchema = z.object({
  materia: z.string().trim().min(2).max(80),
  dataProva: z.string().trim().min(8).max(12), // YYYY-MM-DD
  diasAteProva: z.number().int().min(1).max(60),
  conteudos: z.array(z.string().min(1).max(160)).max(20).optional(),
  observacoes: z.string().max(800).optional(),
  idade: z.number().int().min(5).max(16).optional(),
  serie: z.string().max(20).optional(),
  fotoBase64: z.string().max(8_000_000).optional(), // data URL ou base64 puro
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
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", plano: null };
    }

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

    const model = hasImage
      ? "meta-llama/llama-4-scout-17b-16e-instruct"
      : "llama-3.3-70b-versatile";

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: PLANO_SYSTEM },
              { role: "user", content: userContent },
            ],
            temperature: 0.4,
            max_tokens: 1800,
            response_format: { type: "json_object" },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:plano] HTTP", res.status, errText.slice(0, 400));
        return {
          ok: false as const,
          error: `Groq ${res.status}: ${errText.slice(0, 160)}`,
          plano: null,
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const raw = json.choices?.[0]?.message?.content ?? "";
      const parsed = tryExtractJson(raw);
      const safe = PlanoSchema.safeParse(parsed);
      if (!safe.success) {
        console.error("[groq:plano] JSON inválido", safe.error.message);
        return { ok: false as const, error: "JSON inválido da IA", plano: null };
      }
      return { ok: true as const, plano: safe.data, error: null };
    } catch (e) {
      console.error("[groq:plano]", e);
      return {
        ok: false as const,
        error: e instanceof Error ? e.message : "Falha de rede",
        plano: null,
      };
    }
  });

// ============================================================
// MISSÃO TAREFA — analisa tarefa de casa (texto ou foto) e
// devolve 3 DICAS PROGRESSIVAS + pergunta socrática.
// NUNCA entrega a resposta pronta. Lê perfil neurodivergente
// da criança direto do banco (children) e injeta hiperfoco.
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
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", resultado: null };
    }

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

    const model = hasImage
      ? "meta-llama/llama-4-scout-17b-16e-instruct"
      : "llama-3.3-70b-versatile";

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: TAREFA_SYSTEM },
              { role: "user", content: userContent },
            ],
            temperature: 0.5,
            max_tokens: 1100,
            response_format: { type: "json_object" },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[groq:tarefa] HTTP", res.status, errText.slice(0, 400));
        return {
          ok: false as const,
          error: `Groq ${res.status}: ${errText.slice(0, 160)}`,
          resultado: null,
        };
      }

      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const raw = json.choices?.[0]?.message?.content ?? "";
      const parsed = tryExtractJson(raw);
      const safe = TarefaDicasSchema.safeParse(parsed);
      if (!safe.success) {
        console.error("[groq:tarefa] JSON inválido", safe.error.message);
        return { ok: false as const, error: "JSON inválido da IA", resultado: null };
      }
      return { ok: true as const, resultado: safe.data, error: null };
    } catch (e) {
      console.error("[groq:tarefa]", e);
      return {
        ok: false as const,
        error: e instanceof Error ? e.message : "Falha de rede",
        resultado: null,
      };
    }
  });


// ============================================================
// ANÁLISE DO TRABALHO ESCOLAR — Missão Trabalho
// Avalia se o trabalho da criança segue o que o professor pediu
// e devolve pontos fortes, o que melhorar e dicas práticas.
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
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "GROQ_API_KEY ausente", analise: null };
    }

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

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: sys },
            { role: "user", content: user },
          ],
          temperature: 0.4,
          max_tokens: 900,
        }),
      });
      if (!res.ok) {
        const t = await res.text();
        return { ok: false as const, error: `Groq ${res.status}: ${t.slice(0, 160)}`, analise: null };
      }
      const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
      const analise = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!analise) return { ok: false as const, error: "Resposta vazia", analise: null };
      return { ok: true as const, analise, error: null };
    } catch (e) {
      console.error("[groq:analisarTrabalho]", e);
      return { ok: false as const, error: "Falha de rede", analise: null };
    }
  });
