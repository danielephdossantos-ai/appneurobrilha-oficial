// Per-page illustrated SVG scenes — 6 unique scenes per theme
// Cute rounded characters, warm child-friendly palette, no emojis, no scary shapes

// ─── SHARED HELPERS ──────────────────────────────────────────────────────────

function sky(id: string, top: string, bot: string) {
  return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${top}"/><stop offset="100%" stop-color="${bot}"/></linearGradient></defs><rect width="400" height="300" fill="url(#${id})"/>`;
}

function sun(cx: number, cy: number, r = 28, color = "#FFD93D") {
  return `<circle cx="${cx}" cy="${cy}" r="${r + 18}" fill="${color}" opacity="0.18"/>
<circle cx="${cx}" cy="${cy}" r="${r + 8}" fill="${color}" opacity="0.25"/>
<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}"/>`;
}

function cloud(cx: number, cy: number, scale = 1) {
  const s = scale;
  return `<ellipse cx="${cx}" cy="${cy}" rx="${52 * s}" ry="${20 * s}" fill="white" opacity="0.92"/>
<ellipse cx="${cx - 12 * s}" cy="${cy - 10 * s}" rx="${32 * s}" ry="${16 * s}" fill="white" opacity="0.95"/>
<ellipse cx="${cx + 16 * s}" cy="${cy - 9 * s}" rx="${28 * s}" ry="${15 * s}" fill="white" opacity="0.95"/>`;
}

function ground(id: string, top: string, bot: string, y = 230) {
  return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${top}"/><stop offset="100%" stop-color="${bot}"/></linearGradient></defs>
<rect x="0" y="${y}" width="400" height="${300 - y}" fill="url(#${id})"/>
<ellipse cx="200" cy="${y}" rx="220" ry="16" fill="${top}" opacity="0.8"/>`;
}

function roundTree(x: number, y: number, h = 80, trunk = "#8B6040", leaf = "#5DB83A", leaf2 = "#72D152") {
  return `<rect x="${x - 6}" y="${y - h + 20}" width="12" height="${h}" fill="${trunk}" rx="6"/>
<circle cx="${x}" cy="${y - h + 10}" r="${h * 0.45}" fill="${leaf}"/>
<circle cx="${x}" cy="${y - h}" r="${h * 0.38}" fill="${leaf2}"/>`;
}

function flower(x: number, y: number, color = "#FF6BA8", size = 6) {
  return `<circle cx="${x}" cy="${y}" r="${size}" fill="${color}"/>
<circle cx="${x}" cy="${y}" r="${size * 0.45}" fill="#FFE566"/>`;
}

// ─── CUTE DINO CHARACTER ─────────────────────────────────────────────────────
// pose: "stand" | "walk" | "peek" | "sit" | "jump" | "wave"
function dino(cx: number, cy: number, facing: "left" | "right" = "right", pose = "stand", color = "#69C44D", belly = "#C5E8A0") {
  const flip = facing === "left" ? `transform="scale(-1,1) translate(-${cx * 2},0)"` : "";
  const eyeX = cx + 14;
  const eyeY = cy - 38;

  let tail = `<path d="M${cx - 28},${cy - 5} Q${cx - 48},${cy - 18} ${cx - 52},${cy - 35} Q${cx - 50},${cy - 50} ${cx - 38},${cy - 40}" stroke="${color}" stroke-width="12" fill="none" stroke-linecap="round"/>`;
  let bodyY = cy;
  let legOffset = 0;

  if (pose === "walk") {
    tail = `<path d="M${cx - 28},${cy - 5} Q${cx - 50},${cy - 5} ${cx - 58},${cy + 8}" stroke="${color}" stroke-width="12" fill="none" stroke-linecap="round"/>`;
    legOffset = 0;
  }
  if (pose === "sit") {
    bodyY = cy + 8;
    tail = `<path d="M${cx - 28},${cy + 5} Q${cx - 55},${cy + 10} ${cx - 60},${cy + 30}" stroke="${color}" stroke-width="12" fill="none" stroke-linecap="round"/>`;
  }
  if (pose === "jump") {
    bodyY = cy - 18;
    tail = `<path d="M${cx - 28},${cy - 22} Q${cx - 52},${cy - 35} ${cx - 55},${cy - 55}" stroke="${color}" stroke-width="12" fill="none" stroke-linecap="round"/>`;
    legOffset = -14;
  }

  return `<g ${flip}>
${tail}
<!-- Body -->
<ellipse cx="${cx}" cy="${bodyY - 8}" rx="28" ry="22" fill="${color}"/>
<!-- Belly -->
<ellipse cx="${cx + 4}" cy="${bodyY - 4}" rx="18" ry="14" fill="${belly}"/>
<!-- Neck -->
<ellipse cx="${cx + 12}" cy="${bodyY - 28}" rx="12" ry="16" fill="${color}"/>
<!-- Head -->
<ellipse cx="${cx + 20}" cy="${bodyY - 46}" rx="22" ry="19" fill="${color}"/>
<!-- Snout -->
<ellipse cx="${cx + 36}" cy="${bodyY - 40}" rx="11" ry="7" fill="#88D968"/>
<!-- Nostril -->
<circle cx="${cx + 40}" cy="${bodyY - 42}" r="2" fill="#3A8A2A" opacity="0.6"/>
<!-- Smiling mouth -->
<path d="M${cx + 28},${bodyY - 35} Q${cx + 36},${bodyY - 29} ${cx + 44},${bodyY - 33}" stroke="#3A8A2A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<!-- Eye white -->
<circle cx="${cx + 22}" cy="${bodyY - 52}" r="9" fill="white"/>
<!-- Iris -->
<circle cx="${cx + 23}" cy="${bodyY - 52}" r="6" fill="#1565C0"/>
<!-- Sparkle -->
<circle cx="${cx + 25}" cy="${bodyY - 54}" r="2.5" fill="white"/>
<!-- Eyelid / charm -->
<path d="M${cx + 14},${bodyY - 58} Q${cx + 22},${bodyY - 62} ${cx + 30},${bodyY - 58}" stroke="#3A8A2A" stroke-width="2" fill="none" stroke-linecap="round"/>
<!-- Back spikes -->
<ellipse cx="${cx + 6}" cy="${bodyY - 28}" rx="4" ry="7" fill="#4CAF50" transform="rotate(-30,${cx + 6},${bodyY - 28})"/>
<ellipse cx="${cx - 2}" cy="${bodyY - 22}" rx="3.5" ry="6" fill="#4CAF50" transform="rotate(-40,${cx - 2},${bodyY - 22})"/>
<ellipse cx="${cx - 10}" cy="${bodyY - 16}" rx="3" ry="5" fill="#4CAF50" transform="rotate(-45,${cx - 10},${bodyY - 16})"/>
<!-- Arm -->
<path d="M${cx + 6},${bodyY - 4} Q${cx + 22},${bodyY + 5} ${cx + 28},${bodyY - 2}" stroke="${color}" stroke-width="8" stroke-linecap="round" fill="none"/>
<!-- Legs -->
<ellipse cx="${cx - 10}" cy="${bodyY + 14 + legOffset}" rx="10" ry="8" fill="${color}"/>
<ellipse cx="${cx + 12}" cy="${bodyY + 16 + legOffset}" rx="10" ry="8" fill="${color}"/>
</g>`;
}

// ─── CUTE FOX CHARACTER ──────────────────────────────────────────────────────
function fox(cx: number, cy: number, facing: "left" | "right" = "right") {
  const flip = facing === "left" ? `transform="scale(-1,1) translate(-${cx * 2},0)"` : "";
  return `<g ${flip}>
<!-- Fluffy tail -->
<path d="M${cx - 30},${cy - 5} Q${cx - 55},${cy - 30} ${cx - 50},${cy - 55}" stroke="#E8720C" stroke-width="16" fill="none" stroke-linecap="round"/>
<path d="M${cx - 30},${cy - 5} Q${cx - 55},${cy - 30} ${cx - 50},${cy - 55}" stroke="#FFEECC" stroke-width="8" fill="none" stroke-linecap="round"/>
<circle cx="${cx - 50}" cy="${cy - 55}" r="9" fill="white"/>
<!-- Body -->
<ellipse cx="${cx}" cy="${cy - 10}" rx="26" ry="20" fill="#E8720C"/>
<!-- Belly -->
<ellipse cx="${cx + 3}" cy="${cy - 6}" rx="16" ry="13" fill="#FFEECC"/>
<!-- Neck+head -->
<ellipse cx="${cx + 10}" cy="${cy - 30}" rx="11" ry="14" fill="#E8720C"/>
<ellipse cx="${cx + 18}" cy="${cy - 47}" rx="20" ry="18" fill="#E8720C"/>
<!-- Ears -->
<polygon points="${cx + 5},${cy - 62} ${cx + 2},${cy - 78} ${cx + 16},${cy - 66}" fill="#E8720C"/>
<polygon points="${cx + 7},${cy - 63} ${cx + 5},${cy - 74} ${cx + 15},${cy - 67}" fill="#FF8C42"/>
<polygon points="${cx + 28},${cy - 64} ${cx + 32},${cy - 78} ${cx + 38},${cy - 62}" fill="#E8720C"/>
<polygon points="${cx + 29},${cy - 64} ${cx + 33},${cy - 74} ${cx + 36},${cy - 63}" fill="#FF8C42"/>
<!-- Face -->
<ellipse cx="${cx + 28}" cy="${cy - 42}" rx="9" ry="6" fill="#FFEECC"/>
<!-- Eye -->
<circle cx="${cx + 20}" cy="${cy - 52}" r="8" fill="white"/>
<circle cx="${cx + 21}" cy="${cy - 52}" r="5" fill="#2E3440"/>
<circle cx="${cx + 23}" cy="${cy - 54}" r="2" fill="white"/>
<!-- Nose -->
<ellipse cx="${cx + 32}" cy="${cy - 45}" r="3" fill="#2E3440"/>
<!-- Smile -->
<path d="M${cx + 26},${cy - 40} Q${cx + 32},${cy - 35} ${cx + 38},${cy - 38}" stroke="#C74E00" stroke-width="2" fill="none" stroke-linecap="round"/>
<!-- Legs -->
<ellipse cx="${cx - 10}" cy="${cy + 10}" rx="9" ry="7" fill="#E8720C"/>
<ellipse cx="${cx + 10}" cy="${cy + 11}" rx="9" ry="7" fill="#E8720C"/>
</g>`;
}

// ─── CUTE ASTRONAUT ──────────────────────────────────────────────────────────
function astronaut(cx: number, cy: number) {
  return `<g>
<!-- Body suit -->
<ellipse cx="${cx}" cy="${cy - 5}" rx="24" ry="28" fill="#ECEFF1"/>
<!-- Chest detail -->
<rect x="${cx - 12}" y="${cy - 18}" width="24" height="14" fill="#CFD8DC" rx="4"/>
<circle cx="${cx}" cy="${cy - 12}" r="5" fill="#80D8FF"/>
<!-- Helmet -->
<circle cx="${cx}" cy="${cy - 40}" r="24" fill="#ECEFF1"/>
<circle cx="${cx + 2}" cy="${cy - 40}" r="18" fill="#80D8FF" opacity="0.7"/>
<circle cx="${cx + 2}" cy="${cy - 40}" r="18" fill="url(#helmetglass)" opacity="0.5"/>
<!-- Face inside helmet -->
<circle cx="${cx + 2}" cy="${cy - 41}" r="7" fill="#FFCC80"/>
<circle cx="${cx - 1}" cy="${cy - 44}" r="3" fill="#2E3440"/>
<circle cx="${cx + 5}" cy="${cy - 44}" r="3" fill="#2E3440"/>
<circle cx="${cx}" cy="${cy - 44}" r="1.2" fill="white"/>
<circle cx="${cx + 6}" cy="${cy - 44}" r="1.2" fill="white"/>
<path d="M${cx - 2},${cy - 38} Q${cx + 2},${cy - 34} ${cx + 6},${cy - 38}" stroke="#C74E00" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<!-- Arms -->
<path d="M${cx - 24},${cy - 10} Q${cx - 38},${cy - 5} ${cx - 40},${cy + 10}" stroke="#ECEFF1" stroke-width="14" stroke-linecap="round" fill="none"/>
<circle cx="${cx - 40}" cy="${cy + 12}" r="10" fill="#B0BEC5"/>
<path d="M${cx + 24},${cy - 10} Q${cx + 38},${cy - 5} ${cx + 40},${cy + 10}" stroke="#ECEFF1" stroke-width="14" stroke-linecap="round" fill="none"/>
<circle cx="${cx + 40}" cy="${cy + 12}" r="10" fill="#B0BEC5"/>
<!-- Legs/boots -->
<rect x="${cx - 18}" y="${cy + 22}" width="14" height="20" fill="#CFD8DC" rx="7"/>
<rect x="${cx + 4}" y="${cy + 22}" width="14" height="20" fill="#CFD8DC" rx="7"/>
<ellipse cx="${cx - 11}" cy="${cy + 42}" rx="11" ry="6" fill="#B0BEC5"/>
<ellipse cx="${cx + 11}" cy="${cy + 42}" rx="11" ry="6" fill="#B0BEC5"/>
</g>`;
}

// ─── CUTE ROCKET ─────────────────────────────────────────────────────────────
function rocket(cx: number, cy: number, small = false) {
  const s = small ? 0.7 : 1;
  return `<g>
<path d="M${cx},${cy - 70 * s} Q${cx - 22 * s},${cy - 30 * s} ${cx - 22 * s},${cy + 20 * s} L${cx + 22 * s},${cy + 20 * s} Q${cx + 22 * s},${cy - 30 * s} ${cx},${cy - 70 * s}" fill="#ECEFF1"/>
<path d="M${cx},${cy - 68 * s} Q${cx - 14 * s},${cy - 30 * s} ${cx - 14 * s},${cy + 5 * s} L${cx + 14 * s},${cy + 5 * s} Q${cx + 14 * s},${cy - 30 * s} ${cx},${cy - 68 * s}" fill="#EF5350"/>
<circle cx="${cx}" cy="${cy - 40 * s}" r="${16 * s}" fill="#80D8FF" opacity="0.8"/>
<circle cx="${cx}" cy="${cy - 40 * s}" r="${12 * s}" fill="#80D8FF"/>
<circle cx="${cx - 3 * s}" cy="${cy - 42 * s}" r="${5 * s}" fill="white" opacity="0.5"/>
<polygon points="${cx - 22 * s},${cy + 20 * s} ${cx - 38 * s},${cy + 38 * s} ${cx - 22 * s},${cy + 38 * s}" fill="#EF5350"/>
<polygon points="${cx + 22 * s},${cy + 20 * s} ${cx + 38 * s},${cy + 38 * s} ${cx + 22 * s},${cy + 38 * s}" fill="#EF5350"/>
<ellipse cx="${cx}" cy="${cy + 26 * s}" rx="${14 * s}" ry="${8 * s}" fill="#FF8F00"/>
<path d="M${cx - 8 * s},${cy + 30 * s} Q${cx - 5 * s},${cy + 50 * s} ${cx},${cy + 55 * s} Q${cx + 5 * s},${cy + 50 * s} ${cx + 8 * s},${cy + 30 * s}" fill="#FFCA28" opacity="0.9"/>
</g>`;
}

// ─── PRINCESS CHARACTER ──────────────────────────────────────────────────────
function princess(cx: number, cy: number) {
  return `<g>
<!-- Dress -->
<path d="M${cx - 30},${cy + 30} Q${cx - 38},${cy - 10} ${cx - 14},${cy - 25} L${cx + 14},${cy - 25} Q${cx + 38},${cy - 10} ${cx + 30},${cy + 30} Z" fill="#CE93D8"/>
<path d="M${cx - 26},${cy + 30} Q${cx - 32},${cy} ${cx - 12},${cy - 20} L${cx + 12},${cy - 20} Q${cx + 32},${cy} ${cx + 26},${cy + 30} Z" fill="#AB47BC"/>
<!-- Belt/sash -->
<ellipse cx="${cx}" cy="${cy - 10}" rx="16" ry="6" fill="#FFD93D"/>
<!-- Body -->
<rect x="${cx - 12}" y="${cy - 25}" width="24" height="18" fill="#FFCC80" rx="6"/>
<!-- Arms -->
<path d="M${cx - 12},${cy - 20} Q${cx - 28},${cy - 15} ${cx - 32},${cy - 5}" stroke="#FFCC80" stroke-width="9" stroke-linecap="round" fill="none"/>
<path d="M${cx + 12},${cy - 20} Q${cx + 28},${cy - 15} ${cx + 32},${cy - 5}" stroke="#FFCC80" stroke-width="9" stroke-linecap="round" fill="none"/>
<!-- Head -->
<circle cx="${cx}" cy="${cy - 42}" r="20" fill="#FFCC80"/>
<!-- Hair -->
<path d="M${cx - 18},${cy - 50} Q${cx - 22},${cy - 68} ${cx - 10},${cy - 66} Q${cx},${cy - 72} ${cx + 10},${cy - 66} Q${cx + 22},${cy - 68} ${cx + 18},${cy - 50}" fill="#8B4513"/>
<!-- Crown -->
<rect x="${cx - 14}" y="${cy - 64}" width="28" height="8" fill="#FFD93D" rx="2"/>
<polygon points="${cx - 10},${cy - 64} ${cx - 8},${cy - 74} ${cx - 6},${cy - 64}" fill="#FFD93D"/>
<polygon points="${cx - 2},${cy - 64} ${cx},${cy - 76} ${cx + 2},${cy - 64}" fill="#FFD93D"/>
<polygon points="${cx + 6},${cy - 64} ${cx + 8},${cy - 74} ${cx + 10},${cy - 64}" fill="#FFD93D"/>
<circle cx="${cx - 8}" cy="${cy - 70}" r="3" fill="#E91E63"/>
<circle cx="${cx}" cy="${cy - 72}" r="3" fill="#E91E63"/>
<circle cx="${cx + 8}" cy="${cy - 70}" r="3" fill="#E91E63"/>
<!-- Eyes -->
<circle cx="${cx - 7}" cy="${cy - 44}" r="7" fill="white"/>
<circle cx="${cx + 7}" cy="${cy - 44}" r="7" fill="white"/>
<circle cx="${cx - 6}" cy="${cy - 44}" r="4" fill="#2E3440"/>
<circle cx="${cx + 8}" cy="${cy - 44}" r="4" fill="#2E3440"/>
<circle cx="${cx - 5}" cy="${cy - 46}" r="1.5" fill="white"/>
<circle cx="${cx + 9}" cy="${cy - 46}" r="1.5" fill="white"/>
<!-- Smile -->
<path d="M${cx - 6},${cy - 35} Q${cx},${cy - 30} ${cx + 6},${cy - 35}" stroke="#C74E00" stroke-width="2" fill="none" stroke-linecap="round"/>
<!-- Rosy cheeks -->
<circle cx="${cx - 12}" cy="${cy - 38}" r="5" fill="#FFB3BA" opacity="0.55"/>
<circle cx="${cx + 12}" cy="${cy - 38}" r="5" fill="#FFB3BA" opacity="0.55"/>
</g>`;
}

// ─── SUPERHERO CHARACTER ─────────────────────────────────────────────────────
function superhero(cx: number, cy: number, facing: "left" | "right" = "right") {
  const flip = facing === "left" ? `transform="scale(-1,1) translate(-${cx * 2},0)"` : "";
  return `<g ${flip}>
<!-- Cape -->
<path d="M${cx - 14},${cy - 22} Q${cx - 40},${cy + 10} ${cx - 20},${cy + 40}" stroke="#DC143C" stroke-width="16" stroke-linecap="round" fill="none"/>
<!-- Body -->
<rect x="${cx - 16}" y="${cy - 30}" width="32" height="36" fill="#1565C0" rx="8"/>
<!-- Logo on chest -->
<polygon points="${cx},${cy - 24} ${cx - 6},${cy - 14} ${cx + 6},${cy - 14}" fill="#FFD93D"/>
<!-- Arm -->
<path d="M${cx + 16},${cy - 22} Q${cx + 34},${cy - 10} ${cx + 38},${cy + 5}" stroke="#1565C0" stroke-width="12" stroke-linecap="round" fill="none"/>
<!-- Fist -->
<circle cx="${cx + 40}" cy="${cy + 8}" r="9" fill="#FFCC80"/>
<!-- Left arm down -->
<path d="M${cx - 16},${cy - 22} Q${cx - 26},${cy} ${cx - 22},${cy + 20}" stroke="#1565C0" stroke-width="12" stroke-linecap="round" fill="none"/>
<!-- Head -->
<circle cx="${cx + 5}" cy="${cy - 50}" r="20" fill="#FFCC80"/>
<!-- Mask -->
<rect x="${cx - 8}" y="${cy - 58}" width="26" height="10" fill="#DC143C" rx="4"/>
<!-- Eyes in mask -->
<ellipse cx="${cx + 1}" cy="${cy - 54}" rx="5" ry="4" fill="white"/>
<ellipse cx="${cx + 13}" cy="${cy - 54}" rx="5" ry="4" fill="white"/>
<circle cx="${cx + 2}" cy="${cy - 54}" r="2.5" fill="#2E3440"/>
<circle cx="${cx + 14}" cy="${cy - 54}" r="2.5" fill="#2E3440"/>
<circle cx="${cx + 3}" cy="${cy - 55}" r="1" fill="white"/>
<circle cx="${cx + 15}" cy="${cy - 55}" r="1" fill="white"/>
<!-- Smile -->
<path d="M${cx - 2},${cy - 42} Q${cx + 5},${cy - 37} ${cx + 12},${cy - 42}" stroke="#C74E00" stroke-width="2" fill="none" stroke-linecap="round"/>
<!-- Legs -->
<rect x="${cx - 12}" y="${cy + 6}" width="12" height="28" fill="#0D47A1" rx="5"/>
<rect x="${cx + 2}" y="${cy + 6}" width="12" height="28" fill="#0D47A1" rx="5"/>
<ellipse cx="${cx - 6}" cy="${cy + 34}" rx="9" ry="5" fill="#0A3270"/>
<ellipse cx="${cx + 8}" cy="${cy + 34}" rx="9" ry="5" fill="#0A3270"/>
</g>`;
}

// ─── STARS (fully deterministic — no Math.random to prevent SSR hydration mismatch) ─
function stars() {
  // [x, y, r, opacity]
  const starData: [number,number,number,number][] = [
    [22,18,1.5,0.9],[68,8,1,0.8],[115,28,2,1],[165,12,1.5,0.9],[210,22,1,0.7],
    [258,8,2,0.9],[305,32,1.5,0.8],[358,15,1,1],[385,42,2,0.9],[40,55,1.5,0.8],
    [90,70,1,0.6],[145,48,2,0.7],[195,65,1.5,0.9],[248,52,1,0.8],[318,42,2,0.5],
    [370,68,1.5,0.7],[15,105,1,0.6],[62,130,2,0.8],[388,98,1.5,0.7],[340,148,1,0.5],
  ];
  return starData.map(([x, y, r, op]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="white" opacity="${op}"/>`).join("");
}

