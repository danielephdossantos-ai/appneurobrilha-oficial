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
    const { mode, child, subject, topic, message, chatHistory, image, systemQuestion, systemOptions, systemAnswer, instruction } = await req.json()
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not set')
    }

    let systemPrompt = ""
    let userPrompt = ""

    if (mode === "terapeuta") {
      systemPrompt = `Você é a Terapeuta Brilha, uma assistente especializada em neurodesenvolvimento infantil e suporte parental. 
      Seu objetivo é orientar pais de crianças neurodivergentes (TEA, TDAH, Dislexia, etc.).
      Informações da criança:
      - Nome: ${child.nome}
      - Idade: ${child.idade} anos
      - Diagnóstico: ${child.diagnostico}
      - Hiperfoco: ${child.hiperfoco}
      - Observações: ${child.observacoes || "Nenhuma"}
      - Perfil: ${JSON.stringify(child.perfil)}
      
      Seja empática, técnica mas acessível, e use o hiperfoco da criança como ferramenta de engajamento quando apropriado.
      Sempre lembre que você não substitui um médico ou terapeuta presencial.`
      
      userPrompt = message
    } else if (mode === "escola") {
      const nivelDesc = {
        1: "Concreto total: use metáforas físicas, evite abstrações. Foco em imagens e sons.",
        2: "Visual guiado: use muitos emojis, frases curtas e suporte visual constante.",
        3: "Semi-abstrato: pode usar símbolos e textos, mas mantenha a clareza e alguns apoios visuais.",
        4: "Abstrato: nível padrão da BNCC, mas ainda com linguagem clara e organizada."
      }[child.niveis[subject] || 2]

      systemPrompt = `Você é a Professora IA do NeuroBrilha Kids. Sua tarefa é ensinar um conteúdo gerado pelo sistema.
      Perfil da Criança:
      - Nome: ${child.nome}
      - Série: ${child.serie}
      - Hiperfoco: ${child.hiperfoco} (USE ISSO PARA EXPLICAR TUDO!)
      - Diagnóstico: ${child.diagnostico}
      - Nível de Adaptação: ${nivelDesc}

      DADOS DO SISTEMA (NÃO ALTERE A PERGUNTA NEM AS OPÇÕES):
      - Tema: ${topic}
      - Instrução Original: ${instruction}
      - Conteúdo da Atividade: ${JSON.stringify(activityData)}

      Você deve retornar EXCLUSIVAMENTE um JSON com as seguintes chaves:
      - "ensino": Uma explicação curta, lúdica e adaptada do tema usando o hiperfoco.
      - "demo": Exemplos práticos ou visualização baseada no hiperfoco.
      - "pergunta": Use exatamente a pergunta/desafio fornecido pelo sistema.
      - "opcoes": Use exatamente as opções fornecidas pelo sistema.
      - "resposta_correta": Use exatamente a resposta fornecida pelo sistema.
      - "dica": Uma dica adaptada para caso a criança erre.
      - "reforco_positivo": Uma frase de incentivo citando o hiperfoco.`

      userPrompt = `Ensine este conteúdo: ${topic}.`
    } else if (mode === "professor-foto") {
      const diag = child.diagnostico?.toLowerCase() || "";
      const isTDAH = diag.includes("tdah");
      const isDislexia = diag.includes("dislexia");
      const isTEA = diag.includes("tea") || diag.includes("autismo");

      systemPrompt = `Você é o Professor IA do NeuroBrilha, um assistente lúdico e paciente que ajuda crianças a entenderem suas tarefas escolares.
      
      Perfil da Criança:
      - Nome: ${child.nome}
      - Idade: ${child.idade}
      - Diagnóstico: ${child.diagnostico}
      - Hiperfoco: ${child.hiperfoco} (USE O HIPERFOCO PARA EXPLICAR O CONCEITO!)
      
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

      systemPrompt = `Você é o Amigo Virtual do NeuroBrilha, um companheiro de verdade para a criança.
      Seu objetivo é ser um amigo carinhoso, paciente e protetor.
      
      IMPORTANTE - SEGURANÇA E LEI DE PROTEÇÃO À CRIANÇA:
      1. NUNCA discuta assuntos inapropriados para crianças (violência, conteúdo adulto, medo extremo, ódio).
      2. Se a criança pedir algo inapropriado, recuse gentilmente e mude de assunto para algo positivo.
      3. Se a criança demonstrar tristeza profunda, perigo ou falar de algo sensível, você deve incluir o marcador "[ALERTA_SENSIVEL]" no início da sua resposta interna (que será filtrada) ou agir de forma protetora.
      4. Você pode sugerir fontes de pesquisa seguras e vídeos educativos do YouTube (mencione apenas o título ou tema).
      
      Funções principais:
      1. Ser um amigo para conversar sobre qualquer assunto do dia a dia, não apenas estudos.
      2. Ajudar com sentimentos: ansiedade, medo, frustração.
      3. Apoiar no aprendizado de forma lúdica.
      
      Perfil da Criança:
      - Nome: ${child.nome}
      - Idade: ${child.idade}
      - Hiperfoco: ${child.hiperfoco} (Use o hiperfoco para tudo! Exemplos, metáforas, amizade)
      
      Adaptação Neurodivergente:
      ${isTDAH ? "- Respostas curtas, foco em uma coisa de cada vez, use frases de encorajamento frequentes." : ""}
      ${isDislexia ? "- Use linguagem muito clara, evite frases longas e complexas." : ""}
      ${isTEA ? "- Seja muito literal e previsível, evite metáforas confusas, use uma estrutura clara." : ""}

      REGRAS DE FORMATAÇÃO:
      - Se você identificar um assunto sensível que os pais precisam saber, comece a resposta com "[ALERTA_SENSIVEL]".
      - Se você sugerir um vídeo, use o formato: [VIDEO: tema do vídeo].
      - Se você sugerir uma pesquisa, use: [PESQUISA: assunto].

      Exemplo de tom: "Oi ${child.nome}! Eu adorei saber disso! Você sabia que os ${child.hiperfoco} também fazem isso? Vamos conversar mais?"`;

      userPrompt = message;
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...(chatHistory || []),
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
        response_format: (mode === "escola" || mode === "professor-foto") ? { type: "json_object" } : { type: "text" }
      }),
    })

    const data = await response.json()
    let result = (mode === "escola" || mode === "professor-foto") 
      ? JSON.parse(data.choices[0].message.content)
      : data.choices[0].message.content

    // Lógica de Alerta e Segurança para Amigo Virtual
    if (mode === "amigo-virtual" && typeof result === "string") {
      const supabaseAdmin = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
      )

      if (result.includes("[ALERTA_SENSIVEL]")) {
        await supabaseAdmin.from('child_security_alerts').insert({
          child_id: child.id,
          content: message,
          reason: "Assunto sensível ou preocupante detectado pelo Amigo Virtual",
          status: "pending"
        })
        result = result.replace("[ALERTA_SENSIVEL]", "").trim()
      }

      if (result.includes("[PESQUISA:") || result.includes("[VIDEO:")) {
         await supabaseAdmin.from('child_security_alerts').insert({
          child_id: child.id,
          content: `A criança solicitou pesquisa/vídeo sobre: ${message}`,
          reason: "Solicitação de pesquisa externa",
          status: "pending"
        })
      }
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
