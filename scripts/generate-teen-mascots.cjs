const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const baseDir = path.join(__dirname, '../src/assets');
const outDir = path.join(baseDir, 'mascots/teens');

const variants = [
  {
    id: 'pip-teen-skate',
    base: 'pip-mascot.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <defs>
        <linearGradient id="hoodie" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#2563eb" />
        </linearGradient>
      </defs>
      <path d="M256 380 C256 420 352 520 512 520 C672 520 768 420 768 380 C768 320 640 260 512 260 C384 260 256 320 256 380 Z" fill="url(#hoodie)" opacity="0.92" />
      <path d="M340 380 Q512 440 684 380" stroke="#bfdbfe" stroke-width="36" fill="none" stroke-linecap="round" />
      <circle cx="452" cy="420" r="24" fill="#f8fafc" />
      <circle cx="572" cy="420" r="24" fill="#f8fafc" />
      <rect x="220" y="672" width="584" height="60" rx="30" fill="#111827" />
      <circle cx="320" cy="714" r="40" fill="#475569" />
      <circle cx="700" cy="714" r="40" fill="#475569" />
      <rect x="240" y="650" width="560" height="36" rx="18" fill="#60a5fa" />
    </svg>`,
  },
  {
    id: 'pip-teen-gamer',
    base: 'pip-mascot.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <defs>
        <linearGradient id="shirt" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#1d4ed8" />
          <stop offset="100%" stop-color="#2563eb" />
        </linearGradient>
      </defs>
      <path d="M280 380 C280 440 340 520 512 520 C684 520 744 440 744 380 C744 320 512 240 512 240 C512 240 280 320 280 380 Z" fill="url(#shirt)" opacity="0.94" />
      <rect x="340" y="434" width="340" height="22" rx="11" fill="#93c5fd" />
      <path d="M412 618 C428 594 496 584 572 594 C648 604 684 634 706 658" stroke="#f8fafc" stroke-width="28" fill="none" stroke-linecap="round" />
      <rect x="366" y="520" width="292" height="120" rx="30" fill="#111827" opacity="0.98" />
      <circle cx="444" cy="574" r="26" fill="#f8fafc" />
      <circle cx="592" cy="574" r="26" fill="#f8fafc" />
      <path d="M516 574 l24 -26" stroke="#f8fafc" stroke-width="18" stroke-linecap="round" />
      <path d="M516 590 l24 26" stroke="#f8fafc" stroke-width="18" stroke-linecap="round" />
      <path d="M340 264 C340 224 364 188 408 168 C476 138 548 148 592 168 C642 192 664 234 664 274" fill="none" stroke="#2563eb" stroke-width="42" stroke-linecap="round" />
    </svg>`,
  },
  {
    id: 'pip-teen-artist',
    base: 'pip-mascot.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path d="M290 376 C290 320 400 300 512 300 C624 300 734 320 734 376 C734 430 628 462 512 462 C396 462 290 430 290 376 Z" fill="#0e7490" opacity="0.88" />
      <path d="M356 264 C356 220 396 188 450 182 C514 176 580 202 602 242 C604 250 608 264 602 272 C590 286 566 292 542 294 C498 298 468 282 438 264 Z" fill="#6d28d9" opacity="0.9" />
      <rect x="500" y="486" width="180" height="220" rx="26" fill="#f8fafc" stroke="#0f172a" stroke-width="22" />
      <path d="M520 516 l-28 -20" stroke="#e11d48" stroke-width="24" stroke-linecap="round" />
      <path d="M520 556 l-28 24" stroke="#3b82f6" stroke-width="24" stroke-linecap="round" />
      <path d="M500 606 l-20 60" stroke="#0f172a" stroke-width="18" stroke-linecap="round" />
      <path d="M410 600 c-48 30 -34 94 14 98" stroke="#83c5fd" stroke-width="28" fill="none" stroke-linecap="round" />
      <path d="M604 610 c48 28 40 96 -10 98" stroke="#f472b6" stroke-width="28" fill="none" stroke-linecap="round" />
    </svg>`,
  },
  {
    id: 'pipa-teen-street',
    base: 'pip-girl-mascot.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <defs>
        <linearGradient id="jacket" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#be185d" />
          <stop offset="100%" stop-color="#f472b6" />
        </linearGradient>
      </defs>
      <path d="M264 378 C264 434 360 518 512 518 C664 518 760 434 760 378 C760 308 620 262 512 262 C404 262 264 308 264 378 Z" fill="url(#jacket)" opacity="0.92" />
      <rect x="324" y="462" width="64" height="22" rx="11" fill="#fbcfe8" />
      <rect x="600" y="462" width="64" height="22" rx="11" fill="#fbcfe8" />
      <path d="M448 312 c20 -18 56 -24 88 -18" stroke="#fff" stroke-width="24" fill="none" stroke-linecap="round" />
      <circle cx="604" cy="296" r="12" fill="#fde68a" />
      <path d="M354 332 l-40 -18" stroke="#f9a8d4" stroke-width="18" stroke-linecap="round" />
    </svg>`,
  },
  {
    id: 'pipa-teen-athlete',
    base: 'pip-girl-mascot.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <defs>
        <linearGradient id="top" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#f97316" />
          <stop offset="100%" stop-color="#fbbf24" />
        </linearGradient>
      </defs>
      <path d="M280 380 C280 426 358 498 512 498 C666 498 744 426 744 380 C744 322 622 266 512 266 C402 266 280 322 280 380 Z" fill="url(#top)" opacity="0.92" />
      <rect x="318" y="458" width="56" height="24" rx="12" fill="#ffffff" opacity="0.9" />
      <rect x="650" y="458" width="56" height="24" rx="12" fill="#ffffff" opacity="0.9" />
      <circle cx="718" cy="520" r="20" fill="#38bdf8" />
      <rect x="698" y="540" width="40" height="130" rx="18" fill="#38bdf8" />
      <path d="M698 654 C668 720 616 774 548 792" stroke="#ffffff" stroke-width="24" fill="none" stroke-linecap="round" />
    </svg>`,
  },
  {
    id: 'pipa-teen-tech',
    base: 'pip-girl-mascot.png',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <defs>
        <linearGradient id="topTech" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#8b5cf6" />
          <stop offset="100%" stop-color="#a78bfa" />
        </linearGradient>
      </defs>
      <path d="M282 380 C282 428 364 496 512 496 C660 496 742 428 742 380 C742 320 624 268 512 268 C400 268 282 320 282 380 Z" fill="url(#topTech)" opacity="0.92" />
      <rect x="330" y="468" width="58" height="22" rx="11" fill="#e0e7ff" />
      <rect x="630" y="468" width="58" height="22" rx="11" fill="#e0e7ff" />
      <path d="M386 292 C382 252 418 228 456 232 C486 236 502 252 544 252 C580 252 604 236 608 204" fill="none" stroke="#c7d2fe" stroke-width="28" stroke-linecap="round" />
      <rect x="566" y="300" width="150" height="72" rx="20" fill="#eef2ff" opacity="0.96" />
      <rect x="588" y="328" width="106" height="12" rx="6" fill="#a5b4fc" />
      <rect x="588" y="352" width="80" height="10" rx="5" fill="#c7d2fe" />
    </svg>`,
  },
];

async function generate() {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const variant of variants) {
    const basePath = path.join(baseDir, variant.base);
    const overlayBuffer = Buffer.from(variant.svg);
    const output1024 = path.join(outDir, `${variant.id}-1024.png`);
    const output512 = path.join(outDir, `${variant.id}-512.png`);

    try {
      const composited = await sharp(basePath)
        .composite([{ input: overlayBuffer, blend: 'over' }])
        .png()
        .toBuffer();
      await sharp(composited).toFile(output1024);
      await sharp(composited)
        .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(output512);
      console.log('Gerado', output1024, 'e', output512);
    } catch (error) {
      console.error('Falha ao gerar', variant.id, error);
    }
  }
}

generate();
