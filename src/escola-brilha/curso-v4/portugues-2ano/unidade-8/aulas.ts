import { criarAulaBncc } from "../criar-aula-bncc";

export const aula01 = criarAulaBncc({
  slug: "aula-01-relato-no-tempo", titulo: "Meu Relato em Ordem", icone: "🗓️",
  bncc: ["EF02LP14", "EF02LP16", "EF02LP17", "EF15LP05", "EF15LP06", "EF15LP13"],
  genero: "relato de experiência pessoal",
  explicacao: "Um relato conta algo vivido em ordem. Marcadores como ontem, primeiro, depois e por fim ajudam o leitor a acompanhar os fatos.",
  exemplo: "Ontem visitei a horta. Primeiro preparei a terra. Depois plantei uma semente. Por fim, reguei o vaso.",
  partes: ["quando", "fatos em ordem", "marcadores de tempo", "detalhes necessários"],
  pergunta: "O que aconteceu depois de preparar a terra?", opcoes: ["Plantou uma semente", "Visitou a praia", "Colheu uma árvore", "Guardou o vaso"], correta: 0,
  producao: "Conte uma experiência real em quatro frases, usando quando, primeiro, depois e por fim.",
});

export const aula02 = criarAulaBncc({
  slug: "aula-02-cantiga-poema-visual", titulo: "Ritmo, Rima e Forma", icone: "🎵",
  bncc: ["EF02LP12", "EF02LP15", "EF02LP29", "EF12LP05", "EF12LP07", "EF12LP18", "EF12LP19", "EF15LP17"],
  genero: "cantiga e poema visual",
  explicacao: "Cantigas combinam palavras, ritmo e melodia. Poemas visuais também usam o formato na página para criar sentido. Rimas e sons repetidos ajudam a produzir ritmo.",
  exemplo: "A palavra CHUVA desce pela página em linhas cada vez menores; LUA rima com RUA quando cantamos o verso.",
  partes: ["versos", "rimas", "ritmo e melodia", "formato visual"],
  pergunta: "Qual par produz rima no exemplo?", opcoes: ["LUA e RUA", "CHUVA e SOL", "PÁGINA e LINHA", "VERSO e SOM"], correta: 0,
  producao: "Crie uma quadrinha de quatro versos com uma rima e organize as palavras para formar uma imagem simples.",
});

export const aula03 = criarAulaBncc({
  slug: "aula-03-jornal-da-escola", titulo: "Jornal da Escola", icone: "📰",
  bncc: ["EF02LP19", "EF12LP08", "EF12LP11", "EF12LP14", "EF15LP01", "EF15LP03", "EF15LP09"],
  genero: "notícia curta e jornal falado",
  explicacao: "Uma notícia infantil informa um fato verificável. Manchete apresenta o assunto; lide responde o que aconteceu, com quem, onde e quando; fotolegenda explica a imagem.",
  exemplo: "HORTA NOVA NA ESCOLA — Na terça-feira, estudantes do 2º ano plantaram mudas no pátio. Foto: turma prepara a terra.",
  partes: ["manchete", "lide", "fato verificado", "fotolegenda"],
  pergunta: "Onde as mudas foram plantadas?", opcoes: ["No pátio", "Na biblioteca", "Na rua", "Na cozinha"], correta: 0,
  producao: "Escreva uma manchete, um lide e uma fotolegenda sobre um acontecimento da escola; depois apresente como jornal falado.",
});

export const aula04 = criarAulaBncc({
  slug: "aula-04-campanha-da-turma", titulo: "Campanha que Convence", icone: "📣",
  bncc: ["EF02LP18", "EF12LP09", "EF12LP10", "EF12LP12", "EF12LP13", "EF12LP15", "EF12LP16", "EF15LP04", "EF15LP08"],
  genero: "cartaz e campanha de conscientização",
  explicacao: "Uma campanha apresenta uma ideia importante ao público. Slogan curto, letras visíveis, imagem relacionada e convite à ação trabalham juntos para convencer.",
  exemplo: "CUIDE DOS LIVROS! Devolva cada livro no lugar. Cartaz para a biblioteca, com letras grandes e desenho de uma estante organizada.",
  partes: ["slogan", "convite à ação", "imagem", "público e local"],
  pergunta: "Qual é a ação pedida pelo cartaz?", opcoes: ["Devolver o livro no lugar", "Comprar um livro", "Fechar a biblioteca", "Desenhar uma árvore"], correta: 0,
  producao: "Planeje um cartaz de campanha para a escola e faça uma versão oral ou digital com slogan, imagem e ação clara.",
});

