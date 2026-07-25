import type { AulaV4 } from "../../types";

export const aula01_razao: AulaV4 = {
  slug: "u6-01-razao",
  titulo: "Razão — comparar por divisão",
  iconeTrilha: "⚖️",
  bncc: ["EF06MA13"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Quantas vezes cabe?",
    historia: "{NOME}, RAZÃO é comparar 2 grandezas dividindo uma pela outra. '3 meninos para cada 2 meninas' → razão 3:2 ou 3/2.",
  },

  momento02_exploracao: {
    instrucao: "Razão a:b lê-se 'a está para b'.",
    cenas: [
      { tipo: "texto", texto: "Razão pode ser escrita como a/b, a:b ou a÷b.", destaque: true },
      {
        tipo: "tabela",
        titulo: "Exemplos",
        cabecalhos: ["Situação", "Razão", "Leitura"],
        linhas: [
          { rotulo: "1", valores: ["3 meninos, 2 meninas", "3:2", "3 pra 2"] },
          { rotulo: "2", valores: ["120 km em 2 h", "120:2 = 60", "60 km/h"] },
          { rotulo: "3", valores: ["R$ 40 por 5 kg", "40:5 = 8", "R$ 8 por kg"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Um carro faz 240 km com 20 L. Razão km/L?",
    pista: "240 ÷ 20.",
    revelacao: "12 km/L.",
  },

  momento04_explicacao: {
    titulo: "Aplicações",
    etapas: [
      {
        texto: "Velocidade média = distância ÷ tempo.",
        exemploReal: {
          contexto: "180 km em 3 h",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Grandeza", "Valor"],
            linhas: [
              { rotulo: "d", valores: ["distância", "180 km"] },
              { rotulo: "t", valores: ["tempo", "3 h"] },
              { rotulo: "v", valores: ["velocidade", "60 km/h"] },
            ],
          },
          destaque: "180 ÷ 3 = 60 km/h.",
        },
      },
      {
        texto: "Densidade demográfica = habitantes ÷ km².",
        exemploReal: {
          contexto: "Cidade: 200.000 hab, 100 km²",
          destaque: "Densidade = 2.000 hab/km².",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Escala 1:1000 numa planta. 5 cm na planta = quantos m no real?",
    resposta: "50 m",
    passos: ["Cada 1 cm = 1000 cm reais = 10 m.", "5 × 10 = 50 m."],
  },

  momento06_praticaGuiada: {
    enunciado: "120 km em 2 h. Velocidade?",
    dica: "d ÷ t.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "60 km/h" }, { nome: "240 km/h" }, { nome: "6 km/h" }],
      respostaCerta: "60 km/h",
      feedbackAcerto: "🎯 120 ÷ 2.",
      feedbackErro: "Dividir.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Razão 6:8 simplificada.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3:4" }, { nome: "2:4" }, { nome: "6:8" }],
      respostaCerta: "3:4",
      feedbackAcerto: "🎯 MDC=2.",
      feedbackErro: "Divide os dois por 2.",
    },
  },

  momento08_aplicacao: {
    contexto: "Numa turma há 12 meninos e 18 meninas.",
    problema: "Razão meninos:meninas simplificada?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2:3" }, { nome: "3:2" }, { nome: "12:18" }],
      respostaCerta: "2:3",
      feedbackAcerto: "🎯 MDC=6.",
      feedbackErro: "Simplifique 12:18.",
    },
  },

  momento09_revisao: {
    pontos: ["Razão = divisão entre grandezas.", "Sempre simplifique.", "Km/h, hab/km², R$/kg são razões."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "10:5 simplificada:", opcoes: ["2:1", "5:1", "1:2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷5." },
      { pergunta: "300 km em 5 h:", opcoes: ["60 km/h", "50 km/h", "1500 km/h"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷." },
      { pergunta: "Razão de 4 para 8:", opcoes: ["1:2", "2:1", "4:8"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Simplifique." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Razões em casa",
    materiais: ["Papel"],
    passos: ["Encontre 2 razões em casa (pessoas/animais, cadeiras/mesa)."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 85 },
};
