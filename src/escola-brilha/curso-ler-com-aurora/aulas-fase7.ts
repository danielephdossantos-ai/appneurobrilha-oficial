import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as quadroTriste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as sorvete } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as predio } from "@/assets/neuro-treino/objetos/predio.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as fogo } from "@/assets/neuro-treino/objetos/fogo.png.asset.json";
import { url as casaAntiga } from "@/assets/neuro-treino/objetos/casa-antiga.png.asset.json";
import { url as casaModerna } from "@/assets/neuro-treino/objetos/casa-moderna.png.asset.json";
import { url as bicicletaAntiga } from "@/assets/neuro-treino/objetos/bicicleta-antiga.png.asset.json";
import { url as bicicletaModerna } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as campo } from "@/assets/neuro-treino/objetos/campo.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";


/**
 * Ler com Aurora — Fase 7: Vocabulário Ativo
 * ------------------------------------------------
 * 20 aulas · 4 semanas · 15 min/dia
 *  - Semana 1 (aqui): Sinônimos por imagem
 *  - Semana 2: Antônimos por contraste visual
 *  - Semana 3: Campos semânticos
 *  - Semana 4: Palavra na frase + Diploma "Colecionador de Palavras"
 *
 * Base: Beck & McKeown (2013) — ensino explícito de palavras Tier-2.
 * Contrato: mem://preferences/contrato-ler-com-aurora-fases-6-8
 */

const mascote = brilha;
const BASE =
  "Vocabulário ativo por ensino explícito de sinônimos (Beck & McKeown 2013). A criança escuta uma palavra-alvo, vê a imagem e escolhe outra palavra que quer dizer o mesmo — ampliando o léxico ativo, base de compreensão leitora.";

/* ============================================================
 * SEMANA 1 — Sinônimos por imagem
 * ============================================================ */

const a1: AulaEI = {
  slug: "f7-dia-01-sinonimos-casa-bonito",
  titulo: "Dia 1 · CASA = LAR · BONITO = LINDO",
  icone: "🏠",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Começa a Fase do Vocabulário! Vou te mostrar palavras que dizem a MESMA coisa. Quanto mais palavras você conhece, melhor você lê.",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: casa,
      palavra: "CASA",
      sinonimo: "LAR",
      distratores: ["SAPATO", "PORTA"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que CASA?",
      elogio: "Casa e lar — dois nomes para o lugar onde a gente mora!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: flor,
      palavra: "BONITO",
      sinonimo: "LINDO",
      distratores: ["FEIO", "SUJO"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que BONITO?",
      elogio: "Bonito e lindo dizem a mesma coisa!",
    },
    {
      tipo: "celebracao",
      medalha: "Colecionador de Palavras · Dia 1",
      mascoteUrl: mascote,
      falaFinal: "Você colecionou LAR e LINDO. Amanhã: FELIZ e TRISTE ganham amigos!",
    },
  ],
};

const a2: AulaEI = {
  slug: "f7-dia-02-sinonimos-feliz-triste",
  titulo: "Dia 2 · FELIZ = ALEGRE · TRISTE = CHATEADO",
  icone: "😊",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje: palavras de sentimento. Duas por dia, sem pressa.",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: menina,
      palavra: "FELIZ",
      sinonimo: "ALEGRE",
      distratores: ["CHORANDO", "COM MEDO"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que FELIZ?",
      elogio: "Feliz e alegre — a mesma cara de sorriso!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: quadroTriste,
      palavra: "TRISTE",
      sinonimo: "CHATEADO",
      distratores: ["ALEGRE", "COM FOME"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que TRISTE?",
      elogio: "Triste e chateado — os dois sentem a mesma coisa.",
    },
    {
      tipo: "celebracao",
      medalha: "Colecionador de Palavras · Dia 2",
      mascoteUrl: mascote,
      falaFinal: "Duas palavras novas na coleção. Amanhã: GRANDE e PEQUENO!",
    },
  ],
};

const a3: AulaEI = {
  slug: "f7-dia-03-sinonimos-grande-pequeno",
  titulo: "Dia 3 · GRANDE = ENORME · PEQUENO = MIÚDO",
  icone: "🦁",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje: tamanhos. Palavras diferentes para dizer a mesma coisa!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: leao,
      palavra: "GRANDE",
      sinonimo: "ENORME",
      distratores: ["PEQUENO", "MOLE"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que GRANDE?",
      elogio: "Grande e enorme — o leão é os dois!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: joaninha,
      palavra: "PEQUENO",
      sinonimo: "MIÚDO",
      distratores: ["ENORME", "PESADO"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que PEQUENO?",
      elogio: "Pequeno e miúdo — a joaninha cabe no seu dedo!",
    },
    {
      tipo: "celebracao",
      medalha: "Colecionador de Palavras · Dia 3",
      mascoteUrl: mascote,
      falaFinal: "ENORME e MIÚDO na coleção. Amanhã: velocidade!",
    },
  ],
};

