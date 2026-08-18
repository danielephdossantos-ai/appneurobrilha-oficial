import { sanitizarFalaMascote } from "@/lib/sanitizar-fala-mascote";

/**
 * Normalizador Central de Fala PT-BR para NeuroBrilha Kids.
 * Converte números, símbolos e abreviações para formas fonéticas corretas em Português Brasileiro.
 */

// Mapeamento de números isolados (0-100)
const NUMEROS_PT: Record<string, string> = {
  "0": "zero", "1": "um", "2": "dois", "3": "três", "4": "quatro",
  "5": "cinco", "6": "seis", "7": "sete", "8": "oito", "9": "nove",
  "10": "dez", "11": "onze", "12": "doze", "13": "treze", "14": "quatorze",
  "15": "quinze", "16": "dezesseis", "17": "dezessete", "18": "dezoito", "19": "dezenove",
  "20": "vinte", "30": "trinta", "40": "quarenta", "50": "cinquenta",
  "60": "sessenta", "70": "setenta", "80": "oitenta", "90": "noventa", "100": "cem"
};

/**
 * Remove emojis, pictogramas e símbolos decorativos antes de falar.
 */
function normalizeLiteracyTextForSpeech(text: string): string {
  if (!text) return "";
  let out = text;

  // Em telas de alfabetização, "R." deve soar como resposta
  out = out.replace(/\bR\s*[:.]\s*/gi, "Resposta: ");

  // Hifenação silábica em MAIÚSCULO: "BRA-ÇO" -> "braço"
  out = out.replace(
    /\b([A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ]{1,6}(?:[-·][A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ]{1,6}){1,6})\b/g,
    (token) => token.replace(/[-·]/g, "").toLowerCase(),
  );

  // Sílabas CV em MAIÚSCULO
  const silabasSeguras: Record<string, string> = {
    BA: "bá", BE: "bé", BI: "bí", BO: "bó", BU: "bú",
    CA: "cá", CO: "có", CU: "cú",
    DA: "dá", DE: "dé", DI: "dí", DO: "dó", DU: "dú",
    FA: "fá", FE: "fé", FI: "fí", FO: "fó", FU: "fú",
    GA: "gá", GO: "gó", GU: "gú",
    JA: "já", JE: "jé", JI: "jí", JO: "jó", JU: "jú",
    LA: "lá", LE: "lé", LI: "lí", LO: "ló", LU: "lú",
    MA: "má", ME: "mé", MI: "mí", MO: "mó", MU: "mú",
    NA: "ná", NE: "né", NI: "ní", NO: "nó", NU: "nú",
    PA: "pá", PE: "pé", PI: "pí", PO: "pó", PU: "pú",
    RA: "rá", RE: "ré", RI: "rí", RO: "ró", RU: "rú",
    SA: "sá", SE: "sé", SI: "si", SO: "só", SU: "sú",
    TA: "tá", TE: "té", TI: "tí", TO: "tó", TU: "tú",
    VA: "vá", VE: "vé", VI: "ví", VO: "vó", VU: "vú",
  };
  out = out.replace(
    /\b(BA|BE|BI|BO|BU|CA|CO|CU|DA|DE|DI|DO|DU|FA|FE|FI|FO|FU|GA|GO|GU|JA|JE|JI|JO|JU|LA|LE|LI|LO|LU|MA|ME|MI|MO|MU|NA|NE|NI|NO|NU|PA|PE|PI|PO|PU|RA|RE|RI|RO|RU|SA|SE|SI|SO|SU|TA|TE|TI|TO|TU|VA|VE|VI|VO|VU)\b/g,
    (s) => silabasSeguras[s] ?? s.toLowerCase(),
  );

  return out;
}

// Mapeamento de letras isoladas
const LETRAS_PT: Record<string, string> = {
  "A": "á", "B": "bê", "C": "cê", "D": "dê", "E": "é", "F": "éfe", "G": "gê", "H": "agá",
  "I": "i", "J": "jóta", "K": "cá", "L": "éle", "M": "ême", "N": "êne", "O": "ó", "P": "pê",
  "Q": "quê", "R": "érre", "S": "ésse", "T": "tê", "U": "u", "V": "vê", "W": "dáblio",
  "X": "xis", "Y": "ípsilon", "Z": "zê"
};

