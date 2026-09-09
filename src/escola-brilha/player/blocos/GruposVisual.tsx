import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { speakChunked } from "@/lib/native-tts";

type Props = {
  pergunta: string;
  imagemUrl: string;
  itemSingular: string;
  itemPlural: string;
  quantidadeGrupos: number;
  itensPorGrupo: number;
  opcoes: number[];
  correta: number;
  explicacao: string;
};

const CORES_GRUPO = ["#F472B6", "#60A5FA", "#FBBF24", "#34D399", "#A78BFA", "#FB923C"];

export function GruposVisual({
  pergunta,
  imagemUrl,
  itemSingular,
  itemPlural,
  quantidadeGrupos,
  itensPorGrupo,
  opcoes,
  correta,
  explicacao,
}: Props) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const [contagem, setContagem] = useState<number[]>([]);
  const total = quantidadeGrupos * itensPorGrupo;

  function tocarGrupo(idxGrupo: number) {
    if (contagem.includes(idxGrupo)) return;
    const novoTotal = (contagem.length + 1) * itensPorGrupo;
    const acumulado = Array.from({ length: itensPorGrupo }, (_, i) => contagem.length * itensPorGrupo + i + 1);
    setContagem((c) => [...c, idxGrupo]);
    // Fala em voz alta: "1, 2, 3 — 3! ... 4, 5, 6 — 6!" etc.
    const fala = acumulado.join(", ") + `. ${novoTotal}!`;
    speakChunked(fala, { rate: 0.9 });
  }

  function escolher(i: number) {
    if (escolha !== null) return;
    setEscolha(i);
    const acertou = i === correta;
    speakChunked(
      acertou
        ? `Isso! ${total} ${itemPlural}. ${explicacao}`
        : `Quase! A resposta certa é ${total} ${itemPlural}.`,
      { rate: 0.95 },
    );
  }

  function reiniciar() {
    setContagem([]);
    setEscolha(null);
  }

  const acertou = escolha === correta;

  return (
    <div className="space-y-4">
      <p className="font-black text-base">{pergunta}</p>

      {/* Grupos de imagens */}
      <div
        className={`grid gap-3 ${
          quantidadeGrupos === 2
            ? "grid-cols-2"
            : quantidadeGrupos === 3
              ? "grid-cols-1 sm:grid-cols-3"
              : "grid-cols-2 sm:grid-cols-4"
        }`}
      >
        {Array.from({ length: quantidadeGrupos }).map((_, gi) => {
          const cor = CORES_GRUPO[gi % CORES_GRUPO.length];
          const jaContado = contagem.includes(gi);
          const rotuloAcum = jaContado
            ? (contagem.indexOf(gi) + 1) * itensPorGrupo
            : null;
          return (
            <button
              key={gi}
              type="button"
              onClick={() => tocarGrupo(gi)}
              className="rounded-3xl border-4 p-3 min-h-[160px] transition-all active:scale-[0.97] relative overflow-hidden"
              style={{
                background: `linear-gradient(180deg, ${cor}22 0%, ${cor}11 100%)`,
                borderColor: cor,
                boxShadow: jaContado ? `0 0 0 4px ${cor}, 0 8px 20px ${cor}55` : undefined,
              }}
              aria-label={`Grupo ${gi + 1} com ${itensPorGrupo} ${itemPlural}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-[10px] font-black uppercase tracking-widest text-white/90 px-2 py-1 rounded-full"
                  style={{ background: cor }}
                >
                  Grupo {gi + 1}
                </span>
                <span
                  className="h-8 w-8 rounded-full font-black text-base grid place-items-center border-2 border-white"
                  style={{ background: "#ffffff", color: cor }}
                >
                  {itensPorGrupo}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center justify-center min-h-[80px]">
                {Array.from({ length: itensPorGrupo }).map((_, ii) => (
                  <img
                    key={ii}
                    src={imagemUrl}
                    alt=""
                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow"
                  />
                ))}
              </div>
              {rotuloAcum !== null && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-2 text-center text-sm font-black text-white rounded-full py-1"
                  style={{ background: cor }}
                >
                  = {rotuloAcum}
                </motion.div>
              )}
            </button>
          );
        })}
      </div>

      {/* Barra de contagem */}
      <div className="rounded-2xl bg-white/10 border-2 border-white/20 p-3 text-center">
        <div className="text-[10px] font-black uppercase tracking-widest text-white/80 mb-1">
          Contando de {itensPorGrupo} em {itensPorGrupo}
        </div>
        <div className="flex flex-wrap justify-center gap-2 font-black text-lg">
          {Array.from({ length: quantidadeGrupos }).map((_, k) => {
            const val = (k + 1) * itensPorGrupo;
            const ativo = k < contagem.length;
            return (
              <span
                key={k}
                className="px-3 py-1 rounded-xl transition-all"
                style={{
                  background: ativo ? CORES_GRUPO[k % CORES_GRUPO.length] : "rgba(255,255,255,0.1)",
                  color: ativo ? "#ffffff" : "rgba(255,255,255,0.5)",
                }}
              >
                {val}
              </span>
            );
          })}
        </div>
        <p className="text-xs text-white/70 mt-2">
          Toque em cada grupo para o professor contar em voz alta.
        </p>
      </div>

      {/* Alternativas */}
      <div>
        <div className="text-[10px] font-black uppercase tracking-widest text-white/80 mb-2">
          Quantos {itemPlural} ao todo?
        </div>
        <div className="grid grid-cols-3 gap-2">
          {opcoes.map((op, i) => {
            const selecionado = escolha === i;
            const certa = i === correta;
            let cls = "bg-white text-[#0d1f55]";
            if (escolha !== null) {
              if (certa) cls = "bg-[#22C55E] text-white ring-4 ring-white";
              else if (selecionado) cls = "bg-[#EF4444] text-white";
              else cls = "bg-white/40 text-[#0d1f55]/60";
            }
            return (
              <button
                key={i}
                type="button"
                onClick={() => escolher(i)}
                disabled={escolha !== null}
                className={`h-16 rounded-2xl font-black text-2xl shadow transition-all active:scale-95 ${cls}`}
              >
                {op}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {escolha !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-3 border-2 ${
            acertou
              ? "bg-[#22C55E]/15 border-[#22C55E]/40"
              : "bg-[#EF4444]/15 border-[#EF4444]/40"
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            {acertou ? (
              <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />
            ) : (
              <XCircle className="h-5 w-5 text-[#EF4444]" />
            )}
            <span className="font-black">
              {acertou ? `Isso! ${total} ${itemPlural}.` : `A resposta certa é ${total} ${itemPlural}.`}
            </span>
          </div>
          <p className="text-sm text-white/90">{explicacao}</p>
          <button
            type="button"
            onClick={reiniciar}
            className="mt-2 inline-flex items-center gap-1 text-xs font-black text-white/80 hover:text-white"
          >
            <RotateCcw className="h-3 w-3" /> Tentar de novo
          </button>
        </motion.div>
      )}
      {void itemSingular}
    </div>
  );
}
