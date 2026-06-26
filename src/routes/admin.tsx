import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAppState, type Diagnostico } from "@/core/store";
import { supabase } from "@/database/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Shield, Sparkles, BookOpen, AlertCircle } from "lucide-react";
import { diagnosticoToNeuroProfile, NEURO_PROFILE_LABEL } from "@/lib/neuro-profile";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

type DemoProfile = {
  diagnostico: Diagnostico;
  emoji: string;
  nome: string;
  resumo: string;
  cor: string;
};

const DEMO_PROFILES: DemoProfile[] = [
  { diagnostico: "nenhum", emoji: "🌟", nome: "Criança Neurotípica", resumo: "Versão padrão da aula, sem adaptações específicas.", cor: "from-sky-400 to-blue-500" },
  { diagnostico: "tdah", emoji: "⚡", nome: "Perfil TDAH", resumo: "Aulas curtas, comandos diretos, estímulos motores e reforços frequentes.", cor: "from-orange-400 to-rose-500" },
  { diagnostico: "tea", emoji: "🧩", nome: "Perfil TEA", resumo: "Linguagem literal, rotina previsível, apoio visual e baixa estimulação sensorial.", cor: "from-emerald-400 to-teal-500" },
  { diagnostico: "dislexia", emoji: "📖", nome: "Perfil Dislexia", resumo: "Foco em consciência fonológica, sílabas separadas, leitura assistida e tempo extra.", cor: "from-violet-400 to-fuchsia-500" },
];

const LESSONS = [
  { id: "vogais-1ano", titulo: "Vogais", codigo: "EF01LP04" },
  { id: "alfabeto-1ano", titulo: "Alfabeto", codigo: "EF01LP01" },
  { id: "rimas-1ano", titulo: "Rimas", codigo: "EF01LP09" },
  { id: "silabas-1ano", titulo: "Sílabas", codigo: "EF01LP06" },
];

function AdminPage() {
  const { activeChild, updateChild, session } = useAppState();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: auth } = await supabase.auth.getUser();
      const uid = auth?.user?.id;
      if (!uid) {
        if (active) setIsAdmin(false);
        return;
      }
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      if (active) setIsAdmin(!!data);
    })();
    return () => { active = false; };
  }, [session]);

  const aplicarPerfil = (d: Diagnostico) => {
    if (!activeChild) {
      toast.error("Selecione uma criança ativa primeiro (Painel dos Pais).");
      return;
    }
    updateChild(activeChild.id, { diagnostico: d });
  };

  if (isAdmin === null) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Carregando...</div>;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Página não encontrada</h1>
          <Link to="/" className="text-primary underline text-sm">Voltar para o início</Link>
        </div>
      </div>
    );
  }

  const perfilAtivo = diagnosticoToNeuroProfile(activeChild?.diagnostico);
  const labelAtivo = NEURO_PROFILE_LABEL[perfilAtivo];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Painel do Administrador</h1>
            <p className="text-sm text-muted-foreground">Demonstração ao vivo dos perfis adaptativos.</p>
          </div>
        </header>

        {!activeChild && (
          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/30">
            <CardContent className="flex items-start gap-3 p-4 text-sm">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>Selecione uma criança ativa no Painel dos Pais antes de aplicar um perfil demo.</div>
            </CardContent>
          </Card>
        )}

        {activeChild && (
          <Card>
            <CardContent className="p-4 flex flex-wrap items-center gap-3">
              <span className="text-sm text-muted-foreground">Criança ativa:</span>
              <span className="font-semibold">{activeChild.nome}</span>
              <Badge variant="secondary">{labelAtivo}</Badge>
              <span className="text-xs text-muted-foreground">(diagnostico = <code>{activeChild.diagnostico || "—"}</code>)</span>
            </CardContent>
          </Card>
        )}

        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> Perfis fictícios para demonstrar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEMO_PROFILES.map((p) => {
              const isAtivo = activeChild?.diagnostico === p.diagnostico;
              return (
                <Card key={p.diagnostico} className={`overflow-hidden transition ${isAtivo ? "ring-2 ring-primary" : ""}`}>
                  <div className={`bg-gradient-to-br ${p.cor} text-white p-4`}>
                    <div className="text-4xl mb-1">{p.emoji}</div>
                    <div className="font-bold">{p.nome}</div>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <p className="text-xs text-muted-foreground min-h-[60px]">{p.resumo}</p>
                    <Button size="sm" className="w-full" variant={isAtivo ? "secondary" : "default"} onClick={() => aplicarPerfil(p.diagnostico)} disabled={!activeChild}>
                      {isAtivo ? "Perfil ativo" : "Aplicar este perfil"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5" /> Abrir aulas adaptadas (1º Ano LP)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {LESSONS.map((l) => (
              <Link key={l.id} to="/escola-brilha/aula" search={{ category: l.id, type: "activity" }} className="block">
                <Card className="hover:shadow-md transition cursor-pointer h-full">
                  <CardContent className="p-4 text-center">
                    <div className="font-semibold">{l.titulo}</div>
                    <div className="text-xs text-muted-foreground mt-1">{l.codigo}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