const a4: AulaEI = {
  slug: "f7-dia-04-sinonimos-rapido-correr",
  titulo: "Dia 4 · RÁPIDO = VELOZ · CORRER = APRESSAR",
  icone: "🐇",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Palavras de movimento! Vamos acelerar o vocabulário.",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: carro,
      palavra: "RÁPIDO",
      sinonimo: "VELOZ",
      distratores: ["LENTO", "PARADO"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que RÁPIDO?",
      elogio: "Rápido e veloz — o carro corre igual!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: coelho,
      palavra: "CORRER",
      sinonimo: "APRESSAR",
      distratores: ["DORMIR", "PARAR"],
      instrucaoAudio: "Qual palavra quer dizer quase o mesmo que CORRER?",
      elogio: "Correr e apressar — o coelho não fica parado!",
    },
    {
      tipo: "celebracao",
      medalha: "Colecionador de Palavras · Dia 4",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: revisão da semana e medalha grande!",
    },
  ],
};

const a5: AulaEI = {
  slug: "f7-dia-05-sinonimos-revisao",
  titulo: "Dia 5 · Revisão — 4 duplas de palavras",
  icone: "🏅",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Revisão da semana! Vamos misturar todas as palavras que você aprendeu. Pense bem antes de escolher.",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: gato,
      palavra: "BONITO",
      sinonimo: "LINDO",
      distratores: ["FEIO", "PEQUENO"],
      instrucaoAudio: "Qual quer dizer o mesmo que BONITO?",
      elogio: "Lembrou! Bonito = lindo.",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: menino,
      palavra: "ALEGRE",
      sinonimo: "FELIZ",
      distratores: ["TRISTE", "CANSADO"],
      instrucaoAudio: "Qual quer dizer o mesmo que ALEGRE?",
      elogio: "Alegre = feliz!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: sorvete,
      palavra: "ENORME",
      sinonimo: "GRANDE",
      distratores: ["MIÚDO", "GELADO"],
      instrucaoAudio: "Qual quer dizer o mesmo que ENORME?",
      elogio: "Enorme = grande!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: bolo,
      palavra: "VELOZ",
      sinonimo: "RÁPIDO",
      distratores: ["LENTO", "DOCE"],
      instrucaoAudio: "Qual quer dizer o mesmo que VELOZ?",
      elogio: "Veloz = rápido!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "🎒 Missão em Família — Coleção de Palavras",
      convite:
        "Escolha DUAS palavras que você aprendeu esta semana e ensine para alguém da família. Peça para essa pessoa usar a palavra numa frase.",
      dicaAdulto:
        "Sinônimos aprendidos nesta semana: casa/lar, bonito/lindo, feliz/alegre, triste/chateado, grande/enorme, pequeno/miúdo, rápido/veloz, correr/apressar. Use-as em conversas do dia a dia — repetição em contexto real fixa o vocabulário melhor que qualquer exercício.",
    },
    {
      tipo: "celebracao",
      medalha: "🏅 Colecionador de Palavras · Semana 1",
      mascoteUrl: mascote,
      falaFinal:
        "Você fechou a primeira semana da Fase do Vocabulário! Semana 2: palavras que dizem o CONTRÁRIO.",
    },
  ],
};

/* ============================================================
 * SEMANA 2 — Antônimos por contraste visual
 * ============================================================ */

const BASE_ANT =
  "Antônimos por contraste visual (Beck & McKeown 2013; Nagy 1988). A criança vê a palavra-alvo com uma imagem prototípica e escolhe entre 3 imagens qual mostra o CONTRÁRIO — o contraste facilita a fixação do par lexical.";

const a6: AulaEI = {
  slug: "f7-dia-06-antonimos-grande-alto",
  titulo: "Dia 6 · GRANDE ↔ PEQUENO · ALTO ↔ BAIXO",
  icone: "🦁",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_ANT,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana 2! Agora vamos brincar de CONTRÁRIOS. Eu mostro uma imagem, você acha a imagem do contrário.",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: leao,
      palavra: "GRANDE",
      antonimo: "PEQUENO",
      opcoes: [
        { nome: "JOANINHA", imagemUrl: joaninha, correta: true },
        { nome: "PRÉDIO", imagemUrl: predio, correta: false },
        { nome: "ÁRVORE", imagemUrl: arvore, correta: false },
      ],
      instrucaoAudio: "O leão é GRANDE. Qual imagem mostra o contrário — algo PEQUENO?",
      elogio: "A joaninha é pequenininha!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: arvore,
      palavra: "ALTO",
      antonimo: "BAIXO",
      opcoes: [
        { nome: "JOANINHA", imagemUrl: joaninha, correta: true },
        { nome: "PRÉDIO", imagemUrl: predio, correta: false },
        { nome: "LEÃO", imagemUrl: leao, correta: false },
      ],
      instrucaoAudio: "A árvore é ALTA, lá em cima. Qual bichinho é BAIXINHO, pertinho do chão?",
      elogio: "Isso! A joaninha é bem BAIXINHA — cabe no seu dedo!",
    },
    {
      tipo: "celebracao",
      medalha: "Contrários · Dia 6",
      mascoteUrl: mascote,
      falaFinal: "GRANDE↔PEQUENO e ALTO↔BAIXO na coleção. Amanhã: DIA↔NOITE!",
    },
  ],
};

