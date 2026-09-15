import type { LiteracyModule, MediaItem, PrintableActivity, PrintablePage } from "@/components/teacher/printable/activity-types";
import { cursosEI } from "@/escola-brilha/curso-portugues-ei/registry";

type AnyRecord = Record<string, unknown>;
type SheetItem = { label: string; media?: MediaItem; options?: string[]; responseLines?: number };
type Extracted = { instruction: string; items: SheetItem[]; answers: string[]; kind: string };

const asRecord = (value: unknown): AnyRecord => value && typeof value === "object" ? value as AnyRecord : {};
const text = (value: unknown) => typeof value === "string" ? value : "";
const list = (value: unknown) => Array.isArray(value) ? value.map(asRecord) : [];
const media = (item: AnyRecord, fallback: string): MediaItem | undefined => {
  const srcUrl = text(item.imagemUrl) || text(item.mascoteUrl);
  return srcUrl ? { srcUrl, label: text(item.nome) || fallback } : undefined;
};

function extractMoment(moment: unknown): Extracted | null {
  const m = asRecord(moment);
  const tipo = text(m.tipo);
  const instruction = text(m.instrucaoAudio) || text(m.perguntaAudio) || text(m.convite) || text(m.pergunta);
  const options = list(m.opcoes);
  if (options.length) {
    const reference = asRecord(m.referencia);
    const items: SheetItem[] = options.map((option) => ({
      label: text(option.nome) || "Opção",
      media: media(option, text(option.nome) || "imagem"),
      options: ["Marcar"],
    }));
    if (text(reference.nome)) items.unshift({ label: `MODELO: ${text(reference.nome)}`, media: media(reference, text(reference.nome)) });
    return { instruction: instruction || "Observe as imagens e marque a resposta que combina com a aula.", items, answers: options.filter(option => option.correta === true).map(option => text(option.nome)), kind: tipo };
  }
  const itens = list(m.itens);
  if (itens.length) return {
    instruction: instruction || "Observe, nomeie e registre cada imagem da aula.",
    items: itens.map(item => ({ label: text(item.nome) || "Imagem da aula", media: media(item, text(item.nome)), responseLines: 1 })),
    answers: itens.map(item => text(item.nome)).filter(Boolean), kind: tipo,
  };
  const cenas = list(m.cenas);
  if (cenas.length) return {
    instruction: `Observe as cenas de “${text(m.titulo) || "História da aula"}”. Numere na ordem e conte o que aconteceu.`,
    items: cenas.map((scene, index) => ({ label: `Cena ${index + 1}`, media: media(scene, `Cena ${index + 1}`), responseLines: 2 })),
    answers: cenas.map((scene, index) => `${index + 1}. ${text(scene.narracao)}`).filter(Boolean), kind: tipo,
  };
  if (text(m.palavra)) return {
    instruction: instruction || "Fale a palavra, separe seus pedaços e registre a quantidade.",
    items: [{ label: text(m.palavra), media: media(m, text(m.palavra)), options: ["1", "2", "3", "4"], responseLines: 1 }],
    answers: [`${text(m.palavra)} — ${String(m.silabas ?? "")} sílabas`], kind: tipo,
  };
  if (instruction) return {
    instruction,
    items: [{ label: instruction, media: media(m, tipo || "Atividade"), responseLines: 5 }],
    answers: [text(m.dicaAdulto) || text(m.dica) || "Resposta oral registrada pelo professor."], kind: tipo,
  };
  return null;
}

function sheet(extracted: Extracted): PrintableActivity {
  return { kind: "source-sheet", instruction: extracted.instruction, items: extracted.items.slice(0, 6), note: `Conteúdo extraído do momento original “${extracted.kind}” desta aula.` };
}

