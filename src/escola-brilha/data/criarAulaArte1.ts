import type { Aula } from "../types";
import { url as artistaImg } from "@/assets/neuro-treino/objetos/artista.png.asset.json";

export type ConfigArte1 = {
  codigo: string;
  titulo: string;
  foco: string;
  objeto: string;
  exemplos: [string, string, string, string];
  resposta: string;
  proxima?: string;
};

/** Cria aulas completas das lacunas EF15AR08–EF15AR26 no padrão do 1º ano. */
export function criarAulaArte1(config: ConfigArte1): Aula {
  const [correta, distrator1, distrator2, distrator3] = config.exemplos;
  return {
    codigo: config.codigo,
    ano: "1º Ano",
    disciplina: "Arte",
    titulo: config.titulo,
    narrativa: {
      titulo: `A descoberta: ${config.titulo}`,
      contexto: `Pip e a turma chegaram ao Ateliê das Cores e encontraram um novo desafio sobre ${config.objeto}.`,
      problema: `Eles queriam criar juntos, mas antes precisavam observar, experimentar e entender como ${config.foco.toLowerCase()}.`,
      convite: "Vamos descobrir com o corpo, os olhos, os ouvidos e a imaginação?",
    },
    conhecimentosPrevios: [
      "Participar de brincadeiras com regras simples.",
      "Observar imagens, sons, gestos ou histórias com atenção.",
    ],
    diagnostico: [
      {
        pergunta: `Qual opção combina melhor com ${config.objeto}?`,
        opcoes: [correta, distrator1, distrator2, distrator3],
        correta: 0,
        explicacao: `${correta} é a opção que se relaciona diretamente com o tema da aula.`,
        visual: { tipo: "itens", imagemUrl: artistaImg, quantidade: 1, rotulo: "🎨" },
      },
    ],
    missao: `Experimentar e compreender ${config.foco.toLowerCase()}, com participação ativa e respeito às diferentes formas de expressão.`,
    objetivos: [
      `Reconhecer ${config.objeto}.`,
      `Experimentar ${config.foco.toLowerCase()} de modo guiado.`,
      "Criar uma resposta artística própria e explicar uma escolha.",
      "Apreciar a produção dos colegas com respeito.",
    ],
    explicacao: `${config.foco}. Em Arte, primeiro observamos ou escutamos, depois experimentamos e, por fim, criamos. Não existe um único jeito de se expressar: cada escolha de movimento, som, gesto, imagem ou material comunica uma ideia.`,
    explicacaoAtiva: [
      {
        texto: `Observe: ${config.objeto} aparece de formas diferentes no cotidiano e nas culturas.`,
        exemplo: correta,
        imagem: artistaImg,
        imagemAlt: "Criança investigando uma linguagem artística",
        checagem: {
          pergunta: "Qual é o primeiro passo para aprender uma nova forma de arte?",
          opcoes: ["Observar com atenção", "Copiar sem pensar", "Desistir", "Rasgar o trabalho"],
          correta: 0,
          explicacao: "Observar ajuda a perceber detalhes e fazer escolhas conscientes.",
        },
      },
      {
        texto: "Experimente com segurança e perceba o que muda quando você altera uma escolha.",
        exemplo: `Teste duas maneiras de representar ${config.objeto}.`,
        checagem: {
          pergunta: "Na experimentação artística, o que fazemos?",
          opcoes: ["Testamos possibilidades", "Buscamos uma única resposta", "Ficamos sem participar", "Apagamos a ideia dos outros"],
          correta: 0,
          explicacao: "Experimentar é testar possibilidades e aprender com elas.",
        },
      },
      {
        texto: "Crie, compartilhe e explique uma escolha usando uma frase curta.",
        exemplo: "Eu escolhi assim porque queria mostrar uma ideia.",
      },
    ],
    explicacoesNiveis: {
      nivel1: `${config.objeto} também é uma forma de fazer e compreender arte.`,
      nivel2: `Você pode observar ${config.objeto} em brincadeiras, festas, apresentações e criações da comunidade.`,
      nivel3: "Pense na arte como uma mensagem: cada escolha ajuda a contar algo sem precisar explicar tudo com palavras.",
      nivel4: "Na vida real, artistas planejam, experimentam, revisam e apresentam suas criações para outras pessoas.",
    },
    exemploResolvido: {
      enunciado: `Como participar de uma experiência sobre ${config.objeto}?`,
      passos: [
        "Observar ou escutar o exemplo com atenção.",
        "Identificar uma característica importante.",
        "Experimentar a proposta com segurança.",
        "Contar o que percebeu e respeitar outras respostas.",
      ],
      resposta: config.resposta,
    },
    atividadeGuiada: {
      enunciado: `Escolha a opção que melhor representa ${config.objeto}.`,
      resposta: correta,
      explicacao: `${correta} desenvolve diretamente a habilidade desta aula.`,
      visual: {
        tipo: "comparar",
        pergunta: `Qual opção combina com ${config.objeto}?`,
        lados: [
          { imagemUrl: artistaImg, quantidade: 1, rotulo: correta, cor: "#8B5CF6" },
          { imagemUrl: artistaImg, quantidade: 1, rotulo: distrator1, cor: "#F59E0B" },
        ],
        opcoes: [correta, distrator1, distrator2, distrator3],
        correta: 0,
      },
    },
    exercicios: [
      { enunciado: `Dê um exemplo de ${config.objeto}.`, resposta: correta, dica: "Lembre do exemplo observado no começo." },
      { enunciado: "O que fazemos depois de observar?", resposta: "Experimentamos uma possibilidade.", dica: "Aprender Arte também é fazer." },
      { enunciado: "Como acolhemos criações diferentes?", resposta: "Ouvimos e comentamos com respeito.", dica: "Cada pessoa pode fazer escolhas próprias." },
    ],
    desafio: {
      enunciado: `Desafio do ateliê: aplique o que aprendeu sobre ${config.objeto}.`,
      resposta: config.resposta,
      visual: {
        perguntas: [
          {
            pergunta: `Qual ação desenvolve ${config.objeto}?`,
            opcoes: [correta, distrator1, distrator2, distrator3],
            correta: 0,
            explicacao: `${correta} coloca a habilidade em prática.`,
            visual: { tipo: "itens", imagemUrl: artistaImg, quantidade: 1, rotulo: "✨" },
          },
        ],
      },
    },
    quiz: [
      {
        pergunta: `O que aprendemos principalmente nesta aula?`,
        opcoes: [config.objeto, distrator1, distrator2, distrator3],
        correta: 0,
        explicacao: `A aula desenvolve ${config.objeto}.`,
        visual: { tipo: "itens", imagemUrl: artistaImg, quantidade: 1, rotulo: "🎭" },
      },
      {
        pergunta: "Qual atitude faz parte de uma criação artística coletiva?",
        opcoes: ["Ouvir e colaborar", "Mandar em todos", "Impedir ideias", "Abandonar o grupo"],
        correta: 0,
        explicacao: "Ouvir e colaborar permite que o grupo crie junto.",
        visual: { tipo: "itens", imagemUrl: artistaImg, quantidade: 2, rotulo: "🤝" },
      },
      {
        pergunta: "Depois de criar, o que ajuda a aprender mais?",
        opcoes: ["Compartilhar o processo", "Esconder toda escolha", "Dizer que só uma resposta vale", "Não observar o resultado"],
        correta: 0,
        explicacao: "Compartilhar o processo ajuda a reconhecer escolhas e aprendizagens.",
        visual: { tipo: "itens", imagemUrl: artistaImg, quantidade: 1, rotulo: "💬" },
      },
    ],
    revisao: {
      pontos: [
        `Aprendemos sobre ${config.objeto}.`,
        "Observamos antes de experimentar.",
        "Criamos, revisamos e compartilhamos.",
        "Respeitamos diferentes expressões e culturas.",
      ],
      dica: "Conte com suas palavras o que você observou, fez e descobriu.",
    },
    curiosidade: {
      titulo: "Arte está em toda parte",
      texto: `As pessoas usam ${config.objeto} para brincar, celebrar, registrar memórias e comunicar ideias.`,
      imagemUrl: artistaImg,
    },
    conclusao: `Missão cumprida! Você observou, experimentou e criou com ${config.objeto}.`,
    interativas: [
      {
        tipo: "ordenar",
        titulo: "Passos da criação",
        instrucao: "Coloque o processo na ordem.",
        itens: ["Observar", "Experimentar", "Criar", "Compartilhar"],
      },
    ],
    proximaHabilidade: config.proxima ? { codigo: config.proxima } : undefined,
  };
}
