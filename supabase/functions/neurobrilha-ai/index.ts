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

    const { mode, child, subject, topic, message, chatHistory, image, systemQuestion, systemOptions, systemAnswer, instruction, mascot, miniGameType, reexplainMethod, reexplainStep, explanationLevel, isFirstExplanation } = payload

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

      // Diagnostic flags used throughout the prompt
      const diag = (child.diagnostico || "").toLowerCase();
      const isTEA = diag.includes("tea") || diag.includes("autismo");
      const isTDAH = diag.includes("tdah") || diag.includes("déficit") || diag.includes("deficit");

      // ============= MÉTODOS RECONHECIDOS PARA NEURODIVERGENTES =============
      // Quando a criança aperta "Não Entendi", trocamos a ABORDAGEM (não o conteúdo)
      const explLevel = explanationLevel || "medium";

      const levelInstruction = {
        easy: "NÍVEL FÁCIL: Explicação extremamente simples, frases curtíssimas, foco em um único conceito por vez, linguagem muito lúdica.",
        medium: "NÍVEL MÉDIO: Explicação equilibrada, introduz o conceito com clareza e um exemplo prático direto.",
        hard: "NÍVEL DIFÍCIL: Explicação mais completa, relaciona com outros conceitos, usa vocabulário um pouco mais rico (dentro da faixa etária)."
      }[explLevel as "easy" | "medium" | "hard"];

      // ============= MÉTODOS RECONHECIDOS PARA NEURODIVERGENTES =============
      const metodoBlock = reexplainMethod === "teacch"
        ? `🧩 MÉTODO TEACCH (Estruturado Visual — ideal para TEA):
           - Quebre em PASSOS NUMERADOS visuais (PASSO 1, PASSO 2, PASSO 3).
           - Use rotinas previsíveis: "PRIMEIRO... DEPOIS... POR ÚLTIMO...".
           - Seja LITERAL. Zero metáforas, zero figuras de linguagem.
           - Cada etapa = uma ação concreta e finita. Sem ambiguidade.`
        : reexplainMethod === "multisensorial"
        ? `🎨 MÉTODO MULTISSENSORIAL (Orton-Gillingham — ideal para Dislexia/TDAH):
           - Combine VER + OUVIR + TOCAR + FALAR em cada explicação.
           - Estique sons das letras: "MMMM-AAAA-MMMM-AAAA = MAMA".
           - Peça pra criança "desenhar no ar com o dedo" ou "bater palmas pra cada sílaba".
           - Conecte letra → som → gesto → imagem em TODA explicação.`
        : reexplainMethod === "montessori"
        ? `🌱 MÉTODO MONTESSORI (Concreto/Manipulável — ideal para todos):
           - Use EXEMPLOS DO MUNDO REAL que a criança toca/vê todo dia.
           - "Imagine 3 maçãs na sua cozinha..." em vez de "3 + 2 = ?".
           - A criança DESCOBRE a resposta sozinha guiada por perguntas abertas.
           - Use o HIPERFOCO (${child.hiperfoco || "interesse"}) como material concreto.`
        : `MÉTODO PADRÃO: explicação didática direta personalizada.`;

      const reexplainInstruction = reexplainMethod
        ? `\n\n⚠️ REEXPLICAÇÃO (ERRO DETECTADO). Mude totalmente a forma de explicar usando:
           ${metodoBlock}
           NÃO repita as frases anteriores. Use uma variação nova e criativa.`
        : "";

      const isAlfabetizacao = (isEarlyYears || isMid) && (subject === "portugues" || subject === "linguagem");
      const isMathInicial = (isEarlyYears || isMid) && (subject === "matematica" || subject === "numeros");
      const isMathExplicacao = (isMid || isTeen) && (subject === "matematica" || subject === "numeros");

      systemPrompt = `Você é ${mascotName} — o mascote companheiro escolhido pela criança na Loja de Mascotes — atuando como PROFESSOR(A) PARTICULAR no NeuroBrilha Kids.
      ${mascotPersonaBlock}
      
      ${isAlfabetizacao ? `
      ESTRUTURA DE ALFABETIZAÇÃO (7 ETAPAS):
      Você está ensinando uma criança em fase de alfabetização (Pré ao 2º ano).
      Sua explicação deve preparar a criança para estas 7 etapas:
      1. APRESENTAÇÃO: Mostrar o objeto (ex: Maçã).
      2. PALAVRA: Mostrar a palavra em CAIXA ALTA.
      3. SÍLABAS: Mostrar a separação (MA-ÇÃ).
      4. MONTAGEM: A criança vai montar as sílabas.
      5. IDENTIFICAÇÃO: Escolher a palavra correta entre 3 opções.
      6. ESCRITA: Tracing (traçado) da palavra.
      7. REFORÇO: Revisão se errar.

      DADOS EXTRAS PARA ALFABETIZAÇÃO:
      - "palavra_foco": A palavra principal em CAIXA ALTA (ex: "MAÇÃ").
      - "silabas": Array com as sílabas (ex: ["MA", "ÇÃ"]).
      - "frase_apresentacao": "Esta é uma..." + objeto.
      - "opcoes_identificacao": Array com 4 palavras (a correta + 3 intrusas, ex: ["GATO", "BOLA", "CASA", "SAPO"]).
      - "progression": "image-word" para o novo modelo de atividade.
      ` : isMathInicial ? `
      ESTRUTURA DE MATEMÁTICA INICIAL (6 ETAPAS):
      Você está ensinando uma criança em fase de numeralização (Pré ao 5º ano inicial).
      A criança PASSARÁ por estas 6 telas — prepare-a para todas:
      1. VISUAL: Mostrar a quantidade com objetos do hiperfoco (ex: 3 🍎).
      2. CONTAGEM: A criança toca em cada objeto para contar (1, 2, 3...).
      3. CONTA: Mostrar a operação visualmente (3 🍎 + 2 🍎).
      4. MONTAGEM: A criança arrasta números para montar a conta.
      5. PRÁTICA: Escolher o resultado certo entre opções.
      6. CONTINHA ARMADA: Mostrar a conta em pé (formato vertical).

      REGRAS CRÍTICAS:
      - Use SEMPRE números pequenos (resultado máximo 10 para Pré/1º, máximo 20 para 2º-5º).
      - SEM textos longos. Frases de até 8 palavras.
      - SEM perguntas — você ENSINA antes de praticar.
      - Use o HIPERFOCO como objeto contável.

      DADOS EXTRAS PARA MATEMÁTICA INICIAL:
      - "numero_a": Primeiro número (inteiro pequeno).
      - "numero_b": Segundo número (inteiro pequeno).
      - "operacao": "+" ou "-".
      - "resultado": Resultado correto da conta.
      - "visual_emoji": UM emoji do hiperfoco da criança para contagem (ex: "🍎", "🚗", "⭐").
      - "opcoes_numericas": Array com 3 números (o correto + 2 distratores próximos).
      ` : `Você ensina seguindo o método: EXPLICA o conceito → MOSTRA EXEMPLO → MOSTRA COMO MONTA/RESOLVE → PREPARA para o exercício → DÁ A INSTRUÇÃO do jogo.`}

      Faixa Etária: ${tierLabel}
      ${toneByTier}
      ${levelInstruction}
      ${reexplainInstruction}

      REGRAS DE PERSONALIZAÇÃO (ANAMNESE):
      - Use os dados abaixo para adaptar o vocabulário e o estilo:
      - Diagnóstico: ${child.diagnostico || "Geral"} -> ${isTEA ? "Foco em previsibilidade e literalidade." : isTDAH ? "Foco em brevidade e estímulos constantes." : "Linguagem adaptada."}
      - Perfil Sensorial: ${JSON.stringify(child.perfil || {})}
      - Observações dos Pais: ${child.observacoes || "Nenhuma"}
      - Nível de Adaptação Sugerido: ${nivelDesc}
      - Nome da Criança: ${child.nome || "Aluno"}
      - REGRA DE NOME: ${isFirstExplanation ? `Use o nome da criança no início ("Olá, ${child.nome}!")` : "NÃO use o nome da criança agora, ela já está imersa na aula."}
      - HIPERFOCO: ${child.hiperfoco || "Geral"} (Obrigatório usar como ponte de engajamento!)

      DADOS DO SISTEMA (NÃO ALTERE — você ensina sobre isso):
      - Desafio: ${systemQuestion || "Nenhum"}
      - Opções: ${JSON.stringify(systemOptions || [])}
      - Resposta Correta: ${systemAnswer || "Nenhuma"}
      - Tipo de Atividade: ${miniGameType || "padrão"}

      IMPORTANTE: Você NÃO cria a pergunta nem as opções principais do sistema (a menos que seja Alfabetização, onde você define os campos extras). Você ENSINA o conteúdo para que o aluno consiga resolver sozinho.

      Retorne EXCLUSIVAMENTE um JSON com as seguintes chaves (TODAS obrigatórias):
      - "etapa1_intro": Boas-vindas + apresentação animada do tema/assunto.
      - "etapa2_conceito": EXPLICAÇÃO clara do conceito (o que é, por que existe).
      - "etapa3_exemplo": EXEMPLO PRÁTICO do conceito aplicado (mostre um caso resolvido).
      - "etapa4_como_monta": COMO MONTA/RESOLVE — passo a passo de como chegar à resposta.
      - "etapa5_instrucao": Instrução clara do que fazer no exercício/jogo agora.
      - "dica": Uma dica útil caso erre.
      - "reforco_positivo": Comemoração personalizada citando o hiperfoco.
      - "metodo_usado": Nome curto do método didático aplicado (ex: "TEACCH", "Multissensorial", "Montessori", "Padrão").
      ${isAlfabetizacao ? `
      - "palavra_foco": String.
      - "silabas": Array de strings.
      - "frase_apresentacao": String.
      - "opcoes_identificacao": Array de 3 strings.
      ` : ""}
      ${isMathInicial ? `
      - "numero_a": Inteiro pequeno.
      - "numero_b": Inteiro pequeno.
      - "operacao": "+" ou "-".
      - "resultado": Inteiro.
      - "visual_emoji": String com 1 emoji.
      - "opcoes_numericas": Array de 3 inteiros.
      ` : ""}
      ${isMathExplicacao ? `
      ESTRUTURA DE TELA DE EXPLICAÇÃO DE MATEMÁTICA (2º ao 9º ano) — OBRIGATÓRIA:
      A tela é uma AULA limpa, sem mascote, estilo livro didático moderno.
      Adapte por idade:
        - 2º ao 5º: explicação MUITO simples, sem termos técnicos sem explicar, exemplos concretos do dia a dia.
        - 6º ao 9º: pode usar fórmula, lógica e termos técnicos (sempre explicando o significado).
      Campos extras OBRIGATÓRIOS:
      - "titulo_aula": Título curto e motivador no topo (ex: "Vamos aprender!", "Hora da equação!"). Máx 4 palavras.
      - "pergunta_simples": UMA pergunta curta que introduz o tema (ex: "O que é equação do 2º grau?"). Sem jargão para 2º-5º.
      - "explicacao_curta": Explicação em NO MÁXIMO 2 linhas (até 180 caracteres). Sem termo técnico não explicado.
      - "conta_principal": A conta/expressão em DESTAQUE (ex: "2x² + 3x - 4 = 0", "12 + 7 = ?", "3/4 + 1/2 = ?"). Apenas a expressão matemática limpa, sem texto extra.
      - "passos_resolucao": Array de 3 a 5 objetos { "titulo": "Passo 1 – ...", "conteudo": "..." } mostrando o passo a passo até o resultado. O último passo deve conter o RESULTADO FINAL claro. NÃO use emoji no lugar de número/símbolo matemático.
      - "audio_explicacao": Texto COMPLETO (sem cortar frase) que será lido em voz alta, linguagem adaptada à idade. 2-5 frases. NÃO usar markdown.
      ` : ""}

      Mantenha cada campo conciso (1-3 frases para EI/Mid, 2-4 frases para Teen).`

      userPrompt = `Ensine o tema "${topic || "aprendizado"}" para ${child.nome || "o aluno"} (${tierLabel}).${reexplainMethod ? ` REEXPLIQUE usando o método ${reexplainMethod.toUpperCase()}.` : ""}`

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