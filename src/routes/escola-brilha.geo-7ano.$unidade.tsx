import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PlayerGeoV2 } from "@/escola-brilha/curso-v4/geografia-6ano/PlayerGeoV2";
import { CertificadoFund2 } from "@/escola-brilha/curso-v4/geografia-6ano/CertificadoFund2";
import {
  UNIDADES_7ANO,
  getUnidade7ano,
  getProximaUnidade7ano,
} from "@/escola-brilha/curso-v4/geografia-7ano/dados-fund2";
import { useState } from "react";

export const Route = createFileRoute("/escola-brilha/geo-7ano/$unidade")({
  head: ({ params }) => ({
    meta: [
      { title: `Geografia 7º Ano — ${params.unidade}` },
      {
        name: "description",
        content: "Dossiê acadêmico Fund. 2 — 7º ano de Geografia com desafios estilo ENEM.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { unidade } = Route.useParams();
  const navigate = useNavigate();
  const [certificado, setCertificado] = useState(false);

  const dados = getUnidade7ano(unidade);

  if (!dados) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-950 text-slate-300 p-6 text-center">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">404</div>
          <div>Unidade não encontrada.</div>
        </div>
      </div>
    );
  }

  const proxima = getProximaUnidade7ano(unidade);
  const ehFinal = !proxima;

  if (certificado) {
    return (
      <CertificadoFund2
        titulo={dados.recompensas.titulo}
        disciplina="Geografia"
        ano="7º Ano · Ensino Fundamental 2"
      />
    );
  }

  return (
    <PlayerGeoV2
      unidade={dados}
      numeroTotal={UNIDADES_7ANO.length}
      ehFinal={ehFinal}
      onConcluir={() => {
        try {
          const raw = localStorage.getItem("eb.geo7ano.progresso");
          const arr: string[] = raw ? JSON.parse(raw) : [];
          if (!arr.includes(unidade)) {
            arr.push(unidade);
            localStorage.setItem("eb.geo7ano.progresso", JSON.stringify(arr));
          }
        } catch {
          /* ignore */
        }
        if (ehFinal) {
          setCertificado(true);
        } else if (proxima) {
          navigate({ to: "/escola-brilha/geo-7ano/$unidade", params: { unidade: proxima.slug } });
        }
      }}
    />
  );
}
