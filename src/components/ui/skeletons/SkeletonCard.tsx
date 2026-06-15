/**
 * SkeletonCard - Componente skeleton para cards
 */

export function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-lg bg-muted p-4 space-y-3">
      <div className="h-8 bg-muted-foreground/20 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-muted-foreground/20 rounded w-full"></div>
        <div className="h-4 bg-muted-foreground/20 rounded w-5/6"></div>
      </div>
      <div className="h-10 bg-muted-foreground/20 rounded w-full mt-4"></div>
    </div>
  );
}
