import type { AulaGeoV1 } from "../../types";
import mesaHistoriador from "@/assets/historia-3ano/mesa-historiador-caixas.jpg";

/**
 * História · 3º Ano · Unidade 1 · Aula 01
 * "O Que é História?" — introdução ao pensamento histórico (EF03HI01/EF03HI04)
 *
 * PILOTO SPEB 1.0 — Fase 3.
 * Cena 1 (Motivação) entregue com interação real: lupa arrastável
 * revelando os objetos sobre a mesa do historiador.
 * Cenas 2–11 entram como placeholder navegável e serão construídas
 * uma por uma com aprovação cena a cena (conforme regra do usuário:
 * etapas pequenas, confirmar cada cena antes de concluir).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-o-que-e-historia",
  titulo: "O Que é História?",
  iconeTrilha: "🔎",
  bncc: ["EF03HI01"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA do Historiador sobre a mesa. Você vai descobrir que os objetos guardam pistas do passado.",
    mapaUrl: mesaHistoriador,
    aurora:
      "Brilha, cheguei na Biblioteca do Tempo com o Guardião da Memória! Ele deixou três caixas e alguns objetos misteriosos sobre a mesa. Pega a Lupa do Historiador e passa devagar pra descobrir o que tem aí.",
    falaFinal:
      "Viu? Uma fotografia antiga, uma carta com selo, um relógio de bolso, um carrinho de lata. TODOS eles contam histórias de pessoas que viveram antes. Isso é História: o estudo das pessoas ao longo do tempo.",
  },

  // ————————————————————————————————————————————
  // Cenas 2–11: placeholders navegáveis — serão construídas
  // uma por uma após a validação da Cena 1.
  // ————————————————————————————————————————————
  cena02_previsao: {
    tipo: "placeholder",
    titulo: "🔮 Cena 2 — Previsão do Investigador",
    descricao:
      "Aurora pergunta: qual dessas caixas guarda História? A criança vota antes de descobrir a resposta.",
  },
  cena03_vocabulario: {
    tipo: "placeholder",
    titulo: "📚 Cena 3 — Vocabulário do Historiador",
    descricao:
      "Cadernos do Arquivo abrem 4 palavras-chave: História, Fonte, Passado, Evidência.",
  },
  cena04_leituraGuiada: {
    tipo: "placeholder",
    titulo: "📖 Cena 4 — Leitura Guiada com o Guardião",
    descricao:
      "Aurora narra cada objeto da mesa e explica o que ele revela sobre quem o usou.",
  },
  cena05_compreensao: {
    tipo: "placeholder",
    titulo: "🧠 Cena 5 — Compreensão",
    descricao:
      "A criança relaciona cada objeto ao que ele conta sobre o passado (uso, época, dono).",
  },
  cena06_personagensLugar: {
    tipo: "placeholder",
    titulo: "🎭 Cena 6 — Personagens & Lugar",
    descricao:
      "A História não é só de reis e guerras. Apresentar pessoas comuns (avó, operário, criança de outra época).",
  },
  cena07_sequencia: {
    tipo: "placeholder",
    titulo: "⏳ Cena 7 — Sequência: como o historiador trabalha",
    descricao:
      "Ordem correta: observar → comparar → levantar hipótese → confirmar com outras fontes.",
  },
  cena08_voceLe: {
    tipo: "placeholder",
    titulo: "📓 Cena 8 — Você Lê Sozinho",
    descricao:
      "Texto curto explicando o que é História, com trechos-chip que abrem definições ao toque.",
  },
  cena09_minijogo: {
    tipo: "placeholder",
    titulo: "🎯 Cena 9 — Minijogo: Caça às Evidências",
    descricao:
      "Encontrar 10 pistas escondidas em uma cena de sala antiga usando a Lupa do Historiador.",
  },
  cena10_revisao: {
    tipo: "placeholder",
    titulo: "🔁 Cena 10 — Revisão",
    descricao:
      "Recapitular: História = pessoas + tempo + evidências. Cada objeto guarda uma pista.",
  },
  cena11_avaliacao: {
    tipo: "placeholder",
    titulo: "🏅 Cena 11 — Avaliação: Insígnia Aprendiz de Historiador",
    descricao:
      "3 perguntas de investigação (não memorização). Ao acertar, ganha a primeira página do Livro das Memórias.",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Aprendiz de Historiador" },
};
