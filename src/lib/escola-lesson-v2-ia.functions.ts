import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { LessonV2 } from "@/modules/escola-brilha/types/lesson-v2";

const OptionSchema = z.object({
  text: z.string().min(1).max(160),
  isCorrect: z.boolean(),
  reason: z.string().min(8).max(320),
});

const LessonContentSchema = z.object({
  title: z.string().min(3).max(160),
  missao: z.object({
    studentObjective: z.string().min(20).max(260),
    contextEmoji: z.string().min(1).max(8),
    contextLine: z.string().min(15).max(220),
    whatYouWillDo: z.array(z.string().min(8).max(160)).min(3).max(5),
  }),
  exploracao: z.object({
    provokingQuestion: z.string().min(15).max(220),
    observation: z.string().min(30).max(520),
    pairs: z.array(z.object({ left: z.string().max(80), right: z.string().max(180) })).min(3).max(6),
  }),
  explicacao: z.object({
    conceito: z.string().min(120).max(900),
    passoAPasso: z.array(z.object({ step: z.string().max(110), detail: z.string().max(260) })).min(4).max(6),
    exemplo: z.string().min(60).max(420),
    aplicacao: z.string().min(40).max(260),
    resumo: z.string().min(35).max(240),
  }),
  exemplo: z.object({
    question: z.string().min(10).max(240),
    resolution: z.array(z.object({ line: z.string().min(8).max(240), note: z.string().max(24).optional() })).min(4).max(7),
    answer: z.string().min(1).max(220),
    why: z.string().min(20).max(360),
  }),
  guiada: z.object({
    prompt: z.string().min(10).max(260),
    options: z.array(OptionSchema).min(3).max(4),
    hint: z.string().min(15).max(260),
  }),
  atividade: z.object({
    items: z.array(z.object({ question: z.string().min(10).max(260), options: z.array(OptionSchema).min(3).max(4) })).min(2).max(4),
  }),
  desafio: z.object({
    contextualScenario: z.string().min(20).max(260),
    question: z.string().min(10).max(260),
    options: z.array(OptionSchema).min(3).max(4),
  }),
  resumo: z.object({
    format: z.enum(["mindmap", "table", "flow", "list", "timeline", "diagram"]),
    title: z.string().min(3).max(120),
    nodes: z.array(z.object({ label: z.string().max(80), detail: z.string().max(180).optional() })).min(3).max(7),
    takeaways: z.array(z.string().min(8).max(180)).min(3).max(5),
  }),
  dominio: z.object({
    recommendation: z.string().min(20).max(260),
  }),
});

const InputSchema = z.object({
  bnccCode: z.string().min(4).max(20),
  titulo: z.string().min(2).max(180),
  bnccObjective: z.string().max(1200).optional(),
  force: z.boolean().optional(),
});

type SubjectKey = "CI" | "MA" | "LP" | "HI" | "GE" | "LI" | "AR" | "EF" | "ER";

const SUBJECT_NAME: Record<SubjectKey, string> = {
  CI: "Ciências",
  MA: "Matemática",
  LP: "Língua Portuguesa",
  HI: "História",
  GE: "Geografia",
  LI: "Língua Inglesa",
  AR: "Arte",
  EF: "Educação Física",
  ER: "Ensino Religioso",
};

function subjectFromCode(code: string): SubjectKey {
  return (code.match(/^EF\d{2}(CI|MA|LP|HI|GE|LI|AR|EF|ER)/i)?.[1]?.toUpperCase() as SubjectKey) ?? "LP";
}

function gradeFromCode(code: string) {
  const m = code.match(/^EF0?([1-9])/i);
  return m ? `${m[1]}º Ano` : "Ensino Fundamental";
}

const SYSTEM = `Você é Professor Brilho, especialista em didática infantil e Fundamental I/II.

Gere uma AULA REAL de 9 telas no formato LessonV2. A BNCC é só objetivo oculto; a criança precisa receber ensino concreto.

PROIBIDO:
- texto genérico: "compreender", "praticar", "use no cotidiano", "vamos aprender de forma divertida";
- repetir o texto oficial da BNCC como explicação;
- perguntas sem resposta explicada;
- placeholders.

OBRIGATÓRIO:
- micro-habilidade concreta adequada ao título/código;
- explicação de professor, com passo a passo;
- exemplo resolvido completamente;
- atividade e desafio com opções, alternativa correta e razão de cada opção;
- matemática com números reais e cálculo; português com palavra/frase/texto real; humanas/ciências com caso real e comparação concreta.

Responda APENAS JSON válido com os campos: title, missao, exploracao, explicacao, exemplo, guiada, atividade, desafio, resumo, dominio.`;

