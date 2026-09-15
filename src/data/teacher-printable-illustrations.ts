import type { IllustrationName, MediaItem } from "@/components/teacher/printable/activity-types";

export const teacherIllustrations: Record<IllustrationName, MediaItem> = {
  casa: { illustration: "casa", label: "casa" }, bola: { illustration: "bola", label: "bola" }, cachorro: { illustration: "cachorro", label: "cachorro" }, gato: { illustration: "gato", label: "gato" }, sapo: { illustration: "sapo", label: "sapo" }, abelha: { illustration: "abelha", label: "abelha" }, borboleta: { illustration: "borboleta", label: "borboleta" }, peixe: { illustration: "peixe", label: "peixe" }, arvore: { illustration: "arvore", label: "árvore" }, flor: { illustration: "flor", label: "flor" }, banana: { illustration: "banana", label: "banana" }, maca: { illustration: "maca", label: "maçã" }, uva: { illustration: "uva", label: "uva" }, livro: { illustration: "livro", label: "livro" }, lapis: { illustration: "lapis", label: "lápis" }, tesoura: { illustration: "tesoura", label: "tesoura" }, escola: { illustration: "escola", label: "escola" }, crianca: { illustration: "crianca", label: "criança" }, mao: { illustration: "mao", label: "mão" }, estrela: { illustration: "estrela", label: "estrela" }, coracao: { illustration: "coracao", label: "coração" }, bebe: { illustration: "bebe", label: "bebê" }, mae: { illustration: "mae", label: "mãe" }, pai: { illustration: "pai", label: "pai" }, sol: { illustration: "sol", label: "sol" }, pato: { illustration: "pato", label: "pato" }, rato: { illustration: "rato", label: "rato" }, circulo: { illustration: "circulo", label: "círculo" }, quadrado: { illustration: "quadrado", label: "quadrado" }, triangulo: { illustration: "triangulo", label: "triângulo" }, numero: { illustration: "numero", label: "número" }, letra: { illustration: "letra", label: "letra" }, silaba: { illustration: "silaba", label: "sílaba" },
};

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export function teacherPrintableMedia(label: string): MediaItem {
  const key = normalize(label) as IllustrationName;
  if (key in teacherIllustrations) return { ...teacherIllustrations[key], label };
  return { illustration: "letra", label };
}

export const printableIllustrationCount = Object.keys(teacherIllustrations).length;
