import { useMemo, useState, useRef, useLayoutEffect } from "react";
import { motion, Reorder } from "framer-motion";
import {
  Image as ImageIcon,
  Volume2,
  Sparkles,
  MousePointerClick,
  ListOrdered,
  Link2,
  Palette,
  Puzzle,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { Secao } from "./blocos/Secao";
import { TapCountGroup } from "./blocos/TapCountGroup";
import { OperacaoVisual } from "./blocos/OperacaoVisual";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";
import type { Aula } from "../types";

/**
 * MultiModal — renderiza mídias (imagem/áudio/animação) e mini-jogos
 * interativos (arrastar, ordenar, ligar, colorir, montar) definidos na
 * própria aula. Objetivo: atender diferentes estilos de aprendizagem
 * (visual, auditivo, cinestésico, lógico).
 *
 * Silencioso quando a aula não define `midias` nem `interativas`.
 */
export function MultiModal({ aula }: { aula: Aula }) {
  if (!aula.midias?.length && !aula.interativas?.length) return null;
  return (
    <div className="space-y-4">
      {aula.midias?.map((m, i) => <Midia key={`m${i}`} midia={m} />)}
      {aula.interativas?.map((jogo, i) => <Interativa key={`j${i}`} jogo={jogo} />)}
    </div>
  );
}

/* ------------------------------ MÍDIAS ------------------------------ */

function Midia({ midia }: { midia: NonNullable<Aula["midias"]>[number] }) {
  if (midia.tipo === "imagem") {
    return (
      <Secao icon={ImageIcon} rotulo="Imagem" cor="#A78BFA">
        <div className="flex justify-center">
          <img
            src={midia.url}
            alt={midia.alt}
            className="h-40 w-40 sm:h-48 sm:w-48 object-contain rounded-2xl border-2 border-white/20 bg-white/5"
            loading="lazy"
          />
        </div>
        {midia.legenda && (
          <p className="mt-2 text-center text-sm text-white/70 italic">{midia.legenda}</p>
        )}
      </Secao>
    );
  }
  if (midia.tipo === "audio") {
    return (
      <Secao icon={Volume2} rotulo="Áudio" cor="#4C9EFF">
        <p className="font-black mb-2">{midia.titulo}</p>
        <audio controls src={midia.url} className="w-full" />
      </Secao>
    );
  }
  return (
    <Secao icon={Sparkles} rotulo="Animação" cor="#FFC93C">
      <div className="flex justify-center gap-3 text-5xl py-3">
        {midia.emojis.map((e, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -8, 0], rotate: [0, -6, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.15 }}
          >
            {e}
          </motion.span>
        ))}
      </div>
      {midia.legenda && (
        <p className="text-center text-sm text-white/70 italic">{midia.legenda}</p>
      )}
    </Secao>
  );
}

/* --------------------------- INTERATIVAS --------------------------- */

function Interativa({ jogo }: { jogo: NonNullable<Aula["interativas"]>[number] }) {
  switch (jogo.tipo) {
    case "arrastar":
      return <JogoArrastar jogo={jogo} />;
    case "ordenar":
      return <JogoOrdenar jogo={jogo} />;
    case "ligar":
      return <JogoLigar jogo={jogo} />;
    case "colorir":
      return <JogoColorir jogo={jogo} />;
    case "montar":
      return <JogoMontar jogo={jogo} />;
    case "contarQuiz":
      return <JogoContarQuiz jogo={jogo} />;
    case "operacao":
      return (
        <Secao icon={Sparkles} rotulo="Conta visual" cor={jogo.cor ?? "#60A5FA"}>
          <p className="font-black text-lg mb-1">{jogo.titulo}</p>
          {jogo.instrucao && (
            <p className="text-base text-white/80 mb-3">{jogo.instrucao}</p>
          )}
          <OperacaoVisual
            operacao={jogo.operacao}
            imagemUrl={jogo.imagemUrl}
            itemPlural={jogo.itemPlural}
            a={jogo.a}
            b={jogo.b}
            cor={jogo.cor}
            legenda={jogo.legenda}
          />
        </Secao>
      );
  }
}

function Status({ ok, texto }: { ok: boolean; texto: string }) {
  return (
    <div
      className={`mt-3 flex items-center gap-2 rounded-xl p-2 border ${
        ok
          ? "bg-[#22C55E]/15 border-[#22C55E]/30 text-[#86EFAC]"
          : "bg-[#EF4444]/15 border-[#EF4444]/30 text-[#FCA5A5]"
      }`}
    >
      <CheckCircle2 className="h-4 w-4" />
      <span className="text-sm font-black">{texto}</span>
    </div>
  );
}

