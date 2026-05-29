
import React, { useEffect, useState } from 'react';
import { MascotState, MascotEngine } from '../../core/emotional/mascot';
import { Emotion } from '../../modules/emotional-engine/engine/emotional-engine';
import { SimpleMascotRenderer } from '../rewards/SimpleMascotRenderer';

import { 
  MessageCircle,
} from 'lucide-react';
import { cn } from '@/utils/utils';

interface MascotProps {
  type?: "amigo" | "mentor" | "explorador";
  emotion?: Emotion;
  customMessage?: string;
  className?: string;
}


export const Mascot: React.FC<MascotProps> = ({ 
  type = "amigo", 
  emotion = "calmo",
  customMessage,
  className
}) => {
  const [state, setState] = useState<MascotState>(MascotEngine.getMascot(type));
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setState(prev => ({
      ...prev,
      currentEmotion: emotion,
      message: customMessage || prev.message
    }));
    
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [emotion, customMessage]);

  const getMascotEmoji = (): string => {
    switch (type) {
      case "mentor": 
        return "🦁";
      case "explorador":
        return "🤖";
      default:
        return "🐶";
    }
  };

  const getAnimation = () => {
    switch (emotion) {
      case "orgulhoso": return "happy";
      case "focado": return "bounce";
      case "frustrado": return "idle";
      default: return "idle";
    }
  };


  return (
    <div className={cn("flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl", className)}>
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-50" />
        <div className="relative z-10 p-0 bg-transparent rounded-full border-none shadow-none">
          <SimpleMascotRenderer 
            emoji={getMascotEmoji()} 
            size={120} 
          />
        </div>

        
        {state.isGuiding && (
          <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground p-1 rounded-full animate-pulse">
            <MessageCircle size={16} />
          </div>
        )}
      </div>

      <div className="flex flex-col items-center text-center max-w-[200px]">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
          {state.name}
        </span>
        <p className="text-sm font-medium leading-relaxed text-foreground animate-in fade-in slide-in-from-bottom-2 duration-700">
          "{state.message}"
        </p>
      </div>

      <div className="flex gap-1 mt-2">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={cn(
              "h-1 w-8 rounded-full bg-muted-foreground/20 overflow-hidden",
              emotion === "orgulhoso" && i === 1 && "bg-yellow-500/50"
            )}
          >
            {emotion === "orgulhoso" && i <= 2 && (
              <div className="h-full bg-yellow-500 animate-progress" style={{ width: '100%' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
