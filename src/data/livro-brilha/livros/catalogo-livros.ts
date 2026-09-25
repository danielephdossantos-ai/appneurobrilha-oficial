import type { Livro } from "@/components/livro-brilha/tipos";
import { catalogo } from "@/data/livro-brilha/catalogo";
import { historias } from "@/data/livro-brilha/historias";

const cenarioPorTema: Record<string, string[]> = {
  Amizade: ["parque", "bosque", "praca"], Emoções: ["quarto", "sala", "jardim"], Natureza: ["jardim", "horta", "bosque"],
  Rotina: ["cozinha", "sala", "quarto"], Números: ["numeros", "sala-aula", "parque"], Animais: ["animais", "bosque", "fazenda"],
  Coragem: ["quarto", "trilha", "parque-aventuras"], Cores: ["cores", "arte", "jardim"], Formas: ["numeros", "sala-aula", "cidade"],
  Higiene: ["banheiro", "quarto", "consultorio"], Alimentação: ["cozinha", "supermercado", "horta"], "Corpo humano": ["consultorio", "sala-aula", "parque"],
  Escola: ["escola", "sala-aula", "biblioteca"], Família: ["sala", "cozinha", "jardim"], Rimas: ["musica", "letras", "bosque"],
  Sílabas: ["letras", "sala-aula", "biblioteca"], Letras: ["letras", "biblioteca", "escola"], Palavras: ["biblioteca", "letras", "escola"],
  Sons: ["floresta", "musica", "lagoa"], "Meio ambiente": ["trilha", "floresta", "cidade"], Diferenças: ["parque", "escola", "cores"],
  Inclusão: ["escola", "parque", "cidade"], Cooperação: ["parque-aventuras", "praca", "escola"], "Resolução de problemas": ["trilha", "parque-aventuras", "acampamento"],
  Imaginação: ["fantasia", "ceu", "castelo"], Música: ["musica", "praca", "escola"], Movimento: ["parque", "parque-aventuras", "praca"],
  Espaço: ["quarto", "sala-aula", "parque-aventuras"], "Animais brasileiros": ["trilha", "floresta", "animais"], Profissões: ["cidade", "hospital", "escola"],
  Comunidade: ["supermercado", "praca", "cidade"], Sentimentos: ["quarto", "sala", "parque"], Responsabilidade: ["horta", "jardim", "sala"],
  Gentileza: ["praca", "escola", "sala"], Criatividade: ["arte", "fantasia", "castelo"], "Alimentação saudável": ["supermercado", "cozinha", "horta"],
  Segurança: ["cidade", "praca", "escola"], Sustentabilidade: ["horta", "escola", "jardim"], Aventura: ["trilha", "acampamento", "parque-aventuras"],
  "Mistério leve": ["cozinha", "sala", "jardim"], "Histórias musicais": ["musica", "fantasia", "praca"], Repetição: ["parque", "sala-aula", "musica"],
  Memória: ["biblioteca", "sala", "fantasia"], Revisão: ["fantasia", "parque-aventuras", "castelo"],
};

const palavraPorTema: Record<string, string> = {
  Amizade: "AMIGO", Emoções: "CARINHO", Natureza: "PLANTA", Rotina: "DIA", Números: "CONTAR", Animais: "BICHO", Coragem: "CORAGEM",
  Cores: "COR", Formas: "FORMA", Higiene: "LIMPO", Alimentação: "PRATO", "Corpo humano": "CORPO", Escola: "ESCOLA", Família: "FAMÍLIA",
  Rimas: "RIMA", Sílabas: "PALAVRA", Letras: "LETRA", Palavras: "PALAVRA", Sons: "SOM", "Meio ambiente": "CUIDAR", Diferenças: "JEITO",
  Inclusão: "JUNTOS", Cooperação: "AJUDAR", "Resolução de problemas": "TENTAR", Imaginação: "IMAGINAR", Música: "TAMBOR", Movimento: "PULAR",
  Espaço: "DENTRO", "Animais brasileiros": "ONÇA", Profissões: "TRABALHO", Comunidade: "FEIRA", Sentimentos: "CALMA", Responsabilidade: "CUIDAR",
  Gentileza: "OBRIGADO", Criatividade: "PINCEL", "Alimentação saudável": "FRUTA", Segurança: "CUIDADO", Sustentabilidade: "HORTA",
  Aventura: "MAPA", "Mistério leve": "PISTA", "Histórias musicais": "CANÇÃO", Repetição: "DE NOVO", Memória: "LEMBRAR", Revisão: "APRENDER",
};

