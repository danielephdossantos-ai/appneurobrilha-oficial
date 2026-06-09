export type Likert = 0 | 1 | 2 | 3 | 4;

export type AnamneseData = {
  identification: {
    childName?: string;
    birthDate?: string;
    sex?: string;
    grade?: string;
    guardianName?: string;
    school?: string;
    teacher?: string;
  };
  pregnancy: {
    planned?: boolean;
    premature?: boolean;
    gestationWeeks?: number | null;
    birthWeight?: number | null;
    neonatalICU?: boolean;
    complications?: string;
    fetalDistress?: boolean;
    anoxia?: boolean;
    medsDuringPregnancy?: string;
    infections?: string;
  };
  milestones: {
    headControl?: number | null;
    sat?: number | null;
    crawled?: number | null;
    walked?: number | null;
    firstWords?: number | null;
    phrases?: number | null;
    comprehension?: number | null;
    eyeContact?: Likert;
    sharedPlay?: Likert;
    peerInteraction?: Likert;
  };
  medical: {
    seizures?: boolean;
    epilepsy?: boolean;
    hearingLoss?: boolean;
    visionLoss?: boolean;
    neuroDisorders?: string;
    medications?: string;
    currentTherapies?: string;
  };
  family: {
    adhd?: boolean;
    asa?: boolean; // TEA
    dyslexia?: boolean;
    intellectualDisability?: boolean;
    psychiatric?: boolean;
    schoolDifficulties?: boolean;
  };
  school: {
    reading: {
      letters?: Likert;
      syllables?: Likert;
      words?: Likert;
      phrases?: Likert;
      texts?: Likert;
    };
    writing: {
      copyWords?: Likert;
      spontaneous?: Likert;
      letterSwap?: Likert;
      organizesSentences?: Likert;
    };
    math: {
      numbers?: Likert;
      countObjects?: Likert;
      addition?: Likert;
      subtraction?: Likert;
      simpleProblems?: Likert;
    };
  };
  attention: Record<string, Likert>;
  hyperactivity: Record<string, Likert>;
  communicationSocial: Record<string, Likert>;
  repetitiveBehaviors: Record<string, Likert>;
  sensory: Record<string, Likert>;
  language: Record<string, Likert>;
  memory: Record<string, Likert>;
  motor: {
    fine: Record<string, Likert>;
    gross: Record<string, Likert>;
  };
  emotional: Record<string, Likert>;
  autonomy: Record<string, Likert>;
};

export type ProfileScores = {
  cognitive: number;
  escolar: number;
  behavioral: number;
  socioemotional: number;
  adaptive: number;
};

export type ProfileClassification = 'verde' | 'amarelo' | 'laranja' | 'vermelho';

export function classifyScore(value: number, max: number): ProfileClassification {
  const pct = (value / max) * 100;
  if (pct < 25) return 'verde';
  if (pct < 50) return 'amarelo';
  if (pct < 75) return 'laranja';
  return 'vermelho';
}

// Basic scoring: sum normalized items for each area. These are heuristics for triage only.
export function computeProfiles(data: Partial<AnamneseData>): ProfileScores {
  // Escolar (reading, writing, math)
  const r = data.school?.reading || {} as any;
  const w = data.school?.writing || {} as any;
  const m = data.school?.math || {} as any;

  const readingSum = (Object.values(r) as number[]).reduce((s, v) => s + (v || 0), 0);
  const writingSum = (Object.values(w) as number[]).reduce((s, v) => s + (v || 0), 0);
  const mathSum = (Object.values(m) as number[]).reduce((s, v) => s + (v || 0), 0);

  const escolar = readingSum + writingSum + mathSum; // max depends on items

  // Attention & behavioral
  const attentionSum = sumLikertRecord(data.attention);
  const hyperSum = sumLikertRecord(data.hyperactivity);
  const behavioral = attentionSum + hyperSum;

  // Cognitive approximated by milestones + memory + language
  const milestones = data.milestones || {} as any;
  const milestoneSum = (['headControl','sat','crawled','walked','firstWords','phrases','comprehension'].map(k => (milestones as any)[k] || 0) as number[]).reduce((s,a)=>s+a,0);
  const memorySum = sumLikertRecord(data.memory);
  const languageSum = sumLikertRecord(data.language);
  const cognitive = milestoneSum + memorySum + languageSum;

  // Socioemotional: emotional + social communication + repetitive
  const socioSocial = sumLikertRecord(data.communicationSocial) + sumLikertRecord(data.repetitiveBehaviors) + sumLikertRecord(data.emotional || {});

  // Adaptive: autonomy + motor (fine + gross) + sensory
  const autonomySum = sumLikertRecord(data.autonomy);
  const motorSum = sumLikertRecord(data.motor?.fine) + sumLikertRecord(data.motor?.gross);
  const sensorySum = sumLikertRecord(data.sensory);
  const adaptive = autonomySum + motorSum + sensorySum;

  return {
    cognitive: cognitive,
    escolar: escolar,
    behavioral: behavioral,
    socioemotional: socioSocial,
    adaptive: adaptive,
  };
}

