import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card, Pill } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { useState, useEffect } from "react";
import { Play, BookOpen, Volume2, CheckCircle2, Lightbulb, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/escola-brilha")({
  component: Escola,
});

const materias = [
  { id: "portugues", nome: "Português", emoji: "📚", cor: "from-coral/30 to-coral/5" },
  { id: "matematica", nome: "Matemática", emoji: "🔢", cor: "from-sky/30 to-sky/5" },
  { id: "ciencias", nome: "Ciências", emoji: "🔬", cor: "from-success/20 to-success/5" },
  { id: "historia", nome: "História", emoji: "🏛️", cor: "from-sun/30 to-sun/5" },
  { id: "geografia", nome: "Geografia", emoji: "🌍", cor: "from-lilac/30 to-lilac/5" },
] as const;

function Escola() {
  const { activeChild } = useAppState();
  const [aula, setAula] = useState<null | any>(null);
  const [loading, setLoading] = useState(false);

  const carregarAula = async (materiaId: string, topic?: string) => {
    if (!activeChild) return;
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("neurobrilha-ai", {
        body: {
          mode: "escola",
          child: activeChild,
          subject: materiaId,
          topic: topic || "conforme BNCC da série"
        }
      });

      if (error) throw error;
      setAula({ ...data, materia: materiaId, etapa: "ensino" });
    } catch (err) {
      console.error(err);
      toast.error("Erro ao gerar a aula. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!activeChild) return <Shell><p>Selecione uma criança.</p></Shell>;

  if (loading) {
    return (
      <Shell>
        <div className="h-full flex flex-col items-center justify-center p-12 text-center">
          <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
          <h2 className="text-2xl font-bold">Preparando sua aula especial...</h2>
          <p className="text-muted-foreground">O {activeChild.hiperfoco === 'dinossauros' ? 'dinossauro' : 'amigo'} está organizando tudo!</p>
        </div>
      </Shell>
    );
  }

  if (aula) return <AulaView aula={aula} setAula={setAula} childNome={activeChild.nome} hiperfoco={activeChild.hiperfoco} />;

  return (
    <Shell>
      <PageHeader emoji="🎓" title="Escola Brilha" subtitle={`BNCC adaptada · ${activeChild.serie}`} />

      <Card className="mb-6 bg-gradient-to-br from-primary/10 to-success/5">
        <div className="flex items-center gap-4">
          <div className="text-5xl">{activeChild.avatar}</div>
          <div className="flex-1">
            <div className="font-extrabold text-lg">Continue de onde parou</div>
            <div className="text-sm text-muted-foreground">Português · Encontros vocálicos · Aula 3 de 8</div>
            <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-primary" style={{ width: "37%" }} />
            </div>
          </div>
          <button onClick={() => carregarAula("portugues", "Encontros vocálicos")} className="btn-tap rounded-xl bg-primary text-primary-foreground px-5 py-3 font-bold flex items-center gap-2">
            <Play className="h-4 w-4" /> Retomar
          </button>
        </div>
      </Card>

      <h2 className="text-xl mb-4">Matérias</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {materias.map((m) => (
          <button key={m.id} onClick={() => carregarAula(m.id)}
            className={`rounded-2xl p-5 bg-gradient-to-br ${m.cor} border border-border shadow-soft hover:shadow-glow transition-all text-left`}>
            <div className="text-4xl">{m.emoji}</div>
            <div className="font-extrabold text-lg mt-2">{m.nome}</div>
            <Pill tone="info">Nível {(activeChild.niveis as any)[m.id] ?? 2}</Pill>
          </button>
        ))}
      </div>
    </Shell>
  );
}

function AulaView({ aula, setAula, childNome, hiperfoco }: { aula: { materia: string; nivel: number; etapa: "ensino" | "demo" | "opcoes" }; setAula: (a: any) => void; childNome: string; hiperfoco: string }) {
  const [acertou, setAcertou] = useState<null | boolean>(null);
  const [tentativas, setTentativas] = useState(0);

  const titulos: Record<string, string> = {
    ensino: "📖 Aula",
    demo: "🎨 Demonstração",
    opcoes: "✨ Sua vez!",
  };

  const tema = aula.materia === "portugues" ? "encontros vocálicos" : aula.materia === "matematica" ? "soma com reagrupamento" : "o ciclo da água";

  return (
    <Shell>
      <PageHeader emoji="🎓" title={titulos[aula.etapa]} subtitle={`${tema} · explicação no perfil dela`} />

      <Card className="mb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground mb-3">
          <span className={`px-2.5 py-1 rounded-full ${aula.etapa === "ensino" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>1. Ensino</span>
          <span className={`px-2.5 py-1 rounded-full ${aula.etapa === "demo" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>2. Demonstração</span>
          <span className={`px-2.5 py-1 rounded-full ${aula.etapa === "opcoes" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>3. Opções</span>
        </div>

        {aula.etapa === "ensino" && (
          <div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-sky/40 to-petal/30 grid place-items-center mb-4 relative overflow-hidden">
              <div className="text-8xl animate-pulse">{hiperfoco === "dinossauros" ? "🦕" : hiperfoco === "espaco" ? "🚀" : "🌟"}</div>
              <button className="absolute bottom-4 left-4 btn-tap rounded-full bg-white/90 px-4 py-2 font-bold text-sm flex items-center gap-2">
                <Volume2 className="h-4 w-4" /> Ouvir de novo
              </button>
            </div>
            <p className="text-lg leading-relaxed">
              Olha, <strong>{childNome}</strong>! O {hiperfoco === "dinossauros" ? "dinossauro" : "amigo"} vai te ensinar sobre <strong>{tema}</strong>.
              É quando duas vogais ficam juntinhas, tipo na palavra "céu" — c-é-u.
            </p>
            <div className="mt-3 flex gap-2 flex-wrap">
              <button className="btn-tap rounded-xl bg-muted px-4 py-2 font-bold text-sm flex items-center gap-2"><BookOpen className="h-4 w-4" /> Prefiro ler o texto</button>
              <button onClick={() => setAula({ ...aula, etapa: "demo" })} className="btn-tap rounded-xl bg-primary text-primary-foreground px-5 py-2 font-bold">Vamos ver! →</button>
            </div>
          </div>
        )}

        {aula.etapa === "demo" && (
          <div>
            <p className="text-lg mb-4">Olha como fica:</p>
            <div className="rounded-2xl bg-secondary p-6 grid grid-cols-3 gap-4 text-center text-3xl mb-4">
              <div>c <span className="text-primary">é</span> <span className="text-primary">u</span></div>
              <div>p <span className="text-primary">a</span> <span className="text-primary">i</span></div>
              <div>l <span className="text-primary">u</span> <span className="text-primary">a</span></div>
            </div>
            <p className="text-muted-foreground">As letras coloridas são as vogais que ficam grudadinhas. 💚</p>
            <button onClick={() => setAula({ ...aula, etapa: "opcoes" })} className="mt-4 btn-tap rounded-xl bg-primary text-primary-foreground px-5 py-2 font-bold">Quero tentar!</button>
          </div>
        )}

        {aula.etapa === "opcoes" && (
          <div>
            <p className="text-lg mb-4 font-bold">Qual palavra tem encontro vocálico?</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { p: "céu", ok: true },
                { p: "casa", ok: false },
                { p: "bola", ok: false },
                { p: "pai", ok: true },
              ].map((opt) => (
                <button key={opt.p} onClick={() => { setAcertou(opt.ok); if (!opt.ok) setTentativas(tentativas + 1); }}
                  disabled={acertou !== null}
                  className={`btn-tap p-6 rounded-2xl text-2xl font-extrabold border-2 transition-all ${
                    acertou === null ? "border-border bg-muted hover:border-primary" :
                    opt.ok ? "border-success bg-success/15" :
                    tentativas >= 1 && !opt.ok ? "opacity-30 border-border bg-muted" : "border-border bg-muted"
                  }`}>
                  {opt.p}
                </button>
              ))}
            </div>

            {acertou === true && (
              <div className="mt-4 p-4 rounded-2xl bg-success/15 text-success font-bold flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" /> Mandou bem, {childNome}! O dinossauro adorou. ⭐
              </div>
            )}
            {acertou === false && (
              <div className="mt-4 p-4 rounded-2xl bg-sun/30 flex items-start gap-2">
                <Lightbulb className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Quase! Vou te ajudar:</div>
                  <div className="text-sm">{tentativas >= 2 ? "A resposta é 'céu' — porque tem 'é' e 'u' juntas." : "Procura uma palavra onde duas vogais ficam grudadinhas."}</div>
                </div>
              </div>
            )}
          </div>
        )}
      </Card>

      <button onClick={() => setAula(null)} className="text-sm text-muted-foreground hover:text-foreground">← Voltar para matérias</button>
    </Shell>
  );
}
