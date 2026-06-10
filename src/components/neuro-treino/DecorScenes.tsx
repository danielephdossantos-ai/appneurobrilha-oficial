// Premium immersive scene backgrounds for Decoração Criativa.
// Each scene fills a 100%×100% container; renders structural elements but NO furniture
// (those are placed by the child as stickers).

export function DecorScene({ tipo }: { tipo: string }) {
  switch (tipo) {
    case "quarto":    return <SceneQuarto />;
    case "sala":      return <SceneSala />;
    case "cozinha":   return <SceneCozinha />;
    case "jardim":    return <SceneJardim />;
    case "estrada":   return <SceneEstrada />;
    case "praia":     return <ScenePraia />;
    case "parque":    return <SceneParque />;
    default:          return <SceneJardim />;
  }
}

// ── QUARTO (Bedroom) ─────────────────────────────────────────────────────────
function SceneQuarto() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
      {/* wall */}
      <rect width="400" height="260" fill="#EDE9FE"/>
      {/* wall panelling */}
      <rect x="0" y="0" width="400" height="160" fill="#DDD6FE"/>
      {/* baseboard */}
      <rect x="0" y="158" width="400" height="6" fill="#C4B5FD"/>
      {/* floor */}
      <rect x="0" y="164" width="400" height="96" fill="#D4A96E"/>
      {/* floor planks */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={i} x1={0} y1={164 + i * 12} x2={400} y2={164 + i * 12} stroke="#C8975A" strokeWidth="1" opacity=".5"/>
      ))}
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x={i * 80 + 20} y="164" width="1" height="96" fill="#C8975A" opacity=".25"/>
      ))}
      {/* wallpaper dots */}
      {Array.from({ length: 40 }).map((_, i) => (
        <circle key={i} cx={(i % 10) * 42 + 18} cy={Math.floor(i / 10) * 38 + 14} r="2" fill="#C4B5FD" opacity=".5"/>
      ))}
      {/* left wall */}
      <polygon points="0,0 80,40 80,260 0,260" fill="#D8B4FE" opacity=".25"/>
      {/* right wall */}
      <polygon points="400,0 320,40 320,260 400,260" fill="#D8B4FE" opacity=".15"/>
      {/* window */}
      <rect x="280" y="20" width="96" height="90" rx="6" fill="#1F2937"/>
      <rect x="283" y="23" width="90" height="84" rx="4" fill="#BAE6FD"/>
      {/* window panes */}
      <line x1="328" y1="23" x2="328" y2="107" stroke="#1F2937" strokeWidth="3"/>
      <line x1="283" y1="65" x2="373" y2="65" stroke="#1F2937" strokeWidth="3"/>
      {/* outside sky in window */}
      <rect x="283" y="23" width="90" height="42" rx="2" fill="#7DD3FC" opacity=".8"/>
      <rect x="283" y="65" width="90" height="42" rx="2" fill="#BBF7D0" opacity=".6"/>
      {/* sun in window */}
      <circle cx="360" cy="42" r="14" fill="#FDE68A" opacity=".9"/>
      {/* window sill */}
      <rect x="278" y="107" width="106" height="8" rx="2" fill="#A78BFA"/>
      {/* curtains */}
      <path d="M278 20 Q260 55 270 110 L285 108 Q278 58 290 20 Z" fill="#A78BFA" opacity=".7"/>
      <path d="M376 20 Q394 55 384 110 L369 108 Q376 58 364 20 Z" fill="#A78BFA" opacity=".7"/>
      {/* door */}
      <rect x="14" y="72" width="62" height="92" rx="3" fill="#C8834A"/>
      <rect x="17" y="75" width="56" height="86" rx="2" fill="#E0A860"/>
      <rect x="18" y="76" width="25" height="40" rx="1" fill="#C8834A" opacity=".3"/>
      <rect x="47" y="76" width="25" height="40" rx="1" fill="#C8834A" opacity=".3"/>
      <rect x="18" y="120" width="54" height="38" rx="1" fill="#C8834A" opacity=".2"/>
      <circle cx="70" cy="119" r="3" fill="#D4A96E"/>
      {/* door frame */}
      <rect x="10" y="68" width="5" height="100" fill="#A06430"/>
      <rect x="80" y="68" width="5" height="100" fill="#A06430"/>
      <rect x="10" y="68" width="75" height="5" fill="#A06430"/>
      {/* ceiling lamp */}
      <line x1="200" y1="0" x2="200" y2="22" stroke="#9CA3AF" strokeWidth="2"/>
      <ellipse cx="200" cy="28" rx="20" ry="8" fill="#FDE68A" opacity=".6"/>
      <path d="M180 28 L200 18 L220 28" fill="#FCD34D"/>
      <ellipse cx="200" cy="30" rx="22" ry="6" fill="#FDE68A" opacity=".3"/>
    </svg>
  );
}

