import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EtapaCurricular, TipoAtividade } from "../data/etapas";
import { gerarPorTipo, Rodada } from "../engine/gerador";
import { useVoz } from "../hooks/useVoz";
import { useAdaptiveDifficulty } from "../hooks/useAdaptiveDifficulty";
import { objetoImg } from "@/data/neuro-treino/objetos";
import { falarSom } from "../data/palavras";
import { recordSkillAttempt } from "@/services/neuro-treino/neuroMetrics";
import {
  Volume2,
  ArrowLeft,
  X,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Lightbulb,
  Play,
} from "lucide-react";

interface Props {
  etapa: EtapaCurricular;
  acertosAtuais: number;
  childId: string;
  onAcerto: () => void;
  onSair: () => void;
}

// Tipos que usam o grid de números em vez de imagens.
const TIPOS_NUMERO = new Set(["segmentacao", "contagem-fonemas"]);
// Tipos que exibem uma "palavra de referência" antes do grid.
const TIPOS_COM_REFERENCIA = new Set([
  "rima",
  "aliteracao",
  "som-final",
  "substituicao-fonema",
]);

// Explicação inicial mostrada ANTES da atividade começar — igual ao padrão
// clínico das outras trilhas do Neuro Treino (Dislexia, Discalculia).
const INTRO_ETAPA: Record<
  string,
  { titulo: string; texto: string; comoJogar: string }
> = {
  vogais: {
    titulo: "Hoje vamos treinar as VOGAIS",
    texto:
      "As vogais são cinco sons especiais: A, E, I, O, U. Elas aparecem em quase toda palavra que a gente fala.",
    comoJogar:
      "Eu falo um som e você toca na imagem que começa com aquele som. Se errar, o Professor Brilha explica e você tenta de novo.",
  },
  silabas: {
    titulo: "Vamos brincar com as SÍLABAS",
    texto:
      "Toda palavra pode ser dividida em pedacinhos. Cada pedacinho é uma sílaba: BO-LA, CA-SA, SA-PA-TO.",
    comoJogar:
      "Você vai contar os pedacinhos da palavra ou juntar sílabas para formar a palavra certa.",
  },
  palavras: {
    titulo: "Sons das PALAVRAS",
    texto:
      "As palavras têm sons no começo, no meio e no fim. Quando duas palavras terminam com o mesmo som, elas rimam — como GATO e PATO.",
    comoJogar:
      "Ouça a palavra de referência e toque na imagem que combina: mesmo som inicial, mesma rima ou mesma letra de começo.",
  },
  fonemas: {
    titulo: "Detetive dos FONEMAS",
    texto:
      "Fonema é o menor som de uma palavra. GATO tem 4 fonemas: G-A-T-O. Trocar um fonema muda a palavra inteira: GATO vira PATO!",
    comoJogar:
      "Ouça com atenção e ache o som do começo, do meio, do fim, conte quantos sons tem ou troque um som pelo outro.",
  },
  frases: {
    titulo: "Ouvir FRASES",
    texto:
      "Uma frase junta várias palavras para contar uma ideia. Quando você ouve com atenção, consegue imaginar a cena.",
    comoJogar:
      "Eu leio uma frase e você toca na imagem que mostra o que aconteceu.",
  },
  textos: {
    titulo: "Ouvir TEXTOS curtos",
    texto:
      "Textos são histórias pequenas com começo, meio e fim. Prestar atenção é o segredo para entender tudo.",
    comoJogar:
      "Escute a historinha até o fim e depois responda a pergunta escolhendo a imagem certa.",
  },
  compreensao: {
    titulo: "Entendendo a HISTÓRIA",
    texto:
      "Compreender é lembrar o que aconteceu, quem estava lá e por quê. Todo bom leitor pensa depois de ler.",
    comoJogar:
      "Ouça o texto com calma e escolha a resposta que combina com o que aconteceu.",
  },
};

