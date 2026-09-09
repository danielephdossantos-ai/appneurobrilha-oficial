import type { CursoAny } from "./types";

export type PilarPedagogico = {
  titulo: string;
  descricao: string;
  icone: string;
};

export type PerfilPedagogico = {
  titulo: string;
  descricao: string;
  pilares: PilarPedagogico[];
};

function basePortugues(): PerfilPedagogico {
  return {
    titulo: "Leitura guiada e alfabetização sólida",
    descricao:
      "O curso combina oralidade, consciência fonêmica, leitura com apoio e escrita guiada para transformar sons, letras e sentidos em autonomia.",
    pilares: [
      { titulo: "Leitura guiada", descricao: "Texto curto, apoio visual e linguagem simples para decodificar com segurança.", icone: "📖" },
      { titulo: "Escrita guiada", descricao: "Ditado, cópia e produção curta com apoio gradual do professor e do app.", icone: "✍️" },
      { titulo: "Oralidade", descricao: "Falamos antes de escrever para organizar ideias e ampliar vocabulário.", icone: "🗣️" },
      { titulo: "Repetição intencional", descricao: "Cada conceito retorna com novas tarefas para consolidar a aprendizagem.", icone: "🔁" },
    ],
  };
}

function baseCiencia(): PerfilPedagogico {
  return {
    titulo: "Observação, experimentação e sentido",
    descricao:
      "A aula convida a olhar, comparar, testar e concluir com linguagem acessível e contexto do cotidiano.",
    pilares: [
      { titulo: "Observação", descricao: "As imagens e os objetos ajudam a perceber o que está acontecendo antes de explicar.", icone: "🔎" },
      { titulo: "Experimentação", descricao: "A criança testa ideias, compara resultados e aprende com a ação.", icone: "🧪" },
      { titulo: "Conexão com o real", descricao: "Cada conceito volta para situações da vida diária, da escola e da casa.", icone: "🌍" },
      { titulo: "Revisão ativa", descricao: "O conteúdo retorna em perguntas e atividades para fixar o que foi aprendido.", icone: "✅" },
    ],
  };
}

export function getPerfilPedagogico(curso: CursoAny): PerfilPedagogico | undefined {
  if (curso.tipoAula === "portugues") {
    return basePortugues();
  }

  if (curso.disciplina === "Ciências" || curso.disciplina === "Geografia" || curso.disciplina === "História") {
    return baseCiencia();
  }

  return {
    titulo: "Aprendizagem com estrutura e apoio",
    descricao:
      "A proposta segue uma jornada clara: despertar interesse, mostrar o conceito, praticar e revisar com segurança.",
    pilares: [
      { titulo: "Motivação", descricao: "A aula começa com um contexto que faz sentido para a criança.", icone: "🎯" },
      { titulo: "Exploração", descricao: "Os materiais e as perguntas ajudam a perceber o conteúdo com mais clareza.", icone: "👀" },
      { titulo: "Prática", descricao: "O aluno exercita o conhecimento em passos curtos e repetidos.", icone: "🧩" },
      { titulo: "Revisão", descricao: "O aprendizado é retomado ao longo da trajetória para consolidar.", icone: "🔁" },
    ],
  };
}
