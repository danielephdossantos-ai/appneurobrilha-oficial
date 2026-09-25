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

function criarLivro(numero: number, id: string, titulo: string, tema: string, nivel: string): Livro {
  const fundos = cenarioPorTema[tema] ?? ["parque", "sala", "jardim"];
  const palavra = palavraPorTema[tema] ?? "APRENDER";
  const silabas = dividir(palavra);
  const objetivo = objetivoPorTema[tema] ?? "aprender brincando";
  const etapas = [
    ["O convite", `Uma nova aventura começou: ${titulo}. Tudo parecia comum, até surgir um convite para descobrir algo importante.`],
    ["Primeira pista", `No caminho, apareceu uma pista ligada a ${tema.toLowerCase()}. Era preciso olhar com calma e prestar atenção.`],
    ["Uma palavra especial", `A palavra ${palavra} apareceu na aventura. Vamos ouvi-la devagar e descobrir suas partes.`],
    ["Hora de observar", `Cada detalhe do cenário podia ajudar. Observar antes de escolher tornou o caminho mais seguro.`],
    ["Um pequeno desafio", `O desafio parecia difícil no começo, mas pensar com calma abriu uma nova possibilidade.`],
    ["Aprender fazendo", `A descoberta ficou mais clara quando a ideia foi colocada em prática dentro da aventura.`],
    ["Uma escolha importante", `Chegou a hora de escolher. A melhor pista era lembrar tudo o que já tinha acontecido.`],
    ["Juntos fica melhor", `Com atenção, cuidado e ajuda, a aventura continuou. Cada tentativa ensinou alguma coisa.`],
    ["A descoberta", `A resposta apareceu: ${objetivo} pode transformar uma dificuldade em uma conquista.`],
    ["Missão cumprida", `A aventura de ${titulo} chegou ao fim. Ficou uma descoberta para levar para outros dias.`],
  ] as const;
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

const todos: Livro[] = catalogo.filter((h) => h.id !== "raposa-ouvir").map((h) => {
  const fundos = cenarioPorTema[h.tema] ?? ["parque", "sala", "jardim"];
  return adaptarHistoria(h.id, fundos) ?? criarLivro(h.numero, h.id, h.titulo, h.tema, h.nivel);
});

/** Personagens do app (sem criar imagens novas) para as histórias sem elenco. */
const guias = [
  { img: "pip-mascot", nome: "Pip" }, { img: "pip-girl-mascot", nome: "Pipa" }, { img: "pip-animais", nome: "Pip explorador" },
  { img: "pip-girl-arte", nome: "Pipa artista" }, { img: "pip-musica", nome: "Pip músico" }, { img: "pip-girl-musica", nome: "Pipa cantora" },
  { img: "pip-fazendinha", nome: "Pip fazendeiro" }, { img: "pip-girl-bailarina", nome: "Pipa bailarina" }, { img: "pip-dinossauros", nome: "Pip dino" },
  { img: "pip-girl-unicornio", nome: "Pipa unicórnio" }, { img: "pip-carros", nome: "Pip piloto" }, { img: "pip-girl-sereia", nome: "Pipa sereia" },
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
        { img: guia.img, nome: guia.nome, expressao: humor(i, c.narracao), x: 26, y: 92, tamanho: 26, vida: "respirar" as const, voz: "narrador" as const,
          falas: [`Oi! Eu sou ${guia.nome}.`, c.ensinar?.[0] ?? "Vamos ouvir a história juntos?"] },
        ...(i % 2 === 0 ? [{ img: amigo.img, nome: amigo.nome, x: 74, y: amigo.vida ? 55 : 92, tamanho: 18, vida: amigo.vida ?? ("balancar" as const), voz: "objeto" as const,
          falas: [`Oi! Eu me chamo ${amigo.nome}.`, "Observe o cenário com calma."] }] : []),
      ],
    }),
  };
}

export const livrosDoCatalogo: Record<string, Livro> = Object.fromEntries(todos.map((livro, n) => [livro.id, comElenco(livro, n)]));
