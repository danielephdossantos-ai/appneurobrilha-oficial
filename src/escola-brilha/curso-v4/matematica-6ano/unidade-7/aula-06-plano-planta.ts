import type { AulaV4 } from "../../types";

export const aula06_planoPlanta: AulaV4 = {
  slug: "u7-06-plano-cartesiano-planta", titulo: "Plano cartesiano, trajetos e plantas", iconeTrilha: "🗺️",
  bncc: ["EF06MA16", "EF06MA23", "EF06MA28"], duracaoMin: 25, metodologias: ["cpa", "skemp"],
  momento01_motivacao: { titulo: "Localizar e orientar", historia: "{NOME}, mapas e plantas precisam informar onde cada ponto está e como chegar até ele. Vamos usar pares ordenados, instruções passo a passo e vistas de cima." },
  momento02_exploracao: { instrucao: "No primeiro quadrante, leia primeiro a posição horizontal e depois a vertical.", cenas: [
    { tipo: "texto", texto: "O ponto (3, 2) significa: avance 3 unidades no eixo horizontal x e depois suba 2 unidades no eixo vertical y.", destaque: true },
    { tipo: "tabela", titulo: "Vértices de um retângulo", cabecalhos: ["Vértice", "Par ordenado", "Leitura"], linhas: [
      { rotulo: "A", valores: ["A", "(1, 1)", "x=1, y=1"] }, { rotulo: "B", valores: ["B", "(5, 1)", "x=5, y=1"] },
      { rotulo: "C", valores: ["C", "(5, 3)", "x=5, y=3"] }, { rotulo: "D", valores: ["D", "(1, 3)", "x=1, y=3"] },
    ] },
  ] },
  momento03_descoberta: { perguntaGuia: "O ponto (2, 5) é igual ao ponto (5, 2)?", pista: "A ordem informa primeiro x e depois y.", revelacao: "Não. (2,5) e (5,2) ocupam posições diferentes. Pares ordenados dependem da ordem." },
  momento04_explicacao: { titulo: "Do ponto ao trajeto e à planta", etapas: [
    { texto: "Associe cada vértice do polígono a um par ordenado.", exemploReal: { contexto: "A(1,1), B(4,1), C(4,4), D(1,4).", destaque: "Ligando A-B-C-D-A, formamos um quadrado." } },
    { texto: "Um algoritmo de deslocamento precisa ter passos claros e ordenados.", exemploReal: { contexto: "Parta de (1,1); avance 3 à direita; suba 2.", destaque: "Chegada: (4,3). Trocar a ordem pode alterar o trajeto, mesmo quando o destino coincide." } },
    { texto: "Planta baixa é uma representação vista de cima.", exemploReal: { contexto: "Paredes viram linhas; portas mostram passagens; móveis ocupam áreas.", destaque: "A legenda explica os símbolos e a escala relaciona desenho e tamanho real." } },
  ] },
  momento05_modelagem: { enunciado: "Partindo de (2,1), avance 4 unidades à direita e 3 para cima.", resposta: "(6,4)", passos: ["Horizontal: x = 2 + 4 = 6.", "Vertical: y = 1 + 3 = 4.", "Destino: (6,4)."] },
  momento06_praticaGuiada: { enunciado: "Qual ponto tem x=3 e y=5?", dica: "Escreva primeiro x.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "(3,5)" }, { nome: "(5,3)" }, { nome: "(3,3)" }, { nome: "(5,5)" }], respostaCerta: "(3,5)", feedbackAcerto: "🎯 Primeiro horizontal, depois vertical.", feedbackErro: "O par ordenado é escrito como (x,y)." } },
  momento07_praticaIndependente: { enunciado: "De (1,2), avance 5 à direita e 2 para cima. Onde chega?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "(6,4)" }, { nome: "(4,6)" }, { nome: "(5,2)" }, { nome: "(3,7)" }], respostaCerta: "(6,4)", feedbackAcerto: "🎯 (1+5, 2+2) = (6,4).", feedbackErro: "Atualize separadamente as coordenadas x e y." } },
  momento08_aplicacao: { contexto: "Em uma planta vista de cima, a mesa está no ponto (4,2) e a estante no ponto (4,5).", problema: "Qual deslocamento vertical leva da mesa à estante?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "Subir 3 unidades" }, { nome: "Descer 3 unidades" }, { nome: "Ir 2 à direita" }, { nome: "Subir 7 unidades" }], respostaCerta: "Subir 3 unidades", feedbackAcerto: "🎯 O x não muda; y passa de 2 para 5.", feedbackErro: "5 − 2 = 3 unidades para cima." } },
  momento09_revisao: { pontos: ["Par ordenado: (x,y).", "No primeiro quadrante, x e y são não negativos.", "Algoritmos descrevem passos em ordem.", "Planta baixa representa o espaço visto de cima."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "No ponto (7,2), a coordenada horizontal é:", opcoes: ["7", "2", "9", "5"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "A primeira coordenada é x." },
    { pergunta: "De (2,2), subir 4 leva a:", opcoes: ["(2,6)", "(6,2)", "(4,4)", "(2,4)"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Somente y aumenta." },
    { pergunta: "Uma planta baixa mostra o ambiente:", opcoes: ["Visto de cima", "Visto apenas de frente", "Sem posição dos objetos", "Sem legenda possível"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Planta baixa é uma vista superior." },
  ] },
  momento11_missaoFamilia: { titulo: "Planta simples e trajeto", materiais: ["Papel, lápis e régua"], passos: ["Desenhe uma planta simples de um cômodo visto de cima.", "Crie uma malha e marque dois objetos com pares ordenados.", "Escreva um algoritmo de deslocamento entre eles."], registro: "📸 Foto da planta e das instruções." },
  recompensa: { xp: 185, moedas: 95 },
};
