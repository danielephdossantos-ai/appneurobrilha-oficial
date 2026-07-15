import React, { useEffect } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

const router = getRouter();

function App() {
  useEffect(() => {
    // Limpeza de cache de reconstrução pedagógica
    const CACHE_VERSION = "2.7.0-arte-1ano-roxo";
    const currentVersion = localStorage.getItem("app_version");

    if (currentVersion !== CACHE_VERSION) {
      console.log("Limpando cache pedagógico antigo...");
      Object.keys(localStorage).forEach((key) => {
        if (
          key.startsWith("neurobrilha:") ||
          key.startsWith("pip:") ||
          key.toLowerCase().includes("libras") ||
          key.toLowerCase().includes("escola-brilha-aula") ||
          key.toLowerCase().includes("aulas_bncc") ||
          key.startsWith("lc:v1:") ||
          key.startsWith("lc:v2:")
        ) {
          localStorage.removeItem(key);
        }
      });

      if ("caches" in window) {
        caches.keys().then((keys) => keys.forEach((key) => caches.delete(key))).catch(() => undefined);
      }

      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .getRegistrations()
          .then((registrations) => registrations.forEach((registration) => registration.unregister()))
          .catch(() => undefined);
      }

      localStorage.setItem("app_version", CACHE_VERSION);
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
