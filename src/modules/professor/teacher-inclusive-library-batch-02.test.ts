import {describe,expect,it} from "vitest";import{readFileSync}from"node:fs";import{resolve}from"node:path";
const sql=readFileSync(resolve(process.cwd(),"supabase/migrations/20260903020000_teacher_inclusive_lessons_batch_02.sql"),"utf8");
describe("biblioteca inclusiva — lote 02",()=>{
 it("liga cinco adaptações às fontes auditadas",()=>{for(const code of ["EF01MA06","EF01MA07","EF01MA08","EF01MA09","EF01MA10"]){expect(sql).toContain(`src/escola-brilha/data/${code}.ts`);expect(sql).toContain(`/escola-brilha/${code}`)}expect(sql.match(/true,true,true,'published'/g)).toHaveLength(5)});
 it("usa rotina ajustável e não tempo definido pelo diagnóstico",()=>{expect(sql.match(/"routine":"adjustable"/g)).toHaveLength(5);expect(sql).toContain("diagnóstico não define tempo fixo");expect(sql).toContain("Guia baseado em evidências")});
 it("separa orientação, atividade, acessibilidade e gabarito",()=>{expect(sql.match(/Guia de mediação/g)).toHaveLength(5);expect(sql.match(/"response_modes"/g)).toHaveLength(5);expect(sql.match(/"page":1/g)).toHaveLength(5);expect(sql).toContain("ON CONFLICT (source_lesson_key,codigo_bncc) DO UPDATE")});
});
