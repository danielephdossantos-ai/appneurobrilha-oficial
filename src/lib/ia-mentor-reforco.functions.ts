import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

/**
 * IA Mentor Reforço - Sistema de Geração de Aulas Contínuo
 * 
 * Este módulo centraliza a lógica onde a IA (ou lógica pedagógica avançada)
 * identifica a necessidade da criança e gera uma trilha de atividades.
 * 
 * Se uma dificuldade similar já foi resolvida para outra criança, o sistema
 * reutiliza a trilha bem-sucedida, criando um ecossistema contínuo.
 */

export const gerarAulaReforcoIA = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    dificuldade: z.string(),
    criancaId: z.string(),
    perfilNeuro: z.string().optional()
  }).parse(data))
  .handler(async ({ data }) => {
    // 1. Normalizar a dificuldade para busca
    const diffNorm = data.dificuldade.toLowerCase().trim();
    
    // 2. Tentar encontrar uma aula já gerada no Supabase para essa dificuldade
    // Usamos o supabaseAdmin para busca global entre usuários (conforme pedido)
    const { data: existente } = await supabase
      .from("rb_aulas_geradas_ia")
      .select("*")
      .textSearch("dificuldade_original", diffNorm)
      .limit(1)
      .maybeSingle();

    if (existente) {
      console.log("[IA Mentor] Reutilizando aula existente para:", diffNorm);
      return { 
        aula: existente.conteudo, 
        origem: "reutilizada",
        id: existente.id 
      };
    }

    // 3. Se não existe, a "IA Mentor" gera uma nova (aqui simulada com lógica pedagógica)
    // Em uma implementação futura, isso chamaria um modelo de linguagem.
    console.log("[IA Mentor] Gerando nova aula para:", diffNorm);
    
    // Lógica de geração baseada no input (Simulada)
    const novaAula = {
      titulo: `Reforço: ${data.dificuldade}`,
      objetivo: `Superar a dificuldade de ${data.dificuldade} através de atividades lúdicas e estruturadas.`,
      passos: [
        { tipo: "explicação", texto: `Olá! Vamos aprender sobre ${data.dificuldade} juntos.` },
        { tipo: "prática", texto: `Tente este pequeno desafio...` },
        { tipo: "revisão", texto: `Muito bem! Você está progredindo.` }
      ]
    };

    // 4. Salvar no Supabase para reutilização futura
    const { data: salva, error } = await supabase
      .from("rb_aulas_geradas_ia")
      .insert({
        dificuldade_original: diffNorm,
        conteudo: novaAula,
        tags: diffNorm.split(" ")
      })
      .select()
      .single();

    if (error) console.error("Erro ao salvar aula IA:", error);

    return { 
      aula: novaAula, 
      origem: "gerada_agora",
      id: salva?.id 
    };
  });
