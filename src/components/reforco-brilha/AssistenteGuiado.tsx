import { useState } from "react";
import { Wand2, ArrowRight, ArrowLeft, RefreshCw, BookOpen, PlayCircle, Sparkles } from "lucide-react";
import { Card } from "@/components/Layout";
import { supabase } from "@/database/supabase/client";
import { PlanoAutomatico } from "@/components/reforco-brilha/PlanoAutomatico";
import type { AreaPlano } from "@/lib/reforco-brilha-planos-templates";
import { stripBncc } from "@/lib/strip-bncc";

type Area =
  | "leitura"
  | "escrita"
  | "matematica"
  | "atencao"
  | "memoria"
  | "coordenacao-motora"
  | "linguagem";

const AREAS: { id: Area; label: string; emoji: string; tagSlug?: string; keywords: string[] }[] = [
  { id: "leitura", label: "Leitura", emoji: "📖", tagSlug: "leitura", keywords: ["leitura", "ler", "silabas", "alfabetizacao"] },
  { id: "escrita", label: "Escrita", emoji: "✏️", tagSlug: "escrita", keywords: ["escrita", "escrever", "grafomotor"] },
  { id: "matematica", label: "Matemática", emoji: "🔢", tagSlug: "tabuada", keywords: ["matematica", "tabuada", "numeros", "calculo"] },
  { id: "atencao", label: "Atenção", emoji: "🎯", tagSlug: "atencao", keywords: ["atencao", "foco", "concentracao"] },
  { id: "memoria", label: "Memória", emoji: "🧠", tagSlug: "memoria", keywords: ["memoria", "lembrar"] },
  { id: "coordenacao-motora", label: "Coordenação motora", emoji: "✂️", tagSlug: "coordenacao-motora", keywords: ["coordenacao", "motora", "recortar", "pinca"] },
  { id: "linguagem", label: "Linguagem", emoji: "💬", keywords: ["linguagem", "fala", "oralidade", "comunicacao"] },
];

const SERIES = [
  "Educação Infantil",
  "1º ano",
  "2º ano",
  "3º ano",
  "4º ano",
  "5º ano",
  "6º ano ou mais",
];

const TEMPOS = [
  { id: "recente", label: "Há poucas semanas" },
  { id: "meses", label: "Alguns meses" },
  { id: "semestre", label: "Mais de 6 meses" },
  { id: "ano", label: "Mais de 1 ano" },
];

interface Recomendacao {
  id: string;
  nome: string;
  descricao: string | null;
  aulas: { id: string; titulo: string; nivel: string }[];
}

interface Props {
  onAbrirAula?: (id: string, titulo: string) => void;
  onBuscar?: (query: string) => void;
}

