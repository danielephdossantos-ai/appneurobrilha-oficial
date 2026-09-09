import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";
import { Check, X, Star } from "lucide-react";

interface KidFeedbackProps {
  type: "success" | "error" | "star";
  message?: string;
  className?: string;
}

const KidFeedback = ({ type, message, className }: KidFeedbackProps) => {
  const configs = {
    success: {
      icon: Check,
      color: "bg-success",
      shadow: "oklch(0.55 0.15 150)",
      animation: { scale: [0, 1.2, 1] },
    },
    error: {
      icon: X,
      color: "bg-destructive",
      shadow: "oklch(0.5 0.18 25)",
      animation: { x: [-10, 10, -10, 10, 0] },
    },
    star: {
      icon: Star,
      color: "bg-sun",
      shadow: "oklch(0.75 0.13 85)",
      animation: { rotate: [0, 180, 360], scale: [0, 1.5, 1] },
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      <motion.div
        animate={config.animation}
        transition={{ duration: 0.5, type: "spring" }}
        className={cn(
          "w-24 h-24 rounded-full flex items-center justify-center text-white shadow-kid",
          config.color,
        )}
        style={{ "--shadow-color": config.shadow } as React.CSSProperties}
      >
        <Icon className="w-12 h-12" strokeWidth={3} />
      </motion.div>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-black text-foreground text-center"
        >
          {message}
        </motion.p>
      )}
    </div>
  );
};

export default KidFeedback;
