import { sanitizarFalaMascote, nomeCriancaFala } from "@/lib/sanitizar-fala-mascote";

/**
 * Motor canônico de fala PT-BR do NeuroBrilha.
 *
 * REGRA: texto visual e texto falado são coisas diferentes. Este arquivo
 * transforma notação escrita em uma frase que a Web Speech API consegue
 * pronunciar de maneira pedagógica e previsível.
 */
export type ContextoFala = "geral" | "matematica" | "alfabetizacao";

const UNIDADES = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
const DEZ_A_DEZENOVE = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
const DEZENAS = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
const CENTENAS = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];

export function numeroPorExtensoPtBr(valor: number): string {
  if (!Number.isFinite(valor)) return String(valor);
  if (valor < 0) return `menos ${numeroPorExtensoPtBr(Math.abs(valor))}`;
  if (!Number.isInteger(valor)) {
    const [inteiro, decimal = ""] = String(valor).replace(".", ",").split(",");
    return `${numeroPorExtensoPtBr(Number(inteiro))} vírgula ${decimal.split("").map((d) => UNIDADES[Number(d)] ?? d).join(" ")}`;
  }
  if (valor < 10) return UNIDADES[valor];
  if (valor < 20) return DEZ_A_DEZENOVE[valor - 10];
  if (valor < 100) {
    const d = Math.floor(valor / 10), u = valor % 10;
    return u ? `${DEZENAS[d]} e ${UNIDADES[u]}` : DEZENAS[d];
  }
  if (valor === 100) return "cem";
  if (valor < 1000) {
    const c = Math.floor(valor / 100), r = valor % 100;
    return r ? `${CENTENAS[c]} e ${numeroPorExtensoPtBr(r)}` : CENTENAS[c];
  }
  if (valor < 1_000_000) {
    const m = Math.floor(valor / 1000), r = valor % 1000;
    const inicio = m === 1 ? "mil" : `${numeroPorExtensoPtBr(m)} mil`;
    if (!r) return inicio;
    const conj = r < 100 || r % 100 === 0 ? " e " : " ";
    return `${inicio}${conj}${numeroPorExtensoPtBr(r)}`;
  }
  if (valor < 1_000_000_000) {
    const m = Math.floor(valor / 1_000_000), r = valor % 1_000_000;
    const inicio = m === 1 ? "um milhão" : `${numeroPorExtensoPtBr(m)} milhões`;
    return r ? `${inicio}${r < 100 ? " e " : " "}${numeroPorExtensoPtBr(r)}` : inicio;
  }
  return String(valor);
}

const ORD_M: Record<number, string> = {1:"primeiro",2:"segundo",3:"terceiro",4:"quarto",5:"quinto",6:"sexto",7:"sétimo",8:"oitavo",9:"nono",10:"décimo"};
const ORD_F: Record<number, string> = {1:"primeira",2:"segunda",3:"terceira",4:"quarta",5:"quinta",6:"sexta",7:"sétima",8:"oitava",9:"nona",10:"décima"};

const SUPERSCRIPT_DIGITS: Record<string,string> = {"⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9"};
function expoenteSupParaNumero(raw: string): number | null {
  const negativo = raw.startsWith("⁻");
  const corpo = negativo ? raw.slice(1) : raw;
  const digitos = corpo.split("").map((c) => SUPERSCRIPT_DIGITS[c] ?? "").join("");
  if (!digitos) return null;
  const n = Number(digitos);
  return negativo ? -n : n;
}

