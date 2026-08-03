import type { AulaPortugues } from "../../types";

export const aula01: AulaPortugues = {
  id: "lp8-u1-a1",
  numero: 1,
  titulo: "Protocolo de Persuasão: O Texto Argumentativo",
  cenas: [
    {
      tipo: "explicacao",
      titulo: "Iniciando Scan de Lógica",
      texto: "Bem-vindo ao Laboratório de Argumentação. \n\n🔊 \n\nNo 8º ano, a linguagem deixa de ser apenas informação e passa a ser **PODER**. Vamos aprender a transformar ideias em argumentos sólidos que ninguém pode derrubar.",
      emoji: "🧠",
    },
    {
      tipo: "explicacao",
      titulo: "O que é Argumentar?",
      texto: "Argumentar não é 'brigar' ou 'gritar'. É usar a lógica para provar um ponto de vista. \n\n🔊 \n\n> **MODELO DE ESTRUTURA:** \n> 1. **Tese:** Sua ideia central (O que você defende). \n> 2. **Argumentos:** As provas (Por que você está certo). \n> 3. **Conclusão:** O fechamento (O que deve ser feito).",
      emoji: "🏗️",
    },
    {
      tipo: "pratica",
      titulo: "Identificação de Tese",
      texto: "Analise esta frase de um debate sobre tecnologia: \n\n🔊 \n\n'O uso excessivo de redes sociais prejudica o sono dos adolescentes.' \n\n🤔 Esta frase representa:",
      opcoes: ["A tese principal", "Um argumento secundário", "Uma dúvida passageira"],
      respostaCorreta: 0,
      feedback: "Exato! A tese é a afirmação central que o autor vai tentar provar durante o texto.",
      emoji: "👁️",
    },
    {
      tipo: "explicacao",
      titulo: "Fatos vs. Argumentos",
      texto: "Um fato é uma verdade comprovada. Um argumento é a sua interpretação sobre esse fato. \n\n> **EXEMPLO:** \n> * **Fato:** Choveu hoje. \n> * **Argumento:** Como choveu, o trânsito ficará lento, então devemos sair mais cedo.",
      emoji: "⚖️",
    },
    {
      tipo: "desafio",
      titulo: "Construindo Lógica",
      texto: "Se a tese é: 'A escola deve ter mais aulas de robótica'. \n\n🔊 \n\nQual destes seria o melhor argumento para defendê-la?",
      opcoes: [
        "Porque robôs são legais e brilham.",
        "Porque a tecnologia é a base do mercado de trabalho futuro.",
        "Porque os alunos gostam de brincar.",
      ],
      respostaCorreta: 1,
      feedback: "Perfeito! Um argumento forte precisa de uma justificativa lógica e relevante para a sociedade ou para o futuro.",
      emoji: "🚀",
    },
  ],
};
