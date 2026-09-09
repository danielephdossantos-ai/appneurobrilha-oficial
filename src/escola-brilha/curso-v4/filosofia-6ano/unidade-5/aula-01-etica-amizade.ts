import type { AulaGeoV1 } from "../../types";
import { url as amigos } from "@/assets/filosofia-6ano/u5-amigos.jpg.asset.json";
import { url as aristoteles } from "@/assets/filosofia-6ano/u5-aristoteles.jpg.asset.json";
import { url as ajuda } from "@/assets/filosofia-6ano/u5-ajuda-mutua.jpg.asset.json";

/**
 * Filosofia · 6º Ano · Unidade 5 · Aula 01
 * "Ética da Amizade" — EF06FI05 (autoral).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-etica-amizade",
  titulo: "Ética da Amizade",
  iconeTrilha: "🤝",
  bncc: ["EF06FI05"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olha essa turma. Aqui tem 3 tipos de amizade diferentes ao mesmo tempo.",
    mapaUrl: amigos,
    imagemDestaqueUrl: amigos,
    aurora:
      "Aprendiz, ARISTÓTELES — discípulo de Platão, séc. IV a.C. — disse uma coisa que ainda vale: existem TRÊS tipos de amizade. Uma dura só enquanto dá LUCRO. Outra dura só enquanto dá PRAZER. E a terceira, a mais rara, dura porque as pessoas querem O BEM UMA DA OUTRA. Só a terceira sobrevive quando tudo dá errado.",
    falaFinal:
      "Nesta aula você aprende a distinguir os 3 tipos de amizade — e por que escolher amigo é uma decisão FILOSÓFICA.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: o que faz uma amizade DURAR anos, mesmo quando tudo muda?",
    pergunta: "O que sustenta uma amizade verdadeira?",
    opcoes: [
      { id: "utilidade", titulo: "UTILIDADE", subtitulo: "um ajuda o outro em tarefa/trabalho", emoji: "🛠️", cor: "from-slate-400 to-gray-600" },
      { id: "prazer", titulo: "PRAZER", subtitulo: "é divertido estar junto", emoji: "🎉", cor: "from-amber-400 to-orange-600" },
      { id: "virtude", titulo: "VIRTUDE", subtitulo: "cada um quer o BEM do outro", emoji: "💛", cor: "from-emerald-400 to-teal-600" },
    ],
    respostaCerta: "virtude",
    feedbackAcerto: "Isso é Aristóteles puro. Só a amizade por VIRTUDE aguenta o tempo, as brigas e as mudanças da vida.",
    feedbackErro: "As 3 são amizades — mas só a por VIRTUDE dura de verdade. As outras somem quando a utilidade acaba ou o prazer passa.",
    falaFinal: "3 tipos. Só uma passa no teste do tempo.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave da ética aristotélica.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "philia", capa: "1. Philia", emoji: "🤝", cor: "from-emerald-500 to-teal-700",
        conteudo: "PHILIA (fi-lí-a) é a palavra grega pra AMIZADE — o afeto entre pessoas que se escolhem, se respeitam e desejam o bem uma da outra. Não é romance nem parentesco: é o vínculo LIVRE por excelência.",
        exemplo: "Ex.: 'philia' é a raiz de FILOSOFIA (amor à sabedoria) e FILANTROPIA (amor à humanidade).",
        fotoUrl: amigos },
      { id: "virtude", capa: "2. Virtude (Areté)", emoji: "🌟", cor: "from-amber-500 to-orange-700",
        conteudo: "VIRTUDE (ou 'areté', em grego) é uma qualidade de caráter que a pessoa CULTIVA com hábito: coragem, honestidade, generosidade, justiça. Amigo virtuoso quer sua virtude também — e te empurra pra ser melhor.",
        exemplo: "Ex.: amigo virtuoso não te acha 'legal' quando você faz algo errado — ele te avisa, mesmo que doa.",
        fotoUrl: aristoteles },
      { id: "eudaimonia", capa: "3. Eudaimonia", emoji: "☀️", cor: "from-yellow-500 to-orange-700",
        conteudo: "EUDAIMONIA é a palavra grega pra 'vida boa e realizada' — não é prazer curto nem sorte de momento, é a vida INTEIRA vivida com sentido, virtude e boas amizades. Aristóteles: sem amigos virtuosos, não há eudaimonia.",
        exemplo: "Ex.: pessoa rica mas cercada só de bajuladores NÃO tem eudaimonia. Pessoa simples mas com bons amigos, TEM.",
        fotoUrl: ajuda },
    ],
    falaFinal: "Philia + virtude → eudaimonia. Amizade não é acessório — é peça central da vida boa.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "3 tipos de amizade + 1 pseudo-amizade tóxica. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: amigos,
    pontos: [
      { id: "utilidade", x: 22, y: 32, emoji: "🛠️", cor: "from-slate-500 to-slate-700",
        titulo: "1. Amizade por utilidade",
        texto: "Se juntam porque um serve pro outro: colegas de trabalho que dividem tarefa, dupla de estudo que se ajuda na prova. Não é RUIM — é útil. Mas quando a utilidade acaba, a amizade some junto.",
        fotoUrl: aristoteles },
      { id: "prazer", x: 70, y: 28, emoji: "🎉", cor: "from-amber-500 to-orange-700",
        titulo: "2. Amizade por prazer",
        texto: "Se juntam porque é DIVERTIDO: parceiros de jogo, turma da festa, colegas de riso. Aristóteles: comum entre jovens porque a gente muda muito nessa idade. Passou o prazer, passou a amizade.",
        fotoUrl: amigos },
      { id: "virtude", x: 28, y: 72, emoji: "💛", cor: "from-emerald-500 to-teal-700",
        titulo: "3. Amizade por virtude (a verdadeira)",
        texto: "Se juntam porque um enxerga no outro alguém que quer O BEM. Não desaparece na crise, não some no fracasso, avisa quando você está errando. É RARA — Aristóteles dizia que a maioria das pessoas tem só 2 ou 3 na vida inteira.",
        fotoUrl: ajuda },
      { id: "toxica", x: 74, y: 74, emoji: "☠️", cor: "from-red-500 to-orange-700",
        titulo: "4. Pseudo-amizade tóxica",
        texto: "NÃO é amizade — só parece. É quem te usa (finge amizade pra ganhar algo), te DIMINUI (pra se sentir maior), ou te empurra pro erro (pra você cair junto). Aprender a identificar e se afastar é ATO ÉTICO, não maldade.",
        fotoUrl: amigos },
    ],
    falaFinal: "3 amizades reais + 1 tóxica. Aristóteles te dá o mapa; você escolhe com quem andar.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Segundo Aristóteles, a amizade MAIS DURADOURA é a por…", fotoUrl: aristoteles,
        cards: [
          { id: "virtude", emoji: "💛", titulo: "VIRTUDE — quando cada um quer o bem do outro", cor: "from-emerald-500 to-teal-700" },
          { id: "prazer", emoji: "🎉", titulo: "PRAZER — enquanto for divertido estar junto", cor: "from-amber-400 to-orange-600" },
          { id: "utilidade", emoji: "🛠️", titulo: "UTILIDADE — enquanto um serve pro outro", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "virtude",
        feedbackAcerto: "Isso. Só a virtude aguenta o tempo, a crise e a distância.",
        feedbackErro: "As três existem, mas só a por VIRTUDE sobrevive quando prazer e utilidade acabam." },
      { id: "q2", pergunta: "O que é EUDAIMONIA?", fotoUrl: ajuda,
        cards: [
          { id: "prazer", emoji: "🎢", titulo: "Prazer intenso de momento", cor: "from-amber-400 to-orange-600" },
          { id: "vida", emoji: "☀️", titulo: "A vida BOA e realizada como um todo", cor: "from-yellow-500 to-orange-700" },
          { id: "sorte", emoji: "🍀", titulo: "Ter sorte financeira", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "vida",
        feedbackAcerto: "Perfeito. Eudaimonia é a vida INTEIRA com sentido e virtude — não um pico curto.",
        feedbackErro: "Eudaimonia é a VIDA INTEIRA bem vivida, com virtude e amizades verdadeiras — não é prazer momentâneo nem só sorte." },
      { id: "q3", pergunta: "Um amigo VIRTUOSO, quando você faz algo errado…", fotoUrl: amigos,
        cards: [
          { id: "aviso", emoji: "🗣️", titulo: "Te avisa com honestidade, mesmo que doa", cor: "from-emerald-500 to-teal-700" },
          { id: "cala", emoji: "🤐", titulo: "Cala pra não te chatear", cor: "from-slate-400 to-gray-600" },
          { id: "junto", emoji: "🎉", titulo: "Faz junto pra você não se sentir sozinho", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "aviso",
        feedbackAcerto: "Isso. Amigo de verdade AVISA — quem só concorda com tudo, é bajulador, não amigo.",
        feedbackErro: "Amigo virtuoso AVISA. Quem cala ou faz junto no erro não é amigo — é conveniente ou cúmplice." },
    ],
    falaFinal: "Radar afinado. Você distingue amigo real de bajulador e cúmplice.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "A ideia grega de PHILIA é raiz da SOLIDARIEDADE moderna. Acenda 5 estados brasileiros com maior número de organizações sociais que trabalham com adolescentes.",
    instrucao: "Acenda 5 estados com forte rede de organizações sociais pra jovens",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "MG", "BA", "PE"], pergunta: "5 estados com maior número de ONGs atuando com juventude:" },
    falaFinal: "SP, RJ, MG, BA e PE lideram — de coletivos culturais a projetos socioeducativos. Philia em escala coletiva.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma amizade CRESCE do encontro ao vínculo virtuoso? Coloque na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Passos da construção de uma amizade real:",
    paradas: [
      { id: "encontro", emoji: "👋", rotulo: "1. ENCONTRO", descricao: "Duas pessoas se cruzam por acaso — escola, esporte, projeto." },
      { id: "convivio", emoji: "🕰️", rotulo: "2. CONVÍVIO", descricao: "Passam TEMPO juntas em situações variadas — não só na diversão." },
      { id: "confianca", emoji: "🤝", rotulo: "3. CONFIANÇA", descricao: "Descobrem que podem contar uma com a outra em coisas pequenas." },
      { id: "teste", emoji: "🌩️", rotulo: "4. TESTE", descricao: "Uma crise (briga, erro, fracasso) mostra se a amizade era só de superfície ou vai fundo." },
      { id: "virtude", emoji: "💛", rotulo: "5. VIRTUDE", descricao: "Depois de várias crises superadas juntas, cada um enxerga no outro alguém que QUER O BEM — nasce a philia aristotélica." },
    ],
    ordemCerta: ["encontro", "convivio", "confianca", "teste", "virtude"],
    feedbackAcerto: "Exato. Encontro → convívio → confiança → teste → virtude. Anos, não semanas.",
    feedbackErro: "A ordem é: 1) encontro, 2) convívio, 3) confiança, 4) teste, 5) virtude — leva TEMPO.",
    falaFinal: "5 passos. Amizade virtuosa não é 'match' — é construção paciente.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Aprendiz",
    subtitulo: "Página 5 — Ética da Amizade",
    paragrafos: [
      { id: "p1", texto: "Pra ARISTÓTELES (384–322 a.C.), amizade (PHILIA) não é acessório da vida boa — é PARTE dela. Ele dedicou dois livros inteiros da 'Ética a Nicômaco' a analisar tipos de amizade e por que elas importam pra uma vida realizada (eudaimonia).", chaves: ["Aristóteles", "philia", "eudaimonia"] },
      { id: "p2", texto: "Existem TRÊS TIPOS: por UTILIDADE (um serve pro outro em algo prático), por PRAZER (é divertido) e por VIRTUDE (cada um quer o bem do outro). Só a terceira é PLENA — as outras duas somem quando a utilidade acaba ou o prazer passa.", chaves: ["utilidade", "prazer", "virtude"] },
      { id: "p3", texto: "A amizade por VIRTUDE exige TEMPO e SEMELHANÇA de caráter. Aristóteles avisa: 'não se pode ter muitos amigos assim, pois um só pode conhecer bem poucos'. Duas ou três amizades virtuosas na vida inteira já é muito.", chaves: ["tempo", "poucos amigos"] },
      { id: "p4", texto: "Existe também a PSEUDO-AMIZADE tóxica — quem te USA, DIMINUI ou empurra PRO ERRO. Reconhecer e se afastar não é maldade, é ÉTICA: cuidar de si é condição pra viver bem e conseguir cuidar dos outros que realmente merecem.", chaves: ["pseudo-amizade", "afastar-se"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo TIPÓLOGO DE AMIZADE! Cada cena mostra uma situação — diga se é UTILIDADE, PRAZER, VIRTUDE ou TÓXICA.",
    instrucao: "⏱️ Que tipo de amizade é essa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "utilidade", emoji: "🛠️", rotulo: "Utilidade" },
      { id: "prazer", emoji: "🎉", rotulo: "Prazer" },
      { id: "virtude", emoji: "💛", rotulo: "Virtude" },
      { id: "toxica", emoji: "☠️", rotulo: "Tóxica" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'Ela me chama só quando precisa de cola na prova'", emoji: "🛠️", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Vínculo enquanto há benefício prático", emoji: "📝", cor: "from-gray-400 to-slate-600" },
        contexto: "Sem o benefício, o contato desaparece.", pecaCertaId: "utilidade",
        feedbackAcerto: "Isso. UTILIDADE — nada de errado, mas some quando a cola some.",
        feedbackErro: "É UTILIDADE: o vínculo só existe enquanto há benefício prático." },
      { id: "r2", municipioA: { nome: "'Sempre que erro, ele me avisa com respeito — e me apoia pra corrigir'", emoji: "💛", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Quer o BEM, não a aprovação fácil", emoji: "🤝", cor: "from-teal-400 to-emerald-600" },
        contexto: "Aviso honesto + apoio real na correção.", pecaCertaId: "virtude",
        feedbackAcerto: "Perfeito. VIRTUDE aristotélica — quer o teu bem, não te bajula.",
        feedbackErro: "É VIRTUDE: só amigo virtuoso avisa quando você erra E te ajuda a corrigir." },
      { id: "r3", municipioA: { nome: "'Só nos falamos nas festas — é hilário juntos, mas nunca no dia a dia'", emoji: "🎉", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Vínculo enquanto rola diversão", emoji: "🥳", cor: "from-yellow-400 to-orange-600" },
        contexto: "Fora da festa, contato zero.", pecaCertaId: "prazer",
        feedbackAcerto: "Isso. PRAZER — comum e legítimo, mas não é a virtuosa.",
        feedbackErro: "É PRAZER: divertido, mas o vínculo depende do momento divertido." },
      { id: "r4", municipioA: { nome: "'Ele me diminui na frente dos outros pra parecer maior'", emoji: "☠️", cor: "from-red-400 to-orange-600" },
        municipioB: { nome: "Pseudo-amizade que te encolhe", emoji: "🚫", cor: "from-orange-400 to-red-600" },
        contexto: "O vínculo só existe às custas da tua diminuição.", pecaCertaId: "toxica",
        feedbackAcerto: "Boa. TÓXICA — não é amizade, se afaste sem culpa.",
        feedbackErro: "É TÓXICA: quem te DIMINUI pra se sentir maior não é amigo, é abusador." },
      { id: "r5", municipioA: { nome: "'Nos conhecemos há 10 anos, brigamos, superamos e continuamos crescendo juntos'", emoji: "💛", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Vínculo que sobreviveu ao TEMPO e aos testes", emoji: "🕰️", cor: "from-teal-400 to-emerald-600" },
        contexto: "Amizade que passou por crises e permanece.", pecaCertaId: "virtude",
        feedbackAcerto: "Isso. VIRTUDE pura — só ela aguenta 10 anos e crises.",
        feedbackErro: "É VIRTUDE: aguentar tempo E crise é marca da amizade aristotélica." },
      { id: "r6", municipioA: { nome: "'Ele me chama pra faltar aula porque acha graça de me ver encrencado'", emoji: "☠️", cor: "from-red-400 to-orange-600" },
        municipioB: { nome: "Pseudo-amizade que te empurra pro erro", emoji: "⚠️", cor: "from-orange-400 to-red-600" },
        contexto: "O 'convite' te prejudica e diverte o outro.", pecaCertaId: "toxica",
        feedbackAcerto: "Perfeito. TÓXICA — quem lucra com teu problema não é amigo.",
        feedbackErro: "É TÓXICA: quem te EMPURRA pro erro pra se divertir com sua queda é pseudo-amigo." },
    ],
    falaFinal: "6 rodadas. Você distingue os 3 tipos reais + a pseudo-amizade tóxica. Radar afinado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: as 2 grandes categorias de vínculo.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "condicional", rotulo: "AMIZADE CONDICIONAL (utilidade/prazer)", emoji: "🎉", percentual: 50, cor: "#f59e0b",
        descricao: "Depende de algo (benefício ou diversão). Quando a condição some, o vínculo some. Não é ruim — mas é passageira. Muitos colegas de escola, trabalho, festa entram aqui.",
        exemplos: ["🛠️ Dupla de trabalho", "🎉 Turma da festa", "📱 Parceria de jogo online"] },
      { id: "virtuosa", rotulo: "AMIZADE VIRTUOSA (bem mútuo)", emoji: "💛", percentual: 50, cor: "#10b981",
        descricao: "Cada um quer o BEM do outro, independente de lucro ou diversão. Sobrevive à crise, à distância, à mudança de vida. RARA — 2 ou 3 na vida inteira já é muito. É a que constrói eudaimonia.",
        exemplos: ["💛 Aguenta 10+ anos", "🌩️ Sobrevive à crise", "🗣️ Avisa quando erra"] },
    ],
    falaFinal: "Duas categorias. Cultivar a virtuosa é decisão filosófica.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia CULTIVADOR DE PHILIA.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Segundo Aristóteles, quais são os 3 tipos de amizade?",
        opcoes: [
          { id: "a", texto: "Amigos de infância, escola e trabalho", correta: false },
          { id: "b", texto: "Por UTILIDADE, por PRAZER e por VIRTUDE", correta: true },
          { id: "c", texto: "Presenciais, virtuais e híbridos", correta: false },
        ],
        feedbackAcerto: "Isso. Só a por VIRTUDE é plena — as outras somem quando o benefício ou prazer acaba.",
        feedbackErro: "Aristóteles classifica por MOTIVO: utilidade, prazer e virtude. Só a virtude é plena." },
      { id: "av2", pergunta: "Um amigo que só concorda com você em TUDO, mesmo quando você erra, é:",
        opcoes: [
          { id: "a", texto: "Um amigo virtuoso e leal", correta: false },
          { id: "b", texto: "Um bajulador — não é amigo de verdade", correta: true },
          { id: "c", texto: "Uma amizade por prazer inofensiva", correta: false },
        ],
        feedbackAcerto: "Perfeito. Amigo virtuoso AVISA. Quem só concorda é bajulador.",
        feedbackErro: "É BAJULADOR: amizade virtuosa exige honestidade — inclusive pra avisar quando você erra." },
      { id: "av3", pergunta: "Por que Aristóteles diz que ninguém tem MUITOS amigos virtuosos?",
        opcoes: [
          { id: "a", texto: "Porque a maioria das pessoas é má", correta: false },
          { id: "b", texto: "Porque amizade virtuosa exige TEMPO, convívio e caráter — impossível cultivar com muitos", correta: true },
          { id: "c", texto: "Porque só filósofos conseguem ter amigos", correta: false },
        ],
        feedbackAcerto: "Isso. Duas ou três amizades virtuosas na vida inteira já é uma conquista.",
        feedbackErro: "Amizade virtuosa exige TEMPO real de convívio — impossível cultivar assim com muitos." },
    ],
    selo: { nome: "Cultivador de Philia", subtitulo: "Insígnia da Ética Aristotélica", emoji: "💛", cor: "from-emerald-400 to-teal-700" },
    falaFinal: "Insígnia conquistada! Você tem critério pra escolher com quem construir vida.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Cultivador de Philia" },
};
