import { useLocation } from "@tanstack/react-router";
import { useAppState } from "@/core/store";
import { ProfessorBrilho } from "./ProfessorBrilho";

type Modulo =
  | "escola-brilha"
  | "reforco-brilha"
  | "jornada-365"
  | "missao-prova"
  | "missao-trabalho";

function detectModulo(pathname: string): Modulo | null {
  if (pathname.startsWith("/escola-brilha")) return "escola-brilha";
  if (pathname.startsWith("/reforco-brilha")) return "reforco-brilha";
  if (pathname.startsWith("/jornada-365")) return "jornada-365";
  if (pathname.startsWith("/missao-prova")) return "missao-prova";
  if (pathname.startsWith("/missao-trabalho")) return "missao-trabalho";
  return null;
}

export function ProfessorBrilhoMount() {
  const location = useLocation();
  const modulo = detectModulo(location.pathname);
  const { activeChild } = useAppState();

  if (!modulo) return null;

  const crianca = activeChild
    ? {
        nome: activeChild.nome ?? undefined,
        idade: activeChild.idade ?? undefined,
        serie: activeChild.serie ?? undefined,
      }
    : undefined;

  return (
    <ProfessorBrilho
      key={modulo}
      modulo={modulo}
      crianca={crianca}
      contexto={`Rota: ${location.pathname}`}
    />
  );
}
