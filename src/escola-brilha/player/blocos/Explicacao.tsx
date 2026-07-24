import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Check, X, ArrowRight, Sparkles, RefreshCw, LifeBuoy, Lightbulb, ImageIcon } from "lucide-react";
import { Secao } from "./Secao";
import type { Aula } from "../../types";
import { PersonagemInterativo } from "./PersonagemInterativo";

/**
 * Aprendizagem Ativa — Bloco Explicação com Níveis de Aprofundamento.
 *
 * Regras obrigatórias:
 *  - Nunca mostrar paredão de texto: entrega em pedaços curtos.
 *  - Alterna Explicação ↔ Interação.
 *  - Suporta 4 níveis de explicação (nunca repete o mesmo texto):
 *      N1 simples · N2 novo exemplo · N3 outra forma · N4 aplicação prática.
 *  - Se a criança errar a mesma micro-checagem 2+ vezes, o próximo nível de
 *    explicação é mostrado automaticamente ANTES de nova tentativa.
 */

type Chunk = {
  texto: string;
  exemplo?: string;
  imagem?: string;
  imagemAlt?: string;
  checagem?: {
    pergunta: string;
    opcoes: string[];
    correta: number;
    explicacao?: string;
  };
};

type Nivel = { n: 1 | 2 | 3 | 4; rotulo: string; texto: string };

const ROTULOS: Record<1 | 2 | 3 | 4, string> = {
  1: "Simples",
  2: "Novo exemplo",
  3: "Outra forma",
  4: "Aplicação prática",
};

