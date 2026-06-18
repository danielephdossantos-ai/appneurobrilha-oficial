import imgFeliz from "@/assets/brilha-vida/emocoes/feliz.png";
import imgTriste from "@/assets/brilha-vida/emocoes/triste.png";
import imgBravo from "@/assets/brilha-vida/emocoes/bravo.png";
import imgConfuso from "@/assets/brilha-vida/emocoes/confuso.png";

// ============ HISTÓRIAS SOCIAIS (30) ============
export type HistoriaOpcao = { texto: string; certo: boolean; feedback: string };
export type Historia = { titulo: string; cena: string; img: string; opcoes: HistoriaOpcao[] };

const FB_OK = "Que atitude bonita! Isso fortalece amizades. 💛";
const FB_RUIM = "Hmm, isso magoa. Vamos pensar em algo mais gentil.";
const FB_MEIO = "Quase! Pense em como o outro se sente.";

export const HISTORIAS: Historia[] = [
  { titulo: "O lápis emprestado", cena: "Lucas esqueceu o estojo e pede seu lápis emprestado. Você tem dois iguais.", img: imgConfuso,
    opcoes: [
      { texto: "Empresto e digo que devolva no fim da aula.", certo: true, feedback: "Ajudar amigos com gentileza fortalece a amizade. 💛" },
      { texto: "Digo que não tenho e guardo na mochila.", certo: false, feedback: "Lucas ficaria triste. Quando podemos ajudar, vale a pena." },
      { texto: "Empresto, mas fico bravo sem dizer.", certo: false, feedback: "Se algo incomoda, é melhor falar com calma." },
    ]},
  { titulo: "A nova colega", cena: "Chegou uma aluna nova e ninguém quer brincar com ela no recreio.", img: imgTriste,
    opcoes: [
      { texto: "Convido para brincar comigo e meus amigos.", certo: true, feedback: "Acolher quem está sozinho é um superpoder! ✨" },
      { texto: "Olho de longe e continuo brincando.", certo: false, feedback: "Imagine como ela se sente. Um 'oi' já ajuda muito." },
      { texto: "Rio com os colegas porque ela está sozinha.", certo: false, feedback: "Isso magoa. Trate o outro como gosta de ser tratado." },
    ]},
  { titulo: "O brinquedo quebrado", cena: "Sem querer, você quebrou o carrinho do seu primo.", img: imgConfuso,
    opcoes: [
      { texto: "Conto a verdade e peço desculpa.", certo: true, feedback: "Ser honesto e pedir desculpa mostra coragem de verdade." },
      { texto: "Escondo o carrinho atrás do sofá.", certo: false, feedback: "Esconder só piora. A verdade sempre aparece." },
      { texto: "Falo que foi o cachorro.", certo: false, feedback: "Mentir machuca a confiança de quem te ama." },
    ]},
  { titulo: "A vez do amigo", cena: "Você joga há muito tempo e seu irmão também quer jogar.", img: imgFeliz,
    opcoes: [
      { texto: "Termino essa fase e passo o controle.", certo: true, feedback: "Dividir o tempo é uma forma de cuidado. 🎮" },
      { texto: "Falo 'mais cinco minutinhos' e jogo o dia todo.", certo: false, feedback: "Combinar e cumprir é importante para a confiança." },
      { texto: "Grito que é meu e não solto.", certo: false, feedback: "Gritar afasta. Conversar aproxima." },
    ]},
  { titulo: "Fila do parquinho", cena: "Tem uma fila no escorregador e você quer ir primeiro.", img: imgConfuso,
    opcoes: [
      { texto: "Espero minha vez na fila.", certo: true, feedback: "Respeitar a fila é cuidar de todos." },
      { texto: "Furo a fila correndo.", certo: false, feedback: "Furar fila deixa os outros bravos com razão." },
      { texto: "Empurro quem está na frente.", certo: false, feedback: "Empurrar machuca. Esperar é a saída." },
    ]},
  { titulo: "Lanche da escola", cena: "Um colega esqueceu o lanche e está com fome.", img: imgTriste,
    opcoes: [
      { texto: "Divido o meu lanche com ele.", certo: true, feedback: "Dividir comida é dividir carinho. 🍎" },
      { texto: "Como bem rápido pra ele não pedir.", certo: false, feedback: "Esconder do amigo dói. Dividir une." },
      { texto: "Falo que o lanche dele é feio.", certo: false, feedback: "Zombar magoa demais." },
    ]},
  { titulo: "Erro do colega", cena: "Um colega errou a resposta e a turma riu.", img: imgTriste,
    opcoes: [
      { texto: "Falo: 'Tudo bem errar, todo mundo aprende.'", certo: true, feedback: "Acolher errar dá coragem pra tentar de novo." },
      { texto: "Rio junto pra fazer parte.", certo: false, feedback: "Rir do erro do outro fere quem já está mal." },
      { texto: "Conto a história depois pra zoar.", certo: false, feedback: "Zoeira que machuca é bullying. Não vale." },
    ]},
  { titulo: "Avó cansada", cena: "Sua avó está carregando muitas sacolas.", img: imgFeliz,
    opcoes: [
      { texto: "Ofereço ajuda e pego algumas sacolas.", certo: true, feedback: "Pequenos gestos cuidam de quem amamos." },
      { texto: "Finjo que não vi.", certo: false, feedback: "Ela ficaria feliz só com seu olhar atento." },
      { texto: "Reclamo que ela está devagar.", certo: false, feedback: "Reclamar magoa. Ajudar conforta." },
    ]},
  { titulo: "Tarefa em grupo", cena: "Ninguém quer fazer a parte chata do trabalho em grupo.", img: imgConfuso,
    opcoes: [
      { texto: "Combino com o grupo de revezar.", certo: true, feedback: "Combinar deixa tudo justo." },
      { texto: "Faço só a parte fácil e fujo.", certo: false, feedback: "Trabalho em grupo é de todos, não só dos outros." },
      { texto: "Mando os outros fazerem.", certo: false, feedback: "Mandar sem ajudar quebra a confiança." },
    ]},
  { titulo: "Cachorro novo", cena: "O cachorro novo da família está com medo no canto.", img: imgTriste,
    opcoes: [
      { texto: "Sento longe, falo baixinho e espero ele vir.", certo: true, feedback: "Respeitar o tempo do outro é cuidar." },
      { texto: "Pego ele no colo à força.", certo: false, feedback: "Forçar assusta mais ainda." },
      { texto: "Faço barulho pra ele 'acordar'.", certo: false, feedback: "Barulho aumenta o medo." },
    ]},
  { titulo: "Aniversário do amigo", cena: "Seu amigo está fazendo aniversário e ficou triste com o bolo.", img: imgTriste,
    opcoes: [
      { texto: "Falo que o bolo ficou lindo e canto parabéns alto.", certo: true, feedback: "Animar o amigo no dia dele é puro carinho." },
      { texto: "Reclamo que queria outro sabor.", certo: false, feedback: "Reclamar no dia do outro magoa muito." },
      { texto: "Saio da festa.", certo: false, feedback: "Sair sem motivo entristece quem te chamou." },
    ]},
  { titulo: "Sapato sujo", cena: "Você entrou em casa e sujou o chão limpo.", img: imgConfuso,
    opcoes: [
      { texto: "Limpo o que sujei e peço desculpas.", certo: true, feedback: "Cuidar do que fez é responsabilidade." },
      { texto: "Faço de conta que não foi eu.", certo: false, feedback: "Negar não some com a sujeira." },
      { texto: "Culpo o cachorro.", certo: false, feedback: "Culpar outros injustamente é feio." },
    ]},
  { titulo: "Brincadeira pesada", cena: "Os amigos estão chamando alguém de apelido feio.", img: imgBravo,
    opcoes: [
      { texto: "Falo que não tá legal e peço pra parar.", certo: true, feedback: "Defender quem sofre é ato de coragem." },
      { texto: "Fico quieto pra não brigar com eles.", certo: false, feedback: "Quem cala diante da injustiça também magoa." },
      { texto: "Invento outro apelido pior.", certo: false, feedback: "Piorar nunca resolve." },
    ]},
  { titulo: "Sala bagunçada", cena: "Você terminou de brincar e a sala está cheia de brinquedos.", img: imgConfuso,
    opcoes: [
      { texto: "Guardo tudo antes de fazer outra coisa.", certo: true, feedback: "Cuidar dos espaços comuns é gentileza." },
      { texto: "Deixo pra mãe arrumar.", certo: false, feedback: "Cada um cuida do que usou." },
      { texto: "Empurro tudo pro canto.", certo: false, feedback: "Esconder bagunça não é arrumar." },
    ]},
  { titulo: "Coleguinha tímido", cena: "Um colega tímido nunca fala nas atividades de grupo.", img: imgTriste,
    opcoes: [
      { texto: "Pergunto o que ele acha, com voz calma.", certo: true, feedback: "Abrir espaço para o outro é abraço em palavras." },
      { texto: "Ignoro e decido sozinho.", certo: false, feedback: "Decidir por ele tira a voz dele." },
      { texto: "Falo que ele não fala porque é bobo.", certo: false, feedback: "Rotular fere muito." },
    ]},
  { titulo: "Brinquedo do mercado", cena: "Você queria muito um brinquedo no mercado, mas hoje não pode.", img: imgBravo,
    opcoes: [
      { texto: "Respiro fundo e digo: 'tudo bem, fica pra outro dia'.", certo: true, feedback: "Saber esperar é um superpoder." },
      { texto: "Faço birra no chão.", certo: false, feedback: "Birra cansa todo mundo e não compra nada." },
      { texto: "Escondo o brinquedo no carrinho.", certo: false, feedback: "Pegar sem pagar é errado." },
    ]},
  { titulo: "Segredo de amigo", cena: "Um amigo te contou um segredo importante.", img: imgConfuso,
    opcoes: [
      { texto: "Guardo o segredo com cuidado.", certo: true, feedback: "Confiança é tesouro." },
      { texto: "Conto pra turma pra ser popular.", certo: false, feedback: "Quebrar confiança machuca pra valer." },
      { texto: "Conto só pra uma pessoa.", certo: false, feedback: "Uma vira muitas. Segredo é segredo." },
    ]},
  { titulo: "Vencer o jogo", cena: "Você venceu o jogo e os colegas perderam.", img: imgFeliz,
    opcoes: [
      { texto: "Comemoro com alegria, sem zoar quem perdeu.", certo: true, feedback: "Vitória bonita é a humilde." },
      { texto: "Fico falando que sou o melhor o tempo todo.", certo: false, feedback: "Vangloriar afasta amigos." },
      { texto: "Rio de quem perdeu.", certo: false, feedback: "Perder já é difícil, rir piora." },
    ]},
  { titulo: "Tarefa difícil", cena: "Uma tarefa da escola está difícil demais.", img: imgConfuso,
    opcoes: [
      { texto: "Peço ajuda à professora.", certo: true, feedback: "Pedir ajuda é inteligente." },
      { texto: "Copio do colega.", certo: false, feedback: "Copiar não ensina." },
      { texto: "Rasgo a folha de raiva.", certo: false, feedback: "A raiva passa; a tarefa fica." },
    ]},
  { titulo: "Música alta", cena: "Você quer ouvir música, mas alguém está dormindo perto.", img: imgConfuso,
    opcoes: [
      { texto: "Coloco fone de ouvido.", certo: true, feedback: "Pensar nos outros faz da casa um lar." },
      { texto: "Aumento o volume.", certo: false, feedback: "Acordar quem dorme não é gentil." },
      { texto: "Ponho alto e fecho a porta.", certo: false, feedback: "Ainda incomoda. Fone resolve." },
    ]},
  { titulo: "Verdade difícil", cena: "Você quebrou o vaso novo da mamãe.", img: imgConfuso,
    opcoes: [
      { texto: "Conto na hora, com desculpas.", certo: true, feedback: "Coragem de contar fortalece confiança." },
      { texto: "Junto os cacos e jogo fora.", certo: false, feedback: "Esconder vira mentira." },
      { texto: "Falo que o gato derrubou.", certo: false, feedback: "Culpar bicho não some com a verdade." },
    ]},
  { titulo: "Empurrão sem querer", cena: "Você empurrou alguém sem querer na correria.", img: imgConfuso,
    opcoes: [
      { texto: "Paro, peço desculpa e vejo se ele tá bem.", certo: true, feedback: "Reparar o erro mostra carinho." },
      { texto: "Continuo correndo.", certo: false, feedback: "Quem cuida, para." },
      { texto: "Rio e digo 'foi mal'.", certo: false, feedback: "Rir do tropeço do outro não cabe." },
    ]},
  { titulo: "Gosto diferente", cena: "Sua amiga adora uma música que você acha chata.", img: imgFeliz,
    opcoes: [
      { texto: "Respeito o gosto dela e converso normal.", certo: true, feedback: "Cada um tem seus gostos. Respeito une." },
      { texto: "Falo que o gosto dela é horrível.", certo: false, feedback: "Atacar gosto fere a pessoa." },
      { texto: "Tampo os ouvidos quando ela canta.", certo: false, feedback: "Isso é falta de respeito." },
    ]},
  { titulo: "Trabalho do colega", cena: "Um colega caprichou no trabalho e mostrou pra você.", img: imgFeliz,
    opcoes: [
      { texto: "Elogio o que ele fez bem feito.", certo: true, feedback: "Elogio sincero alimenta a confiança." },
      { texto: "Falo que o meu vai ser melhor.", certo: false, feedback: "Não era hora de competir." },
      { texto: "Não comento nada.", certo: false, feedback: "Indiferença também magoa." },
    ]},
  { titulo: "Esperar o irmão", cena: "Você quer sair, mas seu irmão menor ainda não está pronto.", img: imgConfuso,
    opcoes: [
      { texto: "Ajudo ele a se aprontar mais rápido.", certo: true, feedback: "Ajudar acelera e une." },
      { texto: "Fico bufando e batendo o pé.", certo: false, feedback: "Reclamar atrasa todo mundo." },
      { texto: "Saio sozinho sem avisar.", certo: false, feedback: "Sair escondido preocupa os adultos." },
    ]},
  { titulo: "Comida diferente", cena: "Na casa de um amigo serviram um prato que você nunca viu.", img: imgConfuso,
    opcoes: [
      { texto: "Provo com educação e agradeço.", certo: true, feedback: "Tentar e agradecer é gentileza." },
      { texto: "Falo 'eca' alto.", certo: false, feedback: "'Eca' magoa quem fez com carinho." },
      { texto: "Empurro o prato pra longe.", certo: false, feedback: "Falta de respeito com a comida." },
    ]},
  { titulo: "Choro do bebê", cena: "O bebê da família está chorando e a mãe está ocupada.", img: imgTriste,
    opcoes: [
      { texto: "Fico perto, falo baixinho ou peço ajuda.", certo: true, feedback: "Cuidar dos pequenos é cuidar do amor." },
      { texto: "Grito 'mãe, vem rápido!' várias vezes.", certo: false, feedback: "Gritos assustam ainda mais o bebê." },
      { texto: "Tampo os ouvidos.", certo: false, feedback: "Ignorar não acalma ninguém." },
    ]},
  { titulo: "Brincar na chuva", cena: "Você quer pular nas poças, mas seu colega tem medo.", img: imgConfuso,
    opcoes: [
      { texto: "Respeito o medo dele e brinco de outra coisa.", certo: true, feedback: "Amizade respeita medos." },
      { texto: "Forço ele a pular junto.", certo: false, feedback: "Forçar quebra a confiança." },
      { texto: "Zombo dele de medroso.", certo: false, feedback: "Zombar do medo é cruel." },
    ]},
  { titulo: "Tablet compartilhado", cena: "Você e seu primo estão usando o mesmo tablet.", img: imgConfuso,
    opcoes: [
      { texto: "Combinamos um tempo justo pra cada um.", certo: true, feedback: "Combinar resolve quase tudo." },
      { texto: "Fico até cansar e depois passo.", certo: false, feedback: "Isso não é justo com o outro." },
      { texto: "Escondo o tablet quando ele sai do quarto.", certo: false, feedback: "Esconder vira briga grande." },
    ]},
  { titulo: "Voz alta na biblioteca", cena: "Você quer contar uma novidade na biblioteca da escola.", img: imgConfuso,
    opcoes: [
      { texto: "Conto baixinho ou espero sair.", certo: true, feedback: "Respeitar o silêncio é cuidar de todos." },
      { texto: "Falo alto, todo mundo precisa ouvir.", certo: false, feedback: "Biblioteca é lugar de silêncio." },
      { texto: "Grito o nome do amigo.", certo: false, feedback: "Atrapalha quem está lendo." },
    ]},
];

