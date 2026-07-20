import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as sombrinha } from "@/assets/neuro-treino/objetos/sombrinha.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as banho } from "@/assets/neuro-treino/objetos/banho.png.asset.json";
import { url as sorvete } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as ninho } from "@/assets/neuro-treino/objetos/ninho.png.asset.json";
import { url as sopa } from "@/assets/neuro-treino/objetos/sopa.png.asset.json";
import { url as semente } from "@/assets/neuro-treino/objetos/semente.png.asset.json";
import { url as regador } from "@/assets/neuro-treino/objetos/regador.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as pipa } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";

/**
 * Ler com Aurora — Fase 8: Compreensão Estratégica
 * ------------------------------------------------
 * 20 aulas · 4 semanas · 15 min/dia
 *  - Semana 1 (aqui): Prever — o que vai acontecer?
 *  - Semana 2: Resumir — frase-chave da história
 *  - Semana 3: Inferir — o que o personagem sente/quer?
 *  - Semana 4: Conectar + Diploma "Leitor Estratégico"
 *
 * Base: Duke & Pearson (2002) — ensino explícito de estratégias
 * de compreensão leitora. National Reading Panel (2000).
 * Contrato: mem://preferences/contrato-ler-com-aurora-fases-6-8
 */

const mascote = brilha;
const BASE_PREVER =
  "Estratégia de compreensão 'Prever' (Duke & Pearson 2002): antes de terminar a história, a criança usa pistas visuais e o enredo para antecipar o que vem depois. Prever ativa esquemas prévios e melhora a memória do texto (NRP 2000).";

/* ============================================================
 * SEMANA 1 — Prever (o que vai acontecer?)
 * ============================================================ */

const a1: AulaEI = {
  slug: "f8-dia-01-prever-balao",
  titulo: "Dia 1 · O balão da menina",
  icone: "🎈",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_PREVER,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Bem-vindo à Fase da Compreensão! Aqui a gente vira detetive da história. Eu conto um pedacinho e você adivinha o que vai acontecer depois.",
    },
    {
      tipo: "preverHistoria",
      titulo: "O balão da menina",
      cenas: [
        { imagemUrl: menina, narracao: "A menina ganhou um balão bem colorido." },
        { imagemUrl: balao, narracao: "Ela soltou o barbante sem querer." },
      ],
      pergunta: "O que vai acontecer com o balão?",
      instrucaoAudio: "Escolha a imagem que mostra o que você acha que vai acontecer.",
      opcoes: [
        { nome: "SOBE NO CÉU", imagemUrl: nuvem, correta: true },
        { nome: "VIRA BOLO", imagemUrl: bolo, correta: false },
        { nome: "VIRA CACHORRO", imagemUrl: cachorro, correta: false },
      ],
      feedbackAcerto: "Isso! Balão solto sobe para o céu!",
      feedbackErro: "Hmm… lembra: ela soltou o barbante. Pensa de novo.",
      elogio: "Você previu como um leitor de verdade!",
    },
    {
      tipo: "preverHistoria",
      titulo: "O cachorro faminto",
      cenas: [
        { imagemUrl: cachorro, narracao: "O cachorro está com muita fome." },
        { imagemUrl: bolo, narracao: "Ele viu um bolo em cima da mesa, sem ninguém olhando." },
      ],
      pergunta: "O que o cachorro vai fazer?",
      instrucaoAudio: "Escolha o que combina com a história.",
      opcoes: [
        { nome: "COMER O BOLO", imagemUrl: bolo, correta: true },
        { nome: "TOMAR BANHO", imagemUrl: banho, correta: false },
        { nome: "ANDAR DE CARRO", imagemUrl: carro, correta: false },
      ],
      feedbackAcerto: "Claro! Cachorro faminto + bolo na mesa = bolo comido!",
      feedbackErro: "Lembra: ele está com FOME. O que combina com fome?",
      elogio: "Ótima previsão!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive da História · Dia 1",
      mascoteUrl: mascote,
      falaFinal:
        "Você já é detetive! Amanhã: o que acontece quando começa a chover na rua?",
    },
  ],
};

const a2: AulaEI = {
  slug: "f8-dia-02-prever-chuva",
  titulo: "Dia 2 · Começou a chover",
  icone: "🌧️",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_PREVER,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Hoje: quando o céu fecha e a chuva chega, o que a gente faz? Bora prever!",
    },
    {
      tipo: "preverHistoria",
      titulo: "Sem sombrinha",
      cenas: [
        { imagemUrl: menino, narracao: "O menino saiu de casa para brincar." },
        { imagemUrl: nuvem, narracao: "De repente o céu fechou e ficou tudo escuro." },
        { imagemUrl: chuva, narracao: "Começou a chover forte, e ele não tem sombrinha." },
      ],
      pergunta: "O que vai acontecer com o menino?",
      instrucaoAudio: "Escolha a imagem certa.",
      opcoes: [
        { nome: "FICAR MOLHADO", imagemUrl: chuva, correta: true },
        { nome: "COMER SORVETE", imagemUrl: sorvete, correta: false },
        { nome: "IR NO CARRO", imagemUrl: carro, correta: false },
      ],
      feedbackAcerto: "Sim! Sem sombrinha, ele fica todo molhado!",
      feedbackErro: "Ele não tem sombrinha e está chovendo. O que acontece?",
      elogio: "Previu certinho!",
    },
    {
      tipo: "preverHistoria",
      titulo: "A menina esperta",
      cenas: [
        { imagemUrl: menina, narracao: "A menina viu que ia chover." },
        { imagemUrl: sombrinha, narracao: "Ela pegou uma coisa antes de sair." },
      ],
      pergunta: "O que ela pegou?",
      instrucaoAudio: "Pense: o que serve pra chuva?",
      opcoes: [
        { nome: "SOMBRINHA", imagemUrl: sombrinha, correta: true },
        { nome: "SORVETE", imagemUrl: sorvete, correta: false },
        { nome: "CELULAR", imagemUrl: celular, correta: false },
      ],
      feedbackAcerto: "Isso! Sombrinha protege da chuva!",
      feedbackErro: "Ela viu que ia CHOVER. O que protege da chuva?",
      elogio: "Boa dedução!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive da História · Dia 2",
      mascoteUrl: mascote,
      falaFinal: "Você adivinhou! Amanhã: o gato e o passarinho.",
    },
  ],
};

