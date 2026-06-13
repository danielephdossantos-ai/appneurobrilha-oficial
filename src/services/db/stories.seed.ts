import { createServerFn } from "@tanstack/react-start";
import { db } from "../../../server/db";
import { stories, storyPages, storyQuestions } from "../../../shared/schema";
import { sql } from "drizzle-orm";
import { z } from "zod";

// ── Ilustrações SVG premium por tema ─────────────────────────────────────────
// Cenas com personagens reconhecíveis, árvores triangulares (pinheiro) em vez
// de círculos no palito. Animações CSS embutidas para movimento suave.

const SVG_DINOSSAUROS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="dsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4DD0E1"/><stop offset="100%" stop-color="#B2EBF2"/></linearGradient><style>@keyframes dbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.dino{animation:dbob 2.2s ease-in-out infinite;transform-origin:50% 100%}</style></defs><rect width="400" height="280" fill="url(#dsky)"/><circle cx="355" cy="48" r="32" fill="#FFF176" opacity="0.9"/><circle cx="355" cy="48" r="24" fill="#FFD54F"/><ellipse cx="80" cy="62" rx="42" ry="17" fill="white" opacity="0.85"/><ellipse cx="108" cy="56" rx="32" ry="14" fill="white" opacity="0.85"/><ellipse cx="60" cy="67" rx="26" ry="12" fill="white" opacity="0.85"/><ellipse cx="210" cy="52" rx="38" ry="15" fill="white" opacity="0.75"/><ellipse cx="240" cy="46" rx="28" ry="12" fill="white" opacity="0.75"/><polygon points="360,280 295,118 400,280" fill="#B71C1C"/><polygon points="358,280 298,128 395,280" fill="#C62828"/><ellipse cx="296" cy="122" rx="14" ry="9" fill="#FF5722"/><ellipse cx="302" cy="115" rx="9" ry="6" fill="#FF8A65"/><rect x="0" y="238" width="400" height="42" fill="#2E7D32"/><ellipse cx="200" cy="238" rx="205" ry="14" fill="#388E3C"/><polygon points="25,238 5,192 45,192" fill="#1B5E20"/><polygon points="28,238 2,178 54,178" fill="#2E7D32"/><polygon points="45,238 32,205 58,205" fill="#1B5E20"/><polygon points="68,238 50,198 86,198" fill="#2E7D32"/><polygon points="72,238 48,182 96,182" fill="#1B5E20"/><polygon points="268,238 252,202 284,202" fill="#1B5E20"/><polygon points="265,238 248,188 282,188" fill="#2E7D32"/><polygon points="285,238 270,210 300,210" fill="#1B5E20"/><g class="dino"><ellipse cx="175" cy="218" rx="68" ry="42" fill="#66BB6A"/><ellipse cx="175" cy="215" rx="60" ry="35" fill="#81C784"/><path d="M250,222 Q282,230 308,218 Q285,208 250,212" fill="#66BB6A"/><path d="M155,182 Q148,152 148,112 Q156,104 168,110 Q168,148 175,182" fill="#5AB55E"/><ellipse cx="152" cy="106" rx="24" ry="16" fill="#81C784"/><circle cx="159" cy="99" r="5.5" fill="white"/><circle cx="161" cy="99" r="3.5" fill="#1B5E20"/><circle cx="162" cy="98" r="1.3" fill="white"/><ellipse cx="141" cy="106" rx="3.5" ry="2.2" fill="#4CAF50"/><path d="M140,111 Q148,118 163,112" stroke="#43A047" stroke-width="2.2" fill="none" stroke-linecap="round"/><rect x="148" y="248" width="20" height="32" fill="#4CAF50" rx="7"/><rect x="192" y="248" width="20" height="32" fill="#4CAF50" rx="7"/><ellipse cx="158" cy="279" rx="14" ry="5.5" fill="#388E3C"/><ellipse cx="202" cy="279" rx="14" ry="5.5" fill="#388E3C"/><ellipse cx="165" cy="212" rx="9" ry="6.5" fill="#4CAF50" opacity="0.55"/><ellipse cx="190" cy="222" rx="7" ry="5" fill="#4CAF50" opacity="0.55"/><ellipse cx="210" cy="208" rx="8" ry="5.5" fill="#4CAF50" opacity="0.55"/></g></svg>`;

const SVG_ANIMAIS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="asky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF8F00"/><stop offset="60%" stop-color="#FFB300"/><stop offset="100%" stop-color="#FFD54F"/></linearGradient><style>@keyframes tailwag{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(15deg)}}.ftail{animation:tailwag 1.2s ease-in-out infinite;transform-origin:200px 220px}</style></defs><rect width="400" height="280" fill="url(#asky)"/><polygon points="20,238 5,168 35,168" fill="#1B5E20"/><polygon points="24,238 2,148 46,148" fill="#2E7D32"/><polygon points="28,238 8,126 48,126" fill="#1B5E20"/><polygon points="52,238 38,180 66,180" fill="#2E7D32"/><polygon points="55,238 38,158 72,158" fill="#1B5E20"/><polygon points="340,238 325,172 355,172" fill="#1B5E20"/><polygon points="345,238 325,150 365,150" fill="#2E7D32"/><polygon points="350,238 330,128 370,128" fill="#1B5E20"/><polygon points="372,238 358,168 386,168" fill="#2E7D32"/><polygon points="375,238 358,148 392,148" fill="#1B5E20"/><rect x="0" y="238" width="400" height="42" fill="#33691E"/><ellipse cx="200" cy="238" rx="205" ry="12" fill="#558B2F"/><ellipse cx="80" cy="245" rx="14" ry="7" fill="#7CB342" opacity="0.7"/><ellipse cx="320" cy="247" rx="12" ry="6" fill="#7CB342" opacity="0.7"/><circle cx="92" cy="250" r="5" fill="#E53935"/><circle cx="105" cy="248" r="4" fill="#FDD835"/><circle cx="118" cy="251" r="4.5" fill="#E53935"/><g class="ftail"><path d="M200,220 Q170,195 158,175 Q165,165 172,172 Q182,188 200,215" fill="#E65100"/><ellipse cx="157" cy="170" rx="10" ry="7" fill="white" opacity="0.9"/></g><ellipse cx="200" cy="220" rx="52" ry="35" fill="#EF6C00"/><ellipse cx="200" cy="216" rx="44" ry="28" fill="#FF8F00"/><ellipse cx="200" cy="228" rx="28" ry="15" fill="#FFF8E1"/><polygon points="180,188 172,165 188,165" fill="#BF360C"/><polygon points="220,188 212,165 228,165" fill="#BF360C"/><ellipse cx="200" cy="195" rx="25" ry="20" fill="#FF8F00"/><ellipse cx="200" cy="193" rx="22" ry="17" fill="#FF9800"/><circle cx="193" cy="189" r="5" fill="white"/><circle cx="207" cy="189" r="5" fill="white"/><circle cx="194" cy="189" r="3" fill="#3E2723"/><circle cx="208" cy="189" r="3" fill="#3E2723"/><circle cx="195" cy="188" r="1.2" fill="white"/><circle cx="209" cy="188" r="1.2" fill="white"/><ellipse cx="200" cy="195" rx="5" ry="3" fill="#BF360C"/><rect x="186" y="248" width="10" height="20" fill="#E65100" rx="4"/><rect x="204" y="248" width="10" height="20" fill="#E65100" rx="4"/><ellipse cx="338" cy="230" rx="16" ry="22" fill="white"/><ellipse cx="330" cy="248" rx="16" ry="10" fill="white"/><ellipse cx="334" cy="218" rx="5" ry="14" fill="white"/><ellipse cx="342" cy="218" rx="5" ry="14" fill="white"/><circle cx="336" cy="230" r="3.5" fill="#BF360C"/><circle cx="337" cy="229" r="1.2" fill="white"/><rect x="329" y="255" width="5" height="13" fill="#BDBDBD" rx="2"/><rect x="340" y="255" width="5" height="13" fill="#BDBDBD" rx="2"/></svg>`;

