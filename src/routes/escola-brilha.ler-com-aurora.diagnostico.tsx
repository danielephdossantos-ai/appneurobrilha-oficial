import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, ArrowRight, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";

/**
 * T1 — Diagnóstico Dia 0 (Ler com Aurora)
 * ----------------------------------------
 * Uma missão inicial que mede:
 *  - Reconhecimento de letras (identificar letra pelo som)
 *  - Consciência fonêmica básica (som inicial da palavra)
 *  - Leitura de 5 palavras CV
 * E recomenda a fase de entrada da trilha.
 */

export const Route = createFileRoute("/escola-brilha/ler-com-aurora/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico · Ler com Aurora" },
      {
        name: "description",
        content:
          "Avaliação inicial de leitura em 3 blocos: letras, sons e palavras. Recomenda a fase certa da trilha para começar.",
      },
    ],
  }),
  component: DiagnosticoDia0,
});

type Bloco = "intro" | "letras" | "fonemas" | "palavras" | "resultado";

interface Pergunta {
  fala: string; // o que Aurora diz
  opcoes: string[]; // 3 opções (letras, palavras ou imagens-texto)
  correta: number;
  ajuda?: string;
}

const BLOCO_LETRAS: Pergunta[] = [
  { fala: "Toque na letra A", opcoes: ["A", "E", "O"], correta: 0 },
  { fala: "Toque na letra M", opcoes: ["N", "M", "W"], correta: 1 },
  { fala: "Toque na letra S", opcoes: ["Z", "C", "S"], correta: 2 },
  { fala: "Toque na letra P", opcoes: ["P", "B", "D"], correta: 0 },
  { fala: "Toque na letra L", opcoes: ["I", "T", "L"], correta: 2 },
];

const BLOCO_FONEMAS: Pergunta[] = [
  { fala: "Qual palavra começa com o som /f/? Fogo, Bola ou Casa?", opcoes: ["FOGO", "BOLA", "CASA"], correta: 0 },
  { fala: "Qual começa com o som /m/? Sapo, Mesa ou Pato?", opcoes: ["SAPO", "MESA", "PATO"], correta: 1 },
  { fala: "Qual começa com o som /s/? Lua, Vaca ou Sol?", opcoes: ["LUA", "VACA", "SOL"], correta: 2 },
  { fala: "Qual começa com o som /p/? Pé, Rã ou Gato?", opcoes: ["PÉ", "RÃ", "GATO"], correta: 0 },
  { fala: "Qual termina com o som /a/? Casa, Peixe ou Sol?", opcoes: ["CASA", "PEIXE", "SOL"], correta: 0 },
];

const BLOCO_PALAVRAS: Pergunta[] = [
  { fala: "Leia e toque na palavra que diz BOLA", opcoes: ["BOLA", "BOLO", "BALA"], correta: 0 },
  { fala: "Leia e toque na palavra que diz GATO", opcoes: ["GALO", "GATO", "PATO"], correta: 1 },
  { fala: "Leia e toque na palavra que diz LUA", opcoes: ["LÁ", "LUA", "RUA"], correta: 1 },
  { fala: "Leia e toque na palavra que diz FACA", opcoes: ["FOCA", "FADA", "FACA"], correta: 2 },
  { fala: "Leia e toque na palavra que diz PIPA", opcoes: ["PIPA", "PATO", "POTE"], correta: 0 },
];

