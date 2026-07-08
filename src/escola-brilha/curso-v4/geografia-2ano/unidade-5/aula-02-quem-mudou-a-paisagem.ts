import type { AulaPortuguesV4 } from "../../types";
import chuva from "@/assets/neuro-treino/objetos/chuva.png";
import vento from "@/assets/neuro-treino/objetos/vento.png";
import sol from "@/assets/neuro-treino/objetos/sol.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import rio from "@/assets/neuro-treino/objetos/lago.png";
import predio from "@/assets/neuro-treino/objetos/predio.png";
import rua from "@/assets/neuro-treino/objetos/rua.png";
import cidade from "@/assets/neuro-treino/objetos/cidade.png";
import campo from "@/assets/neuro-treino/objetos/campo.png";
import ponte from "@/assets/neuro-treino/objetos/ponte.png";
import funcionarioLimpeza from "@/assets/neuro-treino/objetos/funcionario-limpeza.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import planta from "@/assets/neuro-treino/objetos/planta-pequena.png";
import jardim from "@/assets/neuro-treino/objetos/jardim.png";
import apartamento from "@/assets/neuro-treino/objetos/apartamento.png";

/**
 * Geografia · 2º Ano · Unidade 5 · Aula 02
 * "Quem Mudou a Paisagem?" — EF02GE05
 *
 * A criança aprende a diferenciar transformações NATURAIS
 * (chuva, vento, sol) das transformações feitas pelas PESSOAS
 * (construir, plantar, asfaltar, cortar). Só blocos travados.
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-quem-mudou-a-paisagem",
  titulo: "Quem Mudou a Paisagem?",
  iconeTrilha: "🔍",
  bncc: ["EF02GE05"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Detetive das mudanças",
    historia:
      "Brilha pegou a LUPA. Aurora avisou: 'As paisagens mudam de DOIS jeitos: às vezes é a NATUREZA (chuva, vento, sol) e às vezes são as PESSOAS (construindo, plantando, asfaltando). Vira o DETETIVE e descubra quem foi!'",
    imagemUrl: chuva,
  },

  momento02_previsao: {
    instrucao: "Pistas do Detetive. Sobre o que é a missão?",
    bloco: {
      titulo: "Missão: Detetive das Mudanças",
      capaImagemUrl: mapa,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "🔎",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DETETIVE",
          "",
          "Descubra QUEM MUDOU:",
          "foi a NATUREZA ou",
          "foram as PESSOAS?",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: chuva, nome: "Chuva forte / vento" },
        { imagemUrl: funcionarioLimpeza, nome: "Pessoas trabalhando" },
        { imagemUrl: predio, nome: "Casas e prédios novos" },
      ],
      pergunta: "Sobre o que é essa missão?",
      hipoteses: [
        {
          texto: "Descobrir se foi a NATUREZA ou as PESSOAS que mudaram.",
          imagemUrl: cidade,
        },
        { texto: "Aprender a cantar uma música nova.", imagemUrl: sol },
        { texto: "Sobre andar de bicicleta na praia.", imagemUrl: rua },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Vamos separar NATUREZA × PESSOAS.",
      feedbackErro:
        "Olhe: chuva, pessoas, prédios. A missão é descobrir QUEM MUDOU.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras do Detetive.",
    cards: [
      {
        palavra: "natureza",
        explicacao:
          "É tudo o que existe SEM as pessoas fazerem: sol, chuva, vento, rio, mar, árvores. Ela também MUDA a paisagem sozinha.",
        exemplo: "A NATUREZA fez o morro escorregar com a chuva.",
        imagemUrl: chuva,
      },
      {
        palavra: "humano",
        explicacao:
          "É tudo que as PESSOAS fazem: construir, plantar, asfaltar, cortar. É a MÃO do ser humano na paisagem.",
        exemplo:
          "As MÁQUINAS abrindo a avenida = ação HUMANA.",
        imagemUrl: funcionarioLimpeza,
      },
      {
        palavra: "erosão",
        explicacao:
          "É quando a CHUVA ou o VENTO tira aos poucos a TERRA do lugar. Faz buracos e desmoronamento no morro.",
        exemplo: "A CHUVA forte causou EROSÃO no morro.",
        imagemUrl: vento,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora lê com você. Preste atenção em QUEM mudou.",
    leitura: {
      titulo: "Duas mãos que mudam o lugar",
      imagemUrl: cidade,
      legendaImagem: "Natureza e pessoas — as duas mudam a paisagem.",
      destacar: [
        "natureza",
        "chuva",
        "vento",
        "sol",
        "pessoas",
        "construíram",
        "plantaram",
        "asfaltaram",
      ],
      paragrafos: [
        "A NATUREZA muda os lugares SOZINHA. Uma CHUVA muito forte pode DESMORONAR um morro. O VENTO derruba uma árvore antiga. O SOL forte seca o rio.",
        "As PESSOAS também mudam a paisagem, mas de propósito. Elas CONSTRUÍRAM casas, PLANTARAM hortas, ABRIRAM ruas e ASFALTARAM avenidas.",
        "Na mesma cidade, as duas mudanças acontecem juntas: a chuva encheu a rua e as pessoas construíram uma PONTE nova.",
        "Sendo DETETIVE, a gente olha a PISTA: se foi PESSOA fazendo, é AÇÃO HUMANA; se foi CHUVA, VENTO ou SOL, é ação da NATUREZA.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "A CHUVA forte pode fazer o quê no morro?",
        opcoes: [
          "Construir um prédio",
          "Desmoronar (cair) a terra",
          "Plantar árvores",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! DESMORONAR.",
        feedbackErro:
          "O texto diz: 'CHUVA muito forte pode DESMORONAR um morro'.",
        ondeEstaNoTexto: "…pode DESMORONAR um morro…",
      },
      {
        pergunta: "O VENTO forte pode...",
        opcoes: [
          "Derrubar uma árvore antiga",
          "Fazer um prédio novo",
          "Asfaltar a rua",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Derrubar árvore.",
        feedbackErro:
          "O texto diz: 'O VENTO derruba uma árvore antiga'.",
        ondeEstaNoTexto: "…O VENTO derruba uma árvore antiga…",
      },
      {
        pergunta: "Quem CONSTRÓI casas e ASFALTA avenidas?",
        opcoes: ["A chuva", "O sol", "As pessoas"],
        correta: 2,
        feedbackAcerto: "🎉 As PESSOAS!",
        feedbackErro:
          "O texto diz: 'As PESSOAS… CONSTRUÍRAM casas… e ASFALTARAM avenidas'.",
        ondeEstaNoTexto:
          "…CONSTRUÍRAM casas… ABRIRAM ruas e ASFALTARAM avenidas…",
      },
      {
        pergunta: "Se foi CHUVA/VENTO/SOL, a mudança é de...",
        opcoes: ["Natureza", "Máquina do tempo", "Robô"],
        correta: 0,
        feedbackAcerto: "🎉 NATUREZA.",
        feedbackErro:
          "Se foi CHUVA, VENTO ou SOL, é ação da NATUREZA.",
        ondeEstaNoTexto: "…é ação da NATUREZA…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Detetive! Cada foto: NATUREZA ou PESSOAS?",
    perguntas: [
      {
        pergunta: "🌧️ Um morro caiu depois da chuva forte. Quem mudou?",
        opcoes: ["Natureza (chuva)", "Pessoas", "Ninguém"],
        opcoesImagens: [chuva, funcionarioLimpeza, sol],
        correta: 0,
        feedbackAcerto: "🎉 NATUREZA (chuva).",
        feedbackErro:
          "Chuva forte que faz o morro cair é ação da NATUREZA.",
      },
      {
        pergunta: "🏗️ Um prédio novo apareceu na esquina. Quem mudou?",
        opcoes: ["Natureza", "Pessoas (construção)", "Vento"],
        opcoesImagens: [chuva, predio, vento],
        correta: 1,
        feedbackAcerto: "🎉 PESSOAS.",
        feedbackErro:
          "Prédio novo aparece porque as PESSOAS constroem.",
      },
      {
        pergunta: "🌬️ Uma árvore caiu com o vento forte. Quem mudou?",
        opcoes: ["Pessoas", "Natureza (vento)", "Ninguém"],
        opcoesImagens: [funcionarioLimpeza, vento, sol],
        correta: 1,
        feedbackAcerto: "🎉 NATUREZA (vento).",
        feedbackErro:
          "Vento forte derrubando árvore é ação da NATUREZA.",
      },
      {
        pergunta: "🛣️ Uma máquina abriu uma nova estrada. Quem mudou?",
        opcoes: ["Natureza", "Pessoas", "A árvore"],
        opcoesImagens: [chuva, funcionarioLimpeza, arvore],
        correta: 1,
        feedbackAcerto: "🎉 PESSOAS.",
        feedbackErro:
          "Máquinas abrindo estrada = ação das PESSOAS.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Ordene o que ACONTECE quando chove forte no morro sem árvores.",
    bloco: {
      instrucao: "Do primeiro → último passo.",
      itens: [
        { id: "s1", texto: "1) COMEÇA a chuva forte.", imagemUrl: chuva },
        { id: "s2", texto: "2) A terra fica MOLE e escorregadia.", imagemUrl: campo },
        { id: "s3", texto: "3) SEM raízes, a terra DESLIZA.", imagemUrl: vento },
        { id: "s4", texto: "4) O morro DESMORONA em cima da rua.", imagemUrl: rua },
        { id: "s5", texto: "5) PESSOAS ajudam a limpar depois.", imagemUrl: funcionarioLimpeza },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 Isso! Chuva → terra mole → deslizamento → desmoronamento → ajuda.",
      feedbackErro:
        "Pensa: começa a CHUVA, aí a terra fica MOLE, DESLIZA, DESMORONA e as pessoas AJUDAM.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "A praça nova do bairro",
      imagemUrl: jardim,
      destacar: ["prefeitura", "praça", "árvores", "bancos", "brinquedos"],
      paragrafos: [
        "A PREFEITURA e os MORADORES juntaram esforço e transformaram um TERRENO ABANDONADO numa PRAÇA linda. Plantaram ÁRVORES, colocaram BANCOS e BRINQUEDOS.",
        "Agora a paisagem do bairro é outra: as crianças brincam com segurança, os pais conversam nos bancos e o lugar ficou bem mais BONITO.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem transformou o TERRENO em PRAÇA?",
        opcoes: ["A chuva", "Prefeitura e moradores", "O vento"],
        opcoesImagens: [chuva, funcionarioLimpeza, vento],
        correta: 1,
        feedbackAcerto: "🎉 PESSOAS (prefeitura + moradores).",
        feedbackErro:
          "O texto diz: 'A PREFEITURA e os MORADORES… transformaram'.",
        ondeEstaNoTexto:
          "…A PREFEITURA e os MORADORES… transformaram…",
      },
      {
        pergunta: "O que plantaram na praça?",
        opcoes: ["Árvores", "Prédios", "Rios"],
        opcoesImagens: [arvore, predio, rio],
        correta: 0,
        feedbackAcerto: "🎉 ÁRVORES.",
        feedbackErro:
          "O texto diz: 'Plantaram ÁRVORES'.",
        ondeEstaNoTexto: "…Plantaram ÁRVORES…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🔍 Quem Mudou a Paisagem?",
    instrucao:
      "Arraste cada carta pra CAIXA VERDE (Forças da Natureza) ou CAIXA AZUL (Ações das Pessoas).",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Quem Mudou a Paisagem?",
      bloco: {
        instrucao: "Toque na carta e depois na caixa da causa certa.",
        alvos: [
          {
            id: "natureza",
            nome: "🌿 Forças da Natureza",
            descricao: "Chuva, vento, sol, rio — sem ninguém mexer.",
            imagemUrl: chuva,
          },
          {
            id: "pessoas",
            nome: "👷 Ações das Pessoas",
            descricao: "Construir, plantar, asfaltar, fazer ponte.",
            imagemUrl: funcionarioLimpeza,
          },
        ],
        itens: [
          { id: "i1", texto: "Chuva forte derrubou terra do morro", alvoId: "natureza", imagemUrl: chuva },
          { id: "i2", texto: "Vento forte derrubou uma árvore", alvoId: "natureza", imagemUrl: vento },
          { id: "i3", texto: "Sol muito quente secou o rio", alvoId: "natureza", imagemUrl: sol },
          { id: "i4", texto: "Rio subiu depois da tempestade", alvoId: "natureza", imagemUrl: rio },
          { id: "i5", texto: "Pessoas construíram um prédio novo", alvoId: "pessoas", imagemUrl: predio },
          { id: "i6", texto: "Máquinas abriram uma nova estrada", alvoId: "pessoas", imagemUrl: rua },
          { id: "i7", texto: "Moradores plantaram uma praça", alvoId: "pessoas", imagemUrl: planta },
          { id: "i8", texto: "Operários fizeram uma ponte", alvoId: "pessoas", imagemUrl: ponte },
        ],
        feedbackAcerto:
          "🎉 Caso resolvido, Detetive! Você separou as mudanças naturais das humanas.",
        feedbackErro:
          "Lembra: chuva/vento/sol/rio subindo = NATUREZA. Construir/plantar/asfaltar/fazer ponte = PESSOAS.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "As paisagens mudam de DOIS jeitos.",
      "NATUREZA: chuva, vento, sol, rio subindo.",
      "PESSOAS: construir, plantar, asfaltar, fazer ponte.",
      "Chuva forte + sem árvores no morro = DESMORONAMENTO.",
      "Detetive olha a PISTA pra saber quem mudou.",
    ],
    miniDesafio: {
      pergunta: "Um pedreiro construiu uma escola nova. QUEM mudou a paisagem?",
      opcoes: ["A chuva", "As pessoas", "O vento"],
      correta: 1,
      feedbackAcerto: "🎉 AS PESSOAS!",
      feedbackErro:
        "Pedreiro construindo = AÇÃO HUMANA (pessoas).",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Chuva forte desmoronando morro é...",
        opcoes: ["Natureza", "Pessoas", "Robô"],
        correta: 0,
        feedbackAcerto: "🎉 NATUREZA.",
        feedbackErro:
          "CHUVA é força da NATUREZA.",
      },
      {
        pergunta: "2/5 — Máquina abrindo estrada é...",
        opcoes: ["Natureza", "Pessoas", "Ninguém"],
        correta: 1,
        feedbackAcerto: "🎉 PESSOAS.",
        feedbackErro:
          "Máquina abrindo estrada = AÇÃO HUMANA.",
      },
      {
        pergunta: "3/5 — Vento derrubando árvore é...",
        opcoes: ["Pessoas", "Natureza", "Semáforo"],
        correta: 1,
        feedbackAcerto: "🎉 NATUREZA.",
        feedbackErro:
          "Vento é força da NATUREZA.",
      },
      {
        pergunta: "4/5 — Moradores plantando árvores na praça é...",
        opcoes: ["Natureza", "Pessoas", "Chuva"],
        correta: 1,
        feedbackAcerto: "🎉 PESSOAS.",
        feedbackErro:
          "PLANTAR é ação das PESSOAS (mesmo que a planta seja da natureza!).",
      },
      {
        pergunta: "5/5 — Sol muito quente secando o rio é...",
        opcoes: ["Pessoas", "Natureza", "Foguete"],
        correta: 1,
        feedbackAcerto: "🎉 NATUREZA.",
        feedbackErro: "O SOL é a NATUREZA agindo.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🔎 Detetive das Mudanças",
    materiais: ["Um adulto", "Papel e lápis"],
    passos: [
      "1) Com um ADULTO, saia pelo bairro OU olhe pela janela.",
      "2) Aponte 2 MUDANÇAS na paisagem: 1 feita pela NATUREZA (galho caído, poça, folha seca) e 1 feita pelas PESSOAS (obra, muro, calçada).",
      "3) Desenhe as duas no caderno.",
      "4) Escreva embaixo: 'NATUREZA' ou 'PESSOAS'.",
    ],
    registro:
      "📸 Uma foto do seu caderno com os 2 desenhos e as legendas.",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
    medalha: "Detetive das Mudanças",
  },
};
