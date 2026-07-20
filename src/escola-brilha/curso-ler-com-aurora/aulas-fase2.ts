import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as pipa } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as tambor } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as dinossauro } from "@/assets/neuro-treino/objetos/dinossauro.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as vaca } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as sorvete } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as galo } from "@/assets/neuro-treino/objetos/galo.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as jardim } from "@/assets/neuro-treino/objetos/jardim.png.asset.json";

/**
 * Ler com Aurora — Fase 2: Princípio Alfabético
 * ---------------------------------------------
 * 20 aulas · 4 semanas · 1 missão/dia (15 min)
 *
 * Base científica (NRP 2000, PNA-MEC 2019, Ehri 2005, Dehaene 2011,
 * Longcamp 2008, Elkonin 1973, Heggerty).
 *
 * Técnicas comprovadas por aula:
 *  - somDaLetra          → correspondência grafema-fonema explícita (Ehri)
 *  - tracadoLetra        → aprendizagem multissensorial (Longcamp/Dehaene)
 *  - elkoninBoxes        → mapeamento fonema-grafema (Elkonin)
 *  - letrasMoveis        → codificação ativa (Montessori + Ehri)
 *  - delecaoFonemica     → manipulação avançada de fonemas (Heggerty)
 *  - pareamentoLetraSom  → discriminação letra-som (Blachman)
 *
 * Sem promessas de prazo. Cada criança progride no próprio ritmo.
 */

const mascote = brilha;
const BASE_PADRAO =
  "Combinamos ensino explícito de correspondência grafema-fonema (Ehri, 2005), traçado motor com dedo que ativa áreas visuais da leitura (Longcamp, 2008) e caixas de Elkonin (1973) para mapear cada som em uma letra. Referências: NRP (2000), PNA-MEC (2019).";

/* ============================================================
 * SEMANA 1 — VOGAIS (A, E, I, O, U)
 * ============================================================ */

const aula01: AulaEI = {
  slug: "f2-dia-01-vogal-a",
  titulo: "Dia 1 · A letra A",
  icone: "🅰️",
  bncc: ["EI03EF09", "EF01LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Bem-vindo à Fase 2! Agora a gente vai VER as letras. Hoje: a letra A." },
    { tipo: "somDaLetra", letra: "A", som: "AAA", instrucaoAudio: "Escuta o som da letra A.", exemplos: [{ nome: "abelha", imagemUrl: abelha }, { nome: "árvore", imagemUrl: arvore }, { nome: "asa", imagemUrl: abelha }], elogio: "Isso! A de abelha, A de árvore." },
    { tipo: "tracadoLetra", letra: "A", instrucaoAudio: "Traça o A com o dedinho na tela.", elogio: "Que A lindo!" },
    { tipo: "pareamentoLetraSom", instrucaoAudio: "Toca no A e depois no bichinho que começa com o som A.", pares: [{ letra: "A", nome: "abelha", imagemUrl: abelha }, { letra: "B", nome: "bola", imagemUrl: bola }, { letra: "P", nome: "pato", imagemUrl: pato }], elogio: "Você já reconhece o A!" },
    { tipo: "vocabularioVisual", instrucaoAudio: "Escuta as palavras com A.", itens: [{ nome: "abelha", imagemUrl: abelha }, { nome: "árvore", imagemUrl: arvore }, { nome: "asa", imagemUrl: borboleta }] },
    { tipo: "rodaConversa", imagemUrl: arvore, pergunta: "Que outras coisas você conhece que começam com A?" },
    { tipo: "celebracao", medalha: "Cavaleiro da Vogal A", mascoteUrl: mascote, falaFinal: "Uma letra, um som. Amanhã: E!" },
  ],
};

