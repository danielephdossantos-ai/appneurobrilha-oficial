/**
 * Folhas do estudante para as aulas de Matemática do 1º ano.
 *
 * Regras do projeto:
 *  - Sem IA e sem texto inventado: os números e figuras vêm da própria aula.
 *  - Sem imagens novas: usa apenas as imagens que a aula já referencia.
 *  - Atividades respondidas no papel (marcar, ligar, cobrir, escrever, desenhar).
 */

import type { Aula } from "@/escola-brilha/types";
import type { ApostilaImagem, ApostilaPagina } from "./gerar-apostila";

type FocoMat = "contagem" | "operacao" | "forma" | "dados";

type ConfigMat = { foco: FocoMat; numeros: number[]; palavras: string[] };

const CONFIGS_MATEMATICA: Record<string, ConfigMat> = {
  EF01MA01: { foco: "contagem", numeros: [1, 2, 3, 4, 5], palavras: ["1", "2", "3"] },
  EF01MA02: { foco: "contagem", numeros: [3, 5, 7, 9], palavras: ["4", "5", "6"] },
  EF01MA03: { foco: "contagem", numeros: [2, 4, 6, 8], palavras: ["7", "8", "9"] },
  EF01MA04: { foco: "contagem", numeros: [5, 10, 15, 20], palavras: ["10", "15", "20"] },
  EF01MA05: { foco: "contagem", numeros: [4, 6, 8, 10], palavras: ["6", "8", "10"] },
  EF01MA06: { foco: "operacao", numeros: [2, 3, 4, 5], palavras: ["+", "=", "5"] },
  EF01MA07: { foco: "operacao", numeros: [3, 4, 6, 7], palavras: ["+", "−", "7"] },
  EF01MA08: { foco: "operacao", numeros: [2, 5, 6, 9], palavras: ["−", "=", "9"] },
  EF01MA09: { foco: "forma", numeros: [2, 3, 4, 5], palavras: ["IGUAL", "GRANDE", "PEQUENO"] },
  EF01MA10: { foco: "forma", numeros: [1, 2, 3, 4], palavras: ["PADRAO", "REPETE", "SEGUE"] },
  EF01MA11: { foco: "forma", numeros: [1, 2, 3], palavras: ["FRENTE", "ATRAS", "LADO"] },
  EF01MA12: { foco: "forma", numeros: [1, 2, 3], palavras: ["PERTO", "LONGE", "DENTRO"] },
  EF01MA13: { foco: "forma", numeros: [2, 3, 4], palavras: ["CUBO", "BOLA", "LATA"] },
  EF01MA14: { foco: "forma", numeros: [3, 4, 5], palavras: ["CIRCULO", "QUADRADO", "TRIANGULO"] },
  EF01MA15: { foco: "contagem", numeros: [2, 4, 6, 8], palavras: ["MAIOR", "MENOR", "IGUAL"] },
  EF01MA16: { foco: "forma", numeros: [1, 2, 3], palavras: ["MANHA", "TARDE", "NOITE"] },
  EF01MA17: { foco: "contagem", numeros: [5, 7, 10, 12], palavras: ["DIA", "SEMANA", "MES"] },
  EF01MA18: { foco: "operacao", numeros: [3, 5, 8, 10], palavras: ["+", "=", "10"] },
  EF01MA19: { foco: "contagem", numeros: [2, 5, 10, 20], palavras: ["1", "5", "10"] },
  EF01MA20: { foco: "dados", numeros: [1, 2, 3, 4], palavras: ["SIM", "NAO", "TALVEZ"] },
  EF01MA21: { foco: "dados", numeros: [2, 4, 6, 8], palavras: ["MAIS", "MENOS", "IGUAL"] },
  EF01MA22: { foco: "dados", numeros: [3, 6, 9, 12], palavras: ["TOTAL", "MAIS", "MENOS"] },
};

const IMAGEM_IGNORADA = /(pip-|mascot|brilha|aurora|logo|fundo|mapa)/i;

