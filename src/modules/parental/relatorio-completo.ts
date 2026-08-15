// Relatório completo dos pais: coleta dados REAIS do banco, gera PDF e persiste em `reports`.
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { supabase } from "@/database/supabase/client";

export interface DadosRelatorio {
  crianca: {
    id: string;
    nome: string;
    idade: number | null;
    serie: string | null;
    diagnostico: string | null;
    hiperfoco: string | null;
    anamnese_completa: boolean;
  };
  periodo: { inicio: string; fim: string; dias: number };
  resumo: {
    aulasIniciadas: number;
    aulasConcluidas: number;
    tempoTotalMin: number;
    mediaNota: number;
    acertos: number;
    erros: number;
    estrelas: number;
    percentualMedio: number;
    atividadesNeuro: number;
    tempoNeuroMin: number;
    registrosFamilia: number;
  };
  aulas: Array<{
    codigo: string;
    percentual: number;
    nota: number;
    estrelas: number;
    tempoMin: number;
    acertos: number;
    erros: number;
    dominio: string;
    concluida: boolean;
    data: string;
  }>;
  dificuldades: string[];
  agenda: Array<{ topic: string; type: string; exam_date: string; completed: boolean }>;
  recomendacoes: string[];
}

const DOMINIO_LABEL: Record<string, string> = {
  nao_iniciada: "Não iniciada",
  em_aprendizagem: "Em aprendizagem",
  parcialmente_dominada: "Parcialmente dominada",
  dominada: "Dominada",
};

function fmt(d: string | null | undefined) {
  if (!d) return "—";
  try {
    return new Date(d).toLocaleDateString("pt-BR");
  } catch {
    return "—";
  }
}

