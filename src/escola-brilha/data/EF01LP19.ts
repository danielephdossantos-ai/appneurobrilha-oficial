import type { Aula } from "../types";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import sapoImg from "@/assets/neuro-treino/objetos/sapo.png";
import ratoImg from "@/assets/neuro-treino/objetos/rato.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import galinhaImg from "@/assets/neuro-treino/objetos/galinha.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";
import tamborImg from "@/assets/neuro-treino/objetos/tambor.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF01LP19 — Aula 019
 * BNCC: Recitar parlendas, quadras, quadrinhas, trava-línguas com entonação e rimas.
 * Missão: "O Palco das Rimas".
 */
const aula: Aula = {
  codigo: "EF01LP19",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Palco das Rimas",

  narrativa: {
    titulo: "O Palco das Rimas",
    contexto:
      "O Teatro da Floresta abriu seu palco pra um FESTIVAL DE PARLENDAS! Cada bichinho vai recitar uma quadrinha.",
    problema:
      "Mas o Brilha esqueceu como falar com ritmo e onde marcar as rimas.",
    convite: "Bora ajudar o Brilha a treinar a fala e brilhar no palco?",
  },

  conhecimentosPrevios: [
    "Conhecer parlendas (EF01LP16).",
    "Perceber palavras que rimam.",
    "Falar em voz alta em pequenos grupos.",
  ],

  missao:
    "Recitar parlendas, quadras e trava-línguas usando ENTONAÇÃO (subir e descer a voz) e destacando as RIMAS.",

  objetivos: [
    "Falar com ritmo e entonação.",
    "Destacar as rimas do final dos versos.",
    "Ter coragem de se apresentar.",
    "Brincar com trava-línguas.",
  ],

  motivacao:
    "Recitar é dar vida ao versinho — cada palavra vira música!",

  explicacao:
    "RECITAR é falar um poema/parlenda em voz alta, com ritmo.\n\n🎤 Cuide de 3 coisas:\n1) VELOCIDADE (nem rápido, nem devagar demais);\n2) VOZ (subir e descer);\n3) RIMA (destacar o final que combina).\n\n🐭 'O RATO roeu a roupa do REI de ROMA' — repare no R!",

  explicacoesNiveis: {
    nivel1: "Recitar = falar em voz alta com ritmo.",
    nivel2: "Rima é o som parecido no final dos versos.",
    nivel3: "Entonação é subir/descer a voz.",
    nivel4: "Trava-língua se recita rápido, sem tropeçar.",
  },

  exemploResolvido: {
    enunciado: "Qual palavra rima com 'PÉ' na parlenda do sapo?",
    passos: [
      "'O sapo não lava o PÉ, não lava porque não QUER…'",
      "PÉ e QUER têm sons próximos no final.",
      "Rima: PÉ / QUER.",
    ],
    resposta: "QUER rima com PÉ. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque pra ouvir. Qual palavra rima com 'VIZINHO'?",
    resposta: "AMARELINHO.",
    explicacao: "AMARELINHO e VIZINHO terminam no mesmo som.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Rima com VIZINHO:",
      opcoes: [
        { nome: "amarelinho", imagemUrl: galinhaImg },
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "sapo", imagemUrl: sapoImg },
      ],
      respostaCerta: "amarelinho",
    },
  },

  exercicios: [
    { enunciado: "Rima com PÉ:", resposta: "QUER (ou café).", dica: "Som final parecido." },
    { enunciado: "Rima com CORAÇÃO:", resposta: "MÃO / IRMÃO.", dica: "Final ÃO." },
    { enunciado: "Trava-língua eu recito:", resposta: "RÁPIDO.", dica: "Sem tropeçar." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: acerte as rimas e o jeito de recitar.",
    resposta: "Ritmo + rima = show!",
    visual: {
      cena: [
        { personagem: "SAPO", itemImagemUrl: sapoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "RATO", itemImagemUrl: ratoImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "GATO", itemImagemUrl: gatoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "GALINHA", itemImagemUrl: galinhaImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "TAMBOR", itemImagemUrl: tamborImg, quantidade: 1, cor: "#EF4444" },
      ],
      perguntas: [
        { pergunta: "Rima com PÉ:", opcoes: ["QUER", "MÃO", "OLHO"], correta: 0, explicacao: "Pé/quer." },
        { pergunta: "Rima com VIZINHO:", opcoes: ["AMARELINHO", "AZUL", "GRANDE"], correta: 0, explicacao: "Vizinho/amarelinho." },
        { pergunta: "Trava-língua se fala:", opcoes: ["Rápido", "Chorando", "Sussurrando"], correta: 0, explicacao: "Rápido." },
        { pergunta: "Recitar bem exige:", opcoes: ["Ritmo e entonação", "Só volume alto", "Silêncio"], correta: 0, explicacao: "Ritmo e voz." },
        { pergunta: "Rima é:", opcoes: ["Som parecido no fim", "Cor igual", "Tamanho igual"], correta: 0, explicacao: "Som final parecido." },
      ],
    },
  },

  revisao: {
    pontos: [
      "🎤 Recitar = falar com ritmo e voz.",
      "🎵 Rima = som parecido no final.",
      "🔊 Entonação = subir e descer a voz.",
      "👅 Trava-língua = falar rápido.",
    ],
    dica: "Antes de recitar, respire e sinta a batida do verso.",
  },

  quiz: [
    { pergunta: "Rima com PÉ:", opcoes: ["QUER", "MÃO", "SOL"], correta: 0, explicacao: "Pé/quer." },
    { pergunta: "Rima com CORAÇÃO:", opcoes: ["MÃO", "PÉ", "OLHO"], correta: 0, explicacao: "Coração/mão." },
    { pergunta: "Recitar é:", opcoes: ["Falar com ritmo", "Só ler baixinho", "Escrever"], correta: 0, explicacao: "Falar com ritmo." },
    { pergunta: "Trava-língua:", opcoes: ["Rápido sem tropeçar", "Muito devagar", "Chorando"], correta: 0, explicacao: "Rápido." },
    { pergunta: "Entonação é:", opcoes: ["Subir/descer a voz", "Falar sempre igual", "Ficar mudo"], correta: 0, explicacao: "Variar a voz." },
  ],

  conclusao:
    "🏅 Medalha conquistada: Estrela do Palco das Rimas! Missão em Família: montem um palquinho em casa e cada um recita uma parlenda favorita.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Antes de os livros existirem, todo poema era decorado e RECITADO — os contadores eram as bibliotecas do mundo!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Rima com PÉ",
      instrucao: "Toque pra ouvir. Qual palavra rima com PÉ?",
      pergunta: "Rima com PÉ:",
      opcoes: [
        { nome: "QUER", imagemUrl: sapoImg, rotulo: "🐸 QUER (o sapo não QUER)" },
        { nome: "MÃO", imagemUrl: gatoImg, rotulo: "🐱 MÃO" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
      ],
      correta: 0,
      acerto: "🎉 PÉ rima com QUER.",
      erro: "Escute o final: Pé / Quer.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Rima com VIZINHO",
      instrucao: "Toque pra ouvir. Rima com VIZINHO:",
      figura: { imagemUrl: galinhaImg, rotulo: "🐔🥚" },
      pergunta: "Escolha:",
      opcoes: ["AMARELINHO", "AZUL", "GRANDE"],
      correta: 0,
      acerto: "🥚 Vizinho / Amarelinho!",
      erro: "Final -INHO combina.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Trava-língua",
      instrucao: "Toque pra ouvir. Como se recita um trava-língua?",
      figura: { imagemUrl: ratoImg, rotulo: "🐭" },
      pergunta: "Modo certo:",
      opcoes: ["RÁPIDO sem tropeçar", "Muito devagar", "Chorando"],
      correta: 0,
      acerto: "🎤 RÁPIDO sem errar!",
      erro: "Trava-língua = rápido.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Rima ou Não?",
      instrucao: "Arraste cada par de palavras pro grupo certo.",
      pares: [
        { item: "PÉ · CAFÉ", alvo: "RIMA" },
        { item: "MÃO · CORAÇÃO", alvo: "RIMA" },
        { item: "GATO · SOL", alvo: "NÃO RIMA" },
      ],
      alvosVisuais: [
        { nome: "RIMA", cor: "#34D399", capacidade: 2 },
        { nome: "NÃO RIMA", cor: "#EF4444", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Palco da Coruja",
      instrucao: "A Coruja pergunta: pra recitar bem, o mais importante é…",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "RITMO", imagemUrl: tamborImg, rotulo: "🥁 Ritmo e entonação" },
        { nome: "GRITAR", imagemUrl: balaoImg, rotulo: "🎈 Gritar bem alto" },
        { nome: "CALADO", imagemUrl: estrelaImg, rotulo: "⭐ Ficar calado" },
      ],
      correta: 0,
      acerto: "🥁 Ritmo e entonação!",
      erro: "O segredo é RITMO + entonação.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Rima com PÉ:", opcoes: ["QUER", "MÃO", "SOL"], correta: 0, explicacao: "Pé/quer.", visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "🐸" } },
      { pergunta: "Rima com VIZINHO:", opcoes: ["AMARELINHO", "GRANDE", "AZUL"], correta: 0, explicacao: "-INHO.", visual: { tipo: "itens", imagemUrl: galinhaImg, quantidade: 1, rotulo: "🐔" } },
      { pergunta: "Recitar é:", opcoes: ["Falar com ritmo", "Escrever", "Dançar"], correta: 0, explicacao: "Falar com ritmo.", visual: { tipo: "itens", imagemUrl: tamborImg, quantidade: 1, rotulo: "🎤" } },
    ],
    medio: [
      { pergunta: "Rima com MÃO:", opcoes: ["CORAÇÃO", "PÉ", "GATO"], correta: 0, explicacao: "-ÃO.", visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "❤️" } },
      { pergunta: "Trava-língua:", opcoes: ["Rápido", "Devagar", "Mudo"], correta: 0, explicacao: "Rápido.", visual: { tipo: "itens", imagemUrl: ratoImg, quantidade: 1, rotulo: "👅" } },
      { pergunta: "Entonação é:", opcoes: ["Subir/descer a voz", "Volume igual", "Silêncio"], correta: 0, explicacao: "Variar a voz.", visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 1, rotulo: "📈" } },
    ],
    dificil: [
      { pergunta: "Pra recitar bem preciso:", opcoes: ["Respirar e treinar", "Nunca ensaiar", "Correr"], correta: 0, explicacao: "Respirar e treinar.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🌬️" } },
      { pergunta: "Onde a rima aparece?", opcoes: ["No final do verso", "No começo", "Só na 1ª palavra"], correta: 0, explicacao: "Final do verso.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "🔚" } },
      { pergunta: "Recitar em grupo:", opcoes: ["Fica ainda mais legal", "Não pode", "É proibido"], correta: 0, explicacao: "É ótimo em grupo.", visual: { tipo: "itens", imagemUrl: galinhaImg, quantidade: 1, rotulo: "👥" } },
    ],
  },

  proximaHabilidade: { codigo: "EF01LP20" },
};

export default aula;
