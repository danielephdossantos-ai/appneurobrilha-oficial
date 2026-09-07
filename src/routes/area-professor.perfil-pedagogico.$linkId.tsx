import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Loader2, Save, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import { supabase } from "@/database/supabase/client";
export const Route = createFileRoute("/area-professor/perfil-pedagogico/$linkId")({
  component: PedagogicalProfile,
});
type Key =
  | "learning_strengths"
  | "support_needs"
  | "effective_strategies"
  | "avoided_strategies"
  | "preferred_response_modes"
  | "communication_supports"
  | "sensory_environment_supports"
  | "routine_and_attention_supports"
  | "literacy_supports"
  | "mathematics_supports";
type Form = Record<Key, string> & { observation_context: string };
const empty: Form = {
  learning_strengths: "",
  support_needs: "",
  effective_strategies: "",
  avoided_strategies: "",
  preferred_response_modes: "",
  communication_supports: "",
  sensory_environment_supports: "",
  routine_and_attention_supports: "",
  literacy_supports: "",
  mathematics_supports: "",
  observation_context: "",
};
const fields: Array<[Key, string, string]> = [
  ["learning_strengths", "Pontos fortes", "Ex.: reconhece padrões; aprende bem com imagens"],
  ["support_needs", "Apoios necessários", "Ex.: instrução por vez; tempo ampliado"],
  ["effective_strategies", "Estratégias que funcionam", "Ex.: modelo resolvido; cartões móveis"],
  ["avoided_strategies", "Estratégias a evitar", "Ex.: leitura pública; atividade com tempo curto"],
  [
    "preferred_response_modes",
    "Modos de resposta",
    "Ex.: apontar; digitar; comunicação alternativa",
  ],
  ["communication_supports", "Comunicação", "Ex.: escolhas visuais; pergunta objetiva"],
  [
    "sensory_environment_supports",
    "Ambiente sensorial",
    "Ex.: reduzir ruído; lugar com menos movimento",
  ],
  ["routine_and_attention_supports", "Rotina e atenção", "Ex.: agenda visual; pausa planejada"],
  ["literacy_supports", "Leitura e escrita", "Ex.: texto segmentado; fonte ampliada"],
  ["mathematics_supports", "Matemática", "Ex.: material concreto; montagem passo a passo"],
];
const split = (v: string) =>
  v
    .split(/[;\n]/)
    .map((x) => x.trim())
    .filter(Boolean)
    .slice(0,20);
function PedagogicalProfile() {
  const { linkId } = Route.useParams();
  const db = supabase as any;
  const [form, setForm] = useState<Form>(empty);
  const [loading, setLoading] = useState(true);
  const [blocked, setBlocked] = useState(false);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    (async () => {
      const [{ data: access, error: accessError }, { data, error }] = await Promise.all([
        db.rpc("teacher_student_profile_access_status", { selected_link_id: linkId }),
        db.rpc("teacher_get_student_support_profile", { selected_link_id: linkId }),
      ]);
      if (accessError || error || access?.[0]?.allowed !== true) {
        setBlocked(true);
        setLoading(false);
        return;
      }
      const p = data?.[0];
      if (p) {
        const next = { ...empty };
        for (const [k] of fields) next[k] = (p[k] ?? []).join("; ");
        next.observation_context = p.observation_context ?? "";
        setForm(next);
      }
      setLoading(false);
    })();
  }, [linkId]);
  async function save() {
    setSaving(true);
    const params: any = {
      selected_link_id: linkId,
      new_observation_context: form.observation_context.trim() || null,
    };
    for (const [k] of fields) params[`new_${k}`] = split(form[k]);
    const { error } = await db.rpc("teacher_save_student_support_profile", params);
    setSaving(false);
    if (error) {
      if (String(error.message).includes("CONSENTED_ACTIVE_LINK_REQUIRED")) setBlocked(true);
      return toast.error("Não foi possível salvar. Confira a autorização da família.");
    }
    toast.success("Perfil pedagógico atualizado.");
  }
  if (loading)
    return (
      <Shell>
        <div className="min-h-[50vh] grid place-items-center">
          <Loader2 className="animate-spin" />
        </div>
      </Shell>
    );
  return (
    <Shell>
      <main className="mx-auto max-w-4xl space-y-5 p-4 md:p-6">
        <Link
          to="/area-professor"
          className="inline-flex min-h-11 items-center gap-2 font-bold text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Painel docente
        </Link>
        <header className="rounded-3xl bg-gradient-to-r from-indigo-700 to-violet-600 p-6 text-white">
          <p className="text-xs font-black uppercase">Perfil Pedagógico e Funcional</p>
          <h1 className="mt-1 text-3xl font-black">Apoios para aprender</h1>
          <p className="mt-2">
            Registre o que foi observado em atividades escolares. Não use esta área para
            diagnóstico, medicação ou relato íntimo.
          </p>
        </header>
        {blocked ? (
          <section className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6">
            <ShieldCheck className="text-amber-700" />
            <h2 className="mt-3 text-xl font-black">Aguardando autorização da família</h2>
            <p className="mt-2 text-sm">
              O responsável precisa autorizar especificamente o Perfil Pedagógico na Área dos Pais.
              Sem isso, nenhum conteúdo pode ser consultado ou salvo.
            </p>
          </section>
        ) : (
          <>
            <section className="rounded-2xl border bg-white p-5">
              <h2 className="font-black">Como preencher</h2>
               <p className="mt-1 text-sm text-muted-foreground">{"Escreva itens curtos separados por ponto e vírgula. Registre apoio observável: “com instrução visual concluiu 3 etapas”. Evite rótulos sobre personalidade ou capacidade."}</p>
            </section>
            <section className="grid gap-4 md:grid-cols-2">
              {fields.map(([key, label, placeholder]) => (
                <label key={key} className="rounded-2xl border bg-white p-4">
                  <span className="font-black">{label}</span>
                  <textarea
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    rows={4}
                    className="mt-2 w-full rounded-xl border p-3"
                  />
                </label>
              ))}
            </section>
            <label className="block rounded-2xl border bg-white p-4">
              <span className="font-black">Contexto objetivo da observação</span>
              <span className="ml-2 text-xs text-muted-foreground">máximo 240 caracteres</span>
              <textarea
                maxLength={240}
                value={form.observation_context}
                onChange={(e) => setForm({ ...form, observation_context: e.target.value })}
                placeholder="Ex.: observado em leitura individual e atividade em grupo durante setembro."
                rows={3}
                className="mt-2 w-full rounded-xl border p-3"
              />
              <span className="text-xs text-muted-foreground">
                {form.observation_context.length}/240
              </span>
            </label>
            <button
              disabled={saving}
              onClick={save}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 font-black text-white disabled:opacity-50"
            >
              <Save className="h-5 w-5" />
              {saving ? "Salvando..." : "Salvar perfil pedagógico"}
            </button>
          </>
        )}
      </main>
    </Shell>
  );
}
