/**
 * Adaptação automática da Missão — Motor Pedagógico
 * --------------------------------------------------
 * Combina TODOS os sinais do aluno em UM único plano de adaptação
 * aplicado antes de renderizar a missão.
 *
 * Sinais considerados:
 *   • idade
 *   • ano escolar (série)
 *   • tempo médio de resposta
 *   • quantidade de erros
 *   • número de tentativas
 *   • desempenho anterior
 *   • histórico do aluno (evolução, nível de domínio, revisões)
 *
 * A adaptação altera APENAS a superfície pedagógica:
 *   • linguagem            → "infantil" | "simples" | "padrao" | "avancada"
 *   • quantidadeExemplos   → nº de exemplos exibidos
 *   • nivelApoio           → "alto" | "medio" | "baixo"
 *   • quantidadeAtividades → nº de atividades no roteiro
 *
 * REGRA DE OURO: nunca altera o OBJETIVO PEDAGÓGICO da habilidade BNCC.
 * O código, a competência e o objetivo permanecem intactos — só muda
 * a forma de apresentar.
 */

export type Linguagem = "infantil" | "simples" | "padrao" | "avancada";
export type NivelApoio = "alto" | "medio" | "baixo";
export type RitmoSugerido = "lento" | "normal" | "acelerado";

export type SinaisAluno = {
  idade?: number;
  serie?: string;
  /** desempenho 0-100 na última tentativa desta missão */
  desempenho?: number;
  /** desempenho médio histórico 0-100 */
  desempenhoMedio?: number;
  tentativas?: number;
  erros?: number;
  acertos?: number;
  /** tempo médio de resposta por questão, em segundos */
  tempoMedioSegundos?: number;
  /** nível de domínio já registrado no banco */
  nivelDominio?: "nao_iniciada" | "em_aprendizagem" | "parcialmente_dominada" | "dominada";
  /** delta de evolução vs sessão anterior */
  evolucaoDelta?: number;
  /** nº de revisões já feitas nesta habilidade */
  revisoesRealizadas?: number;
};

export type PlanoAdaptacao = {
  linguagem: Linguagem;
  quantidadeExemplos: number;
  nivelApoio: NivelApoio;
  quantidadeAtividades: number;
  ritmo: RitmoSugerido;
  leituraEmVozAlta: boolean;
  usarImagens: boolean;
  fonteMaior: boolean;
  /** motivos legíveis que levaram a esta adaptação (para painel/telemetria) */
  motivos: string[];
  /** garantia explícita — o objetivo BNCC nunca muda */
  preservaObjetivoBNCC: true;
};

function normalizaSerie(s?: string): string {
  return (s ?? "").toLowerCase().replace(/\s+/g, " ").trim();
}

function inferirLinguagem(idade: number | undefined, serie: string): Linguagem {
  const s = normalizaSerie(serie);
  if ((idade ?? 0) > 0 && (idade ?? 0) <= 6) return "infantil";
  if (s.includes("infantil")) return "infantil";
  if (s.startsWith("1º") || s.startsWith("2º") || s.startsWith("3º")) return "simples";
  if (s.startsWith("4º") || s.startsWith("5º") || s.startsWith("6º") || s.startsWith("7º")) return "padrao";
  if (s.startsWith("8º") || s.startsWith("9º") || s.includes("médio") || s.includes("medio"))
    return "avancada";
  if ((idade ?? 0) >= 14) return "avancada";
  if ((idade ?? 0) >= 10) return "padrao";
  if ((idade ?? 0) >= 7) return "simples";
  return "padrao";
}

/**
 * Calcula o plano de adaptação final combinando TODOS os sinais.
 * Determinístico — mesma entrada, mesma saída.
 */