/** Coleta todos os dados reais da criança para o período pedido. */
export async function coletarDadosRelatorio(
  childId: string,
  dias = 30,
): Promise<DadosRelatorio> {
  const fim = new Date();
  const inicio = new Date(fim.getTime() - dias * 24 * 60 * 60 * 1000);
  const inicioISO = inicio.toISOString();

  const [criancaRes, progressoRes, neuroRes, agendaRes, familiaRes] = await Promise.all([
    supabase.from("children").select("*").eq("id", childId).maybeSingle(),
    supabase
      .from("escola_progresso")
      .select("*")
      .eq("child_id", childId)
      .gte("ultima_visita_em", inicioISO)
      .order("ultima_visita_em", { ascending: false }),
    supabase
      .from("activity_logs")
      .select("score,duration_ms,created_at")
      .eq("child_id", childId)
      .gte("created_at", inicioISO),
    supabase
      .from("study_agenda")
      .select("topic,type,exam_date,completed")
      .eq("child_id", childId)
      .order("exam_date", { ascending: true }),
    supabase
      .from("missao_familia_registros")
      .select("id")
      .gte("criado_em", inicioISO),
  ]);

  const c: any = criancaRes.data ?? {};
  const progresso: any[] = progressoRes.data ?? [];
  const neuro: any[] = neuroRes.data ?? [];
  const agenda: any[] = agendaRes.data ?? [];

  const concluidas = progresso.filter((p) => p.concluida);
  const tempoTotalSeg = progresso.reduce((s, p) => s + (p.tempo_estudado_segundos || 0), 0);
  const notas = progresso.filter((p) => Number(p.nota) > 0).map((p) => Number(p.nota));
  const tempoNeuroMs = neuro.reduce((s, n) => s + (n.duration_ms || 0), 0);

  const dificuldades = Array.from(
    new Set(
      progresso.flatMap((p) => {
        const d = p.dificuldades;
        if (Array.isArray(d)) return d.map((x: any) => String(x?.tema ?? x));
        return [];
      }),
    ),
  ).slice(0, 15);

  const resumo = {
    aulasIniciadas: progresso.length,
    aulasConcluidas: concluidas.length,
    tempoTotalMin: Math.round(tempoTotalSeg / 60),
    mediaNota: notas.length ? Number((notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(1)) : 0,
    acertos: progresso.reduce((s, p) => s + (p.acertos || 0), 0),
    erros: progresso.reduce((s, p) => s + (p.erros || 0), 0),
    estrelas: progresso.reduce((s, p) => s + (p.estrelas || 0), 0),
    percentualMedio: progresso.length
      ? Math.round(progresso.reduce((s, p) => s + (p.percentual || 0), 0) / progresso.length)
      : 0,
    atividadesNeuro: neuro.length,
    tempoNeuroMin: Math.round(tempoNeuroMs / 60000),
    registrosFamilia: (familiaRes.data ?? []).length,
  };

  const recomendacoes: string[] = [];
  if (resumo.aulasIniciadas === 0) {
    recomendacoes.push(
      "Nenhuma atividade registrada no período. Sugerimos começar com 1 missão curta por dia (10 a 15 minutos).",
    );
  } else {
    if (resumo.percentualMedio < 60)
      recomendacoes.push(
        "Aproveitamento médio abaixo de 60%: repetir as aulas em modo revisão e reduzir o número de tarefas por sessão.",
      );
    if (resumo.erros > resumo.acertos)
      recomendacoes.push(
        "Mais erros que acertos: usar apoio visual e o Professor Digital explicando o raciocínio em cada resposta.",
      );
    if (resumo.tempoTotalMin < dias * 5)
      recomendacoes.push(
        "Tempo de estudo abaixo do ideal: criar rotina fixa no mesmo horário, usando a Agenda de Estudos.",
      );
    if (resumo.atividadesNeuro < 5)
      recomendacoes.push(
        "Poucas atividades do Neuro Treino: incluir 1 treino de atenção/regulação antes das aulas acadêmicas.",
      );
    if (dificuldades.length)
      recomendacoes.push(
        `Temas que exigem reforço: ${dificuldades.slice(0, 6).join(", ")}.`,
      );
    if (!recomendacoes.length)
      recomendacoes.push(
        "Evolução dentro do esperado. Manter a rotina atual e avançar para o próximo bloco do plano anual.",
      );
  }
  if (!c.anamnese_completa)
    recomendacoes.push(
      "Anamnese incompleta: finalizar o questionário para personalizar melhor as atividades.",
    );

  return {
    crianca: {
      id: childId,
      nome: c.nome ?? "Criança",
      idade: c.idade ?? null,
      serie: c.serie ?? null,
      diagnostico: c.diagnostico ?? null,
      hiperfoco: c.hiperfoco ?? null,
      anamnese_completa: !!c.anamnese_completa,
    },
    periodo: { inicio: inicio.toISOString(), fim: fim.toISOString(), dias },
    resumo,
    aulas: progresso.slice(0, 40).map((p) => ({
      codigo: p.codigo_bncc,
      percentual: p.percentual || 0,
      nota: Number(p.nota) || 0,
      estrelas: p.estrelas || 0,
      tempoMin: Math.round((p.tempo_estudado_segundos || 0) / 60),
      acertos: p.acertos || 0,
      erros: p.erros || 0,
      dominio: DOMINIO_LABEL[p.nivel_dominio] ?? String(p.nivel_dominio ?? "—"),
      concluida: !!p.concluida,
      data: p.ultima_visita_em,
    })),
    dificuldades,
    agenda: agenda.slice(0, 20),
    recomendacoes,
  };
}

/** Monta o PDF do relatório (pronto para enviar à escola ou ao terapeuta). */
export function gerarPDFRelatorio(dados: DadosRelatorio): jsPDF {
  const doc = new jsPDF();
  const pageW = doc.internal.pageSize.getWidth();
  let y = 15;

  doc.setFillColor(79, 70, 229);
  doc.rect(0, 0, pageW, 34, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(19);
  doc.setFont("helvetica", "bold");
  doc.text("Relatório de Acompanhamento", 14, 19);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("NeuroBrilha Kids — desenvolvimento pedagógico e neurofuncional", 14, 27);

  y = 44;
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text(`Criança: ${dados.crianca.nome}`, 14, y);
  y += 6;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(
    [
      dados.crianca.idade ? `${dados.crianca.idade} anos` : null,
      dados.crianca.serie ? `Série: ${dados.crianca.serie}` : null,
      dados.crianca.hiperfoco ? `Interesse: ${dados.crianca.hiperfoco}` : null,
    ]
      .filter(Boolean)
      .join("  •  ") || "—",
    14,
    y,
  );
  y += 5;
  doc.text(
    `Período analisado: ${fmt(dados.periodo.inicio)} a ${fmt(dados.periodo.fim)} (${dados.periodo.dias} dias)  •  Emitido em ${fmt(new Date().toISOString())}`,
    14,
    y,
  );
  y += 10;

  doc.setFillColor(254, 243, 199);
  doc.rect(14, y, pageW - 28, 16, "F");
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "bold");
  doc.text("AVISO", 18, y + 6);
  doc.setFont("helvetica", "normal");
  doc.text(
    doc.splitTextToSize(
      "Este relatório é um registro de uso educacional e não constitui diagnóstico clínico. Deve ser interpretado por profissional habilitado.",
      pageW - 40,
    ),
    18,
    y + 10.5,
  );
  y += 22;

  const r = dados.resumo;
  autoTable(doc, {
    startY: y,
    head: [["Indicador", "Resultado"]],
    body: [
      ["Aulas acessadas", String(r.aulasIniciadas)],
      ["Aulas concluídas", String(r.aulasConcluidas)],
      ["Aproveitamento médio", `${r.percentualMedio}%`],
      ["Nota média", String(r.mediaNota)],
      ["Acertos / Erros", `${r.acertos} / ${r.erros}`],
      ["Estrelas conquistadas", String(r.estrelas)],
      ["Tempo de estudo (Escola Brilha)", `${r.tempoTotalMin} min`],
      ["Atividades do Neuro Treino", `${r.atividadesNeuro} (${r.tempoNeuroMin} min)`],
      ["Registros da Missão em Família", String(r.registrosFamilia)],
    ],
    theme: "grid",
    headStyles: { fillColor: [79, 70, 229] },
    styles: { fontSize: 9 },
  });
  y = (doc as any).lastAutoTable.finalY + 10;

  if (dados.aulas.length) {
    autoTable(doc, {
      startY: y,
      head: [["Habilidade", "Data", "%", "Nota", "Acertos", "Erros", "Min", "Domínio"]],
      body: dados.aulas.map((a) => [
        a.codigo,
        fmt(a.data),
        `${a.percentual}%`,
        String(a.nota),
        String(a.acertos),
        String(a.erros),
        String(a.tempoMin),
        a.dominio,
      ]),
      theme: "striped",
      headStyles: { fillColor: [16, 185, 129] },
      styles: { fontSize: 8 },
    });
    y = (doc as any).lastAutoTable.finalY + 10;
  }

  if (dados.agenda.length) {
    autoTable(doc, {
      startY: y,
      head: [["Agenda de estudos", "Tipo", "Data", "Status"]],
      body: dados.agenda.map((a) => [
        a.topic,
        a.type,
        fmt(a.exam_date),
        a.completed ? "Concluído" : "Pendente",
      ]),
      theme: "grid",
      headStyles: { fillColor: [217, 119, 6] },
      styles: { fontSize: 8.5 },
    });
    y = (doc as any).lastAutoTable.finalY + 10;
  }

  autoTable(doc, {
    startY: y,
    head: [["Orientações da equipe pedagógica"]],
    body: dados.recomendacoes.map((t) => [t]),
    theme: "plain",
    headStyles: { fillColor: [99, 102, 241], textColor: 255 },
    styles: { fontSize: 9, cellPadding: 3 },
  });

  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(
      `NeuroBrilha Kids • ${dados.crianca.nome} • página ${i} de ${total}`,
      14,
      doc.internal.pageSize.getHeight() - 8,
    );
  }

  return doc;
}