// ──────────────────────────────────────────────────────────────────────────────
// DINOSSAUROS — 6 unique scenes
// ──────────────────────────────────────────────────────────────────────────────
const dinoScenes: string[] = [

  // 0 — Manhã na floresta (Dino sozinho, curioso)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("d0sky","#AEE8FF","#E8F8FF")}
${sun(62, 52, 28, "#FFE03A")}
${cloud(190, 52)}
${cloud(340, 70, 0.75)}
<ellipse cx="120" cy="260" rx="180" ry="55" fill="#88CC5A" opacity="0.5"/>
<ellipse cx="330" cy="255" rx="140" ry="50" fill="#7DC44A" opacity="0.4"/>
${ground("d0g","#88CC5A","#4E9A28",224)}
${roundTree(52, 220, 88, "#7B5030", "#3E9620", "#52B530")}
${roundTree(310, 215, 95, "#7B5030", "#3E9620", "#52B530")}
${roundTree(368, 225, 75, "#7B5030", "#389018", "#4DAA28")}
${flower(160, 222, "#FF6BA8", 7)}
${flower(178, 225, "#FFD93D", 6)}
${flower(196, 221, "#A78BFA", 7)}
${flower(254, 224, "#FF6BA8", 6)}
${flower(272, 220, "#FFD93D", 7)}
${dino(188, 230, "right", "stand")}
<!-- Butterfly near dino -->
<path d="M258,175 Q266,165 274,175 Q266,185 258,175" fill="#FF9F43" opacity="0.9"/>
<path d="M258,175 Q266,185 274,175" fill="#FFCA28" opacity="0.8"/>
<circle cx="266" cy="174" r="2" fill="#7B5030"/>
<line x1="266" y1="173" x2="262" y2="165" stroke="#7B5030" stroke-width="1"/>
<line x1="266" y1="173" x2="270" y2="165" stroke="#7B5030" stroke-width="1"/>
</svg>`,

  // 1 — Tarde: Dino ouve som atrás da pedra grande
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("d1sky","#87CEEB","#D6EEFF")}
${sun(340, 60, 26, "#FFD93D")}
${cloud(100, 55, 0.9)}
${cloud(280, 42, 0.7)}
${ground("d1g","#78BB44","#4A8E20",228)}
<ellipse cx="90" cy="265" rx="160" ry="50" fill="#6CAE38" opacity="0.4"/>
${roundTree(28, 218, 80, "#6B4423", "#2E8C14", "#44A824")}
${roundTree(355, 220, 90, "#6B4423", "#2E8C14", "#44A824")}
<!-- BIG FRIENDLY ROUND ROCK -->
<ellipse cx="280" cy="226" rx="68" ry="48" fill="#9E9E9E"/>
<ellipse cx="280" cy="222" rx="62" ry="42" fill="#BDBDBD"/>
<ellipse cx="268" cy="210" rx="22" ry="16" fill="#E0E0E0" opacity="0.6"/>
<ellipse cx="298" cy="218" rx="14" ry="10" fill="#CACACA" opacity="0.4"/>
<!-- Small rock beside -->
<ellipse cx="220" cy="245" rx="22" ry="14" fill="#BDBDBD"/>
<ellipse cx="220" cy="242" rx="18" ry="11" fill="#D5D5D5"/>
<!-- Dino peeks from left side of rock -->
${dino(190, 230, "right", "walk")}
<!-- Question marks floating -->
<text x="235" y="168" font-family="Arial Rounded MT Bold, Arial" font-size="24" fill="#6C5CE7" opacity="0.7" font-weight="bold">?</text>
<text x="250" y="148" font-family="Arial Rounded MT Bold, Arial" font-size="18" fill="#FF7675" opacity="0.6" font-weight="bold">?</text>
${flower(140, 228, "#FF6BA8", 6)}
${flower(156, 232, "#FFD93D", 5)}
</svg>`,

  // 2 — Dois dinossauros se encontram! (surpresa feliz)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("d2sky","#B8E4FF","#F0FAFF")}
${sun(200, 45, 30, "#FFE566")}
${cloud(80, 55, 0.85)}
${cloud(320, 48, 0.8)}
${ground("d2g","#7EC843","#4E8E1A",232)}
<ellipse cx="200" cy="270" rx="200" ry="50" fill="#6DB83A" opacity="0.5"/>
${roundTree(25, 222, 75, "#7B5030", "#308A14", "#44A824")}
${roundTree(355, 220, 80, "#7B5030", "#308A14", "#44A824")}
<!-- Left dino (surprised, facing right) -->
${dino(130, 234, "right", "stand", "#69C44D", "#C5E8A0")}
<!-- Right dino (different color, facing left, surprised) -->
${dino(270, 234, "left", "stand", "#FF8C42", "#FFE4C4")}
<!-- Hearts/sparkles between them -->
<path d="M196,175 Q200,170 204,175 Q200,182 196,175" fill="#FF6BA8" opacity="0.9"/>
<path d="M186,188 Q191,182 196,188 Q191,196 186,188" fill="#FF6BA8" opacity="0.7"/>
<path d="M204,188 Q209,182 214,188 Q209,196 204,188" fill="#FF6BA8" opacity="0.7"/>
<!-- Stars of surprise -->
<circle cx="178" cy="195" r="4" fill="#FFD93D"/>
<path d="M178,189 L180,195 M178,201 L180,195 M172,195 L180,195 M186,195 L180,195" stroke="#FFD93D" stroke-width="2"/>
<circle cx="222" cy="195" r="4" fill="#FFD93D"/>
<path d="M222,189 L224,195 M222,201 L224,195 M218,195 L224,195 M230,195 L224,195" stroke="#FFD93D" stroke-width="2"/>
${flower(155, 232, "#FF6BA8", 6)}
${flower(170, 235, "#A78BFA", 5)}
${flower(240, 233, "#FFD93D", 6)}
</svg>`,

  // 3 — Brincando juntos no prado (tarde ensolarada)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("d3sky","#7FC8F8","#C8ECFF")}
${sun(355, 55, 32, "#FFD93D")}
${cloud(130, 50, 1)}
${cloud(310, 65, 0.7)}
${ground("d3g","#8BCE45","#558A20",228)}
<ellipse cx="200" cy="270" rx="205" ry="55" fill="#78BE3A" opacity="0.5"/>
${roundTree(18, 218, 82, "#7B5030", "#358A14", "#48A824")}
${roundTree(368, 220, 78, "#7B5030", "#358A14", "#48A824")}
<!-- Both dinos playing/running -->
${dino(140, 230, "right", "jump", "#69C44D", "#C5E8A0")}
${dino(265, 230, "right", "walk", "#FF8C42", "#FFE4C4")}
<!-- Bouncing ball -->
<circle cx="220" cy="195" r="16" fill="#FF6BA8"/>
<circle cx="214" cy="190" r="5" fill="white" opacity="0.4"/>
<circle cx="220" cy="215" r="6" fill="#FF6BA8" opacity="0.25"/>
<!-- Colorful flowers everywhere -->
${flower(85, 228, "#FF6BA8", 7)}
${flower(100, 232, "#FFD93D", 6)}
${flower(116, 226, "#A78BFA", 7)}
${flower(308, 228, "#FF6BA8", 6)}
${flower(325, 232, "#5EBF8A", 7)}
${flower(342, 226, "#FFD93D", 6)}
<!-- Butterflies -->
<path d="M185,168 Q193,158 201,168 Q193,178 185,168" fill="#FF9F43"/>
<path d="M185,168 Q193,178 201,168" fill="#FFCA28" opacity="0.8"/>
<circle cx="193" cy="167" r="2" fill="#7B5030"/>
</svg>`,

  // 4 — Aventura no rio com arco-íris
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("d4sky","#A8D8F8","#E4F6FF")}
${sun(320, 50, 26, "#FFE566")}
${cloud(80, 42, 0.9)}
${cloud(240, 58, 0.8)}
<!-- RAINBOW -->
<path d="M30,260 Q200,80 370,260" fill="none" stroke="#FF6BA8" stroke-width="10" opacity="0.7"/>
<path d="M40,262 Q200,95 360,262" fill="none" stroke="#FF9F43" stroke-width="8" opacity="0.7"/>
<path d="M50,263 Q200,110 350,263" fill="none" stroke="#FFD93D" stroke-width="8" opacity="0.7"/>
<path d="M60,264 Q200,125 340,264" fill="none" stroke="#78CE60" stroke-width="8" opacity="0.7"/>
<path d="M70,265 Q200,140 330,265" fill="none" stroke="#64B5F6" stroke-width="8" opacity="0.7"/>
<!-- Ground hillside -->
${ground("d4g","#78BB44","#4E8A20",230)}
<ellipse cx="200" cy="270" rx="205" ry="50" fill="#6CB038" opacity="0.5"/>
<!-- RIVER/STREAM -->
<path d="M0,248 Q80,238 160,248 Q240,258 320,248 Q360,243 400,250" fill="#64B5F6" opacity="0.7"/>
<ellipse cx="200" cy="250" rx="200" ry="18" fill="#64B5F6" opacity="0.5"/>
<ellipse cx="200" cy="252" rx="200" ry="14" fill="#42A5F5" opacity="0.4"/>
<!-- Stepping stones -->
<ellipse cx="120" cy="250" rx="20" ry="10" fill="#9E9E9E"/>
<ellipse cx="200" cy="252" rx="20" ry="10" fill="#9E9E9E"/>
<ellipse cx="278" cy="250" rx="20" ry="10" fill="#9E9E9E"/>
<!-- Fish in water -->
<ellipse cx="165" cy="255" rx="12" ry="6" fill="#FF8C42" opacity="0.7"/>
<path d="M177,255 L185,250 M177,255 L185,260" stroke="#FF8C42" stroke-width="2"/>
<!-- Trees -->
${roundTree(22, 222, 78, "#7B5030", "#358A14", "#48A824")}
${roundTree(360, 218, 85, "#7B5030", "#358A14", "#48A824")}
<!-- Both dinos crossing stones -->
${dino(155, 240, "right", "walk")}
${dino(248, 238, "right", "walk", "#FF8C42", "#FFE4C4")}
</svg>`,

  // 5 — Pôr do sol dourado — amigos para sempre
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("d5sky","#FF9A5C","#FFD580")}
<!-- Sky gradient overlay -->
<rect width="400" height="300" fill="url(#d5glow)" opacity="0.4"/>
<defs><radialGradient id="d5glow" cx="50%" cy="90%"><stop offset="0%" stop-color="#FFE566" stop-opacity="0.6"/><stop offset="100%" stop-color="#FF6B2B" stop-opacity="0"/></radialGradient></defs>
<!-- Setting sun -->
<circle cx="200" cy="295" r="90" fill="#FFD93D" opacity="0.35"/>
<circle cx="200" cy="295" r="65" fill="#FFD93D" opacity="0.45"/>
<circle cx="200" cy="295" r="42" fill="#FFE566" opacity="0.7"/>
${cloud(80, 60, 0.85)}
${cloud(300, 70, 0.8)}
<!-- Silhouette hills -->
<ellipse cx="80" cy="280" rx="200" ry="70" fill="#4A8A20" opacity="0.8"/>
<ellipse cx="340" cy="285" rx="180" ry="65" fill="#3E7A18" opacity="0.7"/>
${ground("d5g","#5AA625","#3A7A10",235)}
<!-- Warm ground glow -->
<ellipse cx="200" cy="238" rx="210" ry="20" fill="#78AA38" opacity="0.6"/>
<!-- Trees silhouettes -->
${roundTree(30, 222, 82, "#3E2A10", "#2A6010", "#366C18")}
${roundTree(355, 220, 88, "#3E2A10", "#2A6010", "#366C18")}
<!-- Long shadows on ground -->
<ellipse cx="180" cy="246" rx="35" ry="8" fill="#2A6010" opacity="0.3" transform="skewX(-20)"/>
<ellipse cx="300" cy="246" rx="35" ry="8" fill="#2A6010" opacity="0.3" transform="skewX(-20)"/>
<!-- Both dinos walking into sunset together -->
${dino(158, 235, "right", "walk", "#69C44D", "#C5E8A0")}
${dino(268, 235, "right", "walk", "#FF8C42", "#FFE4C4")}
<!-- Stars starting to appear -->
<circle cx="50" cy="25" r="2" fill="white" opacity="0.5"/>
<circle cx="340" cy="18" r="1.5" fill="white" opacity="0.4"/>
<circle cx="380" cy="35" r="2" fill="white" opacity="0.5"/>
</svg>`,
];