// ── SALA (Living Room) ────────────────────────────────────────────────────────
function SceneSala() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
      {/* wall */}
      <rect width="400" height="260" fill="#FEF9EF"/>
      <rect x="0" y="0" width="400" height="158" fill="#FEF3C7"/>
      {/* baseboard */}
      <rect x="0" y="156" width="400" height="8" fill="#D4A96E"/>
      {/* floor */}
      <rect x="0" y="164" width="400" height="96" fill="#C8975A"/>
      {/* floor planks */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={i} x1={0} y1={164 + i * 12} x2={400} y2={164 + i * 12} stroke="#A87840" strokeWidth="1" opacity=".4"/>
      ))}
      {[0,1,2,3].map(i => (
        <rect key={i} x={i * 100 + 50} y="164" width="1.5" height="96" fill="#A87840" opacity=".2"/>
      ))}
      {/* left side wall tint */}
      <polygon points="0,0 70,38 70,260 0,260" fill="#F59E0B" opacity=".12"/>
      {/* right side wall tint */}
      <polygon points="400,0 330,38 330,260 400,260" fill="#F59E0B" opacity=".08"/>
      {/* wall panel wainscoting */}
      <rect x="0" y="110" width="400" height="50" fill="#FDE68A" opacity=".25"/>
      <rect x="0" y="108" width="400" height="4" fill="#D4A96E" opacity=".4"/>
      {/* large window */}
      <rect x="130" y="12" width="140" height="106" rx="6" fill="#1F2937"/>
      <rect x="133" y="15" width="134" height="100" rx="4" fill="#BAE6FD"/>
      {/* window cross */}
      <line x1="200" y1="15" x2="200" y2="115" stroke="#1F2937" strokeWidth="3"/>
      <line x1="133" y1="65" x2="267" y2="65" stroke="#1F2937" strokeWidth="3"/>
      {/* outside view */}
      <rect x="133" y="15" width="134" height="50" rx="2" fill="#7DD3FC" opacity=".8"/>
      <ellipse cx="240" cy="38" rx="20" ry="8" fill="#fff" opacity=".7"/>
      <ellipse cx="216" cy="42" rx="14" ry="6" fill="#fff" opacity=".6"/>
      <rect x="133" y="65" width="134" height="50" rx="2" fill="#BBF7D0" opacity=".6"/>
      {/* tree silhouette outside */}
      <ellipse cx="160" cy="82" rx="20" ry="24" fill="#4ADE80" opacity=".5"/>
      <rect x="157" y="98" width="6" height="18" fill="#A06430" opacity=".5"/>
      {/* window sill */}
      <rect x="125" y="115" width="150" height="8" rx="2" fill="#D4A96E"/>
      {/* curtains */}
      <path d="M125 12 Q106 56 116 122 L135 120 Q128 60 140 12 Z" fill="#FCA5A5" opacity=".8"/>
      <path d="M275 12 Q294 56 284 122 L265 120 Q272 60 260 12 Z" fill="#FCA5A5" opacity=".8"/>
      {/* ceiling crown molding */}
      <rect x="0" y="0" width="400" height="10" fill="#FDE68A" opacity=".6"/>
      <rect x="0" y="8" width="400" height="4" fill="#D4A96E" opacity=".3"/>
      {/* picture rail */}
      <rect x="0" y="100" width="400" height="3" fill="#D4A96E" opacity=".4"/>
      {/* rug suggestion on floor */}
      <ellipse cx="200" cy="220" rx="130" ry="24" fill="#F87171" opacity=".15"/>
    </svg>
  );
}

