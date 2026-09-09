// Rotina de Escrita Diária — 1º ano (6 anos)
// 40 semanas de conteúdo fixo: frase da semana (lousa), frase do dia (caderno),
// palavras da lousa e ditado com dica falada.
// Todas as crianças de 6 anos seguem a mesma sequência; a família só edita o horário.

export const ROTINA_ESCRITA_CATEGORY = "escrita_diaria";
export const ROTINA_ESCRITA_TOPIC = "Rotina de Escrita Diária";
export const ROTINA_DEFAULT_TIME = "17:30";
export const ROTINA_DEFAULT_WEEKDAYS = [1, 2, 3, 4, 5];

export const DIAS_CURTOS = ["D", "S", "T", "Q", "Q", "S", "S"];
export const DIAS_LONGOS = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export interface DitadoItem {
  palavra: string;
  dica: string;
}

export interface SemanaEscrita {
  semana: number;
  foco: string;
  fraseSemana: string; // vai na lousa a semana inteira
  frasesDia: string[]; // 5 frases — uma por dia útil (caderno)
  palavrasLousa: string[];
  ditado: DitadoItem[];
}

// [foco, fraseSemana, frases(5) separadas por |, palavras separadas por espaço, ditado "palavra=dica" separado por |]
type Linha = [string, string, string, string, string];

