import type { ActivityLessonC, BNCCArea } from "../types/activity-lesson-c";
import type { AulaBncc } from "../hooks/useAulasBncc";
import { cleanVisibleLessonText, friendlyLessonTitle, friendlySubject } from "./bnccDisplayText";
import { buildSkillLessonC, isLowQualitySkillLesson } from "./skillLessonBuilder";

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
  linguagens: { from: "from-rose-500", to: "to-pink-600", accent: "text-rose-600" },
  matematica: { from: "from-blue-500", to: "to-cyan-600", accent: "text-blue-600" },
  ciencias_natureza: { from: "from-emerald-500", to: "to-teal-600", accent: "text-emerald-600" },
  ciencias_humanas: { from: "from-amber-600", to: "to-orange-600", accent: "text-amber-700" },
  ensino_religioso: { from: "from-violet-500", to: "to-purple-600", accent: "text-violet-600" },
};

/**
 * Faz merge do payload do banco com defaults seguros para que o ActivityPlayerC
 * nunca quebre caso o JSON salvo esteja incompleto.
 */
export function normalizeLessonC(aula: AulaBncc): ActivityLessonC {
  const raw = (aula.payload ?? {}) as Partial<ActivityLessonC> & {
    screens?: any;
  };
  const meta =
    AREA_BY_DISCIPLINA[aula.disciplina] ??
    { area: "linguagens" as BNCCArea, area_label: aula.disciplina || "BNCC" };
  const color = raw.color ?? COLOR_BY_AREA[meta.area];

  const subject = raw.subject || aula.disciplina;
  if (isLowQualitySkillLesson(raw)) {
    return buildSkillLessonC({
      source: aula,
      area: raw.area || meta.area,
      areaLabel: raw.area_label || meta.area_label,
      color,
    });
  }

  const title = friendlyLessonTitle({ title: raw.title || aula.titulo, subject });
  const subjectFallback = friendlySubject(subject).toLowerCase();
  const desc = cleanVisibleLessonText(
    aula.descricao || raw.bncc_description,
    `Vamos praticar ${subjectFallback} com exemplos simples.`,
  );

  const screens = raw.screens ?? {};
  const missao = screens.missao ?? {};
  const desafio = screens.desafio ?? {};

  return {
    id: raw.id || aula.id,
    title,
    mission_question: cleanVisibleLessonText(
      raw.mission_question || missao.intro,
      `Como usar ${title.toLowerCase()} no dia a dia?`,
    ),
    subject,
    area: raw.area || meta.area,
    area_label: raw.area_label || meta.area_label,
    grade: raw.grade || aula.serie,
    grade_range: raw.grade_range || aula.serie,
    bncc_code: raw.bncc_code || aula.codigo_bncc || "",
    bncc_description: desc || title,
    xp: raw.xp ?? aula.xp ?? 100,
    color,
    screens: {
      missao: {
        intro: cleanVisibleLessonText(missao.intro, `Missão: ${title}`),
        objectives:
          missao.objectives && missao.objectives.length
            ? missao.objectives.map((obj: string, index: number) =>
                cleanVisibleLessonText(
                  obj,
                  [
                    `Entender ${title}`,
                    "Aplicar em situações reais",
                    "Resolver o desafio final",
                  ][index] || "Praticar com atenção",
                ),
              )
            : [`Entender ${title}`, "Aplicar em situações reais", "Resolver o desafio final"],
        context_emoji: missao.context_emoji || "✨",
        context_text: cleanVisibleLessonText(
          missao.context_text,
          desc || `Vamos descobrir sobre ${title}.`,
        ),
      },
      exploracao: {
        instruction: cleanVisibleLessonText(
          screens.exploracao?.instruction,
          "Vamos explorar o tema:",
        ),
        texto: cleanVisibleLessonText(
          screens.exploracao?.texto,
          desc || `${title} é um tema importante de ${subject} no ${aula.serie}.`,
        ),
        pontos_destaque:
          screens.exploracao?.pontos_destaque?.map((p: { emoji?: string; text?: string }, index: number) => ({
            emoji: p.emoji || ["💡", "🔎", "✅"][index] || "✨",
            text: cleanVisibleLessonText(
              p.text,
              [`Conceito-chave de ${title}`, "Observe os detalhes com atenção", "Aplique no desafio"][index] ||
                "Pratique com calma",
            ),
          })) ?? [
            { emoji: "💡", text: `Conceito-chave de ${title}` },
            { emoji: "🔎", text: "Observe os detalhes com atenção" },
          ],
        mascot_tip:
          cleanVisibleLessonText(
            screens.exploracao?.mascot_tip,
            "Leia com calma. Você pode voltar quando quiser!",
          ),
      },
      pontos_chave: {
        intro: cleanVisibleLessonText(screens.pontos_chave?.intro, "Os pontos mais importantes:"),
        points:
          screens.pontos_chave?.points?.map((p: { icon?: string; title?: string; text?: string }, index: number) => ({
            icon: p.icon || ["📌", "🧠", "✅"][index] || "✨",
            title: cleanVisibleLessonText(
              p.title,
              [title, "Por que importa", "Como aplicar"][index] || "Ponto importante",
            ),
            text: cleanVisibleLessonText(
              p.text,
              [desc || "Conceito principal da aula.", "Aparece em situações do dia a dia.", "Use a ideia para resolver problemas."][index] ||
                "Pratique um passo de cada vez.",
            ),
          })) ?? [
            { icon: "📌", title: title, text: desc || "Conceito principal da aula." },
            { icon: "🧠", title: "Por que importa", text: "Aparece em situações do dia a dia." },
            { icon: "✅", title: "Como aplicar", text: "Use a ideia para resolver problemas." },
          ],
      },
      exemplo_aplicado: {
        title: cleanVisibleLessonText(screens.exemplo_aplicado?.title, "Exemplo na prática"),
        scenario: cleanVisibleLessonText(
          screens.exemplo_aplicado?.scenario,
          `Veja um caso de ${title} acontecendo na vida real.`,
        ),
        scenario_emoji: screens.exemplo_aplicado?.scenario_emoji || "🌍",
        analysis:
          screens.exemplo_aplicado?.analysis?.map((step: string, index: number) =>
            cleanVisibleLessonText(
              step,
              ["Identifique o que está acontecendo.", "Aplique o conceito que aprendeu.", "Confira o resultado."][index] ||
                "Siga para o próximo passo.",
            ),
          ) ?? ["Identifique o que está acontecendo.", "Aplique o conceito que aprendeu.", "Confira o resultado."],
        conclusion:
          cleanVisibleLessonText(
            screens.exemplo_aplicado?.conclusion,
            "Entendendo a ideia, fica fácil aplicar em outros casos.",
          ),
        visual_steps: screens.exemplo_aplicado?.visual_steps,
      },
      desafio: {
        question: cleanVisibleLessonText(
          desafio.question || raw.mission_question,
          `Qual é a melhor resposta sobre ${title}?`,
        ),
        context: desafio.context ? cleanVisibleLessonText(desafio.context, "") || undefined : undefined,
        options:
          desafio.options && desafio.options.length
            ? desafio.options.map((opt: { letter: "A" | "B" | "C" | "D"; text?: string; isCorrect: boolean }) => ({
                ...opt,
                text: cleanVisibleLessonText(opt.text, opt.isCorrect ? "Aplicar a ideia da aula." : "Responder sem observar as pistas."),
              }))
            : [
                { letter: "A", text: "Opção A", isCorrect: true },
                { letter: "B", text: "Opção B", isCorrect: false },
                { letter: "C", text: "Opção C", isCorrect: false },
                { letter: "D", text: "Opção D", isCorrect: false },
              ],
        explanation:
          cleanVisibleLessonText(
            desafio.explanation,
            "A resposta correta aplica o conceito visto na aula.",
          ),
      },
    },
  };
}
