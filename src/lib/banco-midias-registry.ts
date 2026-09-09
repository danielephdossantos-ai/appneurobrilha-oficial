// Banco de Mídias — Registro automático.
// Indexa todas as imagens em src/assets/* via Vite e categoriza pela pasta.
// O app usa este registro para reutilizar mídias em qualquer atividade.

export type CategoriaBanco =
  | "letras"
  | "silabas"
  | "numeros"
  | "formas"
  | "animais"
  | "objetos"
  | "cotidiano"
  | "mapas"
  | "graficos"
  | "icones"
  | "emocoes";

export interface MidiaRegistro {
  id: string;            // ex: "hiperfocos/animais/leao"
  titulo: string;        // ex: "Leão"
  url: string;           // URL bundlada pelo Vite (funciona em dev e produção)
  categoria: CategoriaBanco;
  pasta: string;         // ex: "hiperfocos/animais"
  tags: string[];        // tokens extraídos do path
}

// Vite resolve no build → url estática hash-busted, servida pelo bundler.
const modules = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const ANIMAIS_PASTAS = ["animais", "fazendinha", "dinossauros", "sereias"];
const OBJETOS_PASTAS = [
  "carros", "trens", "espaco", "musica", "arte", "minecraft",
  "herois", "robos", "princesas", "bailarinas", "illustrations",
  "objetos", "frutas",
];
const COTIDIANO_PASTAS = ["brilha-vida"];
const MAPAS_PASTAS = ["geografia", "ciencias", "mapas"];
const ICONES_PASTAS = ["icons", "icones"];
const EMOCOES_PASTAS = ["emocoes"];
const LETRAS_PASTAS = ["letras"];
const SILABAS_PASTAS = ["silabas"];
const NUMEROS_PASTAS = ["numeros"];
const FORMAS_PASTAS = ["formas"];
const GRAFICOS_PASTAS = ["graficos"];

function inferirCategoria(path: string): CategoriaBanco {
  const p = path.toLowerCase();
  if (LETRAS_PASTAS.some((k) => p.includes(`/${k}/`))) return "letras";
  if (SILABAS_PASTAS.some((k) => p.includes(`/${k}/`))) return "silabas";
  if (NUMEROS_PASTAS.some((k) => p.includes(`/${k}/`))) return "numeros";
  if (FORMAS_PASTAS.some((k) => p.includes(`/${k}/`))) return "formas";
  if (GRAFICOS_PASTAS.some((k) => p.includes(`/${k}/`))) return "graficos";
  if (EMOCOES_PASTAS.some((k) => p.includes(`/${k}/`))) return "emocoes";
  if (ICONES_PASTAS.some((k) => p.includes(`/${k}/`))) return "icones";
  if (ANIMAIS_PASTAS.some((k) => p.includes(`/${k}/`))) return "animais";
  if (MAPAS_PASTAS.some((k) => p.includes(`/${k}`))) return "mapas";
  if (COTIDIANO_PASTAS.some((k) => p.includes(`/${k}/`))) return "cotidiano";
  if (OBJETOS_PASTAS.some((k) => p.includes(`/${k}/`))) return "objetos";
  return "objetos";
}

function tituloDeNome(nome: string): string {
  return nome
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export const BANCO_MIDIAS_REGISTRO: MidiaRegistro[] = Object.entries(modules)
  .map(([fullPath, url]) => {
    // ex: /src/assets/hiperfocos/animais/leao.png
    const rel = fullPath.replace(/^\/src\/assets\//, "");
    const partes = rel.split("/");
    const arquivo = partes.pop()!;
    const nomeBase = arquivo.replace(/\.(png|jpe?g|webp)$/i, "");
    const pasta = partes.join("/");
    const tags = [...partes, nomeBase].flatMap((s) => s.split(/[-_/]+/)).filter(Boolean);
    return {
      id: `${pasta}/${nomeBase}`,
      titulo: tituloDeNome(nomeBase),
      url,
      categoria: inferirCategoria(fullPath),
      pasta,
      tags: Array.from(new Set(tags.map((t) => t.toLowerCase()))),
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

export function buscarMidias(opts: {
  categoria?: CategoriaBanco;
  pasta?: string;
  termo?: string;
  limite?: number;
} = {}): MidiaRegistro[] {
  const q = opts.termo?.toLowerCase().trim();
  let out = BANCO_MIDIAS_REGISTRO;
  if (opts.categoria) out = out.filter((m) => m.categoria === opts.categoria);
  if (opts.pasta) out = out.filter((m) => m.pasta.startsWith(opts.pasta!));
  if (q) {
    out = out.filter(
      (m) =>
        m.titulo.toLowerCase().includes(q) ||
        m.id.toLowerCase().includes(q) ||
        m.tags.some((t) => t.includes(q)),
    );
  }
  return opts.limite ? out.slice(0, opts.limite) : out;
}

export function midiaPorId(id: string): MidiaRegistro | undefined {
  return BANCO_MIDIAS_REGISTRO.find((m) => m.id === id);
}

export function midiaPorTitulo(titulo: string): MidiaRegistro | undefined {
  const norm = (s: string) =>
    s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const alvo = norm(titulo);
  return BANCO_MIDIAS_REGISTRO.find(
    (m) => norm(m.titulo) === alvo || norm(m.id.split("/").pop() || "") === alvo,
  );
}