// ============ DIVIDINDO O BRINQUEDO (30 itens) ============
export const ITENS_BRINQUEDO: { emoji: string; nome: string }[] = [
  { emoji: "🧸", nome: "Ursinho" }, { emoji: "🚗", nome: "Carrinho" }, { emoji: "🪀", nome: "Ioiô" },
  { emoji: "🎨", nome: "Tintas" }, { emoji: "⚽", nome: "Bola" }, { emoji: "🧩", nome: "Quebra-cabeça" },
  { emoji: "🎲", nome: "Dado" }, { emoji: "🪁", nome: "Pipa" }, { emoji: "🛼", nome: "Patins" },
  { emoji: "🚲", nome: "Bicicleta" }, { emoji: "🎮", nome: "Videogame" }, { emoji: "🪅", nome: "Pinhata" },
  { emoji: "🧶", nome: "Lã" }, { emoji: "🦄", nome: "Unicórnio" }, { emoji: "🦖", nome: "Dinossauro" },
  { emoji: "🚂", nome: "Trem" }, { emoji: "✈️", nome: "Aviãozinho" }, { emoji: "🚁", nome: "Helicóptero" },
  { emoji: "🛶", nome: "Canoa" }, { emoji: "🎠", nome: "Carrossel" }, { emoji: "🎪", nome: "Circo" },
  { emoji: "🪆", nome: "Bonequinha" }, { emoji: "🧊", nome: "Gelo mágico" }, { emoji: "🔭", nome: "Telescópio" },
  { emoji: "🪕", nome: "Banjo" }, { emoji: "🥁", nome: "Tambor" }, { emoji: "🎺", nome: "Trombeta" },
  { emoji: "🪗", nome: "Sanfona" }, { emoji: "🎯", nome: "Alvo" }, { emoji: "🏀", nome: "Bola de basquete" },
];

