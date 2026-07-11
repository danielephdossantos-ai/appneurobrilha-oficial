import type { AulaPortuguesV4 } from "../../types";
import album from "@/assets/neuro-treino/objetos/album.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import familiaTrad from "@/assets/neuro-treino/objetos/familia-tradicional.png";
import familiaGrande from "@/assets/neuro-treino/objetos/familia-grande.png";
import familiaAvosNeta from "@/assets/neuro-treino/objetos/familia-avos-neta.png";
import familiaMae from "@/assets/neuro-treino/objetos/familia-mae-filho.png";
import familiaPai from "@/assets/neuro-treino/objetos/familia-pai-filho.png";
import avoHomem from "@/assets/neuro-treino/objetos/avo-homem.png";
import avoMulher from "@/assets/neuro-treino/objetos/avo-mulher.png";
import bebe from "@/assets/neuro-treino/objetos/bebe.png";
import crianca from "@/assets/neuro-treino/objetos/crianca-andando.png";
import bolo from "@/assets/neuro-treino/objetos/bolo.png";
import tablet from "@/assets/neuro-treino/objetos/tablet.png";
import radioAntigo from "@/assets/neuro-treino/objetos/radio-antigo.png";
import telefoneAntigo from "@/assets/neuro-treino/objetos/telefone-antigo.png";
import relogio from "@/assets/neuro-treino/objetos/relogio-magico.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import caixa from "@/assets/neuro-treino/objetos/caixa.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";

