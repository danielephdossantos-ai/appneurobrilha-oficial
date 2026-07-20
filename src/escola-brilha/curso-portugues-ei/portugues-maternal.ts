import type { CursoEI, AulaEI } from "./types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as bebe } from "@/assets/neuro-treino/objetos/bebe.png.asset.json";
import { url as mae } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as pai } from "@/assets/neuro-treino/objetos/pai.png.asset.json";
import { url as vovo } from "@/assets/neuro-treino/objetos/avo-mulher.png.asset.json";
import { url as ursinho } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as galinha } from "@/assets/neuro-treino/objetos/galinha.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as banho } from "@/assets/neuro-treino/objetos/banho.png.asset.json";
import { url as sopa } from "@/assets/neuro-treino/objetos/sopa.png.asset.json";
import { url as parque } from "@/assets/neuro-treino/objetos/parque.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as tinta } from "@/assets/neuro-treino/objetos/tinta.png.asset.json";
import { url as desenho } from "@/assets/neuro-treino/objetos/desenho.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as familia } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";

/**
 * Maternal (3–4 anos) — Códice do Som e do Ritmo
 *
 * Intervenções comprovadas de alfabetização emergente:
 *  • Consciência fonológica em espiral (Heggerty / Adams / PNA 2019)
 *  • Vocabulário rico + narrativa dialogada (Dialogic Reading, Whitehurst)
 *  • Rimas, aliterações e segmentação silábica com apoio corporal
 *  • Pré-escrita: traço, garatuja significativa (Vygotsky, Ferreiro)
 */

const aula01: AulaEI = {
  slug: "aula-01-som-da-voz",
  titulo: "O som da minha voz",
  icone: "🎵",
  bncc: ["EI02EF01", "EI02EF02", "EI02EF04"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote:
        "Oi! Eu sou o Brilha, o esquilinho contador de histórias! Vamos brincar com sons e palavras hoje?",
      legenda: "Sente-se com a criança e toque no botão para ouvir.",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: bebe,
      versos: [
        "Bebê, bebê, sorriu pra mim.",
        "Bebê, bebê, faz assim.",
        "Bate palma, bate palma, bate palma sem parar.",
      ],
      legenda: "Cantar batendo palma junto com a criança.",
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada imagem para escutar o nome dela.",
      itens: [
        { nome: "bola", imagemUrl: bola },
        { nome: "sol", imagemUrl: sol },
        { nome: "mãe", imagemUrl: mae },
      ],
    },
    {
      tipo: "somInicial",
      instrucaoAudio: "Qual dessas começa com o mesmo som de BOLA?",
      referencia: { nome: "bola", imagemUrl: bola },
      opcoes: [
        { nome: "bebê", imagemUrl: bebe, correta: true },
        { nome: "sol", imagemUrl: sol, correta: false },
        { nome: "mãe", imagemUrl: mae, correta: false },
      ],
      feedbackAcerto: "Isso! Bola e bebê começam com o som BÊ!",
      feedbackErro: "Escuta de novo: BOOO-la. Qual outra começa com BÊ?",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Vamos bater palma no ritmo da palavra:",
      palavra: "BO-LA",
      silabas: 2,
      imagemUrl: bola,
      elogio: "Muito bem! Bola tem duas palmas!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "A bola do cachorrinho",
      cenas: [
        { imagemUrl: cachorro, narracao: "Era uma vez um cachorrinho chamado Toby. Toby amava correr!" },
        { imagemUrl: bola, narracao: "Um dia, Toby achou uma bola vermelha no quintal e latiu de alegria." },
        { imagemUrl: abraco, narracao: "A dona veio brincar com ele. Toby ganhou um abraço bem apertado!" },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Quem era o dono da bola na história?",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro, correta: true },
        { nome: "bebê", imagemUrl: bebe, correta: false },
        { nome: "mãe", imagemUrl: mae, correta: false },
      ],
      feedbackAcerto: "Isso mesmo! Era o cachorrinho Toby!",
      feedbackErro: "Vamos escutar a história de novo? Era um cachorrinho chamado Toby!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: cachorro,
      convite: "Agora imita o cachorrinho! Faz au au bem baixinho, e depois bem alto!",
      dica: "Alterne volumes para trabalhar controle da voz.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: abraco,
      pergunta: "Quem você abraça todo dia? Fala o nome pro Brilha!",
      exemplos: [
        { nome: "mamãe", imagemUrl: mae },
        { nome: "papai", imagemUrl: pai },
        { nome: "vovó", imagemUrl: vovo },
        { nome: "meu ursinho", imagemUrl: ursinho },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite: "Peça pra alguém em casa cantar uma cantiga que você adora e bata palma junto!",
      dicaAdulto: "Escolha uma parlenda curta. Cantar juntos fortalece vínculo e ritmo.",
    },
    {
      tipo: "celebracao",
      medalha: "Primeira Palma",
      mascoteUrl: brilha,
      falaFinal: "Uhuu! Você bateu palma, cantou e conversou com o Brilha! Que aula linda!",
    },
  ],
};