const objetivoPorTema: Record<string, string> = {
  Amizade: "escutar e cooperar com os amigos", Emoções: "reconhecer e acolher sentimentos", Natureza: "observar e cuidar da natureza",
  Rotina: "organizar acontecimentos do dia", Números: "contar e comparar quantidades", Animais: "observar os animais e seus movimentos",
  Coragem: "enfrentar desafios com calma", Cores: "reconhecer e combinar cores", Formas: "identificar formas no cotidiano",
  Higiene: "praticar hábitos de cuidado", Alimentação: "conhecer alimentos variados", "Corpo humano": "perceber sinais do próprio corpo",
  Escola: "participar e aprender em grupo", Família: "valorizar histórias e vínculos", Rimas: "perceber palavras que terminam parecido",
  Sílabas: "separar palavras em partes sonoras", Letras: "reconhecer letras e seus sons", Palavras: "ampliar o vocabulário",
  Sons: "ouvir e comparar sons", "Meio ambiente": "cuidar dos espaços compartilhados", Diferenças: "respeitar diferentes jeitos de ser",
  Inclusão: "garantir que todos participem", Cooperação: "resolver tarefas em conjunto", "Resolução de problemas": "testar soluções com persistência",
  Imaginação: "criar novas possibilidades", Música: "perceber ritmo e intensidade", Movimento: "seguir comandos corporais",
  Espaço: "compreender posições e direções", "Animais brasileiros": "conhecer animais do Brasil", Profissões: "conhecer trabalhos da comunidade",
  Comunidade: "participar dos espaços do bairro", Sentimentos: "nomear sentimentos e buscar calma", Responsabilidade: "cuidar do que depende de nós",
  Gentileza: "usar palavras gentis", Criatividade: "expressar ideias com arte", "Alimentação saudável": "fazer escolhas variadas",
  Segurança: "agir com atenção no trânsito", Sustentabilidade: "plantar e evitar desperdício", Aventura: "observar pistas e planejar caminhos",
  "Mistério leve": "investigar pistas e tirar conclusões", "Histórias musicais": "reconhecer padrões sonoros", Repetição: "aprender com repetição",
  Memória: "recordar detalhes e sequências", Revisão: "reunir aprendizagens das aventuras",
};

function dividir(palavra: string) {
  const limpo = palavra.split(" ")[0] ?? palavra;
  if (limpo.length <= 4) return [limpo];
  const meio = Math.ceil(limpo.length / 2);
  return [limpo.slice(0, meio), limpo.slice(meio)];
}

function adaptarHistoria(id: string, cenarios: string[]): Livro | null {
  const historia = historias[id];
  if (!historia) return null;
  const palavras = historia.aprendemos.palavras.split(",").map((p) => p.trim());
  return {
    id: historia.id,
    titulo: historia.titulo,
    ficha: {
      faixa: historia.faixa, objetivo: historia.objetivo,
      habilidades: historia.cenas.map((c) => c.habilidade), vocabulario: palavras,
      letrasSons: historia.aprendemos.sons, silabas: `Palavras da história: ${palavras.slice(0, 3).join(", ")}`,
      matematica: "Sequência, posição e contagem dentro da aventura", emocao: historia.aprendemos.emocao,
      jogos: ["Escolha", "Escuta", "Sequência", "Interpretação"], cenarios, personagens: historia.personagens.split(" · "),
      teatro: historia.teatro, final: "Relembrar a principal aprendizagem da aventura.",
    },
    cenas: historia.cenas.map((c, i) => ({
      titulo: c.titulo, cenario: cenarios[i % cenarios.length] ?? "jardim", ambiente: i % 3 === 0 ? ["brilho"] : i % 3 === 1 ? ["nuvens"] : [],
      narracao: c.narracao, atores: [],
      ensinar: [c.textoVisual, c.atividade.opcoes.find((o) => o.correta)?.texto ?? c.textoVisual],
      jogo: { tipo: "escolha", habilidade: c.habilidade, pergunta: c.atividade.pergunta, opcoes: c.atividade.opcoes, acerto: c.atividade.acerto, dicas: [c.atividade.dica] },
      objetivo: c.habilidade,
    })),
    aprendemos: [
      { titulo: "Palavras novas", itens: palavras }, { titulo: "Sons e linguagem", itens: [historia.aprendemos.sons] },
      { titulo: "Emoções", itens: [historia.aprendemos.emocao] }, { titulo: "Habilidade", itens: [historia.aprendemos.habilidade] },
    ],
    desafioFinal: {
      tipo: "escolha", habilidade: "Compreensão global", pergunta: "Qual foi a principal aprendizagem desta história?",
      opcoes: [{ texto: historia.aprendemos.habilidade, correta: true }, { texto: "Fazer tudo com muita pressa" }, { texto: "Não pedir ajuda a ninguém" }],
      acerto: "Muito bem! Você guardou a aprendizagem da história.", dicas: [`Pense no que mudou do começo até o final de ${historia.titulo}.`],
    },
  };
}


