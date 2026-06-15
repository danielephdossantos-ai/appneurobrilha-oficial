import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
  ChevronRight,
  ShieldAlert,
  Bell,
  BookOpen,
} from "lucide-react";
import { PedagogicalAlert } from "@/data/responsible/mock-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNotifications } from "@/hooks/useNotifications";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PedagogicalAlertsProps {
  alerts: PedagogicalAlert[];
  childId?: string;
}

export const PedagogicalAlerts: React.FC<PedagogicalAlertsProps> = ({
  alerts: mockAlerts,
  childId,
}) => {
  const { notifications, unreadCount, markAsRead } = useNotifications();

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "critical":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50";
      case "warning":
        return "bg-amber-50";
      case "critical":
        return "bg-red-50";
      default:
        return "bg-blue-50";
    }
  };

  return (
    <Card className="border-none shadow-sm overflow-hidden h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Linha do Tempo de Atividade</CardTitle>
        {unreadCount > 0 && (
          <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase">
            {unreadCount} NOVOS
          </span>
        )}
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px]">
          <div className="divide-y divide-slate-100">
            {notifications.length === 0 && (
              <div className="p-10 text-center text-slate-400">
                <Bell className="h-8 w-8 mx-auto mb-2 opacity-20" />
                <p className="text-sm">Nenhuma atividade registrada ainda.</p>
              </div>
            )}

            {notifications.map((alert) => (
              <div
                key={alert.id}
                onClick={() => markAsRead(alert.id)}
                className={`p-4 flex gap-4 items-start transition-colors hover:bg-slate-50 cursor-pointer ${
                  !alert.read ? "border-l-4 border-primary bg-primary/5" : ""
                } ${alert.type === "seguranca" ? "border-l-4 border-red-500 bg-red-50/20" : ""}`}
              >
                <div
                  className={`p-2 rounded-full ${
                    alert.type === "seguranca"
                      ? "bg-red-100"
                      : alert.type === "estudo"
                        ? "bg-indigo-100"
                        : "bg-slate-100"
                  }`}
                >
                  {alert.type === "seguranca" ? (
                    <ShieldAlert className="h-4 w-4 text-red-600" />
                  ) : alert.type === "estudo" ? (
                    <BookOpen className="h-4 w-4 text-indigo-600" />
                  ) : (
                    <Info className="h-4 w-4 text-slate-600" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between">
                    <h4
                      className={`text-sm font-bold ${alert.type === "seguranca" ? "text-red-800" : "text-slate-800"}`}
                    >
                      {alert.title}
                    </h4>
                    <span className="text-[10px] text-slate-400">
                      {formatDistanceToNow(new Date(alert.created_at), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                  <p
                    className={`text-xs leading-relaxed ${alert.type === "seguranca" ? "text-red-600 font-medium" : "text-slate-500"}`}
                  >
                    {alert.message}
                  </p>
                </div>
                <ChevronRight
                  className={`h-4 w-4 self-center ${alert.type === "seguranca" ? "text-red-300" : "text-slate-300"}`}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
