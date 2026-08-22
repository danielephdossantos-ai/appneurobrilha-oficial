import { supabase } from "@/database/supabase/client";

export type BootstrapResult = { literacy: boolean; school: boolean; support: boolean };

function gradeNumber(serie: string | null | undefined): number | null {
  const m = String(serie ?? "").match(/([1-9])/);
  return m ? Number(m[1]) : null;
}

/** Garante todos os planos aplicáveis a partir de uma única decisão canônica. */
export async function bootstrapLearningPlans(childId: string): Promise<BootstrapResult> {
  const { data: child, error } = await supabase
    .from("children")
    .select("idade,serie,user_id")
    .eq("id", childId)
    .maybeSingle();
  if (error || !child) throw error ?? new Error("Criança não encontrada.");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || child.user_id !== user.id) throw new Error("Acesso não autorizado ao perfil da criança.");

  const idade = Number(child.idade);
  const serie = String(child.serie ?? "");
  const grade = gradeNumber(serie);
  const result: BootstrapResult = { literacy: false, school: false, support: false };

  // Alfabetização: idade inicial ou recuperação quando o Step 6 indicar necessidade.
  const alfa = await import("@/modules/primeiros-anos/persist");
  const planoAlfa = await alfa.garantirPlanoSeNecessario(childId, idade);
  result.literacy = !!planoAlfa;

  // Escolar: qualquer criança matriculada do 1º ao 9º ano recebe o plano escolar.
  if (grade && grade >= 1 && grade <= 9) {
    const escolar = await import("@/modules/curriculo-anual/persist");
    let curriculo = await escolar.carregarCurriculo(childId);
    if (!curriculo) {
      await escolar.gerarESalvar({ childId, serie });
      curriculo = await escolar.carregarCurriculo(childId);
    }
    result.school = !!curriculo;
  }

  // Apoio: a regra canônica atual permite Neuro-Treino até 7 anos.
  if (Number.isFinite(idade) && idade < 8) {
    const apoio = await import("@/modules/neuro-plano/persist");
    let plano = await apoio.carregarPlanoNeuro(childId);
    if (!plano) {
      await apoio.gerarESalvarNeuro(childId);
      plano = await apoio.carregarPlanoNeuro(childId);
    }
    result.support = !!plano;
  }

  return result;
}
