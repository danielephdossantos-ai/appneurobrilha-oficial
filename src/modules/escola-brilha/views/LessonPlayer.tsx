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

const PORTUGUES_1ANO_LESSON: Lesson = {
  id: 'leitura-primeiros-passos',
  title: 'Cidade das Letras',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EF01LP06',
  steps: [
    // 1. Formando Sílabas
    { id: 's1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'M mais A. Qual sílaba foi formada?',
      elements: [
        { id: 'm', type: 'text', content: 'M', position: { x: -40, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'plus', type: 'text', content: '+', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.5 },
        { id: 'a', type: 'text', content: 'A', position: { x: 40, y: 0 }, animation: 'pop', delay: 0.8 }
      ] },
    { id: 's2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual sílaba foi formada?',
      elements: [
        { id: 'm-ref', type: 'text', content: 'M', position: { x: -20, y: 0 }, animation: 'pop', delay: 0.1 },
        { id: 'a-ref', type: 'text', content: 'A', position: { x: 20, y: 0 }, animation: 'pop', delay: 0.3 }
      ],
      interaction: { type: 'click', correctAnswer: 'MA', options: ['MA', 'ME', 'MO'] } },
    
    // 2. Complete a Palavra
    { id: 's3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Complete a palavra GATO!',
      elements: [
        { id: 'gato-img', type: 'text', content: 'gato', position: { x: 0, y: -40 }, animation: 'bounce', delay: 0.2 },
        { id: 'gato-txt', type: 'text', content: 'GA _ O', position: { x: 0, y: 40 }, animation: 'pop', delay: 0.5 }
      ],
      interaction: { type: 'click', correctAnswer: 'TO', options: ['TO', 'TA', 'TU'] } },

    // 3. Leitura Curta
    { id: 's4', phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: 'A BOLA É AZUL.',
      elements: [
        { id: 'bola-img', type: 'text', content: 'bola', position: { x: 0, y: -30 }, animation: 'pop', delay: 0.2 },
        { id: 'frase', type: 'text', content: 'A BOLA É AZUL', position: { x: 0, y: 40 }, animation: 'pop', delay: 0.5 }
      ] },
    { id: 's5', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Qual é a cor da bola?',
      elements: [{ id: 'ref-bola', type: 'text', content: 'bola', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'AZUL', options: ['AZUL', 'VERMELHA'] } }
  ]
};

const MATH_LESSON: Lesson = {
  id: 'matematica-1ano',
  title: 'Vale dos Números',
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF01MA06',
  steps: [
    // 1. Soma Visual
    { id: 'm1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Duas maçãs mais uma maçã é igual a quanto?',
      elements: [
        { id: 'a1', type: 'text', content: 'maça', position: { x: -100, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'a2', type: 'text', content: 'maça', position: { x: -60, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'plus', type: 'text', content: '+', position: { x: -10, y: 0 }, animation: 'fade', delay: 0.6 },
        { id: 'a3', type: 'text', content: 'maça', position: { x: 40, y: 0 }, animation: 'pop', delay: 0.8 },
        { id: 'eq', type: 'text', content: '=', position: { x: 80, y: 0 }, animation: 'fade', delay: 1.0 },
        { id: 'quest', type: 'text', content: '?', position: { x: 120, y: 0 }, animation: 'pop', delay: 1.2 },
      ] },
    { id: 'm2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual é o resultado?',
      elements: [
        { id: 'r1', type: 'text', content: 'maça', position: { x: -60, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'r2', type: 'text', content: 'maça', position: { x: -20, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'pl', type: 'text', content: '+', position: { x: 20, y: 0 }, animation: 'fade', delay: 0.6 },
        { id: 'r3', type: 'text', content: 'maça', position: { x: 60, y: 0 }, animation: 'pop', delay: 0.8 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } },

    // 2. Subtração Visual
    { id: 'm3', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Tínhamos quatro peixinhos e um saiu. Quantos sobraram?',
      elements: [
        { id: 'p1', type: 'text', content: 'peixe', position: { x: -90, y: -20 }, animation: 'pop', delay: 0.2 },
        { id: 'p2', type: 'text', content: 'peixe', position: { x: -30, y: -20 }, animation: 'pop', delay: 0.4 },
        { id: 'p3', type: 'text', content: 'peixe', position: { x: 30, y: -20 }, animation: 'pop', delay: 0.6 },
        { id: 'p4', type: 'text', content: 'peixe', position: { x: 90, y: -20 }, animation: 'pop', delay: 0.8 },
      ] },
    { id: 'm4', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Quantos sobraram?',
      elements: [
        { id: 's1', type: 'text', content: 'peixe', position: { x: -60, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 's2', type: 'text', content: 'peixe', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 's3', type: 'text', content: 'peixe', position: { x: 60, y: 0 }, animation: 'pop', delay: 0.6 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } }
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
        { id: 'c', type: 'text', content: 'casa', position: { x: -60, y: 0 }, animation: 'bounce', delay: 0.3 },
        { id: 'a', type: 'text', content: 'asa', position: { x: 60, y: 0 }, animation: 'bounce', delay: 0.7 }
      ] },
    { id: 'r2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'O que rima com CASA?',
      elements: [{ id: 'ref', type: 'text', content: 'casa', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'asa', options: ['bola', 'asa'] } }
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
    
    // Add text elements to the speech, but ignore icons/emojis in speech
    if (step.elements) {
      const elementsText = step.elements
        .filter((el: any) => el.type === 'text')
        .map((el: any) => {
          // If it's a known object name, don't read the word as text if it's meant to be an illustration
          if (objetoImg(el.content)) return '';
          return semEmoji(el.content);
        })
        .filter((txt: string) => txt.length > 0)
        .join('. ');
      
      if (elementsText && !text.includes(elementsText)) {
        text += '. ' + elementsText;
      }
    }

    // Add options ONLY if they are text/syllables (never read emojis/images)
    if (step.type === 'interaction' && step.interaction?.options) {
      const options = step.interaction.options;
      const textOptions = options.filter((opt: string) => !/\p{Emoji}/u.test(opt) && !objetoImg(opt));
      
      if (textOptions.length > 0) {
        // Use "..." for natural pauses between syllables or words
        const optionsText = textOptions.slice(0, -1).join('... ') + (textOptions.length > 1 ? '... ou ... ' : '') + textOptions[textOptions.length - 1];
        text += '. ' + optionsText + '?';
      }
    }
    
    return text;
  };

  const runStep = async () => {
    setShowElements([]);
    setVisibleOptions([]);
    setFeedback(null);
    setHighlightedElementId(null);

    await new Promise(r => setTimeout(r, 300));

    // Show elements and speak them if they are part of a demonstration/explanation
    if (currentStep.elements) {
      for (const el of currentStep.elements) {
        await new Promise(r => setTimeout(r, (el.delay || 0) * 1000));
        setShowElements(prev => [...prev, el.id]);
        
        // If it's a demonstration or explanation, highlight and speak as it appears
        if (currentStep.type === 'demonstration' || currentStep.type === 'explanation') {
          setHighlightedElementId(el.id);
          setIsSpeaking(true);
          await AudioSpeechService.speak(el.content);
          setIsSpeaking(false);
          setHighlightedElementId(null);
          await new Promise(r => setTimeout(r, 400)); // Pause between syllables
        }
      }
    }

    // After elements appear, speak the main instruction and options
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

    if (currentStep.type === 'explanation' || currentStep.type === 'demonstration') {
      await new Promise(r => setTimeout(r, 1800));
      if (currentStepIndex < currentLesson.steps.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
      }
    }
  };

  const replaySpeech = async () => {
    setIsSpeaking(true);
    await AudioSpeechService.speak(getStepSpeech(currentStep));
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
            <div className="w-full min-h-[140px] flex items-center justify-center gap-6 flex-wrap">
              <AnimatePresence>
                {currentStep.elements.map((el: any) =>
                  showElements.includes(el.id) && (
                    <motion.div
                      key={el.id}
                      initial={{ scale: 0, opacity: 0, y: 30 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                      className={`flex flex-col items-center justify-center transition-all duration-300 ${
                        highlightedElementId === el.id 
                          ? 'scale-110' 
                          : 'scale-100'
                      }`}
                    >
                      {(/\p{Emoji}/u.test(el.content) || objetoImg(el.content)) ? (
                        <div className={highlightedElementId === el.id ? 'drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]' : ''}>
                          <RenderEmoji 
                            e={el.content} 
                            className="w-24 h-24 sm:w-32 sm:h-32" 
                          />
                        </div>
                      ) : (
                        <div className={`text-5xl sm:text-6xl font-black px-2 transition-all duration-300 ${
                          highlightedElementId === el.id 
                            ? 'text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]' 
                            : 'text-blue-600'
                        }`}>
                          {el.content}
                        </div>
                      )}
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Interaction options */}
          {currentStep.type === 'interaction' && currentStep.interaction?.options && (
            <div className="w-full flex flex-wrap items-center justify-center gap-4 pt-4">
              <AnimatePresence>
                {visibleOptions.map((opt, i) => {
                  const palette = [
                    'bg-blue-500 border-blue-700',
                    'bg-emerald-500 border-emerald-700',
                    'bg-yellow-400 border-yellow-600',
                    'bg-pink-500 border-pink-700',
                  ];
                  const color = palette[i % palette.length];
                  const hasIllust = /\p{Emoji}/u.test(opt) || objetoImg(opt);
                  return (
                    <motion.button
                      key={opt}
                      initial={{ scale: 0, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 220 }}
                      onClick={() => handleInteraction(opt)}
                      className={`${color} text-white w-24 h-24 sm:w-28 sm:h-28 rounded-3xl text-3xl sm:text-4xl font-black shadow-xl border-b-8 hover:scale-105 active:scale-95 transition flex items-center justify-center p-4`}
                    >
                      {hasIllust ? (
                        <RenderEmoji e={opt} className="w-full h-full" label={semEmoji(opt)} />
                      ) : (
                        <span>{opt}</span>
                      )}
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