// ──────────────────────────────────────────────────────────────────────────────
// ANIMAIS — 6 unique scenes
// ──────────────────────────────────────────────────────────────────────────────
const animaisScenes: string[] = [

  // 0 — Prado ensolarado
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("a0sky","#B0D8FF","#E8F6FF")}
${sun(55, 55, 30, "#FFE566")}
${cloud(220, 50, 1)}
${cloud(340, 68, 0.75)}
${ground("a0g","#88CC5A","#4E9A28",228)}
${roundTree(30, 218, 85, "#7B5030", "#388A14", "#4CAA24")}
${roundTree(350, 218, 90, "#7B5030", "#388A14", "#4CAA24")}
${flower(120, 228, "#FF6BA8", 7)}
${flower(138, 232, "#FFD93D", 6)}
${flower(300, 228, "#A78BFA", 7)}
${flower(318, 232, "#FF6BA8", 6)}
${fox(200, 234, "right")}
<!-- Butterflies -->
<path d="M268,185 Q276,175 284,185 Q276,195 268,185" fill="#FF9F43"/>
<path d="M268,185 Q276,195 284,185" fill="#FFCA28" opacity="0.8"/>
<circle cx="276" cy="184" r="2" fill="#7B5030"/>
</svg>`,

  // 1 — Floresta encantada (árvores densas)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("a1sky","#C8EAFF","#EEF8FF")}
${sun(330, 55, 26, "#FFD93D")}
<!-- Dense forest background -->
<ellipse cx="60" cy="185" rx="75" ry="95" fill="#2A7D14" opacity="0.7"/>
<ellipse cx="60" cy="165" rx="60" ry="75" fill="#38961A" opacity="0.8"/>
<ellipse cx="330" cy="185" rx="80" ry="95" fill="#2A7D14" opacity="0.7"/>
<ellipse cx="330" cy="162" rx="65" ry="78" fill="#38961A" opacity="0.8"/>
${ground("a1g","#78BB44","#4A8A18",232)}
<!-- Magical light rays -->
<path d="M180,0 L160,230" stroke="#FFE566" stroke-width="18" opacity="0.12"/>
<path d="M210,0 L200,230" stroke="#FFE566" stroke-width="12" opacity="0.1"/>
<path d="M240,0 L250,230" stroke="#FFE566" stroke-width="15" opacity="0.1"/>
${roundTree(128, 215, 85, "#6B4020", "#2E8A14", "#3CAA1E")}
${roundTree(278, 215, 82, "#6B4020", "#2E8A14", "#3CAA1E")}
<!-- Fox standing in light -->
${fox(200, 234, "right")}
<!-- Fireflies/magical dots -->
<circle cx="145" cy="160" r="3" fill="#FFE566" opacity="0.8"/>
<circle cx="258" cy="145" r="3" fill="#78CE60" opacity="0.8"/>
<circle cx="172" cy="178" r="2.5" fill="#FFE566" opacity="0.7"/>
<circle cx="238" cy="170" r="2.5" fill="#FF9F43" opacity="0.7"/>
</svg>`,

  // 2 — Fox ajuda um coelhinho (amizade)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("a2sky","#B8E8FF","#F0FAFF")}
${sun(60, 50, 28, "#FFE566")}
${cloud(260, 52, 0.9)}
${ground("a2g","#88CC5A","#4E9A28",230)}
${roundTree(22, 218, 80, "#7B5030", "#388A14", "#4CAA24")}
${roundTree(358, 218, 85, "#7B5030", "#388A14", "#4CAA24")}
<!-- Fox -->
${fox(148, 234, "right")}
<!-- Cute bunny (right side) -->
<ellipse cx="285" cy="225" rx="22" ry="18" fill="white"/>
<ellipse cx="285" cy="222" rx="18" ry="14" fill="#F5F5F5"/>
<!-- Bunny ears -->
<ellipse cx="278" cy="202" rx="6" ry="18" fill="white"/>
<ellipse cx="278" cy="202" rx="3.5" ry="14" fill="#FFB3BA"/>
<ellipse cx="292" cy="202" rx="6" ry="18" fill="white"/>
<ellipse cx="292" cy="202" rx="3.5" ry="14" fill="#FFB3BA"/>
<!-- Bunny face -->
<ellipse cx="291" cy="220" rx="10" ry="7" fill="#FFD0D0"/>
<circle cx="280" cy="218" r="5" fill="white"/>
<circle cx="290" cy="218" r="5" fill="white"/>
<circle cx="281" cy="218" r="3" fill="#2E3440"/>
<circle cx="291" cy="218" r="3" fill="#2E3440"/>
<circle cx="282" cy="217" r="1.2" fill="white"/>
<circle cx="292" cy="217" r="1.2" fill="white"/>
<ellipse cx="292" cy="224" r="4" fill="#FFB3BA"/>
<path d="M285,227 Q291,232 297,228" stroke="#FF8C42" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<!-- Bunny tail -->
<circle cx="265" cy="230" r="8" fill="white"/>
<!-- Hearts between them -->
<path d="M192,188 Q196,183 200,188 Q196,195 192,188" fill="#FF6BA8" opacity="0.9"/>
<path d="M200,180 Q204,175 208,180 Q204,187 200,180" fill="#FF6BA8" opacity="0.7"/>
${flower(168, 232, "#FF6BA8", 6)}
${flower(320, 230, "#FFD93D", 6)}
</svg>`,

  // 3 — Reunião de amigos na floresta
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("a3sky","#B0D8FF","#DEEEFF")}
${sun(350, 52, 26, "#FFE03A")}
${cloud(130, 48, 0.9)}
${ground("a3g","#7EC843","#4E8A20",232)}
${roundTree(20, 218, 82, "#7B5030", "#2E8A14", "#40A81E")}
${roundTree(345, 218, 88, "#7B5030", "#2E8A14", "#40A81E")}
<!-- Fox center -->
${fox(200, 232, "right")}
<!-- Small hedgehog left -->
<ellipse cx="120" cy="238" rx="22" ry="14" fill="#8D6E63"/>
<ellipse cx="120" cy="234" rx="18" ry="12" fill="#795548"/>
<!-- Hedgehog spines -->
<path d="M105,228 L100,215" stroke="#6D4C41" stroke-width="3" stroke-linecap="round"/>
<path d="M112,224 L108,210" stroke="#6D4C41" stroke-width="3" stroke-linecap="round"/>
<path d="M120,222 L118,207" stroke="#6D4C41" stroke-width="3" stroke-linecap="round"/>
<path d="M128,224 L130,209" stroke="#6D4C41" stroke-width="3" stroke-linecap="round"/>
<path d="M135,228 L138,214" stroke="#6D4C41" stroke-width="3" stroke-linecap="round"/>
<circle cx="133" cy="237" r="5" fill="#FFCC80"/>
<circle cx="132" cy="236" r="2.5" fill="#2E3440"/>
<circle cx="133" cy="235" r="1" fill="white"/>
<!-- Small bird right -->
<ellipse cx="310" cy="225" rx="16" ry="12" fill="#64B5F6"/>
<circle cx="316" cy="220" r="10" fill="#42A5F5"/>
<ellipse cx="322" cy="220" rx="6" ry="4" fill="#FFB300"/>
<circle cx="320" cy="219" r="3" fill="#2E3440"/>
<circle cx="321" cy="218" r="1" fill="white"/>
<path d="M296,225 Q302,230 308,225" stroke="#42A5F5" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M304,225 Q298,235 300,242" stroke="#42A5F5" stroke-width="4" fill="none" stroke-linecap="round"/>
${flower(158, 232, "#A78BFA", 6)}
${flower(256, 232, "#FF6BA8", 6)}
</svg>`,

  // 4 — Chuva — debaixo do cogumelo gigante
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("a4sky","#90B8CC","#BECFDC")}
<!-- Rain clouds -->
<ellipse cx="100" cy="40" rx="80" ry="35" fill="#90A4AE" opacity="0.9"/>
<ellipse cx="80" cy="32" rx="55" ry="28" fill="#78909C" opacity="0.9"/>
<ellipse cx="130" cy="28" rx="50" ry="26" fill="#607D8B" opacity="0.8"/>
<ellipse cx="280" cy="50" rx="70" ry="30" fill="#90A4AE" opacity="0.9"/>
<ellipse cx="310" cy="38" rx="55" ry="26" fill="#78909C" opacity="0.8"/>
<ellipse cx="380" cy="42" rx="45" ry="22" fill="#90A4AE" opacity="0.7"/>
${ground("a4g","#6AAE38","#428A14",234)}
<!-- Rain drops -->
<line x1="45" y1="80" x2="40" y2="110" stroke="#90CAF9" stroke-width="2" opacity="0.6"/>
<line x1="75" y1="90" x2="70" y2="120" stroke="#90CAF9" stroke-width="2" opacity="0.6"/>
<line x1="28" y1="110" x2="23" y2="140" stroke="#90CAF9" stroke-width="1.5" opacity="0.5"/>
<line x1="350" y1="85" x2="345" y2="115" stroke="#90CAF9" stroke-width="2" opacity="0.6"/>
<line x1="375" y1="100" x2="370" y2="130" stroke="#90CAF9" stroke-width="2" opacity="0.5"/>
<line x1="320" y1="92" x2="315" y2="122" stroke="#90CAF9" stroke-width="1.5" opacity="0.5"/>
<line x1="155" y1="78" x2="150" y2="108" stroke="#90CAF9" stroke-width="2" opacity="0.4"/>
<line x1="255" y1="82" x2="250" y2="112" stroke="#90CAF9" stroke-width="2" opacity="0.4"/>
<!-- GIANT FRIENDLY MUSHROOM -->
<!-- Stalk -->
<ellipse cx="200" cy="250" rx="22" ry="12" fill="#F5F5F5"/>
<rect x="182" y="185" width="36" height="70" fill="#FAFAFA" rx="8"/>
<rect x="186" y="188" width="28" height="65" fill="white" rx="6"/>
<!-- Cap -->
<ellipse cx="200" cy="190" rx="95" ry="42" fill="#EF5350"/>
<ellipse cx="200" cy="183" rx="88" ry="38" fill="#E53935"/>
<ellipse cx="200" cy="178" rx="78" ry="32" fill="#F44336"/>
<!-- Spots on cap -->
<circle cx="165" cy="175" r="14" fill="white" opacity="0.7"/>
<circle cx="200" cy="168" r="16" fill="white" opacity="0.7"/>
<circle cx="235" cy="173" r="13" fill="white" opacity="0.7"/>
<circle cx="148" cy="190" r="10" fill="white" opacity="0.6"/>
<circle cx="252" cy="188" r="11" fill="white" opacity="0.6"/>
<!-- Fox and bunny sheltering under mushroom -->
${fox(170, 242, "right")}
<!-- Bunny under mushroom (peeking out) -->
<ellipse cx="250" cy="238" rx="18" ry="14" fill="white"/>
<ellipse cx="244" cy="220" rx="5" ry="14" fill="white"/>
<ellipse cx="244" cy="220" rx="3" ry="10" fill="#FFB3BA"/>
<ellipse cx="256" cy="220" rx="5" ry="14" fill="white"/>
<ellipse cx="256" cy="220" rx="3" ry="10" fill="#FFB3BA"/>
<circle cx="255" cy="235" r="4" fill="#2E3440"/>
<circle cx="256" cy="234" r="1.5" fill="white"/>
</svg>`,

  // 5 — Arco-íris depois da chuva — celebração!
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("a5sky","#B8EEFF","#E8FAFF")}
${sun(355, 55, 30, "#FFE566")}
<!-- Rainbow -->
<path d="M20,275 Q200,75 380,275" fill="none" stroke="#FF6BA8" stroke-width="12" opacity="0.75"/>
<path d="M32,277 Q200,92 368,277" fill="none" stroke="#FF9F43" stroke-width="10" opacity="0.75"/>
<path d="M44,278 Q200,108 356,278" fill="none" stroke="#FFD93D" stroke-width="10" opacity="0.75"/>
<path d="M56,279 Q200,124 344,279" fill="none" stroke="#78CE60" stroke-width="10" opacity="0.75"/>
<path d="M68,280 Q200,140 332,280" fill="none" stroke="#64B5F6" stroke-width="10" opacity="0.75"/>
<path d="M80,281 Q200,156 320,281" fill="none" stroke="#CE93D8" stroke-width="10" opacity="0.75"/>
${ground("a5g","#88CC5A","#4E9A28",228)}
${cloud(100, 52, 0.8)}
${roundTree(25, 218, 82, "#7B5030", "#388A14", "#4CAA24")}
${roundTree(355, 218, 88, "#7B5030", "#388A14", "#4CAA24")}
<!-- Fox jumping happily -->
${fox(195, 230, "right")}
<!-- Flowers everywhere -->
${flower(90, 228, "#FF6BA8", 8)}
${flower(108, 232, "#FFD93D", 7)}
${flower(126, 226, "#A78BFA", 8)}
${flower(276, 228, "#FF6BA8", 7)}
${flower(294, 232, "#5EBF8A", 8)}
${flower(312, 226, "#FFD93D", 7)}
</svg>`,
];

