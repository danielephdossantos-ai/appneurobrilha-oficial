import type { AulaPortuguesV4 } from "../../types";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as bau } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as cadeira } from "@/assets/neuro-treino/objetos/cadeira.png.asset.json";
import { url as quebraCabeca } from "@/assets/neuro-treino/objetos/quebra-cabeca.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as tambor } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";

/**
 * Aula 3 — M antes de P e B
 * -------------------------------------------------------------
 * Unidade 2 · Laboratório da Ortografia
 * Foco: som nasal antes de P/B sempre se escreve com M; nos demais
 * casos (antes de outras consoantes ou no fim de sílaba), usa-se N.
 * BNCC: EF03LP01, EF03LP02, EF03LP03, EF03LP05, EF03LP06
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-m-antes-de-p-e-b",
  titulo: "M antes de P e B",
  iconeTrilha: "🧭",
  bncc: ["EF03LP01", "EF03LP02", "EF03LP03", "EF03LP05", "EF03LP06"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A pegada nasal na ponte",
    historia:
      "Brilha encontrou um bilhete rasgado perto da ponte: '...CA_PO... TA_BOR... PO_TE...'. Faltavam letras nasais! — Aurora, o vento levou justamente as letras M e N — disse Brilha. — Interessante — respondeu Aurora. — Existe uma regra que decide qual delas usar. Vamos reconstruir o bilhete?",
    imagemUrl: coruja,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de reconstruir o bilhete.",
    bloco: {
      titulo: "O Caso das Letras Nasais Perdidas",
      capaImagemUrl: ponte,
      pistas: [
        { imagemUrl: tambor, nome: "Um tambor" },
        { imagemUrl: ponte, nome: "Uma ponte" },
      ],
      pergunta: "Sobre o que os detetives vão investigar?",
      hipoteses: [
        { texto: "Quando usar M e quando usar N no meio das palavras.", imagemUrl: tambor },
        { texto: "Como construir uma ponte de madeira.", imagemUrl: ponte },
        { texto: "Por que o vento é forte perto de pontes.", imagemUrl: ponte },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! O caso é sobre a regra do M e do N no meio das palavras.",
      feedbackErro: "Releia: 'faltavam letras nasais... existe uma regra que decide qual delas usar'.",
      dica: "🔎 Pista: lembre do que significa “campo” — Antes de P, o som nasal se escreve sempre com M, nunca com N. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça duas palavras-testemunha do caso.",
    cards: [
      {
        palavra: "campo",
        explicacao: "Antes de P, o som nasal se escreve sempre com M, nunca com N.",
        exemplo: "O time jogou bola no campo.",
        imagemUrl: bola,
      },
      {
        palavra: "tambor",
        explicacao: "Antes de B, também usamos sempre M para o som nasal.",
        exemplo: "O tambor fez um barulho forte.",
        imagemUrl: tambor,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora reconstruiu a regra com o clube. Leia com atenção.",
    leitura: {
      titulo: "O Segredo do M e do N",
      imagemUrl: ponte,
      legendaImagem: "A ponte das letras nasais",
      destacar: ["CAMPO", "TAMBOR", "PONTE", "antes de P", "antes de B"],
      paragrafos: [
        "Aurora explicou: 'Toda vez que o som nasal vem ANTES de P ou de B, a regra é clara: escrevemos com M. Por isso é CAMPO, e não CANPO; é TAMBOR, e não TANBOR.'",
        "'Já nos demais casos — antes de outras consoantes, como T, D, C ou no fim da sílaba — usamos N. É por isso que escrevemos PONTE, DANÇA e CANTOR, todos com N.'",
        "Brilha repetiu em voz alta: 'M antes de P e B. N nos demais casos.' O bilhete rasgado finalmente fazia sentido: CAMPO, TAMBOR e PONTE.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Segundo o texto, quando usamos sempre M?",
        opcoes: ["Antes de P ou B", "Antes de T ou D", "No fim de qualquer palavra"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'sempre que o som nasal vem antes de P ou de B... escrevemos com M'.",
        feedbackErro: "Releia: 'toda vez que o som nasal vem ANTES de P ou de B... escrevemos com M'.",
        ondeEstaNoTexto: "Toda vez que o som nasal vem ANTES de P ou de B... escrevemos com M.",
        dica: "🔎 Pista: releia no texto o trecho “Toda vez que o som nasal vem ANTES de P ou de B... escrevemos com M.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “Segundo o texto, quando usamos sempre M?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Qual letra usamos antes de T, D ou C, como em PONTE?",
        opcoes: ["M", "N", "Nenhuma"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Nos demais casos, usamos N.",
        feedbackErro: "O texto diz: 'nos demais casos... usamos N. É por isso que escrevemos PONTE'.",
        ondeEstaNoTexto: "usamos N. É por isso que escrevemos PONTE, DANÇA e CANTOR.",
        dica: "🔎 Pista: releia no texto o trecho “usamos N. É por isso que escrevemos PONTE, DANÇA e CANTOR.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “Qual letra usamos antes de T, D ou C, como em PONTE?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Por que CAMPO se escreve com M e não com N?",
        opcoes: [
          "Porque o M vem antes do P",
          "Porque a palavra é grande",
          "Porque não existe regra",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O M sempre aparece antes de P.",
        feedbackErro: "Releia: 'é CAMPO, e não CANPO' — porque antes de P usamos M.",
        ondeEstaNoTexto: "é CAMPO, e não CANPO; é TAMBOR, e não TANBOR.",
        dica: "🔎 Pista: releia no texto o trecho “é CAMPO, e não CANPO; é TAMBOR, e não TANBOR.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “Por que CAMPO se escreve com M e não com N?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem investiga e onde acontece a cena?",
    perguntas: [
      {
        pergunta: "Quem encontrou o bilhete rasgado?",
        opcoes: ["Aurora", "Brilha", "Um passarinho"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Foi Brilha quem encontrou o bilhete.",
        feedbackErro: "Releia a história: 'Brilha encontrou um bilhete rasgado perto da ponte'.",
        dica: "🔎 Pista: lembre do que significa “campo” — Antes de P, o som nasal se escreve sempre com M, nunca com N. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “Quem encontrou o bilhete rasgado?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Onde o bilhete foi encontrado?",
        opcoes: ["Perto da ponte", "Dentro da biblioteca", "No campo de futebol"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Foi 'perto da ponte'.",
        feedbackErro: "A motivação diz: 'Brilha encontrou um bilhete rasgado perto da ponte'.",
        dica: "🔎 Pista: lembre do que significa “campo” — Antes de P, o som nasal se escreve sempre com M, nunca com N. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “Onde o bilhete foi encontrado?” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As descobertas se embaralharam. Ordene a investigação.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Brilha acha o bilhete rasgado com letras faltando.", imagemUrl: bau },
        { id: "p2", texto: "Aurora explica a regra do M antes de P e B, e do N nos demais casos.", imagemUrl: coruja },
        { id: "p3", texto: "Brilha reconstrói o bilhete: CAMPO, TAMBOR e PONTE.", imagemUrl: quebraCabeca },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você reconstruiu a investigação na ordem certa.",
      feedbackErro: "Pense: primeiro a PISTA (o bilhete), depois a EXPLICAÇÃO, e por último a RECONSTRUÇÃO.",
      dica: "🔎 Pista: lembre do que significa “campo” — Antes de P, o som nasal se escreve sempre com M, nunca com N. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do caderno de Brilha.",
    leitura: {
      titulo: "Mais Palavras Nasais",
      imagemUrl: estrela,
      destacar: ["bomba", "dança", "sombra"],
      paragrafos: [
        "Brilha testou mais palavras: BOMBA tem M porque vem antes de B. SOMBRA também tem M, antes de B.",
        "Já DANÇA tem N, porque o som nasal ali vem antes de Ç, e não de P ou B — por isso segue a regra do 'demais casos'.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que BOMBA se escreve com M?",
        opcoes: [
          "Porque o M vem antes de B",
          "Porque é uma palavra comprida",
          "Porque começa com B",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! M antes de B, sempre.",
        feedbackErro: "Releia: 'BOMBA tem M porque vem antes de B'.",
        ondeEstaNoTexto: "BOMBA tem M porque vem antes de B.",
        dica: "🔎 Pista: releia no texto o trecho “BOMBA tem M porque vem antes de B.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “Por que BOMBA se escreve com M?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Por que DANÇA se escreve com N?",
        opcoes: [
          "Porque o som nasal vem antes de Ç, não de P ou B",
          "Porque termina em A",
          "Porque não tem regra nenhuma",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Antes de Ç, usamos N — regra dos demais casos.",
        feedbackErro: "O texto diz: 'o som nasal ali vem antes de Ç, e não de P ou B'.",
        ondeEstaNoTexto: "o som nasal ali vem antes de Ç, e não de P ou B.",
        dica: "🔎 Pista: releia no texto o trecho “o som nasal ali vem antes de Ç, e não de P ou B.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “Por que DANÇA se escreve com N?” com essa ideia na cabeça.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Reconstrua as palavras nasais",
    instrucao: "Arraste cada palavra para a letra certa: M ou N.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "O Cofre do M e do N",
      bloco: {
        instrucao: "Veja qual consoante vem depois do som nasal antes de arrastar.",
        itens: [
          { id: "i1", texto: "campo", alvoId: "m" },
          { id: "i2", texto: "ponte", alvoId: "n" },
          { id: "i3", texto: "tambor", alvoId: "m" },
          { id: "i4", texto: "dança", alvoId: "n" },
          { id: "i5", texto: "bomba", alvoId: "m" },
          { id: "i6", texto: "cantor", alvoId: "n" },
          { id: "i7", texto: "sombra", alvoId: "m" },
          { id: "i8", texto: "ninho", alvoId: "n" },
        ],
        alvos: [
          { id: "m", nome: "M (antes de P ou B)", imagemUrl: tambor },
          { id: "n", nome: "N (nos demais casos)", imagemUrl: ponte },
        ],
        feedbackAcerto: "🎉 Bilhete reconstruído! Você domina a regra do M e do N.",
        feedbackErro: "Pense de novo: M só antes de P e B; nos demais casos, é sempre N.",
        dica: "🔎 Pista: lembre do que significa “campo” — Antes de P, o som nasal se escreve sempre com M, nunca com N. Use isso para eliminar as alternativas que não combinam.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "REGRA: antes de P e B, o som nasal SEMPRE se escreve com M (campo, tambor, bomba).",
      "REGRA: nos demais casos, usamos N (ponte, dança, cantor).",
      "Bom detetive olha a letra que vem DEPOIS do som nasal antes de decidir M ou N.",
    ],
    miniDesafio: {
      pergunta: "Qual é a regra do M antes de P e B?",
      opcoes: [
        "Antes de P e B, usamos sempre M; nos demais casos, N",
        "M e N podem ser usados em qualquer lugar",
        "Só se usa N antes de P e B",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Essa é a regra-chave da aula.",
      feedbackErro: "Releia a explicação da Aurora: M é exclusivo antes de P e B.",
      dica: "🔎 Pista: lembre do que significa “campo” — Antes de P, o som nasal se escreve sempre com M, nunca com N. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “Qual é a regra do M antes de P e B?” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Antes de qual letra usamos SEMPRE o M?",
        opcoes: ["Antes de T", "Antes de P ou B", "Antes de qualquer vogal"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! M antes de P e B, sempre.",
        feedbackErro: "Lembre: M é exclusivo antes de P e B.",
        dica: "🔎 Pista: lembre do que significa “campo” — Antes de P, o som nasal se escreve sempre com M, nunca com N. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “1/5 — Antes de qual letra usamos SEMPRE o M?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — Como se escreve o som nasal em PONTE?",
        opcoes: ["Com M", "Com N", "Sem letra nasal"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Antes de T usamos N.",
        feedbackErro: "PONTE tem T depois do som nasal — por isso é N, não M.",
        dica: "🔎 Pista: lembre do que significa “campo” — Antes de P, o som nasal se escreve sempre com M, nunca com N. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “2/5 — Como se escreve o som nasal em PONTE?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — Por que CAMPO tem M?",
        opcoes: ["Porque vem antes de P", "Porque é uma palavra grande", "Por acaso"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! M sempre antes de P.",
        feedbackErro: "Lembre a regra: antes de P, é sempre M.",
        dica: "🔎 Pista: lembre do que significa “campo” — Antes de P, o som nasal se escreve sempre com M, nunca com N. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “3/5 — Por que CAMPO tem M?” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — Qual dessas palavras usa N corretamente?",
        opcoes: ["Dança", "Bomba", "Tambor"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! DANÇA usa N porque vem antes de Ç.",
        feedbackErro: "Pense: quais dessas têm P ou B depois do som nasal? Só uma não tem.",
        dica: "🔎 Pista: lembre do que significa “campo” — Antes de P, o som nasal se escreve sempre com M, nunca com N. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “4/5 — Qual dessas palavras usa N corretamente?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — Complete a regra: 'M antes de P e B, N ___.'",
        opcoes: ["nos demais casos", "nunca mais", "só às vezes"],
        correta: 0,
        feedbackAcerto: "🎉 Caso encerrado! M antes de P e B, N nos demais casos.",
        feedbackErro: "Essa é a frase-regra da aula: 'M antes de P e B, N nos demais casos'.",
        dica: "🔎 Pista: lembre do que significa “campo” — Antes de P, o som nasal se escreve sempre com M, nunca com N. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: campo — Antes de P, o som nasal se escreve sempre com M, nunca com N. Exemplo: O time jogou bola no campo. Agora volte à pergunta “5/5 — Complete a regra: 'M antes de P e B, N ___.'” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada às letras nasais",
    materiais: ["Papel e lápis", "Livros, rótulos ou embalagens da casa"],
    passos: [
      "1) Com um adulto, procurem 6 palavras com som nasal no meio (M ou N).",
      "2) Separem em duas colunas: 'M antes de P/B' e 'N nos demais casos'.",
      "3) Para cada palavra, digam em voz alta qual letra vem depois do som nasal.",
      "4) Confiram juntos se a regra bateu certinho.",
    ],
    registro: "📝 Uma foto da tabela com as duas colunas preenchidas.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
