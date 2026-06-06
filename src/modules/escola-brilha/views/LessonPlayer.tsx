import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LessonEnvironment } from '../components/LessonEnvironment';
import { MascotTeacher } from '../components/MascotTeacher';
import { SpeechBubble } from '../components/SpeechBubble';
import { LessonHeader } from '../components/LessonHeader';
import { AudioSpeechService } from '../services/AudioSpeechService';
import { Lesson, LessonPerformance } from '../types/lesson';
import { Button } from "@/components/ui/button";
import { useSearch } from '@tanstack/react-router';

const MATH_LESSON: Lesson = {
  id: 'contagem-divertida',
  title: 'Contagem Divertida',
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EI03ET07', 
  steps: [
    {
      id: 'contagem-intro',
      phase: 'explanation',
      type: 'explanation',
      mascot: 'pipa',
      speech: 'Vamos contar as maçãs juntos? Um... dois... três!',
      elements: [
        { id: 'maca-1', type: 'text', content: '🍎', position: { x: -60, y: 0 }, animation: 'bounce', delay: 0.4 },
        { id: 'maca-2', type: 'text', content: '🍎🍎', position: { x: 0, y: 0 }, animation: 'bounce', delay: 0.8 },
        { id: 'maca-3', type: 'text', content: '🍎🍎🍎', position: { x: 60, y: 0 }, animation: 'bounce', delay: 1.2 }
      ]
    },
    {
      id: 'mais-menos-demo',
      phase: 'demonstration',
      type: 'demonstration',
      mascot: 'pip',
      speech: 'Veja só! Quatro maçãs é MAIS que duas bananas!',
      elements: [
        { id: 'bananas', type: 'text', content: '🍌🍌', position: { x: -60, y: 0 }, animation: 'fade', delay: 0.2 },
        { id: 'macas-4', type: 'text', content: '🍎🍎🍎🍎', position: { x: 60, y: 0 }, animation: 'pop', delay: 0.6 }
      ]
    },
    {
      id: 'mais-menos-atividade',
      phase: 'practice',
      type: 'interaction',
      mascot: 'pipa',
      speech: 'Qual desses grupos tem MAIS frutinhas?',
      interaction: {
        type: 'click',
        correctAnswer: '🍎🍎🍎🍎',
        options: ['🍌🍌', '🍎🍎🍎🍎']
      }
    }
  ]
};

const LANG_LESSON: Lesson = {
  id: 'brincando-com-rimas',
  title: 'Brincando com Rimas',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EI03EF02', 
  steps: [
    {
      id: 'rima-intro',
      phase: 'explanation',
      type: 'explanation',
      mascot: 'pip',
      speech: 'Olá! Vamos encontrar palavras que terminam com o mesmo som? Isso se chama rima!',
      elements: [
        { id: 'casa', type: 'text', content: '🏠', position: { x: -40, y: 0 }, animation: 'bounce', delay: 0.5 },
        { id: 'asa', type: 'text', content: '🪽', position: { x: 40, y: 0 }, animation: 'bounce', delay: 1.0 }
      ]
    },
    {
      id: 'rima-demo',
      phase: 'demonstration',
      type: 'demonstration',
      mascot: 'pipa',
      speech: 'CASA combina com ASA. Elas terminam igualzinho!',
      elements: [
        { id: 'casa-txt', type: 'text', content: 'CASA', position: { x: -40, y: -40 }, animation: 'fade', delay: 0.2 },
        { id: 'asa-txt', type: 'text', content: 'ASA', position: { x: 40, y: -40 }, animation: 'fade', delay: 0.4 }
      ]
    },
    {
      id: 'rima-pratica',
      phase: 'practice',
      type: 'interaction',
      mascot: 'pip',
      speech: 'O que rima com CASA? É a BOLA ou a ASA?',
      elements: [
        { id: 'casa-ref', type: 'text', content: '🏠', position: { x: 0, y: -60 }, animation: 'pop', delay: 0.2 }
      ],
      interaction: {
        type: 'click',
        correctAnswer: '🪽',
        options: ['⚽', '🪽']
      }
    }
  ]
};

