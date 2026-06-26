// Remove códigos BNCC (ex.: EF06CI03, EI03ET07, BV-EMP) do início/fim de títulos.
const BNCC_CODE = /\b(?:EF\d{2}[A-Z]{2}\d{2,3}[A-Z]?|EI\d{2}[A-Z]{2}\d{2}|BV-[A-Z]{2,4})\b/g;

export function stripBncc(text: string | null | undefined): string {
  if (!text) return "";
  return text
    .replace(BNCC_CODE, "")
    .replace(/\s*[-–:|]\s*(?=\s|$)/g, " ")
    .replace(/^[\s\-–:|()]+|[\s\-–:|()]+$/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}
