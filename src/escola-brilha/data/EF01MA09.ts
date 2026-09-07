import type { Aula } from "../types";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as bananaImg } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as moedaImg } from "@/assets/neuro-treino/objetos/moeda.png.asset.json";
import { url as presenteImg } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as blocoImg } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";

/** EF01MA09 — Organizar e ordenar objetos por atributos. */
const aula: Aula = {
  codigo: "EF01MA09",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "O Ateliê das Coleções",
  narrativa: {
    titulo: "O Ateliê das Coleções",
    contexto: "O ateliê do Brilha recebeu uma caixa com objetos misturados.",
    problema: "Precisamos formar grupos e colocar alguns objetos em ordem usando uma regra clara.",
    convite: "Vamos observar cor, forma, tamanho, espessura e material?",
  },
  conhecimentosPrevios: ["Observar semelhanças e diferenças.", "Reconhecer cores e formas simples.", "Usar pequeno, médio, grande, fino e grosso."],
  missao: "Organizar e ordenar objetos usando um atributo escolhido e explicar a regra utilizada.",
  objetivos: [
    "Reconhecer cor, forma, tamanho, espessura e material como atributos.",
    "Classificar objetos por uma característica comum.",
    "Ordenar objetos por tamanho e espessura.",
    "Explicar o critério e reorganizar uma coleção por outro critério.",
  ],
  motivacao: "Uma regra clara transforma uma coleção misturada numa coleção organizada.",
  explicacao: "ATRIBUTO é uma característica de um objeto: cor, forma, tamanho, espessura ou material. CLASSIFICAR é formar grupos usando uma regra. ORDENAR é criar uma sequência por um atributo comparável: do menor para o maior ou do mais fino para o mais grosso. Cor e material servem para agrupar, mas uma cor não é matematicamente maior que outra. Antes de começar, diga a regra e depois confira todos os objetos.",
  explicacaoAtiva: [
    {
      texto: "Classificar é reunir objetos que têm a característica escolhida. Use um atributo de cada vez.",
      exemplo: "Pela forma: redondos num grupo e não redondos em outro.",
      imagem: moedaImg,
      imagemAlt: "Moeda redonda usada para observar forma",
      checagem: { pergunta: "Qual é um atributo do objeto?", opcoes: ["Cor", "Dia da semana", "Nome do dono"], correta: 0, explicacao: "Cor é uma característica observável." },
    },
    {
      texto: "A mesma coleção pode mudar quando mudamos o critério.",
      exemplo: "Primeiro por cor; depois, por forma.",
      imagem: blocoImg,
      imagemAlt: "Bloco usado numa classificação",
      checagem: { pergunta: "Se a regra é forma, o que devemos observar?", opcoes: ["Grande ou pequeno", "Redondo, quadrado ou outra forma", "Papel ou metal"], correta: 1, explicacao: "A classificação deve seguir a forma." },
    },
    {
      texto: "Ordenar é criar uma sequência. Tamanho e espessura permitem comparar o que vem antes e depois.",
      exemplo: "Pequeno → médio → grande; fino → médio → grosso.",
      imagem: presenteImg,
      imagemAlt: "Presente usado para comparar tamanhos",
      checagem: { pergunta: "Qual vai do menor para o maior?", opcoes: ["Grande, médio, pequeno", "Pequeno, médio, grande", "Médio, pequeno, grande"], correta: 1, explicacao: "O tamanho cresce passo a passo." },
    },
    {
      texto: "Material é aquilo de que o objeto é feito.",
      exemplo: "Podemos formar grupos de papel, plástico, madeira e metal.",
      imagem: moedaImg,
      imagemAlt: "Moeda usada como exemplo de objeto de metal",
      checagem: { pergunta: "Papel, plástico, madeira e metal indicam:", opcoes: ["Cor", "Material", "Tamanho"], correta: 1, explicacao: "São materiais." },
    },
  ],
  explicacoesNiveis: {
    nivel1: "Escolha uma característica e junte os objetos parecidos nela.",
    nivel2: "Classificar forma grupos. Ordenar cria uma sequência.",
    nivel3: "Diga a regra completa: por tamanho, do menor para o maior.",
    nivel4: "Uma coleção admite organizações diferentes, desde que cada critério seja claro.",
  },
  exemploResolvido: {
    enunciado: "Como separar maçã, banana, moeda e bloco por tipo?",
    passos: ["Escolha o atributo: tipo.", "Maçã e banana são frutas.", "Moeda e bloco são outros objetos.", "Confira todos os itens."],
    resposta: "Frutas: maçã e banana. Outros objetos: moeda e bloco.",
    interativo: { tipo: "contagem", imagemUrl: macaImg, quantidade: 2, nomeItem: "fruta", nomeItemPlural: "frutas", pergunta: "Quantas frutas há?" },
  },
  atividadeGuiada: {
    enunciado: "Organize os tamanhos do menor para o maior.",
    resposta: "Pequeno, médio, grande.",
    explicacao: "A regra é tamanho crescente.",
    visual: {
      tipo: "comparar",
      pergunta: "Qual sequência vai do menor para o maior?",
      lados: [
        { imagemUrl: presenteImg, quantidade: 1, rotulo: "Pequeno → médio → grande", cor: "#60A5FA" },
        { imagemUrl: presenteImg, quantidade: 1, rotulo: "Grande → médio → pequeno", cor: "#F472B6" },
      ],
      opcoes: ["Pequeno → médio → grande", "Grande → médio → pequeno", "Médio → grande → pequeno"],
      correta: 0,
    },
  },
  exercicios: [
    { enunciado: "Separar botões azuis e vermelhos usa qual atributo?", resposta: "Cor.", dica: "Azul e vermelho são cores." },
    { enunciado: "Ordene grande, pequeno e médio do menor para o maior.", resposta: "Pequeno, médio, grande.", dica: "Comece pelo menor." },
    { enunciado: "Separar madeira e metal usa qual atributo?", resposta: "Material.", dica: "Observe do que foi feito." },
    { enunciado: "Ordene grosso, fino e médio do mais fino para o mais grosso.", resposta: "Fino, médio, grosso.", dica: "Compare a espessura." },
  ],
  desafio: {
    enunciado: "Descubra o critério usado em cada organização.",
    resposta: "Azul/amarelo: cor. Redondo/quadrado: forma. Pequeno/médio/grande: tamanho. Papel/metal: material.",
    visual: {
      cena: [{ personagem: "Coleção", itemImagemUrl: blocoImg, quantidade: 4, cor: "#60A5FA" }],
      perguntas: [
        { pergunta: "Azuis de um lado e amarelos do outro:", opcoes: ["Cor", "Forma", "Material"], correta: 0, explicacao: "Azul e amarelo são cores." },
        { pergunta: "Redondos e quadrados:", opcoes: ["Tamanho", "Forma", "Espessura"], correta: 1, explicacao: "São formas." },
        { pergunta: "Pequeno, médio e grande:", opcoes: ["Material", "Cor", "Tamanho"], correta: 2, explicacao: "A ordem usa tamanho." },
        { pergunta: "Papel e metal:", opcoes: ["Material", "Forma", "Cor"], correta: 0, explicacao: "São materiais." },
      ],
    },
  },
  revisao: {
    pontos: ["Atributo é uma característica.", "Classificar forma grupos.", "Ordenar cria uma sequência.", "A regra deve valer para todos.", "A coleção pode ser reorganizada por outro critério."],
    dica: "Diga: 'Vou organizar por...' e confira item por item.",
  },
  quiz: [
    { pergunta: "O que é classificar?", opcoes: ["Formar grupos por uma regra", "Somar", "Contar sem regra"], correta: 0, explicacao: "É agrupar por um critério." },
    { pergunta: "Fino e grosso indicam:", opcoes: ["Cor", "Espessura", "Material"], correta: 1, explicacao: "Descrevem espessura." },
    { pergunta: "Qual ordem é crescente?", opcoes: ["Grande, médio, pequeno", "Pequeno, médio, grande", "Médio, grande, pequeno"], correta: 1, explicacao: "Vai do menor ao maior." },
    { pergunta: "Papel e plástico indicam:", opcoes: ["Forma", "Material", "Tamanho"], correta: 1, explicacao: "São materiais." },
  ],
  conclusao: "🏅 Organizador de Coleções! Escolha objetos seguros, organize por um atributo e explique sua regra.",
  curiosidade: { titulo: "Uma coleção, várias regras", texto: "Os mesmos objetos podem ser separados primeiro pela cor e depois pelo tamanho. Use uma regra de cada vez." },
  interativas: [
    {
      tipo: "arrastar",
      titulo: "Fase 1 · Classifique por tipo",
      instrucao: "Arraste maçã e banana para Frutas; moeda e bloco para Outros objetos.",
      itemImagem: blocoImg,
      alvosVisuais: [
        { nome: "Frutas", cor: "#34D399", capacidade: 2, imagemUrl: macaImg },
        { nome: "Outros objetos", cor: "#60A5FA", capacidade: 2, imagemUrl: blocoImg },
      ],
      pares: [
        { item: "Maçã", alvo: "Frutas", itemImagem: macaImg },
        { item: "Banana", alvo: "Frutas", itemImagem: bananaImg },
        { item: "Moeda", alvo: "Outros objetos", itemImagem: moedaImg },
        { item: "Bloco", alvo: "Outros objetos", itemImagem: blocoImg },
      ],
    },
    {
      tipo: "ordenar",
      titulo: "Fase 2 · Ordem de tamanho",
      instrucao: "Coloque do menor para o maior.",
      itens: ["Pequeno", "Médio", "Grande"],
      imagens: [
        { imagemUrl: presenteImg, quantidade: 1, rotulo: "Pequeno", cor: "#60A5FA" },
        { imagemUrl: presenteImg, quantidade: 2, rotulo: "Médio", cor: "#A78BFA" },
        { imagemUrl: presenteImg, quantidade: 3, rotulo: "Grande", cor: "#F472B6" },
      ],
    },
    {
      tipo: "ordenar",
      titulo: "Fase 3 · Ordem de espessura",
      instrucao: "Coloque do mais fino para o mais grosso.",
      itens: ["Fino", "Médio", "Grosso"],
      imagens: [
        { imagemUrl: blocoImg, quantidade: 1, rotulo: "Fino", cor: "#FBBF24" },
        { imagemUrl: blocoImg, quantidade: 2, rotulo: "Médio", cor: "#FB923C" },
        { imagemUrl: blocoImg, quantidade: 3, rotulo: "Grosso", cor: "#EF4444" },
      ],
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Azul e vermelho indicam:", opcoes: ["Cor", "Forma", "Tamanho"], correta: 0, explicacao: "São cores." },
      { pergunta: "Pequeno e grande indicam:", opcoes: ["Material", "Tamanho", "Forma"], correta: 1, explicacao: "Descrevem tamanho." },
    ],
    medio: [
      { pergunta: "Fino e grosso indicam:", opcoes: ["Espessura", "Cor", "Material"], correta: 0, explicacao: "Descrevem espessura." },
      { pergunta: "Madeira e metal indicam:", opcoes: ["Forma", "Material", "Tamanho"], correta: 1, explicacao: "São materiais." },
    ],
    dificil: [
      { pergunta: "Qual não possui ordem natural?", opcoes: ["Tamanho", "Espessura", "Cor"], correta: 2, explicacao: "Cores podem ser agrupadas, mas uma não é maior que outra." },
      { pergunta: "Podemos reorganizar por outra regra?", opcoes: ["Não", "Sim", "Só objetos grandes"], correta: 1, explicacao: "Sim, escolhendo um novo critério claro." },
    ],
  },
  proximaHabilidade: { codigo: "EF01MA10", titulo: "Reconhecer padrões e completar sequências" },
};

export default aula;
