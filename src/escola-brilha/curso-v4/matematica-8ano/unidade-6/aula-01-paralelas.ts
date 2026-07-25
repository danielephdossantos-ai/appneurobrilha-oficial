import type { AulaV4 } from "../../types";

export const aula01_paralelas: AulaV4 = {
  slug: "u6-01-paralelas",
  titulo: "Retas paralelas cortadas por transversal",
  iconeTrilha: "🚧",
  bncc: ["EF08MA15"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Faixas de trânsito",
    historia:
      "{NOME}, retas paralelas nunca se encontram. Quando uma outra atravessa (transversal), aparecem 8 ângulos com relações lindas.",
  },
  momento02_exploracao: {
    instrucao: "Nomes.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "8 ângulos da transversal",
        cabecalhos: ["Par", "Nome", "Relação"],
        linhas: [
          { rotulo: "1", valores: ["Correspondentes", "Iguais"] },
          { rotulo: "2", valores: ["Alternos internos", "Iguais"] },
          { rotulo: "3", valores: ["Alternos externos", "Iguais"] },
          { rotulo: "4", valores: ["Colaterais internos", "Somam 180°"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Se um ângulo é 70°, quanto vale o correspondente?",
    pista: "Correspondentes são iguais.",
    revelacao: "70°.",
  },
  momento04_explicacao: {
    titulo: "Relações",
    etapas: [
      {
        texto: "Correspondentes = iguais (mesma posição).",
        exemploReal: {
          contexto: "Se A = 70°, o correspondente B = 70°.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Ângulo", "Valor"],
            linhas: [
              { rotulo: "A", valores: ["70°"] },
              { rotulo: "B", valores: ["70°"] },
            ],
          },
          destaque: "= 70°.",
        },
      },
      {
        texto: "Alternos internos = iguais (Z).",
        exemploReal: {
          contexto: "Se um alterno interno = 65°, o outro = 65°.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["", "Valor"],
            linhas: [
              { rotulo: "1º", valores: ["65°"] },
              { rotulo: "2º", valores: ["65°"] },
            ],
          },
          destaque: "Formato Z.",
        },
      },
      {
        texto: "Colaterais internos somam 180° (C).",
        exemploReal: {
          contexto: "Se um = 110°, o colateral = 70°.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["", "Valor"],
            linhas: [
              { rotulo: "1º", valores: ["110°"] },
              { rotulo: "2º", valores: ["70°"] },
              { rotulo: "Σ", valores: ["180°"] },
            ],
          },
          destaque: "Suplementares.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Um ângulo mede 80°. Ache o correspondente e o colateral interno.",
    resposta: "Correspondente 80°, colateral 100°.",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Relação", "Ângulo"],
      linhas: [
        { rotulo: "Corresp.", valores: ["80°"] },
        { rotulo: "Colat. int.", valores: ["100°"] },
      ],
    },
    passos: ["Correspondentes iguais.", "Colaterais somam 180°."],
  },
  momento06_praticaGuiada: {
    enunciado: "Se A = 40°, correspondente vale:",
    dica: "Iguais.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "40°" }, { nome: "140°" }, { nome: "50°" }],
      respostaCerta: "40°",
      feedbackAcerto: "🎯",
      feedbackErro: "Correspondentes iguais.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Colateral interno de 130°:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "50°" }, { nome: "130°" }, { nome: "40°" }],
      respostaCerta: "50°",
      feedbackAcerto: "🎯 180−130.",
      feedbackErro: "Somam 180°.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "Duas ruas paralelas cortadas por uma avenida. Um ângulo de 55° na 1ª interseção.",
    problema: "O ângulo correspondente na 2ª interseção:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "55°" }, { nome: "125°" }, { nome: "35°" }],
      respostaCerta: "55°",
      feedbackAcerto: "🎯",
      feedbackErro: "Correspondentes.",
    },
  },
  momento09_revisao: {
    pontos: ["Correspondentes iguais.", "Alternos iguais (Z).", "Colaterais somam 180° (C)."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Alterno interno de 60°:", opcoes: ["60°", "120°", "30°"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Iguais." },
      { pergunta: "Colateral de 90°:", opcoes: ["90°", "180°", "45°"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "180−90." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Ruas paralelas",
    materiais: ["Régua"],
    passos: ["Desenhe 2 paralelas cortadas por uma transversal.", "Marque os 8 ângulos e classifique."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