const SVG_ESPACO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><radialGradient id="earthg" cx="50%" cy="50%"><stop offset="0%" stop-color="#42A5F5"/><stop offset="100%" stop-color="#0D47A1"/></radialGradient><style>@keyframes rfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}@keyframes twinkle{0%,100%{opacity:1}50%{opacity:0.2}}.rocket{animation:rfloat 2.8s ease-in-out infinite}.s1{animation:twinkle 1.5s ease-in-out infinite}.s2{animation:twinkle 2.1s ease-in-out infinite 0.4s}.s3{animation:twinkle 1.8s ease-in-out infinite 0.8s}</style></defs><rect width="400" height="280" fill="#080820"/><circle cx="30" cy="25" r="1.5" fill="white" class="s1"/><circle cx="75" cy="15" r="1" fill="white" class="s2"/><circle cx="140" cy="30" r="2" fill="white" class="s3"/><circle cx="200" cy="12" r="1.5" fill="white" class="s1"/><circle cx="270" cy="22" r="1" fill="white" class="s2"/><circle cx="320" cy="8" r="2" fill="white" class="s3"/><circle cx="55" cy="55" r="1.5" fill="white" class="s2"/><circle cx="110" cy="70" r="1" fill="white" class="s1"/><circle cx="175" cy="48" r="1.5" fill="white" class="s3"/><circle cx="245" cy="62" r="1" fill="white" class="s2"/><circle cx="360" cy="38" r="1.5" fill="white" class="s1"/><circle cx="380" cy="80" r="1" fill="white" class="s3"/><circle cx="10" cy="95" r="1.5" fill="white" class="s2"/><circle cx="295" cy="45" r="2" fill="white" class="s1"/><circle cx="340" cy="90" r="1" fill="white" class="s3"/><circle cx="390" cy="120" r="1.5" fill="white" class="s2"/><circle cx="15" cy="140" r="1" fill="white" class="s1"/><circle cx="380" cy="160" r="1.5" fill="white" class="s3"/><circle cx="92" cy="120" r="1" fill="white" class="s2"/><circle cx="42" cy="200" r="1.5" fill="white" class="s1"/><circle cx="365" cy="200" r="1" fill="white" class="s3"/><circle cx="50" cy="165" r="50" fill="url(#earthg)"/><ellipse cx="35" cy="155" rx="18" ry="12" fill="#2E7D32" opacity="0.8"/><ellipse cx="62" cy="148" rx="14" ry="10" fill="#2E7D32" opacity="0.7"/><ellipse cx="45" cy="178" rx="10" ry="7" fill="#2E7D32" opacity="0.6"/><ellipse cx="65" cy="175" rx="12" ry="8" fill="#2E7D32" opacity="0.5"/><path d="M0,165 Q20,145 50,165 Q80,185 100,165" stroke="white" stroke-width="4" fill="none" opacity="0.2"/><circle cx="335" cy="88" r="34" fill="#FFF176"/><ellipse cx="335" cy="88" rx="58" ry="10" fill="none" stroke="#CE93D8" stroke-width="7" opacity="0.75"/><ellipse cx="335" cy="88" rx="58" ry="10" fill="none" stroke="#E1BEE7" stroke-width="3" opacity="0.5"/><circle cx="350" cy="80" r="7" fill="#EDE7F6" opacity="0.6"/><circle cx="320" cy="95" r="5" fill="#EDE7F6" opacity="0.5"/><g class="rocket"><rect x="186" y="120" width="28" height="70" fill="#E8EAF6" rx="5"/><polygon points="200,88 186,124 214,124" fill="#EF5350"/><circle cx="200" cy="148" r="11" fill="#29B6F6"/><circle cx="200" cy="148" r="8" fill="#0288D1"/><rect x="178" y="148" width="8" height="25" fill="#B0BEC5" rx="3"/><rect x="214" y="148" width="8" height="25" fill="#B0BEC5" rx="3"/><polygon points="192,190 200,218 208,190" fill="#FF6D00" opacity="0.9"/><polygon points="195,190 200,210 205,190" fill="#FFD54F" opacity="0.9"/></g></svg>`;

const SVG_FAZENDINHA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="fsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#64B5F6"/><stop offset="100%" stop-color="#BBDEFB"/></linearGradient><style>@keyframes chicbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.chick{animation:chicbob 1s ease-in-out infinite}</style></defs><rect width="400" height="280" fill="url(#fsky)"/><ellipse cx="90" cy="65" rx="45" ry="20" fill="white" opacity="0.85"/><ellipse cx="120" cy="58" rx="34" ry="16" fill="white" opacity="0.85"/><ellipse cx="72" cy="70" rx="28" ry="14" fill="white" opacity="0.85"/><ellipse cx="310" cy="55" rx="40" ry="18" fill="white" opacity="0.75"/><ellipse cx="338" cy="48" rx="30" ry="14" fill="white" opacity="0.75"/><circle cx="340" cy="45" r="22" fill="#FFD54F"/><path d="M0,210 Q100,190 200,205 Q300,220 400,205 L400,280 L0,280Z" fill="#558B2F"/><rect x="0" y="240" width="400" height="40" fill="#33691E"/><rect x="240" y="128" width="130" height="112" fill="#C62828"/><rect x="240" y="131" width="127" height="109" fill="#E53935"/><polygon points="240,128 370,128 305,72" fill="#B71C1C"/><polygon points="243,128 367,128 305,78" fill="#C62828"/><rect x="282" y="192" width="46" height="48" fill="#5D4037"/><circle cx="304" cy="218" r="3.5" fill="#FFD54F"/><rect x="248" y="152" width="32" height="26" fill="#B3E5FC" rx="3"/><rect x="330" y="152" width="32" height="26" fill="#B3E5FC" rx="3"/><rect x="30" y="155" width="110" height="85" fill="#FFF9C4"/><polygon points="30,155 140,155 85,105" fill="#D32F2F"/><polygon points="33,155 137,155 85,111" fill="#E53935"/><rect x="72" y="200" width="28" height="40" fill="#8D6E63"/><circle cx="97" cy="220" r="3" fill="#FFD54F"/><rect x="38" y="170" width="24" height="20" fill="#B3E5FC" rx="2"/><rect x="118" y="170" width="24" height="20" fill="#B3E5FC" rx="2"/><rect x="155" y="200" width="5" height="50" fill="#795548"/><rect x="180" y="200" width="5" height="50" fill="#795548"/><rect x="205" y="200" width="5" height="50" fill="#795548"/><rect x="230" y="200" width="5" height="50" fill="#795548"/><rect x="155" y="210" width="80" height="5" fill="#A1887F"/><rect x="155" y="228" width="80" height="5" fill="#A1887F"/><ellipse cx="180" cy="248" rx="28" ry="18" fill="white"/><ellipse cx="195" cy="238" rx="18" ry="14" fill="white"/><ellipse cx="174" cy="242" rx="8" ry="7" fill="#5D4037"/><ellipse cx="191" cy="252" rx="7" ry="5" fill="#5D4037"/><ellipse cx="208" cy="232" rx="14" ry="12" fill="white"/><circle cx="204" cy="228" r="3.5" fill="#1A237E"/><circle cx="204" cy="227" r="1.5" fill="white"/><ellipse cx="215" cy="240" rx="7" ry="5" fill="#FFCDD2"/><g class="chick"><ellipse cx="355" cy="252" rx="14" ry="12" fill="#FFD54F"/><ellipse cx="355" cy="242" rx="11" ry="10" fill="#FDD835"/><circle cx="355" cy="240" r="8" fill="#FFD54F"/><polygon points="351,240 360,240 355,247" fill="#FF8F00"/><polygon points="349,237 344,232 348,236" fill="#FF5722"/><circle cx="357" cy="237" r="2.5" fill="#1A237E"/><circle cx="357.8" cy="236.5" r="1" fill="white"/><rect x="351" y="262" width="3" height="10" fill="#FF8F00" rx="1"/><rect x="357" y="262" width="3" height="10" fill="#FF8F00" rx="1"/></g><circle cx="70" cy="195" r="14" fill="#FDD835"/><circle cx="70" cy="185" r="13" fill="#FDD835"/><ellipse cx="70" cy="195" rx="10" ry="7" fill="#795548"/><circle cx="52" cy="190" r="8" fill="#FDD835"/><circle cx="88" cy="190" r="8" fill="#FDD835"/><ellipse cx="140" cy="248" rx="15" ry="8" fill="#FFCDD2"/><ellipse cx="150" cy="240" rx="12" ry="9" fill="#F48FB1"/><ellipse cx="140" cy="238" rx="10" ry="8" fill="#FFCDD2"/><circle cx="144" cy="234" r="4" fill="#F48FB1"/><ellipse cx="138" cy="236" rx="3" ry="4" fill="#FFCDD2"/><ellipse cx="150" cy="236" rx="3" ry="4" fill="#FFCDD2"/><circle cx="143" cy="232" r="2" fill="#1A237E"/><ellipse cx="148" cy="244" rx="4" ry="3" fill="#EF9A9A"/></svg>`;

