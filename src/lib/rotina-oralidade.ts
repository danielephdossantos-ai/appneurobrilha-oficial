// Conversa e Oralidade em sala/casa — complemento da Rotina de Escrita Diária (1º ano).
// A oralidade é a base da alfabetização: a criança precisa ouvir, argumentar,
// recontar e montar a frase falando antes de colocá-la no papel.
// 40 semanas — uma roda de conversa, um reconto, uma entrevista e uma apresentação.

export interface SemanaOralidade {
  semana: number;
  tema: string; // tema da roda de conversa
  perguntaRoda: string;
  reconto: string; // o que a criança reconta
  entrevista: string[]; // 2 perguntas para fazer a alguém
  apresentacao: string; // o desenho que ela mostra e explica
}

// [tema, perguntaRoda, reconto, pergunta1|pergunta2, apresentacao]
type LinhaOral = [string, string, string, string, string];

const LINHAS: LinhaOral[] = [
  ["Quem sou eu", "Qual é o seu nome inteiro e de que você mais gosta?", "Conte como foi o seu dia de hoje, do começo ao fim.", "Qual é o seu nome inteiro?|Do que você mais gosta de brincar?", "Desenhe você mesmo e explique como você é."],
  ["Minha família", "Quem mora na sua casa?", "Reconte uma coisa engraçada que alguém da sua família fez.", "Quantas pessoas moram na sua casa?|Quem cuida de você?", "Desenhe sua família e diga o nome de cada um."],
  ["Meus brinquedos", "Qual é o seu brinquedo preferido e por quê?", "Reconte como você brincou ontem.", "Qual é o seu brinquedo preferido?|Você empresta seus brinquedos?", "Desenhe seu brinquedo e explique como se brinca com ele."],
  ["Animais", "Se você pudesse ter um bicho, qual seria?", "Reconte a história de um bicho que você já ouviu.", "Você tem algum bicho em casa?|Qual bicho te dá medo?", "Desenhe um animal e conte três coisas sobre ele."],
  ["Comida", "Qual comida você mais gosta e qual não gosta?", "Reconte como é feita a sua comida preferida.", "O que você come no café da manhã?|Qual fruta você prefere?", "Desenhe seu prato preferido e explique o que tem nele."],
  ["A escola", "O que você mais gosta de fazer na escola?", "Reconte o que aconteceu na escola hoje.", "Quem é seu amigo na escola?|O que você aprendeu hoje?", "Desenhe sua sala de aula e mostre onde você senta."],
  ["Meus amigos", "O que é ser um bom amigo?", "Reconte uma brincadeira que você fez com um amigo.", "Quem é seu melhor amigo?|Do que vocês brincam juntos?", "Desenhe você com um amigo e explique a cena."],
  ["A rua onde moro", "Como é a rua da sua casa?", "Reconte o caminho de casa até a escola.", "Você mora em casa ou apartamento?|O que tem perto da sua casa?", "Desenhe sua casa e explique o que tem em volta."],
  ["Cores e formas", "Qual é a sua cor preferida? Onde ela aparece?", "Reconte onde você viu essa cor hoje.", "Qual cor você não gosta?|Que coisa é redonda na sua casa?", "Desenhe usando só a sua cor preferida e explique."],
  ["O tempo", "Você gosta mais de sol ou de chuva? Por quê?", "Reconte um dia de chuva que você lembra.", "Como está o tempo hoje?|O que você faz quando chove?", "Desenhe um dia de sol e um de chuva e compare."],
  ["Histórias que ouvi", "Qual história você mais gosta de ouvir?", "Reconte a história com começo, meio e fim.", "Quem conta histórias para você?|Qual personagem você gosta?", "Desenhe o personagem preferido e explique quem é."],
  ["Sentimentos", "O que te deixa feliz? E o que te deixa triste?", "Reconte um dia em que você ficou muito feliz.", "O que te dá medo?|O que você faz quando fica bravo?", "Desenhe uma carinha de sentimento e explique."],
  ["Meu corpo", "Para que servem as nossas mãos?", "Reconte como você se arruma de manhã.", "Qual sua mão mais forte?|O que você escuta agora?", "Desenhe seu corpo e mostre as partes que você conhece."],
  ["Brincadeiras antigas", "Qual brincadeira sua mãe ou avó brincava?", "Reconte a brincadeira que alguém te ensinou.", "Que brincadeira você quer aprender?|Você brinca na rua?", "Desenhe a brincadeira e explique as regras."],
  ["Profissões", "O que você quer ser quando crescer?", "Reconte o que faz a pessoa dessa profissão.", "No que trabalha alguém da sua casa?|Qual trabalho te parece difícil?", "Desenhe você trabalhando e explique o que faz."],
  ["Natureza", "O que você vê quando olha uma árvore?", "Reconte um passeio que você fez ao ar livre.", "Você já plantou algo?|Qual planta você conhece?", "Desenhe uma planta e explique as partes dela."],
  ["Ajudar em casa", "Como você ajuda em casa?", "Reconte uma tarefa que você fez sozinho.", "Você arruma sua cama?|O que você guarda sozinho?", "Desenhe você ajudando e explique a cena."],
  ["Música", "Qual música você gosta de cantar?", "Reconte a letra da música com suas palavras.", "Você sabe alguma cantiga?|Qual instrumento você gosta?", "Desenhe um instrumento e explique o som dele."],
  ["Viagem e passeio", "Para onde você gostaria de ir?", "Reconte um passeio que você já fez.", "Você já andou de ônibus?|Onde você quer passear?", "Desenhe o lugar do passeio e explique o que tem lá."],
  ["Dia e noite", "O que você faz de dia e o que faz de noite?", "Reconte sua rotina da noite até dormir.", "A que horas você dorme?|Com o que você sonhou?", "Desenhe o dia e a noite e explique a diferença."],
  ["Cuidar de mim", "Por que a gente lava as mãos?", "Reconte como você toma banho, na ordem.", "Quantas vezes escova os dentes?|Quando lava as mãos?", "Desenhe você se cuidando e explique."],
  ["Números na vida", "Onde você vê números na sua casa?", "Reconte quantas coisas você contou hoje.", "Quantos anos você tem?|Quantos dedos tem em duas mãos?", "Desenhe algo com números e explique."],
  ["Contos de fada", "Qual conto de fada você conhece?", "Reconte o conto: começo, problema e fim.", "Quem é o herói da história?|O que você mudaria nela?", "Desenhe a cena preferida e explique o que acontece."],
  ["Regras e combinados", "Por que existem regras?", "Reconte as regras da sua casa.", "Qual regra você acha difícil?|Que regra tem na escola?", "Desenhe um combinado da turma e explique."],
  ["Meio ambiente", "O que a gente faz com o lixo?", "Reconte onde vai cada tipo de lixo.", "Você separa o lixo?|Como economizar água?", "Desenhe um lugar limpo e um sujo e compare."],
  ["Festas", "Qual festa você mais gosta?", "Reconte uma festa em que você esteve.", "Como foi seu aniversário?|Que comida tem na festa?", "Desenhe a festa e explique quem estava lá."],
  ["Diferenças", "Todo mundo é igual? Por quê?", "Reconte algo que um amigo faz melhor que você.", "No que você é bom?|No que precisa de ajuda?", "Desenhe você e um amigo e mostre as diferenças."],
  ["Meios de transporte", "Como você vai para a escola?", "Reconte o trajeto até a escola.", "Você já andou de trem?|Qual transporte é mais rápido?", "Desenhe um transporte e explique como funciona."],
  ["Notícias do dia", "O que aconteceu de novo hoje?", "Reconte uma notícia que ouviu de um adulto.", "O que você viu na TV?|O que te deixou curioso?", "Desenhe a notícia e explique como se fosse repórter."],
  ["Perguntas curiosas", "Por que o céu é azul? O que você acha?", "Reconte uma explicação que alguém te deu.", "O que você quer descobrir?|A quem você pergunta?", "Desenhe sua curiosidade e explique a pergunta."],
  ["Convite e recado", "Como a gente convida alguém?", "Reconte um recado que você deu para alguém.", "Você já deu recado?|Quem você convidaria?", "Desenhe um convite e leia em voz alta."],
  ["Trava-línguas", "Você consegue falar rápido sem errar?", "Reconte o trava-língua devagar e depois rápido.", "Qual parte é difícil de falar?|Quer inventar um?", "Desenhe o que o trava-língua fala e explique."],
  ["Poesia e rima", "Que palavra rima com o seu nome?", "Reconte um poema curto com suas palavras.", "Qual rima você inventou?|Qual poema você gosta?", "Desenhe a imagem do poema e explique."],
  ["Se eu pudesse", "Se você tivesse um superpoder, qual seria?", "Reconte o que faria com esse poder.", "Qual herói você gosta?|O que é ser corajoso?", "Desenhe seu super-herói e explique o poder."],
  ["Meu quarto", "Como é o lugar onde você dorme?", "Reconte o que tem no seu quarto, um por um.", "Onde ficam seus brinquedos?|Você divide o quarto?", "Desenhe seu quarto e explique cada canto."],
  ["Dar opinião", "Você acha melhor brincar sozinho ou junto? Por quê?", "Reconte uma escolha que você fez hoje.", "Você prefere praia ou parque?|Por que você prefere?", "Desenhe sua escolha e explique o motivo."],
  ["Contar um problema", "O que você faz quando algo dá errado?", "Reconte um problema e como resolveu.", "Quem te ajuda?|Você já pediu desculpa?", "Desenhe o problema e a solução e explique."],
  ["Explicar como se faz", "Como se faz um sanduíche? Explique passo a passo.", "Reconte o passo a passo na ordem certa.", "O que você sabe fazer sozinho?|Quer ensinar alguém?", "Desenhe os passos em ordem e explique."],
  ["Recontar o livro lido", "Qual livro você leu esta semana?", "Reconte o livro inteiro com suas palavras.", "Quem é o personagem principal?|Como termina?", "Desenhe a capa do livro e apresente para a família."],
  ["Eu já sei falar bem", "O que você aprendeu neste ano?", "Reconte seu ano: o que mais gostou.", "O que foi mais difícil?|Do que você se orgulha?", "Desenhe você no fim do ano e apresente para todos."],
];

export const SEMANAS_ORALIDADE: SemanaOralidade[] = LINHAS.map((l, i) => ({
  semana: i + 1,
  tema: l[0],
  perguntaRoda: l[1],
  reconto: l[2],
  entrevista: l[3].split("|"),
  apresentacao: l[4],
}));

export function oralidadeDaSemana(n: number): SemanaOralidade {
  const idx = Math.min(SEMANAS_ORALIDADE.length, Math.max(1, n)) - 1;
  return SEMANAS_ORALIDADE[idx];
}
