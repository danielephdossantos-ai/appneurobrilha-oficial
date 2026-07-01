import { useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MotorPedagogico } from "../motor";
import {
  adaptacaoDaSerie,
  adaptarAulaPorSerie,
  type AdaptacaoSerie,
} from "../motor/adaptacao-serie";
import { AulaPlayer } from "./AulaPlayer";

/**
 * Player Universal do Escola Brilha.
 * ---------------------------------------------------------------
 * ÚNICO player do app — carrega QUALQUER missão a partir apenas do
 * código BNCC e adapta automaticamente (linguagem, texto, tamanho
 * das atividades, dificuldade, exemplos, profundidade da explicação)
 * conforme a série da habilidade.
 *
 * Nenhuma outra rota/componente deve renderizar um player próprio.
 */
export function UniversalPlayer({ codigo }: { codigo: string }) {
  const navigate = useNavigate();

  const { aula, adaptacao } = useMemo(() => {
    const base = MotorPedagogico.missoes.carregarAulaBase(codigo);
    if (!base) return { aula: null, adaptacao: null as AdaptacaoSerie | null };
    const ad = adaptacaoDaSerie(codigo);
    return { aula: adaptarAulaPorSerie(base, ad), adaptacao: ad };
  }, [codigo]);

  if (!aula || !adaptacao) {
    return (
      <div className="min-h-screen grid place-items-center p-8 text-center text-white bg-[#0d1f55]">
        <div>
          <div className="text-2xl font-black mb-2">Missão em preparação</div>
          <div className="text-sm text-white/70 mb-4">
            A missão <b>{codigo}</b> ainda está sendo criada com carinho.
          </div>
          <button
            onClick={() => navigate({ to: "/escola-brilha" })}
            className="px-5 py-2.5 rounded-2xl bg-[#FFC93C] text-[#0d1f55] font-black"
          >
            Voltar às missões
          </button>
        </div>
      </div>
    );
  }

  // Fonte maior nas séries iniciais — aplica escopo local via container.
  const fonteClasse = adaptacao.fonteMaior ? "text-[1.06rem] leading-relaxed" : "";

  return (
    <div className={fonteClasse} data-banda={adaptacao.banda} data-serie={adaptacao.ano}>
      <AulaPlayer aula={aula} />
    </div>
  );
}
