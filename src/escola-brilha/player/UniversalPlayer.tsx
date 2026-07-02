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
import { usePreRequisitos, RetornoMissao, type PreRequisitoPendente } from "../usePreRequisitos";

type Estado =
  | { fase: "carregando" }
  | { fase: "ausente"; bncc: DadosBNCC }
  | { fase: "recuperacao"; bncc: DadosBNCC; pendentes: PreRequisitoPendente[] }
  | { fase: "pronta"; aula: Aula; adaptacao: AdaptacaoSerie; resolvido: ResolverResult };

/**
 * Player Universal do Escola Brilha.
 * ---------------------------------------------------------------
 * ÚNICO player do app — abre QUALQUER missão a partir do código BNCC.
 * O Motor Pedagógico (resolver) localiza automaticamente habilidade,
 * disciplina, ano, etapa, missão, progresso e adaptações.
 *
 * Antes de liberar a missão, verifica os pré-requisitos BNCC da
 * criança. Se houver lacunas, o Player exibe uma Missão de
 * Recuperação e mantém o retorno automático à missão principal.
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
  const { pendentes, carregando: carregandoPre, reverificar } = usePreRequisitos(childId, codigo);
  const retornoPara = RetornoMissao.ler();
  const estaEmRecuperacao = !!retornoPara && retornoPara !== codigo;

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
        if (!vivo) return;
        setEstado({
          fase: "ausente",
          bncc: { codigo, etapaSigla: "??", etapa: "Desconhecida", anoSigla: "", ano: "", disciplinaSigla: "", disciplina: "" },
        });
      });

    return () => {
      vivo = false;
    };
  }, [codigo, childId, idade, serie, perfilNeuro]);

  // Sempre que a missão principal estiver pronta E existirem pendências,
  // travamos para a tela de Recuperação. Se estivermos DENTRO de uma
  // recuperação (código atual ≠ retornoPara), não bloqueamos de novo.
  useEffect(() => {
    if (estado.fase !== "pronta") return;
    if (estaEmRecuperacao) return;
    if (carregandoPre) return;
    if (pendentes.length === 0) return;
    setEstado({ fase: "recuperacao", bncc: estado.resolvido.bncc, pendentes });
  }, [estado, pendentes, carregandoPre, estaEmRecuperacao]);

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

  if (estado.fase === "recuperacao") {
    const primeiro = estado.pendentes[0];
    const iniciarRecuperacao = () => {
      RetornoMissao.marcar(codigo);
      navigate({ to: "/escola-brilha/$codigo", params: { codigo: primeiro.codigo_bncc } });
    };
    return (
      <div className="min-h-screen grid place-items-center p-8 text-center text-white bg-[#0d1f55]">
        <div className="max-w-lg">
          <div className="text-6xl mb-4" aria-hidden>🧭</div>
          <div className="text-2xl font-black mb-2">Antes de começar…</div>
          <p className="text-white/90 mb-4 leading-relaxed">
            Para dominar esta missão com tranquilidade, precisamos revisar
            <strong> {estado.pendentes.length}</strong>{" "}
            {estado.pendentes.length === 1 ? "habilidade anterior" : "habilidades anteriores"}.
            Vamos fazer uma <strong>Missão de Recuperação</strong> rapidinha e
            depois voltamos automaticamente para cá.
          </p>
          <ul className="text-left text-sm text-white/80 bg-white/5 rounded-2xl p-4 mb-6 space-y-1">
            {estado.pendentes.slice(0, 6).map((p) => (
              <li key={p.codigo_bncc} className="flex items-center gap-2">
                <span aria-hidden>•</span>
                <span className="font-mono">{p.codigo_bncc}</span>
                <span className="text-white/50">— {p.motivo.replace(/_/g, " ")}</span>
              </li>
            ))}
            {estado.pendentes.length > 6 && (
              <li className="text-white/60 italic">+ {estado.pendentes.length - 6} habilidade(s)…</li>
            )}
          </ul>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <button
              onClick={iniciarRecuperacao}
              className="px-5 py-2.5 rounded-2xl bg-[#FFC93C] text-[#0d1f55] font-black"
            >
              Iniciar Missão de Recuperação
            </button>
            <button
              onClick={() => void reverificar()}
              className="px-5 py-2.5 rounded-2xl bg-white/10 text-white font-bold border border-white/20"
            >
              Já revisei — verificar de novo
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { aula, adaptacao } = estado;
  const fonteClasse = adaptacao.fonteMaior ? "text-[1.06rem] leading-relaxed" : "";

  const voltarParaPrincipal = () => {
    if (!retornoPara) return;
    RetornoMissao.limpar();
    navigate({ to: "/escola-brilha/$codigo", params: { codigo: retornoPara } });
  };

  return (
    <div
      className={fonteClasse}
      data-banda={adaptacao.banda}
      data-serie={adaptacao.ano}
      data-etapa={estado.resolvido.existe ? estado.resolvido.bncc.etapaSigla : undefined}
      data-disciplina={estado.resolvido.existe ? estado.resolvido.bncc.disciplinaSigla : undefined}
    >
      {estaEmRecuperacao && (
        <div className="w-full bg-[#FFC93C] text-[#0d1f55] px-4 py-2 flex items-center justify-between gap-3 text-sm font-bold">
          <span>🧭 Missão de Recuperação — depois voltamos para {retornoPara}</span>
          <button
            onClick={voltarParaPrincipal}
            className="px-3 py-1 rounded-full bg-[#0d1f55] text-white font-black text-xs"
          >
            Voltar para a missão principal ↩
          </button>
        </div>
      )}
      <AulaPlayer
        aula={aula}
        onConcluir={({ desempenho }) => {
          // Auto-redirect: se estamos numa Missão de Recuperação e o
          // desempenho foi suficiente, voltamos automaticamente para a
          // missão principal. Limiar mínimo alinhado ao SM-2 (>=70%).
          if (estaEmRecuperacao && retornoPara && desempenho >= 70) {
            RetornoMissao.limpar();
            setTimeout(() => {
              navigate({ to: "/escola-brilha/$codigo", params: { codigo: retornoPara } });
            }, 1200);
          }
        }}
      />
    </div>
  );
}
