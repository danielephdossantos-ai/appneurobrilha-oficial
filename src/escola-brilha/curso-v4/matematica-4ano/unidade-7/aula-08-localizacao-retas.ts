import type { AulaV4 } from "../../types";

export const aula08_localizacaoRetas: AulaV4 = {
  slug: "u7-08-localizacao-retas",
  titulo: "Rotas, Paralelas e Perpendiculares",
  iconeTrilha: "🗺️",
  bncc: ["EF04MA16"],
  duracaoMin: 22,
  metodologias: ["cpa", "rme"],
  momento01_motivacao: { titulo: "Mapa do reino", historia: "Para explicar uma rota, precisamos indicar posição, direção e sentido. As ruas também podem ser paralelas ou se cruzar formando ângulos retos." },
  momento02_exploracao: { instrucao: "Leia a rota numa malha.", cenas: [{ tipo: "texto", texto: "Partida (2,B): avance 3 colunas à direita e 2 linhas acima." }, { tipo: "texto", texto: "Direção horizontal, sentido direita; depois direção vertical, sentido acima.", destaque: true }] },
  momento03_descoberta: { perguntaGuia: "Qual a diferença entre direção e sentido?", pista: "Horizontal e vertical são direções; direita, esquerda, acima e abaixo são sentidos.", revelacao: "A direção indica a linha do movimento; o sentido indica para qual lado seguimos." },
  momento04_explicacao: { titulo: "Descrever caminhos", etapas: [
    { texto: "Retas paralelas seguem a mesma direção e não se cruzam.", exemploReal: { contexto: "As duas bordas retas de uma estrada.", destaque: "Mantêm sempre a mesma distância." } },
    { texto: "Retas perpendiculares se cruzam formando quatro ângulos retos.", exemploReal: { contexto: "Uma rua horizontal cruza outra vertical.", destaque: "O encontro forma ângulos de 90 graus." } },
    { texto: "Uma rota completa informa ponto de partida, direção, sentido e distância.", exemploReal: { contexto: "De (1,A), duas colunas à direita chegam a (1,C).", destaque: "A linha permanece 1 e a coluna muda de A para C." } },
  ] },
  momento05_modelagem: { enunciado: "Saia de (4,D), suba 2 linhas e ande 1 coluna à esquerda.", passos: ["Subir 2 linhas: (4,D) → (2,D).", "Esquerda 1 coluna: (2,D) → (2,C)."], resposta: "Chegada em (2,C)" },
  momento06_praticaGuiada: { enunciado: "De (3,B), avance 2 colunas à direita.", dica: "A linha permanece 3.", interacao: { tipo: "escolhaVisual", pergunta: "Onde chega?", opcoes: [{ nome: "(3,D)" }, { nome: "(5,B)" }, { nome: "(3,A)" }], respostaCerta: "(3,D)", feedbackAcerto: "A linha ficou 3 e B avançou duas colunas até D.", feedbackErro: "Conte horizontalmente: B → C → D, mantendo a linha 3." } },
  momento07_praticaIndependente: { enunciado: "Duas ruas horizontais que nunca se cruzam são:", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "Paralelas" }, { nome: "Perpendiculares" }, { nome: "Iguais" }], respostaCerta: "Paralelas", feedbackAcerto: "Retas paralelas têm a mesma direção e não se cruzam.", feedbackErro: "Perpendiculares se cruzam em ângulo reto; paralelas não se cruzam." } },
  momento08_aplicacao: { contexto: "Uma avenida horizontal cruza uma rua vertical formando quatro esquinas iguais.", problema: "Como são essas retas?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "Perpendiculares" }, { nome: "Paralelas" }, { nome: "Curvas" }], respostaCerta: "Perpendiculares", feedbackAcerto: "Horizontal e vertical se cruzam formando ângulos retos.", feedbackErro: "Observe o cruzamento de 90 graus: isso caracteriza retas perpendiculares." } },
  momento09_revisao: { pontos: ["Direção: horizontal ou vertical.", "Sentido: direita, esquerda, acima ou abaixo.", "Paralelas não se cruzam; perpendiculares formam ângulo reto."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "De (5,C), duas linhas acima chegam a:", opcoes: ["(3,C)", "(7,C)", "(5,E)"], correta: 0, feedbackAcerto: "Subir duas linhas leva de 5 para 3 e mantém a coluna C.", feedbackErro: "O movimento é vertical: 5 → 4 → 3, sem mudar a coluna." },
    { pergunta: "Retas que não se cruzam e mantêm a distância são:", opcoes: ["Paralelas", "Perpendiculares", "Curvas"], correta: 0, feedbackAcerto: "Essa é a definição de retas paralelas.", feedbackErro: "Retas perpendiculares se cruzam; paralelas mantêm a distância." },
    { pergunta: "Retas que se cruzam formando 90 graus são:", opcoes: ["Perpendiculares", "Paralelas", "Coincidentes"], correta: 0, feedbackAcerto: "Retas perpendiculares formam ângulos retos no encontro.", feedbackErro: "O cruzamento em 90 graus caracteriza perpendicularidade." },
  ] },
  momento11_missaoFamilia: { titulo: "Mapa de rotas", materiais: ["Papel quadriculado", "Régua", "Lápis"], passos: ["Desenhe duas ruas paralelas.", "Acrescente uma rua perpendicular.", "Marque partida e chegada e escreva a rota."], registro: "Fotografe o mapa e a descrição." },
  recompensa: { xp: 220, moedas: 110 },
};
