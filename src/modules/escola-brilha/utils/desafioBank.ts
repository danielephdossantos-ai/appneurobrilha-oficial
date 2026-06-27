// Banco de questões determinístico por (disciplina, faixa de série) — fallback
// usado quando a aula salva no banco tem desafio genérico/ausente.
//
// Não usa IA. Seleção determinística baseada no código BNCC (md5/hash simples).

type Q = {
  question: string;
  // Primeira posição é sempre a correta no banco — embaralhamos depois.
  options: [string, string, string, string];
  explanation: string;
  emoji: string;
};

type Faixa = "i" | "m" | "f" | "em";
type DiscKey =
  | "MA" | "LP" | "CI" | "GE" | "HI" | "ER" | "AR" | "EF" | "LI";

const BANK: Record<string, Q[]> = {
  // ============ MATEMÁTICA ============
  "MA-i": [
    { question: "Quanto é 2 + 3?", options: ["5","4","6","23"], explanation: "2 mais 3 é 5.", emoji: "🔢" },
    { question: "Quanto é 4 + 4?", options: ["8","6","7","9"], explanation: "Dobro de 4 é 8.", emoji: "➕" },
    { question: "Qual número vem depois do 9?", options: ["10","8","11","19"], explanation: "Após 9 vem 10.", emoji: "🔢" },
    { question: "Qual número vem antes do 5?", options: ["4","6","3","7"], explanation: "Antes de 5 é 4.", emoji: "🔢" },
    { question: "Quantos lados tem um triângulo?", options: ["3","4","5","6"], explanation: "Triângulo tem 3 lados.", emoji: "🔺" },
    { question: "Quantos lados tem um quadrado?", options: ["4","3","5","6"], explanation: "Quadrado tem 4 lados iguais.", emoji: "🟦" },
    { question: "Qual é o maior número?", options: ["8","5","3","2"], explanation: "8 é o maior.", emoji: "📏" },
    { question: "Qual é o menor número?", options: ["1","4","6","9"], explanation: "1 é o menor.", emoji: "📏" },
    { question: "Quanto é 10 − 4?", options: ["6","5","7","14"], explanation: "10 − 4 = 6.", emoji: "➖" },
    { question: "Quanto é 7 − 2?", options: ["5","4","6","9"], explanation: "7 − 2 = 5.", emoji: "➖" },
    { question: "Quanto é 5 + 5?", options: ["10","8","11","15"], explanation: "Dobro de 5 é 10.", emoji: "🔟" },
    { question: "Se eu tenho 3 maçãs e ganho 2, fico com…?", options: ["5","4","6","2"], explanation: "3 + 2 = 5.", emoji: "🍎" },
    { question: "Quantos dedos tem uma mão?", options: ["5","4","6","10"], explanation: "Uma mão = 5 dedos.", emoji: "✋" },
    { question: "Quantas rodas tem uma bicicleta?", options: ["2","3","4","1"], explanation: "Bicicleta = 2 rodas.", emoji: "🚲" },
    { question: "Qual número é par?", options: ["6","3","5","7"], explanation: "6 é par.", emoji: "🔢" },
    { question: "Qual número é ímpar?", options: ["7","4","2","8"], explanation: "7 é ímpar.", emoji: "🔢" },
    { question: "Quantos meses tem 1 ano?", options: ["12","10","6","20"], explanation: "Ano = 12 meses.", emoji: "📅" },
    { question: "Quantos dias tem 1 semana?", options: ["7","5","10","30"], explanation: "Semana = 7 dias.", emoji: "📆" },
    { question: "Qual forma é redonda?", options: ["círculo","quadrado","triângulo","retângulo"], explanation: "Círculo é redondo.", emoji: "⚪" },
    { question: "Quanto é 1 + 1?", options: ["2","1","3","11"], explanation: "1 + 1 = 2.", emoji: "➕" },
    { question: "Quanto é 6 + 3?", options: ["9","8","10","7"], explanation: "6 + 3 = 9.", emoji: "➕" },
    { question: "Quanto é 8 − 5?", options: ["3","2","4","5"], explanation: "8 − 5 = 3.", emoji: "➖" },
    { question: "Qual sequência está certa: 1, 2, __, 4?", options: ["3","5","0","6"], explanation: "1,2,3,4.", emoji: "🔢" },
    { question: "Quantos olhos temos?", options: ["2","1","3","4"], explanation: "Temos 2 olhos.", emoji: "👀" },
    { question: "Qual figura tem 3 lados?", options: ["triângulo","círculo","quadrado","losango"], explanation: "Triângulo.", emoji: "🔺" },
    { question: "Metade de 4 é…?", options: ["2","1","3","4"], explanation: "4 ÷ 2 = 2.", emoji: "➗" },
    { question: "Dobro de 3 é…?", options: ["6","5","4","9"], explanation: "3 × 2 = 6.", emoji: "✖️" },
    { question: "Quantos pés tem um gato?", options: ["4","2","3","6"], explanation: "Gato = 4 patas.", emoji: "🐱" },
    { question: "Quanto é 9 − 9?", options: ["0","1","9","18"], explanation: "Tudo menos tudo = 0.", emoji: "0️⃣" },
    { question: "Qual número está entre 5 e 7?", options: ["6","4","8","9"], explanation: "Entre 5 e 7 está o 6.", emoji: "🔢" },
  ],
  "MA-m": [
    { question: "Quanto é 25 × 4?", options: ["100","90","105","85"], explanation: "25×4 = 100.", emoji: "✖️" },
    { question: "Quanto é 12 × 12?", options: ["144","124","132","156"], explanation: "Tabuada do 12.", emoji: "✖️" },
    { question: "Qual é a metade de 50?", options: ["25","20","30","15"], explanation: "50 ÷ 2 = 25.", emoji: "➗" },
    { question: "Qual é o dobro de 35?", options: ["70","65","75","60"], explanation: "35×2 = 70.", emoji: "✖️" },
    { question: "Quantos minutos há em 2 horas?", options: ["120","60","100","180"], explanation: "2×60 = 120 min.", emoji: "⏰" },
    { question: "Quantas horas há em 1 dia?", options: ["24","12","20","36"], explanation: "Dia = 24 h.", emoji: "🕐" },
    { question: "Em 348, qual é o algarismo das centenas?", options: ["3","4","8","0"], explanation: "Centena é o 3.", emoji: "🔢" },
    { question: "Em 502, qual é o algarismo das dezenas?", options: ["0","5","2","50"], explanation: "Dezena é o 0.", emoji: "🔢" },
    { question: "Qual fração é equivalente a 1/2?", options: ["2/4","1/3","3/5","2/3"], explanation: "2/4 = 1/2.", emoji: "➗" },
    { question: "Qual fração é maior?", options: ["3/4","1/4","2/4","0/4"], explanation: "3/4 é a maior.", emoji: "📊" },
    { question: "Quanto é 144 ÷ 12?", options: ["12","11","14","24"], explanation: "12×12 = 144.", emoji: "➗" },
    { question: "Quanto é 81 ÷ 9?", options: ["9","8","7","10"], explanation: "9×9 = 81.", emoji: "➗" },
    { question: "Quantos lados tem um pentágono?", options: ["5","4","6","7"], explanation: "Penta = 5.", emoji: "⬟" },
    { question: "Quantos lados tem um hexágono?", options: ["6","5","7","8"], explanation: "Hexa = 6.", emoji: "⬢" },
    { question: "Qual é o perímetro de um quadrado de lado 5?", options: ["20","10","15","25"], explanation: "4×5 = 20.", emoji: "📐" },
    { question: "Qual é a área de um retângulo 4×6?", options: ["24","10","20","26"], explanation: "4×6 = 24.", emoji: "📐" },
    { question: "Quanto é 0,5 + 0,5?", options: ["1","0,10","0,55","0,1"], explanation: "Meio + meio = 1.", emoji: "➕" },
    { question: "Quanto é 10% de 200?", options: ["20","10","30","100"], explanation: "0,10·200 = 20.", emoji: "%" },
    { question: "Quanto é 50% de 80?", options: ["40","50","30","8"], explanation: "Metade de 80.", emoji: "%" },
    { question: "Qual é o resto de 17 ÷ 5?", options: ["2","1","3","0"], explanation: "5×3=15, sobra 2.", emoji: "➗" },
    { question: "Qual unidade mede massa?", options: ["quilograma","metro","litro","segundo"], explanation: "kg = massa.", emoji: "⚖️" },
    { question: "Qual unidade mede comprimento?", options: ["metro","grama","litro","ºC"], explanation: "Metro mede comprimento.", emoji: "📏" },
    { question: "Quantos centímetros há em 1 metro?", options: ["100","10","1000","60"], explanation: "1 m = 100 cm.", emoji: "📏" },
    { question: "Quantos mililitros tem 1 litro?", options: ["1000","100","10","500"], explanation: "1 L = 1000 mL.", emoji: "🥤" },
    { question: "Qual é o sucessor de 999?", options: ["1000","998","9999","900"], explanation: "999+1.", emoji: "🔢" },
    { question: "Em uma divisão, o número que divide é o…", options: ["divisor","dividendo","quociente","resto"], explanation: "Divisor.", emoji: "➗" },
    { question: "Quanto é 7 × 8?", options: ["56","54","64","49"], explanation: "Tabuada do 7.", emoji: "✖️" },
    { question: "Quanto é 9 × 6?", options: ["54","56","45","63"], explanation: "Tabuada do 9.", emoji: "✖️" },
    { question: "Qual é o triplo de 12?", options: ["36","24","32","42"], explanation: "12×3 = 36.", emoji: "✖️" },
    { question: "Qual figura tem todos os lados iguais e 4 ângulos retos?", options: ["quadrado","retângulo","losango","trapézio"], explanation: "Quadrado.", emoji: "🟦" },
  ],
  "MA-f": [
    { question: "Quanto é (−3) + (−5)?", options: ["−8","−2","2","8"], explanation: "Soma de dois negativos.", emoji: "➕" },
    { question: "Quanto é (−7) × (−2)?", options: ["14","−14","−9","9"], explanation: "Negativo × negativo = positivo.", emoji: "✖️" },
    { question: "Qual é a raiz quadrada de 81?", options: ["9","8","7","10"], explanation: "9×9 = 81.", emoji: "√" },
    { question: "Qual é a raiz quadrada de 144?", options: ["12","14","10","11"], explanation: "12×12 = 144.", emoji: "√" },
    { question: "Em y = 2x + 3, se x = 4, quanto vale y?", options: ["11","10","8","14"], explanation: "2·4+3 = 11.", emoji: "📈" },
    { question: "Em y = 3x − 1, se x = 2, quanto vale y?", options: ["5","6","4","7"], explanation: "3·2−1 = 5.", emoji: "📈" },
    { question: "Quanto vale 2³?", options: ["8","6","9","16"], explanation: "2·2·2 = 8.", emoji: "🔢" },
    { question: "Quanto vale 5²?", options: ["25","10","20","15"], explanation: "5·5 = 25.", emoji: "🔢" },
    { question: "Soma dos ângulos internos de um triângulo?", options: ["180°","90°","360°","270°"], explanation: "Sempre 180°.", emoji: "📐" },
    { question: "Soma dos ângulos internos de um quadrilátero?", options: ["360°","180°","270°","720°"], explanation: "Quadrilátero = 360°.", emoji: "📐" },
    { question: "Quanto é 15% de 200?", options: ["30","20","25","35"], explanation: "0,15·200 = 30.", emoji: "%" },
    { question: "Quanto é 25% de 80?", options: ["20","25","15","30"], explanation: "1/4 de 80.", emoji: "%" },
    { question: "Qual é o MMC de 4 e 6?", options: ["12","24","8","6"], explanation: "Menor múltiplo comum.", emoji: "🔢" },
    { question: "Qual é o MDC de 12 e 18?", options: ["6","3","9","12"], explanation: "Máx divisor comum.", emoji: "🔢" },
    { question: "Quanto é (3x + 2x)?", options: ["5x","6x","3x²","x+5"], explanation: "Somam-se coeficientes.", emoji: "📐" },
    { question: "Resolva: x + 7 = 12. Quanto vale x?", options: ["5","19","7","12"], explanation: "x = 12 − 7.", emoji: "🔠" },
    { question: "Resolva: 2x = 14. Quanto vale x?", options: ["7","12","16","2"], explanation: "x = 14/2.", emoji: "🔠" },
    { question: "Qual é a área de um círculo de raio 1? (π·r²)", options: ["π","2π","π/2","1"], explanation: "π·1².", emoji: "⭕" },
    { question: "Teorema de Pitágoras: a² + b² = ?", options: ["c²","c","2c","c³"], explanation: "Hipotenusa ao quadrado.", emoji: "📐" },
    { question: "Quanto é 1/2 + 1/4?", options: ["3/4","2/6","1/6","2/4"], explanation: "Mesmo denominador: 2/4+1/4.", emoji: "➗" },
    { question: "Quanto é 2/3 × 3/4?", options: ["1/2","6/7","5/7","2/4"], explanation: "6/12 = 1/2.", emoji: "✖️" },
    { question: "Qual é o número primo?", options: ["7","9","15","21"], explanation: "7 só divide por 1 e 7.", emoji: "🔢" },
    { question: "Quantos graus tem 1 ângulo reto?", options: ["90°","180°","45°","60°"], explanation: "Reto = 90°.", emoji: "📐" },
    { question: "Triângulo com 3 lados iguais é…", options: ["equilátero","isósceles","escaleno","retângulo"], explanation: "Equilátero.", emoji: "🔺" },
    { question: "Função linear tem gráfico em formato de…", options: ["reta","parábola","circunferência","hipérbole"], explanation: "Reta.", emoji: "📈" },
    { question: "Função quadrática tem gráfico em formato de…", options: ["parábola","reta","círculo","onda"], explanation: "Parábola.", emoji: "📊" },
    { question: "Qual é a probabilidade de tirar cara numa moeda?", options: ["1/2","1/4","1","1/6"], explanation: "2 lados, 1 favorável.", emoji: "🪙" },
    { question: "Qual é a probabilidade de tirar 6 num dado?", options: ["1/6","1/2","1/3","1/12"], explanation: "Dado de 6 lados.", emoji: "🎲" },
    { question: "Quanto é 10⁴?", options: ["10000","1000","100","40"], explanation: "10·10·10·10.", emoji: "🔢" },
    { question: "Qual é a média de 4, 6 e 8?", options: ["6","7","5","8"], explanation: "(4+6+8)/3.", emoji: "📊" },
  ],
  "MA-em": [
    { question: "Qual é a derivada de x²?", options: ["2x","x","x²/2","2"], explanation: "d/dx(x²) = 2x.", emoji: "📐" },
    { question: "Quanto vale log₁₀(1000)?", options: ["3","2","10","100"], explanation: "10³ = 1000.", emoji: "📊" },
    { question: "Qual é a derivada de sen(x)?", options: ["cos(x)","−cos(x)","−sen(x)","tg(x)"], explanation: "d/dx sen = cos.", emoji: "📐" },
    { question: "Quanto vale sen(90°)?", options: ["1","0","−1","½"], explanation: "sen 90° = 1.", emoji: "📐" },
    { question: "Integral de 1 dx é…", options: ["x + C","1 + C","0","x²/2"], explanation: "∫1 dx = x + C.", emoji: "∫" },
    { question: "Em PA com a₁=2 e r=3, qual é a₅?", options: ["14","12","15","17"], explanation: "2+4·3.", emoji: "📈" },
    { question: "Determinante de matriz identidade 2×2?", options: ["1","0","2","−1"], explanation: "det(I) = 1.", emoji: "🔢" },
    { question: "Quantas faces tem um cubo?", options: ["6","8","12","4"], explanation: "6 faces quadradas.", emoji: "🧊" },
  ],

  // ============ LÍNGUA PORTUGUESA ============
  "LP-i": [
    { question: "Quantas letras tem a palavra CASA?", options: ["4","3","5","6"], explanation: "C-A-S-A = 4.", emoji: "📝" },
    { question: "Quantas letras tem a palavra SOL?", options: ["3","2","4","5"], explanation: "S-O-L = 3.", emoji: "☀️" },
    { question: "Qual é a primeira letra do alfabeto?", options: ["A","B","E","Z"], explanation: "O alfabeto começa em A.", emoji: "🔤" },
    { question: "Qual é a última letra do alfabeto?", options: ["Z","Y","W","A"], explanation: "Termina em Z.", emoji: "🔤" },
    { question: "Qual palavra começa com a letra B?", options: ["BOLA","CASA","MESA","FOCA"], explanation: "BOLA começa com B.", emoji: "⚽" },
    { question: "Qual palavra começa com a letra M?", options: ["MACACO","SAPO","PATO","RATO"], explanation: "MACACO.", emoji: "🐒" },
    { question: "Quantas sílabas tem BANANA?", options: ["3","2","4","5"], explanation: "BA-NA-NA = 3.", emoji: "🍌" },
    { question: "Quantas sílabas tem PÉ?", options: ["1","2","3","4"], explanation: "PÉ = 1 sílaba.", emoji: "🦶" },
    { question: "Quantas sílabas tem CABELO?", options: ["3","2","4","5"], explanation: "CA-BE-LO.", emoji: "💇" },
    { question: "Qual palavra rima com PATO?", options: ["RATO","BOLA","CASA","SOL"], explanation: "PATO e RATO rimam.", emoji: "🎵" },
    { question: "Qual palavra rima com BOLA?", options: ["COLA","SOL","CASA","PÉ"], explanation: "Bola e cola rimam.", emoji: "🎵" },
    { question: "Qual é uma vogal?", options: ["A","B","C","D"], explanation: "Vogais: A E I O U.", emoji: "🔠" },
    { question: "Qual NÃO é vogal?", options: ["M","E","I","O"], explanation: "M é consoante.", emoji: "🔡" },
    { question: "Quantas vogais existem?", options: ["5","4","6","7"], explanation: "A, E, I, O, U.", emoji: "🔠" },
    { question: "Qual letra falta: GA__O (animal que mia)?", options: ["T","R","P","S"], explanation: "GATO.", emoji: "🐱" },
    { question: "Qual letra falta: __ATO (animal que rói)?", options: ["R","B","P","S"], explanation: "RATO.", emoji: "🐀" },
    { question: "Qual é o som da letra M em MAMÃE?", options: ["mmm","sss","fff","rrr"], explanation: "Som /m/.", emoji: "👄" },
    { question: "Qual palavra tem mais letras: SOL ou PIPOCA?", options: ["PIPOCA","SOL","iguais","nenhuma"], explanation: "Pipoca = 6 letras.", emoji: "🍿" },
    { question: "Como começa a palavra ESCOLA?", options: ["E","A","I","U"], explanation: "Começa com E.", emoji: "🏫" },
    { question: "Qual é a sílaba final de BOLA?", options: ["LA","BO","OL","BA"], explanation: "BO-LA.", emoji: "⚽" },
    { question: "Qual rima com FLOR?", options: ["AMOR","CASA","SOL","PATO"], explanation: "Rima -OR.", emoji: "🌸" },
    { question: "Qual rima com MÃO?", options: ["PÃO","CASA","BOLA","PÉ"], explanation: "Rima -ÃO.", emoji: "✋" },
    { question: "Qual palavra começa com A?", options: ["ABACAXI","BOLA","UVA","ELA"], explanation: "ABACAXI.", emoji: "🍍" },
    { question: "Qual palavra começa com U?", options: ["UVA","ABELHA","SOL","MEL"], explanation: "UVA.", emoji: "🍇" },
    { question: "Qual é a primeira sílaba de SAPATO?", options: ["SA","PA","TO","AS"], explanation: "SA-PA-TO.", emoji: "👞" },
    { question: "Que letra falta para formar LIVR_?", options: ["O","A","E","I"], explanation: "LIVRO.", emoji: "📚" },
    { question: "Quantas palavras há na frase 'O gato dorme'?", options: ["3","2","4","1"], explanation: "O / gato / dorme.", emoji: "🐱" },
    { question: "Qual frase está completa?", options: ["A menina brinca.","menina brinca","brinca a","brinca!"], explanation: "Sujeito + verbo + ponto.", emoji: "📝" },
    { question: "Qual é o oposto de GRANDE?", options: ["PEQUENO","ALTO","NOVO","LIMPO"], explanation: "Antônimo.", emoji: "↔️" },
    { question: "Qual é o oposto de DIA?", options: ["NOITE","TARDE","SOL","HORA"], explanation: "Dia × noite.", emoji: "🌙" },
  ],
  "LP-m": [
    { question: "Qual destas é um substantivo?", options: ["cachorro","correr","azul","rapidamente"], explanation: "Substantivo nomeia seres.", emoji: "📚" },
    { question: "Qual destas é um verbo?", options: ["pular","mesa","feliz","rápido"], explanation: "Verbo é ação.", emoji: "🏃" },
    { question: "Qual destas é um adjetivo?", options: ["bonito","casa","correr","ali"], explanation: "Adjetivo qualifica.", emoji: "🎨" },
    { question: "Qual é o plural de 'pão'?", options: ["pães","pãos","panes","pão"], explanation: "Plural irregular.", emoji: "🥖" },
    { question: "Qual é o plural de 'mão'?", options: ["mãos","mães","manes","mãs"], explanation: "Mão → mãos.", emoji: "✋" },
    { question: "Qual é o plural de 'animal'?", options: ["animais","animales","animals","animal"], explanation: "-al vira -ais.", emoji: "🐾" },
    { question: "Qual frase está no passado?", options: ["Eu comi maçã.","Eu como maçã.","Eu vou comer.","Eu como sempre."], explanation: "'Comi' é passado.", emoji: "⏳" },
    { question: "Qual frase está no futuro?", options: ["Eu vou viajar.","Eu viajei.","Eu viajo.","Eu viajava."], explanation: "'Vou viajar' = futuro.", emoji: "✈️" },
    { question: "Qual é sinônimo de ALEGRE?", options: ["feliz","triste","cansado","bravo"], explanation: "Alegre = feliz.", emoji: "😊" },
    { question: "Qual é sinônimo de RÁPIDO?", options: ["veloz","lento","calmo","grande"], explanation: "Veloz = rápido.", emoji: "🏃" },
    { question: "Qual é antônimo de BOM?", options: ["mau","ótimo","legal","bonito"], explanation: "Antônimo: mau.", emoji: "↔️" },
    { question: "Qual é antônimo de QUENTE?", options: ["frio","morno","tépido","úmido"], explanation: "Quente × frio.", emoji: "❄️" },
    { question: "Que tipo de palavra é 'rapidamente'?", options: ["advérbio","substantivo","adjetivo","verbo"], explanation: "Termina em -mente.", emoji: "📝" },
    { question: "Na frase 'O cachorro late', 'O' é…", options: ["artigo","substantivo","verbo","adjetivo"], explanation: "Artigo definido.", emoji: "📝" },
    { question: "Qual é um artigo indefinido?", options: ["um","o","a","os"], explanation: "Um/uma = indefinido.", emoji: "📖" },
    { question: "Quantos parágrafos tem um texto curto típico?", options: ["3 ou mais","1 só","sem regra fixa","exatamente 5"], explanation: "Introdução, desenvolvimento, conclusão.", emoji: "📄" },
    { question: "Qual sinal termina uma pergunta?", options: ["?","!",".",","], explanation: "Ponto de interrogação.", emoji: "❓" },
    { question: "Qual sinal indica exclamação?", options: ["!","?",".",":"], explanation: "Ponto de exclamação.", emoji: "❗" },
    { question: "Qual palavra está acentuada corretamente?", options: ["café","cafê","cafê","cafe"], explanation: "Café com acento agudo.", emoji: "☕" },
    { question: "Qual é a sílaba tônica de BORBOLETA?", options: ["LE","BOR","BO","TA"], explanation: "Bor-bo-LE-ta.", emoji: "🦋" },
    { question: "Qual é a sílaba tônica de CASA?", options: ["CA","SA","A","CAS"], explanation: "CA-sa (paroxítona).", emoji: "🏠" },
    { question: "Qual palavra é oxítona?", options: ["café","mesa","livro","casa"], explanation: "Tônica na última.", emoji: "✏️" },
    { question: "Qual é o feminino de 'rei'?", options: ["rainha","reia","reisa","reía"], explanation: "Rei → rainha.", emoji: "👑" },
    { question: "Qual é o coletivo de peixes?", options: ["cardume","alcateia","matilha","enxame"], explanation: "Cardume.", emoji: "🐟" },
    { question: "Qual é o coletivo de abelhas?", options: ["enxame","cardume","matilha","manada"], explanation: "Enxame.", emoji: "🐝" },
    { question: "Quem escreve um livro é o…", options: ["autor","leitor","editor","narrador"], explanation: "Autor cria a obra.", emoji: "✍️" },
    { question: "Qual gênero textual tem rima?", options: ["poema","receita","notícia","bula"], explanation: "Poema.", emoji: "📜" },
    { question: "Em 'A bola é vermelha', 'vermelha' é…", options: ["adjetivo","verbo","substantivo","artigo"], explanation: "Qualifica bola.", emoji: "🔴" },
    { question: "Qual palavra é diminutivo?", options: ["casinha","casarão","casa","mansão"], explanation: "-inha = diminutivo.", emoji: "🏠" },
    { question: "Qual palavra é aumentativo?", options: ["carrão","carrinho","carro","carreta"], explanation: "-ão = aumentativo.", emoji: "🚗" },
  ],
  "LP-f": [
    { question: "Qual é o sujeito de 'Os alunos estudaram'?", options: ["Os alunos","estudaram","estudo","alunos estudaram"], explanation: "Quem estudou?", emoji: "📖" },
    { question: "Que figura há em 'seus olhos são duas estrelas'?", options: ["metáfora","metonímia","ironia","hipérbole"], explanation: "Comparação implícita.", emoji: "✨" },
    { question: "Que figura há em 'chorei rios de lágrimas'?", options: ["hipérbole","metáfora","ironia","eufemismo"], explanation: "Exagero.", emoji: "💧" },
    { question: "Qual é a função do ponto de interrogação?", options: ["indicar pergunta","encerrar frase","listar","exclamar"], explanation: "? marca pergunta.", emoji: "❓" },
    { question: "Qual conjunção é adversativa?", options: ["mas","e","ou","então"], explanation: "Indica oposição.", emoji: "🔗" },
    { question: "Qual conjunção é aditiva?", options: ["e","mas","porém","contudo"], explanation: "'E' adiciona.", emoji: "➕" },
    { question: "Em 'O livro foi lido por Ana', a voz é…", options: ["passiva","ativa","reflexiva","direta"], explanation: "Sujeito sofre ação.", emoji: "📚" },
    { question: "Em 'Ana leu o livro', a voz é…", options: ["ativa","passiva","reflexiva","analítica"], explanation: "Sujeito age.", emoji: "📖" },
    { question: "Qual é um pronome pessoal?", options: ["ela","casa","correr","azul"], explanation: "'Ela' substitui o nome.", emoji: "👤" },
    { question: "Qual é um pronome possessivo?", options: ["meu","ele","aquele","quem"], explanation: "Indica posse.", emoji: "🔑" },
    { question: "Qual é um pronome demonstrativo?", options: ["este","meu","ele","cujo"], explanation: "Este/esse/aquele.", emoji: "👉" },
    { question: "Qual é a função do narrador?", options: ["contar a história","escrever poemas","editar","ilustrar"], explanation: "Narrador conta.", emoji: "🎙️" },
    { question: "Narrador que participa da história é…", options: ["personagem","observador","onisciente","ausente"], explanation: "Em 1ª pessoa.", emoji: "🧑" },
    { question: "Texto que defende uma opinião é…", options: ["dissertativo-argumentativo","narrativo","descritivo","injuntivo"], explanation: "Argumenta.", emoji: "🗣️" },
    { question: "Receita de bolo é texto…", options: ["injuntivo","narrativo","poético","jornalístico"], explanation: "Instrui.", emoji: "🍰" },
    { question: "Qual é o predicado de 'A menina cantou'?", options: ["cantou","A menina","menina","A"], explanation: "Ação do sujeito.", emoji: "🎤" },
    { question: "Verbo de ligação principal é…", options: ["ser","correr","comer","pular"], explanation: "Ser/estar/parecer.", emoji: "🔗" },
    { question: "Em 'João parece cansado', 'cansado' é…", options: ["predicativo do sujeito","objeto direto","adjunto","aposto"], explanation: "Qualidade pelo verbo de ligação.", emoji: "😴" },
    { question: "Qual é o complemento em 'Comprei pão'?", options: ["pão (obj. direto)","comprei","eu","ontem"], explanation: "Sem preposição.", emoji: "🥖" },
    { question: "Qual é o complemento em 'Gosto de música'?", options: ["de música (obj. indireto)","música","gosto","eu"], explanation: "Com preposição.", emoji: "🎶" },
    { question: "Substantivo abstrato é…", options: ["amor","cadeira","cachorro","casa"], explanation: "Sentimento.", emoji: "💖" },
    { question: "Crase ocorre quando…", options: ["a + a se fundem","há acento gráfico","é plural","é estrangeira"], explanation: "Fusão de 'a' + 'a'.", emoji: "✏️" },
    { question: "Em 'Fui à praia', há crase porque…", options: ["preposição a + artigo a","é feminino só","é plural","é nome próprio"], explanation: "a + a.", emoji: "🏖️" },
    { question: "Qual é o gênero de uma fábula?", options: ["narrativo com moral","jornalístico","científico","poético"], explanation: "Fábula tem moral.", emoji: "🦊" },
    { question: "Soneto tem quantos versos?", options: ["14","10","8","20"], explanation: "Dois quartetos + dois tercetos.", emoji: "📜" },
    { question: "Quem escreveu 'Dom Casmurro'?", options: ["Machado de Assis","José de Alencar","Jorge Amado","Cecília Meireles"], explanation: "Machado, 1899.", emoji: "📚" },
    { question: "Romantismo no Brasil iniciou em…", options: ["1836","1500","1922","1888"], explanation: "Suspiros Poéticos.", emoji: "🌹" },
    { question: "Qual figura é uma comparação explícita?", options: ["símile","metáfora","metonímia","hipérbole"], explanation: "Usa 'como'.", emoji: "🔁" },
    { question: "Discurso direto usa…", options: ["aspas ou travessão","só vírgulas","parênteses","reticências"], explanation: "Fala literal.", emoji: "💬" },
    { question: "Qual é o aposto em 'João, meu irmão, chegou'?", options: ["meu irmão","João","chegou","meu"], explanation: "Explica João.", emoji: "👥" },
  ],
  "LP-em": [
    { question: "O Modernismo brasileiro começa com qual evento?", options: ["Semana de Arte Moderna de 1922","Independência","Proclamação da República","Era Vargas"], explanation: "Semana de 22.", emoji: "🎨" },
    { question: "Quem escreveu 'Vidas Secas'?", options: ["Graciliano Ramos","Machado de Assis","Jorge Amado","Clarice Lispector"], explanation: "Graciliano, 1938.", emoji: "📖" },
    { question: "Quem escreveu 'Capitães da Areia'?", options: ["Jorge Amado","Erico Verissimo","Lima Barreto","Drummond"], explanation: "Jorge Amado.", emoji: "🌊" },
    { question: "Arcadismo defendia…", options: ["bucolismo e simplicidade","exagero barroco","ciência objetiva","crítica social urbana"], explanation: "Inutilia truncat.", emoji: "🌿" },
    { question: "Quem é autor de 'Memórias Póstumas de Brás Cubas'?", options: ["Machado de Assis","Aluísio Azevedo","Castro Alves","Olavo Bilac"], explanation: "Machado.", emoji: "📚" },
    { question: "Funções da linguagem: foco no emissor é…", options: ["emotiva","referencial","conativa","fática"], explanation: "Função emotiva.", emoji: "🗣️" },
    { question: "Foco no receptor é função…", options: ["conativa","emotiva","poética","metalinguística"], explanation: "Apelativa.", emoji: "📣" },
  ],

  // ============ CIÊNCIAS ============
  "CI-i": [
    { question: "Qual destes é um ser vivo?", options: ["cachorro","pedra","cadeira","caneta"], explanation: "Nasce, cresce, morre.", emoji: "🐶" },
    { question: "Qual destes NÃO é ser vivo?", options: ["pedra","planta","peixe","pessoa"], explanation: "Pedra é matéria inerte.", emoji: "🪨" },
    { question: "De onde vem a luz do dia?", options: ["Sol","Lua","estrelas","lâmpada"], explanation: "O Sol ilumina.", emoji: "☀️" },
    { question: "Quantos sentidos temos?", options: ["5","3","4","6"], explanation: "Visão, audição, tato, olfato, paladar.", emoji: "👀" },
    { question: "Com qual sentido sentimos cheiro?", options: ["olfato","tato","visão","paladar"], explanation: "Nariz = olfato.", emoji: "👃" },
    { question: "Com qual sentido sentimos sabor?", options: ["paladar","tato","olfato","audição"], explanation: "Língua = paladar.", emoji: "👅" },
    { question: "O que as plantas precisam para crescer?", options: ["água, sol e terra","só água","só sol","açúcar"], explanation: "Sol + água + solo.", emoji: "🌱" },
    { question: "O que respiramos?", options: ["ar","água","areia","fogo"], explanation: "Inspiramos ar.", emoji: "🌬️" },
    { question: "Qual animal vive na água?", options: ["peixe","gato","cachorro","passarinho"], explanation: "Peixe.", emoji: "🐟" },
    { question: "Qual animal voa?", options: ["pássaro","peixe","cobra","jacaré"], explanation: "Pássaro tem asas.", emoji: "🐦" },
    { question: "Como o filhote do cachorro se chama?", options: ["cãozinho","gatinho","potro","bezerro"], explanation: "Cãozinho/cachorrinho.", emoji: "🐕" },
    { question: "O Sol é uma…", options: ["estrela","planeta","lua","nuvem"], explanation: "Estrela mais próxima.", emoji: "⭐" },
    { question: "A Lua aparece principalmente…", options: ["à noite","só ao meio-dia","só ao amanhecer","nunca"], explanation: "Vemos melhor à noite.", emoji: "🌙" },
    { question: "Qual é o estado da água no copo?", options: ["líquido","sólido","gasoso","gel"], explanation: "Líquida.", emoji: "💧" },
    { question: "Para escovar os dentes precisamos de…", options: ["escova e pasta","só água","apenas pasta","só toalha"], explanation: "Escova + creme dental.", emoji: "🪥" },
    { question: "O que protege nosso corpo por fora?", options: ["pele","ossos","sangue","cabelo só"], explanation: "Pele é o maior órgão.", emoji: "🧴" },
    { question: "Quantas pernas tem uma aranha?", options: ["8","6","4","10"], explanation: "Aranhas têm 8 patas.", emoji: "🕷️" },
    { question: "Quantas patas tem um inseto?", options: ["6","8","4","2"], explanation: "Insetos têm 6.", emoji: "🐜" },
    { question: "O que faz o lixo orgânico?", options: ["vira adubo","vira plástico","some sozinho","vira vidro"], explanation: "Decompõe e adubo.", emoji: "🍃" },
    { question: "Onde guardamos comida fresca?", options: ["geladeira","forno","armário quente","sol"], explanation: "Geladeira conserva.", emoji: "🧊" },
  ],
  "CI-m": [
    { question: "Qual é o estado da água em forma de gelo?", options: ["sólido","líquido","gasoso","plasma"], explanation: "Gelo é sólido.", emoji: "🧊" },
    { question: "Em qual planeta nós vivemos?", options: ["Terra","Marte","Júpiter","Vênus"], explanation: "Vivemos na Terra.", emoji: "🌍" },
    { question: "Plantas produzem alimento por qual processo?", options: ["fotossíntese","respiração","digestão","evaporação"], explanation: "Usa luz do Sol.", emoji: "🌱" },
    { question: "Aproximadamente quantos ossos tem um adulto?", options: ["206","100","150","300"], explanation: "Cerca de 206.", emoji: "🦴" },
    { question: "Qual órgão bombeia o sangue?", options: ["coração","fígado","pulmão","rim"], explanation: "Coração.", emoji: "❤️" },
    { question: "Qual órgão respira?", options: ["pulmão","estômago","coração","fígado"], explanation: "Pulmões.", emoji: "🫁" },
    { question: "Animal que mama na mãe é…", options: ["mamífero","réptil","ave","peixe"], explanation: "Mamífero.", emoji: "🐄" },
    { question: "Animal que põe ovo e tem penas é…", options: ["ave","mamífero","réptil","peixe"], explanation: "Aves.", emoji: "🐔" },
    { question: "Cobra é um…", options: ["réptil","anfíbio","mamífero","ave"], explanation: "Réptil.", emoji: "🐍" },
    { question: "Sapo é um…", options: ["anfíbio","réptil","peixe","mamífero"], explanation: "Anfíbio.", emoji: "🐸" },
    { question: "Quantos planetas tem o Sistema Solar?", options: ["8","9","7","10"], explanation: "8 planetas.", emoji: "🪐" },
    { question: "Qual é o planeta mais próximo do Sol?", options: ["Mercúrio","Vênus","Terra","Marte"], explanation: "Mercúrio.", emoji: "☀️" },
    { question: "O movimento da Terra ao redor do Sol é a…", options: ["translação","rotação","órbita lunar","precessão"], explanation: "Translação = ano.", emoji: "🌍" },
    { question: "Dia e noite acontecem por causa da…", options: ["rotação","translação","Lua","gravidade"], explanation: "Rotação = 24 h.", emoji: "🌗" },
    { question: "Qual é a parte da planta que prende no solo?", options: ["raiz","folha","flor","fruto"], explanation: "Raiz.", emoji: "🌱" },
    { question: "Qual parte da planta vira semente?", options: ["fruto","raiz","folha","caule"], explanation: "Fruto guarda sementes.", emoji: "🍎" },
    { question: "Energia do alimento vem em forma de…", options: ["calorias","watts","ampères","newtons"], explanation: "Caloria.", emoji: "🍞" },
    { question: "Qual é uma fonte de energia renovável?", options: ["solar","petróleo","carvão","gás natural"], explanation: "Sol é renovável.", emoji: "🔆" },
    { question: "Cadeia alimentar começa nos…", options: ["produtores (plantas)","consumidores","decompositores","carnívoros"], explanation: "Plantas fazem fotossíntese.", emoji: "🌾" },
    { question: "Quem decompõe a matéria morta?", options: ["fungos e bactérias","leões","aves","peixes"], explanation: "Decompositores.", emoji: "🍄" },
    { question: "O ciclo da água inclui…", options: ["evaporação e condensação","só chuva","só rios","só mar"], explanation: "Vapor → nuvem → chuva.", emoji: "🌧️" },
    { question: "O que é matéria?", options: ["tudo que tem massa e ocupa espaço","só sólidos","só líquidos","só luz"], explanation: "Tudo que existe fisicamente.", emoji: "🧱" },
    { question: "Imã atrai principalmente…", options: ["ferro","plástico","madeira","vidro"], explanation: "Metais ferromagnéticos.", emoji: "🧲" },
    { question: "Som se propaga pelo…", options: ["ar","vácuo","vazio","escuro"], explanation: "Precisa de meio material.", emoji: "🔊" },
    { question: "Sombra se forma quando…", options: ["luz é bloqueada","não há luz","há muita luz","chove"], explanation: "Objeto opaco.", emoji: "👤" },
  ],
  "CI-f": [
    { question: "Qual é a fórmula da água?", options: ["H₂O","CO₂","O₂","NaCl"], explanation: "2 H + 1 O.", emoji: "💧" },
    { question: "Qual organela faz respiração celular?", options: ["mitocôndria","núcleo","ribossomo","lisossomo"], explanation: "Produz ATP.", emoji: "🔬" },
    { question: "Qual organela faz fotossíntese?", options: ["cloroplasto","mitocôndria","núcleo","vacúolo"], explanation: "Tem clorofila.", emoji: "🌿" },
    { question: "Qual é a unidade de força no SI?", options: ["Newton","Joule","Watt","Pascal"], explanation: "F = m·a.", emoji: "⚙️" },
    { question: "Qual é a unidade de energia no SI?", options: ["Joule","Newton","Watt","Volt"], explanation: "Joule = energia.", emoji: "⚡" },
    { question: "Qual é a unidade de potência no SI?", options: ["Watt","Joule","Newton","Hertz"], explanation: "W = J/s.", emoji: "💡" },
    { question: "Qual partícula tem carga negativa?", options: ["elétron","próton","nêutron","fóton"], explanation: "Elétron é negativo.", emoji: "⚛️" },
    { question: "Qual partícula tem carga positiva?", options: ["próton","elétron","nêutron","fóton"], explanation: "Próton é positivo.", emoji: "⚛️" },
    { question: "Qual é o pH neutro?", options: ["7","0","14","1"], explanation: "pH 7 = neutro.", emoji: "🧪" },
    { question: "pH menor que 7 indica…", options: ["ácido","básico","neutro","salino"], explanation: "Ácido.", emoji: "🍋" },
    { question: "Em F = m·a, 'a' é…", options: ["aceleração","área","altura","ângulo"], explanation: "2ª Lei de Newton.", emoji: "🚀" },
    { question: "Onda sonora é onda…", options: ["mecânica","eletromagnética","luminosa","gravitacional"], explanation: "Precisa de meio.", emoji: "🔊" },
    { question: "Luz é onda…", options: ["eletromagnética","mecânica","sonora","térmica"], explanation: "Propaga no vácuo.", emoji: "💡" },
    { question: "DNA está localizado principalmente no…", options: ["núcleo da célula","citoplasma","mitocôndria só","membrana"], explanation: "Núcleo.", emoji: "🧬" },
    { question: "Mendel é considerado pai da…", options: ["Genética","Química","Física","Astronomia"], explanation: "Leis de Mendel.", emoji: "🌱" },
    { question: "Reino dos seres unicelulares procariontes é…", options: ["Monera","Protista","Fungi","Animalia"], explanation: "Bactérias.", emoji: "🦠" },
    { question: "Tabela periódica é organizada por…", options: ["número atômico","massa atômica só","cor","densidade"], explanation: "Número de prótons.", emoji: "🧪" },
    { question: "H₂SO₄ é um(a)…", options: ["ácido","base","sal","óxido"], explanation: "Ácido sulfúrico.", emoji: "⚗️" },
    { question: "NaCl popularmente é…", options: ["sal de cozinha","açúcar","bicarbonato","vinagre"], explanation: "Cloreto de sódio.", emoji: "🧂" },
    { question: "Sistema responsável pela digestão começa na…", options: ["boca","estômago","intestino","esôfago"], explanation: "Mastigação inicia.", emoji: "👄" },
    { question: "Velocidade da luz no vácuo é cerca de…", options: ["3·10⁸ m/s","3·10⁵ m/s","1·10⁸ m/s","3·10¹⁰ m/s"], explanation: "≈300.000 km/s.", emoji: "💡" },
    { question: "Gás liberado na fotossíntese é…", options: ["oxigênio","gás carbônico","nitrogênio","hélio"], explanation: "O₂.", emoji: "🌬️" },
    { question: "Efeito estufa é causado por gases como…", options: ["CO₂","O₂","N₂","He"], explanation: "Gás carbônico.", emoji: "🌡️" },
    { question: "Sistema nervoso central inclui…", options: ["encéfalo e medula","nervos só","coração","pulmão"], explanation: "SNC.", emoji: "🧠" },
    { question: "Qual é a função das hemácias?", options: ["transportar O₂","defesa","coagulação","digestão"], explanation: "Glóbulos vermelhos.", emoji: "🩸" },
  ],

  // ============ GEOGRAFIA ============
  "GE-i": [
    { question: "Onde o Sol nasce?", options: ["leste","oeste","norte","sul"], explanation: "Nasce a leste.", emoji: "🌅" },
    { question: "Onde o Sol se põe?", options: ["oeste","leste","sul","norte"], explanation: "Se põe a oeste.", emoji: "🌇" },
    { question: "Como chamamos o lugar grande onde vivemos juntos?", options: ["cidade","planeta só","sala","rua só"], explanation: "Cidade.", emoji: "🏙️" },
    { question: "O que separa a calçada da rua?", options: ["meio-fio","muro","rio","ponte"], explanation: "Meio-fio.", emoji: "🛣️" },
    { question: "Local com muitas árvores e animais é…", options: ["floresta","cidade","praia só","deserto"], explanation: "Floresta.", emoji: "🌳" },
    { question: "Lugar com muita areia e pouca água é…", options: ["deserto","selva","praia só","montanha"], explanation: "Deserto.", emoji: "🏜️" },
    { question: "Lugar muito alto é…", options: ["montanha","vale","planície","ilha"], explanation: "Montanha.", emoji: "⛰️" },
    { question: "Por onde os carros andam?", options: ["rua","calçada","casa","jardim"], explanation: "Carros na rua.", emoji: "🚗" },
    { question: "Onde as crianças andam a pé com segurança?", options: ["calçada","rua","faixa amarela","trilho"], explanation: "Calçada.", emoji: "🚶" },
  ],
  "GE-m": [
    { question: "Quantos continentes existem?", options: ["6","5","7","4"], explanation: "São 6.", emoji: "🌍" },
    { question: "Qual é a capital do Brasil?", options: ["Brasília","São Paulo","Rio de Janeiro","Salvador"], explanation: "Desde 1960.", emoji: "🏛️" },
    { question: "Brasil fica em qual continente?", options: ["América do Sul","Europa","África","Ásia"], explanation: "Am. do Sul.", emoji: "🌎" },
    { question: "Qual é o maior país da América do Sul?", options: ["Brasil","Argentina","Peru","Colômbia"], explanation: "Em área.", emoji: "🇧🇷" },
    { question: "O que um mapa político mostra?", options: ["fronteiras de países","relevo","clima","vegetação"], explanation: "Divisões.", emoji: "🗺️" },
    { question: "O que um mapa físico mostra?", options: ["relevo e rios","países","cidades","capitais"], explanation: "Aspectos naturais.", emoji: "⛰️" },
    { question: "Qual é o maior bioma brasileiro?", options: ["Amazônia","Cerrado","Caatinga","Pampa"], explanation: "Amazônia.", emoji: "🌳" },
    { question: "Bioma típico do Nordeste seco é…", options: ["Caatinga","Mata Atlântica","Pampa","Pantanal"], explanation: "Caatinga.", emoji: "🌵" },
    { question: "Quantas regiões tem o Brasil?", options: ["5","4","6","7"], explanation: "N, NE, CO, SE, S.", emoji: "🗺️" },
    { question: "São Paulo é capital de qual estado?", options: ["São Paulo","Rio de Janeiro","Minas Gerais","Bahia"], explanation: "SP.", emoji: "🏙️" },
    { question: "Qual cor representa rios em mapas?", options: ["azul","verde","marrom","amarelo"], explanation: "Água = azul.", emoji: "💧" },
    { question: "Pontos cardeais são…", options: ["N, S, L, O","NE, NO","cima e baixo","frente e trás"], explanation: "4 pontos.", emoji: "🧭" },
    { question: "Linha do Equador divide a Terra em…", options: ["Hemisférios N e S","Hemisférios L e O","três partes","quatro partes"], explanation: "Norte e Sul.", emoji: "🌐" },
    { question: "Zona rural é caracterizada por…", options: ["plantações e poucas casas","prédios e trânsito","metrô","shopping"], explanation: "Campo.", emoji: "🚜" },
    { question: "Zona urbana tem…", options: ["muitos prédios e serviços","só plantações","só florestas","só praias"], explanation: "Cidade.", emoji: "🏙️" },
  ],
  "GE-f": [
    { question: "Qual oceano banha o leste do Brasil?", options: ["Atlântico","Pacífico","Índico","Ártico"], explanation: "Atlântico.", emoji: "🌊" },
    { question: "Qual é a maior bacia hidrográfica do mundo?", options: ["Amazônica","Nilo","Mississippi","Congo"], explanation: "Amazônica.", emoji: "💦" },
    { question: "O que é êxodo rural?", options: ["saída do campo para a cidade","migração internacional","turismo","viagem de férias"], explanation: "Campo → cidade.", emoji: "🚜" },
    { question: "Linha imaginária que divide N e S?", options: ["Equador","Greenwich","Trópico de Capricórnio","Polo Norte"], explanation: "Linha do Equador.", emoji: "🌐" },
    { question: "Linha que divide Leste e Oeste?", options: ["Meridiano de Greenwich","Equador","Eixo","Capricórnio"], explanation: "Greenwich.", emoji: "🗺️" },
    { question: "Clima predominante na Amazônia é…", options: ["equatorial úmido","semiárido","temperado","polar"], explanation: "Quente e úmido.", emoji: "🌧️" },
    { question: "Clima do Nordeste interior é…", options: ["semiárido","equatorial","tropical de altitude","subtropical"], explanation: "Caatinga.", emoji: "☀️" },
    { question: "Maior produtor de café do Brasil é o estado de…", options: ["Minas Gerais","Bahia","Paraná","Rio de Janeiro"], explanation: "MG lidera.", emoji: "☕" },
    { question: "ONU significa…", options: ["Organização das Nações Unidas","Org. Norte-Universal","Org. Nacional Única","União Nórdica"], explanation: "Desde 1945.", emoji: "🌍" },
    { question: "Mercosul é um bloco de qual região?", options: ["América do Sul","Europa","Ásia","África"], explanation: "BR/AR/UY/PY.", emoji: "🤝" },
    { question: "Capital do Japão?", options: ["Tóquio","Pequim","Seul","Bangkok"], explanation: "Tóquio.", emoji: "🇯🇵" },
    { question: "Maior deserto quente do mundo?", options: ["Saara","Gobi","Atacama","Kalahari"], explanation: "Norte da África.", emoji: "🏜️" },
    { question: "Cordilheira que atravessa a Am. do Sul?", options: ["Andes","Alpes","Himalaia","Rochosas"], explanation: "Andes.", emoji: "⛰️" },
    { question: "Maior bioma do mundo?", options: ["Floresta Boreal/Taiga","Amazônia","Tundra","Pampa"], explanation: "Taiga.", emoji: "🌲" },
    { question: "Setor primário inclui…", options: ["agricultura e mineração","indústrias","serviços","tecnologia"], explanation: "Matéria-prima.", emoji: "🌾" },
    { question: "Setor terciário é…", options: ["serviços e comércio","agricultura","indústria","extração"], explanation: "Serviços.", emoji: "🛒" },
    { question: "Globalização significa…", options: ["integração mundial econômica e cultural","isolamento","regionalismo","nacionalismo extremo"], explanation: "Integração.", emoji: "🌐" },
    { question: "PIB mede…", options: ["produção econômica do país","população só","área","clima"], explanation: "Produto Interno Bruto.", emoji: "📊" },
    { question: "Qual é o relevo plano e baixo?", options: ["planície","montanha","planalto","depressão"], explanation: "Planície.", emoji: "🌾" },
  ],

  // ============ HISTÓRIA ============
  "HI-i": [
    { question: "Quem cuida de você em casa?", options: ["família","escola","cidade","trânsito"], explanation: "A família.", emoji: "👨‍👩‍👧" },
    { question: "Quem ensina na escola?", options: ["professor","médico","piloto","cozinheiro"], explanation: "Professor(a).", emoji: "👩‍🏫" },
    { question: "Sua história começa…", options: ["quando você nasceu","na escola","quando andou","quando falou"], explanation: "Nascimento.", emoji: "👶" },
    { question: "Brinquedos antigos eram feitos principalmente de…", options: ["madeira e pano","plástico","metal só","vidro"], explanation: "Materiais simples.", emoji: "🪀" },
    { question: "Quem viveu antes de nós?", options: ["nossos antepassados","ninguém","só animais","robôs"], explanation: "Avós, bisavós etc.", emoji: "👵" },
  ],
  "HI-m": [
    { question: "Quem chegou ao Brasil em 1500?", options: ["Pedro Álvares Cabral","Cristóvão Colombo","Vasco da Gama","Tiradentes"], explanation: "Cabral, 1500.", emoji: "⛵" },
    { question: "O que é um povo indígena?", options: ["povo originário","imigrantes","colonizadores","viajantes"], explanation: "Já viviam aqui.", emoji: "🏹" },
    { question: "Quem trouxe pessoas escravizadas para o Brasil?", options: ["colonizadores europeus","indígenas","asiáticos","americanos"], explanation: "Tráfico atlântico.", emoji: "⛓️" },
    { question: "A primeira capital do Brasil foi…", options: ["Salvador","Rio de Janeiro","Brasília","São Paulo"], explanation: "Salvador, 1549.", emoji: "🏛️" },
    { question: "Quem comandava o Brasil colônia?", options: ["Portugal","Espanha","França","Inglaterra"], explanation: "Coroa portuguesa.", emoji: "👑" },
    { question: "O dia 19 de abril celebra…", options: ["povos indígenas","independência","abolição","república"], explanation: "Dia dos Povos Indígenas.", emoji: "🪶" },
    { question: "Bandeirantes eram…", options: ["exploradores do interior","reis","padres","marinheiros"], explanation: "Expediam-se ao sertão.", emoji: "🥾" },
    { question: "Engenho de açúcar produzia…", options: ["açúcar e melaço","café","ouro","tecidos"], explanation: "Cana-de-açúcar.", emoji: "🍬" },
  ],
  "HI-f": [
    { question: "Ano da Independência do Brasil?", options: ["1822","1500","1889","1808"], explanation: "1822.", emoji: "🇧🇷" },
    { question: "Quem construiu as pirâmides de Gizé?", options: ["Antigo Egito","Roma","Grécia","Maias"], explanation: "Egípcios.", emoji: "🔺" },
    { question: "A Revolução Francesa ocorreu em qual século?", options: ["XVIII","XVII","XIX","XX"], explanation: "1789.", emoji: "🗡️" },
    { question: "Primeira presidenta do Brasil?", options: ["Dilma Rousseff","Marta Suplicy","Eva Perón","Tereza Cristina"], explanation: "Dilma, 2011.", emoji: "🏛️" },
    { question: "Abolição da escravidão no Brasil ocorreu em…", options: ["1888","1822","1500","1930"], explanation: "Lei Áurea.", emoji: "✊" },
    { question: "Proclamação da República brasileira foi em…", options: ["1889","1822","1888","1930"], explanation: "15/11/1889.", emoji: "🏛️" },
    { question: "II Guerra Mundial terminou em…", options: ["1945","1918","1939","1950"], explanation: "Set/1945.", emoji: "🕊️" },
    { question: "Quem foi Getúlio Vargas?", options: ["presidente do Brasil","rei de Portugal","ditador alemão","general francês"], explanation: "1930-45 e 51-54.", emoji: "👔" },
    { question: "Revolução Industrial começou em…", options: ["Inglaterra","França","EUA","Alemanha"], explanation: "Séc. XVIII.", emoji: "🏭" },
    { question: "Grécia Antiga é berço da…", options: ["democracia","república romana","monarquia inglesa","feudalismo"], explanation: "Atenas.", emoji: "🏛️" },
    { question: "Idade Média situa-se entre…", options: ["séc. V e XV","séc. I e V","séc. XV e XVIII","séc. XVIII e XX"], explanation: "476 a 1453.", emoji: "🏰" },
    { question: "Renascimento começou na…", options: ["Itália","França","Espanha","Alemanha"], explanation: "Séc. XIV.", emoji: "🎨" },
    { question: "Ditadura militar no Brasil durou…", options: ["1964-1985","1930-1945","1985-2000","1822-1889"], explanation: "21 anos.", emoji: "📜" },
    { question: "Constituição cidadã brasileira é de…", options: ["1988","1822","1946","1967"], explanation: "5/10/1988.", emoji: "📖" },
    { question: "Quem foi Tiradentes?", options: ["líder da Inconfidência Mineira","presidente","rei","general francês"], explanation: "Mártir da Independência.", emoji: "⚔️" },
  ],

  // ============ ENSINO RELIGIOSO ============
  "ER-i": [
    { question: "Como devemos tratar os colegas?", options: ["com respeito","com gritos","ignorando","empurrando"], explanation: "Com respeito.", emoji: "🤝" },
    { question: "O que é compartilhar?", options: ["dividir com os outros","guardar tudo só pra si","esconder","jogar fora"], explanation: "Repartir.", emoji: "🍪" },
    { question: "Quando alguém está triste podemos…", options: ["consolar","rir","ignorar","brigar"], explanation: "Acolher.", emoji: "🤗" },
  ],
  "ER-m": [
    { question: "O que é diversidade religiosa?", options: ["existência de várias religiões","uma única religião","ausência de fé","obrigação"], explanation: "Coexistência.", emoji: "🕊️" },
    { question: "Respeitar o outro significa…", options: ["aceitar diferenças","obrigar igualdade","ignorar","criticar"], explanation: "Tolerância.", emoji: "🤝" },
    { question: "Símbolo associado ao cristianismo é…", options: ["cruz","estrela de Davi","crescente","roda do dharma"], explanation: "Cruz.", emoji: "✝️" },
    { question: "Símbolo associado ao judaísmo é…", options: ["estrela de Davi","cruz","crescente","ankh"], explanation: "Estrela de Davi.", emoji: "✡️" },
  ],
  "ER-f": [
    { question: "O que é Estado laico?", options: ["separação entre Estado e religião","religião oficial","obrigatoriedade religiosa","proibição de fé"], explanation: "Estado neutro.", emoji: "⚖️" },
    { question: "Religiões de matriz africana incluem…", options: ["Candomblé e Umbanda","Budismo","Hinduísmo","Xintoísmo"], explanation: "Origem africana/afro-brasileira.", emoji: "🪘" },
    { question: "Direitos humanos garantem…", options: ["dignidade a toda pessoa","privilégios a poucos","só direitos econômicos","só direitos políticos"], explanation: "Universalidade.", emoji: "🌍" },
  ],

  // ============ ARTE ============
  "AR-i": [
    { question: "Qual destas é cor primária?", options: ["vermelho","verde","roxo","laranja"], explanation: "Vermelho, azul, amarelo.", emoji: "🎨" },
    { question: "Quantas notas musicais há na escala básica?", options: ["7","5","8","10"], explanation: "Dó a Si.", emoji: "🎵" },
    { question: "Misturando azul e amarelo temos…", options: ["verde","roxo","laranja","preto"], explanation: "Verde.", emoji: "💚" },
    { question: "Misturando vermelho e amarelo temos…", options: ["laranja","verde","roxo","azul"], explanation: "Laranja.", emoji: "🧡" },
    { question: "Misturando azul e vermelho temos…", options: ["roxo","verde","laranja","marrom"], explanation: "Roxo.", emoji: "💜" },
  ],
  "AR-m": [
    { question: "Qual instrumento é de corda?", options: ["violão","tambor","flauta","triângulo"], explanation: "Violão tem cordas.", emoji: "🎸" },
    { question: "Qual instrumento é de sopro?", options: ["flauta","violão","piano","bateria"], explanation: "Toca-se soprando.", emoji: "🎶" },
    { question: "Quem pintou a Mona Lisa?", options: ["Leonardo da Vinci","Picasso","Van Gogh","Michelangelo"], explanation: "Da Vinci.", emoji: "🖼️" },
    { question: "Quem pintou 'A Noite Estrelada'?", options: ["Van Gogh","Picasso","Monet","Dalí"], explanation: "Van Gogh, 1889.", emoji: "🌌" },
    { question: "Tarsila do Amaral é uma artista…", options: ["modernista brasileira","barroca","romântica europeia","renascentista"], explanation: "Modernismo.", emoji: "🎨" },
  ],
  "AR-f": [
    { question: "Qual movimento Picasso ajudou a criar?", options: ["Cubismo","Impressionismo","Romantismo","Realismo"], explanation: "Picasso e Braque.", emoji: "🎨" },
    { question: "Frevo, samba e forró são…", options: ["danças brasileiras","danças europeias","esportes","comidas"], explanation: "Cultura brasileira.", emoji: "💃" },
    { question: "Impressionismo surgiu na…", options: ["França","Espanha","Itália","Inglaterra"], explanation: "Séc. XIX.", emoji: "🖌️" },
    { question: "Bossa nova é gênero musical…", options: ["brasileiro","americano","cubano","francês"], explanation: "Anos 1950 RJ.", emoji: "🎷" },
    { question: "Aleijadinho foi um artista do…", options: ["Barroco mineiro","Modernismo","Renascimento","Cubismo"], explanation: "Séc. XVIII.", emoji: "⛪" },
  ],

  // ============ EDUCAÇÃO FÍSICA ============
  "EF-i": [
    { question: "Antes de praticar esporte devemos…", options: ["aquecer","comer muito","dormir","ficar parado"], explanation: "Aquecer evita lesão.", emoji: "🏃" },
    { question: "Quantos jogadores tem um time de futebol em campo?", options: ["11","7","5","9"], explanation: "11 por time.", emoji: "⚽" },
    { question: "Para ter saúde precisamos de…", options: ["atividade e alimentação boa","só dormir","só TV","só doces"], explanation: "Hábitos saudáveis.", emoji: "💪" },
    { question: "Brincar de pega-pega trabalha principalmente…", options: ["corrida","leitura","desenho","canto"], explanation: "Correr.", emoji: "🏃" },
  ],
  "EF-m": [
    { question: "Vôlei se joga com…", options: ["as mãos","os pés","a cabeça","raquetes"], explanation: "Mãos e braços.", emoji: "🏐" },
    { question: "Qual é uma capacidade física?", options: ["força","cor","som","cheiro"], explanation: "Força.", emoji: "💪" },
    { question: "Quantos jogadores de basquete em quadra por time?", options: ["5","6","7","11"], explanation: "5 por time.", emoji: "🏀" },
    { question: "Qual esporte usa rede e bolinha amarela?", options: ["tênis","basquete","futebol","handebol"], explanation: "Tênis.", emoji: "🎾" },
  ],
  "EF-f": [
    { question: "Quantos pontos vale uma cesta de 3 no basquete?", options: ["3","2","1","4"], explanation: "Linha de 3.", emoji: "🏀" },
    { question: "Qual esporte usa peteca e raquete?", options: ["badminton","tênis","vôlei","handebol"], explanation: "Badminton.", emoji: "🏸" },
    { question: "Maratona oficial tem cerca de…", options: ["42 km","21 km","10 km","100 km"], explanation: "42,195 km.", emoji: "🏃" },
    { question: "Olimpíadas modernas começaram em…", options: ["1896","1900","1936","1500"], explanation: "Atenas, 1896.", emoji: "🏅" },
  ],

  // ============ LÍNGUA INGLESA ============
  "LI-i": [
    { question: "Como se diz 'casa' em inglês?", options: ["house","dog","car","book"], explanation: "House = casa.", emoji: "🏠" },
    { question: "Como se diz 'cachorro' em inglês?", options: ["dog","cat","cow","pig"], explanation: "Dog.", emoji: "🐶" },
    { question: "Como se diz 'gato' em inglês?", options: ["cat","dog","rat","bat"], explanation: "Cat.", emoji: "🐱" },
  ],
  "LI-m": [
    { question: "'Apple' significa…", options: ["maçã","banana","uva","laranja"], explanation: "Apple = maçã.", emoji: "🍎" },
    { question: "Como se diz 'olá' em inglês?", options: ["hello","goodbye","please","thanks"], explanation: "Hello = olá.", emoji: "👋" },
    { question: "Como se diz 'obrigado' em inglês?", options: ["thank you","please","sorry","welcome"], explanation: "Thank you.", emoji: "🙏" },
    { question: "Como se diz 'água' em inglês?", options: ["water","fire","wind","earth"], explanation: "Water.", emoji: "💧" },
    { question: "'Cat' significa…", options: ["gato","cachorro","rato","vaca"], explanation: "Cat = gato.", emoji: "🐱" },
    { question: "Como se diz 'livro' em inglês?", options: ["book","pen","chair","door"], explanation: "Book.", emoji: "📚" },
    { question: "Como se diz 'amigo' em inglês?", options: ["friend","brother","teacher","family"], explanation: "Friend.", emoji: "🧑‍🤝‍🧑" },
  ],
  "LI-f": [
    { question: "Passado de 'go'?", options: ["went","goed","gone","going"], explanation: "Verbo irregular.", emoji: "📘" },
    { question: "'I ___ a student' — qual verbo?", options: ["am","is","are","be"], explanation: "1ª pessoa: am.", emoji: "🎓" },
    { question: "Como se diz 'segunda-feira' em inglês?", options: ["Monday","Sunday","Friday","Tuesday"], explanation: "Monday.", emoji: "📅" },
    { question: "Plural de 'child'?", options: ["children","childs","childes","child"], explanation: "Irregular.", emoji: "👶" },
    { question: "'She ___ to school every day' — qual verbo?", options: ["goes","go","going","gone"], explanation: "3ª pess.: goes.", emoji: "🏫" },
    { question: "Passado de 'eat'?", options: ["ate","eated","eaten","eating"], explanation: "Irregular.", emoji: "🍽️" },
    { question: "Passado de 'see'?", options: ["saw","seed","seen","seeing"], explanation: "Irregular.", emoji: "👀" },
    { question: "'They ___ playing now' — qual verbo?", options: ["are","is","am","be"], explanation: "Plural: are.", emoji: "⚽" },
    { question: "Como se diz 'amanhã' em inglês?", options: ["tomorrow","yesterday","today","tonight"], explanation: "Tomorrow.", emoji: "📆" },
    { question: "'Beautiful' significa…", options: ["bonito(a)","feio","grande","pequeno"], explanation: "Bonito.", emoji: "🌸" },
    { question: "Comparativo de 'good'?", options: ["better","gooder","best","more good"], explanation: "Irregular: better.", emoji: "👍" },
    { question: "Superlativo de 'big'?", options: ["the biggest","more big","biggerer","most big"], explanation: "Big-bigger-biggest.", emoji: "🐘" },
  ],
};

