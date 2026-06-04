import React from 'react';
import { useMascot, UserMascot } from '@/contexts/MascotContext';
import { KidCard } from '@/components/ui/KidCard';
import { KidButton } from '@/components/ui/KidButton';
import { motion } from 'framer-motion';
import { Star, Heart, Zap } from 'lucide-react';
import KidLiveMascot from '@/components/ui/KidLiveMascot';


export const MascotInventory: React.FC = () => {
  const { userMascots, activeMascot, setActiveMascot, isLoading } = useMascot();

  if (isLoading) {
    return (
      <div className="flex justify-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {userMascots.map((userMascot) => (
        <MascotCard 
          key={userMascot.id} 
          userMascot={userMascot} 
          isActive={activeMascot?.id === userMascot.id}
          onSelect={() => setActiveMascot(userMascot.mascot_id)}
        />
      ))}
    </div>
  );
};

interface MascotCardProps {
  userMascot: UserMascot;
  isActive: boolean;
  onSelect: () => void;
}

const MascotCard: React.FC<MascotCardProps> = ({ userMascot, isActive, onSelect }) => {
  const { mascot } = userMascot;

  return (
    <KidCard 
      className={`relative overflow-hidden transition-all duration-300 ${isActive ? 'ring-4 ring-primary ring-offset-2' : 'hover:scale-105'}`}
    >
      {isActive && (
        <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
          Ativo
        </div>
      )}
      
      <div className="p-6 flex flex-col items-center gap-4">
        <div className="w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-full flex items-center justify-center border-2 border-primary/20 overflow-visible relative">
          {mascot.name === 'Pip' || mascot.name === 'Pipa' || mascot.name.includes('Pip') || mascot.name.includes('Pipa') ? (
            <KidLiveMascot size="md" showBadge={false} emotion="happy" />

          ) : mascot.image_url ? (
            <img src={mascot.image_url} alt={mascot.name} className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className="text-4xl">🧩</span>
          )}
        </div>


        <div className="text-center">
          <h3 className="text-xl font-black text-primary">{mascot.name}</h3>
          {(mascot.name === 'Pip' || mascot.name === 'Pipa') && (
            <p className="text-[11px] font-bold text-secondary uppercase tracking-wider">Guardião dos Desafios</p>
          )}
          <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{mascot.description}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full">
          <Stat icon={<Star className="w-3 h-3 text-yellow-500" />} label="Nível" value={userMascot.level} />
          <Stat icon={<Heart className="w-3 h-3 text-red-500" />} label="Afeto" value={`${userMascot.affinity}%`} />
          <Stat icon={<Zap className="w-3 h-3 text-blue-500" />} label="EXP" value={userMascot.experience} />
        </div>

        {!isActive && (
          <KidButton 
            onClick={onSelect}
            className="w-full mt-2"
          >
            Escolher {mascot.name}
          </KidButton>
        )}
      </div>
    </KidCard>
  );
};

const Stat = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | number }) => (
  <div className="bg-muted rounded-xl p-2 flex flex-col items-center justify-center">
    {icon}
    <span className="text-[10px] text-muted-foreground uppercase font-bold mt-1">{label}</span>
    <span className="text-sm font-black">{value}</span>
  </div>
);
