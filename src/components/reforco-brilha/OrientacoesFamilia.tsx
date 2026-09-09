import { useEffect, useState } from "react";
import { supabase } from "@/database/supabase/client";
import {
  Home,
  Package,
  AlertTriangle,
  Lightbulb,
  Clock,
  TrendingUp,
  Heart,
} from "lucide-react";

export interface OrientacoesFamiliaProps {
  habilidadeId: string;
  habilidadeNome: string;
}

interface OrientacaoRow {
  como_ajudar: string | null;
  materiais: string[];
  erros_comuns: string[];
  dicas_praticas: string[];
  tempo_recomendado: string | null;
  sinais_progresso: string[];
}

const asArr = (v: any): string[] => (Array.isArray(v) ? v.filter((x) => typeof x === "string") : []);

export function OrientacoesFamilia({ habilidadeId, habilidadeNome }: OrientacoesFamiliaProps) {
  const [data, setData] = useState<OrientacaoRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from("rb_orientacoes_familia")
        .select("como_ajudar,materiais,erros_comuns,dicas_praticas,tempo_recomendado,sinais_progresso")
        .eq("habilidade_id", habilidadeId)
        .maybeSingle();
      if (!alive) return;
      if (data) {
        const row = data as any;
        setData({
          como_ajudar: row.como_ajudar,
          materiais: asArr(row.materiais),
          erros_comuns: asArr(row.erros_comuns),
          dicas_praticas: asArr(row.dicas_praticas),
          tempo_recomendado: row.tempo_recomendado,
          sinais_progresso: asArr(row.sinais_progresso),
        });
      } else {
        setData(null);
      }
      setLoading(false);
    })();
    return () => {
      alive = false;
    };
  }, [habilidadeId]);

  if (loading) return null;
  if (!data) return null;

  return (
    <div className="rounded-3xl border-2 border-pink-300 bg-gradient-to-br from-pink-50 via-rose-50/40 to-amber-50 p-5 sm:p-6 space-y-5">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-2xl bg-pink-500 text-white grid place-items-center shrink-0 shadow-lg">
          <Heart className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-black uppercase tracking-widest text-pink-600">
            Orientações para a Família
          </div>
          <h4 className="text-lg sm:text-xl font-black text-foreground leading-tight">
            Como ajudar com "{habilidadeNome.toLowerCase()}" em casa
          </h4>
        </div>
      </div>

      {data.como_ajudar && (
        <Bloco icon={Home} cor="bg-rose-500" titulo="Como ajudar em casa">
          <p className="text-base leading-relaxed text-foreground">{data.como_ajudar}</p>
        </Bloco>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {data.materiais.length > 0 && (
          <Bloco icon={Package} cor="bg-amber-500" titulo="Materiais necessários" compact>
            <ul className="space-y-1.5">
              {data.materiais.map((m, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-amber-600 font-black">•</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Bloco>
        )}

        {data.tempo_recomendado && (
          <Bloco icon={Clock} cor="bg-sky-500" titulo="Tempo recomendado" compact>
            <p className="text-lg font-black text-sky-700">{data.tempo_recomendado}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Pouco e todo dia funciona melhor que muito em um dia só.
            </p>
          </Bloco>
        )}

        {data.erros_comuns.length > 0 && (
          <Bloco icon={AlertTriangle} cor="bg-red-500" titulo="Erros mais comuns" compact>
            <ul className="space-y-1.5">
              {data.erros_comuns.map((m, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 font-black">✗</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Bloco>
        )}

        {data.dicas_praticas.length > 0 && (
          <Bloco icon={Lightbulb} cor="bg-emerald-500" titulo="Dicas práticas" compact>
            <ul className="space-y-1.5">
              {data.dicas_praticas.map((m, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-emerald-500 font-black">★</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Bloco>
        )}
      </div>

      {data.sinais_progresso.length > 0 && (
        <Bloco icon={TrendingUp} cor="bg-violet-500" titulo="Sinais de progresso">
          <p className="text-xs text-muted-foreground mb-2">
            Comemore quando perceber qualquer um desses sinais 🎉
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.sinais_progresso.map((m, i) => (
              <div
                key={i}
                className="flex items-start gap-2 bg-white/70 border border-violet-200 rounded-2xl p-3 text-sm"
              >
                <span className="text-violet-600 font-black">✓</span>
                <span>{m}</span>
              </div>
            ))}
          </div>
        </Bloco>
      )}
    </div>
  );
}

function Bloco({
  icon: Icon,
  cor,
  titulo,
  children,
  compact,
}: {
  icon: any;
  cor: string;
  titulo: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div className={`bg-white rounded-2xl border border-border ${compact ? "p-3" : "p-4"}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`h-8 w-8 rounded-xl ${cor} text-white grid place-items-center shrink-0`}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
          {titulo}
        </div>
      </div>
      {children}
    </div>
  );
}

export default OrientacoesFamilia;