const aula02: AulaEI = {
  slug: "f2-dia-02-vogal-e",
  titulo: "Dia 2 · A letra E",
  icone: "🇪",
  bncc: ["EI03EF09", "EF01LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: a letra E! E de estrela." },
    { tipo: "somDaLetra", letra: "E", som: "ÊÊÊ", instrucaoAudio: "Escuta o som da letra E.", exemplos: [{ nome: "estrela", imagemUrl: estrela }, { nome: "escola", imagemUrl: mochila }, { nome: "elefante", imagemUrl: dinossauro }], elogio: "É! E de estrela." },
    { tipo: "tracadoLetra", letra: "E", instrucaoAudio: "Três risquinhos para a direita. Traça o E.", elogio: "Perfeito!" },
    { tipo: "pareamentoLetraSom", instrucaoAudio: "Liga cada letra ao seu som.", pares: [{ letra: "E", nome: "estrela", imagemUrl: estrela }, { letra: "A", nome: "abelha", imagemUrl: abelha }], elogio: "Já são duas vogais!" },
    { tipo: "somInicial", instrucaoAudio: "Qual começa como ESTRELA?", referencia: { nome: "estrela", imagemUrl: estrela }, opcoes: [{ nome: "escola", imagemUrl: mochila, correta: true }, { nome: "bola", imagemUrl: bola, correta: false }, { nome: "pato", imagemUrl: pato, correta: false }], feedbackAcerto: "É! Escola começa com E.", feedbackErro: "Escuta de novo: ÊÊÊ-strela." },
    { tipo: "celebracao", medalha: "Cavaleiro da Vogal E", mascoteUrl: mascote, falaFinal: "Amanhã: I, O e U de uma vez!" },
  ],
};

const aula03: AulaEI = {
  slug: "f2-dia-03-vogais-iou",
  titulo: "Dia 3 · I, O, U",
  icone: "🔤",
  bncc: ["EI03EF09", "EF01LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje três de uma vez: I, O, U. As vogais que faltam!" },
    { tipo: "somDaLetra", letra: "I", som: "ÎÎÎ", instrucaoAudio: "Escuta o I.", exemplos: [{ nome: "ilha", imagemUrl: sol }, { nome: "índio", imagemUrl: mascote }, { nome: "igreja", imagemUrl: casa }], elogio: "IIIII!" },
    { tipo: "somDaLetra", letra: "O", som: "ÔÔÔ", instrucaoAudio: "Escuta o O.", exemplos: [{ nome: "olho", imagemUrl: coruja }, { nome: "osso", imagemUrl: cachorro }, { nome: "ovo", imagemUrl: galo }], elogio: "ÔÔÔ!" },
    { tipo: "somDaLetra", letra: "U", som: "ÛÛÛ", instrucaoAudio: "Escuta o U.", exemplos: [{ nome: "urso", imagemUrl: leao }, { nome: "uva", imagemUrl: maca }, { nome: "unha", imagemUrl: coelho }], elogio: "ÛÛÛ!" },
    { tipo: "tracadoLetra", letra: "O", instrucaoAudio: "Um círculo fechado. Traça o O.", minTracos: 30, elogio: "Redondinho!" },
    { tipo: "celebracao", medalha: "Rainha das Vogais", mascoteUrl: mascote, falaFinal: "Você já conhece as CINCO vogais!" },
  ],
};

const aula04: AulaEI = {
  slug: "f2-dia-04-revisao-vogais",
  titulo: "Dia 4 · Todas as vogais",
  icone: "🎯",
  bncc: ["EI03EF09", "EF01LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje é dia de revisar as cinco vogais!" },
    { tipo: "pareamentoLetraSom", instrucaoAudio: "Liga cada vogal a uma figura.", pares: [{ letra: "A", nome: "abelha", imagemUrl: abelha }, { letra: "E", nome: "estrela", imagemUrl: estrela }, { letra: "O", nome: "olho", imagemUrl: coruja }], elogio: "Três acertos!" },
    { tipo: "tracadoLetra", letra: "A", instrucaoAudio: "Vamos traçar de novo. Comece pelo A.", elogio: "Muito bem!" },
    { tipo: "tracadoLetra", letra: "E", instrucaoAudio: "Agora o E.", elogio: "Perfeito!" },
    { tipo: "elkoninBoxes", imagemUrl: coruja, palavra: "OI", fonemas: ["ÔÔÔ", "ÎÎÎ"], instrucaoAudio: "Toca uma caixa para cada som que você ouvir.", elogio: "OI tem 2 sons!" },
    { tipo: "celebracao", medalha: "Detetive das Vogais", mascoteUrl: mascote, falaFinal: "Amanhã começam as CONSOANTES!" },
  ],
};

