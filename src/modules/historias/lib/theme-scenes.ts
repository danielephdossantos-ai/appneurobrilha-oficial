// 2D illustrated SVG scenes — one per theme, no emojis, proper characters + environments

export const THEME_SCENES: Record<string, string> = {

dinossauros: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
<defs>
  <linearGradient id="dsky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4FC3F7"/>
    <stop offset="100%" stop-color="#B3E5FC"/>
  </linearGradient>
  <linearGradient id="dgrass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#66BB6A"/>
    <stop offset="100%" stop-color="#2E7D32"/>
  </linearGradient>
</defs>
<rect width="400" height="300" fill="url(#dsky)"/>
<circle cx="345" cy="52" r="32" fill="#FFE082" opacity="0.95"/>
<circle cx="345" cy="52" r="25" fill="#FFD54F"/>
<ellipse cx="72" cy="58" rx="46" ry="18" fill="white" opacity="0.92"/>
<ellipse cx="105" cy="50" rx="35" ry="14" fill="white" opacity="0.92"/>
<ellipse cx="52" cy="64" rx="26" ry="12" fill="white" opacity="0.9"/>
<ellipse cx="230" cy="44" rx="42" ry="17" fill="white" opacity="0.8"/>
<ellipse cx="262" cy="37" rx="30" ry="13" fill="white" opacity="0.8"/>
<polygon points="335,220 295,115 375,115" fill="#6D4C41" opacity="0.55"/>
<polygon points="335,220 303,128 367,128" fill="#795548" opacity="0.5"/>
<ellipse cx="335" cy="112" rx="13" ry="7" fill="#FF5722" opacity="0.5"/>
<rect x="12" y="178" width="9" height="58" fill="#6D4C41"/>
<ellipse cx="17" cy="173" rx="20" ry="13" fill="#2E7D32"/>
<ellipse cx="17" cy="164" rx="15" ry="10" fill="#43A047"/>
<rect x="52" y="188" width="7" height="48" fill="#6D4C41"/>
<ellipse cx="56" cy="183" rx="16" ry="10" fill="#388E3C"/>
<rect x="352" y="182" width="8" height="52" fill="#6D4C41"/>
<ellipse cx="356" cy="177" rx="18" ry="12" fill="#1B5E20"/>
<ellipse cx="356" cy="168" rx="14" ry="9" fill="#2E7D32"/>
<rect x="384" y="192" width="7" height="42" fill="#6D4C41"/>
<ellipse cx="388" cy="188" rx="14" ry="9" fill="#1B5E20"/>
<rect x="0" y="232" width="400" height="68" fill="url(#dgrass)"/>
<ellipse cx="200" cy="232" rx="210" ry="18" fill="#4CAF50" opacity="0.7"/>
<path d="M125,232 Q108,210 96,216" stroke="#4CAF50" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M125,232 Q118,206 135,204" stroke="#388E3C" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M125,232 Q142,209 150,215" stroke="#4CAF50" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M280,235 Q263,213 252,220" stroke="#4CAF50" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M280,235 Q274,208 292,207" stroke="#388E3C" stroke-width="4" fill="none" stroke-linecap="round"/>
<ellipse cx="205" cy="200" rx="50" ry="40" fill="#66BB6A"/>
<ellipse cx="205" cy="196" rx="44" ry="34" fill="#81C784"/>
<ellipse cx="252" cy="170" rx="34" ry="26" fill="#81C784"/>
<ellipse cx="280" cy="177" rx="20" ry="13" fill="#A5D6A7"/>
<path d="M268,179 Q280,186 292,179" stroke="#66BB6A" stroke-width="3" fill="none" stroke-linecap="round"/>
<rect x="272" y="179" width="6" height="7" fill="white" rx="1.5"/>
<rect x="281" y="180" width="5" height="6" fill="white" rx="1.5"/>
<circle cx="259" cy="162" r="9" fill="white"/>
<circle cx="261" cy="162" r="6" fill="#1565C0"/>
<circle cx="263" cy="160" r="2.5" fill="white"/>
<circle cx="265" cy="156" r="3" fill="white" opacity="0.7"/>
<circle cx="280" cy="165" r="3" fill="#66BB6A"/>
<path d="M218,188 Q198,192 194,202" stroke="#66BB6A" stroke-width="12" stroke-linecap="round" fill="none"/>
<path d="M194,202 L188,196 M194,202 L192,209" stroke="#4CAF50" stroke-width="4" stroke-linecap="round"/>
<path d="M162,208 Q138,198 118,214" stroke="#66BB6A" stroke-width="18" stroke-linecap="round" fill="none"/>
<path d="M118,214 Q100,220 96,212" stroke="#66BB6A" stroke-width="12" stroke-linecap="round" fill="none"/>
<rect x="186" y="232" width="22" height="32" fill="#4CAF50" rx="10"/>
<rect x="214" y="232" width="22" height="32" fill="#4CAF50" rx="10"/>
<ellipse cx="197" cy="263" rx="15" ry="8" fill="#388E3C"/>
<ellipse cx="225" cy="263" rx="15" ry="8" fill="#388E3C"/>
<polygon points="213,161 219,145 225,161" fill="#388E3C"/>
<polygon points="224,158 231,142 238,158" fill="#388E3C"/>
<polygon points="235,156 243,140 251,156" fill="#388E3C"/>
</svg>`,

animais: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
<defs>
  <linearGradient id="asky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#FF8F00"/>
    <stop offset="55%" stop-color="#FFB300"/>
    <stop offset="100%" stop-color="#FFE082"/>
  </linearGradient>
  <linearGradient id="agrass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#558B2F"/>
    <stop offset="100%" stop-color="#33691E"/>
  </linearGradient>
</defs>
<rect width="400" height="300" fill="url(#asky)"/>
<circle cx="340" cy="52" r="36" fill="#FFECB3" opacity="0.7"/>
<circle cx="340" cy="52" r="28" fill="#FFE082" opacity="0.8"/>
<rect x="0" y="228" width="400" height="72" fill="url(#agrass)"/>
<ellipse cx="200" cy="228" rx="212" ry="16" fill="#689F38" opacity="0.7"/>
<rect x="14" y="155" width="12" height="80" fill="#5D4037"/>
<ellipse cx="20" cy="148" rx="28" ry="18" fill="#33691E"/>
<ellipse cx="20" cy="136" rx="22" ry="15" fill="#558B2F"/>
<ellipse cx="20" cy="126" rx="16" ry="12" fill="#33691E"/>
<rect x="356" y="148" width="12" height="86" fill="#5D4037"/>
<ellipse cx="362" cy="140" rx="30" ry="20" fill="#1B5E20"/>
<ellipse cx="362" cy="128" rx="24" ry="16" fill="#2E7D32"/>
<ellipse cx="362" cy="117" rx="18" ry="13" fill="#1B5E20"/>
<circle cx="80" cy="248" r="6" fill="#E53935" opacity="0.8"/>
<circle cx="95" cy="244" r="5" fill="#FDD835" opacity="0.8"/>
<circle cx="108" cy="249" r="6" fill="#E53935" opacity="0.8"/>
<circle cx="122" cy="245" r="4" fill="#66BB6A" opacity="0.8"/>
<circle cx="310" cy="248" r="5" fill="#FDD835" opacity="0.8"/>
<circle cx="323" cy="244" r="6" fill="#E53935" opacity="0.8"/>
<circle cx="338" cy="249" r="5" fill="#66BB6A" opacity="0.8"/>
<ellipse cx="200" cy="230" rx="68" ry="42" fill="#EF6C00"/>
<ellipse cx="200" cy="226" rx="58" ry="35" fill="#FF8F00"/>
<ellipse cx="200" cy="238" rx="34" ry="18" fill="#FFF8E1" opacity="0.9"/>
<polygon points="178,192 169,168 187,168" fill="#BF360C"/>
<polygon points="222,192 213,168 231,168" fill="#BF360C"/>
<ellipse cx="200" cy="200" rx="28" ry="22" fill="#FFAB40"/>
<circle cx="187" cy="195" r="10" fill="white"/>
<circle cx="213" cy="195" r="10" fill="white"/>
<circle cx="188" cy="195" r="6" fill="#212121"/>
<circle cx="214" cy="195" r="6" fill="#212121"/>
<circle cx="190" cy="193" r="2.5" fill="white"/>
<circle cx="216" cy="193" r="2.5" fill="white"/>
<ellipse cx="200" cy="210" rx="12" ry="8" fill="#E65100"/>
<circle cx="196" cy="209" r="3" fill="#BF360C"/>
<circle cx="204" cy="209" r="3" fill="#BF360C"/>
<path d="M192,216 Q200,222 208,216" stroke="#BF360C" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<path d="M200,230 Q170,204 158,184 Q165,174 172,182 Q182,198 200,226" fill="#E65100"/>
<ellipse cx="157" cy="178" rx="11" ry="7" fill="white" opacity="0.8"/>
<path d="M140,228 Q108,215 80,222" stroke="#BF360C" stroke-width="14" stroke-linecap="round" fill="none"/>
<path d="M80,222 Q62,226 58,218" stroke="#BF360C" stroke-width="9" stroke-linecap="round" fill="none"/>
</svg>`,

espaco: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
<defs>
  <radialGradient id="nebula" cx="60%" cy="40%">
    <stop offset="0%" stop-color="#7C4DFF" stop-opacity="0.4"/>
    <stop offset="100%" stop-color="#311B92" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="planet1" cx="50%" cy="40%">
    <stop offset="0%" stop-color="#80DEEA"/>
    <stop offset="100%" stop-color="#006064"/>
  </radialGradient>
</defs>
<rect width="400" height="300" fill="#090920"/>
<rect width="400" height="300" fill="url(#nebula)"/>
<circle cx="18" cy="22" r="1.5" fill="white" opacity="0.9"/>
<circle cx="55" cy="12" r="1" fill="white" opacity="0.8"/>
<circle cx="88" cy="35" r="2" fill="white"/>
<circle cx="130" cy="18" r="1.5" fill="white" opacity="0.9"/>
<circle cx="175" cy="8" r="1" fill="white" opacity="0.7"/>
<circle cx="225" cy="24" r="2" fill="white" opacity="0.9"/>
<circle cx="268" cy="14" r="1.5" fill="white" opacity="0.8"/>
<circle cx="308" cy="30" r="1" fill="white"/>
<circle cx="355" cy="10" r="2" fill="white" opacity="0.9"/>
<circle cx="385" cy="42" r="1.5" fill="white" opacity="0.8"/>
<circle cx="42" cy="68" r="1" fill="white" opacity="0.7"/>
<circle cx="95" cy="82" r="1.5" fill="white"/>
<circle cx="152" cy="55" r="1" fill="white" opacity="0.8"/>
<circle cx="195" cy="72" r="2" fill="white" opacity="0.6"/>
<circle cx="248" cy="60" r="1.5" fill="white" opacity="0.9"/>
<circle cx="318" cy="48" r="1" fill="white" opacity="0.7"/>
<circle cx="370" cy="75" r="2" fill="white" opacity="0.8"/>
<circle cx="10" cy="115" r="1.5" fill="white" opacity="0.6"/>
<circle cx="62" cy="140" r="1" fill="white" opacity="0.8"/>
<circle cx="388" cy="110" r="1.5" fill="white" opacity="0.7"/>
<circle cx="340" cy="155" r="2" fill="white" opacity="0.5"/>
<circle cx="18" cy="210" r="1" fill="white" opacity="0.6"/>
<circle cx="372" cy="230" r="1.5" fill="white" opacity="0.7"/>
<circle cx="115" cy="175" r="1" fill="white" opacity="0.5"/>
<circle cx="285" cy="190" r="1.5" fill="white" opacity="0.6"/>
<circle cx="60" cy="42" r="52" fill="url(#planet1)" opacity="0.85"/>
<ellipse cx="40" cy="32" rx="20" ry="14" fill="#004D40" opacity="0.7"/>
<ellipse cx="68" cy="50" rx="16" ry="10" fill="#00695C" opacity="0.6"/>
<ellipse cx="60" cy="42" rx="60" ry="14" fill="none" stroke="#4DD0E1" stroke-width="6" opacity="0.5"/>
<ellipse cx="60" cy="42" rx="60" ry="14" fill="none" stroke="#B2EBF2" stroke-width="2" opacity="0.4"/>
<circle cx="330" cy="240" r="28" fill="#CE93D8" opacity="0.7"/>
<circle cx="320" cy="232" r="10" fill="#AB47BC" opacity="0.5"/>
<circle cx="338" cy="248" r="7" fill="#9C27B0" opacity="0.4"/>
<path d="M230,160 L218,200 L242,200 Z" fill="#E0E0E0"/>
<path d="M230,160 L218,200 L242,200 Z" fill="white" opacity="0.9"/>
<rect x="218" y="198" width="24" height="38" fill="#CFD8DC"/>
<rect x="220" y="200" width="20" height="34" fill="#ECEFF1"/>
<rect x="222" y="202" width="7" height="10" fill="#80D8FF" rx="1"/>
<rect x="233" y="202" width="7" height="10" fill="#80D8FF" rx="1"/>
<path d="M218,210 L195,202 L195,218 L218,214" fill="#B0BEC5"/>
<path d="M242,210 L265,202 L265,218 L242,214" fill="#B0BEC5"/>
<ellipse cx="230" cy="234" rx="10" ry="6" fill="#FF6F00"/>
<path d="M224,234 Q218,248 222,260 Q230,256 238,260 Q242,248 236,234" fill="#FF8F00" opacity="0.8"/>
<path d="M228,234 Q226,244 228,252" fill="#FFCA28" opacity="0.9"/>
<circle cx="230" cy="215" r="18" fill="#90A4AE"/>
<circle cx="230" cy="215" r="14" fill="#CFD8DC"/>
<ellipse cx="228" cy="212" rx="9" ry="7" fill="#80D8FF" opacity="0.8"/>
<circle cx="230" cy="215" r="14" fill="none" stroke="#B0BEC5" stroke-width="2"/>
<path d="M218,215 L210,225 L218,228" stroke="#90A4AE" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M242,215 L250,225 L242,228" stroke="#90A4AE" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`,

fazendinha: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
<defs>
  <linearGradient id="fsky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#64B5F6"/>
    <stop offset="100%" stop-color="#BBDEFB"/>
  </linearGradient>
  <linearGradient id="fhill" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8BC34A"/>
    <stop offset="100%" stop-color="#558B2F"/>
  </linearGradient>
</defs>
<rect width="400" height="300" fill="url(#fsky)"/>
<circle cx="330" cy="50" r="30" fill="#FFF9C4" opacity="0.9"/>
<circle cx="330" cy="50" r="23" fill="#FFF176"/>
<ellipse cx="85" cy="58" rx="46" ry="19" fill="white" opacity="0.9"/>
<ellipse cx="118" cy="50" rx="35" ry="15" fill="white" opacity="0.9"/>
<ellipse cx="65" cy="65" rx="26" ry="12" fill="white" opacity="0.85"/>
<ellipse cx="280" cy="44" rx="38" ry="16" fill="white" opacity="0.8"/>
<ellipse cx="310" cy="37" rx="28" ry="13" fill="white" opacity="0.8"/>
<ellipse cx="0" cy="300" rx="260" ry="95" fill="#7CB342" opacity="0.6"/>
<ellipse cx="400" cy="300" rx="220" ry="80" fill="#689F38" opacity="0.5"/>
<rect x="0" y="230" width="400" height="70" fill="url(#fhill)"/>
<ellipse cx="200" cy="230" rx="210" ry="16" fill="#8BC34A" opacity="0.7"/>
<rect x="255" y="128" width="120" height="108" fill="#E53935"/>
<rect x="258" y="131" width="114" height="105" fill="#EF5350"/>
<polygon points="255,128 375,128 315,72" fill="#C62828"/>
<polygon points="258,128 372,128 315,78" fill="#D32F2F"/>
<rect x="292" y="192" width="46" height="46" fill="#6D4C41"/>
<circle cx="315" cy="215" r="4" fill="#FFD54F"/>
<rect x="262" y="150" width="30" height="24" fill="#B3E5FC" rx="3"/>
<rect x="338" y="150" width="30" height="24" fill="#B3E5FC" rx="3"/>
<rect x="30" y="158" width="105" height="80" fill="#FFF9C4"/>
<polygon points="30,158 135,158 82,110" fill="#D32F2F"/>
<polygon points="33,158 132,158 82,116" fill="#E53935"/>
<rect x="68" y="200" width="28" height="38" fill="#8D6E63"/>
<circle cx="93" cy="219" r="3.5" fill="#FFD54F"/>
<rect x="38" y="174" width="22" height="18" fill="#B3E5FC" rx="2"/>
<rect x="112" y="174" width="22" height="18" fill="#B3E5FC" rx="2"/>
<rect x="148" y="200" width="6" height="50" fill="#795548"/>
<rect x="154" y="205" width="16" height="3" fill="#795548"/>
<rect x="154" y="213" width="16" height="3" fill="#795548"/>
<rect x="154" y="221" width="16" height="3" fill="#795548"/>
<ellipse cx="168" cy="242" rx="10" ry="24" fill="#FDD835"/>
<ellipse cx="168" cy="230" rx="8" ry="16" fill="#F9A825"/>
<ellipse cx="168" cy="220" rx="6" ry="10" fill="#F57F17"/>
<ellipse cx="175" cy="248" rx="9" ry="22" fill="#FDD835" opacity="0.8"/>
<ellipse cx="182" cy="245" rx="8" ry="20" fill="#FDD835" opacity="0.7"/>
<ellipse cx="158" cy="246" rx="8" ry="18" fill="#FDD835" opacity="0.75"/>
<ellipse cx="190" cy="205" rx="32" ry="22" fill="white"/>
<ellipse cx="190" cy="202" rx="28" ry="18" fill="#FAFAFA"/>
<ellipse cx="185" cy="196" rx="16" ry="10" fill="#E0E0E0"/>
<ellipse cx="198" cy="195" rx="14" ry="9" fill="#E0E0E0"/>
<ellipse cx="190" cy="214" rx="14" ry="7" fill="#F8BBD0" opacity="0.8"/>
<circle cx="182" cy="198" r="5" fill="#212121"/>
<circle cx="198" cy="198" r="5" fill="#212121"/>
<circle cx="183" cy="196" r="2" fill="white"/>
<circle cx="199" cy="196" r="2" fill="white"/>
<ellipse cx="190" cy="207" rx="7" ry="4" fill="#F48FB1"/>
<circle cx="188" cy="206" r="2" fill="#E91E63"/>
<circle cx="192" cy="206" r="2" fill="#E91E63"/>
<path d="M183,211 Q190,217 197,211" stroke="#E91E63" stroke-width="2" fill="none" stroke-linecap="round"/>
<path d="M168,205 L162,198 L158,202" stroke="#212121" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M212,205 L218,198 L222,202" stroke="#212121" stroke-width="3" fill="none" stroke-linecap="round"/>
<rect x="170" y="225" width="12" height="20" fill="#757575" rx="5"/>
<rect x="195" y="225" width="12" height="20" fill="#757575" rx="5"/>
<ellipse cx="176" cy="245" rx="9" ry="5" fill="#616161"/>
<ellipse cx="201" cy="245" rx="9" ry="5" fill="#616161"/>
</svg>`,

princesas: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
<defs>
  <linearGradient id="psky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7B1FA2"/>
    <stop offset="50%" stop-color="#E040FB"/>
    <stop offset="100%" stop-color="#FCE4EC"/>
  </linearGradient>
  <linearGradient id="pgarden" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#A5D6A7"/>
    <stop offset="100%" stop-color="#2E7D32"/>
  </linearGradient>
</defs>
<rect width="400" height="300" fill="url(#psky)"/>
<circle cx="20" cy="20" r="2" fill="#FFD54F" opacity="0.9"/>
<circle cx="55" cy="35" r="1.5" fill="white" opacity="0.8"/>
<circle cx="100" cy="18" r="2" fill="#FFD54F" opacity="0.9"/>
<circle cx="145" cy="38" r="1.5" fill="white" opacity="0.7"/>
<circle cx="188" cy="22" r="2" fill="#FFD54F" opacity="0.9"/>
<circle cx="362" cy="25" r="1.5" fill="white" opacity="0.8"/>
<circle cx="390" cy="48" r="2" fill="#FFD54F" opacity="0.9"/>
<rect x="270" y="80" width="28" height="148" fill="#90A4AE"/>
<rect x="298" y="80" width="12" height="148" fill="#78909C"/>
<polygon points="270,80 298,80 284,48" fill="#6A1B9A"/>
<polygon points="270,80 298,80 284,48" fill="#6A1B9A"/>
<circle cx="284" cy="44" r="6" fill="#FFD54F"/>
<rect x="310" y="58" width="35" height="170" fill="#90A4AE"/>
<rect x="344" y="58" width="14" height="170" fill="#78909C"/>
<polygon points="310,58 358,58 334,22" fill="#4A148C"/>
<circle cx="334" cy="18" r="8" fill="#FFD54F"/>
<rect x="355" y="88" width="26" height="140" fill="#90A4AE"/>
<rect x="381" y="88" width="12" height="140" fill="#78909C"/>
<polygon points="355,88 381,88 368,62" fill="#6A1B9A"/>
<circle cx="368" cy="58" r="5" fill="#FFD54F"/>
<rect x="290" y="165" width="48" height="63" fill="#5C6BC0"/>
<rect x="295" y="170" width="38" height="58" fill="#7986CB"/>
<rect x="308" y="175" width="22" height="32" fill="#B3E5FC" rx="2"/>
<rect x="0" y="228" width="400" height="72" fill="url(#pgarden)"/>
<ellipse cx="200" cy="228" rx="210" ry="15" fill="#66BB6A" opacity="0.7"/>
<ellipse cx="60" cy="230" rx="22" ry="12" fill="#E91E63" opacity="0.8"/>
<ellipse cx="60" cy="228" rx="18" ry="10" fill="#F06292"/>
<ellipse cx="60" cy="225" rx="13" ry="8" fill="#FCE4EC"/>
<rect x="58" y="228" width="4" height="25" fill="#388E3C"/>
<ellipse cx="120" cy="228" rx="20" ry="11" fill="#E91E63" opacity="0.7"/>
<ellipse cx="120" cy="226" rx="16" ry="9" fill="#F06292"/>
<rect x="118" y="226" width="4" height="28" fill="#388E3C"/>
<ellipse cx="335" cy="230" rx="20" ry="11" fill="#E91E63" opacity="0.7"/>
<ellipse cx="335" cy="228" rx="16" ry="9" fill="#F06292"/>
<rect x="333" y="228" width="4" height="26" fill="#388E3C"/>
<path d="M172,228 L172,178" stroke="#8BC34A" stroke-width="5" stroke-linecap="round"/>
<path d="M172,198 Q158,188 152,192" stroke="#4CAF50" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M172,195 Q186,185 192,189" stroke="#4CAF50" stroke-width="4" fill="none" stroke-linecap="round"/>
<ellipse cx="160" cy="180" rx="14" ry="9" fill="#E91E63" opacity="0.7"/>
<ellipse cx="185" cy="178" rx="12" ry="8" fill="#E91E63" opacity="0.6"/>
<ellipse cx="172" cy="174" rx="11" ry="7" fill="#FCE4EC"/>
<ellipse cx="196" cy="188" rx="48" ry="65" fill="#CE93D8"/>
<ellipse cx="196" cy="185" rx="42" ry="60" fill="#BA68C8"/>
<ellipse cx="196" cy="182" rx="36" ry="55" fill="#AB47BC"/>
<rect x="184" y="148" width="24" height="35" fill="#F8BBD9"/>
<rect x="186" y="150" width="20" height="31" fill="#FCE4EC"/>
<ellipse cx="196" cy="143" rx="18" ry="20" fill="#FFCC80"/>
<ellipse cx="196" cy="138" rx="14" ry="16" fill="#FFB74D"/>
<circle cx="186" cy="137" r="6" fill="#212121" opacity="0.15"/>
<circle cx="206" cy="137" r="6" fill="#212121" opacity="0.15"/>
<path d="M178,138 Q196,160 214,138" stroke="#F4511E" stroke-width="3" fill="none"/>
<ellipse cx="196" cy="130" rx="20" ry="8" fill="#8B4513" opacity="0.6"/>
<path d="M176,128 Q186,108 196,118 Q206,108 216,128" fill="#8B4513" opacity="0.5"/>
<polygon points="196,112 190,124 202,124" fill="#FFD700"/>
<polygon points="185,118 180,130 190,130" fill="#FFD700" opacity="0.8"/>
<polygon points="207,118 202,130 212,130" fill="#FFD700" opacity="0.8"/>
<circle cx="192" cy="136" r="5" fill="#212121"/>
<circle cx="200" cy="136" r="5" fill="#212121"/>
<circle cx="193" cy="134" r="2" fill="white"/>
<circle cx="201" cy="134" r="2" fill="white"/>
<path d="M188,144 Q196,150 204,144" stroke="#C2185B" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`,

"super-herois": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
<defs>
  <linearGradient id="nsky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#0D1B3E"/>
    <stop offset="60%" stop-color="#1A237E"/>
    <stop offset="100%" stop-color="#FF6F00"/>
  </linearGradient>
</defs>
<rect width="400" height="300" fill="url(#nsky)"/>
<circle cx="18" cy="20" r="1.5" fill="white" opacity="0.9"/>
<circle cx="55" cy="12" r="1" fill="white" opacity="0.7"/>
<circle cx="95" cy="28" r="1.5" fill="white"/>
<circle cx="145" cy="15" r="1" fill="white" opacity="0.8"/>
<circle cx="198" cy="8" r="2" fill="white" opacity="0.9"/>
<circle cx="248" cy="22" r="1.5" fill="white" opacity="0.7"/>
<circle cx="298" cy="10" r="1" fill="white" opacity="0.8"/>
<circle cx="358" cy="25" r="2" fill="white" opacity="0.9"/>
<circle cx="385" cy="42" r="1.5" fill="white" opacity="0.6"/>
<circle cx="342" cy="45" r="30" fill="#ECEFF1" opacity="0.15"/>
<circle cx="352" cy="36" r="30" fill="#0D1B3E"/>
<rect x="0" y="195" width="52" height="105" fill="#0D47A1"/>
<rect x="2" y="198" width="48" height="102" fill="#1565C0"/>
<rect x="8" y="205" width="8" height="7" fill="#FFF17" opacity="0.9"/>
<rect x="20" y="205" width="8" height="7" fill="#FFF176" opacity="0.9"/>
<rect x="32" y="205" width="8" height="7" fill="#FFF176" opacity="0.9"/>
<rect x="8" y="218" width="8" height="7" fill="#FFF176" opacity="0.9"/>
<rect x="20" y="218" width="8" height="7" fill="#FFF176" opacity="0.9"/>
<rect x="32" y="218" width="8" height="7" fill="#FFF176" opacity="0.9"/>
<rect x="8" y="231" width="8" height="7" fill="#FFF176" opacity="0.7"/>
<rect x="20" y="231" width="8" height="7" fill="#FFF176" opacity="0.7"/>
<rect x="55" y="218" width="38" height="82" fill="#0D47A1"/>
<rect x="58" y="221" width="32" height="79" fill="#1565C0"/>
<rect x="62" y="228" width="7" height="7" fill="#FFF176" opacity="0.9"/>
<rect x="73" y="228" width="7" height="7" fill="#FFF176" opacity="0.9"/>
<rect x="62" y="240" width="7" height="7" fill="#FFF176" opacity="0.8"/>
<rect x="73" y="240" width="7" height="7" fill="#FFF176" opacity="0.8"/>
<rect x="100" y="185" width="55" height="115" fill="#0D47A1"/>
<rect x="103" y="188" width="49" height="112" fill="#1565C0"/>
<rect x="108" y="195" width="9" height="8" fill="#FFF176" opacity="0.9"/>
<rect x="122" y="195" width="9" height="8" fill="#FFF176" opacity="0.9"/>
<rect x="136" y="195" width="9" height="8" fill="#FFF176" opacity="0.9"/>
<rect x="108" y="210" width="9" height="8" fill="#FFF176" opacity="0.9"/>
<rect x="122" y="210" width="9" height="8" fill="#FFF176" opacity="0.9"/>
<rect x="136" y="210" width="9" height="8" fill="#FFF176" opacity="0.9"/>
<rect x="108" y="225" width="9" height="8" fill="#FFF176" opacity="0.7"/>
<rect x="122" y="225" width="9" height="8" fill="#FFF176" opacity="0.7"/>
<rect x="160" y="202" width="45" height="98" fill="#1565C0"/>
<rect x="163" y="205" width="39" height="95" fill="#1976D2"/>
<rect x="167" y="212" width="8" height="7" fill="#FFF176" opacity="0.9"/>
<rect x="180" y="212" width="8" height="7" fill="#FFF176" opacity="0.9"/>
<rect x="258" y="192" width="48" height="108" fill="#0D47A1"/>
<rect x="261" y="195" width="42" height="105" fill="#1565C0"/>
<rect x="308" y="208" width="40" height="92" fill="#0D47A1"/>
<rect x="311" y="212" width="34" height="88" fill="#1565C0"/>
<rect x="352" y="188" width="48" height="112" fill="#1565C0"/>
<rect x="355" y="192" width="42" height="108" fill="#1976D2"/>
<ellipse cx="205" cy="145" rx="26" ry="30" fill="#DC143C"/>
<ellipse cx="205" cy="142" rx="22" ry="25" fill="#E53935"/>
<rect x="195" y="168" width="20" height="28" fill="#1565C0"/>
<rect x="197" y="170" width="16" height="24" fill="#1E88E5"/>
<polygon points="185,205 195,168 215,168 225,205" fill="#1565C0"/>
<polygon points="187,205 197,170 213,170 223,205" fill="#1976D2"/>
<rect x="186" y="198" width="38" height="6" fill="#FFD700" opacity="0.9"/>
<ellipse cx="205" cy="136" rx="16" ry="18" fill="#FFCC80"/>
<ellipse cx="205" cy="131" rx="12" ry="14" fill="#FFB74D"/>
<circle cx="198" cy="130" r="5" fill="#212121"/>
<circle cx="212" cy="130" r="5" fill="#212121"/>
<circle cx="199" cy="128" r="2" fill="white"/>
<circle cx="213" cy="128" r="2" fill="white"/>
<path d="M198,140 Q205,146 212,140" stroke="#C2185B" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse cx="205" cy="122" rx="14" ry="8" fill="#212121"/>
<polygon points="198,116 205,108 212,116" fill="#FFD700"/>
<path d="M170,158 L165,175 L175,175 Z" fill="#DC143C"/>
<path d="M175,170 L155,162 L162,150" fill="#DC143C" opacity="0.8"/>
<path d="M165,190 L145,175 L152,162" fill="#B71C1C" opacity="0.8"/>
<path d="M240,158 L245,175 L235,175 Z" fill="#DC143C"/>
<path d="M235,170 L255,162 L248,150" fill="#DC143C" opacity="0.8"/>
</svg>`,

natureza: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
<defs>
  <linearGradient id="natsky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#29B6F6"/>
    <stop offset="55%" stop-color="#81D4FA"/>
    <stop offset="100%" stop-color="#E1F5FE"/>
  </linearGradient>
  <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#29B6F6"/>
    <stop offset="100%" stop-color="#0277BD"/>
  </linearGradient>
  <linearGradient id="natgrass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#2E7D32"/>
    <stop offset="100%" stop-color="#1B5E20"/>
  </linearGradient>
</defs>
<rect width="400" height="300" fill="url(#natsky)"/>
<circle cx="335" cy="42" r="26" fill="#FFF9C4" opacity="0.8"/>
<circle cx="335" cy="42" r="20" fill="#FFF176"/>
<ellipse cx="72" cy="48" rx="40" ry="16" fill="white" opacity="0.85"/>
<ellipse cx="100" cy="40" rx="30" ry="13" fill="white" opacity="0.85"/>
<rect x="0" y="228" width="400" height="72" fill="url(#natgrass)"/>
<ellipse cx="200" cy="228" rx="210" ry="15" fill="#388E3C" opacity="0.7"/>
<rect x="270" y="215" width="20" height="5" fill="url(#water)"/>
<ellipse cx="280" cy="188" rx="12" ry="38" fill="url(#water)" opacity="0.85"/>
<ellipse cx="280" cy="152" rx="9" ry="26" fill="#81D4FA" opacity="0.8"/>
<ellipse cx="280" cy="138" rx="6" ry="16" fill="white" opacity="0.5"/>
<ellipse cx="280" cy="225" rx="35" ry="10" fill="#29B6F6" opacity="0.8"/>
<ellipse cx="280" cy="230" rx="40" ry="8" fill="#0288D1" opacity="0.5"/>
<rect x="30" y="152" width="14" height="90" fill="#5D4037"/>
<polygon points="37,152 12,98 62,98" fill="#1B5E20"/>
<polygon points="37,132 8,72 66,72" fill="#2E7D32"/>
<polygon points="37,110 5,45 69,45" fill="#1B5E20"/>
<rect x="68" y="165" width="12" height="77" fill="#5D4037"/>
<polygon points="74,165 50,115 98,115" fill="#1B5E20"/>
<polygon points="74,145 45,90 103,90" fill="#2E7D32"/>
<polygon points="74,125 42,65 106,65" fill="#1B5E20"/>
<rect x="310" y="160" width="12" height="80" fill="#5D4037"/>
<polygon points="316,160 292,110 340,110" fill="#1B5E20"/>
<polygon points="316,140 288,85 344,85" fill="#2E7D32"/>
<rect x="360" y="170" width="11" height="70" fill="#5D4037"/>
<polygon points="366,170 344,122 388,122" fill="#1B5E20"/>
<ellipse cx="96" cy="235" rx="16" ry="9" fill="#E91E63" opacity="0.75"/>
<ellipse cx="96" cy="232" rx="13" ry="7" fill="#F06292"/>
<ellipse cx="135" cy="232" rx="14" ry="8" fill="#AB47BC" opacity="0.8"/>
<ellipse cx="135" cy="230" rx="11" ry="6" fill="#CE93D8"/>
<ellipse cx="352" cy="233" rx="15" ry="8" fill="#E91E63" opacity="0.7"/>
<ellipse cx="352" cy="230" rx="12" ry="6" fill="#F48FB1"/>
<ellipse cx="175" cy="190" rx="38" ry="28" fill="#E91E63" opacity="0.6"/>
<ellipse cx="175" cy="186" rx="32" ry="24" fill="#F06292" opacity="0.5"/>
<ellipse cx="160" cy="185" rx="12" ry="8" fill="#E91E63"/>
<ellipse cx="175" cy="178" rx="14" ry="9" fill="#F06292"/>
<ellipse cx="190" cy="183" rx="12" ry="8" fill="#E91E63"/>
<rect x="172" y="210" width="6" height="25" fill="#2E7D32"/>
<ellipse cx="220" cy="178" rx="20" ry="14" fill="#8BC34A" opacity="0.7"/>
<ellipse cx="220" cy="172" rx="16" ry="11" fill="#AED581"/>
<rect x="218" y="190" width="5" height="20" fill="#2E7D32"/>
<ellipse cx="145" cy="210" rx="30" ry="18" fill="#29B6F6" opacity="0.4"/>
<ellipse cx="145" cy="215" rx="35" ry="14" fill="#29B6F6" opacity="0.3"/>
<ellipse cx="230" cy="155" rx="10" ry="16" fill="#FF7043" opacity="0.9"/>
<ellipse cx="235" cy="148" rx="7" ry="12" fill="#FF5722"/>
<ellipse cx="230" cy="148" rx="12" ry="8" fill="#FF7043"/>
<ellipse cx="240" cy="148" rx="10" ry="7" fill="#FF8A65"/>
<circle cx="230" cy="142" r="8" fill="#FF7043"/>
<circle cx="231" cy="141" r="5" fill="#212121"/>
<circle cx="232" cy="139" r="2" fill="white"/>
<path d="M228,152 L222,158 M228,152 L226,160" stroke="#FF7043" stroke-width="3" stroke-linecap="round"/>
<path d="M228,152 L218,146" stroke="#FF7043" stroke-width="3" stroke-linecap="round"/>
<path d="M228,152 L235,165" stroke="#FF7043" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,

};

export function getThemeScene(theme: string): string {
  return THEME_SCENES[theme] ?? THEME_SCENES["natureza"];
}