const SVG_PRINCESAS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="psky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7B1FA2"/><stop offset="100%" stop-color="#F48FB1"/></linearGradient><style>@keyframes sparkpulse{0%,100%{opacity:0.4;transform:scale(0.8)}50%{opacity:1;transform:scale(1.2)}}.sp1{animation:sparkpulse 1.6s ease-in-out infinite}.sp2{animation:sparkpulse 2s ease-in-out infinite 0.5s}.sp3{animation:sparkpulse 1.3s ease-in-out infinite 1s}@keyframes dresssway{0%,100%{transform:skewX(-2deg)}50%{transform:skewX(2deg)}}.dress{animation:dresssway 2s ease-in-out infinite;transform-origin:280px 220px}</style></defs><rect width="400" height="280" fill="url(#psky)"/><circle cx="25" cy="20" r="1.8" fill="#FFD54F" class="sp1"/><circle cx="60" cy="35" r="1.4" fill="white" class="sp2"/><circle cx="100" cy="18" r="1.8" fill="#FFD54F" class="sp3"/><circle cx="150" cy="40" r="1.4" fill="white" class="sp1"/><circle cx="185" cy="22" r="1.8" fill="#FFD54F" class="sp2"/><circle cx="365" cy="25" r="1.4" fill="white" class="sp3"/><circle cx="390" cy="48" r="1.8" fill="#FFD54F" class="sp1"/><path d="M80,100 Q160,60 240,90 Q320,60 380,90" stroke="#FFD54F" stroke-width="4" fill="none" opacity="0.3" stroke-linecap="round"/><rect x="80" y="150" width="40" height="130" fill="#78909C"/><rect x="82" y="152" width="36" height="128" fill="#90A4AE"/><polygon points="100,118 80,154 120,154" fill="#6A1B9A"/><circle cx="100" cy="114" r="5" fill="#FFD54F"/><rect x="155" y="120" width="50" height="160" fill="#78909C"/><rect x="158" y="122" width="44" height="158" fill="#90A4AE"/><polygon points="180,85 155,124 205,124" fill="#6A1B9A"/><circle cx="180" cy="80" r="7" fill="#FFD54F"/><rect x="230" y="138" width="40" height="142" fill="#78909C"/><rect x="232" y="140" width="36" height="140" fill="#90A4AE"/><polygon points="250,106 230,142 270,142" fill="#6A1B9A"/><circle cx="250" cy="102" r="5" fill="#FFD54F"/><rect x="118" y="160" width="70" height="120" fill="#B0BEC5"/><rect x="121" y="162" width="64" height="118" fill="#CFD8DC"/><rect x="148" y="190" width="14" height="90" fill="#8D6E63" rx="3"/><rect x="140" y="204" width="30" height="8" fill="#6D4C41"/><ellipse cx="148" cy="204" rx="6" ry="6" fill="#B0BEC5"/><ellipse cx="162" cy="204" rx="6" ry="6" fill="#B0BEC5"/><rect x="128" y="172" width="20" height="16" fill="#80DEEA" rx="2"/><rect x="162" y="172" width="20" height="16" fill="#80DEEA" rx="2"/><polygon points="88,220 92,230 96,220 100,230 104,220 108,230 112,220" fill="#AD1457" opacity="0.7"/><ellipse cx="100" cy="240" rx="18" ry="10" fill="#AD1457" opacity="0.5"/><polygon points="238,222 242,232 246,222 250,232 254,222 258,232 262,222" fill="#AD1457" opacity="0.7"/><ellipse cx="250" cy="242" rx="18" ry="10" fill="#AD1457" opacity="0.5"/><circle cx="330" cy="100" r="14" fill="#FFCCBC"/><ellipse cx="330" cy="95" rx="14" ry="8" fill="#FFE0B2"/><polygon points="320,92 315,74 326,88" fill="#795548"/><polygon points="340,92 345,74 334,88" fill="#795548"/><ellipse cx="330" cy="90" rx="12" ry="5" fill="#FFD54F"/><polygon points="322,88 330,78 338,88" fill="#FFD54F"/><circle cx="326" cy="100" r="2.5" fill="#4527A0"/><circle cx="334" cy="100" r="2.5" fill="#4527A0"/><ellipse cx="330" cy="106" rx="3" ry="2" fill="#EF5350"/><g class="dress"><path d="M316,114 Q298,160 288,200 L370,200 Q360,160 344,114 Z" fill="#E91E63"/><path d="M318,116 Q302,158 292,196 L366,196 Q358,158 342,116 Z" fill="#F06292"/><ellipse cx="330" cy="116" rx="16" ry="8" fill="#FFCCBC"/><rect x="326" y="108" width="8" height="12" fill="#FFCCBC"/></g><path d="M318,200 L290,240 Q310,248 330,244 Q350,248 370,240 L342,200" fill="#E91E63"/><ellipse cx="295" cy="246" rx="10" ry="6" fill="#FFCCBC"/><ellipse cx="365" cy="246" rx="10" ry="6" fill="#FFCCBC"/><circle cx="42" cy="244" r="5" fill="#E91E63" class="sp1"/><ellipse cx="42" cy="244" rx="5" ry="3" fill="#E91E63"/><path d="M38,240 L42,236 L46,240" fill="none" stroke="#4CAF50" stroke-width="2"/><circle cx="68" cy="250" r="5" fill="#F06292" class="sp2"/><path d="M64,246 L68,242 L72,246" fill="none" stroke="#4CAF50" stroke-width="2"/></svg>`;

const SVG_SUPERHEROIS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="nsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0D1B3E"/><stop offset="100%" stop-color="#1A237E"/></linearGradient><radialGradient id="glow" cx="50%" cy="50%"><stop offset="0%" stop-color="#FFD54F" stop-opacity="0.6"/><stop offset="100%" stop-color="#FFD54F" stop-opacity="0"/></radialGradient><style>@keyframes herofly{0%,100%{transform:translateY(0) rotate(-5deg)}50%{transform:translateY(-10px) rotate(5deg)}}.hero{animation:herofly 2.5s ease-in-out infinite}@keyframes glowpulse{0%,100%{opacity:0.4}50%{opacity:0.9}}.glow{animation:glowpulse 1.8s ease-in-out infinite}</style></defs><rect width="400" height="280" fill="url(#nsky)"/><circle cx="25" cy="25" r="1.5" fill="white" opacity="0.8"/><circle cx="70" cy="15" r="1" fill="white" opacity="0.7"/><circle cx="125" cy="30" r="1.5" fill="white" opacity="0.9"/><circle cx="215" cy="18" r="1" fill="white" opacity="0.8"/><circle cx="295" cy="12" r="1.5" fill="white" opacity="0.7"/><circle cx="370" cy="28" r="1" fill="white" opacity="0.9"/><circle cx="385" cy="55" r="1.5" fill="white" opacity="0.6"/><circle cx="350" cy="45" r="28" fill="#ECEFF1"/><circle cx="358" cy="38" r="28" fill="#0D1B3E"/><rect x="0" y="195" width="50" height="85" fill="#0D47A1"/><rect x="0" y="198" width="47" height="82" fill="#1565C0"/><rect x="55" y="215" width="38" height="65" fill="#0D47A1"/><rect x="58" y="218" width="35" height="62" fill="#1565C0"/><rect x="98" y="185" width="55" height="95" fill="#0D47A1"/><rect x="100" y="187" width="52" height="93" fill="#1565C0"/><rect x="158" y="200" width="42" height="80" fill="#1565C0"/><rect x="257" y="190" width="45" height="90" fill="#0D47A1"/><rect x="259" y="192" width="42" height="88" fill="#1565C0"/><rect x="308" y="205" width="38" height="75" fill="#0D47A1"/><rect x="350" y="185" width="50" height="95" fill="#1565C0"/><rect x="5" y="205" width="8" height="6" fill="#FFF176" rx="1"/><rect x="20" y="205" width="8" height="6" fill="#FFF176" rx="1"/><rect x="5" y="220" width="8" height="6" fill="#FFF176" rx="1"/><rect x="20" y="220" width="8" height="6" fill="#81D4FA" rx="1"/><rect x="60" y="222" width="7" height="5" fill="#FFF176" rx="1"/><rect x="72" y="222" width="7" height="5" fill="#FFF176" rx="1"/><rect x="102" y="195" width="9" height="6" fill="#FFF176" rx="1"/><rect x="118" y="195" width="9" height="6" fill="#FFF176" rx="1"/><rect x="134" y="195" width="9" height="6" fill="#81D4FA" rx="1"/><rect x="260" y="200" width="8" height="6" fill="#FFF176" rx="1"/><rect x="276" y="200" width="8" height="6" fill="#FFF176" rx="1"/><rect x="260" y="215" width="8" height="6" fill="#81D4FA" rx="1"/><rect x="355" y="195" width="9" height="6" fill="#FFF176" rx="1"/><rect x="370" y="195" width="9" height="6" fill="#FFF176" rx="1"/><circle cx="210" cy="130" r="40" fill="url(#glow)" class="glow"/><g class="hero"><ellipse cx="210" cy="128" rx="18" ry="20" fill="#FFCCBC"/><ellipse cx="210" cy="122" rx="17" ry="10" fill="#EF5350"/><polygon points="198,118 210,108 222,118" fill="#EF5350"/><circle cx="204" cy="124" r="3.5" fill="#1A237E"/><circle cx="216" cy="124" r="3.5" fill="#1A237E"/><circle cx="205" cy="123" r="1.2" fill="white"/><circle cx="217" cy="123" r="1.2" fill="white"/><path d="M205,130 Q210,135 215,130" stroke="#E64A19" stroke-width="1.8" fill="none" stroke-linecap="round"/><rect x="195" y="148" width="30" height="40" fill="#1565C0" rx="5"/><polygon points="198,152 190,176 196,176" fill="#FFD54F"/><rect x="220" y="150" width="3" height="35" fill="#0D47A1" rx="1"/><path d="M222,150 Q245,160 248,185 Q235,180 220,185" fill="#EF5350"/><rect x="180" y="154" width="3" height="30" fill="#0D47A1" rx="1"/><rect x="224" y="182" width="14" height="22" fill="#1565C0" rx="4"/><rect x="183" y="178" width="14" height="24" fill="#1565C0" rx="4"/><ellipse cx="232" cy="204" rx="8" ry="4" fill="#0D47A1"/><ellipse cx="190" cy="202" rx="8" ry="4" fill="#0D47A1"/><line x1="210" y1="148" x2="162" y2="140" stroke="#FFD54F" stroke-width="2.5" opacity="0.6"/><line x1="210" y1="148" x2="255" y2="135" stroke="#FFD54F" stroke-width="2.5" opacity="0.6"/><line x1="210" y1="148" x2="210" y2="100" stroke="#FFD54F" stroke-width="2.5" opacity="0.6"/><line x1="210" y1="148" x2="168" y2="116" stroke="#FFD54F" stroke-width="2" opacity="0.4"/><line x1="210" y1="148" x2="252" y2="115" stroke="#FFD54F" stroke-width="2" opacity="0.4"/></g></svg>`;

