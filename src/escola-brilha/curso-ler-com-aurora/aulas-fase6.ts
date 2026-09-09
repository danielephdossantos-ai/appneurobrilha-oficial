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
 * SEMANA 3 — Prosódia (. ? !)
 * ============================================================ */

const BASE_PROSODIA =
  "Prosódia (NRP 2000; Rasinski 2004; Kuhn & Stahl 2003): ler com a entonação certa do ponto final, da pergunta e da exclamação. A leitura expressiva sustenta a compreensão.";

const a11: AulaEI = {
  slug: "f6-dia-11-prosodia-ponto",
  titulo: "Dia 11 · Ponto final — leio com calma",
  icone: "•",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_PROSODIA,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Semana 3! Hoje o segredo é o PONTO FINAL. Quando ele aparece, a voz desce e a gente respira." },
    { tipo: "leituraEco", titulo: "Ponto final · voz que desce", imagemUrl: gato, linhas: ["O GATO DORME.", "A LUA APARECE.", "A FLOR ABRE."], instrucaoAudio: "Ouça o professor descer a voz no ponto final e repita igualzinho no microfone.", elogio: "Você fechou cada frase com calma!" },
    { tipo: "celebracao", medalha: "Voz do Ponto Final", mascoteUrl: mascote, falaFinal: "Amanhã: a voz SOBE — chega a pergunta!" },
  ],
};

const a12: AulaEI = {
  slug: "f6-dia-12-prosodia-pergunta",
  titulo: "Dia 12 · Pergunta — a voz sobe",
  icone: "?",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_PROSODIA,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Perguntou? A voz SOBE lá no final. Ouça e copie o jeitinho!" },
    { tipo: "leituraEco", titulo: "Perguntas · voz que sobe", imagemUrl: coelho, linhas: ["ONDE ESTÁ O COELHO?", "QUEM PEGOU A BOLA?", "A LUA APARECEU?"], instrucaoAudio: "Ouça a voz do professor SUBIR na pergunta e repita no microfone.", elogio: "Perguntas com voz de verdade!" },
    { tipo: "celebracao", medalha: "Voz de Pergunta", mascoteUrl: mascote, falaFinal: "Amanhã: exclamação — voz com emoção!" },
  ],
};

const a13: AulaEI = {
  slug: "f6-dia-13-prosodia-exclamacao",
  titulo: "Dia 13 · Exclamação — voz com emoção",
  icone: "!",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_PROSODIA,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "EXCLAMAÇÃO é emoção! Alegria, susto, força. Ouça e copie a energia!" },
    { tipo: "leituraEco", titulo: "Exclamação · voz com energia", imagemUrl: estrela, linhas: ["QUE ESTRELA LINDA!", "O SOL BRILHA MUITO!", "QUE PIPA GRANDE!"], instrucaoAudio: "Ouça a voz do professor com ENERGIA e repita igual no microfone.", elogio: "Você leu com sentimento!" },
    { tipo: "celebracao", medalha: "Voz de Exclamação", mascoteUrl: mascote, falaFinal: "Amanhã: misturar tudo — ponto, pergunta e exclamação!" },
  ],
};

const a14: AulaEI = {
  slug: "f6-dia-14-prosodia-misturado",
  titulo: "Dia 14 · Misturei tudo!",
  icone: "🎭",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_PROSODIA,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje tem os três misturados: ponto, pergunta e exclamação. Preste atenção no final de cada linha!" },
    { tipo: "leituraEco", titulo: "Três vozes numa história", imagemUrl: menina, linhas: ["A MENINA VIU A LUA.", "ONDE ESTÁ A ESTRELA?", "QUE CÉU LINDO!", "A NOITE CHEGOU."], instrucaoAudio: "Cada linha tem um final diferente. Copie a voz do professor no microfone.", elogio: "Você mudou a voz certinho em cada linha!" },
    { tipo: "celebracao", medalha: "Voz Camaleoa", mascoteUrl: mascote, falaFinal: "Amanhã: mini-diálogo com dois personagens!" },
  ],
};

