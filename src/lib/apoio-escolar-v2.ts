export const TIPOS_MISSAO = ["prova", "tarefa", "trabalho"] as const;

export type TipoMissaoEscolar = (typeof TIPOS_MISSAO)[number];
export type StatusMissaoEscolar = "planejada" | "em_andamento" | "concluida" | "cancelada";

export interface RascunhoMissaoEscolar {
  tipo: TipoMissaoEscolar;
  materia: string;
  conteudos: string[];
  dataEntrega: string;
  titulo?: string;
  instrucoes?: string;
  serie?: string;
}

export interface PaginaAulaEscolar {
  ordem: number;
  tipo:
    | "acolhimento"
    | "objetivo"
    | "explicacao"
    | "exemplo"
    | "pratica_guiada"
    | "exercicio"
    | "revisao"
    | "correcao"
    | "modelo_visual"
    | "modelo_simbolico"
    | "erros_comuns"
    | "video"
    | "desafio";
  titulo: string;
  conteudo: string;
  itens?: string[];
}

export interface ErroValidacaoMissao {
  campo: "tipo" | "materia" | "conteudos" | "dataEntrega";
  mensagem: string;
}

function dataValida(data: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return false;
  const [ano, mes, dia] = data.split("-").map(Number);
  const parsed = new Date(`${data}T00:00:00`);
  return (
    ano >= 1000 &&
    !Number.isNaN(parsed.getTime()) &&
    parsed.getFullYear() === ano &&
    parsed.getMonth() + 1 === mes &&
    parsed.getDate() === dia
  );
}

export function validarMissaoEscolar(
  rascunho: RascunhoMissaoEscolar,
  hoje: string,
): ErroValidacaoMissao[] {
  const erros: ErroValidacaoMissao[] = [];
  if (!TIPOS_MISSAO.includes(rascunho.tipo)) {
    erros.push({ campo: "tipo", mensagem: "Escolha Prova, Tarefa ou Trabalho." });
  }
  if (rascunho.materia.trim().length < 2) {
    erros.push({ campo: "materia", mensagem: "Informe a matéria." });
  }
  if (!rascunho.conteudos.some((conteudo) => conteudo.trim().length >= 2)) {
    erros.push({ campo: "conteudos", mensagem: "Informe o conteúdo que precisa ser estudado." });
  }
  if (!dataValida(rascunho.dataEntrega) || rascunho.dataEntrega < hoje) {
    erros.push({ campo: "dataEntrega", mensagem: "Informe uma data válida de hoje em diante." });
  }
  return erros;
}

export function tituloPadraoMissao(rascunho: RascunhoMissaoEscolar): string {
  if (rascunho.titulo?.trim()) return rascunho.titulo.trim();
  const rotulo = rascunho.tipo.charAt(0).toUpperCase() + rascunho.tipo.slice(1);
  return `${rotulo} de ${rascunho.materia.trim()}`;
}

export function criarConsultaExataRecursos(rascunho: RascunhoMissaoEscolar): string {
  const conteudos = rascunho.conteudos
    .map((item) => item.trim())
    .filter(Boolean)
    .join(" ");
  const serie = rascunho.serie?.trim() ? ` ${rascunho.serie.trim()}` : "";
  return `${conteudos} ${rascunho.materia.trim()}${serie} aula explicada exercícios`.trim();
}

export function criarContextoTutor(rascunho: RascunhoMissaoEscolar): string {
  const conteudos = rascunho.conteudos
    .map((item) => item.trim())
    .filter(Boolean)
    .join(", ");
  return [
    `TIPO DE MISSÃO: ${rascunho.tipo}`,
    `MATÉRIA OBRIGATÓRIA: ${rascunho.materia.trim()}`,
    `CONTEÚDOS OBRIGATÓRIOS: ${conteudos}`,
    rascunho.serie?.trim() ? `SÉRIE: ${rascunho.serie.trim()}` : null,
    "Explique como professor, em etapas curtas, e confira se a criança entendeu.",
    "Não troque de matéria, não invente outro conteúdo e não entregue somente a resposta.",
  ]
    .filter(Boolean)
    .join("\n");
}

