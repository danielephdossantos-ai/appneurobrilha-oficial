import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * MissaoFamiliaFoto — registro da Missão em Família com FOTO ou ÁUDIO.
 * A criança pode tirar/enviar uma foto (📸) OU gravar um áudio (🎙️)
 * direto pelo microfone do celular/pc.
 *
 * Storage:  bucket privado "missao-familia-fotos"
 * Path:     {user_id}/{curso_slug}/{aula_slug}/{uuid}.{ext}
 * Registro: tabela public.missao_familia_registros (RLS por auth.uid)
 *           coluna `tipo` = 'foto' | 'audio'
 */

type Registro = {
  id: string;
  foto_path: string;
  criado_em: string;
  legenda: string | null;
  tipo: "foto" | "audio";
};

type Props = {
  cursoSlug: string;
  aulaSlug: string;
};

const BUCKET = "missao-familia-fotos";

export function MissaoFamiliaFoto({ cursoSlug, aulaSlug }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<number | null>(null);

  const [userId, setUserId] = useState<string | null>(null);
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [carregando, setCarregando] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [gravando, setGravando] = useState(false);
  const [segundos, setSegundos] = useState(0);

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
      pararStream();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursoSlug, aulaSlug]);

  function pararStream() {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }

  async function carregarRegistros(uid: string) {
    const { data, error } = await supabase
      .from("missao_familia_registros")
      .select("id, foto_path, criado_em, legenda, tipo")
      .eq("user_id", uid)
      .eq("curso_slug", cursoSlug)
      .eq("aula_slug", aulaSlug)
      .order("criado_em", { ascending: false });

    if (error) {
      setErro("Não deu pra carregar seus registros: " + error.message);
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
      setUrls(mapa);
    } else {
      setUrls({});
    }
  }

  async function enviarArquivo(
    arquivo: Blob,
    ext: string,
    contentType: string,
    tipo: "foto" | "audio",
  ) {
    if (!userId) {
      setErro("Entre na sua conta primeiro pra guardar o registro.");
      return;
    }
    setEnviando(true);
    setErro(null);
    try {
      const id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2);
      const path = `${userId}/${cursoSlug}/${aulaSlug}/${id}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from(BUCKET)
        .upload(path, arquivo, { contentType, upsert: false });
      if (upErr) throw upErr;

      const { error: dbErr } = await supabase
        .from("missao_familia_registros")
        .insert({
          user_id: userId,
          curso_slug: cursoSlug,
          aula_slug: aulaSlug,
          foto_path: path,
          tipo,
        });
      if (dbErr) {
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

  async function aoEscolherFoto(e: React.ChangeEvent<HTMLInputElement>) {
    setErro(null);
    const arquivo = e.target.files?.[0];
    e.target.value = "";
    if (!arquivo) return;
    if (!arquivo.type.startsWith("image/")) {
      setErro("Só aceita fotos aqui. Pro áudio, use o botão 🎙️.");
      return;
    }
    const MAX = 10 * 1024 * 1024;
    if (arquivo.size > MAX) {
      setErro("Foto grande demais (máx. 10 MB).");
      return;
    }
    const ext =
      (arquivo.name.split(".").pop() || "jpg")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .slice(0, 5) || "jpg";
    await enviarArquivo(arquivo, ext, arquivo.type || "image/jpeg", "foto");
  }

  async function iniciarGravacao() {
    setErro(null);
    if (!userId) {
      setErro("Entre na sua conta primeiro pra guardar o áudio.");
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setErro("Seu navegador não permite gravar áudio. Use Chrome/Safari atualizado.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      // Escolhe um mime type suportado
      const candidatos = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus",
      ];
      const mime =
        candidatos.find(
          (m) =>
            typeof MediaRecorder.isTypeSupported === "function" &&
            MediaRecorder.isTypeSupported(m),
        ) || "";
      const rec = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (ev) => {
        if (ev.data.size > 0) chunksRef.current.push(ev.data);
      };
      rec.onstop = async () => {
        const tipoMime = rec.mimeType || "audio/webm";
        const ext = tipoMime.includes("mp4")
          ? "m4a"
          : tipoMime.includes("ogg")
            ? "ogg"
            : "webm";
        const blob = new Blob(chunksRef.current, { type: tipoMime });
        pararStream();
        setGravando(false);
        setSegundos(0);
        if (blob.size > 0) {
          await enviarArquivo(blob, ext, tipoMime, "audio");
        }
      };
      rec.start();
      mediaRecorderRef.current = rec;
      setGravando(true);
      setSegundos(0);
      timerRef.current = window.setInterval(() => {
        setSegundos((s) => {
          if (s + 1 >= 120) {
            // auto-stop em 2 min
            pararGravacao();
          }
          return s + 1;
        });
      }, 1000);
    } catch (err: any) {
      pararStream();
      setErro(
        "Não consegui acessar o microfone. Libere a permissão no navegador. (" +
          (err?.message ?? String(err)) +
          ")",
      );
    }
  }

  function pararGravacao() {
    const rec = mediaRecorderRef.current;
    if (rec && rec.state !== "inactive") rec.stop();
  }

  async function apagar(registro: Registro) {
    if (!userId) return;
    if (!confirm("Apagar esse registro?")) return;
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

  function fmtMMSS(total: number) {
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  return (
    <div className="mt-3 rounded-2xl bg-white/8 border border-white/15 p-3 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-amber-200 font-bold text-sm">📓 Meu diário</span>
        {registros.length > 0 && (
          <span className="text-xs text-white/50">
            {registros.length}{" "}
            {registros.length === 1 ? "registro salvo" : "registros salvos"}
          </span>
        )}
      </div>

      {/* Botões de captura */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <button
          type="button"
          disabled={enviando || gravando || !userId}
          onClick={() => inputRef.current?.click()}
          className="h-14 rounded-2xl bg-amber-400 text-[#0d1f55] font-black text-sm sm:text-base shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed grid place-items-center"
        >
          {enviando ? "⏳ Enviando…" : "📸 Tirar foto / galeria"}
        </button>

        {!gravando ? (
          <button
            type="button"
            disabled={enviando || !userId}
            onClick={iniciarGravacao}
            className="h-14 rounded-2xl bg-rose-400 text-[#0d1f55] font-black text-sm sm:text-base shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed grid place-items-center"
          >
            🎙️ Gravar áudio
          </button>
        ) : (
          <button
            type="button"
            onClick={pararGravacao}
            className="h-14 rounded-2xl bg-rose-600 text-white font-black text-sm sm:text-base shadow-lg active:scale-95 grid place-items-center animate-pulse"
          >
            ⏹️ Parar ({fmtMMSS(segundos)})
          </button>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={aoEscolherFoto}
          className="hidden"
        />
      </div>

      {!userId && (
        <div className="text-xs text-amber-200/90 bg-amber-500/10 border border-amber-300/30 rounded-xl p-2">
          Entre na sua conta pra guardar seus registros da Missão em Família.
        </div>
      )}

      {erro && (
        <div className="text-xs text-rose-100 bg-rose-500/20 border border-rose-300/40 rounded-xl p-2">
          {erro}
        </div>
      )}

      {/* Galeria */}
      {carregando ? (
        <div className="text-xs text-white/60 italic">Carregando registros…</div>
      ) : registros.length === 0 ? (
        <div className="text-xs text-white/60 italic">
          Nada por aqui ainda. Envie a primeira foto ou grave o primeiro áudio!
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {registros.map((r) => {
            const url = urls[r.foto_path];
            const data = new Date(r.criado_em).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
            });
            const ehAudio = r.tipo === "audio";
            return (
              <div
                key={r.id}
                className="relative rounded-xl overflow-hidden bg-white/10 border border-white/15 group"
              >
                {ehAudio ? (
                  <div className="w-full h-full min-h-[110px] p-2 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-rose-500/30 to-purple-500/30">
                    <div className="text-3xl">🎙️</div>
                    {url ? (
                      <audio src={url} controls className="w-full" preload="metadata" />
                    ) : (
                      <div className="text-white/50 text-xs">…</div>
                    )}
                  </div>
                ) : url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full aspect-square"
                  >
                    <img
                      src={url}
                      alt={`Registro de ${data}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <div className="w-full aspect-square grid place-items-center text-white/40 text-xs">
                    …
                  </div>
                )}
                <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] px-1.5 py-1 flex items-center justify-between">
                  <span>
                    {ehAudio ? "🎙️" : "📸"} {data}
                  </span>
                  <button
                    type="button"
                    onClick={() => apagar(r)}
                    aria-label="Apagar"
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