export function nomeArquivoRelatorio(dados: DadosRelatorio) {
  const nome = dados.crianca.nome.normalize("NFD").replace(/[^\w]/g, "-");
  return `relatorio-${nome}-${new Date().toISOString().slice(0, 10)}.pdf`;
}

export interface RelatorioSalvo {
  id: string;
  child_id: string;
  type: string;
  title: string | null;
  summary: string | null;
  period_start: string | null;
  period_end: string | null;
  generated_at: string;
  data: DadosRelatorio;
}

/** Persiste o relatório no banco para a mãe baixar quando quiser. */
export async function salvarRelatorio(dados: DadosRelatorio): Promise<RelatorioSalvo> {
  const { data: auth } = await supabase.auth.getUser();
  const r = dados.resumo;
  const payload = {
    child_id: dados.crianca.id,
    type: "complete",
    title: `Relatório de ${dados.crianca.nome} — ${dados.periodo.dias} dias`,
    summary: `${r.aulasConcluidas} aulas concluídas, ${r.percentualMedio}% de aproveitamento e ${r.tempoTotalMin} min de estudo.`,
    period_start: dados.periodo.inicio.slice(0, 10),
    period_end: dados.periodo.fim.slice(0, 10),
    data: dados as any,
    created_by: auth?.user?.id ?? null,
  };
  const { data, error } = await supabase.from("reports").insert(payload).select().single();
  if (error) throw error;
  return data as unknown as RelatorioSalvo;
}

export async function listarRelatorios(childId: string): Promise<RelatorioSalvo[]> {
  const { data, error } = await supabase
    .from("reports")
    .select("*")
    .eq("child_id", childId)
    .order("generated_at", { ascending: false })
    .limit(30);
  if (error) throw error;
  return (data ?? []) as unknown as RelatorioSalvo[];
}

export async function apagarRelatorio(id: string) {
  const { error } = await supabase.from("reports").delete().eq("id", id);
  if (error) throw error;
}
