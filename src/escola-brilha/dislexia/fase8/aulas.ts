/**
 * Fase 8 · Fluência e Compreensão (10 aulas · dlx-71 a dlx-80)
 *
 * Depois de decodificar (Fases 1–7), a criança agora treina LER com ritmo,
 * prosódia e — o mais importante — ENTENDER o que leu. Método:
 *   • Leitura repetida (Repeated Reading, Samuels): mesma frase 2–3 vezes
 *     com foco em velocidade + entonação.
 *   • Leitura em eco / coro (guiada): o professor lê, a criança repete.
 *   • Pontuação como respiração: ponto = pausa, vírgula = pausinha,
 *     interrogação = sobe a voz, exclamação = força.
 *   • Compreensão literal → inferencial: “o que aconteceu?” antes de
 *     “por que aconteceu?”.
 *
 * Todas as falas foram escritas para o TTS soar natural (minúsculas com
 * acento, sem hifenização artificial dentro da fala).
 */
import type { AulaDlx } from "../types";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

// ══════════════════════════════════════════════════════════
// AULA 71 · Frases curtas com ritmo (leitura repetida)
// ══════════════════════════════════════════════════════════
export const dlx71: AulaDlx = {
  slug: "dlx-71-frases-curtas-ritmo",
  numero: 71,
  fase: 8,
  titulo: "Frases curtas com ritmo",
  objetivo: "Ler frases de 3 a 5 palavras com fluência, sem gaguejar entre sílabas.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Agora a gente junta tudo que aprendeu e lê frases inteiras. Devagar, com calma, e a cada vez mais rápido.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "O gato subiu no muro.", palavra: "O GATO SUBIU NO MURO." },
    { tipo: "escuta", fala: "De novo, um pouquinho mais rápido: o gato subiu no muro.", palavra: "O GATO SUBIU NO MURO." },
    { tipo: "escuta", fala: "A bola caiu na rua.", palavra: "A BOLA CAIU NA RUA." },
    { tipo: "escuta", fala: "De novo, com ritmo: a bola caiu na rua.", palavra: "A BOLA CAIU NA RUA." },
    {
      tipo: "escolha",
      fala: "Onde caiu a bola?",
      opcoes: [
        { palavra: "NA RUA", correta: true },
        { palavra: "NO MURO", correta: false },
        { palavra: "NO MAR", correta: false },
      ],
    },
    { tipo: "escuta", fala: "O pato nada no lago.", palavra: "O PATO NADA NO LAGO." },
    {
      tipo: "escolha",
      fala: "Quem nada no lago?",
      opcoes: [
        { palavra: "O PATO", correta: true },
        { palavra: "O GATO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Você leu frases inteiras, com ritmo. Isso é fluência!", imagem: pipVet },
    { tipo: "fim", fala: "Primeira aula de fluência conquistada! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 72 · Pontuação como respiração (ponto e vírgula)
// ══════════════════════════════════════════════════════════
export const dlx72: AulaDlx = {
  slug: "dlx-72-pontuacao-respiracao",
  numero: 72,
  fase: 8,
  titulo: "Ponto e vírgula — quando respirar",
  objetivo: "Fazer pausa curta na vírgula e pausa longa no ponto ao ler em voz alta.",
  cenas: [
    {
      tipo: "abertura",
      fala: "A vírgula é uma pausinha. O ponto é uma pausa grande, pra respirar. Sente na sua boca.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "A lua, a estrela e o sol. Pausinha na vírgula.", palavra: "A LUA, A ESTRELA E O SOL." },
    { tipo: "escuta", fala: "O gato pulou. O pato nadou. Pausa forte no ponto.", palavra: "O GATO PULOU. O PATO NADOU." },
    { tipo: "escuta", fala: "De novo, sentindo o ponto: o gato pulou. O pato nadou.", palavra: "O GATO PULOU. O PATO NADOU." },
    {
      tipo: "escolha",
      fala: "Na vírgula a gente faz o quê?",
      opcoes: [
        { palavra: "PAUSA PEQUENA", correta: true },
        { palavra: "PAUSA GRANDE", correta: false },
        { palavra: "GRITA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E no ponto?",
      opcoes: [
        { palavra: "PAUSA GRANDE", correta: true },
        { palavra: "PAUSA PEQUENA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Ponto respira fundo. Vírgula respira só um pouquinho.", imagem: pipVet },
    { tipo: "fim", fala: "Você já lê com pausas certas! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 73 · Interrogação e exclamação (entonação)
// ══════════════════════════════════════════════════════════
export const dlx73: AulaDlx = {
  slug: "dlx-73-interrogacao-exclamacao",
  numero: 73,
  fase: 8,
  titulo: "Perguntas e exclamações — muda a voz!",
  objetivo: "Elevar a voz na interrogação e reforçar na exclamação.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Quando tem pergunta, a voz sobe no fim. Quando tem exclamação, a voz fica forte, cheia de emoção!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Você viu o gato? Voz sobe no fim.", palavra: "VOCÊ VIU O GATO?" },
    { tipo: "escuta", fala: "Que gato lindo! Voz forte, com alegria.", palavra: "QUE GATO LINDO!" },
    { tipo: "escuta", fala: "Cadê a bola? Sobe a voz.", palavra: "CADÊ A BOLA?" },
    { tipo: "escuta", fala: "Achei! Voz forte.", palavra: "ACHEI!" },
    {
      tipo: "escolha",
      fala: "No fim da pergunta, a voz…",
      opcoes: [
        { palavra: "SOBE", correta: true },
        { palavra: "DESCE", correta: false },
        { palavra: "SUMIU", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual dessas é uma pergunta?",
      opcoes: [
        { palavra: "CADÊ A LUA?", correta: true },
        { palavra: "QUE LUA LINDA!", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Pergunta sobe. Exclamação anima. Sua leitura ganha vida!", imagem: pipVet },
    { tipo: "fim", fala: "Entonação dominada! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 74 · Leitura repetida — mesma frase 3 vezes
// ══════════════════════════════════════════════════════════
export const dlx74: AulaDlx = {
  slug: "dlx-74-leitura-repetida",
  numero: 74,
  fase: 8,
  titulo: "Leitura repetida — a cada vez, mais leve",
  objetivo: "Repetir a mesma frase três vezes, ganhando velocidade e naturalidade.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Truque de leitor bom: ler a mesma frase mais de uma vez. Na terceira, sai voando!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Primeira vez, bem calmo: o sapo pulou na lagoa.", palavra: "O SAPO PULOU NA LAGOA." },
    { tipo: "escuta", fala: "Segunda vez, um pouquinho mais rápido: o sapo pulou na lagoa.", palavra: "O SAPO PULOU NA LAGOA." },
    { tipo: "escuta", fala: "Terceira vez, natural, como se conversasse: o sapo pulou na lagoa.", palavra: "O SAPO PULOU NA LAGOA." },
    { tipo: "escuta", fala: "Outra frase. Primeira: a menina abraçou o cachorro.", palavra: "A MENINA ABRAÇOU O CACHORRO." },
    { tipo: "escuta", fala: "Segunda vez: a menina abraçou o cachorro.", palavra: "A MENINA ABRAÇOU O CACHORRO." },
    { tipo: "escuta", fala: "Terceira, solto: a menina abraçou o cachorro.", palavra: "A MENINA ABRAÇOU O CACHORRO." },
    {
      tipo: "escolha",
      fala: "Quando a gente lê a mesma frase de novo, fica…",
      opcoes: [
        { palavra: "MAIS FÁCIL", correta: true },
        { palavra: "MAIS DIFÍCIL", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Repetir é o segredo. Cada leitura fica mais fluente que a anterior.", imagem: pipVet },
    { tipo: "fim", fala: "Você virou leitor treinado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 75 · Compreensão literal — o que aconteceu?
// ══════════════════════════════════════════════════════════
export const dlx75: AulaDlx = {
  slug: "dlx-75-compreensao-literal",
  numero: 75,
  fase: 8,
  titulo: "O que aconteceu na história?",
  objetivo: "Responder perguntas literais (quem, o quê, onde) sobre um texto curto.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Ler não é só falar as letras. É entender. Vou te contar uma historinha e depois pergunto.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "A menina Lia achou um gatinho na rua. Ela levou o gatinho pra casa.", palavra: "LIA ACHOU UM GATINHO NA RUA. ELA LEVOU PRA CASA." },
    {
      tipo: "escolha",
      fala: "Quem achou o gatinho?",
      opcoes: [
        { palavra: "LIA", correta: true },
        { palavra: "O PATO", correta: false },
        { palavra: "A VOVÓ", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Onde ela achou?",
      opcoes: [
        { palavra: "NA RUA", correta: true },
        { palavra: "NO LAGO", correta: false },
        { palavra: "NA ESCOLA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Pra onde ela levou?",
      opcoes: [
        { palavra: "PRA CASA", correta: true },
        { palavra: "PRA PRAIA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Isso é ler de verdade: você guardou a história na cabeça.", imagem: pipVet },
    { tipo: "fim", fala: "Leitor que entende! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 76 · Sequência da história (começo, meio, fim)
// ══════════════════════════════════════════════════════════
export const dlx76: AulaDlx = {
  slug: "dlx-76-sequencia-historia",
  numero: 76,
  fase: 8,
  titulo: "Começo, meio e fim",
  objetivo: "Identificar a ordem dos acontecimentos numa história curta.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Toda história tem começo, meio e fim. Presta atenção na ordem.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Primeiro, o Beto acordou. Depois, tomou café. No fim, foi pra escola.", palavra: "BETO ACORDOU. TOMOU CAFÉ. FOI PRA ESCOLA." },
    {
      tipo: "escolha",
      fala: "O que o Beto fez primeiro?",
      opcoes: [
        { palavra: "ACORDOU", correta: true },
        { palavra: "TOMOU CAFÉ", correta: false },
        { palavra: "FOI PRA ESCOLA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E no fim?",
      opcoes: [
        { palavra: "FOI PRA ESCOLA", correta: true },
        { palavra: "ACORDOU", correta: false },
      ],
    },
    { tipo: "escuta", fala: "Outra história. A Duda plantou uma semente. A planta cresceu. Nasceu uma flor.", palavra: "DUDA PLANTOU. A PLANTA CRESCEU. NASCEU UMA FLOR." },
    {
      tipo: "escolha",
      fala: "O que veio depois de plantar?",
      opcoes: [
        { palavra: "A PLANTA CRESCEU", correta: true },
        { palavra: "NASCEU A FLOR", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Ordem certa: primeiro, depois, no fim. Sua cabeça guardou tudo.", imagem: pipVet },
    { tipo: "fim", fala: "Contador de histórias! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 77 · Inferência simples (por quê?)
// ══════════════════════════════════════════════════════════
export const dlx77: AulaDlx = {
  slug: "dlx-77-inferencia-simples",
  numero: 77,
  fase: 8,
  titulo: "Por que aconteceu?",
  objetivo: "Fazer inferências simples a partir de pistas do texto.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Às vezes a história não diz tudo. A gente descobre pelas pistas. Isso é inferir.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "O Tomé pegou o guarda-chuva antes de sair.", palavra: "TOMÉ PEGOU O GUARDA-CHUVA ANTES DE SAIR." },
    {
      tipo: "escolha",
      fala: "Por que ele pegou o guarda-chuva?",
      opcoes: [
        { palavra: "PORQUE IA CHOVER", correta: true },
        { palavra: "PORQUE ESTAVA SOL", correta: false },
        { palavra: "PORQUE ERA NOITE", correta: false },
      ],
    },
    { tipo: "escuta", fala: "A gata Mel correu pra cozinha assim que ouviu o barulho da ração.", palavra: "MEL CORREU PRA COZINHA AO OUVIR A RAÇÃO." },
    {
      tipo: "escolha",
      fala: "Por que a Mel correu?",
      opcoes: [
        { palavra: "PORQUE ESTAVA COM FOME", correta: true },
        { palavra: "PORQUE ESTAVA COM SONO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Inferir é usar as pistas. Guarda-chuva? Vai chover. Correu pra ração? Fome!", imagem: pipVet },
    { tipo: "fim", fala: "Detetive de leitura! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 78 · Vocabulário no contexto
// ══════════════════════════════════════════════════════════
export const dlx78: AulaDlx = {
  slug: "dlx-78-vocabulario-contexto",
  numero: 78,
  fase: 8,
  titulo: "Palavra nova? Descobre pelo contexto",
  objetivo: "Descobrir o sentido de uma palavra desconhecida pelas outras palavras da frase.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Se aparecer uma palavra que você não conhece, calma. As outras palavras te dão a pista.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "O vovô usa uma bengala pra andar porque a perna dói.", palavra: "O VOVÔ USA UMA BENGALA PRA ANDAR." },
    {
      tipo: "escolha",
      fala: "Bengala é uma coisa que serve pra…",
      opcoes: [
        { palavra: "AJUDAR A ANDAR", correta: true },
        { palavra: "COMER", correta: false },
        { palavra: "DORMIR", correta: false },
      ],
    },
    { tipo: "escuta", fala: "A cozinheira mexeu a panela com um cucharão bem grande.", palavra: "A COZINHEIRA MEXEU A PANELA COM UM CUCHARÃO." },
    {
      tipo: "escolha",
      fala: "Cucharão parece ser…",
      opcoes: [
        { palavra: "UMA COLHER GRANDE", correta: true },
        { palavra: "UM SAPATO", correta: false },
        { palavra: "UM LIVRO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "As outras palavras da frase são amigas. Elas explicam a palavra difícil.", imagem: pipVet },
    { tipo: "fim", fala: "Detetive de palavras! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 79 · Texto de 4 frases (leitura fluente)
// ══════════════════════════════════════════════════════════
export const dlx79: AulaDlx = {
  slug: "dlx-79-texto-quatro-frases",
  numero: 79,
  fase: 8,
  titulo: "Um textinho inteiro",
  objetivo: "Ler um texto de 4 frases com fluência e responder perguntas de compreensão.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Chegou a hora do texto inteiro. Quatro frases seguidas. Você consegue!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "O sapo Zé mora na lagoa.", palavra: "O SAPO ZÉ MORA NA LAGOA." },
    { tipo: "escuta", fala: "Todo dia ele pula nas folhas.", palavra: "TODO DIA ELE PULA NAS FOLHAS." },
    { tipo: "escuta", fala: "Um dia ele viu uma libélula rosa.", palavra: "UM DIA ELE VIU UMA LIBÉLULA ROSA." },
    { tipo: "escuta", fala: "O sapo Zé virou amigo dela.", palavra: "O SAPO ZÉ VIROU AMIGO DELA." },
    {
      tipo: "escolha",
      fala: "Onde o Zé mora?",
      opcoes: [
        { palavra: "NA LAGOA", correta: true },
        { palavra: "NA ÁRVORE", correta: false },
        { palavra: "NA RUA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Quem ele viu?",
      opcoes: [
        { palavra: "UMA LIBÉLULA", correta: true },
        { palavra: "UM PATO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "O que aconteceu no fim?",
      opcoes: [
        { palavra: "VIROU AMIGO DELA", correta: true },
        { palavra: "FOI EMBORA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Você leu um texto INTEIRO e entendeu tudo. Isso é fluência com compreensão!", imagem: pipVet },
    { tipo: "fim", fala: "Leitor de texto! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 80 · Revisão final — leitura livre + orgulho
// ══════════════════════════════════════════════════════════
export const dlx80: AulaDlx = {
  slug: "dlx-80-revisao-final",
  numero: 80,
  fase: 8,
  titulo: "Sua conquista — 80 aulas!",
  objetivo: "Revisar fluência + compreensão e comemorar o fim da trilha clínica.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Chegou o dia. Você começou ouvindo sons e agora lê frases inteiras. Isso é enorme!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "Palavra por palavra, sílaba por sílaba, você venceu cada aula.", palavra: "VOCÊ VENCEU CADA AULA." },
    { tipo: "escuta", fala: "A leitura é sua ferramenta. Ninguém tira mais.", palavra: "A LEITURA É SUA FERRAMENTA." },
    { tipo: "escuta", fala: "A Ana viu a lua no céu. Ela sorriu e mostrou pra mãe.", palavra: "A ANA VIU A LUA. ELA MOSTROU PRA MÃE." },
    {
      tipo: "escolha",
      fala: "O que a Ana viu?",
      opcoes: [
        { palavra: "A LUA", correta: true },
        { palavra: "O SOL", correta: false },
        { palavra: "UM CARRO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Pra quem ela mostrou?",
      opcoes: [
        { palavra: "PRA MÃE", correta: true },
        { palavra: "PRO GATO", correta: false },
      ],
    },
    { tipo: "escuta", fala: "Última frase da trilha, leia com orgulho: eu sei ler.", palavra: "EU SEI LER." },
    { tipo: "reforco", fala: "Você percorreu 80 aulas. Ouvido, letra, sílaba, palavra, frase, texto. Todos os degraus.", imagem: pipVet },
    { tipo: "fim", fala: "Parabéns! Trilha da Leitura concluída. 🎓🌟", imagem: pipVet },
  ],
};
