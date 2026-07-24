import type { Aula } from "../types";
import { url as lapisImg } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as papelImg } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as meninoImg } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as heroiImg } from "@/assets/neuro-treino/objetos/heroi.png.asset.json";
import { url as dinossauroImg } from "@/assets/neuro-treino/objetos/dinossauro.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * EI03EF06 — Pré II · Produzir histórias orais e escritas (escrita espontânea)
 * Pedagogia: escrita espontânea (Emília Ferreiro — hipótese pré-silábica).
 * Nessa fase, a criança "escreve" fazendo rabiscos, letras soltas ou
 * pseudo-letras. O IMPORTANTE é que ela ENTENDA que está escrevendo —
 * mesmo que só ela leia. É o alicerce da alfabetização.
 */
const aula: Aula = {
  codigo: "EI03EF06",
  ano: "Educação Infantil",
  disciplina: "Português",
  titulo: "Minha Primeira História",

  narrativa: {
    titulo: "O caderno do Brilha",
    contexto: "O Brilha ganhou um caderno em branco. A capa dizia: 'HISTÓRIAS DO BRILHA'.",
    problema: "Ele quer inventar uma história dele mesmo — com personagem, aventura e final. E ainda tentar ESCREVER, do jeitinho que consegue.",
    convite: "Bora inventar uma história e escrever com as suas letras?",
  },

  conhecimentosPrevios: ["Fez rabiscos.", "Já pediu pra alguém ler uma história.", "Sabe segurar o lápis."],

  missao: "Descobrir que a gente PODE inventar história e ESCREVER do nosso jeito — mesmo que só a gente leia.",

  objetivos: [
    "Inventar personagem, lugar e problema.",
    "Registrar a história com desenho + escrita espontânea (letras ou pseudo-letras).",
    "Contar a história depois pra alguém.",
  ],

  explicacao:
    "Toda história do mundo foi INVENTADA por alguém.\n\nPra inventar uma história você escolhe:\n\n• UM PERSONAGEM (herói? bicho? dinossauro?).\n• UM LUGAR (casa? floresta? espaço?).\n• UM PROBLEMA (se perdeu? achou um monstro? ganhou um poder?).\n• UM FINAL (voltou pra casa? venceu? fez amigo?).\n\nDepois você DESENHA e ESCREVE do seu jeito — com as letras que você já conhece ou rabisco de escrita. Essa é a ESCRITA ESPONTÂNEA: você escreve do JEITO QUE ACHA que é.\n\nCom o tempo, as letras vão ficando mais certas. Por enquanto, o que vale é INVENTAR e REGISTRAR.",

  explicacaoAtiva: [
    { texto: "Escolhe o PERSONAGEM. Ex.: um HERÓI.", imagem: heroiImg, imagemAlt: "Herói" },
    { texto: "Escolhe o LUGAR. Ex.: a FLORESTA (embaixo da árvore).", imagem: arvoreImg, imagemAlt: "Árvore" },
    {
      texto: "Escolhe o PROBLEMA. Ex.: apareceu um DINOSSAURO grande.",
      imagem: dinossauroImg,
      imagemAlt: "Dinossauro",
      checagem: {
        pergunta: "Toda história precisa de quê?",
        opcoes: ["Personagem, lugar e problema", "Só o final"],
        correta: 0,
        explicacao: "Os 3 juntos formam a história.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Toda história tem alguém, um lugar e um problema.",
    nivel2: "Você inventa e desenha. Depois tenta escrever.",
    nivel3: "Escrever do seu jeito é ESCRITA ESPONTÂNEA — vale letra, rabisco ou pseudo-letra.",
    nivel4: "Escritor de verdade também rabisca, apaga, refaz. Todo texto começa bagunçado.",
  },

  exemploResolvido: {
    enunciado: "Invente uma micro-história com 1 personagem, 1 lugar, 1 problema, 1 final.",
    passos: [
      "Personagem: um MENINO.",
      "Lugar: a CASA da vovó.",
      "Problema: perdeu o brinquedo.",
      "Final: achou embaixo da cama.",
    ],
    resposta: "'O menino foi na vovó, perdeu o brinquedo, achou embaixo da cama. FIM.'",
    interativo: { tipo: "contagem", imagemUrl: livroImg, quantidade: 4, nomeItem: "parte", nomeItemPlural: "partes", pergunta: "Quantas partes minha história tem?" },
  },

  atividadeGuiada: {
    enunciado: "Pra escrever a história, qual objeto eu pego?",
    resposta: "Lápis e papel.",
    explicacao: "Lápis pra riscar, papel pra guardar.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Pra escrever, escolho…",
      opcoes: [
        { nome: "Lápis", imagemUrl: lapisImg },
        { nome: "Casa", imagemUrl: casaImg },
        { nome: "Dinossauro", imagemUrl: dinossauroImg },
      ],
      respostaCerta: "Lápis",
    },
  },

  exercicios: [
    { enunciado: "Quem inventa a história?", resposta: "Eu!", dica: "É a sua criatividade." },
    { enunciado: "Escrita espontânea é escrever do jeito…", resposta: "Que eu acho que é.", dica: "Sem medo de errar." },
    { enunciado: "Depois de escrever, o que eu faço?", resposta: "Conto a história pra alguém.", dica: "Compartilhar é a graça." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: monte uma história inteira.",
    resposta: "Personagem + lugar + problema + final.",
    visual: {
      cena: [
        { personagem: "Personagem", itemImagemUrl: meninoImg, quantidade: 1, cor: "#4C9EFF" },
        { personagem: "Lugar", itemImagemUrl: casaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Problema", itemImagemUrl: dinossauroImg, quantidade: 1, cor: "#F87171" },
      ],
      perguntas: [
        { pergunta: "Quem é o PERSONAGEM da minha história?", opcoes: ["Menino", "Casa"], correta: 0, explicacao: "Personagem é quem age." },
        { pergunta: "Onde acontece?", opcoes: ["Na casa", "No nada"], correta: 0, explicacao: "Casa é o lugar." },
        { pergunta: "O que dá o PROBLEMA?", opcoes: ["Aparece um dinossauro", "Nada acontece"], correta: 0, explicacao: "Sem problema não vira história." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Toda história tem personagem, lugar, problema e final.",
      "Você pode INVENTAR do zero.",
      "Escreva do seu JEITO (escrita espontânea).",
      "Conte a história depois — dá orgulho!",
    ],
    dica: "Em casa: pegue um caderno em branco e comece a coleção 'Minhas Histórias'.",
  },

  quiz: [
    { pergunta: "Precisa de PERSONAGEM na história?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Alguém precisa agir.", visual: { tipo: "itens", imagemUrl: heroiImg, quantidade: 1, rotulo: "Herói" } },
    { pergunta: "Posso escrever com minhas letras 'errado'?", opcoes: ["Sim — é espontânea", "Não"], correta: 0, explicacao: "Escrita espontânea vale.", visual: { tipo: "itens", imagemUrl: lapisImg, quantidade: 1, rotulo: "Lápis" } },
    { pergunta: "Depois de inventar, o que faço?", opcoes: ["Conto e mostro", "Escondo pra sempre"], correta: 0, explicacao: "História é feita pra compartilhar.", visual: { tipo: "itens", imagemUrl: meninaImg, quantidade: 1, rotulo: "Menina contando" } },
  ],

  conclusao: "🏅 Você é ESCRITOR! Missão em Casa: invente uma história com 3 desenhos e conte pra família.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Muitas histórias famosas começaram como bilhetinhos que crianças inventaram. Fantasia é a matéria-prima do livro.",
    imagemUrl: livroImg,
  },

  interativas: [
    {
      tipo: "ordenar",
      titulo: "Fase 1 · Montando a história",
      instrucao: "Ordem certa.",
      itens: ["Escolho o personagem", "Escolho o lugar", "Invento o problema", "Escrevo o final"],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Escrita espontânea",
      instrucao: "Escolha.",
      grupos: [{ imagemUrl: papelImg, quantidade: 1, rotulo: "Papel" }],
      pergunta: "Escrever do meu jeito, mesmo com letras diferentes, é…",
      opcoes: ["Escrita espontânea (vale!)", "Errado, não pode"],
      correta: 0,
      acerto: "Isso! Aos poucos as letras ficam certinhas.",
      erro: "Vale sim — é assim que se aprende.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Toda história tem personagem?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Alguém age.", visual: { tipo: "itens", imagemUrl: heroiImg, quantidade: 1, rotulo: "Herói" } },
    ],
    medio: [
      { pergunta: "Escrita espontânea é…?", opcoes: ["Escrever do meu jeito", "Copiar tudo pronto"], correta: 0, explicacao: "Do jeito da criança.", visual: { tipo: "itens", imagemUrl: papelImg, quantidade: 1, rotulo: "Papel" } },
    ],
    dificil: [
      { pergunta: "Minha história ficou pronta. Melhor:", opcoes: ["Contar pra alguém", "Rasgar"], correta: 0, explicacao: "Contar é o presente.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03EF07", titulo: "Que Texto é Esse?" },
};

export default aula;