const SVG_NATUREZA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><defs><linearGradient id="natsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#29B6F6"/><stop offset="50%" stop-color="#81D4FA"/><stop offset="100%" stop-color="#E1F5FE"/></linearGradient><linearGradient id="river" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4FC3F7"/><stop offset="100%" stop-color="#0288D1"/></linearGradient><style>@keyframes ripple{0%{transform:scaleX(1)}50%{transform:scaleX(1.05)}100%{transform:scaleX(1)}}.riv{animation:ripple 2s ease-in-out infinite}@keyframes birdfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.bird{animation:birdfloat 2.5s ease-in-out infinite}</style></defs><rect width="400" height="280" fill="url(#natsky)"/><circle cx="345" cy="42" r="22" fill="#FFE082"/><ellipse cx="95" cy="60" rx="38" ry="16" fill="white" opacity="0.8"/><ellipse cx="122" cy="53" rx="28" ry="13" fill="white" opacity="0.8"/><ellipse cx="78" cy="65" rx="22" ry="11" fill="white" opacity="0.8"/><polygon points="50,210 25,148 75,148" fill="#78909C"/><polygon points="53,210 28,155 78,155" fill="#90A4AE"/><polygon points="80,210 60,165 100,165" fill="#78909C"/><polygon points="120,210 92,128 148,128" fill="#607D8B"/><polygon points="124,210 96,136 152,136" fill="#78909C"/><polygon points="155,210 132,152 178,152" fill="#546E7A"/><polygon points="80,155 70,175 90,175" fill="white" opacity="0.7"/><polygon points="120,136 110,158 130,158" fill="white" opacity="0.6"/><polygon points="20,240 400,210 400,280 0,280Z" fill="#2E7D32"/><rect x="0" y="225" width="400" height="18" fill="url(#river)" class="riv"/><path d="M0,226 Q50,218 100,226 Q150,234 200,226 Q250,218 300,226 Q350,234 400,226" stroke="#29B6F6" stroke-width="3" fill="none" opacity="0.5"/><path d="M20,232 Q60,226 100,232 Q140,238 180,232" stroke="white" stroke-width="1.5" fill="none" opacity="0.4"/><polygon points="265,240 240,192 290,192" fill="#2E7D32"/><polygon points="268,240 240,176 296,176" fill="#388E3C"/><polygon points="272,240 244,158 300,158" fill="#2E7D32"/><polygon points="305,240 280,195 330,195" fill="#1B5E20"/><polygon points="308,240 280,178 336,178" fill="#2E7D32"/><polygon points="340,240 318,198 362,198" fill="#388E3C"/><polygon points="343,240 318,180 368,180" fill="#2E7D32"/><polygon points="370,240 352,205 388,205" fill="#1B5E20"/><polygon points="373,240 352,190 394,190" fill="#2E7D32"/><ellipse cx="185" cy="228" rx="40" ry="10" fill="#1565C0" opacity="0.7" rx="5"/><path d="M150,228 Q185,218 220,228 Q185,236 150,228" fill="#4FC3F7" opacity="0.6"/><rect x="175" y="220" width="18" height="6" fill="#5D4037" rx="3"/><ellipse cx="188" cy="218" rx="14" ry="4" fill="#4E342E"/><circle cx="178" cy="216" r="5" fill="#FFCCBC"/><circle cx="198" cy="215" r="5" fill="#FFCCBC"/><circle cx="178" cy="215" r="2" fill="#5D4037"/><circle cx="198" cy="214" r="2" fill="#5D4037"/><g class="bird"><ellipse cx="220" cy="200" rx="18" ry="7" fill="white"/><ellipse cx="232" cy="196" rx="10" ry="6" fill="white"/><path d="M240,196 Q248,190 244,194" stroke="white" stroke-width="2" fill="none"/><polygon points="240,196 248,195 242,192" fill="#FFA726"/><circle cx="243" cy="194" r="2" fill="#1A237E"/><rect x="220" y="207" width="4" height="14" fill="#FFA726" rx="1"/><rect x="228" y="207" width="4" height="14" fill="#FFA726" rx="1"/></g><circle cx="245" cy="245" r="5" fill="#E91E63"/><circle cx="245" cy="245" r="3" fill="#F06292"/><path d="M241,241 L245,237 L249,241" fill="none" stroke="#388E3C" stroke-width="1.8"/><circle cx="258" cy="248" r="4" fill="#AB47BC"/><path d="M254,244 L258,240 L262,244" fill="none" stroke="#388E3C" stroke-width="1.8"/><circle cx="232" cy="248" r="4.5" fill="#F44336"/><path d="M228,244 L232,240 L236,244" fill="none" stroke="#388E3C" stroke-width="1.8"/></svg>`;

