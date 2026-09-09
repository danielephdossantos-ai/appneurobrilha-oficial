/**
 * SkeletonActivityList - Componente skeleton para lista de atividades
 */

export function SkeletonActivityList() {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="rounded-lg bg-muted p-4 space-y-2">
          <div className="h-6 bg-muted-foreground/20 rounded w-1/2"></div>
          <div className="h-4 bg-muted-foreground/20 rounded w-3/4"></div>
          <div className="flex gap-2 mt-3">
            <div className="h-8 bg-muted-foreground/20 rounded flex-1"></div>
            <div className="h-8 bg-muted-foreground/20 rounded flex-1"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
