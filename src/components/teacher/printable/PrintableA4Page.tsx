import type { ReactNode } from "react";
import type { PrintablePage } from "./activity-types";

export function PrintableA4Page({ moduleTitle, page, children }: { moduleTitle: string; page: PrintablePage; children: ReactNode }) {
  return <section className="printable-a4-page" data-audience={page.audience} data-page-id={page.id}>
    <header className="printable-page-header"><div><span className="printable-kicker">NeuroBrilha Kids · Caderno de Alfabetização</span><h2>{page.title}</h2><p>{moduleTitle} · Folha {page.number} de 8</p></div><span className="printable-audience">{page.audience === "teacher" ? "Somente para o professor" : "Atividade do estudante"}</span></header>
    {page.audience === "student" && <div className="student-identification"><span>Nome: __________________________________________</span><span>Data: ____/____/________</span><span>Turma: __________________</span><span>Professor(a): ______________________________</span></div>}
    <div className="printable-purpose"><b>Finalidade:</b> {page.purpose}</div>
    <div className="printable-page-body">{children}</div>
    <footer className="printable-footer"><span>NeuroBrilha Kids</span><span>Folha {page.number} · {page.audience === "teacher" ? "Professor" : "Estudante"}</span></footer>
  </section>;
}