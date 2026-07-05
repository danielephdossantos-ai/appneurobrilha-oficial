import type { Aula } from "../types";

import brilhaImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import cuboImg from "@/assets/neuro-treino/objetos/cubo.png";
import esferaImg from "@/assets/neuro-treino/objetos/esfera.png";
import cilindroImg from "@/assets/neuro-treino/objetos/cilindro.png";
import coneImg from "@/assets/neuro-treino/objetos/cone.png";
import dadoImg from "@/assets/neuro-treino/objetos/dado.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import lataImg from "@/assets/neuro-treino/objetos/lata.png";
import casquinhaImg from "@/assets/neuro-treino/objetos/casquinha.png";
import velaImg from "@/assets/neuro-treino/objetos/vela.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import blocoImg from "@/assets/neuro-treino/objetos/bloco.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";

/**
 * EF01MA13 — Aula 013 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Matemática
 * BNCC: Relacionar figuras geométricas espaciais (cubo, esfera,
 * cilindro, cone) a objetos familiares do mundo físico.
 *
 * Missão: "A Cidade das Formas".
 * Padrão travado EF01MA02/MA11/MA12: toda pergunta mostra a IMAGEM
 * real do objeto/forma. Crianças não alfabetizadas — nada de texto puro.
 */
const aula: Aula = {
  codigo: "EF01MA13",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "A Cidade das Formas",

  narrativa: {
    titulo: "A Cidade das Formas",
    contexto:
      "O esquilo Brilha chegou a uma cidade muito diferente: as casas, brinquedos e objetos foram construídos usando FORMAS GEOMÉTRICAS.",
    problema:
      "Só que o Prefeito perdeu o mapa das construções — ninguém sabe qual forma virou casa, sorvete, bola ou lata!",
    convite:
      "Vamos ajudar o Brilha a descobrir as formas escondidas em tudo o que vemos?",
  },

  conhecimentosPrevios: [
    "Reconhecer objetos do dia a dia por imagem.",
    "Diferenciar objetos por tamanho e forma geral.",
    "Nomear cores básicas.",
  ],

  missao:
    "Aprender as 4 figuras geométricas espaciais principais — CUBO, ESFERA, CILINDRO e CONE — e relacioná-las com objetos do mundo real.",

  objetivos: [
    "Reconhecer formas tridimensionais.",
    "Relacionar cada forma com objetos do cotidiano.",
    "Observar características de cada figura.",
    "Desenvolver percepção espacial.",
  ],

  motivacao:
    "Quase tudo ao nosso redor tem uma forma! Aprender geometria ajuda arquitetos, engenheiros e designers a construir casas, brinquedos e até bolas de futebol.",

  explicacao:
    "🟦 CUBO — tem 6 lados iguais. Parece um DADO.\n\n⚽ ESFERA — é redondinha de todos os lados. Parece uma BOLA.\n\n🥫 CILINDRO — reto em pé, com tampa e fundo redondos. Parece uma LATA.\n\n🍦 CONE — pontudo em cima, redondo embaixo. Parece a CASQUINHA de sorvete.",

  explicacoesNiveis: {
    nivel1:
      "Toda coisa tem uma forma. Cubo é quadradão, esfera é redondinha.",
    nivel2:
      "Cilindro fica em pé como uma lata. Cone é pontudo como a casquinha do sorvete.",
    nivel3:
      "Casas costumam ter cubos, prédios altos usam cilindros, torres pontudas usam cones e bolas de festa são esferas.",
    nivel4:
      "Engenheiros e arquitetos combinam essas 4 formas pra construir tudo — brinquedos, casas, pontes e até naves espaciais.",
  },

  exemploResolvido: {
    enunciado:
      "O Brilha achou uma bola de futebol. Que forma geométrica ela tem?",
    passos: [
      "Olhe a bola: ela é redondinha por todos os lados.",
      "NÃO é quadrada (cubo).",
      "NÃO é reta com fundo redondo (cilindro).",
      "É redondinha em todo lugar → ESFERA.",
    ],
    resposta: "A bola tem forma de ESFERA.",
  },

  atividadeGuiada: {
    enunciado:
      "Olhe a imagem: o Brilha achou um DADO. Que forma geométrica ele tem?",
    resposta: "CUBO.",
    explicacao:
      "O dado tem 6 lados iguais e planos — essa é a forma do CUBO.",
    visual: {
      tipo: "grupos",
      grupos: [
        { imagemUrl: dadoImg, quantidade: 1, rotulo: "Dado", cor: "#F97316" },
        { imagemUrl: cuboImg, quantidade: 1, rotulo: "Cubo", cor: "#3B82F6" },
      ],
    },
  },

  exercicios: [
    { enunciado: "🎲 Dado parece qual forma?", resposta: "Cubo", dica: "6 lados iguais." },
    { enunciado: "⚽ Bola parece qual forma?", resposta: "Esfera", dica: "Redondinha." },
    { enunciado: "🥫 Lata parece qual forma?", resposta: "Cilindro", dica: "Reta em pé." },
    { enunciado: "🍦 Casquinha parece qual forma?", resposta: "Cone", dica: "Pontuda em cima." },
    { enunciado: "🕯 Vela parece qual forma?", resposta: "Cilindro", dica: "Também é reta em pé." },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: ajude o Prefeito a marcar qual forma cada objeto tem!",
    resposta: "Dado = Cubo · Bola = Esfera · Lata = Cilindro · Casquinha = Cone.",
    visual: {
      cena: [
        { personagem: "Cubo 🟦", itemImagemUrl: cuboImg, quantidade: 1, cor: "#3B82F6" },
        { personagem: "Esfera ⚽", itemImagemUrl: esferaImg, quantidade: 1, cor: "#10B981" },
        { personagem: "Cilindro 🥫", itemImagemUrl: cilindroImg, quantidade: 1, cor: "#8B5CF6" },
        { personagem: "Cone 🍦", itemImagemUrl: coneImg, quantidade: 1, cor: "#F97316" },
      ],
      perguntas: [
        {
          pergunta: "O DADO tem forma de…",
          opcoes: ["Cubo", "Esfera", "Cone"],
          correta: 0,
          explicacao: "Dado = 6 lados iguais = CUBO.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: dadoImg, quantidade: 1, rotulo: "Dado", cor: "#F97316" },
            ],
          },
        },
        {
          pergunta: "A BOLA tem forma de…",
          opcoes: ["Cilindro", "Esfera", "Cubo"],
          correta: 1,
          explicacao: "Redondinha por todos os lados = ESFERA.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola", cor: "#10B981" },
            ],
          },
        },
        {
          pergunta: "A LATA tem forma de…",
          opcoes: ["Cone", "Cubo", "Cilindro"],
          correta: 2,
          explicacao: "Reta em pé com tampa redonda = CILINDRO.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: lataImg, quantidade: 1, rotulo: "Lata", cor: "#EF4444" },
            ],
          },
        },
        {
          pergunta: "A CASQUINHA de sorvete tem forma de…",
          opcoes: ["Cone", "Esfera", "Cubo"],
          correta: 0,
          explicacao: "Pontuda em cima, redonda embaixo = CONE.",
          visual: {
            tipo: "grupos",
            grupos: [
              { imagemUrl: casquinhaImg, quantidade: 1, rotulo: "Casquinha", cor: "#F472B6" },
            ],
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🟦 CUBO — 6 lados iguais. Exemplo: dado.",
      "⚽ ESFERA — redondinha em todo lado. Exemplo: bola.",
      "🥫 CILINDRO — reto em pé, tampa redonda. Exemplo: lata, vela.",
      "🍦 CONE — pontudo em cima. Exemplo: casquinha, chapéu de festa.",
    ],
    dica:
      "Antes de responder, procure na sua casa 1 objeto de cada forma — dado, bola, lata, casquinha!",
  },

  quiz: [
    {
      pergunta: "Qual forma tem o DADO?",
      opcoes: ["Esfera", "Cubo", "Cilindro"],
      correta: 1,
      explicacao: "6 lados iguais = CUBO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: dadoImg, quantidade: 1, rotulo: "Dado", cor: "#F97316" },
          { imagemUrl: cuboImg, quantidade: 1, rotulo: "Cubo", cor: "#3B82F6" },
        ],
      },
    },
    {
      pergunta: "Qual forma tem a BOLA?",
      opcoes: ["Cubo", "Esfera", "Cone"],
      correta: 1,
      explicacao: "Redondinha em todo lado = ESFERA.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola", cor: "#10B981" },
          { imagemUrl: esferaImg, quantidade: 1, rotulo: "Esfera", cor: "#10B981" },
        ],
      },
    },
    {
      pergunta: "Uma LATA tem forma de…",
      opcoes: ["Cilindro", "Cubo", "Esfera"],
      correta: 0,
      explicacao: "Reta em pé, tampa redonda = CILINDRO.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: lataImg, quantidade: 1, rotulo: "Lata", cor: "#EF4444" },
          { imagemUrl: cilindroImg, quantidade: 1, rotulo: "Cilindro", cor: "#8B5CF6" },
        ],
      },
    },
    {
      pergunta: "A CASQUINHA de sorvete lembra qual forma?",
      opcoes: ["Cubo", "Cilindro", "Cone"],
      correta: 2,
      explicacao: "Pontuda em cima = CONE.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: casquinhaImg, quantidade: 1, rotulo: "Casquinha", cor: "#F472B6" },
          { imagemUrl: coneImg, quantidade: 1, rotulo: "Cone", cor: "#F97316" },
        ],
      },
    },
  ],

  conclusao:
    "🏆 Medalha conquistada: Construtor da Cidade Geométrica! Você aprendeu as 4 formas espaciais e onde elas se escondem. Missão em Família: caça às formas pela casa — 2 cubos, 2 cilindros, 1 esfera e 1 cone!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "As bolas de futebol, os dados dos jogos, as casquinhas de sorvete e as latas existem graças ao estudo das FORMAS GEOMÉTRICAS. Engenheiros e designers usam elas todos os dias!",
  },

  interativas: [
    // ==== FASE 1 · Quem é quem? — LIGAR objeto ↔ forma ====
    {
      tipo: "ligar",
      titulo: "Fase 1 · Quem é quem?",
      instrucao:
        "Ligue cada objeto do dia a dia à forma geométrica que ele tem.",
      pares: [
        { a: "Bola", b: "Esfera", aImagem: bolaImg, aQuantidade: 1, bImagem: esferaImg, bQuantidade: 1 },
        { a: "Dado", b: "Cubo", aImagem: dadoImg, aQuantidade: 1, bImagem: cuboImg, bQuantidade: 1 },
        { a: "Lata", b: "Cilindro", aImagem: lataImg, aQuantidade: 1, bImagem: cilindroImg, bQuantidade: 1 },
        { a: "Casquinha", b: "Cone", aImagem: casquinhaImg, aQuantidade: 1, bImagem: coneImg, bQuantidade: 1 },
      ],
    },

    // ==== FASE 2 · Arraste para o lugar certo ====
    {
      tipo: "arrastar",
      titulo: "Fase 2 · Arraste para a Caixa Certa",
      instrucao:
        "Cada objeto vai numa caixa. Arraste pra caixa da forma correta.",
      itemImagem: dadoImg,
      alvosVisuais: [
        { nome: "📦 Caixa CUBO", cor: "#3B82F6", capacidade: 1, imagemUrl: cuboImg },
        { nome: "⚽ Caixa ESFERA", cor: "#10B981", capacidade: 1, imagemUrl: esferaImg },
        { nome: "🥫 Caixa CILINDRO", cor: "#8B5CF6", capacidade: 1, imagemUrl: cilindroImg },
        { nome: "🍦 Caixa CONE", cor: "#F97316", capacidade: 1, imagemUrl: coneImg },
      ],
      pares: [
        { item: "🎲 Dado", alvo: "📦 Caixa CUBO" },
        { item: "⚽ Bola", alvo: "⚽ Caixa ESFERA" },
        { item: "🥫 Lata", alvo: "🥫 Caixa CILINDRO" },
        { item: "🍦 Casquinha", alvo: "🍦 Caixa CONE" },
      ],
    },

    // ==== FASE 4 · Explorador da Casa (só CILINDROS) ====
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Explorador dos Cilindros",
      instrucao:
        "Coloque na caixa CILINDRO só os objetos com essa forma. Bola e dado ficam de FORA (na caixa lixo).",
      itemImagem: lataImg,
      alvosVisuais: [
        { nome: "🥫 Caixa CILINDRO", cor: "#8B5CF6", capacidade: 2, imagemUrl: cilindroImg },
        { nome: "🚫 Não é cilindro", cor: "#94A3B8", capacidade: 2, imagemUrl: cuboImg },
      ],
      pares: [
        { item: "🥫 Lata", alvo: "🥫 Caixa CILINDRO" },
        { item: "🕯 Vela", alvo: "🥫 Caixa CILINDRO" },
        { item: "⚽ Bola", alvo: "🚫 Não é cilindro" },
        { item: "🎲 Dado", alvo: "🚫 Não é cilindro" },
      ],
    },

    // ==== FASE 5 · Monte a Cidade — ORDENAR ====
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Monte a Cidade das Formas",
      instrucao:
        "Coloque as peças na ORDEM da cidade: primeiro a CASA (cubo), depois a ÁRVORE (cilindro) e a TORRE PONTUDA (cone). No topo, a bandeira esférica!",
      itens: [
        "🏠 Casa (cubo)",
        "🌳 Árvore (cilindro)",
        "🍦 Torre (cone)",
        "⚽ Bandeira (esfera)",
      ],
      imagens: [
        { imagemUrl: cuboImg, quantidade: 1, rotulo: "🏠 Casa = Cubo", cor: "#3B82F6" },
        { imagemUrl: cilindroImg, quantidade: 1, rotulo: "🌳 Árvore = Cilindro", cor: "#8B5CF6" },
        { imagemUrl: coneImg, quantidade: 1, rotulo: "🍦 Torre = Cone", cor: "#F97316" },
        { imagemUrl: esferaImg, quantidade: 1, rotulo: "⚽ Bandeira = Esfera", cor: "#10B981" },
      ],
    },

    // ==== MINI JOGO · Caça às Formas ====
    {
      tipo: "arrastar",
      titulo: "Mini Jogo · Caça às Formas",
      instrucao:
        "A Cidade tem objetos misturados. Coloque cada um na caixa da sua forma!",
      itemImagem: velaImg,
      alvosVisuais: [
        { nome: "🟦 CUBO", cor: "#3B82F6", capacidade: 2, imagemUrl: cuboImg },
        { nome: "⚽ ESFERA", cor: "#10B981", capacidade: 1, imagemUrl: esferaImg },
        { nome: "🥫 CILINDRO", cor: "#8B5CF6", capacidade: 2, imagemUrl: cilindroImg },
        { nome: "🍦 CONE", cor: "#F97316", capacidade: 1, imagemUrl: coneImg },
      ],
      pares: [
        { item: "🎲 Dado", alvo: "🟦 CUBO" },
        { item: "🎁 Presente", alvo: "🟦 CUBO" },
        { item: "⚽ Bola", alvo: "⚽ ESFERA" },
        { item: "🥫 Lata", alvo: "🥫 CILINDRO" },
        { item: "🕯 Vela", alvo: "🥫 CILINDRO" },
        { item: "🍦 Casquinha", alvo: "🍦 CONE" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual forma tem o DADO?",
        opcoes: ["Esfera", "Cubo", "Cone"],
        correta: 1,
        explicacao: "6 lados iguais = CUBO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: dadoImg, quantidade: 1, rotulo: "Dado", cor: "#F97316" },
            { imagemUrl: cuboImg, quantidade: 1, rotulo: "Cubo", cor: "#3B82F6" },
          ],
        },
      },
      {
        pergunta: "Qual forma tem a BOLA?",
        opcoes: ["Cubo", "Esfera", "Cilindro"],
        correta: 1,
        explicacao: "Redondinha por todos os lados = ESFERA.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola", cor: "#10B981" },
            { imagemUrl: esferaImg, quantidade: 1, rotulo: "Esfera", cor: "#10B981" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Uma LATA tem forma de…",
        opcoes: ["Cilindro", "Cubo", "Cone"],
        correta: 0,
        explicacao: "Reta em pé, tampa redonda = CILINDRO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: lataImg, quantidade: 1, rotulo: "Lata", cor: "#EF4444" },
            { imagemUrl: cilindroImg, quantidade: 1, rotulo: "Cilindro", cor: "#8B5CF6" },
          ],
        },
      },
      {
        pergunta: "E a CASQUINHA de sorvete?",
        opcoes: ["Cubo", "Cone", "Esfera"],
        correta: 1,
        explicacao: "Pontuda em cima = CONE.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: casquinhaImg, quantidade: 1, rotulo: "Casquinha", cor: "#F472B6" },
            { imagemUrl: coneImg, quantidade: 1, rotulo: "Cone", cor: "#F97316" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Olhe a VELA. Qual forma ela tem?",
        opcoes: ["Cone", "Cilindro", "Esfera"],
        correta: 1,
        explicacao: "Reta em pé como uma lata = CILINDRO.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: velaImg, quantidade: 1, rotulo: "Vela", cor: "#FBBF24" },
            { imagemUrl: cilindroImg, quantidade: 1, rotulo: "Cilindro", cor: "#8B5CF6" },
          ],
        },
      },
      {
        pergunta: "Qual desses NÃO é um cilindro?",
        opcoes: ["Lata", "Vela", "Dado"],
        correta: 2,
        explicacao: "Dado tem 6 lados iguais = CUBO, não cilindro.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: lataImg, quantidade: 1, rotulo: "Lata", cor: "#EF4444" },
            { imagemUrl: velaImg, quantidade: 1, rotulo: "Vela", cor: "#FBBF24" },
            { imagemUrl: dadoImg, quantidade: 1, rotulo: "Dado", cor: "#F97316" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01MA14" },
};

// Referências mantidas para evitar tree-shake warnings em builds futuros:
void brilhaImg;
void livroImg;
void blocoImg;
void casaImg;
void arvoreImg;
void presenteImg;

export default aula;