/** Enredo próprio de cada história: quem, onde, problema e solução (usados no texto e nas perguntas). */
type Enredo = { onde: string; problema: string; solucao: string };
const enredos: Record<number, Enredo> = {
  4: { onde: "na cozinha, na hora do café", problema: "cada um queria comer num lugar diferente e a mesa ficou vazia", solucao: "todos sentaram juntos na mesa redonda e dividiram o pão" },
  5: { onde: "no gelo, bem longe de casa", problema: "o gelo era escorregadio e ninguém conseguia andar", solucao: "deram as mãos e andaram devagar, um passinho de cada vez" },
  6: { onde: "na beira da lagoa", problema: "o sapo esquecia quantos saltos já tinha dado", solucao: "contou em voz alta: um, dois, três, quatro, cinco" },
  7: { onde: "numa folha do jardim", problema: "os outros bichos eram rápidos e a lagarta ficava para trás", solucao: "seguiu no seu tempo e virou uma linda borboleta" },
  8: { onde: "no quarto, quando a luz apagou", problema: "o escuro deu medo e o coração bateu forte", solucao: "acendeu a lanterna, abraçou o travesseiro e viu que era só a sombra da cadeira" },
  9: { onde: "no ateliê de cores", problema: "as tintas se misturaram e ninguém sabia o nome das cores", solucao: "separaram as cores: vermelho, azul, amarelo e verde" },
  10: { onde: "na sala de aula", problema: "as peças de montar caíram todas misturadas", solucao: "separaram os quadrados, os círculos e os triângulos" },
  11: { onde: "no banheiro", problema: "a girafa era tão alta que o chuveiro não alcançava o pescoço", solucao: "usou um regador comprido para lavar tudo, de cima a baixo" },
  12: { onde: "no banheiro, antes de dormir", problema: "a escova ficou esquecida e os dentes ficaram sujos", solucao: "escovou dançando: em cima, embaixo, na frente e atrás" },
  13: { onde: "na cozinha, na hora do almoço", problema: "o prato só tinha comida de uma cor", solucao: "colocou cenoura laranja, alface verde e tomate vermelho" },
  14: { onde: "no consultório", problema: "a barriga roncava e ninguém sabia o que o corpo queria dizer", solucao: "percebeu que era fome e comeu uma fruta" },
  15: { onde: "na escola do bosque", problema: "era o primeiro dia e ninguém sabia onde ficava a sala", solucao: "seguiu as placas com desenhos e chegou à sala certa" },
  16: { onde: "na sala da vovó", problema: "a história ficou toda misturada, sem começo nem fim", solucao: "a vovó contou de novo, em ordem: começo, meio e fim" },
  17: { onde: "na floresta, perto do tambor", problema: "o tatu não achava uma palavra que rimasse com mão", solucao: "descobriu que mão rima com pão, feijão e balão" },
  18: { onde: "na sala das letras", problema: "as sílabas PA, PE, PI e PO fugiram do cartaz", solucao: "chamou cada sílaba pelo som e todas voltaram ao lugar" },
  19: { onde: "na biblioteca", problema: "a letra A sumiu da palavra CASA", solucao: "procurou nos livros e colocou a letra A de volta" },
  20: { onde: "na escola", problema: "a mochila ficou pesada de tantas palavras", solucao: "separou as palavras em grupos e escreveu cada uma no caderno" },
  21: { onde: "na floresta", problema: "havia muitos sons ao mesmo tempo e era difícil ouvir", solucao: "fechou os olhos e ouviu um som de cada vez: pássaro, água e vento" },
  22: { onde: "no jardim, num dia nublado", problema: "a chuva começou e a brincadeira parou", solucao: "ouviu o barulho da chuva e inventou uma música com as gotas" },
  23: { onde: "na beira do rio", problema: "o rio estava cheio de lixo e os peixes estavam tristes", solucao: "os amigos recolheram o lixo e o rio voltou a brilhar" },
  24: { onde: "no parque", problema: "o lixo estava todo misturado no chão", solucao: "colocou papel, plástico e resto de comida no lixo certo" },
  25: { onde: "no pátio da escola", problema: "um amigo riu porque o outro era diferente", solucao: "todos descobriram que cada um tem um jeito especial" },
  26: { onde: "na escola", problema: "a porta da sala tinha um degrau e a cadeira de rodas não passava", solucao: "a turma pediu uma rampa e todos entraram juntos" },
  27: { onde: "no parque de aventuras", problema: "a caixa de brinquedos era pesada demais para uma pessoa só", solucao: "cada amigo segurou um lado e carregaram juntos" },
  28: { onde: "no portão da escola", problema: "era o primeiro dia e a vontade era voltar para casa", solucao: "segurou o balão, respirou fundo e fez um amigo novo" },
  29: { onde: "na trilha", problema: "a corda da mochila deu um nó bem apertado", solucao: "puxou uma ponta devagar, depois a outra, até o nó abrir" },
  30: { onde: "no quintal", problema: "a caixa grande de papelão ia para o lixo", solucao: "pintou a caixa e ela virou uma nave espacial" },
  31: { onde: "na praça", problema: "o tambor estava fazendo barulho alto demais", solucao: "tocou forte e depois fraquinho, no ritmo da música" },
  32: { onde: "no parque", problema: "na brincadeira, ninguém ouvia quando era hora de parar", solucao: "combinaram um sinal: mão para cima quer dizer parar" },
  33: { onde: "no quarto", problema: "o brinquedo favorito sumiu", solucao: "procurou em cima da cama, embaixo da mesa e achou dentro da caixa" },
  34: { onde: "no cerrado", problema: "o mico se perdeu da família", solucao: "a onça mostrou o caminho até a árvore dos micos" },
  35: { onde: "na rua do bairro", problema: "o lixo acumulou e a rua ficou suja", solucao: "o gari passou, limpou a rua e todos agradeceram" },
  36: { onde: "na feira", problema: "as frutas caíram da banca e rolaram pelo chão", solucao: "todos ajudaram a juntar as frutas e a Dona Rita deu uma laranja para cada um" },
  37: { onde: "em casa", problema: "era difícil lembrar o que vinha primeiro no dia", solucao: "fez um cartaz: acordar, escola, almoço, brincar e dormir" },
  38: { onde: "no quarto", problema: "o amigo pegou o brinquedo sem pedir e a raiva veio forte", solucao: "contou até cinco, respirou fundo e disse como se sentia" },
  39: { onde: "no jardim", problema: "a plantinha ficou murcha porque ninguém deu água", solucao: "regou a plantinha todos os dias e ela voltou a crescer" },
  40: { onde: "na escola", problema: "alguém pegou o lápis sem pedir e o amigo ficou chateado", solucao: "pediu desculpas, disse por favor e depois obrigado" },
  41: { onde: "no ateliê de arte", problema: "o desenho ficou sem cor e sem graça", solucao: "usou o pincel mágico e encheu o papel de cores" },
  42: { onde: "no supermercado", problema: "queria comprar só doce de chocolate", solucao: "provou a manga madura e descobriu que a fruta também é doce" },
  43: { onde: "na esquina da rua", problema: "a bola rolou para a rua cheia de carros", solucao: "esperou o sinal verde para pedestre e atravessou de mão dada" },
  44: { onde: "na horta da escola", problema: "as sementes não nasciam porque a terra estava seca", solucao: "a turma regou a horta e as folhas de alface cresceram" },
  45: { onde: "no acampamento", problema: "o mapa do tesouro estava rasgado ao meio", solucao: "juntaram as duas partes e seguiram as setas até o tesouro" },
  46: { onde: "na cozinha", problema: "o bolo da festa sumiu da mesa", solucao: "seguiram as migalhas e acharam o cachorro com a boca suja de bolo" },
  47: { onde: "na praça da música", problema: "a canção não acabava e todos já estavam cansados", solucao: "criaram um final: bater palmas três vezes e sentar" },
  48: { onde: "na sala de aula", problema: "o desenho não ficou bom na primeira vez", solucao: "tentou de novo, e de novo, até ficar do jeito que queria" },
  49: { onde: "na biblioteca", problema: "esqueceu o nome do amigo novo", solucao: "lembrou da cor da camiseta dele e o nome voltou: Leo" },
  50: { onde: "no castelo da fantasia", problema: "a porta do castelo só abria com tudo o que foi aprendido", solucao: "lembrou dos sons, das cores e dos amigos, e a porta abriu" },
};

