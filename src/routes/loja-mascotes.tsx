
import React, { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Info } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { MASCOTS, MASCOT_CATEGORIES, MascotData } from '@/components/rewards/mascot-store/catalog';
import { MascotRenderer } from '@/components/rewards/mascot-store/MascotRenderer';

export const Route = createFileRoute('/loja-mascotes')({
  component: MascotStorePage,
});

function MascotStorePage() {
  const [selectedCategory, setSelectedCategory] = useState(MASCOT_CATEGORIES[0].id);
  const [coins, setCoins] = useState(1250); // Valor de exemplo

  const filteredMascots = MASCOTS.filter(m => m.category === selectedCategory);

  const handleBuy = (mascot: MascotData) => {
    toast.success(`Você adotou ${mascot.name}!`, {
      description: "Ele agora está disponível na sua coleção.",
      icon: <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-blue-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl">
            <ShoppingBag className="text-white h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-900 leading-tight">Loja de Mascotes</h1>
            <p className="text-blue-500 text-sm font-medium">Escolha seu novo melhor amigo!</p>
          </div>
        </div>
        
        <div className="bg-yellow-100 px-4 py-2 rounded-full flex items-center gap-2 border border-yellow-200">
          <div className="bg-yellow-400 p-1 rounded-full">
            <Star className="h-4 w-4 text-white fill-white" />
          </div>
          <span className="font-bold text-yellow-700">{coins} Brilhos</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-6">
        <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <div className="overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
            <TabsList className="bg-blue-100/50 p-1 h-auto flex-nowrap w-max">
              {MASCOT_CATEGORIES.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="rounded-lg px-4 py-2.5 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent key={selectedCategory} value={selectedCategory} className="mt-8 outline-none">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {filteredMascots.map((mascot) => (
                  <motion.div
                    key={mascot.id}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="overflow-hidden border-2 border-blue-100 hover:border-blue-300 transition-colors bg-white group">
                      <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 relative flex items-center justify-center p-4">
                        <MascotRenderer mascot={mascot} size={160} animation="bounce" />
                        <Badge className="absolute top-3 right-3 bg-white/90 text-blue-600 border-blue-100 shadow-sm">
                          {mascot.type === 'human' ? 'Personagem' : 'Animal'}
                        </Badge>
                      </div>
                      
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors">
                            {mascot.name}
                          </CardTitle>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-300 hover:text-blue-500">
                            <Info className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                          {mascot.description}
                        </p>
                      </CardHeader>
                      
                      <CardFooter className="p-4 pt-2 flex gap-3">
                        <Button 
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl h-11"
                          onClick={() => handleBuy(mascot)}
                        >
                          Adotar
                        </Button>
                        <div className="flex flex-col items-center justify-center px-3 bg-yellow-50 rounded-xl border border-yellow-100">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-bold text-yellow-700">100</span>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {filteredMascots.length === 0 && (
                <div className="text-center py-20">
                  <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="h-10 w-10 text-blue-200" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Em breve...</h3>
                  <p className="text-gray-500">Estamos preparando novos amigos para esta categoria!</p>
                </div>
              )}
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </main>
      
      {/* Fixed bottom helper for mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden">
        <Button size="lg" className="rounded-full h-14 w-14 shadow-2xl bg-blue-600">
          <Star className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  );
}
