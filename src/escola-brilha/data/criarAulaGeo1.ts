import type { Aula } from "../types";

type Config = { codigo: string; titulo: string; tema: string; explicacao: string; exemplo: string; questoes: Array<{ pergunta: string; opcoes: [string, string, string, string]; correta: number; explicacao: string }>; missao: string; proxima?: string };

export function criarAulaGeo1(c: Config): Aula {
  return {
    codigo: c.codigo, ano: "1º Ano", disciplina: "Geografia", titulo: c.titulo,
    narrativa: { titulo: `Missão: ${c.titulo}`, contexto: `Brilha observa ${c.tema} no lugar onde vive.`, problema: "Para completar o mapa, ele precisa comparar pistas e explicar o que percebeu.", convite: "Vamos observar, comparar e contar o que descobrimos?" },
    missao: c.missao,
    objetivos: [`Reconhecer ${c.tema}.`, "Comparar exemplos do cotidiano.", "Explicar uma descoberta com palavras ou desenho."],
    explicacao: c.explicacao,
    explicacoesNiveis: { nivel1: c.explicacao, nivel2: c.exemplo, nivel3: `Observe duas situações de ${c.tema} e diga o que muda.`, nivel4: `Use o que aprendeu para investigar ${c.tema} perto de você.` },
    exemploResolvido: { enunciado: `Como investigar ${c.tema}?`, passos: ["Observar com atenção.", "Comparar duas situações.", "Contar uma semelhança e uma diferença."], resposta: c.exemplo },
    atividadeGuiada: { enunciado: c.questoes[0].pergunta, resposta: c.questoes[0].opcoes[c.questoes[0].correta], explicacao: c.questoes[0].explicacao },
    exercicios: c.questoes.slice(1, 3).map(q => ({ enunciado: q.pergunta, resposta: q.opcoes[q.correta], dica: q.explicacao })),
    desafio: { enunciado: c.missao, resposta: "Resposta pessoal baseada em observação e comparação." },
    quiz: c.questoes.map(q => ({ ...q })),
    revisao: { pontos: [c.tema, "Observar", "Comparar", "Explicar"], dica: "Olhe as pistas antes de responder." },
    conclusao: `Você investigou ${c.tema} como um geógrafo mirim!`,
    curiosidade: { texto: "Geógrafos estudam lugares comparando paisagens, pessoas, atividades e mudanças." },
    proximaHabilidade: c.proxima ? { codigo: c.proxima } : undefined,
  };
}