// ── Converter SVG para data URL ───────────────────────────────────────────────

function svgToDataUrl(svgStr: string): string {
  return `data:image/svg+xml,${encodeURIComponent(svgStr.trim())}`;
}

const THEME_COVERS: Record<string, string> = {
  dinossauros: svgToDataUrl(SVG_DINOSSAUROS),
  animais:     svgToDataUrl(SVG_ANIMAIS),
  espaco:      svgToDataUrl(SVG_ESPACO),
  fazendinha:  svgToDataUrl(SVG_FAZENDINHA),
  princesas:   svgToDataUrl(SVG_PRINCESAS),
  "super-herois": svgToDataUrl(SVG_SUPERHEROIS),
  natureza:    svgToDataUrl(SVG_NATUREZA),
};

// ── Histórias com texto em português correto (com acentos) ────────────────────

const SEED_DATA = [
  {
    theme: "dinossauros",
    readingLevel: "iniciante" as const,
    ageMin: 4, ageMax: 7,
    title: "Dino e o Amigo Novo",
    description: "Dino é um pequeno dinossauro que mora na floresta verde. Um dia, ele encontra um amigo diferente de tudo que já viu.",
    pages: [
      { page_number: 1, text: "Dino vivia na grande floresta verde. As árvores eram altas e o céu era azul. Dino gostava muito de brincar sozinho entre as folhas." },
      { page_number: 2, text: "Um dia, Dino ouviu um som estranho atrás de uma pedra grande. Ele foi devagar, com cuidado, para ver o que era." },
      { page_number: 3, text: "Era um pequeno dinossauro com manchas coloridas. Ele estava sozinho e com medo. Dino sorriu e disse: Olá, meu nome é Dino. Qual é o seu?" },
      { page_number: 4, text: "O pequeno dinossauro respondeu: Meu nome é Lino. Eu me perdi da minha família. Dino ficou com vontade de ajudar." },
      { page_number: 5, text: "Juntos, eles caminharam pela floresta. Dino conhecia todos os caminhos. Ele mostrou o rio, as flores e as frutas mais gostosas." },
      { page_number: 6, text: "Ao entardecer, encontraram a família de Lino. Todos ficaram muito felizes. Dino aprendeu que ajudar os outros é a melhor aventura de todas." },
    ],
    questions: [
      { question: "Onde Dino morava?", option_a: "No oceano", option_b: "Na floresta verde", option_c: "Na cidade", correct_answer: "b" as const, difficulty: 1 },
      { question: "Como se chamava o novo amigo de Dino?", option_a: "Rex", option_b: "Tino", option_c: "Lino", correct_answer: "c" as const, difficulty: 1 },
      { question: "O que Dino aprendeu no final da história?", option_a: "Que correr é divertido", option_b: "Que ajudar os outros é a melhor aventura", option_c: "Que frutas são gostosas", correct_answer: "b" as const, difficulty: 2 },
    ],
  },
  {
    theme: "animais",
    readingLevel: "iniciante" as const,
    ageMin: 5, ageMax: 8,
    title: "A Raposa Corajosa",
    description: "Luna é uma raposa que vive na floresta encantada. Quando seus amigos precisam de ajuda, ela mostra que a coragem mora dentro do coração.",
    pages: [
      { page_number: 1, text: "Luna era uma raposa de pelo laranja e olhos brilhantes. Ela morava numa toca aconchegante no meio da floresta encantada." },
      { page_number: 2, text: "Um dia, o coelho Bento chegou correndo. Ele estava muito assustado. As flores do jardim estão desaparecendo, disse ele." },
      { page_number: 3, text: "Luna decidiu investigar. Ela seguiu as pegadas no chão molhado da floresta. As pegadas levavam até uma gruta escura." },
      { page_number: 4, text: "Luna respirou fundo e entrou. Dentro, encontrou um cervo que tinha caído num buraco e estava com fome. Ele comia as flores para sobreviver." },
      { page_number: 5, text: "Luna chamou todos os animais da floresta. Juntos, eles ajudaram o cervo a sair do buraco. O cervo agradeceu muito." },
      { page_number: 6, text: "Os amigos plantaram novas flores no jardim. Luna aprendeu que a coragem é agir mesmo quando temos medo. E que juntos somos mais fortes." },
    ],
    questions: [
      { question: "Qual era o problema que Bento contou para Luna?", option_a: "As árvores estavam caindo", option_b: "As flores estavam desaparecendo", option_c: "O rio estava secando", correct_answer: "b" as const, difficulty: 1 },
      { question: "Quem estava comendo as flores?", option_a: "Um urso", option_b: "Uma abelha gigante", option_c: "Um cervo que caiu num buraco", correct_answer: "c" as const, difficulty: 2 },
      { question: "O que Luna aprendeu no final?", option_a: "Que é melhor ficar em casa", option_b: "Que a coragem é agir mesmo com medo", option_c: "Que cervos são perigosos", correct_answer: "b" as const, difficulty: 2 },
    ],
  },
  {
    theme: "espaco",
    readingLevel: "intermediario" as const,
    ageMin: 6, ageMax: 10,
    title: "Pedro e a Viagem ao Espaço",
    description: "Pedro sempre sonhou em ser astronauta. Com muito estudo e determinação, ele realiza o maior sonho da sua vida: viajar pelas estrelas.",
    pages: [
      { page_number: 1, text: "Pedro tinha sete anos e adorava olhar para o céu estrelado todas as noites. Seu sonho maior era um dia viajar ao espaço sideral." },
      { page_number: 2, text: "Ele estudava muito. Lia livros sobre planetas, estrelas e foguetes. Na escola, era o aluno mais curioso da turma." },
      { page_number: 3, text: "Um dia, Pedro foi selecionado para um programa especial de jovens exploradores espaciais. Ele não acreditava na sua sorte." },
      { page_number: 4, text: "A decolagem foi incrível. O foguete subiu rapidamente. Pela janela, Pedro viu a Terra ficando cada vez menor, azul e linda." },
      { page_number: 5, text: "No espaço, Pedro visitou a Lua. Ela era cinza e cheia de crateras. Ele recolheu amostras de pedras lunares para os cientistas estudarem." },
      { page_number: 6, text: "Depois, Pedro viajou até Marte, o planeta vermelho. A paisagem era linda, mas muito diferente da Terra." },
      { page_number: 7, text: "Ao voltar para casa, Pedro sorriu. Ele sabia que os sonhos se realizam com muito estudo e muita coragem. E que o universo é imenso e maravilhoso." },
    ],
    questions: [
      { question: "O que Pedro sonhava em ser?", option_a: "Médico", option_b: "Astronauta", option_c: "Professor", correct_answer: "b" as const, difficulty: 1 },
      { question: "Qual planeta vermelho Pedro visitou?", option_a: "Júpiter", option_b: "Saturno", option_c: "Marte", correct_answer: "c" as const, difficulty: 2 },
      { question: "O que Pedro aprendeu com a viagem?", option_a: "Que o espaço é perigoso e não vale a pena", option_b: "Que só cientistas podem viajar", option_c: "Que os sonhos se realizam com estudo e coragem", correct_answer: "c" as const, difficulty: 2 },
    ],
  },
  {
    theme: "fazendinha",
    readingLevel: "iniciante" as const,
    ageMin: 4, ageMax: 7,
    title: "A Grande Colheita",
    description: "Na Fazenda Feliz, os animais descobrem que trabalhar juntos faz tudo ficar melhor. Uma história sobre amizade e cooperação.",
    pages: [
      { page_number: 1, text: "Na Fazenda Feliz vivia uma turma animada: Bela a vaca, Pintinho o pintinho, Ovelha Branca e o Porquinho Grunhido." },
      { page_number: 2, text: "Era dia de colheita. Havia muitas maçãs, cenouras e morangos para colher. Mas era muito trabalho para um só animal." },
      { page_number: 3, text: "Bela a vaca disse: Vamos trabalhar juntos! Cada um faz uma parte. Assim terminamos mais rápido e ninguém fica cansado." },
      { page_number: 4, text: "Pintinho catou os grãos. Ovelha Branca ajudou a carregar as cestas. Porquinho Grunhido cavou a terra. Bela organizou tudo." },
      { page_number: 5, text: "No final do dia, toda a colheita estava pronta. A fazenda estava cheia de cores e aromas gostosos. Os animais bateram palmas juntos." },
      { page_number: 6, text: "O fazendeiro chegou e ficou muito feliz. Ele preparou uma festa especial para todos. A turma comeu, dançou e riu muito." },
    ],
    questions: [
      { question: "Como se chamava a fazenda da história?", option_a: "Fazenda do Sol", option_b: "Fazenda Verde", option_c: "Fazenda Feliz", correct_answer: "c" as const, difficulty: 1 },
      { question: "O que os animais fizeram para terminar a colheita?", option_a: "Esperaram o fazendeiro", option_b: "Trabalharam juntos", option_c: "Chamaram ajuda de fora", correct_answer: "b" as const, difficulty: 1 },
      { question: "O que aconteceu no final?", option_a: "Os animais brigaram", option_b: "A colheita não ficou pronta", option_c: "O fazendeiro fez uma festa para todos", correct_answer: "c" as const, difficulty: 2 },
    ],
  },
  {
    theme: "princesas",
    readingLevel: "intermediario" as const,
    ageMin: 5, ageMax: 9,
    title: "A Princesa do Mapa Perdido",
    description: "A princesa Sofia descobre um mapa misterioso escondido na biblioteca do castelo. Ela parte em uma aventura para desvendar o segredo antigo.",
    pages: [
      { page_number: 1, text: "Sofia era uma princesa corajosa que amava resolver mistérios. Ela preferia explorar a biblioteca a usar vestidos de gala." },
      { page_number: 2, text: "Um dia, um livro antigo caiu da prateleira e um mapa enrolado rolou pelo chão. O mapa mostrava um caminho dentro do próprio castelo." },
      { page_number: 3, text: "Sofia seguiu as pistas. Subiu escadas secretas, atravessou corredores esquecidos e descobriu uma porta atrás de uma tapeçaria antiga." },
      { page_number: 4, text: "Por trás da porta havia um jardim oculto cheio de plantas raras e flores que brilhavam no escuro. Era lindo demais para acreditar." },
      { page_number: 5, text: "No centro do jardim havia uma fonte antiga. Dentro dela, Sofia encontrou um diário da fundadora do castelo, a Rainha Lyra." },
      { page_number: 6, text: "O diário contava que o jardim foi criado para que as futuras princesas nunca esquecessem: a força maior não está nos tesouros, mas na curiosidade e na coragem." },
      { page_number: 7, text: "Sofia fechou o diário com cuidado. Ela entendeu a mensagem. Voltou ao castelo com o coração cheio e a certeza de que sempre haveria novos mistérios para descobrir." },
    ],
    questions: [
      { question: "O que Sofia encontrou no livro antigo?", option_a: "Um mapa", option_b: "Uma carta", option_c: "Uma chave", correct_answer: "a" as const, difficulty: 1 },
      { question: "O que havia no centro do jardim secreto?", option_a: "Um tesouro de ouro", option_b: "Uma fonte antiga com um diário", option_c: "Uma estátua de dragão", correct_answer: "b" as const, difficulty: 2 },
      { question: "Qual foi a mensagem que Sofia aprendeu?", option_a: "Que tesouros são o mais importante", option_b: "Que a curiosidade e a coragem são a maior força", option_c: "Que jardins secretos são perigosos", correct_answer: "b" as const, difficulty: 2 },
    ],
  },
  {
    theme: "super-herois",
    readingLevel: "intermediario" as const,
    ageMin: 6, ageMax: 10,
    title: "O Superpoder da Bondade",
    description: "Mateus acha que não tem nenhum superpoder especial. Mas um dia ele descobre que a bondade é o mais poderoso de todos os poderes.",
    pages: [
      { page_number: 1, text: "Mateus adorava histórias de super-heróis. Ele sonhava ter um superpoder, mas achava que era um menino comum e corrente." },
      { page_number: 2, text: "No caminho para a escola, Mateus viu uma senhora com dificuldade para carregar suas sacolas. Sem pensar, foi lá ajudar." },
      { page_number: 3, text: "A senhora sorriu e disse: Você tem um coração muito bom, meu filho. Mateus não entendeu por que isso o fez sentir tão bem." },
      { page_number: 4, text: "Na escola, um colega estava chorando sozinho no recreio. Ninguém havia ido conversar. Mateus foi até ele e ouviu sua história com atenção." },
      { page_number: 5, text: "O colega se chamava Ben e acabara de mudar de cidade. Estava com saudade de tudo. Mateus convidou Ben para jogar com a turma dele." },
      { page_number: 6, text: "Aquela tarde, Mateus olhou ao redor: a senhora estava sorrindo, Ben estava rindo, os amigos estavam felizes. E tudo por causa de pequenos gestos." },
      { page_number: 7, text: "Mateus entendeu. Seu superpoder era a bondade. E diferente de outros poderes, ela não tinha limite: quanto mais você usa, mais ela cresce." },
    ],
    questions: [
      { question: "Por que Mateus achava que era comum?", option_a: "Porque ele era fraco", option_b: "Porque achava que não tinha superpoder", option_c: "Porque era muito tímido", correct_answer: "b" as const, difficulty: 1 },
      { question: "Como se chamava o colega novo que Mateus ajudou?", option_a: "Léo", option_b: "Carlos", option_c: "Ben", correct_answer: "c" as const, difficulty: 1 },
      { question: "Qual é o superpoder de Mateus?", option_a: "A velocidade", option_b: "A força física", option_c: "A bondade", correct_answer: "c" as const, difficulty: 2 },
    ],
  },
  {
    theme: "natureza",
    readingLevel: "avancado" as const,
    ageMin: 7, ageMax: 12,
    title: "A Jornada pelo Rio Azul",
    description: "Ana e seu avô embarcam em uma canoa pelo Rio Azul. Durante a viagem, ela descobre os segredos da floresta e aprende a importância de cuidar da natureza.",
    pages: [
      { page_number: 1, text: "Ana acordou antes do sol nascer. Seu avô João já estava na margem do rio, preparando a pequena canoa de madeira. Hoje era o grande dia da jornada." },
      { page_number: 2, text: "O Rio Azul cortava a floresta como uma fita brilhante. Nas margens, árvores enormes mergulhavam seus galhos na água fria. O ar cheirava a terra molhada e flores silvestres." },
      { page_number: 3, text: "Ana avistou uma lontra brincando entre as pedras. Avô João explicou: a lontra é a guardiã do rio. Quando ela está saudável, o rio está saudável." },
      { page_number: 4, text: "Mais adiante, passaram por uma área onde as árvores estavam cortadas. O rio ali era mais raso e turvo. Ana ficou triste ao ver aquele contraste." },
      { page_number: 5, text: "Avô João disse: Você está vendo a diferença? Quando cuidamos da floresta, o rio agradece. Quando destruímos, ele sofre. Tudo na natureza está conectado." },
      { page_number: 6, text: "Eles pararam numa praia de areia branca para o almoço. Enquanto comiam, um colibri pousou na flor ao lado de Ana. Era pequeno como um polegar e brilhava como uma joia." },
      { page_number: 7, text: "Ao voltar, o céu ficou laranja e rosa. Ana olhou para o rio que refletia as cores do entardecer. Ela fez uma promessa silenciosa: cuidaria deste lugar para sempre." },
      { page_number: 8, text: "Na margem, Ana abraçou o avô com força. Ela aprendera mais naquele dia do que em muitos anos. A natureza é o maior livro que existe, e ela estava apenas na primeira página." },
    ],
    questions: [
      { question: "Quem é a guardiã do rio, segundo Avô João?", option_a: "A garça", option_b: "A lontra", option_c: "O peixe dourado", correct_answer: "b" as const, difficulty: 1 },
      { question: "O que acontecia com o rio perto das árvores cortadas?", option_a: "Ficava mais limpo e largo", option_b: "Ficava mais raso e turvo", option_c: "Ficava mais rápido", correct_answer: "b" as const, difficulty: 2 },
      { question: "Qual promessa Ana fez ao final da viagem?", option_a: "Voltar ao rio todo fim de semana", option_b: "Aprender a remar melhor", option_c: "Cuidar daquele lugar para sempre", correct_answer: "c" as const, difficulty: 3 },
    ],
  },
];

