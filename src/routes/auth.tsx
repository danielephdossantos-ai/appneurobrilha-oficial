import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { toast } from "sonner";
import { lovable } from "@/integrations/lovable";

export const Route = createFileRoute("/auth")({
  component: Auth,
});

function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        navigate({ to: "/", replace: true });
      } else {
        setChecking(false);
      }
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        // If session returned (auto-confirm on), redirect; else show msg
        const { data } = await supabase.auth.getSession();
        if (data.session) {
          toast.success("Conta criada!");
          navigate({ to: "/", replace: true });
        } else {
          toast.success("Conta criada! Verifique seu email para confirmar.");
          setMode("login");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Bem-vindo!");
        navigate({ to: "/", replace: true });
      }
    } catch (err: any) {
      toast.error(err?.message ?? "Erro ao autenticar");
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen grid place-items-center bg-sidebar">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sidebar grid place-items-center p-4">
      <div className="w-full max-w-sm flex flex-col items-center gap-5">
        <div className="h-20 w-20 rounded-[2rem] bg-gradient-to-br from-primary to-success grid place-items-center text-5xl shadow-glow transform -rotate-6">
          🌱
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-black tracking-tight text-foreground">NeuroBrilha</h1>
          <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px] mt-1">
            Aprendizagem Adaptativa
          </p>
        </div>

        <form
          onSubmit={submit}
          className="w-full bg-background/90 backdrop-blur rounded-3xl border-2 border-white/30 p-5 flex flex-col gap-3 shadow-xl"
        >
          <h2 className="text-lg font-black text-foreground text-center">
            {mode === "login" ? "Entrar" : "Criar conta"}
          </h2>
          <p className="text-xs text-muted-foreground text-center -mt-2">
            Login uma única vez — o app lembra de você neste aparelho.
          </p>

          <label className="text-xs font-bold text-foreground">Email</label>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border-2 border-input bg-background px-3 py-2.5 text-sm font-medium focus:outline-none focus:border-primary"
            placeholder="seu@email.com"
          />

          <label className="text-xs font-bold text-foreground">Senha</label>
          <input
            type="password"
            required
            minLength={6}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl border-2 border-input bg-background px-3 py-2.5 text-sm font-medium focus:outline-none focus:border-primary"
            placeholder="Mínimo 6 caracteres"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-xl bg-primary text-primary-foreground font-black py-3 text-sm uppercase tracking-wider hover:bg-primary/90 transition disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {mode === "login" ? "Entrar" : "Criar conta"}
          </button>

          <div className="flex items-center gap-2 my-1">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] font-bold text-muted-foreground uppercase">ou</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              const res = await lovable.auth.signInWithOAuth("google", {
                redirect_uri: window.location.origin,
              });
              if (res.error) {
                toast.error(res.error.message ?? "Erro no login Google");
                setLoading(false);
                return;
              }
              if (!res.redirected) {
                navigate({ to: "/", replace: true });
              }
            }}
            className="rounded-xl border-2 border-input bg-background text-foreground font-bold py-3 text-sm hover:bg-accent transition disabled:opacity-60 flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.5 0 10.5-2.1 14.3-5.5l-6.6-5.6C29.6 34.6 26.9 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.8l6.6 5.6C41.5 36.4 44 30.7 44 24c0-1.3-.1-2.3-.4-3.5z"/></svg>
            Continuar com Google
          </button>


          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-xs font-bold text-primary hover:underline"
          >
            {mode === "login"
              ? "Não tem conta? Criar agora"
              : "Já tem conta? Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
