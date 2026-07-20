import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as galo } from "@/assets/neuro-treino/objetos/galo.png.asset.json";
import { url as vaca } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as sorvete } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as pipa } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as tambor } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as dinossauro } from "@/assets/neuro-treino/objetos/dinossauro.png.asset.json";
import { url as jardim } from "@/assets/neuro-treino/objetos/jardim.png.asset.json";

/**
 * Ler com Aurora — Fase 1: Consciência Fonológica
 * ------------------------------------------------
 * 20 aulas · 4 semanas · 1 missão diária (15 min)
 * Público: Pré II + 1º Ano
 *
 * Base científica (NRP, PNA-MEC 2019, Heggerty, Ehri):
 *  - Semana 1: Escuta ativa e consciência de palavra/frase
 *  - Semana 2: Rima (nível mais fácil da consciência fonológica)
 *  - Semana 3: Sílaba (bater, juntar, tirar)
 *  - Semana 4: Fonema (som inicial e final) — porta para a leitura
 *
 * Formato: reusa MomentoEI + PlayerPortuguesEI (audio-first, sem texto
 * para a criança ler).
 */

const mascote = brilha;

/* ============================================================
 * SEMANA 1 — ESCUTAR OS SONS
 * ============================================================ */

const aula01: AulaEI = {
  slug: "dia-01-sons-ao-redor",
  titulo: "Dia 1 · Sons ao meu redor",
  icone: "👂",
  bncc: ["EI03EF01", "EI03EF03"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Oi, eu sou o Brilha! Vou te ajudar a virar detetive dos sons. Em vinte dias você vai começar a LER de verdade. Vamos?",
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio:
        "Toque em cada bichinho e escute o nome. Depois repita bem alto!",
      itens: [
        { nome: "gato", imagemUrl: gato },
        { nome: "cachorro", imagemUrl: cachorro },
        { nome: "pato", imagemUrl: pato },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual desses bichos faz MIAU?",
      opcoes: [
        { nome: "gato", imagemUrl: gato, correta: true },
        { nome: "cachorro", imagemUrl: cachorro, correta: false },
        { nome: "pato", imagemUrl: pato, correta: false },
      ],
      feedbackAcerto: "Isso! Miau é do GATO. Você escutou bem!",
      feedbackErro: "Quase! Miau é do gato. Toca no gato.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual desses faz QUAC-QUAC?",
      opcoes: [
        { nome: "pato", imagemUrl: pato, correta: true },
        { nome: "vaca", imagemUrl: vaca, correta: false },
        { nome: "sapo", imagemUrl: sapo, correta: false },
      ],
      feedbackAcerto: "Perfeito! Quac-quac é do PATO.",
      feedbackErro: "Escuta de novo: QUAC-QUAC. Isso é o pato!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: jardim,
      pergunta:
        "Feche os olhinhos por 10 segundos. Que sons você escuta na sua casa agora?",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 1",
      mascoteUrl: mascote,
      falaFinal:
        "Você começou! Amanhã tem missão de novo. Um dia por vez, tá bem?",
    },
  ],
};

const aula02: AulaEI = {
  slug: "dia-02-palavras-curtas-longas",
  titulo: "Dia 2 · Palavras curtas e longas",
  icone: "📏",
  bncc: ["EI03EF01", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Detetive voltou! Hoje vamos descobrir que algumas palavras são pequenininhas e outras GIGANTES.",
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Escute: SOL é uma palavra pequenininha.",
      itens: [{ nome: "sol", imagemUrl: sol }],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Agora escute: DI-NOS-SAU-RO. É uma palavra gigante!",
      itens: [{ nome: "dinossauro", imagemUrl: dinossauro }],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual é a palavra MAIS CURTA?",
      opcoes: [
        { nome: "sol", imagemUrl: sol, correta: true },
        { nome: "dinossauro", imagemUrl: dinossauro, correta: false },
        { nome: "borboleta", imagemUrl: borboleta, correta: false },
      ],
      feedbackAcerto: "Isso! SOL é a mais curta — uma batida só.",
      feedbackErro: "SOL tem uma batida só. Dinossauro tem QUATRO!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "E qual é a MAIS COMPRIDA?",
      opcoes: [
        { nome: "lua", imagemUrl: lua, correta: false },
        { nome: "borboleta", imagemUrl: borboleta, correta: true },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: "Perfeito! BOR-BO-LE-TA é comprida — quatro batidas.",
      feedbackErro: "Escuta: BOR-BO-LE-TA. Bem comprida!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: mascote,
      pergunta:
        "Diz o seu nome bem devagar. Ele é curto ou comprido? Conta pro adulto!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 2",
      mascoteUrl: mascote,
      falaFinal: "Dois dias seguidos! Você tá construindo um ouvido de leitor.",
    },
  ],
};

