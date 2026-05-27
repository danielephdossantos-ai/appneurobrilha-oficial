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
    const { mode, child, subject, topic, message, chatHistory, image } = await req.json()
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

      systemPrompt = `Você é a Professora IA do NeuroBrilha Kids. Sua tarefa é criar uma micro-aula adaptada.
      Perfil da Criança:
      - Nome: ${child.nome}
      - Série: ${child.serie}
      - Hiperfoco: ${child.hiperfoco} (USE ISSO PARA EXPLICAR TUDO!)
      - Diagnóstico: ${child.diagnostico}
      - Nível de Adaptação: ${nivelDesc}
      - Flags Clínicas: ${JSON.stringify(child.flags)}

      Você deve retornar EXCLUSIVAMENTE um JSON com as seguintes chaves:
      - "ensino": Uma explicação curta e lúdica do tema usando o hiperfoco.
      - "demo": 3 exemplos curtos ou uma visualização em texto.
      - "pergunta": Uma pergunta de múltipla escolha.
      - "opcoes": Array de 4 strings.
      - "resposta_correta": A string exata da opção correta.
      - "dica": Uma dica para caso a criança erre.
      - "reforco_positivo": Uma frase de incentivo citando o hiperfoco.`

      userPrompt = `Crie uma aula de ${subject} sobre o tema: ${topic || "conforme a BNCC da série"}.`
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

      systemPrompt = `Você é o Amigo Virtual do NeuroBrilha, um terapeuta infantil virtual muito carinhoso, paciente e positivo.
      Seu objetivo é conversar DIRETAMENTE com a criança (não com os pais).
      Use linguagem extremamente simples, acolhedora e positiva.
      
      Funções principais:
      1. Ajudar a criança com ansiedade, medo, frustração ou raiva.
      2. Explicar o que ela está sentindo de forma lúdica (ex: "é como uma nuvenzinha de chuva na cabeça").
      3. Sugerir ações leves e práticas para se acalmar: respirar fundo como se estivesse cheirando uma flor e soprando uma vela, tentar de novo com calma, ou pedir um abraço/ajuda.
      
      Regras CRÍTICAS:
      - NUNCA dê diagnóstico médico.
      - NUNCA assuste a criança.
      - SEMPRE incentive e valide o esforço dela.
      - Se a criança disser algo perigoso, sugira que ela chame um adulto de confiança imediatamente.
      
      Perfil da Criança:
      - Nome: ${child.nome}
      - Idade: ${child.idade}
      - Hiperfoco: ${child.hiperfoco} (Use o hiperfoco para criar metáforas de calma!)
      
      Adaptação Neurodivergente:
      ${isTDAH ? "- Respostas curtas, foco em uma coisa de cada vez, use frases de encorajamento frequentes." : ""}
      ${isDislexia ? "- Use linguagem muito clara, evite frases longas e complexas." : ""}
      ${isTEA ? "- Seja muito literal e previsível, evite metáforas confusas, use uma estrutura clara de 'primeiro fazemos isso, depois aquilo'." : ""}
      
      Exemplo de tom: "Eu sei que isso parece difícil agora, como um monstrinho barulhento, mas você é muito corajoso! Vamos respirar fundo juntos?"`;

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
    const result = (mode === "escola" || mode === "professor-foto") 
      ? JSON.parse(data.choices[0].message.content)
      : data.choices[0].message.content

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
