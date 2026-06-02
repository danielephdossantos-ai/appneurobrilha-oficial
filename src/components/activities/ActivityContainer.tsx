
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GeneratedActivity } from "@/engines/pedagogical-engine/types";
import { EmotionalEngine } from "@/engines/regulation-engine/emotional-engine";
import { RewardBadge } from "@/components/rewards/RewardBadge";
import { PipPedagogicalGuidance } from "@/components/rewards/PipPedagogicalGuidance";

interface Props {
  activity: GeneratedActivity;
  onComplete: (performance: any) => void;
  emotion: any;
}

export const ActivityContainer: React.FC<Props> = ({ activity, onComplete, emotion }) => {
  const [showReward, setShowReward] = useState(false);
  const [acertou, setAcertou] = useState<boolean | null>(null);
  const mascotReaction = EmotionalEngine.getMascotReaction(emotion.current);

  const handleFinish = (success: boolean) => {
    setAcertou(success);
    if (success) {
      setShowReward(true);
      setTimeout(() => {
        setShowReward(false);
        onComplete({ success: true, timeSpent: 10000 }); // Mock performance
      }, 3000);
    } else {
      setTimeout(() => {
        setAcertou(null);
      }, 2000);
      onComplete({ success: false, timeSpent: 10000 });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-indigo-100">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <motion.span 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-md"
          >
            {activity.difficulty}
          </motion.span>
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 bg-yellow-50 px-4 py-1 rounded-full border border-yellow-200">
              <span className="text-xl">⭐</span>
              <span className="font-black text-yellow-700">{activity.reward.stars}</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 bg-blue-50 px-4 py-1 rounded-full border border-blue-200">
              <span className="text-xl">💎</span>
              <span className="font-black text-blue-700">{activity.reward.coins}</span>
            </motion.div>
          </div>
        </div>
        
        <h2 className="text-3xl font-black text-indigo-950 mb-2 leading-tight">{activity.title}</h2>
        <p className="text-slate-600 text-xl font-medium">{activity.instruction}</p>
      </motion.div>

      <div className="min-h-[350px] flex items-center justify-center relative">
        <div className="w-full">
           {activity.type === 'multiple-choice' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {activity.content.options?.map((opt, idx) => (
                 <motion.button
                   key={opt.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   whileHover={{ scale: 1.05, y: -5 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => handleFinish(opt.isCorrect || false)}
                   className="group p-8 text-2xl font-black rounded-3xl border-4 border-slate-100 hover:border-indigo-400 hover:bg-indigo-50 text-indigo-900 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
                 >
                   <div className="absolute top-0 left-0 w-2 h-full bg-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                   {opt.content}
                 </motion.button>
               ))}
             </div>
           )}

           {activity.type === 'logic-sequence' && (
             <div className="flex flex-wrap justify-center gap-4">
               {activity.content.sequence?.map((opt, idx) => (
                 <motion.div
                   key={opt.id}
                   drag
                   dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                   whileHover={{ scale: 1.1, rotate: 2 }}
                   className="w-32 h-32 bg-white border-4 border-dashed border-indigo-200 rounded-3xl flex items-center justify-center text-4xl shadow-md cursor-move"
                 >
                   {opt.content}
                 </motion.div>
               ))}
               <button 
                onClick={() => handleFinish(true)}
                className="mt-8 px-12 py-4 bg-indigo-600 text-white font-black text-xl rounded-2xl shadow-xl hover:bg-indigo-700 transition-all"
               >
                 PRONTO!
               </button>
             </div>
           )}
        </div>
      </div>

      <AnimatePresence>
        {showReward && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              className="relative"
            >
              <RewardBadge 
                stars={activity.reward.stars} 
                coins={activity.reward.coins} 
              />
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ 
                    x: (Math.random() - 0.5) * 400, 
                    y: (Math.random() - 0.5) * 400, 
                    opacity: 0,
                    scale: 0
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-yellow-400"
                  style={{ left: '50%', top: '50%' }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-4 right-4"
      >
        <PipPedagogicalGuidance 
          stage={acertou === true ? 'celebration' : (acertou === false ? 'encouragement' : 'explanation')} 
          className="scale-90"
        />
      </motion.div>
    </div>
  );
};
