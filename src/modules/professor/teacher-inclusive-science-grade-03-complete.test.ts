import{describe,expect,it}from"vitest";import{existsSync,readFileSync}from"node:fs";import{resolve}from"node:path";
const sql=readFileSync(resolve(process.cwd(),"supabase/migrations/20260904240000_teacher_inclusive_lessons_science_grade_03_complete.sql"),"utf8");
const rows=Array.from(sql.matchAll(/\('(?<code>EF03CI\d{2})','(?<source>src\/escola-brilha\/curso-v4\/ciencias-3ano\/[^']+\.ts)'/g),m=>m.groups!);
describe("Ciências adaptada do 3º ano completa",()=>{
 it("cobre EF03CI01 a EF03CI10 uma única vez",()=>{expect(rows).toHaveLength(10);for(let i=1;i<=10;i++)expect(rows.filter(x=>x.code===`EF03CI${String(i).padStart(2,"0")}`)).toHaveLength(1)});
 it("usa somente aulas-fonte existentes",()=>{for(const row of rows)expect(existsSync(resolve(process.cwd(),row.source))).toBe(true)});
 it("ensina investigação e transferência",()=>{for(const term of["1. Formular hipótese","2. Observar e comparar","3. Concluir e aplicar","pergunta, hipótese, procedimento, observação e conclusão","uma variável por vez"])expect(sql).toContain(term)});
 it("possui segurança sensorial e física",()=>{for(const term of["não usar alto volume","observação direta do Sol","sensory_exit","adult_supervision","safety_screened"])expect(sql).toContain(term)});
 it("oferece múltiplos modos de resposta",()=>{for(const mode of["oral","pointing","table","drawing","photo","typing","writing"])expect(sql).toContain(mode)});
});
