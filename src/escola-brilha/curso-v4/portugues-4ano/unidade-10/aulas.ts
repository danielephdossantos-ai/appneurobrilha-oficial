import { criarAulaBncc } from "../criar-aula-bncc";

export const aula01 = criarAulaBncc({
  slug: "aula-01-pontuacao-completa", titulo: "Pontuação que Organiza", icone: "✍️",
  bncc: ["EF04LP05"], genero: "pontuação em frases, enumerações e diálogos",
  explicacao: "A pontuação organiza o sentido: ponto encerra, interrogação pergunta, exclamação destaca; dois-pontos e travessão apresentam falas; a vírgula separa itens, vocativo e aposto.",
  exemplo: "Lia, traga três itens: caderno, lápis e régua. Pedro respondeu: — Já vou!",
  partes: ["pontos finais", "dois-pontos", "travessão", "vírgula"],
  pergunta: "Por que há vírgula depois de Lia?", opcoes: ["Para separar o vocativo", "Para terminar a frase", "Para indicar pergunta", "Para marcar uma palavra estrangeira"], correta: 0,
  producao: "Escreva um diálogo curto que use dois-pontos, travessão, vocativo e uma enumeração com vírgulas.",
});

export const aula02 = criarAulaBncc({
  slug: "aula-02-conta-de-consumo", titulo: "Lendo uma Conta", icone: "🧾",
  bncc: ["EF04LP09"], genero: "boleto, fatura e conta de consumo",
  explicacao: "Contas e faturas organizam informações em campos. Precisamos localizar consumidor, período, consumo, valor, vencimento e código de pagamento sem confundir esses dados.",
  exemplo: "Conta de água — período: maio; consumo: 8 m³; valor: R$ 42; vencimento: 10 de junho.",
  partes: ["período", "consumo", "valor", "vencimento"],
  pergunta: "Qual é a data de vencimento?", opcoes: ["10 de junho", "Maio", "8 m³", "R$ 42"], correta: 0,
  producao: "Com um adulto, observe uma conta sem registrar dados pessoais e monte uma tabela com tipo, período, consumo, valor e vencimento.",
});

export const aula03 = criarAulaBncc({
  slug: "aula-03-tutorial-de-jogo", titulo: "Tutorial que Funciona", icone: "🎮",
  bncc: ["EF04LP12", "EF04LP13"], genero: "tutorial e instrução de jogo",
  explicacao: "Um tutorial apresenta objetivo, materiais ou controles e passos em ordem, usando verbos de comando. Em áudio ou vídeo, fala e demonstração precisam coincidir.",
  exemplo: "Objetivo: levar a peça até a chegada. Controles: setas. 1. Escolha a peça. 2. Avance uma casa. 3. Pare no obstáculo.",
  partes: ["objetivo", "materiais ou controles", "passos numerados", "verbos de comando"],
  pergunta: "O que deve aparecer antes dos passos?", opcoes: ["Objetivo e controles", "Somente o resultado", "A opinião do jogador", "Uma notícia"], correta: 0,
  producao: "Crie um tutorial escrito de um jogo conhecido e apresente-o oralmente como se fosse um vídeo, mostrando cada passo na ordem.",
});

export const aula04 = criarAulaBncc({
  slug: "aula-04-jornal-e-entrevista", titulo: "Jornal no Ar", icone: "🎙️",
  bncc: ["EF04LP17", "EF04LP18"], genero: "jornal falado e entrevista",
  explicacao: "Jornais falados e entrevistas usam roteiro. Âncora e entrevistador ajustam entonação, expressão facial, postura e linguagem; perguntas claras ajudam a obter informações relevantes.",
  exemplo: "Âncora: ‘A feira ocorreu hoje na escola.’ Entrevistador: ‘Como a turma preparou os trabalhos?’ Entrevistada: ‘Pesquisamos e ensaiamos durante uma semana.’",
  partes: ["roteiro", "fato noticiado", "perguntas e respostas", "entonação e expressão"],
  pergunta: "Qual fala é uma pergunta de entrevista?", opcoes: ["Como a turma preparou os trabalhos?", "A feira ocorreu hoje.", "Pesquisamos durante uma semana.", "Jornal no ar."], correta: 0,
  producao: "Em dupla, escreva um roteiro com abertura, notícia, duas perguntas e encerramento; ensaie voz, postura e expressão antes de apresentar.",
});

export const aula05 = criarAulaBncc({
  slug: "aula-05-quadrinhos-em-cena", titulo: "Ler Quadrinhos por Inteiro", icone: "💬",
  bncc: ["EF15LP14"], genero: "história em quadrinhos e tirinha",
  explicacao: "Nos quadrinhos, sequência de imagens, falas e recursos gráficos constroem o sentido. Tipos de balão, tamanho das letras, expressões e onomatopeias mostram pensamento, volume, emoção e ação.",
  exemplo: "No primeiro quadro, Bia vê nuvens. No segundo, pensa ‘Vai chover?’. No terceiro, ‘CABRUM!’ em letras grandes acompanha o trovão.",
  partes: ["sequência de quadros", "balões", "expressões", "onomatopeias"],
  pergunta: "O que as letras grandes de CABRUM sugerem?", opcoes: ["Som forte", "Pensamento silencioso", "Passagem de tempo", "Nome da personagem"], correta: 0,
  producao: "Crie uma tirinha de três quadros em que imagem, balão e onomatopeia sejam necessários para compreender a história.",
});
