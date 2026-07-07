import type { CursoGeografia } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";

/**
 * Curso: Geografia 1º Ano — "Pequenos Exploradores do Mundo"
 * -----------------------------------------------------------
 * Contrato SPEB 1.0 · Geografia (14 momentos por aula, contando as
 * Recompensas dentro da Continuação da Jornada).
 *
 * Narrativa: Brilha recebe uma mochila de explorador e um mapa mágico.
 * A cada unidade concluída, uma página do Grande Atlas da Terra é
 * restaurada. Ao final: 🏅 Pequeno Explorador do Mundo.
 *
 * As unidades ficam com aulas VAZIAS até serem escritas — a trilha
 * mostra "🚧 em produção" nesse caso (comportamento herdado da
 * trilha genérica).
 */
const curso: CursoGeografia = {
  slug: "geografia-1ano",
  disciplina: "Geografia",
  ano: "1º Ano",
  titulo: "Pequenos Exploradores do Mundo",
  descricao:
    "Brilha ganha uma mochila de explorador e um mapa mágico. A cada aventura, uma página do Grande Atlas da Terra é restaurada.",
  corPrimaria: "#22c55e",
  corSecundaria: "#082414",
  tipoAula: "geografia",
  unidades: [
    unidade1,
    unidade2,
    {
      slug: "unidade-3",
      numero: 3,
      titulo: "Descobrindo o Bairro",
      subtitulo: "Ruas, praças, comércio e serviços",
      descricao:
        "O mapa mágico se expande: agora é o BAIRRO. Pontos de referência, faixa de pedestre, mobilidade.",
      corTema: "#3b82f6",
      aulas: [],
    },
    {
      slug: "unidade-4",
      numero: 4,
      titulo: "As Paisagens ao Nosso Redor",
      subtitulo: "Campo, cidade, floresta, praia, montanha, rio",
      descricao:
        "Comparações lado a lado: onde a natureza é dona × onde as pessoas construíram tudo.",
      corTema: "#10b981",
      aulas: [],
    },
    {
      slug: "unidade-5",
      numero: 5,
      titulo: "A Natureza Faz Parte da Nossa Vida",
      subtitulo: "Sol, chuva, vento, plantas, animais, água",
      descricao:
        "Painel climático animado, estações do ano e experimentos simples pra sentir a natureza.",
      corTema: "#06b6d4",
      aulas: [],
    },
    {
      slug: "unidade-6",
      numero: 6,
      titulo: "Cuidando do Lugar Onde Vivemos",
      subtitulo: "Meio ambiente e cidadania",
      descricao:
        "Coleta seletiva, economia de água/energia, convivência. Cenários antes × depois.",
      corTema: "#84cc16",
      aulas: [],
    },
    {
      slug: "unidade-7",
      numero: 7,
      titulo: "Pequenos Exploradores do Mundo",
      subtitulo: "Revisão geral + projeto Meu Primeiro Mapa",
      descricao:
        "Fecha o Grande Atlas: revisão + projeto final onde a criança monta seu próprio mapa.",
      corTema: "#a855f7",
      aulas: [],
    },
  ],
};

export default curso;