const a7: AulaEI = {
  slug: "f7-dia-07-antonimos-dia-quente",
  titulo: "Dia 7 · DIA ↔ NOITE · QUENTE ↔ FRIO",
  icone: "☀️",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_ANT,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje: o céu e a temperatura. Duas duplas de contrários!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: sol,
      palavra: "DIA",
      antonimo: "NOITE",
      opcoes: [
        { nome: "LUA", imagemUrl: lua, correta: true },
        { nome: "FLOR", imagemUrl: flor, correta: false },
        { nome: "CASA", imagemUrl: casa, correta: false },
      ],
      instrucaoAudio: "O sol aparece no DIA. Qual imagem mostra a NOITE?",
      elogio: "A lua vem à noite!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: fogo,
      palavra: "QUENTE",
      antonimo: "FRIO",
      opcoes: [
        { nome: "SORVETE", imagemUrl: sorvete, correta: true },
        { nome: "BOLO", imagemUrl: bolo, correta: false },
        { nome: "SOL", imagemUrl: sol, correta: false },
      ],
      instrucaoAudio: "O fogo é QUENTE. Qual imagem mostra algo FRIO?",
      elogio: "O sorvete é geladinho!",
    },
    {
      tipo: "celebracao",
      medalha: "Contrários · Dia 7",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: sentimentos e coisas novas e antigas!",
    },
  ],
};

const a8: AulaEI = {
  slug: "f7-dia-08-antonimos-feliz-novo",
  titulo: "Dia 8 · FELIZ ↔ TRISTE · NOVO ↔ ANTIGO",
  icone: "😊",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_ANT,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Sentimentos e tempo. Vamos ver o contrário de cada um.",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: quadroAlegre,
      palavra: "FELIZ",
      antonimo: "TRISTE",
      opcoes: [
        { nome: "TRISTE", imagemUrl: quadroTriste, correta: true },
        { nome: "MENINA", imagemUrl: menina, correta: false },
        { nome: "GATO", imagemUrl: gato, correta: false },
      ],
      instrucaoAudio: "Esse rosto é FELIZ. Qual imagem mostra o contrário, TRISTE?",
      elogio: "Feliz e triste — sentimentos opostos!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: bicicletaModerna,
      palavra: "NOVO",
      antonimo: "ANTIGO",
      opcoes: [
        { nome: "BICICLETA ANTIGA", imagemUrl: bicicletaAntiga, correta: true },
        { nome: "CARRO", imagemUrl: carro, correta: false },
        { nome: "CASA NOVA", imagemUrl: casaModerna, correta: false },
      ],
      instrucaoAudio: "A bicicleta moderna é NOVA. Qual imagem mostra algo ANTIGO?",
      elogio: "A bicicleta antiga é de outra época!",
    },
    {
      tipo: "celebracao",
      medalha: "Contrários · Dia 8",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: lugares e quantidades!",
    },
  ],
};

const a9: AulaEI = {
  slug: "f7-dia-09-antonimos-cidade-muitos",
  titulo: "Dia 9 · CIDADE ↔ CAMPO · MUITOS ↔ POUCOS",
  icone: "🏙️",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_ANT,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Lugares e quantidades. Ache o contrário!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: cidade,
      palavra: "CIDADE",
      antonimo: "CAMPO",
      opcoes: [
        { nome: "CAMPO", imagemUrl: campo, correta: true },
        { nome: "PRÉDIO", imagemUrl: predio, correta: false },
        { nome: "CARRO", imagemUrl: carro, correta: false },
      ],
      instrucaoAudio: "Aqui é a CIDADE. Qual imagem mostra o contrário, o CAMPO?",
      elogio: "No campo tem árvores, no céu aberto!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: criancasGrupo,
      palavra: "MUITOS",
      antonimo: "POUCOS",
      opcoes: [
        { nome: "UMA CRIANÇA", imagemUrl: menino, correta: true },
        { nome: "CIDADE CHEIA", imagemUrl: cidade, correta: false },
        { nome: "PEIXE", imagemUrl: peixe, correta: false },
      ],
      instrucaoAudio: "No grupo tem MUITAS crianças. Qual imagem mostra POUCOS?",
      elogio: "Uma criança sozinha é pouco!",
    },
    {
      tipo: "celebracao",
      medalha: "Contrários · Dia 9",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: revisão da semana e medalha grande!",
    },
  ],
};

