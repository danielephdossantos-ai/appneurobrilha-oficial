import type { AulaPortuguesV4 } from "../../types";
import { url as mercado } from "@/assets/neuro-treino/objetos/mercado.png.asset.json";
import { url as campo } from "@/assets/neuro-treino/objetos/campo.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as vaca } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as padaria } from "@/assets/neuro-treino/objetos/padaria.png.asset.json";
import { url as geladeira } from "@/assets/neuro-treino/objetos/geladeira.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as mapaPercurso } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";

/**
 * Geografia · 2º Ano · Unidade 3 · Aula 03
 * "E se o Campo Parasse?" — EF02GE08
 *
 * A criança percebe a DEPENDÊNCIA da cidade em relação ao campo:
 * sem produção rural, o mercado urbano fica vazio. Padrão travado.
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-se-o-campo-parasse",
  titulo: "E se o Campo Parasse?",
  iconeTrilha: "🛒",
  bncc: ["EF02GE08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O mercado ficou VAZIO!",
    historia:
      "Brilha entrou no mercado e ficou de queixo caído: as PRATELEIRAS estavam VAZIAS! Aurora sussurrou: 'Os caminhões não conseguiram sair do campo hoje. Sabe o que acontece com a CIDADE quando o CAMPO para?'",
    imagemUrl: mercado,
  },

  momento02_previsao: {
    instrucao: "Olhe as pistas e escolha o que a missão vai investigar.",
    bloco: {
      titulo: "Missão: O que a cidade DEPENDE do campo?",
      capaImagemUrl: mapaPercurso,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO INVERSA",
          "",
          "Investigue o que",
          "acontece na CIDADE",
          "quando o CAMPO",
          "para de trabalhar.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: mercado, nome: "Prateleira vazia" },
        { imagemUrl: carro, nome: "Caminhão parado" },
        { imagemUrl: campo, nome: "Campo sem trabalho" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre a CIDADE DEPENDER do campo pra ter alimento.",
          imagemUrl: mapaPercurso,
        },
        { texto: "Sobre construir prédios altos.", imagemUrl: cidade },
        { texto: "Sobre trocar de escola.", imagemUrl: campo },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Vamos investigar a DEPENDÊNCIA da cidade em relação ao campo.",
      feedbackErro:
        "As pistas mostram MERCADO VAZIO e CAMINHÃO parado. A missão fala da DEPENDÊNCIA do CAMPO.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras poderosas de hoje.",
    cards: [
      {
        palavra: "depender",
        explicacao:
          "É quando uma coisa PRECISA da outra pra funcionar. A CIDADE DEPENDE do CAMPO pra ter comida.",
        exemplo: "O carro DEPENDE de gasolina.",
        imagemUrl: mercado,
      },
      {
        palavra: "abastecer",
        explicacao:
          "É ENCHER o mercado (ou a geladeira) com o que ele precisa. Os CAMINHÕES ABASTECEM o mercado com alimento.",
        exemplo: "O caminhão vai ABASTECER a padaria.",
        imagemUrl: carro,
      },
      {
        palavra: "escassez",
        explicacao:
          "É quando FALTA alguma coisa. Sem produção no campo, tem ESCASSEZ de alimento na cidade.",
        exemplo: "Sem chuva, tem ESCASSEZ de água.",
        imagemUrl: geladeira,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você.",
    leitura: {
      titulo: "A cidade que ficou sem comida",
      imagemUrl: mercado,
      destacar: ["cidade", "campo", "depende", "caminhões", "alimento"],
      paragrafos: [
        "A CIDADE tem MUITAS pessoas juntas — mais que no campo. Todas essas pessoas precisam COMER todos os dias.",
        "Mas o ALIMENTO NÃO nasce no meio dos prédios. Ele vem do CAMPO. Por isso, a cidade DEPENDE do campo.",
        "Todo dia, muitos CAMINHÕES saem das fazendas com leite, carne, arroz, tomate e frutas. Eles ABASTECEM os mercados e feiras da cidade.",
        "Se os caminhões não chegarem, o mercado FICA VAZIO. As famílias ficam sem alimento fresco. Isso mostra: sem o CAMPO, a CIDADE não vive.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "De onde vem o ALIMENTO que a cidade come?",
        opcoes: ["Do meio dos prédios", "Do campo", "Do teto do mercado"],
        correta: 1,
        feedbackAcerto: "🎉 Do CAMPO.",
        feedbackErro: "O texto diz: 'Ele vem do CAMPO'.",
        ondeEstaNoTexto: "…Ele vem do CAMPO…",
      },
      {
        pergunta: "Quem ABASTECE os mercados da cidade?",
        opcoes: [
          "Os caminhões que vêm do campo",
          "As nuvens",
          "Os prédios altos",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Os CAMINHÕES do campo.",
        feedbackErro:
          "O texto diz: 'muitos CAMINHÕES saem das fazendas… Eles ABASTECEM os mercados'.",
        ondeEstaNoTexto: "…muitos CAMINHÕES saem das fazendas…",
      },
      {
        pergunta: "O que acontece se os CAMINHÕES não chegarem?",
        opcoes: [
          "Nada — o mercado inventa comida",
          "O mercado fica VAZIO e falta alimento",
          "A cidade vira campo",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Mercado VAZIO, família sem alimento fresco.",
        feedbackErro:
          "O texto diz: 'o mercado FICA VAZIO. As famílias ficam sem alimento fresco'.",
        ondeEstaNoTexto: "…o mercado FICA VAZIO…",
      },
      {
        pergunta: "A cidade DEPENDE do campo ou não?",
        opcoes: ["Não depende", "Sim, depende pra ter comida", "Só depende no verão"],
        correta: 1,
        feedbackAcerto: "🎉 SIM — depende pra ter COMIDA.",
        feedbackErro: "O texto diz: 'a cidade DEPENDE do campo'.",
        ondeEstaNoTexto: "…a cidade DEPENDE do campo…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Pense no cenário do problema.",
    perguntas: [
      {
        pergunta:
          "Uma PONTE que liga o campo à cidade caiu. O que provavelmente vai acontecer nos mercados?",
        opcoes: [
          "Vão ficar mais cheios",
          "Vão faltar alimentos frescos",
          "Vão virar praças",
        ],
        opcoesImagens: [mercado, geladeira, cidade],
        correta: 1,
        feedbackAcerto: "🎉 Vão FALTAR alimentos frescos (escassez).",
        feedbackErro:
          "Sem a PONTE, o caminhão não passa → sem transporte → sem alimento no mercado.",
      },
      {
        pergunta:
          "Muitas pessoas moram na CIDADE. Elas conseguem PLANTAR arroz e criar VACAS dentro dos prédios?",
        opcoes: [
          "Sim, dá tranquilo",
          "Não — precisa de MUITO espaço, então acontece no CAMPO",
          "Só nos dias de chuva",
        ],
        opcoesImagens: [cidade, campo, vaca],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Plantação e criação precisam de ESPAÇO — acontecem no CAMPO.",
        feedbackErro:
          "Plantar e criar animais precisa de MUITO ESPAÇO — acontece no CAMPO.",
      },
      {
        pergunta:
          "Se um DIA o caminhão de leite não vier, a família na cidade...",
        opcoes: [
          "Fica sem leite fresco no café",
          "Faz o próprio leite no micro-ondas",
          "Vai até a Lua buscar",
        ],
        opcoesImagens: [geladeira, mercado, cidade],
        correta: 0,
        feedbackAcerto: "🎉 Certo — fica SEM leite fresco.",
        feedbackErro:
          "Sem o caminhão do campo, a família fica sem LEITE FRESCO.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloca em ORDEM o que acontece quando os CAMINHÕES do campo não passam.",
    bloco: {
      instrucao: "Do primeiro → último.",
      itens: [
        { id: "s1", texto: "1) O caminho do campo pra cidade fica FECHADO.", imagemUrl: ponte },
        { id: "s2", texto: "2) Os CAMINHÕES não conseguem passar.", imagemUrl: carro },
        { id: "s3", texto: "3) O MERCADO da cidade fica vazio.", imagemUrl: mercado },
        { id: "s4", texto: "4) As famílias ficam sem alimento fresco.", imagemUrl: geladeira },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 Perfeito! É essa a cadeia da DEPENDÊNCIA.",
      feedbackErro:
        "Primeiro FECHA o caminho, depois o CAMINHÃO não passa, depois o MERCADO esvazia, depois FALTA em casa.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda.",
    leitura: {
      titulo: "A feira que ficou fraca",
      imagemUrl: mercado,
      destacar: ["feira", "agricultores", "frutas", "sítio", "cidade"],
      paragrafos: [
        "No sábado tem FEIRA no bairro da Brilha. Vêm AGRICULTORES do sítio trazendo BANANA, MAÇÃ e verdura.",
        "Certa vez choveu MUITO e os agricultores não puderam vir. A feira ficou pequena, com pouca fruta. A vovó explicou: 'Tá vendo, Brilha? A gente na CIDADE depende do trabalho de quem mora no CAMPO'.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem TRAZ as frutas pra feira do bairro?",
        opcoes: ["Os agricultores do sítio", "As nuvens", "Os pombos"],
        opcoesImagens: [campo, cidade, mercado],
        correta: 0,
        feedbackAcerto: "🎉 Os AGRICULTORES do sítio.",
        feedbackErro:
          "O texto diz: 'Vêm AGRICULTORES do sítio trazendo BANANA, MAÇÃ…'.",
        ondeEstaNoTexto: "…Vêm AGRICULTORES do sítio…",
      },
      {
        pergunta: "Quando os agricultores NÃO PUDERAM vir, o que aconteceu?",
        opcoes: [
          "A feira ficou pequena, com pouca fruta",
          "A feira ficou maior que nunca",
          "Todo mundo virou agricultor",
        ],
        opcoesImagens: [mercado, cidade, campo],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Feira PEQUENA, pouca fruta.",
        feedbackErro:
          "O texto diz: 'A feira ficou pequena, com pouca fruta'.",
        ondeEstaNoTexto: "…A feira ficou pequena, com pouca fruta…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🤔 E Se... Acontecesse Isso?",
    instrucao:
      "Cada rodada mostra uma SITUAÇÃO na cidade. Descubra o que aconteceria.",
    jogo: {
      tipo: "arquitetoLugar",
      titulo: "E Se... Acontecesse Isso?",
      bloco: {
        instrucao: "Leia a situação e toque na resposta certa.",
        rodadas: [
          {
            id: "r1",
            cenario: {
              nome: "Prateleira vazia",
              emojiLugar: "🛒",
              emojiMorador: "😯",
              pista:
                "Os caminhões do CAMPO não conseguiram chegar hoje. Como fica o mercado da CIDADE?",
            },
            opcoes: [
              { id: "vazio", nome: "Sem alimento fresco", imagemUrl: mercado },
              { id: "cheio", nome: "Cheio do mesmo jeito", imagemUrl: geladeira },
              { id: "vira", nome: "Vira um sítio", imagemUrl: campo },
            ],
            correta: "vazio",
            feedbackAcerto:
              "🎉 Isso! Sem CAMPO → sem alimento fresco.",
            feedbackErro:
              "A cidade DEPENDE do campo. Sem caminhão → prateleira VAZIA.",
          },
          {
            id: "r2",
            cenario: {
              nome: "Ideia maluca",
              emojiLugar: "🏙️",
              emojiMorador: "🤖",
              pista:
                "Alguém disse: 'A CIDADE pode fabricar FRUTA sozinha usando CONCRETO!' Faz sentido?",
            },
            opcoes: [
              { id: "nao", nome: "Não — fruta vem do campo", imagemUrl: campo },
              { id: "sim", nome: "Sim, com muito concreto", imagemUrl: cidade },
              { id: "talvez", nome: "Só à noite", imagemUrl: mercado },
            ],
            correta: "nao",
            feedbackAcerto:
              "🎉 Certo! FRUTA vem do CAMPO — não se faz com concreto.",
            feedbackErro:
              "Concreto vira PRÉDIO, não FRUTA. Fruta vem do CAMPO.",
          },
          {
            id: "r3",
            cenario: {
              nome: "Chuva fechou a estrada",
              emojiLugar: "🌧️",
              emojiMorador: "🚛",
              pista:
                "Uma chuva forte fechou a ESTRADA entre o campo e a cidade. O que acontece com os alimentos?",
            },
            opcoes: [
              { id: "falta", nome: "Vai FALTAR na cidade", imagemUrl: mercado },
              { id: "sobra", nome: "Vai SOBRAR na cidade", imagemUrl: geladeira },
              { id: "bilhete", nome: "Vira brincadeira", imagemUrl: cidade },
            ],
            correta: "falta",
            feedbackAcerto:
              "🎉 Sim! Sem estrada, o CAMINHÃO não passa e falta alimento (escassez).",
            feedbackErro:
              "Sem estrada, o caminhão não passa → FALTA alimento (escassez).",
          },
          {
            id: "r4",
            cenario: {
              nome: "Padeiro sem farinha",
              emojiLugar: "🥖",
              emojiMorador: "👨‍🍳",
              pista:
                "O TRIGO não chegou do campo. A PADARIA da cidade consegue fazer pão do mesmo jeito?",
            },
            opcoes: [
              { id: "nao", nome: "Não — sem trigo, sem pão", imagemUrl: padaria },
              { id: "sim", nome: "Sim, faz pão de pedra", imagemUrl: cidade },
              { id: "leite", nome: "Faz pão de leite só", imagemUrl: vaca },
            ],
            correta: "nao",
            feedbackAcerto:
              "🎉 Certo! Sem TRIGO do campo, a padaria fica SEM pão.",
            feedbackErro:
              "PÃO precisa de TRIGO — que vem do CAMPO. Sem trigo, sem pão.",
          },
          {
            id: "r5",
            cenario: {
              nome: "Semana da fartura",
              emojiLugar: "🍎",
              emojiMorador: "😄",
              pista:
                "Os agricultores tiveram uma COLHEITA ENORME e os caminhões vieram cheios. Como ficou a feira?",
            },
            opcoes: [
              { id: "cheia", nome: "Feira CHEIA de fruta", imagemUrl: maca },
              { id: "vazia", nome: "Vazia como sempre", imagemUrl: mercado },
              { id: "fechada", nome: "Fechada por dias", imagemUrl: cidade },
            ],
            correta: "cheia",
            feedbackAcerto:
              "🎉 Isso! Boa COLHEITA no campo = feira CHEIA na cidade.",
            feedbackErro:
              "Se o campo colhe muito, chega MUITO alimento na cidade — feira CHEIA.",
          },
        ],
        feedbackFinal:
          "Você virou Investigador da Dependência! A CIDADE precisa do CAMPO pra ter comida. Quando o campo vai bem, a cidade come bem.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "A CIDADE tem MUITAS pessoas — todas precisam comer.",
      "O ALIMENTO NÃO nasce entre os prédios; vem do CAMPO.",
      "CAMINHÕES ABASTECEM o mercado todos os dias.",
      "Sem caminhão do campo → mercado VAZIO (escassez).",
      "A CIDADE DEPENDE do CAMPO pra viver.",
    ],
    miniDesafio: {
      pergunta:
        "Se os caminhões do campo não chegarem por vários dias, o que acontece na CIDADE?",
      opcoes: [
        "Nada — a cidade inventa comida",
        "Falta alimento fresco no mercado",
        "A cidade fica maior",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! FALTA alimento fresco.",
      feedbackErro:
        "Sem os caminhões do campo, o mercado FICA SEM alimento fresco.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O ALIMENTO da cidade nasce ONDE?",
        opcoes: ["No campo", "Dentro dos prédios", "No telhado do mercado"],
        correta: 0,
        feedbackAcerto: "🎉 No CAMPO.",
        feedbackErro: "O ALIMENTO nasce no CAMPO.",
      },
      {
        pergunta: "2/5 — Quem ABASTECE os mercados da cidade?",
        opcoes: [
          "Os caminhões que vêm do campo",
          "Só as pessoas da cidade",
          "As nuvens",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Os CAMINHÕES do campo.",
        feedbackErro:
          "Quem ABASTECE o mercado são os CAMINHÕES do CAMPO.",
      },
      {
        pergunta: "3/5 — DEPENDER significa...",
        opcoes: [
          "Não precisar de nada",
          "PRECISAR de outra coisa pra funcionar",
          "Voar alto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 PRECISAR pra funcionar.",
        feedbackErro: "DEPENDER = PRECISAR de outra coisa.",
      },
      {
        pergunta:
          "4/5 — Se os caminhões do campo NÃO chegarem, o que acontece?",
        opcoes: [
          "A cidade fabrica frutas com concreto",
          "As pessoas na cidade ficam SEM alimentos frescos",
          "Vira feriado nacional",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! A CIDADE depende do CAMPO — sem caminhão, faltam alimentos.",
        feedbackErro:
          "Sem os caminhões do CAMPO, a CIDADE fica SEM alimentos frescos.",
      },
      {
        pergunta: "5/5 — A CIDADE depende do CAMPO?",
        opcoes: ["Não, não depende", "Sim — pra ter comida", "Só no verão"],
        correta: 1,
        feedbackAcerto: "🎉 SIM! Pra ter COMIDA.",
        feedbackErro:
          "A CIDADE depende do CAMPO principalmente pra ter ALIMENTO.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🕵️ Missão: O que veio do campo?",
    materiais: ["Papel e lápis", "Ajuda de um adulto"],
    passos: [
      "1) Abra o armário e a geladeira com um ADULTO.",
      "2) Conte QUANTOS alimentos vêm do CAMPO (fruta, verdura, leite, ovo, arroz…).",
      "3) Escreva num papel: 'Sem o campo, eu ficaria sem ____ e sem ____.'",
      "4) Complete com 2 alimentos que sua família mais come.",
    ],
    registro:
      "📸 Uma foto do seu papel completado.",
  },

  recompensa: {
    xp: 210,
    moedas: 125,
    medalha: "Investigador(a) da Dependência",
  },
};
