import type { Aula } from "../types";
import { url as felizImg } from "@/assets/brilha-vida/emocoes/feliz.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as peImg } from "@/assets/neuro-treino/sentidos/pe.png.asset.json";
import { url as peEquilibrioImg } from "@/assets/neuro-treino/sentidos/pe-equilibrio.png.asset.json";
import { url as bracosAbracoImg } from "@/assets/neuro-treino/sentidos/bracos-abraco.png.asset.json";
import { url as olhoImg } from "@/assets/neuro-treino/sentidos/olho.png.asset.json";
import { url as maoImg } from "@/assets/neuro-treino/sentidos/mao.png.asset.json";

/**
 * EI03CG05 — Aula 5: Equilíbrio do corpo
 * Padrão TRAVADO: só partes do corpo — pé, braços, olho.
 * Sem mascotes, sem pódio.
 */
const aula: Aula = {
  codigo: "EI03CG05",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Equilíbrio do Corpo",

  narrativa: {
    titulo: "A ponte de tronco",
    contexto: "Apareceu uma ponte de tronco fininha. Um pé ficou firme, dois braços se abriram bem largos e um olho olhou pra frente — sem cair!",
    problema: "A quinta estrela do Mundo 2 acende quando a criança descobrir o SEGREDO do equilíbrio.",
    convite: "Vamos atravessar a ponte usando cada parte do corpo?",
  },

  conhecimentosPrevios: ["Sabe ficar em pé.", "Já andou numa linha do chão.", "Já ficou num pé só por alguns segundos."],

  missao: "Descobrir que EQUILÍBRIO é o corpo firme, calmo e concentrado.",

  objetivos: ["Ficar num pé só por alguns segundos.", "Perceber que respirar ajuda no equilíbrio."],

  motivacao: "Equilíbrio é força que vem de dentro — do foco!",

  explicacao: "EQUILÍBRIO é o corpo ficando FIRME sem cair.\n\n• BRAÇOS abertos ajudam a balançar.\n• OLHO num ponto fixo ajuda a mirar.\n• RESPIRAR devagar dá calma.\n• PÉ bem apoiado no chão segura tudo.\n\nQuem tem equilíbrio consegue andar em cima de um tronco, ficar num pé só, ou subir devagar.",

  explicacaoAtiva: [
    { texto: "Dois braços abertos — assim o corpo não cai.", imagem: bracosAbracoImg, imagemAlt: "Braços abertos" },
    { texto: "Um olho olha pra frente, num ponto fixo.", imagem: olhoImg, imagemAlt: "Olho focado" },
    { texto: "Um pé firme no chão segura o corpo todo.", imagem: peEquilibrioImg, imagemAlt: "Pé firme", checagem: { pergunta: "O que ajuda no equilíbrio?", opcoes: ["Braços abertos + respirar", "Fechar os olhos e girar"], correta: 0, explicacao: "Isso! Braços abertos e respiração são o segredo." } }
  ],

  explicacoesNiveis: {
    nivel1: "Equilíbrio é ficar firme sem cair.",
    nivel2: "Se eu abrir os braços quando ando na linha, não caio pro lado.",
    nivel3: "O corpo é como uma balança — braços ajudam a nivelar.",
    nivel4: "Bailarinos e atletas treinam o equilíbrio o tempo todo.",
  },

  exemploResolvido: {
    enunciado: "Vamos ficar 3 segundos num pé só. Conte junto!",
    passos: ["Um... o pé está firme.", "Dois... continua!", "Três! Conseguiu!"],
    resposta: "3 segundos de equilíbrio num pé só.",
    interativo: { tipo: "contagem", imagemUrl: peEquilibrioImg, quantidade: 3, nomeItem: "segundo", nomeItemPlural: "segundos", pergunta: "Por quantos segundos o pé ficou firme?" },
  },

  atividadeGuiada: {
    enunciado: "Qual parte do corpo mais ajuda no EQUILÍBRIO abrindo pros lados? Toque na imagem certa.",
    resposta: "Os braços abertos ajudam no equilíbrio.",
    explicacao: "Braços abertos = balança — o corpo fica nivelado.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual parte do corpo ajuda no equilíbrio se abrindo pros lados?",
      opcoes: [
        { nome: "Braços", imagemUrl: bracosAbracoImg },
        { nome: "Olho", imagemUrl: olhoImg },
        { nome: "Pé", imagemUrl: peEquilibrioImg },
      ],
      respostaCerta: "Braços",
    },
  },

  exercicios: [
    { enunciado: "🤸 O que ajuda a NÃO CAIR?", resposta: "Braços abertos, respirar e olhar fixo.", dica: "Tente ficar num pé só." },
    { enunciado: "🌳 Onde precisamos de equilíbrio?", resposta: "Na escada, na ponte, andando na linha.", dica: "Pensa onde poderia cair." },
    { enunciado: "🧘 Respirar devagar ajuda?", resposta: "Sim! Calma dá equilíbrio.", dica: "Respire fundo agora." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: três partes do corpo ajudam no equilíbrio. Descubra o papel de cada uma.",
    resposta: "Braços abrem, olho mira, pé segura.",
    visual: {
      cena: [
        { personagem: "Braços abertos", itemImagemUrl: bracosAbracoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Olho fixo", itemImagemUrl: olhoImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Pé firme", itemImagemUrl: peEquilibrioImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Braços abertos ajudam a ficar…", opcoes: ["Firme", "Torto"], correta: 0, explicacao: "Braços abertos equilibram." },
        { pergunta: "Um olho num ponto fixo dá o quê?", opcoes: ["Foco", "Sono"], correta: 0, explicacao: "Foco no ponto fixo segura o equilíbrio." },
        { pergunta: "Pé bem plantado no chão…", opcoes: ["Segura o corpo", "Deixa cair"], correta: 0, explicacao: "Pé firme é base do equilíbrio." },
      ],
    },
  },

  revisao: {
    pontos: ["Equilíbrio é ficar firme sem cair.", "Braços abertos + respiração = segredo.", "Olho num ponto fixo ajuda.", "Praticar melhora todo dia."],
    dica: "Hoje: fique 5 segundos num pé só, com braços abertos.",
  },

  quiz: [
    { pergunta: "O que ajuda a se equilibrar?", opcoes: ["Braços abertos", "Olhos fechados"], correta: 0, explicacao: "Braços abertos dão equilíbrio.", visual: { tipo: "itens", imagemUrl: bracosAbracoImg, quantidade: 1, rotulo: "Braços" } },
    { pergunta: "Respirar devagar ajuda no equilíbrio?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Calma dá equilíbrio.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Calma" } },
    { pergunta: "Ficar num pé só treina o quê?", opcoes: ["Equilíbrio", "Voz"], correta: 0, explicacao: "Um pé só = equilíbrio.", visual: { tipo: "grupos", grupos: [{ imagemUrl: peEquilibrioImg, quantidade: 1, rotulo: "Pé firme", cor: "#F472B6" }, { imagemUrl: estrelaImg, quantidade: 1, rotulo: "Conseguir", cor: "#FBBF24" }] } }
  ],

  conclusao: "🏅 Medalha: Guardião do Equilíbrio! A QUINTA ESTRELA ⭐ acendeu. Em Casa: treine ficar num pé só na frente do espelho.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "As corujas conseguem ficar horas num pé só sem se cansar. Elas são campeãs de equilíbrio!",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Segundos no pé só", instrucao: "Conte os segundos que o pé fica firme.", grupos: [{ imagemUrl: peEquilibrioImg, quantidade: 3, rotulo: "Segundos" }], pergunta: "Quantos segundos?", opcoes: ["2", "3", "5"], correta: 1, acerto: "3 segundos!", erro: "Conte: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Partes do equilíbrio", instrucao: "Cada parte ajuda a não cair.", grupos: [{ imagemUrl: bracosAbracoImg, quantidade: 1, rotulo: "Braços" }, { imagemUrl: olhoImg, quantidade: 1, rotulo: "Olho" }, { imagemUrl: peEquilibrioImg, quantidade: 1, rotulo: "Pé" }], pergunta: "Quantas partes do corpo dão equilíbrio?", opcoes: ["2", "3"], correta: 1, acerto: "3 partes ajudam!", erro: "Conte um por um." },
    { tipo: "ligar", titulo: "Fase 3 · Segredo do equilíbrio", instrucao: "Ligue a parte do corpo ao que ela faz.", pares: [
      { a: "Braços abertos", b: "nivelam", aImagem: bracosAbracoImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
      { a: "Olho fixo", b: "foca", aImagem: olhoImg, aQuantidade: 1, bImagem: solImg, bQuantidade: 1 },
      { a: "Pé firme", b: "segura", aImagem: peEquilibrioImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 },
    ] },
    { tipo: "arrastar", titulo: "Fase 4 · Estrela pra quem dá equilíbrio", instrucao: "Dê 1 estrela pra cada parte do corpo.", itemImagem: estrelaImg, alvosVisuais: [
      { nome: "Braços", cor: "#FBBF24", capacidade: 1, imagemUrl: bracosAbracoImg },
      { nome: "Olho", cor: "#60A5FA", capacidade: 1, imagemUrl: olhoImg },
      { nome: "Pé", cor: "#F472B6", capacidade: 1, imagemUrl: peEquilibrioImg },
    ], pares: [{ item: "E1", alvo: "Braços" }, { item: "E2", alvo: "Olho" }, { item: "E3", alvo: "Pé" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Braços abertos ajudam a equilibrar?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Braços abertos = balança.", visual: { tipo: "itens", imagemUrl: bracosAbracoImg, quantidade: 1, rotulo: "Braços abertos" } },
      { pergunta: "Se eu correr enquanto tento equilibrar, dá certo?", opcoes: ["Não, precisa calma", "Sim, sempre"], correta: 0, explicacao: "Calma é chave.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Calma" } },
    ],
    medio: [
      { pergunta: "Ficar num pé só treina o quê?", opcoes: ["Equilíbrio", "Voz"], correta: 0, explicacao: "Um pé só = equilíbrio.", visual: { tipo: "itens", imagemUrl: peEquilibrioImg, quantidade: 1, rotulo: "Um pé" } },
      { pergunta: "Respirar fundo faz o quê?", opcoes: ["Acalma o corpo", "Deixa nervoso"], correta: 0, explicacao: "Respirar acalma.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração calmo" } },
    ],
    dificil: [
      { pergunta: "Bailarinos treinam equilíbrio todo dia?", opcoes: ["Sim, sempre", "Não precisa"], correta: 0, explicacao: "Prática é tudo.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Talento treinado" } },
      { pergunta: "Se eu cair uma vez, tenho que desistir?", opcoes: ["Não, eu tento de novo", "Sim, desisto"], correta: 0, explicacao: "Cair faz parte.", visual: { tipo: "itens", imagemUrl: maoImg, quantidade: 1, rotulo: "Tento de novo" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03CG05", titulo: "Mundo 2 completo" },
};

void peImg;

export default aula;
