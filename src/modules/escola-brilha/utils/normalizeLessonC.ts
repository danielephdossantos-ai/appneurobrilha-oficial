import type { ActivityLessonC, BNCCArea } from "../types/activity-lesson-c";
import type { AulaBncc } from "../hooks/useAulasBncc";
import { isGenericDesafio, synthesizeDesafio } from "./desafioBank";
import { getFirstYearLessonOverride } from "../data/first-year-lesson-overrides";

const AREA_BY_DISCIPLINA: Record<string, { area: BNCCArea; area_label: string }> = {
  "Língua Portuguesa": { area: "linguagens", area_label: "Linguagens" },
  Português: { area: "linguagens", area_label: "Linguagens" },
  Linguagem: { area: "linguagens", area_label: "Linguagens" },
  Matemática: { area: "matematica", area_label: "Matemática" },
  Ciências: { area: "ciencias_natureza", area_label: "Ciências da Natureza" },
  Geografia: { area: "ciencias_humanas", area_label: "Ciências Humanas" },
  História: { area: "ciencias_humanas", area_label: "Ciências Humanas" },
};

const COLOR_BY_AREA: Record<BNCCArea, ActivityLessonC["color"]> = {
  linguagens: { from: "from-rose-500", to: "to-pink-600", accent: "pink" },
  matematica: { from: "from-blue-500", to: "to-cyan-600", accent: "blue" },
  ciencias_natureza: { from: "from-emerald-500", to: "to-teal-600", accent: "green" },
  ciencias_humanas: { from: "from-amber-600", to: "to-orange-600", accent: "amber" },
  ensino_religioso: { from: "from-violet-500", to: "to-purple-600", accent: "violet" },
};

/**
 * Faz merge do payload do banco com defaults seguros para que o ActivityPlayerC
 * nunca quebre caso o JSON salvo esteja incompleto.
 */
export function normalizeLessonC(aula: AulaBncc): ActivityLessonC {
  const firstYearOverride = getFirstYearLessonOverride({
    codigo_bncc: aula.codigo_bncc,
    serie: aula.serie,
    disciplina: aula.disciplina,
  });

  if (firstYearOverride) {
    return {
      ...firstYearOverride,
      id: firstYearOverride.id || aula.id,
      xp: aula.xp ?? firstYearOverride.xp,
      bncc_code: aula.codigo_bncc || firstYearOverride.bncc_code,
    };
  }

  const raw = (aula.payload ?? {}) as Partial<ActivityLessonC> & {
    screens?: any;
  };
  const meta =
    AREA_BY_DISCIPLINA[aula.disciplina] ??
    { area: "linguagens" as BNCCArea, area_label: aula.disciplina || "BNCC" };
  const color = raw.color ?? COLOR_BY_AREA[meta.area];

  const title = raw.title || aula.titulo;
  const desc = aula.descricao || raw.bncc_description || "";

  const screens = raw.screens ?? {};
  const missao = screens.missao ?? {};
  const desafio = screens.desafio ?? {};

  return {
    id: raw.id || aula.id,
    title,
    mission_question:
      raw.mission_question || missao.intro || `Vamos aprender sobre ${title}!`,
    subject: raw.subject || aula.disciplina,
    area: raw.area || meta.area,
    area_label: raw.area_label || meta.area_label,
    grade: raw.grade || aula.serie,
    grade_range: raw.grade_range || aula.serie,
    bncc_code: raw.bncc_code || aula.codigo_bncc || "",
    bncc_description: raw.bncc_description || desc || title,
    xp: raw.xp ?? aula.xp ?? 100,
    color,
    screens: {
      missao: {
        intro: missao.intro || `Missão: ${title}`,
        objectives:
          missao.objectives && missao.objectives.length
            ? missao.objectives
            : [`Entender ${title}`, "Aplicar em situações reais", "Resolver o desafio final"],
        context_emoji: missao.context_emoji || "✨",
        context_text: missao.context_text || desc || `Vamos descobrir sobre ${title}.`,
      },
      exploracao: {
        instruction: screens.exploracao?.instruction || "Vamos explorar o tema:",
        texto:
          screens.exploracao?.texto ||
          desc ||
          `${title} é um tema importante de ${aula.disciplina} no ${aula.serie}.`,
        pontos_destaque:
          screens.exploracao?.pontos_destaque ?? [
            { emoji: "💡", text: `Conceito-chave de ${title}` },
            { emoji: "🔎", text: "Observe os detalhes com atenção" },
          ],
        mascot_tip:
          screens.exploracao?.mascot_tip ||
          "Leia com calma. Você pode voltar quando quiser!",
      },
      pontos_chave: {
        intro: screens.pontos_chave?.intro || "Os pontos mais importantes:",
        points:
          screens.pontos_chave?.points ?? [
            { icon: "📌", title: title, text: desc || "Conceito principal da aula." },
            { icon: "🧠", title: "Por que importa", text: "Aparece em situações do dia a dia." },
            { icon: "✅", title: "Como aplicar", text: "Use a ideia para resolver problemas." },
          ],
      },
      exemplo_aplicado: {
        title: screens.exemplo_aplicado?.title || "Exemplo na prática",
        scenario:
          screens.exemplo_aplicado?.scenario ||
          `Veja um caso de ${title} acontecendo na vida real.`,
        scenario_emoji: screens.exemplo_aplicado?.scenario_emoji || "🌍",
        analysis:
          screens.exemplo_aplicado?.analysis ?? [
            "Identifique o que está acontecendo.",
            "Aplique o conceito que aprendeu.",
            "Confira o resultado.",
          ],
        conclusion:
          screens.exemplo_aplicado?.conclusion ||
          "Entendendo a ideia, fica fácil aplicar em outros casos.",
        visual_steps: screens.exemplo_aplicado?.visual_steps,
      },
      desafio: (() => {
        if (isGenericDesafio(desafio)) {
          const synth = synthesizeDesafio(
            aula.codigo_bncc || raw.bncc_code || "",
            aula.disciplina || "",
            aula.serie || "",
          );
          return {
            question: synth.question,
            context: desafio.context,
            options: synth.options,
            explanation: synth.explanation,
          };
        }
        return {
          question: desafio.question || raw.mission_question || `Qual a melhor resposta sobre ${title}?`,
          context: desafio.context,
          options: desafio.options,
          explanation:
            desafio.explanation ||
            "A resposta correta aplica o conceito visto na aula.",
        };
      })(),
    },
  };
}
