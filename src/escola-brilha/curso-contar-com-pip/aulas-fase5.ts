import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";

import { url as n0 } from "@/assets/banco-midias/numeros/numero-0.png.asset.json";
import { url as n1 } from "@/assets/banco-midias/numeros/numero-1.png.asset.json";
import { url as n2 } from "@/assets/banco-midias/numeros/numero-2.png.asset.json";
import { url as n3 } from "@/assets/banco-midias/numeros/numero-3.png.asset.json";
import { url as n4 } from "@/assets/banco-midias/numeros/numero-4.png.asset.json";
import { url as n5 } from "@/assets/banco-midias/numeros/numero-5.png.asset.json";
import { url as n6 } from "@/assets/banco-midias/numeros/numero-6.png.asset.json";
import { url as n7 } from "@/assets/banco-midias/numeros/numero-7.png.asset.json";
import { url as n8 } from "@/assets/banco-midias/numeros/numero-8.png.asset.json";
import { url as n9 } from "@/assets/banco-midias/numeros/numero-9.png.asset.json";
import n10 from "@/assets/banco-midias/numeros/numero-10.png";

/**
 * Contar com Pip — FASE 5 · Ten-frame / Quadro do 10
 * --------------------------------------------------
 * Objetivo: internalizar o 10 como referência (benchmark) e o 5 como
 * âncora interna. A criança passa a "ver" 7 como 5+2, 8 como 5+3, e
 * a saber quanto FALTA para 10.
 *
 * Base: Van de Walle (ten-frame); Wynroth/Wright (Math Recovery);
 * Bruner (CPA - concreto→pictórico→abstrato).
 *
 * Semana 1 · O quadro do 10 (0 a 5 na fileira de cima)
 * Semana 2 · Passando de 5 (5+1, 5+2, 5+3, 5+4, 5+5)
 * Semana 3 · Quanto falta pra 10? (complementos)
 * Semana 4 · Mestre do 10 + DIPLOMA
 */

import { url as pipMascot } from "@/assets/pip-girl-mascot.png.asset.json";
const mascote = pipMascot;

const NUM: Record<number, string> = {
  0: n0, 1: n1, 2: n2, 3: n3, 4: n4, 5: n5,
  6: n6, 7: n7, 8: n8, 9: n9, 10: n10,
};

const opN = (n: number, correta: boolean) => ({
  nome: String(n),
  imagemUrl: NUM[n],
  correta,
  quantidade: 1 as const,
});

// ============================================================
// SEMANA 1 · O quadro do 10 (fileira de cima 0→5)
// ============================================================

const dia01: AulaEI = {
  slug: "pip-f5-s1-d1-quadro-do-10",
  titulo: "Dia 1 · Conhecendo o quadro do 10",
  icone: "🔟",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Fase 5! Este é o QUADRO DO 10: duas fileiras de 5. Se encher tudo, dá 10. O quadro nos ajuda a ver os números!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 5,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio: "A fileira de cima do quadro tem 5 casinhas. Conta as bolas.",
      elogio: "Isso! A fileira de cima cheia é 5.",
    },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas bolas viu no quadro?",
      opcoes: [opN(1, true), opN(2, false), opN(3, false)],
      feedbackAcerto: "1 no quadro do 10!", feedbackErro: "Era 1 bolinha." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas bolas?",
      opcoes: [opN(2, true), opN(3, false), opN(1, false)],
      feedbackAcerto: "2!", feedbackErro: "Eram 2." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas?",
      opcoes: [opN(3, true), opN(2, false), opN(4, false)],
      feedbackAcerto: "3!", feedbackErro: "Eram 3." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "A fileira de cima cheia é quanto?",
      opcoes: [opN(5, true), opN(4, false), opN(6, false)],
      feedbackAcerto: "5! Fileira cheia = 5.", feedbackErro: "Fileira de cima cheia = 5." },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Quadro do 10 em casa",
      convite:
        "Desenhe 10 quadradinhos (2 fileiras de 5) numa folha. Coloque 3 feijões dentro. Pergunte: 'quantos?'",
      dicaAdulto:
        "Ten-frame concreto ajuda a criança a formar imagem mental do 10 (Van de Walle).",
    },
    { tipo: "celebracao", medalha: "Dia 1 · Conheci o quadro", mascoteUrl: mascote,
      falaFinal: "Você já conhece o QUADRO DO 10!" },
  ],
  baseCientifica: "Introdução do ten-frame (Van de Walle).",
};

