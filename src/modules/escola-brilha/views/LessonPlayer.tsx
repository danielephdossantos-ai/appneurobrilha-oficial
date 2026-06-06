import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LessonEnvironment } from '../components/LessonEnvironment';
import { MascotTeacher } from '../components/MascotTeacher';
import { SpeechBubble } from '../components/SpeechBubble';
import { LessonHeader } from '../components/LessonHeader';
import { AudioSpeechService } from '../services/AudioSpeechService';
import { Lesson, LessonStep, LessonPerformance } from '../types/lesson';
import { Button } from "@/components/ui/button";

const MOCK_LESSON: Lesson = {
  id: 'aula-som-b',
  title: 'O Som da Letra B',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EF01LP04', 
  steps: [
    {
      id: 'fase-1',
      phase: 'explanation',
      type: 'explanation',
      mascot: 'pip',
      speech: 'Ouça o som da letra B: /b/, /b/. Faz comigo!',
      elements: [
        { id: 'letra-b', type: 'text', content: 'B', position: { x: 0, y: 0 }, animation: 'bounce', delay: 0.5 }
      ]
    },
    {
      id: 'fase-2',
      phase: 'demonstration',
      type: 'demonstration',
      mascot: 'pipa',
      speech: 'Veja: /b/ de BONECA!',
      elements: [
        { id: 'boneca', type: 'text', content: '🪆', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.4 }
      ]
    },
    {
      id: 'fase-3',
      phase: 'guided_training',
      type: 'interaction',
      mascot: 'pip',
      speech: 'Toque na figura que começa com o som /b/.',
      showHelp: true,
      interaction: {
        type: 'click',
        correctAnswer: '🪆',
        options: ['🍎', '🪆', '🐶']
      }
    },
    {
      id: 'fase-4',
      phase: 'practice',
      type: 'interaction',
      mascot: 'pipa',
      speech: 'Onde está o /b/ da Baleia?',
      interaction: {
        type: 'click',
        correctAnswer: '🐋',
        options: ['🐱', '🐋', '☀️']
      }
    }
  ]
};

export const LessonPlayer: React.FC = () => {
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
    // Logic updated to match the emoji options in the mock
    const isCorrect = answer === '🪆' || answer === '🐋' || answer === 'B'; 
    
    if (isCorrect) {
      setPerformance(prev => ({
        ...prev,
        hits: prev.hits + 1,
        percentage: ((prev.hits + 1) / (prev.hits + prev.misses + 1)) * 100
      }));

      setFeedback('Incrível!');
      setIsSpeaking(true);
      await AudioSpeechService.speak('Parabéns! Você brilhou!');
      setIsSpeaking(false);
      
      if (currentStepIndex < MOCK_LESSON.steps.length - 1) {
        await new Promise(r => setTimeout(r, 1000));
        setCurrentStepIndex(prev => prev + 1);
      } else {
        // Fase 6: Domínio - Finalizar e registrar
        const totalTime = (Date.now() - performance.startTime) / 1000;
        console.log(`Domínio registrado: ${performance.hits} acertos, ${performance.misses} erros, ${totalTime}s`);
        await AudioSpeechService.speak('Você completou a missão com sucesso!');
      }
    } else {
      setPerformance(prev => ({
        ...prev,
        misses: prev.misses + 1,
        percentage: (prev.hits / (prev.hits + prev.misses + 1)) * 100
      }));

      setFeedback('Vamos tentar juntos');
      setIsSpeaking(true);
      await AudioSpeechService.speak('Não se preocupe, vamos tentar juntos! Olha só...');
      setIsSpeaking(false);
      
      // Fase 2: Demonstração automática em caso de erro
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
                    onClick={() => handleInteraction(opt)}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-3xl text-5xl shadow-2xl bg-white border-4 border-blue-100 hover:scale-110 active:scale-90 transition-all text-blue-600"
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
