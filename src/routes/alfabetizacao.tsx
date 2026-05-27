
import React, { useState, useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { LiteracyLayout } from '@/components/literacy/LiteracyLayout';
import { PhonemeCard } from '@/components/literacy/PhonemeCard';
import { SyllableBuilder } from '@/components/literacy/SyllableBuilder';
import { WordAssociation } from '@/components/literacy/WordAssociation';
import { GuidedReader } from '@/components/literacy/GuidedReader';
import { LITERACY_SYSTEM } from '@/data/literacy';
import { AdaptiveEngine } from '@/core/adaptive/engine';
import { NeuroProfile } from '@/core/neuro/engine';
import { motion, AnimatePresence } from 'framer-motion';

export const Route = createFileRoute('/alfabetizacao')({
  component: LiteracyPage,
});

function LiteracyPage() {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [profile, setProfile] = useState<NeuroProfile>('Neurotipico');
  const [score, setScore] = useState(0);
  const [showProfileSelector, setShowProfileSelector] = useState(true);

  const currentModule = LITERACY_SYSTEM.modules[currentModuleIndex];
  
  const handleActivityComplete = () => {
    setScore(prev => prev + 10);
    if (currentActivityIndex < 2) { // 3 activities per module for demo
      setCurrentActivityIndex(prev => prev + 1);
    } else if (currentModuleIndex < LITERACY_SYSTEM.modules.length - 1) {
      setCurrentModuleIndex(prev => prev + 1);
      setCurrentActivityIndex(0);
    } else {
      alert("Parabéns! Você completou toda a trilha de alfabetização! 🎓");
    }
  };

  const renderActivity = () => {
    const data = LITERACY_SYSTEM.data;

    switch (currentModule.type) {
      case 'phoneme':
        return (
          <PhonemeCard 
            phoneme={data.phonemes[currentActivityIndex]} 
            onPlaySound={(s) => console.log('Playing', s)}
            onComplete={handleActivityComplete}
            isTEA={profile === 'TEA'}
          />
        );
      case 'syllable':
        const syllable = data.syllables[currentActivityIndex];
        return (
          <SyllableBuilder 
            syllable={syllable.combination}
            parts={syllable.combination.split('')}
            onComplete={handleActivityComplete}
            isDyslexic={profile === 'Dislexia'}
          />
        );
      case 'word':
        const wordData = data.words[currentActivityIndex];
        return (
          <WordAssociation 
            word={wordData.word}
            imageUrl={wordData.imageUrl}
            syllables={wordData.syllables}
            options={[wordData.word, 'BOLA', 'DADO', 'CASA'].filter((v, i, a) => a.indexOf(v) === i).slice(0, 4)}
            onComplete={handleActivityComplete}
            isTDAH={profile === 'TDAH'}
          />
        );
      case 'reading':
        const sentence = data.sentences[currentActivityIndex];
        return (
          <GuidedReader 
            text={sentence.text}
            highlightedSyllables={sentence.highlightedSyllables}
            audioUrl={sentence.audioUrl}
            onComplete={handleActivityComplete}
            isDyslexic={profile === 'Dislexia'}
          />
        );
      default:
        return <div>Em breve...</div>;
    }
  };

  if (showProfileSelector) {
    return (
      <div className="min-h-screen bg-indigo-900 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl"
        >
          <h2 className="text-3xl font-black text-indigo-900 text-center mb-8">Escolha seu Perfil</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(['Neurotipico', 'TEA', 'TDAH', 'Dislexia'] as NeuroProfile[]).map((p) => (
              <button
                key={p}
                onClick={() => {
                  setProfile(p);
                  setShowProfileSelector(false);
                }}
                className="p-6 rounded-2xl bg-indigo-50 border-2 border-indigo-100 hover:border-indigo-500 hover:bg-indigo-100 transition-all font-bold text-indigo-700"
              >
                {p}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <LiteracyLayout 
      title={currentModule.name} 
      profile={profile}
      onBack={() => setShowProfileSelector(true)}
    >
      <div className="mb-6 flex justify-between items-center text-slate-400 font-medium">
        <span>Atividade {currentActivityIndex + 1} de 3</span>
        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">Nível {currentModule.difficulty}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentModuleIndex}-${currentActivityIndex}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          {renderActivity()}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <span className="text-xl font-black text-indigo-600">{score} pontos</span>
        </div>
        <div className="text-slate-400 text-sm">
          Foco detectado: {score > 50 ? 'Excelente' : 'Bom'}
        </div>
      </div>
    </LiteracyLayout>
  );
}
