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
} from "../../portugues-7ano/unidade-10/aulas-43-a-57";

const criar = (numero: number, config: Parameters<typeof criarAulaConsolidacao>[0]) =>
  criarAulaConsolidacao({ ...config, slug: `aula-${numero}-${config.slug}` });

export const aula20 = criar(20, {
  slug: "sintaxe-e-estilo", titulo: "Sintaxe, Coesão e Estilo", icone: "⚙️",
  bncc: ["EF09LP06", "EF09LP08", "EF09LP09", "EF09LP10"],
  tema: "Engenharia do período", conceito: "estrutura sintática, colocação, coesão e efeitos de estilo",
  explicacao: "A organização de orações, complementos, modificadores, pronomes e conectores constrói clareza e ênfase. Comparar versões permite perceber como ordem, pontuação e escolhas gramaticais alteram foco e posicionamento.",
  exemplo: "A comissão aprovou a proposta ontem. Ontem, a proposta foi aprovada pela comissão.",
  exemploAnalisado: "As frases informam o mesmo fato, mas a segunda destaca tempo e proposta ao alterar ordem e voz.",
  pergunta: "Qual versão destaca a proposta?", opcoes: ["A segunda", "A primeira", "Nenhuma possui foco"], resposta: 0,
  revisao: ["Sintaxe organiza relações.", "Coesão mantém continuidade.", "Ordem e voz alteram foco."],
  missao: "Reescreva três períodos mudando o foco e explique os recursos sintáticos usados.",
});

export const aula21 = criar(21, {
  slug: "informacao-e-persuasao-digital", titulo: "Informação e Persuasão Digital", icone: "📱",
  bncc: ["EF89LP01", "EF89LP03", "EF89LP05", "EF89LP06", "EF89LP07", "EF89LP08", "EF89LP09"],
  tema: "Ecossistema informacional", conceito: "mídia, argumentação, persuasão e produção digital",
  explicacao: "Informação circula sob interesses editoriais, econômicos e algorítmicos. Ler criticamente exige localizar tese, argumentos, enquadramentos e recursos verbais e visuais; produzir exige pauta, público, evidências, roteiro e revisão ética.",
  exemplo: "Uma reportagem apresenta dados e fontes; a chamada da rede destaca apenas o trecho mais polêmico para atrair cliques.",
  exemploAnalisado: "A reportagem contextualiza, enquanto a chamada seleciona um recorte persuasivo que precisa ser confrontado com o texto completo.",
  pergunta: "Qual ação reduz o risco de manipulação?", opcoes: ["Ler o conteúdo e comparar fontes", "Compartilhar pela chamada", "Ignorar autoria e data"], resposta: 0,
  revisao: ["Mídia não é neutra.", "Tese precisa de sustentação.", "Produção digital exige responsabilidade."],
  missao: "Compare uma chamada e seu texto completo, identificando recorte, tese, evidência e efeito persuasivo.",
});

export const aula22 = criar(22, {
  slug: "debate-e-producao-argumentativa", titulo: "Debate e Produção Argumentativa", icone: "🗣️",
  bncc: ["EF89LP11", "EF89LP12", "EF89LP13", "EF89LP15", "EF89LP16", "EF89LP17", "EF89LP18", "EF89LP19"],
  tema: "Argumentação pública", conceito: "planejamento oral, negociação, movimentos argumentativos e modalização",
  explicacao: "Debates e podcasts argumentativos exigem questão delimitada, tese, evidências, escuta e resposta a objeções. Conectores e modalizadores organizam concessão, certeza, possibilidade e obrigação; voz, pausa e edição reforçam efeitos.",
  exemplo: "A proposta pode ampliar o acesso; contudo, deve prever avaliação mensal e recursos suficientes.",
  exemploAnalisado: "Pode reduz o grau de certeza, contudo apresenta ressalva e deve marca obrigação.",
  pergunta: "Qual palavra introduz a ressalva?", opcoes: ["contudo", "pode", "recursos"], resposta: 0,
  revisao: ["Debate exige escuta.", "Contra-argumento responde à ideia.", "Modalização regula compromisso."],
  missao: "Prepare tese, duas evidências, uma concessão e uma resposta a objeção para um debate.",
});

