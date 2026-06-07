import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { School, BookOpen, Calculator, Microscope, Map, Brain, Star, ChevronRight, GraduationCap } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export const EscolaBrilhaDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState<number>(1);
  
  const years = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const categoriesByYear: Record<number, any[]> = {
    1: [
      { id: 'portugues_1ano', title: 'Cidade das Letras', subtitle: 'Alfabetização e Leitura', icon: BookOpen, color: 'bg-emerald-400', field: 'BNCC: EF01LP01 a LP08', method: 'Método Fônico e Sílabas' },
      { id: 'matematica', title: 'Vale dos Números', subtitle: 'Operações e Contagem', icon: Calculator, color: 'bg-blue-400', field: 'BNCC: EF01MA01 a MA08', method: 'Soma e Subtração Visual' },
      { id: 'ciencias', title: 'Mundo das Descobertas', subtitle: 'Corpo, Plantas e Higiene', icon: Microscope, color: 'bg-orange-400', field: 'BNCC: EF01CI01 a CI03', method: 'Ciências da Natureza' },
      { id: 'historia_geografia', title: 'Nosso Lugar', subtitle: 'Família, Escola e Bairro', icon: Map, color: 'bg-purple-400', field: 'BNCC: EF01HI01 e GE01', method: 'Sociedade e Espaço' }
    ],
    2: [
      { id: 'sinonimos', title: 'Sinônimos', subtitle: 'Ampliação de Vocabulário', icon: BookOpen, color: 'bg-purple-400', field: 'BNCC: EF02LP03', method: 'Interface B (Interativa)' },
      { id: 'matematica_2ano', title: 'Matemática Divertida', subtitle: 'Cálculo Mental', icon: Calculator, color: 'bg-pink-400', field: 'BNCC: EF02MA01', method: 'Lógica Visual' }
    ],
    6: [
      { id: 'oceanos', title: 'Oceanos', subtitle: 'Geografia e Ecologia', icon: Map, color: 'bg-blue-600', field: 'BNCC: EF06CI11', method: 'Interface C (Acadêmica)' },
      { id: 'historia_6ano', title: 'Civilizações', subtitle: 'História Geral', icon: GraduationCap, color: 'bg-slate-700', field: 'BNCC: EF06HI01', method: 'Pesquisa e Análise' }
    ]
  };

  // Fallback for other years using a generic template
  const getCategories = (year: number) => {
    return categoriesByYear[year] || [
      { id: `portugues_${year}ano`, title: `${year}º Ano: Português`, subtitle: 'Desenvolvimento Linguístico', icon: BookOpen, color: 'bg-emerald-500', field: `BNCC: EF0${year}LP`, method: year >= 6 ? 'Interface C' : 'Interface B' },
      { id: `matematica_${year}ano`, title: `${year}º Ano: Matemática`, subtitle: 'Raciocínio Lógico', icon: Calculator, color: 'bg-blue-500', field: `BNCC: EF0${year}MA`, method: year >= 6 ? 'Interface C' : 'Interface B' }
    ];
  };

  const currentCategories = getCategories(selectedYear);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <motion.div 
            initial={{ scale: 0, rotate: -20 }} 
            animate={{ scale: 1, rotate: 0 }} 
            className="inline-block p-5 bg-white rounded-[2rem] shadow-2xl mb-6 border-b-8 border-slate-100"
          >
            <School className="w-14 h-14 text-blue-600" />
          </motion.div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-4">Escola Brilha</h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-sm">Plataforma Educacional BNCC 2026</p>
          
          {/* Year Selector */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-6 py-3 rounded-2xl font-black text-lg transition-all shadow-md active:scale-95 ${selectedYear === y ? 'bg-blue-600 text-white scale-110 shadow-blue-200' : 'bg-white text-slate-400 hover:bg-slate-50'}`}
              >
                {y}º Ano
              </button>
            ))}
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {currentCategories.map((cat, idx) => (
              <motion.div
                key={`${selectedYear}-${cat.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] p-8 shadow-xl border-2 border-slate-100 cursor-pointer group relative overflow-hidden"
                onClick={() => navigate({ 
                  to: '/escola-brilha/aula',
                  search: { category: cat.id }
                })}
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <cat.icon className="w-32 h-32" />
                </div>

                <div className={`${cat.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-3xl font-black text-slate-800 mb-1">{cat.title}</h2>
                <p className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">{cat.subtitle}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-500 font-bold text-xs bg-slate-50 p-3 rounded-2xl">
                    <Brain className="w-5 h-5 text-blue-500" />
                    <span>{cat.method}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-50 px-4 py-1 rounded-full text-[10px] font-black text-blue-500 border border-blue-100 uppercase italic">
                      {cat.field}
                    </span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-10 h-16 rounded-2xl text-xl font-black bg-slate-900 hover:bg-blue-600 shadow-xl transition-all group-hover:gap-4 italic"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate({ 
                      to: '/escola-brilha/aula',
                      search: { category: cat.id }
                    });
                  }}
                >
                  Iniciar Missão
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Statistics or Progress Footer */}
        <footer className="mt-20 border-t border-slate-200 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-400 uppercase">Seu Progresso</p>
              <p className="text-xl font-black text-slate-800">12.450 Pontos</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-2">
              <Trophy className="w-5 h-5 text-blue-500" />
              <span className="font-bold text-slate-600 text-sm">34 Missões Concluídas</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};