// ── COZINHA (Kitchen) ─────────────────────────────────────────────────────────
function SceneCozinha() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
      {/* wall */}
      <rect width="400" height="260" fill="#FFFBEB"/>
      {/* upper cabinets zone */}
      <rect x="0" y="0" width="400" height="90" fill="#E8D4A0" opacity=".4"/>
      {/* backsplash tiles */}
      <rect x="0" y="90" width="400" height="50" fill="#FEF9C3"/>
      {Array.from({ length: 20 }).map((_, i) => (
        <rect key={i} x={i * 20} y="90" width="20" height="50" fill="none" stroke="#D4B860" strokeWidth="0.8" opacity=".5"/>
      ))}
      {[0,1,2].map(i => (
        <line key={i} x1={0} y1={90 + i * 17} x2={400} y2={90 + i * 17} stroke="#D4B860" strokeWidth="0.8" opacity=".5"/>
      ))}
      {/* counter top */}
      <rect x="0" y="138" width="400" height="12" fill="#E5E7EB"/>
      <rect x="0" y="140" width="400" height="10" fill="#D1D5DB"/>
      <rect x="0" y="148" width="400" height="3" fill="#9CA3AF" opacity=".5"/>
      {/* lower cabinets */}
      <rect x="0" y="151" width="400" height="109" fill="#92400E"/>
      {/* cabinet doors */}
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <rect x={i * 80 + 4} y="155" width="72" height="58" rx="3" fill="#A06430"/>
          <rect x={i * 80 + 7} y="158" width="66" height="52" rx="2" fill="#B8752A" opacity=".4"/>
          <circle cx={i * 80 + 40} cy="184" r="4" fill="#D4A96E"/>
        </g>
      ))}
      {/* lower drawer strip */}
      <rect x="0" y="210" width="400" height="1" fill="#7A4A28"/>
      {/* floor */}
      <rect x="0" y="212" width="400" height="48" fill="#E8D4A0"/>
      {/* floor tiles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={i} x={i * 40} y="212" width="40" height="48" fill="none" stroke="#D4B860" strokeWidth="1" opacity=".4"/>
      ))}
      {[0,1].map(i => (
        <line key={i} x1={0} y1={212 + i * 24} x2={400} y2={212 + i * 24} stroke="#D4B860" strokeWidth="1" opacity=".4"/>
      ))}
      {/* upper cabinet doors */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={i * 100 + 2} y="4" width="94" height="78" rx="3" fill="#C8834A"/>
          <rect x={i * 100 + 5} y="7" width="88" height="72" rx="2" fill="#E0A860" opacity=".4"/>
          <circle cx={i * 100 + 50} cy="44" r="4" fill="#A06430"/>
        </g>
      ))}
      {/* window above sink area */}
      <rect x="158" y="6" width="84" height="76" rx="5" fill="#1F2937"/>
      <rect x="161" y="9" width="78" height="70" rx="3" fill="#BAE6FD" opacity=".9"/>
      <line x1="200" y1="9" x2="200" y2="79" stroke="#1F2937" strokeWidth="2.5"/>
      <line x1="161" y1="44" x2="239" y2="44" stroke="#1F2937" strokeWidth="2.5"/>
      <rect x="161" y="9" width="78" height="35" rx="2" fill="#7DD3FC" opacity=".7"/>
      <ellipse cx="220" cy="24" rx="12" ry="6" fill="#fff" opacity=".6"/>
      <rect x="161" y="44" width="78" height="35" rx="2" fill="#BBF7D0" opacity=".5"/>
      {/* window sill */}
      <rect x="154" y="79" width="92" height="7" rx="2" fill="#D4A96E"/>
      {/* sink outline */}
      <rect x="152" y="132" width="96" height="10" rx="2" fill="#D1D5DB"/>
      <rect x="168" y="134" width="26" height="8" rx="1" fill="#9CA3AF"/>
      <rect x="206" y="134" width="26" height="8" rx="1" fill="#9CA3AF"/>
      {/* faucet */}
      <rect x="193" y="120" width="14" height="18" rx="3" fill="#9CA3AF"/>
      <rect x="188" y="118" width="24" height="5" rx="2" fill="#9CA3AF"/>
    </svg>
  );
}

