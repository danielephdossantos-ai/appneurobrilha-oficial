import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Volume2, ChevronRight, Star, Check, X } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { ActivityLesson, PraticarOption } from '../types/activity-lesson';
import { AudioSpeechService } from '../services/AudioSpeechService';
import pipImg from '@/assets/pip-mascot.png';
import pipaImg from '@/assets/pip-girl-mascot.png';

interface ActivityPlayerProps {
  lesson: ActivityLesson;
}

type ScreenId = 'explicacao' | 'exploracao' | 'explicacao_curta' | 'exemplo_visual' | 'praticar';

const SCREENS: { id: ScreenId; label: string; color: string; dot: string }[] = [
  { id: 'explicacao', label: 'EXPLICAÇÃO', color: 'bg-violet-500', dot: 'bg-violet-500' },
  { id: 'exploracao', label: 'EXPLORAÇÃO', color: 'bg-teal-500', dot: 'bg-teal-500' },
  { id: 'explicacao_curta', label: 'EXPLICAÇÃO CURTA', color: 'bg-blue-500', dot: 'bg-blue-500' },
  { id: 'exemplo_visual', label: 'EXEMPLO VISUAL', color: 'bg-amber-500', dot: 'bg-amber-500' },
  { id: 'praticar', label: 'VAMOS PRATICAR', color: 'bg-emerald-500', dot: 'bg-emerald-500' },
];

const OPTION_STYLES: Record<string, string> = {
  red: 'bg-red-500 border-red-700 hover:bg-red-400 active:bg-red-600',
  green: 'bg-emerald-500 border-emerald-700 hover:bg-emerald-400 active:bg-emerald-600',
  orange: 'bg-orange-500 border-orange-700 hover:bg-orange-400 active:bg-orange-600',
  blue: 'bg-blue-500 border-blue-700 hover:bg-blue-400 active:bg-blue-600',
  purple: 'bg-violet-500 border-violet-700 hover:bg-violet-400 active:bg-violet-600',
  yellow: 'bg-yellow-400 border-yellow-600 hover:bg-yellow-300 active:bg-yellow-500',
};

