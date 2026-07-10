/**
 * PlayerGeoV2 — Dashboard Científico / Geopolítico
 * -------------------------------------------------
 * Padrão TRAVADO do Ensino Fundamental 2 Avançado (6º ao 9º ano).
 * Zero mascotes, zero avatares infantis. Tipografia técnica, dados,
 * paleta grafite + ciano. 1 aula = 11 momentos derivados do JSON da
 * unidade, apresentados em scroll vertical estilo dashboard.
 */

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Compass,
  FileText,
  Focus,
  Headphones,
  Lightbulb,
  ListOrdered,
  Map,
  Pause,
  Sparkles,
  Target,
  Trophy,
  Volume2,
  VolumeX,
} from "lucide-react";

import type { UnidadeFund2 } from "./dados-fund2";
import { VisualEsquematico, MiniPalco } from "./VisualEsquematico";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";


type Momento = {
  n: number;
  rotulo: string;
  Icon: typeof BookOpen;
  titulo: string;
  corpo: React.ReactNode;
  narracao?: string;
};

export function PlayerGeoV2({
  unidade,
  numeroTotal,
  onConcluir,
  ehFinal,
}: {
  unidade: UnidadeFund2;
  numeroTotal: number;
  onConcluir: () => void;
  ehFinal: boolean;
}) {
  const [respostaIdx, setRespostaIdx] = useState<number | null>(null);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);
  const [narrando, setNarrando] = useState<number | null>(null);
  const [audioLigado, setAudioLigado] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    return () => stopSpeaking();
  }, [unidade.slug]);



  const momentos: Momento[] = [
    {
      n: 1,
      rotulo: "Briefing acadêmico",
      Icon: FileText,
      titulo: "Contexto científico da unidade",
      corpo: (
        <p className="text-slate-200/90 leading-relaxed text-[15px]">{unidade.introducao_academica}</p>
      ),
      narracao: unidade.introducao_academica,
    },
    {
      n: 2,
      rotulo: "Conceito-chave",
      Icon: Focus,
      titulo: unidade.conteudo_pedagogico.conceito_chave,
      corpo: (
        <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/5 px-4 py-3">
          <div className="text-[11px] uppercase tracking-[0.2em] text-cyan-400 mb-1">Foco de estudo</div>
          <div className="text-slate-100 font-serif text-lg leading-snug">
            {unidade.conteudo_pedagogico.conceito_chave}
          </div>
        </div>
      ),
      narracao: `Conceito-chave: ${unidade.conteudo_pedagogico.conceito_chave}.`,
    },
    {
      n: 3,
      rotulo: "Passo a passo",
      Icon: ListOrdered,
      titulo: "Entenda por etapas",
      corpo: unidade.conteudo_pedagogico.etapas_teoricas?.length ? (
        <div className="space-y-3">
          <p className="text-slate-300 text-[14px] leading-relaxed">
            {unidade.conteudo_pedagogico.texto_teorico}
          </p>
          <ol className="space-y-3">
            {unidade.conteudo_pedagogico.etapas_teoricas.map((etapa, i) => (
              <li
                key={i}
                className="rounded-lg border border-slate-700 bg-slate-900/50 p-4 space-y-3"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-cyan-500 text-slate-950 font-mono font-bold text-sm flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-cyan-300 font-serif text-[15px] leading-snug mb-1">
                      {etapa.titulo}
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed">{etapa.texto}</p>
                  </div>
                </div>
                {etapa.visual && <MiniPalco tipo={etapa.visual} />}
                {etapa.exemplo_real && (
                  <div className="rounded-lg border-l-2 border-emerald-400 bg-emerald-500/5 px-3 py-2">
                    <div className="text-[10px] uppercase tracking-widest text-emerald-400 mb-1 flex items-center gap-1.5">
                      <span>🌍</span> Exemplo real
                    </div>
                    <p className="text-slate-200 text-[13px] leading-relaxed">{etapa.exemplo_real}</p>
                  </div>
                )}
              </li>
            ))}

          </ol>
        </div>
      ) : (
        <p className="text-slate-200/90 leading-relaxed text-[15px]">
          {unidade.conteudo_pedagogico.texto_teorico}
        </p>
      ),
      narracao: unidade.conteudo_pedagogico.etapas_teoricas?.length
        ? [
            unidade.conteudo_pedagogico.texto_teorico,
            ...unidade.conteudo_pedagogico.etapas_teoricas.map(
              (e, i) =>
                `Passo ${i + 1}: ${e.titulo}. ${e.texto}${e.exemplo_real ? ` Exemplo real: ${e.exemplo_real}` : ""}`,
            ),

          ].join(" ")
        : unidade.conteudo_pedagogico.texto_teorico,
    },
    {
      n: 4,
      rotulo: "Visual interativo",
      Icon: Sparkles,
      titulo: unidade.conteudo_pedagogico.roteiro_visual_interativo?.foco ?? "Esquema visual",
      corpo: unidade.conteudo_pedagogico.roteiro_visual_interativo ? (
        <VisualEsquematico roteiro={unidade.conteudo_pedagogico.roteiro_visual_interativo} />
      ) : (
        <p className="text-slate-400 text-sm italic">Recurso visual não disponível para esta unidade.</p>
      ),
      narracao: unidade.conteudo_pedagogico.roteiro_visual_interativo
        ? `${unidade.conteudo_pedagogico.roteiro_visual_interativo.descricao} ${unidade.conteudo_pedagogico.roteiro_visual_interativo.legenda}`
        : undefined,
    },
    {
      n: 5,
      rotulo: "Curiosidade prática",
      Icon: Lightbulb,
      titulo: "Materializando o conceito",
      corpo: unidade.conteudo_pedagogico.exemplo_pratico_visual ? (
        <div className="rounded-xl border border-amber-400/40 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950">
              <Lightbulb className="h-4 w-4" strokeWidth={2.5} />
            </div>
            <div className="text-amber-300 font-serif text-[15px]">💡 Curiosidade Prática</div>
          </div>
          <p className="text-amber-50/90 text-[15px] leading-relaxed">
            {unidade.conteudo_pedagogico.exemplo_pratico_visual}
          </p>
        </div>
      ) : (
        <p className="text-slate-200 text-sm leading-relaxed">
          {unidade.conteudo_pedagogico.exemplo_visual}
        </p>
      ),
      narracao:
        unidade.conteudo_pedagogico.exemplo_pratico_visual ??
        unidade.conteudo_pedagogico.exemplo_visual,
    },
    {
      n: 6,
      rotulo: "Prancha de análise",
      Icon: Map,
      titulo: "Registro visual",
      corpo: (
        <figure className="space-y-3">
          <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900">
            <img
              src={unidade.conteudo_pedagogico.imagem_analise}
              alt={unidade.conteudo_pedagogico.exemplo_visual}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute top-2 left-2 rounded bg-slate-950/80 backdrop-blur px-2 py-0.5 text-[10px] tracking-widest text-cyan-400 uppercase">
              Registro · Fig. {unidade.unidade}
            </div>
          </div>
          <figcaption className="text-slate-400 text-sm leading-relaxed italic">
            {unidade.conteudo_pedagogico.exemplo_visual}
          </figcaption>
        </figure>
      ),
      narracao: unidade.conteudo_pedagogico.exemplo_visual,
    },

    {
      n: 7,
      rotulo: "Habilidade BNCC",
      Icon: Compass,
      titulo: "Competência mobilizada",
      corpo: (
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-300">
            {unidade.habilidade}
          </div>
          <span className="text-slate-400 text-sm">
            Habilidade avaliada no ciclo integrador do 6º ano — Base Nacional Comum Curricular.
          </span>
        </div>
      ),
    },
    {
      n: 8,
      rotulo: "Síntese",
      Icon: FileText,
      titulo: "Consolidação do estudo",
      corpo: (
        <ul className="space-y-2 text-slate-200 text-[15px]">
          <li className="flex gap-2">
            <span className="text-cyan-400 mt-1">▸</span>
            <span>
              A unidade articula <em className="text-cyan-300 not-italic">{unidade.conteudo_pedagogico.conceito_chave}</em> às
              dinâmicas do espaço geográfico.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-cyan-400 mt-1">▸</span>
            <span>Os processos analisados operam em escala global mas manifestam-se localmente.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-cyan-400 mt-1">▸</span>
            <span>O raciocínio geográfico exige integrar causa, escala e ação humana.</span>
          </li>
        </ul>
      ),
    },
    {
      n: 9,
      rotulo: "Preparação · ENEM",
      Icon: Target,
      titulo: "Antes do desafio",
      corpo: (
        <div className="rounded-lg border-l-2 border-amber-400 bg-amber-500/5 px-4 py-3">
          <div className="text-[11px] uppercase tracking-widest text-amber-400 mb-1">Estratégia</div>
          <p className="text-slate-200 text-sm leading-relaxed">
            Leia o enunciado duas vezes. Identifique o conceito-chave envolvido, elimine as alternativas
            factualmente incorretas e escolha a que melhor explica o fenômeno pela cadeia causal.
          </p>
        </div>
      ),
    },
    {
      n: 10,
      rotulo: "Desafio crítico · estilo ENEM",
      Icon: Target,
      titulo: "Questão de proficiência",
      corpo: (
        <div className="space-y-4">
          <p className="text-slate-100 text-[15px] leading-relaxed">{unidade.desafio_critico.pergunta}</p>
          <div className="space-y-2">
            {unidade.desafio_critico.opcoes.map((op, i) => {
              const selected = respostaIdx === i;
              const revealCorrect = mostrarFeedback && op.correta;
              const revealWrong = mostrarFeedback && selected && !op.correta;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    if (mostrarFeedback) return;
                    setRespostaIdx(i);
                    setMostrarFeedback(true);
                    stopSpeaking();
                    if (audioLigado) {
                      speakChunked(
                        op.correta
                          ? `Resposta correta. ${unidade.desafio_critico.explicacao_professor}`
                          : `Resposta incorreta. ${unidade.desafio_critico.explicacao_professor}`,
                      );
                    }
                  }}
                  className={[
                    "w-full text-left rounded-lg border px-4 py-3 text-sm leading-relaxed transition",
                    revealCorrect
                      ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                      : revealWrong
                        ? "border-red-400 bg-red-500/10 text-red-100"
                        : selected
                          ? "border-cyan-400 bg-cyan-500/5 text-slate-100"
                          : "border-slate-700 bg-slate-900/40 text-slate-200 hover:border-cyan-500/60 hover:bg-slate-900/70",
                  ].join(" ")}
                >
                  <span className="mr-2 font-mono text-xs text-slate-500">
                    {String.fromCharCode(65 + i)})
                  </span>
                  {op.texto}
                </button>
              );
            })}
          </div>
          {mostrarFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg border border-slate-700 bg-slate-950/60 p-4"
            >
              <div className="text-[11px] uppercase tracking-widest text-cyan-400 mb-1">
                Correção do professor
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                {unidade.desafio_critico.explicacao_professor}
              </p>
            </motion.div>
          )}
        </div>
      ),
    },
    {
      n: 11,
      rotulo: "Certificação",
      Icon: Trophy,
      titulo: `Título conquistado: ${unidade.recompensas.titulo}`,
      corpo: (
        <div className="rounded-lg border border-cyan-500/40 bg-gradient-to-br from-slate-900 to-slate-950 p-5">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="rounded border border-slate-700 bg-slate-900/70 px-3 py-2">
              <div className="text-[10px] uppercase tracking-widest text-slate-500">XP</div>
              <div className="text-cyan-300 font-mono text-lg">+{unidade.recompensas.xp}</div>
            </div>
            <div className="rounded border border-slate-700 bg-slate-900/70 px-3 py-2">
              <div className="text-[10px] uppercase tracking-widest text-slate-500">Moedas</div>
              <div className="text-amber-300 font-mono text-lg">+{unidade.recompensas.moedas}</div>
            </div>
            <div className="rounded border border-slate-700 bg-slate-900/70 px-3 py-2">
              <div className="text-[10px] uppercase tracking-widest text-slate-500">Status</div>
              <div className="text-emerald-300 font-mono text-lg">APTO</div>
            </div>
          </div>
          <button
            type="button"
            disabled={!mostrarFeedback}
            onClick={() => {
              stopSpeaking();
              onConcluir();
            }}
            className={[
              "w-full rounded-lg px-4 py-3 font-mono text-sm uppercase tracking-widest transition",
              mostrarFeedback
                ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                : "bg-slate-800 text-slate-500 cursor-not-allowed",
            ].join(" ")}
          >
            {ehFinal ? "Emitir certificado final ▸" : "Avançar para próxima unidade ▸"}
          </button>
          {!mostrarFeedback && (
            <div className="mt-2 text-center text-[11px] text-slate-500">
              Resolva o desafio crítico para habilitar.
            </div>
          )}
        </div>
      ),
    },
  ];

  const narrar = (n: number, texto?: string) => {
    if (!texto || !audioLigado) return;
    stopSpeaking();
    setNarrando(n);
    speakChunked(texto, { onEnd: () => setNarrando(null) });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header dashboard */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center gap-3">
          <div className="rounded border border-cyan-500/40 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cyan-300">
            Geo · 6º ano
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] uppercase tracking-widest text-slate-500">
              Unidade {unidade.unidade} de {numeroTotal} · {unidade.habilidade}
            </div>
            <div className="truncate font-serif text-slate-100 text-sm">{unidade.titulo}</div>
          </div>
          <button
            type="button"
            onClick={() => {
              const novo = !audioLigado;
              setAudioLigado(novo);
              if (!novo) stopSpeaking();
            }}
            className="rounded border border-slate-700 p-1.5 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/60"
            aria-label={audioLigado ? "Desativar áudio" : "Ativar áudio"}
          >
            {audioLigado ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>
        </div>
        {/* Progresso da unidade */}
        <div className="h-0.5 bg-slate-900">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all"
            style={{ width: `${(unidade.unidade / numeroTotal) * 100}%` }}
          />
        </div>
      </header>

      {/* Título hero */}
      <section className="mx-auto max-w-4xl px-4 pt-8 pb-6">
        <div className="text-[11px] uppercase tracking-[0.3em] text-cyan-400 mb-2">
          Dossiê acadêmico · unidade {String(unidade.unidade).padStart(2, "0")}
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl leading-tight text-slate-50">{unidade.titulo}</h1>
      </section>

      {/* Momentos */}
      <main className="mx-auto max-w-4xl px-4 pb-24 space-y-4">
        {momentos.map((m) => (
          <motion.section
            key={m.n}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35 }}
            className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900/60 px-4 py-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded border border-cyan-500/40 bg-cyan-500/10 font-mono text-[11px] text-cyan-300">
                {String(m.n).padStart(2, "0")}
              </div>
              <m.Icon className="h-4 w-4 text-slate-500" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-slate-500">{m.rotulo}</div>
                <div className="truncate text-slate-200 text-sm font-medium">{m.titulo}</div>
              </div>
              {m.narracao && (
                <button
                  type="button"
                  onClick={() => narrar(m.n, m.narracao)}
                  className={[
                    "rounded border p-1.5 transition",
                    narrando === m.n
                      ? "border-cyan-400 bg-cyan-500/20 text-cyan-200 animate-pulse"
                      : "border-slate-700 text-slate-500 hover:text-cyan-300 hover:border-cyan-500/60",
                  ].join(" ")}
                  aria-label="Narrar seção"
                >
                  <Volume2 className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <div className="px-4 py-4">{m.corpo}</div>
          </motion.section>
        ))}
      </main>
    </div>
  );
}
