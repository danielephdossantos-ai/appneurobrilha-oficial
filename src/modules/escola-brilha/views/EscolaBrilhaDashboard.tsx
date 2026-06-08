import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from '@tanstack/react-router';
import { BookOpen, Calculator, Star, ChevronRight, Sparkles, FlaskConical, Globe, Landmark, GraduationCap, Sprout } from 'lucide-react';
import { Illustration } from '@/components/Illustration';
import pipImg from '@/assets/pip-mascot.png';
import pipaImg from '@/assets/pip-girl-mascot.png';

/* ─── 2º ao 5º Ano (Interface B) ─── */
const ACTIVITY_B = [
  {
    id: 'sinonimos', title: 'Sinônimos', subtitle: 'Palavras com sentido parecido',
    icon: BookOpen, gradient: 'from-violet-500 to-purple-600',
    border: 'border-violet-100', badge: 'Língua Portuguesa',
    badgeColor: 'bg-violet-100 text-violet-700', xp: 120, grade: '2º ao 5º Ano', type: 'activity',
  },
  {
    id: 'antonimos', title: 'Antônimos', subtitle: 'Palavras com sentido oposto',
    icon: BookOpen, gradient: 'from-teal-500 to-emerald-600',
    border: 'border-teal-100', badge: 'Língua Portuguesa',
    badgeColor: 'bg-teal-100 text-teal-700', xp: 120, grade: '2º ao 5º Ano', type: 'activity',
  },
  {
    id: 'substantivos', title: 'Substantivos', subtitle: 'Nomes de seres e objetos',
    icon: BookOpen, gradient: 'from-blue-500 to-indigo-600',
    border: 'border-blue-100', badge: 'Língua Portuguesa',
    badgeColor: 'bg-blue-100 text-blue-700', xp: 130, grade: '3º ao 5º Ano', type: 'activity',
  },
  {
    id: 'fracoes', title: 'Frações', subtitle: 'Partes de um todo',
    icon: Calculator, gradient: 'from-amber-500 to-orange-600',
    border: 'border-amber-100', badge: 'Matemática',
    badgeColor: 'bg-amber-100 text-amber-700', xp: 150, grade: '3º ao 5º Ano', type: 'activity',
  },
  {
    id: 'multiplicacao', title: 'Multiplicação', subtitle: 'Tabuada e grupos iguais',
    icon: Calculator, gradient: 'from-pink-500 to-rose-600',
    border: 'border-pink-100', badge: 'Matemática',
    badgeColor: 'bg-pink-100 text-pink-700', xp: 140, grade: '3º ao 5º Ano', type: 'activity',
  },
];

