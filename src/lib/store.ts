// Mock store via localStorage — protótipo navegável.
// Será substituído por Supabase nas próximas iterações.
import { useEffect, useState } from "react";

export type Diagnostico = "tdah" | "tea" | "dislexia" | "discalculia" | "multiplo" | "nenhum";
export type Hiperfoco =
  | "animais" | "dinossauros" | "espaco" | "veiculos"
  | "princesas" | "super-herois" | "robos" | "musica";

export interface Child {
  id: string;
  nome: string;
  idade: number;
  serie: string;
  hiperfoco: Hiperfoco;
  diagnostico: Diagnostico;
  avatar: string; // emoji
  anamneseCompleta: boolean;
  perfil: {
    leitura: number;
    escrita: number;
    matematica: number;
    atencao: number;
    linguagem: number;
    autonomia: number;
    emocional: number;
    social: number;
  };
  niveis: {
    geral: 1 | 2 | 3 | 4;
    portugues: 1 | 2 | 3 | 4;
    matematica: 1 | 2 | 3 | 4;
    ciencias: 1 | 2 | 3 | 4;
    historia: 1 | 2 | 3 | 4;
    geografia: 1 | 2 | 3 | 4;
  };
  tempoAtencaoMin: number;
  flags: {
    apoioVisual: boolean;
    passoAPasso: boolean;
    preferAudio: boolean;
    contaNosDedos: boolean;
    trocaLetras: boolean;
    palavrasLongas: boolean;
  };
  observacoes: string;
}

const KEY = "neurobrilha:state:v1";

interface AppState {
  children: Child[];
  activeChildId: string | null;
  pinSet: boolean;
}

const seed: AppState = {
  children: [
    {
      id: "demo-1",
      nome: "Lara",
      idade: 7,
      serie: "2º ano",
      hiperfoco: "dinossauros",
      diagnostico: "dislexia",
      avatar: "🦕",
      anamneseCompleta: true,
      perfil: { leitura: 45, escrita: 50, matematica: 70, atencao: 60, linguagem: 75, autonomia: 65, emocional: 70, social: 80 },
      niveis: { geral: 2, portugues: 2, matematica: 3, ciencias: 3, historia: 3, geografia: 3 },
      tempoAtencaoMin: 12,
      flags: { apoioVisual: true, passoAPasso: true, preferAudio: true, contaNosDedos: false, trocaLetras: true, palavrasLongas: true },
      observacoes: "Ama dinossauros. Cansa rápido em leitura longa. Responde bem a áudio.",
    },
    {
      id: "demo-2",
      nome: "Théo",
      idade: 5,
      serie: "Pré II",
      hiperfoco: "espaco",
      diagnostico: "tea",
      avatar: "🚀",
      anamneseCompleta: false,
      perfil: { leitura: 30, escrita: 25, matematica: 55, atencao: 40, linguagem: 50, autonomia: 45, emocional: 55, social: 40 },
      niveis: { geral: 1, portugues: 1, matematica: 2, ciencias: 2, historia: 2, geografia: 2 },
      tempoAtencaoMin: 8,
      flags: { apoioVisual: true, passoAPasso: true, preferAudio: false, contaNosDedos: true, trocaLetras: false, palavrasLongas: false },
      observacoes: "Foco em rotina estruturada e linguagem literal.",
    },
  ],
  activeChildId: "demo-1",
  pinSet: false,
};

function load(): AppState {
  if (typeof window === "undefined") return seed;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return seed;
    return JSON.parse(raw);
  } catch {
    return seed;
  }
}

function save(state: AppState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(state));
}

const listeners = new Set<() => void>();
let state: AppState | null = null;

function get(): AppState {
  if (!state) state = load();
  return state;
}

function set(updater: (s: AppState) => AppState) {
  state = updater(get());
  save(state);
  listeners.forEach((l) => l());
}

export function useAppState() {
  const [, force] = useState(0);
  useEffect(() => {
    const l = () => force((n) => n + 1);
    listeners.add(l);
    return () => { listeners.delete(l); };
  }, []);
  return {
    state: get(),
    activeChild: get().children.find((c) => c.id === get().activeChildId) ?? null,
    setActiveChild: (id: string) => set((s) => ({ ...s, activeChildId: id })),
    addChild: (c: Omit<Child, "id">) =>
      set((s) => ({ ...s, children: [...s.children, { ...c, id: crypto.randomUUID() }] })),
    updateChild: (id: string, patch: Partial<Child>) =>
      set((s) => ({
        ...s,
        children: s.children.map((c) => (c.id === id ? { ...c, ...patch } : c)),
      })),
    reset: () => set(() => seed),
  };
}

export const NIVEL_DESC: Record<1 | 2 | 3 | 4, { titulo: string; desc: string }> = {
  1: { titulo: "Concreto total", desc: "Manipula objetos, sem letras ou números abstratos" },
  2: { titulo: "Visual guiado", desc: "Desenhos, ícones e narração em cada passo" },
  3: { titulo: "Semi-abstrato", desc: "Símbolos com apoio visual ocasional" },
  4: { titulo: "Abstrato", desc: "Texto e número puros, raciocínio sem apoio" },
};
