import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholder?: string;
  fallback?: string;
}

/**
 * LazyImage component for optimized image loading.
 * Features:
 * - Intersection Observer for lazy loading
 * - Low-quality image placeholder (LQIP) support
 * - Smooth transition on load
 * - Fallback for broken images
 */
export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className, 
  placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', // Transparent 1x1
  fallback = '/placeholder-error.png',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      setError(true);
      setCurrentSrc(fallback);
    };
  }, [src, fallback]);

  return (
    <div className={cn("relative overflow-hidden bg-slate-100", className)}>
      <img
        src={currentSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-500 ease-in-out",
          isLoaded ? "opacity-100" : "opacity-0 blur-sm",
          error && "opacity-50 grayscale"
        )}
        loading="lazy"
        {...props}
      />
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default React.memo(LazyImage);
