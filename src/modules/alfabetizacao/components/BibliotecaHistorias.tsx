import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Volume2,
  X,
  BookOpen,
  Sparkles,
  Check,
  Hand,
  Ear,
  HelpCircle,
  Repeat,
  Gauge,
  Zap,
} from "lucide-react";
import {
  HISTORIAS_GRADUADAS,
  HistoriaGraduada,
  TipoPergunta,
  calcularNivelLeitor,
  historiasParaNivel,
  etapaAtiva,
  historiasOrdenadasPorRelevancia,
} from "../data/historias-graduadas";
import {
  PalavraChave,
  vocabChaveAutomatico,
  precisaPreEnsinoVocab,
} from "../data/vocabulario-chave";
import {
  useFluencia,
  registrarLeitura,
  melhorWPM,
  classificarWPM,
} from "../hooks/useFluencia";
import { useProgressoAlfa } from "../hooks/useProgressoAlfa";
import { useVoz } from "../hooks/useVoz";
import { objetoImg } from "@/data/neuro-treino/objetos";
import { useAdminMode } from "@/escola-brilha/admin-mode";
import { ETAPA_POR_ID } from "../data/etapas";

interface Props {
  childId: string;
  childName?: string;
  onSair?: () => void;
}

export function BibliotecaHistorias({ childId, childName, onSair }: Props) {
  const { progresso } = useProgressoAlfa(childId);
  const [admin] = useAdminMode();
  const nivelLeitor = useMemo(() => calcularNivelLeitor(progresso), [progresso]);
  const disponiveis = useMemo(() => historiasParaNivel(nivelLeitor), [nivelLeitor]);
  const etapaId = useMemo(() => etapaAtiva(progresso), [progresso]);
  const etapaAtual = ETAPA_POR_ID[etapaId];
  // Em modo admin, mostra tudo. Ordena SEMPRE por relevância clínica.
  const listaOrdenada = useMemo(() => {
    const base = admin ? HISTORIAS_GRADUADAS : disponiveis;
    return historiasOrdenadasPorRelevancia(base, nivelLeitor, etapaId);
  }, [admin, disponiveis, nivelLeitor, etapaId]);
  const [ativa, setAtiva] = useState<HistoriaGraduada | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center gap-3 mb-6">
          {onSair && (
            <button
              onClick={onSair}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
          )}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow text-xs font-bold text-rose-600">
              <BookOpen className="w-3 h-3" /> Biblioteca Graduada
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 mt-1">
              Histórias para você {childName ? `, ${childName}` : ""}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Seu nível leitor é <strong>{nivelLeitor}</strong> — destrave novos
              livros completando a trilha.
            </p>
          </div>
        </header>

        {/* Faixa explicando o método + fase ativa */}
        <div className="mb-5 rounded-2xl bg-white/70 border border-rose-100 p-3 flex items-start gap-2 text-[11px] text-slate-600">
          <BookOpen className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
          <p className="flex-1">
            <strong>Como funciona:</strong> primeiro o Professor lê apontando
            palavra por palavra (karaoke). Depois é <em>sua vez</em>: toque em
            cada palavra na ordem enquanto lê em voz alta. Se travar, aperte{" "}
            <Hand className="inline w-3 h-3 -mt-0.5" /> pra escutar devagar.
            {etapaAtual && (
              <>
                {" "}Livros com o selo{" "}
                <span className="inline-block px-1.5 rounded bg-emerald-100 text-emerald-700 font-bold">
                  {etapaAtual.emoji} {etapaAtual.titulo}
                </span>{" "}
                usam os sons que você está treinando agora.
              </>
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {listaOrdenada.map((h) => {
            const desbloq = admin || disponiveis.includes(h);
            const alinhado = h.etapaAlinhada === etapaId;
            return (
              <button
                key={h.id}
                disabled={!desbloq}
                onClick={() => desbloq && setAtiva(h)}
                className={`relative rounded-3xl shadow-md p-4 text-left transition-transform ${
                  desbloq ? "bg-white hover:scale-105" : "bg-slate-100"
                } ${alinhado && desbloq ? "ring-2 ring-emerald-400" : ""}`}
              >
                {alinhado && desbloq && (
                  <span className="absolute -top-2 -right-2 z-10 text-[9px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded-full shadow">
                    {etapaAtual?.emoji ?? "⭐"} PRA SUA FASE
                  </span>
                )}
                <div
                  className={`aspect-square rounded-2xl mb-3 flex items-center justify-center ${
                    desbloq
                      ? "bg-gradient-to-br from-rose-100 to-amber-100"
                      : "bg-slate-200"
                  }`}
                >
                  {desbloq ? (
                    <img
                      src={objetoImg(h.capa)}
                      alt=""
                      className="max-h-[70%] max-w-[70%] object-contain"
                    />
                  ) : (
                    <span className="text-3xl text-slate-400">🔒</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
                    Nível {h.nivel}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {h.paginas.length} pág.
                  </span>
                </div>
                <h3
                  className={`font-black text-sm mt-1 ${
                    desbloq ? "text-slate-800" : "text-slate-400"
                  }`}
                >
                  {h.titulo}
                </h3>
                {desbloq && h.foneticos.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {h.foneticos.slice(0, 4).map((f) => (
                      <span
                        key={f}
                        className="text-[9px] font-mono font-bold bg-indigo-100 text-indigo-700 rounded px-1.5 py-0.5"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {ativa && (
          <LeitorHistoria
            historia={ativa}
            childId={childId}
            onSair={() => setAtiva(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================================
 * LEITOR — Bloco 1 (A + B)
 * A) Karaoke: palavra atual destacada em sincronia com a fala do professor.
 * B) Modo "Sua vez de ler": a criança toca cada palavra na ordem enquanto
 *    lê em voz alta. Escutar palavra isolada = prompting nível 1.
 * =======================================================================*/

/* =========================================================================
 * LEITOR — Blocos 1 + 2 + 3
 *   A) Karaoke sincronizado (Bloco 1)
 *   B) Modo "sua vez" tap-in-order (Bloco 1)
 *   C) Perguntas com tipo (Bloco 2)
 *   D) Decodable alignment (Bloco 2 — no card externo)
 *   E) Pré-ensino de vocabulário + medição de WPM + releitura (Bloco 3)
 * =======================================================================*/

type ModoPagina = "professor" | "crianca";
type FaseLeitor = "vocab" | "leitura" | "perguntas" | "fim";

function LeitorHistoria({
  historia,
  childId,
  onSair,
}: {
  historia: HistoriaGraduada;
  childId: string;
  onSair: () => void;
}) {
  const { falar, parar } = useVoz();
  const [pagina, setPagina] = useState(0);
  // Vocab só faz sentido a partir do N3 e se houver palavras no dicionário
  const vocabChave = useMemo<PalavraChave[]>(
    () => (precisaPreEnsinoVocab(historia) ? vocabChaveAutomatico(historia) : []),
    [historia],
  );
  const [fase, setFase] = useState<FaseLeitor>(
    vocabChave.length > 0 ? "vocab" : "leitura",
  );
  const [vocabIdx, setVocabIdx] = useState(0);
  const [perguntaIdx, setPerguntaIdx] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [feedback, setFeedback] = useState<"ok" | "err" | null>(null);
  const [rodada, setRodada] = useState(1); // 1 = 1ª leitura, 2+ = releitura

  // Fluência (WPM) — só página em modo criança
  const fluencia = useFluencia();
  const [recordePrevio] = useState<number | null>(() =>
    melhorWPM(childId, historia.id),
  );

  const totalPag = historia.paginas.length;
  const pAtual = historia.paginas[pagina];

  // Alternância pedagógica:
  //  Nível 1 → todas as páginas "professor" (só escuta, ainda não decodifica)
  //  Nível 2-3 → pág 1 professor, depois alterna
  //  Nível 4+ → prof. só na 1ª, restante criança
  const modo: ModoPagina = useMemo(() => {
    if (historia.nivel <= 1) return "professor";
    if (historia.nivel >= 4) return pagina === 0 ? "professor" : "crianca";
    // Níveis 2-3
    if (pagina === 0) return "professor";
    return pagina % 2 === 1 ? "crianca" : "professor";
  }, [historia.nivel, pagina]);

  // Tokenização preservando pontuação
  const tokens = useMemo(() => tokenizar(pAtual.texto), [pAtual.texto]);

  // ── Estado do karaoke (professor lê) ────────────────────────────────
  const [karaokeIdx, setKaraokeIdx] = useState<number | null>(null);
  const karaokeCancelado = useRef(false);

  async function tocarKaraoke() {
    karaokeCancelado.current = false;
    parar();
    const palavras = tokens.filter((t) => t.tipo === "palavra");
    // Mapa índice-palavra → índice-token para highlight
    const idxToken: number[] = [];
    tokens.forEach((t, i) => t.tipo === "palavra" && idxToken.push(i));
    for (let i = 0; i < palavras.length; i++) {
      if (karaokeCancelado.current) return;
      setKaraokeIdx(idxToken[i]);
      await falar(palavras[i].texto);
      // pequena pausa entre palavras — dá tempo do olho pousar
      await new Promise((r) => setTimeout(r, 80));
    }
    setKaraokeIdx(null);
  }

  function pararKaraoke() {
    karaokeCancelado.current = true;
    parar();
    setKaraokeIdx(null);
  }

  // ── Estado do modo criança (tap-in-order) ───────────────────────────
  const [proximoTokenEsperado, setProximoTokenEsperado] = useState<number>(
    firstPalavraIdx(tokens),
  );
  const [palavrasLidas, setPalavrasLidas] = useState<Set<number>>(new Set());
  const [dicaAtiva, setDicaAtiva] = useState<number | null>(null);

  // Reset ao trocar de página
  useEffect(() => {
    pararKaraoke();
    setProximoTokenEsperado(firstPalavraIdx(tokens));
    setPalavrasLidas(new Set());
    setDicaAtiva(null);
    if (fase !== "leitura") return;
    if (modo === "professor") {
      const t = setTimeout(() => tocarKaraoke(), 350);
      return () => clearTimeout(t);
    } else {
      // Modo criança: começa a cronometrar a leitura da página
      fluencia.iniciarPagina();
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina, historia.id, fase]);

  // Cleanup ao fechar
  useEffect(() => {
    return () => pararKaraoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function tocarPalavra(i: number) {
    // Sempre permite escutar a palavra tocada (prompting nível 1)
    pararKaraoke();
    setDicaAtiva(i);
    falar(tokens[i].texto);
    setTimeout(() => setDicaAtiva(null), 900);

    if (modo === "crianca") {
      if (i === proximoTokenEsperado) {
        const novoSet = new Set(palavrasLidas);
        novoSet.add(i);
        setPalavrasLidas(novoSet);
        const prox = nextPalavraIdx(tokens, i);
        setProximoTokenEsperado(prox);
        if (prox === -1) {
          // Terminou a página — avança automaticamente
          setTimeout(() => proxPag(), 700);
        }
      }
      // Se tocou fora de ordem: escuta a palavra mas não avança
    }
  }

  function ajudaLenta() {
    // Prompting nível 2: professor lê a linha inteira devagar de novo
    tocarKaraoke();
  }

  function proxPag() {
    // Se a página que estamos deixando é modo criança, finaliza cronômetro
    if (modo === "crianca") {
      fluencia.finalizarPagina(countPalavras(tokens));
    }
    if (pagina < totalPag - 1) {
      setPagina(pagina + 1);
    } else {
      pararKaraoke();
      setFase("perguntas");
      setTimeout(
        () => falar(historia.perguntas[0].pergunta),
        300,
      );
    }
  }

  function antPag() {
    if (pagina > 0) setPagina(pagina - 1);
  }

  function finalizarHistoria() {
    const total = historia.perguntas.length;
    const acerto = total > 0 ? acertos / total : undefined;
    if (fluencia.temMedicao) {
      registrarLeitura(childId, historia.id, fluencia.wpmMedio, acerto);
    }
    setFase("fim");
  }

  function relerHistoria() {
    // Guided Repeated Oral Reading (NRP): reler aumenta fluência.
    fluencia.resetar();
    setPagina(0);
    setPerguntaIdx(0);
    setAcertos(0);
    setRodada(rodada + 1);
    setFase("leitura");
  }

  function responder(opt: string) {
    if (feedback) return;
    const p = historia.perguntas[perguntaIdx];
    const ok = opt === p.correta;
    setFeedback(ok ? "ok" : "err");
    if (ok) {
      setAcertos(acertos + 1);
      falar("Isso mesmo!");
    } else {
      falar("Quase. Vamos tentar de novo.");
    }
    setTimeout(() => {
      setFeedback(null);
      if (ok) {
        if (perguntaIdx < historia.perguntas.length - 1) {
          setPerguntaIdx(perguntaIdx + 1);
          setTimeout(
            () => falar(historia.perguntas[perguntaIdx + 1].pergunta),
            200,
          );
        } else {
          setFase("fim");
        }
      }
    }, 1200);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-amber-50 to-rose-100 flex flex-col"
    >
      <div className="flex items-center gap-3 p-4 border-b bg-white/80 backdrop-blur">
        <button
          onClick={() => {
            pararKaraoke();
            onSair();
          }}
          className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
          aria-label="Sair"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold text-rose-500 uppercase tracking-wider">
            Nível {historia.nivel} · Pág {pagina + 1}/{totalPag}
          </div>
          <div className="font-black text-slate-800 truncate">
            {historia.titulo}
          </div>
        </div>
        {fase === "leitura" && (
          <button
            onClick={modo === "professor" ? tocarKaraoke : ajudaLenta}
            className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow"
            aria-label="Ouvir tudo devagar"
          >
            <Volume2 className="w-6 h-6" />
          </button>
        )}
      </div>

      {fase === "leitura" && (
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 gap-4 overflow-y-auto">
          {/* Chip modo pedagógico */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow ${
              modo === "professor"
                ? "bg-indigo-500 text-white"
                : "bg-emerald-500 text-white"
            }`}
          >
            {modo === "professor" ? (
              <>
                <Ear className="w-3.5 h-3.5" /> Professor lê pra você
              </>
            ) : (
              <>
                <Hand className="w-3.5 h-3.5" /> Sua vez — toque cada palavra
              </>
            )}
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-6 max-w-md w-full flex flex-col items-center gap-4">
            <img
              src={objetoImg(pAtual.imagem)}
              alt=""
              className="h-40 sm:h-48 object-contain"
            />

            <p className="text-center text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-1">
              {tokens.map((t, i) => {
                if (t.tipo === "pontuacao") {
                  return (
                    <span key={i} className="text-slate-500">
                      {t.texto}
                    </span>
                  );
                }
                const isKaraoke = karaokeIdx === i;
                const isDica = dicaAtiva === i;
                const isLida = palavrasLidas.has(i);
                const isProximaEsperada =
                  modo === "crianca" && proximoTokenEsperado === i;
                return (
                  <button
                    key={i}
                    onClick={() => tocarPalavra(i)}
                    className={`px-1 rounded-md transition-all duration-150 ${
                      isKaraoke
                        ? "bg-yellow-300 text-slate-900 scale-110 shadow"
                        : isDica
                          ? "bg-sky-200 text-slate-900"
                          : isLida
                            ? "bg-emerald-100 text-emerald-800"
                            : isProximaEsperada
                              ? "bg-rose-100 text-rose-800 ring-2 ring-rose-400 animate-pulse"
                              : "hover:bg-slate-100"
                    }`}
                  >
                    {t.texto}
                  </button>
                );
              })}
            </p>

            {modo === "crianca" && (
              <div className="w-full flex items-center gap-2 text-xs text-slate-500 justify-center">
                <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-400 transition-all"
                    style={{
                      width: `${
                        (palavrasLidas.size /
                          Math.max(1, countPalavras(tokens))) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <span>
                  {palavrasLidas.size}/{countPalavras(tokens)}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={antPag}
              disabled={pagina === 0}
              className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center disabled:opacity-30"
              aria-label="Página anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {modo === "crianca" && (
              <button
                onClick={ajudaLenta}
                className="px-4 h-11 rounded-full bg-white shadow flex items-center gap-2 text-sm font-bold text-indigo-600"
              >
                <HelpCircle className="w-4 h-4" /> Ajuda
              </button>
            )}

            <button
              onClick={proxPag}
              className="w-11 h-11 rounded-full bg-rose-500 text-white shadow flex items-center justify-center"
              aria-label="Próxima página"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {modo === "crianca" && (
            <p className="text-[11px] text-slate-500 text-center max-w-xs">
              Leia em voz alta enquanto toca cada palavra na ordem. Se travar,
              aperte na palavra pra ouvir o Professor.
            </p>
          )}
        </div>
      )}

      {fase === "perguntas" && (() => {
        const p = historia.perguntas[perguntaIdx];
        const tipoLabel = tipoBadge(p.tipo ?? "literal");
        const modoOpc: "imagem" | "texto" = p.modo ?? "imagem";
        return (
          <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
            <div className="text-center max-w-md">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">
                  Pergunta {perguntaIdx + 1} / {historia.perguntas.length}
                </span>
                <span
                  className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${tipoLabel.cor}`}
                >
                  {tipoLabel.icone} {tipoLabel.texto}
                </span>
              </div>
              <p className="text-slate-700 text-base sm:text-lg mt-2 font-medium">
                {p.pergunta}
              </p>
              <button
                onClick={() => falar(p.pergunta)}
                className="mt-2 inline-flex items-center gap-1 text-xs text-rose-600 font-bold"
              >
                <Volume2 className="w-3 h-3" /> Ouvir de novo
              </button>
            </div>

            {modoOpc === "imagem" ? (
              <div className="grid grid-cols-3 gap-4 max-w-2xl w-full">
                {shuffleOnce(p, perguntaIdx).map((nome) => (
                  <button
                    key={nome}
                    onClick={() => responder(nome)}
                    className="aspect-square rounded-3xl bg-white shadow-md border-4 border-rose-200 p-3 flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    <img
                      src={objetoImg(nome)}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-3 w-full max-w-md">
                {shuffleOnce(p, perguntaIdx).map((txt) => (
                  <button
                    key={txt}
                    onClick={() => responder(txt)}
                    className="rounded-2xl bg-white shadow-md border-4 border-rose-200 p-4 text-left font-medium text-slate-800 hover:scale-[1.02] transition-transform flex items-center gap-3"
                  >
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        falar(txt);
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 flex-shrink-0"
                      role="button"
                      aria-label="Ouvir opção"
                    >
                      <Volume2 className="w-4 h-4" />
                    </span>
                    <span className="flex-1">{txt}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })()}

      {fase === "fim" && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 gap-4 text-center">
          <Sparkles className="w-20 h-20 text-amber-500" />
          <h2 className="text-3xl font-black text-slate-800">
            Você leu tudinho!
          </h2>
          <p className="text-slate-600">
            Acertou {acertos} de {historia.perguntas.length} perguntas.
          </p>
          <button
            onClick={() => {
              pararKaraoke();
              onSair();
            }}
            className="mt-4 px-6 py-3 rounded-full bg-rose-500 text-white font-bold shadow-lg"
          >
            Voltar para a biblioteca
          </button>
        </div>
      )}

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className={`w-28 h-28 rounded-full flex items-center justify-center shadow-2xl ${
                feedback === "ok" ? "bg-emerald-500" : "bg-rose-500"
              }`}
            >
              {feedback === "ok" ? (
                <Check className="w-14 h-14 text-white" />
              ) : (
                <X className="w-14 h-14 text-white" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ================= Utilitários ================= */

type Token = { tipo: "palavra" | "pontuacao"; texto: string };

function tokenizar(texto: string): Token[] {
  // Divide preservando pontuação (,.!?;:—) como tokens separados
  const out: Token[] = [];
  const re = /([A-Za-zÀ-ÿ0-9]+(?:['\-][A-Za-zÀ-ÿ0-9]+)*)|([.,!?;:—…"”“()])/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(texto)) !== null) {
    if (m[1]) out.push({ tipo: "palavra", texto: m[1] });
    else if (m[2]) out.push({ tipo: "pontuacao", texto: m[2] });
  }
  return out;
}

function firstPalavraIdx(tokens: Token[]): number {
  const i = tokens.findIndex((t) => t.tipo === "palavra");
  return i === -1 ? -1 : i;
}

function nextPalavraIdx(tokens: Token[], from: number): number {
  for (let i = from + 1; i < tokens.length; i++) {
    if (tokens[i].tipo === "palavra") return i;
  }
  return -1;
}

function countPalavras(tokens: Token[]): number {
  return tokens.filter((t) => t.tipo === "palavra").length;
}

// Embaralhamento determinístico por pergunta para estabilidade entre re-renders
function shuffleOnce(
  p: { correta: string; distratores: string[] },
  seed: number,
): string[] {
  const arr = [p.correta, ...p.distratores];
  let s = seed + 1;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function tipoBadge(tipo: TipoPergunta): {
  icone: string;
  texto: string;
  cor: string;
} {
  switch (tipo) {
    case "literal":
      return { icone: "📖", texto: "no texto", cor: "bg-sky-100 text-sky-700" };
    case "inferencia":
      return {
        icone: "💡",
        texto: "pense bem",
        cor: "bg-amber-100 text-amber-700",
      };
    case "sequencia":
      return {
        icone: "🔢",
        texto: "na ordem",
        cor: "bg-indigo-100 text-indigo-700",
      };
    case "causa":
      return {
        icone: "🎯",
        texto: "por quê",
        cor: "bg-rose-100 text-rose-700",
      };
    case "vocabulario":
      return {
        icone: "🔤",
        texto: "vocabulário",
        cor: "bg-emerald-100 text-emerald-700",
      };
  }
}