const a3: AulaEI = {
  slug: "f8-dia-03-prever-gato-passaro",
  titulo: "Dia 3 · O gato e o passarinho",
  icone: "🐱",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_PREVER,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje tem gato espiando passarinho. O que será que ele vai fazer?",
    },
    {
      tipo: "preverHistoria",
      titulo: "Olho grande",
      cenas: [
        { imagemUrl: gato, narracao: "O gato estava deitado no sofá." },
        { imagemUrl: passaro, narracao: "Ele viu um passarinho pousar na janela." },
      ],
      pergunta: "O que o gato vai fazer?",
      instrucaoAudio: "Escolha a resposta certa.",
      opcoes: [
        { nome: "CORRER ATRÁS", imagemUrl: passaro, correta: true },
        { nome: "COMER SOPA", imagemUrl: sopa, correta: false },
        { nome: "IR NA ESCOLA", imagemUrl: escola, correta: false },
      ],
      feedbackAcerto: "Isso! Gato vendo passarinho quer sempre correr atrás!",
      feedbackErro: "Pensa no que o gato faz quando vê passarinho…",
      elogio: "Previsão de expert!",
    },
    {
      tipo: "preverHistoria",
      titulo: "O passarinho volta",
      cenas: [
        { imagemUrl: passaro, narracao: "O passarinho voou para longe do gato." },
        { imagemUrl: arvore, narracao: "Ele foi até uma árvore bem alta." },
      ],
      pergunta: "Onde o passarinho vai se esconder?",
      instrucaoAudio: "Escolha a melhor resposta.",
      opcoes: [
        { nome: "NO NINHO", imagemUrl: ninho, correta: true },
        { nome: "NO CARRO", imagemUrl: carro, correta: false },
        { nome: "NA MOCHILA", imagemUrl: mochila, correta: false },
      ],
      feedbackAcerto: "Perfeito! Passarinho sobe na árvore e vai pro ninho!",
      feedbackErro: "Onde o passarinho mora, lá em cima da árvore?",
      elogio: "Você entendeu a história inteira!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive da História · Dia 3",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: uma sementinha vira o quê?",
    },
  ],
};

const a4: AulaEI = {
  slug: "f8-dia-04-prever-semente",
  titulo: "Dia 4 · A sementinha",
  icone: "🌱",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_PREVER,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje a gente planta uma sementinha. O que vai crescer?",
    },
    {
      tipo: "preverHistoria",
      titulo: "Plantando",
      cenas: [
        { imagemUrl: menina, narracao: "A menina pegou uma sementinha bem pequena." },
        { imagemUrl: semente, narracao: "Ela plantou a semente na terra do quintal." },
        { imagemUrl: regador, narracao: "Todo dia ela regava com o regador. E o sol brilhava." },
      ],
      pergunta: "O que vai nascer da semente?",
      instrucaoAudio: "Escolha o que nasce quando a gente planta e rega.",
      opcoes: [
        { nome: "UMA FLOR", imagemUrl: flor, correta: true },
        { nome: "UM CARRO", imagemUrl: carro, correta: false },
        { nome: "UM CELULAR", imagemUrl: celular, correta: false },
      ],
      feedbackAcerto: "Sim! Semente com água e sol vira flor, planta, árvore!",
      feedbackErro: "Semente vira uma coisa VIVA que cresce da terra. Qual?",
      elogio: "Você entendeu como a natureza funciona!",
    },
    {
      tipo: "preverHistoria",
      titulo: "Sol e água",
      cenas: [
        { imagemUrl: flor, narracao: "A florzinha cresceu bonita." },
        { imagemUrl: sol, narracao: "Mas passou uma semana sem chuva e sem ninguém regar." },
      ],
      pergunta: "O que a flor precisa agora?",
      instrucaoAudio: "Escolha o que a flor mais precisa.",
      opcoes: [
        { nome: "ÁGUA", imagemUrl: regador, correta: true },
        { nome: "SORVETE", imagemUrl: sorvete, correta: false },
        { nome: "MOCHILA", imagemUrl: mochila, correta: false },
      ],
      feedbackAcerto: "Isso! Sem água a florzinha murcha. Regar salva!",
      feedbackErro: "Pensa: sem chuva e sem regar, o que falta pra flor?",
      elogio: "Você cuida bem das histórias!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive da História · Dia 4",
      mascoteUrl: mascote,
      falaFinal: "Amanhã é o último dia da semana: dia de aventura de vento e pipa!",
    },
  ],
};

