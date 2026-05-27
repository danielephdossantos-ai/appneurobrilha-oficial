import React from 'react';
import { NeuroProfile, NeuroEngine } from '@/core/neuro/engine';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Brain, Sparkles, AlertCircle, BookOpen, GraduationCap, Zap, User } from 'lucide-react';

interface NeuroProfileSelectorProps {
  selected: NeuroProfile;
  onChange: (profile: NeuroProfile) => void;
}

const profiles: { value: NeuroProfile; icon: any; color: string; description: string }[] = [
  { 
    value: "TEA", 
    icon: Brain, 
    color: "text-blue-500", 
    description: "Foco em suporte visual, rotinas claras e redução de estímulos sensoriais." 
  },
  { 
    value: "TDAH", 
    icon: Zap, 
    color: "text-orange-500", 
    description: "Atividades curtas, feedback imediato e gamificação para manter o engajamento." 
  },
  { 
    value: "Dislexia", 
    icon: BookOpen, 
    color: "text-green-500", 
    description: "Uso de fontes acessíveis, suporte em áudio e menor densidade de texto." 
  },
  { 
    value: "TOD", 
    icon: AlertCircle, 
    color: "text-red-500", 
    description: "Foco em autonomia, escolhas colaborativas e reforço positivo constante." 
  },
  { 
    value: "DeficienciaIntelectual", 
    icon: graduationCap, 
    color: "text-purple-500", 
    description: "Vocabulário simplificado, conceitos concretos e maior taxa de repetição." 
  },
  { 
    value: "AltasHabilidades", 
    icon: Sparkles, 
    color: "text-yellow-500", 
    description: "Desafios complexos, autonomia profunda e conexões interdisciplinares." 
  },
  { 
    value: "Neurotipico", 
    icon: User, 
    color: "text-slate-500", 
    description: "Abordagem equilibrada seguindo a progressão padrão da BNCC." 
  },
];

const graduationCap = GraduationCap; // Helper for consistency

export const NeuroProfileSelector: React.FC<NeuroProfileSelectorProps> = ({ selected, onChange }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Brain className="w-6 h-6 text-primary" />
          Neuroperfil do Aluno
        </CardTitle>
        <CardDescription>
          Selecione o perfil que melhor descreve as necessidades de aprendizagem da criança para adaptar o motor pedagógico.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selected}
          onValueChange={(value) => onChange(value as NeuroProfile)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer h-full"
              >
                <profile.icon className={`mb-3 h-6 w-6 ${profile.color}`} />
                <span className="font-semibold text-center">{NeuroEngine.getProfileLabel(profile.value)}</span>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  {profile.description}
                </p>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};
