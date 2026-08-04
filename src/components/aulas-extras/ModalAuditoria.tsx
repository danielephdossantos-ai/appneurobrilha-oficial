import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ClipboardCheck, 
  BookOpen, 
  BarChart3, 
  Database, 
  Layout, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Search, 
  FileDown,
  Users,
  X
} from "lucide-react";

type Status = "CONCLUÍDO" | "EM ANDAMENTO" | "FALTANDO";

interface AuditoriaItem {
  id: string;
  categoria: string;
  item: string;
  status: Status;
  detalhes: string;
}

export function ModalAuditoria({ aberto, onFechar }: { aberto: boolean; onFechar: () => void }) {
  if (!aberto) return null;

  const dadosAuditoria: AuditoriaItem[] = [
    {
      id: "1.1",
      categoria: "Biblioteca de Aulas",
      item: "40 Aulas REALMENTE cadastradas",
      status: "EM ANDAMENTO",
      detalhes: "25 aulas estruturadas (Unidades 1-5 e parte da Fase 3). Faltam 15 aulas para completar o plano de 40."
    },
    {
      id: "1.2",
      categoria: "Biblioteca de Aulas",
      item: "Divisão por Fases (Lúdica, Detetive, Analítica)",
      status: "CONCLUÍDO",
      detalhes: "Fase 1 (Lúdica), Fase 2 (Detetive) e Fase 3 (Analítica) devidamente mapeadas no código."
    },
    {
      id: "2.1",
      categoria: "Níveis de Dificuldade",
      item: "Tags Visíveis (🟢, 🟡, 🔴)",
      status: "CONCLUÍDO",
      detalhes: "Tags implementadas nos cards da trilha e no cabeçalho do LousaPlayer."
    },
    {
      id: "2.2",
      categoria: "Níveis de Dificuldade",
      item: "Filtro de Dificuldade na Trilha",
      status: "CONCLUÍDO",
      detalhes: "Filtro funcional no cabeçalho do curso permitindo filtrar por Fácil, Médio e Desafio."
    },
    {
      id: "3.1",
      categoria: "Funcionalidades dos Aulões",
      item: "Botão de Baixar Resumo em PDF",
      status: "CONCLUÍDO",
      detalhes: "Integração com jsPDF ativa. Gera resumo escuro com dicas para os pais."
    },
    {
      id: "3.2",
      categoria: "Funcionalidades dos Aulões",
      item: "Dicas para os Pais (nota-pais)",
      status: "CONCLUÍDO",
      detalhes: "Blocos de tipo 'nota-pais' integrados ao player e ao gerador de PDF."
    },
    {
      id: "3.3",
      categoria: "Funcionalidades dos Aulões",
      item: "Busca Inteligente (Sinônimos)",
      status: "CONCLUÍDO",
      detalhes: "Busca com mapeamento de sinônimos (ex: 'porque' -> 'porquês') ativa."
    },
    {
      id: "4.1",
      categoria: "Banco de Dados & Progresso",
      item: "Sincronização Supabase",
      status: "CONCLUÍDO",
      detalhes: "Hook use-progress integrado para persistir conclusões de aula."
    },
    {
      id: "5.1",
      categoria: "Relatório dos Pais",
      item: "Dashboard de Desempenho por Fase",
      status: "CONCLUÍDO",
      detalhes: "Componente RelatorioAlunoModal funcional com estatísticas por fase e dificuldade."
    }
  ];

  const getStatusIcon = (status: Status) => {
    switch (status) {
      case "CONCLUÍDO": return <CheckCircle2 className="text-emerald-400" size={20} />;
      case "EM ANDAMENTO": return <Clock className="text-amber-400" size={20} />;
      case "FALTANDO": return <AlertCircle className="text-rose-400" size={20} />;
    }
  };

  const getStatusClass = (status: Status) => {
    switch (status) {
      case "CONCLUÍDO": return "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";
      case "EM ANDAMENTO": return "bg-amber-500/10 border-amber-500/20 text-amber-400";
      case "FALTANDO": return "bg-rose-500/10 border-rose-500/20 text-rose-400";
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        onClick={onFechar}
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
      />
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        
        <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-xl">
              <ClipboardCheck size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">📊 AUDITORIA DO APP</h2>
              <p className="text-sm text-slate-400 font-bold uppercase">Diagnóstico Técnico Completo • Engenharia de Software</p>
            </div>
          </div>
          <button 
            onClick={onFechar}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-blue-400" size={24} />
                <h3 className="text-lg font-black text-blue-100 uppercase">Biblioteca de Aulas</h3>
              </div>
              <p className="text-sm text-blue-200/70 mb-4">
                Mapeamento das 40 aulas extras ("Lousa Mágica 360°").
              </p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-white">25</span>
                <span className="text-xl font-bold text-blue-400/50">/ 40</span>
                <span className="ml-auto text-xs font-black px-3 py-1 bg-blue-500/20 rounded-full text-blue-300">62% ATIVO</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Layout className="text-emerald-400" size={24} />
                <h3 className="text-lg font-black text-emerald-100 uppercase">Recursos de UI</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase text-emerald-400/60">Filtro Dif.</div>
                  <div className="text-lg font-bold text-white">FUNCIONAL</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase text-emerald-400/60">Busca Inteligente</div>
                  <div className="text-lg font-bold text-white">ATIVA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="text-purple-400" size={20} />
              <h3 className="font-black text-white uppercase tracking-wider">Detalhamento por Item</h3>
            </div>
            
            <div className="border border-white/5 rounded-3xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-white/5">
                  <tr>
                    <th className="px-6 py-4">Categoria / Item</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Diagnóstico</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {dadosAuditoria.map((item) => (
                    <tr key={item.id} className="hover:bg-white/[0.02] transition">
                      <td className="px-6 py-5">
                        <div className="text-[10px] font-black uppercase text-slate-500 mb-1">{item.categoria}</div>
                        <div className="font-bold text-white">{item.item}</div>
                      </td>
                      <td className="px-6 py-5">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black border ${getStatusClass(item.status)}`}>
                          {getStatusIcon(item.status)}
                          {item.status}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-400 leading-relaxed">
                        {item.detalhes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/20 flex items-start gap-4">
            <AlertCircle className="text-rose-500 shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-black text-rose-200 uppercase mb-1">Ação de Engenharia Pendente</h4>
              <p className="text-sm text-rose-300/70">
                A estrutura de diretórios já suporta as 40 aulas, mas as Unidades 6, 7 e 8 possuem aulas em modo 'esqueleto' (mock estrutural). 
                Recomenda-se a expansão imediata para preencher o conteúdo pedagógico completo dessas 15 aulas restantes.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 border-t border-white/5 bg-slate-950/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="text-slate-500" size={16} />
            <span className="text-xs font-bold text-slate-500">Sincronização Supabase: ATIVA</span>
          </div>
          <button 
            onClick={onFechar}
            className="px-8 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black transition shadow-lg shadow-blue-600/20"
          >
            ENTENDI O DIAGNÓSTICO
          </button>
        </div>
      </motion.div>
    </div>
  );
}
