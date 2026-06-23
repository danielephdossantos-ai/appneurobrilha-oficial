import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { supabase } from "@/database/supabase/client";
import { Image as ImageIcon, Plus, Search, Trash2, Tag, Link as LinkIcon, Package } from "lucide-react";
import {
  BANCO_MIDIAS_REGISTRO,
  type CategoriaBanco,
  type MidiaRegistro,
} from "@/lib/banco-midias-registry";

export const Route = createFileRoute("/banco-midias")({
  component: BancoMidiasPage,
});

const CATEGORIAS: { id: CategoriaBanco; label: string; emoji: string }[] = [
  { id: "letras", label: "Letras", emoji: "🔤" },
  { id: "silabas", label: "Sílabas", emoji: "🔠" },
  { id: "numeros", label: "Números", emoji: "🔢" },
  { id: "formas", label: "Formas", emoji: "🔷" },
  { id: "animais", label: "Animais", emoji: "🐶" },
  { id: "objetos", label: "Objetos", emoji: "🧸" },
  { id: "cotidiano", label: "Cotidiano", emoji: "🏠" },
  { id: "mapas", label: "Mapas", emoji: "🗺️" },
  { id: "graficos", label: "Gráficos", emoji: "📊" },
  { id: "icones", label: "Ícones", emoji: "✨" },
  { id: "emocoes", label: "Emoções", emoji: "😊" },
];

interface Midia {
  id: string;
  tipo: string;
  titulo: string;
  url: string;
  thumbnail_url: string | null;
  tags: string[] | null;
  categoria: string | null;
}

// Tipo unificado para renderização
interface ItemUnificado {
  key: string;
  origem: "registro" | "db";
  titulo: string;
  url: string;
  categoria: string | null;
  tags: string[];
  vinc: number;
  dbId?: string;
  pasta?: string;
}

function BancoMidiasPage() {
  const [midiasDb, setMidiasDb] = useState<Midia[]>([]);
  const [vincCount, setVincCount] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [filtroCat, setFiltroCat] = useState<string>("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    void carregar();
  }, []);

  const carregar = async () => {
    setLoading(true);
    const [mRes, vRes] = await Promise.all([
      supabase
        .from("rb_midias")
        .select("id,tipo,titulo,url,thumbnail_url,tags,categoria")
        .order("created_at", { ascending: false })
        .limit(500),
      supabase.from("rb_midia_vinculos").select("midia_id"),
    ]);
    setMidiasDb((mRes.data || []) as Midia[]);
    const cnt: Record<string, number> = {};
    ((vRes.data || []) as { midia_id: string }[]).forEach((v) => {
      cnt[v.midia_id] = (cnt[v.midia_id] || 0) + 1;
    });
    setVincCount(cnt);
    setLoading(false);
  };

  const itens: ItemUnificado[] = useMemo(() => {
    const registro: ItemUnificado[] = BANCO_MIDIAS_REGISTRO.map((m: MidiaRegistro) => ({
      key: `r:${m.id}`,
      origem: "registro",
      titulo: m.titulo,
      url: m.url,
      categoria: m.categoria,
      tags: m.tags,
      vinc: 0,
      pasta: m.pasta,
    }));
    const db: ItemUnificado[] = midiasDb.map((m) => ({
      key: `d:${m.id}`,
      origem: "db",
      titulo: m.titulo,
      url: m.thumbnail_url || m.url,
      categoria: m.categoria,
      tags: m.tags || [],
      vinc: vincCount[m.id] || 0,
      dbId: m.id,
    }));
    return [...db, ...registro];
  }, [midiasDb, vincCount]);

  const filtradas = useMemo(() => {
    const q = busca.toLowerCase().trim();
    return itens.filter((m) => {
      if (filtroCat && m.categoria !== filtroCat) return false;
      if (q) {
        const hay = `${m.titulo} ${(m.tags || []).join(" ")} ${m.pasta || ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [itens, filtroCat, busca]);

  const totalPorCategoria = useMemo(() => {
    const t: Record<string, number> = {};
    itens.forEach((m) => {
      if (m.categoria) t[m.categoria] = (t[m.categoria] || 0) + 1;
    });
    return t;
  }, [itens]);

  const removerDb = async (id: string) => {
    if (!confirm("Remover esta mídia do banco?")) return;
    await supabase.from("rb_midia_vinculos").delete().eq("midia_id", id);
    await supabase.from("rb_midias").delete().eq("id", id);
    void carregar();
  };

  const totalRegistro = BANCO_MIDIAS_REGISTRO.length;

  return (
    <Shell>
      <PageHeader
        icon={ImageIcon}
        title="Banco de Mídias"
        subtitle="Sistema interno — todas as imagens disponíveis para usar em atividades"
      />

      <Card className="mb-4 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-emerald-500/30">
        <div className="flex items-center gap-3">
          <Package className="h-6 w-6 text-emerald-500" />
          <div className="flex-1">
            <div className="font-bold text-sm">{totalRegistro} imagens locais + {midiasDb.length} no banco remoto</div>
            <p className="text-xs text-muted-foreground">
              Todas as ilustrações já bundladas no app estão indexadas automaticamente e prontas para serem reutilizadas em qualquer atividade.
            </p>
          </div>
        </div>
      </Card>

      {/* Categorias */}
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-2 mb-4">
        <button
          onClick={() => setFiltroCat("")}
          className={`p-2 rounded-xl border-2 text-center transition-all ${
            !filtroCat ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
          }`}
        >
          <div className="text-xl">📚</div>
          <div className="text-[10px] font-bold uppercase">Todas</div>
          <div className="text-xs text-muted-foreground">{itens.length}</div>
        </button>
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

      <Card className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por título, tag ou pasta..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border-2 border-border bg-background text-sm"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Mostrando <strong>{filtradas.length}</strong> de {itens.length} mídias.
        </p>
      </Card>

      {loading && <p className="text-center text-muted-foreground py-8">Carregando banco...</p>}

      {!loading && filtradas.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          Nenhuma mídia encontrada com esses filtros.
        </p>
      )}

      {!loading && filtradas.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtradas.slice(0, 200).map((m) => {
            const cat = CATEGORIAS.find((c) => c.id === m.categoria);
            return (
              <Card key={m.key} className="!p-0 overflow-hidden group">
                <div className="aspect-square bg-muted relative">
                  <img
                    src={m.url}
                    alt={m.titulo}
                    loading="lazy"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.opacity = "0.2";
                    }}
                  />
                  {cat && (
                    <span className="absolute top-1 left-1 text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-background/90">
                      {cat.emoji} {cat.label}
                    </span>
                  )}
                  {m.origem === "db" && (
                    <span className="absolute bottom-1 left-1 text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-violet-500/90 text-white">
                      DB
                    </span>
                  )}
                  {m.origem === "db" && m.dbId && (
                    <button
                      onClick={() => removerDb(m.dbId!)}
                      className="absolute top-1 right-1 p-1 rounded bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity text-red-500"
                      title="Remover"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  )}
                </div>
                <div className="p-2">
                  <div className="text-xs font-bold truncate" title={m.titulo}>
                    {m.titulo}
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-muted-foreground">
                    {m.pasta ? (
                      <span className="truncate" title={m.pasta}>
                        📁 {m.pasta}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <LinkIcon className="h-3 w-3" />
                        {m.vinc} {m.vinc === 1 ? "aula" : "aulas"}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {filtradas.length > 200 && (
        <p className="text-center text-xs text-muted-foreground mt-4">
          Mostrando primeiras 200 mídias. Use os filtros para refinar.
        </p>
      )}
    </Shell>
  );
}
