import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bau } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio-magico.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as noite } from "@/assets/neuro-treino/objetos/noite.png.asset.json";

/**
 * Unidade 5 · Aula única — O Fio da Narrativa
 * -------------------------------------------------------------
 * Narrativa longa: narrador (1ª/3ª pessoa), discurso direto e
 * indireto, e o encadeamento causal do enredo.
 *
 * BNCC: EF05LP24, EF05LP25, EF05LP26
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-o-fio-da-narrativa",
  titulo: "O Fio da Narrativa: Narrador e Discurso",
  iconeTrilha: "📜",
  bncc: ["EF05LP24", "EF05LP25", "EF05LP26"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O baú de histórias sem dono",
    historia:
      "— Pip, achei um baú cheio de histórias, mas nenhuma diz QUEM está contando! — Esse é o segredo mais poderoso da narrativa, Pipa: o narrador. Se ele participa da história, fala 'eu'. Se observa de fora, fala 'ele'. E há ainda os dois jeitos de mostrar a fala dos personagens. Vamos destravar esse baú.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Duas versões do mesmo começo saíram do baú. O que mudou entre elas?",
    bloco: {
      titulo: "O baú das duas versões",
      capaImagemUrl: bau,
      pistas: [
        { imagemUrl: menina, nome: "Clara, a personagem" },
        { imagemUrl: ponte, nome: "A ponte velha do rio" },
      ],
      recado: {
        rotulo: "Manuscrito do baú",
        icone: "📜",
        linhas: [
          "Versão A: 'Eu atravessei a ponte com o coração acelerado.'",
          "Versão B: 'Clara atravessou a ponte com o coração acelerado.'",
        ],
        estilo: "papel",
      },
      pergunta: "Qual é a diferença entre as duas versões?",
      hipoteses: [
        { texto: "Quem conta: na A o narrador é personagem; na B, observa de fora" },
        { texto: "A ponte é diferente em cada versão" },
        { texto: "Uma tem mais adjetivos que a outra" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "📜 Isso! Mudou o narrador. Na A ele vive a cena; na B ele observa e conta.",
      feedbackErro: "Olhe as primeiras palavras: 'Eu atravessei' e 'Clara atravessou'.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três chaves abrem o baú das narrativas longas.",
    cards: [
      {
        palavra: "narrador em 1ª pessoa",
        explicacao:
          "Conta a história por dentro, participando dela. Usa eu, meu, nós. Só sabe o que ele mesmo viveu.",
        exemplo: "'Eu atravessei a ponte sem saber o que me esperava do outro lado.'",
        imagemUrl: menina,
      },
      {
        palavra: "narrador em 3ª pessoa",
        explicacao:
          "Conta de fora, observando os personagens. Usa ele, ela, eles. Pode saber até os pensamentos de todos.",
        exemplo: "'Clara atravessou a ponte sem saber o que a esperava.'",
        imagemUrl: ponte,
      },
      {
        palavra: "discurso direto × indireto",
        explicacao:
          "Direto: a fala aparece exatamente como foi dita, com travessão ou aspas. Indireto: o narrador resume a fala com 'que'.",
        exemplo: "Direto: — Não vá! Indireto: Ele disse que ela não fosse.",
        imagemUrl: relogio,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia observando o travessão (fala direta) e as frases com 'que' (fala indireta).",
    leitura: {
      titulo: "A ponte de meia-noite",
      imagemUrl: ponte,
      legendaImagem: "A ponte velha sobre o rio",
      destacar: ["Clara", "— Não atravesse", "avisou que", "por isso"],
      paragrafos: [
        "Clara guardou o relógio no bolso e caminhou até a beira do rio. A ponte velha rangia com o vento, e as tábuas do meio estavam soltas desde a última enchente.",
        "— Não atravesse hoje — disse o barqueiro, segurando o remo. — A correnteza subiu.",
        "O barqueiro avisou que o nível da água havia subido três palmos durante a madrugada. Clara ouviu com atenção, mas o relógio no bolso marcava quase meia-noite, e ela precisava entregar a carta antes que o sino tocasse.",
        "Por isso, ela escolheu o caminho mais longo, pela trilha das pedras. Chegou atrasada, com os sapatos encharcados — porém chegou. E a carta, felizmente, continuava seca.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto e confirme cada resposta.",
    perguntas: [
      {
        pergunta: "O narrador dessa história é…",
        opcoes: [
          "de 3ª pessoa, pois observa Clara de fora",
          "de 1ª pessoa, pois é a própria Clara",
          "o barqueiro contando o que viu",
        ],
        correta: 0,
        feedbackAcerto: "📜 Exato: o texto diz 'Clara guardou', 'ela escolheu'. Narrador observador.",
        feedbackErro: "Procure se o texto usa 'eu' ou nomes na terceira pessoa.",
        ondeEstaNoTexto: "Clara guardou o relógio no bolso e caminhou até a beira do rio.",
      },
      {
        pergunta: "Qual trecho está em DISCURSO DIRETO?",
        opcoes: [
          "— Não atravesse hoje — disse o barqueiro.",
          "O barqueiro avisou que o nível da água havia subido.",
          "Clara ouviu com atenção.",
        ],
        correta: 0,
        feedbackAcerto: "📜 O travessão é a marca da fala reproduzida exatamente.",
        feedbackErro: "Procure a linha que começa com travessão.",
        ondeEstaNoTexto: "— Não atravesse hoje — disse o barqueiro, segurando o remo.",
      },
      {
        pergunta: "Por que Clara escolheu a trilha das pedras?",
        opcoes: [
          "Porque o barqueiro avisou do perigo e ela precisava entregar a carta a tempo",
          "Porque queria molhar os sapatos",
          "Porque a ponte tinha desabado",
        ],
        correta: 0,
        feedbackAcerto: "📜 Você seguiu o fio causal: aviso → decisão → consequência.",
        feedbackErro: "Ligue o aviso do barqueiro ao 'Por isso' do último parágrafo.",
        ondeEstaNoTexto: "Por isso, ela escolheu o caminho mais longo, pela trilha das pedras.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Transforme e reconheça os tipos de discurso.",
    perguntas: [
      {
        pergunta: "Como fica em discurso INDIRETO a fala '— Estou com medo — disse Clara'?",
        opcoes: [
          "Clara disse que estava com medo.",
          "— Clara está com medo.",
          "'Estou com medo', Clara.",
        ],
        correta: 0,
        feedbackAcerto: "📜 Perfeito: o narrador resume a fala usando 'que' e o verbo muda de tempo.",
        feedbackErro: "No indireto some o travessão e aparece a palavra 'que'.",
      },
      {
        pergunta: "Qual frase indica narrador em 1ª pessoa?",
        opcoes: [
          "Naquela noite, eu não consegui dormir.",
          "Naquela noite, Clara não conseguiu dormir.",
          "A noite estava fria e silenciosa.",
        ],
        correta: 0,
        feedbackAcerto: "📜 O 'eu' revela que quem conta participa da história.",
        feedbackErro: "Procure o pronome que mostra o narrador dentro da cena.",
      },
      {
        pergunta: "O que o narrador de 1ª pessoa NÃO pode fazer?",
        opcoes: [
          "Saber com certeza o que outro personagem está pensando",
          "Descrever o que vê",
          "Contar o que sente",
        ],
        correta: 0,
        feedbackAcerto: "📜 Ele só tem acesso à própria mente — essa é a limitação e a graça dele.",
        feedbackErro: "Pense: você consegue ler o pensamento de outra pessoa na vida real?",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Reconstrua o enredo da ponte na ordem causal.",
    bloco: {
      instrucao: "Arraste os acontecimentos para a ordem correta.",
      itens: [
        { id: "e1", texto: "Clara caminha até o rio com a carta e o relógio" },
        { id: "e2", texto: "O barqueiro avisa que a correnteza subiu" },
        { id: "e3", texto: "Clara decide seguir pela trilha das pedras" },
        { id: "e4", texto: "Ela chega atrasada, encharcada, mas com a carta seca" },
      ],
      ordemCerta: ["e1", "e2", "e3", "e4"],
      feedbackAcerto: "📜 Esse é o fio da narrativa: cada fato puxa o próximo.",
      feedbackErro: "Pergunte-se: o que causou o quê? A decisão vem depois do aviso.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho o trecho reescrito em 1ª pessoa e compare com o original.",
    leitura: {
      titulo: "A mesma noite, outro narrador",
      imagemUrl: noite,
      destacar: ["Eu guardei", "senti"],
      paragrafos: [
        "Eu guardei o relógio no bolso e caminhei até a beira do rio. Quando o barqueiro me avisou da correnteza, senti um frio na barriga: faltavam poucos minutos para a meia-noite e a carta precisava chegar.",
        "Escolhi a trilha das pedras. Cheguei atrasada, encharcada — mas cheguei. E, para meu alívio, a carta continuava seca.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que essa versão em 1ª pessoa oferece que a outra não oferecia?",
        opcoes: [
          "O acesso direto às sensações e ao medo de quem viveu a cena",
          "Mais informações sobre o barqueiro",
          "Uma descrição melhor da ponte",
        ],
        correta: 0,
        feedbackAcerto: "📜 A 1ª pessoa aproxima o leitor da emoção do narrador.",
        feedbackErro: "Repare em 'senti um frio na barriga' e 'para meu alívio'.",
        ondeEstaNoTexto: "senti um frio na barriga: faltavam poucos minutos para a meia-noite",
      },
    ],
  },

  momento_minijogo: {
    titulo: "A Máquina de Trocar Narrador",
    instrucao: "Marque apenas as frases escritas em 3ª PESSOA para alimentar a máquina.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "A Máquina de Trocar Narrador",
      bloco: {
        instrucao: "Toque nas frases em que o narrador observa de fora.",
        pergunta: "Quais frases têm narrador em 3ª pessoa?",
        opcoes: [
          { id: "n1", texto: "Clara atravessou a trilha das pedras.", correto: true },
          { id: "n2", texto: "Eu não consegui dormir naquela noite.", correto: false },
          { id: "n3", texto: "O barqueiro guardou o remo e voltou para casa.", correto: true },
          { id: "n4", texto: "Senti o vento gelado no rosto.", correto: false },
          { id: "n5", texto: "Eles esperaram o sino tocar.", correto: true },
        ],
        feedbackAcerto: "📜 Máquina calibrada! Você distinguiu quem conta de dentro e quem conta de fora.",
        feedbackErro: "Procure os pronomes: eu e me indicam 1ª pessoa; ele, ela e eles indicam 3ª.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Narrador em 1ª pessoa participa da história e usa 'eu'.",
      "Narrador em 3ª pessoa observa de fora e usa 'ele/ela'.",
      "Discurso direto reproduz a fala com travessão ou aspas.",
      "Discurso indireto resume a fala com 'que'.",
      "O enredo se sustenta pelo encadeamento causal: um fato provoca o outro.",
    ],
    miniDesafio: {
      pergunta: "Em '— Espere! — gritou o menino', temos…",
      opcoes: ["discurso direto", "discurso indireto", "narração pura"],
      correta: 0,
      feedbackAcerto: "📜 O travessão entrega: é fala reproduzida.",
      feedbackErro: "Procure a marca gráfica no começo da frase.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "A frase 'Eu abri a porta devagar' indica narrador em…",
        opcoes: ["1ª pessoa", "3ª pessoa", "nenhuma das duas"],
        correta: 0,
        feedbackAcerto: "📜 Excelente! Você recebeu a Pena do Contador de Histórias.",
        feedbackErro: "Olhe o pronome que abre a frase.",
      },
      {
        pergunta: "Qual é a versão em discurso indireto de '— Vou embora — disse Ana'?",
        opcoes: [
          "Ana disse que ia embora.",
          "— Ana vai embora.",
          "'Vou embora!' Ana.",
        ],
        correta: 0,
        feedbackAcerto: "📜 O narrador assumiu a fala e usou 'que'.",
        feedbackErro: "No indireto não há travessão, e o verbo muda de tempo.",
      },
      {
        pergunta: "O narrador de 3ª pessoa que conhece os pensamentos de todos é chamado de…",
        opcoes: ["onisciente", "personagem", "testemunha"],
        correta: 0,
        feedbackAcerto: "📜 Onisciente = aquele que sabe tudo.",
        feedbackErro: "A palavra vem de 'oni' (tudo) + 'ciente' (que sabe).",
      },
      {
        pergunta: "Qual elemento garante o encadeamento causal do enredo?",
        opcoes: [
          "Cada acontecimento ser consequência do anterior",
          "O texto ser muito longo",
          "Haver muitos personagens",
        ],
        correta: 0,
        feedbackAcerto: "📜 Isso: aviso → decisão → consequência.",
        feedbackErro: "Pense na história de Clara: o que provocou a mudança de caminho?",
      },
      {
        pergunta: "Ao reescrever uma história de 3ª para 1ª pessoa, o que muda?",
        opcoes: [
          "Os pronomes e o acesso aos pensamentos: só o narrador pode ser conhecido por dentro",
          "O cenário da história",
          "A quantidade de personagens",
        ],
        correta: 0,
        feedbackAcerto: "📜 Perfeito! Você domina a troca de ponto de vista.",
        feedbackErro: "Compare as duas versões da ponte: o que exatamente mudou?",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A História do Baú da Família",
    materiais: ["Papel e lápis", "Uma lembrança contada por um adulto"],
    passos: [
      "Peça a um adulto que conte uma história real da infância dele.",
      "Escreva um parágrafo dessa história em 3ª pessoa.",
      "Reescreva o mesmo parágrafo em 1ª pessoa, como se fosse ele falando.",
      "Inclua uma fala em discurso direto, com travessão.",
    ],
    registro: "Traga os dois parágrafos e mostre onde está a fala em discurso direto.",
  },

  recompensa: {
    xp: 120,
    moedas: 40,
    medalha: "📜 Pena do Contador de Histórias",
  },
};
