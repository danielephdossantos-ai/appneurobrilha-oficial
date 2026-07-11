import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { AulaHistoria } from "../types";
import { Lupa } from "./Lupa";
import { RelogioDoTempo } from "./RelogioDoTempo";
import { contarEngrenagens, salvarItemMuseu } from "../museu-service";

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

const ORDEM: Bloco[] = [
  "01_missao",
  "02_narrativa",
  "03_observacao_fonte",
  "04_investigacao",
  "05_ensino_explicito",
  "06_eu_faco",
  "07_nos_fazemos",
  "08_voce_faz",
  "09_aplicacao_cotidiano",
  "10_minijogo",
  "11_quiz",
  "12_missao_familia",
  "13_portfolio_museu",
  "recompensa",
];

const LABELS: Record<Bloco, string> = {
  "01_missao": "Missão",
  "02_narrativa": "Narrativa",
  "03_observacao_fonte": "Lupa do Historiador",
  "04_investigacao": "Investigação",
  "05_ensino_explicito": "Ensino",
  "06_eu_faco": "Eu Faço",
  "07_nos_fazemos": "Nós Fazemos",
  "08_voce_faz": "Você Faz",
  "09_aplicacao_cotidiano": "No Dia a Dia",
  "10_minijogo": "Minijogo",
  "11_quiz": "Quiz",
  "12_missao_familia": "Família",
  "13_portfolio_museu": "Museu Digital",
  recompensa: "Recompensa",
};

