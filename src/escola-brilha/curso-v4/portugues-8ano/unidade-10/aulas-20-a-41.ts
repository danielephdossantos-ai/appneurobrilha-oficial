import { criarAulaConsolidacao } from "../criar-aula-consolidacao";
import {
  aula45 as comumEtica,
  aula46 as comumMidia,
  aula47 as comumDebate,
  aula48 as comumNormas,
  aula49 as comumDiscussao,
  aula50 as comumPesquisa,
  aula51 as comumDivulgacao,
  aula52 as comumApresentacao,
  aula53 as comumLiteratura,
  aula54 as comumNarrativa,
  aula55 as comumPoesia,
  aula56 as comumTeatro,
  aula57 as comumVariacao,
} from "../../portugues-7ano/unidade-10/aulas-43-a-57";

const criar = (numero: number, config: Parameters<typeof criarAulaConsolidacao>[0]) =>
  criarAulaConsolidacao({ ...config, slug: `aula-${numero}-${config.slug}` });

export const aula20 = criar(20, {
  slug: "sintaxe-do-periodo", titulo: "Sintaxe do Período", icone: "⚙️",
  bncc: ["EF08LP04", "EF08LP05", "EF08LP06", "EF08LP07"],
  tema: "Arquitetura sintática", conceito: "constituintes, complementos e efeitos da organização da oração",
  explicacao: "Analisar uma oração exige localizar sujeito, predicado, núcleo verbal, complementos e modificadores. A posição e a relação entre esses constituintes alteram foco, clareza e efeitos de sentido no período.",
  exemplo: "Os estudantes entregaram o relatório à direção ontem.",
  exemploAnalisado: "Os estudantes é sujeito; entregaram é núcleo verbal; o relatório e à direção completam o verbo; ontem indica tempo.",
  pergunta: "Qual termo indica quando ocorreu a ação?", opcoes: ["ontem", "o relatório", "à direção"], resposta: 0,
  revisao: ["Constituintes formam blocos funcionais.", "O verbo organiza relações.", "A ordem pode destacar informações."],
  missao: "Analise três orações, identificando núcleos, complementos, modificadores e efeito da ordem.",
});

export const aula21 = criar(21, {
  slug: "coesao-e-modalizacao", titulo: "Coesão e Modalização", icone: "🔗",
  bncc: ["EF08LP10", "EF08LP11"],
  tema: "Texto articulado", conceito: "retomadas, conectores e marcas de posicionamento",
  explicacao: "Pronomes, sinônimos e expressões retomam referentes; conectores relacionam ideias; modalizadores como talvez, certamente, deve e pode indicam possibilidade, certeza, obrigação ou avaliação do autor.",
  exemplo: "A proposta pode reduzir o desperdício; por isso, ela deve ser testada durante um mês.",
  exemploAnalisado: "Ela retoma proposta; por isso marca consequência; pode e deve indicam graus diferentes de compromisso.",
  pergunta: "Qual expressão apresenta consequência?", opcoes: ["por isso", "pode", "um mês"], resposta: 0,
  revisao: ["Retomadas mantêm referentes.", "Conectores mostram relações.", "Modalizadores revelam posicionamento."],
  missao: "Revise um parágrafo usando retomada, conector e dois modalizadores com funções diferentes.",
});

export const aula22 = criar(22, {
  slug: "efeitos-textuais", titulo: "Efeitos Textuais e Estilo", icone: "🧠",
  bncc: ["EF08LP14", "EF08LP15", "EF08LP16"],
  tema: "Escolhas que produzem sentido", conceito: "argumentação, estilo e relações entre partes do texto",
  explicacao: "Escolhas de palavras, ordem, pontuação, discurso citado e recursos de coesão constroem tom, foco e posicionamento. Comparar versões permite reconhecer como pequenas mudanças alteram a argumentação e a imagem dos participantes.",
  exemplo: "Versão A: 'A equipe informou o atraso.' Versão B: 'Só depois da cobrança, a equipe admitiu o atraso.'",
  exemploAnalisado: "A segunda versão inclui avaliação e sequência que tornam o relato mais crítico.",
  pergunta: "Qual versão demonstra posicionamento mais crítico?", opcoes: ["A versão B", "A versão A", "As duas são idênticas"], resposta: 0,
  revisao: ["Forma e conteúdo interagem.", "Escolhas lexicais orientam avaliação.", "Comparar versões revela efeitos."],
  missao: "Reescreva uma frase neutra em dois tons diferentes e explique as escolhas linguísticas.",
});

