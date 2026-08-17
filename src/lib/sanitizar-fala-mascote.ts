/**
 * Remove auto-apresentações do mascote ("Oi! Eu sou o Pip", "Sou a Pipa"...).
 *
 * Regra do produto: o mascote NUNCA fala o próprio nome (Pip / Pipa), porque
 * há aulas com mascote menina e outras com mascote menino — a apresentação
 * com gênero fixo confunde a família. A fala vira uma saudação neutra
 * usando o nome da criança.
 */

const NOMES = "(?:pip|pipa)";

// "Oi! Eu sou o Pip." | "Olá, eu sou a Pipa!" | "Sou o Pip," | "Meu nome é Pipa."
const AUTO_APRESENTACAO = new RegExp(
  `((?:oi|ol[áa]|e a[íi]|opa)[^.!?]{0,30}[,!:]?\\s*)?` +
    `(?:eu\\s+)?(?:sou\\s+(?:o|a|d[oa])?\\s*${NOMES}|me\\s+chamo\\s+${NOMES}|meu\\s+nome\\s+[ée]\\s+${NOMES})` +
    `[^.!?]*[.!?]?`,
  "gi",
);

// "Oi de novo! Sou a Pip." → sobra saudação solta; normalizamos espaços depois.
export function sanitizarFalaMascote(texto: string, nomeCrianca?: string): string {
  if (!texto) return texto;
  const nome = (nomeCrianca ?? "").trim();
  const saudacao = nome ? `Oi, ${nome}, vamos começar uma aventura!` : "Oi, vamos começar uma aventura!";

  let out = texto;
  if (AUTO_APRESENTACAO.test(out)) {
    AUTO_APRESENTACAO.lastIndex = 0;
    let usou = false;
    out = out.replace(AUTO_APRESENTACAO, () => {
      if (usou) return "";
      usou = true;
      return saudacao;
    });
  }

  return out.replace(/[ \t]{2,}/g, " ").replace(/\s+([.,!?])/g, "$1").trim();
}
