import { useEffect, useState } from "react";
import { X, Plus, Trash2, FileDown } from "lucide-react";
import { VozGuia } from "./shared/VozGuia";
import { useAppState } from "@/core/store";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { supabase } from "@/database/supabase/client";

/**
 * Registro descritivo da família: o que veio antes, o que foi observado e o
 * que aconteceu depois. Não conclui função, diagnóstico ou tratamento.
 */
type Registro = {
  id: string;
  data: string;
  antecedente: string;
  comportamento: string;
  consequencia: string;
  hipotese: string;
  at: string;
};

const funcaoLabel: Record<string, string> = {
  nao_sei: "❔ Ainda não sei",
  atencao: "🙋 Procurou contato ou atenção",
  fuga: "⏸️ Tentou evitar ou pausar",
  tangivel: "🎁 Buscou um objeto ou atividade",
  sensorial: "🌈 Buscou uma sensação ou movimento",
};

export function DiarioABC({ onClose }: { onClose: () => void }) {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;
  const chave = childId ? `brilha-vida:diario-abc:${childId}` : null;
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [rascunho, setRascunho] = useState({
    antecedente: "",
    comportamento: "",
    consequencia: "",
    hipotese: "nao_sei",
  });

  useEffect(() => {
    try {
      if (!chave || !childId) return;
      const raw = localStorage.getItem(chave);
      const locais = raw ? (JSON.parse(raw) as Array<Registro & { at?: string }>).map((r) => ({
        ...r,
        at: r.at || new Date().toISOString(),
        hipotese: r.hipotese || "nao_sei",
      })) : [];
      setRegistros(locais);
      void supabase
        .from("brilha_vida_abc_entries" as any)
        .select("id,antecedent,observed_behavior,consequence,family_hypothesis,created_at")
        .eq("child_id", childId)
        .order("created_at", { ascending: false })
        .then(({ data }) => {
          const remotos = ((data as any[]) ?? []).map((r) => ({
            id: String(r.id), data: new Date(r.created_at).toLocaleString("pt-BR"), at: String(r.created_at),
            antecedente: String(r.antecedent), comportamento: String(r.observed_behavior),
            consequencia: String(r.consequence ?? ""), hipotese: String(r.family_hypothesis ?? "nao_sei"),
          })) as Registro[];
          const unidos = new Map<string, Registro>();
          for (const registro of [...remotos, ...locais]) unidos.set(registro.id, registro);
          const lista = [...unidos.values()].sort((a, b) => b.at.localeCompare(a.at));
          setRegistros(lista);
          localStorage.setItem(chave, JSON.stringify(lista));
          for (const registro of locais) void salvarRemoto(registro, childId);
        });
    } catch {}
  }, [chave, childId]);

  const salvarRemoto = (registro: Registro, idCrianca: string) => supabase
    .from("brilha_vida_abc_entries" as any)
    .upsert({ id: registro.id, child_id: idCrianca, antecedent: registro.antecedente,
      observed_behavior: registro.comportamento, consequence: registro.consequencia,
      family_hypothesis: registro.hipotese, created_at: registro.at } as any);

  const salvar = (novos: Registro[]) => {
    setRegistros(novos);
    try {
      if (chave) localStorage.setItem(chave, JSON.stringify(novos));
    } catch {}
  };

  const adicionar = () => {
    if (!rascunho.antecedente || !rascunho.comportamento || !childId) return;
    const agora = new Date();
    const novo: Registro = {
      id: crypto.randomUUID(),
      data: agora.toLocaleString("pt-BR"),
      at: agora.toISOString(),
      ...rascunho,
    };
    salvar([novo, ...registros]);
    void salvarRemoto(novo, childId);
    setRascunho({ antecedente: "", comportamento: "", consequencia: "", hipotese: "nao_sei" });
  };

  const remover = (id: string) => {
    salvar(registros.filter((r) => r.id !== id));
    if (childId) void supabase.from("brilha_vida_abc_entries" as any).delete().eq("id", id).eq("child_id", childId);
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    const nome = activeChild?.nome ?? "Criança";
    const idade = activeChild?.idade ? `${activeChild.idade} anos` : "";

    doc.setFontSize(18);
    doc.setTextColor(20, 148, 156);
    doc.text("Diário ABC — Registro da Família", 14, 20);

    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    doc.text(`Criança: ${nome} ${idade}`, 14, 30);
    doc.text(`Gerado em: ${new Date().toLocaleString("pt-BR")}`, 14, 36);
    doc.text(`Total de registros: ${registros.length}`, 14, 42);

    autoTable(doc, {
      startY: 49,
      head: [["Data", "Antes (A)", "Observação (B)", "Depois (C)", "Hipótese da família"]],
      body: registros.map((r) => [
        r.data,
        r.antecedente,
        r.comportamento,
        r.consequencia,
        funcaoLabel[r.hipotese] ?? r.hipotese,
      ]),
      styles: { fontSize: 9, cellPadding: 3, valign: "top" },
      headStyles: { fillColor: [20, 148, 156], textColor: 255, fontStyle: "bold" },
      columnStyles: {
        0: { cellWidth: 28 },
        1: { cellWidth: 40 },
        2: { cellWidth: 40 },
        3: { cellWidth: 40 },
        4: { cellWidth: 32 },
      },
    });

    doc.setFontSize(8);
    doc.setTextColor(140, 140, 140);
    doc.text(
      "Registro descritivo da família. Não apresenta diagnóstico nem substitui avaliação profissional.",
      14,
      285,
    );

    doc.save(`diario-abc-${nome.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}.pdf`);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 pb-24">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-black tracking-wider text-teal-700">REGISTRO DA FAMÍLIA</p>
            <h1 className="text-2xl font-black text-slate-800">Diário ABC</h1>
            <p className="text-sm text-slate-500">Antecedente → Comportamento → Consequência</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full bg-white shadow" aria-label="Fechar">
            <X size={20} />
          </button>
        </div>

        <div className="mb-4 flex justify-end">
          <VozGuia texto="Registre apenas o que você observou antes, durante e depois. Evite concluir diagnósticos. O relatório pode ser compartilhado com um profissional habilitado." />
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
            <label className="text-sm font-bold text-slate-600">O que a família acha que a criança buscava? (opcional)</label>
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

        {/* Exportação do registro — sem interpretação automática. */}
        {registros.length > 0 && (
          <div className="mb-6">
            <button
              onClick={gerarPDF}
              className="w-full py-3 px-4 rounded-2xl bg-slate-800 text-white font-black shadow-lg inline-flex items-center justify-center gap-2"
            >
              <FileDown size={18} /> Baixar registro em PDF
            </button>
          </div>
        )}

        <h2 className="font-black text-slate-700 mb-2">
          Meus registros ({registros.length})
        </h2>
        {registros.length === 0 ? (
          <p className="text-sm text-slate-500 bg-white p-4 rounded-2xl">
            Ainda sem registros. Descreva somente o que foi observado, sem tentar fechar diagnóstico.
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

        <p className="mt-6 text-center text-sm text-slate-500">
          Registro de observação familiar. A interpretação deve ser feita com cautela e, quando necessário, por profissional habilitado.
        </p>
      </div>
    </div>
  );
}