// ============ CUIDANDO DO AMIGO (30) ============
export type CuidarSituacao = {
  img: string; cor: string; texto: string;
  acoes: { emoji: string; texto: string; certo: boolean; feedback: string }[];
};

export const SITUACOES_CUIDAR: CuidarSituacao[] = [
  { img: imgTriste, cor: "#fb923c", texto: "Sua amiga está chorando porque perdeu o lanche.",
    acoes: [
      { emoji: "🍎", texto: "Divido o meu lanche com ela.", certo: true, feedback: "Gentileza alimenta o coração também. 💛" },
      { emoji: "🙈", texto: "Finjo que não vi.", certo: false, feedback: "Ela precisa de alguém. Um gesto ajuda." },
      { emoji: "😂", texto: "Rio da situação.", certo: false, feedback: "Rir do outro magoa. Imagine se fosse com você." },
    ]},
  { img: imgBravo, cor: "#ef4444", texto: "Seu amigo está bravo porque perdeu no jogo.",
    acoes: [
      { emoji: "🤗", texto: "Digo que tudo bem, vamos jogar de novo.", certo: true, feedback: "Acolher acalma o amigo." },
      { emoji: "🏆", texto: "Fico dizendo que venci o tempo todo.", certo: false, feedback: "Provocar piora tudo." },
      { emoji: "🚪", texto: "Saio e deixo ele sozinho.", certo: false, feedback: "Um amigo por perto conforta." },
    ]},
  { img: imgConfuso, cor: "#eab308", texto: "Um colega caiu e machucou o joelho no recreio.",
    acoes: [
      { emoji: "🩹", texto: "Ajudo a levantar e chamo um adulto.", certo: true, feedback: "Cuidar e chamar quem ajuda é o ideal." },
      { emoji: "🏃", texto: "Continuo correndo.", certo: false, feedback: "Quem cuida, para." },
      { emoji: "📸", texto: "Tiro foto pra mostrar pros amigos.", certo: false, feedback: "Isso constrange o outro." },
    ]},
  { img: imgTriste, cor: "#60a5fa", texto: "Seu irmãozinho está com medo do trovão.",
    acoes: [
      { emoji: "🫂", texto: "Dou abraço e fico perto.", certo: true, feedback: "Presença acalma quem ama você." },
      { emoji: "👻", texto: "Faço barulho pra assustar mais.", certo: false, feedback: "Brincar com medo magoa." },
      { emoji: "🙄", texto: "Falo que é coisa de bebê.", certo: false, feedback: "Cada um tem seus medos." },
    ]},
  { img: imgTriste, cor: "#a855f7", texto: "Sua amiga ficou doente e não foi pra aula.",
    acoes: [
      { emoji: "💌", texto: "Mando uma mensagem carinhosa.", certo: true, feedback: "Lembrar do amigo cura também." },
      { emoji: "🤷", texto: "Nem percebo que ela faltou.", certo: false, feedback: "Notar a falta é cuidar." },
      { emoji: "🎉", texto: "Comemoro porque ela não vem.", certo: false, feedback: "Que pena pensar assim do amigo." },
    ]},
  { img: imgBravo, cor: "#ef4444", texto: "Um colega novo está sozinho no recreio.",
    acoes: [
      { emoji: "👋", texto: "Chamo pra brincar.", certo: true, feedback: "Acolher salva o dia de alguém." },
      { emoji: "👀", texto: "Olho mas não falo nada.", certo: false, feedback: "Um 'oi' já abre porta." },
      { emoji: "🙅", texto: "Falo que é só do meu grupo.", certo: false, feedback: "Grupinho fechado fere." },
    ]},
  { img: imgTriste, cor: "#0ea5e9", texto: "Seu primo perdeu o brinquedo favorito.",
    acoes: [
      { emoji: "🔍", texto: "Ajudo a procurar.", certo: true, feedback: "Buscar junto mostra carinho." },
      { emoji: "😴", texto: "Vou dormir e nem ajudo.", certo: false, feedback: "Ajuda faz toda diferença." },
      { emoji: "🤣", texto: "Acho graça do desespero dele.", certo: false, feedback: "Rir do sofrimento dói." },
    ]},
  { img: imgConfuso, cor: "#f97316", texto: "Sua colega esqueceu a fala da apresentação.",
    acoes: [
      { emoji: "🤫", texto: "Sussurro a fala pra ajudar.", certo: true, feedback: "Salvar o amigo no aperto é nobre." },
      { emoji: "🙄", texto: "Rio alto da turma.", certo: false, feedback: "Rir aumenta o medo dela." },
      { emoji: "📵", texto: "Mexo no celular ignorando.", certo: false, feedback: "Ignorar deixa o outro mais só." },
    ]},
  { img: imgTriste, cor: "#22c55e", texto: "Seu avô parece triste depois de uma notícia.",
    acoes: [
      { emoji: "🫂", texto: "Sento perto e dou um abraço.", certo: true, feedback: "Abraço sem palavras conforta muito." },
      { emoji: "📺", texto: "Aumento a TV e ignoro.", certo: false, feedback: "Distrair o outro não é cuidar." },
      { emoji: "❓", texto: "Pergunto várias vezes o que aconteceu.", certo: false, feedback: "Insistir pode incomodar. Espere ele falar." },
    ]},
  { img: imgBravo, cor: "#dc2626", texto: "Um amigo brigou com a mãe e está chateado.",
    acoes: [
      { emoji: "👂", texto: "Escuto sem julgar.", certo: true, feedback: "Escutar é um abraço em palavras." },
      { emoji: "⚖️", texto: "Falo que a culpa é dele.", certo: false, feedback: "Não é hora de julgar." },
      { emoji: "📣", texto: "Conto pra todo mundo.", certo: false, feedback: "Espalhar fofoca quebra a confiança." },
    ]},
  { img: imgTriste, cor: "#7c3aed", texto: "Sua amiga não foi convidada pra festa.",
    acoes: [
      { emoji: "🎈", texto: "Combino algo legal só nós duas.", certo: true, feedback: "Cuidar do amigo excluído é tudo." },
      { emoji: "📸", texto: "Mostro fotos da festa pra ela.", certo: false, feedback: "Isso aumenta a tristeza." },
      { emoji: "🤐", texto: "Falo que ela é chata mesmo.", certo: false, feedback: "Isso dobra a dor." },
    ]},
  { img: imgConfuso, cor: "#f59e0b", texto: "Um amigo está com fome mas tem vergonha de pedir.",
    acoes: [
      { emoji: "🍪", texto: "Ofereço meu lanche sem ele pedir.", certo: true, feedback: "Sentir o outro é cuidar fino." },
      { emoji: "🙊", texto: "Como na frente dele.", certo: false, feedback: "Faltou empatia." },
      { emoji: "🤥", texto: "Falo que tô sem nada.", certo: false, feedback: "Mentir afasta o amigo." },
    ]},
  { img: imgTriste, cor: "#06b6d4", texto: "Sua irmã se machucou andando de bicicleta.",
    acoes: [
      { emoji: "🩹", texto: "Pego um curativo e chamo a mãe.", certo: true, feedback: "Ação rápida e calma resolve." },
      { emoji: "📱", texto: "Filmo pra postar.", certo: false, feedback: "Isso é falta de respeito." },
      { emoji: "🤷", texto: "Digo 'foi mal' e saio.", certo: false, feedback: "Cuidar é ficar junto." },
    ]},
  { img: imgConfuso, cor: "#84cc16", texto: "Um colega não entendeu a lição.",
    acoes: [
      { emoji: "📖", texto: "Explico com calma do meu jeito.", certo: true, feedback: "Ensinar com paciência é amor." },
      { emoji: "🐢", texto: "Falo que ele é lento.", certo: false, feedback: "Rotular ninguém." },
      { emoji: "💨", texto: "Saio correndo no recreio.", certo: false, feedback: "Cuidar é um minutinho." },
    ]},
  { img: imgBravo, cor: "#e11d48", texto: "Seu amigo recebeu uma crítica injusta.",
    acoes: [
      { emoji: "🛡️", texto: "Defendo ele com respeito.", certo: true, feedback: "Defender quem ama é bonito." },
      { emoji: "🙈", texto: "Faço de conta que não vi.", certo: false, feedback: "Silêncio diante da injustiça também fere." },
      { emoji: "👏", texto: "Concordo com a crítica injusta.", certo: false, feedback: "Concordar com injustiça machuca." },
    ]},
  { img: imgTriste, cor: "#8b5cf6", texto: "Sua avó está com saudade de você.",
    acoes: [
      { emoji: "📞", texto: "Faço uma ligação carinhosa.", certo: true, feedback: "Saudade some com chamada." },
      { emoji: "📵", texto: "Deixo pra outro dia sempre.", certo: false, feedback: "Hoje é o melhor dia." },
      { emoji: "😒", texto: "Falo que ela enche.", certo: false, feedback: "Avó merece carinho." },
    ]},
  { img: imgConfuso, cor: "#10b981", texto: "Um amigo errou no jogo e a equipe perdeu.",
    acoes: [
      { emoji: "💪", texto: "Falo 'vamos tentar de novo!'.", certo: true, feedback: "Apoiar quem errou é time de verdade." },
      { emoji: "🗯️", texto: "Grito com ele.", certo: false, feedback: "Gritar afasta o amigo." },
      { emoji: "🏃", texto: "Saio do time.", certo: false, feedback: "Abandonar é fácil; apoiar é coragem." },
    ]},
  { img: imgTriste, cor: "#f43f5e", texto: "Sua amiga não dorme bem porque tem pesadelos.",
    acoes: [
      { emoji: "🌙", texto: "Escuto e digo que é normal sentir medo.", certo: true, feedback: "Validar sentimentos acalma." },
      { emoji: "🤡", texto: "Conto histórias de terror.", certo: false, feedback: "Isso piora o medo." },
      { emoji: "🤫", texto: "Falo pra ela não falar disso.", certo: false, feedback: "Calar a dor não cura." },
    ]},
  { img: imgConfuso, cor: "#0891b2", texto: "Seu colega tem dificuldade na educação física.",
    acoes: [
      { emoji: "🏃‍♀️", texto: "Convido pra treinar comigo.", certo: true, feedback: "Treinar junto motiva." },
      { emoji: "😆", texto: "Rio do jeito que ele corre.", certo: false, feedback: "Zombar dói." },
      { emoji: "👎", texto: "Falo que ele é ruim mesmo.", certo: false, feedback: "Palavras assim destroem autoestima." },
    ]},
  { img: imgTriste, cor: "#ea580c", texto: "Um colega imigrante não fala bem português.",
    acoes: [
      { emoji: "🌍", texto: "Ajudo com paciência e mostro palavras.", certo: true, feedback: "Acolher é construir pontes." },
      { emoji: "🗣️", texto: "Falo bem rápido pra ele se virar.", certo: false, feedback: "Faltou empatia." },
      { emoji: "😅", texto: "Rio do sotaque.", certo: false, feedback: "Sotaque não se ri, se respeita." },
    ]},
  { img: imgBravo, cor: "#be123c", texto: "Seu amigo está sendo zoado por um grupo.",
    acoes: [
      { emoji: "🛑", texto: "Falo pra parar e chamo um adulto.", certo: true, feedback: "Defender é ato de coragem." },
      { emoji: "😐", texto: "Fico quieto pra não me envolver.", certo: false, feedback: "Silêncio fortalece o bully." },
      { emoji: "🎤", texto: "Entro na zoeira.", certo: false, feedback: "Isso é bullying também." },
    ]},
  { img: imgTriste, cor: "#1d4ed8", texto: "Sua prima perdeu o bichinho de estimação.",
    acoes: [
      { emoji: "💐", texto: "Faço um desenho e dou pra ela.", certo: true, feedback: "Pequeno gesto, grande conforto." },
      { emoji: "🐶", texto: "Falo: 'compra outro!'.", certo: false, feedback: "Bicho amado não tem substituto." },
      { emoji: "🤷", texto: "Mudo de assunto.", certo: false, feedback: "Faltou acolher." },
    ]},
  { img: imgConfuso, cor: "#9333ea", texto: "Um colega gagueja ao apresentar.",
    acoes: [
      { emoji: "🙂", texto: "Olho com paciência e espero.", certo: true, feedback: "Paciência é gentileza." },
      { emoji: "🗣️", texto: "Termino a frase por ele.", certo: false, feedback: "Pode ser bem invasivo." },
      { emoji: "😬", texto: "Imito a gagueira.", certo: false, feedback: "Imitar é cruel." },
    ]},
  { img: imgTriste, cor: "#15803d", texto: "Seu amigo tirou nota baixa e está triste.",
    acoes: [
      { emoji: "📚", texto: "Convido pra estudarmos juntos.", certo: true, feedback: "Estudar junto fortalece amizade." },
      { emoji: "🤡", texto: "Mostro a minha nota alta.", certo: false, feedback: "Vangloriar é falta de empatia." },
      { emoji: "🙄", texto: "Falo: 'você não estuda mesmo'.", certo: false, feedback: "Julgar magoa." },
    ]},
  { img: imgBravo, cor: "#b91c1c", texto: "Sua mãe está cansada depois do trabalho.",
    acoes: [
      { emoji: "🫖", texto: "Levo um chá ou uma água pra ela.", certo: true, feedback: "Cuidar de quem cuida é amor." },
      { emoji: "📺", texto: "Aumento a TV e peço comida.", certo: false, feedback: "Não é hora de exigir." },
      { emoji: "😤", texto: "Reclamo do dia inteiro.", certo: false, feedback: "Reclamar quando ela já tá esgotada machuca." },
    ]},
  { img: imgConfuso, cor: "#0369a1", texto: "Sua colega esqueceu o material em casa.",
    acoes: [
      { emoji: "✏️", texto: "Empresto o meu.", certo: true, feedback: "Pequena ajuda salva o dia." },
      { emoji: "🚫", texto: "Falo que ela é desorganizada.", certo: false, feedback: "Crítica não ajuda agora." },
      { emoji: "🙅", texto: "Escondo meu material.", certo: false, feedback: "Esconder fere a amizade." },
    ]},
  { img: imgTriste, cor: "#c026d3", texto: "Seu colega autista ficou sobrecarregado de barulho.",
    acoes: [
      { emoji: "🤫", texto: "Falo baixo e ofereço um canto calmo.", certo: true, feedback: "Respeitar o tempo dele é cuidado verdadeiro." },
      { emoji: "📢", texto: "Continuo gritando.", certo: false, feedback: "Som excessivo machuca." },
      { emoji: "🤨", texto: "Falo que ele é estranho.", certo: false, feedback: "Diferenças se respeitam." },
    ]},
  { img: imgConfuso, cor: "#d97706", texto: "Seu amigo derrubou o suco em si mesmo.",
    acoes: [
      { emoji: "🧻", texto: "Pego um pano e ajudo a limpar.", certo: true, feedback: "Ajudar sem zoar é amizade." },
      { emoji: "🤣", texto: "Rio alto na mesa.", certo: false, feedback: "Vergonha já é grande, não aumente." },
      { emoji: "📸", texto: "Tiro foto.", certo: false, feedback: "Constranger é o oposto de cuidar." },
    ]},
  { img: imgTriste, cor: "#7e22ce", texto: "Sua amiga tem medo do escuro.",
    acoes: [
      { emoji: "🔦", texto: "Empresto minha lanterna e fico junto.", certo: true, feedback: "Estar junto vence medos." },
      { emoji: "💡", texto: "Apago a luz de surpresa.", certo: false, feedback: "Susto piora o medo." },
      { emoji: "😝", texto: "Faço sons de fantasma.", certo: false, feedback: "Brincar com medo é cruel." },
    ]},
  { img: imgBravo, cor: "#a3a3a3", texto: "Um amigo brigou com você por engano.",
    acoes: [
      { emoji: "🗣️", texto: "Converso com calma pra entender.", certo: true, feedback: "Diálogo desfaz confusão." },
      { emoji: "⚔️", texto: "Brigo de volta.", certo: false, feedback: "Briga não esclarece nada." },
      { emoji: "🚪", texto: "Saio sem dizer nada nunca mais.", certo: false, feedback: "Sumir não resolve." },
    ]},
];

