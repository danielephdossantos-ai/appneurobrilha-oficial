import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 5º Ano — "Mestres da Palavra"
 * ---------------------------------------------------------------
 * Faixa de 10 anos: o leitor já decodifica com fluência e agora precisa
 * de PENSAMENTO CRÍTICO — separar fato de opinião, identificar intenção
 * do autor, argumentar e produzir textos autorais.
 *
 * Visual: skin "cyber" do PlayerPortuguesV4 (obsidiana + violeta/esmeralda).
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
  slug: "portugues-5ano",
  disciplina: "Língua Portuguesa",
  ano: "5º Ano",
  titulo: "Mestres da Palavra",
  descricao:
    "Central de decodificação de textos: cada missão treina o leitor crítico a separar fato de opinião, farejar a intenção de quem escreve e construir argumentos que sustentam a própria voz.",
  corPrimaria: "#8B5CF6",
  corSecundaria: "#0B0F17",
  tipoAula: "portugues",
  unidades,
};

export default curso;