export function AtividadePlayer({ etapa, acertosAtuais, childId, onAcerto, onSair }: Props) {
  const { falar, parar } = useVoz();
  const { nivel, registrar } = useAdaptiveDifficulty(childId);
  const [mostrarIntro, setMostrarIntro] = useState(true);
  const [rodada, setRodada] = useState<Rodada>(() =>
    gerarPorTipo(
      etapa.atividades[Math.floor(Math.random() * etapa.atividades.length)] as TipoAtividade,
      nivel,
    ),
  );
  const [feedback, setFeedback] = useState<"acerto" | "erro" | null>(null);
  const [travado, setTravado] = useState(false);
  const [ajuste, setAjuste] = useState<"subiu" | "desceu" | null>(null);
  const [errosNaRodada, setErrosNaRodada] = useState(0);
  const [revelar, setRevelar] = useState(false);
  const [ultimaRegra, setUltimaRegra] = useState<string | null>(null);
  const [modelagem, setModelagem] = useState<string | null>(null); // grafema/som exibido no erro
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const rodadaInicio = useRef<number>(Date.now());

  const intro = INTRO_ETAPA[etapa.id] ?? {
    titulo: etapa.titulo,
    texto: etapa.descricao,
    comoJogar: "Ouça a instrução e toque na resposta certa.",
  };

  const progressoPct = useMemo(
    () => Math.min(100, Math.round((acertosAtuais / etapa.alvo) * 100)),
    [acertosAtuais, etapa.alvo],
  );

  function agendar(fn: () => void, ms: number) {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  }
  function limparTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  // Lê a explicação da intro assim que o player abre.
  useEffect(() => {
    if (!mostrarIntro) return;
    const t = setTimeout(
      () => falar(`${intro.titulo}. ${intro.texto}. ${intro.comoJogar}`),
      350,
    );
    return () => {
      clearTimeout(t);
      parar();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mostrarIntro]);

  useEffect(() => {
    if (mostrarIntro) return;
    falar(rodada.instrucaoFalada);
    return () => {
      limparTimers();
      parar();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rodada, mostrarIntro]);

  function proximaRodada(nivelAtual: number) {
    limparTimers();
    const tipo = etapa.atividades[Math.floor(Math.random() * etapa.atividades.length)];
    setRodada(gerarPorTipo(tipo, nivelAtual));
    setFeedback(null);
    setTravado(false);
    setErrosNaRodada(0);
    setRevelar(false);
    setUltimaRegra(null);
  }

  function responder(resposta: string) {
    if (travado) return;
    setTravado(true);
    const ok = resposta === rodada.correta;
    setFeedback(ok ? "acerto" : "erro");
    const nivelAntes = nivel;
    const nivelDepois = registrar(ok);
    if (nivelDepois > nivelAntes) {
      setAjuste("subiu");
      agendar(() => setAjuste(null), 1800);
    } else if (nivelDepois < nivelAntes) {
      setAjuste("desceu");
      agendar(() => setAjuste(null), 1800);
    }

    if (ok) {
      falar("Isso! " + rodada.regra);
      onAcerto();
      agendar(() => proximaRodada(nivelDepois), 2200);
      return;
    }

    const novoErros = errosNaRodada + 1;
    setErrosNaRodada(novoErros);
    setUltimaRegra(rodada.regra);

    if (novoErros >= 2) {
      setRevelar(true);
      falar(`Olha só. ${rodada.regra} Vamos para a próxima.`);
      agendar(() => proximaRodada(nivelDepois), 4200);
    } else {
      falar(`Ainda não. ${rodada.regra}`);
      agendar(() => {
        setFeedback(null);
        setTravado(false);
      }, 3200);
    }
  }

  const usaGridNumero = TIPOS_NUMERO.has(rodada.tipo);
  const usaReferencia = TIPOS_COM_REFERENCIA.has(rodada.tipo);
  const imagensGrid = usaReferencia ? rodada.imagens.slice(1) : rodada.imagens;

  // ---- Intro (explicação antes da aula) ----
  if (mostrarIntro) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#3A1F5C] via-[#4A2670] to-[#1F1233] text-white flex flex-col">
        <header className="flex items-center gap-3 p-4">
          <button
            onClick={() => {
              parar();
              onSair();
            }}
            className="rounded-full bg-white/15 hover:bg-white/25 p-2"
            aria-label="Sair"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex-1 text-sm font-black uppercase tracking-widest text-orange-200">
            Etapa {etapa.ordem} · {etapa.titulo}
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl bg-white/10 backdrop-blur border-2 border-white/20 rounded-[2rem] shadow-xl p-6 md:p-8 text-center"
          >
            <div className="text-6xl mb-3">{etapa.emoji}</div>
            <h2 className="text-2xl md:text-3xl font-black text-orange-200 mb-4">
              {intro.titulo}
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
              {intro.texto}
            </p>
            <div className="rounded-2xl bg-white/10 border border-white/15 p-4 text-sm md:text-base text-white/85 mb-6 flex gap-3 items-start text-left">
              <Lightbulb className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-amber-300 mb-1">
                  Como jogar
                </div>
                {intro.comoJogar}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => falar(`${intro.titulo}. ${intro.texto}. ${intro.comoJogar}`)}
                className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-black flex items-center gap-2 justify-center border border-white/20"
              >
                <Volume2 className="w-5 h-5" /> Ouvir de novo
              </button>
              <button
                onClick={() => {
                  parar();
                  setMostrarIntro(false);
                }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 text-[#3A1F5C] font-black flex items-center gap-2 justify-center shadow-lg hover:scale-105 transition-transform"
              >
                <Play className="w-5 h-5" /> Começar
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  // ---- Atividade ----
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#3A1F5C] via-[#4A2670] to-[#1F1233] text-white flex flex-col">
      <div className="flex items-center gap-3 p-4 border-b border-white/10 bg-white/5 backdrop-blur">
        <button
          onClick={() => {
            parar();
            onSair();
          }}
          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center"
          aria-label="Sair"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm font-bold text-white/90">
            <span>{etapa.emoji}</span>
            <span className="truncate">{etapa.titulo}</span>
          </div>
          <div className="mt-1 h-2 bg-white/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-amber-500 transition-all"
              style={{ width: `${progressoPct}%` }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="px-3 py-1 rounded-full bg-white/15 text-[10px] font-black uppercase tracking-wider text-white/90"
            title="Dificuldade adaptativa atual"
          >
            Nível {nivel}
          </div>
          {ultimaRegra && (
            <button
              onClick={() => falar(ultimaRegra)}
              className="w-11 h-11 rounded-full bg-amber-400 text-[#3A1F5C] flex items-center justify-center shadow hover:bg-amber-300"
              aria-label="Ouvir a explicação"
              title="Ouvir a dica do Professor"
            >
              <Lightbulb className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={() => falar(rodada.instrucaoFalada)}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-[#3A1F5C] flex items-center justify-center shadow-lg hover:scale-105"
            aria-label="Ouvir a pergunta"
          >
            <Volume2 className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {ajuste && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className={`mx-auto mt-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow flex items-center gap-2 ${
              ajuste === "subiu" ? "bg-emerald-500 text-white" : "bg-amber-500 text-[#3A1F5C]"
            }`}
          >
            {ajuste === "subiu" ? (
              <>
                <TrendingUp className="w-4 h-4" /> Você está craque! Ficou mais difícil
              </>
            ) : (
              <>
                <TrendingDown className="w-4 h-4" /> Vou facilitar um pouquinho
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {feedback === "erro" && ultimaRegra && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="mx-auto mt-3 w-[92%] max-w-2xl rounded-2xl bg-white/95 shadow-lg border-l-4 border-amber-400 px-4 py-3 flex items-start gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-sm text-slate-700 leading-snug">
              <div className="text-[10px] font-black uppercase tracking-wider text-amber-600 mb-0.5">
                Professor Brilha
              </div>
              {ultimaRegra}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
        {usaReferencia && (
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase font-bold text-white/70 tracking-wider">
              Palavra de referência
            </span>
            <ImgChip
              nome={rodada.imagens[0]}
              tamanho="md"
              onClick={() => falar(rodada.imagens[0].toLowerCase())}
            />
          </div>
        )}

        {usaGridNumero ? (
          <>
            <ImgChip
              nome={rodada.imagens[0]}
              tamanho="lg"
              onClick={() => falar(rodada.imagens[0].toLowerCase())}
            />
            <div className="grid grid-cols-4 gap-3 w-full max-w-md">
              {rodada.numeroOpcoes!.map((n) => {
                const isCorreta = String(n) === rodada.correta;
                const destaque = revelar && isCorreta;
                return (
                  <button
                    key={n}
                    onClick={() => responder(String(n))}
                    disabled={travado}
                    className={`aspect-square rounded-2xl border-4 text-4xl font-black shadow-md transition-all disabled:opacity-60 ${
                      destaque
                        ? "border-emerald-400 bg-emerald-500/20 text-emerald-200 ring-4 ring-emerald-300/50 scale-105"
                        : "border-white/20 bg-white/10 text-white hover:scale-105 hover:bg-white/20"
                    }`}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div
            className={`grid gap-4 w-full max-w-3xl ${
              imagensGrid.length === 4
                ? "grid-cols-2"
                : "grid-cols-2 sm:grid-cols-3"
            }`}
          >
            {imagensGrid.map((nome) => {
              const isCorreta = nome === rodada.correta;
              const destaque = revelar && isCorreta;
              return (
                <ImgChip
                  key={nome}
                  nome={nome}
                  tamanho="lg"
                  selecionavel
                  destaque={destaque}
                  onClick={() => responder(nome)}
                  disabled={travado}
                />
              );
            })}
          </div>
        )}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center shadow-2xl ${
                feedback === "acerto" ? "bg-emerald-500" : "bg-rose-500"
              }`}
            >
              {feedback === "acerto" ? (
                <Sparkles className="w-16 h-16 text-white" />
              ) : (
                <X className="w-16 h-16 text-white" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ImgChip({
  nome,
  tamanho,
  onClick,
  selecionavel,
  disabled,
  destaque,
}: {
  nome: string;
  tamanho: "md" | "lg";
  onClick?: () => void;
  selecionavel?: boolean;
  disabled?: boolean;
  destaque?: boolean;
}) {
  const src = objetoImg(nome);
  const size = tamanho === "lg" ? "h-32 sm:h-40" : "h-24 sm:h-28";
  const borda = destaque
    ? "border-emerald-400 ring-4 ring-emerald-300/50 scale-105 bg-emerald-500/20"
    : selecionavel
      ? "border-white/20 hover:scale-105 hover:bg-white/20"
      : "border-white/15";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${size} aspect-square rounded-3xl bg-white/10 backdrop-blur shadow-md flex items-center justify-center p-3 border-4 ${borda} transition-all disabled:opacity-60`}
    >
      {src ? (
        <img src={src} alt="" className="max-h-full max-w-full object-contain drop-shadow" />
      ) : (
        <span className="text-5xl">❓</span>
      )}
    </button>
  );
}
