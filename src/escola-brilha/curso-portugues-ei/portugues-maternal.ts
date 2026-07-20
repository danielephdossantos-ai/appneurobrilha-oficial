import type { CursoEI, AulaEI } from "./types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as bebe } from "@/assets/neuro-treino/objetos/bebe.png.asset.json";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as pai } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as vovo } from "@/assets/neuro-treino/objetos/avo-mulher.png.asset.json";
import { url as ursinho } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * Maternal (3-4 anos) — Unidade 1 · Aula 1
 * "O som da minha voz" — voz, palma, palavras muito curtas.
 * BNCC: EI02EF01 · EI02EF02 · EI02EF04
 */
const aula01: AulaEI = {
  slug: "aula-01-som-da-voz",
  titulo: "O som da minha voz",
  icone: "🎵",
  bncc: ["EI02EF01", "EI02EF02", "EI02EF04"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Oi! Eu sou o Brilha, o esquilinho contador de histórias! Vamos brincar com sons e palavras hoje?",
      legenda: "Sente-se com a criança e toque no botão para ouvir.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: bebe,
      versos: [
        "Bebê, bebê, sorriu pra mim.",
        "Bebê, bebê, faz assim.",
        "Bate palma, bate palma, bate palma sem parar.",
      ],
      legenda: "Cantar batendo palma junto com a criança.",
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada imagem para escutar o nome dela.",
      itens: [
        { nome: "bola", imagemUrl: bola },
        { nome: "sol", imagemUrl: sol },
        { nome: "mãe", imagemUrl: mae },
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual dessas começa com o mesmo som de BOLA?",
      referencia: { nome: "bola", imagemUrl: bola },
      opcoes: [
        { nome: "bebê", imagemUrl: bebe, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "mãe", imagemUrl: mae, correta: false },
      ],
      feedbackAcerto: "Isso! Bola e bebê começam com o som BÊ!",
      feedbackErro: "Escuta de novo: BOOO-la. Qual outra começa com BÊ?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Vamos bater palma no ritmo da palavra:",
      palavra: "BO-LA",
      silabas: 2,
      imagemUrl: bola,
      elogio: "Muito bem! Bola tem duas palmas!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "A bola do cachorrinho",
      cenas: [
        {
          imagemUrl: cachorro,
          narracao: "Era uma vez um cachorrinho chamado Toby. Toby amava correr!",
        },
        {
          imagemUrl: bola,
          narracao: "Um dia, Toby achou uma bola vermelha no quintal e latiu de alegria.",
        },
        {
          imagemUrl: abraco,
          narracao: "A dona veio brincar com ele. Toby ganhou um abraço bem apertado!",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Quem era o dono da bola na história?",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro, correta: true },
        { nome: "bebê", imagemUrl: bebe, correta: false },
        { nome: "mãe", imagemUrl: mae, correta: false },
      ],
      feedbackAcerto: "Isso mesmo! Era o cachorrinho Toby!",
      feedbackErro: "Vamos escutar a história de novo? Era um cachorrinho chamado Toby!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: cachorro,
      convite:
        "Agora imita o cachorrinho! Faz au au bem baixinho, e depois bem alto!",
      dica: "Alterne volumes para trabalhar controle da voz.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: abraco,
      pergunta: "Quem você abraça todo dia? Fala o nome pro Brilha!",
      exemplos: [
        { nome: "mamãe", imagemUrl: mae },
        { nome: "papai", imagemUrl: pai },
        { nome: "vovó", imagemUrl: vovo },
        { nome: "meu ursinho", imagemUrl: ursinho },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Peça pra alguém em casa cantar uma cantiga que você adora e bata palma junto!",
      dicaAdulto:
        "Escolha uma parlenda curta (Atirei o pau no gato, Ciranda cirandinha...). Cantar juntos fortalece vínculo e ritmo.",
    },
    {
      tipo: "celebracao",
      medalha: "Primeira Palma",
      mascoteUrl: brilha,
      falaFinal:
        "Uhuu! Você bateu palma, cantou e conversou com o Brilha! Que aula linda!",
    },
  ],
};

/**
 * Maternal — Unidade 1 · Aula 2
 * "A casa é gostosa" — nomes da família, rotina de casa, rima simples.
 * BNCC: EI02EF01 · EI02EF04 · EI02EF07
 */
const aula02: AulaEI = {
  slug: "aula-02-casa-gostosa",
  titulo: "A casa é gostosa",
  icone: "🏠",
  bncc: ["EI02EF01", "EI02EF04", "EI02EF07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Oi de novo! Hoje o Brilha vai visitar a SUA casa. Vamos brincar com os nomes das coisas de casa?",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: casa,
      versos: [
        "Minha casa, casa linda, tem mamãe, tem papai.",
        "Tem cachorro, tem gatinho, tem lugar pra descansar.",
        "Bate palma, bate palma, é bom demais chegar em casa.",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada figura para ouvir o nome. Repita comigo!",
      itens: [
        { nome: "casa", imagemUrl: casa },
        { nome: "gato", imagemUrl: gato },
        { nome: "papai", imagemUrl: pai },
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual dessas palavras começa com o mesmo som de CASA?",
      referencia: { nome: "casa", imagemUrl: casa },
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "mamãe", imagemUrl: mae, correta: false },
      ],
      feedbackAcerto: "Isso! Casa e cachorro começam com o som CÊ!",
      feedbackErro: "Escuta de novo: CAAA-sa. Qual outra começa com o som CÊ?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Vamos bater palma no ritmo:",
      palavra: "CA-SA",
      silabas: 2,
      imagemUrl: casa,
      elogio: "Boa! Casa tem duas palmas!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "O gatinho da lua",
      cenas: [
        {
          imagemUrl: gato,
          narracao: "Era uma vez um gatinho branco chamado Miau. Ele morava em uma casa aconchegante.",
        },
        {
          imagemUrl: lua,
          narracao: "Toda noite, Miau subia no telhado pra olhar a LUA cheia brilhando.",
        },
        {
          imagemUrl: abraco,
          narracao: "A dona chamava: 'Miau, vem dormir!'. E ele corria pro colo pra ganhar um abraço.",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O que o gatinho Miau ficava olhando no telhado?",
      opcoes: [
        { nome: "lua", imagemUrl: lua, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "casa", imagemUrl: casa, correta: false },
      ],
      feedbackAcerto: "Isso! Miau adorava olhar a LUA brilhar!",
      feedbackErro: "Escuta de novo: ele ficava olhando a LUA no céu!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: gato,
      convite: "Faz de conta que você é o Miau! Faz miau baixinho, e depois se espreguiça bem devagar.",
      dica: "Imitação de bichos trabalha voz, corpo e imaginação.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: casa,
      pergunta: "Qual o seu lugar favorito lá na sua casa? Conta pro Brilha!",
      exemplos: [
        { nome: "meu quartinho", imagemUrl: abraco },
        { nome: "cozinha", imagemUrl: casa },
        { nome: "cama do papai e da mamãe", imagemUrl: pai },
        { nome: "quintal", imagemUrl: sol },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Pega um adulto pela mão e passeia pela casa apontando: 'É a cadeira!', 'É a mesa!', 'É a cama!'",
      dicaAdulto:
        "Nomear objetos do dia a dia com a criança fixa vocabulário mais que qualquer flashcard. Repita as palavras devagar e sorria a cada acerto.",
    },
    {
      tipo: "celebracao",
      medalha: "Amigo da Casa",
      mascoteUrl: brilha,
      falaFinal:
        "Uhuu! Você conhece os nomes de casa, imitou o gatinho e conversou com o Brilha! Que bom!",
    },
  ],
};

void estrela;

export const cursoMaternal: CursoEI = {
  slug: "portugues-ei-maternal",
  serie: "maternal",
  serieLabel: "Maternal (3–4 anos)",
  titulo: "Códice do Som e do Ritmo",
  descricao:
    "O primeiro contato com a palavra falada, o ritmo do corpo e as histórias contadas. Muita voz, palma e imitação.",
  corPrimaria: "#f472b6",
  corSecundaria: "#831843",
  mascoteUrl: brilha,
  unidades: [
    {
      slug: "unidade-1",
      numero: 1,
      titulo: "O Som das Palavras e o Ritmo do Corpo",
      subtitulo: "Vozes, palmas e nomes queridos",
      aulas: [aula01, aula02],
    },
  ],
};