export function AssistenteGuiado({ onAbrirAula, onBuscar }: Props) {
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  const [area, setArea] = useState<Area | null>(null);
  const [idade, setIdade] = useState<number | "">("");
  const [serie, setSerie] = useState<string>("");
  const [tempo, setTempo] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [recs, setRecs] = useState<Recomendacao[]>([]);
  const [descricaoDif, setDescricaoDif] = useState<string>("");

  const areaSel = AREAS.find((a) => a.id === area);

  const reset = () => {
    setStep(0);
    setArea(null);
    setIdade("");
    setSerie("");
    setTempo("");
    setRecs([]);
    setDescricaoDif("");
  };


  const gerarRecomendacoes = async () => {
    if (!areaSel) return;
    setLoading(true);
    setStep(5);
    try {
      // 1) habilidades pela tag (se houver)
      const ids = new Set<string>();
      if (areaSel.tagSlug) {
        const { data: tag } = await supabase
          .from("rb_tags")
          .select("id, rb_habilidade_tags(habilidade_id)")
          .eq("slug", areaSel.tagSlug)
          .maybeSingle();
        const links = (tag as any)?.rb_habilidade_tags || [];
        links.forEach((l: any) => ids.add(l.habilidade_id));
      }
      // 2) habilidades por palavras_chave (área + descrição livre dos pais)
      const tokensDescricao = descricaoDif
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(/[^a-z0-9]+/)
        .filter((t) => t.length >= 4);
      const keywords = Array.from(new Set([...areaSel.keywords, ...tokensDescricao]));
      const { data: byKw } = await supabase
        .from("rb_habilidades")
        .select("id")
        .overlaps("palavras_chave", keywords)
        .limit(30);
      (byKw || []).forEach((h: any) => ids.add(h.id));


      if (ids.size === 0) {
        setRecs([]);
        return;
      }

      const { data: habs } = await supabase
        .from("rb_habilidades")
        .select("id, nome, descricao")
        .in("id", Array.from(ids))
        .limit(6);

      const habIds = (habs || []).map((h: any) => h.id);
      const { data: aulas } = await supabase
        .from("rb_aulas")
        .select("id, habilidade_id, titulo, nivel, ordem")
        .in("habilidade_id", habIds)
        .order("ordem", { ascending: true });

      const byHab = new Map<string, Recomendacao["aulas"]>();
      (aulas || []).forEach((a: any) => {
        const arr = byHab.get(a.habilidade_id) || [];
        if (arr.length < 3) arr.push({ id: a.id, titulo: a.titulo, nivel: a.nivel });
        byHab.set(a.habilidade_id, arr);
      });

      setRecs(
        (habs || []).map((h: any) => ({
          id: h.id,
          nome: h.nome,
          descricao: h.descricao,
          aulas: byHab.get(h.id) || [],
        })),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border-violet-500/30">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Wand2 className="h-5 w-5 text-violet-500" />
          Assistente guiado
        </h3>
        {step > 0 && (
          <button onClick={reset} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
            <RefreshCw className="h-3 w-3" /> Recomeçar
          </button>
        )}
      </div>

      {/* progresso */}
      {step < 5 && (
        <div className="flex gap-1 mb-5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-violet-500" : "bg-violet-500/15"}`} />
          ))}
        </div>
      )}

      {/* STEP 0 — intro */}
      {step === 0 && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Responda 4 perguntas rápidas e o sistema vai sugerir habilidades, aulas e atividades certas para a criança — sem usar IA, só o nosso banco de conhecimento pedagógico.
          </p>
          <button
            onClick={() => setStep(1)}
            className="w-full py-3 rounded-xl bg-violet-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-violet-600 transition-colors"
          >
            <Sparkles className="h-4 w-4" /> Começar
          </button>
        </div>
      )}

      {/* STEP 1 — area */}
      {step === 1 && (
        <Pergunta titulo="1. Qual é a principal dificuldade?">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {AREAS.map((a) => (
              <button
                key={a.id}
                onClick={() => {
                  setArea(a.id);
                  setStep(2);
                }}
                className={`p-3 rounded-xl border-2 text-left transition-all ${
                  area === a.id ? "border-violet-500 bg-violet-500/10" : "border-border hover:border-violet-500/50"
                }`}
              >
                <div className="text-2xl mb-1">{a.emoji}</div>
                <div className="text-sm font-semibold">{a.label}</div>
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Descreva a dificuldade (opcional)
            </label>
            <textarea
              value={descricaoDif}
              onChange={(e) => setDescricaoDif(e.target.value)}
              placeholder="Ex: troca letras ao escrever, não consegue ler sílabas com R, esquece a tabuada do 7..."
              className="w-full min-h-[90px] rounded-xl border-2 border-border bg-background px-3 py-2 text-sm focus:border-violet-500 focus:outline-none resize-none"
            />
            <p className="text-[11px] text-muted-foreground">
              Quanto mais detalhe, melhor o app ajuda a encontrar habilidades e aulas certas.
            </p>
          </div>
        </Pergunta>
      )}


      {/* STEP 2 — idade */}
      {step === 2 && (
        <Pergunta titulo="2. Qual a idade da criança?">
          <div className="grid grid-cols-6 gap-2">
            {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => (
              <button
                key={n}
                onClick={() => {
                  setIdade(n);
                  setStep(3);
                }}
                className={`py-3 rounded-xl border-2 font-bold ${
                  idade === n ? "border-violet-500 bg-violet-500/10" : "border-border hover:border-violet-500/50"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <Nav onBack={() => setStep(1)} onNext={() => setStep(3)} canNext={idade !== ""} />
        </Pergunta>
      )}

      {/* STEP 3 — serie */}
      {step === 3 && (
        <Pergunta titulo="3. Qual série/ano escolar?">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {SERIES.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSerie(s);
                  setStep(4);
                }}
                className={`py-3 px-4 rounded-xl border-2 text-left ${
                  serie === s ? "border-violet-500 bg-violet-500/10" : "border-border hover:border-violet-500/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <Nav onBack={() => setStep(2)} onNext={() => setStep(4)} canNext={!!serie} />
        </Pergunta>
      )}

      {/* STEP 4 — tempo */}
      {step === 4 && (
        <Pergunta titulo="4. Há quanto tempo essa dificuldade aparece?">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {TEMPOS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTempo(t.id)}
                className={`py-3 px-4 rounded-xl border-2 text-left ${
                  tempo === t.id ? "border-violet-500 bg-violet-500/10" : "border-border hover:border-violet-500/50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <Nav
            onBack={() => setStep(3)}
            onNext={gerarRecomendacoes}
            canNext={!!tempo}
            nextLabel="Gerar recomendações"
          />
        </Pergunta>
      )}

      {/* STEP 5 — resultados */}
      {step === 5 && (
        <div className="space-y-4">
          <div className="text-xs text-muted-foreground">
            <strong>Resumo:</strong> {areaSel?.label} · {idade} anos · {serie} ·{" "}
            {TEMPOS.find((t) => t.id === tempo)?.label}
          </div>

          {areaSel && <PlanoAutomatico area={areaSel.id as AreaPlano} onAbrirAula={onAbrirAula} />}


          {loading && (
            <div className="py-8 text-center text-sm text-muted-foreground">Buscando recomendações...</div>
          )}

          {!loading && recs.length === 0 && (
            <div className="py-6 text-center text-sm text-muted-foreground">
              Ainda não temos habilidades cadastradas para essa área. Tente a busca por palavras-chave.
            </div>
          )}

          {!loading && recs.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm font-semibold">
                Encontramos {recs.length} habilidade{recs.length > 1 ? "s" : ""} recomendada{recs.length > 1 ? "s" : ""}:
              </p>
              {recs.map((r) => (
                <div key={r.id} className="p-4 rounded-2xl bg-card border-2 border-violet-500/20">
                  <div className="font-bold text-sm mb-1 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-violet-500" />
                    {r.nome}
                  </div>
                  {r.descricao && (
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{r.descricao}</p>
                  )}
                  {r.aulas.length > 0 && (
                    <div className="space-y-1.5">
                      {r.aulas.map((a) => (
                        <button
                          key={a.id}
                          onClick={() => onAbrirAula?.(a.id, a.titulo)}
                          className="w-full flex items-center gap-2 text-left px-3 py-2 rounded-lg bg-violet-500/5 hover:bg-violet-500/15 transition-colors text-xs"
                        >
                          <PlayCircle className="h-4 w-4 text-violet-500 shrink-0" />
                          <span className="flex-1 font-medium">{a.titulo}</span>
                          <span className="text-[10px] uppercase font-black text-violet-500">{a.nivel}</span>
                        </button>
                      ))}
                    </div>
                  )}
                  {onBuscar && (
                    <button
                      onClick={() => onBuscar(r.nome)}
                      className="mt-3 text-xs text-violet-500 font-semibold flex items-center gap-1 hover:underline"
                    >
                      Ver detalhes completos <ArrowRight className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

function Pergunta({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-sm">{titulo}</h4>
      {children}
    </div>
  );
}

function Nav({
  onBack,
  onNext,
  canNext,
  nextLabel = "Próximo",
}: {
  onBack: () => void;
  onNext: () => void;
  canNext: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="flex justify-between pt-2">
      <button
        onClick={onBack}
        className="px-4 py-2 rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1"
      >
        <ArrowLeft className="h-4 w-4" /> Voltar
      </button>
      <button
        onClick={onNext}
        disabled={!canNext}
        className="px-4 py-2 rounded-xl bg-violet-500 text-white text-sm font-bold flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-violet-600"
      >
        {nextLabel} <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