export function Explicacao({ texto, aula }: { texto: string; aula?: Aula }) {
  const chunks = useMemo<Chunk[]>(() => construirChunks(texto, aula), [texto, aula]);
  const niveis = useMemo<Nivel[]>(() => construirNiveis(texto, aula), [texto, aula]);
  const [visiveis, setVisiveis] = useState(1);
  const [nivelIdx, setNivelIdx] = useState(0);
  const total = chunks.length;
  const podeAvancar = visiveis < total;
  const podeAprofundar = nivelIdx < niveis.length - 1;
  const nivelAtual = niveis[nivelIdx];


  const reverExplicacao = () => {
    setVisiveis(1);
    setNivelIdx(0);
    requestAnimationFrame(() => {
      document.getElementById("bloco-explicacao")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <Secao icon={BookOpen} rotulo="Explicação" cor="#4C9EFF">
        <div className="flex items-center justify-between gap-2 mb-3" data-no-tts>
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/50">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Passo {Math.min(visiveis, total)} de {total}</span>
        </div>
        <div
          className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full border"
          style={{ borderColor: "#4C9EFF66", color: "#4C9EFF" }}
        >
          Nível {nivelAtual.n} · {nivelAtual.rotulo}
        </div>
      </div>

      {nivelIdx > 0 && (
        <motion.div
          key={`n-${nivelIdx}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 rounded-2xl bg-[#4C9EFF]/15 border border-[#4C9EFF]/40 p-3"
        >
          <div className="text-[10px] font-black uppercase tracking-widest text-[#4C9EFF] mb-1">
            Explicando de outro jeito — {nivelAtual.rotulo}
          </div>
          <p className="text-sm leading-relaxed whitespace-pre-line">{nivelAtual.texto}</p>
        </motion.div>
      )}

      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {chunks.slice(0, visiveis).map((c, i) => {
            const ehAtual = i === visiveis - 1;
            const bloqueado = ehAtual && podeAvancar; // aguardando confirmação/checagem
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-4"
              >
                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2" data-no-tts>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/40">
                    Bloco {i + 1} de {total}
                  </div>
                  {bloqueado && (
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#FFC93C]">
                      Confirme para continuar
                    </div>
                  )}
                </div>


                <p className="text-base leading-relaxed whitespace-pre-line">{c.texto}</p>

                {c.imagem && (
                  <div className="mt-3 rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col items-center">
                    {/^https?:\/\//i.test(c.imagem) || c.imagem.startsWith("/") ? (
                      <PersonagemInterativo
                        imagem={c.imagem}
                        imagemAlt={c.imagemAlt}
                        contexto={`${c.texto ?? ""} ${c.imagemAlt ?? ""}`}
                      />
                    ) : (
                      <div className="text-6xl leading-none" aria-hidden>
                        {c.imagem}
                      </div>
                    )}
                    {c.imagemAlt && !/^https?:\/\//i.test(c.imagem) && !c.imagem.startsWith("/") && (
                      <div className="mt-1 text-[11px] text-white/60 flex items-center gap-1">
                        <ImageIcon className="h-3 w-3" /> {c.imagemAlt}
                      </div>
                    )}
                  </div>
                )}

                {c.exemplo && (
                  <div className="mt-3 rounded-xl bg-[#FFC93C]/10 border border-[#FFC93C]/40 p-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#FFC93C] mb-1">
                      <Lightbulb className="h-3.5 w-3.5" /> Exemplo
                    </div>
                    <p className="text-sm leading-relaxed">{c.exemplo}</p>
                  </div>
                )}

                {c.checagem && !ehAtual && <MicroChecagem checagem={c.checagem} />}
                {c.checagem && ehAtual && (
                  <MicroChecagem
                    checagem={c.checagem}
                    onOk={() => setVisiveis((v) => Math.min(total, v + 1))}
                    onErrosRepetidos={() => {
                      if (podeAprofundar) setNivelIdx((n) => n + 1);
                    }}
                  />
                )}

                {!c.checagem && ehAtual && podeAvancar && (
                  <button
                    onClick={() => setVisiveis((v) => Math.min(total, v + 1))}
                    className="mt-3 w-full h-11 rounded-2xl bg-emerald-500/25 border-2 border-emerald-400/60 font-black text-sm text-emerald-100 active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <Check className="h-4 w-4" /> Entendi · Próximo bloco
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-4 grid gap-2">

        {podeAprofundar && (
          <button
            onClick={() => setNivelIdx((n) => Math.min(niveis.length - 1, n + 1))}
            className="w-full h-11 rounded-2xl bg-[#4C9EFF]/20 border border-[#4C9EFF]/50 text-[#cde3ff] font-black text-sm active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Explicar de outro jeito · Nível {niveis[nivelIdx + 1].n} ({niveis[nivelIdx + 1].rotulo})
          </button>
        )}

        {!podeAprofundar && nivelIdx > 0 && (
          <div className="text-[11px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-2">
            <LifeBuoy className="h-3.5 w-3.5" /> Já usamos todos os jeitos de explicar
          </div>
        )}

        {!podeAvancar && (
          <div className="grid gap-2">
            <button
              type="button"
              onClick={reverExplicacao}
              className="w-full h-11 rounded-2xl bg-white/10 border border-white/25 text-white font-black text-sm active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4" /> Rever explicação desde o começo
            </button>
            <div className="text-[11px] font-bold uppercase tracking-widest text-white/50">
              Explicação concluída — pronto pra praticar!
            </div>
          </div>
        )}
      </div>
    </Secao>
  );
}

function MicroChecagem({
  checagem,
  onOk,
  onErrosRepetidos,
}: {
  checagem: NonNullable<Chunk["checagem"]>;
  onOk?: () => void;
  onErrosRepetidos?: () => void;
}) {
  const [escolha, setEscolha] = useState<number | null>(null);
  const [erros, setErros] = useState(0);
  const [gatilhoDisparado, setGatilhoDisparado] = useState(false);
  const acertou = escolha !== null && escolha === checagem.correta;

  const pick = (k: number) => {
    setEscolha(k);
    if (k === checagem.correta) {
      onOk?.();
    } else {
      const novo = erros + 1;
      setErros(novo);
      if (novo >= 2 && !gatilhoDisparado) {
        setGatilhoDisparado(true);
        onErrosRepetidos?.();
      }
      // libera pra nova tentativa: reseta seleção após 900ms
      setTimeout(() => setEscolha(null), 900);
    }
  };

  return (
    <div className="mt-4 rounded-xl bg-[#0d1f55]/60 border border-white/15 p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[11px] font-black uppercase tracking-widest text-[#FFC93C]">
          Sua vez
        </div>
        {erros > 0 && !acertou && (
          <div className="text-[10px] font-bold text-white/60">
            tentativas: {erros}
          </div>
        )}
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
              onClick={() => pick(k)}
              className={[
                "w-full text-left text-sm font-bold rounded-xl px-3 py-2 border-2 transition-all",
                !revelar && "bg-white/10 border-white/20 active:scale-[0.98]",
                revelar && correta && acertou && "bg-emerald-500/25 border-emerald-400 text-white",
                revelar && escolhida && !correta && "bg-rose-500/25 border-rose-400 text-white",
                revelar && !escolhida && "bg-white/5 border-white/10 opacity-60",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="inline-flex items-center gap-2">
                {revelar && correta && acertou && <Check className="h-4 w-4" />}
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
            : gatilhoDisparado
              ? "Vamos tentar explicar de outro jeito primeiro — role um pouco pra cima."
              : "Quase! Pensa de novo e escolhe outra opção."}
        </p>
      )}
    </div>
  );
}

/**
 * Monta os níveis de aprofundamento SEM repetir texto.
 * Prioridade: aula.explicacoesNiveis → aula.explicacao (usado como N1).
 */
function construirNiveis(texto: string, aula?: Aula): Nivel[] {
  const conjunto = aula?.explicacoesNiveis;
  const bruto = (texto ?? "").trim();
  const vistos = new Set<string>();
  const push = (out: Nivel[], n: 1 | 2 | 3 | 4, t?: string) => {
    const s = (t ?? "").trim();
    if (!s) return;
    const chave = s.toLowerCase().replace(/\s+/g, " ");
    if (vistos.has(chave)) return;
    vistos.add(chave);
    out.push({ n, rotulo: ROTULOS[n], texto: s });
  };
  const out: Nivel[] = [];
  push(out, 1, conjunto?.nivel1 ?? bruto);
  push(out, 2, conjunto?.nivel2);
  push(out, 3, conjunto?.nivel3);
  push(out, 4, conjunto?.nivel4);
  if (out.length === 0) out.push({ n: 1, rotulo: ROTULOS[1], texto: bruto || "…" });
  return out;
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
