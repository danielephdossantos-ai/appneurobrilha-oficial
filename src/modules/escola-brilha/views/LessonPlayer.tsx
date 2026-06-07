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

const CIDADE_LETRAS_LESSON: Lesson = {
  id: 'cidade-letras-1ano',
  title: 'Cidade das Letras',
  grade: 1,
  bncc_field: 'escuta_fala',
  skill_bncc: 'EF01LP07',
  steps: [
    // 1. Vogais
    { id: 'v1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'As vogais são as letras mais amigáveis! Vamos conhecer a letra A.',
      elements: [{ id: 'a-vogal', type: 'text', content: 'A', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'v2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual destas figuras começa com a vogal A?',
      interaction: { type: 'click', correctAnswer: '🍎 MAÇÃ', options: ['🍎 MAÇÃ', '🐶 CACHORRO', '🐱 GATO'] } },
    { id: 'v3', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Agora a letra E de Estrela!',
      elements: [{ id: 'e-vogal', type: 'text', content: 'E', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'v4', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Onde está a Estrela que começa com E?',
      interaction: { type: 'click', correctAnswer: '⭐ ESTRELA', options: ['⭐ ESTRELA', '☀️ SOL', '🌙 LUA'] } },

    // 2. Método Fônico (Consoantes)
    { id: 'l1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Esta é a letra B. O som dela é /b/. B de Bola!',
      elements: [{ id: 'b', type: 'text', content: 'B', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'l2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Escolha a imagem que começa com o som /b/!',
      interaction: { type: 'click', correctAnswer: '⚽ BOLA', options: ['⚽ BOLA', '🐱 GATO', '🐸 SAPO'] } },
    
    // 3. Sílabas
    { id: 'l3', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Quando juntamos B com A, formamos a sílaba BA!',
      elements: [
        { id: 'b-syll', type: 'text', content: 'B', position: { x: -40, y: 0 }, animation: 'pop', delay: 0.1 },
        { id: 'plus', type: 'text', content: '+', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.3 },
        { id: 'a-syll', type: 'text', content: 'A', position: { x: 40, y: 0 }, animation: 'pop', delay: 0.5 }
      ] },
    { id: 'l4', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'B + A faz...',
      interaction: { type: 'click', correctAnswer: 'BA', options: ['BA', 'BE', 'BO'] } },

    // 4. Completar e Ler
    { id: 'l5', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Olhe o Gato! Complete o nome dele: GA-TO.',
      elements: [
        { id: 'gato-img', type: 'text', content: 'GATO', position: { x: 0, y: -40 }, animation: 'bounce', delay: 0.2 },
        { id: 'gato-txt', type: 'text', content: 'GA _ O', position: { x: 0, y: 40 }, animation: 'pop', delay: 0.5 }
      ],
      interaction: { type: 'click', correctAnswer: 'TO', options: ['TO', 'TA', 'TU'] } }
  ]
};

const VALE_NUMEROS_LESSON: Lesson = {
  id: 'vale-numeros-1ano',
  title: 'Vale dos Números',
  grade: 1,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF01MA06',
  steps: [
    // 1. Soma Visual com Frutas
    { id: 'n1', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Vamos somar! Se eu tenho duas maçãs e ganho mais uma, com quantas eu fico?',
      elements: [
        { id: 'a1', type: 'text', content: 'MAÇÃ', position: { x: -80, y: 0 }, animation: 'pop', delay: 0.1 },
        { id: 'a2', type: 'text', content: 'MAÇÃ', position: { x: -40, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'p', type: 'text', content: '+', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.4 },
        { id: 'a3', type: 'text', content: 'MAÇÃ', position: { x: 40, y: 0 }, animation: 'pop', delay: 0.5 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } },
    
    // 2. Subtração Visual (Tirar Frutas)
    { id: 'n2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Tínhamos quatro bananas e o macaco comeu uma. Quantas sobraram?',
      elements: [
        { id: 'b1', type: 'text', content: 'BANANA', position: { x: -60, y: -20 }, animation: 'pop', delay: 0.1 },
        { id: 'b2', type: 'text', content: 'BANANA', position: { x: 0, y: -20 }, animation: 'pop', delay: 0.2 },
        { id: 'b3', type: 'text', content: 'BANANA', position: { x: 60, y: -20 }, animation: 'pop', delay: 0.3 },
        { id: 'b4', type: 'text', content: 'BANANA', position: { x: 0, y: 30 }, animation: 'pop', delay: 0.4 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } },

    // 3. Dezenas
    { id: 'n3', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Quanto valem 2 dezenas?',
      elements: [{ id: 'dez', type: 'text', content: '10 + 10', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: '20', options: ['10', '20', '30'] } }
  ]
};

const MUNDO_DESCOBERTAS_LESSON: Lesson = {
  id: 'mundo-descobertas-1ano',
  title: 'Mundo das Descobertas',
  grade: 1,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF01CI01',
  steps: [
    // Corpo Humano
    { id: 'd1', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Onde está o coração no corpo humano?',
      interaction: { type: 'click', correctAnswer: '❤️', options: ['❤️', '👃', '👂'] } },
    // Animais
    { id: 'd2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual destes animais vive na água?',
      interaction: { type: 'click', correctAnswer: '🐟', options: ['🐶', '🐟', '🐦'] } },
    // Plantas
    { id: 'd3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'O que as plantas precisam para crescer?',
      interaction: { type: 'click', correctAnswer: '☀️', options: ['☀️', '⚽', '🚗'] } },
    // Higiene
    { id: 'd4', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'O que usamos para lavar as mãos?',
      interaction: { type: 'click', correctAnswer: '🧼', options: ['🧼', '🍪', '🧸'] } }
  ]
};

const NOSSO_LUGAR_LESSON: Lesson = {
  id: 'nosso-lugar-1ano',
  title: 'Nosso Lugar',
  grade: 1,
  bncc_field: 'eu_outro_nos',
  skill_bncc: 'EF01HI01',
  steps: [
    // Família
    { id: 'h1', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Quem faz parte da nossa família?',
      interaction: { type: 'click', correctAnswer: 'FAMÍLIA', options: ['FAMÍLIA', 'ESCOLA', 'LOJA'] } },
    // Escola
    { id: 'h2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Onde nós vamos para aprender e brincar com os amigos?',
      interaction: { type: 'click', correctAnswer: '🏫', options: ['🏫', '🏖️', '🍿'] } },
    // Bairro/Localização
    { id: 'h3', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual imagem representa a nossa casa?',
      interaction: { type: 'click', correctAnswer: '🏠', options: ['🏠', '🌳', '☁️'] } }
  ]
};

export const LessonPlayer: React.FC = () => {
  const search = useSearch({ from: '/escola-brilha/aula' }) as { category: string };
  
  const currentLesson =
    search.category === 'matematica' ? VALE_NUMEROS_LESSON :
    search.category === 'ciencias' ? MUNDO_DESCOBERTAS_LESSON :
    search.category === 'historia_geografia' ? NOSSO_LUGAR_LESSON : CIDADE_LETRAS_LESSON;

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
        if (currentStep.type === 'explanation') {
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
      await new Promise(r => setTimeout(r, 1000)); 
      for (const opt of currentStep.interaction.options) {
        setVisibleOptions(prev => [...prev, opt]);
        await new Promise(r => setTimeout(r, 300));
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