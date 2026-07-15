/**
 * Arte · 1º Ano — Estúdio Brilha
 * Engine independente. Cada aula tem 12 momentos SPEB 1.0 obrigatórios.
 */

export type EixoArte = "visuais" | "musica" | "danca" | "teatro" | "integradas";

export interface HistoriaCena {
  imagem?: string;      // url opcional
  emoji?: string;       // fallback ilustrativo grande
  fundo?: string;       // cor de fundo da cena
  texto: string;        // narrado por TTS
}

export interface AtividadeArtistica {
  titulo: string;
  passos: string[];       // instruções curtas, narradas em sequência
  materiais?: string[];   // "papel", "lápis de cor"...
}

export interface FerramentaDesenho {
  brief: string;           // o que a criança deve desenhar/pintar
  cores?: string[];        // paleta sugerida (hex)
  imagemBase?: string;     // desenho para colorir (opcional, PNG contorno preto)
}

export interface MomentoMusica {
  titulo: string;
  padrao: Array<"palma" | "pé" | "boca" | "silencio">;  // sequência p/ tocar
  bpm?: number;             // 60 default
}

export interface MomentoTeatro {
  titulo: string;
  emocao: string;           // "alegria", "surpresa"...
  emoji: string;
  fala: string;             // frase p/ gravar
}

export interface MomentoMovimento {
  titulo: string;
  poses: Array<{ nome: string; emoji: string; segundos: number }>;
}

export interface JogoArte {
  tipo: "combinarCores" | "sequenciaRitmo" | "encontrarForma";
  titulo: string;
  dados: any;
}

export interface Registro {
  pergunta: string;         // "Tire uma foto do seu arco-íris"
  tipo: "foto" | "audio";
}

export interface Conquista {
  medalha: string;          // emoji
  nome: string;
  descricao: string;
}

export interface AulaArte {
  slug: string;             // "aula-01-cores-primarias"
  numero: number;
  eixoPrincipal: EixoArte;
  titulo: string;
  subtitulo: string;
  historia: HistoriaCena[];             // 1
  atividade: AtividadeArtistica;        // 2
  video?: { titulo: string; descricao: string; poster?: string }; // 3 (placeholder)
  ferramenta: FerramentaDesenho;        // 4
  musica: MomentoMusica;                // 5
  teatro: MomentoTeatro;                // 6
  movimento: MomentoMovimento;          // 7
  // 8 galeria — vem do supabase (compartilhada)
  jogo: JogoArte;                       // 9
  registro: Registro;                   // 10
  conquista: Conquista;                 // 11
  relatorio: string[];                  // 12 — bullets curtos p/ o adulto
}

export interface UnidadeArte {
  slug: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  tema: string;
  projeto: string;
  corPrincipal: string;       // hex — cor de destaque da unidade
  emoji: string;
  aulas: AulaArte[];
}
