import { AlertCircle } from "lucide-react";

export function DisclaimerBanner() {
  return (
    <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-3 rounded-r-lg flex gap-2">
      <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
      <p className="text-xs md:text-sm text-amber-900 dark:text-amber-200">
        <strong>Este aplicativo não realiza diagnóstico clínico.</strong> Os resultados são apenas
        indicativos e não substituem avaliação profissional.
      </p>
    </div>
  );
}
