import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { supabase } from "@/database/supabase/client";
import { Image as ImageIcon, Plus, Search, Trash2, Tag, Link as LinkIcon } from "lucide-react";

export const Route = createFileRoute("/banco-midias")({
  component: BancoMidiasPage,
});

const CATEGORIAS = [
  { id: "letras", label: "Letras", emoji: "🔤" },
  { id: "silabas", label: "Sílabas", emoji: "🔠" },
  { id: "numeros", label: "Números", emoji: "🔢" },
  { id: "formas", label: "Formas", emoji: "🔷" },
  { id: "animais", label: "Animais", emoji: "🐶" },
  { id: "objetos", label: "Objetos", emoji: "🧸" },
  { id: "cotidiano", label: "Cotidiano", emoji: "🏠" },
  { id: "mapas", label: "Mapas", emoji: "🗺️" },
  { id: "graficos", label: "Gráficos", emoji: "📊" },
] as const;

const TIPOS = ["imagem", "audio", "video", "icone"] as const;

interface Midia {
  id: string;
  tipo: string;
  titulo: string;
  descricao: string | null;
  url: string;
  thumbnail_url: string | null;
  tags: string[] | null;
  categoria: string | null;
}

interface Vinc {
  midia_id: string;
  entidade_tipo: string;
}

