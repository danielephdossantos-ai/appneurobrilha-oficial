import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png.asset.json";
import { url as foneImg } from "@/assets/ciencias-3ano/u7/fone.jpg.asset.json";
import { url as telaImg } from "@/assets/ciencias-3ano/u7/tela.jpg.asset.json";
import { url as pausaImg } from "@/assets/ciencias-3ano/u7/pausa.jpg.asset.json";
import { url as oculosImg } from "@/assets/ciencias-3ano/u7/oculos.jpg.asset.json";
import { url as ouvidoImg } from "@/assets/ciencias-3ano/u6/ouvido.jpg.asset.json";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-saude-sentidos",
  titulo: "Saúde Auditiva e Visual",
  iconeTrilha: "👁️",
  bncc: ["EF03CI03"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "O Códice do 3º ano está brilhando forte. Cuide dos seus sentidos!",
    mapaUrl: telaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora: "Guardião, chegamos à última missão do 3º ano. Nossos maiores tesouros são os OLHOS e os OUVIDOS. Nossa missão hoje: aprender a protegê-los da tecnologia.",
    falaFinal: "Sem visão e audição saudáveis, um cientista não explora nada. Vamos cuidar!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "HIPÓTESE.",
    pergunta: "Ouvir música no fone MUITO ALTO por horas pode causar o quê?",
    fotoUrl: foneImg,
    opcoes: [
      { id: "nada", titulo: "NADA", subtitulo: "ouvido é forte", emoji: "😎", cor: "from-slate-500 to-slate-700" },
      { id: "dano", titulo: "DANOS À AUDIÇÃO", subtitulo: "pode causar surdez", emoji: "🚨", cor: "from-red-500 to-rose-700" },
      { id: "melhora", titulo: "MELHORA O OUVIDO", subtitulo: "vira super-audição", emoji: "🦸", cor: "from-yellow-500 to-amber-700" },
    ],
    respostaCerta: "dano",
    feedbackAcerto: "HIPÓTESE CONFIRMADA! Volume alto por muito tempo machuca o tímpano. Pode causar perda auditiva permanente.",
    feedbackErro: "Fone alto por horas = risco de PERDA DE AUDIÇÃO. Nossos ouvidos são delicados.",
    falaFinal: "Cuidar dos sentidos é ciência preventiva. Vamos aprender como.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três conceitos de saúde dos sentidos.",
    instrucao: "Vocabulário de saúde",
    cadernos: [
      { id: "aud", capa: "SAÚDE AUDITIVA", emoji: "👂", cor: "from-emerald-500 to-green-700", conteudo: "Cuidados para EVITAR perda de audição: proteger dos ruídos muito altos e não colocar objetos no ouvido.", exemplo: "Ex.: volume até a metade, evitar shows sem protetor.", fotoUrl: ouvidoImg },
      { id: "vis", capa: "SAÚDE VISUAL", emoji: "👁️", cor: "from-sky-500 to-blue-700", conteudo: "Hábitos para manter a VISÃO saudável: ler com boa luz, pausar da tela, não esfregar os olhos.", exemplo: "Ex.: regra 20-20, óculos quando necessário.", fotoUrl: oculosImg },
      { id: "pol", capa: "POLUIÇÃO SONORA", emoji: "🚨", cor: "from-red-500 to-rose-700", conteudo: "Excesso de BARULHOS ALTOS na rua ou em casa. Causa estresse, dor de cabeça e cansaço.", exemplo: "Ex.: caixa de som na rua, buzina, obra ao lado.", fotoUrl: foneImg },
    ],
    falaFinal: "Prevenir é sempre melhor que remediar.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Hábitos saudáveis do dia a dia. Toque em cada dica.",
    instrucao: "Toque em cada dica",
    mapaUrl: pausaImg,
    pontos: [
      { id: "vol", x: 20, y: 30, emoji: "🔉", cor: "from-emerald-500 to-green-700", titulo: "Volume até a metade", texto: "Use fones e caixas de som no volume moderado.", fotoUrl: foneImg },
      { id: "pausa", x: 50, y: 50, emoji: "⏸️", cor: "from-sky-500 to-blue-700", titulo: "Regra 20-20", texto: "A cada 20 min de tela, olhe 20 seg para algo distante.", fotoUrl: pausaImg },
      { id: "luz", x: 80, y: 30, emoji: "💡", cor: "from-yellow-500 to-amber-700", titulo: "Boa iluminação", texto: "Nunca leia ou use celular no escuro. Acenda a luz.", fotoUrl: oculosImg },
      { id: "limpo", x: 50, y: 80, emoji: "🧼", cor: "from-cyan-500 to-teal-700", titulo: "Mãos limpas", texto: "Nunca esfregue os olhos com as mãos sujas.", fotoUrl: oculosImg },
    ],
    falaFinal: "Quatro hábitos simples que preservam sua visão e audição a vida inteira.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual atitude PROTEGE a visão?", fotoUrl: pausaImg,
        cards: [
          { id: "a", emoji: "⏸️", titulo: "Pausas de 20 segundos a cada 20 min de tela", cor: "from-emerald-500 to-green-700" },
          { id: "b", emoji: "🌑", titulo: "Usar celular no escuro sem parar", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "👊", titulo: "Esfregar os olhos com força", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Isso! Regra 20-20.", feedbackErro: "PAUSA nas telas = descanso pros olhos." },
      { id: "q2", pergunta: "Qual atitude PROTEGE a audição?", fotoUrl: foneImg,
        cards: [
          { id: "a", emoji: "🔊", titulo: "Fone no volume máximo o dia todo", cor: "from-red-500 to-rose-700" },
          { id: "b", emoji: "🔉", titulo: "Manter volume na metade da barra", cor: "from-emerald-500 to-green-700" },
          { id: "c", emoji: "🎧", titulo: "Colocar cotonete dentro do ouvido", cor: "from-slate-500 to-slate-700" },
        ], correta: "b",
        feedbackAcerto: "Correto. Volume moderado salva o tímpano.", feedbackErro: "Volume ALTO = risco. Fique na metade da barra." },
      { id: "q3", pergunta: "O que é poluição sonora?", fotoUrl: foneImg,
        cards: [
          { id: "a", emoji: "🚨", titulo: "Excesso de barulhos altos que fazem mal", cor: "from-red-500 to-rose-700" },
          { id: "b", emoji: "🎵", titulo: "Uma música bonita", cor: "from-emerald-500 to-green-700" },
          { id: "c", emoji: "🤫", titulo: "Silêncio completo", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim.", feedbackErro: "Barulhos ALTOS demais = poluição sonora." },
    ],
    falaFinal: "Você domina as regras de saúde dos sentidos.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois cuidados. Dois grandes tesouros.",
    instrucao: "Toque nos interruptores",
    mapaUrl: pausaImg,
    camadas: [
      { id: "olhos", rotulo: "Cuidados com os olhos", emoji: "👁️", cor: "from-sky-500 to-blue-700", rect: { x: 2, y: 30, w: 47, h: 65 }, descricao: "Pausas, boa luz, distância da tela, óculos quando necessário.", fotoUrl: oculosImg },
      { id: "ouvidos", rotulo: "Cuidados com os ouvidos", emoji: "👂", cor: "from-emerald-500 to-green-700", rect: { x: 50, y: 30, w: 48, h: 65 }, descricao: "Volume moderado, evitar ruídos altos, não introduzir objetos.", fotoUrl: ouvidoImg },
    ],
    falaFinal: "Olhos e ouvidos: dois portais pro mundo. Cuide bem.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Aplique a regra 20-20 na ordem certa.",
    instrucao: "Toque nas paradas na ordem correta",
    pergunta: "Regra 20-20 para os olhos",
    paradas: [
      { id: "estuda", emoji: "💻", rotulo: "1. Usa tela 20 minutos", descricao: "Estudo, jogo ou vídeo por 20 min.", fotoUrl: telaImg },
      { id: "alarme", emoji: "⏰", rotulo: "2. Timer avisa", descricao: "Alarme dispara aos 20 min.", fotoUrl: pausaImg },
      { id: "olha", emoji: "🌳", rotulo: "3. Olha longe 20 segundos", descricao: "Focar em algo bem distante.", fotoUrl: pausaImg },
      { id: "descansa", emoji: "😌", rotulo: "4. Músculos dos olhos relaxam", descricao: "Foco muda de perto pra longe.", fotoUrl: pausaImg },
      { id: "volta", emoji: "🔄", rotulo: "5. Volta à tela renovado", descricao: "Continua com olhos descansados.", fotoUrl: oculosImg },
    ],
    ordemCerta: ["estuda", "alarme", "olha", "descansa", "volta"],
    feedbackAcerto: "Ciclo saudável!",
    feedbackErro: "Estuda → alarme → olha longe → descansa → volta.",
    falaFinal: "20 min tela + 20 seg longe = olhos saudáveis por muitos anos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "🔬 Relatório da Expedição · Semana 7",
    subtitulo: "Investigação: saúde dos sentidos",
    paragrafos: [
      { id: "p1", texto: "Nossos OLHOS captam a luz e nossos OUVIDOS captam o som. Eles são muito sensíveis e precisam de CUIDADOS diários pra durar a vida toda.",
        chaves: ["olhos", "ouvidos"], definicoes: { olhos: "Órgão da visão.", ouvidos: "Órgão da audição." }, fotoUrl: ouvidoImg },
      { id: "p2", texto: "Ouvir música no fone em VOLUME MUITO ALTO ou ficar com a tela do celular colada no rosto no escuro pode MACHUCAR esses órgãos com o tempo.",
        chaves: ["volume"], definicoes: { volume: "Intensidade do som — quanto maior, mais risco." }, fotoUrl: foneImg },
      { id: "p3", texto: "Médicos e cientistas recomendam: PISCAR bastante, dar PAUSAS para olhar pela janela, manter o volume na METADE e nunca colocar objetos dentro do ouvido.",
        chaves: [], definicoes: {}, fotoUrl: pausaImg },
    ],
    falaFinal: "Ciência preventiva salva sentidos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "O Escudo dos Sentidos! Escolha SAUDÁVEL ou PREJUDICIAL.",
    instrucao: "⏱️ Veja a atitude e classifique",
    duracaoSegundos: 25,
    pecas: [
      { id: "saud", emoji: "✅", rotulo: "Saudável" },
      { id: "prej", emoji: "🚨", rotulo: "Prejudicial" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Volume no talo por 3h", emoji: "🔊", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Fone gigante", emoji: "🎧", cor: "from-red-500 to-rose-700" }, contexto: "Criança com fones no volume máximo escutando música 3 horas seguidas.", pecaCertaId: "prej", fotoUrl: foneImg, feedbackAcerto: "PREJUDICIAL. Pode causar surdez.", feedbackErro: "Fone alto por horas = PREJUDICIAL." },
      { id: "r2", municipioA: { nome: "Pausa a cada 20 min", emoji: "⏸️", cor: "from-emerald-500 to-green-700" }, municipioB: { nome: "Olha janela", emoji: "🌳", cor: "from-lime-500 to-green-700" }, contexto: "A cada 20 minutos de computador, para e olha pela janela pra descansar os olhos.", pecaCertaId: "saud", fotoUrl: pausaImg, feedbackAcerto: "SAUDÁVEL!", feedbackErro: "Regra 20-20 = SAUDÁVEL." },
      { id: "r3", municipioA: { nome: "Celular no escuro à noite", emoji: "🌑", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Colado no rosto", emoji: "📱", cor: "from-red-500 to-rose-700" }, contexto: "No quarto totalmente escuro, com o celular a 10 cm dos olhos por horas.", pecaCertaId: "prej", fotoUrl: telaImg, feedbackAcerto: "PREJUDICIAL.", feedbackErro: "Tela colada no escuro = cansa e machuca a vista." },
      { id: "r4", municipioA: { nome: "Ler com luz acesa", emoji: "💡", cor: "from-emerald-500 to-green-700" }, municipioB: { nome: "Livro apoiado", emoji: "📖", cor: "from-emerald-500 to-green-700" }, contexto: "Criança lendo um livro em uma sala bem iluminada e à distância confortável.", pecaCertaId: "saud", fotoUrl: oculosImg, feedbackAcerto: "SAUDÁVEL!", feedbackErro: "Boa luz + boa distância = SAUDÁVEL." },
      { id: "r5", municipioA: { nome: "Cotonete fundo no ouvido", emoji: "🧿", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Empurra cera", emoji: "🚨", cor: "from-red-500 to-rose-700" }, contexto: "Criança enfiando cotonete profundo dentro do canal do ouvido.", pecaCertaId: "prej", fotoUrl: ouvidoImg, feedbackAcerto: "PREJUDICIAL! Machuca o tímpano.", feedbackErro: "Nunca enfie NADA dentro do ouvido." },
    ],
    falaFinal: "Você virou Guardião dos Sentidos!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Cuidados diários com olhos e ouvidos.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: pausaImg,
    fatias: [
      { id: "pausa", rotulo: "Pausas nas telas", emoji: "⏸️", percentual: 30, cor: "#0ea5e9", descricao: "20-20: a cada 20 min, olhar 20 seg longe.", exemplos: ["Timer", "Janela"], fotoUrl: pausaImg },
      { id: "vol", rotulo: "Volume moderado", emoji: "🔉", percentual: 30, cor: "#10b981", descricao: "Metade da barra ou menos, especialmente com fone.", exemplos: ["Fone", "Caixa de som"], fotoUrl: foneImg },
      { id: "luz", rotulo: "Boa iluminação", emoji: "💡", percentual: 20, cor: "#f59e0b", descricao: "Nunca ler ou usar tela no escuro.", exemplos: ["Luz de leitura"], fotoUrl: oculosImg },
      { id: "higi", rotulo: "Higiene", emoji: "🧼", percentual: 20, cor: "#ec4899", descricao: "Não esfregar os olhos com mão suja, nem enfiar nada no ouvido.", exemplos: ["Mãos limpas"], fotoUrl: oculosImg },
    ],
    falaFinal: "Hábitos simples que salvam sentidos.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "ÚLTIMA missão do 3º ano.",
    instrucao: "Responda 3 perguntas para receber o selo final",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Qual atitude protege a SAÚDE VISUAL?", fotoUrl: pausaImg,
        opcoes: [
          { id: "a", texto: "Dar pausas frequentes, boa iluminação, distância da tela", correta: true },
          { id: "b", texto: "Esfregar os olhos com mãos sujas no escuro" },
        ], feedbackAcerto: "Perfeito!", feedbackErro: "Pausas + luz + distância = visão saudável." },
      { id: "q2", pergunta: "Como proteger a AUDIÇÃO?", fotoUrl: foneImg,
        opcoes: [
          { id: "a", texto: "Volume moderado (metade da barra) e evitar ruídos altos", correta: true },
          { id: "b", texto: "Fone no talo o dia inteiro" },
        ], feedbackAcerto: "Correto.", feedbackErro: "Volume moderado + evitar ruído alto." },
      { id: "q3", pergunta: "Você concluiu o 3º ano de Ciências? Como se sente?", fotoUrl: brilhaImg,
        opcoes: [
          { id: "a", texto: "Um Guardião da Biosfera formado, pronto para novas missões", correta: true },
          { id: "b", texto: "Não aprendi nada" },
        ], feedbackAcerto: "PARABÉNS, Guardião! O 3º ano de Ciências está 100% RESTAURADO!", feedbackErro: "Você aprendeu MUITO — reconhece isso!" },
    ],
    selo: { nome: "🧩 SELO DE OURO · Protetor Mirim da Biosfera", subtitulo: "Códice do 3º Ano de Ciências · CONCLUÍDO", emoji: "🏆", cor: "from-yellow-400 via-amber-500 to-orange-700" },
    falaFinal: "PARABÉNS, Guardião! O Códice de Ciências do 3º ano está SEGURO. A horta viva, os animais correndo, os sons afinados, a saúde protegida. Missão cumprida!",
  },

  recompensa: { xp: 200, moedas: 50, medalha: "Protetor Mirim da Biosfera" },
};
