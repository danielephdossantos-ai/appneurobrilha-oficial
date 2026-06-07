import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from '@tanstack/react-router';
import { BookOpen, Calculator, Star, ChevronRight, Sparkles } from 'lucide-react';
import pipImg from '@/assets/pip-mascot.png';
import pipaImg from '@/assets/pip-girl-mascot.png';

const ACTIVITY_CATEGORIES = [
  {
    id: 'sinonimos',
    title: 'Sinônimos',
    subtitle: 'Palavras com sentido parecido',
    icon: BookOpen,
    gradient: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50',
    border: 'border-violet-100',
    badge: 'Língua Portuguesa',
    badgeColor: 'bg-violet-100 text-violet-700',
    xp: 120,
    grade: '2º ao 5º Ano',
    type: 'activity',
  },
  {
    id: 'antonimos',
    title: 'Antônimos',
    subtitle: 'Palavras com sentido oposto',
    icon: BookOpen,
    gradient: 'from-teal-500 to-emerald-600',
    lightBg: 'bg-teal-50',
    border: 'border-teal-100',
    badge: 'Língua Portuguesa',
    badgeColor: 'bg-teal-100 text-teal-700',
    xp: 120,
    grade: '2º ao 5º Ano',
    type: 'activity',
  },
  {
    id: 'substantivos',
    title: 'Substantivos',
    subtitle: 'Nomes de seres e objetos',
    icon: BookOpen,
    gradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
    border: 'border-blue-100',
    badge: 'Língua Portuguesa',
    badgeColor: 'bg-blue-100 text-blue-700',
    xp: 130,
    grade: '3º ao 5º Ano',
    type: 'activity',
  },
  {
    id: 'fracoes',
    title: 'Frações',
    subtitle: 'Partes de um todo',
    icon: Calculator,
    gradient: 'from-amber-500 to-orange-600',
    lightBg: 'bg-amber-50',
    border: 'border-amber-100',
    badge: 'Matemática',
    badgeColor: 'bg-amber-100 text-amber-700',
    xp: 150,
    grade: '3º ao 5º Ano',
    type: 'activity',
  },
  {
    id: 'multiplicacao',
    title: 'Multiplicação',
    subtitle: 'Tabuada e grupos iguais',
    icon: Calculator,
    gradient: 'from-pink-500 to-rose-600',
    lightBg: 'bg-pink-50',
    border: 'border-pink-100',
    badge: 'Matemática',
    badgeColor: 'bg-pink-100 text-pink-700',
    xp: 140,
    grade: '3º ao 5º Ano',
    type: 'activity',
  },
];

const LEGACY_CATEGORIES = [
  { id: 'portugues_1ano', title: '1º Ano — Sílabas e Letras', badge: 'Alfabetização', gradient: 'from-emerald-400 to-green-500', xp: 100 },
  { id: 'matematica', title: '1º Ano — Matemática Kids', badge: 'Matemática', gradient: 'from-sky-400 to-blue-500', xp: 100 },
  { id: 'portugues_2ano', title: '2º Ano — Leitura', badge: 'Leitura', gradient: 'from-fuchsia-400 to-violet-500', xp: 110 },
  { id: 'matematica_2ano', title: '2º Ano — Cálculos', badge: 'Matemática', gradient: 'from-orange-400 to-red-500', xp: 110 },
];

export const EscolaBrilhaDashboard: React.FC = () => {
  const navigate = useNavigate();

  const goToActivity = (categoryId: string, type: string) => {
    navigate({
      to: '/escola-brilha/aula',
      search: { category: categoryId, type },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-50 pb-12">
      {/* Hero header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 px-5 pt-12 pb-24">
        {/* Decorative circles */}
        <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full" />
        <div className="absolute top-16 right-16 w-12 h-12 bg-white/10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-300 text-xs font-black tracking-widest uppercase">Escola Brilha</span>
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight drop-shadow">
            O que vamos<br />aprender hoje?
          </h1>
          <p className="text-white/70 text-sm font-semibold mt-2">2º ao 5º Ano • BNCC Adaptado</p>
        </div>

        {/* Mascots in header */}
        <div className="flex justify-between items-end px-4 -mb-14 relative z-10 max-w-xs mx-auto">
          <motion.img
            src={pipaImg}
            alt="Pipa"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="w-28 h-28 object-contain drop-shadow-xl select-none"
            draggable={false}
          />
          <motion.img
            src={pipImg}
            alt="Pip"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-28 h-28 object-contain drop-shadow-xl select-none"
            draggable={false}
          />
        </div>
      </div>

      <div className="px-4 pt-16 max-w-lg mx-auto">
        {/* Section title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gradient-to-r from-violet-200 to-transparent" />
          <span className="text-violet-600 font-black text-sm uppercase tracking-widest">Atividades</span>
          <div className="flex-1 h-px bg-gradient-to-l from-violet-200 to-transparent" />
        </div>

        {/* Activity cards grid */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          {ACTIVITY_CATEGORIES.map((cat, index) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, type: 'spring', stiffness: 140 }}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => goToActivity(cat.id, cat.type)}
              className={`w-full bg-white rounded-3xl shadow-lg border ${cat.border} overflow-hidden text-left active:scale-[0.98] transition-all`}
            >
              <div className="flex items-stretch">
                {/* Left gradient stripe */}
                <div className={`bg-gradient-to-b ${cat.gradient} w-2 shrink-0`} />

                {/* Content */}
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      {/* Icon + title */}
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-sm`}>
                          <cat.icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-black text-slate-800 text-lg leading-tight">{cat.title}</h3>
                      </div>
                      <p className="text-slate-500 text-sm font-medium mb-2">{cat.subtitle}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-black px-2 py-0.5 rounded-full ${cat.badgeColor}`}>{cat.badge}</span>
                        <span className="text-xs font-semibold text-slate-400">{cat.grade}</span>
                      </div>
                    </div>

                    {/* XP + arrow */}
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-100 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-black text-yellow-600">{cat.xp}</span>
                      </div>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-sm`}>
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Legacy section */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
          <span className="text-slate-400 font-black text-xs uppercase tracking-widest">1º e 2º Ano</span>
          <div className="flex-1 h-px bg-gradient-to-l from-slate-200 to-transparent" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {LEGACY_CATEGORIES.map((cat, index) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.07 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => goToActivity(cat.id, 'legacy')}
              className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 text-left hover:shadow-lg transition-all"
            >
              <div className={`bg-gradient-to-br ${cat.gradient} w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-sm`}>
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <p className="text-slate-700 font-black text-sm leading-tight mb-1">{cat.title}</p>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold text-yellow-500">{cat.xp} XP</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};
