import type { AulaExtraLousa } from "../types-extras";

export const aulaCrase: AulaExtraLousa = {
  slug: "crase-sem-medo",
  isAulaExtra: true,
  fase: "fase3",
  titulo: "Crase sem Medo",
  iconeTrilha: "💎",
  cenasLousa: [
    {
      tituloLousa: "O Nascimento da Crase",
      blocos: [
        {
          id: "c1-b1",
          tipo: "texto",
          conteudo: "Crase não é acento, é fusão! É quando a preposição 'A' encontra o artigo 'A'.",
          cor: "branco",
          falaProfessor: "Olá, pessoal! Hoje vamos acabar com o medo da crase. Lembre-se: crase é um encontro amoroso entre dois As.",
        },
        {
          id: "c1-b2",
          tipo: "formula",
          conteudo: "A (preposição) + A (artigo) = À",
          cor: "laranja",
          falaProfessor: "A fórmula é simples: Preposição mais Artigo resulta no A com acento grave.",
        },
      ],
      desafioRelampago: {
        pergunta: "Em qual caso ocorre crase?",
        opcoes: ["Fui a escola", "Comprei a caneta", "Falei a ele"],
        correta: 0,
      },
    },
    {
      tituloLousa: "O Teste Infalível",
      blocos: [
        {
          id: "c2-b1",
          tipo: "formula",
          conteudo: "Vou A, Volto DA -> Crase há! \nVou A, Volto DE -> Crase pra quê?",
          cor: "verde",
          falaProfessor: "Grave esse macete: se você volta DA, a crase está lá. Se volta DE, não tem crase nem por decreto!",
        },
        {
          id: "c2-b2",
          tipo: "exemplo",
          conteudo: "Fui à França (Volto DA França) ✅\nFui a Paris (Volto DE Paris) ❌",
          cor: "azul",
          falaProfessor: "Veja o exemplo: França pede crase porque voltamos DA França. Paris não, pois voltamos DE Paris.",
        },
      ],
      modoSocorro: {
        titulo: "Dica de Ouro",
        macete: "Substitua a palavra feminina por uma masculina (como 'o mercado'). Se virar 'AO', tem crase!",
      },
    },
  ],
};

export const aulaVerbos: AulaExtraLousa = {
  slug: "verbos-acao",
  isAulaExtra: true,
  fase: "fase3",
  titulo: "Verbos: O Motor da Frase",
  iconeTrilha: "⚙️",
  cenasLousa: [
    {
      tituloLousa: "As Três Famílias",
      blocos: [
        {
          id: "v1-b1",
          tipo: "texto",
          conteudo: "Verbos terminam em -AR (1ª), -ER (2ª) ou -IR (3ª).",
          cor: "branco",
          falaProfessor: "Os verbos são as ações! Eles se dividem em três grandes famílias chamadas de conjugações.",
        },
        {
          id: "v1-b2",
          tipo: "exemplo",
          conteudo: "1ª: Cantar, Estudar\n2ª: Beber, Correr\n3ª: Sorrir, Partir",
          cor: "azul",
          falaProfessor: "Olha só: Cantar é de primeira, Beber é de segunda e Sorrir é de terceira. Fácil, né?",
        },
      ],
    },
  ],
};

export const aulaSintaxe: AulaExtraLousa = {
  slug: "sintaxe-basica",
  isAulaExtra: true,
  fase: "fase3",
  titulo: "Sintaxe: Quem faz o quê?",
  iconeTrilha: "🔍",
  cenasLousa: [
    {
      tituloLousa: "O Trio Dinâmico",
      blocos: [
        {
          id: "s1-b1",
          tipo: "formula",
          conteudo: "SUJEITO + VERBO + COMPLEMENTO",
          cor: "laranja",
          falaProfessor: "Na sintaxe, o segredo é encontrar quem manda na frase. O Sujeito faz a ação do Verbo.",
        },
      ],
    },
  ],
};

export const aulaConcordancia: AulaExtraLousa = {
  slug: "concordancia-nominal",
  isAulaExtra: true,
  fase: "fase3",
  titulo: "Concordância: Tudo em Harmonia",
  iconeTrilha: "🤝",
  cenasLousa: [
    {
      tituloLousa: "O Acordo Geral",
      blocos: [
        {
          id: "con1-b1",
          tipo: "texto",
          conteudo: "O adjetivo e o artigo devem seguir o substantivo em gênero e número.",
          cor: "branco",
          falaProfessor: "Concordância é como uma dança. Se o substantivo está no plural, todo mundo ao redor também fica!",
        },
      ],
    },
  ],
};

export const aulaRegencia: AulaExtraLousa = {
  slug: "regencia-verbal",
  isAulaExtra: true,
  fase: "fase3",
  titulo: "Regência: O Comando do Verbo",
  iconeTrilha: "🎮",
  cenasLousa: [
    {
      tituloLousa: "Quem manda em quem?",
      blocos: [
        {
          id: "r1-b1",
          tipo: "exemplo",
          conteudo: "Assistir O filme (errado) ❌\nAssistir AO filme (correto) ✅",
          cor: "laranja",
          falaProfessor: "Cuidado! O verbo assistir, no sentido de ver, exige a preposição A. Por isso dizemos assistir AO filme.",
        },
      ],
    },
  ],
};

