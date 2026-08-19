/**
 * Biblioteca Oficial de Missões — Registry
 * ----------------------------------------
 * Carrega automaticamente todos os arquivos de missão em ./missoes/*.ts.
 * Bloqueia duplicidades (dois arquivos exportando o mesmo código BNCC).
 */
const modules = import.meta.glob("./missoes/*.ts", { eager: true });
const registry = {};
const duplicidades = [];
for (const path in modules) {
    const missao = modules[path].default;
    if (!missao || !missao.codigo)
        continue;
    const chave = missao.codigo.toUpperCase();
    if (registry[chave]) {
        duplicidades.push(`${chave} duplicado em ${path}`);
        continue;
    }
    registry[chave] = { ...missao, codigo: chave };
}
if (duplicidades.length && typeof console !== "undefined") {
    // Nunca mesclar duplicados silenciosamente — sinalizar em dev.
    console.warn("[BibliotecaOficial] duplicidades ignoradas:", duplicidades);
}
export function getMissaoOficial(codigo) {
    return registry[codigo.toUpperCase()];
}
export function hasMissaoOficial(codigo) {
    return !!registry[codigo.toUpperCase()];
}
export function listMissoesOficiais() {
    return Object.values(registry).sort((a, b) => a.codigo.localeCompare(b.codigo));
}
export function listMissoesPorDisciplina(disciplina) {
    const d = disciplina.toLowerCase();
    return listMissoesOficiais().filter((m) => m.disciplina.toLowerCase() === d);
}
export function listMissoesPorAno(ano) {
    const a = ano.toLowerCase();
    return listMissoesOficiais().filter((m) => m.ano.toLowerCase() === a);
}
export function totalMissoesOficiais() {
    return Object.keys(registry).length;
}
const ORDEM_ETAPA = {
    "Educação Infantil": 0,
    "Ensino Fundamental": 1,
    "Ensino Médio": 2,
};
function grupoOrdenado(items, key, cmp = (a, b) => a.localeCompare(b)) {
    const map = new Map();
    for (const it of items) {
        const k = key(it);
        const arr = map.get(k) ?? [];
        arr.push(it);
        map.set(k, arr);
    }
    return [...map.entries()].sort(([a], [b]) => cmp(a, b));
}
export function getBibliotecaNacionalMissoes() {
    const todas = listMissoesOficiais();
    return grupoOrdenado(todas, (m) => m.etapa, (a, b) => (ORDEM_ETAPA[a] ?? 99) - (ORDEM_ETAPA[b] ?? 99) || a.localeCompare(b)).map(([etapa, porEtapa]) => ({
        etapa,
        anos: grupoOrdenado(porEtapa, (m) => m.ano).map(([ano, porAno]) => ({
            ano,
            disciplinas: grupoOrdenado(porAno, (m) => m.disciplina).map(([disciplina, porDisc]) => ({
                disciplina,
                unidadesTematicas: grupoOrdenado(porDisc, (m) => m.unidadeTematica).map(([unidadeTematica, porUnid]) => ({
                    unidadeTematica,
                    objetosConhecimento: grupoOrdenado(porUnid, (m) => m.objetoConhecimento).map(([objetoConhecimento, porObj]) => ({
                        objetoConhecimento,
                        missoes: porObj
                            .sort((a, b) => a.codigo.localeCompare(b.codigo))
                            .map((m) => ({ codigo: m.codigo, missao: m })),
                    })),
                })),
            })),
        })),
    }));
}
/** Metadados oficiais da Biblioteca Nacional de Missões. */
export const BIBLIOTECA_NACIONAL_MISSOES = {
    hierarquia: [
        "Etapa",
        "Ano Escolar",
        "Disciplina",
        "Unidade Temática",
        "Objeto de Conhecimento",
        "Código BNCC",
        "Missão",
    ],
    regra: "Cada código BNCC possui exatamente UMA missão. Duplicidades são rejeitadas no registry.",
    viewCobertura: "public.vw_biblioteca_nacional_missoes",
};