const LETRAS_PT: Record<string, string> = {
  A:"á",B:"bê",C:"cê",D:"dê",E:"é",F:"éfe",G:"gê",H:"agá",I:"i",J:"jóta",K:"cá",L:"éle",M:"ême",N:"êne",O:"ó",P:"pê",Q:"quê",R:"érre",S:"ésse",T:"tê",U:"u",V:"vê",W:"dáblio",X:"xis",Y:"ípsilon",Z:"zê"
};
const SILABAS: Record<string,string> = {
  BA:"bá",BE:"bé",BI:"bí",BO:"bó",BU:"bú",CA:"cá",CO:"có",CU:"cú",DA:"dá",DE:"dé",DI:"dí",DO:"dó",DU:"dú",
  FA:"fá",FE:"fé",FI:"fí",FO:"fó",FU:"fú",GA:"gá",GO:"gó",GU:"gú",JA:"já",JE:"jé",JI:"jí",JO:"jó",JU:"jú",
  LA:"lá",LE:"lé",LI:"lí",LO:"ló",LU:"lú",MA:"má",ME:"mé",MI:"mí",MO:"mó",MU:"mú",NA:"ná",NE:"né",NI:"ní",NO:"nó",NU:"nú",
  PA:"pá",PE:"pé",PI:"pí",PO:"pó",PU:"pú",RA:"rá",RE:"ré",RI:"rí",RO:"ró",RU:"rú",SA:"sá",SE:"sé",SI:"sí",SO:"só",SU:"sú",
  TA:"tá",TE:"té",TI:"tí",TO:"tó",TU:"tú",VA:"vá",VE:"vé",VI:"ví",VO:"vó",VU:"vú"
};

function decimalPorExtenso(raw: string): string {
  const [a, b = ""] = raw.replace(".", ",").split(",");
  const inteiro = numeroPorExtensoPtBr(Number(a));
  const dec = b.split("").map((d) => UNIDADES[Number(d)] ?? d).join(" ");
  return `${inteiro} vírgula ${dec}`;
}

function fracaoPorExtenso(nRaw: string, dRaw: string): string {
  const n = Number(nRaw), d = Number(dRaw);
  const denominadoresSing: Record<number,string> = {2:"meio",3:"terço",4:"quarto",5:"quinto",6:"sexto",7:"sétimo",8:"oitavo",9:"nono",10:"décimo",100:"centésimo",1000:"milésimo"};
  const base = denominadoresSing[d] ?? `${numeroPorExtensoPtBr(d)} avos`;
  if (n === 1) return `um ${base}`;
  const plural = d === 2 ? "meios" : d === 3 ? "terços" : d === 100 ? "centésimos" : d === 1000 ? "milésimos" : base.endsWith("avos") ? base : `${base}s`;
  return `${numeroPorExtensoPtBr(n)} ${plural}`;
}

function normalizarAlfabetizacao(out: string): string {
  // Palavra segmentada visualmente: PA-TO -> pato. O visual continua segmentado;
  // apenas a narração recebe a palavra natural.
  out = out.replace(/\b([A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ]{1,6}(?:[-·][A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ]{1,6}){1,8})\b/g,
    (t) => t.replace(/[-·]/g, "").toLowerCase());
  out = out.replace(/\b(BA|BE|BI|BO|BU|CA|CO|CU|DA|DE|DI|DO|DU|FA|FE|FI|FO|FU|GA|GO|GU|JA|JE|JI|JO|JU|LA|LE|LI|LO|LU|MA|ME|MI|MO|MU|NA|NE|NI|NO|NU|PA|PE|PI|PO|PU|RA|RE|RI|RO|RU|SA|SE|SI|SO|SU|TA|TE|TI|TO|TU|VA|VE|VI|VO|VU)\b/g,
    (s) => SILABAS[s] ?? s.toLowerCase());
  // Só em contexto explícito de alfabetização uma letra isolada é nome de letra.
  out = out.replace(/(?<![A-Za-zÀ-ÿ])([A-Z])(?![A-Za-zÀ-ÿ])/g, (_, l) => LETRAS_PT[l] ?? l.toLowerCase());
  return out;
}

