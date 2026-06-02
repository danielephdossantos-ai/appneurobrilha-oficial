import { createFileRoute } from "@tanstack/react-router";
import { Shell, Card } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { useState, useEffect, useRef } from "react";
import { Send, Sparkles, Loader2, Heart, Volume2, VolumeX, Camera, Upload, RotateCcw, BookOpen, CheckCircle2, Video, Play, MessageCircle, ExternalLink, ShieldAlert } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { SimpleMascotRenderer } from "@/components/rewards/SimpleMascotRenderer";
import { toast } from "sonner";
import { useMascot } from "@/contexts/MascotContext";

export const Route = createFileRoute("/amigo-virtual")({
  component: AmigoVirtual,
});

function AmigoVirtual() {
  const { activeChild } = useAppState();
  const { activeMascot } = useMascot();
  const mascotName = activeMascot?.mascot?.name || "Pip";
  const mascotPayload = activeMascot ? {
    name: activeMascot.mascot?.name,
    description: activeMascot.mascot?.description,
    category: activeMascot.mascot?.category,
    level: activeMascot.level,
    affinity: activeMascot.affinity,
  } : null;

  // Amigo Virtual States
  const [msgs, setMsgs] = useState<{ role: "ai" | "user"; t: string }[]>([
    { role: "ai", t: `Oi, ${activeChild?.nome ?? "amiguinho"}! 🌈 Eu sou o ${mascotName}, seu companheiro de verdade. Estou aqui para te ouvir e te dar um abraço virtual gigante! Como você está se sentindo agora?` },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"chat" | "professor">("chat");

  // Professor IA States
  const [image, setImage] = useState<string | null>(null);
  const [profLoading, setProfLoading] = useState(false);
  const [analise, setAnalise] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [msgs, activeTab]);

  const lerTexto = async (texto: string) => {
    if (!isAudioEnabled) return;

    // Tentativa de usar ElevenLabs via Edge Function se houver API Key, caso contrário usa nativo
    try {
      // Aqui poderíamos ter uma integração real com ElevenLabs via Edge Function
      // Por enquanto, manteremos o Web Speech mas com melhorias de voz amigável
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = "pt-BR";
      utterance.rate = 0.95;
      utterance.pitch = 1.3; // Mais agudo/amigável para crianças
      
      // Tentar encontrar uma voz feminina/doce se disponível
      const voices = window.speechSynthesis.getVoices();
      const brVoice = voices.find(v => v.lang.includes("pt-BR") && (v.name.includes("Google") || v.name.includes("Luciana")));
      if (brVoice) utterance.voice = brVoice;

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error("Erro na síntese de voz:", err);
    }
  };

  const send = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || !activeChild || isLoading) return;
    
    setIsLoading(true);
    const q = textToSend;
    const newMsgs = [...msgs, { role: "user" as const, t: q }];
    setMsgs(newMsgs);
    setInput("");
    
    try {
      const { data, error } = await supabase.functions.invoke("neurobrilha-ai", {
        body: {
          mode: "amigo-virtual",
          child: activeChild,
          mascot: mascotPayload,
          message: q,
          chatHistory: msgs.slice(-6).map(m => ({
            role: m.role === "ai" ? "assistant" : "user",
            content: m.t
          }))
        }
      });

      if (error) throw error;
      
      const response = data;
      setMsgs([...newMsgs, { role: "ai", t: response }]);
      lerTexto(response);
    } catch (err) {
      console.error(err);
      const errorMsg = "Eita, minha cabecinha de robô deu um nó! 😵‍💫 Mas eu ainda te amo! Tenta falar de novo?";
      setMsgs([...newMsgs, { role: "ai", t: errorMsg }]);
      lerTexto(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  // Professor IA Functions
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
    setProfLoading(true);
    setAnalise(null);
    try {
      const { data, error } = await supabase.functions.invoke("neurobrilha-ai", {
        body: {
          mode: "professor-foto",
          child: activeChild,
          mascot: mascotPayload,
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
      setProfLoading(false);
    }
  };

  const resetProf = () => {
    setImage(null);
    setAnalise(null);
  };

  const sentimentos = [
    { label: "Tô com medo 😨", value: "Estou com um pouco de medo..." },
    { label: "Tô triste 😢", value: "Estou me sentindo triste." },
    { label: "Tô com raiva 😡", value: "Estou com muita raiva!" },
    { label: "Tô cansado 😴", value: "Estou bem cansado." },
    { label: "Me ajuda? 🆘", value: "Eu preciso de ajuda para me acalmar." },
  ];

  if (!activeChild) return <Shell><p>Selecione uma criança.</p></Shell>;

  return (
    <Shell>
      <div className="max-w-2xl mx-auto flex flex-col h-[calc(100vh-180px)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 flex items-center justify-center">
              <SimpleMascotRenderer emoji={activeMascot?.mascot?.image_url || "🦄"} size={64} />
            </div>
            <div>
              <h2 className="text-xl font-black text-pink-600">{mascotName} · Amigo Virtual & Protetor</h2>
              <p className="text-[10px] font-medium text-pink-400">Sempre aqui por você! ✨</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsAudioEnabled(!isAudioEnabled)}
              className={`p-2 rounded-full ${isAudioEnabled ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-500"}`}
            >
              {isAudioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-white/50 backdrop-blur-sm p-1 rounded-2xl border border-pink-50 mb-4 shadow-sm">
          <button 
            onClick={() => setActiveTab("chat")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${activeTab === "chat" ? "bg-white text-pink-600 shadow-sm" : "text-gray-400 hover:text-pink-400"}`}
          >
            <MessageCircle size={18} /> Conversar
          </button>
          <button 
            onClick={() => setActiveTab("professor")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${activeTab === "professor" ? "bg-white text-pink-600 shadow-sm" : "text-gray-400 hover:text-pink-400"}`}
          >
            <Camera size={18} /> Estudar (IA)
          </button>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            {activeTab === "chat" ? (
              <motion.div 
                key="chat"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex-1 flex flex-col"
              >
                <div 
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 scrollbar-thin scrollbar-thumb-pink-200"
                >
                  {msgs.map((m, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, scale: 0.8, x: m.role === "user" ? 20 : -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[85%] rounded-[2rem] px-6 py-4 shadow-sm border-2 ${
                        m.role === "user" 
                          ? "bg-primary text-primary-foreground border-primary" 
                          : "bg-white text-gray-800 border-pink-100"
                      }`}>
                        {m.role === "ai" && (
                          <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="h-3 w-3 text-pink-400 fill-pink-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-pink-300">Amigo</span>
                          </div>
                        )}
                        <div className="text-lg font-medium leading-relaxed">
                          {m.t.split(/(\[VIDEO:.*?\]|\[PESQUISA:.*?\])/g).map((part, idx) => {
                            if (part.startsWith("[VIDEO:")) {
                              const query = part.replace("[VIDEO:", "").replace("]", "");
                              return (
                                <a 
                                  key={idx}
                                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(query + " para crianças")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 bg-red-100 text-red-600 px-2 py-0.5 rounded-lg text-sm font-bold mx-1"
                                >
                                  <Video size={14} /> Ver vídeo
                                </a>
                              );
                            }
                            if (part.startsWith("[PESQUISA:")) {
                              const query = part.replace("[PESQUISA:", "").replace("]", "");
                              return (
                                <a 
                                  key={idx}
                                  href={`https://www.google.com/search?q=${encodeURIComponent(query + " para crianças")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 bg-blue-100 text-blue-600 px-2 py-0.5 rounded-lg text-sm font-bold mx-1"
                                >
                                  <ExternalLink size={14} /> Pesquisar
                                </a>
                              );
                            }
                            return part;
                          })}
                        </div>
                        {m.role === "ai" && (
                          <div className="flex gap-2 mt-2">
                            <button 
                              onClick={() => lerTexto(m.t)}
                              className="text-pink-400 hover:text-pink-600 transition-colors"
                              title="Ouvir"
                            >
                              <Volume2 size={18} />
                            </button>
                            <button 
                              onClick={() => window.speechSynthesis.cancel()}
                              className="text-gray-300 hover:text-gray-500 transition-colors"
                              title="Parar leitura"
                            >
                              <VolumeX size={18} />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-pink-50 rounded-full px-6 py-3 border-2 border-pink-100 flex items-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin text-pink-400" />
                        <span className="text-pink-400 font-bold">Pensando com carinho...</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4 bg-white/50 backdrop-blur-sm p-4 rounded-3xl border border-pink-50 shadow-inner">
                  <div className="flex flex-wrap gap-2">
                    {sentimentos.map((s) => (
                      <button 
                        key={s.label} 
                        onClick={() => send(s.value)} 
                        disabled={isLoading}
                        className="btn-tap text-[10px] px-3 py-1.5 rounded-full bg-white border border-pink-100 text-pink-600 font-bold hover:bg-pink-50 hover:border-pink-200 disabled:opacity-50"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <input 
                      value={input} 
                      onChange={(e) => setInput(e.target.value)} 
                      onKeyDown={(e) => e.key === "Enter" && send()}
                      disabled={isLoading}
                      placeholder="Quer me contar algo? 🌸"
                      className="w-full p-4 pr-14 rounded-[1.5rem] bg-white border-2 border-pink-100 text-base font-medium focus:border-pink-300 outline-none transition-all placeholder:text-pink-200 disabled:opacity-50" 
                    />
                    <button 
                      onClick={() => send()} 
                      disabled={isLoading || !input.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-md hover:bg-pink-600 transition-colors disabled:bg-gray-200 disabled:shadow-none"
                    >
                      {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="professor"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-pink-200"
              >
                {!image && !profLoading && (
                  <Card className="flex flex-col items-center justify-center p-8 border-dashed border-2 border-pink-200 bg-pink-50/30">
                    <div className="h-16 w-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                      <Camera className="h-8 w-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-pink-600">Dúvidas na tarefa?</h3>
                    <p className="text-gray-500 text-center mb-6 text-sm">
                      Tire uma foto do seu caderno e eu te explico tudo!
                    </p>
                    
                    <div className="flex flex-col w-full gap-2 max-w-xs">
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="btn-tap w-full bg-pink-500 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Camera className="h-5 w-5" /> Tirar Foto
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
                        className="btn-tap w-full bg-white text-pink-500 border border-pink-100 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Upload className="h-5 w-5" /> Galeria
                      </button>
                    </div>
                  </Card>
                )}

                {profLoading && (
                  <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-3xl border border-pink-100 shadow-sm">
                    <div className="relative mb-6">
                      <div className="h-20 w-20 rounded-full border-4 border-pink-100 border-t-pink-500 animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center text-2xl">🔎</div>
                    </div>
                    <h2 className="text-lg font-bold text-pink-600">Lendo sua tarefa...</h2>
                    <p className="text-gray-400 text-xs mt-1">Vou usar meus superpoderes de robô!</p>
                  </div>
                )}

                {analise && (
                  <div className="space-y-4 pb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-pink-600 flex items-center gap-2">
                        <Sparkles size={18} /> {analise.materia}
                      </h3>
                      <button onClick={resetProf} className="text-xs text-gray-400 hover:text-pink-500 flex items-center gap-1">
                        <RotateCcw size={14} /> Novo
                      </button>
                    </div>

                    <Card className="bg-white border-2 border-pink-50 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-pink-500" />
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-pink-300">Explicação</span>
                        <button onClick={() => lerTexto(analise.explicacao)} className="text-pink-400"><Volume2 size={16} /></button>
                      </div>
                      <p className="text-sm leading-relaxed font-medium text-gray-700">{analise.explicacao}</p>
                    </Card>

                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase text-gray-400">Passo a passo</h4>
                      {analise.passos?.map((passo: string, idx: number) => (
                        <div key={idx} className="flex gap-3 p-3 rounded-2xl bg-white border border-pink-50 shadow-sm">
                          <div className="h-6 w-6 shrink-0 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs">{idx + 1}</div>
                          <p className="text-sm font-medium text-gray-600">{passo}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-sun/5 p-4 rounded-3xl border border-sun/20">
                      <h4 className="text-[10px] font-black uppercase text-sun-foreground mb-1">Desafio Brilhante</h4>
                      <p className="text-sm font-bold text-sun-foreground">{analise.exercicio_similar}</p>
                    </div>

                    <a 
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(analise.video_tema + " para crianças")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-2xl bg-destructive/5 border border-destructive/10 text-destructive-foreground hover:bg-destructive/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-destructive flex items-center justify-center text-white"><Play size={14} fill="white" /></div>
                        <div>
                          <div className="text-xs font-bold">Ver vídeo aula</div>
                          <div className="text-[10px] opacity-70">Aprenda mais no YouTube</div>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Shell>
  );
}