const dia02: AulaEI = {
  slug: "pip-f5-s1-d2-fila-de-cima",
  titulo: "Dia 2 · A fila de cima (1 a 5)",
  icone: "🟦",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Hoje enchemos a fila de cima do quadro, um por um: 1, 2, 3, 4, 5!" },
    { tipo: "contarBolas", imagemUrl: estrela, quantidade: 1,
      itemSingular: "estrela", itemPlural: "estrelas",
      instrucaoAudio: "Coloca 1 na fila de cima.", elogio: "1!" },
    { tipo: "contarBolas", imagemUrl: estrela, quantidade: 3,
      itemSingular: "estrela", itemPlural: "estrelas",
      instrucaoAudio: "Agora 3.", elogio: "3! Faltam 2 pra encher a fila." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas na fila de cima?",
      opcoes: [opN(4, true), opN(3, false), opN(5, false)],
      feedbackAcerto: "4!", feedbackErro: "Eram 4." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "A fila de cima cheia é?",
      opcoes: [opN(5, true), opN(4, false), opN(6, false)],
      feedbackAcerto: "5! Fila cheia = 5!", feedbackErro: "5 é fila cheia." },
    { tipo: "compreensaoImagem", perguntaAudio: "Se a fila de cima está cheia, é quanto?",
      opcoes: [opN(5, true), opN(10, false), opN(4, false)],
      feedbackAcerto: "5!", feedbackErro: "A fila de cima cheia é 5." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Enchendo a fila",
      convite: "Peça a criança pra colocar 4 objetos numa fileira de 5 espaços. 'Quantos faltam pra encher?'",
      dicaAdulto: "Prepara a ideia de complemento (falta 1 pra 5)." },
    { tipo: "celebracao", medalha: "Dia 2 · Fila de cima", mascoteUrl: mascote,
      falaFinal: "Fila de cima dominada!" },
  ],
  baseCientifica: "Composição do 5 no ten-frame.",
};

const dia03: AulaEI = {
  slug: "pip-f5-s1-d3-cinco-ancora",
  titulo: "Dia 3 · O 5 é a nossa âncora",
  icone: "✋",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "O 5 é ESPECIAL: é uma mão inteira e é a fila de cima do quadro!" },
    { tipo: "contarBolas", imagemUrl: flor, quantidade: 5,
      itemSingular: "flor", itemPlural: "flores",
      instrucaoAudio: "Conta as 5 flores.", elogio: "5! Igual aos dedos da mão!" },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas flores?",
      opcoes: [opN(5, true), opN(4, false), opN(6, false)],
      feedbackAcerto: "5!", feedbackErro: "Eram 5." },
    { tipo: "compreensaoImagem", perguntaAudio: "Quantos dedos tem UMA mão?",
      opcoes: [opN(5, true), opN(10, false), opN(4, false)],
      feedbackAcerto: "5!", feedbackErro: "Uma mão = 5 dedos." },
    { tipo: "compreensaoImagem", perguntaAudio: "Quantos dedos tem DUAS mãos?",
      opcoes: [opN(10, true), opN(5, false), opN(8, false)],
      feedbackAcerto: "10! Igual o quadro cheio!", feedbackErro: "Duas mãos = 10 dedos." },
    { tipo: "compararGrupos", instrucaoAudio: "Olha os dois grupos.",
      perguntaAudio: "Qual grupo tem 5?", imagemUrl: bola, itemPlural: "bolas",
      alvo: "mais",
      opcoes: [{ qtd: 3, correta: false }, { qtd: 5, correta: true }],
      feedbackAcerto: "Isso! 5 é maior que 3.", feedbackErro: "5 é mais que 3." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Cinco na mão",
      convite: "Peça pra criança mostrar 5 dedos e depois 10 dedos.",
      dicaAdulto: "As mãos são o ten-frame biológico da criança (Butterworth)." },
    { tipo: "celebracao", medalha: "Dia 3 · Âncora do 5", mascoteUrl: mascote,
      falaFinal: "O 5 virou sua âncora!" },
  ],
  baseCientifica: "5 como benchmark interno.",
};

const dia04: AulaEI = {
  slug: "pip-f5-s1-d4-faltam-pra-5",
  titulo: "Dia 4 · Quanto falta pra 5?",
  icone: "🎯",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Antes de chegar no 10, vamos treinar CHEGAR NO 5. Quanto falta?" },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Tem 4. Quanto falta pra chegar em 5?",
      opcoes: [opN(1, true), opN(2, false), opN(4, false)],
      feedbackAcerto: "1! 4 e 1 = 5.", feedbackErro: "4, 5. Falta 1." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Tem 3. Falta quanto pra 5?",
      opcoes: [opN(2, true), opN(1, false), opN(3, false)],
      feedbackAcerto: "2! 3 e 2 = 5.", feedbackErro: "3, 4, 5. Faltam 2." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Tem 2. Falta quanto pra 5?",
      opcoes: [opN(3, true), opN(2, false), opN(4, false)],
      feedbackAcerto: "3! 2 e 3 = 5.", feedbackErro: "Faltam 3." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Tem 1. Falta quanto pra 5?",
      opcoes: [opN(4, true), opN(3, false), opN(5, false)],
      feedbackAcerto: "4!", feedbackErro: "Faltam 4." },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: bola, itemPlural: "bolas",
      a: 3, b: 2, instrucaoAudio: "3 mais 2. Quantas ao todo?", elogio: "5!" },
    { tipo: "missaoFamilia", titulo: "Missão Família · Faltam pra 5",
      convite: "Mostre 2 dedos e pergunte: 'faltam quantos pra 5?' Depois 3, depois 4.",
      dicaAdulto: "Fatos de 5 (complemento) são pré-requisito pro 10." },
    { tipo: "celebracao", medalha: "Dia 4 · Fatos do 5", mascoteUrl: mascote,
      falaFinal: "Você sabe quanto falta pra 5!" },
  ],
  baseCientifica: "Complemento a 5 (Wright).",
};

