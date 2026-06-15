/**
 * SkeletonAvatar - Componente skeleton para avatar
 */

interface SkeletonAvatarProps {
  className?: string;
}

export function SkeletonAvatar({ className = '' }: SkeletonAvatarProps) {
  return (
    <div className={`animate-pulse h-10 w-10 rounded-full bg-muted-foreground/20 ${className}`}></div>
  );
}
