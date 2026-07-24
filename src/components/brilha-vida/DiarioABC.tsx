import { useEffect, useState } from "react";
import { X, Plus, Trash2, FileDown, Sparkles, Loader2, Volume2 } from "lucide-react";
import { VozGuia } from "./shared/VozGuia";
import { useAppState } from "@/core/store";
import { callNeuroBrilhaAI } from "@/services/api/neurobrilha-ai.functions";
import { usePipVoice } from "@/hooks/usePipVoice";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/**
 * Diário ABC (Antecedente-Comportamento-Consequência) — padrão-ouro em ABA
 * para o cuidador identificar a FUNÇÃO do comportamento. Salva local,
 * exporta PDF para levar ao terapeuta, e pede análise da IA terapêutica
 * (que já conhece o perfil da criança) para sugerir plano prático.
 */
type Registro = {
  id: string;
  data: string;
  antecedente: string;
  comportamento: string;
  consequencia: string;
  hipotese: string;
};

const funcaoLabel: Record<string, string> = {
  atencao: "🙋 Buscar atenção",
  fuga: "🏃 Fugir/evitar tarefa",
  tangivel: "🎁 Obter item/atividade",
  sensorial: "🌈 Autoestimulação sensorial",
};

export function DiarioABC({ onClose }: { onClose: () => void }) {
  const { activeChild } = useAppState();
  const { speak, stop } = usePipVoice();
  const chave = `brilha-vida:diario-abc:${activeChild?.id ?? "anon"}`;
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [rascunho, setRascunho] = useState({
    antecedente: "",
    comportamento: "",
    consequencia: "",
    hipotese: "atencao",
  });
  const [analise, setAnalise] = useState<string>("");
  const [carregandoIA, setCarregandoIA] = useState(false);
  const [erroIA, setErroIA] = useState<string>("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(chave);
      if (raw) setRegistros(JSON.parse(raw));
      const rawAn = localStorage.getItem(`${chave}:analise`);
      if (rawAn) setAnalise(rawAn);
    } catch {}
  }, [chave]);

  useEffect(() => () => stop(), [stop]);

  const salvar = (novos: Registro[]) => {
    setRegistros(novos);
    try {
      localStorage.setItem(chave, JSON.stringify(novos));
    } catch {}
  };

  const salvarAnalise = (texto: string) => {
    setAnalise(texto);
    try {
      localStorage.setItem(`${chave}:analise`, texto);
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

  const gerarPDF = () => {
    const doc = new jsPDF();
    const nome = activeChild?.nome ?? "Criança";
    const idade = activeChild?.idade ? `${activeChild.idade} anos` : "";
    const perfil = String((activeChild as any)?.diagnostico ?? (activeChild as any)?.perfil_neuro ?? "não especificado");

    doc.setFontSize(18);
    doc.setTextColor(20, 148, 156);
    doc.text("Diário ABC — Relatório para Terapeuta", 14, 20);

    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    doc.text(`Criança: ${nome} ${idade}`, 14, 30);
    doc.text(`Perfil neurológico: ${perfil}`, 14, 36);
    doc.text(`Gerado em: ${new Date().toLocaleString("pt-BR")}`, 14, 42);
    doc.text(`Total de registros: ${registros.length}`, 14, 48);

    autoTable(doc, {
      startY: 55,
      head: [["Data", "Antecedente (A)", "Comportamento (B)", "Consequência (C)", "Função"]],
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

    if (analise) {
      const y = (doc as any).lastAutoTable.finalY + 10;
      doc.setFontSize(13);
      doc.setTextColor(20, 148, 156);
      doc.text("Análise da IA terapêutica", 14, y);
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      const linhas = doc.splitTextToSize(analise, 180);
      doc.text(linhas, 14, y + 7);
    }

    doc.setFontSize(8);
    doc.setTextColor(140, 140, 140);
    doc.text(
      "Base clínica: Cooper, Heron & Heward — Applied Behavior Analysis (2020). Documento gerado pelo app Neuro Brilha, sem substituir avaliação profissional.",
      14,
      285,
    );

    doc.save(`diario-abc-${nome.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}.pdf`);
  };

  const pedirAnaliseIA = async () => {
    if (registros.length < 2 || !activeChild) return;
    setCarregandoIA(true);
    setErroIA("");
    stop();
    try {
      const linhas = registros
        .slice(0, 20)
        .map(
          (r, i) =>
            `${i + 1}. [${r.data}]\n   A: ${r.antecedente}\n   B: ${r.comportamento}\n   C: ${r.consequencia}\n   Hipótese do cuidador: ${funcaoLabel[r.hipotese]}`,
        )
        .join("\n\n");

      const mensagem = `Sou o cuidador de ${activeChild.nome ?? "uma criança"} (${activeChild.idade ?? "?"} anos, perfil ${activeChild.perfil_neuro ?? "não especificado"}). Registrei ${registros.length} episódios no Diário ABC:

${linhas}

Por favor, com base em ABA (Cooper 2020) e prática clínica:
1) Identifique o PADRÃO / função provável mais frequente do comportamento.
2) Sugira 3 estratégias PROATIVAS (antes do comportamento) específicas para essa criança.
3) Sugira 2 respostas REATIVAS (o que fazer no momento) que NÃO reforcem o comportamento indesejado.
4) Sugira 1 plano para o CUIDADOR se cuidar nesta semana.

Responda em português claro, com títulos e frases curtas. Sem markdown pesado. Máximo 400 palavras.`;

      const resposta = await callNeuroBrilhaAI({
        data: {
          mode: "terapeuta",
          child: activeChild as any,
          mascot: null,
          message: mensagem,
          chatHistory: [],
        },
      });

      const texto = String(resposta ?? "").trim();
      if (!texto) throw new Error("Resposta vazia");
      salvarAnalise(texto);
    } catch (e) {
      console.error("[DiarioABC] erro IA:", e);
      setErroIA(
        "A IA terapêutica não respondeu agora. Tente de novo em alguns minutos ou exporte o PDF para o profissional.",
      );
    } finally {
      setCarregandoIA(false);
    }
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
          <VozGuia texto="Registre o que aconteceu antes, o comportamento em si e o que veio depois. Em 3 a 5 registros você vai enxergar o padrão. Depois pode pedir análise da IA ou baixar o PDF para o terapeuta." />
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

        {/* Ações: IA + PDF */}
        {registros.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              onClick={pedirAnaliseIA}
              disabled={carregandoIA || registros.length < 2}
              className="py-3 px-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black shadow-lg disabled:opacity-40 inline-flex items-center justify-center gap-2"
            >
              {carregandoIA ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Analisando padrão…
                </>
              ) : (
                <>
                  <Sparkles size={18} /> Pedir análise da IA terapêutica
                </>
              )}
            </button>
            <button
              onClick={gerarPDF}
              className="py-3 px-4 rounded-2xl bg-slate-800 text-white font-black shadow-lg inline-flex items-center justify-center gap-2"
            >
              <FileDown size={18} /> Baixar PDF para o terapeuta
            </button>
          </div>
        )}

        {registros.length > 0 && registros.length < 2 && (
          <p className="text-xs text-center text-slate-500 -mt-4 mb-4">
            Registre pelo menos 2 episódios para a IA identificar padrão.
          </p>
        )}

        {erroIA && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border-2 border-red-200 text-sm text-red-700">
            {erroIA}
          </div>
        )}

        {analise && (
          <div className="mb-6 p-5 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-black text-purple-700 inline-flex items-center gap-2">
                <Sparkles size={18} /> Análise da IA terapêutica
              </h3>
              <button
                onClick={() => speak(analise)}
                className="p-2 rounded-full bg-white shadow text-purple-600"
                aria-label="Ouvir análise"
              >
                <Volume2 size={16} />
              </button>
            </div>
            <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{analise}</p>
            <p className="mt-3 text-[10px] text-purple-500 italic">
              Sugestões geradas por IA. Não substituem avaliação com profissional habilitado.
            </p>
          </div>
        )}

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
