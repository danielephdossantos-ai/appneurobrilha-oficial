import type { Aula } from "../types";
import escolaImg from "@/assets/neuro-treino/objetos/escola.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import escovarImg from "@/assets/neuro-treino/objetos/escovar-dentes.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import sapoImg from "@/assets/neuro-treino/objetos/sapo.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";

/**
 * EF01LP21 — Aula 021
 * BNCC: Escrever, em colaboração, listas de regras e regulamentos da vida escolar.
 * Missão: "Combinados da Turma".
 */
const aula: Aula = {
  codigo: "EF01LP21",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Combinados da Turma",

  narrativa: {
    titulo: "Combinados da Turma",
    contexto:
      "A turminha da Floresta começou o ano nova e ninguém sabe como se comportar na sala: uns falam alto, outros esquecem de ajudar.",
    problema:
      "A Coruja diz: — Precisamos escrever COMBINADOS pra vivermos bem juntos!",
    convite: "Bora ajudar o Brilha a montar a LISTA DE REGRAS da turma?",
  },

  conhecimentosPrevios: [
    "Saber que a escola é um lugar coletivo.",
    "Escrever listas (EF01LP17).",
    "Perceber ações boas e ruins na convivência.",
  ],

  missao:
    "Escrever, em grupo, uma lista de REGRAS/COMBINADOS que ajudem a viver bem na sala e na escola.",

  objetivos: [
    "Perceber a importância das regras.",
    "Escrever regras curtas e claras.",
    "Colaborar com colegas.",
    "Respeitar combinados coletivos.",
  ],

  motivacao: "Regra boa é a que ajuda todo mundo a ser feliz!",

  explicacao:
    "REGRAS são combinados que ajudam a viver em grupo.\n\n📚 Na escola, por exemplo:\n1) Escutar quando o colega fala.\n2) Guardar os brinquedos depois de usar.\n3) Ajudar quem precisar.\n4) Não correr dentro da sala.\n\nRegras devem ser CURTAS e CLARAS.",

  explicacoesNiveis: {
    nivel1: "Regra = combinado do grupo.",
    nivel2: "Regra ajuda a viver bem juntos.",
    nivel3: "Escrevo em lista, uma regra por linha.",
    nivel4: "Regras podem começar com verbo: escutar, ajudar, guardar…",
  },

  exemploResolvido: {
    enunciado: "Escreva uma regra pra ninguém se machucar na sala.",
    passos: [
      "Pense no perigo: correr bate.",
      "Escrevo curto e claro.",
      "'Não correr dentro da sala.'",
    ],
    resposta: "NÃO CORRER DENTRO DA SALA. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque pra ouvir. Qual é uma boa regra da turma?",
    resposta: "ESCUTAR o colega quando fala.",
    explicacao: "Escutar é combinado bom pra todos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Boa regra:",
      opcoes: [
        { nome: "escutar", imagemUrl: corujaImg },
        { nome: "gritar", imagemUrl: balaoImg },
        { nome: "chutar", imagemUrl: bolaImg },
      ],
      respostaCerta: "escutar",
    },
  },

  exercicios: [
    { enunciado: "Regra pra usar o banheiro:", resposta: "LAVAR AS MÃOS.", dica: "Higiene." },
    { enunciado: "Regra pra hora do lanche:", resposta: "NÃO DESPERDIÇAR / dividir.", dica: "Cuidar do lanche." },
    { enunciado: "Regra pra brincar:", resposta: "GUARDAR OS BRINQUEDOS depois.", dica: "Deixar a sala organizada." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: escolha regras boas pra convivência escolar.",
    resposta: "Regra ajuda todos.",
    visual: {
      cena: [
        { personagem: "CORUJA", itemImagemUrl: corujaImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "ESCOLA", itemImagemUrl: escolaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "LIVRO", itemImagemUrl: livroImg, quantidade: 1, cor: "#34D399" },
        { personagem: "MAÇÃ", itemImagemUrl: macaImg, quantidade: 1, cor: "#EF4444" },
        { personagem: "CORAÇÃO", itemImagemUrl: coracaoImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Boa regra:", opcoes: ["Ajudar o colega", "Empurrar", "Gritar sempre"], correta: 0, explicacao: "Ajudar." },
        { pergunta: "Antes de comer:", opcoes: ["Lavar as mãos", "Nada", "Correr"], correta: 0, explicacao: "Higiene." },
        { pergunta: "Depois de brincar:", opcoes: ["Guardar os brinquedos", "Deixar tudo no chão", "Sair correndo"], correta: 0, explicacao: "Organização." },
        { pergunta: "Quando o professor fala:", opcoes: ["Escutar", "Falar por cima", "Sair da sala"], correta: 0, explicacao: "Escutar." },
        { pergunta: "Regra deve ser:", opcoes: ["Curta e clara", "Longa e confusa", "Escondida"], correta: 0, explicacao: "Curta e clara." },
      ],
    },
  },

  revisao: {
    pontos: [
      "🤝 Regras = combinados do grupo.",
      "📝 Uma regra por linha na lista.",
      "🎯 Curta e clara.",
      "💛 Faz o grupo viver bem.",
    ],
    dica: "Pergunte-se: essa regra AJUDA todo mundo?",
  },

  quiz: [
    { pergunta: "Regra serve pra:", opcoes: ["Viver bem juntos", "Bagunçar", "Chatear"], correta: 0, explicacao: "Viver bem." },
    { pergunta: "Boa regra:", opcoes: ["Escutar o colega", "Empurrar", "Gritar"], correta: 0, explicacao: "Escutar." },
    { pergunta: "Depois de brincar:", opcoes: ["Guardar brinquedos", "Deixar espalhado", "Ir embora"], correta: 0, explicacao: "Guardar." },
    { pergunta: "Regra deve ser:", opcoes: ["Curta e clara", "Enorme e difícil", "Só desenho"], correta: 0, explicacao: "Curta e clara." },
    { pergunta: "Combinar em grupo é:", opcoes: ["Colaborar", "Competir", "Brigar"], correta: 0, explicacao: "Colaborar." },
  ],

  conclusao:
    "🏅 Medalha conquistada: Combinador da Turma! Missão em Família: escrevam juntos 3 combinados da casa (ex.: guardar sapato, lavar mãos, ajudar na mesa).",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Toda escola do mundo tem regras — assim, crianças de idades diferentes podem estudar juntas em paz!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Escutar o colega",
      instrucao: "Toque pra ouvir. Qual é uma boa regra?",
      pergunta: "Boa regra:",
      opcoes: [
        { nome: "ESCUTAR", imagemUrl: corujaImg, rotulo: "🦉 ESCUTAR" },
        { nome: "GRITAR", imagemUrl: balaoImg, rotulo: "🎈 GRITAR" },
        { nome: "CHUTAR", imagemUrl: bolaImg, rotulo: "⚽ CHUTAR" },
      ],
      correta: 0,
      acerto: "🦉 Escutar é ótimo combinado!",
      erro: "Boas regras cuidam do grupo — ESCUTAR ajuda.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Higiene",
      instrucao: "Toque pra ouvir. Regra antes de comer:",
      figura: { imagemUrl: escovarImg, rotulo: "🧼" },
      pergunta: "Regra certa:",
      opcoes: ["LAVAR AS MÃOS", "CORRER", "GRITAR"],
      correta: 0,
      acerto: "🧼 Lavar as mãos!",
      erro: "Antes de comer = LAVAR AS MÃOS.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Depois de brincar",
      instrucao: "Toque pra ouvir. Regra depois de brincar:",
      figura: { imagemUrl: bolaImg, rotulo: "🧸" },
      pergunta: "Escolha:",
      opcoes: ["GUARDAR OS BRINQUEDOS", "DEIXAR NO CHÃO", "IR EMBORA"],
      correta: 0,
      acerto: "🧸 GUARDAR os brinquedos!",
      erro: "Depois de brincar = GUARDAR.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Bom ou Ruim combinado?",
      instrucao: "Arraste cada regra pro grupo certo.",
      pares: [
        { item: "Ajudar o colega", alvo: "BOM" },
        { item: "Escutar quem fala", alvo: "BOM" },
        { item: "Empurrar na fila", alvo: "RUIM" },
      ],
      alvosVisuais: [
        { nome: "BOM", cor: "#34D399", capacidade: 2 },
        { nome: "RUIM", cor: "#EF4444", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Cartaz da Turma",
      instrucao: "A Coruja quer um cartaz na sala. Que texto colocar?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "REGRAS", imagemUrl: coracaoImg, rotulo: "💛 Lista de combinados" },
        { nome: "RECEITA", imagemUrl: macaImg, rotulo: "🍎 Receita de bolo" },
        { nome: "PARLENDA", imagemUrl: sapoImg, rotulo: "🐸 Parlenda" },
      ],
      correta: 0,
      acerto: "💛 Cartaz de COMBINADOS da turma!",
      erro: "Pra convivência = cartaz de REGRAS.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Regra é:", opcoes: ["Combinado do grupo", "Segredo", "Brincadeira só"], correta: 0, explicacao: "Combinado.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "🤝" } },
      { pergunta: "Boa regra:", opcoes: ["Ajudar", "Empurrar", "Bagunçar"], correta: 0, explicacao: "Ajudar.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🌟" } },
      { pergunta: "Antes de comer:", opcoes: ["Lavar mãos", "Correr", "Pular"], correta: 0, explicacao: "Lavar mãos.", visual: { tipo: "itens", imagemUrl: escovarImg, quantidade: 1, rotulo: "🧼" } },
    ],
    medio: [
      { pergunta: "Regra da sala boa:", opcoes: ["Escutar quem fala", "Falar por cima", "Sair"], correta: 0, explicacao: "Escutar.", visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🧏" } },
      { pergunta: "Depois de brincar:", opcoes: ["Guardar brinquedos", "Deixar espalhado", "Chorar"], correta: 0, explicacao: "Guardar.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "🧸" } },
      { pergunta: "Regra é escrita:", opcoes: ["Curta e clara", "Longa", "Escondida"], correta: 0, explicacao: "Curta e clara.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📝" } },
    ],
    dificil: [
      { pergunta: "Combinar em grupo é:", opcoes: ["Colaborar", "Brigar", "Fugir"], correta: 0, explicacao: "Colaborar.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "🤝" } },
      { pergunta: "Regra sem sentido:", opcoes: ["Deve ser mudada", "Ficar sempre", "Ninguém liga"], correta: 0, explicacao: "Repensar.", visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🔁" } },
      { pergunta: "Todos escrevem juntos:", opcoes: ["Fica mais justo", "Fica pior", "Não muda"], correta: 0, explicacao: "Mais justo.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "👥" } },
    ],
  },

  proximaHabilidade: { codigo: "EF01LP22" },
};

export default aula;
