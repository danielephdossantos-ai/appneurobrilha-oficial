import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { LessonEnvironment } from '../components/LessonEnvironment';
import { MascotTeacher } from '../components/MascotTeacher';
import { LessonHeader } from '../components/LessonHeader';
import { AudioSpeechService } from '../services/AudioSpeechService';
import { LessonGenerator } from '../services/LessonGenerator';
import { Lesson, LessonPerformance } from '../types/lesson';
import { useSearch } from '@tanstack/react-router';
import { RenderEmoji } from '@/components/neuro-treino/RenderEmoji';
import { semEmoji, objetoImg } from '@/data/neuro-treino/objetos';
import { WORD_BANK } from '../data/content-banks';
import { StudentProgressService } from '../services/StudentProgressService';


// Lições dinâmicas são geradas pelo LessonGenerator
const getWordForContent = (content: string) => {
  const clean = semEmoji(content);
  if (clean) return clean;
  
  // Se for apenas emoji, tenta achar no banco de palavras
  const found = WORD_BANK.find(w => w.emoji === content);
  if (found) return found.text;
  
  return '';
};

const getPortugueseCount = (n: number, content: string) => {
  const word = getWordForContent(content).toLowerCase();
  const feminineWords = ['maça', 'maçã', 'bola', 'asa', 'casa', 'abelha', 'flor', 'lua', 'estrela', 'chuva', 'banana', 'vaca', 'galinha', 'ovelha', 'cabra', 'borboleta', 'princesa', 'morango', 'uva', 'camiseta', 'girafa', 'zebra', 'foca', 'janela', 'vela'];
  const isFeminine = feminineWords.includes(word);
  
  let numStr = n.toString();
  if (n === 1) numStr = isFeminine ? 'uma' : 'um';
  if (n === 2) numStr = isFeminine ? 'duas' : 'dois';
  
  let pluralWord = word;
  if (n > 1) {
    if (word === 'maça' || word === 'maçã') pluralWord = 'maçãs';
    else if (word === 'peixe') pluralWord = 'peixes';
    else if (word === 'avião') pluralWord = 'aviões';
    else if (word === 'balão') pluralWord = 'balões';
    else if (word === 'pião') pluralWord = 'piões';
    else if (word.endsWith('a') || word.endsWith('e') || word.endsWith('o') || word.endsWith('i') || word.endsWith('u')) {
      pluralWord = word + 's';
    } else if (word.endsWith('r') || word.endsWith('z')) {
      pluralWord = word + 'es';
    }
  } else {
    if (word === 'maça') pluralWord = 'maçã';
  }
  
  return `${numStr} ${pluralWord}`;
};

