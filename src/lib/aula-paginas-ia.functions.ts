import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  aulaId: z.string().uuid(),
  force: z.boolean().optional(),
});

const PaginaSchema = z.object({
  tipo: z.enum([
    "objetivo",
    "explicacao",
    "demonstracao",
    "exemplo",
    "pratica_guiada",
    "exercicio",
    "desafio",
    "revisao",
  ]),
  titulo: z.string().min(1).max(80),
  conteudo: z
    .object({
      texto: z.string().min(1),
      destaque: z.string().optional(),
      bullets: z.array(z.string()).max(6).optional(),
      passos: z.array(z.string()).max(6).optional(),
      exemplos: z
        .array(z.object({ silaba: z.string().max(20), palavra: z.string().max(40) }))
        .max(6)
        .optional(),
      perguntas: z
        .array(z.object({
          pergunta: z.string(),
          resposta: z.string(),
          explicacao: z.string().optional(),
          opcoes: z.array(z.string().max(80)).max(4).optional(),
        }))
        .max(6)
        .optional(),
    })
    .passthrough(),
});

const AulaSchema = z.object({
  paginas: z.array(PaginaSchema).length(8),
});

const SYSTEM = `Você é "Brilha", uma professora especialista em alfabetização, matemática e dificuldades de aprendizagem.
Você escreve AULAS DE VERDADE para a criança aprender, não resumos genéricos.

NUNCA gere texto genérico como "Compreender e praticar X", "use objetos do cotidiano", "pratique mais" ou "vamos aprender de forma divertida".
Toda página DEVE ensinar um conteúdo concreto, com exemplos reais, correção explicada e atividade que a criança consegue fazer AGORA.

Se o tema vier amplo (ex: "dificuldade em matemática"), escolha uma micro-habilidade inicial concreta adequada à idade (ex: contar, juntar/decompor, tabuada, interpretação de problema) e ensine essa micro-habilidade profundamente.

ESTRUTURA OBRIGATÓRIA (8 páginas, nesta ordem):
1) tipo "objetivo"        — diga exatamente a micro-habilidade de hoje. Inclua "destaque" com a promessa concreta.
2) tipo "explicacao"      — ensine o conceito com 4-6 frases claras. Use "bullets" com 3 regras que a criança pode seguir.
3) tipo "demonstracao"    — faça uma demonstração na lousa: use "passos" com 4-6 etapas. Em matemática, mostre conta/resolução. Em português, mostre som/letra/palavra/frase.
4) tipo "exemplo"         — mostre 4 exemplos CONCRETOS. Para alfabetização use exemplos silaba/palavra. Para matemática, exemplos com números reais no texto e passos.
5) tipo "pratica_guiada"  — a Brilha faz junto: "passos" com 5 ações curtas. Não dependa dos pais.
6) tipo "exercicio"       — 4 exercícios com "perguntas" contendo pergunta, opcoes (quando couber), resposta e explicacao do porquê.
7) tipo "desafio"         — 2 desafios um pouco mais difíceis, com resposta e explicação. Não use placeholders.
8) tipo "revisao"         — recapitulando 3 coisas aprendidas e 1 missão curta para treinar depois.

REGRAS DE LINGUAGEM:
- Fale DIRETO com a criança (você/a gente), nunca com os pais.
- Linguagem viva, fofa, com pequenas brincadeiras ("ihhh, essa foi quase!").
- Português do Brasil. Sem markdown. Sem emojis dentro dos textos (os emojis do título já vêm no app).
 - ZERO frases vagas. Se o tema for "tabuada do 3", os exemplos são "3 x 1 = 3", "3 x 2 = 6"... Se for leitura, use palavras reais. Se for interpretação, use um mini-texto real de 3 linhas.
 - Toda resposta errada deve ter explicação pedagógica curta no campo "explicacao".

FORMATO (responda APENAS este JSON, sem markdown):
{
  "paginas": [
    { "tipo": "objetivo",       "titulo": "...", "conteudo": { "texto": "...", "destaque": "..." } },
    { "tipo": "explicacao",     "titulo": "...", "conteudo": { "texto": "...", "bullets": ["...","...","..."] } },
    { "tipo": "demonstracao",   "titulo": "...", "conteudo": { "texto": "...", "passos": ["...","...","...","..."] } },
    { "tipo": "exemplo",        "titulo": "...", "conteudo": { "texto": "...", "exemplos": [{"silaba":"...","palavra":"..."}, ...], "passos": ["..."] } },
    { "tipo": "pratica_guiada", "titulo": "...", "conteudo": { "texto": "...", "passos": ["...","...","...","..."], "destaque": "..." } },
    { "tipo": "exercicio",      "titulo": "...", "conteudo": { "texto": "...", "perguntas": [{"pergunta":"...","opcoes":["..."],"resposta":"...","explicacao":"..."}, ...] } },
    { "tipo": "desafio",        "titulo": "...", "conteudo": { "texto": "...", "perguntas": [{"pergunta":"...","resposta":"...","explicacao":"..."}, ...] } },
    { "tipo": "revisao",        "titulo": "...", "conteudo": { "texto": "...", "bullets": ["...","...","..."], "destaque": "..." } }
  ]
}`;

