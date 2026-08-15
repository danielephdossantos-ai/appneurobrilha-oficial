import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      mcpPlugin(),
      VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "favicon-32x32.png"],
      manifest: {
        name: "NeuroBrilha Kids",
        short_name: "NeuroBrilha",
        description: "Sistema neuroeducacional para crianças neurodivergentes",
        theme_color: "#7c3aed",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"],
        // Chunks muito grandes (registries de conteúdo) são carregados sob demanda
        // e não devem entrar no precache do service worker.
        globIgnores: ["**/registry-*.js", "**/node_modules/**/*"],
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /^\/api\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 5,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      }),
    ],
    server: {
      host: "0.0.0.0",
      port: 5000,
      allowedHosts: true,
    },
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    build: {
      chunkSizeWarningLimit: 1000,
    },
    optimizeDeps: {
      include: ["framer-motion", "recharts", "lucide-react", "@tanstack/react-virtual", "idb-keyval"],
    },
  },
});