function userPrompt(data: z.infer<typeof InputSchema>) {
  const subject = SUBJECT_NAME[subjectFromCode(data.bnccCode)];
  return `Código: ${data.bnccCode}
Série: ${gradeFromCode(data.bnccCode)}
Disciplina: ${subject}
Título da aula: ${data.titulo}
Objetivo oficial/base: ${data.bnccObjective || "não informado"}

Faça a aula completa ensinando um conteúdo específico, com exemplos resolvidos e exercícios corrigidos.`;
}

function extractJson(raw: string) {
  let txt = raw.trim();
  if (txt.startsWith("```")) txt = txt.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
  const first = txt.indexOf("{");
  const last = txt.lastIndexOf("}");
  if (first >= 0 && last > first) txt = txt.slice(first, last + 1);
  return JSON.parse(txt);
}

export const gerarLessonV2Escola = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) return { ok: true as const, error: "GROQ_API_KEY ausente; usando aula estruturada local", lesson: buildFallbackLessonV2(data) };

    try {
      const subject = subjectFromCode(data.bnccCode);
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: SYSTEM },
            { role: "user", content: userPrompt(data) },
          ],
          temperature: 0.55,
          max_tokens: 5200,
          response_format: { type: "json_object" },
        }),
      });

      if (!res.ok) {
        const t = await res.text();
        console.error("[gerarLessonV2Escola] groq", res.status, t.slice(0, 300));
        return { ok: true as const, error: `Groq ${res.status}; usando aula estruturada local`, lesson: buildFallbackLessonV2(data) };
      }

      const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
      const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
      if (!raw) return { ok: true as const, error: "Resposta vazia; usando aula estruturada local", lesson: buildFallbackLessonV2(data) };

      const c = LessonContentSchema.parse(extractJson(raw));
      const lesson = {
        id: `ai:${data.bnccCode}`,
        title: c.title,
        discipline: SUBJECT_NAME[subject],
        grade: gradeFromCode(data.bnccCode),
        bnccCode: data.bnccCode,
        bnccObjective: data.bnccObjective || `Habilidade ${data.bnccCode}`,
        xp: 40,
        templateMeta: {
          slug: "groq-real-lesson",
          name: "Aula real gerada pelo Professor Brilho",
          disciplina: SUBJECT_NAME[subject],
          steps: [
            "Missão", "Exploração", "Explicação", "Exemplo", "Prática", "Treino", "Desafio", "Resumo", "Domínio",
          ].map((label, idx) => ({ n: idx + 1, label, applied: true, source: "groq" })),
        },
        screens: {
          missao: c.missao,
          exploracao: c.exploracao,
          explicacao: c.explicacao,
          exemplo: c.exemplo,
          guiada: c.guiada,
          atividade: c.atividade,
          desafio: c.desafio,
          resumo: c.resumo,
          dominio: {
            bnccCode: data.bnccCode,
            bnccObjective: data.bnccObjective || `Habilidade ${data.bnccCode}`,
            recommendation: c.dominio.recommendation,
          },
        },
      };

      try {
        const { createClient } = await import("@supabase/supabase-js");
        const admin = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
          auth: { persistSession: false, autoRefreshToken: false },
        });
        const { data: map } = await admin
          .from("bncc_template_map")
          .select("template_id")
          .eq("bncc_code", data.bnccCode)
          .order("priority", { ascending: false })
          .limit(1)
          .maybeSingle();
        if (map?.template_id) {
          await admin.from("pedagogical_lessons_cache").upsert(
            { bncc_code: data.bnccCode, template_id: map.template_id, version: 99, lesson },
            { onConflict: "bncc_code,template_id,version" },
          );
        }
      } catch (e) {
        console.warn("[gerarLessonV2Escola] cache skipped", e);
      }

      return { ok: true as const, error: null, lesson };
    } catch (e) {
      console.error("[gerarLessonV2Escola]", e);
      return { ok: true as const, error: e instanceof Error ? `${e.message}; usando aula estruturada local` : "Falha ao gerar aula; usando aula estruturada local", lesson: buildFallbackLessonV2(data) };
    }
  });

type LessonGerada = LessonV2;

