// Cartões visuais para conceitos de comparação (IGUAL / DIFERENTE).
// Usados em quizzes de magnitude para que a criança associe o SÍMBOLO
// matemático ao conceito, em vez de ver um número aleatório na opção.

export const svgSimbolo = (texto: string, cor: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" rx="24" fill="white" stroke="${cor}" stroke-width="6"/><text x="60" y="82" font-family="system-ui,sans-serif" font-size="78" font-weight="900" text-anchor="middle" fill="${cor}">${texto}</text></svg>`,
  )}`;

export const SINAL_IGUAL = svgSimbolo("=", "#16a34a");
export const SINAL_DIFERENTE = svgSimbolo("\u2260", "#dc2626");
export const SINAL_MAIS = svgSimbolo(">", "#2563eb");
export const SINAL_MENOS = svgSimbolo("<", "#f97316");
