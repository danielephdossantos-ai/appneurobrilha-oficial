import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { chamarProfessorMentorIA } from "@/lib/ai-orchestrator.server";
import { extrairJSON } from "@/lib/ai-json.server";
import { criarConsultaExataRecursos, type PaginaAulaEscolar } from "@/lib/apoio-escolar-v2";

const tipoPagina = z.enum(["acolhimento", "objetivo", "explicacao", "modelo_visual", "modelo_simbolico", "exemplo", "erros_comuns", "pratica_guiada", "exercicio", "desafio", "video", "revisao", "correcao"]);
const PaginaSchema = z.object({ ordem: z.number().int().min(1).max(14), tipo: tipoPagina, titulo: z.string().min(4), conteudo: z.string().min(30), itens: z.array(z.string().min(4)).optional() });
const AulaSchema = z.object({ materia: z.string().min(2), topico: z.string().min(2), paginas: z.array(PaginaSchema).length(14) });

const normalizar = (valor: string) => valor.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function validarAula(aula: z.infer<typeof AulaSchema>, materia: string, topico: string) {
  const ordens = aula.paginas.map((pagina) => pagina.ordem);
  if (new Set(ordens).size !== 14 || Math.min(...ordens) !== 1 || Math.max(...ordens) !== 14) throw new Error("A IA não entregou as 14 etapas completas.");
  const termos = normalizar(topico).split(/\s+/).filter((termo) => termo.length >= 4);
  const texto = normalizar(`${aula.materia} ${aula.topico} ${aula.paginas.map((p) => `${p.titulo} ${p.conteudo} ${(p.itens ?? []).join(" ")}`).join(" ")}`);
  if (!termos.some((termo) => texto.includes(termo))) throw new Error("A IA tentou gerar outro assunto. A aula foi recusada.");
  if (!normalizar(aula.materia).includes(normalizar(materia).slice(0, 5))) throw new Error("A IA trocou a matéria. A aula foi recusada.");
}

export const gerarAulaCompletaMissaoV2 = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ sessionId: z.string().uuid(), childId: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const supabase = context.supabase as any;
    const { data: sessao, error } = await supabase.from("school_support_sessions")
      .select("id,topic,mission:school_support_missions!inner(id,child_id,kind,subject,school_year,due_date)")
      .eq("id", data.sessionId).single();
    if (error || !sessao) throw new Error("Aula não encontrada.");
    const missao = Array.isArray(sessao.mission) ? sessao.mission[0] : sessao.mission;
    if (!missao || missao.child_id !== data.childId) throw new Error("Esta aula não pertence à criança selecionada.");
    const { data: crianca } = await supabase.from("children").select("idade,serie,hiperfoco,tempo_atencao_min").eq("id", data.childId).maybeSingle();
    const materia = String(missao.subject).trim();
    const topico = String(sessao.topic).trim();
    const serie = String(missao.school_year || crianca?.serie || "não informada");
    const metodologia = missao.kind === "prova"
      ? "Prepare revisão completa, técnica de memorização, questões parecidas com prova, mini simulado e correção comentada."
      : missao.kind === "tarefa"
        ? "Ensine o conhecimento necessário, resolva um exemplo diferente e conduza a tarefa com pistas sem entregar a resposta final."
        : "Conduza uma oficina: explique como pesquisar, selecionar fontes, planejar introdução-desenvolvimento-conclusão, revisar e apresentar o trabalho.";
    const instrucao = `Você é o Professor Mentor NeuroBrilha, professor experiente da escola brasileira. Crie um AULÃO que uma família sem formação docente consiga acompanhar.
MATÉRIA OBRIGATÓRIA: ${materia}. CONTEÚDO OBRIGATÓRIO: ${topico}. SÉRIE: ${serie}. IDADE: ${crianca?.idade ?? "não informada"}.
${metodologia}
Fale diretamente com o aluno, em português brasileiro, como numa explicação de lousa. Não use frases vazias como "imagine no caderno" ou "desenhe no caderno" sem ensinar o conteúdo.
Cada página precisa acrescentar conhecimento novo. Ensine antes de perguntar e explique cada termo novo com definição, exemplo e contraexemplo.
Inclua pelo menos dois exemplos totalmente resolvidos, sem pular etapas, prática guiada, quatro exercícios progressivos, técnica de memorização e gabarito explicado.
Em Matemática mostre contas, modelos visuais e raciocínio. Em Português use textos curtos autorais e análise linguística real. Em Ciências, História e Geografia explique relações de causa e efeito, vocabulário e aplicações.
Adapte a linguagem à série, mas mantenha conteúdo escolar correto e substancioso. Considere a BNCC sem inventar códigos. Não invente links nem indique vídeos dentro das páginas.
As 14 páginas devem seguir: 1 acolhimento; 2 objetivo; 3 explicacao; 4 modelo_visual; 5 modelo_simbolico; 6 exemplo; 7 exemplo; 8 erros_comuns; 9 pratica_guiada; 10 exercicio; 11 desafio; 12 video; 13 revisao; 14 correcao.
Retorne somente JSON: {"materia":"${materia}","topico":"${topico}","paginas":[{"ordem":1,"tipo":"acolhimento","titulo":"...","conteudo":"...","itens":["..."]}]}`;
    const ai = await chamarProfessorMentorIA({ label: "apoio-escolar-v2", json: true, temperature: 0.25, max_tokens: 8192, messages: [{ role: "system", content: instrucao }, { role: "user", content: `Prepare a aula completa de ${materia} sobre ${topico} para ${serie}.` }] });
    const aula = AulaSchema.parse(extrairJSON(ai.text));
    validarAula(aula, materia, topico);
    const paginas = [...aula.paginas].sort((a, b) => a.ordem - b.ordem) as PaginaAulaEscolar[];
    const resourceQuery = criarConsultaExataRecursos({ tipo: missao.kind, materia, conteudos: [topico], dataEntrega: missao.due_date, serie });
    const { error: updateError } = await supabase.from("school_support_sessions").update({ lesson_pages: paginas, resource_query: resourceQuery }).eq("id", sessao.id).eq("mission_id", missao.id);
    if (updateError) throw updateError;
    return { paginas, resourceQuery, provider: ai.provider };
  });
