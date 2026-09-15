import type { ReactNode } from "react";
import type { IllustrationName } from "./activity-types";

type Props = { name: IllustrationName; variant?: "color" | "outline"; className?: string };

export function PrintableLineArt({ name, variant = "color", className = "" }: Props) {
  const outline = variant === "outline";
  const fill = outline ? "#fff" : "#f4b942";
  const accent = outline ? "#fff" : "#d9f3ed";
  const common = { fill, stroke: "#17324d", strokeWidth: 5, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
  const icons: Record<IllustrationName, ReactNode> = {
    casa: <><path d="M18 48 50 18l32 30v34H18z" {...common} /><path d="M42 82V57h16v25M30 49h9M61 49h9" {...common} fill={accent} /></>,
    bola: <><circle cx="50" cy="50" r="31" {...common} /><path d="m29 39 18 8 16-15M47 47l5 20 17 8M47 47 31 64" {...common} fill="none" /></>,
    cachorro: <><path d="M27 42 18 25l16 7c9-7 22-7 31 0l16-7-9 17v25c-10 12-35 12-45 0z" {...common} /><circle cx="38" cy="50" r="3" fill="#17324d" /><circle cx="62" cy="50" r="3" fill="#17324d" /><path d="M44 63q6 7 12 0" {...common} fill="none" /></>,
    gato: <><path d="M25 40V20l15 10q10-5 20 0l15-10v20c7 25-43 38-50 0z" {...common} /><circle cx="39" cy="49" r="3" fill="#17324d" /><circle cx="61" cy="49" r="3" fill="#17324d" /><path d="M45 61h10M21 57l14 2M65 59l14-2" {...common} fill="none" /></>,
    sapo: <><ellipse cx="50" cy="58" rx="32" ry="24" {...common} /><circle cx="31" cy="32" r="12" {...common} /><circle cx="69" cy="32" r="12" {...common} /><circle cx="31" cy="32" r="3" fill="#17324d" /><circle cx="69" cy="32" r="3" fill="#17324d" /><path d="M36 62q14 12 28 0" {...common} fill="none" /></>,
    abelha: <><ellipse cx="50" cy="53" rx="24" ry="18" {...common} /><path d="M38 38v30M50 35v36M62 38v30" {...common} fill="none" /><ellipse cx="30" cy="32" rx="16" ry="10" {...common} fill={accent} /><ellipse cx="70" cy="32" rx="16" ry="10" {...common} fill={accent} /><path d="M27 71 20 83M73 71l7 12" {...common} fill="none" /></>,
    borboleta: <><ellipse cx="34" cy="42" rx="20" ry="26" {...common} fill={accent} /><ellipse cx="66" cy="42" rx="20" ry="26" {...common} fill={accent} /><ellipse cx="50" cy="54" rx="6" ry="28" {...common} /><path d="M47 27 40 17M53 27l7-10" {...common} fill="none" /></>,
    peixe: <><path d="M17 50q28-33 59 0-31 33-59 0z" {...common} /><path d="m76 50 18-15v30zM38 45h1M51 58q8 6 16 0" {...common} fill="none" /><circle cx="32" cy="43" r="3" fill="#17324d" /></>,
    arvore: <><path d="M44 55h12v29H44z" {...common} /><circle cx="50" cy="34" r="26" {...common} /><circle cx="29" cy="48" r="17" {...common} /><circle cx="71" cy="48" r="17" {...common} /></>,
    flor: <><circle cx="50" cy="50" r="10" {...common} /><circle cx="50" cy="22" r="12" {...common} fill={accent} /><circle cx="50" cy="78" r="12" {...common} fill={accent} /><circle cx="22" cy="50" r="12" {...common} fill={accent} /><circle cx="78" cy="50" r="12" {...common} fill={accent} /><path d="M50 60v28M50 78q-14-8-20 3" {...common} fill="none" /></>,
    banana: <><path d="M22 62q25 17 55-30-5 37-31 45Q28 80 22 62z" {...common} /></>,
    maca: <><path d="M50 29q25-3 25 27-2 28-25 28T25 56q0-30 25-27z" {...common} /><path d="M50 29q-3-14 9-19M53 18q12-3 17 5" {...common} fill="none" /></>,
    uva: <><path d="M50 27v18M50 28q-15-10-24 2 13 4 24-2 15-10 24 2-13 4-24-2" {...common} fill={accent} /><circle cx="39" cy="49" r="9" {...common} /><circle cx="61" cy="49" r="9" {...common} /><circle cx="34" cy="66" r="9" {...common} /><circle cx="50" cy="66" r="9" {...common} /><circle cx="66" cy="66" r="9" {...common} /><circle cx="42" cy="82" r="9" {...common} /><circle cx="58" cy="82" r="9" {...common} /></>,
    livro: <><path d="M18 25q16-8 32 5v52q-16-13-32-5zM82 25q-16-8-32 5v52q16-13 32-5z" {...common} /><path d="M26 38q10-3 18 3M74 38q-10-3-18 3" {...common} fill="none" /></>,
    lapis: <><path d="m25 72 43-43 12 12-43 43-16 4z" {...common} /><path d="m68 29 8-8 12 12-8 8M25 72l12 12" {...common} fill="none" /></>,
    tesoura: <><circle cx="31" cy="66" r="12" {...common} /><circle cx="31" cy="34" r="12" {...common} /><path d="m40 43 45 38M40 57l45-38" {...common} fill="none" /></>,
    escola: <><path d="M18 82V38l32-20 32 20v44z" {...common} /><path d="M42 82V57h16v25M27 46h10M63 46h10" {...common} fill={accent} /></>,
    crianca: <><circle cx="50" cy="25" r="13" {...common} /><path d="M28 83q4-37 22-37t22 37z" {...common} /><path d="M35 65 20 52M65 65l15-13" {...common} fill="none" /></>,
    mao: <><path d="M31 81q-9-18-7-39 1-7 7-4l3 18V22q1-7 7-1v31V17q1-7 7-1v36V22q1-7 7-1v35l5-20q2-6 7-1l-3 29q-4 18-20 18z" {...common} /></>,
    estrela: <><path d="m50 15 10 23 25 2-19 16 6 25-22-13-22 13 6-25-19-16 25-2z" {...common} /></>,
    coracao: <><path d="M50 82 21 52Q8 34 22 22q15-12 28 4 13-16 28-4 14 12 1 30z" {...common} /></>,
    bebe: <><circle cx="50" cy="52" r="32" {...common} /><path d="M38 30q12-18 24 0M37 49h1M62 49h1M39 65q11 9 22 0" {...common} fill="none" /><path d="M30 79q20 12 40 0" {...common} fill={accent} /></>,
    mae: <><circle cx="50" cy="34" r="19" {...common} /><path d="M25 85q4-33 25-33t25 33zM29 40q0-30 21-30t21 30" {...common} /><path d="M42 34h1M58 34h1M43 44q7 5 14 0" {...common} fill="none" /></>,
    pai: <><circle cx="50" cy="34" r="19" {...common} /><path d="M25 85q4-33 25-33t25 33zM32 19q18-13 36 0" {...common} /><path d="M42 34h1M58 34h1M43 44q7 5 14 0" {...common} fill="none" /></>,
    sol: <><circle cx="50" cy="50" r="23" {...common} /><path d="M50 10v13M50 77v13M10 50h13M77 50h13M22 22l9 9M69 69l9 9M78 22l-9 9M31 69l-9 9" {...common} fill="none" /></>,
    pato: <><ellipse cx="54" cy="59" rx="29" ry="20" {...common} /><circle cx="37" cy="34" r="17" {...common} /><path d="m20 36-14 7 16 5M47 34h1M75 61l15 12" {...common} fill="none" /></>,
    rato: <><ellipse cx="51" cy="57" rx="29" ry="21" {...common} /><circle cx="31" cy="31" r="12" {...common} fill={accent} /><circle cx="68" cy="31" r="12" {...common} fill={accent} /><circle cx="41" cy="52" r="2" fill="#17324d" /><circle cx="61" cy="52" r="2" fill="#17324d" /><path d="M50 59v6M50 65q-7 6-13 0M50 65q7 6 13 0M22 59 8 54M22 66 8 70M78 59l14-5M78 66l14 4" {...common} fill="none" /></>,
    robo: <><rect x="20" y="27" width="60" height="52" rx="9" {...common} /><path d="M50 27V15M43 15h14M31 79v11M69 79v11M20 52H9M80 52h11" {...common} fill="none" /><circle cx="36" cy="45" r="6" {...common} fill={accent} /><circle cx="64" cy="45" r="6" {...common} fill={accent} /><path d="M35 65h30M42 65v7M51 65v7M60 65v7" {...common} fill="none" /></>,
    drone: <><rect x="38" y="42" width="24" height="20" rx="6" {...common} /><path d="M38 47 22 34M62 47l16-13M38 58 22 70M62 58l16 12" {...common} fill="none" /><ellipse cx="18" cy="30" rx="14" ry="5" {...common} fill={accent} /><ellipse cx="82" cy="30" rx="14" ry="5" {...common} fill={accent} /><ellipse cx="18" cy="74" rx="14" ry="5" {...common} fill={accent} /><ellipse cx="82" cy="74" rx="14" ry="5" {...common} fill={accent} /><circle cx="50" cy="52" r="4" fill="#17324d" /></>,
    circulo: <><circle cx="50" cy="50" r="30" {...common} /></>, quadrado: <><rect x="21" y="21" width="58" height="58" {...common} /></>, triangulo: <><path d="m50 18 34 62H16z" {...common} /></>,
    numero: <><text x="50" y="72" textAnchor="middle" fontSize="64" fontWeight="900" fill={fill} stroke="#17324d" strokeWidth="2">3</text></>, letra: <><text x="50" y="72" textAnchor="middle" fontSize="64" fontWeight="900" fill={fill} stroke="#17324d" strokeWidth="2">M</text></>, silaba: <><text x="50" y="68" textAnchor="middle" fontSize="40" fontWeight="900" fill={fill} stroke="#17324d" strokeWidth="1">MA</text></>,
  };
  return <svg className={`printable-line-art ${className}`} viewBox="0 0 100 100" role="img" aria-label={teacherIllustrationLabel(name)}>{icons[name]}</svg>;
}

function teacherIllustrationLabel(name: IllustrationName) { return name === "arvore" ? "árvore" : name === "maca" ? "maçã" : name; }