const dia05: AulaEI = {
  slug: "pip-f5-s1-d5-medalha-cinco",
  titulo: "Dia 5 · Medalha · Conheço o quadro",
  icone: "🥇",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Fim da Semana 1! Vamos revisar tudo do quadro." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantos balões?",
      opcoes: [opN(3, true), opN(2, false), opN(4, false)],
      feedbackAcerto: "3!", feedbackErro: "3." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Fila cheia?",
      opcoes: [opN(5, true), opN(10, false), opN(4, false)],
      feedbackAcerto: "5!", feedbackErro: "Fila cheia = 5." },
    { tipo: "compreensaoImagem", perguntaAudio: "Quadro do 10 CHEIO é?",
      opcoes: [opN(10, true), opN(5, false), opN(8, false)],
      feedbackAcerto: "10!", feedbackErro: "Quadro cheio = 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Tenho 4. Falta quanto pra 5?",
      opcoes: [opN(1, true), opN(2, false), opN(4, false)],
      feedbackAcerto: "1!", feedbackErro: "Falta 1." },
    { tipo: "compreensaoImagem", perguntaAudio: "Tenho 2. Falta quanto pra 5?",
      opcoes: [opN(3, true), opN(2, false), opN(5, false)],
      feedbackAcerto: "3!", feedbackErro: "Faltam 3." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Semana 1 concluída",
      convite: "Peça pra criança explicar o que é o QUADRO DO 10.",
      dicaAdulto: "Explicar consolida (efeito protégé)." },
    { tipo: "celebracao", medalha: "Semana 1 · Conheço o Quadro do 10",
      mascoteUrl: mascote, falaFinal: "Primeira medalha da Fase 5!" },
  ],
  baseCientifica: "Consolidação Semana 1.",
};

// ============================================================
// SEMANA 2 · Passando de 5 (5+n)
// ============================================================

const dia06: AulaEI = {
  slug: "pip-f5-s2-d1-cinco-mais-um",
  titulo: "Dia 6 · 5 e mais 1 = 6",
  icone: "6️⃣",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Agora passamos da fila de cima! 5 na fila de cima + 1 embaixo = 6." },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: maca, itemPlural: "maçãs",
      a: 5, b: 1, instrucaoAudio: "5 na fila de cima, 1 embaixo. Quantas?", elogio: "6!" },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas maçãs?",
      opcoes: [opN(6, true), opN(5, false), opN(7, false)],
      feedbackAcerto: "6! É 5 + 1.", feedbackErro: "6 é 5 e mais 1." },
    { tipo: "compreensaoImagem", perguntaAudio: "6 é 5 e mais quanto?",
      opcoes: [opN(1, true), opN(2, false), opN(6, false)],
      feedbackAcerto: "5 + 1!", feedbackErro: "5 + 1 = 6." },
    { tipo: "compreensaoImagem", perguntaAudio: "Se a fila de cima está cheia e tem 1 embaixo, é quanto?",
      opcoes: [opN(6, true), opN(5, false), opN(7, false)],
      feedbackAcerto: "6!", feedbackErro: "5 + 1 = 6." },
    { tipo: "missaoFamilia", titulo: "Missão Família · 5 + 1",
      convite: "Mostre uma mão inteira (5) e mais 1 dedo. Pergunte: 'quantos?'",
      dicaAdulto: "Estrutura 5+n usa o 5 como âncora." },
    { tipo: "celebracao", medalha: "Dia 6 · 5+1", mascoteUrl: mascote,
      falaFinal: "6 é 5 e mais 1!" },
  ],
  baseCientifica: "Estrutura 5+1 no ten-frame.",
};

const dia07: AulaEI = {
  slug: "pip-f5-s2-d2-cinco-mais-dois",
  titulo: "Dia 7 · 5 e mais 2 = 7",
  icone: "7️⃣",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "5 na fila de cima + 2 embaixo = 7. Sem precisar contar de novo!" },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: bola, itemPlural: "bolas",
      a: 5, b: 2, instrucaoAudio: "5 + 2 = ?", elogio: "7!" },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas bolas?",
      opcoes: [opN(7, true), opN(6, false), opN(8, false)],
      feedbackAcerto: "7! É 5 + 2.", feedbackErro: "7 é 5 e mais 2." },
    { tipo: "compreensaoImagem", perguntaAudio: "7 é 5 e mais quanto?",
      opcoes: [opN(2, true), opN(3, false), opN(1, false)],
      feedbackAcerto: "2!", feedbackErro: "5 + 2 = 7." },
    { tipo: "compreensaoImagem", perguntaAudio: "5 + 2 é?",
      opcoes: [opN(7, true), opN(6, false), opN(8, false)],
      feedbackAcerto: "7!", feedbackErro: "5 + 2 = 7." },
    { tipo: "missaoFamilia", titulo: "Missão Família · 5 + 2",
      convite: "Uma mão + 2 dedos da outra = 7. Peça pra criança mostrar.",
      dicaAdulto: "Continua a estrutura 5+n." },
    { tipo: "celebracao", medalha: "Dia 7 · 5+2", mascoteUrl: mascote,
      falaFinal: "7 é 5 + 2!" },
  ],
  baseCientifica: "Estrutura 5+2.",
};