function criarLivro(numero: number, id: string, titulo: string, tema: string, nivel: string, quem: string): Livro {
  const e = enredos[numero] ?? { onde: "no parque", problema: "surgiu um desafio no caminho", solucao: "pensou com calma e pediu ajuda" };
  const outros = Object.values(enredos).filter((o) => o !== e);
  const falsos = (k: keyof Enredo) => [outros[(numero * 7) % outros.length]![k], outros[(numero * 13 + 5) % outros.length]![k]];
  const fundos = cenarioPorTema[tema] ?? ["parque", "sala", "jardim"];
  const palavra = palavraPorTema[tema] ?? "APRENDER";
  const silabas = dividir(palavra);
  const objetivo = objetivoPorTema[tema] ?? "aprender brincando";
  const etapas = [
    ["O começo", `${quem} estava ${e.onde}. Era um dia bonito para brincar e aprender.`],
    ["O problema", `De repente, aconteceu uma coisa: ${e.problema}.`],
    ["Uma palavra especial", `A palavra ${palavra} apareceu na história. Vamos ouvir devagar e descobrir suas partes.`],
    ["Olhar com calma", `${quem} respirou fundo e olhou tudo com muita atenção.`],
    ["Tentar uma vez", `${quem} tentou resolver sem ajuda, mas na primeira vez não deu certo.`],
    ["Pedir ajuda", `Então ${quem} chamou um amigo. Juntos, pensaram em outro jeito.`],
    ["A boa ideia", `Veio uma boa ideia: ${e.solucao}.`],
    ["Deu certo", `Deu certo! O problema foi resolvido e todos ficaram felizes.`],
    ["A descoberta", `${quem} descobriu que é importante ${objetivo}.`],
    ["Fim", `E assim terminou ${titulo}. Que tal contar essa história para alguém?`],
  ] as const;
  const perguntas: Record<number, { pergunta: string; certa: string; erradas: string[] }> = {
    0: { pergunta: "Onde a história começou?", certa: e.onde, erradas: falsos("onde") },
    1: { pergunta: "Qual foi o problema?", certa: e.problema, erradas: falsos("problema") },
    6: { pergunta: "Como o problema foi resolvido?", certa: e.solucao, erradas: falsos("solucao") },
  };
  return {
    id, titulo,
    ficha: {
      faixa: nivel === "Descobrir" ? "3 a 5 anos" : "4 a 6 anos", objetivo: `Desenvolver a capacidade de ${objetivo}.`,
      habilidades: [objetivo, "atenção", "oralidade", "sequência", "interpretação"], vocabulario: [palavra.toLowerCase(), tema.toLowerCase(), "pista", "descoberta"],
      letrasSons: `Som inicial de ${palavra}`, silabas: `${palavra}: ${silabas.join("-")}`, matematica: "Ordem e sequência dos acontecimentos",
      emocao: "Curiosidade, confiança e alegria ao aprender", jogos: ["Escolha", "Sílabas", "Sequência", "Interpretação"],
      cenarios: fundos, personagens: ["Personagens serão adicionados na etapa final"], teatro: `Represente com gestos a descoberta de ${palavra.toLowerCase()}.`,
      final: `Explicar como ${objetivo}.`,
    },
    cenas: etapas.map(([nome, narracao], i) => ({
      titulo: nome, cenario: fundos[i % fundos.length] ?? "parque", ambiente: i % 4 === 0 ? ["brilho"] : i % 4 === 1 ? ["nuvens"] : [], narracao,
      ...(i === 2 ? { destaques: { [palavra]: silabas } } : {}), atores: [],
      ensinar: i === 2 ? [`Escute: ${palavra}.`, `${silabas.join("... ")}.`, `Agora diga a palavra inteira: ${palavra}.`] : [`Nesta parte, vamos ${objetivo}.`, "Observe a cena e escute a pista antes de responder."],
      jogo: i === 2
        ? { tipo: "silaba", habilidade: "Consciência silábica", palavra, silabas, acerto: `Muito bem! Você ouviu as partes de ${palavra}.` }
        : perguntas[i]
          ? { tipo: "escolha", habilidade: "Compreensão do texto", pergunta: perguntas[i]!.pergunta, opcoes: [{ texto: perguntas[i]!.certa, correta: true }, ...perguntas[i]!.erradas.map((t) => ({ texto: t }))].sort((a, b) => (a.texto.length % 3) - (b.texto.length % 3)), acerto: "Isso mesmo! A história conta exatamente isso.", dicas: ["Leia de novo o texto em cima do cenário. A resposta está nele."] }
          : { tipo: "escolha", habilidade: i === 9 ? "Compreensão global" : "Atenção e interpretação", pergunta: i === 9 ? "O que esta aventura nos ensinou?" : "O que ajuda a continuar esta aventura?", opcoes: [{ texto: i === 9 ? objetivo : "Observar e pensar com calma", correta: true }, { texto: "Desistir na primeira tentativa" }, { texto: "Ignorar todas as pistas" }], acerto: "Ótima escolha! Você usou a pista para continuar.", dicas: ["Vamos pensar juntos: qual opção ajuda a aprender e seguir em frente?"] },
      objetivo: i === 9 ? objetivo : "Participar da narrativa com atenção.",
    })),
    aprendemos: [
      { titulo: "Palavras novas", itens: [palavra.toLowerCase(), tema.toLowerCase(), "pista", "descoberta"] },
      { titulo: "Sons e sílabas", itens: [`${palavra}: ${silabas.join("-")}`] },
      { titulo: "Emoções", itens: ["curiosidade", "confiança", "alegria"] },
      { titulo: "Habilidade", itens: [objetivo] },
    ],
    desafioFinal: { tipo: "escolha", habilidade: "Revisão", pergunta: `Qual palavra especial apareceu em ${titulo}?`, opcoes: [{ texto: palavra, correta: true }, { texto: "ESQUECER" }, { texto: "PARAR" }], acerto: `Isso! ${palavra} fez parte desta aventura.`, dicas: [`Lembre da palavra que apareceu em destaque na terceira cena.`] },
  };
}

