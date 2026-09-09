import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/database/supabase/client";

export const Route = createFileRoute("/reset-password")({ component: ResetPassword });

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (mounted) setReady(Boolean(data.session));
    });
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || session) setReady(true);
    });
    return () => {
      mounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password.length < 6) return toast.error("A senha precisa ter pelo menos 6 caracteres.");
    if (password !== confirmPassword) return toast.error("As duas senhas precisam ser iguais.");
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) return toast.error(error.message || "Não foi possível alterar a senha.");
    toast.success("Senha alterada. Agora você já pode entrar.");
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <div className="min-h-screen bg-sidebar grid place-items-center p-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-3xl border-2 bg-background p-6 shadow-xl space-y-4">
        <img src="/app-icon-1024.png" alt="NeuroBrilha" className="mx-auto h-20 w-20 rounded-[2rem] object-cover" />
        <div className="text-center"><h1 className="text-2xl font-black">Criar nova senha</h1><p className="mt-1 text-sm text-muted-foreground">Digite e confirme a senha que você quer usar.</p></div>
        {!ready ? <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-900">Abra esta página pelo link enviado ao seu e-mail. Se o link expirou, solicite outro na tela de entrada.</p> : <>
          <label className="block text-xs font-bold">Nova senha</label>
          <div className="relative"><input type={showPassword ? "text" : "password"} required minLength={6} autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border-2 border-input px-3 py-2.5 pr-11" /><button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"} className="absolute inset-y-0 right-0 grid w-11 place-items-center text-muted-foreground">{showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}</button></div>
          <label className="block text-xs font-bold">Confirmar nova senha</label>
          <input type={showPassword ? "text" : "password"} required minLength={6} autoComplete="new-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full rounded-xl border-2 border-input px-3 py-2.5" />
          <button disabled={loading} className="w-full rounded-xl bg-primary py-3 font-black text-primary-foreground disabled:opacity-60">{loading ? <Loader2 className="mx-auto h-5 w-5 animate-spin" /> : "Salvar nova senha"}</button>
        </>}
        <button type="button" onClick={() => navigate({ to: "/auth" })} className="w-full text-xs font-bold text-muted-foreground hover:underline">Voltar para entrar</button>
      </form>
    </div>
  );
}
