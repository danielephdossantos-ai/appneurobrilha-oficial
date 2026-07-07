import type { Aula } from "../types";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import chuvaImg from "@/assets/neuro-treino/objetos/chuva.png";
import nuvemImg from "@/assets/neuro-treino/objetos/nuvem.png";
import ventoImg from "@/assets/neuro-treino/objetos/vento.png";
import arcoIrisImg from "@/assets/neuro-treino/objetos/arco-iris.png";
import diaImg from "@/assets/neuro-treino/objetos/dia.png";
import noiteImg from "@/assets/neuro-treino/objetos/noite.png";
import luaImg from "@/assets/neuro-treino/objetos/lua.png";
import sombrinhaImg from "@/assets/neuro-treino/objetos/sombrinha.png";
import casacoImg from "@/assets/neuro-treino/objetos/casaco.png";
import camisetaImg from "@/assets/neuro-treino/objetos/camiseta.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import regadorImg from "@/assets/neuro-treino/objetos/regador.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import pipaImg from "@/assets/neuro-treino/objetos/pipa.png";
import lagoImg from "@/assets/neuro-treino/objetos/lago.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import bolaPraiaImg from "@/assets/neuro-treino/objetos/bola-praia.png";

/**
 * EF01GE10 — Geografia · 1º Ano
 * Missão: "As Danças Do Céu"
 * Descrever características do lugar de vivência relacionadas
 * aos ritmos da natureza (chuva, vento, calor).
 */
