import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { School, BookOpen, Calculator, Brain, Palette, Globe, Landmark, LayoutGrid, FlaskConical } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export const EscolaBrilhaDashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const series = [
    "Educação Infantil",
    "1º Ano",
    "2º Ano",
    "3º Ano",
    "4º Ano",
    "5º Ano",
    "6º Ano",
    "7º Ano",
    "8º Ano",
    "9º Ano"
  ];

  const categories = [
    // EDUCAÇÃO INFANTIL
    { id: 'portugues_inf', title: 'Bosque dos Sons', subtitle: 'Linguagem', icon: BookOpen, color: 'bg-orange-400', field: 'Missão: Sons Mágicos', method: 'Alfabetização Inicial', group: 'Educação Infantil' },
    { id: 'matematica_inf', title: 'Laboratório dos Números', subtitle: 'Matemática', icon: Calculator, color: 'bg-blue-400', field: 'Missão: Contar Frutinhas', method: 'Raciocínio Lógico', group: 'Educação Infantil' },
    { id: 'ciencias_inf', title: 'Exploradores da Natureza', subtitle: 'Ciências', icon: Brain, color: 'bg-teal-400', field: 'Missão: Vida Verde', method: 'Pequeno Cientista', group: 'Educação Infantil' },
    { id: 'artes_inf', title: 'Oficina de Criatividade', subtitle: 'Artes', icon: Palette, color: 'bg-pink-400', field: 'Missão: Cores Mágicas', method: 'Expressão Visual', group: 'Educação Infantil' },

    // 1º ANO
    { id: 'portugues_1ano', title: 'Mestre das Sílabas', subtitle: 'Português', icon: BookOpen, color: 'bg-orange-500', field: 'Missão: Montar Palavras', method: 'Syllabic Focus', group: '1º Ano' },
    { id: 'matematica_1ano', title: 'Herói dos Números', subtitle: 'Matemática', icon: Calculator, color: 'bg-blue-500', field: 'Missão: Somar e Subtrair', method: 'CRA Model', group: '1º Ano' },

    // 2º ANO
    { id: 'portugues_2ano', title: 'Viagem Literária', subtitle: 'Português', icon: BookOpen, color: 'bg-purple-400', field: 'Missão: Escritor Criativo', method: 'Interface B', group: '2º Ano' },
    { id: 'matematica_2ano', title: 'Universo dos Cálculos', subtitle: 'Matemática', icon: Calculator, color: 'bg-indigo-400', field: 'Missão: Resgate Numérico', method: 'CRA Avançado', group: '2º Ano' },
    { id: 'ciencias_2ano', title: 'Pequenos Cientistas', subtitle: 'Ciências', icon: FlaskConical, color: 'bg-green-400', field: 'Missão: Vida no Jardim', method: 'Observação', group: '2º Ano' },
    { id: 'historia_2ano', title: 'Minha Comunidade', subtitle: 'História', icon: Landmark, color: 'bg-amber-400', field: 'Missão: Linha do Tempo', method: 'Identidade', group: '2º Ano' },

    // 3º ANO
    { id: 'portugues_3ano', title: 'Sinônimos em Ação', subtitle: 'Português', icon: BookOpen, color: 'bg-purple-500', field: 'Missão: Palavras Parecidas', method: 'Interface B+', group: '3º Ano' },
    { id: 'matematica_3ano', title: 'Gênio da Multiplicação', subtitle: 'Matemática', icon: Calculator, color: 'bg-indigo-500', field: 'Missão: Dobro e Triplo', method: 'CRA Pro', group: '3º Ano' },
    { id: 'ciencias_3ano', title: 'Ciclo da Água', subtitle: 'Ciências', icon: FlaskConical, color: 'bg-green-500', field: 'Missão: Chuva Mágica', method: 'Experiência', group: '3º Ano' },
    { id: 'geografia_3ano', title: 'Nossa Cidade', subtitle: 'Geografia', icon: Globe, color: 'bg-blue-500', field: 'Missão: Mapa do Tesouro', method: 'Cartografia', group: '3º Ano' },

    // 4º ANO
    { id: 'portugues_4ano', title: 'Detetives do Texto', subtitle: 'Português', icon: BookOpen, color: 'bg-purple-600', field: 'Missão: Gêneros Literários', method: 'Interpretação', group: '4º Ano' },
    { id: 'matematica_4ano', title: 'Exploradores de Frações', subtitle: 'Matemática', icon: Calculator, color: 'bg-indigo-600', field: 'Missão: Partes do Todo', method: 'CRA Expert', group: '4º Ano' },
    { id: 'ciencias_4ano', title: 'Sistema Solar', subtitle: 'Ciências', icon: FlaskConical, color: 'bg-green-600', field: 'Missão: Viagem Espacial', method: 'Astronomia', group: '4º Ano' },
    { id: 'historia_4ano', title: 'Brasil Colonial', subtitle: 'História', icon: Landmark, color: 'bg-amber-600', field: 'Missão: Grandes Navegações', method: 'Crítica', group: '4º Ano' },

    // 5º ANO
    { id: 'portugues_5ano', title: 'Mestre da Pontuação', subtitle: 'Português', icon: BookOpen, color: 'bg-purple-700', field: 'Missão: O Código da Vírgula', method: 'Gramática', group: '5º Ano' },
    { id: 'matematica_5ano', title: 'Rei da Porcentagem', subtitle: 'Matemática', icon: Calculator, color: 'bg-indigo-700', field: 'Missão: Descontos Reais', method: 'Finanças Kids', group: '5º Ano' },
    { id: 'ciencias_5ano', title: 'Corpo Humano', subtitle: 'Ciências', icon: FlaskConical, color: 'bg-green-700', field: 'Missão: Pulmão em Ação', method: 'Anatomia', group: '5º Ano' },
    { id: 'geografia_5ano', title: 'Regiões do Brasil', subtitle: 'Geografia', icon: Globe, color: 'bg-blue-700', field: 'Missão: Diversidade', method: 'Social', group: '5º Ano' },

    // 6º ANO
    { id: 'portugues_6ano', title: 'Analista de Textos', subtitle: 'Português', icon: BookOpen, color: 'bg-slate-600', field: 'Missão: Estrutura Narrativa', method: 'Interface Moderna', group: '6º Ano' },
    { id: 'matematica_6ano', title: 'Arena da Álgebra', subtitle: 'Matemática', icon: Calculator, color: 'bg-slate-700', field: 'Missão: Números Inteiros', method: 'Lógica Pura', group: '6º Ano' },
    { id: 'ciencias_6ano', title: 'Ecossistemas', subtitle: 'Ciências', icon: FlaskConical, color: 'bg-slate-800', field: 'Missão: Cadeia Alimentar', method: 'Biotec', group: '6º Ano' },
    { id: 'historia_6ano', title: 'Grécia Antiga', subtitle: 'História', icon: Landmark, color: 'bg-slate-900', field: 'Missão: Democracia', method: 'Contextual', group: '6º Ano' },

    // 7º ANO
    { id: 'portugues_7ano', title: 'Poder da Argumentação', subtitle: 'Português', icon: BookOpen, color: 'bg-slate-700', field: 'Missão: Debates Críticos', method: 'Interface Moderna', group: '7º Ano' },
    { id: 'matematica_7ano', title: 'Equações em Equilíbrio', subtitle: 'Matemática', icon: Calculator, color: 'bg-slate-800', field: 'Missão: Equilíbrio de X', method: 'Álgebra II', group: '7º Ano' },
    { id: 'geografia_7ano', title: 'Geopolítica Mundi', subtitle: 'Geografia', icon: Globe, color: 'bg-slate-900', field: 'Missão: Fronteiras', method: 'Global', group: '7º Ano' },
    { id: 'ciencias_7ano', title: 'Células e Vida', subtitle: 'Ciências', icon: FlaskConical, color: 'bg-black', field: 'Missão: DNA Explorer', method: 'Lab', group: '7º Ano' },

    // 8º ANO
    { id: 'portugues_8ano', title: 'Mestre das Metáforas', subtitle: 'Português', icon: BookOpen, color: 'bg-slate-800', field: 'Missão: Sentido Figurado', method: 'Literatura', group: '8º Ano' },
    { id: 'matematica_8ano', title: 'Sistemas Complexos', subtitle: 'Matemática', icon: Calculator, color: 'bg-slate-900', field: 'Missão: Duas Incógnitas', method: 'Análise de Dados', group: '8º Ano' },
    { id: 'historia_8ano', title: 'Revolução Industrial', subtitle: 'História', icon: Landmark, color: 'bg-black', field: 'Missão: Máquina a Vapor', method: 'Crítica II', group: '8º Ano' },
    { id: 'geografia_8ano', title: 'Economia Global', subtitle: 'Geografia', icon: Globe, color: 'bg-slate-700', field: 'Missão: Mercados', method: 'Estatística', group: '8º Ano' },

    // 9º ANO
    { id: 'portugues_9ano', title: 'Dissertação Expert', subtitle: 'Português', icon: BookOpen, color: 'bg-slate-900', field: 'Missão: Redação Nota 10', method: 'Preparatório', group: '9º Ano' },
    { id: 'matematica_9ano', title: 'Mestre da Álgebra', subtitle: 'Matemática', icon: Calculator, color: 'bg-black', field: 'Missão: Funções de 2º Grau', method: 'Alta Performance', group: '9º Ano' },
    { id: 'ciencias_9ano', title: 'Química e Física', subtitle: 'Ciências', icon: FlaskConical, color: 'bg-slate-800', field: 'Missão: Átomos', method: 'Avançado', group: '9º Ano' },
    { id: 'historia_9ano', title: 'Guerra Fria', subtitle: 'História', icon: Landmark, color: 'bg-slate-700', field: 'Missão: Muro de Berlim', method: 'Geopolítica', group: '9º Ano' },
  ];
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 pt-24 pb-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="inline-block p-5 bg-white rounded-[2rem] shadow-xl mb-6 border-b-4 border-slate-100"
          >
            <School className="w-16 h-12 text-blue-600" />
          </motion.div>
          <h1 className="text-5xl font-black text-slate-800 tracking-tight">Escola Brilha</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest mt-3">Sua jornada de conhecimento infinita</p>
        </header>

        {series.map((serie) => (
          <div key={serie} className="mb-20">
            <div className="flex items-center gap-6 mb-10">
              <div className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-black shadow-lg shadow-blue-100 uppercase tracking-tighter">
                {serie}
              </div>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {categories.filter(c => c.group === serie).map((cat) => (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white rounded-[3rem] p-8 shadow-2xl border-b-8 border-slate-100 cursor-pointer group flex flex-col h-full relative overflow-hidden"
                  onClick={() => navigate({ 
                    to: '/escola-brilha/aula',
                    search: { category: cat.id }
                  })}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${cat.color} opacity-5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-500`} />
                  
                  <div className={`${cat.color} w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform relative z-10`}>
                    <cat.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <p className="text-[10px] font-black text-slate-400 mb-2 uppercase tracking-[0.2em]">{cat.subtitle}</p>
                    <h3 className="text-2xl font-black text-slate-800 mb-4 leading-tight group-hover:text-blue-600 transition-colors">{cat.title}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 text-slate-600 font-bold text-sm bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                        <LayoutGrid className="w-5 h-5 text-blue-500 mt-0.5" />
                        <span>{cat.field}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{cat.method}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-10 h-16 rounded-2xl text-lg font-black bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-100 relative z-10 group-hover:scale-[1.02] active:scale-95 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate({ 
                        to: '/escola-brilha/aula',
                        search: { category: cat.id }
                      });
                    }}
                  >
                    Entrar na Missão
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