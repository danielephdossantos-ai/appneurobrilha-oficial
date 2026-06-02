import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { BookOpen, Headset, UserRound, ArrowLeft, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/historias')({
  component: HistoriasPage,
});

function HistoriasPage() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'ler',
      title: 'Ler',
      icon: <BookOpen className="w-12 h-12" />,
      color: '#6C5CE7',
      bg: '#E4E0FF',
      description: 'Leia histórias incríveis com belas ilustrações.'
    },
    {
      id: 'ouvir',
      title: 'Ouvir',
      icon: <Headset className="w-12 h-12" />,
      color: '#FF7675',
      bg: '#FFE5E5',
      description: 'Feche os olhos e ouça contos encantados.'
    },
    {
      id: 'interagir',
      title: 'Interagir',
      icon: <UserRound className="w-12 h-12" />,
      color: '#00B894',
      bg: '#E0FFF4',
      description: 'Faça parte da história e tome decisões!'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7FF] font-sans pb-20">
      {/* Topo / Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-[#6C5CE7]/10">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => navigate({ to: '/' })}
              className="p-3 bg-[#6C5CE7]/10 hover:bg-[#6C5CE7]/20 rounded-2xl transition-all"
            >
              <ArrowLeft className="w-6 h-6 text-[#6C5CE7]" />
            </button>
            <div className="flex items-center gap-3">
              <span className="text-4xl">📚</span>
              <h1 className="text-3xl font-black text-[#6C5CE7] tracking-tight uppercase">Histórias</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <div className="flex justify-between text-[10px] font-black text-[#6C5CE7] uppercase tracking-widest mb-1">
                  <span>Progresso</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2 w-32 bg-[#E4E0FF]" />
              </div>
              <div className="bg-[#6C5CE7]/10 p-3 rounded-2xl">
                <Star className="w-6 h-6 text-[#6C5CE7] fill-[#6C5CE7]" />
              </div>
            </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-2xl mx-auto p-6 space-y-8">
        {categories.map((cat, index) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-full text-left group"
          >
            {/* Card com aparência de página de livro */}
            <div 
              className="relative bg-white rounded-[2rem] p-8 shadow-xl border-2 border-[#6C5CE7]/5 overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98]"
              style={{ 
                boxShadow: `0 10px 30px -5px ${cat.color}20, 0 1px 3px rgba(0,0,0,0.05)`,
              }}
            >
              {/* "Sombra" da página para dar profundidade de livro */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/[0.03] to-transparent pointer-events-none" />
              
              <div className="flex items-start gap-6">
                <div 
                  className="p-5 rounded-2xl shrink-0"
                  style={{ backgroundColor: cat.bg, color: cat.color }}
                >
                  {cat.icon}
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-3xl font-black" style={{ color: cat.color }}>
                    {cat.title}
                  </h2>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Detalhe de "página virada" no canto */}
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-black/[0.02] to-transparent" />
              </div>
            </div>
          </motion.button>
        ))}
      </main>

      {/* Footer / Decoração */}
      <footer className="text-center py-4 px-6 opacity-40">
        <p className="text-sm font-bold text-[#6C5CE7]">NeuroBrilha • O seu livrinho mágico</p>
      </footer>
    </div>
  );
}
