import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, BookOpen, ChevronDown, ChevronRight, Library } from "lucide-react";
import { Shell } from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/biblioteca-pedagogica")({
  head: () => ({
    meta: [
      { title: "Biblioteca Pedagógica — Neuro Brilha Kids" },
      {
        name: "description",
        content:
          "Biblioteca oficial organizada por Etapa → Ano → Disciplina → Unidade Temática → Objeto de Conhecimento → Código BNCC → Aula.",
      },
    ],
  }),
  component: BibliotecaPedagogica,
});

type Hab = {
  codigo: string;
  titulo: string;
  objetivo: string;
  ano: string;
  disciplina: string;
};

// Ordem canônica das etapas / anos.
const ETAPAS: Array<{ nome: string; anos: string[] }> = [
  { nome: "Educação Infantil", anos: ["Educação Infantil"] },
  {
    nome: "Ensino Fundamental I",
    anos: ["1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano"],
  },
  {
    nome: "Ensino Fundamental II",
    anos: ["6º Ano", "7º Ano", "8º Ano", "9º Ano"],
  },
  { nome: "Ensino Médio", anos: ["Ensino Médio"] },
];

// Expande faixas ("1º ao 5º Ano") para todos os anos incluídos.
function anosDoRegistro(ano: string): string[] {
  const a = (ano || "").trim();
  const m = a.match(/(\d)[ºo]?\s*ao\s*(\d)[ºo]?\s*Ano/i);
  if (m) {
    const [ini, fim] = [parseInt(m[1]!, 10), parseInt(m[2]!, 10)];
    const out: string[] = [];
    for (let i = ini; i <= fim; i++) out.push(`${i}º Ano`);
    return out;
  }
  return [a];
}

// Mapa oficial das Unidades Temáticas da BNCC por componente curricular.
// Deriva a unidade a partir do 2º par de letras do código (LP, MA, CI, HI, GE...).
function componenteDoCodigo(codigo: string): string {
  // EI03EF01 -> EF ;  EF01LP09 -> LP ;  EM13CNT101 -> CNT
  const m = codigo.match(/^(EI|EF|EM)\d{2,4}([A-Z]{2,3})\d+/);
  return m?.[2] ?? "";
}

function unidadeTematica(codigo: string, disciplina: string): string {
  const comp = componenteDoCodigo(codigo);
  const num = parseInt(codigo.match(/(\d+)$/)?.[1] ?? "0", 10);
  // Português
  if (comp === "LP") {
    if (codigo.startsWith("EI")) return "Escuta, fala, pensamento e imaginação";
    // Distribuição BNCC: Leitura, Produção de textos, Oralidade, Análise linguística.
    if (num <= 10) return "Leitura / Escuta";
    if (num <= 20) return "Produção de textos";
    if (num <= 25) return "Oralidade";
    return "Análise linguística e semiótica";
  }
  // Matemática
  if (comp === "MA") {
    if (num <= 5) return "Números";
    if (num <= 10) return "Álgebra";
    if (num <= 18) return "Geometria";
    if (num <= 24) return "Grandezas e Medidas";
    return "Probabilidade e Estatística";
  }
  // Ciências
  if (comp === "CI") {
    if (num <= 5) return "Matéria e Energia";
    if (num <= 10) return "Vida e Evolução";
    return "Terra e Universo";
  }
  // História
  if (comp === "HI") return "Mundos pessoais, sociais e históricos";
  // Geografia
  if (comp === "GE") return "O sujeito, o lugar e o mundo";
  // Arte
  if (comp === "AR") return "Linguagens artísticas";
  // Ed. Física
  if (comp === "EF" && codigo.startsWith("EF")) return "Práticas corporais";
  // Inglês
  if (comp === "LI") return "Eixo Oralidade / Leitura / Escrita";
  // Religião
  if (comp === "ER") return "Identidades, alteridades e crenças";
  // Ed. Infantil — campos de experiência
  if (comp === "EF") return "O eu, o outro e o nós";
  if (comp === "TS") return "Traços, sons, cores e formas";
  if (comp === "ET") return "Escuta, fala, pensamento e imaginação";
  if (comp === "CG") return "Corpo, gestos e movimentos";
  if (comp === "EO") return "Espaços, tempos, quantidades, relações e transformações";
  return disciplina || "Componente Curricular";
}

