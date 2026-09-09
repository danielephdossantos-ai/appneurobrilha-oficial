import type { AulaV4 } from "../../types";

export const aula02_vaiUmUnidade: AulaV4 = {
  "slug": "u2-02-vai-um-unidade",
  "titulo": "Vai 1! Reagrupar na Unidade",
  "iconeTrilha": "🔟",
  "bncc": [
    "EF03MA05",
    "EF03MA06"
  ],
  "duracaoMin": 20,
  "metodologias": [
    "skemp",
    "cpa"
  ],
  "momento01_motivacao": {
    "titulo": "Passou de 9!",
    "historia": "238 + 145: 8 + 5 = 13. Como escrever 13 em uma casa só? Reagrupando!"
  },
  "momento02_exploracao": {
    "instrucao": "Reagrupar = trocar 10 U por 1 D.",
    "cenas": [
      {
        "tipo": "texto",
        "texto": "13 = 1 dezena + 3 unidades."
      },
      {
        "tipo": "texto",
        "texto": "Escrevo 3 e 'levo 1' pra dezena.",
        "destaque": true
      }
    ]
  },
  "momento03_descoberta": {
    "perguntaGuia": "Quando reagrupar?",
    "pista": "Sempre que a coluna passar de 9.",
    "revelacao": "Coluna ≥ 10 → escreve unidade e 'vai 1' pra próxima."
  },
  "momento04_explicacao": {
    "titulo": "Reagrupar na unidade",
    "etapas": [
      {
        "texto": "Vamos armar 238 + 145. Quando a coluna passa de 9, reagrupamos: 10 U = 1 D.",
        "exemploReal": {
          "contexto": "Some U, depois D (com o 'vai 1'), depois C.",
          "destaque": "238 + 145 = 383.",
          "contaPassoAPasso": {
            "operacao": "soma",
            "operandos": [238, 145],
            "resultado": 383,
            "passos": [
              { "coluna": "U", "fala": "Unidades: 8 + 5 = 13. Escrevo 3, vai 1 para a dezena.", "digito": 3, "vaiUm": 1 },
              { "coluna": "D", "fala": "Dezenas: 3 + 4 + 1 = 8. Escrevo 8.", "digito": 8 },
              { "coluna": "C", "fala": "Centenas: 2 + 1 = 3. Escrevo 3.", "digito": 3 }
            ]
          }
        }
      }
    ]
  },
  "momento05_modelagem": {
    "enunciado": "Some 156 + 128.",
    "passos": [
      "U: 6+8=14 (4, vai 1)",
      "D: 5+2+1=8",
      "C: 1+1=2",
      "Resultado: 284"
    ],
    "resposta": "156 + 128 = 284",
    "casasValor": {
      "numero": 284,
      "mostrarDecomposicao": true,
      "extenso": "duzentos e oitenta e quatro"
    }
  },
  "momento06_praticaGuiada": {
    "enunciado": "247 + 135 = ?",
    "dica": "Se U passa de 9, sobe 1.",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "382"
        },
        {
          "nome": "372"
        },
        {
          "nome": "392"
        }
      ],
      "respostaCerta": "382",
      "feedbackAcerto": "🎉 U:12(2,v1), D:8, C:3.",
      "feedbackErro": "12 = 1 dezena + 2."
    }
  },
  "momento07_praticaIndependente": {
    "enunciado": "168 + 213 = ?",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "381"
        },
        {
          "nome": "371"
        },
        {
          "nome": "391"
        }
      ],
      "respostaCerta": "381",
      "feedbackAcerto": "🎯 381.",
      "feedbackErro": "U:11(1,v1), D:8, C:3."
    }
  },
  "momento08_aplicacao": {
    "contexto": "Biblioteca com 356 livros; chegaram 227.",
    "problema": "Novo estoque:",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "583"
        },
        {
          "nome": "573"
        },
        {
          "nome": "593"
        }
      ],
      "respostaCerta": "583",
      "feedbackAcerto": "🎯 583.",
      "feedbackErro": "356+227=583."
    }
  },
  "momento09_revisao": {
    "pontos": [
      "Se coluna > 9, sobe 1.",
      "Some da direita.",
      "Não esqueça o 'vai 1' na próxima."
    ],
    "miniDesafio": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "585"
        },
        {
          "nome": "575"
        },
        {
          "nome": "595"
        }
      ],
      "respostaCerta": "585",
      "feedbackAcerto": "🎉 429+156=585.",
      "feedbackErro": "U:15(5,v1), D:8, C:5."
    }
  },
  "momento10_avaliacao": {
    "perguntas": [
      {
        "pergunta": "178 + 213 = ?",
        "opcoes": [
          "391",
          "381",
          "401"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 391.",
        "feedbackErro": "U:11(1,v1), D:9, C:3."
      },
      {
        "pergunta": "265 + 128 = ?",
        "opcoes": [
          "393",
          "383",
          "403"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 393.",
        "feedbackErro": "U:13(3,v1), D:9, C:3."
      },
      {
        "pergunta": "457 + 234 = ?",
        "opcoes": [
          "691",
          "681",
          "701"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 691.",
        "feedbackErro": "U:11(1,v1), D:9, C:6."
      }
    ]
  },
  "momento11_missaoFamilia": {
    "titulo": "Caixinha das Trocas",
    "materiais": [
      "10 palitos"
    ],
    "passos": [
      "Junte 10 palitos e amarre — vira 1 dezena.",
      "Faça 3 grupos: 10, 20, 30."
    ],
    "registro": "📸 Foto dos grupos."
  },
  "recompensa": {
    "xp": 200,
    "moedas": 100
  }
};