const dia08: AulaEI = {
  slug: "pip-f5-s2-d3-cinco-mais-tres",
  titulo: "Dia 8 · 5 e mais 3 = 8",
  icone: "8️⃣",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "5 na fila de cima + 3 embaixo = 8!" },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: estrela, itemPlural: "estrelas",
      a: 5, b: 3, instrucaoAudio: "5 + 3 = ?", elogio: "8!" },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas estrelas?",
      opcoes: [opN(8, true), opN(7, false), opN(9, false)],
      feedbackAcerto: "8! É 5 + 3.", feedbackErro: "8 é 5 + 3." },
    { tipo: "compreensaoImagem", perguntaAudio: "8 é 5 e mais quanto?",
      opcoes: [opN(3, true), opN(2, false), opN(4, false)],
      feedbackAcerto: "3!", feedbackErro: "5 + 3 = 8." },
    { tipo: "compreensaoImagem", perguntaAudio: "5 + 3 é?",
      opcoes: [opN(8, true), opN(7, false), opN(9, false)],
      feedbackAcerto: "8!", feedbackErro: "5 + 3 = 8." },
    { tipo: "missaoFamilia", titulo: "Missão Família · 5 + 3",
      convite: "Mostre uma mão + 3 dedos. 'Quantos?'",
      dicaAdulto: "Ancorar sempre no 5 acelera o cálculo mental." },
    { tipo: "celebracao", medalha: "Dia 8 · 5+3", mascoteUrl: mascote,
      falaFinal: "8 é 5 + 3!" },
  ],
  baseCientifica: "Estrutura 5+3.",
};

const dia09: AulaEI = {
  slug: "pip-f5-s2-d4-cinco-mais-quatro",
  titulo: "Dia 9 · 5 e mais 4 = 9",
  icone: "9️⃣",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "5 + 4 = 9. Só falta 1 pra completar o quadro!" },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: joaninha, itemPlural: "joaninhas",
      a: 5, b: 4, instrucaoAudio: "5 + 4 = ?", elogio: "9!" },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas joaninhas?",
      opcoes: [opN(9, true), opN(8, false), opN(10, false)],
      feedbackAcerto: "9! Quase 10.", feedbackErro: "9 é 5 + 4." },
    { tipo: "compreensaoImagem", perguntaAudio: "9 é 5 e mais quanto?",
      opcoes: [opN(4, true), opN(3, false), opN(5, false)],
      feedbackAcerto: "4!", feedbackErro: "5 + 4 = 9." },
    { tipo: "compreensaoImagem", perguntaAudio: "Se tenho 9, quanto falta pra 10?",
      opcoes: [opN(1, true), opN(2, false), opN(0, false)],
      feedbackAcerto: "1!", feedbackErro: "9, 10. Falta 1." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Quase 10",
      convite: "Mostre 9 dedos. 'Falta quantos pra 10?'",
      dicaAdulto: "Ver o 9 como 'quase 10' já prepara o próximo bloco." },
    { tipo: "celebracao", medalha: "Dia 9 · 5+4", mascoteUrl: mascote,
      falaFinal: "9 é 5 + 4!" },
  ],
  baseCientifica: "Estrutura 5+4.",
};

const dia10: AulaEI = {
  slug: "pip-f5-s2-d5-medalha-passando-do-5",
  titulo: "Dia 10 · Medalha · Passei do 5",
  icone: "🥇",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Revisão da estrutura 5+n. Todo número entre 6 e 10 é 5 e mais alguma coisa!" },
    { tipo: "compreensaoImagem", perguntaAudio: "6 é 5 e mais...",
      opcoes: [opN(1, true), opN(2, false), opN(6, false)],
      feedbackAcerto: "1!", feedbackErro: "5 + 1 = 6." },
    { tipo: "compreensaoImagem", perguntaAudio: "7 é 5 e mais...",
      opcoes: [opN(2, true), opN(3, false), opN(1, false)],
      feedbackAcerto: "2!", feedbackErro: "5 + 2 = 7." },
    { tipo: "compreensaoImagem", perguntaAudio: "8 é 5 e mais...",
      opcoes: [opN(3, true), opN(2, false), opN(4, false)],
      feedbackAcerto: "3!", feedbackErro: "5 + 3 = 8." },
    { tipo: "compreensaoImagem", perguntaAudio: "9 é 5 e mais...",
      opcoes: [opN(4, true), opN(3, false), opN(5, false)],
      feedbackAcerto: "4!", feedbackErro: "5 + 4 = 9." },
    { tipo: "compreensaoImagem", perguntaAudio: "5 + 5 é?",
      opcoes: [opN(10, true), opN(9, false), opN(8, false)],
      feedbackAcerto: "10! Duas filas cheias!", feedbackErro: "5 + 5 = 10." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Passei do 5",
      convite: "Peça pra criança dizer: 6=5+1, 7=5+2, 8=5+3, 9=5+4, 10=5+5.",
      dicaAdulto: "Memorização com significado, não decoreba." },
    { tipo: "celebracao", medalha: "Semana 2 · Passei do 5", mascoteUrl: mascote,
      falaFinal: "Você domina a família do 5!" },
  ],
  baseCientifica: "Consolidação 5+n.",
};

