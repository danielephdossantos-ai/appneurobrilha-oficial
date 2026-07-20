import type { CursoEI, AulaEI } from "./types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as dinossauro } from "@/assets/neuro-treino/objetos/dinossauro.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as pipa } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";

/**
 * Pré II (5-6 anos) — Unidade 1 · Aula 1
 * "As grandes palavras" — sílabas longas, consciência fonêmica, narrativa
 * com problema/solução, pré-alfabetização oral.
 * BNCC: EI03EF01 · EI03EF04 · EI03EF06 · EI03EF09
 */
const aula01: AulaEI = {
  slug: "aula-01-grandes-palavras",
  titulo: "As grandes palavras",
  icone: "🦕",
  bncc: ["EI03EF01", "EI03EF04", "EI03EF06", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Oi grandão! Você está pertinho de ir pro 1º ano. Hoje vamos brincar com palavras GIGANTES!",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: dinossauro,
      versos: [
        "Di-nos-sau-ro, di-nos-sau-ro, gigante do passado.",
        "Ru-gia forte na floresta, todo mundo assustado.",
        "Mas o pequeno dinossauro, gostava de dançar.",
        "Ba-tia o pé no ritmo, sem parar, sem parar!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio:
        "Toque em cada imagem para ouvir. Depois repita a palavra em voz alta separando os pedaços.",
      itens: [
        { nome: "dinossauro", imagemUrl: dinossauro },
        { nome: "girassol", imagemUrl: girassol },
        { nome: "biblioteca", imagemUrl: biblioteca },
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio:
        "Qual dessas palavras começa com o mesmo som de BIBLIOTECA?",
      referencia: { nome: "biblioteca", imagemUrl: biblioteca },
      opcoes: [
        { nome: "bola", imagemUrl: bola, correta: true },
        { nome: "girassol", imagemUrl: girassol, correta: false },
        { nome: "coruja", imagemUrl: coruja, correta: false },
      ],
      feedbackAcerto:
        "Perfeito! Biblioteca e bola começam com BÊ. Você já ouve os sons das palavras!",
      feedbackErro:
        "Escuta com atenção: Bi-bli-o-te-ca. O primeiro som é BÊ. Qual outra começa com BÊ?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Vamos separar em pedaços e bater palma:",
      palavra: "DI-NOS-SAU-RO",
      silabas: 4,
      imagemUrl: dinossauro,
      elogio: "Isso! Dinossauro tem QUATRO pedaços — quatro sílabas!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "A coruja da biblioteca",
      cenas: [
        {
          imagemUrl: bibliotecaria,
          narracao:
            "Dona Aurora era a bibliotecária mais antiga da cidade. Ela conhecia CADA livro.",
        },
        {
          imagemUrl: coruja,
          narracao:
            "Uma noite, uma coruja perdida entrou pela janela e ficou presa no salão dos livros!",
        },
        {
          imagemUrl: livro,
          narracao:
            "Aurora abriu um livro sobre corujas, leu em voz alta, e a coruja voou até o livro. Foi para casa!",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual era a profissão da Dona Aurora?",
      opcoes: [
        { nome: "bibliotecária", imagemUrl: bibliotecaria, correta: true },
        { nome: "coruja", imagemUrl: coruja, correta: false },
        { nome: "moça do mapa", imagemUrl: mapa, correta: false },
      ],
      feedbackAcerto: "Isso mesmo! Dona Aurora era BIBLIOTECÁRIA — ela cuidava dos livros!",
      feedbackErro:
        "Escuta a história de novo. Ela cuidava dos livros — qual é o nome dessa profissão?",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coruja,
      convite:
        "Agora você é a coruja! Fala 'uuh-uuh' bem baixinho e depois gira a cabeça olhando pros lados.",
      dica:
        "Imitação de animais estimula controle de voz, expressão facial e coordenação — pilares da oralidade.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: biblioteca,
      pergunta:
        "Qual é o livro que você MAIS gosta? Conta para o Brilha o que acontece nele!",
      exemplos: [
        "gosto do livro da Chapeuzinho",
        "gosto do meu livro dos dinossauros",
        "gosto do livro que a mamãe lê pra dormir",
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Peça pra alguém em casa ler UM livro inteiro pra você antes de dormir. Depois conte o que você mais gostou!",
      dicaAdulto:
        "Após a leitura, pergunte: 'O que aconteceu no começo? E no meio? E no final?' — trabalha estrutura narrativa oral, base da alfabetização.",
    },
    {
      tipo: "celebracao",
      medalha: "Guardião das Grandes Palavras",
      mascoteUrl: brilha,
      falaFinal:
        "Você é FERA! Já separa palavras em pedaços, escuta os sons e reconta histórias. Está pertinho do 1º ano!",
    },
  ],
};



/**
 * Pré II — Unidade 1 · Aula 2
 * "Palavras que rimam" — consciência fonológica: identificar rimas,
 * criar rimas simples, brincar com pares sonoros.
 * BNCC: EI03EF01 · EI03EF04 · EI03EF09
 */
const aula02: AulaEI = {
  slug: "aula-02-palavras-que-rimam",
  titulo: "Palavras que rimam",
  icone: "🎤",
  bncc: ["EI03EF01", "EI03EF04", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Alô, poeta! Hoje o Brilha vai te ensinar um truque MÁGICO: descobrir palavras que combinam no som. Chama-se RIMA!",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: gato,
      versos: [
        "O gato subiu no mato, o mato balançou.",
        "O rato saiu do buraco e do gato ele fugiu!",
        "Gato, mato, rato — todas terminam igual!",
        "Isso, meu amigo, chama-se RIMAR!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio:
        "Toca em cada palavra e escuta como o FINAL delas soa igualzinho.",
      itens: [
        { nome: "gato", imagemUrl: gato },
        { nome: "rato", imagemUrl: rato },
        { nome: "pipa", imagemUrl: pipa },
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual dessas palavras RIMA com GATO? Escuta o final: GA-TO.",
      referencia: { nome: "gato", imagemUrl: gato },
      opcoes: [
        { nome: "rato", imagemUrl: rato, correta: true },
        { nome: "pipa", imagemUrl: pipa, correta: false },
        { nome: "nuvem", imagemUrl: nuvem, correta: false },
      ],
      feedbackAcerto: "Isso! Gato e rato terminam com ATO — elas RIMAM!",
      feedbackErro:
        "Escuta o final: GA-TO. Qual outra termina com ATO? RA-TO!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Vamos separar em pedaços e bater palma:",
      palavra: "ES-TRE-LA",
      silabas: 3,
      imagemUrl: estrela,
      elogio: "Muito bem! Estrela tem TRÊS pedaços!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "O gato que sonhava com a lua",
      cenas: [
        {
          imagemUrl: gato,
          narracao:
            "Havia um gato preto chamado Zé. Toda noite Zé olhava a lua e sonhava com ela.",
        },
        {
          imagemUrl: pipa,
          narracao:
            "Um dia, Zé achou uma PIPA velha no quintal. Ele pensou: 'Se eu subir na pipa, chego na lua!'",
        },
        {
          imagemUrl: lua,
          narracao:
            "O vento levou a pipa bem alto. Zé não chegou na lua, mas viu o mundo inteiro lá de cima!",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Com o que o gato Zé sonhava toda noite?",
      opcoes: [
        { nome: "lua", imagemUrl: lua, correta: true },
        { nome: "rato", imagemUrl: rato, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: "Isso! Zé sonhava com a LUA todas as noites!",
      feedbackErro: "Escuta de novo: Zé olhava e sonhava com a LUA.",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: gato,
      convite:
        "Agora VOCÊ inventa uma rima! Fala uma palavra e depois outra que termine igual. Ex: PÃO e MÃO!",
      dica:
        "Improvisar rimas é o mais alto nível de consciência fonológica na Ed. Infantil — celebre qualquer tentativa.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: estrela,
      pergunta:
        "Se você fosse um gato como o Zé, o que você iria olhar no céu? Conta pro Brilha!",
      exemplos: [
        { nome: "a lua cheia", imagemUrl: lua },
        { nome: "as estrelas", imagemUrl: estrela },
        { nome: "as nuvens", imagemUrl: nuvem },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Brinca de rimar com um adulto! Ele fala uma palavra e você inventa outra que termina igual.",
      dicaAdulto:
        "Comece por pares fáceis (pão/mão, bola/cola, gato/rato). Depois deixe a criança tentar sozinha. Errar faz parte — o cérebro está processando o som final das palavras.",
    },
    {
      tipo: "celebracao",
      medalha: "Poeta Mirim",
      mascoteUrl: brilha,
      falaFinal:
        "Uhuuu! Você descobriu o segredo das palavras que combinam! Você é um POETA de verdade!",
    },
  ],
};

/**
 * Pré II — Aula 03 · "O som que começa" (EI03EF02)
 * Consciência fonêmica: isolar o PRIMEIRO SOM da palavra (fonema, não sílaba).
 */
const aula03: AulaEI = {
  slug: "aula-03-o-som-que-comeca",
  titulo: "O som que começa",
  icone: "🔊",
  bncc: ["EI03EF02", "EI03EF09"],
  duracaoMin: 13,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Hoje o Brilha vai te ensinar um SUPERPODER: escutar o primeiríssimo som de qualquer palavra!" },
    { tipo: "escutaRitmada", imagemUrl: coruja, versos: [
      "PPP de pipa, RRR de rato!",
      "SSS de sapo, GGG de gato!",
      "Cada palavra começa com um som — quem escuta com atenção acha em segundos!",
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada palavra e escuta o começo:", itens: [
      { nome: "pipa", imagemUrl: pipa },
      { nome: "rato", imagemUrl: rato },
      { nome: "sapo", imagemUrl: rato },
      { nome: "gato", imagemUrl: gato },
    ] },
    { tipo: "somInicial", instrucaoAudio: "Qual palavra começa com PPP (como PIPA)?", referencia: { nome: "pipa", imagemUrl: pipa }, opcoes: [
      { nome: "passarinho", imagemUrl: passaro, correta: true },
      { nome: "gato", imagemUrl: gato, correta: false },
      { nome: "lua", imagemUrl: lua, correta: false },
    ], feedbackAcerto: "Isso! PPP-ipa e PPP-assarinho!", feedbackErro: "Sopra: PPP! Pipa e Passarinho começam iguais." },
    { tipo: "somInicial", instrucaoAudio: "Qual começa com LLL (como LUA)?", referencia: { nome: "lua", imagemUrl: lua }, opcoes: [
      { nome: "livro", imagemUrl: livro, correta: true },
      { nome: "gato", imagemUrl: gato, correta: false },
      { nome: "rato", imagemUrl: rato, correta: false },
    ], feedbackAcerto: "Boa! LLL-ua, LLL-ivro!", feedbackErro: "O sopro é LLLLL." },
    { tipo: "somInicial", instrucaoAudio: "Qual começa com EEE (como ESTRELA)?", referencia: { nome: "estrela", imagemUrl: estrela }, opcoes: [
      { nome: "elefante (bicho)", imagemUrl: dinossauro, correta: true },
      { nome: "pipa", imagemUrl: pipa, correta: false },
      { nome: "nuvem", imagemUrl: nuvem, correta: false },
    ], feedbackAcerto: "Isso! EEE-strela, EEE-lefante!", feedbackErro: "O som é EEE." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "ES-TRE-LA", silabas: 3, imagemUrl: estrela, elogio: "Três palmas! Es-tre-la!" },
    { tipo: "historiaIlustrada", titulo: "A coruja que ouvia tudo", cenas: [
      { imagemUrl: coruja, narracao: "A coruja Otília tinha ouvidos MÁGICOS: ouvia o primeiro som de cada palavra do mundo." },
      { imagemUrl: lua, narracao: "'LLLLua', dizia ela. 'EEEstrela', 'NNNuvem'." },
      { imagemUrl: brilha, narracao: "Agora VOCÊ tem ouvidos mágicos também! Escuta o começo de tudo!" },
    ] },
    { tipo: "rodaConversa", imagemUrl: brilha, pergunta: "Fala pro Brilha: com qual SOM começa o seu nome?", exemplos: [
      { nome: "A de Ana", imagemUrl: arcoIris },
      { nome: "L de Lucas", imagemUrl: lua },
      { nome: "M de Maria", imagemUrl: gato },
      { nome: "P de Pedro", imagemUrl: pipa },
    ] },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Escolha 5 objetos da casa e ache o PRIMEIRO SOM de cada: mesa (MMM), sofá (SSS)...", dicaAdulto: "Isolar fonemas é O PREDITOR mais forte da leitura fluente. 5 min/dia = alfabetização com base sólida." },
    { tipo: "celebracao", medalha: "Ouvidos de Coruja", mascoteUrl: brilha, falaFinal: "Agora você escuta o COMEÇO de tudo! Superpoder desbloqueado!" },
  ],
};

/**
 * Pré II — Aula 04 · "O sarau das poesias" (EI03EF03)
 * Escuta e recitação de poemas curtos, sensibilidade estética.
 */
const aula04: AulaEI = {
  slug: "aula-04-sarau-poesias",
  titulo: "O sarau das poesias",
  icone: "🎤",
  bncc: ["EI03EF03", "EI03EF02"],
  duracaoMin: 13,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Bem-vindo ao SARAU! Sarau é uma festa de poesias. Vamos escutar e recitar juntos?" },
    { tipo: "escutaRitmada", imagemUrl: lua, versos: [
      "A lua é uma bola branca que passeia devagarinho.",
      "As estrelas piscam pra ela, brilhando lá do cantinho.",
      "E a nuvem chega macia, fazendo um lindo carinho.",
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada palavra do poema:", itens: [
      { nome: "lua", imagemUrl: lua },
      { nome: "estrela", imagemUrl: estrela },
      { nome: "nuvem", imagemUrl: nuvem },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "No poema, o que as estrelas fazem?", opcoes: [
      { nome: "piscam pra lua", imagemUrl: estrela, correta: true },
      { nome: "correm", imagemUrl: rato, correta: false },
      { nome: "cantam", imagemUrl: passaro, correta: false },
    ], feedbackAcerto: "Isso! Elas PISCAM pra lua!", feedbackErro: "As estrelas PISCAM lá do cantinho." },
    { tipo: "somInicial", instrucaoAudio: "LUA e NUVEM: qual começa com LLL?", referencia: { nome: "lua", imagemUrl: lua }, opcoes: [
      { nome: "lua", imagemUrl: lua, correta: true },
      { nome: "nuvem", imagemUrl: nuvem, correta: false },
    ], feedbackAcerto: "Isso! LLLua começa com L, NNNuvem com N.", feedbackErro: "L de Lua!" },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "ES-TRE-LI-NHA", silabas: 4, imagemUrl: estrela, elogio: "Quatro palminhas!" },
    { tipo: "historiaIlustrada", titulo: "A poeta da noite", cenas: [
      { imagemUrl: coruja, narracao: "A coruja Otília era também POETA. Toda noite recitava um poema pra lua." },
      { imagemUrl: lua, narracao: "A lua sorria: 'Que voz bonita, coruja!'" },
      { imagemUrl: estrela, narracao: "E as estrelas piscavam mais forte, aplaudindo a poesia." },
    ] },
    { tipo: "fazDeConta", imagemUrl: brilha, convite: "Sobe no palco imaginário e recita esse verso bem bonito: 'A lua é branca e brilha pra mim!'" },
    { tipo: "rodaConversa", imagemUrl: brilha, pergunta: "E você, que verso inventaria pra lua? Fala pro Brilha!", exemplos: [
      { nome: "'Lua, lua, te vejo!'", imagemUrl: lua },
      { nome: "'Estrela pisca, dorme comigo!'", imagemUrl: estrela },
      { nome: "'Nuvem branca, algodão do céu!'", imagemUrl: nuvem },
    ] },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Escolha UM verso de qualquer poema e recite pra família depois do jantar!", dicaAdulto: "Recitar em voz alta desenvolve prosódia, memória e amor pelo texto poético." },
    { tipo: "celebracao", medalha: "Voz do Sarau", mascoteUrl: brilha, falaFinal: "Sua voz encantou o Brilha! Você é POETA de verdade!" },
  ],
};

/**
 * Pré II — Aula 05 · "A grande viagem" (EI03EF05)
 * Relatar experiência com detalhes (quem, onde, quando, o que aconteceu).
 */
const aula05: AulaEI = {
  slug: "aula-05-grande-viagem",
  titulo: "A grande viagem",
  icone: "🗺️",
  bncc: ["EI03EF05", "EI03EF06"],
  duracaoMin: 13,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Todo mundo tem uma HISTÓRIA pra contar! Hoje você vai aprender a contar direitinho, com detalhes!" },
    { tipo: "escutaRitmada", imagemUrl: mapa, versos: [
      "Aonde eu fui? O que eu vi?",
      "Quem estava lá? O que aconteceu?",
      "Uma boa história tem tudo isso pra dizer!",
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada lugar de viagem:", itens: [
      { nome: "mapa", imagemUrl: mapa },
      { nome: "biblioteca", imagemUrl: biblioteca },
      { nome: "girassol (fazenda)", imagemUrl: girassol },
    ] },
    { tipo: "historiaIlustrada", titulo: "A viagem do Téo", cenas: [
      { imagemUrl: mapa, narracao: "QUANDO: no sábado de manhã. ONDE: numa fazenda com girassóis." },
      { imagemUrl: girassol, narracao: "QUEM: o Téo, o pai, o cachorro e a vovó. O QUE FEZ: colheu girassóis grandões!" },
      { imagemUrl: brilha, narracao: "COMO FOI: divertido! O cachorro pulou na lama, todo mundo riu muito!" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "Onde o Téo foi?", opcoes: [
      { nome: "numa fazenda de girassol", imagemUrl: girassol, correta: true },
      { nome: "na biblioteca", imagemUrl: biblioteca, correta: false },
      { nome: "num zoológico", imagemUrl: dinossauro, correta: false },
    ], feedbackAcerto: "Isso! Fazenda de GIRASSOL!", feedbackErro: "Foi na FAZENDA cheia de GIRASSÓIS!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Quem viajou com o Téo?", opcoes: [
      { nome: "pai, cachorro e vovó", imagemUrl: gato, correta: true },
      { nome: "só o pai", imagemUrl: rato, correta: false },
      { nome: "ninguém", imagemUrl: lua, correta: false },
    ], feedbackAcerto: "Isso! Pai, cachorro E vovó!", feedbackErro: "Foi TRÊS pessoas: pai, cachorro e vovó." },
    { tipo: "somInicial", instrucaoAudio: "GIRASSOL começa com... escuta bem:", referencia: { nome: "girassol", imagemUrl: girassol }, opcoes: [
      { nome: "gato", imagemUrl: gato, correta: true },
      { nome: "lua", imagemUrl: lua, correta: false },
      { nome: "pipa", imagemUrl: pipa, correta: false },
    ], feedbackAcerto: "Boa! GGG-irassol, GGG-ato!", feedbackErro: "O começo é GGG." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "GI-RAS-SOL", silabas: 3, imagemUrl: girassol, elogio: "Três palmas! Gi-ras-sol!" },
    { tipo: "rodaConversa", imagemUrl: brilha, pergunta: "AGORA VOCÊ! Conta uma viagem — QUEM foi, ONDE, QUANDO e O QUE aconteceu.", exemplos: [
      { nome: "praia com a família", imagemUrl: bola },
      { nome: "casa da vovó no domingo", imagemUrl: biblioteca },
      { nome: "sítio dos tios", imagemUrl: girassol },
      { nome: "parque de diversões", imagemUrl: pipa },
    ] },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Depois do banho, conta pra família sua viagem PREFERIDA com QUEM, ONDE, QUANDO e O QUE fez!", dicaAdulto: "A estrutura QUEM/ONDE/QUANDO/O QUE é a base da produção de texto no 1º ano." },
    { tipo: "celebracao", medalha: "Contador de Aventuras", mascoteUrl: brilha, falaFinal: "Sua história tinha TUDO! Você já sabe contar como escritor de verdade!" },
  ],
};

/**
 * Pré II — Aula 06 · "Inventando finais" (EI03EF06)
 * Criar história — hipótese, invenção coletiva, autoria oral.
 */
const aula06: AulaEI = {
  slug: "aula-06-inventando-finais",
  titulo: "Inventando finais",
  icone: "✨",
  bncc: ["EI03EF06", "EI03EF04"],
  duracaoMin: 13,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Você sabia que TODA história pode ter mil finais diferentes? Hoje o final é quem inventa é VOCÊ!" },
    { tipo: "escutaRitmada", imagemUrl: brilha, versos: [
      "Era uma vez, era assim, era assado...",
      "Mas o final ainda não foi contado!",
      "Fecha o olhinho, imagina no ar — que final você vai inventar?",
    ] },
    { tipo: "historiaIlustrada", titulo: "A pipa que voou pra longe", cenas: [
      { imagemUrl: pipa, narracao: "O Léo soltou uma pipa vermelha e amarela no morro." },
      { imagemUrl: nuvem, narracao: "De repente, veio um vento FORTE e levou a pipa pra CIMA das nuvens!" },
      { imagemUrl: brilha, narracao: "A pipa sumiu no céu... Você acha que ela CAIU no mar? Foi pra LUA? Ou uma coruja PEGOU?" },
    ] },
    { tipo: "rodaConversa", imagemUrl: brilha, pergunta: "Você é o autor: pra ONDE a pipa foi?", exemplos: [
      { nome: "caiu num barco", imagemUrl: bola },
      { nome: "chegou na lua", imagemUrl: lua },
      { nome: "virou casa da coruja", imagemUrl: coruja },
      { nome: "voltou pra casa do Léo", imagemUrl: pipa },
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca nos elementos da história:", itens: [
      { nome: "pipa", imagemUrl: pipa },
      { nome: "nuvem", imagemUrl: nuvem },
      { nome: "vento (folhas)", imagemUrl: girassol },
    ] },
    { tipo: "somInicial", instrucaoAudio: "PIPA começa com PPP. Qual outra começa igual?", referencia: { nome: "pipa", imagemUrl: pipa }, opcoes: [
      { nome: "passarinho", imagemUrl: passaro, correta: true },
      { nome: "lua", imagemUrl: lua, correta: false },
      { nome: "coruja", imagemUrl: coruja, correta: false },
    ], feedbackAcerto: "Boa! PPP-ipa, PPP-assarinho!", feedbackErro: "O sopro é PPP." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "NU-VEM", silabas: 2, imagemUrl: nuvem, elogio: "Duas palminhas!" },
    { tipo: "compreensaoImagem", perguntaAudio: "O que aconteceu ANTES da pipa sumir?", opcoes: [
      { nome: "veio um vento forte", imagemUrl: nuvem, correta: true },
      { nome: "choveu", imagemUrl: arcoIris, correta: false },
      { nome: "ficou de noite", imagemUrl: lua, correta: false },
    ], feedbackAcerto: "Isso! Um VENTO FORTE!", feedbackErro: "Foi o VENTO forte que levou a pipa!" },
    { tipo: "fazDeConta", imagemUrl: pipa, convite: "Faz de conta que você é a pipa voando lá em cima! Abre os braços e roda devagar!" },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Escolha uma história conhecida (Chapeuzinho, 3 Porquinhos) e INVENTE um final diferente pra família!", dicaAdulto: "Reautorar histórias trabalha coerência narrativa e criatividade — base da produção textual." },
    { tipo: "celebracao", medalha: "Autor do Meu Final", mascoteUrl: brilha, falaFinal: "Que final incrível você inventou! Você é escritor DE VERDADE!" },
  ],
};

/**
 * Pré II — Aula 07 · "Detetive do livro" (EI03EF07 · EI03EF08)
 * Explorar suporte, capa, título, contracapa, autoria.
 */
const aula07: AulaEI = {
  slug: "aula-07-detetive-do-livro",
  titulo: "Detetive do livro",
  icone: "🔍",
  bncc: ["EI03EF07", "EI03EF08"],
  duracaoMin: 13,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Hoje você vira DETETIVE! Vamos investigar um livro por fora antes de abrir — capa, título, quem escreveu!" },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada parte do livro:", itens: [
      { nome: "capa (frente)", imagemUrl: livro },
      { nome: "título (nome do livro)", imagemUrl: bibliotecaria },
      { nome: "autor (quem escreveu)", imagemUrl: coruja },
    ] },
    { tipo: "escutaRitmada", imagemUrl: biblioteca, versos: [
      "Capa da frente, título grandão!",
      "Autor escreveu com muita paixão!",
      "Contracapa atrás conta o que vai vir — leia primeiro, pra depois curtir!",
    ] },
    { tipo: "historiaIlustrada", titulo: "A biblioteca da dona Lu", cenas: [
      { imagemUrl: biblioteca, narracao: "Dona Lu era bibliotecária. Ela sabia TUDO sobre cada livro." },
      { imagemUrl: livro, narracao: "'Olhem a CAPA', dizia ela. 'O TÍTULO conta o assunto. O AUTOR é quem escreveu.'" },
      { imagemUrl: coruja, narracao: "'E a CONTRACAPA atrás dá uma dica do que vai acontecer!'" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "Onde fica escrito o NOME do livro?", opcoes: [
      { nome: "na capa (frente)", imagemUrl: livro, correta: true },
      { nome: "na página do meio", imagemUrl: bibliotecaria, correta: false },
      { nome: "na última página", imagemUrl: coruja, correta: false },
    ], feedbackAcerto: "Isso! Na CAPA, bem grande!", feedbackErro: "O nome fica na CAPA — na frente!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Quem é o AUTOR de um livro?", opcoes: [
      { nome: "quem escreveu", imagemUrl: coruja, correta: true },
      { nome: "quem vendeu", imagemUrl: bibliotecaria, correta: false },
      { nome: "quem leu", imagemUrl: brilha, correta: false },
    ], feedbackAcerto: "Sim! Quem ESCREVEU!", feedbackErro: "Autor é quem ESCREVEU o livro." },
    { tipo: "somInicial", instrucaoAudio: "LIVRO começa com LLL. Qual outra?", referencia: { nome: "livro", imagemUrl: livro }, opcoes: [
      { nome: "lua", imagemUrl: lua, correta: true },
      { nome: "gato", imagemUrl: gato, correta: false },
      { nome: "pipa", imagemUrl: pipa, correta: false },
    ], feedbackAcerto: "Boa! LLL-ivro, LLL-ua!", feedbackErro: "O som é LLLLL." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "LI-VRA-RI-A", silabas: 4, imagemUrl: biblioteca, elogio: "Quatro palminhas!" },
    { tipo: "fazDeConta", imagemUrl: bibliotecaria, convite: "Faz de conta que é bibliotecária e apresenta um livro imaginário: 'Este livro se chama...'!" },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Pega 3 livros de casa e descobre: qual o TÍTULO, quem é o AUTOR, e o que a CAPA mostra!", dicaAdulto: "Explorar paratextos (capa, título, autor) é competência leitora essencial no 1º ano." },
    { tipo: "celebracao", medalha: "Detetive da Biblioteca", mascoteUrl: brilha, falaFinal: "Você virou detetive de livros! Agora sabe olhar por fora antes de abrir!" },
  ],
};

/**
 * Pré II — Aula 08 · "Meu nome, minhas letras" (EI03EF09)
 * Escrita do nome próprio, reconhecimento de letras, hipótese silábica.
 */
const aula08: AulaEI = {
  slug: "aula-08-meu-nome-minhas-letras",
  titulo: "Meu nome, minhas letras",
  icone: "✍️",
  bncc: ["EI03EF09"],
  duracaoMin: 14,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Hoje o desafio é GRANDE: descobrir cada LETRA do seu nome. Cada letra tem um som!" },
    { tipo: "escutaRitmada", imagemUrl: brilha, versos: [
      "A, B, C, D — as letras vieram brincar!",
      "Meu nome tem umas — quero achar!",
      "Cada letra faz um som, vou aprender a colar!",
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada material de escrita:", itens: [
      { nome: "livro", imagemUrl: livro },
      { nome: "biblioteca", imagemUrl: biblioteca },
      { nome: "coruja sábia", imagemUrl: coruja },
    ] },
    { tipo: "historiaIlustrada", titulo: "As letras do nome", cenas: [
      { imagemUrl: coruja, narracao: "A coruja Otília explicou: 'Cada palavra é feita de LETRAS. E cada letra faz um SOM.'" },
      { imagemUrl: gato, narracao: "'GATO tem 4 letras: G-A-T-O. E começa com o som GGG.'" },
      { imagemUrl: brilha, narracao: "'Seu nome também é assim! Vamos descobrir as letras dele?'" },
    ] },
    { tipo: "somInicial", instrucaoAudio: "GATO começa com G. RATO começa com R. Qual começa com G?", referencia: { nome: "letra G", imagemUrl: gato }, opcoes: [
      { nome: "gato", imagemUrl: gato, correta: true },
      { nome: "rato", imagemUrl: rato, correta: false },
      { nome: "pipa", imagemUrl: pipa, correta: false },
    ], feedbackAcerto: "Isso! G de GATO!", feedbackErro: "G é o som do começo de GATO." },
    { tipo: "somInicial", instrucaoAudio: "Qual começa com M (som MMMMM)?", referencia: { nome: "letra M", imagemUrl: lua }, opcoes: [
      { nome: "mapa", imagemUrl: mapa, correta: true },
      { nome: "livro", imagemUrl: livro, correta: false },
      { nome: "coruja", imagemUrl: coruja, correta: false },
    ], feedbackAcerto: "Boa! MMM-apa!", feedbackErro: "MMM é o som de M." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma nas sílabas do seu nome de exemplo:", palavra: "MA-RI-A", silabas: 3, imagemUrl: brilha, elogio: "Três sílabas! Muitos nomes têm 3!" },
    { tipo: "rodaConversa", imagemUrl: brilha, pergunta: "Fala pro Brilha: quantas letras tem no seu nome? Conta com o adulto!", exemplos: [
      { nome: "3 letras (Ana)", imagemUrl: arcoIris },
      { nome: "4 letras (Levi)", imagemUrl: livro },
      { nome: "5 letras (Maria)", imagemUrl: coruja },
      { nome: "mais de 5 (Fernanda)", imagemUrl: girassol },
    ] },
    { tipo: "fazDeConta", imagemUrl: brilha, convite: "Escreve seu NOME no ar com o dedinho, bem devagar, letra por letra!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Cada palavra é feita de QUÊ?", opcoes: [
      { nome: "letras", imagemUrl: livro, correta: true },
      { nome: "cores", imagemUrl: arcoIris, correta: false },
      { nome: "bichos", imagemUrl: gato, correta: false },
    ], feedbackAcerto: "Isso! De LETRAS que fazem SONS!", feedbackErro: "Palavra é feita de LETRAS!" },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Faça uma placa com seu NOME e cole na porta do seu quarto! Cada letra é sua!", dicaAdulto: "Escrever o próprio nome é o marco final da Educação Infantil. Use letras móveis, giz, tinta — quanto mais concreto, melhor." },
    { tipo: "celebracao", medalha: "Escritor do Meu Nome", mascoteUrl: brilha, falaFinal: "Você já sabe as LETRAS do seu nome! Está pronto pra virar leitor!" },
  ],
};

/**
 * Pré II — Aula 09 · "Formatura das Palavras" (revisão)
 * Consolida rima, sílaba, fonema, narrativa, escrita do nome.
 */
const aula09: AulaEI = {
  slug: "aula-09-formatura-das-palavras",
  titulo: "Formatura das Palavras",
  icone: "🎓",
  bncc: ["EI03EF01", "EI03EF02", "EI03EF06", "EI03EF09"],
  duracaoMin: 15,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "HOJE É FORMATURA! Você aprendeu tantas palavras, sons e histórias no Pré II! Vamos comemorar!" },
    { tipo: "escutaRitmada", imagemUrl: arcoIris, versos: [
      "Sílaba, rima, letra e som!",
      "Nome, história, poema e refrão!",
      "Termino o Pré II com muita emoção — 1º ano, eu vou!",
    ] },
    { tipo: "somInicial", instrucaoAudio: "Rima com PIPA:", referencia: { nome: "pipa", imagemUrl: pipa }, opcoes: [
      { nome: "tripa (dança)", imagemUrl: rato, correta: true },
      { nome: "lua", imagemUrl: lua, correta: false },
      { nome: "gato", imagemUrl: gato, correta: false },
    ], feedbackAcerto: "PIPA / TRIPA — rimam!", feedbackErro: "Termina em IPA." },
    { tipo: "somInicial", instrucaoAudio: "Começa com o som de ESTRELA (EEE):", referencia: { nome: "estrela", imagemUrl: estrela }, opcoes: [
      { nome: "elefante", imagemUrl: dinossauro, correta: true },
      { nome: "pipa", imagemUrl: pipa, correta: false },
      { nome: "gato", imagemUrl: gato, correta: false },
    ], feedbackAcerto: "Boa! EEE!", feedbackErro: "O sopro é EEE." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra maior:", palavra: "BI-BLI-O-TE-CA", silabas: 5, imagemUrl: biblioteca, elogio: "CINCO palmas! Palavra grandona!" },
    { tipo: "historiaIlustrada", titulo: "A formatura da turminha", cenas: [
      { imagemUrl: bibliotecaria, narracao: "A professora chamou toda a turma: 'Hoje vocês se FORMAM no Pré II!'" },
      { imagemUrl: livro, narracao: "Cada aluno recebeu um LIVRO especial pra levar pra casa." },
      { imagemUrl: brilha, narracao: "E o Brilha disse: 'Vocês estão prontos pro 1º ANO! Vão aprender a LER de verdade!'" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "O que a turma vai aprender no 1º ano?", opcoes: [
      { nome: "ler de verdade", imagemUrl: livro, correta: true },
      { nome: "só brincar", imagemUrl: bola, correta: false },
      { nome: "dormir", imagemUrl: lua, correta: false },
    ], feedbackAcerto: "Sim! LER de verdade!", feedbackErro: "No 1º ano se aprende a LER!" },
    { tipo: "rodaConversa", imagemUrl: brilha, pergunta: "O que você mais gostou de aprender no Pré II?", exemplos: [
      { nome: "descobrir os sons", imagemUrl: coruja },
      { nome: "inventar finais", imagemUrl: pipa },
      { nome: "as letras do meu nome", imagemUrl: livro },
      { nome: "os poemas do sarau", imagemUrl: estrela },
    ] },
    { tipo: "fazDeConta", imagemUrl: brilha, convite: "Levanta e faz uma REVERÊNCIA de formatura, como se todo mundo estivesse aplaudindo!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Cada LETRA faz o quê?", opcoes: [
      { nome: "um som", imagemUrl: coruja, correta: true },
      { nome: "uma cor", imagemUrl: arcoIris, correta: false },
      { nome: "um número", imagemUrl: livro, correta: false },
    ], feedbackAcerto: "Isso! Cada letra tem SEU som!", feedbackErro: "Cada letra faz UM som!" },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Faça uma FESTA em casa: mostra pra todo mundo como escreve seu nome e recita um poeminha!", dicaAdulto: "Celebrar o encerramento da EI é vital — cria autoestima leitora para o desafio do 1º ano." },
    { tipo: "celebracao", medalha: "Diploma do Pré II", mascoteUrl: brilha, falaFinal: "PARABÉNS! Você conquistou o CÓDICE do Pré II! Bem-vindo ao mundo da leitura!" },
  ],
};

export const cursoPre2: CursoEI = {
  slug: "portugues-ei-pre2",
  serie: "pre2",
  serieLabel: "Pré II (5–6 anos)",
  titulo: "Códice das Grandes Palavras",
  descricao:
    "Preparação forte para a alfabetização: sons iniciais, sílabas, recontagem de histórias e vocabulário rico.",
  corPrimaria: "#60a5fa",
  corSecundaria: "#0c1e4a",
  mascoteUrl: brilha,
  unidades: [
    {
      slug: "unidade-1",
      numero: 1,
      titulo: "O Som das Palavras e o Ritmo do Corpo",
      subtitulo: "Palavras grandes, ideias grandes",
      aulas: [aula01, aula02, aula03],
    },
    {
      slug: "unidade-2",
      numero: 2,
      titulo: "Poemas, Viagens e Finais Inventados",
      subtitulo: "Escutar poemas, relatar, criar",
      aulas: [aula04, aula05, aula06],
    },
    {
      slug: "unidade-3",
      numero: 3,
      titulo: "Livros, Letras e a Grande Formatura",
      subtitulo: "Detetive de livros, meu nome, celebração",
      aulas: [aula07, aula08, aula09],
    },
  ],
};
