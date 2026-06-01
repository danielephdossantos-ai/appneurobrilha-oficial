import { createFileRoute, Link } from '@tanstack/react-router';
import { MascotInventory } from '@/components/rewards/MascotInventory';
import { Shell } from '@/components/Layout';
import { motion } from 'framer-motion';
import { KidButton } from '@/components/ui/KidButton';

export const Route = createFileRoute('/mascotes')({
  component: MascotesPage,
});

function MascotesPage() {
  return (
    <Shell>
      <div className="container mx-auto py-8">
        <header className="mb-8 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-primary mb-2"
          >
            Seus Mascotes
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Escolha seu companheiro para as aventuras de hoje!
          </motion.p>
        </header>

        <MascotInventory />
        
        <div className="mt-12 p-8 bg-primary/5 rounded-3xl border-2 border-dashed border-primary/20 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Procurando mais amigos?</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Novos amigos neuro-adaptativos estão esperando por você na Loja de Mascotes!
          </p>
          <Link to="/loja-mascotes">
            <KidButton variant="primary" size="lg" className="px-12">
              Ir para a Loja 🏪
            </KidButton>
          </Link>
        </div>
      </div>
    </Shell>
  );
}
