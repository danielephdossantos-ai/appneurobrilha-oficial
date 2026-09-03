import type { AulaV4 } from "../../types";

type DadosAula = {
  slug: string; titulo: string; icone: string; bncc: string;
  historia: string; exploracao: string[]; perguntaGuia: string; pista: string; revelacao: string;
  etapas: Array<{ texto: string; contexto: string; destaque: string }>;
  modelo: { enunciado: string; passos: string[]; resposta: string };
  guiada: { enunciado: string; dica: string; opcoes: string[]; certa: string; acerto: string; erro: string };
  independente: { enunciado: string; opcoes: string[]; certa: string; acerto: string; erro: string };
  aplicacao: { contexto: string; problema: string; opcoes: string[]; certa: string; acerto: string; erro: string };
  revisao: string[];
  avaliacao: Array<{ pergunta: string; opcoes: string[]; correta: number; feedback: string }>;
  missao: { titulo: string; passos: string[] };
};

const criarAula = (dados: DadosAula): AulaV4 => ({
  slug: dados.slug,
  titulo: dados.titulo,
  iconeTrilha: dados.icone,
  bncc: [dados.bncc],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp", "rme"],
  momento01_motivacao: { titulo: dados.titulo, historia: dados.historia },
  momento02_exploracao: { instrucao: "Observe, represente e explique.", cenas: dados.exploracao.map((texto, indice) => ({ tipo: "texto" as const, texto, destaque: indice === 0 })) },
  momento03_descoberta: { perguntaGuia: dados.perguntaGuia, pista: dados.pista, revelacao: dados.revelacao },
  momento04_explicacao: { titulo: "Entender antes de calcular", etapas: dados.etapas.map((etapa) => ({ texto: etapa.texto, exemploReal: { contexto: etapa.contexto, destaque: etapa.destaque } })) },
  momento05_modelagem: { enunciado: dados.modelo.enunciado, passos: dados.modelo.passos, resposta: dados.modelo.resposta },
  momento06_praticaGuiada: { enunciado: dados.guiada.enunciado, dica: dados.guiada.dica, interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: dados.guiada.opcoes.map((nome) => ({ nome })), respostaCerta: dados.guiada.certa, feedbackAcerto: dados.guiada.acerto, feedbackErro: dados.guiada.erro } },
  momento07_praticaIndependente: { enunciado: dados.independente.enunciado, interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: dados.independente.opcoes.map((nome) => ({ nome })), respostaCerta: dados.independente.certa, feedbackAcerto: dados.independente.acerto, feedbackErro: dados.independente.erro } },
  momento08_aplicacao: { contexto: dados.aplicacao.contexto, problema: dados.aplicacao.problema, interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: dados.aplicacao.opcoes.map((nome) => ({ nome })), respostaCerta: dados.aplicacao.certa, feedbackAcerto: dados.aplicacao.acerto, feedbackErro: dados.aplicacao.erro } },
  momento09_revisao: { pontos: dados.revisao },
  momento10_avaliacao: { perguntas: dados.avaliacao.map((item) => ({ pergunta: item.pergunta, opcoes: item.opcoes, correta: item.correta, feedbackAcerto: `🎉 ${item.feedback}`, feedbackErro: item.feedback })) },
  momento11_missaoFamilia: { titulo: dados.missao.titulo, materiais: ["Papel", "Lápis"], passos: dados.missao.passos, registro: "📸 Foto do registro." },
  recompensa: { xp: 220, moedas: 110 },
});

