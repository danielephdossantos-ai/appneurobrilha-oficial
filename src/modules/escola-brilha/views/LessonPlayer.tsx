import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LessonEnvironment } from '../components/LessonEnvironment';
import { MascotTeacher } from '../components/MascotTeacher';
import { SpeechBubble } from '../components/SpeechBubble';
import { AudioSpeechService } from '../services/AudioSpeechService';
import { Lesson, LessonStep } from '../types/lesson';
import { Button } from "@/components/ui/button";

const MOCK_LESSON: Lesson = {
  id: 'aula-1',
  title: 'Aprendendo as Cores',
  steps: [
    {
      id: 'step-1',
      type: 'explanation',
      mascot: 'pip',
      speech: 'Olá! Eu sou o Pip e hoje vamos aprender as cores.',
      elements: [
        { id: 'el-1', type: 'icon', content: '🎨', position: { x: 0, y: -50 }, animation: 'bounce', delay: 0.5 }
      ]
    },
    {
      id: 'step-2',
      type: 'explanation',
      mascot: 'pip',
      speech: 'Veja este círculo. Ele é vermelho como uma maçã!',
      elements: [
        { id: 'el-2', type: 'text', content: '🔴', position: { x: 0, y: -100 }, animation: 'fade', delay: 0.3 }
      ]
    },
    {
      id: 'step-3',
      type: 'interaction',
      mascot: 'pipa',
      speech: 'Agora é sua vez! Toque no círculo vermelho.',
      interaction: {
        type: 'click',
        correctAnswer: 'red',
        options: ['blue', 'red', 'green']
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
  const [feedback, setFeedback] = useState<string | null>(null);

  const currentStep = MOCK_LESSON.steps[currentStepIndex];

  useEffect(() => {
    runStep();
  }, [currentStepIndex]);

  const runStep = async () => {
    // 1. Mascot appears
    setShowMascot(true);
    setShowInteraction(false);
    setShowElements([]);
    setFeedback(null);
    
    await new Promise(r => setTimeout(r, 800));

    // 2. Elements appear gradually
    if (currentStep.elements) {
      for (const el of currentStep.elements) {
        await new Promise(r => setTimeout(r, el.delay * 1000));
        setShowElements(prev => [...prev, el.id]);
      }
    }

    // 3. Mascot speaks
    setIsSpeaking(true);
    await AudioSpeechService.speak(currentStep.speech);
    setIsSpeaking(false);

    // 4. If interaction, show it
    if (currentStep.type === 'interaction') {
      setShowInteraction(true);
    } else {
      // Auto-advance for explanations after a pause
      await new Promise(r => setTimeout(r, 1500));
      if (currentStepIndex < MOCK_LESSON.steps.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
      }
    }
  };

  const handleInteraction = async (answer: string) => {
    if (answer === currentStep.interaction?.correctAnswer) {
      setFeedback('Acertou!');
      setIsSpeaking(true);
      await AudioSpeechService.speak('Parabéns! Você é incrível!');
      setIsSpeaking(false);
      
      if (currentStepIndex < MOCK_LESSON.steps.length - 1) {
        await new Promise(r => setTimeout(r, 1000));
        setCurrentStepIndex(prev => prev + 1);
      }
    } else {
      setFeedback('Tente novamente');
      setIsSpeaking(true);
      await AudioSpeechService.speak('Vamos tentar juntos! Olha só...');
      setIsSpeaking(false);
      // Re-run current step explanation logic if needed
      runStep();
    }
  };

  return (
    <LessonEnvironment>
      <h1 className="text-2xl font-black text-blue-600 mb-8">{MOCK_LESSON.title}</h1>

      {/* Educational Elements Area */}
      <div className="flex-1 w-full relative flex items-center justify-center">
        <AnimatePresence>
          {currentStep.elements?.map((el) => showElements.includes(el.id) && (
            <motion.div
              key={el.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-8xl absolute"
              style={{ top: `calc(50% + ${el.position.y}px)`, left: `calc(50% + ${el.position.x}px)` }}
            >
              {el.content}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Interaction Options */}
        {showInteraction && (
          <div className="flex gap-4 mt-20">
            {currentStep.interaction?.options?.map((opt) => (
              <Button
                key={opt}
                onClick={() => handleInteraction(opt)}
                className={`w-24 h-24 rounded-full text-4xl shadow-xl transition-transform hover:scale-110 ${
                  opt === 'red' ? 'bg-red-500' : opt === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                }`}
              >
                {/* Visual cue instead of text if possible */}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Mascot & Dialogue */}
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
            className="fixed inset-0 flex items-center justify-center z-[100] bg-white/50 backdrop-blur-sm pointer-events-none"
          >
            <div className={`text-6xl font-black ${feedback.includes('Acertou') ? 'text-green-500' : 'text-orange-500'}`}>
              {feedback}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LessonEnvironment>
  );
};
