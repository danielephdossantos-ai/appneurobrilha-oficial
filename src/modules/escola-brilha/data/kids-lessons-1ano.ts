import type { KidsLesson } from "../types/kids-lesson";

/**
 * Banco local de aulas Kids (1º Ano).
 * Mapeado por codigo_bncc. Layout pedagógico visual, sem termos de habilidade.
 */

const MA01: KidsLesson = {
  codigo_bncc: "EF01MA01",
  titulo: "Vamos contar até 20!",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 110,
  cor: "blue",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "Vamos contar juntos!", fala: "Oi! Hoje vamos contar até vinte. É bem fácil, vem comigo!" },
    { kind: "concept", titulo: "Os números", simbolo: "1 2 3", fala: "Os números servem para contar quantas coisas a gente tem." },
    { kind: "usecase", titulo: "Onde a gente conta?", cenas: [
      { emoji: "🍎", texto: "Contar frutas" },
      { emoji: "🧸", texto: "Contar brinquedos" },
      { emoji: "✋", texto: "Contar dedinhos" },
    ], fala: "A gente conta frutas, brinquedos e até os dedinhos da mão!" },
    { kind: "step_count", titulo: "Vamos contar 1 a 10", a: 5, b: 5, objeto: "🟢", fala: "Olha: um, dois, três, quatro, cinco… seis, sete, oito, nove, dez! Dez bolinhas!" },
    { kind: "step_join", titulo: "Agora até 20", a: 10, b: 10, objeto: "🟦", fala: "Continuando: onze, doze, treze, quatorze, quinze, dezesseis, dezessete, dezoito, dezenove, vinte! Vinte!" },
    { kind: "practice_count", titulo: "Sua vez!", a: 4, b: 3, objeto: "⭐", fala: "Toque em cada estrelinha e vamos contar juntos." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Contar de 1 até 20", "Cada número é uma quantidade", "A gente conta tocando um por vez"], fala: "Muito bem! Agora você já conta até vinte." },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Você é demais! Ganhou cento e dez de experiência." },
  ],
};

const MA02: KidsLesson = {
  codigo_bncc: "EF01MA02",
  titulo: "Números até 30",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 110,
  cor: "blue",
  scenes: [
    { kind: "intro", mascot: "pipa", titulo: "Mais números!", fala: "Hoje vamos passar de vinte e chegar até trinta! Bora?" },
    { kind: "concept", titulo: "Depois do 20", simbolo: "21", fala: "Depois do vinte vem o vinte e um. Depois vinte e dois, e assim por diante." },
    { kind: "step_count", titulo: "Olha 21 estrelinhas", a: 10, b: 11, objeto: "⭐", fala: "Vamos contar todas: um, dois, três… até vinte e um!" },
    { kind: "step_join", titulo: "Até 30", a: 15, b: 15, objeto: "🟡", fala: "Mais um pouquinho: vinte e dois, vinte e três… trinta!" },
    { kind: "practice_count", titulo: "Conte comigo", a: 6, b: 4, objeto: "🍓", fala: "Toque em cada moranguinho e vamos contar." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Contar até 30", "Vinte e um vem depois do vinte", "Os números seguem em ordem"], fala: "Mandou bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cento e dez de experiência. Continue assim!" },
  ],
};

const MA03: KidsLesson = {
  codigo_bncc: "EF01MA03",
  titulo: "Mais, menos ou igual",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 110,
  cor: "blue",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "Oi! Eu sou o Pip!", fala: "Hoje vamos aprender três sinais importantes: mais, menos e igual." },
    { kind: "concept", titulo: "Sinal de mais", simbolo: "+", fala: "Esse é o sinal de mais. Ele quer dizer juntar." },
    { kind: "usecase", titulo: "Onde usamos o mais?", cenas: [
      { emoji: "🍎", texto: "Juntar maçãs" },
      { emoji: "🧸", texto: "Juntar brinquedos" },
      { emoji: "✋", texto: "Contar nos dedos" },
    ], fala: "A gente usa o mais quando junta coisas." },
    { kind: "step_count", titulo: "Vamos ver: 4 + 5", a: 4, b: 5, objeto: "🍎", fala: "Em cima quatro maçãs, embaixo cinco. Vamos juntar tudo." },
    { kind: "step_join", titulo: "Juntando!", a: 4, b: 5, objeto: "🍎", fala: "Um, dois, três, quatro, cinco, seis, sete, oito, nove! Nove maçãs!" },
    { kind: "step_vertical_sum", titulo: "Escrevendo a conta", a: 4, b: 5, fala: "Quatro em cima, cinco embaixo, sinal de mais. Resultado: nove." },
    { kind: "concept", titulo: "Sinal de menos", simbolo: "−", fala: "Esse é o sinal de menos. Ele quer dizer tirar." },
    { kind: "step_subtract", titulo: "Vamos ver: 7 − 3", a: 7, b: 3, objeto: "🍎", fala: "Tinha sete maçãs, vou tirar três. Sobraram quatro!" },
    { kind: "step_vertical_sub", titulo: "Escrevendo a conta", a: 7, b: 3, fala: "Sete em cima, menos três embaixo. Resultado: quatro." },
    { kind: "concept", titulo: "Sinal de igual", simbolo: "=", fala: "Esse é o sinal de igual. Ele mostra que os dois lados são a mesma coisa." },
    { kind: "step_equal", titulo: "3 = 3", n: 3, objeto: "🍎", fala: "Três de um lado, três do outro. São iguais!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["+ quer dizer juntar", "− quer dizer tirar", "= quer dizer mesma quantidade"], fala: "Que demais! Você aprendeu três sinais." },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cento e dez de experiência!" },
  ],
};