export function PlayerHistoriaSPEB({ aula }: { aula: AulaHistoria }) {
  const [i, setI] = useState(0);
  const bloco = ORDEM[i];
  const t = aula.trilha;

  const avancar = () => setI((v) => Math.min(v + 1, ORDEM.length - 1));
  const voltar = () => setI((v) => Math.max(v - 1, 0));

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 text-amber-950">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b-2 border-amber-900/20 bg-amber-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-3">
          <Link
            to="/escola-brilha/historia/$curso"
            params={{ curso: aula.curso }}
            className="rounded-full bg-amber-900 px-3 py-1.5 text-sm font-bold text-amber-50 shadow hover:bg-amber-800"
          >
            ← Voltar
          </Link>
          <div className="flex-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800/70">
              {aula.ano} · Unidade {aula.unidade} · {aula.titulo_unidade}
            </div>
            <div className="text-sm font-bold">
              {LABELS[bloco]} <span className="text-amber-700">({i + 1}/{ORDEM.length})</span>
            </div>
          </div>
          <div className="hidden text-xs font-bold text-amber-800 sm:block">
            🔍 Pequeno Historiador
          </div>
        </div>
        {/* Barra de progresso */}
        <div className="h-1.5 w-full bg-amber-200">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-orange-600 transition-all"
            style={{ width: `${((i + 1) / ORDEM.length) * 100}%` }}
          />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-6 pb-32">
        {bloco === "01_missao" && (
          <Cartao titulo={`🎯 ${t["01_missao"].titulo}`} avatar="Aurora">
            <p className="mb-4 text-lg">{t["01_missao"].descricao}</p>
            <div className="rounded-lg border-2 border-dashed border-amber-700/50 bg-amber-100/60 p-4">
              <p className="font-bold text-amber-900">Aurora sussurra:</p>
              <p className="italic">"{aula.meta_narrativa.dialogo_aurora}"</p>
            </div>
          </Cartao>
        )}

        {bloco === "02_narrativa" && (
          <Cartao titulo="🎭 Narrativa" avatar={t["02_narrativa"].personagem}>
            <blockquote className="border-l-4 border-amber-700 pl-4 text-lg italic">
              "{t["02_narrativa"].texto}"
            </blockquote>
            <p className="mt-4 text-sm text-amber-800/80">— {t["02_narrativa"].personagem}</p>
          </Cartao>
        )}

        {bloco === "03_observacao_fonte" && (
          <Cartao titulo={`🔍 ${t["03_observacao_fonte"].tipo_fonte}`} avatar="Aurora">
            <p className="mb-4">{t["03_observacao_fonte"].instrucao_lupa}</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="mb-2 inline-block rounded-full bg-amber-900 px-3 py-1 text-xs font-bold text-amber-50">
                  PASSADO
                </div>
                <Lupa src={t["03_observacao_fonte"].imagem_passado} alt="Fonte do passado" legenda={t["03_observacao_fonte"].detalhe_passado} />
              </div>
              <div>
                <div className="mb-2 inline-block rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-amber-50">
                  PRESENTE
                </div>
                <Lupa src={t["03_observacao_fonte"].imagem_presente} alt="Fonte do presente" legenda={t["03_observacao_fonte"].detalhe_presente} />
              </div>
            </div>
          </Cartao>
        )}

        {bloco === "04_investigacao" && (
          <Investigacao dados={t["04_investigacao"]} onAcerto={avancar} />
        )}

        {bloco === "05_ensino_explicito" && (
          <Cartao titulo={`📚 ${t["05_ensino_explicito"].conceito}`} avatar="Aurora">
            <RichText texto={t["05_ensino_explicito"].explicacao} />
          </Cartao>
        )}

        {bloco === "06_eu_faco" && (
          <Cartao titulo="👀 Eu Faço — a Professora mostra" avatar="Aurora">
            <p className="text-lg">{t["06_eu_faco"].exemplo_professor}</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm font-bold">
              <div className="rounded-lg bg-amber-200 p-3">Ontem<br /><span className="text-xs font-normal">leu livro antigo</span></div>
              <div className="rounded-lg bg-orange-200 p-3">Hoje<br /><span className="text-xs font-normal">ensinando você</span></div>
              <div className="rounded-lg bg-yellow-200 p-3">Amanhã<br /><span className="text-xs font-normal">visita ao museu</span></div>
            </div>
          </Cartao>
        )}

        {bloco === "07_nos_fazemos" && (
          <LinhaDoTempoDrag dados={t["07_nos_fazemos"]} onCompletar={avancar} />
        )}

        {bloco === "08_voce_faz" && (
          <VoceFaz enunciado={t["08_voce_faz"].exercicio_autonomo} onEnviar={avancar} />
        )}

        {bloco === "09_aplicacao_cotidiano" && (
          <Cartao titulo="🏠 No seu dia a dia" avatar="Brilha">
            <p className="text-lg">{t["09_aplicacao_cotidiano"].texto_pratico}</p>
          </Cartao>
        )}

        {bloco === "10_minijogo" && (
          <Minijogo dados={t["10_minijogo"]} onSucesso={avancar} />
        )}

        {bloco === "11_quiz" && (
          <Quiz dados={t["11_quiz"]} onAcerto={avancar} />
        )}

        {bloco === "12_missao_familia" && (
          <Cartao titulo={`👨‍👩‍👧 ${t["12_missao_familia"].titulo}`} avatar="Aurora">
            <p className="text-lg">{t["12_missao_familia"].tarefa}</p>
            <div className="mt-4 rounded-lg bg-amber-100 p-4 text-sm">
              💡 Marque como feito quando tiver conversado com sua família! (Você pode tirar foto no botão da câmera nas próximas aulas.)
            </div>
          </Cartao>
        )}

        {bloco === "13_portfolio_museu" && (
          <PortfolioMuseu aula={aula} onSalvar={avancar} />
        )}

        {bloco === "recompensa" && <TelaRecompensa aula={aula} />}

        {/* Navegação inferior */}
        {bloco !== "recompensa" && (
          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              onClick={voltar}
              disabled={i === 0}
              className="rounded-full border-2 border-amber-700 px-5 py-2 font-bold text-amber-800 disabled:opacity-30"
            >
              ← Anterior
            </button>
            <button
              onClick={avancar}
              className="rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 font-black text-white shadow-lg hover:brightness-110"
            >
              Continuar →
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

/* ==================== SUB-COMPONENTES ==================== */

function Cartao({ titulo, avatar, children }: { titulo: string; avatar?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border-2 border-amber-900/20 bg-white/90 p-5 shadow-lg sm:p-7">
      <header className="mb-4 flex items-center gap-3">
        {avatar && <AvatarMascote nome={avatar} />}
        <h2 className="text-xl font-black text-amber-950 sm:text-2xl">{titulo}</h2>
      </header>
      <div className="space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}

function AvatarMascote({ nome }: { nome: string }) {
  const cor = nome.toLowerCase().includes("aurora")
    ? "from-purple-400 to-pink-400"
    : "from-amber-400 to-orange-500";
  const inicial = nome.charAt(0).toUpperCase();
  return (
    <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${cor} text-lg font-black text-white shadow-md ring-2 ring-white`}>
      {inicial}
    </div>
  );
}

function RichText({ texto }: { texto: string }) {
  const linhas = texto.split("\n");
  return (
    <div className="space-y-2">
      {linhas.map((linha, idx) => {
        const trimmed = linha.trim();
        if (!trimmed) return <div key={idx} className="h-2" />;
        if (trimmed.startsWith("*")) {
          const conteudo = trimmed.replace(/^\*\s*/, "");
          return (
            <div key={idx} className="flex gap-2 pl-4">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-700" />
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
  return s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
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
    <Cartao titulo="🕵️ Investigação da Lupa" avatar="Aurora">
      <p className="mb-4 text-lg font-semibold">{dados.pergunta_pista}</p>
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
                "w-full rounded-xl border-2 p-4 text-left transition-all",
                mostrarCerto
                  ? "border-green-600 bg-green-100 text-green-950"
                  : mostrarErrado
                    ? "border-red-500 bg-red-100 text-red-950"
                    : escolhida
                      ? "border-amber-700 bg-amber-100"
                      : "border-amber-300 bg-amber-50 hover:border-amber-600",
              ].join(" ")}
            >
              <span className="font-bold">Pista {idx + 1}: </span>
              {pista}
            </button>
          );
        })}
      </div>
      {escolha !== null && (
        <div className={`mt-4 rounded-lg p-4 ${acertou ? "bg-green-100 text-green-950" : "bg-red-100 text-red-950"}`}>
          {acertou ? (
            <>
              <p className="font-bold">🎉 Investigação correta!</p>
              <p className="text-sm">As cores e as roupas são pistas que mostram o tempo passando. Boa observação, Historiador!</p>
              <button onClick={onAcerto} className="mt-3 rounded-full bg-green-700 px-4 py-2 font-bold text-white">Continuar →</button>
            </>
          ) : (
            <>
              <p className="font-bold">🔎 Quase! Olhe de novo com a lupa.</p>
              <p className="text-sm">O Sol sozinho não mostra o tempo passar entre as fotos. Procure algo que MUDOU entre as duas.</p>
            </>
          )}
        </div>
      )}
    </Cartao>
  );
}

type ItemAssoc = AulaHistoria["trilha"]["07_nos_fazemos"]["associacoes"][number];
const ZONAS: Array<ItemAssoc["tempo_correto"]> = ["Passado (Ontem)", "Presente (Hoje)", "Futuro (Amanhã)"];
const CORES_ZONA: Record<ItemAssoc["tempo_correto"], string> = {
  "Passado (Ontem)": "border-amber-700 bg-amber-100",
  "Presente (Hoje)": "border-orange-600 bg-orange-100",
  "Futuro (Amanhã)": "border-yellow-600 bg-yellow-100",
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
    <Cartao titulo="🤝 Nós Fazemos — Linha do Tempo" avatar="Aurora">
      <p className="mb-4">{dados.atividade_guiada}</p>

      {/* Blocos a arrastar */}
      <div className="mb-4 flex flex-wrap gap-2">
        {restantes.map((a) => (
          <button
            key={a.evento}
            draggable
            onDragStart={() => setArrastando(a.evento)}
            onClick={() => setArrastando((cur) => (cur === a.evento ? null : a.evento))}
            className={[
              "cursor-grab rounded-full border-2 px-4 py-2 text-sm font-bold shadow transition",
              arrastando === a.evento ? "border-amber-900 bg-amber-300 scale-105" : "border-amber-700 bg-amber-50",
            ].join(" ")}
          >
            📌 {a.evento}
          </button>
        ))}
        {restantes.length === 0 && (
          <p className="text-sm italic text-amber-800/70">Todos os blocos foram posicionados!</p>
        )}
      </div>

      {/* Zonas de soltar */}
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
                "min-h-[120px] rounded-xl border-4 border-dashed p-3",
                CORES_ZONA[zona],
                arrastando ? "ring-2 ring-offset-2 ring-amber-500 cursor-pointer" : "",
              ].join(" ")}
            >
              <div className="mb-2 text-center font-black">{zona}</div>
              <div className="space-y-1">
                {dentro.map(([evento, z]) => {
                  const certo = dados.associacoes.find((a) => a.evento === evento)?.tempo_correto === z;
                  return (
                    <div
                      key={evento}
                      className={[
                        "flex items-center justify-between gap-1 rounded-full border px-3 py-1 text-xs font-semibold",
                        certo ? "border-green-600 bg-green-100" : "border-red-500 bg-red-100",
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
        <div className="mt-4 rounded-lg bg-green-100 p-4 text-green-950">
          <p className="font-bold">🎉 Perfeito! Sua Linha do Tempo está correta!</p>
          <button onClick={onCompletar} className="mt-2 rounded-full bg-green-700 px-4 py-2 font-bold text-white">
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
    <Cartao titulo="✍️ Você Faz — sua vez" avatar="Brilha">
      <p className="mb-4">{enunciado}</p>
      <label className="mb-3 block">
        <span className="mb-1 block font-bold text-amber-900">🕰️ Uma coisa que fiz ONTEM:</span>
        <input
          value={ontem}
          onChange={(e) => setOntem(e.target.value)}
          className="w-full rounded-lg border-2 border-amber-400 bg-amber-50 p-3 focus:border-amber-700 focus:outline-none"
          placeholder="Ex.: brinquei no parque com meu amigo"
        />
      </label>
      <label className="block">
        <span className="mb-1 block font-bold text-amber-900">🌅 Uma coisa que quero fazer AMANHÃ:</span>
        <input
          value={amanha}
          onChange={(e) => setAmanha(e.target.value)}
          className="w-full rounded-lg border-2 border-orange-400 bg-orange-50 p-3 focus:border-orange-700 focus:outline-none"
          placeholder="Ex.: ver um filme com minha família"
        />
      </label>
      <button
        onClick={onEnviar}
        disabled={!pronto}
        className="mt-4 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-5 py-2.5 font-bold text-white shadow disabled:opacity-40"
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
    const setor = Math.floor(((angulo + 60) % 360) / 120); // 0=Passado, 1=Presente, 2=Futuro
    const nome = setores[setor];
    if (nome === dados.alvo_correto) setResultado("acerto");
    else setResultado("erro");
  };

  const reiniciar = () => {
    setResultado(null);
    setRodando(true);
  };

  return (
    <Cartao titulo={`🎮 ${dados.nome}`} avatar="Aurora">
      <p className="mb-4">{dados.mecanica}</p>
      <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-8 border-amber-900 shadow-lg" style={{
          background: "conic-gradient(from -90deg, #92400e 0deg 120deg, #ea580c 120deg 240deg, #ca8a04 240deg 360deg)",
        }} />
        {/* Rótulos dos setores */}
        <span className="absolute top-6 text-xs font-black text-white drop-shadow">PASSADO</span>
        <span className="absolute bottom-16 right-4 text-xs font-black text-white drop-shadow">PRESENTE</span>
        <span className="absolute bottom-16 left-4 text-xs font-black text-white drop-shadow">FUTURO</span>
        {/* Ponteiro */}
        <div
          className="absolute left-1/2 top-1/2 h-24 w-1 origin-bottom rounded-t bg-slate-900 shadow-lg"
          style={{ transform: `translate(-50%, -100%) rotate(${angulo}deg)`, transformOrigin: "50% 100%" }}
        />
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 ring-4 ring-amber-50" />
      </div>

      <div className="mt-6 text-center">
        {resultado === null ? (
          <button
            onClick={frear}
            className="rounded-full bg-red-600 px-8 py-4 text-xl font-black text-white shadow-lg hover:bg-red-700"
          >
            🛑 FREAR!
          </button>
        ) : resultado === "acerto" ? (
          <div className="rounded-xl bg-green-100 p-4 text-green-950">
            <p className="text-xl font-black">🎉 Cronômetro travado no {dados.alvo_correto}!</p>
            <button onClick={onSucesso} className="mt-3 rounded-full bg-green-700 px-5 py-2 font-bold text-white">Continuar →</button>
          </div>
        ) : (
          <div className="rounded-xl bg-red-100 p-4 text-red-950">
            <p className="text-lg font-bold">Quase! Tente frear no {dados.alvo_correto}.</p>
            <button onClick={reiniciar} className="mt-3 rounded-full bg-amber-700 px-5 py-2 font-bold text-white">Tentar de novo</button>
          </div>
        )}
      </div>
    </Cartao>
  );
}

function Quiz({ dados, onAcerto }: { dados: AulaHistoria["trilha"]["11_quiz"]; onAcerto: () => void }) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const acertou = escolha !== null && dados.alternativas[escolha]?.correta;
  return (
    <Cartao titulo="🧠 Quiz do Historiador" avatar="Aurora">
      <p className="mb-4 text-lg font-semibold">{dados.pergunta}</p>
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
                "w-full rounded-xl border-2 p-4 text-left font-semibold transition",
                mostrarCerto
                  ? "border-green-600 bg-green-100 text-green-950"
                  : mostrarErrado
                    ? "border-red-500 bg-red-100 text-red-950"
                    : escolhida
                      ? "border-amber-700 bg-amber-100"
                      : "border-amber-300 bg-amber-50 hover:border-amber-600",
              ].join(" ")}
            >
              {String.fromCharCode(65 + idx)}) {alt.texto}
            </button>
          );
        })}
      </div>
      {escolha !== null && (
        <div className={`mt-4 rounded-lg p-4 ${acertou ? "bg-green-100 text-green-950" : "bg-amber-100 text-amber-950"}`}>
          <p className="font-bold">Professora Aurora:</p>
          <p>{acertou ? dados.feedback_professor : "Pense de novo: um diário guarda coisas que já aconteceram."}</p>
          {acertou && (
            <button onClick={onAcerto} className="mt-3 rounded-full bg-green-700 px-4 py-2 font-bold text-white">Continuar →</button>
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
    <Cartao titulo={`🏛️ ${aula.trilha["13_portfolio_sala_museu"].nome_sala}`} avatar="Aurora">
      <p className="mb-4">Vamos guardar sua conquista no Museu Digital? Ele fica pra sempre com você.</p>
      <div className="rounded-xl border-2 border-amber-700 bg-gradient-to-br from-amber-100 to-orange-100 p-5 text-center">
        <div className="mx-auto mb-3 h-24 w-24 rounded-lg border-4 border-amber-800 bg-white shadow" style={{
          backgroundImage: `url(${aula.trilha["03_observacao_fonte"].imagem_presente})`,
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <p className="font-black text-amber-950">🎨 {aula.trilha["13_portfolio_sala_museu"].item_salvo}</p>
        <p className="mt-1 text-xs text-amber-800">Aula {aula.aula} · {aula.titulo_unidade}</p>
      </div>
      <button
        onClick={salvar}
        disabled={salvo || salvando}
        className="mt-4 w-full rounded-full bg-amber-900 py-3 font-black text-amber-50 shadow disabled:opacity-60"
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
    // Salva engrenagem e recarrega
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
      // conquistadas = índices 1..n
      const arr = Array.from({ length: n }, (_, i) => i + 1);
      setConquistadas(arr);
      setTimeout(() => setEncaixou(true), 500);
    })();
  }, [aula]);

  const destaque = aula.recompensas.engrenagem_indice;

  return (
    <section className="rounded-2xl bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 p-8 text-center shadow-xl">
      <h2 className="text-3xl font-black text-amber-950 sm:text-4xl">🎉 Missão Completa!</h2>
      <p className="mt-2 text-lg text-amber-900">Você recuperou a <strong>{aula.recompensas.item_conquistado}</strong>!</p>

      <div className="my-6 flex justify-center">
        <RelogioDoTempo conquistadas={conquistadas} destacar={encaixou ? undefined : destaque} tamanho={260} />
      </div>

      <div className="mx-auto grid max-w-xs grid-cols-2 gap-3">
        <div className="rounded-xl bg-white/80 p-3 shadow">
          <div className="text-2xl font-black text-amber-800">+{aula.recompensas.xp}</div>
          <div className="text-xs font-bold uppercase text-amber-700">XP</div>
        </div>
        <div className="rounded-xl bg-white/80 p-3 shadow">
          <div className="text-2xl font-black text-yellow-700">+{aula.recompensas.moedas}</div>
          <div className="text-xs font-bold uppercase text-yellow-600">Moedas</div>
        </div>
      </div>

      <p className="mt-6 text-sm font-bold text-amber-800">
        {conquistadas.length} de 7 engrenagens · faltam {Math.max(0, 7 - conquistadas.length)}
      </p>

      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          to="/escola-brilha/historia/$curso"
          params={{ curso: aula.curso }}
          className="rounded-full bg-amber-900 px-6 py-3 font-black text-amber-50 shadow hover:bg-amber-800"
        >
          🏛️ Ver meu Museu
        </Link>
        <Link
          to="/escola-brilha"
          className="rounded-full border-2 border-amber-700 bg-white px-6 py-3 font-bold text-amber-900 hover:bg-amber-50"
        >
          Voltar ao Menu
        </Link>
      </div>
    </section>
  );
}

// Silence unused import warning for useMemo (kept for future features)
void useMemo;
