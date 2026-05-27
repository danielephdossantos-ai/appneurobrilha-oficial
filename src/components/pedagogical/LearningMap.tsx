import React from "react";
import { Skill, MasteryNode } from "../../data/skills/types";
import { SkillCard } from "./SkillCard";
import { cn } from "@/lib/utils";

interface LearningMapProps {
  skills: Skill[];
  mastery: Record<string, MasteryNode>;
  onSkillClick?: (skill: Skill) => void;
}

export const LearningMap: React.FC<LearningMapProps> = ({ 
  skills, 
  mastery, 
  onSkillClick 
}) => {
  // Simple grouping by grade for the map
  const grades = Array.from(new Set(skills.map(s => s.grade)));

  return (
    <div className="space-y-12 py-8 px-4 max-w-5xl mx-auto">
      {grades.map((grade, gIndex) => (
        <div key={grade} className="relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary text-primary-foreground w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg transform -rotate-3">
              {gIndex + 1}
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight italic">
              {grade}
            </h2>
            <div className="h-px bg-border flex-grow ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills
              .filter(s => s.grade === grade)
              .map((skill) => {
                const skillMastery = mastery[skill.id] || { 
                  skillId: skill.id, 
                  status: "iniciado", 
                  progress: 0, 
                  lastAttempt: new Date() 
                };
                
                const isLocked = skill.prerequisites.some(
                  preId => mastery[preId]?.status !== "dominado"
                );

                return (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    status={skillMastery.status}
                    progress={skillMastery.progress}
                    locked={isLocked}
                    onClick={() => onSkillClick?.(skill)}
                  />
                );
              })}
          </div>

          {gIndex < grades.length - 1 && (
            <div className="absolute -bottom-10 left-6 w-px h-8 bg-dashed border-l-2 border-dashed border-primary/30" />
          )}
        </div>
      ))}
    </div>
  );
};
