/**
 * Saudação neutra para o mascote.
 */
const NOMES = "(?:pip|pipa)";
const AUTO_APRESENTACAO = new RegExp(
  `((?:oi|ol[áa]|e a[íi]|opa)[^.!?]{0,30}[,!:]?\\s*)?` +
    `(?:eu\\s+)?(?:sou\\s+(?:o|a|d[oa])?\\s*${NOMES}|me\\s+chamo\\s+${NOMES}|meu\\s+nome\\s+[ée]\\s+${NOMES})` +
    `[^.!?]*[.!?]?`,
  "gi",
);

let nomeAtivo = "";

export function definirNomeCriancaFala(nome?: string) {
  nomeAtivo = (nome ?? "").trim().split(/\s+/)[0] ?? "";
}

export function nomeCriancaFala() {
  return nomeAtivo;
}

export function sanitizarFalaMascote(texto: string, nomeCrianca?: string): string {
  if (!texto) return texto;
  const nome = (nomeCrianca ?? nomeAtivo ?? "").trim();
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