function userPrompt(aula: { titulo: string; objetivo: string | null; faixa_etaria: string | null; habilidade: string | null; area: string | null }) {
  return `Crie a apostila completa em JSON.

Aula: ${aula.titulo}
Objetivo do banco: ${aula.objetivo ?? "(não informado)"}
Habilidade: ${aula.habilidade ?? "(não informado)"}
Área: ${aula.area ?? "(não informado)"}
Faixa etária: ${aula.faixa_etaria ?? "6 a 10 anos"}

Gere AGORA, com exemplos reais e específicos do tema acima. Nada de texto genérico.`;
}

function parseJson(raw: string): unknown {
  let txt = raw.trim();
  if (txt.startsWith("```")) txt = txt.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  return JSON.parse(txt);
}

type AulaRow = {
  titulo: string;
  objetivo: string | null;
  faixa_etaria: string | null;
};

type FallbackContext = AulaRow & { habilidade: string | null; area: string | null };
type PaginaGerada = z.infer<typeof PaginaSchema>;

function buildFallbackPaginas(ctx: FallbackContext): PaginaGerada[] {
  const raw = `${ctx.titulo} ${ctx.objetivo ?? ""} ${ctx.habilidade ?? ""} ${ctx.area ?? ""}`;
  const lower = raw.toLowerCase();
  const tema = ctx.habilidade || ctx.titulo || "aula de reforço";
  const isMath = /matem|tabuada|multiplica|soma|subtra|divis|problema|número|numero|conta/.test(lower);
  const isAlfa = /alfabeto|letra|s[ií]laba|silaba|juntar|decodifica|b\/d|p\/q|fonema/.test(lower);
  const isPort = isAlfa || /leitura|texto|interpreta|ortografia|frase|palavra|portugu/.test(lower);
  const isMotor = /caligraf|coordena|motora|copiar|lápis|lapis|ileg[ií]vel|visomotora/.test(lower);
  const isAttention = /aten[çc][aã]o|mem[oó]ria|foco|organiza|planejamento|frustra|tempo|execu/.test(lower);

  if (isMath) {
    return [
      { tipo: "objetivo", titulo: "Hoje a conta vai fazer sentido", conteudo: { texto: `Nesta aula você vai treinar ${tema} entendendo a história antes de fazer a conta. A gente vai descobrir se é juntar, tirar, formar grupos iguais ou repartir.`, destaque: "Promessa: você vai resolver um problema lendo pistas, montando a conta e conferindo a resposta." } },
      { tipo: "explicacao", titulo: "Como descobrir a operação", conteudo: { texto: "Problema de matemática é uma historinha com uma pergunta escondida. Primeiro leia a pergunta final. Depois procure as palavras que mostram a ação: ganhou, perdeu, cada, ao todo, dividir igualmente. A ação escolhe a conta.", bullets: ["Ganhou ou juntou: geralmente é adição.", "Perdeu, gastou ou faltou: geralmente é subtração.", "Cada grupo com a mesma quantidade: pode ser multiplicação.", "Repartir igualmente: pode ser divisão."] } },
      { tipo: "demonstracao", titulo: "Lousa do Professor Brilho", conteudo: { texto: "Vamos resolver juntos: Ana tem 4 caixas com 6 figurinhas em cada caixa. Quantas figurinhas Ana tem ao todo?", passos: ["A pergunta quer o total de figurinhas.", "A pista é 'em cada caixa', então são grupos iguais.", "São 4 grupos de 6: 6 + 6 + 6 + 6.", "Somando: 6 + 6 = 12 e 12 + 12 = 24.", "Resposta completa: Ana tem 24 figurinhas ao todo."] } },
      { tipo: "exemplo", titulo: "Exemplos com números reais", conteudo: { texto: "Veja como a pista muda a conta. Não copie no automático: leia a ação.", passos: ["Lia tinha 8 adesivos e ganhou 5: 8 + 5 = 13.", "Pedro tinha 14 balas e comeu 6: 14 - 6 = 8.", "Há 3 sacolas com 4 maçãs em cada: 3 x 4 = 12.", "12 lápis para 3 crianças igualmente: 12 ÷ 3 = 4."], exemplos: [{ silaba: "8+5", palavra: "13" }, { silaba: "14-6", palavra: "8" }, { silaba: "3x4", palavra: "12" }, { silaba: "12÷3", palavra: "4" }] } },
      { tipo: "pratica_guiada", titulo: "Agora a gente faz junto", conteudo: { texto: "Problema: Bia guardou 5 cartas em cada uma de 3 caixas. Quantas cartas ela guardou?", passos: ["Leia a pergunta: quer saber quantas cartas ao todo.", "Ache a pista: 'em cada uma' mostra grupos iguais.", "Monte: 3 caixas com 5 cartas.", "Calcule: 5 + 5 + 5 = 15.", "Responda: Bia guardou 15 cartas."], destaque: "Quando aparecer 'cada', pense: grupos iguais." } },
      { tipo: "exercicio", titulo: "Sua vez com correção", conteudo: { texto: "Resolva uma por vez. Depois abra a resposta e veja o porquê.", perguntas: [
        { pergunta: "João tinha 9 carrinhos e ganhou 4. Quantos tem agora?", opcoes: ["13", "5", "36"], resposta: "13", explicacao: "Ganhou aumenta: 9 + 4 = 13." },
        { pergunta: "Mila tinha 15 figurinhas e perdeu 7. Quantas ficaram?", opcoes: ["22", "8", "105"], resposta: "8", explicacao: "Perdeu diminui: 15 - 7 = 8." },
        { pergunta: "4 pacotes com 3 biscoitos em cada. Quantos biscoitos?", opcoes: ["7", "1", "12"], resposta: "12", explicacao: "São 4 grupos de 3: 3 + 3 + 3 + 3 = 12." },
        { pergunta: "10 lápis para 2 estojos igualmente. Quantos em cada estojo?", opcoes: ["5", "12", "8"], resposta: "5", explicacao: "Repartir igualmente: 10 ÷ 2 = 5." },
      ] } },
      { tipo: "desafio", titulo: "Desafio um pouco maior", conteudo: { texto: "Agora tem duas informações. Leia com calma.", perguntas: [
        { pergunta: "Uma turma fez 5 cartazes. Cada cartaz tem 4 estrelas e 1 coração. Quantas estrelas há ao todo?", resposta: "20 estrelas", explicacao: "A pergunta pede só estrelas. São 5 grupos de 4 estrelas: 5 x 4 = 20." },
        { pergunta: "Rafa comprou 3 pacotes com 6 adesivos e deu 5 para a irmã. Com quantos ficou?", resposta: "13 adesivos", explicacao: "Primeiro 3 x 6 = 18. Depois deu 5, então 18 - 5 = 13." },
      ] } },
      { tipo: "revisao", titulo: "O que você aprendeu", conteudo: { texto: "Hoje você não decorou: você entendeu como escolher a conta pela história. Isso ajuda em prova, tarefa e jogo de matemática.", bullets: ["Leia a pergunta final antes de calcular.", "Procure a palavra-pista da ação.", "Monte a conta e confira se a resposta combina com a história."], destaque: "Missão curta: invente um problema com 'cada' e resolva usando grupos iguais." } },
    ];
  }

  if (isPort) {
    const exemplos = isAlfa
      ? [{ silaba: "CA", palavra: "casa" }, { silaba: "BO", palavra: "bola" }, { silaba: "PA", palavra: "pato" }, { silaba: "MA", palavra: "mala" }]
      : [{ silaba: "porque", palavra: "mostra motivo" }, { silaba: "mas", palavra: "mostra oposição" }, { silaba: "então", palavra: "mostra consequência" }];
    return [
      { tipo: "objetivo", titulo: "Ler entendendo, não chutando", conteudo: { texto: `Nesta aula você vai treinar ${tema} usando letras, palavras e frases reais. A gente vai olhar pistas e explicar a resposta.`, destaque: "Promessa: você vai aprender com exemplo real, leitura guiada e pergunta corrigida." } },
      { tipo: "explicacao", titulo: isAlfa ? "Letra, som e sílaba" : "Como achar pistas no texto", conteudo: { texto: isAlfa ? "Uma palavra pode ser dividida em pedaços sonoros chamados sílabas. Para ler, a gente olha a letra, fala o som e junta as partes sem pressa." : "Interpretar texto é provar sua resposta com uma pista do próprio texto. Palavras como porque, mas e então mostram relação entre as ideias.", bullets: isAlfa ? ["Olhe a primeira letra.", "Fale a sílaba devagar.", "Junte as sílabas para formar a palavra."] : ["Leia a frase inteira.", "Procure a palavra-pista.", "Responda usando uma prova do texto."] } },
      { tipo: "demonstracao", titulo: "Demonstração na lousa", conteudo: { texto: isAlfa ? "Vamos juntar CA + SA. Primeiro fale CA. Depois fale SA. Agora una sem pausa: CASA." : "Frase: A flor murchou porque ficou sem água. Pergunta: por que a flor murchou? A palavra porque abre o motivo.", passos: isAlfa ? ["Olhe CA.", "Fale CA.", "Olhe SA.", "Fale SA.", "Junte: CA-SA, CASA."] : ["Leia a frase completa.", "Ache a palavra porque.", "Veja o que vem depois dela: ficou sem água.", "Responda: a flor murchou porque ficou sem água."] } },
      { tipo: "exemplo", titulo: "Exemplos reais", conteudo: { texto: isAlfa ? "Treine olhando, falando e juntando." : "Cada palavra-pista ajuda a entender a frase.", exemplos, passos: isAlfa ? ["PA + TO = PATO", "BO + LA = BOLA", "MA + LA = MALA"] : ["Porque mostra causa: saiu porque choveu.", "Mas mostra oposição: correu, mas atrasou.", "Então mostra consequência: escureceu, então fechou a janela."] } },
      { tipo: "pratica_guiada", titulo: "Vamos fazer juntos", conteudo: { texto: isAlfa ? "Leia comigo: BO-LA. Agora tire a pausa: BOLA. Agora troque BO por MO: MOLA." : "Mini-texto: Pedro correu para a escola, mas chegou atrasado. A pista 'mas' mostra que aconteceu algo diferente do esperado.", passos: isAlfa ? ["Aponte para BO.", "Fale BO.", "Aponte para LA.", "Fale LA.", "Junte: BOLA."] : ["Leia o mini-texto.", "Circule a palavra mas.", "Explique a oposição: ele correu, porém atrasou.", "Responda com uma frase completa."], destaque: isAlfa ? "Juntar sílabas é como encaixar peças." : "Resposta boa nasce de uma pista do texto." } },
      { tipo: "exercicio", titulo: "Exercícios com resposta", conteudo: { texto: "Faça e confira o porquê.", perguntas: isAlfa ? [
        { pergunta: "Qual junção forma CASA?", opcoes: ["CA + SA", "SA + CA", "CO + SA"], resposta: "CA + SA", explicacao: "CA primeiro e SA depois formam CA-SA." },
        { pergunta: "Qual palavra começa com som /b/?", opcoes: ["bola", "dado", "pato"], resposta: "bola", explicacao: "Bola começa com B, som /b/." },
        { pergunta: "PA + TO forma qual palavra?", opcoes: ["pato", "tapa", "bola"], resposta: "pato", explicacao: "Lemos PA e depois TO: PATO." },
        { pergunta: "Em faca e vaca, o que muda?", opcoes: ["primeira letra", "última sílaba", "nada"], resposta: "primeira letra", explicacao: "F e V mudam o som inicial." },
      ] : [
        { pergunta: "Em 'A flor murchou porque ficou sem água', qual é a causa?", opcoes: ["ficou sem água", "a flor", "murchou"], resposta: "ficou sem água", explicacao: "A causa aparece depois da palavra porque." },
        { pergunta: "Em 'correu, mas atrasou', o que 'mas' mostra?", opcoes: ["oposição", "lugar", "nome"], resposta: "oposição", explicacao: "Correr cria expectativa de chegar cedo, mas aconteceu o contrário." },
        { pergunta: "Em 'escureceu, então fechou a janela', qual foi a consequência?", opcoes: ["fechou a janela", "escureceu", "janela"], resposta: "fechou a janela", explicacao: "Então mostra o que aconteceu depois." },
        { pergunta: "Para responder interpretação, devo...", opcoes: ["usar pista do texto", "inventar", "chutar rápido"], resposta: "usar pista do texto", explicacao: "A pista prova a resposta." },
      ] } },
      { tipo: "desafio", titulo: "Desafio de leitura", conteudo: { texto: "Agora explique com frase completa.", perguntas: isAlfa ? [
        { pergunta: "Leia MA-CA-CO. Que palavra formou?", resposta: "macaco", explicacao: "Juntando MA + CA + CO, lemos MACACO." },
        { pergunta: "Troque o começo de PATO para G. Que palavra aparece?", resposta: "gato", explicacao: "Mudando PA para GA, a palavra vira GATO." },
      ] : [
        { pergunta: "'Lia levou guarda-chuva porque o céu estava escuro.' Por que ela levou guarda-chuva?", resposta: "Porque o céu estava escuro.", explicacao: "A palavra porque mostra o motivo." },
        { pergunta: "'O cachorro latiu, então o bebê acordou.' O que aconteceu depois do latido?", resposta: "O bebê acordou.", explicacao: "Então mostra consequência." },
      ] } },
      { tipo: "revisao", titulo: "Fechamento", conteudo: { texto: "Hoje você leu com pista, exemplo e correção. Esse é o jeito de aprender sem ficar perdido.", bullets: isAlfa ? ["Olhe a letra.", "Fale a sílaba.", "Junte para formar palavra."] : ["Leia tudo.", "Ache a palavra-pista.", "Explique com prova do texto."], destaque: "Missão curta: leia 3 palavras ou 3 frases e diga qual pista ajudou." } },
    ];
  }

  if (isMotor || isAttention) {
    return [
      { tipo: "objetivo", titulo: "Treino escolar prático", conteudo: { texto: `Nesta aula você vai treinar ${tema} em uma tarefa curta de escola: observar, seguir regra, fazer e conferir.`, destaque: "Promessa: nada de sermão; vamos praticar com ação real." } },
      { tipo: "explicacao", titulo: "Regra pequena, cérebro organizado", conteudo: { texto: "Quando a tarefa parece grande, a gente quebra em passos pequenos. Primeiro entende a regra. Depois faz uma parte. No final confere sem apagar tudo.", bullets: ["Repita a regra antes de começar.", "Faça uma parte por vez.", "Confira procurando um erro específico."] } },
      { tipo: "demonstracao", titulo: "Como fazer sem se perder", conteudo: { texto: "Tarefa: copie a frase 'O gato pula'. Vamos copiar em blocos, não letra por letra perdida.", passos: ["Leia a frase inteira.", "Copie o primeiro bloco: O gato.", "Confira se faltou letra.", "Copie o segundo bloco: pula.", "Leia tudo de novo." ] } },
      { tipo: "exemplo", titulo: "Exemplos de treino", conteudo: { texto: "Veja tarefas curtas que treinam atenção e organização.", passos: ["Marque só palavras que começam com M: mesa, bola, mala.", "Copie 'A lua brilha' em dois blocos.", "Leia a regra antes de responder.", "Confira começo, meio e fim da palavra."], exemplos: [{ silaba: "mesa", palavra: "começa com M" }, { silaba: "mala", palavra: "começa com M" }] } },
      { tipo: "pratica_guiada", titulo: "Faça comigo", conteudo: { texto: "Regra: escolha a palavra que começa com P e tem 4 letras.", passos: ["Repita a regra: começa com P e tem 4 letras.", "Olhe pato: começa com P.", "Conte p-a-t-o: 4 letras.", "Olhe pé: tem 2 letras.", "Resposta: pato."], destaque: "Duas pistas: começo com P + quatro letras." } },
      { tipo: "exercicio", titulo: "Exercícios curtos", conteudo: { texto: "Responda seguindo a regra.", perguntas: [
        { pergunta: "Qual palavra começa com S?", opcoes: ["sol", "lua", "casa"], resposta: "sol", explicacao: "Sol começa com S." },
        { pergunta: "Qual palavra tem 4 letras?", opcoes: ["pato", "pé", "elefante"], resposta: "pato", explicacao: "P-a-t-o tem 4 letras." },
        { pergunta: "Antes de copiar, o que ajuda?", opcoes: ["ler o bloco", "apertar o lápis", "pular palavras"], resposta: "ler o bloco", explicacao: "Ler o bloco evita pular letra ou palavra." },
        { pergunta: "Se errei por pressa, devo...", opcoes: ["reler a regra", "desistir", "chutar"], resposta: "reler a regra", explicacao: "Reler mostra qual pista faltou." },
      ] } },
      { tipo: "desafio", titulo: "Desafio com duas regras", conteudo: { texto: "Agora a regra tem duas partes.", perguntas: [
        { pergunta: "Escolha uma palavra que começa com B e tem 4 letras: bola, boi, casa.", resposta: "bola", explicacao: "Bola começa com B e tem 4 letras." },
        { pergunta: "Copie mentalmente em blocos: 'A casa azul'. Quais são os blocos?", resposta: "A / casa / azul", explicacao: "Blocos pequenos ajudam a copiar sem perder palavras." },
      ] } },
      { tipo: "revisao", titulo: "Você treinou como estudante", conteudo: { texto: "Hoje você praticou atenção, cópia e conferência com tarefa real. Isso ajuda no caderno e na sala de aula.", bullets: ["Regra antes da resposta.", "Blocos pequenos para copiar.", "Conferência antes de apagar."], destaque: "Missão curta: copie uma frase em dois blocos e confira se não faltou palavra." } },
    ];
  }

  return [
    { tipo: "objetivo", titulo: "Aula prática de reforço", conteudo: { texto: `Nesta aula você vai estudar ${tema} com uma explicação simples, exemplo, prática e correção.`, destaque: "Promessa: aprender fazendo, não só lendo." } },
    { tipo: "explicacao", titulo: "Entenda em partes", conteudo: { texto: "Quando um conteúdo parece difícil, a gente separa em partes pequenas: o que é, como aparece, exemplo e treino. Assim o cérebro não precisa carregar tudo de uma vez.", bullets: ["Observe o tema.", "Procure uma pista concreta.", "Explique com suas palavras."] } },
    { tipo: "demonstracao", titulo: "Demonstração", conteudo: { texto: "Vamos usar uma situação da escola. Primeiro lemos o pedido, depois marcamos a palavra importante e só então respondemos.", passos: ["Leia o pedido.", "Marque a palavra principal.", "Veja um exemplo parecido.", "Responda com frase curta.", "Confira se sua resposta combina com o pedido." ] } },
    { tipo: "exemplo", titulo: "Exemplo concreto", conteudo: { texto: `Exemplo sobre ${tema}: se a pergunta pede uma explicação, a resposta precisa dizer o que acontece e por que acontece.`, passos: ["Pergunta: o que aconteceu?", "Pista: informação principal.", "Resposta: aconteceu X porque Y."] } },
    { tipo: "pratica_guiada", titulo: "Vamos fazer juntos", conteudo: { texto: "Agora responda com apoio: qual é a palavra mais importante do pedido? Depois diga uma frase explicando.", passos: ["Leia devagar.", "Escolha a palavra principal.", "Diga a resposta em voz baixa.", "Escreva uma frase curta.", "Confira."], destaque: "Uma resposta boa combina com o pedido." } },
    { tipo: "exercicio", titulo: "Exercícios", conteudo: { texto: "Treine com perguntas curtas.", perguntas: [
      { pergunta: "O que fazer primeiro em uma tarefa nova?", opcoes: ["ler o pedido", "chutar", "copiar sem entender"], resposta: "ler o pedido", explicacao: "Ler o pedido mostra o que precisa ser feito." },
      { pergunta: "Como saber se entendi?", opcoes: ["explico com exemplo", "fico em silêncio", "pulo a questão"], resposta: "explico com exemplo", explicacao: "Dar exemplo mostra compreensão." },
      { pergunta: "Se eu errar, o que o erro mostra?", opcoes: ["qual passo revisar", "que não consigo", "que devo parar"], resposta: "qual passo revisar", explicacao: "Erro aponta o passo que precisa de treino." },
      { pergunta: "Resposta completa tem...", opcoes: ["ideia e explicação", "uma palavra solta", "desenho aleatório"], resposta: "ideia e explicação", explicacao: "A explicação mostra o raciocínio." },
    ] } },
    { tipo: "desafio", titulo: "Desafio final", conteudo: { texto: "Use o método em uma situação nova.", perguntas: [
      { pergunta: `Explique ${tema} com uma frase e um exemplo.`, resposta: "Resposta esperada: uma frase que diga o que é e mostre um exemplo concreto.", explicacao: "Exemplo concreto prova que você saiu da decoração." },
      { pergunta: "Qual passo mais ajuda quando a tarefa trava?", resposta: "Voltar ao pedido e procurar a palavra principal.", explicacao: "O pedido mostra o caminho da resposta." },
    ] } },
    { tipo: "revisao", titulo: "Revisão", conteudo: { texto: "Hoje você aprendeu a estudar em passos: ler, marcar pista, ver exemplo, responder e conferir.", bullets: ["Não chute antes de ler.", "Use exemplos concretos.", "Confira pelo pedido."], destaque: "Missão curta: explique o tema para o Professor Brilho em uma frase." } },
  ];
}

