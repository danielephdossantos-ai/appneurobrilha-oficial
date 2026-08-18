import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { chamarProfessorMentor } from "./professor-mentor-engine.server";
import { buscarAulaMentorExistente, persistirAulaMentor } from "./professor-mentor-persistence.server";

/** Geração real do Reforço Brilha usando o mesmo Professor Mentor das Missões. */
export const gerarAulaReforcoIA = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    dificuldade: z.string().min(2),
    criancaId: z.string().uuid(),
  }).parse(data))
  .handler(async ({ data }) => {
    const diffNorm = data.dificuldade.trim();

    const { data: crianca } = await supabase
      .from("children")
      .select("nome, idade, serie, diagnostico, hiperfoco")
      .eq("id", data.criancaId)
      .maybeSingle();

    if (!crianca) throw new Error("Não foi possível carregar o perfil da criança.");

    const idade = crianca.idade || 7;
    const serie = crianca.serie || undefined;
    const cache = await buscarAulaMentorExistente({
      supabase, modulo: "REFORCO", tema: diffNorm, materia: "Reforço escolar", idade, serie
    });
    if (cache) {
      const { data: paginas } = await supabase
        .from("rb_paginas_aula")
        .select("id,ordem,tipo,titulo,conteudo")
        .eq("aula_id", cache.aulaId)
        .order("ordem", { ascending: true });
      const { data: cabecalho } = await supabase
        .from("rb_aulas")
        .select("titulo,objetivo")
        .eq("id", cache.aulaId)
        .maybeSingle();
      if (paginas?.length) {
        const { data: cacheAtual } = await supabase.from("rb_aulas_geradas_ia").select("usage_count").eq("id", cache.cacheId).maybeSingle();
        await supabase.from("rb_aulas_geradas_ia").update({ usage_count: Number(cacheAtual?.usage_count || 0) + 1 }).eq("id", cache.cacheId);
        return {
          id: cache.aulaId,
          aula: { titulo: cabecalho?.titulo || diffNorm, objetivo: cabecalho?.objetivo || "", paginas },
          origem: "reutilizada",
          recemGerada: false,
        };
      }
    }

    const { data: anamnese } = await supabase
      .from("anamnese_v2")
      .select("responses")
      .eq("child_id", data.criancaId)
      .maybeSingle();

    const aula = await chamarProfessorMentor(
      "REFORCO",
      diffNorm,
      "Reforço escolar",
      {
        nome: crianca.nome || "Criança",
        idade,
        serie,
        diagnostico: crianca.diagnostico || undefined,
        hiperfoco: crianca.hiperfoco || undefined,
        necessidadesAcessibilidade: anamnese?.responses ? JSON.stringify(anamnese.responses) : undefined,
      },
    );

    const salvo = await persistirAulaMentor({
      supabase,
      modulo: "REFORCO",
      tema: diffNorm,
      materia: "Reforço escolar",
      idade,
      serie,
      aula,
    });

    return {
      id: salvo.aulaId,
      aula,
      origem: salvo.recemGerada ? "gerada_gemini" : "reutilizada",
      recemGerada: salvo.recemGerada,
    };
  });
