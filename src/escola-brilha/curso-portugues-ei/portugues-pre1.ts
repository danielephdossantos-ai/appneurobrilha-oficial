import type { CursoEI, AulaEI } from "./types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as galo } from "@/assets/neuro-treino/objetos/galo.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";
import { url as chocalho } from "@/assets/neuro-treino/objetos/chocalho.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as raposa } from "@/assets/neuro-treino/objetos/raposa.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";

/**
 * Pré I (4-5 anos) — Unidade 1 · Aula 1
 * "As palavras da natureza" — sílabas, sons iniciais, história com 3 cenas.
 * BNCC: EI03EF01 · EI03EF04 · EI03EF06
 */
const aula01: AulaEI = {
  slug: "aula-01-palavras-natureza",
  titulo: "As palavras da natureza",
  icone: "🦋",
  bncc: ["EI03EF01", "EI03EF04", "EI03EF06"],
  duracaoMin: 12,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Oi amiguinho! Hoje vamos descobrir os sons das palavras da natureza. Vem comigo!",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: borboleta,
      versos: [
        "Borboleta, pequenina, voa, voa lá no céu.",
        "Bate as asas, colorida, come pólen, come mel.",
        "Bo-bo-le-ta! Bo-bo-le-ta! Vem brincar de esconder!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio:
        "Toca em cada imagem para ouvir. Repita comigo cada palavra.",
      itens: [
        { nome: "borboleta", imagemUrl: borboleta },
        { nome: "flor", imagemUrl: flor },
        { nome: "chuva", imagemUrl: chuva },
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual dessas palavras começa com o mesmo som de CASA?",
      referencia: { nome: "casa", imagemUrl: casa },
      opcoes: [
        { nome: "coelho", imagemUrl: coelho, correta: true },
        { nome: "borboleta", imagemUrl: borboleta, correta: false },
        { nome: "flor", imagemUrl: flor, correta: false },
      ],
      feedbackAcerto: "Isso! Casa e coelho começam com o som CÊ!",
      feedbackErro: "Vamos escutar de novo: casa começa com CÊ. Qual começa com CÊ?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Bate palma no ritmo da palavra:",
      palavra: "BOR-BO-LE-TA",
      silabas: 4,
      imagemUrl: borboleta,
      elogio: "Uau! Borboleta tem QUATRO palmas!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "O coelho e o arco-íris",
      cenas: [
        {
          imagemUrl: coelho,
          narracao: "Era uma vez um coelho branco chamado Nino. Ele adorava pular no jardim.",
        },
        {
          imagemUrl: chuva,
          narracao:
            "Numa manhã, uma chuva fininha caiu. Nino se escondeu debaixo de uma folha grande.",
        },
        {
          imagemUrl: arcoIris,
          narracao:
            "Quando a chuva parou, apareceu um arco-íris com sete cores. Nino ficou boquiaberto!",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O que apareceu no céu depois da chuva?",
      opcoes: [
        { nome: "arco-íris", imagemUrl: arcoIris, correta: true },
        { nome: "borboleta", imagemUrl: borboleta, correta: false },
        { nome: "pássaro", imagemUrl: passaro, correta: false },
      ],
      feedbackAcerto: "Isso! Apareceu um lindo ARCO-ÍRIS de sete cores!",
      feedbackErro: "Escuta de novo: depois da chuva, o Nino viu um ARCO-ÍRIS!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: coelho,
      convite:
        "Agora você é o Nino! Pula como coelhinho três vezes bem alto: pula, pula, pula!",
      dica:
        "Contar 1-2-3 junto ajuda a criança a associar número, movimento e ritmo.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: arcoIris,
      pergunta: "Qual é a sua cor favorita do arco-íris? Fala pra gente!",
      exemplos: ["vermelho", "amarelo", "azul", "verde"],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Depois da próxima chuva, vá com um adulto até a janela procurar arco-íris ou pássaros!",
      dicaAdulto:
        "Nomeie em voz alta o que a criança apontar. Repetir palavras ligadas à experiência real fixa vocabulário.",
    },
    {
      tipo: "celebracao",
      medalha: "Amigo da Natureza",
      mascoteUrl: brilha,
      falaFinal:
        "Parabéns! Você ouviu histórias, bateu palma nas sílabas e conheceu a natureza!",
    },
  ],
};

/**
 * Pré I — Unidade 1 · Aula 2
 * "Os bichos falam" — sons dos animais, sílabas, discriminação auditiva.
 * BNCC: EI03EF01 · EI03EF04 · EI03EF06
 */
const aula02: AulaEI = {
  slug: "aula-02-bichos-falam",
  titulo: "Os bichos falam",
  icone: "🐸",
  bncc: ["EI03EF01", "EI03EF04", "EI03EF06"],
  duracaoMin: 12,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Amiguinho! Hoje o Brilha vai apresentar uma turma barulhenta: os BICHOS! Cada um fala do seu jeito.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: galo,
      versos: [
        "De manhã bem cedinho, o galo cantou.",
        "Có-có-ri-có! Có-có-ri-có! O sol acordou!",
        "O gato disse miau, o cachorro au-au.",
        "E o sapo lá no lago faz coax, coax!",
      ],
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada bichinho para ouvir o nome dele.",
      itens: [
        { nome: "sapo", imagemUrl: sapo },
        { nome: "galo", imagemUrl: galo },
        { nome: "abelha", imagemUrl: abelha },
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual dessas palavras começa com o mesmo som de GATO?",
      referencia: { nome: "gato", imagemUrl: gato },
      opcoes: [
        { nome: "galo", imagemUrl: galo, correta: true },
        { nome: "sapo", imagemUrl: sapo, correta: false },
        { nome: "borboleta", imagemUrl: borboleta, correta: false },
      ],
      feedbackAcerto: "Isso! Gato e galo começam com o som GÊ!",
      feedbackErro: "Escuta: gato começa com GÊ. Qual outra começa com o som GÊ?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Bate palma no ritmo desta palavra:",
      palavra: "CA-CHOR-RO",
      silabas: 3,
      imagemUrl: cachorro,
      elogio: "Boa! Cachorro tem TRÊS palmas!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "O sapo cantor",
      cenas: [
        {
          imagemUrl: sapo,
          narracao: "Era uma vez um sapo verde chamado Coa. Ele adorava cantar no lago à noite.",
        },
        {
          imagemUrl: abelha,
          narracao: "Uma abelha zumbindo passou e disse: 'Coa, seu canto é muito alto, não deixa a gente dormir!'",
        },
        {
          imagemUrl: passaro,
          narracao: "O pássaro sábio ensinou: 'Cada um tem sua hora de cantar!'. E Coa passou a cantar só à noite.",
        },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Quem reclamou do canto alto do sapo?",
      opcoes: [
        { nome: "abelha", imagemUrl: abelha, correta: true },
        { nome: "cachorro", imagemUrl: cachorro, correta: false },
        { nome: "gato", imagemUrl: gato, correta: false },
      ],
      feedbackAcerto: "Isso mesmo! A ABELHA reclamou porque queria dormir!",
      feedbackErro: "Escuta de novo: quem passou zumbindo foi a ABELHA!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: sapo,
      convite:
        "Agora você é o sapo Coa! Agacha bem baixinho e pula alto três vezes fazendo COAX, COAX!",
      dica: "Combinar som, movimento e contagem trabalha coordenação e ritmo.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: cachorro,
      pergunta: "Você tem um bichinho em casa ou conhece um? Como ele se chama?",
      exemplos: [
        { nome: "cachorro", imagemUrl: cachorro },
        { nome: "gato", imagemUrl: gato },
        { nome: "peixinho", imagemUrl: peixe },
        { nome: "passarinho", imagemUrl: passaro },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Peça pra um adulto imitar 3 bichos DIFERENTES pra você adivinhar. Depois é a sua vez de imitar!",
      dicaAdulto:
        "Alterne bichos comuns (cachorro, gato) com bichos menos óbvios (leão, abelha, sapo). Reforça vocabulário e discriminação auditiva.",
    },
    {
      tipo: "celebracao",
      medalha: "Fala dos Bichos",
      mascoteUrl: brilha,
      falaFinal:
        "Você imitou o sapo, reconheceu o canto do galo e escutou a abelha! Você entende a fala dos bichos!",
    },
  ],
};

/**
 * Pré I — Aula 03 · "As rimas do jardim" (EI03EF02)
 * Consciência fonológica: RIMA como categoria (Heggerty rhyme).
 */
const aula03: AulaEI = {
  slug: "aula-03-rimas-do-jardim",
  titulo: "As rimas do jardim",
  icone: "🌸",
  bncc: ["EI03EF02", "EI03EF08"],
  duracaoMin: 12,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Vem cá! Hoje a gente vai brincar de achar palavras que RIMAM. Rimar é quando termina igualzinho!" },
    { tipo: "escutaRitmada", imagemUrl: flor, versos: [
      "No jardim tem uma flor, cheirosa como o amor.",
      "Uma abelha voou, e no mel se esbaldou.",
      "Rima é assim, tim-tim, som igual chegando ao fim!",
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada bichinho do jardim:", itens: [
      { nome: "flor", imagemUrl: flor },
      { nome: "abelha", imagemUrl: abelha },
      { nome: "borboleta", imagemUrl: borboleta },
    ] },
    { tipo: "somInicial", instrucaoAudio: "Qual palavra RIMA com FLOR? Escuta o finalzinho: fllll-OR.", referencia: { nome: "flor", imagemUrl: flor }, opcoes: [
      { nome: "amor (coração)", imagemUrl: coelho, correta: true },
      { nome: "casa", imagemUrl: casa, correta: false },
      { nome: "sapo", imagemUrl: sapo, correta: false },
    ], feedbackAcerto: "Isso! FLOR e AMOR terminam em OR!", feedbackErro: "Escuta o final: fl-OR, am-OR. Iguais!" },
    { tipo: "somInicial", instrucaoAudio: "Agora: qual rima com GATO?", referencia: { nome: "gato", imagemUrl: gato }, opcoes: [
      { nome: "sapato (pé)", imagemUrl: sapo, correta: true },
      { nome: "flor", imagemUrl: flor, correta: false },
      { nome: "chuva", imagemUrl: chuva, correta: false },
    ], feedbackAcerto: "Boa! GA-TO / SAPA-TO — ambos terminam em ATO!", feedbackErro: "Escuta o final: ga-TO, sapa-TO." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "BOR-BO-LE-TA", silabas: 4, imagemUrl: borboleta, elogio: "Quatro palmas! Que palavra grande!" },
    { tipo: "historiaIlustrada", titulo: "A borboleta poeta", cenas: [
      { imagemUrl: borboleta, narracao: "A borboleta Lila era uma POETA — ela só falava rimando!" },
      { imagemUrl: flor, narracao: "Ela chegou na flor e disse: 'Bom dia, flor, cheia de cor!'" },
      { imagemUrl: abelha, narracao: "A abelha achou tão bonito que aprendeu também: 'Meu nome é Zizi, e trabalho aqui!'" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "O que a borboleta Lila fazia de especial?", opcoes: [
      { nome: "falar rimando", imagemUrl: borboleta, correta: true },
      { nome: "correr rápido", imagemUrl: cachorro, correta: false },
      { nome: "cantar alto", imagemUrl: galo, correta: false },
    ], feedbackAcerto: "Isso! Ela era POETA — falava rimando!", feedbackErro: "Ela falava RIMANDO, todas as palavras combinavam!" },
    { tipo: "rodaConversa", imagemUrl: brilha, pergunta: "Fala pro Brilha: seu nome rima com o quê? Pensa numa palavrinha que termine igual!", exemplos: [
      { nome: "Lila / vila", imagemUrl: borboleta },
      { nome: "Léo / véu", imagemUrl: passaro },
      { nome: "Ana / banana", imagemUrl: flor },
      { nome: "Bruno / uno", imagemUrl: cachorro },
    ] },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Brinca de rima no jantar: alguém fala uma palavra, você tenta rimar! Ex: PÃO → MÃO!", dicaAdulto: "Rima é o preditor mais forte de leitura futura. 5 min/dia = alfabetização mais fácil." },
    { tipo: "celebracao", medalha: "Poeta do Jardim", mascoteUrl: brilha, falaFinal: "Você achou rimas! Suas orelhinhas viraram poetas!" },
  ],
};

/**
 * Pré I — Aula 04 · "O poema da chuva" (EI03EF03)
 * Escuta atenta de poema. Prosódia + imagem mental.
 */
const aula04: AulaEI = {
  slug: "aula-04-poema-da-chuva",
  titulo: "O poema da chuva",
  icone: "🌧️",
  bncc: ["EI03EF03", "EI03EF02"],
  duracaoMin: 12,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Escuta! Está chovendo. Toda chuva é um poema caindo do céu!" },
    { tipo: "escutaRitmada", imagemUrl: chuva, versos: [
      "Chuva, chuvinha, chuvarada!",
      "Molha a rua, molha a estrada.",
      "Depois vem o sol e faz arco-íris na varanda!",
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada palavra do tempo:", itens: [
      { nome: "chuva", imagemUrl: chuva },
      { nome: "arco-íris", imagemUrl: arcoIris },
      { nome: "flor", imagemUrl: flor },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "No poema, o que aparece DEPOIS da chuva?", opcoes: [
      { nome: "arco-íris", imagemUrl: arcoIris, correta: true },
      { nome: "gato", imagemUrl: gato, correta: false },
      { nome: "sapo", imagemUrl: sapo, correta: false },
    ], feedbackAcerto: "Isso! Depois da chuva vem o SOL e o ARCO-ÍRIS!", feedbackErro: "Escuta o final: depois vem o SOL e o ARCO-ÍRIS." },
    { tipo: "somInicial", instrucaoAudio: "CHUVA começa com CH. Qual outra começa com CH?", referencia: { nome: "chuva", imagemUrl: chuva }, opcoes: [
      { nome: "chocalho", imagemUrl: chocalho, correta: true },
      { nome: "flor", imagemUrl: flor, correta: false },
      { nome: "gato", imagemUrl: gato, correta: false },
    ], feedbackAcerto: "Boa! Chuva e chocalho começam com CH!", feedbackErro: "O som do início é CH." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "CHU-VA", silabas: 2, imagemUrl: chuva, elogio: "Duas palminhas! Chu-va!" },
    { tipo: "historiaIlustrada", titulo: "A gota Pingo", cenas: [
      { imagemUrl: chuva, narracao: "A gotinha Pingo estava lá em cima na nuvem, com muitas amigas." },
      { imagemUrl: flor, narracao: "Ela caiu numa flor e disse: 'Vim molhar você pra crescer forte!'" },
      { imagemUrl: arcoIris, narracao: "Quando o sol chegou, Pingo se transformou em cores no arco-íris!" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "Em que Pingo se transformou no final?", opcoes: [
      { nome: "arco-íris", imagemUrl: arcoIris, correta: true },
      { nome: "árvore", imagemUrl: arvore, correta: false },
      { nome: "bichinho", imagemUrl: coelho, correta: false },
    ], feedbackAcerto: "Sim! Virou cor no arco-íris!", feedbackErro: "Pingo virou ARCO-ÍRIS!" },
    { tipo: "fazDeConta", imagemUrl: chuva, convite: "Faz de conta que é chuva! Estala os dedos ou bate os pezinhos rápido, rápido!" },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Peça pra um adulto ler UM poeminha antes de dormir. Escuta com os olhos fechados!", dicaAdulto: "Escuta de poema desenvolve consciência prosódica — base da leitura fluente." },
    { tipo: "celebracao", medalha: "Ouvidos de Chuva", mascoteUrl: brilha, falaFinal: "Você escutou cada gotinha do poema! Que atenção linda!" },
  ],
};

/**
 * Pré I — Aula 05 · "Meu passeio predileto" (EI03EF05)
 * Relatar experiência com sequência (ANTES / DURANTE / DEPOIS).
 */
const aula05: AulaEI = {
  slug: "aula-05-meu-passeio-predileto",
  titulo: "Meu passeio predileto",
  icone: "🚶",
  bncc: ["EI03EF05", "EI03EF01"],
  duracaoMin: 12,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Ei! Me conta um passeio LEGAL que você já fez. O Brilha quer ouvir tudinho!" },
    { tipo: "escutaRitmada", imagemUrl: arcoIris, versos: [
      "Ontem eu fui, ontem eu vi!",
      "Andei, brinquei, corri por aí!",
      "Vou contar direitinho tudo o que eu vivi!",
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada lugar de passeio:", itens: [
      { nome: "parque", imagemUrl: parque },
      { nome: "casa da vovó", imagemUrl: casa },
      { nome: "praia", imagemUrl: bola },
    ] },
    { tipo: "historiaIlustrada", titulo: "O passeio da Nina", cenas: [
      { imagemUrl: casa, narracao: "ANTES: Nina acordou e disse: 'Hoje vou pro parque com o papai!'" },
      { imagemUrl: passaro, narracao: "DURANTE: No parque, subiu no escorregador 5 vezes e viu passarinhos comendo!" },
      { imagemUrl: parque, narracao: "DEPOIS: Voltou pra casa cansada, mostrou uma flor que achou e comeu bolo!" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "O que a Nina fez no parque?", opcoes: [
      { nome: "escorregou muitas vezes", imagemUrl: passaro, correta: true },
      { nome: "dormiu", imagemUrl: chuva, correta: false },
      { nome: "brigou", imagemUrl: gato, correta: false },
    ], feedbackAcerto: "Isso! Escorregou 5 vezes!", feedbackErro: "Ela escorregou e viu passarinhos!" },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "PAR-QUE", silabas: 2, imagemUrl: flor, elogio: "Duas palmas! Par-que!" },
    { tipo: "rodaConversa", imagemUrl: brilha, pergunta: "Agora VOCÊ! Conta pro Brilha: aonde você foi passear e o que fez lá? Fala ANTES, DURANTE e DEPOIS!", exemplos: [
      { nome: "parque com papai", imagemUrl: flor },
      { nome: "vovó no domingo", imagemUrl: casa },
      { nome: "praia com a mamãe", imagemUrl: bola },
      { nome: "passeio na bicicleta", imagemUrl: passaro },
    ] },
    { tipo: "fazDeConta", imagemUrl: flor, convite: "Faz de conta que está no parque agora! Balança os braços como se estivesse no balanço!" },
    { tipo: "somInicial", instrucaoAudio: "PARQUE começa com P. Qual outra começa igual?", referencia: { nome: "parque", imagemUrl: parque }, opcoes: [
      { nome: "peixe", imagemUrl: peixe, correta: true },
      { nome: "casa", imagemUrl: casa, correta: false },
      { nome: "gato", imagemUrl: gato, correta: false },
    ], feedbackAcerto: "Boa! Parque e peixe começam com P!", feedbackErro: "Escuta o começo: parque e peixe começam com P." },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Na hora de dormir, conta pro adulto o passeio MAIS legal que já fez. Fala ANTES, DURANTE, DEPOIS!", dicaAdulto: "Estruturar narrativa (começo/meio/fim) é essencial para escrita futura." },
    { tipo: "celebracao", medalha: "Explorador do Dia", mascoteUrl: brilha, falaFinal: "Que passeio legal você contou! Sua boquinha já sabe fazer história!" },
  ],
};

/**
 * Pré I — Aula 06 · "O rei que perdeu a coroa" (EI03EF06)
 * Criar e recontar história. Manipulação de personagens.
 */
const aula06: AulaEI = {
  slug: "aula-06-rei-perdeu-coroa",
  titulo: "O rei que perdeu a coroa",
  icone: "👑",
  bncc: ["EI03EF06", "EI03EF04"],
  duracaoMin: 12,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "O Brilha ouviu uma HISTÓRIA meio maluca... e precisa que você ajude a terminar. Topa?" },
    { tipo: "escutaRitmada", imagemUrl: arcoIris, versos: [
      "Era uma vez, era uma vez, um rei que sumiu com a coroa!",
      "Cadê, cadê? Perdi de vez! Onde será que ela voa?",
      "Você quem vai me ajudar — vamos a coroa achar!",
    ] },
    { tipo: "historiaIlustrada", titulo: "O rei sem coroa", cenas: [
      { imagemUrl: coelho, narracao: "Era uma vez um rei muito distraído, chamado Rei Coco. Ele adorava sua coroa dourada." },
      { imagemUrl: flor, narracao: "Um dia, o rei foi ao jardim, tirou a coroa pra cheirar uma flor... e SUMIU!" },
      { imagemUrl: brilha, narracao: "Aí ele chorou: 'Cadê minha coroa?!' Você sabe onde pode estar?" },
    ] },
    { tipo: "rodaConversa", imagemUrl: coelho, pergunta: "Onde você acha que está a coroa do rei? Conta pro Brilha!", exemplos: [
      { nome: "num ninho de passarinho", imagemUrl: passaro },
      { nome: "escondida na árvore", imagemUrl: arvore },
      { nome: "levada por uma abelha", imagemUrl: abelha },
      { nome: "no fundo do lago", imagemUrl: peixe },
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca nos personagens que apareceram:", itens: [
      { nome: "rei (coelho)", imagemUrl: coelho },
      { nome: "flor", imagemUrl: flor },
      { nome: "passarinho", imagemUrl: passaro },
    ] },
    { tipo: "somInicial", instrucaoAudio: "REI começa com R. Qual outra começa igual?", referencia: { nome: "rei", imagemUrl: coelho }, opcoes: [
      { nome: "raposa", imagemUrl: raposa, correta: true },
      { nome: "flor", imagemUrl: flor, correta: false },
      { nome: "gato", imagemUrl: gato, correta: false },
    ], feedbackAcerto: "Boa! Rei e raposa começam com R!", feedbackErro: "Escuta o começo: rei e raposa começam com R." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "CO-RO-A", silabas: 3, imagemUrl: coelho, elogio: "Três palminhas! Co-ro-a!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Onde o rei tirou a coroa da cabeça?", opcoes: [
      { nome: "no jardim, pra cheirar uma flor", imagemUrl: flor, correta: true },
      { nome: "no banho", imagemUrl: chuva, correta: false },
      { nome: "no parque", imagemUrl: bola, correta: false },
    ], feedbackAcerto: "Isso! No JARDIM, cheirando a flor!", feedbackErro: "Foi no jardim, cheirando uma FLOR." },
    { tipo: "fazDeConta", imagemUrl: coelho, convite: "Faz de conta que você é o rei procurando! Olha embaixo da mesa, olha atrás da porta!" },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Conta a história do rei sem coroa pra alguém em casa — e INVENTA o final!", dicaAdulto: "Recontar história alimenta memória, imaginação e sintaxe. Aceite todo final inventado." },
    { tipo: "celebracao", medalha: "Salvador do Reino", mascoteUrl: brilha, falaFinal: "Você achou o final da história! O rei ficou feliz e você ficou GENIAL!" },
  ],
};

/**
 * Pré I — Aula 07 · "O livro é do tamanho do mundo" (EI03EF07 · EI03EF08)
 * Portadores de texto: livro, revista, receita, bilhete.
 */
const aula07: AulaEI = {
  slug: "aula-07-livro-tamanho-mundo",
  titulo: "O livro é do tamanho do mundo",
  icone: "📚",
  bncc: ["EI03EF07", "EI03EF08"],
  duracaoMin: 12,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Olha! O Brilha trouxe TIPOS diferentes de coisas escritas: livro, receita, bilhete... cada um serve pra uma coisa!" },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada suporte de leitura:", itens: [
      { nome: "livro de história", imagemUrl: coelho },
      { nome: "receita de bolo", imagemUrl: flor },
      { nome: "cartinha da vovó", imagemUrl: casa },
    ] },
    { tipo: "escutaRitmada", imagemUrl: arcoIris, versos: [
      "Livro tem história, receita tem bolo!",
      "Bilhete tem recado, cartaz tem apelo!",
      "Cada texto tem seu jeito — vamos ler no meu colo!",
    ] },
    { tipo: "historiaIlustrada", titulo: "A vovó escreveu", cenas: [
      { imagemUrl: casa, narracao: "A vovó Lia escreveu uma cartinha pra netinha: 'Venha almoçar domingo!'" },
      { imagemUrl: flor, narracao: "Depois abriu o LIVRO de receitas e leu: 'Bolo de fubá — 3 ovos, farinha...'" },
      { imagemUrl: coelho, narracao: "À noite, leu um LIVRO de história pro netinho dormir: 'Era uma vez um coelho...'" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "Onde a vovó leu como fazer o bolo?", opcoes: [
      { nome: "no livro de receitas", imagemUrl: flor, correta: true },
      { nome: "na história do coelho", imagemUrl: coelho, correta: false },
      { nome: "na cartinha", imagemUrl: casa, correta: false },
    ], feedbackAcerto: "Isso! No livro de RECEITAS!", feedbackErro: "Bolo se aprende no livro de RECEITAS!" },
    { tipo: "compreensaoImagem", perguntaAudio: "E o que a vovó leu pra o netinho dormir?", opcoes: [
      { nome: "livro de história", imagemUrl: coelho, correta: true },
      { nome: "receita", imagemUrl: flor, correta: false },
      { nome: "cartinha", imagemUrl: casa, correta: false },
    ], feedbackAcerto: "Isso! Livro de HISTÓRIA!", feedbackErro: "Pra dormir a vovó leu um livro de HISTÓRIA." },
    { tipo: "somInicial", instrucaoAudio: "LIVRO começa com L. Qual outra começa igual?", referencia: { nome: "livro", imagemUrl: livro }, opcoes: [
      { nome: "lua", imagemUrl: lua, correta: true },
      { nome: "sapo", imagemUrl: sapo, correta: false },
      { nome: "flor", imagemUrl: flor, correta: false },
    ], feedbackAcerto: "Boa! Livro e lua começam com L!", feedbackErro: "O som do começo é L." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "LI-VRO", silabas: 2, imagemUrl: coelho, elogio: "Duas palmas! Li-vro!" },
    { tipo: "fazDeConta", imagemUrl: casa, convite: "Faz de conta que está lendo uma cartinha da vovó! Aponta com o dedinho e finge que lê!" },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Ache em casa 3 coisas escritas DIFERENTES: um livro, uma embalagem e um cartaz!", dicaAdulto: "Cultura escrita se aprende percebendo textos no ambiente (rótulos, placas, bilhetes)." },
    { tipo: "celebracao", medalha: "Caçador de Textos", mascoteUrl: brilha, falaFinal: "Você já sabe que existem MUITOS tipos de coisa escrita! O mundo é cheio de texto!" },
  ],
};

/**
 * Pré I — Aula 08 · "Meu nome, meu risco" (EI03EF09)
 * Pré-escrita: reconhecer o nome como palavra especial + traços.
 */
const aula08: AulaEI = {
  slug: "aula-08-meu-nome-meu-risco",
  titulo: "Meu nome, meu risco",
  icone: "🖍️",
  bncc: ["EI03EF09", "EI03EF01"],
  duracaoMin: 12,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Sabia que seu NOME é uma palavra ESPECIAL? Ninguém escreve igual ao seu! Vamos brincar de risco?" },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca no que serve pra escrever:", itens: [
      { nome: "lápis", imagemUrl: lapis },
      { nome: "papel", imagemUrl: papel },
      { nome: "tinta", imagemUrl: arcoIris },
    ] },
    { tipo: "escutaRitmada", imagemUrl: brilha, versos: [
      "Meu nome, meu nome, sou eu que sei!",
      "Rabisco, rabisco, do jeitinho que quero fazer.",
      "Cada letra é minha — vamos aprender!",
    ] },
    { tipo: "historiaIlustrada", titulo: "O rabisco da Mia", cenas: [
      { imagemUrl: lapis, narracao: "A Mia pegou um giz e riscou um sol grandão." },
      { imagemUrl: papel, narracao: "Depois riscou uma casa com telhado pontudo." },
      { imagemUrl: brilha, narracao: "Por último, tentou escrever o próprio nome: M-I-A. Ficou torto, mas era o NOME dela!" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "O que a Mia tentou escrever no final?", opcoes: [
      { nome: "o próprio nome", imagemUrl: brilha, correta: true },
      { nome: "uma flor", imagemUrl: flor, correta: false },
      { nome: "um bicho", imagemUrl: coelho, correta: false },
    ], feedbackAcerto: "Isso! O NOME dela!", feedbackErro: "Foi o NOME dela: M-I-A!" },
    { tipo: "somInicial", instrucaoAudio: "MIA começa com M. Qual outra começa com M?", referencia: { nome: "mia (miau)", imagemUrl: gato }, opcoes: [
      { nome: "mel (abelha)", imagemUrl: abelha, correta: true },
      { nome: "flor", imagemUrl: flor, correta: false },
      { nome: "sapo", imagemUrl: sapo, correta: false },
    ], feedbackAcerto: "Boa! Mia e mel começam com M!", feedbackErro: "O começo é M." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "PA-PEL", silabas: 2, imagemUrl: papel, elogio: "Duas palminhas! Pa-pel!" },
    { tipo: "fazDeConta", imagemUrl: brilha, convite: "Levanta o dedinho e escreve seu NOME no ar! Bem grande!" },
    { tipo: "rodaConversa", imagemUrl: brilha, pergunta: "Como começa o seu nome? Qual é a primeira letra? Fala pro Brilha!", exemplos: [
      { nome: "com A", imagemUrl: arcoIris },
      { nome: "com M", imagemUrl: gato },
      { nome: "com L", imagemUrl: coelho },
      { nome: "com P", imagemUrl: peixe },
    ] },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Peça pra um adulto escrever seu NOME num papel bem grande. Depois tenta copiar do seu jeito!", dicaAdulto: "Reconhecer o próprio nome é o PRIMEIRO passo do letramento formal. Faça caber em rótulos, sapatos, canecas." },
    { tipo: "celebracao", medalha: "Dono do Meu Nome", mascoteUrl: brilha, falaFinal: "Seu nome é UNICO no mundo! E você já sabe onde ele começa!" },
  ],
};

/**
 * Pré I — Aula 09 · "Festival do Pré I" (revisão)
 * Integra rima, sílaba, som inicial, narração, leitura.
 */
const aula09: AulaEI = {
  slug: "aula-09-festival-do-pre1",
  titulo: "Festival do Pré I",
  icone: "🎪",
  bncc: ["EI03EF01", "EI03EF02", "EI03EF06", "EI03EF08"],
  duracaoMin: 14,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "É FESTIVAL! Todas as palavras que aprendemos vieram brincar juntas! Bora?" },
    { tipo: "escutaRitmada", imagemUrl: arcoIris, versos: [
      "Flor, chuva, arco-íris no ar!",
      "Rei, coroa, coelho a passear!",
      "Meu nome grita: quero brilhar!",
    ] },
    { tipo: "somInicial", instrucaoAudio: "Rima com FLOR:", referencia: { nome: "flor", imagemUrl: flor }, opcoes: [
      { nome: "amor (coração)", imagemUrl: coelho, correta: true },
      { nome: "gato", imagemUrl: gato, correta: false },
      { nome: "chuva", imagemUrl: chuva, correta: false },
    ], feedbackAcerto: "FLOR / AMOR!", feedbackErro: "Termina em OR." },
    { tipo: "somInicial", instrucaoAudio: "Começa com o mesmo som de SAPO:", referencia: { nome: "sapo", imagemUrl: sapo }, opcoes: [
      { nome: "sol (peixe)", imagemUrl: peixe, correta: false },
      { nome: "sapato (calçado)", imagemUrl: coelho, correta: true },
      { nome: "flor", imagemUrl: flor, correta: false },
    ], feedbackAcerto: "Boa! Sapo e sapato começam com S!", feedbackErro: "O começo é S." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra maior:", palavra: "AR-CO-Í-RIS", silabas: 4, imagemUrl: arcoIris, elogio: "QUATRO palmas! Arco-íris é grandão!" },
    { tipo: "historiaIlustrada", titulo: "A festa que reuniu todo mundo", cenas: [
      { imagemUrl: coelho, narracao: "O coelho rei chamou todos os bichos: 'Vamos fazer uma FESTA!'" },
      { imagemUrl: borboleta, narracao: "A borboleta poeta rimou, a abelha cantou, o sapo pulou." },
      { imagemUrl: arcoIris, narracao: "E no céu apareceu um arco-íris ENORME celebrando com eles!" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "Quem chamou os bichos pra festa?", opcoes: [
      { nome: "coelho rei", imagemUrl: coelho, correta: true },
      { nome: "gato", imagemUrl: gato, correta: false },
      { nome: "abelha", imagemUrl: abelha, correta: false },
    ], feedbackAcerto: "Isso! O COELHO REI!", feedbackErro: "Foi o COELHO — que era o rei!" },
    { tipo: "rodaConversa", imagemUrl: brilha, pergunta: "Fala pro Brilha: qual foi a palavra MAIS legal que você aprendeu no Pré I?", exemplos: [
      { nome: "borboleta", imagemUrl: borboleta },
      { nome: "arco-íris", imagemUrl: arcoIris },
      { nome: "coroa", imagemUrl: coelho },
      { nome: "chuva", imagemUrl: chuva },
    ] },
    { tipo: "fazDeConta", imagemUrl: brilha, convite: "Faz de conta que subiu num palco e apresenta a palavra que mais gosta bem alto!" },
    { tipo: "compreensaoImagem", perguntaAudio: "O que apareceu no céu no final da festa?", opcoes: [
      { nome: "arco-íris", imagemUrl: arcoIris, correta: true },
      { nome: "chuva", imagemUrl: chuva, correta: false },
      { nome: "sol", imagemUrl: arvore, correta: false },
    ], feedbackAcerto: "Sim! ARCO-ÍRIS lindo!", feedbackErro: "Foi um arco-íris ENORME!" },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Ensina UMA palavra nova pra alguém em casa e bata palma nas sílabas juntos!", dicaAdulto: "Ensinar é o melhor jeito de fixar. Deixe a criança ser a professora por 5 min." },
    { tipo: "celebracao", medalha: "Estrela do Pré I", mascoteUrl: brilha, falaFinal: "VOCÊ TERMINOU o Pré I! Que jornada linda de palavras, ritmo e histórias!" },
  ],
};

void bola; void arvore;

export const cursoPre1: CursoEI = {
  slug: "portugues-ei-pre1",
  serie: "pre1",
  serieLabel: "Pré I (4–5 anos)",
  titulo: "Códice das Palavras da Natureza",
  descricao:
    "A criança começa a perceber que as palavras têm PEDAÇOS (sílabas) e SONS. Histórias curtas, ritmo e imitação.",
  corPrimaria: "#a78bfa",
  corSecundaria: "#3b0764",
  mascoteUrl: brilha,
  unidades: [
    {
      slug: "unidade-1",
      numero: 1,
      titulo: "O Som das Palavras e o Ritmo do Corpo",
      subtitulo: "Escutar, imitar, imaginar",
      aulas: [aula01, aula02, aula03],
    },
    {
      slug: "unidade-2",
      numero: 2,
      titulo: "Poemas, Passeios e Reinos Inventados",
      subtitulo: "Escutar poemas, relatar, criar",
      aulas: [aula04, aula05, aula06],
    },
    {
      slug: "unidade-3",
      numero: 3,
      titulo: "Textos, Nomes e o Grande Festival",
      subtitulo: "Livros, meu nome, minhas conquistas",
      aulas: [aula07, aula08, aula09],
    },
  ],
};