/* --- Arrastar --- */
function JogoArrastar({
  jogo,
}: {
  jogo: Extract<NonNullable<Aula["interativas"]>[number], { tipo: "arrastar" }>;
}) {
  const alvos = useMemo(
    () => Array.from(new Set(jogo.pares.map((p) => p.alvo))),
    [jogo],
  );
  const [drops, setDrops] = useState<Record<string, string | null>>(
    Object.fromEntries(jogo.pares.map((p) => [p.item, null])),
  );
  const [checked, setChecked] = useState(false);
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const dragged = useRef<string | null>(null);
  const tts = useDeviceTTS();

  const buscarAlvoVisual = (nome: string) =>
    jogo.alvosVisuais?.find((a) => a.nome === nome);

  const contarNoAlvo = (mapa: Record<string, string | null>, alvo: string) =>
    Object.values(mapa).filter((a) => a === alvo).length;

  const falarElogio = (n: number, nome: string) => {
    const elogios = [
      `Muito bem! Ficaram ${n} na ${nome}.`,
      `Isso mesmo! ${n} na ${nome}. Boa!`,
      `Perfeito! A ${nome} ficou com ${n}.`,
    ];
    tts.speak(elogios[Math.floor(Math.random() * elogios.length)], { rate: 1.05 });
  };

  const conferir = () => {
    setChecked(true);
    // Feedback por caixa quando existe capacidade definida
    const faltando: string[] = [];
    const sobrando: string[] = [];
    for (const alvo of alvos) {
      const visual = buscarAlvoVisual(alvo);
      const cap = visual?.capacidade;
      if (cap === undefined) continue;
      const q = contarNoAlvo(drops, alvo);
      if (q < cap) faltando.push(`faltam ${cap - q} na ${visual?.nome ?? alvo}`);
      else if (q > cap) sobrando.push(`passou de ${cap} na ${visual?.nome ?? alvo}`);
    }
    if (faltando.length) {
      tts.speak(`Ainda ${faltando.join(", e ")}. Vamos completar!`, { rate: 1 });
    } else if (sobrando.length) {
      tts.speak(`${sobrando.join(", e ")}. Vamos contar de novo!`, { rate: 1 });
    } else {
      tts.speak("Muito bem! Todas as caixas estão certinhas!", { rate: 1.05, pitch: 1.1 });
    }
  };
  const reset = () => {
    setDrops(Object.fromEntries(jogo.pares.map((p) => [p.item, null])));
    setChecked(false);
    setSelecionado(null);
    setAviso(null);
    tts.stop();
  };
  const acertos = jogo.pares.filter(
    (p) => drops[p.item] === p.alvo,
  ).length;

  const colocarNoAlvo = (item: string, alvo: string) => {
    setDrops((d) => {
      const novo = { ...d, [item]: alvo };
      const visual = buscarAlvoVisual(alvo);
      const cap = visual?.capacidade;
      const q = contarNoAlvo(novo, alvo);
      const nome = visual?.nome ?? alvo;
      // Narração: conta o número colocado
      if (cap === undefined || cap > 1) {
        if (cap !== undefined && q > cap) {
          tts.speak(`${q}! Passou de ${cap}. Vamos contar de novo!`, { rate: 1 });
          setAviso(`Passou! Tire um da ${nome}.`);
        } else {
          if (cap !== undefined && q === cap) {
            falarElogio(q, nome);
            setAviso(null);
          } else {
            tts.speak(String(q), { rate: 1.1 });
            setAviso(null);
          }
        }
      }
      return novo;
    });
    setSelecionado(null);
  };


  return (
    <Secao icon={MousePointerClick} rotulo="Arraste" cor="#F472B6">
      <p className="font-black text-lg mb-1">{jogo.titulo}</p>
      <p className="text-base text-white/80 mb-2">{jogo.instrucao}</p>
      <p className="text-sm text-white/60 mb-3">
        Toque no item abaixo e depois no prato certo.
      </p>

      <div
        className={`grid gap-3 mb-4 ${
          alvos.length === 2
            ? "grid-cols-2"
            : "grid-cols-1 sm:grid-cols-3"
        }`}
      >
        {alvos.map((alvo) => {
          const podeReceber = selecionado !== null;
          const visual = buscarAlvoVisual(alvo);
          const quantosNoPrato = Object.values(drops).filter(
            (a) => a === alvo,
          ).length;
          const cor = visual?.cor ?? "#F472B6";
          return (
            <button
              type="button"
              key={alvo}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (!dragged.current) return;
                colocarNoAlvo(dragged.current, alvo);
                dragged.current = null;
              }}
              onClick={() => {
                if (selecionado) colocarNoAlvo(selecionado, alvo);
              }}
              className={`text-left rounded-3xl border-4 p-3 min-h-[180px] transition-all relative overflow-hidden ${
                podeReceber ? "ring-4 ring-[#FBBF24] animate-pulse" : ""
              }`}
              style={{
                background: visual
                  ? `linear-gradient(180deg, ${cor} 0%, ${cor}dd 100%)`
                  : "rgba(255,255,255,0.05)",
                borderColor: visual ? "#ffffff" : "rgba(255,255,255,0.3)",
                borderStyle: visual ? "solid" : "dashed",
                boxShadow: visual ? `0 8px 0 ${cor}80, 0 12px 24px rgba(0,0,0,0.35)` : undefined,
              }}
            >
              {visual ? (
                visual.imagemUrl ? (
                  /* --- Passarinho comendo minhoca --- */
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                      {visual.nome}
                    </span>
                    <div className="relative h-32 w-32 sm:h-36 sm:w-36">
                      <motion.img
                        src={visual.imagemUrl}
                        alt={visual.nome}
                        className="h-full w-full object-contain drop-shadow-[0_6px_8px_rgba(0,0,0,0.35)]"
                        animate={
                          visual.capacidade === 1 && quantosNoPrato > 0
                            ? { rotate: [0, -8, 8, -6, 6, 0], scale: [1, 1.1, 1] }
                            : { y: [0, -4, 0] }
                        }
                        transition={
                          visual.capacidade === 1 && quantosNoPrato > 0
                            ? { duration: 0.9, repeat: Infinity, repeatDelay: 0.6 }
                            : { duration: 1.6, repeat: Infinity }
                        }
                      />
                      {/* Item entrando (só faz sentido para 'alimentar' — capacidade 1). */}
                      {jogo.itemImagem &&
                        visual.capacidade === 1 &&
                        quantosNoPrato > 0 && (
                          <motion.img
                            key={`chomp-${quantosNoPrato}`}
                            src={jogo.itemImagem}
                            alt=""
                            initial={{ y: -60, opacity: 0, scale: 1.2 }}
                            animate={{
                              y: [-60, 0, 8],
                              opacity: [0, 1, 1, 0],
                              scale: [1.2, 1, 0.6],
                            }}
                            transition={{ duration: 1.2, times: [0, 0.4, 0.8, 1] }}
                            onClick={(e) => {
                              e.stopPropagation();
                              const first = Object.entries(drops).find(
                                ([, a]) => a === alvo,
                              );
                              if (first) setDrops((d) => ({ ...d, [first[0]]: null }));
                            }}
                            className="absolute top-2 left-1/2 -translate-x-1/2 h-10 w-10 sm:h-12 sm:w-12 object-contain cursor-pointer drop-shadow-md"
                          />
                        )}
                    </div>
                    {/* Itens empilhados (capacidade > 1: prateleira/cesta/caixa). */}
                    {jogo.itemImagem &&
                      (visual.capacidade ?? 0) > 1 &&
                      quantosNoPrato > 0 && (
                        <div
                          className="w-[88%] mx-auto rounded-2xl bg-white/95 border-4 p-2 flex flex-wrap gap-1 justify-center"
                          style={{ borderColor: cor }}
                        >
                          {Object.entries(drops)
                            .filter(([, a]) => a === alvo)
                            .map(([item]) => (
                              <motion.img
                                key={item}
                                src={jogo.itemImagem}
                                alt=""
                                initial={{ y: -20, opacity: 0, scale: 0.6 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDrops((d) => ({ ...d, [item]: null }));
                                }}
                                className="h-8 w-8 sm:h-10 sm:w-10 object-contain cursor-pointer drop-shadow"
                              />
                            ))}
                        </div>
                      )}

                    <div className="flex items-center gap-2">
                      {(() => {
                        const cap = visual.capacidade ?? 0;
                        const cheio = cap > 0 && quantosNoPrato >= cap;
                        // Rótulos por contexto: capacidade 1 = "alimentar" (bicho come);
                        // capacidade > 1 = "encaixar" (objetos em prateleira/cesta).
                        const alimenta = cap === 1;
                        const vazio =
                          alimenta ? "Com fome…" : cap > 0 ? `Vazia · 0/${cap}` : "Vazio";
                        const parcial = alimenta
                          ? "Comeu! 😋"
                          : cap > 0
                            ? `${quantosNoPrato}/${cap}`
                            : `${quantosNoPrato}`;
                        const completo = alimenta
                          ? "Comeu! 😋"
                          : cap > 0
                            ? `Cheia! ${quantosNoPrato}/${cap} ✓`
                            : `${quantosNoPrato}`;
                        const texto =
                          quantosNoPrato === 0 ? vazio : cheio ? completo : parcial;
                        return (
                          <span
                            className={`px-3 py-1 rounded-full bg-white text-[#0d1f55] text-sm font-black shadow ${
                              quantosNoPrato === 0 ? "animate-pulse bg-white/90" : ""
                            }`}
                          >
                            {texto}
                          </span>
                        );
                      })()}
                    </div>

                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-black uppercase tracking-wider text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                        {visual.nome}
                      </span>
                      {visual.capacidade !== undefined && (
                        <span
                          className="h-10 w-10 rounded-full font-black text-xl grid place-items-center shadow-lg border-4 border-white"
                          style={{ background: "#ffffff", color: cor }}
                        >
                          {visual.capacidade}
                        </span>
                      )}
                    </div>
                    <div
                      className="rounded-full min-h-[110px] p-3 flex flex-wrap gap-1.5 items-center justify-center mx-auto border-8"
                      style={{
                        background: "#ffffff",
                        borderColor: cor,
                        width: "88%",
                        boxShadow: `inset 0 4px 12px ${cor}55`,
                      }}
                    >
                      {jogo.itemImagem && quantosNoPrato > 0
                        ? Object.entries(drops)
                            .filter(([, a]) => a === alvo)
                            .map(([item]) => (
                              <img
                                key={item}
                                src={jogo.itemImagem}
                                alt=""
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDrops((d) => ({ ...d, [item]: null }));
                                }}
                                className="h-10 w-10 sm:h-12 sm:w-12 object-contain cursor-pointer drop-shadow-md"
                              />
                            ))
                        : Object.entries(drops)
                            .filter(([, a]) => a === alvo)
                            .map(([item]) => (
                              <span
                                key={item}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDrops((d) => ({ ...d, [item]: null }));
                                }}
                                className="px-2 py-1 rounded-lg bg-white text-[#0d1f55] text-sm font-black cursor-pointer"
                              >
                                {item}
                              </span>
                            ))}
                    </div>
                    {visual.capacidade !== undefined && (
                      <div className="mt-2 text-center text-xs font-black uppercase tracking-widest text-white drop-shadow">
                        {quantosNoPrato} / {visual.capacidade}
                      </div>
                    )}
                  </>
                )
              

              ) : (
                <>
                  <div className="text-sm font-black uppercase tracking-wider text-white mb-2">
                    {alvo}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(drops)
                      .filter(([, a]) => a === alvo)
                      .map(([item]) => (
                        <span
                          key={item}
                          onClick={(e) => {
                            e.stopPropagation();
                            setDrops((d) => ({ ...d, [item]: null }));
                          }}
                          className="px-3 py-2 rounded-xl bg-[#F472B6] text-[#0d1f55] text-base font-black cursor-pointer"
                        >
                          {item} ✕
                        </span>
                      ))}
                  </div>
                </>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-3 bg-white/5 rounded-2xl p-3 border-2 border-dashed border-white/20 min-h-[80px]">
        {Object.entries(drops)
          .filter(([, a]) => a === null)
          .map(([item]) => {
            const sel = selecionado === item;
            if (jogo.itemImagem) {
              return (
                <button
                  type="button"
                  key={item}
                  draggable
                  onDragStart={() => (dragged.current = item)}
                  onClick={() => setSelecionado(sel ? null : item)}
                  className={`h-14 w-14 rounded-2xl bg-white grid place-items-center shadow transition-all ${
                    sel
                      ? "scale-125 ring-4 ring-[#FBBF24]"
                      : "active:scale-95"
                  }`}
                  aria-label={item}
                >
                  <img
                    src={jogo.itemImagem}
                    alt=""
                    className="h-10 w-10 object-contain"
                    draggable={false}
                  />
                </button>
              );
            }
            return (
              <button
                type="button"
                key={item}
                draggable
                onDragStart={() => (dragged.current = item)}
                onClick={() => setSelecionado(sel ? null : item)}
                className={`px-4 py-3 rounded-xl font-black text-lg shadow transition-all ${
                  sel
                    ? "bg-[#FBBF24] text-[#0d1f55] scale-110 ring-4 ring-white"
                    : "bg-white text-[#0d1f55]"
                }`}
              >
                {item}
              </button>
            );
          })}
        {Object.values(drops).every((a) => a !== null) && (
          <span className="text-white/50 text-sm font-black self-center">
            Todos colocados
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={conferir}
          className="flex-1 h-10 rounded-xl bg-[#F472B6] text-[#0d1f55] font-black"
        >
          Conferir
        </button>
        <button
          onClick={reset}
          className="h-10 px-3 rounded-xl bg-white/15 grid place-items-center"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      {checked && (
        <Status
          ok={acertos === jogo.pares.length}
          texto={`${acertos} / ${jogo.pares.length} corretos`}
        />
      )}
    </Secao>
  );
}

/* --- Ordenar --- */
function JogoOrdenar({
  jogo,
}: {
  jogo: Extract<NonNullable<Aula["interativas"]>[number], { tipo: "ordenar" }>;
}) {
  // Modo visual: usa `imagens` (grupos com imagem + quantidade).
  const modoVisual = !!jogo.imagens?.length;
  const itensVisuais = useMemo(
    () =>
      (jogo.imagens ?? []).map((g, i) => ({
        id: `v${i}`,
        imagemUrl: g.imagemUrl,
        quantidade: g.quantidade,
        rotulo: g.rotulo,
        imagemUrl2: g.imagemUrl2,
        quantidade2: g.quantidade2,
        cor: g.cor,
        cor2: g.cor2,
      })),
    [jogo],
  );
  const embaralhadosV = useMemo(
    () => [...itensVisuais].sort(() => Math.random() - 0.5),
    [itensVisuais],
  );
  const embaralhados = useMemo(
    () => [...jogo.itens].sort(() => Math.random() - 0.5),
    [jogo],
  );
  const [ordemV, setOrdemV] = useState(embaralhadosV);
  const [ordem, setOrdem] = useState(embaralhados);
  const [checked, setChecked] = useState(false);
  const okV = ordemV.every((v, i) => v.id === itensVisuais[i].id);
  const okT = ordem.every((v, i) => v === jogo.itens[i]);
  const ok = modoVisual ? okV : okT;
  const ehPodio =
    !modoVisual && jogo.itens.every((i) => /^[123]º/.test(i));
  const estilos: Record<string, { h: string; bg: string; medal: string; label: string }> = {
    "1º": { h: "h-40", bg: "bg-gradient-to-b from-[#FFD700] to-[#B8860B]", medal: "🥇", label: "1º" },
    "2º": { h: "h-32", bg: "bg-gradient-to-b from-[#E5E7EB] to-[#9CA3AF]", medal: "🥈", label: "2º" },
    "3º": { h: "h-24", bg: "bg-gradient-to-b from-[#F59E0B] to-[#92400E]", medal: "🥉", label: "3º" },
  };
  return (
    <Secao icon={ListOrdered} rotulo="Ordene" cor="#34D399">
      <p className="font-black text-lg mb-1">{jogo.titulo}</p>
      <p className="text-base text-white/80 mb-3">{jogo.instrucao}</p>
      {modoVisual ? (
        <>
          <Reorder.Group
            axis="y"
            values={ordemV}
            onReorder={setOrdemV}
            className="space-y-2"
          >
            {ordemV.map((v) => (
              <Reorder.Item
                key={v.id}
                value={v}
                className="rounded-2xl bg-white/95 text-[#0d1f55] p-3 cursor-grab active:cursor-grabbing shadow flex items-center gap-3 border-2 border-white/40"
              >
                <span className="text-[#0d1f55]/60 font-black text-xl">≡</span>
                <div className="flex-1">
                  {v.rotulo && (
                    <div className="text-xs font-black uppercase tracking-wider text-[#0d1f55]/70 mb-1 text-center">
                      {v.rotulo}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    <div
                      className="flex flex-wrap gap-1 justify-center p-1.5 rounded-xl"
                      style={{ background: v.cor ? `${v.cor}22` : "transparent" }}
                    >
                      {Array.from({ length: v.quantidade }).map((_, k) => (
                        <img
                          key={k}
                          src={v.imagemUrl}
                          alt=""
                          className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                          loading="lazy"
                        />
                      ))}
                    </div>
                    {v.quantidade2 != null && v.quantidade2 > 0 && (
                      <>
                        <span className="text-2xl font-black text-[#0d1f55]">+</span>
                        <div
                          className="flex flex-wrap gap-1 justify-center p-1.5 rounded-xl"
                          style={{ background: v.cor2 ? `${v.cor2}22` : "transparent" }}
                        >
                          {Array.from({ length: v.quantidade2 }).map((_, k) => (
                            <img
                              key={k}
                              src={v.imagemUrl2 ?? v.imagemUrl}
                              alt=""
                              className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="text-2xl font-black tabular-nums bg-[#0d1f55] text-white h-11 min-w-[2.75rem] px-2 rounded-xl grid place-items-center">
                  {v.quantidade2 != null ? `${v.quantidade}+${v.quantidade2}` : v.quantidade}
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </>
      ) : ehPodio ? (
        <>
          <p className="text-sm text-white/60 mb-2">
            Arraste os pódios da esquerda para a direita na ordem: 1º, 2º, 3º.
          </p>
          <Reorder.Group
            axis="x"
            values={ordem}
            onReorder={setOrdem}
            className="flex items-end justify-center gap-3 py-3 bg-white/5 rounded-2xl border-2 border-white/10 min-h-[200px]"
          >
            {ordem.map((v) => {
              const key = v.slice(0, 2);
              const est = estilos[key] ?? estilos["3º"];
              return (
                <Reorder.Item
                  key={v}
                  value={v}
                  className={`${est.h} w-24 ${est.bg} rounded-t-2xl shadow-2xl flex flex-col items-center justify-start pt-2 cursor-grab active:cursor-grabbing border-4 border-white/40`}
                  whileDrag={{ scale: 1.1, zIndex: 10 }}
                >
                  <div className="text-5xl">{est.medal}</div>
                  <div className="text-2xl font-black text-[#0d1f55] mt-1">
                    {est.label}
                  </div>
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </>
      ) : (
        <Reorder.Group axis="y" values={ordem} onReorder={setOrdem} className="space-y-2">
          {ordem.map((v) => (
            <Reorder.Item
              key={v}
              value={v}
              className="rounded-xl bg-white text-[#0d1f55] font-black px-3 py-3 cursor-grab active:cursor-grabbing shadow"
            >
              ≡ {v}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      )}
      <button
        onClick={() => setChecked(true)}
        className="mt-3 w-full h-12 rounded-xl bg-[#34D399] text-[#0d1f55] font-black text-lg"
      >
        Conferir ordem
      </button>
      {checked && (
        <Status ok={ok} texto={ok ? "Ordem correta!" : "Ainda não está certa"} />
      )}
    </Secao>
  );
}


/* --- Ligar --- */
function JogoLigar({
  jogo,
}: {
  jogo: Extract<NonNullable<Aula["interativas"]>[number], { tipo: "ligar" }>;
}) {
  const colB = useMemo(
    () => [...jogo.pares.map((p) => p.b)].sort(() => Math.random() - 0.5),
    [jogo],
  );
  const cores = ["#F472B6", "#FBBF24", "#34D399", "#60A5FA", "#A78BFA", "#FB923C"];
  const [selA, setSelA] = useState<string | null>(null);
  const [ligacoes, setLigacoes] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const refsA = useRef<Record<string, HTMLButtonElement | null>>({});
  const refsB = useRef<Record<string, HTMLButtonElement | null>>({});
  const [linhas, setLinhas] = useState<
    { x1: number; y1: number; x2: number; y2: number; cor: string; ok?: boolean }[]
  >([]);

  const recalc = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const wb = wrap.getBoundingClientRect();
    const novas: typeof linhas = [];
    Object.entries(ligacoes).forEach(([a, b], i) => {
      const na = refsA.current[a];
      const nb = refsB.current[b];
      if (!na || !nb) return;
      const ra = na.getBoundingClientRect();
      const rb = nb.getBoundingClientRect();
      const parCerto = jogo.pares.find((p) => p.a === a)?.b === b;
      novas.push({
        x1: ra.right - wb.left,
        y1: ra.top + ra.height / 2 - wb.top,
        x2: rb.left - wb.left,
        y2: rb.top + rb.height / 2 - wb.top,
        cor: cores[i % cores.length],
        ok: checked ? parCerto : undefined,
      });
    });
    setLinhas(novas);
  };

  useLayoutEffect(() => {
    recalc();
    const ro = new ResizeObserver(() => recalc());
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", recalc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ligacoes, checked]);

  const clicarA = (a: string) => setSelA(a === selA ? null : a);
  const clicarB = (b: string) => {
    if (!selA) return;
    setLigacoes((l) => {
      const filtrado: Record<string, string> = {};
      Object.entries(l).forEach(([k, v]) => {
        if (v !== b) filtrado[k] = v;
      });
      filtrado[selA] = b;
      return filtrado;
    });
    setSelA(null);
  };
  const desligar = (a: string) => {
    setLigacoes((l) => {
      const n = { ...l };
      delete n[a];
      return n;
    });
  };
  const acertos = jogo.pares.filter((p) => ligacoes[p.a] === p.b).length;

  return (
    <Secao icon={Link2} rotulo="Ligue" cor="#60A5FA">
      <p className="font-black text-lg mb-1">{jogo.titulo}</p>
      <p className="text-base text-white/80 mb-3">{jogo.instrucao}</p>
      <div ref={wrapRef} className="relative">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        >
          {linhas.map((l, i) => (
            <line
              key={i}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke={l.ok === false ? "#EF4444" : l.ok === true ? "#22C55E" : l.cor}
              strokeWidth={5}
              strokeLinecap="round"
            />
          ))}
        </svg>
        <div className="grid grid-cols-[1fr_80px_1fr] gap-2 relative items-center" style={{ zIndex: 2 }}>
          <div className="space-y-4">
            {jogo.pares.map((p) => {
              const ligado = ligacoes[p.a];
              const sel = selA === p.a;
              const temImg = !!(p.aImagem && p.aQuantidade);
              return (
                <button
                  key={p.a}
                  ref={(el) => { refsA.current[p.a] = el; }}
                  onClick={() => (ligado ? desligar(p.a) : clicarA(p.a))}
                  className={`w-full text-left px-3 py-2 rounded-xl font-black text-sm border-2 transition-all flex items-center gap-2 ${
                    sel
                      ? "bg-[#FBBF24] text-[#0d1f55] border-white scale-105"
                      : ligado
                        ? "bg-white/90 text-[#0d1f55] border-[#60A5FA]"
                        : "bg-white text-[#0d1f55] border-transparent"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-black uppercase tracking-wider mb-1 opacity-70">
                      {p.a}
                    </div>
                    {temImg && (
                      <div className="flex flex-wrap gap-0.5">
                        {Array.from({ length: p.aQuantidade! }).map((_, k) => (
                          <img
                            key={k}
                            src={p.aImagem!}
                            alt=""
                            className="h-7 w-7 object-contain"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="inline-block w-3 h-3 rounded-full bg-[#60A5FA] flex-shrink-0" />
                </button>
              );
            })}
          </div>
          <div aria-hidden />
          <div className="space-y-4">
            {colB.map((b) => {
              const usado = Object.values(ligacoes).includes(b);
              const par = jogo.pares.find((p) => p.b === b);
              const temImg = !!(par?.bImagem && par?.bQuantidade);
              return (
                <button
                  key={b}
                  ref={(el) => { refsB.current[b] = el; }}
                  onClick={() => clicarB(b)}
                  className={`w-full text-left px-3 py-2 rounded-xl font-black text-2xl border-2 transition-all flex items-center gap-2 ${
                    usado
                      ? "bg-white/90 text-[#0d1f55] border-[#F472B6]"
                      : "bg-white/20 text-white border-transparent"
                  } ${selA ? "hover:scale-105" : ""}`}
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-[#F472B6] flex-shrink-0" />
                  <span className="flex-1 text-center">{b}</span>
                  {temImg && (
                    <img
                      src={par!.bImagem!}
                      alt=""
                      className="h-8 w-8 object-contain"
                      loading="lazy"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={() => setChecked(true)}
        className="mt-4 w-full h-12 rounded-xl bg-[#60A5FA] text-[#0d1f55] font-black text-lg"
      >
        Conferir
      </button>
      {checked && (
        <Status
          ok={acertos === jogo.pares.length}
          texto={`${acertos} / ${jogo.pares.length} ligações certas`}
        />
      )}
    </Secao>
  );
}


/* --- Colorir --- */
function JogoColorir({
  jogo,
}: {
  jogo: Extract<NonNullable<Aula["interativas"]>[number], { tipo: "colorir" }>;
}) {
  const [cores, setCores] = useState<Record<string, string | null>>(
    Object.fromEntries(jogo.regioes.map((r) => [r.nome, null])),
  );
  const [ativa, setAtiva] = useState<string>(jogo.paleta[0]);
  const [checked, setChecked] = useState(false);
  const acertos = jogo.regioes.filter(
    (r) => cores[r.nome] === r.corCorreta,
  ).length;
  return (
    <Secao icon={Palette} rotulo="Colorir" cor="#FF8A4C">
      <p className="font-black mb-1">{jogo.titulo}</p>
      <p className="text-sm text-white/70 mb-3">{jogo.instrucao}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {jogo.paleta.map((c) => (
          <button
            key={c}
            onClick={() => setAtiva(c)}
            style={{ background: c }}
            className={`h-9 w-9 rounded-full border-4 ${
              ativa === c ? "border-white" : "border-white/30"
            }`}
            aria-label={`cor ${c}`}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {jogo.regioes.map((r) => (
          <button
            key={r.nome}
            onClick={() => setCores((s) => ({ ...s, [r.nome]: ativa }))}
            style={{ background: cores[r.nome] ?? "rgba(255,255,255,0.1)" }}
            className="rounded-2xl border-2 border-white/30 p-4 min-h-[70px] font-black text-[#0d1f55] bg-white/10"
          >
            {r.nome}
          </button>
        ))}
      </div>
      <button
        onClick={() => setChecked(true)}
        className="mt-3 w-full h-10 rounded-xl bg-[#FF8A4C] text-[#0d1f55] font-black"
      >
        Conferir cores
      </button>
      {checked && (
        <Status
          ok={acertos === jogo.regioes.length}
          texto={`${acertos} / ${jogo.regioes.length} regiões corretas`}
        />
      )}
    </Secao>
  );
}

/* --- Montar --- */
function JogoMontar({
  jogo,
}: {
  jogo: Extract<NonNullable<Aula["interativas"]>[number], { tipo: "montar" }>;
}) {
  const disponiveis = useMemo(
    () => [...jogo.pecas].sort(() => Math.random() - 0.5),
    [jogo],
  );
  const [restam, setRestam] = useState(disponiveis);
  const [montado, setMontado] = useState<string[]>([]);
  const escolher = (p: string) => {
    setMontado((m) => [...m, p]);
    setRestam((r) => r.filter((x) => x !== p));
  };
  const desfazer = () => {
    const ultimo = montado[montado.length - 1];
    if (!ultimo) return;
    setMontado((m) => m.slice(0, -1));
    setRestam((r) => [...r, ultimo]);
  };
  const completo = montado.length === jogo.pecas.length;
  const correto = completo && montado.every((v, i) => v === jogo.pecas[i]);
  return (
    <Secao icon={Puzzle} rotulo="Montar" cor="#A78BFA">
      <p className="font-black mb-1">{jogo.titulo}</p>
      <p className="text-sm text-white/70 mb-3">{jogo.instrucao}</p>
      <div className="min-h-[60px] rounded-2xl bg-white/5 border-2 border-dashed border-white/30 p-2 flex flex-wrap gap-2 mb-3">
        {montado.map((p, i) => (
          <span
            key={i}
            className="px-3 py-2 rounded-xl bg-[#A78BFA] text-[#0d1f55] font-black"
          >
            {i + 1}. {p}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {restam.map((p) => (
          <button
            key={p}
            onClick={() => escolher(p)}
            className="px-3 py-2 rounded-xl bg-white text-[#0d1f55] font-black"
          >
            {p}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={desfazer}
          className="h-10 px-3 rounded-xl bg-white/15 font-black text-white"
        >
          Voltar
        </button>
        {completo && (
          <Status
            ok={correto}
            texto={correto ? "Montagem correta!" : "Ordem incorreta — tente de novo"}
          />
        )}
      </div>
    </Secao>
  );
}

/* --- Contar Quiz --- */
function JogoContarQuiz({
  jogo,
}: {
  jogo: Extract<NonNullable<Aula["interativas"]>[number], { tipo: "contarQuiz" }>;
}) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const acertou = escolha === jogo.correta;
  return (
    <Secao icon={Sparkles} rotulo="Fase" cor="#FFC93C">
      <p className="font-black text-lg mb-1">{jogo.titulo}</p>
      {jogo.instrucao && (
        <p className="text-base text-white/80 mb-3">{jogo.instrucao}</p>
      )}

      <div
        className={`grid gap-3 mb-4 ${
          jogo.grupos.length === 1
            ? "grid-cols-1"
            : jogo.grupos.length === 2
              ? "grid-cols-2"
              : "grid-cols-1 sm:grid-cols-3"
        }`}
      >
        {jogo.grupos.map((g, i) => (
          <TapCountGroup
            key={i}
            imagemUrl={g.imagemUrl}
            quantidade={g.quantidade}
            rotulo={g.rotulo}
            itemSingular="item"
            size={jogo.grupos.length === 1 ? "lg" : "md"}
          />
        ))}
      </div>

      <p className="font-black text-base mb-2 text-center">{jogo.pergunta}</p>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {jogo.opcoes.map((op, i) => {
          const selecionada = escolha === i;
          const certa = escolha !== null && i === jogo.correta;
          const errada = selecionada && i !== jogo.correta;
          return (
            <button
              key={i}
              onClick={() => setEscolha(i)}
              disabled={escolha !== null && acertou}
              className={`h-14 rounded-2xl font-black text-xl border-4 transition-all ${
                certa
                  ? "bg-[#22C55E] text-white border-white"
                  : errada
                    ? "bg-[#EF4444] text-white border-white"
                    : selecionada
                      ? "bg-[#FBBF24] text-[#0d1f55] border-white"
                      : "bg-white text-[#0d1f55] border-transparent active:scale-95"
              }`}
            >
              {op}
            </button>
          );
        })}
      </div>
      {escolha !== null && (
        <Status
          ok={acertou}
          texto={
            acertou
              ? jogo.acerto ?? "Excelente! Você acertou!"
              : jogo.erro ?? "Ainda não é essa. Conte de novo com calma."
          }
        />
      )}
      {escolha !== null && !acertou && (
        <button
          onClick={() => setEscolha(null)}
          className="mt-2 w-full h-10 rounded-xl bg-white/15 font-black text-white"
        >
          Tentar de novo
        </button>
      )}
    </Secao>
  );
}

