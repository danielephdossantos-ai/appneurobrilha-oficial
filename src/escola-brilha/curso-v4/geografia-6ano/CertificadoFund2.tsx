/**
 * CertificadoFund2 — emitido ao concluir a Unidade 7 do 6º ano.
 * Padrão adulto: papel escuro, tipografia serifada, selo institucional.
 * Zero mascotes. Botão de imprimir.
 */

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Award, Printer, Home } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CertificadoFund2({
  nome = "Estudante",
  titulo,
  disciplina,
  ano,
}: {
  nome?: string;
  titulo: string;
  disciplina: string;
  ano: string;
}) {
  const [data] = useState(() =>
    new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" }),
  );
  const [codigo] = useState(() => `EB-${Math.random().toString(36).slice(2, 8).toUpperCase()}-6GE`);

  useEffect(() => {
    const end = Date.now() + 3000;
    const colors = ["#22d3ee", "#facc15", "#10b981"];
    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors,
        disableForReducedMotion: true,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 print:bg-white print:text-black">
      <div className="mx-auto max-w-3xl">
        {/* Ações */}
        <div className="flex justify-between mb-6 print:hidden">
          <Link
            to="/"
            className="flex items-center gap-2 rounded border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-cyan-500/60 hover:text-cyan-300"
          >
            <Home className="h-4 w-4" /> Início
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded bg-cyan-500 px-4 py-1.5 text-sm font-mono uppercase tracking-widest text-slate-950 hover:bg-cyan-400"
          >
            <Printer className="h-4 w-4" /> Imprimir
          </button>
        </div>

        {/* Certificado */}
        <div className="relative rounded-lg border-2 border-cyan-500/50 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 sm:p-14 shadow-[0_0_60px_-15px_rgba(34,211,238,0.4)] print:border-slate-800 print:bg-white print:shadow-none">
          {/* Cantos decorativos */}
          <div className="absolute top-3 left-3 h-8 w-8 border-t-2 border-l-2 border-cyan-400/60" />
          <div className="absolute top-3 right-3 h-8 w-8 border-t-2 border-r-2 border-cyan-400/60" />
          <div className="absolute bottom-3 left-3 h-8 w-8 border-b-2 border-l-2 border-cyan-400/60" />
          <div className="absolute bottom-3 right-3 h-8 w-8 border-b-2 border-r-2 border-cyan-400/60" />

          {/* Selo */}
          <div className="flex justify-center mb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyan-400 bg-cyan-500/10 print:border-slate-800 print:bg-transparent">
              <Award className="h-10 w-10 text-cyan-300 print:text-slate-800" />
            </div>
          </div>

          <div className="text-center">
            <div className="text-[10px] uppercase tracking-[0.4em] text-cyan-400 mb-2 print:text-slate-600">
              Escola Brilha · Fundamental 2
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-slate-50 mb-1 print:text-slate-900">
              Certificado de Proficiência Acadêmica
            </h1>
            <div className="text-sm text-slate-400 mb-8 print:text-slate-600">
              {disciplina} · {ano}
            </div>

            <div className="text-slate-300 text-sm mb-2 print:text-slate-700">Certificamos que</div>
            <div className="font-serif text-2xl text-slate-50 border-b border-slate-700 pb-2 mb-6 print:text-slate-900 print:border-slate-400">
              {nome}
            </div>

            <p className="text-slate-300 leading-relaxed mb-6 max-w-xl mx-auto print:text-slate-700">
              concluiu o ciclo integrador do 6º Ano de Geografia, cumprindo com êxito as 7 unidades
              curriculares e o desafio crítico final, sendo agraciado(a) com o título de:
            </p>

            <div className="inline-block rounded-lg border border-cyan-500/50 bg-cyan-500/10 px-6 py-3 mb-8 print:border-slate-800 print:bg-transparent">
              <div className="font-serif text-xl text-cyan-200 print:text-slate-900">{titulo}</div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-10 text-xs">
              <div className="text-left border-t border-slate-700 pt-2 print:border-slate-400">
                <div className="text-slate-500 uppercase tracking-widest text-[10px]">Data</div>
                <div className="text-slate-200 font-mono print:text-slate-800">{data}</div>
              </div>
              <div className="text-right border-t border-slate-700 pt-2 print:border-slate-400">
                <div className="text-slate-500 uppercase tracking-widest text-[10px]">Código</div>
                <div className="text-slate-200 font-mono print:text-slate-800">{codigo}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
