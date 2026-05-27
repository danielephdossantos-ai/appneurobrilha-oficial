
import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';

interface SequenceItem {
  id: string;
  content: string;
}

export const SimplifiedSequence = ({ items, onComplete }: { items: SequenceItem[], onComplete: (success: boolean) => void }) => {
  const [order, setOrder] = useState(items);
  const correctOrder = [...items].sort((a, b) => a.id.localeCompare(b.id));

  const checkOrder = () => {
    const isCorrect = order.every((item, index) => item.id === correctOrder[index].id);
    onComplete(isCorrect);
  };

  return (
    <div className="flex flex-col items-center gap-12 p-12 bg-white/50 rounded-[3rem] border-4 border-dashed border-indigo-200">
      <Reorder.Group axis="x" values={order} onReorder={setOrder} className="flex gap-6">
        {order.map((item) => (
          <Reorder.Item
            key={item.id}
            value={item}
            className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center text-5xl cursor-grab active:cursor-grabbing border-4 border-indigo-100 hover:border-indigo-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.content}
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={checkOrder}
        className="px-12 py-5 bg-indigo-600 text-white rounded-3xl text-2xl font-black shadow-2xl shadow-indigo-200 hover:bg-indigo-700 transition-colors"
      >
        PRONTO! ✅
      </motion.button>
    </div>
  );
};
