/** Feedback pedagógico: acerto celebra e explica; tentativa vira pista. */
export function FeedbackPanel({ estado, texto }: { estado: "acerto" | "pista"; texto: string }) {
  const ok = estado === "acerto";
  return (
    <div
      role="status"
      className={`nb-festa mt-3 flex items-start gap-3 rounded-2xl px-4 py-3 text-base font-bold ${
        ok ? "animate-glow-ok bg-teal/15 text-ink ring-2 ring-teal" : "bg-butter/25 text-ink ring-2 ring-butter"
      }`}
    >
      <span className={`grid size-9 shrink-0 place-items-center rounded-full text-lg ${ok ? "bg-teal text-cream" : "bg-butter text-ink"}`}>
        {ok ? "★" : "?"}
      </span>
      <span>{ok ? texto : `Vamos pensar juntos! ${texto}`}</span>
    </div>
  );
}
