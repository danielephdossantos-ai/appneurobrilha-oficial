import type { AulaDinamica } from "@/lib/groq-professor.functions";
import type { Discipline, LessonV2, OptionV2, ResumoFormat } from "../types/lesson-v2";

function imageUrl(term: string, w = 1200, h = 700) {
  const q = encodeURIComponent(term.trim());
  return `https://source.unsplash.com/${w}x${h}/?${q}`;
}

function disciplineFromText(text?: string | null): Discipline {
  const normalized = (text ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (normalized.includes("mat")) return "Matemática";
  if (normalized.includes("port") || normalized.includes("lingua portuguesa")) return "Língua Portuguesa";
  if (normalized.includes("cien")) return "Ciências";
  if (normalized.includes("hist")) return "História";
  if (normalized.includes("geo")) return "Geografia";
  if (normalized.includes("arte")) return "Arte";
  if (normalized.includes("ingles")) return "Língua Inglesa";
  if (normalized.includes("relig")) return "Ensino Religioso";
  return "Ciências";
}

function gradeFromCode(code: string, fallback?: string | null) {
  if (fallback) return fallback;
  const m = code.match(/^EF0(\d)/i);
  return m ? `${m[1]}º Ano` : "6º Ano";
}

function resumoFormatFor(discipline: Discipline): ResumoFormat {
  if (discipline === "Matemática") return "flow";
  if (discipline === "História") return "timeline";
  if (discipline === "Geografia") return "table";
  if (discipline === "Ciências") return "diagram";
  return "mindmap";
}

function toOptions(opcoes: string[], correct: "A" | "B" | "C", reason: string): OptionV2[] {
  const letters: Array<"A" | "B" | "C"> = ["A", "B", "C"];
  return opcoes.map((option, index) => {
    const letter = letters[index];
    const isCorrect = letter === correct;
    return {
      text: option.replace(/^[ABC][).]\s*/i, ""),
      isCorrect,
      reason: isCorrect ? reason : `Quase. Compare com a explicação: ${reason}`,
    };
  });
}

export function aulaDinamicaToLessonV2(
  aula: AulaDinamica,
  meta: {
    bnccCode: string;
    bnccObjective?: string | null;
    serie?: string | null;
    disciplina?: string | null;
    xp?: number | null;
  },
): LessonV2 {
  const discipline = disciplineFromText(meta.disciplina);
  const guided = aula.telas.atividadeGuiada;
  const challenge = aula.telas.desafio;
  const review = aula.telas.revisao;

  return {
    id: `groq:${meta.bnccCode}`,
    title: aula.titulo,
    discipline,
    grade: gradeFromCode(meta.bnccCode, meta.serie),
    bnccCode: meta.bnccCode,
    bnccObjective: meta.bnccObjective ?? `Habilidade ${meta.bnccCode}.`,
    xp: meta.xp ?? 30,
    templateMeta: {
      slug: "groq-aula-real",
      name: "Aula real gerada pela IA",
      disciplina: discipline,
      steps: [
        "Missão",
        "Exploração",
        "Explicação",
        "Exemplo",
        "Prática Guiada",
        "Atividade",
        "Desafio",
        "Revisão",
        "Domínio",
      ].map((label, i) => ({ n: i + 1, label, applied: true, source: "Groq + BNCC" })),
    },
    screens: {
      missao: {
        studentObjective: aula.telas.missao.texto,
        contextEmoji: "✨",
        contextLine: aula.metafora,
        whatYouWillDo: [
          aula.telas.exploracao.titulo,
          aula.telas.explicacao.titulo,
          aula.telas.exemploAplicado.titulo,
        ],
        heroImage: imageUrl(aula.telas.missao.termoBusca),
      },
      exploracao: {
        provokingQuestion: aula.telas.exploracao.titulo,
        observation: aula.telas.exploracao.texto,
        pairs: aula.telas.exploracao.interativos.map((item) => ({
          left: item.label,
          right: item.explicacao,
        })),
        heroImage: imageUrl(aula.telas.exploracao.termoBusca),
        caption: "Imagem real de apoio para observar antes de responder.",
      },
      explicacao: {
        conceito: aula.telas.explicacao.paragrafos[0] ?? aula.telas.explicacao.titulo,
        passoAPasso: aula.telas.passoAPasso.passos.map((passo, i) => ({
          step: `Passo ${i + 1}`,
          detail: passo,
        })),
        exemplo: aula.telas.exemploAplicado.enunciado,
        aplicacao: aula.telas.exemploAplicado.resolucao.join(" "),
        resumo: review.pontosChave.join(" • "),
      },
      exemplo: {
        question: aula.telas.exemploAplicado.enunciado,
        resolution: aula.telas.exemploAplicado.resolucao.map((line, i) => ({
          line,
          note: `${i + 1}`,
        })),
        answer: aula.telas.exemploAplicado.resolucao.at(-1) ?? aula.telas.exemploAplicado.enunciado,
        why: aula.metafora,
        image: imageUrl(aula.telas.exemploAplicado.termoBusca),
      },
      guiada: {
        prompt: guided.pergunta,
        hint: guided.dica,
        options: toOptions(guided.opcoes, guided.respostaCorreta, guided.explicacaoResposta),
      },
      atividade: {
        items: [
          {
            question: guided.pergunta,
            options: toOptions(guided.opcoes, guided.respostaCorreta, guided.explicacaoResposta),
          },
          {
            question: challenge.enunciado,
            options: toOptions(challenge.opcoes, challenge.respostaCorreta, challenge.explicacaoResposta),
          },
        ],
      },
      desafio: {
        contextualScenario: challenge.titulo,
        question: challenge.enunciado,
        options: toOptions(challenge.opcoes, challenge.respostaCorreta, challenge.explicacaoResposta),
      },
      resumo: {
        format: resumoFormatFor(discipline),
        title: review.titulo,
        nodes: review.pontosChave.map((point, i) => ({
          label: `Ideia ${i + 1}`,
          detail: point,
        })),
        takeaways: review.pontosChave,
      },
      dominio: {
        bnccCode: meta.bnccCode,
        bnccObjective: meta.bnccObjective ?? `Habilidade ${meta.bnccCode}.`,
        recommendation: aula.telas.conclusao.mensagemFinal,
      },
    },
  };
}