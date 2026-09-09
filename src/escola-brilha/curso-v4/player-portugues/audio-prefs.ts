import { useEffect, useState } from "react";

/**
 * Fase 9 — enunciado falado como padrão.
 *
 * Criança de 6 anos ainda não lê o comando. Por isso o enunciado toca
 * SOZINHO quando o bloco aparece na tela. O responsável (ou a própria
 * criança) pode desligar a fala automática; a preferência fica salva
 * no aparelho e vale para todo o app.
 */
const CHAVE = "brilha:fala-automatica";

let cache: boolean | null = null;
const ouvintes = new Set<(v: boolean) => void>();

export function falaAutomaticaAtiva(): boolean {
  if (typeof window === "undefined") return false;
  if (cache !== null) return cache;
  try {
    cache = window.localStorage.getItem(CHAVE) !== "off";
  } catch {
    cache = true;
  }
  return cache;
}

export function definirFalaAutomatica(valor: boolean) {
  cache = valor;
  try {
    window.localStorage.setItem(CHAVE, valor ? "on" : "off");
  } catch {
    /* modo privado — segue só em memória */
  }
  ouvintes.forEach((fn) => fn(valor));
}

/** Hook reativo para ler/alternar a fala automática. */
export function useFalaAutomatica(): [boolean, (v: boolean) => void] {
  const [ativa, setAtiva] = useState(false);

  useEffect(() => {
    setAtiva(falaAutomaticaAtiva());
    const fn = (v: boolean) => setAtiva(v);
    ouvintes.add(fn);
    return () => {
      ouvintes.delete(fn);
    };
  }, []);

  return [ativa, definirFalaAutomatica];
}
