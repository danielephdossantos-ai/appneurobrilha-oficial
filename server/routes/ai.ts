import type { Express, Request, Response } from "express";
import { db } from "../db";
import { habilidadeTecnica, tecnicasPedagogicas } from "../../shared/schema";
import { eq } from "drizzle-orm";

export function registerAiRoutes(app: Express): void {
  app.post("/api/neurobrilha-ai", async (req: Request, res: Response) => {
    try {
      const payload = req.body;
      const {
        mode,
        child,
        subject,
        topic,
        message,
        chatHistory,
        image,
        mascot,
        reexplainMethod,
        bncc_code,
      } = payload;

      const mascotName = mascot?.name || "Pip";
      const mascotDescription = mascot?.description || "Seu companheiro de jornada";
      const mascotCategory = mascot?.category || "primary";
      const mascotLevel = mascot?.level || 1;
      const mascotAffinity = mascot?.affinity || 0;
      const mascotPersonaBlock = `MASCOTE COMPANHEIRO (ESCOLHIDO PELA CRIANÇA NA LOJA):
        - Nome: ${mascotName}
        - Categoria: ${mascotCategory}
        - Descrição: ${mascotDescription}
        - Nível: ${mascotLevel} · Afinidade: ${mascotAffinity}/100
        VOCÊ É ${mascotName.toUpperCase()}. Fale na primeira pessoa como esse mascote.`;

      if (!mode || !child) {
        return res.status(400).json({ error: "mode e child são obrigatórios" });
      }

      const AI_API_KEY = process.env.OPENAI_API_KEY || process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
      const AI_BASE_URL =
        process.env.AI_INTEGRATIONS_OPENAI_BASE_URL || "https://api.openai.com/v1";

      if (!AI_API_KEY) {
        return res
          .status(500)
          .json({ error: "AI API Key não configurada. Configure OPENAI_API_KEY nos Secrets." });
      }

      let systemPrompt = "";
      let userPrompt: any = "";

      if (mode === "terapeuta") {
        systemPrompt = `Você é ${mascotName} — o mascote companheiro escolhido pela criança na Loja de Mascotes — agora atuando como terapeuta/orientador parental especializado em neurodesenvolvimento infantil.
        ${mascotPersonaBlock}
        Informações da criança: Nome: ${child.nome || "Não informado"}, Idade: ${child.idade || "Não informada"} anos, Diagnóstico: ${child.diagnostico || "Em avaliação"}, Hiperfoco: ${child.hiperfoco || "Variados"}.
        Seja empático(a), técnico(a) mas acessível. Você não substitui um médico ou terapeuta presencial.`;
        userPrompt = message || "Olá";
      } else if (mode === "escola") {
        const childNiveis = child.niveis || {};
        const currentLevel = childNiveis[subject] || 2;
        const nivelDesc: Record<number, string> = {
          1: "Concreto total: use metáforas físicas, evite abstrações.",
          2: "Visual guiado: frases curtas e suporte visual.",
          3: "Semi-abstrato: pode usar símbolos e textos.",
          4: "Abstrato: nível padrão da BNCC.",
        };
        const serie = (child.serie || "").toString();
        const isEarlyYears = /infantil|pré|pre|^1º/i.test(serie);
        const isMid = /^[2-5]º/.test(serie);

        let tecnicasContext = "";
        if (bncc_code) {
          try {
            const techs = await db
              .select({ tecnica: tecnicasPedagogicas })
              .from(habilidadeTecnica)
              .leftJoin(
                tecnicasPedagogicas,
                eq(habilidadeTecnica.tecnicaId, tecnicasPedagogicas.id),
              )
              .where(eq(habilidadeTecnica.codigoBncc, bncc_code));
            if (techs.length > 0) {
              tecnicasContext =
                "\nTÉCNICAS OBRIGATÓRIAS:\n" +
                techs.map((t) => `- ${t.tecnica?.nome}: ${t.tecnica?.descricao}`).join("\n");
            }
          } catch (_) {}
        }

        systemPrompt = `Você é ${mascotName} — PROFESSOR(A) PARTICULAR no NeuroBrilha Kids.
        ${mascotPersonaBlock}
        REGRAS: 1. MÁXIMO 1 frase curta (max 10 palavras). 2. PROIBIDO emojis. 3. Ensino gradual.
        ${nivelDesc[currentLevel] || nivelDesc[2]}
        ${tecnicasContext}
        Retorne EXCLUSIVAMENTE JSON com: etapa1_explicação, etapa2_demonstração, etapa3_treino_guiado, etapa4_prática, etapa5_desafio, etapa6_avaliação, etapa7_domínio, dica, metodo_usado.`;
        userPrompt = `Ensine o tema "${topic || "aprendizado"}" para ${child.nome || "o aluno"}.${reexplainMethod ? ` Use o método ${reexplainMethod.toUpperCase()}.` : ""}`;
      } else if (mode === "professor-foto") {
        systemPrompt = `Você é ${mascotName} — PROFESSOR(A) de tarefas via foto. ${mascotPersonaBlock} Respostas curtas, sem emojis. Retorne JSON: materia, ocr_texto, explicacao, passos[], exercicio_similar, video_tema.`;
        userPrompt = [
          { type: "text", text: "Explique como eu faço esta tarefa." },
          {
            type: "image_url",
            image_url: {
              url: image?.startsWith("data:") ? image : `data:image/jpeg;base64,${image}`,
            },
          },
        ];
      } else if (mode === "amigo-virtual") {
        systemPrompt = `Você é ${mascotName} — AMIGO VIRTUAL da criança. ${mascotPersonaBlock} Frases curtas e acolhedoras. Sem emojis. Máximo 2 linhas. Responda em JSON com campo "response".`;
        userPrompt = message || "Oi";
      } else {
        return res.status(400).json({ error: `Modo desconhecido: ${mode}` });
      }

      const aiRes = await fetch(`${AI_BASE_URL}/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            ...(chatHistory || []),
            { role: "user", content: userPrompt },
          ],
          response_format: { type: "json_object" },
          max_tokens: 1024,
        }),
      });

      if (!aiRes.ok) {
        const errText = await aiRes.text();
        console.error("AI error:", aiRes.status, errText);
        return res.status(500).json({ error: `AI error ${aiRes.status}` });
      }

      const result = (await aiRes.json()) as any;
      const content = result?.choices?.[0]?.message?.content;
      if (!content) return res.status(500).json({ error: "AI returned empty response" });

      if (mode === "amigo-virtual" || mode === "terapeuta") {
        try {
          const parsed = JSON.parse(content);
          return res.json(parsed.response || parsed.t || content);
        } catch {
          return res.json(content);
        }
      }

      res.setHeader("Content-Type", "application/json");
      res.send(content);
    } catch (e: any) {
      console.error("neurobrilha-ai error:", e);
      res.status(500).json({ error: e.message });
    }
  });
}