export const aula23 = criar(23, {
  slug: "cidadania-e-deliberacao", titulo: "Cidadania e Deliberação", icone: "⚖️",
  bncc: ["EF89LP20", "EF89LP21", "EF89LP22", "EF89LP24", "EF89LP25"],
  tema: "Intervenção responsável", conceito: "problemas públicos, propostas, debate e registro",
  explicacao: "Analisar uma questão pública envolve normas, agentes, causas, impactos e propostas. Deliberações precisam de argumentos verificáveis, respeito aos turnos e registro de decisões, responsáveis, prazos e critérios de acompanhamento.",
  exemplo: "Problema: travessia insegura. Evidência: fluxo medido. Proposta: faixa elevada. Responsável: órgão municipal. Prazo: próximo trimestre.",
  exemploAnalisado: "O encaminhamento conecta evidência, ação, competência institucional e prazo verificável.",
  pergunta: "O que torna a proposta acompanhável?", opcoes: ["Responsável, prazo e critério", "Slogan isolado", "Opinião sem dado"], resposta: 0,
  revisao: ["Questões públicas têm contexto.", "Propostas precisam ser viáveis.", "Registros preservam decisões."],
  missao: "Elabore uma proposta cidadã com diagnóstico, evidência, ação, responsável, prazo e avaliação.",
});

export const aula24 = criar(24, {
  slug: "pesquisa-e-divulgacao", titulo: "Pesquisa e Divulgação do Conhecimento", icone: "🔎",
  bncc: ["EF89LP26", "EF89LP27", "EF89LP28", "EF89LP30", "EF89LP31"],
  tema: "Autoria acadêmica", conceito: "fontes, notas, síntese, relações semânticas e apresentação",
  explicacao: "Pesquisa responsável define recorte, compara fontes e registra autoria. Notas e sínteses preservam ideias centrais; relações de causa, oposição e conclusão organizam o raciocínio; apresentação combina fala, texto e recursos visuais verificáveis.",
  exemplo: "O relatório compara séries históricas, cita a fonte e conclui apenas o que os dados permitem afirmar.",
  exemploAnalisado: "A relação entre dado e conclusão é explícita e limitada pelas evidências, evitando generalização indevida.",
  pergunta: "Qual prática protege a autoria?", opcoes: ["Indicar e contextualizar a fonte", "Copiar sem referência", "Ocultar o método"], resposta: 0,
  revisao: ["Recorte orienta pesquisa.", "Síntese mantém fidelidade.", "Conclusões dependem de evidências."],
  missao: "Produza uma síntese com duas fontes, relação lógica explícita e proposta de apoio visual.",
});

export const aula25 = criar(25, {
  slug: "literatura-autonomia-e-dialogos", titulo: "Literatura: Autonomia e Diálogos", icone: "📚",
  bncc: ["EF89LP33", "EF89LP34"],
  tema: "Leitor no Ensino Médio", conceito: "diálogo entre obras, escolha autônoma e apreciação fundamentada",
  explicacao: "Obras dialogam com outros textos, artes, épocas e valores. Um leitor autônomo explora autores e gêneros, formula expectativas e sustenta interpretações por recursos narrativos, poéticos ou dramáticos presentes na obra.",
  exemplo: "O romance atual retoma um mito antigo, mas transfere o conflito para uma cidade marcada por vigilância digital.",
  exemploAnalisado: "A comparação identifica a referência e explica como o novo contexto transforma seu sentido.",
  pergunta: "Qual apreciação é fundamentada?", opcoes: ["Relaciona interpretação a elementos da obra", "Diz apenas gostei", "Repete a capa"], resposta: 0,
  revisao: ["Obras estabelecem diálogos.", "Escolha amplia repertório.", "Interpretação usa evidências textuais."],
  missao: "Compare duas obras ou linguagens e explique uma permanência, uma transformação e seus efeitos.",
});

// As habilidades EF69LP são comuns do 6º ao 9º ano. As aulas já validadas
// são reutilizadas com identificadores próprios; EF69LP55 e EF69LP56 já estão
// cobertas pelas aulas 17 e 18 deste curso.
export const aula26 = { ...comumEtica, slug: "aula-26-etica-publicidade-e-humor" };
export const aula27 = { ...comumMidia, slug: "aula-27-producao-midiatica" };
export const aula28 = { ...comumDebate, slug: "aula-28-debate-argumentativo" };
export const aula29 = { ...comumNormas, slug: "aula-29-normas-e-propostas" };
export const aula30 = { ...comumDiscussao, slug: "aula-30-discussao-e-registro" };
export const aula31 = { ...comumPesquisa, slug: "aula-31-pesquisa-critica" };
export const aula32 = { ...comumDivulgacao, slug: "aula-32-divulgacao-cientifica" };
export const aula33 = { ...comumApresentacao, slug: "aula-33-apresentacao-e-vozes" };
export const aula34 = { ...comumLiteratura, slug: "aula-34-literatura-e-valores" };
export const aula35 = { ...comumNarrativa, slug: "aula-35-narrativa-autoral" };
export const aula36 = { ...comumPoesia, slug: "aula-36-poesia-voz-e-sentido" };
export const aula37 = { ...comumTeatro, slug: "aula-37-texto-teatral" };

export const aulas20a37 = [aula20, aula21, aula22, aula23, aula24, aula25, aula26, aula27, aula28, aula29, aula30, aula31, aula32, aula33, aula34, aula35, aula36, aula37];
