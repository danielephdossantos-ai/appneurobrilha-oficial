import { useState } from "react";
import type { LaboratorioExploradorData } from "../../types";
import { FotoLugar } from "./FotoLugar";
import { FlaskConical, Sparkles } from "lucide-react";

/**
 * Laboratório do Explorador (M8): a criança escolhe TERRENO e CLIMA.
 * O laboratório procura uma regra que combine com as escolhas e mostra
 * a moradia certa + explicação. Sem escolha completa, mostra o padrão.
 */
export function LaboratorioExplorador({
  data,
}: {
  data: LaboratorioExploradorData;
}) {
  const [selecoes, setSelecoes] = useState<Record<string, string>>({});

  const escolha = (varId: string, valor: string) =>
    setSelecoes((s) => ({ ...s, [varId]: valor }));

  const resultado = data.resultados.find((r) =>
    Object.entries(r.quando).every(([k, v]) => selecoes[k] === v),
  );

  const completo = data.variaveis.every((v) => selecoes[v.id]);

  return (
    <div className="rounded-3xl overflow-hidden border-2 border-emerald-400/30 bg-slate-950">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-emerald-950/60 border-b border-emerald-400/20">
        <FlaskConical className="w-5 h-5 text-emerald-300 animate-pulse" />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 font-bold">
            Laboratório do Explorador
          </div>
          <div className="text-white text-sm font-bold">
            Ajuste e veja a moradia mudar
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <p className="text-sm text-emerald-100/90 italic">{data.instrucao}</p>

        {/* Sliders / toggles */}
        <div className="space-y-3">
          {data.variaveis.map((v) => (
            <div key={v.id}>
              <div className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold mb-1.5">
                {v.rotulo}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {v.opcoes.map((o) => {
                  const on = selecoes[v.id] === o.valor;
                  return (
                    <button
                      key={o.valor}
                      onClick={() => escolha(v.id, o.valor)}
                      className={`flex flex-col items-center gap-1 px-3 py-3 rounded-2xl border-2 text-xs font-bold transition ${
                        on
                          ? "bg-emerald-400 text-slate-950 border-emerald-200 shadow-lg scale-105"
                          : "bg-white/5 border-white/15 text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="text-2xl leading-none">{o.icone}</span>
                      <span>{o.rotulo}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Resultado */}
        {!completo ? (
          <div className="rounded-2xl border border-dashed border-emerald-400/40 bg-white/[0.03] p-6 text-center text-emerald-200/70 text-sm">
            {data.padraoTexto}
          </div>
        ) : resultado ? (
          <div className="rounded-2xl overflow-hidden border-2 border-emerald-400/50 bg-slate-900/70">
            <div className="relative aspect-[16/10] bg-black">
              <FotoLugar
                imagemUrl={resultado.imagemUrl}
                corPlaceholder={resultado.corPlaceholder}
                emoji="🏠"
                nome="Resultado"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-200">
                  Aurora observa
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed">
                {resultado.descricao}
              </p>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-amber-300/40 bg-amber-500/10 p-4 text-amber-100 text-sm">
            Combinação incomum no Brasil! Tente outra mistura — nem todo clima
            combina com todo terreno.
          </div>
        )}
      </div>
    </div>
  );
}
