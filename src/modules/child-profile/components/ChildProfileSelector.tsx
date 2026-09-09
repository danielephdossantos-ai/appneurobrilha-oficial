import { useMemo } from "react";
import type { ChildProfile } from "../types";

interface ChildProfileSelectorProps {
  profiles: ChildProfile[];
  activeChildId: string | null;
  onSelect: (id: string) => void;
}

export function ChildProfileSelector({ profiles, activeChildId, onSelect }: ChildProfileSelectorProps) {
  const activeProfile = useMemo(
    () => profiles.find((profile) => profile.id === activeChildId) ?? profiles[0],
    [profiles, activeChildId],
  );

  if (!activeProfile) {
    return <div>Nenhum perfil encontrado.</div>;
  }

  return (
    <div className="space-y-3">
      <div className="rounded-xl border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{activeProfile.avatar}</span>
          <div>
            <p className="text-sm font-semibold">{activeProfile.nome}</p>
            <p className="text-xs text-muted-foreground">
              {activeProfile.idade} anos · {activeProfile.serie}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            type="button"
            className={`rounded-xl border p-3 text-left transition hover:border-primary ${
              profile.id === activeChildId ? "border-primary bg-primary/5" : "border-border bg-background"
            }`}
            onClick={() => onSelect(profile.id)}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{profile.avatar}</span>
              <div>
                <p className="font-semibold">{profile.nome}</p>
                <p className="text-xs text-muted-foreground">{profile.serie}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
