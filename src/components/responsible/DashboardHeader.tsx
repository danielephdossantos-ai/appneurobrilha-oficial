import React from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Download, Share2, Brain, Send, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NotificationBell } from "@/components/NotificationBell";
import { useNotifications } from "@/hooks/useNotifications";
import { toast } from "sonner";
import { coletarDadosRelatorio, gerarPDFRelatorio, nomeArquivoRelatorio, salvarRelatorio } from "@/modules/parental/relatorio-completo";
import { usePushNotifications } from "@/hooks/usePushNotifications";

interface DashboardHeaderProps { studentName: string; grade: string; childId?: string; avatar?: string; }

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ studentName, grade, childId, avatar }) => {
  const { sendNotification } = useNotifications();
  const parentPush = usePushNotifications(null, "parent");
  const [gerandoPdf, setGerandoPdf] = React.useState(false);
  const gerarRelatorio = async (compartilhar:boolean) => { if(!childId)return; setGerandoPdf(true); try { const dados=await coletarDadosRelatorio(childId,30); await salvarRelatorio(dados); const doc=gerarPDFRelatorio(dados); const nome=nomeArquivoRelatorio(dados); const nav:any=navigator; if(compartilhar){const file=new File([doc.output("blob")],nome,{type:"application/pdf"});if(nav.canShare?.({files:[file]})){await nav.share({files:[file],title:`Relatório de ${studentName}`});toast.success("Relatório compartilhado!");return;}} doc.save(nome); toast.success("Relatório salvo e baixado em PDF!"); } catch(e:any){toast.error(e?.message??"Não foi possível gerar o relatório");} finally{setGerandoPdf(false);} };
  const handleStudyReminder=()=>{if(!childId)return;sendNotification({child_id:childId,title:`${studentName}, hora de brilhar!`,message:"Há uma atividade esperando por você na Rotina.",type:"estudo"});toast.success("Lembrete registrado!");};
  return <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
    <div className="flex items-center gap-4"><Avatar className="h-14 w-14 border"><AvatarFallback className="bg-primary/10 text-primary text-xl">{avatar||studentName.substring(0,2)}</AvatarFallback></Avatar><div><h1 className="text-2xl font-black tracking-tight">{studentName}</h1><div className="flex items-center gap-2 text-muted-foreground"><span className="text-sm font-medium">{grade}</span><Badge variant="outline">Acompanhamento da família</Badge></div></div></div>
    <div className="flex flex-wrap items-center gap-2"><Button variant="outline" size="sm" className="gap-2" onClick={()=>parentPush.request()} disabled={parentPush.permission === "granted"}><Smartphone className="h-4 w-4"/>{parentPush.permission === "granted" ? "Notificações ativas" : "Ativar neste celular"}</Button>{childId&&<Button variant="default" size="sm" className="gap-2" onClick={handleStudyReminder}><Send className="h-4 w-4"/>Enviar lembrete</Button>}{childId&&<Button variant="outline" size="sm" className="gap-2" onClick={()=>window.location.href=`/anamnese/${childId}`}><Brain className="h-4 w-4"/>Perfil</Button>}<NotificationBell/><Button variant="outline" size="sm" className="gap-2 hidden sm:flex" disabled={gerandoPdf} onClick={()=>gerarRelatorio(false)}><Download className="h-4 w-4"/>{gerandoPdf?'Gerando…':'Exportar'}</Button><Button variant="outline" size="sm" className="gap-2 hidden sm:flex" disabled={gerandoPdf} onClick={()=>gerarRelatorio(true)}><Share2 className="h-4 w-4"/>Compartilhar</Button></div>
  </div>;
};
