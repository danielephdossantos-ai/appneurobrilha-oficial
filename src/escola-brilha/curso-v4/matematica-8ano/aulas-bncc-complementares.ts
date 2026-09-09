import type { AulaV4 } from "../types";

type DadosAula = {
  slug: string;
  titulo: string;
  icone: string;
  bncc: string[];
  motivo: string;
  conceito: string;
  exemplos: [string, string, string, string];
  pergunta: string;
  opcoes: [string, string, string, string];
  resposta: string;
  explicacao: string;
  revisao: string[];
  avaliacao: Array<{ pergunta: string; opcoes: [string, string, string, string]; correta: number; explica: string }>;
};

/** Gera uma aula completa com os 11 momentos do contrato v4.1. */
function criarAula(d: DadosAula): AulaV4 {
  return {
    slug: d.slug,
    titulo: d.titulo,
    iconeTrilha: d.icone,
    bncc: d.bncc,
    duracaoMin: 35,
    metodologias: ["skemp", "vergnaud"],
    momento01_motivacao: { titulo: "Problema da oficina", historia: `{NOME}, ${d.motivo}` },
    momento02_exploracao: {
      instrucao: "Observe os exemplos em ordem e explique o que muda de um passo para o seguinte.",
      cenas: [
        { tipo: "tabela", titulo: d.titulo, cabecalhos: ["Passo", "Raciocínio"], linhas: d.exemplos.map((valor, i) => ({ rotulo: String(i + 1), valores: [valor] })) },
        { tipo: "texto", texto: `🔑 ${d.conceito}`, destaque: true },
      ],
    },
    momento03_descoberta: {
      perguntaGuia: d.pergunta,
      pista: d.exemplos[1],
      revelacao: d.explicacao,
      visualMat: {
        tipo: "trinomioPassoAPasso",
        trinomio: d.titulo,
        passos: d.exemplos.map((expr, i) => ({ expr, explica: `Passo ${i + 1}.`, status: i === 0 ? "neutro" : "ok" })),
        fatorada: d.resposta,
      },
    },
    momento04_explicacao: {
      titulo: "Entender antes de aplicar",
      etapas: d.exemplos.map((texto, i) => ({
        texto,
        exemploReal: {
          contexto: `Etapa ${i + 1}: relacione esta ação ao conceito da aula.`,
          visualMat: { tipo: "trinomioPassoAPasso", trinomio: texto, passos: [{ expr: texto, explica: d.conceito, status: "ok" }], fatorada: i === d.exemplos.length - 1 ? d.resposta : "Continue o raciocínio" },
          destaque: i === d.exemplos.length - 1 ? d.explicacao : "Cada passo precisa ter uma justificativa.",
        },
      })),
    },
    momento05_modelagem: {
      enunciado: d.pergunta,
      passos: [...d.exemplos],
      resposta: d.resposta,
      visualMat: { tipo: "trinomioPassoAPasso", trinomio: "Brilha resolve", passos: d.exemplos.map((expr, i) => ({ expr, explica: `Etapa ${i + 1}.`, status: i === d.exemplos.length - 1 ? "ok" : "neutro" })), fatorada: d.resposta },
    },
    momento06_praticaGuiada: {
      enunciado: d.pergunta,
      dica: d.conceito,
      interacao: { tipo: "escolhaVisual", pergunta: "Escolha e justifique:", opcoes: d.opcoes.map((nome) => ({ nome })), respostaCerta: d.resposta, feedbackAcerto: `🎯 ${d.explicacao}`, feedbackErro: `Volte ao conceito: ${d.conceito}` },
    },
    momento07_praticaIndependente: {
      enunciado: `Resolva sem pular etapas: ${d.pergunta}`,
      interacao: { tipo: "escolhaVisual", pergunta: "Qual resposta respeita todos os passos?", opcoes: d.opcoes.map((nome) => ({ nome })), respostaCerta: d.resposta, feedbackAcerto: `🎯 ${d.explicacao}`, feedbackErro: `Confira passo a passo. ${d.explicacao}` },
    },
    momento08_aplicacao: {
      contexto: "A oficina precisa registrar uma solução que outra pessoa consiga repetir e conferir.",
      problema: d.pergunta,
      interacao: { tipo: "escolhaVisual", pergunta: "Qual registro está correto?", opcoes: d.opcoes.map((nome) => ({ nome })), respostaCerta: d.resposta, feedbackAcerto: `🎯 A solução é verificável. ${d.explicacao}`, feedbackErro: `O registro precisa seguir a regra: ${d.conceito}` },
    },
    momento09_revisao: { pontos: d.revisao },
    momento10_avaliacao: {
      perguntas: d.avaliacao.map((q) => ({ pergunta: q.pergunta, opcoes: [...q.opcoes], correta: q.correta, feedbackAcerto: `🎉 ${q.explica}`, feedbackErro: q.explica })),
    },
    momento11_missaoFamilia: {
      titulo: "Explique para alguém",
      materiais: ["Papel", "Lápis", "Régua se necessário"],
      passos: ["Copie um exemplo da aula.", "Resolva mostrando cada etapa.", "Explique em voz alta por que cada etapa funciona.", "Peça à pessoa para conferir usando a regra da aula."],
      registro: "📸 Foto do exemplo resolvido e conferido.",
    },
    recompensa: { xp: 250, moedas: 125, medalha: "Especialista BNCC" },
  };
}

