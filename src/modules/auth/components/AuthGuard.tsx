import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { supabase } from "@/database/supabase/client";

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let mounted = true;
    let fallbackTimer: ReturnType<typeof setTimeout>;
    
    const checkSession = async () => {
      try {
        console.log("AuthGuard: Initial session check starting...");
        
        // Timeout the session check if it hangs - reduced to 2 seconds for faster recovery
        const sessionPromise = supabase.auth.getSession();
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error("Supabase hang")), 2000)
        );
        
        const res = await Promise.race([sessionPromise, timeoutPromise]);
        const { data, error } = res as any;
        
        if (error) throw error;
        
        console.log("AuthGuard: Session check finished. Session exists:", !!data?.session);
        if (mounted) {
          setAuthed(!!data?.session);
          setReady(true);
        }
      } catch (err) {
        console.error("AuthGuard: Session check failed or timed out:", err);
        if (mounted) {
          setAuthed(false);
          setReady(true);
        }
      }
    };

    checkSession();
    
    // Safety fallback: if nothing happened in 3 seconds, just show the app (likely unauthenticated)
    fallbackTimer = setTimeout(() => {
      if (mounted && !ready) {
        console.warn("AuthGuard: Safety fallback triggered (3s)");
        setReady(true);
      }
    }, 3000);

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      console.log("AuthGuard: Auth state change:", _e, !!session);
      if (mounted) {
        setAuthed(!!session);
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
    const isAuthRoute = location.pathname.startsWith("/auth");
    const isCallbackRoute = location.pathname.startsWith("/auth/callback");
    
    if (!authed && !isAuthRoute && !isCallbackRoute) {
      console.log("AuthGuard: Redirecting to /auth");
      navigate({ to: "/auth", replace: true });
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

  return <>{children}</>;
};