// ── JARDIM (Garden) ───────────────────────────────────────────────────────────
function SceneJardim() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
      {/* sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38BDF8"/>
          <stop offset="100%" stopColor="#BAE6FD"/>
        </linearGradient>
        <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ADE80"/>
          <stop offset="100%" stopColor="#15803D"/>
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#sky)"/>
      {/* clouds */}
      <ellipse cx="80" cy="40" rx="40" ry="18" fill="#fff" opacity=".9"/>
      <ellipse cx="60" cy="46" rx="26" ry="15" fill="#fff" opacity=".9"/>
      <ellipse cx="108" cy="46" rx="28" ry="13" fill="#fff" opacity=".85"/>
      <ellipse cx="300" cy="28" rx="32" ry="15" fill="#fff" opacity=".85"/>
      <ellipse cx="275" cy="34" rx="22" ry="12" fill="#fff" opacity=".8"/>
      <ellipse cx="330" cy="34" rx="24" ry="11" fill="#fff" opacity=".8"/>
      {/* sun */}
      <circle cx="360" cy="34" r="28" fill="#FDE68A"/>
      <circle cx="360" cy="34" r="22" fill="#FCD34D"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => {
        const r = a * Math.PI / 180;
        return <line key={a} x1={360 + Math.cos(r)*24} y1={34 + Math.sin(r)*24}
          x2={360 + Math.cos(r)*34} y2={34 + Math.sin(r)*34}
          stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round"/>;
      })}
      {/* distant hills */}
      <ellipse cx="100" cy="148" rx="130" ry="44" fill="#22C55E" opacity=".6"/>
      <ellipse cx="320" cy="152" rx="110" ry="38" fill="#16A34A" opacity=".5"/>
      {/* flower bed strips - back */}
      <rect x="0" y="140" width="400" height="120" fill="url(#grass)"/>
      {/* garden path */}
      <path d="M160 260 Q180 200 200 180 Q220 200 240 260 Z" fill="#D4A96E"/>
      <path d="M170 260 Q190 210 200 186 Q210 210 230 260" fill="#D4B87A" opacity=".7"/>
      {/* path stones */}
      {[
        {x:185, y:240, w:18, h:10},
        {x:197, y:220, w:14, h:8},
        {x:200, y:200, w:12, h:7},
      ].map((s, i) => (
        <rect key={i} x={s.x} y={s.y} width={s.w} height={s.h} rx="4" fill="#E8C87A" opacity=".8"/>
      ))}
      {/* fence back */}
      <rect x="0" y="140" width="400" height="5" fill="#B8875A" opacity=".6"/>
      {/* grass tufts */}
      {[20,60,100,140,300,340,380].map((x, i) => (
        <g key={i}>
          <path d={`M${x} 175 Q${x-4} 162 ${x-2} 158 Q${x} 170 ${x+2} 158 Q${x+4} 162 ${x+6} 172`} fill="#22C55E" opacity=".8"/>
        </g>
      ))}
      {/* flower hints */}
      {[
        {x:30, y:165, c:"#FCD34D"}, {x:55, y:170, c:"#F9A8D4"},
        {x:330, y:163, c:"#FCA5A5"}, {x:355, y:168, c:"#FDE68A"},
        {x:10, y:190, c:"#A7F3D0"}, {x:380, y:185, c:"#C4B5FD"},
      ].map((f, i) => (
        <g key={i}>
          <circle cx={f.x} cy={f.y} r="5" fill={f.c}/>
          <circle cx={f.x-4} cy={f.y-2} r="3.5" fill={f.c} opacity=".8"/>
          <circle cx={f.x+4} cy={f.y-2} r="3.5" fill={f.c} opacity=".8"/>
          <circle cx={f.x} cy={f.y-6} r="3.5" fill={f.c} opacity=".8"/>
        </g>
      ))}
    </svg>
  );
}