function figuras(imagens: ApostilaImagem[]): ApostilaImagem[] {
  const juntar = (lista: ApostilaImagem[], filtrar: boolean) => {
    for (const imagem of lista) {
      if (filtrar && IMAGEM_IGNORADA.test(imagem.url)) continue;
      if (usadas.some((u) => u.url === imagem.url)) continue;
      usadas.push(imagem);
      if (usadas.length >= 5) return;
    }
  };
  const usadas: ApostilaImagem[] = [];
  juntar(imagens, true);
  // Se a aula só tem figuras de personagem, usa mesmo assim: nenhuma imagem nova é criada.
  if (usadas.length < 2) juntar(imagens, false);
  return usadas;
}

/** Três alternativas distintas contendo sempre o número certo, em posição variada. */
function opcoesNumero(certo: number, giro = 0): string[] {
  const lista = [certo];
  let passo = 1;
  while (lista.length < 3) {
    for (const candidato of [certo + passo, certo - passo]) {
      if (candidato >= 0 && !lista.includes(candidato) && lista.length < 3) lista.push(candidato);
    }
    passo += 1;
  }
  const deslocamento = ((giro % 3) + 3) % 3;
  return [...lista.slice(deslocamento), ...lista.slice(0, deslocamento)].map(String);
}

/** Figura com a quantidade pedida, para ligar número ↔ grupo de figuras. */
function grupo(imagem: ApostilaImagem, quantidade: number) {
  return { ...imagem, quantidade };
}

/** Acha a figura cujo nome/arquivo corresponde à palavra (sem inventar pares). */
function figuraDaPalavra(imagens: ApostilaImagem[], palavra: string): ApostilaImagem | undefined {
  const chave = palavra
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return imagens.find((i) =>
    `${i.legenda ?? ""} ${i.url}`
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(chave),
  );
}

function gradeNumeros(numeros: number[]): string[] {
  const base = [...numeros, ...numeros.map((n) => n + 1), ...numeros.map((n) => n + 2)];
  return Array.from({ length: 16 }, (_, i) => String(base[(i * 3 + Math.floor(i / 4)) % base.length]));
}

function sequencias(numeros: number[]): string[][] {
  const inicio = numeros[0] ?? 1;
  return [
    [String(inicio), String(inicio + 1), "_", String(inicio + 3), "_"],
    [String(inicio + 2), "_", String(inicio + 4), "_", String(inicio + 6)],
    ["_", String(inicio + 6), String(inicio + 7), "_", String(inicio + 9)],
  ];
}

function tracadoNumeros(numeros: number[], imagens: ApostilaImagem[]) {
  const itens = numeros.slice(0, 4).map(String);
  const mapa: Record<string, ApostilaImagem> = {};
  itens.forEach((item, index) => {
    const imagem = imagens[index % imagens.length];
    if (imagem) mapa[item] = imagem;
  });
  return { itens, imagens: mapa, quantidadeImagem: true };
}

function folha(titulo: string, blocos: ApostilaPagina["blocos"]): ApostilaPagina {
  return { etiqueta: "Folha do estudante", titulo, blocos };
}

