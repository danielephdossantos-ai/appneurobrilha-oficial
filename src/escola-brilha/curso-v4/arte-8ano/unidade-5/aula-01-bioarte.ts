import type { AulaArteV1 } from "../../types";
import { url as amazoniaAereaFoto } from "@/assets/arte-8ano/u5-amazonia-aerea.jpg.asset.json";
import { url as bacteriaBioluminescenteFoto } from "@/assets/arte-8ano/u5-bacteria-bioluminescente.jpg.asset.json";
import { url as bioluminescenciaLuxFoto } from "@/assets/arte-8ano/u5-bioluminescencia-lux.jpg.asset.json";
import { url as cientistaLabFoto } from "@/assets/arte-8ano/u5-cientista-lab.jpg.asset.json";
import { url as coralBranqueadoFoto } from "@/assets/arte-8ano/u5-coral-branqueado.jpg.asset.json";
import { url as culturaBacterianaFoto } from "@/assets/arte-8ano/u5-cultura-bacteriana.jpg.asset.json";
import { url as desmatamentoFoto } from "@/assets/arte-8ano/u5-desmatamento.jpg.asset.json";
import { url as dnaHeliceFoto } from "@/assets/arte-8ano/u5-dna-helice.jpg.asset.json";
import { url as dnaModeloFoto } from "@/assets/arte-8ano/u5-dna-modelo.jpg.asset.json";
import { url as ecoliPlacaFoto } from "@/assets/arte-8ano/u5-ecoli-placa.jpg.asset.json";
import { url as estufaSensorFoto } from "@/assets/arte-8ano/u5-estufa-sensor.jpg.asset.json";
import { url as fluorescenciaCelulaFoto } from "@/assets/arte-8ano/u5-fluorescencia-celula.jpg.asset.json";
import { url as fotobioreatorFoto } from "@/assets/arte-8ano/u5-fotobioreator.jpg.asset.json";
import { url as micropipetasFoto } from "@/assets/arte-8ano/u5-micropipetas.jpg.asset.json";
import { url as paredeVerdeFoto } from "@/assets/arte-8ano/u5-parede-verde.jpg.asset.json";
import { url as placaPetriFoto } from "@/assets/arte-8ano/u5-placa-petri.jpg.asset.json";
import { url as plantaExperimentoFoto } from "@/assets/arte-8ano/u5-planta-experimento.jpg.asset.json";
import { url as plantaLabFoto } from "@/assets/arte-8ano/u5-planta-lab.jpg.asset.json";
import { url as recifeCoralFoto } from "@/assets/arte-8ano/u5-recife-coral.jpg.asset.json";

