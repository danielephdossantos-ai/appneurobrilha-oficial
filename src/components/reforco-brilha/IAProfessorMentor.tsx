import { useState, useEffect } from "react";
import { Sparkles, Send, Brain, Loader2, PlayCircle, RotateCcw, Database, Search } from "lucide-react";
import { Card } from "@/components/Layout";
import { useServerFn } from "@tanstack/react-start";
import { gerarAulaReforcoIA } from "@/lib/ia-mentor-reforco.functions";
import { toast } from "sonner";
import { useAppState } from "@/core/store";
import { searchReforcoBrilha } from "@/lib/reforco-brilha-search";


export function IAProfessorMentor({ onAbrirAula }: { onAbrirAula?: (id: string, titulo: string) => void }) {
  const { activeChild } = useAppState();
  const [dificuldade, setDificuldade] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<any>(null);
  const gerar = useServerFn(gerarAulaReforcoIA);

  const handleGerar = async () => {
    const query = dificuldade.trim();
    if (!query) {
      toast.error("Por favor, descreva o que o seu filho precisa aprender.");
      return;
    }
    if (!activeChild) {
      toast.error("Nenhuma criança selecionada.");
      return;
    }

    setLoading(true);
    try {
      // Salvar última busca
      localStorage.setItem("rb_last_search", query);
      
      // 1. Lógica Unificada: Consultar banco interno/BNCC primeiro
      let bnccContext = "";
      try {
        const searchRes = await searchReforcoBrilha(query);
        if (searchRes.main) {
          bnccContext = `Habilidade correspondente encontrada: ${searchRes.main.nome}. Descrição: ${searchRes.main.descricao || "N/A"}. Palavras-chave: ${searchRes.main.palavras_chave?.join(", ") || "N/A"}`;
        }
      } catch (e) {
        console.warn("Busca BNCC falhou, seguindo apenas com IA:", e);
      }

      // 2. Chamar Gemini unindo tema + BNCC + Anamnese
      const res = await gerar({
        data: {
          dificuldade: query,
          criancaId: activeChild.id,
          bnccContext
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
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleGerar();
                }
              }}
              placeholder="Ex: subtraçăo com reserva, letra S com som de Z, ou descreva uma dificuldade..."
              className="w-full min-h-[140px] p-5 pl-12 rounded-2xl bg-white border-2 border-border focus:border-primary outline-none text-base transition-all resize-none shadow-sm"
            />
            <Search className="absolute left-4 top-5 text-muted-foreground/50 h-5 w-5" />
            <div className="absolute bottom-3 right-3 text-[10px] font-bold text-muted-foreground uppercase bg-secondary/50 px-2 py-0.5 rounded-md">
              Campo Único de Busca
            </div>
          </div>
          
          <button
            onClick={handleGerar}
            disabled={loading || !dificuldade.trim()}
            className="w-full py-5 rounded-2xl bg-primary text-white font-black text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:scale-100"
          >
            {loading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <>
                <Send className="h-5 w-5" />
                GERAR ROTEIRO COMPLETO
              </>
            )}
          </button>
          
          <p className="text-[11px] text-center text-muted-foreground italic px-4">
            A IA unirá o tema, as diretrizes da BNCC e a anamnese para criar um roteiro profundo e personalizado.
          </p>
        </div>
      ) : (
        <div className="space-y-6 animate-in zoom-in-95 duration-500">
          <div className="p-5 rounded-2xl bg-white border-2 border-primary/20 shadow-inner">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">
                {resultado.origem === "reutilizada" ? "Sistema Contínuo (Reutilizado)" : "Roteiro Gerado pelo Mentor"}
              </span>
              {resultado.origem === "reutilizada" && (
                <Database className="h-4 w-4 text-emerald-500" />
              )}
            </div>
            
            <h4 className="text-xl font-black text-foreground mb-2 leading-tight">{resultado.aula.titulo}</h4>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {resultado.aula.objetivo}
            </p>

            <div className="space-y-3">
              {resultado.aula.capitulo1 && (
                <div className="p-4 rounded-xl bg-secondary/20 border border-border/50">
                  <div className="text-[10px] font-black uppercase text-primary mb-1">Destaque do Roteiro</div>
                  <div className="text-sm font-medium line-clamp-3">{resultado.aula.capitulo1.conteudo}</div>
                </div>
              )}
            </div>

            <button
              onClick={() => onAbrirAula?.(resultado.id, resultado.aula.titulo)}
              className="w-full mt-6 py-4 rounded-xl bg-emerald-500 text-white font-black text-lg flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <PlayCircle className="h-6 w-6" />
              ABRIR ROTEIRO COMPLETO
            </button>
          </div>

          <button
            onClick={() => {
              setResultado(null);
              setDificuldade("");
            }}
            className="w-full flex items-center justify-center gap-2 text-sm font-black text-muted-foreground hover:text-primary transition-colors py-2"
          >
            <RotateCcw className="h-4 w-4" />
            NOVA PESQUISA PEDAGÓGICA
          </button>
        </div>
      )}
    </Card>
  );
}