const aula05: AulaEI = {
  slug: "f2-dia-05-elkonin-vogais",
  titulo: "Dia 5 · Contando sons",
  icone: "📦",
  bncc: ["EF01LP03", "EF01LP04"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje vamos contar os sons das palavras com caixinhas!" },
    { tipo: "elkoninBoxes", imagemUrl: coruja, palavra: "OI", fonemas: ["ÔÔÔ", "ÎÎÎ"], instrucaoAudio: "OI: quantos sons?", elogio: "2 sons!" },
    { tipo: "elkoninBoxes", imagemUrl: cachorro, palavra: "AU", fonemas: ["AAA", "ÛÛÛ"], instrucaoAudio: "AU: quantos sons?", elogio: "2 sons!" },
    { tipo: "elkoninBoxes", imagemUrl: mascote, palavra: "EU", fonemas: ["ÊÊÊ", "ÛÛÛ"], instrucaoAudio: "EU: quantos sons?", elogio: "2 sons!" },
    { tipo: "somInicial", instrucaoAudio: "Qual começa igual a UVA?", referencia: { nome: "uva", imagemUrl: maca }, opcoes: [{ nome: "urso", imagemUrl: leao, correta: true }, { nome: "bola", imagemUrl: bola, correta: false }, { nome: "pato", imagemUrl: pato, correta: false }], feedbackAcerto: "ÛÛÛ! Uva e urso.", feedbackErro: "ÛÛÛ-va. Procure o ÛÛÛ." },
    { tipo: "celebracao", medalha: "Ouvido de Fonema", mascoteUrl: mascote, falaFinal: "Semana 1 terminada! Amanhã: consoantes!" },
  ],
};

/* ============================================================
 * SEMANA 2 — P, B, M, T, D
 * ============================================================ */

const aula06: AulaEI = {
  slug: "f2-dia-06-consoante-p",
  titulo: "Dia 6 · A letra P",
  icone: "🅿️",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Primeira consoante: P! P de pato." },
    { tipo: "somDaLetra", letra: "P", som: "PPP", instrucaoAudio: "O P faz PPP com os lábios apertados.", exemplos: [{ nome: "pato", imagemUrl: pato }, { nome: "pipa", imagemUrl: pipa }, { nome: "peixe", imagemUrl: peixe }], elogio: "PPP!" },
    { tipo: "tracadoLetra", letra: "P", instrucaoAudio: "Um pau em pé e uma barriguinha em cima. Traça o P.", elogio: "Que P lindo!" },
    { tipo: "somInicial", instrucaoAudio: "Qual começa com o som PPP?", referencia: { nome: "pato", imagemUrl: pato }, opcoes: [{ nome: "pipa", imagemUrl: pipa, correta: true }, { nome: "bola", imagemUrl: bola, correta: false }, { nome: "gato", imagemUrl: gato, correta: false }], feedbackAcerto: "PPP-ipa!", feedbackErro: "PPP-ipa começa com P." },
    { tipo: "letrasMoveis", imagemUrl: pato, palavra: "PATO", distratoras: ["B", "M"], instrucaoAudio: "Monte a palavra PATO.", elogio: "PATO! Sua primeira palavra!" },
    { tipo: "celebracao", medalha: "Escudeiro do P", mascoteUrl: mascote, falaFinal: "Você formou uma palavra inteira!" },
  ],
};

const aula07: AulaEI = {
  slug: "f2-dia-07-consoante-b",
  titulo: "Dia 7 · A letra B",
  icone: "🅱️",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Hoje: B de bola!" },
    { tipo: "somDaLetra", letra: "B", som: "BBB", instrucaoAudio: "B faz BBB com voz.", exemplos: [{ nome: "bola", imagemUrl: bola }, { nome: "banana", imagemUrl: banana }, { nome: "bolo", imagemUrl: bolo }], elogio: "BBB!" },
    { tipo: "tracadoLetra", letra: "B", instrucaoAudio: "Um pau em pé e duas barrigas. Traça o B.", elogio: "B perfeito!" },
    { tipo: "pareamentoLetraSom", instrucaoAudio: "Liga letra e figura.", pares: [{ letra: "B", nome: "bola", imagemUrl: bola }, { letra: "P", nome: "pato", imagemUrl: pato }, { letra: "A", nome: "abelha", imagemUrl: abelha }], elogio: "Sem confundir B e P!" },
    { tipo: "letrasMoveis", imagemUrl: bola, palavra: "BOLA", distratoras: ["P", "M"], instrucaoAudio: "Monta a palavra BOLA.", elogio: "BOLA!" },
    { tipo: "celebracao", medalha: "Escudeiro do B", mascoteUrl: mascote, falaFinal: "Duas palavras já! PATO e BOLA." },
  ],
};

