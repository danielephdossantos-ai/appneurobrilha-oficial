import React, { useState, useEffect } from 'react';
import { useAppState } from '@/core/store';
import { LumiPedagogicalSystem, LumiEmotion } from '@/engines/pedagogical-engine/LumiPedagogicalSystem';
import KidLiveMascot from '@/components/ui/KidLiveMascot';
import { motion, AnimatePresence } from 'framer-motion';

interface LumiPedagogicalGuidanceProps {
  stage: 'explanation' | 'encouragement' | 'celebration' | 'idle';
  className?: string;
  manualMessage?: string | null;
}


export const LumiPedagogicalGuidance: React.FC<LumiPedagogicalGuidanceProps> = ({ stage, className, manualMessage }) => {
  const { activeChild } = useAppState();
  const [message, setMessage] = useState<string | null>(null);
  const [emotion, setEmotion] = useState<LumiEmotion>('happy');


  useEffect(() => {
    if (!activeChild || stage === 'idle') {
      setMessage(null);
      setEmotion('happy');
      return;
    }

    let result;
    switch (stage) {
      case 'explanation':
        result = LumiPedagogicalSystem.getExplanation(activeChild);
        break;
      case 'encouragement':
        result = LumiPedagogicalSystem.getEncouragement(activeChild);
        break;
      case 'celebration':
        result = LumiPedagogicalSystem.getCelebration(activeChild);
        break;
    }

    if (result) {
      setMessage(result.text);
      setEmotion(result.emotion as LumiEmotion);
      
      // Auto-clear message for encouragement after some time
      if (stage === 'encouragement') {
        const timer = setTimeout(() => setMessage(null), 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [stage, activeChild]);

  if (!activeChild) return null;

  return (
    <div className={className}>
      <KidLiveMascot 
        emotion={emotion as any} 
        message={manualMessage || message || undefined}
        size="md"
      />
    </div>
  );

};