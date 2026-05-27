import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/Layout";
import { toast } from "sonner";
import { Sparkles, Loader2, Eye, EyeOff, User } from "lucide-react";

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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate({ to: "/" });
    });
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Bem-vindo(a) de volta!");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: name },
          },
        });
        if (error) throw error;
        toast.success("Conta criada! Verifique seu e-mail.");
      }
      navigate({ to: "/" });
    } catch (error: any) {
      toast.error(error.message);
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
        password: demoPass 
      });
      
      if (signInError) {
        // If demo user doesn't exist, sign up
        const { error: signUpError } = await supabase.auth.signUp({
          email: demoEmail,
          password: demoPass,
          options: { data: { full_name: "Visitante Brilhante" } }
        });
        if (signUpError) throw signUpError;
        toast.success("Bem-vindo(a) ao modo demonstração!");
      } else {
        toast.success("Bem-vindo(a) de volta!");
      }
      navigate({ to: "/" });
    } catch (error: any) {
      toast.error("Erro ao acessar modo demo: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sidebar grid place-items-center p-4">
      <Card className="max-w-md w-full p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-primary to-success grid place-items-center text-4xl shadow-glow mb-4">
            🌱
          </div>
          <h1 className="text-3xl font-extrabold text-center">NeuroBrilha Kids</h1>
          <p className="text-muted-foreground text-center mt-2">Aprendizagem adaptativa para crianças neurodivergentes</p>
        </div>

        <div className="flex gap-2 p-1 bg-muted rounded-2xl mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-xl font-bold transition-all ${isLogin ? "bg-card shadow-soft" : "text-muted-foreground"}`}
          >
            Entrar
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-xl font-bold transition-all ${!isLogin ? "bg-card shadow-soft" : "text-muted-foreground"}`}
          >
            Cadastrar
          </button>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-sm font-bold ml-1">Seu Nome</label>
              <input
                type="text"
                required
                className="w-full p-3 rounded-xl bg-muted border border-border font-medium focus:border-primary outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="space-y-1.5">
            <label className="text-sm font-bold ml-1">E-mail</label>
            <input
              type="email"
              required
              className="w-full p-3 rounded-xl bg-muted border border-border font-medium focus:border-primary outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-bold ml-1">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                minLength={6}
                className="w-full p-3 pr-10 rounded-xl bg-muted border border-border font-medium focus:border-primary outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-extrabold text-lg shadow-glow hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : isLogin ? "Entrar" : "Começar Agora"}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Ou</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDemoLogin}
          disabled={loading}
          className="w-full py-3 bg-secondary text-secondary-foreground rounded-2xl font-bold border border-border flex items-center justify-center gap-2 hover:bg-muted active:scale-[0.98] transition-all"
        >
          <User size={18} />
          Acessar como Visitante
        </button>

        <p className="text-center text-xs text-muted-foreground mt-6 px-4">
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade.
        </p>
      </Card>
    </div>
  );
}
