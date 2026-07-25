import type { AulaV4 } from "../../types";

export const aula06_congruencia: AulaV4 = {
  slug: "u6-06-congruencia",
  titulo: "Iguais ou Parecidas?",
  iconeTrilha: "🔗",
  bncc: ["EF03MA13"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Duas formas",
    historia: "Duas figuras podem ser IGUAIS (congruentes) ou só parecidas (semelhantes).",
  },
  momento02_exploracao: {
    instrucao: "Congruente × Semelhante.",
    cenas: [
      { tipo: "texto", texto: "Congruente: mesmo tamanho e mesma forma." },
      { tipo: "texto", texto: "Semelhante: mesma forma, tamanho diferente.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Fotos de tamanhos diferentes são congruentes?",
    pista: "Não!",
    revelacao: "Se tamanho é diferente, é apenas semelhante.",
  },
  momento04_explicacao: {
    titulo: "Comparar figuras",
    etapas: [
      {
        texto: "Dois quadrados de mesmo lado: CONGRUENTES.",
        exemploReal: { contexto: "Azulejos idênticos.", destaque: "Iguais em tudo." },
      },
      {
        texto: "Quadrado grande e pequeno: SEMELHANTES.",
        exemploReal: { contexto: "Foto e miniatura.", destaque: "Mesma forma, tamanhos diferentes." },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "2 círculos de raios diferentes são congruentes?",
    passos: ["Tamanhos diferentes → não são congruentes.", "São apenas semelhantes."],
    resposta: "Não. São semelhantes.",
    casasValor: { numero: 0, mostrarDecomposicao: false, extenso: "zero" },
  },
  momento06_praticaGuiada: {
    enunciado: "Dois quadrados de 4 cm são?",
    dica: "Mesmo tamanho.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Congruentes" }, { nome: "Semelhantes" }, { nome: "Diferentes" }],
      respostaCerta: "Congruentes",
      feedbackAcerto: "🎉 Iguais.",
      feedbackErro: "Mesmo tamanho e forma.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Um triângulo pequeno e um grande com mesma forma são?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Semelhantes" }, { nome: "Congruentes" }, { nome: "Iguais" }],
      respostaCerta: "Semelhantes",
      feedbackAcerto: "🎯 Semelhantes.",
      feedbackErro: "Mesma forma, tamanhos diferentes.",
    },
  },
  momento08_aplicacao: {
    contexto: "Duas cadeiras idênticas de fábrica.",
    problema: "São:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Congruentes" }, { nome: "Semelhantes" }, { nome: "Diferentes" }],
      respostaCerta: "Congruentes",
      feedbackAcerto: "🎯 Congruentes.",
      feedbackErro: "Idênticas = congruentes.",
    },
  },
  momento09_revisao: {
    pontos: ["Congruente: iguais.", "Semelhante: mesma forma, tamanho diferente."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Foto 3x4 e sua ampliação são?",
      opcoes: [{ nome: "Semelhantes" }, { nome: "Congruentes" }, { nome: "Diferentes" }],
      respostaCerta: "Semelhantes",
      feedbackAcerto: "🎉 Semelhantes.",
      feedbackErro: "Ampliação mantém forma.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Dois retângulos 3×5 idênticos:", opcoes: ["Congruentes", "Semelhantes", "Diferentes"], correta: 0, feedbackAcerto: "🎉 Congruentes.", feedbackErro: "Idênticos." },
      { pergunta: "Mapa e territrório são?", opcoes: ["Semelhantes", "Congruentes", "Iguais"], correta: 0, feedbackAcerto: "🎉 Semelhantes.", feedbackErro: "Escalas diferentes." },
      { pergunta: "Duas rodas iguais:", opcoes: ["Congruentes", "Semelhantes", "Diferentes"], correta: 0, feedbackAcerto: "🎉 Congruentes.", feedbackErro: "Iguais." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Pares iguais",
    materiais: ["Objetos em pares"],
    passos: ["Ache 3 pares congruentes e 2 semelhantes em casa."],
    registro: "📸 Foto dos pares.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