// ============ ELOGIO MÁGICO (30 cenas) ============
export type ElogioCena = {
  texto: string;
  opcoes: { texto: string; bom: boolean; feedback: string }[];
};

export const CENAS_ELOGIO: ElogioCena[] = [
  { texto: "Sua amiga fez um desenho e mostrou pra você.",
    opcoes: [
      { texto: "Adorei suas cores! Você caprichou.", bom: true, feedback: "Elogiar o esforço aquece quem fez." },
      { texto: "Tá legal.", bom: false, feedback: "Curto demais não mostra atenção." },
      { texto: "O meu fica melhor.", bom: false, feedback: "Comparar diminui o outro." },
    ]},
  { texto: "Seu colega ajudou um amigo a entender a lição.",
    opcoes: [
      { texto: "Foi muito gentil em explicar pra ele!", bom: true, feedback: "Reconhecer gestos bons inspira." },
      { texto: "Sorte dele.", bom: false, feedback: "Parece reclamação, não elogio." },
      { texto: "Eu também sei explicar.", bom: false, feedback: "Era hora de elogiar o outro." },
    ]},
  { texto: "Sua irmã se vestiu sozinha pela primeira vez.",
    opcoes: [
      { texto: "Que legal, você conseguiu sozinha!", bom: true, feedback: "Elogio dá coragem pra continuar." },
      { texto: "Tá com a camisa do avesso…", bom: false, feedback: "Ajude DEPOIS de elogiar o esforço." },
      { texto: "Já não era sem tempo.", bom: false, feedback: "Conquistas merecem festa." },
    ]},
  { texto: "Seu amigo cantou na frente da turma.",
    opcoes: [
      { texto: "Que coragem! Adorei te ver cantando.", bom: true, feedback: "Coragem merece reconhecimento." },
      { texto: "Sua voz tá estranha.", bom: false, feedback: "Defeitos em hora frágil magoam." },
      { texto: "Nem prestei atenção.", bom: false, feedback: "Ignorar dói tanto quanto criticar." },
    ]},
  { texto: "Seu pai arrumou seu quarto enquanto você estudava.",
    opcoes: [
      { texto: "Obrigado, pai! Ficou ótimo!", bom: true, feedback: "Reconhecer ajuda fortalece família." },
      { texto: "Você bagunçou as minhas coisas.", bom: false, feedback: "Foi gesto de cuidado." },
      { texto: "Não pedi pra arrumar.", bom: false, feedback: "Sem gratidão, gestos somem." },
    ]},
  { texto: "Sua avó fez um bolo só pra você.",
    opcoes: [
      { texto: "Ficou delicioso! Você é a melhor!", bom: true, feedback: "Elogio sincero a quem cozinha é amor." },
      { texto: "Eu preferia chocolate.", bom: false, feedback: "Faltou agradecer o carinho." },
      { texto: "Tá meio doce.", bom: false, feedback: "Crítica seca apaga o gesto." },
    ]},
  { texto: "Sua amiga ganhou medalha em uma competição.",
    opcoes: [
      { texto: "Parabéns! Você treinou muito e conseguiu!", bom: true, feedback: "Reconhecer esforço é elogio mágico." },
      { texto: "Tive azar de não competir.", bom: false, feedback: "Hora dela, não sua." },
      { texto: "Sorte sua.", bom: false, feedback: "Foi treino, não só sorte." },
    ]},
  { texto: "Seu colega mostrou um trabalho de ciências.",
    opcoes: [
      { texto: "Achei criativo! Como pensou nisso?", bom: true, feedback: "Curiosidade valoriza o trabalho." },
      { texto: "É só um trabalhinho.", bom: false, feedback: "Diminuir o esforço fere." },
      { texto: "Tem erros aqui.", bom: false, feedback: "Foque no que tá bom primeiro." },
    ]},
  { texto: "Sua mãe terminou um curso difícil.",
    opcoes: [
      { texto: "Mãe, que orgulho de você!", bom: true, feedback: "Reconhecer adultos também é importante." },
      { texto: "Demorou.", bom: false, feedback: "Conquista é conquista." },
      { texto: "E daí?", bom: false, feedback: "Indiferença machuca em casa." },
    ]},
  { texto: "Seu amigo emagreceu treinando.",
    opcoes: [
      { texto: "Vi seu esforço, você está mais disposto!", bom: true, feedback: "Elogie o esforço, não só o corpo." },
      { texto: "Ainda tá longe do ideal.", bom: false, feedback: "Cuidado com o que se diz sobre corpo." },
      { texto: "Tava bem gordo antes.", bom: false, feedback: "Comentário desnecessário e cruel." },
    ]},
  { texto: "Sua professora explicou de um jeito que entendeu.",
    opcoes: [
      { texto: "Profe, hoje entendi tudo, obrigado!", bom: true, feedback: "Professores amam saber que ajudaram." },
      { texto: "Já era hora.", bom: false, feedback: "Faltou gratidão." },
      { texto: "Continuo achando chato.", bom: false, feedback: "Não era a hora." },
    ]},
  { texto: "Seu irmão arrumou os brinquedos sozinho.",
    opcoes: [
      { texto: "Que capricho! Ficou organizadinho!", bom: true, feedback: "Reconhecer autonomia anima." },
      { texto: "Faltou guardar isso aqui.", bom: false, feedback: "Antes elogie o que fez bem." },
      { texto: "Era sua obrigação.", bom: false, feedback: "Frieza desanima a próxima vez." },
    ]},
  { texto: "Sua tia mudou o cabelo.",
    opcoes: [
      { texto: "Ficou linda, combinou com você!", bom: true, feedback: "Elogiar mudanças encoraja." },
      { texto: "Tava melhor antes.", bom: false, feedback: "Crítica solta machuca." },
      { texto: "Não percebi.", bom: false, feedback: "Pouco atento ao outro." },
    ]},
  { texto: "Um colega ajudou a recolher o lixo da sala.",
    opcoes: [
      { texto: "Valeu! Você cuidou da sala de todos.", bom: true, feedback: "Atitude coletiva merece elogio." },
      { texto: "Ninguém pediu.", bom: false, feedback: "Bom mesmo é fazer sem pedir." },
      { texto: "Tá querendo aparecer.", bom: false, feedback: "Julgar intenção é injusto." },
    ]},
  { texto: "Sua amiga venceu o medo de apresentar.",
    opcoes: [
      { texto: "Que coragem! Você venceu o medo!", bom: true, feedback: "Coragem é vitória enorme." },
      { texto: "Tremeu na voz.", bom: false, feedback: "Apontar tremor diminui a conquista." },
      { texto: "Eu nem teria medo.", bom: false, feedback: "Cada um tem seus medos." },
    ]},
  { texto: "Seu colega passou no teste depois de muito estudar.",
    opcoes: [
      { texto: "Parabéns pelo esforço, você merece!", bom: true, feedback: "Reconhecer estudo motiva." },
      { texto: "Foi fácil.", bom: false, feedback: "Pra ele não foi." },
      { texto: "Eu tirei mais.", bom: false, feedback: "Não é competição agora." },
    ]},
  { texto: "Seu vizinho consertou sua bicicleta.",
    opcoes: [
      { texto: "Muito obrigado! Você é demais!", bom: true, feedback: "Gratidão alimenta a vizinhança." },
      { texto: "Devia ter feito antes.", bom: false, feedback: "Foi favor, não obrigação." },
      { texto: "Espero que dure.", bom: false, feedback: "Desconfiança magoa quem ajudou." },
    ]},
  { texto: "Uma amiga compartilhou seu lanche com você.",
    opcoes: [
      { texto: "Que amiga gentil você é!", bom: true, feedback: "Reconhecer gentileza inspira mais dela." },
      { texto: "É pouco.", bom: false, feedback: "Faltou agradecer." },
      { texto: "Eu não gosto disso.", bom: false, feedback: "Pode recusar com educação." },
    ]},
  { texto: "Sua professora elogiou seu colega.",
    opcoes: [
      { texto: "Você merece, capricha mesmo!", bom: true, feedback: "Apoiar quem é elogiado é amizade." },
      { texto: "A profe puxa o saco.", bom: false, feedback: "Diminuir o outro mostra inveja." },
      { texto: "Eu sou melhor.", bom: false, feedback: "Foco em si invalida o outro." },
    ]},
  { texto: "Seu primo aprendeu a andar de bicicleta.",
    opcoes: [
      { texto: "Uhul! Você conseguiu sem rodinhas!", bom: true, feedback: "Comemorar conquista alimenta autoestima." },
      { texto: "Demorou.", bom: false, feedback: "Cada um no seu tempo." },
      { texto: "Eu aprendi mais novo.", bom: false, feedback: "Comparação rouba a alegria." },
    ]},
  { texto: "Seu amigo organizou uma festa surpresa pra você.",
    opcoes: [
      { texto: "Amei tudo! Você é incrível!", bom: true, feedback: "Reconhecer o gesto torna o vínculo mais forte." },
      { texto: "Eu queria outra coisa.", bom: false, feedback: "Foi feito com carinho." },
      { texto: "Faltou bolo.", bom: false, feedback: "Foque no gesto, não no que faltou." },
    ]},
  { texto: "Seu colega ajudou a apagar o quadro.",
    opcoes: [
      { texto: "Valeu! Boa parceria!", bom: true, feedback: "Pequenos elogios constroem grupo." },
      { texto: "É obrigação sua hoje.", bom: false, feedback: "Reconheça mesmo o esperado." },
      { texto: "Apagou mal.", bom: false, feedback: "Crítica não cabe agora." },
    ]},
  { texto: "Sua irmã desenhou um retrato seu.",
    opcoes: [
      { texto: "Que fofo! Vou guardar com carinho!", bom: true, feedback: "Guardar o gesto vale mais que a técnica." },
      { texto: "Tá feio.", bom: false, feedback: "Diminuir afeto fere." },
      { texto: "Faz outro.", bom: false, feedback: "Aproveite o que ela já fez." },
    ]},
  { texto: "Seu colega criou um jogo no recreio.",
    opcoes: [
      { texto: "Que ideia legal! Bora jogar!", bom: true, feedback: "Reconhecer criatividade é mágico." },
      { texto: "Já fizeram isso.", bom: false, feedback: "Originalidade dele tem valor." },
      { texto: "Chato esse jogo.", bom: false, feedback: "Pode não jogar, mas respeitando." },
    ]},
  { texto: "Sua amiga ajudou a profe sem ser pedido.",
    opcoes: [
      { texto: "Que iniciativa! Adorei isso em você.", bom: true, feedback: "Iniciativa merece destaque." },
      { texto: "Puxa-saco.", bom: false, feedback: "Rotular afasta amigos." },
      { texto: "Vai ficar pior pra gente.", bom: false, feedback: "Foco no esforço, não no pior." },
    ]},
  { texto: "Seu colega ouviu sua história com atenção.",
    opcoes: [
      { texto: "Obrigado por me escutar de verdade.", bom: true, feedback: "Agradecer a escuta é raro e bonito." },
      { texto: "Era seu papel.", bom: false, feedback: "Não é obrigação." },
      { texto: "Você nem entendeu.", bom: false, feedback: "Cuidado com a injustiça." },
    ]},
  { texto: "Uma criança menor te seguiu o dia todo.",
    opcoes: [
      { texto: "Você foi amigão hoje, vamos brincar amanhã!", bom: true, feedback: "Acolher pequenos forma vínculos." },
      { texto: "Para de me seguir.", bom: false, feedback: "Pode pedir espaço com carinho." },
      { texto: "Sai daqui, chato.", bom: false, feedback: "Palavras duras machucam." },
    ]},
  { texto: "Seu amigo se desculpou por algo que fez.",
    opcoes: [
      { texto: "Obrigado por reconhecer, tudo bem.", bom: true, feedback: "Receber desculpa fortalece amizade." },
      { texto: "Tarde demais.", bom: false, feedback: "Recusar desculpa endurece o vínculo." },
      { texto: "Não esqueço nunca.", bom: false, feedback: "Carregar mágoa pesa." },
    ]},
  { texto: "Seu pai fez um almoço especial.",
    opcoes: [
      { texto: "Tá uma delícia, pai! Obrigado!", bom: true, feedback: "Elogio à mesa alegra a família." },
      { texto: "Não gostei.", bom: false, feedback: "Diga com educação se for o caso." },
      { texto: "Faz outra coisa.", bom: false, feedback: "Foi gesto de carinho." },
    ]},
  { texto: "Sua amiga te emprestou seu livro favorito.",
    opcoes: [
      { texto: "Que confiança! Vou cuidar bem dele.", bom: true, feedback: "Reconhecer confiança a aumenta." },
      { texto: "Não queria nem.", bom: false, feedback: "Pode recusar com educação." },
      { texto: "Já li.", bom: false, feedback: "Agradeça mesmo assim." },
    ]},
];

