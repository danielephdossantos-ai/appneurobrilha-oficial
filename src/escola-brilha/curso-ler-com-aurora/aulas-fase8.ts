import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as sombrinha } from "@/assets/neuro-treino/objetos/sombrinha.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as banho } from "@/assets/neuro-treino/objetos/banho.png.asset.json";
import { url as sorvete } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as ninho } from "@/assets/neuro-treino/objetos/ninho.png.asset.json";
import { url as sopa } from "@/assets/neuro-treino/objetos/sopa.png.asset.json";
import { url as semente } from "@/assets/neuro-treino/objetos/semente.png.asset.json";
import { url as regador } from "@/assets/neuro-treino/objetos/regador.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as pipa } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";

/**
 * Ler com Aurora — Fase 8: Compreensão Estratégica
 * ------------------------------------------------
 * 20 aulas · 4 semanas · 15 min/dia
 *  - Semana 1 (aqui): Prever — o que vai acontecer?
 *  - Semana 2: Resumir — frase-chave da história
 *  - Semana 3: Inferir — o que o personagem sente/quer?
 *  - Semana 4: Conectar + Diploma "Leitor Estratégico"
 *
 * Base: Duke & Pearson (2002) — ensino explícito de estratégias
 * de compreensão leitora. National Reading Panel (2000).
 * Contrato: mem://preferences/contrato-ler-com-aurora-fases-6-8
 */

const mascote = brilha;
const BASE_PREVER =
  "Estratégia de compreensão 'Prever' (Duke & Pearson 2002): antes de terminar a história, a criança usa pistas visuais e o enredo para antecipar o que vem depois. Prever ativa esquemas prévios e melhora a memória do texto (NRP 2000).";

/* ============================================================
 * SEMANA 1 — Prever (o que vai acontecer?)
 * ============================================================ */

const a1: AulaEI = {
  slug: "f8-dia-01-prever-balao",
  titulo: "Dia 1 · O balão da menina",
  icone: "🎈",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_PREVER,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Bem-vindo à Fase da Compreensão! Aqui a gente vira detetive da história. Eu conto um pedacinho e você adivinha o que vai acontecer depois.",
    },
    {
      tipo: "preverHistoria",
      titulo: "O balão da menina",
      cenas: [
        { imagemUrl: menina, narracao: "A menina ganhou um balão bem colorido." },
        { imagemUrl: balao, narracao: "Ela soltou o barbante sem querer." },
      ],
      pergunta: "O que vai acontecer com o balão?",
      instrucaoAudio: "Escolha a imagem que mostra o que você acha que vai acontecer.",
      opcoes: [
        { nome: "SOBE NO CÉU", imagemUrl: nuvem, correta: true },
        { nome: "VIRA BOLO", imagemUrl: bolo, correta: false },
        { nome: "VIRA CACHORRO", imagemUrl: cachorro, correta: false },
      ],
      feedbackAcerto: "Isso! Balão solto sobe para o céu!",
      feedbackErro: "Hmm… lembra: ela soltou o barbante. Pensa de novo.",
      elogio: "Você previu como um leitor de verdade!",
    },
    {
      tipo: "preverHistoria",
      titulo: "O cachorro faminto",
      cenas: [
        { imagemUrl: cachorro, narracao: "O cachorro está com muita fome." },
        { imagemUrl: bolo, narracao: "Ele viu um bolo em cima da mesa, sem ninguém olhando." },
      ],
      pergunta: "O que o cachorro vai fazer?",
      instrucaoAudio: "Escolha o que combina com a história.",
      opcoes: [
        { nome: "COMER O BOLO", imagemUrl: bolo, correta: true },
        { nome: "TOMAR BANHO", imagemUrl: banho, correta: false },
        { nome: "ANDAR DE CARRO", imagemUrl: carro, correta: false },
      ],
      feedbackAcerto: "Claro! Cachorro faminto + bolo na mesa = bolo comido!",
      feedbackErro: "Lembra: ele está com FOME. O que combina com fome?",
      elogio: "Ótima previsão!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive da História · Dia 1",
      mascoteUrl: mascote,
      falaFinal:
        "Você já é detetive! Amanhã: o que acontece quando começa a chover na rua?",
    },
  ],
};

