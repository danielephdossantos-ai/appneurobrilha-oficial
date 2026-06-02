import { createFileRoute } from '@tanstack/react-router';
import { InfiniteActivityShowcase } from '@/components/pedagogical/InfiniteActivityShowcase';
import { Shell } from '@/components/Layout';

export const Route = createFileRoute('/gerador-procedural')({
  component: GeradorProceduralPage,
});

function GeradorProceduralPage() {
  return (
    <Shell>
      <div className="container mx-auto py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Sistema Infinito de Atividades
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Uma arquitetura baseada em regras pedagógicas estruturadas e componentes procedurais. 
            Gera milhões de combinações exclusivas sem depender de APIs de IA, garantindo 
            privacidade, funcionamento offline e rigor pedagógico (BNCC).
          </p>
        </header>
        
        <InfiniteActivityShowcase />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-12">
          <div className="space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">📑</span>
              activity-template-engine
            </h3>
            <p className="text-sm text-muted-foreground">
              Define a estrutura lógica (seleção, sequência, pareamento) e vincula às habilidades da BNCC por faixa etária.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">🎲</span>
              activity-randomizer-engine
            </h3>
            <p className="text-sm text-muted-foreground">
              Combina cenários, personagens e objetos de forma estocástica para criar atividades únicas a cada execução.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">⚙️</span>
              difficulty-engine
            </h3>
            <p className="text-sm text-muted-foreground">
              Ajusta dinamicamente a complexidade baseando-se no histórico de performance e perfil neuroadaptativo.
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
}

