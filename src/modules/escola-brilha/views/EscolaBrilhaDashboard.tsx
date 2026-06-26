import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import {
  BookOpen,
  Calculator,
  Star,
  ChevronRight,
  Sparkles,
  FlaskConical,
  Globe,
  Landmark,
  GraduationCap,
  Sprout,
 Network,
 Image as ImageIcon,
} from "lucide-react";
import { Illustration } from "@/components/Illustration";
import type { IllustrationName } from "@/components/Illustration";
import pipImg from "@/assets/pip-mascot.png";
import pipaImg from "@/assets/pip-girl-mascot.png";
import { useAulasBnccByEtapa, type EtapaEscolar } from "../hooks/useAulasBncc";

/* ─── Aulas estáticas (já implementadas nos players) ─── */
type StaticLesson = {
  id: string;
  type: string;
  serie: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  gradient: string;
  xp: number;
  bncc?: string;
  illustration?: IllustrationName;
};

const STATIC_LESSONS: Record<EtapaEscolar, StaticLesson[]> = {
  infantil: [],
  fundamental1: [
    { id: "vogais_1ano", type: "activity", serie: "1º Ano", title: "Vogais", subtitle: "A, E, I, O, U", badge: "Língua Portuguesa", badgeColor: "bg-rose-100 text-rose-700", gradient: "from-rose-500 to-pink-600", xp: 100, bncc: "EF01LP04" },
    { id: "alfabeto_1ano", type: "activity", serie: "1º Ano", title: "Alfabeto", subtitle: "As 26 letras", badge: "Língua Portuguesa", badgeColor: "bg-fuchsia-100 text-fuchsia-700", gradient: "from-fuchsia-500 to-purple-600", xp: 100, bncc: "EF01LP01" },
    { id: "rimas_1ano", type: "activity", serie: "1º Ano", title: "Rimas", subtitle: "Palavras com som parecido", badge: "Língua Portuguesa", badgeColor: "bg-amber-100 text-amber-700", gradient: "from-amber-500 to-orange-600", xp: 110, bncc: "EF01LP09" },
    { id: "silabas_1ano", type: "activity", serie: "1º Ano", title: "Sílabas", subtitle: "Pedacinhos das palavras", badge: "Língua Portuguesa", badgeColor: "bg-sky-100 text-sky-700", gradient: "from-sky-500 to-blue-600", xp: 110, bncc: "EF01LP06" },
    { id: "sinonimos", type: "activity", serie: "2º Ano", title: "Sinônimos", subtitle: "Palavras com sentido parecido", badge: "Língua Portuguesa", badgeColor: "bg-violet-100 text-violet-700", gradient: "from-violet-500 to-purple-600", xp: 120 },
    { id: "antonimos", type: "activity", serie: "2º Ano", title: "Antônimos", subtitle: "Palavras com sentido oposto", badge: "Língua Portuguesa", badgeColor: "bg-teal-100 text-teal-700", gradient: "from-teal-500 to-emerald-600", xp: 120 },
    { id: "substantivos", type: "activity", serie: "3º Ano", title: "Substantivos", subtitle: "Nomes de seres e objetos", badge: "Língua Portuguesa", badgeColor: "bg-blue-100 text-blue-700", gradient: "from-blue-500 to-indigo-600", xp: 130 },
    { id: "fracoes", type: "activity", serie: "3º Ano", title: "Frações", subtitle: "Partes de um todo", badge: "Matemática", badgeColor: "bg-amber-100 text-amber-700", gradient: "from-amber-500 to-orange-600", xp: 150 },
    { id: "multiplicacao", type: "activity", serie: "3º Ano", title: "Multiplicação", subtitle: "Tabuada e grupos iguais", badge: "Matemática", badgeColor: "bg-pink-100 text-pink-700", gradient: "from-pink-500 to-rose-600", xp: 140 },
  ],
  fundamental2: [
    { id: "oceanos", type: "activity-c", serie: "6º Ano", title: "Oceanos e Clima", subtitle: "Regulação climática", badge: "Ciências", badgeColor: "bg-blue-100 text-blue-800", gradient: "from-blue-600 to-cyan-600", xp: 230, bncc: "EF06CI04" },
    { id: "biomas", type: "activity-c", serie: "6º Ano", title: "Biomas Brasileiros", subtitle: "Os 6 grandes biomas", badge: "Geografia", badgeColor: "bg-green-100 text-green-800", gradient: "from-green-600 to-emerald-600", xp: 220, bncc: "EF06GE08" },
    { id: "celulas", type: "activity-c", serie: "7º Ano", title: "Células e Organismos", subtitle: "Unidade básica da vida", badge: "Ciências", badgeColor: "bg-violet-100 text-violet-800", gradient: "from-violet-600 to-purple-600", xp: 240, bncc: "EF07CI10" },
    { id: "equacoes", type: "activity-c", serie: "7º Ano", title: "Equações de 1º Grau", subtitle: "Álgebra", badge: "Matemática", badgeColor: "bg-amber-100 text-amber-800", gradient: "from-amber-600 to-orange-600", xp: 250, bncc: "EF07MA18" },
    { id: "revolucao", type: "activity-c", serie: "8º Ano", title: "Revolução Industrial", subtitle: "Trabalho e tecnologia", badge: "História", badgeColor: "bg-stone-100 text-stone-800", gradient: "from-stone-600 to-zinc-600", xp: 260, bncc: "EF08HI13" },
    { id: "sistema_nervoso", type: "activity-c", serie: "8º Ano", title: "Sistema Nervoso", subtitle: "Controle do corpo", badge: "Ciências", badgeColor: "bg-indigo-100 text-indigo-800", gradient: "from-indigo-600 to-blue-600", xp: 250, bncc: "EF08CI08" },
    { id: "genetica", type: "activity-c", serie: "9º Ano", title: "Genética", subtitle: "DNA e Leis de Mendel", badge: "Ciências", badgeColor: "bg-pink-100 text-pink-800", gradient: "from-pink-600 to-rose-600", xp: 280, bncc: "EF09CI08" },
    { id: "iluminismo", type: "activity-c", serie: "9º Ano", title: "Iluminismo", subtitle: "Razão e democracia", badge: "História", badgeColor: "bg-yellow-100 text-yellow-800", gradient: "from-yellow-600 to-amber-600", xp: 270, bncc: "EF09HI01" },
  ],
};

