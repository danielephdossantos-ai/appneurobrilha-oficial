import type { AulaGeoV1 } from "../../types";
import { url as bancadaImg } from "@/assets/ciencias-6ano/u4-a1/bancada-quimica.jpg.asset.json";
import { url as estadosImg } from "@/assets/ciencias-6ano/u4-a1/estados-materia.jpg.asset.json";
import { url as ferrugemImg } from "@/assets/ciencias-6ano/u4-a1/ferrugem.jpg.asset.json";
import { url as moleculasImg } from "@/assets/ciencias-6ano/u4-a1/moleculas-agua.jpg.asset.json";
import geloVideo from "@/assets/ciencias-6ano/u4-a1/gelo-derretendo.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 4 · Aula 03
 * "Química no Dia a Dia" — Medicamentos e materiais sintéticos: benefícios e impactos (EF06CI04).
 */
export const aula03: AulaGeoV1 = {
  slug: "aula-03-quimica-no-dia-a-dia",
  titulo: "Química no Dia a Dia",
  iconeTrilha: "💊",
  recompensa: { xp: 120, moedas: 45, medalha: "Consumidor Consciente" },
  bncc: ["EF06CI04"],
  duracaoMin: 35,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada de química farmacêutica. Observe os frascos.",
    mapaUrl: bancadaImg,
    imagemDestaqueUrl: moleculasImg,
    aurora:
      "Programa 4. Remédios, plásticos, tecidos sintéticos, cosméticos: quase tudo à sua volta foi criado em laboratório. Mas todo produto sintético traz BENEFÍCIOS e também IMPACTOS — para a saúde e para o ambiente.",
    falaFinal: "A química melhora vidas, mas cada produto tem um custo — e um cientista sabe pesar os dois lados.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Situação: um remédio muito eficaz é descoberto, mas sua fabricação gera resíduo tóxico jogado num rio.",
    pergunta: "Essa situação prova o quê sobre materiais sintéticos?",
    fotoUrl: ferrugemImg,
    opcoes: [
      { id: "duplo", titulo: "Todo produto sintético tem benefício E impacto", subtitulo: "avaliar os dois lados", emoji: "⚖️", cor: "from-emerald-500 to-teal-700", fotoUrl: bancadaImg },
      { id: "so-bom", titulo: "Remédio é sempre só bom", subtitulo: "sem consequência", emoji: "💊", cor: "from-red-500 to-rose-700", fotoUrl: bancadaImg },
      { id: "so-ruim", titulo: "Química sintética é sempre ruim", subtitulo: "deveria ser proibida", emoji: "❌", cor: "from-slate-500 to-slate-800", fotoUrl: ferrugemImg },
    ],
    respostaCerta: "duplo",
    feedbackAcerto: "Correto. O remédio SALVA vidas (benefício), mas o descarte incorreto POLUI o rio (impacto socioambiental). Os dois fatos são verdadeiros ao mesmo tempo.",
    feedbackErro: "Não é tudo bom nem tudo ruim. Remédio cura, mas o descarte errado do resíduo prejudica o ambiente. Avaliar os DOIS lados é o papel da ciência responsável.",
    falaFinal: "Nenhum produto sintético é 100% benefício ou 100% prejuízo. A tarefa da sociedade é reduzir os impactos mantendo os benefícios.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco termos sobre materiais sintéticos e seus efeitos.",
    instrucao: "Vocabulário dos sintéticos",
    cadernos: [
      { id: "sintetico", capa: "MATERIAL SINTÉTICO", emoji: "🧪", cor: "from-sky-500 to-cyan-700", conteudo: "Substância PRODUZIDA em laboratório ou indústria, a partir de reações químicas — não existe pronta na natureza.", exemplo: "Ex.: plástico, nylon, aspirina.", fotoUrl: bancadaImg },
      { id: "medicamento", capa: "MEDICAMENTO", emoji: "💊", cor: "from-emerald-500 to-teal-700", conteudo: "Substância desenvolvida para prevenir, tratar ou curar doenças. Passa por testes rigorosos antes de chegar às farmácias.", exemplo: "Ex.: antibióticos combatem infecções bacterianas.", fotoUrl: bancadaImg },
      { id: "residuo", capa: "RESÍDUO QUÍMICO", emoji: "☣️", cor: "from-red-500 to-rose-700", conteudo: "Sobra da produção ou do descarte de produtos químicos, que pode CONTAMINAR água, solo e ar se não for tratada.", exemplo: "Ex.: remédios jogados no vaso sanitário contaminam rios.", fotoUrl: ferrugemImg },
      { id: "biodegradavel", capa: "BIODEGRADÁVEL", emoji: "🌱", cor: "from-amber-500 to-orange-700", conteudo: "Material que se DECOMPÕE naturalmente pela ação de microrganismos, em tempo relativamente curto.", exemplo: "Ex.: papel se decompõe em semanas; plástico comum leva séculos.", fotoUrl: estadosImg },
      { id: "descarte", capa: "DESCARTE CORRETO", emoji: "♻️", cor: "from-indigo-500 to-purple-700", conteudo: "Devolver medicamentos vencidos e produtos químicos em pontos de coleta específicos, em vez do lixo comum ou do ralo.", exemplo: "Ex.: farmácias recebem remédios vencidos para descarte seguro.", videoUrl: geloVideo.url },
    ],
    falaFinal: "Sintético, medicamento, resíduo, biodegradável, descarte. Cinco palavras que ajudam a consumir com responsabilidade.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Bancada farmacêutica. Toque em cada item para entender seu papel.",
    instrucao: "Toque em cada item",
    mapaUrl: bancadaImg,
    pontos: [
      { id: "antibiotico", x: 25, y: 65, emoji: "💊", cor: "from-emerald-500 to-teal-700", titulo: "Antibiótico", texto: "Combate infecções BACTERIANAS. Descoberto por Fleming em 1928 (penicilina) — revolucionou a medicina mundial.", fotoUrl: bancadaImg },
      { id: "plastico", x: 45, y: 72, emoji: "🧴", cor: "from-sky-500 to-cyan-700", titulo: "Plástico sintético", texto: "Material versátil e barato, mas pode levar mais de 400 anos para se decompor na natureza.", fotoUrl: estadosImg },
      { id: "vacina", x: 60, y: 68, emoji: "💉", cor: "from-indigo-500 to-purple-700", titulo: "Vacina", texto: "Estimula o corpo a produzir defesa contra doenças ANTES de a pessoa ficar doente. Erradicou a varíola no mundo.", fotoUrl: moleculasImg },
      { id: "coleta", x: 80, y: 55, emoji: "♻️", cor: "from-amber-500 to-orange-700", titulo: "Ponto de coleta", texto: "Local (farmácia, posto de saúde) para descartar remédios vencidos com segurança, evitando contaminação da água.", fotoUrl: bancadaImg },
    ],
    falaFinal: "Cada avanço químico exige uma contrapartida de responsabilidade — usar bem e descartar melhor.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre benefícios e impactos.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual foi o impacto da descoberta da penicilina?", fotoUrl: bancadaImg,
        cards: [
          { id: "a", emoji: "💊", titulo: "Reduziu drasticamente mortes por infecção bacteriana", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🦠", titulo: "Criou mais bactérias", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "❌", titulo: "Não teve efeito nenhum", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. A penicilina (1928) é considerada uma das maiores descobertas da medicina moderna.",
        feedbackErro: "Antibióticos MATAM bactérias — não criam. A penicilina salvou milhões de vidas desde sua descoberta." },
      { id: "q2", pergunta: "Por que o plástico é um problema ambiental sério?", fotoUrl: estadosImg,
        cards: [
          { id: "a", emoji: "♻️", titulo: "Leva séculos para se decompor na natureza", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎨", titulo: "Porque tem cores variadas", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "💧", titulo: "Porque flutua na água", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Plástico comum pode levar 400 anos ou mais para se decompor completamente.",
        feedbackErro: "Cor e flutuação não são o problema principal. O problema é o TEMPO enorme de decomposição." },
      { id: "q3", pergunta: "Qual é o descarte CORRETO de remédio vencido?", fotoUrl: bancadaImg,
        cards: [
          { id: "a", emoji: "♻️", titulo: "Levar a um ponto de coleta (farmácia)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🚽", titulo: "Jogar no vaso sanitário", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🗑️", titulo: "Jogar no lixo comum", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Perfeito. Pontos de coleta tratam o resíduo evitando contaminação de rios e solo.",
        feedbackErro: "Vaso sanitário e lixo comum contaminam água e solo. O certo é levar a um PONTO DE COLETA." },
    ],
    falaFinal: "Avaliar benefício e impacto ao mesmo tempo é pensar como cientista responsável.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Todo produto sintético tem dois lados que precisam ser avaliados juntos: BENEFÍCIOS (o que ele resolve) e IMPACTOS (o que ele custa ao ambiente e à saúde).",
    instrucao: "Toque nos interruptores",
    mapaUrl: bancadaImg,
    camadas: [
      { id: "beneficios", rotulo: "Benefícios", emoji: "✅", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 40, w: 50, h: 55 }, descricao: "Cura doenças, previne infecções, cria materiais duráveis e baratos, melhora a qualidade de vida.", fotoUrl: bancadaImg },
      { id: "impactos", rotulo: "Impactos", emoji: "⚠️", cor: "from-red-500 to-rose-700", rect: { x: 52, y: 40, w: 46, h: 55 }, descricao: "Resíduos que poluem rios e solo, lixo que demora séculos para sumir, uso incorreto pode causar dependência.", fotoUrl: ferrugemImg },
    ],
    falaFinal: "Benefício sem cuidado com o impacto não é progresso completo — é meio caminho.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Sequência do ciclo de vida responsável de um medicamento.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Qual a sequência do uso responsável de um remédio?",
    paradas: [
      { id: "prescricao", emoji: "📋", rotulo: "1. Prescrição médica", descricao: "Médico avalia e indica o medicamento certo, na dose certa.", fotoUrl: bancadaImg },
      { id: "uso", emoji: "💊", rotulo: "2. Uso conforme orientação", descricao: "Tomar na dose e horário indicados — sem exagerar nem interromper sozinho.", fotoUrl: bancadaImg },
      { id: "sobra", emoji: "📦", rotulo: "3. Guardar sobras corretamente", descricao: "Embalagem fechada, longe de calor e umidade, fora do alcance de crianças.", fotoUrl: estadosImg },
      { id: "vencimento", emoji: "⏳", rotulo: "4. Verificar validade", descricao: "Remédio vencido perde eficácia e pode fazer mal.", fotoUrl: estadosImg },
      { id: "descarte", emoji: "♻️", rotulo: "5. Descarte em ponto de coleta", descricao: "Nunca no lixo comum ou vaso sanitário — sempre em local apropriado.", fotoUrl: bancadaImg },
    ],
    ordemCerta: ["prescricao", "uso", "sobra", "vencimento", "descarte"],
    feedbackAcerto: "Exato. Esse é o ciclo completo do uso responsável — do início ao descarte seguro.",
    feedbackErro: "A ordem é: prescrição → uso correto → guardar bem → checar validade → descartar em ponto de coleta.",
    falaFinal: "Usar remédio com responsabilidade protege você e o ambiente ao mesmo tempo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Programa 4.",
    tituloLivro: "📓 Relatório · Estudo de Caso 03",
    subtitulo: "Plásticos: benefício industrial e impacto ambiental",
    paragrafos: [
      { id: "p1", texto: "CONTEXTO: o plástico foi inventado no início do século XX e revolucionou embalagens, tornando-as leves, baratas e resistentes. Antes dele, muitos produtos usavam vidro pesado ou metal caro.", chaves: ["plástico", "revolucionou"], definicoes: { plástico: "Material sintético derivado do petróleo, moldável quando aquecido.", revolucionou: "Mudou completamente uma prática ou indústria." }, fotoUrl: estadosImg },
      { id: "p2", texto: "PROBLEMA: por não ser biodegradável, boa parte do plástico produzido acaba em rios, mares e aterros, levando SÉCULOS para se decompor. Animais marinhos confundem pedaços de plástico com alimento.", chaves: ["biodegradável", "aterros"], definicoes: { biodegradável: "Que se decompõe naturalmente por ação de microrganismos.", aterros: "Locais de descarte de lixo sólido." }, fotoUrl: ferrugemImg },
      { id: "p3", texto: "SOLUÇÕES ATUAIS: reciclagem, redução do uso de plástico descartável e desenvolvimento de plásticos biodegradáveis feitos de milho ou cana-de-açúcar. Nenhuma solução é perfeita, mas cada uma reduz o impacto.", chaves: ["reciclagem", "biodegradáveis"], definicoes: { reciclagem: "Processo de transformar material usado em nova matéria-prima.", biodegradáveis: "Plásticos que se decompõem mais rápido que o comum." }, fotoUrl: bancadaImg },
    ],
    falaFinal: "Você acabou de ler um estudo de caso real sobre química e sociedade.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Benefício ou impacto?",
    instrucao: "⏱️ Classifique a situação",
    duracaoSegundos: 25,
    pecas: [
      { id: "beneficio", emoji: "✅", rotulo: "Benefício" },
      { id: "impacto", emoji: "⚠️", rotulo: "Impacto" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Vacina erradica doença", emoji: "💉", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Milhões protegidos", emoji: "🌍", cor: "from-sky-500 to-cyan-700" }, contexto: "A vacinação em massa eliminou a varíola do planeta em 1980.", pecaCertaId: "beneficio", fotoUrl: bancadaImg, feedbackAcerto: "BENEFÍCIO. Eliminar uma doença mundialmente é um dos maiores feitos da ciência.", feedbackErro: "Erradicar doença é claramente um BENEFÍCIO da química/medicina." },
      { id: "r2", municipioA: { nome: "Remédio jogado no rio", emoji: "🚽", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Água contaminada", emoji: "☣️", cor: "from-amber-500 to-orange-700" }, contexto: "Descarte incorreto de remédios altera a composição química da água e afeta peixes.", pecaCertaId: "impacto", fotoUrl: ferrugemImg, feedbackAcerto: "IMPACTO. Descarte errado prejudica o ecossistema aquático.", feedbackErro: "Contaminar água é um IMPACTO socioambiental negativo." },
      { id: "r3", municipioA: { nome: "Plástico leve nas embalagens", emoji: "🧴", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Transporte mais barato", emoji: "🚚", cor: "from-emerald-500 to-teal-700" }, contexto: "Embalagens plásticas reduzem peso e custo de transporte de alimentos.", pecaCertaId: "beneficio", fotoUrl: bancadaImg, feedbackAcerto: "BENEFÍCIO. Redução de peso e custo é vantagem econômica real.", feedbackErro: "Menor custo e peso no transporte é um BENEFÍCIO — mesmo que o mesmo plástico tenha outros impactos." },
    ],
    falaFinal: "Você já avalia rápido os dois lados de um produto sintético. Isso é pensamento científico.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Todo produto sintético carrega duas faces que a sociedade precisa equilibrar: BENEFÍCIOS e IMPACTOS.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: bancadaImg,
    fatias: [
      { id: "beneficios", rotulo: "Benefícios", emoji: "✅", percentual: 50, cor: "#10b981", descricao: "Curar doenças, produzir materiais duráveis e baratos, salvar vidas com vacinas e antibióticos.", exemplos: ["Penicilina", "Vacinas", "Plástico leve"], fotoUrl: bancadaImg },
      { id: "impactos", rotulo: "Impactos", emoji: "⚠️", percentual: 50, cor: "#ef4444", descricao: "Poluição por descarte incorreto, lixo que não se decompõe, riscos à saúde por uso indevido.", exemplos: ["Contaminação de rios", "Lixo plástico no mar", "Automedicação"], fotoUrl: ferrugemImg },
    ],
    falaFinal: "Ciência responsável é aquela que maximiza benefício e minimiza impacto — nunca ignora nenhum dos dois.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão do Programa 4. 3 perguntas e sua Certificação de Consumidor Consciente é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: bancadaImg,
    perguntas: [
      { id: "q1", pergunta: "Qual é o descarte correto de medicamentos vencidos?", fotoUrl: bancadaImg,
        opcoes: [
          { id: "a", texto: "Levar a um ponto de coleta específico", correta: true },
          { id: "b", texto: "Jogar no vaso sanitário" },
        ],
        feedbackAcerto: "Correto. Pontos de coleta evitam contaminação de água e solo.",
        feedbackErro: "Vaso sanitário contamina a água. O certo é um PONTO DE COLETA." },
      { id: "q2", pergunta: "Por que a penicilina é considerada uma das maiores descobertas da ciência?", fotoUrl: bancadaImg,
        opcoes: [
          { id: "a", texto: "Reduziu drasticamente as mortes por infecções bacterianas", correta: true },
          { id: "b", texto: "Porque tem cheiro agradável" },
        ],
        feedbackAcerto: "Sim. Antibióticos mudaram a expectativa de vida da humanidade.",
        feedbackErro: "Cheiro não importa. O impacto real foi salvar milhões de vidas de infecções." },
      { id: "q3", pergunta: "Qual é o principal problema ambiental do plástico comum?", fotoUrl: estadosImg,
        opcoes: [
          { id: "a", texto: "Demora séculos para se decompor na natureza", correta: true },
          { id: "b", texto: "É pesado demais para transportar" },
        ],
        feedbackAcerto: "Exato. O tempo de decomposição é o maior problema ambiental do plástico.",
        feedbackErro: "Plástico é LEVE, não pesado. O problema é sua LONGA decomposição." },
    ],
    selo: { nome: "Certificação de Consumidor Consciente", subtitulo: "Academia Científica · Programa 4 concluído", emoji: "💊", cor: "from-amber-500 to-orange-700" },
    falaFinal: "Programa 4 concluído. Você sabe avaliar benefícios e impactos da química no cotidiano.",
  },
};
