import type { CursoEI, AulaEI } from "./types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as dinossauro } from "@/assets/neuro-treino/objetos/dinossauro.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as pipa } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";

/**
 * Pré II (5-6 anos) — Unidade 1 · Aula 1
 * "As grandes palavras" — sílabas longas, consciência fonêmica, narrativa
 * com problema/solução, pré-alfabetização oral.
 * BNCC: EI03EF01 · EI03EF04 · EI03EF06 · EI03EF09
 */
const aula01: AulaEI = {
  slug: "aula-01-grandes-palavras",
  titulo: "As grandes palavras",
  icone: "🦕",
  bncc: ["EI03EF01", "EI03EF04", "EI03EF06", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Oi grandão! Você está pertinho de ir pro 1º ano. Hoje vamos brincar com palavras GIGANTES!",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: dinossauro,
      versos: [
        "Di-nos-sau-ro, di-nos-sau-ro, gigante do passado.",
        "Ru-gia forte na floresta, todo mundo assustado.",
        "Mas o pequeno dinossauro, gostava de dançar.",
        "Ba-tia o pé no ritmo, sem parar, sem parar!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio:
        "Toque em cada imagem para ouvir. Depois repita a palavra em voz alta separando os pedaços.",
      itens: [
        { nome: "dinossauro", imagemUrl: dinossauro },
        { nome: "girassol", imagemUrl: girassol },
        { nome: "biblioteca", imagemUrl: biblioteca },
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio:
        "Qual dessas palavras começa com o mesmo som de BIBLIOTECA?",
      referencia: { nome: "biblioteca", imagemUrl: biblioteca },
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "girassol", imagemUrl: girassol, correta: false },
        { nome: "coruja", imagemUrl: coruja, correta: false },
      ],
      feedbackAcerto:
        "Perfeito! Biblioteca e bola começam com BÊ. Você já ouve os sons das palavras!",
      feedbackErro:
        "Escuta com atenção: Bi-bli-o-te-ca. O primeiro som é BÊ. Qual outra começa com BÊ?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Vamos separar em pedaços e bater palma:",
      palavra: "DI-NOS-SAU-RO",
      silabas: 4,
      imagemUrl: dinossauro,
      elogio: "Isso! Dinossauro tem QUATRO pedaços — quatro sílabas!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "A coruja da biblioteca",
      cenas: [
        {
          imagemUrl: bibliotecaria,
          narracao:
            "Dona Aurora era a bibliotecária mais antiga da cidade. Ela conhecia CADA livro.",
        },
        {
          imagemUrl: coruja,
          narracao:
            "Uma noite, uma coruja perdida entrou pela janela e ficou presa no salão dos livros!",
        },
        {
          imagemUrl: livro,
          narracao:
            "Aurora abriu um livro sobre corujas, leu em voz alta, e a coruja voou até o livro. Foi para casa!",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual era a profissão da Dona Aurora?",
      opcoes: [
        { nome: "bibliotecária", imagemUrl: bibliotecaria, correta: true },
        { nome: "coruja", imagemUrl: coruja, correta: false },
        { nome: "moça do mapa", imagemUrl: mapa, correta: false },
      ],
      feedbackAcerto: "Isso mesmo! Dona Aurora era BIBLIOTECÁRIA — ela cuidava dos livros!",
      feedbackErro:
        "Escuta a história de novo. Ela cuidava dos livros — qual é o nome dessa profissão?",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coruja,
      convite:
        "Agora você é a coruja! Fala 'uuh-uuh' bem baixinho e depois gira a cabeça olhando pros lados.",
      dica:
        "Imitação de animais estimula controle de voz, expressão facial e coordenação — pilares da oralidade.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: biblioteca,
      pergunta:
        "Qual é o livro que você MAIS gosta? Conta para o Brilha o que acontece nele!",
      exemplos: [
        "gosto do livro da Chapeuzinho",
        "gosto do meu livro dos dinossauros",
        "gosto do livro que a mamãe lê pra dormir",
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Peça pra alguém em casa ler UM livro inteiro pra você antes de dormir. Depois conte o que você mais gostou!",
      dicaAdulto:
        "Após a leitura, pergunte: 'O que aconteceu no começo? E no meio? E no final?' — trabalha estrutura narrativa oral, base da alfabetização.",
    },
    {
      tipo: "celebracao",
      medalha: "Guardião das Grandes Palavras",
      mascoteUrl: brilha,
      falaFinal:
        "Você é FERA! Já separa palavras em pedaços, escuta os sons e reconta histórias. Está pertinho do 1º ano!",
    },
  ],
};



/**
 * Pré II — Unidade 1 · Aula 2
 * "Palavras que rimam" — consciência fonológica: identificar rimas,
 * criar rimas simples, brincar com pares sonoros.
 * BNCC: EI03EF01 · EI03EF04 · EI03EF09
 */
const aula02: AulaEI = {
  slug: "aula-02-palavras-que-rimam",
  titulo: "Palavras que rimam",
  icone: "🎤",
  bncc: ["EI03EF01", "EI03EF04", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Alô, poeta! Hoje o Brilha vai te ensinar um truque MÁGICO: descobrir palavras que combinam no som. Chama-se RIMA!",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: gato,
      versos: [
        "O gato subiu no mato, o mato balançou.",
        "O rato saiu do buraco e do gato ele fugiu!",
        "Gato, mato, rato — todas terminam igual!",
        "Isso, meu amigo, chama-se RIMAR!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio:
        "Toca em cada palavra e escuta como o FINAL delas soa igualzinho.",
      itens: [
        { nome: "gato", imagemUrl: gato },
        { nome: "rato", imagemUrl: rato },
        { nome: "pipa", imagemUrl: pipa },
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual dessas palavras RIMA com GATO? Escuta o final: GA-TO.",
      referencia: { nome: "gato", imagemUrl: gato },
      opcoes: [
        { nome: "rato", imagemUrl: rato, correta: true },
        { nome: "pipa", imagemUrl: pipa, correta: false },
        { nome: "nuvem", imagemUrl: nuvem, correta: false },
      ],
      feedbackAcerto: "Isso! Gato e rato terminam com ATO — elas RIMAM!",
      feedbackErro:
        "Escuta o final: GA-TO. Qual outra termina com ATO? RA-TO!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Vamos separar em pedaços e bater palma:",
      palavra: "ES-TRE-LA",
      silabas: 3,
      imagemUrl: estrela,
      elogio: "Muito bem! Estrela tem TRÊS pedaços!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "O gato que sonhava com a lua",
      cenas: [
        {
          imagemUrl: gato,
          narracao:
            "Havia um gato preto chamado Zé. Toda noite Zé olhava a lua e sonhava com ela.",
        },
        {
          imagemUrl: pipa,
          narracao:
            "Um dia, Zé achou uma PIPA velha no quintal. Ele pensou: 'Se eu subir na pipa, chego na lua!'",
        },
        {
          imagemUrl: lua,
          narracao:
            "O vento levou a pipa bem alto. Zé não chegou na lua, mas viu o mundo inteiro lá de cima!",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Com o que o gato Zé sonhava toda noite?",
      opcoes: [
        { nome: "lua", imagemUrl: lua, correta: true },
        { nome: "rato", imagemUrl: rato, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: "Isso! Zé sonhava com a LUA todas as noites!",
      feedbackErro: "Escuta de novo: Zé olhava e sonhava com a LUA.",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: gato,
      convite:
        "Agora VOCÊ inventa uma rima! Fala uma palavra e depois outra que termine igual. Ex: PÃO e MÃO!",
      dica:
        "Improvisar rimas é o mais alto nível de consciência fonológica na Ed. Infantil — celebre qualquer tentativa.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: estrela,
      pergunta:
        "Se você fosse um gato como o Zé, o que você iria olhar no céu? Conta pro Brilha!",
      exemplos: [
        { nome: "a lua cheia", imagemUrl: lua },
        { nome: "as estrelas", imagemUrl: estrela },
        { nome: "as nuvens", imagemUrl: nuvem },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Brinca de rimar com um adulto! Ele fala uma palavra e você inventa outra que termina igual.",
      dicaAdulto:
        "Comece por pares fáceis (pão/mão, bola/cola, gato/rato). Depois deixe a criança tentar sozinha. Errar faz parte — o cérebro está processando o som final das palavras.",
    },
    {
      tipo: "celebracao",
      medalha: "Poeta Mirim",
      mascoteUrl: brilha,
      falaFinal:
        "Uhuuu! Você descobriu o segredo das palavras que combinam! Você é um POETA de verdade!",
    },
  ],
};

export const cursoPre2: CursoEI = {
  slug: "portugues-ei-pre2",
  serie: "pre2",
  serieLabel: "Pré II (5–6 anos)",
  titulo: "Códice das Grandes Palavras",
  descricao:
    "Preparação forte para a alfabetização: sons iniciais, sílabas, recontagem de histórias e vocabulário rico.",
  corPrimaria: "#60a5fa",
  corSecundaria: "#0c1e4a",
  mascoteUrl: brilha,
  unidades: [
    {
      slug: "unidade-1",
      numero: 1,
      titulo: "O Som das Palavras e o Ritmo do Corpo",
      subtitulo: "Palavras grandes, ideias grandes",
      aulas: [aula01, aula02],
    },
  ],
};
