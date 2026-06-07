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


const PORTUGUES_2ANO_LESSON: Lesson = {
  id: 'portugues-2ano-leitura',
  title: 'Leitura e Escrita - 2º Ano',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EF02LP01',
  steps: [
    { id: 'p2s1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Vamos ler frases juntos!',
      elements: [{ id: 'frase-1', type: 'text', content: 'O gato subiu no telhado.', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.3 }] },
    { id: 'p2s2', phase: 'demonstration', type: 'demonstration', mascot: 'pip',
      speech: 'Veja como separamos as sílabas de TELHADO!',
      elements: [
        { id: 'tel', type: 'text', content: 'TEL', position: { x: -60, y: 0 }, animation: 'bounce', delay: 0.2 },
        { id: 'ha', type: 'text', content: 'HA', position: { x: 0, y: 0 }, animation: 'bounce', delay: 0.5 },
        { id: 'do', type: 'text', content: 'DO', position: { x: 60, y: 0 }, animation: 'bounce', delay: 0.8 }
      ] },
    { id: 'p2s3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Qual é a primeira sílaba de TELHADO?',
      interaction: { type: 'click', correctAnswer: 'TEL', options: ['TEL', 'TE', 'TAL'] } }
  ]
};

const MATEMATICA_2ANO_LESSON: Lesson = {
  id: 'matematica-2ano-calculo',
  title: 'Adição e Subtração - 2º Ano',
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF02MA01',
  steps: [
    { id: 'm2s1', phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: 'Vamos somar! Quanto é 5 mais 3?',
      elements: [{ id: 'calc-1', type: 'text', content: '5 + 3 = ?', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.3 }] },
    { id: 'm2s2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Escolha o resultado correto!',
      interaction: { type: 'click', correctAnswer: '8', options: ['7', '8', '9'] } }
  ]
};

const ANO3_5_LESSON: Lesson = {
  id: 'ano3-5-demo',
  title: 'Desafios do 3º ao 5º Ano',
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF03CI01',
  steps: [
    { id: 'a3s1', phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: 'Bem-vindo ao ciclo fundamental! Aqui os problemas são mais elaborados.',
      elements: [{ id: 'txt-1', type: 'text', content: 'O ciclo da água é fundamental para a vida na Terra.', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.3 }] },
    { id: 'a3s2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'O que acontece quando a água aquece e sobe para as nuvens?',
      interaction: { type: 'click', correctAnswer: 'Evaporação', options: ['Evaporação', 'Chuva', 'Gelo'] } }
  ]
};

const FUNDAMENTAL2_LESSON: Lesson = {
  id: 'fund2-demo',
  title: 'Plataforma 6º ao 9º Ano',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EF06HI01',
  steps: [
    { id: 'f2s1', phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: 'Neste nível, focamos no pensamento crítico e na resolução de problemas complexos.',
      elements: [{ id: 'txt-hist', type: 'text', content: 'As civilizações antigas moldaram o mundo moderno.', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.3 }] },
    { id: 'f2s2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Qual civilização é conhecida pelas pirâmides?',
      interaction: { type: 'click', correctAnswer: 'Egípcia', options: ['Egípcia', 'Romana', 'Grega'] } }
  ]
};