// ============ REGRAS DA CASA (30 combinados) ============
export const REGRAS_CASA: { id: string; emoji: string; texto: string }[] = [
  { id: "dentes", emoji: "🪥", texto: "Escovar os dentes" },
  { id: "cama", emoji: "🛏️", texto: "Arrumar a cama" },
  { id: "brinquedos", emoji: "🧸", texto: "Guardar os brinquedos" },
  { id: "tela", emoji: "📱", texto: "Respeitar o tempo de tela" },
  { id: "obrigado", emoji: "🙏", texto: "Dizer 'por favor' e 'obrigado'" },
  { id: "comer", emoji: "🍽️", texto: "Comer na mesa, sem correr" },
  { id: "ajudar", emoji: "🤝", texto: "Ajudar em uma tarefa" },
  { id: "ouvir", emoji: "👂", texto: "Ouvir antes de falar" },
  { id: "banho", emoji: "🛁", texto: "Tomar banho sozinho" },
  { id: "roupa", emoji: "👕", texto: "Guardar a roupa suja no cesto" },
  { id: "mesa", emoji: "🍴", texto: "Ajudar a pôr a mesa" },
  { id: "agua", emoji: "💧", texto: "Beber água várias vezes ao dia" },
  { id: "luz", emoji: "💡", texto: "Apagar a luz ao sair do quarto" },
  { id: "porta", emoji: "🚪", texto: "Fechar a porta da geladeira" },
  { id: "mochila", emoji: "🎒", texto: "Preparar a mochila da escola" },
  { id: "licao", emoji: "📚", texto: "Fazer a lição de casa" },
  { id: "leitura", emoji: "📖", texto: "Ler um pouquinho por dia" },
  { id: "respiro", emoji: "🌬️", texto: "Respirar fundo quando me irrito" },
  { id: "abraco", emoji: "🤗", texto: "Dar um abraço em alguém" },
  { id: "verdade", emoji: "💬", texto: "Falar a verdade" },
  { id: "desculpa", emoji: "🙇", texto: "Pedir desculpas quando erro" },
  { id: "ajuda", emoji: "🆘", texto: "Pedir ajuda quando precisar" },
  { id: "respeito", emoji: "💖", texto: "Respeitar os mais velhos" },
  { id: "fila", emoji: "🚶", texto: "Esperar minha vez" },
  { id: "compartilhar", emoji: "🍪", texto: "Compartilhar lanche ou doces" },
  { id: "limpeza", emoji: "🧹", texto: "Limpar o que sujei" },
  { id: "pet", emoji: "🐶", texto: "Cuidar do bichinho de estimação" },
  { id: "planta", emoji: "🌱", texto: "Regar uma plantinha" },
  { id: "exercicio", emoji: "🤸", texto: "Brincar de se mexer" },
  { id: "sono", emoji: "🌙", texto: "Dormir no horário combinado" },
];

