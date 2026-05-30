
import { InfiniteActivityEngine } from "./src/engines/infinite-activity-engine";
import { BNCC_DATA } from "./src/engines/infinite-activity-engine/bncc-engine";
import { SCENARIOS, OBJECTS } from "./src/engines/infinite-activity-engine/assets";
import { TEMPLATES } from "./src/engines/infinite-activity-engine/template-engine";

async function runPedagogicalLoadTest(iterations = 10000) {
  const stats = {
    total: 0,
    grades: {},
    profiles: {},
    templates: {},
    scenarios: {},
    bncc: {},
    objects: {},
    difficulties: { easy: 0, medium: 0, hard: 0, expert: 0 }
  };

  const profiles = ["TEA", "TDAH", "Dislexia", "Tipico", "DeficienciaIntelectual"];
  const grades = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(`Starting pedagogical load test: ${iterations} activities...`);

  for (let i = 0; i < iterations; i++) {
    const grade = grades[Math.floor(Math.random() * grades.length)];
    const profile = profiles[Math.floor(Math.random() * profiles.length)];
    
    try {
      const activity = InfiniteActivityEngine.generate({
        childId: `test_user_${i}`,
        age: grade + 6,
        grade: grade,
        neuroProfile: profile,
        previousPerformance: Math.random(),
        adjustments: {
           visualComplexity: "medium",
           stimuliReduction: false,
           interfaceSimplification: false,
           difficultyScale: 1.0,
           positiveReinforcementFrequency: 0.5,
           suggestBreak: false,
           audioAdaptation: { volume: 0.8, pacing: "normal" },
           animationIntensity: "standard",
           maxInformationDensity: 5
        }
      });

      stats.total++;
      stats.grades[grade] = (stats.grades[grade] || 0) + 1;
      stats.profiles[profile] = (stats.profiles[profile] || 0) + 1;
      stats.templates[activity.templateId] = (stats.templates[activity.templateId] || 0) + 1;
      stats.bncc[activity.bnccCode] = (stats.bncc[activity.bnccCode] || 0) + 1;
      stats.difficulties[activity.difficulty]++;
      
      if (activity.content?.scenario) {
        stats.scenarios[activity.content.scenario] = (stats.scenarios[activity.content.scenario] || 0) + 1;
      }

      if (activity.content?.targetId) {
         stats.objects[activity.content.targetId] = (stats.objects[activity.content.targetId] || 0) + 1;
      }
      
    } catch (e) {
      // console.error("Error generating activity:", e.message);
    }
  }

  // Calculate variety metrics
  const uniqueBNCC = Object.keys(stats.bncc).length;
  const totalBNCC = BNCC_DATA.length;
  const bnccCoverage = (uniqueBNCC / totalBNCC) * 100;

  console.log("\n--- PEDAGOGICAL LOAD TEST REPORT ---");
  console.log(`Total Generated: ${stats.total}`);
  console.log(`BNCC Coverage: ${bnccCoverage.toFixed(2)}% (${uniqueBNCC}/${totalBNCC})`);
  
  console.log("\nTop Templates Usage:");
  Object.entries(stats.templates)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .forEach(([id, count]) => console.log(`- ${id}: ${((count/stats.total)*100).toFixed(1)}%`));

  console.log("\nScenario Distribution (Variety):");
  const scenarioVariety = Object.keys(stats.scenarios).length;
  console.log(`- Unique Scenarios Used: ${scenarioVariety} / ${SCENARIOS.length}`);

  console.log("\nObject Distribution (Variety):");
  const objectVariety = Object.keys(stats.objects).length;
  console.log(`- Unique Objects Used: ${objectVariety} / ${OBJECTS.length}`);

  console.log("\nDifficulty Distribution:");
  Object.entries(stats.difficulties).forEach(([diff, count]) => {
     console.log(`- ${diff}: ${((count/stats.total)*100).toFixed(1)}%`);
  });

  return stats;
}

runPedagogicalLoadTest(10000);
