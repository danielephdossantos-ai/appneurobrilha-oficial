
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EarlyChildhoodWorldMap } from './WorldMap';
import { MascotEarlyChildhood } from './Mascot';
import { EmotionalCheckIn, BreathingExercise } from '../socioemotional/EmotionalSystems';
import { SimplifiedSequence } from '../activities/SimplifiedSequence';
import { LITERACY_SYSTEM } from '../../data/literacy';
import { MATH_SYSTEM } from '../../data/math';
import { MathWorldContainer } from '../pedagogical/MathWorldContainer';


type Section = 'selection' | 'pre1' | 'pre2' | 'literacy' | 'math' | 'emotional' | 'math-game';

export const EarlyChildhoodDashboard = () => {
  const [activeSection, setActiveSection] = useState<Section>('selection');
  const [selectedWorld, setSelectedWorld] = useState<string | null>(null);
  const [mood, setMood] = useState('happy');
  const [neuroProfile, setNeuroProfile] = useState<any>('Neurotipico');


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#F0F7FF] p-6 md:p-12 font-sans overflow-x-hidden">
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-12">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-4"
        >
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl">✨</div>
          <div>
            <h1 className="text-3xl font-black text-indigo-950 tracking-tight leading-none">NeuroBrilha <span className="text-blue-500">Kids</span></h1>
            <p className="text-indigo-400 font-bold uppercase text-xs tracking-widest mt-1">Educação Infantil Master</p>
          </div>
        </motion.div>

        <nav className="flex gap-4">
          {activeSection !== 'selection' && (
            <button 
              onClick={() => setActiveSection('selection')}
              className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-2xl shadow-sm border-2 border-indigo-50 hover:bg-indigo-50 transition-colors"
            >
              Voltar ao Início
            </button>
          )}
          <div className="bg-indigo-600 px-6 py-3 rounded-2xl shadow-lg text-white font-black flex items-center gap-3">
            <span className="text-xl">⭐</span>
            <span>1,240</span>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {activeSection === 'selection' && (
            <motion.div
              key="selection"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <DashboardCard 
                title="PRÉ 1" 
                subtitle="3 a 4 anos" 
                color="bg-emerald-400" 
                icon="🎨" 
                description="Cores, Formas e Coordenação"
                onClick={() => setActiveSection('pre1')}
              />
              <DashboardCard 
                title="PRÉ 2" 
                subtitle="4 a 5 anos" 
                color="bg-amber-400" 
                icon="✍️" 
                description="Sons, Letras e Números"
                onClick={() => setActiveSection('pre2')}
              />
              <DashboardCard 
                title="ALFABETIZAÇÃO" 
                subtitle="Iniciação" 
                color="bg-indigo-400" 
                icon="📖" 
                description="Sílaba, Fonemas e Leitura"
                onClick={() => setActiveSection('literacy')}
              />
              <DashboardCard 
                title="MATEMÁTICA" 
                subtitle="Concreta" 
                color="bg-rose-400" 
                icon="🧮" 
                description="Contagem e Raciocínio"
                onClick={() => setActiveSection('math')}
              />
              <DashboardCard 
                title="EMOCIONAL" 
                subtitle="Sentimentos" 
                color="bg-sky-400" 
                icon="❤️" 
                description="Empatia e Autoconhecimento"
                onClick={() => setActiveSection('emotional')}
              />
              <div className="flex flex-col justify-center items-center">
                 <MascotEarlyChildhood phrase="Para onde vamos hoje?" mood="happy" size="lg" />
              </div>
            </motion.div>
          )}

          {activeSection === 'pre1' && (
            <motion.div key="pre1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <EarlyChildhoodWorldMap grade="pre1" />
            </motion.div>
          )}

          {activeSection === 'pre2' && (
            <motion.div key="pre2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <EarlyChildhoodWorldMap grade="pre2" />
            </motion.div>
          )}

          {activeSection === 'emotional' && (
            <motion.div key="emotional" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <EmotionalCheckIn onSelect={(id) => console.log('Emotion:', id)} />
                <div className="space-y-8">
                  <h3 className="text-3xl font-black text-indigo-900">Hora de Relaxar</h3>
                  <BreathingExercise onComplete={() => console.log('Finished')} />
                </div>
              </div>
            </motion.div>
          )}

          {(activeSection === 'math' || activeSection === 'literacy') && (
             <motion.div key="system-demo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-12 rounded-[3.5rem] shadow-xl">
                <div className="flex justify-between items-center mb-12">
                  <h2 className="text-4xl font-black text-indigo-900">
                    {activeSection === 'math' ? 'Matemática Inicial' : 'Alfabetização Neuroadaptativa'}
                  </h2>
                  <div className="flex gap-2">
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-xl font-bold">TEA</span>
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-xl font-bold">TDAH</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl font-bold">DISLEXIA</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {(activeSection === 'math' ? MATH_SYSTEM.worlds : LITERACY_SYSTEM.modules).map((m: any) => (
                    <button key={m.id} className="p-8 bg-gray-50 rounded-3xl border-4 border-transparent hover:border-indigo-200 hover:bg-white transition-all text-left">
                      <span className="text-4xl mb-4 block">{m.icon || '📘'}</span>
                      <p className="font-black text-indigo-950 text-xl mb-1">{m.name}</p>
                      <p className="text-gray-500 font-medium">{m.description || 'Explorar módulo'}</p>
                    </button>
                  ))}
                </div>

                <div className="bg-indigo-50/50 p-8 rounded-[2.5rem] border-2 border-dashed border-indigo-100">
                   <h3 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
                     <span className="w-2 h-6 bg-indigo-500 rounded-full" />
                     Atividade Sugerida
                   </h3>
                   <SimplifiedSequence 
                      items={[
                        { id: '1', content: '🍎' },
                        { id: '2', content: '🍊' },
                        { id: '3', content: '🍋' }
                      ]} 
                      onComplete={(s) => alert(s ? 'Incrível! 🎉' : 'Tente mais uma vez! ❤️')} 
                    />
                </div>
             </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

const DashboardCard = ({ title, subtitle, color, icon, description, onClick }: any) => (
  <motion.button
    whileHover={{ y: -10, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-transparent hover:border-white transition-all text-left relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-10 rounded-bl-[5rem] -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500`} />
    
    <div className={`${color} w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-lg mb-6 text-white`}>
      {icon}
    </div>
    
    <p className="text-indigo-400 font-black text-sm uppercase tracking-widest mb-1">{subtitle}</p>
    <h3 className="text-3xl font-black text-indigo-950 mb-3">{title}</h3>
    <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
    
    <div className="mt-8 flex items-center gap-2 text-indigo-600 font-bold">
      <span>Começar</span>
      <span className="group-hover:translate-x-2 transition-transform">→</span>
    </div>
  </motion.button>
);
