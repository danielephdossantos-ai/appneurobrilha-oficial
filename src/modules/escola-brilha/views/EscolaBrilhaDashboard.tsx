import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { School, BookOpen, Calculator, Brain } from 'lucide-react';
import { useNavigate, Link } from '@tanstack/react-router';

export const EscolaBrilhaDashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 'portugues',
      title: 'Educação Infantil',
      subtitle: 'Linguagem e Sons',
      icon: BookOpen,
      color: 'bg-orange-400',
      field: 'Escuta, Fala e Pensamento',
      method: 'Consciência Fonológica'
    },
    {
      id: 'portugues_1ano',
      title: '1º Ano Alfabetização',
      subtitle: 'Sílabas e Letras',
      icon: BookOpen,
      color: 'bg-emerald-400',
      field: 'Língua Portuguesa',
      method: 'Método Fônico'
    },
    {
      id: 'matematica',
      title: 'Matemática Kids',
      subtitle: 'Números e Quantidades',
      icon: Calculator,
      color: 'bg-blue-400',
      field: 'Espaços e Quantidades',
      method: 'Método CRA'
    },
    {
      id: 'portugues_2ano',
      title: '2º Ano Português',
      subtitle: 'Leitura e Escrita',
      icon: BookOpen,
      color: 'bg-purple-400',
      field: 'Língua Portuguesa',
      method: 'Método Fônico'
    },
    {
      id: 'matematica_2ano',
      title: '2º Ano Matemática',
      subtitle: 'Cálculos e Lógica',
      icon: Calculator,
      color: 'bg-indigo-400',
      field: 'Matemática',
      method: 'Método CRA'
    },
    {
      id: 'portugues_3ano',
      title: '3º Ano Português',
      subtitle: 'Fluência e Compreensão',
      icon: BookOpen,
      color: 'bg-rose-400',
      field: 'Língua Portuguesa',
      method: 'Interface C'
    },
    {
      id: 'matematica_3ano',
      title: '3º Ano Matemática',
      subtitle: 'Operações e Espaço',
      icon: Calculator,
      color: 'bg-orange-500',
      field: 'Matemática',
      method: 'Interface C'
    },
    {
      id: 'portugues_4ano',
      title: '4º Ano Português',
      subtitle: 'Gêneros e Escrita',
      icon: BookOpen,
      color: 'bg-emerald-500',
      field: 'Língua Portuguesa',
      method: 'Interface C'
    },
    {
      id: 'matematica_4ano',
      title: '4º Ano Matemática',
      subtitle: 'Frações e Grandezas',
      icon: Calculator,
      color: 'bg-yellow-600',
      field: 'Matemática',
      method: 'Interface C'
    },
    {
      id: 'portugues_5ano',
      title: '5º Ano Português',
      subtitle: 'Análise e Pontuação',
      icon: BookOpen,
      color: 'bg-blue-500',
      field: 'Língua Portuguesa',
      method: 'Interface C'
    },
    {
      id: 'matematica_5ano',
      title: '5º Ano Matemática',
      subtitle: 'Porcentagem e Gráficos',
      icon: Calculator,
      color: 'bg-orange-600',
      field: 'Matemática',
      method: 'Interface C'
    },
    {
      id: 'portugues_6ano',
      title: '6º Ano Português',
      subtitle: 'Gramática e Literatura',
      icon: BookOpen,
      color: 'bg-indigo-500',
      field: 'Língua Portuguesa',
      method: 'Interface Moderna'
    },
    {
      id: 'matematica_6ano',
      title: '6º Ano Matemática',
      subtitle: 'Inteiros e Geometria',
      icon: Calculator,
      color: 'bg-indigo-700',
      field: 'Matemática',
      method: 'Interface Moderna'
    },
    {
      id: 'portugues_7ano',
      title: '7º Ano Português',
      subtitle: 'Argumentação e Gêneros',
      icon: BookOpen,
      color: 'bg-indigo-600',
      field: 'Língua Portuguesa',
      method: 'Interface Moderna'
    },
    {
      id: 'matematica_7ano',
      title: '7º Ano Matemática',
      subtitle: 'Equações e Proporções',
      icon: Calculator,
      color: 'bg-indigo-800',
      field: 'Matemática',
      method: 'Interface Moderna'
    },
    {
      id: 'fundamental2',
      title: '8º ao 9º Ano',
      subtitle: 'Base Preparatória',
      icon: School,
      color: 'bg-slate-800',
      field: 'Fundamental II',
      method: 'Moderna'
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50 p-6 pt-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="inline-block p-4 bg-white rounded-full shadow-xl mb-4"
          >
            <School className="w-12 h-12 text-blue-500" />
          </motion.div>
          <h1 className="text-4xl font-black text-blue-600">Escola Brilha</h1>
          <p className="text-blue-400 font-bold uppercase tracking-widest mt-2">Educação Infantil (4 a 5 anos)</p>
          <div className="mt-4 flex justify-center gap-2 flex-wrap">
            <span className="bg-white px-4 py-1 rounded-full text-[10px] font-black text-blue-400 border border-blue-100 shadow-sm uppercase">Onomatopeias</span>
            <span className="bg-white px-4 py-1 rounded-full text-[10px] font-black text-blue-400 border border-blue-100 shadow-sm uppercase">Linguagem Lúdica</span>
            <span className="bg-white px-4 py-1 rounded-full text-[10px] font-black text-blue-400 border border-blue-100 shadow-sm uppercase">Neuroeducação</span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[3rem] p-8 shadow-2xl border-b-8 border-gray-100 cursor-pointer group"
              onClick={() => navigate({ 
                to: '/escola-brilha/aula',
                search: { category: cat.id }
              })}
            >
              <div className={`${cat.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <cat.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-800 mb-1">{cat.title}</h2>
              <p className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">{cat.subtitle}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-500 font-bold">
                  <Brain className="w-4 h-4" />
                  <span>{cat.method}</span>
                </div>
                <div className="inline-block bg-gray-50 px-4 py-1 rounded-full text-[10px] font-black text-gray-400 border border-gray-100 uppercase tracking-tighter">
                  {cat.field}
                </div>
              </div>
              
              <Button 
                className="w-full mt-8 h-16 rounded-2xl text-xl font-black bg-blue-500 hover:bg-blue-600 shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate({ 
                    to: '/escola-brilha/aula',
                    search: { category: cat.id }
                  });
                }}
              >
                Brincar e Aprender
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
