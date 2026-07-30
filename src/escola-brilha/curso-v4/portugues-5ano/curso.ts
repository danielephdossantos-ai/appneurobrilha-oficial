import type { CursoPortugues, UnidadePortugues } from "../types";

/**
 * Curso: Língua Portuguesa 5º Ano — "A Conquista da Língua"
 * ---------------------------------------------------------------
 * Faixa de 10 anos: a criança lê com fluência, escreve textos longos
 * e agora precisa de LEITURA CRÍTICA, ESCRITA AUTÔNOMA e domínio
 * consciente da norma (acentuação, concordância, coesão).
 *
 * Visual: skin "tween" do PlayerPortuguesV4.
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
  titulo: "A Conquista da Língua",
  descricao:
    "Seis territórios a conquistar: ler nas entrelinhas, dominar a norma, montar frases firmes, reconhecer cada gênero, escrever com autoria e usar a voz com segurança.",
  corPrimaria: "#22d3ee",
  corSecundaria: "#0b1020",
  tipoAula: "portugues",
  unidades,
};

export default curso;
