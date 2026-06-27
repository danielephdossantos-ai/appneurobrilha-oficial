import type { KidsLesson, KidsScene } from "../types/kids-lesson";

/**
 * Banco de aulas Kids para códigos compartilhados "1º ao 2º Ano"
 * (EF12LP01..EF12LP19). Mesmo template visual do 1º e 2º Ano:
 * intro / concept / usecase / summary / celebrate.
 */

function mk(
  codigo: string,
  titulo: string,
  scenes: KidsScene[],
  xp = 120,
): KidsLesson {
  return {
    codigo_bncc: codigo,
    titulo,
    disciplina: "Língua Portuguesa",
    serie: "1º ao 2º Ano",
    xp,
    cor: "pink",
    scenes,
  };
}

const L: Record<string, KidsLesson> = {
  EF12LP01: mk("EF12LP01", "Ler palavras novas", [
    { kind: "intro", mascot: "pip", titulo: "Vamos ler!", fala: "Hoje a gente aprende a ler palavras novas decifrando letrinha por letrinha." },
    { kind: "concept", titulo: "Decodificar", emoji: "🔎", fala: "Decodificar é olhar cada letra, juntar os sons e formar a palavra." },
    { kind: "concept", titulo: "Fala devagar", simbolo: "B-O-L-A", fala: "Vá devagar: B, O, L, A. Aí junta: BOLA!" },
    { kind: "concept", titulo: "Palavras que a gente já viu", emoji: "👀", fala: "Palavras que aparecem muito (CASA, MAMÃE) a gente lê de uma vez, sem soletrar." },
    { kind: "usecase", titulo: "Onde a gente lê?", cenas: [
      { emoji: "📖", texto: "Livros de história" },
      { emoji: "🪧", texto: "Placas da rua" },
      { emoji: "📦", texto: "Caixas e rótulos" },
    ], fala: "A leitura está em todo canto!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Letra vira som", "Som junto vira palavra", "Palavras conhecidas a gente lê direto"], fala: "Boa leitura!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cento e vinte de experiência." },
  ]),
  EF12LP02: mk("EF12LP02", "Escolher o que ler", [
    { kind: "intro", mascot: "pipa", titulo: "Cada texto serve pra algo", fala: "A gente escolhe o que ler conforme o que quer descobrir." },
    { kind: "concept", titulo: "Quero divertir?", emoji: "📚", fala: "Pegue uma história, um conto, uma quadrinha." },
    { kind: "concept", titulo: "Quero aprender?", emoji: "🧠", fala: "Procure livros que explicam, enciclopédias, vídeos legendados." },
    { kind: "concept", titulo: "Quero saber notícia?", emoji: "📰", fala: "Vá na notícia ou no jornalzinho da escola." },
    { kind: "usecase", titulo: "Onde a gente acha?", cenas: [
      { emoji: "🏫", texto: "Biblioteca" },
      { emoji: "🏠", texto: "Estante de casa" },
      { emoji: "💻", texto: "Internet com o adulto" },
    ], fala: "Sempre com a ajuda de um adulto." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Cada texto tem um motivo", "Escolha pelo objetivo", "Peça ajuda ao adulto"], fala: "Leitor esperto!" },
    { kind: "celebrate", titulo: "Mandou bem!", fala: "Cento e vinte de experiência pra você." },
  ]),
  EF12LP03: mk("EF12LP03", "Copiar um texto", [
    { kind: "intro", mascot: "pip", titulo: "Copiar com capricho", fala: "Copiar ajuda a memorizar palavras e a treinar a letra." },
    { kind: "concept", titulo: "Olhe a palavra inteira", emoji: "👁️", fala: "Antes de escrever, olhe a palavra toda. Não copie uma letra de cada vez." },
    { kind: "concept", titulo: "Volte conferir", emoji: "🔁", fala: "Depois que copiou, volte no original pra ver se ficou igual." },
    { kind: "concept", titulo: "Mantenha o espaço", simbolo: "o gato corre", fala: "Lembre do espaço entre as palavras, igual no texto original." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Olhar a palavra toda", "Voltar pra conferir", "Respeitar os espaços"], fala: "Que capricho!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Mais cento e vinte de experiência." },
  ]),
  EF12LP04: mk("EF12LP04", "Entender o que leio", [
    { kind: "intro", mascot: "pipa", titulo: "Ler é entender", fala: "Não basta ler as palavras. Tem que entender o que o texto está contando." },
    { kind: "concept", titulo: "Quem? O quê?", emoji: "❓", fala: "Pergunte: quem aparece? O que acontece?" },
    { kind: "concept", titulo: "Onde? Quando?", emoji: "📍", fala: "Veja o lugar e o momento da história." },
    { kind: "concept", titulo: "Imagine a cena", emoji: "🎬", fala: "Faça um filminho na cabeça. Ajuda demais a entender." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Perguntar quem e o quê", "Onde e quando", "Imaginar a cena"], fala: "Boa interpretação!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP05: mk("EF12LP05", "Recontar uma história", [
    { kind: "intro", mascot: "pip", titulo: "Conte do seu jeito", fala: "Recontar é contar de novo a história que você leu ou ouviu." },
    { kind: "concept", titulo: "Começo", emoji: "🌅", fala: "Diga quem é o personagem e onde estava." },
    { kind: "concept", titulo: "Meio", emoji: "⚡", fala: "Conte o que aconteceu. O problema, a aventura…" },
    { kind: "concept", titulo: "Fim", emoji: "🏁", fala: "Como tudo terminou? Foi feliz? Surpresa?" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Começo, meio e fim", "Personagens e lugar", "Contar com suas palavras"], fala: "Que contador!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP06: mk("EF12LP06", "Escrever um recado", [
    { kind: "intro", mascot: "pipa", titulo: "Recado curto e claro", fala: "Recado serve pra avisar alguma coisa rapidinho." },
    { kind: "concept", titulo: "Pra quem?", emoji: "👤", fala: "Comece dizendo pra quem é. 'Mãe,' 'Profe,'." },
    { kind: "concept", titulo: "O que avisar?", emoji: "💬", fala: "Diga o aviso de um jeito curto e direto." },
    { kind: "concept", titulo: "Quem mandou?", emoji: "✍️", fala: "No final, escreva seu nome." },
    { kind: "usecase", titulo: "Exemplos de recado", cenas: [
      { emoji: "📝", texto: "Bilhete na geladeira" },
      { emoji: "📱", texto: "Mensagem rápida" },
      { emoji: "🗒️", texto: "Lembrete na escola" },
    ], fala: "A gente usa recado todo dia!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Pra quem é", "O que avisar", "Quem mandou"], fala: "Recadeiro de primeira!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP07: mk("EF12LP07", "Cantigas e parlendas", [
    { kind: "intro", mascot: "pip", titulo: "Brincar com palavras", fala: "Cantigas, quadrinhas e parlendas brincam com sons e rimas." },
    { kind: "concept", titulo: "Rima", simbolo: "balão / mão", fala: "Rima é quando o fim das palavras tem o mesmo som." },
    { kind: "concept", titulo: "Ritmo", emoji: "🥁", fala: "Tem um tempinho marcado. Dá pra bater palma no compasso." },
    { kind: "concept", titulo: "Repetição", emoji: "🔁", fala: "Várias têm partes que se repetem. Isso ajuda a decorar." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Rima é som igual no fim", "Tem ritmo certinho", "Partes se repetem"], fala: "Musical demais!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP08: mk("EF12LP08", "Foto com legenda", [
    { kind: "intro", mascot: "pipa", titulo: "A foto fala junto", fala: "Quando a foto tem uma legendinha embaixo, a gente entende muito mais." },
    { kind: "concept", titulo: "O que é legenda?", emoji: "🖼️", fala: "É a frase curtinha que explica o que está na foto." },
    { kind: "concept", titulo: "Quem? Onde?", emoji: "❓", fala: "Boa legenda diz quem aparece e onde foi tirada." },
    { kind: "concept", titulo: "Frase curta", emoji: "✂️", fala: "Não precisa ser texto grande. Uma frase já basta." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Legenda explica a foto", "Quem aparece e onde", "Frase bem curta"], fala: "Que olho de jornalista!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP09: mk("EF12LP09", "Anúncios e slogans", [
    { kind: "intro", mascot: "pip", titulo: "Olha a propaganda!", fala: "Anúncios usam frases e desenhos pra chamar nossa atenção." },
    { kind: "concept", titulo: "Slogan", simbolo: "‘Amo de paixão!’", fala: "Slogan é uma frase curtinha que a gente lembra fácil." },
    { kind: "concept", titulo: "Imagem chamativa", emoji: "🎨", fala: "Cores fortes e desenhos grandes pra puxar o olhar." },
    { kind: "concept", titulo: "Pensar antes", emoji: "🤔", fala: "Nem tudo que aparece em propaganda a gente precisa comprar." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Slogan é frase curta", "Imagem chama atenção", "Pensar antes de comprar"], fala: "Esperto!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP10: mk("EF12LP10", "Cartaz e aviso", [
    { kind: "intro", mascot: "pipa", titulo: "Cartaz é pra todo mundo ver", fala: "Cartazes e avisos passam um recado importante pra muita gente." },
    { kind: "concept", titulo: "Letras grandes", emoji: "🔠", fala: "Letras grandes pra ler de longe." },
    { kind: "concept", titulo: "Frase curta", emoji: "✂️", fala: "Mensagem direta, sem enrolação." },
    { kind: "concept", titulo: "Desenho ajuda", emoji: "🖼️", fala: "Um desenho ou foto reforça o aviso." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Letras grandes", "Frase curta", "Desenho ajuda"], fala: "Cartaz nota dez!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP11: mk("EF12LP11", "Escrever a legenda da foto", [
    { kind: "intro", mascot: "pip", titulo: "Sua vez de escrever", fala: "Agora você vai colocar a frase embaixo de uma foto." },
    { kind: "concept", titulo: "Olhe a foto", emoji: "👀", fala: "Veja o que tem nela: pessoas, lugar, ação." },
    { kind: "concept", titulo: "Frase curta", emoji: "✏️", fala: "Em uma frase, conte o que está acontecendo." },
    { kind: "concept", titulo: "Ponto no fim", simbolo: ".", fala: "Não esqueça o ponto final pra fechar." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Olhar a foto", "Frase curta", "Ponto no fim"], fala: "Legendista!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP12: mk("EF12LP12", "Escrever um slogan", [
    { kind: "intro", mascot: "pipa", titulo: "Frase que gruda", fala: "Slogan bom é o que a gente nunca esquece." },
    { kind: "concept", titulo: "Curtinho", emoji: "✂️", fala: "Use poucas palavras. Quanto mais curto, melhor." },
    { kind: "concept", titulo: "Rima ajuda", emoji: "🎶", fala: "Uma rimazinha faz a frase grudar na cabeça." },
    { kind: "concept", titulo: "Sentimento", emoji: "❤️", fala: "Mostre algo que a gente sente: alegria, força, carinho." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Curto", "Com rima se der", "Mostra sentimento"], fala: "Publicitário mirim!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP13: mk("EF12LP13", "Planejar uma campanha", [
    { kind: "intro", mascot: "pip", titulo: "Vamos avisar todo mundo", fala: "Campanha é quando a gente cria várias coisas pra passar uma ideia importante." },
    { kind: "concept", titulo: "Qual a ideia?", emoji: "💡", fala: "Defina antes: economizar água? Cuidar dos amigos?" },
    { kind: "concept", titulo: "Quem vai ver?", emoji: "👥", fala: "Pense em quem precisa ouvir essa mensagem." },
    { kind: "concept", titulo: "Onde colocar?", emoji: "📍", fala: "Cartaz na parede, vídeo no celular, slogan no caderno." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Escolher a ideia", "Pensar em quem vai ver", "Decidir onde mostrar"], fala: "Plano firme!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP14: mk("EF12LP14", "Como é uma fotolegenda", [
    { kind: "intro", mascot: "pipa", titulo: "Foto + frase = informa", fala: "Foto com legenda aparece em jornais, livros e álbuns." },
    { kind: "concept", titulo: "Foto em cima", emoji: "🖼️", fala: "A imagem fica em cima ou ao lado da frase." },
    { kind: "concept", titulo: "Legenda embaixo", emoji: "🔤", fala: "A frase explicando vem geralmente embaixo da foto." },
    { kind: "concept", titulo: "Letra menor", emoji: "🔠", fala: "A legenda costuma vir em letrinha menor que o título." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Foto em cima", "Legenda embaixo", "Letra menor"], fala: "Olho clínico!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP15: mk("EF12LP15", "Como é feito um slogan", [
    { kind: "intro", mascot: "pip", titulo: "Por dentro do slogan", fala: "Vamos olhar como o slogan é montado por dentro." },
    { kind: "concept", titulo: "Bem curto", emoji: "✂️", fala: "Quase sempre só uma frase de poucas palavras." },
    { kind: "concept", titulo: "Som bonito", emoji: "🎵", fala: "Pode ter rima, repetição de sons, palavras parecidas." },
    { kind: "concept", titulo: "Promete algo", emoji: "🎁", fala: "Sugere uma vantagem: ‘mais sabor’, ‘mais alegria’." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Curto", "Som bonito", "Promete uma vantagem"], fala: "Sacou tudo!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP16: mk("EF12LP16", "Campanhas que ensinam", [
    { kind: "intro", mascot: "pipa", titulo: "Propaganda do bem", fala: "Algumas campanhas servem pra ensinar a cuidar das pessoas e do mundo." },
    { kind: "concept", titulo: "Saúde", emoji: "💉", fala: "Vacinar, lavar a mão, escovar os dentes." },
    { kind: "concept", titulo: "Trânsito", emoji: "🚸", fala: "Atravessar na faixa, usar cinto, capacete." },
    { kind: "concept", titulo: "Natureza", emoji: "🌿", fala: "Economizar água, não jogar lixo no chão." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Campanha pode ensinar", "Cuida da saúde, trânsito, natureza", "Mensagem clara"], fala: "Cidadão consciente!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP17: mk("EF12LP17", "Ler o que a tarefa pede", [
    { kind: "intro", mascot: "pip", titulo: "Antes de responder, ler bem", fala: "Pra acertar, a gente precisa entender direitinho o que a tarefa pede." },
    { kind: "concept", titulo: "Leia tudo", emoji: "📖", fala: "Leia o enunciado inteiro, sem pular nenhuma palavra." },
    { kind: "concept", titulo: "Palavra-chave", emoji: "🔑", fala: "Marque as palavras que dizem o que fazer: ‘pinte’, ‘ligue’, ‘escreva’." },
    { kind: "concept", titulo: "Releia se precisar", emoji: "🔁", fala: "Não entendeu? Sem pressa: leia de novo." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Ler tudo", "Achar a palavra-chave", "Reler com calma"], fala: "Aluno atento!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP18: mk("EF12LP18", "Curtindo poemas", [
    { kind: "intro", mascot: "pipa", titulo: "Poema é música escrita", fala: "Poemas têm som bonito e mexem com a gente." },
    { kind: "concept", titulo: "Versos", emoji: "📜", fala: "Cada linha do poema é um verso." },
    { kind: "concept", titulo: "Estrofes", emoji: "🧱", fala: "Conjuntos de versos juntinhos formam estrofes." },
    { kind: "concept", titulo: "Rima", simbolo: "estrela / janela", fala: "Muitos poemas têm rimas no fim dos versos." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Linha = verso", "Bloco = estrofe", "Rima dá musicalidade"], fala: "Poeta!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
  EF12LP19: mk("EF12LP19", "Sons e rimas no poema", [
    { kind: "intro", mascot: "pip", titulo: "Brincando com o som", fala: "Poemas brincam com sons das palavras." },
    { kind: "concept", titulo: "Rima no fim", simbolo: "mar / cantar", fala: "Palavras com som parecido no fim do verso." },
    { kind: "concept", titulo: "Repetição", emoji: "🔁", fala: "Palavras que voltam várias vezes pra dar ritmo." },
    { kind: "concept", titulo: "Aliteração", simbolo: "Pip pula peteca", fala: "Várias palavras começando com o mesmo som." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Rima no fim", "Repetição dá ritmo", "Sons parecidos no começo"], fala: "Ouvido afinado!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Cento e vinte de experiência." },
  ]),
};

export function getKidsLessons12Ano(codigo: string | undefined): KidsLesson[] {
  if (!codigo) return [];
  const l = L[codigo];
  return l ? [l] : [];
}
