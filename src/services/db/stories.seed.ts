import { createServerFn } from "@tanstack/react-start";
import { db } from "../../../server/db";
import { stories, storyPages, storyQuestions } from "../../../shared/schema";
import { sql } from "drizzle-orm";
import { z } from "zod";

// ── 2D SVG cover illustrations per theme ─────────────────────────────────────

const THEME_COVERS: Record<string, string> = {
  dinossauros: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#87CEEB"/><stop offset="100%" stop-color="#B8E4F7"/></linearGradient><linearGradient id="grass" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4CAF50"/><stop offset="100%" stop-color="#388E3C"/></linearGradient></defs><rect width="400" height="280" fill="url(#sky)"/><ellipse cx="60" cy="50" rx="40" ry="25" fill="white" opacity="0.8"/><ellipse cx="340" cy="70" rx="35" ry="20" fill="white" opacity="0.7"/><ellipse cx="200" cy="40" rx="55" ry="28" fill="white" opacity="0.9"/><rect x="0" y="200" width="400" height="80" fill="url(#grass)"/><rect x="20" y="180" width="25" height="70" fill="#2E7D32" rx="3"/><ellipse cx="32" cy="175" rx="22" ry="28" fill="#388E3C"/><rect x="320" y="170" width="20" height="80" fill="#2E7D32" rx="3"/><ellipse cx="330" cy="165" rx="18" ry="22" fill="#388E3C"/><ellipse cx="200" cy="190" rx="65" ry="45" fill="#66BB6A"/><ellipse cx="200" cy="185" rx="58" ry="40" fill="#81C784"/><ellipse cx="245" cy="145" rx="22" ry="35" fill="#66BB6A" transform="rotate(-20 245 145)"/><ellipse cx="270" cy="118" rx="28" ry="22" fill="#66BB6A"/><ellipse cx="270" cy="115" rx="24" ry="18" fill="#81C784"/><circle cx="280" cy="110" r="5" fill="white"/><circle cx="281" cy="110" r="3" fill="#1B5E20"/><circle cx="282" cy="109" r="1" fill="white"/><polygon points="210,148 205,125 215,148" fill="#43A047"/><polygon points="224,142 220,118 230,142" fill="#43A047"/><polygon points="238,138 235,114 244,138" fill="#43A047"/><path d="M140,210 Q100,230 80,215 Q90,205 140,205" fill="#66BB6A"/><rect x="165" y="225" width="22" height="35" fill="#4CAF50" rx="5"/><rect x="215" y="225" width="22" height="35" fill="#4CAF50" rx="5"/><ellipse cx="176" cy="260" rx="14" ry="6" fill="#388E3C"/><ellipse cx="226" cy="260" rx="14" ry="6" fill="#388E3C"/><circle cx="355" cy="45" r="25" fill="#FDD835"/><circle cx="355" cy="45" r="20" fill="#FFEE58"/></svg>`,

  animais: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFF8E1"/><stop offset="100%" stop-color="#FFE082"/></linearGradient></defs><rect width="400" height="280" fill="url(#sky2)"/><ellipse cx="200" cy="240" rx="200" ry="60" fill="#A5D6A7"/><rect x="0" y="220" width="400" height="60" fill="#81C784"/><rect x="40" y="160" width="18" height="80" fill="#5D4037"/><polygon points="49,80 15,170 83,170" fill="#388E3C"/><rect x="330" y="165" width="16" height="75" fill="#5D4037"/><polygon points="338,90 308,175 368,175" fill="#2E7D32"/><ellipse cx="200" cy="200" rx="55" ry="38" fill="#FF7043"/><ellipse cx="200" cy="196" rx="48" ry="32" fill="#FF8A65"/><path d="M150,205 Q100,230 85,210 Q95,185 150,198" fill="#FF7043"/><ellipse cx="93" cy="208" rx="12" ry="10" fill="white"/><ellipse cx="245" cy="175" rx="30" ry="25" fill="#FF7043"/><ellipse cx="245" cy="173" rx="26" ry="21" fill="#FF8A65"/><polygon points="230,158 222,130 242,155" fill="#FF7043"/><polygon points="260,158 268,130 248,155" fill="#FF7043"/><ellipse cx="240" cy="178" rx="14" ry="11" fill="white"/><ellipse cx="252" cy="178" rx="14" ry="11" fill="white"/><circle cx="237" cy="170" r="5" fill="#1A237E"/><circle cx="255" cy="170" r="5" fill="#1A237E"/><circle cx="238" cy="169" r="2" fill="white"/><circle cx="256" cy="169" r="2" fill="white"/><ellipse cx="246" cy="180" rx="5" ry="3" fill="#BF360C"/><rect x="172" y="228" width="18" height="28" fill="#FF7043" rx="5"/><rect x="213" y="228" width="18" height="28" fill="#FF7043" rx="5"/><circle cx="50" cy="55" r="30" fill="#FFD54F"/><circle cx="50" cy="55" r="22" fill="#FFEE58"/></svg>`,

  espaco: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="space" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0D0D2B"/><stop offset="60%" stop-color="#1A0533"/><stop offset="100%" stop-color="#0D1B4B"/></linearGradient><radialGradient id="planet1" cx="50%" cy="50%"><stop offset="0%" stop-color="#7E57C2"/><stop offset="100%" stop-color="#4527A0"/></radialGradient></defs><rect width="400" height="280" fill="url(#space)"/><circle cx="30" cy="20" r="1.5" fill="white" opacity="0.9"/><circle cx="80" cy="40" r="1" fill="white" opacity="0.7"/><circle cx="150" cy="15" r="2" fill="white"/><circle cx="220" cy="35" r="1.5" fill="white" opacity="0.8"/><circle cx="300" cy="10" r="1" fill="white" opacity="0.6"/><circle cx="370" cy="30" r="2" fill="white"/><circle cx="50" cy="80" r="1" fill="white" opacity="0.7"/><circle cx="120" cy="65" r="1.5" fill="white"/><circle cx="180" cy="90" r="1" fill="white" opacity="0.8"/><circle cx="250" cy="55" r="1.5" fill="white"/><circle cx="330" cy="75" r="1" fill="white" opacity="0.6"/><circle cx="380" cy="60" r="2" fill="white" opacity="0.9"/><circle cx="95" cy="110" r="1.5" fill="white"/><circle cx="310" cy="120" r="1" fill="white" opacity="0.7"/><circle cx="360" cy="100" r="1.5" fill="white"/><circle cx="330" cy="80" r="50" fill="url(#planet1)"/><ellipse cx="330" cy="80" rx="75" ry="12" fill="none" stroke="#CE93D8" stroke-width="6" opacity="0.7"/><circle cx="60" cy="200" r="28" fill="#EF5350"/><ellipse cx="60" cy="195" rx="18" ry="5" fill="#FFCDD2" opacity="0.4"/><circle cx="350" cy="200" r="20" fill="#FFF9C4"/><circle cx="358" cy="192" r="20" fill="#0D0D2B"/><rect x="182" y="130" width="36" height="80" fill="#E8EAF6" rx="6"/><rect x="185" y="133" width="30" height="74" fill="#C5CAE9" rx="4"/><polygon points="200,90 182,135 218,135" fill="#EF5350"/><polygon points="200,100 185,135 215,135" fill="#F44336"/><circle cx="200" cy="160" r="11" fill="#29B6F6"/><circle cx="200" cy="160" r="9" fill="#0288D1"/><circle cx="197" cy="157" r="3" fill="#B3E5FC" opacity="0.7"/><polygon points="182,185 158,215 182,205" fill="#EF5350"/><polygon points="218,185 242,215 218,205" fill="#EF5350"/><ellipse cx="200" cy="218" rx="12" ry="18" fill="#FF6F00" opacity="0.9"/><ellipse cx="200" cy="220" rx="8" ry="14" fill="#FFC107"/><ellipse cx="200" cy="222" rx="5" ry="10" fill="#FFF176"/><path d="M145,50 L148,43 L151,50 L158,53 L151,56 L148,63 L145,56 L138,53 Z" fill="#FFF176"/></svg>`,

  fazendinha: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B3E5FC"/><stop offset="100%" stop-color="#E1F5FE"/></linearGradient></defs><rect width="400" height="280" fill="url(#sky3)"/><ellipse cx="80" cy="60" rx="50" ry="28" fill="white" opacity="0.85"/><ellipse cx="300" cy="45" rx="45" ry="24" fill="white" opacity="0.8"/><rect x="0" y="230" width="400" height="50" fill="#8BC34A"/><ellipse cx="200" cy="230" rx="200" ry="20" fill="#A5D6A7"/><rect x="230" y="140" width="140" height="100" fill="#E53935"/><rect x="233" y="143" width="134" height="97" fill="#EF5350"/><polygon points="230,140 370,140 300,85" fill="#B71C1C"/><rect x="278" y="190" width="44" height="50" fill="#795548"/><circle cx="299" cy="216" r="3" fill="#FFD54F"/><rect x="245" y="160" width="30" height="25" fill="#81D4FA" rx="2"/><rect x="30" y="165" width="110" height="75" fill="#FFFDE7"/><polygon points="30,165 140,165 85,110" fill="#F44336"/><rect x="70" y="205" width="30" height="35" fill="#8D6E63"/><circle cx="98" cy="222" r="2.5" fill="#FFD54F"/><rect x="38" y="180" width="22" height="18" fill="#81D4FA" rx="2"/><rect x="118" y="180" width="22" height="18" fill="#81D4FA" rx="2"/><ellipse cx="180" cy="220" rx="35" ry="22" fill="white"/><ellipse cx="200" cy="210" rx="20" ry="16" fill="white"/><ellipse cx="172" cy="218" rx="9" ry="7" fill="#5D4037"/><ellipse cx="190" cy="228" rx="7" ry="5" fill="#5D4037"/><ellipse cx="218" cy="202" rx="15" ry="12" fill="white"/><ellipse cx="225" cy="207" rx="7" ry="5" fill="#FFCDD2"/><ellipse cx="206" cy="193" rx="6" ry="8" fill="white" transform="rotate(-20 206 193)"/><ellipse cx="228" cy="192" rx="6" ry="8" fill="white" transform="rotate(15 228 192)"/><circle cx="215" cy="198" r="3" fill="#1A237E"/><circle cx="215" cy="197" r="1" fill="white"/><circle cx="223" cy="209" r="1.5" fill="#EF9A9A"/><circle cx="228" cy="209" r="1.5" fill="#EF9A9A"/><rect x="152" y="235" width="10" height="22" fill="white" rx="3"/><rect x="170" y="235" width="10" height="22" fill="white" rx="3"/><rect x="190" y="235" width="10" height="22" fill="white" rx="3"/><rect x="208" y="235" width="10" height="22" fill="white" rx="3"/><circle cx="355" cy="50" r="28" fill="#FDD835"/><circle cx="355" cy="50" r="22" fill="#FFEE58"/></svg>`,

  princesas: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="sky4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F8BBD0"/><stop offset="100%" stop-color="#FDE8F0"/></linearGradient></defs><rect width="400" height="280" fill="url(#sky4)"/><ellipse cx="70" cy="55" rx="45" ry="22" fill="white" opacity="0.7"/><ellipse cx="320" cy="40" rx="40" ry="20" fill="white" opacity="0.6"/><rect x="10" y="130" width="55" height="110" fill="#CE93D8"/><rect x="13" y="133" width="49" height="107" fill="#E1BEE7"/><rect x="0" y="110" width="30" height="30" fill="#CE93D8"/><polygon points="15,95 0,115 30,115" fill="#AB47BC"/><rect x="45" y="118" width="30" height="28" fill="#CE93D8"/><polygon points="60,103 45,122 75,122" fill="#AB47BC"/><rect x="335" y="130" width="55" height="110" fill="#CE93D8"/><rect x="338" y="133" width="49" height="107" fill="#E1BEE7"/><rect x="370" y="110" width="30" height="30" fill="#CE93D8"/><polygon points="385,95 370,115 400,115" fill="#AB47BC"/><rect x="325" y="118" width="30" height="28" fill="#CE93D8"/><polygon points="340,103 325,122 355,122" fill="#AB47BC"/><rect x="120" y="100" width="160" height="140" fill="#CE93D8"/><rect x="124" y="104" width="152" height="136" fill="#E1BEE7"/><rect x="100" y="80" width="50" height="130" fill="#BA68C8"/><rect x="103" y="83" width="44" height="127" fill="#CE93D8"/><polygon points="125,42 100,84 150,84" fill="#9C27B0"/><circle cx="125" cy="38" r="6" fill="#FFD54F"/><rect x="250" y="80" width="50" height="130" fill="#BA68C8"/><rect x="253" y="83" width="44" height="127" fill="#CE93D8"/><polygon points="275,42 250,84 300,84" fill="#9C27B0"/><circle cx="275" cy="38" r="6" fill="#FFD54F"/><rect x="165" y="60" width="70" height="150" fill="#BA68C8"/><rect x="168" y="63" width="64" height="147" fill="#CE93D8"/><polygon points="200,18 165,64 235,64" fill="#9C27B0"/><circle cx="200" cy="13" r="8" fill="#FFD54F"/><rect x="185" y="80" width="30" height="35" fill="#29B6F6" rx="14"/><ellipse cx="200" cy="80" rx="15" ry="15" fill="#29B6F6"/><rect x="178" y="195" width="44" height="45" fill="#8D6E63" rx="5"/><ellipse cx="200" cy="195" rx="22" ry="22" fill="#8D6E63"/><ellipse cx="200" cy="195" rx="19" ry="19" fill="#795548"/><circle cx="200" cy="218" r="3.5" fill="#FFD54F"/><rect x="0" y="235" width="400" height="45" fill="#A5D6A7"/><ellipse cx="200" cy="235" rx="200" ry="20" fill="#C8E6C9"/><path d="M340,155 L342,149 L344,155 L350,157 L344,159 L342,165 L340,159 L334,157 Z" fill="#FFD54F" opacity="0.8"/><path d="M50,180 L52,175 L54,180 L59,182 L54,184 L52,189 L50,184 L45,182 Z" fill="#FFD54F" opacity="0.7"/></svg>`,

  "super-herois": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="sky5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1565C0"/><stop offset="100%" stop-color="#42A5F5"/></linearGradient></defs><rect width="400" height="280" fill="url(#sky5)"/><ellipse cx="80" cy="50" rx="45" ry="22" fill="white" opacity="0.85"/><ellipse cx="320" cy="35" rx="40" ry="20" fill="white" opacity="0.75"/><rect x="0" y="200" width="400" height="80" fill="#0D47A1"/><rect x="10" y="160" width="45" height="120" fill="#1565C0"/><rect x="60" y="180" width="35" height="100" fill="#0D47A1"/><rect x="100" y="150" width="55" height="130" fill="#1565C0"/><rect x="310" y="165" width="45" height="115" fill="#1565C0"/><rect x="340" y="180" width="35" height="100" fill="#0D47A1"/><rect x="18" y="170" width="8" height="7" fill="#FFF176" rx="1"/><rect x="32" y="170" width="8" height="7" fill="#FFF176" rx="1"/><rect x="108" y="162" width="8" height="7" fill="#FFF176" rx="1"/><rect x="122" y="162" width="8" height="7" fill="#81D4FA" rx="1"/><rect x="136" y="162" width="8" height="7" fill="#FFF176" rx="1"/><ellipse cx="200" cy="175" rx="28" ry="35" fill="#E53935"/><ellipse cx="200" cy="172" rx="24" ry="30" fill="#EF5350"/><polygon points="200,162 193,176 200,173 207,176" fill="#FDD835"/><path d="M172,158 Q155,195 160,230 Q180,220 200,225 Q220,220 240,230 Q245,195 228,158" fill="#B71C1C"/><path d="M175,160 Q160,195 165,225 Q182,215 200,220 Q218,215 235,225 Q240,195 225,160" fill="#D32F2F"/><ellipse cx="200" cy="130" rx="22" ry="24" fill="#FFCCBC"/><ellipse cx="200" cy="124" rx="22" ry="12" fill="#E53935"/><rect x="178" y="120" width="44" height="12" fill="#EF5350"/><ellipse cx="191" cy="128" rx="6" ry="5" fill="white"/><ellipse cx="209" cy="128" rx="6" ry="5" fill="white"/><circle cx="192" cy="128" r="3.5" fill="#1A237E"/><circle cx="210" cy="128" r="3.5" fill="#1A237E"/><circle cx="193" cy="127" r="1.2" fill="white"/><circle cx="211" cy="127" r="1.2" fill="white"/><path d="M186,137 Q200,148 214,137" stroke="#FFAB91" stroke-width="2" fill="none"/><path d="M180,118 Q200,105 220,118 Q218,108 200,104 Q182,108 180,118" fill="#212121"/><rect x="155" y="160" width="18" height="38" fill="#EF5350" rx="7" transform="rotate(-25 155 160)"/><rect x="227" y="160" width="18" height="38" fill="#EF5350" rx="7" transform="rotate(25 245 160)"/><line x1="50" y1="140" x2="160" y2="155" stroke="#FDD835" stroke-width="2.5" opacity="0.6" stroke-dasharray="8,6"/><line x1="40" y1="155" x2="155" y2="165" stroke="#FDD835" stroke-width="2" opacity="0.5" stroke-dasharray="6,5"/><line x1="250" y1="140" x2="360" y2="130" stroke="#FDD835" stroke-width="2.5" opacity="0.6" stroke-dasharray="8,6"/></svg>`,

  natureza: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="sky6" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B2EBF2"/><stop offset="100%" stop-color="#E0F7FA"/></linearGradient><linearGradient id="water" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#29B6F6"/><stop offset="100%" stop-color="#0288D1"/></linearGradient></defs><rect width="400" height="280" fill="url(#sky6)"/><ellipse cx="100" cy="55" rx="50" ry="26" fill="white" opacity="0.85"/><ellipse cx="320" cy="40" rx="45" ry="23" fill="white" opacity="0.8"/><polygon points="0,240 80,120 160,240" fill="#78909C"/><polygon points="5,240 80,128 155,240" fill="#90A4AE"/><polygon points="100,240 200,100 300,240" fill="#607D8B"/><polygon points="105,240 200,108 295,240" fill="#78909C"/><polygon points="240,240 330,130 400,240" fill="#546E7A"/><polygon points="80,128 70,155 90,155" fill="white"/><polygon points="200,108 188,142 212,142" fill="white"/><polygon points="330,138 320,162 340,162" fill="white"/><path d="M0,240 Q50,230 100,250 Q150,265 200,245 Q250,228 300,248 Q350,265 400,240 L400,280 L0,280 Z" fill="url(#water)"/><rect x="0" y="235" width="400" height="45" fill="#66BB6A"/><rect x="38" y="165" width="22" height="90" fill="#5D4037"/><ellipse cx="49" cy="150" rx="38" ry="42" fill="#2E7D32"/><ellipse cx="49" cy="148" rx="32" ry="36" fill="#388E3C"/><rect x="340" y="170" width="22" height="85" fill="#5D4037"/><ellipse cx="351" cy="155" rx="36" ry="40" fill="#1B5E20"/><ellipse cx="351" cy="153" rx="30" ry="34" fill="#2E7D32"/><rect x="145" y="195" width="14" height="60" fill="#5D4037"/><ellipse cx="152" cy="185" rx="24" ry="28" fill="#388E3C"/><rect x="245" y="195" width="14" height="60" fill="#5D4037"/><ellipse cx="252" cy="185" rx="24" ry="28" fill="#2E7D32"/><path d="M130,90 Q137,84 145,90" stroke="#37474F" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M160,75 Q167,69 175,75" stroke="#37474F" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="355" cy="55" r="30" fill="#FDD835"/><circle cx="355" cy="55" r="23" fill="#FFEE58"/><line x1="355" y1="18" x2="355" y2="8" stroke="#FDD835" stroke-width="3"/><line x1="378" y1="27" x2="385" y2="20" stroke="#FDD835" stroke-width="3"/><line x1="392" y1="55" x2="402" y2="55" stroke="#FDD835" stroke-width="3"/></svg>`,
};

