/**
 * SkeletonText - Componente skeleton para texto
 */

interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export function SkeletonText({ lines = 3, className = '' }: SkeletonTextProps) {
  return (
    <div className={`animate-pulse space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-muted-foreground/20 rounded w-full"
          style={{ width: i === lines - 1 ? '80%' : '100%' }}
        ></div>
      ))}
    </div>
  );
}
