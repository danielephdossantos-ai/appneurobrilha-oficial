import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { School, BookOpen, Calculator, Brain } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export const EscolaBrilhaDashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 'portugues',
      title: 'Português',
      icon: BookOpen,
      color: 'bg-orange-400',
      skills: 'EF01LP01 - EF01LP10',
      method: 'Método Fônico'
    },
    {
      id: 'matematica',
      title: 'Matemática',
      icon: Calculator,
      color: 'bg-blue-400',
      skills: 'EF01MA01 - EF01MA09',
      method: 'Método CRA'
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
          <p className="text-blue-400 font-bold uppercase tracking-widest mt-2">Neuroeducação e BNCC</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[3rem] p-8 shadow-2xl border-b-8 border-gray-100 cursor-pointer"
              onClick={() => navigate({ to: '/escola-brilha/aula' })}
            >
              <div className={`${cat.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg`}>
                <cat.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-800 mb-2">{cat.title}</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-500 font-bold">
                  <Brain className="w-4 h-4" />
                  <span>{cat.method}</span>
                </div>
                <div className="inline-block bg-gray-50 px-4 py-1 rounded-full text-xs font-black text-gray-400 border border-gray-100">
                  {cat.skills}
                </div>
              </div>
              
              <Button className="w-full mt-8 h-16 rounded-2xl text-xl font-black bg-blue-500 hover:bg-blue-600 shadow-lg">
                Começar Aula
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