function svgToDataUrl(svgStr: string): string {
  const encoded = encodeURIComponent(svgStr.trim());
  return `data:image/svg+xml,${encoded}`;
}

// ── Hardcoded seed stories (no API required) ──────────────────────────────────

const SEED_DATA = [
  {
    theme: "dinossauros",
    readingLevel: "iniciante" as const,
    ageMin: 4, ageMax: 7,
    title: "Dino e o Amigo Novo",
    description: "Dino e um pequeno dinossauro que mora na floresta verde. Um dia, ele encontra um amigo diferente de tudo que ja viu.",
    pages: [
      { page_number: 1, text: "Dino vivia na grande floresta verde. As arvores eram altas e o ceu era azul. Dino gostava muito de brincar sozinho entre as folhas." },
      { page_number: 2, text: "Um dia, Dino ouviu um som estranho atras de uma pedra grande. Ele foi devagar, com cuidado, para ver o que era." },
      { page_number: 3, text: "Era um pequeno dinossauro com manchas coloridas. Ele estava sozinho e com medo. Dino sorriu e disse: Ola, meu nome e Dino. Qual e o seu?" },
      { page_number: 4, text: "O pequeno dinossauro respondeu: Meu nome e Lino. Eu me perdi da minha familia. Dino ficou com vontade de ajudar." },
      { page_number: 5, text: "Juntos, eles caminharam pela floresta. Dino conhecia todos os caminhos. Ele mostrou o rio, as flores e as frutas mais gostosas." },
      { page_number: 6, text: "Ao entardecer, encontraram a familia de Lino. Todos ficaram muito felizes. Dino aprendeu que ajudar os outros e a melhor aventura de todas." },
    ],
    questions: [
      { question: "Onde Dino morava?", option_a: "No oceano", option_b: "Na floresta verde", option_c: "Na cidade", correct_answer: "b" as const, difficulty: 1 },
      { question: "Como se chamava o novo amigo de Dino?", option_a: "Rex", option_b: "Tino", option_c: "Lino", correct_answer: "c" as const, difficulty: 1 },
      { question: "O que Dino aprendeu no final da historia?", option_a: "Que correr e divertido", option_b: "Que ajudar os outros e a melhor aventura", option_c: "Que frutas sao gostosas", correct_answer: "b" as const, difficulty: 2 },
    ],
  },
  {
    theme: "animais",
    readingLevel: "iniciante" as const,
    ageMin: 5, ageMax: 8,
    title: "A Raposa Corajosa",
    description: "Luna e uma raposa que vive na floresta encantada. Quando seus amigos precisam de ajuda, ela mostra que a coragem mora dentro do coracao.",
    pages: [
      { page_number: 1, text: "Luna era uma raposa de pelo laranja e olhos brilhantes. Ela morava numa toca aconchegante no meio da floresta encantada." },
      { page_number: 2, text: "Um dia, o coelho Bento chegou correndo. Ele estava muito assustado. As flores do jardim estao desaparecendo, disse ele." },
      { page_number: 3, text: "Luna decidiu investigar. Ela seguiu as pegadas no chao molhado da floresta. As pegadas levavam ate uma gruta escura." },
      { page_number: 4, text: "Luna respirou fundo e entrou. Dentro, encontrou um cervo que tinha caido num buraco e estava com fome. Ele comia as flores para sobreviver." },
      { page_number: 5, text: "Luna chamou todos os animais da floresta. Juntos, eles ajudaram o cervo a sair do buraco. O cervo agradeceu muito." },
      { page_number: 6, text: "Os amigos plantaram novas flores no jardim. Luna aprendeu que a coragem e agir mesmo quando temos medo. E que juntos somos mais fortes." },
    ],
    questions: [
      { question: "Qual era o problema que Bento contou para Luna?", option_a: "As arvores estavam caindo", option_b: "As flores estavam desaparecendo", option_c: "O rio estava secando", correct_answer: "b" as const, difficulty: 1 },
      { question: "Quem estava comendo as flores?", option_a: "Um urso", option_b: "Uma abelha gigante", option_c: "Um cervo que caiu num buraco", correct_answer: "c" as const, difficulty: 2 },
      { question: "O que Luna aprendeu no final?", option_a: "Que e melhor ficar em casa", option_b: "Que a coragem e agir mesmo com medo", option_c: "Que cevos sao perigosos", correct_answer: "b" as const, difficulty: 2 },
    ],
  },
  {
    theme: "espaco",
    readingLevel: "intermediario" as const,
    ageMin: 6, ageMax: 10,
    title: "Pedro e a Viagem ao Espaco",
    description: "Pedro sempre sonhou em ser astronauta. Com muito estudo e determinacao, ele realiza o maior sonho da sua vida: viajar pelas estrelas.",
    pages: [
      { page_number: 1, text: "Pedro tinha sete anos e adorava olhar para o ceu estrelado todas as noites. Seu sonho maior era um dia viajar ao espaco sideral." },
      { page_number: 2, text: "Ele estudava muito. Lia livros sobre planetas, estrelas e foguetes. Na escola, era o aluno mais curioso da turma." },
      { page_number: 3, text: "Um dia, Pedro foi selecionado para um programa especial de jovens exploradores espaciais. Ele nao acreditava na sua sorte." },
      { page_number: 4, text: "A decolagem foi incrivel. O foguete subiu rapidamente. Pela janela, Pedro viu a Terra ficando cada vez menor, azul e linda." },
      { page_number: 5, text: "No espaco, Pedro visitou a Lua. Ela era cinza e cheia de crateras. Ele recolheu amostras de pedras lunares para os cientistas estudarem." },
      { page_number: 6, text: "Depois, Pedro viajou ate Marte, o planeta vermelho. A paisagem era linda, mas muito diferente da Terra." },
      { page_number: 7, text: "Ao voltar para casa, Pedro sorriu. Ele sabia que os sonhos se realizam com muito estudo e muita coragem. E que o universo e imenso e maravilhoso." },
    ],
    questions: [
      { question: "O que Pedro sonhava em ser?", option_a: "Medico", option_b: "Astronauta", option_c: "Professor", correct_answer: "b" as const, difficulty: 1 },
      { question: "Qual planeta vermelho Pedro visitou?", option_a: "Jupiter", option_b: "Saturno", option_c: "Marte", correct_answer: "c" as const, difficulty: 2 },
      { question: "O que Pedro aprendeu com a viagem?", option_a: "Que o espaco e perigoso e nao vale a pena", option_b: "Que so cientistas podem viajar", option_c: "Que os sonhos se realizam com estudo e coragem", correct_answer: "c" as const, difficulty: 2 },
    ],
  },
  {
    theme: "fazendinha",
    readingLevel: "iniciante" as const,
    ageMin: 4, ageMax: 7,
    title: "A Grande Colheita",
    description: "Na Fazenda Feliz, os animais descobrem que trabalhar juntos faz tudo ficar melhor. Uma historia sobre amizade e cooperacao.",
    pages: [
      { page_number: 1, text: "Na Fazenda Feliz vivia uma turma animada: Bela a vaca, Pintinho o pintinho, Ovelha Branca e o Porquinho Grunhido." },
      { page_number: 2, text: "Era dia de colheita. Haviam muitas maçãs, cenouras e morangos para colher. Mas era muito trabalho para um so animal." },
      { page_number: 3, text: "Bela a vaca disse: Vamos trabalhar juntos! Cada um faz uma parte. Assim terminamos mais rapido e ninguem fica cansado." },
      { page_number: 4, text: "Pintinho catou os graos. Ovelha Branca ajudou a carregar as cestas. Porquinho Grunhido cavou a terra. Bela organizou tudo." },
      { page_number: 5, text: "No final do dia, toda a colheita estava pronta. A fazenda estava cheia de cores e aromas gostosos. Os animais bateram palmas juntos." },
      { page_number: 6, text: "O fazendeiro chegou e ficou muito feliz. Ele preparou uma festa especial para todos. A turma comeu, dançou e riu muito." },
    ],
    questions: [
      { question: "Como se chamava a fazenda da historia?", option_a: "Fazenda do Sol", option_b: "Fazenda Verde", option_c: "Fazenda Feliz", correct_answer: "c" as const, difficulty: 1 },
      { question: "O que os animais fizeram para terminar a colheita?", option_a: "Esperaram o fazendeiro", option_b: "Trabalharam juntos", option_c: "Chamaram ajuda de fora", correct_answer: "b" as const, difficulty: 1 },
      { question: "O que aconteceu no final?", option_a: "Os animais brigaram", option_b: "A colheita nao ficou pronta", option_c: "O fazendeiro fez uma festa para todos", correct_answer: "c" as const, difficulty: 2 },
    ],
  },
  {
    theme: "princesas",
    readingLevel: "intermediario" as const,
    ageMin: 5, ageMax: 9,
    title: "A Princesa do Mapa Perdido",
    description: "A princesa Sofia descobre um mapa misterioso escondido na biblioteca do castelo. Ela parte em uma aventura para desvendar o segredo antigo.",
    pages: [
      { page_number: 1, text: "Sofia era uma princesa corajosa que amava resolver misterios. Ela preferia explorar a biblioteca a usar vestidos de gala." },
      { page_number: 2, text: "Um dia, um livro antigo caiu da prateleira e um mapa enrolado rolou pelo chao. O mapa mostrava um caminho dentro do proprio castelo." },
      { page_number: 3, text: "Sofia seguiu as pistas. Subiu escadas secretas, atravessou corrredores esquecidos e descobriu uma porta atras de uma tapeçaria antiga." },
      { page_number: 4, text: "Por tras da porta havia um jardim oculto cheio de plantas raras e flores que brilhavam no escuro. Era lindo demais para acreditar." },
      { page_number: 5, text: "No centro do jardim havia uma fonte antiga. Dentro dela, Sofia encontrou um diario da fundadora do castelo, a Rainha Lyra." },
      { page_number: 6, text: "O diario contava que o jardim foi criado para que as futuras princesas nunca esquecessem: a forca maior nao esta nos tesouros, mas na curiosidade e na coragem." },
      { page_number: 7, text: "Sofia fechou o diario com cuidado. Ela entendeu a mensagem. Voltou ao castelo com o coracao cheio e a certeza de que sempre haveria novos misterios para descobrir." },
    ],
    questions: [
      { question: "O que Sofia encontrou no livro antigo?", option_a: "Um mapa", option_b: "Uma carta", option_c: "Uma chave", correct_answer: "a" as const, difficulty: 1 },
      { question: "O que havia no centro do jardim secreto?", option_a: "Um tesouro de ouro", option_b: "Uma fonte antiga com um diario", option_c: "Uma estatua de dragao", correct_answer: "b" as const, difficulty: 2 },
      { question: "Qual foi a mensagem que Sofia aprendeu?", option_a: "Que tesouros sao o mais importante", option_b: "Que a curiosidade e a coragem sao a maior forca", option_c: "Que jardins secretos sao perigosos", correct_answer: "b" as const, difficulty: 2 },
    ],
  },
  {
    theme: "super-herois",
    readingLevel: "intermediario" as const,
    ageMin: 6, ageMax: 10,
    title: "O Superpoder da Bondade",
    description: "Mateus acha que nao tem nenhum superpoder especial. Mas um dia ele descobre que a bondade e o mais poderoso de todos os poderes.",
    pages: [
      { page_number: 1, text: "Mateus adorava historias de super-herois. Ele sonhava ter um superpoder, mas achava que era um menino comum e corrente." },
      { page_number: 2, text: "No caminho para a escola, Mateus viu uma senhorinha com dificuldade para carregar suas sacolas. Sem pensar, foi la ajudar." },
      { page_number: 3, text: "A senhorinha sorriu e disse: Voce tem um coraçao muito bom, meu filho. Mateus nao entendeu por que isso o fez sentir tao bem." },
      { page_number: 4, text: "Na escola, um colega estava chorando sozinho no recreio. Ninguem havia ido conversar. Mateus foi ate ele e ouviu sua historia com atencao." },
      { page_number: 5, text: "O colega se chamava Ben e acabara de mudar de cidade. Estava com saudade de tudo. Mateus convidou Ben para jogar com a turma dele." },
      { page_number: 6, text: "Aquela tarde, Mateus olhou ao redor: a senhorinha estava sorrindo, Ben estava rindo, os amigos estavam felizes. E tudo por causa de pequenos gestos." },
      { page_number: 7, text: "Mateus entendeu. Seu superpoder era a bondade. E diferente de outros poderes, ela nao tinha limite: quanto mais voce usa, mais ela cresce." },
    ],
    questions: [
      { question: "Por que Mateus achava que era comum?", option_a: "Porque ele era fraco", option_b: "Porque achava que nao tinha superpoder", option_c: "Porque era muito timido", correct_answer: "b" as const, difficulty: 1 },
      { question: "Como se chamava o colega novo que Mateus ajudou?", option_a: "Leo", option_b: "Carlos", option_c: "Ben", correct_answer: "c" as const, difficulty: 1 },
      { question: "Qual e o superpoder de Mateus?", option_a: "A velocidade", option_b: "A forca fisica", option_c: "A bondade", correct_answer: "c" as const, difficulty: 2 },
    ],
  },
  {
    theme: "natureza",
    readingLevel: "avancado" as const,
    ageMin: 7, ageMax: 12,
    title: "A Jornada pelo Rio Azul",
    description: "Ana e seu avo embarcam em uma canoa pelo Rio Azul. Durante a viagem, ela descobre os segredos da floresta e aprende a importancia de cuidar da natureza.",
    pages: [
      { page_number: 1, text: "Ana acordou antes do sol nascer. Seu avo Joao ja estava na margem do rio, preparando a pequena canoa de madeira. Hoje era o grande dia da jornada." },
      { page_number: 2, text: "O Rio Azul cortava a floresta como uma fita brilhante. Nas margens, arvores enormes mergulhavam seus galhos na agua fria. O ar cheirava a terra molhada e flores silvestres." },
      { page_number: 3, text: "Ana avistou uma lontra brincando entre as pedras. Avo Joao explicou: a lontra e o guardiao do rio. Quando ela esta saudavel, o rio esta saudavel." },
      { page_number: 4, text: "Mais adiante, passaram por uma area onde as arvores estavam cortadas. O rio ali era mais raso e turvo. Ana ficou triste ao ver aquele contraste." },
      { page_number: 5, text: "Avo Joao disse: Voce esta vendo a diferenca? Quando cuidamos da floresta, o rio agradece. Quando destruimos, ele sofre. Tudo na natureza esta conectado." },
      { page_number: 6, text: "Eles pararam numa praia de areia branca para o almoco. Enquanto comiam, um colibri pousou na flor ao lado de Ana. Era pequeno como um polegar e brilhava como uma joia." },
      { page_number: 7, text: "Ao voltar, o ceu ficou laranja e rosa. Ana olhou para o rio que refletia as cores do entardecer. Ela fez uma promessa silenciosa: cuidaria deste lugar para sempre." },
      { page_number: 8, text: "Na margem, Ana abraçou o avo forte. Ela aprendera mais naquele dia do que em muitos anos. A natureza e o maior livro que existe, e ela estava apenas na primeira pagina." },
    ],
    questions: [
      { question: "Quem e o guardiao do rio, segundo Avo Joao?", option_a: "A garça", option_b: "A lontra", option_c: "O peixe dourado", correct_answer: "b" as const, difficulty: 1 },
      { question: "O que acontecia com o rio perto das arvores cortadas?", option_a: "Ficava mais limpo e largo", option_b: "Ficava mais raso e turvo", option_c: "Ficava mais rapido", correct_answer: "b" as const, difficulty: 2 },
      { question: "Qual promessa Ana fez ao final da viagem?", option_a: "Voltar ao rio todo fim de semana", option_b: "Aprender a remar melhor", option_c: "Cuidar daquele lugar para sempre", correct_answer: "c" as const, difficulty: 3 },
    ],
  },
];

