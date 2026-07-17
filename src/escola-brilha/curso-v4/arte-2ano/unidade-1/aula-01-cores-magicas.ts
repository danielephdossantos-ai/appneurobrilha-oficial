import type { AulaArteV1 } from "../../types";

/**
 * Arte · 2º Ano · Unidade 1 · Aula 01
 * "As Cores Primárias e Secundárias" — EF15AR04
 *
 * PILOTO — cena 1 (Motivação: mistura de cores) 100% interativa.
 * Cenas 2–11 entram como placeholder navegável — vão ser construídas
 * uma a uma com aprovação da criança/família.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-cores-magicas",
  titulo: "A Magia da Mistura de Cores",
  iconeTrilha: "🎨",
  bncc: ["EF15AR04"],
  duracaoMin: 18,

  cena01_motivacao: {
    tipo: "misturaCores",
    aurora:
      "Brilha, olha o que eu tenho: três potes de tinta MÁGICA! Vermelho, azul e amarelo. São as cores primárias — cores que nasceram sozinhas. Arrasta DOIS potes para dentro do caldeirão e vamos ver que cor nova nasce!",
    instrucao: "Arraste 2 potes de tinta para dentro do caldeirão",
    misturas: [
      {
        id: "verde",
        primariaA: { id: "azul", hex: "#2563eb", nome: "Azul" },
        primariaB: { id: "amarelo", hex: "#facc15", nome: "Amarelo" },
        resultado: { hex: "#22c55e", nome: "Verde" },
        falaAcerto:
          "Uau! Azul mais amarelo nasce VERDE — a cor das folhas da floresta! Essa é uma cor secundária.",
      },
      {
        id: "laranja",
        primariaA: { id: "vermelho", hex: "#ef4444", nome: "Vermelho" },
        primariaB: { id: "amarelo", hex: "#facc15", nome: "Amarelo" },
        resultado: { hex: "#f97316", nome: "Laranja" },
        falaAcerto:
          "Olha só! Vermelho mais amarelo nasce LARANJA — a cor do pôr do sol! Também é secundária.",
      },
      {
        id: "roxo",
        primariaA: { id: "vermelho", hex: "#ef4444", nome: "Vermelho" },
        primariaB: { id: "azul", hex: "#2563eb", nome: "Azul" },
        resultado: { hex: "#8b5cf6", nome: "Roxo" },
        falaAcerto:
          "Que lindo! Vermelho mais azul nasce ROXO — a cor da uva docinha! Última cor secundária!",
      },
    ],
    falaFinal:
      "Você descobriu as três cores secundárias: VERDE, LARANJA e ROXO. Todas nascem misturando duas primárias. Agora as asas do Brilha podem ter todas as cores do arco-íris!",
  },

  // Cenas 2–11 — placeholders enquanto validamos a Cena 1
  cena02_previsao: { tipo: "placeholder", titulo: "🔮 Previsão", descricao: "Em construção — validar cena 1 primeiro." },
  cena03_vocabulario: { tipo: "placeholder", titulo: "📚 Vocabulário", descricao: "Cartões: primária, secundária, mistura, pigmento." },
  cena04_leituraGuiada: { tipo: "placeholder", titulo: "📖 Leitura guiada", descricao: "Ateliê das tintas naturais com Aurora." },
  cena05_compreensao: { tipo: "placeholder", titulo: "🧠 Compreensão", descricao: "Quiz das misturas." },
  cena06_personagensLugar: { tipo: "placeholder", titulo: "🎭 Ateliê", descricao: "Personagens no ateliê." },
  cena07_sequencia: { tipo: "placeholder", titulo: "🧩 Sequência", descricao: "Ordem da mistura das cores." },
  cena08_voceLe: { tipo: "placeholder", titulo: "💪 Você lê", descricao: "Diário do pequeno pintor." },
  cena09_minijogo: { tipo: "placeholder", titulo: "🎮 Fábrica de Poções Coloridas", descricao: "Minijogo cronometrado." },
  cena10_revisao: { tipo: "placeholder", titulo: "🔁 Revisão", descricao: "Roda das cores." },
  cena11_avaliacao: { tipo: "placeholder", titulo: "✅ Avaliação", descricao: "Quiz final + missão família." },

  recompensa: { xp: 60, moedas: 30, medalha: "Pote de Tinta Amarela Infinita" },
};
