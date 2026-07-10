import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PlayerGeoV2 } from "@/escola-brilha/curso-v4/geografia-6ano/PlayerGeoV2";
import { CertificadoFund2 } from "@/escola-brilha/curso-v4/geografia-6ano/CertificadoFund2";
import {
  UNIDADES_8ANO,
  getUnidade8ano,
  getProximaUnidade8ano,
} from "@/escola-brilha/curso-v4/geografia-8ano/dados-fund2";
import { useState } from "react";

export const Route = createFileRoute("/escola-brilha/geo-8ano/$unidade")({
  head: ({ params }) => ({
    meta: [
      { title: `Geografia 8º Ano — ${params.unidade}` },
      {
        name: "description",
        content: "Dossiê acadêmico Fund. 2 — 8º ano de Geografia com desafios estilo ENEM.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { unidade } = Route.useParams();
  const navigate = useNavigate();
  const [certificado, setCertificado] = useState(false);

  const dados = getUnidade8ano(unidade);

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

  const proxima = getProximaUnidade8ano(unidade);
  const ehFinal = !proxima;

  if (certificado) {
    return (
      <CertificadoFund2
        titulo={dados.recompensas.titulo}
        disciplina="Geografia"
        ano="8º Ano · Ensino Fundamental 2"
      />
    );
  }

  return (
    <PlayerGeoV2
      unidade={dados}
      numeroTotal={UNIDADES_8ANO.length}
      ehFinal={ehFinal}
      onConcluir={() => {
        try {
          const raw = localStorage.getItem("eb.geo8ano.progresso");
          const arr: string[] = raw ? JSON.parse(raw) : [];
          if (!arr.includes(unidade)) {
            arr.push(unidade);
            localStorage.setItem("eb.geo8ano.progresso", JSON.stringify(arr));
          }
        } catch {
          /* ignore */
        }
        if (ehFinal) {
          setCertificado(true);
        } else if (proxima) {
          navigate({ to: "/escola-brilha/geo-8ano/$unidade", params: { unidade: proxima.slug } });
        }
      }}
    />
  );
}