const a10: AulaEI = {
  slug: "f7-dia-10-antonimos-revisao",
  titulo: "Dia 10 · Revisão — Contrários",
  icone: "🏅",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_ANT,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Revisão dos CONTRÁRIOS! Mistura de todos os pares. Pense bem antes de escolher.",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: joaninha,
      palavra: "PEQUENO",
      antonimo: "GRANDE",
      opcoes: [
        { nome: "LEÃO", imagemUrl: leao, correta: true },
        { nome: "FLOR", imagemUrl: flor, correta: false },
        { nome: "GATO", imagemUrl: gato, correta: false },
      ],
      instrucaoAudio: "A joaninha é PEQUENA. Qual imagem mostra algo GRANDE?",
      elogio: "Lembrou! Grande é o contrário de pequeno.",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: lua,
      palavra: "NOITE",
      antonimo: "DIA",
      opcoes: [
        { nome: "SOL", imagemUrl: sol, correta: true },
        { nome: "CASA", imagemUrl: casa, correta: false },
        { nome: "FLOR", imagemUrl: flor, correta: false },
      ],
      instrucaoAudio: "A lua aparece à NOITE. Qual imagem mostra o DIA?",
      elogio: "O sol é do dia!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: quadroTriste,
      palavra: "TRISTE",
      antonimo: "FELIZ",
      opcoes: [
        { nome: "FELIZ", imagemUrl: quadroAlegre, correta: true },
        { nome: "MENINO", imagemUrl: menino, correta: false },
        { nome: "COELHO", imagemUrl: coelho, correta: false },
      ],
      instrucaoAudio: "Esse rosto é TRISTE. Qual imagem mostra FELIZ?",
      elogio: "Feliz é o contrário de triste!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: campo,
      palavra: "CAMPO",
      antonimo: "CIDADE",
      opcoes: [
        { nome: "CIDADE", imagemUrl: cidade, correta: true },
        { nome: "ÁRVORE", imagemUrl: arvore, correta: false },
        { nome: "SORVETE", imagemUrl: sorvete, correta: false },
      ],
      instrucaoAudio: "Aqui é o CAMPO. Qual imagem mostra a CIDADE?",
      elogio: "Na cidade tem prédios!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "🎒 Missão em Família — Caça aos Contrários",
      convite:
        "Escolha 3 pares de contrários da semana e mostre para alguém da família. Peça para essa pessoa dar outros exemplos de contrários em casa (ex.: aberto/fechado, quente/frio).",
      dicaAdulto:
        "Pares desta semana: grande/pequeno, alto/baixo, dia/noite, quente/frio, feliz/triste, novo/antigo, cidade/campo, muitos/poucos. Use o dia a dia para reforçar: 'Olha, o café está QUENTE — o sorvete é FRIO'. Contraste explícito acelera a memorização (Nagy 1988).",
    },
    {
      tipo: "celebracao",
      medalha: "🏅 Colecionador de Palavras · Semana 2",
      mascoteUrl: mascote,
      falaFinal:
        "Semana 2 fechada! Você já sabe palavras iguais E palavras contrárias. Semana 3: palavras que andam juntas — campos semânticos!",
    },
  ],
};

/* ============================================================
 * SEMANA 3 — Campos semânticos (Família, Casa, Natureza, Cidade)
 * ============================================================
 * Base: Nation (2001) — palavras aprendidas em rede semântica são
 * retidas melhor. A criança agrupa imagens sob uma categoria e,
 * no fim, identifica a "intrusa" (metacognição de categoria).
 */
const BASE_CAMPO =
  "Campos semânticos (Nation 2001): agrupar palavras por categoria fortalece a memória lexical. A criança vê a categoria, escuta a pergunta e escolhe a imagem que pertence — ou a intrusa — reforçando a rede de significados.";

