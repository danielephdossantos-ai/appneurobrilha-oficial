
import { BNCC_SKILLS } from "./src/engines/pedagogical-engine/bncc";
import { TEMPLATES } from "./src/engines/infinite-activity-engine/template-engine";

function generateBNCCMatrix() {
  const years = ["Educação Infantil", "1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano", "6º Ano", "7º Ano", "8º Ano", "9º Ano"];
  const components = ["matematica", "lingua-portuguesa", "ciencias", "geografia", "historia", "artes"];

  const report = {};

  components.forEach(comp => {
    report[comp] = {};
    years.forEach((year, idx) => {
      const level = idx;
      const skillsInYear = BNCC_SKILLS.filter(s => s.field === comp && s.level === level);
      
      const implemented = [];
      const partial = [];
      const missing = [];

      skillsInYear.forEach(skill => {
        const templates = TEMPLATES.filter(t => t.bnccCodes.includes(skill.code));
        if (templates.length >= 2) {
            implemented.push(skill.code);
        } else if (templates.length === 1) {
            partial.push(skill.code);
        } else {
            missing.push(skill.code);
        }
      });

      report[comp][year] = {
        total: skillsInYear.length,
        implemented,
        partial,
        missing,
        percentage: skillsInYear.length > 0 ? ((implemented.length + partial.length * 0.5) / skillsInYear.length) * 100 : 0
      };
    });
  });

  console.log("\n=== MATRIZ CURRICULAR BNCC - AUDITORIA DETALHADA ===\n");

  components.forEach(comp => {
    console.log(`\n>> COMPONENTE: ${comp.toUpperCase()}`);
    console.log("--------------------------------------------------");
    years.forEach(year => {
      const data = report[comp][year];
      if (data.total > 0 || year === "1º Ano" || year === "Educação Infantil") {
          const status = data.percentage >= 80 ? "✅ ALTA" : data.percentage >= 40 ? "⚠️ MÉDIA" : "❌ BAIXA";
          console.log(`${year.padEnd(18)} | Cobertura: ${data.percentage.toFixed(1)}% | Status: ${status}`);
          if (data.implemented.length > 0) console.log(`   - Totalmente: ${data.implemented.join(", ")}`);
          if (data.partial.length > 0) console.log(`   - Parcial: ${data.partial.join(", ")}`);
          if (data.missing.length > 0) console.log(`   - Faltantes: ${data.missing.join(", ")}`);
      }
    });
  });

  // Resumo Global
  const totalSkills = BNCC_SKILLS.length;
  const totalImplemented = BNCC_SKILLS.filter(s => TEMPLATES.some(t => t.bnccCodes.includes(s.code))).length;
  
  console.log("\n\n=== RESUMO DE COBERTURA REAL ===");
  console.log(`Habilidades Mapeadas: ${totalSkills}`);
  console.log(`Habilidades com Motor: ${totalImplemented}`);
  console.log(`Cobertura Real de Entrega: ${((totalImplemented / totalSkills) * 100).toFixed(1)}%`);
}

generateBNCCMatrix();
