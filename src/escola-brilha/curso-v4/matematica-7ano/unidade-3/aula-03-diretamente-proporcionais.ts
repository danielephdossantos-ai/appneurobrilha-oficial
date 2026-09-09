import type { AulaV4 } from "../../types";

/** Aula 03 · U3 — Grandezas diretamente proporcionais e regra de três simples. */
export const aula03_diretamente: AulaV4 = {
  slug: "u3-03-diretamente-proporcionais",
  titulo: "Regra de Três Direta",
  iconeTrilha: "📈",
  bncc: ["EF07MA17"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Se dobra um, dobra o outro",
    historia:
      "{NOME}, se 3 cadernos custam R$ 21, quanto custam 7? Grandezas que crescem juntas são DIRETAMENTE proporcionais — e a regra de três resolve isso em três linhas.",
  },

  momento02_exploracao: {
    instrucao: "Duas grandezas são diretamente proporcionais quando o quociente entre elas é constante.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Cadernos × preço",
        cabecalhos: ["Cadernos", "Preço (R$)", "Preço ÷ Cadernos"],
        linhas: [
          { rotulo: "1", valores: [1, 7, 7] },
          { rotulo: "2", valores: [3, 21, 7] },
          { rotulo: "3", valores: [5, 35, 7] },
          { rotulo: "4", valores: [7, "?", 7] },
        ],
      },
      { tipo: "texto", texto: "🔑 A razão sempre dá 7. Essa constante se chama CONSTANTE DE PROPORCIONALIDADE (k)." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como saber se é diretamente proporcional?",
    pista: "Divida cada valor de uma coluna pelo correspondente da outra. Se der sempre o mesmo número, é direta.",
    revelacao: "Se y/x é constante, então y = k·x. Dobrando x, dobra y.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Testar proporcionalidade direta",
      passos: [
        { expr: "7 ÷ 1 = 7", explica: "Primeira linha.", status: "ok" },
        { expr: "21 ÷ 3 = 7", explica: "Segunda linha.", status: "ok" },
        { expr: "35 ÷ 5 = 7", explica: "Terceira linha.", status: "ok", professor: "O mesmo quociente em todas as linhas é a assinatura da proporcionalidade DIRETA." },
        { expr: "k = 7 → y = 7x", explica: "Lei da proporção.", status: "ok" },
        { expr: "x = 7 → y = 49", explica: "Aplico a lei.", status: "ok" },
      ],
      fatorada: "7 cadernos custam R$ 49",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Montar e resolver a regra de três",
    etapas: [
      {
        texto: "Monte duas colunas com as MESMAS grandezas na mesma posição. Escreva a proporção e multiplique em cruz.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "3 cadernos custam R$ 21. Quanto custam 7?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3/7 = 21/x",
            passos: [
              { expr: "Cadernos: 3 → 7", explica: "Aumentou.", status: "neutro" },
              { expr: "Preço: 21 → x", explica: "Deve aumentar também.", status: "ok", professor: "Antes de calcular, PREVEJA: como comprei mais cadernos, o preço tem que ser maior que 21. Isso já elimina respostas absurdas." },
              { expr: "3/7 = 21/x", explica: "Setas no mesmo sentido → direta.", status: "ok" },
              { expr: "3x = 7 · 21 = 147", explica: "Cruzo.", status: "ok" },
              { expr: "x = 49", explica: "Divido por 3.", status: "ok" },
            ],
            fatorada: "R$ 49,00",
          },
          destaque: "Preveja o sentido antes de calcular.",
        },
      },
      {
        texto: "Cuidado com as UNIDADES: converta tudo para a mesma unidade antes de montar a proporção.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Um carro gasta 6 L a cada 90 km. Quanto gasta em 240 km?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "90/240 = 6/x",
            passos: [
              { expr: "Distância: 90 → 240 (aumenta)", explica: "Direta.", status: "neutro" },
              { expr: "90/240 = 6/x", explica: "Monto.", status: "ok" },
              { expr: "90x = 240 · 6 = 1 440", explica: "Cruzo.", status: "ok" },
              { expr: "x = 16", explica: "Divido por 90.", status: "ok", professor: "1 440 ÷ 90 = 16. Faz sentido: 240 km é pouco menos de 3 vezes 90 km, então o gasto fica perto de 3 · 6 = 18, um pouco menos." },
            ],
            fatorada: "16 litros",
          },
          destaque: "Mesma grandeza, mesma unidade, mesma coluna.",
        },
      },
      {
        texto: "Nem tudo é proporcional. Idade e altura, por exemplo, NÃO são: crescer 2 vezes mais anos não dobra a altura.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Testando se é proporcional",
          visualMat: {
            tipo: "tabela",
            titulo: "Idade × altura (não proporcional)",
            cabecalhos: ["Idade", "Altura (cm)", "Altura ÷ Idade"],
            linhas: [
              { rotulo: "1", valores: [2, 85, 42.5] },
              { rotulo: "2", valores: [6, 115, "19,2"] },
              { rotulo: "3", valores: [12, 150, "12,5"] },
            ],
          },
          destaque: "Quocientes diferentes → NÃO é proporcional. Regra de três não vale aqui.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: 4 pedreiros levantam 20 m² de muro. Quantos m² levantam 6 pedreiros no mesmo tempo?",
    resposta: "30 m²",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4/6 = 20/x",
      passos: [
        { expr: "Mais pedreiros → mais muro", explica: "Direta.", status: "neutro" },
        { expr: "4/6 = 20/x", explica: "Monto a proporção.", status: "ok" },
        { expr: "4x = 6 · 20 = 120", explica: "Cruzo.", status: "ok" },
        { expr: "x = 30", explica: "Divido por 4.", status: "ok", professor: "Cada pedreiro faz 5 m². Com 6 pedreiros: 6 · 5 = 30 m². Confere." },
      ],
      fatorada: "30 m²",
      legenda: "Brilha resolve",
    },
    passos: ["Mais pedreiros, mais muro → direta.", "4/6 = 20/x.", "4x = 120.", "x = 30 m²."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 5 kg de arroz custam R$ 30. Quanto custam 8 kg?",
    dica: "Direta: 5/8 = 30/x.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "5/8 = 30/x",
      passos: [
        { expr: "5x = 8 · 30 = 240", explica: "Cruzo.", status: "neutro" },
        { expr: "x = 48", explica: "Divido por 5.", status: "ok" },
      ],
      fatorada: "R$ 48,00",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 48" }, { nome: "R$ 18,75" }, { nome: "R$ 38" }],
      respostaCerta: "R$ 48",
      feedbackAcerto: "🎯 Cada kg custa R$ 6; 8 · 6 = 48.",
      feedbackErro: "Mais arroz custa MAIS. O preço por kg é 30 ÷ 5 = 6, então 8 kg custam 48 reais.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: uma torneira enche 12 L em 4 min. Quantos litros em 10 min?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4/10 = 12/x",
      passos: [
        { expr: "4x = 10 · 12 = 120", explica: "Cruzo.", status: "neutro" },
        { expr: "x = 30", explica: "Divido por 4.", status: "ok" },
      ],
      fatorada: "30 litros",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "30 L" }, { nome: "24 L" }, { nome: "48 L" }],
      respostaCerta: "30 L",
      feedbackAcerto: "🎯 A vazão é 3 L/min; em 10 min saem 30 L.",
      feedbackErro: "Calcule a vazão: 12 ÷ 4 = 3 litros por minuto. Em 10 minutos: 3 · 10 = 30 L.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma impressora imprime 45 páginas em 3 minutos. O trabalho tem 300 páginas.",
    problema: "Quanto tempo levará para imprimir tudo?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "45/300 = 3/x",
      passos: [
        { expr: "Mais páginas → mais tempo", explica: "Direta.", status: "neutro" },
        { expr: "45/300 = 3/x", explica: "Monto.", status: "ok" },
        { expr: "45x = 300 · 3 = 900", explica: "Cruzo.", status: "ok" },
        { expr: "x = 20 minutos", explica: "Divido por 45.", status: "ok", professor: "Outra rota: 45 ÷ 3 = 15 páginas por minuto. Então 300 ÷ 15 = 20 minutos. Sempre bom ter dois caminhos." },
      ],
      fatorada: "20 minutos",
      legenda: "Aplicação — tempo de impressão",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20 minutos" }, { nome: "45 minutos" }, { nome: "10 minutos" }],
      respostaCerta: "20 minutos",
      feedbackAcerto: "🎯 15 páginas por minuto → 300 ÷ 15 = 20 min.",
      feedbackErro: "A velocidade é 45 ÷ 3 = 15 páginas por minuto. Para 300 páginas: 300 ÷ 15 = 20 minutos.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Diretamente proporcionais: y/x é constante (y = kx).",
      "Se uma dobra, a outra dobra.",
      "Monte a proporção com as mesmas grandezas na mesma coluna.",
      "Preveja o sentido do resultado antes de calcular.",
      "Nem toda relação é proporcional — teste o quociente.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2 kg de pão custam R$ 16. 5 kg custam:", opcoes: ["R$ 40", "R$ 32", "R$ 80"], correta: 0, feedbackAcerto: "🎉 R$ 8 por kg → 5 · 8 = 40.", feedbackErro: "Preço por kg: 16 ÷ 2 = 8. Então 5 kg custam 5 · 8 = 40 reais." },
      { pergunta: "Se 6 canetas custam R$ 9, uma caneta custa:", opcoes: ["R$ 1,50", "R$ 1,00", "R$ 2,00"], correta: 0, feedbackAcerto: "🎉 9 ÷ 6 = 1,50.", feedbackErro: "Divida: 9 ÷ 6 = 1,5, ou seja, R$ 1,50 por caneta." },
      { pergunta: "Um carro percorre 120 km com 8 L. Com 20 L percorre:", opcoes: ["300 km", "240 km", "180 km"], correta: 0, feedbackAcerto: "🎉 15 km/L → 20 · 15 = 300 km.", feedbackErro: "Rendimento: 120 ÷ 8 = 15 km por litro. Com 20 L: 20 · 15 = 300 km." },
      { pergunta: "y = 4x. Se x = 7, então y é:", opcoes: ["28", "11", "1,75"], correta: 0, feedbackAcerto: "🎉 4 · 7 = 28.", feedbackErro: "Substitua x por 7 na lei y = 4x: y = 4 · 7 = 28." },
      { pergunta: "Qual par NÃO é diretamente proporcional?", opcoes: ["idade e altura", "quantidade e preço", "tempo e distância a velocidade constante"], correta: 0, feedbackAcerto: "🎉 Dobrar a idade não dobra a altura.", feedbackErro: "Teste o quociente: em quantidade/preço e tempo/distância ele é constante; em idade/altura, não." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Tabela de preços do mercado",
    materiais: ["Nota fiscal ou encarte", "Papel", "Caneta"],
    passos: [
      "Escolha 3 produtos vendidos por peso ou unidade.",
      "Calcule o preço unitário de cada um.",
      "Monte uma regra de três prevendo o preço de uma quantidade maior e confira com a calculadora.",
    ],
    registro: "📸 Foto das três regras de três resolvidas.",
  },
  recompensa: { xp: 215, moedas: 110, medalha: "Mestre da Regra de Três" },
};