const SERIE_ORDER: Record<EtapaEscolar, string[]> = {
  infantil: [],
  fundamental1: ["1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano"],
  fundamental2: ["6º Ano", "7º Ano", "8º Ano", "9º Ano"],
};

const TABS: { id: EtapaEscolar; label: string; Icon: React.FC<{ className?: string }> }[] = [
  { id: "fundamental2", label: "6º ao 9º Ano", Icon: GraduationCap },
  { id: "fundamental1", label: "1º ao 5º Ano", Icon: BookOpen },
];



export const EscolaBrilhaDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<EtapaEscolar>("fundamental2");
  const { aulas: aulasBanco, loading } = useAulasBnccByEtapa(tab);

  // Limpa cache das categorias removidas (Pré-Escola + 1º Ano + 2º Ano legacy).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const FLAG = "escola-brilha:cleanup:pre-1-2ano:v2";
    try {
      if (localStorage.getItem(FLAG)) return;
      const keysToRemove = [
        "escola-brilha:rot:portugues-1ano",
        "escola-brilha:rot:alfabetizacao",
        "escola-brilha:rot:alfabetizacao-1ano",
        "escola-brilha:rot:vogais",
        "escola-brilha:rot:contagem",
        "escola-brilha:rot:subtracao",
        "escola-brilha:rot:matematica",
        "escola-brilha:rot:portugues-2ano",
        "escola-brilha:rot:matematica-2ano",
        "escola-brilha:etapa",
      ];
      keysToRemove.forEach((k) => localStorage.removeItem(k));
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (!k) continue;
        if (
          k.includes("pre-escola") ||
          (k.includes("1ano") && !k.includes("vogais_1ano") && !k.includes("alfabeto_1ano") && !k.includes("rimas_1ano") && !k.includes("silabas_1ano")) ||
          k.includes("infantil") ||
          k.includes("portugues_1ano") ||
          k.includes("portugues-2ano") ||
          k.includes("matematica-2ano") ||
          k.includes("portugues_2ano") ||
          k.includes("matematica_2ano")
        ) {
          localStorage.removeItem(k);
        }
      }
      localStorage.setItem(FLAG, "1");
    } catch {
      /* ignore */
    }
  }, []);



  const goToActivity = (id: string, type: string) =>
    navigate({ to: "/escola-brilha/aula", search: { category: id, type } });

  const goToAulaBanco = (aulaId: string) =>
    navigate({ to: "/escola-brilha/db/$aulaId", params: { aulaId } });

  const staticItems = STATIC_LESSONS[tab];

  // Agrupar por série (mescla estáticas + banco)
  const seriesOrder = SERIE_ORDER[tab];
  const allSeries = Array.from(
    new Set([
      ...seriesOrder,
      ...staticItems.map((s) => s.serie),
      ...aulasBanco.map((a) => a.serie),
    ]),
  ).sort((a, b) => {
    const ai = seriesOrder.indexOf(a);
    const bi = seriesOrder.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-violet-950 pb-12">
      {/* Hero */}
      <div className="relative overflow-hidden px-5 pt-12 pb-8">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-xs font-black tracking-widest uppercase">
              Escola Brilha
            </span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            O que vamos
            <br />
            aprender hoje?
          </h1>
          <p className="text-white/50 text-sm font-semibold mt-2">BNCC • Educação Adaptativa</p>
        </div>
        <div className="flex justify-between items-end px-4 -mb-6 relative z-10 max-w-xs mx-auto mt-4">
          <motion.img src={pipaImg} alt="Pipa" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring" }} className="w-24 h-24 object-contain drop-shadow-xl select-none" draggable={false} />
          <motion.img src={pipImg} alt="Pip" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }} className="w-24 h-24 object-contain drop-shadow-xl select-none" draggable={false} />
        </div>
      </div>






      {/* Tab switcher */}
      <div className="mx-4 mt-8 mb-5 bg-white/10 rounded-2xl p-1 flex gap-1 max-w-lg mx-auto">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 ${
              tab === t.id ? "bg-white text-slate-800 shadow" : "text-white/60 hover:text-white/80"
            }`}
          >
            <t.Icon className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-4 max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {allSeries.map((serie) => {
              const staticCards = staticItems.filter((s) => s.serie === serie);
              const dbCards = serie === "1º Ano" ? [] : aulasBanco.filter((a) => a.serie === serie);
              if (!staticCards.length && !dbCards.length) return null;
              const total = staticCards.length + dbCards.length;

              return (
                <section key={serie}>
                  <div className="flex items-end justify-between mb-3 px-1">
                    <div>
                      <h2 className="text-white font-black text-lg leading-tight">{serie}</h2>
                      <p className="text-white/40 text-[11px] font-semibold uppercase tracking-widest">
                        {total} {total === 1 ? "aula" : "aulas"} • BNCC
                      </p>
                    </div>
                  </div>

                  <SubjectFolders
                    serie={serie}
                    staticCards={staticCards}
                    dbCards={dbCards}
                    onStaticClick={goToActivity}
                    onDbClick={goToAulaBanco}
                  />
                </section>
              );
            })}


            {!loading && allSeries.every((s) =>
              !staticItems.some((x) => x.serie === s) && !aulasBanco.some((x) => x.serie === s),
            ) && (
              <p className="text-white/40 text-sm text-center py-12">
                Nenhuma aula disponível nesta etapa ainda.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ─── Card único e consistente ─── */
const LessonCard: React.FC<{
  index: number;
  title: string;
  subtitle?: string;
  badge: string;
  badgeColor: string;
  gradient: string;
  xp: number;
  bncc?: string;
  illustration?: IllustrationName;
  onClick: () => void;
}> = ({ index, title, subtitle, badge, badgeColor, gradient, xp, bncc, illustration, onClick }) => (
  <motion.button
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.04, type: "spring", stiffness: 160 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="w-full bg-white rounded-2xl shadow-lg overflow-hidden text-left flex items-stretch border border-white/10"
  >
    <div className={`bg-gradient-to-b ${gradient} w-16 flex items-center justify-center shrink-0`}>
      {illustration ? (
        <Illustration name={illustration} className="w-12 h-12" />
      ) : (
        <BookOpen className="w-6 h-6 text-white" />
      )}
    </div>
    <div className="flex-1 p-3.5 min-w-0">
      <p className="font-black text-slate-800 text-sm leading-tight truncate">{title}</p>
      {subtitle && (
        <p className="text-slate-500 text-xs font-medium mt-0.5 line-clamp-1">{subtitle}</p>
      )}
      <div className="flex items-center gap-1.5 flex-wrap mt-1.5">
        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${badgeColor}`}>
          {badge}
        </span>
        {bncc && (
          <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
            {bncc}
          </span>
        )}
        <span className="flex items-center gap-0.5 text-[10px] font-black text-yellow-600">
          <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
          {xp}
        </span>
      </div>
    </div>
    <div className="flex items-center pr-3">
      <ChevronRight className="w-5 h-5 text-slate-300" />
    </div>
  </motion.button>
);

