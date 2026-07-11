import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { AulaHistoria } from "../types";
import { Lupa } from "./Lupa";
import { RelogioDoTempo } from "./RelogioDoTempo";
import { contarEngrenagens, salvarItemMuseu } from "../museu-service";

/**
 * PlayerHistoriaSPEB — visual alinhado ao PlayerGeoV1 (Geografia 5º ano).
 * Fundo navy escuro, cards translúcidos, cabeçalho sticky com barra de
 * progresso, navegação por SCROLL (todos os 13 blocos empilhados) +
 * botões "Continuar →" que fazem smooth-scroll pra próxima seção.
 * Mantém a Lupa do Historiador, o Relógio do Tempo e o Museu Digital
 * embutidos dentro das cenas.
 */

type Bloco =
  | "01_missao"
  | "02_narrativa"
  | "03_observacao_fonte"
  | "04_investigacao"
  | "05_ensino_explicito"
  | "06_eu_faco"
  | "07_nos_fazemos"
  | "08_voce_faz"
  | "09_aplicacao_cotidiano"
  | "10_minijogo"
  | "11_quiz"
  | "12_missao_familia"
  | "13_portfolio_museu"
  | "recompensa";

const ORDEM: Array<{ chave: Bloco; rotulo: string }> = [
  { chave: "01_missao", rotulo: "🎯 Missão" },
  { chave: "02_narrativa", rotulo: "🎭 Narrativa" },
  { chave: "03_observacao_fonte", rotulo: "🔍 Lupa do Historiador" },
  { chave: "04_investigacao", rotulo: "🕵️ Investigação" },
  { chave: "05_ensino_explicito", rotulo: "📚 Ensino" },
  { chave: "06_eu_faco", rotulo: "👀 Eu Faço" },
  { chave: "07_nos_fazemos", rotulo: "🤝 Nós Fazemos" },
  { chave: "08_voce_faz", rotulo: "✍️ Você Faz" },
  { chave: "09_aplicacao_cotidiano", rotulo: "🏠 No Dia a Dia" },
  { chave: "10_minijogo", rotulo: "🎮 Minijogo" },
  { chave: "11_quiz", rotulo: "🧠 Quiz" },
  { chave: "12_missao_familia", rotulo: "👨‍👩‍👧 Missão em Família" },
  { chave: "13_portfolio_museu", rotulo: "🏛️ Museu Digital" },
  { chave: "recompensa", rotulo: "🎉 Recompensa" },
];

export function PlayerHistoriaSPEB({ aula }: { aula: AulaHistoria }) {
  const t = aula.trilha;
  const total = ORDEM.length;
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);
  const [ativo, setAtivo] = useState(0);
  const percent = Math.round(((ativo + 1) / total) * 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0f172a] via-[#0a2540] to-[#0d1f55]">
      <header className="sticky top-0 z-20 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/escola-brilha/historia/$curso"
            params={{ curso: aula.curso }}
            className="text-xs text-white/70 hover:text-white shrink-0"
          >
            ← Sair
          </Link>
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
          <span>{ORDEM[ativo].rotulo}</span>
          <span className="text-white/40 truncate ml-2">{aula.titulo_unidade}</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-10">
        {ORDEM.map((o, i) => (
          <section
            key={o.chave}
            data-cena-idx={i}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className="scroll-mt-28"
          >
            <div className="text-[11px] uppercase tracking-[0.2em] mb-3 flex items-center gap-2 text-amber-300/80">
              <span className="w-6 h-6 rounded-full grid place-items-center text-[10px] font-black bg-amber-300/20 border border-amber-300/40 text-amber-200">
                {i + 1}
              </span>
              {o.rotulo}
            </div>

            <BlocoRenderer
              bloco={o.chave}
              aula={aula}
              onProxima={() => irPara(Math.min(i + 1, total - 1))}
            />
          </section>
        ))}
        <div className="h-24" />
      </main>
      {/* eslint-disable-next-line */}
      {void t}
    </div>
  );
}

/* ==================== RENDER DE BLOCO ==================== */

