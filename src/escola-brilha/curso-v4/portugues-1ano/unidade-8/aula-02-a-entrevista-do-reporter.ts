import type { AulaPortuguesV4 } from "../../types";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as bibliotecario } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as cozinheira } from "@/assets/neuro-treino/objetos/cozinheira.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";

/**
 * Unidade 8 — Aula 2: A Entrevista do Repórter
 * -------------------------------------------------------------
 * Planejar perguntas, entrevistar alguém da escola e repassar a
 * resposta oralmente (áudio/vídeo com ajuda do adulto).
 *
 * BNCC: EF01LP23 (entrevista repassada oralmente por ferramenta digital)
 *       EF01LP22 (planejar e produzir entrevista) · EF01LP09 (oralidade)
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-a-entrevista-do-reporter",
  titulo: "A Entrevista do Repórter",
  iconeTrilha: "🎤",
  bncc: ["EF01LP23", "EF01LP22", "EF01LP09"],
  duracaoMin: 16,

  momento01_motivacao: {
    titulo: "Quem pergunta, descobre!",
    historia:
      "Brilha quer saber como a merenda da escola fica tão gostosa. Ele não inventou a resposta: foi lá e PERGUNTOU para a cozinheira. Isso chama ENTREVISTA — a gente faz perguntas para alguém e escuta a resposta com atenção. Depois pode gravar e mostrar para a turma!",
    imagemUrl: cozinheira,
  },

  momento02_previsao: {
    instrucao: "Olhe as perguntas que Brilha anotou.",
    bloco: {
      titulo: "Perguntas do repórter",
      capaImagemUrl: papel,
      recado: {
        rotulo: "Bloco de perguntas",
        icone: "🎤",
        linhas: [
          "1) Qual é o seu nome?",
          "2) O que você faz na escola?",
          "3) Do que você mais gosta?",
        ],
        estilo: "papel",
      },
      pergunta: "Para que serve essa folha?",
      hipoteses: [
        { texto: "Para perguntar e descobrir sobre alguém.", imagemUrl: cozinheira },
        { texto: "Para convidar para uma festa.", imagemUrl: escola },
        { texto: "Para contar uma história de dormir.", imagemUrl: menina },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! São perguntas de entrevista.",
      feedbackErro:
        "Repare: todas as linhas terminam com ponto de interrogação (?). São perguntas.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras de entrevista.",
    cards: [
      {
        palavra: "entrevista",
        explicacao: "É quando a gente faz perguntas para alguém e escuta a resposta.",
        exemplo: "Brilha fez uma entrevista com a cozinheira.",
        imagemUrl: cozinheira,
      },
      {
        palavra: "pergunta",
        explicacao: "Frase que pede uma resposta. Termina com o sinal ?",
        exemplo: "Qual é a sua comida favorita?",
        imagemUrl: papel,
      },
      {
        palavra: "gravar",
        explicacao: "Guardar a voz ou o vídeo no aparelho para ouvir depois.",
        exemplo: "A mamãe gravou a entrevista no celular.",
        imagemUrl: celular,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "A pergunta tem um sinal só dela",
    instrucao: "Ouça: perguntas terminam com ? e a voz sobe no fim.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Qual é o seu nome?", explicacao: "Termina com ? — a voz sobe no fim." },
          { texto: "Meu nome é Ana.", explicacao: "Termina com . — é a resposta, voz normal." },
          { texto: "O que você faz aqui?", explicacao: "Pergunta: ponto de interrogação." },
          { texto: "Eu cuido dos livros.", explicacao: "Resposta: ponto final." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto: pergunta e resposta, um de cada vez.",
    leitura: {
      titulo: "Brilha entrevista o bibliotecário",
      imagemUrl: bibliotecario,
      legendaImagem: "O bibliotecário responde ao repórter",
      destacar: ["pergunta", "resposta", "livros"],
      paragrafos: [
        "Brilha: Qual é o seu nome?",
        "Ele: Meu nome é Téo.",
        "Brilha: O que você faz na escola?",
        "Téo: Eu cuido dos livros da sala de leitura.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Qual é o nome do bibliotecário?",
        opcoes: ["Téo", "Ana", "Lia"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ele disse: 'Meu nome é Téo'.",
        feedbackErro: "A resposta vem logo depois da pergunta do nome.",
        dica: "Leia a segunda linha.",
        ondeEstaNoTexto: "Ele: Meu nome é Téo.",
      },
      {
        pergunta: "O que Téo faz na escola?",
        opcoes: ["Cuida dos livros", "Faz a merenda", "Varre o pátio"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ele cuida dos livros.",
        feedbackErro: "Está na última linha do texto.",
        dica: "Procure a resposta da segunda pergunta.",
        ondeEstaNoTexto: "Eu cuido dos livros da sala de leitura.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense em como se faz a entrevista.",
    perguntas: [
      {
        pergunta: "Qual dessas é uma PERGUNTA?",
        opcoes: ["Eu gosto de ler.", "Você gosta de ler?", "A sala é grande."],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Termina com ? — é pergunta.",
        feedbackErro: "Procure a frase que termina com o sinal ?",
        reensino: "Pergunta sempre termina com ponto de interrogação (?) e pede uma resposta.",
      },
      {
        pergunta: "Enquanto a pessoa responde, o repórter deve...",
        opcoes: ["Falar junto", "Escutar com atenção", "Sair correndo"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Repórter escuta com atenção.",
        feedbackErro: "Quem entrevista pergunta e depois FICA CALADO para escutar.",
        reensino: "Na entrevista: eu pergunto → a pessoa responde → eu escuto até o fim.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque a entrevista na ordem certa.",
    bloco: {
      instrucao: "Planejar → perguntar → escutar → contar para a turma.",
      itens: [
        { id: "e1", texto: "Escrever as perguntas no papel.", imagemUrl: papel },
        { id: "e2", texto: "Fazer a pergunta para a pessoa.", imagemUrl: menino },
        { id: "e3", texto: "Escutar a resposta com atenção.", imagemUrl: cozinheira },
        { id: "e4", texto: "Contar para a turma o que descobriu.", imagemUrl: criancas },
      ],
      ordemCerta: ["e1", "e2", "e3", "e4"],
      feedbackAcerto: "🎉 Perfeito! Primeiro planeja, depois pergunta, escuta e conta.",
      feedbackErro: "O repórter escreve as perguntas ANTES de sair entrevistando.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "Mia entrevista a professora",
      imagemUrl: professora,
      destacar: ["pergunta", "professora"],
      paragrafos: [
        "Mia: Do que você mais gosta na escola?",
        "A professora: Eu gosto de ver a turma lendo.",
      ],
    },
    perguntas: [
      {
        pergunta: "Do que a professora mais gosta?",
        opcoes: ["De ver a turma lendo", "De correr", "De dormir"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Releia a resposta dela.",
        ondeEstaNoTexto: "Eu gosto de ver a turma lendo.",
      },
      {
        pergunta: "Quem fez a pergunta?",
        opcoes: ["A professora", "Mia", "O bibliotecário"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Mia foi a repórter.",
        feedbackErro: "Quem fala primeiro, com o sinal ?, é quem pergunta.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Escrever minhas perguntas",
    instrucao: "Trace, monte e escreva o bloquinho do repórter.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "P", exemplo: "P de PERGUNTA", dicaTracado: "desce reto e faz a barriguinha em cima" },
          { letra: "R", exemplo: "R de REPÓRTER", dicaTracado: "desce, faz a barriga e depois a perninha" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "NOME", silabas: ["NO", "ME"], distratores: ["TA", "LU"], dica: "É como a gente chama a pessoa.", imagemUrl: papel },
          { palavra: "ESCOLA", silabas: ["ES", "CO", "LA"], distratores: ["RI", "PU"], dica: "Lugar onde a gente estuda.", imagemUrl: escola },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Minhas 3 perguntas de repórter",
        comando: "Escreva 3 perguntas para entrevistar alguém da sua casa. Não esqueça o sinal ?",
        linhas: 3,
        modelo: ["Qual é o seu nome?", "O que você mais gosta de fazer?", "Qual é a sua comida favorita?"],
        checklist: [
          "Escrevi 3 perguntas?",
          "Todas terminam com ?",
          "Li em voz alta com a voz subindo no fim?",
        ],
      },
    ],
  },

  momento_minijogo: {
    titulo: "Pergunta ou resposta?",
    instrucao: "Arraste cada frase para o lugar certo.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Separe as perguntas das respostas",
      bloco: {
        instrucao: "Frases com ? vão para PERGUNTA. Frases com . vão para RESPOSTA.",
        itens: [
          { id: "i1", texto: "Qual é o seu nome?", alvoId: "a1" },
          { id: "i2", texto: "Meu nome é Téo.", alvoId: "a2" },
          { id: "i3", texto: "Você gosta de ler?", alvoId: "a1" },
          { id: "i4", texto: "Eu cuido dos livros.", alvoId: "a2" },
        ],
        alvos: [
          { id: "a1", nome: "Pergunta (?)", descricao: "Pede uma resposta", imagemUrl: menino },
          { id: "a2", nome: "Resposta (.)", descricao: "Responde a pergunta", imagemUrl: bibliotecario },
        ],
        feedbackAcerto: "🎉 Isso! O sinal no fim mostra se é pergunta ou resposta.",
        feedbackErro: "Olhe o último sinal da frase: ? é pergunta, . é resposta.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Entrevista é fazer perguntas para alguém e escutar a resposta.",
      "Perguntas terminam com o sinal ? e a voz sobe no fim.",
      "O repórter escreve as perguntas ANTES de entrevistar.",
      "Depois dá para gravar a entrevista e mostrar para a turma.",
    ],
    miniDesafio: {
      pergunta: "Qual sinal fecha uma pergunta?",
      opcoes: [".", "?", "!"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! O ponto de interrogação.",
      feedbackErro: "Pergunta pede resposta e termina com ?",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Entrevista é...",
        opcoes: ["Perguntar e escutar alguém", "Cantar uma música", "Fazer uma lista de compras", "Desenhar"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Na entrevista eu pergunto e a pessoa responde.",
      },
      {
        pergunta: "2/5 — Qual frase é pergunta?",
        opcoes: ["A escola é bonita.", "Eu tenho um gato.", "Onde você mora?", "Vamos brincar."],
        correta: 2,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Só uma delas termina com ?",
      },
      {
        pergunta: "3/5 — O que o repórter faz PRIMEIRO?",
        opcoes: ["Grava o vídeo", "Escreve as perguntas", "Come um lanche", "Guarda o caderno"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Antes de perguntar, ele planeja e escreve as perguntas.",
      },
      {
        pergunta: "4/5 — No texto, Téo cuida...",
        opcoes: ["da merenda", "dos livros", "do pátio", "do portão"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "No texto: 'Eu cuido dos livros da sala de leitura'.",
      },
      {
        pergunta: "5/5 — Enquanto a pessoa responde, o repórter...",
        opcoes: ["escuta com atenção", "fala junto", "muda de assunto", "sai da sala"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Escutar até o fim é a parte mais importante da entrevista.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Entrevista em família",
    materiais: ["Papel", "Lápis", "Celular para gravar (opcional)"],
    passos: [
      "1) A criança lê as 3 perguntas que escreveu na aula.",
      "2) Ela entrevista alguém da casa — avó, pai, mãe, irmão.",
      "3) O adulto grava um áudio ou vídeo curtinho da entrevista.",
      "4) Depois a criança conta em voz alta o que descobriu.",
    ],
    registro: "📸 Uma foto da criança entrevistando alguém da família.",
  },

  momento_fluencia: {
    titulo: "Ler as perguntas com voz de repórter",
    instrucao:
      "Agora a gente lê o MESMO texto três vezes: a primeira comigo, a segunda sozinho no cronômetro e a terceira de novo. Ler de novo faz as palavras ficarem fáceis — você vai sentir a boca soltar.",
    texto: [
      "O QUE VOCÊ FAZ?",
      "ONDE VOCÊ MORA?",
      "DO QUE VOCÊ GOSTA?",
    ],
    metaSegundos: 22,
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "🎤 Repórter de Microfone",
  },
};
