import { createFileRoute } from "@tanstack/react-router";
import { Shell, Card } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { useState, useEffect, useRef } from "react";
import { Send, Sparkles, Loader2, Heart, Volume2, VolumeX, MessageCircle, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { SimpleMascotRenderer } from "@/components/rewards/SimpleMascotRenderer";

export const Route = createFileRoute("/amigo-virtual")({
  component: AmigoVirtual,
});

function AmigoVirtual() {
  const { activeChild } = useAppState();
  const virtualFriend = { name: "Amigão", emoji: "🦄" };
  
  const [msgs, setMsgs] = useState<{ role: "ai" | "user"; t: string }[]>([
    { role: "ai", t: `Oi, ${activeChild?.nome ?? "amiguinho"}! 🌈 Eu sou o ${virtualFriend.name}. Estou aqui para te ouvir e te dar um abraço virtual gigante! Como você está se sentindo agora?` },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [msgs]);

  const lerTexto = (texto: string) => {
    if (!isAudioEnabled) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR";
    utterance.rate = 0.9;
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
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
          message: q,
          chatHistory: msgs.slice(-4).map(m => ({ 
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
            <div className="h-20 w-20 flex items-center justify-center">
              <SimpleMascotRenderer emoji={virtualFriend.emoji} size={80} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-pink-600">Amigo Virtual</h2>
              <p className="text-xs font-medium text-pink-400">Sempre aqui para você! ✨</p>
            </div>
          </div>
          <button 
            onClick={() => setIsAudioEnabled(!isAudioEnabled)}
            className={`p-3 rounded-full ${isAudioEnabled ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-500"}`}
          >
            {isAudioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
        </div>

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
                <p className="text-lg font-medium leading-relaxed">{m.t}</p>
                {m.role === "ai" && (
                  <button 
                    onClick={() => lerTexto(m.t)}
                    className="mt-2 text-pink-400 hover:text-pink-600 transition-colors"
                  >
                    <Volume2 size={16} />
                  </button>
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

        <div className="space-y-4 bg-white/50 backdrop-blur-sm p-4 rounded-3xl border border-pink-50">
          <div className="flex flex-wrap gap-2">
            {sentimentos.map((s) => (
              <button 
                key={s.label} 
                onClick={() => send(s.value)} 
                disabled={isLoading}
                className="btn-tap text-sm px-4 py-2 rounded-full bg-white border-2 border-pink-100 text-pink-600 font-bold hover:bg-pink-50 hover:border-pink-200 disabled:opacity-50"
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
              className="w-full p-5 pr-16 rounded-[2rem] bg-white border-4 border-pink-100 text-lg font-medium focus:border-pink-300 outline-none transition-all placeholder:text-pink-200 disabled:opacity-50" 
            />
            <button 
              onClick={() => send()} 
              disabled={isLoading || !input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg hover:bg-pink-600 transition-colors disabled:bg-gray-200 disabled:shadow-none"
            >
              {isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : <Send className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </Shell>
  );
}