function BlocoRenderer({
  bloco,
  aula,
  onProxima,
}: {
  bloco: Bloco;
  aula: AulaHistoria;
  onProxima: () => void;
}) {
  const t = aula.trilha;
  switch (bloco) {
    case "01_missao":
      return (
        <Cartao titulo={t["01_missao"].titulo} avatar="Aurora">
          <p className="mb-4 text-lg">{t["01_missao"].descricao}</p>
          <div className="rounded-lg border border-amber-300/30 bg-amber-300/5 p-4">
            <p className="font-bold text-amber-200">Aurora sussurra:</p>
            <p className="italic text-white/80">"{aula.meta_narrativa.dialogo_aurora}"</p>
          </div>
          <BotaoContinuar onClick={onProxima} />
        </Cartao>
      );

    case "02_narrativa":
      return (
        <Cartao titulo="Narrativa" avatar={t["02_narrativa"].personagem}>
          <blockquote className="border-l-4 border-amber-300 pl-4 text-lg italic text-white/90">
            "{t["02_narrativa"].texto}"
          </blockquote>
          <p className="mt-4 text-sm text-white/60">— {t["02_narrativa"].personagem}</p>
          <BotaoContinuar onClick={onProxima} />
        </Cartao>
      );

    case "03_observacao_fonte":
      return (
        <Cartao titulo={t["03_observacao_fonte"].tipo_fonte} avatar="Aurora">
          <p className="mb-4 text-white/85">{t["03_observacao_fonte"].instrucao_lupa}</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="mb-2 inline-block rounded-full bg-amber-500/20 border border-amber-300/40 px-3 py-1 text-xs font-bold text-amber-200">
                PASSADO
              </div>
              <Lupa
                src={t["03_observacao_fonte"].imagem_passado}
                alt="Fonte do passado"
                legenda={t["03_observacao_fonte"].detalhe_passado}
              />
            </div>
            <div>
              <div className="mb-2 inline-block rounded-full bg-emerald-500/20 border border-emerald-300/40 px-3 py-1 text-xs font-bold text-emerald-200">
                PRESENTE
              </div>
              <Lupa
                src={t["03_observacao_fonte"].imagem_presente}
                alt="Fonte do presente"
                legenda={t["03_observacao_fonte"].detalhe_presente}
              />
            </div>
          </div>
          <BotaoContinuar onClick={onProxima} />
        </Cartao>
      );

    case "04_investigacao":
      return <Investigacao dados={t["04_investigacao"]} onAcerto={onProxima} />;

    case "05_ensino_explicito":
      return (
        <Cartao titulo={t["05_ensino_explicito"].conceito} avatar="Aurora">
          <RichText texto={t["05_ensino_explicito"].explicacao} />
          <BotaoContinuar onClick={onProxima} />
        </Cartao>
      );

    case "06_eu_faco":
      return (
        <Cartao titulo="Eu Faço — a Professora mostra" avatar="Aurora">
          <p className="text-lg text-white/90">{t["06_eu_faco"].exemplo_professor}</p>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm font-bold">
            <div className="rounded-lg bg-amber-500/15 border border-amber-300/30 p-3">
              Ontem<br /><span className="text-xs font-normal text-white/70">leu livro antigo</span>
            </div>
            <div className="rounded-lg bg-emerald-500/15 border border-emerald-300/30 p-3">
              Hoje<br /><span className="text-xs font-normal text-white/70">ensinando você</span>
            </div>
            <div className="rounded-lg bg-cyan-500/15 border border-cyan-300/30 p-3">
              Amanhã<br /><span className="text-xs font-normal text-white/70">visita ao museu</span>
            </div>
          </div>
          <BotaoContinuar onClick={onProxima} />
        </Cartao>
      );

    case "07_nos_fazemos":
      return <LinhaDoTempoDrag dados={t["07_nos_fazemos"]} onCompletar={onProxima} />;

    case "08_voce_faz":
      return <VoceFaz enunciado={t["08_voce_faz"].exercicio_autonomo} onEnviar={onProxima} />;

    case "09_aplicacao_cotidiano":
      return (
        <Cartao titulo="No seu dia a dia" avatar="Brilha">
          <p className="text-lg text-white/90">{t["09_aplicacao_cotidiano"].texto_pratico}</p>
          <BotaoContinuar onClick={onProxima} />
        </Cartao>
      );

    case "10_minijogo":
      return <Minijogo dados={t["10_minijogo"]} onSucesso={onProxima} />;

    case "11_quiz":
      return <Quiz dados={t["11_quiz"]} onAcerto={onProxima} />;

    case "12_missao_familia":
      return (
        <Cartao titulo={t["12_missao_familia"].titulo} avatar="Aurora">
          <p className="text-lg text-white/90">{t["12_missao_familia"].tarefa}</p>
          <div className="mt-4 rounded-lg bg-white/5 border border-white/10 p-4 text-sm text-white/75">
            💡 Marque como feito quando tiver conversado com sua família! (Você pode tirar foto no botão da câmera nas próximas aulas.)
          </div>
          <BotaoContinuar onClick={onProxima} />
        </Cartao>
      );

    case "13_portfolio_museu":
      return <PortfolioMuseu aula={aula} onSalvar={onProxima} />;

    case "recompensa":
      return <TelaRecompensa aula={aula} />;
  }
}

