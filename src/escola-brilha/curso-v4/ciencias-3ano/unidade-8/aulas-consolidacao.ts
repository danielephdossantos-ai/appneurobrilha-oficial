import { criarAulaConsolidacao } from "../criar-aula-consolidacao";

export const aula08 = criarAulaConsolidacao({
  slug: "aula-08-animais-e-ambientes", titulo: "Animais e seus Ambientes", icone: "🐾", bncc: ["EF03CI04"],
  tema: "modos de vida dos animais", conceito: "relações entre alimentação, locomoção, reprodução e ambiente",
  explicacao: "Animais vivem de modos diferentes. O lugar onde vivem oferece alimento, água, abrigo e condições para locomoção e reprodução. Não basta olhar o corpo: é preciso observar comportamento e ambiente.",
  exemplo: "Peixes nadam e retiram oxigênio dissolvido na água; aves usam diferentes locais para alimentar-se e construir ninhos.",
  vocabulario: ["habitat", "locomoção", "alimentação"], etapas: ["Observar o animal", "Identificar o ambiente", "Relacionar necessidades", "Comparar modos de vida"],
  questoes: [
    { pergunta: "O que o habitat oferece ao animal?", opcoes: ["Condições para viver", "Somente cor", "Somente brinquedos", "Nenhum recurso"], correta: 0, explicacao: "Habitat oferece condições e recursos necessários à vida." },
    { pergunta: "Qual relação está correta?", opcoes: ["Peixe — deslocamento na água", "Peixe — voo no céu", "Ave — respiração submersa permanente", "Minhoca — vida no fogo"], correta: 0, explicacao: "A forma de locomoção relaciona-se ao corpo e ao ambiente." },
    { pergunta: "Para comparar modos de vida, observamos:", opcoes: ["Alimentação, locomoção e reprodução", "Só o tamanho", "Só a cor", "Só o nome"], correta: 0, explicacao: "O modo de vida reúne várias características e relações com o ambiente." },
  ], missao: "Compare dois animais quanto ao ambiente, alimentação, locomoção e reprodução.",
});

export const aula09 = criarAulaConsolidacao({
  slug: "aula-09-terra-e-ceu", titulo: "A Terra e o Céu", icone: "🌍", bncc: ["EF03CI07", "EF03CI08"],
  tema: "características da Terra e observação do céu", conceito: "superfície terrestre, água, solo e astros observáveis",
  explicacao: "A superfície da Terra possui continentes, ilhas, oceanos, rios, lagos, diferentes solos e formas de relevo. Do lugar onde estamos, podemos observar Sol, Lua, estrelas e outros astros em horários e condições diferentes.",
  exemplo: "Em uma paisagem há solo, morro, rio e vegetação; no céu diurno vemos o Sol e às vezes a Lua, enquanto muitas estrelas ficam mais visíveis à noite.",
  vocabulario: ["superfície", "astro", "paisagem"], etapas: ["Observar a paisagem", "Separar terra e água", "Registrar o céu", "Comparar horários"],
  questoes: [
    { pergunta: "O que encontramos na superfície terrestre?", opcoes: ["Solo, água e formas de relevo", "Somente oceanos", "Somente cidades", "Nenhuma paisagem"], correta: 0, explicacao: "A superfície terrestre apresenta água, solo e diferentes formas de relevo." },
    { pergunta: "Qual astro pode ser visto de dia e também em algumas noites?", opcoes: ["Lua", "Somente estrelas distantes", "Nenhum astro", "Arco-íris"], correta: 0, explicacao: "A Lua pode ser observada em diferentes horários, conforme sua posição." },
    { pergunta: "Por que as estrelas ficam mais visíveis à noite?", opcoes: ["O céu fica menos iluminado pelo Sol", "Elas aparecem só no inverno", "Elas nascem no solo", "A Lua acende as estrelas"], correta: 0, explicacao: "Com menor iluminação do céu, o brilho das estrelas é percebido com mais facilidade." },
  ], missao: "Registre uma paisagem e compare o que é observado no céu em dois horários, sempre com segurança e sem olhar diretamente para o Sol.",
});

export const aula10 = criarAulaConsolidacao({
  slug: "aula-10-usos-e-cuidado-do-solo", titulo: "Usos e Cuidado do Solo", icone: "🌱", bncc: ["EF03CI10"],
  tema: "usos do solo", conceito: "agricultura, construção, conservação e impactos",
  explicacao: "O solo é usado para cultivar alimentos, construir moradias e vias, sustentar vegetação e abrigar organismos. Uso inadequado pode causar compactação, contaminação e erosão; cobertura vegetal e manejo responsável ajudam a conservá-lo.",
  exemplo: "Uma encosta com vegetação retém melhor o solo; sem cobertura, a chuva pode carregar partículas e formar erosão.",
  vocabulario: ["agricultura", "erosão", "conservação"], etapas: ["Identificar o uso", "Observar impactos", "Comparar condições", "Propor cuidado"],
  questoes: [
    { pergunta: "Qual é um uso do solo?", opcoes: ["Cultivar alimentos", "Produzir luz solar", "Criar estrelas", "Parar o vento"], correta: 0, explicacao: "A agricultura utiliza o solo para cultivar alimentos." },
    { pergunta: "O que ajuda a reduzir a erosão?", opcoes: ["Manter cobertura vegetal", "Retirar todas as plantas", "Jogar resíduos", "Deixar o solo sempre exposto"], correta: 0, explicacao: "Raízes e cobertura vegetal ajudam a proteger e prender o solo." },
    { pergunta: "Qual atitude conserva o solo?", opcoes: ["Evitar contaminação e planejar o uso", "Descartar óleo na terra", "Queimar toda vegetação", "Compactar sem necessidade"], correta: 0, explicacao: "Conservar exige evitar poluição e usar o solo de forma planejada." },
  ], missao: "Identifique dois usos do solo perto de você e proponha uma atitude de conservação.",
});