const aula02: AulaEI = {
  slug: "aula-02-casa-gostosa",
  titulo: "A casa é gostosa",
  icone: "🏠",
  bncc: ["EI02EF01", "EI02EF04", "EI02EF07"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Oi de novo! Hoje o Brilha vai visitar a SUA casa. Vamos brincar com os nomes das coisas de casa?" },
    { tipo: "escutaRitmada", imagemUrl: casa, versos: [
      "Minha casa, casa linda, tem mamãe, tem papai.",
      "Tem cachorro, tem gatinho, tem lugar pra descansar.",
      "Bate palma, bate palma, é bom demais chegar em casa.",
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada figura para ouvir o nome. Repita comigo!", itens: [
      { nome: "casa", imagemUrl: casa },
      { nome: "gato", imagemUrl: gato },
      { nome: "papai", imagemUrl: pai },
    ] },
    { tipo: "somInicial", instrucaoAudio: "Qual dessas palavras começa com o mesmo som de CASA?", referencia: { nome: "casa", imagemUrl: casa }, opcoes: [
      { nome: "cachorro", imagemUrl: cachorro, correta: true },
      { nome: "sol", imagemUrl: sol, correta: false },
      { nome: "mamãe", imagemUrl: mae, correta: false },
    ], feedbackAcerto: "Isso! Casa e cachorro começam com o som CÊ!", feedbackErro: "Escuta de novo: CAAA-sa. Qual outra começa com o som CÊ?" },
    { tipo: "ritmoCorpo", instrucaoAudio: "Vamos bater palma no ritmo:", palavra: "CA-SA", silabas: 2, imagemUrl: casa, elogio: "Boa! Casa tem duas palmas!" },
    { tipo: "historiaIlustrada", titulo: "O gatinho da lua", cenas: [
      { imagemUrl: gato, narracao: "Era uma vez um gatinho branco chamado Miau. Ele morava em uma casa aconchegante." },
      { imagemUrl: lua, narracao: "Toda noite, Miau subia no telhado pra olhar a lua cheia brilhando." },
      { imagemUrl: abraco, narracao: "A dona chamava: 'Miau, vem dormir!'. E ele corria pro colo pra ganhar um abraço." },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "O que o gatinho Miau ficava olhando no telhado?", opcoes: [
      { nome: "lua", imagemUrl: lua, correta: true },
      { nome: "bola", imagemUrl: bola, correta: false },
      { nome: "casa", imagemUrl: casa, correta: false },
    ], feedbackAcerto: "Isso! Miau adorava olhar a lua brilhar!", feedbackErro: "Escuta de novo: ele ficava olhando a lua no céu!" },
    { tipo: "fazDeConta", imagemUrl: gato, convite: "Faz de conta que você é o Miau! Faz miau baixinho, e depois se espreguiça bem devagar." },
    { tipo: "rodaConversa", imagemUrl: casa, pergunta: "Qual o seu lugar favorito lá na sua casa? Conta pro Brilha!", exemplos: [
      { nome: "meu quartinho", imagemUrl: abraco },
      { nome: "cozinha", imagemUrl: casa },
      { nome: "cama do papai e da mamãe", imagemUrl: pai },
      { nome: "quintal", imagemUrl: sol },
    ] },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Pega um adulto pela mão e passeia pela casa apontando: 'É a cadeira!', 'É a mesa!', 'É a cama!'", dicaAdulto: "Nomear objetos do dia a dia fixa vocabulário mais que flashcard." },
    { tipo: "celebracao", medalha: "Amigo da Casa", mascoteUrl: brilha, falaFinal: "Uhuu! Você conhece os nomes de casa, imitou o gatinho e conversou com o Brilha!" },
  ],
};

/**
 * Aula 03 — "Bichos que rimam"
 * BNCC: EI02EF02 (rimas e aliterações) — Consciência fonológica: RIMA.
 * Intervenção Heggerty: identificar par que rima.
 */
const aula03: AulaEI = {
  slug: "aula-03-bichos-que-rimam",
  titulo: "Bichos que rimam",
  icone: "🐸",
  bncc: ["EI02EF02", "EI02EF08"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Oi! Hoje o Brilha trouxe um monte de bichinhos. E olha: os nomes deles combinam! Vamos ouvir?" },
    { tipo: "escutaRitmada", imagemUrl: sapo, versos: [
      "O sapo saltou no lago, o pato mergulhou.",
      "O rato correu no mato, o gato miou.",
      "Palma, palma, palma — quem rimou?",
    ], legenda: "Fale devagar, alongando o final de cada palavra que rima." },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada bichinho e escuta o nome dele.", itens: [
      { nome: "sapo", imagemUrl: sapo },
      { nome: "pato", imagemUrl: pato },
      { nome: "rato", imagemUrl: rato },
    ] },
    { tipo: "somInicial", instrucaoAudio: "Qual palavra RIMA com PATO? Escuta: paaa-TO... quem termina igual?", referencia: { nome: "pato", imagemUrl: pato }, opcoes: [
      { nome: "rato", imagemUrl: rato, correta: true },
      { nome: "sol", imagemUrl: sol, correta: false },
      { nome: "casa", imagemUrl: casa, correta: false },
    ], feedbackAcerto: "Isso! PA-TO e RA-TO terminam igualzinho: TO!", feedbackErro: "Escuta o finalzinho: pa-TO, ra-TO. Terminam iguais!" },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma no nome do sapinho:", palavra: "SA-PO", silabas: 2, imagemUrl: sapo, elogio: "Duas palmas! Sa-po!" },
    { tipo: "historiaIlustrada", titulo: "O sapo que queria voar", cenas: [
      { imagemUrl: sapo, narracao: "Era uma vez um sapo chamado Coa. Ele morava num lago cheio de plantas." },
      { imagemUrl: passaro, narracao: "Coa via os passarinhos voando e pensava: 'Ah, quem me dera voar como eles!'" },
      { imagemUrl: borboleta, narracao: "Uma borboleta amiga sussurrou: 'Você já pula alto, Coa. Cada bicho tem seu jeito de voar do seu jeito!'" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "Quem consolou o sapinho Coa na história?", opcoes: [
      { nome: "borboleta", imagemUrl: borboleta, correta: true },
      { nome: "rato", imagemUrl: rato, correta: false },
      { nome: "gato", imagemUrl: gato, correta: false },
    ], feedbackAcerto: "Isso! Foi a borboleta amiga!", feedbackErro: "Foi a borboleta que veio conversar com ele." },
    { tipo: "fazDeConta", imagemUrl: sapo, convite: "Salta como o sapo Coa! Um, dois, três saltos bem altos!", dica: "Corpo em movimento ajuda a memorizar sons." },
    { tipo: "rodaConversa", imagemUrl: passaro, pergunta: "Qual bichinho você mais gosta? Fala o nome dele bem devagar pro Brilha!", exemplos: [
      { nome: "gato", imagemUrl: gato },
      { nome: "cachorro", imagemUrl: cachorro },
      { nome: "passarinho", imagemUrl: passaro },
      { nome: "coelho", imagemUrl: coelho },
    ] },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Ache em casa 2 palavras que rimam! Ex: mão / pão, colher / mulher.", dicaAdulto: "Rima é o primeiro passo da consciência fonológica. Brinquem no banho, no carro, na hora de dormir." },
    { tipo: "celebracao", medalha: "Detetive das Rimas", mascoteUrl: brilha, falaFinal: "Você achou as rimas! Sapo, pato, rato — que orelhinhas espertas!" },
  ],
};

/**
 * Aula 04 — "O poema do Sol"
 * BNCC: EI02EF03 (escuta de poemas). Prosódia + escuta ativa.
 */
const aula04: AulaEI = {
  slug: "aula-04-poema-do-sol",
  titulo: "O poema do Sol",
  icone: "☀️",
  bncc: ["EI02EF03", "EI02EF08"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Bom dia! Hoje o Brilha trouxe um poema quentinho como o sol. Fecha os olhinhos e escuta!" },
    { tipo: "escutaRitmada", imagemUrl: sol, versos: [
      "Sol, sol, moedinha de ouro no céu.",
      "Sol, sol, aquece o mundo, aquece eu.",
      "Bom dia, sol! Bom dia, dia!",
    ], legenda: "Leia com voz suave, quase cantando." },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada figura do céu:", itens: [
      { nome: "sol", imagemUrl: sol },
      { nome: "lua", imagemUrl: lua },
      { nome: "estrela", imagemUrl: estrela },
    ] },
    { tipo: "somInicial", instrucaoAudio: "Qual dessas começa com o mesmo som de SOL? Escuta: SSSS-ol.", referencia: { nome: "sol", imagemUrl: sol }, opcoes: [
      { nome: "sapo", imagemUrl: sapo, correta: true },
      { nome: "lua", imagemUrl: lua, correta: false },
      { nome: "gato", imagemUrl: gato, correta: false },
    ], feedbackAcerto: "Isso! Sol e sapo começam com SSSSS!", feedbackErro: "Escuta o sopro do começo: SSSS-ol, SSSS-apo!" },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra sol:", palavra: "SOL", silabas: 1, imagemUrl: sol, elogio: "Uma palma só! Sol é palavra pequenininha!" },
    { tipo: "historiaIlustrada", titulo: "A estrela que dormiu tarde", cenas: [
      { imagemUrl: estrela, narracao: "Uma estrelinha ficou brincando a noite toda no céu." },
      { imagemUrl: sol, narracao: "Quando o sol chegou, ela quase esqueceu de ir descansar." },
      { imagemUrl: lua, narracao: "A lua sorriu e disse: 'Vai dormir, estrelinha, à noite eu te chamo de novo.'" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "Quem chegou de manhã e mandou a estrelinha descansar?", opcoes: [
      { nome: "sol", imagemUrl: sol, correta: true },
      { nome: "sapo", imagemUrl: sapo, correta: false },
      { nome: "gato", imagemUrl: gato, correta: false },
    ], feedbackAcerto: "Isso! O sol veio brilhar de dia!", feedbackErro: "Foi o SOL que chegou de manhã!" },
    { tipo: "fazDeConta", imagemUrl: sol, convite: "Vira sol! Abre bem os bracinhos e sorri bem grande, como se fosse brilhar!" },
    { tipo: "rodaConversa", imagemUrl: sol, pergunta: "O que você gosta de fazer quando o sol está brilhando?", exemplos: [
      { nome: "brincar na rua", imagemUrl: parque },
      { nome: "ir na praia", imagemUrl: bola },
      { nome: "correr no quintal", imagemUrl: cachorro },
      { nome: "tomar sorvete", imagemUrl: sol },
    ] },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Vá até a janela com um adulto e diga 'Bom dia, sol!' bem alto!", dicaAdulto: "Rotinas com fala expressiva ampliam prosódia e vocabulário." },
    { tipo: "celebracao", medalha: "Ouvidos de Poeta", mascoteUrl: brilha, falaFinal: "Que orelhinha bonita você tem! Escutou cada verso!" },
  ],
};

/**
 * Aula 05 — "Meu dia foi assim"
 * BNCC: EI02EF05 (relatar experiências vividas). Narrativa oral.
 */
const aula05: AulaEI = {
  slug: "aula-05-meu-dia-foi-assim",
  titulo: "Meu dia foi assim",
  icone: "🗣️",
  bncc: ["EI02EF05", "EI02EF01"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Oi! Sabe o que o Brilha ADORA? Ouvir o que aconteceu no seu dia! Vamos contar?" },
    { tipo: "escutaRitmada", imagemUrl: sol, versos: [
      "De manhã acordei, tomei banho e comi.",
      "De tarde brinquei, e no parque corri.",
      "De noite, cansado, dormir eu vou aqui.",
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada momento do dia:", itens: [
      { nome: "acordar", imagemUrl: sol },
      { nome: "banho", imagemUrl: banho },
      { nome: "sopa", imagemUrl: sopa },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "O que o menino do poema fez de MANHÃ?", opcoes: [
      { nome: "tomar banho", imagemUrl: banho, correta: true },
      { nome: "dormir", imagemUrl: lua, correta: false },
      { nome: "brincar no parque", imagemUrl: parque, correta: false },
    ], feedbackAcerto: "Isso! Ele acordou e tomou banho!", feedbackErro: "De manhã ele acordou e tomou BANHO." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "BA-NHO", silabas: 2, imagemUrl: banho, elogio: "Duas palminhas! Ba-nho!" },
    { tipo: "historiaIlustrada", titulo: "Um dia da Lili", cenas: [
      { imagemUrl: menina, narracao: "A Lili acordou com o solzinho na janela. Bocejou grande!" },
      { imagemUrl: sopa, narracao: "No almoço, comeu uma sopa bem gostosa, com legumes coloridos." },
      { imagemUrl: parque, narracao: "De tarde foi ao parque e escorregou muitas vezes. Voltou pra casa cansada e feliz." },
    ] },
    { tipo: "rodaConversa", imagemUrl: menino, pergunta: "E o SEU dia hoje? O que você fez de manhã, de tarde e de noite? Conta pro Brilha!", exemplos: [
      { nome: "tomei banho", imagemUrl: banho },
      { nome: "comi", imagemUrl: sopa },
      { nome: "brinquei", imagemUrl: bola },
      { nome: "dormi um pouco", imagemUrl: lua },
    ] },
    { tipo: "fazDeConta", imagemUrl: sol, convite: "Faz de conta que está acordando: espreguiça, boceja e diz 'bom dia, mundo!'" },
    { tipo: "compreensaoImagem", perguntaAudio: "E quando a Lili voltou do parque, como ela estava?", opcoes: [
      { nome: "cansada e feliz", imagemUrl: menina, correta: true },
      { nome: "com fome", imagemUrl: sopa, correta: false },
      { nome: "com sono só", imagemUrl: lua, correta: false },
    ], feedbackAcerto: "Isso! Cansada e feliz!", feedbackErro: "Ela voltou cansada e feliz de tanto brincar!" },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Na hora do jantar, conta pro adulto: 'Hoje eu fiz isso, isso e isso!'", dicaAdulto: "Relato oral diário treina memória, sequência temporal e narrativa — pilares da alfabetização." },
    { tipo: "celebracao", medalha: "Contador do Dia", mascoteUrl: brilha, falaFinal: "Seu dia foi lindo! Você já sabe contar histórias — e as melhores histórias começam com o que a gente vive!" },
  ],
};

/**
 * Aula 06 — "Invento uma história"
 * BNCC: EI02EF06 (criar e contar histórias oralmente). Imaginação narrativa.
 */
const aula06: AulaEI = {
  slug: "aula-06-invento-uma-historia",
  titulo: "Invento uma história",
  icone: "✨",
  bncc: ["EI02EF06", "EI02EF04"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Sabe o que a gente vai fazer hoje? INVENTAR uma história juntinhos! A sua imaginação vai voar!" },
    { tipo: "escutaRitmada", imagemUrl: estrela, versos: [
      "Era uma vez, era uma vez...",
      "Um bichinho, uma flor, uma menina que fez...",
      "Uma história bonita — e você que criou!",
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Escolhe 3 personagens pra história — toca em cada um:", itens: [
      { nome: "coelho", imagemUrl: coelho },
      { nome: "flor", imagemUrl: flor },
      { nome: "menina", imagemUrl: menina },
    ] },
    { tipo: "historiaIlustrada", titulo: "Uma história pra você continuar", cenas: [
      { imagemUrl: coelho, narracao: "Era uma vez um coelhinho branco que morava numa toca." },
      { imagemUrl: flor, narracao: "Um dia, ele achou uma flor mágica no jardim." },
      { imagemUrl: menina, narracao: "E aí... o que aconteceu? Você que decide!" },
    ] },
    { tipo: "rodaConversa", imagemUrl: coelho, pergunta: "E aí, o que o coelhinho fez com a flor mágica? Conta pro Brilha!", exemplos: [
      { nome: "levou pra mamãe", imagemUrl: mae },
      { nome: "guardou na toca", imagemUrl: casa },
      { nome: "deu pra menina", imagemUrl: menina },
      { nome: "voou com a flor", imagemUrl: borboleta },
    ] },
    { tipo: "fazDeConta", imagemUrl: coelho, convite: "Faz de conta que você é o coelhinho pulando com a flor! Pula, pula!" },
    { tipo: "somInicial", instrucaoAudio: "Qual palavra começa com o mesmo som de COELHO?", referencia: { nome: "coelho", imagemUrl: coelho }, opcoes: [
      { nome: "casa", imagemUrl: casa, correta: true },
      { nome: "sapo", imagemUrl: sapo, correta: false },
      { nome: "pato", imagemUrl: pato, correta: false },
    ], feedbackAcerto: "Boa! Coelho e casa começam com CÊ!", feedbackErro: "Escuta: CO-elho, CA-sa. Começam iguais!" },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma no nome do coelhinho:", palavra: "CO-E-LHO", silabas: 3, imagemUrl: coelho, elogio: "Três palminhas! Co-e-lho!" },
    { tipo: "compreensaoImagem", perguntaAudio: "Na história que a gente começou, o que o coelho achou?", opcoes: [
      { nome: "flor mágica", imagemUrl: flor, correta: true },
      { nome: "sopa", imagemUrl: sopa, correta: false },
      { nome: "bola", imagemUrl: bola, correta: false },
    ], feedbackAcerto: "Isso mesmo! Uma flor mágica!", feedbackErro: "Ele achou uma FLOR mágica no jardim." },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Inventa uma história pra alguém em casa começando com: 'Era uma vez...'!", dicaAdulto: "Contar histórias inventadas desenvolve estrutura narrativa (começo/meio/fim), essencial pra alfabetização plena." },
    { tipo: "celebracao", medalha: "Pequeno Contador", mascoteUrl: brilha, falaFinal: "Uau! Você inventou uma história linda! O Brilha vai lembrar pra sempre!" },
  ],
};

/**
 * Aula 07 — "Livros são tesouros"
 * BNCC: EI02EF07 (manusear portadores) · EI02EF08 (diferentes gêneros).
 */
const aula07: AulaEI = {
  slug: "aula-07-livros-sao-tesouros",
  titulo: "Livros são tesouros",
  icone: "📖",
  bncc: ["EI02EF07", "EI02EF08"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Olha o que o Brilha trouxe! LIVROS! Livros são caixinhas cheias de histórias esperando a gente abrir!" },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada coisa de leitura:", itens: [
      { nome: "livro", imagemUrl: livro },
      { nome: "muitos livros", imagemUrl: livros },
      { nome: "papel", imagemUrl: papel },
    ] },
    { tipo: "escutaRitmada", imagemUrl: livro, versos: [
      "Abre o livro, olha a figura, ouve a história de alguém.",
      "Vira a página bem devagar, conta pra mim também.",
      "Livro é festa, livro é magia, livro é o meu par!",
    ] },
    { tipo: "historiaIlustrada", titulo: "Tipos de história que cabem num livro", cenas: [
      { imagemUrl: sapo, narracao: "Tem livro de POESIA — palavras que cantam, como a do sapo que rima." },
      { imagemUrl: coelho, narracao: "Tem livro de CONTO — historinha com começo, meio e fim, como a do coelho." },
      { imagemUrl: bola, narracao: "Tem livro de PARLENDA — brincadeira com palavras, como 'uni-duni-tê'." },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "Onde a gente encontra muitas historinhas juntas?", opcoes: [
      { nome: "no livro", imagemUrl: livro, correta: true },
      { nome: "na bola", imagemUrl: bola, correta: false },
      { nome: "no sapato", imagemUrl: casa, correta: false },
    ], feedbackAcerto: "Isso! No livro tem historinhas de montão!", feedbackErro: "Historinhas moram nos LIVROS!" },
    { tipo: "fazDeConta", imagemUrl: livros, convite: "Faz de conta que você está lendo um livro pro seu ursinho! Aponta as figuras e conta!" },
    { tipo: "somInicial", instrucaoAudio: "LIVRO começa com o som LLLL. Qual palavra começa igual?", referencia: { nome: "livro", imagemUrl: livro }, opcoes: [
      { nome: "lua", imagemUrl: lua, correta: true },
      { nome: "sapo", imagemUrl: sapo, correta: false },
      { nome: "pato", imagemUrl: pato, correta: false },
    ], feedbackAcerto: "Boa! LI-vro e LU-a começam iguais!", feedbackErro: "Escuta: LI-vro, LU-a. Começam com LLLL!" },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "LI-VRO", silabas: 2, imagemUrl: livro, elogio: "Duas palminhas! Li-vro!" },
    { tipo: "rodaConversa", imagemUrl: livro, pergunta: "Você tem um livro favorito? Conta como ele é pro Brilha!", exemplos: [
      { nome: "livro de bicho", imagemUrl: sapo },
      { nome: "livro de princesa", imagemUrl: menina },
      { nome: "livro colorido", imagemUrl: arvore },
      { nome: "livro de casa", imagemUrl: casa },
    ] },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Escolhe UM livro em casa e pede pra um adulto ler pra você! Aponta as figuras juntos.", dicaAdulto: "Leitura compartilhada diária de 10 min é a intervenção mais forte para desenvolver leitor competente." },
    { tipo: "celebracao", medalha: "Amigo dos Livros", mascoteUrl: brilha, falaFinal: "Livro é seu amigão pra vida toda! Você já sabe abrir tesouros!" },
  ],
};

/**
 * Aula 08 — "Meu risco vira letra"
 * BNCC: EI02EF09 (manusear instrumentos de escrita). Pré-escrita / garatuja.
 */
const aula08: AulaEI = {
  slug: "aula-08-meu-risco-vira-letra",
  titulo: "Meu risco vira letra",
  icone: "✏️",
  bncc: ["EI02EF09", "EI02EF01"],
  duracaoMin: 10,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Olha só! Hoje a gente vai fazer RISCOS! Todo risquinho seu conta uma história!" },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca nos instrumentos que a gente usa pra riscar:", itens: [
      { nome: "lápis", imagemUrl: lapis },
      { nome: "tinta", imagemUrl: tinta },
      { nome: "papel", imagemUrl: papel },
    ] },
    { tipo: "escutaRitmada", imagemUrl: lapis, versos: [
      "Rabisca, rabisca, faz um sol bem redondo!",
      "Rabisca, rabisca, faz uma casinha aqui!",
      "Cada risco seu é seu — ninguém faz igualzinho a ti!",
    ] },
    { tipo: "historiaIlustrada", titulo: "O lápis feliz", cenas: [
      { imagemUrl: lapis, narracao: "Era um lapisinho novo, com ponta afiada, esperando ser usado." },
      { imagemUrl: papel, narracao: "Uma menina pegou o lápis, respirou fundo e riscou uma linha bem grande no papel." },
      { imagemUrl: desenho, narracao: "Aí o lápis dançou! Fez sol, fez casa, fez até o nome dela!" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "Com o que a menina fez os desenhos?", opcoes: [
      { nome: "lápis", imagemUrl: lapis, correta: true },
      { nome: "sopa", imagemUrl: sopa, correta: false },
      { nome: "bola", imagemUrl: bola, correta: false },
    ], feedbackAcerto: "Isso! Com o LÁ-PIS!", feedbackErro: "A menina usou um LÁ-PIS pra desenhar." },
    { tipo: "somInicial", instrucaoAudio: "LÁPIS começa com LLLL. Qual outra começa igual?", referencia: { nome: "lápis", imagemUrl: lapis }, opcoes: [
      { nome: "livro", imagemUrl: livro, correta: true },
      { nome: "gato", imagemUrl: gato, correta: false },
      { nome: "pato", imagemUrl: pato, correta: false },
    ], feedbackAcerto: "Boa! LÁ-pis e LI-vro começam com LLLL!", feedbackErro: "Escuta: LLLL-ápis, LLLL-ivro. Iguais no começo!" },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "LÁ-PIS", silabas: 2, imagemUrl: lapis, elogio: "Duas palminhas! Lá-pis!" },
    { tipo: "fazDeConta", imagemUrl: papel, convite: "Faz de conta que seu dedo é um lápis! Risca no ar um SOL bem redondo, e depois uma CASA!" },
    { tipo: "rodaConversa", imagemUrl: desenho, pergunta: "Se você pudesse desenhar QUALQUER coisa agora, o que seria? Conta pro Brilha!", exemplos: [
      { nome: "minha família", imagemUrl: familia },
      { nome: "meu bicho", imagemUrl: cachorro },
      { nome: "arco-íris", imagemUrl: flor },
      { nome: "coração", imagemUrl: coracao },
    ] },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Pega um papel e um lápis com um adulto. Desenha o seu nome do seu jeito — pode ser rabisco mesmo!", dicaAdulto: "Garatuja é a raiz da escrita. Aceite os rabiscos com entusiasmo — depois pergunte 'o que você escreveu aqui?'" },
    { tipo: "celebracao", medalha: "Mão de Artista", mascoteUrl: brilha, falaFinal: "Cada risquinho seu é uma palavra nascendo! Você vai escrever bonito um dia!" },
  ],
};