export const aula23 = criar(23, {
  slug: "midia-algoritmos-e-persuasao", titulo: "Mídia, Algoritmos e Persuasão", icone: "📱",
  bncc: ["EF89LP01", "EF89LP02", "EF89LP05", "EF89LP07"],
  tema: "Ecossistema da informação", conceito: "interesses da mídia, práticas digitais, persuasão e opinião",
  explicacao: "Informações circulam em ambientes movidos por interesses econômicos, editoriais e algorítmicos. Curtir, compartilhar, comentar e selecionar conteúdos afeta a circulação; títulos, imagens, humor e enquadramentos podem persuadir e precisam ser avaliados.",
  exemplo: "Uma plataforma recomenda repetidamente vídeos semelhantes porque o usuário assistiu e compartilhou conteúdos do mesmo tema.",
  exemploAnalisado: "A recomendação não é neutra: usa sinais de comportamento e pode limitar a diversidade de perspectivas.",
  pergunta: "Qual atitude amplia a leitura crítica?", opcoes: ["Comparar fontes e perspectivas", "Aceitar toda recomendação", "Compartilhar apenas pelo título"], resposta: 0,
  revisao: ["Informação pode ser tratada como mercadoria.", "Ações digitais influenciam circulação.", "Persuasão usa recursos verbais e visuais."],
  missao: "Analise uma recomendação digital, identificando interesse possível, recurso persuasivo e fonte alternativa.",
});

export const aula24 = criar(24, {
  slug: "campanha-e-producao-jornalistica", titulo: "Campanha e Produção Jornalística", icone: "🎥",
  bncc: ["EF89LP08", "EF89LP09", "EF89LP10", "EF89LP11", "EF89LP13"],
  tema: "Núcleo de produção", conceito: "planejamento, roteiro, produção e participação em mídia",
  explicacao: "Reportagem, podcast, vídeo e campanha exigem pauta, público, fontes, roteiro e divisão de funções. A produção oral ou audiovisual combina informação, posicionamento, som e imagem; a participação responsável respeita turnos e responde a argumentos.",
  exemplo: "Campanha contra desperdício: dados da escola, depoimento, roteiro de vídeo, chamada para ação e revisão antes de publicar.",
  exemploAnalisado: "Os dados sustentam a mensagem, o depoimento humaniza o tema e a chamada orienta participação possível.",
  pergunta: "O que deve orientar o roteiro?", opcoes: ["Objetivo, público e evidências", "Efeito visual isolado", "Opinião sem apuração"], resposta: 0,
  revisao: ["Pauta organiza apuração.", "Roteiro integra linguagens.", "Participação oral exige escuta."],
  missao: "Planeje uma campanha com público, dados, formato, roteiro e forma de participação.",
});

export const aula25 = criar(25, {
  slug: "argumentacao-e-modalizacao-publica", titulo: "Argumentação e Modalização Pública", icone: "🗣️",
  bncc: ["EF89LP16", "EF89LP17", "EF89LP18", "EF89LP19"],
  tema: "Discurso público", conceito: "movimentos argumentativos, edição e efeitos da oralidade",
  explicacao: "Textos e falas argumentativas apresentam tese, sustentação, contraponto e conclusão. Modalizadores regulam certeza e obrigação; edição, ritmo, enquadramento, voz, pausa e gesto também influenciam a interpretação.",
  exemplo: "É provável que a medida reduza filas; contudo, deve haver avaliação semanal dos resultados.",
  exemploAnalisado: "É provável reduz a certeza, contudo introduz ressalva e deve marca obrigação.",
  pergunta: "Qual expressão introduz a ressalva?", opcoes: ["contudo", "é provável", "resultados"], resposta: 0,
  revisao: ["Argumentação possui movimentos.", "Modalização regula compromisso.", "Recursos audiovisuais produzem efeitos."],
  missao: "Produza uma fala com tese, evidência, ressalva e conclusão, planejando pausas e ênfases.",
});

export const aula26 = criar(26, {
  slug: "participacao-e-direitos", titulo: "Participação e Direitos", icone: "⚖️",
  bncc: ["EF89LP20", "EF89LP21", "EF89LP23", "EF89LP24"],
  tema: "Ação cidadã", conceito: "propostas, políticas públicas, movimentos argumentativos e debate",
  explicacao: "Participar da vida pública exige analisar problemas, propostas, leis e políticas, verificar agentes responsáveis e consequências e formular posição com dados. Debates devem acolher objeções e buscar encaminhamentos viáveis.",
  exemplo: "Proposta: instalar iluminação no ponto de ônibus. Evidência: registros de baixa visibilidade. Responsável: setor municipal competente.",
  exemploAnalisado: "A proposta conecta problema, evidência, ação e agente público, permitindo avaliação objetiva.",
  pergunta: "Qual elemento torna a proposta executável?", opcoes: ["Ação e responsável definidos", "Slogan sem medida", "Ataque pessoal"], resposta: 0,
  revisao: ["Problemas públicos exigem análise.", "Propostas precisam de responsáveis.", "Debate responde a argumentos."],
  missao: "Analise um problema comunitário e formule proposta com evidência, ação, responsável e impacto esperado.",
});