function sumLikertRecord(rec?: Record<string, any>): number {
  if (!rec) return 0;
  return Object.values(rec).reduce((s, v) => s + (typeof v === 'number' ? v : 0), 0);
}

export function classificationForProfiles(scores: ProfileScores): Record<string, ProfileClassification> {
  // define rough maxes per area to classify
  const maxes = {
    cognitive: 100,
    escolar: 100,
    behavioral: 100,
    socioemotional: 100,
    adaptive: 100,
  } as Record<string, number>;

  return {
    cognitive: classifyScore(scores.cognitive, maxes.cognitive),
    escolar: classifyScore(scores.escolar, maxes.escolar),
    behavioral: classifyScore(scores.behavioral, maxes.behavioral),
    socioemotional: classifyScore(scores.socioemotional, maxes.socioemotional),
    adaptive: classifyScore(scores.adaptive, maxes.adaptive),
  };
}

export function generateReportHTML(data: Partial<AnamneseData>, scores: ProfileScores, classifications: Record<string, ProfileClassification>) {
  const child = data.identification?.childName || '—';
  const dob = data.identification?.birthDate || '—';
  const guardian = data.identification?.guardianName || '—';

  return `
  <html><head><meta charset="utf-8"><title>Relatório Anamnese - ${child}</title>
  <style>body{font-family:Arial,Helvetica,sans-serif;padding:20px;color:#111}h1{color:#0f172a} .section{margin-bottom:18px} .score{font-weight:700}</style>
  </head><body>
    <h1>Relatório de Triagem - ${child}</h1>
    <p><strong>Aviso:</strong> Este aplicativo não realiza diagnóstico clínico. Os resultados são apenas indicativos e não substituem avaliação profissional.</p>
    <div class="section"><h2>Dados</h2><div>Nome: ${child}</div><div>Data de Nascimento: ${dob}</div><div>Responsável: ${guardian}</div></div>
    <div class="section"><h2>Sumário de Pontuações</h2>
      <div>Cognitivo: <span class="score">${scores.cognitive}</span> (${classifications.cognitive})</div>
      <div>Escolar: <span class="score">${scores.escolar}</span> (${classifications.escolar})</div>
      <div>Comportamental: <span class="score">${scores.behavioral}</span> (${classifications.behavioral})</div>
      <div>Socioemocional: <span class="score">${scores.socioemotional}</span> (${classifications.socioemotional})</div>
      <div>Adaptativo: <span class="score">${scores.adaptive}</span> (${classifications.adaptive})</div>
    </div>
    <div class="section"><h2>Recomendações</h2>
      <ul>
        <li>Verifique as áreas classificadas como <strong>laranja</strong> ou <strong>vermelho</strong> e considere encaminhamento para avaliação especializada.</li>
        <li>Resultados em <strong>amarelo</strong> merecem monitoramento e intervenções pedagógicas.</li>
        <li>Este formulário serve apenas para triagem; não fornece diagnóstico.</li>
      </ul>
    </div>
  </body></html>`;
}
