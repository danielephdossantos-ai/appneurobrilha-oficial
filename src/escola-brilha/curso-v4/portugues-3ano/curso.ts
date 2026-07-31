import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 3º Ano — "O Clube dos Detetives da Palavra"
 * --------------------------------------------------------------------
 * Faixa de 8 anos: a criança já decodifica — agora precisa COMPREENDER,
 * ESCREVER com regra e REVISAR o próprio texto.
 *
 * Visual: skin "tween" do PlayerPortuguesV4 (grafite + neon).
 *
 * As unidades são carregadas por glob (unidade-N/index.ts) e ordenadas
 * pelo campo `numero`, para o curso continuar válido enquanto novas
 * unidades vão sendo publicadas.
 */
const mods = import.meta.glob<Record<string, UnidadePortugues>>("./unidade-*/index.ts", {
  eager: true,
});

const unidades: UnidadePortugues[] = Object.values(mods)
  .flatMap((m) => Object.values(m))
  .filter((u): u is UnidadePortugues => !!u && typeof (u as UnidadePortugues).numero === "number")
  .sort((a, b) => a.numero - b.numero);

const curso: CursoPortugues = {
  slug: "portugues-3ano",
  disciplina: "Língua Portuguesa",
  ano: "3º Ano",
  titulo: "O Clube dos Detetives da Palavra",
  descricao:
    "Aurora abre as portas de um clube secreto de investigação. Cada caso só é resolvido com leitura atenta, ortografia precisa e uma boa redação — quem lê bem, descobre tudo.",
  corPrimaria: "#22d3ee",
  corSecundaria: "#0b1020",
  tipoAula: "portugues",
  unidades,
  praticasCurriculares: [
    {
      emoji: "✏️",
      titulo: "Prática de escrita diária",
      descricao:
        "Aos 8 anos a criança já escreve frases: agora precisa escrever TODO DIA em papel para virar autora de parágrafos e de textos com gênero definido.",
      itens: [
        "Caderno: escrever 3 frases próprias sobre o dia e juntá-las em um parágrafo.",
        "Ditado: 6 palavras da regra da semana (S/SS/Ç, R/RR, acento) + 1 frase com travessão.",
        "Um gênero de verdade por semana: bilhete, carta, receita, anúncio ou relato.",
        "Revisão obrigatória: reler, conferir maiúscula, ponto, acento e passar a limpo.",
      ],
    },
    {
      emoji: "🗣️",
      titulo: "Conversa e oralidade em sala",
      descricao:
        "O 3º ano precisa aprender a defender ideia com argumento e a apresentar trabalho para a turma — é a base da produção de texto escrita.",
      itens: [
        "Roda de conversa: dar opinião e sustentar com um porquê.",
        "Reconto: recontar a leitura na ordem, com personagem, conflito e desfecho.",
        "Entrevista: preparar 4 perguntas, entrevistar alguém da família e anotar.",
        "Apresentação: expor uma pesquisa curta para a turma e ouvir a dos colegas.",
      ],
    },
    {
      emoji: "📖",
      titulo: "Leitura em voz alta todo dia",
      descricao:
        "A meta do 3º ano é ~90 palavras por minuto com entonação. Isso se conquista relendo o mesmo trecho, não lendo textos novos toda hora.",
      itens: [
        "Reler 3 vezes o mesmo trecho e comparar o tempo, respeitando vírgula e ponto.",
        "Ler diálogo em voz alta fazendo a voz de cada personagem.",
        "Biblioteca: um livro por semana, com ficha de 3 linhas sobre o que achou.",
        "Ler notícia curta do dia e dizer se cada frase é fato ou opinião.",
      ],
    },
  ],
};

export default curso;
