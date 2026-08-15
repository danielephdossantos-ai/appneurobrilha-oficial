import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, Download, Share2, Brain, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNotifications } from "@/hooks/useNotifications";
import { toast } from "sonner";
import {
  coletarDadosRelatorio,
  gerarPDFRelatorio,
  nomeArquivoRelatorio,
  salvarRelatorio,
} from "@/modules/parental/relatorio-completo";

interface DashboardHeaderProps {
  studentName: string;
  grade: string;
  childId?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  studentName,
  grade,
  childId,
}) => {
  const { sendNotification } = useNotifications();
  const [gerandoPdf, setGerandoPdf] = React.useState(false);

  const gerarRelatorio = async (compartilhar: boolean) => {
    if (!childId) return;
    setGerandoPdf(true);
    try {
      const dados = await coletarDadosRelatorio(childId, 30);
      await salvarRelatorio(dados);
      const doc = gerarPDFRelatorio(dados);
      const nome = nomeArquivoRelatorio(dados);
      const nav: any = navigator;
      if (compartilhar) {
        const file = new File([doc.output("blob")], nome, { type: "application/pdf" });
        if (nav.canShare?.({ files: [file] })) {
          await nav.share({ files: [file], title: `Relatório de ${studentName}` });
          toast.success("Relatório salvo e enviado!");
          return;
        }
      }
      doc.save(nome);
      toast.success("Relatório salvo no app e baixado em PDF!");
    } catch (e: any) {
      toast.error(e?.message ?? "Não foi possível gerar o relatório");
    } finally {
      setGerandoPdf(false);
    }
  };

  const handleStudyReminder = () => {
    if (!childId) return;
    sendNotification({
      child_id: childId,
      title: `${studentName}, hora de brilhar!`,
      message: "Mamãe mandou um lembrete: que tal estudar um pouquinho agora?",
      type: "estudo",
    });
    toast.success("Lembrete enviado com sucesso!");
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-primary/20">
          <AvatarImage src="/placeholder-avatar.png" />
          <AvatarFallback className="bg-primary/10 text-primary font-bold text-xl uppercase">
            {studentName.substring(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{studentName}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">{grade}</span>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Plano Premium Ativo
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {childId && (
          <Button
            variant="default"
            size="sm"
            className="gap-2 bg-indigo-600 hover:bg-indigo-700 shadow-glow animate-pulse hover:animate-none"
            onClick={handleStudyReminder}
          >
            <Send className="h-4 w-4" /> Notificar Celular do Filho
          </Button>
        )}
        {childId && (
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-primary/5 hover:bg-primary/10 border-primary/20 text-primary"
            onClick={() => (window.location.href = `/anamnese/${childId}`)}
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
          disabled={gerandoPdf}
          onClick={() => gerarRelatorio(false)}
        >
          <Download className="h-4 w-4" /> {gerandoPdf ? "Gerando…" : "Exportar Relatório"}
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="gap-2 hidden sm:flex"
          disabled={gerandoPdf}
          onClick={() => gerarRelatorio(true)}
        >
          <Share2 className="h-4 w-4" /> Compartilhar com Terapeuta
        </Button>
        {/* O botão 'Configurações' foi removido conforme solicitação por não ter utilidade nesta área */}
      </div>
    </div>
  );
};
