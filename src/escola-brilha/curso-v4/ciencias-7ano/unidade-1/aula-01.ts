import type { AulaGeoV1 } from "../../types";
import microscopioImg from "@/assets/ciencias-7ano/u1-a1/microscopio-otico.jpg";
import celulaAnimalImg from "@/assets/ciencias-7ano/u1-a1/celula-animal.jpg";
import celulaVegetalImg from "@/assets/ciencias-7ano/u1-a1/celula-vegetal.jpg";
import tecidosImg from "@/assets/ciencias-7ano/u1-a1/tecidos-humanos.jpg";
import niveisImg from "@/assets/ciencias-7ano/u1-a1/niveis-organizacao.jpg";
import mitoseVideo from "@/assets/ciencias-7ano/u1-a1/mitose-celular.mp4.asset.json";
import cloroplastosVideo from "@/assets/ciencias-7ano/u1-a1/cloroplastos-movimento.mp4.asset.json";

/**
 * Ciências · 7º Ano · Unidade 1 · Aula 01
 * "Atlas da Vida" — Departamento de Organização da Vida.
 * O aluno ingressa como Pesquisador Júnior. Vídeo de mitose real +
 * streaming de cloroplastos ancoram a compreensão de célula viva.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-atlas-da-vida",
  titulo: "Atlas da Vida",
  iconeTrilha: "🔬",
  recompensa: { xp: 130, moedas: 50, medalha: "Pesquisador Júnior" },
  bncc: ["EF07CI07"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Microscópio óptico do Centro. Toque para iniciar a missão.",
    mapaUrl: microscopioImg,
    imagemDestaqueUrl: celulaAnimalImg,
    aurora:
      "Bem-vindo ao Centro de Pesquisas da Vida e da Terra. Departamento 1: Organização da Vida. Sua primeira missão como Pesquisador Júnior é montar o Atlas da Vida — do menor nível (célula) ao maior (organismo).",
    falaFinal:
      "Todo ser vivo é um SISTEMA HIERÁRQUICO. Entender essa hierarquia é a base da biologia moderna.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Problema científico: se você comparar uma célula da SUA PELE com uma célula de uma FOLHA DE ALFACE ao microscópio, o que espera encontrar?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: niveisImg,
    opcoes: [
      { id: "iguais", titulo: "Estruturas idênticas", subtitulo: "toda célula é igual", emoji: "🟰", cor: "from-slate-500 to-slate-700", fotoUrl: celulaAnimalImg },
      { id: "diferentes", titulo: "Parte igual, parte diferente", subtitulo: "membrana e núcleo iguais; parede e cloroplasto só na vegetal", emoji: "🧩", cor: "from-emerald-500 to-teal-700", fotoUrl: celulaVegetalImg },
      { id: "opostas", titulo: "Nada em comum", subtitulo: "biologia diferente", emoji: "❌", cor: "from-red-500 to-rose-700", fotoUrl: celulaVegetalImg },
    ],
    respostaCerta: "diferentes",
    feedbackAcerto:
      "Correto. Toda célula eucarionte compartilha membrana, citoplasma e núcleo. Só a vegetal tem PAREDE de celulose e CLOROPLASTOS (fotossíntese).",
    feedbackErro:
      "Não são iguais nem totalmente opostas. TÊM base comum (membrana, citoplasma, núcleo) e diferenças específicas (parede + cloroplasto na vegetal).",
    falaFinal:
      "Boa hipótese de pesquisador: nunca 'tudo igual' nem 'tudo diferente' — sempre PARTE COMPARTILHADA + PARTE ESPECÍFICA.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco conceitos do Departamento 1. DOIS vêm com microscopia real — mitose acelerada e cloroplastos em movimento.",
    instrucao: "Vocabulário de biologia celular",
    cadernos: [
      { id: "celula", capa: "CÉLULA", emoji: "🔬", cor: "from-sky-500 to-cyan-700", conteudo: "Unidade estrutural e funcional de todo ser vivo. Descoberta por Robert Hooke (1665) em cortiça.", exemplo: "Ex.: bactéria = 1 célula. Humano ≈ 37 trilhões.", fotoUrl: celulaAnimalImg },
      { id: "mitose", capa: "MITOSE", emoji: "🧬", cor: "from-indigo-500 to-purple-700", conteudo: "Divisão celular que gera 2 células idênticas. Base do crescimento, regeneração e reprodução assexuada. Veja em tempo real: cromossomos se alinham e se separam.", exemplo: "Ex.: cicatrização de um corte na pele.", videoUrl: mitoseVideo.url },
      { id: "cloroplasto", capa: "CLOROPLASTO", emoji: "🌱", cor: "from-emerald-500 to-green-700", conteudo: "Organela EXCLUSIVA de células vegetais e algas. Contém clorofila (verde) e faz FOTOSSÍNTESE. Veja a corrente citoplasmática movendo cloroplastos.", exemplo: "Ex.: folha viva ao microscópio óptico.", videoUrl: cloroplastosVideo.url },
      { id: "tecido", capa: "TECIDO", emoji: "🧵", cor: "from-rose-500 to-pink-700", conteudo: "Conjunto de células SEMELHANTES que trabalham juntas na mesma função.", exemplo: "Ex.: tecido muscular = fibras alongadas que contraem.", fotoUrl: tecidosImg },
      { id: "orgao", capa: "ÓRGÃO", emoji: "🫀", cor: "from-red-500 to-rose-700", conteudo: "Estrutura formada por VÁRIOS TECIDOS diferentes que juntos cumprem uma função específica.", exemplo: "Ex.: coração = tecido muscular + tecido conjuntivo + tecido nervoso + tecido epitelial.", fotoUrl: tecidosImg, partes: [
        { titulo: "Tecido muscular", texto: "Contrai e faz o coração bater." },
        { titulo: "Tecido conjuntivo", texto: "Sustenta, une e dá resistência ao órgão." },
        { titulo: "Tecido nervoso", texto: "Conduz sinais que regulam os batimentos." },
        { titulo: "Tecido epitelial", texto: "Reveste e protege superfícies internas e externas." },
      ] },
    ],
    falaFinal:
      "Célula, mitose, cloroplasto, tecido, órgão. Cinco palavras que abrem a porta da Biologia.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "A célula animal em detalhe. Toque em cada organela para investigar.",
    instrucao: "Toque nas organelas",
    mapaUrl: celulaAnimalImg,
    pontos: [
      { id: "nucleo", x: 45, y: 42, emoji: "🧬", cor: "from-indigo-500 to-purple-700", titulo: "Núcleo", texto: "Centro de comando. Contém o DNA — o manual de instruções da célula. Determina o que a célula produz e quando se divide.", fotoUrl: celulaAnimalImg },
      { id: "mitocondria", x: 75, y: 50, emoji: "🔋", cor: "from-red-500 to-rose-700", titulo: "Mitocôndria", texto: "USINA de energia. Faz respiração celular: glicose + O₂ → ATP (moeda energética). Quanto mais ativa a célula (músculo, coração), mais mitocôndrias.", fotoUrl: celulaAnimalImg },
      { id: "membrana", x: 85, y: 20, emoji: "🛡️", cor: "from-sky-500 to-cyan-700", titulo: "Membrana", texto: "Barreira SELETIVA. Deixa entrar nutrientes e sair resíduos. Bicamada lipídica com proteínas de transporte.", fotoUrl: celulaAnimalImg },
      { id: "ribossomo", x: 30, y: 78, emoji: "🟡", cor: "from-amber-500 to-orange-700", titulo: "Ribossomo", texto: "Máquina que FABRICA proteínas seguindo instruções do RNA. Está em todas as células — inclusive bactérias.", fotoUrl: celulaAnimalImg },
    ],
    falaFinal:
      "Cada organela tem função específica. Como órgãos DENTRO de uma célula. Isso é organização em nível microscópico.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão. Escolha o card correto.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual organela é EXCLUSIVA da célula vegetal (não existe na animal)?", fotoUrl: celulaVegetalImg,
        cards: [
          { id: "a", emoji: "🌱", titulo: "Cloroplasto (faz fotossíntese)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🧬", titulo: "Núcleo", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔋", titulo: "Mitocôndria", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. Cloroplasto = fotossíntese = exclusivo de plantas e algas.",
        feedbackErro: "Núcleo e mitocôndria existem em animal E vegetal. CLOROPLASTO é só de planta." },
      { id: "q2", pergunta: "Um grupo de células SEMELHANTES trabalhando juntas forma um...", fotoUrl: tecidosImg,
        cards: [
          { id: "a", emoji: "🧵", titulo: "Tecido", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🫀", titulo: "Órgão", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🧍", titulo: "Organismo", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Células iguais → tecido. Tecidos diferentes juntos → órgão.",
        feedbackErro: "Órgão é feito de VÁRIOS tecidos diferentes. Células iguais formam TECIDO." },
      { id: "q3", pergunta: "Qual a função principal da MITOCÔNDRIA?", fotoUrl: celulaAnimalImg,
        cards: [
          { id: "a", emoji: "⚡", titulo: "Produzir energia (ATP) via respiração celular", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🧬", titulo: "Armazenar o DNA", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🛡️", titulo: "Proteger a célula", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Mitocôndria = usina energética da célula. Produz ATP.",
        feedbackErro: "DNA fica no NÚCLEO. Proteção é da MEMBRANA. Mitocôndria = ENERGIA." },
    ],
    falaFinal:
      "Você já sabe distinguir organelas, tecidos e órgãos. Vocabulário base de qualquer biólogo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Toda célula EUCARIONTE se divide em duas grandes zonas: CENTRAL (núcleo — controle genético) e PERIFÉRICA (citoplasma + organelas — trabalho metabólico).",
    instrucao: "Toque nos interruptores",
    mapaUrl: celulaAnimalImg,
    camadas: [
      { id: "central", rotulo: "Zona Central", emoji: "🧬", cor: "from-indigo-500 to-purple-700", rect: { x: 30, y: 25, w: 40, h: 40 }, descricao: "Núcleo + nucléolo. Guarda o DNA e comanda a síntese de proteínas. É o CÉREBRO da célula.", fotoUrl: celulaAnimalImg },
      { id: "periferica", rotulo: "Zona Periférica", emoji: "⚙️", cor: "from-amber-500 to-orange-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Citoplasma + organelas (mitocôndria, ribossomo, retículo). Executa TODAS as reações metabólicas.", fotoUrl: celulaAnimalImg },
    ],
    falaFinal:
      "Núcleo dá as ORDENS. Citoplasma EXECUTA. Divisão de trabalho microscópica.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Trace os NÍVEIS DE ORGANIZAÇÃO BIOLÓGICA — do menor ao maior.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ordene do nível mais simples ao mais complexo:",
    paradas: [
      { id: "celula", emoji: "🔬", rotulo: "1. Célula", descricao: "Unidade básica da vida.", fotoUrl: celulaAnimalImg },
      { id: "tecido", emoji: "🧵", rotulo: "2. Tecido", descricao: "Células iguais + mesma função.", fotoUrl: tecidosImg },
      { id: "orgao", emoji: "🫀", rotulo: "3. Órgão", descricao: "Vários tecidos + função específica.", fotoUrl: niveisImg },
      { id: "sistema", emoji: "🔗", rotulo: "4. Sistema", descricao: "Órgãos integrados por função (digestório, circulatório).", fotoUrl: niveisImg },
      { id: "organismo", emoji: "🧍", rotulo: "5. Organismo", descricao: "Todos os sistemas juntos formando um ser vivo.", fotoUrl: niveisImg },
    ],
    ordemCerta: ["celula", "tecido", "orgao", "sistema", "organismo"],
    feedbackAcerto:
      "Exato. Célula → tecido → órgão → sistema → organismo. Cinco degraus da biologia.",
    feedbackErro:
      "Do MENOR ao MAIOR: célula → tecido → órgão → sistema → organismo. Cada nível é feito de vários do anterior.",
    falaFinal:
      "Essa hierarquia se repete em TODO ser vivo — de uma esponja marinha ao ser humano.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do seu primeiro dia no Departamento 1.",
    tituloLivro: "📓 Relatório · Observação Microscópica 01",
    subtitulo: "Comparação entre célula animal e vegetal ao microscópio óptico",
    paragrafos: [
      { id: "p1", texto: "MÉTODO: preparamos duas lâminas. Uma com raspado de mucosa bucal (célula ANIMAL) corada com azul de metileno. Outra com epiderme de cebola (célula VEGETAL) corada com lugol. Observamos ambas no aumento de 400x.", chaves: ["mucosa", "epiderme"], definicoes: { mucosa: "Tecido que reveste cavidades internas do corpo.", epiderme: "Camada mais externa de tecido vegetal." }, fotoUrl: microscopioImg },
      { id: "p2", texto: "OBSERVAÇÃO: as células bucais apareceram ARREDONDADAS, com membrana flexível e núcleo bem visível. As de cebola surgiram RETANGULARES, com contorno rígido (parede celular) e núcleo em posição lateral, encostado na parede.", chaves: ["parede celular", "núcleo"], definicoes: { "parede celular": "Camada rígida de celulose EXTERNA à membrana, típica de vegetais.", núcleo: "Organela que contém o DNA e comanda a célula." }, fotoUrl: celulaVegetalImg },
      { id: "p3", texto: "CONCLUSÃO: ambas são EUCARIONTES (têm núcleo definido), mas a vegetal apresenta parede celular e formato geométrico determinado. Confirma-se a hipótese: base comum + diferenças específicas. O DNA das duas segue as mesmas regras universais da biologia.", chaves: ["eucariontes"], definicoes: { eucariontes: "Células com núcleo delimitado por membrana." }, fotoUrl: niveisImg },
    ],
    falaFinal:
      "Isso é um relatório de biologia REAL. Método, observação, conclusão. É assim que a ciência se comunica.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Classifique cada estrutura corretamente.",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 30,
    pecas: [
      { id: "animal", emoji: "🐾", rotulo: "Só animal" },
      { id: "vegetal", emoji: "🌱", rotulo: "Só vegetal" },
      { id: "ambas", emoji: "🔗", rotulo: "Ambas" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Cloroplasto", emoji: "🌿", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Faz fotossíntese", emoji: "☀️", cor: "from-yellow-500 to-amber-700" }, contexto: "Organela verde que capta energia solar.", pecaCertaId: "vegetal", fotoUrl: celulaVegetalImg, feedbackAcerto: "SÓ VEGETAL. Cloroplasto = fotossíntese = plantas e algas.", feedbackErro: "Animal não faz fotossíntese. Cloroplasto é EXCLUSIVO de vegetais." },
      { id: "r2", municipioA: { nome: "Núcleo com DNA", emoji: "🧬", cor: "from-indigo-500 to-purple-700" }, municipioB: { nome: "Presente em toda eucarionte", emoji: "🌍", cor: "from-sky-500 to-cyan-700" }, contexto: "Estrutura central que guarda o material genético.", pecaCertaId: "ambas", fotoUrl: celulaAnimalImg, feedbackAcerto: "AMBAS. Núcleo é característica DEFINIDORA das eucariontes.", feedbackErro: "Núcleo existe nas duas — é o que define ser eucarionte." },
      { id: "r3", municipioA: { nome: "Parede de celulose", emoji: "🧱", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Camada rígida externa", emoji: "🛡️", cor: "from-rose-500 to-pink-700" }, contexto: "Estrutura rígida por fora da membrana, dá formato geométrico.", pecaCertaId: "vegetal", fotoUrl: celulaVegetalImg, feedbackAcerto: "SÓ VEGETAL. Célula animal é maleável — não tem parede.", feedbackErro: "Animal não tem parede — por isso muda de forma. Parede é só vegetal." },
      { id: "r4", municipioA: { nome: "Mitocôndria", emoji: "🔋", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Produz ATP", emoji: "⚡", cor: "from-amber-500 to-yellow-700" }, contexto: "Usina energética via respiração celular.", pecaCertaId: "ambas", fotoUrl: celulaAnimalImg, feedbackAcerto: "AMBAS. Toda célula eucarionte precisa produzir energia.", feedbackErro: "Plantas também respiram — precisam de mitocôndria. AMBAS." },
    ],
    falaFinal:
      "Você já classifica organelas na hora. Pronto para o próximo Departamento.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "O Atlas da Vida se organiza em duas grandes escalas: MICROSCÓPICA (célula → tecido) e MACROSCÓPICA (órgão → sistema → organismo).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: niveisImg,
    fatias: [
      { id: "micro", rotulo: "Microscópica", emoji: "🔬", percentual: 40, cor: "#0ea5e9", descricao: "Só se vê com microscópio. Onde ocorrem TODAS as reações vitais.", exemplos: ["Célula animal", "Célula vegetal", "Tecido muscular"], fotoUrl: celulaAnimalImg },
      { id: "macro", rotulo: "Macroscópica", emoji: "🧍", percentual: 60, cor: "#f59e0b", descricao: "Visível a olho nu. Órgãos, sistemas e o organismo completo.", exemplos: ["Coração", "Sistema digestório", "Ser humano"], fotoUrl: niveisImg },
    ],
    falaFinal:
      "Micro e macro estão CONECTADAS. Cada célula sustenta o organismo inteiro. Fim do Departamento 1.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Departamento 1. Responda 3 perguntas e receba sua Certificação de Pesquisador Júnior — Organização da Vida.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: microscopioImg,
    perguntas: [
      { id: "q1", pergunta: "Quem descobriu a célula em 1665?", fotoUrl: microscopioImg,
        opcoes: [
          { id: "a", texto: "Robert Hooke, observando cortiça ao microscópio", correta: true },
          { id: "b", texto: "Charles Darwin, estudando espécies" },
        ],
        feedbackAcerto: "Correto. Hooke observou pequenas 'câmaras' na cortiça e chamou de 'cells'.",
        feedbackErro: "Darwin trabalhou com evolução (séc. XIX). Célula = HOOKE, 1665, cortiça." },
      { id: "q2", pergunta: "Qual a ORDEM correta dos níveis de organização biológica (menor → maior)?", fotoUrl: niveisImg,
        opcoes: [
          { id: "a", texto: "Célula → tecido → órgão → sistema → organismo", correta: true },
          { id: "b", texto: "Organismo → sistema → tecido → célula" },
        ],
        feedbackAcerto: "Exato. Cinco degraus, do simples ao complexo.",
        feedbackErro: "Do MENOR ao MAIOR: célula → tecido → órgão → sistema → organismo." },
      { id: "q3", pergunta: "Uma célula VEGETAL se diferencia de uma ANIMAL principalmente por ter...", fotoUrl: celulaVegetalImg,
        opcoes: [
          { id: "a", texto: "Parede de celulose + cloroplastos + vacúolo central grande", correta: true },
          { id: "b", texto: "Núcleo maior que a célula animal" },
        ],
        feedbackAcerto: "Sim. Parede + cloroplasto + vacúolo grande = marca vegetal.",
        feedbackErro: "Núcleo é parecido nas duas. A diferença está em PAREDE, CLOROPLASTO e VACÚOLO." },
    ],
    selo: { nome: "Certificação · Pesquisador Júnior", subtitulo: "Departamento 1 · Organização da Vida", emoji: "🔬", cor: "from-sky-500 to-cyan-700" },
    falaFinal:
      "Departamento 1 CONCLUÍDO. Você agora entende a hierarquia da vida — da célula ao organismo. Próximo departamento: Diversidade dos Seres Vivos.",
  },
};
