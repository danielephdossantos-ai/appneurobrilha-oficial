// Templates de planos automáticos por área (sem IA).
// Cada plano tem 4 semanas; cada semana tem um tema e palavras-chave
// usadas para localizar habilidades do banco em runtime.

export type AreaPlano =
  | "leitura"
  | "escrita"
  | "matematica"
  | "atencao"
  | "memoria"
  | "coordenacao-motora"
  | "linguagem";

export interface SemanaTemplate {
  numero: number;
  tema: string;
  descricao: string;
  keywords: string[];
}

export interface PlanoTemplate {
  area: AreaPlano;
  titulo: string;
  semanas: SemanaTemplate[];
}

export const PLANOS_TEMPLATES: Record<AreaPlano, PlanoTemplate> = {
  leitura: {
    area: "leitura",
    titulo: "Plano de Leitura — 4 semanas",
    semanas: [
      { numero: 1, tema: "Consciência fonológica", descricao: "Identificar sons, rimas e sílabas iniciais.", keywords: ["consciencia", "fonologica", "sons", "vogais", "rima"] },
      { numero: 2, tema: "Sílabas simples", descricao: "Reconhecer e separar sílabas CV (ba, be, bi).", keywords: ["silabas", "separar", "ba", "be"] },
      { numero: 3, tema: "Formação de palavras", descricao: "Juntar sílabas para formar palavras.", keywords: ["silabas", "juntar", "formar", "palavras", "alfabetizacao"] },
      { numero: 4, tema: "Leitura de frases", descricao: "Ler palavras e pequenas frases com fluência.", keywords: ["leitura", "ler", "palavras", "frases", "fluencia"] },
    ],
  },
  escrita: {
    area: "escrita",
    titulo: "Plano de Escrita — 4 semanas",
    semanas: [
      { numero: 1, tema: "Traçado e grafomotricidade", descricao: "Linhas, curvas e pinça.", keywords: ["tracado", "grafomotor", "coordenacao", "motora"] },
      { numero: 2, tema: "Letras isoladas", descricao: "Escrever vogais e consoantes simples.", keywords: ["letras", "vogais", "alfabeto"] },
      { numero: 3, tema: "Cópia de palavras", descricao: "Copiar palavras curtas com precisão.", keywords: ["copia", "copiar", "palavras", "escrita"] },
      { numero: 4, tema: "Escrita do próprio nome", descricao: "Escrever o nome e palavras significativas.", keywords: ["escrever", "nome", "escrita"] },
    ],
  },
  matematica: {
    area: "matematica",
    titulo: "Plano de Matemática — 4 semanas",
    semanas: [
      { numero: 1, tema: "Numerais e contagem", descricao: "Reconhecer e contar números.", keywords: ["numeros", "contagem", "contar"] },
      { numero: 2, tema: "Adição e dobro", descricao: "Somar até 10 e introduzir tabuada do 2.", keywords: ["adicao", "soma", "tabuada", "dois"] },
      { numero: 3, tema: "Multiplicação inicial", descricao: "Tabuada do 5.", keywords: ["tabuada", "cinco", "multiplicacao"] },
      { numero: 4, tema: "Tabuada do 9 e estratégias", descricao: "Tabuada do 9 com truque dos dedos.", keywords: ["tabuada", "nove", "truque"] },
    ],
  },
  atencao: {
    area: "atencao",
    titulo: "Plano de Atenção — 4 semanas",
    semanas: [
      { numero: 1, tema: "Atenção visual", descricao: "Achar diferenças, observar detalhes.", keywords: ["atencao", "visual", "diferencas"] },
      { numero: 2, tema: "Atenção sustentada", descricao: "Tarefas com duração crescente.", keywords: ["atencao", "sustentada", "foco"] },
      { numero: 3, tema: "Atenção auditiva", descricao: "Escutar e reagir a sons/instruções.", keywords: ["auditiva", "escutar", "atencao"] },
      { numero: 4, tema: "Foco em multitarefas", descricao: "Alternar entre estímulos.", keywords: ["foco", "concentracao", "atencao"] },
    ],
  },
  memoria: {
    area: "memoria",
    titulo: "Plano de Memória — 4 semanas",
    semanas: [
      { numero: 1, tema: "Memória visual", descricao: "Jogo da memória com figuras.", keywords: ["memoria", "visual", "figuras", "pares"] },
      { numero: 2, tema: "Memória auditiva", descricao: "Repetir sequências de sons/palavras.", keywords: ["memoria", "auditiva", "sequencia"] },
      { numero: 3, tema: "Memória de trabalho", descricao: "Lembrar e usar informação ao mesmo tempo.", keywords: ["memoria", "trabalho"] },
      { numero: 4, tema: "Memória de longo prazo", descricao: "Revisão espaçada de conteúdos.", keywords: ["memoria", "revisao"] },
    ],
  },
  "coordenacao-motora": {
    area: "coordenacao-motora",
    titulo: "Plano de Coordenação Motora — 4 semanas",
    semanas: [
      { numero: 1, tema: "Pinça e preensão", descricao: "Segurar lápis, manipular objetos pequenos.", keywords: ["pinca", "coordenacao", "motora"] },
      { numero: 2, tema: "Traçado", descricao: "Linhas retas, curvas e zig-zag.", keywords: ["tracado", "linhas", "grafomotor"] },
      { numero: 3, tema: "Recorte e colagem", descricao: "Uso da tesoura e movimentos bimanuais.", keywords: ["recortar", "colar", "tesoura", "bimanual"] },
      { numero: 4, tema: "Escrita refinada", descricao: "Coordenação aplicada à escrita.", keywords: ["escrita", "grafomotor", "coordenacao"] },
    ],
  },
  linguagem: {
    area: "linguagem",
    titulo: "Plano de Linguagem — 4 semanas",
    semanas: [
      { numero: 1, tema: "Vocabulário", descricao: "Expandir palavras conhecidas.", keywords: ["vocabulario", "linguagem", "palavras"] },
      { numero: 2, tema: "Oralidade", descricao: "Contar fatos e histórias.", keywords: ["oralidade", "fala", "linguagem"] },
      { numero: 3, tema: "Compreensão", descricao: "Entender instruções e textos curtos.", keywords: ["compreensao", "interpretacao", "leitura"] },
      { numero: 4, tema: "Comunicação", descricao: "Diálogo e expressão de ideias.", keywords: ["comunicacao", "linguagem"] },
    ],
  },
};
