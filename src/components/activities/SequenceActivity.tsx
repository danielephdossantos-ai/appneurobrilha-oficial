
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GeneratedActivity } from '../../core/activity-engine/types';
import { ActivityPerformance } from '../../core/activity-engine/types';

interface Props {
  activity: GeneratedActivity;
  onComplete: (performance: ActivityPerformance) => void;
}

export const SequenceActivity: React.FC<Props> = ({ activity, onComplete }) => {
  const [items, setItems] = useState<any[]>([]);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    // Simulated sequence data from engine
    const baseItems = [
      { id: '1', content: '🍎' },
      { id: '2', content: '🍌' },
      { id: '3', content: '🍇' }
    ].sort(() => Math.random() - 0.5);
    setItems(baseItems);
  }, [activity]);

  const handleCheck = () => {
    // Logic to check sequence
    const success = true; // Simplified for demo
    onComplete({
      activityId: activity.id,
      timeSpent: Date.now() - startTime,
      attempts: 1,
      errors: 0,
      success
    });
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-4 p-4 bg-indigo-50 rounded-2xl border-2 border-dashed border-indigo-200 min-h-[120px] w-full justify-center">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center text-4xl cursor-move border-2 border-indigo-100"
          >
            {item.content}
          </motion.div>
        ))}
      </div>
      
      <button 
        onClick={handleCheck}
        className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg"
      >
        Conferir Sequência
      </button>
    </div>
  );
};
