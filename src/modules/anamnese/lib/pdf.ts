// Geração de PDF do relatório da anamnese.
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { AnamneseV2Responses, PerfilScores, RiskMap } from "../v2/types";
import { PERFIL_LABEL, RISK_LABEL } from "../v2/scoring";
import { getRecommendations, needsProfessionalReferral } from "../v2/recommendations";

const RISK_HEX: Record<string, [number, number, number]> = {
  verde: [22, 163, 74],
  amarelo: [234, 179, 8],
  laranja: [234, 88, 12],
  vermelho: [220, 38, 38],
};

export function generateAnamnesePDF(args: {
  childName: string;
  responses: AnamneseV2Responses;
  scores: PerfilScores;
  risk: RiskMap;
}) {
  const { childName, responses, scores, risk } = args;
  const doc = new jsPDF();
  const pageW = doc.internal.pageSize.getWidth();
  let y = 15;

  // Capa
  doc.setFillColor(99, 102, 241);
  doc.rect(0, 0, pageW, 35, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("Relatório de Anamnese", 14, 20);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("NeuroBrilha Kids — Triagem do desenvolvimento infantil", 14, 28);

  y = 45;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text(`Criança: ${childName}`, 14, y);
  y += 7;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`Gerado em: ${new Date().toLocaleDateString("pt-BR")}`, 14, y);
  y += 10;

  // Aviso
  doc.setFillColor(254, 243, 199);
  doc.rect(14, y, pageW - 28, 18, "F");
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("AVISO IMPORTANTE", 18, y + 6);
  doc.setFont("helvetica", "normal");
  const aviso =
    "Este aplicativo NÃO realiza diagnóstico clínico. Os resultados são apenas indicativos e não substituem avaliação profissional especializada.";
  doc.text(doc.splitTextToSize(aviso, pageW - 36), 18, y + 11);
  y += 24;

  // Dados da criança
  const id = (responses.step1 ?? {}) as any;
  autoTable(doc, {
    startY: y,
    head: [["Dados da criança", ""]],
    body: [
      ["Nome", id.nome ?? "—"],
      ["Data de nascimento", id.data_nascimento ?? "—"],
      ["Idade", id.idade ? `${id.idade} anos` : "—"],
      ["Sexo", id.sexo ?? "—"],
      ["Série", id.serie ?? "—"],
      ["Responsável", id.responsavel ?? "—"],
      ["Escola", id.escola ?? "—"],
      ["Professor(a)", id.professor ?? "—"],
    ],
    theme: "grid",
    headStyles: { fillColor: [99, 102, 241] },
    styles: { fontSize: 9 },
  });
  y = (doc as any).lastAutoTable.finalY + 8;

  // Pontuações
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Perfis e níveis de indicadores", 14, y);
  y += 4;

  const rows = (Object.keys(scores) as (keyof PerfilScores)[]).map((k) => {
    const level = risk[k];
    return [PERFIL_LABEL[k], `${scores[k]}/100`, level.toUpperCase(), RISK_LABEL[level]];
  });
  autoTable(doc, {
    startY: y + 2,
    head: [["Área", "Pontuação", "Nível", "Interpretação"]],
    body: rows,
    theme: "striped",
    headStyles: { fillColor: [99, 102, 241] },
    styles: { fontSize: 9 },
    didParseCell: (data) => {
      if (data.section === "body" && data.column.index === 2) {
        const lvl = String(data.cell.raw ?? "").toLowerCase();
        const c = RISK_HEX[lvl];
        if (c) {
          data.cell.styles.fillColor = c;
          data.cell.styles.textColor = [255, 255, 255];
          data.cell.styles.fontStyle = "bold";
        }
      }
    },
  });
  y = (doc as any).lastAutoTable.finalY + 8;

  // Áreas de maior atenção
  const focus = (Object.keys(scores) as (keyof PerfilScores)[])
    .filter((k) => scores[k] >= 51)
    .sort((a, b) => scores[b] - scores[a]);

  if (focus.length > 0) {
    if (y > 240) {
      doc.addPage();
      y = 20;
    }
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Áreas de maior atenção", 14, y);
    y += 6;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    focus.forEach((k) => {
      doc.text(`• ${PERFIL_LABEL[k]} — ${scores[k]}% de indicadores`, 18, y);
      y += 5;
    });
    y += 4;
  }

  // Recomendações
  if (y > 220) {
    doc.addPage();
    y = 20;
  }
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Recomendações educacionais", 14, y);
  y += 4;
  const recs = getRecommendations(scores);
  const recBody: string[][] = [];
  recs.forEach((r) => {
    r.items.forEach((it, i) => {
      recBody.push([i === 0 ? PERFIL_LABEL[r.area] : "", it]);
    });
  });
  autoTable(doc, {
    startY: y + 2,
    head: [["Área", "Recomendação"]],
    body: recBody,
    theme: "grid",
    headStyles: { fillColor: [99, 102, 241] },
    styles: { fontSize: 9, cellPadding: 2 },
    columnStyles: { 0: { cellWidth: 35, fontStyle: "bold" } },
  });
  y = (doc as any).lastAutoTable.finalY + 8;

  // Encaminhamento profissional
  if (needsProfessionalReferral(risk)) {
    if (y > 250) {
      doc.addPage();
      y = 20;
    }
    doc.setFillColor(254, 226, 226);
    doc.rect(14, y, pageW - 28, 22, "F");
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(153, 27, 27);
    doc.text("Orientação: busca de profissionais", 18, y + 6);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const msg =
      "Os indicadores apresentados sugerem que uma avaliação profissional especializada (neuropediatra, psicólogo, psicopedagogo, fonoaudiólogo ou terapeuta ocupacional) pode beneficiar o desenvolvimento da criança.";
    doc.text(doc.splitTextToSize(msg, pageW - 36), 18, y + 12);
    doc.setTextColor(0, 0, 0);
    y += 28;
  }

  // Rodapé
  const pages = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(
      `NeuroBrilha Kids — Triagem (não diagnóstica) — pág. ${i}/${pages}`,
      pageW / 2,
      doc.internal.pageSize.getHeight() - 8,
      { align: "center" },
    );
  }

  doc.save(`anamnese-${(id.nome ?? "crianca").replace(/\s+/g, "_")}.pdf`);
}