export const gerarPaginasAula = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const admin = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

    // Load aula + habilidade
    const { data: aula, error: aulaErr } = await admin
      .from("rb_aulas")
      .select("id,titulo,objetivo,faixa_etaria,habilidade_id")
      .eq("id", data.aulaId)
      .maybeSingle();
    if (aulaErr || !aula) return { ok: false as const, error: "Aula não encontrada" };

    let habilidadeNome: string | null = null;
    let areaNome: string | null = null;
    if (aula.habilidade_id) {
      const { data: hab } = await admin
        .from("rb_habilidades")
        .select("nome,area")
        .eq("id", aula.habilidade_id)
        .maybeSingle();
      habilidadeNome = hab?.nome ?? null;
      areaNome = hab?.area ?? null;
    }

    const saveFallback = async (reason: string) => {
      const paginas = buildFallbackPaginas({
        titulo: aula.titulo,
        objetivo: aula.objetivo,
        faixa_etaria: aula.faixa_etaria,
        habilidade: habilidadeNome,
        area: areaNome,
      });
      await admin.from("rb_paginas_aula").delete().eq("aula_id", data.aulaId);
      const rows = paginas.map((p, i) => ({
        aula_id: data.aulaId,
        ordem: i + 1,
        tipo: p.tipo,
        titulo: p.titulo,
        conteudo: p.conteudo,
      }));
      const { error: insErr } = await admin.from("rb_paginas_aula").insert(rows);
      if (insErr) return { ok: false as const, error: insErr.message };
      return { ok: true as const, regenerated: true, paginas: rows.length, fallback: true, reason };
    };

    // If not forcing, skip if pages already look rich enough
    if (!data.force) {
      const { data: existentes } = await admin
        .from("rb_paginas_aula")
        .select("conteudo")
        .eq("aula_id", data.aulaId);
      const totalChars = (existentes ?? []).reduce(
        (acc: number, p: any) => acc + JSON.stringify(p.conteudo ?? {}).length,
        0,
      );
      if (totalChars > 1200) {
        return { ok: true as const, regenerated: false, totalChars };
      }
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) return saveFallback("GROQ_API_KEY ausente; usando aula local estruturada");

    // Call Groq
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM },
          {
            role: "user",
            content: userPrompt({
              titulo: aula.titulo,
              objetivo: aula.objetivo,
              faixa_etaria: aula.faixa_etaria,
              habilidade: habilidadeNome,
              area: areaNome,
            }),
          },
        ],
        temperature: 0.8,
        max_tokens: 3200,
        response_format: { type: "json_object" },
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.error("[gerarPaginasAula] groq", res.status, t.slice(0, 300));
      return saveFallback(`Groq ${res.status}; usando aula local estruturada`);
    }
    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const raw = json.choices?.[0]?.message?.content?.trim() ?? "";
    if (!raw) return saveFallback("Resposta vazia; usando aula local estruturada");

    let parsed: z.infer<typeof AulaSchema>;
    try {
      parsed = AulaSchema.parse(parseJson(raw));
    } catch (e) {
      console.error("[gerarPaginasAula] parse", e, raw.slice(0, 400));
      return saveFallback("JSON inválido; usando aula local estruturada");
    }

    // Replace pages
    await admin.from("rb_paginas_aula").delete().eq("aula_id", data.aulaId);
    const rows = parsed.paginas.map((p, i) => ({
      aula_id: data.aulaId,
      ordem: i + 1,
      tipo: p.tipo,
      titulo: p.titulo,
      conteudo: p.conteudo,
    }));
    const { error: insErr } = await admin.from("rb_paginas_aula").insert(rows);
    if (insErr) {
      console.error("[gerarPaginasAula] insert", insErr);
      return { ok: false as const, error: insErr.message };
    }
    return { ok: true as const, regenerated: true, paginas: rows.length };
  });