const a15: AulaEI = {
  slug: "f6-dia-15-prosodia-dialogo",
  titulo: "Dia 15 · Mini-diálogo com prosódia",
  icone: "💬",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_PROSODIA,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Última missão da semana! Um mini-diálogo: dois personagens conversam. Muda a voz junto comigo!" },
    { tipo: "leituraEco", titulo: "Diálogo — a bola perdida", imagemUrl: bola, imagensLinhas: [menina, bola, gato, bola, menina], linhas: ["A MENINA PERGUNTA:", "CADÊ A BOLA?", "O GATO RESPONDE:", "ESTÁ AQUI!", "QUE BOM!"], instrucaoAudio: "Copie a entonação de cada linha. Perguntas sobem, exclamações vibram.", elogio: "Um diálogo inteiro com voz de verdade!" },
    { tipo: "celebracao", medalha: "Fluência Semana 3", mascoteUrl: mascote, falaFinal: "Semana 4 vem aí: mini-textos completos e o Diploma de Leitor Fluente!" },
  ],
};

/* ============================================================
 * SEMANA 4 — Fluência em mini-textos + Diploma "Leitor Fluente"
 * ============================================================ */

const BASE_MINITEXTO =
  "Fluência em textos curtos com propósito comunicativo (NRP 2000; Duke & Pearson 2002): três leituras da mesma história, com foco sucessivo em precisão, ritmo e expressão, seguidas de checagem breve de compreensão.";

const a16: AulaEI = {
  slug: "f6-dia-16-minitexto-gato",
  titulo: "Dia 16 · Mini-texto — O gato e a casa",
  icone: "🏠",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_MINITEXTO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Começamos a última semana! Cada dia um mini-texto novo, lido três vezes." },
    { tipo: "leituraTexto", titulo: "O gato e a casa", imagemUrl: gato, frases: ["O GATO MORA NA CASA.", "A CASA É AZUL.", "O GATO DORME NO SOL."], instrucaoAudio: "1ª leitura — ouça devagar comigo, sem pressa.", elogio: "Primeira leitura pronta!" },
    { tipo: "leituraTexto", titulo: "O gato e a casa", imagemUrl: casa, frases: ["O GATO MORA NA CASA.", "A CASA É AZUL.", "O GATO DORME NO SOL."], instrucaoAudio: "2ª leitura — leia JUNTO comigo, sem parar.", elogio: "Junto ficou mais solto!" },
    { tipo: "leituraTexto", titulo: "O gato e a casa", imagemUrl: sol, frases: ["O GATO MORA NA CASA.", "A CASA É AZUL.", "O GATO DORME NO SOL."], instrucaoAudio: "3ª leitura — só você, com voz bonita.", elogio: "Três leituras completas!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Onde o gato dorme?", opcoes: [
      { texto: "No sol", correta: true },
      { texto: "Na chuva", correta: false },
      { texto: "Na árvore", correta: false },
    ], feedbackAcerto: "Isso! Ele dorme no sol.", feedbackErro: "Ouve a última frase de novo." },
    { tipo: "celebracao", medalha: "Leitor de Mini-texto 1", mascoteUrl: mascote, falaFinal: "Amanhã: mini-texto com pergunta!" },
  ],
};

const a17: AulaEI = {
  slug: "f6-dia-17-minitexto-pipa",
  titulo: "Dia 17 · Mini-texto — A pipa no vento",
  icone: "🪁",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_MINITEXTO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje tem pergunta no meio! Faça a voz subir na pergunta." },
    { tipo: "leituraTexto", titulo: "A pipa no vento", imagemUrl: pipa, frases: ["A PIPA SOBE NO CÉU.", "ONDE ESTÁ A PIPA?", "A PIPA VOLTOU!"], instrucaoAudio: "1ª leitura — devagar, prestando atenção nos finais.", elogio: "Primeira leitura pronta!" },
    { tipo: "leituraEco", titulo: "Eco com prosódia", imagemUrl: pipa, imagensLinhas: [pipa, nuvem, pipa], linhas: ["A PIPA SOBE NO CÉU.", "ONDE ESTÁ A PIPA?", "A PIPA VOLTOU!"], instrucaoAudio: "Agora eu leio e você repete no microfone, copiando a entonação.", elogio: "Você fez a pergunta subir!" },
    { tipo: "leituraTexto", titulo: "A pipa no vento", imagemUrl: nuvem, frases: ["A PIPA SOBE NO CÉU.", "ONDE ESTÁ A PIPA?", "A PIPA VOLTOU!"], instrucaoAudio: "3ª leitura — só você, com voz de contador de histórias.", elogio: "Fluência de verdade!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que acontece no fim da história?", opcoes: [
      { texto: "A pipa voltou", correta: true },
      { texto: "A pipa caiu", correta: false },
      { texto: "A pipa sumiu", correta: false },
    ], feedbackAcerto: "Isso! Ela voltou.", feedbackErro: "Ouve a última linha." },
    { tipo: "celebracao", medalha: "Leitor de Mini-texto 2", mascoteUrl: mascote, falaFinal: "Amanhã: mini-texto com exclamação!" },
  ],
};

