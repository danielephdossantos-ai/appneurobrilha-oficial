/**
 * SPEB 1.0 · Arte · Contrato oficial (v2 — Ateliê Vivo)
 *
 * Arquitetura obrigatória a partir da Aula 1 "Meu Primeiro Retrato de Artista":
 *   0 · Cena de abertura (ateliê vivo, Brilha entra, cavalete vazio)
 *   1 · Espelho do Artista (brincadeira de expressões)
 *   2 · Visitando Grandes Artistas (galeria interativa, tocar em cada obra)
 *   3 · Aprendendo a Desenhar (canvas guiado passo-a-passo)
 *   4 · Minha Primeira Obra (canvas livre, Brilha comenta suavemente)
 *   5 · As Cores Também Falam (emoção troca a paleta)
 *   6 · Galeria Brilha (quadro sobe pra parede, moldura dourada, confetes)
 *   7 · Missão em Família (opcional — desenhar alguém e fotografar)
 *   8 · Meu Ateliê Cresceu (recompensa: nova decoração permanente)
 *   9 · Encerramento (Pincel dourado + mensagem)
 *
 * Os jogos deixam de ser o centro. A experiência é o ritual do ateliê.
 */

export type ExpressaoEspelho = {
  emoji: string;
  desafio: string;
  falaBrilha: string;
};

export type ObraGaleria = {
  id: string;
  artista: string;
  pais: string;
  obra: string;
  falaBrilha: string; // o que Brilha diz quando a criança toca no quadro
  cor: string; // cor dominante para o card (token do design system)
};

export type PassoTutorial = {
  titulo: string;
  fala: string; // fala do Brilha durante o passo
};

export type EmocaoPaleta = {
  nome: string;
  emoji: string;
  paleta: string[]; // hex das cores que aparecem no canvas quando escolhida
  falaBrilha: string;
};

export type DecoracaoAtelie = {
  id: string;
  nome: string; // "planta suculenta"
  emoji: string; // "🪴"
  posicao: { x: number; y: number }; // % dentro da cena
};

export type AulaArte = {
  slug: string;
  unidade: { numero: number; titulo: string; subtitulo: string };
  titulo: string;
  duracaoMin: string;

  // Cena de abertura — Brilha entra correndo no ateliê
  abertura: {
    falasBrilha: string[]; // aparecem em sequência
    botaoComecar: string; // "🎨 Começar minha primeira obra"
  };

  // Etapa 1 — Espelho do Artista
  espelho: {
    intro: string;
    expressoes: ExpressaoEspelho[];
    fechamento: string;
  };

  // Etapa 2 — Galeria interativa
  galeriaInterativa: {
    intro: string;
    obras: ObraGaleria[];
    convite: string; // "🎨 Agora chegou a sua vez."
  };

  // Etapa 3 — Aprendendo a desenhar (guiado)
  aprender: {
    intro: string;
    passos: PassoTutorial[];
    fechamento: string;
  };

  // Etapa 4 — Minha primeira obra (livre)
  obraLivre: {
    instrucao: string;
    comentariosBrilha: string[]; // aparecem rotacionando enquanto desenha
    legendaSalvar: string;
  };

  // Etapa 5 — Cores × Emoção
  cores: {
    pergunta: string; // "Como você está hoje?"
    emocoes: EmocaoPaleta[];
  };

  // Etapa 6 — Galeria Brilha (animação de moldura)
  galeria: {
    intro: string;
    exemploTitulo: string;
    parabens: string;
  };

  // Etapa 7 — Missão em Família
  missaoFamilia: {
    convite: string;
    entregavel: string;
  };

  // Etapa 8 — Ateliê Cresceu
  atelieCresceu: {
    decoracao: DecoracaoAtelie; // nova decoração desbloqueada nesta aula
    falaBrilha: string;
  };

  // Encerramento — pincel dourado
  encerramento: {
    recompensa: string; // "Pincel da Observação"
    icone: string; // "🖌️"
    mensagem: string;
  };
};
