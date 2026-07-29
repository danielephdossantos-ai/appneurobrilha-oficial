import type { AulaPortuguesV4 } from "../../types";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Aula 4 — Encontros difíceis (X/CH, G/J, S/Z, SS/Ç)
 * -------------------------------------------------------------
 * Unidade 2 · Oficina da Palavra
 * Foco: reconhecer letras/dígrafos que representam sons parecidos
 * (X x CH, G x J, S x Z entre vogais, SS x Ç) e memorizar por famílias
 * de palavras, evitando trocas comuns na escrita.
 * BNCC: EF04LP01, EF04LP02, EF35LP12
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-encontros-dificeis",
  titulo: "Encontros difíceis: X, CH, G, J, S, Z, SS, Ç",
  iconeTrilha: "🕵️",
  bncc: ["EF04LP01", "EF04LP02", "EF35LP12"],
  duracaoMin: 24,

  momento01_motivacao: {
    titulo: "O pântano das letras traiçoeiras",
    historia:
      "A expedição entrou num pântano onde as letras adoram pregar peças: X e CH fazem quase o mesmo som, G e J também se confundem, e S e Z, quando ficam ENTRE vogais, soam igualzinho! Até SS e Ç criam confusão. Brilha pisou com cuidado: — Aqui não dá pra confiar só no ouvido, exploradora. A gente precisa aprender truques e decorar famílias de palavras pra não cair nas armadilhas do pântano!",
    imagemUrl: mapa,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas do pântano antes de arriscar um palpite.",
    bloco: {
      titulo: "O Pântano das Letras Traiçoeiras",
      capaImagemUrl: bussola,
      pistas: [
        { imagemUrl: sapo, nome: "Um sapo" },
        { imagemUrl: caixa, nome: "Uma caixa" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        { texto: "Quais letras fazem sons parecidos e como não trocar uma pela outra na escrita.", imagemUrl: estrela },
        { texto: "Como pular igual a um sapo.", imagemUrl: sapo },
        { texto: "Quantas caixas cabem numa canoa.", imagemUrl: caixa },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos aprender a diferenciar letras que soam parecido, como X/CH, G/J, S/Z e SS/Ç.",
      feedbackErro:
        "Pense no pântano das letras traiçoeiras: é sobre sons parecidos que se escrevem de jeitos diferentes.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora conhece o significado das ferramentas antes de usá-las.",
    cards: [
      {
        palavra: "dígrafo",
        explicacao:
          "Duas letras juntas que representam UM SÓ SOM. CH é um dígrafo: junto, faz o som de 'X' de CHUVA.",
        exemplo: "Em CHAVE, as letras C e H formam um único som.",
        imagemUrl: livro,
      },
      {
        palavra: "entre vogais",
        explicacao:
          "Posição no meio da palavra, com uma vogal antes e outra depois. É aí que o S soa como Z: em CASA, o S entre as vogais A e A soa 'Z'.",
        exemplo: "Em CASA, o S faz som de Z: 'CA-ZA'.",
        imagemUrl: bussola,
      },
      {
        palavra: "cedilha",
        explicacao:
          "O rabinho embaixo do C (Ç) que faz o C soar como 'SS', mesmo perto de A, O e U — onde o C sozinho soaria 'K'.",
        exemplo: "Em AÇÚCAR, o Ç soa como SS: 'a-SSÚ-car'.",
        imagemUrl: estrela,
      },
      {
        palavra: "família de palavras",
        explicacao:
          "Grupo de palavras que vêm da mesma palavra de origem e por isso se escrevem parecido. Ajuda a memorizar a grafia certa.",
        exemplo: "CABEÇA, CABEÇUDO e CABEÇADA são da mesma família e todas usam Ç.",
        imagemUrl: arvore,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Ouvindo os sons parecidos",
    instrucao: "Ouça o Brilha comparando os pares de letras traiçoeiras.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "CHUVA e XÍCARA", explicacao: "CH e X podem fazer o MESMO som — não dá pra confiar só no ouvido." },
          { texto: "GIRAFA e JACARÉ", explicacao: "G (antes de E, I) e J podem soar igual." },
          { texto: "CASA e CAÇA", explicacao: "S entre vogais soa Z; Ç sempre soa como SS." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou os truques do pântano no diário de bordo.",
    leitura: {
      titulo: "O Diário do Pântano das Letras",
      imagemUrl: pergaminho,
      legendaImagem: "Página do diário de bordo",
      destacar: ["X", "CH", "G", "J", "S", "Z", "SS", "Ç"],
      paragrafos: [
        "X e CH podem soar exatamente igual, como em CHUVA e XÍCARA. Não existe uma regra perfeita, então o jeito é decorar por famílias: depois de ditongo (ai, ei, ou), quase sempre é X — CAIXA, FEIXE, BAIXO. E depois de 'en-', quase sempre é CH — ENCHER, ENXURRADA é uma das poucas exceções.",
        "G e J também se confundem antes de E e I, como em GIRAFA e JACARÉ. Truque de família: palavras terminadas em -AGEM, -IGEM, -UGEM usam G — VIAGEM, GARAGEM, FERRUGEM. Já palavras de origem indígena ou africana costumam usar J — JIBOIA, JERIMUM.",
        "O S sozinho, quando fica ENTRE DUAS VOGAIS, soa como Z: CASA soa 'CA-ZA', VASO soa 'VA-ZO'. Se quisermos o som de S puro entre vogais, escrevemos SS: ASSAR, PASSEIO. Por isso PASSAR (andar por um lugar) e PASSEIO usam SS.",
        "SS e Ç fazem o mesmo som, mas em lugares diferentes: SS aparece entre vogais (MASSA, PASSO), enquanto Ç aparece antes de A, O e U (AÇÚCAR, CABEÇA, LAÇO) — nunca antes de E ou I, porque aí o C sozinho já soa 'S' (CEDO, CINEMA).",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Segundo o texto, depois de um ditongo (como AI, EI, OU), qual letra costuma aparecer?",
        opcoes: ["X", "CH", "J"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Depois de ditongo, quase sempre é X, como em CAIXA e FEIXE.",
        feedbackErro: "Releia: 'depois de ditongo (ai, ei, ou), quase sempre é X — CAIXA, FEIXE, BAIXO'.",
        ondeEstaNoTexto: "depois de ditongo (ai, ei, ou), quase sempre é X",
      },
      {
        pergunta: "Palavras terminadas em -AGEM, -IGEM, -UGEM geralmente usam qual letra?",
        opcoes: ["J", "G", "X"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! -AGEM, -IGEM e -UGEM usam G, como em VIAGEM e FERRUGEM.",
        feedbackErro: "Releia: 'palavras terminadas em -AGEM, -IGEM, -UGEM usam G'.",
        ondeEstaNoTexto: "palavras terminadas em -AGEM, -IGEM, -UGEM usam G",
      },
      {
        pergunta: "Por que o S de CASA soa como Z, segundo o texto?",
        opcoes: [
          "Porque está entre duas vogais",
          "Porque a palavra é pequena",
          "Porque vem antes de A",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Entre vogais, o S sozinho soa Z.",
        feedbackErro: "Releia: 'O S sozinho, quando fica ENTRE DUAS VOGAIS, soa como Z'.",
        ondeEstaNoTexto: "O S sozinho, quando fica ENTRE DUAS VOGAIS, soa como Z",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem faz a descoberta e onde ela é registrada?",
    perguntas: [
      {
        pergunta: "Onde a expedição enfrentou as letras traiçoeiras?",
        opcoes: ["No pântano das letras traiçoeiras", "Numa praia deserta", "No topo de uma montanha"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A expedição entrou no pântano das letras traiçoeiras.",
        feedbackErro: "Releia a motivação: a expedição entrou num pântano.",
      },
      {
        pergunta: "Onde Brilha anotou os truques para vencer as letras traiçoeiras?",
        opcoes: ["No diário de bordo", "Numa placa de madeira", "Num bilhete jogado no rio"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Tudo foi registrado no diário de bordo.",
        feedbackErro: "Releia o título: 'O Diário do Pântano das Letras'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para decidir qual letra usar numa palavra difícil.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Fale a palavra em voz alta e ouça o som da letra duvidosa.", imagemUrl: bussola },
        { id: "p2", texto: "Veja em que posição da palavra o som aparece (entre vogais, antes de A/O/U etc.).", imagemUrl: mapa },
        { id: "p3", texto: "Lembre da regra ou da família de palavras parecidas.", imagemUrl: arvore },
        { id: "p4", texto: "Escreva a palavra e confira se ela combina com outras da mesma família.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa para atravessar o pântano das letras traiçoeiras.",
      feedbackErro: "Pense: primeiro se ouve o som, depois se observa a posição, depois se lembra a regra, e só então se escreve.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do diário e responda.",
    leitura: {
      titulo: "Mais Truques do Pântano",
      imagemUrl: livro,
      destacar: ["CABEÇA", "AÇÚCAR", "PASSEIO"],
      paragrafos: [
        "Brilha encontrou a palavra CABEÇA. Ela usa Ç porque o som de SS aparece antes de A — e Ç é a letra certa nessa posição, nunca C sozinho, que soaria diferente.",
        "Depois encontrou AÇÚCAR e PASSEIO. AÇÚCAR usa Ç antes de U, seguindo a mesma regra. Já PASSEIO usa SS porque o som de S puro está ENTRE VOGAIS (A e E) — se fosse só um S, o som viraria Z.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que CABEÇA usa Ç, segundo o texto?",
        opcoes: [
          "Porque o som de SS aparece antes de A, e Ç é a letra certa nessa posição",
          "Porque é uma palavra grande",
          "Porque termina em A",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ç aparece antes de A, O, U para manter o som de SS.",
        feedbackErro: "Releia: 'o som de SS aparece antes de A — e Ç é a letra certa nessa posição'.",
        ondeEstaNoTexto: "Ç é a letra certa nessa posição, nunca C sozinho",
      },
      {
        pergunta: "Por que PASSEIO usa SS e não apenas S, segundo o texto?",
        opcoes: [
          "Porque o som de S puro está entre vogais",
          "Porque a palavra é oxítona",
          "Porque termina em O",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Entre vogais, SS mantém o som de S puro; um S sozinho ali soaria Z.",
        feedbackErro: "Releia: 'PASSEIO usa SS porque o som de S puro está ENTRE VOGAIS'.",
        ondeEstaNoTexto: "PASSEIO usa SS porque o som de S puro está ENTRE VOGAIS",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Escolha a letra certa",
    instrucao: "Arraste cada palavra para o baú com a letra que completa corretamente.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Os Baús do Pântano",
      bloco: {
        instrucao: "Pense na regra ou na família da palavra antes de arrastar.",
        itens: [
          { id: "i1", texto: "cai_a (CAIXA)", alvoId: "x" },
          { id: "i2", texto: "en_er (ENCHER)", alvoId: "ch" },
          { id: "i3", texto: "via_em (VIAGEM)", alvoId: "g" },
          { id: "i4", texto: "jibói_ (JIBOIA)", alvoId: "j" },
          { id: "i5", texto: "ca_a (CASA, som de Z)", alvoId: "s" },
          { id: "i6", texto: "pa_eio (PASSEIO, som de S)", alvoId: "ss" },
          { id: "i7", texto: "a_úcar (AÇÚCAR)", alvoId: "c-cedilha" },
        ],
        alvos: [
          { id: "x", nome: "X", imagemUrl: mapa, descricao: "Depois de ditongo" },
          { id: "ch", nome: "CH", imagemUrl: livro, descricao: "Depois de EN-" },
          { id: "g", nome: "G", imagemUrl: arvore, descricao: "Terminação -AGEM/-IGEM/-UGEM" },
          { id: "j", nome: "J", imagemUrl: estrela, descricao: "Origem indígena/africana" },
          { id: "s", nome: "S", imagemUrl: bussola, descricao: "Entre vogais, soa Z" },
          { id: "ss", nome: "SS", imagemUrl: caixa, descricao: "Entre vogais, soa S" },
          { id: "c-cedilha", nome: "Ç", imagemUrl: sapo, descricao: "Antes de A, O, U" },
        ],
        feedbackAcerto: "🎉 Excelente! Você venceu o pântano das letras traiçoeiras.",
        feedbackErro: "Fale a palavra em voz alta e pense na posição da letra duvidosa antes de tentar de novo.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "X e CH podem soar igual; depois de ditongo costuma ser X, e depois de EN- costuma ser CH.",
      "G e J podem soar igual antes de E/I; -AGEM/-IGEM/-UGEM usam G.",
      "S entre vogais soa Z; SS entre vogais mantém o som de S. Ç aparece antes de A, O, U com som de SS.",
    ],
    miniDesafio: {
      pergunta: "Em VASO, por que o S soa como Z?",
      opcoes: [
        "Porque está entre duas vogais",
        "Porque a palavra é curta",
        "Porque vem antes de O sempre soa Z",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Essa é a regra de ouro do S entre vogais.",
      feedbackErro: "Releia a explicação: S entre vogais soa Z.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um dígrafo?",
        opcoes: ["Duas letras juntas que fazem um só som", "Uma palavra com acento", "Uma sílaba tônica"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! CH, por exemplo, é um dígrafo.",
        feedbackErro: "Lembre: dígrafo é quando duas letras juntas formam um único som, como CH.",
      },
      {
        pergunta: "2/5 — Depois de um ditongo, qual letra costuma aparecer: X ou CH?",
        opcoes: ["X", "CH", "As duas nunca aparecem"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Depois de ditongo, como em CAIXA, quase sempre é X.",
        feedbackErro: "Depois de ditongo (AI, EI, OU), quase sempre usamos X.",
      },
      {
        pergunta: "3/5 — Palavras como VIAGEM e GARAGEM terminam com qual letra?",
        opcoes: ["J", "G", "X"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! -AGEM usa G.",
        feedbackErro: "Lembre da família -AGEM/-IGEM/-UGEM: todas usam G.",
      },
      {
        pergunta: "4/5 — Em CASA, o S soa como...",
        opcoes: ["S", "Z", "CH"],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Entre vogais, o S soa Z.",
        feedbackErro: "Lembre: S entre vogais soa como Z.",
      },
      {
        pergunta: "5/5 — Antes de A, O e U, para manter o som de SS, usamos qual letra?",
        opcoes: ["S", "SS", "Ç"],
        correta: 2,
        feedbackAcerto: "🎉 Expedição concluída! Ç é usado antes de A, O, U para o som de SS.",
        feedbackErro: "Lembre: Ç aparece antes de A, O, U, como em AÇÚCAR e CABEÇA.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada às letras traiçoeiras",
    materiais: ["Papel e lápis", "Rótulos, livros ou revistas da casa"],
    passos: [
      "1) Junto com um adulto, procurem 6 palavras que tenham X, CH, G, J, S entre vogais, SS ou Ç.",
      "2) Falem cada palavra em voz alta e reparem no som exato de cada letra.",
      "3) Separem as palavras em grupos: X/CH, G/J, S/SS/Ç.",
      "4) Tentem pensar em mais uma palavra da mesma família de cada grupo.",
    ],
    registro: "📝 Uma foto da lista com os grupos de palavras, ou um áudio lendo cada palavra encontrada.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
    medalha: "🏅 Detetive das Letras",
  },
};
