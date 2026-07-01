/**
 * Mascotes Educadores por Disciplina — Escola Brilha.
 *
 * REGRA OFICIAL:
 * - Cada disciplina tem UM mascote fixo (nunca troca dentro da disciplina).
 * - Nenhum mascote se repete entre disciplinas.
 * - Os personagens vêm da loja oficial de mascotes do app.
 * - Eles acompanham TODAS as aulas: explicam, dão dicas, motivam,
 *   corrigem, incentivam e celebram conquistas.
 *
 * O código BNCC continua interno; a UI infantil vê apenas o nome do mascote.
 */
import pipEspaco from "@/assets/pip-espaco.png";
import pipaProfessora from "@/assets/pip-girl-professora.png";
import pipaDoutora from "@/assets/pip-girl-doutora.png";
import pipTeenPrincipe from "@/assets/pip-teen-principe.png";
import pipVeiculos from "@/assets/pip-veiculos.png";
import pipaArte from "@/assets/pip-girl-arte.png";
import pipTeenBola from "@/assets/pip-teen-bola.png";
import pipTeenCyber from "@/assets/pip-teen-cyber.png";
import pipaFada from "@/assets/pip-girl-fada.png";
import pipMascot from "@/assets/pip-mascot.png";
import { disciplinaDoCodigo } from "./missoes-tema";

export type MascoteDisciplina = {
  slug: string;
  nome: string;
  papel: string;
  emoji: string;
  imagem: string;
  corPrimaria: string;
  corSecundaria: string;
  personalidade: string;
  preco?: number; // BrilhoCoins para desbloquear (resolvido via PRECOS_MASCOTES)
};

/** Preço oficial em BrilhoCoins para desbloquear cada mascote-professor. */
export const PRECOS_MASCOTES: Record<string, number> = {
  default: 0,
  matematica: 50,
  portugues: 50,
  ciencias: 100,
  historia: 150,
  geografia: 150,
  arte: 200,
  edfisica: 200,
  ingles: 250,
  religiao: 250,
};

/** Mapa oficial: 1 disciplina → 1 mascote. Nunca repete. */
const MASCOTES: Record<string, MascoteDisciplina> = {
  matematica: {
    slug: "matematica",
    nome: "Astro",
    papel: "Professor de Matemática",
    emoji: "🚀",
    imagem: pipEspaco,
    corPrimaria: "#4C9EFF",
    corSecundaria: "#0d1f55",
    personalidade: "curioso e lógico, adora contar estrelas",
  },
  portugues: {
    slug: "portugues",
    nome: "Letra",
    papel: "Professora de Português",
    emoji: "📚",
    imagem: pipaProfessora,
    corPrimaria: "#FF8AB0",
    corSecundaria: "#7A1F55",
    personalidade: "carinhosa, ama palavras e histórias",
  },
  ciencias: {
    slug: "ciencias",
    nome: "Dra. Bio",
    papel: "Professora de Ciências",
    emoji: "🔬",
    imagem: pipaDoutora,
    corPrimaria: "#34D399",
    corSecundaria: "#065F46",
    personalidade: "investigadora, pergunta 'por quê?' o tempo todo",
  },
  historia: {
    slug: "historia",
    nome: "Cronos",
    papel: "Professor de História",
    emoji: "⏳",
    imagem: pipTeenPrincipe,
    corPrimaria: "#F59E0B",
    corSecundaria: "#78350F",
    personalidade: "narrador, conta o passado como uma aventura",
  },
  geografia: {
    slug: "geografia",
    nome: "Rota",
    papel: "Professora de Geografia",
    emoji: "🌎",
    imagem: pipVeiculos,
    corPrimaria: "#22C55E",
    corSecundaria: "#14532D",
    personalidade: "exploradora, adora mapas e viagens",
  },
  arte: {
    slug: "arte",
    nome: "Pincel",
    papel: "Professora de Arte",
    emoji: "🎨",
    imagem: pipaArte,
    corPrimaria: "#A78BFA",
    corSecundaria: "#4C1D95",
    personalidade: "criativa, vê beleza em tudo",
  },
  edfisica: {
    slug: "edfisica",
    nome: "Bola",
    papel: "Professor de Educação Física",
    emoji: "⚽",
    imagem: pipTeenBola,
    corPrimaria: "#F97316",
    corSecundaria: "#7C2D12",
    personalidade: "animado, ama movimento e trabalho em equipe",
  },
  ingles: {
    slug: "ingles",
    nome: "Globe",
    papel: "Teacher de Inglês",
    emoji: "🌐",
    imagem: pipTeenCyber,
    corPrimaria: "#06B6D4",
    corSecundaria: "#164E63",
    personalidade: "cosmopolita, mistura palavras em inglês na fala",
  },
  religiao: {
    slug: "religiao",
    nome: "Luz",
    papel: "Professora de Ensino Religioso",
    emoji: "🕊️",
    imagem: pipaFada,
    corPrimaria: "#EAB308",
    corSecundaria: "#713F12",
    personalidade: "gentil, fala sobre valores e respeito",
  },
  default: {
    slug: "default",
    nome: "Pip",
    papel: "Guardião do Escola Brilha",
    emoji: "✨",
    imagem: pipMascot,
    corPrimaria: "#FFC93C",
    corSecundaria: "#0d1f55",
    personalidade: "acolhedor, sempre ao lado da criança",
  },
};

