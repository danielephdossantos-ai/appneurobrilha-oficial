import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Heart, Users, Shield, Zap, Smile, BookOpen } from "lucide-react";

export const Route = createFileRoute("/brilha-vida")({
  component: BrilhaVida,
});

const categorias = [
  {
    id: "emocoes",
    nome: "Emoções",
    emoji: "😊",
    cor: "from-sun/30 to-sun/5",
    descricao: "Reconhecer e nomear o que sentimos",
    atividades: ["Termômetro das Emoções", "Como estou agora?", "Emoji Mágico"]
  },
  {
    id: "social",
    nome: "Amizade e Empatia",
    emoji: "🤝",
    cor: "from-emerald/30 to-emerald/5",
    descricao: "Aprender a conviver e respeitar",
    atividades: ["Histórias Sociais", "Dividindo o Brinquedo", "Cuidando do Amigo"]
  },
  {
    id: "autocontrole",
    nome: "Autocontrole",
    emoji: "🧘",
    cor: "from-sky/30 to-sky/5",
    descricao: "Estratégias para se acalmar",
    atividades: ["Pausa para Respirar", "Cantinho da Calma", "Semáforo do Sentir"]
  },
  {
    id: "rotina",
    nome: "Rotina e Convivência",
    emoji: "🏠",
    cor: "from-lilac/30 to-lilac/5",
    descricao: "Regras e harmonia no dia a dia",
    atividades: ["Minha vez, sua vez", "Regras da Casa", "Resolução de Conflitos"]
  }
];

function BrilhaVida() {
  return (
    <Shell>
      <PageHeader 
        emoji="🌱" 
        title="Brilha Vida" 
        subtitle="Educação socioemocional e regulação para brilhar na vida" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-emerald/10 to-emerald/5 border-emerald/20 flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-emerald/20 text-emerald-600">
            <Heart className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Inteligência Emocional</h3>
            <p className="text-sm text-muted-foreground">Atividades que ajudam a entender sentimentos e desenvolver empatia.</p>
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-sky/10 to-sky/5 border-sky/20 flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-sky/20 text-sky-600">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Segurança e Regulação</h3>
            <p className="text-sm text-muted-foreground">Ferramentas de autocontrole fundamentais para crianças neurodivergentes.</p>
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        {categorias.map((cat) => (
          <section key={cat.id}>
            <div className="flex flex-col mb-4">
               <h2 className="text-xl font-black flex items-center gap-2">
                 <span className="text-3xl">{cat.emoji}</span> {cat.nome}
               </h2>
               <p className="text-sm text-muted-foreground font-medium">{cat.descricao}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cat.atividades.map((atv) => (
                <button 
                  key={atv}
                  className={`group relative overflow-hidden text-left p-5 rounded-[2rem] bg-gradient-to-br ${cat.cor} border-2 border-transparent hover:border-primary/20 transition-all hover:shadow-glow btn-tap`}
                >
                  <div className="font-extrabold text-slate-800 text-lg mb-1">{atv}</div>
                  <div className="text-[10px] font-bold text-primary/60 uppercase tracking-widest flex items-center gap-1">
                    Atividade Brilha Vida <Zap className="h-3 w-3 fill-primary" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 italic">Começar agora</span>
                    <Smile className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Card className="mt-12 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Smile className="h-32 w-32" />
        </div>
        <div className="relative z-10">
          <h3 className="text-xl font-black mb-2 flex items-center gap-2">
            <Smile className="h-6 w-6 text-sun" /> Momento Ursinho Calma
          </h3>
          <p className="text-slate-400 max-w-md">
            Precisa de uma pausa? O Ursinho Calma está aqui para ajudar com exercícios de respiração e regulação sensorial.
          </p>
          <button className="mt-6 px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-glow hover:scale-105 transition-transform">
            Pedir Ajuda
          </button>
        </div>
      </Card>
    </Shell>
  );
}
