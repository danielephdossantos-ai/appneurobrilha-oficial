import type { AulaArte } from "./u1-a01-cores-falam";
import obra from "@/assets/atelier/atelier-obra.jpg.asset.json";
import { OBRAS_FAMOSAS } from "./u1-a01-cores-falam";
import obraTarsila from "@/assets/arte-obras/tarsila-inspirado.jpg.asset.json";
import obraPortinari from "@/assets/arte-obras/portinari-inspirado.jpg.asset.json";
import obraAthos from "@/assets/arte-obras/athos-inspirado.jpg.asset.json";

const aula: AulaArte = {
  id: "u6-a01-movimento-e-cultura",
  ano: "2º Ano",
  unidade: 6,
  aula: 1,
  tituloUnidade: "Movimento e Cultura",
  titulo: "A Arte que se Dança",
  duracaoMin: "45 a 60 min",
  objetivos: [
    "perceber que a dança também é arte",
    "reconhecer ritmos e movimentos da nossa cultura",
    "criar uma máscara para dançar",
  ],
  etapas: [
    {
      tipo: "historia",
      titulo: "A Roda que Nunca Para",
      icone: "nota",
      texto:
        "A Brilha ouviu tambores no fim da rua e correu ver. Era uma roda enorme: gente pulando, cantando e dançando com máscaras coloridas. Cada movimento contava uma história do povo. Vem entender como a dança também é uma arte cheia de sentimento!",
      lapis: [
        { cor: "vermelho", hex: "#D64545", emocao: "Força",    frase: "Vermelho: força e energia na dança." },
        { cor: "amarelo",  hex: "#F0C24A", emocao: "Alegria",  frase: "Amarelo: alegria de dançar." },
        { cor: "azul",     hex: "#5A8FBF", emocao: "Calma",    frase: "Azul: movimentos calmos e suaves." },
        { cor: "verde",    hex: "#7FAE73", emocao: "Ritmo",    frase: "Verde: o ritmo da nossa terra." },
        { cor: "roxo",     hex: "#8A5A83", emocao: "Mistério", frase: "Roxo: as máscaras misteriosas." },
      ],
      convite: "Levanta e vem se mexer comigo!",
    },
    {
      tipo: "curiosidade",
      titulo: "Você Sabia?",
      texto:
        "No Brasil temos muitas danças que vieram da nossa cultura: samba, frevo, maracatu, quadrilha, ciranda. Cada uma tem seu ritmo, suas cores e suas roupas.",
    },
    {
      tipo: "artista",
      titulo: "Movimento em Cena",
      obraUrl: obra.url,
      obraLegenda: "Cena de dança popular",
      pergunta: "Uma dança pode contar…",
      opcoes: [
        "só passos aleatórios",
        "uma história do povo, com sentimentos",
        "uma conta de matemática",
      ],
      comentario: "Isso! Cada dança carrega histórias, sentimentos e a cultura de um povo.",
    },
    {
      tipo: "cor-emocao",
      titulo: "Cor do Ritmo",
      instrucao: "Toca em cada cor e veja qual ritmo/emoção combina com ela.",
      cartoes: [
        { cor: "vermelho", hex: "#D64545", emoji: "🥁", emocao: "Forte",   explicacao: "Ritmo forte, como tambores." },
        { cor: "amarelo",  hex: "#F0C24A", emoji: "🎉", emocao: "Alegre",  explicacao: "Ritmo animado, dá vontade de pular." },
        { cor: "azul",     hex: "#5A8FBF", emoji: "🌊", emocao: "Suave",   explicacao: "Ritmo calmo, como ondas do mar." },
        { cor: "verde",    hex: "#7FAE73", emoji: "🌿", emocao: "Balanço", explicacao: "Ritmo gostoso, como caminhar na natureza." },
        { cor: "roxo",     hex: "#8A5A83", emoji: "🎭", emocao: "Misterio",explicacao: "Ritmo misterioso, das máscaras e festas." },
      ],
    },
    {
      tipo: "galeria-obras",
      titulo: "🖼 Arte Brasileira",
      instrucao: "Toca em cada obra brasileira. Essas pinturas mostram nossa CULTURA.",
      obras: OBRAS_FAMOSAS.filter(o => ["tarsila", "portinari", "athos"].includes(o.id)),
    },
    {
      tipo: "memoria-obras",
      titulo: "🃏 Memória das Obras",
      instrucao: "Encontra os pares: obra ↔ artista brasileiro.",
      pares: [
        { id: "tarsila", titulo: "Boneca de Sol", artista: "Tarsila", url: obraTarsila.url },
        { id: "portinari", titulo: "Trabalhadores", artista: "Portinari", url: obraPortinari.url },
        { id: "athos", titulo: "Mosaico Geométrico", artista: "Athos Bulcão", url: obraAthos.url },
      ],
    },
    {
      tipo: "quiz",
      titulo: "O Que Você Aprendeu?",
      perguntas: [
        {
          pergunta: "A dança é uma forma de…",
          opcoes: ["arte", "esporte só", "brincadeira sem sentido"],
          correta: 0,
          explicacao: "Isso! A dança é uma das linguagens da arte.",
        },
        {
          pergunta: "Qual dessas é uma dança brasileira?",
          opcoes: ["Frevo", "Balé russo", "Salsa cubana"],
          correta: 0,
          explicacao: "Muito bem! Frevo nasceu em Pernambuco.",
        },
        {
          pergunta: "As MÁSCARAS de dança servem para…",
          opcoes: ["esconder o rosto do dançarino de verdade", "virar um PERSONAGEM na dança", "não deixar cantar"],
          correta: 1,
          explicacao: "Perfeito! Com a máscara o dançarino vira um personagem cheio de expressão.",
        },
      ],
    },
    {
      tipo: "atividade-manual",
      titulo: "Minha Máscara de Dança",
      instrucao:
        "Vamos fazer uma máscara para você virar um personagem dançarino!",
      materiais: [
        "1 folha grossa (cartolina, papelão ou prato de papel)",
        "Tesoura sem ponta (com ajuda de um adulto)",
        "Lápis de cor, canetinhas ou tinta",
        "Elástico ou barbante para prender atrás",
        "Enfeites: penas, papel colorido, glitter (opcional)",
      ],
      passos: [
        { n: 1, texto: "Desenhe o formato da máscara na cartolina.",             icone: "desenho"  },
        { n: 2, texto: "Recorte com ajuda de um adulto e faça os furinhos dos olhos.", icone: "corte"    },
        { n: 3, texto: "Pinte com as cores que combinam com o seu personagem.", icone: "desenho"  },
        { n: 4, texto: "Cole enfeites (penas, papel picado, glitter).",         icone: "cola"     },
        { n: 5, texto: "Amarre o elástico e coloque uma música pra dançar!",    icone: "pronto"   },
      ],
    },
    {
      tipo: "missao-casa",
      titulo: "Dança em Família",
      instrucao:
        "Escolha uma música que a família goste e criem juntos uma pequena coreografia (só 4 movimentos). Depois tire uma foto da roda dançando!",
      ideias: [
        "🎵 Uma música brasileira animada",
        "👏 Bate palmas no ritmo",
        "🕺 Cria 4 passos e repete",
        "📸 Registra a roda!",
      ],
      cursoSlug: "arte-2ano",
      aulaSlug: "u6-a01-danca-familia",
    },
    {
      tipo: "relatorio",
      titulo: "Corpo também é Arte!",
      texto:
        "Você descobriu que o corpo em movimento é uma obra de arte viva. Cada passo, cada máscara, cada ritmo conta uma história do nosso povo. Continue dançando!",
    },
  ],
};

export default aula;
