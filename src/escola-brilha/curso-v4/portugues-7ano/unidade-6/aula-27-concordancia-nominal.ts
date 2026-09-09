import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 27 — Concordância Nominal: O Alinhamento de Módulos
 * -------------------------------------------------------------
 * Concordância entre substantivo, artigo, adjetivo e numeral.
 *
 * BNCC: EF07LP06
 */
export const aula27: AulaPortuguesV4 = {
  slug: "aula-27-concordancia-nominal",
  titulo: "Concordância Nominal",
  iconeTrilha: "🧩",
  bncc: ["EF07LP06"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "O Alinhamento de Módulos",
    historia: "Analista, no Observatório cada peça de um sistema precisa estar alinhada em gênero e número para funcionar. Se um módulo masculino tenta encaixar em uma porta feminina, o sistema trava. Na língua, isso se chama concordância nominal: artigos, adjetivos e numerais precisam concordar com o substantivo a que se referem. Hoje você vai calibrar esse alinhamento para que nenhuma frase quebre.",
    imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Regras de Encaixe.",
    bloco: {
      titulo: "Painel de Alinhamento Nominal",
      capaImagemUrl: "",
      pistas: [
        { nome: "O adjetivo concorda em gênero e número com o substantivo.", imagemUrl: "" },
        { nome: "O artigo também precisa combinar com o substantivo.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Concordância",
        icone: "🧩",
        linhas: [
          "  [ ALINHAMENTO NOMINAL ]      ",
          "                               ",
          "  AS  ESTRELAS  BRILHANTES     ",
          "  fem. pl.  substantivo  adj.  ",
          "                               ",
          "  O  ROBÔ  VELOZ               ",
          "  masc. sing.  substantivo  adj.",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que precisa acontecer entre o artigo, o adjetivo e o substantivo em uma frase?",
      hipoteses: [
        { texto: "Eles precisam concordar em gênero e número" },
        { texto: "Eles precisam ter o mesmo número de letras" },
        { texto: "Eles precisam estar sempre em ordem alfabética" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Alinhamento confirmado. Gênero e número precisam combinar entre os termos.",
      feedbackErro: "Observe 'as estrelas brilhantes': tudo está no feminino e no plural.",
      dica: "Compare 'o robô veloz' com 'a nave veloz'.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Peças do Alinhamento.",
    cards: [
      { palavra: "Concordância nominal", explicacao: "É o ajuste de gênero e número entre substantivo, artigo, adjetivo e numeral em uma frase.", exemplo: "As telas antigas foram substituídas.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Gênero", explicacao: "Classificação da palavra como masculina ou feminina.", exemplo: "'O painel' é masculino; 'a tela' é feminino.", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Número", explicacao: "Classificação da palavra como singular (um) ou plural (mais de um).", exemplo: "'O sensor' é singular; 'os sensores' é plural.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Alinhamento: Casos Especiais",
    instrucao: "Veja como a concordância nominal funciona em situações do dia a dia.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "As luzes vermelhas piscaram no painel.",
            explicacao: "💡 CONCORDÂNCIA SIMPLES: artigo, substantivo e adjetivo no feminino plural.\n> Ex: 'as portas trancadas' e 'as máquinas antigas'.",
          },
          {
            texto: "O analista e a robô ficaram atentos.",
            explicacao: "💡 DOIS NÚCLEOS DE GÊNEROS DIFERENTES: quando há um substantivo masculino e um feminino juntos, o adjetivo posterior costuma ir para o masculino plural: 'O analista e a robô ficaram atentos'.\n> Ex: 'O menino e a menina estavam cansados.'",
          },
          {
            texto: "Bastante energia foi usada na missão.",
            explicacao: "💡 PALAVRA INVARIÁVEL: 'bastante' como advérbio (equivalente a 'muito') não varia.\n> Ex: 'Eles trabalharam bastante.' e 'Havia bastante gente.'",
          },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Painel que Precisa Estar Alinhado",
      imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      destacar: ["concordância", "gênero", "número", "adjetivo"],
      paragrafos: [
        "No Observatório, cada relatório escrito precisa ter suas peças alinhadas. A concordância nominal garante que artigos, adjetivos e numerais combinem em gênero e número com o substantivo principal da frase.",
        "Quando escrevemos 'as câmeras antigas foram desligadas', o artigo 'as', o adjetivo 'antigas' e o verbo 'foram' seguem o substantivo 'câmeras', que é feminino e plural. Trocar qualquer peça quebra o alinhamento: 'os câmeras antigas' soa estranho porque o artigo não combina.",
        "Casos especiais exigem atenção redobrada, como quando dois substantivos de gêneros diferentes aparecem juntos: nesse caso, o adjetivo que vem depois costuma ir para o masculino plural, como em 'o robô e a nave estavam avariados'.",
        "Revisar a concordância nominal é um passo essencial antes de publicar qualquer relatório, pois pequenos deslizes comprometem a clareza e a credibilidade do texto."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, o que a concordância nominal garante?",
        opcoes: ["Que artigos, adjetivos e numerais combinem em gênero e número com o substantivo", "Que todas as palavras rimem", "Que o texto tenha o mesmo número de linhas", "Que só se usem substantivos"],
        correta: 0,
        feedbackAcerto: "Correto! É exatamente esse o papel da concordância nominal.",
        feedbackErro: "Releia a primeira frase do segundo parágrafo.",
        ondeEstaNoTexto: "A concordância nominal garante que artigos, adjetivos e numerais combinem em gênero e número com o substantivo principal",
        dica: "Pense no exemplo 'as câmeras antigas'.",
        reensino: "Revise o card 'Concordância nominal' no momento 03.",
      },
      {
        pergunta: "Quando dois substantivos de gêneros diferentes aparecem juntos, para onde o adjetivo posterior costuma ir?",
        opcoes: ["Para o masculino plural", "Para o feminino singular", "Ele desaparece da frase", "Sempre para o neutro"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! O adjetivo vai para o masculino plural nesse caso.",
        feedbackErro: "Observe o exemplo 'o robô e a nave estavam avariados'.",
        ondeEstaNoTexto: "o adjetivo que vem depois costuma ir para o masculino plural",
        dica: "Reveja o bloco de ensino visual sobre dois núcleos de gêneros diferentes.",
        reensino: "Revise o Laboratório de Alinhamento no momento visual.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Alinhamento Nominal",
    instrucao: "Escreva frases aplicando corretamente a concordância nominal.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Relatório de Alinhamento",
        comando: "Escreva um pequeno relatório de 4 frases descrevendo o Observatório, usando ao menos dois adjetivos no plural feminino e dois no plural masculino.",
        modelo: [
          "As telas modernas mostram os dados do sistema.",
          "Os sensores antigos foram substituídos por novos aparelhos precisos.",
        ],
        checklist: [
          "Os artigos combinam com os substantivos em gênero e número?",
          "Os adjetivos combinam com os substantivos em gênero e número?",
          "Usei ao menos um adjetivo no feminino plural e um no masculino plural?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Revisão de Concordância",
    bloco: {
      instrucao: "Organize o processo de revisão da concordância nominal em um texto.",
      itens: [
        { id: "1", texto: "🔎 IDENTIFICAR O SUBSTANTIVO: Descubra o núcleo da frase e seu gênero/número.", imagemUrl: "" },
        { id: "2", texto: "🧩 VERIFICAR O ARTIGO: Confirme se o artigo combina com o substantivo.", imagemUrl: "" },
        { id: "3", texto: "🧩 VERIFICAR O ADJETIVO: Confirme se o adjetivo combina com o substantivo.", imagemUrl: "" },
        { id: "4", texto: "✅ CORRIGIR SE NECESSÁRIO: Ajuste as peças que estiverem desalinhadas.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Alinhamento perfeito! Você revisou a concordância como um verdadeiro Analista.",
      feedbackErro: "A revisão falhou. Primeiro identifique o núcleo, depois cheque as peças ao redor.",
      dica: "Sem saber o gênero e número do substantivo, você não pode checar as outras peças.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Relatório de Campo.",
    leitura: {
      titulo: "Relatório: Falhas de Alinhamento",
      imagemUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
      destacar: ["duas naves", "meio-dia", "próprio"],
      paragrafos: [
        "Duas naves avariadas chegaram ao porto ao meio-dia, trazendo relatórios sobre falhas no sistema de energia.",
        "O comandante, preocupado, disse que a própria equipe deveria revisar cada peça antes do próximo lançamento.",
        "Ao final, ficou claro que pequenos erros de concordância nos relatórios haviam causado confusão entre as equipes."
      ],
    },
    perguntas: [
      {
        pergunta: "Na frase 'duas naves avariadas', qual peça concorda em gênero e número com 'naves'?",
        opcoes: ["avariadas", "meio-dia", "comandante", "equipe"],
        correta: 0,
        feedbackAcerto: "Exato! 'Avariadas' está no feminino plural, como 'naves'.",
        feedbackErro: "Observe qual palavra tem a mesma terminação de gênero e número de 'naves'.",
        dica: "Compare com 'naves' e veja qual palavra termina igual.",
        reensino: "Revise o Painel de Alinhamento Nominal no momento 02.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Concordância nominal é o ajuste de gênero e número entre substantivo, artigo, adjetivo e numeral.",
      "Dois substantivos de gêneros diferentes costumam levar o adjetivo posterior ao masculino plural.",
      "Revisar a concordância evita erros que confundem o leitor sobre quem faz ou recebe a ação.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é concordância nominal?",
        opcoes: ["Ajuste de gênero e número entre substantivo, artigo e adjetivo", "Uma regra de pontuação", "Um tipo de verbo irregular", "A ordem alfabética das palavras"],
        correta: 0,
        feedbackAcerto: "Correto! É o ajuste de gênero e número entre os termos.",
        feedbackErro: "Revise o card de vocabulário 'Concordância nominal'.",
        ondeEstaNoTexto: "A concordância nominal garante que artigos, adjetivos e numerais combinem",
        dica: "Pense em 'as câmeras antigas'.",
        reensino: "Revise o momento 03 do vocabulário.",
      },
      {
        pergunta: "Qual frase está com a concordância nominal correta?",
        opcoes: ["As portas trancadas foram abertas.", "Os portas trancada foram aberto.", "A portas trancados foi aberta.", "As porta trancado foram abertos."],
        correta: 0,
        feedbackAcerto: "Isso! Todas as peças combinam em feminino plural.",
        feedbackErro: "Verifique se artigo, substantivo, adjetivo e verbo combinam entre si.",
        ondeEstaNoTexto: "as câmeras antigas foram desligadas",
        dica: "Leia cada opção em voz alta e note qual soa estranha.",
        reensino: "Revise o Laboratório de Alinhamento com casos especiais.",
      },
      {
        pergunta: "Na frase 'o robô e a nave estavam avariados', por que 'avariados' está no masculino plural?",
        opcoes: ["Porque há dois substantivos de gêneros diferentes juntos", "Porque a nave é sempre masculina", "Porque robô não tem gênero", "Porque é uma regra sem explicação"],
        correta: 0,
        feedbackAcerto: "Perfeito! Nesse caso, o adjetivo posterior vai para o masculino plural.",
        feedbackErro: "Releia o bloco de ensino visual sobre dois núcleos de gêneros diferentes.",
        ondeEstaNoTexto: "quando dois substantivos de gêneros diferentes aparecem juntos",
        dica: "Reveja o exemplo do painel: 'o analista e a robô ficaram atentos'.",
        reensino: "Revise o momento de ensino visual desta aula.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Alinhamento",
    materiais: ["Papel", "Caneta", "Objetos da casa"],
    passos: [
      "Escolha cinco objetos da casa e diga o gênero e número de cada um.",
      "Crie uma frase para cada objeto usando um artigo e um adjetivo que concordem corretamente.",
      "Peça para um familiar ouvir e apontar se alguma peça está desalinhada.",
      "Corrija juntos as frases que precisarem de ajuste."
    ],
    registro: "Escreva no caderno: 'Missão Alinhamento - Minhas frases corrigidas foram [X, Y, Z]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
