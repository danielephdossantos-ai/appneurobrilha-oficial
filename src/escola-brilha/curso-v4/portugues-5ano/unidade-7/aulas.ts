import { criarAulaBncc } from "../criar-aula-bncc";

export const aula01 = criarAulaBncc({
  slug: "aula-01-pontuacao-e-efeitos", titulo: "Pontuação e Efeitos de Sentido", icone: "✍️",
  bncc: ["EF05LP04"], genero: "pontuação expressiva",
  explicacao: "Vírgula, ponto e vírgula e dois-pontos organizam partes do texto. Reticências, aspas e parênteses também criam efeitos: suspensão, destaque de fala ou palavra e informação explicativa.",
  exemplo: "A equipe levou três itens: mapa, lanterna e água. O guia avisou: ‘Esperem... há outra trilha (mais curta) ao lado.’",
  partes: ["vírgula", "dois-pontos", "reticências", "aspas e parênteses"],
  pergunta: "O que as reticências sugerem no exemplo?", opcoes: ["Suspensão antes da informação", "Fim definitivo", "Uma lista", "Uma pergunta direta"], correta: 0,
  producao: "Escreva um parágrafo usando dois-pontos, vírgula, reticências, aspas e parênteses; depois explique o efeito de cada sinal.",
});

export const aula02 = criarAulaBncc({
  slug: "aula-02-palavra-no-dicionario", titulo: "Uma Palavra, Vários Sentidos", icone: "📘",
  bncc: ["EF05LP02", "EF05LP22"], genero: "verbete de dicionário e polissemia",
  explicacao: "Uma palavra pode ter sentidos diferentes conforme o contexto. O verbete ajuda com entrada, classe gramatical, abreviaturas e definições; a frase indica qual significado é adequado.",
  exemplo: "MANGA: s.f. 1. fruto da mangueira; 2. parte da roupa que cobre o braço. Em ‘a manga da camisa rasgou’, vale o sentido 2.",
  partes: ["entrada", "abreviatura", "definições", "contexto"],
  pergunta: "Qual sentido vale em ‘a manga da camisa’?", opcoes: ["Parte da roupa", "Fruto", "Árvore", "Cor"], correta: 0,
  producao: "Escolha uma palavra com mais de um sentido, consulte um dicionário e escreva duas frases que deixem cada sentido claro.",
});

export const aula03 = criarAulaBncc({
  slug: "aula-03-regras-e-humor", titulo: "Regras Claras e Humor Bem Construído", icone: "🎲",
  bncc: ["EF05LP09", "EF05LP10", "EF05LP11", "EF05LP12"], genero: "regra de jogo, piada e cartum",
  explicacao: "Regras de jogo apresentam objetivo, participantes, materiais e ações em ordem. Piadas e cartuns criam humor por surpresa, contraste ou duplo sentido e precisam ser compreendidos no contexto.",
  exemplo: "Jogo: cada pessoa tira uma carta; vence quem formar primeiro uma palavra. Cartum: o livro diz ao marcador ‘você vive me seguindo!’ — o humor vem da personificação.",
  partes: ["objetivo e materiais", "passos", "surpresa", "duplo sentido"],
  pergunta: "De onde vem o humor do marcador?", opcoes: ["O livro fala como pessoa", "A regra está incompleta", "Não existe diálogo", "O jogo terminou"], correta: 0,
  producao: "Escreva regras completas para um jogo simples e produza uma piada ou cartum respeitoso baseado em surpresa ou duplo sentido.",
});

export const aula04 = criarAulaBncc({
  slug: "aula-04-resenha-em-video", titulo: "Resenha em Vídeo", icone: "🎥",
  bncc: ["EF05LP13", "EF05LP18", "EF05LP20", "EF05LP21"], genero: "vlog de resenha e argumentação",
  explicacao: "Uma resenha em vídeo apresenta a obra, avalia aspectos concretos e recomenda ou não com argumentos. Roteiro, voz, expressão facial, postura, imagens e edição precisam apoiar a opinião sem exageros.",
  exemplo: "‘O livro tem capítulos curtos e ilustrações úteis. Recomendo para quem gosta de mistério porque as pistas permitem investigar junto.’",
  partes: ["apresentação", "avaliação", "argumentos", "voz, expressão e edição"],
  pergunta: "Qual trecho funciona como argumento?", opcoes: ["As pistas permitem investigar junto", "Eu recomendo", "O livro existe", "Fim do vídeo"], correta: 0,
  producao: "Crie um roteiro de resenha de um livro infantil, grave ou apresente a versão oral e revise se cada opinião tem um motivo verificável.",
});

export const aula05 = criarAulaBncc({
  slug: "aula-05-reportagem-com-dados", titulo: "Pesquisa que Vira Reportagem", icone: "📊",
  bncc: ["EF05LP17", "EF05LP23", "EF05LP24", "EF35LP17"], genero: "pesquisa e reportagem digital",
  explicacao: "Uma pesquisa começa com pergunta e fontes confiáveis. Tabelas e gráficos organizam dados; a reportagem digital usa roteiro para combinar texto, imagem, áudio ou vídeo sem distorcer os resultados.",
  exemplo: "Pesquisa com 20 estudantes: 12 preferem leitura, 5 desenho e 3 música. O gráfico deve mostrar leitura como maior grupo e o texto precisa informar o total pesquisado.",
  partes: ["pergunta e fontes", "dados", "gráfico ou tabela", "roteiro multimídia"],
  pergunta: "Qual grupo é o maior?", opcoes: ["Leitura", "Desenho", "Música", "Todos são iguais"], correta: 0,
  producao: "Faça uma pequena pesquisa, organize os resultados em tabela ou gráfico e escreva um roteiro de reportagem digital que apresente os dados com clareza.",
});

export const aula06 = criarAulaBncc({
  slug: "aula-06-quadrinhos-e-recursos", titulo: "Quadrinhos: Palavra Mais Imagem", icone: "💬",
  bncc: ["EF15LP14"], genero: "história em quadrinhos e tirinha",
  explicacao: "Nos quadrinhos, imagens, sequência, tipos de balões, tamanho das letras, expressões e onomatopeias trabalham juntos. Interpretar só as palavras deixa parte do sentido de fora.",
  exemplo: "No quadro final, o balão tremido e pequeno diz ‘acho que ouvi algo...’, enquanto a personagem olha assustada para a porta.",
  partes: ["sequência", "balões", "letras", "expressões e onomatopeias"],
  pergunta: "O que o balão tremido ajuda a mostrar?", opcoes: ["Medo ou insegurança", "Certeza e voz firme", "Mudança de lugar", "Fim da história"], correta: 0,
  producao: "Crie uma tirinha de três quadros em que o tipo de balão e a expressão da personagem sejam necessários para entender a emoção.",
});
