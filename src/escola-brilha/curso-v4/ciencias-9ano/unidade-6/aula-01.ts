import type { AulaGeoV1 } from "../../types";
import { url as painelImg } from "@/assets/ciencias-8ano/u5/painel-solar.jpg.asset.json";
import { url as turbinasImg } from "@/assets/ciencias-8ano/u5/turbinas-eolicas.jpg.asset.json";
import { url as hidreletricaImg } from "@/assets/ciencias-8ano/u5/hidreletrica.jpg.asset.json";
import { url as ledImg } from "@/assets/ciencias-8ano/u5/lampada-led.jpg.asset.json";
import { url as mudancaImg } from "@/assets/ciencias-8ano/u6/mudanca-climatica.jpg.asset.json";
import { url as pesquisaImg } from "@/assets/ciencias-8ano/u7/pesquisa-campo.jpg.asset.json";

/**
 * Ciências · 9º Ano · U6 · A01 — "Centro de Inovação Sustentável"
 * Sustentabilidade, energias renováveis, consumo, Agenda 2030.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-06-inovacao-sustentavel",
  titulo: "Centro de Inovação Sustentável",
  iconeTrilha: "🌱",
  recompensa: { xp: 160, moedas: 65, medalha: "Sustentabilista Júnior" },
  bncc: ["EF09CI13", "EF09CI15"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada do Centro de Inovação. Toque para iniciar.",
    mapaUrl: painelImg,
    imagemDestaqueUrl: turbinasImg,
    aurora:
      "Instituto 6: Inovação Sustentável. Vamos ver como a ciência propõe soluções: energias renováveis, consumo consciente, tecnologias limpas e a Agenda 2030 da ONU.",
    falaFinal: "Sustentabilidade é ciência aplicada ao futuro do planeta.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Problema: qual fonte de energia gera menos CO₂ por kWh?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: turbinasImg,
    opcoes: [
      { id: "renov", titulo: "Solar e eólica", subtitulo: "praticamente zero CO₂ na operação", emoji: "☀️", cor: "from-emerald-500 to-teal-700" },
      { id: "carvao", titulo: "Carvão mineral", subtitulo: "sempre foi o mais limpo", emoji: "🏭", cor: "from-slate-500 to-slate-700" },
      { id: "petro", titulo: "Petróleo", subtitulo: "é natural, então não polui", emoji: "🛢️", cor: "from-red-500 to-rose-700" },
    ],
    respostaCerta: "renov",
    feedbackAcerto:
      "Correto. Solar, eólica e hidrelétrica emitem quase zero CO₂ na operação. Fósseis emitem centenas de g/kWh.",
    feedbackErro:
      "Carvão e petróleo são os MAIS poluentes por kWh. Solar e eólica são as mais limpas na operação.",
    falaFinal: "Renováveis limpas = solar, eólica, hidrelétrica.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da sustentabilidade.",
    instrucao: "Vocabulário do Centro",
    cadernos: [
      { id: "sus", capa: "SUSTENTABILIDADE", emoji: "🌱", cor: "from-emerald-500 to-teal-700", conteudo: "Atender às necessidades atuais SEM comprometer as gerações futuras (Relatório Brundtland, 1987).", exemplo: "Ex.: replantar árvores após corte, coletar água da chuva.", fotoUrl: pesquisaImg },
      { id: "ren", capa: "ENERGIA RENOVÁVEL", emoji: "☀️", cor: "from-amber-500 to-orange-700", conteudo: "Fonte que se REPÕE naturalmente em curto prazo: solar, eólica, hidrelétrica, biomassa, geotérmica.", exemplo: "Ex.: 84% da eletricidade do Brasil já é renovável.", fotoUrl: painelImg },
      { id: "poli", capa: "POLUIÇÃO", emoji: "🏭", cor: "from-red-500 to-rose-700", conteudo: "Introdução de substâncias/energia que causam danos. Pode ser do ar, da água, do solo, sonora, luminosa.", exemplo: "Ex.: fumaça de carros, esgoto sem tratamento, lixo plástico no mar.", fotoUrl: mudancaImg },
      { id: "peg", capa: "PEGADA ECOLÓGICA", emoji: "👣", cor: "from-sky-500 to-cyan-700", conteudo: "Área de planeta necessária para sustentar seu estilo de vida. Medida em hectares globais por pessoa.", exemplo: "Ex.: se todos vivessem como os EUA, precisaríamos de ~5 Terras.", fotoUrl: pesquisaImg },
      { id: "ods", capa: "AGENDA 2030 (ODS)", emoji: "🎯", cor: "from-indigo-500 to-purple-700", conteudo: "17 Objetivos de Desenvolvimento Sustentável (ONU, 2015). Metas globais para fome, saúde, clima, igualdade.", exemplo: "Ex.: ODS 7 = energia limpa; ODS 13 = ação climática.", fotoUrl: hidreletricaImg },
    ],
    falaFinal: "Cinco chaves para pensar sustentabilidade cientificamente.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Matriz elétrica brasileira. Toque em cada fonte.",
    instrucao: "Toque nos pontos",
    mapaUrl: hidreletricaImg,
    pontos: [
      { id: "hid", x: 30, y: 40, emoji: "💧", cor: "from-sky-500 to-cyan-700", titulo: "Hidrelétrica", texto: "~55% da eletricidade do Brasil. Água represada gira turbinas.", fotoUrl: hidreletricaImg },
      { id: "sol", x: 70, y: 30, emoji: "☀️", cor: "from-amber-500 to-orange-700", titulo: "Solar", texto: "Painéis fotovoltaicos convertem luz em eletricidade. Cresce rápido no país.", fotoUrl: painelImg },
      { id: "eol", x: 30, y: 70, emoji: "🌬️", cor: "from-emerald-500 to-teal-700", titulo: "Eólica", texto: "Turbinas movidas pelo vento (mais no Nordeste do Brasil).", fotoUrl: turbinasImg },
      { id: "bio", x: 70, y: 75, emoji: "🌾", cor: "from-lime-500 to-emerald-700", titulo: "Biomassa", texto: "Bagaço de cana, madeira, biogás. Renovável mas emite CO₂ (compensado pelo replantio).", fotoUrl: pesquisaImg },
    ],
    falaFinal: "Matriz brasileira já é uma das mais limpas do mundo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual fonte usa a luz do Sol diretamente?", fotoUrl: painelImg,
        cards: [
          { id: "a", emoji: "☀️", titulo: "Solar fotovoltaica", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌬️", titulo: "Eólica", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🛢️", titulo: "Petróleo", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Painéis convertem fótons em corrente elétrica.",
        feedbackErro: "É a SOLAR. Eólica usa vento; petróleo é fóssil." },
      { id: "q2", pergunta: "REDUZIR, REUTILIZAR, RECICLAR — qual a ordem correta de prioridade?", fotoUrl: pesquisaImg,
        cards: [
          { id: "a", emoji: "1️⃣", titulo: "Reduzir → Reutilizar → Reciclar", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "3️⃣", titulo: "Reciclar → Reutilizar → Reduzir", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🤷", titulo: "Todos iguais, tanto faz", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Reduzir vem PRIMEIRO — o melhor lixo é o que não é gerado.",
        feedbackErro: "Ordem correta: REDUZIR (comprar menos) → REUTILIZAR → só então RECICLAR." },
      { id: "q3", pergunta: "A Agenda 2030 tem quantos Objetivos (ODS)?", fotoUrl: hidreletricaImg,
        cards: [
          { id: "a", emoji: "🎯", titulo: "17 objetivos", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎯", titulo: "5 objetivos", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🎯", titulo: "100 objetivos", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. 17 ODS aprovados pela ONU em 2015.",
        feedbackErro: "São 17 Objetivos de Desenvolvimento Sustentável (ONU, 2015)." },
    ],
    falaFinal: "Solar, 3Rs, 17 ODS — base pronta.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Compare fonte RENOVÁVEL e NÃO RENOVÁVEL.",
    instrucao: "Toque nos interruptores",
    mapaUrl: painelImg,
    camadas: [
      { id: "ren", rotulo: "Renovável", emoji: "🌱", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Se REPÕE naturalmente em anos ou décadas. Solar, eólica, hidrelétrica, biomassa.", fotoUrl: turbinasImg },
      { id: "nao", rotulo: "Não renovável", emoji: "🛢️", cor: "from-red-500 to-rose-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Levam MILHÕES de anos para se formar. Petróleo, carvão, gás natural, urânio.", fotoUrl: mudancaImg },
    ],
    falaFinal: "Renovável = escala humana. Não renovável = escala geológica.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene o consumo consciente (do MAIS ao MENOS prioritário).",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Hierarquia dos 5 Rs:",
    paradas: [
      { id: "rec1", emoji: "🚫", rotulo: "1. Recusar", descricao: "O que não é necessário (canudo, sacolinha).", fotoUrl: pesquisaImg },
      { id: "red", emoji: "📉", rotulo: "2. Reduzir", descricao: "Comprar/usar menos.", fotoUrl: pesquisaImg },
      { id: "reu", emoji: "🔁", rotulo: "3. Reutilizar", descricao: "Dar novo uso antes de descartar.", fotoUrl: pesquisaImg },
      { id: "rec2", emoji: "♻️", rotulo: "4. Reciclar", descricao: "Transformar o resíduo em matéria-prima.", fotoUrl: pesquisaImg },
      { id: "rep", emoji: "🌳", rotulo: "5. Recuperar", descricao: "Compostar orgânicos / restaurar áreas.", fotoUrl: pesquisaImg },
    ],
    ordemCerta: ["rec1", "red", "reu", "rec2", "rep"],
    feedbackAcerto: "Perfeito. Recusar → Reduzir → Reutilizar → Reciclar → Recuperar.",
    feedbackErro: "Hierarquia: recusar (o melhor) → reduzir → reutilizar → reciclar → recuperar.",
    falaFinal: "Reciclagem é ÚLTIMO recurso, não o primeiro.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Centro.",
    tituloLivro: "📓 Relatório · Ciência para o Planeta",
    subtitulo: "Como a inovação pode salvar o futuro",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: a humanidade já consome 1,7 planeta por ano. Se continuarmos assim, esgotaremos recursos essenciais (água, solo fértil, biodiversidade).", chaves: ["pegada ecológica"], definicoes: { "pegada ecológica": "Área do planeta necessária para sustentar um estilo de vida." }, fotoUrl: pesquisaImg },
      { id: "p2", texto: "OBSERVAÇÃO: TECNOLOGIAS LIMPAS já existem — carros elétricos, painéis solares, LEDs (10x mais eficientes que incandescentes), agricultura de precisão. O desafio é escalar.", chaves: ["LED"], definicoes: { LED: "Diodo emissor de luz — consome muito menos energia." }, fotoUrl: ledImg },
      { id: "p3", texto: "CONCLUSÃO: sustentabilidade não é escolha entre economia e meio ambiente — é INTEGRAR os dois. Empresas, governos e cidadãos precisam agir junto (Agenda 2030).", chaves: ["Agenda 2030"], definicoes: { "Agenda 2030": "17 ODS da ONU para um mundo mais justo e sustentável." }, fotoUrl: hidreletricaImg },
    ],
    falaFinal: "Ciência + política + cidadania = futuro sustentável.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Classifique a fonte de energia.",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "ren", emoji: "🌱", rotulo: "Renovável" },
      { id: "nao", emoji: "🛢️", rotulo: "Não renovável" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Solar", emoji: "☀️", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Luz do Sol", emoji: "🌱", cor: "from-emerald-500 to-teal-700" }, contexto: "Não acaba na escala humana.", pecaCertaId: "ren", fotoUrl: painelImg, feedbackAcerto: "Sim. Renovável e limpa.", feedbackErro: "Sol dura bilhões de anos → RENOVÁVEL." },
      { id: "r2", municipioA: { nome: "Petróleo", emoji: "🛢️", cor: "from-slate-500 to-slate-700" }, municipioB: { nome: "Leva milhões de anos", emoji: "🛢️", cor: "from-red-500 to-rose-700" }, contexto: "Combustível fóssil.", pecaCertaId: "nao", fotoUrl: mudancaImg, feedbackAcerto: "Correto. Fóssil = não renovável.", feedbackErro: "Milhões de anos para formar → NÃO RENOVÁVEL." },
      { id: "r3", municipioA: { nome: "Eólica", emoji: "🌬️", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Vento sopra sempre", emoji: "🌱", cor: "from-emerald-500 to-teal-700" }, contexto: "Vento vem do aquecimento solar.", pecaCertaId: "ren", fotoUrl: turbinasImg, feedbackAcerto: "Sim. Renovável.", feedbackErro: "Vento se repõe → RENOVÁVEL." },
      { id: "r4", municipioA: { nome: "Carvão mineral", emoji: "⚫", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Fossilização de plantas antigas", emoji: "🛢️", cor: "from-red-500 to-rose-700" }, contexto: "Alto CO₂.", pecaCertaId: "nao", fotoUrl: mudancaImg, feedbackAcerto: "Correto. Combustível fóssil poluente.", feedbackErro: "Fóssil → NÃO RENOVÁVEL." },
    ],
    falaFinal: "Renovável x não renovável — categoria dominada.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "A sustentabilidade tem três pilares: AMBIENTAL, SOCIAL e ECONÔMICO.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: pesquisaImg,
    fatias: [
      { id: "amb", rotulo: "Ambiental", emoji: "🌱", percentual: 34, cor: "#10b981", descricao: "Proteção da natureza, biodiversidade, clima.", exemplos: ["Reflorestar", "Renováveis", "Reciclar"], fotoUrl: turbinasImg },
      { id: "soc", rotulo: "Social", emoji: "🤝", percentual: 33, cor: "#0891b2", descricao: "Justiça, saúde, educação e igualdade.", exemplos: ["Direitos", "Saúde", "Educação"], fotoUrl: hidreletricaImg },
    ],
    falaFinal: "Ambiental + social + econômico. Fim do Instituto 6.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas para a Certificação de Sustentabilista Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: painelImg,
    perguntas: [
      { id: "q1", pergunta: "O que é ENERGIA RENOVÁVEL?", fotoUrl: turbinasImg,
        opcoes: [
          { id: "a", texto: "Fonte que se repõe naturalmente em escala humana (solar, eólica, hidrelétrica)", correta: true },
          { id: "b", texto: "Qualquer energia que sai da tomada" },
        ],
        feedbackAcerto: "Correto. Renovável = repõe-se rápido, sem esgotar.",
        feedbackErro: "Renovável = repõe naturalmente (solar, eólica, hidrelétrica, biomassa)." },
      { id: "q2", pergunta: "Qual é a ORDEM correta dos Rs?", fotoUrl: pesquisaImg,
        opcoes: [
          { id: "a", texto: "Recusar → Reduzir → Reutilizar → Reciclar → Recuperar", correta: true },
          { id: "b", texto: "Reciclar sempre em primeiro lugar" },
        ],
        feedbackAcerto: "Sim. Reciclar é o ÚLTIMO recurso.",
        feedbackErro: "REDUZIR vem antes de reciclar. O melhor lixo é o não gerado." },
      { id: "q3", pergunta: "Agenda 2030 é:", fotoUrl: hidreletricaImg,
        opcoes: [
          { id: "a", texto: "17 Objetivos de Desenvolvimento Sustentável da ONU (2015)", correta: true },
          { id: "b", texto: "Um acordo comercial entre Brasil e China" },
        ],
        feedbackAcerto: "Perfeito. 17 ODS: fome zero, energia limpa, ação climática, etc.",
        feedbackErro: "Agenda 2030 = 17 ODS da ONU (2015)." },
    ],
    selo: { nome: "Certificação · Sustentabilista Júnior", subtitulo: "Instituto 6 · Inovação Sustentável", emoji: "🌱", cor: "from-emerald-500 to-green-700" },
    falaFinal: "Instituto 6 CONCLUÍDO. Última missão: TCC Júnior.",
  },
};
