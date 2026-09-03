import type { AulaV4 } from "../types";

type Dados = {
  slug: string; titulo: string; icone: string; bncc: string[]; motivo: string; regra: string;
  passos: [string, string, string, string]; pergunta: string;
  opcoes: [string, string, string, string]; resposta: string; explica: string;
  avaliacao: Array<{ pergunta: string; opcoes: [string, string, string, string]; correta: number; explica: string }>;
};

function aula(d: Dados): AulaV4 {
  const visual = (titulo: string) => ({
    tipo: "trinomioPassoAPasso" as const,
    trinomio: titulo,
    passos: d.passos.map((expr, i) => ({ expr, explica: `Etapa ${i + 1}.`, status: (i === 3 ? "ok" : "neutro") as "ok" | "neutro" })),
    fatorada: d.resposta,
  });
  return {
    slug: d.slug, titulo: d.titulo, iconeTrilha: d.icone, bncc: d.bncc, duracaoMin: 35,
    metodologias: ["skemp", "vergnaud"],
    momento01_motivacao: { titulo: "Desafio do Observatório", historia: `{NOME}, ${d.motivo}` },
    momento02_exploracao: {
      instrucao: "Leia os passos, faça as contas e procure a justificativa de cada transformação.",
      cenas: [
        { tipo: "tabela", titulo: d.titulo, cabecalhos: ["Etapa", "Registro"], linhas: d.passos.map((p, i) => ({ rotulo: String(i + 1), valores: [p] })) },
        { tipo: "texto", texto: `🔑 ${d.regra}`, destaque: true },
      ],
    },
    momento03_descoberta: { perguntaGuia: d.pergunta, pista: d.passos[1], revelacao: d.explica, visualMat: visual("Descoberta guiada") },
    momento04_explicacao: {
      titulo: "Explicação passo a passo",
      etapas: d.passos.map((p, i) => ({ texto: p, exemploReal: { contexto: `Etapa ${i + 1} do procedimento.`, visualMat: { tipo: "trinomioPassoAPasso", trinomio: p, passos: [{ expr: p, explica: d.regra, status: "ok" }], fatorada: i === 3 ? d.resposta : "Continue" }, destaque: i === 3 ? d.explica : "Não pule a justificativa." } })),
    },
    momento05_modelagem: { enunciado: d.pergunta, passos: [...d.passos], resposta: d.resposta, visualMat: visual("Brilha resolve") },
    momento06_praticaGuiada: { enunciado: d.pergunta, dica: d.regra, interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: d.opcoes.map(nome => ({ nome })), respostaCerta: d.resposta, feedbackAcerto: `🎯 ${d.explica}`, feedbackErro: `Retome a regra: ${d.regra}` } },
    momento07_praticaIndependente: { enunciado: `Resolva e confira: ${d.pergunta}`, interacao: { tipo: "escolhaVisual", pergunta: "Resposta:", opcoes: d.opcoes.map(nome => ({ nome })), respostaCerta: d.resposta, feedbackAcerto: `🎯 ${d.explica}`, feedbackErro: d.explica } },
    momento08_aplicacao: { contexto: "Registre uma solução que outra pessoa consiga conferir.", problema: d.pergunta, interacao: { tipo: "escolhaVisual", pergunta: "Qual conclusão é válida?", opcoes: d.opcoes.map(nome => ({ nome })), respostaCerta: d.resposta, feedbackAcerto: `🎯 ${d.explica}`, feedbackErro: `Confira unidade, operação e contexto. ${d.explica}` } },
    momento09_revisao: { pontos: [d.regra, d.passos[0], d.passos[2], d.explica] },
    momento10_avaliacao: { perguntas: d.avaliacao.map(q => ({ pergunta: q.pergunta, opcoes: [...q.opcoes], correta: q.correta, feedbackAcerto: `🎉 ${q.explica}`, feedbackErro: q.explica })) },
    momento11_missaoFamilia: { titulo: "Ensine o procedimento", materiais: ["Papel", "Lápis", "Régua quando necessário"], passos: ["Copie um exemplo.", "Resolva mostrando as quatro etapas.", "Explique por que cada etapa funciona.", "Peça a alguém para conferir pela regra."], registro: "📸 Foto do cálculo explicado e conferido." },
    recompensa: { xp: 260, moedas: 130, medalha: "Observador Matemático" },
  };
}