export const aula05 = criarAulaBncc({
  slug: "aula-05-pequena-pesquisa", titulo: "Pesquisa: Perguntar e Registrar", icone: "🔬",
  bncc: ["EF02LP20", "EF02LP21", "EF02LP22", "EF02LP23", "EF02LP24", "EF02LP25", "EF12LP17", "EF15LP10"],
  genero: "pequena pesquisa, entrevista e registro de observação",
  explicacao: "Pesquisar é fazer uma pergunta, consultar fonte adequada, coletar dados e apresentar o resultado. Entrevistas, enquetes, verbetes e registros têm formatos próprios.",
  exemplo: "Pergunta: qual fruta a turma prefere? Resultado: 8 escolheram banana e 5 escolheram maçã. Conclusão: banana recebeu mais escolhas.",
  partes: ["pergunta", "fonte ou coleta", "registro dos dados", "conclusão"],
  pergunta: "Qual fruta recebeu mais escolhas?", opcoes: ["Banana", "Maçã", "Laranja", "Uva"], correta: 0,
  producao: "Faça uma pergunta a três pessoas, registre as respostas, escreva uma conclusão e explique oralmente como obteve o resultado.",
});

export const aula06 = criarAulaBncc({
  slug: "aula-06-reconto-em-quadrinhos", titulo: "Reconto em Voz e Imagem", icone: "💬",
  bncc: ["EF02LP27", "EF15LP11", "EF15LP12", "EF15LP14", "EF15LP15", "EF15LP18", "EF15LP19"],
  genero: "reconto narrativo e história em quadrinhos",
  explicacao: "Recontar não é copiar: é manter personagens, conflito, sequência e solução com suas palavras. Na fala, tom, gestos e turnos ajudam; nos quadrinhos, imagens, balões e onomatopeias também contam.",
  exemplo: "Lia perdeu a chave, procurou em três lugares e a encontrou no bolso. Em quadrinhos, o balão ‘ACHEI!’ e as letras grandes mostram alegria.",
  partes: ["personagens", "problema", "sequência e solução", "voz, imagem e balões"],
  pergunta: "O que as letras grandes em ‘ACHEI!’ mostram?", opcoes: ["Alegria e voz forte", "Silêncio", "Uma pergunta", "Passagem de muitos anos"], correta: 0,
  producao: "Reconte uma narrativa curta em quatro quadros e apresente-a respeitando os turnos de fala, com voz clara e gestos adequados.",
});

export const aula07 = criarAulaBncc({
  slug: "aula-07-tamanhos-das-palavras", titulo: "Palavras de Tamanhos Diferentes", icone: "🔎",
  bncc: ["EF02LP11"],
  genero: "aumentativo e diminutivo",
  explicacao: "Os sufixos -ão, -inho e -zinho podem formar aumentativos e diminutivos. Eles indicam tamanho e, em alguns contextos, também carinho ou intensidade.",
  exemplo: "CASA pode formar CASINHA com -inha e CASARÃO com -ão. É preciso observar a palavra inteira e o sentido da frase.",
  partes: ["palavra-base", "sufixo", "aumentativo", "diminutivo"],
  pergunta: "Qual palavra é o aumentativo de CASA?", opcoes: ["CASARÃO", "CASINHA", "CASA", "CASEIRO"], correta: 0,
  producao: "Escolha quatro palavras e forme, quando possível, o aumentativo e o diminutivo com -ão, -inho ou -zinho; use duas delas em frases.",
});
