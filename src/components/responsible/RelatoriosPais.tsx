import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Card } from "@/components/Layout";
import { FileText, Download, Loader2, Trash2, Share2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import {
  coletarDadosRelatorio,
  gerarPDFRelatorio,
  nomeArquivoRelatorio,
  salvarRelatorio,
  listarRelatorios,
  apagarRelatorio,
  type DadosRelatorio,
} from "@/modules/parental/relatorio-completo";

const PERIODOS = [
  { dias: 7, label: "7 dias" },
  { dias: 30, label: "30 dias" },
  { dias: 90, label: "90 dias" },
  { dias: 365, label: "Ano letivo" },
];

export function RelatoriosPais({ childId }: { childId: string }) {
  const queryClient = useQueryClient();
  const [dias, setDias] = useState(30);
  const [gerando, setGerando] = useState(false);

  const { data: relatorios = [], isLoading } = useQuery({
    queryKey: ["reports", childId],
    queryFn: () => listarRelatorios(childId),
    enabled: !!childId,
  });

  function baixarPDF(dados: DadosRelatorio) {
    const doc = gerarPDFRelatorio(dados);
    doc.save(nomeArquivoRelatorio(dados));
  }

  async function gerar() {
    setGerando(true);
    try {
      const dados = await coletarDadosRelatorio(childId, dias);
      await salvarRelatorio(dados);
      baixarPDF(dados);
      queryClient.invalidateQueries({ queryKey: ["reports", childId] });
      toast.success("Relatório gerado, salvo no app e baixado em PDF!");
    } catch (e: any) {
      toast.error(e?.message ?? "Não foi possível gerar o relatório");
    } finally {
      setGerando(false);
    }
  }

  async function compartilhar(dados: DadosRelatorio) {
    try {
      const blob = gerarPDFRelatorio(dados).output("blob");
      const file = new File([blob], nomeArquivoRelatorio(dados), { type: "application/pdf" });
      const nav: any = navigator;
      if (nav.canShare?.({ files: [file] })) {
        await nav.share({
          files: [file],
          title: `Relatório de ${dados.crianca.nome}`,
          text: "Relatório de acompanhamento gerado pelo NeuroBrilha Kids.",
        });
        return;
      }
      baixarPDF(dados);
      toast.info("Seu aparelho não permite compartilhar direto: o PDF foi baixado.");
    } catch {
      /* usuário cancelou */
    }
  }

  async function remover(id: string) {
    try {
      await apagarRelatorio(id);
      queryClient.invalidateQueries({ queryKey: ["reports", childId] });
      toast.success("Relatório apagado");
    } catch (e: any) {
      toast.error(e?.message ?? "Erro ao apagar");
    }
  }

  return (
    <Card className="p-5 md:p-6 space-y-4">
      <div className="flex items-start gap-3">
        <div className="h-12 w-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
          <FileText className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600">
            Para escola e terapeuta
          </p>
          <h3 className="text-lg font-black text-slate-900 leading-tight">
            Relatórios de acompanhamento
          </h3>
          <p className="text-xs font-medium text-slate-600 mt-1">
            Gera um PDF com os dados reais de uso, aproveitamento por habilidade da BNCC, tempo de
            estudo e orientações. Fica salvo aqui para baixar quando quiser.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {PERIODOS.map((p) => (
          <button
            key={p.dias}
            onClick={() => setDias(p.dias)}
            className={`px-3 py-2 rounded-xl text-xs font-black border-2 transition ${
              dias === p.dias
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-slate-700 border-slate-200 hover:border-indigo-400"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <button
        onClick={gerar}
        disabled={gerando}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 text-white font-black text-sm shadow-md disabled:opacity-60"
      >
        {gerando ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
        {gerando ? "Analisando os dados…" : "Gerar relatório em PDF"}
      </button>

      <div className="space-y-2">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
          Relatórios salvos
        </p>
        {isLoading && <p className="text-xs text-slate-500">Carregando…</p>}
        {!isLoading && relatorios.length === 0 && (
          <p className="text-xs text-slate-500">
            Nenhum relatório ainda. Gere o primeiro depois de alguns dias de uso.
          </p>
        )}
        {relatorios.map((rel) => (
          <div
            key={rel.id}
            className="rounded-2xl border-2 border-slate-200 p-3 flex items-center gap-3"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black text-slate-800 truncate">
                {rel.title ?? "Relatório"}
              </p>
              <p className="text-[11px] font-medium text-slate-500 truncate">
                {new Date(rel.generated_at).toLocaleString("pt-BR")} — {rel.summary ?? ""}
              </p>
            </div>
            <button
              onClick={() => baixarPDF(rel.data)}
              title="Baixar PDF"
              className="h-9 w-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center hover:bg-indigo-100"
            >
              <Download className="h-4 w-4" />
            </button>
            <button
              onClick={() => compartilhar(rel.data)}
              title="Enviar para escola/terapeuta"
              className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center hover:bg-emerald-100"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => remover(rel.id)}
              title="Apagar"
              className="h-9 w-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-100"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
