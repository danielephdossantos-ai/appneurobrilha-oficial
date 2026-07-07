import type { AulaGeografiaV4 } from "../../types";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import praca from "@/assets/neuro-treino/objetos/praca.png";
import cidade from "@/assets/neuro-treino/objetos/cidade.png";
import parque from "@/assets/neuro-treino/objetos/parque.png";
import lua from "@/assets/neuro-treino/objetos/lua.png";
import sol from "@/assets/neuro-treino/objetos/sol.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";

/**
 * Aula 4 · Unidade 2 — Perto e Longe
 * Noção de distância no dia a dia da criança.
 */
export const aula04: AulaGeografiaV4 = {
  slug: "aula-04-perto-e-longe",
  titulo: "Perto e Longe",
  iconeTrilha: "📏",
  bncc: ["EF01GE05"],
  duracaoMin: 15,

  momento01_missao: {
    texto: "Descubra o que está PERTO e o que está LONGE de você!",
    imagemUrl: brilha,
  },

  momento02_narrativa: {
    titulo: "Perto ou longe?",
    historia:
      "Brilha olhou pela janela. — A árvore do quintal está PERTO. Consigo tocar em poucos passos. Mas a LUA lá no céu está muito LONGE. Nem se eu andar o dia inteiro chego lá!",
    imagemUrl: lua,
  },

  momento03_exploracaoVisual: {
    instrucao: "Toque em cada carta pra sentir a distância.",
    galeria: [
      { imagemUrl: casa, legenda: "Minha casa — o lugar MAIS PERTO de mim quando estou nela" },
      { imagemUrl: arvore, legenda: "Árvore do quintal — PERTO" },
      { imagemUrl: escola, legenda: "Escola — geralmente PERTO da casa" },
      { imagemUrl: cidade, legenda: "Outra cidade — LONGE, precisa de carro" },
      { imagemUrl: sol, legenda: "Sol — MUITO LONGE, no céu" },
      { imagemUrl: lua, legenda: "Lua — LONGÍSSIMO, nem dá pra ir andando" },
    ],
  },

  momento04_observacao: {
    perguntaGuia: "Como sei se algo está PERTO ou LONGE?",
    pistas: [
      "Se eu chego lá em poucos passos, está PERTO.",
      "Se preciso de carro, ônibus ou avião, está LONGE.",
      "Se eu nem consigo ir, é LONGÍSSIMO (como a Lua!).",
    ],
    revelacao:
      "PERTO = alcanço rápido. LONGE = leva muito tempo pra chegar.",
  },

  momento05_ensinoExplicito: {
    titulo: "Distâncias no meu dia",
    etapas: [
      { texto: "Sua mão está PERTO do seu rosto — a poucos centímetros.", imagemUrl: brilha },
      { texto: "A escola geralmente está PERTO da sua casa — dá pra ir andando ou de ônibus curto.", imagemUrl: escola },
      { texto: "Outra cidade está LONGE — precisa de horas de carro.", imagemUrl: cidade },
      { texto: "A Lua está LONGE demais — só astronauta chega lá!", imagemUrl: lua },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha organiza:",
    passos: [
      "— Do meu quarto pra COZINHA é PERTO. Ando 5 passos.",
      "— Da minha casa pra ESCOLA é PERTO. Vou andando em 10 minutos.",
      "— Da minha cidade pra praia é LONGE. Vou de carro 2 horas.",
      "— Da Terra pra LUA é LONGÍSSIMO. Vai só foguete!",
    ],
    visualUrl: brilha,
  },

  momento07_nosFazemos: {
    enunciado: "Junto: leve Brilha até a estrela — ela está PERTO ou LONGE dele?",
    dica: "Se dá pra chegar em poucos passos, é PERTO.",
    orientacao: {
      instrucao: "Vá até a estrela que está aqui PERTO (1 passo).",
      personagemUrl: brilha,
      cenarioUrl: parque,
      posicaoInicial: { linha: 1, coluna: 1 },
      alvo: { linha: 1, coluna: 2, imagemUrl: estrela, nome: "Estrela perto" },
      feedbackAcerto: "1 passo só — muito PERTO! ⭐",
    },
  },

  momento08_voceFaz: {
    enunciado: "Agora sozinho:",
    quiz: {
      pergunta: "Sua mão está a que distância do seu nariz?",
      opcoes: ["MUITO PERTO", "MUITO LONGE"],
      correta: 0,
      feedbackAcerto: "Isso! Sua mão está pertíssimo — dá pra tocar o nariz.",
      feedbackErro: "Encoste a mão no nariz. Viu? Está PERTO.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Você mora no Brasil. Seu tio mora em outro país.",
    problema: "Seu tio mora perto ou longe de você?",
    quiz: {
      pergunta: "Se mora em outro PAÍS, ele está…",
      opcoes: ["Perto", "Longe (precisa de avião)"],
      correta: 1,
      feedbackAcerto: "Certo! Outro país é LONGE — precisa de avião.",
      feedbackErro: "Se precisa de AVIÃO, com certeza está LONGE.",
    },
  },

  momento10_minijogo: {
    titulo: "Perto ou Longe?",
    instrucao: "Toque em cada carta e ouça se aquilo está perto ou longe de você.",
    jogo: {
      tipo: "galeriaExploracao",
      bloco: {
        cards: [
          { imagemUrl: casa, titulo: "Seu quarto", descricao: "PERTO — está dentro da sua casa." },
          { imagemUrl: praca, titulo: "Praça do bairro", descricao: "PERTO — dá pra ir andando." },
          { imagemUrl: escola, titulo: "Escola", descricao: "PERTO — geralmente no mesmo bairro." },
          { imagemUrl: cidade, titulo: "Outra cidade", descricao: "LONGE — precisa de carro ou ônibus." },
          { imagemUrl: sol, titulo: "O Sol", descricao: "MUITO LONGE — 150 milhões de km!" },
          { imagemUrl: lua, titulo: "A Lua", descricao: "LONGÍSSIMO — só foguete chega lá." },
        ],
      },
    },
  },

  momento11_quiz: {
    instrucao: "Quiz rápido:",
    perguntas: [
      {
        pergunta: "Se eu chego em POUCOS PASSOS, está…",
        opcoes: ["Perto", "Longe"],
        correta: 0,
        feedbackAcerto: "Certo!",
        feedbackErro: "Poucos passos = PERTO.",
      },
      {
        pergunta: "Se preciso de AVIÃO pra chegar, está…",
        opcoes: ["Perto", "Longe"],
        correta: 1,
        feedbackAcerto: "Isso! Avião só se usa pra lugares LONGE.",
        feedbackErro: "Ninguém pega avião pra ir na esquina — avião é pra LONGE.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🗺 Perto e Longe da minha casa",
    materiais: ["Um adulto pra conversar"],
    passos: [
      "Sente com um adulto.",
      "Cite 3 lugares que ficam PERTO da sua casa.",
      "Cite 3 lugares que ficam LONGE da sua casa (outra cidade, outra praia, etc.).",
    ],
    registro: "Diga qual é o lugar MAIS LONGE que você conhece.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "A sua CADEIRA da sala está…",
        opcoes: ["Perto", "Longe"],
        correta: 0,
        feedbackAcerto: "Certo!",
        feedbackErro: "Sua cadeira está PERTO — você quase pode tocá-la.",
      },
      {
        pergunta: "A ESTRELA que a gente vê no céu à noite está…",
        opcoes: ["Perto", "Longe"],
        correta: 1,
        feedbackAcerto: "Isso! As estrelas estão LONGÍSSIMAS.",
        feedbackErro: "Estrela é LONGE — muito muito longe.",
      },
    ],
  },

  momento14_continuacao: {
    texto: "⭐ Você desbloqueou PERTO e LONGE! Última aula: seguir um CAMINHO.",
    imagemUrl: brilha,
  },

  recompensa: { xp: 100, moedas: 40, medalha: "🧭 Explorador das Distâncias" },
};
