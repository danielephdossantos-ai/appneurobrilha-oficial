
export type NivelDificuldade = 'simples' | 'intermediario' | 'complexo';

export interface PedagogicalActivity {
  id: string;
  titulo: string;
  serie?: string;
  faixaEtaria?: string;
  materia: string;
  habilidadeBNCC?: string;
  microHabilidade?: string;
  nivelDificuldade: NivelDificuldade;
  neuroPerfil: string[];
  tipoSensorial: string[];
  tempoMedio?: number; // em minutos
  objetivoPedagogico?: string;
  estrategiaPedagogica?: string;
  preRequisitos: string[];
  nivelCognitivo?: string;
  reforcoPositivo?: string;
  reforcoErro?: string;
  variacoes: any[];
  tipoResposta?: string;
  adaptacoes: Record<string, any>;
  tags: string[];
  created_at?: string;
  updated_at?: string;
}