function paginasContagem(config: ConfigMat, imgs: ApostilaImagem[]): ApostilaPagina[] {
  const tracado = tracadoNumeros(config.numeros, imgs);
  return [
    folha("Atividade 1 — Conte e marque", [
      {
        tipo: "contar-marcar",
        comando: "Conte as figuras de cada linha e marque o número certo.",
        itens: config.numeros.slice(0, 4).map((quantidade, index) => ({
          imagem: imgs[index % imgs.length]!,
          quantidade,
          opcoes: opcoesNumero(quantidade, index),
        })),
      },
    ]),
    folha("Atividade 2 — Ligue o número à quantidade", [
      {
        tipo: "ligar-imagens",
        comando: "Ligue cada número ao grupo com essa quantidade de figuras.",
        esquerda: config.numeros.slice(0, 4).map((n) => ({ texto: String(n) })),
        direita: [...config.numeros.slice(0, 4)]
          .reverse()
          .map((n, index) => grupo(imgs[index % imgs.length]!, n)),
      },
    ]),
    folha("Atividade 3 — Complete a sequência", [
      {
        tipo: "sequencia-numerica",
        comando: "Escreva os números que faltam.",
        linhas: sequencias(config.numeros),
      },
    ]),
    folha("Atividade 4 — Cubra os números", [
      { tipo: "tracado", comando: "Cubra os pontilhados com capricho.", repeticoes: 5, ...tracado },
    ]),
    folha("Atividade 5 — Desenhe a quantidade", [
      {
        tipo: "desenhar-quantidade",
        comando: "Desenhe no quadro a quantidade pedida.",
        itens: config.numeros.slice(0, 4).map((quantidade) => ({ quantidade })),
      },
    ]),
    folha("Atividade 6 — Procure os números", [
      {
        tipo: "procurar-letras",
        comando: `Procure e circule: ${config.numeros.slice(0, 4).join(", ")}.`,
        alvos: config.numeros.slice(0, 4).map(String),
        letras: gradeNumeros(config.numeros),
      },
    ]),
    folha("Atividade 7 — Escreva os números", [
      {
        tipo: "linhas",
        enunciado: `Escreva em ordem, do menor para o maior: ${[...config.numeros].reverse().join(", ")}.`,
        linhas: 4,
      },
    ]),
  ];
}

function paginasOperacao(config: ConfigMat, imgs: ApostilaImagem[]): ApostilaPagina[] {
  const [a = 2, b = 3, c = 4, d = 5] = config.numeros;
  const tracado = tracadoNumeros(config.numeros, imgs);
  return [
    folha("Atividade 1 — Junte e conte", [
      {
        tipo: "conta-visual",
        comando: "Conte as figuras, junte e escreva o resultado.",
        itens: [
          { imagem: imgs[0]!, a, b, sinal: "+" },
          { imagem: imgs[1 % imgs.length]!, a: b, b: c, sinal: "+" },
          { imagem: imgs[2 % imgs.length]!, a: c, b: 1, sinal: "+" },
        ],
      },
    ]),
    folha("Atividade 2 — Tire e conte", [
      {
        tipo: "conta-visual",
        comando: "Risque as figuras que saem e escreva quantas ficaram.",
        itens: [
          { imagem: imgs[0]!, a: d, b: 2, sinal: "−" },
          { imagem: imgs[1 % imgs.length]!, a: c, b: 1, sinal: "−" },
          { imagem: imgs[2 % imgs.length]!, a: d, b: 3, sinal: "−" },
        ],
      },
    ]),
    folha("Atividade 3 — Marque o resultado", [
      {
        tipo: "conta-marcar",
        comando: "Conte as figuras, faça a conta e marque o resultado certo.",
        itens: [
          { imagem: imgs[0]!, a, b, sinal: "+", opcoes: opcoesNumero(a + b, 0) },
          { imagem: imgs[1 % imgs.length]!, a: b, b: c, sinal: "+", opcoes: opcoesNumero(b + c, 1) },
          {
            imagem: imgs[2 % imgs.length]!,
            a: d,
            b: 2,
            sinal: "−",
            opcoes: opcoesNumero(Math.max(0, d - 2), 2),
          },
        ],
      },
    ]),
    folha("Atividade 4 — Cubra os números", [
      { tipo: "tracado", comando: "Cubra os pontilhados com capricho.", repeticoes: 5, ...tracado },
    ]),
    folha("Atividade 5 — Complete a sequência", [
      {
        tipo: "sequencia-numerica",
        comando: "Escreva os números que faltam.",
        linhas: sequencias(config.numeros),
      },
    ]),
    folha("Atividade 6 — Procure os números", [
      {
        tipo: "procurar-letras",
        comando: `Procure e circule: ${config.numeros.slice(0, 4).join(", ")}.`,
        alvos: config.numeros.slice(0, 4).map(String),
        letras: gradeNumeros(config.numeros),
      },
    ]),
    folha("Atividade 7 — Escreva a conta", [
      {
        tipo: "linhas",
        enunciado: `Escreva duas contas usando os números ${config.numeros.slice(0, 4).join(", ")} e resolva.`,
        linhas: 5,
      },
    ]),
  ];
}