/* ─── Pastas por matéria (Português, Matemática, etc.) ─── */
type AulaBanco = {
  id: string;
  titulo: string;
  descricao?: string | null;
  disciplina: string;
  serie: string;
  xp: number;
  codigo_bncc?: string | null;
};

const SUBJECT_META: Record<string, { gradient: string; Icon: React.FC<{ className?: string }> }> = {
  "Língua Portuguesa": { gradient: "from-rose-500 to-pink-600", Icon: BookOpen },
  "Português": { gradient: "from-rose-500 to-pink-600", Icon: BookOpen },
  "Alfabetização": { gradient: "from-rose-400 to-pink-500", Icon: BookOpen },
  "Leitura": { gradient: "from-fuchsia-400 to-violet-500", Icon: BookOpen },
  "Matemática": { gradient: "from-sky-500 to-blue-600", Icon: Calculator },
  "Ciências": { gradient: "from-emerald-500 to-teal-600", Icon: FlaskConical },
  "Geografia": { gradient: "from-green-600 to-emerald-700", Icon: Globe },
  "História": { gradient: "from-stone-500 to-amber-700", Icon: Landmark },
};

const subjectKey = (raw: string) => {
  const s = (raw || "").toLowerCase();
  if (s.includes("portug") || s.includes("língua") || s.includes("lingua")) return "Língua Portuguesa";
  if (s.includes("alfabet")) return "Alfabetização";
  if (s.includes("leitur")) return "Leitura";
  if (s.includes("matem")) return "Matemática";
  if (s.includes("ciênc") || s.includes("cienc")) return "Ciências";
  if (s.includes("geograf")) return "Geografia";
  if (s.includes("histó") || s.includes("histo")) return "História";
  return raw || "Outros";
};

