/**
 * Perfil de apoio — a ponte entre a SONDAGEM INICIAL e o MOTOR ADAPTATIVO.
 * ---------------------------------------------------------------------------
 * Antes, a sondagem só sugeria por onde começar a trilha e depois era
 * esquecida. Agora ela define o NÍVEL DE APOIO com que a criança entra em
 * cada aula:
 *
 *   intensivo → pista aparece ANTES de responder, é lida em voz alta,
 *               3 tentativas antes de revelar, reensino sempre visível.
 *   moderado  → pista na 1ª tentativa errada (comportamento padrão).
 *   leve      → pista na 1ª tentativa errada, sem leitura automática.
 *
 * O perfil não é fixo: cada avaliação concluída RECALIBRA o nível
 * (nota baixa sobe o apoio; duas notas altas seguidas baixam o apoio).
 * Assim a sondagem inicia a adaptação e o desempenho a mantém viva.
 */
import { lerSondagem } from "./sondagem-inicial";

export type NivelApoio = "intensivo" | "moderado" | "leve";

export type AjustesApoio = {
  nivel: NivelApoio;
  /** Mostra a pista já na primeira leitura da questão. */
  dicaAntecipada: boolean;
  /** Lê a pista em voz alta quando ela aparece. */
  lerDicaEmVozAlta: boolean;
  /** Quantas tentativas erradas antes de revelar a resposta. */
  tentativasAntesDeRevelar: number;
  /** Velocidade da fala (native-tts) nas leituras de apoio. */
  velocidadeFala: number;
  /** Reensino visível mesmo quando a criança acerta. */
  reensinoSempre: boolean;
  /** Habilidades que a sondagem apontou como frágeis. */
  habilidadesFracas: string[];
  /** De onde veio o nível: sondagem, desempenho nas aulas ou padrão. */
  origem: "sondagem" | "desempenho" | "padrao";
};

const AJUSTES: Record<NivelApoio, Omit<AjustesApoio, "habilidadesFracas" | "origem">> = {
  intensivo: {
    nivel: "intensivo",
    dicaAntecipada: true,
    lerDicaEmVozAlta: true,
    tentativasAntesDeRevelar: 3,
    velocidadeFala: 0.6,
    reensinoSempre: true,
  },
  moderado: {
    nivel: "moderado",
    dicaAntecipada: false,
    lerDicaEmVozAlta: true,
    tentativasAntesDeRevelar: 2,
    velocidadeFala: 0.72,
    reensinoSempre: false,
  },
  leve: {
    nivel: "leve",
    dicaAntecipada: false,
    lerDicaEmVozAlta: false,
    tentativasAntesDeRevelar: 2,
    velocidadeFala: 0.85,
    reensinoSempre: false,
  },
};

const ORDEM: NivelApoio[] = ["leve", "moderado", "intensivo"];

export type EstadoApoio = {
  nivel: NivelApoio;
  origem: "sondagem" | "desempenho" | "padrao";
  /** Notas recentes das avaliações (0..1), mais nova por último. */
  notas: number[];
  atualizadoEm: string;
};

const CHAVE = (cursoSlug: string) => `eb.v4.apoio.${cursoSlug}`;

function nivelDaSondagem(acertos: number, total: number): NivelApoio {
  const p = total > 0 ? acertos / total : 0;
  if (p < 0.5) return "intensivo";
  if (p < 0.85) return "moderado";
  return "leve";
}

function lerEstado(cursoSlug: string): EstadoApoio | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CHAVE(cursoSlug));
    return raw ? (JSON.parse(raw) as EstadoApoio) : null;
  } catch {
    return null;
  }
}

function salvarEstado(cursoSlug: string, e: EstadoApoio) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CHAVE(cursoSlug), JSON.stringify(e));
  } catch {
    /* modo privado */
  }
}

/**
 * Nível de apoio atual do curso.
 * Prioridade: recalibração por desempenho → sondagem inicial → padrão.
 */
export function lerApoio(cursoSlug: string): AjustesApoio {
  const sondagem = lerSondagem(cursoSlug);
  const estado = lerEstado(cursoSlug);
  const habilidadesFracas = sondagem?.erros ?? [];

  if (estado?.origem === "desempenho") {
    return { ...AJUSTES[estado.nivel], habilidadesFracas, origem: "desempenho" };
  }
  if (sondagem) {
    const nivel = nivelDaSondagem(sondagem.acertos, sondagem.total);
    return { ...AJUSTES[nivel], habilidadesFracas, origem: "sondagem" };
  }
  return { ...AJUSTES.moderado, habilidadesFracas, origem: "padrao" };
}

/**
 * Chamado quando a criança fecha a avaliação de uma aula.
 * Nota < 70% sobe um degrau de apoio; duas notas >= 90% seguidas descem um.
 */
export function registrarDesempenhoAvaliacao(cursoSlug: string, nota: number): AjustesApoio {
  const atual = lerApoio(cursoSlug);
  const estado = lerEstado(cursoSlug);
  const notas = [...(estado?.notas ?? []), nota].slice(-3);

  let nivel = atual.nivel;
  const i = ORDEM.indexOf(nivel);
  if (nota < 0.7 && i < ORDEM.length - 1) {
    nivel = ORDEM[i + 1];
  } else if (notas.length >= 2 && notas.slice(-2).every((n) => n >= 0.9) && i > 0) {
    nivel = ORDEM[i - 1];
  }

  salvarEstado(cursoSlug, {
    nivel,
    origem: "desempenho",
    notas,
    atualizadoEm: new Date().toISOString(),
  });

  return lerApoio(cursoSlug);
}

/** Zera a recalibração e volta a valer a sondagem (usado ao refazer a sondagem). */
export function limparApoio(cursoSlug: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(CHAVE(cursoSlug));
  } catch {
    /* ignore */
  }
}

export const ROTULO_APOIO: Record<NivelApoio, { emoji: string; titulo: string; texto: string }> = {
  intensivo: {
    emoji: "🤝",
    titulo: "Apoio reforçado",
    texto:
      "A pista aparece antes de você responder, é lida em voz alta e você tem 3 tentativas. Nada de pressa.",
  },
  moderado: {
    emoji: "🎯",
    titulo: "Apoio na medida",
    texto: "A pista aparece se a primeira resposta não der certo. Você tem 2 tentativas.",
  },
  leve: {
    emoji: "🚀",
    titulo: "Modo desafio",
    texto: "Você já domina a base: as pistas ficam guardadas e só aparecem se errar.",
  },
};
