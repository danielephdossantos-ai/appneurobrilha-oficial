// Banco de dados do módulo LIBRAS — sinais didáticos com instruções de gesto
// Conteúdo é uma introdução lúdica à LIBRAS para crianças, não substitui aula formal.
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
import sauOi from "@/assets/libras/saudacoes/oi.png";
import sauTchau from "@/assets/libras/saudacoes/tchau.png";
import sauObrigado from "@/assets/libras/saudacoes/obrigado.png";
import sauSim from "@/assets/libras/saudacoes/sim.png";
import sauNao from "@/assets/libras/saudacoes/nao.png";
import numUm from "@/assets/libras/numeros/um.png";
import numDois from "@/assets/libras/numeros/dois.png";
import numTres from "@/assets/libras/numeros/tres.png";
import numQuatro from "@/assets/libras/numeros/quatro.png";
import numCinco from "@/assets/libras/numeros/cinco.png";
import aniCachorro from "@/assets/libras/animais/cachorro.png";
import aniGato from "@/assets/libras/animais/gato.png";
import aniPeixe from "@/assets/libras/animais/peixe.png";
import aniPassarinho from "@/assets/libras/animais/passarinho.png";

export type TrilhaSlug =
  | "alfabeto"
  | "familia"
  | "cores"
  | "saudacoes"
  | "numeros"
  | "animais";

