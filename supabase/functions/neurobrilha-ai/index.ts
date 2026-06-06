import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
)

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

    const { mode, child, subject, topic, message, chatHistory, image, systemQuestion, systemOptions, systemAnswer, instruction, mascot, miniGameType, reexplainMethod, reexplainStep } = payload

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
        2: "Visual guiado: use frases curtas e suporte visual constante (sem emojis).",
        3: "Semi-abstrato: pode usar símbolos e textos, mas mantenha a clareza e alguns apoios visuais.",
        4: "Abstrato: nível padrão da BNCC, mas ainda com linguagem clara e organizada."
      }[currentLevel as 1 | 2 | 3 | 4] || "Linguagem adaptada e clara."

      const serie = (child.serie || "").toString();
      const isEarlyYears = /infantil|pré|pre|^1º/i.test(serie);
      const isMid = /^[2-5]º/.test(serie);
      const isTeen = /^[6-9]º/.test(serie);
      const tierLabel = isEarlyYears ? "Educação Infantil (Pré + 1º)" : isMid ? "Anos Iniciais (2º ao 5º)" : isTeen ? "Anos Finais (6º ao 9º)" : "Geral";

      const toneByTier = isEarlyYears
        ? `TOM: Ultra-acolhedor, infantil, alegre, cheio de entusiasmo. CAIXA ALTA em todas as palavras estruturais. Frases ultra-curtas (máximo 8 palavras). Método fônico (estique a primeira letra: "OOOO-vo"). É EXTREMAMENTE PROIBIDO O USO DE EMOJIS. O texto deve ter no máximo 2 linhas na tela.`
        : isMid
        ? `TOM: Amigável e didático. Frases curtas e diretas. Explicações concretas. Mistura caixa baixa com palavras-chave em CAIXA ALTA. É EXTREMAMENTE PROIBIDO O USO DE EMOJIS. O texto deve ter no máximo 2 linhas na tela.`
        : `TOM: Respeitoso, direto e objetivo. Linguagem clara, sem infantilização. Explicações estruturadas passo-a-passo. É EXTREMAMENTE PROIBIDO O USO DE EMOJIS. O texto deve ter no máximo 2 linhas na tela.`;

      const metodoBlock = reexplainMethod === "teacch"
        ? `🧩 MÉTODO TEACCH (Estruturado Visual — ideal para TEA):
           - Quebre em micro-passos.
           - Rotina previsível: "PRIMEIRO... DEPOIS...".
           - Linguagem LITERAL.
           - É PROIBIDO o uso de emojis.`
        : reexplainMethod === "multisensorial"
        ? `🎨 MÉTODO MULTISSENSORIAL (Orton-Gillingham — ideal para Dislexia/TDAH):
           - Combine sons e gestos.
           - Estique sons: "MMMM-AAAA".
           - Peça para desenhar no ar.`
        : reexplainMethod === "montessori"
        ? `🌱 MÉTODO MONTESSORI (Concreto/Manipulável — ideal para todos):
           - Use exemplos do mundo real.
           - "Imagine 3 maçãs...".
           - Foco no HIPERFOCO (${child.hiperfoco || "interesse"}).`
        : `MÉTODO PADRÃO: explicação didática ultra-direta.`;

      const reexplainInstruction = reexplainMethod
        ? `\n\n⚠️ A CRIANÇA APERTOU "NÃO ENTENDI". Reexplique o conteúdo usando o método ${reexplainMethod.toUpperCase()} de forma ainda mais simples.`
        : "";

      const isAlfabetizacao = (isEarlyYears || isMid) && (subject === "portugues" || subject === "linguagem");
      const isMathInicial = (isEarlyYears || isMid) && (subject === "matematica" || subject === "numeros");

      systemPrompt = `Você é ${mascotName} — atuando como PROFESSOR(A) PARTICULAR no NeuroBrilha Kids.
      ${mascotPersonaBlock}
      
      REGRAS TÉCNICAS OBRIGATÓRIAS (PADRÃO ESCOLA BRILHA):
      1. MÁXIMO 1 frase curta por campo (no máximo 8 a 10 palavras).
      2. MÁXIMO 2 linhas de texto na tela.
      3. PROIBIDO parágrafos ou blocos de texto longos.
      4. PROIBIDO emojis em qualquer campo de texto gerado por você.
      5. TODO ENSINO DEVE SER GRADUAL.
      
      ESTRUTURA OFICIAL ESCOLA BRILHA 2.0 (7 PASSOS PEDAGÓGICOS):
      Toda habilidade deve possuir:
      1. EXPLICAÇÃO   → O mascote explica o conceito (ex: "A LETRA B FAZ O SOM /B/").
      2. DEMONSTRAÇÃO → O mascote mostra como se faz (ex: "VEJA: B DE BOLA!").
      3. TREINO GUIADO → Questão fácil com ajuda (ex: "VAMOS JUNTOS? TOQUE NA LETRA B.").
      4. PRÁTICA      → 3 a 5 questões para o aluno fixar.
      5. DESAFIO      → Questão difícil sem ajuda.
      6. AVALIAÇÃO    → Feedback do desempenho e registro dos acertos.
      7. DOMÍNIO      → Comemoração do nível alcançado (ex: "VOCÊ DOMINOU A LETRA B!").

      TIPOS DE ATIVIDADES (MINIGAMETYPE):
      - "alfa-syllable": Formação de sílabas (ex: M+A=MA). Mostre as partes e o resultado.
      - "alfa-complete": Completar palavras (ex: GA_O). Foco na sílaba que falta.
      - "alfa-reading": Leitura de frases curtas e interpretação simples.
      - "alfa-sum": Soma visual com objetos (ex: 2 maçãs + 1 maçã).
      - "alfa-sub": Subtração visual (ex: 4 peixes tira 1).
      - "alfa-tens": Reconhecimento de dezenas (ex: 3 dezenas = 30).

      Retorne EXCLUSIVAMENTE um JSON com TODAS as chaves:
      - "etapa1_explicação": Frase de explicação ultra-curta.
      - "etapa2_demonstração": Frase de demonstração (exemplo visual) ultra-curta.
      - "etapa3_treino_guiado": Frase de instrução para o treino guiado.
      - "etapa4_prática": Frase de comando para a prática.
      - "etapa5_desafio": Frase para o desafio final.
      - "etapa6_avaliação": Frase de feedback de desempenho.
      - "etapa7_domínio": Frase de conquista e maestria.
      - "dica": Frase de ajuda ultra-curta caso ele erre.
      - "metodo_usado": Nome do método pedagógico aplicado.
      ${isAlfabetizacao ? `
      - "palavra_foco": String CAIXA ALTA (ex: "BOLA").
      - "silabas": Array de sílabas (ex: ["BO", "LA"]).
      - "frase_apresentacao": Frase de 1 linha (ex: "ESTA É UMA BOLA.").
      - "opcoes_identificacao": Array 3 strings.
      ` : ""}
      ${isMathInicial ? `
      - "numero_a": Inteiro (ex: 2).
      - "numero_b": Inteiro (ex: 1).
      - "operacao": "+" ou "-".
      - "resultado": Inteiro (ex: 3).
      - "visual_key": Nome do objeto (ex: "apple").
      - "opcoes_numericas": Array 3 inteiros.
      ` : ""}`

      userPrompt = `Ensine o tema "${topic || "aprendizado"}" para ${child.nome || "o aluno"} (${tierLabel}).${reexplainMethod ? ` Use o método ${reexplainMethod.toUpperCase()}.` : ""}`

    } else if (mode === "professor-foto") {
      systemPrompt = `Você é ${mascotName} — ajudando como PROFESSOR(A) de tarefas via foto.
      ${mascotPersonaBlock}
      Regra: Respostas curtas, máximo 2 linhas por parágrafo. Sem emojis.
      Retorne JSON: materia, ocr_texto, explicacao, passos[], exercicio_similar, video_tema.`
      userPrompt = [{ type: "text", text: "Explique como eu faço esta tarefa." }, { type: "image_url", image_url: { url: image.startsWith('data:') ? image : `data:image/jpeg;base64,${image}` } }] as any;
    } else if (mode === "amigo-virtual") {
      systemPrompt = `Você é ${mascotName} — AMIGO VIRTUAL da criança.
      ${mascotPersonaBlock}
      Regra: Frases curtas e acolhedoras. Sem emojis. Responda em no máximo 2 linhas.`
      userPrompt = message || "Oi";
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          ...(chatHistory || []),
          { role: 'user', content: userPrompt },
        ],
        response_format: { type: 'json_object' }
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('AI Gateway error:', response.status, errText)
      return new Response(JSON.stringify({ error: `AI Gateway ${response.status}: ${errText}` }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const result = await response.json()
    if (!result?.choices?.[0]?.message?.content) {
      console.error('Unexpected AI response:', JSON.stringify(result))
      return new Response(JSON.stringify({ error: 'AI returned empty response' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    const content = result.choices[0].message.content
    
    if (mode === "amigo-virtual" || mode === "terapeuta") {
      const parsed = JSON.parse(content)
      return new Response(JSON.stringify(parsed.response || parsed.t || content), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(content, {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (error) {
    console.error('Error in neurobrilha-ai function:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})