// ============================================================
// SEMANA 3 · Quanto falta pra 10? (complementos)
// ============================================================

const dia11: AulaEI = {
  slug: "pip-f5-s3-d1-falta-9-pra-10",
  titulo: "Dia 11 · Falta 1 pra 10 (9+1)",
  icone: "➕",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Semana 3: aprender QUANTO FALTA pra 10. Se tenho 9, falta só 1!" },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: bola, itemPlural: "bolas",
      a: 9, b: 1, instrucaoAudio: "9 + 1 = ?", elogio: "10! Quadro cheio!" },
    { tipo: "compreensaoImagem", perguntaAudio: "9 + 1 é?",
      opcoes: [opN(10, true), opN(9, false), opN(8, false)],
      feedbackAcerto: "10!", feedbackErro: "9, 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Tenho 9. Falta quanto pra 10?",
      opcoes: [opN(1, true), opN(2, false), opN(0, false)],
      feedbackAcerto: "1!", feedbackErro: "Falta 1." },
    { tipo: "compreensaoImagem", perguntaAudio: "10 é 9 e mais quanto?",
      opcoes: [opN(1, true), opN(2, false), opN(10, false)],
      feedbackAcerto: "1!", feedbackErro: "9 + 1 = 10." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Falta 1",
      convite: "Mostre 9 dedos. 'Quantos faltam pra 10?'",
      dicaAdulto: "Complemento a 10 é a habilidade mais importante deste ciclo." },
    { tipo: "celebracao", medalha: "Dia 11 · 9+1", mascoteUrl: mascote,
      falaFinal: "Você sabe: 9 + 1 = 10!" },
  ],
  baseCientifica: "Complemento a 10 (fatos-âncora).",
};

const dia12: AulaEI = {
  slug: "pip-f5-s3-d2-oito-mais-dois",
  titulo: "Dia 12 · 8 + 2 = 10",
  icone: "➕",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Se tenho 8, faltam 2 pra encher o quadro." },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: flor, itemPlural: "flores",
      a: 8, b: 2, instrucaoAudio: "8 + 2 = ?", elogio: "10!" },
    { tipo: "compreensaoImagem", perguntaAudio: "8 + 2 é?",
      opcoes: [opN(10, true), opN(9, false), opN(8, false)],
      feedbackAcerto: "10!", feedbackErro: "8 + 2 = 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Tenho 8. Falta quanto pra 10?",
      opcoes: [opN(2, true), opN(3, false), opN(1, false)],
      feedbackAcerto: "2!", feedbackErro: "Faltam 2." },
    { tipo: "compreensaoImagem", perguntaAudio: "10 é 8 e mais quanto?",
      opcoes: [opN(2, true), opN(3, false), opN(1, false)],
      feedbackAcerto: "2!", feedbackErro: "8 + 2 = 10." },
    { tipo: "missaoFamilia", titulo: "Missão Família · 8 + 2",
      convite: "Peça pra criança encher um quadro de 10 com 8 objetos e completar.",
      dicaAdulto: "Ver os buracos ajuda a criança a 'ver' o complemento." },
    { tipo: "celebracao", medalha: "Dia 12 · 8+2", mascoteUrl: mascote,
      falaFinal: "8 + 2 = 10!" },
  ],
  baseCientifica: "Complemento a 10.",
};

const dia13: AulaEI = {
  slug: "pip-f5-s3-d3-sete-mais-tres",
  titulo: "Dia 13 · 7 + 3 = 10",
  icone: "➕",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Se tenho 7, faltam 3 pra 10." },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: maca, itemPlural: "maçãs",
      a: 7, b: 3, instrucaoAudio: "7 + 3 = ?", elogio: "10!" },
    { tipo: "compreensaoImagem", perguntaAudio: "7 + 3 é?",
      opcoes: [opN(10, true), opN(9, false), opN(7, false)],
      feedbackAcerto: "10!", feedbackErro: "7 + 3 = 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Tenho 7. Falta quanto pra 10?",
      opcoes: [opN(3, true), opN(2, false), opN(4, false)],
      feedbackAcerto: "3!", feedbackErro: "Faltam 3." },
    { tipo: "compreensaoImagem", perguntaAudio: "10 é 7 e mais quanto?",
      opcoes: [opN(3, true), opN(2, false), opN(7, false)],
      feedbackAcerto: "3!", feedbackErro: "7 + 3 = 10." },
    { tipo: "missaoFamilia", titulo: "Missão Família · 7 + 3",
      convite: "Mostre 7 dedos. 'Quantos faltam pra 10?'",
      dicaAdulto: "Pares que dão 10 são a fundação da soma escolar." },
    { tipo: "celebracao", medalha: "Dia 13 · 7+3", mascoteUrl: mascote,
      falaFinal: "7 + 3 = 10!" },
  ],
  baseCientifica: "Complemento a 10.",
};

