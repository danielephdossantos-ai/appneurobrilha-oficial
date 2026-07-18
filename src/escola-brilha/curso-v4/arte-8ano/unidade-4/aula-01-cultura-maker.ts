import type { AulaArteV1 } from "../../types";
import fablab from "@/assets/arte-8ano/u4-fablab.jpg.asset.json";
import fablabCidadaos from "@/assets/arte-8ano/u4-fablab-cidadaos.jpg.asset.json";
import gershenfeld from "@/assets/arte-8ano/u4-gershenfeld.jpg.asset.json";
import impressora3d from "@/assets/arte-8ano/u4-3dprinting.jpg.asset.json";
import prusa from "@/assets/arte-8ano/u4-prusa.jpg.asset.json";
import arduino from "@/assets/arte-8ano/u4-arduino.jpg.asset.json";
import raspberryPi from "@/assets/arte-8ano/u4-raspberrypi.jpg.asset.json";
import breadboard from "@/assets/arte-8ano/u4-breadboard.jpg.asset.json";
import breadboard2 from "@/assets/arte-8ano/u4-breadboard2.jpg.asset.json";
import eletronica from "@/assets/arte-8ano/u4-eletronica.jpg.asset.json";
import solda from "@/assets/arte-8ano/u4-solda.jpg.asset.json";
import laser from "@/assets/arte-8ano/u4-laser.jpg.asset.json";
import makerspace from "@/assets/arte-8ano/u4-makerspace.jpg.asset.json";
import wearable from "@/assets/arte-8ano/u4-wearable.jpg.asset.json";
import roboticaOficina from "@/assets/arte-8ano/u4-robotica-oficina.jpg.asset.json";
import ewaste from "@/assets/arte-8ano/u4-ewaste.jpg.asset.json";
import coredumpMaker from "@/assets/arte-8ano/u4-coredump-maker.jpg.asset.json";

