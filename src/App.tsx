import React, { useEffect } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

const router = getRouter();

function App() {
  useEffect(() => {
    // Limpeza de cache solicitada para reconstrução do Escola Brilha
    const CACHE_VERSION = "2.1.0-remove-libras";
    const currentVersion = localStorage.getItem("app_version");

    if (currentVersion !== CACHE_VERSION) {
      console.log("Limpando cache (LIBRAS removido)...");
      Object.keys(localStorage).forEach((key) => {
        if (
          key.startsWith("neurobrilha:") ||
          key.startsWith("pip:") ||
          key.toLowerCase().includes("libras")
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