const a5: AulaEI = {
  slug: "f8-dia-05-prever-pipa",
  titulo: "Dia 5 · A pipa no vento",
  icone: "🪁",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_PREVER,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Último dia da semana! Hoje tem pipa, vento e uma missão em família bem legal.",
    },
    {
      tipo: "preverHistoria",
      titulo: "Vento forte",
      cenas: [
        { imagemUrl: menino, narracao: "O menino levou a pipa dele para o parque." },
        { imagemUrl: pipa, narracao: "Ele soltou a pipa no ar bem devagar." },
        { imagemUrl: nuvem, narracao: "De repente veio um vento bem forte." },
      ],
      pergunta: "O que a pipa vai fazer?",
      instrucaoAudio: "Escolha a resposta certa.",
      opcoes: [
        { nome: "VOAR ALTO", imagemUrl: nuvem, correta: true },
        { nome: "VIRAR BOLO", imagemUrl: bolo, correta: false },
        { nome: "TOMAR BANHO", imagemUrl: banho, correta: false },
      ],
      feedbackAcerto: "Sim! Vento forte faz a pipa voar bem alto!",
      feedbackErro: "Pensa: pipa + vento forte = ela vai pra onde?",
      elogio: "Boa previsão!",
    },
    {
      tipo: "preverHistoria",
      titulo: "Hora de voltar",
      cenas: [
        { imagemUrl: pipa, narracao: "A pipa voou muito e o menino se cansou." },
        { imagemUrl: sol, narracao: "O sol já estava se pondo, tá quase de noite." },
      ],
      pergunta: "O que o menino vai fazer agora?",
      instrucaoAudio: "Escolha o que combina.",
      opcoes: [
        { nome: "IR PRA CASA", imagemUrl: mochila, correta: true },
        { nome: "COMER SORVETE", imagemUrl: sorvete, correta: false },
        { nome: "IR NA ESCOLA", imagemUrl: escola, correta: false },
      ],
      feedbackAcerto: "Isso! Anoitecendo e cansado — hora de ir pra casa!",
      feedbackErro: "Já está de noite. Pra onde a gente vai à noite?",
      elogio: "Detetive de primeira!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "🎒 Missão em Família — Adivinha o fim",
      convite:
        "Peça pra alguém da casa começar uma historinha e parar no meio. Depois adivinha o final antes da pessoa contar. Trocam de lugar e agora é sua vez de começar a história!",
      dicaAdulto:
        "Prever é a estratégia mais forte da compreensão inicial (Duke & Pearson 2002). Aceite qualquer previsão coerente — mesmo se for diferente do final 'certo'. O importante é justificar com pistas.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive da História · Semana 1",
      mascoteUrl: mascote,
      falaFinal:
        "Você fechou a Semana 1 da Compreensão! Semana que vem: contar a história em UMA frase só. Isso é Resumir!",
    },
  ],
};

/* ============================================================
 * SEMANA 2 — Resumir (contar a história em UMA frase)
 * ============================================================ */

const BASE_RESUMIR =
  "Estratégia 'Resumir' (Duke & Pearson 2002): dentre várias frases, a criança escolhe a que captura a ideia principal da micro-história. Sumarizar é um dos preditores mais fortes de compreensão leitora (NRP 2000; Kintsch 1998).";

const a6: AulaEI = {
  slug: "f8-dia-06-resumir-cachorro-perdido",
  titulo: "Dia 6 · Cadê meu cachorro?",
  icone: "🐶",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_RESUMIR,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana nova! Agora a gente vai contar a história inteira em UMA frase só. Isso se chama RESUMIR.",
    },
    {
      tipo: "resumirFrase",
      titulo: "Cadê o cachorro?",
      cenas: [
        { imagemUrl: menina, narracao: "A menina foi passear com o cachorro no parque." },
        { imagemUrl: cachorro, narracao: "O cachorro correu atrás de um passarinho e sumiu." },
        { imagemUrl: menina, narracao: "A menina procurou muito e achou o cachorro debaixo de uma árvore." },
      ],
      pergunta: "Qual frase conta a história inteira?",
      instrucaoAudio: "Toque na frase que resume a história toda.",
      opcoes: [
        { frase: "A menina achou o cachorro que tinha fugido.", correta: true },
        { frase: "A menina comeu sorvete no parque.", correta: false },
        { frase: "O cachorro foi para a escola.", correta: false },
      ],
      feedbackAcerto: "Isso mesmo! Essa frase conta tudo: começo, meio e fim.",
      feedbackErro: "Essa é só um pedacinho. Procure a frase que conta a história inteira.",
      elogio: "Você resumiu como um leitor de verdade!",
    },
    {
      tipo: "resumirFrase",
      titulo: "A menina esperta",
      cenas: [
        { imagemUrl: menina, narracao: "A menina viu que o cachorro estava com sede." },
        { imagemUrl: regador, narracao: "Ela foi buscar água pra ele beber." },
        { imagemUrl: cachorro, narracao: "O cachorro tomou toda a água e ficou feliz." },
      ],
      pergunta: "Qual frase resume a história?",
      instrucaoAudio: "Escolha a frase certa.",
      opcoes: [
        { frase: "A menina deu água pro cachorro com sede.", correta: true },
        { frase: "O cachorro correu atrás de um balão.", correta: false },
        { frase: "A menina foi na escola de manhã.", correta: false },
      ],
      feedbackAcerto: "Perfeito! Você achou a ideia principal!",
      feedbackErro: "Essa frase não fala do que aconteceu. Tenta de novo.",
      elogio: "Muito bem!",
    },
    {
      tipo: "celebracao",
      medalha: "Resumidor · Dia 6",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: um menino que caiu na escola. O que será que aconteceu?",
    },
  ],
};