export const aulaPorcentagens = aula({
  slug: "u1-06-percentuais-sucessivos", titulo: "Percentuais Sucessivos", icone: "%", bncc: ["EF09MA05"],
  motivo: "dois percentuais sucessivos não devem ser simplesmente somados. Você vai aplicar fatores multiplicativos e determinar a taxa total com apoio de calculadora ou planilha.",
  regra: "Aumento de p% usa fator 1+p/100; desconto usa 1−p/100. Multiplique os fatores na ordem.",
  passos: ["Preço inicial: R$ 200", "Aumento de 10%: 200·1,10=220", "Desconto de 10%: 220·0,90=198", "Variação final: 198/200−1=−1%"],
  pergunta: "Após aumentar 10% e descontar 10% sobre R$ 200, qual é o preço?", opcoes: ["R$ 198", "R$ 200", "R$ 180", "R$ 202"], resposta: "R$ 198", explica: "Os percentuais atuam sobre bases diferentes; 1,10·0,90=0,99.",
  avaliacao: [
    { pergunta: "Dois aumentos de 20% correspondem ao fator:", opcoes: ["1,44", "1,40", "1,20", "0,40"], correta: 0, explica: "1,20·1,20=1,44." },
    { pergunta: "Desconto de 25% usa o fator:", opcoes: ["0,75", "1,25", "0,25", "1,75"], correta: 0, explica: "100%−25%=75%=0,75." },
    { pergunta: "De 80 para 100, a taxa de aumento é:", opcoes: ["25%", "20%", "80%", "125%"], correta: 0, explica: "Aumento 20 dividido pela base 80 = 25%." },
  ],
});

export const aulaUnidadesDigitais = aula({
  slug: "u1-07-unidades-grandes-pequenas-digitais", titulo: "Medidas Extremas e Informação Digital", icone: "💾", bncc: ["EF09MA18"],
  motivo: "ciência e tecnologia usam unidades adequadas para distâncias enormes, estruturas minúsculas e armazenamento digital. Escolher a unidade certa evita números difíceis de ler.",
  regra: "Use prefixos métricos e potências de 10; em informática, confira se o contexto usa múltiplos decimais ou binários.",
  passos: ["1 km=10³ m; 1 nm=10⁻⁹ m", "5 000 000 m=5·10⁶ m", "1 MB=10⁶ bytes no padrão decimal", "2,5 GB=2,5·10⁹ bytes"],
  pergunta: "Quantos bytes há em 3 GB no padrão decimal?", opcoes: ["3·10⁹", "3·10⁶", "3·10³", "3·10¹²"], resposta: "3·10⁹", explica: "O prefixo giga representa 10⁹ no padrão decimal.",
  avaliacao: [
    { pergunta: "O nanômetro corresponde a:", opcoes: ["10⁻⁹ m", "10⁹ m", "10⁻³ m", "10⁻⁶ m"], correta: 0, explica: "Nano representa um bilionésimo." },
    { pergunta: "1 TB decimal corresponde a:", opcoes: ["10¹² bytes", "10⁹ bytes", "10⁶ bytes", "10³ bytes"], correta: 0, explica: "Tera representa 10¹²." },
    { pergunta: "Para o tamanho de uma célula, unidade adequada é:", opcoes: ["micrômetro", "quilômetro", "hectômetro", "gigabyte"], correta: 0, explica: "Células têm dimensões microscópicas." },
  ],
});

export const aulaFatoracaoEquacoes = aula({
  slug: "u2-03-fatoracao-equacoes", titulo: "Fatoração para Resolver Equações", icone: "🧩", bncc: ["EF09MA09"],
  motivo: "produtos notáveis e fatoração permitem transformar uma equação do 2º grau em um produto igual a zero, revelando as raízes sem fórmula pronta.",
  regra: "Fatore a expressão e aplique o produto nulo: se A·B=0, então A=0 ou B=0.",
  passos: ["x²−5x+6=0", "x²−5x+6=(x−2)(x−3)", "(x−2)(x−3)=0", "x=2 ou x=3"],
  pergunta: "Quais raízes resolvem x²−5x+6=0?", opcoes: ["2 e 3", "−2 e −3", "1 e 6", "5 e 6"], resposta: "2 e 3", explica: "Os números 2 e 3 somam 5 e multiplicam 6; a fatoração é (x−2)(x−3).",
  avaliacao: [
    { pergunta: "x²−9 fatorado é:", opcoes: ["(x−3)(x+3)", "(x−9)(x+1)", "(x−3)²", "x(x−9)"], correta: 0, explica: "É diferença de quadrados." },
    { pergunta: "x²+6x+9 fatorado é:", opcoes: ["(x+3)²", "(x−3)²", "(x+9)(x+1)", "x(x+6)+9"], correta: 0, explica: "É trinômio quadrado perfeito." },
    { pergunta: "x(x−7)=0 tem soluções:", opcoes: ["0 e 7", "7 apenas", "0 e −7", "1 e 7"], correta: 0, explica: "Cada fator pode ser zero." },
  ],
});

