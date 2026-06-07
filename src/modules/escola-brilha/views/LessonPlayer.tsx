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
  title: 'Primeiros Passos na Leitura',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EF01LP06',
  steps: [
    { id: 's1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      displayText: 'CASA',
      speechText: 'Vamos aprender uma palavra nova! Esta palavra é casa.',
      elements: [{ id: 'casa-full', type: 'text', content: 'casa', speechText: 'casa', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.3 }] },
    { id: 's2', phase: 'demonstration', type: 'demonstration', mascot: 'pip',
      displayText: 'CA - SA',
      speechText: 'Agora, vamos separar os pedacinhos da palavra casa. Escute com atenção!',
      elements: [
        { id: 'ca', type: 'text', content: 'CA', speechText: 'Esta é a sílaba CA.', position: { x: -60, y: 0 }, animation: 'bounce', delay: 0.2 },
        { id: 'sa', type: 'text', content: 'SA', speechText: 'E esta é a sílaba SA.', position: { x: 60, y: 0 }, animation: 'bounce', delay: 0.6 }
      ] },
    { id: 's3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      displayText: 'CASA',
      speechText: 'Olhe para a palavra casa. Qual é o primeiro pedacinho dela? É o CA, o BO ou o PA?',
      elements: [{ id: 'ref-casa', type: 'text', content: 'casa', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'CA', options: ['CA', 'BO', 'PA'] } },
    { id: 's4', phase: 'practice', type: 'interaction', mascot: 'pip',
      displayText: 'BOLO',
      speechText: 'Escolha a imagem que representa o bolo!',
      elements: [{ id: 'w', type: 'text', content: 'bolo', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'bolo', options: ['bolo', 'carro', 'cachorro'] } },
    { id: 's5', phase: 'practice', type: 'interaction', mascot: 'pipa',
      displayText: 'O GATO DORME',
      speechText: 'O gato está dormindo. Quem é que está dormindo?',
      interaction: { type: 'click', correctAnswer: 'gato', options: ['gato', 'cachorro', 'passarinho'] }
    }
  ]
};

const MATH_LESSON: Lesson = {
  id: 'matematica-1ano',
  title: 'Matemática Divertida',
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF01MA06',
  steps: [
    { id: 'm1', phase: 'practice', type: 'interaction', mascot: 'pipa',
      displayText: 'QUANTAS MAÇÃS?',
      speechText: 'Conte as maçãs que aparecem na tela. Quantas maçãs nós temos aqui? São duas, três ou quatro?',
      elements: [
        { id: 'a1', type: 'text', content: 'maça', position: { x: -80, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'a2', type: 'text', content: 'maça', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'a3', type: 'text', content: 'maça', position: { x: 80, y: 0 }, animation: 'pop', delay: 0.6 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } },
    { id: 'm2', phase: 'demonstration', type: 'demonstration', mascot: 'pip',
      displayText: 'VAMOS SOMAR',
      speechText: 'Vamos juntar todas essas frutinhas para ver quantas ficam juntas!',
      elements: [
        { id: 'd1', type: 'text', content: 'maça', position: { x: -90, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'd2', type: 'text', content: 'maça', position: { x: -30, y: 0 }, animation: 'pop', delay: 0.5 },
        { id: 'plus', type: 'text', content: '+', position: { x: 20, y: 0 }, animation: 'fade', delay: 0.7 },
        { id: 'd3', type: 'text', content: 'maça', position: { x: 80, y: 0 }, animation: 'pop', delay: 0.9 },
      ] },
    { id: 'm3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      displayText: 'TOTAL DE MAÇÃS',
      speechText: 'Se a gente juntar todas essas maçãs, quantas teremos ao todo? Uma, duas ou três?',
      elements: [
        { id: 'r1', type: 'text', content: 'maça', position: { x: -90, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'r2', type: 'text', content: 'maça', position: { x: -30, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'r3', type: 'text', content: 'maça', position: { x: 30, y: 0 }, animation: 'pop', delay: 0.6 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['1', '2', '3'] } },
    { id: 'm4', phase: 'practice', type: 'interaction', mascot: 'pip',
      displayText: 'SOBROU QUANTOS?',
      speechText: 'Nós tínhamos alguns peixinhos, mas um deles nadou para longe. Quantos peixinhos sobraram agora?',
      elements: [
        { id: 'p1', type: 'text', content: 'peixe', position: { x: -90, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'p2', type: 'text', content: 'peixe', position: { x: -30, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'p3', type: 'text', content: 'peixe', position: { x: 30, y: 0 }, animation: 'pop', delay: 0.6 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } },
    { id: 'm5', phase: 'practice', type: 'interaction', mascot: 'pipa',
      displayText: 'QUAL É O PRÓXIMO?',
      speechText: 'Olhe para os números: um, dois, três... Qual é o número que vem logo depois do três?',
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
      displayText: 'VAMOS RIMAR!',
      speechText: 'Hoje vamos descobrir as rimas! Rima é quando as palavras terminam com o mesmo som, como casa e asa.',
      elements: [
        { id: 'c', type: 'text', content: 'casa', position: { x: -60, y: 0 }, animation: 'bounce', delay: 0.3 },
        { id: 'a', type: 'text', content: 'asa', position: { x: 60, y: 0 }, animation: 'bounce', delay: 0.7 }
      ] },
    { id: 'r2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      displayText: 'O QUE RIMA COM CASA?',
      speechText: 'Escute bem: o que rima com a palavra casa? Será que é bola ou é asa?',
      elements: [{ id: 'ref', type: 'text', content: 'casa', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'asa', options: ['bola', 'asa'] } }
  ]
};

export const LessonPlayer: React.FC = () => {
  const search = useSearch({ from: '/escola-brilha/aula' }) as { category: string };
  const currentLesson =
    search.category === 'matematica' ? VALE_NUMEROS_LESSON :
    search.category === 'portugues' ? PRE_SCHOOL_LESSON : FLORESTA_ATENCAO_LESSON;

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
    // Priority 1: speechText (mandatory now)
    // We no longer automatically build speech from elements to follow pedagogical rules
    return step.speechText;
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
          // Use element's specific speechText or fallback to content
          const elSpeech = el.speechText || el.content;
          await AudioSpeechService.speak(elSpeech);
          setIsSpeaking(false);
          setHighlightedElementId(null);
          await new Promise(r => setTimeout(r, 400)); // Pause between elements
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
              {currentStep.displayText || currentStep.speechText}
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
