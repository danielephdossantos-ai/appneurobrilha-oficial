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
    const { mode, child, subject, topic, message, chatHistory } = await req.json()
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
        response_format: mode === "escola" ? { type: "json_object" } : { type: "text" }
      }),
    })

    const data = await response.json()
    const result = mode === "escola" 
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
