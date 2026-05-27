import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { useState, useRef } from "react";
import { Camera, Upload, Loader2, BookOpen, CheckCircle2, RotateCcw, Sparkles, Play, Video, Volume2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/professor-ia")({
  component: ProfessorIA,
});

function ProfessorIA() {
  const { activeChild } = useAppState();
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [analise, setAnalise] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCapture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setImage(base64);
      processarFoto(base64.split(",")[1]);
    };
    reader.readAsDataURL(file);
  };

  const processarFoto = async (base64: string) => {
    if (!activeChild) return;
    setLoading(true);
    setAnalise(null);
    try {
      const { data, error } = await supabase.functions.invoke("neurobrilha-ai", {
        body: {
          mode: "professor-foto",
          child: activeChild,
          image: base64,
        },
      });

      if (error) throw error;
      setAnalise(data);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao analisar a foto. Tente novamente.");
      setImage(null);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setImage(null);
    setAnalise(null);
  };

  if (!activeChild) return <Shell><p>Selecione uma criança.</p></Shell>;

  const lerTexto = () => {
    if (!analise?.explicacao) return;
    const utterance = new SpeechSynthesisUtterance(analise.explicacao);
    utterance.lang = "pt-BR";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Shell>
      <PageHeader 
        emoji="📸" 
        title="Professor IA" 
        subtitle="Tire uma foto da sua tarefa para a gente aprender juntos!" 
      />

      <AnimatePresence mode="wait">
        {!image && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="flex flex-col items-center justify-center p-12 border-dashed border-4 border-primary/20 bg-primary/5">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Camera className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Pronto para começar?</h3>
              <p className="text-muted-foreground text-center mb-8 max-w-sm">
                Aponte a câmera para o seu caderno ou livro. Eu vou te explicar tudinho!
              </p>
              
              <div className="flex flex-col w-full gap-3 max-w-xs">
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="btn-tap w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-glow"
                >
                  <Camera className="h-6 w-6" /> Tirar Foto
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleCapture} 
                  accept="image/*" 
                  capture="environment" 
                  className="hidden" 
                />
                
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="btn-tap w-full bg-secondary text-secondary-foreground py-3 rounded-2xl font-bold flex items-center justify-center gap-2"
                >
                  <Upload className="h-5 w-5" /> Escolher da Galeria
                </button>
              </div>
            </Card>
          </motion.div>
        )}

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center p-12 text-center"
          >
            <div className="relative mb-8">
              <div className="h-32 w-32 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center text-4xl">
                🔎
              </div>
            </div>
            <h2 className="text-2xl font-bold">Lendo sua tarefa...</h2>
            <p className="text-muted-foreground mt-2">
              Estou usando meus superpoderes para entender o que você precisa fazer!
            </p>
          </motion.div>
        )}

        {analise && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-success/20 flex items-center justify-center text-2xl">
                  {analise.materia === 'Matemática' ? '🔢' : '📚'}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{analise.materia}</h3>
                  <p className="text-sm text-muted-foreground">Tarefa identificada com sucesso</p>
                </div>
              </div>
              <button onClick={reset} className="p-2 hover:bg-muted rounded-full transition-colors">
                <RotateCcw className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-success/5 border-none shadow-soft relative">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold flex items-center gap-2 text-primary">
                  <BookOpen className="h-5 w-5" /> Explicação do Professor
                </h4>
                {(activeChild.diagnostico === 'dislexia' || activeChild.flags?.preferAudio) && (
                  <button 
                    onClick={lerTexto}
                    className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                    title="Ouvir explicação"
                  >
                    <Volume2 className="h-5 w-5" />
                  </button>
                )}
              </div>
              <p className="text-lg leading-relaxed whitespace-pre-wrap">
                {analise.explicacao}
              </p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" /> Passo a Passo
                </h4>
                <div className="space-y-3">
                  {analise.passos?.map((passo: string, idx: number) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                      <div className="h-8 w-8 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <p className="font-medium">{passo}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-3">
                    <Sparkles className="h-5 w-5 text-sun" /> Tente este agora!
                  </h4>
                  <Card className="bg-sun/10 border-sun/20">
                    <p className="font-bold text-sun-foreground text-lg">
                      {analise.exercicio_similar}
                    </p>
                  </Card>
                </div>

                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-3">
                    <Video className="h-5 w-5 text-destructive" /> Aprenda com vídeo
                  </h4>
                  <a 
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(analise.video_tema + " para crianças")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive-foreground hover:bg-destructive/15 transition-colors group"
                  >
                    <div>
                      <div className="font-bold">Ver no YouTube</div>
                      <div className="text-xs opacity-70">Busca sugerida: {analise.video_tema}</div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-destructive flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 fill-current" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <button 
              onClick={reset}
              className="w-full py-4 rounded-2xl border-2 border-dashed border-border text-muted-foreground font-bold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
            >
              <Camera className="h-5 w-5" /> Tirar outra foto
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Shell>
  );
}
