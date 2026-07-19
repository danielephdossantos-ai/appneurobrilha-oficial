import type { AulaArteV1 } from "../../types";
import vocabSombra from "@/assets/arte-2ano/u5-vocab-sombra.jpg";
import vocabSilhueta from "@/assets/arte-2ano/u5-vocab-silhueta.jpg";
import vocabTela from "@/assets/arte-2ano/u5-vocab-tela.jpg";
import vocabPersonagem from "@/assets/arte-2ano/u5-vocab-personagem.jpg";
import pigDragao from "@/assets/arte-2ano/u5-pig-dragao.jpg";
import pigPrincesa from "@/assets/arte-2ano/u5-pig-princesa.jpg";
import pigArvore from "@/assets/arte-2ano/u5-pig-arvore.jpg";
import pigTela from "@/assets/arte-2ano/u5-pig-tela.jpg";
import animalGirafa from "@/assets/arte-2ano/u5-animal-girafa.jpg";
import animalElefante5 from "@/assets/arte-2ano/u5-animal-elefante.jpg";
import animalMorcego from "@/assets/arte-2ano/u5-animal-morcego.jpg";
import u5passo1 from "@/assets/arte-2ano/u5-passo1-lencol.jpg";
import u5passo2 from "@/assets/arte-2ano/u5-passo2-escuro.jpg";
import u5passo3 from "@/assets/arte-2ano/u5-passo3-lanterna.jpg";
import u5passo4 from "@/assets/arte-2ano/u5-passo4-bonecos.jpg";
import u5passo5 from "@/assets/arte-2ano/u5-passo5-historia.jpg";