/* ==================== PRIMITIVOS ==================== */

function Cartao({
  titulo,
  avatar,
  children,
}: {
  titulo: string;
  avatar?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7 shadow-xl backdrop-blur">
      <header className="mb-4 flex items-center gap-3">
        {avatar && <AvatarMascote nome={avatar} />}
        <h2 className="text-xl font-black text-white sm:text-2xl">{titulo}</h2>
      </header>
      <div className="space-y-3 leading-relaxed text-white/90">{children}</div>
    </section>
  );
}

function BotaoContinuar({ onClick }: { onClick: () => void }) {
  return (
    <div className="mt-6 flex justify-end">
      <button
        onClick={onClick}
        className="rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 px-6 py-2.5 font-black text-slate-900 shadow-lg hover:brightness-110"
      >
        Continuar →
      </button>
    </div>
  );
}

function AvatarMascote({ nome }: { nome: string }) {
  const cor = nome.toLowerCase().includes("aurora")
    ? "from-purple-400 to-pink-400"
    : "from-amber-400 to-orange-500";
  const inicial = nome.charAt(0).toUpperCase();
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${cor} text-lg font-black text-white shadow-md ring-2 ring-white/40`}
    >
      {inicial}
    </div>
  );
}

function RichText({ texto }: { texto: string }) {
  const linhas = texto.split("\n");
  return (
    <div className="space-y-2 text-white/90">
      {linhas.map((linha, idx) => {
        const trimmed = linha.trim();
        if (!trimmed) return <div key={idx} className="h-2" />;
        if (trimmed.startsWith("*")) {
          const conteudo = trimmed.replace(/^\*\s*/, "");
          return (
            <div key={idx} className="flex gap-2 pl-4">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-300" />
              <span dangerouslySetInnerHTML={{ __html: renderBold(conteudo) }} />
            </div>
          );
        }
        return <p key={idx} dangerouslySetInnerHTML={{ __html: renderBold(trimmed) }} />;
      })}
    </div>
  );
}

function renderBold(s: string) {
  return s.replace(/\*\*(.+?)\*\*/g, '<strong class="text-amber-200">$1</strong>');
}

function Investigacao({
  dados,
  onAcerto,
}: {
  dados: AulaHistoria["trilha"]["04_investigacao"];
  onAcerto: () => void;
}) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const acertou = escolha === dados.resposta_pista_index;
  return (
    <Cartao titulo="Investigação da Lupa" avatar="Aurora">
      <p className="mb-4 text-lg font-semibold text-white">{dados.pergunta_pista}</p>
      <div className="space-y-2">
        {dados.pistas_disponiveis.map((pista, idx) => {
          const escolhida = escolha === idx;
          const mostrarCerto = escolha !== null && idx === dados.resposta_pista_index;
          const mostrarErrado = escolhida && idx !== dados.resposta_pista_index;
          return (
            <button
              key={idx}
              onClick={() => setEscolha(idx)}
              className={[
                "w-full rounded-xl border p-4 text-left transition-all",
                mostrarCerto
                  ? "border-emerald-400 bg-emerald-500/20 text-emerald-100"
                  : mostrarErrado
                    ? "border-rose-400 bg-rose-500/20 text-rose-100"
                    : escolhida
                      ? "border-amber-300 bg-amber-400/15"
                      : "border-white/15 bg-white/5 hover:border-amber-300/60 text-white/90",
              ].join(" ")}
            >
              <span className="font-bold">Pista {idx + 1}: </span>
              {pista}
            </button>
          );
        })}
      </div>
      {escolha !== null && (
        <div
          className={`mt-4 rounded-lg p-4 ${
            acertou
              ? "bg-emerald-500/15 border border-emerald-400/40 text-emerald-100"
              : "bg-rose-500/15 border border-rose-400/40 text-rose-100"
          }`}
        >
          {acertou ? (
            <>
              <p className="font-bold">🎉 Investigação correta!</p>
              <p className="text-sm">
                As cores e as roupas são pistas que mostram o tempo passando. Boa observação, Historiador!
              </p>
              <button
                onClick={onAcerto}
                className="mt-3 rounded-full bg-emerald-500 px-4 py-2 font-bold text-slate-900"
              >
                Continuar →
              </button>
            </>
          ) : (
            <>
              <p className="font-bold">🔎 Quase! Olhe de novo com a lupa.</p>
              <p className="text-sm">
                O Sol sozinho não mostra o tempo passar entre as fotos. Procure algo que MUDOU entre as duas.
              </p>
            </>
          )}
        </div>
      )}
    </Cartao>
  );
}

type ItemAssoc = AulaHistoria["trilha"]["07_nos_fazemos"]["associacoes"][number];
const ZONAS: Array<ItemAssoc["tempo_correto"]> = [
  "Passado (Ontem)",
  "Presente (Hoje)",
  "Futuro (Amanhã)",
];
const CORES_ZONA: Record<ItemAssoc["tempo_correto"], string> = {
  "Passado (Ontem)": "border-amber-300/50 bg-amber-500/10",
  "Presente (Hoje)": "border-emerald-300/50 bg-emerald-500/10",
  "Futuro (Amanhã)": "border-cyan-300/50 bg-cyan-500/10",
};

function LinhaDoTempoDrag({
  dados,
  onCompletar,
}: {
  dados: AulaHistoria["trilha"]["07_nos_fazemos"];
  onCompletar: () => void;
}) {
  const [colocados, setColocados] = useState<Record<string, ItemAssoc["tempo_correto"] | null>>(
    Object.fromEntries(dados.associacoes.map((a) => [a.evento, null])),
  );
  const [arrastando, setArrastando] = useState<string | null>(null);

  const posicionar = (evento: string, zona: ItemAssoc["tempo_correto"]) => {
    setColocados((prev) => ({ ...prev, [evento]: zona }));
  };

  const tudoCerto = dados.associacoes.every((a) => colocados[a.evento] === a.tempo_correto);
  const restantes = dados.associacoes.filter((a) => colocados[a.evento] === null);

  return (
    <Cartao titulo="Nós Fazemos — Linha do Tempo" avatar="Aurora">
      <p className="mb-4 text-white/90">{dados.atividade_guiada}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {restantes.map((a) => (
          <button
            key={a.evento}
            draggable
            onDragStart={() => setArrastando(a.evento)}
            onClick={() => setArrastando((cur) => (cur === a.evento ? null : a.evento))}
            className={[
              "cursor-grab rounded-full border px-4 py-2 text-sm font-bold shadow transition",
              arrastando === a.evento
                ? "border-amber-200 bg-amber-300/30 text-amber-100 scale-105"
                : "border-white/20 bg-white/10 text-white/90",
            ].join(" ")}
          >
            📌 {a.evento}
          </button>
        ))}
        {restantes.length === 0 && (
          <p className="text-sm italic text-white/60">Todos os blocos foram posicionados!</p>
        )}
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {ZONAS.map((zona) => {
          const dentro = Object.entries(colocados).filter(([, z]) => z === zona);
          return (
            <div
              key={zona}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (arrastando) {
                  posicionar(arrastando, zona);
                  setArrastando(null);
                }
              }}
              onClick={() => {
                if (arrastando) {
                  posicionar(arrastando, zona);
                  setArrastando(null);
                }
              }}
              className={[
                "min-h-[120px] rounded-xl border-2 border-dashed p-3",
                CORES_ZONA[zona],
                arrastando ? "ring-2 ring-offset-2 ring-offset-slate-900 ring-amber-400 cursor-pointer" : "",
              ].join(" ")}
            >
              <div className="mb-2 text-center font-black text-white">{zona}</div>
              <div className="space-y-1">
                {dentro.map(([evento, z]) => {
                  const certo =
                    dados.associacoes.find((a) => a.evento === evento)?.tempo_correto === z;
                  return (
                    <div
                      key={evento}
                      className={[
                        "flex items-center justify-between gap-1 rounded-full border px-3 py-1 text-xs font-semibold",
                        certo
                          ? "border-emerald-400 bg-emerald-500/25 text-emerald-100"
                          : "border-rose-400 bg-rose-500/25 text-rose-100",
                      ].join(" ")}
                    >
                      <span>{certo ? "✅" : "❌"} {evento}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setColocados((p) => ({ ...p, [evento]: null }));
                        }}
                        className="text-xs opacity-60 hover:opacity-100"
                        aria-label="Remover"
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {tudoCerto && (
        <div className="mt-4 rounded-lg bg-emerald-500/15 border border-emerald-400/40 p-4 text-emerald-100">
          <p className="font-bold">🎉 Perfeito! Sua Linha do Tempo está correta!</p>
          <button
            onClick={onCompletar}
            className="mt-2 rounded-full bg-emerald-500 px-4 py-2 font-bold text-slate-900"
          >
            Continuar →
          </button>
        </div>
      )}
    </Cartao>
  );
}

function VoceFaz({ enunciado, onEnviar }: { enunciado: string; onEnviar: () => void }) {
  const [ontem, setOntem] = useState("");
  const [amanha, setAmanha] = useState("");
  const pronto = ontem.trim().length > 2 && amanha.trim().length > 2;
  return (
    <Cartao titulo="Você Faz — sua vez" avatar="Brilha">
      <p className="mb-4 text-white/90">{enunciado}</p>
      <label className="mb-3 block">
        <span className="mb-1 block font-bold text-amber-200">🕰️ Uma coisa que fiz ONTEM:</span>
        <input
          value={ontem}
          onChange={(e) => setOntem(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-white/40 focus:border-amber-300 focus:outline-none"
          placeholder="Ex.: brinquei no parque com meu amigo"
        />
      </label>
      <label className="block">
        <span className="mb-1 block font-bold text-emerald-200">🌅 Uma coisa que quero fazer AMANHÃ:</span>
        <input
          value={amanha}
          onChange={(e) => setAmanha(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-white/40 focus:border-emerald-300 focus:outline-none"
          placeholder="Ex.: ver um filme com minha família"
        />
      </label>
      <button
        onClick={onEnviar}
        disabled={!pronto}
        className="mt-4 rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 px-5 py-2.5 font-bold text-slate-900 shadow disabled:opacity-40"
      >
        Registrar no meu museu →
      </button>
    </Cartao>
  );
}

function Minijogo({
  dados,
  onSucesso,
}: {
  dados: AulaHistoria["trilha"]["10_minijogo"];
  onSucesso: () => void;
}) {
  const setores = ["Passado", "Presente", "Futuro"];
  const [angulo, setAngulo] = useState(0);
  const [rodando, setRodando] = useState(true);
  const [resultado, setResultado] = useState<"acerto" | "erro" | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!rodando) return;
    let last = performance.now();
    const loop = (t: number) => {
      const dt = t - last;
      last = t;
      setAngulo((a) => (a + dt * 0.3) % 360);
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [rodando]);

  const frear = () => {
    setRodando(false);
    const setor = Math.floor(((angulo + 60) % 360) / 120);
    const nome = setores[setor];
    if (nome === dados.alvo_correto) setResultado("acerto");
    else setResultado("erro");
  };

  const reiniciar = () => {
    setResultado(null);
    setRodando(true);
  };

  return (
    <Cartao titulo={dados.nome} avatar="Aurora">
      <p className="mb-4 text-white/90">{dados.mecanica}</p>
      <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
        <div
          className="absolute inset-0 rounded-full border-8 border-slate-700 shadow-lg"
          style={{
            background:
              "conic-gradient(from -90deg, #b45309 0deg 120deg, #059669 120deg 240deg, #0891b2 240deg 360deg)",
          }}
        />
        <span className="absolute top-6 text-xs font-black text-white drop-shadow">PASSADO</span>
        <span className="absolute bottom-16 right-4 text-xs font-black text-white drop-shadow">PRESENTE</span>
        <span className="absolute bottom-16 left-4 text-xs font-black text-white drop-shadow">FUTURO</span>
        <div
          className="absolute left-1/2 top-1/2 h-24 w-1 origin-bottom rounded-t bg-white shadow-lg"
          style={{ transform: `translate(-50%, -100%) rotate(${angulo}deg)`, transformOrigin: "50% 100%" }}
        />
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-4 ring-slate-800" />
      </div>

      <div className="mt-6 text-center">
        {resultado === null ? (
          <button
            onClick={frear}
            className="rounded-full bg-rose-500 px-8 py-4 text-xl font-black text-white shadow-lg hover:bg-rose-600"
          >
            🛑 FREAR!
          </button>
        ) : resultado === "acerto" ? (
          <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/40 p-4 text-emerald-100">
            <p className="text-xl font-black">🎉 Cronômetro travado no {dados.alvo_correto}!</p>
            <button
              onClick={onSucesso}
              className="mt-3 rounded-full bg-emerald-500 px-5 py-2 font-bold text-slate-900"
            >
              Continuar →
            </button>
          </div>
        ) : (
          <div className="rounded-xl bg-rose-500/15 border border-rose-400/40 p-4 text-rose-100">
            <p className="text-lg font-bold">Quase! Tente frear no {dados.alvo_correto}.</p>
            <button
              onClick={reiniciar}
              className="mt-3 rounded-full bg-amber-400 px-5 py-2 font-bold text-slate-900"
            >
              Tentar de novo
            </button>
          </div>
        )}
      </div>
    </Cartao>
  );
}

function Quiz({
  dados,
  onAcerto,
}: {
  dados: AulaHistoria["trilha"]["11_quiz"];
  onAcerto: () => void;
}) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const acertou = escolha !== null && dados.alternativas[escolha]?.correta;
  return (
    <Cartao titulo="Quiz do Historiador" avatar="Aurora">
      <p className="mb-4 text-lg font-semibold text-white">{dados.pergunta}</p>
      <div className="space-y-2">
        {dados.alternativas.map((alt, idx) => {
          const escolhida = escolha === idx;
          const mostrarCerto = escolha !== null && alt.correta;
          const mostrarErrado = escolhida && !alt.correta;
          return (
            <button
              key={idx}
              onClick={() => setEscolha(idx)}
              className={[
                "w-full rounded-xl border p-4 text-left font-semibold transition",
                mostrarCerto
                  ? "border-emerald-400 bg-emerald-500/20 text-emerald-100"
                  : mostrarErrado
                    ? "border-rose-400 bg-rose-500/20 text-rose-100"
                    : escolhida
                      ? "border-amber-300 bg-amber-400/15 text-white"
                      : "border-white/15 bg-white/5 text-white/90 hover:border-amber-300/60",
              ].join(" ")}
            >
              {String.fromCharCode(65 + idx)}) {alt.texto}
            </button>
          );
        })}
      </div>
      {escolha !== null && (
        <div
          className={`mt-4 rounded-lg p-4 ${
            acertou
              ? "bg-emerald-500/15 border border-emerald-400/40 text-emerald-100"
              : "bg-amber-500/15 border border-amber-400/40 text-amber-100"
          }`}
        >
          <p className="font-bold">Professora Aurora:</p>
          <p>
            {acertou
              ? dados.feedback_professor
              : "Pense de novo: um diário guarda coisas que já aconteceram."}
          </p>
          {acertou && (
            <button
              onClick={onAcerto}
              className="mt-3 rounded-full bg-emerald-500 px-4 py-2 font-bold text-slate-900"
            >
              Continuar →
            </button>
          )}
        </div>
      )}
    </Cartao>
  );
}

function PortfolioMuseu({ aula, onSalvar }: { aula: AulaHistoria; onSalvar: () => void }) {
  const [salvo, setSalvo] = useState(false);
  const [salvando, setSalvando] = useState(false);
  const salvar = async () => {
    setSalvando(true);
    await salvarItemMuseu({
      curso: aula.curso,
      unidade: aula.unidade,
      aula: aula.aula,
      tipo_item: "card_museu",
      nome_sala: aula.trilha["13_portfolio_sala_museu"].nome_sala,
      nome_item: aula.trilha["13_portfolio_sala_museu"].item_salvo,
      imagem_url: aula.trilha["03_observacao_fonte"].imagem_presente,
      xp: 0,
      moedas: 0,
    });
    setSalvo(true);
    setSalvando(false);
    setTimeout(onSalvar, 600);
  };
  return (
    <Cartao titulo={aula.trilha["13_portfolio_sala_museu"].nome_sala} avatar="Aurora">
      <p className="mb-4 text-white/90">
        Vamos guardar sua conquista no Museu Digital? Ele fica pra sempre com você.
      </p>
      <div className="rounded-xl border border-amber-300/40 bg-gradient-to-br from-amber-500/15 to-emerald-500/10 p-5 text-center">
        <div
          className="mx-auto mb-3 h-24 w-24 rounded-lg border-4 border-amber-200/70 bg-white shadow"
          style={{
            backgroundImage: `url(${aula.trilha["03_observacao_fonte"].imagem_presente})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <p className="font-black text-white">🎨 {aula.trilha["13_portfolio_sala_museu"].item_salvo}</p>
        <p className="mt-1 text-xs text-white/70">
          Aula {aula.aula} · {aula.titulo_unidade}
        </p>
      </div>
      <button
        onClick={salvar}
        disabled={salvo || salvando}
        className="mt-4 w-full rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 py-3 font-black text-slate-900 shadow disabled:opacity-60"
      >
        {salvo ? "✅ Guardado no museu!" : salvando ? "Guardando..." : "🏛️ Guardar no meu Museu Digital"}
      </button>
    </Cartao>
  );
}

