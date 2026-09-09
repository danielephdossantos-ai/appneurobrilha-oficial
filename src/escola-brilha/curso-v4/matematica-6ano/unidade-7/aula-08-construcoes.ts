import type { AulaV4 } from "../../types";
export const aula08_construcoes: AulaV4 = {
  slug:"u7-08-semelhanca-retas",titulo:"Ampliação, redução e retas",iconeTrilha:"📐",bncc:["EF06MA21","EF06MA22"],duracaoMin:24,metodologias:["cpa","skemp"],
  momento01_motivacao:{titulo:"Mudar tamanho sem deformar",historia:"{NOME}, figuras semelhantes preservam a forma porque todas as medidas correspondentes mudam pelo mesmo fator."},
  momento02_exploracao:{instrucao:"Compare as medidas.",cenas:[{tipo:"tabela",titulo:"Ampliação por fator 2",cabecalhos:["Figura","Base","Altura"],linhas:[{rotulo:"Original",valores:["3","2"]},{rotulo:"Ampliada",valores:["6","4"]}]},{tipo:"texto",texto:"Paralelas não se encontram; perpendiculares se cruzam formando 90°.",destaque:true}]},
  momento03_descoberta:{perguntaGuia:"Retângulo 4×3 ampliado por fator 3?",pista:"Multiplique as duas medidas.",revelacao:"12×9. Alterar somente uma medida deforma."},
  momento04_explicacao:{titulo:"Construir com critérios",etapas:[
    {texto:"Amplie cada medida pelo mesmo fator.",exemploReal:{contexto:"Lado 2, fator 3.",destaque:"Novo lado 6."}},
    {texto:"Para reduzir, divida todas as medidas pelo mesmo fator.",exemploReal:{contexto:"12×8 pela metade.",destaque:"6×4."}},
    {texto:"Régua traça; esquadro verifica ângulos retos e paralelismo.",exemploReal:{contexto:"Retângulo.",destaque:"Opostos paralelos; vizinhos perpendiculares."}}
  ]},
  momento05_modelagem:{enunciado:"Amplie lados 3, 4 e 5 por fator 2.",resposta:"6, 8 e 10",passos:["Aplique o mesmo fator.","3×2=6; 4×2=8; 5×2=10.","A forma é preservada."]},
  momento06_praticaGuiada:{enunciado:"Quadrado lado 5 ampliado por fator 3.",dica:"Multiplique por 3.",interacao:{tipo:"escolhaVisual",pergunta:"Novo lado:",opcoes:[{nome:"15"},{nome:"8"},{nome:"25"},{nome:"5"}],respostaCerta:"15",feedbackAcerto:"🎯 5×3=15.",feedbackErro:"Use o fator em cada comprimento."}},
  momento07_praticaIndependente:{enunciado:"Retângulo 10×6 reduzido pela metade.",interacao:{tipo:"escolhaVisual",pergunta:"Escolha:",opcoes:[{nome:"5×3"},{nome:"8×4"},{nome:"5×6"},{nome:"20×12"}],respostaCerta:"5×3",feedbackAcerto:"🎯 Divida ambas por 2.",feedbackErro:"A redução usa o mesmo fator."}},
  momento08_aplicacao:{contexto:"Uma moldura retangular tem cantos de 90°.",problema:"Relação entre os lados?",interacao:{tipo:"escolhaVisual",pergunta:"Escolha:",opcoes:[{nome:"Opostos paralelos; vizinhos perpendiculares"},{nome:"Todos perpendiculares"},{nome:"Opostos perpendiculares"},{nome:"Sem ângulos retos"}],respostaCerta:"Opostos paralelos; vizinhos perpendiculares",feedbackAcerto:"🎯 Relações do retângulo.",feedbackErro:"Compare lados opostos e vizinhos."}},
  momento09_revisao:{pontos:["Semelhança preserva forma.","Mesmo fator em todas as medidas.","Paralelas não se cruzam.","Perpendiculares formam 90°."]},
  momento10_avaliacao:{perguntas:[
    {pergunta:"2×7 ampliado por fator 2:",opcoes:["4×14","4×9","2×14","1×3,5"],correta:0,feedbackAcerto:"🎉",feedbackErro:"Multiplique as duas medidas."},
    {pergunta:"Retas que formam 90°:",opcoes:["Perpendiculares","Paralelas","Coincidentes","Curvas"],correta:0,feedbackAcerto:"🎉",feedbackErro:"Perpendiculares."},
    {pergunta:"Reduzir por fator 3:",opcoes:["Dividir todas por 3","Subtrair 3 de um lado","Dividir só altura","Multiplicar por 3"],correta:0,feedbackAcerto:"🎉",feedbackErro:"Mesmo fator em todas."}
  ]},
  momento11_missaoFamilia:{titulo:"Desenho semelhante",materiais:["Papel quadriculado, lápis e régua"],passos:["Desenhe uma figura.","Amplie por fator 2.","Marque paralelas e perpendiculares."],registro:"📸 Foto."},
  recompensa:{xp:185,moedas:95}
};
