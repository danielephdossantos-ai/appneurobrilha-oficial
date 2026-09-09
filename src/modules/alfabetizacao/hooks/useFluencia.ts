// Fluência de leitura oral — WPM (words per minute).
// Só medimos páginas em modo "criança" (a criança está lendo, não escutando).
// Persistimos o MELHOR WPM por história+criança em localStorage; assim
// dá pra mostrar "você melhorou X wpm desde a última vez" na releitura.
//
// Benchmarks calibrados pra 1º-3º ano BR (aprox. equivalente ao Hasbrouck
// & Tindal, com folga pros iniciantes):
//   < 30 wpm  → "Começando"       (nível 1-2 típico)
//   30-59 wpm → "Crescendo"       (nível 3 típico)
//   60-89 wpm → "Fluente"         (nível 4 típico)
//   90+ wpm   → "Muito fluente"   (nível 5-6 típico)

import { useCallback, useRef, useState } from "react";

export interface MedicaoWPM {
  palavras: number;
  segundos: number;
  wpm: number;
}

export interface FluenciaHistoricoItem {
  wpm: number;
  data: number; // timestamp
  acertoCompreensao?: number; // 0..1
}

const KEY = "alfa-fluencia-v1";

function ler(): Record<string, FluenciaHistoricoItem[]> {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}

function gravar(dados: Record<string, FluenciaHistoricoItem[]>) {
  try {
    localStorage.setItem(KEY, JSON.stringify(dados));
  } catch {
    // ignore
  }
}

function chave(childId: string, historiaId: string) {
  return `${childId}::${historiaId}`;
}

export function melhorWPM(childId: string, historiaId: string): number | null {
  const h = ler()[chave(childId, historiaId)] ?? [];
  if (h.length === 0) return null;
  return h.reduce((mx, it) => Math.max(mx, it.wpm), 0);
}

export function registrarLeitura(
  childId: string,
  historiaId: string,
  wpm: number,
  acertoCompreensao?: number,
) {
  const dados = ler();
  const k = chave(childId, historiaId);
  const lista = dados[k] ?? [];
  lista.push({ wpm, data: Date.now(), acertoCompreensao });
  // mantém só últimas 10 leituras
  dados[k] = lista.slice(-10);
  gravar(dados);
}

export function classificarWPM(wpm: number): {
  rotulo: string;
  emoji: string;
  cor: string;
} {
  if (wpm < 30) return { rotulo: "Começando", emoji: "🌱", cor: "bg-slate-200 text-slate-700" };
  if (wpm < 60) return { rotulo: "Crescendo", emoji: "🌿", cor: "bg-amber-200 text-amber-800" };
  if (wpm < 90) return { rotulo: "Fluente", emoji: "🌳", cor: "bg-emerald-200 text-emerald-800" };
  return { rotulo: "Muito fluente", emoji: "🚀", cor: "bg-indigo-200 text-indigo-800" };
}

/**
 * Hook de medição. Uso:
 *   const flu = useFluencia();
 *   flu.iniciarPagina(); // no useEffect quando entra em modo criança
 *   flu.finalizarPagina(palavrasDaPag); // quando termina a página
 *   flu.wpmMedio // média das páginas medidas
 */
export function useFluencia() {
  const inicioRef = useRef<number | null>(null);
  const [medicoes, setMedicoes] = useState<MedicaoWPM[]>([]);

  const iniciarPagina = useCallback(() => {
    inicioRef.current = Date.now();
  }, []);

  const finalizarPagina = useCallback((palavras: number) => {
    if (inicioRef.current == null || palavras <= 0) return;
    const seg = Math.max(0.5, (Date.now() - inicioRef.current) / 1000);
    const wpm = Math.round((palavras / seg) * 60);
    // Descarta leituras absurdas (< 5 seg com muitas palavras → provavelmente pulou)
    // e leituras acima de 220 wpm (impossível pra alfabetização).
    if (wpm > 220 || wpm < 1) {
      inicioRef.current = null;
      return;
    }
    setMedicoes((m) => [...m, { palavras, segundos: seg, wpm }]);
    inicioRef.current = null;
  }, []);

  const resetar = useCallback(() => {
    inicioRef.current = null;
    setMedicoes([]);
  }, []);

  const totalPalavras = medicoes.reduce((s, m) => s + m.palavras, 0);
  const totalSegundos = medicoes.reduce((s, m) => s + m.segundos, 0);
  const wpmMedio =
    totalSegundos > 0 ? Math.round((totalPalavras / totalSegundos) * 60) : 0;

  return {
    iniciarPagina,
    finalizarPagina,
    resetar,
    medicoes,
    wpmMedio,
    temMedicao: medicoes.length > 0,
  };
}