const MA04: KidsLesson = {
  codigo_bncc: "EF01MA04",
  titulo: "Contar objetos até 100",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 110,
  cor: "blue",
  scenes: [
    { kind: "intro", mascot: "pipa", titulo: "Vamos contar muitas coisas!", fala: "Quando temos muitas coisas, a gente conta de 10 em 10 pra ficar fácil." },
    { kind: "concept", titulo: "Grupos de 10", simbolo: "10", fala: "Juntando dez bolinhas formamos um grupo. Dois grupos são vinte. Três são trinta!" },
    { kind: "step_count", titulo: "20 bolinhas", a: 10, b: 10, objeto: "🔵", fala: "Olha: dez de um lado, dez do outro. Total vinte!" },
    { kind: "step_join", titulo: "30 bolinhas", a: 20, b: 10, objeto: "🟢", fala: "Mais dez. Agora temos trinta!" },
    { kind: "practice_count", titulo: "Sua vez!", a: 5, b: 5, objeto: "🟣", fala: "Toque em cada bolinha e conte com a Pipa." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Contar de 10 em 10", "Formar grupos ajuda", "Registrar a quantidade"], fala: "Muito bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cento e dez!" },
  ],
};

const MA05: KidsLesson = {
  codigo_bncc: "EF01MA05",
  titulo: "Número maior e número menor",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 110,
  cor: "blue",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "Quem tem mais?", fala: "Vamos comparar duas quantidades pra ver quem tem mais!" },
    { kind: "concept", titulo: "Maior e menor", simbolo: ">", fala: "Quando uma quantidade tem mais coisas, dizemos que é maior. A outra é menor." },
    { kind: "step_count", titulo: "5 e 3", a: 5, b: 3, objeto: "🍎", fala: "Em cima cinco maçãs. Embaixo três. Cinco é maior que três." },
    { kind: "step_equal", titulo: "Quando são iguais", n: 4, objeto: "🍊", fala: "Olha: quatro de um lado, quatro do outro. São iguais!" },
    { kind: "practice_count", titulo: "Compare comigo", a: 6, b: 2, objeto: "⭐", fala: "Toque nas estrelinhas e vamos ver qual grupo tem mais." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Maior = tem mais", "Menor = tem menos", "Igual = mesma quantidade"], fala: "Show!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e dez!" },
  ],
};

