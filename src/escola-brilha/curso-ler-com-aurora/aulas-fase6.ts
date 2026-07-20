import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as pipa } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as vaca } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";


/**
 * Ler com Aurora — Fase 6: Fluência Verdadeira
 * ------------------------------------------------
 * 20 aulas · 4 semanas · 15 min/dia
 *
 *  - Semana 1 (aqui): Leitura repetida — mesma frase 3× marcando progresso
 *  - Semana 2: Leitura eco (Aurora lê, criança repete)
 *  - Semana 3: Prosódia (. ? !)
 *  - Semana 4: Fluência em mini-textos + Diploma "Leitor Fluente"
 *
 * Base: NRP (2000), Rasinski (2004) — leitura repetida assistida.
 * Contrato: mem://preferences/contrato-ler-com-aurora-fases-6-8
 */

const mascote = brilha;
const BASE =
  "Fluência: leitura repetida com modelagem (NRP 2000; Rasinski 2004). A mesma frase é lida três vezes — 1ª devagar com o professor, 2ª junto, 3ª sozinho — para automatizar reconhecimento e liberar atenção para o significado.";

/* ============================================================
 * SEMANA 1 — Leitura Repetida (3 leituras da mesma frase)
 * ============================================================ */

const a1: AulaEI = {
  slug: "f6-dia-01-repetida-gato",
  titulo: "Dia 1 · Leio 3 vezes — O GATO CORRE",
  icone: "🐱",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje começa a Fase da Fluência! Você vai ler a MESMA frase três vezes. Cada vez fica mais fácil." },
    { tipo: "leituraFrase", imagemUrl: gato, frase: "O GATO CORRE.", instrucaoAudio: "Ouça o professor e depois leia 3 vezes no microfone.", elogio: "Três leituras! Isso é fluência!" },
    { tipo: "celebracao", medalha: "Leitor de 3 Rodadas", mascoteUrl: mascote, falaFinal: "Amanhã: uma frase nova, três leituras de novo!" },
  ],
};

const a2: AulaEI = {
  slug: "f6-dia-02-repetida-pato",
  titulo: "Dia 2 · Leio 3 vezes — O PATO NADA",
  icone: "🦆",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "De novo: mesma frase, três leituras no microfone. Cada vez mais solta!" },
    { tipo: "leituraFrase", imagemUrl: pato, frase: "O PATO NADA.", instrucaoAudio: "Ouça o professor e leia 3 vezes no microfone.", elogio: "Três leituras! Ficou mais fácil, não é?" },
    { tipo: "celebracao", medalha: "Leitor Repetido", mascoteUrl: mascote, falaFinal: "Amanhã: duas frases, três leituras cada!" },
  ],
};

const a3: AulaEI = {
  slug: "f6-dia-03-repetida-sapo-sol",
  titulo: "Dia 3 · Duas frases, três leituras",
  icone: "🐸",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje são DUAS frases. Cada uma três leituras no microfone. Bora!" },
    { tipo: "leituraFrase", imagemUrl: sapo, frase: "O SAPO PULA.", instrucaoAudio: "Frase 1 — leia 3 vezes no microfone.", elogio: "Sozinho, três vezes!" },
    { tipo: "leituraFrase", imagemUrl: sol, frase: "O SOL BRILHA.", instrucaoAudio: "Frase 2 — leia 3 vezes no microfone.", elogio: "Duas frases dominadas!" },
    { tipo: "celebracao", medalha: "Leitor de Duas Frases", mascoteUrl: mascote, falaFinal: "Amanhã: frases mais compridas!" },
  ],
};

