import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EtapaCurricular, TipoAtividade } from "../data/etapas";
import { gerarPorTipo, Rodada } from "../engine/gerador";
import { useVoz } from "../hooks/useVoz";
import { useAdaptiveDifficulty } from "../hooks/useAdaptiveDifficulty";
import { objetoImg } from "@/data/neuro-treino/objetos";
import {
  metodoDaEtapa,
  metodoDoTipo,
  pilarLabel,
} from "../data/metodosCientificos";
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
  SkipForward,
} from "lucide-react";

// Tipos em que a resposta correta REALMENTE começa com o `foco`.
// Só nesses casos o banner "Toque na imagem que começa com X" faz sentido.
const TIPOS_COMECA_COM = new Set([
  "vogal-som",
  "som-inicial",
  "aliteracao",
  "substituicao-fonema",
]);

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
//
// A intro tem 4 blocos:
//   • texto        → fala infantil (o Professor Brilha lê em voz alta)
//   • comoJogar    → instrução clara da mecânica
//   • paraPais     → orientação clínica para o adulto que acompanha
//   • exemplo      → 1 rodada modelada passo-a-passo (o "modelo de aula")
const INTRO_ETAPA: Record<
  string,
  {
    titulo: string;
    texto: string;
    comoJogar: string;
    paraPais: string;
    exemplo: { passos: string[]; dica?: string };
  }
