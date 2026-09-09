import type { CursoEI } from "../curso-portugues-ei/types";
import { criarAulaMatematicaEI } from "./matematica-pre1";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as circulo } from "@/assets/neuro-treino/objetos/circulo.png.asset.json";
import { url as quadrado } from "@/assets/neuro-treino/objetos/quadrado.png.asset.json";
import { url as triangulo } from "@/assets/neuro-treino/objetos/triangulo.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as folha } from "@/assets/neuro-treino/objetos/planta-pequena.png.asset.json";

const aula01 = criarAulaMatematicaEI({
  slug: "mat-pre2-01-contar-ate-dez",
  titulo: "Contar até dez",
  icone: "🔟",
  bncc: ["EI03ET07"],
  falaInicial: "Hoje a contagem continua até dez. Vamos organizar os objetos em duas fileiras de cinco para não pular nem repetir nenhum.",
  momentosEnsino: [
    { tipo: "contarBolas", imagemUrl: bola, quantidade: 5, itemSingular: "bola", itemPlural: "bolas", instrucaoAudio: "Conte a primeira fileira: um, dois, três, quatro, cinco.", elogio: "A primeira parte tem cinco bolas." },
    { tipo: "contarBolas", imagemUrl: bola, quantidade: 6, itemSingular: "bola", itemPlural: "bolas", instrucaoAudio: "Depois do cinco vem o seis. Toca uma vez em cada bola.", elogio: "Seis é cinco e mais uma." },
    { tipo: "contarBolas", imagemUrl: estrela, quantidade: 8, itemSingular: "estrela", itemPlural: "estrelas", instrucaoAudio: "Conte devagar até oito, acompanhando cada estrela com o dedo.", elogio: "Oito foi o último número e mostra o total." },
    { tipo: "contarBolas", imagemUrl: maca, quantidade: 10, itemSingular: "maçã", itemPlural: "maçãs", instrucaoAudio: "Conte duas partes de cinco: cinco e mais cinco chegam a dez.", elogio: "Dez objetos podem ser organizados em dois grupos de cinco." },
    { tipo: "compararGrupos", instrucaoAudio: "Conte os dois grupos antes de escolher.", perguntaAudio: "Qual grupo tem MAIS bolas?", imagemUrl: bola, itemPlural: "bolas", alvo: "mais", opcoes: [{ qtd: 6, correta: false }, { qtd: 9, correta: true }], feedbackAcerto: "Nove é maior do que seis, então o grupo de nove tem mais.", feedbackErro: "Continue a contagem. O grupo que chega ao maior número tem mais." },
    { tipo: "historiaIlustrada", titulo: "A caixa de dez", cenas: [{ imagemUrl: maca, narracao: "A primeira fileira recebeu cinco maçãs." }, { imagemUrl: maca, narracao: "A segunda fileira recebeu outras cinco maçãs." }, { imagemUrl: maca, narracao: "Cinco e cinco completaram a caixa com dez maçãs." }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual opção mostra dez maçãs?", opcoes: [{ nome: "seis maçãs", imagemUrl: maca, quantidade: 6, correta: false }, { nome: "oito maçãs", imagemUrl: maca, quantidade: 8, correta: false }, { nome: "dez maçãs", imagemUrl: maca, quantidade: 10, correta: true }, { nome: "cinco maçãs", imagemUrl: maca, quantidade: 5, correta: false }], feedbackAcerto: "Dez! Você pode conferir formando dois grupos de cinco.", feedbackErro: "Organize mentalmente em duas fileiras de cinco. Cinco e cinco formam dez." },
  ],
  conviteCorpo: "Mostre as duas mãos abertas e conte os dez dedos, um por vez.",
  imagemCorpo: estrela,
  missao: "Separe dez objetos em duas fileiras de cinco e conte novamente.",
  dicaAdulto: "Incentive organização espacial e correspondência um a um; corrija pulos na sequência sem acelerar.",
  medalha: "Contador até Dez",
  baseCientifica: "Contagem estável até dez, cardinalidade e organização em grupos de cinco para reduzir a carga de memória.",
});

const aula02 = criarAulaMatematicaEI({
  slug: "mat-pre2-02-formar-quantidades",
  titulo: "Partes que formam um total",
  icone: "🧩",
  bncc: ["EI03ET07"],
  falaInicial: "Uma quantidade pode ser montada com partes diferentes. Vamos juntar dois grupos e conferir contando o total.",
  momentosEnsino: [
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: estrela, itemPlural: "estrelas", a: 2, b: 3, instrucaoAudio: "Junte duas estrelas com três estrelas e conte todas.", elogio: "Duas e três formam cinco." },
    { tipo: "contarBolas", imagemUrl: estrela, quantidade: 5, itemSingular: "estrela", itemPlural: "estrelas", instrucaoAudio: "Confira o total contando desde o um.", elogio: "A contagem termina no cinco." },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: bola, itemPlural: "bolas", a: 4, b: 2, instrucaoAudio: "Junte quatro bolas com duas bolas. Conte o grupo completo.", elogio: "Quatro e duas formam seis." },
    { tipo: "contarBolas", imagemUrl: bola, quantidade: 6, itemSingular: "bola", itemPlural: "bolas", instrucaoAudio: "Toque uma vez em cada bola para confirmar.", elogio: "O total é seis." },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: flor, itemPlural: "flores", a: 5, b: 3, instrucaoAudio: "Comece nas cinco flores e acrescente três: seis, sete, oito.", elogio: "Cinco e três formam oito." },
    { tipo: "historiaIlustrada", titulo: "Os dois cestos", cenas: [{ imagemUrl: banana, narracao: "Um cesto tinha três bananas." }, { imagemUrl: banana, narracao: "O outro cesto tinha duas bananas." }, { imagemUrl: banana, narracao: "Juntando os cestos, três e duas formaram cinco bananas." }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Três maçãs com mais duas maçãs formam qual total?", opcoes: [{ nome: "quatro maçãs", imagemUrl: maca, quantidade: 4, correta: false }, { nome: "cinco maçãs", imagemUrl: maca, quantidade: 5, correta: true }, { nome: "seis maçãs", imagemUrl: maca, quantidade: 6, correta: false }, { nome: "três maçãs", imagemUrl: maca, quantidade: 3, correta: false }], feedbackAcerto: "Cinco! Conte três e continue com mais duas: quatro, cinco.", feedbackErro: "Comece no três e conte mais duas: quatro, cinco." },
  ],
  conviteCorpo: "Mostre dois dedos em uma mão e três na outra. Junte as mãos e conte cinco.",
  imagemCorpo: bola,
  missao: "Monte o total seis de duas maneiras diferentes, usando brinquedos.",
  dicaAdulto: "Aceite composições diferentes, como um e cinco, dois e quatro ou três e três, e peça a conferência por contagem.",
  medalha: "Construtor de Quantidades",
  baseCientifica: "Composição de pequenas quantidades, contagem a partir de uma parte e flexibilidade numérica inicial.",
});

const aula03 = criarAulaMatematicaEI({
  slug: "mat-pre2-03-retirar-um",
  titulo: "Retirar um",
  icone: "➖",
  bncc: ["EI03ET07"],
  falaInicial: "Retirar um é tirar um objeto do grupo. O total passa a ser o número que vem imediatamente antes.",
  momentosEnsino: [
    { tipo: "contarBolas", imagemUrl: maca, quantidade: 5, itemSingular: "maçã", itemPlural: "maçãs", instrucaoAudio: "Conte o grupo antes de retirar: uma, duas, três, quatro, cinco.", elogio: "O grupo começa com cinco." },
    { tipo: "operacaoVisual", operacao: "subtracao", imagemUrl: maca, itemPlural: "maçãs", a: 5, b: 1, instrucaoAudio: "Havia cinco maçãs. Retire uma e conte as que ficaram.", elogio: "Cinco menos uma deixa quatro." },
    { tipo: "contarBolas", imagemUrl: maca, quantidade: 4, itemSingular: "maçã", itemPlural: "maçãs", instrucaoAudio: "Confira as maçãs que sobraram.", elogio: "Depois de retirar uma de cinco, ficam quatro." },
    { tipo: "operacaoVisual", operacao: "subtracao", imagemUrl: bola, itemPlural: "bolas", a: 8, b: 1, instrucaoAudio: "Havia oito bolas. Uma saiu. O número anterior ao oito é sete.", elogio: "Oito menos uma deixa sete." },
    { tipo: "contarBolas", imagemUrl: bola, quantidade: 7, itemSingular: "bola", itemPlural: "bolas", instrucaoAudio: "Conte as sete bolas restantes para conferir.", elogio: "A contagem confirma o total sete." },
    { tipo: "historiaIlustrada", titulo: "A banana do coelho", cenas: [{ imagemUrl: banana, narracao: "O coelho separou seis bananas." }, { imagemUrl: coelho, narracao: "Ele comeu uma banana; uma saiu do grupo." }, { imagemUrl: banana, narracao: "O número antes do seis é cinco. Restaram cinco bananas." }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Havia sete estrelas e uma foi retirada. Quantas ficaram?", opcoes: [{ nome: "oito estrelas", imagemUrl: estrela, quantidade: 8, correta: false }, { nome: "cinco estrelas", imagemUrl: estrela, quantidade: 5, correta: false }, { nome: "seis estrelas", imagemUrl: estrela, quantidade: 6, correta: true }, { nome: "sete estrelas", imagemUrl: estrela, quantidade: 7, correta: false }], feedbackAcerto: "Seis! O número que vem antes do sete é seis.", feedbackErro: "Retirar faz a quantidade diminuir. Volte um número a partir do sete: seis." },
  ],
  conviteCorpo: "Mostre cinco dedos, abaixe um e conte os quatro que ficaram.",
  imagemCorpo: coelho,
  missao: "Comece com oito objetos, retire um e explique quantos ficaram.",
  dicaAdulto: "Deixe a criança retirar fisicamente o objeto e sempre conferir o restante por contagem.",
  medalha: "Investigador do Menos Um",
  baseCientifica: "Subtração como retirada concreta, sequência numérica regressiva de uma unidade e verificação por contagem.",
});

const aula04 = criarAulaMatematicaEI({
  slug: "mat-pre2-04-comparar-ate-dez",
  titulo: "Comparar até dez",
  icone: "📊",
  bncc: ["EI03ET01", "EI03ET07"],
  falaInicial: "Para comparar grupos maiores, organize, conte e observe qual total é maior, menor ou igual.",
  momentosEnsino: [
    { tipo: "ensinoMagnitude", grupoA: { qtd: 7, imagemUrl: estrela, rotulo: "sete estrelas" }, grupoB: { qtd: 5, imagemUrl: estrela, rotulo: "cinco estrelas" }, itemPlural: "estrelas", alvo: "mais", falaModelagem: "Conto sete no primeiro grupo e cinco no segundo. Sete vem depois do cinco, então sete é maior e tem MAIS.", mascoteUrl: brilha, elogio: "Você comparou usando a sequência dos números." },
    { tipo: "pareamento1a1", grupoA: { qtd: 6, imagemUrl: flor }, grupoB: { qtd: 4, imagemUrl: bola }, itemPlural: "objetos", instrucaoAudio: "Forme pares entre flores e bolas e observe o que sobra.", conclusao: "Sobram duas flores. O grupo com sobras tem mais.", elogio: "O pareamento confirmou a comparação." },
    { tipo: "compararGrupos", instrucaoAudio: "Conte os dois grupos.", perguntaAudio: "Qual grupo tem MAIS bolas?", imagemUrl: bola, itemPlural: "bolas", alvo: "mais", opcoes: [{ qtd: 7, correta: true }, { qtd: 4, correta: false }], feedbackAcerto: "Sete é maior do que quatro.", feedbackErro: "Compare os números finais da contagem: sete vem depois do quatro." },
    { tipo: "compararGrupos", instrucaoAudio: "Agora escolha a menor quantidade.", perguntaAudio: "Qual grupo tem MENOS flores?", imagemUrl: flor, itemPlural: "flores", alvo: "menos", opcoes: [{ qtd: 9, correta: false }, { qtd: 6, correta: true }], feedbackAcerto: "Seis é menor do que nove.", feedbackErro: "Menos é o menor total. Seis vem antes do nove." },
    { tipo: "ensinoMagnitude", grupoA: { qtd: 5, imagemUrl: maca, rotulo: "cinco maçãs" }, grupoB: { qtd: 5, imagemUrl: maca, rotulo: "cinco maçãs" }, itemPlural: "maçãs", alvo: "igual", falaModelagem: "Os dois grupos terminam a contagem no cinco. Quando os totais são os mesmos, as quantidades são IGUAIS.", mascoteUrl: brilha, elogio: "Igual significa ter a mesma quantidade." },
    { tipo: "historiaIlustrada", titulo: "As mesas da festa", cenas: [{ imagemUrl: bola, narracao: "Na mesa azul havia seis bolas." }, { imagemUrl: bola, narracao: "Na mesa amarela também havia seis bolas." }, { imagemUrl: bola, narracao: "Seis e seis são totais iguais. Nenhuma mesa tinha mais." }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual opção mostra a MENOR quantidade?", opcoes: [{ nome: "nove estrelas", imagemUrl: estrela, quantidade: 9, correta: false }, { nome: "sete estrelas", imagemUrl: estrela, quantidade: 7, correta: false }, { nome: "quatro estrelas", imagemUrl: estrela, quantidade: 4, correta: true }, { nome: "seis estrelas", imagemUrl: estrela, quantidade: 6, correta: false }], feedbackAcerto: "Quatro é o menor total entre as opções.", feedbackErro: "Conte os grupos e procure o número que aparece primeiro na sequência." },
  ],
  conviteCorpo: "Mostre sete dedos e depois quatro. Diga qual quantidade é maior.",
  imagemCorpo: estrela,
  missao: "Monte dois grupos com a mesma quantidade e um terceiro com menos.",
  dicaAdulto: "Peça que a criança use as palavras mais, menos e igual e justifique contando.",
  medalha: "Comparador até Dez",
  baseCientifica: "Comparação numérica, pareamento um a um, igualdade e linguagem relacional explícita.",
});

const aula05 = criarAulaMatematicaEI({
  slug: "mat-pre2-05-duas-regras",
  titulo: "Classificar com duas regras",
  icone: "🧠",
  bncc: ["EI03ET05"],
  falaInicial: "Hoje a classificação usa duas pistas ao mesmo tempo. O objeto precisa combinar com a cor e com a forma pedidas.",
  momentosEnsino: [
    { tipo: "escutaRitmada", imagemUrl: circulo, versos: ["Primeira pista: observe a forma.", "Segunda pista: observe a cor.", "A resposta precisa seguir as duas pistas ao mesmo tempo."] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Revise as formas: círculo sem pontas, triângulo com três lados e quadrado com quatro.", itens: [{ nome: "círculo", imagemUrl: circulo }, { nome: "triângulo", imagemUrl: triangulo }, { nome: "quadrado", imagemUrl: quadrado }] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Revise as cores nos objetos: sol amarelo, folha verde e lua azul.", itens: [{ nome: "amarelo", imagemUrl: sol }, { nome: "verde", imagemUrl: folha }, { nome: "azul", imagemUrl: lua }] },
    { tipo: "compreensaoImagem", perguntaAudio: "A regra é: objeto amarelo e redondo. Qual combina com as duas pistas?", opcoes: [{ nome: "sol amarelo e redondo", imagemUrl: sol, correta: true }, { nome: "folha verde", imagemUrl: folha, correta: false }, { nome: "lua azul e redonda", imagemUrl: lua, correta: false }, { nome: "banana amarela e comprida", imagemUrl: banana, correta: false }], feedbackAcerto: "O sol é amarelo e redondo. Ele segue as duas regras.", feedbackErro: "Confira as duas pistas. Amarelo sozinho não basta; também precisa ser redondo." },
    { tipo: "compreensaoImagem", perguntaAudio: "A regra é: verde e com formato de folha. Qual combina?", opcoes: [{ nome: "sol amarelo", imagemUrl: sol, correta: false }, { nome: "folha verde", imagemUrl: folha, correta: true }, { nome: "lua azul", imagemUrl: lua, correta: false }, { nome: "maçã vermelha", imagemUrl: maca, correta: false }], feedbackAcerto: "A folha é verde e tem o formato pedido.", feedbackErro: "Observe primeiro a cor verde e depois confira o formato de folha." },
    { tipo: "historiaIlustrada", titulo: "O álbum das duas pistas", cenas: [{ imagemUrl: sol, narracao: "A primeira página aceitava coisas amarelas e redondas." }, { imagemUrl: folha, narracao: "A segunda aceitava coisas verdes com formato de folha." }, { imagemUrl: lua, narracao: "Cada figura precisava passar pelas duas pistas antes de entrar no álbum." }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Para o grupo azul e redondo, qual objeto entra?", opcoes: [{ nome: "lua azul e redonda", imagemUrl: lua, correta: true }, { nome: "sol amarelo e redondo", imagemUrl: sol, correta: false }, { nome: "folha verde", imagemUrl: folha, correta: false }, { nome: "maçã vermelha", imagemUrl: maca, correta: false }], feedbackAcerto: "A lua combina com azul e redondo ao mesmo tempo.", feedbackErro: "O objeto precisa cumprir as duas regras: ser azul e também redondo." },
  ],
  conviteCorpo: "Procure na roupa uma característica de cor e outra de forma ou tipo.",
  imagemCorpo: circulo,
  missao: "Escolha objetos e invente um grupo usando duas regras, como vermelho e pequeno.",
  dicaAdulto: "Peça que a criança diga as duas regras e explique por que cada objeto entra ou fica de fora.",
  medalha: "Detetive das Duas Pistas",
  baseCientifica: "Classificação conjuntiva por dois atributos, controle inibitório e explicitação verbal do critério.",
});

export const cursoMatematicaPre2: CursoEI = {
  slug: "matematica-ei-pre2",
  serie: "pre2",
  serieLabel: "Pré II (5 anos)",
  titulo: "Matemática Kawaii — Pré II",
  descricao: "Contagem até dez, composição, retirada, comparação e classificação com duas regras.",
  corPrimaria: "#ec4899",
  corSecundaria: "#7c3aed",
  mascoteUrl: brilha,
  unidades: [{ slug: "u1-numeros-e-regras", numero: 1, titulo: "Semana 1 · Números e estratégias", subtitulo: "Contar, compor, retirar, comparar e classificar", aulas: [aula01, aula02, aula03, aula04, aula05] }],
};