const aula08: AulaEI = {
  slug: "f2-dia-08-consoante-m",
  titulo: "Dia 8 · A letra M",
  icone: "Ⓜ️",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "M de mãe, de maçã, de mochila!" },
    { tipo: "somDaLetra", letra: "M", som: "MMM", instrucaoAudio: "M faz MMM com boca fechada.", exemplos: [{ nome: "maçã", imagemUrl: maca }, { nome: "mochila", imagemUrl: mochila }, { nome: "mão", imagemUrl: mascote }], elogio: "MMM!" },
    { tipo: "tracadoLetra", letra: "M", instrucaoAudio: "Duas montanhas juntas. Traça o M.", elogio: "Que M forte!" },
    { tipo: "elkoninBoxes", imagemUrl: mascote, palavra: "MAMÃE", fonemas: ["MMM", "AAA", "MMM", "ÃÃÃ"], instrucaoAudio: "MAMÃE tem quantos sons? Toca uma caixa por vez.", elogio: "4 sons!" },
    { tipo: "letrasMoveis", imagemUrl: maca, palavra: "MACA", distratoras: ["P", "B"], instrucaoAudio: "Monta MACA.", elogio: "MACA!" },
    { tipo: "celebracao", medalha: "Escudeiro do M", mascoteUrl: mascote, falaFinal: "Três consoantes dominadas!" },
  ],
};

const aula09: AulaEI = {
  slug: "f2-dia-09-consoante-t",
  titulo: "Dia 9 · A letra T",
  icone: "🇹",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "T de tambor, de tatu!" },
    { tipo: "somDaLetra", letra: "T", som: "TTT", instrucaoAudio: "T é seco: TTT.", exemplos: [{ nome: "tambor", imagemUrl: tambor }, { nome: "tatu", imagemUrl: rato }, { nome: "tigre", imagemUrl: gato }], elogio: "TTT!" },
    { tipo: "tracadoLetra", letra: "T", instrucaoAudio: "Um risco em cima e um pau embaixo. Traça o T.", elogio: "T perfeito!" },
    { tipo: "letrasMoveis", imagemUrl: tambor, palavra: "TATU", distratoras: ["B", "P"], instrucaoAudio: "Monta TATU.", elogio: "TATU!" },
    { tipo: "somInicial", instrucaoAudio: "Qual começa com T?", referencia: { nome: "tambor", imagemUrl: tambor }, opcoes: [{ nome: "tigre", imagemUrl: gato, correta: true }, { nome: "bola", imagemUrl: bola, correta: false }, { nome: "pato", imagemUrl: pato, correta: false }], feedbackAcerto: "TTT-igre!", feedbackErro: "Escute o TTT." },
    { tipo: "celebracao", medalha: "Escudeiro do T", mascoteUrl: mascote, falaFinal: "Amanhã: D!" },
  ],
};

const aula10: AulaEI = {
  slug: "f2-dia-10-consoante-d",
  titulo: "Dia 10 · A letra D",
  icone: "🇩",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "D de dinossauro, de dado!" },
    { tipo: "somDaLetra", letra: "D", som: "DDD", instrucaoAudio: "D é como T, mas com voz: DDD.", exemplos: [{ nome: "dinossauro", imagemUrl: dinossauro }, { nome: "dado", imagemUrl: pipa }, { nome: "dedo", imagemUrl: mascote }], elogio: "DDD!" },
    { tipo: "tracadoLetra", letra: "D", instrucaoAudio: "Um pau em pé e uma barriga grande. Traça o D.", elogio: "D perfeito!" },
    { tipo: "pareamentoLetraSom", instrucaoAudio: "Confira: liga a letra ao seu som.", pares: [{ letra: "D", nome: "dinossauro", imagemUrl: dinossauro }, { letra: "T", nome: "tambor", imagemUrl: tambor }, { letra: "M", nome: "mochila", imagemUrl: mochila }], elogio: "Sem confundir D e T!" },
    { tipo: "delecaoFonemica", palavraOriginal: "DEDO", fonemaRemovido: "d", instrucaoAudio: "Diga DEDO sem o /d/. Escolha a resposta.", opcoes: [{ texto: "EDO", correta: true }, { texto: "DED", correta: false }, { texto: "DODO", correta: false }], feedbackAcerto: "EDO! Você tirou o D!", feedbackErro: "Tira só o começo: /D/-EDO." },
    { tipo: "celebracao", medalha: "Cavaleiro das 5 Consoantes", mascoteUrl: mascote, falaFinal: "Semana 2 completa!" },
  ],
};

