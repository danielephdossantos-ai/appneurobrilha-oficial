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
        console.log("AuthGuard: Initial session check...");
        
        // Timeout the session check if it hangs
        const sessionPromise = supabase.auth.getSession();
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error("Supabase hang")), 3000)
        );
        
        const res = await Promise.race([sessionPromise, timeoutPromise]);
        const { data, error } = res as any;
        
        if (error) throw error;
        
        console.log("AuthGuard: Session result:", !!data?.session);
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
    
    // Safety fallback: if nothing happened in 5 seconds, just show the app
    fallbackTimer = setTimeout(() => {
      if (mounted && !ready) {
        console.warn("AuthGuard: Safety fallback triggered");
        setReady(true);
      }
    }, 5000);

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
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground animate-pulse">Iniciando ambiente seguro...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};