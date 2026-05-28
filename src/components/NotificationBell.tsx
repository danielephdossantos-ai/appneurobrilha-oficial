
import { Bell, Check, Clock, AlertTriangle, BookOpen, User } from "lucide-react";
import { useNotifications, Notification } from "@/hooks/useNotifications";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { motion, AnimatePresence } from "framer-motion";

export function NotificationBell() {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
  const [isOpen, setIsOpen] = useState(false);

  const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
      case 'estudo': return <BookOpen className="h-4 w-4 text-indigo-500" />;
      case 'seguranca': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'rotina': return <Clock className="h-4 w-4 text-sun" />;
      case 'amigo': return <User className="h-4 w-4 text-pink-500" />;
      default: return <Bell className="h-4 w-4 text-slate-400" />;
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors btn-tap"
      >
        <Bell className="h-5 w-5 text-foreground" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-background animate-in zoom-in">
            {unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 z-50 overflow-hidden"
            >
              <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-extrabold text-slate-800">Notificações</h3>
                {unreadCount > 0 && (
                  <button 
                    onClick={() => markAllAsRead()}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                  >
                    <Check className="h-3 w-3" /> Marcar todas como lidas
                  </button>
                )}
              </div>

              <div className="max-h-[400px] overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-10 text-center space-y-2">
                    <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                      <Bell className="h-6 w-6 text-slate-300" />
                    </div>
                    <p className="text-sm text-slate-500">Nenhuma notificação por aqui.</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-50">
                    {notifications.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => {
                          markAsRead(n.id);
                          // Ação opcional ao clicar
                        }}
                        className={`w-full text-left p-4 flex gap-3 transition-colors hover:bg-slate-50 ${!n.read ? 'bg-indigo-50/30' : ''}`}
                      >
                        <div className={`h-10 w-10 shrink-0 rounded-2xl flex items-center justify-center ${
                          n.type === 'seguranca' ? 'bg-red-50' : 
                          n.type === 'estudo' ? 'bg-indigo-50' : 
                          'bg-slate-100'
                        }`}>
                          {getTypeIcon(n.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <p className={`text-sm font-bold truncate ${!n.read ? 'text-slate-900' : 'text-slate-600'}`}>
                              {n.title}
                            </p>
                            <span className="text-[10px] text-slate-400 whitespace-nowrap">
                              {formatDistanceToNow(new Date(n.created_at), { addSuffix: true, locale: ptBR })}
                            </span>
                          </div>
                          <p className={`text-xs mt-0.5 line-clamp-2 ${!n.read ? 'text-slate-700' : 'text-slate-500'}`}>
                            {n.message}
                          </p>
                        </div>
                        {!n.read && (
                          <div className="h-2 w-2 rounded-full bg-indigo-600 shrink-0 mt-2" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-700"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
