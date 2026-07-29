import type { AulaPortuguesV4 } from "../../types";
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as tigre } from "@/assets/neuro-treino/objetos/tigre.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Aula 1 — Concordância nominal e verbal
 * -------------------------------------------------------------
 * Primeira parada da Unidade 3 (Engrenagem da Frase). A expedição
 * descobre que, numa frase, as peças precisam "encaixar": o artigo e
 * o adjetivo combinam com o substantivo (gênero e número), e o verbo
 * combina com quem pratica a ação (o sujeito).
 *
 * Foco pedagógico:
 *  - Concordância NOMINAL: artigo/adjetivo concordam em gênero e
 *    número com o substantivo (a mochila pesada / os mapas antigos).
 *  - Concordância VERBAL: o verbo muda de forma conforme o sujeito
 *    é singular ou plural (o guia explica / os guias explicam).
 *  - Reconhecer frases "desengrenadas" (erro de concordância) e
 *    consertá-las.
 *
 * BNCC: EF04LP06, EF04LP07, EF35LP12.
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-concordancia",
  titulo: "Concordância nominal e verbal",
  iconeTrilha: "⚙️",
  bncc: ["EF04LP06", "EF04LP07", "EF35LP12"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A engrenagem emperrada",
    historia:
      "Brilha ajustou a bússola e olhou pro mapa da expedição. — Uma frase é como uma engrenagem: cada peça precisa encaixar direitinho na outra. Se o artigo não combina com o substantivo, ou o verbo não combina com quem age, a engrenagem TRAVA e a frase soa estranha. Hoje vamos consertar frases emperradas!",
    imagemUrl: bussola,
  },

  momento02_previsao: {
    instrucao:
      "No acampamento, a guia deixou um aviso pregado na árvore. Leia com atenção antes de decidir do que ele trata.",
    bloco: {
      titulo: "O Aviso da Trilha",
      capaImagemUrl: mapa,
      recado: {
        rotulo: "Aviso do acampamento",
        icone: "🧭",
        estilo: "papel",
        linhas: [
          "Atenção, exploradores!",
          "As trilhas novas estão liberadas.",
          "Os guias experientes vão acompanhar o grupo.",
        ],
      },
      pistas: [
        { imagemUrl: mochila, nome: "Uma mochila" },
        { imagemUrl: criancasGrupo, nome: "Um grupo de exploradores" },
      ],
      pergunta: "Sobre o que esse aviso vai tratar?",
      hipoteses: [
        { texto: "A liberação de trilhas novas, acompanhadas por guias.", imagemUrl: criancasGrupo },
        { texto: "Uma receita de suco de frutas.", imagemUrl: mapa },
        { texto: "O horário do ônibus da escola.", imagemUrl: mochila },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! O aviso fala das trilhas novas e dos guias que vão acompanhar — repare como AS TRILHAS e OS GUIAS já vêm no plural, combinando com o verbo.",
      feedbackErro:
        "Releia o aviso: ele fala de TRILHAS NOVAS liberadas e GUIAS que vão acompanhar o grupo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de seguir a trilha, conheça as palavras-chave de hoje.",
    cards: [
      {
        palavra: "concordância nominal",
        explicacao:
          "É quando o artigo e o adjetivo mudam de forma para COMBINAR com o substantivo em gênero (masculino/feminino) e número (singular/plural).",
        exemplo: "'A mochila pesada' (feminino, singular) / 'Os mapas pesados' (masculino, plural).",
        imagemUrl: mochila,
      },
      {
        palavra: "concordância verbal",
        explicacao:
          "É quando o verbo muda de forma para COMBINAR com o sujeito da frase: se o sujeito é um só, o verbo fica no singular; se são vários, o verbo vai para o plural.",
        exemplo: "'O guia explica a trilha.' / 'Os guias explicam a trilha.'",
        imagemUrl: criancasGrupo,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Quando a engrenagem encaixa (e quando trava)",
    instrucao: "Observe como a mesma frase muda quando o número muda.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "A exploradora corajosa atravessou a ponte.",
            explicacao:
              "Tudo no singular e no feminino: 'A', 'corajosa' e 'exploradora' combinam entre si.",
          },
          {
            texto: "As exploradoras corajosas atravessaram a ponte.",
            explicacao:
              "Agora tudo foi para o plural junto: 'As', 'corajosas' e 'atravessaram' — a engrenagem inteira girou.",
          },
          {
            texto: "❌ As exploradora corajosas atravessou a ponte.",
            explicacao:
              "Errado! 'As' está no plural, mas 'exploradora' e 'atravessou' ficaram no singular — a engrenagem travou.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o relato da expedição. Preste atenção em como artigos, adjetivos e verbos combinam entre si.",
    leitura: {
      titulo: "Relato: A Travessia da Floresta Alta",
      imagemUrl: tigre,
      legendaImagem: "Os exploradores avistaram um tigre distante",
      destacar: ["Os exploradores", "avistaram", "As árvores", "altas", "o guia experiente", "explicou"],
      paragrafos: [
        "Os exploradores caminharam pela trilha estreita. As árvores altas cobriam o céu, e o ar ficava mais fresco a cada passo.",
        "De repente, os exploradores avistaram um tigre distante, entre as folhas. Todos ficaram em silêncio para não assustar o animal.",
        "O guia experiente explicou: — Esse tigre vive protegido nesta reserva. As pessoas daqui cuidam bem dos animais selvagens.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no relato se precisar. Toda resposta está escrita.",
    perguntas: [
      {
        pergunta: "O que os exploradores avistaram na floresta?",
        opcoes: ["Um rio", "Um tigre distante", "Uma ponte quebrada"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! 'Os exploradores avistaram' — sujeito no plural (exploradores) com verbo no plural (avistaram).",
        feedbackErro: "Releia o segundo parágrafo: 'os exploradores avistaram um tigre distante'.",
        ondeEstaNoTexto: "De repente, os exploradores avistaram um tigre distante, entre as folhas.",
      },
      {
        pergunta: "Como eram as árvores da floresta?",
        opcoes: ["Baixas e secas", "Altas", "Coloridas"],
        correta: 1,
        feedbackAcerto:
          "🎉 Correto! 'As árvores altas' — o adjetivo ALTAS concorda no plural e no feminino com ÁRVORES.",
        feedbackErro: "No primeiro parágrafo: 'As árvores altas cobriam o céu'.",
        ondeEstaNoTexto: "As árvores altas cobriam o céu.",
      },
      {
        pergunta: "Quem explicou sobre o tigre?",
        opcoes: ["O guia experiente", "Uma exploradora", "Um animal"],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso! 'O guia experiente explicou' — sujeito no singular (guia) com verbo no singular (explicou).",
        feedbackErro: "No terceiro parágrafo: 'O guia experiente explicou'.",
        ondeEstaNoTexto: "O guia experiente explicou: — Esse tigre vive protegido nesta reserva.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora observe como as palavras da frase combinam entre si no relato.",
    perguntas: [
      {
        pergunta: "Na frase 'Os exploradores caminharam pela trilha', por que o verbo é 'caminharam' e não 'caminhou'?",
        opcoes: [
          "Porque o sujeito 'os exploradores' está no plural",
          "Porque a trilha é longa",
          "Porque é uma regra sem motivo",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso mesmo! O verbo concorda com o SUJEITO. Como 'os exploradores' é plural, o verbo vai para o plural: caminharam.",
        feedbackErro:
          "O verbo sempre combina com quem pratica a ação. 'Os exploradores' é plural, então o verbo também precisa ir para o plural.",
      },
      {
        pergunta: "Se a frase fosse sobre UM só explorador, como ficaria o verbo?",
        opcoes: ["O explorador caminharam", "O explorador caminhou", "O explorador caminha eles"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Sujeito singular (o explorador) pede verbo singular (caminhou).",
        feedbackErro:
          "Se o sujeito é UM só, o verbo fica no singular: 'O explorador caminhou'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As peças da engrenagem embaralharam. Coloque cada frase consertada na ordem em que a expedição avançou.",
    bloco: {
      instrucao: "Do início da travessia até o encontro com o guia.",
      itens: [
        { id: "p1", texto: "Os exploradores caminharam pela trilha estreita.", imagemUrl: criancasGrupo },
        { id: "p2", texto: "As árvores altas cobriam o céu.", imagemUrl: arvore },
        { id: "p3", texto: "O guia experiente explicou sobre o tigre.", imagemUrl: tigre },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Trilha em ordem! Você seguiu a sequência da expedição prestando atenção nas concordâncias.",
      feedbackErro:
        "Pense na ordem dos acontecimentos: primeiro caminharam, depois notaram as árvores, e por último o guia explicou.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Nova leitura, sozinho agora. Depois responda.",
    leitura: {
      titulo: "O Acampamento à Beira do Rio",
      imagemUrl: leao,
      destacar: ["As tendas", "coloridas", "os viajantes", "montaram"],
      paragrafos: [
        "As tendas coloridas ficaram prontas antes do pôr do sol. Os viajantes montaram o acampamento perto do rio, onde a água corria calma.",
        "À noite, um leão distante rugiu na savana. Os viajantes cansados dormiram tranquilos, pois o acampamento estava bem protegido.",
      ],
    },
    perguntas: [
      {
        pergunta: "Onde os viajantes montaram o acampamento?",
        opcoes: ["Na montanha", "Perto do rio", "Dentro da floresta"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! 'Os viajantes montaram o acampamento perto do rio' — sujeito e verbo no plural, combinando.",
        feedbackErro: "Está no primeiro parágrafo: 'perto do rio, onde a água corria calma'.",
        ondeEstaNoTexto: "Os viajantes montaram o acampamento perto do rio.",
      },
      {
        pergunta: "Como eram as tendas do acampamento?",
        opcoes: ["Coloridas", "Rasgadas", "Pequenas demais"],
        correta: 0,
        feedbackAcerto:
          "🎉 Correto! 'As tendas coloridas' — o adjetivo concorda no plural e no feminino com TENDAS.",
        feedbackErro: "A primeira frase diz: 'As tendas coloridas ficaram prontas'.",
        ondeEstaNoTexto: "As tendas coloridas ficaram prontas antes do pôr do sol.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Conserte a Engrenagem",
    instrucao: "Arraste cada frase para o alvo certo: ENGRENADA (concordância correta) ou EMPERRADA (erro de concordância).",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Engrenada ou Emperrada?",
      bloco: {
        instrucao: "Leia cada frase e decida se as palavras combinam entre si.",
        itens: [
          { id: "i1", texto: "As exploradoras corajosas chegaram.", alvoId: "engrenada" },
          { id: "i2", texto: "As exploradora corajosa chegaram.", alvoId: "emperrada" },
          { id: "i3", texto: "O guia experiente explica a trilha.", alvoId: "engrenada" },
          { id: "i4", texto: "Os guia experiente explicam a trilha.", alvoId: "emperrada" },
          { id: "i5", texto: "Os mapas antigos ajudaram o grupo.", alvoId: "engrenada" },
          { id: "i6", texto: "Os mapa antigo ajudou o grupo.", alvoId: "emperrada" },
        ],
        alvos: [
          { id: "engrenada", nome: "Engrenada", descricao: "Tudo combina certinho" },
          { id: "emperrada", nome: "Emperrada", descricao: "Alguma palavra ficou fora do gênero/número" },
        ],
        feedbackAcerto:
          "🎉 Muito bem! Você percebeu quando artigo, adjetivo e substantivo combinam, e quando o verbo bate com o sujeito.",
        feedbackErro:
          "Dica: confira se TODAS as palavras da frase estão no mesmo gênero e número — do artigo até o verbo.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "CONCORDÂNCIA NOMINAL: artigo e adjetivo combinam em gênero e número com o substantivo.",
      "CONCORDÂNCIA VERBAL: o verbo combina em número com o sujeito da frase (singular ou plural).",
      "Se o sujeito muda de singular para plural, o verbo também precisa mudar.",
      "Uma frase 'emperrada' tem palavras que não combinam entre si.",
    ],
    miniDesafio: {
      pergunta: "Qual frase está com a concordância certa?",
      opcoes: ["Os guias experiente chegou.", "Os guias experientes chegaram.", "O guia experientes chegaram."],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 'Os guias experientes chegaram' — tudo no plural, combinando.",
      feedbackErro: "Confira: se o sujeito é plural (os guias), tudo precisa ir para o plural junto.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é concordância nominal?",
        opcoes: [
          "Artigo e adjetivo combinando em gênero e número com o substantivo",
          "O verbo mudando de tempo",
          "Um sinal de pontuação",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Concordância nominal é o encaixe entre artigo, adjetivo e substantivo.",
        feedbackErro:
          "Concordância NOMINAL é sobre as palavras que acompanham o substantivo (artigo e adjetivo).",
      },
      {
        pergunta: "2/5 — Qual frase tem concordância VERBAL correta?",
        opcoes: ["Os exploradores caminha.", "Os exploradores caminham.", "O explorador caminham."],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Sujeito plural (os exploradores) com verbo plural (caminham).",
        feedbackErro: "O verbo precisa combinar em número com o sujeito: sujeito plural pede verbo plural.",
      },
      {
        pergunta: "3/5 — Complete: 'As mochilas ___ pesadas.'",
        opcoes: ["está", "estão", "estava"],
        correta: 1,
        feedbackAcerto: "🎉 'As mochilas estão' — sujeito plural, verbo plural.",
        feedbackErro: "'As mochilas' é plural, então o verbo precisa ir para o plural: estão.",
      },
      {
        pergunta: "4/5 — Qual frase está 'emperrada' (erro de concordância)?",
        opcoes: ["A trilha é longa.", "As trilha é longas.", "As trilhas são longas."],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! 'As trilha é longas' mistura plural e singular — o artigo, o substantivo e o adjetivo não combinam.",
        feedbackErro:
          "Observe cada palavra: 'As trilha é longas' tem 'As' (plural), 'trilha' (singular) e 'longas' (plural) — não combinam.",
      },
      {
        pergunta: "5/5 — Complete: 'O explorador corajoso ___ a trilha.'",
        opcoes: ["atravessaram", "atravessou", "atravessa eles"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Sujeito singular (o explorador) pede verbo singular (atravessou).",
        feedbackErro: "'O explorador' é singular, então o verbo também fica no singular: atravessou.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça às Engrenagens em Casa",
    materiais: ["Papel e lápis", "Um livro ou revista da casa"],
    passos: [
      "1) Escolha 3 frases de um livro ou revista.",
      "2) Sublinhe o substantivo, o artigo e o adjetivo de cada frase.",
      "3) Verifique se todos estão no mesmo gênero e número.",
      "4) Invente 1 frase 'emperrada' de propósito e peça pra alguém da família consertar.",
    ],
    registro: "📝 Uma lista com as 3 frases sublinhadas e a frase 'emperrada' consertada.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
