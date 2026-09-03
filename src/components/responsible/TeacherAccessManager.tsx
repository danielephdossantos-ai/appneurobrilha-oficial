import { useCallback, useEffect, useState } from "react";
import { ShieldCheck, Trash2, Users } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/database/supabase/client";

type LinkRow = { link_id: string; teacher_name: string; status: string; valid_until: string };

export function TeacherAccessManager({ childId, childName }: { childId: string; childName: string }) {
  const [code, setCode] = useState("");
  const [links, setLinks] = useState<LinkRow[]>([]);
  const [busy, setBusy] = useState(false);
  const db = supabase as any;

  const load = useCallback(async () => {
    const { data, error } = await db.rpc("guardian_list_teacher_links", { selected_child_id: childId });
    if (!error) setLinks(data ?? []);
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

  return <section className="rounded-2xl border bg-white p-5 space-y-4">
    <div className="flex gap-3">
      <div className="h-11 w-11 rounded-xl bg-indigo-100 text-indigo-700 grid place-items-center"><ShieldCheck /></div>
      <div><p className="text-xs font-bold text-indigo-700">Acesso protegido</p><h3 className="font-black">Professores autorizados para {childName}</h3><p className="text-sm text-muted-foreground">O professor só verá dados pedagógicos necessários e pode ser removido a qualquer momento.</p></div>
    </div>
    <div className="flex flex-col sm:flex-row gap-2">
      <input value={code} onChange={e=>setCode(e.target.value.toUpperCase())} placeholder="Código do professor ou código gratuito" className="flex-1 min-h-12 rounded-xl border-2 px-4 text-base font-bold" />
      <button onClick={authorize} disabled={busy || !code.trim()} className="min-h-12 px-5 rounded-xl bg-indigo-600 text-white font-black disabled:opacity-50">Autorizar</button>
    </div>
    {links.length === 0 ? <p className="text-sm text-muted-foreground">Nenhum professor autorizado.</p> : <div className="space-y-2">{links.map(link=><div key={link.link_id} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><Users className="text-indigo-600"/><div className="flex-1"><p className="font-bold">{link.teacher_name}</p><p className="text-xs text-muted-foreground">Situação: {link.status} · até {new Date(link.valid_until+"T12:00:00").toLocaleDateString("pt-BR")}</p></div>{link.status==="active"&&<button onClick={()=>revoke(link.link_id)} className="p-3 rounded-xl text-red-700 bg-red-50" aria-label="Revogar acesso"><Trash2 className="h-5 w-5"/></button>}</div>)}</div>}
  </section>;
}