const dia14: AulaEI = {
  slug: "pip-f5-s3-d4-seis-mais-quatro",
  titulo: "Dia 14 · 6 + 4 = 10 (e 5 + 5)",
  icone: "➕",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Últimos pares do 10: 6+4 e 5+5. Duas filas iguais!" },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: balao, itemPlural: "balões",
      a: 6, b: 4, instrucaoAudio: "6 + 4 = ?", elogio: "10!" },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: estrela, itemPlural: "estrelas",
      a: 5, b: 5, instrucaoAudio: "5 + 5 = ?", elogio: "10! Duas filas cheias!" },
    { tipo: "compreensaoImagem", perguntaAudio: "6 + 4 é?",
      opcoes: [opN(10, true), opN(9, false), opN(8, false)],
      feedbackAcerto: "10!", feedbackErro: "6 + 4 = 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "5 + 5 é?",
      opcoes: [opN(10, true), opN(5, false), opN(9, false)],
      feedbackAcerto: "10!", feedbackErro: "5 + 5 = 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Tenho 6. Falta quanto pra 10?",
      opcoes: [opN(4, true), opN(3, false), opN(5, false)],
      feedbackAcerto: "4!", feedbackErro: "6 + 4 = 10." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Pares do 10",
      convite: "Recite com a criança: 1+9, 2+8, 3+7, 4+6, 5+5. Todos dão 10!",
      dicaAdulto: "Pares do 10 devem virar automáticos." },
    { tipo: "celebracao", medalha: "Dia 14 · Pares do 10", mascoteUrl: mascote,
      falaFinal: "Você conhece todos os pares que fazem 10!" },
  ],
  baseCientifica: "Fechamento dos pares do 10.",
};

const dia15: AulaEI = {
  slug: "pip-f5-s3-d5-medalha-fecha-10",
  titulo: "Dia 15 · Medalha · Fechando o 10",
  icone: "🥇",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Revisão dos pares do 10!" },
    { tipo: "compreensaoImagem", perguntaAudio: "9 + ? = 10",
      opcoes: [opN(1, true), opN(2, false), opN(0, false)],
      feedbackAcerto: "1!", feedbackErro: "9 + 1." },
    { tipo: "compreensaoImagem", perguntaAudio: "8 + ? = 10",
      opcoes: [opN(2, true), opN(3, false), opN(1, false)],
      feedbackAcerto: "2!", feedbackErro: "8 + 2." },
    { tipo: "compreensaoImagem", perguntaAudio: "7 + ? = 10",
      opcoes: [opN(3, true), opN(2, false), opN(4, false)],
      feedbackAcerto: "3!", feedbackErro: "7 + 3." },
    { tipo: "compreensaoImagem", perguntaAudio: "6 + ? = 10",
      opcoes: [opN(4, true), opN(3, false), opN(5, false)],
      feedbackAcerto: "4!", feedbackErro: "6 + 4." },
    { tipo: "compreensaoImagem", perguntaAudio: "5 + ? = 10",
      opcoes: [opN(5, true), opN(4, false), opN(10, false)],
      feedbackAcerto: "5! Espelho!", feedbackErro: "5 + 5." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Semana 3 concluída",
      convite: "Jogue com a criança: você diz um número (1-9), ela diz quanto falta pra 10.",
      dicaAdulto: "Jogo rápido consolida automaticidade." },
    { tipo: "celebracao", medalha: "Semana 3 · Fechando o 10", mascoteUrl: mascote,
      falaFinal: "Você fecha o 10 sozinho!" },
  ],
  baseCientifica: "Consolidação Semana 3.",
};

// ============================================================
// SEMANA 4 · Mestre do 10 + DIPLOMA
// ============================================================

const dia16: AulaEI = {
  slug: "pip-f5-s4-d1-lendo-o-quadro",
  titulo: "Dia 16 · Lendo o quadro de olhada",
  icone: "👀",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Última semana! Vamos ler o quadro do 10 de OLHADA, sem contar!" },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas bolas?",
      opcoes: [opN(6, true), opN(5, false), opN(7, false)],
      feedbackAcerto: "6! 5+1.", feedbackErro: "6 = 5 + 1." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas?",
      opcoes: [opN(8, true), opN(7, false), opN(9, false)],
      feedbackAcerto: "8! 5+3.", feedbackErro: "8 = 5 + 3." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas estrelas?",
      opcoes: [opN(7, true), opN(6, false), opN(8, false)],
      feedbackAcerto: "7! 5+2.", feedbackErro: "5 + 2 = 7." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quantas flores?",
      opcoes: [opN(9, true), opN(10, false), opN(8, false)],
      feedbackAcerto: "9! Quase 10.", feedbackErro: "9 = 5 + 4." },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Quadro cheio é?",
      opcoes: [opN(10, true), opN(9, false), opN(5, false)],
      feedbackAcerto: "10!", feedbackErro: "Quadro cheio = 10." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Leitura rápida",
      convite: "Mostre grupos de dedos (6, 7, 8, 9) e peça pra criança dizer sem contar.",
      dicaAdulto: "Subitizing conceitual: reconhecer 5+n rapidamente." },
    { tipo: "celebracao", medalha: "Dia 16 · Lendo de olhada", mascoteUrl: mascote,
      falaFinal: "Leitura de relance no quadro do 10!" },
  ],
  baseCientifica: "Subitizing conceitual em ten-frame.",
};

