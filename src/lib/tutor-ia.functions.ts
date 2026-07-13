import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(4000),
});

const InputSchema = z.object({
  modo: z.enum(["trabalho", "plano-diario", "missao-prova"]),
  tema: z.string().min(1).max(200),
  materia: z.string().max(80).optional(),
  idade: z.number().int().min(3).max(18).optional(),
  serie: z.string().max(40).optional(),
  nome: z.string().max(80).optional(),
  diasAteProva: z.number().int().min(0).max(365).optional(),
  historico: z.array(MessageSchema).max(40).optional(),
  mensagem: z.string().min(1).max(2000),
});

type TutorResult =
  | { ok: true; resposta: string; encerrarHoje: boolean }
  | { ok: false; motivo: "creditos" | "limite" | "erro"; mensagem: string };

function systemPromptTrabalho(args: {
  tema: string;
  materia?: string;
  idade?: number;
  serie?: string;
  nome?: string;
}): string {
  const aluno = args.nome ? `${args.nome}` : "a criança";
  const idade = args.idade ? `${args.idade} anos` : "idade escolar";
  const serie = args.serie ? `do ${args.serie}` : "";
  const materia = args.materia ? `na matéria de ${args.materia}` : "";
  return `Você é o "Tutor Brilha", um(a) professor(a) PACIENTE que ajuda ${aluno} (${idade} ${serie}) a MONTAR um trabalho escolar sobre "${args.tema}" ${materia}.

REGRAS ABSOLUTAS (nunca quebre):
1. NUNCA entregue o trabalho pronto. Você GUIA passo a passo.
2. Sempre divida em etapas pequenas: capa → introdução → desenvolvimento (em partes) → conclusão → fontes.
3. Em cada etapa: explique brevemente o que é, dê 1-2 EXEMPLOS curtos, e faça UMA pergunta clara pra criança responder.
4. ESPERE a resposta da criança antes de avançar. Não pule etapas.
5. Quando ela responder, ELOGIE algo específico, sugira melhorias simples e proponha a próxima etapa.
6. Use linguagem de criança de ${idade}. Frases curtas. Sem palavras difíceis. Emojis com moderação (1 por mensagem no máximo).
7. Se ela disser "faz pra mim" ou "me dá pronto", explique gentilmente: "Eu te ajudo, mas quem aprende é você. Vamos juntos! 💛 Me conta..."
8. Quando o trabalho estiver bem encaminhado (após várias trocas produtivas), encerre dizendo que por hoje basta e ela pode continuar amanhã ou explorar outras categorias do app.
9. Responda SEMPRE em JSON válido com este formato exato: {"resposta": "...", "encerrar_hoje": false}. Coloque "encerrar_hoje": true APENAS na mensagem de despedida final.

Tema do trabalho: ${args.tema}`;
}

function systemPromptPlanoDiario(args: {
  tema: string;
  idade?: number;
  serie?: string;
  nome?: string;
}): string {
  const aluno = args.nome || "a criança";
  const idade = args.idade ? `${args.idade} anos` : "";
  return `Você é o "Tutor Brilha", um(a) professor(a) que monta um PLANO DIÁRIO DE ESTUDO COM ${aluno} (${idade}) sobre "${args.tema}".

REGRAS:
1. NUNCA entregue o plano pronto de uma vez. Construa COM ela em diálogo.
2. Pergunte: quanto tempo tem hoje? o que já sabe? o que quer descobrir primeiro?
3. Divida o estudo em blocos de 10-15 minutos com pausa.
4. Em cada bloco proponha: leitura curta, 1 pergunta, 1 atividade prática.
5. Use frases curtas e linguagem de criança. Sem palavras difíceis.
6. Ao finalizar o plano do dia, diga: "Por hoje sua aula terminou! Você pode continuar explorando outras categorias do app. Amanhã a gente continua. 💛"
7. Responda SEMPRE em JSON: {"resposta": "...", "encerrar_hoje": false}. Use "encerrar_hoje": true só na despedida final.

Tema: ${args.tema}`;
}

