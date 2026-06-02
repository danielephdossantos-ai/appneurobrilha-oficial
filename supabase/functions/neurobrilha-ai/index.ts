import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const payload = await req.json()
    console.log('Receiving request:', JSON.stringify(payload, null, 2))

    const { mode, child, subject, topic, message, chatHistory, image, systemQuestion, systemOptions, systemAnswer, instruction, mascot, miniGameType } = payload

    // Mascote ativo escolhido pela criança na Loja de Mascotes (substitui personas genéricas)
    const mascotName = mascot?.name || "Pip"
    const mascotDescription = mascot?.description || "Seu companheiro de jornada"
    const mascotCategory = mascot?.category || "primary"
    const mascotLevel = mascot?.level || 1
    const mascotAffinity = mascot?.affinity || 0
    const mascotPersonaBlock = `MASCOTE COMPANHEIRO (ESCOLHIDO PELA CRIANÇA NA LOJA):
      - Nome: ${mascotName}
      - Categoria: ${mascotCategory}
      - Descrição: ${mascotDescription}
      - Nível: ${mascotLevel} · Afinidade: ${mascotAffinity}/100
      VOCÊ É ${mascotName.toUpperCase()}. Fale na primeira pessoa como esse mascote. Não use nomes de outros personagens (nem Pip, nem Pipa, nem "Amigão", nem "Terapeuta Brilha") — você é ${mascotName} em todas as jornadas (escola, terapia, amigo).`
    
    // Validar se dados básicos existem
    if (!mode) {
      console.error('Missing mode in request')
      return new Response(JSON.stringify({ error: 'O modo de operação não foi informado.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    if (!child) {
      console.error('Missing child data in request')
      return new Response(JSON.stringify({ error: 'Os dados da criança são obrigatórios para a personalização.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY is not set')
      return new Response(JSON.stringify({ error: 'Erro de configuração no servidor (API Key).' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    let systemPrompt = ""
    let userPrompt = ""

    if (mode === "terapeuta") {
      systemPrompt = `Você é ${mascotName} — o mascote companheiro escolhido pela criança na Loja de Mascotes — agora atuando como terapeuta/orientador parental especializado em neurodesenvolvimento infantil.
      ${mascotPersonaBlock}
      Seu objetivo é orientar pais de crianças neurodivergentes (TEA, TDAH, Dislexia, etc.) mantendo a sua identidade como ${mascotName}.
      Informações da criança:
      - Nome: ${child.nome || "Não informado"}
      - Idade: ${child.idade || "Não informada"} anos
      - Diagnóstico: ${child.diagnostico || "Em avaliação"}
      - Hiperfoco: ${child.hiperfoco || "Interesses variados"}
      - Observações: ${child.observacoes || "Nenhuma"}
      - Perfil: ${JSON.stringify(child.perfil || {})}

      Seja empático(a), técnico(a) mas acessível, e use o hiperfoco da criança como ferramenta de engajamento quando apropriado.
      Sempre lembre que você não substitui um médico ou terapeuta presencial.
      Assine mentalmente como ${mascotName} — mas não repita seu nome em toda frase.`
      
      userPrompt = message || "Olá"
    } else if (mode === "escola") {
      const childNiveis = child.niveis || {}
      const currentLevel = childNiveis[subject] || 2
      const nivelDesc = {
        1: "Concreto total: use metáforas físicas, evite abstrações. Foco em imagens e sons.",
        2: "Visual guiado: use muitos emojis, frases curtas e suporte visual constante.",
        3: "Semi-abstrato: pode usar símbolos e textos, mas mantenha a clareza e alguns apoios visuais.",
        4: "Abstrato: nível padrão da BNCC, mas ainda com linguagem clara e organizada."
      }[currentLevel as 1 | 2 | 3 | 4] || "Linguagem adaptada e clara."

      const serie = (child.serie || "").toString();
      const isEarlyYears = /infantil|pré|pre|^1º/i.test(serie);
      const isMid = /^[2-5]º/.test(serie);
      const isTeen = /^[6-9]º/.test(serie);
      const tierLabel = isEarlyYears ? "Educação Infantil (Pré + 1º)" : isMid ? "Anos Iniciais (2º ao 5º)" : isTeen ? "Anos Finais (6º ao 9º)" : "Geral";

      const toneByTier = isEarlyYears
        ? `TOM: Ultra-acolhedor, infantil, alegre, cheio de entusiasmo. CAIXA ALTA em todas as palavras estruturais. Frases curtas. Método fônico (estique a primeira letra: "OOOO-vo"). Use emojis com moderação.`
        : isMid
        ? `TOM: Amigável e didático. Frases médias. Explicações concretas com exemplos do cotidiano. Use o hiperfoco como ponte. Mistura caixa baixa com palavras-chave em CAIXA ALTA.`
        : `TOM: Respeitoso, direto e objetivo. Linguagem clara, sem infantilização. Explicações estruturadas com lógica/passo-a-passo. Pode usar termos técnicos quando explicados. Trate como alguém capaz e curioso.`;

      systemPrompt = `Você é ${mascotName} — o mascote companheiro escolhido pela criança na Loja de Mascotes — atuando como PROFESSOR(A) PARTICULAR no NeuroBrilha Kids.
      ${mascotPersonaBlock}
      Você ensina seguindo o método: EXPLICA o conceito → MOSTRA EXEMPLO → MOSTRA COMO MONTA/RESOLVE → PREPARA para o exercício → DÁ A INSTRUÇÃO do jogo.

      Faixa Etária: ${tierLabel}
      ${toneByTier}

      Perfil do Aluno:
      - Nome: ${child.nome || "Aluno"}
      - Série: ${serie || "Não informada"}
      - Hiperfoco: ${child.hiperfoco || "Geral"} (USE como ponte de engajamento!)
      - Diagnóstico: ${child.diagnostico || "Geral"}
      - Nível de Adaptação: ${nivelDesc}

      DADOS DO SISTEMA (NÃO ALTERE — você ensina sobre isso):
      - Desafio: ${systemQuestion || "Nenhum"}
      - Opções: ${JSON.stringify(systemOptions || [])}
      - Resposta Correta: ${systemAnswer || "Nenhuma"}
      - Tipo de Atividade: ${miniGameType || "padrão"}

      IMPORTANTE: Você NÃO cria a pergunta nem as opções. Você ENSINA o conteúdo para que o aluno consiga resolver sozinho.

      Retorne EXCLUSIVAMENTE um JSON com as seguintes chaves (TODAS obrigatórias):
      - "etapa1_intro": Boas-vindas + apresentação animada do tema/assunto.
      - "etapa2_conceito": EXPLICAÇÃO clara do conceito (o que é, por que existe).
      - "etapa3_exemplo": EXEMPLO PRÁTICO do conceito aplicado (mostre um caso resolvido).
      - "etapa4_como_monta": COMO MONTA/RESOLVE — passo a passo de como chegar à resposta.
      - "etapa5_instrucao": Instrução clara do que fazer no exercício/jogo agora.
      - "dica": Uma dica útil caso erre.
      - "reforco_positivo": Comemoração personalizada citando o hiperfoco.

      Mantenha cada campo conciso (1-3 frases para EI/Mid, 2-4 frases para Teen).`

      userPrompt = `Ensine o tema "${topic || "aprendizado"}" para ${child.nome || "o aluno"} (${tierLabel}).`

    } else if (mode === "professor-foto") {
      const diag = child.diagnostico?.toLowerCase() || "";
      const isTDAH = diag.includes("tdah");
      const isDislexia = diag.includes("dislexia");
      const isTEA = diag.includes("tea") || diag.includes("autismo");

      if (!image) {
        console.error('Missing image for professor-foto mode')
        return new Response(JSON.stringify({ error: 'A imagem da tarefa é necessária para este modo.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      systemPrompt = `Você é ${mascotName} — o mascote companheiro escolhido pela criança na Loja de Mascotes — agora ajudando como PROFESSOR(A) de tarefas via foto.
      ${mascotPersonaBlock}
      Você é um(a) assistente lúdico(a) e paciente que ajuda crianças a entenderem suas tarefas escolares.

      Perfil da Criança:
      - Nome: ${child.nome || "Criança"}
      - Idade: ${child.idade || "Não informada"}
      - Diagnóstico: ${child.diagnostico || "Geral"}
      - Hiperfoco: ${child.hiperfoco || "Interesses variados"} (USE O HIPERFOCO PARA EXPLICAR O CONCEITO!)
      
      Diretrizes de Adaptação:
      ${isTDAH ? "- Respostas curtas, direto ao ponto, use negrito para destacar palavras-chave, divida em micro-passos." : ""}
      ${isDislexia ? "- Linguagem simples, foco em sons e visual, evite blocos grandes de texto, use analogias fonológicas." : ""}
      ${isTEA ? "- Seja literal, evite sarcasmo ou metáforas complexas, siga uma estrutura lógica rigorosa, use o hiperfoco como base da explicação." : ""}
      
      Seu objetivo é:
      1. Identificar a matéria e o que deve ser feito.
      2. Explicar o conceito por trás da tarefa de forma simples e lúdica.
      3. Dar um passo a passo para resolver (NÃO DÊ A RESPOSTA DIRETAMENTE, ENSINE A CHEGAR LÁ).
      4. Sugerir um exercício similar para praticar.
      5. Sugerir que tipo de vídeo a criança pode procurar no YouTube para entender melhor.

      Retorne EXCLUSIVAMENTE um JSON com as chaves:
      - "materia": Nome da disciplina.
      - "ocr_texto": Breve resumo do que foi lido na foto.
      - "explicacao": Texto da explicação adaptada (pode conter markdown simples).
      - "passos": Array de strings com o passo a passo.
      - "exercicio_similar": Um novo desafio parecido.
      - "video_tema": Termo de busca para vídeo educativo.`

      userPrompt = [
        { type: "text", text: "Ajude-me com esta tarefa da escola. Explique como eu faço." },
        { 
          type: "image_url", 
          image_url: { 
            url: image.startsWith('data:') ? image : `data:image/jpeg;base64,${image}` 
          } 
        }
      ] as any;
    } else if (mode === "amigo-virtual") {
      const diag = child.diagnostico?.toLowerCase() || "";
      const isTDAH = diag.includes("tdah");
      const isDislexia = diag.includes("dislexia");
      const isTEA = diag.includes("tea") || diag.includes("autismo");

      systemPrompt = `Você é ${mascotName} — o mascote companheiro que a criança escolheu na Loja de Mascotes — agora atuando como AMIGO VIRTUAL dela.
      ${mascotPersonaBlock}
      Seu objetivo é ser um(a) amigo(a) carinhoso(a), paciente e protetor(a). Mantenha sempre a identidade de ${mascotName}.
      
      IMPORTANTE - SEGURANÇA E LEI DE PROTEÇÃO À CRIANÇA:
      1. NUNCA discuta assuntos inapropriados para crianças (violência, conteúdo adulto, medo extremo, ódio).
      2. Se a criança pedir algo inapropriado, recuse gentilmente e mude de assunto para algo positivo.
      3. Se a criança demonstrar tristeza profunda, perigo ou falar de algo sensível, você deve incluir o marcador "[ALERTA_SENSIVEL]" no início da sua resposta interna (que será filtrada) ou agir de forma protetora.
      
      Funções principais:
      1. Ser um amigo para conversar sobre qualquer assunto do dia a dia.
      2. Ajudar com sentimentos: ansiedade, medo, frustração.
      3. Apoiar no aprendizado de forma lúdica.
      
      Perfil da Criança:
      - Nome: ${child.nome || "Amigo"}
      - Idade: ${child.idade || ""}
      - Hiperfoco: ${child.hiperfoco || "Geral"} (Use o hiperfoco para tudo! Exemplos, metáforas, amizade)
      
      Adaptação Neurodivergente:
      ${isTDAH ? "- Respostas curtas, foco em uma coisa de cada vez, use frases de encorajamento frequentes." : ""}
      ${isDislexia ? "- Use linguagem muito clara, evite frases longas e complexas." : ""}
      ${isTEA ? "- Seja muito literal e previsível, evite metáforas confusas, use uma estrutura clara." : ""}

      REGRAS DE FORMATAÇÃO:
      - Se você identificar um assunto sensível, comece com "[ALERTA_SENSIVEL]".
      - Se você sugerir um vídeo, use: [VIDEO: tema do vídeo].
      - Se você sugerir uma pesquisa, use: [PESQUISA: assunto].

      Exemplo: "Oi ${child.nome}! Eu adorei saber disso! Você sabia que os ${child.hiperfoco || "seus amigos"} também fazem isso?"`;

      userPrompt = message || "Oi amigo!";
    }

    console.log('Sending request to Lovable AI Gateway...')
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...(chatHistory || []),
          { role: "user", content: userPrompt }
        ],
        response_format: (mode === "escola" || mode === "professor-foto") ? { type: "json_object" } : undefined
      }),
    })
    
    console.log("FINAL RESPONSE STATUS:", response.status)

    if (response.status === 429) {
      return new Response(JSON.stringify({ error: 'Muitas requisições. Aguarde um momento e tente novamente.' }), {
        status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (response.status === 402) {
      return new Response(JSON.stringify({ error: 'Créditos de IA esgotados. Adicione créditos no painel Lovable.' }), {
        status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    if (!response.ok) {
      const errorText = await response.text()
      console.error('OpenAI API Error:', errorText)
      return new Response(JSON.stringify({ error: 'Falha na comunicação com a inteligência artificial.' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const data = await response.json()
    console.log('OpenAI Response received:', JSON.stringify(data, null, 2))

    if (!data?.choices?.length || !data.choices[0]?.message?.content) {
      console.error('Invalid OpenAI response structure:', data)
      return new Response(JSON.stringify({ error: 'Resposta da IA veio vazia ou em formato inválido.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    let rawContent = data.choices[0].message.content
    let result

    if (mode === "escola" || mode === "professor-foto") {
      try {
        result = JSON.parse(rawContent)
      } catch (e) {
        console.error('Failed to parse JSON from AI:', rawContent)
        return new Response(JSON.stringify({ error: 'Erro ao processar o formato da resposta da IA.' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }
    } else {
      result = rawContent
    }

    // Lógica de Alerta e Segurança para Amigo Virtual
    if (mode === "amigo-virtual" && typeof result === "string") {
      const supabaseAdmin = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
      )

      if (result.includes("[ALERTA_SENSIVEL]")) {
        console.warn('Sensivel content detected, logging alert...')
        await supabaseAdmin.from('child_security_alerts').insert({
          child_id: child.id,
          content: message,
          reason: "Assunto sensível ou preocupante detectado pelo Amigo Virtual",
          status: "pending"
        }).catch(err => console.error('Failed to log alert:', err))
        
        result = result.replace("[ALERTA_SENSIVEL]", "").trim()
      }

      if (result.includes("[PESQUISA:") || result.includes("[VIDEO:")) {
         await supabaseAdmin.from('child_security_alerts').insert({
          child_id: child.id,
          content: `A criança solicitou pesquisa/vídeo sobre: ${message}`,
          reason: "Solicitação de pesquisa externa",
          status: "pending"
        }).catch(err => console.error('Failed to log alert:', err))
      }
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Global Edge Function Error:', error)
    return new Response(JSON.stringify({ error: 'Erro interno no processamento da solicitação.', details: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})