import { createFileRoute } from '@tanstack/react-router';
import ActivityGeneratorDemo from '../modules/activities/components/ActivityGeneratorDemo';

export const Route = createFileRoute('/gerador-procedural')({
  component: GeradorProceduralPage,
});

function GeradorProceduralPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">
          Gerador Procedural de Atividades
        </h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Este sistema gera automaticamente trilhas pedagógicas adaptadas, garantindo que 
          cada sessão de aprendizado seja única e ajustada ao nível cognitivo da criança.
        </p>
        <ActivityGeneratorDemo />
      </div>
    </div>
  );
}