const a7: AulaEI = {
  slug: "f8-dia-07-resumir-tropeco-escola",
  titulo: "Dia 7 · O tropeção",
  icone: "🎒",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_RESUMIR,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje a história é de escola. Escuta bem e resume!",
    },
    {
      tipo: "resumirFrase",
      titulo: "Na escola",
      cenas: [
        { imagemUrl: menino, narracao: "O menino correu para a escola porque estava atrasado." },
        { imagemUrl: mochila, narracao: "A mochila estava aberta e os cadernos caíram no chão." },
        { imagemUrl: menino, narracao: "Uma amiga viu, ajudou a juntar tudo e os dois entraram na sala." },
      ],
      pergunta: "Qual frase conta a história inteira?",
      instrucaoAudio: "Toque na frase certa.",
      opcoes: [
        { frase: "O menino derrubou a mochila e uma amiga ajudou.", correta: true },
        { frase: "O menino comeu bolo no parque.", correta: false },
        { frase: "A escola foi fechada por causa da chuva.", correta: false },
      ],
      feedbackAcerto: "Isso! Essa frase tem começo, meio e fim.",
      feedbackErro: "Não é sobre isso. Escuta de novo e escolhe.",
      elogio: "Você é craque em resumir!",
    },
    {
      tipo: "resumirFrase",
      titulo: "Amigos na sala",
      cenas: [
        { imagemUrl: menina, narracao: "A menina não queria dividir o lápis novo." },
        { imagemUrl: menino, narracao: "O colega ficou triste e não pediu de novo." },
        { imagemUrl: menina, narracao: "Ela pensou, sorriu e emprestou o lápis pro amigo." },
      ],
      pergunta: "Qual frase resume tudo?",
      instrucaoAudio: "Escolha a frase que fala da história inteira.",
      opcoes: [
        { frase: "A menina resolveu emprestar o lápis pro colega.", correta: true },
        { frase: "O menino jogou o lápis fora.", correta: false },
        { frase: "A menina foi comer sopa em casa.", correta: false },
      ],
      feedbackAcerto: "Boa! Essa frase mostra o começo e o fim da história.",
      feedbackErro: "Isso não aconteceu na história. Tenta de novo.",
      elogio: "Mandou bem!",
    },
    {
      tipo: "celebracao",
      medalha: "Resumidor · Dia 7",
      mascoteUrl: mascote,
      falaFinal: "Amanhã tem festa de aniversário e bolo. Prepara o resumo!",
    },
  ],
};

const a8: AulaEI = {
  slug: "f8-dia-08-resumir-bolo-aniversario",
  titulo: "Dia 8 · Bolo de aniversário",
  icone: "🎂",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_RESUMIR,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje é dia de festa! Vamos contar a história do aniversário em uma frase só.",
    },
    {
      tipo: "resumirFrase",
      titulo: "Festa surpresa",
      cenas: [
        { imagemUrl: menina, narracao: "A menina fez aniversário e a família preparou uma surpresa." },
        { imagemUrl: bolo, narracao: "Trouxeram um bolo bem grande com velinhas coloridas." },
        { imagemUrl: menina, narracao: "Ela pediu um desejo, soprou as velas e todo mundo bateu palma." },
      ],
      pergunta: "Qual frase conta a história?",
      instrucaoAudio: "Escolha a frase que resume tudo.",
      opcoes: [
        { frase: "A menina soprou as velas do bolo de aniversário.", correta: true },
        { frase: "O cachorro correu no parque.", correta: false },
        { frase: "O menino soltou a pipa no vento.", correta: false },
      ],
      feedbackAcerto: "Sim! Essa frase fala do momento principal.",
      feedbackErro: "Essa não é a história de hoje. Escuta e tenta de novo.",
      elogio: "Você achou a ideia principal!",
    },
    {
      tipo: "resumirFrase",
      titulo: "O cachorro guloso",
      cenas: [
        { imagemUrl: bolo, narracao: "O bolo ficou em cima da mesa, esperando os convidados." },
        { imagemUrl: cachorro, narracao: "O cachorro subiu na cadeira sem ninguém ver." },
        { imagemUrl: cachorro, narracao: "Ele lambeu o brigadeiro e todo mundo riu quando descobriu." },
      ],
      pergunta: "Qual frase resume a história?",
      instrucaoAudio: "Escolha a frase certa.",
      opcoes: [
        { frase: "O cachorro lambeu o bolo da festa.", correta: true },
        { frase: "A menina foi na escola.", correta: false },
        { frase: "O menino comprou uma pipa nova.", correta: false },
      ],
      feedbackAcerto: "Isso! Essa frase tem tudo o que importa.",
      feedbackErro: "Essa frase é de outra história. Escuta de novo.",
      elogio: "Você é um resumidor de primeira!",
    },
    {
      tipo: "celebracao",
      medalha: "Resumidor · Dia 8",
      mascoteUrl: mascote,
      falaFinal: "Amanhã a gente vai pra escola com a mochila cheia. Prepara os ouvidos!",
    },
  ],
};