export function buildFallbackLessonV2(input: z.infer<typeof InputSchema>): LessonGerada {
  const subject = subjectFromCode(input.bnccCode);
  const discipline = SUBJECT_NAME[subject];
  const grade = gradeFromCode(input.bnccCode);
  const tema = input.titulo || `habilidade ${input.bnccCode}`;
  const objective = input.bnccObjective || `Habilidade ${input.bnccCode}`;

  const option = (text: string, isCorrect: boolean, reason: string) => ({ text, isCorrect, reason });

  const bySubject: Record<SubjectKey, {
    conceito: string;
    passos: { step: string; detail: string }[];
    exemploQuestion: string;
    resolucao: { line: string; note?: string }[];
    answer: string;
    why: string;
    guided: { prompt: string; options: ReturnType<typeof option>[]; hint: string };
    atividade: { question: string; options: ReturnType<typeof option>[] }[];
    desafio: { scenario: string; question: string; options: ReturnType<typeof option>[] };
    nodes: { label: string; detail: string }[];
  }> = {
    MA: {
      conceito: `Nesta aula, ${tema} será trabalhado como resolução de problema. A primeira regra é não chutar: leia o pedido, encontre os números, escolha a operação e confira se o resultado responde exatamente à pergunta.`,
      passos: [
        { step: "1. Ler o pedido", detail: "Descubra o que a questão quer encontrar: total, diferença, parte, medida ou comparação." },
        { step: "2. Separar dados", detail: "Anote apenas os números e informações que ajudam a resolver." },
        { step: "3. Montar a conta", detail: "Escolha adição para juntar, subtração para tirar/comparar, multiplicação para grupos iguais e divisão para repartir." },
        { step: "4. Conferir", detail: "Leia a resposta dentro da frase e veja se ela faz sentido." },
      ],
      exemploQuestion: `Exemplo resolvido de ${tema}: Ana tinha 24 figurinhas e ganhou mais 18. Quantas ficou no total?`,
      resolucao: [
        { line: "A pergunta quer o total de figurinhas." },
        { line: "Total significa juntar: 24 + 18." },
        { line: "24 + 10 = 34." },
        { line: "34 + 8 = 42." },
      ],
      answer: "Ana ficou com 42 figurinhas.",
      why: "A adição foi usada porque a quantidade aumentou: ela tinha algumas e ganhou mais.",
      guided: {
        prompt: "Se João tinha 30 pontos e perdeu 12, qual operação resolve?",
        options: [
          option("30 - 12", true, "Correto: perdeu indica tirar uma parte do total."),
          option("30 + 12", false, "Isso juntaria pontos, mas a história diz que João perdeu."),
          option("30 × 12", false, "Multiplicação serve para grupos iguais, não para perda simples."),
        ],
        hint: "Procure a palavra que mostra se a quantidade aumentou ou diminuiu.",
      },
      atividade: [
        { question: "Lia tinha 15 lápis e comprou 7. Quantos lápis tem agora?", options: [option("22", true, "15 + 7 = 22."), option("8", false, "8 seria tirar 7, mas ela comprou."), option("105", false, "Isso seria multiplicar sem necessidade.")] },
        { question: "Um pacote tem 6 balas. Três pacotes têm quantas balas?", options: [option("18", true, "São 3 grupos de 6: 6 + 6 + 6 = 18."), option("9", false, "9 é 6 + 3, mas temos grupos iguais."), option("3", false, "3 é a quantidade de pacotes, não de balas.")] },
      ],
      desafio: { scenario: "Na cantina da escola", question: "Há 4 caixas com 8 sucos em cada. Quantos sucos há ao todo?", options: [option("32", true, "4 grupos de 8 formam 32."), option("12", false, "12 é soma simples 4 + 8, mas cada caixa tem 8."), option("4", false, "4 é só o número de caixas.")] },
      nodes: [
        { label: "Pedido", detail: "O que preciso descobrir?" },
        { label: "Dados", detail: "Quais números importam?" },
        { label: "Operação", detail: "Qual conta combina com a história?" },
        { label: "Conferência", detail: "A resposta faz sentido?" },
      ],
    },
    LP: {
      conceito: `Nesta aula, ${tema} será aprendido lendo palavras, frases e pequenos trechos de verdade. O segredo é observar pistas: som, letra, sentido da frase, pontuação e intenção de quem escreveu.`,
      passos: [
        { step: "1. Ler devagar", detail: "Veja cada palavra sem pular pedaços importantes." },
        { step: "2. Procurar pista", detail: "Marque letra, sílaba, palavra-chave ou sinal de pontuação que muda o sentido." },
        { step: "3. Explicar com exemplo", detail: "Não basta responder; diga qual parte do texto mostrou isso." },
        { step: "4. Revisar", detail: "Leia a frase de novo e veja se sua resposta combina." },
      ],
      exemploQuestion: `Exemplo resolvido de ${tema}: leia a frase “A menina guardou o livro porque começou a chover.” Por que ela guardou o livro?`,
      resolucao: [
        { line: "A palavra 'porque' apresenta a causa." },
        { line: "Depois de 'porque' aparece: 'começou a chover'." },
        { line: "Então a chuva foi o motivo." },
        { line: "A resposta deve sair do próprio texto." },
      ],
      answer: "Ela guardou o livro porque começou a chover.",
      why: "A frase dá a pista depois da palavra 'porque', que explica o motivo da ação.",
      guided: {
        prompt: "Na frase “Pedro correu, mas chegou atrasado”, a palavra 'mas' mostra o quê?",
        options: [
          option("Uma oposição", true, "Correto: ele correu, porém o resultado foi chegar atrasado."),
          option("Uma soma de ideias iguais", false, "Soma seria indicada por 'e'."),
          option("Um lugar", false, "A palavra não indica onde aconteceu."),
        ],
        hint: "Pergunte: a segunda parte confirma ou quebra a expectativa da primeira?",
      },
      atividade: [
        { question: "Em “A flor murchou porque ficou sem água”, qual é a causa?", options: [option("Ficou sem água", true, "É a informação depois de 'porque'."), option("A flor", false, "A flor é sobre quem se fala."), option("Murchou", false, "Murchou é o que aconteceu, não a causa.")] },
        { question: "Qual palavra indica oposição em “Queria brincar, porém estava chovendo”?", options: [option("porém", true, "'Porém' mostra contraste/oposição."), option("brincar", false, "É uma ação."), option("chovendo", false, "É o acontecimento, não o conectivo.")] },
      ],
      desafio: { scenario: "Lendo um bilhete da escola", question: "Em “Traga casaco, pois fará frio”, por que deve trazer casaco?", options: [option("Porque fará frio", true, "'Pois' apresenta a explicação."), option("Porque é um bilhete", false, "O formato não é o motivo."), option("Porque vai brincar", false, "Essa informação não aparece no texto.")] },
      nodes: [
        { label: "Texto", detail: "Leia sem pular palavras." },
        { label: "Pista", detail: "Ache conectivos, pontuação e palavras-chave." },
        { label: "Sentido", detail: "Explique o que a frase quer dizer." },
        { label: "Prova", detail: "Mostre de onde tirou a resposta." },
      ],
    },
    CI: {
      conceito: `Nesta aula, ${tema} será entendido observando fenômenos: o que acontece, por que acontece e que evidência mostra isso. Ciências não é decorar; é comparar, testar e explicar com pistas reais.`,
      passos: [
        { step: "1. Observar", detail: "Descreva o que você vê sem inventar." },
        { step: "2. Comparar", detail: "Veja o que mudou e o que continuou igual." },
        { step: "3. Explicar causa", detail: "Ligue o efeito a uma causa possível." },
        { step: "4. Usar evidência", detail: "Aponte qual pista comprova sua explicação." },
      ],
      exemploQuestion: `Exemplo resolvido de ${tema}: uma planta ficou 5 dias sem água e suas folhas murcharam. O que aconteceu?`,
      resolucao: [
        { line: "Observação: as folhas murcharam." },
        { line: "Mudança: a planta ficou sem água." },
        { line: "Causa provável: falta de água no caule e nas folhas." },
        { line: "Evidência: depois de dias sem regar, a planta perdeu firmeza." },
      ],
      answer: "A planta murchou por falta de água.",
      why: "A água ajuda a manter a planta firme; sem água, as folhas perdem sustentação.",
      guided: { prompt: "Qual frase é uma observação científica?", options: [option("A folha está amarela", true, "É algo que pode ser visto."), option("A planta está triste", false, "Isso é sentimento humano, não observação medível."), option("A planta não gosta de sol", false, "É uma conclusão sem evidência." )], hint: "Observação é o que você consegue ver, medir ou comparar." },
      atividade: [
        { question: "Se o gelo saiu do congelador e virou água, qual mudança ocorreu?", options: [option("Derretimento", true, "O sólido virou líquido."), option("Evaporação", false, "Evaporação é líquido virando vapor."), option("Congelamento", false, "Congelamento é o contrário: líquido vira sólido.")] },
        { question: "Qual é uma evidência de que uma vela está queimando?", options: [option("Luz e calor", true, "A chama produz luz e calor."), option("Silêncio", false, "Silêncio não prova combustão."), option("Cor da mesa", false, "A mesa não indica que a vela queima.")] },
      ],
      desafio: { scenario: "No laboratório da escola", question: "Duas plantas iguais: uma recebe luz, outra fica no escuro. Qual comparação é justa?", options: [option("Mudar só a luz", true, "Assim sabemos se a luz fez diferença."), option("Mudar luz, água e vaso", false, "Com muitas mudanças, não dá para saber a causa."), option("Não observar nada", false, "Sem observação não há conclusão.")] },
      nodes: [
        { label: "Observação", detail: "O que aconteceu?" },
        { label: "Comparação", detail: "O que mudou?" },
        { label: "Causa", detail: "Por que pode ter acontecido?" },
        { label: "Evidência", detail: "Qual pista comprova?" },
      ],
    },
    HI: {
      conceito: `Nesta aula, ${tema} será estudado como uma história com tempo, pessoas, causas e consequências. História não é decorar datas: é entender o que mudou, quem participou e por que aquilo importa.`,
      passos: [
        { step: "1. Localizar no tempo", detail: "Antes, durante ou depois de qual acontecimento?" },
        { step: "2. Identificar pessoas/grupos", detail: "Quem agiu, decidiu, trabalhou ou sofreu consequências?" },
        { step: "3. Entender causa", detail: "O que levou esse fato a acontecer?" },
        { step: "4. Ver consequência", detail: "O que mudou depois?" },
      ],
      exemploQuestion: `Exemplo resolvido de ${tema}: uma comunidade mudou de lugar porque o rio secou. Qual foi a causa e a consequência?`,
      resolucao: [{ line: "Causa: o rio secou." }, { line: "A água era necessária para viver e plantar." }, { line: "Consequência: a comunidade precisou mudar de lugar." }, { line: "Isso mostra relação entre ambiente e vida social." }],
      answer: "Causa: seca do rio. Consequência: mudança da comunidade.",
      why: "A explicação liga o acontecimento ao motivo e ao resultado.",
      guided: { prompt: "O que é consequência?", options: [option("O que acontece depois de um fato", true, "Consequência é resultado."), option("Uma data qualquer", false, "Data localiza o tempo, não o resultado."), option("Um nome de pessoa", false, "Pessoa é sujeito histórico, não consequência.")], hint: "Pergunte: depois disso, o que mudou?" },
      atividade: [{ question: "Se uma estrada nova aproxima duas cidades, qual pode ser consequência?", options: [option("Mais circulação de pessoas e produtos", true, "A estrada facilita deslocamento."), option("O passado desaparece", false, "O passado não desaparece."), option("Ninguém muda rotina", false, "Uma estrada costuma alterar circulação.")] }, { question: "Para entender um fato histórico, devo procurar:", options: [option("tempo, sujeitos, causas e consequências", true, "Esses elementos explicam o fato."), option("só uma palavra bonita", false, "Isso não explica o acontecimento."), option("apenas decorar", false, "Decorar sem entender não ensina História.")] }],
      desafio: { scenario: "Analisando uma imagem antiga", question: "Qual pergunta ajuda mais o historiador?", options: [option("Quem aparece e o que está acontecendo?", true, "Ajuda a interpretar a fonte."), option("Qual é a cor mais bonita?", false, "Pode ser observação, mas não explica o fato."), option("Posso ignorar a fonte?", false, "Fonte histórica precisa ser analisada.")] },
      nodes: [{ label: "Tempo", detail: "Quando aconteceu?" }, { label: "Sujeitos", detail: "Quem participou?" }, { label: "Causas", detail: "Por que aconteceu?" }, { label: "Consequências", detail: "O que mudou?" }],
    },
    GE: {
      conceito: `Nesta aula, ${tema} será aprendido olhando o espaço: lugar, paisagem, mapa, localização e relação entre natureza e pessoas. Geografia ajuda você a entender onde as coisas acontecem e por quê.`,
      passos: [{ step: "1. Localizar", detail: "Diga onde está: perto/longe, norte/sul, bairro/cidade/país." }, { step: "2. Observar paisagem", detail: "Separe elementos naturais e elementos construídos." }, { step: "3. Relacionar", detail: "Veja como as pessoas usam ou transformam esse espaço." }, { step: "4. Concluir", detail: "Explique a consequência dessa relação." }],
      exemploQuestion: `Exemplo resolvido de ${tema}: em uma imagem há rio, ponte e casas. Quais elementos são naturais e construídos?`,
      resolucao: [{ line: "Rio: elemento natural." }, { line: "Ponte: elemento construído pelas pessoas." }, { line: "Casas: elementos construídos." }, { line: "A ponte mostra transformação do espaço para atravessar o rio." }],
      answer: "Natural: rio. Construídos: ponte e casas.",
      why: "Natural vem da natureza; construído foi feito ou modificado por pessoas.",
      guided: { prompt: "Qual é um elemento natural da paisagem?", options: [option("Montanha", true, "Montanha é formação da natureza."), option("Avenida", false, "Avenida é construída."), option("Prédio", false, "Prédio é construído por pessoas.")], hint: "Pergunte: isso existiria sem construção humana?" },
      atividade: [{ question: "Em um mapa, a legenda serve para:", options: [option("explicar símbolos", true, "A legenda mostra o significado dos símbolos."), option("esconder lugares", false, "Mapa deve ajudar a localizar."), option("apagar ruas", false, "Não é função da legenda.")] }, { question: "Qual item foi construído pelas pessoas?", options: [option("Escola", true, "Escola é construção humana."), option("Rio", false, "Rio é natural."), option("Morro", false, "Morro é natural.")] }],
      desafio: { scenario: "Observando o bairro", question: "Se uma praça vira estacionamento, o que mudou?", options: [option("O uso do espaço", true, "A função do lugar foi transformada."), option("O planeta saiu do lugar", false, "Não tem relação."), option("Nada mudou", false, "Mudou de lazer/convivência para guardar carros.")] },
      nodes: [{ label: "Lugar", detail: "Onde acontece?" }, { label: "Paisagem", detail: "O que vejo?" }, { label: "Natureza", detail: "Elementos naturais." }, { label: "Sociedade", detail: "Construções e usos humanos." }],
    },
    LI: {
      conceito: `Nesta aula, ${tema} será aprendido com palavras e frases úteis em inglês. O foco é entender a situação, reconhecer vocabulário e montar uma resposta curta com sentido.`,
      passos: [{ step: "1. Identificar palavras conhecidas", detail: "Procure nomes, ações e expressões repetidas." }, { step: "2. Ligar palavra ao contexto", detail: "Veja se a frase fala de pessoa, objeto, lugar ou ação." }, { step: "3. Montar frase curta", detail: "Use estrutura simples: sujeito + ação + complemento." }, { step: "4. Conferir sentido", detail: "Traduza a ideia, não palavra por palavra." }],
      exemploQuestion: `Exemplo resolvido de ${tema}: “I like apples.” O que a frase quer dizer?`,
      resolucao: [{ line: "I = eu." }, { line: "like = gosto." }, { line: "apples = maçãs." }, { line: "Juntando a ideia: eu gosto de maçãs." }],
      answer: "Eu gosto de maçãs.",
      why: "A estrutura mostra pessoa + ação + objeto.",
      guided: { prompt: "Em “She plays soccer”, quem pratica a ação?", options: [option("She", true, "She significa ela, o sujeito da frase."), option("plays", false, "É a ação."), option("soccer", false, "É o esporte.")], hint: "O sujeito normalmente aparece antes da ação." },
      atividade: [{ question: "“Dog” significa:", options: [option("cachorro", true, "Dog é cachorro."), option("casa", false, "Casa é house."), option("livro", false, "Livro é book.")] }, { question: "Qual frase significa “Eu gosto de banana”?", options: [option("I like banana", true, "I like = eu gosto."), option("She is banana", false, "Isso não faz sentido."), option("Book banana", false, "Faltam sujeito e ação.")] }],
      desafio: { scenario: "Falando de preferências", question: "Como responder “What do you like?”", options: [option("I like music", true, "É uma resposta completa: eu gosto de música."), option("Blue table", false, "Não responde preferência."), option("He are", false, "Estrutura incorreta.")] },
      nodes: [{ label: "Word", detail: "Palavra" }, { label: "Subject", detail: "Quem faz" }, { label: "Action", detail: "O que faz" }, { label: "Meaning", detail: "Sentido da frase" }],
    },
    AR: {
      conceito: `Nesta aula, ${tema} será aprendido observando escolhas artísticas: cor, linha, forma, som, movimento ou material. Arte ensina a perceber intenção e criar com consciência.`,
      passos: [{ step: "1. Observar elementos", detail: "Veja cores, formas, linhas, sons ou movimentos." }, { step: "2. Descrever", detail: "Diga o que aparece sem julgar bonito ou feio." }, { step: "3. Interpretar", detail: "Explique que sensação ou ideia isso pode passar." }, { step: "4. Criar", detail: "Use uma escolha artística para comunicar uma ideia." }],
      exemploQuestion: `Exemplo resolvido de ${tema}: uma pintura usa muito azul escuro e linhas curvas. Que sensação pode passar?`,
      resolucao: [{ line: "Azul escuro pode lembrar noite, calma ou mistério." }, { line: "Linhas curvas dão sensação de movimento suave." }, { line: "A interpretação precisa citar elementos da obra." }, { line: "Então a obra pode passar calma ou mistério." }],
      answer: "Pode passar calma ou mistério, por causa do azul escuro e das linhas curvas.",
      why: "A resposta usa evidências visuais, não só opinião.",
      guided: { prompt: "Qual resposta usa evidência artística?", options: [option("Parece agitada por causa das linhas quebradas", true, "Cita elemento visual e sensação."), option("É bonita porque sim", false, "Não explica com elemento da obra."), option("Não observei", false, "Sem observação não há análise.")], hint: "Sempre diga qual elemento fez você pensar isso." },
      atividade: [{ question: "Linha reta pode sugerir:", options: [option("direção e firmeza", true, "Linhas retas costumam passar estabilidade/direção."), option("cheiro doce", false, "Cheiro não é elemento visual da linha."), option("silêncio obrigatório", false, "Não é relação direta.")] }, { question: "Para analisar uma obra, devo observar:", options: [option("elementos e escolhas do artista", true, "São pistas de sentido."), option("apenas o preço", false, "Preço não explica linguagem artística."), option("só meu chute", false, "Análise precisa de evidência.")] }],
      desafio: { scenario: "Criando um cartaz", question: "Se quero mostrar alegria, qual escolha ajuda?", options: [option("cores vivas e formas abertas", true, "Esses elementos costumam transmitir energia."), option("texto invisível", false, "Não comunica bem."), option("sem nenhuma escolha", false, "Criar exige escolhas.")] },
      nodes: [{ label: "Elemento", detail: "Cor, linha, forma, som." }, { label: "Observação", detail: "O que aparece?" }, { label: "Intenção", detail: "Que ideia passa?" }, { label: "Criação", detail: "Como comunicar?" }],
    },
    EF: {
      conceito: `Nesta aula, ${tema} será aprendido entendendo movimento, regra, cuidado com o corpo e cooperação. O objetivo é praticar com segurança e perceber como melhorar.`,
      passos: [{ step: "1. Entender a regra", detail: "Saiba o que pode e o que não pode fazer." }, { step: "2. Observar o movimento", detail: "Veja postura, direção, força e equilíbrio." }, { step: "3. Praticar com segurança", detail: "Comece devagar e respeite o corpo." }, { step: "4. Cooperar", detail: "Atividade física também envolve respeito e trabalho em grupo." }],
      exemploQuestion: `Exemplo resolvido de ${tema}: ao arremessar uma bola, por que olhar para o alvo ajuda?`,
      resolucao: [{ line: "O olhar orienta a direção do movimento." }, { line: "O braço ajusta força e caminho." }, { line: "Com foco no alvo, o erro diminui." }, { line: "Segurança: arremesse sem atingir colegas." }],
      answer: "Porque o olhar ajuda o corpo a direcionar o arremesso.",
      why: "Movimento envolve coordenação entre visão, postura e força.",
      guided: { prompt: "Antes de começar um jogo, o que é essencial?", options: [option("Combinar regras e segurança", true, "Evita conflito e acidentes."), option("Empurrar para ganhar", false, "Isso é inseguro e desrespeitoso."), option("Ignorar colegas", false, "Jogos exigem convivência.")], hint: "Pense no que protege todos e organiza a atividade." },
      atividade: [{ question: "Equilíbrio ajuda em:", options: [option("manter o corpo controlado", true, "Equilíbrio evita quedas."), option("esquecer regras", false, "Não tem relação."), option("parar de respirar", false, "Respiração deve continuar.")] }, { question: "Cooperação significa:", options: [option("trabalhar com o grupo", true, "Cooperar é agir junto."), option("jogar sozinho sempre", false, "Isso não é cooperação."), option("desrespeitar regras", false, "Regras organizam a prática.")] }],
      desafio: { scenario: "Durante uma brincadeira em equipe", question: "Um colega erra. Qual atitude ajuda?", options: [option("Orientar com respeito", true, "Ajuda o colega e mantém o grupo."), option("Rir dele", false, "Isso machuca e não ensina."), option("Parar o jogo para brigar", false, "Não resolve de forma segura.")] },
      nodes: [{ label: "Regra", detail: "Organiza a prática." }, { label: "Movimento", detail: "Corpo em ação." }, { label: "Segurança", detail: "Protege todos." }, { label: "Cooperação", detail: "Aprender em grupo." }],
    },
    ER: {
      conceito: `Nesta aula, ${tema} será aprendido conversando sobre respeito, convivência, valores e diferentes formas de ver o mundo. A meta é compreender sem atacar e explicar opiniões com cuidado.`,
      passos: [{ step: "1. Escutar", detail: "Entenda a ideia antes de responder." }, { step: "2. Identificar valor", detail: "Procure respeito, solidariedade, cuidado, justiça ou empatia." }, { step: "3. Comparar sem ofender", detail: "Diferenças existem e devem ser tratadas com respeito." }, { step: "4. Agir", detail: "Transforme o valor em atitude concreta." }],
      exemploQuestion: `Exemplo resolvido de ${tema}: dois colegas têm costumes diferentes no lanche. Como agir com respeito?`,
      resolucao: [{ line: "Primeiro, não zombar da diferença." }, { line: "Depois, perguntar com educação se quiser entender." }, { line: "Valor envolvido: respeito." }, { line: "Atitude concreta: conviver sem humilhar." }],
      answer: "Respeitar, não zombar e conversar com educação.",
      why: "Convivência respeitosa protege a dignidade de todos.",
      guided: { prompt: "Qual atitude mostra empatia?", options: [option("Tentar entender como o outro se sente", true, "Empatia é considerar o sentimento do outro."), option("Rir da diferença", false, "Isso desrespeita."), option("Mandar todos pensarem igual", false, "Respeito aceita diferenças.")], hint: "Empatia pergunta: como o outro pode estar se sentindo?" },
      atividade: [{ question: "Respeito significa:", options: [option("tratar o outro com dignidade", true, "Mesmo quando há diferença."), option("concordar com tudo", false, "É possível discordar com respeito."), option("interromper sempre", false, "Interromper dificulta escuta.")] }, { question: "Quando há diferença de opinião, é melhor:", options: [option("escutar e responder com educação", true, "Isso mantém diálogo."), option("ofender", false, "Ofensa não ensina."), option("gritar mais alto", false, "Grito não prova argumento.")] }],
      desafio: { scenario: "Na sala de aula", question: "Um colega ficou isolado. Qual ação combina com solidariedade?", options: [option("Convidar para participar", true, "É uma atitude concreta de cuidado."), option("Ignorar sempre", false, "Não ajuda quem está isolado."), option("Espalhar piada", false, "Isso machuca.")] },
      nodes: [{ label: "Escuta", detail: "Entender primeiro." }, { label: "Respeito", detail: "Dignidade para todos." }, { label: "Empatia", detail: "Considerar sentimentos." }, { label: "Ação", detail: "Praticar o valor." }],
    },
  };

  const data = bySubject[subject];
  return {
    id: `fallback-real:${input.bnccCode}`,
    title: tema,
    discipline,
    grade,
    bnccCode: input.bnccCode,
    bnccObjective: objective,
    xp: 35,
    templateMeta: {
      slug: "fallback-real-lesson",
      name: "Aula estruturada emergencial",
      disciplina: discipline,
      steps: ["Missão", "Exploração", "Explicação", "Exemplo", "Prática", "Treino", "Desafio", "Resumo", "Domínio"].map((label, idx) => ({ n: idx + 1, label, applied: true, source: "fallback-real" })),
    },
    screens: {
      missao: {
        studentObjective: `Você vai aprender ${tema} com explicação, exemplo resolvido e treino corrigido.`,
        contextEmoji: subject === "MA" ? "🧮" : subject === "LP" ? "📖" : subject === "CI" ? "🔬" : subject === "GE" ? "🗺️" : subject === "HI" ? "🏛️" : "✨",
        contextLine: `Hoje o Professor Brilho vai ensinar ${tema} passo a passo, sem texto vazio.`,
        whatYouWillDo: ["Entender o conceito com palavras simples", "Ver um exemplo resolvido", "Responder exercícios com correção explicada"],
      },
      exploracao: {
        provokingQuestion: `Onde ${tema} aparece em uma situação real?`,
        observation: `Antes de responder, observe pistas concretas: palavras, números, imagens, tempo, espaço ou regras do problema.`,
        pairs: data.nodes.map((n) => ({ left: n.label, right: n.detail })),
      },
      explicacao: {
        conceito: data.conceito,
        passoAPasso: data.passos,
        exemplo: data.answer,
        aplicacao: `Use o método desta aula sempre que encontrar uma questão de ${tema}: observe, escolha a estratégia, responda e explique o porquê.`,
        resumo: `A resposta boa mostra o caminho: pista encontrada, estratégia usada e conclusão conferida.`,
      },
      exemplo: { question: data.exemploQuestion, resolution: data.resolucao, answer: data.answer, why: data.why },
      guiada: data.guided,
      atividade: { items: data.atividade },
      desafio: { contextualScenario: data.desafio.scenario, question: data.desafio.question, options: data.desafio.options },
      resumo: {
        format: subject === "MA" ? "flow" : subject === "GE" ? "table" : subject === "HI" ? "timeline" : "mindmap",
        title: `Resumo de ${tema}`,
        nodes: data.nodes,
        takeaways: ["Leia o pedido com calma.", "Procure pistas concretas no enunciado.", "Explique por que a resposta está certa."],
      },
      dominio: { bnccCode: input.bnccCode, bnccObjective: objective, recommendation: "Se você errou, volte ao exemplo resolvido e refaça o exercício explicando cada passo em voz alta." },
    },
  };
}