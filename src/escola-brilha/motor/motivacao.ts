/**
 * Sistema Permanente de Motivação
 * -------------------------------
 * Durante toda a missão o aluno recebe mensagens que:
 *   - incentivam
 *   - valorizam o esforço
 *   - comemoram pequenas conquistas
 *   - apresentam mensagens positivas
 *   - estimulam a continuidade dos estudos
 *
 * As mensagens VARIAM automaticamente. Nunca se repete a mesma frase
 * enquanto ainda houver mensagens não exibidas na mesma categoria e
 * mesma sessão do aluno. Histórico é persistido em localStorage.
 */

export type GatilhoMotivacional =
  | "inicio_missao"
  | "acerto"
  | "acerto_seguido"
  | "erro"
  | "tentar_novamente"
  | "esforco"
  | "checkpoint"
  | "conclusao_atividade"
  | "conclusao_missao"
  | "retorno_estudos"
  | "continuar_estudando";

export type MensagemMotivacional = {
  gatilho: GatilhoMotivacional;
  texto: string;
  emoji: string;
};

const M: Record<GatilhoMotivacional, MensagemMotivacional[]> = {
  inicio_missao: [
    { gatilho: "inicio_missao", emoji: "🚀", texto: "Vamos começar! Você é capaz." },
    { gatilho: "inicio_missao", emoji: "🌟", texto: "Uma nova missão te espera. Vai dar tudo certo!" },
    { gatilho: "inicio_missao", emoji: "💪", texto: "Respira fundo e vem comigo — passo a passo." },
    { gatilho: "inicio_missao", emoji: "🎯", texto: "Foco no primeiro passo. O resto a gente conquista junto." },
    { gatilho: "inicio_missao", emoji: "🧠", texto: "Seu cérebro ama aprender coisas novas. Bora?" },
    { gatilho: "inicio_missao", emoji: "🌈", texto: "Hoje é um ótimo dia pra aprender algo incrível." },
  ],
  acerto: [
    { gatilho: "acerto", emoji: "✅", texto: "Boa! Você acertou." },
    { gatilho: "acerto", emoji: "🎉", texto: "Isso! Continue assim." },
    { gatilho: "acerto", emoji: "👏", texto: "Muito bem! Está fluindo." },
    { gatilho: "acerto", emoji: "⭐", texto: "Excelente! Seu esforço está aparecendo." },
    { gatilho: "acerto", emoji: "🔥", texto: "Mandou bem! Segue no ritmo." },
    { gatilho: "acerto", emoji: "🧩", texto: "Perfeito! Encaixou direitinho." },
  ],
  acerto_seguido: [
    { gatilho: "acerto_seguido", emoji: "🏆", texto: "Sequência incrível! Você está voando." },
    { gatilho: "acerto_seguido", emoji: "🚀", texto: "Vários acertos seguidos — orgulho de você!" },
    { gatilho: "acerto_seguido", emoji: "💎", texto: "Combo perfeito! Seu foco está brilhando." },
    { gatilho: "acerto_seguido", emoji: "⚡", texto: "Você está imparável hoje!" },
  ],
  erro: [
    { gatilho: "erro", emoji: "💙", texto: "Tudo bem errar — é assim que a gente aprende." },
    { gatilho: "erro", emoji: "🌱", texto: "Erro é adubo do aprendizado. Vamos de novo!" },
    { gatilho: "erro", emoji: "🤝", texto: "Estou com você. Bora tentar outra vez." },
    { gatilho: "erro", emoji: "🧭", texto: "Quase lá! Ajusta a rota e vem comigo." },
    { gatilho: "erro", emoji: "🌤️", texto: "Sem stress. Uma dica: respira e olha de novo." },
  ],
  tentar_novamente: [
    { gatilho: "tentar_novamente", emoji: "🔁", texto: "Mais uma tentativa — cada uma te deixa mais forte." },
    { gatilho: "tentar_novamente", emoji: "🛠️", texto: "Vamos ajustar juntos. Você consegue." },
    { gatilho: "tentar_novamente", emoji: "🌟", texto: "Persistir é o segredo. Bora de novo!" },
    { gatilho: "tentar_novamente", emoji: "🐢", texto: "Devagar e sempre. Passo a passo." },
  ],
  esforco: [
    { gatilho: "esforco", emoji: "💪", texto: "Seu esforço vale muito. Continua!" },
    { gatilho: "esforco", emoji: "❤️", texto: "Adoro ver você tentando com carinho." },
    { gatilho: "esforco", emoji: "🌟", texto: "Cada tentativa te aproxima do domínio." },
    { gatilho: "esforco", emoji: "🧗", texto: "Você está escalando — passo firme!" },
  ],
  checkpoint: [
    { gatilho: "checkpoint", emoji: "📍", texto: "Metade do caminho! Que orgulho." },
    { gatilho: "checkpoint", emoji: "🛰️", texto: "Checkpoint alcançado — segue firme!" },
    { gatilho: "checkpoint", emoji: "🥁", texto: "Olha só como você já avançou!" },
    { gatilho: "checkpoint", emoji: "🌊", texto: "Você está pegando embalo. Continue!" },
  ],
  conclusao_atividade: [
    { gatilho: "conclusao_atividade", emoji: "🎊", texto: "Atividade concluída! Show!" },
    { gatilho: "conclusao_atividade", emoji: "🌟", texto: "Mais uma etapa vencida. Parabéns!" },
    { gatilho: "conclusao_atividade", emoji: "🏅", texto: "Excelente trabalho nessa atividade." },
    { gatilho: "conclusao_atividade", emoji: "🍀", texto: "Boa! Vamos para a próxima com energia." },
  ],
  conclusao_missao: [
    { gatilho: "conclusao_missao", emoji: "🏆", texto: "Missão cumprida! Você foi incrível." },
    { gatilho: "conclusao_missao", emoji: "🎉", texto: "Uau! Você concluiu com muito capricho." },
    { gatilho: "conclusao_missao", emoji: "🌈", texto: "Que jornada linda! Orgulho gigante." },
    { gatilho: "conclusao_missao", emoji: "💫", texto: "Missão finalizada — seu cérebro cresceu hoje!" },
  ],
  retorno_estudos: [
    { gatilho: "retorno_estudos", emoji: "👋", texto: "Que bom te ver de volta!" },
    { gatilho: "retorno_estudos", emoji: "🌞", texto: "Bem-vindo(a) de novo — vamos continuar juntos." },
    { gatilho: "retorno_estudos", emoji: "📚", texto: "De volta aos estudos! Vamos com tudo." },
  ],
  continuar_estudando: [
    { gatilho: "continuar_estudando", emoji: "➡️", texto: "Bora pra próxima? Você está pegando o jeito!" },
    { gatilho: "continuar_estudando", emoji: "🔑", texto: "Estudar um pouquinho todo dia abre muitas portas." },
    { gatilho: "continuar_estudando", emoji: "🌱", texto: "Mais uma missão te deixa ainda mais forte." },
    { gatilho: "continuar_estudando", emoji: "🚀", texto: "Segue no foguete — a próxima te espera!" },
  ],
};

