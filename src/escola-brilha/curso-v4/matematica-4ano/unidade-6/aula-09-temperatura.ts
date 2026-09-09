import type { AulaV4 } from "../../types";

export const aula09_temperatura: AulaV4 = {
  slug: "u6-09-temperatura",
  titulo: "Temperatura e graus Celsius",
  iconeTrilha: "🌡️",
  bncc: ["EF04MA23", "EF04MA24"],
  duracaoMin: 22,
  metodologias: ["cpa", "rme"],
  momento01_motivacao: { titulo: "Frio ou quente?", historia: "{NOME}, o termômetro mede temperatura. No Brasil, usamos graus Celsius, escritos com o símbolo °C. Vamos ler, comparar e registrar temperaturas." },
  momento02_exploracao: { instrucao: "Leia o número e a unidade °C.", cenas: [
    { tipo: "texto", texto: "18 °C lê-se dezoito graus Celsius; 29 °C lê-se vinte e nove graus Celsius.", destaque: true },
    { tipo: "texto", texto: "A temperatura mínima é a menor registrada; a máxima é a maior." },
  ] },
  momento03_descoberta: { perguntaGuia: "Se a mínima foi 16 °C e a máxima 27 °C, quanto a temperatura variou?", pista: "Calcule a diferença entre a maior e a menor.", revelacao: "27 − 16 = 11. A variação foi de 11 °C." },
  momento04_explicacao: { titulo: "Ler e organizar temperaturas", etapas: [
    { texto: "Compare os números para identificar a mínima e a máxima.", exemploReal: { contexto: "Manhã: 19 °C; tarde: 31 °C.", destaque: "Mínima 19 °C; máxima 31 °C." } },
    { texto: "Registre dia, mínima e máxima em uma tabela. Depois, um gráfico de linhas pode mostrar como os valores mudaram.", exemploReal: { contexto: "Segunda: 18 °C e 28 °C; terça: 20 °C e 30 °C.", destaque: "A máxima aumentou 2 °C." } },
  ] },
  momento05_modelagem: { enunciado: "A mínima foi 17 °C e a máxima 25 °C. Qual foi a variação?", passos: ["Maior menos menor.", "25 − 17 = 8."], resposta: "8 °C" },
  momento06_praticaGuiada: { enunciado: "Temperaturas: 21 °C, 26 °C, 19 °C e 24 °C. Qual é a máxima?", dica: "Procure o maior número.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "26 °C" }, { nome: "24 °C" }, { nome: "21 °C" }, { nome: "19 °C" }], respostaCerta: "26 °C", feedbackAcerto: "🎯 26 °C é a maior.", feedbackErro: "Compare os quatro números." } },
  momento07_praticaIndependente: { enunciado: "A máxima passou de 28 °C para 31 °C. Quanto aumentou?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "3 °C" }, { nome: "59 °C" }, { nome: "2 °C" }, { nome: "4 °C" }], respostaCerta: "3 °C", feedbackAcerto: "🎯 31 − 28 = 3 °C.", feedbackErro: "Calcule a diferença." } },
  momento08_aplicacao: { contexto: "Tabela da semana: segunda 30 °C, terça 27 °C, quarta 32 °C.", problema: "Em qual dia ocorreu a maior temperatura?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "Quarta-feira" }, { nome: "Segunda-feira" }, { nome: "Terça-feira" }, { nome: "Todos" }], respostaCerta: "Quarta-feira", feedbackAcerto: "🎯 32 °C foi a maior temperatura.", feedbackErro: "Encontre o maior valor da tabela." } },
  momento09_revisao: { pontos: ["Temperatura é medida em graus Celsius (°C).", "Mínima é a menor; máxima é a maior.", "Variação é a diferença entre máxima e mínima."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "Qual é maior: 22 °C ou 29 °C?", opcoes: ["29 °C", "22 °C", "São iguais"], correta: 0, feedbackAcerto: "🎉 29 °C.", feedbackErro: "29 é maior que 22." },
    { pergunta: "Mínima 15 °C e máxima 24 °C. Variação?", opcoes: ["9 °C", "39 °C", "8 °C"], correta: 0, feedbackAcerto: "🎉 9 °C.", feedbackErro: "24 − 15 = 9." },
    { pergunta: "Em uma tabela, a temperatura mínima é:", opcoes: ["o menor valor", "o maior valor", "a soma dos valores"], correta: 0, feedbackAcerto: "🎉 O menor valor.", feedbackErro: "Mínima significa a menor registrada." },
  ] },
  momento11_missaoFamilia: { titulo: "Diário da temperatura", materiais: ["Papel", "Lápis", "Fonte segura de previsão do tempo"], passos: ["Durante 3 dias, anote a mínima e a máxima previstas.", "Organize em tabela.", "Calcule a variação de cada dia."], registro: "📸 Foto da tabela preenchida." },
  recompensa: { xp: 220, moedas: 110 },
};
