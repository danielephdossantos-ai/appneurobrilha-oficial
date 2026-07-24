import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, AlertTriangle, CheckCircle2, ArrowRight, ArrowLeft, Home } from "lucide-react";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { DashboardHeader } from "@/components/responsible/DashboardHeader";
import { CognitiveRadar } from "@/components/responsible/CognitiveRadar";
import { SkillProgress } from "@/components/responsible/SkillProgress";
import { EmotionalTimeline } from "@/components/responsible/EmotionalTimeline";
import { PedagogicalAlerts } from "@/components/responsible/PedagogicalAlerts";
import { RoutineManager } from "@/components/responsible/RoutineManager";
import { AdaptivePlan } from "@/components/responsible/AdaptivePlan";
import { FocusChart } from "@/components/responsible/FocusChart";
import { AgendaEstudos } from "@/components/responsible/AgendaEstudos";
import { MissaoProvaManager } from "@/components/responsible/MissaoProvaManager";
import { mockResponsibleData } from "@/data/responsible/mock-data";
import { ResponsibleIntelligence } from "@/modules/parental/intelligence";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParentMode } from "@/contexts/ParentModeContext";
import { AuditLogService } from "@/modules/auth/services/AuditLogService";
import { HyperfocusManager } from "@/components/profile/HyperfocusManager";
import { ConsentGate } from "@/components/legal/ConsentGate";
import { PrivacyPanel } from "@/components/legal/PrivacyPanel";
import { PainelPedagogicoFamilia } from "@/components/responsible/PainelPedagogicoFamilia";
import { NrpPillarsCard } from "@/components/responsible/NrpPillarsCard";
import { DiarioABC } from "@/components/brilha-vida/DiarioABC";
import { MoodTimeline } from "@/components/brilha-vida/MoodTimeline";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/painel-pais")({
  component: () => (
    <ConsentGate>
      <PainelPremium />
    </ConsentGate>
  ),
});

