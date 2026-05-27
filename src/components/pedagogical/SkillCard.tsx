import React from "react";
import { Skill, DomainStatus } from "../../data/skills/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle2, 
  Circle, 
  AlertCircle, 
  Clock, 
  Target, 
  BrainCircuit,
  Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  skill: Skill;
  status: DomainStatus;
  progress: number;
  locked?: boolean;
  onClick?: () => void;
}

const statusColors: Record<DomainStatus, string> = {
  iniciado: "bg-blue-100 text-blue-700 border-blue-200",
  em_progresso: "bg-amber-100 text-amber-700 border-amber-200",
  dominado: "bg-emerald-100 text-emerald-700 border-emerald-200",
  revisao_necessaria: "bg-rose-100 text-rose-700 border-rose-200",
};

const statusIcons: Record<DomainStatus, React.ReactNode> = {
  iniciado: <Circle className="w-4 h-4" />,
  em_progresso: <Clock className="w-4 h-4" />,
  dominado: <CheckCircle2 className="w-4 h-4" />,
  revisao_necessaria: <AlertCircle className="w-4 h-4" />,
};

export const SkillCard: React.FC<SkillCardProps> = ({ 
  skill, 
  status, 
  progress, 
  locked,
  onClick 
}) => {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group",
        locked && "opacity-60 grayscale cursor-not-allowed",
        status === "dominado" && "border-emerald-200 shadow-sm"
      )}
      onClick={!locked ? onClick : undefined}
    >
      <div className={cn(
        "absolute top-0 left-0 w-1 h-full",
        status === "dominado" ? "bg-emerald-500" : 
        status === "em_progresso" ? "bg-amber-500" :
        status === "revisao_necessaria" ? "bg-rose-500" : "bg-blue-500"
      )} />
      
      <CardHeader className="pb-2 space-y-1">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="text-[10px] font-mono">
            {skill.bnccCode}
          </Badge>
          <Badge className={cn("flex items-center gap-1", statusColors[status])}>
            {statusIcons[status]}
            <span className="capitalize">{status.replace("_", " ")}</span>
          </Badge>
        </div>
        <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
          {skill.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {skill.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium">
            <span>Progresso de Domínio</span>
            <span>{Math.round(progress * 100)}%</span>
          </div>
          <Progress value={progress * 100} className="h-2" />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{skill.estimatedTime} min</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <BrainCircuit className="w-3 h-3" />
            <span>Dificuldade {skill.difficulty}/5</span>
          </div>
        </div>

        {locked && (
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] flex items-center justify-center">
            <div className="bg-background/80 p-2 rounded-full shadow-lg">
              <Lock className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
