import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 4º Ano — "A Redação dos Exploradores"
 * ---------------------------------------------------------------
 * Faixa de 9 anos: a criança lê com fluência e agora precisa
 * INTERPRETAR com profundidade, DOMINAR a gramática em uso e
 * PRODUZIR textos longos com coesão e revisão.
 *
 * Visual: skin "tween" do PlayerPortuguesV4 (grafite + neon).
 *
 * As unidades são carregadas por glob (unidade-N/index.ts) e ordenadas
 * pelo campo `numero`.
 */
const mods = import.meta.glob<Record<string, UnidadePortugues>>("./unidade-*/index.ts", {
  eager: true,
});

const unidades: UnidadePortugues[] = Object.values(mods)
  .flatMap((m) => Object.values(m))
  .filter((u): u is UnidadePortugues => !!u && typeof (u as UnidadePortugues).numero === "number")
  .sort((a, b) => a.numero - b.numero);

const curso: CursoPortugues = {
  slug: "portugues-4ano",
  disciplina: "Língua Portuguesa",
  ano: "4º Ano",
  titulo: "A Redação dos Exploradores",
  descricao:
    "Uma expedição de escrita: cada unidade é um território a explorar — textos longos, gramática em ação e redações que convencem, informam e emocionam.",
  corPrimaria: "#38bdf8",
  corSecundaria: "#0b1020",
  tipoAula: "portugues",
  unidades,
  praticasCurriculares: [
    {
      emoji: "✏️",
      titulo: "Prática de escrita diária",
      descricao:
        "Aos 9 anos a criança já escreve parágrafos: agora precisa treinar TODO DIA a coesão, a acentuação e a produção de gêneros mais longos para virar autora de textos completos.",
      itens: [
        "Caderno: escrever um parágrafo com tópico frasal e ao menos um conectivo (porém, portanto, embora).",
        "Ditado: 6 palavras da regra da semana (paroxítona, hiato, dígrafo) + 1 frase revisada em voz alta.",
        "Um gênero de verdade por semana: reportagem, verbete, carta de leitor, anúncio ou texto teatral.",
        "Revisão obrigatória: reler, conferir coesão, acentuação e pontuação, e só então passar a limpo.",
      ],
    },
    {
      emoji: "🗣️",
      titulo: "Oralidade e argumentação",
      descricao:
        "O 4º ano precisa aprender a defender um ponto de vista com argumentos organizados e a ouvir o contraponto — é a base da redação argumentativa que vem a seguir.",
      itens: [
        "Roda de debate: defender uma opinião com pelo menos dois argumentos e ouvir o colega discordar.",
        "Reconto encadeado: recontar a leitura usando conectivos de causa e consequência.",
        "Entrevista: preparar perguntas abertas, entrevistar alguém e organizar as respostas em tópicos.",
        "Apresentação: expor uma pesquisa com começo, meio e fim, respondendo perguntas da turma.",
      ],
    },
    {
      emoji: "📖",
      titulo: "Leitura em voz alta todo dia",
      descricao:
        "A meta do 4º ano é ~110 palavras por minuto com entonação e pausas corretas. A fluência vem de reler o mesmo trecho e cronometrar o progresso.",
      itens: [
        "Reler 3 vezes o mesmo trecho, cronometrando e respeitando vírgula, ponto e travessão.",
        "Ler texto teatral em voz alta, dando entonação diferente para cada personagem.",
        "Biblioteca: um livro por semana, com ficha de 5 linhas sobre ideia principal e opinião pessoal.",
        "Ler reportagem curta do dia e separar fato, opinião e argumento em voz alta para a turma.",
      ],
    },
  ],
};

export default curso;