// Nó de árvore genérico.
function TreeNode({
  label,
  count,
  defaultOpen = false,
  icon,
  children,
}: {
  label: string;
  count?: number;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-l-2 border-border/40 pl-3 my-1">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 w-full text-left py-1.5 hover:bg-accent/30 rounded px-2 transition-colors"
      >
        {open ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
        {icon}
        <span className="font-medium text-foreground">{label}</span>
        {typeof count === "number" && (
          <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
            {count}
          </span>
        )}
      </button>
      {open && <div className="ml-2 mt-1">{children}</div>}
    </div>
  );
}

function BibliotecaPedagogica() {
  const [rows, setRows] = useState<Hab[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("bncc_habilidades")
        .select("codigo_bncc, titulo, objetivo, ano, disciplina")
        .order("codigo_bncc", { ascending: true });
      const mapa = new Map<string, Hab>();
      for (const r of data ?? []) {
        // Dedup absoluto por código BNCC.
        if (mapa.has(r.codigo_bncc)) continue;
        mapa.set(r.codigo_bncc, {
          codigo: r.codigo_bncc,
          titulo: r.titulo ?? r.codigo_bncc,
          objetivo: r.objetivo ?? "",
          ano: r.ano ?? "",
          disciplina: r.disciplina ?? "Geral",
        });
      }
      setRows(Array.from(mapa.values()));
      setLoading(false);
    })();
  }, []);

  // Índice hierárquico: Etapa → Ano → Disciplina → Unidade → Objeto (título) → Habilidade.
  const arvore = useMemo(() => {
    type Objeto = { titulo: string; habilidades: Hab[] };
    type Unidade = { nome: string; objetos: Map<string, Objeto> };
    type Disciplina = { nome: string; unidades: Map<string, Unidade> };
    type Ano = { nome: string; disciplinas: Map<string, Disciplina> };
    type Etapa = { nome: string; anos: Map<string, Ano> };

    const etapas = new Map<string, Etapa>();
    for (const etapaCfg of ETAPAS) {
      etapas.set(etapaCfg.nome, { nome: etapaCfg.nome, anos: new Map() });
    }

    function achaEtapa(ano: string): string {
      for (const e of ETAPAS) if (e.anos.includes(ano)) return e.nome;
      return "Outros";
    }

    for (const h of rows) {
      for (const ano of anosDoRegistro(h.ano)) {
        const etapaNome = achaEtapa(ano);
        if (!etapas.has(etapaNome)) etapas.set(etapaNome, { nome: etapaNome, anos: new Map() });
        const etapa = etapas.get(etapaNome)!;
        if (!etapa.anos.has(ano)) etapa.anos.set(ano, { nome: ano, disciplinas: new Map() });
        const anoNode = etapa.anos.get(ano)!;

        const disc = h.disciplina || "Geral";
        if (!anoNode.disciplinas.has(disc))
          anoNode.disciplinas.set(disc, { nome: disc, unidades: new Map() });
        const discNode = anoNode.disciplinas.get(disc)!;

        const uni = unidadeTematica(h.codigo, disc);
        if (!discNode.unidades.has(uni))
          discNode.unidades.set(uni, { nome: uni, objetos: new Map() });
        const uniNode = discNode.unidades.get(uni)!;

        // Objeto de conhecimento = título da habilidade (dado disponível).
        const objKey = h.titulo || h.codigo;
        if (!uniNode.objetos.has(objKey))
          uniNode.objetos.set(objKey, { titulo: objKey, habilidades: [] });
        // Dedup por código dentro do objeto.
        const obj = uniNode.objetos.get(objKey)!;
        if (!obj.habilidades.some((x) => x.codigo === h.codigo))
          obj.habilidades.push(h);
      }
    }
    return etapas;
  }, [rows]);

  const totalHab = rows.length;

  return (
    <Shell>
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Library className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Biblioteca Pedagógica</h1>
            <p className="text-sm text-muted-foreground">
              {loading ? "Carregando…" : `${totalHab} habilidades BNCC únicas`}
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-muted/40 border border-border/40 p-3 text-xs text-muted-foreground mb-4">
          Hierarquia: <b>Etapa</b> → <b>Ano</b> → <b>Disciplina</b> → <b>Unidade Temática</b> →{" "}
          <b>Objeto de Conhecimento</b> → <b>Código BNCC</b> → <b>Aula</b>. Cada código aparece
          apenas uma vez.
        </div>

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Carregando biblioteca…</div>
        ) : (
          <div className="rounded-xl border border-border/60 bg-card p-3">
            {Array.from(arvore.values()).map((etapa) => {
              const totalEtapa = Array.from(etapa.anos.values()).reduce(
                (acc, a) =>
                  acc +
                  Array.from(a.disciplinas.values()).reduce(
                    (b, d) =>
                      b +
                      Array.from(d.unidades.values()).reduce(
                        (c, u) =>
                          c +
                          Array.from(u.objetos.values()).reduce(
                            (e, o) => e + o.habilidades.length,
                            0,
                          ),
                        0,
                      ),
                    0,
                  ),
                0,
              );
              if (totalEtapa === 0) return null;
              return (
                <TreeNode
                  key={etapa.nome}
                  label={etapa.nome}
                  count={totalEtapa}
                  icon={<BookOpen className="w-4 h-4 text-primary" />}
                >
                  {Array.from(etapa.anos.values()).map((ano) => {
                    const totalAno = Array.from(ano.disciplinas.values()).reduce(
                      (acc, d) =>
                        acc +
                        Array.from(d.unidades.values()).reduce(
                          (b, u) =>
                            b +
                            Array.from(u.objetos.values()).reduce(
                              (c, o) => c + o.habilidades.length,
                              0,
                            ),
                          0,
                        ),
                      0,
                    );
                    return (
                      <TreeNode key={ano.nome} label={ano.nome} count={totalAno}>
                        {Array.from(ano.disciplinas.values())
                          .sort((a, b) => a.nome.localeCompare(b.nome))
                          .map((disc) => {
                            const totalDisc = Array.from(disc.unidades.values()).reduce(
                              (b, u) =>
                                b +
                                Array.from(u.objetos.values()).reduce(
                                  (c, o) => c + o.habilidades.length,
                                  0,
                                ),
                              0,
                            );
                            return (
                              <TreeNode
                                key={disc.nome}
                                label={disc.nome}
                                count={totalDisc}
                              >
                                {Array.from(disc.unidades.values())
                                  .sort((a, b) => a.nome.localeCompare(b.nome))
                                  .map((uni) => {
                                    const totalUni = Array.from(uni.objetos.values()).reduce(
                                      (c, o) => c + o.habilidades.length,
                                      0,
                                    );
                                    return (
                                      <TreeNode
                                        key={uni.nome}
                                        label={uni.nome}
                                        count={totalUni}
                                      >
                                        {Array.from(uni.objetos.values())
                                          .sort((a, b) =>
                                            a.titulo.localeCompare(b.titulo),
                                          )
                                          .map((obj) => (
                                            <TreeNode
                                              key={obj.titulo}
                                              label={obj.titulo}
                                              count={obj.habilidades.length}
                                            >
                                              <ul className="ml-4 mt-1 space-y-1">
                                                {obj.habilidades.map((h) => (
                                                  <li key={h.codigo}>
                                                    <Link
                                                      to="/escola-brilha/$codigo"
                                                      params={{ codigo: h.codigo }}
                                                      className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-colors"
                                                    >
                                                      <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">
                                                        {h.codigo}
                                                      </span>
                                                      <span className="text-sm text-foreground/80 truncate">
                                                        {h.objetivo || h.titulo}
                                                      </span>
                                                    </Link>
                                                  </li>
                                                ))}
                                              </ul>
                                            </TreeNode>
                                          ))}
                                      </TreeNode>
                                    );
                                  })}
                              </TreeNode>
                            );
                          })}
                      </TreeNode>
                    );
                  })}
                </TreeNode>
              );
            })}
          </div>
        )}
      </div>
    </Shell>
  );
}