function BancoMidiasPage() {
  const [midias, setMidias] = useState<Midia[]>([]);
  const [vincCount, setVincCount] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [filtroCat, setFiltroCat] = useState<string>("");
  const [busca, setBusca] = useState("");
  const [showForm, setShowForm] = useState(false);

  // form
  const [fTitulo, setFTitulo] = useState("");
  const [fUrl, setFUrl] = useState("");
  const [fCategoria, setFCategoria] = useState<string>("letras");
  const [fTipo, setFTipo] = useState<string>("imagem");
  const [fTags, setFTags] = useState("");
  const [fDesc, setFDesc] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    void carregar();
  }, []);

  const carregar = async () => {
    setLoading(true);
    const [mRes, vRes] = await Promise.all([
      supabase
        .from("rb_midias")
        .select("id,tipo,titulo,descricao,url,thumbnail_url,tags,categoria")
        .order("created_at", { ascending: false })
        .limit(500),
      supabase.from("rb_midia_vinculos").select("midia_id,entidade_tipo"),
    ]);
    setMidias((mRes.data || []) as Midia[]);
    const cnt: Record<string, number> = {};
    ((vRes.data || []) as Vinc[]).forEach((v) => {
      cnt[v.midia_id] = (cnt[v.midia_id] || 0) + 1;
    });
    setVincCount(cnt);
    setLoading(false);
  };

  const filtradas = useMemo(() => {
    return midias.filter((m) => {
      if (filtroCat && m.categoria !== filtroCat) return false;
      if (busca) {
        const q = busca.toLowerCase();
        const hay = `${m.titulo} ${m.descricao || ""} ${(m.tags || []).join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [midias, filtroCat, busca]);

  const totalPorCategoria = useMemo(() => {
    const t: Record<string, number> = {};
    midias.forEach((m) => {
      if (m.categoria) t[m.categoria] = (t[m.categoria] || 0) + 1;
    });
    return t;
  }, [midias]);

  const salvar = async () => {
    if (!fTitulo.trim() || !fUrl.trim()) return;
    setSaving(true);
    const tags = fTags
      .split(",")
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean);
    const { error } = await supabase.from("rb_midias").insert({
      titulo: fTitulo.trim(),
      url: fUrl.trim(),
      categoria: fCategoria,
      tipo: fTipo,
      descricao: fDesc.trim() || null,
      tags: tags.length ? tags : null,
    });
    setSaving(false);
    if (!error) {
      setFTitulo("");
      setFUrl("");
      setFTags("");
      setFDesc("");
      setShowForm(false);
      void carregar();
    } else {
      alert("Erro ao salvar: " + error.message);
    }
  };

  const remover = async (id: string) => {
    if (!confirm("Remover esta mídia? Os vínculos com aulas também serão apagados.")) return;
    await supabase.from("rb_midia_vinculos").delete().eq("midia_id", id);
    await supabase.from("rb_midias").delete().eq("id", id);
    void carregar();
  };

  return (
    <Shell>
      <PageHeader
        icon={ImageIcon}
        title="Banco de Mídias"
        subtitle="Imagens reutilizáveis em aulas, atividades e planos"
      />

      {/* KPIs por categoria */}
      <div className="grid grid-cols-3 md:grid-cols-9 gap-2 mb-6">
        {CATEGORIAS.map((c) => (
          <button
            key={c.id}
            onClick={() => setFiltroCat(filtroCat === c.id ? "" : c.id)}
            className={`p-2 rounded-xl border-2 text-center transition-all ${
              filtroCat === c.id
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="text-xl">{c.emoji}</div>
            <div className="text-[10px] font-bold uppercase">{c.label}</div>
            <div className="text-xs text-muted-foreground">{totalPorCategoria[c.id] || 0}</div>
          </button>
        ))}
      </div>

      {/* Controles */}
      <Card className="mb-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por título, descrição ou tag..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border-2 border-border bg-background text-sm"
            />
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold flex items-center gap-2"
          >
            <Plus className="h-4 w-4" /> Nova mídia
          </button>
        </div>

        {showForm && (
          <div className="mt-4 p-4 rounded-xl bg-muted/30 border-2 border-dashed border-border space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                value={fTitulo}
                onChange={(e) => setFTitulo(e.target.value)}
                placeholder="Título *"
                className="px-3 py-2 rounded-lg border-2 border-border bg-background text-sm"
              />
              <input
                value={fUrl}
                onChange={(e) => setFUrl(e.target.value)}
                placeholder="URL da mídia *"
                className="px-3 py-2 rounded-lg border-2 border-border bg-background text-sm"
              />
              <select
                value={fCategoria}
                onChange={(e) => setFCategoria(e.target.value)}
                className="px-3 py-2 rounded-lg border-2 border-border bg-background text-sm"
              >
                {CATEGORIAS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.emoji} {c.label}
                  </option>
                ))}
              </select>
              <select
                value={fTipo}
                onChange={(e) => setFTipo(e.target.value)}
                className="px-3 py-2 rounded-lg border-2 border-border bg-background text-sm"
              >
                {TIPOS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <input
              value={fTags}
              onChange={(e) => setFTags(e.target.value)}
              placeholder="Tags separadas por vírgula (ex: vogal, a, maiuscula)"
              className="w-full px-3 py-2 rounded-lg border-2 border-border bg-background text-sm"
            />
            <textarea
              value={fDesc}
              onChange={(e) => setFDesc(e.target.value)}
              placeholder="Descrição (opcional)"
              className="w-full px-3 py-2 rounded-lg border-2 border-border bg-background text-sm min-h-[60px] resize-none"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-muted-foreground"
              >
                Cancelar
              </button>
              <button
                onClick={salvar}
                disabled={saving || !fTitulo.trim() || !fUrl.trim()}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold disabled:opacity-50"
              >
                {saving ? "Salvando..." : "Salvar mídia"}
              </button>
            </div>
          </div>
        )}
      </Card>

      {loading && <p className="text-center text-muted-foreground py-8">Carregando banco...</p>}

      {!loading && filtradas.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          Nenhuma mídia encontrada. Adicione a primeira no botão acima.
        </p>
      )}

      {!loading && filtradas.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtradas.map((m) => {
            const cat = CATEGORIAS.find((c) => c.id === m.categoria);
            const vinc = vincCount[m.id] || 0;
            return (
              <Card key={m.id} className="!p-0 overflow-hidden group">
                <div className="aspect-square bg-muted relative">
                  {m.tipo === "imagem" || m.tipo === "icone" ? (
                    <img
                      src={m.thumbnail_url || m.url}
                      alt={m.titulo}
                      loading="lazy"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      {m.tipo === "audio" ? "🔊" : "🎬"}
                    </div>
                  )}
                  {cat && (
                    <span className="absolute top-1 left-1 text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-background/90">
                      {cat.emoji} {cat.label}
                    </span>
                  )}
                  <button
                    onClick={() => remover(m.id)}
                    className="absolute top-1 right-1 p-1 rounded bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity text-red-500"
                    title="Remover"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
                <div className="p-2">
                  <div className="text-xs font-bold truncate" title={m.titulo}>
                    {m.titulo}
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <LinkIcon className="h-3 w-3" />
                      {vinc} {vinc === 1 ? "aula" : "aulas"}
                    </span>
                    {m.tags && m.tags.length > 0 && (
                      <span className="flex items-center gap-1 truncate">
                        <Tag className="h-3 w-3" />
                        {m.tags.slice(0, 2).join(", ")}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </Shell>
  );
}
