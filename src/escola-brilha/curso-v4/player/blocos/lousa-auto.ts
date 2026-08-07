/**
 * Lousa interativa automática — padrão "Pip Teen Roqueiro".
 *
 * Converte qualquer enunciado/passo de matemática (5º ao 9º ano) em uma
 * sequência de linhas ESCRITAS na lousa, passo a passo, com a fala do
 * professor em cada linha. O componente que renderiza é o
 * `trinomioPassoAPasso` (a lousa creme interativa).
 *
 * Regra do app: matemática não é texto — é conta montada. Aqui a conta
 * nasce coluna por coluna, igual no caderno.
 */
import type { TrinomioPassoAPassoV } from "./VisuaisMat";

type Passo = TrinomioPassoAPassoV["passos"][number];

const CASAS = [
  "unidades",
  "dezenas",
  "centenas",
  "unidades de milhar",
  "dezenas de milhar",
  "centenas de milhar",
  "milhões",
  "dezenas de milhão",
  "centenas de milhão",
];

function casa(i: number) {
  return CASAS[i] ?? `casa ${i + 1}`;
}

/** Comprimento "visível" (ignora marcas combinantes, ex. o risco do empréstimo). */
function larguraVisivel(s: string) {
  return s.replace(/[\u0300-\u036f]/g, "").length;
}

function pad(s: string, w: number) {
  const falta = Math.max(0, w - larguraVisivel(s));
  return " ".repeat(falta) + s;
}

function moldura(w: number) {
  return "─".repeat(w);
}

/** Monta o bloco de texto da conta armada (com linha de "vai um"/troca). */
function bloco(opts: {
  auxiliar: string[];
  topo: string;
  sinal: string;
  base: string;
  resultado: string[];
  w: number;
}) {
  const { auxiliar, topo, sinal, base, resultado, w } = opts;
  const auxLinha = auxiliar.join("");
  const linhas: string[] = [];
  if (auxLinha.trim()) linhas.push("  " + auxLinha);
  linhas.push("  " + pad(topo, w));
  linhas.push(sinal + " " + pad(base, w));
  linhas.push("  " + moldura(w));
  linhas.push("  " + resultado.join(""));
  return linhas.join("\n");
}


// ============================== SOMA =================================

function lousaSoma(a: number, b: number): TrinomioPassoAPassoV {
  const w = Math.max(String(a).length, String(b).length) + 1;
  const da = String(a).padStart(w, " ").split("");
  const db = String(b).padStart(w, " ").split("");
  const res = Array(w).fill(" ");
  const aux = Array(w).fill(" ");
  const passos: Passo[] = [];
  let carry = 0;

  for (let i = 0; i < w; i++) {
    const col = w - 1 - i;
    const x = da[col] === " " ? 0 : Number(da[col]);
    const y = db[col] === " " ? 0 : Number(db[col]);
    if (da[col] === " " && db[col] === " " && carry === 0) break;
    const bruto = x + y + carry;
    const escreve = bruto % 10;
    const proximo = Math.floor(bruto / 10);
    const entrou = carry;
    res[col] = String(escreve);
    carry = proximo;
    if (carry && col - 1 >= 0) aux[col - 1] = String(carry);

    passos.push({
      expr: bloco({ auxiliar: aux, topo: String(a), sinal: "+", base: String(b), resultado: res, w }),
      explica: `${casa(i)}: ${x} + ${y}${entrou ? ` + ${entrou}` : ""} = ${bruto}`,
      professor:
        `Casa das ${casa(i)}: ${x} mais ${y}` +
        (entrou ? ` mais ${entrou} que subiu` : "") +
        ` é igual a ${bruto}. ` +
        (proximo
          ? `Escrevo o ${escreve} e sobe ${proximo} para a casa seguinte.`
          : `Escrevo o ${escreve}.`),
      status: "neutro",
    });
  }

  return {
    tipo: "trinomioPassoAPasso",
    trinomio: `${a.toLocaleString("pt-BR")} + ${b.toLocaleString("pt-BR")}`,
    legenda: "Lousa interativa · adição armada",
    passos,
    fatorada: (a + b).toLocaleString("pt-BR"),
  };
}

// =========================== SUBTRAÇÃO ===============================

