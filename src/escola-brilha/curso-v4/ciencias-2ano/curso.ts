import type { CursoPortugues } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: Ciências 2º Ano — "Kit do Jovem Cientista"
 *
 * Identidade visual PRÓPRIA de aula de ciência (PlayerCienciasV4):
 * laboratório roxo/violeta, tipografia mono científica, badges "AMOSTRA N/11".
 * Mantém o esqueleto travado de 11 momentos com rótulos obrigatórios:
 * 🎬 Motivação · 🔮 Previsão · 📚 Vocabulário · 📖 Leitura guiada ·
 * 🧠 Compreensão · 🎭 Personagens & lugar · 🧩 Sequência · 💪 Você lê ·
 * 🎮 Minijogo · 🔁 Revisão · ✅ Avaliação · 🏠 Missão em Família.
 */
const curso: CursoPortugues = {
  slug: "ciencias-2ano",
  disciplina: "Ciências",
  ano: "2º Ano",
  titulo: "Kit do Jovem Cientista",
  descricao:
    "Brilha entra no Laboratório Escola Brilha com Aurora. Aprende a observar, perguntar, testar e registrar — como um verdadeiro cientista.",
  corPrimaria: "#a855f7",
  corSecundaria: "#17093a",
  tipoAula: "ciencias",
  unidades: [unidade1],
};

export default curso;
