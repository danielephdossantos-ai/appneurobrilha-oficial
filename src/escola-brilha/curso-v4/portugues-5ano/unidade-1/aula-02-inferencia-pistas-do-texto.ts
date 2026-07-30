import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as calendario } from "@/assets/neuro-treino/objetos/calendario.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";

/**
 * Aula 2 — Inferência: Pistas do Texto
 * -------------------------------------------------------------
 * Segunda investigação da Unidade 1 (O Detetive da Leitura). O
 * texto nunca diz tudo explicitamente — um bom leitor junta as
 * pistas espalhadas (palavras, detalhes, comportamentos) para
 * DEDUZIR o que não está escrito.
 *
 * BNCC: EF35LP04, EF05LP07
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-inferencia-pistas-do-texto",
  titulo: "Inferência: Pistas do Texto",
  iconeTrilha: "🔍",
  bncc: ["EF35LP04", "EF05LP07"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "As pistas invisíveis",
    historia:
      "Brilha espalhou lupas sobre a mesa. — Nem tudo num texto está escrito com letras. Às vezes o autor deixa PISTAS: um gesto, um cheiro, uma palavra escolhida com cuidado. E cabe a você, detetive, juntar essas pistas e DEDUZIR o que não foi dito diretamente. Isso se chama inferência: descobrir algo que o texto sugere, sem afirmar com todas as letras. Hoje vamos treinar esse faro investigativo.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Leia o bilhete encontrado sobre a mesa da cozinha. Ele não diz tudo — mas dá pistas suficientes para você deduzir o que aconteceu.",
    bloco: {
      titulo: "O Bilhete da Cozinha",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: calendario, nome: "Um relógio marcando cedo da manhã" },
        { imagemUrl: bloco, nome: "Uma mochila esquecida perto da porta" },
      ],
      recado: {
        rotulo: "Bilhete deixado na geladeira",
        icone: "📝",
        linhas: [
          "Filho, saí correndo, cheguei atrasada pro trabalho de novo!",
          "O pão está na mesa, mas não deu tempo de fazer o suco.",
          "Não esqueça a mochila hoje, viu?",
        ],
        estilo: "papel",
      },
      pergunta: "Com base nas pistas do bilhete, o que provavelmente aconteceu essa manhã?",
      hipoteses: [
        { texto: "A mãe acordou atrasada e saiu com pressa, sem tempo de terminar tudo" },
        { texto: "A mãe viajou de férias por uma semana" },
        { texto: "A mãe esqueceu completamente do filho em casa" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔍 Ótima dedução! O bilhete não diz 'eu estava atrasada e com pressa' com essas palavras exatas em tudo, mas as pistas — 'saí correndo', 'atrasada de novo', 'não deu tempo' — apontam para isso.",
      feedbackErro:
        "Releia o bilhete: as palavras 'saí correndo' e 'não deu tempo' são pistas de pressa e atraso, não de viagem ou esquecimento total.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras-chave para toda investigação de pistas.",
    cards: [
      {
        palavra: "inferência",
        explicacao:
          "É a dedução que fazemos juntando pistas do texto com o que já sabemos do mundo. O texto não diz tudo — o leitor completa as lacunas com lógica.",
        exemplo: "Se o texto diz 'ele tremia e batia os dentes', podemos inferir que ele estava com frio, mesmo sem a palavra 'frio' aparecer.",
        imagemUrl: lupa,
      },
      {
        palavra: "pista textual",
        explicacao:
          "É um detalhe do texto — uma palavra, uma ação, uma descrição — que ajuda o leitor a deduzir algo que não foi dito diretamente.",
        exemplo: "A frase 'ele guardou o guarda-chuva sem usar' é uma pista de que não choveu.",
        imagemUrl: bussola,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com atenção às pequenas pistas: elas escondem informações que o texto não afirma diretamente.",
    leitura: {
      titulo: "A Porta Trancada",
      imagemUrl: bussola,
      legendaImagem: "Nem tudo precisa ser dito com palavras para ser compreendido",
      destacar: ["luzes apagadas", "cartaz de 'fechado' na porta", "caixas empilhadas na calçada"],
      paragrafos: [
        "Marina passou de bicicleta pela padaria da esquina, como fazia todos os dias antes da escola. Mas hoje as luzes estavam apagadas, um cartaz de 'fechado' estava pendurado na porta e várias caixas de papelão vazias se empilhavam na calçada.",
        "Ela parou a bicicleta e observou por um instante. No poste ao lado, um papel novo anunciava um número de telefone para 'informações sobre o aluguel do imóvel'.",
        "Marina seguiu pedalando, pensativa. Sentiria falta do pão quentinho das manhãs de sábado.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "O que Marina viu na padaria naquele dia?",
        opcoes: [
          "Luzes apagadas, cartaz de fechado e caixas vazias na calçada",
          "Uma fila enorme de clientes",
          "Uma promoção de pães",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! O primeiro parágrafo descreve exatamente essa cena.",
        feedbackErro: "Releia o primeiro parágrafo: ele descreve luzes, cartaz e caixas.",
        ondeEstaNoTexto: "…as luzes estavam apagadas, um cartaz de 'fechado' estava pendurado na porta e várias caixas de papelão vazias se empilhavam na calçada.",
      },
      {
        pergunta: "O que estava anunciado no papel do poste?",
        opcoes: [
          "Um número para informações sobre o aluguel do imóvel",
          "Uma promoção de pão francês",
          "O horário de abertura da padaria",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! O segundo parágrafo cita esse anúncio.",
        feedbackErro: "Releia o segundo parágrafo: o papel fala sobre aluguel do imóvel.",
        ondeEstaNoTexto: "…um papel novo anunciava um número de telefone para 'informações sobre o aluguel do imóvel'.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora o trabalho fino do detetive: o texto NUNCA diz 'a padaria fechou para sempre' — mas as pistas apontam para isso.",
    perguntas: [
      {
        pergunta: "Juntando todas as pistas, o que provavelmente aconteceu com a padaria?",
        opcoes: [
          "A padaria fechou definitivamente e o imóvel está para alugar",
          "A padaria só fechou por um dia de feriado",
          "A padaria está reformando o telhado",
        ],
        correta: 0,
        feedbackAcerto:
          "🔍 Isso mesmo! Luzes apagadas + caixas vazias (mudança) + anúncio de aluguel do imóvel são pistas que, juntas, indicam que o negócio encerrou de vez.",
        feedbackErro:
          "Pense: um feriado não explicaria caixas vazias nem um anúncio de aluguel do imóvel. Essas duas pistas juntas sugerem um fechamento definitivo.",
      },
      {
        pergunta: "Por que o texto não diz diretamente 'a padaria fechou para sempre'?",
        opcoes: [
          "Porque o autor prefere que o leitor deduza isso juntando as pistas espalhadas no texto",
          "Porque isso não é importante para a história",
          "Porque o autor esqueceu de escrever essa informação",
        ],
        correta: 0,
        feedbackAcerto:
          "🔍 Correto! Bons textos confiam no leitor: em vez de explicar tudo, eles espalham pistas para que a conclusão seja descoberta, não apenas lida.",
        feedbackErro:
          "Releia: o texto tem pistas suficientes (luzes, caixas, anúncio) para que o leitor conclua sozinho — essa é a inferência em ação.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as pistas na ordem em que Marina as percebeu, do começo ao fim.",
    bloco: {
      instrucao: "Do começo ao fim da cena da padaria.",
      itens: [
        { id: "p1", texto: "Marina notou as luzes apagadas e o cartaz de 'fechado'.", imagemUrl: bussola },
        { id: "p2", texto: "Ela viu as caixas de papelão vazias na calçada.", imagemUrl: bloco },
        { id: "p3", texto: "Ela leu o anúncio de aluguel no poste ao lado.", imagemUrl: papel },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Perfeito! Você seguiu a ordem exata das pistas: primeiro o estranhamento, depois os detalhes que confirmam a suspeita.",
      feedbackErro: "Releia o texto com calma: Marina primeiro nota o estranho (luzes/cartaz), depois vê as caixas, e só então lê o anúncio.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e junte as pistas para deduzir o que o texto não diz diretamente.",
    leitura: {
      titulo: "O Casaco na Cadeira",
      imagemUrl: biblioteca,
      destacar: ["casaco molhado pendurado na cadeira", "guarda-chuva aberto secando no canto", "chinelos de dedo trocados por botas"],
      paragrafos: [
        "Quando Pedro chegou da escola, encontrou um casaco molhado pendurado na cadeira da cozinha. No canto, um guarda-chuva estava aberto, secando devagar sobre o jornal do dia.",
        "Perto da porta, os chinelos de dedo do irmão mais velho tinham sido trocados por um par de botas de couro, ainda com manchas de barro na sola.",
        "Pedro sorriu, pensando na trilha que o irmão adorava fazer nos fins de semana, mesmo quando o tempo não colaborava.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que o texto descreve na cozinha e perto da porta?",
        opcoes: [
          "Um casaco molhado, um guarda-chuva secando e botas com barro",
          "Uma mesa posta para o jantar",
          "Uma mochila de escola aberta",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Essas são exatamente as pistas descritas nos dois primeiros parágrafos.",
        feedbackErro: "Releia os dois primeiros parágrafos: eles descrevem casaco, guarda-chuva e botas.",
        ondeEstaNoTexto: "…encontrou um casaco molhado… um guarda-chuva estava aberto, secando…",
      },
      {
        pergunta: "Juntando as pistas, o que provavelmente aconteceu com o irmão de Pedro?",
        opcoes: [
          "Ele saiu na chuva, provavelmente para uma trilha, e voltou molhado e enlameado",
          "Ele ficou em casa o dia todo assistindo TV",
          "Ele viajou para outra cidade de avião",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Casaco molhado + guarda-chuva usado + botas com barro apontam para uma caminhada na chuva.",
        feedbackErro: "Pense: ficar em casa não explicaria roupas molhadas nem barro nas botas. As pistas indicam uma saída na chuva.",
        ondeEstaNoTexto: "Pedro sorriu, pensando na trilha que o irmão adorava fazer nos fins de semana…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Caça-Pistas: O que Podemos Deduzir?",
    instrucao: "Cada pista abaixo aponta para uma dedução. Arraste cada pista para a dedução correta.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Pista ou Dedução?",
      bloco: {
        instrucao: "Leia cada pista e decida a qual dedução ela pertence.",
        itens: [
          { id: "i1", texto: "O gato se escondeu debaixo da cama quando ouviu um trovão", alvoId: "medo" },
          { id: "i2", texto: "As folhas das plantas estavam murchas e a terra do vaso, rachada", alvoId: "sede" },
          { id: "i3", texto: "A criança bocejava sem parar e os olhos pesavam", alvoId: "sono" },
          { id: "i4", texto: "O prato estava vazio e o cachorro lambia os beiços", alvoId: "fome" },
        ],
        alvos: [
          { id: "medo", nome: "O bicho está com medo" },
          { id: "sede", nome: "A planta está com sede" },
          { id: "sono", nome: "A criança está com sono" },
          { id: "fome", nome: "O cachorro está com fome" },
        ],
        feedbackAcerto: "🔍 Isso! Você já sabe ligar uma pista concreta a uma dedução lógica, mesmo sem a palavra estar escrita.",
        feedbackErro: "Pense no que cada comportamento ou detalhe costuma indicar no mundo real — essa é a base da inferência.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "INFERÊNCIA é deduzir algo que o texto não diz diretamente, juntando pistas com o que já sabemos do mundo.",
      "Uma PISTA TEXTUAL pode ser uma palavra, uma ação, uma descrição de cenário — qualquer detalhe que sugira algo além do que está escrito.",
      "Boas inferências combinam VÁRIAS pistas, não apenas uma — quanto mais pistas apontam para a mesma direção, mais segura é a dedução.",
      "Nem toda inferência é garantida: é preciso checar se as pistas realmente sustentam a conclusão, ou se ela é só um chute.",
    ],
    miniDesafio: {
      pergunta: "Um texto diz: 'Ana entrou em casa pingando, torceu o cabelo e trocou de roupa correndo.' O que podemos inferir?",
      opcoes: [
        "Ana chegou em casa depois de pegar chuva ou se molhar de alguma forma",
        "Ana estava com fome",
        "Ana tinha acabado de acordar",
      ],
      correta: 0,
      feedbackAcerto: "🔍 Isso! 'Pingando' e 'torceu o cabelo' são pistas fortes de que ela se molhou.",
      feedbackErro: "Pense nas palavras 'pingando' e 'torceu o cabelo' — elas indicam água, não fome ou sono.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é 'inferência' na leitura?",
        opcoes: [
          "Copiar uma frase exata do texto",
          "Deduzir algo que o texto não diz diretamente, a partir de pistas",
          "Ler o texto em voz alta",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Inferência é dedução baseada em pistas.",
        feedbackErro: "Inferência não é copiar nem ler alto — é deduzir o que está implícito.",
      },
      {
        pergunta: "2/5 — O que é uma 'pista textual'?",
        opcoes: [
          "Um detalhe do texto que ajuda a deduzir algo não dito diretamente",
          "O título do texto",
          "A última frase do texto, sempre",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Correto! A pista é qualquer detalhe que sugere algo além do que está escrito.",
        feedbackErro: "A pista pode estar em qualquer parte do texto, não só no título ou na última frase.",
      },
      {
        pergunta: "3/5 — No texto da padaria, qual pista sugeria que o fechamento era definitivo?",
        opcoes: [
          "O anúncio de aluguel do imóvel no poste",
          "A cor da porta da padaria",
          "O horário em que Marina passou de bicicleta",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! O anúncio de aluguel é a pista mais forte de fechamento definitivo.",
        feedbackErro: "Releia: a pista decisiva era o anúncio de 'informações sobre o aluguel do imóvel'.",
      },
      {
        pergunta: "4/5 — 'O menino chegou com a camisa do time e o rosto pintado.' O que podemos inferir?",
        opcoes: [
          "Ele provavelmente foi assistir a um jogo do time",
          "Ele acabou de sair da cama",
          "Ele estava estudando para uma prova",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Camisa do time + rosto pintado são pistas fortes de que ele foi a um jogo.",
        feedbackErro: "Pense: essas pistas (camisa e pintura) são típicas de torcedores indo a um jogo.",
      },
      {
        pergunta: "5/5 — Por que juntar VÁRIAS pistas torna uma inferência mais segura?",
        opcoes: [
          "Porque quanto mais pistas apontam na mesma direção, menor a chance de a dedução estar errada",
          "Porque o texto fica mais longo",
          "Porque isso não muda nada na segurança da dedução",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Você concluiu a investigação com faro afiado. Caso encerrado! 🌟",
        feedbackErro: "Uma única pista pode ser coincidência; várias pistas na mesma direção tornam a dedução mais confiável.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caça-pistas em casa",
    materiais: ["Um cômodo da casa", "Papel e lápis"],
    passos: [
      "1) Escolha um cômodo da casa (cozinha, sala, quarto) sem avisar ninguém.",
      "2) Observe 3 pistas nesse cômodo (objetos fora do lugar, roupas, cheiros) e anote.",
      "3) A partir dessas pistas, deduza o que aconteceu ali recentemente (alguém comeu algo? alguém saiu com pressa?).",
      "4) Conte sua dedução para um adulto da casa e verifique se você acertou!",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'As pistas que encontrei foram ___, e eu deduzi que ___.'",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "Lupa de Prata",
  },
};