// ── Server functions ──────────────────────────────────────────────────────────

export const countStories = createServerFn({ method: "GET" }).handler(async () => {
  const result = await db.select({ count: sql<number>`count(*)::int` }).from(stories);
  return result[0]?.count ?? 0;
});

export const seedStoriesIfEmpty = createServerFn({ method: "POST" }).handler(async () => {
  const [{ count }] = await db.select({ count: sql<number>`count(*)::int` }).from(stories);
  if (count > 0) return { seeded: false, count };

  let seededCount = 0;
  for (const seed of SEED_DATA) {
    try {
      const coverSvg = THEME_COVERS[seed.theme];
      const coverImage = coverSvg ? svgToDataUrl(coverSvg) : null;

      const [story] = await db.insert(stories).values({
        title: seed.title,
        description: seed.description,
        coverImage,
        readingLevel: seed.readingLevel,
        ageMin: seed.ageMin,
        ageMax: seed.ageMax,
        theme: seed.theme,
        difficulty: seed.readingLevel === "iniciante" ? 1 : seed.readingLevel === "intermediario" ? 2 : 3,
        aiGenerated: false,
      }).returning();

      await db.insert(storyPages).values(
        seed.pages.map((p) => ({
          storyId: story.id,
          pageNumber: p.page_number,
          text: p.text,
        }))
      );

      await db.insert(storyQuestions).values(
        seed.questions.map((q) => ({
          storyId: story.id,
          question: q.question,
          optionA: q.option_a,
          optionB: q.option_b,
          optionC: q.option_c,
          correctAnswer: q.correct_answer,
          difficulty: q.difficulty,
        }))
      );

      seededCount++;
    } catch (err) {
      console.error(`[seed] Falha ao inserir historia ${seed.theme}:`, err);
    }
  }

  return { seeded: true, count: seededCount };
});

