import { createHash } from "node:crypto";
import type { AulaGerada } from "./professor-mentor-engine.server";

function cacheKey(input: {
  modulo: string;
  tema: string;
  materia: string;
  idade: number;
  serie?: string;
}) {
  return createHash("sha256")
    .update(JSON.stringify({
      modulo: input.modulo,
      tema: input.tema.trim().toLocaleLowerCase("pt-BR"),
      materia: input.materia.trim().toLocaleLowerCase("pt-BR"),
      idade: input.idade,
      serie: input.serie || "",
    }))
    .digest("hex");
}


export async function buscarAulaMentorExistente({
  supabase,
  modulo,
  tema,
  materia,
  idade,
  serie,
}: {
  supabase: any;
  modulo: string;
  tema: string;
  materia: string;
  idade: number;
  serie?: string;
}) {
  const key = cacheKey({ modulo, tema, materia, idade, serie });
  const { data } = await supabase
    .from("rb_aulas_geradas_ia")
    .select("id,aula_id,usage_count")
    .eq("cache_key", key)
    .maybeSingle();
  return data?.aula_id ? { aulaId: data.aula_id, cacheId: data.id, cacheKey: key } : null;
}

export async function persistirAulaMentor({
  supabase,
  modulo,
  tema,
  materia,
  idade,
  serie,
  aula,
  forceNew = false,
}: {
  supabase: any;
  modulo: "REFORCO" | "MISSAO_PROVA" | "MISSAO_TRABALHO";
  tema: string;
  materia: string;
  idade: number;
  serie?: string;
  aula: AulaGerada;
  forceNew?: boolean;
}) {
  const key = cacheKey({ modulo, tema, materia, idade, serie });

  const { data: cacheExistente } = await supabase
    .from("rb_aulas_geradas_ia")
    .select("id,aula_id,usage_count")
    .eq("cache_key", key)
    .maybeSingle();

  if (cacheExistente?.aula_id && !forceNew) {
    await supabase
      .from("rb_aulas_geradas_ia")
      .update({ usage_count: Number(cacheExistente.usage_count || 0) + 1 })
      .eq("id", cacheExistente.id);

    const { data: aulaAtual } = await supabase
      .from("rb_aulas")
      .select("usage_count")
      .eq("id", cacheExistente.aula_id)
      .maybeSingle();
    await supabase
      .from("rb_aulas")
      .update({ usage_count: Number(aulaAtual?.usage_count || 0) + 1 })
      .eq("id", cacheExistente.aula_id);

    return { aulaId: cacheExistente.aula_id, recemGerada: false, cacheKey: key };
  }

  let { data: categoria } = await supabase
    .from("rb_categorias")
    .select("id")
    .eq("nome", "Pedagógico")
    .maybeSingle();
  if (!categoria) {
    const r = await supabase.from("rb_categorias").insert({ nome: "Pedagógico", ordem: 99 }).select("id").single();
    if (r.error) throw new Error(`Falha ao criar categoria pedagógica: ${r.error.message}`);
    categoria = r.data;
  }

  let { data: habilidade } = await supabase
    .from("rb_habilidades")
    .select("id")
    .eq("nome", "Missões de Estudo IA")
    .maybeSingle();

  if (!habilidade) {
    const r = await supabase.from("rb_habilidades").insert({
      categoria_id: categoria.id,
      nome: "Aulas do Professor Mentor",
      descricao: "Aulas adaptativas geradas e validadas pelo motor pedagógico do NeuroBrilha",
    }).select("id").single();
    if (r.error) throw new Error(`Falha ao criar habilidade pedagógica: ${r.error.message}`);
    habilidade = r.data;
  }

  const { data: aulaDb, error: aulaError } = await supabase
    .from("rb_aulas")
    .insert({
      habilidade_id: habilidade.id,
      titulo: aula.titulo,
      objetivo: aula.objetivo,
      nivel: "basico",
      faixa_etaria: `${idade} anos`,
      ordem: 0,
      usage_count: 1,
    })
    .select("id")
    .single();
  if (aulaError || !aulaDb) throw new Error(`Falha ao salvar aula: ${aulaError?.message || "registro vazio"}`);

  const paginas = aula.paginas.map((p, idx) => ({
    aula_id: aulaDb.id,
    ordem: idx + 1,
    tipo: ["explicacao", "exemplo", "exercicio", "dica", "video", "imagem", "passo_a_passo"].includes(p.tipo)
      ? p.tipo
      : "explicacao",
    titulo: p.titulo,
    conteudo: p.conteudo,
  }));

  const { error: paginasError } = await supabase.from("rb_paginas_aula").insert(paginas);
  if (paginasError) {
    await supabase.from("rb_aulas").delete().eq("id", aulaDb.id);
    throw new Error(`Falha ao salvar páginas da aula: ${paginasError.message}`);
  }

  const { error: cacheError } = await supabase.from("rb_aulas_geradas_ia").insert({
    dificuldade_original: tema.trim().toLocaleLowerCase("pt-BR"),
    conteudo: aula,
    tags: [modulo.toLowerCase(), materia.toLowerCase(), serie || ""].filter(Boolean),
    aula_id: aulaDb.id,
    cache_key: key,
    modulo,
    tema,
    materia,
    idade,
    serie: serie || null,
    usage_count: 1,
  });

  if (cacheError) {
    console.warn("[ProfessorMentor] Aula salva, mas cache não foi registrado:", cacheError.message);
  }

  return { aulaId: aulaDb.id, recemGerada: true, cacheKey: key };
}