export const aula07_principioMultiplicativo = criarAula({
  slug: "u2-07-principio-multiplicativo", titulo: "Combinações e princípio multiplicativo", icone: "🌳", bncc: "EF05MA09",
  historia: "{NOME}, quando cada opção de um grupo pode ser combinada com todas as opções de outro, podemos organizar as possibilidades numa árvore ou tabela e multiplicar as quantidades.",
  exploracao: ["2 camisetas e 3 bermudas formam 2 × 3 = 6 combinações.", "A árvore de possibilidades abre 3 ramos de bermuda para cada uma das 2 camisetas."],
  perguntaGuia: "Por que somar 2 + 3 não conta os conjuntos completos?", pista: "Cada camiseta combina com cada bermuda.", revelacao: "Somar conta as peças separadas. Multiplicar conta os pares possíveis: 2 grupos de 3 combinações = 6.",
  etapas: [{ texto: "Liste as escolhas por etapas.", contexto: "Sabores: chocolate e morango; coberturas: mel, frutas e coco.", destaque: "2 × 3 = 6 sobremesas." }, { texto: "Use tabela ou diagrama de árvore para não repetir nem esquecer possibilidades.", contexto: "Cada linha representa um sabor e cada coluna uma cobertura.", destaque: "Cada cruzamento é uma combinação." }],
  modelo: { enunciado: "3 bonés e 4 camisetas: quantos conjuntos diferentes?", passos: ["Cada boné combina com 4 camisetas.", "São 3 grupos de 4: 3 × 4."], resposta: "12 conjuntos" },
  guiada: { enunciado: "2 tipos de pão e 4 recheios.", dica: "Cada pão combina com todos os recheios.", opcoes: ["8", "6", "4", "2"], certa: "8", acerto: "🎯 2 × 4 = 8.", erro: "Desenhe 4 ramos para cada um dos 2 pães." },
  independente: { enunciado: "3 caminhos de ida e 2 de volta. Quantos pares de trajetos?", opcoes: ["6", "5", "3", "2"], certa: "6", acerto: "🎯 3 × 2 = 6.", erro: "Combine cada ida com as duas voltas." },
  aplicacao: { contexto: "Um avatar pode usar 4 chapéus e 3 camisetas.", problema: "Quantos visuais diferentes?", opcoes: ["12", "7", "4", "3"], certa: "12", acerto: "🎯 4 × 3 = 12.", erro: "Cada chapéu combina com as três camisetas." },
  revisao: ["Identifique as etapas de escolha.", "Multiplique o número de opções de cada etapa.", "Confira com árvore ou tabela."],
  avaliacao: [{ pergunta: "2 sucos e 5 lanches formam:", opcoes: ["10", "7", "5"], correta: 0, feedback: "2 × 5 = 10." }, { pergunta: "4 cores e 2 tamanhos formam:", opcoes: ["8", "6", "4"], correta: 0, feedback: "4 × 2 = 8." }, { pergunta: "3 entradas e 3 saídas formam:", opcoes: ["9", "6", "3"], correta: 0, feedback: "3 × 3 = 9." }],
  missao: { titulo: "Árvore de combinações", passos: ["Escolha 2 tipos de fruta e 3 acompanhamentos.", "Desenhe todas as combinações numa árvore.", "Confirme o total por multiplicação."] },
});