export const aulaRadiciacao = criarAula({
  slug: "u1-08-potenciacao-radiciacao", titulo: "Potenciação e Radiciação", icone: "√", bncc: ["EF08MA02"],
  motivo: "raízes e potências são operações relacionadas. Você vai usar essa relação para representar raízes como potências de expoente fracionário e resolver problemas.",
  conceito: "Para a > 0, a^(1/n) é a raiz n-ésima de a; portanto (a^(1/n))^n = a.",
  exemplos: ["√81 = 9 porque 9² = 81", "81^(1/2) = √81", "∛64 = 4 porque 4³ = 64", "64^(1/3) = 4"],
  pergunta: "Qual é o valor de 125^(1/3)?", opcoes: ["5", "25", "15", "3"], resposta: "5", explicacao: "Como 5³ = 125, então 125^(1/3) = ∛125 = 5.",
  revisao: ["Expoente 1/2 representa raiz quadrada.", "Expoente 1/3 representa raiz cúbica.", "Confira elevando o resultado ao índice da raiz."],
  avaliacao: [
    { pergunta: "16^(1/2) vale:", opcoes: ["4", "8", "2", "16"], correta: 0, explica: "4² = 16." },
    { pergunta: "27^(1/3) vale:", opcoes: ["3", "9", "6", "1"], correta: 0, explica: "3³ = 27." },
    { pergunta: "√49 escrita como potência é:", opcoes: ["49^(1/2)", "49²", "49^(1/3)", "2^49"], correta: 0, explica: "Raiz quadrada corresponde ao expoente 1/2." },
  ],
});

export const aulaEquacoesPlano = criarAula({
  slug: "u4-00-equacoes-no-plano", titulo: "Equações Lineares no Plano", icone: "📈", bncc: ["EF08MA07", "EF08MA08"],
  motivo: "uma equação com x e y representa vários pares ordenados. No gráfico, esses pares formam uma reta; duas retas se cruzam na solução do sistema.",
  conceito: "Cada par (x,y) que torna ax + by = c verdadeira é um ponto da reta; a interseção de duas retas satisfaz as duas equações.",
  exemplos: ["x + y = 6", "se x=0, y=6 → ponto (0,6)", "se x=6, y=0 → ponto (6,0)", "a reta passa por (0,6) e (6,0)"],
  pergunta: "Qual ponto pertence à reta x + y = 6?", opcoes: ["(2,4)", "(2,3)", "(6,6)", "(0,5)"], resposta: "(2,4)", explicacao: "Substituindo: 2 + 4 = 6; portanto o ponto pertence à reta.",
  revisao: ["Uma equação linear com duas incógnitas forma uma reta.", "Teste um ponto substituindo x e y.", "A interseção resolve simultaneamente as duas equações."],
  avaliacao: [
    { pergunta: "Qual ponto pertence a y=2x+1?", opcoes: ["(2,5)", "(2,4)", "(1,1)", "(0,2)"], correta: 0, explica: "2·2+1=5." },
    { pergunta: "A solução gráfica de um sistema é:", opcoes: ["a interseção das retas", "qualquer ponto", "o eixo x", "a origem sempre"], correta: 0, explica: "Na interseção, as duas equações são verdadeiras." },
    { pergunta: "Se duas retas paralelas distintas não se cruzam, o sistema tem:", opcoes: ["nenhuma solução", "uma solução", "duas soluções", "solução (0,0)"], correta: 0, explica: "Sem interseção, nenhum par satisfaz as duas." },
  ],
});