const a9: AulaEI = {
  slug: "f8-dia-09-resumir-caminho-escola",
  titulo: "Dia 9 · A caminho da escola",
  icone: "🚸",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_RESUMIR,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Uma historinha do caminho pra escola. Ouve e resume!",
    },
    {
      tipo: "resumirFrase",
      titulo: "O guarda-chuva",
      cenas: [
        { imagemUrl: menino, narracao: "O menino saiu de casa e viu que o céu estava fechado." },
        { imagemUrl: sombrinha, narracao: "Ele voltou correndo e pegou a sombrinha." },
        { imagemUrl: chuva, narracao: "Quando começou a chover, ele chegou seco na escola." },
      ],
      pergunta: "Qual frase resume a história?",
      instrucaoAudio: "Toque na frase certa.",
      opcoes: [
        { frase: "O menino pegou a sombrinha e chegou seco na escola.", correta: true },
        { frase: "O menino esqueceu a mochila em casa.", correta: false },
        { frase: "A menina foi ao parque brincar de pipa.", correta: false },
      ],
      feedbackAcerto: "Isso! Essa frase conta a história do começo ao fim.",
      feedbackErro: "Escuta de novo. Qual foi o final da história?",
      elogio: "Mandou muito bem!",
    },
    {
      tipo: "resumirFrase",
      titulo: "A amiga nova",
      cenas: [
        { imagemUrl: menina, narracao: "Chegou uma menina nova na escola e ela estava tímida." },
        { imagemUrl: menino, narracao: "Um colega foi até ela e chamou pra brincar no recreio." },
        { imagemUrl: menina, narracao: "Elas viraram amigas e começaram a rir juntas." },
      ],
      pergunta: "Qual frase conta tudo?",
      instrucaoAudio: "Escolha a frase que fala da história inteira.",
      opcoes: [
        { frase: "Um colega ajudou a menina nova e viraram amigos.", correta: true },
        { frase: "A menina caiu do balanço no parque.", correta: false },
        { frase: "O cachorro comeu o bolo da festa.", correta: false },
      ],
      feedbackAcerto: "Perfeito! Essa é a ideia principal.",
      feedbackErro: "Essa frase é de outra história. Tenta de novo.",
      elogio: "Você resumiu direitinho!",
    },
    {
      tipo: "celebracao",
      medalha: "Resumidor · Dia 9",
      mascoteUrl: mascote,
      falaFinal: "Amanhã é o último dia da semana. Tem missão em família e medalha nova!",
    },
  ],
};

const a10: AulaEI = {
  slug: "f8-dia-10-resumir-final-semana",
  titulo: "Dia 10 · O passeio de bicicleta",
  icone: "🚲",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_RESUMIR,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Último dia da Semana 2! Duas histórias, uma missão em família e a medalha da Semana 2 te esperam.",
    },
    {
      tipo: "resumirFrase",
      titulo: "A pipa que voou",
      cenas: [
        { imagemUrl: menino, narracao: "O menino foi ao parque com a pipa nova." },
        { imagemUrl: pipa, narracao: "O vento aumentou e levou a pipa até o alto da árvore." },
        { imagemUrl: arvore, narracao: "Um vizinho ajudou a tirar a pipa da árvore e o menino sorriu de novo." },
      ],
      pergunta: "Qual frase resume tudo?",
      instrucaoAudio: "Escolha a frase certa.",
      opcoes: [
        { frase: "O vizinho ajudou a tirar a pipa que ficou presa na árvore.", correta: true },
        { frase: "O menino ganhou um cachorro novo.", correta: false },
        { frase: "A menina apagou as velinhas do bolo.", correta: false },
      ],
      feedbackAcerto: "Isso! Você achou o essencial da história.",
      feedbackErro: "Essa frase não é dessa história. Escuta de novo.",
      elogio: "Detetive do resumo!",
    },
    {
      tipo: "resumirFrase",
      titulo: "A florzinha salva",
      cenas: [
        { imagemUrl: flor, narracao: "A florzinha do quintal estava murcha por causa do sol forte." },
        { imagemUrl: regador, narracao: "A menina pegou o regador e molhou bem a terra." },
        { imagemUrl: flor, narracao: "No outro dia a flor abriu bonita de novo." },
      ],
      pergunta: "Qual frase conta a história inteira?",
      instrucaoAudio: "Toque na frase certa.",
      opcoes: [
        { frase: "A menina regou a florzinha e ela ficou bonita de novo.", correta: true },
        { frase: "O menino jogou bola no parque.", correta: false },
        { frase: "O cachorro dormiu embaixo da mesa.", correta: false },
      ],
      feedbackAcerto: "Sim! Essa frase tem tudo o que aconteceu.",
      feedbackErro: "Essa não é a história de hoje. Tenta de novo.",
      elogio: "Você fechou com chave de ouro!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "🎒 Missão em Família — Conta em uma frase",
      convite:
        "Peça pra alguém da casa te contar uma historinha curta (do dia dela ou inventada). Depois, você conta a MESMA história em UMA frase só. Troquem: agora ela resume a sua!",
      dicaAdulto:
        "Resumir em uma frase é um dos preditores mais fortes de compreensão leitora (Kintsch 1998; NRP 2000). Aceite qualquer resumo que mantenha personagem + ação principal + desfecho.",
    },
    {
      tipo: "celebracao",
      medalha: "Resumidor · Semana 2",
      mascoteUrl: mascote,
      falaFinal:
        "Você fechou a Semana 2! Semana que vem: descobrir o que o personagem SENTE mesmo sem a história dizer. Isso é INFERIR!",
    },
  ],
};

