import type { AulaArteV1 } from "../../types";
import { url as teamlabImersivo } from "@/assets/arte-8ano/u3-teamlab-imersivo.jpg.asset.json";
import { url as ondasLuzChao } from "@/assets/arte-8ano/u3-ondas-luz-chao.jpg.asset.json";
import { url as projecao360 } from "@/assets/arte-8ano/u3-projecao-360.jpg.asset.json";
import { url as publicoImerso } from "@/assets/arte-8ano/u3-publico-imerso.jpg.asset.json";
import { url as oiticicaTropicalia } from "@/assets/arte-8ano/u3-oiticica-tropicalia.jpg.asset.json";
import { url as museuVr } from "@/assets/arte-8ano/u3-museu-vr.jpg.asset.json";
import { url as projetorArtistico } from "@/assets/arte-8ano/u3-projetor-artistico.jpg.asset.json";
import { url as sensorPiso } from "@/assets/arte-8ano/u3-sensor-piso.jpg.asset.json";
import { url as cortinaFiosLuz } from "@/assets/arte-8ano/u3-cortina-fios-luz.jpg.asset.json";
import { url as salaProjecaoRios } from "@/assets/arte-8ano/u3-sala-projecao-rios.jpg.asset.json";
import { url as plantaBaixaInstalacao } from "@/assets/arte-8ano/u3-planta-baixa-instalacao.jpg.asset.json";
import { url as passo1 } from "@/assets/arte-8ano/u3-passo1.jpg.asset.json";
import { url as passo2 } from "@/assets/arte-8ano/u3-passo2.jpg.asset.json";
import { url as passo3 } from "@/assets/arte-8ano/u3-passo3.jpg.asset.json";
import { url as passo4 } from "@/assets/arte-8ano/u3-passo4.jpg.asset.json";
import { url as passo5 } from "@/assets/arte-8ano/u3-passo5.jpg.asset.json";
import { url as sombrasParede } from "@/assets/arte-8ano/u3-sombras-parede.jpg.asset.json";
import { url as espelhosLentes } from "@/assets/arte-8ano/u3-espelhos-lentes.jpg.asset.json";
import { url as laserEscultura } from "@/assets/arte-8ano/u3-laser-escultura.jpg.asset.json";
import { url as mapeamentoSuperficie } from "@/assets/arte-8ano/u3-mapeamento-superficie.jpg.asset.json";
import { url as esculturaHolografica } from "@/assets/arte-8ano/u3-escultura-holografica.jpg.asset.json";

