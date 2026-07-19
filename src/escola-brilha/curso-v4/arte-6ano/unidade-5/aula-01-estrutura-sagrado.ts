import type { AulaArteV1 } from "../../types";
import __asset_valeDosReis from "@/assets/arte-6ano/u6-vale-dos-reis.jpg.asset.json";
const valeDosReis = __asset_valeDosReis.url;
import __asset_entradaTumba from "@/assets/arte-6ano/u6-entrada-tumba.jpg.asset.json";
const entradaTumba = __asset_entradaTumba.url;
import __asset_faraoPintura from "@/assets/arte-6ano/u6-fara-pintura.jpg.asset.json";
const faraoPintura = __asset_faraoPintura.url;
import __asset_leiFrontalidade from "@/assets/arte-6ano/u6-lei-frontalidade.jpg.asset.json";
const leiFrontalidade = __asset_leiFrontalidade.url;
import __asset_canoneProporcao from "@/assets/arte-6ano/u6-canone-proporcao.jpg.asset.json";
const canoneProporcao = __asset_canoneProporcao.url;
import __asset_perspectivaHierarquica from "@/assets/arte-6ano/u6-perspectiva-hierarquica.jpg.asset.json";
const perspectivaHierarquica = __asset_perspectivaHierarquica.url;
import __asset_pigmentosEgito from "@/assets/arte-6ano/u6-pigmentos-egito.jpg.asset.json";
const pigmentosEgito = __asset_pigmentosEgito.url;
import paletaEscriba from "@/assets/arte-6ano/u6-paleta-escriba.jpg";

