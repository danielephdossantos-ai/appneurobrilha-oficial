import apartamentoImg from "./assets/moradia-apartamento.png";
import casaUrbanaImg from "./assets/moradia-casa-urbana.png";
import fazendaImg from "./assets/moradia-fazenda.png";
import ribeirinhaImg from "./assets/moradia-ribeirinha.png";
import aldeiaImg from "./assets/moradia-aldeia.png";

export type MoradiaId = "apartamento" | "casa-urbana" | "fazenda" | "ribeirinha" | "aldeia";

export interface Pista {
  id: string;
  /** posição relativa dentro da imagem em % (0-100) */
  x: number;
  y: number;
  titulo: string;
  descoberta: string;
}

export interface Moradia {
  id: MoradiaId;
  nome: string;
  emoji: string;
  lugar: string;
  cor: string;
  imagemUrl: string;
  hipotese: {
    pergunta: string;
    opcoes: { label: string; icone: string; correta: boolean; feedback: string }[];
  };
  pistas: Pista[];
  ficha: {
    clima: string;
    material: string;
    motivo: string;
  };
}

export const MORADIAS: Moradia[] = [
  {
    id: "apartamento",
    nome: "Apartamento",
    emoji: "🏢",
    lugar: "Cidade grande",
    cor: "#EC4899",
    imagemUrl: apartamentoImg,
    hipotese: {
      pergunta: "Por que na cidade grande as pessoas moram EMPILHADAS?",
      opcoes: [
        { label: "Porque cabem MUITAS famílias em pouco chão", icone: "🏙️", correta: true, feedback: "Isso! Na cidade tem muita gente e pouco espaço, então crescem pra CIMA!" },
        { label: "Porque é mais bonito", icone: "🎨", correta: false, feedback: "Não é sobre beleza — é sobre CABER muita gente num lugar pequeno." },
        { label: "Porque tem medo do chão", icone: "😱", correta: false, feedback: "Nada disso! É pra economizar espaço na cidade cheia." },
      ],
    },
    pistas: [
      { id: "andares", x: 50, y: 25, titulo: "Muitos andares", descoberta: "Um apartamento tem vários andares empilhados — assim cabem MUITAS famílias no mesmo terreno." },
      { id: "janelas", x: 25, y: 45, titulo: "Muitas janelas iguais", descoberta: "Cada janela é a casa de uma família diferente!" },
      { id: "porta", x: 50, y: 82, titulo: "Uma porta principal", descoberta: "Todo mundo entra pela mesma porta e sobe de elevador ou escada." },
    ],
    ficha: { clima: "Qualquer clima 🌤️", material: "Concreto e vidro 🧱", motivo: "Pouco espaço, muita gente 🏙️" },
  },
  {
    id: "casa-urbana",
    nome: "Casa de Rua",
    emoji: "🏠",
    lugar: "Bairro na cidade",
    cor: "#EF4444",
    imagemUrl: casaUrbanaImg,
    hipotese: {
      pergunta: "Por que a casa de rua tem TELHADO INCLINADO?",
      opcoes: [
        { label: "Pra água da chuva ESCORRER", icone: "🌧️", correta: true, feedback: "Exato! O telhado inclinado faz a chuva escorrer e não estragar a casa." },
        { label: "Pra ficar mais alta", icone: "📏", correta: false, feedback: "A altura não é o motivo — é a CHUVA que precisa escorrer!" },
        { label: "Pra pássaro pousar", icone: "🐦", correta: false, feedback: "Fofo, mas não! É pra chuva escorrer sem entrar em casa." },
      ],
    },
    pistas: [
      { id: "telhado", x: 50, y: 20, titulo: "Telhado inclinado", descoberta: "A inclinação faz a chuva ESCORRER pro chão — não fica água em cima da casa." },
      { id: "jardim", x: 20, y: 80, titulo: "Jardim pequeno", descoberta: "Espaço pra plantar florzinhas e brincar no quintal." },
      { id: "porta", x: 55, y: 65, titulo: "Porta na frente", descoberta: "A porta dá pra rua — dá pra ir andando comprar pão!" },
    ],
    ficha: { clima: "Chove bastante 🌧️", material: "Tijolo e telha 🧱", motivo: "Família em um só terreno 👨‍👩‍👧" },
  },
  {
    id: "fazenda",
    nome: "Casa de Fazenda",
    emoji: "🌾",
    lugar: "Campo / zona rural",
    cor: "#F59E0B",
    imagemUrl: fazendaImg,
    hipotese: {
      pergunta: "Por que a casa de fazenda tem TANTO ESPAÇO em volta?",
      opcoes: [
        { label: "Pra plantar e criar ANIMAIS", icone: "🐄", correta: true, feedback: "Isso! No campo tem MUITO espaço pra plantação e bichos." },
        { label: "Porque ninguém gosta dela", icone: "😢", correta: false, feedback: "Que nada! É porque no campo TEM espaço de sobra." },
        { label: "Pra correr da chuva", icone: "🏃", correta: false, feedback: "Não! É pra plantar comida e criar animais." },
      ],
    },
    pistas: [
      { id: "madeira", x: 50, y: 40, titulo: "Feita de madeira", descoberta: "No campo tem MUITA árvore por perto — dá pra construir de madeira." },
      { id: "animais", x: 22, y: 70, titulo: "Animais por perto", descoberta: "Galinhas, vacas e cavalos vivem soltos no terreno enorme." },
      { id: "campo", x: 80, y: 55, titulo: "Campo aberto", descoberta: "Espaço pra plantar milho, feijão, verduras… muita comida!" },
    ],
    ficha: { clima: "Sol e chuva ☀️🌧️", material: "Madeira e telha 🪵", motivo: "Plantar e criar animais 🌾" },
  },
  {
    id: "ribeirinha",
    nome: "Casa Ribeirinha",
    emoji: "🛶",
    lugar: "Beira de rio (Amazônia)",
    cor: "#0EA5E9",
    imagemUrl: ribeirinhaImg,
    hipotese: {
      pergunta: "Por que essa casa fica em cima de PAUZINHOS ALTOS?",
      opcoes: [
        { label: "Pra ÁGUA DO RIO não entrar quando enche", icone: "🌊", correta: true, feedback: "Perfeito! Quando o rio ENCHE, a casa fica ACIMA da água — em segurança!" },
        { label: "Pra ficar mais bonita", icone: "✨", correta: false, feedback: "Não é decoração — é PROTEÇÃO contra o rio que sobe!" },
        { label: "Pra ver longe", icone: "👀", correta: false, feedback: "Não é pela vista — é pra fugir da água que sobe na cheia." },
      ],
    },
    pistas: [
      { id: "estacas", x: 40, y: 75, titulo: "Estacas altas", descoberta: "As estacas SEGURAM a casa BEM ALTO — quando o rio enche, a água passa POR BAIXO." },
      { id: "escada", x: 70, y: 70, titulo: "Escada de madeira", descoberta: "Pra subir da canoa até a casa lá em cima!" },
      { id: "canoa", x: 20, y: 90, titulo: "Canoa amarrada", descoberta: "A CANOA é o carro deles — usam pra ir na escola, mercado e visitar amigos." },
      { id: "telhado", x: 50, y: 20, titulo: "Telhado de palha", descoberta: "A palha vem das folhas da floresta e é fresquinha no calor." },
    ],
    ficha: { clima: "Quente e chuvoso 🌧️🔥", material: "Madeira e palha 🪵", motivo: "Rio que sobe e desce 🌊" },
  },
  {
    id: "aldeia",
    nome: "Oca da Aldeia",
    emoji: "🏕️",
    lugar: "Aldeia indígena",
    cor: "#10B981",
    imagemUrl: aldeiaImg,
    hipotese: {
      pergunta: "Por que a oca é feita de MADEIRA E PALHA?",
      opcoes: [
        { label: "Porque a NATUREZA dá esses materiais", icone: "🌳", correta: true, feedback: "Isso! Os povos indígenas usam o que a FLORESTA oferece — sem estragar a natureza." },
        { label: "Porque é mais barato", icone: "💰", correta: false, feedback: "Não é sobre dinheiro — é sobre usar o que a NATUREZA dá." },
        { label: "Porque é rápido", icone: "⚡", correta: false, feedback: "Não é pressa — é usar o que a floresta oferece com respeito." },
      ],
    },
    pistas: [
      { id: "palha", x: 50, y: 25, titulo: "Cobertura de palha", descoberta: "A palha vem das folhas da PALMEIRA — é fresca e fácil de trocar." },
      { id: "madeira", x: 30, y: 55, titulo: "Estrutura de madeira", descoberta: "Toda a estrutura vem de madeira da floresta." },
      { id: "fogueira", x: 75, y: 80, titulo: "Fogueira", descoberta: "A fogueira é usada pra cozinhar e reunir a família à noite." },
      { id: "floresta", x: 15, y: 20, titulo: "Floresta em volta", descoberta: "A floresta é a CASA GRANDE — dá comida, remédio e materiais." },
    ],
    ficha: { clima: "Quente da floresta 🌳🔥", material: "Madeira e palha da floresta 🌿", motivo: "Viver em harmonia com a natureza 💚" },
  },
];

export function moradia(id: MoradiaId): Moradia {
  return MORADIAS.find((m) => m.id === id)!;
}
