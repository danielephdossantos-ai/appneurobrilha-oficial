import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { School, BookOpen, Calculator, Palette, Move, Heart, Brain } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export const EscolaBrilhaDashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 'portugues_1ano',
      title: 'Trilha das Palavras',
      subtitle: 'Escuta, Fala e Leitura',
      icon: BookOpen,
      color: 'bg-emerald-400',
      field: 'BNCC: EI03EF01 a EF05',
      method: 'Consciência Fonológica'
    },
    {
      id: 'matematica',
      title: 'Trilha dos Números',
      subtitle: 'Quantidade e Sequência',
      icon: Calculator,
      color: 'bg-blue-400',
      field: 'BNCC: EI03ET01 a ET07',
      method: 'Classificação e Comparação'
    },
    {
      id: 'cores_formas',
      title: 'Cores e Formas',
      subtitle: 'Percepção e Criatividade',
      icon: Palette,
      color: 'bg-orange-400',
      field: 'BNCC: EI03TS02 a TS03',
      method: 'Artes Visuais'
    },
    {
      id: 'movimentos',
      title: 'Trilha dos Movimentos',
      subtitle: 'Coordenação e Lateralidade',
      icon: Move,
      color: 'bg-purple-400',
      field: 'BNCC: EI03CG01 a CG04',
      method: 'Esquema Corporal'
    },
    {
      id: 'emocoes',
      title: 'Trilha das Emoções',
      subtitle: 'Empatia e Sentimentos',
      icon: Heart,
      color: 'bg-pink-400',
      field: 'BNCC: EI03EO01 a EO04',
      method: 'Socioemocional'
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50 p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="inline-block p-4 bg-white rounded-full shadow-xl mb-4"
          >
            <School className="w-12 h-12 text-blue-500" />
          </motion.div>
          <h1 className="text-4xl font-black text-blue-600 italic">1º Ano</h1>
          <p className="text-blue-400 font-bold uppercase tracking-widest mt-2 max-w-2xl mx-auto">
            Alfabetização formal e áreas de conhecimento baseadas na BNCC
          </p>
          <div className="mt-4 flex justify-center gap-2 flex-wrap">
            <span className="bg-white px-4 py-1 rounded-full text-[10px] font-black text-blue-400 border border-blue-100 shadow-sm uppercase italic">Consciência Fonológica</span>
            <span className="bg-white px-4 py-1 rounded-full text-[10px] font-black text-blue-400 border border-blue-100 shadow-sm uppercase italic">Linguagem e Letramento</span>
            <span className="bg-white px-4 py-1 rounded-full text-[10px] font-black text-blue-400 border border-blue-100 shadow-sm uppercase italic">Alfabetização</span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h2 className="text-2xl font-black text-gray-800 mb-1">{cat.title}</h2>
              <p className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">{cat.subtitle}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-500 font-bold text-xs">
                  <Brain className="w-4 h-4" />
                  <span>{cat.method}</span>
                </div>
                <div className="inline-block bg-gray-50 px-4 py-1 rounded-full text-[10px] font-black text-gray-400 border border-gray-100 uppercase tracking-tighter italic">
                  {cat.field}
                </div>
              </div>
              
              <Button 
                className="w-full mt-8 h-16 rounded-2xl text-xl font-black bg-blue-500 hover:bg-blue-600 shadow-lg italic"
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