// ──────────────────────────────────────────────────────────────────────────────
// ESPACO — 6 unique scenes
// ──────────────────────────────────────────────────────────────────────────────
const espacoScenes: string[] = [

  // 0 — Pedro olha as estrelas (telescópio à noite)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("e0sky","#0A1628","#1A2C4A")}
${stars()}
<!-- Moon -->
<circle cx="340" cy="50" r="36" fill="#FFF9E6" opacity="0.15"/>
<circle cx="340" cy="50" r="28" fill="#FFF9E6" opacity="0.7"/>
<circle cx="352" cy="44" r="22" fill="#0A1628"/>
<circle cx="340" cy="50" r="28" fill="none" stroke="#FFFDE7" stroke-width="2" opacity="0.4"/>
<!-- Stars constellation -->
<circle cx="80" cy="60" r="3" fill="#FFE566"/>
<circle cx="108" cy="48" r="2.5" fill="#FFE566"/>
<circle cx="130" cy="72" r="2" fill="#FFE566"/>
<line x1="80" y1="60" x2="108" y2="48" stroke="#FFE566" stroke-width="0.8" opacity="0.5"/>
<line x1="108" y1="48" x2="130" y2="72" stroke="#FFE566" stroke-width="0.8" opacity="0.5"/>
<!-- Hill -->
<ellipse cx="200" cy="310" rx="280" ry="100" fill="#1A3850"/>
<ellipse cx="200" cy="290" rx="240" ry="80" fill="#0E2840"/>
<rect x="0" y="250" width="400" height="50" fill="#0E2840"/>
<!-- House silhouette -->
<rect x="50" y="215" width="60" height="45" fill="#091E30"/>
<polygon points="50,215 110,215 80,188" fill="#091E30"/>
<rect x="68" y="232" width="14" height="28" fill="#FFE566" opacity="0.4"/>
<rect x="88" y="232" width="14" height="28" fill="#FFE566" opacity="0.4"/>
<!-- Telescope on ground -->
<rect x="195" y="240" width="10" height="20" fill="#90A4AE" rx="3" transform="rotate(-20,200,250)"/>
<rect x="178" y="235" width="28" height="10" fill="#78909C" rx="4" transform="rotate(-20,192,240)"/>
<rect x="190" y="255" width="12" height="4" fill="#607D8B"/>
<!-- Kid looking through telescope -->
<circle cx="210" cy="228" r="14" fill="#FFCC80"/>
<rect x="200" y="240" width="20" height="20" fill="#1565C0" rx="5"/>
<path d="M200,245 L188,238" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
<path d="M220,245 L232,238" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
<circle cx="204" cy="225" r="4" fill="#2E3440"/>
<circle cx="217" cy="225" r="4" fill="#2E3440"/>
<circle cx="205" cy="224" r="1.5" fill="white"/>
<circle cx="218" cy="224" r="1.5" fill="white"/>
<path d="M206,234 Q212,239 218,234" stroke="#C74E00" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<!-- Hair -->
<path d="M198,220 Q210,210 222,220" fill="#3E2000"/>
</svg>`,

  // 1 — Foguete pronto para decolar!
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("e1sky","#1A3050","#2E4A70")}
${stars()}
${sun(340, 55, 22, "#FFE566")}
<!-- Launch pad -->
<rect x="140" y="248" width="120" height="16" fill="#546E7A" rx="4"/>
<rect x="160" y="238" width="80" height="14" fill="#607D8B" rx="3"/>
<rect x="175" y="228" width="50" height="14" fill="#546E7A" rx="3"/>
<!-- Support arms -->
<rect x="155" y="200" width="8" height="40" fill="#455A64" rx="3"/>
<rect x="237" y="200" width="8" height="40" fill="#455A64" rx="3"/>
<!-- Rocket -->
${rocket(200, 228)}
<!-- Launch countdown / excitement -->
<text x="310" y="120" font-family="Arial Rounded MT Bold, Arial" font-size="22" fill="#FFD93D" font-weight="bold" opacity="0.9">3!</text>
<!-- Stars extra -->
<circle cx="48" cy="88" r="3" fill="#FFE566" opacity="0.9"/>
<circle cx="25" cy="52" r="2" fill="white"/>
<circle cx="358" cy="105" r="2.5" fill="#A78BFA" opacity="0.8"/>
</svg>`,

  // 2 — Viajando pelo espaço
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("e2sky","#060C1A","#0D1A30")}
${stars()}
<!-- Nebula -->
<ellipse cx="310" cy="120" rx="100" ry="80" fill="#7B1FA2" opacity="0.15"/>
<ellipse cx="280" cy="100" rx="70" ry="55" fill="#9C27B0" opacity="0.12"/>
<!-- Planet 1 (big colorful) -->
<circle cx="340" cy="80" rx="50" ry="50" fill="#42A5F5" opacity="0.9"/>
<circle cx="340" cy="80" r="50" fill="none" stroke="#90CAF9" stroke-width="1" opacity="0.5"/>
<ellipse cx="340" cy="80" rx="30" ry="12" fill="#1E88E5" opacity="0.6"/>
<ellipse cx="330" cy="72" rx="15" ry="8" fill="#64B5F6" opacity="0.4"/>
<!-- Planet ring -->
<ellipse cx="340" cy="80" rx="72" ry="16" fill="none" stroke="#90CAF9" stroke-width="7" opacity="0.5"/>
<ellipse cx="340" cy="80" rx="72" ry="16" fill="none" stroke="#B3E5FC" stroke-width="3" opacity="0.4"/>
<!-- Planet 2 (small, pink) -->
<circle cx="65" cy="185" r="30" fill="#CE93D8" opacity="0.8"/>
<ellipse cx="58" cy="178" rx="12" ry="8" fill="#AB47BC" opacity="0.5"/>
<!-- Astronaut floating in space -->
${astronaut(200, 165)}
<!-- Tether -->
<path d="M240,170 Q280,155 320,180" stroke="#B0BEC5" stroke-width="2" fill="none" stroke-dasharray="6,4"/>
<!-- Stars/sparkles around astronaut -->
<circle cx="155" cy="140" r="2" fill="#FFE566"/>
<circle cx="260" cy="135" r="2" fill="#FFE566"/>
</svg>`,

  // 3 — Aterrissando em planeta colorido
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("e3sky","#050A18","#0A1428")}
${stars()}
<!-- Alien planet surface — purple ground -->
<ellipse cx="200" cy="310" rx="280" ry="100" fill="#7B1FA2" opacity="0.9"/>
<rect x="0" y="258" width="400" height="42" fill="#6A1B9A"/>
<ellipse cx="200" cy="258" rx="220" ry="20" fill="#8E24AA" opacity="0.8"/>
<!-- Alien plants/crystals -->
<polygon points="60,258 54,215 66,215" fill="#CE93D8"/>
<polygon points="60,258 50,220 70,220" fill="#AB47BC" opacity="0.7"/>
<polygon points="85,258 78,225 92,225" fill="#CE93D8" opacity="0.8"/>
<polygon points="320,258 314,218 326,218" fill="#CE93D8"/>
<polygon points="345,258 338,228 352,228" fill="#AB47BC" opacity="0.8"/>
<!-- Rocks on planet -->
<ellipse cx="140" cy="262" rx="25" ry="14" fill="#8E24AA" opacity="0.6"/>
<ellipse cx="268" cy="262" rx="22" ry="12" fill="#8E24AA" opacity="0.6"/>
<!-- Rocket landed -->
${rocket(200, 245, true)}
<!-- Astronaut stepping out -->
${astronaut(258, 248)}
<!-- Stars/Earth in sky -->
<circle cx="355" cy="45" r="20" fill="#42A5F5" opacity="0.7"/>
<ellipse cx="355" cy="45" rx="26" ry="10" fill="none" stroke="#90CAF9" stroke-width="5" opacity="0.5"/>
<circle cx="62" cy="62" r="14" fill="#FFB300" opacity="0.6"/>
</svg>`,

  // 4 — Encontrando aliens amigáveis!
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("e4sky","#080F20","#101828")}
${stars()}
<!-- Planet surface (green) -->
<rect x="0" y="255" width="400" height="45" fill="#1B5E20"/>
<ellipse cx="200" cy="255" rx="220" ry="20" fill="#2E7D32" opacity="0.9"/>
<!-- Alien crystals -->
<polygon points="55,255 49,208 61,208" fill="#00E5FF" opacity="0.8"/>
<polygon points="340,255 334,212 346,212" fill="#00E5FF" opacity="0.8"/>
<polygon points="80,255 73,220 87,220" fill="#69F0AE" opacity="0.7"/>
<!-- Astronaut left -->
${astronaut(148, 248)}
<!-- CUTE FRIENDLY ALIEN right -->
<ellipse cx="272" cy="220" rx="28" ry="34" fill="#69F0AE"/>
<ellipse cx="272" cy="225" rx="22" ry="26" fill="#A5D6A7"/>
<!-- Alien antenna -->
<line x1="268" y1="188" x2="262" y2="168" stroke="#69F0AE" stroke-width="3"/>
<circle cx="262" cy="165" r="5" fill="#FFE566"/>
<line x1="276" y1="188" x2="282" y2="168" stroke="#69F0AE" stroke-width="3"/>
<circle cx="282" cy="165" r="5" fill="#FF6BA8"/>
<!-- Alien eyes (big cute ones) -->
<circle cx="263" cy="212" r="12" fill="white"/>
<circle cx="281" cy="212" r="12" fill="white"/>
<circle cx="265" cy="213" r="7" fill="#7B1FA2"/>
<circle cx="283" cy="213" r="7" fill="#7B1FA2"/>
<circle cx="267" cy="211" r="3" fill="white"/>
<circle cx="285" cy="211" r="3" fill="white"/>
<!-- Alien smile -->
<path d="M260,228 Q272,236 284,228" stroke="#2E7D32" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<!-- Wave/greeting between them -->
<path d="M180,210 Q215,195 248,210" stroke="#FFE566" stroke-width="3" fill="none" stroke-dasharray="6,4" opacity="0.7"/>
<circle cx="215" cy="195" r="4" fill="#FFE566" opacity="0.7"/>
</svg>`,

  // 5 — Voltando para casa — Terra vista do espaço
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("e5sky","#040810","#0A1428")}
${stars()}
<!-- BIG Earth -->
<circle cx="200" cy="200" r="130" fill="#1565C0" opacity="0.9"/>
<ellipse cx="175" cy="165" rx="45" ry="35" fill="#2E7D32" opacity="0.8"/>
<ellipse cx="230" cy="185" rx="30" ry="25" fill="#2E7D32" opacity="0.7"/>
<ellipse cx="160" cy="210" rx="25" ry="18" fill="#2E7D32" opacity="0.6"/>
<ellipse cx="240" cy="145" rx="20" ry="15" fill="#1E88E5" opacity="0.6"/>
<!-- Clouds on Earth -->
<ellipse cx="190" cy="158" rx="20" ry="8" fill="white" opacity="0.6"/>
<ellipse cx="225" cy="200" rx="18" ry="7" fill="white" opacity="0.5"/>
<ellipse cx="165" cy="195" rx="15" ry="6" fill="white" opacity="0.5"/>
<!-- Earth atmosphere glow -->
<circle cx="200" cy="200" r="140" fill="none" stroke="#64B5F6" stroke-width="12" opacity="0.2"/>
<circle cx="200" cy="200" r="150" fill="none" stroke="#90CAF9" stroke-width="6" opacity="0.1"/>
<!-- Astronaut/rocket heading toward earth -->
${rocket(340, 80, true)}
<!-- Path arrow -->
<path d="M330,105 Q280,140 240,170" stroke="#FFE566" stroke-width="2" fill="none" stroke-dasharray="8,5" opacity="0.5"/>
<!-- Moon small -->
<circle cx="55" cy="50" r="22" fill="#FFF9E6" opacity="0.7"/>
<circle cx="62" cy="45" r="16" fill="#0A1428"/>
<circle cx="55" cy="50" r="22" fill="none" stroke="#FFFDE7" stroke-width="1.5" opacity="0.3"/>
</svg>`,
];

