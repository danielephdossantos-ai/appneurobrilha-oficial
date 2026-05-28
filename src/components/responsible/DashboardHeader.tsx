
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, Download, Share2, Brain, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNotifications } from "@/hooks/useNotifications";
import { toast } from "sonner";

interface DashboardHeaderProps {
  studentName: string;
  grade: string;
  childId?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ studentName, grade, childId }) => {
  const { sendNotification } = useNotifications();

  const handleStudyReminder = () => {
    if (!childId) return;
    sendNotification({
      child_id: childId,
      title: `${studentName}, hora de brilhar!`,
      message: "Mamãe mandou um lembrete: que tal estudar um pouquinho agora?",
      type: 'estudo'
    });
    toast.success("Lembrete enviado com sucesso!");
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-primary/20">
          <AvatarImage src="/placeholder-avatar.png" />
          <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl">
            {studentName.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{studentName}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">{grade}</span>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Plano Premium Ativo</Badge>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-2">
        {childId && (
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 bg-primary/5 hover:bg-primary/10 border-primary/20 text-primary"
            onClick={() => window.location.href = `/anamnese/${childId}`}
          >
            <Brain className="h-4 w-4" /> Anamnese
          </Button>
        )}
        <Button variant="outline" size="icon" className="rounded-full">
          <Bell className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 hidden sm:flex"
          onClick={() => window.print()}
        >
          <Download className="h-4 w-4" /> Exportar Relatório
        </Button>

        <Button variant="outline" size="sm" className="gap-2 hidden sm:flex">
          <Share2 className="h-4 w-4" /> Compartilhar com Terapeuta
        </Button>
        <Button variant="default" size="sm" className="gap-2">
          <Settings className="h-4 w-4" /> Configurações
        </Button>
      </div>
    </div>
  );
};
