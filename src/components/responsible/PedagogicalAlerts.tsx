
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Info, AlertTriangle, ChevronRight, ShieldAlert, Bell } from "lucide-react";
import { PedagogicalAlert } from "../../data/responsible/mock-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNotifications } from "@/hooks/useNotifications";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PedagogicalAlertsProps {
  alerts: PedagogicalAlert[];
  childId?: string;
}

export const PedagogicalAlerts: React.FC<PedagogicalAlertsProps> = ({ alerts: mockAlerts, childId }) => {
  const { notifications, unreadCount, markAsRead } = useNotifications();

  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'critical': return <AlertCircle className="h-5 w-5 text-red-500" />;
      default: return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-50';
      case 'warning': return 'bg-amber-50';
      case 'critical': return 'bg-red-50';
      default: return 'bg-blue-50';
    }
  };

  return (
    <Card className="border-none shadow-sm overflow-hidden h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Alertas Pedagógicos</CardTitle>
        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">3 NOVOS</span>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px]">
          <div className="divide-y divide-slate-100">
            {/* Alertas de Segurança em Tempo Real */}
            {securityAlerts.map((alert) => (
              <div 
                key={alert.id} 
                className="p-4 flex gap-4 items-start transition-colors hover:bg-red-50 cursor-pointer border-l-4 border-red-500 bg-red-50/30"
              >
                <div className="p-2 rounded-full bg-red-100">
                  <ShieldAlert className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-bold text-red-800">Alerta de Monitoramento</h4>
                    <span className="text-[10px] text-red-400">
                      {new Date(alert.created_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-xs text-red-600 leading-relaxed font-medium">
                    {alert.reason}: <span className="italic">"{alert.content}"</span>
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-red-300 self-center" />
              </div>
            ))}

            {alerts.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-4 flex gap-4 items-start transition-colors hover:bg-slate-50 cursor-pointer ${!alert.read ? 'border-l-4 border-primary' : ''}`}
              >
                <div className={`p-2 rounded-full ${getBgColor(alert.type)}`}>
                  {getIcon(alert.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-bold text-slate-800">{alert.title}</h4>
                    <span className="text-[10px] text-slate-400">
                      {new Date(alert.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{alert.message}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300 self-center" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
