import { useEffect, useState } from "react";
import { BookOpen, CheckCircle2, Clock, Loader2, Play } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { toast } from "sonner";

type Task={id:string;title:string;subject:string;instructions:string;due_date:string;status:"assigned"|"started"|"completed";source_route:string|null};
const labels={assigned:"Enviada pelo professor",started:"Em andamento",completed:"Concluída"};

export function TarefasEnviadasProfessor({childId}:{childId:string}){
  const db=supabase as any;const [tasks,setTasks]=useState<Task[]>([]);const [loading,setLoading]=useState(true);const [busyId,setBusyId]=useState("");
  async function load(){setLoading(true);const{data,error}=await db.rpc("guardian_list_teacher_homework",{selected_child_id:childId});if(error)toast.error("Não foi possível carregar as tarefas enviadas.");setTasks(data??[]);setLoading(false)}
  useEffect(()=>{void load()},[childId]);
  async function update(id:string,status:"started"|"completed"){setBusyId(id);const{error}=await db.rpc("guardian_update_teacher_homework_status",{selected_assignment_id:id,new_status:status});setBusyId("");if(error){toast.error("Não foi possível atualizar a tarefa.");return false}toast.success(status==="completed"?"Tarefa marcada como concluída.":"Tarefa iniciada.");await load();return true}
  async function openTask(task:Task){if(!task.source_route)return;setBusyId(task.id);if(task.status==="assigned"&&!(await update(task.id,"started")))return;window.location.assign(task.source_route)}
  if(loading)return <section className="rounded-2xl border bg-white p-5"><Loader2 className="animate-spin"/></section>;
  if(tasks.length===0)return null;
  return <section className="rounded-2xl border-2 border-sky-200 bg-sky-50 p-5"><h2 className="flex items-center gap-2 text-xl font-black"><BookOpen className="text-sky-700"/>Enviadas pelo professor</h2><p className="mt-1 text-sm text-muted-foreground">Estas atividades ficam separadas das tarefas particulares da família.</p><div className="mt-4 space-y-3">{tasks.map(t=><article key={t.id} className="rounded-xl border bg-white p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900">{labels[t.status]}</span><h3 className="mt-2 text-lg font-black">{t.title}</h3><p className="text-sm text-muted-foreground">{t.subject} · prazo {new Date(t.due_date+"T12:00:00").toLocaleDateString("pt-BR")}</p></div><Clock className="text-sky-700"/></div><p className="mt-3 whitespace-pre-wrap">{t.instructions}</p><div className="mt-4 flex flex-wrap gap-2">{t.source_route&&t.status!=="completed"&&<button onClick={()=>openTask(t)} disabled={busyId===t.id} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-indigo-700 px-4 font-black text-white disabled:opacity-50"><Play className="h-4 w-4"/>Abrir atividade</button>}{t.status==="assigned"&&!t.source_route&&<button onClick={()=>update(t.id,"started")} disabled={busyId===t.id} className="inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 font-bold"><Play className="h-4 w-4"/>Começar</button>}{t.status!=="completed"&&<button onClick={()=>update(t.id,"completed")} disabled={busyId===t.id} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-emerald-700 px-4 font-black text-white disabled:opacity-50">{busyId===t.id?<Loader2 className="h-4 w-4 animate-spin"/>:<CheckCircle2 className="h-4 w-4"/>}Concluir</button>}</div></article>)}</div></section>;
}