const a2: AulaEI = {
  slug: "f8-dia-02-prever-chuva",
  titulo: "Dia 2 · Começou a chover",
  icone: "🌧️",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_PREVER,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Hoje: quando o céu fecha e a chuva chega, o que a gente faz? Bora prever!",
    },
    {
      tipo: "preverHistoria",
      titulo: "Sem sombrinha",
      cenas: [
        { imagemUrl: menino, narracao: "O menino saiu de casa para brincar." },
        { imagemUrl: nuvem, narracao: "De repente o céu fechou e ficou tudo escuro." },
        { imagemUrl: chuva, narracao: "Começou a chover forte, e ele não tem sombrinha." },
      ],
      pergunta: "O que vai acontecer com o menino?",
      instrucaoAudio: "Escolha a imagem certa.",
      opcoes: [
        { nome: "FICAR MOLHADO", imagemUrl: chuva, correta: true },
        { nome: "COMER SORVETE", imagemUrl: sorvete, correta: false },
        { nome: "IR NO CARRO", imagemUrl: carro, correta: false },
      ],
      feedbackAcerto: "Sim! Sem sombrinha, ele fica todo molhado!",
      feedbackErro: "Ele não tem sombrinha e está chovendo. O que acontece?",
      elogio: "Previu certinho!",
    },
    {
      tipo: "preverHistoria",
      titulo: "A menina esperta",
      cenas: [
        { imagemUrl: menina, narracao: "A menina viu que ia chover." },
        { imagemUrl: sombrinha, narracao: "Ela pegou uma coisa antes de sair." },
      ],
      pergunta: "O que ela pegou?",
      instrucaoAudio: "Pense: o que serve pra chuva?",
      opcoes: [
        { nome: "SOMBRINHA", imagemUrl: sombrinha, correta: true },
        { nome: "SORVETE", imagemUrl: sorvete, correta: false },
        { nome: "CELULAR", imagemUrl: celular, correta: false },
      ],
      feedbackAcerto: "Isso! Sombrinha protege da chuva!",
      feedbackErro: "Ela viu que ia CHOVER. O que protege da chuva?",
      elogio: "Boa dedução!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive da História · Dia 2",
      mascoteUrl: mascote,
      falaFinal: "Você adivinhou! Amanhã: o gato e o passarinho.",
    },
  ],
};

const a3: AulaEI = {
  slug: "f8-dia-03-prever-gato-passaro",
  titulo: "Dia 3 · O gato e o passarinho",
  icone: "🐱",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_PREVER,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje tem gato espiando passarinho. O que será que ele vai fazer?",
    },
    {
      tipo: "preverHistoria",
      titulo: "Olho grande",
      cenas: [
        { imagemUrl: gato, narracao: "O gato estava deitado no sofá." },
        { imagemUrl: passaro, narracao: "Ele viu um passarinho pousar na janela." },
      ],
      pergunta: "O que o gato vai fazer?",
      instrucaoAudio: "Escolha a resposta certa.",
      opcoes: [
        { nome: "CORRER ATRÁS", imagemUrl: passaro, correta: true },
        { nome: "COMER SOPA", imagemUrl: sopa, correta: false },
        { nome: "IR NA ESCOLA", imagemUrl: escola, correta: false },
      ],
      feedbackAcerto: "Isso! Gato vendo passarinho quer sempre correr atrás!",
      feedbackErro: "Pensa no que o gato faz quando vê passarinho…",
      elogio: "Previsão de expert!",
    },
    {
      tipo: "preverHistoria",
      titulo: "O passarinho volta",
      cenas: [
        { imagemUrl: passaro, narracao: "O passarinho voou para longe do gato." },
        { imagemUrl: arvore, narracao: "Ele foi até uma árvore bem alta." },
      ],
      pergunta: "Onde o passarinho vai se esconder?",
      instrucaoAudio: "Escolha a melhor resposta.",
      opcoes: [
        { nome: "NO NINHO", imagemUrl: ninho, correta: true },
        { nome: "NO CARRO", imagemUrl: carro, correta: false },
        { nome: "NA MOCHILA", imagemUrl: mochila, correta: false },
      ],
      feedbackAcerto: "Perfeito! Passarinho sobe na árvore e vai pro ninho!",
      feedbackErro: "Onde o passarinho mora, lá em cima da árvore?",
      elogio: "Você entendeu a história inteira!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive da História · Dia 3",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: uma sementinha vira o quê?",
    },
  ],
};

const a4: AulaEI = {
  slug: "f8-dia-04-prever-semente",
  titulo: "Dia 4 · A sementinha",
  icone: "🌱",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_PREVER,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje a gente planta uma sementinha. O que vai crescer?",
    },
    {
      tipo: "preverHistoria",
      titulo: "Plantando",
      cenas: [
        { imagemUrl: menina, narracao: "A menina pegou uma sementinha bem pequena." },
        { imagemUrl: semente, narracao: "Ela plantou a semente na terra do quintal." },
        { imagemUrl: regador, narracao: "Todo dia ela regava com o regador. E o sol brilhava." },
      ],
      pergunta: "O que vai nascer da semente?",
      instrucaoAudio: "Escolha o que nasce quando a gente planta e rega.",
      opcoes: [
        { nome: "UMA FLOR", imagemUrl: flor, correta: true },
        { nome: "UM CARRO", imagemUrl: carro, correta: false },
        { nome: "UM CELULAR", imagemUrl: celular, correta: false },
      ],
      feedbackAcerto: "Sim! Semente com água e sol vira flor, planta, árvore!",
      feedbackErro: "Semente vira uma coisa VIVA que cresce da terra. Qual?",
      elogio: "Você entendeu como a natureza funciona!",
    },
    {
      tipo: "preverHistoria",
      titulo: "Sol e água",
      cenas: [
        { imagemUrl: flor, narracao: "A florzinha cresceu bonita." },
        { imagemUrl: sol, narracao: "Mas passou uma semana sem chuva e sem ninguém regar." },
      ],
      pergunta: "O que a flor precisa agora?",
      instrucaoAudio: "Escolha o que a flor mais precisa.",
      opcoes: [
        { nome: "ÁGUA", imagemUrl: regador, correta: true },
        { nome: "SORVETE", imagemUrl: sorvete, correta: false },
        { nome: "MOCHILA", imagemUrl: mochila, correta: false },
      ],
      feedbackAcerto: "Isso! Sem água a florzinha murcha. Regar salva!",
      feedbackErro: "Pensa: sem chuva e sem regar, o que falta pra flor?",
      elogio: "Você cuida bem das histórias!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive da História · Dia 4",
      mascoteUrl: mascote,
      falaFinal: "Amanhã é o último dia da semana: dia de aventura de vento e pipa!",
    },
  ],
};

