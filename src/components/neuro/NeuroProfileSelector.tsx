import React from 'react';
import { Diagnostico } from '@/core/store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Brain, Sparkles, AlertCircle, BookOpen, GraduationCap, Zap, User } from 'lucide-react';

interface NeuroProfileSelectorProps {
  selected: Diagnostico;
  onChange: (profile: Diagnostico) => void;
}

const profiles: { value: Diagnostico; icon: any; color: string; label: string; description: string }[] = [
  { 
    value: "tea", 
    icon: Brain, 
    color: "text-blue-500", 
    label: "TEA (Autismo)",
    description: "Foco em suporte visual, rotinas claras e redução de estímulos sensoriais." 
  },
  { 
    value: "tdah", 
    icon: Zap, 
    color: "text-orange-500", 
    label: "TDAH",
    description: "Atividades curtas, feedback imediato e gamificação para manter o engajamento." 
  },
  { 
    value: "dislexia", 
    icon: BookOpen, 
    color: "text-green-500", 
    label: "Dislexia",
    description: "Uso de fontes acessíveis, suporte em áudio e menor densidade de texto." 
  },
  { 
    value: "tod", 
    icon: AlertCircle, 
    color: "text-red-500", 
    label: "TOD",
    description: "Foco em autonomia, escolhas colaborativas e reforço positivo constante." 
  },
  { 
    value: "deficiencia_intelectual", 
    icon: GraduationCap, 
    color: "text-purple-500", 
    label: "Dificuldade Intelectual",
    description: "Vocabulário simplificado, conceitos concretos e maior taxa de repetição." 
  },
  { 
    value: "altas_habilidades", 
    icon: Sparkles, 
    color: "text-yellow-500", 
    label: "Altas Habilidades",
    description: "Desafios complexos, autonomia profunda e conexões interdisciplinares." 
  },
  { 
    value: "neurotipico", 
    icon: User, 
    color: "text-slate-500", 
    label: "Neurotípico",
    description: "Abordagem equilibrada seguindo a progressão padrão da BNCC." 
  },
];

export const NeuroProfileSelector: React.FC<NeuroProfileSelectorProps> = ({ selected, onChange }) => {
  return (
    <div className="space-y-4">
      <RadioGroup
        value={selected}
        onValueChange={(value) => onChange(value as Diagnostico)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {profiles.map((profile) => (
          <div key={profile.value}>
            <RadioGroupItem
              value={profile.value}
              id={profile.value}
              className="peer sr-only"
            />
            <Label
              htmlFor={profile.value}
              className="flex flex-col items-start justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 [&:has([data-state=checked])]:border-primary cursor-pointer h-full transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <profile.icon className={`h-5 w-5 ${profile.color}`} />
                <span className="font-bold">{profile.label}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {profile.description}
              </p>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
