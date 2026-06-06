import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { LessonEnvironment } from '../components/LessonEnvironment';
import { MascotTeacher } from '../components/MascotTeacher';
import { LessonHeader } from '../components/LessonHeader';
import { AudioSpeechService } from '../services/AudioSpeechService';
import { Lesson, LessonPerformance } from '../types/lesson';
import { useSearch } from '@tanstack/react-router';

const PORTUGUES_1ANO_LESSON: Lesson = {
  id: 'leitura-primeiros-passos',
  title: 'Primeiros Passos na Leitura',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EF01LP06',
  steps: [
    { id: 's1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Vamos aprender as sílabas!',
      elements: [{ id: 'casa-full', type: 'text', content: 'CASA', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.3 }] },
    { id: 's2', phase: 'demonstration', type: 'demonstration', mascot: 'pip',
      speech: 'Vamos separar juntos!',
      elements: [
        { id: 'ca', type: 'text', content: 'CA', position: { x: -60, y: 0 }, animation: 'bounce', delay: 0.2 },
        { id: 'sa', type: 'text', content: 'SA', position: { x: 60, y: 0 }, animation: 'bounce', delay: 0.6 }
      ] },
    { id: 's3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Qual é a primeira sílaba?',
      interaction: { type: 'click', correctAnswer: 'CA', options: ['CA', 'BO', 'PA'] } },
    { id: 's4', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'BOLO. Escolha a imagem correta!',
      elements: [{ id: 'w', type: 'text', content: 'BOLO', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: '🍰', options: ['🍰', '🚗', '🐶'] } },
    { id: 's5', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'O gato dorme. Quem dorme?',
      elements: [{ id: 'f', type: 'text', content: 'O GATO DORME', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: '🐱', options: ['🐱', '🐶', '🐦'] } }
  ]
};

const MATH_LESSON: Lesson = {
  id: 'matematica-1ano',
  title: 'Matemática Divertida',
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF01MA06',
  steps: [
    { id: 'm1', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Quantas maçãs temos aqui?',
      elements: [{ id: 'a', type: 'text', content: '🍎🍎🍎', position: { x: 0, y: 0 }, animation: 'bounce', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } },
    { id: 'm2', phase: 'demonstration', type: 'demonstration', mascot: 'pip',
      speech: 'Vamos juntar as frutinhas!',
      elements: [
        { id: 'a1', type: 'text', content: '🍎🍎', position: { x: -60, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'p', type: 'text', content: '+', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.4 },
        { id: 'a2', type: 'text', content: '🍎', position: { x: 60, y: 0 }, animation: 'pop', delay: 0.6 }
      ] },
    { id: 'm3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Qual é o resultado?',
      interaction: { type: 'click', correctAnswer: '3', options: ['1', '2', '3'] } },
    { id: 'm4', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Tínhamos 4 peixinhos e 1 saiu. Quantos sobraram?',
      elements: [{ id: 'pe', type: 'text', content: '🐟🐟🐟', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } },
    { id: 'm5', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Qual número vem depois?',
      elements: [{ id: 'sq', type: 'text', content: '1  2  3  ?', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: '4', options: ['4', '5', '6'] } }
  ]
};

const LANG_LESSON: Lesson = {
  id: 'brincando-com-rimas',
  title: 'Brincando com Rimas',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EI03EF02',
  steps: [
    { id: 'r1', phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: 'Vamos descobrir as rimas!',
      elements: [
        { id: 'c', type: 'text', content: '🏠', position: { x: -60, y: 0 }, animation: 'bounce', delay: 0.3 },
        { id: 'a', type: 'text', content: '🪽', position: { x: 60, y: 0 }, animation: 'bounce', delay: 0.7 }
      ] },
    { id: 'r2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'O que rima com CASA?',
      elements: [{ id: 'ref', type: 'text', content: 'CASA', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: '🪽', options: ['⚽', '🪽'] } }
  ]
};

export const LessonPlayer: React.FC = () => {
  const search = useSearch({ from: '/escola-brilha/aula' }) as { category: string };
  const currentLesson =
    search.category === 'matematica' ? MATH_LESSON :
    search.category === 'portugues_1ano' ? PORTUGUES_1ANO_LESSON : LANG_LESSON;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showElements, setShowElements] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ kind: 'ok' | 'err' | 'done'; msg: string } | null>(null);
  const [, setPerformance] = useState<LessonPerformance>({ hits: 0, misses: 0, startTime: Date.now(), percentage: 0 });

  const currentStep = currentLesson.steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / currentLesson.steps.length) * 100;

  useEffect(() => {
    runStep();
    return () => AudioSpeechService.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStepIndex, currentLesson.id]);

  const runStep = async () => {
    setShowElements([]);
    setVisibleOptions([]);
    setFeedback(null);

    await new Promise(r => setTimeout(r, 300));

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
      for (const opt of currentStep.interaction.options) {
        await new Promise(r => setTimeout(r, 400));
        setVisibleOptions(prev => [...prev, opt]);
      }
    } else if (currentStep.type === 'explanation' || currentStep.type === 'demonstration') {
      await new Promise(r => setTimeout(r, 1800));
      if (currentStepIndex < currentLesson.steps.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
      }
    }
  };

  const replaySpeech = async () => {
    setIsSpeaking(true);
    await AudioSpeechService.speak(currentStep.speech);
    setIsSpeaking(false);
  };

  const handleInteraction = async (answer: string) => {
    const isCorrect = answer === currentStep.interaction?.correctAnswer;

    if (isCorrect) {
      setPerformance(prev => ({
        ...prev,
        hits: prev.hits + 1,
        percentage: ((prev.hits + 1) / (prev.hits + prev.misses + 1)) * 100,
      }));
      setFeedback({ kind: 'ok', msg: 'Isso mesmo!' });
      setIsSpeaking(true);
      await AudioSpeechService.speak('Isso mesmo! Você é demais!');
      setIsSpeaking(false);
      await new Promise(r => setTimeout(r, 600));

      if (currentStepIndex < currentLesson.steps.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
      } else {
        setFeedback({ kind: 'done', msg: 'Missão Cumprida!' });
        await AudioSpeechService.speak('Parabéns! Você completou toda a missão!');
      }
    } else {
      setPerformance(prev => ({
        ...prev,
        misses: prev.misses + 1,
        percentage: (prev.hits / (prev.hits + prev.misses + 1)) * 100,
      }));
      setFeedback({ kind: 'err', msg: 'Vamos tentar de novo!' });
      setIsSpeaking(true);
      await AudioSpeechService.speak('Vamos tentar juntos! Olhe com atenção.');
      setIsSpeaking(false);
      await new Promise(r => setTimeout(r, 800));
      runStep();
    }
  };

  return (
    <LessonEnvironment>
      <LessonHeader
        progress={progress}
        missionName={currentLesson.title}
        field={currentLesson.bncc_field}
        stepIndex={currentStepIndex}
        totalSteps={currentLesson.steps.length}
      />

      {/* Activity card */}
      <div className="w-full max-w-md px-4 pt-24 pb-56 flex flex-col items-center">
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          className="w-full bg-white rounded-3xl shadow-2xl border-4 border-white p-5 sm:p-6 flex flex-col items-center gap-5"
        >
          {/* Question / speech */}
          <div className="w-full flex items-start gap-2">
            <p className="flex-1 text-center text-lg sm:text-xl font-black text-slate-700 leading-snug">
              {currentStep.speech}
            </p>
            <button
              onClick={replaySpeech}
              className="shrink-0 w-9 h-9 rounded-full bg-violet-100 hover:bg-violet-200 text-violet-600 flex items-center justify-center active:scale-95 transition"
              aria-label="Ouvir novamente"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          {/* Content elements area */}
          {currentStep.elements && currentStep.elements.length > 0 && (
            <div className="w-full min-h-[110px] flex items-center justify-center gap-3 flex-wrap">
              <AnimatePresence>
                {currentStep.elements.map((el: any) =>
                  showElements.includes(el.id) && (
                    <motion.div
                      key={el.id}
                      initial={{ scale: 0, opacity: 0, y: 30 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                      className="text-5xl sm:text-6xl font-black text-blue-600 px-2"
                    >
                      {el.content}
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Interaction options */}
          {currentStep.type === 'interaction' && currentStep.interaction?.options && (
            <div className="w-full flex flex-wrap items-center justify-center gap-3 pt-2">
              <AnimatePresence>
                {visibleOptions.map((opt, i) => {
                  const palette = ['bg-blue-500', 'bg-emerald-500', 'bg-yellow-400', 'bg-pink-500'];
                  const color = palette[i % palette.length];
                  return (
                    <motion.button
                      key={opt}
                      initial={{ scale: 0, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 220 }}
                      onClick={() => handleInteraction(opt)}
                      className={`${color} text-white min-w-[72px] h-20 px-5 rounded-2xl text-3xl sm:text-4xl font-black shadow-lg border-b-4 border-black/10 hover:scale-105 active:scale-95 transition`}
                    >
                      {opt}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>

      {/* Mascots fixed bottom: Pipa LEFT, Pip RIGHT */}
      <MascotTeacher type={currentStep.mascot} isSpeaking={isSpeaking} />

      {/* Feedback overlay */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none"
          >
            <div
              className={`px-8 py-5 rounded-3xl text-3xl sm:text-5xl font-black shadow-2xl border-4 ${
                feedback.kind === 'ok'
                  ? 'bg-emerald-400 text-white border-emerald-200'
                  : feedback.kind === 'done'
                  ? 'bg-yellow-400 text-white border-yellow-200'
                  : 'bg-pink-400 text-white border-pink-200'
              }`}
            >
              {feedback.msg}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LessonEnvironment>
  );
};
