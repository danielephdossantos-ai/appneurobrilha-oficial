import type { AulaV4 } from "../../types";
export const aula00_multiplosFluxograma: AulaV4 = {
  slug:"u1-00-multiplos-fluxograma",titulo:"Múltiplos, divisores e estratégias",iconeTrilha:"🧭",bncc:["EF07MA01","EF07MA05","EF07MA06","EF07MA07"],duracaoMin:25,metodologias:["cpa","skemp"],
  momento01_motivacao:{titulo:"Resolver sem receita automática",historia:"{NOME}, problemas de ciclos e agrupamentos podem envolver múltiplos ou divisores. Vamos representar estratégias e decisões, sem aplicar MMC ou MDC mecanicamente."},
  momento02_exploracao:{instrucao:"Compare a pergunta com a relação entre as quantidades.",cenas:[
    {tipo:"tabela",titulo:"Estratégias",cabecalhos:["Situação","Estratégia"],linhas:[{rotulo:"Ciclos",valores:["Listar múltiplos até encontrar coincidência"]},{rotulo:"Grupos iguais",valores:["Testar divisores e conferir restos"]}]},
    {tipo:"texto",texto:"O fluxograma registra perguntas, decisões e caminhos até a resposta.",destaque:true}
  ]},
  momento03_descoberta:{perguntaGuia:"Dois sinais repetem a cada 6 e 8 segundos. Quando coincidem novamente?",pista:"Liste os múltiplos de 6 e de 8.",revelacao:"6,12,18,24 e 8,16,24. A primeira coincidência é 24 segundos."},
  momento04_explicacao:{titulo:"Estratégias e fluxograma",etapas:[
    {texto:"Para ciclos, liste múltiplos relevantes.",exemploReal:{contexto:"4 e 6: múltiplos comuns 12,24…",destaque:"A primeira coincidência positiva é 12."}},
    {texto:"Para formar grupos iguais, teste divisores.",exemploReal:{contexto:"24 objetos em grupos sem sobra.",destaque:"Os tamanhos possíveis incluem 1,2,3,4,6,8,12 e 24."}},
    {texto:"O mesmo problema pode ser resolvido por estratégias diferentes.",exemploReal:{contexto:"Coincidência de 4 e 6: listar múltiplos ou representar saltos em duas retas.",destaque:"Os dois caminhos chegam a 12 e podem ser comparados."}},
    {texto:"Problemas com a mesma estrutura reutilizam o mesmo procedimento.",exemploReal:{contexto:"Troque ciclos de 4 e 6 por ciclos de 5 e 8.",destaque:"A estrutura continua sendo procurar a primeira coincidência entre múltiplos."}},
    {texto:"Fluxograma: início → identificar relação → testar estratégia → conferir → resposta.",exemploReal:{contexto:"Se há sobra, teste outro divisor; se não há, registre a solução.",destaque:"Cada decisão precisa indicar o próximo passo."}}
  ]},
  momento05_modelagem:{enunciado:"Organize 36 e 48 itens em pacotes do maior tamanho igual, sem sobras.",resposta:"Pacotes de 12",passos:["Liste divisores de 36 e 48.","Comuns: 1,2,3,4,6,12.","O maior comum é 12.","Confira: 36÷12=3 e 48÷12=4."]},
  momento06_praticaGuiada:{enunciado:"Ciclos de 5 e 7 minutos coincidem novamente após:",dica:"Liste múltiplos até a primeira coincidência.",interacao:{tipo:"escolhaVisual",pergunta:"Escolha:",opcoes:[{nome:"35 minutos"},{nome:"12 minutos"},{nome:"30 minutos"},{nome:"70 minutos"}],respostaCerta:"35 minutos",feedbackAcerto:"🎯 5×7=35 e 7×5=35.",feedbackErro:"Liste múltiplos de 5 e de 7."}},
  momento07_praticaIndependente:{enunciado:"Maior tamanho de grupo que divide 20 e 30 sem sobra:",interacao:{tipo:"escolhaVisual",pergunta:"Escolha:",opcoes:[{nome:"10"},{nome:"5"},{nome:"15"},{nome:"20"}],respostaCerta:"10",feedbackAcerto:"🎯 20÷10=2 e 30÷10=3.",feedbackErro:"Procure o maior divisor comum."}},
  momento08_aplicacao:{contexto:"Duas revisões acontecem a cada 9 e 12 dias e ocorreram juntas hoje.",problema:"Em quantos dias coincidirão novamente?",interacao:{tipo:"escolhaVisual",pergunta:"Escolha:",opcoes:[{nome:"36 dias"},{nome:"21 dias"},{nome:"108 dias"},{nome:"3 dias"}],respostaCerta:"36 dias",feedbackAcerto:"🎯 Primeira coincidência dos múltiplos.",feedbackErro:"9: 9,18,27,36; 12: 12,24,36."}},
  momento09_revisao:{pontos:["Leia a relação, não uma palavra isolada.","Compare estratégias diferentes para o mesmo problema.","Reutilize procedimentos em problemas com a mesma estrutura.","Fluxograma registra decisões e conferência."]},
  momento10_avaliacao:{perguntas:[
    {pergunta:"Primeira coincidência positiva de 4 e 10:",opcoes:["20","14","40","2"],correta:0,feedbackAcerto:"🎉",feedbackErro:"Liste múltiplos."},
    {pergunta:"Maior divisor comum de 18 e 24:",opcoes:["6","3","12","72"],correta:0,feedbackAcerto:"🎉",feedbackErro:"Teste os divisores comuns."},
    {pergunta:"Um fluxograma precisa mostrar:",opcoes:["Etapas e decisões","Somente a resposta","Passos sem ordem","Apenas desenhos"],correta:0,feedbackAcerto:"🎉",feedbackErro:"Ele organiza o caminho de resolução."}
  ]},
  momento11_missaoFamilia:{titulo:"Fluxograma de solução",materiais:["Papel e lápis"],passos:["Crie um problema de ciclos ou agrupamentos.","Resolva por listagem ou teste.","Desenhe o fluxograma das decisões e da conferência."],registro:"📸 Foto."},
  recompensa:{xp:185,moedas:95}
};
