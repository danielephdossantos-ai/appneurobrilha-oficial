import { useEffect, useState } from "react";

export const FAVORITOS_KEY = "favoritos_crianca";

export type FavoritoAtividade = {
  /** identificador único (slug da categoria ou rota especial) */
  id: string;
  /** título mostrado no card "Próxima Missão" */
  titulo: string;
  /** grupo/categoria clínica ou descrição curta */
  grupo?: string;
  /** emoji de apoio visual */
  emoji?: string;
  /** imagem (ícone) da atividade, quando existir */
  icone?: string;
  /** caminho para abrir a atividade */
  href: string;
};

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function lerFavoritos(): FavoritoAtividade[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(FAVORITOS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as FavoritoAtividade[]) : [];
  } catch {
    return [];
  }
}

function gravar(favs: FavoritoAtividade[]) {
  try {
    window.localStorage.setItem(FAVORITOS_KEY, JSON.stringify(favs));
  } catch {
    /* storage cheio / indisponível */
  }
  emit();
}

export function isFavorito(id: string): boolean {
  return lerFavoritos().some((f) => f.id === id);
}

export function toggleFavorito(fav: FavoritoAtividade): boolean {
  const atuais = lerFavoritos();
  const existe = atuais.some((f) => f.id === fav.id);
  const novos = existe ? atuais.filter((f) => f.id !== fav.id) : [...atuais, fav];
  gravar(novos);
  return !existe;
}

export function removerFavorito(id: string) {
  gravar(lerFavoritos().filter((f) => f.id !== id));
}

/** Lista reativa de favoritos, sincronizada entre componentes e abas. */
export function useFavoritos(): FavoritoAtividade[] {
  const [favs, setFavs] = useState<FavoritoAtividade[]>([]);

  useEffect(() => {
    const sync = () => setFavs(lerFavoritos());
    sync();
    listeners.add(sync);
    window.addEventListener("storage", sync);
    return () => {
      listeners.delete(sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return favs;
}