const LINHAS: Linha[] = [
  [
    "Vogais A e E",
    "A ave é minha amiga.",
    "A ave voa.|Eu vejo a ave.|A ave é azul.|Ela é minha amiga.|Eu amo a ave.",
    "ave asa ema eu ela ali",
    "ave=o bicho que voa e tem asas|asa=é com ela que a ave voa|ema=uma ave grande que corre e não voa|eu=quando você fala de você mesmo|ela=quando falamos de uma menina|ali=um lugar um pouco longe",
  ],
  [
    "Vogais I, O, U",
    "O urso viu o ovo.",
    "O ovo é meu.|Eu vi o urso.|O urso é imenso.|A uva é do urso.|Eu uso o ovo.",
    "ovo uva urso ilha uni oi",
    "ovo=vem da galinha e tem casca|uva=fruta pequena que nasce em cacho|ilha=terra cercada de água|uni=juntei duas coisas|oi=o que falamos ao cumprimentar|urso=animal grandão e peludo",
  ],
  [
    "Sílabas com P",
    "O pai pegou a pipa.",
    "A pipa é do papai.|Eu pego a pipa.|A pipa é pequena.|O pé do papai.|Papai pulou.",
    "pipa pato pé pai papa pote",
    "pipa=brinquedo que voa preso num fio|pato=faz quá-quá e nada no lago|pé=está no fim da perna|pai=o homem da família|papa=comidinha mole de bebê|pote=guardamos comida dentro dele",
  ],
  [
    "Sílabas com B",
    "A bola é do bebê.",
    "O bebê tem bola.|A bola é boa.|Eu bato a bola.|O boi bebe água.|A bota é bonita.",
    "bola bebê boi bota bico bala",
    "bola=redonda e serve para jogar|bebê=criança bem pequenininha|boi=animal grande da fazenda|bota=sapato alto de chuva|bico=a boca do passarinho|bala=doce que a gente chupa",
  ],
  [
    "Sílabas com T",
    "O tatu tomou banho.",
    "O tatu é meu.|Eu tomo o tatu.|O tatu é tímido.|A tia tem tatu.|O tatu tem tapa.",
    "tatu tia tapete teto tuba tomate",
    "tatu=animal com casco duro que cava|tia=irmã do pai ou da mãe|tapete=fica no chão da sala|teto=fica em cima da nossa cabeça|tuba=instrumento grandão que faz som grave|tomate=fruta vermelha da salada",
  ],
  [
    "Sílabas com D",
    "O dado é do Davi.",
    "Eu dei o dado.|O dado é duro.|A dona tem dado.|O dedo do Davi.|Davi deu o dado.",
    "dado dedo dia dona dudu doce",
    "dado=cubinho com números para jogar|dedo=temos cinco em cada mão|dia=quando o sol está no céu|dona=a mulher que é dona da casa|dudu=apelido de menino|doce=tem gosto de açúcar",
  ],
  [
    "Sílabas com M",
    "A mamãe me deu mel.",
    "A mamãe é minha.|Eu amo a mamãe.|A mamãe tem mel.|A mala é da mamãe.|Mamãe me viu.",
    "mala mel mão mapa moto mesa",
    "mala=levamos roupa dentro dela na viagem|mel=doce que a abelha faz|mão=tem cinco dedos|mapa=desenho que mostra os lugares|moto=veículo de duas rodas|mesa=comemos em cima dela",
  ],
  [
    "Sílabas com N",
    "O nenê tem nome.",
    "O nenê é meu.|Eu vi o nenê.|O nome é bonito.|A nuvem é branca.|O nenê nanou.",
    "nenê nome nuvem nariz nove nota",
    "nenê=outro jeito de dizer bebê|nome=é como a gente chama a pessoa|nuvem=fica no céu e é branca|nariz=serve para cheirar|nove=vem depois do oito|nota=papel de dinheiro ou som da música",
  ],
  [
    "Sílabas com F",
    "A fada fez a festa.",
    "A fada é boa.|Eu vi a fada.|A festa é da fada.|A faca é da mamãe.|A fada fugiu.",
    "fada faca festa fila foca fogo",
    "fada=personagem mágica de histórias|faca=corta a comida|festa=tem bolo e música|fila=um atrás do outro|foca=animal do mar que bate palma|fogo=quente e queima",
  ],
  [
    "Sílabas com V",
    "A vaca vive na vila.",
    "A vaca é minha.|Eu vi a vaca.|A vaca é boa.|A vila é bonita.|A vaca voltou.",
    "vaca vela vovó vila vaso vinte",
    "vaca=animal que dá leite|vela=acendemos no bolo|vovó=a mãe da nossa mãe|vila=lugar com casas juntas|vaso=colocamos flor dentro|vinte=vem depois do dezenove",
  ],
  [
    "Sílabas com L",
    "A Lia leva a lua.",
    "A Lia é minha amiga.|Eu vi a lua.|A lua é linda.|A Lia lê o livro.|A lua ilumina.",
    "lua lia livro lobo lata lima",
    "lua=aparece no céu de noite|lia=nome de menina|livro=tem páginas e histórias|lobo=parece um cachorro selvagem|lata=de metal, guarda comida|lima=fruta parecida com o limão",
  ],
  [
    "Sílabas com S",
    "O sapo subiu na sala.",
    "O sapo é verde.|Eu vi o sapo.|O sapo saltou.|A sala é minha.|O sapo sumiu.",
    "sapo sala sopa sino suco sete",
    "sapo=pula e vive perto da água|sala=cômodo onde a família senta|sopa=comida quentinha de colher|sino=faz din-dom na igreja|suco=bebida feita de fruta|sete=vem depois do seis",
  ],
  [
    "Sílabas com C (ca, co, cu)",
    "O cachorro comeu a comida.",
    "O cachorro é meu.|Eu vi o cachorro.|A cama é minha.|A casa é bonita.|O cachorro correu.",
    "casa cama cola copo cuca cavalo",
    "casa=lugar onde a família mora|cama=onde dormimos|cola=gruda o papel|copo=bebemos água nele|cuca=bolo com farofa doce|cavalo=animal grande que corre e a gente monta",
  ],
  [
    "Sílabas com R inicial",
    "O rato roeu a roupa.",
    "O rato é pequeno.|Eu vi o rato.|A rosa é vermelha.|A roupa é minha.|O rato correu.",
    "rato rosa roda rua rei rede",
    "rato=bichinho pequeno de rabo comprido|rosa=flor com espinho|roda=gira no carro e na bicicleta|rua=passamos por ela para ir na escola|rei=usa coroa|rede=deitamos e balançamos nela",
  ],
  [
    "Sílabas com G (ga, go, gu)",
    "O gato gosta de gota.",
    "O gato é meu.|Eu vi o gato.|O gato é gordo.|A gota caiu.|O gato gostou.",
    "gato gola gota gude gula galo",
    "gato=faz miau|gola=parte da camisa perto do pescoço|gota=pinguinho de água|gude=bolinha de vidro de brincar|gula=comer demais|galo=canta de manhã cedo",
  ],
  [
    "Sílabas com J",
    "O jacaré joga bola.",
    "O jacaré é grande.|Eu vi o jacaré.|A janela é minha.|O jogo é bom.|O jacaré jantou.",
    "jacaré janela jogo jaca joia jibóia",
    "jacaré=animal do rio com muitos dentes|janela=abrimos para o ar entrar|jogo=brincadeira com regras|jaca=fruta grandona e amarela|joia=anel ou colar bonito|jibóia=cobra grande que aperta",
  ],
  [
    "Sílabas com Z",
    "A zebra fez zumzum.",
    "A zebra é listrada.|Eu vi a zebra.|A zebra é boa.|O zero é redondo.|A zebra zoou.",
    "zebra zero zoo zumbi azul vazio",
    "zebra=cavalo com listras|zero=número que quer dizer nada|zoo=lugar com muitos animais|zumbi=personagem de história de medo|azul=a cor do céu|vazio=sem nada dentro",
  ],
  [
    "Sílabas com X (som de ch)",
    "O xale é da Xuxa.",
    "O xale é meu.|Eu vi o xale.|A xícara é da vovó.|O xarope é doce.|O xadrez é meu jogo.",
    "xale xicara xarope xadrez lixo peixe",
    "xale=paninho para esquentar o ombro|xicara=copinho de café com asa|xarope=remédio doce de tosse|xadrez=jogo com peças pretas e brancas|lixo=jogamos fora o que não serve|peixe=vive na água e tem escamas",
  ],
  [
    "Revisão das sílabas simples",
    "Eu já sei ler e escrever!",
    "Eu leio o livro.|Eu escrevo no caderno.|A vovó gostou.|Eu sei ler.|Eu sou capaz.",
    "livro caderno lousa lápis letra palavra",
    "livro=lemos histórias nele|caderno=escrevemos nele todo dia|lousa=quadro de escrever|lápis=escrevemos com ele e apagamos|letra=cada pedacinho da palavra|palavra=juntinho de letras que tem sentido",
  ],
  [
    "Dígrafo LH",
    "O coelho pegou a folha.",
    "O coelho é meu.|A folha caiu.|O coelho comeu.|O olho é meu.|A filha da vovó.",
    "coelho folha olho filha milho palha",
    "coelho=bichinho de orelha grande que pula|folha=cai da árvore|olho=serve para enxergar|filha=a menina dos pais|milho=amarelo, vira pipoca|palha=capim seco da casinha",
  ],
  [
    "Dígrafo NH",
    "A galinha tem um ninho.",
    "A galinha é minha.|O ninho é pequeno.|A galinha comeu.|O sonho é bonito.|A banha é da vovó.",
    "galinha ninho sonho banho lenha unha",
    "galinha=põe ovos e faz có-có|ninho=casinha do passarinho|sonho=o que a gente vê dormindo|banho=tomamos com água e sabonete|lenha=pedaço de madeira do fogo|unha=fica na ponta do dedo",
  ],
  [
    "Dígrafo CH",
    "A chuva molhou o chão.",
    "A chuva caiu.|O chão é duro.|A chave é minha.|O chapéu é bonito.|A chuva chegou.",
    "chuva chão chave chapéu chinelo cheiro",
    "chuva=água que cai do céu|chão=onde pisamos|chave=abre a porta|chapéu=usamos na cabeça no sol|chinelo=sapato de dedo|cheiro=sentimos com o nariz",
  ],
  [
    "R entre vogais",
    "A arara mora na árvore.",
    "A arara é colorida.|A árvore é alta.|Eu ouvi a arara.|A cara do bebê.|A arara voou.",
    "arara cara caro fora hora amora",
    "arara=ave colorida que fala|cara=o rosto da pessoa|caro=custa muito dinheiro|fora=do lado de fora da casa|hora=marcamos no relógio|amora=frutinha escura e doce",
  ],
  [
    "RR forte",
    "O carro corre na terra.",
    "O carro é vermelho.|Eu corro na rua.|A terra é molhada.|O carro parou.|O cachorro correu.",
    "carro corre terra ferro barro serra",
    "carro=veículo de quatro rodas|corre=vai bem rápido com as pernas|terra=o chão do jardim|ferro=metal duro, também passa roupa|barro=terra molhada de fazer bonequinho|serra=montanha alta",
  ],
  [
    "S entre vogais (som de Z)",
    "A casa da Rosa é rosa.",
    "A casa é da Rosa.|A rosa é bonita.|Eu vejo a casa.|A mesa é da casa.|A Rosa gostou.",
    "casa rosa mesa asa peso vaso",
    "casa=onde a família mora|rosa=flor e também uma cor|mesa=comemos em cima dela|asa=a ave usa para voar|peso=quanto uma coisa é pesada|vaso=guarda a plantinha",
  ],
  [
    "SS entre vogais",
    "A massa passou na peneira.",
    "A massa é boa.|Eu passo a massa.|O osso é do cachorro.|A missa é domingo.|Eu passei aqui.",
    "massa osso passo missa pássaro sessão",
    "massa=vira macarrão ou bolo|osso=fica dentro do corpo|passo=um pé na frente do outro|missa=encontro na igreja|pássaro=ave pequena que canta|sessão=uma vez do cinema",
  ],
  [
    "Sílabas com QU",
    "O quadro é do Quico.",
    "O quadro é bonito.|Eu quero o quadro.|A queijo é bom.|O quintal é meu.|Quem quer brincar?",
    "quadro quero queijo quinta quinze quilo",
    "quadro=desenho na parede|quero=quando desejo alguma coisa|queijo=feito com leite|quinta=dia depois da quarta|quinze=vem depois do quatorze|quilo=medida de peso",
  ],
  [
    "Sílabas com GU",
    "A águia guarda o guarda-chuva.",
    "A águia voou.|Eu guardo o brinquedo.|A guitarra é minha.|O guarda ajudou.|A águia é forte.",
    "águia guarda guitarra guerra guia gude",
    "águia=ave grande que voa muito alto|guarda=cuida e protege|guitarra=instrumento de tocar música|guerra=briga entre países|guia=mostra o caminho|gude=bolinha de vidro",
  ],
  [
    "Sílabas com CE e CI",
    "A cebola do circo.",
    "A cebola é forte.|Eu vi o circo.|O cinco é número.|A cena é bonita.|O cinema é legal.",
    "cebola circo cinco cena cinema cidade",
    "cebola=faz a gente chorar na cozinha|circo=tem palhaço e picadeiro|cinco=número dos dedos da mão|cena=um pedaço da história|cinema=lugar de assistir filme|cidade=lugar com muitas casas e ruas",
  ],
  [
    "Sílabas com GE e GI",
    "O gelo do gigante.",
    "O gelo é frio.|O gigante é grande.|A gema é amarela.|Eu girei a roda.|O gelo derreteu.",
    "gelo gigante gema girafa gente girar",
    "gelo=água bem gelada e dura|gigante=muito, muito grande|gema=parte amarela do ovo|girafa=animal de pescoço comprido|gente=as pessoas|girar=rodar em volta",
  ],
  [
    "Sons nasais AN, EN, IN, ON, UN",
    "O menino canta na ponte.",
    "O menino canta.|A ponte é alta.|O dente doeu.|O vento sopra.|O mundo é grande.",
    "canta ponte dente vento mundo tinta",
    "canta=faz música com a voz|ponte=passa por cima do rio|dente=mordemos a comida com ele|vento=ar que sopra forte|mundo=onde todo mundo mora|tinta=pintamos com ela",
  ],
  [
    "M antes de P e B",
    "O campo tem tambor.",
    "O campo é verde.|O tambor faz som.|A lâmpada acendeu.|O tempo passou.|A sombra é escura.",
    "campo tambor lâmpada tempo sombra bomba",
    "campo=lugar aberto com mato|tambor=instrumento que batemos|lâmpada=ilumina a casa|tempo=passa nas horas e nos dias|sombra=lugar sem sol|bomba=faz barulho forte",
  ],
  [
    "Encontro AR, ER, IR, OR, UR",
    "O porco carrega o carvão.",
    "O porco é gordo.|Eu parto o pão.|A porta abriu.|O verde é bonito.|O porco dormiu.",
    "porta verde carta forte perto curto",
    "porta=abrimos para entrar|verde=a cor do mato|carta=escrevemos e mandamos pelo correio|forte=com muita força|perto=bem pertinho|curto=o contrário de comprido",
  ],
  [
    "Encontros com L: AL, EL, IL, OL, UL",
    "O sol é do Marcelo.",
    "O sol é quente.|O papel é branco.|O sal é salgado.|O anel é de ouro.|O sol brilhou.",
    "sol sal papel anel funil almoço",
    "sol=ilumina e esquenta o dia|sal=deixa a comida salgada|papel=escrevemos nele|anel=usamos no dedo|funil=serve para passar líquido|almoço=comida do meio-dia",
  ],
  [
    "Encontros BR, CR, DR",
    "O braço do dragão é bravo.",
    "O braço é forte.|O dragão é bravo.|A cruz é branca.|Eu abro a porta.|O dragão voou.",
    "braço dragão cruz brinco livro cobra",
    "braço=parte do corpo com a mão na ponta|dragão=bicho de história que solta fogo|cruz=duas linhas que se cruzam|brinco=usamos na orelha|livro=lemos histórias nele|cobra=animal comprido sem perna",
  ],
  [
    "Encontros FL, PL, CL",
    "A flor da planta é clara.",
    "A flor é bonita.|A planta cresceu.|A classe é minha.|Eu plantei a flor.|A flor abriu.",
    "flor planta classe clara flauta plano",
    "flor=nasce na planta e é colorida|planta=nasce da terra e é verde|classe=a sala de aula|clara=bem iluminada|flauta=instrumento que soprarmos|plano=o que a gente combina fazer",
  ],
  [
    "Encontros GR, TR, PR",
    "O trem grande do prato.",
    "O trem é grande.|O prato é meu.|A grama é verde.|Eu trouxe o prato.|O trem passou.",
    "trem grande prato grama três prego",
    "trem=anda nos trilhos e leva gente|grande=o contrário de pequeno|prato=comemos nele|grama=capim verde do quintal|três=vem depois do dois|prego=martelamos na madeira",
  ],
  [
    "Bilhete e lista",
    "Eu escrevo um bilhete para a mamãe.",
    "Escrevo o bilhete.|Faço a lista.|Compro pão e leite.|Escrevo meu nome.|Entrego o bilhete.",
    "bilhete lista nome pão leite compra",
    "bilhete=recadinho escrito para alguém|lista=os nomes um embaixo do outro|nome=como chamamos a pessoa|pão=comemos no café da manhã|leite=vem da vaca e é branco|compra=quando vamos ao mercado",
  ],
  [
    "Frase com ponto final",
    "Eu escrevo e coloco o ponto.",
    "O gato dorme.|A mamãe chegou.|Eu brinco no quintal.|O sol apareceu.|Nós comemos bolo.",
    "ponto frase letra maiúscula espaço final",
    "ponto=bolinha que fecha a frase|frase=palavras juntas que dizem uma ideia|letra=pedacinho da palavra|maiúscula=a letra grande do começo|espaço=o buraquinho entre as palavras|final=onde a coisa termina",
  ],
  [
    "Escrita livre — eu sou autor",
    "Eu já sou escritor de verdade!",
    "Eu invento a história.|Eu escrevo o começo.|Eu escrevo o meio.|Eu escrevo o fim.|Eu leio para a família.",
    "história começo meio fim autor escritor",
    "história=uma narrativa com começo e fim|começo=onde tudo se inicia|meio=o pedaço do centro|fim=onde termina|autor=quem inventa a história|escritor=quem escreve livros",
  ],
];