const aula: Aula = {
  codigo: "EF01GE10",
  ano: "1º Ano",
  disciplina: "Geografia",
  titulo: "As Danças Do Céu",

  narrativa: {
    titulo: "O Céu Fala Todo Dia",
    contexto:
      "Brilha olha pro CÉU 🌤️ e escuta a Coruja Sábia dizer: 'Cada dia o céu conta uma HISTÓRIA — sol, chuva, vento, arco-íris…'",
    problema:
      "A vila do Brilha muda com o clima: quando chove, as flores bebem; quando venta, as pipas dançam. Bora observar essas DANÇAS DO CÉU!",
    convite: "Vem descobrir o que o CÉU está fazendo hoje?",
  },

  conhecimentosPrevios: [
    "Reconhecer sol, chuva e nuvens.",
    "Perceber diferenças entre dia e noite.",
  ],

  missao:
    "Observar e descrever elementos do clima (chuva, vento, calor, sol) no lugar de vivência.",

  objetivos: [
    "Reconhecer diferentes elementos do clima.",
    "Descrever o tempo do dia (sol, chuva, vento).",
    "Perceber mudanças naturais ao longo do dia.",
    "Associar clima a ações do cotidiano.",
    "Valorizar a observação da natureza.",
  ],

  motivacao: "O CÉU muda todo dia — e a gente também 🌦️.",

  explicacao:
    "☀️ SOL — traz calor e luz.\n🌧️ CHUVA — molha e refresca a terra.\n💨 VENTO — mexe as folhas e leva pipas.\n☁️ NUVEM — carrega chuva ou dá sombra.\n🌈 ARCO-ÍRIS — aparece depois da chuva com sol.",

  explicacoesNiveis: {
    nivel1: "O TEMPO muda todo dia — pode ter sol, chuva ou vento.",
    nivel2: "Cada elemento (sol, chuva, vento) muda o que a gente faz.",
    nivel3: "Chuva + sol = arco-íris.",
    nivel4: "Observar o CÉU ajuda a se preparar pro dia.",
  },

  exemploResolvido: {
    enunciado: "O que aparece depois da CHUVA quando tem SOL?",
    passos: [
      "Chove.",
      "O sol volta.",
      "As gotinhas refletem cores.",
    ],
    resposta: "🌈 ARCO-ÍRIS!",
  },

  atividadeGuiada: {
    enunciado: "Qual desses elementos do CÉU dá CALOR?",
    resposta: "☀️ SOL!",
    explicacao: "O sol aquece a Terra e ilumina o dia.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é o SOL?",
      opcoes: [
        { nome: "sol", imagemUrl: solImg },
        { nome: "chuva", imagemUrl: chuvaImg },
        { nome: "lua", imagemUrl: luaImg },
      ],
      respostaCerta: "sol",
    },
  },

  exercicios: [
    { enunciado: "O que a CHUVA faz?", resposta: "💧 MOLHA e refresca.", dica: "Bom pras plantas." },
    { enunciado: "O VENTO faz o que?", resposta: "💨 MEXE folhas e balões.", dica: "Empurra coisas leves." },
    { enunciado: "Quando o SOL brilha muito?", resposta: "🥵 Faz CALOR.", dica: "Sensação de quente." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra o que o CÉU está fazendo!",
    resposta: "Cada elemento tem seu efeito.",
    visual: {
      perguntas: [
        {
          pergunta: "☀️ Sol brilhando forte = ?",
          opcoes: ["Calor", "Frio", "Chuva"],
          correta: 0,
          explicacao: "Sol aquece.",
          visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" },
        },
        {
          pergunta: "🌧️ Chuva forte = ?",
          opcoes: ["Molha tudo", "Sol quente", "Vento forte"],
          correta: 0,
          explicacao: "Chuva molha.",
          visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "🌧️" },
        },
        {
          pergunta: "💨 Vento forte é bom pra…",
          opcoes: ["Soltar pipa", "Ficar molhado", "Dormir"],
          correta: 0,
          explicacao: "Vento sustenta a pipa.",
          visual: { tipo: "itens", imagemUrl: pipaImg, quantidade: 1, rotulo: "🪁" },
        },
        {
          pergunta: "☁️ Nuvem escura pode trazer…",
          opcoes: ["Chuva", "Sol", "Neve na praia"],
          correta: 0,
          explicacao: "Nuvem carrega chuva.",
          visual: { tipo: "itens", imagemUrl: nuvemImg, quantidade: 1, rotulo: "☁️" },
        },
        {
          pergunta: "🌈 Arco-íris aparece com…",
          opcoes: ["Sol + chuva", "Só noite", "Só vento"],
          correta: 0,
          explicacao: "Depende da combinação.",
          visual: { tipo: "itens", imagemUrl: arcoIrisImg, quantidade: 1, rotulo: "🌈" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "☀️ SOL — calor e luz.",
      "🌧️ CHUVA — molha e refresca.",
      "💨 VENTO — mexe as coisas.",
      "☁️ NUVEM — pode trazer chuva.",
      "🌈 ARCO-ÍRIS — sol + chuva juntos.",
    ],
    dica: "Ao acordar, olhe pro céu e diga: 'Hoje o céu está…'.",
  },

  quiz: [
    {
      pergunta: "O SOL traz…",
      opcoes: ["Calor e luz", "Chuva", "Frio"],
      correta: 0,
      explicacao: "Aquece.",
      visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" },
    },
    {
      pergunta: "A CHUVA…",
      opcoes: ["Molha e refresca", "Ilumina", "Faz vento"],
      correta: 0,
      explicacao: "Ela cai do céu.",
      visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "🌧️" },
    },
    {
      pergunta: "O VENTO faz a PIPA…",
      opcoes: ["Voar", "Cair", "Sumir"],
      correta: 0,
      explicacao: "Sustenta a pipa.",
      visual: { tipo: "itens", imagemUrl: pipaImg, quantidade: 1, rotulo: "🪁" },
    },
    {
      pergunta: "NUVEM ESCURA sinaliza…",
      opcoes: ["Chuva a caminho", "Muito sol", "Nada"],
      correta: 0,
      explicacao: "Nuvem carregada = chuva.",
      visual: { tipo: "itens", imagemUrl: nuvemImg, quantidade: 1, rotulo: "☁️" },
    },
    {
      pergunta: "Quando aparece o ARCO-ÍRIS?",
      opcoes: ["Sol + chuva", "Só de noite", "Nunca"],
      correta: 0,
      explicacao: "Combinação especial.",
      visual: { tipo: "itens", imagemUrl: arcoIrisImg, quantidade: 1, rotulo: "🌈" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Leitor do Céu! 🌤️ Item desbloqueado: Álbum das Danças do Céu.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O ARCO-ÍRIS 🌈 aparece porque a LUZ DO SOL atravessa as gotinhas de CHUVA no ar e se separa em SETE cores. Se você mover o corpo, ele parece mudar de lugar!",
  },

  interativas: [
    // APRENDENDO — lupa: elementos do céu
    {
      tipo: "lupa",
      titulo: "Danças Do Céu",
      instrucao: "Toque em cada elemento do céu 🌤️ pra ouvir o que ele faz.",
      itens: [
        { nome: "Sol", imagemUrl: solImg, rotulo: "☀️ SOL", descoberta: "Traz CALOR e LUZ pro dia." },
        { nome: "Chuva", imagemUrl: chuvaImg, rotulo: "🌧️ CHUVA", descoberta: "MOLHA a terra e refresca tudo." },
        { nome: "Vento", imagemUrl: ventoImg, rotulo: "💨 VENTO", descoberta: "MEXE folhas, cabelos e leva pipas voando." },
        { nome: "Nuvem", imagemUrl: nuvemImg, rotulo: "☁️ NUVEM", descoberta: "Pode dar SOMBRA ou trazer chuva." },
        { nome: "Arco-íris", imagemUrl: arcoIrisImg, rotulo: "🌈 ARCO-ÍRIS", descoberta: "Aparece quando SOL e CHUVA se encontram." },
        { nome: "Coruja Sábia", imagemUrl: corujaImg, rotulo: "🦉 CORUJA", descoberta: "Olhar pro céu ajuda a conhecer o dia." },
      ],
    },

    // FASE 1 — escolherFigura: encontrar chuva
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Cadê A CHUVA?",
      instrucao: "Toque no elemento do céu que MOLHA a terra.",
      pergunta: "Onde está a CHUVA? 🌧️",
      opcoes: [
        { nome: "chuva", imagemUrl: chuvaImg, rotulo: "CHUVA" },
        { nome: "sol", imagemUrl: solImg, rotulo: "SOL" },
        { nome: "arco-íris", imagemUrl: arcoIrisImg, rotulo: "ARCO-ÍRIS" },
      ],
      correta: 0,
      acerto: "💧 Chuva encontrada!",
      erro: "Esse não molha — procure as gotinhas.",
    },

    // FASE 2 — ligar: elemento ↔ efeito
    {
      tipo: "ligar",
      titulo: "Fase 2 · O Que Cada Um Faz",
      instrucao: "Ligue cada elemento do CÉU ao seu efeito.",
      pares: [
        { a: "☀️ Sol", b: "Aquece", aImagem: solImg },
        { a: "🌧️ Chuva", b: "Molha", aImagem: chuvaImg },
        { a: "💨 Vento", b: "Mexe as coisas", aImagem: ventoImg },
        { a: "🌈 Arco-íris", b: "Aparece com sol + chuva", aImagem: arcoIrisImg },
      ],
    },

    // FASE 3 — arrastar: clima ↔ dia/noite
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Dia Ou Noite?",
      instrucao: "Arraste cada elemento pra DIA ☀️ ou NOITE 🌙.",
      pares: [
        { item: "Sol", alvo: "Dia", itemImagem: solImg },
        { item: "Arco-íris", alvo: "Dia", itemImagem: arcoIrisImg },
        { item: "Camiseta", alvo: "Dia", itemImagem: camisetaImg },
        { item: "Lua", alvo: "Noite", itemImagem: luaImg },
        { item: "Noite estrelada", alvo: "Noite", itemImagem: noiteImg },
      ],
      alvosVisuais: [
        { nome: "Dia", cor: "#F59E0B", imagemUrl: diaImg, capacidade: 3 },
        { nome: "Noite", cor: "#312E81", imagemUrl: noiteImg, capacidade: 2 },
      ],
    },

    // FASE 4 — selecionarMultiplos: coisas do céu (natureza)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 4 · Coisas Do CÉU",
      instrucao: "Marque tudo que vemos NO CÉU.",
      criterio: "Elementos do céu ☁️",
      opcoes: [
        { nome: "Sol", imagemUrl: solImg, rotulo: "☀️ SOL", correto: true },
        { nome: "Chuva", imagemUrl: chuvaImg, rotulo: "🌧️ CHUVA", correto: true },
        { nome: "Nuvem", imagemUrl: nuvemImg, rotulo: "☁️ NUVEM", correto: true },
        { nome: "Vento", imagemUrl: ventoImg, rotulo: "💨 VENTO", correto: true },
        { nome: "Arco-íris", imagemUrl: arcoIrisImg, rotulo: "🌈 ARCO-ÍRIS", correto: true },
        { nome: "Lua", imagemUrl: luaImg, rotulo: "🌙 LUA", correto: true },
        { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 CASA", correto: false },
        { nome: "Lago", imagemUrl: lagoImg, rotulo: "💧 LAGO", correto: false },
      ],
      acerto: "🌤️ Perfeito! Você reconheceu todas as danças do céu.",
      erro: "Isso não fica no CÉU — olhe pra cima!",
    },

    // FASE 5 — album: o dia de hoje
    {
      tipo: "album",
      titulo: "Fase 5 · O Céu De Hoje",
      instrucao: "Descreva como está o CÉU de hoje escolhendo cada elemento!",
      escolhas: [
        {
          label: "Hoje eu vi no céu…",
          modo: "imagem",
          opcoes: [
            { nome: "Sol", imagemUrl: solImg, rotulo: "☀️" },
            { nome: "Nuvem", imagemUrl: nuvemImg, rotulo: "☁️" },
            { nome: "Chuva", imagemUrl: chuvaImg, rotulo: "🌧️" },
            { nome: "Arco-íris", imagemUrl: arcoIrisImg, rotulo: "🌈" },
          ],
        },
        {
          label: "O tempo estava…",
          modo: "imagem",
          opcoes: [
            { nome: "Quente", imagemUrl: solImg, rotulo: "🥵 QUENTE" },
            { nome: "Fresquinho", imagemUrl: ventoImg, rotulo: "😊 FRESCO" },
            { nome: "Chuvoso", imagemUrl: sombrinhaImg, rotulo: "☔ CHUVOSO" },
          ],
        },
        {
          label: "O que eu quis fazer…",
          modo: "imagem",
          opcoes: [
            { nome: "Soltar pipa", imagemUrl: pipaImg, rotulo: "🪁 SOLTAR PIPA" },
            { nome: "Ir na praia", imagemUrl: bolaPraiaImg, rotulo: "🏖️ IR NA PRAIA" },
            { nome: "Ficar em casa", imagemUrl: casaImg, rotulo: "🏠 FICAR EM CASA" },
          ],
        },
      ],
      acerto: "📔 Registro do dia salvo no Diário das Danças do Céu!",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "O SOL brilha de…",
        opcoes: ["Dia", "Noite", "Nunca"],
        correta: 0,
        explicacao: "Sol aparece de dia.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" },
      },
      {
        pergunta: "A CHUVA cai de onde?",
        opcoes: ["Nuvem", "Chão", "Árvore"],
        correta: 0,
        explicacao: "Da nuvem.",
        visual: { tipo: "itens", imagemUrl: nuvemImg, quantidade: 1, rotulo: "☁️" },
      },
      {
        pergunta: "O VENTO é sentido pela pele como…",
        opcoes: ["Ar mexendo", "Água", "Fogo"],
        correta: 0,
        explicacao: "Ar em movimento.",
        visual: { tipo: "itens", imagemUrl: ventoImg, quantidade: 1, rotulo: "💨" },
      },
    ],
    medio: [
      {
        pergunta: "Sombrinha usamos quando…",
        opcoes: ["Está chovendo", "Está com sol forte", "Ambas"],
        correta: 2,
        explicacao: "Serve pros dois casos.",
        visual: { tipo: "itens", imagemUrl: sombrinhaImg, quantidade: 1, rotulo: "☔" },
      },
      {
        pergunta: "Pipa voa por causa do…",
        opcoes: ["Vento", "Sol", "Chuva"],
        correta: 0,
        explicacao: "Vento sustenta.",
        visual: { tipo: "itens", imagemUrl: pipaImg, quantidade: 1, rotulo: "🪁" },
      },
      {
        pergunta: "As flores gostam de…",
        opcoes: ["Sol e chuva", "Só neve", "Nada"],
        correta: 0,
        explicacao: "Precisam dos dois.",
        visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🌼" },
      },
    ],
    dificil: [
      {
        pergunta: "Arco-íris precisa de…",
        opcoes: ["Sol + chuva", "Só chuva", "Só sol"],
        correta: 0,
        explicacao: "Luz + gotas.",
        visual: { tipo: "itens", imagemUrl: arcoIrisImg, quantidade: 1, rotulo: "🌈" },
      },
      {
        pergunta: "Nuvem escura demais anuncia…",
        opcoes: ["Chuva forte", "Sol fraco", "Vento fresco"],
        correta: 0,
        explicacao: "Muita água acumulada.",
        visual: { tipo: "itens", imagemUrl: nuvemImg, quantidade: 1, rotulo: "☁️" },
      },
      {
        pergunta: "Regar planta em dia CHUVOSO…",
        opcoes: ["Não precisa", "Precisa MUITO", "Regar duas vezes"],
        correta: 0,
        explicacao: "A chuva já rega.",
        visual: { tipo: "itens", imagemUrl: regadorImg, quantidade: 1, rotulo: "💧" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica Do Tempo",
    objetivo:
      "Arraste cada elemento pro TEMPO certo antes do relógio parar ⏱️! Sol, chuva, vento — coloque cada um no lugar!",
    tempoSegundos: 90,
    categorias: [
      { nome: "Sol", cor: "#F59E0B", emoji: "☀️" },
      { nome: "Chuva", cor: "#0EA5E9", emoji: "🌧️" },
      { nome: "Vento", cor: "#93C5FD", emoji: "💨" },
    ],
    objetos: [
      { nome: "Sol", imagemUrl: solImg, categoria: "Sol", rotulo: "☀️" },
      { nome: "Camiseta", imagemUrl: camisetaImg, categoria: "Sol", rotulo: "👕" },
      { nome: "Bola de praia", imagemUrl: bolaPraiaImg, categoria: "Sol", rotulo: "🏐" },
      { nome: "Chuva", imagemUrl: chuvaImg, categoria: "Chuva", rotulo: "🌧️" },
      { nome: "Sombrinha", imagemUrl: sombrinhaImg, categoria: "Chuva", rotulo: "☔" },
      { nome: "Regador", imagemUrl: regadorImg, categoria: "Chuva", rotulo: "💧" },
      { nome: "Vento", imagemUrl: ventoImg, categoria: "Vento", rotulo: "💨" },
      { nome: "Pipa", imagemUrl: pipaImg, categoria: "Vento", rotulo: "🪁" },
      { nome: "Balão", imagemUrl: balaoImg, categoria: "Vento", rotulo: "🎈" },
    ],
    minAcertos: 8,
    acerto: "🌤️ Fábrica do Tempo funcionando! Elementos organizados!",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Diário Do Céu",
    instrucao:
      "Durante 3 dias, observem juntos como está o CÉU e o TEMPO ao acordar. Registrem no diário.",
    registros: [
      { label: "Dia 1 — como estava o céu", tipo: "texto" },
      { label: "Dia 2 — como estava o céu", tipo: "texto" },
      { label: "Dia 3 — como estava o céu", tipo: "texto" },
      { label: "Qual dia foi o preferido de vocês", tipo: "texto" },
    ],
    permitirFoto: true,
  },

  proximaHabilidade: { codigo: "EF01GE11" },
};

export default aula;
