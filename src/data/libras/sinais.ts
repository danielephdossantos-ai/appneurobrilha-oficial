// Dados do módulo LIBRAS — sinais com instruções de gesto narradas pela Profe Lia
import letraA from "@/assets/libras/letras/a.png";
import letraB from "@/assets/libras/letras/b.png";
import letraC from "@/assets/libras/letras/c.png";
import letraD from "@/assets/libras/letras/d.png";
import letraE from "@/assets/libras/letras/e.png";
import letraF from "@/assets/libras/letras/f.png";
import letraG from "@/assets/libras/letras/g.png";
import letraH from "@/assets/libras/letras/h.png";
import letraI from "@/assets/libras/letras/i.png";
import letraJ from "@/assets/libras/letras/j.png";
import familiaMae from "@/assets/libras/familia/mae.png";
import familiaPai from "@/assets/libras/familia/pai.png";
import familiaIrmao from "@/assets/libras/familia/irmao.png";
import familiaVovo from "@/assets/libras/familia/vovo.png";
import familiaVovoo from "@/assets/libras/familia/vovoo.png";
import corVermelho from "@/assets/libras/cores/vermelho.png";
import corAzul from "@/assets/libras/cores/azul.png";
import corAmarelo from "@/assets/libras/cores/amarelo.png";
import corVerde from "@/assets/libras/cores/verde.png";
import corRosa from "@/assets/libras/cores/rosa.png";

export type TrilhaSlug = "alfabeto" | "familia" | "cores";

export interface Sinal {
  id: string;
  nome: string;
  imagem: string | null;
  nivel: 1 | 2 | 3;
  /** Descrição curta do gesto, narrada pela Profe Lia */
  instrucao: string;
  /** Passos numerados para a tela de aula */
  passos: string[];
}

export interface Trilha {
  slug: TrilhaSlug;
  nome: string;
  descricao: string;
  cor: string;
  bg: string;
  sinais: Sinal[];
}

