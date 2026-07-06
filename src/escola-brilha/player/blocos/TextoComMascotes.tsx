import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import esquiloImg from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Detecta menções aos mascotes oficiais em qualquer texto de aula e
 * renderiza os avatares correspondentes ao lado. Regra do usuário:
 * - "Brilha" → estrela oficial (nunca esquilo, salvo se texto disser "esquilo").
 * - Cada mascote nomeado no texto aparece como imagem.
 * - Ordem: os que aparecem primeiro no texto vêm primeiro.
 */
const MASCOTES: Array<{ key: string; regex: RegExp; img: string; alt: string }> = [
  // Esquilo tem prioridade: "esquilo brilha" cai aqui, não em Brilha.
  { key: "esquilo", regex: /\besquilo\b/i, img: esquiloImg, alt: "Esquilo" },
  { key: "brilha", regex: /\bbrilha\b/i, img: brilhaImg, alt: "Brilha" },
  { key: "coruja", regex: /\bcoruja(\s+s[áa]bia)?\b/i, img: corujaImg, alt: "Coruja Sábia" },
  { key: "lupi", regex: /\blupi\b/i, img: lupiImg, alt: "Lupi" },
  { key: "fifi", regex: /\bfifi\b/i, img: fifiImg, alt: "Fifi" },
  { key: "teo", regex: /\bt[eé]o\b/i, img: teoImg, alt: "Téo" },
  { key: "piu", regex: /\bpiu\b/i, img: piuImg, alt: "Piu" },
];

function detectar(texto: string) {
  const encontrados: typeof MASCOTES = [];
  let restante = texto;
  // Esquilo remove a palavra pra não bater em Brilha depois.
  for (const m of MASCOTES) {
    const match = restante.match(m.regex);
    if (match) {
      encontrados.push({ ...m, alt: m.alt });
      if (m.key === "esquilo") {
        restante = restante.replace(new RegExp(m.regex.source, "gi"), "");
      }
    }
  }
  // Deduplica mantendo primeira aparição.
  const vistos = new Set<string>();
  return encontrados.filter((m) => {
    if (vistos.has(m.key)) return false;
    vistos.add(m.key);
    return true;
  });
}

export function TextoComMascotes({
  texto,
  className,
  tamanho = "md",
}: {
  texto: string;
  className?: string;
  tamanho?: "sm" | "md" | "lg";
}) {
  const mascotes = detectar(texto);
  const size = tamanho === "sm" ? "h-14 w-14" : tamanho === "lg" ? "h-24 w-24" : "h-20 w-20";

  if (mascotes.length === 0) {
    return <p className={className ?? "text-base leading-relaxed"}>{texto}</p>;
  }

  return (
    <div className="flex items-start gap-3">
      <div className="flex -space-x-3 shrink-0">
        {mascotes.map((m) => (
          <img
            key={m.key}
            src={m.img}
            alt={m.alt}
            className={`${size} object-contain drop-shadow-lg`}
          />
        ))}
      </div>
      <p className={className ?? "text-base leading-relaxed flex-1"}>{texto}</p>
    </div>
  );
}
