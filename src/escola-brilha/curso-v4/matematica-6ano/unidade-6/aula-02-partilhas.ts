import type { AulaV4 } from "../../types";

export const aula02_partilhas: AulaV4 = {
  slug: "u6-02-partilhas-desiguais", titulo: "Partilhas desiguais", iconeTrilha: "🧺",
  bncc: ["EF06MA15"], duracaoMin: 24, metodologias: ["cpa", "skemp"],
  momento01_motivacao: { titulo: "Dividir sem formar partes iguais", historia: "{NOME}, algumas quantidades são repartidas em partes diferentes: uma parte pode ter 5 a mais que outra ou valer o dobro. O segredo é representar a relação antes de calcular." },
  momento02_exploracao: { instrucao: "Represente cada parte por blocos.", cenas: [
    { tipo: "texto", texto: "Partilhar 36 na razão 1:2 significa formar 1 + 2 = 3 blocos iguais; não significa dividir 36 por 2.", destaque: true },
    { tipo: "tabela", titulo: "36 na razão 1:2", cabecalhos: ["Parte", "Blocos", "Valor"], linhas: [{ rotulo: "A", valores: ["1 bloco", "12"] }, { rotulo: "B", valores: ["2 blocos", "24"] }] },
  ] },
  momento03_descoberta: { perguntaGuia: "Como dividir 45 em duas partes, sendo uma o dobro da outra?", pista: "Use 1 bloco para a menor e 2 para a maior.", revelacao: "São 3 blocos: 45 ÷ 3 = 15. As partes são 15 e 30." },
  momento04_explicacao: { titulo: "Duas relações diferentes", etapas: [
    { texto: "Relação multiplicativa: uma parte é múltipla da outra.", exemploReal: { contexto: "Total 60; uma parte é o triplo da outra.", destaque: "1 + 3 = 4 blocos; 60 ÷ 4 = 15; partes 15 e 45." } },
    { texto: "Relação aditiva: uma parte tem certa quantidade a mais.", exemploReal: { contexto: "Total 50; a maior tem 10 a mais.", destaque: "Retire a diferença: 50 − 10 = 40; divida igualmente: 20; partes 20 e 30." } },
    { texto: "Confira sempre somando as partes e verificando a relação.", exemploReal: { contexto: "20 + 30 = 50 e 30 = 20 + 10.", destaque: "As duas condições precisam ser verdadeiras." } },
  ] },
  momento05_modelagem: { enunciado: "Divida 72 na razão 1:3.", resposta: "18 e 54", passos: ["Some os blocos: 1 + 3 = 4.", "Cada bloco vale 72 ÷ 4 = 18.", "Partes: 18 e 3 × 18 = 54.", "Confira: 18 + 54 = 72."] },
  momento06_praticaGuiada: { enunciado: "Divida 48 na razão 1:2.", dica: "São três blocos ao todo.", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "16 e 32" }, { nome: "24 e 24" }, { nome: "12 e 36" }, { nome: "8 e 40" }], respostaCerta: "16 e 32", feedbackAcerto: "🎯 48 ÷ 3 = 16; a maior vale 32.", feedbackErro: "A razão 1:2 forma três blocos iguais." } },
  momento07_praticaIndependente: { enunciado: "Duas partes somam 70 e a maior tem 10 a mais. Quais são?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "30 e 40" }, { nome: "35 e 35" }, { nome: "20 e 50" }, { nome: "10 e 60" }], respostaCerta: "30 e 40", feedbackAcerto: "🎯 70 − 10 = 60; 60 ÷ 2 = 30.", feedbackErro: "Retire a diferença antes de formar duas partes iguais." } },
  momento08_aplicacao: { contexto: "Uma biblioteca recebeu 90 marcadores para duas turmas. A turma B receberá o dobro da turma A.", problema: "Quantos marcadores cada turma receberá?", interacao: { tipo: "escolhaVisual", pergunta: "Escolha:", opcoes: [{ nome: "30 e 60" }, { nome: "45 e 45" }, { nome: "20 e 70" }, { nome: "15 e 75" }], respostaCerta: "30 e 60", feedbackAcerto: "🎯 Três blocos de 30.", feedbackErro: "A menor vale um bloco e a maior vale dois." } },
  momento09_revisao: { pontos: ["Identifique se a relação é aditiva ou multiplicativa.", "Na razão, some os blocos antes de dividir.", "Na diferença, retire o excesso antes de repartir.", "Confira total e relação."] },
  momento10_avaliacao: { perguntas: [
    { pergunta: "60 na razão 2:3:", opcoes: ["24 e 36", "20 e 40", "30 e 30", "12 e 48"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "São 5 blocos de 12." },
    { pergunta: "Total 44; maior tem 8 a mais:", opcoes: ["18 e 26", "22 e 22", "16 e 28", "8 e 36"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "44 − 8 = 36; metade é 18." },
    { pergunta: "Partes 14 e 42 estão na razão:", opcoes: ["1:3", "1:2", "2:3", "3:4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "42 = 3 × 14." },
  ] },
  momento11_missaoFamilia: { titulo: "Partilhas com blocos", materiais: ["Papel e lápis"], passos: ["Crie uma partilha multiplicativa.", "Desenhe os blocos que representam cada parte.", "Calcule e confira o total e a relação."], registro: "📸 Foto da representação." },
  recompensa: { xp: 180, moedas: 95 },
};
