import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpenCheck, ExternalLink, Search, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import { PrintableA4Page } from "@/components/teacher/printable/PrintableA4Page";
import { PrintableActivityRenderer } from "@/components/teacher/printable/PrintableActivityRenderer";
import { PrintableToolbar } from "@/components/teacher/printable/PrintableToolbar";
import type { PrintablePage } from "@/components/teacher/printable/activity-types";
import { TEACHER_LITERACY_WORKBOOK } from "@/data/teacher-literacy-workbook";
import { REAL_TEACHER_LITERACY_WORKBOOK } from "@/data/teacher-literacy-real-workbook";
import { TEACHER_LITERACY_EI_WORKBOOK } from "@/data/teacher-literacy-ei-workbook";
import { TEACHER_BIBLIOTECA_ENCANTADA_WORKBOOK } from "@/data/teacher-literacy-biblioteca-encantada-workbook";
import "@/components/teacher/printable/printable-teacher.css";

export const Route = createFileRoute("/area-professor/alfabetizacao")({ component: CursoAlfabetizacao });
type Tab = "formacao" | "caderno" | "recursos" | "acompanhamento";

function CursoAlfabetizacao() {
  const [tab, setTab] = useState<Tab>("caderno");
  const [moduleIndex, setModuleIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "teacher" | "student">("all");
  const appWorkbook = [...TEACHER_LITERACY_EI_WORKBOOK, ...TEACHER_BIBLIOTECA_ENCANTADA_WORKBOOK, ...REAL_TEACHER_LITERACY_WORKBOOK];
  const workbook = tab === "formacao" ? TEACHER_LITERACY_WORKBOOK : appWorkbook;
  const safeModuleIndex = Math.min(moduleIndex, workbook.length - 1);
  const module = workbook[safeModuleIndex];
  const visiblePages = useMemo(() => filter === "all" ? module.pages : module.pages.filter(page => page.audience === filter), [filter, module]);
  const page = visiblePages[Math.min(pageIndex, visiblePages.length - 1)] ?? module.pages[0];
  const selectModule = (index: number) => { setModuleIndex(index); setPageIndex(0); };
  const selectTab = (value: Tab) => { setTab(value); setModuleIndex(0); setPageIndex(0); setFilter("all"); };
  const selectFilter = (value: "all" | "teacher" | "student") => { setFilter(value); setPageIndex(0); };
  const movePage = (direction: number) => setPageIndex(position => Math.min(Math.max(position + direction, 0), visiblePages.length - 1));
  const print = (mode: "current" | "student" | "module") => { document.body.dataset.printMode = mode; window.print(); window.setTimeout(() => { delete document.body.dataset.printMode; }, 1000); };
  const tabs: [Tab, string][] = [["formacao", "Formação do professor"], ["caderno", "Caderno de atividades"], ["recursos", "Recursos do aplicativo"], ["acompanhamento", "Acompanhamento"]];

  return <Shell><main className="printable-course mx-auto max-w-[1500px] space-y-5"><header className="printable-course-hero rounded-[24px] bg-[#087f73] p-6 text-white shadow-lg"><Link to="/area-professor" className="inline-flex items-center gap-2 font-bold text-white/85 print:hidden"><ArrowLeft /> Área do Professor</Link><div className="mt-5 flex items-end justify-between gap-5"><div><p className="text-sm font-black uppercase tracking-[.18em] text-[#f4d06f]">Biblioteca imprimível conectada ao app · {appWorkbook.length} aulas</p><h1 className="mt-2 text-4xl font-black md:text-6xl">Alfabetização do Professor</h1><p className="mt-3 max-w-3xl text-lg text-white/85">Atividade digital original, roteiro de aplicação, folha A4 adaptada e gabarito no mesmo lugar.</p></div><BookOpenCheck className="hidden h-16 w-16 text-[#f4d06f] md:block" /></div></header><nav className="course-tabs print:hidden" aria-label="Seções do curso">{tabs.map(([value, label]) => <button key={value} className={tab === value ? "is-active" : ""} onClick={() => selectTab(value)}>{label}</button>)}</nav>{tab === "caderno" && <WorkbookView workbook={appWorkbook} moduleIndex={safeModuleIndex} module={module} page={page} visiblePages={visiblePages} filter={filter} selectModule={selectModule} selectFilter={selectFilter} movePage={movePage} print={print} setPageIndex={setPageIndex} />}{tab === "formacao" && <FormationView module={module} />}{tab === "recursos" && <ResourcesView module={module} />}{tab === "acompanhamento" && <TrackingView />}</main></Shell>;
}

function WorkbookView({ workbook, moduleIndex, module, page, visiblePages, filter, selectModule, selectFilter, movePage, print, setPageIndex }: { workbook: typeof REAL_TEACHER_LITERACY_WORKBOOK; moduleIndex: number; module: typeof TEACHER_LITERACY_WORKBOOK[number]; page: PrintablePage; visiblePages: PrintablePage[]; filter: "all" | "teacher" | "student"; selectModule: (index: number) => void; selectFilter: (value: "all" | "teacher" | "student") => void; movePage: (direction: number) => void; print: (mode: "current" | "student" | "module") => void; setPageIndex: (index: number) => void }) {
  const [query, setQuery] = useState("");
  const prepareHomework = () => { if (!module.source) return; sessionStorage.setItem("teacher-homework-draft", JSON.stringify({ title: module.title.replace(/^\d+\. /, ""), subject: "Língua Portuguesa", instructions: `Realize a atividade ${module.title.replace(/^\d+\. /, "")} no NeuroBrilha.`, route: module.source.route })); window.location.assign("/area-professor/tarefas"); };
  const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
  const results = workbook
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => !normalizedQuery || `${item.title} ${item.summary} ${item.source?.location ?? ""}`.toLocaleLowerCase("pt-BR").includes(normalizedQuery));
  const counts = workbook.reduce<Record<string, number>>((total, item) => {
    const source = item.source?.app ?? "Formação";
    total[source] = (total[source] ?? 0) + 1;
    return total;
  }, {});

  return <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
    <aside className="print:hidden"><div className="sticky top-24 space-y-3">
      <div className="rounded-2xl border bg-white p-4">
        <h2 className="font-black text-[#075e55]">{workbook.length} atividades reais do app</h2>
        <p className="mt-1 text-sm text-slate-500">{Object.entries(counts).map(([name, count]) => `${name}: ${count}`).join(" · ")}</p>
        <label className="workbook-search"><Search /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar aula ou origem" /></label>
        <small className="workbook-result-count">Mostrando {results.length} de {workbook.length}</small>
      </div>
      <nav className="max-h-[70vh] space-y-2 overflow-y-auto pr-1">{results.map(({ item, index }) => <button key={item.id} onClick={() => selectModule(index)} className={`w-full rounded-xl border p-3 text-left text-sm font-bold ${index === moduleIndex ? "border-[#087f73] bg-[#d9f3ed] text-[#075e55]" : "bg-white"}`}><span className="mr-2 text-[#f0a900]">{String(index + 1).padStart(3, "0")}</span>{item.title.replace(/^\d+\. /, "")}<small className="block pl-9 pt-1 font-normal text-slate-500">{item.source?.app}</small></button>)}</nav>
    </div></aside>
    <section className="printable-preview min-w-0">
      <PrintableToolbar pageNumber={page.number} total={module.pages.length} filter={filter} onFilter={selectFilter} onPrevious={() => movePage(-1)} onNext={() => movePage(1)} onPrint={print} />
      {module.source && <div className="source-panel print:hidden"><div><span>Origem verificada</span><b>{module.source.location}</b><small>{module.source.bncc ? `BNCC ${module.source.bncc} · ` : ""}mecânica: {module.source.activityType}</small></div><div><a href={module.source.route} target="_blank" rel="noreferrer" className="source-action">Abrir somente esta aula <ExternalLink /></a><button type="button" className="source-action" onClick={prepareHomework}><Send /> Enviar como tarefa</button></div></div>}
      <div className="mt-3 rounded-2xl bg-[#eaf5f2] px-4 py-3 print:hidden"><b>{module.title}</b><span className="mx-2 text-slate-400">·</span>{page.title}<span className="mx-2 text-slate-400">·</span>{page.audience === "teacher" ? "material do professor" : "material do estudante"}</div>
      <div className="page-thumbnails print:hidden">{module.pages.map(item => <button key={item.id} onClick={() => { selectFilter("all"); setPageIndex(item.number - 1); }} className={item.id === page.id ? "is-active" : ""}><span>Folha {item.number}</span><b>{item.title}</b><small>{item.audience === "teacher" ? "Professor" : "Estudante"}</small></button>)}</div>
      <PrintablePageView moduleTitle={module.title} page={page} /><div className="printable-print-set">{module.pages.map(item => <PrintablePageView key={item.id} moduleTitle={module.title} page={item} />)}</div>
    </section>
  </div>;
}

