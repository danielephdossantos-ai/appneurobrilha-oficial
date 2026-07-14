import type { AulaPortuguesV4 } from "../../types";
import { url as rio } from "@/assets/neuro-treino/objetos/lago.png.asset.json";
import { url as praia } from "@/assets/neuro-treino/objetos/praia.png.asset.json";
import { url as lixeira } from "@/assets/neuro-treino/objetos/lixeira.png.asset.json";
import { url as lixeiraReciclagem } from "@/assets/neuro-treino/objetos/lixeira-reciclagem.png.asset.json";
import { url as funcionarioLimpeza } from "@/assets/neuro-treino/objetos/funcionario-limpeza.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as planta } from "@/assets/neuro-treino/objetos/planta-pequena.png.asset.json";
import { url as jardim } from "@/assets/neuro-treino/objetos/jardim.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as predio } from "@/assets/neuro-treino/objetos/predio.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as garrafa } from "@/assets/neuro-treino/objetos/garrafa.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";

/**
 * Geografia · 2º Ano · Unidade 5 · Aula 03
 * "Protetor da Natureza" — EF02GE05
 *
 * A criança vira Protetor(a) da Natureza: entende poluição,
 * escolhe atitudes de PRESERVAR e diferencia CUIDAR × DESTRUIR.
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-protetor-da-natureza",
  titulo: "Protetor da Natureza",
  iconeTrilha: "🌿",
  bncc: ["EF02GE05"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O rio pediu socorro",
    historia:
      "Brilha chegou perto do RIO e viu MUITO LIXO na água: garrafas, sacolas, latas. Aurora ficou triste: 'Brilha, alguém MUDOU essa paisagem do jeito ERRADO. Vamos virar PROTETORES da NATUREZA e cuidar dela?'",
    imagemUrl: rio,
  },

  momento02_previsao: {
    instrucao: "Pistas do Protetor. Sobre o que é a missão?",
    bloco: {
      titulo: "Missão: Protetor da Natureza",
      capaImagemUrl: praia,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "🌱",
        estilo: "cartaz",
        linhas: [
          "MISSÃO PROTEGER",
          "",
          "Descubra como CUIDAR",
          "do rio, da praça",
          "e das árvores.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: lixeiraReciclagem, nome: "Lixeira de reciclagem" },
        { imagemUrl: funcionarioLimpeza, nome: "Mutirão de limpeza" },
        { imagemUrl: planta, nome: "Plantar mudas" },
      ],
      pergunta: "Sobre o que essa missão vai ensinar?",
      hipoteses: [
        {
          texto:
            "Como CUIDAR e PROTEGER a natureza no meu município.",
          imagemUrl: jardim,
        },
        { texto: "Como plantar bala em uma planta.", imagemUrl: flor },
        { texto: "Como jogar bola no meio do rio.", imagemUrl: rio },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Vamos aprender a CUIDAR do lugar onde a gente vive.",
      feedbackErro:
        "Olhe as pistas: reciclar, limpar, plantar. A missão fala em CUIDAR da natureza.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras do Protetor.",
    cards: [
      {
        palavra: "poluição",
        explicacao:
          "É quando o rio, o ar, a rua ou a praia ficam SUJOS por causa de LIXO, esgoto ou fumaça. Faz mal pros bichos e pras pessoas.",
        exemplo: "Muito LIXO no rio causa POLUIÇÃO.",
        imagemUrl: garrafa,
      },
      {
        palavra: "preservar",
        explicacao:
          "É CUIDAR pra continuar EXISTINDO. A gente PRESERVA a árvore quando não corta e não machuca.",
        exemplo: "PRESERVAR a floresta protege os bichos.",
        imagemUrl: arvore,
      },
      {
        palavra: "reciclar",
        explicacao:
          "É SEPARAR o lixo (papel, plástico, vidro, metal) pra ele virar coisa NOVA e não sujar a natureza.",
        exemplo: "A LIXEIRA COLORIDA é pra RECICLAR.",
        imagemUrl: lixeiraReciclagem,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você. Preste atenção no que CUIDA.",
    leitura: {
      titulo: "O rio que voltou a sorrir",
      imagemUrl: rio,
      legendaImagem: "Antes cheio de lixo; depois do mutirão, limpo de novo.",
      destacar: [
        "rio",
        "lixo",
        "poluído",
        "mutirão",
        "lixeiras",
        "reciclagem",
        "árvores",
      ],
      paragrafos: [
        "O RIO da cidade estava POLUÍDO. Muita gente jogava GARRAFAS e SACOLAS na água, e os PEIXES sumiram.",
        "Aí a comunidade fez um MUTIRÃO de limpeza. Todo mundo ajudou: crianças, pais, professores, vizinhos.",
        "A prefeitura colocou LIXEIRAS DE RECICLAGEM (papel, plástico, vidro, metal) perto do rio e placas explicando.",
        "Aos poucos o rio ficou LIMPO de novo. As pessoas passaram a CUIDAR, e a NATUREZA agradeceu.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "O que estava DEIXANDO o rio POLUÍDO?",
        opcoes: [
          "Ninguém jogava nada",
          "Garrafas e sacolas na água",
          "Só chuva forte",
        ],
        correta: 1,
        feedbackAcerto: "🎉 GARRAFAS e SACOLAS.",
        feedbackErro:
          "O texto diz: 'Muita gente jogava GARRAFAS e SACOLAS na água'.",
        ondeEstaNoTexto: "…jogava GARRAFAS e SACOLAS na água…",
      },
      {
        pergunta: "O que a comunidade fez pra ajudar?",
        opcoes: [
          "Um mutirão de limpeza",
          "Ficou brava e foi embora",
          "Comprou peixes novos",
        ],
        correta: 0,
        feedbackAcerto: "🎉 MUTIRÃO de limpeza.",
        feedbackErro:
          "O texto diz: 'a comunidade fez um MUTIRÃO de limpeza'.",
        ondeEstaNoTexto: "…MUTIRÃO de limpeza…",
      },
      {
        pergunta: "O que a prefeitura colocou perto do rio?",
        opcoes: [
          "Lixeiras de reciclagem",
          "Prédios altos",
          "Semáforos",
        ],
        correta: 0,
        feedbackAcerto: "🎉 LIXEIRAS DE RECICLAGEM.",
        feedbackErro:
          "O texto diz: 'A prefeitura colocou LIXEIRAS DE RECICLAGEM'.",
        ondeEstaNoTexto: "…LIXEIRAS DE RECICLAGEM…",
      },
      {
        pergunta: "O que aconteceu com o rio depois?",
        opcoes: [
          "Ficou limpo de novo",
          "Sumiu totalmente",
          "Virou um prédio",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Ficou LIMPO de novo.",
        feedbackErro:
          "O texto diz: 'o rio ficou LIMPO de novo'.",
        ondeEstaNoTexto: "…o rio ficou LIMPO de novo…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Cada situação: é CUIDAR ou é DESTRUIR?",
    perguntas: [
      {
        pergunta: "🍼 A criança comeu um doce e jogou o papel na RUA. Isso é...",
        opcoes: ["Cuidar", "Destruir (poluir)", "Não muda nada"],
        opcoesImagens: [lixeiraReciclagem, garrafa, arvore],
        correta: 1,
        feedbackAcerto: "🎉 DESTRUIR.",
        feedbackErro:
          "Jogar lixo na rua é POLUIR — o certo é a LIXEIRA.",
      },
      {
        pergunta: "🌱 A família PLANTOU uma árvore na frente de casa. Isso é...",
        opcoes: ["Destruir", "Cuidar", "Fazer prédio"],
        opcoesImagens: [garrafa, planta, predio],
        correta: 1,
        feedbackAcerto: "🎉 CUIDAR!",
        feedbackErro:
          "Plantar árvore é CUIDAR da natureza.",
      },
      {
        pergunta: "🚿 Deixar a torneira ABERTA MUITO tempo é...",
        opcoes: ["Cuidar da água", "Desperdiçar (destruir)", "Reciclar"],
        opcoesImagens: [rio, garrafa, lixeiraReciclagem],
        correta: 1,
        feedbackAcerto: "🎉 DESPERDIÇAR a água.",
        feedbackErro:
          "Torneira aberta à toa DESPERDIÇA água — a gente precisa CUIDAR.",
      },
      {
        pergunta: "♻️ SEPARAR o plástico do papel na lixeira colorida é...",
        opcoes: ["Reciclar (cuidar)", "Poluir", "Nada"],
        opcoesImagens: [lixeiraReciclagem, garrafa, lixeira],
        correta: 0,
        feedbackAcerto: "🎉 RECICLAR = CUIDAR.",
        feedbackErro:
          "SEPARAR o lixo pra reciclagem é CUIDAR da natureza.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Ordene os passos do MUTIRÃO que limpou o rio (do primeiro → último).",
    bloco: {
      instrucao: "Do primeiro → último passo.",
      itens: [
        { id: "s1", texto: "1) A comunidade se JUNTOU pra ajudar.", imagemUrl: familia },
        { id: "s2", texto: "2) TODOS pegaram sacos e luvas.", imagemUrl: funcionarioLimpeza },
        { id: "s3", texto: "3) RECOLHERAM lixo da beira do rio.", imagemUrl: lixeira },
        { id: "s4", texto: "4) SEPARARAM em lixeiras de reciclagem.", imagemUrl: lixeiraReciclagem },
        { id: "s5", texto: "5) O rio ficou LIMPO, peixes voltaram.", imagemUrl: peixe },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 Perfeito! Comunidade junta → material → coletar → separar → rio limpo.",
      feedbackErro:
        "Pensa: primeiro TODOS se juntam, depois pegam material, RECOLHEM, SEPARAM e por último o rio fica LIMPO.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "A árvore da praça",
      imagemUrl: arvore,
      destacar: ["praça", "árvore", "cuidam", "sombra", "pássaros"],
      paragrafos: [
        "Na PRAÇA perto da casa do Brilha tem uma ÁRVORE grande e antiga. Os moradores CUIDAM dela: molham quando faz muito sol e não deixam ninguém quebrar galhos.",
        "Em troca, a árvore dá SOMBRA fresquinha, os PÁSSAROS fazem ninhos e a praça fica bonita o ano todo.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que os MORADORES fazem pela árvore?",
        opcoes: [
          "Ignoram totalmente",
          "Cuidam, molham e protegem",
          "Cortam com machado",
        ],
        opcoesImagens: [predio, funcionarioLimpeza, garrafa],
        correta: 1,
        feedbackAcerto: "🎉 CUIDAM da árvore.",
        feedbackErro:
          "O texto diz: 'Os moradores CUIDAM dela'.",
        ondeEstaNoTexto: "…Os moradores CUIDAM dela…",
      },
      {
        pergunta: "O que a ÁRVORE dá EM TROCA?",
        opcoes: [
          "Sombra e ninho pros pássaros",
          "Prédios novos",
          "Somente barulho",
        ],
        opcoesImagens: [arvore, predio, cidade],
        correta: 0,
        feedbackAcerto: "🎉 SOMBRA e NINHOS.",
        feedbackErro:
          "O texto diz: 'a árvore dá SOMBRA fresquinha, os PÁSSAROS fazem ninhos'.",
        ondeEstaNoTexto:
          "…dá SOMBRA fresquinha, os PÁSSAROS fazem ninhos…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🌍 Preservar é Preciso",
    instrucao:
      "Cada atitude PRESERVA ou POLUI a natureza? Arraste pra caixa certa.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Preservar é Preciso",
      bloco: {
        instrucao: "Toque na atitude e depois no cartaz certo.",
        alvos: [
          {
            id: "cuidar",
            nome: "🌿 PRESERVAR",
            descricao: "Atitudes que CUIDAM da natureza.",
            imagemUrl: planta,
          },
          {
            id: "destruir",
            nome: "❌ POLUIR",
            descricao: "Atitudes que ESTRAGAM a natureza.",
            imagemUrl: garrafa,
          },
        ],
        itens: [
          { id: "i1", texto: "Jogar lixo no chão", alvoId: "destruir", imagemUrl: garrafa },
          { id: "i2", texto: "Cortar árvore por diversão", alvoId: "destruir", imagemUrl: arvore },
          { id: "i3", texto: "Deixar torneira aberta", alvoId: "destruir", imagemUrl: rio },
          { id: "i4", texto: "Jogar garrafa no rio", alvoId: "destruir", imagemUrl: rio },
          { id: "i5", texto: "Plantar uma muda", alvoId: "cuidar", imagemUrl: planta },
          { id: "i6", texto: "Separar lixo pra reciclagem", alvoId: "cuidar", imagemUrl: lixeiraReciclagem },
          { id: "i7", texto: "Mutirão pra limpar a praça", alvoId: "cuidar", imagemUrl: funcionarioLimpeza },
          { id: "i8", texto: "Fechar a torneira ao escovar", alvoId: "cuidar", imagemUrl: rio },
        ],
        feedbackAcerto:
          "🎉 Protetor da Natureza! Você separou o CUIDAR do DESTRUIR.",
        feedbackErro:
          "Lembra: lixo no chão, cortar árvore, torneira aberta = DESTRUIR. Plantar, reciclar, mutirão, fechar torneira = CUIDAR.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "POLUIÇÃO = sujar a natureza (lixo, esgoto, fumaça).",
      "PRESERVAR = cuidar pra continuar existindo.",
      "RECICLAR = separar o lixo pra virar coisa nova.",
      "MUTIRÃO = todo mundo junto ajudando o mesmo lugar.",
      "A gente PODE transformar a paisagem, mas SEMPRE cuidando dela.",
    ],
    miniDesafio: {
      pergunta:
        "O rio está cheio de lixo. Como o Protetor RESOLVE?",
      opcoes: [
        "Jogar mais sacolas plásticas na água",
        "Fazer mutirão e colocar lixeiras de reciclagem",
        "Ignorar e ir embora",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 MUTIRÃO + LIXEIRAS de reciclagem = rio limpo.",
      feedbackErro:
        "Pra CUIDAR do rio: MUTIRÃO pra limpar e LIXEIRAS de reciclagem por perto.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — POLUIÇÃO é...",
        opcoes: [
          "Cuidar do rio",
          "Sujar a natureza",
          "Plantar árvores",
        ],
        correta: 1,
        feedbackAcerto: "🎉 SUJAR a natureza.",
        feedbackErro: "POLUIÇÃO é SUJAR a natureza.",
      },
      {
        pergunta: "2/5 — RECICLAR é...",
        opcoes: [
          "Jogar tudo junto",
          "Separar o lixo",
          "Queimar o lixo",
        ],
        correta: 1,
        feedbackAcerto: "🎉 SEPARAR o lixo.",
        feedbackErro:
          "RECICLAR é SEPARAR o lixo pra virar coisa nova.",
      },
      {
        pergunta: "3/5 — Jogar papel na RUA é...",
        opcoes: ["Cuidar", "Destruir (poluir)", "Reciclar"],
        correta: 1,
        feedbackAcerto: "🎉 DESTRUIR (poluir).",
        feedbackErro: "Papel na rua = POLUIR.",
      },
      {
        pergunta: "4/5 — MUTIRÃO é...",
        opcoes: [
          "Uma pessoa sozinha",
          "Todo mundo junto ajudando",
          "Um tipo de bicho",
        ],
        correta: 1,
        feedbackAcerto: "🎉 TODO MUNDO junto.",
        feedbackErro:
          "MUTIRÃO é TODA a comunidade JUNTA ajudando.",
      },
      {
        pergunta: "5/5 — PRESERVAR a natureza é...",
        opcoes: [
          "Destruir com pressa",
          "Cuidar pra continuar existindo",
          "Comer o rio",
        ],
        correta: 1,
        feedbackAcerto: "🎉 CUIDAR pra continuar existindo.",
        feedbackErro:
          "PRESERVAR = CUIDAR pra a natureza CONTINUAR existindo.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🌿 Protetor(a) em Casa",
    materiais: ["Um adulto", "Papel colorido"],
    passos: [
      "1) Com um ADULTO, escolha 1 ATITUDE de PROTETOR pra fazer HOJE (fechar a torneira ao escovar, separar o lixo, plantar uma muda, apagar a luz).",
      "2) Faça essa atitude durante o dia.",
      "3) Desenhe você fazendo a atitude escolhida.",
      "4) Escreva embaixo: 'CUIDEI DA NATUREZA'.",
    ],
    registro:
      "📸 Uma foto do seu desenho de PROTETOR em ação.",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
    medalha: "Protetor(a) da Natureza",
  },
};
