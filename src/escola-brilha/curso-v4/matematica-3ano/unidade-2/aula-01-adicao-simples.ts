import type { AulaV4 } from "../../types";

export const aula01_adicaoSimples: AulaV4 = {
  "slug": "u2-01-adicao-simples",
  "titulo": "Somar Sem Segredo",
  "iconeTrilha": "➕",
  "bncc": [
    "EF03MA05"
  ],
  "duracaoMin": 20,
  "metodologias": [
    "skemp",
    "cpa"
  ],
  "momento01_motivacao": {
    "titulo": "O caixa da padaria",
    "historia": "A padaria vendeu 234 pães de manhã e 152 à tarde. Quantos ao todo? O caixa precisa somar sem errar."
  },
  "momento02_exploracao": {
    "instrucao": "Observe a conta armada.",
    "cenas": [
      {
        "tipo": "texto",
        "texto": "234 + 152 = ?"
      },
      {
        "tipo": "texto",
        "texto": "Some coluna por coluna: U, D, C.",
        "destaque": true
      },
      {
        "tipo": "texto",
        "texto": "Sem reagrupamento quando cada coluna ≤ 9."
      }
    ]
  },
  "momento03_descoberta": {
    "perguntaGuia": "Por onde começar?",
    "pista": "Sempre pela unidade (direita).",
    "revelacao": "Alinhe C-D-U e some da direita pra esquerda."
  },
  "momento04_explicacao": {
    "titulo": "Adição sem reagrupamento",
    "etapas": [
      {
        "texto": "Vamos armar 234 + 152 e resolver coluna por coluna, da direita pra esquerda.",
        "exemploReal": {
          "contexto": "Somamos U, depois D, depois C.",
          "destaque": "234 + 152 = 386.",
          "contaPassoAPasso": {
            "operacao": "soma",
            "operandos": [234, 152],
            "resultado": 386,
            "passos": [
              { "coluna": "U", "fala": "Unidades: 4 + 2 = 6. Escrevo 6.", "digito": 6 },
              { "coluna": "D", "fala": "Dezenas: 3 + 5 = 8. Escrevo 8.", "digito": 8 },
              { "coluna": "C", "fala": "Centenas: 2 + 1 = 3. Escrevo 3.", "digito": 3 }
            ]
          }
        }
      }
    ]
  },
  "momento05_modelagem": {
    "enunciado": "Some 321 + 405.",
    "passos": [
      "U: 1+5=6.",
      "D: 2+0=2.",
      "C: 3+4=7.",
      "Resultado: 726."
    ],
    "resposta": "321 + 405 = 726",
    "casasValor": {
      "numero": 726,
      "mostrarDecomposicao": true,
      "extenso": "setecentos e vinte e seis"
    }
  },
  "momento06_praticaGuiada": {
    "enunciado": "Some 143 + 251.",
    "dica": "Comece pela unidade.",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "394"
        },
        {
          "nome": "395"
        },
        {
          "nome": "384"
        }
      ],
      "respostaCerta": "394",
      "feedbackAcerto": "🎉 U:4, D:9, C:3 → 394.",
      "feedbackErro": "3+1=4, 4+5=9, 1+2=3."
    }
  },
  "momento07_praticaIndependente": {
    "enunciado": "Some 512 + 236.",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "748"
        },
        {
          "nome": "758"
        },
        {
          "nome": "648"
        }
      ],
      "respostaCerta": "748",
      "feedbackAcerto": "🎯 748.",
      "feedbackErro": "U:8, D:4, C:7."
    }
  },
  "momento08_aplicacao": {
    "contexto": "A escola tem 214 meninos e 173 meninas.",
    "problema": "Total de alunos:",
    "interacao": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "387"
        },
        {
          "nome": "384"
        },
        {
          "nome": "397"
        }
      ],
      "respostaCerta": "387",
      "feedbackAcerto": "🎯 387.",
      "feedbackErro": "214+173=387."
    }
  },
  "momento09_revisao": {
    "pontos": [
      "Alinhe C-D-U pela direita.",
      "Some da direita pra esquerda.",
      "Sem passar de 9: sem 'vai 1'."
    ],
    "miniDesafio": {
      "tipo": "escolhaVisual",
      "pergunta": "Escolha:",
      "opcoes": [
        {
          "nome": "668"
        },
        {
          "nome": "658"
        },
        {
          "nome": "578"
        }
      ],
      "respostaCerta": "668",
      "feedbackAcerto": "🎉 410+258=668.",
      "feedbackErro": "U:8, D:6, C:6."
    }
  },
  "momento10_avaliacao": {
    "perguntas": [
      {
        "pergunta": "325 + 143 = ?",
        "opcoes": [
          "468",
          "478",
          "458"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 468.",
        "feedbackErro": "U:8, D:6, C:4."
      },
      {
        "pergunta": "602 + 305 = ?",
        "opcoes": [
          "907",
          "917",
          "900"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 907.",
        "feedbackErro": "U:7, D:0, C:9."
      },
      {
        "pergunta": "213 + 546 = ?",
        "opcoes": [
          "759",
          "749",
          "769"
        ],
        "correta": 0,
        "feedbackAcerto": "🎉 759.",
        "feedbackErro": "U:9, D:5, C:7."
      }
    ]
  },
  "momento11_missaoFamilia": {
    "titulo": "Caixa do Comerciante",
    "materiais": [
      "Papel e lápis",
      "2 preços do mercado"
    ],
    "passos": [
      "Escolha 2 produtos e some os preços.",
      "Faça a conta armada no papel.",
      "Confira com um adulto."
    ],
    "registro": "📸 Foto da conta armada."
  },
  "recompensa": {
    "xp": 200,
    "moedas": 100
  }
};