/* ============================================================
 * SEMANA 3 — Inferir (o que o personagem sente/quer?)
 * ============================================================ */

const BASE_INFERIR =
  "Estratégia de compreensão 'Inferir' (Duke & Pearson 2002 · Kispal 2008): o texto não diz o sentimento explicitamente; a criança deduz a partir de pistas visuais + contexto + experiência prévia. Inferência é um dos preditores mais fortes de compreensão leitora futura.";

const a11: AulaEI = {
  slug: "f8-dia-11-inferir-balao-perdido",
  titulo: "Dia 11 · O balão que voou",
  icone: "🎈",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_INFERIR,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Começa a Semana 3! Agora a gente vira detetive de sentimentos. A história não diz o que o personagem sente — você adivinha pelas pistas!",
    },
    {
      tipo: "inferirEmocao",
      titulo: "O balão perdido",
      cenas: [
        { imagemUrl: menina, narracao: "A menina segurava o balão bem apertado." },
        { imagemUrl: balao, narracao: "Sem querer, ela soltou e o balão subiu bem alto." },
        { imagemUrl: menina, narracao: "Ela ficou parada, olhando o balão sumir no céu." },
      ],
      pergunta: "Como a menina está se sentindo?",
      instrucaoAudio: "Escolha o sentimento que combina com a história.",
      opcoes: [
        { emoji: "😢", nome: "TRISTE", correta: true },
        { emoji: "😄", nome: "FELIZ", correta: false },
        { emoji: "😠", nome: "COM RAIVA", correta: false },
      ],
      feedbackAcerto: "Isso! Perder algo querido deixa a gente triste.",
      feedbackErro: "Pensa: ela perdeu o balão. Como ela deve estar?",
      elogio: "Você leu o coração da personagem!",
    },
    {
      tipo: "inferirEmocao",
      titulo: "O bolo do aniversário",
      cenas: [
        { imagemUrl: menino, narracao: "O menino fez aniversário e ganhou um bolo enorme." },
        { imagemUrl: bolo, narracao: "O bolo tinha o desenho do super-herói favorito dele." },
        { imagemUrl: menino, narracao: "Ele bateu palma e pulou quando viu." },
      ],
      pergunta: "Como o menino está se sentindo?",
      instrucaoAudio: "Escolha o sentimento certo.",
      opcoes: [
        { emoji: "🤩", nome: "MUITO FELIZ", correta: true },
        { emoji: "😴", nome: "COM SONO", correta: false },
        { emoji: "😢", nome: "TRISTE", correta: false },
      ],
      feedbackAcerto: "Sim! Bater palma e pular são pistas de alegria.",
      feedbackErro: "Olha as pistas: ele pulou e bateu palma. Que sentimento é esse?",
      elogio: "Você é craque em ler emoções!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive de Sentimentos · Dia 11",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: um cachorro perdido na chuva. Prepara o coração de detetive!",
    },
  ],
};

const a12: AulaEI = {
  slug: "f8-dia-12-inferir-cachorro-chuva",
  titulo: "Dia 12 · O cachorro na chuva",
  icone: "🐶",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_INFERIR,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje tem duas historinhas pra você adivinhar o sentimento.",
    },
    {
      tipo: "inferirEmocao",
      titulo: "Sozinho na chuva",
      cenas: [
        { imagemUrl: chuva, narracao: "Começou a cair uma chuva muito forte na rua." },
        { imagemUrl: cachorro, narracao: "O cachorrinho ficou encolhido embaixo de uma árvore." },
        { imagemUrl: cachorro, narracao: "Ele tremia e olhava pra todo lado sem saber pra onde ir." },
      ],
      pergunta: "Como o cachorro está se sentindo?",
      instrucaoAudio: "Escolha a emoção que combina.",
      opcoes: [
        { emoji: "😨", nome: "COM MEDO", correta: true },
        { emoji: "😄", nome: "FELIZ", correta: false },
        { emoji: "😋", nome: "COM FOME", correta: false },
      ],
      feedbackAcerto: "Isso! Encolhido e tremendo são pistas de medo.",
      feedbackErro: "Olha as pistas: ele estava tremendo. Que sentimento causa isso?",
      elogio: "Detetive de sentimentos de primeira!",
    },
    {
      tipo: "inferirEmocao",
      titulo: "O resgate",
      cenas: [
        { imagemUrl: menina, narracao: "A menina passou correndo com a sombrinha." },
        { imagemUrl: sombrinha, narracao: "Ela viu o cachorrinho e o levou pra casa no colo." },
        { imagemUrl: cachorro, narracao: "Em casa, o cachorro balançou o rabo sem parar." },
      ],
      pergunta: "Como o cachorro está se sentindo agora?",
      instrucaoAudio: "Escolha o sentimento certo.",
      opcoes: [
        { emoji: "😊", nome: "FELIZ", correta: true },
        { emoji: "😠", nome: "COM RAIVA", correta: false },
        { emoji: "😢", nome: "TRISTE", correta: false },
      ],
      feedbackAcerto: "Sim! Balançar o rabo é jeito de cachorro dizer 'estou feliz'.",
      feedbackErro: "Ele foi salvo e está no colo quentinho. Como se sente?",
      elogio: "Você entende até o que o cachorro sente!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive de Sentimentos · Dia 12",
      mascoteUrl: mascote,
      falaFinal: "Amanhã tem sopa quentinha e uma criança com fome. Ouve as pistas!",
    },
  ],
};

