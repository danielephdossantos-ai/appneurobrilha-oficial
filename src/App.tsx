import React, { useEffect } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

const router = getRouter();

function App() {
  useEffect(() => {
    // Limpeza de cache: remoção de Escola Brilha e Jornada 365
    const CACHE_VERSION = "3.0.0-remove-escola-jornada";
    const currentVersion = localStorage.getItem("app_version");

    if (currentVersion !== CACHE_VERSION) {
      console.log("Limpando cache (Escola Brilha e Jornada 365 removidos)...");
      Object.keys(localStorage).forEach((key) => {
        if (
          key.startsWith("neurobrilha:") ||
          key.startsWith("pip:") ||
          key.toLowerCase().includes("libras") ||
          key.toLowerCase().includes("escola-brilha") ||
          key.toLowerCase().includes("escola_brilha") ||
          key.toLowerCase().includes("escolabrilha") ||
          key.toLowerCase().includes("jornada-365") ||
          key.toLowerCase().includes("jornada365") ||
          key.toLowerCase().includes("jornada_365")
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
