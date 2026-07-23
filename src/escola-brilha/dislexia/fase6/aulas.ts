/**
 * Fase 6 · Dígrafos e Encontros Consonantais (10 aulas · dlx-51 a dlx-60)
 * Orton-Gillingham: duas letras que fazem UM som (dígrafo) e duas
 * consoantes SEGUIDAS que fazem sons juntos (encontro). É onde muita
 * criança com dislexia trava, então cada aula tem apoio articulatório e
 * discriminação visual explícita (LH ≠ NH ≠ CH).
 */
import type { AulaDlx } from "../types";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

// ══════════════════════════════════════════════════════════
// AULA 51 · Dígrafo CH (chave, chuva, chá)
// ══════════════════════════════════════════════════════════
export const dlx51: AulaDlx = {
  slug: "dlx-51-digrafo-ch",
  numero: 51,
  fase: 6,
  fone: "CH",
  titulo: "Dígrafo CH — duas letras, um som",
  objetivo: "Ler o dígrafo CH como som único /ʃ/ (som de shhh).",
  cenas: [
    {
      tipo: "abertura",
      fala: "Segredo novo! Quando o C e o H se juntam, eles viram UM som: SHHH. É o dígrafo CH. Boca em bico e ar sai: SHHH.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "cha-ve. Escuta o SHHH no começo.", palavra: "CHAVE", enfase: "CH" },
    { tipo: "escuta", fala: "chu-va. SHHH de novo.", palavra: "CHUVA", enfase: "CH" },
    {
      tipo: "silabas",
      fala: "Toca: cha-ve.",
      palavra: "CHAVE",
      silabas: ["CHA", "VE"],
    },
    {
      tipo: "silabas",
      fala: "Toca: chu-va.",
      palavra: "CHUVA",
      silabas: ["CHU", "VA"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra começa com CH?",
      opcoes: [
        { palavra: "CHAVE", correta: true },
        { palavra: "CASA", correta: false },
        { palavra: "SAPO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual é CHUVA?",
      opcoes: [
        { palavra: "CHUVA", correta: true },
        { palavra: "CHAVE", correta: false },
      ],
    },
    { tipo: "reforco", fala: "CH = SHHH. Duas letras, um só som. Truque de dígrafo.", imagem: pipVet },
    { tipo: "fim", fala: "Dígrafo CH dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 52 · Dígrafo LH (palhaço, coelho, abelha)
// ══════════════════════════════════════════════════════════
export const dlx52: AulaDlx = {
  slug: "dlx-52-digrafo-lh",
  numero: 52,
  fase: 6,
  fone: "LH",
  titulo: "Dígrafo LH — som molhadinho",
  objetivo: "Ler o dígrafo LH como som único /ʎ/.",
  cenas: [
    {
      tipo: "abertura",
      fala: "L e H juntinhos fazem um som molhadinho: LHHH. Encosta a língua no céu da boca e solta o ar dos lados. LHHH!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "pa-lha-ço. Escuta o LH no meio.", palavra: "PALHAÇO", enfase: "LH" },
    { tipo: "escuta", fala: "co-e-lho. LH bem no meio.", palavra: "COELHO", enfase: "LH" },
    { tipo: "escuta", fala: "a-be-lha. Zumbindo.", palavra: "ABELHA", enfase: "LH" },
    {
      tipo: "silabas",
      fala: "co-e-lho. Três sílabas.",
      palavra: "COELHO",
      silabas: ["CO", "E", "LHO"],
    },
    {
      tipo: "silabas",
      fala: "a-be-lha.",
      palavra: "ABELHA",
      silabas: ["A", "BE", "LHA"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem LH?",
      opcoes: [
        { palavra: "COELHO", correta: true },
        { palavra: "CASA", correta: false },
        { palavra: "SOL", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual é o PALHAÇO?",
      opcoes: [
        { palavra: "PALHAÇO", correta: true },
        { palavra: "ABELHA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "LH = molhadinho. Língua no céu da boca.", imagem: pipVet },
    { tipo: "fim", fala: "Dígrafo LH dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 53 · Dígrafo NH (galinha, unha)
// ══════════════════════════════════════════════════════════
export const dlx53: AulaDlx = {
  slug: "dlx-53-digrafo-nh",
  numero: 53,
  fase: 6,
  fone: "NH",
  titulo: "Dígrafo NH — som pelo nariz",
  objetivo: "Ler o dígrafo NH como som único /ɲ/, nasal.",
  cenas: [
    {
      tipo: "abertura",
      fala: "N e H juntos fazem som pelo NARIZ: NHHH. Igual quando você diz 'não'. Sente vibrar no nariz!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "ga-li-nha. NH no fim.", palavra: "GALINHA", enfase: "NH" },
    { tipo: "escuta", fala: "u-nha. Só duas sílabas.", palavra: "UNHA", enfase: "NH" },
    {
      tipo: "silabas",
      fala: "ga-li-nha.",
      palavra: "GALINHA",
      silabas: ["GA", "LI", "NHA"],
    },
    {
      tipo: "silabas",
      fala: "u-nha.",
      palavra: "UNHA",
      silabas: ["U", "NHA"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem NH?",
      opcoes: [
        { palavra: "GALINHA", correta: true },
        { palavra: "COELHO", correta: false },
        { palavra: "CHAVE", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Presta atenção: LH ou NH? Escolha COELHO.",
      opcoes: [
        { palavra: "COELHO", correta: true },
        { palavra: "GALINHA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "NH = nariz vibrando. LH = molhadinho. Não confunde!", imagem: pipVet },
    { tipo: "fim", fala: "Dígrafo NH dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 54 · Dígrafo RR (carro, cachorro)
// ══════════════════════════════════════════════════════════
export const dlx54: AulaDlx = {
  slug: "dlx-54-digrafo-rr",
  numero: 54,
  fase: 6,
  fone: "RR",
  titulo: "Dígrafo RR — som forte de motor",
  objetivo: "Ler o dígrafo RR entre vogais como som forte /ʁ/.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Quando o R aparece SOZINHO entre duas vogais, o som é fraquinho (CARO). Mas dois R juntinhos = SOM FORTE de motor: CARRRRO! RRRR!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "ca-rro. R forte no meio.", palavra: "CARRO", enfase: "RR" },
    { tipo: "escuta", fala: "ca-cho-rro. RR forte no fim.", palavra: "CACHORRO", enfase: "RR" },
    {
      tipo: "silabas",
      fala: "ca-rro.",
      palavra: "CARRO",
      silabas: ["CA", "RRO"],
    },
    {
      tipo: "silabas",
      fala: "ca-cho-rro. Ainda tem CH no começo!",
      palavra: "CACHORRO",
      silabas: ["CA", "CHO", "RRO"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem RR forte?",
      opcoes: [
        { palavra: "CARRO", correta: true },
        { palavra: "CASA", correta: false },
        { palavra: "MAR", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual é o CACHORRO?",
      opcoes: [
        { palavra: "CACHORRO", correta: true },
        { palavra: "COELHO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "R sozinho no meio = fraco. RR = motor. R no começo da palavra também é forte.", imagem: pipVet },
    { tipo: "fim", fala: "Dígrafo RR dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 55 · Dígrafo SS (osso, passa)
// ══════════════════════════════════════════════════════════
export const dlx55: AulaDlx = {
  slug: "dlx-55-digrafo-ss",
  numero: 55,
  fase: 6,
  fone: "SS",
  titulo: "Dígrafo SS — som de cobra",
  objetivo: "Ler o dígrafo SS entre vogais como som /s/ (nunca /z/).",
  cenas: [
    {
      tipo: "abertura",
      fala: "S sozinho entre vogais fica com som de Z (CASA = /caza/). Mas dois S juntos ficam SEMPRE com som de S de cobra: SSSS!",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "o-sso. Ossinho.", palavra: "OSSO", enfase: "SS" },
    { tipo: "escuta", fala: "pa-ssa. Fruta passa.", palavra: "PASSA", enfase: "SS" },
    {
      tipo: "silabas",
      fala: "o-sso.",
      palavra: "OSSO",
      silabas: ["O", "SSO"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem SS (som de cobra)?",
      opcoes: [
        { palavra: "OSSO", correta: true },
        { palavra: "CASA", correta: false },
        { palavra: "MESA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Presta atenção: PASSA ou CASA?",
      opcoes: [
        { palavra: "PASSA", correta: true },
        { palavra: "CASA", correta: false },
      ],
    },
    { tipo: "reforco", fala: "SS = SSSS de cobra. S sozinho no meio de vogais = Z de zumbi.", imagem: pipVet },
    { tipo: "fim", fala: "Dígrafo SS dominado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 56 · Revisão dígrafos (CH · LH · NH · RR · SS)
// ══════════════════════════════════════════════════════════
export const dlx56: AulaDlx = {
  slug: "dlx-56-revisao-digrafos",
  numero: 56,
  fase: 6,
  fone: "CH · LH · NH · RR · SS",
  titulo: "Revisão: os 5 dígrafos",
  objetivo: "Discriminar os 5 dígrafos ensinados em palavras reais.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Cinco dígrafos aprendidos! Cada um com um jeito de sair da boca. Vamo revisar todos misturados.",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem CH (som de SHHH)?",
      opcoes: [
        { palavra: "CHAVE", correta: true },
        { palavra: "GALINHA", correta: false },
        { palavra: "CARRO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem LH (molhadinho)?",
      opcoes: [
        { palavra: "COELHO", correta: true },
        { palavra: "UNHA", correta: false },
        { palavra: "CHUVA", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem NH (pelo nariz)?",
      opcoes: [
        { palavra: "GALINHA", correta: true },
        { palavra: "ABELHA", correta: false },
        { palavra: "OSSO", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem RR (motor forte)?",
      opcoes: [
        { palavra: "CACHORRO", correta: true },
        { palavra: "PALHAÇO", correta: false },
        { palavra: "CHAVE", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem SS (cobra)?",
      opcoes: [
        { palavra: "OSSO", correta: true },
        { palavra: "CARRO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "5 dígrafos, 5 sons únicos. Você reconhece cada um.", imagem: pipVet },
    { tipo: "fim", fala: "Dígrafos: capítulo fechado! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 57 · Encontros com R: BR, PR, TR (prato, três)
// ══════════════════════════════════════════════════════════
export const dlx57: AulaDlx = {
  slug: "dlx-57-encontros-br-pr-tr",
  numero: 57,
  fase: 6,
  fone: "BR · PR · TR",
  titulo: "Encontros com R (BR, PR, TR)",
  objetivo: "Ler encontros consonantais onde dois sons saem juntos.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Segredo do encontro! Duas consoantes SEGUIDAS, mas cada uma com seu som. Não é dígrafo — os dois sons aparecem. b mais r dá br. p mais r dá pr. t mais r dá tr.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "pra-to. Escuta o P + R juntinhos.", palavra: "PRATO", enfase: "PR" },
    { tipo: "escuta", fala: "TRÊS. Só uma sílaba, mas TR bem coladinho.", palavra: "TRÊS", enfase: "TR" },
    { tipo: "escuta", fala: "bra-ço. BR forte.", palavra: "BRAÇO", enfase: "BR" },
    {
      tipo: "silabas",
      fala: "pra-to.",
      palavra: "PRATO",
      silabas: ["PRA", "TO"],
    },
    {
      tipo: "silabas",
      fala: "bra-ço.",
      palavra: "BRAÇO",
      silabas: ["BRA", "ÇO"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra começa com PR?",
      opcoes: [
        { palavra: "PRATO", correta: true },
        { palavra: "PATO", correta: false },
        { palavra: "SOL", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E qual é TRÊS?",
      opcoes: [
        { palavra: "TRÊS", correta: true },
        { palavra: "TÊNIS", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Encontro = dois sons colados. Diferente do dígrafo, que vira um só som.", imagem: pipVet },
    { tipo: "fim", fala: "BR, PR, TR — encontros dominados! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 58 · Encontros com R: CR, DR, FR, GR, VR
// ══════════════════════════════════════════════════════════
export const dlx58: AulaDlx = {
  slug: "dlx-58-encontros-cr-fr-gr",
  numero: 58,
  fase: 6,
  fone: "CR · FR · GR · DR · VR",
  titulo: "Mais encontros com R",
  objetivo: "Ampliar leitura de encontros consonantais com R.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Mais parcerias com R! CR, FR, GR, DR e até VR. Sempre a consoante primeiro, R depois, e a vogal fecha.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "cra-vo. CR forte.", palavra: "CRAVO", enfase: "CR" },
    { tipo: "escuta", fala: "fra-co. FR igual ao vento.", palavra: "FRACO", enfase: "FR" },
    { tipo: "escuta", fala: "gra-nde. GR bem grave.", palavra: "GRANDE", enfase: "GR" },
    { tipo: "escuta", fala: "dra-gão. DR raro mas forte!", palavra: "DRAGÃO", enfase: "DR" },
    {
      tipo: "silabas",
      fala: "gra-nde.",
      palavra: "GRANDE",
      silabas: ["GRAN", "DE"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra começa com GR?",
      opcoes: [
        { palavra: "GRANDE", correta: true },
        { palavra: "GATO", correta: false },
        { palavra: "GOL", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E DRAGÃO?",
      opcoes: [
        { palavra: "DRAGÃO", correta: true },
        { palavra: "DEDO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Todos os encontros com R funcionam igual: consoante + R + vogal.", imagem: pipVet },
    { tipo: "fim", fala: "Família do R fechada! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 59 · Encontros com L (BL, CL, FL, GL, PL)
// ══════════════════════════════════════════════════════════
export const dlx59: AulaDlx = {
  slug: "dlx-59-encontros-com-l",
  numero: 59,
  fase: 6,
  fone: "BL · CL · FL · GL · PL",
  titulo: "Encontros com L (BL, CL, FL, GL, PL)",
  objetivo: "Ler encontros consonantais onde a segunda letra é L.",
  cenas: [
    {
      tipo: "abertura",
      fala: "Outra família! Agora a segunda letra é L. FL, BL, CL, GL, PL. Cada um com sua consoante da frente.",
      imagem: pipVet,
    },
    { tipo: "escuta", fala: "FLOR. Só uma sílaba, FL no começo.", palavra: "FLOR", enfase: "FL" },
    { tipo: "escuta", fala: "pla-nta. PL forte.", palavra: "PLANTA", enfase: "PL" },
    { tipo: "escuta", fala: "blo-co. BL de bloco de brinquedo.", palavra: "BLOCO", enfase: "BL" },
    { tipo: "escuta", fala: "cli-ma. CL do tempo.", palavra: "CLIMA", enfase: "CL" },
    {
      tipo: "silabas",
      fala: "pla-nta.",
      palavra: "PLANTA",
      silabas: ["PLAN", "TA"],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra começa com FL?",
      opcoes: [
        { palavra: "FLOR", correta: true },
        { palavra: "FACA", correta: false },
        { palavra: "SOL", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "E PLANTA?",
      opcoes: [
        { palavra: "PLANTA", correta: true },
        { palavra: "PATO", correta: false },
      ],
    },
    { tipo: "reforco", fala: "Encontros com L = consoante + L + vogal.", imagem: pipVet },
    { tipo: "fim", fala: "Família do L fechada! 🌟", imagem: pipVet },
  ],
};

// ══════════════════════════════════════════════════════════
// AULA 60 · Revisão geral Fase 6 (dígrafos × encontros)
// ══════════════════════════════════════════════════════════
export const dlx60: AulaDlx = {
  slug: "dlx-60-revisao-fase6",
  numero: 60,
  fase: 6,
  fone: "Fase 6",
  titulo: "Revisão: dígrafo × encontro",
  objetivo: "Discriminar dígrafo (2 letras = 1 som) de encontro (2 letras = 2 sons).",
  cenas: [
    {
      tipo: "abertura",
      fala: "Grande revisão! Vou testar se você sabe QUANDO é dígrafo (um som só) e QUANDO é encontro (dois sons colados).",
      imagem: pipVet,
    },
    {
      tipo: "escolha",
      fala: "CHAVE: dígrafo ou encontro?",
      opcoes: [
        { palavra: "DÍGRAFO (um som SHHH)", correta: true },
        { palavra: "ENCONTRO (dois sons)", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "PRATO: dígrafo ou encontro?",
      opcoes: [
        { palavra: "ENCONTRO (P + R)", correta: true },
        { palavra: "DÍGRAFO (um som)", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "GALINHA — qual dígrafo tem?",
      opcoes: [
        { palavra: "NH", correta: true },
        { palavra: "LH", correta: false },
        { palavra: "CH", correta: false },
      ],
    },
    {
      tipo: "escolha",
      fala: "Qual palavra tem ENCONTRO com L?",
      opcoes: [
        { palavra: "FLOR", correta: true },
        { palavra: "CHUVA", correta: false },
        { palavra: "GALINHA", correta: false },
      ],
    },
    {
      tipo: "silabas",
      fala: "Junta: bra-ço.",
      palavra: "BRAÇO",
      silabas: ["BRA", "ÇO"],
    },
    {
      tipo: "silabas",
      fala: "E ca-cho-rro.",
      palavra: "CACHORRO",
      silabas: ["CA", "CHO", "RRO"],
    },
    { tipo: "reforco", fala: "Dígrafo = duas letras, UM som. Encontro = duas letras, DOIS sons. Truque OG número 3.", imagem: pipVet },
    { tipo: "fim", fala: "Fase 6 concluída! 🌟🌟🌟", imagem: pipVet },
  ],
};
