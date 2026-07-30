import type { AulaPortuguesV4 } from "../../types";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as bau } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as quebraCabeca } from "@/assets/neuro-treino/objetos/quebra-cabeca.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";

/**
 * Aula 3 — Ortografia de uso
 * -------------------------------------------------------------
 * Unidade 2 · Oficina das Palavras (5º ano)
 * Foco: pares que confundem — S/SS, Ç/C, X/CH, G/J, RR/R — palavras
 * que a regra não resolve sozinha: exige memória e contexto.
 * BNCC: EF05LP07, EF35LP13
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-ortografia-de-uso",
  titulo: "Ortografia de uso",
  iconeTrilha: "🦉",
  bncc: ["EF05LP07", "EF35LP13"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "As letras gêmeas",
    historia:
      "A coruja sábia da oficina pousou na bancada com um quebra-cabeça esquisito: peças que pareciam iguais, mas não eram. — Tem letras que fazem o MESMO som, mas se escrevem diferente! S e SS, Ç e C, X e CH, G e J, RR e R. Não existe regra mágica pra todas: às vezes é preciso conhecer a palavra e prestar atenção no contexto. Vamos treinar o olho da coruja?",
    imagemUrl: coruja,
  },

  momento02_previsao: {
    instrucao: "Observe o quebra-cabeça de letras antes de começar.",
    bloco: {
      titulo: "O Quebra-Cabeça das Letras Gêmeas",
      capaImagemUrl: bau,
      pistas: [
        { imagemUrl: coruja, nome: "Uma coruja" },
        { imagemUrl: quebraCabeca, nome: "Um quebra-cabeça" },
      ],
      pergunta: "Sobre o que essa parte da oficina vai ensinar?",
      hipoteses: [
        { texto: "Palavras que têm o mesmo som mas se escrevem com letras diferentes.", imagemUrl: quebraCabeca },
        { texto: "Como corujas enxergam de noite.", imagemUrl: coruja },
        { texto: "Como montar um quebra-cabeça de 500 peças.", imagemUrl: quebraCabeca },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso mesmo! Vamos treinar o olho para escolher a letra certa entre sons parecidos.",
      feedbackErro: "Pense nas 'letras gêmeas' que a coruja mostrou: S/SS, Ç/C, X/CH, G/J, RR/R.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça os pares de letras antes de treinar.",
    cards: [
      {
        palavra: "S e SS",
        explicacao: "Entre vogais, o som de 'ss' (sempre) se escreve SS; o som de 'z' (casa) se escreve S.",
        exemplo: "PASSAR (som de SS) e CASA (som de Z, mas escrito com S).",
        imagemUrl: caixa,
      },
      {
        palavra: "Ç e C",
        explicacao: "O Ç só aparece antes de A, O, U (moça, laço, açúcar). O C sozinho, antes de E ou I, já faz esse som (cidade, cedo).",
        exemplo: "CRIANÇA usa Ç antes de A; CEBOLA usa C antes de E.",
        imagemUrl: lapis,
      },
      {
        palavra: "X e CH",
        explicacao: "Ambos podem fazer o mesmo som de 'X' chiado. Não há regra fixa: PEIXE usa X, mas CHUVA usa CH. É preciso memorizar.",
        exemplo: "MOCHILA tem CH; XÍCARA tem X — o som é parecido, a escrita não.",
        imagemUrl: livro,
      },
      {
        palavra: "G e J",
        explicacao: "Antes de E ou I, o som pode ser escrito com G (gente, gigante) ou J (jeito, jiló) — depende da palavra.",
        exemplo: "GIRAFA usa G; JIBOIA usa J, mesmo som antes de I.",
        imagemUrl: estrela,
      },
      {
        palavra: "RR e R",
        explicacao: "Entre vogais, o som forte do R se escreve RR (carro); no começo da palavra, um R só já faz esse som (rato).",
        exemplo: "CACHORRO tem RR entre vogais; RATO tem R só no começo.",
        imagemUrl: pergaminho,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Comparando os sons parecidos",
    instrucao: "Ouça o Brilha comparando pares de palavras.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "CASA (som de Z) x PASSAR (som de SS)", explicacao: "Mesma letra base, sons diferentes conforme a posição." },
          { texto: "MOCHILA (CH) x XÍCARA (X)", explicacao: "Som parecido, escrita diferente — exige memória." },
          { texto: "RATO (R) x CACHORRO (RR)", explicacao: "R forte entre vogais vira RR." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha e a coruja registraram as pistas no diário da oficina.",
    leitura: {
      titulo: "O Diário das Letras Gêmeas",
      imagemUrl: pergaminho,
      legendaImagem: "Página sobre ortografia de uso",
      destacar: ["contexto", "memória", "regra"],
      paragrafos: [
        "Algumas trocas de letras seguem uma regra clara: o Ç só aparece antes de A, O, U, nunca antes de E ou I. Assim, escrevemos MOÇA, LAÇO, AÇÚCAR com Ç, mas CEBOLA e CIDADE com C, pois o C sozinho já faz esse som antes de E e I.",
        "Outra regra útil: entre duas vogais, o som forte do R se escreve RR (CARRO, TERRA), e o som fraco do S vira Z, mas continua escrito com S (CASA, MESA). Já o som forte do S entre vogais precisa de SS (PASSEIO, MASSA).",
        "Mas nem toda troca tem regra fixa. X e CH podem fazer o mesmo som chiado, e só o uso e a memória dizem qual usar: XÍCARA tem X, MOCHILA tem CH. O mesmo vale para G e J antes de E, I: GENTE tem G, JEITO tem J — sem regra que decida sozinha.",
        "Por isso, quando a regra não resolve, o segredo é: ler bastante, prestar atenção na palavra escrita e, na dúvida, checar no dicionário.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar.",
    perguntas: [
      {
        pergunta: "Antes de quais letras o Ç NUNCA aparece?",
        opcoes: ["E e I", "A e O", "U e A", "Todas as vogais"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ç só aparece antes de A, O, U — nunca antes de E ou I.",
        feedbackErro: "Releia: 'o Ç só aparece antes de A, O, U, nunca antes de E ou I'.",
        ondeEstaNoTexto: "o Ç só aparece antes de A, O, U, nunca antes de E ou I",
      },
      {
        pergunta: "Segundo o texto, quando X e CH não têm regra fixa, o que resolve a dúvida?",
        opcoes: ["Leitura, atenção e dicionário", "Sempre usar X", "Sempre usar CH", "Contar as letras da palavra"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Ler, prestar atenção e checar no dicionário ajudam quando não há regra.",
        feedbackErro: "Releia: 'o segredo é: ler bastante, prestar atenção... e, na dúvida, checar no dicionário'.",
        ondeEstaNoTexto: "ler bastante, prestar atenção na palavra escrita e, na dúvida, checar no dicionário",
      },
      {
        pergunta: "Por que CARRO se escreve com RR?",
        opcoes: [
          "Porque o R está entre duas vogais com som forte",
          "Porque toda palavra grande tem RR",
          "Porque começa com C",
          "Porque é um substantivo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Som forte de R entre vogais pede RR.",
        feedbackErro: "Releia: 'entre duas vogais, o som forte do R se escreve RR'.",
        ondeEstaNoTexto: "entre duas vogais, o som forte do R se escreve RR",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem apresentou o desafio e onde ele foi registrado?",
    perguntas: [
      {
        pergunta: "Quem trouxe o quebra-cabeça de letras gêmeas para a oficina?",
        opcoes: ["A coruja sábia", "Um dragão", "Um robô", "Um passarinho"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A coruja pousou na bancada com o desafio.",
        feedbackErro: "Releia a motivação: quem pousou na bancada foi a coruja sábia.",
      },
      {
        pergunta: "Onde as pistas sobre as letras gêmeas foram anotadas?",
        opcoes: ["No diário da oficina", "Num cartaz da rua", "Numa embalagem", "Num bilhete perdido"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Ficou registrado no diário das letras gêmeas.",
        feedbackErro: "Releia o título: 'O Diário das Letras Gêmeas'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para decidir qual letra usar numa dúvida ortográfica.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Observe se existe uma regra fixa para o caso (como Ç antes de A/O/U).", imagemUrl: lapis },
        { id: "p2", texto: "Se houver regra, aplique-a.", imagemUrl: estrela },
        { id: "p3", texto: "Se não houver regra fixa (X/CH, G/J), pense se já viu a palavra escrita antes.", imagemUrl: quebraCabeca },
        { id: "p4", texto: "Na dúvida, consulte o dicionário.", imagemUrl: livro },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho certo para resolver dúvidas ortográficas.",
      feedbackErro: "Pense: primeiro se busca a regra, e só quando não há regra é que se usa memória e dicionário.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do diário e responda.",
    leitura: {
      titulo: "Mais Pistas da Coruja",
      imagemUrl: livro,
      destacar: ["PASSEIO", "GIRAFA", "TESOURA"],
      paragrafos: [
        "Brilha encontrou PASSEIO. O som de SS entre vogais aparece porque o som é forte, diferente de CASA, que tem som fraco (de Z) mas continua com S.",
        "Depois encontrou GIRAFA, com G antes de I fazendo som suave, e TESOURA, escrita com S mesmo fazendo som de Z entre vogais — mais uma prova de que é preciso conhecer a palavra.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que PASSEIO tem SS, segundo o texto?",
        opcoes: [
          "Porque o som entre as vogais é forte",
          "Porque é uma palavra longa",
          "Porque termina em O",
          "Porque tem cinco sílabas",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Som forte entre vogais pede SS.",
        feedbackErro: "Releia: 'O som de SS entre vogais aparece porque o som é forte'.",
        ondeEstaNoTexto: "O som de SS entre vogais aparece porque o som é forte",
      },
      {
        pergunta: "O que TESOURA mostra sobre o uso do S, segundo o texto?",
        opcoes: [
          "Que o S pode fazer som de Z entre vogais e mesmo assim continuar sendo S",
          "Que toda palavra com S tem som forte",
          "Que TESOURA deveria ser escrita com Z",
          "Que o S nunca faz som de Z",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! É preciso conhecer a palavra, não só o som.",
        feedbackErro: "Releia: 'escrita com S mesmo fazendo som de Z entre vogais — mais uma prova de que é preciso conhecer a palavra'.",
        ondeEstaNoTexto: "escrita com S mesmo fazendo som de Z entre vogais",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Escolha a letra certa",
    instrucao: "Selecione apenas as palavras escritas corretamente.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "O Teste do Olho da Coruja",
      bloco: {
        instrucao: "Leia cada palavra com atenção antes de marcar.",
        pergunta: "Quais destas palavras estão escritas CORRETAMENTE?",
        opcoes: [
          { id: "o1", texto: "moça", correto: true },
          { id: "o2", texto: "moça (com Ç antes de A)", correto: true },
          { id: "o3", texto: "cesouras", correto: false },
          { id: "o4", texto: "mochila", correto: true },
          { id: "o5", texto: "chirafa", correto: false },
          { id: "o6", texto: "cachorro", correto: true },
          { id: "o7", texto: "caro (querendo dizer veículo)", correto: false },
          { id: "o8", texto: "xícara", correto: true },
        ],
        feedbackAcerto: "🎉 Muito bem! Seu olho de coruja está afiado.",
        feedbackErro: "Reveja as regras: Ç antes de A/O/U, RR entre vogais com som forte, e memorize X/CH e G/J.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Ç só aparece antes de A, O, U. C sozinho já faz esse som antes de E, I.",
      "Entre vogais: som forte de S é SS; som forte de R é RR.",
      "X/CH e G/J muitas vezes não têm regra fixa: exigem memória, leitura e dicionário.",
    ],
    miniDesafio: {
      pergunta: "Por que CRIANÇA se escreve com Ç e não com C?",
      opcoes: [
        "Porque o Ç vem antes de A, seguindo a regra",
        "Porque C nunca aparece em palavras grandes",
        "Porque toda palavra com R tem Ç",
        "Por acaso, sem nenhum motivo",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Ç aparece antes de A, O, U.",
      feedbackErro: "Releia a regra: Ç só aparece antes de A, O, U.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Antes de qual vogal o Ç pode aparecer?",
        opcoes: ["A", "E", "I", "Nenhuma"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ç aparece antes de A, O, U.",
        feedbackErro: "Lembre: Ç nunca vem antes de E ou I.",
      },
      {
        pergunta: "2/5 — Qual dessas palavras usa CH e não X, e precisa ser memorizada?",
        opcoes: ["Mochila", "Xícara", "Táxi", "Roxo"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! MOCHILA usa CH.",
        feedbackErro: "MOCHILA é escrita com CH — não há regra, é memória.",
      },
      {
        pergunta: "3/5 — Entre duas vogais, o som forte do R se escreve...",
        opcoes: ["RR", "R só", "Rh", "Não existe essa regra"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! CARRO, TERRA — som forte entre vogais é RR.",
        feedbackErro: "Lembre da regra: som forte de R entre vogais é RR.",
      },
      {
        pergunta: "4/5 — CASA é escrita com S mesmo o som sendo de Z porque...",
        opcoes: [
          "É a grafia correta da palavra, mesmo com som de Z",
          "Deveria ser escrita com Z",
          "É um erro comum aceito",
          "Toda palavra com A tem S",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Nem sempre o som corresponde exatamente à letra — é preciso conhecer a palavra.",
        feedbackErro: "CASA tem som de Z mas é escrita corretamente com S — é uma questão de grafia da palavra.",
      },
      {
        pergunta: "5/5 — Quando a regra não resolve uma dúvida ortográfica (como X/CH), o melhor caminho é...",
        opcoes: [
          "Ler bastante e checar no dicionário",
          "Escolher a letra que parecer mais bonita",
          "Sempre usar X",
          "Sempre usar CH",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Oficina dominada! Leitura, memória e dicionário resolvem o que a regra não resolve.",
        feedbackErro: "Releia: ler bastante e, na dúvida, checar no dicionário.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada às letras gêmeas",
    materiais: ["Papel e lápis", "Um dicionário (livro ou celular)"],
    passos: [
      "1) Com um adulto, procurem em casa 3 palavras com Ç e 3 com C antes de E/I.",
      "2) Procurem 2 palavras com X e 2 com CH que façam som parecido.",
      "3) Escolham uma palavra difícil e consultem juntos no dicionário para confirmar a grafia.",
      "4) Conversem sobre qual regra ajudou e qual precisou de memória.",
    ],
    registro: "📝 Uma foto da lista de palavras com as letras destacadas, ou um áudio explicando cada escolha.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
