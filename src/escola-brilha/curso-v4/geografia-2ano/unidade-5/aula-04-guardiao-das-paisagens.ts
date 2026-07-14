import type { AulaPortuguesV4 } from "../../types";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mapaPercurso } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as campo } from "@/assets/neuro-treino/objetos/campo.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as predio } from "@/assets/neuro-treino/objetos/predio.png.asset.json";
import { url as rio } from "@/assets/neuro-treino/objetos/lago.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as rua } from "@/assets/neuro-treino/objetos/rua.png.asset.json";
import { url as lixeiraReciclagem } from "@/assets/neuro-treino/objetos/lixeira-reciclagem.png.asset.json";
import { url as funcionarioLimpeza } from "@/assets/neuro-treino/objetos/funcionario-limpeza.png.asset.json";
import { url as planta } from "@/assets/neuro-treino/objetos/planta-pequena.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as vento } from "@/assets/neuro-treino/objetos/vento.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";

/**
 * Geografia · 2º Ano · Unidade 5 · Aula 04
 * "Guardião das Paisagens: meu Atlas" — EF02GE05
 *
 * Fechamento: a criança junta NATUREZA + PESSOAS + PRESERVAÇÃO
 * no Atlas do Município. Só usa blocos travados do PlayerPortuguesV4.
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-guardiao-das-paisagens",
  titulo: "Guardião das Paisagens",
  iconeTrilha: "🏆",
  bncc: ["EF02GE05"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O Atlas está quase pronto!",
    historia:
      "O ATLAS do Brilha brilhou de novo! Aurora aplaudiu: 'Você já sabe que a paisagem MUDA, quem MUDA e como CUIDAR. Falta a última página: virar GUARDIÃO(Ã) DAS PAISAGENS e mostrar TUDO junto!'",
    imagemUrl: mapa,
  },

  momento02_previsao: {
    instrucao: "Pistas do Atlas. Sobre o que é a MISSÃO FINAL?",
    bloco: {
      titulo: "Missão: Guardião das Paisagens",
      capaImagemUrl: mapaPercurso,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "🏆",
        estilo: "cartaz",
        linhas: [
          "MISSÃO FINAL",
          "",
          "Junte TUDO no Atlas:",
          "MUDANÇA + CAUSAS",
          "+ PRESERVAÇÃO.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: arvore, nome: "Paisagem antiga" },
        { imagemUrl: predio, nome: "Paisagem nova" },
        { imagemUrl: lixeiraReciclagem, nome: "Como PRESERVAR" },
      ],
      pergunta: "O que essa missão FINAL vai celebrar?",
      hipoteses: [
        {
          texto:
            "Que a paisagem MUDA e a gente pode CUIDAR dela ao mesmo tempo.",
          imagemUrl: cidade,
        },
        { texto: "Que árvore vira sorvete.", imagemUrl: arvore },
        { texto: "Que carro voa sozinho.", imagemUrl: rua },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! A gente PODE transformar, mas com CUIDADO.",
      feedbackErro:
        "Olhe as pistas: antiga, nova, preservação. A missão fala em MUDAR e CUIDAR.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras do Guardião.",
    cards: [
      {
        palavra: "guardião",
        explicacao:
          "É a pessoa que PROTEGE algo importante. O GUARDIÃO da paisagem cuida da natureza e das mudanças da cidade.",
        exemplo: "Eu sou GUARDIÃO(Ã) do meu bairro.",
        imagemUrl: familia,
      },
      {
        palavra: "sustentável",
        explicacao:
          "É quando a gente USA a natureza sem ACABAR com ela. Plantar, reciclar e economizar água são atitudes SUSTENTÁVEIS.",
        exemplo:
          "A cidade SUSTENTÁVEL tem árvore, praça e reciclagem.",
        imagemUrl: planta,
      },
      {
        palavra: "atlas",
        explicacao:
          "É o LIVRO de MAPAS e DESCOBERTAS. No Atlas de Brilha vão as paisagens do município, o antes e o depois.",
        exemplo: "Colei no meu ATLAS a foto do rio limpo.",
        imagemUrl: mapa,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você a última história.",
    leitura: {
      titulo: "O bairro do Brilha",
      imagemUrl: cidade,
      legendaImagem:
        "Um bairro que MUDOU e aprendeu a se CUIDAR ao mesmo tempo.",
      destacar: [
        "árvores",
        "prédios",
        "chuva",
        "vento",
        "moradores",
        "reciclagem",
        "praça",
      ],
      paragrafos: [
        "O bairro do Brilha já foi cheio de ÁRVORES. Hoje tem PRÉDIOS, avenidas e semáforo. A NATUREZA também age: quando a CHUVA é forte, alaga; quando o VENTO é forte, cai galho.",
        "As PESSOAS já sabem: pode CONSTRUIR, mas precisa CUIDAR. Fizeram uma PRAÇA arborizada no meio dos prédios.",
        "Colocaram LIXEIRAS DE RECICLAGEM em cada esquina e a escola faz MUTIRÃO todo mês pra limpar o rio.",
        "Assim, o bairro MUDA (transformação), mas continua sendo um bom LUGAR pra viver. É isso que faz um GUARDIÃO(Ã) DA PAISAGEM!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "O que o bairro tinha ANTIGAMENTE?",
        opcoes: [
          "Só prédios altos",
          "Cheio de árvores",
          "Só rios e lagos",
        ],
        correta: 1,
        feedbackAcerto: "🎉 ÁRVORES.",
        feedbackErro:
          "O texto diz: 'já foi cheio de ÁRVORES'.",
        ondeEstaNoTexto: "…já foi cheio de ÁRVORES…",
      },
      {
        pergunta: "O que a NATUREZA faz no bairro?",
        opcoes: [
          "Constrói prédio",
          "Alaga com chuva e derruba galho com vento",
          "Coloca lixeiras",
        ],
        correta: 1,
        feedbackAcerto: "🎉 ALAGA e DERRUBA galho.",
        feedbackErro:
          "O texto diz: 'quando a CHUVA é forte, alaga; quando o VENTO é forte, cai galho'.",
        ondeEstaNoTexto:
          "…CHUVA é forte, alaga; quando o VENTO é forte, cai galho…",
      },
      {
        pergunta: "O que as PESSOAS fizeram pra CUIDAR?",
        opcoes: [
          "Praça arborizada + reciclagem + mutirão",
          "Cortaram tudo",
          "Jogaram lixo no rio",
        ],
        correta: 0,
        feedbackAcerto: "🎉 PRAÇA + RECICLAGEM + MUTIRÃO.",
        feedbackErro:
          "O texto diz: 'PRAÇA arborizada… LIXEIRAS DE RECICLAGEM… MUTIRÃO'.",
        ondeEstaNoTexto:
          "…PRAÇA arborizada… LIXEIRAS DE RECICLAGEM… MUTIRÃO…",
      },
      {
        pergunta: "O que faz um GUARDIÃO(Ã) da paisagem?",
        opcoes: [
          "Deixa o bairro mudar SEM cuidar",
          "MUDA e CUIDA ao mesmo tempo",
          "Nunca deixa nada mudar",
        ],
        correta: 1,
        feedbackAcerto: "🎉 MUDA e CUIDA junto.",
        feedbackErro:
          "O texto diz: 'MUDA (transformação), mas continua sendo um bom LUGAR'.",
        ondeEstaNoTexto: "…MUDA…, mas continua sendo um bom LUGAR…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Cada situação: é ação da NATUREZA ou PESSOAS CUIDANDO?",
    perguntas: [
      {
        pergunta: "🌧️ Rua alagou depois de chuva forte.",
        opcoes: ["Natureza", "Pessoas cuidando", "Robô"],
        opcoesImagens: [chuva, funcionarioLimpeza, escola],
        correta: 0,
        feedbackAcerto: "🎉 NATUREZA.",
        feedbackErro:
          "CHUVA forte que alaga é NATUREZA agindo.",
      },
      {
        pergunta: "♻️ Vizinhos SEPARARAM o lixo em lixeiras coloridas.",
        opcoes: ["Natureza", "Pessoas CUIDANDO", "Vento"],
        opcoesImagens: [chuva, lixeiraReciclagem, vento],
        correta: 1,
        feedbackAcerto: "🎉 PESSOAS CUIDANDO.",
        feedbackErro:
          "RECICLAR é atitude de PESSOAS CUIDANDO.",
      },
      {
        pergunta: "🌿 Escola PLANTOU 10 mudas na entrada.",
        opcoes: ["Natureza sozinha", "Pessoas cuidando", "Poluição"],
        opcoesImagens: [chuva, planta, ponte],
        correta: 1,
        feedbackAcerto: "🎉 PESSOAS CUIDANDO.",
        feedbackErro:
          "PLANTAR muda é PESSOAS cuidando da natureza.",
      },
      {
        pergunta: "🌬️ Vento derrubou uma árvore muito velha.",
        opcoes: ["Natureza", "Pessoas destruindo", "Ninguém"],
        opcoesImagens: [vento, funcionarioLimpeza, arvore],
        correta: 0,
        feedbackAcerto: "🎉 NATUREZA (vento).",
        feedbackErro:
          "Vento é ação da NATUREZA.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Ordene a rotina do GUARDIÃO(Ã) num dia (do começo → fim).",
    bloco: {
      instrucao: "Do primeiro → último passo.",
      itens: [
        { id: "s1", texto: "1) De manhã: FECHAR a torneira ao escovar.", imagemUrl: rio },
        { id: "s2", texto: "2) Ir pra escola: JOGAR papel na LIXEIRA.", imagemUrl: lixeiraReciclagem },
        { id: "s3", texto: "3) Na aula: aprender a RECICLAR.", imagemUrl: escola },
        { id: "s4", texto: "4) De tarde: AJUDAR a regar a plantinha.", imagemUrl: planta },
        { id: "s5", texto: "5) De noite: APAGAR a luz que não usa.", imagemUrl: familia },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 Isso! Rotina de GUARDIÃO(Ã) do começo ao fim do dia.",
      feedbackErro:
        "Pensa: começa de manhã (torneira), depois escola (lixeira, aula), tarde (regar) e noite (apagar luz).",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "O Atlas do Brilha",
      imagemUrl: mapa,
      destacar: ["Brilha", "Atlas", "paisagem", "antes", "depois", "cuidados"],
      paragrafos: [
        "No fim da unidade, Brilha abriu o ATLAS. De um lado colou a foto ANTES (com árvores) e do outro a foto DEPOIS (com prédios).",
        "No meio, escreveu: 'A paisagem MUDA — mas eu sou GUARDIÃO(Ã) e vou CUIDAR sempre!'",
      ],
    },
    perguntas: [
      {
        pergunta: "O que Brilha colou no ATLAS?",
        opcoes: [
          "Duas fotos: antes e depois",
          "Só uma foto de bolo",
          "Nada, esqueceu",
        ],
        opcoesImagens: [mapaPercurso, familia, campo],
        correta: 0,
        feedbackAcerto: "🎉 ANTES e DEPOIS!",
        feedbackErro:
          "O texto diz: 'colou a foto ANTES… e do outro a foto DEPOIS'.",
        ondeEstaNoTexto: "…foto ANTES… foto DEPOIS…",
      },
      {
        pergunta: "O que Brilha escreveu no MEIO?",
        opcoes: [
          "Que a paisagem MUDA e ele vai CUIDAR",
          "Que a paisagem some pra sempre",
          "Nada",
        ],
        opcoesImagens: [familia, chuva, mapa],
        correta: 0,
        feedbackAcerto:
          "🎉 Que ele é GUARDIÃO(Ã) e vai CUIDAR.",
        feedbackErro:
          "O texto diz: 'A paisagem MUDA — mas eu sou GUARDIÃO(Ã) e vou CUIDAR sempre!'",
        ondeEstaNoTexto:
          "…A paisagem MUDA — mas eu sou GUARDIÃO(Ã)…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🏆 Atlas Final: MUDANÇA × CAUSA × CUIDADO",
    instrucao:
      "Cada CARTELA vai numa das 3 páginas do Atlas: NATUREZA, PESSOAS ou CUIDAR.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Arrastar para o Alvo",
      bloco: {
        instrucao: "Toque na cartela e depois na página certa do Atlas.",
        alvos: [
          {
            id: "natureza",
            nome: "🌿 NATUREZA muda",
            descricao: "Chuva, vento, sol.",
            imagemUrl: chuva,
          },
          {
            id: "pessoas",
            nome: "👷 PESSOAS mudam",
            descricao: "Construir, asfaltar.",
            imagemUrl: predio,
          },
          {
            id: "cuidar",
            nome: "🏆 CUIDAR (Guardião)",
            descricao: "Reciclar, plantar, mutirão.",
            imagemUrl: lixeiraReciclagem,
          },
        ],
        itens: [
          { id: "i1", texto: "Chuva fez o morro escorregar", alvoId: "natureza", imagemUrl: chuva },
          { id: "i2", texto: "Vento derrubou uma árvore", alvoId: "natureza", imagemUrl: vento },
          { id: "i3", texto: "Sol forte secou o rio pequeno", alvoId: "natureza", imagemUrl: rio },
          { id: "i4", texto: "Construíram um prédio novo", alvoId: "pessoas", imagemUrl: predio },
          { id: "i5", texto: "Abriram uma avenida asfaltada", alvoId: "pessoas", imagemUrl: rua },
          { id: "i6", texto: "Fizeram uma ponte no rio", alvoId: "pessoas", imagemUrl: ponte },
          { id: "i7", texto: "Colocaram lixeira de reciclagem", alvoId: "cuidar", imagemUrl: lixeiraReciclagem },
          { id: "i8", texto: "Plantaram mudas na praça", alvoId: "cuidar", imagemUrl: planta },
          { id: "i9", texto: "Mutirão pra limpar o rio", alvoId: "cuidar", imagemUrl: funcionarioLimpeza },
        ],
        feedbackAcerto:
          "🎉 Atlas completo! Você é oficialmente GUARDIÃO(Ã) das Paisagens.",
        feedbackErro:
          "Lembra: chuva/vento/sol = NATUREZA; construir/asfaltar/ponte = PESSOAS; reciclar/plantar/mutirão = CUIDAR.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PAISAGEM = tudo que a gente vê num lugar.",
      "Paisagem MUDA com a NATUREZA (chuva, vento, sol).",
      "Paisagem MUDA com as PESSOAS (construir, asfaltar).",
      "PODEMOS mudar, MAS precisamos CUIDAR.",
      "GUARDIÃO(Ã) = quem transforma e preserva ao mesmo tempo.",
    ],
    miniDesafio: {
      pergunta: "O que faz um bom GUARDIÃO(Ã) da paisagem?",
      opcoes: [
        "Só destruir",
        "Só olhar sem fazer nada",
        "Cuidar enquanto o bairro muda",
      ],
      correta: 2,
      feedbackAcerto:
        "🎉 CUIDAR enquanto o bairro MUDA.",
      feedbackErro:
        "GUARDIÃO(Ã) MUDA (constrói, planta, arruma) e CUIDA (recicla, preserva) juntos.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Paisagem mudar é uma coisa...",
        opcoes: ["Que nunca acontece", "Normal, acontece com o tempo", "Só de outro país"],
        correta: 1,
        feedbackAcerto: "🎉 Normal, com o tempo.",
        feedbackErro: "PAISAGEM muda com o TEMPO — é natural.",
      },
      {
        pergunta: "2/5 — Chuva forte + morro sem árvore =",
        opcoes: ["Prédio novo", "Desmoronamento", "Nada acontece"],
        correta: 1,
        feedbackAcerto: "🎉 DESMORONAMENTO.",
        feedbackErro:
          "Sem árvore que segura a terra, a chuva faz DESMORONAMENTO.",
      },
      {
        pergunta: "3/5 — Ação SUSTENTÁVEL é...",
        opcoes: [
          "Usar sem cuidar",
          "Usar CUIDANDO da natureza",
          "Nunca usar nada",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Usar CUIDANDO.",
        feedbackErro:
          "SUSTENTÁVEL é usar SEM acabar com a natureza.",
      },
      {
        pergunta: "4/5 — Praça ARBORIZADA no meio dos prédios é...",
        opcoes: [
          "Uma péssima ideia",
          "Um pedacinho de natureza preservado",
          "Um estacionamento",
        ],
        correta: 1,
        feedbackAcerto: "🎉 NATUREZA preservada.",
        feedbackErro:
          "Praça arborizada é NATUREZA PRESERVADA no meio da cidade.",
      },
      {
        pergunta: "5/5 — O(A) GUARDIÃO(Ã) da paisagem...",
        opcoes: [
          "Destrói sempre",
          "MUDA e CUIDA junto",
          "Não faz nada",
        ],
        correta: 1,
        feedbackAcerto: "🎉 MUDA e CUIDA junto!",
        feedbackErro:
          "GUARDIÃO(Ã) MUDA (constrói) e CUIDA (preserva) ao mesmo tempo.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🗺️ Meu Atlas do Município",
    materiais: ["Folha grande", "Lápis colorido"],
    passos: [
      "1) Com um ADULTO, faça a CAPA: 'MEU ATLAS DO MUNICÍPIO — GUARDIÃO(Ã) DAS PAISAGENS'.",
      "2) DENTRO, desenhe 3 quadrinhos: NATUREZA muda / PESSOAS mudam / EU CUIDO.",
      "3) Em CADA quadrinho, faça 1 desenho pequeno de algo que você viu no seu bairro.",
      "4) Assine seu nome com orgulho de GUARDIÃO(Ã).",
    ],
    registro:
      "📸 Uma foto da CAPA + do INTERIOR do seu Atlas.",
  },

  recompensa: {
    xp: 220,
    moedas: 140,
    medalha: "Guardião(ã) das Paisagens",
  },
};
