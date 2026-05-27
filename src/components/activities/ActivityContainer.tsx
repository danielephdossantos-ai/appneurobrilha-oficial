
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GeneratedActivity } from '../../core/activity-engine/types';
import { EmotionalEngine } from '../../core/emotional/engine';
import { RewardBadge } from '../rewards/RewardBadge';

interface Props {
  activity: GeneratedActivity;
  onComplete: (performance: any) => void;
  emotion: any;
}

export const ActivityContainer: React.FC<Props> = ({ activity, onComplete, emotion }) => {
  const [showReward, setShowReward] = useState(false);
  const mascotReaction = EmotionalEngine.getMascotReaction(emotion.current);

  const handleFinish = (success: boolean) => {
    if (success) {
      setShowReward(true);
      setTimeout(() => {
        setShowReward(false);
        onComplete({ success: true, timeSpent: 10000 }); // Mock performance
      }, 3000);
    } else {
      onComplete({ success: false, timeSpent: 10000 });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-indigo-100">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <span className="px-4 py-1 bg-indigo-500 text-white rounded-full text-sm font-bold uppercase tracking-wider">
            {activity.difficulty}
          </span>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white">⭐</div>
            <span className="font-bold text-indigo-900">{activity.reward.stars}</span>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">{activity.title}</h2>
        <p className="text-gray-600 text-lg">{activity.instruction}</p>
      </motion.div>

      <div className="min-h-[300px] flex items-center justify-center">
        {/* Child component for specific activity type would go here */}
        <div className="w-full">
           {activity.type === 'multiple-choice' && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {activity.content.options?.map((opt) => (
                 <motion.button
                   key={opt.id}
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   onClick={() => handleFinish(opt.isCorrect || false)}
                   className={`p-6 text-xl font-medium rounded-2xl border-2 transition-colors ${
                     'border-indigo-200 hover:border-indigo-500 hover:bg-indigo-50 text-indigo-800'
                   }`}
                 >
                   {opt.content}
                 </motion.button>
               ))}
             </div>
           )}
        </div>
      </div>

      <AnimatePresence>
        {showReward && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
            <RewardBadge 
              stars={activity.reward.stars} 
              coins={activity.reward.coins} 
            />
          </div>
        )}
      </AnimatePresence>

      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-4 right-4 flex items-center gap-3 bg-indigo-50 p-4 rounded-2xl border border-indigo-100 max-w-xs"
      >
        <div className="text-4xl">🦁</div>
        <p className="text-sm font-medium text-indigo-700">{mascotReaction.text}</p>
      </motion.div>
    </div>
  );
};
