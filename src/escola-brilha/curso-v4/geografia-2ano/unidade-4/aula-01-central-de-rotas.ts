import type { AulaPortuguesV4 } from "../../types";
import { url as bicicletaModerna } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as pontoOnibus } from "@/assets/neuro-treino/objetos/ponto-onibus.png.asset.json";
import { url as trem } from "@/assets/neuro-treino/objetos/trem.png.asset.json";
import { url as navio } from "@/assets/neuro-treino/objetos/navio.png.asset.json";
import { url as mapaPercurso } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as campo } from "@/assets/neuro-treino/objetos/campo.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as mercado } from "@/assets/neuro-treino/objetos/mercado.png.asset.json";
import { url as postoSaude } from "@/assets/neuro-treino/objetos/posto-saude.png.asset.json";
import { url as rua } from "@/assets/neuro-treino/objetos/rua.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as tablet } from "@/assets/neuro-treino/objetos/tablet.png.asset.json";

/**
 * Geografia · 2º Ano · Unidade 4 · Aula 01
 * "Central de Rotas: o melhor trajeto" — EF02GE07
 *
 * Brilha vira Guardião das Rotas: descobre que cada TRANSPORTE
 * serve pra um destino diferente do município. Usa exclusivamente
 * os blocos travados do PlayerPortuguesV4.
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-central-de-rotas",
  titulo: "Central de Rotas do Município",
  iconeTrilha: "🚌",
  bncc: ["EF02GE07"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "As rotas estão misturadas!",
    historia:
      "Brilha pegou a bicicleta e o tablet. Aurora chegou: 'Brilha, as pessoas no município precisam se LOCOMOVER, mas os caminhos estão TODOS MISTURADOS! Vamos ser os GUARDIÕES DAS ROTAS e descobrir o melhor TRANSPORTE pra cada trajeto?'",
    imagemUrl: bicicletaModerna,
  },

  momento02_previsao: {
    instrucao:
      "Aurora abriu o mapa da Central de Rotas. Olhe as pistas e escolha.",
    bloco: {
      titulo: "Missão: O Melhor Trajeto",
      capaImagemUrl: mapaPercurso,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DAS ROTAS",
          "",
          "Descubra qual TRANSPORTE",
          "leva a pessoa CERTA",
          "pro LUGAR CERTO.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: pontoOnibus, nome: "Ônibus escolar → escola" },
        { imagemUrl: carro, nome: "Ambulância → hospital" },
        { imagemUrl: navio, nome: "Barco → beira do rio" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre escolher o TRANSPORTE certo pra cada TRAJETO.",
          imagemUrl: mapaPercurso,
        },
        { texto: "Sobre plantar tomate na horta.", imagemUrl: campo },
        { texto: "Sobre pintar uma parede da cidade.", imagemUrl: cidade },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Vamos ligar cada TRANSPORTE ao seu melhor CAMINHO.",
      feedbackErro:
        "Olhe as pistas: ÔNIBUS, AMBULÂNCIA, BARCO. A missão é escolher o TRANSPORTE certo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras da Central de Rotas.",
    cards: [
      {
        palavra: "trajeto",
        explicacao:
          "É o CAMINHO entre um lugar de PARTIDA e um lugar de CHEGADA. De casa até a escola é um TRAJETO.",
        exemplo: "O TRAJETO da minha casa até a escola tem 2 quarteirões.",
        imagemUrl: mapaPercurso,
      },
      {
        palavra: "transporte",
        explicacao:
          "É qualquer coisa que LEVA pessoas ou coisas de um lugar pro outro: a pé, bicicleta, carro, ônibus, barco, avião.",
        exemplo: "O ÔNIBUS é um TRANSPORTE que leva muita gente junto.",
        imagemUrl: pontoOnibus,
      },
      {
        palavra: "rota",
        explicacao:
          "É o CAMINHO PLANEJADO que um transporte faz sempre. O ônibus escolar tem uma ROTA que passa em várias casas.",
        exemplo: "A ROTA do caminhão do lixo passa na minha rua toda terça.",
        imagemUrl: rua,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você. Preste atenção nos TRAJETOS.",
    leitura: {
      titulo: "A Central de Rotas do município",
      imagemUrl: mapaPercurso,
      legendaImagem: "Cada trajeto pede um transporte diferente.",
      destacar: [
        "trajeto",
        "ônibus escolar",
        "ambulância",
        "caminhão",
        "bicicleta",
        "rota",
      ],
      paragrafos: [
        "No município tem MUITOS TRAJETOS. Da CASA até a ESCOLA, do MERCADO até a sua RUA, da FAZENDA até a CIDADE.",
        "Pra cada trajeto existe um TRANSPORTE melhor. O ÔNIBUS ESCOLAR faz a ROTA das crianças até a escola.",
        "A AMBULÂNCIA corre com o doente pro HOSPITAL, o CAMINHÃO leva os alimentos da FAZENDA pro MERCADO.",
        "Pra trajetos CURTOS, dá pra ir a PÉ ou de BICICLETA. Escolher o transporte CERTO ajuda o município a FUNCIONAR!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "Quem leva as crianças até a ESCOLA?",
        opcoes: ["A ambulância", "O ônibus escolar", "O caminhão de carga"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O ÔNIBUS ESCOLAR.",
        feedbackErro:
          "O texto diz: 'O ÔNIBUS ESCOLAR faz a ROTA das crianças até a escola'.",
        ondeEstaNoTexto: "…O ÔNIBUS ESCOLAR faz a ROTA das crianças…",
      },
      {
        pergunta: "Quem corre com o DOENTE pro hospital?",
        opcoes: ["A bicicleta", "A ambulância", "O barco"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! A AMBULÂNCIA.",
        feedbackErro:
          "O texto diz: 'A AMBULÂNCIA corre com o doente pro HOSPITAL'.",
        ondeEstaNoTexto: "…A AMBULÂNCIA corre com o doente pro HOSPITAL…",
      },
      {
        pergunta: "Pra um trajeto CURTO, dá pra ir de que jeito?",
        opcoes: [
          "Só de avião",
          "A pé ou de bicicleta",
          "Só de navio grande",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! A PÉ ou de BICICLETA.",
        feedbackErro:
          "O texto diz: 'Pra trajetos CURTOS, dá pra ir a PÉ ou de BICICLETA'.",
        ondeEstaNoTexto: "…Pra trajetos CURTOS, dá pra ir a PÉ ou de BICICLETA…",
      },
      {
        pergunta: "O caminhão leva alimentos DE ONDE pra ONDE?",
        opcoes: [
          "Da fazenda pro mercado",
          "Do hospital pra escola",
          "Do céu pra praia",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! FAZENDA → MERCADO.",
        feedbackErro:
          "O texto diz: 'o CAMINHÃO leva os alimentos da FAZENDA pro MERCADO'.",
        ondeEstaNoTexto: "…o CAMINHÃO leva os alimentos da FAZENDA pro MERCADO…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Cada TRANSPORTE combina melhor com um LUGAR.",
    perguntas: [
      {
        pergunta: "Qual transporte é MELHOR pra atravessar um rio largo?",
        opcoes: ["Bicicleta", "Barco", "Ônibus"],
        opcoesImagens: [bicicletaModerna, navio, pontoOnibus],
        correta: 1,
        feedbackAcerto: "🎉 Certo! No RIO, a gente vai de BARCO.",
        feedbackErro:
          "Pra atravessar rio, a gente usa BARCO — não passa carro nem bicicleta.",
      },
      {
        pergunta: "Qual transporte leva MUITAS pessoas juntas pela cidade?",
        opcoes: ["Ambulância", "Ônibus", "Bicicleta sozinha"],
        opcoesImagens: [carro, pontoOnibus, bicicletaModerna],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O ÔNIBUS leva MUITA gente.",
        feedbackErro:
          "O ÔNIBUS é o transporte que leva MUITAS pessoas de uma vez pela cidade.",
      },
      {
        pergunta: "Pra um trajeto BEM CURTO, o mais RÁPIDO é...",
        opcoes: [
          "Chamar um trem",
          "Ir a pé ou de bicicleta",
          "Chamar um navio",
        ],
        opcoesImagens: [trem, bicicletaModerna, navio],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Trajeto curto: A PÉ ou de BICICLETA.",
        feedbackErro:
          "Pra pouca distância, A PÉ ou de BICICLETA é mais rápido — não precisa trem nem navio.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloca em ORDEM o TRAJETO do ônibus escolar pela manhã.",
    bloco: {
      instrucao: "Do primeiro → último passo.",
      itens: [
        { id: "s1", texto: "1) O ônibus sai da GARAGEM.", imagemUrl: pontoOnibus },
        { id: "s2", texto: "2) PASSA nas casas das crianças.", imagemUrl: rua },
        { id: "s3", texto: "3) SEGUE a rota pela cidade.", imagemUrl: cidade },
        { id: "s4", texto: "4) CHEGA na ESCOLA.", imagemUrl: escola },
        { id: "s5", texto: "5) As crianças ENTRAM pra aula.", imagemUrl: tablet },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 Perfeito! Garagem → casas → cidade → escola → aula.",
      feedbackErro:
        "Pense: primeiro o ônibus SAI da garagem, depois PASSA nas casas, SEGUE pela cidade e CHEGA na escola.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "A rota da vovó",
      imagemUrl: mapa,
      destacar: ["vovó", "posto", "ônibus", "ponte", "sítio"],
      paragrafos: [
        "A vovó de Brilha mora no SÍTIO. Toda semana ela pega um ÔNIBUS pra ir no POSTO DE SAÚDE da cidade.",
        "O ônibus passa por uma PONTE em cima do rio. Quando chega no posto, a vovó consulta a médica e volta feliz de ÔNIBUS pra casa.",
      ],
    },
    perguntas: [
      {
        pergunta: "Onde a VOVÓ mora?",
        opcoes: ["No sítio", "Dentro do posto", "No ônibus"],
        opcoesImagens: [campo, postoSaude, pontoOnibus],
        correta: 0,
        feedbackAcerto: "🎉 Isso! No SÍTIO.",
        feedbackErro:
          "O texto diz: 'A vovó de Brilha mora no SÍTIO'.",
        ondeEstaNoTexto: "…A vovó de Brilha mora no SÍTIO…",
      },
      {
        pergunta: "Qual TRANSPORTE ela pega pra ir ao posto?",
        opcoes: ["Barco", "Ônibus", "Avião"],
        opcoesImagens: [navio, pontoOnibus, tablet],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Ela pega o ÔNIBUS.",
        feedbackErro:
          "O texto diz: 'ela pega um ÔNIBUS pra ir no POSTO DE SAÚDE'.",
        ondeEstaNoTexto: "…ela pega um ÔNIBUS pra ir no POSTO DE SAÚDE…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🚗 Central de Rotas: o melhor trajeto",
    instrucao:
      "Cada CARTELA é um TRAJETO. Coloque cada uma no TRANSPORTE certo.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Arrastar para o Alvo",
      bloco: {
        instrucao:
          "Toque na cartela do trajeto e depois no TRANSPORTE certo pra ele.",
        alvos: [
          {
            id: "a1",
            nome: "🚌 ÔNIBUS ESCOLAR",
            descricao: "Leva as crianças pra escola.",
            imagemUrl: pontoOnibus,
          },
          {
            id: "a2",
            nome: "🚑 AMBULÂNCIA",
            descricao: "Corre com quem está doente.",
            imagemUrl: carro,
          },
          {
            id: "a3",
            nome: "🚛 CAMINHÃO DE CARGA",
            descricao: "Leva alimentos e produtos.",
            imagemUrl: mercado,
          },
          {
            id: "a4",
            nome: "🚲 BICICLETA / A PÉ",
            descricao: "Trajetos curtinhos no bairro.",
            imagemUrl: bicicletaModerna,
          },
        ],
        itens: [
          { id: "i1", texto: "Casa → Escola", alvoId: "a1", imagemUrl: escola },
          { id: "i2", texto: "Rota das crianças", alvoId: "a1", imagemUrl: pontoOnibus },
          { id: "i3", texto: "Casa → Hospital (urgência)", alvoId: "a2", imagemUrl: postoSaude },
          { id: "i4", texto: "Socorrer alguém doente", alvoId: "a2", imagemUrl: carro },
          { id: "i5", texto: "Fazenda → Mercado", alvoId: "a3", imagemUrl: mercado },
          { id: "i6", texto: "Levar caixas de alimento", alvoId: "a3", imagemUrl: campo },
          { id: "i7", texto: "Casa → padaria da esquina", alvoId: "a4", imagemUrl: rua },
          { id: "i8", texto: "Passeio no parque perto", alvoId: "a4", imagemUrl: bicicletaModerna },
        ],
        feedbackAcerto:
          "🎉 Central conectada! Cada trajeto encontrou o transporte certo.",
        feedbackErro:
          "Pense no PORQUÊ: escola = ônibus escolar, doente = ambulância, muita carga = caminhão, perto = bicicleta ou a pé.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "TRAJETO é o CAMINHO entre partida e chegada.",
      "TRANSPORTE é como a gente se LOCOMOVE (pessoas ou coisas).",
      "ROTA é o caminho PLANEJADO que um transporte repete.",
      "Cada trajeto pede um transporte diferente: escolar, ambulância, caminhão, bicicleta.",
      "Escolher o transporte CERTO ajuda o município a FUNCIONAR.",
    ],
    miniDesafio: {
      pergunta: "Alguém está passando MAL. Qual transporte chamar?",
      opcoes: [
        "Ônibus escolar",
        "Ambulância",
        "Caminhão de carga",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! A AMBULÂNCIA corre com o doente pro hospital.",
      feedbackErro:
        "Pra emergência de saúde, a gente chama a AMBULÂNCIA.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é TRAJETO?",
        opcoes: [
          "O caminho entre partida e chegada",
          "Um tipo de comida",
          "Um dia da semana",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! TRAJETO = caminho de ida.",
        feedbackErro: "TRAJETO é o CAMINHO entre PARTIDA e CHEGADA.",
      },
      {
        pergunta: "2/5 — Qual transporte leva MUITAS crianças pra escola?",
        opcoes: ["Ambulância", "Ônibus escolar", "Caminhão de carga"],
        correta: 1,
        feedbackAcerto: "🎉 O ÔNIBUS ESCOLAR.",
        feedbackErro:
          "Quem leva as crianças na ROTA da escola é o ÔNIBUS ESCOLAR.",
      },
      {
        pergunta: "3/5 — Pra um trajeto BEM CURTO no bairro, o melhor é...",
        opcoes: ["Avião", "A pé ou bicicleta", "Navio"],
        correta: 1,
        feedbackAcerto: "🎉 A PÉ ou de BICICLETA.",
        feedbackErro:
          "Pra pouca distância, A PÉ ou de BICICLETA é mais rápido e barato.",
      },
      {
        pergunta: "4/5 — Pra atravessar um RIO largo?",
        opcoes: ["Barco", "Ônibus", "Bicicleta"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! De BARCO.",
        feedbackErro: "Pra atravessar RIO, a gente vai de BARCO.",
      },
      {
        pergunta: "5/5 — O que é ROTA?",
        opcoes: [
          "Uma comida gelada",
          "O caminho PLANEJADO que o transporte repete",
          "Uma cor do semáforo",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Caminho planejado, repetido.",
        feedbackErro:
          "ROTA é o CAMINHO PLANEJADO que um transporte faz sempre.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🗺️ Minha Rota até a Escola",
    materiais: ["Papel", "Lápis colorido"],
    passos: [
      "1) Com um ADULTO, converse: como você vai pra escola? (a pé, bicicleta, ônibus, carro)",
      "2) Desenhe um MAPINHA da sua CASA até a ESCOLA.",
      "3) Marque com uma seta a ROTA que vocês fazem.",
      "4) Escreva o TRANSPORTE que usam.",
    ],
    registro:
      "📸 Uma foto do seu mapinha com a rota casa → escola.",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
    medalha: "Guardião(ã) das Rotas",
  },
};