function DiagnosticoDia0() {
  const navigate = useNavigate();
  const [bloco, setBloco] = useState<Bloco>("intro");
  const [idx, setIdx] = useState(0);
  const [acLetras, setAcLetras] = useState(0);
  const [acFonemas, setAcFonemas] = useState(0);
  const [acPalavras, setAcPalavras] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [respondeu, setRespondeu] = useState(false);

  function falar(t: string) {
    stopSpeaking();
    void speakChunked(t, { rate: 0.95 });
  }

  const perguntas =
    bloco === "letras" ? BLOCO_LETRAS : bloco === "fonemas" ? BLOCO_FONEMAS : bloco === "palavras" ? BLOCO_PALAVRAS : [];
  const q = perguntas[idx];

  function responder(i: number) {
    if (respondeu || !q) return;
    setEscolha(i);
    setRespondeu(true);
    const acertou = i === q.correta;
    if (acertou) {
      if (bloco === "letras") setAcLetras((n) => n + 1);
      if (bloco === "fonemas") setAcFonemas((n) => n + 1);
      if (bloco === "palavras") setAcPalavras((n) => n + 1);
      falar("Isso mesmo!");
    } else {
      falar(`A resposta certa era: ${q.opcoes[q.correta]}`);
    }
  }

  function proxima() {
    setEscolha(null);
    setRespondeu(false);
    if (idx < perguntas.length - 1) {
      setIdx(idx + 1);
    } else {
      // trocar de bloco
      if (bloco === "letras") {
        setBloco("fonemas");
        setIdx(0);
      } else if (bloco === "fonemas") {
        setBloco("palavras");
        setIdx(0);
      } else if (bloco === "palavras") {
        // salva resultado
        try {
          localStorage.setItem(
            "eb.ler-aurora.diagnostico",
            JSON.stringify({
              letras: acLetras,
              fonemas: acFonemas,
              palavras: acPalavras,
              feitoEm: new Date().toISOString(),
            }),
          );
        } catch {
          /* ignore */
        }
        setBloco("resultado");
      }
    }
  }

  function recomendarFase(): { fase: number; nome: string; motivo: string; slug: string } {
    // Regras simples baseadas em % de acerto por bloco
    if (acPalavras >= 4) {
      return {
        fase: 4,
        nome: "Fluência e Compreensão",
        motivo: "Você já lê palavras curtas com facilidade — bora treinar a leitura de frases.",
        slug: "f4-s1-d1-frase-simples",
      };
    }
    if (acPalavras >= 2 || acFonemas >= 4) {
      return {
        fase: 3,
        nome: "Decodificação Silábica",
        motivo: "Você já conhece os sons — vamos juntar sílabas para formar palavras.",
        slug: "f3-s1-d1-familia-p",
      };
    }
    if (acFonemas >= 2 || acLetras >= 4) {
      return {
        fase: 2,
        nome: "Princípio Alfabético",
        motivo: "Você reconhece letras — agora vamos ligar cada letra ao seu som.",
        slug: "f2-s1-d1-som-do-a",
      };
    }
    return {
      fase: 1,
      nome: "Consciência Fonológica",
      motivo: "Vamos começar do começo: ouvir e brincar com os sons das palavras.",
      slug: "f1-s1-d1-escuta-viva",
    };
  }

  // ---------- INTRO ----------
  if (bloco === "intro") {
    return (
      <Shell>
        <Link to="/escola-brilha/ler-com-aurora" className="text-white/80 text-sm">
          ◂ Voltar
        </Link>
        <div className="mt-6 rounded-3xl bg-white/10 border-2 border-white/15 p-6 text-white">
          <div className="flex items-center gap-2 text-yellow-300 mb-2">
            <Sparkles className="h-5 w-5" />
            <p className="text-[11px] font-black uppercase tracking-widest">Diagnóstico Dia 0</p>
          </div>
          <h1 className="text-3xl font-black leading-tight">Vamos ver por onde começar?</h1>
          <p className="mt-3 text-white/90 leading-relaxed">
            Aurora vai fazer <b>15 perguntinhas</b> divididas em 3 blocos:
            <br />
            1️⃣ Reconhecer letras
            <br />
            2️⃣ Ouvir sons das palavras
            <br />
            3️⃣ Ler palavras curtas
          </p>
          <p className="mt-3 text-white/80 text-sm">
            Não precisa se preocupar em acertar tudo — a gente vai usar o resultado só para escolher a
            fase certa para começar sua trilha. Leva uns 5 minutinhos.
          </p>
          <button
            onClick={() => {
              setBloco("letras");
              falar("Vamos começar! Escute com atenção e toque na resposta certa.");
            }}
            className="mt-6 w-full h-14 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 text-orange-950 font-black text-lg flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            Começar diagnóstico <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </Shell>
    );
  }

  // ---------- RESULTADO ----------
  if (bloco === "resultado") {
    const rec = recomendarFase();
    const gradientes: Record<number, string> = {
      1: "from-amber-500 to-orange-600",
      2: "from-violet-500 to-indigo-700",
      3: "from-sky-500 to-sky-900",
      4: "from-rose-500 to-rose-900",
    };
    return (
      <Shell>
        <div className="mt-6 rounded-3xl bg-white/10 border-2 border-white/15 p-6 text-white">
          <p className="text-[11px] font-black uppercase tracking-widest text-yellow-300">
            Resultado do diagnóstico
          </p>
          <h1 className="text-2xl font-black mt-1">Aqui está seu ponto de partida</h1>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <ScoreCard label="Letras" v={acLetras} t={5} />
            <ScoreCard label="Sons" v={acFonemas} t={5} />
            <ScoreCard label="Palavras" v={acPalavras} t={5} />
          </div>

          <div className={`mt-6 rounded-2xl p-5 bg-gradient-to-br ${gradientes[rec.fase]} shadow-xl`}>
            <p className="text-[10px] font-black tracking-widest text-white/85">RECOMENDADO PARA VOCÊ</p>
            <h2 className="text-2xl font-black leading-tight mt-1">Fase {rec.fase} · {rec.nome}</h2>
            <p className="text-white/90 text-sm mt-2">{rec.motivo}</p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2">
            <Link
              to="/escola-brilha/ler-com-aurora/$aula"
              params={{ aula: rec.slug }}
              className="h-14 rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-500 text-emerald-950 font-black text-base flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Começar Fase {rec.fase} agora <ArrowRight className="h-5 w-5" />
            </Link>
            <button
              onClick={() => navigate({ to: "/escola-brilha/ler-com-aurora" })}
              className="h-12 rounded-2xl bg-white/10 border-2 border-white/15 text-white font-bold text-sm"
            >
              Ver a trilha completa
            </button>
            <Link
              to="/escola-brilha/ler-com-aurora/painel"
              className="h-12 rounded-2xl bg-white/5 border-2 border-white/10 text-white/85 font-bold text-sm flex items-center justify-center"
            >
              Abrir Painel do Adulto
            </Link>
          </div>
        </div>
      </Shell>
    );
  }

  // ---------- BLOCO DE PERGUNTAS ----------
  const totalNoBloco = perguntas.length;
  const rotuloBloco =
    bloco === "letras" ? "Bloco 1 · Letras" : bloco === "fonemas" ? "Bloco 2 · Sons" : "Bloco 3 · Palavras";

  return (
    <Shell>
      <div className="pt-4">
        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/75">
          <span>{rotuloBloco}</span>
          <span>{idx + 1} / {totalNoBloco}</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-black/25 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-300 to-lime-400 transition-all"
            style={{ width: `${((idx + (respondeu ? 1 : 0)) / totalNoBloco) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-5 rounded-3xl bg-white/10 border-2 border-white/15 p-5 text-white">
        <button
          onClick={() => falar(q.fala)}
          className="w-full flex items-center gap-3 rounded-2xl bg-black/25 px-4 py-3 active:scale-[0.98]"
        >
          <span className="w-10 h-10 rounded-full bg-yellow-300 text-orange-900 grid place-items-center">
            <Volume2 className="h-5 w-5" />
          </span>
          <span className="text-left font-bold text-sm leading-snug">{q.fala}</span>
        </button>

        <div className="mt-4 space-y-2">
          <AnimatePresence>
            {q.opcoes.map((op, i) => {
              const certa = i === q.correta;
              const escolhida = i === escolha;
              const cor = !respondeu
                ? "bg-white/10 border-white/15"
                : certa
                  ? "bg-emerald-500/30 border-emerald-300/70"
                  : escolhida
                    ? "bg-rose-500/30 border-rose-300/70"
                    : "bg-white/5 border-white/10 opacity-60";
              return (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => responder(i)}
                  disabled={respondeu}
                  className={`w-full text-left px-4 py-4 rounded-2xl border-2 font-black text-2xl flex items-center gap-3 ${cor}`}
                >
                  <span className="flex-1 text-center">{op}</span>
                  {respondeu && certa && <CheckCircle2 className="h-6 w-6 text-emerald-200" />}
                  {respondeu && escolhida && !certa && <XCircle className="h-6 w-6 text-rose-200" />}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {respondeu && (
        <button
          onClick={proxima}
          className="mt-4 w-full h-14 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 text-orange-950 font-black text-base flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          {idx < totalNoBloco - 1
            ? "Próxima"
            : bloco === "palavras"
              ? "Ver resultado"
              : "Ir para o próximo bloco"}
          <ArrowRight className="h-5 w-5" />
        </button>
      )}
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-500 via-orange-600 to-purple-800">
      <div className="max-w-md mx-auto px-4 py-6">{children}</div>
    </div>
  );
}

function ScoreCard({ label, v, t }: { label: string; v: number; t: number }) {
  const pct = v / t;
  const cor = pct >= 0.8 ? "bg-emerald-500/30 border-emerald-300/70" : pct >= 0.4 ? "bg-amber-500/30 border-amber-300/70" : "bg-rose-500/30 border-rose-300/70";
  return (
    <div className={`rounded-2xl border-2 p-3 ${cor}`}>
      <div className="text-[10px] font-black uppercase tracking-widest opacity-80">{label}</div>
      <div className="text-2xl font-black mt-1">{v}/{t}</div>
    </div>
  );
}
