import type { AulaPortuguesV4 } from "../../types";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as balanca } from "@/assets/neuro-treino/objetos/moeda.png.asset.json";
import { url as setaCima } from "@/assets/neuro-treino/objetos/seta-cima.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";

/**
 * Aula 2 — "Por que / porque / porquê" e "mas / mais"
 * -------------------------------------------------------------
 * Unidade 2 · Oficina da Palavra
 * Foco: distinguir os quatro porquês e o par mas/mais pelo USO
 * (pergunta, resposta, substantivo) e pela FUNÇÃO (oposição x quantidade).
 * BNCC: EF04LP03, EF35LP12
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-por-que-mas-mais",
  titulo: "Por que / porque / porquê e mas / mais",
  iconeTrilha: "🔀",
  bncc: ["EF04LP03", "EF35LP12"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "A encruzilhada das palavras gêmeas",
    historia:
      "A trilha chegou a uma encruzilhada com quatro placas escritas quase igual: 'por que', 'porque', 'por quê' e 'porquê'. Brilha coçou a cabeça: — Elas soam parecido, mas cada uma serve pra uma coisa diferente! E logo ali, outra armadilha: 'mas' e 'mais', que também se confundem na hora de escrever. Vamos decifrar essas palavras gêmeas antes de seguir viagem?",
    imagemUrl: mapa,
  },

  momento02_previsao: {
    instrucao: "Olhe as placas da encruzilhada antes de escolher o caminho.",
    bloco: {
      titulo: "A Encruzilhada dos Porquês",
      capaImagemUrl: bussola,
      recado: {
        rotulo: "Placas da encruzilhada",
        icone: "🪧",
        linhas: ["POR QUE...?", "...PORQUE...", "O PORQUÊ", "POR QUÊ?"],
        estilo: "cartaz",
      },
      pergunta: "Sobre o que essa parte da expedição vai tratar?",
      hipoteses: [
        { texto: "Quando usar cada uma das quatro formas de 'porquê' e o par 'mas/mais'.", imagemUrl: livro },
        { texto: "Como construir uma placa de madeira.", imagemUrl: mapa },
        { texto: "Qual caminho é mais curto até o rio.", imagemUrl: bussola },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos aprender a diferença entre os quatro porquês e entre 'mas' e 'mais'.",
      feedbackErro:
        "Repare que as placas têm palavras parecidas escritas de formas diferentes — é sobre isso que vamos aprender.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça cada palavra da encruzilhada antes de seguir viagem.",
    cards: [
      {
        palavra: "por que (separado, sem acento)",
        explicacao:
          "Usado em PERGUNTAS (diretas ou indiretas) e antes de um motivo ainda por vir. Pode ser trocado por 'por qual motivo'.",
        exemplo: "Por que você chegou atrasado? / Não sei por que ele saiu.",
        imagemUrl: bussola,
      },
      {
        palavra: "porque (junto, sem acento)",
        explicacao:
          "Usado em RESPOSTAS e explicações, ligando uma causa a uma consequência. Equivale a 'pois'.",
        exemplo: "Cheguei atrasado porque perdi o ônibus.",
        imagemUrl: livro,
      },
      {
        palavra: "porquê (junto, com acento)",
        explicacao:
          "É um SUBSTANTIVO — significa 'motivo' ou 'razão'. Por isso vem sempre acompanhado de artigo (o, um, esse).",
        exemplo: "Ninguém entendeu o porquê da mudança de plano.",
        imagemUrl: estrela,
      },
      {
        palavra: "por quê (separado, com acento)",
        explicacao:
          "Usado no FINAL da frase ou sozinho, geralmente em perguntas. O acento aparece porque a palavra fica isolada, no fim da fala.",
        exemplo: "Ele não quis vir. Por quê?",
        imagemUrl: setaCima,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Mas x Mais: oposição ou quantidade?",
    instrucao: "Veja o contraste entre as duas palavras.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Eu queria ir, MAS choveu.", explicacao: "MAS = oposição, contradição. Pode trocar por 'porém'." },
          { texto: "Quero MAIS suco, por favor.", explicacao: "MAIS = quantidade, o contrário de 'menos'." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha escreveu o guia da encruzilhada. Leia com atenção.",
    leitura: {
      titulo: "O Guia da Encruzilhada",
      imagemUrl: pergaminho,
      legendaImagem: "Guia de viagem da Oficina da Palavra",
      destacar: ["pergunta", "resposta", "motivo", "sozinha", "oposição", "quantidade"],
      paragrafos: [
        "'POR QUE', separado e sem acento, aparece em PERGUNTAS: 'Por que choveu?'. 'PORQUE', junto e sem acento, aparece em RESPOSTAS: 'Choveu porque o vento trouxe as nuvens'.",
        "'PORQUÊ', junto e com acento, é um substantivo que significa MOTIVO: 'Ninguém sabe o porquê do atraso' — repare que ele vem com um artigo antes, como um nome comum. Já 'POR QUÊ', separado e com acento, aparece SOZINHO no final da frase ou isolado: 'Ele não veio. Por quê?'.",
        "E tem outra dupla traiçoeira: 'MAS' indica OPOSIÇÃO, uma ideia que contraria a anterior — pode-se trocar por 'porém'. 'MAIS' indica QUANTIDADE, o contrário de 'menos'.",
        "O truque para nunca errar: pergunte-se se a frase é uma PERGUNTA (por que), uma RESPOSTA com causa (porque), um SUBSTANTIVO de motivo (porquê) ou se está SOZINHA no fim (por quê). E, com mas/mais, pergunte-se se a ideia é de OPOSIÇÃO (mas) ou de QUANTIDADE (mais).",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no guia se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Segundo o guia, quando se usa 'por que' separado e sem acento?",
        opcoes: ["Em perguntas", "Em respostas com causa", "Como substantivo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Por que' aparece em perguntas.",
        feedbackErro: "Releia: '\"POR QUE\", separado e sem acento, aparece em PERGUNTAS'.",
        ondeEstaNoTexto: "\"POR QUE\", separado e sem acento, aparece em PERGUNTAS",
      },
      {
        pergunta: "'Porquê', junto e com acento, funciona como qual classe de palavra?",
        opcoes: ["Verbo", "Substantivo", "Pronome"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! 'Porquê' é um substantivo que significa motivo.",
        feedbackErro: "Releia: '\"PORQUÊ\", junto e com acento, é um substantivo que significa MOTIVO'.",
        ondeEstaNoTexto: "é um substantivo que significa MOTIVO",
      },
      {
        pergunta: "Qual das duas palavras indica OPOSIÇÃO, segundo o texto: 'mas' ou 'mais'?",
        opcoes: ["Mas", "Mais", "As duas"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! 'Mas' indica oposição, como 'porém'.",
        feedbackErro: "Releia: '\"MAS\" indica OPOSIÇÃO... pode-se trocar por \"porém\"'.",
        ondeEstaNoTexto: "\"MAS\" indica OPOSIÇÃO, uma ideia que contraria a anterior",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem explica e onde a explicação acontece?",
    perguntas: [
      {
        pergunta: "Quem escreveu o guia da encruzilhada?",
        opcoes: ["Brilha", "Aurora", "Um viajante desconhecido"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Foi Brilha quem escreveu o guia.",
        feedbackErro: "Releia a introdução: 'Brilha escreveu o guia da encruzilhada'.",
      },
      {
        pergunta: "Onde a expedição encontrou as quatro placas confusas?",
        opcoes: ["Numa encruzilhada", "Dentro de uma caverna", "No topo de uma montanha"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A trilha chegou a uma encruzilhada com as quatro placas.",
        feedbackErro: "Releia a motivação: 'A trilha chegou a uma encruzilhada com quatro placas'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o raciocínio para escolher a forma certa do porquê.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Verifique se a frase é uma pergunta.", imagemUrl: bussola },
        { id: "p2", texto: "Se não for pergunta, veja se dá uma resposta com causa.", imagemUrl: livro },
        { id: "p3", texto: "Se funcionar como substantivo (com artigo), é 'porquê' com acento.", imagemUrl: estrela },
        { id: "p4", texto: "Se estiver isolada no fim da frase, use 'por quê' com acento.", imagemUrl: setaCima },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho certo pela encruzilhada dos porquês.",
      feedbackErro: "Pense: primeiro se pergunta se é pergunta, depois se é resposta, depois se é substantivo, e por último se está sozinha no fim.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo bilhete da trilha e responda.",
    leitura: {
      titulo: "O Bilhete na Árvore",
      imagemUrl: pergaminho,
      destacar: ["mais rápido", "mas cansativo", "por que"],
      paragrafos: [
        "Brilha achou um bilhete preso numa árvore: 'Este caminho é mais rápido, mas é mais cansativo. Por que alguém deixaria essa dica? Talvez porque quisesse ajudar o próximo viajante.'",
        "Aurora leu e comentou: 'Repare, esse bilhete usa MAIS duas vezes, com sentido de quantidade, e MAS uma vez, com sentido de oposição — o caminho é rápido, mas também é cansativo, uma ideia contrária à primeira.'",
      ],
    },
    perguntas: [
      {
        pergunta: "No bilhete, qual palavra indica quantidade: 'mais rápido' e 'mais cansativo'?",
        opcoes: ["Mais", "Mas", "Por que"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Mais' indica quantidade nas duas ocorrências.",
        feedbackErro: "Releia: 'esse bilhete usa MAIS duas vezes, com sentido de quantidade'.",
        ondeEstaNoTexto: "esse bilhete usa MAIS duas vezes, com sentido de quantidade",
      },
      {
        pergunta: "Por que a palavra 'mas' aparece no bilhete, segundo Aurora?",
        opcoes: [
          "Porque liga duas ideias que se contradizem (rápido x cansativo)",
          "Porque indica quantidade",
          "Porque é uma pergunta",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! 'Mas' liga o rápido ao cansativo, ideias opostas.",
        feedbackErro: "Releia: 'MAS uma vez, com sentido de oposição — o caminho é rápido, mas também é cansativo'.",
        ondeEstaNoTexto: "com sentido de oposição",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Classifique a palavra certa",
    instrucao: "Arraste cada frase para o baú certo da encruzilhada.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Os Baús da Encruzilhada",
      bloco: {
        instrucao: "Leia a frase inteira antes de decidir: é pergunta, resposta, motivo, isolada, oposição ou quantidade?",
        itens: [
          { id: "i1", texto: "___ você não veio? (pergunta)", alvoId: "porque-pergunta" },
          { id: "i2", texto: "Não vim ___ estava doente. (resposta)", alvoId: "porque-resposta" },
          { id: "i3", texto: "Ninguém sabe o ___ disso. (motivo)", alvoId: "porque-substantivo" },
          { id: "i4", texto: "Ele sumiu. ___? (isolada, no fim)", alvoId: "porque-isolado" },
          { id: "i5", texto: "Queria ir, ___ não pude. (oposição)", alvoId: "mas" },
          { id: "i6", texto: "Preciso de ___ tempo. (quantidade)", alvoId: "mais" },
        ],
        alvos: [
          { id: "porque-pergunta", nome: "Por que (pergunta)", imagemUrl: bussola },
          { id: "porque-resposta", nome: "Porque (resposta)", imagemUrl: livro },
          { id: "porque-substantivo", nome: "Porquê (motivo)", imagemUrl: estrela },
          { id: "porque-isolado", nome: "Por quê (isolada)", imagemUrl: setaCima },
          { id: "mas", nome: "Mas (oposição)", imagemUrl: mapa },
          { id: "mais", nome: "Mais (quantidade)", imagemUrl: balanca },
        ],
        feedbackAcerto: "🎉 Você venceu a encruzilhada! Domina as quatro formas de porquê e o par mas/mais.",
        feedbackErro: "Releia a frase inteira: pergunte-se se é pergunta, resposta, motivo, palavra isolada, oposição ou quantidade.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "POR QUE (pergunta) / PORQUE (resposta, causa) / PORQUÊ (substantivo = motivo) / POR QUÊ (isolado, no fim da frase).",
      "MAS = oposição (como 'porém'). MAIS = quantidade (contrário de 'menos').",
      "O truque é sempre perguntar: é pergunta, resposta, motivo ou está sozinha? É oposição ou quantidade?",
    ],
    miniDesafio: {
      pergunta: "Na frase 'Ele estudou muito, ___ foi mal na prova', qual palavra completa corretamente?",
      opcoes: ["Mas", "Mais", "Porque"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! A frase mostra uma ideia contrária (estudou muito x foi mal): é oposição, 'mas'.",
      feedbackErro: "Pense: estudar muito e ir mal são ideias contrárias — isso pede 'mas', de oposição.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — 'Não sei ___ ele chorou' (pergunta indireta). Qual forma usar?",
        opcoes: ["por que", "porque", "porquê"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! É uma pergunta indireta: usa-se 'por que' separado, sem acento.",
        feedbackErro: "Lembre: perguntas (mesmo indiretas) usam 'por que' separado, sem acento.",
      },
      {
        pergunta: "2/5 — 'Cheguei tarde ___ o trânsito estava pesado.' Qual forma usar?",
        opcoes: ["por que", "porque", "por quê"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Resposta com causa usa 'porque' junto, sem acento.",
        feedbackErro: "Lembre: respostas que explicam uma causa usam 'porque' junto, sem acento.",
      },
      {
        pergunta: "3/5 — 'Ele nunca explicou o ___ da decisão.' Qual forma usar?",
        opcoes: ["porque", "porquê", "por quê"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Aqui 'porquê' funciona como substantivo (motivo), por isso tem acento e vem com artigo.",
        feedbackErro: "Repare no artigo 'o' antes: isso indica substantivo, então é 'porquê' com acento.",
      },
      {
        pergunta: "4/5 — 'Ela se recusou a ir. ___?' Qual forma usar no final, isolada?",
        opcoes: ["porque", "porquê", "por quê"],
        correta: 2,
        feedbackAcerto: "🎉 Exato! Isolada, no fim da frase, usa-se 'por quê' separado e com acento.",
        feedbackErro: "Lembre: sozinha, no final da frase, a forma correta é 'por quê' com acento.",
      },
      {
        pergunta: "5/5 — 'Quero ___ tempo para terminar, ___ já estou quase lá.' Complete na ordem.",
        opcoes: ["mais / mas", "mas / mais", "mais / mais"],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! Primeiro é quantidade (mais tempo), depois oposição (mas já estou quase lá).",
        feedbackErro: "Pense: a primeira lacuna pede quantidade (mais) e a segunda pede oposição (mas).",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada aos porquês e ao mas/mais",
    materiais: ["Papel e lápis", "Um livro, revista ou WhatsApp da família (com permissão)"],
    passos: [
      "1) Junto com um adulto, procurem 4 frases com alguma forma de 'porquê' e 2 frases com 'mas' ou 'mais'.",
      "2) Para cada uma, decidam: é pergunta, resposta, motivo ou isolada? É oposição ou quantidade?",
      "3) Registrem as frases numa lista, marcando a explicação ao lado de cada uma.",
      "4) Leiam a lista em voz alta para um adulto, explicando o motivo da escolha.",
    ],
    registro: "📝 Uma foto da lista com as explicações, ou um áudio explicando cada escolha.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