// ──────────────────────────────────────────────────────────────────────────────
// FAZENDINHA — 6 unique scenes
// ──────────────────────────────────────────────────────────────────────────────
const fazendinhaScenes: string[] = [

  // 0 — Manhã na fazenda — galo cantando
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("f0sky","#FFE0A0","#FFF3CC")}
<!-- Sunrise glow -->
<circle cx="200" cy="300" r="120" fill="#FFB300" opacity="0.3"/>
<circle cx="200" cy="300" r="80" fill="#FFD93D" opacity="0.4"/>
${sun(200, 260, 30, "#FFD93D")}
${cloud(90, 55, 0.85)}
${cloud(310, 62, 0.75)}
${ground("f0g","#88CC5A","#4E9A28",232)}
<ellipse cx="200" cy="270" rx="205" ry="50" fill="#78BB42" opacity="0.5"/>
<!-- BARN -->
<rect x="250" y="158" width="130" height="100" fill="#C62828"/>
<rect x="252" y="160" width="126" height="98" fill="#D32F2F"/>
<polygon points="250,158 380,158 315,105" fill="#B71C1C"/>
<polygon points="253,158 377,158 315,110" fill="#C62828"/>
<!-- Barn door -->
<rect x="295" y="208" width="40" height="50" fill="#6D4C41"/>
<circle cx="315" cy="233" r="3" fill="#FFD54F"/>
<!-- Barn windows -->
<rect x="260" y="175" width="25" height="20" fill="#90CAF9" rx="3"/>
<rect x="355" y="175" width="25" height="20" fill="#90CAF9" rx="3"/>
<!-- Small house left -->
<rect x="30" y="175" width="90" height="70" fill="#FFF9C4"/>
<polygon points="30,175 120,175 75,135" fill="#E53935"/>
<rect x="58" y="210" width="24" height="35" fill="#8D6E63"/>
<circle cx="83" cy="227" r="3" fill="#FFD54F"/>
<!-- Fence -->
<rect x="148" y="210" width="6" height="42" fill="#BCAAA4"/>
<rect x="162" y="210" width="6" height="42" fill="#BCAAA4"/>
<rect x="176" y="210" width="6" height="42" fill="#BCAAA4"/>
<rect x="190" y="210" width="6" height="42" fill="#BCAAA4"/>
<rect x="148" y="218" width="48" height="5" fill="#BCAAA4" rx="2"/>
<rect x="148" y="232" width="48" height="5" fill="#BCAAA4" rx="2"/>
<!-- ROOSTER -->
<ellipse cx="130" cy="220" rx="16" ry="12" fill="#FAFAFA"/>
<circle cx="140" cy="210" r="10" fill="#FAFAFA"/>
<!-- Crest -->
<path d="M138,202 Q142,194 146,202" fill="#E53935"/>
<path d="M142,200 Q147,192 151,200" fill="#E53935"/>
<!-- Beak -->
<polygon points="148,210 156,212 148,214" fill="#FFB300"/>
<!-- Eye -->
<circle cx="143" cy="209" r="3" fill="#2E3440"/>
<circle cx="144" cy="208" r="1.2" fill="white"/>
<!-- Tail feathers -->
<path d="M124,218 L110,205 M124,220 L108,215 M124,222 L112,228" stroke="#E53935" stroke-width="3" stroke-linecap="round"/>
<!-- Legs -->
<line x1="135" y1="228" x2="132" y2="244" stroke="#FFB300" stroke-width="3"/>
<line x1="142" y1="228" x2="145" y2="244" stroke="#FFB300" stroke-width="3"/>
<!-- Musical notes -->
<text x="152" y="198" font-family="serif" font-size="20" fill="#6C5CE7" opacity="0.7">♪</text>
<text x="168" y="182" font-family="serif" font-size="16" fill="#FF7675" opacity="0.6">♫</text>
</svg>`,

  // 1 — Alimentando os animais
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("f1sky","#B8E0FF","#E8F8FF")}
${sun(340, 52, 28, "#FFE566")}
${cloud(100, 50, 0.9)}
${ground("f1g","#88CC5A","#4E9A28",230)}
<ellipse cx="200" cy="270" rx="205" ry="50" fill="#78BB42" opacity="0.5"/>
${roundTree(22, 218, 80, "#7B5030", "#388A14", "#4CAA24")}
${roundTree(358, 218, 85, "#7B5030", "#388A14", "#4CAA24")}
<!-- Fence -->
<rect x="0" y="215" width="400" height="6" fill="#BCAAA4" rx="2"/>
<rect x="60" y="205" width="8" height="28" fill="#BCAAA4" rx="3"/>
<rect x="140" y="205" width="8" height="28" fill="#BCAAA4" rx="3"/>
<rect x="220" y="205" width="8" height="28" fill="#BCAAA4" rx="3"/>
<rect x="300" y="205" width="8" height="28" fill="#BCAAA4" rx="3"/>
<!-- Kid with bucket -->
<circle cx="200" cy="188" r="18" fill="#FFCC80"/>
<!-- Kid hair -->
<path d="M184,182 Q200,170 216,182" fill="#8B4513"/>
<!-- Kid face -->
<circle cx="194" cy="189" r="4" fill="#2E3440"/>
<circle cx="207" cy="189" r="4" fill="#2E3440"/>
<circle cx="195" cy="188" r="1.5" fill="white"/>
<circle cx="208" cy="188" r="1.5" fill="white"/>
<path d="M194,197 Q200,202 207,197" stroke="#C74E00" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="190" cy="193" r="4" fill="#FFB3BA" opacity="0.6"/>
<circle cx="210" cy="193" r="4" fill="#FFB3BA" opacity="0.6"/>
<!-- Kid body / overalls -->
<rect x="188" y="204" width="24" height="30" fill="#1565C0" rx="6"/>
<path d="M188,208 L175,204" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
<!-- Bucket -->
<rect x="163" y="210" width="18" height="14" fill="#FFB300" rx="3"/>
<path d="M164,210 Q172,204 181,210" stroke="#E65100" stroke-width="2" fill="none"/>
<!-- Seeds/food spilling -->
<circle cx="157" cy="226" r="3" fill="#FFD93D"/>
<circle cx="150" cy="232" r="3" fill="#FFD93D"/>
<circle cx="162" cy="234" r="3" fill="#FFD93D"/>
<!-- Chickens eating -->
<ellipse cx="110" cy="240" rx="18" ry="12" fill="#FFF8E1"/>
<circle cx="122" cy="232" r="8" fill="#FFF8E1"/>
<polygon points="128,232 136,234 128,236" fill="#FFB300"/>
<circle cx="125" cy="231" r="2.5" fill="#2E3440"/>
<line x1="116" y1="246" x2="113" y2="258" stroke="#FFB300" stroke-width="2.5"/>
<line x1="122" y1="247" x2="125" y2="258" stroke="#FFB300" stroke-width="2.5"/>
<!-- Cow behind fence -->
<ellipse cx="305" cy="232" rx="35" ry="22" fill="white"/>
<ellipse cx="305" cy="225" rx="28" ry="18" fill="#F5F5F5"/>
<!-- Cow spots -->
<ellipse cx="298" cy="228" rx="10" ry="7" fill="#424242" opacity="0.25"/>
<ellipse cx="315" cy="222" rx="8" ry="6" fill="#424242" opacity="0.25"/>
<!-- Cow head -->
<ellipse cx="330" cy="222" rx="20" ry="16" fill="white"/>
<ellipse cx="338" cy="226" rx="12" ry="8" fill="#FAFAFA"/>
<circle cx="336" cy="225" r="3" fill="#424242" opacity="0.5"/>
<circle cx="342" cy="225" r="3" fill="#424242" opacity="0.5"/>
<!-- Cow ears -->
<ellipse cx="316" cy="212" rx="6" ry="10" fill="white"/>
<ellipse cx="316" cy="212" rx="3.5" ry="7" fill="#F48FB1"/>
<!-- Cow eyes -->
<circle cx="325" cy="218" r="5" fill="white"/>
<circle cx="326" cy="218" r="3" fill="#2E3440"/>
<circle cx="327" cy="217" r="1.2" fill="white"/>
<!-- Cow horns -->
<path d="M317,210 Q314,200 308,202" stroke="#D4A04A" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`,

  // 2 — Plantando no jardim
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("f2sky","#C8E8FF","#EEF8FF")}
${sun(55, 55, 26, "#FFE566")}
${cloud(260, 52, 0.9)}
${cloud(350, 68, 0.7)}
${ground("f2g","#8BCE45","#549A20",232)}
<!-- Garden rows -->
<ellipse cx="200" cy="265" rx="180" ry="15" fill="#6B5E2A" opacity="0.6"/>
<rect x="40" y="245" width="320" height="20" fill="#7D6A30" opacity="0.5"/>
<!-- Rows of soil -->
<ellipse cx="100" cy="248" rx="55" ry="8" fill="#5D4037" opacity="0.5"/>
<ellipse cx="200" cy="248" rx="55" ry="8" fill="#5D4037" opacity="0.5"/>
<ellipse cx="300" cy="248" rx="55" ry="8" fill="#5D4037" opacity="0.5"/>
<!-- Seedlings -->
<line x1="80" y1="248" x2="80" y2="232" stroke="#388E3C" stroke-width="3"/>
<ellipse cx="80" cy="228" rx="8" ry="6" fill="#66BB6A"/>
<line x1="110" y1="248" x2="110" y2="234" stroke="#388E3C" stroke-width="3"/>
<ellipse cx="110" cy="230" rx="8" ry="6" fill="#66BB6A"/>
<line x1="290" y1="248" x2="290" y2="233" stroke="#388E3C" stroke-width="3"/>
<ellipse cx="290" cy="229" rx="8" ry="6" fill="#66BB6A"/>
<line x1="320" y1="248" x2="320" y2="235" stroke="#388E3C" stroke-width="3"/>
<ellipse cx="320" cy="231" rx="8" ry="6" fill="#66BB6A"/>
<!-- Watering can -->
<ellipse cx="350" cy="218" rx="18" ry="12" fill="#FFB300" opacity="0.9"/>
<rect x="336" y="210" width="28" height="18" fill="#FFB300" rx="5"/>
<path d="M362,214 Q372,210 375,216 L375,220 Q372,222 362,220" fill="#E65100" opacity="0.8"/>
<!-- Water droplets from can -->
<circle cx="370" cy="228" r="2.5" fill="#64B5F6"/>
<circle cx="376" cy="234" r="2.5" fill="#64B5F6"/>
<circle cx="368" cy="237" r="2.5" fill="#64B5F6"/>
<!-- Kid kneeling, planting -->
<circle cx="200" cy="195" r="17" fill="#FFCC80"/>
<path d="M185,190 Q200,178 215,190" fill="#8B4513"/>
<circle cx="193" cy="196" r="3.5" fill="#2E3440"/>
<circle cx="207" cy="196" r="3.5" fill="#2E3440"/>
<circle cx="194" cy="195" r="1.4" fill="white"/>
<circle cx="208" cy="195" r="1.4" fill="white"/>
<path d="M193,205 Q200,210 207,205" stroke="#C74E00" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="189" cy="200" r="4" fill="#FFB3BA" opacity="0.6"/>
<circle cx="211" cy="200" r="4" fill="#FFB3BA" opacity="0.6"/>
<rect x="188" y="210" width="24" height="26" fill="#4CAF50" rx="6"/>
<!-- Arms reaching to soil -->
<path d="M190,218 L175,238" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
<path d="M210,218 L224,238" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
<!-- Seed packet -->
<rect x="215" y="235" width="20" height="14" fill="#FF8F00" rx="3"/>
<circle cx="225" cy="242" r="4" fill="#FFD93D"/>
<!-- Worm in soil -->
<path d="M148,248 Q155,244 162,248 Q169,252 176,248" stroke="#FF8A65" stroke-width="5" fill="none" stroke-linecap="round"/>
</svg>`,

  // 3 — Colheita! Frutas e verduras
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("f3sky","#B8E0FF","#E8F6FF")}
${sun(50, 52, 28, "#FFE566")}
${cloud(290, 50, 0.9)}
${ground("f3g","#8BCE45","#54A020",230)}
<ellipse cx="200" cy="270" rx="205" ry="50" fill="#78BB42" opacity="0.5"/>
<!-- Vegetable garden with big veggies -->
<!-- Carrots -->
<path d="M120,230 L115,265" stroke="#FF8F00" stroke-width="10" stroke-linecap="round"/>
<path d="M115,228 L108,218 M115,228 L122,215 M115,228 L118,222" stroke="#388E3C" stroke-width="3" stroke-linecap="round"/>
<path d="M145,228 L140,265" stroke="#FF8F00" stroke-width="10" stroke-linecap="round"/>
<path d="M140,228 L133,216 M140,228 L147,215" stroke="#388E3C" stroke-width="3" stroke-linecap="round"/>
<!-- Pumpkin -->
<ellipse cx="265" cy="248" rx="28" ry="22" fill="#FF8F00"/>
<ellipse cx="265" cy="248" rx="24" ry="19" fill="#FF9800"/>
<path d="M248,248 Q258,235 265,248 Q272,235 280,248" fill="#EF6C00" opacity="0.4"/>
<rect x="263" y="228" width="5" height="12" fill="#388E3C" rx="2"/>
<path d="M268,232 Q278,225 285,230" stroke="#388E3C" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<!-- Watermelon -->
<ellipse cx="330" cy="248" rx="32" ry="22" fill="#388E3C"/>
<ellipse cx="330" cy="248" rx="28" ry="18" fill="#4CAF50"/>
<!-- Watermelon cut showing inside -->
<ellipse cx="330" cy="248" rx="22" ry="14" fill="#EF5350" opacity="0.9"/>
<circle cx="322" cy="248" r="3" fill="#2E3440"/>
<circle cx="332" cy="244" r="3" fill="#2E3440"/>
<circle cx="338" cy="252" r="3" fill="#2E3440"/>
<!-- Kid with big basket -->
<circle cx="192" cy="188" r="18" fill="#FFCC80"/>
<path d="M176,182 Q192,170 208,182" fill="#8B4513"/>
<circle cx="185" cy="190" r="4" fill="#2E3440"/>
<circle cx="199" cy="190" r="4" fill="#2E3440"/>
<circle cx="186" cy="189" r="1.5" fill="white"/>
<circle cx="200" cy="189" r="1.5" fill="white"/>
<path d="M185,199 Q192,204 199,199" stroke="#C74E00" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="181" cy="194" r="4" fill="#FFB3BA" opacity="0.6"/>
<circle cx="203" cy="194" r="4" fill="#FFB3BA" opacity="0.6"/>
<rect x="182" y="204" width="22" height="28" fill="#795548" rx="6"/>
<!-- Basket -->
<rect x="155" y="228" width="40" height="28" fill="#FF8F00" rx="5"/>
<path d="M155,228 Q175,218 195,228" stroke="#E65100" stroke-width="3" fill="none"/>
<!-- Veggies in basket -->
<circle cx="165" cy="228" r="8" fill="#EF5350"/>
<circle cx="180" cy="226" r="7" fill="#FF8F00"/>
<circle cx="194" cy="228" r="7" fill="#FFD93D"/>
<!-- Arms -->
<path d="M184,210 L165,232" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
</svg>`,

  // 4 — Final de tarde — sol se pondo na fazenda
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("f4sky","#FFB347","#FFE0A0")}
<circle cx="200" cy="295" r="90" fill="#FFD93D" opacity="0.4"/>
<circle cx="200" cy="295" r="65" fill="#FFE566" opacity="0.5"/>
${cloud(80, 60, 0.8)}
${cloud(300, 52, 0.75)}
${ground("f4g","#7BC23A","#4E9820",235)}
<ellipse cx="200" cy="275" rx="205" ry="55" fill="#6DAE30" opacity="0.5"/>
<!-- FARM SCENE silhouette -->
<!-- Big barn -->
<rect x="240" y="152" width="145" height="105" fill="#BF360C"/>
<polygon points="240,152 385,152 312,100" fill="#8D2605"/>
<rect x="295" y="208" width="44" height="49" fill="#6D4C41"/>
<circle cx="317" cy="232" r="3" fill="#FFD54F"/>
<rect x="254" y="168" width="26" height="20" fill="#90CAF9" opacity="0.7" rx="3"/>
<rect x="350" y="168" width="26" height="20" fill="#90CAF9" opacity="0.7" rx="3"/>
<!-- Windmill -->
<rect x="30" y="140" width="10" height="110" fill="#BCAAA4"/>
<circle cx="35" cy="140" r="6" fill="#90A4AE"/>
<!-- Windmill blades -->
<rect x="35" y="105" width="6" height="38" fill="#CFD8DC" rx="2" transform="rotate(0,38,140)"/>
<rect x="35" y="105" width="6" height="38" fill="#CFD8DC" rx="2" transform="rotate(90,38,140)"/>
<rect x="35" y="105" width="6" height="38" fill="#B0BEC5" rx="2" transform="rotate(45,38,140)"/>
<rect x="35" y="105" width="6" height="38" fill="#B0BEC5" rx="2" transform="rotate(135,38,140)"/>
<!-- Sunflowers -->
${roundTree(165, 230, 55, "#6D4C41", "#FDD835", "#FFE57F")}
<ellipse cx="165" cy="170" rx="25" ry="18" fill="#FDD835"/>
<circle cx="165" cy="172" rx="12" ry="12" fill="#5D4037"/>
${roundTree(193, 232, 52, "#6D4C41", "#FDD835", "#FFE57F")}
<ellipse cx="193" cy="176" rx="22" ry="16" fill="#FDD835"/>
<circle cx="193" cy="178" rx="10" ry="10" fill="#5D4037"/>
<!-- Animals going home -->
<!-- Duck family -->
<ellipse cx="88" cy="250" rx="16" ry="10" fill="#FFD93D"/>
<circle cx="98" cy="244" r="8" fill="#FFD93D"/>
<polygon points="104,245 112,247 104,249" fill="#FF8F00"/>
<circle cx="100" cy="243" r="3" fill="#2E3440"/>
<ellipse cx="72" cy="254" rx="12" ry="8" fill="#FFD93D"/>
<circle cx="80" cy="249" r="6" fill="#FFD93D"/>
</svg>`,

  // 5 — Festa da colheita! (celebração)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("f5sky","#FFD580","#FFF3CC")}
${sun(200, 45, 32, "#FFE566")}
${cloud(80, 58, 0.8)}
${cloud(330, 62, 0.75)}
${ground("f5g","#88CC5A","#4E9A28",230)}
<!-- Festive bunting/flags -->
<line x1="40" y1="80" x2="360" y2="80" stroke="#795548" stroke-width="2"/>
<polygon points="60,80 80,110 40,110" fill="#EF5350" opacity="0.9"/>
<polygon points="100,80 120,110 80,110" fill="#FFD93D" opacity="0.9"/>
<polygon points="140,80 160,110 120,110" fill="#4CAF50" opacity="0.9"/>
<polygon points="180,80 200,110 160,110" fill="#2196F3" opacity="0.9"/>
<polygon points="220,80 240,110 200,110" fill="#FF9800" opacity="0.9"/>
<polygon points="260,80 280,110 240,110" fill="#E91E63" opacity="0.9"/>
<polygon points="300,80 320,110 280,110" fill="#9C27B0" opacity="0.9"/>
<polygon points="340,80 360,110 320,110" fill="#4CAF50" opacity="0.9"/>
<!-- Big harvest table -->
<rect x="80" y="225" width="240" height="16" fill="#8D6E63" rx="5"/>
<rect x="95" y="238" width="8" height="20" fill="#795548"/>
<rect x="297" y="238" width="8" height="20" fill="#795548"/>
<!-- Food on table -->
<ellipse cx="130" cy="222" rx="18" ry="10" fill="#EF5350"/>
<ellipse cx="130" cy="220" rx="15" ry="8" fill="#F44336"/>
<circle cx="130" cy="218" r="5" fill="#5D4037"/>
<ellipse cx="170" cy="220" rx="15" ry="9" fill="#FF9800"/>
<ellipse cx="200" cy="218" rx="20" ry="8" fill="#FFD93D"/>
<ellipse cx="235" cy="220" rx="16" ry="9" fill="#4CAF50"/>
<ellipse cx="268" cy="222" rx="14" ry="8" fill="#EF5350"/>
<!-- Kid characters celebrating -->
<!-- Kid 1 -->
<circle cx="130" cy="180" r="16" fill="#FFCC80"/>
<rect x="120" y="194" width="22" height="26" fill="#EF5350" rx="5"/>
<circle cx="123" cy="181" r="3.5" fill="#2E3440"/>
<circle cx="136" cy="181" r="3.5" fill="#2E3440"/>
<path d="M123,190 Q130,196 136,190" stroke="#C74E00" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="119" cy="186" r="4" fill="#FFB3BA" opacity="0.6"/>
<circle cx="141" cy="186" r="4" fill="#FFB3BA" opacity="0.6"/>
<!-- Arms up in celebration -->
<path d="M120,200 L105,180" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
<path d="M142,200 L158,180" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
<!-- Confetti -->
<rect x="155" y="140" width="8" height="5" fill="#EF5350" rx="1" transform="rotate(30,159,142)"/>
<rect x="200" y="130" width="8" height="5" fill="#FFD93D" rx="1" transform="rotate(-20,204,132)"/>
<rect x="245" y="140" width="8" height="5" fill="#4CAF50" rx="1" transform="rotate(45,249,142)"/>
<rect x="175" y="152" width="6" height="4" fill="#2196F3" rx="1" transform="rotate(15,178,154)"/>
<rect x="225" y="148" width="6" height="4" fill="#E91E63" rx="1" transform="rotate(-35,228,150)"/>
<!-- Kid 2 -->
<circle cx="270" cy="180" r="16" fill="#FFCC80"/>
<rect x="260" y="194" width="22" height="26" fill="#1565C0" rx="5"/>
<circle cx="263" cy="181" r="3.5" fill="#2E3440"/>
<circle cx="277" cy="181" r="3.5" fill="#2E3440"/>
<path d="M263,190 Q270,196 277,190" stroke="#C74E00" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="259" cy="186" r="4" fill="#FFB3BA" opacity="0.6"/>
<circle cx="281" cy="186" r="4" fill="#FFB3BA" opacity="0.6"/>
<path d="M260,200 L245,178" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
<path d="M282,200 L296,178" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
</svg>`,
];

