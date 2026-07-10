import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { AulaGeoV1, CenaGeoV1 } from "@/escola-brilha/curso-v4/types";
import { PERSONAGENS, ESQUILO_BRILHA } from "@/escola-brilha/mascotes-personagens";

import { BR_ESTADOS, BR_VIEWBOX, type EstadoBr } from "./brStates";

/**
 * PlayerGeoV1 — player 100% customizado da Geografia 3º–9º.
 *
 * Navegação por SCROLL: todas as 11 cenas ficam empilhadas na página.
 * A criança sobe e desce livremente. A barra de progresso reflete a
 * cena mais visível no viewport (via IntersectionObserver). Cada bloco
 * ainda tem um botão "próxima cena" que faz smooth-scroll pra próxima
 * seção — mas rolar com o dedo também funciona.
 */
export function PlayerGeoV1({
  aula,
  onSair,
  onConcluir,
}: {
  aula: AulaGeoV1;
  onSair: () => void;
  onConcluir: () => void;
}) {
  const cenas: Array<{ chave: string; rotulo: string; cena: CenaGeoV1 }> = [
    { chave: "1", rotulo: "🎬 Motivação", cena: aula.cena01_motivacao },
    { chave: "2", rotulo: "🔮 Previsão", cena: aula.cena02_previsao },
    { chave: "3", rotulo: "📚 Vocabulário", cena: aula.cena03_vocabulario },
    { chave: "4", rotulo: "📖 Leitura guiada", cena: aula.cena04_leituraGuiada },
    { chave: "5", rotulo: "🧠 Compreensão", cena: aula.cena05_compreensao },
    { chave: "6", rotulo: "🎭 Personagens & lugar", cena: aula.cena06_personagensLugar },
    { chave: "7", rotulo: "🧩 Sequência", cena: aula.cena07_sequencia },
    { chave: "8", rotulo: "💪 Você lê", cena: aula.cena08_voceLe },
    { chave: "9", rotulo: "🎮 Minijogo", cena: aula.cena09_minijogo },
    { chave: "10", rotulo: "🔁 Revisão", cena: aula.cena10_revisao },
    { chave: "11", rotulo: "✅ Avaliação", cena: aula.cena11_avaliacao },
  ];

  const total = cenas.length;
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [ativo, setAtivo] = useState(0);
  const atual = cenas[ativo];
  const percent = Math.round(((ativo + 1) / total) * 100);

  // rastrear cena mais visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pega a entry com maior intersecção visível
        const visiveis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visiveis[0]) {
          const i = Number(visiveis[0].target.getAttribute("data-cena-idx"));
          if (!Number.isNaN(i)) setAtivo(i);
        }
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const irPara = (i: number) => {
    const el = sectionRefs.current[i];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else if (i >= total) onConcluir();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0a2540] to-[#0d1f55] text-white">
      <header className="sticky top-0 z-20 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onSair}
            className="text-xs text-white/70 hover:text-white shrink-0"
          >
            ← Sair
          </button>
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-amber-300 transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="text-xs text-white/60 shrink-0">
            {ativo + 1} / {total}
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 pb-2 flex items-center justify-between text-[11px] uppercase tracking-widest text-emerald-300/80">
          <span>{atual.rotulo}</span>
          <span className="text-white/40">{aula.titulo}</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-10">
        {cenas.map((c, i) => (
          <section
            key={c.chave}
            data-cena-idx={i}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className="scroll-mt-28"
          >
            <div className="text-[11px] uppercase tracking-[0.2em] text-amber-300/80 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-300/20 border border-amber-300/40 grid place-items-center text-amber-200 text-[10px] font-black">
                {i + 1}
              </span>
              {c.rotulo}
            </div>
            <CenaRenderer
              cena={c.cena}
              onProxima={() => (i + 1 < total ? irPara(i + 1) : onConcluir())}
              ultima={i + 1 === total}
            />
          </section>
        ))}
        <div className="h-24" />
      </main>
    </div>
  );
}

function CenaRenderer({
  cena,
  onProxima,
  ultima,
}: {
  cena: CenaGeoV1;
  onProxima: () => void;
  ultima?: boolean;
}) {
  switch (cena.tipo) {
    case "mesaCartografo":
      return <MesaCartografo cena={cena} onProxima={onProxima} />;
    case "votoExplorador":
      return <VotoExplorador cena={cena} onProxima={onProxima} />;
    case "cadernosCampo":
      return <CadernosCampo cena={cena} onProxima={onProxima} />;
    case "narrarMapa":
      return <NarrarMapa cena={cena} onProxima={onProxima} />;
    case "quizRadar":
      return <QuizRadar cena={cena} onProxima={onProxima} />;
    case "mapaCamadas":
      return <MapaCamadas cena={cena} onProxima={onProxima} />;
    case "mapaBrasilInterativo":
      return <MapaBrasilInterativo cena={cena} onProxima={onProxima} />;
    case "linhaEstrada":
      return <LinhaEstrada cena={cena} onProxima={onProxima} />;
    case "voceLeSozinho":
      return <VoceLeSozinho cena={cena} onProxima={onProxima} />;
    case "construtorMarcos":
      return <ConstrutorMarcos cena={cena} onProxima={onProxima} />;
    case "pizzaMunicipio":
      return <PizzaMunicipio cena={cena} onProxima={onProxima} />;
    case "seloAtlas":
      return <SeloAtlas cena={cena} onProxima={onProxima} ultima={ultima} />;

    case "placeholder":
      return (
        <CenaPlaceholder
          titulo={cena.titulo}
          descricao={cena.descricao}
          onProxima={onProxima}
          ultima={ultima}
        />
      );
  }
}