function normalizarMatematica(out: string): string {
  // Dinheiro antes de decimais/cardinais.
  out = out.replace(/R\$\s*(\d{1,3}(?:\.\d{3})*(?:,\d{1,2})?|\d+(?:,\d{1,2})?)/g, (_, raw) => {
    const limpo = String(raw).replace(/\./g, "");
    const [r, c = ""] = limpo.split(",");
    const reais = Number(r);
    let fala = `${numeroPorExtensoPtBr(reais)} ${reais === 1 ? "real" : "reais"}`;
    if (c && Number(c) > 0) {
      const cent = Number(c.padEnd(2,"0"));
      fala += ` e ${numeroPorExtensoPtBr(cent)} ${cent === 1 ? "centavo" : "centavos"}`;
    }
    return fala;
  });

  // Hora: 7h30, 07:30.
  out = out.replace(/\b(\d{1,2})h(\d{2})\b/gi, (_, h, m) => `${numeroPorExtensoPtBr(Number(h))} horas e ${numeroPorExtensoPtBr(Number(m))} minutos`);
  out = out.replace(/\b(\d{1,2}):(\d{2})\b/g, (_, h, m) => `${numeroPorExtensoPtBr(Number(h))} horas e ${numeroPorExtensoPtBr(Number(m))} minutos`);

  // Raiz e expoentes, inclusive sobrescritos negativos: 10⁻².
  out = out.replace(/√\s*(\d+(?:[.,]\d+)?)/g, (_, n) => `raiz quadrada de ${n}`);
  out = out.replace(/(\d+(?:[.,]\d+)?|\))\s*(⁻?[⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_, base, sup) => {
    const e = expoenteSupParaNumero(sup);
    if (e === null) return `${base}${sup}`;
    if (e === 2) return `${base} ao quadrado`;
    if (e === 3) return `${base} ao cubo`;
    if (e < 0) return `${base} elevado a menos ${numeroPorExtensoPtBr(Math.abs(e))}`;
    return `${base} elevado a ${numeroPorExtensoPtBr(e)}`;
  });
  out = out.replace(/(\d+(?:[.,]\d+)?)\s*\^\s*(-?\d+)/g, (_, b, e) => `${b} elevado a ${Number(e) < 0 ? `menos ${Math.abs(Number(e))}` : e}`);

  // Produto indicado por ponto médio, antes de converter frações.
  while (/(\d)\s*·\s*(\d)/.test(out)) {
    out = out.replace(/(\d)\s*·\s*(\d)/g, "$1 vezes $2");
  }

  // Frações só quando há número/número. Deve acontecer antes da divisão genérica.
  out = out.replace(/\b(\d+)\s*\/\s*(\d+)\b/g, (_, n, d) => fracaoPorExtenso(n, d));

  // Porcentagem.
  out = out.replace(/(\d+(?:[.,]\d+)?)\s*%/g, (_, n) => `${n} por cento`);

  // Unidades comuns ANTES da conversão dos decimais, para não perder a associação número-unidade.
  const unidades: Array<[RegExp,string]> = [
    [/\b(\d+(?:[.,]\d+)?)\s*km\b/gi,"$1 quilômetros"],
    [/\b(\d+(?:[.,]\d+)?)\s*cm\b/gi,"$1 centímetros"],
    [/\b(\d+(?:[.,]\d+)?)\s*mm\b/gi,"$1 milímetros"],
    [/\b(\d+(?:[.,]\d+)?)\s*m²\b/gi,"$1 metros quadrados"],
    [/\b(\d+(?:[.,]\d+)?)\s*m³\b/gi,"$1 metros cúbicos"],
    [/\b(\d+(?:[.,]\d+)?)\s*m\b/gi,"$1 metros"],
    [/\b(\d+(?:[.,]\d+)?)\s*kg\b/gi,"$1 quilogramas"],
    [/\b(\d+(?:[.,]\d+)?)\s*g\b/gi,"$1 gramas"],
    [/\b(\d+(?:[.,]\d+)?)\s*ml\b/gi,"$1 mililitros"],
    [/\b(\d+(?:[.,]\d+)?)\s*l\b/gi,"$1 litros"],
  ];
  unidades.forEach(([r,s]) => { out = out.replace(r,s); });

  // Decimais com vírgula/ponto. Ponto só quando não parece milhar.
  out = out.replace(/\b\d+,\d+\b/g, (n) => decimalPorExtenso(n));
  out = out.replace(/\b\d+\.\d{1,2}\b/g, (n) => decimalPorExtenso(n));

  // Operações. "x" é vezes somente entre números; em 2x + 4, x continua xis.
  out = out.replace(/(\d+)\s*[×*]\s*(\d+)/g, "$1 vezes $2");
  out = out.replace(/(\d+)\s+[xX]\s+(\d+)/g, "$1 vezes $2");
  out = out.replace(/(\d+)\s*÷\s*(\d+)/g, "$1 dividido por $2");
  out = out.replace(/(\d+)\s*\+\s*(\d+)/g, "$1 mais $2");
  out = out.replace(/(\d+)\s*[−–]\s*(\d+)/g, "$1 menos $2");
  out = out.replace(/(\d+)\s*=\s*(\d+)/g, "$1 é igual a $2");
  out = out.replace(/(\d+)\s*<\s*(\d+)/g, "$1 menor que $2");
  out = out.replace(/(\d+)\s*>\s*(\d+)/g, "$1 maior que $2");

  // Variável algébrica x isolada/próxima de coeficiente.
  out = out.replace(/\b(\d+)\s*[xX]\b/g, "$1 xis");
  out = out.replace(/\b[xX]\b/g, "xis");

  // Símbolos restantes depois de números já convertidos por outras regras.
  out = out.replace(/\s+\+\s+/g, " mais ");
  out = out.replace(/\s+=\s+/g, " é igual a ");
  out = out.replace(/\s+÷\s+/g, " dividido por ");
  out = out.replace(/\s+×\s+/g, " vezes ");
  return out;
}

