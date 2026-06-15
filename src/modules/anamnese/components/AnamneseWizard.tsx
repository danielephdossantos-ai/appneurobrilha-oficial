import { useNavigate } from "@tanstack/react-router";
import { useAnamneseV2 } from "../hooks/useAnamneseV2";
import { StepIndicator } from "./StepIndicator";
import { DisclaimerBanner } from "./DisclaimerBanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Loader2, Save, CheckCircle2 } from "lucide-react";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  Step10,
  Step11,
  Step12,
  Step13,
  Step14,
  Step15,
  Step16,
  Step17,
} from "../steps";
import { STEP_TITLES, TOTAL_STEPS } from "../v2/types";
import { toast } from "sonner";

export function AnamneseWizard({ childId }: { childId: string }) {
  const nav = useNavigate();
  const a = useAnamneseV2(childId);

  if (a.isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  const step = a.currentStep;
  const r = a.responses;

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 value={r.step1 ?? {}} onChange={(p) => a.updateStep("step1", p)} />;
      case 2:
        return <Step2 value={r.step2 ?? {}} onChange={(p) => a.updateStep("step2", p)} />;
      case 3:
        return <Step3 value={r.step3 ?? {}} onChange={(p) => a.updateStep("step3", p)} />;
      case 4:
        return <Step4 value={r.step4 ?? {}} onChange={(p) => a.updateStep("step4", p)} />;
      case 5:
        return <Step5 value={r.step5 ?? {}} onChange={(p) => a.updateStep("step5", p)} />;
      case 6:
        return <Step6 value={r.step6 ?? {}} onChange={(p) => a.updateStep("step6", p)} />;
      case 7:
        return <Step7 value={r.step7 ?? {}} onChange={(p) => a.updateStep("step7", p)} />;
      case 8:
        return <Step8 value={r.step8 ?? {}} onChange={(p) => a.updateStep("step8", p)} />;
      case 9:
        return <Step9 value={r.step9 ?? {}} onChange={(p) => a.updateStep("step9", p)} />;
      case 10:
        return <Step10 value={r.step10 ?? {}} onChange={(p) => a.updateStep("step10", p)} />;
      case 11:
        return <Step11 value={r.step11 ?? {}} onChange={(p) => a.updateStep("step11", p)} />;
      case 12:
        return <Step12 value={r.step12 ?? {}} onChange={(p) => a.updateStep("step12", p)} />;
      case 13:
        return <Step13 value={r.step13 ?? {}} onChange={(p) => a.updateStep("step13", p)} />;
      case 14:
        return <Step14 value={r.step14 ?? {}} onChange={(p) => a.updateStep("step14", p)} />;
      case 15:
        return <Step15 value={r.step15 ?? {}} onChange={(p) => a.updateStep("step15", p)} />;
      case 16:
        return <Step16 value={r.step16 ?? {}} onChange={(p) => a.updateStep("step16", p)} />;
      case 17:
        return <Step17 value={r.step17 ?? {}} onChange={(p) => a.updateStep("step17", p)} />;
      default:
        return null;
    }
  };

  const handleNext = async () => {
    if (step >= TOTAL_STEPS) {
      try {
        await a.finish();
        toast.success("Anamnese concluída!");
        nav({ to: "/anamnese/$childId/resultado", params: { childId } });
      } catch (e: any) {
        toast.error(e?.message ?? "Erro ao salvar");
      }
    } else {
      a.goTo(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      a.goTo(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-3 md:p-6 space-y-4">
      <DisclaimerBanner />
      <StepIndicator current={step} />

      <Card className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-bold mb-4">{STEP_TITLES[step]}</h2>
        {renderStep()}
      </Card>

      <div className="flex items-center justify-between gap-2 sticky bottom-2 bg-background/90 backdrop-blur p-2 rounded-xl border shadow-lg">
        <Button variant="outline" size="sm" onClick={handleBack} disabled={step === 1}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Voltar
        </Button>
        <Button variant="ghost" size="sm" onClick={() => nav({ to: "/" })}>
          <Save className="h-4 w-4 mr-1" /> Continuar depois
        </Button>
        <Button size="sm" onClick={handleNext}>
          {step >= TOTAL_STEPS ? (
            <>
              Concluir <CheckCircle2 className="h-4 w-4 ml-1" />
            </>
          ) : (
            <>
              Próxima <ArrowRight className="h-4 w-4 ml-1" />
            </>
          )}
        </Button>
      </div>
      {a.saving && (
        <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
          <Loader2 className="h-3 w-3 animate-spin" /> Salvando…
        </p>
      )}
    </div>
  );
}
