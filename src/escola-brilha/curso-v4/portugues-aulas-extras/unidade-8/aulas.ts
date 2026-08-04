import type { AulaExtraLousa } from "../types-extras";

export const aulaOracoesCoordenadas: AulaExtraLousa = {
  slug: "oracoes-coordenadas-mapa",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "desafio",
  titulo: "Orações Coordenadas (Mapa das Conjunções)",
  iconeTrilha: "🗺️",
  cenasLousa: [
    {
      tituloLousa: "Os 5 Tipos de Coordenação",
      blocos: [
        {
          id: "oc1-b1",
          tipo: "formula",
          conteudo: "1. Aditiva (+)\n2. Adversativa (Mas/Porém)\n3. Alternativa (Ou...ou)\n4. Conclusiva (Portanto)\n5. Explicativa (Pois)",
          cor: "laranja",
          falaProfessor: "As orações coordenadas são independentes, mas precisam de conectivos para criar sentido juntas.",
        },
        {
          id: "oc1-b2",
          tipo: "nota-pais",
          conteudo: "Ajude seu filho a memorizar as 3 principais adversativas: mas, porém, contudo.",
          cor: "azul"
        }
      ],
    },
  ],
};

export const aulaOracoesSubordinadas: AulaExtraLousa = {
  slug: "oracoes-subordinadas-conectando",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "desafio",
  titulo: "Orações Subordinadas (Conectando Frases)",
  iconeTrilha: "🔗",
  cenasLousa: [
    {
      tituloLousa: "O Teste do 'ISSO'",
      blocos: [
        {
          id: "os1-b1",
          tipo: "formula",
          conteudo: "Frase após o verbo = ISSO?\nEntão é Subordinada Substantiva!",
          cor: "laranja",
          falaProfessor: "A oração subordinada depende da principal. Se você conseguir trocar ela toda pela palavra ISSO, você achou uma substantiva!",
        },
        {
          id: "os1-b2",
          tipo: "nota-pais",
          conteudo: "Se conseguir trocar a frase toda após o verbo pela palavra 'ISSO', é uma Oração Subordinada Substantiva!",
          cor: "azul"
        }
      ],
    },
  ],
};

export const aulaConcordanciaHaver: AulaExtraLousa = {
  slug: "concordancia-verbo-haver",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "desafio",
  titulo: "Concordância Crítica e o Verbo HAVER",
  iconeTrilha: "⚠️",
  cenasLousa: [
    {
      tituloLousa: "O Solitário Verbo HAVER",
      blocos: [
        {
          id: "ch1-b1",
          tipo: "formula",
          conteudo: "HAVER (Sentido de Existir) = Sempre SINGULAR!\nEx: 'Houve problemas' (Certo) / 'Houveram' (Errado)",
          cor: "laranja",
          falaProfessor: "Cuidado! O verbo haver no sentido de existir é teimoso e não vai para o plural.",
        },
        {
          id: "ch1-b2",
          tipo: "nota-pais",
          conteudo: "A regra do verbo HAVER é a pegadinha que mais cai em provas de 9º ano e concursos.",
          cor: "azul"
        }
      ],
    },
  ],
};

export const aulaConcordanciaNominal: AulaExtraLousa = {
  slug: "concordancia-nominal-sem-erros",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "medio",
  titulo: "Concordância Nominal Sem Erros",
  iconeTrilha: "🤝",
  cenasLousa: [
    {
      tituloLousa: "Palavras que Variam",
      blocos: [
        {
          id: "cn1-b1",
          tipo: "formula",
          conteudo: "Anexo, Mesmo, Obrigado, Incluso.\nEx: 'Ela mesma disse obrigada'.",
          cor: "laranja",
          falaProfessor: "Essas palavras são como camaleões: elas mudam para combinar com quem está falando ou com o objeto.",
        },
        {
          id: "cn1-b2",
          tipo: "nota-pais",
          conteudo: "Ensine que meninas dizem 'obrigada' e meninos dizem 'obrigado'.",
          cor: "azul"
        }
      ],
    },
  ],
};

export const aulaRegenciaVerbalProva: AulaExtraLousa = {
  slug: "regencia-verbal-prova",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "desafio",
  titulo: "Regência Verbal de Prova",
  iconeTrilha: "🎓",
  cenasLousa: [
    {
      tituloLousa: "O Verbo ASSISTIR",
      blocos: [
        {
          id: "rv1-b1",
          tipo: "formula",
          conteudo: "Assistir (Ver) = AO (Assistir ao filme)\nAssistir (Ajudar) = O (Assistir o paciente)",
          cor: "laranja",
          falaProfessor: "A regência muda o sentido! Se você vai ver um filme, precisa do 'AO'. Se vai ajudar alguém, não precisa.",
        },
        {
          id: "rv1-b2",
          tipo: "nota-pais",
          conteudo: "Lembre a criança de que quem assiste a uma TV ou jogo na verdade 'assiste AO jogo'.",
          cor: "azul"
        }
      ],
    },
  ],
};
