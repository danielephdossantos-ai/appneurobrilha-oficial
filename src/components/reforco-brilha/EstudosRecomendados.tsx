import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/database/supabase/client";
import { BibliotecaInternet } from "./BibliotecaInternet";
import { Sparkles } from "lucide-react";

interface Props {
  childId: string;
  subject: string;
  notes: string | null;
}

interface Crianca {
  idade: number | null;
  serie: string | null;
}

function serieLabel(s: string | null): string {
  if (!s) return "";
  // normaliza "1ano", "1º ano", "1 ano" -> "1º ano"
  const m = s.match(/(\d+)/);
  if (m) {
    const n = m[1];
    if (/infantil|ei|pre|pré/i.test(s)) return `${n}º ano educação infantil`;
    return `${n}º ano ensino fundamental`;
  }
  return s;
}

function faixaEtaria(idade: number | null, serie: string | null): string {
  if (serie) return serieLabel(serie);
  if (idade != null) {
    if (idade <= 5) return "educação infantil";
    if (idade <= 10) return "ensino fundamental anos iniciais";
    if (idade <= 14) return "ensino fundamental anos finais";
    return "ensino médio";
  }
  return "infantil";
}

export function EstudosRecomendados({ childId, subject, notes }: Props) {
  const { data: crianca } = useQuery({
    queryKey: ["child_basic", childId],
    queryFn: async (): Promise<Crianca | null> => {
      const { data } = await supabase
        .from("children")
        .select("idade,serie")
        .eq("id", childId)
        .maybeSingle();
      return (data as Crianca) ?? null;
    },
    enabled: !!childId,
    staleTime: 5 * 60_000,
  });

  const faixa = faixaEtaria(crianca?.idade ?? null, crianca?.serie ?? null);
  // monta query enriquecida — assunto + tópicos + faixa escolar (filtro de idade)
  const topicos = (notes || "")
    .split(/[,;\n]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 1) // só o primeiro tópico para foco
    .join(" ");
  const query = [subject, topicos, faixa, "para crianças"].filter(Boolean).join(" ");

  return (
    <div className="space-y-2">
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-2.5 py-1.5 flex items-center gap-2">
        <Sparkles className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
        <p className="text-[11px] text-emerald-900">
          Materiais filtrados para{" "}
          <b>
            {crianca?.serie || (crianca?.idade != null ? `${crianca.idade} anos` : "a criança")}
          </b>{" "}
          ({faixa})
        </p>
      </div>
      <BibliotecaInternet query={query} />
    </div>
  );
}
