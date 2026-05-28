
import React from 'react';
import { cn } from '@/lib/utils';

interface SimpleMascotRendererProps {
  emoji?: string;
  size?: number;
  className?: string;
}

export const SimpleMascotRenderer: React.FC<SimpleMascotRendererProps> = ({ 
  emoji = "🐶", 
  size = 64, 
  className 
}) => {
  return (
    <div 
      className={cn("flex items-center justify-center bg-secondary rounded-2xl p-2", className)}
      style={{ width: size, height: size, fontSize: size * 0.6 }}
    >
      {emoji}
    </div>
  );
};
