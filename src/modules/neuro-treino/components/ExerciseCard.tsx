import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CognitiveExercise } from "../types/training";
import { Brain, Timer, Target, Zap } from "lucide-react";

interface ExerciseCardProps {
  exercise: CognitiveExercise;
  lastScore?: number;
  onStart: (exercise: CognitiveExercise) => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, lastScore, onStart }) => {
  return (
    <Card className="hover:shadow-md transition-all border-slate-200">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge
            variant="outline"
            className="text-[10px] uppercase font-bold text-indigo-600 border-indigo-200 bg-indigo-50"
          >
            {exercise.skill.replace("_", " ")}
          </Badge>
          {lastScore && (
            <div className="text-xs font-bold text-green-600 flex items-center gap-1">
              <Zap size={12} /> {lastScore} pts
            </div>
          )}
        </div>
        <CardTitle className="text-lg mt-2 font-bold">{exercise.title}</CardTitle>
        <CardDescription className="text-xs line-clamp-2">{exercise.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-4 text-[10px] text-slate-500 font-medium">
          <div className="flex items-center gap-1">
            <Timer size={12} /> {exercise.rules.duration_seconds}s
          </div>
          <div className="flex items-center gap-1">
            <Target size={12} /> Nível {exercise.base_difficulty}
          </div>
        </div>
        <Button
          onClick={() => onStart(exercise)}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl"
        >
          Iniciar Treino
        </Button>
      </CardContent>
    </Card>
  );
};