export const aulaEquacaoQuadratica = criarAula({
  slug: "u4-07-equacao-ax2-b", titulo: "Equações do Tipo ax² = b", icone: "x²", bncc: ["EF08MA09"],
  motivo: "alguns problemas de área levam a uma equação com x². Você vai isolar o quadrado, extrair a raiz e interpretar quais soluções fazem sentido.",
  conceito: "Em ax²=b, primeiro divida por a; depois resolva x²=b/a. Em números reais, x pode ter dois sinais quando b/a é positivo.",
  exemplos: ["3x² = 75", "x² = 25", "x = 5 ou x = −5", "se x é medida de lado, usamos x = 5"],
  pergunta: "Quais são as soluções reais de 2x² = 32?", opcoes: ["x=4 ou x=−4", "x=16", "x=8 ou x=−8", "x=4 apenas"], resposta: "x=4 ou x=−4", explicacao: "Dividindo por 2: x²=16. Tanto 4² quanto (−4)² valem 16.",
  revisao: ["Isole x² antes de extrair a raiz.", "Uma equação x²=k positivo tem duas soluções opostas.", "Em medidas, interprete o contexto antes de aceitar sinal negativo."],
  avaliacao: [
    { pergunta: "x²=49 tem soluções:", opcoes: ["7 e −7", "7 apenas", "49 e −49", "0 e 49"], correta: 0, explica: "7² e (−7)² valem 49." },
    { pergunta: "5x²=45 leva a:", opcoes: ["x²=9", "x²=40", "x²=225", "x²=50"], correta: 0, explica: "Divida os dois lados por 5." },
    { pergunta: "O lado de um quadrado de área 64 cm² mede:", opcoes: ["8 cm", "−8 cm", "32 cm", "16 cm"], correta: 0, explica: "A equação tem ±8, mas comprimento é positivo." },
  ],
});

export const aulaSequencias = criarAula({
  slug: "u4-08-sequencias-fluxograma", titulo: "Sequências e Fluxogramas", icone: "🔁", bncc: ["EF08MA10", "EF08MA11"],
  motivo: "sequências podem seguir uma fórmula pela posição ou depender do termo anterior. Você vai reconhecer os dois tipos e escrever algoritmos que produzam os próximos termos.",
  conceito: "Não recursiva calcula pela posição n; recursiva usa o termo anterior. O fluxograma precisa indicar início, cálculo, saída e repetição.",
  exemplos: ["2,5,8,11: regra não recursiva aₙ=3n−1", "início → ler n → calcular 3n−1 → mostrar termo → fim", "3,6,12,24: regra recursiva: comece em 3 e dobre", "início → termo=3 → mostrar → multiplicar por 2 → repetir"],
  pergunta: "A regra 'comece em 4 e some 5 ao termo anterior' é:", opcoes: ["recursiva", "não recursiva", "proporcional inversa", "equação quadrática"], resposta: "recursiva", explicacao: "Ela precisa do termo anterior para encontrar o próximo.",
  revisao: ["Regra recursiva depende do termo anterior.", "Regra não recursiva usa a posição.", "Fluxograma mostra a ordem e a decisão de repetir ou terminar."],
  avaliacao: [
    { pergunta: "aₙ=2n+1 é uma regra:", opcoes: ["não recursiva", "recursiva", "sem padrão", "geométrica"], correta: 0, explica: "Calcula diretamente usando n." },
    { pergunta: "Na sequência 5,10,20,40, o passo recursivo é:", opcoes: ["multiplicar por 2", "somar 5", "multiplicar por 5", "subtrair 2"], correta: 0, explica: "Cada termo é o dobro do anterior." },
    { pergunta: "Em um fluxograma recursivo, a seta de repetição volta para:", opcoes: ["o cálculo do próximo termo", "o fim", "um resultado aleatório", "a resposta anterior sem alterar"], correta: 0, explica: "A repetição atualiza e calcula o próximo termo." },
  ],
});