// ──────────────────────────────────────────────────────────────────────────────
// PRINCESAS — 6 unique scenes
// ──────────────────────────────────────────────────────────────────────────────
const princesasScenes: string[] = [

  // 0 — Princesa na torre do castelo, amanhecer
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("p0sky","#FFD6E8","#FFF0F5")}
${sun(340, 55, 28, "#FFE566")}
${cloud(110, 55, 0.85)}
${cloud(280, 68, 0.7)}
${ground("p0g","#88CC5A","#4E9A28",248)}
<!-- Castle towers -->
<rect x="0" y="130" width="68" height="170" fill="#B0BEC5"/>
<rect x="2" y="132" width="64" height="168" fill="#CFD8DC"/>
<rect x="0" y="108" width="20" height="30" fill="#B0BEC5"/>
<rect x="24" y="108" width="20" height="30" fill="#B0BEC5"/>
<rect x="48" y="108" width="20" height="30" fill="#B0BEC5"/>
<rect x="8" y="140" width="20" height="16" fill="#90CAF9" opacity="0.8" rx="3"/>
<rect x="40" y="140" width="20" height="16" fill="#90CAF9" opacity="0.8" rx="3"/>
<!-- Center main tower (where princess is) -->
<rect x="120" y="85" width="160" height="215" fill="#B0BEC5"/>
<rect x="124" y="88" width="152" height="212" fill="#CFD8DC"/>
<rect x="120" y="60" width="35" height="35" fill="#B0BEC5"/>
<rect x="163" y="60" width="34" height="35" fill="#B0BEC5"/>
<rect x="205" y="60" width="35" height="35" fill="#B0BEC5"/>
<rect x="247" y="60" width="33" height="35" fill="#B0BEC5"/>
<polygon points="200,60 120,60 200,18" fill="#E91E63"/>
<polygon points="200,60 280,60 200,18" fill="#C2185B"/>
<circle cx="200" cy="14" r="6" fill="#FFD93D"/>
<!-- Princess at tower window -->
<rect x="160" y="115" width="80" height="65" fill="#90CAF9" opacity="0.8" rx="8"/>
<rect x="162" y="117" width="76" height="63" fill="#B3E5FC" rx="6"/>
${princess(200, 165)}
<!-- Right tower -->
<rect x="332" y="140" width="68" height="160" fill="#B0BEC5"/>
<rect x="334" y="142" width="64" height="158" fill="#CFD8DC"/>
<rect x="332" y="118" width="20" height="30" fill="#B0BEC5"/>
<rect x="356" y="118" width="20" height="30" fill="#B0BEC5"/>
<rect x="380" y="118" width="20" height="30" fill="#B0BEC5"/>
<!-- Flower bushes at base -->
<ellipse cx="80" cy="252" rx="30" ry="18" fill="#E91E63" opacity="0.8"/>
<ellipse cx="80" cy="248" rx="25" ry="14" fill="#F06292"/>
<ellipse cx="310" cy="252" rx="30" ry="18" fill="#E91E63" opacity="0.8"/>
<ellipse cx="310" cy="248" rx="25" ry="14" fill="#F06292"/>
</svg>`,

  // 1 — Jardim mágico de flores
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("p1sky","#FFDDE8","#FFF5FA")}
${sun(55, 55, 28, "#FFE566")}
${cloud(240, 50, 0.9)}
${ground("p1g","#8BCE45","#4E9A28",238)}
<!-- Rose bushes -->
<rect x="18" y="200" width="10" height="50" fill="#388E3C" rx="4"/>
<ellipse cx="23" cy="192" rx="28" ry="22" fill="#E91E63" opacity="0.85"/>
<ellipse cx="23" cy="188" rx="22" ry="18" fill="#F06292"/>
<ellipse cx="23" cy="184" rx="16" ry="13" fill="#FCE4EC"/>
<rect x="350" y="200" width="10" height="50" fill="#388E3C" rx="4"/>
<ellipse cx="355" cy="192" rx="28" ry="22" fill="#E91E63" opacity="0.85"/>
<ellipse cx="355" cy="188" rx="22" ry="18" fill="#F06292"/>
<ellipse cx="355" cy="184" rx="16" ry="13" fill="#FCE4EC"/>
<!-- Colorful flowers all around -->
${flower(75, 240, "#FF6BA8", 9)}
${flower(92, 244, "#FFD93D", 8)}
${flower(108, 238, "#A78BFA", 9)}
${flower(290, 240, "#FF6BA8", 8)}
${flower(308, 244, "#5EBF8A", 9)}
${flower(325, 238, "#FFD93D", 8)}
<!-- Tall magical flowers -->
<rect x="155" y="220" width="6" height="35" fill="#388E3C" rx="2"/>
<circle cx="158" cy="214" r="14" fill="#E91E63" opacity="0.9"/>
<circle cx="158" cy="212" r="10" fill="#F48FB1"/>
<rect x="238" y="222" width="6" height="33" fill="#388E3C" rx="2"/>
<circle cx="241" cy="216" r="14" fill="#CE93D8" opacity="0.9"/>
<circle cx="241" cy="214" r="10" fill="#E1BEE7"/>
<!-- Princess walking in garden -->
${princess(200, 240)}
<!-- Butterflies -->
<path d="M260,175 Q268,165 276,175 Q268,185 260,175" fill="#CE93D8"/>
<path d="M260,175 Q268,185 276,175" fill="#F3E5F5" opacity="0.8"/>
<circle cx="268" cy="175" r="2" fill="#7B1FA2"/>
<path d="M130,165 Q138,155 146,165 Q138,175 130,165" fill="#FFD93D"/>
<path d="M130,165 Q138,175 146,165" fill="#FFEE58" opacity="0.8"/>
<circle cx="138" cy="165" r="2" fill="#F57F17"/>
</svg>`,

  // 2 — Floresta encantada
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("p2sky","#6A1B9A","#CE93D8")}
<!-- Magical forest dark background -->
<ellipse cx="50" cy="200" rx="100" ry="150" fill="#4A148C" opacity="0.8"/>
<ellipse cx="350" cy="200" rx="100" ry="150" fill="#4A148C" opacity="0.8"/>
<!-- Magical light rays through trees -->
<path d="M180,0 L155,260" stroke="#FFE566" stroke-width="22" opacity="0.08"/>
<path d="M220,0 L210,260" stroke="#FFE566" stroke-width="14" opacity="0.07"/>
<path d="M250,0 L265,260" stroke="#CE93D8" stroke-width="16" opacity="0.08"/>
${ground("p2g","#4A148C","#2D0A5A",242)}
<!-- Glowing mushrooms -->
<ellipse cx="88" cy="248" rx="16" ry="8" fill="#E91E63" opacity="0.85"/>
<rect x="82" y="238" width="12" height="14" fill="#FCE4EC" rx="3"/>
<circle cx="80" cy="244" r="3" fill="white" opacity="0.7"/>
<circle cx="92" cy="240" r="3" fill="white" opacity="0.7"/>
<ellipse cx="318" cy="248" rx="16" ry="8" fill="#FF6BA8" opacity="0.85"/>
<rect x="312" y="238" width="12" height="14" fill="#FCE4EC" rx="3"/>
<!-- Magical trees (dark with glowing leaves) -->
<rect x="22" y="155" width="18" height="115" fill="#4A148C" rx="6"/>
<circle cx="31" cy="145" r="45" fill="#6A1B9A" opacity="0.8"/>
<circle cx="31" cy="135" r="35" fill="#7B1FA2" opacity="0.9"/>
<!-- Glowing dots on trees (fireflies) -->
<circle cx="48" cy="148" r="3.5" fill="#FFE566" opacity="0.9"/>
<circle cx="62" cy="165" r="3" fill="#78CE60" opacity="0.8"/>
<circle cx="338" cy="152" r="3.5" fill="#FFE566" opacity="0.9"/>
<circle cx="325" cy="170" r="3" fill="#CE93D8" opacity="0.8"/>
<!-- Princess walking confidently -->
${princess(200, 244)}
<!-- Magical sparkles around her -->
<circle cx="155" cy="195" r="3" fill="#FFD93D" opacity="0.9"/>
<circle cx="248" cy="192" r="3" fill="#FFD93D" opacity="0.9"/>
<circle cx="165" cy="218" r="2.5" fill="#CE93D8" opacity="0.8"/>
<circle cx="240" cy="215" r="2.5" fill="#CE93D8" opacity="0.8"/>
</svg>`,

  // 3 — Dragão amigo! (encontro mágico)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("p3sky","#FFC8E0","#FFE8F2")}
${sun(55, 55, 26, "#FFE566")}
${cloud(280, 52, 0.85)}
${ground("p3g","#88CC5A","#4E9A28",238)}
${roundTree(22, 225, 80, "#7B5030", "#388A14", "#4CAA24")}
${roundTree(355, 225, 85, "#7B5030", "#388A14", "#4CAA24")}
<!-- CUTE FRIENDLY DRAGON (right side) -->
<!-- Dragon tail -->
<path d="M348,255 Q368,240 378,218 Q382,200 370,195" stroke="#66BB6A" stroke-width="18" fill="none" stroke-linecap="round"/>
<path d="M368,192 Q376,182 370,175" stroke="#66BB6A" stroke-width="10" fill="none" stroke-linecap="round"/>
<polygon points="365,172 370,158 380,170" fill="#4CAF50"/>
<!-- Dragon body -->
<ellipse cx="320" cy="240" rx="45" ry="34" fill="#66BB6A"/>
<ellipse cx="318" cy="234" rx="38" ry="28" fill="#81C784"/>
<!-- Dragon belly -->
<ellipse cx="318" cy="244" rx="25" ry="18" fill="#C8E6C9"/>
<!-- Dragon neck+head -->
<ellipse cx="308" cy="202" rx="24" ry="28" fill="#66BB6A"/>
<ellipse cx="300" cy="180" rx="28" ry="24" fill="#66BB6A"/>
<!-- Dragon snout -->
<ellipse cx="282" cy="186" rx="14" ry="9" fill="#81C784"/>
<circle cx="278" cy="183" r="3.5" fill="#2E7D32" opacity="0.6"/>
<circle cx="286" cy="183" r="3.5" fill="#2E7D32" opacity="0.6"/>
<!-- Dragon mouth - BIG SMILE -->
<path d="M278,192 Q290,202 302,196" stroke="#2E7D32" stroke-width="3" fill="none" stroke-linecap="round"/>
<!-- Dragon eyes (huge cute) -->
<circle cx="296" cy="174" r="11" fill="white"/>
<circle cx="297" cy="175" r="7" fill="#1B5E20"/>
<circle cx="299" cy="173" r="3" fill="white"/>
<!-- Dragon horns (cute round) -->
<ellipse cx="292" cy="158" rx="6" ry="10" fill="#4CAF50" transform="rotate(-15,292,158)"/>
<ellipse cx="310" cy="155" rx="6" ry="10" fill="#4CAF50" transform="rotate(15,310,155)"/>
<!-- Dragon wings folded -->
<path d="M340,220 Q370,195 380,165 Q365,158 350,180 Q340,200 338,218" fill="#A5D6A7" opacity="0.8"/>
<!-- Small fire puff (friendly) -->
<ellipse cx="262" cy="185" rx="12" ry="8" fill="#FF8F00" opacity="0.7"/>
<ellipse cx="254" cy="180" rx="8" ry="6" fill="#FFD93D" opacity="0.8"/>
<!-- Princess (left, waving) -->
${princess(135, 240)}
<!-- Hearts between them -->
<path d="M182,195 Q186,190 190,195 Q186,202 182,195" fill="#FF6BA8" opacity="0.9"/>
<path d="M192,188 Q196,183 200,188 Q196,195 192,188" fill="#FF6BA8" opacity="0.7"/>
</svg>`,

  // 4 — Grande aventura (princesa heróica)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("p4sky","#87CEEB","#C8E8FF")}
${sun(340, 52, 26, "#FFD93D")}
${cloud(100, 50, 0.9)}
<!-- Mountain landscape -->
<polygon points="0,250 120,120 240,250" fill="#7CB342" opacity="0.7"/>
<polygon points="120,250 260,100 390,250" fill="#558B2F" opacity="0.8"/>
<polygon points="160,250 300,125 400,250" fill="#7CB342" opacity="0.6"/>
${ground("p4g","#7BC23A","#4E9820",242)}
<!-- Winding path -->
<path d="M50,300 Q120,265 200,260 Q280,255 350,280" fill="none" stroke="#D4A04A" stroke-width="12" opacity="0.6" stroke-linecap="round"/>
<!-- Princess with determination! -->
${princess(200, 242)}
<!-- Magic wand/staff -->
<line x1="152" y1="180" x2="135" y2="228" stroke="#8B4513" stroke-width="5" stroke-linecap="round"/>
<circle cx="150" cy="175" r="10" fill="#FFD93D"/>
<circle cx="150" cy="175" r="7" fill="#FFE566"/>
<!-- Sparkles from wand -->
<circle cx="130" cy="162" r="3" fill="#FFD93D" opacity="0.9"/>
<circle cx="140" cy="155" r="2.5" fill="#FF6BA8" opacity="0.8"/>
<circle cx="125" cy="175" r="2" fill="#CE93D8" opacity="0.8"/>
${roundTree(28, 228, 78, "#7B5030", "#388A14", "#4CAA24")}
${roundTree(355, 225, 82, "#7B5030", "#388A14", "#4CAA24")}
${flower(100, 244, "#FF6BA8", 7)}
${flower(290, 244, "#FFD93D", 7)}
</svg>`,

  // 5 — Castelo festivo! Celebração com fogos
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("p5sky","#1A0838","#3C0D6E")}
${stars()}
<!-- Fireworks -->
<circle cx="100" cy="80" r="3" fill="#FFD93D"/>
<path d="M100,80 L80,55 M100,80 L120,55 M100,80 L75,80 M100,80 L125,80 M100,80 L82,105 M100,80 L118,105 M100,80 L65,65 M100,80 L135,65" stroke="#FFD93D" stroke-width="2.5" opacity="0.8"/>
<circle cx="310" cy="65" r="3" fill="#FF6BA8"/>
<path d="M310,65 L290,40 M310,65 L330,40 M310,65 L285,65 M310,65 L335,65 M310,65 L292,90 M310,65 L328,90 M310,65 L275,50 M310,65 L345,50" stroke="#FF6BA8" stroke-width="2.5" opacity="0.8"/>
<circle cx="200" cy="50" r="3" fill="#A78BFA"/>
<path d="M200,50 L180,28 M200,50 L220,28 M200,50 L175,50 M200,50 L225,50 M200,50 L182,72 M200,50 L218,72" stroke="#A78BFA" stroke-width="2.5" opacity="0.8"/>
<!-- Castle silhouette -->
<rect x="0" y="158" width="80" height="142" fill="#1A0838"/>
<rect x="0" y="135" width="25" height="30" fill="#1A0838"/>
<rect x="28" y="135" width="25" height="30" fill="#1A0838"/>
<rect x="56" y="135" width="24" height="30" fill="#1A0838"/>
<rect x="320" y="158" width="80" height="142" fill="#1A0838"/>
<rect x="320" y="135" width="25" height="30" fill="#1A0838"/>
<rect x="348" y="135" width="25" height="30" fill="#1A0838"/>
<rect x="376" y="135" width="24" height="30" fill="#1A0838"/>
<rect x="108" y="130" width="184" height="170" fill="#1A0838"/>
<rect x="108" y="105" width="40" height="32" fill="#1A0838"/>
<rect x="155" y="105" width="35" height="32" fill="#1A0838"/>
<rect x="197" y="105" width="35" height="32" fill="#1A0838"/>
<rect x="239" y="105" width="35" height="32" fill="#1A0838"/>
<rect x="281" y="105" width="27" height="32" fill="#1A0838"/>
<polygon points="200,105 108,105 200,60" fill="#E91E63" opacity="0.9"/>
<polygon points="200,105 292,105 200,60" fill="#C2185B" opacity="0.9"/>
<!-- Lit windows warm -->
<rect x="140" y="160" width="28" height="22" fill="#FFD93D" opacity="0.8" rx="3"/>
<rect x="182" y="160" width="28" height="22" fill="#FFD93D" opacity="0.7" rx="3"/>
<rect x="232" y="160" width="28" height="22" fill="#FFE566" opacity="0.8" rx="3"/>
<!-- Princess in doorway -->
${princess(200, 265)}
<!-- Festive bunting from castle -->
<line x1="108" y1="130" x2="292" y2="130" stroke="#C62828" stroke-width="2"/>
<polygon points="130,130 148,152 112,152" fill="#FFD93D" opacity="0.9"/>
<polygon points="165,130 183,152 147,152" fill="#E91E63" opacity="0.9"/>
<polygon points="200,130 218,152 182,152" fill="#4CAF50" opacity="0.9"/>
<polygon points="235,130 253,152 217,152" fill="#2196F3" opacity="0.9"/>
<polygon points="270,130 288,152 252,152" fill="#FFD93D" opacity="0.9"/>
</svg>`,
];

// ──────────────────────────────────────────────────────────────────────────────
// SUPER-HEROIS — 6 unique scenes
// ──────────────────────────────────────────────────────────────────────────────
const superHeroisScenes: string[] = [

  // 0 — Herói no topo da cidade, amanhecer
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("h0sky","#1A1A2E","#CC5500")}
<!-- City skyline silhouette -->
<rect x="0" y="155" width="40" height="145" fill="#111122"/>
<rect x="5" y="140" width="30" height="20" fill="#111122"/>
<rect x="42" y="175" width="30" height="125" fill="#111122"/>
<rect x="75" y="145" width="45" height="155" fill="#111122"/>
<rect x="80" y="130" width="10" height="20" fill="#111122"/>
<rect x="130" y="160" width="50" height="140" fill="#111122"/>
<rect x="192" y="170" width="35" height="130" fill="#111122"/>
<rect x="240" y="150" width="55" height="150" fill="#111122"/>
<rect x="250" y="130" width="10" height="25" fill="#111122"/>
<rect x="308" y="165" width="42" height="135" fill="#111122"/>
<rect x="362" y="145" width="38" height="155" fill="#111122"/>
<!-- Windows lit in buildings -->
<rect x="10" y="162" width="6" height="5" fill="#FFE566" opacity="0.5"/>
<rect x="20" y="162" width="6" height="5" fill="#FFE566" opacity="0.5"/>
<rect x="82" y="152" width="7" height="5" fill="#FFE566" opacity="0.6"/>
<rect x="93" y="152" width="7" height="5" fill="#FFE566" opacity="0.4"/>
<rect x="82" y="165" width="7" height="5" fill="#FFE566" opacity="0.5"/>
<rect x="244" y="158" width="7" height="5" fill="#FFE566" opacity="0.6"/>
<rect x="258" y="158" width="7" height="5" fill="#FFE566" opacity="0.5"/>
<!-- Hero standing on rooftop, arms crossed -->
${superhero(200, 145, "right")}
<!-- Hero's eyes glow / sunrise reflection -->
<circle cx="218" cy="95" r="4" fill="#FFD93D" opacity="0.5"/>
</svg>`,

  // 1 — Voando sobre a cidade!
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("h1sky","#B8D8FF","#E8F4FF")}
${sun(340, 52, 26, "#FFD93D")}
${cloud(90, 55, 0.9)}
${cloud(310, 65, 0.8)}
<!-- More clouds for flying scene -->
<ellipse cx="200" cy="90" rx="65" ry="28" fill="white" opacity="0.85"/>
<ellipse cx="170" cy="82" rx="42" ry="20" fill="white" opacity="0.9"/>
<ellipse cx="235" cy="80" rx="38" ry="18" fill="white" opacity="0.85"/>
<!-- City below (small) -->
<rect x="0" y="240" width="40" height="60" fill="#9E9E9E"/>
<rect x="45" y="250" width="30" height="50" fill="#BDBDBD"/>
<rect x="80" y="232" width="50" height="68" fill="#9E9E9E"/>
<rect x="140" y="245" width="38" height="55" fill="#BDBDBD"/>
<rect x="200" y="240" width="42" height="60" fill="#9E9E9E"/>
<rect x="255" y="248" width="35" height="52" fill="#BDBDBD"/>
<rect x="305" y="235" width="50" height="65" fill="#9E9E9E"/>
<rect x="360" y="245" width="40" height="55" fill="#BDBDBD"/>
<!-- HERO FLYING (arms forward, cape streaming) -->
${superhero(200, 155, "right")}
<!-- Speed lines behind hero -->
<path d="M100,130 L155,148" stroke="#A29BFE" stroke-width="3" opacity="0.4" stroke-linecap="round"/>
<path d="M90,155 L152,158" stroke="#A29BFE" stroke-width="4" opacity="0.35" stroke-linecap="round"/>
<path d="M95,178 L153,168" stroke="#A29BFE" stroke-width="3" opacity="0.3" stroke-linecap="round"/>
</svg>`,

  // 2 — Descobrindo o problema (criança precisa de ajuda)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("h2sky","#87CEEB","#D6EEFF")}
