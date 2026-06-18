import React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAulaBnccById } from "../modules/escola-brilha/hooks/useAulasBncc";
import { EarlyChildhoodPlayer } from "../modules/escola-brilha/views/EarlyChildhoodPlayer";
import { ActivityPlayer } from "../modules/escola-brilha/views/ActivityPlayer";
import { ActivityPlayerC } from "../modules/escola-brilha/views/ActivityPlayerC";

export const Route = createFileRoute("/escola-brilha/db/$aulaId")({
  component: AulaDbPage,
});

function AulaDbPage() {
  const { aulaId } = Route.useParams();
  const navigate = useNavigate();
  const { aula, loading, error } = useAulaBnccById(aulaId);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <p className="text-lg font-bold">Carregando aula…</p>
      </div>
    );
  }

  if (error || !aula) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-4 p-6">
        <p className="text-xl font-black">Aula não encontrada</p>
        {error && <p className="text-sm text-red-300">{error}</p>}
        <button
          onClick={() => navigate({ to: "/escola-brilha" })}
          className="px-5 py-2 rounded-xl bg-white text-slate-900 font-bold"
        >
          Voltar
        </button>
      </div>
    );
  }

  const lesson = aula.payload;

  switch (aula.tipo_player) {
    case "early":
      return <EarlyChildhoodPlayer lesson={lesson} />;
    case "b":
      return <ActivityPlayer lesson={lesson} />;
    case "c":
      return <ActivityPlayerC lesson={lesson} />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <p>Player "{aula.tipo_player}" ainda não disponível no banco.</p>
        </div>
      );
  }
}
