import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import cerejeiraImg from "@/assets/neuro-treino/objetos/cerejeira.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EI03CG08 — Aula 8: Alimentação e força
 * Estrela: ⭐ Energia · Medalha: 🏅 Explorador da Comida Boa
 */
const aula: Aula = {
  codigo: "EI03CG08",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Alimentação e Força",

  narrativa: {
    titulo: "A cesta de frutas",
    contexto: "O Téo abriu a cesta: maçã vermelha, banana amarela, cerejinha rosa. 'Coma uma fruta e sinta o corpo ficar forte', disse o Vovô Coruja.",
    problema: "A oitava estrela só acende quando a criança descobrir que a COMIDA vira ENERGIA no corpo.",
    convite: "Vamos escolher uma fruta pra ficar fortes?",
  },

  conhecimentosPrevios: ["Já comeu fruta.", "Sabe que come várias vezes por dia.", "Percebe fome e sede."],

  missao: "Descobrir que comida saudável dá energia pro corpo brincar e crescer.",

  objetivos: ["Reconhecer alimentos que fazem bem.", "Perceber que comer bem = corpo forte."],

  motivacao: "Cada mordida boa é combustível pro dia inteiro!",

  explicacao: "COMIDA vira ENERGIA:\n\n• FRUTAS (maçã, banana, cerejinha) — energia rápida e boa.\n• VERDURAS (alface, brócolis) — corpo forte.\n• ARROZ e FEIJÃO — energia pro dia todo.\n• ÁGUA — mata a sede e faz o corpo funcionar.\n\nDoce e refrigerante em excesso deixam a gente lento. O corpo pede comida DE VERDADE.",

  explicacaoAtiva: [
    { texto: "A Fifi mordeu uma maçã!", imagem: macaImg, imagemAlt: "Maçã" },
    { texto: "Depois comeu uma banana pra brincar mais.", imagem: bananaImg, imagemAlt: "Banana" },
    { texto: "E bebeu bastante água.", imagem: felizImg, imagemAlt: "Fifi feliz", checagem: { pergunta: "O que dá mais energia pro corpo?", opcoes: ["Fruta e água", "Só refrigerante"], correta: 0, explicacao: "Isso! Fruta e água dão energia de verdade." } }
  ],

  explicacoesNiveis: {
    nivel1: "Comida boa deixa o corpo forte.",
    nivel2: "Se eu como fruta no lanche, corro mais tempo no recreio.",
    nivel3: "Corpo é como um carro — precisa do combustível certo.",
    nivel4: "Comida saudável ajuda a crescer, a pensar e a brincar mais.",
  },

  exemploResolvido: {
    enunciado: "A Fifi comeu 3 frutas hoje. Vamos contar!",
    passos: ["1 maçã.", "1 banana.", "1 cerejinha. Total: 3!"],
    resposta: "3 frutas — corpo cheio de energia.",
    interativo: { tipo: "contagem", imagemUrl: macaImg, quantidade: 3, nomeItem: "fruta", nomeItemPlural: "frutas", pergunta: "Quantas frutas a Fifi comeu?" },
  },

  atividadeGuiada: {
    enunciado: "Três amigos escolheram uma fruta. Quem ficou no MEIO da cesta?",
    resposta: "A Fifi ficou no meio.",
    explicacao: "1º Téo (maçã), 2º Fifi (banana), 3º Lupi (cerejinha).",
    visual: {
      tipo: "podio",
      pergunta: "Quem está no meio da cesta de frutas?",
      participantes: [{ nome: "Téo", imagemUrl: teoImg, posicao: 1 }, { nome: "Fifi", imagemUrl: fifiImg, posicao: 2 }, { nome: "Lupi", imagemUrl: lupiImg, posicao: 3 }],
      respostaCerta: "Fifi",
    },
  },

  exercicios: [
    { enunciado: "🍎 Por que comer fruta?", resposta: "Fruta dá energia e vitamina.", dica: "Você prefere qual fruta?" },
    { enunciado: "💧 Água serve pra quê?", resposta: "Mata sede e faz o corpo funcionar.", dica: "O corpo pede água todo dia." },
    { enunciado: "🍬 Comer só doce é bom?", resposta: "Não — doce demais deixa o corpo lento.", dica: "Doce pouco, comida boa muito." }
  ],

  desafio: {
    enunciado: "Desafio Brilha: 3 pratos. Descubra qual dá mais energia.",
    resposta: "O corpo pede comida de verdade — não só doce.",
    visual: {
      cena: [{ personagem: "Prato de fruta", itemImagemUrl: macaImg, quantidade: 3, cor: "#F472B6" }, { personagem: "Prato de banana", itemImagemUrl: bananaImg, quantidade: 2, cor: "#FBBF24" }, { personagem: "Prato só de doce", itemImagemUrl: coracaoImg, quantidade: 1, cor: "#A78BFA" }],
      perguntas: [{ pergunta: "Qual prato tem MAIS frutas?", opcoes: ["3 maçãs", "1 doce"], correta: 0, explicacao: "3 é maior que 1." }, { pergunta: "Qual comida dá mais ENERGIA saudável?", opcoes: ["Fruta", "Doce"], correta: 0, explicacao: "Fruta dá energia boa." }, { pergunta: "Comer bem faz o corpo…", opcoes: ["Forte", "Cansado"], correta: 0, explicacao: "Comida boa = corpo forte." }],
    },
  },

  revisao: {
    pontos: ["Comida boa vira energia.", "Fruta, verdura e água são amigos do corpo.", "Doce só de vez em quando.", "Água todo dia."],
    dica: "Hoje: coma 1 fruta e beba 3 copos de água.",
  },

  quiz: [
    { pergunta: "Fruta faz o corpo…", opcoes: ["Forte", "Lento"], correta: 0, explicacao: "Fruta fortalece.", visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "Maçã" } },
    { pergunta: "Quantas maçãs? 🍎🍎", opcoes: ["1", "2", "3"], correta: 1, explicacao: "2 maçãs.", visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 2, rotulo: "Maçãs" } },
    { pergunta: "O que mata a sede?", opcoes: ["Água", "Doce"], correta: 0, explicacao: "Água mata sede.", visual: { tipo: "grupos", grupos: [{ imagemUrl: macaImg, quantidade: 1, rotulo: "Comida", cor: "#F472B6" }, { imagemUrl: felizImg, quantidade: 1, rotulo: "Bem-estar", cor: "#FBBF24" }] } }
  ],

  conclusao: "🏅 Medalha: Explorador da Comida Boa! A OITAVA ESTRELA ⭐ acendeu. Em Casa: escolha uma fruta pra comer com a família.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Uma banana tem energia pra você correr por 20 minutos! É por isso que atletas comem banana.",
  },

  interativas: [
    { tipo: "contarQuiz", titulo: "Fase 1 · Cesta de frutas", instrucao: "Conte as frutas.", grupos: [{ imagemUrl: macaImg, quantidade: 3, rotulo: "Maçãs" }], pergunta: "Quantas maçãs?", opcoes: ["2", "3", "4"], correta: 1, acerto: "3 maçãs!", erro: "Um a um: 1, 2, 3." },
    { tipo: "contarQuiz", titulo: "Fase 2 · Frutas variadas", instrucao: "Cada fruta uma vez.", grupos: [{ imagemUrl: macaImg, quantidade: 1, rotulo: "Maçã" }, { imagemUrl: bananaImg, quantidade: 1, rotulo: "Banana" }, { imagemUrl: cerejeiraImg, quantidade: 1, rotulo: "Cerejinha" }], pergunta: "Quantas frutas diferentes?", opcoes: ["2", "3"], correta: 1, acerto: "3 frutas!", erro: "Conte cada uma." },
    { tipo: "ligar", titulo: "Fase 3 · Fruta e cor", instrucao: "Ligue a fruta à cor.", pares: [{ a: "Maçã", b: "vermelha", aImagem: macaImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 }, { a: "Banana", b: "amarela", aImagem: bananaImg, aQuantidade: 1, bImagem: solImg, bQuantidade: 1 }, { a: "Cerejinha", b: "rosa", aImagem: cerejeiraImg, aQuantidade: 1, bImagem: cerejeiraImg, bQuantidade: 1 }] },
    { tipo: "arrastar", titulo: "Fase 4 · Fruta pra cada amigo", instrucao: "Dê 1 fruta pra cada amigo.", itemImagem: macaImg, alvosVisuais: [{ nome: "Téo", cor: "#60A5FA", capacidade: 1, imagemUrl: teoImg }, { nome: "Fifi", cor: "#FBBF24", capacidade: 1, imagemUrl: fifiImg }, { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg }], pares: [{ item: "Fruta 1", alvo: "Téo" }, { item: "Fruta 2", alvo: "Fifi" }, { item: "Fruta 3", alvo: "Lupi" }] }
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [{ pergunta: "Maçã é fruta?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Maçã é fruta.", visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "Maçã" } }, { pergunta: "Banana é doce?", opcoes: ["Doce natural", "Salgada"], correta: 0, explicacao: "Doçura natural.", visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1, rotulo: "Banana" } }],
    medio: [{ pergunta: "O que dá energia boa?", opcoes: ["Fruta", "Refri"], correta: 0, explicacao: "Fruta energia boa.", visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "Fruta" } }, { pergunta: "Água serve pra quê?", opcoes: ["Sede e corpo", "Nada"], correta: 0, explicacao: "Água mata sede e ajuda o corpo.", visual: { tipo: "itens", imagemUrl: felizImg, quantidade: 1, rotulo: "Hidratado" } }],
    dificil: [{ pergunta: "Doce todo dia faz bem?", opcoes: ["Não, só de vez em quando", "Sim, sempre"], correta: 0, explicacao: "Doce em excesso não é bom.", visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Equilíbrio" } }, { pergunta: "Comer bem ajuda a crescer?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Comida boa faz crescer.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Crescer" } }],
  },

  proximaHabilidade: { codigo: "EI03CG09", titulo: "Cinco sentidos" },
};

export default aula;
