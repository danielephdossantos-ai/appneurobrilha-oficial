/**
 * Auto-registro de todas as aulas escritas à mão em src/escola-brilha/data/*.ts.
 * Cada arquivo deve fazer `export default { ... } satisfies Aula`.
 */
const modules = import.meta.glob("./data/*.ts", { eager: true });
const registry = {};
for (const path in modules) {
    const aula = modules[path].default;
    if (aula && aula.codigo)
        registry[aula.codigo.toUpperCase()] = aula;
}
export function getAula(codigo) {
    return registry[codigo.toUpperCase()];
}
export function listAulas() {
    return Object.values(registry).sort((a, b) => a.codigo.localeCompare(b.codigo));
}
export function hasAula(codigo) {
    return !!registry[codigo.toUpperCase()];
}
