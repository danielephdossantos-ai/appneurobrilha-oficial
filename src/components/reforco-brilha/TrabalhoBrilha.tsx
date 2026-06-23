import { useState, useRef, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/database/supabase/client";
import { Card } from "@/components/Layout";
import {
  FileText,
  Search,
  Plus,
  Trash2,
  Image as ImageIcon,
  Type,
  Quote,
  Printer,
  Save,
  X,
  Wand2,
  ExternalLink,
  Loader2,
  GraduationCap,
  SpellCheck,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import {
  buscarRecursosExternos,
  type RecursoExterno,
} from "@/lib/recursos-externos.functions";
import { revisarPortugues } from "@/lib/revisar-portugues.functions";
import { TutorTrabalho } from "./TutorTrabalho";


type BlocoTipo = "titulo" | "paragrafo" | "imagem";
interface Bloco {
  id: string;
  tipo: BlocoTipo;
  texto?: string;
  url?: string;
  legenda?: string;
}
interface Fonte {
  titulo: string;
  url: string;
  fonte: string;
}
interface Trabalho {
  id: string;
  child_id: string;
  titulo: string;
  tema: string;
  materia: string | null;
  data_entrega: string | null;
  blocos: Bloco[];
  fontes: Fonte[];
  updated_at: string;
}

interface Props {
  childId: string | null;
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

const FONTE_LABEL: Record<string, string> = {
  wikipedia: "Wikipédia",
  youtube: "YouTube",
  openlibrary: "OpenLibrary",
  wikiversity: "Wikiversidade",
  archive: "Internet Archive",
};

export function TrabalhoBrilha({ childId }: Props) {
  const qc = useQueryClient();
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [criando, setCriando] = useState(false);

  const { data: trabalhos = [] } = useQuery({
    queryKey: ["rb_trabalhos", childId],
    queryFn: async (): Promise<Trabalho[]> => {
      if (!childId) return [];
      const { data, error } = await supabase
        .from("rb_trabalhos" as any)
        .select("*")
        .eq("child_id", childId)
        .order("updated_at", { ascending: false });
      if (error) {
        console.warn("[trabalhos] erro:", error);
        return [];
      }
      return ((data as any) || []) as Trabalho[];
    },
    enabled: !!childId,
  });

  const editando = trabalhos.find((t) => t.id === editandoId) || null;

  async function remover(id: string) {
    if (!confirm("Apagar este trabalho?")) return;
    const { error } = await supabase.from("rb_trabalhos" as any).delete().eq("id", id);
    if (error) {
      toast.error("Erro ao apagar");
      return;
    }
    toast.success("Trabalho apagado");
    qc.invalidateQueries({ queryKey: ["rb_trabalhos", childId] });
  }

  if (editandoId || criando) {
    return (
      <EditorTrabalho
        childId={childId}
        trabalhoExistente={editando}
        onFechar={() => {
          setEditandoId(null);
          setCriando(false);
          qc.invalidateQueries({ queryKey: ["rb_trabalhos", childId] });
        }}
      />
    );
  }

  return (
    <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50/60 to-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-black uppercase tracking-widest text-amber-700 flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Trabalhos Escolares
        </h3>
        <button
          onClick={() => {
            if (!childId) {
              toast.error("Selecione uma criança");
              return;
            }
            setCriando(true);
          }}
          className="text-[11px] font-black uppercase tracking-wider bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1"
        >
          <Plus className="h-3 w-3" />
          Novo trabalho
        </button>
      </div>

      {trabalhos.length === 0 ? (
        <p className="text-xs text-muted-foreground italic">
          Nenhum trabalho ainda. Clique em "Novo trabalho" para montar um com Wikipédia, YouTube, livros e mais.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {trabalhos.map((t) => (
            <div
              key={t.id}
              className="bg-white border-2 border-amber-100 rounded-xl p-3 flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground truncate">{t.titulo}</p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {t.materia || "Tema"}: {t.tema}
                  </p>
                </div>
                <button
                  onClick={() => remover(t.id)}
                  className="p-1 text-muted-foreground hover:text-rose-600 shrink-0"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <span>{t.blocos?.length || 0} blocos · {t.fontes?.length || 0} fontes</span>
                <button
                  onClick={() => setEditandoId(t.id)}
                  className="font-bold text-amber-700 hover:text-amber-900"
                >
                  Abrir →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!childId && (
        <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-3">
          Selecione uma criança no topo para criar trabalhos.
        </p>
      )}
    </Card>
  );
}

// ---------------------------------------------------------------- Editor

function EditorTrabalho({
  childId,
  trabalhoExistente,
  onFechar,
}: {
  childId: string | null;
  trabalhoExistente: Trabalho | null;
  onFechar: () => void;
}) {
  const buscar = useServerFn(buscarRecursosExternos);
  const revisar = useServerFn(revisarPortugues);
  const documentoRef = useRef<HTMLDivElement>(null);

  const [titulo, setTitulo] = useState(trabalhoExistente?.titulo || "");
  const [tema, setTema] = useState(trabalhoExistente?.tema || "");
  const [materia, setMateria] = useState(trabalhoExistente?.materia || "");
  const [blocos, setBlocos] = useState<Bloco[]>(trabalhoExistente?.blocos || []);
  const [fontes, setFontes] = useState<Fonte[]>(trabalhoExistente?.fontes || []);

  const [buscaQuery, setBuscaQuery] = useState(trabalhoExistente?.tema || "");
  const [buscando, setBuscando] = useState(false);
  const [recursos, setRecursos] = useState<RecursoExterno[]>([]);
  const [salvando, setSalvando] = useState(false);
  const [tutorAberto, setTutorAberto] = useState(false);

  // Auto-save
  const [idAtual, setIdAtual] = useState<string | null>(trabalhoExistente?.id ?? null);
  const [autoStatus, setAutoStatus] = useState<"idle" | "salvando" | "salvo" | "erro">("idle");
  const ultimoSalvoRef = useRef<string>("");

  // Revisão
  const [revisando, setRevisando] = useState(false);
  const [problemasPorBloco, setProblemasPorBloco] = useState<Record<string, string[]>>({});
  const [resumoRevisao, setResumoRevisao] = useState<string | null>(null);
  const [avisoCreditos, setAvisoCreditos] = useState<string | null>(null);

  // Preview inline
  const [preview, setPreview] = useState<RecursoExterno | null>(null);


  // Debounced auto-save
  useEffect(() => {
    if (!childId) return;
    if (!titulo.trim() || !tema.trim()) return;
    const snapshot = JSON.stringify({ titulo, tema, materia, blocos, fontes });
    if (snapshot === ultimoSalvoRef.current) return;
    const t = setTimeout(async () => {
      setAutoStatus("salvando");
      const payload = {
        child_id: childId,
        titulo: titulo.trim(),
        tema: tema.trim(),
        materia: materia.trim() || null,
        blocos: blocos as any,
        fontes: fontes as any,
      };
      try {
        if (idAtual) {
          const r = await supabase
            .from("rb_trabalhos" as any)
            .update(payload)
            .eq("id", idAtual);
          if (r.error) throw r.error;
        } else {
          const r = await supabase
            .from("rb_trabalhos" as any)
            .insert(payload)
            .select("id")
            .single();
          if (r.error) throw r.error;
          setIdAtual((r.data as any)?.id ?? null);
        }
        ultimoSalvoRef.current = snapshot;
        setAutoStatus("salvo");
      } catch (e) {
        console.error("auto-save", e);
        setAutoStatus("erro");
      }
    }, 1500);
    return () => clearTimeout(t);
  }, [titulo, tema, materia, blocos, fontes, childId, idAtual]);

  async function rodarRevisao() {
    if (revisando) return;
    const blocosTexto = blocos
      .filter((b) => (b.tipo === "paragrafo" || b.tipo === "titulo") && b.texto)
      .map((b) => ({ id: b.id, texto: b.texto || "" }));
    if (!titulo.trim() && blocosTexto.length === 0) {
      toast.info("Escreva algo primeiro para eu revisar.");
      return;
    }
    setRevisando(true);
    setAvisoCreditos(null);
    try {
      const res = await revisar({ data: { titulo, blocos: blocosTexto } });
      if (!res.ok) {
        setAvisoCreditos(res.mensagem);
        toast.error(res.mensagem);
        return;
      }
      let mudou = 0;
      const mapaProblemas: Record<string, string[]> = {};
      if (res.tituloCorrigido && res.tituloCorrigido !== titulo) {
        setTitulo(res.tituloCorrigido);
        mudou++;
      }
      setBlocos((prev) =>
        prev.map((b) => {
          const corr = res.blocos.find((x) => x.id === b.id);
          if (!corr) return b;
          if (corr.problemas.length) mapaProblemas[b.id] = corr.problemas;
          if (corr.textoCorrigido && corr.textoCorrigido !== b.texto) {
            mudou++;
            return { ...b, texto: corr.textoCorrigido };
          }
          return b;
        }),
      );
      setProblemasPorBloco(mapaProblemas);
      setResumoRevisao(
        mudou > 0
          ? `${res.resumo} (${mudou} correção(ões) aplicadas)`
          : "Português está perfeito! Nenhum erro encontrado.",
      );
      toast.success("Revisão concluída");
    } catch (e: any) {
      toast.error("Erro na revisão: " + (e?.message || ""));
    } finally {
      setRevisando(false);
    }
  }


  async function pesquisar() {
    const q = buscaQuery.trim();
    if (q.length < 3) {
      toast.error("Digite ao menos 3 letras");
      return;
    }
    setBuscando(true);
    try {
      const res = await buscar({ data: { query: q } });
      // Missão Trabalho: somente texto e imagem (sem vídeos / sem links de busca externos)
      const filtrados = (res.resultados || []).filter((r) => {
        if (r.fonte === "youtube" || r.fonte === "youtube-edu") return false;
        if (r.fonte === "archive") {
          const d = (r.descricao || "").toLowerCase();
          // archive marca tipo no início da descrição
          if (d.startsWith("vídeo") || d.startsWith("video") || d.startsWith("áudio") || d.startsWith("audio")) return false;
        }
        return true;
      });
      setRecursos(filtrados);
      if (filtrados.length === 0) toast.info("Nada encontrado");
    } catch (e: any) {
      toast.error("Erro na busca: " + (e?.message || ""));
    } finally {
      setBuscando(false);
    }
  }


  function addBlocoTitulo() {
    setBlocos((b) => [...b, { id: uid(), tipo: "titulo", texto: "Novo título" }]);
  }
  function addBlocoParagrafo(texto = "Escreva aqui...") {
    setBlocos((b) => [...b, { id: uid(), tipo: "paragrafo", texto }]);
  }
  function addBlocoImagem(url: string, legenda = "") {
    setBlocos((b) => [...b, { id: uid(), tipo: "imagem", url, legenda }]);
  }
  function removerBloco(id: string) {
    setBlocos((b) => b.filter((x) => x.id !== id));
  }
  function atualizarBloco(id: string, patch: Partial<Bloco>) {
    setBlocos((b) => b.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  }
  function moverBloco(id: string, dir: -1 | 1) {
    setBlocos((b) => {
      const i = b.findIndex((x) => x.id === id);
      if (i < 0) return b;
      const j = i + dir;
      if (j < 0 || j >= b.length) return b;
      const novo = [...b];
      [novo[i], novo[j]] = [novo[j], novo[i]];
      return novo;
    });
  }

  function addRecursoComoTexto(r: RecursoExterno) {
    setBlocos((b) => [
      ...b,
      { id: uid(), tipo: "titulo", texto: r.titulo },
      { id: uid(), tipo: "paragrafo", texto: r.conteudo || r.descricao || "" },
    ]);
    addFonte(r);
    toast.success("Adicionado ao trabalho");
  }
  function addRecursoImagem(r: RecursoExterno) {
    if (!r.thumbnail) {
      toast.error("Este item não tem imagem");
      return;
    }
    addBlocoImagem(r.thumbnail, r.titulo);
    addFonte(r);
    toast.success("Imagem adicionada");
  }
  function addFonte(r: RecursoExterno) {
    setFontes((f) => {
      if (f.some((x) => x.url === r.url)) return f;
      return [...f, { titulo: r.titulo, url: r.url, fonte: r.fonte }];
    });
  }
  function removerFonte(url: string) {
    setFontes((f) => f.filter((x) => x.url !== url));
  }

  async function salvar() {
    if (!childId) {
      toast.error("Selecione uma criança");
      return;
    }
    if (!titulo.trim() || !tema.trim()) {
      toast.error("Preencha título e tema");
      return;
    }
    setSalvando(true);
    const payload = {
      child_id: childId,
      titulo: titulo.trim(),
      tema: tema.trim(),
      materia: materia.trim() || null,
      blocos: blocos as any,
      fontes: fontes as any,
    };
    const res = trabalhoExistente
      ? await supabase
          .from("rb_trabalhos" as any)
          .update(payload)
          .eq("id", trabalhoExistente.id)
      : await supabase.from("rb_trabalhos" as any).insert(payload);
    setSalvando(false);
    if (res.error) {
      toast.error("Erro ao salvar: " + res.error.message);
      return;
    }
    toast.success("Trabalho salvo!");
    onFechar();
  }

  async function exportarPDF() {
    if (!documentoRef.current) return;
    toast.info("Gerando PDF...");
    const html2pdf = (await import("html2pdf.js")).default;
    await html2pdf()
      .from(documentoRef.current)
      .set({
        margin: [15, 12, 15, 12],
        filename: `${(titulo || "trabalho").replace(/\W+/g, "_")}.pdf`,
        image: { type: "jpeg", quality: 0.92 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      } as any)
      .save();
  }

  return (
    <>
    <Card className="border-2 border-amber-200 bg-white">
      {/* Topo */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h3 className="text-sm font-black uppercase tracking-widest text-amber-700 flex items-center gap-2">
          <FileText className="h-4 w-4" />
          {trabalhoExistente ? "Editar trabalho" : "Novo trabalho"}
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 px-2 py-1 rounded bg-amber-50 border border-amber-200">
            {autoStatus === "salvando"
              ? "Salvando..."
              : autoStatus === "salvo"
                ? "✓ Salvo"
                : autoStatus === "erro"
                  ? "⚠ Erro ao salvar"
                  : "Auto-salvar ativo"}
          </span>
          <button
            onClick={rodarRevisao}
            disabled={revisando}
            className="text-xs font-black bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 shadow disabled:opacity-50"
            title="Revisar ortografia e acentuação"
          >
            {revisando ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <SpellCheck className="h-3.5 w-3.5" />}
            Revisar Português
          </button>
          <button
            onClick={() => {
              if (!tema.trim()) {
                toast.error("Defina o tema do trabalho primeiro");
                return;
              }
              setTutorAberto(true);
            }}
            className="text-xs font-black bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 shadow"
          >
            <GraduationCap className="h-3.5 w-3.5" /> Tutor Brilha
          </button>

          <button
            onClick={exportarPDF}
            className="text-xs font-bold bg-white border-2 border-amber-300 text-amber-800 hover:bg-amber-50 px-3 py-1.5 rounded-lg flex items-center gap-1"
          >
            <Printer className="h-3.5 w-3.5" /> PDF
          </button>
          <button
            onClick={salvar}
            disabled={salvando}
            className="text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 disabled:opacity-50"
          >
            {salvando ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
            Salvar
          </button>
          <button
            onClick={onFechar}
            className="text-xs font-bold bg-white border-2 border-gray-200 text-gray-600 hover:bg-gray-50 px-3 py-1.5 rounded-lg flex items-center gap-1"
          >
            <X className="h-3.5 w-3.5" /> Fechar
          </button>
        </div>
      </div>

      {(resumoRevisao || avisoCreditos) && (
        <div
          className={`mb-3 rounded-lg border-2 px-3 py-2 text-xs ${
            avisoCreditos
              ? "border-amber-300 bg-amber-50 text-amber-900"
              : "border-emerald-300 bg-emerald-50 text-emerald-900"
          }`}
        >
          <div className="flex items-start gap-2">
            {avisoCreditos ? null : <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />}
            <p className="font-bold">{avisoCreditos || resumoRevisao}</p>
          </div>
        </div>
      )}



      <div className="grid lg:grid-cols-[1fr_320px] gap-4">
        {/* Documento + edição */}
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-2">
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Título do trabalho"
              className="text-sm border-2 border-amber-200 rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500"
            />
            <input
              type="text"
              value={materia}
              onChange={(e) => setMateria(e.target.value)}
              placeholder="Matéria (ex: Ciências)"
              className="text-sm border-2 border-amber-200 rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500"
            />
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Tema (ex: Sistema solar)"
              className="sm:col-span-2 text-sm border-2 border-amber-200 rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Botões de bloco */}
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={addBlocoTitulo}
              className="bg-white border-2 border-amber-200 hover:bg-amber-50 text-amber-800 font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
            >
              <Type className="h-3 w-3" /> Título
            </button>
            <button
              onClick={() => addBlocoParagrafo()}
              className="bg-white border-2 border-amber-200 hover:bg-amber-50 text-amber-800 font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
            >
              <Quote className="h-3 w-3" /> Parágrafo
            </button>
          </div>

          {/* Documento (alvo do PDF) */}
          <div
            ref={documentoRef}
            className="bg-white border-2 border-gray-200 rounded-xl p-8 sm:p-10 space-y-5 min-h-[800px] shadow-inner"
            style={{ fontFamily: "Georgia, serif", color: "#1f2937", lineHeight: 1.7 }}
          >

            <header className="border-b-2 border-amber-300 pb-3 mb-2">
              <h1 className="text-2xl font-bold text-amber-900">{titulo || "Título do trabalho"}</h1>
              <p className="text-sm text-gray-600 mt-1">
                {materia && <span className="font-bold">{materia} · </span>}
                <span>{tema || "Tema"}</span>
              </p>
            </header>

            {blocos.length === 0 && (
              <p className="text-sm text-muted-foreground italic">
                Use o painel lateral pra buscar conteúdo e adicionar blocos, ou crie blocos vazios acima.
              </p>
            )}

            {blocos.map((b, idx) => (
              <div key={b.id}>
                <BlocoEditor
                  bloco={b}
                  primeiro={idx === 0}
                  ultimo={idx === blocos.length - 1}
                  onChange={(patch) => atualizarBloco(b.id, patch)}
                  onRemover={() => removerBloco(b.id)}
                  onSubir={() => moverBloco(b.id, -1)}
                  onDescer={() => moverBloco(b.id, +1)}
                />
                {problemasPorBloco[b.id]?.length ? (
                  <ul className="mt-1 ml-2 text-[11px] text-emerald-800 bg-emerald-50/60 border-l-2 border-emerald-400 pl-2 py-1 space-y-0.5">
                    {problemasPorBloco[b.id].map((p, i) => (
                      <li key={i}>✓ {p}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}


            {fontes.length > 0 && (
              <section className="border-t-2 border-amber-300 pt-3 mt-4">
                <h2 className="text-base font-bold text-amber-900 mb-2">Fontes</h2>
                <ol className="text-xs space-y-1 list-decimal pl-4">
                  {fontes.map((f) => (
                    <li key={f.url}>
                      <span className="font-bold">{f.titulo}</span> —{" "}
                      <span className="text-gray-600">{FONTE_LABEL[f.fonte] || f.fonte}</span>{" "}
                      <span className="text-gray-500 break-all">({f.url})</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>

        {/* Painel de busca */}
        <div className="space-y-3">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-3 space-y-2">
            <p className="text-[11px] font-black uppercase tracking-wider text-amber-800">
              Buscar conteúdo
            </p>
            <div className="flex gap-1">
              <input
                type="text"
                value={buscaQuery}
                onChange={(e) => setBuscaQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && pesquisar()}
                placeholder="Tema..."
                className="flex-1 text-xs border-2 border-amber-200 rounded-lg px-2 py-1.5 focus:outline-none focus:border-amber-500"
              />
              <button
                onClick={pesquisar}
                disabled={buscando}
                className="bg-amber-600 hover:bg-amber-700 text-white px-2 rounded-lg disabled:opacity-50"
              >
                {buscando ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
              </button>
            </div>
            <p className="text-[10px] text-amber-700">
              Wikipédia · Livros (OpenLibrary) · Wikiversidade · Textos do Archive
            </p>
            <p className="text-[10px] text-amber-600 italic">
              Apenas textos e imagens — sem vídeos.
            </p>

          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
            {recursos.map((r, i) => (
              <div
                key={`${r.url}-${i}`}
                className="bg-white border-2 border-gray-200 rounded-lg p-2 space-y-1.5"
              >
                <div className="flex gap-2">
                  {r.thumbnail && (
                    <img
                      src={r.thumbnail}
                      alt=""
                      className="h-12 w-12 object-cover rounded shrink-0"
                      crossOrigin="anonymous"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-foreground line-clamp-2">{r.titulo}</p>
                    <p className="text-[10px] text-muted-foreground">{FONTE_LABEL[r.fonte] || r.fonte}</p>
                  </div>
                </div>
                {r.descricao && (
                  <p className="text-[10px] text-gray-600 line-clamp-3">{r.descricao}</p>
                )}
                <div className="flex flex-wrap gap-1">
                  <button
                    onClick={() => addRecursoComoTexto(r)}
                    className="text-[10px] font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 px-2 py-1 rounded flex items-center gap-1"
                  >
                    <Wand2 className="h-3 w-3" /> Texto
                  </button>
                  {r.thumbnail && (
                    <button
                      onClick={() => addRecursoImagem(r)}
                      className="text-[10px] font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 px-2 py-1 rounded flex items-center gap-1"
                    >
                      <ImageIcon className="h-3 w-3" /> Imagem
                    </button>
                  )}
                  <button
                    onClick={() => addFonte(r)}
                    className="text-[10px] font-bold bg-white border border-amber-300 text-amber-800 px-2 py-1 rounded flex items-center gap-1"
                  >
                    <Plus className="h-3 w-3" /> Fonte
                  </button>
                  <button
                    onClick={() => setPreview(r)}
                    className="text-[10px] font-bold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-2 py-1 rounded flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" /> Ver aqui
                  </button>
                </div>
              </div>
            ))}
          </div>


          {fontes.length > 0 && (
            <div className="bg-white border-2 border-amber-200 rounded-xl p-3">
              <p className="text-[11px] font-black uppercase tracking-wider text-amber-800 mb-2">
                Fontes ({fontes.length})
              </p>
              <ul className="space-y-1">
                {fontes.map((f) => (
                  <li key={f.url} className="flex items-start justify-between gap-1 text-[11px]">
                    <span className="truncate">{f.titulo}</span>
                    <button
                      onClick={() => removerFonte(f.url)}
                      className="text-muted-foreground hover:text-rose-600 shrink-0"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>
    {tutorAberto && (
      <TutorTrabalho
        tema={tema}
        materia={materia}
        modo="trabalho"
        onFechar={() => setTutorAberto(false)}
      />
    )}
    {preview && (
      <RecursoPreviewModal
        recurso={preview}
        onFechar={() => setPreview(null)}
        onAdicionarTexto={(r) => {
          addRecursoComoTexto(r);
          setPreview(null);
        }}
        onAdicionarImagem={(r) => {
          addRecursoImagem(r);
          setPreview(null);
        }}
      />
    )}
  </>

  );
}

function BlocoEditor({
  bloco,
  primeiro,
  ultimo,
  onChange,
  onRemover,
  onSubir,
  onDescer,
}: {
  bloco: Bloco;
  primeiro: boolean;
  ultimo: boolean;
  onChange: (patch: Partial<Bloco>) => void;
  onRemover: () => void;
  onSubir: () => void;
  onDescer: () => void;
}) {
  return (
    <div className="group relative pl-1">
      <div className="absolute -left-1 -top-2 flex items-center gap-1 print:hidden bg-white border border-amber-200 rounded-md shadow-sm px-1 py-0.5 opacity-70 hover:opacity-100">
        <button
          onClick={onSubir}
          disabled={primeiro}
          className="text-xs text-gray-500 hover:text-amber-700 disabled:opacity-30 px-1"
          title="Subir"
        >
          ▲
        </button>
        <button
          onClick={onDescer}
          disabled={ultimo}
          className="text-xs text-gray-500 hover:text-amber-700 disabled:opacity-30 px-1"
          title="Descer"
        >
          ▼
        </button>
        <button
          onClick={() => {
            if (confirm("Apagar este bloco?")) onRemover();
          }}
          className="text-rose-600 hover:bg-rose-50 rounded px-1 flex items-center gap-1 text-[10px] font-bold"
          title="Apagar bloco"
        >
          <Trash2 className="h-3 w-3" /> Apagar
        </button>
      </div>


      {bloco.tipo === "titulo" && (
        <input
          value={bloco.texto || ""}
          onChange={(e) => onChange({ texto: e.target.value })}
          className="w-full text-lg font-bold text-amber-900 bg-transparent border-0 border-b border-transparent focus:border-amber-300 focus:outline-none py-1"
        />
      )}
      {bloco.tipo === "paragrafo" && (
        <textarea
          value={bloco.texto || ""}
          onChange={(e) => {
            onChange({ texto: e.target.value });
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
          rows={3}
          className="w-full text-sm leading-relaxed bg-transparent border-0 focus:outline-none resize-none"
          style={{ fontFamily: "Georgia, serif" }}
        />
      )}
      {bloco.tipo === "imagem" && bloco.url && (
        <figure className="space-y-1">
          <img
            src={bloco.url}
            alt={bloco.legenda || ""}
            crossOrigin="anonymous"
            className="max-h-72 mx-auto rounded"
          />
          <input
            value={bloco.legenda || ""}
            onChange={(e) => onChange({ legenda: e.target.value })}
            placeholder="Legenda"
            className="w-full text-xs text-center italic text-gray-600 bg-transparent border-0 focus:outline-none"
          />
        </figure>
      )}
    </div>
  );
}

// ---------------------------------------------------------------- Preview inline de recursos

function youtubeIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1) || null;
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return v;
      const m = u.pathname.match(/\/embed\/([^/?]+)/);
      if (m) return m[1];
    }
  } catch {}
  return null;
}

function archiveEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    if (!u.hostname.includes("archive.org")) return null;
    // archive.org/details/<id> → archive.org/embed/<id>
    const m = u.pathname.match(/\/details\/([^/]+)/);
    if (m) return `https://archive.org/embed/${m[1]}`;
  } catch {}
  return null;
}

function RecursoPreviewModal({
  recurso,
  onFechar,
  onAdicionarTexto,
  onAdicionarImagem,
}: {
  recurso: RecursoExterno;
  onFechar: () => void;
  onAdicionarTexto: (r: RecursoExterno) => void;
  onAdicionarImagem: (r: RecursoExterno) => void;
}) {
  const ytId = recurso.fonte === "youtube" || recurso.fonte === "youtube-edu"
    ? youtubeIdFromUrl(recurso.url)
    : null;
  const archive = recurso.fonte === "archive" ? archiveEmbed(recurso.url) : null;
  const temConteudo = !!(recurso.conteudo && recurso.conteudo.trim().length > 0);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3"
      onClick={onFechar}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[92vh] rounded-2xl border-4 border-amber-300 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-start justify-between gap-3 px-4 py-3 border-b-2 border-amber-200 bg-amber-50">
          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-widest text-amber-700">
              {FONTE_LABEL[recurso.fonte] || recurso.fonte}
            </p>
            <h3 className="text-base font-black text-amber-900 truncate">{recurso.titulo}</h3>
          </div>
          <button
            onClick={onFechar}
            className="p-1.5 rounded-lg hover:bg-amber-100 text-amber-800 shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* corpo */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {ytId && (
            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1`}
                title={recurso.titulo}
                className="w-full h-full"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {archive && (
            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
              <iframe
                src={archive}
                title={recurso.titulo}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          )}

          {!ytId && !archive && recurso.thumbnail && (
            <img
              src={recurso.thumbnail}
              alt=""
              crossOrigin="anonymous"
              className="max-h-72 mx-auto rounded-lg"
            />
          )}

          {recurso.descricao && (
            <p className="text-sm text-gray-700 italic leading-relaxed">
              {recurso.descricao}
            </p>
          )}

          {temConteudo && (
            <div
              className="text-sm leading-relaxed text-gray-900 whitespace-pre-wrap bg-amber-50/40 border border-amber-100 rounded-lg p-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {recurso.conteudo}
            </div>
          )}

          {!ytId && !archive && !temConteudo && !recurso.descricao && (
            <p className="text-xs text-muted-foreground italic">
              Sem prévia de texto. Adicione como fonte ou imagem ao seu trabalho.
            </p>
          )}
        </div>

        {/* footer ações */}
        <div className="border-t-2 border-amber-200 p-3 bg-amber-50/60 flex flex-wrap gap-2 justify-end">
          <button
            onClick={onFechar}
            className="text-xs font-bold bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-3 py-1.5 rounded-lg"
          >
            Fechar
          </button>
          {recurso.thumbnail && (
            <button
              onClick={() => onAdicionarImagem(recurso)}
              className="text-xs font-bold bg-white border-2 border-amber-300 text-amber-800 hover:bg-amber-100 px-3 py-1.5 rounded-lg flex items-center gap-1"
            >
              <ImageIcon className="h-3 w-3" /> Adicionar imagem
            </button>
          )}
          <button
            onClick={() => onAdicionarTexto(recurso)}
            className="text-xs font-black bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1"
          >
            <Wand2 className="h-3 w-3" /> Adicionar ao trabalho
          </button>
        </div>
      </div>
    </div>
  );
}