const a18: AulaEI = {
  slug: "f6-dia-18-minitexto-sapo",
  titulo: "Dia 18 · Mini-texto — O passeio do sapo",
  icone: "🐸",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_MINITEXTO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje tem exclamação: solte a voz com energia no que tem !" },
    { tipo: "leituraTexto", titulo: "O passeio do sapo", imagemUrl: sapo, frases: ["O SAPO PULOU NA FLOR.", "QUE PULO GRANDE!", "O SAPO CAIU NA ÁGUA."], instrucaoAudio: "1ª leitura — devagar, ouvindo o final de cada frase.", elogio: "Primeira leitura pronta!" },
    { tipo: "leituraEco", titulo: "Eco com exclamação", imagemUrl: sapo, imagensLinhas: [sapo, flor, peixe], linhas: ["O SAPO PULOU NA FLOR.", "QUE PULO GRANDE!", "O SAPO CAIU NA ÁGUA."], instrucaoAudio: "Eu leio e você repete no microfone — solte a voz na exclamação.", elogio: "Que exclamação linda!" },
    { tipo: "leituraTexto", titulo: "O passeio do sapo", imagemUrl: peixe, frases: ["O SAPO PULOU NA FLOR.", "QUE PULO GRANDE!", "O SAPO CAIU NA ÁGUA."], instrucaoAudio: "3ª leitura — só você, com a voz do sapo.", elogio: "Fluência com sentimento!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Onde o sapo caiu?", opcoes: [
      { texto: "Na água", correta: true },
      { texto: "Na areia", correta: false },
      { texto: "Na árvore", correta: false },
    ], feedbackAcerto: "Isso! Na água.", feedbackErro: "Ouve a última frase." },
    { tipo: "celebracao", medalha: "Leitor de Mini-texto 3", mascoteUrl: mascote, falaFinal: "Amanhã: ensaio final antes do diploma!" },
  ],
};

const a19: AulaEI = {
  slug: "f6-dia-19-ensaio-final",
  titulo: "Dia 19 · Ensaio final — três vozes",
  icone: "🎭",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_MINITEXTO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Ensaio final! Um mini-texto com ponto, pergunta e exclamação. Amanhã é o Diploma!" },
    { tipo: "leituraEco", titulo: "Três vozes numa história", imagemUrl: coelho, imagensLinhas: [coelho, arvore, coelho, estrela], linhas: ["O COELHO SAIU DE CASA.", "ONDE ESTÁ A CENOURA?", "A CENOURA ESTAVA AQUI!", "O COELHO COMEU FELIZ."], instrucaoAudio: "Copie a voz do professor em cada linha: ponto desce, pergunta sobe, exclamação vibra.", elogio: "Você mudou a voz certinho em cada final!" },
    { tipo: "leituraTexto", titulo: "O coelho e a cenoura", imagemUrl: coelho, frases: ["O COELHO SAIU DE CASA.", "ONDE ESTÁ A CENOURA?", "A CENOURA ESTAVA AQUI!", "O COELHO COMEU FELIZ."], instrucaoAudio: "Agora só você, do começo ao fim, com voz bonita.", elogio: "Ensaio pronto!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "Como o coelho ficou no fim?", opcoes: [
      { texto: "Feliz", correta: true },
      { texto: "Triste", correta: false },
      { texto: "Com medo", correta: false },
    ], feedbackAcerto: "Isso, feliz!", feedbackErro: "Ouve a última frase." },
    { tipo: "celebracao", medalha: "Pronto pro Diploma", mascoteUrl: mascote, falaFinal: "Amanhã: DIPLOMA DE LEITOR FLUENTE!" },
  ],
};