const a11: AulaEI = {
  slug: "f7-dia-11-campo-familia",
  titulo: "Dia 11 · Família",
  icone: "👨‍👩‍👧",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_CAMPO,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Nova semana! Agora vamos juntar palavras que ANDAM JUNTAS. Hoje: FAMÍLIA.",
    },
    {
      tipo: "campoSemantico",
      categoria: "FAMÍLIA",
      categoriaEmoji: "👨‍👩‍👧",
      pergunta: "Qual é da FAMÍLIA?",
      opcoes: [
        { nome: "MENINA", imagemUrl: menina, correta: true },
        { nome: "LEÃO", imagemUrl: leao, correta: false },
        { nome: "CARRO", imagemUrl: carro, correta: false },
      ],
      instrucaoAudio: "Família é o grupo de pessoas que mora junto. Qual imagem é da família?",
      elogio: "A menina faz parte da família!",
    },
    {
      tipo: "campoSemantico",
      categoria: "FAMÍLIA",
      categoriaEmoji: "👨‍👩‍👧",
      pergunta: "Qual TAMBÉM é da FAMÍLIA?",
      opcoes: [
        { nome: "MENINO", imagemUrl: menino, correta: true },
        { nome: "PEIXE", imagemUrl: peixe, correta: false },
        { nome: "SORVETE", imagemUrl: sorvete, correta: false },
      ],
      instrucaoAudio: "Quem mais faz parte da família?",
      elogio: "Menino também é da família!",
    },
    {
      tipo: "celebracao",
      medalha: "Campos · Dia 11",
      mascoteUrl: mascote,
      falaFinal: "FAMÍLIA na coleção. Amanhã: coisas de CASA!",
    },
  ],
};

const a12: AulaEI = {
  slug: "f7-dia-12-campo-casa",
  titulo: "Dia 12 · Casa",
  icone: "🏠",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_CAMPO,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje: coisas que a gente encontra numa CASA.",
    },
    {
      tipo: "campoSemantico",
      categoria: "CASA",
      categoriaEmoji: "🏠",
      pergunta: "Qual é uma CASA?",
      opcoes: [
        { nome: "CASA", imagemUrl: casa, correta: true },
        { nome: "ÁRVORE", imagemUrl: arvore, correta: false },
        { nome: "PEIXE", imagemUrl: peixe, correta: false },
      ],
      instrucaoAudio: "Casa é o lugar onde a gente mora. Qual imagem é uma casa?",
      elogio: "Essa é uma casa!",
    },
    {
      tipo: "campoSemantico",
      categoria: "CASA",
      categoriaEmoji: "🏠",
      pergunta: "Qual TAMBÉM é uma CASA?",
      opcoes: [
        { nome: "CASA MODERNA", imagemUrl: casaModerna, correta: true },
        { nome: "LEÃO", imagemUrl: leao, correta: false },
        { nome: "CARRO", imagemUrl: carro, correta: false },
      ],
      instrucaoAudio: "As casas mudam de forma, mas continuam sendo casa. Qual é a outra casa?",
      elogio: "Também é uma casa, só que mais nova!",
    },
    {
      tipo: "celebracao",
      medalha: "Campos · Dia 12",
      mascoteUrl: mascote,
      falaFinal: "CASA na coleção. Amanhã: NATUREZA!",
    },
  ],
};

const a13: AulaEI = {
  slug: "f7-dia-13-campo-natureza",
  titulo: "Dia 13 · Natureza",
  icone: "🌳",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_CAMPO,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje: coisas da NATUREZA — o que não é feito por gente.",
    },
    {
      tipo: "campoSemantico",
      categoria: "NATUREZA",
      categoriaEmoji: "🌳",
      pergunta: "Qual é da NATUREZA?",
      opcoes: [
        { nome: "ÁRVORE", imagemUrl: arvore, correta: true },
        { nome: "CARRO", imagemUrl: carro, correta: false },
        { nome: "PRÉDIO", imagemUrl: predio, correta: false },
      ],
      instrucaoAudio: "Natureza são as coisas que crescem sozinhas na terra. Qual é da natureza?",
      elogio: "A árvore é da natureza!",
    },
    {
      tipo: "campoSemantico",
      categoria: "NATUREZA",
      categoriaEmoji: "🌳",
      pergunta: "Qual TAMBÉM é da NATUREZA?",
      opcoes: [
        { nome: "FLOR", imagemUrl: flor, correta: true },
        { nome: "SORVETE", imagemUrl: sorvete, correta: false },
        { nome: "CASA MODERNA", imagemUrl: casaModerna, correta: false },
      ],
      instrucaoAudio: "O que mais nasce na natureza?",
      elogio: "A flor é da natureza!",
    },
    {
      tipo: "celebracao",
      medalha: "Campos · Dia 13",
      mascoteUrl: mascote,
      falaFinal: "NATUREZA na coleção. Amanhã: CIDADE!",
    },
  ],
};