const a13: AulaEI = {
  slug: "f8-dia-13-inferir-fome-sopa",
  titulo: "Dia 13 · A sopa quentinha",
  icone: "🍲",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_INFERIR,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Duas histórias, dois sentimentos escondidos. Vem descobrir!",
    },
    {
      tipo: "inferirEmocao",
      titulo: "Antes do jantar",
      cenas: [
        { imagemUrl: menino, narracao: "O menino brincou a tarde inteira sem parar." },
        { imagemUrl: menino, narracao: "A barriga dele começou a fazer barulho: rrrrróóóóó." },
        { imagemUrl: sopa, narracao: "Ele correu pra cozinha quando sentiu o cheiro da sopa." },
      ],
      pergunta: "O que o menino está sentindo?",
      instrucaoAudio: "Escolha a opção certa.",
      opcoes: [
        { emoji: "🍽️", nome: "COM FOME", correta: true },
        { emoji: "😴", nome: "COM SONO", correta: false },
        { emoji: "🥶", nome: "COM FRIO", correta: false },
      ],
      feedbackAcerto: "Isso! Barriga fazendo barulho é pista clara de fome.",
      feedbackErro: "A barriga dele fez barulho. Que sensação é essa?",
      elogio: "Você é detetive das pistas do corpo!",
    },
    {
      tipo: "inferirEmocao",
      titulo: "Depois da sopa",
      cenas: [
        { imagemUrl: sopa, narracao: "Ele tomou toda a sopa quentinha, até raspar o prato." },
        { imagemUrl: menino, narracao: "Depois se deitou no sofá e bocejou bem grande." },
        { imagemUrl: menino, narracao: "Os olhos dele foram fechando devagarinho." },
      ],
      pergunta: "Como o menino está se sentindo agora?",
      instrucaoAudio: "Escolha o sentimento certo.",
      opcoes: [
        { emoji: "😴", nome: "COM SONO", correta: true },
        { emoji: "😨", nome: "COM MEDO", correta: false },
        { emoji: "😠", nome: "COM RAIVA", correta: false },
      ],
      feedbackAcerto: "Sim! Bocejar e fechar os olhos = sono chegando.",
      feedbackErro: "Ele bocejou e os olhos foram fechando. Que sensação é essa?",
      elogio: "Você leu direitinho as pistas!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive de Sentimentos · Dia 13",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: alguém não quer emprestar o brinquedo. O que será que sente?",
    },
  ],
};

const a14: AulaEI = {
  slug: "f8-dia-14-inferir-raiva-emprestar",
  titulo: "Dia 14 · O brinquedo novo",
  icone: "😠",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_INFERIR,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje tem sentimento difícil: raiva e vergonha. Vamos descobrir juntas!",
    },
    {
      tipo: "inferirEmocao",
      titulo: "O carrinho novo",
      cenas: [
        { imagemUrl: menino, narracao: "O menino ganhou um carrinho novo de presente." },
        { imagemUrl: carro, narracao: "Um coleguinha pegou o carrinho sem pedir." },
        { imagemUrl: menino, narracao: "Ele cerrou os punhos e ficou vermelho." },
      ],
      pergunta: "Como o menino está se sentindo?",
      instrucaoAudio: "Escolha o sentimento certo.",
      opcoes: [
        { emoji: "😠", nome: "COM RAIVA", correta: true },
        { emoji: "😄", nome: "FELIZ", correta: false },
        { emoji: "😨", nome: "COM MEDO", correta: false },
      ],
      feedbackAcerto: "Isso! Punhos fechados e rosto vermelho são pistas de raiva.",
      feedbackErro: "Pegaram o brinquedo dele sem pedir. Que sentimento vem?",
      elogio: "Detetive das emoções fortes!",
    },
    {
      tipo: "inferirEmocao",
      titulo: "A pergunta na sala",
      cenas: [
        { imagemUrl: escola, narracao: "A professora fez uma pergunta pra turma toda." },
        { imagemUrl: menina, narracao: "A menina sabia a resposta, mas todo mundo olhou pra ela." },
        { imagemUrl: menina, narracao: "Ela abaixou a cabeça e ficou com as bochechas rosadas." },
      ],
      pergunta: "O que a menina está sentindo?",
      instrucaoAudio: "Escolha o sentimento.",
      opcoes: [
        { emoji: "😳", nome: "VERGONHA", correta: true },
        { emoji: "😠", nome: "COM RAIVA", correta: false },
        { emoji: "😋", nome: "COM FOME", correta: false },
      ],
      feedbackAcerto: "Sim! Abaixar a cabeça com o rosto rosado é sinal de vergonha.",
      feedbackErro: "Ela abaixou a cabeça com bochecha rosada. Que sentimento é esse?",
      elogio: "Você leu direitinho a cena!",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive de Sentimentos · Dia 14",
      mascoteUrl: mascote,
      falaFinal: "Amanhã é o último dia da semana. Missão em família e medalha esperando!",
    },
  ],
};

