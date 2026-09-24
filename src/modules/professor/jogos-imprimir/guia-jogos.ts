// Guia do Professor — 50 Jogos Adaptados (texto enviado pela autora, sem alterações de conteúdo).
export type GuiaJogo = { titulo: string; paragrafos: string[] };

const GUIAS: { de: number; ate: number; guia: GuiaJogo }[] = [
  {
    de: 1,
    ate: 1,
    guia: {
      titulo: "01. Emoções - Como me sinto?",
      paragrafos: [
        "Down: reconhecimento facial. TEA 1: nomear emoção. TEA 2-3: apontar carinha. DI: parear igual. TDAH: identificar no momento.",
        "Base: Inteligência Emocional Goleman + Zonas de Regulação - trabalha interocepção e vocabulário emocional.",
        "Adaptação: plastificar + velcro. Para TEA 3 usar foto real da criança fazendo a emoção. Down: espelho ao lado para imitar.",
      ],
    },
  },
  {
    de: 2,
    ate: 10,
    guia: {
      titulo: "02 a 10 - Base Inicial",
      paragrafos: [
        "Todos: percepção visual, coordenação, noção espacial, autonomia. Base Montessori vida prática + TEACCH organização visual.",
        "Destaque - Trilha da Calma: respiração diafragmática 3-3-3. Base Mindfulness infantil + TO regulação sensorial. Para TDAH: usar como pausa ativa. TEA 2-3: co-regulação com adulto fazendo junto.",
      ],
    },
  },
  {
    de: 11,
    ate: 20,
    guia: {
      titulo: "11 a 20 - Alfabetização Inicial",
      paragrafos: [
        "Consciência fonológica. Base Fonoaudiologia - Método Fônico + Gestalt Language Processing para TEA.",
        "Down: trabalhar som + gesto + figura (multissensorial). TEA 1: hiperfoco em letras ok. DI 1: só vogais primeiro. TDAH: letras móveis grandes, pode levantar.",
      ],
    },
  },
  {
    de: 21,
    ate: 30,
    guia: {
      titulo: "21 a 30 - Matemática Concreta",
      paragrafos: [
        "Base Método Singapura Concreto-Pictórico-Abstrato + Numicon Down.",
        "Nunca número solto. Sempre bolinha, dedo, figura. Down: até 5 primeiro. DI 3: parear quantidade. TDAH: contar em voz alta + movimento.",
      ],
    },
  },
  {
    de: 31,
    ate: 32,
    guia: {
      titulo: "31 Semáforo do Comportamento + 32 Pontilhado Grosso",
      paragrafos: [
        "Semáforo: autorregulação. Verde = posso, amarelo = respiro, vermelho = peço ajuda. Base TCC infantil + Zones of Regulation.",
        "Pontilhado: pré-escrita sem pressão. Traçado 1cm. Base TO - Integração visomotora. Para DI 2-3: fazer com giz grosso ou dedo na areia antes do lápis.",
      ],
    },
  },
  {
    de: 33,
    ate: 40,
    guia: {
      titulo: "33 a 40 - Vida Prática e Identidade",
      paragrafos: [
        "Base AOT - Atividades de Vida Diária + TEACCH autonomia.",
        "Sequência passo a passo com foto real. Down: treino em boneco depois no corpo. TEA: mesma ordem sempre. TDAH: checklist com velcro que tira quando faz.",
      ],
    },
  },
  {
    de: 41,
    ate: 51,
    guia: {
      titulo: "41 a 50 - Mundo e Fechamento",
      paragrafos: [
        "Alimentos, Sequência Lógica, Estações, Transporte, Profissões, Celebração: conhecimento de mundo + função executiva (sequenciar).",
        "Celebração Eu Consegui: fechamento com reforço. Base ABA - Reforço e autoeficácia Bandura. Foto + troféu para levar pra casa. Fundamental para Down e DI que precisam ver conquista concreta.",
      ],
    },
  },
];

export const DICAS_GERAIS = [
  "Tempo: TDAH 5-7 min por jogo. TEA 3 e DI 3: 3-5 min e repetir 2x. Down: fazer em dupla.",
  "Material: plastificar tudo. Velcro atrás. Caixa organizadora com foto do jogo na frente (TEACCH).",
];

export function guiaDoJogo(id: number): GuiaJogo | undefined {
  return GUIAS.find((g) => id >= g.de && id <= g.ate)?.guia;
}