export const SEMANAS_ESCRITA: SemanaEscrita[] = LINHAS.map((l, i) => ({
  semana: i + 1,
  foco: l[0],
  fraseSemana: l[1],
  frasesDia: l[2].split("|"),
  palavrasLousa: l[3].split(" "),
  ditado: l[4].split("|").map((d) => {
    const [palavra, dica] = d.split("=");
    return { palavra, dica };
  }),
}));

/** Semana do ano letivo (1..40) a partir da data de início salva. */
export function semanaAtual(inicio: Date, hoje = new Date()): number {
  const ms = hoje.getTime() - inicio.getTime();
  const semanas = Math.floor(ms / (7 * 24 * 60 * 60 * 1000));
  return Math.min(SEMANAS_ESCRITA.length, Math.max(1, semanas + 1));
}

export function conteudoDaSemana(n: number): SemanaEscrita {
  const idx = Math.min(SEMANAS_ESCRITA.length, Math.max(1, n)) - 1;
  return SEMANAS_ESCRITA[idx];
}

/** Frase do dia: segunda=0 ... sexta=4. Fim de semana repete a última. */
export function fraseDoDia(sem: SemanaEscrita, weekday = new Date().getDay()): string {
  const idx = weekday === 0 || weekday === 6 ? 4 : weekday - 1;
  return sem.frasesDia[Math.min(idx, sem.frasesDia.length - 1)];
}
