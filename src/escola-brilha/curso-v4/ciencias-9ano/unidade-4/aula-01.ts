import type { AulaGeoV1 } from "../../types";
import forcasImg from "@/assets/ciencias-8ano/u3/forcas-diagrama.jpg";
import alavancaImg from "@/assets/ciencias-8ano/u3/alavanca-fulcro.jpg";
import rampaImg from "@/assets/ciencias-8ano/u3/rampa-plano-inclinado.jpg";
import roldanaImg from "@/assets/ciencias-8ano/u3/roldana-polia.jpg";
import circuitoImg from "@/assets/ciencias-8ano/u5/circuito-eletrico.jpg";
import ledImg from "@/assets/ciencias-8ano/u5/lampada-led.jpg";

/**
 * Ciências · 9º Ano · U4 · A01 — "Centro de Física Experimental"
 * Movimento, Leis de Newton, trabalho, potência, energia, ondas, som e luz.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-04-fisica-experimental",
  titulo: "Centro de Física Experimental",
  iconeTrilha: "⚙️",
  recompensa: { xp: 160, moedas: 65, medalha: "Físico Júnior" },
  bncc: ["EF09CI05", "EF09CI06", "EF09CI07"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada do Centro de Física. Toque para iniciar.",
    mapaUrl: forcasImg,
    imagemDestaqueUrl: circuitoImg,
    aurora:
      "Instituto 4: Física Experimental. Vamos estudar por que as coisas se movem (Newton), como convertemos energia e como ondas de som e luz carregam informação.",
    falaFinal: "Física é a gramática do movimento e da energia.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Problema: um carro em movimento constante numa reta — precisa de força continuamente?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: forcasImg,
    opcoes: [
      { id: "nao", titulo: "NÃO — se não há atrito, mantém-se sozinho", subtitulo: "1ª Lei de Newton (inércia)", emoji: "🚗", cor: "from-emerald-500 to-teal-700" },
      { id: "sim", titulo: "SIM — parou de empurrar, parou de andar", subtitulo: "todo movimento precisa de força", emoji: "💪", cor: "from-slate-500 to-slate-700" },
      { id: "meio", titulo: "Depende do peso do carro", subtitulo: "só carro leve continua", emoji: "⚖️", cor: "from-red-500 to-rose-700" },
    ],
    respostaCerta: "nao",
    feedbackAcerto:
      "Correto. INÉRCIA: sem força resultante, corpo mantém velocidade. Precisamos empurrar só por causa do atrito.",
    feedbackErro:
      "1ª Lei de Newton: corpo em movimento CONTINUA em movimento se nenhuma força age. No cotidiano precisamos empurrar porque o atrito freia.",
    falaFinal: "Inércia: mudar o movimento exige força; manter, não.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da física.",
    instrucao: "Vocabulário do Centro",
    cadernos: [
      { id: "for", capa: "FORÇA", emoji: "💪", cor: "from-red-500 to-rose-700", conteudo: "Interação capaz de mudar velocidade ou deformar um corpo. Medida em NEWTONS (N).", exemplo: "Ex.: empurrar, puxar, peso, atrito.", fotoUrl: forcasImg },
      { id: "ene", capa: "ENERGIA", emoji: "⚡", cor: "from-amber-500 to-orange-700", conteudo: "Capacidade de realizar TRABALHO (mover coisas, aquecer, iluminar). Medida em JOULES (J).", exemplo: "Ex.: cinética, potencial, térmica, elétrica.", fotoUrl: circuitoImg },
      { id: "tra", capa: "TRABALHO", emoji: "🏋️", cor: "from-indigo-500 to-purple-700", conteudo: "Energia transferida quando uma FORÇA desloca um objeto. W = F × d.", exemplo: "Ex.: 10 N puxando por 2 m = 20 J.", fotoUrl: alavancaImg },
      { id: "pot", capa: "POTÊNCIA", emoji: "⏱️", cor: "from-fuchsia-500 to-pink-700", conteudo: "Rapidez com que a energia é transferida. P = E / t. Medida em WATTS (W).", exemplo: "Ex.: LED de 10 W consome 10 J por segundo.", fotoUrl: ledImg },
      { id: "ond", capa: "ONDA", emoji: "🌊", cor: "from-sky-500 to-cyan-700", conteudo: "Perturbação que transporta ENERGIA sem transportar matéria. Som e luz são ondas.", exemplo: "Ex.: som no ar; luz no vácuo.", fotoUrl: circuitoImg },
    ],
    falaFinal: "Força, energia, trabalho, potência, onda. Cinco chaves da física.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Diagrama de forças. Toque em cada seta.",
    instrucao: "Toque nos pontos",
    mapaUrl: forcasImg,
    pontos: [
      { id: "peso", x: 50, y: 75, emoji: "⬇️", cor: "from-red-500 to-rose-700", titulo: "Peso", texto: "Força que a Terra faz puxando o corpo para o centro. P = m × g.", fotoUrl: forcasImg },
      { id: "normal", x: 50, y: 25, emoji: "⬆️", cor: "from-emerald-500 to-teal-700", titulo: "Normal", texto: "Força que a superfície faz de volta, perpendicular a ela.", fotoUrl: forcasImg },
      { id: "atr", x: 20, y: 55, emoji: "◀️", cor: "from-amber-500 to-orange-700", titulo: "Atrito", texto: "Força que se opõe ao movimento. Sem ele, tudo escorregaria.", fotoUrl: rampaImg },
      { id: "apl", x: 80, y: 55, emoji: "▶️", cor: "from-sky-500 to-cyan-700", titulo: "Aplicada", texto: "Força que você exerce ao empurrar/puxar.", fotoUrl: alavancaImg },
    ],
    falaFinal: "Todo objeto no chão tem pelo menos 2 forças: peso e normal.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que diz a 3ª Lei de Newton?", fotoUrl: forcasImg,
        cards: [
          { id: "a", emoji: "🔄", titulo: "A toda ação há reação igual e oposta", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💪", titulo: "Força maior sempre vence", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🎈", titulo: "Objetos leves não geram força", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. É o que faz o barco andar quando você rema.",
        feedbackErro: "3ª Lei: ação e reação. Forças SEMPRE aparecem em pares." },
      { id: "q2", pergunta: "Uma lâmpada de 60 W consome quanto por segundo?", fotoUrl: ledImg,
        cards: [
          { id: "a", emoji: "⚡", titulo: "60 joules por segundo", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔢", titulo: "60 volts por segundo", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "⏳", titulo: "60 horas de energia", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Watt = joule por segundo.",
        feedbackErro: "1 W = 1 J/s. Lâmpada de 60 W = 60 J a cada segundo." },
      { id: "q3", pergunta: "Som e luz têm o que em comum?", fotoUrl: circuitoImg,
        cards: [
          { id: "a", emoji: "🌊", titulo: "Ambos são ondas que carregam energia", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🥇", titulo: "Ambos precisam do ar para se propagar", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔗", titulo: "Ambos são partículas de matéria", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Som precisa de meio; luz não. Mas ambos são ondas.",
        feedbackErro: "Ambos são ONDAS. Só que som precisa de meio; luz viaja no vácuo." },
    ],
    falaFinal: "Newton, Watt, ondas — bases claras.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Compare ENERGIA CINÉTICA (movimento) e POTENCIAL (guardada).",
    instrucao: "Toque nos interruptores",
    mapaUrl: forcasImg,
    camadas: [
      { id: "cin", rotulo: "Cinética", emoji: "🏃", cor: "from-red-500 to-rose-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Energia do MOVIMENTO. Ec = ½·m·v². Depende de massa e velocidade².", fotoUrl: rampaImg },
      { id: "pot", rotulo: "Potencial", emoji: "🧗", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Energia GUARDADA (altura, mola, química). Ep = m·g·h no caso gravitacional.", fotoUrl: alavancaImg },
    ],
    falaFinal: "Um carrinho de montanha-russa converte potencial (topo) em cinética (fundo).",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as transformações de energia numa hidrelétrica.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Da chuva até sua casa:",
    paradas: [
      { id: "pot", emoji: "🏔️", rotulo: "1. Potencial gravitacional", descricao: "Água represada em altura.", fotoUrl: rampaImg },
      { id: "cin", emoji: "💦", rotulo: "2. Cinética", descricao: "Água caindo, movimento rápido.", fotoUrl: rampaImg },
      { id: "mec", emoji: "⚙️", rotulo: "3. Mecânica (turbina)", descricao: "Água gira a turbina.", fotoUrl: roldanaImg },
      { id: "ele", emoji: "⚡", rotulo: "4. Elétrica", descricao: "Gerador transforma rotação em corrente.", fotoUrl: circuitoImg },
    ],
    ordemCerta: ["pot", "cin", "mec", "ele"],
    feedbackAcerto: "Perfeito. Toda a cadeia de conversão.",
    feedbackErro: "Ordem: potencial → cinética → mecânica → elétrica.",
    falaFinal: "Energia nunca some — só se converte (Lei de Conservação).",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Centro.",
    tituloLivro: "📓 Relatório · Física do Cotidiano",
    subtitulo: "Forças, energia e ondas ao nosso redor",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: por que precisamos de máquinas simples (alavancas, roldanas, rampas)? Para MULTIPLICAR nossa força — trocando força menor por distância maior.", chaves: ["alavanca"], definicoes: { alavanca: "Barra que gira em torno de um apoio (fulcro)." }, fotoUrl: alavancaImg },
      { id: "p2", texto: "OBSERVAÇÃO: Newton (1687) formulou 3 leis que explicam TODO movimento em velocidades comuns: inércia, F=m·a e ação-reação. Ainda usamos hoje na engenharia.", chaves: ["Newton"], definicoes: { Newton: "Físico inglês, formulou a mecânica clássica." }, fotoUrl: forcasImg },
      { id: "p3", texto: "CONCLUSÃO: som (celular), luz (telas), energia elétrica (tomada) — TUDO isso é física aplicada. A tecnologia é, no fundo, conversão inteligente de energia.", chaves: ["conversão"], definicoes: { "conversão": "Mudança de uma forma de energia para outra." }, fotoUrl: circuitoImg },
    ],
    falaFinal: "Física explica desde a alavanca até o Wi-Fi.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Classifique a máquina simples.",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "ala", emoji: "🪃", rotulo: "Alavanca" },
      { id: "ram", emoji: "📐", rotulo: "Plano inclinado" },
      { id: "rol", emoji: "🎡", rotulo: "Roldana" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Gangorra", emoji: "🛝", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Gira num apoio central", emoji: "🪃", cor: "from-emerald-500 to-teal-700" }, contexto: "Barra + fulcro.", pecaCertaId: "ala", fotoUrl: alavancaImg, feedbackAcerto: "Sim. Gangorra = alavanca.", feedbackErro: "Barra que gira num apoio → ALAVANCA." },
      { id: "r2", municipioA: { nome: "Rampa de deficiente", emoji: "♿", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Sobe com menos força", emoji: "📐", cor: "from-emerald-500 to-teal-700" }, contexto: "Superfície inclinada.", pecaCertaId: "ram", fotoUrl: rampaImg, feedbackAcerto: "Correto. Plano inclinado troca força por distância.", feedbackErro: "Rampa = plano INCLINADO." },
      { id: "r3", municipioA: { nome: "Poço com balde", emoji: "🪣", cor: "from-indigo-500 to-purple-700" }, municipioB: { nome: "Muda a direção da força", emoji: "🎡", cor: "from-emerald-500 to-teal-700" }, contexto: "Corda que passa por uma roda.", pecaCertaId: "rol", fotoUrl: roldanaImg, feedbackAcerto: "Sim. Roldana.", feedbackErro: "Corda + roda que gira = ROLDANA." },
      { id: "r4", municipioA: { nome: "Tesoura", emoji: "✂️", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Dois braços num pino central", emoji: "🪃", cor: "from-emerald-500 to-teal-700" }, contexto: "Fulcro no parafuso.", pecaCertaId: "ala", fotoUrl: alavancaImg, feedbackAcerto: "Correto. Tesoura = 2 alavancas.", feedbackErro: "Tesoura = ALAVANCA dupla (fulcro no meio)." },
    ],
    falaFinal: "As máquinas simples estão em tudo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "A física tem três eixos gigantes: MECÂNICA, ENERGIA e ONDAS.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: forcasImg,
    fatias: [
      { id: "mec", rotulo: "Mecânica", emoji: "⚙️", percentual: 35, cor: "#f59e0b", descricao: "Forças, movimento, Leis de Newton, máquinas simples.", exemplos: ["Peso", "Atrito", "Aceleração"], fotoUrl: forcasImg },
      { id: "ene", rotulo: "Energia", emoji: "⚡", percentual: 35, cor: "#dc2626", descricao: "Cinética, potencial, elétrica, térmica. Sempre se conserva.", exemplos: ["Cinética", "Potencial", "Trabalho"], fotoUrl: circuitoImg },
    ],
    falaFinal: "Mecânica + energia + ondas. Fim do Instituto 4.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas para a Certificação de Físico Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: forcasImg,
    perguntas: [
      { id: "q1", pergunta: "O que é INÉRCIA (1ª Lei de Newton)?", fotoUrl: forcasImg,
        opcoes: [
          { id: "a", texto: "Tendência de manter velocidade se não houver força resultante", correta: true },
          { id: "b", texto: "Tendência de todo corpo cair para o centro da Terra" },
        ],
        feedbackAcerto: "Correto. É por isso que usamos cinto de segurança.",
        feedbackErro: "Inércia = manter o estado de movimento (parado ou em MRU) sem força." },
      { id: "q2", pergunta: "Watt é unidade de:", fotoUrl: ledImg,
        opcoes: [
          { id: "a", texto: "Potência (energia por tempo)", correta: true },
          { id: "b", texto: "Força" },
        ],
        feedbackAcerto: "Sim. 1 W = 1 J / s.",
        feedbackErro: "Força = Newton. WATT = potência (energia/tempo)." },
      { id: "q3", pergunta: "Qual a diferença entre som e luz?", fotoUrl: circuitoImg,
        opcoes: [
          { id: "a", texto: "Som precisa de meio material; luz viaja no vácuo", correta: true },
          { id: "b", texto: "Som viaja no vácuo; luz precisa de ar" },
        ],
        feedbackAcerto: "Perfeito. No espaço não há som (não tem ar).",
        feedbackErro: "É o CONTRÁRIO: som precisa de meio; luz atravessa o vácuo." },
    ],
    selo: { nome: "Certificação · Físico Júnior", subtitulo: "Instituto 4 · Física Experimental", emoji: "⚙️", cor: "from-amber-500 to-orange-700" },
    falaFinal: "Instituto 4 CONCLUÍDO. Próximo: Observatório Espacial.",
  },
};
