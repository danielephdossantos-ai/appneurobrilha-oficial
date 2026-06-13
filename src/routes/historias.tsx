import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Search, Sparkles, RefreshCw, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { seedStoriesIfEmpty, generateExtraStory } from "@/services/db/stories.seed";
import { THEME_META, type StoryTheme } from "@/modules/historias/types";
import { useAppState } from "@/core/store";

export const Route = createFileRoute("/historias")({
  component: HistoriasLibrary,
  head: () => ({
    meta: [
      { title: "Histórias — NeuroBrilha Kids" },
      { name: "description", content: "Biblioteca de histórias para alfabetização infantil com leitura guiada e narração." },
    ],
  }),
});

const db = supabase as any;

function useStories(filters?: { theme?: string; age?: number; level?: string }) {
  return useQuery({
    queryKey: ["stories", filters],
    queryFn: async () => {
      let q = db.from("stories").select("*").order("created_at", { ascending: true });
      if (filters?.theme && filters.theme !== "todos") q = q.eq("theme", filters.theme);
      if (filters?.level && filters.level !== "todos") q = q.eq("reading_level", filters.level);
      if (filters?.age) q = q.lte("age_min", filters.age).gte("age_max", filters.age);
      const { data, error } = await q;
      if (error) throw error;
      return (data ?? []) as any[];
    },
  });
}

const THEMES = [
  { id: "todos", label: "Todos" },
  { id: "dinossauros", label: "Dinossauros" },
  { id: "animais", label: "Animais" },
  { id: "espaco", label: "Espaco" },
  { id: "fazendinha", label: "Fazendinha" },
  { id: "princesas", label: "Princesas" },
  { id: "super-herois", label: "Super-herois" },
  { id: "natureza", label: "Natureza" },
];

const LEVEL_COLORS: Record<string, string> = {
  iniciante: "bg-green-100 text-green-700",
  intermediario: "bg-blue-100 text-blue-700",
  avancado: "bg-purple-100 text-purple-700",
};
const LEVEL_LABELS: Record<string, string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediario",
  avancado: "Avancado",
};

function StoryCover({ coverImage, theme }: { coverImage: string | null | undefined; theme: string }) {
  const meta = THEME_META[theme as StoryTheme];
  if (coverImage && coverImage.startsWith("data:")) {
    return (
      <img
        src={coverImage}
        alt={`Ilustracao de ${theme}`}
        className="w-full h-36 object-cover rounded-2xl"
        loading="lazy"
      />
    );
  }
  if (coverImage && coverImage.startsWith("http")) {
    return (
      <img
        src={coverImage}
        alt={`Ilustracao de ${theme}`}
        className="w-full h-36 object-cover rounded-2xl"
        loading="lazy"
      />
    );
  }
  return (
    <div
      className="w-full h-36 rounded-2xl flex items-center justify-center"
      style={{ backgroundColor: meta?.bg ?? "#EEE" }}
    >
      <BookOpen className="w-12 h-12 text-white/60" />
    </div>
  );
}

