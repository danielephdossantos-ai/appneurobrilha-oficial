
import { TEMPLATES } from "./src/engines/infinite-activity-engine/template-engine";
import { BNCC_DATA } from "./src/engines/infinite-activity-engine/bncc-engine";

function checkTemplateGaps() {
  const missing = [];
  BNCC_DATA.forEach(skill => {
    const hasTemplate = TEMPLATES.some(t => t.bnccCodes.includes(skill.code));
    if (!hasTemplate) {
      missing.push(`${skill.code} (${skill.field} - Level ${skill.level})`);
    }
  });

  console.log("\n--- BNCC TEMPLATE GAP ANALYSIS ---");
  console.log(`Total BNCC Skills: ${BNCC_DATA.length}`);
  console.log(`Skills with Templates: ${BNCC_DATA.length - missing.length}`);
  console.log(`Skills WITHOUT Templates: ${missing.length}`);
  
  if (missing.length > 0) {
    console.log("\nMissing Templates for:");
    missing.forEach(m => console.log(`- ${m}`));
  }
}

checkTemplateGaps();
