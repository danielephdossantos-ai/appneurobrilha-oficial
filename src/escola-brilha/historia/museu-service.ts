import { supabase } from "@/integrations/supabase/client";

export interface ItemMuseu {
  id?: string;
  curso: string;
  unidade: number;
  aula: number;
  tipo_item: "engrenagem" | "card_museu" | "sala_desbloqueada";
  nome_sala: string | null;
  nome_item: string;
  imagem_url: string | null;
  xp: number;
  moedas: number;
  meta?: Record<string, unknown>;
  conquistado_em?: string;
}

const LS_KEY = "escola-brilha:historia-museu";

function readLocal(): ItemMuseu[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function writeLocal(items: ItemMuseu[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_KEY, JSON.stringify(items));
}

/** Busca todos os itens do museu do usuário (Supabase se logado; localStorage senão). */
export async function listItensMuseu(curso?: string): Promise<ItemMuseu[]> {
  const { data: auth } = await supabase.auth.getUser();
  if (auth.user) {
    let q = supabase.from("historia_museu_digital").select("*").order("conquistado_em", { ascending: true });
    if (curso) q = q.eq("curso", curso);
    const { data, error } = await q;
    if (!error && data) return data as ItemMuseu[];
  }
  const local = readLocal();
  return curso ? local.filter((i) => i.curso === curso) : local;
}

/** Guarda (idempotente por curso+unidade+aula+tipo). */
export async function salvarItemMuseu(item: ItemMuseu): Promise<void> {
  const { data: auth } = await supabase.auth.getUser();
  if (auth.user) {
    await supabase.from("historia_museu_digital").upsert(
      {
        user_id: auth.user.id,
        curso: item.curso,
        unidade: item.unidade,
        aula: item.aula,
        tipo_item: item.tipo_item,
        nome_sala: item.nome_sala,
        nome_item: item.nome_item,
        imagem_url: item.imagem_url,
        xp: item.xp,
        moedas: item.moedas,
        meta: (item.meta ?? {}) as never,
      },
      { onConflict: "user_id,curso,unidade,aula,tipo_item" },
    );
    return;
  }
  const list = readLocal();
  const key = (i: ItemMuseu) => `${i.curso}-${i.unidade}-${i.aula}-${i.tipo_item}`;
  const filtered = list.filter((i) => key(i) !== key(item));
  filtered.push({ ...item, conquistado_em: new Date().toISOString() });
  writeLocal(filtered);
}

/** Quantas engrenagens já foram conquistadas neste curso (0..7). */
export async function contarEngrenagens(curso: string): Promise<number> {
  const itens = await listItensMuseu(curso);
  return itens.filter((i) => i.tipo_item === "engrenagem").length;
}
