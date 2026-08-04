import type { AulaPortuguesV4 } from "../types";

/**
 * Tipos estendidos para o Módulo de Aulas Extras (Lousa Interativa).
 */

export type CorLousa = "verde" | "laranja" | "azul" | "branco";

export type BlocoLousa = {
  id: string;
  tipo: "texto" | "formula" | "exemplo" | "nota-pais";
  conteudo: string;
  cor: CorLousa;
  posicao?: { x: number; y: number }; // Porcentagem 0-100
  falaProfessor: string;
};

export type AulaExtraLousa = Partial<AulaPortuguesV4> & {
  isAulaExtra: true;
  fase: "fase1" | "fase2" | "fase3";
  difficulty: "facil" | "medio" | "desafio";
  cenasLousa: Array<{
    tituloLousa: string;
    blocos: BlocoLousa[];
    desafioRelampago?: {
      pergunta: string;
      opcoes: string[];
      correta: number;
    };
    modoSocorro?: {
      titulo: string;
      macete: string;
    };
  }>;
};