const STORAGE_KEY = "eb_motivacao_hist_v1";

function chave(childId: string) {
  return `${STORAGE_KEY}::${childId || "anon"}`;
}

function carregarHist(childId: string): Record<string, string[]> {
  try {
    const raw = localStorage.getItem(chave(childId));
    return raw ? (JSON.parse(raw) as Record<string, string[]>) : {};
  } catch {
    return {};
  }
}

function salvarHist(childId: string, h: Record<string, string[]>) {
  try {
    localStorage.setItem(chave(childId), JSON.stringify(h));
  } catch {
    /* ignore */
  }
}

/** Sorteia uma mensagem do gatilho evitando repetir enquanto houver novas. */
export function proximaMensagem(
  gatilho: GatilhoMotivacional,
  childId = "anon",
): MensagemMotivacional {
  const pool = M[gatilho] ?? [];
  if (pool.length === 0) {
    return { gatilho, emoji: "🌟", texto: "Você está indo muito bem!" };
  }
  const hist = carregarHist(childId);
  const usadas = new Set(hist[gatilho] ?? []);
  let disponiveis = pool.filter((m) => !usadas.has(m.texto));
  if (disponiveis.length === 0) {
    // ciclo completo — reinicia mas evita repetir a última
    const ultima = (hist[gatilho] ?? []).slice(-1)[0];
    disponiveis = pool.filter((m) => m.texto !== ultima);
    hist[gatilho] = [];
  }
  const escolhida = disponiveis[Math.floor(Math.random() * disponiveis.length)];
  hist[gatilho] = [...(hist[gatilho] ?? []), escolhida.texto];
  salvarHist(childId, hist);
  return escolhida;
}

/** Reinicia o histórico (novo ciclo pedagógico ou troca de aluno). */
export function reiniciarMotivacao(childId = "anon") {
  try {
    localStorage.removeItem(chave(childId));
  } catch {
    /* ignore */
  }
}

export const SistemaMotivacao = {
  proxima: proximaMensagem,
  reiniciar: reiniciarMotivacao,
  gatilhos: Object.keys(M) as GatilhoMotivacional[],
  catalogo: M,
} as const;
