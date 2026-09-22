import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, BookOpenCheck, GraduationCap, Home, Printer } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";
import { Button } from "@/components/ui/button";
import { getAula } from "@/escola-brilha/registry";
import { ApostilaA4 } from "@/modules/professor/apostila/ApostilaA4";
import { gerarApostila, termosDaAula, type ApostilaImagem } from "@/modules/professor/apostila/gerar-apostila";
import { gerarApostilaEI } from "@/modules/professor/apostila/gerar-apostila-ei";

export const Route = createFileRoute("/area-professor/apostila/$codigo")({
  component: ApostilaImprimir,
  head: () => ({
    meta: [
      { title: "Apostila A4 da aula · Área do Professor | NeuroBrilha Kids" },
      {
        name: "description",
        content:
          "Apostila A4 pronta para imprimir: guia do professor, folhas do estudante, gabarito e carta para a família.",
      },
      { property: "og:title", content: "Apostila A4 da aula · Área do Professor" },
      {
        property: "og:description",
        content: "Material de sala de aula adaptado, gerado a partir da aula do app.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

type Filtro = "tudo" | "professor" | "estudante" | "familia";

function ApostilaImprimir() {
  const { codigo } = Route.useParams();
  const apostilaEI = useMemo(
    () => (codigo.includes("__") ? gerarApostilaEI(codigo) : null),
    [codigo],
  );
  const aula = useMemo(() => (apostilaEI ? undefined : getAula(codigo)), [codigo, apostilaEI]);
  const [extras, setExtras] = useState<ApostilaImagem[]>([]);
  const [filtro, setFiltro] = useState<Filtro>("tudo");

  useEffect(() => {
    if (!aula) return;
    const termos = termosDaAula(aula);
    if (termos.length === 0) return;
    let ativo = true;
    void (async () => {
      const { data } = await supabase
        .from("rb_midias")
        .select("url,titulo,tags")
        .eq("tipo", "imagem")
        .overlaps("tags", termos)
        .limit(8);
      if (!ativo || !data) return;
      setExtras(
        data
          .filter((m) => typeof m.url === "string" && m.url.length > 0)
          .map((m) => ({ url: m.url as string, legenda: m.titulo ?? undefined })),
      );
    })();
    return () => {
      ativo = false;
    };
  }, [aula]);

  useEffect(() => {
    const reset = () => setFiltro("tudo");
    window.addEventListener("afterprint", reset);
    return () => window.removeEventListener("afterprint", reset);
  }, []);

  const apostila = useMemo(() => (aula ? gerarApostila(aula, extras) : null), [aula, extras]);

  function imprimir(modo: Filtro) {
    setFiltro(modo);
    requestAnimationFrame(() => requestAnimationFrame(() => window.print()));
  }

  if (!aula || !apostila)
    return (
      <Shell>
        <main className="p-8 text-center">
          <p className="font-bold">Aula não encontrada: {codigo}</p>
          <Link to="/area-professor/apostilas" className="mt-3 inline-block font-bold text-primary">
            Voltar para as apostilas
          </Link>
        </main>
      </Shell>
    );

  return (
    <Shell>
      <main className="mx-auto max-w-5xl space-y-5 p-4 md:p-6 print:max-w-none print:p-0">
        <div className="print:hidden flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/area-professor/apostilas"
            className="inline-flex min-h-11 items-center gap-2 font-bold text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Apostilas
          </Link>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => imprimir("professor")}>
              <GraduationCap className="mr-2 h-4 w-4" />
              Guia do professor
            </Button>
            <Button variant="outline" onClick={() => imprimir("estudante")}>
              <BookOpenCheck className="mr-2 h-4 w-4" />
              Folhas da criança
            </Button>
            <Button variant="outline" onClick={() => imprimir("familia")}>
              <Home className="mr-2 h-4 w-4" />
              Carta da família
            </Button>
            <Button onClick={() => imprimir("tudo")}>
              <Printer className="mr-2 h-4 w-4" />
              Apostila completa
            </Button>
          </div>
        </div>
        <p className="print:hidden rounded-xl bg-slate-100 p-4 text-sm text-muted-foreground">
          {apostila.paginas.length} folhas A4. As primeiras folhas são do professor; o restante é
          atividade impressa da criança, sem gabarito junto.
        </p>
        <ApostilaA4 apostila={apostila} filtro={filtro} />
      </main>
    </Shell>
  );
}