${sun(55, 55, 26, "#FFD93D")}
${cloud(260, 52, 0.85)}
${ground("h2g","#78BB44","#4A8A20",238)}
<!-- City street -->
<rect x="0" y="250" width="400" height="50" fill="#9E9E9E" opacity="0.8"/>
<line x1="200" y1="250" x2="200" y2="300" stroke="#FFD93D" stroke-width="3" opacity="0.5" stroke-dasharray="12,8"/>
<!-- Buildings -->
<rect x="0" y="140" width="80" height="160" fill="#ECEFF1"/>
<rect x="2" y="142" width="76" height="158" fill="#CFD8DC"/>
<rect x="8" y="155" width="14" height="12" fill="#B3E5FC" rx="2"/>
<rect x="26" y="155" width="14" height="12" fill="#B3E5FC" rx="2"/>
<rect x="44" y="155" width="14" height="12" fill="#B3E5FC" rx="2"/>
<rect x="8" y="175" width="14" height="12" fill="#B3E5FC" rx="2"/>
<rect x="26" y="175" width="14" height="12" fill="#FFD93D" opacity="0.8" rx="2"/>
<rect x="310" y="148" width="90" height="152" fill="#ECEFF1"/>
<rect x="312" y="150" width="86" height="150" fill="#CFD8DC"/>
<rect x="320" y="165" width="12" height="10" fill="#B3E5FC" rx="2"/>
<rect x="338" y="165" width="12" height="10" fill="#B3E5FC" rx="2"/>
<rect x="356" y="165" width="12" height="10" fill="#B3E5FC" rx="2"/>
<!-- Hero spots trouble (!) -->
${superhero(145, 230, "right")}
<!-- Kitten stuck in tree -->
${roundTree(305, 228, 85, "#7B5030", "#388A14", "#4CAA24")}
<!-- Cat in tree -->
<ellipse cx="302" cy="148" rx="12" ry="10" fill="#FF8C42"/>
<circle cx="308" cy="143" r="8" fill="#FF8C42"/>
<polygon points="304,136 302,128 308,136" fill="#FF8C42"/>
<polygon points="312,136 310,128 316,136" fill="#FF8C42"/>
<circle cx="311" cy="143" r="3.5" fill="#2E3440"/>
<circle cx="312" cy="142" r="1.5" fill="white"/>
<!-- Crying droplets from cat -->
<ellipse cx="315" cy="150" rx="3" ry="4" fill="#64B5F6" opacity="0.8"/>
<!-- Exclamation from hero -->
<text x="175" y="195" font-family="Arial Rounded MT Bold, Arial" font-size="28" fill="#DC143C" font-weight="bold" opacity="0.9">!</text>
</svg>`,

  // 3 — Herói salva o dia!
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("h3sky","#B8D8FF","#DEEEFF")}
${sun(330, 55, 26, "#FFD93D")}
${cloud(100, 52, 0.85)}
${ground("h3g","#78BB44","#4A8A20",238)}
<!-- City background -->
<rect x="5" y="158" width="65" height="142" fill="#CFD8DC"/>
<rect x="330" y="150" width="65" height="150" fill="#CFD8DC"/>
<!-- Hero holding the cat safely -->
${superhero(200, 225, "right")}
<!-- Cat safe in arms -->
<ellipse cx="252" cy="185" rx="14" ry="11" fill="#FF8C42"/>
<circle cx="258" cy="180" r="9" fill="#FF8C42"/>
<polygon points="254,172 252,164 258,172" fill="#FF8C42"/>
<polygon points="262,172 260,164 266,172" fill="#FF8C42"/>
<circle cx="261" cy="180" r="4" fill="#2E3440"/>
<circle cx="262" cy="179" r="1.5" fill="white"/>
<!-- Happy cat smile -->
<path d="M255,186 Q261,190 267,186" stroke="#C74E00" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<!-- Crowd cheering (small figures) -->
<circle cx="65" cy="218" r="10" fill="#FFCC80"/>
<rect x="58" y="228" width="16" height="18" fill="#EF5350" rx="3"/>
<path d="M58,232 L48,222" stroke="#FFCC80" stroke-width="5" stroke-linecap="round"/>
<circle cx="335" cy="216" r="10" fill="#FFCC80"/>
<rect x="328" y="226" width="16" height="18" fill="#1565C0" rx="3"/>
<path d="M344,230 L355,220" stroke="#FFCC80" stroke-width="5" stroke-linecap="round"/>
<!-- Stars/celebration -->
<circle cx="150" cy="150" r="4" fill="#FFD93D"/>
<path d="M150,144 L152,150 M150,156 L152,150 M144,150 L152,150 M158,150 L152,150" stroke="#FFD93D" stroke-width="2"/>
<circle cx="252" cy="148" r="4" fill="#FF6BA8"/>
<path d="M252,142 L254,148 M252,154 L254,148 M246,148 L254,148 M260,148 L254,148" stroke="#FF6BA8" stroke-width="2"/>
</svg>`,

  // 4 — Time de super-heróis!
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("h4sky","#C8E8FF","#E8F6FF")}
${sun(200, 48, 30, "#FFE566")}
${cloud(80, 58, 0.8)}
${cloud(320, 62, 0.75)}
${ground("h4g","#88CC5A","#4E9A28",240)}
<!-- THREE HEROES standing together -->
<!-- Hero 1 (left, red) -->
${superhero(118, 242, "right")}
<!-- Hero 2 (center, blue — already drawn above) -->
${superhero(200, 238, "right")}
<!-- Hero 3 (right, green cape) -->
<g>
<!-- Cape green -->
<path d="M258,218 Q234,242 248,268" stroke="#2E7D32" stroke-width="16" stroke-linecap="round" fill="none"/>
<rect x="258" y="208" width="32" height="36" fill="#2E7D32" rx="8"/>
<polygon points="274,212} ${274},${204} ${268},${218}" fill="#FFD93D"/>
<path d="M270,208 L270,212" stroke="#FFD93D" stroke-width="2"/>
<!-- Green hero head -->
<circle cx="279" cy="190" r="18" fill="#FFCC80"/>
<rect x="262" y="185" width="26" height="10" fill="#2E7D32" rx="4"/>
<ellipse cx="270" cy="188" rx="4" ry="3.5" fill="white"/>
<ellipse cx="282" cy="188" rx="4" ry="3.5" fill="white"/>
<circle cx="271" cy="188" r="2" fill="#2E3440"/>
<circle cx="283" cy="188" r="2" fill="#2E3440"/>
<path d="M268,198 Q274,203 280,198" stroke="#C74E00" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<rect x="262" y="242" width="12" height="26" fill="#1B5E20" rx="5"/>
<rect x="276" y="242" width="12" height="26" fill="#1B5E20" rx="5"/>
<ellipse cx="268" cy="268" rx="9" ry="5" fill="#0A3A12"/>
<ellipse cx="282" cy="268" rx="9" ry="5" fill="#0A3A12"/>
<path d="M258,220 L245,205" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
<path d="M289,220 L302,206" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
</g>
<!-- Glow around heroes -->
<ellipse cx="200" cy="255" rx="110" ry="18" fill="#FFD93D" opacity="0.15"/>
<!-- Stars/symbols of power -->
<circle cx="80" cy="148" r="4" fill="#FFD93D" opacity="0.7"/>
<circle cx="320" cy="148" r="4" fill="#FF6BA8" opacity="0.7"/>
<circle cx="200" cy="138" r="4" fill="#A78BFA" opacity="0.7"/>
</svg>`,

  // 5 — Vitória e celebração!
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("h5sky","#FFD580","#FFF3CC")}
${sun(200, 50, 35, "#FFE566")}
${cloud(80, 60, 0.8)}
${cloud(330, 65, 0.75)}
${ground("h5g","#88CC5A","#4E9A28",240)}
<!-- Confetti rain -->
<rect x="60" y="48" width="10" height="7" fill="#EF5350" rx="2" transform="rotate(25,65,51)"/>
<rect x="120" y="35" width="10" height="7" fill="#FFD93D" rx="2" transform="rotate(-15,125,38)"/>
<rect x="180" y="42" width="10" height="7" fill="#4CAF50" rx="2" transform="rotate(40,185,45)"/>
<rect x="240" y="38" width="10" height="7" fill="#2196F3" rx="2" transform="rotate(-30,245,41)"/>
<rect x="300" y="50" width="10" height="7" fill="#E91E63" rx="2" transform="rotate(20,305,53)"/>
<rect x="350" y="40" width="10" height="7" fill="#9C27B0" rx="2" transform="rotate(-45,355,43)"/>
<rect x="90" y="85" width="8" height="6" fill="#FFD93D" rx="2" transform="rotate(35,94,88)"/>
<rect x="210" y="78" width="8" height="6" fill="#EF5350" rx="2" transform="rotate(-20,214,81)"/>
<rect x="310" y="82" width="8" height="6" fill="#4CAF50" rx="2" transform="rotate(50,314,85)"/>
<!-- Hero arms raised in victory -->
${superhero(200, 240, "right")}
<!-- Trophy -->
<rect x="182" y="275" width="36" height="10" fill="#FFB300" rx="4"/>
<rect x="187" y="262" width="26" height="14" fill="#FFD93D" rx="3"/>
<path d="M182,262 Q182,242 198,238 Q214,242 214,262" fill="#FFD93D"/>
<circle cx="198" cy="234" r="6" fill="#FF8F00"/>
<!-- Star burst -->
<circle cx="198" cy="145" r="6" fill="#FFD93D"/>
<path d="M198,135 L200,145 M198,155 L200,145 M188,145 L200,145 M210,145 L200,145 M190,137 L200,145 M206,137 L200,145 M190,153 L200,145 M206,153 L200,145" stroke="#FFD93D" stroke-width="3"/>
<!-- Cheering crowd -->
<circle cx="65" cy="220" r="11" fill="#FFCC80"/>
<rect x="57" y="230" width="18" height="20" fill="#E91E63" rx="4"/>
<path d="M57,235 L45,220" stroke="#FFCC80" stroke-width="6" stroke-linecap="round"/>
<path d="M75,235 L87,220" stroke="#FFCC80" stroke-width="6" stroke-linecap="round"/>
<circle cx="335" cy="218" r="11" fill="#FFCC80"/>
<rect x="327" y="228" width="18" height="20" fill="#1565C0" rx="4"/>
<path d="M327,233 L315,218" stroke="#FFCC80" stroke-width="6" stroke-linecap="round"/>
<path d="M345,233 L357,218" stroke="#FFCC80" stroke-width="6" stroke-linecap="round"/>
</svg>`,
];

