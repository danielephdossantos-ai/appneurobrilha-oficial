import { listAulas, getAula } from "./registry";
import { supabase } from "@/integrations/supabase/client";
/** Tempo estimado em minutos, derivado do volume de conteúdo da aula. */
export function estimarTempo(a) {
    const exers = a.exercicios?.length ?? 0;
    const quiz = a.quiz?.length ?? 0;
    const niveis = (a.niveis?.facil?.length ?? 0) +
        (a.niveis?.medio?.length ?? 0) +
        (a.niveis?.dificil?.length ?? 0);
    const base = 6 + exers * 2 + quiz * 1 + Math.round(niveis * 1.2);
    return Math.max(8, Math.min(30, base));
}
/** Dificuldade oficial da aula, baseada no ano BNCC. */
export function dificuldadeDe(a) {
    const ano = (a.ano || "").toLowerCase();
    if (ano.includes("infantil") || ano.startsWith("1º") || ano.startsWith("2º"))
        return "Fácil";
    if (ano.startsWith("3º") || ano.startsWith("4º") || ano.startsWith("5º"))
        return "Médio";
    return "Difícil";
}
export function metaDaAula(a) {
    return {
        aula: a,
        tempoEstimadoMin: estimarTempo(a),
        dificuldade: dificuldadeDe(a),
        objetivo: a.objetivos?.[0] ?? a.missao,
    };
}
function normalizarSerie(s) {
    return (s ?? "").toLowerCase().replace(/\s+/g, " ").trim();
}
/**
 * Escolhe a próxima missão recomendada para a criança.
 * Ordem de preferência:
 *  1. Aula da série da criança, não concluída, ordenada pelo código BNCC.
 *  2. Qualquer aula não concluída (mais próxima da série da criança).
 *  3. `null` — tudo concluído.
 */
export async function proximaMissao(childId, serieCrianca) {
    const todas = listAulas();
    if (todas.length === 0)
        return null;
    let concluidas = new Set();
    let ultimoAcessoCodigo = null;
    if (childId) {
        const { data: progressoRows } = await supabase
            .from("escola_progresso")
            .select("codigo_bncc, concluida, ultima_visita_em")
            .eq("child_id", childId);
        const rows = (progressoRows ?? []);
        rows.forEach(r => {
            if (r.concluida)
                concluidas.add(r.codigo_bncc);
        });
        // Encontra a aula acessada por último (independente de estar concluída ou não, 
        // mas priorizamos retomar o que não terminou ou o último progresso real)
        const comVisita = rows
            .filter(r => r.ultima_visita_em)
            .sort((a, b) => new Date(b.ultima_visita_em).getTime() - new Date(a.ultima_visita_em).getTime());
        if (comVisita.length > 0) {
            ultimoAcessoCodigo = comVisita[0].codigo_bncc;
        }
    }
    // Prioridade 1: O que o aluno acessou por último (se existir no registro)
    if (ultimoAcessoCodigo) {
        const aulaUltima = getAula(ultimoAcessoCodigo);
        if (aulaUltima)
            return metaDaAula(aulaUltima);
    }
    const serie = normalizarSerie(serieCrianca);
    const pendentes = todas.filter((a) => !concluidas.has(a.codigo));
    if (pendentes.length === 0)
        return null;
    const daSerie = serie
        ? pendentes.filter((a) => normalizarSerie(a.ano) === serie)
        : [];
    const alvo = (daSerie.length > 0 ? daSerie : pendentes).sort((a, b) => a.codigo.localeCompare(b.codigo))[0];
    return metaDaAula(alvo);
}
export function metaDoCodigo(codigo) {
    const a = getAula(codigo);
    return a ? metaDaAula(a) : null;
}
