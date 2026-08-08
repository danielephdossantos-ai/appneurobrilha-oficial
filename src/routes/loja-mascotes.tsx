import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useMascot } from "@/contexts/MascotContext";
import { useAppState } from "@/core/store";
import { useServerFn } from "@tanstack/react-start";
import { buyMascot, toggleMascotActive } from "@/lib/mascots.functions";
import { toast } from "sonner";
import { Coins, ShoppingBag, Check, Lock, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import KidLiveMascot from "@/components/ui/KidLiveMascot";

export const Route = createFileRoute("/loja-mascotes")({
  component: MascotStorePage,
});

function MascotStorePage() {
  const { allCatalogMascots, userMascots, isLoading } = useMascot();
  const { activeChild } = useAppState();
  const navigate = useNavigate();

  
  const buyFn = useServerFn(buyMascot);
  const toggleFn = useServerFn(toggleMascotActive);

  const handleBuy = async (mascotId: string, price: number) => {
    if (!activeChild) return;
    if (activeChild.coins < price) {
      toast.error("Você precisa de mais BrilhaCoins! Continue estudando para ganhar.");
      return;
    }

    try {
      await buyFn({ mascotId, price, childId: activeChild.id });
      toast.success("Novo mascote desbloqueado! 🎉");
      window.location.reload(); // Recarrega para atualizar contexto
    } catch (e) {
      toast.error("Erro ao comprar mascote.");
    }
  };

  const handleSelect = async (mascotId: string) => {
    try {
      await toggleFn({ mascotId });
      toast.success("Mascote trocado com sucesso!");
      window.location.reload();
    } catch (e) {
      toast.error("Erro ao trocar mascote.");
    }
  };

  return (
    <Shell>
      <PageHeader 
        emoji="🏪" 
        title="Loja do Pip" 
        subtitle="Troque suas moedas por novos companheiros mágicos!" 
      />

      <div className="mb-6 flex items-center justify-between bg-yellow-400/10 p-4 rounded-3xl border-4 border-yellow-400/30">
        <div className="flex items-center gap-2">
          <Coins className="h-8 w-8 text-yellow-500 fill-yellow-500" />
          <span className="text-2xl font-black text-yellow-600">
            {activeChild?.coins || 0} BrilhaCoins
          </span>
        </div>
        <Link to="/" className="text-sm font-bold underline">Voltar</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCatalogMascots.map((mascot) => {
          const userMascot = userMascots.find(um => um.mascot_id === mascot.id);
          const isUnlocked = userMascot?.unlocked || mascot.category === 'primary';
          const isActive = userMascot?.is_active;

          return (
            <Card key={mascot.id} className={`relative overflow-hidden border-4 ${isActive ? 'border-primary' : 'border-border'}`}>
              <div className="flex flex-col items-center p-6 text-center h-full">
                <div className="mb-4 h-40 flex items-center justify-center">
                  {/* Simplificando o visual para a loja usando o nome para deduzir qual mostrar */}
                  <div className="scale-75">
                     <KidLiveMascot size="lg" showBadge={false} className={!isUnlocked ? 'grayscale opacity-50' : ''} />
                  </div>
                </div>

                <h3 className="text-xl font-black mb-2">{mascot.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {mascot.description}
                </p>

                {isActive ? (
                  <div className="w-full bg-primary/10 text-primary py-3 rounded-2xl font-black flex items-center justify-center gap-2">
                    <Check className="h-5 w-5" /> Ativo
                  </div>
                ) : isUnlocked ? (
                  <button 
                    onClick={() => handleSelect(mascot.id)}
                    className="w-full btn-tap bg-primary text-primary-foreground py-3 rounded-2xl font-black"
                  >
                    Usar este Mascote
                  </button>
                ) : (
                  <button 
                    onClick={() => handleBuy(mascot.id, mascot.price || 0)}
                    className="w-full btn-tap bg-yellow-400 text-yellow-900 py-3 rounded-2xl font-black flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="h-5 w-5" /> Comprar por {mascot.price}
                  </button>
                )}
                
                {!isUnlocked && (
                  <div className="absolute top-4 right-4 bg-black/10 p-2 rounded-full">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </Shell>
  );
}