export const aula08_equivalenciaIgualdade = criarAula({
  slug: "u2-08-equivalencia-igualdade", titulo: "Igualdade que permanece equilibrada", icone: "⚖️", bncc: "EF05MA10",
  historia: "{NOME}, o sinal de igual afirma que os dois membros têm o mesmo valor. Se fizermos a mesma operação nos dois lados, com uma divisão por número diferente de zero, o equilíbrio permanece.",
  exploracao: ["12 = 12. Somando 5 aos dois lados: 17 = 17.", "18 = 18. Dividindo os dois lados por 3: 6 = 6."],
  perguntaGuia: "Se 8 + 4 = 12, podemos somar 3 apenas ao lado esquerdo e manter a igualdade?", pista: "Compare os novos valores.", revelacao: "Não. Um lado viraria 15 e o outro continuaria 12. A mesma transformação deve ocorrer nos dois membros.",
  etapas: [{ texto: "Adicionar ou subtrair o mesmo número mantém a igualdade.", contexto: "20 = 20; 20 − 7 = 20 − 7.", destaque: "13 = 13." }, { texto: "Multiplicar ou dividir ambos os membros pelo mesmo número também mantém a igualdade; na divisão, o número não pode ser zero.", contexto: "9 = 9; 9 × 4 = 9 × 4.", destaque: "36 = 36." }],
  modelo: { enunciado: "Parta de 15 = 15 e multiplique os dois membros por 3.", passos: ["Esquerda: 15 × 3 = 45.", "Direita: 15 × 3 = 45."], resposta: "45 = 45" },
  guiada: { enunciado: "10 = 10. Some 6 aos dois lados.", dica: "Faça a mesma conta em ambos.", opcoes: ["16 = 16", "16 = 10", "10 = 16", "6 = 6"], certa: "16 = 16", acerto: "🎯 O equilíbrio foi preservado.", erro: "Some 6 tanto à esquerda quanto à direita." },
  independente: { enunciado: "24 = 24. Divida os dois lados por 6.", opcoes: ["4 = 4", "18 = 24", "4 = 24", "6 = 6"], certa: "4 = 4", acerto: "🎯 24 ÷ 6 = 4.", erro: "Divida os dois membros pelo mesmo número." },
  aplicacao: { contexto: "Uma balança tem 30 blocos de valor em cada lado.", problema: "Retirando 8 de cada lado, que igualdade resta?", opcoes: ["22 = 22", "30 = 22", "22 = 30", "8 = 8"], certa: "22 = 22", acerto: "🎯 Mesma retirada, equilíbrio mantido.", erro: "30 − 8 deve ser calculado nos dois lados." },
  revisao: ["Igual significa mesmo valor.", "Faça a mesma operação nos dois membros.", "Nunca divida por zero."],
  avaliacao: [{ pergunta: "7 = 7; somando 4 aos dois lados:", opcoes: ["11 = 11", "11 = 7", "7 = 11"], correta: 0, feedback: "11 = 11." }, { pergunta: "5 = 5; multiplicando por 6:", opcoes: ["30 = 30", "11 = 11", "30 = 5"], correta: 0, feedback: "30 = 30." }, { pergunta: "40 = 40; dividindo por 8:", opcoes: ["5 = 5", "32 = 40", "8 = 8"], correta: 0, feedback: "5 = 5." }],
  missao: { titulo: "Balança de igualdades", passos: ["Escreva três igualdades verdadeiras.", "Aplique a mesma operação nos dois membros.", "Confirme que os valores continuam iguais."] },
});

export const aula09_termoDesconhecido = criarAula({
  slug: "u2-09-termo-desconhecido", titulo: "Descobrir o termo desconhecido", icone: "❓", bncc: "EF05MA11",
  historia: "{NOME}, uma caixa ou símbolo pode representar um número desconhecido. Para encontrá-lo, use a operação inversa e depois confira na igualdade original.",
  exploracao: ["□ + 18 = 45. Então □ = 45 − 18 = 27.", "6 × □ = 42. Então □ = 42 ÷ 6 = 7."],
  perguntaGuia: "Qual número completa □ − 9 = 20?", pista: "Qual número menos 9 resulta em 20?", revelacao: "20 + 9 = 29. Conferindo: 29 − 9 = 20.",
  etapas: [{ texto: "Isole o valor desconhecido usando a operação inversa.", contexto: "□ + 35 = 80.", destaque: "□ = 80 − 35 = 45." }, { texto: "Substitua a resposta para conferir.", contexto: "5 × □ = 60; □ = 12.", destaque: "5 × 12 = 60." }],
  modelo: { enunciado: "□ ÷ 4 = 9.", passos: ["A operação inversa da divisão é multiplicação.", "9 × 4 = 36.", "Confira: 36 ÷ 4 = 9."], resposta: "□ = 36" },
  guiada: { enunciado: "□ + 26 = 70.", dica: "Use 70 − 26.", opcoes: ["44", "96", "54", "36"], certa: "44", acerto: "🎯 44 + 26 = 70.", erro: "Subtraia 26 do total 70." },
  independente: { enunciado: "8 × □ = 72.", opcoes: ["9", "8", "64", "80"], certa: "9", acerto: "🎯 72 ÷ 8 = 9.", erro: "Use a divisão como operação inversa." },
  aplicacao: { contexto: "Uma caixa tinha algumas figurinhas. Depois de ganhar 17, ficou com 50.", problema: "Quantas havia antes?", opcoes: ["33", "67", "43", "27"], certa: "33", acerto: "🎯 33 + 17 = 50.", erro: "Quantidade inicial + 17 = 50." },
  revisao: ["Represente o desconhecido por uma caixa.", "Use a operação inversa.", "Confira substituindo o valor encontrado."],
  avaliacao: [{ pergunta: "□ + 15 = 40:", opcoes: ["25", "55", "35"], correta: 0, feedback: "40 − 15 = 25." }, { pergunta: "□ − 12 = 30:", opcoes: ["42", "18", "32"], correta: 0, feedback: "30 + 12 = 42." }, { pergunta: "7 × □ = 56:", opcoes: ["8", "7", "49"], correta: 0, feedback: "56 ÷ 7 = 8." }],
  missao: { titulo: "Caixas misteriosas", passos: ["Crie quatro igualdades com uma caixa desconhecida.", "Resolva cada uma por operação inversa.", "Confira as respostas."] },
});

