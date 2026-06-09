
import React, { useEffect } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { getRouter } from './router';
import { persister } from './utils/persistence';

const router = getRouter();

function App() {
  useEffect(() => {
    // Limpeza de cache solicitada para reconstrução do Escola Brilha
    const CACHE_VERSION = "2.0.0-rebuild";
    const currentVersion = localStorage.getItem("app_version");
    
    if (currentVersion !== CACHE_VERSION) {
      console.log("Limpando cache para nova versão do Escola Brilha...");
      // Limpa dados de progresso e estados antigos que podem conflitar
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith("neurobrilha:") || key.startsWith("pip:")) {
          localStorage.removeItem(key);
        }
      });

      // Remove cache persistido do React Query para evitar reuso de dados antigos do mascote
      persister.removeClient?.().catch((error) => {
        console.warn("Falha ao limpar cache persistido do React Query:", error);
      });

      localStorage.setItem("app_version", CACHE_VERSION);
    }
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