export const aulaHexagono = criarAula({
  slug: "u6-07-hexagono-fluxograma", titulo: "Construção do Hexágono Regular", icone: "⬡", bncc: ["EF08MA16"],
  motivo: "um hexágono regular pode ser construído com precisão a partir do centro, de ângulos de 60° e do compasso. Você vai registrar o algoritmo em forma de fluxograma.",
  conceito: "No hexágono regular inscrito, cada ângulo central mede 360°/6=60° e o lado tem a mesma medida do raio da circunferência.",
  exemplos: ["trace uma circunferência de centro O", "marque um ponto A na circunferência", "sem mudar a abertura do compasso, marque seis arcos sucessivos", "ligue os seis pontos e verifique lados iguais"],
  pergunta: "Quanto mede cada ângulo central do hexágono regular?", opcoes: ["60°", "90°", "45°", "30°"], resposta: "60°", explicacao: "Uma volta tem 360° e foi dividida em seis partes iguais: 360°/6=60°.",
  revisao: ["Use esquadro/transferidor para conferir 60°.", "Mantenha o compasso com a abertura do raio.", "O fluxograma precisa permitir que outra pessoa repita a construção."],
  avaliacao: [
    { pergunta: "O lado do hexágono regular inscrito é igual ao:", opcoes: ["raio", "diâmetro", "dobro do raio", "perímetro"], correta: 0, explica: "Os seis triângulos centrais são equiláteros." },
    { pergunta: "Após marcar seis pontos, a próxima ação é:", opcoes: ["ligar pontos consecutivos", "apagar o centro", "dobrar o raio", "traçar uma parábola"], correta: 0, explica: "Os segmentos formam os seis lados." },
    { pergunta: "O losango do fluxograma serve para:", opcoes: ["uma decisão/verificação", "um número apenas", "o título", "uma decoração"], correta: 0, explica: "Ele registra uma condição, como 'marcou seis pontos?'." },
  ],
});

export const aulaPesquisaEstatistica = criarAula({
  slug: "u7-07-pesquisa-amostral", titulo: "Pesquisa, Classes e Gráficos", icone: "📊", bncc: ["EF08MA23", "EF08MA24", "EF08MA26", "EF08MA27"],
  motivo: "uma boa pesquisa escolhe uma amostra justa, organiza dados contínuos em classes e usa o gráfico adequado. Você vai planejar, analisar e comunicar conclusões sem distorcer os dados.",
  conceito: "Amostra deve representar a população; dados contínuos podem ser agrupados em intervalos; o gráfico é escolhido conforme o tipo de dado e a pergunta.",
  exemplos: ["defina população e pergunta", "escolha amostra casual, sistemática ou estratificada e justifique", "agrupe alturas em classes, como 140–149 cm e 150–159 cm", "calcule média/mediana/amplitude, escolha o gráfico e escreva a conclusão"],
  pergunta: "Para comparar frequências de faixas de altura, qual representação é adequada?", opcoes: ["histograma", "gráfico de setores sem classes", "desenho sem escala", "lista sem frequência"], resposta: "histograma", explicacao: "Altura é variável contínua; classes contíguas são representadas por barras encostadas no histograma.",
  revisao: ["Censo inclui todos; amostra inclui parte representativa.", "Classes resumem dados contínuos sem esconder a escala.", "Relatório traz método, gráfico, medidas e conclusão."],
  avaliacao: [
    { pergunta: "Separar alunos por turma e sortear em cada turma é amostra:", opcoes: ["estratificada", "casual simples sem grupos", "censitária", "inadequada sempre"], correta: 0, explica: "Cada turma funciona como estrato representado." },
    { pergunta: "Para evolução mensal de temperatura, o mais adequado é gráfico de:", opcoes: ["linhas", "setores", "pictograma sem eixo", "uma única barra"], correta: 0, explica: "Linhas evidenciam mudança ao longo do tempo." },
    { pergunta: "Um relatório estatístico completo deve apresentar:", opcoes: ["método, dados, gráfico, medidas e conclusão", "só a média", "só o título", "apenas opiniões"], correta: 0, explica: "A conclusão precisa ser verificável pelos dados e pelo método." },
  ],
});
