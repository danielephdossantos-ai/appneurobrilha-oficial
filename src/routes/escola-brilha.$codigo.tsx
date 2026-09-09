import { useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { UniversalPlayer } from "@/escola-brilha/player/UniversalPlayer";
import { useAppState } from "@/core/store";

export const Route = createFileRoute("/escola-brilha/$codigo")({
  head: () => ({
    meta: [
      { title: `Missão de Aprendizagem — Escola Brilha` },
      { name: "description", content: `Uma missão de aprendizagem na Escola Brilha.` },
    ],
  }),
  component: AulaRoute,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center p-8 text-center text-white bg-[#0d1f55]">
      <div>
        <div className="text-2xl font-black mb-2">Missão ainda não disponível</div>
        <div className="text-sm text-white/70">Volte ao catálogo e escolha outra aventura.</div>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center p-8 text-center text-white bg-[#0d1f55]">
      <div className="text-sm">{error.message}</div>
    </div>
  ),
});

function AulaRoute() {
  const { codigo } = Route.useParams();
  const navigate = useNavigate();
  const { activeChild, session } = useAppState();

  // Bloqueio de série para Player Universal (BNCC)
  useEffect(() => {
    if (activeChild && codigo) {
      const isAdmin = session?.user?.user_metadata?.role === "admin" || (session?.user as any)?.role === "admin";
      if (!isAdmin) {
        // Extrai o ano do código BNCC (ex: EF02MA01 -> 02)
        const match = codigo.match(/EF(\d{2})/);
        if (match) {
          const anoCodigo = parseInt(match[1]);
          const childGrade = parseInt(activeChild.serie?.match(/\d/)?.[0] || "0");
          
          if (childGrade > 0 && anoCodigo !== childGrade) {
            navigate({ to: "/escola-brilha" });
          }
        }
      }
    }
  }, [activeChild, session, navigate, codigo]);

  return <UniversalPlayer codigo={codigo} childId={activeChild?.id} serie={activeChild?.serie} />;
}
