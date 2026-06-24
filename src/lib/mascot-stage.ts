import { useSyncExternalStore } from "react";

export type MascotStage = "ovo" | "nascendo" | "bebe" | "crianca";

const KEY = (childId: string) => `neurobrilha:mascotStage:${childId}`;
const EVT = "neurobrilha:mascotStage";

export function getMascotStage(childId: string | null | undefined): MascotStage {
  if (!childId || typeof window === "undefined") return "crianca";
  try {
    const v = localStorage.getItem(KEY(childId));
    if (v === "ovo" || v === "nascendo" || v === "bebe" || v === "crianca") return v;
  } catch {}
  return "crianca";
}

export function setMascotStage(childId: string, stage: MascotStage) {
  try {
    localStorage.setItem(KEY(childId), stage);
    window.dispatchEvent(new CustomEvent(EVT, { detail: { childId, stage } }));
  } catch {}
}

export function useMascotStage(childId: string | null | undefined): MascotStage {
  return useSyncExternalStore(
    (cb) => {
      const handler = () => cb();
      window.addEventListener(EVT, handler);
      window.addEventListener("storage", handler);
      return () => {
        window.removeEventListener(EVT, handler);
        window.removeEventListener("storage", handler);
      };
    },
    () => getMascotStage(childId),
    () => "crianca" as MascotStage,
  );
}
