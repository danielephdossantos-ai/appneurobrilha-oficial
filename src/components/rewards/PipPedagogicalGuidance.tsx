import React, { useState, useEffect } from "react";
import { useAppState } from "@/core/store";
import {
  PipPedagogicalSystem,
  PipEmotion,
} from "@/engines/pedagogical-engine/PipPedagogicalSystem";
import KidLiveMascot from "@/components/ui/KidLiveMascot";
import { motion, AnimatePresence } from "framer-motion";

interface PipPedagogicalGuidanceProps {
  stage: "explanation" | "encouragement" | "celebration" | "idle";
  className?: string;
  manualMessage?: string | null;
}

export const PipPedagogicalGuidance: React.FC<PipPedagogicalGuidanceProps> = ({
  stage,
  className,
  manualMessage,
}) => {
  const { activeChild } = useAppState();
  const [message, setMessage] = useState<string | null>(null);
  const [emotion, setEmotion] = useState<PipEmotion>("happy");

  useEffect(() => {
    if (!activeChild || stage === "idle") {
      setMessage(null);
      setEmotion("happy");
      return;
    }

    let result;
    switch (stage) {
      case "explanation":
        result = PipPedagogicalSystem.getExplanation(activeChild);
        break;
      case "encouragement":
        result = PipPedagogicalSystem.getEncouragement(activeChild);
        break;
      case "celebration":
        result = PipPedagogicalSystem.getCelebration(activeChild);
        break;
    }

    if (result) {
      setMessage(result.text);
      setEmotion(result.emotion as PipEmotion);

      // Auto-clear message for encouragement after some time
      if (stage === "encouragement") {
        const timer = setTimeout(() => setMessage(null), 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [stage, activeChild]);

  if (!activeChild) return null;

  return (
    <div className={className}>
      <KidLiveMascot
        emotion={emotion as any}
        message={manualMessage || message || undefined}
        size="md"
      />
    </div>
  );
};
