import type { Aula } from "../types";
import { url as parqueImg } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as cidadeImg } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as praiaImg } from "@/assets/neuro-treino/objetos/praia.png.asset.json";
import { url as campoImg } from "@/assets/neuro-treino/objetos/campo.png.asset.json";
import { url as bairroImg } from "@/assets/neuro-treino/objetos/bairro.png.asset.json";
import { url as predioImg } from "@/assets/neuro-treino/objetos/predio.png.asset.json";
import { url as nuvemImg } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as ponteImg } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as binoculoImg } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as navioImg } from "@/assets/neuro-treino/objetos/navio.png.asset.json";
import { url as ruaImg } from "@/assets/neuro-treino/objetos/rua.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as passaroImg } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as carroImg } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as chuvaImg } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as jardimImg } from "@/assets/neuro-treino/objetos/jardim.png.asset.json";
import { url as borboletaImg } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as criancasImg } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";

/**
 * EF01GE04 — Geografia · 1º Ano
 * Missão: "Os Sons Da Minha Paisagem"
 * Observar e identificar elementos das paisagens (naturais x construídos)
 * e reconhecer sons característicos dos lugares.
 */
const aula: Aula = {
  codigo: "EF01GE04",
  ano: "1º Ano",
  disciplina: "Geografia",
  titulo: "Os Sons Da Minha Paisagem",

  narrativa: {
    titulo: "O Binóculo Encantado",
    contexto:
      "Brilha recebe um BINÓCULO ENCANTADO 🔭 que revela detalhes escondidos das paisagens. Mas ele só brilha quando o explorador presta MUITA atenção.",
    problema:
      "A Coruja Sábia sussurra: 'Cada paisagem conta uma história — basta OBSERVAR com atenção 👀👂'. A cada descoberta, uma nova lente do binóculo se acende ✨.",
    convite: "Bora explorar paisagens com o Brilha?",
  },

  conhecimentosPrevios: [
    "Reconhecer lugares do dia a dia (casa, escola, praça).",
    "Perceber diferenças simples entre natureza e construção.",
  ],

  missao:
    "Observar diferentes paisagens, identificar elementos naturais e construídos e reconhecer sons característicos dos lugares.",

  objetivos: [
    "Observar diferentes paisagens.",
    "Identificar elementos naturais e construídos.",
    "Reconhecer sons característicos dos lugares.",
    "Desenvolver a atenção e a percepção do espaço.",
    "Compreender que cada paisagem tem características próprias.",
  ],

  motivacao:
    "Cada paisagem tem sons, cores e cheiros próprios — quem observa, DESCOBRE ✨.",

  explicacao:
    "🌳 PARQUE, 🏙️ CIDADE, 🏖️ PRAIA, 🌾 CAMPO, 🏘️ BAIRRO — cada lugar é uma PAISAGEM.\n🌿 Elementos NATURAIS: árvores, flores, nuvens, sol, rios.\n🏠 Elementos CONSTRUÍDOS: casas, prédios, pontes, ruas.\n🔊 Cada paisagem tem SONS próprios: canto de passarinho, ondas, buzina…",

  explicacoesNiveis: {
    nivel1: "Paisagem = tudo o que a gente vê num lugar.",
    nivel2: "Tem coisas da natureza e coisas feitas pelas pessoas.",
    nivel3: "Os sons ajudam a reconhecer o lugar mesmo sem enxergar.",
    nivel4: "As paisagens podem mudar com o tempo — pela natureza ou pelas pessoas.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha ouve o som de ONDAS 🌊 e sente cheiro de mar. Que paisagem é essa?",
    passos: [
      "Ondas são sons de água grande.",
      "Cheiro de mar aparece perto do oceano.",
      "Só uma paisagem tem os dois: a PRAIA 🏖️.",
    ],
    resposta: "🏖️ PRAIA!",
  },

  atividadeGuiada: {
    enunciado: "Qual dessas paisagens tem MUITOS PRÉDIOS altos?",
    resposta: "🏙️ CIDADE!",
    explicacao:
      "A cidade tem prédios altos, muitos carros e movimento. Diferente do campo, que tem hortas e animais soltos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Onde vemos muitos prédios?",
      opcoes: [
        { nome: "cidade", imagemUrl: cidadeImg },
        { nome: "campo", imagemUrl: campoImg },
        { nome: "praia", imagemUrl: praiaImg },
      ],
      respostaCerta: "cidade",
    },
  },

  exercicios: [
    {
      enunciado: "Árvore é natureza ou construção?",
      resposta: "🌳 NATUREZA.",
      dica: "Ninguém constrói uma árvore — ela nasce.",
    },
    {
      enunciado: "Casa é natureza ou construção?",
      resposta: "🏠 CONSTRUÇÃO.",
      dica: "Foi feita por pessoas.",
    },
    {
      enunciado: "Que som lembra a praia?",
      resposta: "🌊 ONDAS do mar.",
      dica: "Água grande balançando.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: mostre que virou um EXPLORADOR das paisagens!",
    resposta: "Cada paisagem tem seus elementos e sons.",
    visual: {
      perguntas: [
        {
          pergunta: "Que paisagem tem AREIA e ONDAS?",
          opcoes: ["Praia", "Cidade", "Campo"],
          correta: 0,
          explicacao: "Praia = areia + mar.",
          visual: { tipo: "itens", imagemUrl: praiaImg, quantidade: 1, rotulo: "🏖️" },
        },
        {
          pergunta: "Nuvem é elemento…",
          opcoes: ["Da natureza", "Construído", "Feito de tijolo"],
          correta: 0,
          explicacao: "Nuvem se forma sozinha no céu.",
          visual: { tipo: "itens", imagemUrl: nuvemImg, quantidade: 1, rotulo: "☁️" },
        },
        {
          pergunta: "Ponte é elemento…",
          opcoes: ["Construído", "Da natureza", "Só de água"],
          correta: 0,
          explicacao: "Ponte é feita pelas pessoas.",
          visual: { tipo: "itens", imagemUrl: ponteImg, quantidade: 1, rotulo: "🌉" },
        },
        {
          pergunta: "Canto do passarinho lembra que lugar?",
          opcoes: ["Parque", "Cidade barulhenta", "Praia"],
          correta: 0,
          explicacao: "Passarinhos aparecem muito no parque.",
          visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "🐦" },
        },
        {
          pergunta: "Onde tem hortas e muitos animais soltos?",
          opcoes: ["Campo", "Cidade", "Praia"],
          correta: 0,
          explicacao: "Campo tem plantação e bichos criados.",
          visual: { tipo: "itens", imagemUrl: campoImg, quantidade: 1, rotulo: "🌾" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🌳 Paisagem = tudo o que vemos num lugar.",
      "🌿 Elementos NATURAIS: árvore, flor, nuvem, sol.",
      "🏠 Elementos CONSTRUÍDOS: casa, prédio, ponte.",
      "🔊 Cada paisagem tem SONS próprios.",
      "⏳ Paisagens MUDAM com o tempo.",
    ],
    dica: "Hoje olhe pela janela e conte 3 elementos naturais e 3 construídos.",
  },

  quiz: [
    {
      pergunta: "Uma paisagem pode ter:",
      opcoes: [
        "Elementos naturais e construídos",
        "Apenas árvores",
        "Apenas casas",
      ],
      correta: 0,
      explicacao: "A maioria das paisagens mistura os dois.",
      visual: { tipo: "itens", imagemUrl: bairroImg, quantidade: 1, rotulo: "🏘️" },
    },
    {
      pergunta: "Qual é um elemento da NATUREZA?",
      opcoes: ["Árvore", "Escola", "Ponte"],
      correta: 0,
      explicacao: "Árvore nasce da natureza.",
      visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
    },
    {
      pergunta: "Qual é uma CONSTRUÇÃO?",
      opcoes: ["Casa", "Flor", "Rio"],
      correta: 0,
      explicacao: "Casa é feita pelas pessoas.",
      visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" },
    },
    {
      pergunta: "Os sons ajudam a:",
      opcoes: [
        "Conhecer melhor os lugares",
        "Esconder a paisagem",
        "Apagar as árvores",
      ],
      correta: 0,
      explicacao: "Ouvir também é observar.",
      visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "🐦" },
    },
    {
      pergunta: "Hoje aprendemos sobre:",
      opcoes: [
        "As paisagens e seus elementos",
        "Apenas brinquedos",
        "Apenas esportes",
      ],
      correta: 0,
      explicacao: "Observar paisagens é geografia!",
      visual: { tipo: "itens", imagemUrl: binoculoImg, quantidade: 1, rotulo: "🔭" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Explorador das Paisagens! 🔭 Item desbloqueado: Binóculo Encantado.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "As paisagens mudam com o TEMPO ⏳. Algumas mudanças vêm da natureza (chuva, vento) e outras das pessoas (novas casas, ruas).",
  },

  interativas: [
    // APRENDENDO — lupa: 5 paisagens
    {
      tipo: "lupa",
      titulo: "As Paisagens Do Brilha",
      instrucao:
        "Toque em cada paisagem pra ouvir os SONS e a descrição do Brilha 🔭.",
      itens: [
        {
          nome: "Parque",
          imagemUrl: parqueImg,
          rotulo: "🌳 PARQUE",
          descoberta:
            "No parque ouvimos o canto dos passarinhos, o vento nas árvores e crianças brincando.",
        },
        {
          nome: "Cidade",
          imagemUrl: cidadeImg,
          rotulo: "🏙️ CIDADE",
          descoberta:
            "Na cidade escutamos carros, buzinas e muitas pessoas passando.",
        },
        {
          nome: "Praia",
          imagemUrl: praiaImg,
          rotulo: "🏖️ PRAIA",
          descoberta:
            "Na praia ouvimos as ondas do mar e sentimos o vento salgado.",
        },
        {
          nome: "Campo",
          imagemUrl: campoImg,
          rotulo: "🌾 CAMPO",
          descoberta:
            "No campo escutamos o vento na plantação e o som dos animais criados.",
        },
        {
          nome: "Bairro",
          imagemUrl: bairroImg,
          rotulo: "🏘️ BAIRRO",
          descoberta:
            "No bairro ouvimos vizinhos conversando, carros passando e crianças na rua.",
        },
      ],
    },

    // FASE 1 — O Que Você Vê? (selecionarMultiplos: elementos de uma paisagem específica)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 1 · O Que Você Vê?",
      instrucao:
        "Brilha aponta o binóculo pro PARQUE 🌳. Marque TODOS os elementos que aparecem lá — cuidado com o que NÃO pertence!",
      criterio: "Elementos que aparecem no PARQUE",
      opcoes: [
        { nome: "Árvores", imagemUrl: arvoreImg, rotulo: "🌳 Árvores", correto: true },
        { nome: "Flores", imagemUrl: florImg, rotulo: "🌼 Flores", correto: true },
        { nome: "Crianças brincando", imagemUrl: criancasImg, rotulo: "🧒 Crianças", correto: true },
        { nome: "Passarinhos", imagemUrl: passaroImg, rotulo: "🐦 Pássaros", correto: true },
        { nome: "Navio", imagemUrl: navioImg, rotulo: "🚢 Navio", correto: false },
        { nome: "Prédio gigante", imagemUrl: predioImg, rotulo: "🏢 Prédio gigante", correto: false },
      ],
      acerto: "🔭 Lente 1 acesa! Você observou direitinho o parque.",
      erro: "Esse aí não costuma aparecer no parque — foque nos elementos naturais e brinquedos.",
    },

    // FASE 2 — De Onde Vem o Som? (ligar: som → paisagem)
    {
      tipo: "ligar",
      titulo: "Fase 2 · De Onde Vem O Som?",
      instrucao:
        "Escute com o binóculo mágico e LIGUE cada SOM à paisagem certa 🔊➡️🗺️.",
      pares: [
        { a: "🐦 Canto dos passarinhos", b: "🌳 Parque", aImagem: passaroImg, bImagem: parqueImg },
        { a: "🚗 Carros e buzinas", b: "🏙️ Cidade", aImagem: carroImg, bImagem: cidadeImg },
        { a: "🌊 Ondas do mar", b: "🏖️ Praia", aImagem: chuvaImg, bImagem: praiaImg },
        { a: "🐮 Animais da fazenda", b: "🌾 Campo", aImagem: borboletaImg, bImagem: campoImg },
      ],
    },

    // FASE 3 — Natureza ou Construção? (arrastar: separar em 2 grupos)
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Natureza Ou Construção?",
      instrucao:
        "Cada elemento tem seu grupo! Arraste pra NATUREZA 🌿 ou CONSTRUÇÃO 🏗️.",
      pares: [
        { item: "Árvore 🌳", alvo: "Natureza", itemImagem: arvoreImg },
        { item: "Flor 🌼", alvo: "Natureza", itemImagem: florImg },
        { item: "Nuvem ☁️", alvo: "Natureza", itemImagem: nuvemImg },
        { item: "Casa 🏠", alvo: "Construção", itemImagem: casaImg },
        { item: "Escola 🏫", alvo: "Construção", itemImagem: escolaImg },
        { item: "Ponte 🌉", alvo: "Construção", itemImagem: ponteImg },
      ],
      alvosVisuais: [
        { nome: "Natureza", cor: "#22C55E", imagemUrl: jardimImg, capacidade: 3 },
        { nome: "Construção", cor: "#F97316", imagemUrl: predioImg, capacidade: 3 },
      ],
    },

    // FASE 4 — Explorando a Paisagem (selecionarMultiplos com curiosidades)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 4 · Explorando A Paisagem",
      instrucao:
        "Brilha caminha pelo BAIRRO 🏘️ com o binóculo. Marque TUDO o que ele descobre pelo caminho — cada descoberta acende uma nova lente ✨.",
      criterio: "Descobertas do bairro",
      opcoes: [
        { nome: "Árvores da calçada", imagemUrl: arvoreImg, rotulo: "🌳 Árvores da calçada", correto: true },
        { nome: "Casas coloridas", imagemUrl: casaImg, rotulo: "🏠 Casas coloridas", correto: true },
        { nome: "Rua com carros", imagemUrl: ruaImg, rotulo: "🛣️ Rua com carros", correto: true },
        { nome: "Jardim florido", imagemUrl: jardimImg, rotulo: "🌼 Jardim florido", correto: true },
        { nome: "Ondas do mar", imagemUrl: praiaImg, rotulo: "🌊 Ondas do mar", correto: false },
        { nome: "Trator de fazenda", imagemUrl: campoImg, rotulo: "🚜 Trator de fazenda", correto: false },
      ],
      acerto: "🔭 Todas as lentes acesas! O bairro tem muita coisa pra explorar.",
      erro: "Isso é de outra paisagem — no bairro a gente encontra casas, ruas e jardins.",
    },

    // FASE 5 — Minha Paisagem Favorita (album: monta a paisagem)
    {
      tipo: "album",
      titulo: "Fase 5 · Minha Paisagem Favorita",
      instrucao:
        "Monte a SUA paisagem escolhendo o que faz parte dela. Pode marcar MAIS DE UMA em cada grupo — o Brilha guarda no seu perfil ✨.",
      escolhas: [
        {
          label: "No CÉU da minha paisagem tem…",
          modo: "imagem",
          opcoes: [
            { nome: "Sol", imagemUrl: solImg, rotulo: "☀️ SOL" },
            { nome: "Nuvem", imagemUrl: nuvemImg, rotulo: "☁️ NUVEM" },
            { nome: "Chuva", imagemUrl: chuvaImg, rotulo: "🌧️ CHUVA" },
          ],
        },
        {
          label: "Da NATUREZA eu quero…",
          modo: "imagem",
          opcoes: [
            { nome: "Árvores", imagemUrl: arvoreImg, rotulo: "🌳 ÁRVORES" },
            { nome: "Flores", imagemUrl: florImg, rotulo: "🌼 FLORES" },
            { nome: "Borboletas", imagemUrl: borboletaImg, rotulo: "🦋 BORBOLETAS" },
            { nome: "Pássaros", imagemUrl: passaroImg, rotulo: "🐦 PÁSSAROS" },
          ],
        },
        {
          label: "De CONSTRUÍDO eu quero…",
          modo: "imagem",
          opcoes: [
            { nome: "Casas", imagemUrl: casaImg, rotulo: "🏠 CASAS" },
            { nome: "Prédio", imagemUrl: predioImg, rotulo: "🏢 PRÉDIO" },
            { nome: "Ponte", imagemUrl: ponteImg, rotulo: "🌉 PONTE" },
          ],
        },
        {
          label: "Quem MORA na minha paisagem…",
          modo: "imagem",
          opcoes: [
            { nome: "Crianças brincando", imagemUrl: criancasImg, rotulo: "🧒 CRIANÇAS" },
            { nome: "Coruja Sábia", imagemUrl: corujaImg, rotulo: "🦉 CORUJA" },
          ],
        },
      ],
      acerto: "🔭 Sua paisagem ficou linda! O Brilha guardou no seu perfil.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Nuvem é da…",
        opcoes: ["Natureza", "Construção", "Escola"],
        correta: 0,
        explicacao: "Nuvem se forma sozinha no céu.",
        visual: { tipo: "itens", imagemUrl: nuvemImg, quantidade: 1, rotulo: "☁️" },
      },
      {
        pergunta: "Prédio é…",
        opcoes: ["Construção", "Natureza", "Fruta"],
        correta: 0,
        explicacao: "Foi feito pelas pessoas.",
        visual: { tipo: "itens", imagemUrl: predioImg, quantidade: 1, rotulo: "🏢" },
      },
      {
        pergunta: "Onde ouvimos ondas do mar?",
        opcoes: ["Praia", "Campo", "Cidade"],
        correta: 0,
        explicacao: "Praia = mar com ondas.",
        visual: { tipo: "itens", imagemUrl: praiaImg, quantidade: 1, rotulo: "🌊" },
      },
    ],
    medio: [
      {
        pergunta: "Que paisagem tem muitas plantações?",
        opcoes: ["Campo", "Cidade", "Praia"],
        correta: 0,
        explicacao: "Campo é lugar de plantação e criação.",
        visual: { tipo: "itens", imagemUrl: campoImg, quantidade: 1, rotulo: "🌾" },
      },
      {
        pergunta: "Ponte é elemento…",
        opcoes: ["Construído", "Da natureza", "De comer"],
        correta: 0,
        explicacao: "Feita pelas pessoas.",
        visual: { tipo: "itens", imagemUrl: ponteImg, quantidade: 1, rotulo: "🌉" },
      },
      {
        pergunta: "Buzina de carro lembra o…",
        opcoes: ["Trânsito da cidade", "Campo silencioso", "Fundo do mar"],
        correta: 0,
        explicacao: "Cidade tem muitos carros.",
        visual: { tipo: "itens", imagemUrl: carroImg, quantidade: 1, rotulo: "🚗" },
      },
    ],
    dificil: [
      {
        pergunta: "Uma paisagem completa costuma ter…",
        opcoes: [
          "Elementos naturais e construídos",
          "Só elementos naturais",
          "Só construções",
        ],
        correta: 0,
        explicacao: "Quase toda paisagem mistura os dois.",
        visual: { tipo: "itens", imagemUrl: bairroImg, quantidade: 1, rotulo: "🏘️" },
      },
      {
        pergunta: "As paisagens podem MUDAR por causa…",
        opcoes: [
          "Da natureza e das pessoas",
          "Só das pessoas",
          "De nada — nunca mudam",
        ],
        correta: 0,
        explicacao: "Chuva, vento, construção, tudo muda a paisagem.",
        visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "⏳" },
      },
      {
        pergunta: "Observar bem uma paisagem é usar…",
        opcoes: [
          "Os olhos E os ouvidos",
          "Só os olhos",
          "Só o nariz",
        ],
        correta: 0,
        explicacao: "Ver e ouvir contam a história do lugar.",
        visual: { tipo: "itens", imagemUrl: binoculoImg, quantidade: 1, rotulo: "🔭" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Explorador Das Paisagens",
    objetivo:
      "Encontre 5 ELEMENTOS DA NATUREZA em 90 segundos 🔭! Cada acerto acende uma lente do Binóculo Encantado ✨.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Árvore", imagemUrl: arvoreImg, rotulo: "🌳" },
      { nome: "Flor", imagemUrl: florImg, rotulo: "🌼" },
      { nome: "Nuvem", imagemUrl: nuvemImg, rotulo: "☁️" },
      { nome: "Pássaro", imagemUrl: passaroImg, rotulo: "🐦" },
      { nome: "Borboleta", imagemUrl: borboletaImg, rotulo: "🦋" },
      { nome: "Sol", imagemUrl: solImg, rotulo: "☀️" },
    ],
    distratores: [
      { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠" },
      { nome: "Prédio", imagemUrl: predioImg, rotulo: "🏢" },
      { nome: "Ponte", imagemUrl: ponteImg, rotulo: "🌉" },
      { nome: "Carro", imagemUrl: carroImg, rotulo: "🚗" },
      { nome: "Navio", imagemUrl: navioImg, rotulo: "🚢" },
      { nome: "Rua", imagemUrl: ruaImg, rotulo: "🛣️" },
    ],
    acerto: "🔭 Binóculo Encantado brilhando! Você achou tudo da natureza!",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Explorando A Paisagem De Casa",
    instrucao:
      "Com um familiar, escolham uma PAISAGEM perto de casa (janela, calçada, praça). Observem por alguns minutos e anotem juntos o que veem e ouvem.",
    registros: [
      { label: "3 elementos da NATUREZA que vocês viram", tipo: "texto" },
      { label: "3 CONSTRUÇÕES que vocês viram", tipo: "texto" },
      { label: "2 SONS que vocês conseguiram ouvir", tipo: "texto" },
    ],
    permitirFoto: true,
  },

  proximaHabilidade: { codigo: "EF01GE05" },
};

export default aula;
