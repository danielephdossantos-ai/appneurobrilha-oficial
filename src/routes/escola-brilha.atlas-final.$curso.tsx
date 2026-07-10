import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { getCursoAny, listAulasFlat } from "@/escola-brilha/curso-v4/registry";
import { useAppState } from "@/core/store";
import { DiplomaBrilha } from "@/components/DiplomaBrilha";
import { PERSONAGENS } from "@/escola-brilha/mascotes-personagens";
import { AlbumRecordacoes } from "@/components/AlbumRecordacoes";



/**
 * Grande Projeto Final — "Meu Atlas do Município"
 *
 * ÚNICA exceção ao padrão visual único do Escola Brilha.
 * Ver: .lovable/mem/constraints/atlas-final-excecao.md
 *
 * Bloqueado até 100% das aulas do curso estarem concluídas
 * (localStorage `eb.v4.progresso.<curso>`).
 */
export const Route = createFileRoute("/escola-brilha/atlas-final/$curso")({
  head: ({ params }) => ({
    meta: [
      { title: `Meu Atlas — ${params.curso}` },
      { name: "description", content: "Livro Mágico do Explorador — encerramento do curso." },
    ],
  }),
  component: AtlasFinal,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-white bg-[#1a0d3d]">
      Atlas não encontrado.
    </div>
  ),
});

const CHAVE_PROGRESSO = (slug: string) => `eb.v4.progresso.${slug}`;

type Pagina = {
  id: string;
  emoji: string;
  aba: string;
  titulo: string;
  frase: string;
  bullets: string[];
  medalha: string;
  cor: string;
};

/**
 * Versão resumida ilustrada — cada página = 1 unidade.
 * Fecha automaticamente com as 5 unidades atuais de geografia-2ano.
 * Quando novas unidades entrarem no curso, basta acrescentar aqui.
 */
const PAGINAS_POR_CURSO: Record<string, Pagina[]> = {
  "geografia-2ano": [
    {
      id: "u1",
      emoji: "🏠",
      aba: "Minha Moradia",
      titulo: "Página 1 — Minha Moradia",
      frase: "Cada família mora de um jeito, no lugar que combina com ela.",
      bullets: [
        "Casa da cidade, do campo, do rio, da aldeia.",
        "Clima e materiais mudam a moradia.",
        "Todo lugar tem seus cuidados.",
      ],
      medalha: "🏅 Investigador de Moradias",
      cor: "#f97316",
    },
    {
      id: "u2",
      emoji: "🏙️",
      aba: "Meu Município",
      titulo: "Página 2 — Meu Município",
      frase: "Cidade e campo são partes do mesmo município.",
      bullets: [
        "Zona URBANA: prédios, ruas, serviços.",
        "Zona RURAL: sítios, plantação, animais.",
        "Escola, posto, praça e mercado servem todo mundo.",
      ],
      medalha: "🏅 Explorador do Município",
      cor: "#22c55e",
    },
    {
      id: "u3",
      emoji: "🚜",
      aba: "Campo e Cidade",
      titulo: "Página 3 — Campo e Cidade juntos",
      frase: "O campo alimenta a cidade. A cidade ajuda o campo.",
      bullets: [
        "Do sítio → caminhão → mercado → mesa.",
        "Se o campo parar, a cidade fica sem comida.",
        "A cidade manda máquinas, remédios e serviços.",
      ],
      medalha: "🏅 Parceiro do Campo e da Cidade",
      cor: "#eab308",
    },
    {
      id: "u4",
      emoji: "🚌",
      aba: "Conexões e Rotas",
      titulo: "Página 4 — Caminhos e Comunicação",
      frase: "Transporte e comunicação ligam pessoas e lugares.",
      bullets: [
        "Cada trajeto pede um transporte certo.",
        "Trânsito seguro: faixa, semáforo, cinto, capacete.",
        "Comunicação evoluiu: carta → telefone → celular.",
      ],
      medalha: "🏅 Mestre das Rotas e Conexões",
      cor: "#3b82f6",
    },
    {
      id: "u5",
      emoji: "🌳",
      aba: "Linha do Tempo",
      titulo: "Página 5 — As Paisagens se Transformam",
      frase: "Podemos mudar a paisagem, mas sempre cuidando.",
      bullets: [
        "Natureza muda (chuva, vento, sol).",
        "Pessoas mudam (construir, plantar, asfaltar).",
        "Preservar = cuidar pra continuar existindo.",
      ],
      medalha: "🏅 Guardião das Paisagens",
      cor: "#10b981",
    },
  ],
};

function falar(texto: string) {
  if (typeof window === "undefined") return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = "pt-BR";
    u.rate = 0.95;
    u.pitch = 1.1;
    window.speechSynthesis.speak(u);
  } catch {
    /* ignore */
  }
}

