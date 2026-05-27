
import React, { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Info, Heart, Sparkles, Shield, Rocket, FlaskConical, Wand2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { MASCOTS, MASCOT_CATEGORIES, MascotData, Rarity } from '@/components/rewards/mascot-store/catalog';
import { MascotRenderer } from '@/components/rewards/mascot-store/MascotRenderer';

export const Route = createFileRoute('/loja-mascotes')({
  component: MascotStorePage,
});

const RARITY_CONFIG: Record<Rarity, { color: string, label: string, bg: string }> = {
  comum: { color: 'text-gray-500', label: 'Comum', bg: 'bg-gray-100' },
  raro: { color: 'text-blue-500', label: 'Raro', bg: 'bg-blue-100' },
  epico: { color: 'text-purple-500', label: 'Épico', bg: 'bg-purple-100' },
  lendario: { color: 'text-yellow-600', label: 'Lendário', bg: 'bg-yellow-100 shadow-[0_0_15px_rgba(250,204,21,0.5)]' },
};

function MascotStorePage() {
  const [selectedCategory, setSelectedCategory] = useState(MASCOT_CATEGORIES[0].id);
  const [coins, setCoins] = useState(2500);

  const filteredMascots = MASCOTS.filter(m => m.category === selectedCategory);

  const handleBuy = (mascot: MascotData) => {
    toast.success(`Você adotou ${mascot.name}!`, {
      description: `${mascot.name} está muito feliz em te conhecer!`,
      icon: <Sparkles className="h-5 w-5 text-yellow-500 fill-yellow-500" />
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FE] pb-24 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b border-white/50 px-6 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-2xl shadow-lg shadow-indigo-200"
            >
              <Heart className="text-white h-7 w-7 fill-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-extrabold text-[#1A1A40] tracking-tight">Loja de Mascotes</h1>
              <p className="text-[#6B728E] font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                Encontre seu novo amigo para aventuras!
              </p>
            </div>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white px-6 py-3 rounded-2xl flex items-center gap-3 border-2 border-[#E2E8F0] shadow-md"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1.5 rounded-full shadow-inner">
              <Star className="h-5 w-5 text-white fill-white" />
            </div>
            <span className="font-black text-2xl text-[#1A1A40] tabular-nums">{coins}</span>
            <span className="text-[#6B728E] font-bold text-sm uppercase tracking-wider">Brilhos</span>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8 relative z-10">
        <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-white/50 backdrop-blur-sm p-1.5 h-auto rounded-3xl border border-white/80 shadow-inner flex overflow-x-auto no-scrollbar max-w-full">
              {MASCOT_CATEGORIES.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="rounded-2xl px-8 py-3.5 text-base font-bold data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-lg transition-all duration-300"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent key={selectedCategory} value={selectedCategory} className="outline-none focus:ring-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {filteredMascots.map((mascot, index) => (
                  <motion.div
                    key={mascot.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="group relative overflow-hidden border-none rounded-[40px] shadow-xl hover:shadow-2xl transition-all duration-500 bg-white ring-1 ring-black/[0.03]">
                      {/* Rarity Glow */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${mascot.rarity === 'lendario' ? 'bg-yellow-400' : 'bg-indigo-400'}`} />
                      
                      {/* Visual Content */}
                      <div className="aspect-[4/5] bg-gradient-to-b from-slate-50 to-white relative flex flex-col items-center justify-center p-6 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                          <svg className="w-full h-full"><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="currentColor" /></pattern><rect width="100%" height="100%" fill="url(#dots)" /></svg>
                        </div>

                        <div className="relative z-10 w-full flex justify-center py-4">
                          <MascotRenderer mascot={mascot} size={200} />
                        </div>
                        
                        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                          <Badge className={`${RARITY_CONFIG[mascot.rarity].bg} ${RARITY_CONFIG[mascot.rarity].color} font-black px-4 py-1.5 rounded-full border-none text-xs uppercase tracking-widest`}>
                            {RARITY_CONFIG[mascot.rarity].label}
                          </Badge>
                          
                          <div className="flex gap-2">
                             {mascot.costume === 'superhero' && <Shield className="h-5 w-5 text-indigo-400" />}
                             {mascot.costume === 'astronaut' && <Rocket className="h-5 w-5 text-indigo-400" />}
                             {mascot.costume === 'scientist' && <FlaskConical className="h-5 w-5 text-indigo-400" />}
                             {mascot.costume === 'fairy' && <Wand2 className="h-5 w-5 text-pink-400" />}
                          </div>
                        </div>

                        <div className="absolute bottom-4 left-6 right-6 text-center z-20 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{mascot.personality}</span>
                        </div>
                      </div>
                      
                      <CardHeader className="px-8 pt-8 pb-4 relative z-10 bg-white">
                        <CardTitle className="text-2xl font-black text-[#1A1A40] group-hover:text-indigo-600 transition-colors">
                          {mascot.name}
                        </CardTitle>
                        <p className="text-sm text-[#6B728E] font-medium leading-relaxed mt-2 line-clamp-2">
                          {mascot.description}
                        </p>
                      </CardHeader>
                      
                      <CardFooter className="px-8 pb-8 pt-0 flex gap-4 bg-white relative z-10">
                        <Button 
                          className="flex-1 bg-[#1A1A40] hover:bg-indigo-600 text-white font-black rounded-3xl h-14 text-lg shadow-lg hover:shadow-indigo-200 transition-all duration-300"
                          onClick={() => handleBuy(mascot)}
                        >
                          Adotar
                        </Button>
                        <div className="flex flex-col items-center justify-center px-5 bg-[#F8F9FE] rounded-[28px] border-2 border-slate-50 min-w-[80px]">
                          <div className="flex items-center gap-1.5">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-lg font-black text-[#1A1A40]">100</span>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {filteredMascots.length === 0 && (
                <div className="text-center py-32 bg-white/50 rounded-[60px] border-4 border-dashed border-slate-100">
                  <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-100">
                    <Sparkles className="h-10 w-10 text-slate-200" />
                  </div>
                  <h3 className="text-3xl font-black text-[#1A1A40]">Novos amigos em breve!</h3>
                  <p className="text-[#6B728E] font-medium max-w-sm mx-auto mt-4 text-lg">
                    Estamos trazendo mais mascotes mágicos para esta categoria. Volte logo!
                  </p>
                </div>
              )}
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </main>
      
      {/* Floating Action Button for Inventory */}
      <motion.div 
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-50 lg:block hidden"
      >
        <Button className="rounded-[35px] h-20 w-20 shadow-2xl bg-indigo-600 hover:bg-indigo-700 p-0 border-4 border-white">
          <ShoppingBag className="h-8 w-8 text-white" />
        </Button>
      </motion.div>
    </div>
  );
}
