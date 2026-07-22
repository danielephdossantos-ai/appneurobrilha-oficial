import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  Navigate,
  createRootRouteWithContext,
  useLocation,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  const location = useLocation();

  if (location.pathname === "/index" || location.pathname === "/index/") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NeuroBrilha Kids — Aprendizagem adaptativa para crianças neurodivergentes" },
      {
        name: "description",
        content:
          "Plataforma de aprendizagem adaptativa BNCC + práticas clínicas (ABA, Orton-Gillingham, TEACCH, CRA) para crianças com TDAH, TEA, dislexia, discalculia.",
      },
      { property: "og:title", content: "NeuroBrilha Kids" },
      {
        property: "og:description",
        content: "Ensino BNCC adaptado por perfil clínico, terapia, rotina e IA professora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800;900&display=swap",
      },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/pwa-192x192.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useStopSpeechOnScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthGuard>
        <MascotProvider>
          <ParentModeProvider>
            <HiperfocoProvider>
              <div className="relative min-h-screen">
                <Outlet />
                <LGPDConsent />
                <ConnectivityStatus />
                <MascotGlobalContainer />
                <ParentPinGate />
                <ProfessorBrilhoMount />
              </div>
            </HiperfocoProvider>
          </ParentModeProvider>
        </MascotProvider>
      </AuthGuard>
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}

/**
 * Regra global: quando o usuário rola a tela, para qualquer fala do
 * professor virtual em andamento. Evita que a última aula continue
 * falando enquanto a criança já subiu/desceu a página.
 */
function useStopSpeechOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastY = window.scrollY;
    let lastStop = 0;
    const THRESHOLD = 24;

    const stop = () => {
      const now = Date.now();
      if (now - lastStop < 150) return;
      lastStop = now;
      try {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      } catch {}
      stopSpeaking();
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < THRESHOLD) return;
      lastY = y;
      stop();
    };
    const onWheel = () => stop();
    const onTouchMove = () => stop();

    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true } as any);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);
}

import { Toaster } from "sonner";
import { LGPDConsent } from "@/modules/auth/components/LGPDConsent";
import { ConnectivityStatus } from "@/components/ConnectivityStatus";
import { MascotProvider } from "@/contexts/MascotContext";
import { MascotGlobalContainer } from "@/components/rewards/MascotGlobalContainer";
import { ParentModeProvider } from "@/contexts/ParentModeContext";
import { ParentPinGate } from "@/components/auth/ParentPinGate";
import { HiperfocoProvider } from "@/context/HiperfocoContext";
import { AuthGuard } from "@/modules/auth/components/AuthGuard";
import { ProfessorBrilhoMount } from "@/components/professor/ProfessorBrilhoMount";