/** Personagens do app (sem criar imagens novas) para as histórias sem elenco. */
const guias = [
  { img: "pip-mascot", nome: "Pip" }, { img: "pip-girl-mascot", nome: "Pipa" }, { img: "pip-animais", nome: "Léo" },
  { img: "pip-girl-arte", nome: "Clara" }, { img: "pip-musica", nome: "Beto" }, { img: "pip-girl-musica", nome: "Mel" },
  { img: "pip-fazendinha", nome: "Pedrinho" }, { img: "pip-girl-bailarina", nome: "Lia" }, { img: "pip-dinossauros", nome: "Dudu" },
  { img: "pip-girl-unicornio", nome: "Bela" }, { img: "pip-carros", nome: "Rafa" }, { img: "pip-girl-sereia", nome: "Luna" },
];
const amigos = [
  { img: "coruja", nome: "Coruja" }, { img: "coelho", nome: "Coelho" }, { img: "gato", nome: "Gato" }, { img: "cachorro", nome: "Cachorro" },
  { img: "pato", nome: "Pato" }, { img: "abelha", nome: "Abelha", vida: "voar" as const }, { img: "borboleta", nome: "Borboleta", vida: "voar" as const },
  { img: "tico", nome: "Passarinho", vida: "voar" as const }, { img: "sapo", nome: "Sapo" }, { img: "fofa", nome: "Raposa" },
];

