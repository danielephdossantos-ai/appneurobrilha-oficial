import React, { useEffect } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import { clearLegacyAppCache, clearServiceWorkerCaches, shouldRefreshAppCache, unregisterServiceWorkers } from "./utils/app-cache";

const router = getRouter();

function App() {
  useEffect(() => {
    if (!shouldRefreshAppCache()) return;

    void (async () => {
      clearLegacyAppCache();
      await clearServiceWorkerCaches();
      await unregisterServiceWorkers();
    })();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
