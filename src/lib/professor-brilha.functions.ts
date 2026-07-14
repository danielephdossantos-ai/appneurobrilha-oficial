import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

function getServerClient() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}


const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(4000),
});

const ContextoSchema = z.object({
  cursoSlug: z.string().min(1).max(120),
  aulaSlug: z.string().min(1).max(120),
  cursoTitulo: z.string().max(200).optional(),
  aulaTitulo: z.string().max(200).optional(),
  serie: z.string().max(40).optional(),
  disciplina: z.string().max(60).optional(),
  bncc: z.array(z.string().max(40)).max(10).optional(),
  cenaAtual: z.string().max(80).optional(),
  resumoAula: z.string().max(6000).optional(),
});

const InputSchema = z.object({
  contexto: ContextoSchema,
  mensagem: z.string().min(1).max(1500),
  historico: z.array(MessageSchema).max(40).optional(),
});

type ProfResult =
  | { ok: true; resposta: string }
  | { ok: false; motivo: "creditos" | "limite" | "erro"; mensagem: string };

function inferIdade(serie?: string): number {
  if (!serie) return 10;
  const m = serie.match(/(\d+)/);
  if (!m) return 10;
  const n = parseInt(m[1], 10);
  return Math.min(17, Math.max(5, n + 5));
}

function systemPrompt(ctx: z.infer<typeof ContextoSchema>, bnccInfo: string): string {
  const idade = inferIdade(ctx.serie);
  const bncc = ctx.bncc?.length ? ctx.bncc.join(", ") : "";
  return `Você é o "Professor Brilha", um(a) professor(a) muito paciente e carinhoso(a) que ajuda uma criança com dúvidas EM CIMA da aula que ela está fazendo agora, dentro do app Escola Brilha.

CONTEXTO DA AULA ATUAL:
- Disciplina: ${ctx.disciplina ?? "Geografia"}
- Série: ${ctx.serie ?? "Ensino Fundamental"} (idade aproximada: ${idade} anos)
- Curso: ${ctx.cursoTitulo ?? ctx.cursoSlug}
- Aula: ${ctx.aulaTitulo ?? ctx.aulaSlug}
- Código BNCC: ${bncc || "não informado"}
- Cena em que a criança está agora: ${ctx.cenaAtual ?? "início da aula"}
${ctx.resumoAula ? `\nCONTEÚDO DA AULA:\n${ctx.resumoAula}\n` : ""}
${bnccInfo ? `\nBASE PEDAGÓGICA (BNCC oficial):\n${bnccInfo}\n` : ""}

REGRAS ABSOLUTAS:
1. MANTENHA A CONVERSA ATIVA. Sempre responda considerando as mensagens anteriores desta conversa. Respostas curtas da criança ("sim", "não", "acho", "não sei", "por quê?", "e se...") SÃO continuação da SUA última pergunta — nunca trate como mudança de assunto. Só use o redirecionamento "Isso é assunto de outra aula" quando a criança realmente pedir algo claramente fora do tema (ex: "quero jogar", "fala do Neymar", "conta piada"). Se ela disser só "sim" ou "não", INTERPRETE como resposta à sua pergunta anterior e continue explicando/perguntando.
2. Fique dentro do tema da aula (ou conhecimento diretamente ligado a ela). Se precisar redirecionar, faça com carinho: "Isso é assunto de outra aula! Aqui a gente tá estudando ${ctx.aulaTitulo ?? "esse tema"}. Me pergunta algo sobre isso 💛".
3. NUNCA entregue a resposta pronta das atividades. Explique o CONCEITO, dê EXEMPLOS diferentes, faça perguntas guiadas.
4. Linguagem de criança de ${idade} anos: frases curtas, palavras simples, exemplos do dia a dia. No máximo 1 emoji por mensagem.
5. Se ela errar, seja gentil: "Quase! Olha por outro ângulo..." Se acertar, elogie algo específico.
6. Se pedir "me dá a resposta": "Eu te ajudo a chegar lá, mas quem descobre é você 💛 Vamos por partes..."
7. Respostas curtas (2-5 frases). Se precisar mais, quebre em duas.
8. Ao fazer uma pergunta, deixe-a clara para que "sim/não" já responda. E aceite "sim/não" como resposta válida — continue de onde parou.

Responda em texto simples (sem JSON, sem markdown pesado). Fale como um professor real conversando.`;
}

