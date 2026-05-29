import { useOfflineSync } from "@/hooks/useOfflineSync";
import { Wifi, WifiOff, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/utils";

export function ConnectivityStatus() {
  const { isOnline, pendingSyncCount, syncPendingMutations } = useOfflineSync();

  if (isOnline && pendingSyncCount === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
      <Badge 
        variant={isOnline ? "outline" : "destructive"} 
        className={cn(
          "flex items-center gap-1.5 px-3 py-1 text-xs font-medium shadow-lg",
          isOnline ? "bg-background/90 backdrop-blur-sm border-primary/20 text-primary" : "bg-destructive text-destructive-foreground"
        )}
      >
        {isOnline ? (
          <>
            <Wifi className="h-3.5 w-3.5" />
            Online
          </>
        ) : (
          <>
            <WifiOff className="h-3.5 w-3.5" />
            Modo Offline
          </>
        )}
      </Badge>

      {pendingSyncCount > 0 && (
        <button
          onClick={() => syncPendingMutations()}
          className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-all active:scale-95"
        >
          <RefreshCw className={cn("h-3.5 w-3.5", isOnline && "animate-spin")} />
          {pendingSyncCount} pendente{pendingSyncCount !== 1 ? 's' : ''}
        </button>
      )}
    </div>
  );
}
