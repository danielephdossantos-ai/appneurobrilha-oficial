
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EarlyChildhoodWorldMap } from './WorldMap';
import { ActivityContainer } from '../activities/ActivityContainer';
import { PRE2_DATA } from '../../data/early-childhood';
import { Button } from '../ui/button';

export const Pre2System = () => {
  const [currentMode, setCurrentMode] = useState<'map' | 'activity'>('map');
  const [activeActivity, setActiveActivity] = useState<any>(null);
  const [stats, setStats] = useState({
    stars: 120,
    coins: 450,
    energy: 85,
    mascotLevel: 5
  });

  const handleStartActivity = (trailId: string) => {
    // In a real app, this would fetch an activity from the engine
    const mockActivity = {
      id: "act-001",
      type: "multiple-choice",
      title: "Sons Iniciais",
      instruction: "Qual dessas imagens começa com o som da letra A?",
      difficulty: "easy",
      content: {
        options: [
          { id: "1", content: "🍎 Abelha", isCorrect: true },
          { id: "2", content: "🐘 Elefante", isCorrect: false },
          { id: "3", content: "🐻 Urso", isCorrect: false },
          { id: "4", content: "🐯 Tigre", isCorrect: false }
        ]
      },
      reward: { stars: 10, coins: 5, energy: 2 }
    };
    setActiveActivity(mockActivity);
    setCurrentMode('activity');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-2 border-white"
          >
            🌟
          </motion.div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">NeuroBrilha <span className="text-indigo-600">Pré 2</span></h1>
            <p className="text-slate-500 font-bold text-sm">Explorador de Saberes</p>
          </div>
        </div>

        <div className="flex gap-3">
          <StatBadge icon="⭐" value={stats.stars} color="text-yellow-600" bg="bg-yellow-50" />
          <StatBadge icon="💎" value={stats.coins} color="text-blue-600" bg="bg-blue-50" />
          <StatBadge icon="⚡" value={`${stats.energy}%`} color="text-emerald-600" bg="bg-emerald-50" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {currentMode === 'map' ? (
            <motion.div
              key="map"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
            >
              <EarlyChildhoodWorldMap 
                grade="pre2" 
                onTrailSelect={handleStartActivity} 
              />
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <MascotEvolutionCard level={stats.mascotLevel} />
                <DailyGoalsCard />
                <AdaptiveInfoCard />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="activity"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="py-12"
            >
              <div className="mb-6 flex justify-start">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentMode('map')}
                  className="rounded-full px-8 font-bold border-2"
                >
                  ← Voltar para o Mapa
                </Button>
              </div>
              <ActivityContainer 
                activity={activeActivity} 
                onComplete={() => {
                   setStats(s => ({ ...s, stars: s.stars + 10, coins: s.coins + 5 }));
                   setCurrentMode('map');
                }}
                emotion={{ current: 'alegria' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

const StatBadge = ({ icon, value, color, bg }: any) => (
  <motion.div 
    whileHover={{ y: -2 }}
    className={`${bg} ${color} px-5 py-2 rounded-2xl border-2 border-white shadow-sm flex items-center gap-2 font-black`}
  >
    <span className="text-xl">{icon}</span>
    <span>{value}</span>
  </motion.div>
);

const MascotEvolutionCard = ({ level }: { level: number }) => (
  <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border-4 border-indigo-50 flex items-center gap-6">
    <div className="relative">
      <div className="w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-100 rounded-full flex items-center justify-center text-5xl shadow-inner">
        🦁
      </div>
      <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black border-4 border-white text-sm">
        {level}
      </div>
    </div>
    <div>
      <h3 className="font-black text-slate-900">Brilhante</h3>
      <p className="text-xs text-slate-500 font-bold uppercase mb-2">Nível de Amizade</p>
      <div className="w-32 h-3 bg-slate-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '65%' }}
          className="h-full bg-indigo-500"
        />
      </div>
    </div>
  </div>
);

const DailyGoalsCard = () => (
  <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border-4 border-emerald-50">
    <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2">
      <span className="text-emerald-500">🎯</span> Metas de Hoje
    </h3>
    <div className="space-y-3">
      <GoalItem label="Completar 3 atividades" done={true} />
      <GoalItem label="Aprender uma letra nova" done={false} />
      <GoalItem label="Praticar contagem" done={false} />
    </div>
  </div>
);

const GoalItem = ({ label, done }: { label: string; done: boolean }) => (
  <div className="flex items-center gap-3">
    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200'}`}>
      {done && '✓'}
    </div>
    <span className={`text-sm font-bold ${done ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{label}</span>
  </div>
);

const AdaptiveInfoCard = () => (
  <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-[2.5rem] shadow-xl text-white">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-2xl">🧠</span>
      <h3 className="font-black">Neuro-Foco</h3>
    </div>
    <p className="text-indigo-100 text-sm font-medium mb-4">
      O sistema adaptou o Reino das Letras para seu perfil TEA hoje.
    </p>
    <div className="flex gap-2">
      <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase">Visual Clean</span>
      <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase">Tempo Estendido</span>
    </div>
  </div>
);