// ── ESTRADA (Road / City) ─────────────────────────────────────────────────────
function SceneEstrada() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="skyE" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38BDF8"/>
          <stop offset="70%" stopColor="#BAE6FD"/>
        </linearGradient>
      </defs>
      {/* sky */}
      <rect width="400" height="260" fill="url(#skyE)"/>
      {/* clouds */}
      <ellipse cx="90" cy="30" rx="38" ry="16" fill="#fff" opacity=".9"/>
      <ellipse cx="68" cy="36" rx="24" ry="13" fill="#fff" opacity=".9"/>
      <ellipse cx="118" cy="36" rx="26" ry="12" fill="#fff" opacity=".85"/>
      <ellipse cx="310" cy="22" rx="30" ry="13" fill="#fff" opacity=".85"/>
      <ellipse cx="290" cy="28" rx="20" ry="10" fill="#fff" opacity=".8"/>
      {/* sun */}
      <circle cx="368" cy="28" r="22" fill="#FDE68A"/>
      <circle cx="368" cy="28" r="16" fill="#FCD34D"/>
      {/* buildings silhouette - background */}
      {[
        {x:0, y:60, w:50, h:100},{x:48,y:40,w:40,h:120},{x:86,y:70,w:35,h:90},
        {x:120,y:30,w:55,h:130},{x:173,y:55,w:40,h:105},{x:212,y:20,w:60,h:140},
        {x:270,y:50,w:45,h:110},{x:313,y:35,w:50,h:125},{x:361,y:65,w:50,h:95},
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="#94A3B8" opacity=".5"/>
          {/* windows */}
          {Array.from({length: Math.floor(b.h/20)}).map((_, j) => (
            Array.from({length: Math.floor(b.w/16)}).map((_, k) => (
              <rect key={`${j}-${k}`} x={b.x + k*14 + 4} y={b.y + j*18 + 6} width="8" height="8" rx="1"
                fill="#FDE68A" opacity={Math.random() > 0.4 ? 0.6 : 0.1}/>
            ))
          ))}
        </g>
      ))}
      {/* sidewalk far */}
      <rect x="0" y="162" width="400" height="18" fill="#E5E7EB"/>
      <rect x="0" y="162" width="400" height="3" fill="#D1D5DB"/>
      {/* road */}
      <rect x="0" y="180" width="400" height="80" fill="#374151"/>
      <rect x="0" y="178" width="400" height="5" fill="#4B5563"/>
      {/* road markings */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={i * 90 + 10} y="216" width="56" height="8" rx="2" fill="#FBBF24" opacity=".8"/>
      ))}
      {/* lane dividers */}
      <rect x="0" y="212" width="400" height="3" fill="#9CA3AF" opacity=".3"/>
      <rect x="0" y="222" width="400" height="3" fill="#9CA3AF" opacity=".2"/>
      {/* sidewalk near */}
      <rect x="0" y="248" width="400" height="12" fill="#E5E7EB"/>
      <rect x="0" y="248" width="400" height="3" fill="#D1D5DB"/>
      {/* sidewalk tiles */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <line key={i} x1={i * 40} y1="248" x2={i * 40} y2="260" stroke="#D1D5DB" strokeWidth="1"/>
      ))}
      {/* curb */}
      <rect x="0" y="178" width="400" height="4" fill="#9CA3AF"/>
      <rect x="0" y="246" width="400" height="4" fill="#9CA3AF"/>
      {/* pedestrian crossing */}
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x="270" y={183 + i * 10} width="32" height="6" rx="1" fill="#fff" opacity=".7"/>
      ))}
      {/* tree strip */}
      {[40, 130, 220, 350].map((x, i) => (
        <g key={i}>
          <rect x={x-3} y="148" width="6" height="18" fill="#7A5C3C"/>
          <ellipse cx={x} cy="140" rx="16" ry="14" fill="#22C55E"/>
          <ellipse cx={x-4} cy="136" rx="10" ry="8" fill="#4ADE80" opacity=".5"/>
        </g>
      ))}
    </svg>
  );
}