/**
 * Toda fala PT-BR do app deve passar por esta função.
 * IMPORTANTE: em contexto geral, NÃO transforma "A" em nome da letra e NÃO
 * transforma automaticamente toda barra em divisão. Isso evita erros em frases.
 */
export function normalizarFala(texto: string, contexto: ContextoFala = "geral"): string {
  if (!texto?.trim()) return "";
  let out = sanitizarFalaMascote(texto, nomeCriancaFala()).normalize("NFC");

  out = out.replace(/\bR\s*[:.]\s*/gi, "Resposta: ");
  out = out.replace(/\/([A-Za-zÀ-ÿ]{1,8})\//g, "$1");
  out = out.replace(/\p{Extended_Pictographic}/gu, " ");
  out = out.replace(/[\u{FE0F}\u{200D}]/gu, "");

  // Ordinais usados em série/etapa.
  out = out.replace(/\b(\d+)\s*[º°]\s*(ano|nível|ciclo|bimestre)?/gi, (m,n,suf) => {
    const ord = ORD_M[Number(n)]; return ord ? `${ord}${suf ? ` ${String(suf).toLowerCase()}` : ""}` : m;
  });
  out = out.replace(/\b(\d+)\s*ª\s*(atividade|lição|missão|tarefa|série|etapa)?/gi, (m,n,suf) => {
    const ord = ORD_F[Number(n)]; return ord ? `${ord}${suf ? ` ${String(suf).toLowerCase()}` : ""}` : m;
  });

  // Matemática é segura também no contexto geral porque as regexes exigem notação inequívoca.
  out = normalizarMatematica(out);
  if (contexto === "alfabetizacao") out = normalizarAlfabetizacao(out);

  // Sinal de menos matemático Unicode antes de número/expressão.
  out = out.replace(/−\s*(?=\d)/g, "menos ");

  // Inteiros restantes por extenso. Evita o problema clássico "3" ser pronunciado
  // de forma inconsistente por engines/vozes diferentes.
  out = out.replace(/(?<![\dA-Za-zÀ-ÿ])(-?\d{1,9})(?![\dA-Za-zÀ-ÿ])/g, (m) => numeroPorExtensoPtBr(Number(m)));

  // Símbolos visuais decorativos viram pausa. Hífen comum NÃO é trocado globalmente,
  // pois quebrava palavras e intervalos.
  out = out.replace(/[—–·•|→←↔✦✧★☆]/g, ", ");
  out = out.replace(/\s+/g, " ").replace(/\s+([,.!?;:])/g, "$1").trim();
  return out;
}

/** Alias semântico para componentes que possuem texto visual separado da fala. */
export function textoParaFala(texto: string, contexto: ContextoFala = "geral") {
  return normalizarFala(texto, contexto);
}