type Pers = { img: string; nome: string; vida?: "voar" };
/** Protagonista ligado ao texto: nome de menina = figura de menina; nunca menino no lugar. */
const elencoPorHistoria: Record<string, [Pers, Pers]> = {
  "abraco-quentinho": [{ img: "menina", nome: "Bia" }, { img: "urso", nome: "Urso Pipo" }],
  "semente-de-lu": [{ img: "menina", nome: "Lú" }, { img: "joaninha", nome: "Dona Joaninha", vida: "voar" }],
  "o-sapo-que-contava-saltos": [{ img: "sapo", nome: "Sapo" }, { img: "coruja", nome: "Coruja" }],
  "a-lagarta-devagarinho": [{ img: "lagarta", nome: "Lagarta" }, { img: "borboleta", nome: "Borboleta", vida: "voar" }],
  "tuca-tem-medo-do-escuro": [{ img: "menino", nome: "Tuca" }, { img: "coruja", nome: "Coruja" }],
  "o-prato-colorido-do-teo": [{ img: "menino", nome: "Téo" }, { img: "coelho", nome: "Coelho" }],
  "vovo-conta-e-reconta": [{ img: "avo", nome: "Vovó" }, { img: "menina", nome: "Neta" }],
  "a-cadeira-de-rodas-do-nico": [{ img: "menino", nome: "Nico" }, { img: "cachorro", nome: "Cachorro" }],
  "o-primeiro-dia-do-bento": [{ img: "menino", nome: "Bento" }, { img: "gato", nome: "Gato" }],
  "o-tambor-do-zeze": [{ img: "menino", nome: "Zezé" }, { img: "tico", nome: "Passarinho", vida: "voar" }],
  "a-feira-da-dona-rita": [{ img: "avo", nome: "Dona Rita" }, { img: "menina", nome: "Menina" }],
  "quando-fico-bravo": [{ img: "menino", nome: "Menino" }, { img: "gato", nome: "Gato" }],
  "o-pincel-magico-da-nina": [{ img: "menina", nome: "Nina" }, { img: "borboleta", nome: "Borboleta", vida: "voar" }],
};
const semAcento = (t: string) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function comElenco(livro: Livro, n: number): Livro {
  const fixo = elencoPorHistoria[livro.id] ?? elencoPorHistoria[semAcento(livro.titulo)];
  const guia: Pers = fixo?.[0] ?? guias[n % guias.length]!;
  const amigo: Pers = fixo?.[1] ?? amigos[(n * 3) % amigos.length]!;
  const humor = (i: number, texto: string) => /trist|chor|medo|bravo|cinz|sozinh/i.test(texto) ? "triste" as const : i === 4 ? "curiosa" as const : "alegre" as const;
  return {
    ...livro,
    ficha: { ...livro.ficha, personagens: [guia.nome, amigo.nome] },
    cenas: livro.cenas.map((c, i) => c.atores.length ? c : {
      ...c,
      atores: [
        { img: guia.img, nome: guia.nome, expressao: humor(i, c.narracao), x: 26, y: 94, tamanho: 34, vida: "respirar" as const, voz: "narrador" as const,
          falas: [`Oi! Eu sou ${guia.nome}.`, c.ensinar?.[0] ?? "Vamos ouvir a história juntos?"] },
        ...(i % 2 === 0 ? [{ img: amigo.img, nome: amigo.nome, x: 74, y: amigo.vida ? 55 : 94, tamanho: 25, vida: amigo.vida ?? ("balancar" as const), voz: "objeto" as const,
          falas: [`Oi! Eu me chamo ${amigo.nome}.`, "Observe o cenário com calma."] }] : []),
      ],
    }),
  };
}

const todos: Livro[] = catalogo.filter((h) => h.id !== "raposa-ouvir").map((h, n) => {
  const fundos = cenarioPorTema[h.tema] ?? ["parque", "sala", "jardim"];
  const quem = (elencoPorHistoria[h.id] ?? elencoPorHistoria[semAcento(h.titulo)])?.[0].nome ?? guias[n % guias.length]!.nome;
  return adaptarHistoria(h.id, fundos) ?? criarLivro(h.numero, h.id, h.titulo, h.tema, h.nivel, quem);
});

export const livrosDoCatalogo: Record<string, Livro> = Object.fromEntries(todos.map((livro, n) => [livro.id, comElenco(livro, n)]));