export function planejarAdaptacao(sinais: SinaisAluno): PlanoAdaptacao {
  const motivos: string[] = [];
  const linguagem = inferirLinguagem(sinais.idade, sinais.serie ?? "");
  motivos.push(`linguagem:${linguagem}`);

  // Bases por linguagem/idade
  let quantidadeExemplos = 2;
  let quantidadeAtividades = 3;
  let nivelApoio: NivelApoio = "medio";
  let ritmo: RitmoSugerido = "normal";
  const usarImagens = linguagem === "infantil" || linguagem === "simples";
  const leituraEmVozAlta = linguagem === "infantil" || linguagem === "simples";
  const fonteMaior = linguagem === "infantil";

  if (linguagem === "infantil") {
    quantidadeExemplos = 3;
    quantidadeAtividades = 3;
    nivelApoio = "alto";
    ritmo = "lento";
  } else if (linguagem === "simples") {
    quantidadeExemplos = 2;
    quantidadeAtividades = 4;
    nivelApoio = "alto";
  } else if (linguagem === "padrao") {
    quantidadeExemplos = 2;
    quantidadeAtividades = 5;
    nivelApoio = "medio";
  } else {
    quantidadeExemplos = 1;
    quantidadeAtividades = 6;
    nivelApoio = "baixo";
  }

  // Ajustes por desempenho anterior
  const desemp = sinais.desempenho ?? sinais.desempenhoMedio ?? 0;
  if (desemp > 0 && desemp < 50) {
    quantidadeExemplos += 2;
    quantidadeAtividades = Math.max(2, quantidadeAtividades - 1);
    nivelApoio = "alto";
    ritmo = "lento";
    motivos.push("desempenho_baixo(<50)");
  } else if (desemp >= 85) {
    quantidadeExemplos = Math.max(1, quantidadeExemplos - 1);
    quantidadeAtividades += 1;
    nivelApoio = nivelApoio === "alto" ? "medio" : "baixo";
    ritmo = "acelerado";
    motivos.push("desempenho_alto(>=85)");
  }

  // Ajustes por erros / tentativas
  const erros = sinais.erros ?? 0;
  const tentativas = sinais.tentativas ?? 0;
  if (erros >= 3 || tentativas >= 3) {
    quantidadeExemplos += 1;
    nivelApoio = "alto";
    ritmo = "lento";
    motivos.push(`retomada(erros=${erros},tentativas=${tentativas})`);
  }

  // Ajustes por tempo de resposta (comparado a alvo de 30s/questão)
  const tempo = sinais.tempoMedioSegundos ?? 0;
  if (tempo > 0) {
    if (tempo >= 60) {
      quantidadeExemplos += 1;
      quantidadeAtividades = Math.max(2, quantidadeAtividades - 1);
      nivelApoio = "alto";
      ritmo = "lento";
      motivos.push(`tempo_lento(${tempo}s)`);
    } else if (tempo <= 12 && desemp >= 70) {
      quantidadeAtividades += 1;
      ritmo = "acelerado";
      motivos.push(`tempo_rapido(${tempo}s)`);
    }
  }

  // Ajustes por nível de domínio
  if (sinais.nivelDominio === "dominada") {
    quantidadeExemplos = Math.max(1, quantidadeExemplos - 1);
    nivelApoio = "baixo";
    motivos.push("dominio:dominada");
  } else if (sinais.nivelDominio === "em_aprendizagem" || sinais.nivelDominio === "nao_iniciada") {
    nivelApoio = "alto";
    motivos.push(`dominio:${sinais.nivelDominio}`);
  }

  // Evolução — se piorou, reforça apoio
  if ((sinais.evolucaoDelta ?? 0) <= -15) {
    nivelApoio = "alto";
    quantidadeExemplos += 1;
    motivos.push(`regressao(${sinais.evolucaoDelta})`);
  }

  // Já revisou várias vezes — mantém apoio alto e reduz volume
  if ((sinais.revisoesRealizadas ?? 0) >= 3 && desemp < 70) {
    quantidadeAtividades = Math.max(2, quantidadeAtividades - 1);
    nivelApoio = "alto";
    motivos.push("revisoes>=3_desempenho_baixo");
  }

  // Limites finais de segurança
  quantidadeExemplos = Math.max(1, Math.min(6, quantidadeExemplos));
  quantidadeAtividades = Math.max(2, Math.min(8, quantidadeAtividades));

  return {
    linguagem,
    quantidadeExemplos,
    nivelApoio,
    quantidadeAtividades,
    ritmo,
    leituraEmVozAlta,
    usarImagens,
    fonteMaior,
    motivos,
    preservaObjetivoBNCC: true,
  };
}

export const AdaptacaoMissao = {
  planejar: planejarAdaptacao,
};