/**
 * Arte · 8º Ano · Unidade 4 · Aula 01 — "A Forja Faça-Você-Mesmo: Cultura Maker e Escultura 3D"
 * Metanarrativa: 🔧 Eco-Simulacros da Revolução Digital
 * Foco: FabLab, impressão 3D, Arduino, wearables DIY, robótica com papelão, sustentabilidade + tecnologia.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-cultura-maker",
  titulo: "A Forja Faça-Você-Mesmo — Cultura Maker e Escultura 3D",
  iconeTrilha: "🔧",
  bncc: ["EF69AR01", "EF69AR04", "EF69AR31", "EF69AR32"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Ciber-Designer! Depois do corpo híbrido, os Eco-Simulacros abriram uma nova sala: uma OFICINA cheia de fumaça de solda, luz de laser e uma impressora cuspindo plástico camada por camada. É a Forja Faça-Você-Mesmo. Toca em cada pista pra entender essa nova era da criação.",
    titulo: "🔧 A Forja se Abre",
    instrucao: "Toca em cada pista pra ativar o módulo FabLab",
    itens: [
      { emoji: "🏭", rotulo: "FabLab (Laboratório de Fabricação)", descricao: "Um espaço público equipado com impressoras 3D, cortadoras a laser e ferramentas digitais, onde qualquer pessoa pode transformar uma ideia em objeto real.", cor: "#16a34a", fotoUrl: fablab.url },
      { emoji: "🖨️", rotulo: "Impressão 3D (Manufatura Aditiva)", descricao: "Uma máquina constrói objetos ADICIONANDO camadas finíssimas de material, uma sobre a outra, até virar uma peça sólida e tridimensional.", cor: "#0891b2", fotoUrl: impressora3d.url },
      { emoji: "🔌", rotulo: "Arduino (Hardware Livre)", descricao: "Uma placa eletrônica pequena e barata que qualquer pessoa programa pra ler sensores e controlar luzes, motores e sons — sem precisar de fábrica.", cor: "#7c3aed", fotoUrl: arduino.url },
      { emoji: "♻️", rotulo: "Cultura Maker + Sustentabilidade", descricao: "Faça Você Mesmo: reaproveitar papelão, e-lixo e sucata pra criar robôs, esculturas e protótipos, reduzindo o consumo e o descarte.", cor: "#7c2d12", fotoUrl: ewaste.url },
    ],
    falaFinal: "Sua missão: dominar as ferramentas da Forja e criar sua própria escultura tridimensional com a filosofia Faça Você Mesmo.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de ciber-designer antes de ligar a impressora 3D!",
    perguntas: [
      {
        pergunta: "Uma máquina cria um objeto ADICIONANDO camadas de plástico derretido, uma em cima da outra, até formar uma peça sólida. Como se chama essa tecnologia?",
        fotoUrl: impressora3d.url,
        alternativas: [
          { texto: "Impressão 3D (manufatura aditiva) — o objeto nasce camada por camada", correta: true },
          { texto: "Escultura em mármore — o material é retirado de um bloco maciço", correta: false },
        ],
        feedbackAcerto: "Perfeito! A impressão 3D é ADITIVA: ela constrói somando material, ao contrário do escultor clássico que talha e retira.",
        feedbackErro: "Cuidado: escultura em mármore RETIRA material. A impressão 3D faz o oposto — ela ADICIONA camada por camada.",
      },
      {
        pergunta: "Um grupo de moradores de um bairro usa impressoras 3D e cortadoras a laser públicas pra consertar objetos e criar peças próprias. Que tipo de espaço eles frequentam?",
        fotoUrl: fablabCidadaos.url,
        alternativas: [
          { texto: "FabLab — laboratório de fabricação digital aberto à comunidade", correta: true },
          { texto: "Fábrica fechada — só engenheiros contratados podem entrar", correta: false },
        ],
        feedbackAcerto: "Isso! O FabLab democratiza a fabricação: qualquer cidadão pode aprender e criar com ferramentas digitais.",
        feedbackErro: "Uma fábrica fechada é o OPOSTO do FabLab. O FabLab é aberto, comunitário e ensina fabricação digital pra todos.",
      },
      {
        pergunta: "Uma pessoa programa uma placa Arduino pra acender um LED sempre que um sensor de luz detecta escuridão. Que princípio da cultura maker ela está exercendo?",
        fotoUrl: arduino.url,
        alternativas: [
          { texto: "Hardware livre e autonomia técnica — construir e programar sua própria tecnologia", correta: true },
          { texto: "Consumo passivo — esperar que uma empresa grande lance o produto pronto", correta: false },
        ],
        feedbackAcerto: "Excelente! O Arduino é símbolo do hardware livre: qualquer pessoa programa e monta seus próprios dispositivos.",
        feedbackErro: "A cultura maker é o OPOSTO do consumo passivo: ela dá autonomia técnica pra criar, não só pra comprar.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico da Forja Faça-Você-Mesmo. Toca em cada verbete!",
    cards: [
      { termo: "FabLab (Laboratório de Fabricação)", definicao: "Espaço equipado com impressoras 3D, cortadoras a laser e ferramentas digitais, aberto à comunidade, criado a partir das ideias do pesquisador Neil Gershenfeld no MIT.", emoji: "🏭", cor: "#16a34a", fotoUrl: fablab.url },
      { termo: "Manufatura Aditiva (Impressão 3D)", definicao: "Técnica de fabricação que constrói objetos ADICIONANDO camadas finas de material sucessivamente, a partir de um modelo digital em 3D.", emoji: "🖨️", cor: "#0891b2", fotoUrl: prusa.url },
      { termo: "Hardware Livre (Arduino)", definicao: "Placas eletrônicas de código e projeto ABERTOS, que qualquer pessoa pode programar, copiar e modificar pra criar sensores, robôs e instalações.", emoji: "🔌", cor: "#7c3aed", fotoUrl: arduino.url },
      { termo: "Faça Você Mesmo (DIY) + Sustentabilidade", definicao: "Filosofia de reaproveitar papelão, e-lixo e sucata eletrônica pra criar objetos novos, reduzindo o descarte e questionando o consumo tecnológico.", emoji: "♻️", cor: "#7c2d12", fotoUrl: ewaste.url },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a FORJA DIGITAL virou o novo ateliê da escultura contemporânea.",
    paragrafos: [
      "No fim dos anos 1990, o pesquisador Neil Gershenfeld, do MIT, criou uma disciplina chamada \"Como Fazer (Quase) Qualquer Coisa\". A procura foi tão grande que ele decidiu abrir laboratórios de fabricação digital pra qualquer pessoa da comunidade: nascia o FABLAB.",
      "Um FabLab reúne impressoras 3D, cortadoras a laser e placas eletrônicas num só espaço PÚBLICO. Ali, um estudante pode desenhar uma peça no computador de manhã e segurá-la, sólida, nas mãos à tarde — é a MANUFATURA ADITIVA: o objeto nasce camada sobre camada, em vez de ser talhado de um bloco maciço como fazia o escultor clássico.",
      "Ao lado da impressora, uma pequena placa verde chamada ARDUINO revolucionou a eletrônica: qualquer pessoa pode programá-la pra ler sensores de luz, temperatura ou movimento, e comandar LEDs, motores e sons. É HARDWARE LIVRE — o projeto é aberto, qualquer um pode copiar, modificar e construir o seu.",
      "Toda essa tecnologia se encontra com uma preocupação antiga da arte: o que fazer com o que sobra? Circuitos de computadores velhos, papelão de caixa, garrafas PET e fios descartados viram matéria-prima de ROBÔS DE PAPELÃO e ESCULTURAS ELETRÔNICAS. A cultura maker une inovação e SUSTENTABILIDADE: cada peça reciclada é também uma crítica ao consumo tecnológico descartável.",
      "Quando um artista solda um Arduino dentro de um robô de papelão que se move com sensores de luz, ele está fazendo escultura contemporânea com a filosofia FAÇA VOCÊ MESMO (DIY): a obra nasce da autonomia de quem cria, não da fábrica distante. Ciber-designer da Forja é isso — dominar impressora, solda, código e reciclagem no mesmo projeto.",
    ],
    pigmentos: [
      { nome: "FabLab", hex: "#16a34a", fonte: "Oficina digital aberta à comunidade", emoji: "🏭", fotoUrl: fablab.url },
      { nome: "Manufatura Aditiva", hex: "#0891b2", fonte: "Objeto construído camada por camada", emoji: "🖨️", fotoUrl: impressora3d.url },
      { nome: "Hardware Livre", hex: "#7c3aed", fonte: "Arduino programável e aberto", emoji: "🔌", fotoUrl: arduino.url },
      { nome: "Faça Você Mesmo + Reciclagem", hex: "#7c2d12", fonte: "Papelão e e-lixo viram escultura", emoji: "♻️", fotoUrl: ewaste.url },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do ciber-designer da Forja!",
    perguntas: [
      {
        pergunta: "Qual é a diferença ESSENCIAL entre a escultura clássica em mármore e a impressão 3D?",
        fotoUrl: impressora3d.url,
        alternativas: [
          { texto: "A escultura clássica RETIRA material de um bloco; a impressão 3D ADICIONA material em camadas", correta: true },
          { texto: "Não existe diferença — as duas técnicas fazem exatamente o mesmo processo físico", correta: false },
        ],
        feedbackAcerto: "Correto! Subtrativa x aditiva: são lógicas opostas de construção do volume.",
        feedbackErro: "Repensa: uma técnica RETIRA material (talha), a outra vai SOMANDO camada por camada.",
      },
      {
        pergunta: "Por que o Arduino é considerado um símbolo de HARDWARE LIVRE?",
        fotoUrl: arduino.url,
        alternativas: [
          { texto: "Porque seu projeto é aberto: qualquer pessoa pode estudar, copiar e modificar a placa", correta: true },
          { texto: "Porque só grandes empresas de tecnologia podem programar essa placa específica", correta: false },
        ],
        feedbackAcerto: "Isso! Hardware livre é o oposto do fechado — o código e o design ficam abertos pra todo mundo aprender.",
        feedbackErro: "Esse é o modelo FECHADO que o Arduino combate. O hardware livre é aberto e acessível a qualquer pessoa.",
      },
      {
        pergunta: "Um grupo de estudantes solda um Arduino dentro de um robô feito de caixas de papelão recicladas. Que valores da cultura maker essa obra une?",
        fotoUrl: roboticaOficina.url,
        alternativas: [
          { texto: "Faça Você Mesmo (DIY) + sustentabilidade — tecnologia e reciclagem na mesma escultura", correta: true },
          { texto: "Consumo de luxo — a obra só usa materiais raros e caríssimos, sem reaproveitamento", correta: false },
        ],
        feedbackAcerto: "Perfeito! Reaproveitar sucata com eletrônica programável é a síntese da cultura maker sustentável.",
        feedbackErro: "Pelo contrário: papelão reciclado é justamente a NEGAÇÃO do consumo de luxo — é DIY com sustentabilidade.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada ferramenta ou obra pela LINGUAGEM da cultura maker que ela representa!",
    animais: [
      {
        nome: "Impressora empilhando plástico em camadas", emoji: "🖨️", fotoUrl: impressora3d.url,
        corAlvo: { nome: "Manufatura Aditiva", hex: "#0891b2" },
        opcoes: [
          { nome: "Manufatura Aditiva", hex: "#0891b2" },
          { nome: "Hardware Livre", hex: "#7c3aed" },
          { nome: "Escultura em Bronze", hex: "#78716c" },
        ],
        falaAcerto: "Isso! Construção camada por camada é a marca da manufatura aditiva.",
      },
      {
        nome: "Placa verde programável com sensores", emoji: "🔌", fotoUrl: breadboard.url,
        corAlvo: { nome: "Hardware Livre", hex: "#7c3aed" },
        opcoes: [
          { nome: "Hardware Livre", hex: "#7c3aed" },
          { nome: "FabLab", hex: "#16a34a" },
          { nome: "Manufatura Aditiva", hex: "#0891b2" },
        ],
        falaAcerto: "Correto! Placas abertas e programáveis representam o hardware livre.",
      },
      {
        nome: "Robô de papelão com Arduino reaproveitado", emoji: "♻️", fotoUrl: roboticaOficina.url,
        corAlvo: { nome: "DIY + Sustentabilidade", hex: "#7c2d12" },
        opcoes: [
          { nome: "DIY + Sustentabilidade", hex: "#7c2d12" },
          { nome: "Hardware Livre", hex: "#7c3aed" },
          { nome: "Escultura em Bronze", hex: "#78716c" },
        ],
        falaAcerto: "Perfeito! Reaproveitar sucata e papelão pra fazer arte é DIY com sustentabilidade.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra projetar SUA primeira Escultura Maker Reciclada.",
    passos: [
      { id: "p1", texto: "Coleto materiais reciclados: papelão, garrafas PET, fios e placas de e-lixo", emoji: "♻️", ordem: 1, fotoUrl: ewaste.url },
      { id: "p2", texto: "Esboço a ESTRUTURA da escultura/robô no papel, definindo onde entram os componentes eletrônicos", emoji: "📐", ordem: 2, fotoUrl: makerspace.url },
      { id: "p3", texto: "Monto o circuito numa protoboard, testando sensores e LEDs antes de fixar de vez", emoji: "🔌", ordem: 3, fotoUrl: breadboard2.url },
      { id: "p4", texto: "Solto o ferro de solda pra fixar os componentes de forma definitiva na placa", emoji: "🔥", ordem: 4, fotoUrl: solda.url },
      { id: "p5", texto: "Monto o corpo reciclado por cima do circuito, dou um TÍTULO e escrevo a crítica ambiental da obra", emoji: "🏷️", ordem: 5, fotoUrl: coredumpMaker.url },
    ],
    falaAcerto: "Você acabou de projetar a primeira Escultura Maker Reciclada da Forja Faça-Você-Mesmo!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do ciber-designer da Forja. Toca nas palavras coloridas.",
    titulo: "Diário do Ciber-Designer da Forja",
    trechos: [
      { texto: "Sou ciber-designer. Meu ateliê agora é um", palavraDestaque: "FabLab", corDestaque: "#16a34a" },
      { texto: "Quando desenho no computador e a peça nasce camada por camada, uso a", palavraDestaque: "manufatura aditiva", corDestaque: "#0891b2" },
      { texto: "Quando programo sensores e LEDs numa placa aberta, exercito o", palavraDestaque: "hardware livre", corDestaque: "#7c3aed" },
      { texto: "Se junto papelão, e-lixo e sucata numa escultura eletrônica, pratico o", palavraDestaque: "faça você mesmo (DIY)", corDestaque: "#7c2d12" },
      { texto: "e transformo o que seria lixo em", palavraDestaque: "sustentabilidade criativa", corDestaque: "#f59e0b" },
      { texto: "porque, na Forja, tecnologia e reciclagem caminham juntas." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 A Forja Faça-Você-Mesmo! Arrasta cada peça reciclada pro robô antes que o tempo acabe.",
    titulo: "🎯 A Forja Faça-Você-Mesmo",
    instrucao: "Arrasta cada peça pro lugar certo do robô de papelão antes do tempo acabar!",
    tempoSeg: 40,
    itens: [
      { emoji: "📦", rotulo: "Caixa de papelão (corpo do robô)", cor: "#7c2d12" },
      { emoji: "🔌", rotulo: "Placa Arduino (cérebro)", cor: "#7c3aed" },
      { emoji: "👁️", rotulo: "Sensor de luz (LDR)", cor: "#0891b2" },
      { emoji: "💡", rotulo: "LED reaproveitado (olho)", cor: "#f59e0b" },
      { emoji: "🔋", rotulo: "Bateria recarregável", cor: "#16a34a" },
      { emoji: "🥤", rotulo: "Tampa de garrafa PET (roda)", cor: "#dc2626" },
    ],
    falaFinal: "Robô montado! Um corpo de papelão ganhou vida com hardware livre e sucata reciclada.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a Forja Faça-Você-Mesmo. Toca em cada verbete pra consolidar!",
    titulo: "🔧 Caderno da Forja Faça-Você-Mesmo",
    itens: [
      { emoji: "🏭", rotulo: "FabLab", descricao: "Laboratório de fabricação digital aberto à comunidade, criado a partir das ideias de Neil Gershenfeld no MIT.", cor: "#16a34a", fotoUrl: fablabCidadaos.url },
      { emoji: "🖨️", rotulo: "Manufatura Aditiva", descricao: "Impressão 3D: o objeto nasce ADICIONANDO camadas de material, ao invés de ser talhado de um bloco maciço.", cor: "#0891b2", fotoUrl: prusa.url },
      { emoji: "🔌", rotulo: "Hardware Livre (Arduino)", descricao: "Placa eletrônica de projeto aberto que qualquer pessoa programa pra criar sensores, robôs e instalações interativas.", cor: "#7c3aed", fotoUrl: arduino.url },
      { emoji: "♻️", rotulo: "Faça Você Mesmo + Sustentabilidade", descricao: "Reaproveitar papelão, e-lixo e sucata pra criar esculturas e robôs, reduzindo o descarte tecnológico.", cor: "#7c2d12", fotoUrl: ewaste.url },
      { emoji: "🔥", rotulo: "Solda e Prototipagem", descricao: "Testar circuitos numa protoboard antes de soldar definitivamente os componentes na peça final.", cor: "#dc2626", fotoUrl: solda.url },
      { emoji: "🤖", rotulo: "Escultura Maker Reciclada", descricao: "Robôs e esculturas eletrônicas feitos com sucata, papelão e hardware livre — arte, tecnologia e crítica ambiental juntas.", cor: "#f59e0b", fotoUrl: roboticaOficina.url },
    ],
    falaFinal: "Forja Faça-Você-Mesmo ATIVADA — segundo módulo dos Eco-Simulacros conquistado!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, ciber-designer da Forja!",
    quiz: {
      pergunta: "Um grupo de estudantes cria um robô com corpo de papelão reciclado, controlado por uma placa Arduino programável, num FabLab comunitário. Qual conceito RESUME essa prática artística?",
      alternativas: [
        { texto: "Cultura Maker (Faça Você Mesmo) — união de hardware livre, fabricação digital e sustentabilidade", correta: true },
        { texto: "Escultura acadêmica em mármore — talhada à mão, sem tecnologia nem reaproveitamento", correta: false },
      ],
      feedback: "Excelente! A CULTURA MAKER une hardware livre (Arduino), manufatura digital (FabLab, impressão 3D) e sustentabilidade (reaproveitamento de papelão e e-lixo) na mesma obra. É a filosofia Faça Você Mesmo: qualquer pessoa pode fabricar, programar e criticar o consumo tecnológico através da própria escultura. A escultura em mármore representa a antítese: técnica manual isolada, sem eletrônica nem preocupação com reciclagem.",
    },
    missaoFamilia:
      "📸 Missão Ciber-Maker em Família: com um adulto, reúna materiais recicláveis (papelão, tampinhas, fios, garrafas PET) e prototipe um OBJETO RECICLADO — pode ser um robô, uma luminária ou uma escultura. Desenhe a estrutura, monte com o que tiver em casa e, se possível, adicione um elemento que se mova ou brilhe. Dê um TÍTULO à obra e explique em um áudio de 30s a crítica ambiental por trás dela — mande pro álbum.",
    recompensaTitulo: "🔧 Forja Faça-Você-Mesmo do Eco-Simulacro ATIVADA.",
    recompensaItem: "🤖 Robô de Papelão Ativador + Kit de Solda Luminosa",
  },

  recompensa: { xp: 130, moedas: 65, medalha: "Robô de Papelão Ativador" },
};