/**
 * História · 2º Ano · Unidade 2 · Aula 01
 * "Minha História e Minha Família" — Árvore Genealógica.
 * Recupera a 2ª engrenagem (Prata) e monta a Sala 2 do Museu.
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-minha-historia-e-familia",
  titulo: "Minha História e Minha Família",
  iconeTrilha: "👨‍👩‍👧",
  bncc: ["EF02HI03", "EF02HI04"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A caixa de sapatos da vovó",
    historia:
      "Brilha achou uma caixa de sapatos cheia de fotos AMARELADAS na casa da avó. Tinha uma foto de um menino igualzinho a ele — só que a foto era velha. A avó riu: 'Brilha, esse aí sou EU quando era criança!' Vamos investigar a história da família e recuperar a 2ª engrenagem?",
    imagemUrl: caixa,
  },

  momento02_previsao: {
    instrucao: "Aurora deixou o cartaz da Sala 2 do Museu. Leia e imagine.",
    bloco: {
      titulo: "Missão da Árvore Genealógica",
      capaImagemUrl: arvore,
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO 2",
          "",
          "Monte a ÁRVORE",
          "da sua família.",
          "Descubra as GERAÇÕES.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: avoHomem, nome: "Vovô" },
        { imagemUrl: avoMulher, nome: "Vovó" },
        { imagemUrl: familiaTrad, nome: "Pais" },
        { imagemUrl: crianca, nome: "Você" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        { texto: "Sobre a FAMÍLIA e as gerações que vieram antes.", imagemUrl: familiaGrande },
        { texto: "Sobre estrelas do céu.", imagemUrl: estrela },
        { texto: "Sobre receitas antigas — só isso.", imagemUrl: bolo },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! As pistas mostram gerações da família.",
      feedbackErro: "Olhe as pistas: vovô, vovó, pais, você. É sobre a FAMÍLIA!",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras do Investigador da Família.",
    cards: [
      {
        palavra: "geração",
        explicacao: "Um grupo de pessoas que nasceu perto no tempo. Vovó, mãe e você = 3 gerações.",
        exemplo: "Meus avós são de outra GERAÇÃO.",
        imagemUrl: familiaAvosNeta,
      },
      {
        palavra: "genealógica",
        explicacao: "Palavra difícil, quer dizer 'da família'. A árvore GENEALÓGICA mostra os parentes.",
        exemplo: "Fiz minha árvore GENEALÓGICA na escola.",
        imagemUrl: arvore,
      },
      {
        palavra: "tradição",
        explicacao: "Costume que passa de pais pra filhos — receita, festa, música.",
        exemplo: "Fazer bolo de fubá é TRADIÇÃO da minha família.",
        imagemUrl: bolo,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai ler. Preste atenção nas palavras em amarelo.",
    leitura: {
      titulo: "A árvore da família",
      imagemUrl: arvore,
      legendaImagem: "Uma árvore genealógica com raízes fortes.",
      destacar: ["família", "geração", "genealógica", "tradição", "avós"],
      paragrafos: [
        "A sua história não começou hoje. Você faz parte de uma grande árvore genealógica cheia de galhos.",
        "Cada galho é uma geração: seus avós e bisavós na raiz, seus pais e tios no meio, e você e seus irmãos na pontinha.",
        "Cada família guarda tradições: festas, comidas ou histórias que passam dos avós pros netos, e do jeito mais antigo pro mais novo.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "Como se chama a árvore que mostra os parentes da família?",
        opcoes: ["Árvore frutífera", "Árvore genealógica", "Árvore do tesouro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Genealógica = da família.",
        feedbackErro: "Está no primeiro parágrafo: 'árvore GENEALÓGICA'.",
        ondeEstaNoTexto: "…grande árvore genealógica cheia de galhos.",
      },
      {
        pergunta: "Onde ficam os AVÓS na árvore genealógica?",
        opcoes: ["Na pontinha dos galhos", "Na raiz", "Não aparecem"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Os avós ficam na RAIZ.",
        feedbackErro: "Segundo parágrafo: 'seus avós e bisavós na RAIZ'.",
        ondeEstaNoTexto: "…seus avós e bisavós na raiz…",
      },
      {
        pergunta: "O que é uma TRADIÇÃO?",
        opcoes: [
          "Uma comida do McDonald's",
          "Um costume que passa de pais pra filhos",
          "Uma brincadeira nova",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Costume que passa entre gerações.",
        feedbackErro: "Último parágrafo: 'festas, comidas ou histórias que passam…'",
        ondeEstaNoTexto: "…tradições: festas, comidas ou histórias que passam dos avós pros netos.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos colocar cada pessoa no galho certo da árvore.",
    perguntas: [
      {
        pergunta: "Quem fica na RAIZ (galho mais antigo) da árvore?",
        opcoes: ["Você", "Papai e Mamãe", "Vovô e Vovó"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! Vovô e Vovó — os mais antigos.",
        feedbackErro: "Os mais antigos ficam na RAIZ: vovô e vovó.",
      },
      {
        pergunta: "Quem fica no GALHO DO MEIO?",
        opcoes: ["Bisavós", "Papai, Mamãe e Tios", "Só você"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Pais e tios no meio.",
        feedbackErro: "Papai, Mamãe e Tios vêm no meio.",
      },
      {
        pergunta: "Quem fica na PONTA (galho mais novo)?",
        opcoes: ["Você e seus irmãos", "Vovô", "Bisavós"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Você e seus irmãos.",
        feedbackErro: "A ponta é dos MAIS NOVOS — você e seus irmãos.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloque as gerações em ordem — da mais ANTIGA pra mais NOVA.",
    bloco: {
      instrucao: "Antigo → Meio → Novo.",
      itens: [
        { id: "s1", texto: "Vovô e Vovó (mais antigos)", imagemUrl: avoHomem },
        { id: "s2", texto: "Papai e Mamãe", imagemUrl: familiaTrad },
        { id: "s3", texto: "Você (mais novo)", imagemUrl: crianca },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🎉 Perfeito! Avós → Pais → Você.",
      feedbackErro: "Do mais antigo (avós) pro mais novo (você).",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda.",
    leitura: {
      titulo: "A certidão amarelada",
      imagemUrl: livro,
      destacar: ["certidão", "nascimento", "escrivão", "carimbo"],
      paragrafos: [
        "A CERTIDÃO DE NASCIMENTO é o documento que prova quando e onde você nasceu, e quem são seus pais e avós.",
        "Uma certidão antiga tem papel amarelado, carimbo de tinta e letra desenhada à mão pelo escrivão da época. É uma fonte histórica da família.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que a certidão de nascimento PROVA?",
        opcoes: [
          "Quem são seus pais e avós",
          "Qual sua comida favorita",
          "Quanto você mede",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ela prova quem são os pais e avós.",
        feedbackErro: "Primeiro parágrafo: 'quem são seus pais e avós'.",
        ondeEstaNoTexto: "…quem são seus pais e avós.",
      },
      {
        pergunta: "O que faz uma certidão parecer ANTIGA?",
        opcoes: [
          "Ser digital",
          "Papel amarelado, carimbo e letra à mão",
          "Ter figurinhas",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Papel amarelado + carimbo + letra à mão.",
        feedbackErro: "Segundo parágrafo — as pistas do papel antigo.",
        ondeEstaNoTexto: "…papel amarelado, carimbo de tinta e letra desenhada à mão…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🧳 O Achado na Mala Velha",
    instrucao:
      "O vovô abriu a mala antiga. Escolha o objeto que conta HISTÓRIA da família — o intruso moderno não vale!",
    jogo: {
      tipo: "arquitetoLugar",
      titulo: "Achado na Mala",
      bloco: {
        instrucao: "Toque no objeto que é do passado da família.",
        rodadas: [
          {
            id: "r1",
            cenario: {
              nome: "Rodada 1",
              emojiLugar: "🧳",
              emojiMorador: "👴",
              pista: "Qual desses objetos conta a história antiga da família?",
            },
            opcoes: [
              { id: "album", nome: "Álbum de fotos antigas", imagemUrl: album },
              { id: "tablet", nome: "Tablet moderno", imagemUrl: tablet },
              { id: "estrela", nome: "Estrela brilhante", imagemUrl: estrela },
            ],
            correta: "album",
            feedbackAcerto: "🎉 O álbum guarda a memória da família!",
            feedbackErro: "O tablet é atual. O ÁLBUM é do passado.",
          },
          {
            id: "r2",
            cenario: {
              nome: "Rodada 2",
              emojiLugar: "🧳",
              emojiMorador: "👵",
              pista: "Qual desses é um objeto antigo que a vovó usava?",
            },
            opcoes: [
              { id: "radio", nome: "Rádio antigo", imagemUrl: radioAntigo },
              { id: "tablet", nome: "Tablet", imagemUrl: tablet },
              { id: "bolo", nome: "Bolo", imagemUrl: bolo },
            ],
            correta: "radio",
            feedbackAcerto: "🎉 O rádio antigo trazia notícias e músicas!",
            feedbackErro: "Tablet é novo, bolo não é objeto. É o RÁDIO ANTIGO.",
          },
          {
            id: "r3",
            cenario: {
              nome: "Rodada 3",
              emojiLugar: "🧳",
              emojiMorador: "👴",
              pista: "Qual desses é um telefone de antigamente?",
            },
            opcoes: [
              { id: "tel", nome: "Telefone antigo com fio", imagemUrl: telefoneAntigo },
              { id: "tablet", nome: "Tablet", imagemUrl: tablet },
              { id: "livro", nome: "Livro atual", imagemUrl: livro },
            ],
            correta: "tel",
            feedbackAcerto: "🎉 Telefone com fio, número de discar — do passado!",
            feedbackErro: "É o TELEFONE ANTIGO com fio.",
          },
        ],
        feedbackFinal: "Você desvendou a mala do vovô! Engrenagem de Prata conquistada.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "ÁRVORE GENEALÓGICA mostra os parentes em galhos.",
      "GERAÇÃO = grupo de pessoas nascidas em época parecida.",
      "Raiz = os mais antigos (avós). Ponta = os mais novos (você).",
      "TRADIÇÃO = costume que passa de pais pra filhos.",
      "Objetos antigos (álbum, rádio, certidão) são FONTES HISTÓRICAS da família.",
    ],
    miniDesafio: {
      pergunta: "Onde estão os avós na árvore genealógica?",
      opcoes: ["Na ponta dos galhos", "Na raiz", "Fora da árvore"],
      correta: 1,
      feedbackAcerto: "🎉 Na RAIZ — os mais antigos!",
      feedbackErro: "Avós = mais antigos = RAIZ.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Como se chama o desenho que organiza os parentes?",
        opcoes: ["Mapa do tesouro", "Árvore genealógica", "Linha do tempo"],
        correta: 1,
        feedbackAcerto: "🎉 Árvore genealógica!",
        feedbackErro: "É a ÁRVORE GENEALÓGICA.",
      },
      {
        pergunta: "2/5 — Uma tradição da família é…",
        opcoes: ["Uma comida do fast-food", "Um costume que passa entre gerações", "Uma regra da escola"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Tradição = costume que passa de pais pra filhos.",
      },
      {
        pergunta: "3/5 — Quem está na RAIZ da árvore?",
        opcoes: ["Você", "Seus pais", "Seus avós e bisavós"],
        correta: 2,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Os mais antigos = RAIZ = avós e bisavós.",
      },
      {
        pergunta: "4/5 — Qual documento prova quem são seus pais?",
        opcoes: ["Certidão de nascimento", "Bilhete escolar", "Cardápio"],
        correta: 0,
        feedbackAcerto: "🎉 A certidão!",
        feedbackErro: "É a CERTIDÃO DE NASCIMENTO.",
      },
      {
        pergunta: "5/5 — Um álbum de fotos amareladas é…",
        opcoes: ["Uma fonte histórica da família", "Um brinquedo novo", "Uma comida"],
        correta: 0,
        feedbackAcerto: "🎉 Fonte histórica! Engrenagem de Prata! 🥈",
        feedbackErro: "É uma FONTE HISTÓRICA — conta a história da família.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🎙️ Entrevista com o Passado",
    materiais: ["Um familiar mais velho", "Papel e lápis (opcional)"],
    passos: [
      "1) Escolha um familiar mais velho (vovô, vovó, tia, tio).",
      "2) Pergunte: 'Qual era sua brincadeira favorita quando tinha a minha idade?'",
      "3) Anote ou grave a resposta.",
      "4) Compare com a sua brincadeira favorita de hoje.",
    ],
    registro:
      "📸 Uma foto do familiar ou um áudio contando a brincadeira antiga.",
  },

  recompensa: {
    xp: 300,
    moedas: 150,
    medalha: "Engrenagem de Prata",
  },
};
