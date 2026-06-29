import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAppState, type Diagnostico } from "@/core/store";
import { supabase } from "@/database/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Shield, Sparkles, BookOpen, Users } from "lucide-react";
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
  { diagnostico: "nenhum", emoji: "🌟", nome: "Neurotípica", resumo: "Versão padrão, sem adaptações.", cor: "from-sky-400 to-blue-500" },
  { diagnostico: "tdah", emoji: "⚡", nome: "TDAH", resumo: "Aulas curtas, comandos diretos, estímulos motores.", cor: "from-orange-400 to-rose-500" },
  { diagnostico: "tea", emoji: "🧩", nome: "TEA", resumo: "Linguagem literal, rotina previsível, apoio visual.", cor: "from-emerald-400 to-teal-500" },
  { diagnostico: "dislexia", emoji: "📖", nome: "Dislexia", resumo: "Consciência fonológica, sílabas separadas, tempo extra.", cor: "from-violet-400 to-fuchsia-500" },
];

const LESSONS = [
  { id: "vogais-1ano", titulo: "Vogais", codigo: "EF01LP04" },
  { id: "alfabeto-1ano", titulo: "Alfabeto", codigo: "EF01LP01" },
  { id: "rimas-1ano", titulo: "Rimas", codigo: "EF01LP09" },
  { id: "silabas-1ano", titulo: "Sílabas", codigo: "EF01LP06" },
];

function AdminPage() {
  const { children, activeChild, setActiveChild } = useAppState();
  const qc = useQueryClient();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: auth } = await supabase.auth.getUser();
      const uid = auth?.user?.id;
      if (!uid) { if (active) setIsAdmin(false); return; }
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      if (active) setIsAdmin(!!data);
    })();
    return () => { active = false; };
  }, []);

  const seedDemos = async () => {
    setSeeding(true);
    try {
      const { data: auth } = await supabase.auth.getUser();
      const uid = auth?.user?.id;
      if (!uid) throw new Error("Faça login");

      const existingNames = new Set(children.map((c) => c.nome));
      const toCreate = DEMO_PROFILES.filter((p) => !existingNames.has(p.nome));
      if (toCreate.length === 0) {
        toast.info("Os 4 perfis demo já estão criados.");
        return;
      }

      const rows = toCreate.map((p) => ({
        user_id: uid,
        nome: p.nome,
        idade: 6,
        serie: "1º Ano",
        diagnostico: p.diagnostico,
        avatar: p.emoji,
        anamnese_completa: true,
        sensory_mode: "foco",
        has_hyperfocus: false,
      }));
      const { error } = await supabase.from("children").insert(rows);
      if (error) throw error;
      await qc.invalidateQueries({ queryKey: ["children"] });
      toast.success(`${rows.length} perfil(is) demo criado(s).`);
    } catch (e: unknown) {
      toast.error("Falha ao criar perfis: " + ((e as { message?: string })?.message || ""));
    } finally {
      setSeeding(false);
    }
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

  const demosCriados = DEMO_PROFILES.every((p) => children.some((c) => c.nome === p.nome));
  const perfilAtivo = activeChild ? diagnosticoToNeuroProfile(activeChild.diagnostico) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Painel do Administrador</h1>
              <p className="text-sm text-muted-foreground">Perfis fictícios prontos — sem anamnese.</p>
            </div>
          </div>
          <Link to="/admin-seed-lessons">
            <Button size="sm" variant="outline">
              <Sparkles className="w-4 h-4 mr-1" /> Seed Lessons
            </Button>
          </Link>
        </header>

        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="w-5 h-5" /> Criar 4 perfis demo
              {demosCriados && <Badge variant="secondary" className="ml-2">já criados</Badge>}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Cria automaticamente as 4 crianças (Neurotípica, TDAH, TEA, Dislexia) com anamnese concluída.
              Se algum já existir, ele é pulado e só os faltantes são criados.
            </p>
            <Button onClick={seedDemos} disabled={seeding}>
              {seeding ? "Criando..." : demosCriados ? "Recriar faltantes" : "Criar perfis demo"}
            </Button>
          </CardContent>
        </Card>

        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5" /> Trocar perfil ativo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEMO_PROFILES.map((p) => {
              const child = children.find((c) => c.nome === p.nome);
              const isAtivo = child && activeChild?.id === child.id;
              return (
                <Card key={p.diagnostico} className={`overflow-hidden transition ${isAtivo ? "ring-2 ring-primary" : ""}`}>
                  <div className={`bg-gradient-to-br ${p.cor} text-white p-4`}>
                    <div className="text-4xl mb-1">{p.emoji}</div>
                    <div className="font-bold">{p.nome}</div>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <p className="text-xs text-muted-foreground min-h-[48px]">{p.resumo}</p>
                    <Button
                      size="sm"
                      className="w-full"
                      variant={isAtivo ? "secondary" : "default"}
                      onClick={() => child && setActiveChild(child.id)}
                      disabled={!child}
                    >
                      {!child ? "Não criada" : isAtivo ? "Perfil ativo" : "Tornar ativa"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {activeChild && (
          <Card>
            <CardContent className="p-4 flex flex-wrap items-center gap-3">
              <span className="text-sm text-muted-foreground">Ativa:</span>
              <span className="font-semibold">{activeChild.nome}</span>
              {perfilAtivo && <Badge variant="secondary">{NEURO_PROFILE_LABEL[perfilAtivo]}</Badge>}
            </CardContent>
          </Card>
        )}

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
