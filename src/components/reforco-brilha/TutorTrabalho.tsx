import { useState, useRef, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Sparkles, Send, Loader2, X, GraduationCap } from "lucide-react";
import { conversarTutorIA } from "@/lib/tutor-ia.functions";
import { useAppState } from "@/core/store";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

interface Props {
  tema: string;
  materia?: string;
  modo?: "trabalho" | "plano-diario" | "missao-prova";
  diasAteProva?: number;
  onFechar: () => void;
}

const LIMITE_DIARIO = 20;

function chaveLimite(childId: string | undefined) {
  const hoje = new Date().toISOString().slice(0, 10);
  return `tutor-brilha:uso:${childId ?? "anon"}:${hoje}`;
}

function lerUso(childId: string | undefined): number {
  try {
    const v = localStorage.getItem(chaveLimite(childId));
    return v ? parseInt(v, 10) || 0 : 0;
  } catch {
    return 0;
  }
}

function incrementarUso(childId: string | undefined): number {
  const novo = lerUso(childId) + 1;
  try {
    localStorage.setItem(chaveLimite(childId), String(novo));
  } catch {}
  return novo;
}

export function TutorTrabalho({ tema, materia, modo = "trabalho", diasAteProva, onFechar }: Props) {
  const { activeChild } = useAppState();
  const conversar = useServerFn(conversarTutorIA);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [encerrado, setEncerrado] = useState(false);
  const [uso, setUso] = useState<number>(() => lerUso(activeChild?.id));


  // Mensagem inicial automática
  useEffect(() => {
    if (msgs.length === 0 && tema.trim()) {
      const inicial =
        modo === "trabalho"
          ? "Oi! Quero começar a montar meu trabalho."
          : modo === "missao-prova"
            ? "Oi! Quero estudar pra prova."
            : "Oi! Vamos montar meu plano de estudo de hoje?";
      enviar(inicial, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, carregando]);

  async function enviar(texto?: string, inicial = false) {
    const mensagem = (texto ?? input).trim();
    if (!mensagem || carregando || encerrado) return;
    if (!tema.trim()) {
      toast.error("Defina o tema do trabalho primeiro");
      return;
    }

    const usoAtual = lerUso(activeChild?.id);
    if (usoAtual >= LIMITE_DIARIO) {
      setEncerrado(true);
      setMsgs((m) => [
        ...m,
        {
          role: "assistant",
          content: `🌙 Por hoje você já usou suas ${LIMITE_DIARIO} mensagens com o Tutor Brilha. Amanhã a gente continua! 💛`,
        },
      ]);
      return;
    }


    const novasMsgs: Msg[] = inicial
      ? msgs
      : [...msgs, { role: "user", content: mensagem }];
    if (!inicial) {
      setMsgs(novasMsgs);
      setInput("");
    }
    setCarregando(true);
    const novoUso = incrementarUso(activeChild?.id);
    setUso(novoUso);


    try {
      const res = await conversar({
        data: {
          modo,
          tema,
          materia: materia || undefined,
          idade: activeChild?.idade,
          serie: (activeChild as any)?.serie,
          nome: activeChild?.nome,
          diasAteProva,
          historico: novasMsgs.slice(-20),
          mensagem,
        },
      });

      if (!res.ok) {
        setMsgs((m) => [...m, { role: "assistant", content: res.mensagem }]);
        if (res.motivo === "creditos") setEncerrado(true);
        return;
      }

      setMsgs((m) => [...m, { role: "assistant", content: res.resposta }]);
      if (res.encerrarHoje) setEncerrado(true);
    } catch (e) {
      console.error(e);
      setMsgs((m) => [
        ...m,
        {
          role: "assistant",
          content: "Tive um probleminha pra pensar agora. Tenta de novo em instantes!",
        },
      ]);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-2 sm:p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl border-4 border-amber-300 shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b-2 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-t-xl">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 text-white p-2 rounded-xl">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-black text-amber-900 flex items-center gap-1">
                Tutor Brilha <Sparkles className="h-3.5 w-3.5" />
              </p>
              <p className="text-[11px] text-amber-700">
                {modo === "trabalho"
                  ? "Vamos montar seu trabalho juntos"
                  : modo === "missao-prova"
                    ? "Vamos estudar pra prova juntos"
                    : "Plano diário de estudo"}
              </p>
            </div>
          </div>
          <button
            onClick={onFechar}
            className="p-1.5 rounded-lg hover:bg-amber-100 text-amber-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Conversa */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px]">
          {msgs.length === 0 && !carregando && (
            <p className="text-center text-sm text-muted-foreground italic">
              Preparando seu tutor...
            </p>
          )}
          {msgs.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap leading-relaxed ${
                  m.role === "user"
                    ? "bg-amber-600 text-white"
                    : "bg-amber-50 border-2 border-amber-200 text-amber-950"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {carregando && (
            <div className="flex justify-start">
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 text-amber-700 text-sm">
                <Loader2 className="h-4 w-4 animate-spin" /> pensando...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t-2 border-amber-200 p-3 bg-amber-50/40 rounded-b-xl">
          {encerrado ? (
            <div className="text-center space-y-2">
              <p className="text-sm font-bold text-amber-900">
                🌙 Por hoje sua aula terminou!
              </p>
              <p className="text-xs text-amber-700">
                Continue explorando outras categorias do app. Amanhã a gente continua! 💛
              </p>
              <button
                onClick={onFechar}
                className="mt-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2 rounded-lg"
              >
                Fechar tutor
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && enviar()}
                disabled={carregando}
                placeholder="Escreva sua resposta..."
                className="flex-1 text-sm border-2 border-amber-200 rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500 disabled:opacity-50"
              />
              <button
                onClick={() => enviar()}
                disabled={carregando || !input.trim()}
                className="bg-amber-600 hover:bg-amber-700 text-white px-3 rounded-lg disabled:opacity-50"
              >
                {carregando ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
