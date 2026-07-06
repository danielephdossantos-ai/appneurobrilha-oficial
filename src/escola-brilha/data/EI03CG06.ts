import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";

/**
 * EI03CG06 — Aula 6: Minhas mãos criam
 * Estrela: ⭐ Coordenação · Medalha: 🏅 Artista das Mãos
 */
const aula: Aula = {
  codigo: "EI03CG06",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Minhas Mãos Criam",

  narrativa: {
    titulo: "As mãos que fazem magia",
    contexto: "A Fifi pegou papel, dobrou, torceu — e apareceu uma FLORZINHA de papel! O Téo olhou e disse: 'Suas mãos fazem magia!'",
    problema: "A sexta estrela do Mundo 2 só acende quando a criança descobrir que as MÃOS aprendem coisas todo dia.",
    convite: "Bora criar coisas com as mãos?",
  },

  conhecimentosPrevios: ["Sabe pegar objetos pequenos.", "Já rabiscou com lápis.", "Já rasgou papel."],

  missao: "Descobrir que as mãos aprendem — cada movimento fino é um novo poder.",

  objetivos: ["Usar os dedos com precisão.", "Perceber que treino melhora a mão."],

  motivacao: "Grandes artistas começaram do rabisco — como você agora!",

  explicacao: "As MÃOS têm dedos que aprendem tudo:\n\n• PEGAR uma bolinha pequena.\n• ABRIR e FECHAR botões.\n• AMASSAR massinha.\n• DESENHAR com lápis.\n• DOBRAR papel.\n\nIsso se chama COORDENAÇÃO FINA — mãos e olhos trabalhando juntinhos.",

  explicacaoAtiva: [
    { texto: "A Fifi pegou uma florzinha usando só 2 dedos!", imagem: florImg, imagemAlt: "Flor pequena" },
    { texto: "Depois dobrou o papel com cuidado.", imagem: fifiImg, imagemAlt: "Fifi dobrando" },
    { texto: "E olha só o que apareceu!", imagem: presenteImg, imagemAlt: "Presente pronto", checagem: { pergunta: "Quem aprende quando você treina?", opcoes: ["As mãos e os dedos", "Só a boca"], correta: 0, explicacao: "Isso! As mãos aprendem com o treino." } }
  ],

  explicacoesNiveis: {
    nivel1: "Mãos aprendem quando eu uso.",
    nivel2: "Semana passada eu não sabia amarrar. Hoje quase amarro.",
    nivel3: "Mão é como massinha — treino deixa habilidosa.",
    nivel4: "Pintar, escrever, tocar violão — tudo começa nas mãos.",
  },

  exemploResolvido: {
    enunciado: "A Fifi vai fazer 5 dobras no papel. Vamos contar as dobras!",
    passos: ["1ª dobra... ", "2ª, 3ª... ", "4ª e 5ª. Pronto!"],
    resposta: "5 dobras — e virou uma flor de papel.",
    interativo: { tipo: "contagem", imagemUrl: florImg, quantidade: 5, nomeItem: "dobra", nomeItemPlural: "dobras", pergunta: "Quantas dobras a Fifi fez?" },
  },

  atividadeGuiada: {
    enunciado: "Três amigos criaram coisas. Quem ficou no MEIO na exposição?",
    resposta: "A Fifi ficou em 2º lugar (meio).",
    explicacao: "1º Téo, 2º Fifi, 3º Lupi.",
    visual: {
      tipo: "podio",
      pergunta: "Quem está no meio da exposição?",
      participantes: [{ nome: "Téo", imagemUrl: teoImg, posicao: 1 }, { nome: "Fifi", imagemUrl: fifiImg, posicao: 2 }, { nome: "Lupi", imagemUrl: lupiImg, posicao: 3 }],
      respostaCerta: "Fifi",
    },
  },

  exercicios: [
    { enunciado: "✋ O que a mão consegue fazer?", resposta: "Pegar, apertar, soltar, desenhar, dobrar.", dica: "Pensa em 3 coisas que fez hoje." },
    { enunciado: "🖍️ Se meu desenho ainda é feio, tem problema?", resposta: "Não! Todo artista começou rabiscando.", dica: "O importante é tentar." },
    { enunciado: "🤲 O que treina a coordenação?", resposta: "Massinha, quebra-cabeça, pintar, amarrar.", dica: "Toda brincadeira com as mãos." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 amigos criando coisas com as mãos.",
    resposta: "Cada mão criou algo diferente — e todas ficaram lindas.",
    visual: {
      cena: [{ personagem: "Téo desenhando", itemImagemUrl: livroImg, quantidade: 1, cor: "#60A5FA" }, { personagem: "Fifi dobrando", itemImagemUrl: florImg, quantidade: 1, cor: "#FBBF24" }, { personagem: "Lupi amassando", itemImagemUrl: coracaoImg, quantidade: 1, cor: "#F472B6" }],
      perguntas: [{ pergunta: "O Téo desenhou. O que ele usou?", opcoes: ["Mão e olho", "Só o pé"], correta: 0, explicacao: "Desenhar une mão e olho." }, { pergunta: "A Fifi dobrou 5 vezes. Ficou fácil?", opcoes: ["Com treino, sim", "Nunca fica"], correta: 0, explicacao: "Treino resolve." }, { pergunta: "O Lupi fez um coração de massinha. O que ele usou?", opcoes: ["Os dedos", "Só a boca"], correta: 0, explicacao: "Dedos moldam a massinha." }],
    },
  },

  revisao: {
    pontos: ["Mãos e dedos aprendem com treino.", "Cada movimento fino é um poder novo.", "Rabisco de hoje = arte de amanhã.", "Coordenação = mão + olho juntos."],
    dica: "Hoje: use as mãos pra criar algo — pode ser rabisco, dobradura ou massinha.",
  },

  quiz: [
    { pergunta: "Mãos aprendem?", opcoes: ["Sim, com treino", "Não, nascem prontas"], correta: 0, explicacao: "Treino é o segredo.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "Mãos criativas" } },
    { pergunta: "Pra desenhar, o que uso?", opcoes: ["Mão e olho", "Só a orelha"], correta: 0, explicacao: "Olho vê, mão desenha.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Desenho" } },
    { pergunta: "Quantas mãos tenho pra criar?", opcoes: ["1", "2", "3"], correta: 1, explicacao: "As 2 mãos criam juntas.", visual: { tipo: "grupos", grupos: [{ imagemUrl: fifiImg, quantidade: 1, rotulo: "Direita", cor: "#FBBF24" }, { imagemUrl: fifiImg, quantidade: 1, rotulo: "Esquerda", cor: "#F472B6" }] } }
  ],

  conclusao: "🏅 Medalha: Artista das Mãos! A SEXTA ESTRELA ⭐ acendeu. Em Casa: crie uma dobradura ou desenho e mostre pra família.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Sua mão tem 27 ossos! É a parte do corpo com MAIS ossinhos — porque precisa mexer de muitos jeitos.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Dedos", instrucao: "Conte os dedos de UMA mão.", grupos: [{ imagemUrl: fifiImg, quantidade: 5, rotulo: "Dedos" }], pergunta: "Quantos dedos numa mão?", opcoes: ["3", "5", "10"], correta: 1, acerto: "5 dedos!", erro: "Conte: 1, 2, 3, 4, 5." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Criações", instrucao: "Cada amigo fez 1 criação.", grupos: [{ imagemUrl: florImg, quantidade: 1, rotulo: "Flor" }, { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração" }, { imagemUrl: livroImg, quantidade: 1, rotulo: "Desenho" }], pergunta: "Quantas criações?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 criações!", erro: "Conte cada uma." },
    { tipo: "ligar", titulo: "Fase 3 · Amigo e criação", instrucao: "Ligue amigo à criação dele.", pares: [{ a: "Téo", b: "desenho", aImagem: teoImg, aQuantidade: 1, bImagem: livroImg, bQuantidade: 1 }, { a: "Fifi", b: "flor de papel", aImagem: fifiImg, aQuantidade: 1, bImagem: florImg, bQuantidade: 1 }, { a: "Lupi", b: "coração de massinha", aImagem: lupiImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Estrela pra cada artista", instrucao: "Dê 1 estrela pra cada amigo.", itemImagem: estrelaImg, alvosVisuais: [{ nome: "Téo", cor: "#60A5FA", capacidade: 1, imagemUrl: teoImg }, { nome: "Fifi", cor: "#FBBF24", capacidade: 1, imagemUrl: fifiImg }, { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }], pares: [{ item: "E1", alvo: "Téo" }, { item: "E2", alvo: "Fifi" }, { item: "E3", alvo: "Lupi" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Quantos dedos tem uma mão?", opcoes: ["3", "5"], correta: 1, explicacao: "5 dedinhos.", visual: { tipo: "itens", imagemUrl: fifiImg, quantidade: 1, rotulo: "5 dedos" } }, { pergunta: "Pra pegar, uso o quê?", opcoes: ["Mão", "Pé"], correta: 0, explicacao: "A mão pega.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "Flor" } }],
    medio: [{ pergunta: "Desenhar vai ficando melhor com…", opcoes: ["Treino", "Sorte"], correta: 0, explicacao: "Treino faz o artista.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Desenho" } }, { pergunta: "Amassar massinha usa o quê?", opcoes: ["Dedos", "Cotovelo"], correta: 0, explicacao: "Dedos moldam.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Massinha" } }],
    dificil: [{ pergunta: "Se meu desenho não ficou bom, o que faço?", opcoes: ["Tento de novo", "Desisto"], correta: 0, explicacao: "Artista nunca desiste.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Tentar" } }, { pergunta: "Duas mãos juntas fazem mais que uma?", opcoes: ["Sim, juntas criam mais", "Não muda"], correta: 0, explicacao: "Duas mãos combinam forças.", visual: { tipo: "itens", imagemUrl: presenteImg, quantidade: 1, rotulo: "Presente feito à mão" } }],
  },

  proximaHabilidade: { codigo: "EI03CG07", titulo: "Higiene: cuidar do corpo" },
};

void balaoImg; void felizImg; void piuImg;

export default aula;
