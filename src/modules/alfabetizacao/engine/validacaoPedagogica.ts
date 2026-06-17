// Camada de validação pedagógica.
// Roda ANTES de gerar qualquer atividade para impedir conteúdos inadequados
// à idade, série escolar, nível cognitivo e objetivos de aprendizagem.

export interface ContextoPedagogico {
  idade: number;            // anos
  serie: string;            // "Pré 1" .. "9º ano"
  nivelCognitivo: number;   // 1=fácil, 2=médio, 3=difícil
  objetivos: string[];      // ex: ["consciencia-fonologica", "rima"]
  tipoAtividade: string;    // ex: "rima", "fusao", "texto-compreensao"
}

export interface ResultadoValidacao {
  permitido: boolean;
  motivos: string[];
  ajustes?: Partial<ContextoPedagogico>;
}

// Faixas mínimas por tipo de atividade (idade / série mínima em anos escolares)
const REGRAS: Record<string, { idadeMin: number; serieMin: number; objetivos: string[] }> = {
  "vogal-som":          { idadeMin: 3, serieMin: 0, objetivos: ["vogais", "consciencia-fonologica"] },
  "rima":               { idadeMin: 4, serieMin: 0, objetivos: ["consciencia-fonologica", "rima"] },
  "aliteracao":         { idadeMin: 4, serieMin: 0, objetivos: ["consciencia-fonologica", "aliteracao"] },
  "som-inicial":        { idadeMin: 4, serieMin: 0, objetivos: ["consciencia-fonologica"] },
  "segmentacao":        { idadeMin: 5, serieMin: 0, objetivos: ["silabas", "consciencia-fonologica"] },
  "fusao":              { idadeMin: 5, serieMin: 0, objetivos: ["silabas", "consciencia-fonologica"] },
  "frase-imagem":       { idadeMin: 5, serieMin: 1, objetivos: ["frases", "leitura"] },
  "texto-compreensao":  { idadeMin: 6, serieMin: 1, objetivos: ["leitura", "compreensao"] },
};

function serieParaNumero(serie: string): number {
  const s = serie.toLowerCase();
  if (s.includes("pré") || s.includes("pre") || s.includes("infantil")) return 0;
  const m = s.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export function validarAntesDeGerar(ctx: ContextoPedagogico): ResultadoValidacao {
  const motivos: string[] = [];
  const ajustes: Partial<ContextoPedagogico> = {};

  const regra = REGRAS[ctx.tipoAtividade];
  if (!regra) {
    return { permitido: false, motivos: [`Tipo de atividade desconhecido: ${ctx.tipoAtividade}`] };
  }

  // 1) Idade
  if (ctx.idade < regra.idadeMin) {
    motivos.push(`Idade ${ctx.idade} abaixo do mínimo (${regra.idadeMin}) para "${ctx.tipoAtividade}".`);
  }

  // 2) Série
  const serieNum = serieParaNumero(ctx.serie);
  if (serieNum < regra.serieMin) {
    motivos.push(`Série "${ctx.serie}" abaixo do mínimo (ano ${regra.serieMin}) para "${ctx.tipoAtividade}".`);
  }

  // 3) Nível cognitivo coerente com idade
  if (ctx.nivelCognitivo === 3 && ctx.idade < 6) {
    ajustes.nivelCognitivo = 2;
    motivos.push("Nível difícil rebaixado para médio (idade < 6).");
  }
  if (ctx.nivelCognitivo === 2 && ctx.idade < 4) {
    ajustes.nivelCognitivo = 1;
    motivos.push("Nível médio rebaixado para fácil (idade < 4).");
  }

  // 4) Objetivos de aprendizagem
  const temObjetivo = ctx.objetivos.some((o) => regra.objetivos.includes(o));
  if (ctx.objetivos.length > 0 && !temObjetivo) {
    motivos.push(
      `Atividade "${ctx.tipoAtividade}" não atende aos objetivos [${ctx.objetivos.join(", ")}].`,
    );
  }

  const bloqueios = motivos.filter(
    (m) => m.startsWith("Idade") || m.startsWith("Série") || m.startsWith("Atividade") || m.startsWith("Tipo"),
  );

  return {
    permitido: bloqueios.length === 0,
    motivos,
    ajustes: Object.keys(ajustes).length ? ajustes : undefined,
  };
}

// Sugere o tipo de atividade mais adequado quando o pedido foi bloqueado.
export function sugerirAlternativa(ctx: ContextoPedagogico): string {
  const candidatos = Object.entries(REGRAS)
    .filter(([, r]) => ctx.idade >= r.idadeMin && serieParaNumero(ctx.serie) >= r.serieMin)
    .filter(([, r]) =>
      ctx.objetivos.length === 0 || ctx.objetivos.some((o) => r.objetivos.includes(o)),
    )
    .map(([tipo]) => tipo);
  return candidatos[0] ?? "vogal-som";
}
