import { useLocation, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

/** Botão global: volta exatamente para a tela anterior (histórico do navegador). */
export function VoltarTelaAnterior() {
  const { pathname } = useLocation();
  const router = useRouter();
  if (pathname === "/" || pathname.startsWith("/auth")) return null;
  const voltar = () => {
    if (typeof window !== "undefined" && window.history.length > 1) router.history.back();
    else router.navigate({ to: "/" });
  };
  return (
    <button
      type="button"
      onClick={voltar}
      aria-label="Voltar para a tela anterior"
      className="fixed bottom-3 left-3 z-50 inline-flex min-h-11 items-center gap-2 rounded-full border bg-background/95 px-4 text-sm font-bold text-foreground shadow-lg backdrop-blur"
    >
      <ArrowLeft className="h-4 w-4" />Voltar
    </button>
  );
}