const a20: AulaEI = {
  slug: "f6-dia-20-diploma-leitor-fluente",
  titulo: "Dia 20 · Diploma — Leitor Fluente",
  icone: "🎓",
  bncc: ["EF01LP14", "EF12LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_MINITEXTO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje é o grande dia: você vai ler um texto inteiro com voz de verdade e ganhar o Diploma de Leitor Fluente!" },
    { tipo: "leituraTexto", titulo: "Meu caminho de leitor", imagemUrl: brilha, frases: [
      "EU APRENDI OS SONS.",
      "EU APRENDI AS LETRAS.",
      "EU APRENDI AS SÍLABAS.",
      "AGORA EU LEIO FRASES E HISTÓRIAS!",
      "EU SOU UM LEITOR FLUENTE!",
    ], instrucaoAudio: "Sua história de leitor — leia devagar com o professor.", elogio: "Que jornada linda!" },
    { tipo: "leituraEco", titulo: "Leitura de gala", imagemUrl: brilha, imagensLinhas: [sol, lua, estrela, brilha, brilha], linhas: [
      "O SOL BRILHOU NO CÉU.",
      "A LUA APARECEU CALMA.",
      "AS ESTRELAS DANÇARAM.",
      "QUE NOITE LINDA!",
      "EU LI TUDO SOZINHO!",
    ], instrucaoAudio: "Última leitura eco: copie a voz do professor em cada linha, com ritmo e emoção.", elogio: "Uma leitura de gala!" },
    { tipo: "compreensaoLeitura", perguntaAudio: "O que você é agora?", opcoes: [
      { texto: "Um leitor fluente", correta: true },
      { texto: "Um bebê", correta: false },
      { texto: "Um cantor", correta: false },
    ], feedbackAcerto: "Sim! Um leitor fluente!", feedbackErro: "Ouve a última frase de novo." },
    { tipo: "missaoFamilia", titulo: "🎓 DIPLOMA LEITOR FLUENTE", convite: "Leia os dois textos de hoje em voz alta para a família. Depois escolham juntos um livrinho de casa e leiam 3 páginas com ritmo e emoção.", dicaAdulto: "Sua criança concluiu a Fase 6 de fluência — 20 missões de leitura repetida, eco e prosódia. Ela agora lê frases inteiras com precisão, ritmo e entonação (pontos descem, perguntas sobem, exclamações vibram). Continue lendo com ela 15 min por dia: livros ilustrados curtos são ideais nesta fase." },
    { tipo: "celebracao", medalha: "🎓 LEITOR FLUENTE — Fase 6 concluída!", mascoteUrl: mascote, falaFinal: "Você é oficialmente um Leitor Fluente. Nunca pare de ler — a próxima aventura é o Vocabulário Ativo!" },
  ],
};

/* ============================================================
 * Curso — Fase 6 completa (20 missões)
 * ============================================================ */

export const cursoLerComAuroraFase6: CursoEI = {
  slug: "ler-com-aurora-fase6",
  serie: "pre2",
  serieLabel: "Pré II / 1º Ano (Fluência)",
  titulo: "Fluência Verdadeira",
  descricao:
    "Ler com precisão, ritmo e expressão. Leitura repetida, eco, prosódia e mini-textos — a atenção libera para o significado.",
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
    {
      slug: "f6-semana-03",
      numero: 3,
      titulo: "Semana 3 · Prosódia (. ? !)",
      subtitulo: "Voz Camaleoa",
      aulas: [a11, a12, a13, a14, a15],
    },
    {
      slug: "f6-semana-04",
      numero: 4,
      titulo: "Semana 4 · Mini-textos + Diploma",
      subtitulo: "Leitor Fluente",
      aulas: [a16, a17, a18, a19, a20],
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


