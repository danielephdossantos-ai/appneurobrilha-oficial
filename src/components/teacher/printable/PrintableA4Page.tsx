import type { ReactNode } from "react";
import type { PrintablePage } from "./activity-types";

export function PrintableA4Page({ moduleTitle, page, children }: { moduleTitle: string; page: PrintablePage; children: ReactNode }) {
  return <section className="printable-a4-page" data-audience={page.audience} data-page-id={page.id}>
    <header className={`printable-page-header ${page.audience === "student" ? "student-page-header" : ""}`}><div><span className="printable-kicker">NeuroBrilha Kids · Caderno de Alfabetização</span><h2>{page.title}</h2>{page.audience === "teacher" && <p>{moduleTitle} · Folha {page.number}</p>}</div>{page.audience === "teacher" && <span className="printable-audience">Somente para o professor</span>}</header>
    {page.audience === "student" && <div className="student-identification"><span>Nome: __________________________________________</span><span>Data: ____/____/________</span><span>Turma: __________________</span><span>Professor(a): ______________________________</span></div>}
    {page.audience === "teacher" && <div className="printable-purpose"><b>Finalidade:</b> {page.purpose}</div>}
    <div className="printable-page-body">{children}</div>
    <footer className="printable-footer"><span>NeuroBrilha Kids</span><span>Folha {page.number} · {page.audience === "teacher" ? "Professor" : "Estudante"}</span></footer>
  </section>;
}