const MA06: KidsLesson = {
  codigo_bncc: "EF01MA06",
  titulo: "Adição até 10",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 110,
  cor: "blue",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "Vamos somar!", fala: "Hoje vamos somar quantidades pequenas. Até dez!" },
    { kind: "concept", titulo: "Sinal de mais", simbolo: "+", fala: "O sinal de mais quer dizer juntar." },
    { kind: "step_count", titulo: "3 + 4", a: 3, b: 4, objeto: "🍓", fala: "Três morangos em cima, quatro embaixo. Vamos juntar." },
    { kind: "step_join", titulo: "Juntando!", a: 3, b: 4, objeto: "🍓", fala: "Um, dois, três, quatro, cinco, seis, sete! Sete morangos!" },
    { kind: "step_vertical_sum", titulo: "Conta escrita", a: 3, b: 4, fala: "Três em cima, quatro embaixo, mais. Resultado sete." },
    { kind: "step_count", titulo: "Mais um: 2 + 6", a: 2, b: 6, objeto: "🍇", fala: "Duas uvas em cima, seis embaixo." },
    { kind: "step_vertical_sum", titulo: "Conta escrita", a: 2, b: 6, fala: "Dois mais seis: oito!" },
    { kind: "practice_count", titulo: "Sua vez!", a: 5, b: 3, objeto: "🍎", fala: "Toque nas maçãs e conte com o Pip." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Somar é juntar", "+ é o sinal", "Resultado embaixo da linha"], fala: "Top demais!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e dez!" },
  ],
};

const MA07: KidsLesson = {
  codigo_bncc: "EF01MA07",
  titulo: "Dezena e unidade",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 110,
  cor: "blue",
  scenes: [
    { kind: "intro", mascot: "pipa", titulo: "Vamos formar números!", fala: "Cada número é feito de partes. Hoje vou te mostrar como!" },
    { kind: "concept", titulo: "Uma dezena", simbolo: "10", fala: "Dez bolinhas juntas formam uma dezena. É como um pacotinho de dez." },
    { kind: "concept", titulo: "Unidades", simbolo: "1", fala: "Cada bolinha solta é uma unidade. Sozinha." },
    { kind: "step_count", titulo: "1 dezena + 3 unidades", a: 10, b: 3, objeto: "🔵", fala: "Uma dezena mais três unidades sozinhas: treze!" },
    { kind: "step_vertical_sum", titulo: "10 + 3", a: 10, b: 3, fala: "Dez mais três é igual a treze." },
    { kind: "step_count", titulo: "2 dezenas + 5 unidades", a: 20, b: 5, objeto: "🟡", fala: "Duas dezenas mais cinco unidades: vinte e cinco!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["10 = uma dezena", "Unidade = bolinha sozinha", "13 = 10 + 3"], fala: "Muito bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cento e dez!" },
  ],
};

const MA08: KidsLesson = {
  codigo_bncc: "EF01MA08",
  titulo: "Subtração até 10",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 110,
  cor: "blue",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "Vamos tirar!", fala: "Hoje vamos aprender a tirar quantidades. É a subtração!" },
    { kind: "concept", titulo: "Sinal de menos", simbolo: "−", fala: "Esse sinal de menos quer dizer tirar." },
    { kind: "step_subtract", titulo: "8 − 3", a: 8, b: 3, objeto: "🍎", fala: "Tinha oito maçãs. Vou tirar três. Sobraram cinco!" },
    { kind: "step_vertical_sub", titulo: "Conta escrita", a: 8, b: 3, fala: "Oito em cima, menos três embaixo. Resultado: cinco." },
    { kind: "step_subtract", titulo: "Mais um: 6 − 2", a: 6, b: 2, objeto: "🍊", fala: "Seis laranjas. Tira duas. Sobraram quatro." },
    { kind: "step_vertical_sub", titulo: "Conta escrita", a: 6, b: 2, fala: "Seis menos dois: quatro." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Tirar é subtrair", "− é o sinal", "Sobra fica embaixo da linha"], fala: "Muito bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e dez!" },
  ],
};

