import { useState } from "react";
import { Sparkles, Send, Brain, Loader2, PlayCircle, RotateCcw, Database } from "lucide-react";
import { Card } from "@/components/Layout";
import { useServerFn } from "@tanstack/react-start";
import { gerarAulaReforcoIA } from "@/lib/ia-mentor-reforco.functions";
import { toast } from "sonner";
import { useAppState } from "@/core/store";

interface Props {
  onAbrirAula?: (id: string, titulo: string) => void;
}

export function IAProfessorMentor({ onAbrirAula }: Props) {
  const { activeChild } = useAppState();
  const [dificuldade, setDificuldade] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<any>(null);
  const gerar = useServerFn(gerarAulaReforcoIA);

  const handleGerar = async () => {
    if (!dificuldade.trim()) {
      toast.error("Por favor, descreva o que o seu filho precisa aprender.");
      return;
    }
    if (!activeChild) {
      toast.error("Nenhuma criança selecionada.");
      return;
    }

    setLoading(true);
    try {
      const res = await gerar({
        data: {
          dificuldade,
          criancaId: activeChild.id
        }
      });
      setResultado(res);
      if (res.origem === "reutilizada") {
        toast.success("Encontramos atividades ideais já validadas!");
      } else {
        toast.success("Nova trilha de atividades gerada pela IA Mentor.");
      }
    } catch (e: any) {
      console.error(e);
      toast.error("Erro ao gerar aula. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-fuchsia-50/30 to-background shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-12 w-12 rounded-2xl bg-primary text-white grid place-items-center shrink-0 shadow-glow">
          <Brain className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-black text-foreground flex items-center gap-2">
            IA PROFESSOR MENTOR
            <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
          </h3>
          <p className="text-sm text-muted-foreground">O que seu filho precisa aprender hoje?</p>
        </div>
      </div>

      {!resultado ? (
        <div className="space-y-4 animate-in fade-in duration-500">
          <div className="relative">
            <textarea
              value={dificuldade}
              onChange={(e) => setDificuldade(e.target.value)}
              placeholder="Ex: Meu filho está com dificuldade em subtrair números com reserva, ou ele precisa aprender a reconhecer as letras B e D..."
              className="w-full min-h-[120px] p-4 rounded-2xl bg-white border-2 border-border focus:border-primary outline-none text-base transition-all resize-none shadow-sm"
            />
            <div className="absolute bottom-3 right-3 text-[10px] font-bold text-muted-foreground uppercase">
              Escrita Livre
            </div>
          </div>
          
          <button
            onClick={handleGerar}
            disabled={loading || !dificuldade.trim()}
            className="w-full py-4 rounded-2xl bg-primary text-white font-black text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
          >
            {loading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <>
                <Send className="h-5 w-5" />
                GERAR AULA E ATIVIDADES
              </>
            )}
          </button>
          
          <p className="text-[11px] text-center text-muted-foreground italic">
            A IA analisará a dificuldade e criará uma trilha única, salvando-a para ajudar outras crianças com o mesmo desafio.
          </p>
        </div>
      ) : (
        <div className="space-y-6 animate-in zoom-in-95 duration-500">
          <div className="p-4 rounded-2xl bg-white border-2 border-primary/20 shadow-inner">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">
                {resultado.origem === "reutilizada" ? "Sistema Contínuo (Reutilizado)" : "Trilha Inédita Gerada"}
              </span>
              {resultado.origem === "reutilizada" && (
                <Database className="h-4 w-4 text-emerald-500" />
              )}
            </div>
            
            <h4 className="text-lg font-black text-foreground mb-2">{resultado.aula.titulo}</h4>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {resultado.aula.objetivo}
            </p>

            <div className="space-y-3">
              {resultado.aula.passos.map((passo: any, idx: number) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50">
                  <div className="h-6 w-6 rounded-full bg-primary text-white text-[10px] font-bold grid place-items-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase text-primary tracking-tighter">{passo.tipo}</div>
                    <div className="text-sm font-medium">{passo.texto}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onAbrirAula?.(resultado.id, resultado.aula.titulo)}
              className="w-full mt-6 py-3 rounded-xl bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors shadow-md"
            >
              <PlayCircle className="h-5 w-5" />
              COMEÇAR ESTA MISSÃO
            </button>
          </div>

          <button
            onClick={() => {
              setResultado(null);
              setDificuldade("");
            }}
            className="w-full flex items-center justify-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            DESCREVER OUTRA DIFICULDADE
          </button>
        </div>
      )}
    </Card>
  );
}
