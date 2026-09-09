import type { Aula } from "../types";
import { url as tamborImg } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as chocalhoImg } from "@/assets/neuro-treino/objetos/chocalho.png.asset.json";
import { url as palmasImg } from "@/assets/neuro-treino/sentidos/palmas.png.asset.json";
import { url as passaroImg } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as leaoImg } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as sinoImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json"; // fallback visual
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as felizImg } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import { url as tranquiloImg } from "@/assets/brilha-vida/emocoes/tranquilo.png.asset.json";

/**
 * EI03TS03 — Traços, Sons, Cores e Formas
 * Aula 3: Qualidades do som (alto/baixo, forte/fraco, curto/longo, grave/agudo)
 */
const aula: Aula = {
  codigo: "EI03TS03",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Alto, Baixo, Forte, Fraco",

  narrativa: {
    titulo: "Os sons se confundiram",
    contexto: "Na floresta, o leão ruge, o passarinho pia e o vento sopra. Todos os sons se misturaram e ninguém entende mais nada.",
    problema: "Pra colocar cada som no lugar, a gente precisa aprender: som FORTE, som FRACO, som CURTO, som LONGO, som GRAVE (grosso) e som AGUDO (fino).",
    convite: "Bora escutar com atenção?",
  },

  conhecimentosPrevios: ["Reconhece que existem sons.", "Já bateu palma forte e fraco.", "Já ouviu leão e passarinho."],

  missao: "Descobrir que os sons podem ser FORTES ou FRACOS, LONGOS ou CURTOS, GROSSOS ou FININHOS.",

  objetivos: [
    "Diferenciar som forte de som fraco (intensidade).",
    "Diferenciar som longo de som curto (duração).",
    "Diferenciar som grosso (grave) de fino (agudo).",
  ],

  explicacao: "Todo som tem QUALIDADES:\n\n• FORTE ou FRACO — o leão RUGE forte, o passarinho pia fraquinho.\n• LONGO ou CURTO — o tambor bate CURTO (TUM!), a sirene toca LONGO (uuuuu).\n• GROSSO (grave) ou FINO (agudo) — voz do papai é grossa, voz do bebê é fina.\n\nEscutar com atenção ajuda a gente a entender o mundo.",

  explicacaoAtiva: [
    { texto: "O leão RUGE bem FORTE! Todo mundo ouve de longe.", imagem: leaoImg, imagemAlt: "Leão rugindo" },
    { texto: "O passarinho pia FRACO — piu-piu, bem baixinho.", imagem: passaroImg, imagemAlt: "Passarinho" },
    {
      texto: "As palmas podem ser fortes (PLAF!) ou fracas (plaf...).",
      imagem: palmasImg,
      imagemAlt: "Palmas",
      checagem: {
        pergunta: "Qual som é mais FORTE?",
        opcoes: ["Leão rugindo", "Passarinho piando"],
        correta: 0,
        explicacao: "O leão faz muito mais barulho que o passarinho.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Tem som forte e tem som fraco.",
    nivel2: "O tambor é grave (grosso), o chocalho é agudo (fininho).",
    nivel3: "Som curto dura um tiquinho. Som longo se estica.",
    nivel4: "A gente usa essas diferenças pra fazer música: forte, fraco, rápido, devagar.",
  },

  exemploResolvido: {
    enunciado: "Vamos bater 2 palmas BEM FORTES!",
    passos: ["Junte as duas mãos.", "Bata a primeira palma: PLAF!", "Bata a segunda: PLAF!"],
    resposta: "2 palmas fortes — todo mundo ouviu!",
    interativo: { tipo: "contagem", imagemUrl: palmasImg, quantidade: 2, nomeItem: "palma forte", nomeItemPlural: "palmas fortes", pergunta: "Quantas palmas fortes você bateu?" },
  },

  atividadeGuiada: {
    enunciado: "Qual bicho faz o som MAIS FORTE?",
    resposta: "O leão.",
    explicacao: "O rugido do leão é o som mais forte da floresta.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual faz o som mais FORTE?",
      opcoes: [
        { nome: "Leão", imagemUrl: leaoImg },
        { nome: "Passarinho", imagemUrl: passaroImg },
        { nome: "Chocalho", imagemUrl: chocalhoImg },
      ],
      respostaCerta: "Leão",
    },
  },

  exercicios: [
    { enunciado: "🦁 O rugido do leão é forte ou fraco?", resposta: "Forte!", dica: "Ele acorda a floresta inteira." },
    { enunciado: "🐦 O piado do passarinho é forte ou fraco?", resposta: "Fraco / baixinho.", dica: "Piu-piu bem fininho." },
    { enunciado: "🥁 Bater no tambor uma vez é som CURTO ou LONGO?", resposta: "Curto — TUM!", dica: "Dura um tiquinho." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: cada som tem uma qualidade. Descubra qual é FORTE, FRACO, CURTO ou LONGO.",
    resposta: "Leão forte, passarinho fraco, tambor curto.",
    visual: {
      cena: [
        { personagem: "Leão", itemImagemUrl: leaoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Passarinho", itemImagemUrl: passaroImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Tambor", itemImagemUrl: tamborImg, quantidade: 1, cor: "#F87171" },
      ],
      perguntas: [
        { pergunta: "Qual som é FORTE?", opcoes: ["Rugido do leão", "Piado do passarinho"], correta: 0, explicacao: "O leão faz muito barulho." },
        { pergunta: "Qual som é FRACO / baixinho?", opcoes: ["Leão", "Passarinho"], correta: 1, explicacao: "O passarinho pia fraquinho." },
        { pergunta: "TUM! do tambor é CURTO ou LONGO?", opcoes: ["Curto", "Longo"], correta: 0, explicacao: "Uma batida dura um tiquinho." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Som pode ser FORTE ou FRACO.",
      "Som pode ser CURTO ou LONGO.",
      "Som pode ser GROSSO (grave) ou FINO (agudo).",
      "Escutar com atenção ajuda a entender o mundo.",
    ],
    dica: "Em casa: bata palma bem forte e depois bem fraquinho — sinta a diferença!",
  },

  quiz: [
    { pergunta: "Rugido do leão é...", opcoes: ["Forte", "Fraco"], correta: 0, explicacao: "Muito forte!", visual: { tipo: "itens", imagemUrl: leaoImg, quantidade: 1, rotulo: "Leão" } },
    { pergunta: "Piado do passarinho é...", opcoes: ["Forte", "Fraquinho"], correta: 1, explicacao: "Bem baixinho.", visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "Passarinho" } },
    { pergunta: "Uma batida de tambor dura...", opcoes: ["Muito tempo", "Um tiquinho (curto)"], correta: 1, explicacao: "Som curto: TUM!", visual: { tipo: "itens", imagemUrl: tamborImg, quantidade: 1, rotulo: "Tambor" } },
  ],

  conclusao: "🏅 Você aprendeu a ESCUTAR de verdade! Missão em Casa: ouça 3 sons na sua casa e diga se são fortes, fracos, curtos ou longos.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Os elefantes fazem sons TÃO GRAVES que a gente nem escuta — só sente o chão vibrar!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Quantas palmas fortes?", instrucao: "Toque em cada palma.", grupos: [{ imagemUrl: palmasImg, quantidade: 3, rotulo: "Palmas fortes" }], pergunta: "Quantas palmas fortes?", opcoes: ["2", "3", "4"], correta: 1, acerto: "Isso! 3 palmas fortes.", erro: "1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Quantos rugidos?", instrucao: "Toque em cada leão.", grupos: [{ imagemUrl: leaoImg, quantidade: 2, rotulo: "Leões" }], pergunta: "Quantos rugidos vamos ouvir?", opcoes: ["1", "2", "3"], correta: 1, acerto: "Muito bem! 2 rugidos.", erro: "Um, dois — 2." },
    { tipo: "ligar", titulo: "Fase 3 · Som forte ou fraco?", instrucao: "Ligue o bicho ao tipo de som.", pares: [
      { a: "Leão", b: "Som FORTE", aImagem: leaoImg, aQuantidade: 1 },
      { a: "Passarinho", b: "Som FRACO", aImagem: passaroImg, aQuantidade: 1 },
      { a: "Tambor", b: "Som CURTO", aImagem: tamborImg, aQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Cada som no lugar", instrucao: "Toque na estrela e depois no som certo.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "Forte", cor: "#F87171", capacidade: 1, imagemUrl: leaoImg },
      { nome: "Fraco", cor: "#60A5FA", capacidade: 1, imagemUrl: passaroImg },
      { nome: "Curto", cor: "#FBBF24", capacidade: 1, imagemUrl: tamborImg },
    ], pares: [
      { item: "RUUUGE!", alvo: "Forte" },
      { item: "piu-piu", alvo: "Fraco" },
      { item: "TUM!", alvo: "Curto" },
    ] },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Leão faz som FORTE ou fraco?", opcoes: ["Forte", "Fraco"], correta: 0, explicacao: "Muito forte.", visual: { tipo: "itens", imagemUrl: leaoImg, quantidade: 1, rotulo: "Leão" } },
      { pergunta: "Passarinho faz som FORTE ou fraco?", opcoes: ["Forte", "Fraco"], correta: 1, explicacao: "Fraquinho.", visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "Passarinho" } },
    ],
    medio: [
      { pergunta: "TUM! de tambor é curto ou longo?", opcoes: ["Curto", "Longo"], correta: 0, explicacao: "Curto.", visual: { tipo: "itens", imagemUrl: tamborImg, quantidade: 1, rotulo: "Tambor" } },
      { pergunta: "Chocalho balançado tem som...", opcoes: ["Fininho (agudo)", "Grosso (grave)"], correta: 0, explicacao: "Chocalho é agudo.", visual: { tipo: "itens", imagemUrl: chocalhoImg, quantidade: 1, rotulo: "Chocalho" } },
    ],
    dificil: [
      { pergunta: "Quando eu ESCUTO com atenção, eu percebo mais coisas?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Ouvidos atentos descobrem muito.", visual: { tipo: "itens", imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Silêncio pra escutar" } },
      { pergunta: "Música tem som forte E fraco ao mesmo tempo?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "É a mistura que faz música bonita.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Música" } },
    ],
  },
};

void sinoImg;

export default aula;
