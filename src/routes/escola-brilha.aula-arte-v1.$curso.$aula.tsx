import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PlayerArteV1 } from "@/escola-brilha/curso-v4/arte-2ano/player/PlayerArteV1";
import {
  getAulaArteV1FromCurso,
  getProximaAulaArteV1,
} from "@/escola-brilha/curso-v4/registry";

export const Route = createFileRoute("/escola-brilha/aula-arte-v1/$curso/$aula")({
  head: ({ params }) => ({
    meta: [
      { title: `Aula ${params.aula} — Pincel Mágico` },
      { name: "description", content: "Arte 2º ano — O Pincel Mágico de Aurora." },
    ],
  }),
  component: AulaArteV1Page,
});

const CHAVE_PROGRESSO = (slug: string) => `eb.v4.progresso.${slug}`;

function marcarConcluida(cursoSlug: string, aulaSlug: string) {
  try {
    const raw = localStorage.getItem(CHAVE_PROGRESSO(cursoSlug));
    const arr: string[] = raw ? JSON.parse(raw) : [];
    if (!arr.includes(aulaSlug)) {
      arr.push(aulaSlug);
      localStorage.setItem(CHAVE_PROGRESSO(cursoSlug), JSON.stringify(arr));
    }
  } catch {
    /* ignore */
  }
}

function AulaArteV1Page() {
  const { curso, aula } = Route.useParams();
  const navigate = useNavigate();
  const dados = getAulaArteV1FromCurso(curso, aula);
  const [mostrarFinal, setMostrarFinal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [aula]);

  if (!dados) {
    return (
      <div className="min-h-screen grid place-items-center bg-[#2b1055] text-white text-center p-6">
        <div>
          <div className="text-4xl mb-3">🎨</div>
          Aula de Arte não encontrada.
          <button
            onClick={() =>
              navigate({ to: "/escola-brilha/curso/$slug", params: { slug: curso } })
            }
            className="block mx-auto mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-sm"
          >
            ← Voltar
          </button>
        </div>
      </div>
    );
  }

  const sair = () =>
    navigate({ to: "/escola-brilha/curso/$slug", params: { slug: curso } });

  const concluir = () => {
    marcarConcluida(curso, aula);
    const proxima = getProximaAulaArteV1(curso, aula);
    if (proxima) {
      navigate({
        to: "/escola-brilha/aula-arte-v1/$curso/$aula",
        params: { curso, aula: proxima.aula.slug },
      });
    } else {
      setMostrarFinal(true);
    }
  };

  if (mostrarFinal) {
    return (
      <div className="min-h-screen grid place-items-center bg-gradient-to-b from-[#2b1055] to-[#7597de] text-white p-6 text-center">
        <div>
          <div className="text-7xl mb-4">🎨✨</div>
          <div className="text-3xl font-black mb-2">Curso finalizado!</div>
          <div className="text-white/80 mb-6">
            Você ativou o Pincel Mágico de Aurora.
          </div>
          <button
            onClick={sair}
            className="px-6 py-3 rounded-full bg-white text-slate-900 font-black"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <PlayerArteV1
      key={aula}
      aula={dados.aula}
      onSair={sair}
      onConcluir={concluir}
    />
  );
}
