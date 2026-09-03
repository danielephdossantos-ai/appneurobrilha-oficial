import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, BookOpenCheck, Copy, GraduationCap, Loader2, Users } from "lucide-react";
import { toast } from "sonner";
import { Shell } from "@/components/Layout";
import { supabase } from "@/database/supabase/client";

export const Route = createFileRoute("/area-professor")({ component: TeacherArea });
type Profile = { display_name: string | null; school_name: string | null; status: string; access_expires_at: string };
type Student = { link_id: string; child_id: string; child_name: string; school_year: string | null; valid_until: string };
type Benefit = { active_paid_students: number; reached_four: boolean; benefit_status: string; school_year: number };

function TeacherArea() {
  const db = supabase as any;
  const [loading,setLoading]=useState(true); const [profile,setProfile]=useState<Profile|null>(null);
  const [students,setStudents]=useState<Student[]>([]); const [code,setCode]=useState(""); const [invites,setInvites]=useState<string[]>([]);
  const [benefit,setBenefit]=useState<Benefit|null>(null);
  const [busy,setBusy]=useState(false);

  async function load() {
    setLoading(true);
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) { setLoading(false); return; }
    const [{data:p},{data:s},{data:b}] = await Promise.all([
      db.from("teacher_profiles").select("display_name,school_name,status,access_expires_at").eq("user_id",userData.user.id).maybeSingle(),
      db.rpc("teacher_list_students"),
      db.rpc("teacher_access_summary"),
    ]);
    setProfile(p ?? null); setStudents(s ?? []); setBenefit(b?.[0] ?? null); setLoading(false);
  }
  useEffect(()=>{void load();},[]);

  async function activate() {
    setBusy(true); const {error}=await db.rpc("redeem_teacher_access_code",{raw_code:code}); setBusy(false);
    if(error) return toast.error("Código docente inválido, vencido ou já utilizado.");
    toast.success("Área do Professor ativada por um ano."); setCode(""); await load();
  }
  async function generateInvites() {
    setBusy(true); const {data,error}=await db.rpc("teacher_generate_student_invites",{code_count:1}); setBusy(false);
    if(error) return toast.error("Não foi possível gerar o convite.");
    setInvites((data??[]).map((x:any)=>x.code));
  }

  if(loading)return <Shell><div className="min-h-[50vh] grid place-items-center"><Loader2 className="animate-spin"/></div></Shell>;
  if(!profile)return <Shell><div className="max-w-lg mx-auto rounded-3xl border bg-white p-6 space-y-5"><GraduationCap className="h-12 w-12 text-primary"/><div><h1 className="text-2xl font-black">Área do Professor</h1><p className="text-muted-foreground">Entre com sua conta e use o código docente fornecido pela administradora.</p></div><input value={code} onChange={e=>setCode(e.target.value.toUpperCase())} placeholder="Código docente" className="w-full min-h-14 rounded-xl border-2 px-4 text-lg font-bold"/><button onClick={activate} disabled={busy||!code.trim()} className="w-full min-h-14 rounded-xl bg-primary text-primary-foreground font-black disabled:opacity-50">Ativar acesso</button></div></Shell>;

  return <Shell><div className="max-w-5xl mx-auto space-y-6"><header className="rounded-3xl bg-gradient-to-r from-indigo-700 to-violet-600 text-white p-6"><p className="text-sm font-bold opacity-80">ÁREA DO PROFESSOR</p><h1 className="text-3xl font-black">{profile.display_name||"Professor(a)"}</h1><p className="mt-2">Acesso válido até {new Date(profile.access_expires_at).toLocaleDateString("pt-BR")}</p></header>
    <section className={`rounded-2xl border-2 p-5 ${benefit?.reached_four ? "bg-emerald-50 border-emerald-200" : "bg-amber-50 border-amber-200"}`}><div className="flex justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-wider">Benefício anual</p><h2 className="text-xl font-black mt-1">{benefit?.reached_four ? "Gratuidade desbloqueada" : `${benefit?.active_paid_students??0} de 4 alunos assinantes`}</h2><p className="text-sm text-muted-foreground mt-1">{benefit?.reached_four ? "O benefício continua com 1, 2 ou 3 alunos e só é suspenso se não houver nenhum aluno conectado." : "Ao alcançar quatro alunos pagantes conectados, seu acesso fica gratuito neste ano letivo."}</p></div><div className="text-3xl font-black text-emerald-700">{benefit?.active_paid_students??0}</div></div>{!benefit?.reached_four&&<div className="h-3 bg-white rounded-full overflow-hidden mt-4"><div className="h-full bg-amber-500" style={{width:`${Math.min(100,((benefit?.active_paid_students??0)/4)*100)}%`}}/></div>}</section>
    <section className="grid sm:grid-cols-2 gap-4"><Link to="/area-professor/pratica" className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5"><GraduationCap className="text-emerald-700"/><h2 className="font-black text-lg mt-2">Usar sem conectar aluno</h2><p className="text-sm text-muted-foreground mt-2">Abra atividades no seu aparelho sem cadastro e sem salvar dados de criança.</p></Link><div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-5"><Users className="text-indigo-700"/><h2 className="font-black text-lg mt-2">Conectar aluno assinante</h2><p className="text-sm text-muted-foreground mt-2">Com autorização da família, acompanhe progresso e trabalhe em conjunto.</p></div></section>
    <section className="grid sm:grid-cols-3 gap-3"><Link to="/area-professor/biblioteca-inclusiva" className="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-5"><BookOpenCheck className="text-indigo-700"/><h2 className="font-black mt-2">Biblioteca Inclusiva</h2><p className="mt-1 text-sm text-muted-foreground">Aulas adaptadas para necessidades específicas.</p></Link><Link to="/biblioteca-pedagogica" className="rounded-2xl border bg-white p-5"><BookOpen className="text-indigo-600"/><h2 className="font-black mt-2">Consultar BNCC</h2></Link><div className="rounded-2xl border bg-white p-5"><Users className="text-indigo-600"/><h2 className="font-black mt-2">{students.length} aluno(s) conectado(s)</h2></div></section>
    <section className="rounded-2xl border bg-white p-5 space-y-4"><h2 className="text-xl font-black">Conectar um aluno</h2><p className="text-sm text-muted-foreground">Gere um convite e entregue ao responsável. A criança só aparecerá após a autorização na Área dos Pais.</p><button onClick={generateInvites} disabled={busy} className="px-5 min-h-12 rounded-xl bg-indigo-600 text-white font-black">Gerar convite individual</button>{invites.map(x=><button key={x} onClick={()=>{void navigator.clipboard?.writeText(x);toast.success("Código copiado.")}} className="w-full flex justify-between items-center rounded-xl bg-indigo-50 p-4 font-mono font-black text-indigo-900"><span>{x}</span><Copy/></button>)}</section>
    <section className="rounded-2xl border bg-white p-5"><h2 className="text-xl font-black mb-3">Alunos autorizados</h2>{students.length===0?<p className="text-muted-foreground">Nenhum aluno conectado ainda.</p>:<div className="grid sm:grid-cols-2 gap-3">{students.map(s=><div key={s.link_id} className="rounded-xl bg-slate-50 p-4"><p className="font-black">{s.child_name}</p><p className="text-sm text-muted-foreground">{s.school_year||"Ano não informado"} · autorização até {new Date(s.valid_until+"T12:00:00").toLocaleDateString("pt-BR")}</p></div>)}</div>}</section></div></Shell>;
}
