import type { ActivityLessonC } from "../types/activity-lesson-c";

export const FIRST_YEAR_LESSON_OVERRIDES: Record<string, ActivityLessonC> = {
  "EF01MA03": {
    "id": "ef01ma03",
    "title": "Mais, menos ou igual",
    "mission_question": "Qual grupo tem mais objetos?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA03",
    "bncc_description": "Comparar grupos de objetos para descobrir se tem mais, menos ou a mesma quantidade.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Comparar grupos de objetos para descobrir se tem mais, menos ou a mesma quantidade."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Quando vemos dois grupos, podemos comparar sem pressa. Podemos ligar um objeto de um grupo com um objeto do outro. Se sobra objeto em um grupo, esse grupo tem mais.",
        "pontos_destaque": [
          {
            "emoji": "👀",
            "text": "Olhe para os dois grupos."
          },
          {
            "emoji": "👉",
            "text": "Compare um com um."
          },
          {
            "emoji": "✅",
            "text": "Veja se sobrou algum objeto."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🔢",
            "title": "Mais",
            "text": "Tem mais quando sobra objeto em um grupo."
          },
          {
            "icon": "➖",
            "title": "Menos",
            "text": "Tem menos quando faltam objetos para formar pares."
          },
          {
            "icon": "🟰",
            "title": "Igual",
            "text": "É igual quando os dois grupos formam pares certinhos."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa tem 5 estrelas. Pip tem 3 estrelas. Ao comparar, sobram 2 estrelas para Pipa.",
        "scenario_emoji": "⭐",
        "analysis": [
          "Conte as estrelas de Pipa: 1, 2, 3, 4, 5.",
          "Conte as estrelas de Pip: 1, 2, 3.",
          "Cinco é mais que três."
        ],
        "conclusion": "Pipa tem mais estrelas."
      },
      "desafio": {
        "context": "Compare os grupos.",
        "question": "Grupo A: 🍎🍎🍎🍎. Grupo B: 🍎🍎. Qual grupo tem mais maçãs?",
        "options": [
          {
            "letter": "A",
            "text": "Grupo A",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Grupo B",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Os dois são iguais",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Nenhum grupo",
            "isCorrect": false
          }
        ],
        "explanation": "O Grupo A tem 4 maçãs e o Grupo B tem 2. Quatro é mais que dois."
      }
    }
  },
  "EF01MA04": {
    "id": "ef01ma04",
    "title": "Contar objetos até 100",
    "mission_question": "Quantos objetos há no grupo?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA04",
    "bncc_description": "Contar coleções e registrar a quantidade encontrada.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Contar coleções e registrar a quantidade encontrada."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Contar é falar os números na ordem. Tocamos ou apontamos cada objeto uma vez: 1, 2, 3... O último número falado mostra a quantidade total.",
        "pontos_destaque": [
          {
            "emoji": "☝️",
            "text": "Aponte um objeto por vez."
          },
          {
            "emoji": "🔊",
            "text": "Fale os números na ordem."
          },
          {
            "emoji": "📝",
            "text": "Guarde o último número."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "1️⃣",
            "title": "Um por vez",
            "text": "Cada objeto recebe apenas um número."
          },
          {
            "icon": "🔁",
            "title": "Ordem",
            "text": "A sequência ajuda a não se perder."
          },
          {
            "icon": "🏁",
            "title": "Último número",
            "text": "O último número é o total."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pip contou 6 bolinhas: 1, 2, 3, 4, 5, 6.",
        "scenario_emoji": "🔵",
        "analysis": [
          "Ele apontou cada bolinha uma vez.",
          "Ele não pulou nenhuma bolinha.",
          "O último número foi 6."
        ],
        "conclusion": "Então havia 6 bolinhas."
      },
      "desafio": {
        "context": "Conte com calma.",
        "question": "Quantas flores há aqui? 🌼🌼🌼🌼🌼",
        "options": [
          {
            "letter": "A",
            "text": "5",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "4",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "6",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "3",
            "isCorrect": false
          }
        ],
        "explanation": "Contando uma por uma: 1, 2, 3, 4, 5. São 5 flores."
      }
    }
  },
  "EF01MA05": {
    "id": "ef01ma05",
    "title": "Número maior e número menor",
    "mission_question": "Qual número é maior?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA05",
    "bncc_description": "Comparar números do dia a dia usando contagem e reta numérica.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Comparar números do dia a dia usando contagem e reta numérica."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Um número é maior quando vem depois na contagem. Na reta numérica, quanto mais para a direita, maior ele é.",
        "pontos_destaque": [
          {
            "emoji": "🔢",
            "text": "Leia os dois números."
          },
          {
            "emoji": "➡️",
            "text": "Veja qual vem depois."
          },
          {
            "emoji": "⭐",
            "text": "O que vem depois é maior."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🐣",
            "title": "Menor",
            "text": "Número que aparece antes na contagem."
          },
          {
            "icon": "🦋",
            "title": "Maior",
            "text": "Número que aparece depois na contagem."
          },
          {
            "icon": "📏",
            "title": "Reta",
            "text": "A reta ajuda a enxergar a ordem."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa comparou 8 e 12. Ela contou: 8, 9, 10, 11, 12.",
        "scenario_emoji": "📏",
        "analysis": [
          "O 12 vem depois do 8.",
          "Quem vem depois é maior.",
          "Então 12 é maior."
        ],
        "conclusion": "12 é maior que 8."
      },
      "desafio": {
        "context": "Compare os números.",
        "question": "Qual número é maior: 9 ou 15?",
        "options": [
          {
            "letter": "A",
            "text": "15",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "9",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Os dois são iguais",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "5",
            "isCorrect": false
          }
        ],
        "explanation": "15 vem depois de 9 na contagem. Por isso, 15 é maior."
      }
    }
  },
  "EF01MA07": {
    "id": "ef01ma07",
    "title": "Dezena e unidade",
    "mission_question": "Como podemos formar um número?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA07",
    "bncc_description": "Formar números usando dezena e unidades.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Formar números usando dezena e unidades."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Um grupo de 10 unidades forma 1 dezena. Depois da dezena, contamos as unidades que sobraram.",
        "pontos_destaque": [
          {
            "emoji": "🔟",
            "text": "Dez unidades formam uma dezena."
          },
          {
            "emoji": "🧩",
            "text": "Junte dezena com unidades."
          },
          {
            "emoji": "🧠",
            "text": "10 + unidades forma o número."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🔟",
            "title": "Dezena",
            "text": "É um grupo com 10."
          },
          {
            "icon": "1️⃣",
            "title": "Unidade",
            "text": "É cada peça sozinha."
          },
          {
            "icon": "➕",
            "title": "Compor",
            "text": "Juntar partes para formar o número."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pip formou o número 13 com uma dezena e três unidades.",
        "scenario_emoji": "🧱",
        "analysis": [
          "Uma dezena vale 10.",
          "Três unidades valem 3.",
          "10 + 3 forma 13."
        ],
        "conclusion": "13 é 10 + 3."
      },
      "desafio": {
        "context": "Pense em dezena e unidades.",
        "question": "O número 14 é formado por:",
        "options": [
          {
            "letter": "A",
            "text": "10 + 4",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "10 + 2",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "4 + 4",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "20 + 4",
            "isCorrect": false
          }
        ],
        "explanation": "14 tem uma dezena, que vale 10, e 4 unidades. Então é 10 + 4."
      }
    }
  },
  "EF01MA09": {
    "id": "ef01ma09",
    "title": "Organizar por cor, forma e tamanho",
    "mission_question": "Como podemos organizar objetos?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA09",
    "bncc_description": "Organizar objetos usando uma característica escolhida.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Organizar objetos usando uma característica escolhida."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Podemos organizar objetos por cor, forma ou tamanho. Primeiro escolhemos uma regra. Depois colocamos juntos os objetos que combinam com essa regra.",
        "pontos_destaque": [
          {
            "emoji": "🎨",
            "text": "Pode ser por cor."
          },
          {
            "emoji": "🔺",
            "text": "Pode ser por forma."
          },
          {
            "emoji": "📏",
            "text": "Pode ser por tamanho."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "✅",
            "title": "Regra",
            "text": "A regra diz como organizar."
          },
          {
            "icon": "👀",
            "title": "Observar",
            "text": "Olhe o que cada objeto tem."
          },
          {
            "icon": "🧺",
            "title": "Agrupar",
            "text": "Coloque juntos os parecidos."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa separou botões vermelhos de botões azuis.",
        "scenario_emoji": "🔴",
        "analysis": [
          "Ela escolheu a regra: cor.",
          "Botões vermelhos ficaram juntos.",
          "Botões azuis ficaram juntos."
        ],
        "conclusion": "Organizar fica fácil quando a regra é clara."
      },
      "desafio": {
        "context": "Escolha a regra.",
        "question": "Se a regra é organizar por COR, o que devemos observar?",
        "options": [
          {
            "letter": "A",
            "text": "A cor dos objetos",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "O peso dos objetos",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "O nome dos objetos",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "O som dos objetos",
            "isCorrect": false
          }
        ],
        "explanation": "Organizar por cor significa olhar se o objeto é vermelho, azul, amarelo e assim por diante."
      }
    }
  },
  "EF01MA10": {
    "id": "ef01ma10",
    "title": "Sequências e padrões",
    "mission_question": "O que vem depois na sequência?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA10",
    "bncc_description": "Descobrir o que se repete ou continua em uma sequência.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Descobrir o que se repete ou continua em uma sequência."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Uma sequência tem uma ordem. Para descobrir o próximo item, observamos o padrão: pode aumentar, repetir cor, repetir forma ou seguir uma regra.",
        "pontos_destaque": [
          {
            "emoji": "👀",
            "text": "Observe o começo."
          },
          {
            "emoji": "🔁",
            "text": "Ache a regra."
          },
          {
            "emoji": "➡️",
            "text": "Continue do mesmo jeito."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🔁",
            "title": "Padrão",
            "text": "É aquilo que se repete."
          },
          {
            "icon": "➕",
            "title": "Aumenta",
            "text": "Às vezes soma 1 ou soma 2."
          },
          {
            "icon": "🎨",
            "title": "Repete",
            "text": "Às vezes repete cores ou figuras."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pip viu: 🔴 🔵 🔴 🔵. Ele percebeu que as cores se repetem.",
        "scenario_emoji": "🔁",
        "analysis": [
          "Primeiro vem vermelho.",
          "Depois vem azul.",
          "Depois repete vermelho e azul."
        ],
        "conclusion": "O próximo depois de azul será vermelho."
      },
      "desafio": {
        "context": "Veja o padrão.",
        "question": "Na sequência 2, 4, 6, __, qual número vem depois?",
        "options": [
          {
            "letter": "A",
            "text": "8",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "7",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "10",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "3",
            "isCorrect": false
          }
        ],
        "explanation": "A sequência aumenta de 2 em 2: 2, 4, 6, 8."
      }
    }
  },
  "EF01MA11": {
    "id": "ef01ma11",
    "title": "Frente, atrás, direita e esquerda",
    "mission_question": "Onde está o objeto?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA11",
    "bncc_description": "Usar palavras de localização em relação ao próprio corpo.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Usar palavras de localização em relação ao próprio corpo."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Para explicar onde algo está, usamos palavras como frente, atrás, direita, esquerda, em cima e embaixo. Essas palavras ajudam outra pessoa a encontrar o objeto.",
        "pontos_destaque": [
          {
            "emoji": "⬆️",
            "text": "Em cima e embaixo."
          },
          {
            "emoji": "➡️",
            "text": "Direita e esquerda."
          },
          {
            "emoji": "👣",
            "text": "Frente e atrás."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🙂",
            "title": "Meu corpo",
            "text": "Posso usar meu corpo como referência."
          },
          {
            "icon": "🗣️",
            "title": "Explicar",
            "text": "As palavras ajudam a orientar."
          },
          {
            "icon": "🎯",
            "title": "Localizar",
            "text": "Localizar é dizer onde está."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa está olhando para a porta. A mochila ficou atrás dela.",
        "scenario_emoji": "🎒",
        "analysis": [
          "Ela olha para frente.",
          "O que está nas costas fica atrás.",
          "A mochila está atrás da Pipa."
        ],
        "conclusion": "A palavra certa é atrás."
      },
      "desafio": {
        "context": "Pense na posição.",
        "question": "Se o brinquedo está nas suas costas, ele está:",
        "options": [
          {
            "letter": "A",
            "text": "Atrás",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Na frente",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Em cima",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Dentro",
            "isCorrect": false
          }
        ],
        "explanation": "O que fica do lado das costas está atrás de você."
      }
    }
  },
  "EF01MA12": {
    "id": "ef01ma12",
    "title": "Localização com referência",
    "mission_question": "Direita de quem? Esquerda de quem?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA12",
    "bncc_description": "Dizer a posição usando um ponto de referência.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Dizer a posição usando um ponto de referência."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Direita e esquerda dependem de quem está olhando. Por isso, precisamos dizer o ponto de referência: direita da criança, esquerda da mesa, em cima da cadeira.",
        "pontos_destaque": [
          {
            "emoji": "📍",
            "text": "Escolha a referência."
          },
          {
            "emoji": "👀",
            "text": "Veja de onde está olhando."
          },
          {
            "emoji": "➡️",
            "text": "Depois diga a posição."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "📍",
            "title": "Referência",
            "text": "É o ponto usado para localizar."
          },
          {
            "icon": "↔️",
            "title": "Direita e esquerda",
            "text": "Mudam conforme quem olha."
          },
          {
            "icon": "🧭",
            "title": "Orientação",
            "text": "Ajuda a explicar o caminho."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pip disse: o lápis está à direita do caderno.",
        "scenario_emoji": "✏️",
        "analysis": [
          "A referência é o caderno.",
          "Ele olhou os lados do caderno.",
          "O lápis estava do lado direito do caderno."
        ],
        "conclusion": "A referência deixa a frase clara."
      },
      "desafio": {
        "context": "Use uma referência.",
        "question": "Para dizer 'à direita', precisamos saber:",
        "options": [
          {
            "letter": "A",
            "text": "Direita de quem ou de quê",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "A cor do objeto",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "O peso do objeto",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "O nome da escola",
            "isCorrect": false
          }
        ],
        "explanation": "Direita e esquerda precisam de uma referência: de quem ou de qual objeto estamos falando."
      }
    }
  },
  "EF01MA13": {
    "id": "ef01ma13",
    "title": "Sólidos geométricos",
    "mission_question": "Que forma tem este objeto?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA13",
    "bncc_description": "Reconhecer esfera, cubo, cilindro e cone em objetos do cotidiano.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Reconhecer esfera, cubo, cilindro e cone em objetos do cotidiano."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Alguns objetos parecem sólidos geométricos. Bola parece esfera. Dado parece cubo. Lata parece cilindro. Chapéu de festa parece cone.",
        "pontos_destaque": [
          {
            "emoji": "⚽",
            "text": "Bola lembra esfera."
          },
          {
            "emoji": "🎲",
            "text": "Dado lembra cubo."
          },
          {
            "emoji": "🥫",
            "text": "Lata lembra cilindro."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🌕",
            "title": "Esfera",
            "text": "É redonda como uma bola."
          },
          {
            "icon": "🧊",
            "title": "Cubo",
            "text": "Tem faces quadradas."
          },
          {
            "icon": "🥳",
            "title": "Cone",
            "text": "Parece chapéu de festa."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa olhou uma lata de suco. Ela viu que a lata parece um cilindro.",
        "scenario_emoji": "🥫",
        "analysis": [
          "A lata tem duas partes redondas.",
          "Ela fica em pé como um rolinho.",
          "Essa forma é cilindro."
        ],
        "conclusion": "A lata lembra um cilindro."
      },
      "desafio": {
        "context": "Observe o objeto.",
        "question": "Uma bola lembra qual sólido geométrico?",
        "options": [
          {
            "letter": "A",
            "text": "Esfera",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Cubo",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Cone",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Cilindro",
            "isCorrect": false
          }
        ],
        "explanation": "A bola é redonda para todos os lados. Essa forma é a esfera."
      }
    }
  },
  "EF01MA14": {
    "id": "ef01ma14",
    "title": "Figuras planas",
    "mission_question": "Qual é o nome da figura?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA14",
    "bncc_description": "Reconhecer círculo, quadrado, retângulo e triângulo.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Reconhecer círculo, quadrado, retângulo e triângulo."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Figuras planas aparecem em desenhos, placas, janelas e brinquedos. O triângulo tem 3 lados. O quadrado tem 4 lados iguais. O círculo é redondo.",
        "pontos_destaque": [
          {
            "emoji": "⭕",
            "text": "Círculo é redondo."
          },
          {
            "emoji": "🔲",
            "text": "Quadrado tem 4 lados iguais."
          },
          {
            "emoji": "🔺",
            "text": "Triângulo tem 3 lados."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "👀",
            "title": "Olhar lados",
            "text": "Conte os lados da figura."
          },
          {
            "icon": "📐",
            "title": "Forma",
            "text": "A forma ajuda a nomear."
          },
          {
            "icon": "🏠",
            "title": "Cotidiano",
            "text": "As figuras aparecem em objetos."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pip viu uma placa com 3 lados. Ele contou: 1, 2, 3.",
        "scenario_emoji": "🔺",
        "analysis": [
          "A figura tinha três lados.",
          "Figura com 3 lados é triângulo.",
          "Então a placa lembrava um triângulo."
        ],
        "conclusion": "Triângulo tem 3 lados."
      },
      "desafio": {
        "context": "Conte os lados.",
        "question": "Qual figura tem 3 lados?",
        "options": [
          {
            "letter": "A",
            "text": "Triângulo",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Círculo",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Quadrado",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Retângulo",
            "isCorrect": false
          }
        ],
        "explanation": "O triângulo é a figura plana que tem 3 lados."
      }
    }
  },
  "EF01MA15": {
    "id": "ef01ma15",
    "title": "Comparar medidas",
    "mission_question": "Qual objeto é maior, menor, pesado ou leve?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA15",
    "bncc_description": "Comparar objetos usando alto, baixo, comprido, curto, pesado e leve.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Comparar objetos usando alto, baixo, comprido, curto, pesado e leve."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Comparar medidas é observar tamanho, peso ou capacidade. Podemos dizer mais alto, mais baixo, mais comprido, mais curto, mais pesado ou mais leve.",
        "pontos_destaque": [
          {
            "emoji": "📏",
            "text": "Compare tamanho."
          },
          {
            "emoji": "⚖️",
            "text": "Compare peso."
          },
          {
            "emoji": "🥤",
            "text": "Compare o que cabe."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "↕️",
            "title": "Altura",
            "text": "Mais alto ou mais baixo."
          },
          {
            "icon": "↔️",
            "title": "Comprimento",
            "text": "Mais comprido ou mais curto."
          },
          {
            "icon": "⚖️",
            "title": "Massa",
            "text": "Mais pesado ou mais leve."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa comparou dois lápis. Um era grande e outro pequeno.",
        "scenario_emoji": "✏️",
        "analysis": [
          "Ela colocou os dois lado a lado.",
          "O lápis grande ia mais longe.",
          "Ele era mais comprido."
        ],
        "conclusion": "Comparar ajuda a escolher as palavras certas."
      },
      "desafio": {
        "context": "Observe a medida.",
        "question": "Uma pena e uma pedra. Qual costuma ser mais leve?",
        "options": [
          {
            "letter": "A",
            "text": "A pena",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "A pedra",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "As duas sempre pesam igual",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Nenhuma",
            "isCorrect": false
          }
        ],
        "explanation": "A pena costuma pesar menos que a pedra. Por isso, é mais leve."
      }
    }
  },
  "EF01MA16": {
    "id": "ef01ma16",
    "title": "Ordem dos acontecimentos do dia",
    "mission_question": "O que acontece primeiro no dia?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA16",
    "bncc_description": "Organizar o que acontece primeiro, depois e por último.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Organizar o que acontece primeiro, depois e por último."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Nosso dia tem uma ordem. Podemos contar acontecimentos usando antes, depois, primeiro e por último.",
        "pontos_destaque": [
          {
            "emoji": "🌅",
            "text": "Manhã pode ser começo."
          },
          {
            "emoji": "🍽️",
            "text": "Depois pode ter almoço."
          },
          {
            "emoji": "🌙",
            "text": "À noite descansamos."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "1️⃣",
            "title": "Primeiro",
            "text": "Aquilo que acontece no começo."
          },
          {
            "icon": "➡️",
            "title": "Depois",
            "text": "Aquilo que vem em seguida."
          },
          {
            "icon": "🏁",
            "title": "Por último",
            "text": "Aquilo que acontece no final."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pip acordou, tomou café e foi para a escola.",
        "scenario_emoji": "🌅",
        "analysis": [
          "Primeiro ele acordou.",
          "Depois tomou café.",
          "Depois foi para a escola."
        ],
        "conclusion": "A ordem ajuda a contar a rotina."
      },
      "desafio": {
        "context": "Pense na rotina.",
        "question": "O que normalmente acontece primeiro?",
        "options": [
          {
            "letter": "A",
            "text": "Acordar de manhã",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Dormir à noite",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Guardar o pijama no fim do dia",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Jantar",
            "isCorrect": false
          }
        ],
        "explanation": "Geralmente o dia começa quando acordamos de manhã."
      }
    }
  },
  "EF01MA17": {
    "id": "ef01ma17",
    "title": "Semana, mês e calendário",
    "mission_question": "Para que serve o calendário?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA17",
    "bncc_description": "Reconhecer dias da semana, meses e períodos do dia.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Reconhecer dias da semana, meses e períodos do dia."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "O calendário ajuda a organizar os dias. Uma semana tem 7 dias. Os meses formam o ano. Também usamos manhã, tarde e noite para falar dos períodos do dia.",
        "pontos_destaque": [
          {
            "emoji": "📅",
            "text": "Calendário mostra dias."
          },
          {
            "emoji": "7️⃣",
            "text": "Semana tem 7 dias."
          },
          {
            "emoji": "🌞",
            "text": "Manhã, tarde e noite organizam o dia."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "📅",
            "title": "Calendário",
            "text": "Ajuda a marcar datas."
          },
          {
            "icon": "🗓️",
            "title": "Semana",
            "text": "Tem 7 dias."
          },
          {
            "icon": "📆",
            "title": "Mês",
            "text": "Tem vários dias juntos."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa marcou o aniversário no calendário.",
        "scenario_emoji": "🎂",
        "analysis": [
          "Ela procurou o mês.",
          "Depois olhou o dia.",
          "Assim soube quando seria a festa."
        ],
        "conclusion": "O calendário ajuda a lembrar datas."
      },
      "desafio": {
        "context": "Use o calendário.",
        "question": "Quantos dias tem uma semana?",
        "options": [
          {
            "letter": "A",
            "text": "7",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "5",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "6",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "10",
            "isCorrect": false
          }
        ],
        "explanation": "A semana tem domingo, segunda, terça, quarta, quinta, sexta e sábado: 7 dias."
      }
    }
  },
  "EF01MA18": {
    "id": "ef01ma18",
    "title": "Escrever datas",
    "mission_question": "O que aparece em uma data?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA18",
    "bncc_description": "Ler e escrever data com dia, mês e ano.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Ler e escrever data com dia, mês e ano."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Uma data mostra dia, mês e ano. No Brasil, costumamos escrever assim: dia/mês/ano. Por exemplo: 15/03/2026.",
        "pontos_destaque": [
          {
            "emoji": "1️⃣",
            "text": "Primeiro vem o dia."
          },
          {
            "emoji": "2️⃣",
            "text": "Depois vem o mês."
          },
          {
            "emoji": "3️⃣",
            "text": "Por último vem o ano."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "📌",
            "title": "Dia",
            "text": "Mostra o dia do mês."
          },
          {
            "icon": "📆",
            "title": "Mês",
            "text": "Mostra em qual mês estamos."
          },
          {
            "icon": "🗓️",
            "title": "Ano",
            "text": "Mostra o ano."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pip viu a data 08/04/2026.",
        "scenario_emoji": "📅",
        "analysis": [
          "08 é o dia.",
          "04 é o mês.",
          "2026 é o ano."
        ],
        "conclusion": "A ordem é dia, mês e ano."
      },
      "desafio": {
        "context": "Observe a data.",
        "question": "Na data 12/05/2026, o número 05 mostra:",
        "options": [
          {
            "letter": "A",
            "text": "O mês",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "O dia",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "O ano",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "A hora",
            "isCorrect": false
          }
        ],
        "explanation": "Na ordem dia/mês/ano, 12 é o dia, 05 é o mês e 2026 é o ano."
      }
    }
  },
  "EF01MA19": {
    "id": "ef01ma19",
    "title": "Dinheiro do Brasil",
    "mission_question": "Quanto vale o dinheiro?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA19",
    "bncc_description": "Reconhecer moedas e cédulas em situações simples.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Reconhecer moedas e cédulas em situações simples."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "No Brasil usamos reais e centavos. Moedas e cédulas têm valores diferentes. Juntar valores ajuda a comprar e pagar coisas simples.",
        "pontos_destaque": [
          {
            "emoji": "🪙",
            "text": "Moedas têm valores."
          },
          {
            "emoji": "💵",
            "text": "Cédulas também têm valores."
          },
          {
            "emoji": "➕",
            "text": "Juntar valores dá o total."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🪙",
            "title": "Centavos",
            "text": "Parte menor do real."
          },
          {
            "icon": "💵",
            "title": "Real",
            "text": "Usamos para pagar compras."
          },
          {
            "icon": "🛒",
            "title": "Compra",
            "text": "Precisamos saber o total."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa juntou duas moedas de 50 centavos.",
        "scenario_emoji": "🪙",
        "analysis": [
          "Uma moeda vale 50 centavos.",
          "Outra moeda vale 50 centavos.",
          "50 + 50 centavos forma 1 real."
        ],
        "conclusion": "Duas moedas de 50 centavos valem R$ 1,00."
      },
      "desafio": {
        "context": "Junte os valores.",
        "question": "Duas moedas de 50 centavos juntas valem:",
        "options": [
          {
            "letter": "A",
            "text": "R$ 1,00",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "R$ 0,50",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "R$ 2,00",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "R$ 5,00",
            "isCorrect": false
          }
        ],
        "explanation": "50 centavos + 50 centavos = 100 centavos, que é R$ 1,00."
      }
    }
  },
  "EF01MA20": {
    "id": "ef01ma20",
    "title": "Certeza, talvez e impossível",
    "mission_question": "Isso vai acontecer com certeza?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA20",
    "bncc_description": "Classificar acontecimentos do dia a dia.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Classificar acontecimentos do dia a dia."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Algumas coisas acontecem com certeza. Outras talvez aconteçam. E algumas são impossíveis. Pensar assim ajuda a falar sobre chances.",
        "pontos_destaque": [
          {
            "emoji": "✅",
            "text": "Certeza: vai acontecer."
          },
          {
            "emoji": "❓",
            "text": "Talvez: pode acontecer ou não."
          },
          {
            "emoji": "🚫",
            "text": "Impossível: não pode acontecer."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "✅",
            "title": "Certeza",
            "text": "Algo que sabemos que vai acontecer."
          },
          {
            "icon": "❓",
            "title": "Talvez",
            "text": "Pode acontecer, mas não sabemos."
          },
          {
            "icon": "🚫",
            "title": "Impossível",
            "text": "Não tem como acontecer."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pip perguntou: amanhã pode chover?",
        "scenario_emoji": "🌧️",
        "analysis": [
          "Pode chover.",
          "Também pode não chover.",
          "Então é talvez."
        ],
        "conclusion": "Chuva de amanhã é um talvez."
      },
      "desafio": {
        "context": "Pense na chance.",
        "question": "A frase 'talvez eu veja uma borboleta no jardim' significa:",
        "options": [
          {
            "letter": "A",
            "text": "Pode acontecer ou não",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Vai acontecer com certeza",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "É impossível acontecer",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Nunca acontece",
            "isCorrect": false
          }
        ],
        "explanation": "Talvez quer dizer que pode acontecer, mas também pode não acontecer."
      }
    }
  },
  "EF01MA21": {
    "id": "ef01ma21",
    "title": "Ler tabelas simples",
    "mission_question": "O que a tabela mostra?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA21",
    "bncc_description": "Entender dados organizados em tabela ou gráfico simples.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Entender dados organizados em tabela ou gráfico simples."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Uma tabela organiza informações. Ela pode mostrar quantas crianças escolheram cada fruta, brinquedo ou cor. Lemos a tabela olhando o nome e a quantidade.",
        "pontos_destaque": [
          {
            "emoji": "📊",
            "text": "A tabela organiza dados."
          },
          {
            "emoji": "👀",
            "text": "Veja o nome da linha."
          },
          {
            "emoji": "🔢",
            "text": "Veja a quantidade."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "📊",
            "title": "Tabela",
            "text": "Guarda informações organizadas."
          },
          {
            "icon": "🔢",
            "title": "Quantidade",
            "text": "Mostra quantos foram contados."
          },
          {
            "icon": "🏆",
            "title": "Maior número",
            "text": "Mostra o mais escolhido."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "A turma votou em frutas. Maçã recebeu 6 votos e banana recebeu 3.",
        "scenario_emoji": "🍎",
        "analysis": [
          "Olhe o nome da fruta.",
          "Leia a quantidade ao lado.",
          "6 é maior que 3."
        ],
        "conclusion": "Maçã foi mais escolhida."
      },
      "desafio": {
        "context": "Leia os dados: Maçã 5 votos, Banana 2 votos.",
        "question": "Qual fruta teve mais votos?",
        "options": [
          {
            "letter": "A",
            "text": "Maçã",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Banana",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "As duas empataram",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Nenhuma",
            "isCorrect": false
          }
        ],
        "explanation": "Maçã teve 5 votos e banana teve 2. Cinco é mais que dois."
      }
    }
  },
  "EF01MA22": {
    "id": "ef01ma22",
    "title": "Pesquisa da turma",
    "mission_question": "Como fazemos uma pesquisa simples?",
    "subject": "Matemática",
    "area": "matematica",
    "area_label": "Matemática",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01MA22",
    "bncc_description": "Fazer uma pergunta, contar respostas e organizar dados.",
    "xp": 110,
    "color": {
      "from": "from-blue-500",
      "to": "to-cyan-600",
      "accent": "blue"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Fazer uma pergunta, contar respostas e organizar dados."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Uma pesquisa começa com uma pergunta. Depois ouvimos as respostas, contamos cada escolha e mostramos o resultado com desenhos, marcas, tabela ou gráfico simples.",
        "pontos_destaque": [
          {
            "emoji": "❓",
            "text": "Faça uma pergunta."
          },
          {
            "emoji": "✋",
            "text": "Conte as respostas."
          },
          {
            "emoji": "📊",
            "text": "Mostre o resultado."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "❓",
            "title": "Pergunta",
            "text": "É o começo da pesquisa."
          },
          {
            "icon": "🧮",
            "title": "Contagem",
            "text": "Conta quantas respostas cada opção teve."
          },
          {
            "icon": "📊",
            "title": "Registro",
            "text": "Mostra o resultado para todos."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa perguntou: você prefere gato ou cachorro?",
        "scenario_emoji": "🐶",
        "analysis": [
          "Ela anotou cada resposta.",
          "Depois contou gatos e cachorros.",
          "Por fim mostrou o resultado."
        ],
        "conclusion": "Pesquisar é perguntar, contar e mostrar."
      },
      "desafio": {
        "context": "Pesquisa: 4 crianças escolheram cachorro e 7 escolheram gato.",
        "question": "Qual opção foi mais escolhida?",
        "options": [
          {
            "letter": "A",
            "text": "Gato",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Cachorro",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "As duas empataram",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Não houve escolha",
            "isCorrect": false
          }
        ],
        "explanation": "Gato teve 7 escolhas e cachorro teve 4. Sete é mais que quatro."
      }
    }
  },
  "EF01CI01": {
    "id": "ef01ci01",
    "title": "Materiais dos objetos",
    "mission_question": "De que é feito este objeto?",
    "subject": "Ciências",
    "area": "ciencias_natureza",
    "area_label": "Ciências da Natureza",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01CI01",
    "bncc_description": "Observar de que material os objetos são feitos e como usar com cuidado.",
    "xp": 110,
    "color": {
      "from": "from-emerald-500",
      "to": "to-teal-600",
      "accent": "green"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Observar de que material os objetos são feitos e como usar com cuidado."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Objetos podem ser feitos de madeira, vidro, metal, plástico, papel ou tecido. Cada material tem características: alguns são duros, outros leves, outros quebram fácil.",
        "pontos_destaque": [
          {
            "emoji": "🪵",
            "text": "Madeira pode ser dura."
          },
          {
            "emoji": "🥛",
            "text": "Vidro pode quebrar."
          },
          {
            "emoji": "♻️",
            "text": "Descartar certo ajuda o planeta."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🔎",
            "title": "Material",
            "text": "É do que o objeto é feito."
          },
          {
            "icon": "🖐️",
            "title": "Característica",
            "text": "Pode ser duro, mole, leve ou pesado."
          },
          {
            "icon": "♻️",
            "title": "Cuidado",
            "text": "Usar e descartar do jeito certo protege todos."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pip viu um lápis. Ele percebeu que o lápis tem madeira por fora.",
        "scenario_emoji": "✏️",
        "analysis": [
          "Ele observou o objeto.",
          "Pensou no material.",
          "Descobriu que havia madeira."
        ],
        "conclusion": "Objetos têm materiais diferentes."
      },
      "desafio": {
        "context": "Observe os objetos.",
        "question": "Qual objeto costuma ser feito de madeira?",
        "options": [
          {
            "letter": "A",
            "text": "Lápis",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Copo de vidro",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Panela de metal",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Sacola plástica",
            "isCorrect": false
          }
        ],
        "explanation": "O lápis geralmente tem madeira por fora. Copo, panela e sacola usam outros materiais."
      }
    }
  },
  "EF01CI02": {
    "id": "ef01ci02",
    "title": "Partes do corpo",
    "mission_question": "Para que serve cada parte do corpo?",
    "subject": "Ciências",
    "area": "ciencias_natureza",
    "area_label": "Ciências da Natureza",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01CI02",
    "bncc_description": "Nomear partes do corpo e entender para que servem.",
    "xp": 110,
    "color": {
      "from": "from-emerald-500",
      "to": "to-teal-600",
      "accent": "green"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Nomear partes do corpo e entender para que servem."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Nosso corpo tem muitas partes. Usamos olhos para ver, ouvidos para ouvir, nariz para cheirar, mãos para tocar e pernas para andar.",
        "pontos_destaque": [
          {
            "emoji": "👀",
            "text": "Olhos ajudam a ver."
          },
          {
            "emoji": "👂",
            "text": "Ouvidos ajudam a ouvir."
          },
          {
            "emoji": "🖐️",
            "text": "Mãos ajudam a tocar."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🧍",
            "title": "Corpo",
            "text": "Tem muitas partes importantes."
          },
          {
            "icon": "👃",
            "title": "Sentidos",
            "text": "Ajudam a perceber o mundo."
          },
          {
            "icon": "❤️",
            "title": "Cuidado",
            "text": "Cuidar do corpo ajuda a saúde."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa ouviu um sino. Ela usou os ouvidos para escutar.",
        "scenario_emoji": "🔔",
        "analysis": [
          "O sino fez som.",
          "Os ouvidos percebem sons.",
          "Então ela usou a audição."
        ],
        "conclusion": "Cada parte do corpo tem uma função."
      },
      "desafio": {
        "context": "Pense nos sentidos.",
        "question": "Qual parte do corpo usamos para enxergar?",
        "options": [
          {
            "letter": "A",
            "text": "Olhos",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Orelhas",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Nariz",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Pés",
            "isCorrect": false
          }
        ],
        "explanation": "Usamos os olhos para enxergar pessoas, objetos, cores e formas."
      }
    }
  },
  "EF01CI03": {
    "id": "ef01ci03",
    "title": "Higiene que protege",
    "mission_question": "Por que lavar as mãos?",
    "subject": "Ciências",
    "area": "ciencias_natureza",
    "area_label": "Ciências da Natureza",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01CI03",
    "bncc_description": "Entender hábitos de higiene que ajudam a manter a saúde.",
    "xp": 110,
    "color": {
      "from": "from-emerald-500",
      "to": "to-teal-600",
      "accent": "green"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Entender hábitos de higiene que ajudam a manter a saúde."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "Higiene é cuidar do corpo. Lavar as mãos, escovar os dentes, tomar banho e limpar o nariz ajudam a tirar sujeiras e micróbios que podem fazer mal.",
        "pontos_destaque": [
          {
            "emoji": "🧼",
            "text": "Sabão ajuda a limpar."
          },
          {
            "emoji": "🦷",
            "text": "Escovar dentes protege a boca."
          },
          {
            "emoji": "💧",
            "text": "Água limpa ajuda a saúde."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🧼",
            "title": "Lavar mãos",
            "text": "Antes de comer e depois do banheiro."
          },
          {
            "icon": "🦷",
            "title": "Escovar dentes",
            "text": "Ajuda a evitar cáries."
          },
          {
            "icon": "🦠",
            "title": "Micróbios",
            "text": "São pequenos e podem causar doenças."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pip chegou do parque e lavou as mãos antes do lanche.",
        "scenario_emoji": "🧼",
        "analysis": [
          "Ele brincou e pegou em objetos.",
          "As mãos podiam ter sujeira.",
          "Lavar com água e sabão ajudou a proteger."
        ],
        "conclusion": "Higiene cuida da saúde."
      },
      "desafio": {
        "context": "Pense na saúde.",
        "question": "Por que devemos lavar as mãos antes de comer?",
        "options": [
          {
            "letter": "A",
            "text": "Para tirar sujeiras e micróbios",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Para a comida ficar colorida",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Para molhar a mesa",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Porque a mão some",
            "isCorrect": false
          }
        ],
        "explanation": "Lavar as mãos com água e sabão ajuda a tirar sujeiras e micróbios que podem causar doenças."
      }
    }
  },
  "EF01CI04": {
    "id": "ef01ci04",
    "title": "Somos diferentes",
    "mission_question": "Por que respeitar as diferenças?",
    "subject": "Ciências",
    "area": "ciencias_natureza",
    "area_label": "Ciências da Natureza",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01CI04",
    "bncc_description": "Perceber diferenças entre as pessoas e praticar respeito.",
    "xp": 110,
    "color": {
      "from": "from-emerald-500",
      "to": "to-teal-600",
      "accent": "green"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Perceber diferenças entre as pessoas e praticar respeito."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "As pessoas podem ter cabelo, pele, altura, voz, jeito de andar e preferências diferentes. Diferenças fazem parte da vida. Todos merecem respeito e cuidado.",
        "pontos_destaque": [
          {
            "emoji": "🌈",
            "text": "Cada pessoa é única."
          },
          {
            "emoji": "🤝",
            "text": "Respeito aproxima."
          },
          {
            "emoji": "💛",
            "text": "Ninguém é melhor por ser diferente."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🙂",
            "title": "Diferença",
            "text": "É algo que não é igual em todos."
          },
          {
            "icon": "🤝",
            "title": "Respeito",
            "text": "É tratar bem todas as pessoas."
          },
          {
            "icon": "🏫",
            "title": "Convivência",
            "text": "Na escola aprendemos juntos."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa viu dois colegas com cabelos diferentes. Ela tratou os dois com carinho.",
        "scenario_emoji": "🤝",
        "analysis": [
          "Ela percebeu a diferença.",
          "Entendeu que isso é normal.",
          "Respeitou os colegas."
        ],
        "conclusion": "Diferenças devem ser acolhidas."
      },
      "desafio": {
        "context": "Pense na convivência.",
        "question": "Se um colega é diferente de mim, eu devo:",
        "options": [
          {
            "letter": "A",
            "text": "Respeitar e tratar bem",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Rir dele",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Mandar ele mudar",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Não brincar nunca",
            "isCorrect": false
          }
        ],
        "explanation": "Todos somos diferentes em alguma coisa. O correto é respeitar e tratar as pessoas com cuidado."
      }
    }
  },
  "EF01CI05": {
    "id": "ef01ci05",
    "title": "Manhã, tarde e noite",
    "mission_question": "Em que período do dia estamos?",
    "subject": "Ciências",
    "area": "ciencias_natureza",
    "area_label": "Ciências da Natureza",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01CI05",
    "bncc_description": "Nomear períodos do dia e perceber a passagem do tempo.",
    "xp": 110,
    "color": {
      "from": "from-emerald-500",
      "to": "to-teal-600",
      "accent": "green"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Nomear períodos do dia e perceber a passagem do tempo."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "O dia pode ser dividido em manhã, tarde e noite. De manhã o dia começa. À tarde ainda há luz do sol. À noite escurece e muitas pessoas descansam.",
        "pontos_destaque": [
          {
            "emoji": "🌅",
            "text": "Manhã: começo do dia."
          },
          {
            "emoji": "☀️",
            "text": "Tarde: depois do almoço."
          },
          {
            "emoji": "🌙",
            "text": "Noite: fica escuro."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🌅",
            "title": "Manhã",
            "text": "Muitas pessoas acordam e vão para a escola."
          },
          {
            "icon": "☀️",
            "title": "Tarde",
            "text": "Pode ser hora de estudar ou brincar."
          },
          {
            "icon": "🌙",
            "title": "Noite",
            "text": "Costuma ser hora de descansar."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pip acordou quando o sol estava nascendo.",
        "scenario_emoji": "🌅",
        "analysis": [
          "O sol estava aparecendo.",
          "Era começo do dia.",
          "Esse período é manhã."
        ],
        "conclusion": "Manhã é um período do dia."
      },
      "desafio": {
        "context": "Pense nos períodos.",
        "question": "Quando está escuro e muitas pessoas vão dormir, é geralmente:",
        "options": [
          {
            "letter": "A",
            "text": "Noite",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Manhã",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Tarde",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Meio-dia",
            "isCorrect": false
          }
        ],
        "explanation": "À noite fica escuro e geralmente é o momento de dormir e descansar."
      }
    }
  },
  "EF01CI06": {
    "id": "ef01ci06",
    "title": "Dia, noite e rotina dos seres vivos",
    "mission_question": "O que fazemos de dia e de noite?",
    "subject": "Ciências",
    "area": "ciencias_natureza",
    "area_label": "Ciências da Natureza",
    "grade": "1º Ano",
    "grade_range": "1º Ano",
    "bncc_code": "EF01CI06",
    "bncc_description": "Perceber como dia e noite organizam atividades de pessoas e animais.",
    "xp": 110,
    "color": {
      "from": "from-emerald-500",
      "to": "to-teal-600",
      "accent": "green"
    },
    "screens": {
      "missao": {
        "intro": "Aula guiada do 1º ano",
        "objectives": [
          "Ouvir a explicação com calma",
          "Observar o exemplo com ajuda visual",
          "Responder uma pergunta da aula"
        ],
        "context_emoji": "✨",
        "context_text": "Perceber como dia e noite organizam atividades de pessoas e animais."
      },
      "exploracao": {
        "instruction": "Pip e Pipa vão explicar. Você pode ouvir antes de responder.",
        "texto": "A sucessão de dias e noites ajuda a organizar a rotina. Muitas pessoas estudam e brincam de dia. À noite descansam. Alguns animais são mais ativos à noite.",
        "pontos_destaque": [
          {
            "emoji": "🌞",
            "text": "De dia há mais luz."
          },
          {
            "emoji": "🌙",
            "text": "À noite fica escuro."
          },
          {
            "emoji": "🐾",
            "text": "Animais também têm rotinas."
          }
        ],
        "mascot_tip": "Se ainda não lê sozinho, toque no som e peça ajuda para acompanhar as palavras."
      },
      "pontos_chave": {
        "intro": "Guarde estas ideias:",
        "points": [
          {
            "icon": "🔁",
            "title": "Sucessão",
            "text": "Dia e noite se repetem."
          },
          {
            "icon": "🧍",
            "title": "Pessoas",
            "text": "Organizam estudo, brincadeira e sono."
          },
          {
            "icon": "🦉",
            "title": "Animais",
            "text": "Alguns preferem a noite."
          }
        ]
      },
      "exemplo_aplicado": {
        "title": "Exemplo com Pip e Pipa",
        "scenario": "Pipa percebeu que o gato dormiu de dia e ficou mais animado à noite.",
        "scenario_emoji": "🐱",
        "analysis": [
          "O dia estava claro.",
          "A noite chegou e ficou escuro.",
          "Alguns animais mudam de atividade."
        ],
        "conclusion": "Dia e noite ajudam a organizar a vida."
      },
      "desafio": {
        "context": "Pense na rotina.",
        "question": "O que muitas pessoas fazem durante a noite?",
        "options": [
          {
            "letter": "A",
            "text": "Dormir e descansar",
            "isCorrect": true
          },
          {
            "letter": "B",
            "text": "Tomar sol forte",
            "isCorrect": false
          },
          {
            "letter": "C",
            "text": "Ir para o recreio da manhã",
            "isCorrect": false
          },
          {
            "letter": "D",
            "text": "Almoçar na escola",
            "isCorrect": false
          }
        ],
        "explanation": "À noite, muitas pessoas descansam para ter energia no dia seguinte."
      }
    }
  }
};

const isFirstYear = (serie?: string | null) => (serie ?? "").includes("1º") || (serie ?? "").includes("1°");
const isMathOrScience = (disciplina?: string | null) => {
  const d = (disciplina ?? "").toLowerCase();
  return d.includes("matem") || d.includes("ciênc") || d.includes("cienc");
};

export function getFirstYearLessonOverride(args: {
  codigo_bncc?: string | null;
  serie?: string | null;
  disciplina?: string | null;
}) {
  if (!isFirstYear(args.serie) || !isMathOrScience(args.disciplina)) return null;
  return FIRST_YEAR_LESSON_OVERRIDES[args.codigo_bncc ?? ""] ?? null;
}

export function getFirstYearLessonTitle(args: {
  codigo_bncc?: string | null;
  serie?: string | null;
  disciplina?: string | null;
  titulo?: string | null;
}) {
  return getFirstYearLessonOverride(args)?.title ?? args.titulo ?? "Aula";
}
