import { useLocation } from "@tanstack/react-router";
import { useAppState } from "@/core/store";
import { ProfessorBrilho } from "./ProfessorBrilho";
import { PipMatBubble } from "./PipMatBubble";

type Modulo =
  | "reforco-brilha"
  | "missao-prova"
  | "missao-trabalho";

function detectModulo(pathname: string): Modulo | null {
  if (pathname.startsWith("/reforco-brilha")) return "reforco-brilha";
  if (pathname.startsWith("/missao-prova")) return "missao-prova";
  if (pathname.startsWith("/missao-trabalho")) return "missao-trabalho";
  return null;
}

function isRotaMatematica(pathname: string) {
  return (
    pathname.includes("matematica") ||
    pathname.startsWith("/escola-brilha/contar-com-pip") ||
    pathname.startsWith("/professor-matematica")
  );
}

export function ProfessorBrilhoMount() {
  const location = useLocation();
  const modulo = detectModulo(location.pathname);
  const { activeChild } = useAppState();

  const crianca = activeChild
    ? {
        nome: activeChild.nome ?? undefined,
        idade: activeChild.idade ?? undefined,
        serie: activeChild.serie ?? undefined,
      }
    : undefined;

  if (isRotaMatematica(location.pathname)) {
    return <PipMatBubble crianca={crianca} />;
  }

  if (!modulo) return null;

  return (
    <ProfessorBrilho
      key={modulo}
      modulo={modulo}
      crianca={crianca}
      contexto={`Rota: ${location.pathname}`}
    />
  );
}
