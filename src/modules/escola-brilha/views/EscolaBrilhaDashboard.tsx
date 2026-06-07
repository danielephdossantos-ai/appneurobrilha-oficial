import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { School, BookOpen, Calculator, Brain, Palette, Globe, Landmark, LayoutGrid } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export const EscolaBrilhaDashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const categories = [
    // ENSINO INFANTIL / PRÉ
    {
      id: 'portugues',
      title: 'Bosque dos Sons',
      subtitle: 'Trilha: Pré ao 1º Ano',
      icon: BookOpen,
      color: 'bg-orange-400',
      field: 'Missão: Sons Mágicos',
      method: 'Alfabetização Inicial',
      group: 'Infantil & 1º Ano'
    },
    {
      id: 'matematica',
      title: 'Laboratório dos Números',
      subtitle: 'Trilha: Pré ao 1º Ano',
      icon: Calculator,
      color: 'bg-blue-400',
      field: 'Missão: Somar Frutinhas',
      method: 'Raciocínio Lógico',
      group: 'Infantil & 1º Ano'
    },
    {
      id: 'ciencias_kids',
      title: 'Exploradores da Natureza',
      subtitle: 'Trilha: Meio Ambiente',
      icon: Brain,
      color: 'bg-teal-400',
      field: 'Missão: Vida Verde',
      method: 'Pequeno Cientista',
      group: 'Ciências & Artes'
    },
    {
      id: 'artes_kids',
      title: 'Oficina de Criatividade',
      subtitle: 'Trilha: Cores e Formas',
      icon: Palette,
      color: 'bg-pink-400',
      field: 'Missão: Pequeno Artista',
      method: 'Expressão Visual',
      group: 'Ciências & Artes'
    },

    // ENSINO FUNDAMENTAL I (2º ao 5º)
    {
      id: 'portugues_2ano',
      title: 'Viagem Literária',
      subtitle: 'Trilha: 2º ao 5º Ano',
      icon: BookOpen,
      color: 'bg-purple-400',
      field: 'Missão: Escritor Criativo',
      method: 'Interface B - Autonomia',
      group: 'Ensino Fundamental I'
    },
    {
      id: 'matematica_2ano',
      title: 'Universo dos Cálculos',
      subtitle: 'Trilha: 2º ao 5º Ano',
      icon: Calculator,
      color: 'bg-indigo-400',
      field: 'Missão: Resgate Numérico',
      method: 'Método CRA Avançado',
      group: 'Ensino Fundamental I'
    },
    {
      id: 'historia_geo',
      title: 'Exploradores do Tempo',
      subtitle: 'Trilha: História e Geo',
      icon: Globe,
      color: 'bg-amber-600',
      field: 'Missão: Viajante Espacial',
      method: 'Conhecimento de Mundo',
      group: 'Ensino Fundamental I'
    },

    // ENSINO FUNDAMENTAL II (6º ao 9º)
    {
      id: 'portugues_9ano',
      title: 'Detetives do Texto',
      subtitle: 'Trilha: 6º ao 9º Ano',
      icon: Landmark,
      color: 'bg-slate-700',
      field: 'Missão: O Código da Vírgula',
      method: 'Interface Moderna - Crítica',
      group: 'Ensino Fundamental II'
    },
    {
      id: 'matematica_9ano',
      title: 'Arena da Álgebra',
      subtitle: 'Trilha: 6º ao 9º Ano',
      icon: Calculator,
      color: 'bg-slate-900',
      field: 'Missão: O Valor de X',
      method: 'Interface Moderna - Lógica',
      group: 'Ensino Fundamental II'
    }
  ];

  const groups = Array.from(new Set(categories.map(c => c.group)));

  return (
    <div className="min-h-screen bg-slate-50 p-6 pt-24 pb-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="inline-block p-5 bg-white rounded-[2rem] shadow-xl mb-6 border-b-4 border-slate-100"
          >
            <School className="w-16 h-12 text-blue-600" />
          </motion.div>
          <h1 className="text-5xl font-black text-slate-800 tracking-tight">Minha Jornada</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest mt-3">Do Pré ao 9º Ano • Escola Brilha</p>
        </header>

        {groups.map((group) => (
          <div key={group} className="mb-16 text-center sm:text-left">
            <div className="flex items-center gap-4 mb-8 justify-center sm:justify-start">
              <h2 className="text-2xl font-black text-slate-400 uppercase tracking-tighter">{group}</h2>
              <div className="flex-1 h-px bg-slate-200 hidden sm:block" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {categories.filter(c => c.group === group).map((cat) => (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white rounded-[3rem] p-6 shadow-2xl border-b-8 border-slate-100 cursor-pointer group flex flex-col h-full"
                  onClick={() => navigate({ 
                    to: '/escola-brilha/aula',
                    search: { category: cat.id }
                  })}
                >
                  <div className={`${cat.color} w-20 h-20 rounded-[2rem] flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                    <cat.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-800 mb-1 leading-tight">{cat.title}</h3>
                  <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">{cat.subtitle}</p>
                  
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
                      <LayoutGrid className="w-4 h-4 text-blue-500" />
                      <span>{cat.field}</span>
                    </div>
                    <div className="inline-block bg-slate-50 px-4 py-1.5 rounded-full text-[10px] font-black text-slate-400 border border-slate-100 uppercase">
                      {cat.method}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-8 h-14 rounded-2xl text-lg font-black bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate({ 
                        to: '/escola-brilha/aula',
                        search: { category: cat.id }
                      });
                    }}
                  >
                    Iniciar Missão
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
