import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as quadroSurpreso } from "@/assets/neuro-treino/objetos/quadro-surpreso.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";

/**
 * Aula 3 — Personagem que fala
 * Discurso direto: travessão + verbos de dizer variados.
 * BNCC: EF35LP07, EF35LP08
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-personagem-que-fala",
  titulo: "Personagem que fala",
  iconeTrilha: "💬",
  bncc: ["EF35LP07", "EF35LP08"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Dando voz aos personagens",
    historia:
      "Aurora entregou ao clube um caderno de casos com falas soltas: — Um bom detetive-escritor não só CONTA o que aconteceu, ele também deixa os personagens FALAREM. Hoje vocês vão aprender o sinal mágico que abre a fala de um personagem: o travessão. E vão descobrir que existem MUITOS jeitos de dizer 'disse'.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe este balão de fala. O que você acha que marca quando um personagem está falando num texto?",
    bloco: {
      titulo: "O Sinal da Fala",
      capaImagemUrl: balao,
      pistas: [
        { imagemUrl: menina, nome: "Uma menina" },
        { imagemUrl: quadroSurpreso, nome: "Uma expressão surpresa" },
      ],
      pergunta: "Como sabemos, num texto escrito, que um personagem está falando?",
      hipoteses: [
        { texto: "A frase aparece em letras maiúsculas." },
        { texto: "Aparece um travessão (—) antes da fala." },
        { texto: "A frase vem sublinhada." },
      ],
      respostaCerta: 1,
      feedbackAcerto: "💬 Isso! O travessão (—) é o sinal que abre a fala de um personagem no discurso direto.",
      feedbackErro: "O sinal usado para marcar a fala direta de um personagem é o TRAVESSÃO (—), no início da linha.",
      dica: "🔎 Pista: lembre do que significa “discurso direto” — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras para dar voz aos seus personagens.",
    cards: [
      {
        palavra: "discurso direto",
        explicacao: "É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão.",
        exemplo: "— Estou com fome! — disse o menino.",
        imagemUrl: balao,
      },
      {
        palavra: "verbo de dizer",
        explicacao: "É a palavra que indica COMO o personagem falou (disse, gritou, sussurrou, perguntou, respondeu).",
        exemplo: "Em vez de repetir 'disse' sempre, o escritor pode usar 'gritou', 'sussurrou' ou 'perguntou'.",
        imagemUrl: quadroSurpreso,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "O travessão e os verbos de fala",
    instrucao: "Veja como marcar a fala de um jeito rico e variado.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "— Cadê meu lanche? — perguntou Lia.", explicacao: "O travessão abre a fala; 'perguntou' mostra que era uma pergunta." },
          { texto: "— Socorro! — gritou o menino, assustado.", explicacao: "'Gritou' mostra emoção forte, bem diferente de 'disse'." },
          { texto: "— Vamos com calma — sussurrou a avó.", explicacao: "'Sussurrou' indica um tom baixo, calmo." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia prestando atenção nos travessões e nos verbos de fala.",
    leitura: {
      titulo: "O Cachorro que Falava Demais (na imaginação de Rico)",
      imagemUrl: cachorro,
      legendaImagem: "Rico e seu cachorro Bolinha",
      destacar: ["perguntou", "respondeu", "gritou"],
      paragrafos: [
        "Rico adorava imaginar o que seu cachorro Bolinha diria se pudesse falar.",
        "— Será que ele quer passear? — perguntou Rico, olhando para o cachorro sentado na porta.",
        "— Au, au! — respondeu Bolinha, abanando o rabo depressa.",
        "— Então vamos! — gritou Rico, animado, pegando a coleira na hora.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      { pergunta: "O que Rico adorava fazer?", opcoes: ["Imaginar o que Bolinha diria", "Correr na rua", "Estudar matemática"], correta: 0, feedbackAcerto: "💬 Isso! Está no primeiro parágrafo.", feedbackErro: "Releia a primeira frase do texto.", ondeEstaNoTexto: "Rico adorava imaginar o que seu cachorro Bolinha diria se pudesse falar.",
        dica: "🔎 Pista: releia no texto o trecho “Rico adorava imaginar o que seu cachorro Bolinha diria se pudesse falar.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “O que Rico adorava fazer?” com essa ideia na cabeça.",
      },
      { pergunta: "Que verbo de fala marca a pergunta de Rico?", opcoes: ["gritou", "perguntou", "respondeu"], correta: 1, feedbackAcerto: "💬 Correto! 'perguntou Rico'.", feedbackErro: "Veja a segunda fala: o verbo vem logo depois do travessão fechado.", ondeEstaNoTexto: "— Será que ele quer passear? — perguntou Rico…",
        dica: "🔎 Pista: releia no texto o trecho “— Será que ele quer passear? — perguntou Rico…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “Que verbo de fala marca a pergunta de Rico?” com essa ideia na cabeça.",
      },
      { pergunta: "O que Bolinha fazia enquanto 'respondia'?", opcoes: ["Dormia", "Abanava o rabo depressa", "Latia baixinho"], correta: 1, feedbackAcerto: "💬 Isso! 'abanando o rabo depressa'.", feedbackErro: "Está logo depois da fala de Bolinha.", ondeEstaNoTexto: "— Au, au! — respondeu Bolinha, abanando o rabo depressa.",
        dica: "🔎 Pista: releia no texto o trecho “— Au, au! — respondeu Bolinha, abanando o rabo depressa.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “O que Bolinha fazia enquanto 'respondia'?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos analisar como as falas revelam emoção.",
    perguntas: [
      { pergunta: "Por que o autor usou 'gritou' e não 'disse' na última fala de Rico?", opcoes: ["Foi um erro de digitação", "Para mostrar a animação de Rico", "Porque estava chovendo"], correta: 1, feedbackAcerto: "💬 Isso! 'Gritou' mostra empolgação, muito mais forte que 'disse'.", feedbackErro: "Pense: 'gritou' é um verbo mais forte que 'disse' — mostra a emoção do personagem.",
        dica: "🔎 Pista: lembre do que significa “discurso direto” — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “Por que o autor usou 'gritou' e não 'disse' na última fala de Rico?” com essa ideia na cabeça.",
      },
      { pergunta: "Qual é o personagem que 'fala' sem usar palavras humanas nessa história?", opcoes: ["Rico", "Bolinha", "Nenhum"], correta: 1, feedbackAcerto: "💬 Correto! Bolinha 'responde' com 'Au, au!' — um jeito criativo de dar fala a um cachorro.", feedbackErro: "Releia: quem 'responde' com um latido em vez de palavras?",
        dica: "🔎 Pista: lembre do que significa “discurso direto” — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “Qual é o personagem que 'fala' sem usar palavras humanas nessa histór…” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize a conversa entre Rico e Bolinha na ordem certa.",
    bloco: {
      instrucao: "Do começo da conversa ao fim.",
      itens: [
        { id: "p1", texto: "Rico pergunta se Bolinha quer passear.", imagemUrl: menino },
        { id: "p2", texto: "Bolinha 'responde' abanando o rabo e latindo.", imagemUrl: cachorro },
        { id: "p3", texto: "Rico grita animado e pega a coleira.", imagemUrl: balao },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "💬 Perfeito! Você seguiu a conversa na ordem certa.",
      feedbackErro: "Pense: primeiro alguém PERGUNTA, depois o outro RESPONDE, e por último vem a reação.",
      dica: "🔎 Pista: lembre do que significa “discurso direto” — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e observe as falas.",
    leitura: {
      titulo: "A Gata Que Não Queria Descer",
      imagemUrl: gato,
      destacar: ["exclamou", "murmurou"],
      paragrafos: [
        "A gata Mimi subiu na árvore mais alta do quintal e não quis descer de jeito nenhum.",
        "— Desce, Mimi, por favor! — exclamou Sofia, preocupada, olhando para cima.",
        "— Miau… — murmurou a gata, bem baixinho, se escondendo atrás de uma folha.",
        "No fim, o pai de Sofia trouxe uma escada e ajudou a gata a descer com cuidado.",
      ],
    },
    perguntas: [
      { pergunta: "Qual verbo mostra que Sofia estava preocupada ao falar?", opcoes: ["murmurou", "exclamou", "sussurrou"], correta: 1, feedbackAcerto: "💬 Isso! 'exclamou Sofia, preocupada'.", feedbackErro: "Releia a segunda fala do texto.", ondeEstaNoTexto: "— Desce, Mimi, por favor! — exclamou Sofia, preocupada…",
        dica: "🔎 Pista: releia no texto o trecho “— Desce, Mimi, por favor! — exclamou Sofia, preocupada…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “Qual verbo mostra que Sofia estava preocupada ao falar?” com essa ideia na cabeça.",
      },
      { pergunta: "Como a gata 'falou' de volta?", opcoes: ["Gritando alto", "Murmurando baixinho", "Não falou nada"], correta: 1, feedbackAcerto: "💬 Isso! 'murmurou a gata, bem baixinho'.", feedbackErro: "A fala da gata vem logo após a de Sofia.", ondeEstaNoTexto: "— Miau… — murmurou a gata, bem baixinho…",
        dica: "🔎 Pista: releia no texto o trecho “— Miau… — murmurou a gata, bem baixinho…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “Como a gata 'falou' de volta?” com essa ideia na cabeça.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "O travessão (—) marca a fala direta de um personagem.",
      "Verbos de dizer (perguntou, gritou, sussurrou, exclamou, murmurou) mostram COMO o personagem falou.",
      "Variar os verbos de fala deixa a história mais interessante do que repetir sempre 'disse'.",
      "As falas ajudam o leitor a sentir a emoção do personagem naquele momento.",
    ],
    miniDesafio: {
      pergunta: "Um personagem fala baixinho porque está com medo. Qual verbo combina melhor?",
      opcoes: ["gritou", "sussurrou", "berrou"],
      correta: 1,
      feedbackAcerto: "💬 Isso! 'Sussurrou' combina com uma fala baixa e cheia de medo.",
      feedbackErro: "Pense no volume da voz: 'sussurrar' é falar bem baixinho.",
      dica: "🔎 Pista: lembre do que significa “discurso direto” — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “Um personagem fala baixinho porque está com medo. Qual verbo combina…” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/5 — Qual sinal marca a fala direta de um personagem?", opcoes: ["Ponto de interrogação", "Travessão (—)", "Vírgula"], correta: 1, feedbackAcerto: "💬 Isso!", feedbackErro: "O sinal é o TRAVESSÃO (—).",
        dica: "🔎 Pista: lembre do que significa “discurso direto” — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “1/5 — Qual sinal marca a fala direta de um personagem?” com essa ideia na cabeça.",
      },
      { pergunta: "2/5 — O que é um 'verbo de dizer'?", opcoes: ["Um verbo de movimento", "Uma palavra que mostra como o personagem falou", "O nome do personagem"], correta: 1, feedbackAcerto: "💬 Correto!", feedbackErro: "É a palavra que mostra COMO alguém falou: gritou, sussurrou, perguntou…",
        dica: "🔎 Pista: lembre do que significa “discurso direto” — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “2/5 — O que é um 'verbo de dizer'?” com essa ideia na cabeça.",
      },
      { pergunta: "3/5 — Por que variar os verbos de fala em vez de usar sempre 'disse'?", opcoes: ["Deixa o texto mais rico e expressivo", "Não faz diferença", "É proibido usar 'disse'"], correta: 0, feedbackAcerto: "💬 Isso!", feedbackErro: "Variar os verbos deixa a leitura mais interessante e mostra emoção.",
        dica: "🔎 Pista: lembre do que significa “discurso direto” — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “3/5 — Por que variar os verbos de fala em vez de usar sempre 'disse'?” com essa ideia na cabeça.",
      },
      { pergunta: "4/5 — Em '— Socorro! — gritou o menino', o que 'gritou' revela?", opcoes: ["Calma", "Susto ou urgência", "Sono"], correta: 1, feedbackAcerto: "💬 Isso mesmo!", feedbackErro: "'Gritou' mostra uma emoção forte, como susto ou urgência.",
        dica: "🔎 Pista: lembre do que significa “discurso direto” — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “4/5 — Em '— Socorro! — gritou o menino', o que 'gritou' revela?” com essa ideia na cabeça.",
      },
      { pergunta: "5/5 — Qual frase está no discurso direto correto?", opcoes: ["Rico disse que ia passear", "— Vou passear! — disse Rico", "Rico foi passear"], correta: 1, feedbackAcerto: "💬 Isso! Só a que tem travessão é discurso direto. Você virou expert em falas! 🌟", feedbackErro: "Discurso direto precisa do travessão (—) marcando exatamente as palavras do personagem.",
        dica: "🔎 Pista: lembre do que significa “discurso direto” — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: discurso direto — É quando o personagem fala EXATAMENTE com suas próprias palavras, marcado com travessão. Exemplo: — Estou com fome! — disse o menino. Agora volte à pergunta “5/5 — Qual frase está no discurso direto correto?” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: uma cena com diálogo",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Escolham dois personagens (podem ser vocês mesmos, um bicho de estimação ou um brinquedo).",
      "2) Inventem uma curta conversa entre eles (3 ou 4 falas).",
      "3) Escrevam cada fala com travessão e um verbo de dizer diferente (perguntou, respondeu, exclamou…).",
      "4) Leiam em voz alta, fazendo a voz de cada personagem.",
    ],
    registro: "🗣️ Registrem o diálogo escrito ou gravem em áudio representando as vozes.",
  },

  recompensa: { xp: 120, moedas: 70 },
};