const aula03: AulaEI = {
  slug: "dia-03-frase-tem-palavras",
  titulo: "Dia 3 · A frase tem palavras",
  icone: "🧩",
  bncc: ["EI03EF01", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Segredo de detetive: cada frase é feita de palavrinhas encaixadas. Vem descobrir!",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: gato,
      versos: [
        "Escuta comigo, bem devagar:",
        "O · gato · dorme.",
        "Uma. Duas. Três palavras!",
      ],
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio:
        "Vamos bater palma UMA vez para cada palavra: O · GATO · DORME.",
      palavra: "O GATO DORME",
      silabas: 3,
      imagemUrl: gato,
      elogio: "Boa! Três palmas, três palavras.",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Agora essa: A · BOLA · ROLA. Bate palma pra cada palavra.",
      palavra: "A BOLA ROLA",
      silabas: 3,
      imagemUrl: bola,
      elogio: "Três palmas! Você achou as três palavras.",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Essa é maior: O · PATO · NADA · NO · LAGO.",
      palavra: "O PATO NADA NO LAGO",
      silabas: 5,
      imagemUrl: pato,
      elogio: "Cinco palmas, cinco palavras. Detetive expert!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: casa,
      pergunta:
        "Inventa uma frase pequena sobre a sua casa e bate palma pra cada palavra.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 3",
      mascoteUrl: mascote,
      falaFinal: "Três dias! Já dá pra ver o brilho no seu ouvido.",
    },
  ],
};

const aula04: AulaEI = {
  slug: "dia-04-escutar-e-lembrar",
  titulo: "Dia 4 · Escutar e lembrar",
  icone: "🎧",
  bncc: ["EI03EF01", "EI03EF03"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Detetive bom escuta E lembra. Hoje é treino de memória de ouvido.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: bola,
      versos: ["Palavras da missão de hoje:", "Bola. Sol. Flor.", "Escuta e guarda!"],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual dessas eu falei primeiro: BOLA, SOL ou FLOR?",
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: "Boa memória! Primeiro foi BOLA.",
      feedbackErro: "Volta na tela de trás e escuta de novo, com atenção.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "E qual eu falei por ÚLTIMO?",
      opcoes: [
        { nome: "flor", imagemUrl: flor, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "Perfeito! A última foi FLOR.",
      feedbackErro: "A ordem foi: bola, sol, FLOR. A última é flor.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "Nova lista: LUA, GATO, PIPA. Qual dessas NÃO estava na lista?",
      opcoes: [
        { nome: "bolo", imagemUrl: bolo, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: "Isso! BOLO não estava. Boa escuta!",
      feedbackErro: "A lista era: lua, gato, pipa. Bolo não estava.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 4",
      mascoteUrl: mascote,
      falaFinal: "Ouvido de detetive tá afiado!",
    },
  ],
};

const aula05: AulaEI = {
  slug: "dia-05-revisao-semana-1",
  titulo: "Dia 5 · Missão da semana",
  icone: "🏅",
  bncc: ["EI03EF01", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Chegou o quinto dia! Vamos juntar tudo o que você aprendeu esta semana.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Palavra MAIS CURTA: sol, bola ou dinossauro?",
      opcoes: [
        { nome: "sol", imagemUrl: sol, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "dinossauro", imagemUrl: dinossauro, correta: false },
      ],
      feedbackAcerto: "SOL — uma batida só!",
      feedbackErro: "SOL é a mais curta.",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Bate uma palma por palavra: A · LUA · BRILHA.",
      palavra: "A LUA BRILHA",
      silabas: 3,
      imagemUrl: lua,
      elogio: "Três palmas! Três palavras!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Quem faz AU-AU?",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "galo", imagemUrl: galo, correta: false },
      ],
      feedbackAcerto: "Cachorro!",
      feedbackErro: "AU-AU é do cachorro.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Diploma da Semana 1",
      convite:
        "Conte pro adulto o que você aprendeu esta semana: palavra curta, palavra comprida, e palma pra cada palavra da frase.",
      dicaAdulto:
        "Peça para a criança dar exemplos. Se ela lembrar de pelo menos um, celebre bastante.",
    },
    {
      tipo: "celebracao",
      medalha: "🥉 Ouvido de Bronze — Semana 1 completa!",
      mascoteUrl: mascote,
      falaFinal:
        "Uma semana inteira! Você já tem o Ouvido de Bronze. Vem pra Semana 2 — vamos brincar de RIMA!",
    },
  ],
};