export const TRILHAS: Trilha[] = [
  {
    slug: "alfabeto",
    nome: "Alfabeto",
    descricao: "Letras A até J",
    cor: "text-sky-600",
    bg: "from-sky-100 to-cyan-100",
    sinais: [
      {
        id: "a", nome: "A", imagem: letraA, nivel: 1,
        instrucao: "Para fazer a letra A, feche a mãozinha. O polegar fica do lado, pertinho do indicador. Mostre a palma da mão.",
        passos: ["Feche a mão", "Polegar do lado do indicador", "Palma virada para frente"],
      },
      {
        id: "b", nome: "B", imagem: letraB, nivel: 1,
        instrucao: "Para fazer a letra B, estique os quatro dedinhos juntos para cima e dobre o polegar na palma.",
        passos: ["Quatro dedos esticados para cima", "Dedos bem juntinhos", "Polegar dobrado na palma"],
      },
      {
        id: "c", nome: "C", imagem: letraC, nivel: 1,
        instrucao: "Para fazer a letra C, curve a mão como se fosse pegar um copinho. Os dedos e o polegar formam um C.",
        passos: ["Curve a mão", "Como pegar um copo", "Forma a letra C"],
      },
      {
        id: "d", nome: "D", imagem: letraD, nivel: 2,
        instrucao: "Para fazer a letra D, levante o indicador para cima. Os outros três dedinhos encostam no polegar e formam uma rodinha.",
        passos: ["Indicador apontando para cima", "Os outros dedos tocam o polegar", "Forma uma rodinha"],
      },
      {
        id: "e", nome: "E", imagem: letraE, nivel: 2,
        instrucao: "Para fazer a letra E, dobre todos os dedinhos. As pontas dos dedos tocam o polegar.",
        passos: ["Dobre os dedos", "Pontas tocam o polegar", "Palma virada para frente"],
      },
      {
        id: "f", nome: "F", imagem: letraF, nivel: 2,
        instrucao: "Para fazer a letra F, junte o polegar e o indicador formando uma rodinha. Os outros três dedos ficam esticados para cima.",
        passos: ["Polegar e indicador fazem rodinha", "Três dedos esticados para cima", "Palma virada para frente"],
      },
      {
        id: "g", nome: "G", imagem: letraG, nivel: 3,
        instrucao: "Para fazer a letra G, aponte o indicador para o lado. O polegar fica paralelo embaixo. Os outros dedinhos ficam fechados.",
        passos: ["Indicador apontando para o lado", "Polegar paralelo embaixo", "Outros dedos fechados"],
      },
      {
        id: "h", nome: "H", imagem: letraH, nivel: 3,
        instrucao: "Para fazer a letra H, estique o indicador e o dedo do meio juntos para o lado. Os outros dedinhos ficam fechados.",
        passos: ["Dois dedos esticados para o lado", "Indicador e médio juntinhos", "Outros dedos fechados"],
      },
      {
        id: "i", nome: "I", imagem: letraI, nivel: 3,
        instrucao: "Para fazer a letra I, levante só o mindinho para cima. Os outros dedinhos ficam fechados.",
        passos: ["Só o mindinho para cima", "Outros dedos fechados", "Palma virada para frente"],
      },
      {
        id: "j", nome: "J", imagem: letraJ, nivel: 3,
        instrucao: "Para fazer a letra J, levante o mindinho e desenhe um J no ar, fazendo uma curvinha para baixo.",
        passos: ["Mindinho para cima", "Desenhe um J no ar", "Faça a curvinha para baixo"],
      },
    ],
  },
  {
    slug: "familia",
    nome: "Família",
    descricao: "Pessoas importantes",
    cor: "text-rose-600",
    bg: "from-rose-100 to-pink-100",
    sinais: [
      {
        id: "mae", nome: "Mãe", imagem: familiaMae, nivel: 1,
        instrucao: "Para sinalizar Mãe, toque a ponta do polegar na bochecha, duas vezinhas.",
        passos: ["Estique o polegar", "Toque a bochecha", "Bata duas vezes de leve"],
      },
      {
        id: "pai", nome: "Pai", imagem: familiaPai, nivel: 1,
        instrucao: "Para sinalizar Pai, toque a ponta do polegar na testa, duas vezinhas.",
        passos: ["Estique o polegar", "Toque a testa", "Bata duas vezes de leve"],
      },
      {
        id: "irmao", nome: "Irmão", imagem: familiaIrmao, nivel: 2,
        instrucao: "Para sinalizar Irmão, faça a letra A com a mão e bata levemente no peito, perto do ombro.",
        passos: ["Mão fechada em A", "Encoste perto do ombro", "Bata levinho no peito"],
      },
      {
        id: "vovo", nome: "Vovó", imagem: familiaVovo, nivel: 3,
        instrucao: "Para sinalizar Vovó, toque o polegar na bochecha e gire um pouquinho a mão para frente, duas vezes.",
        passos: ["Polegar na bochecha", "Gire a mão para frente", "Repita duas vezes"],
      },
      {
        id: "vovoo", nome: "Vovô", imagem: familiaVovoo, nivel: 3,
        instrucao: "Para sinalizar Vovô, toque o polegar na testa e gire um pouquinho a mão para frente, duas vezes.",
        passos: ["Polegar na testa", "Gire a mão para frente", "Repita duas vezes"],
      },
    ],
  },
  {
    slug: "cores",
    nome: "Cores",
    descricao: "Cores do mundo",
    cor: "text-amber-600",
    bg: "from-amber-100 to-yellow-100",
    sinais: [
      {
        id: "vermelho", nome: "Vermelho", imagem: corVermelho, nivel: 1,
        instrucao: "Para sinalizar Vermelho, toque a ponta do indicador no lábio de baixo e desça um pouquinho.",
        passos: ["Estique o indicador", "Toque o lábio de baixo", "Desça um pouquinho"],
      },
      {
        id: "azul", nome: "Azul", imagem: corAzul, nivel: 1,
        instrucao: "Para sinalizar Azul, faça a letra B com a mão e balance levemente para os lados.",
        passos: ["Faça a mão em B", "Palma para frente", "Balance para os lados"],
      },
      {
        id: "amarelo", nome: "Amarelo", imagem: corAmarelo, nivel: 2,
        instrucao: "Para sinalizar Amarelo, abra só o polegar e o mindinho como um Y, e balance a mão no ar.",
        passos: ["Polegar e mindinho abertos", "Outros dedos fechados", "Balance no ar"],
      },
      {
        id: "verde", nome: "Verde", imagem: corVerde, nivel: 2,
        instrucao: "Para sinalizar Verde, estique o indicador e o dedo do meio em V e balance os dedinhos para os lados.",
        passos: ["Dedos em V", "Palma para frente", "Balance para os lados"],
      },
      {
        id: "rosa", nome: "Rosa", imagem: corRosa, nivel: 3,
        instrucao: "Para sinalizar Rosa, toque o indicador no queixo e faça um circulinho devagar.",
        passos: ["Toque o queixo", "Com o indicador", "Faça um circulinho"],
      },
    ],
  },
];

export function getTrilha(slug: TrilhaSlug): Trilha | undefined {
  return TRILHAS.find((t) => t.slug === slug);
}

export function falar(texto: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = "pt-BR";
    u.rate = 0.92;
    u.pitch = 1.1;
    window.speechSynthesis.speak(u);
  } catch {
    /* ignore */
  }
}