function FormationView({ module }: { module: typeof TEACHER_LITERACY_WORKBOOK[number] }) { return <section className="course-panel"><h2>Formação do professor</h2><p>O módulo <b>{module.title}</b> organiza uma meta observável, modelagem, prática e decisão pedagógica.</p><div className="formation-grid"><div><b>Habilidade</b><p>{module.pages[0].purpose}</p></div><div><b>Uso profissional</b><p>Leia a Folha 1, apresente a Folha 2 e registre evidências na Folha 7.</p></div><div><b>Intervenção</b><p>Use a Folha 8 para escolher avançar, praticar ou retomar.</p></div></div></section>; }
function ResourcesView({ module }: { module: typeof TEACHER_LITERACY_WORKBOOK[number] }) { return <section className="course-panel"><h2>Recursos do aplicativo</h2><p>Recomendações do módulo, com motivo pedagógico e link somente quando a rota foi verificada.</p><div className="resource-grid">{module.relatedResources.map(resource => <article key={`${resource.source}-${resource.title}`}><span>{resource.source}</span><h3>{resource.title}</h3><p>{resource.reason}</p>{resource.route && <Link to={resource.route as never} className="resource-link">Abrir recurso <ExternalLink /></Link>}</article>)}</div></section>; }
function TrackingView() { return <section className="course-panel"><h2>Acompanhamento</h2><p>Imprima a Folha 7 para registrar evidências, apoio e próximo passo. Quando houver aluno autorizado, use o perfil e o acompanhamento já existentes na Área do Professor.</p><Link to="/area-professor/acompanhamento/$linkId" params={{ linkId: "" }} className="resource-link">Abrir acompanhamento <ExternalLink /></Link></section>; }
function PrintablePageView({ moduleTitle, page }: { moduleTitle: string; page: PrintablePage }) { return <PrintableA4Page moduleTitle={moduleTitle} page={page}>{page.activity ? <PrintableActivityRenderer activity={page.activity} /> : null}</PrintableA4Page>; }
