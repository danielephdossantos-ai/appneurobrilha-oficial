
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRE1_DATA, PRE2_DATA } from '../../data/early-childhood';

export const EarlyChildhoodWorldMap = ({ grade, onTrailSelect }: { grade: 'pre1' | 'pre2', onTrailSelect?: (trailId: string) => void }) => {
  const data = grade === 'pre1' ? PRE1_DATA : PRE2_DATA;
  const [selectedWorld, setSelectedWorld] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-sky-300 to-emerald-200 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10%)', backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 p-8">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-black text-white drop-shadow-lg uppercase tracking-wider">
              {grade === 'pre1' ? 'Mundo Mágico' : 'Planeta Aventura'}
            </h2>
            <p className="text-white/80 font-bold text-lg">Escolha para onde quer ir!</p>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-white/90 px-6 py-3 rounded-2xl shadow-lg border-2 border-indigo-100 flex items-center gap-3">
              <span className="text-3xl">⭐</span>
              <span className="text-2xl font-black text-indigo-900">45</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {data.worlds.map((world, index) => (
            <motion.button
              key={world.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
              onClick={() => setSelectedWorld(world.id)}
              className="group relative flex flex-col items-center"
            >
              <div 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl flex items-center justify-center text-6xl md:text-7xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 border-4 border-white cursor-pointer"
                style={{ backgroundColor: world.color }}
              >
                {world.icon}
                <div className="absolute -bottom-4 bg-white px-6 py-2 rounded-2xl shadow-lg border-2 border-gray-100 min-w-max">
                  <span className="text-sm font-black text-gray-700 uppercase">{world.name}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedWorld && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-8 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] z-20 border-t-4 border-indigo-100"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-indigo-900">
                  {data.worlds.find(w => w.id === selectedWorld)?.name}
                </h3>
                <button 
                  onClick={() => setSelectedWorld(null)}
                  className="bg-indigo-100 text-indigo-600 p-2 rounded-full hover:bg-indigo-200"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.worlds.find(w => w.id === selectedWorld)?.trails.map(trailId => {
                  const trail = data.trails.find(t => t.id === trailId);
                  return trail ? (
                    <button 
                      key={trail.id} 
                      onClick={() => onTrailSelect?.(trail.id)}
                      className="p-6 bg-indigo-50 rounded-3xl text-left border-2 border-indigo-100 hover:bg-indigo-100 transition-colors group"
                    >
                      <p className="font-black text-indigo-900 mb-1 group-hover:text-indigo-700">{trail.name}</p>
                      <p className="text-sm text-indigo-600 font-medium">{trail.activitiesCount} atividades</p>
                    </button>
                  ) : null;
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