function TelaRecompensa({ aula }: { aula: AulaHistoria }) {
  const [conquistadas, setConquistadas] = useState<number[]>([]);
  const [encaixou, setEncaixou] = useState(false);

  useEffect(() => {
    (async () => {
      await salvarItemMuseu({
        curso: aula.curso,
        unidade: aula.unidade,
        aula: aula.aula,
        tipo_item: "engrenagem",
        nome_sala: aula.trilha["13_portfolio_sala_museu"].nome_sala,
        nome_item: aula.recompensas.item_conquistado,
        imagem_url: null,
        xp: aula.recompensas.xp,
        moedas: aula.recompensas.moedas,
        meta: { indice: aula.recompensas.engrenagem_indice },
      });
      const n = await contarEngrenagens(aula.curso);
      const arr = Array.from({ length: n }, (_, i) => i + 1);
      setConquistadas(arr);
      setTimeout(() => setEncaixou(true), 500);
    })();
  }, [aula]);

  const destaque = aula.recompensas.engrenagem_indice;

  return (
    <section className="rounded-2xl border border-amber-300/40 bg-gradient-to-br from-amber-500/15 via-emerald-500/10 to-cyan-500/10 p-8 text-center shadow-xl backdrop-blur">
      <h2 className="text-3xl font-black text-white sm:text-4xl">🎉 Missão Completa!</h2>
      <p className="mt-2 text-lg text-white/90">
        Você recuperou a <strong className="text-amber-200">{aula.recompensas.item_conquistado}</strong>!
      </p>

      <div className="my-6 flex justify-center">
        <RelogioDoTempo
          conquistadas={conquistadas}
          destacar={encaixou ? undefined : destaque}
          tamanho={260}
        />
      </div>

      <div className="mx-auto grid max-w-xs grid-cols-2 gap-3">
        <div className="rounded-xl bg-white/10 border border-white/15 p-3">
          <div className="text-2xl font-black text-amber-200">+{aula.recompensas.xp}</div>
          <div className="text-xs font-bold uppercase text-white/70">XP</div>
        </div>
        <div className="rounded-xl bg-white/10 border border-white/15 p-3">
          <div className="text-2xl font-black text-emerald-200">+{aula.recompensas.moedas}</div>
          <div className="text-xs font-bold uppercase text-white/70">Moedas</div>
        </div>
      </div>

      <p className="mt-6 text-sm font-bold text-white/80">
        {conquistadas.length} de 7 engrenagens · faltam {Math.max(0, 7 - conquistadas.length)}
      </p>

      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          to="/escola-brilha/historia/$curso"
          params={{ curso: aula.curso }}
          className="rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 px-6 py-3 font-black text-slate-900 shadow hover:brightness-110"
        >
          🏛️ Ver meu Museu
        </Link>
        <Link
          to="/escola-brilha"
          className="rounded-full border border-white/30 bg-white/10 px-6 py-3 font-bold text-white hover:bg-white/20"
        >
          Voltar ao Menu
        </Link>
      </div>
    </section>
  );
}

// Silence unused import warning for useMemo (kept for future features)
void useMemo;