function dispararConfetes() {
  const durar = 2500;
  const fim = Date.now() + durar;
  const cores = ["#fbbf24", "#f97316", "#22c55e", "#3b82f6", "#a855f7"];
  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: cores,
    });
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: cores,
    });
    if (Date.now() < fim) requestAnimationFrame(frame);
  })();
}

function AtlasFinal() {
  const { curso: cursoSlug } = Route.useParams();
  const navigate = useNavigate();
  const curso = getCursoAny(cursoSlug);
  const aulas = listAulasFlat(cursoSlug);
  const paginas = PAGINAS_POR_CURSO[cursoSlug] ?? [];
  const { activeChild } = useAppState();

  const [concluidas, setConcluidas] = useState<Set<string>>(new Set());
  const [pagIdx, setPagIdx] = useState(0);
  const [diplomaAberto, setDiplomaAberto] = useState(false);
  const [modoLivre, setModoLivre] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search);
    setModoLivre(p.has("livre") || p.has("preview"));
    try {
      const raw = localStorage.getItem(CHAVE_PROGRESSO(cursoSlug));
      if (raw) setConcluidas(new Set(JSON.parse(raw)));
    } catch {
      /* ignore */
    }
  }, [cursoSlug]);

  const totalAulas = aulas.length;
  const percent = totalAulas === 0 ? 0 : Math.round((concluidas.size / totalAulas) * 100);
  const destravado = modoLivre || (totalAulas > 0 && concluidas.size >= totalAulas);
  const nome = activeChild?.nome ?? "Explorador(a)";

  // Fund 2 (6º–9º ano): só diploma, sem livro mágico e sem álbum de recordações.
  const serieFund2 = /-([6789])ano(?:\b|-|_|$)/i.test(cursoSlug);

  const pagina = paginas[pagIdx];

  const abrirDiploma = () => {
    setDiplomaAberto(true);
    dispararConfetes();
    falar(
      `Parabéns, ${nome}! Você conquistou o diploma de Grande Explorador do Município!`,
    );
  };

  const narracaoIntro = useMemo(
    () =>
      `Incrível, ${nome}! Você decifrou todos os mistérios, restaurou o Globo das Descobertas e montou o seu próprio Atlas do Município. Vamos folhear suas descobertas?`,
    [nome],
  );

  if (!curso) {
    return (
      <div className="min-h-screen grid place-items-center text-white bg-[#1a0d3d]">
        Curso não encontrado.
      </div>
    );
  }

  if (!destravado) {
    return (
      <div className="min-h-screen text-white bg-gradient-to-b from-[#1a0d3d] to-[#0a1642] px-4 py-12">
        <div className="max-w-lg mx-auto text-center space-y-6">
          <div className="text-7xl">🔒</div>
          <h1 className="text-3xl font-black">Atlas ainda trancado</h1>
          <p className="text-white/80">
            Termine as {totalAulas} aulas do curso <b>{curso.titulo}</b> pra
            {serieFund2 ? " liberar seu Diploma." : " destravar seu Livro Mágico do Explorador."}
          </p>
          <div className="bg-white/10 rounded-full h-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-300 to-amber-500 transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="text-sm text-white/70">
            {concluidas.size} de {totalAulas} aulas ({percent}%)
          </div>
          <Link
            to="/escola-brilha/curso/$slug"
            params={{ slug: cursoSlug }}
            className="inline-block bg-amber-400 text-[#1a0d3d] font-bold px-6 py-3 rounded-full"
          >
            Voltar pra trilha
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white bg-[radial-gradient(ellipse_at_top,#3b1b7a_0%,#1a0d3d_45%,#0a1642_100%)] px-4 pb-16">
      {/* HEADER — Globo + narração */}
      <header className="max-w-5xl mx-auto pt-6 flex items-center justify-between">
        <Link
          to="/escola-brilha/curso/$slug"
          params={{ slug: cursoSlug }}
          className="text-sm text-white/70 hover:text-white"
        >
          ← Voltar
        </Link>
        <div className="text-xs uppercase tracking-widest text-amber-300">
          Grande Projeto Final
        </div>
      </header>

      <section className="max-w-5xl mx-auto text-center mt-4 space-y-4">
        <motion.div
          className="text-7xl inline-block"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          aria-hidden
        >
          🌍
        </motion.div>
        <motion.div
          className="absolute pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
          Meu Atlas do Município
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Bem-vindo(a), <b>{nome}</b>! Este é o seu Livro Mágico do Explorador.
          Clique nas abas ao lado pra folhear as suas descobertas.
        </p>
        <button
          onClick={() => falar(narracaoIntro)}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full text-sm"
        >
          <img
            src={PERSONAGENS.aurora.img}
            alt="Aurora"
            className="h-6 w-6 object-contain"
          />
          🔊 Ouvir Aurora e Brilha
        </button>
      </section>

      {/* LIVRO */}
      <section className="max-w-5xl mx-auto mt-10 grid md:grid-cols-[160px_1fr] gap-4">
        {/* Abas */}
        <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
          {paginas.map((p, i) => {
            const ativa = i === pagIdx;
            return (
              <button
                key={p.id}
                onClick={() => setPagIdx(i)}
                className={`text-left px-3 py-3 rounded-xl border transition min-w-[130px] ${
                  ativa
                    ? "bg-white text-[#1a0d3d] border-white font-bold shadow-xl"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
                style={ativa ? { boxShadow: `0 8px 24px ${p.cor}55` } : undefined}
              >
                <div className="text-2xl">{p.emoji}</div>
                <div className="text-xs mt-1 leading-tight">{p.aba}</div>
              </button>
            );
          })}
        </nav>

        {/* Livro aberto */}
        <div
          className="relative bg-gradient-to-br from-[#3b2a12] to-[#1a1108] rounded-2xl p-3 md:p-5 shadow-2xl border-4 border-amber-700/60"
          style={{ perspective: 1600 }}
        >
          <AnimatePresence mode="wait">
            {pagina && (
              <motion.article
                key={pagina.id}
                initial={{ rotateY: -75, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 75, opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
                className="bg-[#fdf6e3] text-[#1a0d3d] rounded-xl min-h-[360px] p-6 md:p-8 shadow-inner"
                style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div
                      className="inline-block text-xs uppercase tracking-widest px-2 py-1 rounded-full text-white"
                      style={{ background: pagina.cor }}
                    >
                      Unidade {pagIdx + 1}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black mt-2">
                      {pagina.titulo}
                    </h2>
                  </div>
                  <div className="text-6xl md:text-7xl">{pagina.emoji}</div>
                </div>

                <p className="text-lg md:text-xl italic mt-4">
                  "{pagina.frase}"
                </p>

                <ul className="mt-6 space-y-2">
                  {pagina.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span style={{ color: pagina.cor }}>◆</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-6 inline-block font-bold px-4 py-2 rounded-full text-white text-sm shadow"
                  style={{ background: pagina.cor }}
                >
                  {pagina.medalha}
                </div>

                <div className="mt-6 flex items-center justify-between text-sm">
                  <button
                    onClick={() =>
                      falar(`${pagina.titulo}. ${pagina.frase} ${pagina.bullets.join(". ")}`)
                    }
                    className="text-[#1a0d3d]/70 hover:text-[#1a0d3d] underline"
                  >
                    🔊 Ler esta página
                  </button>
                  <div className="text-[#1a0d3d]/50">
                    {pagIdx + 1} / {paginas.length}
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>

          <div className="flex justify-between mt-3">
            <button
              onClick={() => setPagIdx((i) => Math.max(0, i - 1))}
              disabled={pagIdx === 0}
              className="text-sm px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
            >
              ← Anterior
            </button>
            <button
              onClick={() => setPagIdx((i) => Math.min(paginas.length - 1, i + 1))}
              disabled={pagIdx === paginas.length - 1}
              className="text-sm px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
            >
              Próxima →
            </button>
          </div>
        </div>
      </section>

      {/* MURAL DE MEDALHAS */}
      <section className="max-w-5xl mx-auto mt-12">
        <h3 className="text-xl font-bold text-center mb-4">
          🏅 Meu Painel de Conquistas
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {paginas.map((p) => (
            <motion.button
              key={p.id}
              whileHover={{ rotateY: 360, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6 }}
              onClick={() => falar(p.medalha)}
              className="rounded-2xl p-4 text-center bg-gradient-to-br from-amber-200 to-amber-400 text-[#1a0d3d] shadow-lg border-2 border-amber-500"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="text-4xl">{p.emoji}</div>
              <div className="text-xs font-black mt-2 leading-tight">
                {p.medalha.replace("🏅 ", "")}
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ÁLBUM DE RECORDAÇÕES — fotos das Missões em Família do curso */}
      <AlbumRecordacoes
        cursoSlug={cursoSlug}
        tituloPorAula={Object.fromEntries(aulas.map((a) => [a.slug, a.titulo]))}
      />


      {/* CERTIFICADO */}
      <section className="max-w-5xl mx-auto mt-12 text-center">
        <motion.button
          onClick={abrirDiploma}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-[#1a0d3d] font-black text-lg px-8 py-4 rounded-full shadow-2xl"
        >
          🎓 Gerar Meu Diploma de Grande Explorador
        </motion.button>
      </section>

      {/* MODAL DIPLOMA — componente padrão do app */}
      <AnimatePresence>
        {diplomaAberto && (
          <DiplomaBrilha
            aluno={nome}
            titulo="Grande Explorador do Município"
            curso={curso.titulo}
            descricao={`Por concluir com sucesso o curso ${curso.titulo}, desvendando todos os mistérios do município e conquistando as ${paginas.length} medalhas do Atlas.`}
            mascote={PERSONAGENS.aurora}
            numeroColecao={1}
            totalColecao={30}
            onFechar={() => setDiplomaAberto(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