export const generateExtraStory = createServerFn({ method: "POST" })
  .validator(z.object({ theme: z.string() }))
  .handler(async ({ data }) => {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) throw new Error("OPENAI_API_KEY nao configurada");

    const readingLevels = ["iniciante", "intermediario", "avancado"] as const;
    const level = readingLevels[Math.floor(Math.random() * readingLevels.length)];

    const prompt = `Crie uma historia infantil curta em portugues brasileiro com tema: ${data.theme}.
Regras OBRIGATORIAS:
- PROIBIDO usar emojis em qualquer parte do texto
- Frases curtas e simples, adequadas para criancas de 5 a 10 anos
- Nivel de leitura: ${level}
- Historia com exatamente 6 paginas
- Linguagem acolhedora e positiva
- Sem violencia, apenas aventura e aprendizado
- Os personagens devem ter nomes brasileiros

Retorne APENAS um JSON valido:
{
  "title": "Titulo da Historia",
  "description": "Descricao curta de 2 frases sem emojis",
  "pages": [
    {"page_number": 1, "text": "Texto da pagina sem emojis"},
    {"page_number": 2, "text": "Texto da pagina sem emojis"},
    {"page_number": 3, "text": "Texto da pagina sem emojis"},
    {"page_number": 4, "text": "Texto da pagina sem emojis"},
    {"page_number": 5, "text": "Texto da pagina sem emojis"},
    {"page_number": 6, "text": "Texto da pagina sem emojis"}
  ],
  "questions": [
    {"question": "Pergunta 1 sem emojis?", "option_a": "Opcao A", "option_b": "Opcao B", "option_c": "Opcao C", "correct_answer": "a", "difficulty": 1},
    {"question": "Pergunta 2 sem emojis?", "option_a": "Opcao A", "option_b": "Opcao B", "option_c": "Opcao C", "correct_answer": "b", "difficulty": 2},
    {"question": "Pergunta 3 sem emojis?", "option_a": "Opcao A", "option_b": "Opcao B", "option_c": "Opcao C", "correct_answer": "c", "difficulty": 2}
  ]
}`;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1800,
        response_format: { type: "json_object" },
      }),
    });
    if (!res.ok) throw new Error(`OpenAI error: ${res.status} ${await res.text()}`);
    const json = await res.json();
    const content = JSON.parse(json.choices[0].message.content);

    const coverSvg = THEME_COVERS[data.theme];
    const coverImage = coverSvg ? svgToDataUrl(coverSvg) : null;

    const [story] = await db.insert(stories).values({
      title: content.title,
      description: content.description,
      coverImage,
      readingLevel: level,
      ageMin: 5,
      ageMax: 10,
      theme: data.theme,
      difficulty: level === "iniciante" ? 1 : level === "intermediario" ? 2 : 3,
      aiGenerated: true,
    }).returning();

    if (content.pages?.length) {
      await db.insert(storyPages).values(
        content.pages.map((p: any) => ({
          storyId: story.id,
          pageNumber: p.page_number,
          text: p.text,
        }))
      );
    }
    if (content.questions?.length) {
      await db.insert(storyQuestions).values(
        content.questions.map((q: any) => ({
          storyId: story.id,
          question: q.question,
          optionA: q.option_a,
          optionB: q.option_b,
          optionC: q.option_c,
          correctAnswer: q.correct_answer,
          difficulty: q.difficulty ?? 1,
        }))
      );
    }

    return story;
  });