const SubjectFolders: React.FC<{
  serie: string;
  staticCards: StaticLesson[];
  dbCards: AulaBanco[];
  onStaticClick: (id: string, type: string) => void;
  onDbClick: (id: string) => void;
}> = ({ serie, staticCards, dbCards, onStaticClick, onDbClick }) => {
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  // Agrupa atividades pela disciplina normalizada
  const grouped: Record<string, { statics: StaticLesson[]; dbs: AulaBanco[] }> = {};
  for (const c of staticCards) {
    const k = subjectKey(c.badge);
    (grouped[k] ||= { statics: [], dbs: [] }).statics.push(c);
  }
  for (const a of dbCards) {
    const k = subjectKey(a.disciplina);
    (grouped[k] ||= { statics: [], dbs: [] }).dbs.push(a);
  }
  const subjects = Object.keys(grouped).sort();

  return (
    <div className="space-y-2.5">
      {subjects.map((subj, i) => {
        const meta = SUBJECT_META[subj] ?? { gradient: "from-slate-500 to-slate-700", Icon: BookOpen };
        const { statics, dbs } = grouped[subj];
        const total = statics.length + dbs.length;
        const isOpen = openSubject === subj;
        return (
          <div key={`${serie}-${subj}`}>
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, type: "spring", stiffness: 160 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpenSubject(isOpen ? null : subj)}
              className="w-full bg-white rounded-2xl shadow-lg overflow-hidden text-left flex items-stretch border border-white/10"
            >
              <div className={`bg-gradient-to-b ${meta.gradient} w-16 flex items-center justify-center shrink-0`}>
                <meta.Icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 p-3.5 min-w-0">
                <p className="font-black text-slate-800 text-sm leading-tight truncate">{subj}</p>
                <p className="text-slate-500 text-xs font-medium mt-0.5">
                  {total} {total === 1 ? "atividade" : "atividades"}
                </p>
              </div>
              <div className="flex items-center pr-3">
                <ChevronRight
                  className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-90" : ""}`}
                />
              </div>
            </motion.button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pl-5 pr-1 pt-2.5 pb-1 space-y-2.5 border-l-2 border-white/10 ml-5 mt-2">
                    {statics.map((cat, j) => (
                      <LessonCard
                        key={`s-${cat.id}`}
                        index={j}
                        title={cat.title}
                        subtitle={cat.subtitle}
                        badge={cat.badge}
                        badgeColor={cat.badgeColor}
                        gradient={cat.gradient}
                        xp={cat.xp}
                        bncc={cat.bncc}
                        illustration={cat.illustration}
                        onClick={() => onStaticClick(cat.id, cat.type)}
                      />
                    ))}
                    {dbs.map((a, j) => (
                      <LessonCard
                        key={`d-${a.id}`}
                        index={statics.length + j}
                        title={a.titulo}
                        subtitle={a.descricao ?? a.disciplina}
                        badge={a.disciplina}
                        badgeColor="bg-emerald-100 text-emerald-700"
                        gradient="from-emerald-500 to-teal-600"
                        xp={a.xp}
                        bncc={a.codigo_bncc ?? undefined}
                        onClick={() => onDbClick(a.id)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
