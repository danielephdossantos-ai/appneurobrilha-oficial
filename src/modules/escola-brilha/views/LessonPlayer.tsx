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

const PORTUGUES_1ANO_LESSON: Lesson = {
  id: 'leitura-primeiros-passos',
  title: 'Primeiros Passos na Leitura',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EF01LP06', 
  steps: [
    {
      id: 'silaba-intro',
      phase: 'explanation',
      type: 'explanation',
      mascot: 'pipa',
      speech: 'Vamos aprender a separar as palavrinhas em pedaços? Cada pedaço é uma sílaba! Veja a palavra CASA.',
      elements: [
        { id: 'casa-full', type: 'text', content: 'CASA', position: { x: 0, y: -40 }, animation: 'pop', delay: 0.5 }
      ]
    },
    {
      id: 'silaba-demo',
      phase: 'demonstration',
      type: 'demonstration',
      mascot: 'pip',
      speech: 'CA... SA... Viu só? Juntando os pedaços formamos a palavra!',
      elements: [
        { id: 'ca', type: 'text', content: 'CA', position: { x: -40, y: 0 }, animation: 'bounce', delay: 0.2 },
        { id: 'sa', type: 'text', content: 'SA', position: { x: 40, y: 0 }, animation: 'bounce', delay: 0.6 }
      ]
    },
    {
      id: 'leitura-guiada',
      phase: 'demonstration',
      type: 'demonstration',
      mascot: 'pip',
      speech: 'Vamos ler juntos? BO... LO... BOLO!',
      elements: [
        { id: 'bo', type: 'text', content: 'BO', position: { x: -40, y: 0 }, animation: 'bounce', delay: 0.2 },
        { id: 'lo', type: 'text', content: 'LO', position: { x: 40, y: 0 }, animation: 'bounce', delay: 0.6 },
        { id: 'bolo', type: 'text', content: 'BOLO', position: { x: 0, y: 50 }, animation: 'pop', delay: 1.2 }
      ]
    },
    {
      id: 'associacao-bolo',
      phase: 'practice',
      type: 'interaction',
      mascot: 'pipa',
      speech: 'BOLO. Escolha a imagem correta!',
      elements: [
        { id: 'word-bolo', type: 'text', content: 'BOLO', position: { x: 0, y: -60 }, animation: 'pop', delay: 0.2 }
      ],
      interaction: {
        type: 'click',
        correctAnswer: '🍰',
        options: ['🍰', '🚗', '🐶']
      }
    },
    {
      id: 'compreensao-gato',
      phase: 'practice',
      type: 'interaction',
      mascot: 'pip',
      speech: 'O gato dorme. Quem dorme?',
      elements: [
        { id: 'frase-gato', type: 'text', content: 'O GATO DORME', position: { x: 0, y: -60 }, animation: 'pop', delay: 0.2 }
      ],
      interaction: {
        type: 'click',
        correctAnswer: '🐱',
        options: ['🐱', '🐶', '🐦']
      }
    }
  ]
};

