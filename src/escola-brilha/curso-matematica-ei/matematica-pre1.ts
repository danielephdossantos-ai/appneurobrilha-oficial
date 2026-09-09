import type { AulaEI, CursoEI, MomentoEI } from "../curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as estrelas } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as circulo } from "@/assets/neuro-treino/objetos/circulo.png.asset.json";
import { url as quadrado } from "@/assets/neuro-treino/objetos/quadrado.png.asset.json";
import { url as triangulo } from "@/assets/neuro-treino/objetos/triangulo.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as folha } from "@/assets/neuro-treino/objetos/planta-pequena.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";

export interface AulaMatematicaEIInput {
  slug: string;
  titulo: string;
  icone: string;
  bncc: string[];
  falaInicial: string;
  momentosEnsino: MomentoEI[];
  conviteCorpo: string;
  imagemCorpo: string;
  missao: string;
  dicaAdulto: string;
  medalha: string;
  baseCientifica: string;
}

export function criarAulaMatematicaEI(input: AulaMatematicaEIInput): AulaEI {
  if (input.momentosEnsino.length !== 7) {
    throw new Error(`A aula ${input.slug} precisa de sete momentos de ensino e prática.`);
  }
  return {
    slug: input.slug,
    titulo: input.titulo,
    icone: input.icone,
    bncc: input.bncc,
    duracaoMin: 12,
    momentos: [
      { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: input.falaInicial },
      ...input.momentosEnsino,
      {
        tipo: "fazDeConta",
        imagemUrl: input.imagemCorpo,
        convite: input.conviteCorpo,
        dica: "Use o corpo para repetir o mesmo raciocínio visto nas imagens.",
      },
      {
        tipo: "missaoFamilia",
        titulo: "Matemática em casa",
        convite: input.missao,
        dicaAdulto: input.dicaAdulto,
      },
      {
        tipo: "celebracao",
        medalha: input.medalha,
        mascoteUrl: brilha,
        falaFinal: `Você aprendeu ${input.titulo.toLowerCase()} pensando, testando e explicando. Muito bem!`,
      },
    ],
    baseCientifica: input.baseCientifica,
  };
}