/** Arte · 1º Ano · Unidade 5 · Aula 01 — "Brincando com Sombras" (EF15AR18/19) */
export const aula01: AulaArteV1 = {
  slug: "aula-01-teatro-sombras",
  titulo: "Brincando com Sombras",
  iconeTrilha: "🎭",
  bncc: ["EF15AR18", "EF15AR19"],
  duracaoMin: 15,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora: "Com uma lanterna, sua mão vira bicho na parede! Toca em cada sombra!",
    titulo: "Zoo de Sombras",
    instrucao: "Toca em cada bicho",
    itens: [
      { emoji: "🐕", rotulo: "Cachorro", descricao: "Mãos juntas fazendo orelhas.", cor: "#78350f" },
      { emoji: "🦋", rotulo: "Borboleta", descricao: "Mãos cruzadas batendo.", cor: "#a855f7" },
      { emoji: "🐦", rotulo: "Passarinho", descricao: "Polegares juntos batendo.", cor: "#0ea5e9" },
      { emoji: "🐰", rotulo: "Coelho", descricao: "Dois dedos pra cima = orelhas.", cor: "#f472b6" },
    ],
    falaFinal: "Sua mão vira personagem com uma luz!",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Adivinha!",
    perguntas: [
      { pergunta: "Pra ter sombra eu preciso de...",
        alternativas: [{ texto: "Luz", correta: true }, { texto: "Chuva", correta: false }],
        feedbackAcerto: "Luz!", feedbackErro: "Sem luz não tem sombra." },
      { pergunta: "A sombra aparece...",
        alternativas: [{ texto: "Na parede", correta: true }, { texto: "No estômago", correta: false }],
        feedbackAcerto: "Na parede!", feedbackErro: "A sombra aparece na parede." },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Palavras do teatro!",
    cards: [
      { termo: "Sombra", definicao: "Desenho escuro na parede.", emoji: "🌑", cor: "#1f2937", fotoUrl: vocabSombra },
      { termo: "Silhueta", definicao: "Contorno preto da figura.", emoji: "👤", cor: "#6b7280", fotoUrl: vocabSilhueta },
      { termo: "Tela", definicao: "Lençol onde a sombra aparece.", emoji: "🎪", cor: "#f3f4f6", fotoUrl: vocabTela },
      { termo: "Personagem", definicao: "Bicho ou pessoa da história.", emoji: "🎭", cor: "#a855f7", fotoUrl: vocabPersonagem },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Teatro de Sombras é antigo, da China e Indonésia!",
    paragrafos: [
      "Antigamente não tinha TV.",
      "As pessoas se juntavam com uma lanterna e um lençol.",
      "E faziam histórias de dragões, princesas e florestas!",
    ],
    pigmentos: [
      { nome: "Dragão", hex: "#dc2626", fonte: "Personagem clássico", emoji: "🐉", fotoUrl: pigDragao },
      { nome: "Princesa", hex: "#f472b6", fonte: "Silhueta suave", emoji: "👸", fotoUrl: pigPrincesa },
      { nome: "Árvore", hex: "#16a34a", fonte: "Cenário", emoji: "🌳", fotoUrl: pigArvore },
      { nome: "Tela branca", hex: "#f3f4f6", fonte: "Lençol iluminado", emoji: "🎪", fotoUrl: pigTela },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Vamos ver!",
    perguntas: [
      { pergunta: "O que forma a sombra?",
        alternativas: [{ texto: "Um objeto e uma luz", correta: true }, { texto: "Um cachorro sozinho", correta: false }],
        feedbackAcerto: "Isso!", feedbackErro: "Precisa de luz e de algo pra fazer sombra." },
      { pergunta: "Qual desses vira sombra grande?",
        alternativas: [{ texto: "Uma girafa", correta: true }, { texto: "Uma formiga", correta: false }],
        feedbackAcerto: "Girafa é grande!", feedbackErro: "Quanto maior o bicho, maior a sombra." },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Que sombra cada bicho faz?",
    animais: [
      { nome: "Girafa", emoji: "🦒", fotoUrl: animalGirafa,
        corAlvo: { nome: "Sombra alta", hex: "#eab308" },
        opcoes: [{ nome: "Sombra alta", hex: "#eab308" }, { nome: "Sombra baixa", hex: "#78350f" }],
        falaAcerto: "Sombra alta e comprida!" },
      { nome: "Elefante", emoji: "🐘", fotoUrl: animalElefante5,
        corAlvo: { nome: "Sombra gigante", hex: "#6b7280" },
        opcoes: [{ nome: "Sombra gigante", hex: "#6b7280" }, { nome: "Sombra pequena", hex: "#0ea5e9" }],
        falaAcerto: "Sombra gigante!" },
      { nome: "Morcego", emoji: "🦇", fotoUrl: animalMorcego,
        corAlvo: { nome: "Asas abertas", hex: "#1f2937" },
        opcoes: [{ nome: "Asas abertas", hex: "#1f2937" }, { nome: "Sombra redonda", hex: "#a855f7" }],
        falaAcerto: "Asas abertas na parede!" },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordem certa do teatro de sombras!",
    passos: [
      { id: "p1", texto: "Estico um lençol", emoji: "🎪", ordem: 1, fotoUrl: u5passo1 },
      { id: "p2", texto: "Apago a luz", emoji: "🌚", ordem: 2, fotoUrl: u5passo2 },
      { id: "p3", texto: "Ligo a lanterna atrás", emoji: "🔦", ordem: 3, fotoUrl: u5passo3 },
      { id: "p4", texto: "Faço bonecos com a mão", emoji: "🖐️", ordem: 4, fotoUrl: u5passo4 },
      { id: "p5", texto: "Conto a história!", emoji: "📖", ordem: 5, fotoUrl: u5passo5 },
    ],
    falaAcerto: "Seu teatro começou!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Toca nas palavras!",
    titulo: "Meu Diário",
    trechos: [
      { texto: "Fiz um teatro de", palavraDestaque: "sombras", corDestaque: "#1f2937" },
      { texto: "Usei uma", palavraDestaque: "lanterna", corDestaque: "#eab308" },
      { texto: "Contei uma", palavraDestaque: "história", corDestaque: "#a855f7" },
      { texto: "Sou bonequeiro!" },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "Toque em cada sombra!",
    titulo: "🎭 Zoo de Sombras",
    instrucao: "Toque em todas!",
    tempoSeg: 45,
    itens: [
      { emoji: "🐕", rotulo: "Cachorro", cor: "#78350f" },
      { emoji: "🦋", rotulo: "Borboleta", cor: "#a855f7" },
      { emoji: "🐦", rotulo: "Passarinho", cor: "#0ea5e9" },
      { emoji: "🐰", rotulo: "Coelho", cor: "#f472b6" },
    ],
    falaFinal: "Você é bonequeiro!",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Revisando!",
    titulo: "🔁 Roda das Sombras",
    itens: [
      { emoji: "🌑", rotulo: "Sombra", descricao: "Desenho escuro na parede.", cor: "#1f2937" },
      { emoji: "🔦", rotulo: "Luz", descricao: "Faz a sombra aparecer.", cor: "#eab308" },
      { emoji: "🎪", rotulo: "Tela", descricao: "Lençol branco.", cor: "#f3f4f6" },
    ],
    falaFinal: "Você entende o teatro!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Última!",
    quiz: {
      pergunta: "Pra fazer sombra, eu preciso de...",
      alternativas: [{ texto: "Uma luz atrás do objeto", correta: true }, { texto: "Só do escuro", correta: false }],
      feedback: "Isso! Sem luz, sem sombra!",
    },
    missaoFamilia: "🏠 Teatro em Casa: com a família, apaguem a luz, peguem uma lanterna e criem 3 sombras diferentes na parede!",
    recompensaTitulo: "🎭 Quinta página aberta!",
    recompensaItem: "🔦 Lanterninha de Aurora",
  },
  recompensa: { xp: 50, moedas: 25, medalha: "Lanterninha" },
};
