import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png.asset.json";
import { url as plantaImg } from "@/assets/ciencias-3ano/u4/planta.jpg.asset.json";
import { url as cenouraImg } from "@/assets/ciencias-3ano/u4/cenoura.jpg.asset.json";
import { url as folhaImg } from "@/assets/ciencias-3ano/u4/folha.jpg.asset.json";
import { url as tomateImg } from "@/assets/ciencias-3ano/u4/tomate.jpg.asset.json";
import { url as florImg } from "@/assets/ciencias-3ano/u4/flor.jpg.asset.json";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-partes-plantas",
  titulo: "O Segredo das Plantas",
  iconeTrilha: "🌿",
  bncc: ["EF03CI06"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe a planta: raiz, caule, folha, flor e fruto. Cada parte tem uma função.",
    mapaUrl: plantaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora: "Guardião, uma árvore gigante tem folhas, flores, frutos e raízes. Cada pedaço serve pra algo. Plantas são fábricas vivas perfeitas!",
    falaFinal: "Hoje vamos descobrir o TRABALHO de cada parte da planta.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "HIPÓTESE de cientista.",
    pergunta: "Quando você come cenoura, você está comendo QUAL parte da planta?",
    fotoUrl: cenouraImg,
    opcoes: [
      { id: "raiz", titulo: "RAIZ", subtitulo: "cresce embaixo da terra", emoji: "🥕", cor: "from-orange-500 to-red-700" },
      { id: "caule", titulo: "CAULE", subtitulo: "sustenta a planta", emoji: "🌱", cor: "from-emerald-500 to-green-700" },
      { id: "fruto", titulo: "FRUTO", subtitulo: "guarda semente", emoji: "🍎", cor: "from-red-500 to-rose-700" },
    ],
    respostaCerta: "raiz",
    feedbackAcerto: "HIPÓTESE CONFIRMADA! Cenoura é uma RAIZ carnuda que a planta usa pra guardar nutrientes.",
    feedbackErro: "A cenoura cresce embaixo da terra e é gorda porque a planta guarda alimento nela. É RAIZ.",
    falaFinal: "Cada verdura ou fruta é uma parte diferente da planta. Vamos aprender todas!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "As 5 partes principais das plantas.",
    instrucao: "Anatomia vegetal",
    cadernos: [
      { id: "raiz", capa: "RAIZ", emoji: "🥕", cor: "from-orange-500 to-red-700", conteudo: "Prende a planta no chão e SUGA a água e os nutrientes da terra.", exemplo: "Ex.: raiz da cenoura, da mandioca.", fotoUrl: cenouraImg },
      { id: "caule", capa: "CAULE", emoji: "🌱", cor: "from-emerald-500 to-green-700", conteudo: "SUSTENTA a planta e transporta a água da raiz até as folhas — como um elevador.", exemplo: "Ex.: tronco da árvore, talo do brócolis.", fotoUrl: plantaImg },
      { id: "folha", capa: "FOLHA", emoji: "🍃", cor: "from-lime-500 to-green-700", conteudo: "Captam a LUZ DO SOL e o ar para produzir o alimento da planta.", exemplo: "Ex.: folha de alface, samambaia.", fotoUrl: folhaImg },
      { id: "flor", capa: "FLOR", emoji: "🌻", cor: "from-yellow-500 to-amber-700", conteudo: "Parte da REPRODUÇÃO. Atrai abelhas e outros polinizadores.", exemplo: "Ex.: girassol, rosa, margarida.", fotoUrl: florImg },
      { id: "fruto", capa: "FRUTO", emoji: "🍅", cor: "from-red-500 to-rose-700", conteudo: "GUARDA e PROTEGE as sementes que darão origem a novas plantas.", exemplo: "Ex.: tomate, maçã, laranja.", fotoUrl: tomateImg },
    ],
    falaFinal: "Raiz, caule, folha, flor, fruto. Cinco partes, cinco funções.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Uma planta completa. Toque em cada parte pra ver o que faz.",
    instrucao: "Toque em cada parte",
    mapaUrl: plantaImg,
    pontos: [
      { id: "raiz", x: 50, y: 85, emoji: "🥕", cor: "from-orange-500 to-red-700", titulo: "Raiz", texto: "Fixa a planta e absorve água + nutrientes.", fotoUrl: cenouraImg },
      { id: "caule", x: 50, y: 55, emoji: "🌱", cor: "from-emerald-500 to-green-700", titulo: "Caule", texto: "Elevador que leva água até as folhas.", fotoUrl: plantaImg },
      { id: "folha", x: 25, y: 30, emoji: "🍃", cor: "from-lime-500 to-green-700", titulo: "Folha", texto: "Captura a luz do sol para produzir alimento.", fotoUrl: folhaImg },
      { id: "flor", x: 50, y: 15, emoji: "🌸", cor: "from-pink-500 to-rose-700", titulo: "Flor", texto: "Reprodução — atrai polinizadores.", fotoUrl: florImg },
      { id: "fruto", x: 75, y: 40, emoji: "🍅", cor: "from-red-500 to-rose-700", titulo: "Fruto", texto: "Guarda as sementes protegidas.", fotoUrl: tomateImg },
    ],
    falaFinal: "Todas as partes trabalham juntas. Se uma falha, a planta sofre.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Função principal da RAIZ?", fotoUrl: cenouraImg,
        cards: [
          { id: "a", emoji: "💧", titulo: "Fixar a planta e absorver água/nutrientes", cor: "from-emerald-500 to-green-700" },
          { id: "b", emoji: "☀️", titulo: "Captar luz do sol", cor: "from-yellow-500 to-amber-700" },
          { id: "c", emoji: "🌸", titulo: "Perfumar o ambiente", cor: "from-pink-500 to-rose-700" },
        ], correta: "a",
        feedbackAcerto: "Isso! Raiz = fixação + absorção.", feedbackErro: "Raiz fica na terra: fixa a planta e SUGA água." },
      { id: "q2", pergunta: "Comendo alface, você come QUE parte?", fotoUrl: folhaImg,
        cards: [
          { id: "a", emoji: "🍃", titulo: "FOLHA", cor: "from-lime-500 to-green-700" },
          { id: "b", emoji: "🥕", titulo: "Raiz", cor: "from-orange-500 to-red-700" },
          { id: "c", emoji: "🍎", titulo: "Fruto", cor: "from-red-500 to-rose-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Alface é FOLHA.", feedbackErro: "Alface é a FOLHA da planta." },
      { id: "q3", pergunta: "Onde ficam as SEMENTES?", fotoUrl: tomateImg,
        cards: [
          { id: "a", emoji: "🌱", titulo: "No caule", cor: "from-emerald-500 to-green-700" },
          { id: "b", emoji: "🍅", titulo: "Dentro do fruto", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🥕", titulo: "Na raiz", cor: "from-orange-500 to-red-700" },
        ], correta: "b",
        feedbackAcerto: "Correto. Fruto protege as sementes.", feedbackErro: "Semente fica DENTRO do fruto — abre um tomate e vê!" },
    ],
    falaFinal: "Você já conhece a anatomia vegetal.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "A planta se divide em parte SUBTERRÂNEA e parte AÉREA.",
    instrucao: "Toque nos interruptores",
    mapaUrl: plantaImg,
    camadas: [
      { id: "sub", rotulo: "Parte subterrânea", emoji: "🥕", cor: "from-amber-700 to-stone-800", rect: { x: 2, y: 60, w: 96, h: 35 }, descricao: "Raiz. Absorve água e nutrientes, fixa a planta.", fotoUrl: cenouraImg },
      { id: "aer", rotulo: "Parte aérea", emoji: "🌿", cor: "from-emerald-500 to-green-700", rect: { x: 2, y: 5, w: 96, h: 55 }, descricao: "Caule, folhas, flores e frutos. Captura luz e faz reprodução.", fotoUrl: plantaImg },
    ],
    falaFinal: "Embaixo, raiz. Em cima, tudo o resto. Uma equipe perfeita.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como a água viaja pela planta? Monte o percurso.",
    instrucao: "Toque nas paradas na ordem correta",
    pergunta: "O caminho da água na planta",
    paradas: [
      { id: "chuva", emoji: "🌧️", rotulo: "1. Chuva molha a terra", descricao: "Água cai e infiltra no solo.", fotoUrl: plantaImg },
      { id: "raiz", emoji: "🥕", rotulo: "2. Raiz absorve", descricao: "Raízes sugam a água do solo.", fotoUrl: cenouraImg },
      { id: "caule", emoji: "🌱", rotulo: "3. Sobe pelo caule", descricao: "Caule funciona como elevador.", fotoUrl: plantaImg },
      { id: "folha", emoji: "🍃", rotulo: "4. Chega às folhas", descricao: "Folhas usam água + luz pra criar alimento.", fotoUrl: folhaImg },
      { id: "cresce", emoji: "🌻", rotulo: "5. Planta cresce", descricao: "Nutrida, floresce e dá frutos.", fotoUrl: florImg },
    ],
    ordemCerta: ["chuva", "raiz", "caule", "folha", "cresce"],
    feedbackAcerto: "Perfeito! O ciclo da água na planta.",
    feedbackErro: "Chuva → raiz → caule → folha → planta cresce.",
    falaFinal: "Sem esse caminho, nenhuma planta sobreviveria.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "🔬 Relatório da Expedição · Semana 4",
    subtitulo: "Investigação: partes das plantas",
    paragrafos: [
      { id: "p1", texto: "Uma planta completa tem 5 partes: RAIZ (embaixo da terra), CAULE (que sustenta), FOLHAS, FLORES e FRUTOS.",
        chaves: ["raiz", "caule"], definicoes: { raiz: "Absorve água e fixa a planta.", caule: "Sustenta e transporta." }, fotoUrl: plantaImg },
      { id: "p2", texto: "As FOLHAS captam a LUZ DO SOL e o ar. Elas produzem a energia que a planta precisa para crescer. Sem sol, nenhuma planta sobrevive.",
        chaves: ["folhas"], definicoes: { folhas: "Onde a planta faz seu alimento com luz do sol." }, fotoUrl: folhaImg },
      { id: "p3", texto: "Dentro dos FRUTOS ficam as SEMENTES — pequenas estruturas que carregam o embrião pronto pra brotar quando encontrar terra úmida.",
        chaves: ["sementes"], definicoes: { sementes: "Estruturas que originam novas plantas." }, fotoUrl: tomateImg },
    ],
    falaFinal: "Botânica de bolso!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "O Elevador de Seiva! Identifique cada parte da planta.",
    instrucao: "⏱️ Veja o alimento e escolha a parte da planta",
    duracaoSegundos: 25,
    pecas: [
      { id: "raiz", emoji: "🥕", rotulo: "Raiz" },
      { id: "caule", emoji: "🌱", rotulo: "Caule" },
      { id: "folha", emoji: "🍃", rotulo: "Folha" },
      { id: "flor", emoji: "🌻", rotulo: "Flor" },
      { id: "fruto", emoji: "🍅", rotulo: "Fruto" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Cresce na terra", emoji: "🥕", cor: "from-orange-500 to-red-700" }, municipioB: { nome: "Cor laranja", emoji: "🍊", cor: "from-amber-500 to-orange-700" }, contexto: "Vegetal alongado e alaranjado, tirado do solo.", pecaCertaId: "raiz", fotoUrl: cenouraImg, feedbackAcerto: "Cenoura = RAIZ!", feedbackErro: "Cenoura é RAIZ." },
      { id: "r2", municipioA: { nome: "Vermelho suculento", emoji: "🍅", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Cheio de sementes", emoji: "🌰", cor: "from-amber-500 to-orange-700" }, contexto: "Fruta vermelha e redonda, com muitas sementinhas por dentro.", pecaCertaId: "fruto", fotoUrl: tomateImg, feedbackAcerto: "Tomate = FRUTO!", feedbackErro: "Com semente dentro = FRUTO." },
      { id: "r3", municipioA: { nome: "Fina e verde", emoji: "🍃", cor: "from-lime-500 to-green-700" }, municipioB: { nome: "Recebe luz", emoji: "☀️", cor: "from-yellow-500 to-amber-700" }, contexto: "Estrutura fina, verde, cheia de veias. Amarela quando falta sol.", pecaCertaId: "folha", fotoUrl: folhaImg, feedbackAcerto: "FOLHA!", feedbackErro: "Verde, fina, capta luz = FOLHA." },
      { id: "r4", municipioA: { nome: "Amarela e vistosa", emoji: "🌻", cor: "from-yellow-500 to-amber-700" }, municipioB: { nome: "Atrai abelhas", emoji: "🐝", cor: "from-amber-500 to-orange-700" }, contexto: "Estrutura colorida e perfumada que atrai insetos.", pecaCertaId: "flor", fotoUrl: florImg, feedbackAcerto: "FLOR!", feedbackErro: "Colorida e atrai polinizadores = FLOR." },
      { id: "r5", municipioA: { nome: "Sustenta tudo", emoji: "🌱", cor: "from-emerald-500 to-green-700" }, municipioB: { nome: "Ligações internas", emoji: "🚚", cor: "from-slate-500 to-slate-700" }, contexto: "Estrutura firme que sustenta a planta e leva água da raiz até as folhas.", pecaCertaId: "caule", fotoUrl: plantaImg, feedbackAcerto: "CAULE!", feedbackErro: "Sustenta e transporta = CAULE." },
    ],
    falaFinal: "Botânico ativo!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Os 5 órgãos vegetais em uma vista geral.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: plantaImg,
    fatias: [
      { id: "sub", rotulo: "Parte subterrânea (raiz)", emoji: "🥕", percentual: 25, cor: "#b45309", descricao: "Fixa a planta e absorve água e nutrientes do solo.", exemplos: ["Cenoura", "Mandioca"], fotoUrl: cenouraImg },
      { id: "aer", rotulo: "Parte aérea (caule, folha, flor, fruto)", emoji: "🌿", percentual: 75, cor: "#10b981", descricao: "Sustenta, capta luz, se reproduz e produz frutos com sementes.", exemplos: ["Tronco", "Alface", "Girassol", "Tomate"], fotoUrl: plantaImg },
    ],
    falaFinal: "Todas as partes trabalham em equipe.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Função principal da RAIZ?", fotoUrl: cenouraImg,
        opcoes: [
          { id: "a", texto: "Fixar a planta e absorver água e nutrientes do solo", correta: true },
          { id: "b", texto: "Produzir o perfume das flores" },
        ], feedbackAcerto: "Sem raiz nenhuma planta fica em pé.", feedbackErro: "Raiz = fixa + absorve." },
      { id: "q2", pergunta: "Onde a planta CAPTA a luz do sol?", fotoUrl: folhaImg,
        opcoes: [
          { id: "a", texto: "Nas folhas", correta: true },
          { id: "b", texto: "Na raiz, embaixo da terra" },
        ], feedbackAcerto: "Correto. Folhas = coletores solares.", feedbackErro: "Folhas captam a luz — raiz fica no escuro." },
      { id: "q3", pergunta: "Onde ficam as SEMENTES da planta?", fotoUrl: tomateImg,
        opcoes: [
          { id: "a", texto: "Dentro do fruto", correta: true },
          { id: "b", texto: "Na folha" },
        ], feedbackAcerto: "Sim. Fruto protege semente.", feedbackErro: "Semente fica DENTRO do fruto." },
    ],
    selo: { nome: "Regador de Seiva Enriquecida", subtitulo: "Guardiões da Biosfera · Missão 4 concluída", emoji: "🌿", cor: "from-emerald-400 via-green-500 to-lime-700" },
    falaFinal: "A estufa das plantas sagradas foi restaurada!",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Botânico Mirim" },
};
