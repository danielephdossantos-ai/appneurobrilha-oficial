import { criarAulaBncc } from "../criar-aula-bncc";

export const aula01 = criarAulaBncc({
  slug: "aula-01-comunicacao-completa", titulo: "Do Planejamento à Apresentação", icone: "🗣️",
  bncc: ["EF15LP01", "EF15LP02", "EF15LP03", "EF15LP04", "EF15LP05", "EF15LP06", "EF15LP07", "EF15LP08", "EF15LP09", "EF15LP10", "EF15LP11", "EF15LP12", "EF15LP13", "EF35LP11"],
  genero: "comunicação escrita, oral e digital",
  explicacao: "Toda comunicação tem autor, público, finalidade e suporte. Antes de falar ou escrever, planejamos; depois produzimos, escutamos, revisamos, editamos e compartilhamos com clareza. Diferentes modos regionais e culturais de falar merecem respeito: variedade linguística não é defeito.",
  exemplo: "A turma prepara um convite digital para a feira: define famílias como público, informa data e local, revisa o texto e apresenta a ideia em voz clara, respeitando os turnos de fala.",
  partes: ["público e finalidade", "planejamento", "revisão e edição", "fala e escuta respeitosas"],
  pergunta: "O que deve acontecer antes de publicar o convite?", opcoes: ["Revisar informações e escrita", "Apagar a data", "Trocar o público", "Ignorar a finalidade"], correta: 0,
  producao: "Planeje um aviso para a turma, escreva, revise com alguém, edite a versão final e apresente oralmente; escute uma pergunta antes de responder.",
});

export const aula02 = criarAulaBncc({
  slug: "aula-02-historia-em-quadrinhos", titulo: "Imagens Também Contam", icone: "💬",
  bncc: ["EF15LP14", "EF15LP18", "EF35LP22", "EF35LP30"],
  genero: "história em quadrinhos e tirinha",
  explicacao: "Nos quadrinhos, palavras e imagens constroem juntas a história. Balões mostram tipos de fala e pensamento; letras, expressões e onomatopeias indicam volume, emoção e ação.",
  exemplo: "No primeiro quadro, Lia olha a janela. No segundo, um balão de pensamento diz ‘Será chuva?’. No terceiro, ‘CABRUM!’ em letras grandes mostra o trovão.",
  partes: ["quadros em sequência", "balões", "expressões", "onomatopeias"],
  pergunta: "O que ‘CABRUM!’ representa?", opcoes: ["O som do trovão", "Uma pergunta", "A fala sussurrada", "O nome da personagem"], correta: 0,
  producao: "Crie uma tirinha de três quadros com balão de fala ou pensamento e uma onomatopeia que ajude a compreender a ação.",
});

export const aula03 = criarAulaBncc({
  slug: "aula-03-poema-visual-e-reconto", titulo: "Literatura em Voz e Forma", icone: "📖",
  bncc: ["EF15LP15", "EF15LP16", "EF15LP17", "EF15LP18", "EF15LP19", "EF35LP21", "EF35LP27", "EF35LP28"],
  genero: "conto, poema visual e reconto oral",
  explicacao: "Textos literários criam mundos imaginários. No poema visual, o formato também produz sentido. Ao recontar, mantemos personagens, fatos principais e ordem, usando palavras próprias e entonação adequada.",
  exemplo: "Num poema sobre chuva, a palavra PINGO aparece descendo pela página. Em um conto, a criança reconta quem enfrentou o problema, o que aconteceu e como terminou.",
  partes: ["imaginação", "formato visual", "fatos principais", "reconto com entonação"],
  pergunta: "Por que PINGO desce pela página?", opcoes: ["Para o formato lembrar a queda da chuva", "Para esconder a palavra", "Para mudar a ortografia", "Para virar uma notícia"], correta: 0,
  producao: "Leia um conto curto, reconte-o em voz alta e crie um pequeno poema visual cujo formato combine com o tema.",
});

export const aula04 = criarAulaBncc({
  slug: "aula-04-carta-do-leitor-telejornal", titulo: "Opinião que Circula", icone: "📺",
  bncc: ["EF03LP18", "EF03LP20", "EF03LP22", "EF03LP23", "EF35LP15", "EF35LP16"],
  genero: "carta do leitor, reclamação e telejornal infantil",
  explicacao: "Cartas do leitor apresentam opinião ou reclamação a uma publicação. Precisam de assunto, posição, motivo e identificação. No telejornal, notícias e campanhas são organizadas em roteiro para apresentação oral ou digital.",
  exemplo: "À revista da escola: gostei da reportagem sobre a horta, mas faltou explicar como participar. Peço que publiquem os horários. Atenciosamente, Ana. No telejornal, a apresentadora lê a manchete e explica o fato.",
  partes: ["destinatário", "opinião e motivo", "pedido ou conclusão", "roteiro de telejornal"],
  pergunta: "Qual é o pedido de Ana?", opcoes: ["Publicar os horários", "Fechar a horta", "Apagar a reportagem", "Trocar o nome da escola"], correta: 0,
  producao: "Escreva uma carta do leitor com opinião e motivo; depois transforme o assunto em uma fala curta de telejornal, seguindo um roteiro.",
});

export const aula05 = criarAulaBncc({
  slug: "aula-05-texto-para-encenar", titulo: "Texto que Vira Cena", icone: "🎭",
  bncc: ["EF35LP24"],
  genero: "texto dramático",
  explicacao: "O texto dramático é escrito para ser encenado. O nome indica quem fala; os diálogos mostram as falas; as rubricas orientam voz, gesto, movimento e cenário sem serem faladas ao público.",
  exemplo: "LIA (olhando a janela): A chuva chegou! JOÃO (pega o guarda-chuva): Então vamos fechar a porta.",
  partes: ["personagens", "diálogos", "rubricas", "cena"],
  pergunta: "Qual trecho orienta a ação da personagem?", opcoes: ["(olhando a janela)", "A chuva chegou!", "LIA", "Então"], correta: 0,
  producao: "Escreva uma cena curta com duas personagens, quatro falas e duas rubricas; depois faça uma leitura dramatizada.",
});
