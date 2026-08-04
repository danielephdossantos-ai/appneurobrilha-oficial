import type { AulaExtraLousa } from "../types-extras";

export const aulaCrase: AulaExtraLousa = {
  slug: "crase-sem-medo",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "medio",
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
          conteudo: "A (Preposição) + A (Artigo) = À",
          cor: "laranja",
          falaProfessor: "A fórmula é simples: Preposição mais Artigo resulta no A com acento grave.",
        },
        {
          id: "c1-b3",
          tipo: "nota-pais",
          conteudo: "Peça para seu filho trocar a palavra feminina da frase pela palavra 'CLUBE'. Se virar 'AO CLUBE', coloque o crase!",
          cor: "azul"
        }
      ],
      desafioRelampago: {
        pergunta: "Em qual caso ocorre crase?",
        opcoes: ["Fui a escola", "Comprei a caneta", "Falei a ele"],
        correta: 0,
      },
    },
    {
      tituloLousa: "Método 'Troca pelo Macho'",
      blocos: [
        {
          id: "c2-b1",
          tipo: "formula",
          conteudo: "Troque a palavra feminina por uma masculina. Deu 'AO'? Tem crase no 'À'!",
          cor: "verde",
          falaProfessor: "Grave esse macete: se ao trocar por uma palavra masculina aparecer o AO, a crase está confirmada!",
        },
        {
          id: "c2-b2",
          tipo: "exemplo",
          conteudo: "'Vou à praia' -> 'Vou ao clube' (Tem crase!) \n'Falo a ela' -> 'Falo ao ele?' Não! (Sem crase)",
          cor: "azul",
          falaProfessor: "Veja o exemplo: Praia virou clube com AO, então tem crase. Ela não vira AO ELE, então fica sem!",
        },
      ],
      modoSocorro: {
        titulo: "Dica de Ouro",
        macete: "Substitua a palavra feminina por uma masculina. Se virar 'AO', tem crase!",
      },
    },
  ],
};

export const aulaCraseProibida: AulaExtraLousa = {
  slug: "radar-crase-proibida",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "desafio",
  titulo: "Radar de Crase Proibida",
  iconeTrilha: "🚫",
  cenasLousa: [
    {
      tituloLousa: "Zonas Proibidas",
      blocos: [
        {
          id: "cp1-b1",
          tipo: "formula",
          conteudo: "NUNCA use crase antes de:\n1. Verbos (a andar)\n2. Palavras Masculinas (a pé)\n3. Pronomes (a ela/a você)\n4. Plural com 'A' no singular (a todas)",
          cor: "laranja",
          falaProfessor: "Existem lugares onde a crase nunca pisa. Antes de verbo ou palavra masculina é proibido!",
        },
        {
          id: "cp1-b2",
          tipo: "nota-pais",
          conteudo: "Mostre que verbo não tem sexo (não é masculino nem feminino), por isso nunca aceita artigo 'A' nem crase.",
          cor: "azul"
        }
      ],
    },
  ],
};

export const aulaConjugacaoVerbal: AulaExtraLousa = {
  slug: "conjugacao-verbal-descomplicada",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "medio",
  titulo: "Conjugação Verbal Descomplicada",
  iconeTrilha: "⏳",
  cenasLousa: [
    {
      tituloLousa: "Linha do Tempo dos Pretéritos",
      blocos: [
        {
          id: "cv1-b1",
          tipo: "formula",
          conteudo: "• Perfeito: Aconteceu e acabou (Estudei)\n• Imperfeito: Costumava acontecer (Estudava)\n• Mais-que-perfeito: Antes de outro passado (Estudara)",
          cor: "laranja",
          falaProfessor: "O passado tem nuances! O perfeito é o que acabou, o imperfeito é o que se repetia.",
        },
        {
          id: "cv1-b2",
          tipo: "nota-pais",
          conteudo: "Ensine que o Pretérito Imperfeito sempre lembra algo repetitivo no passado ('Antigamente eu jogava...').",
          cor: "azul"
        }
      ],
    },
  ],
};

export const aulaModoSubjuntivo: AulaExtraLousa = {
  slug: "modo-subjuntivo-duvida",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "desafio",
  titulo: "O Modo Subjuntivo (Reino da Dúvida)",
  iconeTrilha: "❓",
  cenasLousa: [
    {
      tituloLousa: "Os 3 Gatilhos do Subjuntivo",
      blocos: [
        {
          id: "ms1-b1",
          tipo: "formula",
          conteudo: "1. Presente = QUE eu fale\n2. Pretérito = SE eu falasse\n3. Futuro = QUANDO eu falar",
          cor: "laranja",
          falaProfessor: "O subjuntivo é o modo do desejo e da dúvida. Use esses gatilhos para não errar a forma do verbo.",
        },
        {
          id: "ms1-b2",
          tipo: "nota-pais",
          conteudo: "Peça para o aluno colocar a palavra 'Se' ou 'Quando' antes do verbo para achar a conjugação correta sem memorizar tabelas.",
          cor: "azul"
        }
      ],
    },
  ],
};

export const aulaVozesVerbais: AulaExtraLousa = {
  slug: "vozes-verbais-passiva",
  isAulaExtra: true,
  fase: "fase3",
  difficulty: "desafio",
  titulo: "Agente da Passiva e Vozes Verbais",
  iconeTrilha: "🗣️",
  cenasLousa: [
    {
      tituloLousa: "Voz Ativa vs. Voz Passiva",
      blocos: [
        {
          id: "vv1-b1",
          tipo: "exemplo",
          conteudo: "• Voz Ativa: O gato comeu o peixe.\n• Voz Passiva: O peixe foi comido pelo gato.",
          cor: "laranja",
          falaProfessor: "Na voz ativa, o sujeito age. Na voz passiva, o sujeito sofre a ação. O peixe virou o astro da frase!",
        },
        {
          id: "vv1-b2",
          tipo: "nota-pais",
          conteudo: "Na voz passiva, o sujeito 'sofre' a ação em vez de praticar. Ajude a identificar quem está recebendo a ação.",
          cor: "azul"
        }
      ],
    },
  ],
};