function lousaSubtracao(a: number, b: number): TrinomioPassoAPassoV {
  const maior = Math.max(a, b);
  const menor = Math.min(a, b);
  const w = String(maior).length + 1;
  const topo = String(maior).padStart(w, " ").split("");
  const base = String(menor).padStart(w, " ").split("");
  const res = Array(w).fill(" ");
  const aux = Array(w).fill(" ");
  const passos: Passo[] = [];
  const digitos = topo.map((c) => (c === " " ? 0 : Number(c)));
  // Linha de cima com o algarismo RISCADO quando há empréstimo.
  const topoVisual = [...topo];
  const RISCO = "\u0336";

  for (let i = 0; i < w; i++) {
    const col = w - 1 - i;
    if (topo[col] === " " && base[col] === " ") break;
    const y = base[col] === " " ? 0 : Number(base[col]);
    let x = digitos[col];
    let fala = "";
    if (x < y) {
      // Empresta da casa da esquerda (pula zeros)
      let k = col - 1;
      while (k >= 0 && digitos[k] === 0) k--;
      if (k >= 0) {
        const antes = digitos[k];
        digitos[k] = antes - 1;
        aux[k] = String(digitos[k]);
        topoVisual[k] = String(antes) + RISCO;
        for (let j = k + 1; j < col; j++) {
          digitos[j] = 9;
          aux[j] = "9";
          topoVisual[j] = topo[j] + RISCO;
        }
        x = digitos[col] + 10;
        digitos[col] = x;
        fala = `Não dá para tirar ${y} de ${x - 10}. Corto o ${antes} da casa da esquerda e escrevo ${antes - 1}: o ${x - 10} vira ${x}. `;
      }
    }
    const escreve = x - y;
    digitos[col] = escreve;
    res[col] = String(escreve);
    passos.push({
      expr: bloco({
        auxiliar: aux,
        topo: topoVisual.join("").trimStart(),
        sinal: "−",
        base: String(menor),
        resultado: res,
        w,
      }),
      explica: `${casa(i)}: ${x} − ${y} = ${escreve}`,
      professor: `Casa das ${casa(i)}: ${fala}${x} menos ${y} é igual a ${escreve}. Escrevo o ${escreve} embaixo da linha.`,
      status: "neutro",
    });
  }


  return {
    tipo: "trinomioPassoAPasso",
    trinomio: `${maior.toLocaleString("pt-BR")} − ${menor.toLocaleString("pt-BR")}`,
    legenda: "Lousa interativa · subtração com troca",
    passos,
    fatorada: (maior - menor).toLocaleString("pt-BR"),
  };
}

// ========================= MULTIPLICAÇÃO =============================

function lousaMultiplicacao(a: number, b: number): TrinomioPassoAPassoV {
  const final = a * b;
  const w = Math.max(String(final).length, String(a).length, String(b).length) + 1;
  const bDigits = String(b).split("").map(Number).reverse();
  const parciais: string[] = [];
  const passos: Passo[] = [];

  const cabeca = ["  " + pad(String(a), w), "× " + pad(String(b), w), "  " + moldura(w)];

  bDigits.forEach((d, pos) => {
    const valor = a * d * Math.pow(10, pos);
    parciais.push("  " + pad(String(valor), w));
    passos.push({
      expr: [...cabeca, ...parciais].join("\n"),
      explica: `${d}${pos ? ` (vale ${d}${"0".repeat(pos)})` : ""} × ${a} = ${valor}`,
      professor:
        pos === 0
          ? `Multiplico ${d} por ${a}: dá ${valor}. Essa é a primeira parcial.`
          : `Agora o ${d} vale ${d}${"0".repeat(pos)}. ${d} vezes ${a} dá ${a * d}, e desloco ${pos} casa${pos > 1 ? "s" : ""}: escrevo ${valor}.`,
      status: "neutro",
    });
  });

  if (parciais.length > 1) {
    passos.push({
      expr: [...cabeca, ...parciais, "  " + moldura(w), "  " + pad(String(final), w)].join("\n"),
      explica: `Somo as parciais: ${final}`,
      professor: `Para terminar, somo as parciais: ${parciais
        .map((p) => p.trim())
        .join(" + ")} é igual a ${final}.`,
      status: "ok",
    });
  } else {
    passos.push({
      expr: [...cabeca, ...parciais, "  " + moldura(w), "  " + pad(String(final), w)].join("\n"),
      explica: `Resultado: ${final}`,
      professor: `Só havia uma parcial, então o resultado da conta é ${final}.`,
      status: "ok",
    });
  }

  return {
    tipo: "trinomioPassoAPasso",
    trinomio: `${a.toLocaleString("pt-BR")} × ${b.toLocaleString("pt-BR")}`,
    legenda: "Lousa interativa · multiplicação armada",
    passos,
    fatorada: final.toLocaleString("pt-BR"),
  };
}

// ============================ DIVISÃO ================================