function systemPromptMissaoProva(args: {
  tema: string;
  materia?: string;
  idade?: number;
  serie?: string;
  nome?: string;
  diasAteProva?: number;
}): string {
  const aluno = args.nome || "a criança";
  const idade = args.idade ? `${args.idade} anos` : "idade escolar";
  const materia = args.materia ? `de ${args.materia}` : "";
  const prazo =
    args.diasAteProva != null
      ? `Faltam ${args.diasAteProva} dia(s) para a prova.`
      : "A prova está chegando.";
  return `Você é o "Tutor Brilha", um(a) professor(a) PACIENTE que ajuda ${aluno} (${idade}) a se preparar para uma PROVA ${materia} sobre "${args.tema}". ${prazo}

REGRAS ABSOLUTAS:
1. NUNCA entregue as respostas prontas. Você ENSINA passo a passo como um professor particular.
2. Divida o estudo em micro-blocos de 5-10 min: revisão do conceito → 1 exemplo guiado → 1 pergunta para a criança resolver → correção carinhosa.
3. Sempre pergunte ANTES de explicar: "o que você já sabe sobre isso?" — e parta da resposta dela.
4. Se ela errar, NÃO dê a resposta. Faça uma pergunta menor que a leve ao próximo passo.
5. Se ela acertar, ELOGIE algo específico e suba um pouquinho a dificuldade.
6. Linguagem simples, frases curtas, emojis com moderação (1 por mensagem no máximo).
7. Se ela pedir "me dá a resposta", responda: "Eu te ajudo a chegar lá! 💛 Olha só, vamos por partes..."
8. Quando perceber cansaço ou após boa sequência produtiva, encerre o estudo do dia e sugira voltar amanhã ou explorar outras categorias do app.
9. Responda SEMPRE em JSON válido: {"resposta": "...", "encerrar_hoje": false}. Use "encerrar_hoje": true APENAS na despedida final.

Tema da prova: ${args.tema}`;
}

export const conversarTutorIA = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<TutorResult> => {
    const system =
      data.modo === "trabalho"
        ? systemPromptTrabalho(data)
        : data.modo === "missao-prova"
          ? systemPromptMissaoProva(data)
          : systemPromptPlanoDiario(data);

    const messages = [
      { role: "system" as const, content: system },
      ...(data.historico || []),
      { role: "user" as const, content: data.mensagem },
    ];

    const { chatCompletionFallback } = await import("./ai-chat-fallback");
    const result = await chatCompletionFallback({
      messages,
      max_tokens: 600,
      temperature: 0.7,
      json: true,
      label: `tutor-ia:${data.modo}`,
    });

    if (!result.ok) {
      if (result.motivo === "limite") {
        return {
          ok: false,
          motivo: "limite",
          mensagem:
            "Ufa! Já conversamos bastante agora 💛 Espere alguns minutos e voltamos juntos. Que tal explorar outras categorias enquanto isso?",
        };
      }
      if (result.motivo === "creditos") {
        return {
          ok: false,
          motivo: "creditos",
          mensagem:
            "Por hoje meus créditos acabaram 🌙 Mas calma — seu trabalho está SALVO automaticamente. Pode continuar escrevendo do seu jeito que, quando os créditos voltarem, eu revejo tudo, aponto erros de português e ajudo você a terminar com perfeição. 💛",
        };
      }
      return {
        ok: false,
        motivo: "erro",
        mensagem: "O Tutor Brilha cochilou um pouquinho 😴 Tenta de novo em instantes!",
      };
    }

    const raw = result.text;
    let resposta = raw;
    let encerrarHoje = false;
    try {
      const parsed = JSON.parse(raw);
      if (typeof parsed?.resposta === "string") resposta = parsed.resposta;
      if (typeof parsed?.encerrar_hoje === "boolean") encerrarHoje = parsed.encerrar_hoje;
    } catch {
      // se vier texto puro, usa direto
    }

    return { ok: true, resposta, encerrarHoje };
  });

