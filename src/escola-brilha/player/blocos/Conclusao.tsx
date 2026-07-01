import { useEffect, useState } from "react";
import { PartyPopper, Coins, Sparkles, Trophy, Target } from "lucide-react";
import { Secao } from "./Secao";
import { ProximaHabilidade } from "./ProximaHabilidade";
import { proximaHabilidade, type HabSeq } from "../../bncc-sequencia";
import { metaDoCodigo, type MissaoMeta } from "../../proxima-missao";

const XP_POR_ACERTO = 10;
const XP_CONCLUSAO = 30;
const COINS_CONCLUSAO = 20;

type Conquista = {
  icon: string;
  titulo: string;
  descricao: string;
};

function conquistasDoDesempenho(acertos: number, total: number): Conquista[] {
  const pct = total > 0 ? (acertos / total) * 100 : 0;
  const out: Conquista[] = [
    { icon: "🎓", titulo: "Aula concluída", descricao: "Você chegou até o fim da missão." },
  ];
  if (pct >= 100) {
    out.push({ icon: "🏆", titulo: "Nota máxima!", descricao: "Acertou tudo no quiz." });
  } else if (pct >= 80) {
    out.push({ icon: "⭐", titulo: "Domínio brilhante", descricao: "Mais de 80% de acerto." });
  } else if (pct >= 60) {
    out.push({ icon: "💪", titulo: "Boa jornada", descricao: "Você está no caminho certo." });
  } else {
    out.push({
      icon: "🌱",
      titulo: "Persistência",
      descricao: "Cada tentativa te aproxima do domínio.",
    });
  }
  return out;
}

export function Conclusao({
  texto,
  acertos,
  total,
  codigoAtual,
}: {
  texto: string;
  acertos: number;
  total: number;
  codigoAtual: string;
}) {
  const pct = total > 0 ? Math.round((acertos / total) * 100) : 0;
  const xp = acertos * XP_POR_ACERTO + XP_CONCLUSAO;
  const conquistas = conquistasDoDesempenho(acertos, total);

  const [proxima, setProxima] = useState<HabSeq | null | undefined>(undefined);
  const [proximaMeta, setProximaMeta] = useState<MissaoMeta | null | undefined>(undefined);

  useEffect(() => {
    let vivo = true;
    proximaHabilidade(codigoAtual).then((p) => {
      if (!vivo) return;
      setProxima(p);
      setProximaMeta(p ? metaDoCodigo(p.codigo) : null);
    });
    return () => {
      vivo = false;
    };
  }, [codigoAtual]);

  return (
    <>
      <Secao icon={PartyPopper} rotulo="Evolução da missão" cor="#22C55E">
        <div className="rounded-2xl bg-white/10 border border-white/20 p-4 mb-3 text-center">
          <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
            Seu desempenho no quiz
          </div>
          <div className="text-3xl font-black text-[#FFC93C] my-1">
            {acertos}/{total}
          </div>
          <div className="text-xs font-bold text-white/70 mb-2">{pct}% de acerto</div>
          <div className="h-2 bg-white/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FFC93C] to-[#22C55E] transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-2xl bg-[#FFC93C]/15 border border-[#FFC93C]/30 p-3 text-center">
            <Sparkles className="h-5 w-5 text-[#FFC93C] mx-auto mb-1" />
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
              XP ganho
            </div>
            <div className="text-xl font-black text-[#FFC93C]">+{xp}</div>
          </div>
          <div className="rounded-2xl bg-[#FFB84C]/15 border border-[#FFB84C]/30 p-3 text-center">
            <Coins className="h-5 w-5 text-[#FFB84C] mx-auto mb-1" />
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
              BrilhoCoins
            </div>
            <div className="text-xl font-black text-[#FFB84C]">+{COINS_CONCLUSAO}</div>
          </div>
        </div>

        <p className="font-bold">{texto}</p>
      </Secao>

      <Secao icon={Trophy} rotulo="Conquistas desbloqueadas" cor="#FFC93C">
        <div className="space-y-2">
          {conquistas.map((c) => (
            <div
              key={c.titulo}
              className="rounded-2xl bg-white/10 border border-white/20 p-3 flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-2xl shrink-0">
                {c.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-black text-sm">{c.titulo}</div>
                <div className="text-xs text-white/75">{c.descricao}</div>
              </div>
            </div>
          ))}
        </div>
      </Secao>

      {proxima !== undefined && (
        <>
          {proximaMeta ? (
            <Secao icon={Target} rotulo="Próxima missão sugerida" cor="#4C9EFF">
              <div className="rounded-2xl bg-white/10 border border-white/20 p-3 mb-3">
                <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  {proximaMeta.aula.codigo} · {proximaMeta.aula.disciplina} · {proximaMeta.aula.ano}
                </div>
                <div className="font-black mt-0.5 mb-2">{proximaMeta.aula.titulo}</div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-white/15 text-[10px] font-black uppercase tracking-widest">
                    ~{proximaMeta.tempoEstimadoMin} min
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/15 text-[10px] font-black uppercase tracking-widest">
                    {proximaMeta.dificuldade}
                  </span>
                </div>
                <div className="text-xs text-white/80 leading-snug">
                  <span className="font-black">Objetivo: </span>
                  {proximaMeta.objetivo}
                </div>
              </div>
              <ProximaHabilidade
                proxima={{ codigo: proximaMeta.aula.codigo, titulo: proximaMeta.aula.titulo }}
              />
            </Secao>
          ) : (
            <ProximaHabilidade
              proxima={proxima ? { codigo: proxima.codigo, titulo: proxima.titulo } : undefined}
            />
          )}
        </>
      )}
    </>
  );
}
