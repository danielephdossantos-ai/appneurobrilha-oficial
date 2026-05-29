import * as React from "react";
import { cn } from "@/utils/utils";

interface KidCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'sun' | 'sky' | 'petal' | 'lilac' | 'white';
}

const KidCard = React.forwardRef<HTMLDivElement, KidCardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: "bg-secondary/30 border-secondary",
      sun: "bg-sun/20 border-sun/50",
      sky: "bg-sky/20 border-sky/50",
      petal: "bg-petal/20 border-petal/50",
      lilac: "bg-lilac/20 border-lilac/50",
      white: "bg-white border-border shadow-sm",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl border-2 p-6 transition-all duration-300",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
KidCard.displayName = "KidCard";

export { KidCard };
