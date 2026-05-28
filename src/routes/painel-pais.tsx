
import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/lib/store";
import { DashboardHeader } from "@/components/responsible/DashboardHeader";
import { CognitiveRadar } from "@/components/responsible/CognitiveRadar";
import { SkillProgress } from "@/components/responsible/SkillProgress";
import { EmotionalTimeline } from "@/components/responsible/EmotionalTimeline";
import { PedagogicalAlerts } from "@/components/responsible/PedagogicalAlerts";
import { RoutineManager } from "@/components/responsible/RoutineManager";
import { AdaptivePlan } from "@/components/responsible/AdaptivePlan";
import { FocusChart } from "@/components/responsible/FocusChart";
import { mockResponsibleData } from "@/data/responsible/mock-data";
import { ResponsibleIntelligence } from "@/core/responsible/intelligence";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChildProtection } from "@/modules/auth/components/ChildProtection";
import { AuditLogService } from "@/modules/auth/services/AuditLogService";

export const Route = createFileRoute("/painel-pais")({
  component: PainelPremium,
});

function PainelPremium() {
  const { activeChild } = useAppState();
  const [protected_access, setProtectedAccess] = useState(false);
  
  useEffect(() => {
    if (protected_access) {
      AuditLogService.log({
        action: 'ACCESS_PARENT_DASHBOARD',
        module: 'RESPONSIBLE',
        metadata: { childId: activeChild?.id }
      });
    }
  }, [protected_access, activeChild]);

  if (!activeChild) return <Shell><p className="text-center py-10">Selecione uma criança para acessar o painel inteligente.</p></Shell>;

  if (!protected_access) {
    return (
      <Shell>
        <ChildProtection 
          onSuccess={() => setProtectedAccess(true)} 
          onCancel={() => window.history.back()} 
        />
      </Shell>
    );
  }

  const analysis = ResponsibleIntelligence.analyzePerformance(mockResponsibleData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <Shell>
      <div className="bg-slate-50/50 min-h-screen pb-20 -mx-4 md:-mx-8 -mt-6 md:-mt-10 px-4 md:px-8 pt-8">
        <DashboardHeader 

          studentName={activeChild.nome || mockResponsibleData.studentName} 
          grade={mockResponsibleData.grade} 
          childId={activeChild.id}
        />

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Cognitive and Emotional */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <CognitiveRadar data={mockResponsibleData.cognitiveStats} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <FocusChart sessions={mockResponsibleData.focusSessions} />
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants}>
              <EmotionalTimeline history={mockResponsibleData.emotionalHistory} />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <SkillProgress skills={mockResponsibleData.skills} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <RoutineManager routine={mockResponsibleData.dailyRoutine} />
              </motion.div>
            </div>
          </div>

          {/* Right Column - Intelligence and Alerts */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <AdaptivePlan recommendations={analysis.recommendations} />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <PedagogicalAlerts alerts={mockResponsibleData.alerts} />
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white shadow-lg shadow-indigo-200">
              <h3 className="text-lg font-bold mb-2">Dica Neuroeducacional</h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-4">
                O "hiperfoco" de hoje foi excelente! Aproveite esse engajamento para introduzir novos conceitos de lógica amanhã cedo, quando a energia cognitiva estiver no pico.
              </p>
              <button className="w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-sm font-bold transition-all">
                Ver Plano de Aula Completo
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Shell>
  );
}
