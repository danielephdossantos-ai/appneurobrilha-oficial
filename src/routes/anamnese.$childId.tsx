import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState, AnamnesisData } from "@/lib/store";
import { useState, useEffect } from "react";
import { ChevronRight, CheckCircle2, Brain, Baby, BookOpen, MessageCircle, Heart, Calendar, Activity, Info } from "lucide-react";
import { AnamnesisProcessor } from "@/modules/neuro-engine/engine/AnamnesisProcessor";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/anamnese/$childId")({
  component: Anamnese,
});

function Anamnese() {
  const { childId } = Route.useParams();
  const { children: allChildren, updateChild, saveAnamnesis } = useAppState();
  const navigate = useNavigate();
  const child = allChildren.find((c: any) => c.id === childId);
  
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [editCount, setEditCount] = useState(0);

  const [data, setData] = useState<AnamnesisData['responses']>({
    dados_crianca: {
      nome: child?.nome ?? "",
      idade: child?.idade ?? 6,
      sexo: "",
    },
    desenvolvimento: {
      fala: "fala_bem",
      leitura: "nao_sabe_ler",
    },
    comportamento: {
      dificuldade_atencao: false,
      distrai_facil: false,
      frustrado_facil: false,
    },
    comunicacao: {
      aponta_quer: true,
      usa_gestos: true,
      usa_palavras: true,
    },
    aprendizagem: {
      dificuldade_letras: false,
      dificuldade_numeros: false,
    },
    diagnostico_profissional: {
      possui: false,
      quais: "",
      profissional: "",
    },
    preferencias: {
      musica: true,
      desenho: true,
      jogos: true,
      historias: true,
    },
    rotina: {
      periodo_estudo: "manha",
      tem_terapia: false,
    },
  });

  useEffect(() => {
    async function loadAnamnesis() {
      if (!childId) return;
      const { data: existing, error } = await supabase
        .from("child_anamnesis")
        .select("*")
        .eq("child_id", childId)
        .maybeSingle();
      
      if (existing) {
        setData(existing.responses as any);
        setEditCount(existing.edit_count ?? 0);
      }
      setLoading(false);
    }
    loadAnamnesis();
  }, [childId]);

  const steps = [
    { title: "Identidade", icon: <Baby className="w-5 h-5" /> },
    { title: "Desenvolvimento", icon: <BookOpen className="w-5 h-5" /> },
    { title: "Comportamento", icon: <Brain className="w-5 h-5" /> },
    { title: "Comunicação", icon: <MessageCircle className="w-5 h-5" /> },
    { title: "Aprendizagem", icon: <Activity className="w-5 h-5" /> },
    { title: "Diagnóstico", icon: <Info className="w-5 h-5" /> },
    { title: "Preferências", icon: <Heart className="w-5 h-5" /> },
    { title: "Rotina", icon: <Calendar className="w-5 h-5" /> },
  ];

  const finish = async () => {
    if (editCount >= 3) {
      toast.error("Limite de 3 edições atingido.");
      return;
    }

    try {
      const internalProfile = AnamnesisProcessor.process(data);
      const childPatch = AnamnesisProcessor.mapToChildPatch(internalProfile, data);
      
      await saveAnamnesis({
        child_id: childId,
        responses: data,
        internal_profile: internalProfile,
      });

      // Update child basic profile
      await updateChild(childId, {
        ...childPatch,
        nome: data.dados_crianca.nome,
        idade: data.dados_crianca.idade,
        anamnese_completa: true,
      });

      toast.success("Anamnese salva com sucesso!");
      navigate({ to: "/painel-pais" });
    } catch (err: any) {
      toast.error(err.message || "Erro ao salvar anamnese");
    }
  };

  if (loading) return <Shell><div className="p-8 text-center">Carregando...</div></Shell>;

  return (
    <Shell>
      <PageHeader 
        emoji="🧠" 
        title="Anamnese NeuroBrilha" 
        subtitle="Personalize a jornada do seu pequeno" 
      />

      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {steps.map((s, i) => (
          <button 
            key={i} 
            onClick={() => setStep(i)}
            className={`flex items-center gap-2 text-xs whitespace-nowrap px-4 py-2 rounded-full font-bold transition-all ${
              i === step 
                ? "bg-primary text-white shadow-lg scale-105" 
                : i < step 
                  ? "bg-success/20 text-success" 
                  : "bg-muted text-muted-foreground"
            }`}
          >
            {i < step ? <CheckCircle2 className="h-3.5 w-3.5" /> : s.icon}
            {s.title}
          </button>
        ))}
      </div>

      {editCount > 0 && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm flex items-center gap-2">
          <Info className="w-4 h-4" />
          Você já editou esta anamnese {editCount} de 3 vezes permitidas.
        </div>
      )}

      <Card className="max-w-2xl mx-auto">
        {step === 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary"><Baby /></div>
              <div>
                <h2 className="text-xl font-bold">Dados da Criança</h2>
                <p className="text-sm text-muted-foreground">Informações básicas para identificação</p>
              </div>
            </div>
            
            <Field label="Nome Completo">
              <input 
                className="input-premium" 
                value={data.dados_crianca.nome} 
                onChange={(e) => setData({ ...data, dados_crianca: { ...data.dados_crianca, nome: e.target.value } })}
                placeholder="Ex: João Silva"
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Idade">
                <input 
                  type="number" 
                  className="input-premium" 
                  value={data.dados_crianca.idade} 
                  onChange={(e) => setData({ ...data, dados_crianca: { ...data.dados_crianca, idade: +e.target.value } })}
                />
              </Field>
              <Field label="Sexo (opcional)">
                <select 
                  className="input-premium"
                  value={data.dados_crianca.sexo}
                  onChange={(e) => setData({ ...data, dados_crianca: { ...data.dados_crianca, sexo: e.target.value } })}
                >
                  <option value="">Selecione...</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                  <option value="O">Outro</option>
                </select>
              </Field>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600"><BookOpen /></div>
              <div>
                <h2 className="text-xl font-bold">Desenvolvimento</h2>
                <p className="text-sm text-muted-foreground">Marcos de fala e alfabetização</p>
              </div>
            </div>

            <Field label="Sobre a fala:">
              <div className="grid grid-cols-1 gap-2">
                <OptionButton 
                  selected={data.desenvolvimento.fala === "nao_fala"} 
                  onClick={() => setData({ ...data, desenvolvimento: { ...data.desenvolvimento, fala: "nao_fala" } })}
                  label="Não fala"
                />
                <OptionButton 
                  selected={data.desenvolvimento.fala === "fala_pouco"} 
                  onClick={() => setData({ ...data, desenvolvimento: { ...data.desenvolvimento, fala: "fala_pouco" } })}
                  label="Fala pouco / palavras isoladas"
                />
                <OptionButton 
                  selected={data.desenvolvimento.fala === "fala_bem"} 
                  onClick={() => setData({ ...data, desenvolvimento: { ...data.desenvolvimento, fala: "fala_bem" } })}
                  label="Fala bem / frases completas"
                />
              </div>
            </Field>

            <Field label="Sobre a leitura:">
              <div className="grid grid-cols-1 gap-2">
                <OptionButton 
                  selected={data.desenvolvimento.leitura === "nao_sabe_ler"} 
                  onClick={() => setData({ ...data, desenvolvimento: { ...data.desenvolvimento, leitura: "nao_sabe_ler" } })}
                  label="Não sabe ler"
                />
                <OptionButton 
                  selected={data.desenvolvimento.leitura === "aprendendo"} 
                  onClick={() => setData({ ...data, desenvolvimento: { ...data.desenvolvimento, leitura: "aprendendo" } })}
                  label="Está aprendendo"
                />
                <OptionButton 
                  selected={data.desenvolvimento.leitura === "ja_le"} 
                  onClick={() => setData({ ...data, desenvolvimento: { ...data.desenvolvimento, leitura: "ja_le" } })}
                  label="Já lê fluentemente"
                />
              </div>
            </Field>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="bg-purple-100 p-3 rounded-full text-purple-600"><Brain /></div>
              <div>
                <h2 className="text-xl font-bold">Comportamento</h2>
                <p className="text-sm text-muted-foreground">Foco e regulação emocional</p>
              </div>
            </div>

            <ToggleRow 
              label="Tem dificuldade de atenção?" 
              active={data.comportamento.dificuldade_atencao}
              onToggle={(v) => setData({ ...data, comportamento: { ...data.comportamento, dificuldade_atencao: v } })}
            />
            <ToggleRow 
              label="Se distrai fácil?" 
              active={data.comportamento.distrai_facil}
              onToggle={(v) => setData({ ...data, comportamento: { ...data.comportamento, distrai_facil: v } })}
            />
            <ToggleRow 
              label="Fica frustrado fácil?" 
              active={data.comportamento.frustrado_facil}
              onToggle={(v) => setData({ ...data, comportamento: { ...data.comportamento, frustrado_facil: v } })}
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600"><MessageCircle /></div>
              <div>
                <h2 className="text-xl font-bold">Comunicação</h2>
                <p className="text-sm text-muted-foreground">Como a criança expressa desejos</p>
              </div>
            </div>

            <ToggleRow 
              label="Aponta para o que quer?" 
              active={data.comunicacao.aponta_quer}
              onToggle={(v) => setData({ ...data, comunicacao: { ...data.comunicacao, aponta_quer: v } })}
            />
            <ToggleRow 
              label="Usa gestos?" 
              active={data.comunicacao.usa_gestos}
              onToggle={(v) => setData({ ...data, comunicacao: { ...data.comunicacao, usa_gestos: v } })}
            />
            <ToggleRow 
              label="Usa palavras?" 
              active={data.comunicacao.usa_palavras}
              onToggle={(v) => setData({ ...data, comunicacao: { ...data.comunicacao, usa_palavras: v } })}
            />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="bg-red-100 p-3 rounded-full text-red-600"><Activity /></div>
              <div>
                <h2 className="text-xl font-bold">Aprendizagem</h2>
                <p className="text-sm text-muted-foreground">Desafios acadêmicos iniciais</p>
              </div>
            </div>

            <ToggleRow 
              label="Tem dificuldade com letras?" 
              active={data.aprendizagem.dificuldade_letras}
              onToggle={(v) => setData({ ...data, aprendizagem: { ...data.aprendizagem, dificuldade_letras: v } })}
            />
            <ToggleRow 
              label="Tem dificuldade com números?" 
              active={data.aprendizagem.dificuldade_numeros}
              onToggle={(v) => setData({ ...data, aprendizagem: { ...data.aprendizagem, dificuldade_numeros: v } })}
            />
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600"><Info /></div>
              <div>
                <h2 className="text-xl font-bold">Diagnóstico</h2>
                <p className="text-sm text-muted-foreground">Acompanhamento profissional</p>
              </div>
            </div>

            <Field label="A criança possui diagnóstico profissional?">
              <div className="flex gap-4">
                <OptionButton 
                  selected={data.diagnostico_profissional.possui === false} 
                  onClick={() => setData({ ...data, diagnostico_profissional: { ...data.diagnostico_profissional, possui: false } })}
                  label="Não"
                />
                <OptionButton 
                  selected={data.diagnostico_profissional.possui === true} 
                  onClick={() => setData({ ...data, diagnostico_profissional: { ...data.diagnostico_profissional, possui: true } })}
                  label="Sim"
                />
              </div>
            </Field>

            {data.diagnostico_profissional.possui && (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                <Field label="Qual o diagnóstico? (Ex: TDAH, TEA, Dislexia)">
                  <input 
                    className="input-premium" 
                    value={data.diagnostico_profissional.quais}
                    onChange={(e) => setData({ ...data, diagnostico_profissional: { ...data.diagnostico_profissional, quais: e.target.value } })}
                  />
                </Field>
                <Field label="Qual profissional realizou o diagnóstico?">
                  <input 
                    className="input-premium" 
                    value={data.diagnostico_profissional.profissional}
                    onChange={(e) => setData({ ...data, diagnostico_profissional: { ...data.diagnostico_profissional, profissional: e.target.value } })}
                  />
                </Field>
              </div>
            )}
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="bg-pink-100 p-3 rounded-full text-pink-600"><Heart /></div>
              <div>
                <h2 className="text-xl font-bold">Preferências</h2>
                <p className="text-sm text-muted-foreground">O que motiva a criança</p>
              </div>
            </div>

            <p className="text-sm font-bold text-foreground/70">A criança gosta de:</p>
            <div className="grid grid-cols-2 gap-3">
              <CheckboxCard 
                label="Música" 
                icon="🎵" 
                checked={data.preferencias.musica}
                onToggle={(v) => setData({ ...data, preferencias: { ...data.preferencias, musica: v } })}
              />
              <CheckboxCard 
                label="Desenho" 
                icon="🎨" 
                checked={data.preferencias.desenho}
                onToggle={(v) => setData({ ...data, preferencias: { ...data.preferencias, desenho: v } })}
              />
              <CheckboxCard 
                label="Jogos" 
                icon="🎮" 
                checked={data.preferencias.jogos}
                onToggle={(v) => setData({ ...data, preferencias: { ...data.preferencias, jogos: v } })}
              />
              <CheckboxCard 
                label="Histórias" 
                icon="📚" 
                checked={data.preferencias.historias}
                onToggle={(v) => setData({ ...data, preferencias: { ...data.preferencias, historias: v } })}
              />
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="bg-indigo-100 p-3 rounded-full text-indigo-600"><Calendar /></div>
              <div>
                <h2 className="text-xl font-bold">Rotina</h2>
                <p className="text-sm text-muted-foreground">Organização do dia a dia</p>
              </div>
            </div>

            <Field label="Estuda em qual período?">
              <select 
                className="input-premium"
                value={data.rotina.periodo_estudo}
                onChange={(e) => setData({ ...data, rotina: { ...data.rotina, periodo_estudo: e.target.value } })}
              >
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="integral">Integral</option>
                <option value="nao_estuda">Ainda não estuda</option>
              </select>
            </Field>

            <ToggleRow 
              label="Tem terapia de acompanhamento?" 
              active={data.rotina.tem_terapia}
              onToggle={(v) => setData({ ...data, rotina: { ...data.rotina, tem_terapia: v } })}
            />

            <div className="mt-8 p-6 bg-primary/5 rounded-2xl text-center border-2 border-dashed border-primary/20">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-lg">Quase lá!</h3>
              <p className="text-sm text-muted-foreground">Ao finalizar, o NeuroBrilha criará um plano adaptativo exclusivo para <strong>{data.dados_crianca.nome || 'seu filho'}</strong>.</p>
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-between gap-4">
          <button 
            disabled={step === 0} 
            onClick={() => setStep(step - 1)} 
            className="flex-1 px-6 py-4 rounded-2xl bg-muted font-bold transition-all hover:bg-muted/80 disabled:opacity-30 disabled:hover:bg-muted"
          >
            Anterior
          </button>
          
          {step < steps.length - 1 ? (
            <button 
              onClick={() => setStep(step + 1)} 
              className="flex-1 px-6 py-4 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Próximo <ChevronRight className="h-5 w-5" />
            </button>
          ) : (
            <button 
              onClick={finish} 
              className="flex-1 px-6 py-4 rounded-2xl bg-success text-white font-bold shadow-lg shadow-success/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Salvar Anamnese
            </button>
          )}
        </div>
      </Card>

      <style>{`
        .input-premium {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 1rem;
          background: var(--color-input, #f3f4f6);
          border: 2px solid transparent;
          font-weight: 600;
          transition: all 0.2s;
        }
        .input-premium:focus {
          border-color: var(--color-primary);
          background: white;
          outline: none;
          box-shadow: 0 0 0 4px rgba(var(--color-primary-rgb), 0.1);
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </Shell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-foreground/80 ml-1">{label}</label>
      {children}
    </div>
  );
}

function OptionButton({ selected, onClick, label }: { selected: boolean; onClick: () => void; label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-3 rounded-xl border-2 font-bold transition-all text-sm flex-1 ${
        selected ? "border-primary bg-primary/5 text-primary" : "border-border bg-white text-muted-foreground hover:border-primary/30"
      }`}
    >
      {label}
    </button>
  );
}

function ToggleRow({ label, active, onToggle }: { label: string; active: boolean; onToggle: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border">
      <span className="font-bold text-foreground/80">{label}</span>
      <button 
        onClick={() => onToggle(!active)}
        className={`w-14 h-8 rounded-full relative transition-all ${active ? "bg-primary" : "bg-muted-foreground/30"}`}
      >
        <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-sm transition-all ${active ? "right-1" : "left-1"}`} />
      </button>
    </div>
  );
}

function CheckboxCard({ label, icon, checked, onToggle }: { label: string; icon: string; checked: boolean; onToggle: (v: boolean) => void }) {
  return (
    <button 
      onClick={() => onToggle(!checked)}
      className={`p-4 rounded-2xl border-2 transition-all text-center flex flex-col items-center gap-2 ${
        checked ? "border-primary bg-primary/5 shadow-md scale-[1.02]" : "border-border bg-white"
      }`}
    >
      <div className="text-2xl">{icon}</div>
      <div className="font-bold text-sm">{label}</div>
    </button>
  );
}
