/**
 * Modo Admin/Dev — libera TODAS as aulas/fases pra testar sem precisar
 * concluir pré-requisitos. Persiste em localStorage.
 *
 * Ligado por padrão (você é o administrador). Pode ser desligado pelo
 * toggle na trilha ou via console: localStorage.setItem("eb:admin","0").
 */
import { useEffect, useState } from "react";

const KEY = "eb:admin";

export function isAdminMode(): boolean {
  if (typeof window === "undefined") return true; // SSR: assume admin
  const v = window.localStorage.getItem(KEY);
  if (v === null) return true; // padrão: ligado
  return v === "1";
}

export function setAdminMode(on: boolean) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, on ? "1" : "0");
  window.dispatchEvent(new Event("eb:admin-changed"));
}

export function useAdminMode(): [boolean, (on: boolean) => void] {
  const [on, setOn] = useState<boolean>(() => isAdminMode());
  useEffect(() => {
    const handler = () => setOn(isAdminMode());
    window.addEventListener("eb:admin-changed", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("eb:admin-changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);
  return [on, (v: boolean) => setAdminMode(v)];
}