/* ─── 6º ao 9º Ano (Interface C) ─── */
const ACTIVITY_C = [
  // 6º Ano
  {
    id: 'oceanos', title: 'Oceanos e Clima', subtitle: 'Regulação climática e biodiversidade',
    icon: Globe, gradient: 'from-blue-600 to-cyan-600', border: 'border-blue-200',
    badge: 'Ciências', badgeColor: 'bg-blue-100 text-blue-800',
    bncc: 'EF06CI04', xp: 230, grade: '6º Ano', type: 'activity-c',
  },
  {
    id: 'biomas', title: 'Biomas Brasileiros', subtitle: 'Os 6 grandes biomas do Brasil',
    icon: Globe, gradient: 'from-green-600 to-emerald-600', border: 'border-green-200',
    badge: 'Geografia', badgeColor: 'bg-green-100 text-green-800',
    bncc: 'EF06GE08', xp: 220, grade: '6º Ano', type: 'activity-c',
  },
  // 7º Ano
  {
    id: 'celulas', title: 'Células e Organismos', subtitle: 'A unidade básica da vida',
    icon: FlaskConical, gradient: 'from-violet-600 to-purple-600', border: 'border-violet-200',
    badge: 'Ciências', badgeColor: 'bg-violet-100 text-violet-800',
    bncc: 'EF07CI10', xp: 240, grade: '7º Ano', type: 'activity-c',
  },
  {
    id: 'equacoes', title: 'Equações de 1º Grau', subtitle: 'Álgebra e pensamento matemático',
    icon: Calculator, gradient: 'from-amber-600 to-orange-600', border: 'border-amber-200',
    badge: 'Matemática', badgeColor: 'bg-amber-100 text-amber-800',
    bncc: 'EF07MA18', xp: 250, grade: '7º Ano', type: 'activity-c',
  },
  // 8º Ano
  {
    id: 'revolucao', title: 'Revolução Industrial', subtitle: 'Trabalho, sociedade e tecnologia',
    icon: Landmark, gradient: 'from-stone-600 to-zinc-600', border: 'border-stone-200',
    badge: 'História', badgeColor: 'bg-stone-100 text-stone-800',
    bncc: 'EF08HI13', xp: 260, grade: '8º Ano', type: 'activity-c',
  },
  {
    id: 'sistema_nervoso', title: 'Sistema Nervoso', subtitle: 'Controle e coordenação do corpo',
    icon: FlaskConical, gradient: 'from-indigo-600 to-blue-600', border: 'border-indigo-200',
    badge: 'Ciências', badgeColor: 'bg-indigo-100 text-indigo-800',
    bncc: 'EF08CI08', xp: 250, grade: '8º Ano', type: 'activity-c',
  },
  // 9º Ano
  {
    id: 'genetica', title: 'Genética e Hereditariedade', subtitle: 'DNA, genes e Leis de Mendel',
    icon: FlaskConical, gradient: 'from-pink-600 to-rose-600', border: 'border-pink-200',
    badge: 'Ciências', badgeColor: 'bg-pink-100 text-pink-800',
    bncc: 'EF09CI08', xp: 280, grade: '9º Ano', type: 'activity-c',
  },
  {
    id: 'iluminismo', title: 'Iluminismo e Revoluções', subtitle: 'Razão, liberdade e democracia',
    icon: Landmark, gradient: 'from-yellow-600 to-amber-600', border: 'border-yellow-200',
    badge: 'História', badgeColor: 'bg-yellow-100 text-yellow-800',
    bncc: 'EF09HI01', xp: 270, grade: '9º Ano', type: 'activity-c',
  },
];

import type { IllustrationName } from '@/components/Illustration';

const EARLY_CATEGORIES: Array<{ id: string; title: string; badge: string; illustration: IllustrationName; gradient: string; xp: number; desc: string; type: string; highlight?: boolean }> = [
  {
    id: 'vogais', title: 'As Vogais', badge: 'Alfabetização',
    illustration: 'vowels-icon', gradient: 'from-rose-400 to-pink-500', xp: 80,
    desc: 'A  E  I  O  U', type: 'early', highlight: true,
  },
  {
    id: 'contagem', title: 'Vamos Contar!', badge: 'Matemática',
    illustration: 'counting-icon', gradient: 'from-amber-400 to-orange-500', xp: 80,
    desc: '1 ao 10', type: 'early', highlight: true,
  },
  {
    id: 'subtracao', title: 'Subtrair é Tirar!', badge: 'Matemática',
    illustration: 'subtract-icon', gradient: 'from-rose-500 to-red-600', xp: 90,
    desc: 'Tirar objetos', type: 'early', highlight: true,
  },
];

const LEGACY_CATEGORIES = [
  { id: 'portugues_1ano', title: '1º Ano — Sílabas', badge: 'Alfabetização', Icon: BookOpen,   gradient: 'from-emerald-400 to-green-500',   xp: 100, type: 'legacy', desc: 'Primeiras sílabas' },
  { id: 'matematica',     title: '1º Ano — Contas',  badge: 'Matemática',    Icon: Calculator,  gradient: 'from-sky-400 to-blue-500',         xp: 100, type: 'legacy', desc: 'Somar e subtrair' },
  { id: 'portugues_2ano', title: '2º Ano — Leitura', badge: 'Leitura',       Icon: BookOpen,    gradient: 'from-fuchsia-400 to-violet-500',   xp: 110, type: 'legacy', desc: 'Ler frases' },
  { id: 'matematica_2ano',title: '2º Ano — Cálculos',badge: 'Matemática',    Icon: Calculator,  gradient: 'from-orange-400 to-red-500',       xp: 110, type: 'legacy', desc: 'Contas maiores' },
];