const dia17: AulaEI = {
  slug: "pip-f5-s4-d2-somando-no-quadro",
  titulo: "Dia 17 · Somando no quadro",
  icone: "➕",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "O quadro nos ajuda a SOMAR sem contar tudo!" },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: bola, itemPlural: "bolas",
      a: 4, b: 3, instrucaoAudio: "4 + 3 = ?", elogio: "7!" },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: estrela, itemPlural: "estrelas",
      a: 2, b: 6, instrucaoAudio: "2 + 6 = ?", elogio: "8!" },
    { tipo: "compreensaoImagem", perguntaAudio: "3 + 4 é?",
      opcoes: [opN(7, true), opN(6, false), opN(8, false)],
      feedbackAcerto: "7!", feedbackErro: "3 + 4 = 7." },
    { tipo: "compreensaoImagem", perguntaAudio: "6 + 2 é?",
      opcoes: [opN(8, true), opN(7, false), opN(9, false)],
      feedbackAcerto: "8!", feedbackErro: "6 + 2 = 8." },
    { tipo: "compreensaoImagem", perguntaAudio: "4 + 5 é?",
      opcoes: [opN(9, true), opN(8, false), opN(10, false)],
      feedbackAcerto: "9!", feedbackErro: "4 + 5 = 9." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Somas no quadro",
      convite: "Desenhe um quadro de 10, preencha 3, depois +2. 'Quantos agora?'",
      dicaAdulto: "Somar dentro do 10 no ten-frame é CPA em ação." },
    { tipo: "celebracao", medalha: "Dia 17 · Somas dentro do 10", mascoteUrl: mascote,
      falaFinal: "Você soma dentro do 10!" },
  ],
  baseCientifica: "Soma até 10 no ten-frame.",
};

const dia18: AulaEI = {
  slug: "pip-f5-s4-d3-prova-do-pip",
  titulo: "Dia 18 · Prova do Pip",
  icone: "🧪",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Prova de todas as habilidades da fase!" },
    { tipo: "compreensaoImagem",
      perguntaAudio: "Fila de cima cheia?",
      opcoes: [opN(5, true), opN(6, false), opN(10, false)],
      feedbackAcerto: "5!", feedbackErro: "5." },
    { tipo: "compreensaoImagem", perguntaAudio: "7 é 5 e mais quanto?",
      opcoes: [opN(2, true), opN(3, false), opN(1, false)],
      feedbackAcerto: "2!", feedbackErro: "5 + 2 = 7." },
    { tipo: "compreensaoImagem", perguntaAudio: "8 + 2 é?",
      opcoes: [opN(10, true), opN(9, false), opN(8, false)],
      feedbackAcerto: "10!", feedbackErro: "8 + 2 = 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Tenho 7. Falta quanto pra 10?",
      opcoes: [opN(3, true), opN(2, false), opN(4, false)],
      feedbackAcerto: "3!", feedbackErro: "7 + 3 = 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Quadro cheio é?",
      opcoes: [opN(10, true), opN(9, false), opN(5, false)],
      feedbackAcerto: "10!", feedbackErro: "10." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Simulado",
      convite: "Faça 3 perguntas: 6+4, 5+3, quanto falta em 9 pra 10.",
      dicaAdulto: "Amanhã: festa. Depois: DIPLOMA." },
    { tipo: "celebracao", medalha: "Dia 18 · Simulado ok", mascoteUrl: mascote,
      falaFinal: "Você está pronto pro diploma!" },
  ],
  baseCientifica: "Avaliação formativa.",
};

const dia19: AulaEI = {
  slug: "pip-f5-s4-d4-festa-do-quadro",
  titulo: "Dia 19 · A festa do quadro do 10",
  icone: "🎉",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "Festa antes do diploma! Vamos usar o quadro do 10 em coisas do dia a dia." },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: maca, itemPlural: "maçãs",
      a: 6, b: 3, instrucaoAudio: "Pip colheu 6 maçãs. Colheu mais 3. Quantas ao todo?", elogio: "9!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Tem 4 balões. Compra 4. Quantos?",
      opcoes: [opN(8, true), opN(7, false), opN(9, false)],
      feedbackAcerto: "8!", feedbackErro: "4 + 4 = 8." },
    { tipo: "compreensaoImagem", perguntaAudio: "Tenho 5 doces. Preciso de 10 pra festa. Quantos faltam?",
      opcoes: [opN(5, true), opN(4, false), opN(3, false)],
      feedbackAcerto: "5!", feedbackErro: "5 + 5 = 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Tinha 8 flores. Ganhou 2. Ficou com?",
      opcoes: [opN(10, true), opN(9, false), opN(8, false)],
      feedbackAcerto: "10!", feedbackErro: "8 + 2 = 10." },
    { tipo: "missaoFamilia", titulo: "Missão Família · Ensaio final",
      convite: "Peça pra criança recitar todos os pares do 10: 1+9, 2+8, 3+7, 4+6, 5+5.",
      dicaAdulto: "Amanhã: DIPLOMA!" },
    { tipo: "celebracao", medalha: "Dia 19 · Festa do 10", mascoteUrl: mascote,
      falaFinal: "AMANHÃ: DIPLOMA da Fase 5!" },
  ],
  baseCientifica: "Contexto real do ten-frame.",
};

