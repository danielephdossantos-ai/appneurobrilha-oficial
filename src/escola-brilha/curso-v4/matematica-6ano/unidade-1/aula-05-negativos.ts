import type { AulaV4 } from "../../types";

// Nome do arquivo e da exportação preservados para manter compatibilidade.
export const aula05_negativos: AulaV4 = {
  slug: "u1-05-sistemas-numeracao",
  titulo: "Outros sistemas de numeração",
  iconeTrilha: "🏛️",
  bncc: ["EF06MA02"],
  duracaoMin: 23,
  metodologias: ["cpa", "skemp"],
  momento01_motivacao: { titulo: "Nem todo número foi escrito como hoje", historia: "{NOME}, nosso sistema usa dez algarismos e o lugar muda o valor de cada um. Outros povos registraram quantidades de maneiras diferentes. Vamos comparar as regras, sem decorar símbolos soltos." },
  momento02_exploracao: { instrucao: "Compare as regras de cada sistema.", cenas: [
    { tipo: "texto", texto: "Decimal: usa 0 a 9, agrupa de 10 em 10 e é posicional.", destaque: true },
    { tipo: "tabela", titulo: "Três maneiras de registrar números", cabecalhos: ["Sistema", "Regra", "Exemplo"], linhas: [
      { rotulo: "Decimal", valores: ["Decimal", "Posicional e base 10", "24 = 2 dezenas + 4 unidades"] },
      { rotulo: "Romano", valores: ["Romano", "Combina símbolos", "XXIV = 24"] },
      { rotulo: "Egípcio", valores: ["Egípcio", "Repete símbolos de potências de 10", "2 dezenas + 4 unidades"] },
    ] },
    { tipo: "texto", texto: "Em 24, o 2 vale 20 porque ocupa a casa das dezenas." },
  ] },
  momento03_descoberta: { perguntaGuia: "Por que 25 e 52 usam os mesmos algarismos, mas representam quantidades diferentes?", pista: "Observe a posição do 2 e do 5.", revelacao: "Porque o sistema decimal é posicional: em 25, o 2 vale 20; em 52, o 2 vale 2." },
  momento04_explicacao: { titulo: "Como funciona o sistema decimal", etapas: [
    { texto: "Usamos dez algarismos: de 0 a 9.", exemploReal: { contexto: "Com esses símbolos, escrevemos qualquer número natural.", destaque: "Algarismo é o símbolo; número representa uma quantidade." } },
    { texto: "Cada casa à esquerda vale dez vezes a anterior.", exemploReal: { contexto: "Em 3.333, os algarismos valem 3.000, 300, 30 e 3.", visualMat: { tipo: "tabela", cabecalhos: ["UM", "C", "D", "U"], linhas: [{ rotulo: "3.333", valores: ["3.000", "300", "30", "3"] }] }, destaque: "A posição determina o valor." } },
    { texto: "O zero mantém uma casa vazia.", exemploReal: { contexto: "205 = 2 centenas + 0 dezenas + 5 unidades.", destaque: "Sem o zero, 205 viraria 25." } },
  ] },
  momento05_modelagem: { enunciado: "Decomponha 4.072 e explique a função do zero.", resposta: "4.000 + 70 + 2; o zero indica que não há centenas.", passos: ["4 vale 4.000.", "0 indica nenhuma centena.", "7 vale 70 e 2 vale 2."] },
  momento06_praticaGuiada: { enunciado: "Quanto vale o algarismo 6 em 6.241?", dica: "Observe a casa ocupada pelo 6.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "6.000" }, { nome: "600" }, { nome: "60" }, { nome: "6" }], respostaCerta: "6.000", feedbackAcerto: "🎯 O 6 ocupa a unidade de milhar.", feedbackErro: "6.241 = 6.000 + 200 + 40 + 1." } },
  momento07_praticaIndependente: { enunciado: "Qual frase explica o sistema decimal?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "A posição altera o valor do algarismo" }, { nome: "Usa apenas cinco símbolos" }, { nome: "Não utiliza zero" }, { nome: "Cada casa vale duas vezes a anterior" }], respostaCerta: "A posição altera o valor do algarismo", feedbackAcerto: "🎯 Essa é a característica posicional.", feedbackErro: "Cada casa à esquerda vale dez vezes a anterior." } },
  momento08_aplicacao: { contexto: "Uma placa antiga mostra XXIV e uma atual mostra 24.", problema: "O que os dois registros têm em comum?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "Representam a mesma quantidade" }, { nome: "Usam os mesmos símbolos" }, { nome: "Os dois são posicionais" }, { nome: "Os dois usam zero" }], respostaCerta: "Representam a mesma quantidade", feedbackAcerto: "🎯 XXIV e 24 representam vinte e quatro.", feedbackErro: "A escrita muda, mas a quantidade é a mesma." } },
  momento09_revisao: { pontos: ["Decimal: dez algarismos, base 10 e valor posicional.", "Cada casa à esquerda vale 10 vezes a anterior.", "Outros sistemas representam quantidades com regras diferentes."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "Em 5.050, o primeiro 5 vale:", opcoes: ["5.000", "500", "50", "5"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Ele ocupa a unidade de milhar." },
    { pergunta: "O zero em 307 indica ausência de:", opcoes: ["Dezenas", "Centenas", "Unidades", "Milhares"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "307 tem zero dezenas." },
    { pergunta: "XX representa:", opcoes: ["20", "10", "5", "2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "X vale 10; X + X = 20." },
  ] },
  momento11_missaoFamilia: { titulo: "Museu dos números", materiais: ["Papel e lápis"], passos: ["Escolha três números naturais.", "Escreva e decomponha cada um no sistema decimal.", "Registre um deles também com algarismos romanos."], registro: "📸 Foto do pequeno museu." },
  recompensa: { xp: 170, moedas: 90 },
};
