import type { AulaArte } from "./u1-a01-cores-falam";
import floresta from "@/assets/arte-2ano/referencias/floresta-sonora.jpg.asset.json";
import { OBRAS_FAMOSAS } from "./u1-a01-cores-falam";
import obraAthos from "@/assets/arte-2ano/obras/athos-inspirado.jpg.asset.json";
import obraTarsila from "@/assets/arte-2ano/obras/tarsila-inspirado.jpg.asset.json";
import obraNoiteEstrelada from "@/assets/arte-2ano/obras/noite-estrelada.jpg.asset.json";

const aula: AulaArte = {
  id: "u3-a01-descobrindo-os-sons",
  ano: "2º Ano",
  unidade: 3,
  aula: 1,
  tituloUnidade: "Música em Todo Lugar",
  titulo: "Descobrindo os Sons",
  duracaoMin: "45 a 60 min",
  objetivos: [
    "reconhecer diferentes sons",
    "identificar ritmo",
    "criar pequenas sequências musicais",
  ],
  etapas: [
    {
      tipo: "historia",
      titulo: "A Floresta Musical",
      icone: "nota",
      texto:
        "Brilha entrou numa floresta bem diferente: nela, tudo faz música! O vento cantarola, a água canta baixinho, os passarinhos assoviam, até as pedras têm som. Vem descobrir quantos sons diferentes existem no mundo!",
      lapis: [
        { cor: "verde",   hex: "#7FAE73", emocao: "Floresta",     frase: "Verde: os sons da floresta." },
        { cor: "azul",    hex: "#5A8FBF", emocao: "Água",         frase: "Azul: o som da água correndo." },
        { cor: "amarelo", hex: "#F0C24A", emocao: "Pássaros",     frase: "Amarelo: o canto dos pássaros no sol." },
        { cor: "roxo",    hex: "#8A5A83", emocao: "Silêncio",     frase: "Roxo: o silêncio também faz parte da música." },
        { cor: "vermelho",hex: "#D64545", emocao: "Ritmo",        frase: "Vermelho: o ritmo do coração batendo." },
      ],
      convite: "Fecha os olhos por um segundinho e vem escutar comigo!",
    },
    {
      tipo: "floresta-sonora",
      titulo: "Toca em Cada Som da Floresta",
      instrucao: "Toca nos pontinhos brilhantes da foto. Cada um tem um som diferente. Escuta com atenção!",
      fotoUrl: floresta.url,
      alt: "Floresta com árvores altas e raios de sol filtrando",
      sons: [
        { x: 15, y: 30, nome: "Vento nas folhas", emoji: "🌬", timbre: "vento" },
        { x: 42, y: 22, nome: "Passarinho",       emoji: "🐦", timbre: "passaro" },
        { x: 70, y: 40, nome: "Água correndo",    emoji: "💧", timbre: "agua" },
        { x: 25, y: 78, nome: "Folhas no chão",   emoji: "🍂", timbre: "folha" },
        { x: 60, y: 82, nome: "Pedra caindo",     emoji: "🪨", timbre: "pedra" },
        { x: 85, y: 60, nome: "Grilo cantando",   emoji: "🦗", timbre: "grilo" },
      ],
    },
    {
      tipo: "bater-ritmo",
      titulo: "🥁 Bater o Ritmo",
      instrucao: "Toca na tela toda vez que o coração pulsar. Consegue acompanhar?",
      bpm: 80,
      batidasTotais: 12,
    },
    {
      tipo: "sequenciador",
      titulo: "Cria a Sua Sequência",
      instrucao:
        "Toca nos quadradinhos para acender cada som. Depois aperta ▶ e escuta a música que VOCÊ criou!",
      passos: 8,
      sons: [
        { nome: "Sino",     emoji: "🔔", timbre: "sino",    cor: "#F0C24A" },
        { nome: "Pássaro",  emoji: "🐦", timbre: "passaro", cor: "#7FAE73" },
        { nome: "Água",     emoji: "💧", timbre: "agua",    cor: "#5A8FBF" },
        { nome: "Pedra",    emoji: "🪨", timbre: "pedra",   cor: "#8B5A3C" },
      ],
    },
    {
      tipo: "pintar-compasso",
      titulo: "🎨 Pintar no Compasso",
      instrucao: "Arrasta o dedo pela tela e aperta ▶. A tinta só carimba na batida da música!",
      bpm: 90,
      paleta: ["#EF4444", "#F59E0B", "#22C55E", "#3B82F6", "#8B5CF6", "#EC4899"],
    },
    {
      tipo: "memoria-sonora",
      titulo: "Memória Sonora",
      instrucao:
        "Vira duas cartas. Se os sons forem iguais, ganhou o par! Escuta com bastante atenção.",
      pares: [
        { nome: "Sino",     emoji: "🔔", timbre: "sino" },
        { nome: "Pássaro",  emoji: "🐦", timbre: "passaro" },
        { nome: "Água",     emoji: "💧", timbre: "agua" },
        { nome: "Vento",    emoji: "🌬", timbre: "vento" },
      ],
    },
    {
      tipo: "ritmo-repetir",
      titulo: "Repete o Ritmo",
      instrucao:
        "Escuta a sequência de sons e depois repita tocando na mesma ordem. Fica atento!",
      sons: [
        { nome: "Sino",    emoji: "🔔", timbre: "sino",    cor: "#F0C24A" },
        { nome: "Pássaro", emoji: "🐦", timbre: "passaro", cor: "#7FAE73" },
        { nome: "Água",    emoji: "💧", timbre: "agua",    cor: "#5A8FBF" },
        { nome: "Pedra",   emoji: "🪨", timbre: "pedra",   cor: "#8B5A3C" },
      ],
      sequencias: [
        [0, 1, 2],
        [2, 0, 1, 3],
        [1, 3, 0, 2, 1],
      ],
    },
    {
      tipo: "som-vira-traco",
      titulo: "🌊 Som Vira Traço",
      instrucao: "Cada som deixa um risco diferente. Toca no som, arrasta o dedo e vê o que aparece!",
      sons: [
        { nome: "Água",     emoji: "💧", timbre: "agua",    padrao: "onda",    cor: "#3B82F6" },
        { nome: "Pedra",    emoji: "🪨", timbre: "pedra",   padrao: "pontos",  cor: "#78350F" },
        { nome: "Pássaro",  emoji: "🐦", timbre: "passaro", padrao: "zigzag",  cor: "#F59E0B" },
        { nome: "Vento",    emoji: "🌬", timbre: "vento",   padrao: "espiral", cor: "#8B5CF6" },
        { nome: "Sino",     emoji: "🔔", timbre: "sino",    padrao: "linha",   cor: "#EF4444" },
      ],
    },

    {
      tipo: "galeria-obras",
      titulo: "🖼 Obras com Ritmo",
      instrucao: "Toca nessas obras. Cada uma tem um RITMO visual — repetição, movimento, batida.",
      obras: OBRAS_FAMOSAS.filter(o => ["athos", "tarsila", "noite-estrelada"].includes(o.id)),
    },
    {
      tipo: "memoria-obras",
      titulo: "🃏 Memória das Obras",
      instrucao: "Encontra os pares: obra ↔ artista das pinturas ritmadas.",
      pares: [
        { id: "athos", titulo: "Mosaico Geométrico", artista: "Athos Bulcão", url: obraAthos.url },
        { id: "tarsila", titulo: "Boneca de Sol", artista: "Tarsila", url: obraTarsila.url },
        { id: "noite-estrelada", titulo: "A Noite Estrelada", artista: "Van Gogh", url: obraNoiteEstrelada.url },
      ],
    },
    {
      tipo: "quiz",
      titulo: "O Que Você Aprendeu?",
      perguntas: [
        {
          pergunta: "O que é RITMO?",
          opcoes: ["A cor da música", "Uma sequência de sons com pulsação", "Um instrumento de sopro"],
          correta: 1,
          explicacao: "Isso! Ritmo é a sequência de sons com uma pulsação, como o coração batendo.",
        },
        {
          pergunta: "O silêncio faz parte da música?",
          opcoes: ["Não, música é só som", "Sim, ele descansa o ouvido"],
          correta: 1,
          explicacao: "Muito bem! O silêncio é chamado de pausa e é super importante.",
        },
        {
          pergunta: "Quando um som é BAIXINHO, dizemos que ele tem pouca…",
          opcoes: ["velocidade", "intensidade", "cor"],
          correta: 1,
          explicacao: "Isso mesmo! Intensidade é o quanto o som é forte ou fraco.",
        },
      ],
    },
    {
      tipo: "atividade-manual",
      titulo: "Chocalho Reciclável",
      instrucao:
        "Vamos construir seu instrumento com coisas que iriam para o lixo. Peça ajuda para um adulto e siga os passos!",
      materiais: [
        "1 garrafinha PET vazia e seca (ou lata de leite em pó)",
        "1 punhado de grãos: arroz, feijão ou milho",
        "Fita adesiva colorida ou papel colorido para decorar",
        "Cola e canetinhas",
      ],
      passos: [
        { n: 1, texto: "Coloque um pouquinho de grãos dentro da garrafinha.",       icone: "montagem" },
        { n: 2, texto: "Feche bem a tampa e passe fita adesiva para não abrir.",     icone: "cola"     },
        { n: 3, texto: "Decore a garrafinha com papel colorido ou canetinhas.",     icone: "desenho"  },
        { n: 4, texto: "Chacoalha com força e depois bem devagar. Escuta a diferença!", icone: "pronto" },
      ],
    },
    {
      tipo: "missao-casa",
      titulo: "Orquestra da Natureza",
      instrucao:
        "Saia com a família em um lugar com natureza (quintal, praça, parque). Feche os olhos por 1 minuto e escute TODOS os sons. Depois tire uma foto do lugar!",
      ideias: [
        "🌳 Uma árvore com o vento nas folhas",
        "🐦 Um pássaro que estava cantando",
        "💧 Água correndo em algum lugar",
        "🌼 Uma flor onde você ouviu abelhinha",
      ],
      cursoSlug: "arte-2ano",
      aulaSlug: "u3-a01-orquestra-natureza",
    },
    {
      tipo: "relatorio",
      titulo: "Sua Aventura Musical",
      texto:
        "Você descobriu que o mundo inteiro é uma orquestra! Agora, sempre que quiser, feche os olhos e escute: os sons estão em todo lugar. Isso é o começo de virar músico.",
    },
  ],
};

export default aula;