const MA09: KidsLesson = {
  codigo_bncc: "EF01MA09",
  titulo: "Organizar por cor, forma e tamanho",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "violet",
  scenes: [
    { kind: "intro", mascot: "pipa", titulo: "Vamos organizar!", fala: "A gente pode juntar coisas parecidas em grupos. Vem ver!" },
    { kind: "usecase", titulo: "Como organizar?", cenas: [
      { emoji: "🟥", texto: "Por cor" },
      { emoji: "⭕", texto: "Por forma" },
      { emoji: "📏", texto: "Por tamanho" },
    ], fala: "A gente pode separar por cor, por forma ou por tamanho." },
    { kind: "concept", titulo: "Por cor", emoji: "🟦", fala: "Olha: todas as bolinhas azuis ficam juntas. As vermelhas, em outro grupo." },
    { kind: "concept", titulo: "Por forma", emoji: "⭐", fala: "Estrelas com estrelas. Círculos com círculos." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Separar por cor", "Separar por forma", "Separar por tamanho"], fala: "Show!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem!" },
  ],
};

const MA10: KidsLesson = {
  codigo_bncc: "EF01MA10",
  titulo: "Sequências e padrões",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "violet",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "Padrões mágicos!", fala: "Algumas coisas se repetem numa ordem. Isso é um padrão!" },
    { kind: "concept", titulo: "O que se repete?", simbolo: "🔴🔵🔴🔵", fala: "Olha: vermelho, azul, vermelho, azul… qual vem depois?" },
    { kind: "concept", titulo: "Resposta!", simbolo: "🔴", fala: "Isso! Vermelho! Porque o padrão se repete." },
    { kind: "usecase", titulo: "Padrões na vida", cenas: [
      { emoji: "🌞", texto: "Dia e noite" },
      { emoji: "🎵", texto: "Música" },
      { emoji: "👣", texto: "Passos" },
    ], fala: "Padrões aparecem no dia e noite, na música, nos passos!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Padrão se repete", "Olhar a ordem", "Adivinhar o próximo"], fala: "Mandou bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem!" },
  ],
};