/**
 * Arte · 8º Ano · Unidade 3 · Aula 01 — "Instalações Imersivas e a Realidade Virtual Artística"
 * Metanarrativa: 🎭 Eco-Simulacros da Revolução Digital
 * Foco: instalação artística, arte imersiva, arte interativa, teamLab, Hélio Oiticica.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-instalacoes-imersivas",
  titulo: "Instalações Imersivas — A Realidade Virtual Artística",
  iconeTrilha: "🎭",
  bncc: ["EF69AR01", "EF69AR04", "EF69AR31", "EF69AR32"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Brilha e Aurora entram numa sala escura — de repente o CHÃO reage com ondas de luz a cada passo, e as PAREDES viram telas gigantes de projeção. Não existe mais quadro pendurado: a sala INTEIRA é a obra e você está DENTRO dela. Bem-vinda à Instalação Imersiva! Toca em cada pista.",
    titulo: "🎭 A Sala que Respira Luz",
    instrucao: "Toca em cada pista pra ativar o módulo Imersivo",
    itens: [
      { emoji: "🌊", rotulo: "Chão reativo de luz", descricao: "Sensores no piso detectam cada passo e disparam ondas de luz que se espalham pela sala inteira, como se o chão fosse água digital.", cor: "#0891b2", fotoUrl: ondasLuzChao },
      { emoji: "🖼️", rotulo: "Projeção 360° nas paredes", descricao: "Projetores cobrem TODAS as paredes com imagens em movimento, apagando os limites da sala e criando um mundo visual completo ao redor do público.", cor: "#7c3aed", fotoUrl: projecao360 },
      { emoji: "🧑‍🤝‍🧑", rotulo: "Público dentro da obra", descricao: "Diferente de um quadro na parede, aqui o visitante caminha, toca e se movimenta DENTRO da instalação — o corpo do público faz parte da obra.", cor: "#f97316", fotoUrl: publicoImerso },
      { emoji: "🕶️", rotulo: "Realidade Virtual Artística", descricao: "Óculos de VR e sensores criam mundos digitais completos, onde a percepção do espaço real se mistura com camadas virtuais.", cor: "#16a34a", fotoUrl: museuVr },
    ],
    falaFinal: "Sua missão: entender como projetores, sensores e VR transformam uma sala vazia numa obra viva que reage à sua presença.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de exploradora imersiva antes de entrar na sala escura!",
    perguntas: [
      {
        pergunta: "Uma sala inteira — chão, paredes e teto — é coberta por projeções de luz que reagem quando as pessoas caminham. O que é essa obra?",
        fotoUrl: teamlabImersivo,
        alternativas: [
          { texto: "Uma Instalação Artística Imersiva — o espaço inteiro é a obra e o público entra fisicamente nela", correta: true },
          { texto: "Apenas uma decoração de festa, sem nenhuma intenção artística", correta: false },
        ],
        feedbackAcerto: "Perfeito! Na instalação imersiva, o espaço TODO vira suporte da obra, não apenas uma parede.",
        feedbackErro: "Cuidado: não é decoração. É uma linguagem artística que transforma o espaço inteiro em experiência.",
      },
      {
        pergunta: "Em 1967, um artista brasileiro criou um ambiente com areia, brita, plantas tropicais, araras vivas e cabines de TV dentro de uma galeria. Que tipo de obra é essa?",
        fotoUrl: oiticicaTropicalia,
        alternativas: [
          { texto: "Uma Instalação Artística — ambiente tridimensional que o público atravessa com o corpo todo", correta: true },
          { texto: "Uma pintura a óleo emoldurada, pendurada na parede", correta: false },
        ],
        feedbackAcerto: "Isso! É a Tropicália de Hélio Oiticica — marco da instalação artística brasileira.",
        feedbackErro: "Não é pintura emoldurada: é um AMBIENTE que se atravessa com o corpo — instalação.",
      },
      {
        pergunta: "Um museu tem uma sala onde, se duas pessoas se dão as mãos, um rio projetado no chão começa a encher de água virtual. Que característica da arte contemporânea aparece aqui?",
        fotoUrl: salaProjecaoRios,
        alternativas: [
          { texto: "Arte Interativa — a obra só se completa com a AÇÃO do público", correta: true },
          { texto: "Arte estática — a obra é sempre igual, não importa o que o público faça", correta: false },
        ],
        feedbackAcerto: "Exato! Sem a ação das pessoas, o rio nunca enche — a interação é parte da obra.",
        feedbackErro: "Se a obra muda com a ação do público, ela NÃO é estática — é interativa.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico da exploradora imersiva. Toca em cada verbete!",
    cards: [
      { termo: "Instalação Artística", definicao: "Obra tridimensional que ocupa um espaço inteiro (sala, galeria, rua) e que o público atravessa fisicamente, em vez de apenas observar de longe.", emoji: "🏛️", cor: "#f97316", fotoUrl: publicoImerso },
      { termo: "Arte Imersiva", definicao: "Instalação que envolve o espectador com projeções, sons e luzes em 360°, apagando os limites entre a obra e quem a observa.", emoji: "🌊", cor: "#0891b2", fotoUrl: teamlabImersivo },
      { termo: "Arte Interativa", definicao: "Obra que só se completa com a AÇÃO do público — sensores captam movimento, toque ou som e a obra responde em tempo real.", emoji: "🖐️", cor: "#7c3aed", fotoUrl: sensorPiso },
      { termo: "Realidade Virtual Artística", definicao: "Uso de óculos VR, projetores e sensores para criar mundos digitais que se sobrepõem à percepção do espaço físico real.", emoji: "🕶️", cor: "#16a34a", fotoUrl: museuVr },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como a arte deixou de caber numa moldura e virou um ESPAÇO INTEIRO.",
    paragrafos: [
      "Por séculos, a arte morou dentro de uma moldura pendurada na parede. No século XX, artistas começaram a se perguntar: e se a obra fosse o PRÓPRIO ESPAÇO, e o público pudesse entrar nela com o corpo inteiro? Nasce assim a INSTALAÇÃO ARTÍSTICA.",
      "Em 1967, o brasileiro Hélio Oiticica criou a Tropicália: um ambiente labiríntico com areia, brita, plantas tropicais, araras vivas e cabines de TV ligada, montado dentro de uma galeria no Rio de Janeiro. O visitante caminhava descalço, sentia a temperatura, os sons, os cheiros — a obra não podia ser vista de longe, só VIVIDA por dentro.",
      "Décadas depois, o coletivo japonês teamLab levou essa ideia para a era digital: salas onde projetores cobrem paredes, teto e chão com imagens que reagem a sensores de movimento e som. Ao caminhar, o visitante dispara ONDAS DE LUZ no piso; ao se dar as mãos com outra pessoa, um rio projetado começa a encher. Essa é a ARTE IMERSIVA: o espaço inteiro envolve quem entra.",
      "O que torna essas obras ainda mais especiais é que elas são ARTE INTERATIVA: sem a ação do público — caminhar, tocar, se dar as mãos — a obra fica incompleta, quase parada. Cada visitante COAUTORA a experiência, tornando cada visita única e irrepetível.",
      "Com óculos de Realidade Virtual e sensores cada vez mais sofisticados, essa fronteira entre o real e o digital fica ainda mais fina. Museus de arte contemporânea já misturam projeção física, som espacial e VR para criar experiências em que o corpo do visitante é, ao mesmo tempo, público e parte da obra.",
    ],
    pigmentos: [
      { nome: "Instalação Artística", hex: "#f97316", fonte: "Espaço inteiro como obra", emoji: "🏛️", fotoUrl: oiticicaTropicalia },
      { nome: "Arte Imersiva", hex: "#0891b2", fonte: "Projeções em 360°", emoji: "🌊", fotoUrl: teamlabImersivo },
      { nome: "Arte Interativa", hex: "#7c3aed", fonte: "A ação do público completa a obra", emoji: "🖐️", fotoUrl: sensorPiso },
      { nome: "Realidade Virtual Artística", hex: "#16a34a", fonte: "Óculos VR e sensores", emoji: "🕶️", fotoUrl: museuVr },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno da exploradora imersiva!",
    perguntas: [
      {
        pergunta: "O que diferencia uma INSTALAÇÃO ARTÍSTICA de um quadro pendurado na parede?",
        fotoUrl: publicoImerso,
        alternativas: [
          { texto: "A instalação ocupa o espaço inteiro e o público entra fisicamente nela, em vez de só observar de longe", correta: true },
          { texto: "A instalação é só um quadro maior, pendurado numa parede mais alta", correta: false },
        ],
        feedbackAcerto: "Correto! O espaço tridimensional inteiro — e o corpo do público dentro dele — é o que define a instalação.",
        feedbackErro: "Não é tamanho de quadro: é a ocupação do espaço inteiro e a entrada física do público que define a instalação.",
      },
      {
        pergunta: "Por que a Tropicália de Hélio Oiticica é considerada um marco da instalação artística?",
        fotoUrl: oiticicaTropicalia,
        alternativas: [
          { texto: "Porque criava um AMBIENTE completo (areia, plantas, araras, cabines) que o visitante atravessava com o corpo", correta: true },
          { texto: "Porque era uma escultura de bronze fixa, para ser vista só de um ângulo", correta: false },
        ],
        feedbackAcerto: "Isso! A Tropicália é um ambiente sensorial completo, não uma escultura estática.",
        feedbackErro: "Escultura fixa de bronze é o oposto: a Tropicália era um ambiente vivido com o corpo todo.",
      },
      {
        pergunta: "Numa instalação do teamLab, um rio projetado só enche de água virtual quando duas pessoas se dão as mãos. Qual conceito isso ilustra?",
        fotoUrl: salaProjecaoRios,
        alternativas: [
          { texto: "Arte Interativa — a obra depende da AÇÃO do público para se completar", correta: true },
          { texto: "Arte conceitual estática — a obra é a mesma independente do público", correta: false },
        ],
        feedbackAcerto: "Perfeito! Sem a ação das pessoas dando as mãos, o rio nunca enche — é interação pura.",
        feedbackErro: "Se a ação do público muda a obra, ela não é estática: é interativa.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada elemento pela LINGUAGEM da arte imersiva que ele representa!",
    animais: [
      {
        nome: "Sala com areia, plantas e araras (1967)", emoji: "🦜", fotoUrl: oiticicaTropicalia,
        corAlvo: { nome: "Instalação Artística", hex: "#f97316" },
        opcoes: [
          { nome: "Instalação Artística", hex: "#f97316" },
          { nome: "Realidade Virtual", hex: "#16a34a" },
          { nome: "Pintura em Tela", hex: "#78716c" },
        ],
        falaAcerto: "Isso! Ambiente atravessável com o corpo = instalação artística.",
      },
      {
        nome: "Projeções 360° reagindo aos passos", emoji: "🌊", fotoUrl: teamlabImersivo,
        corAlvo: { nome: "Arte Imersiva", hex: "#0891b2" },
        opcoes: [
          { nome: "Arte Imersiva", hex: "#0891b2" },
          { nome: "Instalação Artística", hex: "#f97316" },
          { nome: "Escultura Clássica", hex: "#78716c" },
        ],
        falaAcerto: "Correto! Envolver o público em 360° com luz e som = arte imersiva.",
      },
      {
        nome: "Sensor que faz o rio encher ao dar as mãos", emoji: "🖐️", fotoUrl: sensorPiso,
        corAlvo: { nome: "Arte Interativa", hex: "#7c3aed" },
        opcoes: [
          { nome: "Arte Interativa", hex: "#7c3aed" },
          { nome: "Realidade Virtual", hex: "#16a34a" },
          { nome: "Instalação Artística", hex: "#f97316" },
        ],
        falaAcerto: "Perfeito! A obra só se completa com a ação do público = arte interativa.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra projetar a SUA primeira Instalação Imersiva de bolso.",
    passos: [
      { id: "p1", texto: "Desenho a PLANTA BAIXA da sala escolhida, marcando entrada e paredes disponíveis", emoji: "📐", ordem: 1, fotoUrl: passo1 },
      { id: "p2", texto: "Escolho ONDE ficam o projetor e a cortina de fios de luz que vai receber a imagem", emoji: "🎥", ordem: 2, fotoUrl: passo2 },
      { id: "p3", texto: "Marco com linhas técnicas ONDE ficam os sensores sonoros que vão captar a presença do público", emoji: "🎙️", ordem: 3, fotoUrl: passo3 },
      { id: "p4", texto: "Colorizo indicando como a LUZ reage quando alguém entra, aplaude ou caminha pela sala", emoji: "🎨", ordem: 4, fotoUrl: passo4 },
      { id: "p5", texto: "Dou um TÍTULO pra instalação e escrevo a sensação que ela deve provocar em quem entra", emoji: "🏷️", ordem: 5, fotoUrl: passo5 },
    ],
    falaAcerto: "Você acabou de projetar a primeira Instalação Imersiva de bolso do Laboratório dos Eco-Simulacros!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário da exploradora imersiva. Toca nas palavras coloridas.",
    titulo: "Diário da Exploradora Imersiva",
    trechos: [
      { texto: "Sou exploradora imersiva. Meu suporte não é a parede — é a", palavraDestaque: "sala inteira", corDestaque: "#f97316" },
      { texto: "Quando o público entra fisicamente na obra, isso é", palavraDestaque: "instalação artística", corDestaque: "#f97316" },
      { texto: "Se projetores cobrem tudo em 360° e envolvem quem observa, viro", palavraDestaque: "arte imersiva", corDestaque: "#0891b2" },
      { texto: "Mas nada acontece sem a ação das pessoas — por isso é", palavraDestaque: "arte interativa", corDestaque: "#7c3aed" },
      { texto: "e, com óculos e sensores avançados, tudo se transforma em", palavraDestaque: "realidade virtual artística", corDestaque: "#16a34a" },
      { texto: "onde o corpo do visitante é, ao mesmo tempo, público e parte da obra." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🎯 O Direcionador de Lasers Cênicos! Alinha espelhos e lentes pra mapear a escultura antes do tempo acabar.",
    titulo: "🎯 O Direcionador de Lasers Cênicos",
    instrucao: "Ajusta cada espelho e lente pra que o laser acerte exatamente a escultura antes do tempo acabar!",
    tempoSeg: 40,
    itens: [
      { emoji: "🪞", rotulo: "Espelho angular giratório", cor: "#0891b2" },
      { emoji: "🔍", rotulo: "Lente de foco ajustável", cor: "#7c3aed" },
      { emoji: "🔴", rotulo: "Feixe de laser cênico", cor: "#dc2626" },
      { emoji: "🗿", rotulo: "Escultura-alvo do mapeamento", cor: "#f97316" },
      { emoji: "🎥", rotulo: "Projetor de mapeamento 3D", cor: "#f59e0b" },
      { emoji: "🎚️", rotulo: "Painel de calibração de sensores", cor: "#16a34a" },
    ],
    falaFinal: "Mapeamento perfeito! A escultura ganhou vida com luz projetada em cada curva.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o Laboratório Imersivo. Toca em cada verbete pra consolidar!",
    titulo: "🧪 Caderno da Exploradora Imersiva",
    itens: [
      { emoji: "🏛️", rotulo: "Instalação Artística", descricao: "Obra tridimensional que ocupa um espaço inteiro e que o público atravessa fisicamente.", cor: "#f97316", fotoUrl: publicoImerso },
      { emoji: "🌊", rotulo: "Arte Imersiva", descricao: "Projeções em 360° envolvem o espectador, apagando os limites entre obra e observador.", cor: "#0891b2", fotoUrl: teamlabImersivo },
      { emoji: "🖐️", rotulo: "Arte Interativa", descricao: "A obra só se completa com a ação do público captada por sensores de movimento, toque ou som.", cor: "#7c3aed", fotoUrl: sensorPiso },
      { emoji: "🕶️", rotulo: "Realidade Virtual Artística", descricao: "Óculos VR, projetores e sensores criam mundos digitais sobrepostos à percepção do espaço real.", cor: "#16a34a", fotoUrl: museuVr },
      { emoji: "🦜", rotulo: "Tropicália (Hélio Oiticica, 1967)", descricao: "Ambiente com areia, brita, plantas tropicais, araras vivas e cabines de TV — marco da instalação brasileira.", cor: "#dc2626", fotoUrl: oiticicaTropicalia },
      { emoji: "🎥", rotulo: "Projetor + Sensor", descricao: "Dupla técnica que transforma qualquer sala em superfície reativa de luz e imagem.", cor: "#7c2d12", fotoUrl: projetorArtistico },
    ],
    falaFinal: "Laboratório Imersivo ATIVADO — terceiro módulo dos Eco-Simulacros online!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final, exploradora imersiva!",
    quiz: {
      pergunta: "O que torna uma INSTALAÇÃO IMERSIVA diferente de uma pintura tradicional na parede?",
      alternativas: [
        { texto: "Na instalação, o público entra fisicamente no espaço e faz parte da obra, em vez de só observar de longe", correta: true },
        { texto: "A instalação usa apenas tintas mais brilhantes, enquanto a pintura tradicional usa lâmpadas comuns", correta: false },
      ],
      feedback: "Excelente! A INSTALAÇÃO ARTÍSTICA transforma o espaço inteiro em obra, e o corpo do visitante — caminhando, tocando, interagindo — passa a fazer parte dela. Projetores, sensores e realidade virtual ampliam essa experiência, criando ARTE IMERSIVA e ARTE INTERATIVA. A diferença nunca está no material (tinta vs. lâmpada), mas na relação entre obra e público: contemplar de fora versus VIVER por dentro.",
    },
    missaoFamilia:
      "📸 Missão Imersiva em Família: com um adulto, apague as luzes do quarto e crie um 'Cinema de Sombras' usando a lanterna do celular projetada na parede. Movimente as mãos e objetos pra criar formas, e convide alguém pra interagir com as sombras junto com você. Fotografe o resultado e grave um áudio de 30s explicando como a luz e o movimento criaram uma pequena instalação imersiva — mande pro álbum.",
    recompensaTitulo: "🎭 Projetor Holográfico de Bolso conquistado!",
    recompensaItem: "🧩 A Matriz da Sala Holográfica Interativa",
  },

  recompensa: { xp: 130, moedas: 65, medalha: "Projetor Holográfico de Bolso" },
};
