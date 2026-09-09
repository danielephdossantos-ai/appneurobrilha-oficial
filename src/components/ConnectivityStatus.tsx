import { useOfflineSync } from "@/hooks/useOfflineSync";
import { WifiOff, RefreshCw } from "lucide-react";
import { cn } from "@/utils/utils";

/**
 * Notificador global de conectividade.
 * - Quando OFFLINE: exibe uma barra vermelha no topo, impossível de ignorar,
 *   deixando claro pra criança/família que o problema é a INTERNET dela,
 *   não o app.
 * - Quando ONLINE mas com fila de sincronização pendente: mostra chip discreto
 *   no canto inferior.
 */
export function ConnectivityStatus() {
  const { isOnline, pendingSyncCount, syncPendingMutations } = useOfflineSync();

  return (
    <>
      {!isOnline && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed top-0 left-0 right-0 z-[100] bg-destructive text-destructive-foreground shadow-lg animate-in slide-in-from-top"
        >
          <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-2.5 text-sm font-semibold">
            <WifiOff className="h-5 w-5 shrink-0" />
            <div className="flex-1 leading-tight">
              <div>Sem internet no seu aparelho</div>
              <div className="text-xs font-normal opacity-90">
                O app está funcionando. Verifique seu Wi-Fi ou dados móveis — assim que voltar, tudo sincroniza sozinho.
              </div>
            </div>
          </div>
        </div>
      )}

      {isOnline && pendingSyncCount > 0 && (
        <div className="fixed bottom-4 right-4 z-50 animate-in fade-in slide-in-from-bottom-4">
          <button
            onClick={() => syncPendingMutations()}
            className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-all active:scale-95"
          >
            <RefreshCw className={cn("h-3.5 w-3.5 animate-spin")} />
            Sincronizando {pendingSyncCount} item{pendingSyncCount !== 1 ? "s" : ""}
          </button>
        </div>
      )}
    </>
  );
}