const a4: AulaEI = {
  slug: "f6-dia-04-repetida-frase-longa",
  titulo: "Dia 4 · Frase mais longa, três leituras",
  icone: "🌸",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje a frase é maior. Leia com calma três vezes no microfone." },
    { tipo: "leituraFrase", imagemUrl: menina, frase: "A MENINA PEGA A FLOR.", instrucaoAudio: "Leia 3 vezes no microfone, no seu ritmo.", elogio: "Frase longa, três vezes!" },
    { tipo: "leituraFrase", imagemUrl: flor, frase: "A FLOR É AMARELA.", instrucaoAudio: "Frase-bônus — leia 3 vezes no microfone.", elogio: "Bônus concluído!" },
    { tipo: "celebracao", medalha: "Leitor de Frases Longas", mascoteUrl: mascote, falaFinal: "Amanhã: mini-texto com duas frases!" },
  ],
};

const a5: AulaEI = {
  slug: "f6-dia-05-repetida-mini-texto",
  titulo: "Dia 5 · Mini-texto, três leituras",
  icone: "📖",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Última missão da semana: um mini-texto lido três vezes. Cada leitura fica mais bonita!" },
    { tipo: "leituraTexto", titulo: "A bola no jardim", imagemUrl: bola, frases: ["A BOLA CAIU.", "O GATO CORRE ATRÁS."], instrucaoAudio: "1ª leitura — ouve devagar comigo.", elogio: "Primeira leitura pronta!" },
    { tipo: "leituraTexto", titulo: "A bola no jardim", imagemUrl: bola, frases: ["A BOLA CAIU.", "O GATO CORRE ATRÁS."], instrucaoAudio: "2ª leitura — lê JUNTO comigo, sem parar.", elogio: "Junto ficou mais solto!" },
    { tipo: "leituraTexto", titulo: "A bola no jardim", imagemUrl: bola, frases: ["A BOLA CAIU.", "O GATO CORRE ATRÁS."], instrucaoAudio: "3ª leitura — só você, do seu jeito.", elogio: "Você leu um mini-texto três vezes!" },
    { tipo: "leituraTexto", titulo: "Bônus — a pipa", imagemUrl: pipa, frases: ["A PIPA SOBE.", "A LUA APARECE."], instrucaoAudio: "Bônus — uma leitura só. Vai!", elogio: "Semana 1 da Fluência concluída!" },
    { tipo: "celebracao", medalha: "Fluência Semana 1", mascoteUrl: mascote, falaFinal: "Semana 2: eu leio, você repete — leitura eco!" },
  ],
};

/* ============================================================
 * Curso (Fase 6 — expandirá para 20 missões)
 * ============================================================ */

/* ============================================================
 * SEMANA 2 — Leitura Eco (professor lê, criança repete no mic)
 * ============================================================ */

const BASE_ECO =
  "Leitura eco (Rasinski 2004; NRP 2000): o professor modela a linha e a criança repete imediatamente. Constrói prosódia e reconhecimento automático em cadeia curta.";

const a6: AulaEI = {
  slug: "f6-dia-06-eco-bichos",
  titulo: "Dia 6 · Eco dos bichos",
  icone: "🐮",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE_ECO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Semana nova! Eu leio uma linha, você repete no microfone. É o ECO!" },
    { tipo: "leituraEco", titulo: "Eco dos bichos", imagemUrl: vaca, linhas: ["A VACA MUGE.", "O GATO MIA.", "O PATO NADA."], instrucaoAudio: "Ouça o professor e repita cada linha no microfone.", elogio: "Três ecos perfeitos!" },
    { tipo: "celebracao", medalha: "Eco Bichinho", mascoteUrl: mascote, falaFinal: "Amanhã: eco do céu e da natureza!" },
  ],
};

const a7: AulaEI = {
  slug: "f6-dia-07-eco-ceu",
  titulo: "Dia 7 · Eco do céu",
  icone: "☀️",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE_ECO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "De novo: eu leio, você repete. Olhe pro céu!" },
    { tipo: "leituraEco", titulo: "Eco do céu", imagemUrl: sol, linhas: ["O SOL BRILHA.", "A LUA APARECE.", "A NUVEM PASSA."], instrucaoAudio: "Repita cada linha no microfone, igualzinho.", elogio: "Ecos do céu!" },
    { tipo: "celebracao", medalha: "Eco Celeste", mascoteUrl: mascote, falaFinal: "Amanhã: quatro linhas em eco!" },
  ],
};

