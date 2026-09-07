import{describe,expect,it}from"vitest";import{existsSync,readFileSync}from"node:fs";import{resolve}from"node:path";
const sql=readFileSync(resolve(process.cwd(),"supabase/migrations/20260904230000_teacher_inclusive_lessons_science_grade_02_complete.sql"),"utf8");
const rows=Array.from(sql.matchAll(/\('(?<code>EF02CI\d{2})','(?<source>src\/escola-brilha\/curso-v4\/ciencias-2ano\/[^']+\.ts)'/g),m=>m.groups!);
describe("Ciências adaptada do 2º ano completa",()=>{
 it("cobre EF02CI01 a EF02CI08 uma única vez",()=>{expect(rows).toHaveLength(8);for(let i=1;i<=8;i++)expect(rows.filter(x=>x.code===`EF02CI${String(i).padStart(2,"0")}`)).toHaveLength(1)});
 it("usa somente aulas-fonte existentes",()=>{for(const row of rows)expect(existsSync(resolve(process.cwd(),row.source))).toBe(true)});
 it("ensina ciclo investigativo e conclusão limitada aos dados",()=>{for(const term of["1. Perguntar e prever","2. Investigar com apoio","3. Concluir com evidência","pergunta, hipótese, observação e conclusão","Mude uma condição por vez"])expect(sql).toContain(term)});
 it("inclui proteções reais",()=>{for(const term of["não manipula calor","Não olhar diretamente para o Sol","não usar espécies desconhecidas","adult_supervision","safety_screened"])expect(sql).toContain(term)});
 it("oferece múltiplos modos de resposta",()=>{for(const mode of["oral","pointing","objects","cards","drawing","photo","typing","writing"])expect(sql).toContain(mode)});
});
