import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 3 — Parônimos e Homônimos: mau/mal, há/a, mas/mais, onde/aonde
 * -------------------------------------------------------------
 * Unidade 2 (Laboratório da Ortografia). Investigação sobre palavras
 * que se confundem no som ou na escrita, mas têm funções e sentidos
 * diferentes.
 *
 * BNCC: EF05LP01, EF05LP03, EF35LP04
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-mau-mal-ha-a",
  titulo: "Palavras que se Disfarçam",
  iconeTrilha: "🕵️",
  bncc: ["EF05LP01", "EF05LP03", "EF35LP04"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "O Caso das Palavras Disfarçadas",
    historia:
      "A investigadora espalhou fichas com pares de palavras: mau e mal, há e a, mas e mais, onde e aonde. — Essas palavras são mestres do disfarce: parecem iguais na fala, mas escondem sentidos e funções bem diferentes. Hoje vamos desmascarar cada uma delas usando pistas de contexto. Prontos para o interrogatório?",
  },

  momento02_previsao: {
    instrucao: "Observe as duas frases abaixo antes de decidir qual palavra combina com cada uma.",
    bloco: {
      titulo: "Duas Frases Disfarçadas",
      recado: {
        rotulo: "Frases suspeitas",
        icone: "🎭",
        linhas: ["Ele é um ___ aluno, sempre estuda pouco.", "Ele se comportou ___ na reunião."],
        estilo: "papel",
      },
      pergunta: "Qual das lacunas deve ser preenchida com 'mau' (adjetivo, contrário de 'bom')?",
      hipoteses: [
        { texto: "A primeira, porque descreve o substantivo 'aluno'" },
        { texto: "A segunda, porque descreve uma ação" },
        { texto: "As duas devem usar a mesma palavra" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🕵️ Isso mesmo! 'Mau' é adjetivo (contrário de 'bom') e acompanha um substantivo, como 'aluno'. 'Mal' é advérbio (contrário de 'bem') e acompanha um verbo, como 'comportou-se mal'.",
      feedbackErro:
        "Repare: a primeira frase descreve o SUBSTANTIVO 'aluno' — isso pede 'mau' (contrário de bom). A segunda descreve uma AÇÃO ('comportou-se') — isso pede 'mal' (contrário de bem).",
    },
  },

  momento03_vocabulario: {
    instrucao: "Quatro pares de disfarces, revelados um a um.",
    cards: [
      {
        palavra: "mau x mal",
        explicacao:
          "'Mau' é adjetivo, contrário de 'bom', e acompanha substantivo. 'Mal' é advérbio, contrário de 'bem', e acompanha verbo — também pode ser substantivo (o mal) ou conjunção (mal cheguei, o telefone tocou).",
        exemplo: "Ele é um mau motorista. / Ele dirige mal.",
      },
      {
        palavra: "há x a",
        explicacao:
          "'Há' vem do verbo haver e indica tempo passado ('há dois anos') ou existência ('há muita gente'). 'A' é preposição e indica tempo futuro ('daqui a dois anos') ou direção/destino.",
        exemplo: "Há dois anos, ele morava aqui. / Daqui a dois anos, ele vai se formar.",
      },
      {
        palavra: "mas x mais",
        explicacao: "'Mas' é conjunção de oposição, equivale a 'porém'. 'Mais' indica quantidade, equivale a 'em maior número/grau'.",
        exemplo: "Quero ir, mas estou cansado. / Quero mais tempo para descansar.",
      },
      {
        palavra: "onde x aonde",
        explicacao: "'Onde' indica lugar fixo, usado com verbos que não têm ideia de movimento (morar, ficar, estar). 'Aonde' indica lugar com movimento, usado com verbos como 'ir', 'chegar'.",
        exemplo: "Onde você mora? / Aonde você vai depois da aula?",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relatório e observe o contexto de cada palavra disfarçada.",
    leitura: {
      titulo: "Relatório: Como Desmascarar as Palavras Disfarçadas",
      destacar: ["mau", "mal", "há", "a", "mas", "mais", "onde", "aonde"],
      paragrafos: [
        "A equipe descobriu um truque simples para o par mau/mal: troque a palavra suspeita por 'bom' ou por 'bem'. Se a frase continuar fazendo sentido com 'bom', a palavra certa é 'mau' (Ele é um mau/bom aluno). Se combinar com 'bem', é 'mal' (Ele se comportou mal/bem).",
        "Para o par há/a, o segredo está no tempo verbal: 'há' indica algo que já aconteceu ou que existe agora, sempre olhando para o PASSADO ou o presente (há dois anos ele chegou; há muitos livros na estante). Já 'a' aponta para o FUTURO, quando indica tempo (daqui a uma semana) ou apenas marca direção (fomos a São Paulo).",
        "Já mas e mais se distinguem pela função: 'mas' sempre liga duas ideias que se opõem, como 'quero, mas não posso'. 'Mais' está ligado à ideia de quantidade — pode ser trocado por 'em maior quantidade', como em 'quero mais suco'. Por fim, onde e aonde dependem do verbo: se o verbo tem ideia de movimento (ir, chegar, viajar), usa-se 'aonde'; se não tem (morar, estar, ficar), usa-se apenas 'onde'."
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relatório para confirmar cada truque.",
    perguntas: [
      {
        pergunta: "Segundo o relatório, qual é o truque para decidir entre 'mau' e 'mal'?",
        opcoes: [
          "Trocar por 'bom' ou 'bem' e ver qual combina",
          "Contar as letras da palavra",
          "Verificar se a frase é uma pergunta",
        ],
        correta: 0,
        feedbackAcerto: "🕵️ Isso! O texto explica: troque por 'bom' (mau) ou 'bem' (mal) e veja qual combina.",
        feedbackErro: "Releia o primeiro parágrafo: ele ensina a trocar a palavra suspeita por 'bom' ou 'bem'.",
        ondeEstaNoTexto: "troque a palavra suspeita por 'bom' ou por 'bem'",
      },
      {
        pergunta: "O que diferencia 'há' de 'a' quanto ao tempo, segundo o texto?",
        opcoes: [
          "'Há' aponta para o passado/presente; 'a' aponta para o futuro",
          "Os dois só servem para o presente",
          "'A' indica sempre existência de algo",
        ],
        correta: 0,
        feedbackAcerto: "🕵️ Correto! O texto diz que 'há' olha para passado/presente e 'a' aponta para o futuro.",
        feedbackErro: "Releia o segundo parágrafo: ele contrasta claramente passado/presente ('há') com futuro ('a').",
        ondeEstaNoTexto: "'há' indica algo que já aconteceu ou que existe agora... Já 'a' aponta para o FUTURO",
      },
      {
        pergunta: "Segundo o texto, quando se usa 'aonde'?",
        opcoes: [
          "Quando o verbo tem ideia de movimento, como 'ir' ou 'chegar'",
          "Sempre que a frase é uma pergunta",
          "Quando o verbo é 'morar' ou 'ficar'",
        ],
        correta: 0,
        feedbackAcerto: "🕵️ Exato! O texto afirma: se o verbo tem ideia de movimento, usa-se 'aonde'.",
        feedbackErro: "Releia o final do último parágrafo: ele liga 'aonde' a verbos de movimento como 'ir' e 'chegar'.",
        ondeEstaNoTexto: "se o verbo tem ideia de movimento (ir, chegar, viajar), usa-se 'aonde'",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Aplique os truques do relatório em novos casos.",
    perguntas: [
      {
        pergunta: "Complete: 'Ele tomou uma ___ decisão e se arrependeu depois.'",
        opcoes: ["mau", "mal", "mais"],
        correta: 0,
        feedbackAcerto: "🕵️ Isso! Trocando por 'bom': 'uma boa decisão' funciona — então é 'mau', adjetivo que acompanha 'decisão'.",
        feedbackErro: "Teste a troca por 'bom' ou 'bem': 'boa decisão' combina, então a resposta é 'mau' (adjetivo).",
      },
      {
        pergunta: "Complete: '___ dois meses, ele se mudou para outra cidade.'",
        opcoes: ["Há", "A", "Mas"],
        correta: 0,
        feedbackAcerto: "🕵️ Correto! A frase fala de algo que já aconteceu no passado, então usa 'há' (do verbo haver).",
        feedbackErro: "A frase indica um fato do passado ('ele se mudou'), então é 'há', do verbo haver — não a preposição de futuro.",
      },
      {
        pergunta: "Complete: 'Você sabe ___ ele foi depois da escola?'",
        opcoes: ["onde", "aonde", "mais"],
        correta: 1,
        feedbackAcerto: "🕵️ Isso! O verbo 'ir' tem ideia de movimento, então usa-se 'aonde'.",
        feedbackErro: "O verbo é 'foi' (de ir), que indica movimento — por isso a forma certa é 'aonde'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o método de investigação para desmascarar essas palavras.",
    bloco: {
      instrucao: "Ordem correta do raciocínio.",
      itens: [
        { id: "p1", texto: "Identifique se a palavra suspeita acompanha um substantivo, um verbo ou marca tempo/lugar." },
        { id: "p2", texto: "Teste a troca: 'bom/bem' para mau/mal; 'em maior quantidade' para mais." },
        { id: "p3", texto: "Verifique o tempo (passado/presente x futuro) para decidir entre há e a." },
        { id: "p4", texto: "Observe se o verbo indica movimento para decidir entre onde e aonde." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🕵️ Perfeito! Você seguiu o roteiro certo para desmascarar qualquer palavra disfarçada.",
      feedbackErro: "Pense no roteiro: primeiro identifique a função da palavra, depois teste as trocas e verifique tempo e movimento.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo depoimento no laboratório! Leia sozinho e identifique as palavras disfarçadas.",
    leitura: {
      titulo: "O Depoimento da Testemunha",
      destacar: ["mal", "há", "mais", "aonde"],
      paragrafos: [
        "A testemunha declarou: 'Eu me sinto mal por não ter visto nada, mas posso contar o que sei. Há poucos minutos, vi um vulto correndo. Ele parecia com mais pressa do que o normal.'",
        "Ela continuou: 'Não sei aonde ele foi depois, porque virou a esquina rápido demais. Só sei que não era um mau sinal, porque ele parecia assustado, não perigoso.'",
        "A investigadora anotou tudo com cuidado, sublinhando cada palavra disfarçada do depoimento.",
      ],
    },
    perguntas: [
      {
        pergunta: "No trecho 'me sinto mal por não ter visto nada', a palavra 'mal' funciona como:",
        opcoes: ["Adjetivo, contrário de 'bom'", "Advérbio, contrário de 'bem'", "Substantivo"],
        correta: 1,
        feedbackAcerto: "🕵️ Isso! 'Sentir-se mal' é o contrário de 'sentir-se bem' — advérbio.",
        feedbackErro: "Teste a troca: 'sinto bem' combina, então é 'mal', advérbio ligado a um verbo.",
        ondeEstaNoTexto: "Eu me sinto mal por não ter visto nada",
      },
      {
        pergunta: "No trecho 'não sei aonde ele foi', por que se usa 'aonde'?",
        opcoes: [
          "Porque o verbo 'foi' (ir) indica movimento",
          "Porque a frase é uma afirmação",
          "Porque 'aonde' é sempre usado com 'não sei'",
        ],
        correta: 0,
        feedbackAcerto: "🕵️ Correto! O verbo 'ir' tem ideia de movimento, então pede 'aonde'.",
        feedbackErro: "Releia: o verbo é 'foi', de 'ir' — verbo de movimento, que pede a forma 'aonde'.",
        ondeEstaNoTexto: "Não sei aonde ele foi depois",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "MAU (adjetivo, contrário de bom) acompanha substantivo; MAL (advérbio, contrário de bem) acompanha verbo.",
      "HÁ (verbo haver) indica passado/existência; A (preposição) indica futuro ou direção.",
      "MAS (conjunção de oposição, = 'porém') é diferente de MAIS (quantidade).",
      "ONDE indica lugar fixo (sem movimento); AONDE indica lugar com movimento (ir, chegar).",
    ],
    miniDesafio: {
      pergunta: "Complete: 'Ele é gentil, ___ às vezes fica calado demais.'",
      opcoes: ["mas", "mais", "mau"],
      correta: 0,
      feedbackAcerto: "🕵️ Isso! A frase opõe duas ideias (gentil x calado), então usa 'mas', conjunção.",
      feedbackErro: "A frase liga duas ideias opostas — isso pede 'mas' (conjunção), não 'mais' (quantidade).",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Complete: 'Ele é um ___ perdedor, sempre reclama.'",
        opcoes: ["mau", "mal", "mais"],
        correta: 0,
        feedbackAcerto: "🕵️ Isso! 'Mau' acompanha o substantivo 'perdedor'.",
        feedbackErro: "Teste a troca por 'bom': 'bom perdedor' funciona, então é 'mau', adjetivo.",
      },
      {
        pergunta: "2/5 — Complete: '___ um ano, mudamos de casa.'",
        opcoes: ["Há", "A", "Mas"],
        correta: 0,
        feedbackAcerto: "🕵️ Correto! Indica um fato do passado, então é 'há', do verbo haver.",
        feedbackErro: "A frase fala de algo já acontecido — isso é 'há', não a preposição 'a'.",
      },
      {
        pergunta: "3/5 — Complete: 'Quero ___ tempo para terminar a tarefa.'",
        opcoes: ["mas", "mais", "mau"],
        correta: 1,
        feedbackAcerto: "🕵️ Isso! Indica quantidade, então é 'mais'.",
        feedbackErro: "A frase pede quantidade ('em maior quantidade de tempo'), então é 'mais', não 'mas'.",
      },
      {
        pergunta: "4/5 — Complete: '___ você mora?'",
        opcoes: ["Onde", "Aonde", "Mas"],
        correta: 0,
        feedbackAcerto: "🕵️ Correto! 'Morar' não indica movimento, então usa-se 'onde'.",
        feedbackErro: "O verbo 'morar' não tem ideia de movimento, então a forma certa é 'onde', sem o 'a'.",
      },
      {
        pergunta: "5/5 — Complete: 'Ele se comportou ___ na festa e foi repreendido.'",
        opcoes: ["mau", "mal", "mais"],
        correta: 1,
        feedbackAcerto: "🕵️ Excelente investigação! 'Comportar-se mal' é o contrário de 'comportar-se bem'. Caso solucionado! 🕵️",
        feedbackErro: "Teste a troca por 'bem': 'comportou-se bem' combina, então é 'mal', advérbio.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: desmascarando palavras disfarçadas em casa",
    materiais: ["Papel e lápis", "Um adulto para conversar"],
    passos: [
      "1) Com a ajuda de um adulto, criem juntos 4 frases: uma com mau/mal, uma com há/a, uma com mas/mais e uma com onde/aonde.",
      "2) Para cada frase, expliquem em voz alta qual truque (do relatório da aula) ajudou a escolher a palavra certa.",
      "3) Troquem as frases: o adulto lê uma frase errada de propósito e a criança corrige, explicando o motivo.",
      "4) Repitam até sentir confiança nos quatro pares de palavras.",
    ],
    registro: "🗣️ Registrem por escrito as 4 frases certas e o truque usado em cada uma.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
