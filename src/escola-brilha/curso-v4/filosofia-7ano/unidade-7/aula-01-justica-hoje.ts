import type { AulaGeoV1 } from "../../types";
import { url as veu } from "@/assets/filosofia-7ano/u7-veu-ignorancia.jpg.asset.json";
import { url as tribunal } from "@/assets/filosofia-7ano/u7-tribunal-hoje.jpg.asset.json";
import { url as justicaHoje } from "@/assets/filosofia-7ano/u7-justica-hoje.jpg.asset.json";

/**
 * Filosofia · 7º Ano · Unidade 7 · Aula 01
 * "Justiça Hoje" — EF07FI07 (autoral)
 * Tema: John Rawls, véu da ignorância e dilemas contemporâneos.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-justica-hoje",
  titulo: "Justiça Hoje",
  iconeTrilha: "🌐",
  bncc: ["EF07FI07"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "2 400 anos depois de Platão, a pergunta volta.",
    mapaUrl: veu,
    imagemDestaqueUrl: veu,
    aurora:
      "Investigador, chegamos ao fim da jornada. Platão perguntou 'o que é justiça?' na Ágora. Rawls, filósofo americano do séc. XX, faz a mesma pergunta pro nosso mundo — cheio de desigualdade, tecnologia e dilemas globais. E propõe um EXPERIMENTO MENTAL genial: imagine que você vai desenhar as regras da sociedade, mas SEM SABER quem você vai ser depois (rico ou pobre, homem ou mulher, saudável ou doente). Esse é o VÉU DA IGNORÂNCIA — o filtro que revela quais regras seriam de fato justas.",
    falaFinal:
      "Última aula: Rawls, véu da ignorância e a justiça que ainda buscamos.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite:",
    pergunta:
      "Regras da sociedade seriam mais justas se fossem escolhidas por pessoas que…",
    opcoes: [
      {
        id: "sem-saber",
        titulo: "NÃO SOUBESSEM quem seriam depois",
        subtitulo: "não sabem se serão ricas ou pobres, saudáveis ou doentes",
        emoji: "🎭",
        cor: "from-violet-400 to-purple-600",
      },
      {
        id: "posicao-atual",
        titulo: "Escolhessem já sabendo quem são",
        subtitulo: "rico decide as regras já sabendo que é rico",
        emoji: "🏆",
        cor: "from-red-400 to-rose-600",
      },
    ],
    respostaCerta: "sem-saber",
    feedbackAcerto:
      "Isso — é exatamente a genialidade de Rawls. Sem saber sua posição, você desenha regras que sejam justas MESMO NO PIOR CENÁRIO. Filtro contra egoísmo estrutural.",
    feedbackErro:
      "Quem escolhe as regras sabendo sua posição tende a defender o próprio interesse. Sem saber, é forçado a pensar em TODOS. Essa é a jogada do véu.",
    falaFinal: "Véu da ignorância = filtro contra desenhar regras egoístas.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos da justiça contemporânea.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "veu",
        capa: "1. Véu da ignorância",
        emoji: "🎭",
        cor: "from-violet-500 to-purple-700",
        conteudo:
          "VÉU DA IGNORÂNCIA (Rawls, 1971) é um EXPERIMENTO MENTAL: imagine desenhar as regras da sociedade SEM saber qual posição você vai ocupar depois — se será rico ou pobre, brasileiro ou refugiado, saudável ou doente. Sob esse véu, você tende a escolher regras que sejam justas mesmo pra quem estiver na pior situação.",
        exemplo:
          "Ex.: se você não sabe se vai ser pobre, provavelmente vai querer que exista saúde pública, educação gratuita e proteção contra fome. Justiça por precaução racional.",
        fotoUrl: veu,
      },
      {
        id: "principio-diferenca",
        capa: "2. Princípio da diferença",
        emoji: "⚖️",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "Rawls aceita que existam desigualdades sociais — mas com uma condição: elas só são justas se BENEFICIAREM OS MENOS FAVORECIDOS. Ou seja, um empresário pode ganhar muito, desde que a existência dele gere empregos, impostos e serviços que melhorem a vida dos mais pobres. Se não, a desigualdade é injusta.",
        exemplo:
          "Ex.: professora ganhar mais que estagiária faz sentido; CEO ganhar 300× o salário do faxineiro, sem retorno claro pros mais pobres, é injusto pra Rawls.",
        fotoUrl: justicaHoje,
      },
      {
        id: "justica-global",
        capa: "3. Justiça global",
        emoji: "🌍",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "Filósofos contemporâneos (Amartya Sen, Peter Singer, Nussbaum) ampliam o problema: JUSTIÇA GLOBAL é pensar direitos além das fronteiras nacionais. Fome, mudança climática, refugiados, IA — problemas que nenhum país resolve sozinho. Justiça deixa de ser só nacional; vira PLANETÁRIA.",
        exemplo:
          "Ex.: se seu iPhone é montado em condições ruins na Ásia, isso é um problema de justiça global — não só interno daquele país.",
        fotoUrl: justicaHoje,
      },
    ],
    falaFinal: "Véu, diferença, justiça global. 3 chaves contemporâneas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos da justiça contemporânea. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: tribunal,
    pontos: [
      {
        id: "rawls",
        x: 22,
        y: 34,
        emoji: "📕",
        cor: "from-violet-500 to-purple-700",
        titulo: "1971 — John Rawls publica 'Uma Teoria da Justiça'",
        texto:
          "Depois de séculos de utilitarismo ('a maior felicidade pro maior número', mesmo que alguns paguem alto), John Rawls RESGATA o contratualismo com uma inovação: o VÉU DA IGNORÂNCIA. Sob esse véu, escolheríamos: (1) máxima liberdade compatível com liberdade dos outros, e (2) desigualdades só se favorecerem os mais pobres.",
        fotoUrl: veu,
      },
      {
        id: "constituicao",
        x: 74,
        y: 30,
        emoji: "📜",
        cor: "from-emerald-500 to-teal-700",
        titulo: "1988 — Constituição Cidadã no Brasil",
        texto:
          "'Todo poder emana do povo' (art. 1º). Saúde, educação, moradia e trabalho viram direitos sociais. Ações afirmativas surgem depois pra corrigir desigualdade histórica. É Rawls virado em política pública brasileira: liberdade + princípio da diferença.",
        fotoUrl: tribunal,
      },
      {
        id: "dilemas",
        x: 28,
        y: 70,
        emoji: "🤖",
        cor: "from-sky-500 to-blue-700",
        titulo: "Séc. XXI — novos dilemas",
        texto:
          "Mudança climática, inteligência artificial, redes sociais, refugiados, distribuição de vacinas. Todos são problemas globais que a filosofia contratualista NÃO tinha imaginado. Novos filósofos precisam ampliar o contrato pra além do Estado-nação.",
        fotoUrl: justicaHoje,
      },
      {
        id: "voce",
        x: 76,
        y: 70,
        emoji: "🫵",
        cor: "from-amber-500 to-orange-700",
        titulo: "Sua vez — filosofia é ferramenta",
        texto:
          "Você percorreu Platão, Aristóteles, estoicos, medievais, contratualistas, iluministas e Rawls. Todos ofereceram FERRAMENTAS pra pensar a vida em comum. A próxima decisão justa — na escola, em casa, na cidade — passa por você. Filosofia não é matéria: é ginástica pra viver bem.",
        fotoUrl: justicaHoje,
      },
    ],
    falaFinal:
      "Rawls → Constituição → dilemas atuais → sua vez. Filosofia é ferramenta pra sua vida.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O VÉU DA IGNORÂNCIA é um experimento mental que…",
        fotoUrl: veu,
        cards: [
          {
            id: "sem-saber",
            emoji: "🎭",
            titulo: "Faz você desenhar regras sem saber sua posição futura",
            cor: "from-violet-500 to-purple-700",
          },
          {
            id: "esquece",
            emoji: "🙈",
            titulo: "Faz você esquecer tudo o que aprendeu na vida",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "verdade",
            emoji: "❌",
            titulo: "Nega que exista qualquer verdade",
            cor: "from-red-400 to-rose-600",
          },
        ],
        correta: "sem-saber",
        feedbackAcerto:
          "Isso. Sem saber onde vai cair, você desenha regras que sejam justas pra todos — inclusive pra pior posição.",
        feedbackErro:
          "Não é esquecer tudo nem negar verdade. É desenhar regras SEM SABER qual posição você vai ocupar depois.",
      },
      {
        id: "q2",
        pergunta: "O PRINCÍPIO DA DIFERENÇA de Rawls diz que desigualdades…",
        fotoUrl: justicaHoje,
        cards: [
          {
            id: "menos",
            emoji: "⚖️",
            titulo: "Só são justas se beneficiarem os menos favorecidos",
            cor: "from-sky-500 to-blue-700",
          },
          {
            id: "sempre",
            emoji: "🚫",
            titulo: "São sempre proibidas, sem exceção",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "livre",
            emoji: "💰",
            titulo: "São sempre justas, sem condição nenhuma",
            cor: "from-amber-400 to-orange-600",
          },
        ],
        correta: "menos",
        feedbackAcerto:
          "Perfeito. Desigualdade pode existir, mas SÓ se ela melhora a vida dos mais pobres.",
        feedbackErro:
          "Não é 'proibir tudo' nem 'liberar tudo'. É condicionar: desigualdade só se ajuda os menos favorecidos.",
      },
      {
        id: "q3",
        pergunta: "JUSTIÇA GLOBAL trata de problemas…",
        fotoUrl: justicaHoje,
        cards: [
          {
            id: "planeta",
            emoji: "🌍",
            titulo: "Que nenhum país resolve sozinho (clima, fome, IA, refugiados)",
            cor: "from-emerald-500 to-teal-700",
          },
          {
            id: "so-brasil",
            emoji: "🇧🇷",
            titulo: "Só do Brasil, isolados",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "so-guerra",
            emoji: "⚔️",
            titulo: "Só de guerras entre exércitos",
            cor: "from-red-400 to-rose-600",
          },
        ],
        correta: "planeta",
        feedbackAcerto:
          "Isso. Justiça deixa de ser só nacional; vira planetária. Filosofia contemporânea puxa o contrato pra fora das fronteiras.",
        feedbackErro:
          "Justiça global é justamente o oposto de 'só um país' — trata de problemas que atravessam fronteiras.",
      },
    ],
    falaFinal: "Radar contemporâneo calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O STF (Brasília) e Tribunais Superiores aplicam princípios de justiça contemporânea. Escolha 5 estados-sede de grandes cortes ou ONGs de justiça social ativas.",
    instrucao: "Acenda 5 estados com forte atuação em justiça social",
    missao: {
      tipo: "selecionar",
      siglas: ["DF", "SP", "RJ", "PE", "PA"],
      pergunta:
        "Quais 5 estados brasileiros abrigam grandes cortes federais ou ONGs de justiça social de referência?",
    },
    falaFinal:
      "DF (STF, STJ), SP, RJ, PE, PA. Justiça contemporânea trabalhada no mapa do país.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "A trajetória da justiça, em 5 passos. Coloque em ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "De Platão a você:",
    paradas: [
      {
        id: "platao",
        emoji: "🏛️",
        rotulo: "1. Platão (séc. IV a.C.)",
        descricao: "Justiça = harmonia na alma e na cidade. Fundação da questão.",
      },
      {
        id: "aristoteles",
        emoji: "🏹",
        rotulo: "2. Aristóteles",
        descricao: "Justiça como virtude praticada em comunidade.",
      },
      {
        id: "contrato",
        emoji: "📜",
        rotulo: "3. Contratualistas (séc. XVII-XVIII)",
        descricao: "Hobbes, Locke, Rousseau — justiça vem de um pacto racional.",
      },
      {
        id: "rawls",
        emoji: "🎭",
        rotulo: "4. Rawls (séc. XX)",
        descricao: "Véu da ignorância + princípio da diferença.",
      },
      {
        id: "voce",
        emoji: "🫵",
        rotulo: "5. Você (agora)",
        descricao: "Aplica tudo isso na escola, em casa e na cidade.",
      },
    ],
    ordemCerta: ["platao", "aristoteles", "contrato", "rawls", "voce"],
    feedbackAcerto:
      "Isso. 2 400 anos condensados numa escada — que termina em você. Filosofia é ferramenta viva.",
    feedbackErro:
      "Ordem cronológica: Platão → Aristóteles → contratualistas → Rawls → VOCÊ.",
    falaFinal: "5 marcos. Toda a história da justiça filosófica cabe aqui.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Última leitura da jornada.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 7 — Justiça Hoje",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Em 1971, John RAWLS propõe um experimento mental: imagine desenhar as regras da sociedade SEM saber qual posição você vai ocupar depois. Esse é o VÉU DA IGNORÂNCIA.",
        chaves: ["Rawls", "véu"],
      },
      {
        id: "p2",
        texto:
          "Sob o véu, tendemos a escolher (1) máxima liberdade compatível com a liberdade dos outros, e (2) desigualdades só se ELAS BENEFICIAREM OS MAIS POBRES (princípio da diferença).",
        chaves: ["liberdade", "diferença"],
      },
      {
        id: "p3",
        texto:
          "A Constituição brasileira de 1988 aplica boa parte dessas ideias: 'todo poder emana do povo', saúde e educação como direitos, políticas afirmativas pra corrigir desigualdade histórica. Filosofia virando política real.",
        chaves: ["Constituição", "direitos"],
      },
      {
        id: "p4",
        texto:
          "Hoje, novos dilemas (clima, IA, refugiados) exigem JUSTIÇA GLOBAL — pensar direitos além das fronteiras. Filosofia não é matéria antiga: é ginástica pra viver bem juntos, em qualquer época.",
        chaves: ["global", "ginástica"],
      },
    ],
    falaFinal: "Leu? Última missão pela frente.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo TRIBUNAL DO VÉU! Cada regra é justa ou injusta pela lente de Rawls?",
    instrucao: "⏱️ Passa no véu da ignorância?",
    duracaoSegundos: 15,
    pecas: [
      { id: "justa", emoji: "⚖️", rotulo: "Passa no véu (justa)" },
      { id: "injusta", emoji: "🚫", rotulo: "Não passa (injusta)" },
      { id: "diferenca", emoji: "🤝", rotulo: "Princípio da diferença" },
      { id: "global", emoji: "🌍", rotulo: "Justiça global" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "'Toda criança tem direito à escola pública'",
          emoji: "🏫",
          cor: "from-emerald-400 to-teal-600",
        },
        municipioB: {
          nome: "Regra que protege quem começa embaixo",
          emoji: "⚖️",
          cor: "from-teal-400 to-cyan-600",
        },
        contexto: "Escolheríamos essa sob o véu, sem saber onde nasceríamos.",
        pecaCertaId: "justa",
        feedbackAcerto: "Isso. Passa no véu — protege qualquer criança, inclusive a pobre.",
        feedbackErro:
          "É JUSTA (PASSA NO VÉU): sob ignorância da posição futura, todos escolheríamos escola pra todos.",
      },
      {
        id: "r2",
        municipioA: {
          nome: "'Só famílias ricas podem votar'",
          emoji: "🚫",
          cor: "from-red-400 to-rose-600",
        },
        municipioB: {
          nome: "Regra que só rico defenderia sabendo que é rico",
          emoji: "💰",
          cor: "from-orange-400 to-red-600",
        },
        contexto: "Sob o véu, ninguém escolheria isso.",
        pecaCertaId: "injusta",
        feedbackAcerto:
          "Isso. NÃO PASSA. Ninguém, sob o véu, arriscaria nascer pobre e perder o direito de votar.",
        feedbackErro:
          "É INJUSTA (NÃO PASSA): sob o véu, você não arriscaria nascer sem direito de voto.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "'Empresa lucra e paga impostos que financiam SUS'",
          emoji: "🏥",
          cor: "from-lime-400 to-green-600",
        },
        municipioB: {
          nome: "Desigualdade útil aos menos favorecidos",
          emoji: "🤝",
          cor: "from-emerald-400 to-teal-600",
        },
        contexto: "Rawls aceita: desigualdade que gera benefício coletivo.",
        pecaCertaId: "diferenca",
        feedbackAcerto:
          "Isso. PRINCÍPIO DA DIFERENÇA — desigualdade que melhora a vida dos mais pobres.",
        feedbackErro:
          "É PRINCÍPIO DA DIFERENÇA: desigualdade OK se financia serviços pros menos favorecidos.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "'Reduzir emissão de CO₂ pelo planeta inteiro'",
          emoji: "🌍",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Problema que nenhum país resolve sozinho",
          emoji: "🌡️",
          cor: "from-cyan-400 to-blue-600",
        },
        contexto: "Clima ignora fronteiras.",
        pecaCertaId: "global",
        feedbackAcerto:
          "Isso. JUSTIÇA GLOBAL — a atmosfera é uma só. Contrato precisa ser planetário.",
        feedbackErro: "É JUSTIÇA GLOBAL: clima não obedece fronteira nacional.",
      },
      {
        id: "r5",
        municipioA: {
          nome: "'Vacina pandêmica só pra países ricos'",
          emoji: "💉",
          cor: "from-red-400 to-rose-600",
        },
        municipioB: {
          nome: "Nenhum brasileiro escolheria isso sob o véu",
          emoji: "🎭",
          cor: "from-slate-400 to-gray-600",
        },
        contexto: "Sem saber onde nasceríamos, escolheríamos distribuição justa.",
        pecaCertaId: "injusta",
        feedbackAcerto:
          "Isso. NÃO PASSA. Ninguém, sob o véu, arriscaria nascer no país pobre e ficar sem vacina.",
        feedbackErro:
          "É INJUSTA: sob o véu, você não arriscaria ser deixado de fora só por nascer no país errado.",
      },
      {
        id: "r6",
        municipioA: {
          nome: "'Refugiados têm direito à proteção internacional'",
          emoji: "🕊️",
          cor: "from-lime-400 to-green-600",
        },
        municipioB: {
          nome: "Direito humano além-fronteira",
          emoji: "🌍",
          cor: "from-emerald-400 to-teal-600",
        },
        contexto: "Sob o véu, poderíamos nascer no país em guerra.",
        pecaCertaId: "global",
        feedbackAcerto:
          "Perfeito. JUSTIÇA GLOBAL — direitos humanos ultrapassam fronteiras nacionais.",
        feedbackErro:
          "É JUSTIÇA GLOBAL — proteção a quem foge de guerra é dever coletivo do planeta.",
      },
    ],
    falaFinal:
      "6 casos. Você já pensa como um cidadão contemporâneo, com todas as ferramentas do curso.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "A caixa de ferramentas final.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "individual",
        rotulo: "PRA VOCÊ mesmo",
        emoji: "🫀",
        percentual: 50,
        cor: "#a78bfa",
        descricao:
          "Alma tripartite (Platão), virtude como hábito (Aristóteles), dicotomia do controle (estoicos), fé + razão (medievais). Ferramentas pra sua vida interior.",
        exemplos: ["🧠 Razão comanda", "🏹 Virtude é hábito", "🧭 Foca no controlável"],
      },
      {
        id: "coletivo",
        rotulo: "PRO MUNDO em comum",
        emoji: "🌍",
        percentual: 50,
        cor: "#84cc16",
        descricao:
          "Contrato social (Hobbes/Locke/Rousseau), liberdade+igualdade+fraternidade (1789), véu da ignorância (Rawls), justiça global. Ferramentas pra convivência.",
        exemplos: ["📜 Direitos garantidos", "🎭 Regras justas pra todos", "🌍 Justiça planetária"],
      },
    ],
    falaFinal:
      "Ferramentas pessoais + coletivas. Filosofia pra viver bem, dentro e fora.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "3 perguntas finais pra conquistar a insígnia FILÓSOFO DA JUSTIÇA CONTEMPORÂNEA.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "O VÉU DA IGNORÂNCIA de Rawls é um experimento em que…",
        opcoes: [
          {
            id: "a",
            texto:
              "Você desenha as regras da sociedade sem saber qual posição vai ocupar depois",
            correta: true,
          },
          { id: "b", texto: "Você esquece tudo o que já aprendeu na vida", correta: false },
          { id: "c", texto: "Você aceita qualquer regra que o mais forte impor", correta: false },
        ],
        feedbackAcerto:
          "Isso. Sem saber a posição futura, você tende a escolher regras justas MESMO no pior cenário.",
        feedbackErro:
          "Não é esquecer o que aprendeu nem obedecer o mais forte. É desenhar regras SEM SABER quem você vai ser.",
      },
      {
        id: "av2",
        pergunta: "O PRINCÍPIO DA DIFERENÇA de Rawls diz que desigualdades…",
        opcoes: [
          { id: "a", texto: "São sempre proibidas", correta: false },
          {
            id: "b",
            texto: "Só são justas quando BENEFICIAM OS MENOS FAVORECIDOS",
            correta: true,
          },
          { id: "c", texto: "São sempre boas, sem condição", correta: false },
        ],
        feedbackAcerto:
          "Perfeito. Desigualdade OK — mas só se ajuda os que estão pior.",
        feedbackErro:
          "Nem 'sempre proibida' nem 'sempre boa'. É CONDICIONAL: só se ajuda os menos favorecidos.",
      },
      {
        id: "av3",
        pergunta: "JUSTIÇA GLOBAL trata de…",
        opcoes: [
          { id: "a", texto: "Só problemas do Brasil", correta: false },
          {
            id: "b",
            texto:
              "Problemas que atravessam fronteiras (clima, IA, refugiados, pandemias)",
            correta: true,
          },
          { id: "c", texto: "Só disputas entre exércitos", correta: false },
        ],
        feedbackAcerto:
          "Isso. Justiça planetária — problemas que nenhum país resolve sozinho.",
        feedbackErro:
          "Justiça global é o OPOSTO de 'só um país' — trata de problemas que atravessam fronteiras.",
      },
    ],
    selo: {
      nome: "Filósofo da Justiça Contemporânea",
      subtitulo: "Insígnia Final do 7º Ano — Investigador da Justiça",
      emoji: "🌐",
      cor: "from-violet-400 to-purple-700",
    },
    falaFinal:
      "INSÍGNIA FINAL CONQUISTADA! Você atravessou 2 400 anos de filosofia da justiça — de Platão a Rawls. A próxima decisão justa é sua.",
  },

  recompensa: { xp: 450, moedas: 350, medalha: "Filósofo da Justiça Contemporânea" },
};
