import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const kidButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-lg font-extrabold cursor-pointer transition-all duration-200 active:translate-y-1 active:shadow-kid-active disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-kid [--shadow-color:oklch(var(--primary-dark))] hover:bg-primary/95",
        sun: "bg-sun text-warning-foreground shadow-kid [--shadow-color:oklch(var(--sun-dark))] hover:bg-sun/95",
        sky: "bg-sky text-primary-foreground shadow-kid [--shadow-color:oklch(var(--sky-dark))] hover:bg-sky/95",
        petal: "bg-petal text-primary-foreground shadow-kid [--shadow-color:oklch(var(--petal-dark))] hover:bg-petal/95",
        secondary: "bg-secondary text-secondary-foreground shadow-kid [--shadow-color:oklch(var(--secondary-dark))] hover:bg-secondary/95",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-11 px-6 text-base",
        lg: "h-16 px-10 text-xl",
        xl: "h-20 px-12 text-2xl",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface KidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof kidButtonVariants> {
  asChild?: boolean;
}

const KidButton = React.memo(React.forwardRef<HTMLButtonElement, KidButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(kidButtonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
));
KidButton.displayName = "KidButton";

export { KidButton, kidButtonVariants };