function slugDisc(d: string): string {
  const s = (d || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
  if (!s) return "default";
  if (s.startsWith("mat")) return "matematica";
  if (s.startsWith("port") || s.includes("lingua portuguesa")) return "portugues";
  if (s.startsWith("cien")) return "ciencias";
  if (s.startsWith("hist")) return "historia";
  if (s.startsWith("geo")) return "geografia";
  if (s.startsWith("art")) return "arte";
  if (s.includes("fisica") || s.startsWith("edu")) return "edfisica";
  if (s.startsWith("ingl") || s.includes("english")) return "ingles";
  if (s.includes("religio")) return "religiao";
  return "default";
}

function comPreco(m: MascoteDisciplina): MascoteDisciplina {
  return { ...m, preco: PRECOS_MASCOTES[m.slug] ?? 0 };
}

export function mascoteDaDisciplina(disciplina?: string | null): MascoteDisciplina {
  return comPreco(MASCOTES[slugDisc(disciplina ?? "")] ?? MASCOTES.default);
}

export function mascoteDoCodigo(codigo: string): MascoteDisciplina {
  return mascoteDaDisciplina(disciplinaDoCodigo(codigo));
}

/** Slug canônico da disciplina (para persistir escolha por disciplina). */
export function disciplinaDaAula(aula: { disciplina?: string; codigo: string }): string {
  return slugDisc(aula.disciplina ?? disciplinaDoCodigo(aula.codigo) ?? "");
}

/** Mascote-padrão da aula. Aceita override por slug já desbloqueado. */
export function mascoteDaAula(
  aula: { disciplina?: string; codigo: string },
  overrideSlug?: string | null,
): MascoteDisciplina {
  if (overrideSlug && MASCOTES[overrideSlug]) return comPreco(MASCOTES[overrideSlug]);
  return aula.disciplina ? mascoteDaDisciplina(aula.disciplina) : mascoteDoCodigo(aula.codigo);
}

/** Lista completa dos 10 mascotes-professores (pra tela de escolha). */
export function todosMascotes(): MascoteDisciplina[] {
  return Object.values(MASCOTES).map(comPreco);
}

/** Disciplinas oficiais na ordem de apresentação (Pip fica fora — é fallback). */
export const DISCIPLINAS_OFICIAIS: { slug: string; nome: string }[] = [
  { slug: "matematica", nome: "Matemática" },
  { slug: "portugues", nome: "Português" },
  { slug: "ciencias", nome: "Ciências" },
  { slug: "historia", nome: "História" },
  { slug: "geografia", nome: "Geografia" },
  { slug: "arte", nome: "Arte" },
  { slug: "edfisica", nome: "Educação Física" },
  { slug: "ingles", nome: "Inglês" },
  { slug: "religiao", nome: "Ensino Religioso" },
];
