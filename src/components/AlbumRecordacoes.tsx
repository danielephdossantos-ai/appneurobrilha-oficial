import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Álbum de Recordações — mostra TODAS as fotos que a criança tirou nas
 * Missões em Família de um curso inteiro. Só leitura, agrupado por aula.
 *
 * Fonte: bucket "missao-familia-fotos" + tabela "missao_familia_registros"
 * (mesma origem do bloco MissaoFamiliaFoto).
 */

const BUCKET = "missao-familia-fotos";

type Registro = {
  id: string;
  foto_path: string;
  aula_slug: string;
  criado_em: string;
  legenda: string | null;
  tipo: "foto" | "audio";
};

type Props = {
  cursoSlug: string;
  /** mapa opcional aula_slug → título humano da aula, para as legendas */
  tituloPorAula?: Record<string, string>;
};

export function AlbumRecordacoes({ cursoSlug, tituloPorAula }: Props) {
  const [carregando, setCarregando] = useState(true);
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [erro, setErro] = useState<string | null>(null);
  const [ampliada, setAmpliada] = useState<string | null>(null);

  useEffect(() => {
    let vivo = true;
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      const uid = userData?.user?.id ?? null;
      if (!uid) {
        if (vivo) {
          setCarregando(false);
        }
        return;
      }
      const { data, error } = await supabase
        .from("missao_familia_registros")
        .select("id, foto_path, aula_slug, criado_em, legenda, tipo")
        .eq("user_id", uid)
        .eq("curso_slug", cursoSlug)
        .order("criado_em", { ascending: false });

      if (!vivo) return;
      if (error) {
        setErro("Não deu pra carregar suas recordações: " + error.message);
        setCarregando(false);
        return;
      }
      const lista = (data ?? []) as Registro[];
      setRegistros(lista);

      const paths = lista.map((r) => r.foto_path);
      if (paths.length > 0) {
        const { data: signed } = await supabase.storage
          .from(BUCKET)
          .createSignedUrls(paths, 60 * 60);
        const mapa: Record<string, string> = {};
        signed?.forEach((s, i) => {
          if (s.signedUrl) mapa[paths[i]] = s.signedUrl;
        });
        if (vivo) setUrls(mapa);
      }
      if (vivo) setCarregando(false);
    })();
    return () => {
      vivo = false;
    };
  }, [cursoSlug]);

  // Agrupa por aula
  const porAula = registros.reduce<Record<string, Registro[]>>((acc, r) => {
    (acc[r.aula_slug] ||= []).push(r);
    return acc;
  }, {});

  return (
    <section className="max-w-5xl mx-auto mt-10 bg-white/5 border border-white/15 rounded-3xl p-5 md:p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-2xl">📸</span>
        <h2 className="text-xl md:text-2xl font-black">Álbum de Recordações</h2>
      </div>
      <p className="text-sm text-white/70 mb-4">
        As fotos que você tirou nas Missões em Família durante o curso.
      </p>

      {carregando && (
        <div className="text-sm text-white/60 italic">Abrindo o álbum…</div>
      )}

      {!carregando && erro && (
        <div className="text-xs text-rose-100 bg-rose-500/20 border border-rose-300/40 rounded-xl p-2">
          {erro}
        </div>
      )}

      {!carregando && !erro && registros.length === 0 && (
        <div className="text-sm text-white/70 bg-white/5 border border-dashed border-white/20 rounded-2xl p-6 text-center">
          Ainda não tem fotos por aqui. Toda vez que você fizer uma{" "}
          <b>Missão em Família</b> e tirar uma foto, ela aparece aqui como
          recordação. 💛
        </div>
      )}

      {!carregando && !erro && registros.length > 0 && (
        <div className="space-y-6">
          {Object.entries(porAula).map(([aulaSlug, fotos]) => (
            <div key={aulaSlug}>
              <div className="text-xs uppercase tracking-widest text-amber-300 font-bold mb-2">
                {tituloPorAula?.[aulaSlug] ?? aulaSlug} · {fotos.length}{" "}
                {fotos.length === 1 ? "foto" : "fotos"}
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {fotos.map((r) => {
                  const url = urls[r.foto_path];
                  const data = new Date(r.criado_em).toLocaleDateString(
                    "pt-BR",
                    { day: "2-digit", month: "2-digit" },
                  );
                  const ehAudio = r.tipo === "audio";
                  if (ehAudio) {
                    return (
                      <div
                        key={r.id}
                        className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-rose-500/30 to-purple-500/30 border border-white/15 p-2 flex flex-col items-center justify-center gap-1"
                      >
                        <div className="text-3xl">🎙️</div>
                        {url ? (
                          <audio
                            src={url}
                            controls
                            preload="metadata"
                            className="w-full"
                            onClick={(e) => e.stopPropagation()}
                          />
                        ) : (
                          <div className="text-white/40 text-xs">…</div>
                        )}
                        <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] px-1.5 py-0.5">
                          🎙️ {data}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => url && setAmpliada(url)}
                      className="relative aspect-square rounded-xl overflow-hidden bg-white/10 border border-white/15 group"
                    >
                      {url ? (
                        <img
                          src={url}
                          alt={`Recordação de ${data}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full grid place-items-center text-white/40 text-xs">
                          …
                        </div>
                      )}
                      <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] px-1.5 py-0.5">
                        📅 {data}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {ampliada && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 grid place-items-center p-4"
          onClick={() => setAmpliada(null)}
        >
          <img
            src={ampliada}
            alt="Recordação"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