const a14: AulaEI = {
  slug: "f7-dia-14-campo-cidade",
  titulo: "Dia 14 · Cidade",
  icone: "🏙️",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_CAMPO,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje: coisas da CIDADE — o que a gente vê nas ruas.",
    },
    {
      tipo: "campoSemantico",
      categoria: "CIDADE",
      categoriaEmoji: "🏙️",
      pergunta: "Qual é da CIDADE?",
      opcoes: [
        { nome: "PRÉDIO", imagemUrl: predio, correta: true },
        { nome: "ÁRVORE", imagemUrl: arvore, correta: false },
        { nome: "PEIXE", imagemUrl: peixe, correta: false },
      ],
      instrucaoAudio: "Na cidade tem muitos prédios altos. Qual imagem é da cidade?",
      elogio: "Prédio é bem da cidade!",
    },
    {
      tipo: "campoSemantico",
      categoria: "CIDADE",
      categoriaEmoji: "🏙️",
      pergunta: "Qual TAMBÉM é da CIDADE?",
      opcoes: [
        { nome: "CARRO", imagemUrl: carro, correta: true },
        { nome: "FLOR", imagemUrl: flor, correta: false },
        { nome: "CAMPO", imagemUrl: campo, correta: false },
      ],
      instrucaoAudio: "O que anda pelas ruas da cidade?",
      elogio: "O carro é da cidade!",
    },
    {
      tipo: "celebracao",
      medalha: "Campos · Dia 14",
      mascoteUrl: mascote,
      falaFinal: "CIDADE na coleção. Amanhã: caça à INTRUSA!",
    },
  ],
};

const a15: AulaEI = {
  slug: "f7-dia-15-campos-intrusa",
  titulo: "Dia 15 · Caça à Intrusa",
  icone: "🕵️",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_CAMPO,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Agora vira o jogo: descubra qual imagem NÃO pertence à categoria. Pense antes de tocar!",
    },
    {
      tipo: "campoSemantico",
      categoria: "FAMÍLIA",
      categoriaEmoji: "👨‍👩‍👧",
      pergunta: "Qual NÃO é da FAMÍLIA?",
      opcoes: [
        { nome: "LEÃO", imagemUrl: leao, correta: true },
        { nome: "MENINA", imagemUrl: menina, correta: false },
        { nome: "MENINO", imagemUrl: menino, correta: false },
      ],
      instrucaoAudio: "Duas dessas fazem parte da família. Qual NÃO é?",
      elogio: "Leão é bicho — não é da família!",
    },
    {
      tipo: "campoSemantico",
      categoria: "NATUREZA",
      categoriaEmoji: "🌳",
      pergunta: "Qual NÃO é da NATUREZA?",
      opcoes: [
        { nome: "PRÉDIO", imagemUrl: predio, correta: true },
        { nome: "ÁRVORE", imagemUrl: arvore, correta: false },
        { nome: "FLOR", imagemUrl: flor, correta: false },
      ],
      instrucaoAudio: "Duas nascem sozinhas. Qual foi construída por gente?",
      elogio: "Prédio é feito por gente — não é da natureza!",
    },
    {
      tipo: "campoSemantico",
      categoria: "CIDADE",
      categoriaEmoji: "🏙️",
      pergunta: "Qual NÃO é da CIDADE?",
      opcoes: [
        { nome: "CAMPO", imagemUrl: campo, correta: true },
        { nome: "PRÉDIO", imagemUrl: predio, correta: false },
        { nome: "CARRO", imagemUrl: carro, correta: false },
      ],
      instrucaoAudio: "Duas são da cidade. Qual é do outro lugar?",
      elogio: "Campo é o contrário de cidade!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "🎒 Missão em Família — Caça aos Campos",
      convite:
        "Escolha uma categoria (família, casa, natureza ou cidade) e ache em casa 3 coisas que pertencem a ela. Depois, invente uma INTRUSA — algo que NÃO pertence — e desafie alguém a descobrir.",
      dicaAdulto:
        "Nomear em voz alta reforça a categoria. Peça à criança para explicar POR QUE cada coisa pertence (ou não) — a justificativa é o momento em que o vocabulário fica ativo (Nation 2001).",
    },
    {
      tipo: "celebracao",
      medalha: "🏅 Colecionador de Palavras · Semana 3",
      mascoteUrl: mascote,
      falaFinal:
        "Semana 3 fechada! Você já sabe agrupar palavras. Semana 4: palavra na frase — usar as palavras na hora certa!",
    },
  ],
};

/* ============================================================
 * SEMANA 4 — Palavra na frase (cloze) + Diploma final
 * Base: Beck & McKeown 2013 (uso da palavra em contexto ativa
 * o léxico). Reaproveita palavras das Semanas 1–3.
 * ============================================================ */

const BASE_CLOZE =
  "Cloze com apoio visual: a criança ouve a frase com uma lacuna, olha a imagem e escolhe a palavra que completa (Beck & McKeown 2013).";