export const aulaRazoesProporcionalidade = aula({
  slug: "u4-00-razoes-grandezas", titulo: "Razões entre Grandezas e Proporcionalidade", icone: "⚖️", bncc: ["EF09MA07", "EF09MA08"],
  motivo: "velocidade, densidade e consumo relacionam grandezas de espécies diferentes. Você também vai modelar relações diretas e inversas em contextos reais.",
  regra: "Razão divide grandezas; direta usa y=kx e inversa usa xy=k. Observe as unidades para interpretar o resultado.",
  passos: ["180 km em 3 h", "velocidade=180/3=60 km/h", "direta: distância=60·tempo", "inversa em percurso fixo: velocidade·tempo=180"],
  pergunta: "Qual é a velocidade média de 180 km em 3 h?", opcoes: ["60 km/h", "540 km/h", "183 km/h", "177 km/h"], resposta: "60 km/h", explica: "Dividimos distância por tempo e mantemos a unidade km/h.",
  avaliacao: [
    { pergunta: "Densidade demográfica é:", opcoes: ["habitantes/área", "área/habitantes sempre", "habitantes+área", "área−habitantes"], correta: 0, explica: "Relaciona população e área por divisão." },
    { pergunta: "Em y=4x, as grandezas são:", opcoes: ["diretamente proporcionais", "inversamente proporcionais", "não relacionadas", "iguais sempre"], correta: 0, explica: "A razão y/x permanece 4." },
    { pergunta: "Se xy=24, ao dobrar x, y:", opcoes: ["cai à metade", "dobra", "não muda", "vira zero"], correta: 0, explica: "O produto constante caracteriza proporção inversa." },
  ],
});

export const aulaParalelasDemonstracao = aula({
  slug: "u4-02-paralelas-demonstracao", titulo: "Ângulos em Paralelas: Demonstrar", icone: "📐", bncc: ["EF09MA10"],
  motivo: "não basta memorizar que ângulos são iguais. Você vai demonstrar relações usando opostos pelo vértice, correspondentes e suplementares.",
  regra: "Com retas paralelas, correspondentes e alternos são congruentes; colaterais internos são suplementares.",
  passos: ["r∥s e uma transversal t", "ângulos correspondentes têm a mesma posição", "opostos pelo vértice são iguais", "com essas duas relações, alternos internos são iguais"],
  pergunta: "Se um ângulo mede 65°, quanto mede seu colateral interno?", opcoes: ["115°", "65°", "25°", "180°"], resposta: "115°", explica: "Colaterais internos somam 180°; 180−65=115°.",
  avaliacao: [
    { pergunta: "Alternos internos em paralelas são:", opcoes: ["congruentes", "sempre 90°", "complementares", "sem relação"], correta: 0, explica: "A transversal produz ângulos alternos internos iguais." },
    { pergunta: "Colaterais internos somam:", opcoes: ["180°", "90°", "360°", "45°"], correta: 0, explica: "São suplementares." },
    { pergunta: "Uma demonstração válida deve:", opcoes: ["justificar cada conclusão", "usar só desenho aproximado", "depender de um único exemplo", "pular propriedades"], correta: 0, explica: "A prova encadeia propriedades gerais." },
  ],
});

