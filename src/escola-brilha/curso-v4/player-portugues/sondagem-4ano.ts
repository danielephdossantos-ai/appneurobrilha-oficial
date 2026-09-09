/**
 * Sondagem Inicial — 4º Ano (Fase 7)
 * ------------------------------------------------------------------
 * 8 itens falados, calibrados para 9 anos. Parte do que o 3º ano já
 * consolidou (ortografia, sílaba tônica, fato/opinião) e sobe até
 * inferência mais fina, causa/consequência, acentuação de paroxítona,
 * concordância, tempos verbais e conectivos — o coração do 4º ano.
 * O resultado NÃO trava nada: apenas sugere a unidade de entrada na
 * expedição de A Redação dos Exploradores.
 */
import type { ItemSondagem, ResultadoSondagem } from "./sondagem-inicial";

export const ITENS_SONDAGEM_4ANO: ItemSondagem[] = [
  {
    id: "s1",
    fala: "Ouça: PEDRO ESQUECEU O GUARDA-CHUVA EM CASA E CHEGOU TODO MOLHADO NA ESCOLA. Qual é a ideia principal?",
    pergunta: "Qual é a IDEIA PRINCIPAL?",
    opcoes: [
      "Pedro esqueceu o guarda-chuva e se molhou",
      "Pedro gosta de chuva",
      "A escola fica longe de casa",
      "Pedro tem um guarda-chuva novo",
    ],
    correta: 0,
    habilidade: "Ideia principal do texto",
  },
  {
    id: "s2",
    fala: "Ouça: AS NUVENS ESCURECERAM, O VENTO FICOU FORTE E TODOS CORRERAM PARA DENTRO DE CASA. O que provavelmente vai acontecer?",
    pergunta: "O que provavelmente vai acontecer?",
    opcoes: ["Vai chover", "Vai fazer sol", "Vai nevar", "Nada vai mudar"],
    correta: 0,
    habilidade: "Inferência (informação implícita)",
  },
  {
    id: "s3",
    fala: "Ouça: O RIO TRANSBORDOU PORQUE CHOVEU MUITO A NOITE TODA. Qual é a CAUSA do transbordamento?",
    pergunta: "Qual é a CAUSA?",
    opcoes: [
      "Choveu muito a noite toda",
      "O rio transbordou",
      "A cidade ficou alagada",
      "As pessoas saíram de casa",
    ],
    correta: 0,
    habilidade: "Relação causa e consequência",
  },
  {
    id: "s4",
    fala: "Qual palavra é paroxítona e precisa de acento?",
    pergunta: "Qual está escrita CERTA, com acento?",
    opcoes: ["facil", "fácil", "fácíl", "facíl"],
    correta: 1,
    habilidade: "Acentuação de paroxítona",
  },
  {
    id: "s5",
    fala: "Qual frase está com a concordância certa entre o sujeito e o verbo?",
    pergunta: "Qual frase está CERTA?",
    opcoes: [
      "Os meninos brincou no pátio.",
      "Os meninos brincaram no pátio.",
      "Os menino brincaram no pátio.",
      "O meninos brincaram no pátio.",
    ],
    correta: 1,
    habilidade: "Concordância nominal e verbal",
  },
  {
    id: "s6",
    fala: "Qual frase está no tempo FUTURO?",
    pergunta: "Qual frase está no FUTURO?",
    opcoes: [
      "Eu viajei no verão passado.",
      "Eu viajo todo verão.",
      "Eu viajarei no próximo verão.",
      "Eu estava viajando.",
    ],
    correta: 2,
    habilidade: "Tempos verbais",
  },
  {
    id: "s7",
    fala: "Escolha o conectivo certo: Marina estudou muito, ___ tirou uma nota ótima na prova.",
    pergunta: "Qual conectivo completa melhor a frase?",
    opcoes: ["porém", "portanto", "embora", "ou"],
    correta: 1,
    habilidade: "Conectivos (coesão textual)",
  },
  {
    id: "s8",
    fala: "Qual destas frases é uma OPINIÃO com argumento, e não apenas um fato?",
    pergunta: "Qual frase é OPINIÃO com ARGUMENTO?",
    opcoes: [
      "A escola tem 300 alunos.",
      "Acho que devíamos reciclar mais, porque isso ajuda o planeta.",
      "A aula começa às 7 horas.",
      "O recreio dura 20 minutos.",
    ],
    correta: 1,
    habilidade: "Fato × opinião / argumento",
  },
];

export function avaliarSondagem4ano(respostas: number[]): Omit<ResultadoSondagem, "feitoEm"> {
  let acertos = 0;
  const erros: string[] = [];
  ITENS_SONDAGEM_4ANO.forEach((item, i) => {
    if (respostas[i] === item.correta) acertos += 1;
    else erros.push(item.habilidade);
  });

  const total = ITENS_SONDAGEM_4ANO.length;

  if (acertos <= 2) {
    return {
      acertos,
      total,
      unidadeSugerida: "unidade-1",
      tituloUnidade: "Unidade 1 — Mapa da Leitura",
      mensagem:
        "Vamos retomar o básico da leitura com calma: ideia principal e pistas do texto. Com essa base firme, a expedição fica mais fácil.",
      erros,
    };
  }
  if (acertos <= 4) {
    return {
      acertos,
      total,
      unidadeSugerida: "unidade-2",
      tituloUnidade: "Unidade 2 — Oficina da Palavra",
      mensagem:
        "Você já lê bem! Agora vamos treinar causa e consequência e acentuação para deixar o texto ainda mais claro.",
      erros,
    };
  }
  if (acertos <= 6) {
    return {
      acertos,
      total,
      unidadeSugerida: "unidade-4",
      tituloUnidade: "Unidade 4 — Território dos Textos",
      mensagem:
        "Sua leitura está sólida. O desafio agora é a gramática em uso: concordância, tempos verbais e conectivos que amarram o texto.",
      erros,
    };
  }
  return {
    acertos,
    total,
    unidadeSugerida: "unidade-6",
    tituloUnidade: "Unidade 6 — Vozes do Caminho",
    mensagem:
      "Uau! Você lê, interpreta e argumenta muito bem. Vamos direto para as redações mais desafiadoras da expedição.",
    erros,
  };
}