export interface Sinal {
  id: string;
  nome: string;
  imagem: string;
  nivel: 1 | 2 | 3;
  /** Descrição curta do gesto, narrada pela Profe Lia */
  instrucao: string;
  /** Passos numerados para a tela de introdução */
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
    slug: "saudacoes",
    nome: "Saudações",
    descricao: "Oi, tchau e mais",
    cor: "text-teal-600",
    bg: "from-teal-100 to-cyan-100",
    sinais: [
      { id: "oi", nome: "Oi", imagem: sauOi, nivel: 1,
        instrucao: "Para dizer Oi, levante a mão aberta e balance de leve, com um sorriso.",
        passos: ["Mão aberta para cima", "Palma para frente", "Balance de leve"] },
      { id: "tchau", nome: "Tchau", imagem: sauTchau, nivel: 1,
        instrucao: "Para dizer Tchau, abra a mão e balance os dedinhos para os lados.",
        passos: ["Mão aberta", "Palma para frente", "Balance os dedos"] },
      { id: "obrigado", nome: "Obrigado", imagem: sauObrigado, nivel: 2,
        instrucao: "Para dizer Obrigado, encoste os dedinhos no queixo e leve a mão para frente.",
        passos: ["Dedos no queixo", "Solte a mão para frente", "Sorria"] },
      { id: "sim", nome: "Sim", imagem: sauSim, nivel: 1,
        instrucao: "Para dizer Sim, mostre o polegar para cima e balance a cabeça que sim.",
        passos: ["Polegar para cima", "Cabeça acena sim", "Sorria"] },
      { id: "nao", nome: "Não", imagem: sauNao, nivel: 1,
        instrucao: "Para dizer Não, balance o indicador para os lados, dizendo não com a cabeça.",
        passos: ["Indicador esticado", "Balance para os lados", "Cabeça diz não"] },
    ],
  },
  {
    slug: "alfabeto",
    nome: "Alfabeto",
    descricao: "Letras A até J",
    cor: "text-sky-600",
    bg: "from-sky-100 to-cyan-100",
    sinais: [
      { id: "a", nome: "A", imagem: letraA, nivel: 1,
        instrucao: "Letra A: feche a mãozinha, polegar do lado do indicador, palma para frente.",
        passos: ["Feche a mão", "Polegar do lado", "Palma para frente"] },
      { id: "b", nome: "B", imagem: letraB, nivel: 1,
        instrucao: "Letra B: quatro dedinhos juntos esticados para cima e polegar dobrado na palma.",
        passos: ["Quatro dedos para cima", "Dedos juntinhos", "Polegar na palma"] },
      { id: "c", nome: "C", imagem: letraC, nivel: 1,
        instrucao: "Letra C: curve a mão como se fosse pegar um copinho.",
        passos: ["Curve a mão", "Como pegar um copo", "Forma um C"] },
      { id: "d", nome: "D", imagem: letraD, nivel: 2,
        instrucao: "Letra D: indicador para cima, os outros dedos tocam o polegar formando uma rodinha.",
        passos: ["Indicador para cima", "Outros dedos no polegar", "Forma uma rodinha"] },
      { id: "e", nome: "E", imagem: letraE, nivel: 2,
        instrucao: "Letra E: dobre todos os dedinhos e toque a ponta deles no polegar.",
        passos: ["Dobre os dedos", "Tocam o polegar", "Palma para frente"] },
      { id: "f", nome: "F", imagem: letraF, nivel: 2,
        instrucao: "Letra F: polegar e indicador formam uma rodinha, três dedos esticados para cima.",
        passos: ["Polegar e indicador em rodinha", "Três dedos para cima", "Palma para frente"] },
      { id: "g", nome: "G", imagem: letraG, nivel: 3,
        instrucao: "Letra G: indicador apontando para o lado e polegar paralelo embaixo.",
        passos: ["Indicador para o lado", "Polegar embaixo paralelo", "Outros dedos fechados"] },
      { id: "h", nome: "H", imagem: letraH, nivel: 3,
        instrucao: "Letra H: indicador e dedo do meio esticados juntos para o lado.",
        passos: ["Dois dedos para o lado", "Indicador e médio juntos", "Outros fechados"] },
      { id: "i", nome: "I", imagem: letraI, nivel: 3,
        instrucao: "Letra I: só o mindinho levantado para cima.",
        passos: ["Mindinho para cima", "Outros fechados", "Palma para frente"] },
      { id: "j", nome: "J", imagem: letraJ, nivel: 3,
        instrucao: "Letra J: mindinho para cima e desenhe um J no ar, com curvinha para baixo.",
        passos: ["Mindinho para cima", "Desenhe um J no ar", "Curvinha para baixo"] },
    ],
  },
  {
    slug: "numeros",
    nome: "Números",
    descricao: "1, 2, 3, 4, 5",
    cor: "text-indigo-600",
    bg: "from-indigo-100 to-violet-100",
    sinais: [
      { id: "1", nome: "Um", imagem: numUm, nivel: 1,
        instrucao: "Número 1: levante só o indicador para cima.",
        passos: ["Indicador para cima", "Outros fechados", "Palma para frente"] },
      { id: "2", nome: "Dois", imagem: numDois, nivel: 1,
        instrucao: "Número 2: indicador e médio para cima, abertos como um V.",
        passos: ["Dois dedos para cima", "Em forma de V", "Outros fechados"] },
      { id: "3", nome: "Três", imagem: numTres, nivel: 2,
        instrucao: "Número 3: polegar, indicador e médio esticados.",
        passos: ["Três dedos abertos", "Polegar, indicador e médio", "Outros fechados"] },
      { id: "4", nome: "Quatro", imagem: numQuatro, nivel: 2,
        instrucao: "Número 4: quatro dedinhos para cima, polegar dobrado na palma.",
        passos: ["Quatro dedos para cima", "Polegar dobrado", "Palma para frente"] },
      { id: "5", nome: "Cinco", imagem: numCinco, nivel: 3,
        instrucao: "Número 5: abra a mão inteira, todos os dedinhos esticados.",
        passos: ["Mão totalmente aberta", "Todos os dedos esticados", "Palma para frente"] },
    ],
  },
  {
    slug: "familia",
    nome: "Família",
    descricao: "Pessoas queridas",
    cor: "text-rose-600",
    bg: "from-rose-100 to-pink-100",
    sinais: [
      { id: "mae", nome: "Mãe", imagem: familiaMae, nivel: 1,
        instrucao: "Mãe: toque a ponta do polegar na bochecha duas vezinhas.",
        passos: ["Estique o polegar", "Toque a bochecha", "Bata duas vezes"] },
      { id: "pai", nome: "Pai", imagem: familiaPai, nivel: 1,
        instrucao: "Pai: toque a ponta do polegar na testa duas vezinhas.",
        passos: ["Estique o polegar", "Toque a testa", "Bata duas vezes"] },
      { id: "irmao", nome: "Irmão", imagem: familiaIrmao, nivel: 2,
        instrucao: "Irmão: faça a letra A e bata levemente perto do ombro.",
        passos: ["Mão fechada em A", "Perto do ombro", "Bata levinho"] },
      { id: "vovo", nome: "Vovó", imagem: familiaVovo, nivel: 3,
        instrucao: "Vovó: polegar na bochecha e gire a mão para frente duas vezes.",
        passos: ["Polegar na bochecha", "Gire para frente", "Repita duas vezes"] },
      { id: "vovoo", nome: "Vovô", imagem: familiaVovoo, nivel: 3,
        instrucao: "Vovô: polegar na testa e gire a mão para frente duas vezes.",
        passos: ["Polegar na testa", "Gire para frente", "Repita duas vezes"] },
    ],
  },
  {
    slug: "animais",
    nome: "Animais",
    descricao: "Bichinhos amigos",
    cor: "text-emerald-600",
    bg: "from-emerald-100 to-green-100",
    sinais: [
      { id: "cachorro", nome: "Cachorro", imagem: aniCachorro, nivel: 1,
        instrucao: "Cachorro: estale os dedos duas vezes ao lado da perna, como quem chama o cão.",
        passos: ["Mão ao lado da perna", "Estale os dedos", "Repita duas vezes"] },
      { id: "gato", nome: "Gato", imagem: aniGato, nivel: 1,
        instrucao: "Gato: com os dedinhos juntos, faça o bigode do gato saindo da bochecha.",
        passos: ["Dedos juntos como bigode", "Encoste na bochecha", "Puxe para fora"] },
      { id: "peixe", nome: "Peixe", imagem: aniPeixe, nivel: 2,
        instrucao: "Peixe: mão esticada na horizontal e balance como um peixinho nadando.",
        passos: ["Mão esticada na horizontal", "Balance os dedinhos", "Como um peixinho"] },
      { id: "passarinho", nome: "Passarinho", imagem: aniPassarinho, nivel: 3,
        instrucao: "Passarinho: junte o polegar e o indicador e abra e feche, como um biquinho.",
        passos: ["Polegar e indicador juntos", "Perto da boca", "Abre e fecha o biquinho"] },
    ],
  },
  {
    slug: "cores",
    nome: "Cores",
    descricao: "Cores do mundo",
    cor: "text-amber-600",
    bg: "from-amber-100 to-yellow-100",
    sinais: [
      { id: "vermelho", nome: "Vermelho", imagem: corVermelho, nivel: 1,
        instrucao: "Vermelho: toque a ponta do indicador no lábio de baixo e desça um pouquinho.",
        passos: ["Indicador esticado", "Toque o lábio de baixo", "Desça um pouco"] },
      { id: "azul", nome: "Azul", imagem: corAzul, nivel: 1,
        instrucao: "Azul: faça a letra B e balance levemente para os lados.",
        passos: ["Mão em B", "Palma para frente", "Balance para os lados"] },
      { id: "amarelo", nome: "Amarelo", imagem: corAmarelo, nivel: 2,
        instrucao: "Amarelo: abra polegar e mindinho em Y e balance no ar.",
        passos: ["Polegar e mindinho abertos", "Outros fechados", "Balance no ar"] },
      { id: "verde", nome: "Verde", imagem: corVerde, nivel: 2,
        instrucao: "Verde: dedos em V e balance para os lados.",
        passos: ["Dedos em V", "Palma para frente", "Balance para os lados"] },
      { id: "rosa", nome: "Rosa", imagem: corRosa, nivel: 3,
        instrucao: "Rosa: indicador no queixo e faça um circulinho devagar.",
        passos: ["Indicador no queixo", "Faça um circulinho", "Bem devagar"] },
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
