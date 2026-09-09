import { PALAVRAS } from "@/modules/alfabetizacao/data/palavras";
import { PALAVRAS_GRADUADAS } from "@/data/alfabetizacao/palavras-graduadas";
import { SEMANAS_ESCRITA_2ANO } from "@/lib/rotina-escrita-2ano";
import { SEMANAS_ESCRITA_3ANO } from "@/lib/rotina-escrita-3ano";
import { SEMANAS_ESCRITA_4ANO } from "@/lib/rotina-escrita-4ano";

export type PalavraSoletracao = { palavra: string; dica: string; nivel: 1 | 2 | 3 };

const semanas = [...SEMANAS_ESCRITA_2ANO, ...SEMANAS_ESCRITA_3ANO, ...SEMANAS_ESCRITA_4ANO];
const dicas = new Map<string, string>();
for (const semana of semanas) for (const item of semana.ditado) dicas.set(item.palavra.toLocaleLowerCase("pt-BR"), item.dica);

const textos = semanas.flatMap((s) => [s.foco, s.fraseSemana, ...s.frasesDia, ...s.palavrasLousa, ...s.ditado.map((d) => d.palavra)]);
const extras = [
  ...PALAVRAS.map((p) => p.palavra), ...PALAVRAS_GRADUADAS.map((p) => p.palavra),
  "acolhimento amizade aprendizagem atenção autonomia biblioteca brincadeira colaboração comunicação comunidade conhecimento criatividade curiosidade descoberta desafio diversidade educação empatia escola estudante experiência família imaginação inclusão infância leitura memória natureza organização participação pesquisa planejamento respeito responsabilidade solução tecnologia tranquilidade vocabulário",
];

const candidatas = [...textos, ...extras].flatMap((texto) => texto.toLocaleLowerCase("pt-BR").match(/[a-záàâãéêíóôõúüç]{3,}/giu) ?? []);
const unicas = [...new Set(candidatas.map((p) => p.toLocaleLowerCase("pt-BR")))].sort((a, b) => a.localeCompare(b, "pt-BR"));

export const PALAVRAS_SOLETRACAO: PalavraSoletracao[] = unicas.map((palavra) => {
  const complexa = /ch|lh|nh|rr|ss|qu|gu|[áàâãéêíóôõúç]/i.test(palavra);
  const nivel: 1 | 2 | 3 = palavra.length <= 5 && !complexa ? 1 : palavra.length <= 8 ? 2 : 3;
  return { palavra, nivel, dica: dicas.get(palavra) ?? `Palavra com ${palavra.length} letras.` };
});

export function normalizarResposta(valor: string) {
  return valor.trim().toLocaleLowerCase("pt-BR").normalize("NFC");
}
