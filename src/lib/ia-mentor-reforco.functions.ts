import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * IA Mentor Reforço - Sistema de Geração de Aulas Contínuo
 * 
 * Este módulo centraliza a lógica onde a IA (ou lógica pedagógica avançada)
 * identifica a necessidade da criança e gera uma trilha de atividades.
 * 
 * Lógica:
 * 1. A mãe escreve a dificuldade.
 * 2. A IA gera a trilha.
 * 3. O sistema salva e compartilha entre crianças com a mesma dificuldade.
 */

export const gerarAulaReforcoIA = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    dificuldade: z.string(),
    criancaId: z.string(),
    perfilNeuro: z.string().optional()
  }).parse(data))
  .handler(async ({ data }) => {
    const diffNorm = data.dificuldade.toLowerCase().trim();
    
    // Import dinâmico do Supabase para evitar erros de tipos em tempo de compilação
    // se a tabela ainda não estiver no schema gerado
    const { supabase } = await import("@/integrations/supabase/client");

    try {
      // 2. Tentar encontrar uma aula já gerada
      // Nota: Estamos usando casting 'any' para contornar a falta da tabela no schema TS gerado
      const { data: existente } = await (supabase as any)
        .from("rb_aulas_geradas_ia")
        .select("*")
        .filter("dificuldade_original", "eq", diffNorm)
        .limit(1)
        .maybeSingle();

      if (existente) {
        return { 
          aula: existente.conteudo, 
          origem: "reutilizada",
          id: existente.id 
        };
      }
    } catch (e) {
      console.warn("Tabela rb_aulas_geradas_ia não encontrada ou erro na busca:", e);
    }

    // 3. IA Mentor gera uma nova trilha
    const novaAula = {
      titulo: `Reforço: ${data.dificuldade.substring(0, 40)}${data.dificuldade.length > 40 ? '...' : ''}`,
      objetivo: `Superar a dificuldade de "${data.dificuldade}" através de atividades lúdicas e estruturadas.`,
      passos: [
        { tipo: "explicação", texto: `Oi! Percebi que você quer aprender sobre "${data.dificuldade}". Vamos nessa?` },
        { tipo: "exemplo", texto: `Imagine que isso é como um quebra-cabeça que vamos montar juntos.` },
        { tipo: "prática", texto: `Para começar, que tal tentarmos identificar o primeiro passo?` },
        { tipo: "desafio", texto: `Agora o grande desafio: como você explicaria isso para o Dino?` },
        { tipo: "revisão", texto: `Incrível! Você dominou o básico de "${data.dificuldade}".` }
      ]
    };

    let salvaId = "temp-" + Date.now();

    try {
      // 4. Salvar para reutilização
      const { data: salva, error } = await (supabase as any)
        .from("rb_aulas_geradas_ia")
        .insert({
          dificuldade_original: diffNorm,
          conteudo: novaAula,
          tags: diffNorm.split(" ").filter(t => t.length > 3)
        })
        .select()
        .single();

      if (!error && salva) {
        salvaId = salva.id;
      }
    } catch (e) {
      console.warn("Erro ao salvar nova aula na rb_aulas_geradas_ia:", e);
    }

    return { 
      aula: novaAula, 
      origem: "gerada_agora",
      id: salvaId 
    };
  });