type Tab = 'fundamental1' | 'fundamental2' | 'infantil';

export const EscolaBrilhaDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('fundamental2');

  const goToActivity = (id: string, type: string) =>
    navigate({ to: '/escola-brilha/aula', search: { category: id, type } });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-violet-950 pb-12">
      {/* Hero */}
      <div className="relative overflow-hidden px-5 pt-12 pb-8">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-xs font-black tracking-widest uppercase">Escola Brilha</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">O que vamos<br/>aprender hoje?</h1>
          <p className="text-white/50 text-sm font-semibold mt-2">BNCC • Educação Adaptativa</p>
        </div>
        <div className="flex justify-between items-end px-4 -mb-6 relative z-10 max-w-xs mx-auto mt-4">
          <motion.img src={pipaImg} alt="Pipa" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="w-24 h-24 object-contain drop-shadow-xl select-none" draggable={false} />
          <motion.img src={pipImg} alt="Pip" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 object-contain drop-shadow-xl select-none" draggable={false} />
        </div>
      </div>

      {/* Tab switcher */}
      <div className="mx-4 mt-8 mb-5 bg-white/10 rounded-2xl p-1 flex gap-1 max-w-lg mx-auto">
        {([
          { id: 'fundamental2', label: '6º ao 9º Ano', Icon: GraduationCap },
          { id: 'fundamental1', label: '2º ao 5º Ano', Icon: BookOpen },
          { id: 'infantil',     label: '1º e 2º Ano',  Icon: Sprout },
        ] as { id: Tab; label: string; Icon: React.FC<{className?: string}> }[]).map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 ${
              tab === t.id ? 'bg-white text-slate-800 shadow' : 'text-white/60 hover:text-white/80'
            }`}>
            <t.Icon className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-4 max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {tab === 'fundamental2' && (
            <motion.div key="f2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <SectionHeader label="6º ao 9º Ano" sublabel="Ensino Fundamental II • BNCC" />
              {/* Year groups */}
              {(['6º Ano', '7º Ano', '8º Ano', '9º Ano'] as const).map(year => {
                const items = ACTIVITY_C.filter(c => c.grade === year);
                return (
                  <div key={year} className="mb-5">
                    <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2 px-1">{year}</p>
                    <div className="space-y-3">
                      {items.map((cat, i) => (
                        <CardC key={cat.id} cat={cat} index={i} onClick={() => goToActivity(cat.id, cat.type)} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {tab === 'fundamental1' && (
            <motion.div key="f1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <SectionHeader label="2º ao 5º Ano" sublabel="Ensino Fundamental I • BNCC" />
              <div className="space-y-3">
                {ACTIVITY_B.map((cat, i) => (
                  <CardB key={cat.id} cat={cat} index={i} onClick={() => goToActivity(cat.id, cat.type)} />
                ))}
              </div>
            </motion.div>
          )}

          {tab === 'infantil' && (
            <motion.div key="inf" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-5">
              {/* New immersive early lessons */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <p className="text-yellow-400 text-xs font-black uppercase tracking-widest">Novo — Professor fala tudo!</p>
                </div>
                <div className="space-y-3">
                  {EARLY_CATEGORIES.map((cat, i) => (
                    <motion.button key={cat.id}
                      initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08, type: 'spring' }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => goToActivity(cat.id, cat.type)}
                      className="w-full bg-white rounded-2xl shadow-lg overflow-hidden text-left flex items-stretch">
                      <div className={`bg-gradient-to-b ${cat.gradient} w-16 flex items-center justify-center shrink-0`}>
                        <Illustration name={cat.illustration} className="w-12 h-12" />
                      </div>
                      <div className="flex-1 p-4 flex flex-col justify-center">
                        <p className="font-black text-slate-800 text-base leading-tight">{cat.title}</p>
                        <p className="text-slate-500 text-xs font-semibold mt-0.5">{cat.desc}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full">{cat.badge}</span>
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-xs font-bold text-yellow-500">{cat.xp} XP</span>
                        </div>
                      </div>
                      <div className="flex items-center pr-4">
                        <ChevronRight className="w-5 h-5 text-slate-300" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Classic legacy lessons */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <p className="text-white/40 text-xs font-black uppercase tracking-widest">Lições Clássicas</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {LEGACY_CATEGORIES.map((cat, i) => (
                    <motion.button key={cat.id}
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.07 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => goToActivity(cat.id, cat.type)}
                      className="bg-white/10 hover:bg-white/15 rounded-2xl p-4 text-left transition-all border border-white/10">
                      <div className={`bg-gradient-to-br ${cat.gradient} w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-sm`}>
                        <cat.Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-white font-black text-sm leading-tight mb-0.5">{cat.title}</p>
                      <p className="text-white/40 text-xs font-semibold mb-1.5">{cat.desc}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-bold text-yellow-400">{cat.xp} XP</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ─── Sub-components ─── */

const SectionHeader: React.FC<{ label: string; sublabel: string }> = ({ label, sublabel }) => (
  <div className="mb-4">
    <h2 className="text-white font-black text-lg">{label}</h2>
    <p className="text-white/40 text-xs font-semibold">{sublabel}</p>
  </div>
);

const CardC: React.FC<{ cat: typeof ACTIVITY_C[0]; index: number; onClick: () => void }> = ({ cat, index, onClick }) => (
  <motion.button
    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06, type: 'spring', stiffness: 140 }}
    whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full bg-white rounded-2xl shadow-lg border ${cat.border} overflow-hidden text-left`}>
    <div className="flex items-stretch">
      <div className={`bg-gradient-to-b ${cat.gradient} w-2 shrink-0`} />
      <div className="flex-1 p-3.5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-sm`}>
                <cat.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <h3 className="font-black text-slate-800 text-sm leading-tight">{cat.title}</h3>
            </div>
            <p className="text-slate-500 text-xs font-medium mb-1.5 pl-9">{cat.subtitle}</p>
            <div className="flex items-center gap-1.5 flex-wrap pl-9">
              <span className={`text-xs font-black px-2 py-0.5 rounded-full ${cat.badgeColor}`}>{cat.badge}</span>
              <span className="text-xs font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">BNCC {cat.bncc}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-100 px-2 py-1 rounded-full">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-black text-yellow-600">{cat.xp}</span>
            </div>
            <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-sm`}>
              <ChevronRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.button>
);

const CardB: React.FC<{ cat: typeof ACTIVITY_B[0]; index: number; onClick: () => void }> = ({ cat, index, onClick }) => (
  <motion.button
    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06, type: 'spring', stiffness: 140 }}
    whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full bg-white rounded-2xl shadow-lg border ${cat.border} overflow-hidden text-left`}>
    <div className="flex items-stretch">
      <div className={`bg-gradient-to-b ${cat.gradient} w-2 shrink-0`} />
      <div className="flex-1 p-3.5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-sm`}>
                <cat.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <h3 className="font-black text-slate-800 text-sm leading-tight">{cat.title}</h3>
            </div>
            <p className="text-slate-500 text-xs font-medium mb-1.5 pl-9">{cat.subtitle}</p>
            <div className="flex items-center gap-1.5 flex-wrap pl-9">
              <span className={`text-xs font-black px-2 py-0.5 rounded-full ${cat.badgeColor}`}>{cat.badge}</span>
              <span className="text-xs text-slate-400">{cat.grade}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-100 px-2 py-1 rounded-full">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-black text-yellow-600">{cat.xp}</span>
            </div>
            <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-sm`}>
              <ChevronRight className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.button>
);