const a16: AulaEI = {
  slug: "f7-dia-16-frase-casa-flor",
  titulo: "Dia 16 · CASA · FLOR · GATO na frase",
  icone: "📝",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_CLOZE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Chegou a última semana da Fase do Vocabulário! Agora as palavras vão pra dentro da frase. Escuta, olha a figura e escolhe a certa!",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: casa,
      frase: "A menina mora numa ___.",
      palavraCorreta: "CASA",
      distratores: ["FLOR", "GATO"],
      instrucaoAudio: "Qual palavra completa a frase?",
      elogio: "Casa é onde a gente mora — perfeito!",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: flor,
      frase: "A ___ do jardim é bonita.",
      palavraCorreta: "FLOR",
      distratores: ["CARRO", "SORVETE"],
      instrucaoAudio: "Qual palavra combina com a imagem?",
      elogio: "Flor bonita no jardim!",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: gato,
      frase: "O ___ mia em cima do muro.",
      palavraCorreta: "GATO",
      distratores: ["PEIXE", "LEÃO"],
      instrucaoAudio: "Quem mia no muro?",
      elogio: "Miau! O gato mia mesmo.",
    },
    {
      tipo: "celebracao",
      medalha: "Frase · Dia 16",
      mascoteUrl: mascote,
      falaFinal: "Três frases completas! Amanhã as palavras contrárias entram na frase.",
    },
  ],
};

const a17: AulaEI = {
  slug: "f7-dia-17-frase-grande-pequeno",
  titulo: "Dia 17 · GRANDE · PEQUENO · ALTO na frase",
  icone: "📏",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_CLOZE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje as palavras contrárias entram na frase. Presta atenção na figura!",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: leao,
      frase: "O leão é um bicho ___.",
      palavraCorreta: "GRANDE",
      distratores: ["PEQUENO", "TRISTE"],
      instrucaoAudio: "Olha o tamanho do leão. Qual palavra combina?",
      elogio: "O leão é grande mesmo!",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: joaninha,
      frase: "A joaninha é bem ___.",
      palavraCorreta: "PEQUENA",
      distratores: ["GRANDE", "FEIA"],
      instrucaoAudio: "E a joaninha? Como ela é?",
      elogio: "Joaninha pequenininha!",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: arvore,
      frase: "A árvore é muito ___.",
      palavraCorreta: "ALTA",
      distratores: ["BAIXA", "FRIA"],
      instrucaoAudio: "Olha a árvore lá em cima. Como ela é?",
      elogio: "Bem alta, chega até o céu!",
    },
    {
      tipo: "celebracao",
      medalha: "Frase · Dia 17",
      mascoteUrl: mascote,
      falaFinal: "Contrários na frase — mandou bem! Amanhã: categorias na frase.",
    },
  ],
};

const a18: AulaEI = {
  slug: "f7-dia-18-frase-familia-cidade",
  titulo: "Dia 18 · FAMÍLIA · CIDADE · NATUREZA na frase",
  icone: "🏘️",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_CLOZE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje as categorias entram nas frases. Pensa: onde essa palavra encaixa?",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: criancasGrupo,
      frase: "Meu pai, minha mãe e eu somos uma ___.",
      palavraCorreta: "FAMÍLIA",
      distratores: ["CIDADE", "FLOR"],
      instrucaoAudio: "Quem mora junto e cuida um do outro?",
      elogio: "Família é quem cuida da gente!",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: predio,
      frase: "Na ___ tem muitos prédios e carros.",
      palavraCorreta: "CIDADE",
      distratores: ["CAMPO", "CASA"],
      instrucaoAudio: "Onde tem prédio alto e muito carro?",
      elogio: "Cidade grande, cheia de gente!",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: arvore,
      frase: "A árvore, a flor e o rio são da ___.",
      palavraCorreta: "NATUREZA",
      distratores: ["ESCOLA", "COZINHA"],
      instrucaoAudio: "O que nasce sozinho na Terra?",
      elogio: "Natureza — tudo que nasce sem a gente fazer!",
    },
    {
      tipo: "celebracao",
      medalha: "Frase · Dia 18",
      mascoteUrl: mascote,
      falaFinal: "Categorias na frase — dominado! Amanhã: revisão geral.",
    },
  ],
};

const a19: AulaEI = {
  slug: "f7-dia-19-revisao-frase",
  titulo: "Dia 19 · Revisão — palavras nas frases",
  icone: "🔁",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_CLOZE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Revisão! Vou misturar tudo: sinônimo, contrário e categoria numa frase só.",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: quadroAlegre,
      frase: "A criança está ___ com o presente.",
      palavraCorreta: "FELIZ",
      distratores: ["TRISTE", "FRIA"],
      instrucaoAudio: "Quem ganha presente fica como?",
      elogio: "Feliz — igual a alegre!",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: sol,
      frase: "De ___ o sol brilha lá no alto.",
      palavraCorreta: "DIA",
      distratores: ["NOITE", "CASA"],
      instrucaoAudio: "Quando o sol brilha?",
      elogio: "De dia mesmo — à noite aparece a lua!",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: casaModerna,
      frase: "Essa casa é ___, foi construída há pouco tempo.",
      palavraCorreta: "NOVA",
      distratores: ["ANTIGA", "PEQUENA"],
      instrucaoAudio: "Casa que acabou de ser feita é como?",
      elogio: "Nova — o contrário de antiga!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "🎒 Missão em Família — Frase do dia",
      convite:
        "Escolha uma palavra que você aprendeu (casa, flor, grande, feliz, família…) e monte uma frase com ela para alguém da casa. Depois peça pra pessoa montar outra frase com a mesma palavra.",
      dicaAdulto:
        "Usar a palavra em frases próprias é o que fixa o vocabulário ativo (Beck & McKeown 2013). Elogie tentativas, não corrija a gramática — o foco é a palavra dentro do contexto.",
    },
    {
      tipo: "celebracao",
      medalha: "Revisão · Dia 19",
      mascoteUrl: mascote,
      falaFinal: "Amanhã é o grande dia: seu diploma da Fase do Vocabulário!",
    },
  ],
};

