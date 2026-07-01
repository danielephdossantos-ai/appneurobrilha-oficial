import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Check, X, ArrowRight, Sparkles } from "lucide-react";
import { Secao } from "./Secao";
import type { Aula } from "../../types";

/**
 * Aprendizagem Ativa — Bloco Explicação.
 *
 * Regra: nunca mostrar um paredão de texto. A explicação é entregue em
 * pedaços curtos, alternando:
 *   Explicação → Interação → Explicação → Interação → …
 *
 * Fontes do conteúdo (nesta ordem):
 *   1. `aula.explicacaoAtiva` — pedaços já escritos pelo autor da aula,
 *      cada um com uma checagem opcional (pergunta rápida).
 *   2. Fallback automático — fatia `aula.explicacao` em parágrafos ou
 *      sentenças curtas e insere apenas um "toque para continuar" entre
 *      eles. Zero texto novo é inventado.
 */

type Chunk = {
  texto: string;
  checagem?: {
    pergunta: string;
    opcoes: string[];
    correta: number;
    explicacao?: string;
  };
};

export function Explicacao({ texto, aula }: { texto: string; aula?: Aula }) {
  const chunks = useMemo<Chunk[]>(() => construirChunks(texto, aula), [texto, aula]);
  const [visiveis, setVisiveis] = useState(1);
  const total = chunks.length;
  const podeAvancar = visiveis < total;

  return (
    <Secao icon={BookOpen} rotulo="Explicação" cor="#4C9EFF">
      <div className="flex items-center gap-2 mb-3 text-[10px] font-black uppercase tracking-widest text-white/50">
        <Sparkles className="h-3.5 w-3.5" />
        <span>Passo {Math.min(visiveis, total)} de {total}</span>
      </div>

      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {chunks.slice(0, visiveis).map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-4"
            >
              <p className="text-base leading-relaxed whitespace-pre-line">{c.texto}</p>
              {c.checagem && i < visiveis - 1 && (
                <MicroChecagem checagem={c.checagem} />
              )}
              {c.checagem && i === visiveis - 1 && (
                <MicroChecagem
                  checagem={c.checagem}
                  onOk={() => setVisiveis((v) => Math.min(total, v + 1))}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {podeAvancar && chunks[visiveis - 1] && !chunks[visiveis - 1].checagem && (
        <button
          onClick={() => setVisiveis((v) => Math.min(total, v + 1))}
          className="mt-4 w-full h-11 rounded-2xl bg-white/15 border border-white/20 font-black text-sm active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Toque para continuar <ArrowRight className="h-4 w-4" />
        </button>
      )}

      {!podeAvancar && (
        <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-white/50">
          Explicação concluída — pronto pra praticar!
        </div>
      )}
    </Secao>
  );
}

function MicroChecagem({
  checagem,
  onOk,
}: {
  checagem: NonNullable<Chunk["checagem"]>;
  onOk?: () => void;
}) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const acertou = escolha !== null && escolha === checagem.correta;

  return (
    <div className="mt-4 rounded-xl bg-[#0d1f55]/60 border border-white/15 p-3">
      <div className="text-[11px] font-black uppercase tracking-widest text-[#FFC93C] mb-2">
        Sua vez
      </div>
      <p className="text-sm font-bold mb-2">{checagem.pergunta}</p>
      <div className="grid gap-2">
        {checagem.opcoes.map((op, k) => {
          const escolhida = escolha === k;
          const correta = k === checagem.correta;
          const revelar = escolha !== null;
          return (
            <button
              key={k}
              disabled={escolha !== null && acertou}
              onClick={() => {
                setEscolha(k);
                if (k === checagem.correta) onOk?.();
              }}
              className={[
                "w-full text-left text-sm font-bold rounded-xl px-3 py-2 border-2 transition-all",
                !revelar && "bg-white/10 border-white/20 active:scale-[0.98]",
                revelar && correta && "bg-emerald-500/25 border-emerald-400 text-white",
                revelar && escolhida && !correta && "bg-rose-500/25 border-rose-400 text-white",
                revelar && !escolhida && !correta && "bg-white/5 border-white/10 opacity-60",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="inline-flex items-center gap-2">
                {revelar && correta && <Check className="h-4 w-4" />}
                {revelar && escolhida && !correta && <X className="h-4 w-4" />}
                {op}
              </span>
            </button>
          );
        })}
      </div>
      {escolha !== null && (
        <p className="mt-2 text-xs text-white/80">
          {acertou
            ? checagem.explicacao ?? "Boa! Vamos para o próximo pedaço."
            : "Quase! Toque na resposta certa pra continuar."}
        </p>
      )}
    </div>
  );
}

/**
 * Constrói os pedaços da explicação sem inventar texto.
 * Prioriza `aula.explicacaoAtiva`; senão fatia `explicacao` em parágrafos
 * (\n\n), depois em sentenças curtas se um parágrafo passar de ~220 chars.
 */
function construirChunks(texto: string, aula?: Aula): Chunk[] {
  if (aula?.explicacaoAtiva && aula.explicacaoAtiva.length > 0) {
    return aula.explicacaoAtiva.filter((c) => c.texto?.trim().length > 0);
  }
  const bruto = (texto ?? "").trim();
  if (!bruto) return [{ texto: "" }];

  const paragrafos = bruto
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  const pedacos: string[] = [];
  const base = paragrafos.length > 0 ? paragrafos : [bruto];
  for (const p of base) {
    if (p.length <= 220) {
      pedacos.push(p);
      continue;
    }
    const sentencas = p
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);
    let buffer = "";
    for (const s of sentencas) {
      if ((buffer + " " + s).trim().length > 220 && buffer) {
        pedacos.push(buffer.trim());
        buffer = s;
      } else {
        buffer = (buffer + " " + s).trim();
      }
    }
    if (buffer) pedacos.push(buffer);
  }

  return pedacos.map((t) => ({ texto: t }));
}