function paginasForma(config: ConfigMat, imgs: ApostilaImagem[]): ApostilaPagina[] {
  const palavras = config.palavras.slice(0, 3);
  // Só liga palavra e figura quando a figura realmente corresponde à palavra.
  const pares = palavras
    .map((palavra) => ({ palavra, imagem: figuraDaPalavra(imgs, palavra) }))
    .filter((p): p is { palavra: string; imagem: ApostilaImagem } => !!p.imagem);
  const tracado = { itens: palavras, imagens: {} as Record<string, ApostilaImagem> };
  for (const par of pares) tracado.imagens[par.palavra] = par.imagem;
  const folhaPares: ApostilaPagina[] =
    pares.length >= 2
      ? [
          folha("Atividade 3 — Ligue figura e palavra", [
            {
              tipo: "ligar-imagens",
              comando: "Ligue cada figura à palavra que combina com ela.",
              esquerda: pares.map((p) => p.imagem),
              direita: [...pares].reverse().map((p) => ({ texto: p.palavra })),
            },
          ]),
        ]
      : [
          folha("Atividade 3 — Complete a sequência", [
            {
              tipo: "sequencia-numerica",
              comando: "Escreva os números que faltam.",
              linhas: sequencias(config.numeros),
            },
          ]),
        ];
  const folhaMarcar: ApostilaPagina[] =
    pares.length >= 2
      ? [
          folha("Atividade 2 — Marque a figura certa", [
            {
              tipo: "marcar-figura",
              comando: "Marque uma resposta em cada atividade.",
              questoes: pares.map((par, index) => ({
                pergunta: `${index + 1}. Marque a figura de ${par.palavra}.`,
                imagens: [
                  par.imagem,
                  ...imgs.filter((i) => i.url !== par.imagem.url).slice(0, 2),
                ],
              })),
            },
          ]),
        ]
      : [
          folha("Atividade 2 — Circule as figuras iguais ao modelo", [
            {
              tipo: "escolha-visual",
              comando: "Olhe o modelo e circule as figuras parecidas com ele.",
              modelo: imgs[1] ?? imgs[0]!,
              imagens: imgs.slice(0, 4),
            },
          ]),
        ];
  return [
    folha("Atividade 1 — Observe e circule", [
      {
        tipo: "escolha-visual",
        comando: "Circule as figuras parecidas com o modelo.",
        modelo: imgs[0]!,
        imagens: imgs.slice(1, 5),
      },
    ]),
    ...folhaMarcar,
    ...folhaPares,
    folha("Atividade 4 — Cubra as palavras", [
      { tipo: "tracado", comando: "Cubra os pontilhados com capricho.", repeticoes: 2, ...tracado },
    ]),
    folha("Atividade 5 — Conte e marque", [
      {
        tipo: "contar-marcar",
        comando: "Conte as figuras de cada linha e marque o número certo.",
        itens: config.numeros.slice(0, 3).map((quantidade, index) => ({
          imagem: imgs[index % imgs.length]!,
          quantidade,
          opcoes: opcoesNumero(quantidade, index),
        })),
      },
    ]),
    folha("Atividade 6 — Procure as palavras", [
      {
        tipo: "procurar-letras",
        comando: `Procure e circule as letras iniciais: ${config.palavras.map((p) => p[0]).join(", ")}.`,
        alvos: config.palavras.map((p) => p[0]!),
        letras: ["M", config.palavras[0]![0]!, "A", config.palavras[1]![0]!, "O", "T", config.palavras[2]![0]!, "L", "S", config.palavras[0]![0]!, "E", config.palavras[1]![0]!, "R", config.palavras[2]![0]!, "U", "B"],
      },
    ]),
    folha("Atividade 7 — Desenhe e escreva", [
      {
        tipo: "desenhar-quantidade",
        comando: `Desenhe uma figura de cada tipo e escreva o nome embaixo: ${config.palavras.slice(0, 3).join(", ")}.`,
        itens: config.palavras.slice(0, 3).map((palavra) => ({ quantidade: 1, rotulo: palavra })),
      },
    ]),
  ];
}