function lousaDivisao(a: number, b: number): TrinomioPassoAPassoV {
  const digitos = String(a).split("").map(Number);
  const passos: Passo[] = [];
  let parcial = 0;
  let quociente = "";
  const linhas: string[] = [`  ${a} │ ${b}`, `  ${moldura(String(a).length)}`];

  digitos.forEach((d, i) => {
    parcial = parcial * 10 + d;
    const q = Math.floor(parcial / b);
    const usado = q * b;
    const sobra = parcial - usado;
    quociente += String(q);
    const corpo = [...linhas, `  ${parcial} ÷ ${b} = ${q}   → ${q} × ${b} = ${usado}`, `  ${parcial} − ${usado} = ${sobra}`, `  quociente: ${quociente}`];
    passos.push({
      expr: corpo.join("\n"),
      explica: `${parcial} ÷ ${b} = ${q}, sobra ${sobra}`,
      professor:
        q === 0
          ? `${parcial} é menor que ${b}, então escrevo 0 no quociente e desço o próximo algarismo.`
          : `Quantas vezes ${b} cabe em ${parcial}? ${q} vezes, porque ${q} vezes ${b} dá ${usado}. Subtraio: ${parcial} menos ${usado} dá ${sobra}. Desço o próximo algarismo.`,
      status: "neutro",
    });
    parcial = sobra;
  });

  const quo = Math.floor(a / b);
  const resto = a % b;
  passos.push({
    expr: [...linhas, `  quociente: ${quo}`, `  resto: ${resto}`].join("\n"),
    explica: `Quociente ${quo} · resto ${resto}`,
    professor: `Terminei os algarismos. O quociente é ${quo} e o resto é ${resto}. Conferindo: ${quo} vezes ${b} mais ${resto} dá ${a}.`,
    status: "ok",
  });

  return {
    tipo: "trinomioPassoAPasso",
    trinomio: `${a.toLocaleString("pt-BR")} ÷ ${b}`,
    legenda: "Lousa interativa · divisão pela chave",
    passos,
    fatorada: resto ? `${quo} (resto ${resto})` : String(quo),
  };
}

// ========================= Detecção de conta =========================

const NUM = "(?:\\d{1,3}(?:\\.\\d{3})+|\\d{1,9})";

function paraNumero(s: string) {
  return parseInt(s.replace(/\./g, ""), 10);
}

/** Encontra a primeira conta simples "A op B" no texto. */
export function detectarConta(
  texto: string,
): { a: number; b: number; op: "soma" | "sub" | "mult" | "div" } | undefined {
  const m = texto.match(new RegExp(`(${NUM})\\s*([+\\-−×x*÷/])\\s*(${NUM})`, "i"));
  if (!m) return undefined;
  const a = paraNumero(m[1]);
  const b = paraNumero(m[3]);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return undefined;
  const s = m[2];
  const op =
    s === "+" ? "soma" : s === "-" || s === "−" ? "sub" : s === "÷" || s === "/" ? "div" : "mult";
  if (op === "div" && b === 0) return undefined;
  return { a, b, op };
}

/** Lousa interativa a partir de uma conta detectada no texto. */
export function lousaDeTexto(texto: string): TrinomioPassoAPassoV | undefined {
  const c = detectarConta(texto);
  if (!c) return undefined;
  if (c.op === "soma") return lousaSoma(c.a, c.b);
  if (c.op === "sub") return lousaSubtracao(c.a, c.b);
  if (c.op === "mult") return lousaMultiplicacao(c.a, c.b);
  return lousaDivisao(c.a, c.b);
}

// ================== Lousa genérica a partir de passos ================

/** Trecho "matemático" de uma frase (expressão, igualdade, número). */
function exprDoPasso(texto: string): string {
  const limpo = texto.replace(/\s+/g, " ").trim();
  const m = limpo.match(
    /([0-9a-zA-Zçãáéíóúêô()²³√,.\s]*[+\-−×x*÷/=][0-9a-zA-Z()²³√,.\s+\-−×x*÷/=]*)/,
  );
  const alvo = (m?.[1] ?? "").trim().replace(/[.,;]$/, "");
  if (alvo.length >= 3 && /[0-9]/.test(alvo)) return alvo;
  return limpo.length <= 34 ? limpo : "";
}

/**
 * Transforma título + passos escritos da aula em lousa interativa:
 * a fala vira a explicação do professor e a conta vira a linha escrita.
 */
export function lousaDePassos(opts: {
  titulo: string;
  passos: string[];
  resposta?: string;
  legenda?: string;
}): TrinomioPassoAPassoV | undefined {
  const passos = opts.passos.map((p) => p.trim()).filter(Boolean);
  if (passos.length === 0) return undefined;
  return {
    tipo: "trinomioPassoAPasso",
    trinomio: opts.titulo,
    legenda: opts.legenda ?? "Lousa interativa · passo a passo",
    passos: passos.map((p) => ({
      expr: exprDoPasso(p),
      explica: "",
      professor: p,
      status: "neutro" as const,
    })),
    fatorada: opts.resposta,
  };
}

/** Só ativa a lousa automática nos cursos de matemática do 5º ao 9º ano. */
export function cursoUsaLousa(cursoSlug: string): boolean {
  return /matematica-([5-9])ano/.test(cursoSlug) || /matematica-em/.test(cursoSlug);
}