const a5: AulaEI = {
  slug: "f8-dia-05-prever-pipa",
  titulo: "Dia 5 · A pipa no vento",
  icone: "🪁",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_PREVER,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Último dia da semana! Hoje tem pipa, vento e uma missão em família bem legal.",
    },
    {
      tipo: "preverHistoria",
      titulo: "Vento forte",
      cenas: [
        { imagemUrl: menino, narracao: "O menino levou a pipa dele para o parque." },
        { imagemUrl: pipa, narracao: "Ele soltou a pipa no ar bem devagar." },
        { imagemUrl: nuvem, narracao: "De repente veio um vento bem forte." },
      ],
      pergunta: "O que a pipa vai fazer?",
      instrucaoAudio: "Escolha a resposta certa.",
      opcoes: [
        { nome: "VOAR ALTO", imagemUrl: nuvem, correta: true },
        { nome: "VIRAR BOLO", imagemUrl: bolo, correta: false },
        { nome: "TOMAR BANHO", imagemUrl: banho, correta: false },
      ],
      feedbackAcerto: "Sim! Vento forte faz a pipa voar bem alto!",
      feedbackErro: "Pensa: pipa + vento forte = ela vai pra onde?",
      elogio: "Boa previsão!",
    },
    {
      tipo: "preverHistoria",
      titulo: "Hora de voltar",
      cenas: [
        { imagemUrl: pipa, narracao: "A pipa voou muito e o menino se cansou." },
        { imagemUrl: sol, narracao: "O sol já estava se pondo, tá quase de noite." },
      ],
      pergunta: "O que o menino vai fazer agora?",
      instrucaoAudio: "Escolha o que combina.",
      opcoes: [
        { nome: "IR PRA CASA", imagemUrl: mochila, correta: true },
        { nome: "COMER SORVETE", imagemUrl: sorvete, correta: false },
        { nome: "IR NA ESCOLA", imagemUrl: escola, correta: false },
      ],
      feedbackAcerto: "Isso! Anoitecendo e cansado — hora de ir pra casa!",
      feedbackErro: "Já está de noite. Pra onde a gente vai à noite?",
      elogio: "Detetive de primeira!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "🎒 Missão em Família — Adivinha o fim",
      convite:
        "Peça pra alguém da casa começar uma historinha e parar no meio. Depois adivinha o final antes da pessoa contar. Trocam de lugar e agora é sua vez de começar a história!",
      dicaAdulto:
        "Prever é a estratégia mais forte da compreensão inicial (Duke & Pearson 2002). Aceite qualquer previsão coerente — mesmo se for diferente do final 'certo'. O importante é justificar com pistas.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive da História · Semana 1",
      mascoteUrl: mascote,
      falaFinal:
        "Você fechou a Semana 1 da Compreensão! Semana que vem: contar a história em UMA frase só. Isso é Resumir!",
    },
  ],
};

/* ============================================================
 * Curso — Fase 8 (Semana 1 · 5 missões)
 * Próximas semanas: Resumir · Inferir · Conectar + Diploma
 * ============================================================ */

export const cursoLerComAuroraFase8: CursoEI = {
  slug: "ler-com-aurora-fase8",
  serie: "pre2",
  serieLabel: "Pré II / 1º Ano (Compreensão)",
  titulo: "Compreensão Estratégica",
  descricao:
    "Prever, resumir, inferir e conectar. A criança vira detetive da história e aprende a pensar sobre o que lê.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#0c4a6e",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "f8-semana-01",
      numero: 1,
      titulo: "Semana 1 · Prever",
      subtitulo: "Detetive da História",
      aulas: [a1, a2, a3, a4, a5],
    },
  ],
};

export function getAulaLerComAuroraFase8(slug: string): AulaEI | undefined {
  for (const u of cursoLerComAuroraFase8.unidades) {
    const found = u.aulas.find((a) => a.slug === slug);
    if (found) return found;
  }
  return undefined;
}