// ──────────────────────────────────────────────────────────────────────────────
// NATUREZA — 6 unique scenes
// ──────────────────────────────────────────────────────────────────────────────
const naturezaScenes: string[] = [

  // 0 — Trilha na montanha, manhã
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("n0sky","#B0D8FF","#E8F6FF")}
${sun(55, 52, 28, "#FFE566")}
${cloud(260, 50, 0.9)}
<!-- Mountains (rounded, not scary) -->
<ellipse cx="120" cy="230" rx="180" ry="100" fill="#90A4AE" opacity="0.6"/>
<ellipse cx="320" cy="238" rx="160" ry="90" fill="#78909C" opacity="0.6"/>
<ellipse cx="200" cy="210" rx="150" ry="90" fill="#B0BEC5" opacity="0.7"/>
<!-- Snow caps (cute rounded) -->
<ellipse cx="200" cy="155" rx="35" ry="20" fill="white" opacity="0.85"/>
<ellipse cx="120" cy="168" rx="28" ry="16" fill="white" opacity="0.75"/>
${ground("n0g","#88CC5A","#4E9A28",240)}
<!-- Winding path up mountain -->
<path d="M50,300 Q120,275 180,265 Q230,255 280,242 Q330,230 380,220" fill="none" stroke="#D4A04A" stroke-width="10" opacity="0.6" stroke-linecap="round"/>
${roundTree(25, 228, 78, "#7B5030", "#388A14", "#4CAA24")}
${roundTree(355, 226, 82, "#7B5030", "#388A14", "#4CAA24")}
${flower(105, 242, "#FF6BA8", 7)}
${flower(290, 242, "#FFD93D", 7)}
<!-- Kid explorer on path -->
<circle cx="205" cy="218" r="16" fill="#FFCC80"/>
<path d="M191,212 Q205,200 219,212" fill="#6B3A00"/>
<!-- Explorer hat -->
<rect x="196" y="205" width="22" height="6" fill="#8B4513"/>
<rect x="191" y="201" width="32" height="8" fill="#A0522D" rx="3"/>
<circle cx="197" cy="220" r="3.5" fill="#2E3440"/>
<circle cx="213" cy="220" r="3.5" fill="#2E3440"/>
<circle cx="198" cy="219" r="1.4" fill="white"/>
<circle cx="214" cy="219" r="1.4" fill="white"/>
<path d="M197,228 Q205,233 213,228" stroke="#C74E00" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<circle cx="193" cy="224" r="4" fill="#FFB3BA" opacity="0.55"/>
<circle cx="217" cy="224" r="4" fill="#FFB3BA" opacity="0.55"/>
<rect x="195" y="232" width="20" height="26" fill="#795548" rx="5"/>
<!-- Walking stick -->
<line x1="220" y1="234" x2="232" y2="270" stroke="#6D4C41" stroke-width="4" stroke-linecap="round"/>
<!-- Arms -->
<path d="M197,238 L183,252" stroke="#FFCC80" stroke-width="7" stroke-linecap="round"/>
</svg>`,

  // 1 — Riacho borbulhante e pedrinhas
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("n1sky","#B8E0FF","#E4F6FF")}
${sun(340, 55, 26, "#FFE566")}
${cloud(100, 50, 0.85)}
${ground("n1g","#88CC5A","#4E9A28",242)}
<!-- SPARKLING STREAM -->
<path d="M0,270 Q60,255 120,268 Q200,282 280,265 Q340,252 400,268" fill="#64B5F6" opacity="0.75"/>
<path d="M0,265 Q80,248 160,262 Q240,278 320,260 Q360,250 400,262" fill="#42A5F5" opacity="0.6"/>
<path d="M0,275 Q100,260 200,272 Q300,285 400,272" fill="#90CAF9" opacity="0.4"/>
<!-- Water sparkles -->
<circle cx="80" cy="262" r="3" fill="white" opacity="0.6"/>
<circle cx="160" cy="268" r="2.5" fill="white" opacity="0.55"/>
<circle cx="240" cy="260" r="3" fill="white" opacity="0.6"/>
<circle cx="320" cy="265" r="2.5" fill="white" opacity="0.55"/>
<!-- Stepping stones -->
<ellipse cx="105" cy="264" rx="22" ry="12" fill="#8D6E63"/>
<ellipse cx="105" cy="262" rx="18" ry="9" fill="#A1887F"/>
<ellipse cx="200" cy="267" rx="22" ry="12" fill="#8D6E63"/>
<ellipse cx="200" cy="265" rx="18" ry="9" fill="#A1887F"/>
<ellipse cx="295" cy="263" rx="22" ry="12" fill="#8D6E63"/>
<ellipse cx="295" cy="261" rx="18" ry="9" fill="#A1887F"/>
<!-- Fish -->
<ellipse cx="148" cy="270" rx="14" ry="7" fill="#FF8C42" opacity="0.8"/>
<path d="M162,270 L170,264 M162,270 L170,276" stroke="#FF8C42" stroke-width="2.5" stroke-linecap="round"/>
<circle cx="150" cy="268" r="2.5" fill="#2E3440"/>
<!-- Frog on stone -->
<ellipse cx="200" cy="258" rx="10" ry="7" fill="#66BB6A"/>
<circle cx="204" cy="253" r="7" fill="#66BB6A"/>
<ellipse cx="200" cy="251" rx="6" ry="4" fill="#A5D6A7"/>
<circle cx="201" cy="252" r="2.5" fill="#1B5E20"/>
<circle cx="208" cy="252" r="2.5" fill="#1B5E20"/>
<path d="M201,257 Q205,260 210,258" stroke="#1B5E20" stroke-width="1.5" fill="none" stroke-linecap="round"/>
${roundTree(22, 230, 80, "#7B5030", "#388A14", "#4CAA24")}
${roundTree(358, 228, 84, "#7B5030", "#388A14", "#4CAA24")}
${flower(155, 244, "#FF6BA8", 7)}
${flower(250, 244, "#FFD93D", 7)}
<!-- Kid crossing stones -->
<circle cx="142" cy="233" r="15" fill="#FFCC80"/>
<path d="M129,227 Q142,216 155,227" fill="#8B4513"/>
<rect x="134" y="222" width="18" height="5" fill="#8B4513"/>
<circle cx="136" cy="234" r="3" fill="#2E3440"/>
<circle cx="149" cy="234" r="3" fill="#2E3440"/>
<circle cx="137" cy="233" r="1.3" fill="white"/>
<circle cx="150" cy="233" r="1.3" fill="white"/>
<path d="M136,241 Q142,246 149,241" stroke="#C74E00" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<rect x="134" y="246" width="18" height="22" fill="#4CAF50" rx="5"/>
<path d="M134,252 L122,265" stroke="#FFCC80" stroke-width="6" stroke-linecap="round"/>
<path d="M152,252 L163,265" stroke="#FFCC80" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  // 2 — Prado de flores coloridas
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("n2sky","#C8EAFF","#EEF8FF")}
${sun(55, 52, 28, "#FFE566")}
${cloud(260, 50, 0.9)}
${cloud(360, 68, 0.7)}
${ground("n2g","#88CC5A","#4E9A28",232)}
<ellipse cx="200" cy="268" rx="205" ry="55" fill="#78BB42" opacity="0.5"/>
<!-- LOTS OF FLOWERS -->
${flower(55, 232, "#FF6BA8", 9)}
${flower(75, 236, "#FFD93D", 8)}
${flower(95, 230, "#A78BFA", 9)}
${flower(115, 234, "#5EBF8A", 8)}
${flower(135, 230, "#FF6BA8", 9)}
${flower(155, 236, "#FFD93D", 8)}
${flower(240, 232, "#A78BFA", 9)}
${flower(260, 236, "#FF6BA8", 8)}
${flower(280, 230, "#FFD93D", 9)}
${flower(300, 234, "#5EBF8A", 8)}
${flower(320, 230, "#A78BFA", 9)}
${flower(340, 236, "#FF6BA8", 8)}
<!-- Tall wildflowers -->
<rect x="195" y="195" width="5" height="45" fill="#388E3C" rx="2"/>
<circle cx="198" cy="189" r="14" fill="#FF6BA8" opacity="0.9"/>
<circle cx="198" cy="187" r="10" fill="#FF9AC5"/>
<rect x="210" y="200" width="5" height="38" fill="#388E3C" rx="2"/>
<circle cx="213" cy="194" r="12" fill="#A78BFA" opacity="0.9"/>
<circle cx="213" cy="192" r="8" fill="#C4B5FF"/>
<!-- Kid in flower field -->
<circle cx="190" cy="200" r="17" fill="#FFCC80"/>
<path d="M175,194 Q190,182 205,194" fill="#C74E00"/>
<circle cx="183" cy="202" r="3.5" fill="#2E3440"/>
<circle cx="197" cy="202" r="3.5" fill="#2E3440"/>
<circle cx="184" cy="201" r="1.4" fill="white"/>
<circle cx="198" cy="201" r="1.4" fill="white"/>
<path d="M183,210 Q190,215 197,210" stroke="#C74E00" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="179" cy="206" r="4" fill="#FFB3BA" opacity="0.6"/>
<circle cx="201" cy="206" r="4" fill="#FFB3BA" opacity="0.6"/>
<rect x="180" y="215" width="20" height="25" fill="#E91E63" rx="5"/>
<path d="M182,222 L170,236" stroke="#FFCC80" stroke-width="7" stroke-linecap="round"/>
<path d="M198,222 L212,236" stroke="#FFCC80" stroke-width="7" stroke-linecap="round"/>
<!-- Butterfly landing on flower -->
<path d="M252,175 Q260,165 268,175 Q260,185 252,175" fill="#FF9F43"/>
<path d="M252,175 Q260,185 268,175" fill="#FFCA28" opacity="0.8"/>
<circle cx="260" cy="174" r="2" fill="#7B5030"/>
${roundTree(28, 222, 75, "#7B5030", "#388A14", "#4CAA24")}
${roundTree(356, 220, 78, "#7B5030", "#388A14", "#4CAA24")}
</svg>`,

  // 3 — Chuva! Debaixo das folhas grandes
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("n3sky","#78909C","#B0BEC5")}
<!-- Rain clouds -->
<ellipse cx="80" cy="35" rx="80" ry="35" fill="#607D8B" opacity="0.95"/>
<ellipse cx="55" cy="28" rx="55" ry="28" fill="#546E7A" opacity="0.9"/>
<ellipse cx="120" cy="28" rx="50" ry="26" fill="#455A64" opacity="0.85"/>
<ellipse cx="260" cy="42" rx="90" ry="38" fill="#607D8B" opacity="0.9"/>
<ellipse cx="310" cy="32" rx="65" ry="30" fill="#546E7A" opacity="0.85"/>
<ellipse cx="380" cy="48" rx="50" ry="28" fill="#607D8B" opacity="0.8"/>
<!-- Rain streaks -->
<line x1="35" y1="72" x2="29" y2="105" stroke="#90CAF9" stroke-width="2" opacity="0.55"/>
<line x1="65" y1="80" x2="59" y2="113" stroke="#90CAF9" stroke-width="2" opacity="0.5"/>
<line x1="22" y1="90" x2="16" y2="123" stroke="#90CAF9" stroke-width="1.5" opacity="0.45"/>
<line x1="350" y1="82" x2="344" y2="115" stroke="#90CAF9" stroke-width="2" opacity="0.55"/>
<line x1="375" y1="95" x2="369" y2="128" stroke="#90CAF9" stroke-width="2" opacity="0.5"/>
<line x1="130" y1="78" x2="124" y2="111" stroke="#90CAF9" stroke-width="1.5" opacity="0.4"/>
<line x1="270" y1="82" x2="264" y2="115" stroke="#90CAF9" stroke-width="2" opacity="0.4"/>
${ground("n3g","#6AAE38","#428A14",242)}
<!-- BIG TROPICAL LEAF as shelter -->
<path d="M80,148 Q200,88 320,148 Q240,152 200,200 Q160,152 80,148" fill="#2E7D32" opacity="0.9"/>
<path d="M80,148 Q200,95 320,148 Q240,148 200,196 Q160,148 80,148" fill="#388E3C" opacity="0.8"/>
<!-- Leaf veins -->
<path d="M200,196 L200,100" stroke="#1B5E20" stroke-width="3" opacity="0.6"/>
<path d="M200,145 L130,125" stroke="#1B5E20" stroke-width="2" opacity="0.5"/>
<path d="M200,145 L270,125" stroke="#1B5E20" stroke-width="2" opacity="0.5"/>
<!-- Animals sheltering under leaf -->
<!-- Fox (left) -->
${fox(158, 245, "right")}
<!-- Squirrel right (simplified) -->
<path d="M258,235 Q275,225 280,210 Q285,198 278,195" stroke="#FF8C42" stroke-width="10" fill="none" stroke-linecap="round"/>
<circle cx="278" cy="193" r="5" fill="#FF8C42"/>
<ellipse cx="265" cy="240" rx="20" ry="14" fill="#FF8C42"/>
<ellipse cx="265" cy="235" rx="16" ry="11" fill="#FFAB40"/>
<circle cx="270" cy="232" r="8" fill="#FF8C42"/>
<circle cx="276" cy="230" r="4" fill="#2E3440"/>
<circle cx="277" cy="229" r="1.5" fill="white"/>
<!-- Rain drops on leaf -->
<circle cx="145" cy="152" r="3" fill="#64B5F6" opacity="0.7"/>
<circle cx="200" cy="140" r="3" fill="#64B5F6" opacity="0.7"/>
<circle cx="255" cy="150" r="3" fill="#64B5F6" opacity="0.7"/>
</svg>`,

  // 4 — Encontrando um pássaro colorido
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("n4sky","#B0D8FF","#E2F4FF")}
${sun(340, 52, 26, "#FFE566")}
${cloud(100, 50, 0.85)}
${ground("n4g","#88CC5A","#4E9A28",238)}
<ellipse cx="200" cy="270" rx="205" ry="50" fill="#78BB42" opacity="0.5"/>
${roundTree(22, 225, 82, "#7B5030", "#388A14", "#4CAA24")}
<!-- Special big colorful tree (right) — bird's home -->
<rect x="288" y="148" width="16" height="110" fill="#7B5030" rx="6"/>
<circle cx="296" cy="138" r="52" fill="#2E7D32"/>
<circle cx="296" cy="128" r="42" fill="#388E3C"/>
<circle cx="296" cy="118" r="32" fill="#43A047"/>
<!-- Bird nest -->
<ellipse cx="316" cy="108" rx="16" ry="8" fill="#8D6E63"/>
<ellipse cx="316" cy="106" rx="12" ry="6" fill="#A1887F"/>
<!-- COLORFUL TROPICAL BIRD on branch -->
<ellipse cx="330" cy="96" rx="20" ry="13" fill="#FF8F00"/>
<circle cx="344" cy="90" r="12" fill="#FF6F00"/>
<!-- Beak -->
<polygon points="354,90 362,88 354,94" fill="#FFD93D"/>
<!-- Eye -->
<circle cx="348" cy="89" r="4" fill="white"/>
<circle cx="349" cy="89" r="2.5" fill="#2E3440"/>
<circle cx="350" cy="88" r="1" fill="white"/>
<!-- Wing -->
<path d="M322,96 Q318,84 330,80 Q342,78 344,90" fill="#EF5350" opacity="0.9"/>
<path d="M322,96 Q316,88 324,82" fill="#FFD93D" opacity="0.7"/>
<!-- Tail feathers -->
<path d="M312,100 Q298,106 292,118" stroke="#EF5350" stroke-width="4" stroke-linecap="round" fill="none"/>
<path d="M312,100 Q294,108 290,122" stroke="#FF8F00" stroke-width="3" stroke-linecap="round" fill="none"/>
<path d="M312,100 Q298,112 296,126" stroke="#FFD93D" stroke-width="3" stroke-linecap="round" fill="none"/>
<!-- Musical notes from bird -->
<text x="345" y="72" font-family="serif" font-size="18" fill="#6C5CE7" opacity="0.75">♪</text>
<text x="362" y="62" font-family="serif" font-size="14" fill="#FF7675" opacity="0.65">♫</text>
<!-- Kid watching with wonder -->
<circle cx="158" cy="218" r="17" fill="#FFCC80"/>
<path d="M143,212 Q158,200 173,212" fill="#C74E00"/>
<circle cx="151" cy="220" r="4" fill="#2E3440"/>
<circle cx="165" cy="220" r="4" fill="#2E3440"/>
<circle cx="152" cy="219" r="1.6" fill="white"/>
<circle cx="166" cy="219" r="1.6" fill="white"/>
<path d="M151,229 Q158,234 165,229" stroke="#C74E00" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="147" cy="224" r="5" fill="#FFB3BA" opacity="0.6"/>
<circle cx="169" cy="224" r="5" fill="#FFB3BA" opacity="0.6"/>
<rect x="148" y="233" width="20" height="26" fill="#1565C0" rx="5"/>
<!-- Arms pointing at bird -->
<path d="M168,240 L190,225" stroke="#FFCC80" stroke-width="8" stroke-linecap="round"/>
${flower(85, 242, "#FF6BA8", 7)}
${flower(102, 246, "#FFD93D", 6)}
</svg>`,

  // 5 — Pôr do sol mágico na natureza
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
${sky("n5sky","#FF7043","#FFD580")}
<!-- Setting sun glow -->
<circle cx="200" cy="295" r="110" fill="#FFD93D" opacity="0.35"/>
<circle cx="200" cy="295" r="75" fill="#FFE566" opacity="0.45"/>
<circle cx="200" cy="295" r="48" fill="#FFE566" opacity="0.6"/>
${cloud(80, 65, 0.85)}
${cloud(310, 72, 0.8)}
<!-- Silhouette background hills -->
<ellipse cx="80" cy="285" rx="200" ry="75" fill="#2E7D32" opacity="0.8"/>
<ellipse cx="340" cy="288" rx="180" ry="70" fill="#1B5E20" opacity="0.8"/>
${ground("n5g","#4A8A20","#2A5A10",242)}
<ellipse cx="200" cy="245" rx="210" ry="22" fill="#5A9A28" opacity="0.6"/>
<!-- Silhouette trees (darker at sunset) -->
${roundTree(22, 228, 82, "#3A1808", "#1A4A08", "#225A10")}
${roundTree(355, 226, 88, "#3A1808", "#1A4A08", "#225A10")}
<!-- Long warm shadows on ground -->
<ellipse cx="168" cy="258" rx="40" ry="8" fill="#1B5E20" opacity="0.25" transform="skewX(-25)"/>
<ellipse cx="272" cy="256" rx="40" ry="8" fill="#1B5E20" opacity="0.25" transform="skewX(-25)"/>
<!-- Kid and baby deer together -->
<!-- Kid -->
<circle cx="155" cy="215" r="16" fill="#FFCC80"/>
<path d="M141,209 Q155,197 169,209" fill="#8B4513"/>
<circle cx="148" cy="217" r="3.5" fill="#2E3440"/>
<circle cx="162" cy="217" r="3.5" fill="#2E3440"/>
<circle cx="149" cy="216" r="1.4" fill="white"/>
<circle cx="163" cy="216" r="1.4" fill="white"/>
<path d="M148,225 Q155,230 162,225" stroke="#C74E00" stroke-width="1.8" fill="none" stroke-linecap="round"/>
<circle cx="144" cy="220" r="4" fill="#FFB3BA" opacity="0.6"/>
<circle cx="166" cy="220" r="4" fill="#FFB3BA" opacity="0.6"/>
<rect x="146" y="229" width="18" height="24" fill="#EF5350" rx="5"/>
<path d="M148,235 L136,248" stroke="#FFCC80" stroke-width="7" stroke-linecap="round"/>
<!-- Baby deer (right) -->
<!-- Body -->
<ellipse cx="255" cy="235" rx="28" ry="18" fill="#FFAB40"/>
<ellipse cx="255" cy="230" rx="22" ry="14" fill="#FFB74D"/>
<!-- Spots -->
<circle cx="250" cy="228" r="4" fill="white" opacity="0.6"/>
<circle cx="262" cy="225" r="3.5" fill="white" opacity="0.6"/>
<circle cx="256" cy="236" r="3" fill="white" opacity="0.5"/>
<!-- Neck head -->
<ellipse cx="273" cy="220" rx="10" ry="14" fill="#FFAB40"/>
<ellipse cx="276" cy="208" rx="14" ry="12" fill="#FFAB40"/>
<!-- Deer ears -->
<ellipse cx="268" cy="198" rx="5" ry="10" fill="#FFAB40"/>
<ellipse cx="268" cy="198" rx="3" ry="7" fill="#FF8A65"/>
<ellipse cx="284" cy="198" rx="5" ry="10" fill="#FFAB40"/>
<ellipse cx="284" cy="198" rx="3" ry="7" fill="#FF8A65"/>
<!-- Deer eyes (big cute) -->
<circle cx="276" cy="206" r="6" fill="white"/>
<circle cx="277" cy="207" r="4" fill="#2E3440"/>
<circle cx="279" cy="205" r="1.8" fill="white"/>
<!-- Deer nose -->
<ellipse cx="283" cy="214" r="4" fill="#FF8A65"/>
<!-- Deer legs -->
<rect x="240" y="250" width="6" height="18" fill="#FFAB40" rx="3"/>
<rect x="250" y="250" width="6" height="18" fill="#FFAB40" rx="3"/>
<rect x="260" y="250" width="6" height="18" fill="#FFAB40" rx="3"/>
<rect x="270" y="250" width="6" height="18" fill="#FFAB40" rx="3"/>
<!-- Stars appearing -->
<circle cx="50" cy="28" r="2" fill="white" opacity="0.5"/>
<circle cx="350" cy="22" r="1.5" fill="white" opacity="0.4"/>
<circle cx="388" cy="38" r="2" fill="white" opacity="0.5"/>
</svg>`,
];

// ──────────────────────────────────────────────────────────────────────────────
// SCENE MAP
// ──────────────────────────────────────────────────────────────────────────────
const ALL_SCENES: Record<string, string[]> = {
  dinossauros: dinoScenes,
  animais: animaisScenes,
  espaco: espacoScenes,
  fazendinha: fazendinhaScenes,
  princesas: princesasScenes,
  "super-herois": superHeroisScenes,
  natureza: naturezaScenes,
};

// ──────────────────────────────────────────────────────────────────────────────
// PUBLIC API
// ──────────────────────────────────────────────────────────────────────────────

/** Returns a unique, page-specific illustrated SVG scene. */
export function getPageScene(theme: string, pageIndex: number, _pageText?: string): string {
  const scenes = ALL_SCENES[theme] ?? ALL_SCENES["natureza"];
  return scenes[pageIndex % scenes.length];
}

/** Returns the cover/library scene (page 0) for a theme. */
export function getThemeScene(theme: string): string {
  return getPageScene(theme, 0);
}
