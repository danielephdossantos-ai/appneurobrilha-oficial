import type { AulaV4 } from "../../types";

/** Aula 05 · U6 — Missão final: projeto de medidas com área, círculo e volume. */
export const aula05_missaoMedidas: AulaV4 = {
  slug: "u6-05-missao-medidas",
  titulo: "Missão: O Projeto da Praça",
  iconeTrilha: "🏗️",
  bncc: ["EF07MA30", "EF07MA32", "EF07MA33"],
  duracaoMin: 34,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Você é o engenheiro da obra",
    historia:
      "{NOME}, a prefeitura aprovou a reforma da praça e entregou a planta para você. Tem um gramado retangular, um chafariz circular, um banco no contorno e uma caixa d'água para abastecer tudo. Cada pedaço da obra pede uma medida diferente: metros, metros quadrados, metros cúbicos e litros. Missão dada.",
  },

  momento02_exploracao: {
    instrucao: "Leia a planta da praça antes de calcular qualquer coisa.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Planta da praça",
        cabecalhos: ["Elemento", "Formato", "Medidas"],
        linhas: [
          { rotulo: "Gramado", valores: ["retângulo", "20 m × 15 m"] },
          { rotulo: "Chafariz", valores: ["círculo", "raio 3 m"] },
          { rotulo: "Cerca", valores: ["contorno do gramado", "—"] },
          { rotulo: "Caixa d'água", valores: ["bloco retangular", "2 m × 1 m × 1,5 m"] },
        ],
      },
      { tipo: "figuraPlana", forma: "retangulo", medidasLados: ["20 m", "15 m", "20 m", "15 m"], mostrarAngulos: true, legenda: "Terreno da praça." },
      { tipo: "texto", texto: "🔑 Cada pergunta pede uma grandeza: cerca → m, grama → m², água → litros.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como calcular a área do gramado se o chafariz redondo ocupa parte dele?",
    pista: "Área total menos a área do círculo.",
    revelacao: "A grama cobre a área do retângulo MENOS a área do chafariz: 300 − 28,26 = 271,74 m².",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Área de grama",
      passos: [
        { expr: "A(terreno) = 20 · 15 = 300 m²", explica: "Retângulo.", status: "neutro" },
        { expr: "A(chafariz) = 3,14 · 3² = 28,26 m²", explica: "Círculo de raio 3.", status: "neutro" },
        {
          expr: "A(grama) = 300 − 28,26 = 271,74 m²",
          explica: "Tiro o chafariz.",
          status: "ok",
          professor:
            "Figura composta com parte redonda é o caso mais comum em obra real. A técnica não muda: identifique cada peça, calcule separado e some ou subtraia conforme o desenho.",
        },
      ],
      fatorada: "271,74 m² de grama",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "As quatro contas da obra",
    etapas: [
      {
        texto: "CERCA — perímetro do gramado, medida linear em metros.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Contorno do retângulo 20 m × 15 m",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "P = 2 · (20 + 15)",
            passos: [
              { expr: "20 + 15 = 35", explica: "Soma de dois lados vizinhos.", status: "neutro" },
              { expr: "P = 2 · 35 = 70 m", explica: "Cada medida aparece duas vezes.", status: "ok", professor: "A fórmula P = 2(b + h) é só um atalho da soma 20 + 15 + 20 + 15. Use o atalho, mas saiba de onde ele vem." },
            ],
            fatorada: "70 m de cerca",
          },
          destaque: "Perímetro em metros.",
        },
      },
      {
        texto: "BORDA DO CHAFARIZ — comprimento da circunferência.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Chafariz de raio 3 m",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "C = 2 · π · r",
            passos: [
              { expr: "C = 2 · 3,14 · 3", explica: "Substituo.", status: "neutro" },
              { expr: "C = 18,84 m", explica: "Borda de pedra.", status: "ok" },
            ],
            fatorada: "18,84 m",
          },
          destaque: "Borda é contorno, não superfície.",
        },
      },
      {
        texto: "ÁGUA DA CAIXA — volume em m³ convertido para litros.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Caixa de 2 m × 1 m × 1,5 m",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "V = 2 · 1 · 1,5",
            passos: [
              { expr: "V = 3 m³", explica: "Multiplico as três medidas.", status: "neutro" },
              {
                expr: "3 × 1000 = 3000 L",
                explica: "Conversão.",
                status: "ok",
                professor:
                  "Uma família de quatro pessoas consome cerca de 500 L por dia. Uma caixa de 3000 L segura aproximadamente seis dias sem abastecimento — é assim que engenheiros dimensionam reservatórios.",
              },
            ],
            fatorada: "3000 litros",
          },
          destaque: "1 m³ = 1000 L.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: o piso em volta do chafariz é uma coroa circular entre os raios 3 m e 5 m. Qual é a área desse piso?",
    resposta: "50,24 m²",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "A(coroa) = A(5) − A(3)",
      passos: [
        { expr: "A(5) = 3,14 · 25 = 78,5 m²", explica: "Círculo externo.", status: "neutro" },
        { expr: "A(3) = 3,14 · 9 = 28,26 m²", explica: "Chafariz.", status: "neutro" },
        {
          expr: "A = 78,5 − 28,26 = 50,24 m²",
          explica: "Só o piso.",
          status: "ok",
          professor:
            "Se a loja vende piso em caixas de 2 m², a compra é 50,24 ÷ 2 = 25,12 → 26 caixas. Arredondar para cima é regra em qualquer material de construção.",
        },
      ],
      fatorada: "50,24 m² de piso",
      legenda: "Brilha resolve",
    },
    passos: ["Calculo o círculo maior.", "Calculo o círculo menor.", "Subtraio.", "Converto em quantidade de material."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: quantos metros de cerca para o gramado de 20 m por 15 m?",
    dica: "P = 2 · (b + h).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P = 2 · (20 + 15)",
      passos: [
        { expr: "20 + 15 = 35", explica: "Soma.", status: "neutro" },
        { expr: "P = 70 m", explica: "Dobro.", status: "ok" },
      ],
      fatorada: "70 m",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "70 m" }, { nome: "300 m" }, { nome: "35 m" }],
      respostaCerta: "70 m",
      feedbackAcerto: "🎯 Perímetro do retângulo.",
      feedbackErro: "300 é a ÁREA em m² (20 × 15). A cerca segue o contorno: 2 · (20 + 15) = 70 m.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: quantos litros cabem numa caixa de 1 m × 1 m × 2 m?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = 1 · 1 · 2",
      passos: [
        { expr: "V = 2 m³", explica: "Volume.", status: "neutro" },
        { expr: "2 × 1000 = 2000 L", explica: "Conversão.", status: "ok" },
      ],
      fatorada: "2000 litros",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2000 L" }, { nome: "200 L" }, { nome: "2 L" }],
      respostaCerta: "2000 L",
      feedbackAcerto: "🎯 2 m³ × 1000.",
      feedbackErro: "O volume é 2 m³ e cada metro cúbico guarda 1000 litros: 2 × 1000 = 2000 L.",
    },
  },

  momento08_aplicacao: {
    contexto: "O orçamento final da praça: grama a R$ 15,00 o m², cerca a R$ 40,00 o metro.",
    problema: "Qual será o custo aproximado da grama (271,74 m²) e da cerca (70 m)?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Orçamento da praça",
      passos: [
        { expr: "grama: 271,74 · 15 ≈ 4076,10", explica: "Área × preço do m².", status: "neutro" },
        { expr: "cerca: 70 · 40 = 2800", explica: "Metros × preço do metro.", status: "neutro" },
        {
          expr: "total ≈ R$ 6 876,10",
          explica: "Soma dos dois itens.",
          status: "ok",
          professor:
            "Cada preço vem casado com uma unidade: R$/m² multiplica área e R$/m multiplica comprimento. Conferir a unidade antes de multiplicar evita orçamentos absurdos.",
        },
      ],
      fatorada: "≈ R$ 6 876,10",
      legenda: "Aplicação — orçamento",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quanto custa a cerca?",
      opcoes: [{ nome: "R$ 2 800,00" }, { nome: "R$ 12 000,00" }, { nome: "R$ 1 400,00" }],
      respostaCerta: "R$ 2 800,00",
      feedbackAcerto: "🎯 70 × 40.",
      feedbackErro: "A cerca tem 70 m e o metro custa R$ 40: 70 × 40 = R$ 2 800,00.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Cerca → perímetro (m). Grama/piso → área (m²). Água → volume (m³ e litros).",
      "Figura composta com círculo: some ou subtraia as partes.",
      "C = 2πr para borda redonda; A = πr² para superfície redonda.",
      "1 m³ = 1000 litros.",
      "Preço por m² multiplica área; preço por metro multiplica comprimento.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Para comprar rodapé de um cômodo usamos:", opcoes: ["perímetro", "área", "volume"], correta: 0, feedbackAcerto: "🎉 Rodapé segue o contorno.", feedbackErro: "O rodapé acompanha as paredes, ou seja, o contorno: é perímetro, em metros." },
      { pergunta: "A área de um círculo de raio 3 m é:", opcoes: ["28,26 m²", "18,84 m²", "9,42 m²"], correta: 0, feedbackAcerto: "🎉 3,14 × 9.", feedbackErro: "18,84 m é o comprimento (2πr). A área é πr² = 3,14 · 9 = 28,26 m²." },
      { pergunta: "Uma caixa de 4 m³ comporta:", opcoes: ["4000 litros", "400 litros", "40 litros"], correta: 0, feedbackAcerto: "🎉 4 × 1000.", feedbackErro: "Cada m³ vale 1000 L, então 4 m³ = 4000 litros." },
      { pergunta: "Para calcular a grama de um terreno com um lago no meio devemos:", opcoes: ["subtrair a área do lago", "somar a área do lago", "ignorar o lago"], correta: 0, feedbackAcerto: "🎉 O lago não recebe grama.", feedbackErro: "O lago ocupa parte do terreno, então a área de grama é a área total MENOS a área do lago." },
      { pergunta: "O perímetro de um retângulo 20 m × 15 m é:", opcoes: ["70 m", "300 m", "35 m"], correta: 0, feedbackAcerto: "🎉 2 · (20 + 15).", feedbackErro: "35 m é só a soma de dois lados. Falta o outro par: 2 · 35 = 70 m." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "O projeto da minha casa",
    materiais: ["Trena", "Papel quadriculado", "Lápis"],
    passos: [
      "Desenhe a planta de um cômodo da casa com as medidas reais.",
      "Calcule perímetro (rodapé) e área (piso).",
      "Se houver um objeto redondo (mesa, tapete), calcule também a área dele.",
    ],
    registro: "📸 Foto da planta com todos os cálculos e as unidades corretas.",
  },
  recompensa: { xp: 300, moedas: 160, medalha: "Engenheiro da Praça" },
};
