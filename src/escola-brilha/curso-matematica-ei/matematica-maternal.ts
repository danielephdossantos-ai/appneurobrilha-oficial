import type { CursoEI, AulaEI } from "../curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as estrelas } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as elefante } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as circulo } from "@/assets/neuro-treino/objetos/circulo.png.asset.json";
import { url as quadrado } from "@/assets/neuro-treino/objetos/quadrado.png.asset.json";
import { url as triangulo } from "@/assets/neuro-treino/objetos/triangulo.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as tinta } from "@/assets/neuro-treino/objetos/tinta.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as folha } from "@/assets/neuro-treino/objetos/planta-pequena.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as ursinho } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as pai } from "@/assets/neuro-treino/objetos/pai.png.asset.json";

/**
 * Códice da Matemática — Educação Infantil · MATERNAL (3–4 anos)
 *
 * BNCC: Campo de Experiência "Espaços, tempos, quantidades, relações e
 * transformações" — EI02ET01 a EI02ET08.
 *
 * Bases:
 *  • Trajetórias de aprendizagem (Clements & Sarama)
 *  • Subitizing 1–3 (Kaufman 1949 · Fischer)
 *  • Cardinalidade "How Many?" (Gelman & Gallistel)
 *  • Comparação por percepção direta antes de número exato
 *
 * SEMANA 1 — Primeiras noções
 *  Dia 1 · 1, 2, 3 — quantidades pequenas
 *  Dia 2 · Grande e pequeno
 *  Dia 3 · Muito e pouco
 *  Dia 4 · Círculo, quadrado, triângulo (formas)
 *  Dia 5 · Cores do arco-íris (classificação)
 */

