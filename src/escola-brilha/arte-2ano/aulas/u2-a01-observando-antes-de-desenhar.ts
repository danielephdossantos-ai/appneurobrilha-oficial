import type { AulaArte } from "./u1-a01-cores-falam";
import obraNoiteEstrelada from "@/assets/arte-2ano/obras/noite-estrelada.jpg.asset.json";
import obraPortinari from "@/assets/arte-2ano/obras/portinari-inspirado.jpg.asset.json";
import obraTarsila from "@/assets/arte-2ano/obras/tarsila-inspirado.jpg.asset.json";

const aula: AulaArte = {
  id: "u2-a01-observando-antes-de-desenhar",
  ano: "2º Ano",
  unidade: 2,
  aula: 1,
  tituloUnidade: "Desenhando o Mundo ao Meu Redor",
  titulo: "Observar e Desenhar de Verdade",
  duracaoMin: "45 a 60 min",
  objetivos: [
    "seguir contornos e treinar coordenação do traço",
    "completar a metade de uma figura observando o eixo de simetria",
    "investigar detalhes escondidos em obras de arte reais",
  ],
  etapas: [
    {
      tipo: "historia",
      titulo: "O Caderno de Detetive da Brilha",
      icone: "lapis",
      texto:
        "Brilha ganhou um caderno de detetive de arte. Nele, ela treina 3 coisas: seguir a linha com o lápis, completar a metade que falta e caçar detalhes escondidos dentro dos quadros. Vamos treinar junto?",
      lapis: [
        { cor: "preto",   hex: "#2D2418", emocao: "Contorno",  frase: "Preto: o traço firme do artista." },
        { cor: "amarelo", hex: "#F0C24A", emocao: "Descoberta", frase: "Amarelo: cada detalhe é uma descoberta." },
        { cor: "azul",    hex: "#5A8FBF", emocao: "Espelho",   frase: "Azul: o eixo de espelho de uma figura." },
        { cor: "vermelho",hex: "#D65252", emocao: "Achado",    frase: "Vermelho: marca o que a gente encontrou." },
      ],
      convite: "Abre o caderno e vem treinar comigo!",
    },
    {
      tipo: "traco-guiado",
      titulo: "✏️ Segue o Traço",
      instrucao: "Passa o dedo por cima da linha pontilhada. Não solta! Cada pontinho conta.",
      figuras: [
        { nome: "Casa",   emoji: "🏠", d: "casa" },
        { nome: "Peixe",  emoji: "🐟", d: "peixe" },
        { nome: "Gato",   emoji: "🐱", d: "gato" },
      ],
    },
    {
      tipo: "completar-metade",
      titulo: "🪞 Completa a Metade",
      instrucao:
        "A figura só tem um lado. Do outro lado da linha amarela, desenha a metade que falta.",
      itens: [
        { nome: "A Borboleta", figura: "borboleta", dica: "Duas asas iguais, uma de cada lado do corpinho." },
        { nome: "O Coração",   figura: "coracao",   dica: "O coração é igual dos dois lados — igualzinho no espelho." },
        { nome: "A Flor",      figura: "flor",      dica: "As pétalas se repetem em volta do miolo amarelo." },
      ],
    },
    {
      tipo: "curiosidade",
      titulo: "Você Sabia?",
      texto:
        "Leonardo da Vinci treinava horas fazendo linhas e círculos antes de pintar. Ele dizia: 'A mão do artista precisa obedecer o olho.' É isso que a gente treinou agora!",
    },
    {
      tipo: "detetive-obra",
      titulo: "🕵️ Detetive da Obra",
      instrucao:
        "Van Gogh escondeu vários segredos nesse quadro. Toca em cada círculo brilhante pra descobrir. Ao tocar, o quadro dá zoom!",
      obraUrl: obraNoiteEstrelada.url,
      alt: "Pintura A Noite Estrelada de Vincent van Gogh",
      obra: "A Noite Estrelada",
      artista: "Vincent van Gogh",
      ano: "1889",
      achados: [
        { x: 12, y: 55, r: 6, nome: "O cipreste escuro",
          dica: "Uma árvore altíssima na frente da tela.",
          revelacao: "O cipreste subindo até o céu era o jeito de Van Gogh conectar a terra e as estrelas." },
        { x: 88, y: 20, r: 6, nome: "A lua crescente",
          dica: "Amarela, brilhante, no cantinho de cima.",
          revelacao: "A lua é o ponto mais forte de luz — Van Gogh a pintou grande de propósito." },
        { x: 50, y: 70, r: 5, nome: "A torre da igreja",
          dica: "Ponta bem fininha no meio da vila.",
          revelacao: "A igrejinha é a única linha bem reta do quadro, entre todos os redemoinhos." },
        { x: 42, y: 38, r: 7, nome: "O redemoinho do vento",
          dica: "Uma onda gigante rolando pelo céu.",
          revelacao: "Van Gogh pintou o vento como se ele fosse água — girando entre as estrelas." },
        { x: 62, y: 82, r: 6, nome: "A vila dormindo",
          dica: "Casinhas pequenas, algumas com luz na janela.",
          revelacao: "As janelinhas amarelas mostram que ainda tem gente acordada nas casas." },
      ],
    },
    {
      tipo: "detetive-obra",
      titulo: "🕵️ Detetive nas Obras Brasileiras",
      instrucao:
        "Agora dois quadros brasileiros. Descobre os detalhes que Portinari e Tarsila esconderam.",
      obraUrl: obraPortinari.url,
      alt: "Obra inspirada em Portinari com trabalhadores brasileiros",
      obra: "Os Trabalhadores",
      artista: "Cândido Portinari",
      ano: "estilo 1940",
      achados: [
        { x: 30, y: 50, r: 8, nome: "As mãos grandes",
          dica: "Olha as mãos dos personagens.",
          revelacao: "Portinari sempre pintava as mãos enormes — pra mostrar o valor do trabalho." },
        { x: 65, y: 40, r: 8, nome: "Os pés descalços",
          dica: "Ninguém tem sapato.",
          revelacao: "Ele pintava pés descalços pra mostrar como o povo do campo era humilde e forte." },
        { x: 50, y: 15, r: 7, nome: "O céu grande",
          dica: "Bem alto, ocupando quase metade do quadro.",
          revelacao: "O céu enorme mostra a paisagem aberta do interior do Brasil." },
        { x: 80, y: 80, r: 7, nome: "A ferramenta de trabalho",
          dica: "Alguém carrega algo pesado.",
          revelacao: "As ferramentas contam a história do que aquela gente fazia todo dia." },
      ],
    },
    {
      tipo: "quiz",
      titulo: "Fecha o Caderno",
      perguntas: [
        {
          pergunta: "O que a gente treinou no 'Segue o Traço'?",
          opcoes: ["Contar de 1 a 10", "A mão obedecer o olho", "Fazer bolinhas"],
          correta: 1,
          explicacao: "Isso! O olho vê a linha, a mão segue.",
        },
        {
          pergunta: "Uma borboleta tem os dois lados…",
          opcoes: ["diferentes", "iguais (espelhados)", "sem asa"],
          correta: 1,
          explicacao: "Perfeito! Igualzinho no espelho — chama simetria.",
        },
        {
          pergunta: "Por que Portinari pintava mãos GRANDES?",
          opcoes: ["Pra ficar engraçado", "Pra valorizar o trabalho", "Sem motivo"],
          correta: 1,
          explicacao: "Muito bem! As mãos grandes eram uma homenagem ao trabalhador.",
        },
      ],
    },
    {
      tipo: "missao-casa",
      titulo: "Meu Caderno de Detetive",
      instrucao:
        "Escolhe UM objeto de casa. Desenha só a METADE dele numa folha. Depois tira uma foto pra guardar no seu Caderno de Detetive.",
      ideias: [
        "🍎 Meia maçã",
        "🧸 Metade do urso",
        "🏠 Metade da sua casa desenhada",
        "😀 Metade do seu rosto (olhando o espelho)",
      ],
      cursoSlug: "arte-2ano",
      aulaSlug: "u2-a01-caderno-detetive",
    },
    {
      tipo: "relatorio",
      titulo: "Fim do Treino",
      texto:
        "Você treinou 3 superpoderes hoje: seguir o traço, completar a metade e caçar detalhes escondidos. É assim que os artistas de verdade começam.",
    },
  ],
};

export default aula;
