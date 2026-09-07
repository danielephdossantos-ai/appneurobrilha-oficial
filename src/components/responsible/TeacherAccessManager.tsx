import { useCallback, useEffect, useState } from "react";
import { FileCheck2, ShieldCheck, Trash2, Users } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/database/supabase/client";

type LinkRow = { link_id: string; teacher_name: string; status: string; valid_until: string; profile_consented?: boolean };

export function TeacherAccessManager({ childId, childName }: { childId: string; childName: string }) {
  const [code, setCode] = useState("");
  const [links, setLinks] = useState<LinkRow[]>([]);
  const [busy, setBusy] = useState(false);
  const db = supabase as any;

  const load = useCallback(async () => {
    const [{data,error},{data:consents}] = await Promise.all([
      db.rpc("guardian_list_teacher_links", { selected_child_id: childId }),
      db.rpc("guardian_list_teacher_profile_consents", { selected_child_id: childId }),
    ]);
    if (!error) { const map=new Map((consents??[]).map((x:any)=>[x.link_id,x.profile_consented])); setLinks((data??[]).map((x:LinkRow)=>({...x,profile_consented:map.get(x.link_id)===true}))); }
  }, [childId]);

  useEffect(() => { void load(); }, [load]);

  async function authorize() {
    if (!code.trim()) return;
    setBusy(true);
    if (code.replace(/[^A-Z0-9]/gi, "").toUpperCase().startsWith("NBALUNOGRATIS")) {
      const { data, error } = await db.rpc("guardian_redeem_child_free_code", {
        raw_code: code, selected_child_id: childId,
      });
      setBusy(false);
      if (error) return toast.error("Código gratuito inválido, vencido ou já utilizado.");
      toast.success(`Acesso gratuito ativado até ${new Date(data).toLocaleDateString("pt-BR")}.`);
      setCode("");
      return;
    }
    const { data, error } = await db.rpc("guardian_redeem_student_invite", {
      raw_code: code,
      selected_child_id: childId,
    });
    setBusy(false);
    if (error) return toast.error("Código inválido, vencido ou já utilizado.");
    toast.success(`${data?.[0]?.teacher_name ?? "Professor(a)"} autorizado(a) por um ano.`);
    setCode("");
    await load();
  }

  async function revoke(linkId: string) {
    const { error } = await db.from("teacher_student_links").update({
      status: "revoked", revoked_at: new Date().toISOString(), updated_at: new Date().toISOString(),
    }).eq("id", linkId).eq("child_id", childId);
    if (error) return toast.error("Não foi possível revogar o acesso.");
    toast.success("Acesso do professor revogado.");
    await load();
  }

  async function setProfileConsent(linkId:string,allow:boolean){
    setBusy(true);const {error}=await db.rpc("guardian_set_teacher_profile_consent",{selected_link_id:linkId,allow_profile:allow});setBusy(false);
    if(error)return toast.error("Não foi possível atualizar a autorização do perfil.");
    toast.success(allow?"Perfil pedagógico autorizado.":"Autorização do perfil retirada e conteúdo arquivado.");await load();
  }

  return <section className="rounded-2xl border bg-white p-5 space-y-4">
    <div className="flex gap-3">
      <div className="h-11 w-11 rounded-xl bg-indigo-100 text-indigo-700 grid place-items-center"><ShieldCheck /></div>
      <div><p className="text-xs font-bold text-indigo-700">Acesso protegido</p><h3 className="font-black">Professores autorizados para {childName}</h3><p className="text-sm text-muted-foreground">O professor só verá dados pedagógicos necessários e pode ser removido a qualquer momento.</p></div>
    </div>
    <div className="flex flex-col sm:flex-row gap-2">
      <input value={code} onChange={e=>setCode(e.target.value.toUpperCase())} placeholder="Código do professor ou código gratuito" className="flex-1 min-h-12 rounded-xl border-2 px-4 text-base font-bold" />
      <button onClick={authorize} disabled={busy || !code.trim()} className="min-h-12 px-5 rounded-xl bg-indigo-600 text-white font-black disabled:opacity-50">Autorizar</button>
    </div>
    {links.length === 0 ? <p className="text-sm text-muted-foreground">Nenhum professor autorizado.</p> : <div className="space-y-3">{links.map(link=><div key={link.link_id} className="rounded-xl bg-slate-50 p-3"><div className="flex items-center gap-3"><Users className="text-indigo-600"/><div className="flex-1"><p className="font-bold">{link.teacher_name}</p><p className="text-xs text-muted-foreground">Situação: {link.status} · até {new Date(link.valid_until+"T12:00:00").toLocaleDateString("pt-BR")}</p></div>{link.status==="active"&&<button onClick={()=>revoke(link.link_id)} className="p-3 rounded-xl text-red-700 bg-red-50" aria-label="Revogar todo o acesso"><Trash2 className="h-5 w-5"/></button>}</div>{link.status==="active"&&<div className="mt-3 rounded-xl border bg-white p-3"><div className="flex gap-2"><FileCheck2 className="h-5 w-5 text-emerald-700 shrink-0"/><div><p className="font-bold text-sm">Perfil Pedagógico e Funcional</p><p className="text-xs text-muted-foreground">Permite registrar somente apoios escolares observáveis. Não é diagnóstico nem prontuário.</p></div></div><button disabled={busy} onClick={()=>setProfileConsent(link.link_id,!link.profile_consented)} className={`mt-3 min-h-11 w-full rounded-xl px-4 font-black ${link.profile_consented?"bg-red-50 text-red-700":"bg-emerald-600 text-white"}`}>{link.profile_consented?"Retirar autorização do perfil":"Autorizar perfil pedagógico"}</button></div>}</div>)}</div>}
  </section>;
}
