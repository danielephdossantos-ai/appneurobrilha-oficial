import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 2 — Poema e Linguagem Figurada
 * BNCC: EF15LP19, EF35LP27, EF05LP26
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-poema-e-linguagem-figurada",
  titulo: "Poema e Linguagem Figurada",
  iconeTrilha: "🖋️",
  bncc: ["EF15LP19", "EF35LP27", "EF05LP26"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Palavras que dizem mais do que parecem",
    historia:
      "Um poema raramente diz as coisas do jeito 'normal'. Quando alguém escreve 'meu coração é um tambor', não está afirmando que tem um instrumento dentro do peito — está usando linguagem figurada para criar uma imagem forte. Hoje você vai investigar como os poetas usam metáforas, comparações e ritmo para produzir sentido e emoção com poucas palavras.",
  },

  momento02_previsao: {
    instrucao: "Leia o verso abaixo e pense no que ele sugere antes de continuarmos.",
    bloco: {
      titulo: "Um verso, várias imagens",
      recado: {
        rotulo: "Verso solto",
        icone: "✒️",
        linhas: ["\"A cidade acordou com os olhos de vidro.\""],
        estilo: "papel",
      },
      pergunta: "O que 'olhos de vidro' sugere sobre a cidade nesse verso?",
      hipoteses: [
        { texto: "Que os moradores literalmente têm olhos feitos de vidro" },
        { texto: "Que as janelas dos prédios brilham como olhos ao amanhecer" },
        { texto: "Que a cidade não tem nenhum morador" },
      ],
      respostaCerta: 1,
      feedbackAcerto:
        "🔎 Isso! 'Olhos de vidro' é uma metáfora: compara as janelas que refletem a luz da manhã com olhos brilhantes, sem usar 'como'.",
      feedbackErro:
        "Pense em imagens comuns de manhã numa cidade: janelas refletindo o sol parecem olhos brilhando — essa é a imagem que o verso sugere.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Ferramentas que todo poeta (e todo investigador de poemas) usa.",
    cards: [
      {
        palavra: "metáfora",
        explicacao:
          "Compara duas coisas diferentes sem usar 'como', afirmando que uma é a outra, para criar uma imagem forte.",
        exemplo: "'Meu coração é um tambor' — o coração não é literalmente um tambor, mas bate forte como um.",
      },
      {
        palavra: "comparação (símile)",
        explicacao:
          "Também aproxima duas coisas diferentes, mas usando palavras como 'como', 'tal qual' ou 'semelhante a'.",
        exemplo: "'Seus olhos brilham como estrelas' usa 'como' para comparar.",
      },
      {
        palavra: "ritmo poético",
        explicacao:
          "É o efeito sonoro criado pela repetição de sons, pausas e acentos ao longo dos versos, que dá musicalidade ao poema.",
        exemplo: "Repetir sons parecidos no final dos versos (rima) é uma forma comum de criar ritmo.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o poema em voz alta (mentalmente) prestando atenção ao ritmo e às imagens criadas.",
    leitura: {
      titulo: "Retrato de um Dia de Chuva",
      destacar: ["o céu é um cobertor cinza", "as ruas viram espelhos", "o vento sussurra segredos"],
      paragrafos: [
        "O céu é um cobertor cinza\nque cobre a cidade sem pedir licença.\nGotas tocam o telhado\ncomo dedos apressados num tambor.",
        "As ruas viram espelhos\nonde carros e guarda-chuvas se multiplicam.\nO vento sussurra segredos\nque só as árvores conseguem escutar.",
        "E eu, na janela, observo\nesse mundo dobrado em cinza e prata,\ntentando adivinhar\nse a chuva também guarda alguma saudade.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte aos versos sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "'O céu é um cobertor cinza' é um exemplo de:",
        opcoes: ["Comparação com 'como'", "Metáfora", "Discurso direto"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! O verso afirma que o céu É um cobertor, sem usar 'como' — é uma metáfora.",
        feedbackErro: "Note que não há a palavra 'como' ligando as duas ideias — o céu é diretamente chamado de cobertor.",
        ondeEstaNoTexto: "O céu é um cobertor cinza",
      },
      {
        pergunta: "No verso 'gotas tocam o telhado como dedos apressados num tambor', qual figura de linguagem aparece?",
        opcoes: ["Metáfora", "Comparação (símile)", "Nenhuma"],
        correta: 1,
        feedbackAcerto: "🔎 Exato! O uso da palavra 'como' liga as gotas de chuva aos dedos tocando tambor — é uma comparação.",
        feedbackErro: "Procure a palavra que liga as duas imagens: 'como' indica uma comparação, não uma metáfora.",
        ondeEstaNoTexto: "como dedos apressados num tambor",
      },
      {
        pergunta: "Qual sentimento o poema sugere na última estrofe?",
        opcoes: ["Alegria explosiva", "Uma saudade contemplativa e calma", "Raiva da chuva"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! O eu-lírico observa a chuva e pergunta se ela 'guarda alguma saudade' — um tom calmo e reflexivo.",
        feedbackErro: "Releia a última estrofe: o narrador está na janela, observando e refletindo, não demonstrando raiva ou euforia.",
        ondeEstaNoTexto: "tentando adivinhar\nse a chuva também guarda alguma saudade.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora investigue como as imagens do poema constroem sentido além do significado literal.",
    perguntas: [
      {
        pergunta: "Por que dizer 'as ruas viram espelhos' é mais forte do que dizer 'as ruas ficaram molhadas e refletem coisas'?",
        opcoes: [
          "Porque é mais curto",
          "Porque a metáfora cria uma imagem visual imediata e surpreendente, em vez de só descrever o fato",
          "Porque não muda nada no sentido",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Isso mesmo! A linguagem figurada condensa uma explicação longa numa imagem poderosa, que o leitor visualiza rapidamente.",
        feedbackErro:
          "Pense no efeito: 'espelhos' faz o leitor imaginar reflexos brilhantes na rua, algo que a frase literal não provoca da mesma forma.",
      },
      {
        pergunta: "O que dá ritmo ao poema, além do sentido das palavras?",
        opcoes: [
          "Apenas o tamanho das frases",
          "A divisão em versos, as pausas e sons que se repetem ao longo das estrofes",
          "O poema não tem ritmo nenhum",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! O corte dos versos e a repetição de sons (como em 'cinza'/'prata') criam musicalidade mesmo sem rima perfeita.",
        feedbackErro: "Observe como o poema é dividido em linhas curtas — essa quebra cria pausas que dão ritmo, independente da rima.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para interpretar uma imagem poética, do mais simples ao mais profundo.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Ler o verso e identificar o sentido literal das palavras." },
        { id: "p2", texto: "Perceber se há metáfora ou comparação ligando duas ideias diferentes." },
        { id: "p3", texto: "Imaginar a cena ou sentimento que essa figura de linguagem sugere." },
        { id: "p4", texto: "Relacionar essa imagem com o sentimento geral do poema." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔎 Perfeito! Essa é a rota de leitura poética: literal → figura → imagem → sentimento geral.",
      feedbackErro: "Pense em camadas: primeiro o sentido literal, depois a figura de linguagem, depois a imagem que ela cria.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo poema! Leia sozinho e identifique as figuras de linguagem escondidas.",
    leitura: {
      titulo: "Manual de Instruções para Ser Árvore",
      destacar: ["seus braços são galhos pacientes", "suas raízes bebem segredos da terra", "o vento é seu único visitante"],
      paragrafos: [
        "Seus braços são galhos pacientes,\nesperando o pouso de um passarinho qualquer.\nSuas raízes bebem segredos da terra\ne guardam histórias que ninguém mais ouve.",
        "O vento é seu único visitante\nque conversa sem nunca ficar,\ntrazendo notícias de lugares distantes\nque a árvore nunca vai visitar.",
      ],
    },
    perguntas: [
      {
        pergunta: "'Seus braços são galhos pacientes' é um exemplo de:",
        opcoes: ["Metáfora", "Comparação com 'como'", "Discurso indireto"],
        correta: 0,
        feedbackAcerto: "🔎 Isso! Os braços SÃO chamados de galhos, sem 'como' — é metáfora.",
        feedbackErro: "Observe que não há 'como' entre 'braços' e 'galhos' — a ligação é direta, típica de metáfora.",
        ondeEstaNoTexto: "Seus braços são galhos pacientes",
      },
      {
        pergunta: "'O vento é seu único visitante' sugere que a árvore:",
        opcoes: [
          "Recebe muitas visitas de pessoas",
          "Vive de forma solitária, e o vento é a única companhia que ela tem",
          "Não tem nenhuma característica especial",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! A metáfora do vento como 'visitante' reforça a solidão e a imobilidade da árvore.",
        feedbackErro: "Pense no que significa ter 'um único visitante': o poema sugere solidão, já que só o vento chega até ela.",
        ondeEstaNoTexto: "O vento é seu único visitante que conversa sem nunca ficar",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "METÁFORA compara duas coisas diferentes afirmando que uma É a outra, sem usar 'como'.",
      "COMPARAÇÃO (símile) une duas ideias usando conectivos como 'como', 'tal qual'.",
      "O RITMO poético vem da divisão em versos, pausas e repetição de sons.",
      "A linguagem figurada cria imagens fortes e condensa sentimentos que a linguagem literal não conseguiria expressar tão bem.",
    ],
    miniDesafio: {
      pergunta: "'Seus olhos brilham como estrelas' é um exemplo de:",
      opcoes: ["Metáfora", "Comparação (símile)", "Discurso direto"],
      correta: 1,
      feedbackAcerto: "🔎 Isso! A palavra 'como' revela que se trata de uma comparação.",
      feedbackErro: "A presença de 'como' indica comparação, não metáfora — na metáfora não haveria esse conectivo.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que caracteriza uma metáfora?",
        opcoes: [
          "Usar a palavra 'como' para ligar duas ideias",
          "Afirmar que uma coisa É outra, sem usar conectivo comparativo",
          "Descrever algo de forma totalmente literal",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! A metáfora funde as duas ideias diretamente, sem 'como'.",
        feedbackErro: "A metáfora não usa 'como' — ela afirma diretamente que uma coisa é a outra.",
      },
      {
        pergunta: "2/5 — 'A cidade acordou com os olhos de vidro' sugere que:",
        opcoes: [
          "As janelas refletiam a luz da manhã como olhos brilhantes",
          "Os moradores tinham olhos de vidro de verdade",
          "A cidade estava destruída",
        ],
        correta: 0,
        feedbackAcerto: "🔎 Correto! É a imagem das janelas brilhando ao amanhecer, comparadas a olhos.",
        feedbackErro: "Pense na imagem visual: janelas refletindo luz se parecem com olhos brilhando.",
      },
      {
        pergunta: "3/5 — O que dá ritmo a um poema?",
        opcoes: [
          "Apenas o tamanho do texto",
          "A divisão em versos, pausas e repetição de sons",
          "O poema nunca tem ritmo",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! Versos, pausas e sons repetidos criam a musicalidade do poema.",
        feedbackErro: "Ritmo vem da forma como o poema é dividido e dos sons que se repetem, não do tamanho do texto.",
      },
      {
        pergunta: "4/5 — 'O vento é seu único visitante' é um exemplo de:",
        opcoes: ["Comparação com 'como'", "Metáfora", "Discurso direto"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! O vento É chamado de visitante diretamente — metáfora.",
        feedbackErro: "Não há 'como' unindo as ideias — a ligação direta indica metáfora.",
      },
      {
        pergunta: "5/5 — Por que os poetas usam linguagem figurada?",
        opcoes: [
          "Para deixar o texto mais difícil de entender sem motivo",
          "Para criar imagens fortes e expressar sentimentos de forma mais intensa que a linguagem literal",
          "Porque é obrigatório em todo poema",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Você concluiu a investigação dos poemas com sucesso! 🌟",
        feedbackErro: "A linguagem figurada intensifica sentidos e emoções, indo além do que a linguagem literal conseguiria expressar.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caçando metáforas em casa",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Olhem juntos pela janela ou para um objeto qualquer da casa.",
      "2) A criança cria uma metáfora sobre esse objeto (ex.: 'a geladeira é um iceberg na cozinha').",
      "3) Depois, cria uma comparação usando 'como' sobre o mesmo objeto.",
      "4) Conversem: qual das duas frases criou uma imagem mais forte?",
    ],
    registro: "🗣️ Registrem as duas frases criadas e a conversa sobre qual imagem foi mais forte.",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
  },
};