/* ============================================================
 * SEMANA 3 — L, F, V, N, S
 * ============================================================ */

const aula11: AulaEI = {
  slug: "f2-dia-11-consoante-l",
  titulo: "Dia 11 · A letra L",
  icone: "🇱",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "L de leão, de lua!" },
    { tipo: "somDaLetra", letra: "L", som: "LLL", instrucaoAudio: "Língua no céu da boca: LLL.", exemplos: [{ nome: "leão", imagemUrl: leao }, { nome: "lua", imagemUrl: lua }, { nome: "livro", imagemUrl: mochila }], elogio: "LLL!" },
    { tipo: "tracadoLetra", letra: "L", instrucaoAudio: "Um pau em pé e um risco embaixo. Traça o L.", elogio: "L bem feito!" },
    { tipo: "letrasMoveis", imagemUrl: lua, palavra: "LUA", distratoras: ["P", "T"], instrucaoAudio: "Monta LUA.", elogio: "LUA!" },
    { tipo: "elkoninBoxes", imagemUrl: leao, palavra: "LEAO", fonemas: ["LLL", "ÊÊÊ", "ÃÃÃ", "ÛÛÛ"], instrucaoAudio: "Conta os sons de LEÃO.", elogio: "4 sons!" },
    { tipo: "celebracao", medalha: "Escudeiro do L", mascoteUrl: mascote, falaFinal: "Você já faz sílabas: LA-LE-LI-LO-LU!" },
  ],
};

const aula12: AulaEI = {
  slug: "f2-dia-12-consoante-f",
  titulo: "Dia 12 · A letra F",
  icone: "🇫",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "F de flor, de fada!" },
    { tipo: "somDaLetra", letra: "F", som: "FFF", instrucaoAudio: "Dente em cima do lábio: FFF.", exemplos: [{ nome: "flor", imagemUrl: flor }, { nome: "faca", imagemUrl: pipa }, { nome: "foca", imagemUrl: peixe }], elogio: "FFF!" },
    { tipo: "tracadoLetra", letra: "F", instrucaoAudio: "Pau em pé e dois risquinhos. Traça o F.", elogio: "Ótimo!" },
    { tipo: "somInicial", instrucaoAudio: "Qual começa com FFF?", referencia: { nome: "flor", imagemUrl: flor }, opcoes: [{ nome: "faca", imagemUrl: pipa, correta: true }, { nome: "bola", imagemUrl: bola, correta: false }, { nome: "leão", imagemUrl: leao, correta: false }], feedbackAcerto: "FFF-aca!", feedbackErro: "Escuta o FFF." },
    { tipo: "letrasMoveis", imagemUrl: flor, palavra: "FADA", distratoras: ["P", "M"], instrucaoAudio: "Monta FADA.", elogio: "FADA!" },
    { tipo: "celebracao", medalha: "Escudeiro do F", mascoteUrl: mascote, falaFinal: "Que evolução!" },
  ],
};

const aula13: AulaEI = {
  slug: "f2-dia-13-consoante-v",
  titulo: "Dia 13 · A letra V",
  icone: "🇻",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "V de vaca, de vovô!" },
    { tipo: "somDaLetra", letra: "V", som: "VVV", instrucaoAudio: "Como F, mas com voz: VVV.", exemplos: [{ nome: "vaca", imagemUrl: vaca }, { nome: "vela", imagemUrl: sol }, { nome: "vovô", imagemUrl: mascote }], elogio: "VVV!" },
    { tipo: "tracadoLetra", letra: "V", instrucaoAudio: "Dois riscos que se juntam embaixo. Traça o V.", elogio: "V perfeito!" },
    { tipo: "pareamentoLetraSom", instrucaoAudio: "Confira sem confundir V e F.", pares: [{ letra: "V", nome: "vaca", imagemUrl: vaca }, { letra: "F", nome: "flor", imagemUrl: flor }, { letra: "L", nome: "leão", imagemUrl: leao }], elogio: "Detetive dos sons!" },
    { tipo: "letrasMoveis", imagemUrl: vaca, palavra: "VACA", distratoras: ["F", "P"], instrucaoAudio: "Monta VACA.", elogio: "VACA!" },
    { tipo: "celebracao", medalha: "Escudeiro do V", mascoteUrl: mascote, falaFinal: "Amanhã: N!" },
  ],
};

