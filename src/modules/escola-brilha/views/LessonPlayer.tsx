import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { LessonEnvironment } from '../components/LessonEnvironment';
import { MascotTeacher } from '../components/MascotTeacher';
import { LessonHeader } from '../components/LessonHeader';
import { AudioSpeechService } from '../services/AudioSpeechService';
import { Lesson, LessonPerformance } from '../types/lesson';
import { useSearch } from '@tanstack/react-router';
import { RenderEmoji } from '@/components/neuro-treino/RenderEmoji';
import { semEmoji, objetoImg } from '@/data/neuro-treino/objetos';

const WORD_TRILHA: Lesson = {
  id: 'trilha-palavras-1ano',
  title: 'Trilha das Palavras',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EI03EF01',
  steps: [
    { id: 'p1', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Qual é o cachorro?',
      interaction: { type: 'click', correctAnswer: 'cachorro', options: ['cachorro', 'gato', 'sapo'] } },
    { id: 'p2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual começa com B?',
      elements: [{ id: 'b', type: 'text', content: 'B', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'bola', options: ['bola', 'banana', 'gato'] } },
    { id: 'p3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'O que rima com CASA?',
      elements: [{ id: 'ref', type: 'text', content: 'casa', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'asa', options: ['asa', 'pato', 'gato'] } }
  ]
};

const NUMBER_TRILHA: Lesson = {
  id: 'trilha-numeros-1ano',
  title: 'Trilha dos Números',
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EI03ET01',
  steps: [
    { id: 'n1', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Quantas maçãs existem?',
      elements: [
        { id: 'a1', type: 'text', content: 'maça', position: { x: -60, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'a2', type: 'text', content: 'maça', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'a3', type: 'text', content: 'maça', position: { x: 60, y: 0 }, animation: 'pop', delay: 0.6 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } },
    { id: 'n2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Qual possui mais maçãs?',
      elements: [
        { id: 'g1', type: 'text', content: 'maça', position: { x: -100, y: -20 }, animation: 'pop', delay: 0.1 },
        { id: 'g1b', type: 'text', content: 'maça', position: { x: -70, y: -20 }, animation: 'pop', delay: 0.2 },
        { id: 'vs', type: 'text', content: 'OU', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.4 },
        { id: 'g2', type: 'text', content: 'maça', position: { x: 60, y: -20 }, animation: 'pop', delay: 0.5 },
        { id: 'g2b', type: 'text', content: 'maça', position: { x: 90, y: -20 }, animation: 'pop', delay: 0.6 },
        { id: 'g2c', type: 'text', content: 'maça', position: { x: 120, y: -20 }, animation: 'pop', delay: 0.7 },
      ],
      interaction: { type: 'click', correctAnswer: 'DIREITA', options: ['ESQUERDA', 'DIREITA'] } }
  ]
};

const COLOR_SHAPE_TRILHA: Lesson = {
  id: 'trilha-cores-1ano',
  title: 'Cores e Formas',
  bncc_field: 'artes',
  skill_bncc: 'EI03TS02',
  steps: [
    { id: 'c1', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Encontre o círculo!',
      interaction: { type: 'click', correctAnswer: '🔴', options: ['🔴', '🟦', '🔺'] } }
  ]
};

const EMOTION_TRILHA: Lesson = {
  id: 'trilha-emocoes-1ano',
  title: 'Trilha das Emoções',
  bncc_field: 'socioemocional',
  skill_bncc: 'EI03EO01',
  steps: [
    { id: 'e1', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Como o personagem está?',
      interaction: { type: 'click', correctAnswer: '😀', options: ['😀', '😢', '😡', '😴'] } }
  ]
};

export const LessonPlayer: React.FC = () => {
  const search = useSearch({ from: '/escola-brilha/aula' }) as { category: string };
  
  const currentLesson =
    search.category === 'matematica' ? NUMBER_TRILHA :
    search.category === 'cores_shapes' ? COLOR_SHAPE_TRILHA :
    search.category === 'emocoes' ? EMOTION_TRILHA : WORD_TRILHA;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showElements, setShowElements] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [highlightedElementId, setHighlightedElementId] = useState<string | null>(null);
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

  const getStepSpeech = (step: any) => {
    let text = step.speech;
    if (step.elements) {
      const elementsText = step.elements
        .filter((el: any) => el.type === 'text')
        .map((el: any) => objetoImg(el.content) ? '' : semEmoji(el.content))
        .filter((txt: string) => txt.length > 0)
        .join('. ');
      if (elementsText && !text.includes(elementsText)) text += '. ' + elementsText;
    }
    return text;
  };

  const runStep = async () => {
    setShowElements([]);
    setVisibleOptions([]);
    setFeedback(null);
    setHighlightedElementId(null);
    await new Promise(r => setTimeout(r, 300));

    if (currentStep.elements) {
      for (const el of currentStep.elements) {
        await new Promise(r => setTimeout(r, (el.delay || 0) * 1000));
        setShowElements(prev => [...prev, el.id]);
        if (currentStep.type === 'demonstration' || currentStep.type === 'explanation') {
          setHighlightedElementId(el.id);
          setIsSpeaking(true);
          await AudioSpeechService.speak(el.content);
          setIsSpeaking(false);
          setHighlightedElementId(null);
          await new Promise(r => setTimeout(r, 400));
        }
      }
    }

    const fullSpeech = getStepSpeech(currentStep);
    setIsSpeaking(true);
    const speechPromise = AudioSpeechService.speak(fullSpeech);
    
    if (currentStep.type === 'interaction' && currentStep.interaction?.options) {
      await new Promise(r => setTimeout(r, 1500)); 
      for (const opt of currentStep.interaction.options) {
        setVisibleOptions(prev => [...prev, opt]);
        await new Promise(r => setTimeout(r, 500));
      }
    }
    await speechPromise;
    setIsSpeaking(false);
  };

  const handleInteraction = async (answer: string) => {
    const isCorrect = answer === currentStep.interaction?.correctAnswer;
    if (isCorrect) {
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
      setFeedback({ kind: 'err', msg: 'Tente de novo!' });
      setIsSpeaking(true);
      await AudioSpeechService.speak('Vamos tentar juntos! Olhe com atenção.');
      setIsSpeaking(false);
      await new Promise(r => setTimeout(r, 800));
      runStep();
    }
  };

  return (
    <LessonEnvironment>
      <LessonHeader progress={progress} missionName={currentLesson.title} field={currentLesson.bncc_field} stepIndex={currentStepIndex} totalSteps={currentLesson.steps.length} />
      <div className="w-full max-w-md px-4 pt-24 pb-56 flex flex-col items-center">
        <motion.div key={currentStep.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-5">
          <div className="w-full flex items-start gap-2">
            <p className="flex-1 text-center text-xl font-black text-slate-700">{currentStep.speech}</p>
            <button onClick={() => runStep()} className="shrink-0 w-9 h-9 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center"><Volume2 className="w-5 h-5" /></button>
          </div>
          {currentStep.elements && (
            <div className="w-full min-h-[140px] flex items-center justify-center gap-6 flex-wrap">
              <AnimatePresence>
                {currentStep.elements.map((el: any) => showElements.includes(el.id) && (
                  <motion.div key={el.id} initial={{ scale: 0 }} animate={{ scale: 1 }} className={`flex flex-col items-center transition-all ${highlightedElementId === el.id ? 'scale-110' : 'scale-100'}`}>
                    {objetoImg(el.content) ? <RenderEmoji e={el.content} className="w-32 h-32" /> : <div className="text-6xl font-black text-blue-600">{el.content}</div>}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
          {currentStep.type === 'interaction' && currentStep.interaction?.options && (
            <div className="w-full flex flex-wrap items-center justify-center gap-4 pt-4">
              <AnimatePresence>
                {visibleOptions.map((opt, i) => (
                  <motion.button key={opt} initial={{ scale: 0 }} animate={{ scale: 1 }} onClick={() => handleInteraction(opt)} className="bg-blue-500 text-white w-28 h-28 rounded-3xl text-4xl font-black shadow-xl flex items-center justify-center p-4">
                    {objetoImg(opt) || /\p{Emoji}/u.test(opt) ? <RenderEmoji e={opt} className="w-full h-full" /> : <span>{opt}</span>}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
      <MascotTeacher type={currentStep.mascot} isSpeaking={isSpeaking} />
      <AnimatePresence>
        {feedback && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none">
            <div className={`px-8 py-5 rounded-3xl text-5xl font-black shadow-2xl ${feedback.kind === 'ok' ? 'bg-emerald-400 text-white' : feedback.kind === 'done' ? 'bg-yellow-400 text-white' : 'bg-pink-400 text-white'}`}>{feedback.msg}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </LessonEnvironment>
  );
};