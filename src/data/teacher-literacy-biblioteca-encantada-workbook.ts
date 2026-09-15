import type { LiteracyModule, PrintableActivity, PrintablePage } from "@/components/teacher/printable/activity-types";
import { trilhaBibliotecaEncantada } from "@/escola-brilha/biblioteca-encantada/registry";

export const TEACHER_BIBLIOTECA_ENCANTADA_WORKBOOK: LiteracyModule[] = trilhaBibliotecaEncantada.aulas.map((lesson) => {
  const presentation = lesson.cenas.filter(scene => scene.tipo === "olha");
  const pecs = lesson.cenas.filter(scene => scene.tipo === "pecs");
  const opening = lesson.cenas.find(scene => scene.tipo === "abertura");
  const ending = lesson.cenas.find(scene => scene.tipo === "fim");
  const route = `/escola-brilha/biblioteca-encantada/${lesson.slug}`;

  const guide: PrintableActivity = {
    kind: "guide",
    objective: lesson.objetivo,
    materials: ["folhas impressas", "lápis", "tesoura sem ponta e cola para cartões PECS"],
    preparation: ["Organize a sequência visual: início, atividade e fim.", `Palavras-alvo: ${lesson.palavrasAlvo.join(" · ")}`],
    steps: [opening?.fala ?? `Apresente ${lesson.titulo}.`, ...presentation.map(scene => scene.fala), ...pecs.map(scene => scene.fala), ending?.fala ?? "Finalize retomando as palavras-alvo."],
    observe: ["atenção conjunta", "nomeação ou apontar funcional", "escolha entre alvo e distrator", "necessidade de pista visual, gestual ou modelagem"],
  };

  const vocabulary: PrintableActivity = {
    kind: "source-sheet",
    instruction: `Observe, aponte e nomeie. Depois contorne as palavras-alvo: ${lesson.palavrasAlvo.join(" e ")}.`,
    items: presentation.map(scene => ({ label: scene.palavra, media: { srcUrl: scene.imagem, label: scene.palavra }, responseLines: 1 })),
    note: "As imagens e palavras são as mesmas apresentadas na aula digital original.",
  };

  const choice: PrintableActivity = {
    kind: "source-sheet",
    instruction: "Recorte os cartões. Leia ou escute o comando do professor e cole a imagem correta no quadro.",
    items: pecs.flatMap(scene => [
      { label: scene.palavra, media: { srcUrl: scene.imagem, label: scene.palavra }, options: ["ALVO"] },
      ...scene.distratores.map(item => ({ label: item.palavra, media: { srcUrl: item.imagem, label: item.palavra }, options: ["DISTRAÇÃO"] })),
    ]).slice(0, 6),
    note: "Na aplicação com a criança, cubra as palavras ALVO/DISTRAÇÃO antes de entregar a folha.",
  };

  const answer: PrintableActivity = {
    kind: "answer",
    answerKey: pecs.map(scene => `${scene.fala} Resposta: ${scene.palavra}.`),
    likelyError: "Escolher a figura mais chamativa ou repetir a última opção apresentada.",
    intervention: "Reduza para duas imagens, aponte o quadro visual, repita o comando uma vez e aguarde a resposta.",
    decision: "Registre se apontou sozinho, com pista gestual, com modelagem ou ainda não escolheu.",
    relatedActivity: `Biblioteca Encantada → Aula ${lesson.numero} → ${lesson.titulo}`,
  };

  const pages: PrintablePage[] = [
    { id: `be-${lesson.slug}-guia`, number: 1, title: "Roteiro neuroinclusivo do professor", purpose: "Aplicar a rotina TEACCH/PECS da aula digital em material impresso.", audience: "teacher", activity: guide },
    { id: `be-${lesson.slug}-vocabulario`, number: 2, title: `${lesson.titulo} · vocabulário`, purpose: "Reconhecer, apontar e nomear as palavras-alvo da aula.", audience: "student", activity: vocabulary },
    { id: `be-${lesson.slug}-pecs`, number: 3, title: `${lesson.titulo} · cartões visuais`, purpose: "Escolher a imagem pedida entre alvo e distratores da própria aula.", audience: "student", activity: choice },
    { id: `be-${lesson.slug}-gabarito`, number: 4, title: "Gabarito e registro de apoio", purpose: "Corrigir sem mostrar a resposta na folha da criança.", audience: "teacher", activity: answer },
  ];

  return {
    id: `biblioteca-encantada-${lesson.slug}`,
    number: lesson.numero,
    title: `${lesson.numero}. ${lesson.titulo}`,
    summary: lesson.objetivo,
    source: { app: "Biblioteca Encantada", location: `Escola Brilha → Biblioteca Encantada → Aula ${lesson.numero} → ${lesson.titulo}`, route, activityType: "TEACCH · PECS · ABA · linguagem receptiva e expressiva" },
    relatedResources: [{ source: "Escola Brilha", title: lesson.titulo, reason: "Aula digital original da Biblioteca Encantada.", route }],
    pages,
  } satisfies LiteracyModule;
});

export const TOTAL_BIBLIOTECA_ENCANTADA_TEACHER_LESSONS = TEACHER_BIBLIOTECA_ENCANTADA_WORKBOOK.length;