/**
 * Função principal de normalização de fala.
 * TODA fala do app deve passar por aqui.
 */
export function normalizarFala(texto: string, contexto: "geral" | "matematica" | "alfabetizacao" = "geral"): string {
  if (!texto) return "";

  // 1. Sanitização inicial (regras de mascote e limpeza de alfabetização)
  let out = normalizeLiteracyTextForSpeech(sanitizarFalaMascote(texto));

  // Notação fonêmica /x/ -> "x"
  out = out.replace(/\/([A-Za-zÀ-ÿ]{1,6})\//g, "$1");

  // Remove emojis e pictogramas
  out = out.replace(/\p{Extended_Pictographic}/gu, " ");
  out = out.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, " ");

  // 2. Normalização de números ordinais (Ex: 1º ano, 2ª atividade)
  out = out.replace(/(\d+)\s*[º°]\s*(?:ano|série|etapa|nível|ciclo)?/gi, (match, num) => {
    const n = parseInt(num);
    const ordinais: Record<number, string> = {
      1: "primeiro", 2: "segundo", 3: "terceiro", 4: "quarto", 5: "quinto",
      6: "sexto", 7: "sétimo", 8: "oitavo", 9: "nono", 10: "décimo"
    };
    return ordinais[n] ? ordinais[n] + (match.toLowerCase().includes("ano") ? " ano" : "") : match;
  });

  out = out.replace(/(\d+)\s*[ªᵃ]\s*(?:atividade|lição|missão|tarefa)?/gi, (match, num) => {
    const n = parseInt(num);
    const ordinais: Record<number, string> = {
      1: "primeira", 2: "segunda", 3: "terceira", 4: "quarta", 5: "quinta"
    };
    return ordinais[n] ? ordinais[n] + (match.toLowerCase().includes("ativid") ? " atividade" : "") : match;
  });

  // 3. Normalização de expressões matemáticas
  out = out.replace(/(\d+)\s*=\s*(\d+)/g, "$1 é igual a $2");
  out = out.replace(/(\d+)\s*\+\s*(\d+)/g, "$1 mais $2");
  out = out.replace(/(\d+)\s*[-−–—]\s*(\d+)/g, "$1 menos $2");
  out = out.replace(/(\d+)\s*[×x*]\s*(\d+)/g, "$1 vezes $2");
  out = out.replace(/(\d+)\s*[÷/]\s*(\d+)/g, "$1 dividido por $2");
  out = out.replace(/(\d+)\s*<\s*(\d+)/g, "$1 menor que $2");
  out = out.replace(/(\d+)\s*>\s*(\d+)/g, "$1 maior que $2");
  out = out.replace(/(\d+)\s*%\s*/g, "$1 por cento");

  // 4. Normalização de números cardinais isolados (0-100)
  out = out.replace(/(?<!\d)(\d+)(?!\d)/g, (match, num) => {
    if (NUMEROS_PT[num]) return NUMEROS_PT[num];
    const n = parseInt(num);
    if (n > 20 && n < 100) {
      const dezena = Math.floor(n / 10) * 10;
      const unidade = n % 10;
      if (unidade === 0) return NUMEROS_PT[dezena.toString()] || match;
      return `${NUMEROS_PT[dezena.toString()]} e ${NUMEROS_PT[unidade.toString()]}`;
    }
    return match;
  });

  // 5. Normalização de letras isoladas
  out = out.replace(/(?<![A-Za-zÀ-ÿ])([A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ])(?![A-Za-zÀ-ÿ])/g, (match, letra) => {
    const L = letra.toUpperCase();
    return LETRAS_PT[L] || L.toLowerCase();
  });

  // 6. Símbolos avulsos e pontuação visual
  out = out.replace(/[—–·•|→←↔✦✧★☆]/g, ", ");
  out = out.replace(/\+/g, " mais ");
  out = out.replace(/\-/g, " menos ");
  out = out.replace(/=/g, " é igual a ");
  out = out.replace(/[()[\]{}]/g, ", ");

  // 7. Limpeza final
  out = out.replace(/\s+/g, " ").replace(/\s+([,.!?;:])/g, "$1").trim();
  return out;
}