export const LessonPlayer: React.FC = () => {
  const search = useSearch({ from: '/escola-brilha/aula' });
  const currentLesson = search.category === 'matematica' ? MATH_LESSON : LANG_LESSON;
  
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showMascot, setShowMascot] = useState(false);
  const [showElements, setShowElements] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showInteraction, setShowInteraction] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  
  // Performance Tracking (Fase 6: Domínio)
  const [performance, setPerformance] = useState<LessonPerformance>({
    hits: 0,
    misses: 0,
    startTime: Date.now(),
    percentage: 0
  });

  const currentStep = MOCK_LESSON.steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / MOCK_LESSON.steps.length) * 100;

  useEffect(() => {
    runStep();
  }, [currentStepIndex]);

  const runStep = async () => {
    setShowMascot(true);
    setShowInteraction(false);
    setShowElements([]);
    setVisibleOptions([]);
    setFeedback(null);
    
    await new Promise(r => setTimeout(r, 600));

    // Elements appear gradually
    if (currentStep.elements) {
      for (const el of currentStep.elements) {
        await new Promise(r => setTimeout(r, el.delay * 1000));
        setShowElements(prev => [...prev, el.id]);
      }
    }

    // Mascot speaks
    setIsSpeaking(true);
    await AudioSpeechService.speak(currentStep.speech);
    setIsSpeaking(false);

    // If interaction, show options one by one
    if (currentStep.type === 'interaction' && currentStep.interaction?.options) {
      setShowInteraction(true);
      for (const opt of currentStep.interaction.options) {
        await new Promise(r => setTimeout(r, 600));
        setVisibleOptions(prev => [...prev, opt]);
      }
    } else if (currentStep.type === 'explanation') {
      await new Promise(r => setTimeout(r, 2000));
      if (currentStepIndex < MOCK_LESSON.steps.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
      }
    }
  };

  const handleInteraction = async (answer: string) => {
    const isCorrect = answer === currentStep.interaction?.correctAnswer;
    
    if (isCorrect) {
      setPerformance(prev => ({
        ...prev,
        hits: prev.hits + 1,
        percentage: ((prev.hits + 1) / (prev.hits + prev.misses + 1)) * 100
      }));

      setFeedback('Acertou!');
      setIsSpeaking(true);
      await AudioSpeechService.speak('Isso mesmo! Você brilhou!');
      setIsSpeaking(false);
      
      if (currentStepIndex < MOCK_LESSON.steps.length - 1) {
        await new Promise(r => setTimeout(r, 1000));
        setCurrentStepIndex(prev => prev + 1);
      } else {
        setFeedback('Missão Cumprida!');
        await AudioSpeechService.speak('Parabéns! Você completou toda a missão!');
      }
    } else {
      setPerformance(prev => ({
        ...prev,
        misses: prev.misses + 1,
        percentage: (prev.hits / (prev.hits + prev.misses + 1)) * 100
      }));

      setFeedback('Tente de novo');
      setIsSpeaking(true);
      await AudioSpeechService.speak('Vamos tentar juntos! Olhe com atenção.');
      setIsSpeaking(false);
      
      runStep();
    }
  };

  return (
    <LessonEnvironment>
      <LessonHeader progress={progress} missionName={MOCK_LESSON.title} field={MOCK_LESSON.bncc_field} />

      {/* Main Element Area */}
      <div className="flex-1 w-full relative flex items-center justify-center pt-20">
        <AnimatePresence mode="wait">
          {currentStep.elements?.map((el) => showElements.includes(el.id) && (
            <motion.div
              key={el.id}
              initial={{ scale: 0, opacity: 0, y: 50 }}
              animate={{ scale: 2.5, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-8xl md:text-9xl font-black text-blue-600 absolute"
            >
              {el.content}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Interaction Options appearing one by one */}
        {showInteraction && (
          <div className="flex gap-6 mt-32">
            <AnimatePresence>
              {visibleOptions.map((opt) => (
                <motion.div
                  key={opt}
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ type: 'spring' }}
                >
              <Button
                key={opt}
                onClick={() => handleInteraction(opt)}
                className="min-w-[120px] h-24 md:h-32 px-4 rounded-3xl text-3xl md:text-5xl shadow-2xl bg-white border-4 border-blue-100 hover:scale-110 active:scale-90 transition-all text-blue-600 flex items-center justify-center"
              >
                {opt}
              </Button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Mascot & Dialogue Footer */}
      <AnimatePresence>
        {showMascot && (
          <>
            <MascotTeacher type={currentStep.mascot} isSpeaking={isSpeaking} />
            <SpeechBubble text={currentStep.speech} />
          </>
        )}
      </AnimatePresence>

      {/* Feedback Overlay */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-[100] bg-white/40 backdrop-blur-sm pointer-events-none"
          >
            <div className="text-6xl md:text-8xl font-black text-blue-500 drop-shadow-lg">
              {feedback}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LessonEnvironment>
  );
};
