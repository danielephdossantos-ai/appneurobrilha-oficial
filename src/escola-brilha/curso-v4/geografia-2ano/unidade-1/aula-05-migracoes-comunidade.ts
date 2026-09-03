import { criarAulaGeografia } from "../criar-aula-geografia";
export const aula05 = criarAulaGeografia({
  slug: "aula-05-migracoes-comunidade",
  titulo: "Histórias de Migração da Comunidade",
  icone: "🧳",
  bncc: ["EF02GE01"],
  tema: "migrações no bairro e na comunidade",
  conceito:
    "Migrar é mudar de lugar de moradia. Pessoas chegam e partem por motivos familiares, trabalho, estudo, segurança ou condições ambientais.",
  explicacao:
    "Entrevistas, fotografias e mapas ajudam a descobrir como moradores vieram de outros bairros, cidades, estados ou países e contribuíram para a comunidade.",
  exemplo:
    "Uma família pode ter mudado do campo para a cidade por trabalho e mantido receitas e festas de seu lugar de origem.",
  vocabulario: ["migração", "origem", "comunidade"],
  etapas: [
    "Perguntar a origem",
    "Registrar o motivo",
    "Localizar no mapa",
    "Reconhecer contribuições",
  ],
  missao: "Registre uma história de chegada ou partida sem expor dados pessoais.",
  questoes: [
    {
      pergunta: "O que significa migrar?",
      opcoes: [
        "Mudar de lugar de moradia",
        "Passear por uma hora",
        "Trocar de brinquedo",
        "Mudar de cadeira",
      ],
      correta: 0,
      explicacao: "Migração envolve mudança de lugar de vida.",
    },
    {
      pergunta: "Qual fonte ajuda a conhecer migrações?",
      opcoes: [
        "Entrevistas e fotografias",
        "Adivinhações",
        "Somente desenhos inventados",
        "Nenhuma fonte",
      ],
      correta: 0,
      explicacao: "Relatos e registros guardam histórias da comunidade.",
    },
    {
      pergunta: "Migrantes contribuem com o quê?",
      opcoes: [
        "Conhecimentos e práticas culturais",
        "Nada",
        "Somente trânsito",
        "A mesma história para todos",
      ],
      correta: 0,
      explicacao: "Chegadas ampliam a diversidade local.",
    },
  ],
});
