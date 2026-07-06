import { useState } from "react";
import { HandHelping, Eye, CheckCircle2, XCircle } from "lucide-react";
import { Secao } from "./Secao";
import { PodioVisual } from "./PodioVisual";
import { GruposVisual } from "./GruposVisual";
import { CenaDuplaView } from "./CenaPosicao";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";
import type { Aula } from "../../types";

export function AtividadeGuiada({
  dados,
}: {
  dados: Aula["atividadeGuiada"];
}) {
  const [revelar, setRevelar] = useState(false);
  const visual = dados.visual;

  if (visual?.tipo === "podio") {
    return (
      <Secao icon={HandHelping} rotulo="Atividade guiada" cor="#34D399">
        <PodioVisual
          pergunta={visual.pergunta}
          participantes={visual.participantes}
          respostaCerta={visual.respostaCerta}
          explicacao={dados.explicacao}
        />
      </Secao>
    );
  }

  if (visual?.tipo === "grupos") {
    return (
      <Secao icon={HandHelping} rotulo="Atividade guiada" cor="#34D399">
        <GruposVisual
          pergunta={visual.pergunta}
          imagemUrl={visual.imagemUrl}
          itemSingular={visual.itemSingular}
          itemPlural={visual.itemPlural}
          quantidadeGrupos={visual.quantidadeGrupos}
          itensPorGrupo={visual.itensPorGrupo}
          opcoes={visual.opcoes}
          correta={visual.correta}
          explicacao={dados.explicacao}
        />
      </Secao>
    );
  }

  if (visual?.tipo === "cena") {
    return (
      <Secao icon={HandHelping} rotulo="Atividade guiada" cor="#34D399">
        <CenaGuiada visual={visual} explicacao={dados.explicacao} />
      </Secao>
    );
  }

  if (visual?.tipo === "escolherImagem") {
    return (
      <Secao icon={HandHelping} rotulo="Atividade guiada" cor="#34D399">
        <EscolherImagem visual={visual} explicacao={dados.explicacao} />
      </Secao>
    );
  }




  return (
    <Secao icon={HandHelping} rotulo="Atividade guiada" cor="#34D399">
      <p className="font-black mb-3">{dados.enunciado}</p>
      {!revelar ? (
        <button
          onClick={() => setRevelar(true)}
          className="w-full h-12 rounded-2xl bg-white text-[#0d1f55] font-black flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          <Eye className="h-4 w-4" /> Ver a resposta com a explicação
        </button>
      ) : (
        <div className="space-y-2">
          <div className="rounded-2xl bg-[#22C55E]/15 border-2 border-[#22C55E]/30 p-3">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#22C55E] mb-1">
              Resposta
            </div>
            <div className="font-black">{dados.resposta}</div>
          </div>
          <div className="rounded-2xl bg-white/10 border border-white/20 p-3 text-sm">
            {dados.explicacao}
          </div>
        </div>
      )}
    </Secao>
  );
}

function CenaGuiada({
  visual,
  explicacao,
}: {
  visual: Extract<NonNullable<Aula["atividadeGuiada"]["visual"]>, { tipo: "cena" }>;
  explicacao: string;
}) {
  const [resp, setResp] = useState<number | null>(null);
  const { speak } = useDeviceTTS();
  const acertou = resp !== null && resp === visual.correta;
  const errou = resp !== null && resp !== visual.correta;

  function escolher(i: number) {
    if (resp !== null) return;
    setResp(i);
    speak(i === visual.correta ? "Muito bem!" : "Olhe a cena de novo.");
  }

  return (
    <div>
      <p className="font-black mb-3">{visual.pergunta}</p>
      <div className="mb-4">
        <CenaDuplaView spec={visual} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {visual.opcoes.map((op, i) => {
          const isCorreta = i === visual.correta;
          const isEscolha = resp === i;
          const showState = resp !== null;
          const bg = showState
            ? isCorreta
              ? "bg-emerald-500 text-white"
              : isEscolha
                ? "bg-rose-500 text-white"
                : "bg-white/10 text-white/60"
            : "bg-white text-[#0d1f55] hover:bg-white/90";
          return (
            <button
              key={i}
              type="button"
              onClick={() => escolher(i)}
              disabled={resp !== null}
              className={`px-4 py-3 rounded-2xl font-black text-base shadow transition-colors ${bg}`}
            >
              {op}
            </button>
          );
        })}
      </div>
      {acertou && (
        <div className="mt-3 flex items-center gap-2 rounded-xl p-2 border bg-[#22C55E]/15 border-[#22C55E]/30 text-[#86EFAC]">
          <CheckCircle2 className="h-4 w-4" />
          <span className="text-sm font-black">Muito bem! 🎉 {explicacao}</span>
        </div>
      )}
      {errou && (
        <div className="mt-3 flex items-center gap-2 rounded-xl p-2 border bg-[#EF4444]/15 border-[#EF4444]/30 text-[#FCA5A5]">
          <XCircle className="h-4 w-4" />
          <span className="text-sm font-black">{explicacao}</span>
        </div>
      )}
    </div>
  );
}


function EscolherImagem({
  visual,
  explicacao,
}: {
  visual: Extract<NonNullable<Aula["atividadeGuiada"]["visual"]>, { tipo: "escolherImagem" }>;
  explicacao: string;
}) {
  const [resp, setResp] = useState<string | null>(null);
  const { speak } = useDeviceTTS();
  const acertou = resp !== null && resp === visual.respostaCerta;
  const errou = resp !== null && resp !== visual.respostaCerta;

  function escolher(nome: string) {
    if (resp !== null) return;
    setResp(nome);
    speak(nome === visual.respostaCerta ? "Muito bem!" : "Tente outra.");
  }

  return (
    <div>
      <p className="font-black mb-4 text-center">{visual.pergunta}</p>
      <div className="grid grid-cols-3 gap-3 mb-3">
        {visual.opcoes.map((op) => {
          const isCorreta = op.nome === visual.respostaCerta;
          const isEscolha = resp === op.nome;
          const showState = resp !== null;
          const ring = showState
            ? isCorreta
              ? "ring-4 ring-emerald-400 bg-emerald-500/20"
              : isEscolha
                ? "ring-4 ring-rose-400 bg-rose-500/20"
                : "opacity-40 bg-white/10"
            : "bg-white/15 hover:bg-white/25 active:scale-95";
          return (
            <button
              key={op.nome}
              type="button"
              onClick={() => escolher(op.nome)}
              disabled={resp !== null}
              className={`rounded-2xl p-3 flex flex-col items-center gap-2 transition ${ring}`}
            >
              <img
                src={op.imagemUrl}
                alt={op.nome}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow"
                draggable={false}
              />
              <span className="text-xs font-black text-white text-center">{op.nome}</span>
            </button>
          );
        })}
      </div>
      {acertou && (
        <div className="flex items-center gap-2 rounded-xl p-2 border bg-[#22C55E]/15 border-[#22C55E]/30 text-[#86EFAC]">
          <CheckCircle2 className="h-4 w-4" />
          <span className="text-sm font-black">Muito bem! 🎉 {explicacao}</span>
        </div>
      )}
      {errou && (
        <div className="flex items-center gap-2 rounded-xl p-2 border bg-[#EF4444]/15 border-[#EF4444]/30 text-[#FCA5A5]">
          <XCircle className="h-4 w-4" />
          <span className="text-sm font-black">{explicacao}</span>
        </div>
      )}
    </div>
  );
}
