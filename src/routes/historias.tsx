import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Search, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useStories } from "@/modules/historias/hooks/useStories";
import { THEME_META, type StoryTheme } from "@/modules/historias/types";
import type { StoryCategory } from "@/modules/historias/lib/story-library";
import { useAppState } from "@/core/store";

export const Route = createFileRoute("/historias")({
  component: HistoriasLibrary,
  head: () => ({
    meta: [
      { title: "Histórias — NeuroBrilha Kids" },
      {
        name: "description",
        content:
          "Biblioteca de histórias para alfabetização infantil com leitura guiada e narração.",
      },
    ],
  }),
});

function HistoriasLibrary() {
  const navigate = useNavigate();
  const { activeChild } = useAppState();
  const [theme, setTheme] = useState<string>("todos");
  const [level, setLevel] = useState<string>("todos");
  const [category, setCategory] = useState<StoryCategory | "todos">("todos");
  const [search, setSearch] = useState("");

  const childAge = activeChild?.idade ?? undefined;
  const { data: stories = [], isLoading } = useStories({ theme, level, age: childAge, category });

  const hyperfocus = (activeChild?.hiperfoco ?? "").toLowerCase();
  const sorted = useMemo(() => {
    const list = stories.filter((s) =>
      search ? s.title.toLowerCase().includes(search.toLowerCase()) : true,
    );
    if (!hyperfocus) return list;
    return [...list].sort((a, b) => {
      const ah = hyperfocus.includes(a.theme) || a.theme.includes(hyperfocus) ? -1 : 0;
      const bh = hyperfocus.includes(b.theme) || b.theme.includes(hyperfocus) ? -1 : 0;
      return ah - bh;
    });
  }, [stories, search, hyperfocus]);

  const themes: Array<{ id: string; label: string; emoji: string }> = [
    { id: "todos", label: "Todos", emoji: "📚" },
    ...Object.entries(THEME_META).map(([id, m]) => ({ id, label: m.label, emoji: m.emoji })),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F7FF] to-[#EEF1FF] pb-24">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#6C5CE7]/10">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate({ to: "/" })}
            className="p-2 rounded-full hover:bg-[#6C5CE7]/10"
            aria-label="Voltar"
          >
            <ArrowLeft className="w-6 h-6 text-[#6C5CE7]" />
          </button>
          <h1 className="text-2xl font-black text-[#6C5CE7] flex-1">Histórias</h1>
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
            placeholder="Buscar histórias..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border-2 border-[#6C5CE7]/10 focus:border-[#6C5CE7] outline-none font-medium"
          />
        </div>

        {/* Theme filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`shrink-0 px-4 py-2 rounded-full font-bold text-sm transition-all ${
                theme === t.id
                  ? "bg-[#6C5CE7] text-white shadow-md scale-105"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              <span className="mr-1">{t.emoji}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {[
            { id: "todos", label: "Todas" },
            { id: "pre-escola", label: "Pré-escola" },
            { id: "alfabetizacao", label: "Alfabetização" },
            { id: "emocoes", label: "Emoções" },
            { id: "inclusao", label: "Inclusão" },
            { id: "habilidades-sociais", label: "Habilidades sociais" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCategory(item.id)}
              className={`shrink-0 px-4 py-2 rounded-full font-bold text-sm transition-all ${
                category === item.id
                  ? "bg-[#6C5CE7] text-white shadow-md scale-105"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Level filter */}
        <div className="flex gap-2">
          {[
            { id: "todos", label: "Todos os níveis" },
            { id: "iniciante", label: "Iniciante" },
            { id: "intermediario", label: "Intermediário" },
            { id: "avancado", label: "Avançado" },
          ].map((l) => (
            <button
              key={l.id}
              onClick={() => setLevel(l.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                level === l.id
                  ? "bg-[#FFD93D] text-[#6C5CE7]"
                  : "bg-white text-gray-500 border border-gray-200"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {activeChild?.hiperfoco && (
          <div className="bg-gradient-to-r from-[#FFD93D]/20 to-[#FF7675]/20 rounded-2xl p-4 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#6C5CE7]" />
            <p className="text-sm text-[#6C5CE7] font-bold">
              Histórias sobre <span className="capitalize">{activeChild.hiperfoco}</span> em
              destaque para {activeChild.nome}!
            </p>
          </div>
        )}

        {/* Story grid */}
        {isLoading ? (
          <div className="text-center py-12 text-gray-500">Carregando histórias...</div>
        ) : sorted.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Nenhuma história encontrada. Tente outro filtro.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sorted.map((s, i) => {
              const meta = THEME_META[s.theme as StoryTheme];
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
                    className="block bg-white rounded-3xl p-5 shadow-sm border border-[#6C5CE7]/5 hover:scale-[1.02] transition active:scale-[0.98]"
                  >
                    <div
                      className="w-full h-32 rounded-2xl flex items-center justify-center text-7xl mb-3"
                      style={{ backgroundColor: meta?.bg ?? "#EEE" }}
                    >
                      {s.cover_image || meta?.emoji}
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: meta?.bg, color: meta?.color }}
                      >
                        {meta?.label}
                      </span>
                      <span className="text-xs text-gray-400">
                        {s.age_min}-{s.age_max} anos
                      </span>
                    </div>
                    <h3 className="font-black text-lg text-[#2D3436] leading-tight">{s.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{s.description}</p>
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