export const aulaPoligonoRegular = aula({
  slug: "u5-06-poligono-regular", titulo: "Construção de Polígono Regular", icone: "⬡", bncc: ["EF09MA15"],
  motivo: "você vai descrever por escrito e em fluxograma como construir um hexágono regular de lado conhecido com régua e compasso.",
  regra: "No hexágono regular inscrito, o raio da circunferência é igual ao lado do hexágono.",
  passos: ["abra o compasso na medida do lado", "trace a circunferência e marque um ponto A", "marque seis arcos sucessivos sem mudar a abertura", "ligue os pontos e verifique seis lados iguais"],
  pergunta: "Na construção do hexágono regular, a abertura do compasso deve ser:", opcoes: ["igual ao lado", "metade do lado", "dobro do lado", "qualquer medida"], resposta: "igual ao lado", explica: "Cada corda marcada é um raio e forma um lado do hexágono.",
  avaliacao: [
    { pergunta: "O fluxograma deve começar por:", opcoes: ["definir a medida do lado", "ligar pontos inexistentes", "apagar a circunferência", "medir o perímetro final"], correta: 0, explica: "A medida conhecida orienta o compasso." },
    { pergunta: "Quantos pontos são marcados na circunferência?", opcoes: ["6", "5", "8", "3"], correta: 0, explica: "Um hexágono tem seis vértices." },
    { pergunta: "A conferência final verifica:", opcoes: ["seis lados e ângulos iguais", "apenas a cor", "um único lado", "área zero"], correta: 0, explica: "Regular significa lados e ângulos iguais." },
  ],
});

export const aulaPontoMedioDistancia = aula({
  slug: "u5-07-ponto-medio-distancia", titulo: "Ponto Médio e Distância no Plano", icone: "📍", bncc: ["EF09MA16"],
  motivo: "coordenadas permitem encontrar o meio de um segmento e sua distância sem decorar fórmulas: conte deslocamentos horizontal e vertical e use Pitágoras.",
  regra: "Ponto médio usa a média de cada coordenada; distância nasce dos catetos Δx e Δy em um triângulo retângulo.",
  passos: ["A(2,1), B(8,9)", "M=((2+8)/2,(1+9)/2)=(5,5)", "Δx=6 e Δy=8", "AB=√(6²+8²)=10"],
  pergunta: "Qual é a distância entre A(2,1) e B(8,9)?", opcoes: ["10", "14", "7", "100"], resposta: "10", explica: "Os deslocamentos são 6 e 8; Pitágoras dá √100=10.",
  avaliacao: [
    { pergunta: "O ponto médio de (0,0) e (6,4) é:", opcoes: ["(3,2)", "(6,4)", "(2,3)", "(3,4)"], correta: 0, explica: "Faça a média de x e a média de y." },
    { pergunta: "Entre (1,2) e (1,9), a distância é:", opcoes: ["7", "8", "11", "0"], correta: 0, explica: "O deslocamento é apenas vertical: 9−2=7." },
    { pergunta: "Para calcular perímetro no plano, devemos:", opcoes: ["somar as distâncias dos lados", "somar coordenadas soltas", "multiplicar todos os x", "ignorar diagonais"], correta: 0, explica: "Perímetro é a soma dos comprimentos dos lados." },
  ],
});

export const aulaVistasOrtogonais = aula({
  slug: "u6-02-vistas-ortogonais", titulo: "Vistas Ortogonais e Perspectiva", icone: "🧊", bncc: ["EF09MA17"],
  motivo: "um objeto tridimensional pode ser representado pelas vistas frontal, superior e lateral. Você vai relacionar essas projeções e usá-las para desenhar em perspectiva.",
  regra: "Cada vista mostra duas dimensões: frente (largura×altura), topo (largura×profundidade) e lado (profundidade×altura).",
  passos: ["bloco 4×3×2", "vista frontal: 4×2", "vista superior: 4×3", "vista lateral: 3×2"],
  pergunta: "Qual vista de um bloco 4×3×2 mostra largura 4 e profundidade 3?", opcoes: ["superior", "frontal", "lateral", "nenhuma"], resposta: "superior", explica: "Olhando de cima vemos largura e profundidade, não altura.",
  avaliacao: [
    { pergunta: "A vista frontal mostra:", opcoes: ["largura e altura", "largura e profundidade", "só volume", "profundidade e diagonal"], correta: 0, explica: "A profundidade fica escondida na projeção frontal." },
    { pergunta: "Linhas paralelas recuando em perspectiva ajudam a representar:", opcoes: ["profundidade", "massa", "tempo", "temperatura"], correta: 0, explica: "Elas dão sensação de terceira dimensão." },
    { pergunta: "Três vistas coerentes devem:", opcoes: ["compartilhar medidas correspondentes", "ter tamanhos aleatórios", "mostrar só círculos", "ignorar altura"], correta: 0, explica: "A mesma dimensão aparece igual nas vistas relacionadas." },
  ],
});