const aula14: AulaEI = {
  slug: "f2-dia-14-consoante-n",
  titulo: "Dia 14 · A letra N",
  icone: "🇳",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "N de nuvem, de nariz!" },
    { tipo: "somDaLetra", letra: "N", som: "NNN", instrucaoAudio: "Ponta da língua atrás dos dentes: NNN.", exemplos: [{ nome: "nuvem", imagemUrl: nuvem }, { nome: "nariz", imagemUrl: mascote }, { nome: "ninho", imagemUrl: coruja }], elogio: "NNN!" },
    { tipo: "tracadoLetra", letra: "N", instrucaoAudio: "Dois paus e um risco em diagonal. Traça o N.", elogio: "N perfeito!" },
    { tipo: "elkoninBoxes", imagemUrl: nuvem, palavra: "NUVEM", fonemas: ["NNN", "ÛÛÛ", "VVV", "ÊÊÊ", "MMM"], instrucaoAudio: "NUVEM: quantos sons?", elogio: "5 sons!" },
    { tipo: "delecaoFonemica", palavraOriginal: "NARIZ", fonemaRemovido: "n", instrucaoAudio: "Diga NARIZ sem o /n/.", opcoes: [{ texto: "ARIZ", correta: true }, { texto: "NARI", correta: false }, { texto: "NAIZ", correta: false }], feedbackAcerto: "ARIZ! Você tirou o N!", feedbackErro: "Tira só o começo." },
    { tipo: "celebracao", medalha: "Escudeiro do N", mascoteUrl: mascote, falaFinal: "Mais uma!" },
  ],
};

const aula15: AulaEI = {
  slug: "f2-dia-15-consoante-s",
  titulo: "Dia 15 · A letra S",
  icone: "🇸",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "S de sol, de sapo, de sorvete!" },
    { tipo: "somDaLetra", letra: "S", som: "SSS", instrucaoAudio: "Cobrinha: SSS.", exemplos: [{ nome: "sol", imagemUrl: sol }, { nome: "sapo", imagemUrl: sapo }, { nome: "sorvete", imagemUrl: sorvete }], elogio: "SSS!" },
    { tipo: "tracadoLetra", letra: "S", instrucaoAudio: "Uma cobrinha. Traça o S.", elogio: "SSS perfeito!" },
    { tipo: "letrasMoveis", imagemUrl: sapo, palavra: "SAPO", distratoras: ["B", "M"], instrucaoAudio: "Monta SAPO.", elogio: "SAPO!" },
    { tipo: "letrasMoveis", imagemUrl: sol, palavra: "SOL", distratoras: ["P", "T"], instrucaoAudio: "Monta SOL — só 3 letras!", elogio: "SOL!" },
    { tipo: "celebracao", medalha: "Cavaleiro das 10 Consoantes", mascoteUrl: mascote, falaFinal: "Semana 3 completa! Faltam 5 dias!" },
  ],
};

/* ============================================================
 * SEMANA 4 — R, C, G, J + Diploma
 * ============================================================ */

const aula16: AulaEI = {
  slug: "f2-dia-16-consoante-r",
  titulo: "Dia 16 · A letra R",
  icone: "🇷",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "R de rato, de rio! O R é bem forte." },
    { tipo: "somDaLetra", letra: "R", som: "RRR", instrucaoAudio: "R vibra a língua: RRR.", exemplos: [{ nome: "rato", imagemUrl: rato }, { nome: "rio", imagemUrl: nuvem }, { nome: "rosa", imagemUrl: flor }], elogio: "RRR!" },
    { tipo: "tracadoLetra", letra: "R", instrucaoAudio: "Como o P, mas com uma perninha extra. Traça o R.", elogio: "R lindo!" },
    { tipo: "letrasMoveis", imagemUrl: rato, palavra: "RATO", distratoras: ["P", "B"], instrucaoAudio: "Monta RATO.", elogio: "RATO!" },
    { tipo: "elkoninBoxes", imagemUrl: flor, palavra: "ROSA", fonemas: ["RRR", "ÔÔÔ", "ZZZ", "AAA"], instrucaoAudio: "ROSA: quantos sons?", elogio: "4 sons!" },
    { tipo: "celebracao", medalha: "Escudeiro do R", mascoteUrl: mascote, falaFinal: "R foi difícil, mas você venceu!" },
  ],
};