const a8: AulaEI = {
  slug: "f6-dia-08-eco-quatro-linhas",
  titulo: "Dia 8 · Eco de quatro linhas",
  icone: "🐰",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE_ECO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje são QUATRO linhas em eco. Um passo de cada vez!" },
    { tipo: "leituraEco", titulo: "Eco do jardim", imagemUrl: coelho, linhas: ["O COELHO PULA.", "O SAPO SALTA.", "A FLOR ABRE.", "A ÁRVORE BALANÇA."], instrucaoAudio: "Ouça e repita cada linha no microfone.", elogio: "Quatro ecos!" },
    { tipo: "celebracao", medalha: "Eco de Quatro", mascoteUrl: mascote, falaFinal: "Amanhã: eco com pergunta!" },
  ],
};

const a9: AulaEI = {
  slug: "f6-dia-09-eco-pergunta",
  titulo: "Dia 9 · Eco com pergunta",
  icone: "❓",
  bncc: ["EF01LP14"],
  duracaoMin: 15,
  baseCientifica: BASE_ECO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje tem pergunta no meio! Copie o jeitinho do professor." },
    { tipo: "leituraEco", titulo: "Eco com pergunta", imagemUrl: menina, linhas: ["A MENINA CANTA.", "ONDE ESTÁ A BOLA?", "A BOLA ESTÁ AQUI.", "QUE LEGAL!"], instrucaoAudio: "Repita respeitando a pergunta e a alegria.", elogio: "Ecos com sentimento!" },
    { tipo: "celebracao", medalha: "Eco Expressivo", mascoteUrl: mascote, falaFinal: "Amanhã: eco livre — cinco linhas de um mini-poema!" },
  ],
};

const a10: AulaEI = {
  slug: "f6-dia-10-eco-mini-poema",
  titulo: "Dia 10 · Eco do mini-poema",
  icone: "⭐",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_ECO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Última missão da Semana 2: um mini-poema em cinco ecos. Bora!" },
    { tipo: "leituraEco", titulo: "Mini-poema — Noite bonita", imagemUrl: estrela, linhas: ["A LUA SORRI.", "A ESTRELA PISCA.", "O PÁSSARO DORME.", "O PEIXE NADA.", "BOA NOITE!"], instrucaoAudio: "Repita cada verso no microfone, com carinho.", elogio: "Você fez um mini-poema em eco!" },
    { tipo: "celebracao", medalha: "Fluência Semana 2", mascoteUrl: mascote, falaFinal: "Semana 3: prosódia — ponto, pergunta e exclamação!" },
  ],
};

/* ============================================================
 * Curso (Fase 6 — expandirá para 20 missões)
 * ============================================================ */

export const cursoLerComAuroraFase6: CursoEI = {
  slug: "ler-com-aurora-fase6",
  serie: "pre2",
  serieLabel: "Pré II / 1º Ano (Fluência)",
  titulo: "Fluência Verdadeira",
  descricao:
    "Ler com precisão, ritmo e expressão. Leitura repetida, eco e prosódia — a atenção libera para o significado.",
  corPrimaria: "#facc15",
  corSecundaria: "#78350f",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "f6-semana-01",
      numero: 1,
      titulo: "Semana 1 · Leitura Repetida",
      subtitulo: "Leitor de 3 Rodadas",
      aulas: [a1, a2, a3, a4, a5],
    },
    {
      slug: "f6-semana-02",
      numero: 2,
      titulo: "Semana 2 · Leitura Eco",
      subtitulo: "Eco Expressivo",
      aulas: [a6, a7, a8, a9, a10],
    },
  ],
};

export function getAulaLerComAuroraFase6(slug: string): AulaEI | undefined {
  for (const u of cursoLerComAuroraFase6.unidades) {
    const found = u.aulas.find((a) => a.slug === slug);
    if (found) return found;
  }
  return undefined;
}