const aula01 = criarAulaMatematicaEI({
  slug: "mat-pre1-01-contar-ate-cinco",
  titulo: "Contar até cinco",
  icone: "🖐️",
  bncc: ["EI03ET07"],
  falaInicial: "Hoje vamos contar até cinco. A regra é tocar em cada objeto uma vez e dizer um número para cada toque.",
  momentosEnsino: [
    { tipo: "contarBolas", imagemUrl: bola, quantidade: 2, itemSingular: "bola", itemPlural: "bolas", instrucaoAudio: "Toca em cada bola uma vez: um, dois.", elogio: "Duas bolas. O último número, dois, conta o grupo inteiro." },
    { tipo: "contarBolas", imagemUrl: bola, quantidade: 3, itemSingular: "bola", itemPlural: "bolas", instrucaoAudio: "Agora continue sem pular nenhuma: um, dois, três.", elogio: "Três bolas. Cada bola recebeu um número." },
    { tipo: "contarBolas", imagemUrl: bola, quantidade: 5, itemSingular: "bola", itemPlural: "bolas", instrucaoAudio: "Toca devagar em cada bola: um, dois, três, quatro, cinco.", elogio: "Cinco bolas. Cinco foi o último número e mostra o total." },
    { tipo: "subitizingFlash", imagemUrl: estrela, quantidade: 4, itemPlural: "estrelas", instrucaoAudio: "Olhe o grupo por um instante e tente guardar a quantidade.", perguntaAudio: "Quantas estrelas você viu?", opcoes: [1, 2, 3, 4], feedbackAcerto: "Quatro! Você reconheceu o grupo.", feedbackErro: "Vamos organizar: duas estrelas em cima e duas embaixo. Duas e duas formam quatro.", duracaoFlashMs: 1800 },
    { tipo: "compararGrupos", instrucaoAudio: "Conte os dois grupos antes de escolher.", perguntaAudio: "Qual grupo tem MAIS bolas?", imagemUrl: bola, itemPlural: "bolas", alvo: "mais", opcoes: [{ qtd: 3, correta: false }, { qtd: 5, correta: true }], feedbackAcerto: "Cinco tem mais objetos do que três.", feedbackErro: "Conte novamente. O grupo que chega até cinco tem mais." },
    { tipo: "historiaIlustrada", titulo: "As cinco maçãs", cenas: [{ imagemUrl: maca, narracao: "Havia duas maçãs. Conte: uma, duas." }, { imagemUrl: maca, narracao: "Chegaram mais duas. Agora a contagem continua: três, quatro." }, { imagemUrl: maca, narracao: "Chegou mais uma. Quatro e mais uma formam cinco maçãs." }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual opção mostra a quantidade cinco?", opcoes: [{ nome: "uma maçã", imagemUrl: maca, quantidade: 1, correta: false }, { nome: "três maçãs", imagemUrl: maca, quantidade: 3, correta: false }, { nome: "cinco maçãs", imagemUrl: maca, quantidade: 5, correta: true }, { nome: "duas maçãs", imagemUrl: maca, quantidade: 2, correta: false }], feedbackAcerto: "Isso! Tocando uma vez em cada maçã, a contagem termina no cinco.", feedbackErro: "Conte cada maçã apenas uma vez e procure o grupo cuja contagem termina no cinco." },
  ],
  conviteCorpo: "Levante uma mão e conte os cinco dedos, tocando em um dedo por vez.",
  imagemCorpo: estrela,
  missao: "Separe cinco brinquedos e conte apontando para cada um.",
  dicaAdulto: "Observe se a criança faz correspondência um a um e não conta o mesmo objeto duas vezes.",
  medalha: "Contador até Cinco",
  baseCientifica: "Correspondência um a um, ordem estável e cardinalidade; progressão de contagem para crianças pequenas.",
});

const aula02 = criarAulaMatematicaEI({
  slug: "mat-pre1-02-mais-e-menos",
  titulo: "Mais e menos",
  icone: "⚖️",
  bncc: ["EI03ET01", "EI03ET07"],
  falaInicial: "Hoje vamos descobrir onde há mais e onde há menos. Primeiro contamos; depois comparamos os totais.",
  momentosEnsino: [
    { tipo: "ensinoMagnitude", grupoA: { qtd: 4, imagemUrl: flor, rotulo: "quatro flores" }, grupoB: { qtd: 2, imagemUrl: flor, rotulo: "duas flores" }, itemPlural: "flores", alvo: "mais", falaModelagem: "Neste grupo conto quatro flores. No outro conto duas. Quatro é maior do que dois, então quatro flores é MAIS.", mascoteUrl: brilha, elogio: "Contar os dois grupos ajuda a comparar sem adivinhar." },
    { tipo: "pareamento1a1", grupoA: { qtd: 4, imagemUrl: flor }, grupoB: { qtd: 2, imagemUrl: bola }, itemPlural: "objetos", instrucaoAudio: "Ligue uma flor a uma bola. Veja qual grupo fica com objetos sobrando.", conclusao: "Sobram duas flores. O grupo que sobra tem MAIS; o outro tem MENOS.", elogio: "Você comparou formando pares." },
    { tipo: "compararGrupos", instrucaoAudio: "Conte os grupos e procure o que tem mais.", perguntaAudio: "Qual grupo tem MAIS estrelas?", imagemUrl: estrela, itemPlural: "estrelas", alvo: "mais", opcoes: [{ qtd: 2, correta: false }, { qtd: 4, correta: true }], feedbackAcerto: "Quatro estrelas é mais do que duas.", feedbackErro: "Conte os dois lados. O lado que chega até quatro tem mais." },
    { tipo: "compararGrupos", instrucaoAudio: "Agora procure o grupo menor.", perguntaAudio: "Qual grupo tem MENOS bolas?", imagemUrl: bola, itemPlural: "bolas", alvo: "menos", opcoes: [{ qtd: 1, correta: true }, { qtd: 5, correta: false }], feedbackAcerto: "Uma bola é menos do que cinco.", feedbackErro: "Menos é o grupo com a menor quantidade. Um é menor do que cinco." },
    { tipo: "contraexemploTamanho", itemGrande: { imagemUrl: bola, nome: "uma bola grande" }, itemPequeno: { imagemUrl: estrela, nome: "estrelas pequenas", qtd: 4 }, perguntaAudio: "Há mais objetos no lado da bola grande ou no lado das estrelas pequenas?", falaEnsino: "O tamanho não decide a quantidade. Há uma bola, mas há quatro estrelas. Quatro objetos é mais do que um.", feedbackAcerto: "Certo! Mesmo pequenas, quatro estrelas são mais objetos.", feedbackErro: "Não olhe apenas o tamanho. Conte: uma bola e quatro estrelas." },
    { tipo: "historiaIlustrada", titulo: "Os dois vasos", cenas: [{ imagemUrl: flor, narracao: "No primeiro vaso havia uma flor." }, { imagemUrl: flor, narracao: "No segundo vaso contamos quatro flores: uma, duas, três, quatro." }, { imagemUrl: flor, narracao: "Quatro é mais do que um. Um é menos do que quatro." }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual opção tem MENOS flores?", opcoes: [{ nome: "quatro flores", imagemUrl: flor, quantidade: 4, correta: false }, { nome: "duas flores", imagemUrl: flor, quantidade: 2, correta: false }, { nome: "uma flor", imagemUrl: flor, quantidade: 1, correta: true }, { nome: "três flores", imagemUrl: flor, quantidade: 3, correta: false }], feedbackAcerto: "Uma flor é a menor quantidade. Ela tem menos.", feedbackErro: "Conte os grupos e procure o que termina no menor número." },
  ],
  conviteCorpo: "Mostre quatro dedos em uma mão e um dedo na outra. Qual mão mostra mais?",
  imagemCorpo: flor,
  missao: "Monte um grupo com dois objetos e outro com quatro. Diga qual tem mais e qual tem menos.",
  dicaAdulto: "Peça que a criança conte os grupos e explique a escolha; evite aceitar apenas o palpite visual.",
  medalha: "Comparador de Quantidades",
  baseCientifica: "Comparação de magnitude com contagem, correspondência um a um e controle do viés de tamanho.",
});

const aula03 = criarAulaMatematicaEI({
  slug: "mat-pre1-03-acrescentar-um",
  titulo: "Acrescentar mais um",
  icone: "➕",
  bncc: ["EI03ET07"],
  falaInicial: "Acrescentar um é colocar mais um objeto no grupo. O total passa a ser o próximo número da contagem.",
  momentosEnsino: [
    { tipo: "contarBolas", imagemUrl: maca, quantidade: 2, itemSingular: "maçã", itemPlural: "maçãs", instrucaoAudio: "Conte o grupo inicial: uma, duas maçãs.", elogio: "O grupo começa com duas maçãs." },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: maca, itemPlural: "maçãs", a: 2, b: 1, instrucaoAudio: "Temos duas maçãs e chega mais uma. Conte todas desde o começo.", elogio: "Duas e mais uma formam três maçãs." },
    { tipo: "contarBolas", imagemUrl: maca, quantidade: 3, itemSingular: "maçã", itemPlural: "maçãs", instrucaoAudio: "Confira o novo total: uma, duas, três.", elogio: "O próximo número depois de dois é três." },
    { tipo: "operacaoVisual", operacao: "soma", imagemUrl: bola, itemPlural: "bolas", a: 3, b: 1, instrucaoAudio: "Agora há três bolas e chega mais uma. Conte todas.", elogio: "Três e mais uma formam quatro bolas." },
    { tipo: "contarBolas", imagemUrl: bola, quantidade: 4, itemSingular: "bola", itemPlural: "bolas", instrucaoAudio: "Confira: uma, duas, três, quatro bolas.", elogio: "Quatro é o número que vem depois de três." },
    { tipo: "historiaIlustrada", titulo: "O lanche do coelho", cenas: [{ imagemUrl: banana, narracao: "O coelho tinha três bananas: uma, duas, três." }, { imagemUrl: coelho, narracao: "Ele encontrou mais uma banana." }, { imagemUrl: banana, narracao: "Contando tudo, três e mais uma formam quatro bananas." }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Se há quatro estrelas e chega mais uma, quantas ficam?", opcoes: [{ nome: "três estrelas", imagemUrl: estrela, quantidade: 3, correta: false }, { nome: "cinco estrelas", imagemUrl: estrela, quantidade: 5, correta: true }, { nome: "duas estrelas", imagemUrl: estrela, quantidade: 2, correta: false }, { nome: "quatro estrelas", imagemUrl: estrela, quantidade: 4, correta: false }], feedbackAcerto: "Cinco! Depois do quatro vem o cinco.", feedbackErro: "Comece com quatro e conte mais um: um, dois, três, quatro... cinco." },
  ],
  conviteCorpo: "Mostre três dedos. Levante mais um e conte todos: quatro.",
  imagemCorpo: coelho,
  missao: "Coloque três objetos na mesa, acrescente mais um e conte o novo total.",
  dicaAdulto: "Repita com totais até cinco e peça que a criança conte todos os objetos após acrescentar um.",
  medalha: "Descobridor do Mais Um",
  baseCientifica: "Estratégia de acrescentar um, sequência numérica e composição de pequenas quantidades com material concreto.",
});

const aula04 = criarAulaMatematicaEI({
  slug: "mat-pre1-04-formas-e-lados",
  titulo: "Formas e seus lados",
  icone: "🔷",
  bncc: ["EI03ET05"],
  falaInicial: "Hoje não basta decorar o nome. Vamos reconhecer cada forma pelas suas pistas: lados, cantos e contorno.",
  momentosEnsino: [
    { tipo: "escutaRitmada", imagemUrl: circulo, versos: ["O círculo tem contorno redondo e nenhuma ponta.", "O triângulo tem três lados e três cantos.", "O quadrado tem quatro lados e quatro cantos."] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca e repita as pistas de cada forma.", itens: [{ nome: "círculo sem pontas", imagemUrl: circulo }, { nome: "triângulo com três lados", imagemUrl: triangulo }, { nome: "quadrado com quatro lados", imagemUrl: quadrado }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual forma tem três lados e três cantos?", opcoes: [{ nome: "triângulo", imagemUrl: triangulo, correta: true }, { nome: "círculo", imagemUrl: circulo, correta: false }, { nome: "quadrado", imagemUrl: quadrado, correta: false }, { nome: "flor", imagemUrl: flor, correta: false }], feedbackAcerto: "O triângulo tem três lados e três cantos.", feedbackErro: "Conte os lados. Procure a forma cuja contagem termina no três." },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual forma tem quatro lados e quatro cantos?", opcoes: [{ nome: "círculo", imagemUrl: circulo, correta: false }, { nome: "triângulo", imagemUrl: triangulo, correta: false }, { nome: "quadrado", imagemUrl: quadrado, correta: true }, { nome: "estrela", imagemUrl: estrela, correta: false }], feedbackAcerto: "O quadrado tem quatro lados e quatro cantos.", feedbackErro: "Acompanhe o contorno e conte: um, dois, três, quatro lados." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Desenhe um círculo grande no ar, sem parar e sem fazer pontas.", palavra: "CÍR-CU-LO", silabas: 3, imagemUrl: circulo, elogio: "Seu movimento ficou redondo como o círculo." },
    { tipo: "historiaIlustrada", titulo: "A construção das formas", cenas: [{ imagemUrl: quadrado, narracao: "O quadrado, com quatro lados, virou a parede." }, { imagemUrl: triangulo, narracao: "O triângulo, com três lados, virou o telhado." }, { imagemUrl: circulo, narracao: "O círculo, sem pontas, virou a janela redonda." }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual forma serviu de janela porque é redonda e não tem pontas?", opcoes: [{ nome: "quadrado", imagemUrl: quadrado, correta: false }, { nome: "círculo", imagemUrl: circulo, correta: true }, { nome: "triângulo", imagemUrl: triangulo, correta: false }, { nome: "banana", imagemUrl: banana, correta: false }], feedbackAcerto: "O círculo não tem lados retos nem cantos; por isso formou a janela redonda.", feedbackErro: "Procure a forma com contorno redondo e nenhuma ponta." },
  ],
  conviteCorpo: "Faça um triângulo juntando as mãos acima da cabeça e conte três lados imaginários.",
  imagemCorpo: triangulo,
  missao: "Encontre em casa algo circular, algo quadrado e algo triangular.",
  dicaAdulto: "Peça que a criança diga a pista da forma, e não apenas o nome.",
  medalha: "Investigador das Formas",
  baseCientifica: "Reconhecimento de formas por propriedades definidoras, evitando depender apenas da aparência prototípica.",
});

const aula05 = criarAulaMatematicaEI({
  slug: "mat-pre1-05-classificar",
  titulo: "Separar e classificar",
  icone: "🧺",
  bncc: ["EI03ET05"],
  falaInicial: "Classificar é juntar objetos que seguem a mesma regra. Hoje vamos usar cor e forma como regras.",
  momentosEnsino: [
    { tipo: "escutaRitmada", imagemUrl: arcoIris, versos: ["Primeiro escolhemos uma regra.", "Depois observamos um objeto de cada vez.", "Por fim juntamos os que combinam com a regra."] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Regra da cor: maçã vermelha, banana amarela e folha verde.", itens: [{ nome: "vermelho", imagemUrl: maca }, { nome: "amarelo", imagemUrl: banana }, { nome: "verde", imagemUrl: folha }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Pela regra da cor amarela, qual objeto entra no grupo?", opcoes: [{ nome: "banana amarela", imagemUrl: banana, correta: true }, { nome: "maçã vermelha", imagemUrl: maca, correta: false }, { nome: "folha verde", imagemUrl: folha, correta: false }, { nome: "lua azul", imagemUrl: lua, correta: false }], feedbackAcerto: "A banana entra porque é amarela. Você seguiu a regra da cor.", feedbackErro: "A regra é amarelo. Observe a cor de cada objeto e procure o amarelo." },
    { tipo: "vocabularioVisual", instrucaoAudio: "Agora a regra é a forma. Observe círculo, quadrado e triângulo.", itens: [{ nome: "círculo", imagemUrl: circulo }, { nome: "quadrado", imagemUrl: quadrado }, { nome: "triângulo", imagemUrl: triangulo }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Pela regra das formas sem pontas, qual entra no grupo?", opcoes: [{ nome: "triângulo", imagemUrl: triangulo, correta: false }, { nome: "quadrado", imagemUrl: quadrado, correta: false }, { nome: "círculo", imagemUrl: circulo, correta: true }, { nome: "estrela", imagemUrl: estrela, correta: false }], feedbackAcerto: "O círculo não tem pontas. Ele segue a regra.", feedbackErro: "Passe o dedo pelo contorno. A forma sem nenhuma ponta é o círculo." },
    { tipo: "historiaIlustrada", titulo: "As caixas organizadas", cenas: [{ imagemUrl: maca, narracao: "Na primeira caixa entravam apenas coisas vermelhas." }, { imagemUrl: sol, narracao: "Na segunda caixa entravam apenas coisas amarelas." }, { imagemUrl: folha, narracao: "Cada objeto foi para a caixa da sua cor. Isso é classificar." }] },
    { tipo: "compreensaoImagem", perguntaAudio: "Qual objeto vai para a caixa das coisas verdes?", opcoes: [{ nome: "sol amarelo", imagemUrl: sol, correta: false }, { nome: "maçã vermelha", imagemUrl: maca, correta: false }, { nome: "folha verde", imagemUrl: folha, correta: true }, { nome: "lua azul", imagemUrl: lua, correta: false }], feedbackAcerto: "A folha é verde e segue a regra da caixa verde.", feedbackErro: "A regra é verde. Compare a cor de cada objeto com a cor da caixa." },
  ],
  conviteCorpo: "Separe seus dedos em dois grupos: polegares de um lado e os outros dedos do outro.",
  imagemCorpo: arcoIris,
  missao: "Escolha quatro objetos e separe primeiro por cor; depois tente criar outra regra.",
  dicaAdulto: "Pergunte sempre qual foi a regra usada e aceite diferentes classificações quando a regra for coerente.",
  medalha: "Mestre da Classificação",
  baseCientifica: "Classificação por atributos explícitos, verbalização da regra e flexibilidade para reclassificar o mesmo conjunto.",
});

export const cursoMatematicaPre1: CursoEI = {
  slug: "matematica-ei-pre1",
  serie: "pre1",
  serieLabel: "Pré I (4 anos)",
  titulo: "Matemática Kawaii — Pré I",
  descricao: "Contagem até cinco, comparação, mais um, formas e classificação com ensino guiado.",
  corPrimaria: "#8b5cf6",
  corSecundaria: "#0ea5e9",
  mascoteUrl: brilha,
  unidades: [{ slug: "u1-quantidades-e-classificacao", numero: 1, titulo: "Semana 1 · Pensar com quantidades", subtitulo: "Contar, comparar, transformar e classificar", aulas: [aula01, aula02, aula03, aula04, aula05] }],
};
