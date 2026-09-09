import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Brain, CheckCircle2, AlertTriangle, Home, BookOpen, CalendarDays, GraduationCap, UserRound, FileText } from "lucide-react";
import { Shell } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { DashboardHeader } from "@/components/responsible/DashboardHeader";
import { RelatoriosPais } from "@/components/responsible/RelatoriosPais";
import { PainelPedagogicoFamilia } from "@/components/responsible/PainelPedagogicoFamilia";
import { NrpPillarsCard } from "@/components/responsible/NrpPillarsCard";
import { DiarioABC } from "@/components/brilha-vida/DiarioABC";
import { MoodTimeline } from "@/components/brilha-vida/MoodTimeline";
import { ConsentGate } from "@/components/legal/ConsentGate";
import { PrivacyPanel } from "@/components/legal/PrivacyPanel";
import { useState, useEffect } from "react";
import { useParentMode } from "@/contexts/ParentModeContext";
import { AuditLogService } from "@/modules/auth/services/AuditLogService";
import { TeacherAccessManager } from "@/components/responsible/TeacherAccessManager";

export const Route = createFileRoute("/painel-pais")({ component: () => <ConsentGate><PainelPremium /></ConsentGate> });

function PainelPremium() {
  const { activeChild, children, isLoading, setActiveChild } = useAppState();
  const { unlocked: parentUnlocked, requestUnlock } = useParentMode();
  const [diarioAberto, setDiarioAberto] = useState(false);

  useEffect(() => {
    if (!activeChild) return;
    if (parentUnlocked) AuditLogService.log({ action: "ACCESS_PARENT_DASHBOARD", module: "RESPONSIBLE", metadata: { childId: activeChild.id } });
    else requestUnlock();
  }, [parentUnlocked, activeChild, requestUnlock]);

  if (isLoading) return <Shell><p className="text-center py-10">Carregando…</p></Shell>;
  if (!activeChild && children.length === 0) return <Shell><div className="text-center py-20 space-y-4"><p className="text-lg font-bold">Nenhuma criança cadastrada ainda</p><Link to="/anamnese/$childId" params={{childId:"nova"}} className="inline-flex px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold">Cadastrar criança</Link></div></Shell>;
  if (!activeChild) return <Shell><div className="max-w-xl mx-auto py-12"><p className="font-bold mb-4 text-center">Selecione uma criança</p>{children.map((c:any)=><button key={c.id} onClick={()=>setActiveChild(c.id)} className="w-full mb-2 p-4 rounded-2xl border bg-white text-left font-bold">{c.nome}</button>)}</div></Shell>;
  if (!parentUnlocked) return <Shell><div className="text-center py-20"><p className="font-bold mb-4">🔒 Área dos Pais bloqueada</p><button onClick={requestUnlock} className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-bold">Digitar PIN</button></div></Shell>;

  return <Shell><div className="max-w-6xl mx-auto pb-16">
    <div className="flex items-center justify-between mb-5"><button onClick={()=>window.history.back()} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-white text-sm font-bold"><ArrowLeft className="h-4 w-4"/>Voltar</button><Link to="/" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-white text-sm font-bold"><Home className="h-4 w-4"/>Início</Link></div>
    <DashboardHeader studentName={activeChild.nome} grade={activeChild.serie} childId={activeChild.id} avatar={activeChild.avatar} />

    <div className="mb-6 flex flex-wrap gap-2">{children.map((c:any)=><button key={c.id} onClick={()=>setActiveChild(c.id)} className={`px-4 py-2 rounded-xl border font-bold text-sm ${c.id===activeChild.id?'bg-primary text-primary-foreground border-primary':'bg-white'}`}>{c.avatar||'🧒'} {c.nome}</button>)}</div>

    <section className="grid md:grid-cols-4 gap-3 mb-6">
      <Link to="/rotina" className="rounded-2xl border bg-white p-4 hover:border-primary/40"><CalendarDays className="h-5 w-5 text-primary"/><h2 className="font-black mt-2">Hoje</h2><p className="text-xs text-muted-foreground mt-1">Veja atividades e horários da rotina.</p></Link>
      <Link to="/apoio-escolar" className="rounded-2xl border bg-white p-4 hover:border-primary/40"><GraduationCap className="h-5 w-5 text-primary"/><h2 className="font-black mt-2">Apoio Escolar</h2><p className="text-xs text-muted-foreground mt-1">Prova, tarefa e trabalho escolar.</p></Link>
      <Link to="/anamnese/$childId" params={{childId:activeChild.id}} className="rounded-2xl border bg-white p-4 hover:border-primary/40"><UserRound className="h-5 w-5 text-primary"/><h2 className="font-black mt-2">Perfil</h2><p className="text-xs text-muted-foreground mt-1">Revise a anamnese e preferências.</p></Link>
      <Link to="/painel-pais/documentos" className="rounded-2xl border bg-white p-4 hover:border-primary/40"><FileText className="h-5 w-5 text-primary"/><h2 className="font-black mt-2">Documentos</h2><p className="text-xs text-muted-foreground mt-1">Relatórios, termos e consentimentos.</p></Link>
    </section>

    <section className={`mb-6 rounded-2xl border p-5 flex flex-col md:flex-row gap-4 md:items-center ${activeChild.anamnese_completa?'bg-emerald-50 border-emerald-200':'bg-amber-50 border-amber-200'}`}>
      <div className={`h-11 w-11 rounded-xl grid place-items-center text-white ${activeChild.anamnese_completa?'bg-emerald-600':'bg-amber-500'}`}>{activeChild.anamnese_completa?<CheckCircle2/>:<AlertTriangle/>}</div>
      <div className="flex-1"><h2 className="font-black">{activeChild.anamnese_completa?'Perfil de aprendizagem atualizado':'Complete o perfil de aprendizagem'}</h2><p className="text-sm text-muted-foreground">{activeChild.anamnese_completa?'As informações podem ser revisadas quando a criança mudar.':'Isso ajuda a organizar ritmo, aulas e formas de apresentação.'}</p></div>
      <Link to="/anamnese/$childId" params={{childId:activeChild.id}} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold">{activeChild.anamnese_completa?'Revisar':'Começar'}<ArrowRight className="h-4 w-4"/></Link>
    </section>

    <div className="space-y-6">
      <PainelPedagogicoFamilia childId={activeChild.id} studentName={activeChild.nome}/>
      <NrpPillarsCard childId={activeChild.id}/>
      <MoodTimeline childId={activeChild.id} />
      <TeacherAccessManager childId={activeChild.id} childName={activeChild.nome} />
      <button onClick={()=>setDiarioAberto(true)} className="w-full text-left rounded-2xl border bg-white p-5 hover:border-primary/40"><div className="flex gap-3"><div className="h-11 w-11 rounded-xl bg-teal-100 text-teal-700 grid place-items-center"><BookOpen className="h-5 w-5"/></div><div><p className="text-xs font-bold text-teal-700">Observações da família</p><h3 className="font-black">Diário ABC de {activeChild.nome}</h3><p className="text-sm text-muted-foreground">Registre o que aconteceu antes, durante e depois de uma situação para acompanhar padrões ao longo do tempo.</p></div></div></button>
      <RelatoriosPais childId={activeChild.id}/>
      <PrivacyPanel/>
    </div>
  </div>{diarioAberto&&<div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"><DiarioABC onClose={()=>setDiarioAberto(false)}/></div>}</Shell>;
}