async function buscarBnccInfo(codigos: string[] | undefined): Promise<string> {
  if (!codigos || codigos.length === 0) return "";
  try {
    const supabase = getServerClient();
    const { data } = await supabase
      .from("bncc_habilidades")
      .select("codigo_bncc, titulo, descricao, objeto_conhecimento, unidade_tematica")
      .in("codigo_bncc", codigos)
      .limit(5);
    if (!data || data.length === 0) return "";
    return data
      .map(
        (h: any) =>
          `• ${h.codigo_bncc} — ${h.titulo ?? ""}\n  ${h.descricao ?? ""}${h.objeto_conhecimento ? `\n  Objeto: ${h.objeto_conhecimento}` : ""}`,
      )
      .join("\n");
  } catch (e) {
    console.error("[professor-brilha] bncc lookup falhou:", e);
    return "";
  }
}


export const professorBrilhaChat = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<ProfResult> => {
    // Precisamos de PELO MENOS uma chave (Groq primária, Lovable reserva)
    if (!process.env.GROQ_API_KEY && !process.env.LOVABLE_API_KEY) {
      return {
        ok: false,
        motivo: "erro",
        mensagem: "Professor Brilha ainda não tá configurado. Avise um adulto.",
      };
    }


    const supabase = getServerClient();
    const userId: string | null = null;
    const { contexto, mensagem } = data;



    // 1) Buscar / criar conversa desta aula (somente se autenticado)
    const { data: existente } = userId
      ? await supabase
          .from("professor_brilha_conversas")
          .select("id, mensagens")
          .eq("user_id", userId)
          .eq("curso_slug", contexto.cursoSlug)
          .eq("aula_slug", contexto.aulaSlug)
          .maybeSingle()
      : { data: null as any };

    const historico: Array<{ role: "user" | "assistant"; content: string }> = Array.isArray(
      existente?.mensagens,
    )
      ? (existente!.mensagens as any[]).filter(
          (m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string",
        )
      : [];

    // Limitar histórico às últimas 20 trocas
    const historicoCurto = historico.slice(-20);

    // 2) Contexto BNCC
    const bnccInfo = await buscarBnccInfo(contexto.bncc);
    const system = systemPrompt(contexto, bnccInfo);

    const messages = [
      { role: "system" as const, content: system },
      ...historicoCurto,
      { role: "user" as const, content: mensagem },
    ];

    // 3) Chamar IA — Lovable AI (primária) → Groq (reserva) via helper
    const { chatCompletionFallback } = await import("./ai-chat-fallback");
    const result = await chatCompletionFallback({
      messages,
      max_tokens: 500,
      temperature: 0.7,
      label: "professor-brilha",
    });
    if (!result.ok) {
      if (result.motivo === "creditos") {
        return {
          ok: false,
          motivo: "creditos",
          mensagem:
            "Meus créditos acabaram por hoje 🌙 Avise um adulto pra recarregar. Enquanto isso, continua explorando a aula!",
        };
      }
      if (result.motivo === "limite") {
        return {
          ok: false,
          motivo: "limite",
          mensagem: "Ufa, tô pensando demais agora 😅 Espera uns minutinhos e me pergunta de novo!",
        };
      }
      return {
        ok: false,
        motivo: "erro",
        mensagem: "Cochilei um pouquinho 😴 Tenta de novo em instantes!",
      };
    }
    const resposta = result.text;
    console.log("[professor-brilha] respondido via", result.fonte);



    // 4) Salvar conversa (upsert)
    const novasMensagens = [
      ...historico,
      { role: "user" as const, content: mensagem, ts: new Date().toISOString() },
      { role: "assistant" as const, content: resposta, ts: new Date().toISOString() },
    ].slice(-100); // teto de 100 mensagens

    if (userId) {
      try {
        if (existente?.id) {
          await supabase
            .from("professor_brilha_conversas")
            .update({ mensagens: novasMensagens })
            .eq("id", existente.id);
        } else {
          await supabase.from("professor_brilha_conversas").insert({
            user_id: userId,
            curso_slug: contexto.cursoSlug,
            aula_slug: contexto.aulaSlug,
            disciplina: contexto.disciplina ?? null,
            serie: contexto.serie ?? null,
            mensagens: novasMensagens,
          });
        }
      } catch (e) {
        console.error("[professor-brilha] persist falhou:", e);
      }
    }

    return { ok: true, resposta };
  });

export const carregarConversaProfessorBrilha = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z
      .object({ cursoSlug: z.string().min(1).max(120), aulaSlug: z.string().min(1).max(120) })
      .parse(input),
  )
  .handler(async () => {
    return { mensagens: [] as Array<{ role: "user" | "assistant"; content: string }> };
  });