function GeneratingOverlay() {
  const [dot, setDot] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setDot((d) => (d + 1) % 4), 500);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center gap-6 px-8"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] flex items-center justify-center shadow-xl animate-pulse">
        <BookOpen className="w-10 h-10 text-white" />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-[#6C5CE7]">Criando historias{".".repeat(dot + 1)}</h2>
        <p className="text-gray-500 font-medium text-sm max-w-xs">
          A inteligencia artificial esta escrevendo historias especiais com ilustracoes para cada tema. Isso leva cerca de 1 minuto.
        </p>
      </div>
      <div className="flex gap-1.5 mt-2">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-[#6C5CE7]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function HistoriasLibrary() {
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const qc = useQueryClient();
  const [theme, setTheme] = useState("todos");
  const [level, setLevel] = useState("todos");
  const [search, setSearch] = useState("");
  const seededRef = useRef(false);

  const childAge = activeChild?.idade ?? undefined;
  const { data: stories = [], isLoading, refetch } = useStories({ theme, level, age: childAge });

  const seedMutation = useMutation({
    mutationFn: () => seedStoriesIfEmpty(),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["stories"] });
      refetch();
    },
  });

  const extraMutation = useMutation({
    mutationFn: (t: string) => generateExtraStory({ data: { theme: t } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["stories"] });
      refetch();
    },
  });

  useEffect(() => {
    if (!isLoading && stories.length === 0 && !seededRef.current && !seedMutation.isPending) {
      seededRef.current = true;
      seedMutation.mutate();
    }
  }, [isLoading, stories.length]);

  const hyperfocus = (activeChild?.hiperfoco ?? "").toLowerCase();
  const sorted = useMemo(() => {
    const list = stories.filter((s) =>
      search ? s.title.toLowerCase().includes(search.toLowerCase()) : true,
    );
    if (!hyperfocus) return list;
    return [...list].sort((a: any, b: any) => {
      const ah = a.theme?.toLowerCase().includes(hyperfocus) ? -1 : 0;
      const bh = b.theme?.toLowerCase().includes(hyperfocus) ? -1 : 0;
      return ah - bh;
    });
  }, [stories, search, hyperfocus]);

  const isGenerating = seedMutation.isPending || extraMutation.isPending;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F7FF] to-[#EEF1FF] pb-24">
      {isGenerating && <GeneratingOverlay />}

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#6C5CE7]/10">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate({ to: "/" })}
            className="p-2 rounded-full hover:bg-[#6C5CE7]/10"
            aria-label="Voltar"
          >
            <ArrowLeft className="w-6 h-6 text-[#6C5CE7]" />
          </button>
          <h1 className="text-2xl font-black text-[#6C5CE7] flex-1">Historias</h1>
          <BookOpen className="w-6 h-6 text-[#6C5CE7]" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 pt-5 space-y-5">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar historias..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border-2 border-[#6C5CE7]/10 focus:border-[#6C5CE7] outline-none font-medium"
          />
        </div>

        {/* Theme filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`shrink-0 px-4 py-2 rounded-full font-bold text-sm transition-all ${
                theme === t.id
                  ? "bg-[#6C5CE7] text-white shadow-md scale-105"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Level filter */}
        <div className="flex gap-2 flex-wrap">
          {[
            { id: "todos", label: "Todos os niveis" },
            { id: "iniciante", label: "Iniciante" },
            { id: "intermediario", label: "Intermediario" },
            { id: "avancado", label: "Avancado" },
          ].map((l) => (
            <button
              key={l.id}
              onClick={() => setLevel(l.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                level === l.id ? "bg-[#FFD93D] text-[#6C5CE7]" : "bg-white text-gray-500 border border-gray-200"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Hyperfocus banner */}
        {activeChild?.hiperfoco && (
          <div className="bg-gradient-to-r from-[#FFD93D]/20 to-[#FF7675]/20 rounded-2xl p-4 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#6C5CE7] shrink-0" />
            <p className="text-sm text-[#6C5CE7] font-bold">
              Historias sobre <span className="capitalize">{activeChild.hiperfoco}</span> em destaque!
            </p>
          </div>
        )}

        {/* Generate more button — only when stories exist */}
        {stories.length > 0 && theme !== "todos" && (
          <button
            onClick={() => extraMutation.mutate(theme)}
            disabled={isGenerating}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border-2 border-[#6C5CE7]/20 text-[#6C5CE7] font-bold text-sm hover:bg-[#6C5CE7]/5 disabled:opacity-50 transition"
          >
            <PlusCircle className="w-4 h-4" />
            Gerar nova historia de {THEMES.find((t) => t.id === theme)?.label}
          </button>
        )}

        {/* Story grid */}
        {isLoading ? (
          <div className="text-center py-16 space-y-3">
            <RefreshCw className="w-8 h-8 text-[#6C5CE7] mx-auto animate-spin" />
            <p className="text-gray-500 font-medium">Carregando...</p>
          </div>
        ) : sorted.length === 0 && !seedMutation.isPending ? (
          <div className="text-center py-16 space-y-3">
            <BookOpen className="w-10 h-10 text-gray-300 mx-auto" />
            <p className="text-gray-500 font-medium">Nenhuma historia encontrada.</p>
            <button
              onClick={() => {
                seededRef.current = false;
                seedMutation.mutate();
              }}
              className="mt-2 px-6 py-2 rounded-full bg-[#6C5CE7] text-white font-bold text-sm"
            >
              Gerar historias
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sorted.map((s: any, i: number) => {
              const meta = THEME_META[s.theme as StoryTheme];
              const rl = s.readingLevel ?? s.reading_level ?? "";
              const levelCls = LEVEL_COLORS[rl] ?? "bg-gray-100 text-gray-600";
              const levelLabel = LEVEL_LABELS[rl] ?? rl;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to="/historias/$storyId"
                    params={{ storyId: s.id }}
                    className="block bg-white rounded-3xl p-4 shadow-sm border border-[#6C5CE7]/5 hover:scale-[1.02] transition active:scale-[0.98]"
                  >
                    <StoryCover coverImage={s.coverImage ?? s.cover_image} theme={s.theme} />
                    <div className="mt-3 flex items-center gap-2 flex-wrap">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: meta?.bg, color: meta?.color }}
                      >
                        {meta?.label ?? s.theme}
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${levelCls}`}>
                        {levelLabel}
                      </span>
                      <span className="text-xs text-gray-400 ml-auto">
                        {(s.ageMin ?? s.age_min)}-{(s.ageMax ?? s.age_max)} anos
                      </span>
                    </div>
                    <h3 className="font-black text-lg text-[#2D3436] leading-tight mt-2">{s.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">{s.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
