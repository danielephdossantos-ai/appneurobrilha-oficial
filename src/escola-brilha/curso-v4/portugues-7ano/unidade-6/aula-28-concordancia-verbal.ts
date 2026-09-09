import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 28 — Concordância Verbal: O Sincronismo do Sistema
 * -------------------------------------------------------------
 * Concordância entre sujeito e verbo.
 *
 * BNCC: EF07LP06, EF07LP10
 */
export const aula28: AulaPortuguesV4 = {
  slug: "aula-28-concordancia-verbal",
  titulo: "Concordância Verbal",
  iconeTrilha: "⚙️",
  bncc: ["EF07LP06", "EF07LP10"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "O Sincronismo do Sistema",
    historia: "Analista, todo sistema do Observatório depende de sincronismo perfeito entre suas peças. O sujeito de uma frase é o comando principal, e o verbo precisa responder exatamente na mesma frequência: se o sujeito é plural, o verbo tem que ser plural. Um verbo fora de sincronia é como um motor girando em rotação errada — o sistema todo range. Hoje você vai calibrar esse sincronismo.",
    imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Sincronia Sujeito-Verbo.",
    bloco: {
      titulo: "Painel de Sincronismo Verbal",
      capaImagemUrl: "",
      pistas: [
        { nome: "O verbo concorda em número e pessoa com o sujeito.", imagemUrl: "" },
        { nome: "Sujeitos compostos costumam exigir verbo no plural.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Concordância Verbal",
        icone: "⚙️",
        linhas: [
          "  [ SINCRONISMO SUJEITO-VERBO ] ",
          "                                ",
          "  O SENSOR DETECTA  o alvo.     ",
          "  sing.     sing.               ",
          "                                ",
          "  OS SENSORES DETECTAM  o alvo. ",
          "  plural       plural           ",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que precisa acontecer entre o sujeito e o verbo em uma frase?",
      hipoteses: [
        { texto: "O verbo precisa concordar em número e pessoa com o sujeito" },
        { texto: "O verbo pode ficar em qualquer tempo, sem regra" },
        { texto: "O sujeito precisa vir sempre depois do verbo" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Sincronismo confirmado. O verbo acompanha o número e a pessoa do sujeito.",
      feedbackErro: "Compare 'o sensor detecta' com 'os sensores detectam'.",
      dica: "Observe a terminação do verbo quando o sujeito vira plural.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Peças do Sincronismo.",
    cards: [
      { palavra: "Concordância verbal", explicacao: "É o ajuste do verbo em número e pessoa de acordo com o sujeito da frase.", exemplo: "Os analistas verificam os dados todos os dias.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Sujeito composto", explicacao: "Sujeito formado por dois ou mais núcleos, geralmente ligados por 'e'.", exemplo: "O robô e a nave chegaram juntos.", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Sujeito oculto", explicacao: "Sujeito que não aparece escrito, mas é identificado pela terminação do verbo.", exemplo: "Chegamos ao Observatório ao amanhecer. (sujeito: nós)", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sincronismo: Casos do Dia a Dia",
    instrucao: "Veja como o verbo se ajusta ao sujeito em diferentes situações.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "A equipe de analistas trabalha em silêncio.",
            explicacao: "💡 SUJEITO COLETIVO SINGULAR: 'equipe' é singular, então o verbo fica no singular, mesmo indicando várias pessoas.\n> Ex: 'O grupo decide junto.' e 'A turma estuda muito.'",
          },
          {
            texto: "Eu e você resolvemos o enigma.",
            explicacao: "💡 SUJEITO COMPOSTO COM PESSOAS DIFERENTES: quando 'eu' aparece no sujeito composto, o verbo vai para a 1ª pessoa do plural (nós).\n> Ex: 'Eu e ela vamos ao laboratório.'",
          },
          {
            texto: "Fazem dois anos que o sistema foi ativado.",
            explicacao: "💡 VERBO 'FAZER' EM EXPRESSÕES DE TEMPO: quando indica tempo decorrido e tem sujeito plural, o verbo 'fazer' vai para o plural.\n> Ex: 'Fazem três dias que ele chegou.'",
          },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Motor que Precisa Girar Junto",
      imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      destacar: ["concordância verbal", "sujeito", "plural", "singular"],
      paragrafos: [
        "No Observatório, todo comando precisa de resposta sincronizada. Na língua, isso se chama concordância verbal: o verbo deve acompanhar o número e a pessoa do sujeito da frase.",
        "Quando o sujeito é simples e singular, como 'o sensor', o verbo também fica no singular: 'o sensor detecta o alvo'. Quando o sujeito vira plural, como 'os sensores', o verbo acompanha: 'os sensores detectam o alvo'.",
        "Casos especiais exigem atenção: sujeitos coletivos como 'equipe' ou 'turma' são singulares mesmo representando várias pessoas, então o verbo fica no singular. Já sujeitos compostos, formados por dois núcleos ligados por 'e', geralmente exigem verbo no plural, como em 'o robô e a nave chegaram'.",
        "Ignorar essas regras produz frases que confundem o leitor sobre quem realiza a ação, por isso revisar a concordância verbal é essencial em qualquer relatório do Observatório."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que é a concordância verbal?",
        opcoes: ["O ajuste do verbo em número e pessoa conforme o sujeito", "Uma regra de acentuação", "A ordem das palavras na frase", "Um tipo de pontuação"],
        correta: 0,
        feedbackAcerto: "Correto! É exatamente esse o papel da concordância verbal.",
        feedbackErro: "Releia a primeira frase do segundo parágrafo.",
        ondeEstaNoTexto: "o verbo deve acompanhar o número e a pessoa do sujeito da frase",
        dica: "Pense no exemplo 'o sensor detecta' e 'os sensores detectam'.",
        reensino: "Revise o card 'Concordância verbal' no momento 03.",
      },
      {
        pergunta: "Por que 'a equipe trabalha' usa o verbo no singular, mesmo representando várias pessoas?",
        opcoes: ["Porque 'equipe' é um sujeito coletivo singular", "Porque 'trabalha' é sempre singular", "Porque não existe regra para isso", "Porque a frase está errada"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Sujeitos coletivos são singulares mesmo representando grupos.",
        feedbackErro: "Releia o trecho sobre sujeitos coletivos como 'equipe' e 'turma'.",
        ondeEstaNoTexto: "sujeitos coletivos como 'equipe' ou 'turma' são singulares mesmo representando várias pessoas",
        dica: "Compare com 'o grupo decide junto', do Laboratório de Sincronismo.",
        reensino: "Revise o momento de ensino visual sobre sujeito coletivo.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Sincronismo Verbal",
    instrucao: "Escreva frases aplicando corretamente a concordância verbal.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Relatório de Sincronismo",
        comando: "Escreva um relatório de 4 frases sobre uma missão no Observatório, usando ao menos um sujeito simples, um sujeito composto e um sujeito coletivo.",
        modelo: [
          "O analista verifica os dados. (sujeito simples)",
          "O robô e a nave chegaram juntos à base. (sujeito composto)",
          "A equipe trabalha em silêncio. (sujeito coletivo)",
        ],
        checklist: [
          "O verbo concorda em número com o sujeito simples?",
          "O verbo concorda em plural com o sujeito composto?",
          "O verbo fica no singular com o sujeito coletivo?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Revisão de Sincronismo",
    bloco: {
      instrucao: "Organize o processo de revisão da concordância verbal em uma frase.",
      itens: [
        { id: "1", texto: "🔎 LOCALIZAR O SUJEITO: Descubra quem pratica a ação do verbo.", imagemUrl: "" },
        { id: "2", texto: "🧮 VERIFICAR NÚMERO E PESSOA: Determine se o sujeito é singular, plural, 1ª, 2ª ou 3ª pessoa.", imagemUrl: "" },
        { id: "3", texto: "⚙️ AJUSTAR O VERBO: Confirme se a terminação do verbo combina com o sujeito.", imagemUrl: "" },
        { id: "4", texto: "✅ VALIDAR A FRASE: Leia em voz alta para confirmar que o sincronismo está correto.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Sincronismo perfeito! Você calibrou a concordância verbal com precisão.",
      feedbackErro: "A revisão falhou. Primeiro ache o sujeito, depois calcule número e pessoa.",
      dica: "Sem localizar o sujeito, é impossível saber a terminação certa do verbo.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Relatório de Campo.",
    leitura: {
      titulo: "Relatório: Sincronia em Risco",
      imagemUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
      destacar: ["a maioria", "os técnicos", "nós"],
      paragrafos: [
        "A maioria dos técnicos concorda que o sistema precisa de manutenção urgente antes do próximo lançamento.",
        "Os técnicos e os analistas revisaram juntos cada componente da nave, buscando qualquer falha de sincronismo.",
        "Nós, da equipe de campo, confirmamos que o problema estava em um sensor desalinhado, já substituído."
      ],
    },
    perguntas: [
      {
        pergunta: "Na frase 'os técnicos e os analistas revisaram juntos', por que o verbo está no plural?",
        opcoes: ["Porque o sujeito é composto por dois núcleos", "Porque 'revisar' é sempre plural", "Porque a frase é uma pergunta", "Porque não há sujeito"],
        correta: 0,
        feedbackAcerto: "Exato! Sujeito composto geralmente exige verbo no plural.",
        feedbackErro: "Observe que há dois núcleos ligados por 'e': técnicos e analistas.",
        dica: "Reveja o card 'Sujeito composto' no momento 03.",
        reensino: "Revise o Painel de Sincronismo Verbal no momento 02.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Concordância verbal é o ajuste do verbo em número e pessoa conforme o sujeito.",
      "Sujeitos coletivos (equipe, turma) exigem verbo no singular.",
      "Sujeitos compostos (dois núcleos ligados por 'e') geralmente exigem verbo no plural.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é concordância verbal?",
        opcoes: ["Ajuste do verbo em número e pessoa conforme o sujeito", "Uma regra sobre acentuação de palavras", "A escolha do gênero do substantivo", "A ordem das sílabas em uma palavra"],
        correta: 0,
        feedbackAcerto: "Correto! É exatamente esse o papel da concordância verbal.",
        feedbackErro: "Revise o card de vocabulário 'Concordância verbal'.",
        ondeEstaNoTexto: "o verbo deve acompanhar o número e a pessoa do sujeito da frase",
        dica: "Pense no exemplo dos sensores.",
        reensino: "Revise o momento 03 do vocabulário.",
      },
      {
        pergunta: "Qual frase está com a concordância verbal correta?",
        opcoes: ["Os robôs analisam os dados.", "Os robôs analisa os dados.", "O robôs analisam o dados.", "Os robô analisam os dados."],
        correta: 0,
        feedbackAcerto: "Isso! O verbo 'analisam' concorda em plural com 'os robôs'.",
        feedbackErro: "Verifique se o verbo e o sujeito estão ambos no plural.",
        ondeEstaNoTexto: "os sensores detectam o alvo",
        dica: "Leia cada opção em voz alta e note qual soa estranha.",
        reensino: "Revise o Painel de Sincronismo Verbal no momento 02.",
      },
      {
        pergunta: "Na frase 'a equipe trabalha em silêncio', por que o verbo está no singular?",
        opcoes: ["Porque 'equipe' é um sujeito coletivo singular", "Porque 'trabalha' nunca vai para o plural", "Porque a frase está no passado", "Porque não há sujeito na frase"],
        correta: 0,
        feedbackAcerto: "Perfeito! Sujeitos coletivos concordam no singular mesmo representando grupos.",
        feedbackErro: "Releia o trecho sobre sujeito coletivo no texto da leitura guiada.",
        ondeEstaNoTexto: "sujeitos coletivos como 'equipe' ou 'turma' são singulares",
        dica: "Reveja o Laboratório de Sincronismo sobre sujeito coletivo.",
        reensino: "Revise o momento de ensino visual desta aula.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Sincronismo",
    materiais: ["Papel", "Caneta", "Membros da família"],
    passos: [
      "Escolha três sujeitos diferentes: um simples, um composto e um coletivo.",
      "Crie uma frase para cada um, escolhendo o verbo certo para concordar.",
      "Leia as frases em voz alta para a família e peça que apontem se algo soa errado.",
      "Corrija juntos qualquer frase que estiver fora de sincronia."
    ],
    registro: "Escreva no caderno: 'Missão Sincronismo - Minhas frases corrigidas foram [X, Y, Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