function paginasDados(config: ConfigMat, imgs: ApostilaImagem[]): ApostilaPagina[] {
  const tracado = tracadoNumeros(config.numeros, imgs);
  return [
    folha("Atividade 1 — Conte o gráfico", [
      {
        tipo: "contar-marcar",
        comando: "Conte as figuras de cada linha e marque quantas você contou.",
        itens: config.numeros.slice(0, 4).map((quantidade, index) => ({
          imagem: imgs[index % imgs.length]!,
          quantidade,
          opcoes: opcoesNumero(quantidade, index),
        })),
      },
    ]),
    folha("Atividade 2 — Quem teve mais?", [
      {
        tipo: "marcar-figura",
        comando: "Marque uma resposta em cada atividade.",
        questoes: [
          { pergunta: "1. Marque a figura que apareceu mais vezes.", imagens: imgs.slice(0, 3) },
          { pergunta: "2. Marque a figura que apareceu menos vezes.", imagens: imgs.slice(0, 3) },
        ],
      },
    ]),
    folha("Atividade 3 — Complete a tabela", [
      {
        tipo: "sequencia-numerica",
        comando: "Escreva os números que faltam na contagem.",
        linhas: sequencias(config.numeros),
      },
    ]),
    folha("Atividade 4 — Cubra os números", [
      { tipo: "tracado", comando: "Cubra os pontilhados com capricho.", repeticoes: 5, ...tracado },
    ]),
    folha("Atividade 5 — Junte os resultados", [
      {
        tipo: "conta-visual",
        comando: "Some as duas contagens e escreva o total.",
        itens: [
          { imagem: imgs[0]!, a: config.numeros[0] ?? 2, b: config.numeros[1] ?? 3, sinal: "+" },
          { imagem: imgs[1 % imgs.length]!, a: config.numeros[1] ?? 3, b: 1, sinal: "+" },
        ],
      },
    ]),
    folha("Atividade 6 — Procure os números", [
      {
        tipo: "procurar-letras",
        comando: `Procure e circule: ${config.numeros.slice(0, 4).join(", ")}.`,
        alvos: config.numeros.slice(0, 4).map(String),
        letras: gradeNumeros(config.numeros),
      },
    ]),
    folha("Atividade 7 — Desenhe sua pesquisa", [
      {
        tipo: "desenhar-quantidade",
        comando: "Pergunte a três colegas e desenhe uma figura para cada resposta.",
        itens: [{ quantidade: 3, rotulo: "Resposta 1" }, { quantidade: 3, rotulo: "Resposta 2" }],
      },
    ]),
    folha("Atividade 8 — Escreva o que descobriu", [
      { tipo: "linhas", enunciado: "Escreva qual resposta apareceu mais vezes.", linhas: 4 },
    ]),
  ];
}

/** Folhas do estudante para Matemática do 1º ano; null quando não há configuração/imagens. */
export function paginasMatematica(aula: Aula, imagens: ApostilaImagem[]): ApostilaPagina[] | null {
  const config = CONFIGS_MATEMATICA[aula.codigo];
  if (!config) return null;
  const imgs = figuras(imagens);
  if (imgs.length < 2) return null;
  if (config.foco === "operacao") return paginasOperacao(config, imgs);
  if (config.foco === "forma") return paginasForma(config, imgs);
  if (config.foco === "dados") return paginasDados(config, imgs);
  return paginasContagem(config, imgs);
}
