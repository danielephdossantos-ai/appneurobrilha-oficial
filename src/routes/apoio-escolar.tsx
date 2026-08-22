import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { GraduationCap, Camera, FileText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/apoio-escolar")({ component: ApoioEscolar });

const opcoes = [
  { to: "/missao-prova", icon: GraduationCap, title: "Preparar para Prova", text: "Organize os dias, aprenda o conteúdo, pratique e revise até a avaliação." },
  { to: "/missao-tarefa", icon: Camera, title: "Ajuda para Tarefa", text: "Envie uma foto ou digite a tarefa. O Mentor orienta o raciocínio sem simplesmente entregar a resposta." },
  { to: "/missao-trabalho", icon: FileText, title: "Orientar Trabalho Escolar", text: "Entenda as orientações, pesquise, organize as ideias, escreva e revise passo a passo." },
] as const;

function ApoioEscolar() {
  return <Shell><main className="max-w-5xl mx-auto py-6 md:py-10">
    <header className="mb-8">
      <p className="text-sm font-bold text-primary">Central de Apoio Escolar</p>
      <h1 className="text-3xl md:text-4xl font-black tracking-tight mt-1">Como podemos ajudar hoje?</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">Escolha o objetivo. O Reforço e o Professor Mentor trabalham nos bastidores usando primeiro as aulas que o NeuroBrilha já possui.</p>
    </header>
    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
      {opcoes.map(({to, icon: Icon, title, text}) => <Link key={to} to={to} className="group rounded-3xl border bg-card p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col min-h-[250px]">
        <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary grid place-items-center"><Icon className="h-6 w-6"/></div>
        <h2 className="text-xl font-black mt-5">{title}</h2>
        <p className="text-sm text-muted-foreground mt-2 flex-1">{text}</p>
        <span className="inline-flex items-center gap-2 font-bold text-primary mt-5">Começar <ArrowRight className="h-4 w-4"/></span>
      </Link>)}
    </div>
  </main></Shell>;
}