const dia20: AulaEI = {
  slug: "pip-f5-s4-d5-diploma-mestre-do-10",
  titulo: "Dia 20 · DIPLOMA · Mestre do 10",
  icone: "🎓",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote,
      falaMascote: "DIA DO DIPLOMA! Prova final da Fase 5. Você vai virar MESTRE DO 10!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 1: fila de cima cheia é?",
      opcoes: [opN(5, true), opN(10, false), opN(6, false)],
      feedbackAcerto: "5!", feedbackErro: "5." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 2: 5 + 3 é?",
      opcoes: [opN(8, true), opN(7, false), opN(9, false)],
      feedbackAcerto: "8!", feedbackErro: "5 + 3 = 8." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 3: 9 é 5 e mais?",
      opcoes: [opN(4, true), opN(3, false), opN(5, false)],
      feedbackAcerto: "4!", feedbackErro: "5 + 4 = 9." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 4: 7 + 3 é?",
      opcoes: [opN(10, true), opN(9, false), opN(8, false)],
      feedbackAcerto: "10!", feedbackErro: "7 + 3 = 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 5: tenho 6. Falta quanto pra 10?",
      opcoes: [opN(4, true), opN(3, false), opN(5, false)],
      feedbackAcerto: "4!", feedbackErro: "6 + 4 = 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova 6: 5 + 5 é?",
      opcoes: [opN(10, true), opN(9, false), opN(8, false)],
      feedbackAcerto: "10!", feedbackErro: "5 + 5 = 10." },
    { tipo: "compreensaoImagem", perguntaAudio: "Prova final: quadro CHEIO tem quanto?",
      opcoes: [opN(10, true), opN(5, false), opN(9, false)],
      feedbackAcerto: "10! MESTRE DO 10!", feedbackErro: "Quadro cheio = 10." },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Cerimônia do diploma",
      convite:
        "Mostre o diploma pra família. Peça pra criança dizer todos os pares que fazem 10. Aplauda!",
      dicaAdulto:
        "Cerimônia consolida identidade matemática (Dweck). Fase 6 (comparação) libera na sequência.",
    },
    {
      tipo: "celebracao",
      medalha: "DIPLOMA · Mestre do 10",
      mascoteUrl: mascote,
      falaFinal:
        "DIPLOMA CONQUISTADO! Você é oficialmente MESTRE DO QUADRO DO 10!",
    },
  ],
  baseCientifica: "Cerimônia de fechamento Fase 5.",
};

// ============================================================
// CURSO
// ============================================================

export const cursoContarComPipFase5: CursoEI = {
  slug: "contar-com-pip-f5",
  serie: "pre2",
  serieLabel: "Contar com Pip · Fase 5",
  titulo: "Fase 5 · Quadro do 10 (Ten-frame)",
  descricao:
    "O 10 vira referência: 5 é âncora, 6-9 são 5 e mais alguma coisa, e todo par que fecha 10 fica automático.",
  corPrimaria: "#ec4899",
  corSecundaria: "#831843",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "pip-f5-s1",
      numero: 1,
      titulo: "Semana 1 · Conheço o Quadro do 10",
      subtitulo: "Fila de cima 0→5 e o 5 como âncora",
      aulas: [dia01, dia02, dia03, dia04, dia05],
    },
    {
      slug: "pip-f5-s2",
      numero: 2,
      titulo: "Semana 2 · Passei do 5",
      subtitulo: "5+1, 5+2, 5+3, 5+4, 5+5",
      aulas: [dia06, dia07, dia08, dia09, dia10],
    },
    {
      slug: "pip-f5-s3",
      numero: 3,
      titulo: "Semana 3 · Fechando o 10",
      subtitulo: "Pares que fazem 10: 9+1, 8+2, 7+3, 6+4, 5+5",
      aulas: [dia11, dia12, dia13, dia14, dia15],
    },
    {
      slug: "pip-f5-s4",
      numero: 4,
      titulo: "Semana 4 · Mestre do 10 (DIPLOMA)",
      subtitulo: "Leitura rápida, soma dentro do 10 e diploma da Fase 5",
      aulas: [dia16, dia17, dia18, dia19, dia20],
    },
  ],
};

export function getAulaContarComPipFase5(slug: string): AulaEI | undefined {
  for (const u of cursoContarComPipFase5.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
