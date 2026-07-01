import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MotorPedagogico } from "../motor";
import {
  adaptacaoDaSerie,
  adaptarAulaPorSerie,
  type AdaptacaoSerie,
} from "../motor/adaptacao-serie";
import {
  resolverMissao,
  MENSAGEM_MISSAO_EM_CONSTRUCAO,
  type ResolverResult,
  type DadosBNCC,
} from "../motor/resolver";
import type { Aula } from "../types";
import { AulaPlayer } from "./AulaPlayer";

type Estado =
  | { fase: "carregando" }
  | { fase: "ausente"; bncc: DadosBNCC }
  | { fase: "pronta"; aula: Aula; adaptacao: AdaptacaoSerie; resolvido: ResolverResult };

/**
 * Player Universal do Escola Brilha.
 * ---------------------------------------------------------------
 * ÚNICO player do app — abre QUALQUER missão a partir do código BNCC.
 * O Motor Pedagógico (resolver) localiza automaticamente habilidade,
 * disciplina, ano, etapa, missão, progresso e adaptações. Quando a
 * missão não existe, exibe apenas a mensagem oficial e registra a
 * ausência para produção futura — sem erro técnico visível.
 */
export function UniversalPlayer({
  codigo,
  childId,
  idade,
  serie,
  perfilNeuro,
}: {
  codigo: string;
  childId?: string;
  idade?: number;
  serie?: string;
  perfilNeuro?: string;
}) {
  const navigate = useNavigate();
  const [estado, setEstado] = useState<Estado>({ fase: "carregando" });

  useEffect(() => {
    let vivo = true;
    setEstado({ fase: "carregando" });

    resolverMissao(codigo, { childId, idade, serie, perfilNeuro })
      .then((r) => {
        if (!vivo) return;
        if (!r.existe) {
          setEstado({ fase: "ausente", bncc: r.bncc });
          return;
        }
        const base = r.aulaBase ?? MotorPedagogico.missoes.carregarAulaBase(r.bncc.codigo);
        if (!base) {
          setEstado({ fase: "ausente", bncc: r.bncc });
          return;
        }
        const ad = adaptacaoDaSerie(r.bncc.codigo);
        setEstado({
          fase: "pronta",
          aula: adaptarAulaPorSerie(base, ad),
          adaptacao: ad,
          resolvido: r,
        });
      })
      .catch(() => {
        // Nunca exibir erro técnico — trata como missão ausente.
        if (!vivo) return;
        setEstado({ fase: "ausente", bncc: { codigo, etapaSigla: "??", etapa: "Desconhecida", anoSigla: "", ano: "", disciplinaSigla: "", disciplina: "" } });
      });

    return () => {
      vivo = false;
    };
  }, [codigo, childId, idade, serie, perfilNeuro]);

  if (estado.fase === "carregando") {
    return (
      <div className="min-h-screen grid place-items-center p-8 text-center text-white bg-[#0d1f55]">
        <div className="animate-pulse text-lg font-bold">Preparando missão…</div>
      </div>
    );
  }

  if (estado.fase === "ausente") {
    return (
      <div className="min-h-screen grid place-items-center p-8 text-center text-white bg-[#0d1f55]">
        <div className="max-w-md">
          <div className="text-6xl mb-4" aria-hidden>🚧</div>
          <div className="text-2xl font-black mb-2">
            {MENSAGEM_MISSAO_EM_CONSTRUCAO}
          </div>
          {(estado.bncc.disciplina || estado.bncc.ano) && (
            <div className="text-sm text-white/70 mb-6">
              {[estado.bncc.disciplina, estado.bncc.ano].filter(Boolean).join(" • ")}
            </div>
          )}
          <button
            onClick={() => navigate({ to: "/escola-brilha" })}
            className="px-5 py-2.5 rounded-2xl bg-[#FFC93C] text-[#0d1f55] font-black"
          >
            Escolher outra missão
          </button>
        </div>
      </div>
    );
  }

  const { aula, adaptacao } = estado;
  const fonteClasse = adaptacao.fonteMaior ? "text-[1.06rem] leading-relaxed" : "";

  return (
    <div
      className={fonteClasse}
      data-banda={adaptacao.banda}
      data-serie={adaptacao.ano}
      data-etapa={estado.resolvido.existe ? estado.resolvido.bncc.etapaSigla : undefined}
      data-disciplina={estado.resolvido.existe ? estado.resolvido.bncc.disciplinaSigla : undefined}
    >
      <AulaPlayer aula={aula} />
    </div>
  );
}
