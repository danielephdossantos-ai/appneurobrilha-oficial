import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-espacos-publicos-privados", titulo: "Espaços Públicos, Privados e Protegidos", icone: "🗺️", bncc: ["EF03HI09", "EF03HI10"],
  tema: "espaços da cidade e suas funções", conceito: "Ruas, praças, escolas e hospitais públicos têm funções coletivas; casas e estabelecimentos privados têm acesso definido; áreas de conservação possuem regras próprias de proteção.",
  explicacao: "Público não significa sem regras, e privado não significa sem responsabilidade. Mapas ajudam a localizar espaços e analisar acesso, função, cuidado e barreiras. Áreas protegidas conciliam visitação permitida e conservação.",
  exemplo: "Uma praça é pública e pode ter horários e regras; uma residência é privada; um parque ambiental pode limitar atividades para proteger espécies e água.",
  vocabulario: ["espaço público", "espaço privado", "área de conservação"], etapas: ["Localizar no mapa", "Identificar a função", "Classificar o acesso", "Reconhecer regras e cuidados"],
  questoes: [
    { pergunta: "Qual é um espaço público?", opcoes: ["Praça municipal", "Quarto de uma casa", "Área interna de residência", "Objeto pessoal"], correta: 0, explicacao: "A praça atende à convivência coletiva e possui regras de uso." },
    { pergunta: "Por que uma área de conservação tem regras especiais?", opcoes: ["Para proteger natureza e patrimônio", "Para virar residência", "Para impedir toda pesquisa", "Para retirar toda vegetação"], correta: 0, explicacao: "As regras reduzem impactos e conservam bens comuns." },
    { pergunta: "O que um mapa permite analisar?", opcoes: ["Localização e função dos espaços", "Somente nomes de pessoas", "Apenas temperatura", "Nenhuma relação espacial"], correta: 0, explicacao: "Mapear ajuda a compreender distribuição e acesso." },
  ], missao: "Mapeie espaços públicos, privados e protegidos do município, explicando função, acesso e regras de cada um.",
});
