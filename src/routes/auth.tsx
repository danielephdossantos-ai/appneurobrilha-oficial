import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/database/supabase/client";
import { lovable } from "@/integrations/lovable";
import { AuditLogService } from "@/modules/auth/services/AuditLogService";
import { KidCard } from "@/components/ui/KidCard";
import { KidButton } from "@/components/ui/KidButton";
import { toast } from "sonner";
import { Sparkles, Loader2, Eye, EyeOff, User, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/auth")({
  component: Auth,
});

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      if (isLogin) {
        const { error, data } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          await AuditLogService.log({
            action: "LOGIN_FAILURE",
            module: "AUTH",
            metadata: { email, error: error.message },
          });
          if (error.message.includes("Invalid login credentials")) {
            throw new Error(
              "E-mail ou senha incorretos. Se ainda não tem conta, clique em 'Cadastrar'.",
            );
          }
          throw error;
        }
      } else {
        const { error, data } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: name },
          },
        });
        if (error) {
          await AuditLogService.log({
            action: "REGISTER_FAILURE",
            module: "AUTH",
            metadata: { email, error: error.message },
          });
          if (error.message.includes("known to be weak")) {
            throw new Error(
              "Esta senha é muito simples. Tente uma com pelo menos 6 letras ou números.",
            );
          }
          throw error;
        }

        await AuditLogService.log({
          action: "REGISTER_SUCCESS",
          module: "AUTH",
          metadata: { email },
        });

        // Ensure we try to sign in automatically if auto-confirm is on
        await supabase.auth.signInWithPassword({ email, password });
        toast.success("Conta criada com sucesso!");
      }
      navigate({ to: "/" });
    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : "Erro ao autenticar.");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setLoading(true);
    try {
      // Create or login to a demo account
      const demoEmail = "demo@neurobrilha.com";
      const demoPass = "123456";

      // Try to sign in
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: demoEmail,
        password: demoPass,
      });

      if (signInError) {
        // If demo user doesn't exist, sign up
        const { error: signUpError } = await supabase.auth.signUp({
          email: demoEmail,
          password: demoPass,
          options: { data: { full_name: "Visitante Brilhante" } },
        });
        if (signUpError) throw signUpError;
        toast.success("Bem-vindo(a) ao modo demonstração!");
      } else {
        toast.success("Bem-vindo(a) de volta!");
      }
      navigate({ to: "/" });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "erro desconhecido";
      toast.error("Erro ao acessar modo demo: " + message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sidebar grid place-items-center p-4">
      <KidCard
        variant="white"
        className="max-w-md w-full p-8 border-4 border-primary/20 shadow-glow"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="h-20 w-20 rounded-[2rem] bg-gradient-to-br from-primary to-success grid place-items-center text-5xl shadow-glow mb-6 transform -rotate-6">
            🌱
          </div>
          <h1 className="text-4xl font-black text-center tracking-tight text-foreground">
            NeuroBrilha
          </h1>
          <p className="text-muted-foreground font-bold text-center mt-2 uppercase tracking-widest text-xs">
            Aprendizagem Adaptativa
          </p>
        </div>

        <div className="flex gap-2 p-1.5 bg-muted rounded-3xl mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 rounded-2xl font-black transition-all ${isLogin ? "bg-white shadow-soft text-primary" : "text-muted-foreground"}`}
          >
            Entrar
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 rounded-2xl font-black transition-all ${!isLogin ? "bg-white shadow-soft text-primary" : "text-muted-foreground"}`}
          >
            Cadastrar
          </button>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                Seu Nome
              </label>
              <input
                type="text"
                required
                className="w-full p-4 rounded-2xl bg-muted border-2 border-transparent font-bold focus:border-primary focus:bg-white transition-all outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
              E-mail
            </label>
            <input
              type="email"
              required
              className="w-full p-4 rounded-2xl bg-muted border-2 border-transparent font-bold focus:border-primary focus:bg-white transition-all outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                minLength={6}
                className="w-full p-4 pr-12 rounded-2xl bg-muted border-2 border-transparent font-bold focus:border-primary focus:bg-white transition-all outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/40 hover:text-primary transition-colors p-1"
              >
                {showPassword ? (
                  <EyeOff size={24} strokeWidth={3} />
                ) : (
                  <Eye size={24} strokeWidth={3} />
                )}
              </button>
            </div>
          </div>

          <KidButton disabled={loading} size="lg" className="w-full mt-4">
            {loading ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : isLogin ? (
              "ENTRAR"
            ) : (
              "COMEÇAR AGORA"
            )}
          </KidButton>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t-2 border-border"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase font-black tracking-[0.3em] text-muted-foreground">
            <span className="bg-white px-4">Ou</span>
          </div>
        </div>

        <KidButton
          type="button"
          variant="secondary"
          onClick={async () => {
            setLoading(true);
            try {
              const result = await lovable.auth.signInWithOAuth("google", {
                redirect_uri: window.location.origin,
              });
              if (result.error) throw result.error;
              if (!result.redirected) navigate({ to: "/" });
            } catch (e: unknown) {
              toast.error(e instanceof Error ? e.message : "Erro ao entrar com Google.");
              setLoading(false);
            }
          }}
          disabled={loading}
          className="w-full border-2 border-primary/10 mb-3"
        >
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          ENTRAR COM GOOGLE
        </KidButton>

        <KidButton
          type="button"
          variant="secondary"
          onClick={handleDemoLogin}
          disabled={loading}
          className="w-full border-2 border-primary/10"
        >
          <Sparkles className="text-primary" size={20} strokeWidth={3} />
          MODO VISITANTE
        </KidButton>

        <p className="text-center text-[10px] font-bold text-muted-foreground mt-8 px-6 uppercase tracking-widest leading-relaxed">
          Ao continuar, você concorda com nossos <br /> Termos de Uso e Privacidade.
        </p>
      </KidCard>
    </div>
  );
}
