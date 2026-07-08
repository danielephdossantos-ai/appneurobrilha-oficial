import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * MissaoFamiliaFoto — botão pra tirar foto (ou escolher da galeria)
 * do registro da atividade em família, e uma galeria com as fotos
 * anteriores desse aluno pra essa aula.
 *
 * Storage:  bucket privado "missao-familia-fotos"
 * Path:     {user_id}/{curso_slug}/{aula_slug}/{uuid}.{ext}
 * Registro: tabela public.missao_familia_registros (RLS por auth.uid)
 */

type Registro = {
  id: string;
  foto_path: string;
  criado_em: string;
  legenda: string | null;
};

type Props = {
  cursoSlug: string;
  aulaSlug: string;
};

const BUCKET = "missao-familia-fotos";

export function MissaoFamiliaFoto({ cursoSlug, aulaSlug }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [carregando, setCarregando] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  // Descobre o usuário e carrega registros existentes
  useEffect(() => {
    let vivo = true;
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!vivo) return;
      const uid = userData?.user?.id ?? null;
      setUserId(uid);
      if (!uid) {
        setCarregando(false);
        return;
      }
      await carregarRegistros(uid);
      if (vivo) setCarregando(false);
    })();
    return () => {
      vivo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursoSlug, aulaSlug]);

  async function carregarRegistros(uid: string) {
    const { data, error } = await supabase
      .from("missao_familia_registros")
      .select("id, foto_path, criado_em, legenda")
      .eq("user_id", uid)
      .eq("curso_slug", cursoSlug)
      .eq("aula_slug", aulaSlug)
      .order("criado_em", { ascending: false });

    if (error) {
      setErro("Não deu pra carregar suas fotos: " + error.message);
      return;
    }
    setRegistros(data ?? []);
    // Gera signed URLs em paralelo pra thumbnails
    const paths = (data ?? []).map((r) => r.foto_path);
    if (paths.length > 0) {
      const { data: signed } = await supabase.storage
        .from(BUCKET)
        .createSignedUrls(paths, 60 * 60); // 1h
      const mapa: Record<string, string> = {};
      signed?.forEach((s, i) => {
        if (s.signedUrl) mapa[paths[i]] = s.signedUrl;
      });
      setUrls(mapa);
    } else {
      setUrls({});
    }
  }

  async function aoEscolherArquivo(e: React.ChangeEvent<HTMLInputElement>) {
    setErro(null);
    const arquivo = e.target.files?.[0];
    e.target.value = ""; // reseta pra permitir reenviar a mesma foto depois
    if (!arquivo) return;
    if (!userId) {
      setErro("Entre na sua conta primeiro pra guardar a foto.");
      return;
    }
    // Validação mínima
    if (!arquivo.type.startsWith("image/")) {
      setErro("Só aceita fotos (imagens).");
      return;
    }
    const MAX = 10 * 1024 * 1024; // 10 MB
    if (arquivo.size > MAX) {
      setErro("Foto grande demais (máx. 10 MB). Tente tirar uma nova.");
      return;
    }

    setEnviando(true);
    try {
      const ext = (arquivo.name.split(".").pop() || "jpg")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .slice(0, 5) || "jpg";
      const id =
        (typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2)) + "";
      const path = `${userId}/${cursoSlug}/${aulaSlug}/${id}.${ext}`;

      const { error: upErr } = await supabase.storage
        .from(BUCKET)
        .upload(path, arquivo, {
          contentType: arquivo.type || "image/jpeg",
          upsert: false,
        });
      if (upErr) throw upErr;

      const { error: dbErr } = await supabase
        .from("missao_familia_registros")
        .insert({
          user_id: userId,
          curso_slug: cursoSlug,
          aula_slug: aulaSlug,
          foto_path: path,
        });
      if (dbErr) {
        // Rollback: tenta apagar o arquivo pra não deixar órfão
        await supabase.storage.from(BUCKET).remove([path]);
        throw dbErr;
      }
      await carregarRegistros(userId);
    } catch (err: any) {
      setErro("Deu ruim no envio: " + (err?.message ?? String(err)));
    } finally {
      setEnviando(false);
    }
  }

  async function apagar(registro: Registro) {
    if (!userId) return;
    if (!confirm("Apagar essa foto do registro?")) return;
    setErro(null);
    try {
      const { error: sErr } = await supabase.storage
        .from(BUCKET)
        .remove([registro.foto_path]);
      if (sErr) throw sErr;
      const { error: dErr } = await supabase
        .from("missao_familia_registros")
        .delete()
        .eq("id", registro.id);
      if (dErr) throw dErr;
      await carregarRegistros(userId);
    } catch (err: any) {
      setErro("Não deu pra apagar: " + (err?.message ?? String(err)));
    }
  }

  return (
    <div className="mt-3 rounded-2xl bg-white/8 border border-white/15 p-3 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-amber-200 font-bold text-sm">📸 Meus registros</span>
        {registros.length > 0 && (
          <span className="text-xs text-white/50">
            {registros.length}{" "}
            {registros.length === 1 ? "foto salva" : "fotos salvas"}
          </span>
        )}
      </div>

      {/* Botão principal */}
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          type="button"
          disabled={enviando || !userId}
          onClick={() => inputRef.current?.click()}
          className="flex-1 h-14 rounded-2xl bg-amber-400 text-[#0d1f55] font-black text-base sm:text-lg shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed grid place-items-center gap-1"
        >
          {enviando ? "⏳ Enviando…" : "📸 Tirar foto / escolher da galeria"}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={aoEscolherArquivo}
          className="hidden"
        />
      </div>

      {!userId && (
        <div className="text-xs text-amber-200/90 bg-amber-500/10 border border-amber-300/30 rounded-xl p-2">
          Entre na sua conta pra guardar as fotos da Missão em Família.
        </div>
      )}

      {erro && (
        <div className="text-xs text-rose-100 bg-rose-500/20 border border-rose-300/40 rounded-xl p-2">
          {erro}
        </div>
      )}

      {/* Galeria */}
      {carregando ? (
        <div className="text-xs text-white/60 italic">Carregando fotos…</div>
      ) : registros.length === 0 ? (
        <div className="text-xs text-white/60 italic">
          Nenhuma foto ainda. Envie a primeira quando terminar a missão em casa!
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {registros.map((r) => {
            const url = urls[r.foto_path];
            const data = new Date(r.criado_em).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
            });
            return (
              <div
                key={r.id}
                className="relative rounded-xl overflow-hidden bg-white/10 border border-white/15 aspect-square group"
              >
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src={url}
                      alt={`Registro de ${data}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <div className="w-full h-full grid place-items-center text-white/40 text-xs">
                    …
                  </div>
                )}
                <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] px-1.5 py-1 flex items-center justify-between">
                  <span>📅 {data}</span>
                  <button
                    type="button"
                    onClick={() => apagar(r)}
                    aria-label="Apagar foto"
                    className="text-rose-200 hover:text-rose-100 font-bold"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
