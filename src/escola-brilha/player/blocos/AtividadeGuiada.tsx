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

  if (visual?.tipo === "cartoes") {
    return (
      <Secao icon={HandHelping} rotulo="Atividade guiada" cor="#34D399">
        <CartoesGuiados visual={visual} explicacao={dados.explicacao} />
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

function CartoesGuiados({
  visual,
  explicacao,
}: {
  visual: Extract<NonNullable<Aula["atividadeGuiada"]["visual"]>, { tipo: "cartoes" }>;
  explicacao: string;
}) {
  const [escolhido, setEscolhido] = useState<string | null>(null);
  const { speak } = useDeviceTTS();
  const acertou = escolhido === visual.respostaCerta;

  function tocar(nome: string) {
    if (escolhido) return;
    setEscolhido(nome);
    speak(nome === visual.respostaCerta ? "Muito bem!" : "Olhe as imagens de novo.");
    if (nome !== visual.respostaCerta) {
      window.setTimeout(() => setEscolhido(null), 1300);
    }
  }

  return (
    <div className="rounded-3xl bg-white/95 text-[#0d1f55] p-4 sm:p-6 border-2 border-[#34D399]/40 shadow-inner">
      <p className="text-2xl sm:text-3xl font-black leading-tight mb-4">{visual.pergunta}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {visual.cartoes.map((c) => {
          const isEscolha = escolhido === c.nome;
          const isCerta = c.nome === visual.respostaCerta;
          return (
            <button
              key={c.nome}
              type="button"
              onClick={() => tocar(c.nome)}
              className={`rounded-3xl p-3 min-h-[190px] border-4 bg-[#F8FAFC] shadow-lg active:scale-[0.98] transition-all ${
                isEscolha
                  ? isCerta
                    ? "border-[#22C55E] scale-[1.03]"
                    : "border-[#EF4444]"
                  : "border-[#0d1f55]/10 hover:border-[#34D399]"
              }`}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <img src={c.imagemUrl} alt="" className="h-16 w-16 object-contain" draggable={false} />
                {c.acaoImagemUrl && (
                  <img src={c.acaoImagemUrl} alt="" className="h-16 w-16 object-contain" draggable={false} />
                )}
              </div>
              <div className="text-xl font-black">{c.nome}</div>
              {c.rotulo && (
                <div className="mt-2 rounded-2xl bg-[#0d1f55] text-white px-3 py-2 text-sm font-black uppercase tracking-wide">
                  {c.rotulo}
                </div>
              )}
            </button>
          );
        })}
      </div>
      {acertou && (
        <div className="mt-4 flex items-center gap-2 rounded-xl p-3 border bg-[#22C55E] border-[#16A34A] text-white">
          <CheckCircle2 className="h-5 w-5" />
          <span className="text-sm font-black">Muito bem! {explicacao}</span>
        </div>
      )}
    </div>
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

