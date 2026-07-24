import { useEffect, useState } from "react";
import { X, Battery, BatteryLow, BatteryWarning } from "lucide-react";
import { motion } from "framer-motion";
import { VozGuia } from "./shared/VozGuia";
import { useAppState } from "@/core/store";

/**
 * Bateria do Cuidador — autoavaliação semanal de burnout parental
 * (Roskam & Mikolajczak — Parental Burnout Assessment, versão curta).
 * Objetivo: dar linguagem, normalizar e sugerir ações micro.
 */
const PERGUNTAS = [
  "Eu me sinto exausto(a) como mãe/pai/cuidador(a).",
  "Não aguento mais desempenhar o meu papel de cuidador(a).",
  "Já não sou o mesmo/a mãe/pai que era antes.",
  "Sinto que perdi o prazer de estar com meu filho(a).",
  "Sinto que dou o mínimo pra criança, não o que eu gostaria.",
];

const ACOES_BATERIA_BAIXA = [
  "🫁 Faça 4 ciclos de respiração 4-7-8 (Kit do Cuidador).",
  "☎️ Peça 30 min de folga hoje pra alguém de confiança.",
  "🚶 Caminhe 10 min sozinho(a) sem o celular.",
  "💧 Beba um copo grande d'água agora. Corpo desidratado amplifica irritação.",
  "🛏️ Priorize 7h de sono hoje — cancele o que puder.",
];

const ACOES_BATERIA_MEDIA = [
  "📵 Faça 1 pausa de tela hoje (15 min).",
  "🤗 Mande mensagem pra alguém que te faz bem.",
  "🌿 5 min ao ar livre, olhando pra longe.",
  "📓 Anote 3 coisas que deram certo no dia com a criança.",
];

const ACOES_BATERIA_ALTA = [
  "✨ Comemore: cuidar bem de si é cuidar bem da criança.",
  "🔁 Mantenha o ritual que está funcionando.",
  "💬 Compartilhe com outro cuidador o que tem ajudado.",
];

export function BateriaCuidador({ onClose }: { onClose: () => void }) {
  const { activeChild } = useAppState();
  const chave = `brilha-vida:bateria-cuidador:${activeChild?.id ?? "anon"}`;
  const [respostas, setRespostas] = useState<number[]>(Array(PERGUNTAS.length).fill(0));
  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(chave);
      if (raw) {
        const dados = JSON.parse(raw);
        if (dados.respostas) setRespostas(dados.respostas);
        if (dados.finalizado) setFinalizado(true);
      }
    } catch {}
  }, [chave]);

  const media = respostas.reduce((a, b) => a + b, 0) / PERGUNTAS.length;
  // média em 1..5 → 5 = pior; bateria = inverso
  const bateria = Math.max(0, Math.min(100, ((5 - media) / 4) * 100));

  const nivel = bateria < 35 ? "baixa" : bateria < 70 ? "media" : "alta";
  const acoes =
    nivel === "baixa"
      ? ACOES_BATERIA_BAIXA
      : nivel === "media"
      ? ACOES_BATERIA_MEDIA
      : ACOES_BATERIA_ALTA;

  const cor =
    nivel === "baixa"
      ? "from-rose-500 to-rose-700"
      : nivel === "media"
      ? "from-amber-400 to-orange-600"
      : "from-emerald-400 to-emerald-600";

  const Icone = nivel === "baixa" ? BatteryLow : nivel === "media" ? BatteryWarning : Battery;

  const setResp = (i: number, v: number) => {
    const novo = [...respostas];
    novo[i] = v;
    setRespostas(novo);
  };

  const finalizar = () => {
    setFinalizado(true);
    try {
      localStorage.setItem(
        chave,
        JSON.stringify({ respostas, finalizado: true, data: new Date().toISOString() }),
      );
    } catch {}
  };

  const reiniciar = () => {
    setRespostas(Array(PERGUNTAS.length).fill(0));
    setFinalizado(false);
    try {
      localStorage.removeItem(chave);
    } catch {}
  };

  const completo = respostas.every((r) => r > 0);

  return (
    <div className="min-h-screen bg-slate-50 p-4 pb-20">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-black tracking-wider text-indigo-600">AUTOCUIDADO</p>
            <h1 className="text-2xl font-black text-slate-800">Bateria do Cuidador</h1>
            <p className="text-sm text-slate-500">Como está sua energia esta semana?</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-white shadow" aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        <div className="mb-4 flex justify-end">
          <VozGuia texto="Responda com sinceridade, ninguém vê. Cuidar de si é a base pra cuidar de quem você ama." />
        </div>

        {!finalizado ? (
          <div className="space-y-3">
            {PERGUNTAS.map((p, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border-2 border-slate-100">
                <p className="text-sm font-bold text-slate-700 mb-3">
                  {i + 1}. {p}
                </p>
                <div className="grid grid-cols-5 gap-1">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <button
                      key={v}
                      onClick={() => setResp(i, v)}
                      className={`py-2 rounded-xl font-black text-sm border-2 ${
                        respostas[i] === v
                          ? "bg-indigo-500 border-indigo-500 text-white"
                          : "bg-white border-slate-200 text-slate-600"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-wider text-slate-400 mt-1 font-bold">
                  <span>Nunca</span>
                  <span>Sempre</span>
                </div>
              </div>
            ))}

            <button
              onClick={finalizar}
              disabled={!completo}
              className="w-full py-3 rounded-2xl bg-indigo-600 text-white font-black disabled:opacity-40"
            >
              Ver minha bateria
            </button>
          </div>
        ) : (
          <>
            <div
              className={`rounded-3xl p-8 bg-gradient-to-br ${cor} text-white shadow-xl text-center`}
            >
              <Icone className="w-16 h-16 mx-auto mb-2" />
              <p className="text-sm uppercase font-black tracking-wider opacity-90">Sua bateria</p>
              <div className="text-6xl font-black tabular-nums my-2">{Math.round(bateria)}%</div>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden mt-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${bateria}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-white"
                />
              </div>
              <p className="mt-4 text-sm font-bold">
                {nivel === "baixa" && "Sinal de alerta. Você precisa recarregar HOJE."}
                {nivel === "media" && "Dando conta, mas precisa de micro-pausas."}
                {nivel === "alta" && "Você está bem — continue investindo em si."}
              </p>
            </div>

            <div className="mt-5 bg-white rounded-2xl border-2 border-slate-100 p-5">
              <h3 className="font-black text-slate-800 mb-3">Ações pra esta semana</h3>
              <ul className="space-y-2">
                {acoes.map((a, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={reiniciar}
              className="mt-4 w-full py-3 rounded-2xl bg-white border-2 border-slate-200 font-bold text-slate-600"
            >
              Refazer avaliação
            </button>
          </>
        )}

        <p className="mt-6 text-center text-xs text-slate-400">
          Base: Roskam & Mikolajczak — Parental Burnout Assessment
        </p>
      </div>
    </div>
  );
}