// ── PRAIA (Beach) ─────────────────────────────────────────────────────────────
function ScenePraia() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="skyP" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0EA5E9"/>
          <stop offset="60%" stopColor="#38BDF8"/>
          <stop offset="100%" stopColor="#7DD3FC"/>
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0EA5E9"/>
          <stop offset="100%" stopColor="#0369A1"/>
        </linearGradient>
        <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDE68A"/>
          <stop offset="100%" stopColor="#FCD34D"/>
        </linearGradient>
      </defs>
      {/* sky */}
      <rect width="400" height="260" fill="url(#skyP)"/>
      {/* clouds */}
      <ellipse cx="100" cy="38" rx="42" ry="18" fill="#fff" opacity=".9"/>
      <ellipse cx="78" cy="44" rx="28" ry="15" fill="#fff" opacity=".9"/>
      <ellipse cx="130" cy="44" rx="30" ry="13" fill="#fff" opacity=".85"/>
      <ellipse cx="280" cy="24" rx="36" ry="16" fill="#fff" opacity=".85"/>
      <ellipse cx="256" cy="30" rx="24" ry="12" fill="#fff" opacity=".8"/>
      {/* sun */}
      <circle cx="368" cy="38" r="30" fill="#FDE68A"/>
      <circle cx="368" cy="38" r="24" fill="#FCD34D"/>
      {[0,40,80,120,160,200,240,280,320].map(a => {
        const r = a * Math.PI / 180;
        return <line key={a} x1={368 + Math.cos(r)*26} y1={38 + Math.sin(r)*26}
          x2={368 + Math.cos(r)*36} y2={38 + Math.sin(r)*36}
          stroke="#FCD34D" strokeWidth="3" strokeLinecap="round"/>;
      })}
      {/* sea */}
      <rect x="0" y="110" width="400" height="80" fill="url(#sea)"/>
      {/* waves */}
      <path d="M0 120 Q40 112 80 120 Q120 128 160 120 Q200 112 240 120 Q280 128 320 120 Q360 112 400 120 L400 115 Q360 107 320 115 Q280 123 240 115 Q200 107 160 115 Q120 123 80 115 Q40 107 0 115 Z" fill="#38BDF8" opacity=".6"/>
      <path d="M0 134 Q50 126 100 134 Q150 142 200 134 Q250 126 300 134 Q350 142 400 134 L400 130 Q350 138 300 130 Q250 122 200 130 Q150 138 100 130 Q50 122 0 130 Z" fill="#7DD3FC" opacity=".5"/>
      {/* sea shimmer */}
      {[20, 80, 160, 230, 310, 370].map((x, i) => (
        <line key={i} x1={x} y1={145} x2={x+20} y2={145} stroke="#fff" strokeWidth="2" opacity=".3"/>
      ))}
      {/* horizon glow */}
      <rect x="0" y="108" width="400" height="5" fill="#BAE6FD" opacity=".5"/>
      {/* sand */}
      <path d="M0 185 Q100 175 200 180 Q300 185 400 178 L400 260 L0 260 Z" fill="url(#sand)"/>
      <rect x="0" y="188" width="400" height="72" fill="#FDE68A"/>
      {/* sand texture */}
      {Array.from({ length: 30 }).map((_, i) => (
        <ellipse key={i} cx={Math.round((i * 53) % 390 + 5)} cy={200 + (i % 5) * 12}
          rx="4" ry="1.5" fill="#FCD34D" opacity=".4"/>
      ))}
      {/* waterline */}
      <path d="M0 188 Q80 182 160 186 Q240 190 320 184 Q360 181 400 185" fill="none" stroke="#7DD3FC" strokeWidth="3" opacity=".6"/>
      {/* shells scattered */}
      {[30, 90, 150, 220, 280, 340].map((x, i) => (
        <g key={i}>
          <path d={`M${x} ${205 + (i%3)*15} Q${x+6} ${196 + (i%3)*15} ${x+10} ${204 + (i%3)*15}`}
            fill="#F0C080" stroke="#D4A840" strokeWidth="0.8"/>
        </g>
      ))}
    </svg>
  );
}

