import { criarAulaGeografia } from "../../geografia-3ano/criar-aula-geografia";
export const aula02 = criarAulaGeografia({
  slug: "aula-02-campo-cidade",
  titulo: "Campo e Cidade Interligados",
  icone: "🚚",
  bncc: "EF04GE04",
  tema: "interdependência entre campo e cidade",
  conceito:
    "Campo e cidade têm características próprias e dependem de fluxos de pessoas, produtos, informações e serviços.",
  explicacao:
    "O campo fornece alimentos e matérias-primas; cidades concentram indústrias e serviços. Estradas e comunicação conectam os espaços.",
  exemplo: "Leite sai da fazenda, é processado na indústria e vendido no mercado.",
  vocabulario: ["campo", "cidade", "fluxo", "interdependência"],
  etapas: [
    "Identificar a origem",
    "Seguir o transporte",
    "Observar a transformação",
    "Reconhecer a troca",
  ],
  missao: "Trace o caminho de um produto entre campo e cidade.",
  questoes: [
    {
      pergunta: "O que liga campo e cidade?",
      correta: "Fluxos de pessoas, produtos e serviços",
      opcoes: [
        "Fluxos de pessoas, produtos e serviços",
        "Somente chuva",
        "Uma parede",
        "Apenas mapas",
      ],
    },
    {
      pergunta: "O campo pode fornecer o quê?",
      correta: "Alimentos e matérias-primas",
      opcoes: [
        "Alimentos e matérias-primas",
        "Só prédios",
        "Apenas hospitais",
        "Somente semáforos",
      ],
    },
    {
      pergunta: "A cidade oferece ao campo?",
      correta: "Máquinas, comércio e serviços",
      opcoes: ["Máquinas, comércio e serviços", "Nenhuma troca", "Somente areia", "Apenas rios"],
    },
  ],
});