const MA11: KidsLesson = {
  codigo_bncc: "EF01MA11",
  titulo: "Frente, atrás, direita e esquerda",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "amber",
  scenes: [
    { kind: "intro", mascot: "pipa", titulo: "Localização!", fala: "Hoje vamos aprender frente, atrás, direita e esquerda usando o nosso corpo!" },
    { kind: "concept", titulo: "Frente", emoji: "👆", fala: "Frente é pra onde você olha." },
    { kind: "concept", titulo: "Atrás", emoji: "👇", fala: "Atrás é o que está nas suas costas." },
    { kind: "concept", titulo: "Direita", emoji: "➡️", fala: "A direita é o lado da mão com que você escreve." },
    { kind: "concept", titulo: "Esquerda", emoji: "⬅️", fala: "A esquerda é o outro lado." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Frente é pra onde olho", "Atrás é nas costas", "Direita e esquerda"], fala: "Show!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

const MA12: KidsLesson = {
  codigo_bncc: "EF01MA12",
  titulo: "Localização com referência",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "amber",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "Onde está?", fala: "A gente pode dizer onde uma coisa está usando outra coisa como referência." },
    { kind: "concept", titulo: "Em cima", emoji: "⬆️", fala: "O livro está em cima da mesa." },
    { kind: "concept", titulo: "Embaixo", emoji: "⬇️", fala: "O gato está embaixo da cadeira." },
    { kind: "concept", titulo: "Do lado", emoji: "↔️", fala: "A bola está do lado do brinquedo." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Em cima de…", "Embaixo de…", "Do lado de…"], fala: "Muito bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

const MA13: KidsLesson = {
  codigo_bncc: "EF01MA13",
  titulo: "Sólidos geométricos",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "green",
  scenes: [
    { kind: "intro", mascot: "pipa", titulo: "Formas do mundo!", fala: "Tudo ao nosso redor tem uma forma. Vamos conhecer quatro!" },
    { kind: "concept", titulo: "Esfera", emoji: "⚽", fala: "A bola é uma esfera. É redondinha." },
    { kind: "concept", titulo: "Cubo", emoji: "🎲", fala: "O dado é um cubo. Tem seis lados quadrados." },
    { kind: "concept", titulo: "Cilindro", emoji: "🥫", fala: "A latinha é um cilindro." },
    { kind: "concept", titulo: "Cone", emoji: "🍦", fala: "A casquinha de sorvete é um cone." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Esfera = bola", "Cubo = dado", "Cilindro = lata", "Cone = casquinha"], fala: "Mandou muito bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

const MA14: KidsLesson = {
  codigo_bncc: "EF01MA14",
  titulo: "Figuras planas",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "green",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "Formas planas!", fala: "Agora vamos ver formas que são planinhas, como desenhos." },
    { kind: "concept", titulo: "Círculo", emoji: "⚪", fala: "O círculo é redondinho como o sol." },
    { kind: "concept", titulo: "Quadrado", emoji: "🟦", fala: "O quadrado tem quatro lados iguais." },
    { kind: "concept", titulo: "Retângulo", emoji: "▬", fala: "O retângulo tem dois lados maiores e dois menores. Como uma porta." },
    { kind: "concept", titulo: "Triângulo", emoji: "🔺", fala: "O triângulo tem três pontas." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Círculo", "Quadrado", "Retângulo", "Triângulo"], fala: "Show!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

const MA15: KidsLesson = {
  codigo_bncc: "EF01MA15",
  titulo: "Comparar medidas",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "amber",
  scenes: [
    { kind: "intro", mascot: "pipa", titulo: "Vamos comparar!", fala: "A gente pode comparar coisas: o que é maior, menor, pesado, leve…" },
    { kind: "concept", titulo: "Alto e baixo", emoji: "🏢", fala: "O prédio é alto. A casa é baixa." },
    { kind: "concept", titulo: "Comprido e curto", emoji: "📏", fala: "Uma régua comprida e um lápis curto." },
    { kind: "concept", titulo: "Pesado e leve", emoji: "🐘", fala: "Um elefante é pesado. Uma pena é leve." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Alto x Baixo", "Comprido x Curto", "Pesado x Leve"], fala: "Muito bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

const MA16: KidsLesson = {
  codigo_bncc: "EF01MA16",
  titulo: "Ordem dos acontecimentos do dia",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "amber",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "O que vem antes?", fala: "Vamos organizar as coisas do dia: primeiro, depois e por último." },
    { kind: "usecase", titulo: "Um dia normal", cenas: [
      { emoji: "🌅", texto: "Primeiro: acordar" },
      { emoji: "🏫", texto: "Depois: escola" },
      { emoji: "🛏️", texto: "Por último: dormir" },
    ], fala: "Primeiro acordamos, depois vamos à escola, por último dormimos." },
    { kind: "concept", titulo: "Primeiro", emoji: "1️⃣", fala: "Primeiro é o começo." },
    { kind: "concept", titulo: "Por último", emoji: "🔚", fala: "Por último é o fim." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Primeiro = começo", "Depois = meio", "Por último = fim"], fala: "Show!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

const MA17: KidsLesson = {
  codigo_bncc: "EF01MA17",
  titulo: "Semana, mês e calendário",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "amber",
  scenes: [
    { kind: "intro", mascot: "pipa", titulo: "Tempo!", fala: "Vamos aprender os dias da semana, meses e horas do dia." },
    { kind: "concept", titulo: "Sete dias", simbolo: "7", fala: "A semana tem sete dias: segunda, terça, quarta, quinta, sexta, sábado, domingo." },
    { kind: "concept", titulo: "Doze meses", simbolo: "12", fala: "O ano tem doze meses, começando em janeiro." },
    { kind: "usecase", titulo: "Períodos do dia", cenas: [
      { emoji: "🌅", texto: "Manhã" },
      { emoji: "☀️", texto: "Tarde" },
      { emoji: "🌙", texto: "Noite" },
    ], fala: "O dia tem manhã, tarde e noite." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["7 dias na semana", "12 meses no ano", "Manhã, tarde, noite"], fala: "Muito bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

const MA18: KidsLesson = {
  codigo_bncc: "EF01MA18",
  titulo: "Escrever datas",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "amber",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "Vamos escrever a data!", fala: "Toda data tem três partes: dia, mês e ano." },
    { kind: "concept", titulo: "Dia", simbolo: "15", fala: "O dia é o número do calendário. Por exemplo: 15." },
    { kind: "concept", titulo: "Mês", simbolo: "03", fala: "O mês é qual mês do ano. Março é o 3." },
    { kind: "concept", titulo: "Ano", simbolo: "2026", fala: "O ano é o número grande, como dois mil e vinte e seis." },
    { kind: "concept", titulo: "Tudo junto", simbolo: "15/03/2026", fala: "Quinze de março de dois mil e vinte e seis!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Dia / Mês / Ano", "Separados por barra", "Ano é o número grande"], fala: "Show!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

const MA19: KidsLesson = {
  codigo_bncc: "EF01MA19",
  titulo: "Dinheiro do Brasil",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "green",
  scenes: [
    { kind: "intro", mascot: "pipa", titulo: "Vamos conhecer o dinheiro!", fala: "No Brasil, o dinheiro é o real. Tem moedas e cédulas (notas)." },
    { kind: "concept", titulo: "Moedas", emoji: "🪙", fala: "Moedas são redondinhas e de metal. Tem de 5, 10, 25, 50 centavos e 1 real." },
    { kind: "concept", titulo: "Cédulas", emoji: "💵", fala: "Cédulas são notas de papel. Tem de 2, 5, 10, 20, 50, 100 e 200 reais." },
    { kind: "usecase", titulo: "Pra que serve?", cenas: [
      { emoji: "🍞", texto: "Comprar pão" },
      { emoji: "🎁", texto: "Comprar presente" },
      { emoji: "🍦", texto: "Comprar sorvete" },
    ], fala: "A gente usa dinheiro pra comprar coisas." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Real = dinheiro do Brasil", "Moedas e cédulas", "Servem pra comprar"], fala: "Muito bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

const MA20: KidsLesson = {
  codigo_bncc: "EF01MA20",
  titulo: "Certeza, talvez e impossível",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "violet",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "O que pode acontecer?", fala: "Algumas coisas a gente tem certeza, outras talvez, e outras nunca acontecem." },
    { kind: "concept", titulo: "Certeza", emoji: "✅", fala: "Amanhã o sol vai nascer. Isso é certeza." },
    { kind: "concept", titulo: "Talvez", emoji: "🤔", fala: "Talvez chova amanhã. A gente não tem certeza." },
    { kind: "concept", titulo: "Impossível", emoji: "🚫", fala: "Um peixe voar é impossível. Não acontece." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Certeza = sempre acontece", "Talvez = pode acontecer", "Impossível = nunca acontece"], fala: "Show!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

const MA21: KidsLesson = {
  codigo_bncc: "EF01MA21",
  titulo: "Ler tabelas simples",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "violet",
  scenes: [
    { kind: "intro", mascot: "pipa", titulo: "Tabelas e gráficos!", fala: "A gente pode mostrar informações em tabelas e gráficos. É mais fácil de ver!" },
    { kind: "concept", titulo: "Tabela", simbolo: "📋", fala: "Uma tabela tem colunas e linhas com números organizados." },
    { kind: "step_count", titulo: "Frutas favoritas", a: 5, b: 3, objeto: "🍎", fala: "Cinco crianças amam maçã, três amam banana." },
    { kind: "concept", titulo: "Gráfico", simbolo: "📊", fala: "O gráfico mostra com barras: a barra maior é a fruta mais amada." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Tabela organiza números", "Gráfico mostra com barras", "Barra maior = mais"], fala: "Muito bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

const MA22: KidsLesson = {
  codigo_bncc: "EF01MA22",
  titulo: "Pesquisa da turma",
  disciplina: "Matemática",
  serie: "1º Ano",
  xp: 100,
  cor: "violet",
  scenes: [
    { kind: "intro", mascot: "pip", titulo: "Vamos pesquisar!", fala: "Hoje vou te ensinar a fazer uma pesquisa: perguntar, contar e organizar respostas!" },
    { kind: "concept", titulo: "1. Pergunta", emoji: "❓", fala: "Primeiro, escolha uma pergunta. Por exemplo: qual sua cor favorita?" },
    { kind: "concept", titulo: "2. Conte", emoji: "✋", fala: "Pergunte para os amigos e conte quantos responderam cada cor." },
    { kind: "step_count", titulo: "Resultados", a: 4, b: 2, objeto: "🔵", fala: "Quatro amigos amam azul, dois amam vermelho." },
    { kind: "concept", titulo: "3. Organize", emoji: "📊", fala: "Coloque os números em uma tabela ou gráfico bem bonito." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Fazer uma pergunta", "Contar respostas", "Organizar em tabela"], fala: "Show!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
  ],
};

// Códigos legados (EF01MA50–59) reaproveitam as aulas oficiais correspondentes.
const aliasLegado = (codigo: string, base: KidsLesson, titulo: string): KidsLesson => ({
  ...base,
  codigo_bncc: codigo,
  titulo,
});

export const KIDS_LESSONS_1ANO: Record<string, KidsLesson> = {
  EF01MA01: MA01,
  EF01MA02: MA02,
  EF01MA03: MA03,
  EF01MA04: MA04,
  EF01MA05: MA05,
  EF01MA06: MA06,
  EF01MA07: MA07,
  EF01MA08: MA08,
  EF01MA09: MA09,
  EF01MA10: MA10,
  EF01MA11: MA11,
  EF01MA12: MA12,
  EF01MA13: MA13,
  EF01MA14: MA14,
  EF01MA15: MA15,
  EF01MA16: MA16,
  EF01MA17: MA17,
  EF01MA18: MA18,
  EF01MA19: MA19,
  EF01MA20: MA20,
  EF01MA21: MA21,
  EF01MA22: MA22,
  // legados
  EF01MA50: aliasLegado("EF01MA50", MA06, "Adição - 1º Ano"),
  EF01MA51: aliasLegado("EF01MA51", MA08, "Subtração - 1º Ano"),
  EF01MA52: aliasLegado("EF01MA52", MA06, "Multiplicação - 1º Ano (juntar grupos iguais)"),
  EF01MA53: aliasLegado("EF01MA53", MA08, "Divisão - 1º Ano (repartir)"),
  EF01MA54: aliasLegado("EF01MA54", MA05, "Frações - 1º Ano (partes iguais)"),
  EF01MA55: aliasLegado("EF01MA55", MA14, "Geometria - 1º Ano"),
  EF01MA56: aliasLegado("EF01MA56", MA15, "Medidas - 1º Ano"),
  EF01MA57: aliasLegado("EF01MA57", MA17, "Hora e Tempo - 1º Ano"),
  EF01MA58: aliasLegado("EF01MA58", MA19, "Dinheiro - 1º Ano"),
  EF01MA59: aliasLegado("EF01MA59", MA06, "Tabuada - 1º Ano (somar grupos iguais)"),
};

export function getKidsLesson(codigo: string | undefined): KidsLesson | null {
  if (!codigo) return null;
  return KIDS_LESSONS_1ANO[codigo] ?? null;
}