const aula17: AulaEI = {
  slug: "f2-dia-17-consoante-c",
  titulo: "Dia 17 · A letra C",
  icone: "🇨",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "C de casa, de cachorro, de coelho!" },
    { tipo: "somDaLetra", letra: "C", som: "KKK", instrucaoAudio: "C com A, O, U faz KKK.", exemplos: [{ nome: "casa", imagemUrl: casa }, { nome: "cachorro", imagemUrl: cachorro }, { nome: "coelho", imagemUrl: coelho }], elogio: "KKK!" },
    { tipo: "tracadoLetra", letra: "C", instrucaoAudio: "Uma barriguinha aberta. Traça o C.", elogio: "C bem feito!" },
    { tipo: "letrasMoveis", imagemUrl: casa, palavra: "CASA", distratoras: ["B", "P"], instrucaoAudio: "Monta CASA.", elogio: "CASA! Sua casa!" },
    { tipo: "somInicial", instrucaoAudio: "Qual começa como CASA?", referencia: { nome: "casa", imagemUrl: casa }, opcoes: [{ nome: "coruja", imagemUrl: coruja, correta: true }, { nome: "flor", imagemUrl: flor, correta: false }, { nome: "leão", imagemUrl: leao, correta: false }], feedbackAcerto: "KKK-oruja!", feedbackErro: "Escute o começo." },
    { tipo: "celebracao", medalha: "Escudeiro do C", mascoteUrl: mascote, falaFinal: "Amanhã: G!" },
  ],
};

const aula18: AulaEI = {
  slug: "f2-dia-18-consoante-g",
  titulo: "Dia 18 · A letra G",
  icone: "🇬",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "G de gato, de galo!" },
    { tipo: "somDaLetra", letra: "G", som: "GGG", instrucaoAudio: "G com A, O, U faz GGG.", exemplos: [{ nome: "gato", imagemUrl: gato }, { nome: "galo", imagemUrl: galo }, { nome: "gota", imagemUrl: nuvem }], elogio: "GGG!" },
    { tipo: "tracadoLetra", letra: "G", instrucaoAudio: "Como o C com uma linha embaixo. Traça o G.", elogio: "G perfeito!" },
    { tipo: "letrasMoveis", imagemUrl: gato, palavra: "GATO", distratoras: ["C", "B"], instrucaoAudio: "Monta GATO.", elogio: "GATO!" },
    { tipo: "pareamentoLetraSom", instrucaoAudio: "Sem confundir C e G.", pares: [{ letra: "G", nome: "gato", imagemUrl: gato }, { letra: "C", nome: "casa", imagemUrl: casa }, { letra: "R", nome: "rato", imagemUrl: rato }], elogio: "Muito bem!" },
    { tipo: "celebracao", medalha: "Escudeiro do G", mascoteUrl: mascote, falaFinal: "Faltam duas missões!" },
  ],
};

const aula19: AulaEI = {
  slug: "f2-dia-19-consoante-j",
  titulo: "Dia 19 · A letra J",
  icone: "🇯",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 15,
  baseCientifica: BASE_PADRAO,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "J de jardim, de janela, de jacaré!" },
    { tipo: "somDaLetra", letra: "J", som: "JJJ", instrucaoAudio: "J faz JJJ, com voz.", exemplos: [{ nome: "jardim", imagemUrl: jardim }, { nome: "janela", imagemUrl: casa }, { nome: "jacaré", imagemUrl: dinossauro }], elogio: "JJJ!" },
    { tipo: "tracadoLetra", letra: "J", instrucaoAudio: "Um pauzinho com um gancho embaixo. Traça o J.", elogio: "J perfeito!" },
    { tipo: "delecaoFonemica", palavraOriginal: "JARDIM", fonemaRemovido: "j", instrucaoAudio: "Diga JARDIM sem o /j/.", opcoes: [{ texto: "ARDIM", correta: true }, { texto: "JARDI", correta: false }, { texto: "DIMJAR", correta: false }], feedbackAcerto: "ARDIM! Isso!", feedbackErro: "Tira só o começo." },
    { tipo: "letrasMoveis", imagemUrl: jardim, palavra: "JOGO", distratoras: ["C", "M"], instrucaoAudio: "Monta JOGO.", elogio: "JOGO!" },
    { tipo: "celebracao", medalha: "Escudeiro do J", mascoteUrl: mascote, falaFinal: "Amanhã: o DIPLOMA da Fase 2!" },
  ],
};