export const ActivityPlayer: React.FC<ActivityPlayerProps> = ({ lesson }) => {
  const navigate = useNavigate();
  const [screenIndex, setScreenIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedOption, setSelectedOption] = useState<PraticarOption | null>(null);
  const [completed, setCompleted] = useState(false);
  const [pairsRevealed, setPairsRevealed] = useState<number[]>([]);

  const currentScreen = SCREENS[screenIndex];
  const progress = ((screenIndex + 1) / SCREENS.length) * 100;

  const speak = useCallback(async (text: string) => {
    setIsSpeaking(true);
    await AudioSpeechService.speak(text);
    setIsSpeaking(false);
  }, []);

  useEffect(() => {
    setPairsRevealed([]);
    setSelectedOption(null);

    const revealPairs = async () => {
      if (currentScreen.id === 'exploracao') {
        for (let i = 0; i < lesson.screens.exploracao.pairs.length; i++) {
          await new Promise(r => setTimeout(r, 400 + i * 500));
          setPairsRevealed(prev => [...prev, i]);
        }
      }
    };

    const autoSpeak = async () => {
      await new Promise(r => setTimeout(r, 300));
      const s = lesson.screens;
      if (currentScreen.id === 'explicacao') {
        await speak(`${s.explicacao.instruction} ${s.explicacao.highlight}. ${s.explicacao.summary}`);
      } else if (currentScreen.id === 'exploracao') {
        await speak(s.exploracao.instruction);
      } else if (currentScreen.id === 'explicacao_curta') {
        await speak(s.explicacao_curta.text);
      } else if (currentScreen.id === 'exemplo_visual') {
        await speak(s.exemplo_visual.title);
        for (const sentence of s.exemplo_visual.sentences) {
          await speak(sentence.text);
        }
        await speak(s.exemplo_visual.conclusion);
      } else if (currentScreen.id === 'praticar') {
        await speak(`${s.praticar.question} ${s.praticar.reference ?? ''}?`);
      }
    };

    revealPairs();
    autoSpeak();
    return () => AudioSpeechService.stop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenIndex]);

  const handleNext = () => {
    if (screenIndex < SCREENS.length - 1) {
      setScreenIndex(prev => prev + 1);
    }
  };

  const handleOption = async (opt: PraticarOption) => {
    if (selectedOption) return;
    setSelectedOption(opt);
    if (opt.isCorrect) {
      await speak('Isso mesmo! Você é incrível!');
      setCompleted(true);
    } else {
      await speak('Tente de novo! Você consegue!');
      setTimeout(() => setSelectedOption(null), 1800);
    }
  };

  const replayAudio = async () => {
    const s = lesson.screens;
    if (currentScreen.id === 'explicacao') {
      await speak(`${s.explicacao.instruction} ${s.explicacao.highlight}. ${s.explicacao.summary}`);
    } else if (currentScreen.id === 'exploracao') {
      await speak(s.exploracao.instruction);
    } else if (currentScreen.id === 'explicacao_curta') {
      await speak(s.explicacao_curta.text);
    } else if (currentScreen.id === 'exemplo_visual') {
      for (const sentence of s.exemplo_visual.sentences) await speak(sentence.text);
      await speak(s.exemplo_visual.conclusion);
    } else if (currentScreen.id === 'praticar') {
      await speak(`${s.praticar.question} ${s.praticar.reference ?? ''}?`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-50 flex flex-col items-center justify-start p-4 pt-6 pb-10">
      {/* Top header bar */}
      <div className="w-full max-w-md mb-5">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate({ to: '/escola-brilha' })}
            className="shrink-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-violet-600 hover:bg-violet-50 active:scale-95 transition"
          >
            <Home className="w-5 h-5" />
          </button>
          <div className="flex-1 h-4 bg-white rounded-full overflow-hidden shadow-inner border border-white/60">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ type: 'spring', stiffness: 80 }}
              className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
            />
          </div>
          <div className="shrink-0 flex items-center gap-1 bg-white px-3 py-1.5 rounded-full shadow-md border border-yellow-100">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-black text-yellow-500">{lesson.xp}</span>
          </div>
          <div className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 border-2 border-white shadow-md overflow-hidden">
            <img src={pipaImg} alt="mascot" className="w-full h-full object-cover object-top" />
          </div>
        </div>

        {/* Step dots */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {SCREENS.map((s, i) => (
            <div
              key={s.id}
              className={`rounded-full transition-all duration-300 ${
                i === screenIndex
                  ? `w-6 h-3 ${s.dot}`
                  : i < screenIndex
                  ? `w-3 h-3 ${s.dot} opacity-60`
                  : 'w-3 h-3 bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen.id}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 130, damping: 18 }}
          className="w-full max-w-md"
        >
          {/* Screen label */}
          <div className="flex items-center justify-between mb-2 px-1">
            <span className={`${currentScreen.color} text-white text-xs font-black px-3 py-1 rounded-full shadow-sm tracking-widest`}>
              {screenIndex + 1} &nbsp; {currentScreen.label}
            </span>
            <button
              onClick={replayAudio}
              className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-violet-500 hover:bg-violet-50 active:scale-95 transition"
            >
              <Volume2 className={`w-5 h-5 ${isSpeaking ? 'animate-pulse text-violet-600' : ''}`} />
            </button>
          </div>

          {/* Card body */}
          <div className="bg-white rounded-3xl shadow-2xl border border-white overflow-hidden">
            {currentScreen.id === 'explicacao' && (
              <ExplicacaoScreen lesson={lesson} isSpeaking={isSpeaking} />
            )}
            {currentScreen.id === 'exploracao' && (
              <ExploracaoScreen lesson={lesson} pairsRevealed={pairsRevealed} speak={speak} />
            )}
            {currentScreen.id === 'explicacao_curta' && (
              <ExplicacaoCurtaScreen lesson={lesson} />
            )}
            {currentScreen.id === 'exemplo_visual' && (
              <ExemploVisualScreen lesson={lesson} speak={speak} />
            )}
            {currentScreen.id === 'praticar' && (
              <VamosPraticarScreen
                lesson={lesson}
                selectedOption={selectedOption}
                onSelect={handleOption}
                completed={completed}
              />
            )}
          </div>

          {/* Next button */}
          {currentScreen.id !== 'praticar' && (
            <div className="flex justify-end mt-4">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 bg-violet-500 hover:bg-violet-600 active:scale-95 text-white font-black px-6 py-3 rounded-2xl shadow-lg transition"
              >
                Próximo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {completed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 flex flex-col items-center gap-3"
            >
              <div className="text-center bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4 w-full">
                <p className="text-2xl font-black text-emerald-600">🎉 Missão Cumprida!</p>
                <p className="text-sm text-emerald-500 font-bold mt-1">+{lesson.xp} XP conquistados!</p>
              </div>
              <button
                onClick={() => navigate({ to: '/escola-brilha' })}
                className="w-full bg-violet-500 hover:bg-violet-600 text-white font-black py-3 rounded-2xl shadow-lg transition active:scale-95"
              >
                Voltar para o início
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* ─── SCREEN 1: EXPLICAÇÃO ─── */
const ExplicacaoScreen: React.FC<{ lesson: ActivityLesson; isSpeaking: boolean }> = ({ lesson, isSpeaking }) => {
  const s = lesson.screens.explicacao;
  return (
    <div className="relative overflow-hidden">
      {/* Gradient top area */}
      <div className="bg-gradient-to-br from-violet-400 via-purple-400 to-indigo-400 px-6 pt-8 pb-24 text-center relative">
        {/* Decorative circles */}
        <div className="absolute top-4 left-4 w-14 h-14 bg-white/10 rounded-full" />
        <div className="absolute top-8 right-6 w-8 h-8 bg-white/15 rounded-full" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/10 rounded-full" />

        <p className="text-white/90 text-base font-bold mb-1">{s.instruction}</p>
        <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-lg leading-tight">
          {s.highlight}
        </h2>
      </div>

      {/* Mascots */}
      <div className="relative -mt-20 flex justify-between items-end px-4 pb-2">
        <motion.img
          src={pipaImg}
          alt="Pipa"
          animate={isSpeaking ? { y: [0, -6, 0], scale: [1, 1.04, 1] } : { y: 0 }}
          transition={isSpeaking ? { repeat: Infinity, duration: 0.8 } : {}}
          className="w-32 h-32 sm:w-36 sm:h-36 object-contain drop-shadow-xl select-none"
          draggable={false}
        />
        <motion.img
          src={pipImg}
          alt="Pip"
          animate={isSpeaking ? { y: [0, -8, 0], scale: [1, 1.03, 1] } : { y: 0 }}
          transition={isSpeaking ? { repeat: Infinity, duration: 0.9, delay: 0.2 } : {}}
          className="w-32 h-32 sm:w-36 sm:h-36 object-contain drop-shadow-xl select-none"
          draggable={false}
        />
      </div>

      {/* Summary box */}
      <div className="px-5 pb-6 pt-2">
        <div className="bg-violet-50 border-2 border-violet-100 rounded-2xl p-4 text-center">
          <p className="text-violet-800 font-bold text-base leading-snug">{s.summary}</p>
        </div>
      </div>
    </div>
  );
};

/* ─── SCREEN 2: EXPLORAÇÃO ─── */
const ExploracaoScreen: React.FC<{
  lesson: ActivityLesson;
  pairsRevealed: number[];
  speak: (t: string) => Promise<void>;
}> = ({ lesson, pairsRevealed, speak }) => {
  const s = lesson.screens.exploracao;
  return (
    <div className="p-5">
      <p className="text-slate-600 font-bold text-sm mb-4">{s.instruction}</p>
      <div className="space-y-3 mb-4">
        {s.pairs.map((pair, i) => (
          <AnimatePresence key={i}>
            {pairsRevealed.includes(i) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 160, damping: 18 }}
                className="flex items-center justify-between bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-100 rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-xl font-black text-teal-700">{pair.left}</span>
                  <span className="text-teal-400 font-black text-lg">=</span>
                  <span className="text-xl font-black text-emerald-700">{pair.right}</span>
                </div>
                <button
                  onClick={() => speak(`${pair.left}. ${pair.right}`)}
                  className="ml-2 w-9 h-9 rounded-full bg-white shadow-sm border border-teal-100 flex items-center justify-center text-teal-500 hover:bg-teal-50 active:scale-95 transition"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
      {/* Mascot in corner */}
      <div className="flex justify-end -mb-2">
        <img src={pipImg} alt="Pip" className="w-24 h-24 object-contain drop-shadow-lg select-none" draggable={false} />
      </div>
    </div>
  );
};

/* ─── SCREEN 3: EXPLICAÇÃO CURTA ─── */
const ExplicacaoCurtaScreen: React.FC<{ lesson: ActivityLesson }> = ({ lesson }) => {
  const s = lesson.screens.explicacao_curta;

  const renderText = () => {
    if (!s.highlights || s.highlights.length === 0) {
      return <p className="text-slate-700 font-semibold text-base leading-relaxed">{s.text}</p>;
    }
    let text = s.text;
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIndex = 0;

    for (const highlight of s.highlights) {
      const idx = remaining.indexOf(highlight);
      if (idx === -1) continue;
      if (idx > 0) parts.push(<span key={keyIndex++}>{remaining.slice(0, idx)}</span>);
      parts.push(
        <span key={keyIndex++} className="text-violet-600 font-black bg-violet-50 px-1 rounded">
          {highlight}
        </span>
      );
      remaining = remaining.slice(idx + highlight.length);
    }
    if (remaining) parts.push(<span key={keyIndex++}>{remaining}</span>);

    return (
      <p className="text-slate-700 font-semibold text-base leading-relaxed">{parts}</p>
    );
  };

  return (
    <div className="p-5">
      {/* Header stripe */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-4 mb-4 text-white text-center">
        <p className="text-xs font-black tracking-widest uppercase opacity-80 mb-1">Definição</p>
        <div className="w-8 h-1 bg-white/40 rounded mx-auto" />
      </div>

      {/* Text box */}
      <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 mb-4">
        {renderText()}
      </div>

      {/* Small mascot pair */}
      <div className="flex items-end justify-between px-2">
        <img src={pipaImg} alt="Pipa" className="w-20 h-20 object-contain drop-shadow-md select-none" draggable={false} />
        <div className="flex-1 mx-3 bg-blue-50 border border-blue-100 rounded-xl p-2 text-center">
          <p className="text-blue-600 text-xs font-bold">💡 Lembre-se!</p>
          <p className="text-blue-500 text-xs mt-0.5">Palavras com o mesmo sentido = sinônimos</p>
        </div>
        <img src={pipImg} alt="Pip" className="w-20 h-20 object-contain drop-shadow-md select-none" draggable={false} />
      </div>
    </div>
  );
};

/* ─── SCREEN 4: EXEMPLO VISUAL ─── */
const ExemploVisualScreen: React.FC<{ lesson: ActivityLesson; speak: (t: string) => Promise<void> }> = ({ lesson, speak }) => {
  const s = lesson.screens.exemplo_visual;
  return (
    <div className="p-5">
      <p className="text-slate-700 font-black text-base mb-3">{s.title}</p>

      <div className="space-y-2 mb-4">
        {s.sentences.map((sentence, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center justify-between bg-amber-50 border-2 border-amber-100 rounded-2xl px-4 py-3"
          >
            <div className="flex items-center gap-2">
              {sentence.emoji && <span className="text-2xl">{sentence.emoji}</span>}
              <span className="text-slate-700 font-semibold text-sm">{sentence.text}</span>
            </div>
            <button
              onClick={() => speak(sentence.text)}
              className="w-8 h-8 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-500 hover:bg-amber-50 active:scale-95 transition shrink-0 ml-2"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Conclusion */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-3 text-white text-center mb-3"
      >
        <p className="font-black text-sm">{s.conclusion}</p>
      </motion.div>

      <div className="flex justify-center">
        <img src={pipImg} alt="Pip" className="w-24 h-24 object-contain drop-shadow-lg select-none" draggable={false} />
      </div>
    </div>
  );
};

/* ─── SCREEN 5: VAMOS PRATICAR ─── */
const VamosPraticarScreen: React.FC<{
  lesson: ActivityLesson;
  selectedOption: PraticarOption | null;
  onSelect: (opt: PraticarOption) => void;
  completed: boolean;
}> = ({ lesson, selectedOption, onSelect, completed }) => {
  const s = lesson.screens.praticar;
  return (
    <div className="p-5">
      {/* Question */}
      <div className="text-center mb-4">
        <p className="text-slate-600 font-bold text-base">{s.question}</p>
        {s.reference && (
          <div className="inline-block mt-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-black text-2xl px-6 py-2 rounded-2xl shadow-lg">
            {s.reference}
          </div>
        )}
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3 mb-4">
        {s.options.map((opt, i) => {
          const isSelected = selectedOption?.text === opt.text;
          const showResult = isSelected;
          const resultStyle = showResult
            ? opt.isCorrect
              ? 'ring-4 ring-emerald-300 scale-105'
              : 'ring-4 ring-red-300 opacity-70 scale-95'
            : '';

          return (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              onClick={() => onSelect(opt)}
              disabled={!!selectedOption}
              className={`
                w-full py-4 rounded-2xl text-white font-black text-xl shadow-lg border-b-4 transition-all
                ${OPTION_STYLES[opt.color]}
                ${resultStyle}
                ${!selectedOption ? 'hover:scale-105 active:scale-95' : ''}
              `}
            >
              <span className="flex items-center justify-center gap-3">
                {opt.text}
                {showResult && (
                  opt.isCorrect
                    ? <Check className="w-6 h-6" />
                    : <X className="w-6 h-6" />
                )}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Mascot pair */}
      {!completed && (
        <div className="flex justify-between items-end px-2">
          <img src={pipaImg} alt="Pipa" className="w-20 h-20 object-contain drop-shadow-md select-none" draggable={false} />
          <img src={pipImg} alt="Pip" className="w-20 h-20 object-contain drop-shadow-md select-none" draggable={false} />
        </div>
      )}
    </div>
  );
};