export const aula10_proporcionalidadeDireta = criarAula({
  slug: "u2-10-proporcionalidade-direta", titulo: "Grandezas diretamente proporcionais", icone: "📈", bncc: "EF05MA12",
  historia: "{NOME}, em uma relação diretamente proporcional, multiplicar uma quantidade por um fator multiplica a outra pelo mesmo fator.",
  exploracao: ["1 caderno custa R$ 6; 2 custam R$ 12; 4 custam R$ 24.", "Dobrou a quantidade, dobrou o preço, mantendo o preço por unidade."],
  perguntaGuia: "Se 3 copos de farinha fazem uma receita, quantos fazem duas receitas iguais?", pista: "Duas receitas significam multiplicar tudo por 2.", revelacao: "3 × 2 = 6 copos. Todos os ingredientes precisam usar o mesmo fator.",
  etapas: [{ texto: "Descubra o fator que alterou uma grandeza e aplique-o à outra.", contexto: "2 ingressos custam R$ 30; 6 ingressos são 3 vezes mais.", destaque: "R$ 30 × 3 = R$ 90." }, { texto: "Uma tabela ajuda a conferir a razão constante por unidade.", contexto: "1 kg: R$ 8; 2 kg: R$ 16; 5 kg: R$ 40.", destaque: "Preço por kg permanece R$ 8." }],
  modelo: { enunciado: "Uma receita para 4 pessoas usa 2 xícaras. Para 12 pessoas?", passos: ["12 é 3 vezes 4.", "Multiplique 2 pelo mesmo fator 3."], resposta: "6 xícaras" },
  guiada: { enunciado: "3 lápis custam R$ 9. Quanto custam 6?", dica: "A quantidade dobrou.", opcoes: ["R$ 18", "R$ 12", "R$ 27", "R$ 9"], certa: "R$ 18", acerto: "🎯 Dobrou a quantidade e o preço.", erro: "6 é o dobro de 3; dobre R$ 9." },
  independente: { enunciado: "5 metros de fita custam R$ 20. Quanto custam 15 metros?", opcoes: ["R$ 60", "R$ 40", "R$ 35", "R$ 75"], certa: "R$ 60", acerto: "🎯 15 é 3 vezes 5; 20 × 3 = 60.", erro: "Aplique o mesmo fator 3 ao preço." },
  aplicacao: { contexto: "Num mapa, 1 cm representa 5 km.", problema: "Uma distância de 4 cm representa quantos quilômetros?", opcoes: ["20 km", "9 km", "25 km", "4 km"], certa: "20 km", acerto: "🎯 4 × 5 = 20 km.", erro: "Cada centímetro representa 5 km." },
  revisao: ["Encontre o fator de mudança.", "Aplique o mesmo fator às duas grandezas.", "Confira se a razão por unidade permanece constante."],
  avaliacao: [{ pergunta: "2 caixas custam R$ 14; 6 custam:", opcoes: ["R$ 42", "R$ 28", "R$ 20"], correta: 0, feedback: "6 é 3 vezes 2; 14 × 3 = 42." }, { pergunta: "Receita de 3 pessoas usa 6 ovos; para 6 pessoas:", opcoes: ["12", "9", "18"], correta: 0, feedback: "Dobrou: 12 ovos." }, { pergunta: "1 cm representa 8 km; 5 cm representam:", opcoes: ["40 km", "13 km", "8 km"], correta: 0, feedback: "5 × 8 = 40 km." }],
  missao: { titulo: "Tabela proporcional", passos: ["Escolha um produto com preço por unidade.", "Monte uma tabela para 1, 2, 3 e 4 unidades.", "Mostre o fator usado em cada linha."] },
});

