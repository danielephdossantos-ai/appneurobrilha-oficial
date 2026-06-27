import { LembretesDiarios } from "./LembretesDiarios";

interface Props {
  childId: string | null;
}

export function CategoriasReforco({ childId }: Props) {
  return (
    <div className="space-y-3">
      <LembretesDiarios childId={childId} />
    </div>
  );
}