/**
 * Aula 09 — "Festa das palavras"
 * BNCC: revisão integradora (EI02EF01, 02, 05, 08). Avaliação leve por jogo.
 */
const aula09: AulaEI = {
  slug: "aula-09-festa-das-palavras",
  titulo: "Festa das palavras",
  icone: "🎉",
  bncc: ["EI02EF01", "EI02EF02", "EI02EF05", "EI02EF08"],
  duracaoMin: 12,
  momentos: [
    { tipo: "boasVindas", mascoteUrl: brilha, falaMascote: "Hoje é FESTA! Todas as palavras que a gente aprendeu vieram brincar com a gente!" },
    { tipo: "escutaRitmada", imagemUrl: estrela, versos: [
      "Bola, casa, sol, lua!",
      "Sapo, pato, rato na rua!",
      "Vem cantar essa festa comigo — a palavra é sua e é minha!",
    ] },
    { tipo: "vocabularioVisual", instrucaoAudio: "Toca em cada palavra da nossa festa:", itens: [
      { nome: "bola", imagemUrl: bola },
      { nome: "sapo", imagemUrl: sapo },
      { nome: "lua", imagemUrl: lua },
    ] },
    { tipo: "somInicial", instrucaoAudio: "SAPO começa com SSSSS. Qual outra começa igual?", referencia: { nome: "sapo", imagemUrl: sapo }, opcoes: [
      { nome: "sol", imagemUrl: sol, correta: true },
      { nome: "gato", imagemUrl: gato, correta: false },
      { nome: "bola", imagemUrl: bola, correta: false },
    ], feedbackAcerto: "Boa! SSSS-apo e SSSS-ol!", feedbackErro: "Escuta o começo: SSSS-apo, SSSS-ol!" },
    { tipo: "somInicial", instrucaoAudio: "Qual palavra RIMA com PATO?", referencia: { nome: "pato", imagemUrl: pato }, opcoes: [
      { nome: "rato", imagemUrl: rato, correta: true },
      { nome: "casa", imagemUrl: casa, correta: false },
      { nome: "sol", imagemUrl: sol, correta: false },
    ], feedbackAcerto: "Isso! PA-TO / RA-TO!", feedbackErro: "Escuta o finalzinho: pa-TO, ra-TO." },
    { tipo: "ritmoCorpo", instrucaoAudio: "Bate palma na palavra:", palavra: "BOR-BO-LE-TA", silabas: 4, imagemUrl: borboleta, elogio: "QUATRO palminhas! Bor-bo-le-ta! Que palavra grande!" },
    { tipo: "historiaIlustrada", titulo: "A festa da floresta", cenas: [
      { imagemUrl: arvore, narracao: "Na floresta, todos os bichos se reuniram embaixo da árvore mais alta." },
      { imagemUrl: passaro, narracao: "O passarinho cantou, o sapo pulou, a borboleta dançou." },
      { imagemUrl: coracao, narracao: "E cada bicho disse UMA palavra bonita pro outro. A floresta virou uma festa de palavras!" },
    ] },
    { tipo: "compreensaoImagem", perguntaAudio: "O que os bichos fizeram embaixo da árvore?", opcoes: [
      { nome: "festa", imagemUrl: coracao, correta: true },
      { nome: "dormiram", imagemUrl: lua, correta: false },
      { nome: "brigaram", imagemUrl: sopa, correta: false },
    ], feedbackAcerto: "Isso! Fizeram uma FESTA de palavras!", feedbackErro: "Foi uma FESTA linda!" },
    { tipo: "rodaConversa", imagemUrl: brilha, pergunta: "Qual palavra você mais gostou de aprender com o Brilha? Fala bem alto!", exemplos: [
      { nome: "bola", imagemUrl: bola },
      { nome: "sapo", imagemUrl: sapo },
      { nome: "lua", imagemUrl: lua },
      { nome: "livro", imagemUrl: livro },
    ] },
    { tipo: "missaoFamilia", titulo: "Missão Família", convite: "Ensina UMA palavra que você aprendeu pra alguém em casa! Fala e bate palma nas sílabas!", dicaAdulto: "Quando a criança ENSINA, fixa. Peça pra ela explicar o que aprendeu." },
    { tipo: "celebracao", medalha: "Rei/Rainha das Palavras", mascoteUrl: brilha, falaFinal: "VOCÊ CONSEGUIU! Terminou a jornada do Maternal! Suas palavrinhas vão brilhar pra sempre!" },
  ],
};

void estrela;

export const cursoMaternal: CursoEI = {
  slug: "portugues-ei-maternal",
  serie: "maternal",
  serieLabel: "Maternal (3–4 anos)",
  titulo: "Códice do Som e do Ritmo",
  descricao:
    "O primeiro contato com a palavra falada, o ritmo do corpo e as histórias contadas. Muita voz, palma e imitação.",
  corPrimaria: "#f472b6",
  corSecundaria: "#831843",
  mascoteUrl: brilha,
  unidades: [
    {
      slug: "unidade-1",
      numero: 1,
      titulo: "O Som das Palavras e o Ritmo do Corpo",
      subtitulo: "Vozes, palmas e nomes queridos",
      aulas: [aula01, aula02, aula03],
    },
    {
      slug: "unidade-2",
      numero: 2,
      titulo: "Poemas, Histórias e o Meu Dia",
      subtitulo: "Escutar, imaginar e contar",
      aulas: [aula04, aula05, aula06],
    },
    {
      slug: "unidade-3",
      numero: 3,
      titulo: "Livros, Riscos e a Festa das Palavras",
      subtitulo: "Do lápis à narrativa própria",
      aulas: [aula07, aula08, aula09],
    },
  ],
};