/**
 * Arte · 8º Ano · Unidade 5 · Aula 01 — "Bioarte e Eco-Ativismo Digital: A Natureza Programada"
 * Metanarrativa: 🌿 Eco-Simulacros da Revolução Digital
 * Foco: bioarte, eco-ativismo visual, sinais biônicos, Eduardo Kac, arte + biotecnologia + software.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-bioarte",
  titulo: "Bioarte e Eco-Ativismo Digital — A Natureza Programada",
  iconeTrilha: "🌿",
  bncc: ["EF69AR01", "EF69AR04", "EF69AR31", "EF69AR32"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Bio-Designer! O Laboratório Biomecânico se transformou numa ESTUFA conectada a um laboratório de biotecnologia. Plantas com eletrodos nas folhas geram melodias, bactérias brilham sob luz UV e um sensor de umidade prepara um tuíte de socorro. Bem-vinda(o) aos Eco-Simulacros: aqui a NATUREZA vira o novo suporte da arte. Toca em cada pista.",
    titulo: "🌿 O Despertar da Natureza Programada",
    instrucao: "Toca em cada pista pra ativar o módulo Bio-Maker",
    itens: [
      { emoji: "🧫", rotulo: "Bioarte (arte + organismos vivos)", fotoUrl: culturaBacterianaFoto, descricao: "A Bioarte usa bactérias, plantas, fungos e até DNA como MATERIAL artístico, combinando biotecnologia com softwares que traduzem sinais biológicos em som, luz e imagem.", cor: "#16a34a" },
      { emoji: "🌱", rotulo: "Plantas com eletrodos", fotoUrl: plantaExperimentoFoto, descricao: "Sensores presos às folhas captam variações elétricas naturais da planta e um software converte esses sinais em MELODIAS — a planta 'compõe' em tempo real.", cor: "#0891b2" },
      { emoji: "📡", rotulo: "Eco-Ativismo Visual", fotoUrl: desmatamentoFoto, descricao: "Gráficos, mapas e instalações que traduzem dados ambientais (desmatamento, poluição, seca) em imagens que DENUNCIAM o colapso climático.", cor: "#dc2626" },
      { emoji: "🔌", rotulo: "Sinais Biônicos", fotoUrl: bioluminescenciaLuxFoto, descricao: "Impulsos elétricos de seres vivos (plantas, corpo humano, bactérias) captados por sensores e reprogramados em dados digitais interpretáveis por máquinas.", cor: "#7c3aed" },
    ],
    falaFinal: "Sua missão: entender como a vida biológica virou matéria-prima da arte digital — e como isso pode SALVAR o planeta.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de bio-designer antes de entrar na estufa!",
    perguntas: [
      {
        pergunta: "Um artista cria uma bactéria com uma mutação controlada pela internet, a partir de uma frase da Bíblia traduzida em código Morse e depois em DNA. Que tipo de arte é essa?",
        fotoUrl: bacteriaBioluminescenteFoto,
        alternativas: [
          { texto: "Bioarte — usa organismos vivos (bactérias, DNA) como material artístico junto com tecnologia digital", correta: true },
          { texto: "Escultura em mármore — obra estática sem organismos vivos", correta: false },
        ],
        feedbackAcerto: "Isso! Bioarte funde biologia, biotecnologia e software numa única obra viva.",
        feedbackErro: "Mármore não muda nem reage. Aqui a obra é FEITA de vida — bactéria, DNA, mutação real.",
      },
      {
        pergunta: "Uma samambaia tem um sensor de umidade que publica um tuíte automático quando a terra está seca. Isso é um exemplo de quê?",
        fotoUrl: estufaSensorFoto,
        alternativas: [
          { texto: "Sinal Biônico traduzido em Eco-Ativismo Digital — a planta 'fala' pra pedir ajuda", correta: true },
          { texto: "Um erro de programação sem nenhuma intenção artística ou ecológica", correta: false },
        ],
        feedbackAcerto: "Exato! O sinal biológico vira dado digital que gera uma AÇÃO ativista automática.",
        feedbackErro: "Não é erro: é intencional! O sensor traduz a sede da planta em denúncia digital.",
      },
      {
        pergunta: "Um gráfico mostra árvores mudando de cor de verde pra vermelho conforme dados de satélite indicam desmatamento. Que linguagem artística é essa?",
        fotoUrl: amazoniaAereaFoto,
        alternativas: [
          { texto: "Eco-Ativismo Visual — dados ambientais viram imagem pra sensibilizar o público", correta: true },
          { texto: "Pintura decorativa sem relação nenhuma com dados reais", correta: false },
        ],
        feedbackAcerto: "Perfeito! Transformar dados de satélite em cor e forma é uma poderosa ferramenta de denúncia.",
        feedbackErro: "Esses gráficos usam dados REAIS de satélite — não é decoração, é ativismo com números.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do bio-designer. Toca em cada verbete!",
    cards: [
      { termo: "Bioarte", fotoUrl: placaPetriFoto, definicao: "Linguagem artística que usa organismos vivos — bactérias, plantas, fungos, DNA — como material, combinando biotecnologia e software.", emoji: "🧫", cor: "#16a34a" },
      { termo: "Eco-Ativismo Visual", fotoUrl: paredeVerdeFoto, definicao: "Uso de dados ambientais (satélite, sensores) transformados em imagens, gráficos e instalações que denunciam problemas ecológicos.", emoji: "📡", cor: "#dc2626" },
      { termo: "Sinais Biônicos", fotoUrl: fluorescenciaCelulaFoto, definicao: "Impulsos elétricos naturais de seres vivos captados por sensores e convertidos em dados digitais interpretáveis por softwares e máquinas.", emoji: "🔌", cor: "#7c3aed" },
      { termo: "Mutação Controlada", fotoUrl: dnaHeliceFoto, definicao: "Alteração genética induzida artisticamente (ex.: luz UV) e comandada remotamente pela internet, unindo genética e interatividade digital.", emoji: "🧬", cor: "#0891b2" },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a VIDA virou o novo suporte da arte contemporânea.",
    paragrafos: [
      "Depois do corpo vestido de circuitos, a arte contemporânea deu outro salto radical: usar a PRÓPRIA VIDA como matéria-prima. Bactérias, plantas, fungos e DNA deixaram de ser só objeto de estudo da ciência — viraram tinta, pincel e tela da BIOARTE.",
      "Em 1999, o artista Eduardo Kac criou a obra 'Genesis': ele pegou uma frase do livro bíblico de Gênesis, traduziu pra código MORSE, depois converteu o Morse num CÓDIGO GENÉTICO usando as quatro letras do DNA (A, C, T, G) e sintetizou um gene com essa sequência, inserido numa bactéria real.",
      "A bactéria de Kac ficava exposta numa galeria, e qualquer pessoa no mundo podia acessar um site e ACIONAR uma luz ultravioleta sobre ela pela internet. A luz UV causava mutações reais no gene artificial — ou seja, o PÚBLICO, à distância, mudava o 'texto genético' da obra em tempo real.",
      "Hoje a bioarte também vira ECO-ATIVISMO: sensores de umidade presos a uma samambaia publicam um tuíte quando a planta está com sede; eletrodos em folhas captam sinais elétricos e um software os transforma em MELODIAS; gráficos alimentados por dados de satélite mostram árvores mudando de verde pra vermelho conforme avança o desmatamento.",
      "Tudo isso usa SINAIS BIÔNICOS: impulsos elétricos que a vida produz naturalmente, mas que só se tornam visíveis, sonoros ou virais quando um sensor e um software os traduzem. Bio-designer é isso: escutar a natureza com tecnologia — e transformar essa escuta em denúncia e em arte.",
    ],
    pigmentos: [
      { nome: "Bioarte", hex: "#16a34a", fonte: "Organismos vivos como material", emoji: "🧫", fotoUrl: ecoliPlacaFoto },
      { nome: "Eduardo Kac / Genesis", hex: "#0891b2", fonte: "DNA + Morse + mutação via web", emoji: "🧬", fotoUrl: dnaModeloFoto },
      { nome: "Eco-Ativismo Visual", hex: "#dc2626", fonte: "Dados de satélite viram imagem", emoji: "📡", fotoUrl: coralBranqueadoFoto },
      { nome: "Sinais Biônicos", hex: "#7c3aed", fonte: "Impulsos da vida traduzidos em dados", emoji: "🔌", fotoUrl: micropipetasFoto },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do bio-designer!",
    perguntas: [
      {
        pergunta: "Na obra 'Genesis' de Eduardo Kac, qual foi o CAMINHO da transformação da frase original até a bactéria?",
        fotoUrl: fotobioreatorFoto,
        alternativas: [
          { texto: "Frase bíblica → código Morse → sequência genética (A, C, T, G) → gene inserido numa bactéria real", correta: true },
          { texto: "Frase bíblica → tinta a óleo → tela → moldura de madeira entalhada", correta: false },
        ],
        feedbackAcerto: "Correto! Esse caminho é o que faz do 'Genesis' uma obra de bioarte pioneira.",
        feedbackErro: "Tinta a óleo é técnica clássica. O 'Genesis' passa por Morse e DNA — é bioarte, não pintura.",
      },
      {
        pergunta: "O que torna o sensor de umidade da samambaia uma obra de ECO-ATIVISMO?",
        fotoUrl: cientistaLabFoto,
        alternativas: [
          { texto: "Ele traduz um sinal biológico (sede da planta) em uma ação digital pública (o tuíte) que sensibiliza pessoas", correta: true },
          { texto: "Ele só serve pra regar a planta automaticamente, sem nenhuma intenção comunicativa", correta: false },
        ],
        feedbackAcerto: "Isso! A ação automática vira DISCURSO — a planta 'denuncia' publicamente sua necessidade.",
        feedbackErro: "Se fosse só irrigação automática não seria arte. O que importa é a COMUNICAÇÃO pública gerada.",
      },
      {
        pergunta: "Por que os eletrodos nas folhas de uma planta podem gerar MÚSICA?",
        fotoUrl: plantaLabFoto,
        alternativas: [
          { texto: "Porque captam sinais biônicos (impulsos elétricos naturais) e um software os converte em notas musicais", correta: true },
          { texto: "Porque as plantas têm cordas vocais escondidas dentro do caule", correta: false },
        ],
        feedbackAcerto: "Exato! Não é som 'natural' da planta — é a TRADUÇÃO digital de um sinal elétrico real.",
        feedbackErro: "Plantas não têm cordas vocais. O som vem da tradução digital dos sinais elétricos captados.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada obra pelo CONCEITO de bioarte e eco-ativismo que ela usa!",
    animais: [
      {
        nome: "Bactéria mutante controlada pela web", emoji: "🧬", fotoUrl: bacteriaBioluminescenteFoto,
        corAlvo: { nome: "Bioarte", hex: "#16a34a" },
        opcoes: [
          { nome: "Bioarte", hex: "#16a34a" },
          { nome: "Eco-Ativismo Visual", hex: "#dc2626" },
          { nome: "Pintura a Óleo", hex: "#78716c" },
        ],
        falaAcerto: "Isso! Organismo vivo modificado como obra = bioarte.",
      },
      {
        nome: "Gráfico de árvores mudando de cor por dados de satélite", emoji: "📡", fotoUrl: recifeCoralFoto,
        corAlvo: { nome: "Eco-Ativismo Visual", hex: "#dc2626" },
        opcoes: [
          { nome: "Eco-Ativismo Visual", hex: "#dc2626" },
          { nome: "Sinais Biônicos", hex: "#7c3aed" },
          { nome: "Escultura em Bronze", hex: "#78716c" },
        ],
        falaAcerto: "Correto! Dados ambientais virando imagem de alerta = eco-ativismo visual.",
      },
      {
        nome: "Planta com eletrodos que vira melodia", emoji: "🔌", fotoUrl: plantaExperimentoFoto,
        corAlvo: { nome: "Sinais Biônicos", hex: "#7c3aed" },
        opcoes: [
          { nome: "Sinais Biônicos", hex: "#7c3aed" },
          { nome: "Bioarte", hex: "#16a34a" },
          { nome: "Prótese Poética", hex: "#0891b2" },
        ],
        falaAcerto: "Perfeito! Impulso elétrico da planta traduzido em som = sinal biônico.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra criar o SEU próprio Cartaz Bio-Ativista.",
    passos: [
      { id: "p1", texto: "Observo de perto uma folha real por alguns minutos, notando veias, textura e formato", emoji: "🍃", ordem: 1, fotoUrl: plantaLabFoto },
      { id: "p2", texto: "Desenho o contorno de uma árvore com galhos que viram RAÍZES de circuito eletrônico", emoji: "🌳", ordem: 2, fotoUrl: paredeVerdeFoto },
      { id: "p3", texto: "Marco com linhas vermelhas onde ficariam sensores fictícios (umidade, luz, som)", emoji: "📝", ordem: 3, fotoUrl: estufaSensorFoto },
      { id: "p4", texto: "Coloro com verdes, azuis e dourados indicando folhas, fios de cobre e dados digitais", emoji: "🎨", ordem: 4, fotoUrl: fluorescenciaCelulaFoto },
      { id: "p5", texto: "Escrevo uma frase de denúncia ecológica embaixo e dou um TÍTULO ao cartaz — está pronto!", emoji: "🏷️", ordem: 5, fotoUrl: amazoniaAereaFoto },
    ],
    falaAcerto: "Você acabou de criar o primeiro Cartaz Bio-Ativista da Estufa Digital!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do bio-designer. Toca nas palavras coloridas.",
    titulo: "Diário do Bio-Designer",
    trechos: [
      { texto: "Sou bio-designer. Meu suporte não é a tela — é a", palavraDestaque: "vida", corDestaque: "#16a34a" },
      { texto: "Quando misturo organismos vivos com tecnologia, faço", palavraDestaque: "bioarte", corDestaque: "#16a34a" },
      { texto: "Como Eduardo Kac fez em 1999, traduzindo uma frase em DNA na obra", palavraDestaque: "Genesis", corDestaque: "#0891b2" },
      { texto: "Se transformo dados ambientais em imagens de alerta, faço", palavraDestaque: "eco-ativismo visual", corDestaque: "#dc2626" },
      { texto: "E quando capto impulsos elétricos da natureza com sensores, trabalho com", palavraDestaque: "sinais biônicos", corDestaque: "#7c3aed" },
      { texto: "porque escutar a natureza com tecnologia também é uma forma de defendê-la." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 O Sintetizador de Seiva Eletrônica! Traduz os impulsos da planta digital em melodia antes do tempo acabar.",
    titulo: "🎯 O Sintetizador de Seiva Eletrônica",
    instrucao: "Toca cada impulso da planta digital na ordem certa pra formar a melodia biônica!",
    tempoSeg: 40,
    itens: [
      { emoji: "🌿", rotulo: "Impulso da folha nº1", cor: "#16a34a", fotoUrl: plantaExperimentoFoto },
      { emoji: "🎵", rotulo: "Nota traduzida (Dó biônico)", cor: "#0891b2", fotoUrl: bioluminescenciaLuxFoto },
      { emoji: "⚡", rotulo: "Sinal elétrico da raiz", cor: "#f59e0b", fotoUrl: dnaHeliceFoto },
      { emoji: "🎚️", rotulo: "Sintetizador de seiva", cor: "#7c3aed", fotoUrl: micropipetasFoto },
      { emoji: "🔊", rotulo: "Amplificador orgânico", cor: "#dc2626", fotoUrl: fotobioreatorFoto },
      { emoji: "🎶", rotulo: "Melodia final da planta", cor: "#16a34a", fotoUrl: culturaBacterianaFoto },
    ],
    falaFinal: "Melodia sintetizada! A planta digital acabou de compor sua primeira música biônica.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a Estufa Digital. Toca em cada verbete pra consolidar!",
    titulo: "🌿 Caderno do Bio-Designer",
    itens: [
      { emoji: "🧫", rotulo: "Bioarte", fotoUrl: placaPetriFoto, descricao: "Organismos vivos (bactérias, plantas, DNA) usados como material artístico, combinando biotecnologia e software.", cor: "#16a34a" },
      { emoji: "🧬", rotulo: "Eduardo Kac / Genesis (1999)", fotoUrl: dnaModeloFoto, descricao: "Frase bíblica → Morse → código genético (A, C, T, G) → bactéria com mutação controlada pela internet via luz UV.", cor: "#0891b2" },
      { emoji: "📡", rotulo: "Eco-Ativismo Visual", fotoUrl: desmatamentoFoto, descricao: "Dados ambientais (satélite, sensores) transformados em imagens e gráficos que denunciam o colapso ecológico.", cor: "#dc2626" },
      { emoji: "🔌", rotulo: "Sinais Biônicos", fotoUrl: fluorescenciaCelulaFoto, descricao: "Impulsos elétricos naturais de seres vivos captados por sensores e traduzidos em dados digitais interpretáveis.", cor: "#7c3aed" },
      { emoji: "🌱", rotulo: "Sensor de Umidade Ativista", fotoUrl: estufaSensorFoto, descricao: "Dispositivo que capta a sede de uma planta e publica um alerta digital automático — natureza que 'fala' online.", cor: "#0e7490" },
      { emoji: "🎶", rotulo: "Sintetizador de Seiva", fotoUrl: plantaLabFoto, descricao: "Software que converte impulsos elétricos de plantas em melodias — a planta como compositora biônica.", cor: "#f59e0b" },
    ],
    falaFinal: "Estufa Digital ATIVADA — mais um módulo dos Eco-Simulacros online!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, bio-designer!",
    quiz: {
      pergunta: "O que caracteriza a BIOARTE como linguagem da arte contemporânea?",
      alternativas: [
        { texto: "O uso de organismos vivos — plantas, bactérias, DNA — combinados com biotecnologia e software digital", correta: true },
        { texto: "O uso exclusivo de tintas a óleo sobre tela e mármore italiano esculpido à mão", correta: false },
      ],
      feedback:
        "Excelente! A BIOARTE transforma seres vivos — bactérias, plantas e até sequências de DNA — em matéria-prima artística, unindo biotecnologia, sensores e software. É o caso de Eduardo Kac, que transformou uma frase bíblica em código genético numa bactéria controlada pela internet, ou da samambaia que tuíta quando tem sede. Tintas a óleo e mármore são materiais tradicionais e ESTÁTICOS — o oposto da vida que reage, muta e se comunica em tempo real na bioarte.",
    },
    missaoFamilia:
      "🌱 Missão Investigadores Botânicos em Família: com um adulto, escolha uma planta de casa ou do quintal e OBSERVE suas folhas por 5 minutos em silêncio — textura, veias, cor, reação à luz. Depois desenhe no caderno essa folha e imagine que sensores fictícios estão presos a ela: onde ficariam, e que sinal ela enviaria (som, luz, tuíte)? Escreva uma frase de eco-ativismo pra essa planta e mande pro álbum.",
    recompensaTitulo: "🌿 O Biossetor Regenerativo da Estufa Digital ATIVADO.",
    recompensaItem: "📟 Sensor de Pulso Clorofilado Digital",
  },

  recompensa: { xp: 130, moedas: 65, medalha: "Sensor de Pulso Clorofilado Digital" },
};