const aula20: AulaEI = {
  slug: "f2-dia-20-diploma",
  titulo: "Dia 20 · Diploma Fase 2",
  icone: "🎓",
  bncc: ["EF01LP04", "EF01LP05"],
  duracaoMin: 20,
  baseCientifica:
    "Ao concluir esta fase, a criança demonstra correspondência grafema-fonema para vogais e consoantes iniciais (Ehri, Phase 2 — parcialmente alfabética). Próximo passo: decodificação de sílabas CV (Fase 3).",
  momentos: [
    { tipo: "boasVindas", mascoteUrl: mascote, falaMascote: "Você chegou ao Dia 20! Hoje é dia de diploma!" },
    { tipo: "pareamentoLetraSom", instrucaoAudio: "Grande desafio: liga as letras aos sons!", pares: [{ letra: "P", nome: "pato", imagemUrl: pato }, { letra: "B", nome: "bola", imagemUrl: bola }, { letra: "M", nome: "mochila", imagemUrl: mochila }], elogio: "Detetive alfabético!" },
    { tipo: "pareamentoLetraSom", instrucaoAudio: "Mais um desafio!", pares: [{ letra: "S", nome: "sapo", imagemUrl: sapo }, { letra: "L", nome: "leão", imagemUrl: leao }, { letra: "V", nome: "vaca", imagemUrl: vaca }], elogio: "Que memória!" },
    { tipo: "letrasMoveis", imagemUrl: pato, palavra: "PATO", distratoras: ["B", "M", "S"], instrucaoAudio: "Monta PATO sozinho.", elogio: "PATO!" },
    { tipo: "letrasMoveis", imagemUrl: sol, palavra: "SOL", distratoras: ["P", "M", "T"], instrucaoAudio: "Monta SOL.", elogio: "SOL!" },
    { tipo: "elkoninBoxes", imagemUrl: lua, palavra: "LUA", fonemas: ["LLL", "ÛÛÛ", "AAA"], instrucaoAudio: "Últimas caixas! LUA tem quantos sons?", elogio: "3 sons!" },
    { tipo: "missaoFamilia", titulo: "🎓 Cerimônia de Diploma", convite: "Chame a família. Mostre 3 letras que você aprendeu, faça o som e diga uma palavra que começa com cada uma. Você é oficialmente um leitor iniciante!", dicaAdulto: "Este é um marco. Celebre. A criança agora reconhece letras e sons — próximo passo (Fase 3) é ler sílabas CV (BA, BE, BI, BO, BU) e primeiras palavras sozinhas." },
    { tipo: "celebracao", medalha: "🎓 LEITOR INICIANTE — Fase 2 completa!", mascoteUrl: mascote, falaFinal: "VOCÊ CONSEGUIU! 15 letras, 20 dias. Você conhece o alfabeto de verdade. Nos vemos na Fase 3!" },
  ],
};

/* ============================================================
 * CURSO
 * ============================================================ */

export const cursoLerComAuroraFase2: CursoEI = {
  slug: "ler-com-aurora-fase-2",
  serie: "pre2",
  serieLabel: "Pré II + 1º Ano (5–7 anos)",
  titulo: "Ler com Aurora — Fase 2",
  descricao:
    "20 missões · 4 semanas · 15 min/dia. Princípio alfabético: cada letra tem um som (grafema ↔ fonema).",
  corPrimaria: "#7c3aed",
  corSecundaria: "#f59e0b",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "f2-semana-1",
      numero: 1,
      titulo: "Semana 1 · As 5 Vogais",
      subtitulo: "Cavaleiro das Vogais",
      aulas: [aula01, aula02, aula03, aula04, aula05],
    },
    {
      slug: "f2-semana-2",
      numero: 2,
      titulo: "Semana 2 · P, B, M, T, D",
      subtitulo: "Escudeiro Consoante",
      aulas: [aula06, aula07, aula08, aula09, aula10],
    },
    {
      slug: "f2-semana-3",
      numero: 3,
      titulo: "Semana 3 · L, F, V, N, S",
      subtitulo: "Cavaleiro do Alfabeto",
      aulas: [aula11, aula12, aula13, aula14, aula15],
    },
    {
      slug: "f2-semana-4",
      numero: 4,
      titulo: "Semana 4 · R, C, G, J + Diploma",
      subtitulo: "Leitor Iniciante",
      aulas: [aula16, aula17, aula18, aula19, aula20],
    },
  ],
};

export function getAulaLerComAuroraFase2(slug: string): AulaEI | undefined {
  for (const u of cursoLerComAuroraFase2.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