// ============ RESOLUÇÃO DE CONFLITOS (30) ============
export type Conflito = {
  img: string; cor: string; problema: string;
  solucoes: { texto: string; pontos: number; comentario: string }[];
};

export const CONFLITOS: Conflito[] = [
  { img: imgBravo, cor: "#ef4444", problema: "Dois amigos querem o mesmo balanço no parque ao mesmo tempo.",
    solucoes: [
      { texto: "Combinar quanto tempo cada um usa.", pontos: 3, comentario: "Combinar é a melhor solução!" },
      { texto: "Cara ou coroa pra ver quem começa.", pontos: 2, comentario: "Boa! E combine o tempo." },
      { texto: "Empurrar o outro pra sair.", pontos: 0, comentario: "Força nunca resolve." },
    ]},
  { img: imgTriste, cor: "#f97316", problema: "Seu irmão pegou seu livro sem avisar.",
    solucoes: [
      { texto: "Falar calmamente que prefere que peça antes.", pontos: 3, comentario: "Comunicação clara resolve quase tudo." },
      { texto: "Pegar algo dele de volta sem avisar.", pontos: 0, comentario: "Repetir o erro não resolve." },
      { texto: "Reclamar gritando.", pontos: 1, comentario: "Pode buscar ajuda, sem gritos." },
    ]},
  { img: imgConfuso, cor: "#eab308", problema: "Você e um colega têm regras diferentes pro jogo.",
    solucoes: [
      { texto: "Cada um explica e escolhem juntos.", pontos: 3, comentario: "Negociar é maturidade." },
      { texto: "Chamar um adulto pra decidir.", pontos: 2, comentario: "Pedir ajuda é válido!" },
      { texto: "Largar o jogo bravo.", pontos: 0, comentario: "Desistir não resolve." },
    ]},
  { img: imgBravo, cor: "#dc2626", problema: "Sua amiga falou mal de você pelas costas.",
    solucoes: [
      { texto: "Procurar ela e conversar diretamente.", pontos: 3, comentario: "Falar direto é maduro." },
      { texto: "Falar mal dela também.", pontos: 0, comentario: "Devolver na mesma moeda piora." },
      { texto: "Contar pra um adulto de confiança.", pontos: 2, comentario: "Pedir ajuda ajuda muito." },
    ]},
  { img: imgConfuso, cor: "#fb923c", problema: "Seu colega disse que sua resposta tá errada, mas você acha que tá certa.",
    solucoes: [
      { texto: "Conferir juntos com calma.", pontos: 3, comentario: "Verificar resolve dúvidas." },
      { texto: "Brigar até ele aceitar.", pontos: 0, comentario: "Forçar não convence." },
      { texto: "Perguntar à professora.", pontos: 2, comentario: "Boa! Pessoa neutra ajuda." },
    ]},
  { img: imgBravo, cor: "#b91c1c", problema: "Um amigo prometeu te emprestar algo e esqueceu.",
    solucoes: [
      { texto: "Lembrar gentilmente.", pontos: 3, comentario: "Lembrar com carinho funciona." },
      { texto: "Ficar bravo e cortar amizade.", pontos: 0, comentario: "Reação grande demais." },
      { texto: "Cobrar publicamente.", pontos: 1, comentario: "Constranger não ajuda." },
    ]},
  { img: imgTriste, cor: "#0ea5e9", problema: "Seus pais discutiram e você ficou no meio.",
    solucoes: [
      { texto: "Falar que isso te deixa triste.", pontos: 3, comentario: "Expressar sentimentos é saudável." },
      { texto: "Esconder no quarto pra sempre.", pontos: 1, comentario: "Esconder não cura." },
      { texto: "Gritar pra eles pararem.", pontos: 0, comentario: "Gritos pioram." },
    ]},
  { img: imgConfuso, cor: "#22c55e", problema: "Uma colega pegou sua caneta achando que era dela.",
    solucoes: [
      { texto: "Mostrar a sua marca e pedir de volta.", pontos: 3, comentario: "Resolver com fato é justo." },
      { texto: "Roubar a dela em troca.", pontos: 0, comentario: "Vingança não resolve." },
      { texto: "Reclamar com a turma toda.", pontos: 1, comentario: "Excesso desnecessário." },
    ]},
  { img: imgBravo, cor: "#7c3aed", problema: "Você esqueceu de devolver algo e o amigo está chateado.",
    solucoes: [
      { texto: "Pedir desculpa e devolver na hora.", pontos: 3, comentario: "Reparar o erro recupera confiança." },
      { texto: "Negar que pegou.", pontos: 0, comentario: "Mentir piora muito." },
      { texto: "Dizer que ele esqueceu, não você.", pontos: 0, comentario: "Inverter culpa é injusto." },
    ]},
  { img: imgTriste, cor: "#10b981", problema: "Seu time perdeu e os colegas estão se acusando.",
    solucoes: [
      { texto: "Falar que todos jogaram bem e podemos treinar.", pontos: 3, comentario: "Unir o grupo é vitória." },
      { texto: "Apontar quem errou mais.", pontos: 0, comentario: "Culpar racha o time." },
      { texto: "Sair do time.", pontos: 1, comentario: "Abandonar é fácil." },
    ]},
  { img: imgConfuso, cor: "#f59e0b", problema: "Você quer ver desenho e seu irmão quer jogo.",
    solucoes: [
      { texto: "Combinar revezar a TV.", pontos: 3, comentario: "Combinar é justo." },
      { texto: "Trocar a senha pra ele não usar.", pontos: 0, comentario: "Sabotar piora a briga." },
      { texto: "Chamar a mãe gritando.", pontos: 1, comentario: "Sem gritos seria melhor." },
    ]},
  { img: imgBravo, cor: "#e11d48", problema: "Sua amiga te excluiu da brincadeira.",
    solucoes: [
      { texto: "Perguntar com calma o que aconteceu.", pontos: 3, comentario: "Diálogo abre portas." },
      { texto: "Excluir ela também.", pontos: 0, comentario: "Vingança fere todo mundo." },
      { texto: "Buscar outro grupo pra brincar.", pontos: 2, comentario: "Boa! Mas tente conversar também." },
    ]},
  { img: imgTriste, cor: "#06b6d4", problema: "Seu colega zoou seu corte de cabelo.",
    solucoes: [
      { texto: "Dizer que não gostou da brincadeira.", pontos: 3, comentario: "Marcar limite com firmeza ajuda." },
      { texto: "Cortar o cabelo dele.", pontos: 0, comentario: "Vingança machuca." },
      { texto: "Chorar escondido.", pontos: 1, comentario: "Pode pedir ajuda em vez de esconder." },
    ]},
  { img: imgConfuso, cor: "#a855f7", problema: "Você e seu amigo querem o último biscoito.",
    solucoes: [
      { texto: "Dividir o biscoito ao meio.", pontos: 3, comentario: "Dividir é justo." },
      { texto: "Engolir antes dele pegar.", pontos: 0, comentario: "Egoísmo afasta amigos." },
      { texto: "Tirar par ou ímpar.", pontos: 2, comentario: "Boa solução também." },
    ]},
  { img: imgBravo, cor: "#9333ea", problema: "Sua mãe não deixou você sair e você ficou bravo.",
    solucoes: [
      { texto: "Respirar e perguntar o motivo com calma.", pontos: 3, comentario: "Calma abre conversa." },
      { texto: "Bater porta e gritar.", pontos: 0, comentario: "Birra afasta diálogo." },
      { texto: "Sair escondido.", pontos: 0, comentario: "Perigoso e quebra confiança." },
    ]},
  { img: imgConfuso, cor: "#0891b2", problema: "Você e um colega fizeram a mesma ideia para o trabalho.",
    solucoes: [
      { texto: "Juntar as duas ideias em uma melhor.", pontos: 3, comentario: "Colaborar gera ideia top." },
      { texto: "Brigar pra ver quem teve primeiro.", pontos: 0, comentario: "Brigar atrasa tudo." },
      { texto: "Mudar tudo de raiva.", pontos: 1, comentario: "Reagir com raiva atrapalha." },
    ]},
  { img: imgTriste, cor: "#84cc16", problema: "Seu amigo te ignorou na escola hoje.",
    solucoes: [
      { texto: "Perguntar com cuidado se aconteceu algo.", pontos: 3, comentario: "Perguntar evita imaginar mal." },
      { texto: "Ignorar pra sempre.", pontos: 0, comentario: "Sumir não esclarece." },
      { texto: "Postar indireta.", pontos: 0, comentario: "Indireta piora tudo." },
    ]},
  { img: imgBravo, cor: "#be123c", problema: "Um colega derrubou sua tarefa no chão sem querer.",
    solucoes: [
      { texto: "Pedir ajuda pra recolher e seguir.", pontos: 3, comentario: "Sem querer não merece grito." },
      { texto: "Empurrar ele.", pontos: 0, comentario: "Foi sem querer." },
      { texto: "Falar que ele é desastrado o resto do dia.", pontos: 0, comentario: "Rotular fere." },
    ]},
  { img: imgConfuso, cor: "#f43f5e", problema: "Você prometeu ajudar mas deu vontade de brincar.",
    solucoes: [
      { texto: "Cumprir a promessa primeiro.", pontos: 3, comentario: "Palavra dada é dívida." },
      { texto: "Inventar desculpa.", pontos: 0, comentario: "Mentir desgasta amizade." },
      { texto: "Negociar fazer depois e cumprir.", pontos: 2, comentario: "Negociação válida — cumpra!" },
    ]},
  { img: imgBravo, cor: "#15803d", problema: "Sua irmã usou sua roupa sem pedir.",
    solucoes: [
      { texto: "Conversar sobre pedir antes.", pontos: 3, comentario: "Combinados claros evitam briga." },
      { texto: "Esconder todas as roupas dela.", pontos: 0, comentario: "Exagero." },
      { texto: "Devolver o gesto pegando a dela.", pontos: 0, comentario: "Cria ciclo de briga." },
    ]},
  { img: imgConfuso, cor: "#1d4ed8", problema: "Você atrasou e o grupo te esperou.",
    solucoes: [
      { texto: "Pedir desculpa e agradecer a espera.", pontos: 3, comentario: "Reconhecer fortalece o grupo." },
      { texto: "Inventar uma desculpa enorme.", pontos: 0, comentario: "Sinceridade vale mais." },
      { texto: "Reclamar do horário marcado.", pontos: 1, comentario: "Hora errada pra reclamar." },
    ]},
  { img: imgBravo, cor: "#7e22ce", problema: "Seu amigo riu de uma coisa que você levou a sério.",
    solucoes: [
      { texto: "Dizer: 'pra mim isso importou'.", pontos: 3, comentario: "Falar do sentir abre escuta." },
      { texto: "Cortar amizade na hora.", pontos: 0, comentario: "Reação grande demais." },
      { texto: "Rir de algo dele depois.", pontos: 0, comentario: "Devolver na mesma é briga." },
    ]},
  { img: imgTriste, cor: "#0369a1", problema: "Você acidentalmente quebrou algo do amigo.",
    solucoes: [
      { texto: "Contar logo e pensar em consertar.", pontos: 3, comentario: "Verdade rápida cura." },
      { texto: "Esconder.", pontos: 0, comentario: "Vai descobrir e piorar." },
      { texto: "Mentir que já estava quebrado.", pontos: 0, comentario: "Mentira machuca confiança." },
    ]},
  { img: imgConfuso, cor: "#c026d3", problema: "Um colega copia tudo o que você faz.",
    solucoes: [
      { texto: "Conversar e dizer como se sente.", pontos: 3, comentario: "Falar resolve melhor que evitar." },
      { texto: "Esconder tudo o que faz.", pontos: 1, comentario: "Te limita." },
      { texto: "Zoar ele na frente da turma.", pontos: 0, comentario: "Constranger fere." },
    ]},
  { img: imgBravo, cor: "#d97706", problema: "Seu amigo contou um segredo seu.",
    solucoes: [
      { texto: "Falar como se sentiu e combinar limite.", pontos: 3, comentario: "Restabelecer confiança vale a tentativa." },
      { texto: "Contar um segredo dele.", pontos: 0, comentario: "Vingança fere mais." },
      { texto: "Nunca mais falar com ele.", pontos: 1, comentario: "Talvez seja cedo demais pra cortar." },
    ]},
  { img: imgConfuso, cor: "#0d9488", problema: "Você e um colega chegaram juntos na mesma cadeira.",
    solucoes: [
      { texto: "Combinar par ou ímpar pra essa vez.", pontos: 3, comentario: "Combinado justo." },
      { texto: "Sentar à força.", pontos: 0, comentario: "Força não resolve nada." },
      { texto: "Pedir a um adulto a sugestão.", pontos: 2, comentario: "Boa! Ajuda neutra." },
    ]},
  { img: imgTriste, cor: "#ea580c", problema: "Sua amiga chegou tarde no seu aniversário.",
    solucoes: [
      { texto: "Recebê-la com carinho e perguntar depois.", pontos: 3, comentario: "Hora da festa, não da bronca." },
      { texto: "Ignorar e fingir que não veio.", pontos: 0, comentario: "Aumenta a tristeza dos dois." },
      { texto: "Cobrar na frente de todos.", pontos: 0, comentario: "Constrange muito." },
    ]},
  { img: imgBravo, cor: "#a3a3a3", problema: "Seu colega usou seu apelido que você não gosta.",
    solucoes: [
      { texto: "Dizer com firmeza qual nome prefere.", pontos: 3, comentario: "Limite claro é cuidado consigo." },
      { texto: "Bater nele.", pontos: 0, comentario: "Violência é errada." },
      { texto: "Chorar sem dizer nada.", pontos: 1, comentario: "Falar resolve mais." },
    ]},
  { img: imgConfuso, cor: "#16a34a", problema: "Você descobriu que um amigo te enganou.",
    solucoes: [
      { texto: "Conversar com calma sobre o que sentiu.", pontos: 3, comentario: "Abre espaço pra reparar." },
      { texto: "Espalhar a história inteira.", pontos: 0, comentario: "Fofoca não cura." },
      { texto: "Cortar amizade sem dizer por quê.", pontos: 1, comentario: "Sem diálogo, ninguém aprende." },
    ]},
  { img: imgBravo, cor: "#65a30d", problema: "Seu colega te culpou por algo que ele fez.",
    solucoes: [
      { texto: "Mostrar com calma a verdade.", pontos: 3, comentario: "Esclarecer com calma resolve." },
      { texto: "Acusar ele de mil coisas.", pontos: 0, comentario: "Excesso piora tudo." },
      { texto: "Aceitar a culpa pra não brigar.", pontos: 1, comentario: "Verdade importa." },
    ]},
];
