import { useState } from "react";
import { Home, Camera, CheckCircle2 } from "lucide-react";
import type { Aula } from "../../types";
import { Secao } from "./Secao";

/**
 * Missão em Família — atividade offline com um responsável.
 * A família preenche o registro depois da atividade.
 */
export function MissaoFamilia({
  dados,
}: {
  dados: NonNullable<Aula["missaoFamilia"]>;
}) {
  const registros = dados.registros ?? [];
  const [respostas, setRespostas] = useState<Record<number, string>>({});
  const [foto, setFoto] = useState<string | null>(null);
  const [feito, setFeito] = useState(false);

  const preenchido =
    registros.length === 0 ||
    registros.every((_, i) => (respostas[i] ?? "").trim().length > 0);

  return (
    <Secao icon={Home} rotulo="Missão em Família" cor="#EC4899">
      <p className="font-black text-lg mb-1">{dados.titulo}</p>
      <p className="text-base text-white/85 mb-3">{dados.instrucao}</p>

      {registros.length > 0 && (
        <div className="space-y-3 mb-3">
          {registros.map((r, i) => (
            <div key={i}>
              <label className="text-xs font-black uppercase tracking-widest text-white/70 block mb-1">
                {r.label}
              </label>
              {r.tipo === "sim_nao" ? (
                <div className="flex gap-2">
                  {["Sim", "Não"].map((op) => {
                    const ativo = respostas[i] === op;
                    return (
                      <button
                        key={op}
                        onClick={() =>
                          setRespostas((p) => ({ ...p, [i]: op }))
                        }
                        className={`flex-1 h-11 rounded-xl font-black border-2 transition ${
                          ativo
                            ? "bg-emerald-500/30 border-emerald-300 text-white"
                            : "bg-white/10 border-white/20 text-white/80"
                        }`}
                      >
                        {op}
                      </button>
                    );
                  })}
                </div>
              ) : r.tipo === "cor" ? (
                <div className="flex flex-wrap gap-2">
                  {[
                    { nome: "Vermelho", hex: "#EF4444" },
                    { nome: "Amarelo", hex: "#FACC15" },
                    { nome: "Verde", hex: "#22C55E" },
                    { nome: "Azul", hex: "#3B82F6" },
                    { nome: "Rosa", hex: "#EC4899" },
                    { nome: "Marrom", hex: "#92400E" },
                    { nome: "Branco", hex: "#F8FAFC" },
                    { nome: "Preto", hex: "#111827" },
                  ].map((c) => {
                    const ativo = respostas[i] === c.nome;
                    return (
                      <button
                        key={c.nome}
                        onClick={() =>
                          setRespostas((p) => ({ ...p, [i]: c.nome }))
                        }
                        className={`h-10 px-3 rounded-full font-black text-xs flex items-center gap-2 border-2 transition ${
                          ativo
                            ? "border-white bg-white/20 text-white"
                            : "border-white/20 bg-white/10 text-white/80"
                        }`}
                      >
                        <span
                          className="h-4 w-4 rounded-full border border-white/40"
                          style={{ background: c.hex }}
                        />
                        {c.nome}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <input
                  type="text"
                  value={respostas[i] ?? ""}
                  onChange={(e) =>
                    setRespostas((p) => ({ ...p, [i]: e.target.value }))
                  }
                  placeholder="Escreva aqui…"
                  className="w-full h-11 px-3 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 font-medium focus:outline-none focus:border-pink-300"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {dados.permitirFoto && (
        <div className="mb-3">
          <label className="text-xs font-black uppercase tracking-widest text-white/70 block mb-1">
            Foto do Diário do Cientista (opcional)
          </label>
          <label className="flex items-center gap-2 h-11 px-3 rounded-xl bg-white/10 border-2 border-dashed border-white/30 text-white/80 font-black cursor-pointer active:scale-[0.98]">
            <Camera className="h-4 w-4" />
            {foto ? "Trocar foto" : "Adicionar foto"}
            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                const reader = new FileReader();
                reader.onload = () => setFoto(String(reader.result));
                reader.readAsDataURL(f);
              }}
            />
          </label>
          {foto && (
            <img
              src={foto}
              alt="Registro"
              className="mt-2 w-full max-h-56 object-contain rounded-xl border-2 border-white/20"
            />
          )}
        </div>
      )}

      <button
        disabled={!preenchido || feito}
        onClick={() => setFeito(true)}
        className={`w-full h-12 rounded-2xl font-black flex items-center justify-center gap-2 transition ${
          feito
            ? "bg-emerald-500/30 border-2 border-emerald-300 text-white"
            : preenchido
              ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white active:scale-[0.98]"
              : "bg-white/10 text-white/50 border-2 border-white/10"
        }`}
      >
        {feito ? (
          <>
            <CheckCircle2 className="h-5 w-5" /> Registro guardado no Diário
          </>
        ) : (
          "Marcar como feito"
        )}
      </button>

      {!preenchido && (
        <p className="text-center text-[11px] font-black uppercase tracking-widest text-white/50 mt-2">
          Preencha os registros pra concluir
        </p>
      )}
    </Secao>
  );
}
