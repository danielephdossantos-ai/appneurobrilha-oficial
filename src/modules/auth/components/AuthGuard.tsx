import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { supabase } from "@/database/supabase/client";

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const settledRef = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let mounted = true;
    let fallbackTimer: ReturnType<typeof setTimeout>;

    const finish = (hasSession: boolean) => {
      if (!mounted) return;
      settledRef.current = true;
      setAuthed(hasSession);
      setReady(true);
    };
    
    const checkSession = async () => {
      try {
        console.log("AuthGuard: Initial session check starting...");
        
        const { data, error } = await supabase.auth.getSession();
        
        if (error) throw error;
        
        console.log("AuthGuard: Session check finished. Session exists:", !!data?.session);
        finish(!!data?.session);
      } catch (err) {
        console.error("AuthGuard: Session check failed or timed out:", err);
        finish(false);
      }
    };

    checkSession();
    
    // Em redes móveis lentas, não presumir que a pessoa saiu antes da sessão terminar.
    fallbackTimer = setTimeout(() => {
      if (mounted && !settledRef.current) {
        console.warn("AuthGuard: Session check timed out (15s)");
        finish(false);
      }
    }, 15000);

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      console.log("AuthGuard: Auth state change:", _e, !!session);
      if (mounted) {
        finish(!!session);
      }
    });

    return () => {
      mounted = false;
      clearTimeout(fallbackTimer);
      sub.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const publicRoutes = ["/auth", "/reset-password", "/.lovable/oauth/consent"];
    const isPublicRoute = publicRoutes.some(
      (route) => location.pathname === route || location.pathname.startsWith(`${route}/`),
    );
    
    if (!authed && !isPublicRoute) {
      console.log("AuthGuard: Redirecting to /auth");
      navigate({ to: "/auth", search: { next: location.pathname }, replace: true });
    }
  }, [ready, authed, location.pathname, navigate]);

  if (!ready) {
    return (
      <div className="min-h-screen grid place-items-center bg-background">
        <div className="flex flex-col items-center gap-4 p-6 text-center">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <div className="space-y-2">
            <p className="text-lg font-medium text-foreground">Iniciando ambiente seguro...</p>
            <p className="text-sm text-muted-foreground animate-pulse">
              Preparando a Cidade Mágica...
            </p>
          </div>
        </div>
      </div>
    );
  }

  const publicRoutes = ["/auth", "/reset-password", "/.lovable/oauth/consent"];
  const isPublicRoute = publicRoutes.some(
    (route) => location.pathname === route || location.pathname.startsWith(`${route}/`),
  );
  if (!authed && !isPublicRoute) return null;

  return <>{children}</>;
};
