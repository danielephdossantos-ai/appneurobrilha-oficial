import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/auth")({
  component: Auth,
});

function Auth() {
  useEffect(() => {
    window.location.href = "/api/login";
  }, []);

  return (
    <div className="min-h-screen bg-sidebar grid place-items-center p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="h-20 w-20 rounded-[2rem] bg-gradient-to-br from-primary to-success grid place-items-center text-5xl shadow-glow transform -rotate-6">
          🌱
        </div>
        <h1 className="text-4xl font-black text-center tracking-tight text-foreground">
          NeuroBrilha
        </h1>
        <p className="text-muted-foreground font-bold text-center uppercase tracking-widest text-xs">
          Aprendizagem Adaptativa
        </p>
        <Loader2 className="h-8 w-8 animate-spin text-primary mt-4" />
        <p className="text-sm text-muted-foreground font-bold">Entrando...</p>
      </div>
    </div>
  );
}