// ── PARQUE (Park) ─────────────────────────────────────────────────────────────
function SceneParque() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="skyPk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38BDF8"/>
          <stop offset="100%" stopColor="#BAE6FD"/>
        </linearGradient>
        <linearGradient id="gPk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ADE80"/>
          <stop offset="100%" stopColor="#15803D"/>
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#skyPk)"/>
      {/* clouds */}
      <ellipse cx="70" cy="36" rx="36" ry="15" fill="#fff" opacity=".9"/>
      <ellipse cx="50" cy="42" rx="22" ry="12" fill="#fff" opacity=".9"/>
      <ellipse cx="100" cy="42" rx="24" ry="11" fill="#fff" opacity=".85"/>
      <ellipse cx="290" cy="26" rx="30" ry="13" fill="#fff" opacity=".85"/>
      <ellipse cx="270" cy="32" rx="20" ry="10" fill="#fff" opacity=".8"/>
      {/* sun */}
      <circle cx="370" cy="32" r="24" fill="#FDE68A"/>
      <circle cx="370" cy="32" r="18" fill="#FCD34D"/>
      {/* background trees */}
      {[0, 50, 300, 360].map((x, i) => (
        <g key={i}>
          <rect x={x+8} y="92" width="10" height="52" fill="#6B4423"/>
          <ellipse cx={x+13} cy="82" rx="28" ry="36" fill="#16A34A" opacity=".7"/>
          <ellipse cx={x+6} cy="76" rx="18" ry="22" fill="#22C55E" opacity=".5"/>
        </g>
      ))}
      {/* grass */}
      <rect x="0" y="140" width="400" height="120" fill="url(#gPk)"/>
      {/* park path */}
      <path d="M140 260 Q160 220 180 200 Q200 185 220 200 Q240 220 260 260 Z" fill="#D4A96E"/>
      <path d="M150 260 Q168 226 186 204 Q200 190 214 204 Q232 226 250 260" fill="#E8C07A" opacity=".8"/>
      {/* path edge stones */}
      {[
        {x:152, y:248}, {x:244, y:248}, {x:165, y:228}, {x:232, y:228},
        {x:180, y:210}, {x:218, y:210},
      ].map((s, i) => (
        <rect key={i} x={s.x} y={s.y} width="12" height="8" rx="3" fill="#F5D88A" opacity=".7"/>
      ))}
      {/* grass texture */}
      {[10, 50, 100, 290, 340, 385].map((x, i) => (
        <g key={i}>
          <path d={`M${x} ${175 + (i%2)*10} Q${x-3} 162 ${x-1} 158 Q${x} 170 ${x+1} 158 Q${x+3} 162 ${x+5} ${170 + (i%2)*10}`}
            fill="#22C55E" opacity=".7"/>
        </g>
      ))}
      {/* flower patches */}
      {[
        {x:20, y:165, c:"#FCD34D"}, {x:38, y:170, c:"#F9A8D4"}, {x:55, y:162, c:"#FCA5A5"},
        {x:340, y:163, c:"#FDE68A"}, {x:360, y:170, c:"#C4B5FD"}, {x:378, y:162, c:"#A7F3D0"},
      ].map((f, i) => (
        <g key={i}>
          <circle cx={f.x} cy={f.y} r="5" fill={f.c}/>
          {[-1,1].map(d => (
            <circle key={d} cx={f.x + d*5} cy={f.y} r="3.5" fill={f.c} opacity=".8"/>
          ))}
          <circle cx={f.x} cy={f.y - 5} r="3.5" fill={f.c} opacity=".8"/>
          <line x1={f.x} y1={f.y+4} x2={f.x} y2={f.y+10} stroke="#22C55E" strokeWidth="1.5"/>
        </g>
      ))}
      {/* pond hint */}
      <ellipse cx="80" cy="214" rx="52" ry="20" fill="#7DD3FC" opacity=".5"/>
      <ellipse cx="80" cy="214" rx="44" ry="15" fill="#BAE6FD" opacity=".5"/>
      <ellipse cx="80" cy="212" rx="28" ry="8" fill="#E0F2FE" opacity=".4"/>
    </svg>
  );
}
