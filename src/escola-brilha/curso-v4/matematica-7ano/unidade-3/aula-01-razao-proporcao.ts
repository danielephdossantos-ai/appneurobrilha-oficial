import type { AulaV4 } from "../../types";

/** Aula 01 · U3 — Razão e proporção. */
export const aula01_razaoProporcao: AulaV4 = {
  slug: "u3-01-razao-proporcao",
  titulo: "Razão e Proporção",
  iconeTrilha: "🔗",
  bncc: ["EF07MA10"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Comparar em vez de contar",
    historia:
      "{NOME}, numa turma há 12 meninas e 18 meninos. Em vez de dizer 'tem 6 a mais', a matemática compara por DIVISÃO: 12 para 18, ou seja, 2 para 3. Isso é razão — e é a base de tudo o que vem nesta unidade.",
  },

  momento02_exploracao: {
    instrucao: "Razão é comparação por divisão. Proporção é a igualdade entre duas razões.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Razão no dia a dia",
        cabecalhos: ["Situação", "Razão", "Leitura"],
        linhas: [
          { rotulo: "1", valores: ["12 meninas / 18 meninos", "2/3", "2 para 3"] },
          { rotulo: "2", valores: ["180 km em 2 h", "90 km/h", "velocidade"] },
          { rotulo: "3", valores: ["R$ 12 por 3 kg", "4 reais/kg", "preço unitário"] },
          { rotulo: "4", valores: ["mapa 1 cm : 50 000 cm", "1/50 000", "escala"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Proporção: a/b = c/d. Nela vale sempre o PRODUTO DOS MEIOS igual ao PRODUTO DOS EXTREMOS: a·d = b·c." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "3/4 e 9/12 formam uma proporção?",
    pista: "Multiplique em cruz e compare os dois produtos.",
    revelacao: "3·12 = 36 e 4·9 = 36. Produtos iguais → é proporção.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3/4 = 9/12 ?",
      passos: [
        { expr: "Extremos: 3 e 12", explica: "Primeiro e último.", status: "neutro", professor: "Numa proporção a/b = c/d, os EXTREMOS são a e d; os MEIOS são b e c." },
        { expr: "Meios: 4 e 9", explica: "Do meio.", status: "ok" },
        { expr: "3 · 12 = 36", explica: "Produto dos extremos.", status: "ok" },
        { expr: "4 · 9 = 36", explica: "Produto dos meios.", status: "ok" },
        { expr: "36 = 36 → é proporção", explica: "Confirmado.", status: "ok", professor: "Se os produtos fossem diferentes, as razões não seriam equivalentes e não haveria proporção." },
      ],
      fatorada: "3/4 = 9/12 é proporção",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Escrever, verificar e resolver proporções",
    etapas: [
      {
        texto: "RAZÃO é o quociente entre duas grandezas. Escreva sempre na ordem que o enunciado pede e simplifique.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Razão entre 12 meninas e 18 meninos",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "12 : 18",
            passos: [
              { expr: "12/18", explica: "Escrevo na ordem pedida.", status: "neutro" },
              { expr: "MDC(12, 18) = 6", explica: "Simplifico.", status: "ok" },
              { expr: "= 2/3", explica: "Para cada 2 meninas há 3 meninos.", status: "ok", professor: "A ordem importa: a razão de meninos para meninas seria 18/12 = 3/2, que é diferente." },
            ],
            fatorada: "12/18 = 2/3",
          },
          destaque: "Razão simplificada revela o padrão.",
        },
      },
      {
        texto: "Para achar o termo desconhecido de uma proporção, multiplique em cruz e resolva a equação.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "5/8 = x/24",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "5/8 = x/24",
            passos: [
              { expr: "5 · 24 = 8 · x", explica: "Produto dos extremos = produto dos meios.", status: "neutro" },
              { expr: "120 = 8x", explica: "Calculo o lado conhecido.", status: "ok" },
              { expr: "x = 120 ÷ 8", explica: "Isolo o x.", status: "ok" },
              { expr: "x = 15", explica: "Resultado.", status: "ok", professor: "Confira: 15/24 simplificado por 3 dá 5/8. Bateu com a proporção original." },
            ],
            fatorada: "x = 15",
          },
          destaque: "Sempre confira substituindo o valor encontrado.",
        },
      },
      {
        texto: "ESCALA é uma razão especial: comprimento no desenho dividido pelo comprimento real, nas mesmas unidades.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Escala 1 : 200. Uma parede mede 4 cm na planta.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "1/200 = 4/x",
            passos: [
              { expr: "1 · x = 200 · 4", explica: "Multiplico em cruz.", status: "neutro" },
              { expr: "x = 800 cm", explica: "Medida real em cm.", status: "ok" },
              { expr: "800 cm = 8 m", explica: "Converto a unidade.", status: "ok", professor: "Nunca esqueça de converter no final: 100 cm = 1 m, então 800 cm = 8 m." },
            ],
            fatorada: "A parede real tem 8 m",
          },
          destaque: "Escala 1:200 → cada 1 cm na planta vale 200 cm reais.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: 3/7 = 12/x.",
    resposta: "x = 28",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3/7 = 12/x",
      passos: [
        { expr: "3 · x = 7 · 12", explica: "Cruzo.", status: "neutro" },
        { expr: "3x = 84", explica: "Calculo.", status: "ok" },
        { expr: "x = 84 ÷ 3", explica: "Isolo.", status: "ok" },
        { expr: "x = 28", explica: "Resultado.", status: "ok", professor: "Confira: 12/28 simplificado por 4 dá 3/7. Correto." },
      ],
      fatorada: "x = 28",
      legenda: "Brilha resolve",
    },
    passos: ["Cruzo: 3·x = 7·12.", "3x = 84.", "x = 84 ÷ 3.", "x = 28. Confiro: 12/28 = 3/7."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 2/5 = x/20. Quanto vale x?",
    dica: "2 · 20 = 5 · x.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2/5 = x/20",
      passos: [
        { expr: "2 · 20 = 5x", explica: "Cruzo.", status: "neutro" },
        { expr: "40 = 5x", explica: "Calculo.", status: "ok" },
        { expr: "x = 8", explica: "Divido por 5.", status: "ok" },
      ],
      fatorada: "x = 8",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8" }, { nome: "10" }, { nome: "50" }],
      respostaCerta: "8",
      feedbackAcerto: "🎯 8/20 simplificado é 2/5.",
      feedbackErro: "Multiplique em cruz: 2·20 = 5x → 40 = 5x → x = 8.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: a razão entre 15 e 25, simplificada, é?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "15 : 25",
      passos: [
        { expr: "15/25", explica: "Escrevo a razão.", status: "neutro" },
        { expr: "MDC = 5", explica: "Simplifico.", status: "ok" },
      ],
      fatorada: "= 3/5",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3/5" }, { nome: "15/25" }, { nome: "5/3" }],
      respostaCerta: "3/5",
      feedbackAcerto: "🎯 Dividindo por 5: 3/5.",
      feedbackErro: "15/25 está certo mas não simplificado. Dividindo por 5 → 3/5. E 5/3 inverteria a ordem pedida.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Numa receita, para cada 3 xícaras de farinha usam-se 2 xícaras de leite. Você vai usar 12 xícaras de farinha.",
    problema: "Quantas xícaras de leite serão necessárias?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3/2 = 12/x",
      passos: [
        { expr: "farinha/leite = 3/2", explica: "Razão original.", status: "neutro", professor: "Monte a proporção mantendo a MESMA ordem nos dois lados: farinha em cima, leite embaixo." },
        { expr: "3/2 = 12/x", explica: "Nova situação.", status: "ok" },
        { expr: "3x = 2 · 12 = 24", explica: "Cruzo.", status: "ok" },
        { expr: "x = 8", explica: "Divido por 3.", status: "ok" },
      ],
      fatorada: "8 xícaras de leite",
      legenda: "Aplicação — receita proporcional",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8 xícaras" }, { nome: "18 xícaras" }, { nome: "6 xícaras" }],
      respostaCerta: "8 xícaras",
      feedbackAcerto: "🎯 A farinha quadruplicou (3→12), então o leite também: 2·4 = 8.",
      feedbackErro: "A farinha foi multiplicada por 4 (de 3 para 12). O leite acompanha: 2 · 4 = 8 xícaras.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Razão = comparação por divisão; simplifique sempre.",
      "A ordem da razão importa: 12/18 ≠ 18/12.",
      "Proporção: a/b = c/d.",
      "Produto dos extremos = produto dos meios.",
      "Escala é razão entre desenho e realidade, na mesma unidade.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "A razão entre 8 e 12 é:", opcoes: ["2/3", "3/2", "8/12 sem simplificar"], correta: 0, feedbackAcerto: "🎉 Dividindo por 4: 2/3.", feedbackErro: "8/12 dividido por 4 dá 2/3. A resposta precisa ficar simplificada." },
      { pergunta: "4/6 = x/9. x vale:", opcoes: ["6", "5", "8"], correta: 0, feedbackAcerto: "🎉 4·9 = 36 e 36 ÷ 6 = 6.", feedbackErro: "Cruze: 4·9 = 6x → 36 = 6x → x = 6." },
      { pergunta: "As razões 2/5 e 6/15 formam proporção?", opcoes: ["Sim", "Não", "Só se simplificar"], correta: 0, feedbackAcerto: "🎉 2·15 = 30 e 5·6 = 30. Produtos iguais.", feedbackErro: "Multiplique em cruz: 2·15 = 30 e 5·6 = 30. Iguais, então é proporção." },
      { pergunta: "Num mapa 1:1000, 5 cm equivalem a:", opcoes: ["50 m", "5 m", "500 m"], correta: 0, feedbackAcerto: "🎉 5 · 1000 = 5000 cm = 50 m.", feedbackErro: "5 cm × 1000 = 5000 cm. Convertendo: 5000 ÷ 100 = 50 m." },
      { pergunta: "Um carro faz 240 km em 3 h. A razão km/h é:", opcoes: ["80", "720", "0,0125"], correta: 0, feedbackAcerto: "🎉 240 ÷ 3 = 80 km/h.", feedbackErro: "Razão é divisão: 240 ÷ 3 = 80 km por hora." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Razões da minha casa",
    materiais: ["Fita métrica", "Papel", "Caneta"],
    passos: [
      "Meça comprimento e largura de 3 cômodos da casa.",
      "Escreva a razão comprimento/largura de cada um, simplificada.",
      "Descubra qual cômodo é o mais 'quadrado' (razão mais próxima de 1).",
    ],
    registro: "📸 Foto da tabela de medidas e razões.",
  },
  recompensa: { xp: 205, moedas: 100, medalha: "Comparador de Grandezas" },
};