/* ============================================================
 * SEMANA 2 — RIMAS
 * ============================================================ */

const aula06: AulaEI = {
  slug: "dia-06-que-e-rima",
  titulo: "Dia 6 · O que é rima?",
  icone: "🎵",
  bncc: ["EI03EF01", "EI03EF04"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana 2! Hoje começa a magia da RIMA. Rima é quando duas palavras terminam com o mesmo pedacinho.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: gato,
      versos: [
        "Escuta como termina igualzinho:",
        "GA-TO... PA-TO.",
        "-ato... -ato. Rimou!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada imagem e escuta. Percebe o -ATO no fim?",
      itens: [
        { nome: "gato", imagemUrl: gato },
        { nome: "pato", imagemUrl: pato },
        { nome: "rato", imagemUrl: rato },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual rima com GATO?",
      opcoes: [
        { nome: "pato", imagemUrl: pato, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: "GA-TO e PA-TO! Rimou!",
      feedbackErro: "Escuta o fim: GA-to... PA-to. Termina igual!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "E qual rima com RATO?",
      opcoes: [
        { nome: "sapo", imagemUrl: sapo, correta: false },
        { nome: "gato", imagemUrl: gato, correta: true },
        { nome: "lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: "RA-TO... GA-TO! Combinam!",
      feedbackErro: "RA-to rima com GA-to. Termina com -ATO.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 6",
      mascoteUrl: mascote,
      falaFinal: "Você achou a rima! Amanhã tem mais.",
    },
  ],
};

const aula07: AulaEI = {
  slug: "dia-07-escolher-a-rima",
  titulo: "Dia 7 · Ache o par que rima",
  icone: "🔗",
  bncc: ["EI03EF01", "EI03EF04"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje é caça-rimas! Vamos encontrar os pares.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual rima com LUA?",
      opcoes: [
        { nome: "rua (arvore)", imagemUrl: arvore, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "lua-nuvem", imagemUrl: nuvem, correta: true },
      ],
      feedbackAcerto: "LU-A e NU-VEM... quase! Lembra: rima é o FIM. LU-a e RU-a. Vamos treinar mais.",
      feedbackErro: "Rima com LU-a: RU-a, NU-a. Termina com -UA.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual rima com BOLA?",
      opcoes: [
        { nome: "sacola (mochila)", imagemUrl: mochila, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "BO-LA e SA-CO-LA! Terminam com -OLA.",
      feedbackErro: "BO-la... SA-CO-la. O fim é igual: -OLA.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual rima com SOL?",
      opcoes: [
        { nome: "girassol (flor)", imagemUrl: flor, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "pato", imagemUrl: pato, correta: false },
      ],
      feedbackAcerto: "SOL e girassol! Termina com -OL.",
      feedbackErro: "Escuta: sol... girass-OL. Termina igual.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual rima com FLOR?",
      opcoes: [
        { nome: "cor (arco-íris/estrela)", imagemUrl: estrela, correta: false },
        { nome: "tambor", imagemUrl: tambor, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: "FLOR e TAMBOR! Terminam com -OR.",
      feedbackErro: "FL-OR... TAMB-OR. Mesmo fim!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 7",
      mascoteUrl: mascote,
      falaFinal: "Você tá virando poeta!",
    },
  ],
};

const aula08: AulaEI = {
  slug: "dia-08-completar-a-rima",
  titulo: "Dia 8 · Complete a parlenda",
  icone: "📖",
  bncc: ["EI03EF04", "EI03EF06"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Parlenda é um versinho antigo com rima. Você vai me ajudar a terminar cada uma!",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: sol,
      versos: [
        "Sol, sol, sol,",
        "vem brincar de futebol.",
        "Escuta a rima: SOL... FUTEB-OL.",
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "Complete: 'Lá vai a lua, no céu escuro, dando... ' — qual palavra rima?",
      opcoes: [
        { nome: "apuro (nuvem)", imagemUrl: nuvem, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: "Boa! ESCURO rima com APURO. Terminam com -URO.",
      feedbackErro: "Escuta: escu-RO... apu-RO. É o par!",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: gato,
      versos: [
        "Um, dois, feijão com arroz,",
        "três, quatro, feijão no...",
        "Qual palavra você acha que vem?",
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual palavra completa a parlenda 'três, quatro, feijão no...'?",
      opcoes: [
        { nome: "prato (pato)", imagemUrl: pato, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "Isso! 'Feijão no PRATO' — quatro, prato. Rimou!",
      feedbackErro: "Quatro... prato. Termina com -ATO!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 8",
      mascoteUrl: mascote,
      falaFinal: "Parlendeiro de primeira!",
    },
  ],
};

const aula09: AulaEI = {
  slug: "dia-09-inventar-rima",
  titulo: "Dia 9 · Invente uma rima",
  icone: "✨",
  bncc: ["EI03EF04", "EI03EF06"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje VOCÊ é o poeta! Vamos inventar rimas juntos.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: gato,
      versos: [
        "O gato subiu no telhado,",
        "e ficou muito assustado.",
        "Telhado rima com assustado. Terminam com -ADO.",
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio:
        "Ajuda o Brilha: 'A pipa voa lá no céu, junto com o vento e o...' — qual rima?",
      opcoes: [
        { nome: "chapéu (mochila)", imagemUrl: mochila, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "Céu... chapéu! Rimou!",
      feedbackErro: "CÉU rima com CHAPÉU. Termina com -ÉU.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: mascote,
      pergunta:
        "Fala uma palavra que rime com o seu NOME. Não precisa existir, pode ser inventada! Se rimar, valeu.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: casa,
      pergunta:
        "Diga: 'A minha casa tem uma...' e termine com uma palavra que rime com CASA.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 9",
      mascoteUrl: mascote,
      falaFinal: "Poeta oficial da turma!",
    },
  ],
};

const aula10: AulaEI = {
  slug: "dia-10-revisao-semana-2",
  titulo: "Dia 10 · Ouvido de Prata",
  icone: "🥈",
  bncc: ["EI03EF04"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Dez dias! Metade do caminho. Vamos revisar as rimas.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Rima com PATO?",
      opcoes: [
        { nome: "gato", imagemUrl: gato, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: "Pa-TO, ga-TO!",
      feedbackErro: "-ATO rima com -ATO.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Rima com FLOR?",
      opcoes: [
        { nome: "tambor", imagemUrl: tambor, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: "Flor, tambor! -OR!",
      feedbackErro: "-OR combina com -OR.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Rima com BOLA?",
      opcoes: [
        { nome: "sacola/mochila", imagemUrl: mochila, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: "BO-la, SACO-la!",
      feedbackErro: "Termina com -OLA.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Diploma da Semana 2",
      convite:
        "Conte para o adulto duas palavras que rimam. Depois desafie o adulto a inventar uma rima com o seu nome!",
      dicaAdulto:
        "Aceite rimas inventadas ou 'sem sentido' — o importante é ouvir o mesmo fim sonoro.",
    },
    {
      tipo: "celebracao",
      medalha: "🥈 Ouvido de Prata — Semana 2 completa!",
      mascoteUrl: mascote,
      falaFinal: "Você já é meio poeta, meio detetive. Semana 3 é palma nas SÍLABAS!",
    },
  ],
};

/* ============================================================
 * SEMANA 3 — SÍLABAS
 * ============================================================ */

const aula11: AulaEI = {
  slug: "dia-11-silabas-de-2",
  titulo: "Dia 11 · Duas palmas",
  icone: "👏",
  bncc: ["EI03EF01", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana 3! Palavra é feita de pedacinhos chamados SÍLABAS. A gente descobre com palma!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "BO-LA. Bate palma junto: BO... LA.",
      palavra: "BO-LA",
      silabas: 2,
      imagemUrl: bola,
      elogio: "Duas palmas! Bola tem duas sílabas.",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "GA-TO. Bate: GA... TO.",
      palavra: "GA-TO",
      silabas: 2,
      imagemUrl: gato,
      elogio: "Duas!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "PI-PA. Bate: PI... PA.",
      palavra: "PI-PA",
      silabas: 2,
      imagemUrl: pipa,
      elogio: "Duas palmas outra vez!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "SA-PO. Bate: SA... PO.",
      palavra: "SA-PO",
      silabas: 2,
      imagemUrl: sapo,
      elogio: "Sapo tem duas sílabas.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: mascote,
      pergunta:
        "Fala o seu nome bem devagar batendo palma. Quantas palmas deu?",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 11",
      mascoteUrl: mascote,
      falaFinal: "Palma perfeita!",
    },
  ],
};

const aula12: AulaEI = {
  slug: "dia-12-silabas-de-3",
  titulo: "Dia 12 · Três palmas",
  icone: "👐",
  bncc: ["EI03EF01", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje as palavras têm TRÊS pedacinhos. Palma pronta?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "BA-NA-NA.",
      palavra: "BA-NA-NA",
      silabas: 3,
      imagemUrl: banana,
      elogio: "Três palmas!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "CO-E-LHO.",
      palavra: "CO-E-LHO",
      silabas: 3,
      imagemUrl: coelho,
      elogio: "Três!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "SOR-VE-TE.",
      palavra: "SOR-VE-TE",
      silabas: 3,
      imagemUrl: sorvete,
      elogio: "Três palmas geladas!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "A-BE-LHA.",
      palavra: "A-BE-LHA",
      silabas: 3,
      imagemUrl: abelha,
      elogio: "Isso!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual dessas tem TRÊS sílabas?",
      opcoes: [
        { nome: "banana", imagemUrl: banana, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: "BA-NA-NA. Três!",
      feedbackErro: "Bola tem 2. Banana tem 3.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 12",
      mascoteUrl: mascote,
      falaFinal: "Suas mãos tão contando som!",
    },
  ],
};

const aula13: AulaEI = {
  slug: "dia-13-palavras-gigantes",
  titulo: "Dia 13 · Palavras gigantes",
  icone: "🦕",
  bncc: ["EI03EF01", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje é dia das palavras GIGANTES: quatro sílabas!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "DI-NOS-SAU-RO.",
      palavra: "DI-NOS-SAU-RO",
      silabas: 4,
      imagemUrl: dinossauro,
      elogio: "Quatro palmas GIGANTES!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "BOR-BO-LE-TA.",
      palavra: "BOR-BO-LE-TA",
      silabas: 4,
      imagemUrl: borboleta,
      elogio: "Quatro!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "MO-CHI-LA-Ó. Só brincadeira, é MO-CHI-LA, com três.",
      palavra: "MO-CHI-LA",
      silabas: 3,
      imagemUrl: mochila,
      elogio: "Peguei você? Três sílabas!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual palavra é GIGANTE, com 4 sílabas?",
      opcoes: [
        { nome: "borboleta", imagemUrl: borboleta, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "BOR-BO-LE-TA. Quatro palmas!",
      feedbackErro: "Gato tem 2, sol tem 1. Borboleta tem 4!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 13",
      mascoteUrl: mascote,
      falaFinal: "Detetive de palavra gigante!",
    },
  ],
};

const aula14: AulaEI = {
  slug: "dia-14-juntar-silabas",
  titulo: "Dia 14 · Juntar os pedaços",
  icone: "🧲",
  bncc: ["EI03EF01", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Segredo GIGANTE: quando você JUNTA as sílabas, aparece a palavra! Isso é o começo da leitura.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: bola,
      versos: ["Escuta: BO... LA.", "Junta rápido: BOLA!", "É mágica de detetive."],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Junta as sílabas: GA... TO. Que palavra apareceu?",
      opcoes: [
        { nome: "gato", imagemUrl: gato, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: "GA + TO = GATO! Você leu com o ouvido!",
      feedbackErro: "GA... TO... rápido: GATO.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Junta: LU... A. Qual palavra?",
      opcoes: [
        { nome: "lua", imagemUrl: lua, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "LUA!",
      feedbackErro: "LU + A = LUA.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Junta: PI... PA.",
      opcoes: [
        { nome: "pipa", imagemUrl: pipa, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: "PIPA!",
      feedbackErro: "PI + PA = PIPA.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Junta: SA... PO.",
      opcoes: [
        { nome: "sapo", imagemUrl: sapo, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "lua", imagemUrl: lua, correta: false },
      ],
      feedbackAcerto: "SAPO!",
      feedbackErro: "SA + PO = SAPO.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 14",
      mascoteUrl: mascote,
      falaFinal:
        "Você tá LENDO com o ouvido. É assim que começa. Amanhã: tirar pedaços!",
    },
  ],
};

const aula15: AulaEI = {
  slug: "dia-15-tirar-silabas",
  titulo: "Dia 15 · Tira um pedaço",
  icone: "✂️",
  bncc: ["EI03EF01", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Hoje é ao contrário: a gente TIRA uma sílaba e vê o que sobra.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: bola,
      versos: ["Fala BOLA.", "Agora tira o BO. Ficou... LA!", "Achou o pedaço."],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Fala PATO. Agora tira o PA. Qual pedacinho sobra?",
      opcoes: [
        { nome: "TO (com pato)", imagemUrl: pato, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: "Sobrou TO! Você pegou o final.",
      feedbackErro: "PA-TO menos PA... sobra TO.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Fala SORVETE. Agora tira o SOR. Sobra 'VETE'. Qual imagem é sorvete?",
      opcoes: [
        { nome: "sorvete", imagemUrl: sorvete, correta: true },
        { nome: "bolo", imagemUrl: bolo, correta: false },
        { nome: "banana", imagemUrl: banana, correta: false },
      ],
      feedbackAcerto: "SOR-VE-TE menos SOR = VE-TE. Detetive dos sons!",
      feedbackErro: "SOR-VE-TE. Tira o SOR, sobra VETE.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Diploma da Semana 3",
      convite:
        "Brinca com o adulto: fale palavras e tirem pedaços juntos. Ex: GATO sem GA = TO. PIPA sem PI = PA.",
      dicaAdulto:
        "Faça de forma lúdica. Comece com sílaba inicial (mais fácil). Se travar, volte para juntar sílabas.",
    },
    {
      tipo: "celebracao",
      medalha: "🥇 Ouvido de Ouro — Semana 3 completa!",
      mascoteUrl: mascote,
      falaFinal:
        "OURO! Semana 4 é a mais mágica: os SONS das letras. É onde a leitura acende.",
    },
  ],
};

/* ============================================================
 * SEMANA 4 — SONS INICIAIS E FINAIS (FONEMA)
 * ============================================================ */

const aula16: AulaEI = {
  slug: "dia-16-som-inicial",
  titulo: "Dia 16 · O primeiro som",
  icone: "🔤",
  bncc: ["EI03EF01"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Última semana! Hoje o detetive escuta só o PRIMEIRINHO som de cada palavra.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: maca,
      versos: [
        "MAÇÃ. Escuta o começo:",
        "O primeiro som é M.",
        "É o som da letra M.",
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual começa com o mesmo som de MAÇÃ?",
      referencia: { nome: "maçã", imagemUrl: maca },
      opcoes: [
        { nome: "mochila", imagemUrl: mochila, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "pato", imagemUrl: pato, correta: false },
      ],
      feedbackAcerto: "Maçã e mochila começam com M. Mesmo começo!",
      feedbackErro: "Escuta o começo de maçã: M. Qual outra começa com M?",
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual começa com o mesmo som de SOL?",
      referencia: { nome: "sol", imagemUrl: sol },
      opcoes: [
        { nome: "sapo", imagemUrl: sapo, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: "Sol e sapo começam com S. Mesmo começo!",
      feedbackErro: "Escuta o começo de sol: S. Sapo também começa com S.",
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual começa com o mesmo som de BOLA?",
      referencia: { nome: "bola", imagemUrl: bola },
      opcoes: [
        { nome: "banana", imagemUrl: banana, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "Bola e banana começam com B!",
      feedbackErro: "B é o começo de bola. Banana também começa com B.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 16",
      mascoteUrl: mascote,
      falaFinal: "Isso é FONEMA. Você já ouve! Agora vem a mágica final.",
    },
  ],
};

const aula17: AulaEI = {
  slug: "dia-17-caca-som-inicial",
  titulo: "Dia 17 · Caça ao som inicial",
  icone: "🔍",
  bncc: ["EI03EF01"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Missão de caça! Achar palavras com o mesmo som do começo.",
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Mesmo começo de PATO?",
      referencia: { nome: "pato", imagemUrl: pato },
      opcoes: [
        { nome: "pipa", imagemUrl: pipa, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "gato", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: "Pato e pipa começam com P!",
      feedbackErro: "P é o começo de pato. Pipa também começa com P.",
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Mesmo começo de LUA?",
      referencia: { nome: "lua", imagemUrl: lua },
      opcoes: [
        { nome: "leão", imagemUrl: leao, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "Lua e leão começam com L!",
      feedbackErro: "L é o começo de lua. Leão começa com L.",
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Mesmo começo de COELHO?",
      referencia: { nome: "coelho", imagemUrl: coelho },
      opcoes: [
        { nome: "coruja", imagemUrl: coruja, correta: true },
        { nome: "flor", imagemUrl: flor, correta: false },
        { nome: "banana", imagemUrl: banana, correta: false },
      ],
      feedbackAcerto: "Coelho e coruja começam com C!",
      feedbackErro: "Escuta: coelho e coruja começam igual.",
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Mesmo começo de PEIXE?",
      referencia: { nome: "peixe", imagemUrl: peixe },
      opcoes: [
        { nome: "pipa", imagemUrl: pipa, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "Peixe e pipa começam com P!",
      feedbackErro: "P no começo. Pipa também começa com P.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 17",
      mascoteUrl: mascote,
      falaFinal: "Você ouve os fonemas de verdade!",
    },
  ],
};

const aula18: AulaEI = {
  slug: "dia-18-som-final",
  titulo: "Dia 18 · O último som",
  icone: "🎯",
  bncc: ["EI03EF01"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Antes escutamos o começo. Hoje o detetive escuta o FIM da palavra.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: sol,
      versos: ["SOL. Escuta o fim da palavra.", "O último som é L."],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual palavra termina com o mesmo som de SOL?",
      opcoes: [
        { nome: "girassol (flor)", imagemUrl: flor, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "banana", imagemUrl: banana, correta: false },
      ],
      feedbackAcerto: "Sol e girassol terminam com L. Mesmo fim!",
      feedbackErro: "Fim de sol é L. Girassol termina com L também.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual termina como GATO?",
      opcoes: [
        { nome: "pato", imagemUrl: pato, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: "Ga-TO, pa-TO. Terminam com TO!",
      feedbackErro: "Escuta o fim: -TO.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual termina como BANANA?",
      opcoes: [
        { nome: "maçã", imagemUrl: maca, correta: false },
        { nome: "pipa", imagemUrl: pipa, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "Banan-A, pip-A. Fim -A!",
      feedbackErro: "Termina com -A. Pipa também.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 18",
      mascoteUrl: mascote,
      falaFinal: "Ouve começo E fim! Ninguém te pega!",
    },
  ],
};

const aula19: AulaEI = {
  slug: "dia-19-desafio-detetive",
  titulo: "Dia 19 · Desafio-mestre",
  icone: "🏆",
  bncc: ["EI03EF01", "EI03EF04", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Dia 19! Amanhã você ganha o Diploma de Leitor Iniciante. Hoje é o desafio final.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Rima com CASA?",
      opcoes: [
        { nome: "asa (borboleta)", imagemUrl: borboleta, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "CA-SA e A-SA! -ASA!",
      feedbackErro: "-ASA rima com -ASA.",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Bate palma em ES-TRE-LA.",
      palavra: "ES-TRE-LA",
      silabas: 3,
      imagemUrl: estrela,
      elogio: "Três!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Junta PI... PA:",
      opcoes: [
        { nome: "pipa", imagemUrl: pipa, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "gato", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: "PIPA!",
      feedbackErro: "PI + PA = PIPA.",
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Mesmo começo de BALÃO?",
      referencia: { nome: "balão", imagemUrl: balao },
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "pato", imagemUrl: pato, correta: false },
      ],
      feedbackAcerto: "Balão e bola começam com B!",
      feedbackErro: "Começo é B.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Tira o CA de CASA. Sobra:",
      opcoes: [
        { nome: "SA (sol)", imagemUrl: sol, correta: true },
        { nome: "pato", imagemUrl: pato, correta: false },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: "CA-SA menos CA = SA!",
      feedbackErro: "Tira o começo, sobra SA.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive dos Sons — Dia 19",
      mascoteUrl: mascote,
      falaFinal: "AMANHÃ é o grande dia!",
    },
  ],
};

const aula20: AulaEI = {
  slug: "dia-20-diploma",
  titulo: "Dia 20 · Diploma de Leitor Iniciante",
  icone: "🎓",
  bncc: ["EI03EF01", "EI03EF04", "EI03EF09"],
  duracaoMin: 20,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Chegou! Vinte dias! Hoje você recebe o Diploma de Leitor Iniciante. Vamos mostrar tudo que aprendeu.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Palma nas frases: 'O SOL BRILHA' tem quantas palavras?",
      opcoes: [
        { nome: "3 (sol)", imagemUrl: sol, correta: true },
        { nome: "2 (lua)", imagemUrl: lua, correta: false },
        { nome: "1 (bola)", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: "Três: O · SOL · BRILHA.",
      feedbackErro: "O · SOL · BRILHA. Três palavras.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Rima com CORUJA?",
      opcoes: [
        { nome: "beliscuja... vamos: coruja rima com -UJA. Qual figura?", imagemUrl: coruja, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: "Coruja rima com palavras terminadas em -UJA. Você pegou!",
      feedbackErro: "-UJA rima com -UJA.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Junta SO... L:",
      opcoes: [
        { nome: "SOL", imagemUrl: sol, correta: true },
        { nome: "LUA", imagemUrl: lua, correta: false },
        { nome: "GATO", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: "SOL! Você leu com o ouvido!",
      feedbackErro: "SO + L = SOL.",
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Mesmo som de FLOR no começo?",
      referencia: { nome: "flor", imagemUrl: flor },
      opcoes: [
        { nome: "borboleta (foca fim)", imagemUrl: borboleta, correta: false },
        { nome: "flor mesmo (repete)", imagemUrl: flor, correta: true },
        { nome: "gato", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: "Flor começa com F!",
      feedbackErro: "Flor começa com F.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "🎓 Diploma de Leitor Iniciante",
      convite:
        "Convide a família para uma pequena apresentação: bate palma em três palavras, invente uma rima, e diga o som do começo do seu nome. Você fez isso!",
      dicaAdulto:
        "Este é um marco enorme. Faça uma pequena cerimônia. Registre em foto. A criança está pronta para a Fase 2 (Ver as letras).",
    },
    {
      tipo: "celebracao",
      medalha: "🎓 LEITOR INICIANTE — Fase 1 completa!",
      mascoteUrl: mascote,
      falaFinal:
        "VOCÊ CONSEGUIU! Vinte dias, vinte missões. Agora você tem ouvido de leitor. Na Fase 2 a gente aprende as LETRAS. Nos vemos lá, campeão!",
    },
  ],
};

/* ============================================================
 * CURSO
 * ============================================================ */

export const cursoLerComAurora: CursoEI = {
  slug: "ler-com-aurora-fase-1",
  serie: "pre2",
  serieLabel: "Pré II + 1º Ano (5–7 anos)",
  titulo: "Ler com Aurora — Fase 1",
  descricao:
    "20 missões · 4 semanas · 15 min/dia. Consciência fonológica (a base científica da leitura).",
  corPrimaria: "#f59e0b",
  corSecundaria: "#7c3aed",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "semana-1",
      numero: 1,
      titulo: "Semana 1 · Escutar os sons",
      subtitulo: "Ouvido de Bronze",
      aulas: [aula01, aula02, aula03, aula04, aula05],
    },
    {
      slug: "semana-2",
      numero: 2,
      titulo: "Semana 2 · Rimas",
      subtitulo: "Ouvido de Prata",
      aulas: [aula06, aula07, aula08, aula09, aula10],
    },
    {
      slug: "semana-3",
      numero: 3,
      titulo: "Semana 3 · Sílabas",
      subtitulo: "Ouvido de Ouro",
      aulas: [aula11, aula12, aula13, aula14, aula15],
    },
    {
      slug: "semana-4",
      numero: 4,
      titulo: "Semana 4 · Sons das letras",
      subtitulo: "Leitor Iniciante",
      aulas: [aula16, aula17, aula18, aula19, aula20],
    },
  ],
};

export function getAulaLerComAurora(slug: string): AulaEI | undefined {
  for (const u of cursoLerComAurora.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
