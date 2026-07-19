import type { AulaGeoV1 } from "../../types";
import { url as cafe } from "@/assets/filosofia-8ano/u7-sartre-cafe.jpg.asset.json";
import { url as liberdade } from "@/assets/filosofia-8ano/u7-liberdade.jpg.asset.json";

/**
 * Filosofia · 8º Ano · Unidade 7 · Aula 01
 * "Existencialismo: Liberdade e Responsabilidade" — EF08FI07 (autoral)
 * Tema: Sartre e Beauvoir — condenados à liberdade, autenticidade, feminismo existencial.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-existencialismo-liberdade",
  titulo: "Condenados à Liberdade",
  iconeTrilha: "🕊️",
  bncc: ["EF08FI07"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de pensar, imagine a cena.",
    mapaUrl: cafe,
    imagemDestaqueUrl: cafe,
    aurora:
      "Investigador, Paris, 1945. A Segunda Guerra Mundial acabou de terminar. A Europa está destruída, o Holocausto revelou o abismo do que humanos podem fazer com humanos. No Café de Flore, um casal de filósofos escreve todo dia até a madrugada: Jean-Paul Sartre e Simone de Beauvoir. Suas teses são um choque: 'a EXISTÊNCIA precede a essência'. Ou seja: você NÃO nasce pronto — você se INVENTA a cada escolha. Não há desculpa, não há destino, não há natureza humana fixa. Somos, como Sartre diz, 'CONDENADOS À LIBERDADE'.",
    falaFinal: "Nesta aula: existência precede essência, má-fé, autenticidade e feminismo existencial.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: quando você faz uma escolha importante…",
    pergunta: "O que mais define quem você é?",
    opcoes: [
      { id: "essencia", titulo: "SUA ESSÊNCIA já pronta", subtitulo: "personalidade fixa, natureza herdada", emoji: "🧬", cor: "from-sky-400 to-blue-600" },
      { id: "escolhas", titulo: "SUAS ESCOLHAS ao longo da vida", subtitulo: "cada decisão te constrói", emoji: "🛤️", cor: "from-amber-400 to-orange-600" },
    ],
    respostaCerta: "escolhas",
    feedbackAcerto: "Boa. Sartre: 'a existência precede a essência'. Você é o que você FAZ, não o que você 'é' de nascença.",
    feedbackErro: "Cuidado: pra Sartre, não existe essência humana fixa. A gente se INVENTA a cada escolha — inclusive escolhendo não escolher.",
    falaFinal: "Existência precede essência. Você é o que você faz.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave pra entrar no existencialismo.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "existencia-essencia",
        capa: "1. Existência precede essência",
        emoji: "🌱",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "EXISTÊNCIA PRECEDE ESSÊNCIA é a tese central de Sartre: uma faca é feita PARA cortar — a essência (cortar) vem antes da existência (a faca ser fabricada). Mas o ser humano é diferente: primeiro EXISTE (nasce, é jogado no mundo), e SÓ DEPOIS, por suas escolhas, vai construindo o que é. Não existe 'natureza humana' pronta.",
        exemplo: "Ex.: você não 'nasceu' preguiçoso, corajoso, artista ou o que for. Você VAI SE FAZENDO isso pelas escolhas que faz todo dia.",
        fotoUrl: liberdade,
      },
      {
        id: "ma-fe",
        capa: "2. Má-fé",
        emoji: "🎭",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "MÁ-FÉ é o autoengano pelo qual a gente FUGE da própria liberdade. É dizer 'eu sou assim mesmo, não posso mudar' — como se fôssemos um objeto pronto. É se esconder atrás de papel social ('sou apenas garçom', 'sou apenas aluno') pra não assumir que sempre há escolha e responsabilidade.",
        exemplo: "Ex.: 'não posso denunciar o bullying porque sou tímido' — má-fé. A timidez não te tira a escolha; ela só torna a escolha mais difícil. Fugir dela é escolher também.",
        fotoUrl: cafe,
      },
      {
        id: "outro-beauvoir",
        capa: "3. 'A mulher é o Outro' — Beauvoir",
        emoji: "♀️",
        cor: "from-rose-500 to-pink-700",
        conteudo:
          "Simone de Beauvoir publica 'O Segundo Sexo' (1949) e aplica o existencialismo à condição feminina: 'não se NASCE mulher, TORNA-SE mulher'. Ou seja: gênero não é essência biológica pronta — é construção social. Historicamente, a mulher foi definida como O OUTRO em relação ao homem (o padrão). Beauvoir mostra como reverter isso e reivindicar a subjetividade plena.",
        exemplo: "Ex.: 'menina brinca de boneca, menino de carrinho' — construção social, não natureza. Reconhecer isso é o primeiro passo pra escolher livremente.",
        fotoUrl: cafe,
      },
    ],
    falaFinal: "Existência × má-fé × Outro. As 3 chaves do existencialismo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos do existencialismo francês.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: cafe,
    pontos: [
      {
        id: "pos-guerra",
        x: 22,
        y: 30,
        emoji: "💥",
        cor: "from-slate-500 to-gray-700",
        titulo: "Paris pós-guerra, 1945",
        texto: "Depois do horror da Segunda Guerra e do Holocausto, todo fundamento parece ruído. Se seres humanos foram capazes daquilo, o que somos? A resposta existencialista: somos LIBERDADE — e por isso RESPONSABILIDADE.",
        fotoUrl: cafe,
      },
      {
        id: "cafe-flore",
        x: 74,
        y: 30,
        emoji: "☕",
        cor: "from-amber-500 to-orange-700",
        titulo: "Café de Flore — cenário do movimento",
        texto: "Sartre e Beauvoir escrevem todo dia no Café de Flore, cercados por artistas, jazzistas e intelectuais. Publicam romances, peças de teatro, ensaios. O existencialismo vira POP — o primeiro filósofo celebridade do século XX.",
        fotoUrl: cafe,
      },
      {
        id: "condenados",
        x: 26,
        y: 70,
        emoji: "🕊️",
        cor: "from-emerald-500 to-teal-700",
        titulo: "'Condenados à liberdade'",
        texto: "Sartre publica 'O Existencialismo é um Humanismo' (1946): 'somos condenados a ser livres' — não podemos escolher NÃO escolher. Mesmo não decidir é uma decisão. Toda escolha nos define e nos torna responsáveis.",
        fotoUrl: liberdade,
      },
      {
        id: "segundo-sexo",
        x: 76,
        y: 70,
        emoji: "♀️",
        cor: "from-rose-500 to-pink-700",
        titulo: "1949 — O Segundo Sexo",
        texto: "Simone de Beauvoir publica 'O Segundo Sexo' e funda o feminismo filosófico moderno. Frase-marca: 'não se nasce mulher, torna-se mulher'. Aplica o existencialismo pra mostrar como o gênero é construído — e como reivindicar liberdade plena.",
        fotoUrl: cafe,
      },
    ],
    falaFinal: "Pós-guerra → Café de Flore → liberdade → feminismo. Existencialismo em 4 tempos.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "'EXISTÊNCIA PRECEDE ESSÊNCIA' significa que…",
        fotoUrl: liberdade,
        cards: [
          { id: "constroi", emoji: "🌱", titulo: "Primeiro a pessoa existe; suas escolhas depois constroem o que ela é", cor: "from-emerald-500 to-teal-700" },
          { id: "essencia-inata", emoji: "🧬", titulo: "Existe uma natureza humana fixa desde o nascimento", cor: "from-slate-400 to-gray-600" },
          { id: "deus-molda", emoji: "✨", titulo: "Deus molda cada alma antes do nascimento", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "constroi",
        feedbackAcerto: "Isso. Você se INVENTA a cada escolha. Não há essência humana pronta.",
        feedbackErro: "Sartre inverte a tradição: nada de essência fixa. A pessoa se faz pelas escolhas.",
      },
      {
        id: "q2",
        pergunta: "MÁ-FÉ é…",
        fotoUrl: cafe,
        cards: [
          { id: "fugir-liberdade", emoji: "🎭", titulo: "Autoengano em que a pessoa foge da própria liberdade dizendo 'sou assim mesmo'", cor: "from-purple-500 to-fuchsia-700" },
          { id: "mentir-outros", emoji: "🤥", titulo: "Mentir para outras pessoas", cor: "from-slate-400 to-gray-600" },
          { id: "religiao", emoji: "🙏", titulo: "Falta de fé religiosa", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "fugir-liberdade",
        feedbackAcerto: "Perfeito. Má-fé = fugir da própria liberdade se escondendo atrás de 'é minha natureza'.",
        feedbackErro: "Não é mentir aos outros nem religião: é AUTOENGANO pra fugir da própria responsabilidade.",
      },
      {
        id: "q3",
        pergunta: "'Não se NASCE mulher, TORNA-SE mulher' (Beauvoir) significa que…",
        fotoUrl: cafe,
        cards: [
          { id: "construcao-social", emoji: "♀️", titulo: "Gênero é construção social e histórica, não essência biológica fixa", cor: "from-rose-500 to-pink-700" },
          { id: "biologia", emoji: "🧬", titulo: "Só a biologia define o que é ser mulher", cor: "from-slate-400 to-gray-600" },
          { id: "escola", emoji: "🏫", titulo: "Só se torna mulher depois de terminar a escola", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "construcao-social",
        feedbackAcerto: "Isso. Feminismo existencial: gênero é feito, não dado. Base pra reivindicar liberdade plena.",
        feedbackErro: "Beauvoir diz o oposto de biologia fixa: gênero é CONSTRUÇÃO SOCIAL — e por isso pode ser mudado.",
      },
    ],
    falaFinal: "3 acertos = radar existencialista calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "O existencialismo e o feminismo de Beauvoir circulam em toda universidade brasileira. Acenda 5 estados-referência.",
    instrucao: "Acenda 5 estados-referência",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "DF"],
      pergunta: "Quais 5 estados/DF abrigam programas de referência em existencialismo e estudos de gênero (USP, UFRJ, UFMG, UFRGS, UnB)?",
    },
    falaFinal: "SP, RJ, MG, RS e DF — cinco polos onde o existencialismo é lido, criticado e ampliado.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como fazer uma escolha autêntica (segundo Sartre). 5 passos.",
    instrucao: "Toque na ordem correta",
    pergunta: "Diante de uma decisão importante:",
    paradas: [
      { id: "reconhecer", emoji: "👀", rotulo: "1. Reconheça que HÁ escolha", descricao: "Nada 'só acontece' — sempre há decisão possível, mesmo que difícil." },
      { id: "recusar-desculpas", emoji: "🚫", rotulo: "2. Recuse as desculpas de má-fé", descricao: "Não use 'sou assim mesmo', 'foi meu destino', 'não tive escolha'." },
      { id: "assumir", emoji: "🎯", rotulo: "3. Assuma a responsabilidade", descricao: "A escolha é sua — e por ela você define quem está se tornando." },
      { id: "escolher", emoji: "✅", rotulo: "4. Escolha conscientemente", descricao: "Como se sua escolha valesse pra toda a humanidade em situação parecida." },
      { id: "sustentar", emoji: "🕊️", rotulo: "5. Sustente as consequências", descricao: "Autenticidade é ficar com o que você escolheu — sem fingir que não escolheu." },
    ],
    ordemCerta: ["reconhecer", "recusar-desculpas", "assumir", "escolher", "sustentar"],
    feedbackAcerto: "Exato. Reconhecer → recusar desculpas → assumir → escolher → sustentar. Método existencialista.",
    feedbackErro: "A ordem é: reconhecer que há escolha, recusar desculpas, assumir, escolher conscientemente e sustentar.",
    falaFinal: "5 passos. Autenticidade em uma escada.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 7 — Existencialismo e liberdade",
    paragrafos: [
      { id: "p1", texto: "Depois da Segunda Guerra e do Holocausto, Sartre e Beauvoir escrevem em Paris uma nova filosofia: o EXISTENCIALISMO. Sua tese central: a EXISTÊNCIA PRECEDE A ESSÊNCIA. Primeiro a gente nasce e é jogado no mundo, DEPOIS, pelas escolhas, vai construindo o que é.", chaves: ["existencialismo", "existência"] },
      { id: "p2", texto: "Consequência dura: somos 'CONDENADOS À LIBERDADE'. Não há essência humana pronta, não há destino, não há desculpa. Toda ação (e toda inação) é escolha, e por ela nos tornamos responsáveis. Até 'não decidir' é decidir.", chaves: ["condenados", "responsabilidade"] },
      { id: "p3", texto: "Sartre chama de MÁ-FÉ o autoengano em que a gente foge dessa liberdade dizendo 'sou assim mesmo' ou 'não tive escolha'. AUTENTICIDADE, o oposto, é assumir a própria liberdade e sustentar as consequências das escolhas.", chaves: ["má-fé", "autenticidade"] },
      { id: "p4", texto: "Simone de Beauvoir aplica isso à condição feminina em 'O Segundo Sexo' (1949): 'não se nasce mulher, torna-se mulher'. Gênero é construção social e histórica — e por isso pode ser transformado. Nasce o feminismo filosófico moderno.", chaves: ["Beauvoir", "torna-se mulher"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LABORATÓRIO DA LIBERDADE! Cada caso ilustra qual conceito?",
    instrucao: "⏱️ Qual conceito existencialista é este?",
    duracaoSegundos: 15,
    pecas: [
      { id: "existencia-precede", emoji: "🌱", rotulo: "Existência precede essência" },
      { id: "ma-fe", emoji: "🎭", rotulo: "Má-fé" },
      { id: "autenticidade", emoji: "🕊️", rotulo: "Autenticidade" },
      { id: "torna-se", emoji: "♀️", rotulo: "'Torna-se' (Beauvoir)" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "'Eu me tornei uma pessoa curiosa por causa das leituras que escolhi'", emoji: "🌱", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "As escolhas constroem quem sou", emoji: "🛤️", cor: "from-emerald-400 to-teal-600" },
        contexto: "Existência primeiro, essência construída depois.",
        pecaCertaId: "existencia-precede",
        feedbackAcerto: "Isso. EXISTÊNCIA PRECEDE ESSÊNCIA — você se faz pelas escolhas.",
        feedbackErro: "É EXISTÊNCIA PRECEDE ESSÊNCIA: primeiro existe, depois se torna.",
      },
      {
        id: "r2",
        municipioA: { nome: "'Não posso dizer não ao chefe — eu sou tímido, é minha natureza'", emoji: "🎭", cor: "from-purple-400 to-fuchsia-600" },
        municipioB: { nome: "Fugir da liberdade por autoengano", emoji: "🌀", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Usa 'natureza' como desculpa para não escolher.",
        pecaCertaId: "ma-fe",
        feedbackAcerto: "Perfeito. MÁ-FÉ — se esconder atrás de 'sou assim mesmo'.",
        feedbackErro: "É MÁ-FÉ: usar 'é minha natureza' pra fugir da responsabilidade.",
      },
      {
        id: "r3",
        municipioA: { nome: "'Escolhi denunciar o assédio e assumo todas as consequências'", emoji: "🕊️", cor: "from-sky-400 to-cyan-600" },
        municipioB: { nome: "Assumir a escolha e sustentar", emoji: "✅", cor: "from-sky-400 to-cyan-600" },
        contexto: "Decisão consciente + responsabilidade assumida.",
        pecaCertaId: "autenticidade",
        feedbackAcerto: "Isso. AUTENTICIDADE — escolher conscientemente e sustentar.",
        feedbackErro: "É AUTENTICIDADE: assumir a escolha e suas consequências.",
      },
      {
        id: "r4",
        municipioA: { nome: "'Menina não brinca de bola porque não é natural' — falso: é construído'", emoji: "♀️", cor: "from-rose-400 to-pink-600" },
        municipioB: { nome: "Gênero como construção histórica", emoji: "🏗️", cor: "from-rose-400 to-pink-600" },
        contexto: "Reconhecer papéis sociais como escolha histórica.",
        pecaCertaId: "torna-se",
        feedbackAcerto: "Perfeito. 'TORNA-SE mulher' (Beauvoir) — gênero é construído.",
        feedbackErro: "É a tese de Beauvoir: gênero é CONSTRUÇÃO SOCIAL, não essência natural.",
      },
      {
        id: "r5",
        municipioA: { nome: "'Nasci pobre, não posso mudar de vida' — desculpa pra não tentar", emoji: "🎭", cor: "from-purple-400 to-fuchsia-600" },
        municipioB: { nome: "Usar circunstância como muro absoluto", emoji: "🧱", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Circunstância difícil vira desculpa pra não agir.",
        pecaCertaId: "ma-fe",
        feedbackAcerto: "Isso. MÁ-FÉ — transformar circunstância em destino inalterável.",
        feedbackErro: "É MÁ-FÉ: circunstância difícil não anula escolha, só a torna mais complexa.",
      },
      {
        id: "r6",
        municipioA: { nome: "'Assumi que quero ser médica e vou lutar por isso, com tudo o que vier'", emoji: "🕊️", cor: "from-sky-400 to-cyan-600" },
        municipioB: { nome: "Escolha consciente sustentada", emoji: "🎯", cor: "from-sky-400 to-cyan-600" },
        contexto: "Projeto de vida assumido com responsabilidade.",
        pecaCertaId: "autenticidade",
        feedbackAcerto: "Perfeito. AUTENTICIDADE — projetar-se e sustentar o projeto.",
        feedbackErro: "É AUTENTICIDADE: escolher conscientemente e sustentar com responsabilidade.",
      },
    ],
    falaFinal: "6 casos, 4 conceitos. Existencialismo no cotidiano.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: 2 modos de existir diante da liberdade.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "ma-fe",
        rotulo: "MÁ-FÉ (fuga da liberdade)",
        emoji: "🎭",
        percentual: 50,
        cor: "#8b5cf6",
        descricao:
          "Autoengano em que a pessoa se comporta como coisa: 'é minha natureza', 'não tive escolha', 'é o meu papel'. Se esconde atrás de essência fixa pra não assumir a responsabilidade que a liberdade impõe.",
        exemplos: ["🙅 'Sou assim mesmo'", "😞 'Não deu outra escolha'", "🎭 'É meu papel social'"],
      },
      {
        id: "autenticidade",
        rotulo: "AUTENTICIDADE (assumir a liberdade)",
        emoji: "🕊️",
        percentual: 50,
        cor: "#06b6d4",
        descricao:
          "Reconhecer que sempre há escolha, assumir a responsabilidade, escolher conscientemente e sustentar as consequências. Viver como projeto aberto, não como objeto pronto.",
        exemplos: ["✅ 'Escolhi e assumo'", "🎯 'Meu projeto de vida'", "🌟 'Me faço a cada dia'"],
      },
    ],
    falaFinal: "Má-fé × Autenticidade. Duas atitudes diante da liberdade.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia INVESTIGADOR DA MODERNIDADE (fase 7).",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "'EXISTÊNCIA PRECEDE ESSÊNCIA' significa que…",
        opcoes: [
          { id: "a", texto: "O ser humano primeiro existe; depois, pelas escolhas, constrói o que é. Não há essência humana fixa", correta: true },
          { id: "b", texto: "A pessoa nasce com natureza definida e imutável", correta: false },
          { id: "c", texto: "A essência é dada por Deus antes do nascimento", correta: false },
        ],
        feedbackAcerto: "Isso. Sartre inverte a tradição: você se INVENTA pelas escolhas.",
        feedbackErro: "É o oposto de essência fixa: existência primeiro, construção depois.",
      },
      {
        id: "av2",
        pergunta: "MÁ-FÉ é…",
        opcoes: [
          { id: "a", texto: "Autoengano em que a pessoa foge da própria liberdade dizendo 'sou assim mesmo, não posso mudar'", correta: true },
          { id: "b", texto: "Mentir para outras pessoas", correta: false },
          { id: "c", texto: "Falta de fé religiosa", correta: false },
        ],
        feedbackAcerto: "Perfeito. Má-fé = fugir da responsabilidade da liberdade.",
        feedbackErro: "Não é mentir aos outros nem religião: é AUTOENGANO pra escapar da liberdade.",
      },
      {
        id: "av3",
        pergunta: "'Não se NASCE mulher, TORNA-SE mulher' (Beauvoir) significa que…",
        opcoes: [
          { id: "a", texto: "Gênero é construção social e histórica — não essência biológica fixa. E por isso pode ser transformado", correta: true },
          { id: "b", texto: "Só a biologia define o que é ser mulher", correta: false },
          { id: "c", texto: "Ninguém é mulher até completar 18 anos", correta: false },
        ],
        feedbackAcerto: "Isso. Feminismo existencial: gênero é feito, e por isso pode ser reinventado.",
        feedbackErro: "É construção SOCIAL, não biológica fixa. Base do feminismo filosófico moderno.",
      },
    ],
    selo: { nome: "Investigador da Modernidade", subtitulo: "Insígnia Final — Existencialismo e Liberdade", emoji: "🕊️", cor: "from-cyan-400 to-teal-700" },
    falaFinal: "Insígnia final conquistada! Você atravessou toda a modernidade filosófica: de Descartes ao existencialismo.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Investigador da Modernidade" },
};