function normalizarComparacao(valor: string): string {
  return valor
    .toLocaleLowerCase("pt-BR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

export function filtrarTopicosDaMateria(materia: string, topicos: string[]): string[] {
  const materiaNormalizada = normalizarComparacao(materia);
  const vistos = new Set<string>();
  return topicos.filter((topico) => {
    const normalizado = normalizarComparacao(topico);
    if (!normalizado || normalizado === materiaNormalizada || vistos.has(normalizado)) return false;
    vistos.add(normalizado);
    return true;
  });
}

function conteudoConhecido(materia: string, topico: string) {
  const chave = `${materia} ${topico}`.toLocaleLowerCase("pt-BR");
  if (chave.includes("fraç")) {
    return {
      conceito:
        "Fração representa uma ou mais partes iguais de um todo. O número de cima é o numerador e mostra quantas partes foram consideradas. O número de baixo é o denominador e mostra em quantas partes iguais o todo foi dividido.",
      exemplo:
        "Em 3/4, o todo foi dividido em 4 partes iguais e estamos considerando 3. Para criar uma fração equivalente, multiplicamos ou dividimos numerador e denominador pelo mesmo número: 1/2 = 2/4.",
      pratica: [
        "Desenhe um círculo e divida em 4 partes iguais.",
        "Pinte 2 partes e escreva a fração 2/4.",
        "Simplifique 2/4 dividindo os dois números por 2.",
      ],
      exercicios: [
        "Represente 3/5 com um desenho.",
        "Complete: 1/2 = __/6.",
        "Simplifique a fração 4/8.",
      ],
      respostas: ["Três das cinco partes iguais devem estar pintadas.", "1/2 = 3/6.", "4/8 = 1/2."],
    };
  }
  if (chave.includes("verbo")) {
    return {
      conceito:
        "Verbo é a palavra que indica ação, estado, mudança de estado ou fenômeno da natureza. Ele varia conforme a pessoa, o número e o tempo da ação.",
      exemplo:
        "Na frase 'Ana estudou ontem', estudou é o verbo e está no passado. Em 'Ana estuda hoje', estuda está no presente. Em 'Ana estudará amanhã', estudará está no futuro.",
      pratica: [
        "Localize o verbo em: O menino corre no parque.",
        "Troque corre pelo passado.",
        "Agora escreva a mesma ação no futuro.",
      ],
      exercicios: [
        "Circule o verbo: A chuva caiu cedo.",
        "Passe 'Eu estudo' para o passado.",
        "Complete com um verbo: Os pássaros ___ no céu.",
      ],
      respostas: [
        "O verbo é caiu.",
        "Eu estudei.",
        "Uma resposta possível é: Os pássaros voam no céu.",
      ],
    };
  }
  if (chave.includes("sistema solar")) {
    return {
      conceito:
        "O Sistema Solar é formado pelo Sol e pelos corpos celestes que giram ao seu redor. Há oito planetas; a Terra é o terceiro a partir do Sol.",
      exemplo:
        "A ordem dos planetas é: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno. Os planetas realizam translação ao redor do Sol e rotação em torno do próprio eixo.",
      pratica: [
        "Escreva os quatro planetas mais próximos do Sol.",
        "Compare rotação e translação.",
        "Explique por que o Sol é importante para a Terra.",
      ],
      exercicios: [
        "Qual é o maior planeta?",
        "Qual planeta possui anéis muito visíveis?",
        "A Terra ocupa qual posição a partir do Sol?",
      ],
      respostas: ["Júpiter.", "Saturno.", "A terceira posição."],
    };
  }
  return {
    conceito: `${topico} será estudado dentro de ${materia}. Primeiro identifique a definição principal, depois observe como o conceito aparece em exemplos e só então resolva a atividade.`,
    exemplo: `Procure no material escolar um exemplo de ${topico}. Leia o enunciado, destaque as informações importantes e explique com suas palavras o que foi entendido.`,
    pratica: [
      "Leia o conteúdo uma vez por inteiro.",
      "Marque as palavras mais importantes.",
      "Explique o assunto com suas palavras e confira no material.",
    ],
    exercicios: [
      `Escreva o que significa ${topico}.`,
      `Dê um exemplo de ${topico}.`,
      "Crie uma pergunta sobre o assunto e responda.",
    ],
    respostas: [
      "Compare a definição com o livro ou caderno.",
      "O exemplo deve pertencer ao conteúdo estudado.",
      "A resposta deve usar as ideias principais da explicação.",
    ],
  };
}

export function criarAulaSegura(materia: string, topico: string): PaginaAulaEscolar[] {
  const base = conteudoConhecido(materia.trim(), topico.trim());
  const chave = `${materia} ${topico}`.toLocaleLowerCase("pt-BR");
  if (chave.includes("verbo")) {
    return [
      { ordem: 1, tipo: "acolhimento", titulo: "A missão dos verbos", conteudo: "Nesta aula vamos reconhecer verbos, entender o que eles indicam e aprender a usá-los no presente, passado e futuro." },
      { ordem: 2, tipo: "objetivo", titulo: "O que você precisa saber para a prova", conteudo: "Identificar o verbo na frase, descobrir a pessoa e o tempo verbal e conjugar verbos regulares em situações simples." },
      { ordem: 3, tipo: "explicacao", titulo: "O que é verbo?", conteudo: base.conceito },
      { ordem: 4, tipo: "modelo_visual", titulo: "Ação, estado e fenômeno da natureza", conteudo: "AÇÃO: correr, estudar e brincar. ESTADO: ser, estar e permanecer. FENÔMENO DA NATUREZA: chover, nevar e anoitecer. Observe o sentido do verbo dentro da frase." },
      { ordem: 5, tipo: "modelo_simbolico", titulo: "Como encontrar o verbo na frase", conteudo: "Pergunte: o que acontece? Em “Lucas escreveu a resposta”, acontece escreveu. Depois observe quem pratica ou vive aquilo: Lucas. Assim encontramos o verbo e sua relação com o sujeito." },
      { ordem: 6, tipo: "exemplo", titulo: "Presente, passado e futuro", conteudo: base.exemplo },
      { ordem: 7, tipo: "exemplo", titulo: "Conjugação passo a passo", conteudo: "Use o verbo ESTUDAR: eu estudo, tu estudas, ele estuda, nós estudamos, vós estudais, eles estudam. A parte ESTUD- é o radical; as terminações mudam para indicar pessoa e número." },
      { ordem: 8, tipo: "erros_comuns", titulo: "Cuidado com estes erros", conteudo: "Não confunda verbo com substantivo: em “a corrida começou”, corrida é nome; começou é verbo. Não escolha uma palavra apenas porque lembra ação: confira sempre sua função na frase." },
      { ordem: 9, tipo: "pratica_guiada", titulo: "Vamos fazer juntos", conteudo: "Leia cada frase, localize o que acontece e depois identifique o tempo verbal.", itens: base.pratica },
      { ordem: 10, tipo: "exercicio", titulo: "Treino para a prova", conteudo: "Resolva primeiro sozinho. Depois confira cada resposta explicada.", itens: base.exercicios },
      { ordem: 11, tipo: "desafio", titulo: "Transforme a frase", conteudo: "Escreva a frase “Nós estudamos verbos” no passado e no futuro. Depois destaque somente o verbo em cada frase." },
      { ordem: 12, tipo: "video", titulo: "Videoaulas somente sobre verbos", conteudo: "Escolha uma videoaula abaixo. Pause nos exemplos e tente identificar o verbo antes da explicação do professor." },
      { ordem: 13, tipo: "revisao", titulo: "Resumo da prova de verbos", conteudo: "Verbo pode indicar ação, estado ou fenômeno. Ele varia em pessoa, número e tempo. Para encontrá-lo, observe o que acontece na frase e quando acontece." },
      { ordem: 14, tipo: "correcao", titulo: "Gabarito explicado", conteudo: "Confira apenas depois de tentar. Leia novamente a frase e justifique por que a palavra escolhida é verbo.", itens: base.respostas },
    ];
  }
  return [
    {
      ordem: 1,
      tipo: "acolhimento",
      titulo: "O que vamos aprender",
      conteudo: `Hoje vamos aprender ${topico} em ${materia}, com explicação, exemplo e prática.`,
    },
    {
      ordem: 2,
      tipo: "objetivo",
      titulo: "Objetivo da missão",
      conteudo: `Compreender ${topico}, reconhecer suas ideias principais e usar o conhecimento em atividades.`,
    },
    { ordem: 3, tipo: "explicacao", titulo: "Aulão: conceito principal", conteudo: base.conceito },
    {
      ordem: 4,
      tipo: "modelo_visual",
      titulo: "Modelo visual e concreto",
      conteudo: `Imagine ${topico} representado com objetos, desenhos, cores ou partes. Faça um desenho simples e identifique nele cada informação importante antes de usar símbolos.`,
    },
    {
      ordem: 5,
      tipo: "modelo_simbolico",
      titulo: "Do desenho para os símbolos",
      conteudo: `Transforme o modelo visual de ${topico} em palavras, números, sinais ou esquema. Compare cada parte do desenho com sua representação escolar.`,
    },
    {
      ordem: 6,
      tipo: "exemplo",
      titulo: "Exemplo resolvido passo a passo",
      conteudo: base.exemplo,
    },
    {
      ordem: 7,
      tipo: "exemplo",
      titulo: "Segundo exemplo comentado",
      conteudo: `Resolva outro exemplo de ${topico}: leia o pedido, destaque os dados, escolha uma estratégia, execute uma etapa por vez e confira se a resposta faz sentido.`,
    },
    {
      ordem: 8,
      tipo: "erros_comuns",
      titulo: "Erros comuns e como evitar",
      conteudo:
        "Não pule a leitura, não misture regras de conteúdos diferentes e não aceite uma resposta sem conferir. Volte ao modelo visual quando surgir dúvida.",
    },
    {
      ordem: 9,
      tipo: "pratica_guiada",
      titulo: "Prática guiada: fazemos juntos",
      conteudo: "Siga uma etapa de cada vez e explique por que escolheu cada passo.",
      itens: base.pratica,
    },
    {
      ordem: 10,
      tipo: "exercicio",
      titulo: "Nível fácil e médio",
      conteudo: "Resolva sem olhar o gabarito. Use desenho ou esquema se precisar.",
      itens: base.exercicios,
    },
    {
      ordem: 11,
      tipo: "desafio",
      titulo: "Desafio de aplicação",
      conteudo: `Crie uma situação do cotidiano que use ${topico}, resolva e explique como chegou à resposta.`,
    },
    {
      ordem: 12,
      tipo: "video",
      titulo: "Videoaula na lousa",
      conteudo: `Assista a uma aula sobre ${topico}. Pause nos exemplos e tente resolver antes do professor mostrar a resposta.`,
    },
    {
      ordem: 13,
      tipo: "revisao",
      titulo: "Resumo e mapa mental",
      conteudo: `Escreva três ideias essenciais sobre ${topico}, um exemplo e uma dúvida que ainda precisa revisar.`,
    },
    {
      ordem: 14,
      tipo: "correcao",
      titulo: "Gabarito totalmente explicado",
      conteudo:
        "Confira somente depois de tentar. Em cada erro, identifique exatamente qual etapa precisa ser refeita.",
      itens: base.respostas,
    },
  ];
}

export function paginasObrigatoriasDaAula(): PaginaAulaEscolar[] {
  return criarAulaSegura("Matemática", "frações");
}