// ── Funções de servidor ────────────────────────────────────────────────────────

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
      const coverImage = THEME_COVERS[seed.theme] ?? null;

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
      console.error(`[seed] Falha ao inserir história ${seed.theme}:`, err);
    }
  }

  return { seeded: true, count: seededCount };
});

export const generateExtraStory = createServerFn({ method: "POST" })
  .validator(z.object({ theme: z.string() }))
  .handler(async ({ data }) => {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) throw new Error("OPENAI_API_KEY não configurada");

    const readingLevels = ["iniciante", "intermediario", "avancado"] as const;
    const level = readingLevels[Math.floor(Math.random() * readingLevels.length)];

    const prompt = `Crie uma história infantil curta em português brasileiro com tema: ${data.theme}.
Regras OBRIGATÓRIAS:
- PROIBIDO usar emojis em qualquer parte do texto
- Use português correto com todos os acentos ortográficos
- Frases curtas e simples, adequadas para crianças de 5 a 10 anos
- Nível de leitura: ${level}
- História com exatamente 6 páginas
- Linguagem acolhedora e positiva
- Sem violência, apenas aventura e aprendizado
- Os personagens devem ter nomes brasileiros

Retorne APENAS um JSON válido:
{
  "title": "Título da História",
  "description": "Descrição curta de 2 frases sem emojis",
  "pages": [
    {"page_number": 1, "text": "Texto da página sem emojis"},
    {"page_number": 2, "text": "Texto da página sem emojis"},
    {"page_number": 3, "text": "Texto da página sem emojis"},
    {"page_number": 4, "text": "Texto da página sem emojis"},
    {"page_number": 5, "text": "Texto da página sem emojis"},
    {"page_number": 6, "text": "Texto da página sem emojis"}
  ],
  "questions": [
    {"question": "Pergunta 1?", "option_a": "Opção A", "option_b": "Opção B", "option_c": "Opção C", "correct_answer": "a", "difficulty": 1},
    {"question": "Pergunta 2?", "option_a": "Opção A", "option_b": "Opção B", "option_c": "Opção C", "correct_answer": "b", "difficulty": 2},
    {"question": "Pergunta 3?", "option_a": "Opção A", "option_b": "Opção B", "option_c": "Opção C", "correct_answer": "c", "difficulty": 2}
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

    const coverImage = THEME_COVERS[data.theme] ?? null;

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