const MATH_LESSON: Lesson = {
  id: 'matematica-1ano',
  title: 'Matemática Divertida',
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF01MA06', 
  steps: [
    {
      id: 'contagem-pratica',
      phase: 'practice',
      type: 'interaction',
      mascot: 'pipa',
      speech: 'Vamos contar as maçãs? Quantas existem aqui?',
      elements: [
        { id: 'macas-3', type: 'text', content: '🍎🍎🍎', position: { x: 0, y: -60 }, animation: 'bounce', delay: 0.2 }
      ],
      interaction: {
        type: 'click',
        correctAnswer: '3',
        options: ['2', '3', '4']
      }
    },
    {
      id: 'adicao-demo',
      phase: 'demonstration',
      type: 'demonstration',
      mascot: 'pip',
      speech: 'Vamos juntar as frutinhas! Duas maçãs mais uma maçã...',
      elements: [
        { id: 'add-1', type: 'text', content: '🍎🍎', position: { x: -40, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'plus', type: 'text', content: '+', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.4 },
        { id: 'add-2', type: 'text', content: '🍎', position: { x: 40, y: 0 }, animation: 'pop', delay: 0.6 }
      ]
    },
    {
      id: 'adicao-resultado',
      phase: 'practice',
      type: 'interaction',
      mascot: 'pipa',
      speech: 'Qual é o resultado quando juntamos tudo?',
      elements: [
        { id: 'result-macas', type: 'text', content: '🍎🍎🍎', position: { x: 0, y: -60 }, animation: 'bounce', delay: 0.2 }
      ],
      interaction: {
        type: 'click',
        correctAnswer: '3',
        options: ['1', '2', '3']
      }
    },
    {
      id: 'subtracao-pratica',
      phase: 'practice',
      type: 'interaction',
      mascot: 'pip',
      speech: 'Tínhamos 4 peixinhos e 1 saiu nadando. Quantos sobraram?',
      elements: [
        { id: 'peixes-ref', type: 'text', content: '🐟🐟🐟', position: { x: 0, y: -60 }, animation: 'pop', delay: 0.2 }
      ],
      interaction: {
        type: 'click',
        correctAnswer: '3',
        options: ['2', '3', '4']
      }
    },
    {
      id: 'sequencia-logica',
      phase: 'practice',
      type: 'interaction',
      mascot: 'pipa',
      speech: 'Olha a sequência: 1, 2, 3... Qual número vem depois?',
      elements: [
        { id: 'seq', type: 'text', content: '1, 2, 3, ?', position: { x: 0, y: -60 }, animation: 'pop', delay: 0.2 }
      ],
      interaction: {
        type: 'click',
        correctAnswer: '4',
        options: ['4', '5', '6']
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
  const search = useSearch({ from: '/escola-brilha/aula' }) as { category: string };
  const currentLesson = search.category === 'matematica' ? MATH_LESSON : search.category === 'portugues_1ano' ? PORTUGUES_1ANO_LESSON : LANG_LESSON;
  
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showMascot, setShowMascot] = useState(false);
  const [showElements, setShowElements] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showInteraction, setShowInteraction] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  
  const [performance, setPerformance] = useState<LessonPerformance>({
    hits: 0,
    misses: 0,
    startTime: Date.now(),
    percentage: 0
  });

  const currentStep = currentLesson.steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / currentLesson.steps.length) * 100;

  useEffect(() => {
    runStep();
  }, [currentStepIndex, currentLesson.id]);

  const runStep = async () => {
    setShowMascot(true);
    setShowInteraction(false);
    setShowElements([]);
    setVisibleOptions([]);
    setFeedback(null);
    
    await new Promise(r => setTimeout(r, 600));

    if (currentStep.elements) {
      for (const el of currentStep.elements) {
        await new Promise(r => setTimeout(r, (el.delay || 0) * 1000));
        setShowElements(prev => [...prev, el.id]);
      }
    }

    setIsSpeaking(true);
    await AudioSpeechService.speak(currentStep.speech);
    setIsSpeaking(false);

    if (currentStep.type === 'interaction' && currentStep.interaction?.options) {
      setShowInteraction(true);
      for (const opt of currentStep.interaction.options) {
        await new Promise(r => setTimeout(r, 600));
        setVisibleOptions(prev => [...prev, opt]);
      }
    } else if (currentStep.type === 'explanation') {
      await new Promise(r => setTimeout(r, 2000));
      if (currentStepIndex < currentLesson.steps.length - 1) {
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
      
      if (currentStepIndex < currentLesson.steps.length - 1) {
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
      <LessonHeader progress={progress} missionName={currentLesson.title} field={currentLesson.bncc_field} />

      <div className="flex-1 w-full relative flex items-center justify-center pt-20">
        <AnimatePresence mode="wait">
          {currentStep.elements?.map((el: any) => showElements.includes(el.id) && (
            <motion.div
              key={el.id}
              initial={{ scale: 0, opacity: 0, y: 50 }}
              animate={{ 
                scale: 2, 
                opacity: 1, 
                x: el.position.x * 2, 
                y: (el.position.y * 2) - 100 
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-8xl md:text-9xl font-black text-blue-600 absolute"
            >
              {el.content}
            </motion.div>
          ))}
        </AnimatePresence>

        {showInteraction && (
          <div className="flex gap-6 mt-10">
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

      <AnimatePresence>
        {showMascot && (
          <>
            <MascotTeacher type={currentStep.mascot} isSpeaking={isSpeaking} />
            <SpeechBubble text={currentStep.speech} />
          </>
        )}
      </AnimatePresence>

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