export const LessonPlayer: React.FC = () => {
  const search = useSearch({ from: '/escola-brilha/aula' }) as { category: string };
  
  // Gera uma lição dinâmica baseada na categoria
  const [currentLesson] = useState(() => LessonGenerator.generateByCategory(search.category));

  const interfaceStyle = React.useMemo(() => {
    if (search.category.includes('inf') || search.category.includes('1ano')) return 'A';
    if (['2ano', '3ano', '4ano', '5ano'].some(grade => search.category.includes(grade))) return 'B';
    if (['6ano', '7ano', '8ano', '9ano'].some(grade => search.category.includes(grade))) return 'Modern';
    return 'A'; // Default
  }, [search.category]);


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

    // Para o Pre e 1º Ano, as lições devem ser extremamente simples
    const isInfantOr1st = search.category.includes('inf') || search.category.includes('1ano');

    // If it's an explanation or demonstration, speak the main instruction FIRST
    const isIntro = currentStep.type === 'explanation' || currentStep.type === 'demonstration';
    
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
        
        const isIllustration = objetoImg(el.content) || /\p{Emoji}/u.test(el.content);
        
        // No Pré e 1º Ano, evitamos ler cada elemento individualmente se for muita poluição
        const skipLoopSpeech = isInfantOr1st && currentStep.elements.length > 5;

        // If it's an illustration or demonstration, highlight and speak
        if ((isIllustration || currentStep.type === 'demonstration' || currentStep.type === 'explanation') && !skipLoopSpeech) {
          setHighlightedElementId(el.id);
          setIsSpeaking(true);
          
          let textToSpeak = el.content;
          
          if (isIllustration) {
            if (search.category.includes('matematica')) {
              mathItemCount++;
              textToSpeak = getPortugueseCount(mathItemCount, el.content);
            } else {
              textToSpeak = getWordForContent(el.content);
            }
          }

          if (textToSpeak && !['+', '=', '?', '_'].includes(textToSpeak)) {
            await AudioSpeechService.speak(textToSpeak);
          }
          
          setIsSpeaking(false);
          setHighlightedElementId(null);
          await new Promise(r => setTimeout(r, 400));
        }
      }
    }


    // After elements appear, speak the main instruction and options (if not already spoken)
    const fullSpeech = getStepSpeech(currentStep);
    
    if (!isIntro || (fullSpeech.toLowerCase() !== currentStep.speech.toLowerCase())) {
      setIsSpeaking(true);
      const speechToValue = isIntro ? fullSpeech.replace(currentStep.speech, '').trim() : fullSpeech;
      if (speechToValue && speechToValue !== '.' && speechToValue !== '..') {
        // Limpa o speech para não ler "_" ou outros caracteres técnicos para os pequenos
        const cleanSpeech = isInfantOr1st ? speechToValue.replace(/_/g, '').replace(/\./g, '').replace(/\s+/g, ' ').trim() : speechToValue;
        if (cleanSpeech && cleanSpeech.length > 1) await AudioSpeechService.speak(cleanSpeech);
      }
      setIsSpeaking(false);
    }
    
    if (currentStep.type === 'interaction' && currentStep.interaction?.options) {
      await new Promise(r => setTimeout(r, isInfantOr1st ? 800 : 1500)); 
      for (const opt of currentStep.interaction.options) {
        setVisibleOptions(prev => [...prev, opt]);
        await new Promise(r => setTimeout(r, 500));
      }
    }

    if (currentStep.type === 'explanation' || currentStep.type === 'demonstration') {
      await new Promise(r => setTimeout(r, isInfantOr1st ? 1200 : 1800));
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
      const mastery = StudentProgressService.getMastery(search.category);
      const difficulty = mastery.score > 80 ? 1.5 : mastery.score > 50 ? 1.2 : 1;
      StudentProgressService.saveAttempt(search.category, true, difficulty);
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
      StudentProgressService.saveAttempt(search.category, false);
      setFeedback({ kind: 'err', msg: 'Vamos tentar de novo!' });
      setIsSpeaking(true);
      await AudioSpeechService.speak('Vamos tentar juntos! Olhe com atenção.');
      setIsSpeaking(false);
      await new Promise(r => setTimeout(r, 800));
      runStep();
    }
  };

  // Paleta para opções da Interface B (vibrante igual à referência)
  const interfaceBPalette = [
    { bg: 'bg-rose-100', border: 'border-rose-300', text: 'text-rose-600', ring: 'ring-rose-400' },
    { bg: 'bg-emerald-100', border: 'border-emerald-300', text: 'text-emerald-600', ring: 'ring-emerald-400' },
    { bg: 'bg-amber-100', border: 'border-amber-300', text: 'text-amber-600', ring: 'ring-amber-400' },
    { bg: 'bg-sky-100', border: 'border-sky-300', text: 'text-sky-600', ring: 'ring-sky-400' },
  ];

  // ============ INTERFACE B (2º ao 5º Ano) ============
  if (interfaceStyle === 'B') {
    return (
      <LessonEnvironment variant="B">
        <LessonHeader
          progress={progress}
          missionName={currentLesson.mission_name || currentLesson.title}
          xp={currentLesson.xp || (100 + currentStepIndex * 10)}
          field={currentLesson.bncc_field}
          stepIndex={currentStepIndex}
          totalSteps={currentLesson.steps.length}
        />

        <div className="w-full max-w-2xl px-4 pt-24 pb-72 flex flex-col items-center">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            className="w-full bg-white rounded-[2.5rem] shadow-2xl border-4 border-white overflow-hidden"
          >
            {/* Speech bubble com áudio — topo do card */}
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 border-b-4 border-orange-100 px-6 py-7 sm:py-9">
              <button
                onClick={replaySpeech}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-violet-500 hover:bg-violet-600 text-white flex items-center justify-center shadow-lg active:scale-95 transition"
                aria-label="Ouvir novamente"
              >
                <Volume2 className="w-5 h-5" />
              </button>
              <p className="text-center text-xl sm:text-2xl font-black text-slate-700 leading-snug pr-10">
                {currentStep.speech}
              </p>
            </div>

            {/* Elementos visuais (palavras, imagens, exemplos) */}
            {currentStep.elements && currentStep.elements.length > 0 && (
              <div className="px-5 sm:px-8 py-6 sm:py-8 flex flex-col items-center justify-center gap-4 bg-white">
                <AnimatePresence>
                  {currentStep.elements.map((el: any) => {
                    if (!showElements.includes(el.id)) return null;
                    const hasIllust = /\p{Emoji}/u.test(el.content) || objetoImg(el.content);
                    const isPair = el.content.includes('=') || el.content.includes('≠');
                    return (
                      <motion.div
                        key={el.id}
                        initial={{ scale: 0.7, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                        className="w-full flex items-center justify-center gap-3"
                      >
                        {hasIllust ? (
                          <RenderEmoji e={el.content} className="w-32 h-32 sm:w-40 sm:h-40" />
                        ) : isPair ? (
                          <div className="flex-1 flex items-center justify-center gap-4 bg-violet-50 rounded-2xl py-4 px-5 border-2 border-violet-100 max-w-md">
                            <span className="text-2xl sm:text-3xl font-black text-rose-500 tracking-wide">
                              {el.content.split(/=|≠/)[0].trim()}
                            </span>
                            <span className="text-xl font-black text-violet-400">
                              {el.content.includes('≠') ? '≠' : '='}
                            </span>
                            <span className="text-2xl sm:text-3xl font-black text-emerald-500 tracking-wide">
                              {el.content.split(/=|≠/)[1]?.trim()}
                            </span>
                            <button
                              onClick={() => AudioSpeechService.speak(el.content.replace(/=/g, 'igual a').replace(/≠/g, 'diferente de'))}
                              className="shrink-0 w-9 h-9 rounded-full bg-violet-500 text-white flex items-center justify-center shadow active:scale-95"
                              aria-label="Ouvir"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex-1 max-w-md bg-violet-50 rounded-2xl py-4 px-5 border-2 border-violet-100 flex items-center justify-between gap-3">
                            <p className="flex-1 text-center text-lg sm:text-xl font-black text-slate-700">
                              {el.content}
                            </p>
                            <button
                              onClick={() => AudioSpeechService.speak(semEmoji(el.content))}
                              className="shrink-0 w-9 h-9 rounded-full bg-violet-500 text-white flex items-center justify-center shadow active:scale-95"
                              aria-label="Ouvir"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}

            {/* Opções de interação — cards horizontais coloridos */}
            {currentStep.type === 'interaction' && currentStep.interaction?.options && (
              <div className="px-5 sm:px-8 py-6 flex flex-col gap-3 bg-white border-t border-slate-100">
                <AnimatePresence>
                  {visibleOptions.map((opt, i) => {
                    const c = interfaceBPalette[i % interfaceBPalette.length];
                    const hasIllust = /\p{Emoji}/u.test(opt) || objetoImg(opt);
                    return (
                      <motion.button
                        key={opt}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 220, delay: i * 0.05 }}
                        onClick={() => handleInteraction(opt)}
                        className={`w-full ${c.bg} ${c.border} ${c.text} border-2 rounded-2xl py-4 px-5 flex items-center justify-center gap-3 shadow-sm hover:scale-[1.02] active:scale-95 transition font-black text-xl sm:text-2xl uppercase tracking-wide`}
                      >
                        {hasIllust ? (
                          <RenderEmoji e={opt} className="w-14 h-14" label={semEmoji(opt)} />
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

        <MascotTeacher type={currentStep.mascot} isSpeaking={isSpeaking} size="large" />

        <FeedbackOverlay feedback={feedback} />
      </LessonEnvironment>
    );
  }

  // ============ INTERFACE MODERNA / C (6º ao 9º Ano) ============
  if (isModern) {
    return (
      <LessonEnvironment variant="Modern">
        {/* Sidebar fixa (desktop) */}
        <aside className="hidden md:flex fixed top-0 left-0 h-full w-16 bg-slate-900 flex-col items-center py-6 gap-5 z-40">
          <button onClick={() => window.history.back()} className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center" aria-label="Voltar">
            <Volume2 className="w-5 h-5 rotate-180" />
          </button>
          <div className="flex-1" />
        </aside>

        {/* Topbar Moderno */}
        <div className="fixed top-0 left-0 md:left-16 right-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-8 py-3 flex items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="md:hidden w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center"
            aria-label="Voltar"
          >
            ←
          </button>
          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
            />
          </div>
          <span className="text-xs font-bold text-slate-500 shrink-0">{currentStepIndex + 1}/{currentLesson.steps.length}</span>
          <div className="shrink-0 flex items-center gap-1.5 bg-indigo-50 px-3 py-1.5 rounded-full">
            <span className="text-xs font-black text-indigo-600">{currentLesson.xp || (100 + currentStepIndex * 10)} XP</span>
          </div>
        </div>

        <div className="w-full max-w-4xl md:pl-16 px-4 pt-24 pb-24 flex flex-col items-center">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
          >
            {/* Header do card */}
            <div className="bg-slate-900 px-6 sm:px-10 py-6 flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-2">
                  {currentStep.phase === 'challenge' ? 'Desafio' :
                   currentStep.phase === 'explanation' ? 'Missão' :
                   currentStep.phase === 'demonstration' ? 'Exploração' :
                   currentStep.phase === 'mastery' ? 'Domínio' : 'Prática'}
                </p>
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {currentStep.speech}
                </h2>
              </div>
              <button
                onClick={replaySpeech}
                className="shrink-0 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                aria-label="Ouvir"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Elementos */}
            {currentStep.elements && currentStep.elements.length > 0 && (
              <div className="px-6 sm:px-10 py-8 bg-slate-50 border-b border-slate-200">
                <div className="flex flex-col gap-3">
                  <AnimatePresence>
                    {currentStep.elements.map((el: any, idx: number) => {
                      if (!showElements.includes(el.id)) return null;
                      const hasIllust = /\p{Emoji}/u.test(el.content) || objetoImg(el.content);
                      const iconColors = ['bg-sky-100 text-sky-600', 'bg-rose-100 text-rose-600', 'bg-emerald-100 text-emerald-600', 'bg-amber-100 text-amber-600'];
                      const c = iconColors[idx % iconColors.length];
                      return (
                        <motion.div
                          key={el.id}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-4 shadow-sm"
                        >
                          <div className={`shrink-0 w-12 h-12 rounded-lg ${c} flex items-center justify-center font-black text-lg`}>
                            {hasIllust ? <RenderEmoji e={el.content} className="w-8 h-8" /> : (idx + 1)}
                          </div>
                          <p className="flex-1 text-sm sm:text-base font-semibold text-slate-700 leading-snug">
                            {el.content}
                          </p>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {/* Opções A/B/C/D */}
            {currentStep.type === 'interaction' && currentStep.interaction?.options && (
              <div className="px-6 sm:px-10 py-6 flex flex-col gap-3 bg-white">
                <AnimatePresence>
                  {visibleOptions.map((opt, i) => {
                    const letter = String.fromCharCode(65 + i);
                    return (
                      <motion.button
                        key={opt}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => handleInteraction(opt)}
                        className="w-full text-left bg-white border-2 border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40 rounded-xl px-4 py-4 flex items-center gap-4 transition group"
                      >
                        <div className="shrink-0 w-10 h-10 rounded-full bg-slate-100 group-hover:bg-indigo-500 group-hover:text-white text-slate-600 flex items-center justify-center font-black text-base transition">
                          {letter}
                        </div>
                        <span className="flex-1 text-sm sm:text-base font-semibold text-slate-700">{opt}</span>
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>

        {/* Mascote mentor — pequeno, canto inferior direito, só quando fala */}
        {(isSpeaking || feedback || currentStepIndex === 0 || currentStepIndex === currentLesson.steps.length - 1) && (
          <MascotTeacher type={currentStep.mascot} isSpeaking={isSpeaking} size="mentor" />
        )}

        <FeedbackOverlay feedback={feedback} />
      </LessonEnvironment>
    );
  }

  // ============ INTERFACE A (Pré e 1º Ano) — preserva visual original ============
  return (
    <LessonEnvironment variant="A">
      <LessonHeader
        progress={progress}
        missionName={currentLesson.mission_name || currentLesson.title}
        xp={currentLesson.xp || (100 + currentStepIndex * 10)}
        field={currentLesson.bncc_field}
        stepIndex={currentStepIndex}
        totalSteps={currentLesson.steps.length}
      />

      <div className="w-full max-w-md px-4 pt-24 pb-56 flex flex-col items-center">
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          className="w-full bg-white rounded-3xl shadow-2xl border-4 border-white p-5 sm:p-6 flex flex-col items-center gap-5"
        >
          {/* Instrução: Apenas botão de áudio visível para os pequenos, evitando poluição de texto */}
          <div className="w-full flex items-center justify-center py-2">
            <button
              onClick={replaySpeech}
              className="w-16 h-16 rounded-full bg-violet-100 hover:bg-violet-200 text-violet-600 flex items-center justify-center active:scale-95 transition shadow-lg border-4 border-white"
              aria-label="Ouvir instrução"
            >
              <Volume2 className="w-8 h-8" />
            </button>
          </div>

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
                        highlightedElementId === el.id ? 'scale-110' : 'scale-100 cursor-pointer'
                      }`}
                    >
                      {(/\p{Emoji}/u.test(el.content) || objetoImg(el.content)) ? (
                        <div className={highlightedElementId === el.id ? 'drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]' : ''}>
                          <RenderEmoji e={el.content} className="w-24 h-24 sm:w-32 sm:h-32" />
                        </div>
                      ) : (
                        <div className={`text-5xl sm:text-6xl font-black px-2 transition-all duration-300 ${
                          highlightedElementId === el.id ? 'text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]' : 'text-blue-600'
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

      <MascotTeacher type={currentStep.mascot} isSpeaking={isSpeaking} size="large" />
      <FeedbackOverlay feedback={feedback} />
    </LessonEnvironment>
  );
};

const FeedbackOverlay: React.FC<{ feedback: { kind: 'ok' | 'err' | 'done'; msg: string } | null }> = ({ feedback }) => (
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
);

