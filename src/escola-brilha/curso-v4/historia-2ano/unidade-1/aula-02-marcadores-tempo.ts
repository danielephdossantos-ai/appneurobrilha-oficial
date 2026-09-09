import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-marcadores-do-tempo", titulo: "Calendários, Relógios e Rotinas", icone: "📅", bncc: ["EF02HI07"],
  tema: "marcadores do tempo na comunidade", conceito: "Calendários, relógios, agendas, horários escolares e sinais da natureza ajudam diferentes grupos a organizar dias, semanas, meses, anos e atividades.",
  explicacao: "O relógio mede horas e minutos; o calendário organiza dias, semanas, meses e anos. Horários de aula, feiras semanais, aniversários e épocas de plantio usam marcadores distintos. Nem todas as comunidades organizam o tempo exatamente do mesmo modo.",
  exemplo: "O relógio indica que a aula começa às 8 horas; o calendário mostra que a feira ocorre aos sábados e que o aniversário será no próximo mês.",
  vocabulario: ["calendário", "relógio", "marcador temporal"], etapas: ["Identificar a atividade", "Escolher o marcador", "Localizar a data ou hora", "Relacionar à rotina do grupo"],
  questoes: [
    { pergunta: "Qual instrumento indica horas e minutos?", opcoes: ["Relógio", "Mapa", "Álbum", "Bússola"], correta: 0, explicacao: "O relógio marca unidades menores do dia." },
    { pergunta: "Qual instrumento localiza uma data no mês?", opcoes: ["Calendário", "Régua", "Termômetro", "Lupa"], correta: 0, explicacao: "O calendário organiza dias, semanas, meses e anos." },
    { pergunta: "Uma feira que ocorre todo sábado usa qual ideia?", opcoes: ["Periodicidade semanal", "Um minuto", "Distância", "Temperatura"], correta: 0, explicacao: "A atividade se repete a cada semana." },
  ], missao: "Monte uma agenda de uma semana escolhendo o marcador adequado para horários, dias e acontecimentos.",
});
