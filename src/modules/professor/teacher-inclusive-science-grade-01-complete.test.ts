import{describe,expect,it}from"vitest";import{existsSync,readFileSync}from"node:fs";import{resolve}from"node:path";
const sql=readFileSync(resolve(process.cwd(),"supabase/migrations/20260904220000_teacher_inclusive_lessons_science_grade_01_complete.sql"),"utf8");
const rows=Array.from(sql.matchAll(/\('(?<code>EF01CI\d{2})','(?<source>src\/escola-brilha\/curso-v4\/ciencias-1ano\/[^']+\.ts)'/g),m=>m.groups!);
describe("Ciências adaptada do 1º ano completa",()=>{
 it("cobre EF01CI01 a EF01CI06 uma única vez",()=>{expect(rows).toHaveLength(6);for(let i=1;i<=6;i++)expect(rows.filter(x=>x.code===`EF01CI${String(i).padStart(2,"0")}`)).toHaveLength(1)});
 it("usa somente aulas-fonte existentes",()=>{for(const row of rows)expect(existsSync(resolve(process.cwd(),row.source))).toBe(true)});
 it("ensina investigação concreta e segura",()=>{for(const term of["Prepare com segurança","1. Observar de verdade","2. Investigar com apoio","3. Explicar com autonomia","eu observei e eu acho","safety_screened"])expect(sql).toContain(term)});
 it("inclui ciência, diversidade e tempo sem respostas rígidas",()=>{for(const term of["propriedade, material e uso","respeitar diferenças corporais","Não há aparência certa","diferentes rotinas","uma pista observável"])expect(sql).toContain(term)});
 it("oferece múltiplos modos de resposta",()=>{for(const mode of["oral","pointing","objects","cards","drawing","photo","typing","writing"])expect(sql).toContain(mode)});
});