const DISC_MAP: Record<string, DiscKey> = {
  "matemática": "MA", "matematica": "MA",
  "língua portuguesa": "LP", "lingua portuguesa": "LP",
  "português": "LP", "portugues": "LP",
  "ciências": "CI", "ciencias": "CI",
  "geografia": "GE",
  "história": "HI", "historia": "HI",
  "ensino religioso": "ER",
  "arte": "AR", "artes": "AR",
  "educação física": "EF", "educacao fisica": "EF",
  "língua inglesa": "LI", "lingua inglesa": "LI",
  "inglês": "LI", "ingles": "LI",
};

function hash32(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function discKey(disciplina: string): DiscKey {
  const k = (disciplina || "").trim().toLowerCase();
  return DISC_MAP[k] ?? "LP";
}

function faixa(codigo: string | null | undefined, serie: string | null | undefined): Faixa {
  const c = (codigo || "").toUpperCase();
  if (c.startsWith("EM")) return "em";
  // EF + 2 dígitos: pode ser ano único (01..09) ou faixa (12, 35, 67, 89)
  const m = c.match(/^EF(\d)(\d)/);
  if (m) {
    const a = parseInt(m[1]!, 10);
    const b = parseInt(m[2]!, 10);
    // Se for faixa (a != 0 e b > a), usa o maior ano
    const ano = a === 0 ? b : Math.max(a, b);
    if (ano <= 2) return "i";
    if (ano <= 5) return "m";
    if (ano <= 9) return "f";
  }
  const s = (serie || "").toLowerCase();
  if (s.includes("médio") || s.includes("medio")) return "em";
  if (s.includes("1º") || s.includes("2º") || s.includes("1 ano") || s.includes("2 ano")) return "i";
  if (/[6789]º/.test(s)) return "f";
  return "m";
}

export type SynthDesafio = {
  question: string;
  options: { letter: "A" | "B" | "C" | "D"; text: string; isCorrect: boolean }[];
  explanation: string;
  emoji: string;
};

export function synthesizeDesafio(
  codigo: string,
  disciplina: string,
  serie: string,
): SynthDesafio {
  const dk = discKey(disciplina);
  const fx = faixa(codigo, serie);
  const items =
    BANK[`${dk}-${fx}`] ?? BANK[`${dk}-m`] ?? BANK[`${dk}-f`] ?? BANK["LP-m"]!;

  const h = hash32(codigo + "|q");
  const q = items[h % items.length]!;

  // Embaralhamento determinístico das alternativas
  const idx = [0, 1, 2, 3];
  let h2 = hash32(codigo + "|shuf");
  for (let i = 3; i > 0; i--) {
    const j = h2 % (i + 1);
    h2 = Math.floor(h2 / (i + 1));
    [idx[i], idx[j]] = [idx[j]!, idx[i]!];
  }
  const letters: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
  const options = idx.map((k, pos) => ({
    letter: letters[pos]!,
    text: q.options[k as 0 | 1 | 2 | 3]!,
    isCorrect: k === 0,
  }));

  return { question: q.question, options, explanation: q.explanation, emoji: q.emoji };
}

// Detecta se o desafio salvo é o template genérico antigo
export function isGenericDesafio(desafio: any): boolean {
  if (!desafio || !desafio.options || !desafio.options.length) return true;
  const first = desafio.options[0]?.text;
  return (
    first === "Aplicar a ideia principal da aula em uma situação real." ||
    first === "Opção A"
  );
}
