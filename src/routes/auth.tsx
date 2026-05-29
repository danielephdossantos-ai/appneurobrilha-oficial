import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/database/supabase/client";
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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate({ to: "/" });
    });
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      if (isLogin) {
        const { error, data } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          await AuditLogService.log({
            action: 'LOGIN_FAILURE',
            module: 'AUTH',
            metadata: { email, error: error.message }
          });
          if (error.message.includes("Invalid login credentials")) {
            throw new Error("E-mail ou senha incorretos. Se ainda não tem conta, clique em 'Cadastrar'.");
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
            action: 'REGISTER_FAILURE',
            module: 'AUTH',
            metadata: { email, error: error.message }
          });
          if (error.message.includes("known to be weak")) {
            throw new Error("Esta senha é muito simples. Tente uma com pelo menos 6 letras ou números.");
          }
          throw error;
        }
        
        await AuditLogService.log({
          action: 'REGISTER_SUCCESS',
          module: 'AUTH',
          metadata: { email }
        });

        // Ensure we try to sign in automatically if auto-confirm is on
        await supabase.auth.signInWithPassword({ email, password });
        toast.success("Conta criada com sucesso!");
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
      <KidCard variant="white" className="max-w-md w-full p-8 border-4 border-primary/20 shadow-glow">
        <div className="flex flex-col items-center mb-10">
          <div className="h-20 w-20 rounded-[2rem] bg-gradient-to-br from-primary to-success grid place-items-center text-5xl shadow-glow mb-6 transform -rotate-6">
            🌱
          </div>
          <h1 className="text-4xl font-black text-center tracking-tight text-foreground">NeuroBrilha</h1>
          <p className="text-muted-foreground font-bold text-center mt-2 uppercase tracking-widest text-xs">Aprendizagem Adaptativa</p>
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
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Seu Nome</label>
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
            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">E-mail</label>
            <input
              type="email"
              required
              className="w-full p-4 rounded-2xl bg-muted border-2 border-transparent font-bold focus:border-primary focus:bg-white transition-all outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Senha</label>
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
                {showPassword ? <EyeOff size={24} strokeWidth={3} /> : <Eye size={24} strokeWidth={3} />}
              </button>
            </div>
          </div>

          <KidButton
            disabled={loading}
            size="lg"
            className="w-full mt-4"
          >
            {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : isLogin ? "ENTRAR" : "COMEÇAR AGORA"}
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
          onClick={handleDemoLogin}
          disabled={loading}
          className="w-full border-2 border-primary/10"
        >
          <Sparkles className="text-primary" size={20} strokeWidth={3} />
          MODO VISITANTE
        </KidButton>

        <p className="text-center text-[10px] font-bold text-muted-foreground mt-8 px-6 uppercase tracking-widest leading-relaxed">
          Ao continuar, você concorda com nossos <br/> Termos de Uso e Privacidade.
        </p>
      </KidCard>
    </div>
  );
}