// ─────────────────────────────────────────────────────────────────────
// Cena 1 — Mesa do Cartógrafo (lupa arrastável revela o mapa)
// ─────────────────────────────────────────────────────────────────────
function MesaCartografo({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "mesaCartografo" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const imagemCena = cena.imagemDestaqueUrl ?? cena.mapaUrl;
  const [descoberto, setDescoberto] = useState(false);

  return (
    <div className="space-y-5">
      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        {cena.instrucao}
      </div>

      {/* Imagem limpa, sem moldura. Clique/toque revela a explicação. */}
      <button
        type="button"
        onClick={() => setDescoberto(true)}
        className="block w-full rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-300 relative"
        aria-label={descoberto ? "Imagem da missão" : "Toque para ouvir a explicação"}
      >
        <img
          src={imagemCena}
          alt="Imagem da missão de Geografia"
          className="w-full h-auto object-contain"
          draggable={false}
        />
        {!descoberto && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full animate-pulse">
            👆 toque na imagem
          </div>
        )}
      </button>

      {descoberto && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3"
          >
            <img
              src={aurora.img}
              alt={aurora.nome}
              className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
            />
            <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
              <div className="text-emerald-300 text-xs font-bold mb-1">
                {aurora.nome}
              </div>
              {cena.aurora}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 flex items-start gap-3"
          >
            <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
            <div className="text-sm leading-snug">
              <div className="text-emerald-300 text-xs font-bold mb-1">Aurora</div>
              {cena.falaFinal}
            </div>
          </motion.div>
        </>
      )}

      <button
        onClick={onProxima}
        disabled={!descoberto}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          descoberto
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {descoberto ? "Continuar" : "👆 toque na imagem para começar"}
      </button>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────────
// Cena 2 — Voto do Explorador (2 cards grandes, escolhe antes de saber)
// ─────────────────────────────────────────────────────────────────────
function VotoExplorador({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "votoExplorador" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [voto, setVoto] = useState<string | null>(null);
  const [revelado, setRevelado] = useState(false);
  const acertou = voto === cena.respostaCerta;

  const votar = (id: string) => {
    if (revelado) return;
    setVoto(id);
    setTimeout(() => setRevelado(true), 350);
  };

  return (
    <div className="space-y-5">
      {/* Aurora fala */}
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">
            {aurora.nome}
          </div>
          {cena.aurora}
        </div>
      </div>

      {/* Pergunta grande */}
      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl px-4 py-4 text-center shadow-lg">
        <div className="text-[11px] uppercase tracking-widest text-amber-800/80 font-bold mb-1">
          🗳️ Voto do Explorador
        </div>
        <div className="text-base sm:text-lg font-black leading-tight">
          {cena.pergunta}
        </div>
      </div>

      {/* Opções em lista de texto — visual sóbrio, sem cor/ícone */}
      <div className="flex flex-col gap-2">
        {cena.opcoes.map((op) => {
          const escolhido = voto === op.id;
          const certoRevelado = revelado && op.id === cena.respostaCerta;
          const erradoRevelado = revelado && escolhido && op.id !== cena.respostaCerta;
          return (
            <motion.button
              key={op.id}
              onClick={() => votar(op.id)}
              disabled={revelado}
              whileTap={{ scale: revelado ? 1 : 0.99 }}
              className={`w-full text-left rounded-xl px-4 py-3 border transition-all bg-white/5 hover:bg-white/10 ${
                escolhido ? "border-white/70" : "border-white/15"
              } ${certoRevelado ? "border-emerald-400 bg-emerald-500/10" : ""} ${
                erradoRevelado ? "border-rose-400 bg-rose-500/10 opacity-80" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-white font-semibold text-base leading-snug">
                    {op.titulo}
                  </div>
                  {op.subtitulo && (
                    <div className="text-white/60 text-sm mt-1 leading-snug">
                      {op.subtitulo}
                    </div>
                  )}
                </div>
                {certoRevelado && (
                  <span className="text-emerald-300 text-lg font-bold shrink-0">✓</span>
                )}
                {erradoRevelado && (
                  <span className="text-rose-300 text-lg font-bold shrink-0">✕</span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>


      {revelado && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-4 flex items-start gap-3 border ${
            acertou
              ? "bg-emerald-500/15 border-emerald-400/40"
              : "bg-rose-500/15 border-rose-400/40"
          }`}
        >
          <img src={aurora.img} alt="" className="w-12 h-12 shrink-0 rounded-full bg-white/10 p-1" />
          <div className="text-sm leading-snug space-y-2">
            <div className={`text-xs font-bold ${acertou ? "text-emerald-300" : "text-rose-300"}`}>
              {acertou ? "🎉 Boa, explorador!" : "Quase!"}
            </div>
            <div>{acertou ? cena.feedbackAcerto : cena.feedbackErro}</div>
            <div className="text-white/90 border-t border-white/10 pt-2">
              <span className="text-emerald-300 text-xs font-bold">Aurora: </span>
              {cena.falaFinal}
            </div>
          </div>
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!revelado}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          revelado
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {revelado ? "Continuar" : "🗳️ Escolha uma opção pra continuar"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 3 — Cadernos de Campo (4 flip cards de vocabulário)
// ─────────────────────────────────────────────────────────────────────
function CadernosCampo({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "cadernosCampo" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">
            {aurora.nome}
          </div>
          {cena.aurora}
        </div>
      </div>

      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        {cena.instrucao}
      </div>

      {/* Cadernos sempre abertos: foto (se houver) + texto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cena.cadernos.map((c) => (
          <div
            key={c.id}
            className="rounded-2xl p-4 bg-white/[0.04] border border-white/10"
          >
            <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-2">
              {c.capa}
            </div>
            {c.fotoUrl && (
              <img
                src={c.fotoUrl}
                alt={c.capa}
                loading="lazy"
                className="w-full aspect-[3/2] object-cover rounded-lg mb-3 border border-white/10"
              />
            )}
            <p className="text-white text-sm font-semibold leading-snug">
              {c.conteudo}
            </p>
            {c.exemplo && (
              <p className="text-xs italic text-white/60 mt-2 border-t border-white/10 pt-2">
                Ex.: {c.exemplo}
              </p>
            )}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 flex items-start gap-3"
      >
        <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
        <div className="text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">Aurora</div>
          {cena.falaFinal}
        </div>
      </motion.div>

      <button
        onClick={onProxima}
        className="w-full py-4 rounded-2xl font-black text-lg transition bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
      >
        Continuar
      </button>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────────
// Cena 4 — Aurora narra o mapa (balões clicáveis + TTS)
// ─────────────────────────────────────────────────────────────────────
function NarrarMapa({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "narrarMapa" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [ativo, setAtivo] = useState<string | null>(null);
  const [visitados, setVisitados] = useState<Record<string, boolean>>({});
  const total = cena.pontos.length;
  const visitadosCount = Object.values(visitados).filter(Boolean).length;
  const todosVistos = visitadosCount === total;
  const pontoAtivo = cena.pontos.find((p) => p.id === ativo) ?? null;

  const falar = (texto: string) => {
    try {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      u.lang = "pt-BR";
      u.rate = 0.95;
      u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    } catch {
      /* ignore */
    }
  };

  const tocar = (id: string, texto: string) => {
    setAtivo(id);
    setVisitados((prev) => ({ ...prev, [id]: true }));
    falar(texto);
  };

  useEffect(() => {
    return () => {
      try {
        window.speechSynthesis?.cancel();
      } catch {
        /* ignore */
      }
    };
  }, []);

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">
            {aurora.nome}
          </div>
          {cena.aurora}
        </div>
      </div>

      <div className="text-white/70 text-sm text-center">
        Toque em cada item pra ouvir o professor ler.
      </div>

      <ul className="divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
        {cena.pontos.map((p) => {
          const visto = !!visitados[p.id];
          const isAtivo = ativo === p.id;
          return (
            <li key={p.id}>
              <button
                onClick={() => tocar(p.id, `${p.titulo}. ${p.texto}`)}
                className={`w-full text-left px-4 py-3 transition ${
                  isAtivo ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-1 text-white text-[15px] leading-snug font-medium">
                    {p.titulo}
                  </span>
                  <span
                    className={`text-xs shrink-0 mt-1 ${
                      visto ? "text-emerald-300" : "text-white/40"
                    }`}
                  >
                    {visto ? "✓ lido" : "🔊"}
                  </span>
                </div>
                {isAtivo && (
                  <p className="text-white/70 text-sm leading-snug mt-2">
                    {p.texto}
                  </p>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="text-center text-xs text-white/60">
        {visitadosCount} / {total} lidos
      </div>


      {todosVistos && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 flex items-start gap-3"
        >
          <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
          <div className="text-sm leading-snug">
            <div className="text-emerald-300 text-xs font-bold mb-1">Aurora</div>
            {cena.falaFinal}
          </div>
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!todosVistos}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          todosVistos
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {todosVistos ? "Continuar" : "🗺️ Toque em todos os balões"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 5 — Quiz do Radar (radar gira e "pousa" no card certo)
// ─────────────────────────────────────────────────────────────────────
function QuizRadar({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "quizRadar" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [idx, setIdx] = useState(0);
  const [escolha, setEscolha] = useState<string | null>(null);
  const [revelado, setRevelado] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const p = cena.perguntas[idx];
  const total = cena.perguntas.length;
  const acertou = escolha === p?.correta;

  const escolher = (id: string) => {
    if (revelado) return;
    setEscolha(id);
    setTimeout(() => {
      setRevelado(true);
      if (id === p.correta) setAcertos((n) => n + 1);
    }, 900); // tempo do radar "girar" antes de revelar
  };

  const proxima = () => {
    if (idx + 1 < total) {
      setIdx(idx + 1);
      setEscolha(null);
      setRevelado(false);
    } else {
      setFinalizado(true);
    }
  };

  // ângulo do radar apontando pro card escolhido (0=cima, 120=dir-baixo, 240=esq-baixo)
  const anguloDoCard = (cardId: string) => {
    const i = p.cards.findIndex((c) => c.id === cardId);
    if (i < 0) return 0;
    return (i * 360) / p.cards.length;
  };
  const anguloAtual = escolha ? anguloDoCard(escolha) : null;

  const falar = (texto: string) => {
    try {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      u.lang = "pt-BR";
      u.rate = 0.95;
      u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    } catch {
      /* ignore */
    }
  };

  // Fala a pergunta a cada vez que idx muda
  useEffect(() => {
    if (finalizado) return;
    const atual = cena.perguntas[idx];
    if (atual) falar(atual.pergunta);
    return () => {
      try {
        window.speechSynthesis?.cancel();
      } catch {
        /* ignore */
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, finalizado]);

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">{aurora.nome}</div>
          {cena.aurora}
        </div>
      </div>

      <div className="text-white/70 text-sm text-center">{cena.instrucao}</div>

      <div className="flex items-center justify-between text-xs text-white/60 px-1">
        <span className="uppercase tracking-widest font-bold">
          Pergunta {idx + 1} / {total}
        </span>
        <span>✓ {acertos}</span>
      </div>

      {!finalizado && p && (
        <>
          {/* Pergunta — sóbria, só texto */}
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-white/15 pb-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 text-white font-semibold text-lg leading-snug">
                {p.pergunta}
              </div>
              <button
                onClick={() => falar(p.pergunta)}
                className="shrink-0 text-white/60 hover:text-white text-xs underline underline-offset-2"
                aria-label="Ouvir a pergunta"
              >
                ouvir
              </button>
            </div>
          </motion.div>

          {p.fotoUrl && (
            <motion.img
              key={`${p.id}-foto`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={p.fotoUrl}
              alt=""
              loading="lazy"
              className="w-full aspect-[16/9] object-cover rounded-xl"
            />
          )}

          {/* Opções — lista vertical, texto puro */}
          <ul className="divide-y divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {p.cards.map((c) => {
              const escolhido = escolha === c.id;
              const certoRevelado = revelado && c.id === p.correta;
              const erradoRevelado = revelado && escolhido && c.id !== p.correta;
              return (
                <li key={c.id}>
                  <button
                    onClick={() => escolher(c.id)}
                    disabled={revelado}
                    className={`w-full text-left px-4 py-4 transition flex items-center gap-3 ${
                      revelado ? "cursor-default" : "hover:bg-white/5"
                    } ${escolhido && !revelado ? "bg-white/10" : ""} ${
                      certoRevelado ? "bg-emerald-500/10" : ""
                    } ${erradoRevelado ? "opacity-60" : ""}`}
                  >
                    <span className="flex-1 text-white text-[15px] leading-snug">
                      {c.titulo}
                    </span>
                    {certoRevelado && (
                      <span className="text-emerald-300 text-sm shrink-0">✓</span>
                    )}
                    {erradoRevelado && (
                      <span className="text-rose-300 text-sm shrink-0">✕</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>


          {revelado && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-2xl p-4 flex items-start gap-3 border ${
                acertou
                  ? "bg-emerald-500/15 border-emerald-400/40"
                  : "bg-rose-500/15 border-rose-400/40"
              }`}
            >
              <img
                src={aurora.img}
                alt=""
                className="w-12 h-12 shrink-0 rounded-full bg-white/10 p-1"
              />
              <div className="text-sm leading-snug">
                <div
                  className={`text-xs font-bold ${
                    acertou ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {acertou ? "🎯 Radar pousou no lugar certo!" : "Radar errou o alvo!"}
                </div>
                <div className="mt-1">
                  {acertou ? p.feedbackAcerto : p.feedbackErro}
                </div>
              </div>
            </motion.div>
          )}

          <button
            onClick={proxima}
            disabled={!revelado}
            className={`w-full py-4 rounded-2xl font-black text-lg transition ${
              revelado
                ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
                : "bg-white/10 text-white/40 cursor-not-allowed"
            }`}
          >
            {revelado
              ? idx + 1 < total
                ? "Próxima pergunta →"
                : "Ver resultado"
              : "Escolha uma resposta"}

          </button>
        </>
      )}

      {finalizado && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-emerald-500/20 to-amber-400/20 border-2 border-emerald-400/40 rounded-2xl p-6 text-center"
          >
            <div className="text-5xl mb-2">📡</div>
            <div className="text-2xl font-black">
              {acertos} / {total}
            </div>
            <div className="text-sm text-white/80 mt-1">acertos no radar</div>
          </motion.div>
          <div className="bg-white/10 border border-white/15 rounded-2xl p-4 flex items-start gap-3">
            <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
            <div className="text-sm leading-snug">
              <div className="text-emerald-300 text-xs font-bold mb-1">Aurora</div>
              {cena.falaFinal}
            </div>
          </div>
          <button
            onClick={onProxima}
            className="w-full py-4 rounded-2xl font-black text-lg bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01] transition"
          >
            Continuar
          </button>
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 6 — Mapa de Camadas (toggles Urbana/Rural acendem partes do mapa)
// ─────────────────────────────────────────────────────────────────────
function MapaCamadas({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "mapaCamadas" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [ligadas, setLigadas] = useState<Record<string, boolean>>({});
  const totalLigadas = Object.values(ligadas).filter(Boolean).length;
  const todasLigadas = totalLigadas === cena.camadas.length;

  const alternar = (id: string) =>
    setLigadas((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">{aurora.nome}</div>
          {cena.aurora}
        </div>
      </div>

      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        🗺️ {cena.instrucao}
      </div>

      {/* Mapa com camadas */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-xl bg-black/40">
        <img
          src={cena.mapaUrl}
          alt="Mapa do município"
          className="w-full aspect-[4/3] object-cover select-none"
          draggable={false}
        />
        {/* véu escuro global — some quando TUDO está ligado */}
        <div
          className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-500"
          style={{ opacity: todasLigadas ? 0 : 0.55 }}
        />
        {/* recortes iluminados por camada */}
        {cena.camadas.map((c) => {
          const on = !!ligadas[c.id];
          return (
            <motion.div
              key={c.id}
              className="absolute pointer-events-none rounded-2xl"
              style={{
                left: `${c.rect.x}%`,
                top: `${c.rect.y}%`,
                width: `${c.rect.w}%`,
                height: `${c.rect.h}%`,
              }}
              animate={{
                boxShadow: on
                  ? "0 0 0 3px rgba(255,255,255,.9), 0 0 40px 8px rgba(52,211,153,.55), inset 0 0 60px rgba(255,255,255,.25)"
                  : "0 0 0 2px rgba(255,255,255,.15)",
                background: on
                  ? "rgba(255,255,255,0)"
                  : "rgba(0,0,0,.35)",
              }}
              transition={{ duration: 0.4 }}
            >
              {on && (
                <div className="absolute -top-2 left-2 bg-black/70 text-white text-[11px] font-bold px-2 py-0.5 rounded-full backdrop-blur">
                  {c.emoji} {c.rotulo}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Toggles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cena.camadas.map((c) => {
          const on = !!ligadas[c.id];
          return (
            <button
              key={c.id}
              onClick={() => alternar(c.id)}
              className={`relative rounded-2xl p-4 border-2 text-left transition-all bg-gradient-to-br ${c.cor} ${
                on ? "border-white ring-4 ring-white/40 shadow-2xl" : "border-white/20 opacity-70"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-4xl">{c.emoji}</div>
                <div className="flex-1">
                  <div className="text-white font-black text-lg leading-tight">
                    {c.rotulo}
                  </div>
                  <div className="text-white/85 text-xs mt-0.5">
                    {on ? "✅ acesa no mapa" : "toque pra acender"}
                  </div>
                </div>
                {/* switch visual */}
                <div
                  className={`w-11 h-6 rounded-full p-0.5 transition-colors ${
                    on ? "bg-emerald-300" : "bg-white/25"
                  }`}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-white shadow"
                    animate={{ x: on ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Descrições das camadas ligadas */}
      <div className="space-y-2">
        {cena.camadas
          .filter((c) => ligadas[c.id])
          .map((c) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 border border-white/15 rounded-xl p-3 flex items-start gap-2 text-sm"
            >
              <div className="text-xl shrink-0">{c.emoji}</div>
              <div>
                <div className="font-bold text-emerald-300">{c.rotulo}</div>
                <div className="text-white/85 leading-snug">{c.descricao}</div>
              </div>
            </motion.div>
          ))}
      </div>

      {todasLigadas && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 flex items-start gap-3"
        >
          <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
          <div className="text-sm leading-snug">
            <div className="text-emerald-300 text-xs font-bold mb-1">Aurora</div>
            {cena.falaFinal}
          </div>
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!todasLigadas}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          todasLigadas
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {todasLigadas ? "Continuar" : "🔦 Acenda todas as camadas do mapa"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 7 — Linha da Estrada (tocar as paradas em ordem)
// ─────────────────────────────────────────────────────────────────────
function LinhaEstrada({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "linhaEstrada" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const total = cena.ordemCerta.length;
  const [passo, setPasso] = useState(0);       // próxima posição a preencher
  const [colocados, setColocados] = useState<string[]>([]); // ids em ordem
  const [erro, setErro] = useState<string | null>(null);
  const concluido = passo === total;

  const proxIdEsperado = cena.ordemCerta[passo];
  const paradaPorId = (id: string) => cena.paradas.find((p) => p.id === id)!;

  const tentar = (id: string) => {
    if (concluido || colocados.includes(id)) return;
    if (id === proxIdEsperado) {
      setColocados((prev) => [...prev, id]);
      setPasso((n) => n + 1);
      setErro(null);
    } else {
      setErro(id);
      setTimeout(() => setErro(null), 700);
    }
  };

  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleDragEnd = (
    id: string,
    e: MouseEvent | TouchEvent | PointerEvent,
    info: { point: { x: number; y: number } },
  ) => {
    if (concluido || colocados.includes(id)) return;
    const { x, y } = getPointerXY(e, info);
    let melhorIdx = -1;
    let melhorDist = Infinity;
    slotRefs.current.forEach((el, idx) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dentro =
        x >= r.left - 24 && x <= r.right + 24 &&
        y >= r.top - 24 && y <= r.bottom + 24;
      if (!dentro) return;
      const cx = (r.left + r.right) / 2;
      const cy = (r.top + r.bottom) / 2;
      const d = Math.hypot(x - cx, y - cy);
      if (d < melhorDist) { melhorDist = d; melhorIdx = idx; }
    });
    if (melhorIdx === -1) return;
    if (melhorIdx === passo && id === proxIdEsperado) {
      setColocados((prev) => [...prev, id]);
      setPasso((n) => n + 1);
      setErro(null);
    } else {
      setErro(id);
      setTimeout(() => setErro(null), 700);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">{aurora.nome}</div>
          {cena.aurora}
        </div>
      </div>

      <div className="text-sm text-white/70 text-center">
        {cena.instrucao}
      </div>

      <div className="text-white font-semibold text-base text-center leading-snug">
        {cena.pergunta}
      </div>

      {/* Slots numerados — destino */}
      <div className="space-y-2">
        {cena.ordemCerta.map((id, i) => {
          const preenchido = i < passo;
          const ativo = i === passo && !concluido;
          const p = preenchido ? paradaPorId(cena.ordemCerta[i]) : null;
          return (
            <div
              key={i}
              ref={(el) => { slotRefs.current[i] = el; }}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 border transition ${
                preenchido
                  ? "border-white/30 bg-white/5"
                  : ativo
                  ? "border-dashed border-white/40 bg-white/[0.03]"
                  : "border-dashed border-white/15 bg-transparent"
              }`}
            >
              <div className="text-white/50 text-sm font-mono w-5 shrink-0">
                {i + 1}.
              </div>
              <div className="flex-1 text-sm">
                {preenchido && p ? (
                  <span className="text-white font-medium">{p.rotulo}</span>
                ) : (
                  <span className="text-white/30 italic">
                    {ativo ? "arraste a resposta aqui" : "—"}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Banco — arraste para cima */}
      {!concluido && (
        <div className="pt-2 border-t border-white/10">
          <div className="text-xs text-white/50 mb-2 text-center">
            Arraste para o lugar certo
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {cena.paradas.map((p) => {
              const usado = colocados.includes(p.id);
              const errando = erro === p.id;
              if (usado) return null;
              return (
                <motion.div
                  key={p.id}
                  drag
                  dragSnapToOrigin
                  dragMomentum={false}
                  whileDrag={{ scale: 1.05, zIndex: 50 }}
                  onDragEnd={(e, info) => handleDragEnd(p.id, e, info)}
                  animate={errando ? { x: [-6, 6, -4, 4, 0] } : { x: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`cursor-grab active:cursor-grabbing select-none px-4 py-2 rounded-md border text-sm font-medium touch-none ${
                    errando
                      ? "bg-rose-500/15 border-rose-400/60 text-rose-100"
                      : "bg-white/10 border-white/25 text-white hover:bg-white/15"
                  }`}
                >
                  {p.rotulo}
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {erro && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-rose-200/80 text-center"
        >
          {cena.feedbackErro}
        </motion.div>
      )}

      {concluido && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 flex items-start gap-3"
        >
          <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
          <div className="text-sm leading-snug space-y-1">
            <div className="text-emerald-300 text-xs font-bold">
              🎉 {cena.feedbackAcerto}
            </div>
            <div>{cena.falaFinal}</div>
          </div>
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!concluido}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          concluido
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {concluido ? "Continuar" : `🛣️ Monte o caminho (${passo}/${total})`}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 8 — Você lê sozinho (pergaminho SEM áudio; a criança lê e marca)
// ─────────────────────────────────────────────────────────────────────
function VoceLeSozinho({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "voceLeSozinho" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [marcadas, setMarcadas] = useState<Record<string, Set<string>>>({});
  const [concluido, setConcluido] = useState(false);

  const total = cena.paragrafos.length;
  const paragrafo = cena.paragrafos[paginaAtual];
  const marcadasDaPagina = marcadas[paragrafo.id] ?? new Set<string>();
  const todasMarcadasNaPagina = paragrafo.chaves.every((c) =>
    marcadasDaPagina.has(c),
  );

  const marcarChave = (chave: string) => {
    setMarcadas((prev) => {
      const atual = new Set(prev[paragrafo.id] ?? []);
      if (atual.has(chave)) atual.delete(chave);
      else atual.add(chave);
      return { ...prev, [paragrafo.id]: atual };
    });
  };

  const avancar = () => {
    if (paginaAtual + 1 < total) {
      setPaginaAtual(paginaAtual + 1);
    } else {
      setConcluido(true);
    }
  };

  // renderiza o texto do parágrafo com as palavras-chave viradas em botões
  const renderTexto = () => {
    let restante = paragrafo.texto;
    const partes: Array<{ tipo: "texto" | "chave"; conteudo: string }> = [];
    // ordena chaves da mais longa pra menor pra não quebrar substrings
    const chavesOrdenadas = [...paragrafo.chaves].sort(
      (a, b) => b.length - a.length,
    );
    // varre por ocorrência da PRIMEIRA chave encontrada por vez
    let seguranca = 0;
    while (restante.length > 0 && seguranca < 200) {
      seguranca++;
      let posEncontrada = -1;
      let chaveEncontrada = "";
      for (const chave of chavesOrdenadas) {
        const idx = restante.toLowerCase().indexOf(chave.toLowerCase());
        if (idx !== -1 && (posEncontrada === -1 || idx < posEncontrada)) {
          posEncontrada = idx;
          chaveEncontrada = chave;
        }
      }
      if (posEncontrada === -1) {
        partes.push({ tipo: "texto", conteudo: restante });
        break;
      }
      if (posEncontrada > 0) {
        partes.push({
          tipo: "texto",
          conteudo: restante.slice(0, posEncontrada),
        });
      }
      partes.push({
        tipo: "chave",
        conteudo: restante.slice(
          posEncontrada,
          posEncontrada + chaveEncontrada.length,
        ),
      });
      restante = restante.slice(posEncontrada + chaveEncontrada.length);
    }
    return partes.map((p, i) => {
      if (p.tipo === "texto") {
        return <span key={i}>{p.conteudo}</span>;
      }
      const chaveNorm = paragrafo.chaves.find(
        (c) => c.toLowerCase() === p.conteudo.toLowerCase(),
      )!;
      const ativa = marcadasDaPagina.has(chaveNorm);
      return (
        <button
          key={i}
          type="button"
          onClick={() => marcarChave(chaveNorm)}
          className={`inline-block align-baseline mx-0.5 px-1.5 py-0.5 rounded-md font-black transition ${
            ativa
              ? "bg-emerald-400 text-[#3a2410] shadow"
              : "bg-amber-300/60 text-[#3a2410] underline decoration-dotted underline-offset-4 hover:bg-amber-300"
          }`}
        >
          {p.conteudo}
          {ativa ? " ✓" : ""}
        </button>
      );
    });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">
            {aurora.nome}
          </div>
          {cena.aurora}
          <div className="text-white/50 text-[11px] mt-2">
            🔇 nesta cena, VOCÊ lê — sem voz da Aurora.
          </div>
        </div>
      </div>

      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        📖 Leia com calma e TOQUE nas palavras-chave conforme for lendo.
      </div>

      {/* Pergaminho / livro */}
      <div
        className="relative rounded-3xl p-5 shadow-2xl"
        style={{
          background:
            "radial-gradient(ellipse at top,#fdf6e3 0%,#f2e5c1 60%,#e5d3a3 100%)",
          boxShadow:
            "inset 0 0 30px rgba(120,80,20,.25), 0 20px 40px rgba(0,0,0,.4)",
        }}
      >
        <div className="text-center mb-3">
          <div className="text-[10px] uppercase tracking-widest text-[#6b4a1c]/70 font-bold">
            {cena.tituloLivro}
          </div>
          {cena.subtitulo && (
            <div className="text-[#3a2410] font-black text-sm mt-0.5">
              {cena.subtitulo}
            </div>
          )}
          <div className="mt-1 text-[10px] text-[#6b4a1c]/70">
            Página {paginaAtual + 1} de {total}
          </div>
        </div>

        <motion.div
          key={paragrafo.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#2a1a08] text-lg sm:text-xl leading-relaxed font-medium"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          {renderTexto()}
        </motion.div>

        {/* Marcador de progresso das chaves */}
        <div className="mt-4 flex items-center gap-2 justify-center flex-wrap">
          {paragrafo.chaves.map((c) => {
            const ok = marcadasDaPagina.has(c);
            return (
              <span
                key={c}
                className={`text-[10px] font-bold px-2 py-1 rounded-full border ${
                  ok
                    ? "bg-emerald-500 text-white border-emerald-600"
                    : "bg-white/50 text-[#6b4a1c] border-[#6b4a1c]/30"
                }`}
              >
                {ok ? "✓ " : "○ "}
                {c}
              </span>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <button
            onClick={() => setPaginaAtual(Math.max(0, paginaAtual - 1))}
            disabled={paginaAtual === 0}
            className="px-3 py-2 rounded-xl bg-[#3a2410]/10 border border-[#3a2410]/20 text-[#3a2410] text-xs font-bold disabled:opacity-30"
          >
            ← anterior
          </button>
          <div className="text-[10px] text-[#6b4a1c]/80">
            {todasMarcadasNaPagina
              ? "✅ tudo marcado — pode virar a página"
              : "toque nas palavras destacadas"}
          </div>
          <button
            onClick={avancar}
            disabled={!todasMarcadasNaPagina || concluido}
            className={`px-3 py-2 rounded-xl text-xs font-black transition ${
              todasMarcadasNaPagina && !concluido
                ? "bg-emerald-500 text-white shadow hover:bg-emerald-600"
                : "bg-[#3a2410]/10 text-[#3a2410]/40 cursor-not-allowed"
            }`}
          >
            {paginaAtual + 1 === total ? "li tudo ✓" : "próxima página →"}
          </button>
        </div>
      </div>

      {concluido && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-4 flex items-start gap-3"
        >
          <img src={ESQUILO_BRILHA.img} alt="" className="w-12 h-12 shrink-0" />
          <div className="text-sm leading-snug">
            <div className="text-emerald-300 text-xs font-bold mb-1">
              📖 Leitura completa!
            </div>
            {cena.falaFinal}
          </div>
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!concluido}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          concluido
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {concluido ? "Continuar" : "📖 Leia todas as páginas pra continuar"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Cena 9 — Minijogo (versão sóbria, drag-and-drop, sem visual infantil)
// ─────────────────────────────────────────────────────────────────────
function ConstrutorMarcos({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "construtorMarcos" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [rodadaIdx, setRodadaIdx] = useState(0);
  const [travada, setTravada] = useState(false);
  const [feedback, setFeedback] = useState<"acerto" | "erro" | null>(null);
  const [pecaSolta, setPecaSolta] = useState<string | null>(null);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);
  const [shakeSlot, setShakeSlot] = useState(0);

  const slotRef = useRef<HTMLDivElement>(null);

  const rodada = cena.rodadas[rodadaIdx];
  const total = cena.rodadas.length;

  const tentarSoltar = (
    pecaId: string,
    e: MouseEvent | TouchEvent | PointerEvent,
    info: { point: { x: number; y: number } },
  ) => {
    if (travada || !slotRef.current) return false;
    const r = slotRef.current.getBoundingClientRect();
    const { x, y } = getPointerXY(e, info);
    const margem = 24;
    const dentro =
      x >= r.left - margem && x <= r.right + margem &&
      y >= r.top - margem && y <= r.bottom + margem;
    if (!dentro) return false;

    setPecaSolta(pecaId);
    setTravada(true);
    if (pecaId === rodada.pecaCertaId) {
      setFeedback("acerto");
      setAcertos((n) => n + 1);
    } else {
      setFeedback("erro");
      setShakeSlot((s) => s + 1);
    }
    return true;
  };

  const proximaRodada = () => {
    if (rodadaIdx + 1 < total) {
      setRodadaIdx(rodadaIdx + 1);
      setTravada(false);
      setFeedback(null);
      setPecaSolta(null);
    } else {
      setFim(true);
    }
  };

  if (fim) {
    return (
      <div className="space-y-5">
        <div className="border border-white/20 rounded-2xl p-6 text-center space-y-3 bg-white/[0.03]">
          <div className="text-[11px] uppercase tracking-widest text-white/60">
            Minijogo — resultado
          </div>
          <div className="text-4xl font-light text-white tabular-nums">
            {acertos} / {total}
          </div>
          <div className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
            {cena.falaFinal}
          </div>
        </div>
        <button
          onClick={onProxima}
          className="w-full py-3.5 rounded-xl font-semibold text-sm bg-white text-[#0d1f55] hover:bg-white/90 transition"
        >
          Continuar
        </button>
      </div>
    );
  }

  const pecaCerta = cena.pecas.find((p) => p.id === rodada.pecaCertaId);

  return (
    <div className="space-y-4">
      {/* Aurora */}
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-14 h-14 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/[0.06] border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-white/60 text-[11px] font-semibold uppercase tracking-wider mb-1">
            {aurora.nome}
          </div>
          <div className="text-white/90">{cena.aurora}</div>
        </div>
      </div>

      {/* HUD sóbrio */}
      <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-white/50">
        <span>Rodada {rodadaIdx + 1} / {total}</span>
        <span className="tabular-nums">✓ {acertos}</span>
      </div>

      {/* Contexto (texto puro) */}
      <div className="border border-white/15 rounded-xl p-4 text-sm text-white/90 leading-relaxed">
        {rodada.contexto}
      </div>

      {/* Slot central — arraste a resposta aqui */}
      <motion.div
        ref={slotRef}
        animate={feedback === "erro" ? { x: [-6, 6, -4, 4, 0] } : {}}
        key={shakeSlot}
        transition={{ duration: 0.4 }}
        className={`rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors ${
          feedback === "acerto"
            ? "border-emerald-400/60 bg-emerald-400/5"
            : feedback === "erro"
            ? "border-rose-400/60 bg-rose-400/5"
            : "border-white/25 bg-white/[0.02]"
        }`}
      >
        {travada && pecaSolta ? (
          <div className="text-white text-sm font-medium">
            {cena.pecas.find((p) => p.id === pecaSolta)?.rotulo}
          </div>
        ) : (
          <div className="text-white/40 text-xs uppercase tracking-widest">
            Arraste a resposta até aqui
          </div>
        )}
      </motion.div>

      {/* Banco de peças arrastáveis (texto puro) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {cena.pecas.map((p) => {
          const usada = travada && pecaSolta === p.id;
          const certaDestacada =
            travada && feedback === "erro" && p.id === rodada.pecaCertaId;
          return (
            <motion.button
              key={p.id}
              drag={!travada}
              dragSnapToOrigin
              dragMomentum={false}
              whileDrag={{ scale: 1.05, zIndex: 50 }}
              onDragEnd={(e, info) => tentarSoltar(p.id, e, info)}
              disabled={travada}
              className={`text-left px-4 py-3 rounded-xl border text-sm transition-colors touch-none ${
                usada
                  ? feedback === "acerto"
                    ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-100"
                    : "border-rose-400/50 bg-rose-400/10 text-rose-100"
                  : certaDestacada
                  ? "border-emerald-400/40 bg-emerald-400/5 text-emerald-100/90"
                  : travada
                  ? "border-white/10 bg-white/[0.02] text-white/40"
                  : "border-white/20 bg-white/[0.04] text-white/90 hover:bg-white/[0.08] cursor-grab active:cursor-grabbing"
              }`}
            >
              {p.rotulo}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback */}
      {feedback && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl p-3.5 border text-sm leading-relaxed ${
            feedback === "acerto"
              ? "border-emerald-400/40 bg-emerald-400/[0.06] text-emerald-100"
              : "border-rose-400/40 bg-rose-400/[0.06] text-rose-100"
          }`}
        >
          <div className="text-[11px] uppercase tracking-widest opacity-70 mb-1">
            {feedback === "acerto" ? "Correto" : `Resposta: ${pecaCerta?.rotulo}`}
          </div>
          {feedback === "acerto" ? rodada.feedbackAcerto : rodada.feedbackErro}
        </motion.div>
      )}

      {travada && (
        <button
          onClick={proximaRodada}
          className="w-full py-3.5 rounded-xl font-semibold text-sm bg-white text-[#0d1f55] hover:bg-white/90 transition"
        >
          {rodadaIdx + 1 === total ? "Ver resultado →" : "Próxima rodada →"}
        </button>
      )}
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────────
// Cena 10 — Pizza do Município (revisão: fatias clicáveis com TTS)
// ─────────────────────────────────────────────────────────────────────
function PizzaMunicipio({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "pizzaMunicipio" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [tocadas, setTocadas] = useState<Set<string>>(new Set());
  const [ativa, setAtiva] = useState<string | null>(null);

  const fatias = cena.fatias;
  const [f1, f2] = fatias;
  // ângulo da fatia 1 (em graus). Fatia 2 é o resto.
  const anguloF1 = (f1.percentual / 100) * 360;

  const falar = (texto: string) => {
    try {
      window.speechSynthesis?.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      u.lang = "pt-BR";
      u.rate = 0.95;
      window.speechSynthesis?.speak(u);
    } catch {
      /* ignore */
    }
  };

  const tocar = (id: string) => {
    const fatia = fatias.find((x) => x.id === id);
    if (!fatia) return;
    setAtiva(id);
    setTocadas((s) => new Set(s).add(id));
    falar(fatia.descricao);
  };

  useEffect(() => {
    return () => {
      try {
        window.speechSynthesis?.cancel();
      } catch {
        /* ignore */
      }
    };
  }, []);

  const todasTocadas = tocadas.size === fatias.length;
  const fatiaAtiva = fatias.find((x) => x.id === ativa);

  // gradiente cônico: f1 do 0° até anguloF1, f2 do anguloF1 até 360°
  const conic = `conic-gradient(${f1.cor} 0deg ${anguloF1}deg, ${f2.cor} ${anguloF1}deg 360deg)`;

  return (
    <div className="space-y-5">
      {/* Aurora */}
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">
            {aurora.nome}
          </div>
          {cena.aurora}
        </div>
      </div>

      {/* Instrução */}
      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        {cena.instrucao}
      </div>

      {/* Pizza SVG-like via conic-gradient */}
      <div className="flex justify-center">
        <div className="relative">
          <motion.div
            className="w-64 h-64 sm:w-72 sm:h-72 rounded-full shadow-2xl border-4 border-white/30"
            style={{ background: conic }}
            animate={ativa ? { scale: [1, 1.04, 1] } : {}}
            transition={{ duration: 0.4 }}
          />
          {/* Botões invisíveis sobre cada fatia */}
          <div className="absolute inset-0">
            {fatias.map((f, i) => {
              // posiciona rótulo no meio de cada fatia
              const inicio = i === 0 ? 0 : anguloF1;
              const meio = inicio + (f.percentual / 100) * 360 / 2;
              const rad = ((meio - 90) * Math.PI) / 180;
              const r = 38; // % do raio
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              const tocada = tocadas.has(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() => tocar(f.id)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5 rounded-2xl px-2 py-1.5 backdrop-blur-sm transition ${
                    ativa === f.id
                      ? "bg-white/90 text-[#0d1f55] scale-110 shadow-xl"
                      : "bg-black/50 text-white hover:bg-black/70 active:scale-95"
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="text-3xl leading-none">{f.emoji}</div>
                  <div className="text-[10px] font-black uppercase tracking-wide">
                    {f.percentual}%
                  </div>
                  {tocada && (
                    <div className="text-[9px] font-bold text-emerald-400">✓</div>
                  )}
                </button>
              );
            })}
          </div>
          {/* Selo central */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0d1f55] border-4 border-white/40 grid place-items-center text-2xl sm:text-3xl shadow-inner">
              🏘️
            </div>
          </div>
        </div>
      </div>

      {/* Legenda */}
      <div className="grid grid-cols-2 gap-2">
        {fatias.map((f) => (
          <button
            key={`leg-${f.id}`}
            onClick={() => tocar(f.id)}
            className={`text-left rounded-2xl border p-3 transition ${
              ativa === f.id
                ? "bg-white/15 border-white/40"
                : "bg-white/5 border-white/15 hover:bg-white/10"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ background: f.cor }}
              />
              <span className="font-black text-sm">{f.emoji} {f.rotulo}</span>
            </div>
            <div className="text-[11px] uppercase tracking-widest text-white/60 mt-1">
              {f.percentual}% do município
            </div>
          </button>
        ))}
      </div>

      {/* Card da fatia ativa */}
      {fatiaAtiva && (
        <motion.div
          key={fatiaAtiva.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-white/20 bg-white/10 p-4 space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{fatiaAtiva.emoji}</span>
              <span className="font-black">{fatiaAtiva.rotulo}</span>
            </div>
            <button
              onClick={() => falar(fatiaAtiva.descricao)}
              className="text-xs bg-white/10 border border-white/20 px-2 py-1 rounded-lg hover:bg-white/20"
            >
              🔊 ouvir
            </button>
          </div>
          <div className="text-sm text-white/90 leading-snug">
            {fatiaAtiva.descricao}
          </div>
          <ul className="grid grid-cols-1 gap-1.5">
            {fatiaAtiva.exemplos.map((ex, i) => (
              <li
                key={i}
                className="text-xs bg-black/30 rounded-lg px-2 py-1.5 border border-white/10"
              >
                • {ex}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Progresso das fatias */}
      <div className="flex items-center justify-center gap-2 text-xs text-white/60">
        {fatias.map((f) => (
          <span
            key={`dot-${f.id}`}
            className={`px-2 py-1 rounded-full border ${
              tocadas.has(f.id)
                ? "bg-emerald-500/25 border-emerald-400/50 text-emerald-100"
                : "bg-white/5 border-white/15"
            }`}
          >
            {tocadas.has(f.id) ? "✓" : "•"} {f.rotulo}
          </span>
        ))}
      </div>

      {todasTocadas && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/15 border border-emerald-400/40 rounded-2xl p-3 text-sm text-emerald-100"
        >
          <span className="font-bold">🍕 </span>
          {cena.falaFinal}
        </motion.div>
      )}

      <button
        onClick={onProxima}
        disabled={!todasTocadas}
        className={`w-full py-4 rounded-2xl font-black text-lg transition ${
          todasTocadas
            ? "bg-gradient-to-r from-emerald-400 to-amber-300 text-[#0d1f55] shadow-xl hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed border border-white/10"
        }`}
      >
        {todasTocadas ? "Continuar" : "Toque nas 2 fatias pra liberar"}
      </button>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────────
// Cena 11 — Selo do Atlas (avaliação final + insígnia colecionável)
// ─────────────────────────────────────────────────────────────────────
function SeloAtlas({
  cena,
  onProxima,
  ultima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "seloAtlas" }>;
  onProxima: () => void;
  ultima?: boolean;
}) {
  const aurora = PERSONAGENS.aurora;
  const falar = (texto: string) => {
    try {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      u.lang = 'pt-BR';
      u.rate = 0.95;
      u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    } catch { /* ignore */ }
  };

  const [idx, setIdx] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<null | { ok: boolean; texto: string }>(null);
  const [conquistado, setConquistado] = useState(false);
  const [acertos, setAcertos] = useState(0);

  const total = cena.perguntas.length;
  const atual = cena.perguntas[idx];

  useEffect(() => {
    if (!atual) return;
    falar(atual.pergunta);
  }, [atual?.id]);

  useEffect(() => {
    if (conquistado) falar(cena.falaFinal);
  }, [conquistado]);

  function escolher(opcaoId: string) {
    if (respostas[atual.id]) return;
    const opc = atual.opcoes.find((o) => o.id === opcaoId);
    const ok = !!opc?.correta;
    setRespostas((r) => ({ ...r, [atual.id]: opcaoId }));
    if (ok) setAcertos((a) => a + 1);
    const texto = ok ? atual.feedbackAcerto : atual.feedbackErro;
    setFeedback({ ok, texto });
    falar(texto);
    setTimeout(() => {
      setFeedback(null);
      if (idx + 1 < total) {
        setIdx(idx + 1);
      } else {
        setConquistado(true);
      }
    }, 2200);
  }

  if (conquistado) {
    return (
      <div className="space-y-5 text-center py-4">
        <div className="text-xs uppercase tracking-[0.25em] text-amber-300">
          🏅 Selo conquistado
        </div>

        <motion.div
          initial={{ scale: 0.4, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          className="mx-auto relative w-56 h-56"
        >
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${cena.selo.cor} shadow-[0_0_60px_rgba(255,200,80,0.55)] blur-[2px]`}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-4 border-dashed border-white/50"
          />
          <div className="absolute inset-6 rounded-full bg-[#0d1f55] flex flex-col items-center justify-center border-4 border-white/20">
            <div className="text-6xl">{cena.selo.emoji}</div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-amber-200">
              Atlas Municipal
            </div>
          </div>
        </motion.div>

        <div>
          <h2 className="text-2xl font-black text-amber-100">{cena.selo.nome}</h2>
          <p className="text-sm text-white/70">{cena.selo.subtitulo}</p>
          <div className="mt-2 text-xs text-emerald-300 font-bold">
            Acertos: {acertos}/{total}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex gap-3 items-start text-left">
          <img src={aurora.img} alt="" className="w-12 h-12" />
          <p className="text-sm text-white/90 leading-relaxed">{cena.falaFinal}</p>
        </div>

        <button
          onClick={onProxima}
          className={`w-full py-4 rounded-2xl font-black text-lg bg-gradient-to-r ${cena.selo.cor} text-[#0d1f55] shadow-xl hover:scale-[1.01] transition`}
        >
          {ultima ? "✅ Concluir aula e guardar no Atlas" : "Continuar"}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <img src={aurora.img} alt="" className="w-14 h-14" />
        <div className="flex-1">
          <div className="text-xs uppercase tracking-widest text-amber-300">
            Selo do Atlas — Prova final
          </div>
          <div className="text-sm text-white/80">{cena.instrucao}</div>
        </div>
      </div>

      {/* progresso */}
      <div className="flex gap-1.5">
        {cena.perguntas.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition ${
              i < idx
                ? "bg-emerald-400"
                : i === idx
                ? "bg-amber-300"
                : "bg-white/15"
            }`}
          />
        ))}
      </div>

      <div className="bg-white/5 border border-white/15 rounded-2xl p-5 space-y-4">
        <div className="text-xs text-amber-200 font-bold">
          Pergunta {idx + 1}/{total}
        </div>
        <button
          onClick={() => falar(atual.pergunta)}
          className="w-full text-left text-lg font-bold leading-snug hover:text-amber-200 transition"
        >
          🔊 {atual.pergunta}
        </button>

        <div className="grid gap-2">
          {atual.opcoes.map((o) => {
            const escolhida = respostas[atual.id] === o.id;
            const revelada = !!respostas[atual.id];
            const estaCerta = !!o.correta;
            return (
              <button
                key={o.id}
                onClick={() => escolher(o.id)}
                disabled={revelada}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 font-semibold text-sm transition ${
                  revelada
                    ? estaCerta
                      ? "bg-emerald-500/25 border-emerald-400 text-emerald-100"
                      : escolhida
                      ? "bg-rose-500/25 border-rose-400 text-rose-100"
                      : "bg-white/5 border-white/10 text-white/50"
                    : "bg-white/10 border-white/20 hover:bg-white/15 hover:border-amber-300"
                }`}
              >
                {revelada && estaCerta ? "✅ " : revelada && escolhida ? "❌ " : ""}
                {o.texto}
              </button>
            );
          })}
        </div>

        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-xl p-3 text-sm border ${
              feedback.ok
                ? "bg-emerald-500/15 border-emerald-400/40 text-emerald-100"
                : "bg-rose-500/15 border-rose-400/40 text-rose-100"
            }`}
          >
            {feedback.ok ? "🎯 " : "💡 "}
            {feedback.texto}
          </motion.div>
        )}
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────────
// Placeholder — cenas em construção
// ─────────────────────────────────────────────────────────────────────



function CenaPlaceholder({
  titulo,
  descricao,
  onProxima,
  ultima,
}: {
  titulo: string;
  descricao: string;
  onProxima: () => void;
  ultima?: boolean;
}) {
  return (
    <div className="text-center py-12 space-y-5 bg-white/5 border border-white/10 rounded-2xl">
      <div className="text-5xl">🚧</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-amber-300">
          Cena em construção
        </div>
        <h2 className="text-xl font-black mt-1">{titulo}</h2>
        <p className="text-sm text-white/70 max-w-md mx-auto mt-2 px-4">{descricao}</p>
      </div>
      <button
        onClick={onProxima}
        className="mx-auto block px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-sm font-semibold hover:bg-white/15"
      >
        {ultima ? "✅ Concluir aula" : "Continuar"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// MapaBrasilInterativo — SVG real dos 27 UFs, cada estado clicável.
// Reusável do 3º ao 9º ano.
// ─────────────────────────────────────────────────────────────────────

const REGIAO_COR: Record<EstadoBr["regiao"], string> = {
  norte: "#059669",         // emerald-600
  nordeste: "#f59e0b",      // amber-500
  "centro-oeste": "#ea580c",// orange-600
  sudeste: "#dc2626",       // red-600
  sul: "#0284c7",           // sky-600
};

const REGIAO_ROTULO: Record<EstadoBr["regiao"], string> = {
  norte: "Norte",
  nordeste: "Nordeste",
  "centro-oeste": "Centro-Oeste",
  sudeste: "Sudeste",
  sul: "Sul",
};

function MapaBrasilInterativo({
  cena,
  onProxima,
}: {
  cena: Extract<CenaGeoV1, { tipo: "mapaBrasilInterativo" }>;
  onProxima: () => void;
}) {
  const aurora = PERSONAGENS.aurora;
  const [visitadas, setVisitadas] = useState<Record<string, boolean>>({});
  const [ativa, setAtiva] = useState<string | null>(null);

  const estadoAtivo = ativa ? BR_ESTADOS.find((e) => e.sigla === ativa) : null;

  // Missão: determina quais estados "contam" pra liberar o botão.
  const missao = cena.missao ?? { tipo: "todos" as const };
  const alvoSiglas =
    missao.tipo === "todos"
      ? BR_ESTADOS.map((e) => e.sigla)
      : missao.tipo === "selecionar"
      ? missao.siglas
      : missao.grupos.flatMap((g) => g.siglas);

  const acertosCount = alvoSiglas.filter((s) => visitadas[s]).length;
  const missaoCompleta = acertosCount === alvoSiglas.length;

  // Cor de cada UF segundo a missão
  const corDoEstado = (uf: EstadoBr): string => {
    if (missao.tipo === "grupos") {
      for (const g of missao.grupos) {
        if (g.siglas.includes(uf.sigla)) {
          // usa a cor sólida do gradient (extrai o "to-XXX")
          return REGIAO_COR[uf.regiao];
        }
      }
      return "#334155"; // slate-700 pros que não estão em nenhum grupo
    }
    if (missao.tipo === "selecionar") {
      return missao.siglas.includes(uf.sigla) ? REGIAO_COR[uf.regiao] : "#475569";
    }
    return REGIAO_COR[uf.regiao];
  };

  const grupoDoEstado = (uf: EstadoBr) => {
    if (missao.tipo !== "grupos") return null;
    return missao.grupos.find((g) => g.siglas.includes(uf.sigla)) ?? null;
  };

  const falar = (texto: string) => {
    try {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      u.lang = "pt-BR";
      u.rate = 0.95;
      u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    return () => {
      try {
        window.speechSynthesis?.cancel();
      } catch {
        /* ignore */
      }
    };
  }, []);

  const tocarEstado = (uf: EstadoBr) => {
    setAtiva(uf.sigla);
    setVisitadas((prev) => ({ ...prev, [uf.sigla]: true }));
    const grupo = grupoDoEstado(uf);
    const extra = grupo ? ` Faz parte do grupo: ${grupo.rotulo}.` : "";
    falar(
      `${uf.nome}. Sigla ${uf.sigla.split("").join(" ")}. Capital ${uf.capital}. Região ${REGIAO_ROTULO[uf.regiao]}.${extra}`,
    );
  };

  return (
    <div className="space-y-5">
      {/* Aurora */}
      <div className="flex items-start gap-3">
        <img
          src={aurora.img}
          alt={aurora.nome}
          className="w-16 h-16 rounded-full bg-white/10 p-1 shrink-0"
        />
        <div className="bg-white/10 border border-white/15 rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-snug">
          <div className="text-emerald-300 text-xs font-bold mb-1">{aurora.nome}</div>
          {cena.aurora}
        </div>
      </div>

      {/* Instrução */}
      <div className="bg-amber-100/95 text-[#3a2410] rounded-2xl p-3 text-sm font-semibold text-center shadow-lg">
        🗺️ {cena.instrucao}
      </div>

      {/* Legenda de grupos (quando tipo=grupos) */}
      {missao.tipo === "grupos" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {missao.grupos.map((g) => {
            const done = g.siglas.every((s) => visitadas[s]);
            return (
              <div
                key={g.id}
                className={`rounded-2xl p-3 border-2 bg-gradient-to-br ${g.cor} ${
                  done ? "border-white ring-2 ring-white/40" : "border-white/20"
                }`}
              >
                <div className="flex items-center gap-2 text-white">
                  <div className="text-2xl">{g.emoji}</div>
                  <div className="flex-1">
                    <div className="font-black text-sm leading-tight">{g.rotulo}</div>
                    <div className="text-white/85 text-[11px]">
                      {g.siglas.filter((s) => visitadas[s]).length}/{g.siglas.length} tocados
                    </div>
                  </div>
                  {done && <div className="text-lg">✅</div>}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Mapa SVG interativo */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-xl bg-slate-900">
        <svg
          viewBox={BR_VIEWBOX}
          className="w-full h-auto select-none"
          style={{ aspectRatio: "1 / 1", touchAction: "manipulation" }}
        >
          {BR_ESTADOS.map((uf) => {
            const isAtiva = ativa === uf.sigla;
            const isVisitada = !!visitadas[uf.sigla];
            const corBase = corDoEstado(uf);
            return (
              <g key={uf.sigla}>
                <path
                  d={uf.d}
                  fill={corBase}
                  fillOpacity={isVisitada ? 0.95 : 0.55}
                  stroke={isAtiva ? "#ffffff" : "rgba(255,255,255,0.35)"}
                  strokeWidth={isAtiva ? 0.35 : 0.12}
                  strokeLinejoin="round"
                  className="cursor-pointer transition-all duration-200 hover:brightness-125"
                  onClick={() => tocarEstado(uf)}
                  style={{
                    filter: isAtiva
                      ? "drop-shadow(0 0 3px rgba(255,255,255,0.9))"
                      : undefined,
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Contador flutuante */}
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur">
          {acertosCount}/{alvoSiglas.length}
        </div>
      </div>

      {/* Popup do estado tocado */}
      {estadoAtivo && (
        <motion.div
          key={estadoAtivo.sigla}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-4 border-2 border-white/25 shadow-2xl text-white"
          style={{ background: `linear-gradient(135deg, ${REGIAO_COR[estadoAtivo.regiao]}, rgba(0,0,0,0.5))` }}
        >
          <div className="flex items-start gap-3">
            <div className="bg-white/20 rounded-2xl px-3 py-2 text-center min-w-[64px] backdrop-blur">
              <div className="text-[10px] uppercase opacity-80 font-bold">Sigla</div>
              <div className="text-2xl font-black leading-none">{estadoAtivo.sigla}</div>
            </div>
            <div className="flex-1">
              <div className="text-xl font-black leading-tight">{estadoAtivo.nome}</div>
              <div className="text-sm opacity-95 mt-1">
                🏙️ Capital: <span className="font-bold">{estadoAtivo.capital}</span>
              </div>
              <div className="text-xs opacity-80 mt-1">
                📍 Região {REGIAO_ROTULO[estadoAtivo.regiao]}
              </div>
            </div>
            <button
              onClick={() => falar(`${estadoAtivo.nome}. Capital ${estadoAtivo.capital}.`)}
              className="bg-white/20 rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/30"
              aria-label="Ouvir de novo"
            >
              🔊
            </button>
          </div>
        </motion.div>
      )}

      {/* Missão pergunta (quando selecionar) */}
      {missao.tipo === "selecionar" && (
        <div className="bg-white/5 border border-white/15 rounded-2xl p-3 text-sm">
          <div className="text-emerald-300 font-bold text-xs mb-1">🎯 Missão</div>
          {missao.pergunta}
        </div>
      )}

      {/* Botão próxima quando missão completa */}
      {missaoCompleta && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <div className="bg-emerald-500/20 border-2 border-emerald-400 rounded-2xl p-4 text-center">
            <div className="text-2xl mb-1">🎉</div>
            <div className="text-emerald-200 font-bold text-sm">{cena.falaFinal}</div>
          </div>
          <button
            onClick={onProxima}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-sky-500 text-white font-black shadow-xl hover:brightness-110"
          >
            Continuar ↓
          </button>
        </motion.div>
      )}
    </div>
  );
}

