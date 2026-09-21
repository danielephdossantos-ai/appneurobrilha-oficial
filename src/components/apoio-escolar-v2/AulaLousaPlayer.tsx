import { useEffect, useMemo, useState } from "react";
import { Pause, Play, RotateCcw, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PaginaAulaEscolar } from "@/lib/apoio-escolar-v2";

interface Props {
  pagina: PaginaAulaEscolar;
  topico: string;
}

export function AulaLousaPlayer({ pagina, topico }: Props) {
  const textoCompleto = useMemo(
    () =>
      [pagina.conteudo, ...(pagina.itens ?? []).map((item, indice) => `${indice + 1}. ${item}`)].join(
        "\n\n",
      ),
    [pagina],
  );
  const [quantidade, setQuantidade] = useState(0);
  const [escrevendo, setEscrevendo] = useState(true);
  const [falando, setFalando] = useState(false);
  const textoVisivel = textoCompleto.slice(0, quantidade);

  useEffect(() => {
    setQuantidade(0);
    setEscrevendo(true);
    setFalando(false);
    window.speechSynthesis?.cancel();
    return () => window.speechSynthesis?.cancel();
  }, [pagina.ordem, textoCompleto]);

  useEffect(() => {
    if (!escrevendo || quantidade >= textoCompleto.length) return;
    const timer = window.setInterval(
      () => setQuantidade((valor) => Math.min(valor + 3, textoCompleto.length)),
      24,
    );
    return () => window.clearInterval(timer);
  }, [escrevendo, quantidade, textoCompleto.length]);

  const narrar = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const fala = new SpeechSynthesisUtterance(`${pagina.titulo}. ${textoCompleto}`);
    fala.lang = "pt-BR";
    fala.rate = 0.9;
    fala.pitch = 1;
    fala.onend = () => setFalando(false);
    fala.onerror = () => setFalando(false);
    setFalando(true);
    window.speechSynthesis.speak(fala);
  };

  const pausarOuContinuarVoz = () => {
    if (!("speechSynthesis" in window)) return;
    if (!falando) {
      narrar();
      return;
    }
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    else window.speechSynthesis.pause();
  };

  const repetir = () => {
    window.speechSynthesis?.cancel();
    setFalando(false);
    setQuantidade(0);
    setEscrevendo(true);
  };

  return (
    <section className="mt-5 overflow-hidden rounded-3xl border-4 border-amber-700/70 bg-[#173f32] text-white shadow-xl">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/20 bg-[#123428] px-4 py-3 sm:px-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-200">
            Professor Mentor • explicação na lousa
          </p>
          <h4 className="mt-1 text-xl font-black sm:text-2xl">{pagina.titulo}</h4>
          <p className="mt-1 text-sm text-emerald-100">Tema: {topico}</p>
        </div>
        <Volume2 className="h-8 w-8 text-amber-200" aria-hidden="true" />
      </header>
      <div className="min-h-[300px] whitespace-pre-wrap px-5 py-7 font-mono text-lg leading-8 sm:min-h-[360px] sm:px-8 sm:text-xl">
        {textoVisivel}
        {quantidade < textoCompleto.length ? (
          <span className="ml-1 inline-block h-6 w-2 animate-pulse bg-amber-200" aria-hidden="true" />
        ) : null}
      </div>
      <footer className="flex flex-wrap gap-2 border-t border-white/20 bg-[#123428] p-3 sm:px-6">
        <Button type="button" variant="secondary" onClick={() => setEscrevendo((valor) => !valor)}>
          {escrevendo ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
          {escrevendo ? "Pausar escrita" : "Continuar escrita"}
        </Button>
        <Button type="button" variant="secondary" onClick={() => setQuantidade(textoCompleto.length)}>
          Pular escrita
        </Button>
        <Button type="button" variant="secondary" onClick={pausarOuContinuarVoz}>
          <Volume2 className="mr-2 h-4 w-4" />
          {falando ? "Pausar ou continuar voz" : "Ouvir explicação"}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
          onClick={repetir}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Repetir
        </Button>
      </footer>
    </section>
  );
}