export const TEACHER_LITERACY_EI_WORKBOOK: LiteracyModule[] = cursosEI.flatMap((course) =>
  course.unidades.flatMap((unit) => unit.aulas.map((lesson) => {
    const extracted = lesson.momentos.map(extractMoment).filter((item): item is Extracted => Boolean(item));
    const first = extracted.find(item => item.items.length >= 2) ?? extracted[0];
    const second = extracted.find(item => item !== first && item.items.length >= 2) ?? extracted[1] ?? first;
    const welcome = lesson.momentos.map(asRecord).find(moment => text(moment.falaMascote));
    const mission = lesson.momentos.map(asRecord).find(moment => text(moment.tipo) === "missaoFamilia");
    const route = `/escola-brilha/portugues-ei/${course.serie}/${lesson.slug}`;
    const guide: PrintableActivity = {
      kind: "guide",
      objective: `${lesson.titulo} · BNCC ${lesson.bncc.join(", ")}`,
      materials: ["folhas impressas", "lápis de escrever e colorir", "tesoura sem ponta quando a folha solicitar"],
      preparation: [`Duração original: ${lesson.duracaoMin} minutos`, `Localização: Escola Brilha → Português EI → ${course.serieLabel} → ${unit.titulo}`],
      steps: [text(welcome?.falaMascote) || `Apresente a aula ${lesson.titulo}.`, first?.instruction || "Apresente a primeira atividade da aula.", second?.instruction || "Continue com a prática da aula.", text(mission?.convite) || "Finalize retomando a habilidade."],
      observe: ["compreensão da instrução", "participação oral ou por apontar", "apoio necessário para responder"],
    };
    const answer: PrintableActivity = {
      kind: "answer",
      answerKey: [...(first?.answers ?? []), ...(second?.answers ?? [])].filter(Boolean).slice(0, 12),
      likelyError: "Responder pela aparência da figura sem usar a pista ensinada na aula.",
      intervention: text(mission?.dicaAdulto) || lesson.baseCientifica || "Modele um item, reduza as opções e repita a instrução em uma frase curta.",
      decision: "Registre se realizou sozinho, com pista visual, com modelagem ou ainda não realizou.",
      relatedActivity: `Escola Brilha → Português EI → ${course.serieLabel} → ${lesson.titulo}`,
    };
    const pages: PrintablePage[] = [
      { id: `${course.serie}-${lesson.slug}-guia`, number: 1, title: "Roteiro do professor", purpose: "Aplicar a mesma aula existente no app com apoio visual e registro.", audience: "teacher", activity: guide },
      { id: `${course.serie}-${lesson.slug}-a`, number: 2, title: lesson.titulo, purpose: first?.instruction || lesson.titulo, audience: "student", activity: first ? sheet(first) : guide },
      { id: `${course.serie}-${lesson.slug}-b`, number: 3, title: `${lesson.titulo} · continuação`, purpose: second?.instruction || lesson.titulo, audience: "student", activity: second ? sheet(second) : guide },
      { id: `${course.serie}-${lesson.slug}-gabarito`, number: 4, title: "Gabarito e intervenção", purpose: "Corrigir a atividade sem expor respostas na folha da criança.", audience: "teacher", activity: answer },
    ];
    return {
      id: `ei-${course.serie}-${lesson.slug}`,
      number: 0,
      title: lesson.titulo,
      summary: `${course.serieLabel} · ${unit.titulo}`,
      source: { app: "Escola Brilha", location: `Escola Brilha → Português EI → ${course.serieLabel} → ${unit.titulo} → ${lesson.titulo}`, route, bncc: lesson.bncc.join(" · "), activityType: extracted.map(item => item.kind).filter(Boolean).join(" · ") },
      relatedResources: [{ source: "Escola Brilha", title: lesson.titulo, reason: "Aula digital original usada para gerar estas folhas.", route }],
      pages,
    } satisfies LiteracyModule;
  })),
).map((lesson, index) => ({ ...lesson, number: index + 1, title: `${index + 1}. ${lesson.title}` }));

export const TOTAL_EI_TEACHER_LESSONS = TEACHER_LITERACY_EI_WORKBOOK.length;