const aula01: AulaEI = {
  slug: "mat-mat-01-um-dois-tres",
  titulo: "Um, dois, três!",
  icone: "🔢",
  bncc: ["EI02ET07", "EI02ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Oi! Eu sou o Brilha! Hoje vamos brincar de contar: um, dois, três! Vem comigo?",
      legenda: "Sente-se com a criança e toque para ouvir.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: bola,
      versos: [
        "Uma bolinha na mão, duas bolinhas no chão.",
        "Três bolinhas pra brincar, vem comigo até contar!",
        "Um, dois, três!",
      ],
      legenda: "Bata palma junto na hora de contar.",
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada imagem e escuta o número.",
      itens: [
        { nome: "uma bola", imagemUrl: bola },
        { nome: "duas maçãs", imagemUrl: maca },
        { nome: "três estrelas", imagemUrl: estrelas },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual dessas figuras mostra UMA coisa só?",
      opcoes: [
        { nome: "uma flor", imagemUrl: flor, correta: true },
        { nome: "três estrelas", imagemUrl: estrelas, correta: false },
        { nome: "família de quatro", imagemUrl: familia, correta: false },
      ],
      feedbackAcerto: "Isso! Uma flor sozinha, só uma!",
      feedbackErro: "Escuta de novo: UMA é uma coisinha só. Qual mostra só uma?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Vamos bater palma DUAS vezes:",
      palavra: "PALMA-PALMA",
      silabas: 2,
      imagemUrl: maca,
      elogio: "Boa! Duas palmas para o número dois!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "As três joaninhas",
      cenas: [
        {
          imagemUrl: joaninha,
          narracao:
            "Era uma vez uma joaninha bem pequenininha, que morava numa flor amarela.",
        },
        {
          imagemUrl: flor,
          narracao:
            "Um dia, a joaninha achou uma amiga. Agora eram DUAS joaninhas na flor!",
        },
        {
          imagemUrl: parque,
          narracao:
            "Depois chegou mais uma amiga! TRÊS joaninhas voando juntas pelo jardim.",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Quantas joaninhas ficaram no final da história? Uma, duas ou três?",
      opcoes: [
        { nome: "três joaninhas", imagemUrl: joaninha, correta: true },
        { nome: "uma flor", imagemUrl: flor, correta: false },
        { nome: "uma bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: "Isso! No final ficaram TRÊS joaninhas voando juntas!",
      feedbackErro: "Vamos escutar de novo: uma… duas… TRÊS joaninhas amigas!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coelho,
      convite:
        "Agora finge que você é um coelhinho! Dá UM pulinho… agora DOIS pulinhos… agora TRÊS!",
      dica: "Contar pulando junto ajuda a criança a associar número + quantidade.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: familia,
      pergunta:
        "Quantas pessoas moram na sua casa? Conta com o dedinho pro Brilha!",
      exemplos: [
        { nome: "mamãe", imagemUrl: mae },
        { nome: "papai", imagemUrl: pai },
        { nome: "eu", imagemUrl: ursinho },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Pega três brinquedos favoritos e conta pra alguém em casa: 'UM… DOIS… TRÊS!'",
      dicaAdulto:
        "Aponte cada objeto ao contar. A criança aprende cardinalidade quando o último número dito = quantidade total.",
    },
    {
      tipo: "celebracao",
      medalha: "Primeira Contagem",
      mascoteUrl: brilha,
      falaFinal:
        "Uhuu! Você contou UM, DOIS, TRÊS com o Brilha! Que dedinhos espertos!",
    },
  ],
  baseCientifica:
    "Subitizing 1–3 (Kaufman 1949) e cardinalidade (Gelman & Gallistel 1978). Contar apontando + fechar com o total ancora a quantidade.",
};

const aula02: AulaEI = {
  slug: "mat-mat-02-grande-pequeno",
  titulo: "Grande e pequeno",
  icone: "🐘",
  bncc: ["EI02ET04", "EI02ET05"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Oi de novo! Hoje o Brilha trouxe coisas GRANDES e coisas pequenininhas. Vamos comparar?",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: elefante,
      versos: [
        "Grande, grande como um leão, forte rugidor.",
        "Pequenininho como a joaninha, cor de flor.",
        "Grande e pequeno, vamos comparar!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca e escuta: qual é grande e qual é pequeno.",
      itens: [
        { nome: "leão grande", imagemUrl: elefante },
        { nome: "joaninha pequena", imagemUrl: joaninha },
        { nome: "árvore grande", imagemUrl: arvore },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual desses bichinhos é o MAIOR?",
      opcoes: [
        { nome: "leão", imagemUrl: elefante, correta: true },
        { nome: "joaninha", imagemUrl: joaninha, correta: false },
        { nome: "borboleta", imagemUrl: borboleta, correta: false },
      ],
      feedbackAcerto: "Isso! O leão é o MAIOR de todos!",
      feedbackErro: "Escuta de novo: o leão é enorme. Ele é o MAIOR!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Fica bem GRANDE! Estica os braços pro céu, bem alto!",
      palavra: "GRANDE",
      silabas: 2,
      imagemUrl: arvore,
      elogio: "Uau! Você ficou do tamanho de uma árvore!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "O leão e a joaninha",
      cenas: [
        {
          imagemUrl: elefante,
          narracao:
            "Era uma vez um leão bem GRANDE, com uma juba enorme e um rugido forte.",
        },
        {
          imagemUrl: joaninha,
          narracao:
            "Um dia, uma joaninha pequenininha pousou no nariz do leão e disse 'oi!'",
        },
        {
          imagemUrl: coracao,
          narracao:
            "O leão sorriu com cuidado: 'Você é pequenininha, mas é minha amiga GRANDE do coração!'",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Na história, quem era o PEQUENININHO?",
      opcoes: [
        { nome: "joaninha", imagemUrl: joaninha, correta: true },
        { nome: "leão", imagemUrl: elefante, correta: false },
        { nome: "árvore", imagemUrl: arvore, correta: false },
      ],
      feedbackAcerto: "Isso! A joaninha era pequenininha, mas foi amiga do leão!",
      feedbackErro: "Escuta de novo: a joaninha era pequenininha, do tamanho do nariz do leão.",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: joaninha,
      convite:
        "Agora fica PEQUENININHO! Se agacha, se enrola, fica bem miudinho como a joaninha!",
      dica: "Alternar 'grande' e 'pequeno' com o corpo fixa a comparação de tamanho.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: familia,
      pergunta: "Quem é a pessoa mais GRANDE lá da sua casa? E a mais pequena?",
      exemplos: [
        { nome: "papai", imagemUrl: pai },
        { nome: "mamãe", imagemUrl: mae },
        { nome: "bebê", imagemUrl: ursinho },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Ache em casa 1 coisa GRANDE e 1 coisa pequena. Mostra pra alguém e fala: 'essa é grande, essa é pequena!'",
      dicaAdulto:
        "Comparação direta (colocar lado a lado) é o primeiro passo pra medir depois. Faça no chão, com objetos reais.",
    },
    {
      tipo: "celebracao",
      medalha: "Comparador",
      mascoteUrl: brilha,
      falaFinal: "Uhuu! Você sabe o que é GRANDE e o que é pequeno! Que orelha esperta!",
    },
  ],
  baseCientifica:
    "Clements & Sarama — trajetórias de comparação por percepção antes de medida convencional.",
};

const aula03: AulaEI = {
  slug: "mat-mat-03-muito-pouco",
  titulo: "Muito e pouco",
  icone: "✨",
  bncc: ["EI02ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Oi! Hoje vamos ver o que é MUITO e o que é pouquinho. Bora?",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: estrelas,
      versos: [
        "Muitas estrelinhas lá no céu.",
        "Pouca chuvinha, só um chuvisco.",
        "Muito, muito, muito — que festa!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca e escuta: aqui tem MUITAS estrelas e ali só UMA.",
      itens: [
        { nome: "muitas estrelas", imagemUrl: estrelas },
        { nome: "uma estrela", imagemUrl: estrela },
        { nome: "uma flor", imagemUrl: flor },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual figura mostra MUITAS coisas juntas?",
      opcoes: [
        { nome: "muitas estrelas", imagemUrl: estrelas, correta: true },
        { nome: "uma flor sozinha", imagemUrl: flor, correta: false },
        { nome: "uma bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: "Isso! MUITAS estrelinhas brilhando juntas!",
      feedbackErro: "MUITO é um monte junto. Qual figura tem um monte de coisinhas?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Vamos bater MUITAS palmas! Rápido, rápido, rápido!",
      palavra: "MUI-TAS-PAL-MAS",
      silabas: 4,
      imagemUrl: estrelas,
      elogio: "Uau! MUITAS palmas juntas! Isso é muito!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "A festa dos pássaros",
      cenas: [
        {
          imagemUrl: passaro,
          narracao: "Um passarinho estava sozinho na árvore. Só ele, pouquinho.",
        },
        {
          imagemUrl: arvore,
          narracao: "Aí chegaram os amigos! Um, dois, três, quatro… MUITOS passarinhos!",
        },
        {
          imagemUrl: festaCena(),
          narracao:
            "A árvore ficou cheia de canto! Que festa cheia, que festa com MUITOS!",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "No começo da história, era MUITO ou POUCO passarinho?",
      opcoes: [
        { nome: "pouco (um só)", imagemUrl: passaro, correta: true },
        { nome: "muitos passarinhos", imagemUrl: arvore, correta: false },
        { nome: "muitas estrelas", imagemUrl: estrelas, correta: false },
      ],
      feedbackAcerto: "Isso! Começou com um só, era POUCO!",
      feedbackErro: "No começo era só um passarinho sozinho. Isso é pouquinho!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: balao,
      convite:
        "Faz de conta que você tem MUITOS balões na mão! Sopra o ar como se fosse encher todos!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: ursinho,
      pergunta:
        "Você tem MUITOS brinquedos ou pouquinhos? Fala pro Brilha quantos você imagina!",
      exemplos: [
        { nome: "muitos", imagemUrl: bloco },
        { nome: "poucos", imagemUrl: ursinho },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Junte MUITOS grãos de feijão numa mão e SÓ UM na outra. Mostra pra alguém: 'muito e pouco!'",
      dicaAdulto:
        "Comparar quantidades por percepção (sem contar exato) é a base pré-numérica. Use objetos seguros e supervisione.",
    },
    {
      tipo: "celebracao",
      medalha: "Olho de Comparar",
      mascoteUrl: brilha,
      falaFinal:
        "Você já sabe MUITO e POUCO! Que olhinho esperto pra ver a quantidade!",
    },
  ],
};

function festaCena() {
  return passaro; // reaproveita passarinho (grupo implícito na narração)
}

const aula04: AulaEI = {
  slug: "mat-mat-04-formas-basicas",
  titulo: "Círculo, quadrado, triângulo",
  icone: "🔺",
  bncc: ["EI02ET04"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Hoje o Brilha trouxe três amigos: o Círculo redondinho, o Quadrado quadradão e o Triângulo bicudo!",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: circulo,
      versos: [
        "Círculo redondo, roda que nem sol.",
        "Quadrado firme, casinha no chão.",
        "Triângulo em cima, telhado bonitão!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca e escuta o nome de cada forma.",
      itens: [
        { nome: "círculo", imagemUrl: circulo },
        { nome: "quadrado", imagemUrl: quadrado },
        { nome: "triângulo", imagemUrl: triangulo },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual dessas formas é REDONDINHA como uma bola?",
      opcoes: [
        { nome: "círculo", imagemUrl: circulo, correta: true },
        { nome: "quadrado", imagemUrl: quadrado, correta: false },
        { nome: "triângulo", imagemUrl: triangulo, correta: false },
      ],
      feedbackAcerto: "Isso! O CÍRCULO é redondinho como uma bola ou o sol!",
      feedbackErro: "Escuta: redondinho, sem ponta. Qual é o círculo?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Faz o formato de um TRIÂNGULO com as mãozinhas no ar!",
      palavra: "TRI-ÂN-GU-LO",
      silabas: 4,
      imagemUrl: triangulo,
      elogio: "Bicudo em cima! Isso é um triângulo!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "A casinha do Brilha",
      cenas: [
        {
          imagemUrl: quadrado,
          narracao:
            "O Brilha ia construir a casinha dele. Começou com um QUADRADO grande — a parede!",
        },
        {
          imagemUrl: triangulo,
          narracao:
            "Depois colocou um TRIÂNGULO em cima — o telhado bem pontudo!",
        },
        {
          imagemUrl: circulo,
          narracao:
            "E fez uma janelinha REDONDA — o CÍRCULO — pra olhar o sol nascer!",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Que forma o Brilha usou pra fazer o telhado da casinha?",
      opcoes: [
        { nome: "triângulo", imagemUrl: triangulo, correta: true },
        { nome: "círculo", imagemUrl: circulo, correta: false },
        { nome: "quadrado", imagemUrl: quadrado, correta: false },
      ],
      feedbackAcerto: "Isso! O telhado é um TRIÂNGULO, bem pontudo!",
      feedbackErro: "O telhado fica em cima e é bicudo — é o triângulo!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: circulo,
      convite:
        "Roda como um CÍRCULO! Gira, gira, gira devagarinho no seu lugar!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: bloco,
      pergunta:
        "Olha em volta: acha uma coisinha QUADRADA e outra REDONDA! Fala pro Brilha o que você achou!",
      exemplos: [
        { nome: "janela quadrada", imagemUrl: quadrado },
        { nome: "prato redondo", imagemUrl: circulo },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Passeie pela casa e ache 1 CÍRCULO, 1 QUADRADO e 1 TRIÂNGULO. Aponta e nomeia!",
      dicaAdulto:
        "Formas no ambiente (relógio = círculo, janela = quadrado, telhado = triângulo) transferem o conceito pro mundo real.",
    },
    {
      tipo: "celebracao",
      medalha: "Caçador de Formas",
      mascoteUrl: brilha,
      falaFinal:
        "Uhuu! Círculo, quadrado, triângulo — três amigos novos do Brilha!",
    },
  ],
};

const aula05: AulaEI = {
  slug: "mat-mat-05-cores-arco-iris",
  titulo: "Cores do arco-íris",
  icone: "🌈",
  bncc: ["EI02ET01", "EI02ET04"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Olha só o que o Brilha achou depois da chuva: um ARCO-ÍRIS cheio de cores!",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: arcoIris,
      versos: [
        "Vermelho, amarelo, azulzinho no céu.",
        "Verde da folha, rosa do papel.",
        "Todas as cores, que arco-íris!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada figura e escuta a cor.",
      itens: [
        { nome: "maçã vermelha", imagemUrl: maca },
        { nome: "banana amarela", imagemUrl: banana },
        { nome: "folha verde", imagemUrl: folha },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual dessas figuras é AMARELA como o sol?",
      opcoes: [
        { nome: "sol amarelo", imagemUrl: sol, correta: true },
        { nome: "folha verde", imagemUrl: folha, correta: false },
        { nome: "maçã vermelha", imagemUrl: maca, correta: false },
      ],
      feedbackAcerto: "Isso! O SOL é bem amarelinho, brilhante!",
      feedbackErro: "Amarelo é a cor do sol. Qual figura é amarelinha?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Pinta uma nuvem colorida no ar com o dedinho!",
      palavra: "AR-CO-Í-RIS",
      silabas: 4,
      imagemUrl: arcoIris,
      elogio: "Você pintou o céu inteiro de cor!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "O balão do Brilha",
      cenas: [
        {
          imagemUrl: balao,
          narracao:
            "O Brilha ganhou um balão VERMELHO no aniversário. Vermelho como uma maçã!",
        },
        {
          imagemUrl: tinta,
          narracao:
            "Ele pintou um desenho AZUL da lua e AMARELO do sol pra dar de presente.",
        },
        {
          imagemUrl: arcoIris,
          narracao:
            "Depois da chuva, apareceu um ARCO-ÍRIS com TODAS as cores juntas!",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "De que cor era o balão do Brilha no começo da história?",
      opcoes: [
        { nome: "vermelho como maçã", imagemUrl: maca, correta: true },
        { nome: "amarelo como sol", imagemUrl: sol, correta: false },
        { nome: "verde como folha", imagemUrl: folha, correta: false },
      ],
      feedbackAcerto: "Isso! O balão era VERMELHO, como uma maçã!",
      feedbackErro: "O balão era vermelhinho — igual à maçã!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: bolo,
      convite:
        "Finge que você tá pintando um bolo BEM colorido! Passa o dedinho de vermelho, amarelo e verde no ar!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: arcoIris,
      pergunta:
        "Qual é a SUA cor preferida? Fala bem alto pro Brilha!",
      exemplos: [
        { nome: "vermelho", imagemUrl: maca },
        { nome: "amarelo", imagemUrl: sol },
        { nome: "verde", imagemUrl: folha },
        { nome: "azul", imagemUrl: lua },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Ache em casa 3 objetos de cores diferentes. Aponta e fala: 'vermelho, amarelo, azul!'",
      dicaAdulto:
        "Nomear cores no mundo real amplia vocabulário e fixa a classificação por atributo.",
    },
    {
      tipo: "celebracao",
      medalha: "Arco-Íris · Semana 1",
      mascoteUrl: brilha,
      falaFinal:
        "Uhuu! Você fechou a Semana 1 de Matemática com o Brilha! Contou, comparou e coloriu!",
    },
  ],
  baseCientifica:
    "Classificação por atributo (cor) é base para agrupamento e álgebra inicial (Clements & Sarama).",
};

/* ------------ Curso ------------ */

export const cursoMatematicaMaternal: CursoEI = {
  slug: "matematica-ei-maternal",
  serie: "maternal",
  serieLabel: "Maternal (3–4 anos)",
  titulo: "Códice da Matemática — Maternal",
  descricao:
    "Contar, comparar, ver formas e cores. Base da matemática que a criança usa a vida inteira.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#14b8a6",
  mascoteUrl: brilha,
  unidades: [
    {
      slug: "u1-primeiras-nocoes",
      numero: 1,
      titulo: "Semana 1 · Primeiras noções",
      subtitulo: "Contar 1–3, grande/pequeno, muito/pouco, formas e cores",
      aulas: [aula01, aula02, aula03, aula04, aula05],
    },
  ],
};
