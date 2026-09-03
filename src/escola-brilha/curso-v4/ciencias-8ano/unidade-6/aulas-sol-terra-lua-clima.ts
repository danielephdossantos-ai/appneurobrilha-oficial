import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-lua-e-estacoes", titulo: "Fases, Eclipses e Estações", icone: "🌙", bncc: ["EF08CI12", "EF08CI13"],
  tema: "sistema Sol, Terra e Lua", conceito: "Fases da Lua resultam da porção iluminada que vemos; eclipses exigem alinhamentos; estações resultam da translação combinada à inclinação do eixo terrestre.",
  explicacao: "Modelos com três esferas mostram posições relativas. Eclipse solar ocorre quando a Lua fica entre Terra e Sol; eclipse lunar, quando a Terra fica entre Sol e Lua. As estações não são causadas pela distância ao Sol.",
  exemplo: "Quando um hemisfério recebe luz mais direta e dias mais longos, vive o verão, enquanto o outro recebe luz mais inclinada.",
  vocabulario: ["fase lunar", "eclipse", "inclinação do eixo"], etapas: ["Posicionar o Sol", "Mover Terra e Lua", "Observar parte iluminada", "Representar inclinação e órbita"],
  questoes: [
    { pergunta: "O que causa as fases da Lua?", opcoes: ["Posições relativas e iluminação solar", "Sombra da Terra em todas as fases", "Nuvens", "Mudança de tamanho da Lua"], correta: 0, explicacao: "Vemos diferentes partes da metade lunar iluminada." },
    { pergunta: "Num eclipse lunar, quem fica entre Sol e Lua?", opcoes: ["Terra", "Marte", "Vênus", "Nenhum corpo"], correta: 0, explicacao: "A sombra da Terra alcança a Lua." },
    { pergunta: "O que causa as estações?", opcoes: ["Inclinação do eixo e translação", "Distância mensal à Lua", "Nuvens", "Rotação da Lua"], correta: 0, explicacao: "A inclinação altera a incidência solar ao longo da órbita." },
  ], missao: "Construa modelos para explicar fases, eclipses e estações sem confundir seus mecanismos.",
});

export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-circulacao-e-climas-regionais", titulo: "Circulação e Climas Regionais", icone: "🌦️", bncc: ["EF08CI14"],
  tema: "climas regionais", conceito: "Aquecimento desigual, circulação atmosférica, correntes oceânicas, latitude, altitude e relevo ajudam a explicar diferenças climáticas regionais.",
  explicacao: "Ar aquecido tende a subir e gerar circulação; oceanos armazenam e transportam calor; montanhas alteram ventos e chuvas. Forma e movimentos da Terra distribuem energia solar de modo desigual.",
  exemplo: "Regiões costeiras sofrem influência do oceano, enquanto altitude elevada costuma reduzir temperaturas mesmo em latitudes semelhantes.",
  vocabulario: ["circulação atmosférica", "corrente oceânica", "clima regional"], etapas: ["Comparar latitude", "Analisar ventos", "Observar correntes oceânicas", "Relacionar relevo e altitude"],
  questoes: [
    { pergunta: "Por que a Terra aquece de modo desigual?", opcoes: ["A luz chega com ângulos diferentes", "O Sol muda de tamanho", "As nuvens criam continentes", "A Lua aquece os polos"], correta: 0, explicacao: "A forma da Terra altera o ângulo de incidência solar." },
    { pergunta: "O que correntes oceânicas transportam?", opcoes: ["Calor", "Somente areia", "Montanhas", "Luz das estrelas"], correta: 0, explicacao: "Correntes redistribuem energia térmica pelos oceanos." },
    { pergunta: "Qual fator costuma reduzir temperatura?", opcoes: ["Maior altitude", "Menor sombra no caderno", "Cor da cidade", "Número de ruas"], correta: 0, explicacao: "Em geral, a temperatura do ar diminui com a altitude." },
  ], missao: "Compare dois climas regionais usando latitude, altitude, relevo, ventos e correntes oceânicas.",
});
