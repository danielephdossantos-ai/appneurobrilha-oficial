import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Brain, GraduationCap, ShieldCheck } from "lucide-react";
import { Shell } from "@/components/Layout";

export const Route = createFileRoute("/area-professor/pratica")({ component: TeacherPractice });

function TeacherPractice() {
  return <Shell><div className="max-w-4xl mx-auto space-y-6">
    <header className="rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-600 text-white p-6">
      <p className="text-sm font-black opacity-80">MODO ACOMPANHADO</p>
      <h1 className="text-3xl font-black mt-1">Usar com uma criança neste aparelho</h1>
      <p className="mt-3 max-w-2xl">Escolha uma atividade e acompanhe a criança. Este modo não cria cadastro, não abre dados familiares e não grava progresso em uma conta de aluno.</p>
    </header>
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 flex gap-3"><ShieldCheck className="text-emerald-700 shrink-0"/><p className="text-sm text-emerald-950"><b>Uso independente:</b> para atendimento, reforço ou demonstração no celular do professor. Para salvar evolução e enviar tarefas, conecte um aluno assinante pelo painel docente.</p></div>
    <section className="grid sm:grid-cols-3 gap-4">
      <Link to="/escola-brilha" className="min-h-44 rounded-2xl border bg-white p-5 hover:border-indigo-400"><GraduationCap className="h-8 w-8 text-indigo-600"/><h2 className="font-black text-xl mt-4">Escola Brilha</h2><p className="text-sm text-muted-foreground mt-2">Aulas por ano e disciplina.</p></Link>
      <Link to="/neuro-treino" className="min-h-44 rounded-2xl border bg-white p-5 hover:border-violet-400"><Brain className="h-8 w-8 text-violet-600"/><h2 className="font-black text-xl mt-4">Neuro-Treino</h2><p className="text-sm text-muted-foreground mt-2">Atividades curtas para crianças até 7 anos.</p></Link>
      <Link to="/biblioteca-pedagogica" className="min-h-44 rounded-2xl border bg-white p-5 hover:border-amber-400"><BookOpen className="h-8 w-8 text-amber-600"/><h2 className="font-black text-xl mt-4">Materiais</h2><p className="text-sm text-muted-foreground mt-2">Consultar e preparar materiais impressos.</p></Link>
    </section>
    <Link to="/area-professor" className="inline-flex min-h-12 items-center px-5 rounded-xl border bg-white font-bold">Voltar ao painel docente</Link>
  </div></Shell>;
}