const PORTUGUES_1ANO_LESSON: Lesson = {
  id: 'leitura-primeiros-passos',
  title: 'Primeiros Passos na Leitura',
  bncc_field: 'escuta_fala',
  skill_bncc: 'EF01LP06',
  steps: [
    { id: 's1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Qual é a primeira sílaba de CASA?',
      elements: [{ id: 'casa-full', type: 'text', content: 'casa', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.3 }] },
    { id: 's2', phase: 'demonstration', type: 'demonstration', mascot: 'pip',
      speech: 'Vamos separar as sílabas de CASA!',
      elements: [
        { id: 'ca', type: 'text', content: 'CA', position: { x: -60, y: 0 }, animation: 'bounce', delay: 0.2 },
        { id: 'sa', type: 'text', content: 'SA', position: { x: 60, y: 0 }, animation: 'bounce', delay: 0.6 }
      ] },
    { id: 's3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Qual é a primeira sílaba de CASA?',
      elements: [{ id: 'ref-casa', type: 'text', content: 'casa', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'CA', options: ['CA', 'BO', 'PA'] } },
    { id: 's4', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'ESCOLHA A IMAGEM CORRETA! BOLO',
      elements: [{ id: 'w', type: 'text', content: 'bolo', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'bolo', options: ['bolo', 'carro', 'cachorro'] } },
    { id: 's5', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'O gato dorme. Quem dorme?',
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
      speech: 'Quantas maçãs temos aqui?',
      elements: [
        { id: 'a1', type: 'text', content: 'maça', position: { x: -80, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'a2', type: 'text', content: 'maça', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'a3', type: 'text', content: 'maça', position: { x: 80, y: 0 }, animation: 'pop', delay: 0.6 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } },
    { id: 'm2', phase: 'demonstration', type: 'demonstration', mascot: 'pip',
      speech: 'Vamos juntar as frutinhas!',
      elements: [
        { id: 'd1', type: 'text', content: 'maça', position: { x: -90, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'd2', type: 'text', content: 'maça', position: { x: -30, y: 0 }, animation: 'pop', delay: 0.5 },
        { id: 'plus', type: 'text', content: '+', position: { x: 20, y: 0 }, animation: 'fade', delay: 0.7 },
        { id: 'd3', type: 'text', content: 'maça', position: { x: 80, y: 0 }, animation: 'pop', delay: 0.9 },
      ] },
    { id: 'm3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Quantas maçãs ao todo?',
      elements: [
        { id: 'r1', type: 'text', content: 'maça', position: { x: -90, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'r2', type: 'text', content: 'maça', position: { x: -30, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'r3', type: 'text', content: 'maça', position: { x: 30, y: 0 }, animation: 'pop', delay: 0.6 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['1', '2', '3'] } },
    { id: 'm4', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Tínhamos peixinhos e um saiu. Quantos sobraram?',
      elements: [
        { id: 'p1', type: 'text', content: 'peixe', position: { x: -90, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'p2', type: 'text', content: 'peixe', position: { x: -30, y: 0 }, animation: 'pop', delay: 0.4 },
        { id: 'p3', type: 'text', content: 'peixe', position: { x: 30, y: 0 }, animation: 'pop', delay: 0.6 },
      ],
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
        { id: 'c', type: 'text', content: 'casa', position: { x: -60, y: 0 }, animation: 'bounce', delay: 0.3 },
        { id: 'a', type: 'text', content: 'asa', position: { x: 60, y: 0 }, animation: 'bounce', delay: 0.7 }
      ] },
    { id: 'r2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'O que rima com CASA?',
      elements: [{ id: 'ref', type: 'text', content: 'casa', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: 'asa', options: ['bola', 'asa'] } }
  ]
};

const getPortugueseCount = (n: number, word: string) => {
  const feminineWords = ['maça', 'maçã', 'bola', 'asa', 'casa', 'abelha', 'flor', 'lua', 'estrela', 'chuva', 'banana', 'vaca', 'galinha', 'ovelha', 'cabra', 'borboleta', 'princesa', 'morango', 'uva', 'camiseta'];
  const isFeminine = feminineWords.includes(word.toLowerCase());
  
  let numStr = n.toString();
  if (n === 1) numStr = isFeminine ? 'uma' : 'um';
  if (n === 2) numStr = isFeminine ? 'duas' : 'dois';
  
  let pluralWord = word;
  const lower = word.toLowerCase();
  if (n > 1) {
    if (lower === 'maça' || lower === 'maçã') pluralWord = 'maçãs';
    else if (lower === 'peixe') pluralWord = 'peixes';
    else if (lower.endsWith('a') || lower.endsWith('e') || lower.endsWith('o') || lower.endsWith('i') || lower.endsWith('u')) {
      pluralWord = word + 's';
    } else if (lower.endsWith('r') || lower.endsWith('z')) {
      pluralWord = word + 'es';
    }
  } else {
    if (lower === 'maça') pluralWord = 'maçã';
  }
  
  return `${numStr} ${pluralWord}`;
};

export const LessonPlayer: React.FC = () => {
  const search = useSearch({ from: '/escola-brilha/aula' }) as { category: string };
  const currentLesson =
    search.category === 'matematica' ? MATH_LESSON :
    search.category === 'portugues_1ano' ? PORTUGUES_1ANO_LESSON : LANG_LESSON;

  const interfaceStyle = 
    ['portugues', 'portugues_1ano', 'matematica'].includes(search.category) ? 'A' :
    ['portugues_2ano', 'matematica_2ano'].includes(search.category) ? 'B' :
    search.category === 'ano3_5' ? 'C' : 'Modern';

  const isModern = interfaceStyle === 'Modern';

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
      
      if (elementsText && !text.toLowerCase().includes(elementsText.toLowerCase())) {
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
    AudioSpeechService.stop();
    setShowElements([]);
    setVisibleOptions([]);
    setFeedback(null);
    setHighlightedElementId(null);

    await new Promise(r => setTimeout(r, 100));

    // If it's an explanation or demonstration, speak the main instruction FIRST
    const isIntro = currentStep.type === 'explanation' || currentStep.type === 'demonstration';
    let mainSpeechPromise = Promise.resolve();
    
    if (isIntro) {
      setIsSpeaking(true);
      await AudioSpeechService.speak(currentStep.speech);
      setIsSpeaking(false);
      await new Promise(r => setTimeout(r, 400));
    }

    // Show elements and speak them if they are part of a demonstration/explanation
    if (currentStep.elements) {
      let mathItemCount = 0;
      for (const el of currentStep.elements) {
        await new Promise(r => setTimeout(r, (el.delay || 0) * 1000));
        setShowElements(prev => [...prev, el.id]);
        
        const isMathObject = search.category === 'matematica' && (objetoImg(el.content) || /\p{Emoji}/u.test(el.content));
        
        // If it's a math object or demonstration, highlight and speak
        if (isMathObject || currentStep.type === 'demonstration' || currentStep.type === 'explanation') {
          setHighlightedElementId(el.id);
          setIsSpeaking(true);
          
          let textToSpeak = el.content;
          if (isMathObject) {
            mathItemCount++;
            textToSpeak = getPortugueseCount(mathItemCount, el.content);
          }

          await AudioSpeechService.speak(textToSpeak);
          setIsSpeaking(false);
          setHighlightedElementId(null);
          await new Promise(r => setTimeout(r, 400));
        }
      }
    }

    // After elements appear, speak the main instruction and options (if not already spoken)
    const fullSpeech = getStepSpeech(currentStep);
    
    // For interaction steps, we speak the full speech now.
    // For intro steps, we only speak if there's something new in fullSpeech compared to what we just said
    if (!isIntro || (fullSpeech.toLowerCase() !== currentStep.speech.toLowerCase())) {
      setIsSpeaking(true);
      const speechToValue = isIntro ? fullSpeech.replace(currentStep.speech, '').trim() : fullSpeech;
      if (speechToValue && speechToValue !== '.' && speechToValue !== '..') {
        await AudioSpeechService.speak(speechToValue);
      }
      setIsSpeaking(false);
    }
    
    if (currentStep.type === 'interaction' && currentStep.interaction?.options) {
      await new Promise(r => setTimeout(r, 1500)); 
      for (const opt of currentStep.interaction.options) {
        setVisibleOptions(prev => [...prev, opt]);
        await new Promise(r => setTimeout(r, 500));
      }
    }


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
    <div className={isModern ? 'bg-slate-50' : ''}>
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
          className={`w-full ${
            interfaceStyle === 'C' ? 'max-w-2xl' : isModern ? 'max-w-3xl' : 'max-w-md'
          } bg-white rounded-3xl shadow-2xl border-4 ${isModern ? 'border-indigo-100' : 'border-white'} p-5 sm:p-6 flex flex-col items-center gap-5`}
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
                      onClick={() => {
                        if (currentStep.type === 'interaction' && search.category === 'matematica') {
                          const items = currentStep.elements?.filter((e: any) => objetoImg(e.content) || /\p{Emoji}/u.test(e.content)) || [];
                          const index = items.findIndex((e: any) => e.id === el.id);
                          if (index !== -1) {
                            setHighlightedElementId(el.id);
                            AudioSpeechService.speak(getPortugueseCount(index + 1, el.content)).then(() => {
                              setHighlightedElementId(null);
                            });
                          }
                        }
                      }}
                      className={`flex flex-col items-center justify-center transition-all duration-300 ${
                        highlightedElementId === el.id 
                          ? 'scale-110' 
                          : 'scale-100 cursor-pointer'
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
                    'bg-blue-50 border-blue-100 text-blue-600',
                    'bg-emerald-50 border-emerald-100 text-emerald-600',
                    'bg-yellow-50 border-yellow-100 text-yellow-600',
                    'bg-pink-50 border-pink-100 text-pink-600',
                  ];
                  const colorClasses = palette[i % palette.length];
                  const hasIllust = /\p{Emoji}/u.test(opt) || objetoImg(opt);
                  const isNumber = /^\d+$/.test(opt);
                  const fontSize = hasIllust ? '' : 
                                   isNumber ? 'text-[8rem] sm:text-[10rem]' :
                                   opt.length === 1 ? 'text-7xl sm:text-8xl' : 
                                   opt.length === 2 ? 'text-5xl sm:text-6xl' : 'text-3xl sm:text-4xl';
                  return (
                    <motion.button
                      key={opt}
                      initial={{ scale: 0, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 220 }}
                      onClick={() => handleInteraction(opt)}
                      className={`${colorClasses} w-24 h-24 sm:w-32 sm:h-32 rounded-full ${fontSize} font-black shadow-lg border-4 hover:scale-105 active:scale-95 transition flex items-center justify-center p-0 overflow-visible`}
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
      <MascotTeacher 
        type={currentStep.mascot} 
        isSpeaking={isSpeaking} 
        size={
          interfaceStyle === 'C' ? 'medium' : 
          isModern ? 'mentor' : 'large'
        }
      />

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
    </div>
  );
};