/**
 * Arte · 6º Ano · Unidade 5 · Aula 01 — "A Estrutura do Sagrado: Arte e Rigor no Egito dos Faraós"
 * Metanarrativa: 🧩 O Códice dos Impérios Perdidos
 * Fonte: Pinturas murais do Vale dos Reis (~1300 a.C.) + Cânone de Proporção egípcio
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-estrutura-sagrado",
  titulo: "A Estrutura do Sagrado",
  iconeTrilha: "𓂀",
  bncc: ["EF69AR01", "EF69AR04", "EF69AR31"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Investigador! Brilha abriu a QUINTA página do Códice e ficou confusa: numa pintura de tumba do Vale dos Reis, o peito da pessoa está de FRENTE, mas o rosto, os braços e as pernas estão todos de PERFIL — como se o corpo estivesse quebrado. Isso não é erro. É uma LEI sagrada. Investiga cada pista do Egito antigo.",
    titulo: "𓂀 O Corpo Impossível",
    instrucao: "Toca em cada pista sobre a arte que obedece regras, não os olhos",
    itens: [
      { emoji: "𓊹", rotulo: "Vale dos Reis (~1300 a.C.)", descricao: "Tumbas escavadas na rocha, cobertas de pinturas coloridas feitas para acompanhar o faraó na eternidade — não para agradar visitantes vivos.", cor: "#b45309", fotoUrl: valeDosReis },
      { emoji: "🚪", rotulo: "Entrada da tumba", descricao: "Cada corredor pintado era um ritual em pedra: guiava a alma do morto e afastava o caos. A arte tinha função MÁGICA, não decorativa.", cor: "#78350f", fotoUrl: entradaTumba },
      { emoji: "𓁿", rotulo: "Faraó pintado 'errado'", descricao: "Peito de frente, rosto de perfil, olho desenhado inteiro mesmo de lado, pernas afastadas de perfil. O corpo humano vira um quebra-cabeça de ângulos.", cor: "#dc2626", fotoUrl: faraoPintura },
      { emoji: "📐", rotulo: "Grade invisível", descricao: "Por baixo de cada figura egípcia existe uma malha quadriculada exata, usada pelo escriba para nunca errar as proporções do corpo.", cor: "#0891b2", fotoUrl: canoneProporcao },
    ],
    falaFinal: "Sua missão nesta página: decifrar as LEIS que transformaram o corpo humano em código sagrado.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de escriba real antes de decifrar a parede!",
    perguntas: [
      {
        pergunta: "Por que os egípcios pintavam peito de frente e rosto/pernas de perfil na MESMA figura?",
        fotoUrl: faraoPintura,
        alternativas: [
          { texto: "Para mostrar cada parte do corpo pelo ângulo mais CLARO e reconhecível — não para copiar a realidade", correta: true },
          { texto: "Porque os artistas egípcios não sabiam desenhar direito", correta: false },
        ],
        feedbackAcerto: "Exato! É a Lei da Frontalidade: cada parte aparece pelo ângulo mais completo e legível — ombros de frente, rosto de perfil, olho inteiro.",
        feedbackErro: "Nada de 'erro'. Os escribas eram treinados por ANOS numa grade rígida — a distorção é uma REGRA proposital, não falta de técnica.",
      },
      {
        pergunta: "O que é o Cânone de Proporção egípcio?",
        fotoUrl: canoneProporcao,
        alternativas: [
          { texto: "Um sistema em que o corpo humano é medido em 18 'punhos', do calcanhar à linha do cabelo", correta: true },
          { texto: "Uma lei que proibia pintar animais nas tumbas", correta: false },
        ],
        feedbackAcerto: "Isso! Uma grade quadriculada invisível dividia o corpo em 18 punhos — garantia que TODO faraó fosse pintado com as mesmas proporções perfeitas, século após século.",
        feedbackErro: "O Cânone é sobre MEDIDA do corpo, não sobre o que pode ou não ser pintado. É a régua secreta dos escribas.",
      },
      {
        pergunta: "Numa pintura egípcia, o faraó é enorme e os soldados são minúsculos, mesmo estando todos na mesma cena. Por quê?",
        fotoUrl: perspectivaHierarquica,
        alternativas: [
          { texto: "Perspectiva Hierárquica: o tamanho representa IMPORTÂNCIA social e religiosa, não distância real", correta: true },
          { texto: "Porque o artista não tinha espaço suficiente na parede", correta: false },
        ],
        feedbackAcerto: "Perfeito! Quanto mais poder ou proximidade dos deuses, MAIOR a figura — a régua da perspectiva é o status, não a distância.",
        feedbackErro: "Não é falta de espaço. É um CÓDIGO visual: tamanho = hierarquia. O faraó é grande porque é divino, não porque está 'mais perto'.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do escriba real. Toca em cada verbete!",
    cards: [
      { termo: "Lei da Frontalidade", definicao: "Regra egípcia: cada parte do corpo é pintada pelo ângulo mais claro e completo — peito de frente, rosto e pernas de perfil, olho inteiro.", emoji: "𓁿", cor: "#dc2626", fotoUrl: faraoPintura },
      { termo: "Cânone de Proporção", definicao: "Sistema de medida em 18 'punhos', do calcanhar à linha do cabelo, aplicado sobre uma grade quadriculada para garantir corpos perfeitos e iguais.", emoji: "📐", cor: "#0891b2", fotoUrl: canoneProporcao },
      { termo: "Perspectiva Hierárquica", definicao: "O tamanho da figura representa sua IMPORTÂNCIA (faraó, deus, general), não a distância real — quanto maior, mais poderoso.", emoji: "𓊹", cor: "#1e3a8a", fotoUrl: perspectivaHierarquica },
      { termo: "Arte para a Eternidade", definicao: "As pinturas do Vale dos Reis não eram feitas para o público vivo, mas para durar PARA SEMPRE ao lado do morto — por isso seguem um código rígido.", emoji: "𓂀", cor: "#78350f", fotoUrl: valeDosReis },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como os escribas transformaram regras matemáticas em arte sagrada.",
    paragrafos: [
      "No Egito antigo, a arte não existia para agradar o olho — existia para funcionar como MÁQUINA MÁGICA. As pinturas do Vale dos Reis (~1300 a.C.) cobrem tumbas escavadas na rocha e tinham uma missão: guiar o faraó na vida após a morte. Por isso, cada detalhe seguia um CÓDIGO estrito, repetido por séculos sem quase mudar.",
      "A LEI DA FRONTALIDADE dizia como desenhar o corpo humano: ombros e peito de FRENTE (para mostrar força e poder), mas cabeça, braços, pernas e pés de PERFIL (para ficarem claros e reconhecíveis). O olho, mesmo no rosto de perfil, era pintado inteiro, de frente — porque um olho pela metade parecia 'incompleto' demais para a eternidade.",
      "Por baixo de cada figura existia uma grade invisível: o CÂNONE DE PROPORÇÃO. O corpo inteiro, do calcanhar até a linha do cabelo, media exatamente 18 'punhos' (a largura do punho fechado). Essa grade garantia que qualquer escriba, em qualquer templo, pintasse um corpo com as MESMAS proporções perfeitas — a arte virava matemática aplicada.",
      "Já a PERSPECTIVA HIERÁRQUICA resolvia outro problema: como mostrar quem manda? A resposta não era distância, era TAMANHO. O faraó ocupava metade da parede; ao lado dele, dezenas de soldados minúsculos disputavam o resto do espaço. Quanto mais divino ou poderoso, maior a figura — não importa se ele estava 'mais perto' ou 'mais longe' na cena.",
      "As cores também obedeciam regras: pigmentos puros e chapados, sem sombra, sem gradiente, sempre com um contorno preto firme separando cada forma. Vermelho ocre para a pele masculina, amarelo para a feminina, azul-lápis-lazúli e verde-malaquita para deuses e objetos sagrados. Nada era 'realista' — tudo era SIMBÓLICO, feito para durar e significar, não para parecer real.",
    ],
    pigmentos: [
      { nome: "Ocre vermelho", hex: "#dc2626", fonte: "Pele masculina nas pinturas do Vale dos Reis", emoji: "𓉐", fotoUrl: faraoPintura },
      { nome: "Amarelo-ouro", hex: "#f59e0b", fonte: "Divindades e adornos reais", emoji: "☀️", fotoUrl: pigmentosEgito },
      { nome: "Malaquita (verde-azulada)", hex: "#0891b2", fonte: "Pigmento sagrado usado em amuletos e olhos", emoji: "𓆣", fotoUrl: canoneProporcao },
      { nome: "Lápis-lazúli", hex: "#1e3a8a", fonte: "Azul profundo reservado para deuses e cabelos rituais", emoji: "𓊹", fotoUrl: perspectivaHierarquica },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica se a quinta página do Códice foi decifrada!",
    perguntas: [
      {
        pergunta: "Um escriba egípcio pinta o olho de um rosto de PERFIL, mas o desenha inteiro, como se fosse visto de frente. Por quê?",
        fotoUrl: faraoPintura,
        alternativas: [
          { texto: "A Lei da Frontalidade exige que cada parte apareça pelo ângulo mais CLARO e completo, mesmo quebrando a lógica realista", correta: true },
          { texto: "Porque o escriba esqueceu como o rosto fica de perfil", correta: false },
        ],
        feedbackAcerto: "Isso! Não é esquecimento — é CÓDIGO. Cada parte do corpo escolhe seu ângulo mais legível, mesmo que o conjunto fique 'impossível'.",
        feedbackErro: "Escribas eram treinados por ANOS. O olho de frente no rosto de perfil é regra proposital, não um erro de quem não sabe desenhar.",
      },
      {
        pergunta: "Por que o Cânone de Proporção usava uma grade quadriculada de 18 punhos?",
        fotoUrl: canoneProporcao,
        alternativas: [
          { texto: "Para garantir que todo corpo humano fosse pintado com as MESMAS medidas perfeitas, em qualquer templo ou tumba", correta: true },
          { texto: "Para decorar a parede antes de pintar por cima", correta: false },
        ],
        feedbackAcerto: "Perfeito! A grade era um guia de medida — matemática virando regra artística, repetida por séculos sem quase variar.",
        feedbackErro: "A grade não é decoração — ela desaparece sob a pintura final. Sua função é MEDIR o corpo com precisão total.",
      },
      {
        pergunta: "Numa cena de batalha egípcia, por que o faraó é gigante e os inimigos são pequenos, mesmo estando lado a lado?",
        fotoUrl: perspectivaHierarquica,
        alternativas: [
          { texto: "Perspectiva Hierárquica: tamanho = poder e importância religiosa, não distância real", correta: true },
          { texto: "Porque os inimigos eram realmente menores de estatura", correta: false },
        ],
        feedbackAcerto: "Exato! O tamanho é um CÓDIGO de status — o faraó é grande porque é quase um deus, não porque está fisicamente maior.",
        feedbackErro: "Nada a ver com estatura real. O tamanho na pintura egípcia é um símbolo de HIERARQUIA, não de anatomia.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada pista na Lei egípcia certa.",
    animais: [
      {
        nome: "Peito de frente, rosto de perfil, olho inteiro", emoji: "𓁿", fotoUrl: faraoPintura,
        corAlvo: { nome: "Lei da Frontalidade", hex: "#dc2626" },
        opcoes: [
          { nome: "Lei da Frontalidade", hex: "#dc2626" },
          { nome: "Cânone de Proporção", hex: "#0891b2" },
          { nome: "Perspectiva Hierárquica", hex: "#1e3a8a" },
        ],
        falaAcerto: "Isso! Ângulo mais claro para cada parte do corpo = Lei da Frontalidade.",
      },
      {
        nome: "Corpo medido em 18 punhos sobre grade quadriculada", emoji: "📐", fotoUrl: canoneProporcao,
        corAlvo: { nome: "Cânone de Proporção", hex: "#0891b2" },
        opcoes: [
          { nome: "Cânone de Proporção", hex: "#0891b2" },
          { nome: "Lei da Frontalidade", hex: "#dc2626" },
          { nome: "Perspectiva Hierárquica", hex: "#1e3a8a" },
        ],
        falaAcerto: "Perfeito! Grade + medida do corpo = Cânone de Proporção.",
      },
      {
        nome: "Faraó ocupa metade da parede; soldados minúsculos ao redor", emoji: "𓊹", fotoUrl: perspectivaHierarquica,
        corAlvo: { nome: "Perspectiva Hierárquica", hex: "#1e3a8a" },
        opcoes: [
          { nome: "Perspectiva Hierárquica", hex: "#1e3a8a" },
          { nome: "Lei da Frontalidade", hex: "#dc2626" },
          { nome: "Cânone de Proporção", hex: "#0891b2" },
        ],
        falaAcerto: "Correto! Tamanho representando importância = Perspectiva Hierárquica.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos do 'eu-faço' de Aurora para pintar como um escriba real.",
    passos: [
      { id: "p1", texto: "DESENHO o olho de frente e o nariz de perfil, mesmo com o rosto virado para o lado", emoji: "👁️", ordem: 1, fotoUrl: faraoPintura },
      { id: "p2", texto: "PINTO o peito e os ombros de FRENTE, mostrando força e poder", emoji: "𓁿", ordem: 2, fotoUrl: leiFrontalidade },
      { id: "p3", texto: "VIRO a cintura para baixo, com pernas e pés de PERFIL apontando para o lado", emoji: "🦵", ordem: 3, fotoUrl: canoneProporcao },
      { id: "p4", texto: "MEÇO o corpo todo com a grade de 18 punhos, do calcanhar até a linha do cabelo", emoji: "📐", ordem: 4, fotoUrl: canoneProporcao },
      { id: "p5", texto: "APLICO cores puras e chapadas, com contorno preto firme separando cada forma", emoji: "🎨", ordem: 5, fotoUrl: pigmentosEgito },
    ],
    falaAcerto: "Você acabou de seguir o CÓDIGO do escriba real — corpo medido, regras cumpridas, arte para a eternidade!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do escriba real. Toca nas palavras coloridas.",
    titulo: "Diário do Escriba Real",
    trechos: [
      { texto: "Sou escriba do templo. Pinto obedecendo à", palavraDestaque: "Lei da Frontalidade", corDestaque: "#dc2626" },
      { texto: "e meço cada corpo com o", palavraDestaque: "Cânone de Proporção", corDestaque: "#0891b2" },
      { texto: "Sei que o tamanho de cada figura segue a", palavraDestaque: "Perspectiva Hierárquica", corDestaque: "#1e3a8a" },
      { texto: "Não pinto o que os olhos veem — pinto o que os DEUSES e o FARAÓ precisam para a eternidade." },
      { texto: "Por isso GRADEIO, MEÇO e nunca improviso. A arte egípcia não é sobre parecer real, é sobre durar PARA SEMPRE." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 A Grade do Escriba Real! Ajusta os nós da malha até a pintura egípcia encaixar nos 18 punhos certos.",
    titulo: "𓂀 A Grade do Escriba Real",
    instrucao: "Encaixe cada nó da malha vetorial sobre a pintura deformada!",
    tempoSeg: 35,
    itens: [
      { emoji: "𓁿", rotulo: "Nó da linha do cabelo", cor: "#dc2626" },
      { emoji: "📏", rotulo: "Nó dos ombros (frontal)", cor: "#b45309" },
      { emoji: "🖐️", rotulo: "Nó do punho — unidade de medida", cor: "#0891b2" },
      { emoji: "🦵", rotulo: "Nó do joelho (perfil)", cor: "#78350f" },
      { emoji: "👣", rotulo: "Nó do calcanhar", cor: "#1e3a8a" },
      { emoji: "📐", rotulo: "Grade completa: 18 punhos", cor: "#f59e0b" },
    ],
    falaFinal: "Grade encaixada! A pintura deformada virou um corpo perfeito, dentro do Cânone de Proporção.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a quinta página do Códice. Toca em cada verbete!",
    titulo: "📓 Caderno da Estrutura do Sagrado",
    itens: [
      { emoji: "𓁿", rotulo: "Lei da Frontalidade", descricao: "Peito de frente, rosto/braços/pernas de perfil, olho inteiro — cada parte pelo ângulo mais claro.", cor: "#dc2626", fotoUrl: faraoPintura },
      { emoji: "📐", rotulo: "Cânone de Proporção", descricao: "Grade quadriculada invisível: corpo medido em 18 punhos, do calcanhar à linha do cabelo.", cor: "#0891b2", fotoUrl: canoneProporcao },
      { emoji: "𓊹", rotulo: "Perspectiva Hierárquica", descricao: "Tamanho da figura = importância social e religiosa, não distância real.", cor: "#1e3a8a", fotoUrl: perspectivaHierarquica },
      { emoji: "𓂀", rotulo: "Arte para a eternidade", descricao: "Pinturas do Vale dos Reis não eram para o público vivo — guiavam o faraó na vida após a morte.", cor: "#78350f", fotoUrl: valeDosReis },
      { emoji: "🎨", rotulo: "Cores chapadas + contorno preto", descricao: "Pigmentos puros, sem sombra, sempre com contorno firme separando as formas.", cor: "#b45309", fotoUrl: pigmentosEgito },
      { emoji: "🚪", rotulo: "Vale dos Reis (~1300 a.C.)", descricao: "Tumbas escavadas na rocha, repletas de rituais pintados nas paredes.", cor: "#78350f", fotoUrl: entradaTumba },
      { emoji: "🎨", rotulo: "Paleta do Escriba", descricao: "Sua recompensa: pigmentos de malaquita e ouro desbloqueados no Códice.", cor: "#0891b2", fotoUrl: paletaEscriba },
    ],
    falaFinal: "Quinta página do Códice dos Impérios Perdidos RESTAURADA — as Leis Invariáveis da Arte desbloqueadas!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Desafio do Detetive, escriba real!",
    quiz: {
      pergunta: "Por que as pinturas do Vale dos Reis mostram o peito de frente e o rosto/pernas de perfil na mesma figura, além de usar tamanhos diferentes para faraós e soldados?",
      alternativas: [
        { texto: "Porque a arte egípcia seguia códigos (Lei da Frontalidade e Perspectiva Hierárquica) para representar clareza e poder religioso, não a realidade visual", correta: true },
        { texto: "Porque os egípcios ainda não sabiam desenhar perspectiva realista de jeito nenhum", correta: false },
      ],
      feedback: "Perfeito! A arte egípcia não busca 'parecer real' — busca CLAREZA e HIERARQUIA. A Lei da Frontalidade escolhe o ângulo mais legível para cada parte do corpo, e a Perspectiva Hierárquica usa o tamanho como símbolo de poder. Regras rígidas repetidas por séculos, feitas para a eternidade.",
    },
    missaoFamilia:
      "𓁿 Missão Teatro Estátua da Frontalidade: reúna sua família e monte uma 'pintura viva' egípcia! Cada pessoa deve ficar com os OMBROS de frente para a câmera, mas virar a CABEÇA e as PERNAS de perfil, como uma estátua egípcia. Fiquem rígidos, sem sorrir, por 5 segundos. Tirem uma foto do grupo posando. No app, registre a foto e escreva 3 linhas: qual foi a parte mais difícil de manter na pose rígida da Lei da Frontalidade?",
    recompensaTitulo: "𓂀 Página 5 restaurada — As Leis Invariáveis da Arte do Egito antigo.",
    recompensaItem: "🎨 Paleta de Escriba com Pigmentos de Malaquita e Ouro",
  },

  recompensa: { xp: 110, moedas: 55, medalha: "Paleta de Escriba" },
};