export const aula11_partilhaDesigual = criarAula({
  slug: "u2-11-partilha-desigual", titulo: "Partilha em partes desiguais", icone: "🧩", bncc: "EF05MA13",
  historia: "{NOME}, numa partilha desigual, uma parte pode ser o dobro ou o triplo da outra. Primeiro contamos quantas partes iguais existem na relação.",
  exploracao: ["Dividir 36 em duas partes, uma sendo o dobro da outra: menor = 1 parte; maior = 2 partes.", "Ao todo são 3 partes iguais. 36 ÷ 3 = 12; então as partes são 12 e 24."],
  perguntaGuia: "Como dividir 45 em duas partes, sendo uma o dobro da outra?", pista: "Represente 1 parte + 2 partes.", revelacao: "São 3 partes: 45 ÷ 3 = 15. A menor é 15 e a maior é 30.",
  etapas: [{ texto: "Transforme a relação em partes iguais.", contexto: "Uma parte é o triplo da outra.", destaque: "1 parte + 3 partes = 4 partes ao todo." }, { texto: "Divida o total pelo número de partes e reconstrua cada parcela.", contexto: "Total 80, relação 1 para 3.", destaque: "80 ÷ 4 = 20; parcelas 20 e 60." }],
  modelo: { enunciado: "Divida 72 em duas partes, sendo uma o dobro da outra.", passos: ["Relação: 1 parte + 2 partes = 3.", "72 ÷ 3 = 24.", "Maior: 2 × 24 = 48.", "Confira: 24 + 48 = 72."], resposta: "24 e 48" },
  guiada: { enunciado: "Divida 60 em duas partes, uma sendo o dobro da outra.", dica: "Total de 3 partes iguais.", opcoes: ["20 e 40", "30 e 30", "15 e 45", "10 e 50"], certa: "20 e 40", acerto: "🎯 20 + 40 = 60 e 40 é o dobro de 20.", erro: "Calcule 60 ÷ 3 para achar a parte menor." },
  independente: { enunciado: "Divida 100 na razão 1 para 4.", opcoes: ["20 e 80", "25 e 75", "10 e 90", "40 e 60"], certa: "20 e 80", acerto: "🎯 5 partes; 100 ÷ 5 = 20.", erro: "1 + 4 = 5 partes iguais." },
  aplicacao: { contexto: "Dois grupos organizaram 90 livros; o segundo organizou o dobro do primeiro.", problema: "Quantos livros cada grupo organizou?", opcoes: ["30 e 60", "45 e 45", "20 e 70", "40 e 50"], certa: "30 e 60", acerto: "🎯 90 ÷ 3 = 30; dobro = 60.", erro: "Represente os grupos por 1 parte e 2 partes." },
  revisao: ["Converta a relação em partes iguais.", "Divida o total pelo número de partes.", "Monte as parcelas e confira soma e razão."],
  avaliacao: [{ pergunta: "48 na razão 1:3:", opcoes: ["12 e 36", "16 e 32", "24 e 24"], correta: 0, feedback: "4 partes: 48 ÷ 4 = 12." }, { pergunta: "75, uma parte sendo o dobro da outra:", opcoes: ["25 e 50", "30 e 45", "15 e 60"], correta: 0, feedback: "3 partes: 75 ÷ 3 = 25." }, { pergunta: "84 na razão 2:5:", opcoes: ["24 e 60", "28 e 56", "12 e 72"], correta: 0, feedback: "7 partes: 84 ÷ 7 = 12; 24 e 60." }],
  missao: { titulo: "Partilhas explicadas", passos: ["Crie uma partilha na razão 1:2 e outra na razão 1:3.", "Resolva usando desenho de partes.", "Confira a soma e a relação entre as parcelas."] },
});