export const aula27 = criar(27, {
  slug: "pesquisa-e-autoria", titulo: "Pesquisa, Autoria e Síntese", icone: "🔎",
  bncc: ["EF89LP26", "EF89LP27", "EF89LP28", "EF89LP30", "EF89LP31", "EF89LP32"],
  tema: "Conhecimento verificável", conceito: "fontes, notas, apresentações, relações semânticas e recursos visuais",
  explicacao: "Pesquisa responsável define recorte, compara fontes e registra autoria. Notas e resumos preservam ideias centrais; apresentações articulam fala e apoio visual. Relações de causa, comparação e conclusão organizam o raciocínio.",
  exemplo: "O relatório compara dois anos, atribui a queda ao novo sistema e apresenta gráfico com escala e fonte.",
  exemploAnalisado: "Texto e gráfico se complementam; a relação causal precisa ser sustentada pelos dados e pelo método.",
  pergunta: "O que permite verificar o gráfico?", opcoes: ["Escala, período e fonte", "Cor preferida", "Título genérico"], resposta: 0,
  revisao: ["Autoria deve ser registrada.", "Síntese mantém o essencial.", "Relações semânticas precisam de evidência."],
  missao: "Crie uma síntese com dado, fonte, relação lógica e recurso visual explicado.",
});

export const aula28 = criar(28, {
  slug: "leitura-literaria-critica", titulo: "Leitura Literária Crítica", icone: "📚",
  bncc: ["EF89LP34"],
  tema: "Escolhas de leitura", conceito: "seleção autônoma e apreciação fundamentada de obras",
  explicacao: "Escolher literatura envolve explorar autores, gêneros, temas, estilos e recomendações, formular expectativas e avaliar a experiência com critérios. Uma apreciação fundamentada relaciona interpretação a elementos concretos da obra.",
  exemplo: "Escolhi o romance pela narrativa não linear; recomendo-o porque as mudanças de tempo revelam aos poucos o conflito.",
  exemploAnalisado: "A avaliação apresenta critério, recurso formal e efeito produzido, não apenas gosto pessoal.",
  pergunta: "Qual recomendação é fundamentada?", opcoes: ["Relaciona avaliação a um recurso da obra", "Diz só que é bom", "Julga outros leitores"], resposta: 0,
  revisao: ["Seleção amplia repertório.", "Expectativas podem ser revistas.", "Apreciação usa critérios e evidências."],
  missao: "Escolha uma obra e escreva recomendação com critério, elemento textual e efeito percebido.",
});

// EF69LP é um bloco oficial comum aos anos finais. Reutilizamos as aulas já
// validadas pedagogicamente, mas com identificadores próprios no curso do 8º ano.
export const aula29 = { ...comumEtica, slug: "aula-29-etica-publicidade-e-humor" };
export const aula30 = { ...comumMidia, slug: "aula-30-producao-midiatica" };
export const aula31 = { ...comumDebate, slug: "aula-31-debate-argumentativo" };
export const aula32 = { ...comumNormas, slug: "aula-32-normas-e-propostas" };
export const aula33 = { ...comumDiscussao, slug: "aula-33-discussao-e-registro-civico" };
export const aula34 = { ...comumPesquisa, slug: "aula-34-pesquisa-critica" };
export const aula35 = { ...comumDivulgacao, slug: "aula-35-divulgacao-cientifica-multimidia" };
export const aula36 = { ...comumApresentacao, slug: "aula-36-apresentacao-e-vozes" };
export const aula37 = { ...comumLiteratura, slug: "aula-37-literatura-e-valores" };
export const aula38 = { ...comumNarrativa, slug: "aula-38-narrativa-autoral" };
export const aula39 = { ...comumPoesia, slug: "aula-39-poesia-voz-e-sentido" };
export const aula40 = { ...comumTeatro, slug: "aula-40-texto-teatral-em-cena" };
export const aula41 = { ...comumVariacao, slug: "aula-41-variacao-e-norma" };

export const aulas20a41 = [aula20, aula21, aula22, aula23, aula24, aula25, aula26, aula27, aula28, aula29, aula30, aula31, aula32, aula33, aula34, aula35, aula36, aula37, aula38, aula39, aula40, aula41];
