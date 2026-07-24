import { useEffect, useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { VozGuia } from "./shared/VozGuia";
import { useAppState } from "@/core/store";

/**
 * Diário ABC (Antecedente-Comportamento-Consequência) — padrão-ouro em ABA
 * para o cuidador identificar a FUNÇÃO do comportamento (fugir, obter,
 * sensorial, atenção) antes de reagir. 3 a 5 registros já revelam padrões.
 */
type Registro = {
  id: string;
  data: string;
  antecedente: string;
  comportamento: string;
  consequencia: string;
  hipotese: string;
};

export function DiarioABC({ onClose }: { onClose: () => void }) {
  const { activeChild } = useAppState();
  const chave = `brilha-vida:diario-abc:${activeChild?.id ?? "anon"}`;
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [rascunho, setRascunho] = useState({
    antecedente: "",
    comportamento: "",
    consequencia: "",
    hipotese: "atencao",
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(chave);
      if (raw) setRegistros(JSON.parse(raw));
    } catch {}
  }, [chave]);

  const salvar = (novos: Registro[]) => {
    setRegistros(novos);
    try {
      localStorage.setItem(chave, JSON.stringify(novos));
    } catch {}
  };

  const adicionar = () => {
    if (!rascunho.antecedente || !rascunho.comportamento) return;
    const novo: Registro = {
      id: crypto.randomUUID(),
      data: new Date().toLocaleString("pt-BR"),
      ...rascunho,
    };
    salvar([novo, ...registros]);
    setRascunho({ antecedente: "", comportamento: "", consequencia: "", hipotese: "atencao" });
  };

  const remover = (id: string) => salvar(registros.filter((r) => r.id !== id));

  const funcaoLabel: Record<string, string> = {
    atencao: "🙋 Buscar atenção",
    fuga: "🏃 Fugir/evitar tarefa",
    tangivel: "🎁 Obter item/atividade",
    sensorial: "🌈 Autoestimulação sensorial",
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 pb-24">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-black tracking-wider text-teal-600">FERRAMENTA CLÍNICA</p>
            <h1 className="text-2xl font-black text-slate-800">Diário ABC</h1>
            <p className="text-sm text-slate-500">Antecedente → Comportamento → Consequência</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-white shadow" aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        <div className="mb-4 flex justify-end">
          <VozGuia texto="Registre o que aconteceu antes, o comportamento em si e o que veio depois. Em 3 a 5 registros você vai enxergar o padrão." />
        </div>

        <div className="bg-white rounded-3xl border-2 border-slate-100 p-5 mb-6 space-y-3">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">A · Antecedente</label>
            <textarea
              rows={2}
              value={rascunho.antecedente}
              onChange={(e) => setRascunho({ ...rascunho, antecedente: e.target.value })}
              placeholder="O que estava acontecendo pouco antes? (ex: pedi para desligar a TV)"
              className="w-full mt-1 p-3 rounded-xl border-2 border-slate-200 focus:border-teal-400 outline-none text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">B · Comportamento</label>
            <textarea
              rows={2}
              value={rascunho.comportamento}
              onChange={(e) => setRascunho({ ...rascunho, comportamento: e.target.value })}
              placeholder="O que a criança fez? (ex: gritou e jogou o controle no chão)"
              className="w-full mt-1 p-3 rounded-xl border-2 border-slate-200 focus:border-teal-400 outline-none text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">C · Consequência</label>
            <textarea
              rows={2}
              value={rascunho.consequencia}
              onChange={(e) => setRascunho({ ...rascunho, consequencia: e.target.value })}
              placeholder="O que você / o ambiente fez em seguida? (ex: deixei ver mais 10 min)"
              className="w-full mt-1 p-3 rounded-xl border-2 border-slate-200 focus:border-teal-400 outline-none text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Função provável</label>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {Object.entries(funcaoLabel).map(([k, v]) => (
                <button
                  key={k}
                  onClick={() => setRascunho({ ...rascunho, hipotese: k })}
                  className={`p-2 rounded-xl text-sm font-bold border-2 ${
                    rascunho.hipotese === k
                      ? "bg-teal-500 border-teal-500 text-white"
                      : "bg-white border-slate-200 text-slate-600"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={adicionar}
            disabled={!rascunho.antecedente || !rascunho.comportamento}
            className="w-full py-3 rounded-2xl bg-teal-600 text-white font-black disabled:opacity-40 inline-flex items-center justify-center gap-2"
          >
            <Plus size={18} /> Salvar registro
          </button>
        </div>

        <h2 className="font-black text-slate-700 mb-2">
          Meus registros ({registros.length})
        </h2>
        {registros.length === 0 ? (
          <p className="text-sm text-slate-500 bg-white p-4 rounded-2xl">
            Ainda sem registros. Após 3 a 5 entradas, aparece um padrão da função do comportamento.
          </p>
        ) : (
          <ul className="space-y-2">
            {registros.map((r) => (
              <li key={r.id} className="bg-white p-4 rounded-2xl border-2 border-slate-100">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-slate-400">{r.data}</span>
                  <button
                    onClick={() => remover(r.id)}
                    className="text-slate-300 hover:text-red-500"
                    aria-label="Remover"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-sm">
                  <b className="text-teal-600">A:</b> {r.antecedente}
                </p>
                <p className="text-sm">
                  <b className="text-orange-600">B:</b> {r.comportamento}
                </p>
                <p className="text-sm">
                  <b className="text-emerald-600">C:</b> {r.consequencia}
                </p>
                <p className="text-xs mt-2 inline-block px-2 py-1 rounded-full bg-slate-100 font-bold">
                  {funcaoLabel[r.hipotese]}
                </p>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-6 text-center text-xs text-slate-400">
          Base: Cooper, Heron & Heward — <i>Applied Behavior Analysis</i> (2020)
        </p>
      </div>
    </div>
  );
}
