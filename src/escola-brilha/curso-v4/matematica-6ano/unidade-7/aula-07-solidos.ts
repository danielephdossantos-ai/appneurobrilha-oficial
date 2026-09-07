import type { AulaV4 } from "../../types";
export const aula07_solidos: AulaV4 = {
  slug:"u7-07-prismas-piramides",titulo:"Prismas e pirâmides",iconeTrilha:"📦",bncc:["EF06MA17"],duracaoMin:23,metodologias:["cpa","skemp"],
  momento01_motivacao:{titulo:"Da base para o sólido",historia:"{NOME}, prismas e pirâmides mudam conforme o polígono da base. Vamos relacionar bases, faces, arestas e vértices sem decorar números soltos."},
  momento02_exploracao:{instrucao:"Compare os elementos.",cenas:[{tipo:"tabela",titulo:"Prisma e pirâmide triangulares",cabecalhos:["Sólido","Faces","Arestas","Vértices"],linhas:[{rotulo:"Prisma",valores:["5","9","6"]},{rotulo:"Pirâmide",valores:["4","6","4"]}]},{tipo:"texto",texto:"Prisma tem duas bases congruentes e paralelas; pirâmide tem uma base e um ápice.",destaque:true}]},
  momento03_descoberta:{perguntaGuia:"Quantos vértices tem um prisma pentagonal?",pista:"Cinco em cada base.",revelacao:"5×2=10 vértices."},
  momento04_explicacao:{titulo:"Relações com a base",etapas:[
    {texto:"Prisma de base com n lados.",exemploReal:{contexto:"Base quadrada: n=4.",destaque:"V=2n=8, A=3n=12, F=n+2=6."}},
    {texto:"Pirâmide de base com n lados.",exemploReal:{contexto:"Base quadrada: n=4.",destaque:"V=n+1=5, A=2n=8, F=n+1=5."}},
    {texto:"A planificação abre as faces no plano.",exemploReal:{contexto:"Cubo: seis quadrados conectados.",destaque:"Ao dobrar pelas arestas, formam o sólido."}}
  ]},
  momento05_modelagem:{enunciado:"Prisma hexagonal: determine V, A e F.",resposta:"V=12, A=18, F=8",passos:["n=6.","V=2×6=12.","A=3×6=18.","F=6+2=8."]},
  momento06_praticaGuiada:{enunciado:"Pirâmide pentagonal: quantos vértices?",dica:"Cinco na base e um ápice.",interacao:{tipo:"escolhaVisual",pergunta:"Escolha:",opcoes:[{nome:"6"},{nome:"5"},{nome:"10"},{nome:"7"}],respostaCerta:"6",feedbackAcerto:"🎯 5+1=6.",feedbackErro:"Acrescente o ápice aos vértices da base."}},
  momento07_praticaIndependente:{enunciado:"Prisma pentagonal: quantas faces?",interacao:{tipo:"escolhaVisual",pergunta:"Escolha:",opcoes:[{nome:"7"},{nome:"5"},{nome:"10"},{nome:"6"}],respostaCerta:"7",feedbackAcerto:"🎯 Cinco laterais e duas bases.",feedbackErro:"F=n+2."}},
  momento08_aplicacao:{contexto:"Uma embalagem tem duas bases triangulares paralelas e três faces retangulares.",problema:"Qual sólido?",interacao:{tipo:"escolhaVisual",pergunta:"Escolha:",opcoes:[{nome:"Prisma triangular"},{nome:"Pirâmide triangular"},{nome:"Cubo"},{nome:"Pirâmide quadrangular"}],respostaCerta:"Prisma triangular",feedbackAcerto:"🎯 Duas bases congruentes indicam prisma.",feedbackErro:"Pirâmides têm somente uma base."}},
  momento09_revisao:{pontos:["Prisma: duas bases congruentes e paralelas.","Pirâmide: uma base e um ápice.","Conte elementos a partir dos lados da base.","Planificação mostra as faces no plano."]},
  momento10_avaliacao:{perguntas:[
    {pergunta:"Prisma de base quadrada tem vértices:",opcoes:["8","4","6","12"],correta:0,feedbackAcerto:"🎉",feedbackErro:"Quatro em cada base."},
    {pergunta:"Pirâmide triangular tem faces:",opcoes:["4","3","5","6"],correta:0,feedbackAcerto:"🎉",feedbackErro:"Uma base e três laterais."},
    {pergunta:"Planificação mostra:",opcoes:["Faces abertas no plano","Somente volume","Uma aresta","Nenhuma face"],correta:0,feedbackAcerto:"🎉",feedbackErro:"Ela apresenta todas as faces."}
  ]},
  momento11_missaoFamilia:{titulo:"Inventário de embalagem",materiais:["Uma embalagem segura"],passos:["Identifique o sólido.","Conte faces, arestas e vértices.","Desenhe sua possível planificação sem cortar."],registro:"📸 Foto do desenho."},
  recompensa:{xp:185,moedas:95}
};