function PainelPremium() {
  const { activeChild, children, isLoading, setActiveChild } = useAppState();
  const { unlocked: parentUnlocked, requestUnlock } = useParentMode();
  const [diarioAberto, setDiarioAberto] = useState(false);

  useEffect(() => {
    if (!activeChild) return;

    if (parentUnlocked) {
      AuditLogService.log({
        action: "ACCESS_PARENT_DASHBOARD",
        module: "RESPONSIBLE",
        metadata: { childId: activeChild.id },
      });
    } else {
      requestUnlock();
    }
  }, [parentUnlocked, activeChild, requestUnlock]);

  if (isLoading) {
    return (
      <Shell>
        <p className="text-center py-10">Carregando…</p>
      </Shell>
    );
  }

  if (!activeChild && children.length === 0) {
    return (
      <Shell>
        <div className="text-center py-20 space-y-4">
          <p className="text-lg font-bold">Nenhuma criança cadastrada ainda</p>
          <p className="text-sm text-muted-foreground">
            Cadastre a primeira criança e faça a anamnese para liberar o painel.
          </p>
          <Link
            to="/anamnese/$childId"
            params={{ childId: "nova" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-black"
          >
            Iniciar cadastro <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Shell>
    );
  }

  if (!activeChild) {
    return (
      <Shell>
        <div className="max-w-xl mx-auto py-12 space-y-4">
          <p className="text-lg font-bold text-center">Selecione uma criança</p>
          <div className="grid gap-3">
            {children.map((c: any) => (
              <button
                key={c.id}
                onClick={() => setActiveChild(c.id)}
                className="w-full p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-primary text-left font-bold"
              >
                {c.nome}
              </button>
            ))}
          </div>
        </div>
      </Shell>
    );
  }

  if (!parentUnlocked) {
    return (
      <Shell>
        <div className="text-center py-20">
          <p className="text-lg font-bold mb-4">🔒 Área dos Pais bloqueada</p>
          <button
            onClick={requestUnlock}
            className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold"
          >
            Digitar PIN
          </button>
        </div>
      </Shell>
    );
  }

  const analysis = ResponsibleIntelligence.analyzePerformance(mockResponsibleData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Shell>
      <div className="bg-slate-50/50 min-h-screen pb-20 -mx-4 md:-mx-8 -mt-6 md:-mt-10 px-4 md:px-8 pt-8">
        <div className="flex items-center justify-between gap-2 mb-6">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border-2 border-slate-200 hover:border-primary font-bold text-sm shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border-2 border-slate-200 hover:border-primary font-bold text-sm shadow-sm"
          >
            <Home className="h-4 w-4" /> Início
          </Link>
          <button
            onClick={() => window.history.forward()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border-2 border-slate-200 hover:border-primary font-bold text-sm shadow-sm"
          >
            Avançar <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <DashboardHeader
          studentName={activeChild.nome}
          grade={activeChild.serie}
          childId={activeChild.id}
        />

        {/* Abas por criança (máx. 2) */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {children.map((c: any) => {
            const isActive = c.id === activeChild.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveChild(c.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-sm shadow-sm border-2 transition ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-white text-slate-700 border-slate-200 hover:border-primary"
                }`}
              >
                <span className="text-lg">{c.avatar || "🧒"}</span>
                {c.nome}
                {!c.anamnese_completa && (
                  <span className="ml-1 text-[10px] uppercase tracking-wider bg-amber-500 text-white px-2 py-0.5 rounded-full">
                    anamnese
                  </span>
                )}
              </button>
            );
          })}
          {children.length < 2 && (
            <Link
              to="/anamnese/$childId"
              params={{ childId: "nova" }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-sm border-2 border-dashed border-slate-300 hover:border-primary text-slate-600 hover:text-primary"
            >
              + Adicionar 2ª criança
            </Link>
          )}
          {children.length >= 2 && (
            <span className="text-xs font-bold text-slate-500 px-3">
              Limite de 2 crianças atingido
            </span>
          )}
        </div>

        {/* Cartão de Anamnese — sempre visível na área dos pais */}
        <div
          className={`mb-6 rounded-3xl border-4 p-6 flex flex-col md:flex-row items-start md:items-center gap-4 ${
            activeChild.anamnese_completa
              ? "bg-emerald-50 border-emerald-300"
              : "bg-amber-50 border-amber-400 shadow-lg animate-pulse-slow"
          }`}
        >
          <div
            className={`h-14 w-14 rounded-2xl flex items-center justify-center ${
              activeChild.anamnese_completa ? "bg-emerald-500" : "bg-amber-500"
            } text-white`}
          >
            {activeChild.anamnese_completa ? (
              <CheckCircle2 className="h-7 w-7" />
            ) : (
              <Brain className="h-7 w-7" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
              {activeChild.anamnese_completa ? (
                "Anamnese concluída"
              ) : (
                <>
                  <AlertTriangle className="h-4 w-4 text-amber-600" /> Anamnese pendente
                </>
              )}
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-tight mt-1">
              {activeChild.anamnese_completa
                ? `Anamnese de ${activeChild.nome} está completa`
                : `Preencha a anamnese de ${activeChild.nome} para liberar a IA pedagógica`}
            </h2>
            <p className="text-sm font-medium text-slate-600 mt-1">
              {activeChild.anamnese_completa
                ? "Você pode revisar ou editar as respostas (até 3 edições)."
                : "A anamnese é essencial para que o app personalize as atividades."}
            </p>
          </div>
          <Link
            to="/anamnese/$childId"
            params={{ childId: activeChild.id }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-sm shadow-md transition-transform hover:scale-105 ${
              activeChild.anamnese_completa
                ? "bg-emerald-600 text-white"
                : "bg-amber-500 text-white"
            }`}
          >
            {activeChild.anamnese_completa ? "Revisar anamnese" : "Iniciar anamnese"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Alfabetização Brilha foi movido para Neuro Treino */}

        {/* Painel Pedagógico para a Família — visão simples e objetiva */}
        <div className="mb-6">
          <PainelPedagogicoFamilia childId={activeChild.id} studentName={activeChild.nome} />
        </div>

        {/* 5 Pilares da Leitura (National Reading Panel) */}
        <div className="mb-6">
          <NrpPillarsCard childId={activeChild.id} />
        </div>

        {/* Diário ABC — ferramenta clínica para pais/babá */}
        <div className="mb-6">
          <button
            onClick={() => setDiarioAberto(true)}
            className="w-full text-left rounded-3xl border-4 border-teal-300 bg-gradient-to-br from-teal-50 to-cyan-50 p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                <BookOpen className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-black tracking-widest uppercase text-teal-700">
                  Ferramenta clínica
                </p>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
                  Diário ABC de {activeChild.nome}
                </h3>
                <p className="text-sm font-medium text-slate-600 mt-1">
                  Antecedente → Comportamento → Consequência. Registre você, a babá ou o cuidador.
                  A IA terapêutica identifica padrões e você pode baixar o PDF para o terapeuta.
                </p>
              </div>
              <ArrowRight className="h-6 w-6 text-teal-600 shrink-0 mt-2" />
            </div>
          </button>
        </div>




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

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <HyperfocusManager />
              </motion.div>
            </div>

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
              <MissaoProvaManager childId={activeChild.id} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <AgendaEstudos childId={activeChild.id} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <AdaptivePlan recommendations={analysis.recommendations} />
            </motion.div>

            <motion.div variants={itemVariants}>
              <PedagogicalAlerts alerts={mockResponsibleData.alerts} childId={activeChild.id} />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white shadow-lg shadow-indigo-200"
            >
              <h3 className="text-lg font-bold mb-2">Dica Neuroeducacional</h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-4">
                O "hiperfoco" de hoje foi excelente! Aproveite esse engajamento para introduzir
                novos conceitos de lógica amanhã cedo, quando a energia cognitiva estiver no pico.
              </p>
              <button className="w-full py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-sm font-bold transition-all">
                Ver Plano de Aula Completo
              </button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <PrivacyPanel />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {diarioAberto && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <DiarioABC onClose={() => setDiarioAberto(false)} />
        </div>
      )}
    </Shell>
  );
}