const a20: AulaEI = {
  slug: "f7-dia-20-diploma-colecionador-palavras",
  titulo: "Dia 20 · Diploma — Colecionador(a) de Palavras",
  icone: "🏆",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica:
    "Encerramento da Fase 7: consolidação de sinônimos, antônimos, campos semânticos e uso em contexto (Beck & McKeown 2013 · Nation 2001).",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Chegou o grande dia! Vamos fazer três desafios finais e depois abrir o seu diploma.",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: casa,
      frase: "Todo mundo gosta de voltar pro seu ___.",
      palavraCorreta: "LAR",
      distratores: ["CARRO", "PEIXE"],
      instrucaoAudio: "Outra palavra pra casa é...",
      elogio: "Lar é o mesmo que casa!",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: quadroTriste,
      frase: "Quem perdeu o brinquedo fica ___.",
      palavraCorreta: "TRISTE",
      distratores: ["FELIZ", "GRANDE"],
      instrucaoAudio: "O contrário de feliz é...",
      elogio: "Triste — o contrário de feliz.",
    },
    {
      tipo: "palavraNaFrase",
      imagemUrl: campo,
      frase: "No ___ tem muita árvore, flor e bicho.",
      palavraCorreta: "CAMPO",
      distratores: ["PRÉDIO", "SORVETE"],
      instrucaoAudio: "Onde tem muito verde e pouca gente?",
      elogio: "Campo — cheio de natureza!",
    },
    {
      tipo: "diplomaFase",
      titulo: "Colecionador(a) de Palavras",
      curso: "Ler com Aurora — Fase 7 · Vocabulário Ativo",
      descricao:
        "Por dominar sinônimos, antônimos, campos semânticos e o uso das palavras em frases — ampliando o vocabulário ativo, base da compreensão leitora.",
      personagem: "aurora",
      numeroColecao: 7,
      totalColecao: 8,
      falaFinal:
        "Você concluiu a Fase 7! Agora coleciona palavras de verdade. Seu diploma tá pronto — clica pra abrir!",
    },
  ],
};

/* ============================================================
 * Curso — Fase 7 (Semanas 1-4 completas · 20 missões)
 * ============================================================ */

export const cursoLerComAuroraFase7: CursoEI = {
  slug: "ler-com-aurora-fase7",
  serie: "pre2",
  serieLabel: "Pré II / 1º Ano (Vocabulário)",
  titulo: "Vocabulário Ativo",
  descricao:
    "Palavras que dizem a mesma coisa, palavras contrárias, palavras que andam juntas e palavras usadas na frase certa.",
  corPrimaria: "#a855f7",
  corSecundaria: "#3b0764",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "f7-semana-01",
      numero: 1,
      titulo: "Semana 1 · Sinônimos por imagem",
      subtitulo: "Colecionador de Palavras",
      aulas: [a1, a2, a3, a4, a5],
    },
    {
      slug: "f7-semana-02",
      numero: 2,
      titulo: "Semana 2 · Antônimos por contraste",
      subtitulo: "Caça aos Contrários",
      aulas: [a6, a7, a8, a9, a10],
    },
    {
      slug: "f7-semana-03",
      numero: 3,
      titulo: "Semana 3 · Campos semânticos",
      subtitulo: "Palavras que Andam Juntas",
      aulas: [a11, a12, a13, a14, a15],
    },
    {
      slug: "f7-semana-04",
      numero: 4,
      titulo: "Semana 4 · Palavra na frase + Diploma",
      subtitulo: "Colecionador(a) de Palavras",
      aulas: [a16, a17, a18, a19, a20],
    },
  ],
};

export function getAulaLerComAuroraFase7(slug: string): AulaEI | undefined {
  for (const u of cursoLerComAuroraFase7.unidades) {
    const found = u.aulas.find((a) => a.slug === slug);
    if (found) return found;
  }
  return undefined;
}