> = {
  vogais: {
    titulo: "Hoje vamos treinar as VOGAIS",
    texto:
      "Algumas palavras começam com vogais. A vogal aparece grande na tela para a criança olhar antes de responder.",
    comoJogar:
      "Olhe a vogal na tela e toque na imagem que começa com ela. Se errar, o Professor Brilha explica e você tenta de novo.",
    paraPais:
      "Objetivo clínico: consciência fonêmica de vogais (identificação do início da palavra). Para evitar erro do sintetizador de voz, o app mostra a vogal na tela e não fala vogais isoladas. O adulto pode modelar oralmente se estiver acompanhando.",
    exemplo: {
      passos: [
        "1) A tela mostra uma vogal grande.",
        "2) Aparecem 4 imagens (ex.: ABELHA, BOLA, IGREJA, UVA).",
        "3) A criança olha a vogal e escolhe a imagem que começa com ela.",
        "4) Acerto → o Professor confirma e a próxima rodada começa.",
        "5) Erro → a letra aparece grande e a criança tenta de novo sem o app soletrar.",
      ],
      dica: "Se ela travar, aponte para a vogal e para a imagem correta; deixe o adulto fazer a fala, não o sintetizador.",
    },
  },
  silabas: {
    titulo: "Vamos brincar com as SÍLABAS",
    texto:
      "Toda palavra pode ser dividida em pedacinhos. A criança olha os blocos na tela e junta ou conta esses pedacinhos.",
    comoJogar:
      "Você vai contar os pedacinhos da palavra ou juntar sílabas para formar a palavra certa.",
    paraPais:
      "Objetivo clínico: segmentação silábica e fusão. Bata palma junto a cada pedacinho — o toque no corpo ajuda a consolidar a divisão. O app mostra os blocos e evita ler sílabas isoladas para não distorcer a pronúncia.",
    exemplo: {
      passos: [
        "1) A tela mostra uma palavra ou os pedacinhos dela.",
        "2) Bata palmas junto com a criança: uma palma para cada pedacinho.",
        "3) Pergunta: “Quantos pedacinhos tem?” → toque no número 3.",
        "4) Na fusão: aparecem blocos de pedacinhos e 4 imagens. A criança junta com os olhos e toca na imagem correta.",
      ],
      dica: "Palmas ou passos com o pé funcionam melhor que contar nos dedos.",
    },
  },
  palavras: {
    titulo: "Sons das PALAVRAS",
    texto:
      "As palavras têm sons no começo, no meio e no fim. Quando duas palavras terminam com o mesmo som, elas rimam — como GATO e PATO.",
    comoJogar:
      "Ouça a palavra de referência e toque na imagem que combina: mesmo som inicial, mesma rima ou mesma letra de começo.",
    paraPais:
      "Objetivo clínico: consciência fonológica de rima, aliteração e som inicial. A fala automática fica restrita a palavras completas e instruções seguras; letras isoladas ficam como pista visual na tela.",
    exemplo: {
      passos: [
        "1) Aparece a imagem-referência (ex.: GATO) e o Professor fala: “Qual imagem RIMA com GATO?”.",
        "2) Aparecem 4 imagens: PATO, BOLA, CASA, SOL.",
        "3) A criança compara as imagens e percebe que GATO e PATO terminam parecido.",
        "4) Toca em PATO → acerto e próxima rodada.",
      ],
      dica: "Se necessário, o adulto pode repetir as palavras devagar; o app não força leitura de sons isolados.",
    },
  },
  fonemas: {
    titulo: "Detetive dos FONEMAS",
    texto:
      "Fonema é o menor som de uma palavra. Nesta etapa, a criança observa a pista visual e escolhe a imagem que combina.",
    comoJogar:
      "Olhe a pista na tela, pense no começo, no meio ou no fim da palavra e toque na resposta correta.",
    paraPais:
      "Objetivo clínico: consciência FONÊMICA (nível fino da consciência fonológica). Para manter a fala confiável, o app não lê consoantes isoladas; ele mostra a pista visual e fala apenas instruções seguras.",
    exemplo: {
      passos: [
        "1) A tela mostra a pista visual da troca ou da letra.",
        "2) A criança compara as imagens com calma.",
        "3) Toca na imagem correta.",
        "4) Nas contagens, usa os dedos para marcar cada som percebido.",
      ],
      dica: "Use dedos: um dedo para cada som percebido. Isso torna o fonema visível sem depender da voz automática.",
    },
  },
  frases: {
    titulo: "Ouvir FRASES",
    texto:
      "Uma frase junta várias palavras para contar uma ideia. Quando você ouve com atenção, consegue imaginar a cena.",
    comoJogar:
      "Eu leio uma frase e você toca na imagem que mostra o que aconteceu.",
    paraPais:
      "Objetivo clínico: compreensão oral (base para compreensão leitora). Peça à criança para FECHAR OS OLHOS enquanto ouve — ativa a imagem mental antes da resposta.",
    exemplo: {
      passos: [
        "1) O Professor fala: “A menina abraçou o cachorro no parque”.",
        "2) Aparecem 4 imagens diferentes.",
        "3) A criança escolhe a cena que combina com a frase.",
      ],
      dica: "Se errar, releia a frase destacando as palavras-chave (menina, cachorro, parque).",
    },
  },
  textos: {
    titulo: "Ouvir TEXTOS curtos",
    texto:
      "Textos são histórias pequenas com começo, meio e fim. Prestar atenção é o segredo para entender tudo.",
    comoJogar:
      "Escute a historinha até o fim e depois responda a pergunta escolhendo a imagem certa.",
    paraPais:
      "Objetivo clínico: memória de trabalho verbal + compreensão literal. Não interrompa durante a leitura; a pergunta só vem depois.",
    exemplo: {
      passos: [
        "1) O Professor lê um texto de 2-3 frases.",
        "2) Faz UMA pergunta (“Quem?”, “Onde?”, “O que aconteceu?”).",
        "3) A criança toca na imagem que responde.",
      ],
      dica: "Se ela não lembrar, releia devagar e destaque a informação-chave.",
    },
  },
  compreensao: {
    titulo: "Entendendo a HISTÓRIA",
    texto:
      "Compreender é lembrar o que aconteceu, quem estava lá e por quê. Todo bom leitor pensa depois de ler.",
    comoJogar:
      "Ouça o texto com calma e escolha a resposta que combina com o que aconteceu.",
    paraPais:
      "Objetivo clínico: compreensão inferencial (‘por quê’, ‘como se sentiu’). Depois da atividade, peça para a criança recontar a história com as próprias palavras — o reconto é o teste real de compreensão.",
    exemplo: {
      passos: [
        "1) O Professor lê a história.",
        "2) Pergunta inferencial: “Por que o coelho ficou feliz?”.",
        "3) A criança escolhe a imagem/resposta que faz sentido.",
      ],
      dica: "Não existe ‘resposta rápida’ aqui — dê tempo para pensar antes de tocar.",
    },
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
    paraPais:
      "Objetivo clínico: fortalecer as habilidades desta etapa. Acompanhe a criança ouvindo cada instrução junto e comemore cada acerto — o reforço social é parte do método.",
    exemplo: {
      passos: [
        "1) O Professor fala a instrução em voz alta.",
        "2) A criança ouve, pensa e toca na resposta.",
        "3) Se errar, o Professor mostra a resposta certa e explica.",
      ],
      dica: "Você pode tocar em ‘Ouvir de novo’ sempre que precisar.",
    },
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
    setModelagem(null);
    rodadaInicio.current = Date.now();
  }

  function grafemaDaRodada(): string | null {
    // Prioridade: foco explícito → primeira letra da resposta certa.
    if (rodada.foco && rodada.foco.length <= 4) return rodada.foco.toUpperCase();
    if (rodada.correta && /^[A-ZÀ-Ú]/i.test(rodada.correta)) {
      return rodada.correta[0].toUpperCase();
    }
    return null;
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

    // Persistência clínica (child_skill_mastery + prompting ABA).
    const durationMs = Date.now() - rodadaInicio.current;
    void recordSkillAttempt({
      childId,
      skillCode: `alfa:${etapa.id}`,
      materia: "alfabetizacao",
      isCorrect: ok,
      durationMs,
    });

    if (ok) {
      falar("Isso! " + rodada.regra);
      onAcerto();
      agendar(() => proximaRodada(nivelDepois), 2200);
      return;
    }

    const novoErros = errosNaRodada + 1;
    setErrosNaRodada(novoErros);
    setUltimaRegra(rodada.regra);

    // Fase D · Modelagem visual: mostra o grafema, sem falar letras isoladas.
    const grafema = grafemaDaRodada();
    if (grafema) {
      setModelagem(grafema);
    }

    if (novoErros >= 2) {
      setRevelar(true);
      agendar(() => falar(`Olha só. ${rodada.regra} Vamos para a próxima.`), 3000);
      agendar(() => proximaRodada(nivelDepois), 4800);
    } else {
      agendar(() => falar(`Ainda não. ${rodada.regra}`), 3000);
      agendar(() => {
        setFeedback(null);
        setTravado(false);
        setModelagem(null);
      }, 4200);
    }
  }

  const usaGridNumero = TIPOS_NUMERO.has(rodada.tipo);
  const usaReferencia = TIPOS_COM_REFERENCIA.has(rodada.tipo);
  const imagensGrid = usaReferencia ? rodada.imagens.slice(1) : rodada.imagens;
  const textoPergunta = rodada.instrucaoVisual ?? rodada.instrucaoFalada;

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

        <main className="flex-1 overflow-y-auto flex items-start justify-center px-4 pb-6 pt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl bg-white/10 backdrop-blur border-2 border-white/20 rounded-[2rem] shadow-xl p-6 md:p-8 text-center"
          >
            <div className="text-6xl mb-3">{etapa.emoji}</div>
            <h2 className="text-2xl md:text-3xl font-black text-orange-200 mb-4">
              {intro.titulo}
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
              {intro.texto}
            </p>

            {/* Como jogar (linguagem da criança) */}
            <div className="rounded-2xl bg-white/10 border border-white/15 p-4 text-sm md:text-base text-white/85 mb-4 flex gap-3 items-start text-left">
              <Lightbulb className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-amber-300 mb-1">
                  Como jogar
                </div>
                {intro.comoJogar}
              </div>
            </div>

            {/* Exemplo passo-a-passo — o "modelo de aula" antes dos exercícios */}
            <div className="rounded-2xl bg-emerald-500/10 border border-emerald-300/30 p-4 text-sm md:text-base text-white/90 mb-4 text-left">
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-300 mb-2">
                Exemplo — como se faz uma rodada
              </div>
              <ol className="space-y-1.5 leading-snug">
                {intro.exemplo.passos.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
              {intro.exemplo.dica && (
                <div className="mt-3 rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-xs md:text-sm text-white/85">
                  <span className="font-black text-emerald-200">Dica: </span>
                  {intro.exemplo.dica}
                </div>
              )}
            </div>

            {/* Para os pais / adulto que acompanha */}
            <div className="rounded-2xl bg-sky-500/10 border border-sky-300/30 p-4 text-xs md:text-sm text-white/85 mb-6 text-left">
              <div className="text-[10px] font-black uppercase tracking-widest text-sky-300 mb-1">
                Para os pais / adulto que acompanha
              </div>
              <p className="leading-snug">{intro.paraPais}</p>
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
            onClick={() => {
              limparTimers();
              parar();
              proximaRodada(nivel);
            }}
            className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center"
            aria-label="Pular esta pergunta"
            title="Pular esta pergunta"
          >
            <SkipForward className="w-5 h-5" />
          </button>
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

      {/* Fase D · Modelagem visual — grafema grande sem fala de som isolado */}
      <AnimatePresence>
        {modelagem && feedback === "erro" && (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            className="mx-auto mt-3 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
              A pista é
            </span>
              <div
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-amber-300 to-orange-500 text-[#3A1F5C] shadow-2xl flex items-center justify-center border-4 border-white/40 active:scale-95 hover:scale-105 transition-transform"
            >
              <motion.span
                key={modelagem}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 0.9, repeat: 2 }}
                className="text-6xl sm:text-7xl font-black leading-none"
              >
                {modelagem}
              </motion.span>
              </div>
            <span className="text-xs font-bold text-white/80">
              olhe a pista para tentar de novo
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
        {rodada.instrucaoVisual && (
          <div className="w-full max-w-2xl rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-center shadow">
            <p className="text-lg sm:text-2xl font-black text-white leading-tight">
              {textoPergunta}
            </p>
          </div>
        )}

        {/* Sílabas visíveis (fusão / segmentação): chips grandes que a criança
            observa antes de responder. Não há áudio de sílabas isoladas para evitar leitura errada. */}
        {rodada.silabas && rodada.silabas.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
              {rodada.tipo === "fusao"
                ? "Junte os pedacinhos"
                : "Pedacinhos da palavra"}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {rodada.silabas.map((s, i) => (
                <div
                  key={`${s}-${i}`}
                  className="min-w-[3.5rem] px-4 py-3 rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-[#3A1F5C] shadow-xl border-2 border-white/40 active:scale-95 hover:scale-105 transition-transform text-3xl sm:text-4xl font-black leading-none"
                >
                  {s.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Alvo visível: só mostra quando a resposta REALMENTE começa com o foco. */}
        {rodada.foco &&
          !usaGridNumero &&
          rodada.foco.length <= 3 &&
          TIPOS_COMECA_COM.has(rodada.tipo) && (
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
                Toque na imagem que começa com
              </span>
              <div
                className="min-w-[7rem] px-6 py-3 rounded-3xl bg-gradient-to-br from-amber-300 to-orange-500 text-[#3A1F5C] shadow-2xl border-4 border-white/40 active:scale-95 hover:scale-105 transition-transform flex items-center gap-3"
              >
                <span className="text-6xl sm:text-7xl font-black leading-none">
                  {rodada.foco.toUpperCase()}
                </span>
              </div>
            </div>
          )}

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
            <span className="mt-1 px-4 py-1.5 rounded-full bg-white text-[#3A1F5C] text-2xl sm:text-3xl font-black tracking-wide shadow-lg border-2 border-amber-300">
              {rodada.imagens[0].toUpperCase()}
            </span>
          </div>
        )}


        {usaGridNumero ? (
          <>
            <div className="flex flex-col items-center gap-2">
              <ImgChip
                nome={rodada.imagens[0]}
                tamanho="lg"
                onClick={() => falar(rodada.imagens[0].toLowerCase())}
              />
              <span className="mt-1 px-4 py-1.5 rounded-full bg-white text-[#3A1F5C] text-2xl sm:text-3xl font-black tracking-wide shadow-lg border-2 border-amber-300">
                {rodada.imagens[0].toUpperCase()}
              </span>
            </div>
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
