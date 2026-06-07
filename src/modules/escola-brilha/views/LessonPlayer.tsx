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

const PRE_SCHOOL_LESSON: Lesson = {
  id: 'pre-escola-cidade-letras',
  title: 'Cidade das Letras',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EI03EF01',
  steps: [
    { id: 'v1', phase: 'practice', type: 'interaction', mascot: 'pipa',
      displayText: 'ENCONTRE A LETRA A',
      speechText: 'Olá amiguinho! Vamos brincar de procurar? Encontre para mim a letra A, de abelha!',
      elements: [
        { id: 'a1', type: 'text', content: '🍎 A', position: { x: -80, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'a2', type: 'text', content: '🐶 P', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'a3', type: 'text', content: '🚗 O', position: { x: 80, y: 0 }, animation: 'pop', delay: 0.6 },
      ],
      interaction: { type: 'click', correctAnswer: '🍎 A', options: ['🍎 A', '🐶 P', '🚗 O'] } },
    { id: 'v2', phase: 'practice', type: 'interaction', mascot: 'pip',
      displayText: 'QUAL LETRA COMEÇA BOLA?',
      speechText: 'Olha que bola legal! Você sabe com qual letra começa a palavra bola? É com o B, com o M ou com o P?',
      elements: [{ id: 'img-bola', type: 'text', content: 'bola', position: { x: 0, y: 0 }, animation: 'bounce', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'B', options: ['B', 'M', 'P'] } },
    { id: 'v3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      displayText: 'QUEM FAZ ESTE SOM?',
      speechText: 'Escute com muita atenção... Miau! Qual desses animaizinhos faz esse som? É o gatinho, o cachorrinho ou a galinha?',
      elements: [{ id: 'som-gato', type: 'text', content: '🐱', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'gato', options: ['gato', 'cachorro', 'galinha'] } },
    { id: 'v4', phase: 'practice', type: 'interaction', mascot: 'pip',
      displayText: 'ASSOCIAÇÃO DE CORES',
      speechText: 'Veja a cor deste sol radiante! Ele é amarelo. Qual destas frutas também tem a cor amarela? É a banana, a maçã ou a uva?',
      elements: [{ id: 'sol-ref', type: 'text', content: 'sol', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'banana', options: ['banana', 'maca', '🍇'] } },
    { id: 'v5', phase: 'practice', type: 'interaction', mascot: 'pipa',
      displayText: 'O QUE COMEMOS?',
      speechText: 'Estou com um pouquinho de fome! Qual destes objetos nós podemos comer? É o bolo, o carro ou o robô?',
      elements: [{ id: 'comida-ref', type: 'text', content: '😋', position: { x: 0, y: 0 }, animation: 'bounce', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'bolo', options: ['bolo', 'carro', 'robo'] } }
  ]
};

const VALE_NUMEROS_LESSON: Lesson = {
  id: 'vale-dos-numeros',
  title: 'Vale dos Números',
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EI03ET07',
  steps: [
    { id: 'n1', phase: 'practice', type: 'interaction', mascot: 'pip',
      displayText: 'QUANTAS MAÇÃS?',
      speechText: 'Hum, que maçãs deliciosas! Conte devagarzinho... Quantas maçãs existem na tela? Uma, três ou cinco?',
      elements: [
        { id: 'm1', type: 'text', content: 'maça', position: { x: -60, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'm2', type: 'text', content: 'maça', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'm3', type: 'text', content: 'maça', position: { x: 60, y: 0 }, animation: 'pop', delay: 0.6 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['1', '3', '5'] } },
    { id: 'n2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      displayText: 'COLOQUE 4 ESTRELAS NA CAIXA',
      speechText: 'Agora um desafio! Precisamos colocar quatro estrelas brilhantes dentro da caixa. Você consegue me ajudar?',
      elements: [
        { id: 'n4', type: 'text', content: '4', position: { x: 0, y: -40 }, animation: 'pop', delay: 0.2 },
        { id: 'box', type: 'text', content: '🎁', position: { x: 0, y: 40 }, animation: 'fade', delay: 0.5 }
      ],
      interaction: { type: 'click', correctAnswer: '⭐⭐⭐⭐', options: ['⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'] } },
    { id: 'n3', phase: 'practice', type: 'interaction', mascot: 'pip',
      displayText: 'QUAL É O MAIOR?',
      speechText: 'Olhe para estes dois amigos: o leão e a abelha. Qual deles é o maior de todos? É o leão ou é a abelha?',
      elements: [
        { id: 'big', type: 'text', content: 'leao', position: { x: -60, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'small', type: 'text', content: 'abelha', position: { x: 60, y: 0 }, animation: 'pop', delay: 0.4 }
      ],
      interaction: { type: 'click', correctAnswer: 'leao', options: ['leao', 'abelha'] } }
  ]
};

const FLORESTA_ATENCAO_LESSON: Lesson = {
  id: 'floresta-atencao',
  title: 'Floresta da Atenção',
  bncc_field: 'eu_outro_nos',
  skill_bncc: 'EI03EO02',
  steps: [
    { id: 'mem1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      displayText: 'O QUE SUMIU?',
      speechText: 'Olhe bem para estas frutinhas: a maçã, a banana e a uva. Memorize elas!',
      elements: [
        { id: 'f1', type: 'text', content: 'maça', position: { x: -80, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'f2', type: 'text', content: 'banana', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'f3', type: 'text', content: '🍇', position: { x: 80, y: 0 }, animation: 'pop', delay: 0.6 },
      ] },
    { id: 'mem2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      displayText: 'QUAL FRUTINHA SUMIU?',
      speechText: 'Agora feche os olhos... Prontinho! Uma frutinha sumiu. Você sabe qual delas não está mais aqui? Foi a maçã ou foi a banana?',
      elements: [
        { id: 'f1r', type: 'text', content: 'maça', position: { x: -40, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'f3r', type: 'text', content: '🍇', position: { x: 40, y: 0 }, animation: 'pop', delay: 0.4 },
      ],
      interaction: { type: 'click', correctAnswer: 'banana', options: ['banana', 'maca'] } },
    { id: 'log1', phase: 'practice', type: 'interaction', mascot: 'pip',
      displayText: 'QUEM NÃO PERTENCE?',
      speechText: 'Aqui temos uma maçã, uma banana e um carro. Um deles não é uma fruta! Qual deles não pertence ao grupo das frutas?',
      elements: [
        { id: 'l1', type: 'text', content: 'maça', position: { x: -80, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'l2', type: 'text', content: 'banana', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'l3', type: 'text', content: 'carro', position: { x: 80, y: 0 }, animation: 'pop', delay: 0.6 }
      ],
      interaction: { type: 'click', correctAnswer: 'carro', options: ['maca', 'banana', 'carro'] } }
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
