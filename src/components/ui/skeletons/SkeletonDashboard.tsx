/**
 * SkeletonDashboard - Componente skeleton para dashboard
 */

export function SkeletonDashboard() {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Header */}
      <div className="rounded-lg bg-muted p-6 space-y-3">
        <div className="h-8 bg-muted-foreground/20 rounded w-1/3"></div>
        <div className="h-4 bg-muted-foreground/20 rounded w-1/2"></div>
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-lg bg-muted p-4 space-y-2">
            <div className="h-6 bg-muted-foreground/20 rounded w-2/3"></div>
            <div className="h-10 bg-muted-foreground/20 rounded w-1/2"></div>
            <div className="h-4 bg-muted-foreground/20 rounded w-full"></div>
          </div>
        ))}
      </div>

      {/* Chart skeleton */}
      <div className="rounded-lg bg-muted p-6 space-y-3">
        <div className="h-6 bg-muted-foreground/20 rounded w-1/4"></div>
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-4 bg-muted-foreground/20 rounded flex-1"></div>
              <div className="h-4 bg-muted-foreground/20 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