const a15: AulaEI = {
  slug: "f8-dia-15-inferir-surpresa-final",
  titulo: "Dia 15 · A grande surpresa",
  icone: "🎁",
  bncc: ["EF01LP26"],
  duracaoMin: 15,
  baseCientifica: BASE_INFERIR,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Último dia da Semana 3! Duas histórias, uma missão em família e a medalha da Semana 3!",
    },
    {
      tipo: "inferirEmocao",
      titulo: "A gaiola vazia",
      cenas: [
        { imagemUrl: passaro, narracao: "A menina tinha um passarinho de estimação." },
        { imagemUrl: ninho, narracao: "De manhã ela viu a gaiola aberta e vazia." },
        { imagemUrl: menina, narracao: "Ela abriu bem os olhos e a boca sem acreditar." },
      ],
      pergunta: "Como a menina está se sentindo?",
      instrucaoAudio: "Escolha a emoção certa.",
      opcoes: [
        { emoji: "😲", nome: "SURPRESA", correta: true },
        { emoji: "😴", nome: "COM SONO", correta: false },
        { emoji: "😋", nome: "COM FOME", correta: false },
      ],
      feedbackAcerto: "Isso! Olhos e boca abertos são pistas de surpresa.",
      feedbackErro: "Ela nunca esperou isso. Que sentimento acontece?",
      elogio: "Você percebeu na hora!",
    },
    {
      tipo: "inferirEmocao",
      titulo: "A florzinha secreta",
      cenas: [
        { imagemUrl: semente, narracao: "O menino plantou uma semente com muito cuidado." },
        { imagemUrl: regador, narracao: "Todo dia ele regava, mas nada nascia." },
        { imagemUrl: flor, narracao: "Numa manhã ele viu uma flor bonita no vaso e sorriu grande." },
      ],
      pergunta: "Como o menino está se sentindo?",
      instrucaoAudio: "Escolha o sentimento.",
      opcoes: [
        { emoji: "🥰", nome: "ORGULHOSO", correta: true },
        { emoji: "😠", nome: "COM RAIVA", correta: false },
        { emoji: "😢", nome: "TRISTE", correta: false },
      ],
      feedbackAcerto: "Sim! Ele cuidou muito e conseguiu — isso é orgulho!",
      feedbackErro: "Ele cuidou muito e a flor nasceu. Que sentimento é esse?",
      elogio: "Você chegou lá!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "💭 Missão em Família — Detetive de Sentimentos",
      convite:
        "Peça pra alguém da casa contar uma coisa que aconteceu com ela hoje SEM dizer como se sentiu. Você vira detetive e adivinha! Depois troquem: você conta e a pessoa adivinha o seu sentimento.",
      dicaAdulto:
        "Inferir emoções alheias é base da 'Teoria da Mente' (Baron-Cohen 1995) e melhora a compreensão de textos narrativos (Kispal 2008). Aceite qualquer palavra emocional coerente com as pistas dadas.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive de Sentimentos · Semana 3",
      mascoteUrl: mascote,
      falaFinal:
        "Você fechou a Semana 3! Próxima e última semana: CONECTAR — comparar a história com a sua vida. E aí vem o diploma final da Fase 8!",
    },
  ],
};

/* ============================================================
 * Curso — Fase 8 (Semanas 1-3 · 15 missões)
 * Próxima semana: Conectar + Diploma final "Leitor Estratégico"
 * ============================================================ */

export const cursoLerComAuroraFase8: CursoEI = {
  slug: "ler-com-aurora-fase8",
  serie: "pre2",
  serieLabel: "Pré II / 1º Ano (Compreensão)",
  titulo: "Compreensão Estratégica",
  descricao:
    "Prever, resumir, inferir e conectar. A criança vira detetive da história e aprende a pensar sobre o que lê.",
  corPrimaria: "#0ea5e9",
  corSecundaria: "#0c4a6e",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "f8-semana-01",
      numero: 1,
      titulo: "Semana 1 · Prever",
      subtitulo: "Detetive da História",
      aulas: [a1, a2, a3, a4, a5],
    },
    {
      slug: "f8-semana-02",
      numero: 2,
      titulo: "Semana 2 · Resumir",
      subtitulo: "Conta em uma frase",
      aulas: [a6, a7, a8, a9, a10],
    },
    {
      slug: "f8-semana-03",
      numero: 3,
      titulo: "Semana 3 · Inferir",
      subtitulo: "Detetive de Sentimentos",
      aulas: [a11, a12, a13, a14, a15],
    },
  ],
};

export function getAulaLerComAuroraFase8(slug: string): AulaEI | undefined {
  for (const u of cursoLerComAuroraFase8.unidades) {
    const found = u.aulas.find((a) => a.slug === slug);
    if (found) return found;
  }
  return undefined;
}
