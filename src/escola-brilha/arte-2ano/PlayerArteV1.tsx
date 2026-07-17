import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { speakChunked, stopSpeech } from "@/lib/native-tts";
import type { AulaArte, DecoracaoAtelie } from "./types";
import { DrawingCanvas } from "./DrawingCanvas";
import { AlbumRecordacoes } from "@/components/AlbumRecordacoes";

/**
 * PlayerArteV1 — Ateliê Brilha (Contrato SPEB 1.0 v2)
 * Experiência imersiva: ambiente vivo, narrativa curta, jogos deixam de ser
 * o centro. O ritual do ateliê é a espinha dorsal da aula.
 */

const BUCKET = "missao-familia-fotos";
const CURSO_SLUG = "arte-2ano";
const LS_DECORACOES = "atelie-brilha:decoracoes";

type Props = { aula: AulaArte; onSair: () => void };
type Salvo = { id: string; foto_path: string; legenda: string | null; criado_em?: string };

/* ------------------------------------------------------------------ */
/* MASCOTE BRILHA — SVG kawaii, sempre a mesma personagem              */
/* ------------------------------------------------------------------ */
function Brilha({ tamanho = 96, pose = "feliz" }: { tamanho?: number; pose?: "feliz" | "aponta" | "aplaude" | "boba" }) {
  const olhoY = pose === "boba" ? 44 : 42;
  const boca = pose === "aplaude" ? "M 40 62 Q 50 74 60 62" : "M 42 60 Q 50 70 58 60";
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 100 100" className="drop-shadow-md">
      {/* boina de pintora */}
      <ellipse cx="50" cy="18" rx="26" ry="8" fill="#0d9488" />
      <ellipse cx="50" cy="15" rx="20" ry="6" fill="#14b8a6" />
      <circle cx="66" cy="12" r="3" fill="#fbbf24" />
      {/* rosto */}
      <circle cx="50" cy="52" r="30" fill="#fef3c7" stroke="#0d9488" strokeWidth="2" />
      {/* bochechas */}
      <circle cx="34" cy="58" r="4" fill="#fca5a5" opacity="0.7" />
      <circle cx="66" cy="58" r="4" fill="#fca5a5" opacity="0.7" />
      {/* olhos brilhantes */}
      <circle cx="40" cy={olhoY} r="4" fill="#1e293b" />
      <circle cx="60" cy={olhoY} r="4" fill="#1e293b" />
      <circle cx="41.5" cy={olhoY - 1.5} r="1.4" fill="white" />
      <circle cx="61.5" cy={olhoY - 1.5} r="1.4" fill="white" />
      {/* sorriso */}
      <path d={boca} stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* pincel na mão (se aponta) */}
      {pose === "aponta" && (
        <g transform="translate(78 46) rotate(30)">
          <rect x="0" y="0" width="16" height="3" fill="#8b5a2b" />
          <rect x="14" y="-1" width="5" height="5" fill="#f87171" />
        </g>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* CENA DO ATELIÊ — SVG ilustrado, aceita obra no cavalete + decorações */
/* ------------------------------------------------------------------ */
function CenaAtelie({
  obraUrl,
  decoracoes = [],
  altura = 300,
}: {
  obraUrl?: string;
  decoracoes?: DecoracaoAtelie[];
  altura?: number;
}) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden border-4 border-primary/30 shadow-kid" style={{ height: altura }}>
      <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {/* parede */}
        <rect width="400" height="200" fill="#fef3c7" />
        <rect y="200" width="400" height="100" fill="#a97b52" />
        {/* piso listras */}
        <path d="M0 200 L400 200 L360 300 L40 300 Z" fill="#c9945f" />
        {/* janela */}
        <rect x="20" y="30" width="90" height="90" fill="#7dd3fc" stroke="#0d9488" strokeWidth="3" rx="6" />
        <line x1="65" y1="30" x2="65" y2="120" stroke="#0d9488" strokeWidth="2" />
        <line x1="20" y1="75" x2="110" y2="75" stroke="#0d9488" strokeWidth="2" />
        {/* passarinhos */}
        <text x="35" y="55" fontSize="12">🐦</text>
        <text x="80" y="90" fontSize="10">🐦</text>
        {/* quadros na parede */}
        <rect x="140" y="30" width="45" height="35" fill="#fff" stroke="#78350f" strokeWidth="3" />
        <text x="152" y="53" fontSize="16">🌻</text>
        <rect x="200" y="45" width="40" height="40" fill="#fff" stroke="#78350f" strokeWidth="3" />
        <text x="207" y="72" fontSize="18">🌸</text>
        <rect x="255" y="25" width="50" height="40" fill="#fff" stroke="#78350f" strokeWidth="3" />
        <text x="266" y="52" fontSize="20">🎨</text>
        {/* cavalete central */}
        <line x1="320" y1="270" x2="335" y2="130" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
        <line x1="380" y1="270" x2="360" y2="130" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
        <line x1="325" y1="200" x2="375" y2="200" stroke="#78350f" strokeWidth="3" />
        <rect x="325" y="130" width="55" height="70" fill="#fffdf7" stroke="#78350f" strokeWidth="4" />
        {obraUrl ? (
          <image href={obraUrl} x="328" y="133" width="49" height="64" preserveAspectRatio="xMidYMid slice" />
        ) : (
          <text x="337" y="170" fontSize="10" fill="#a97b52" fontWeight="bold">vazio</text>
        )}
        {/* mesa com tintas */}
        <rect x="115" y="205" width="130" height="14" fill="#8b5a2b" />
        <rect x="120" y="219" width="8" height="45" fill="#8b5a2b" />
        <rect x="230" y="219" width="8" height="45" fill="#8b5a2b" />
        {/* tintas */}
        <circle cx="140" cy="200" r="8" fill="#f87171" />
        <circle cx="160" cy="200" r="8" fill="#fbbf24" />
        <circle cx="180" cy="200" r="8" fill="#60a5fa" />
        <circle cx="200" cy="200" r="8" fill="#86efac" />
        <circle cx="220" cy="200" r="8" fill="#c4b5fd" />
        {/* pincéis num pote */}
        <rect x="120" y="180" width="14" height="20" fill="#0d9488" rx="2" />
        <line x1="123" y1="180" x2="121" y2="165" stroke="#78350f" strokeWidth="2" />
        <line x1="127" y1="180" x2="128" y2="160" stroke="#78350f" strokeWidth="2" />
        <line x1="131" y1="180" x2="134" y2="163" stroke="#78350f" strokeWidth="2" />
        {/* gato dormindo */}
        <ellipse cx="290" cy="250" rx="26" ry="10" fill="#f97316" />
        <circle cx="272" cy="245" r="9" fill="#f97316" />
        <path d="M 265 240 L 268 234 L 271 240 Z" fill="#f97316" />
        <path d="M 275 240 L 278 234 L 281 240 Z" fill="#f97316" />
        <path d="M 269 245 Q 271 247 273 245" stroke="#1e293b" strokeWidth="0.8" fill="none" />
        <text x="255" y="235" fontSize="10">💤</text>
        {/* planta base do ateliê */}
        <ellipse cx="60" cy="270" rx="18" ry="6" fill="#78350f" />
        <path d="M 50 268 Q 60 235 70 268 Z" fill="#22c55e" />
        <path d="M 45 270 Q 50 245 62 268" stroke="#16a34a" strokeWidth="3" fill="none" />
        {/* decorações desbloqueadas */}
        {decoracoes.map((d) => (
          <text
            key={d.id}
            x={4 * d.posicao.x}
            y={3 * d.posicao.y + 20}
            fontSize="28"
          >
            {d.emoji}
          </text>
        ))}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* BALÃO DE FALA da Brilha                                              */
/* ------------------------------------------------------------------ */
function BalaoBrilha({ children, comAudio }: { children: React.ReactNode; comAudio?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0">
        <Brilha tamanho={72} />
      </div>
      <div className="flex-1 relative bg-card border-2 border-primary/40 rounded-2xl rounded-tl-none p-3 shadow-kid">
        <div className="absolute -left-2 top-3 w-3 h-3 bg-card border-l-2 border-b-2 border-primary/40 rotate-45" />
        <div className="text-sm sm:text-base text-foreground leading-relaxed font-sans">{children}</div>
        {comAudio && (
          <button
            type="button"
            onClick={() => speakChunked(comAudio)}
            className="mt-2 inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold hover:bg-primary/20"
          >
            🔊 Ouvir
          </button>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION wrapper                                                      */
/* ------------------------------------------------------------------ */
function Etapa({
  numero,
  titulo,
  icone,
  children,
}: {
  numero: number;
  titulo: string;
  icone: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border-2 border-primary/25 bg-card p-5 sm:p-6 shadow-[0_4px_0_0_hsl(var(--foreground)/0.05)] space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-primary text-primary-foreground grid place-items-center text-xl font-black shrink-0 shadow-kid">
          {icone}
        </div>
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-widest font-black text-primary">
            Etapa {String(numero).padStart(2, "0")}
          </div>
          <h2 className="text-lg sm:text-xl font-black font-display leading-tight">{titulo}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ABERTURA — overlay imersivo                                          */
/* ------------------------------------------------------------------ */
function Abertura({ aula, onEntrar }: { aula: AulaArte; onEntrar: () => void }) {
  const [passo, setPasso] = useState(0);
  const falas = aula.abertura.falasBrilha;

  useEffect(() => {
    if (passo >= falas.length) return;
    speakChunked(falas[passo]);
    const t = window.setTimeout(() => {
      setPasso((p) => Math.min(p + 1, falas.length));
    }, Math.max(2200, falas[passo].length * 55));
    return () => window.clearTimeout(t);
  }, [passo, falas]);

  const prontoParaComecar = passo >= falas.length - 1;

  return (
    <div className="fixed inset-0 z-40 bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 flex flex-col overflow-y-auto">
      <div className="max-w-2xl w-full mx-auto px-4 py-6 space-y-5">
        <div className="text-center">
          <div className="text-[10px] uppercase tracking-widest text-primary font-black">
            🎨 Ateliê Brilha · {aula.unidade.titulo}
          </div>
          <div className="text-xs text-foreground/60">{aula.titulo}</div>
        </div>
        <CenaAtelie altura={280} />
        <div className="space-y-3">
          {falas.slice(0, passo + 1).map((f, i) => (
            <div
              key={i}
              className="animate-in fade-in slide-in-from-bottom-2 duration-500"
            >
              <BalaoBrilha comAudio={f}>{f}</BalaoBrilha>
            </div>
          ))}
        </div>
        {prontoParaComecar && (
          <button
            onClick={() => {
              stopSpeech();
              onEntrar();
            }}
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-black text-lg shadow-kid hover:opacity-90 animate-in fade-in duration-700"
          >
            {aula.abertura.botaoComecar}
          </button>
        )}
        <button
          onClick={() => {
            stopSpeech();
            onEntrar();
          }}
          className="w-full text-xs text-foreground/50 hover:text-foreground/80 py-1"
        >
          pular abertura →
        </button>
      </div>
    </div>
  );
}

/* ================================================================== */
export function PlayerArteV1({ aula, onSair }: Props) {
  const [userId, setUserId] = useState<string | null>(null);
  const [salvos, setSalvos] = useState<Salvo[]>([]);
  const [urlsSalvas, setUrlsSalvas] = useState<Record<string, string>>({});
  const [erro, setErro] = useState<string | null>(null);
  const [aberturaAberta, setAberturaAberta] = useState(true);

  // etapa 1 espelho
  const [espelhoIdx, setEspelhoIdx] = useState<number[]>([]);
  // etapa 2 galeria interativa
  const [obraTocada, setObraTocada] = useState<string | null>(null);
  // etapa 3 aprender
  const [passoAprender, setPassoAprender] = useState(0);
  // etapa 4 obra livre — comentário rotativo
  const [comentarioIdx, setComentarioIdx] = useState(0);
  // etapa 5 cores
  const [emocaoSelecionada, setEmocaoSelecionada] = useState<string | null>(null);
  // etapa 6 galeria animação
  const [obraSubindo, setObraSubindo] = useState(false);
  // etapa 8 decoração desbloqueada
  const [decoracoes, setDecoracoes] = useState<DecoracaoAtelie[]>([]);
  const [novaDecoracaoDesbloqueada, setNovaDecoracaoDesbloqueada] = useState(false);

  // Load user & saved works
  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      const uid = data?.user?.id ?? null;
      setUserId(uid);
      if (uid) await recarregar(uid);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load decorações persistidas
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_DECORACOES);
      if (raw) setDecoracoes(JSON.parse(raw));
    } catch {}
  }, []);

  // Rotaciona comentários de Brilha na obra livre
  useEffect(() => {
    const t = window.setInterval(() => {
      setComentarioIdx((i) => (i + 1) % aula.obraLivre.comentariosBrilha.length);
    }, 6000);
    return () => window.clearInterval(t);
  }, [aula.obraLivre.comentariosBrilha.length]);

  async function recarregar(uid: string) {
    const { data } = await supabase
      .from("missao_familia_registros")
      .select("id, foto_path, legenda, criado_em")
      .eq("user_id", uid)
      .eq("curso_slug", CURSO_SLUG)
      .eq("aula_slug", aula.slug)
      .order("criado_em", { ascending: false });
    const lista = (data ?? []) as Salvo[];
    setSalvos(lista);
    const paths = lista.map((s) => s.foto_path);
    if (paths.length) {
      const { data: signed } = await supabase.storage
        .from(BUCKET)
        .createSignedUrls(paths, 60 * 60);
      const mapa: Record<string, string> = {};
      signed?.forEach((s, i) => {
        if (s.signedUrl) mapa[paths[i]] = s.signedUrl;
      });
      setUrlsSalvas(mapa);
    }
  }

  async function salvarObra(blob: Blob, _dataUrl: string, legenda: string) {
    setErro(null);
    if (!userId) {
      setErro("Entre na sua conta para guardar a obra na Galeria Brilha.");
      return;
    }
    try {
      const id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2);
      const path = `${userId}/${CURSO_SLUG}/${aula.slug}/${id}.png`;
      const { error: upErr } = await supabase.storage
        .from(BUCKET)
        .upload(path, blob, { contentType: "image/png", upsert: false });
      if (upErr) throw upErr;
      const { error: dbErr } = await supabase
        .from("missao_familia_registros")
        .insert({
          user_id: userId,
          curso_slug: CURSO_SLUG,
          aula_slug: aula.slug,
          foto_path: path,
          legenda,
        });
      if (dbErr) {
        await supabase.storage.from(BUCKET).remove([path]);
        throw dbErr;
      }
      await recarregar(userId);
      // animação: quadro sobe pra parede
      setObraSubindo(true);
      window.setTimeout(() => setObraSubindo(false), 3200);
      // desbloqueia decoração
      desbloquearDecoracao();
    } catch (err: any) {
      setErro("Não deu pra salvar: " + (err?.message ?? String(err)));
    }
  }

  function desbloquearDecoracao() {
    const nova = aula.atelieCresceu.decoracao;
    setDecoracoes((atual) => {
      if (atual.some((d) => d.id === nova.id)) return atual;
      const proximo = [...atual, nova];
      try { localStorage.setItem(LS_DECORACOES, JSON.stringify(proximo)); } catch {}
      return proximo;
    });
    setNovaDecoracaoDesbloqueada(true);
  }

  const emocaoAtiva = useMemo(
    () => aula.cores.emocoes.find((e) => e.nome === emocaoSelecionada),
    [emocaoSelecionada, aula.cores.emocoes],
  );

  const primeiraObra = salvos[0];
  const obraUrl = primeiraObra ? urlsSalvas[primeiraObra.foto_path] : undefined;
  const dataObra = useMemo(() => {
    const d = primeiraObra?.criado_em ? new Date(primeiraObra.criado_em) : new Date();
    return d.toLocaleDateString("pt-BR");
  }, [primeiraObra]);

  if (aberturaAberta) {
    return <Abertura aula={aula} onEntrar={() => setAberturaAberta(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Top bar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-background/85 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => { stopSpeech(); onSair(); }}
            className="text-primary font-bold text-sm px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            ← Sair
          </button>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] uppercase tracking-widest text-primary font-black">
              🎨 Ateliê Brilha · Arte · 2º Ano
            </div>
            <div className="text-sm font-black truncate font-display">
              {aula.titulo}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-5">

        {/* CENA DO ATELIÊ persistente */}
        <div className="relative">
          <CenaAtelie obraUrl={obraUrl} decoracoes={decoracoes} altura={260} />
          {obraSubindo && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="text-6xl animate-bounce">🎉</div>
            </div>
          )}
        </div>

        {/* ETAPA 1 — ESPELHO */}
        <Etapa numero={1} titulo="Espelho do Artista" icone="🪞">
          <BalaoBrilha comAudio={aula.espelho.intro}>{aula.espelho.intro}</BalaoBrilha>
          <div className="grid grid-cols-2 gap-3">
            {aula.espelho.expressoes.map((exp, i) => {
              const feito = espelhoIdx.includes(i);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    if (!feito) setEspelhoIdx((s) => [...s, i]);
                    speakChunked(exp.falaBrilha);
                  }}
                  className={`rounded-2xl border-2 p-4 text-center transition ${
                    feito
                      ? "bg-primary/10 border-primary shadow-kid"
                      : "bg-card border-border hover:border-primary/60"
                  }`}
                >
                  <div className="text-5xl mb-2">{exp.emoji}</div>
                  <div className="text-sm font-bold text-foreground">{exp.desafio}</div>
                  {feito && (
                    <div className="text-[11px] text-primary font-black mt-1">✓ {exp.falaBrilha}</div>
                  )}
                </button>
              );
            })}
          </div>
          {espelhoIdx.length === aula.espelho.expressoes.length && (
            <BalaoBrilha comAudio={aula.espelho.fechamento}>{aula.espelho.fechamento}</BalaoBrilha>
          )}
        </Etapa>

        {/* ETAPA 2 — GALERIA INTERATIVA */}
        <Etapa numero={2} titulo="Visitando Grandes Artistas" icone="🖼️">
          <BalaoBrilha comAudio={aula.galeriaInterativa.intro}>
            {aula.galeriaInterativa.intro}
          </BalaoBrilha>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {aula.galeriaInterativa.obras.map((o) => {
              const ativa = obraTocada === o.id;
              return (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => {
                    setObraTocada(o.id);
                    speakChunked(o.falaBrilha);
                  }}
                  className={`rounded-2xl border-4 p-3 text-left bg-card transition ${
                    ativa ? "border-primary shadow-kid scale-[1.02]" : "border-amber-900/40 hover:border-primary/60"
                  }`}
                  style={{ borderStyle: "solid" }}
                >
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-amber-100 to-orange-200 grid place-items-center text-5xl border border-amber-900/30">
                    🖼️
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-widest text-primary font-black">
                    {o.pais}
                  </div>
                  <div className="text-sm font-black font-display leading-tight">{o.artista}</div>
                  <div className="text-xs italic text-foreground/70">"{o.obra}"</div>
                </button>
              );
            })}
          </div>
          {obraTocada && (
            <BalaoBrilha
              comAudio={aula.galeriaInterativa.obras.find((o) => o.id === obraTocada)?.falaBrilha}
            >
              {aula.galeriaInterativa.obras.find((o) => o.id === obraTocada)?.falaBrilha}
            </BalaoBrilha>
          )}
          <div className="text-center text-lg font-black text-primary">
            {aula.galeriaInterativa.convite}
          </div>
        </Etapa>

        {/* ETAPA 3 — APRENDER GUIADO */}
        <Etapa numero={3} titulo="Aprendendo a Desenhar" icone="✏️">
          <BalaoBrilha comAudio={aula.aprender.intro}>{aula.aprender.intro}</BalaoBrilha>
          <div className="flex flex-wrap gap-2">
            {aula.aprender.passos.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setPassoAprender(i);
                  speakChunked(p.fala);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 transition ${
                  passoAprender === i
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary/60"
                }`}
              >
                {i + 1}. {p.titulo}
              </button>
            ))}
          </div>
          <BalaoBrilha comAudio={aula.aprender.passos[passoAprender].fala}>
            <b>{aula.aprender.passos[passoAprender].titulo}.</b>{" "}
            {aula.aprender.passos[passoAprender].fala}
          </BalaoBrilha>
          <DrawingCanvas altura={320} ocultarExportar />
          {passoAprender === aula.aprender.passos.length - 1 && (
            <div className="text-sm text-success font-bold text-center">
              ✨ {aula.aprender.fechamento}
            </div>
          )}
        </Etapa>

        {/* ETAPA 4 — OBRA LIVRE + ETAPA 5 CORES fundidas em um só canvas */}
        <Etapa numero={4} titulo="Minha Primeira Obra" icone="🎨">
          <BalaoBrilha comAudio={aula.obraLivre.instrucao}>{aula.obraLivre.instrucao}</BalaoBrilha>

          {/* PALETA DE EMOÇÃO */}
          <div className="rounded-2xl border-2 border-petal/40 bg-petal/10 p-3 space-y-2">
            <div className="text-[10px] font-black uppercase tracking-widest text-primary">
              🌈 {aula.cores.pergunta}
            </div>
            <div className="grid grid-cols-5 gap-2">
              {aula.cores.emocoes.map((em) => (
                <button
                  key={em.nome}
                  type="button"
                  onClick={() => {
                    setEmocaoSelecionada(em.nome);
                    speakChunked(em.falaBrilha);
                  }}
                  className={`rounded-xl p-2 border-2 text-center transition ${
                    emocaoSelecionada === em.nome
                      ? "border-primary shadow-kid bg-card"
                      : "border-transparent bg-card/70 hover:border-primary/40"
                  }`}
                >
                  <div className="text-2xl">{em.emoji}</div>
                  <div className="text-[10px] font-bold text-foreground">{em.nome}</div>
                </button>
              ))}
            </div>
            {emocaoAtiva && (
              <div className="text-xs italic text-foreground/80">
                <b>Brilha:</b> {emocaoAtiva.falaBrilha}
              </div>
            )}
          </div>

          <DrawingCanvas
            altura={480}
            paleta={emocaoAtiva?.paleta}
            textoBotao="🖼️ Salvar na Galeria Brilha"
            onExportar={(blob, du) => salvarObra(blob, du, aula.obraLivre.legendaSalvar)}
          />

          <div className="rounded-2xl bg-primary/5 border border-primary/20 p-3">
            <BalaoBrilha>
              "{aula.obraLivre.comentariosBrilha[comentarioIdx]}"
            </BalaoBrilha>
          </div>

          {!userId && (
            <div className="text-xs bg-warning/20 text-warning-foreground rounded-xl p-2">
              Entre na sua conta para guardar a obra permanentemente.
            </div>
          )}
          {erro && (
            <div className="text-xs bg-destructive/15 text-destructive rounded-xl p-2">{erro}</div>
          )}
        </Etapa>

        {/* ETAPA 6 — GALERIA BRILHA */}
        <Etapa numero={5} titulo="Galeria Brilha" icone="🏛️">
          <BalaoBrilha comAudio={aula.galeria.intro}>{aula.galeria.intro}</BalaoBrilha>
          <div className="rounded-3xl bg-gradient-to-b from-amber-100 to-amber-50 border-4 border-amber-900/40 p-6">
            <div className="mx-auto max-w-sm bg-white border-[10px] border-amber-500 shadow-2xl p-3 relative">
              {/* moldura dourada */}
              <div className="absolute -inset-2 border-2 border-amber-600 pointer-events-none" />
              {obraUrl ? (
                <img src={obraUrl} alt="Sua obra" className="w-full h-64 object-contain" />
              ) : (
                <div className="w-full h-64 grid place-items-center text-foreground/40 text-sm border-2 border-dashed border-border">
                  Salve sua obra na etapa 4 para vê-la aqui.
                </div>
              )}
              <div className="mt-3 border-t border-border pt-2 text-center">
                <div className="text-[10px] uppercase tracking-widest text-foreground/50">Título</div>
                <div className="font-black text-foreground font-display">
                  {primeiraObra?.legenda ?? aula.galeria.exemploTitulo}
                </div>
                <div className="text-xs text-foreground/60">
                  Artista: <b>Você</b> · {dataObra}
                </div>
              </div>
            </div>
            {obraUrl && (
              <div className="mt-4 text-center text-primary font-black font-display animate-in fade-in duration-700">
                🎉 {aula.galeria.parabens}
              </div>
            )}
          </div>
        </Etapa>

        {/* ETAPA 7 — MISSÃO FAMÍLIA */}
        <Etapa numero={6} titulo="Missão em Família" icone="🏡">
          <div className="text-[10px] uppercase tracking-widest text-coral font-black">
            📸 Missão opcional
          </div>
          <BalaoBrilha comAudio={aula.missaoFamilia.convite}>
            {aula.missaoFamilia.convite}
          </BalaoBrilha>
          <p className="text-sm text-foreground/80">{aula.missaoFamilia.entregavel}</p>
          <DrawingCanvas
            altura={340}
            textoBotao="📸 Adicionar ao Álbum de Recordações"
            onExportar={(blob, du) =>
              salvarObra(blob, du, "Retrato de alguém da minha família")
            }
          />
          <div className="pt-2">
            <div className="text-xs uppercase tracking-widest text-primary font-black mb-2">
              📔 Seu Álbum
            </div>
            <AlbumRecordacoes cursoSlug={CURSO_SLUG} />
          </div>
        </Etapa>

        {/* ETAPA 8 — ATELIÊ CRESCEU */}
        <Etapa numero={7} titulo="Meu Ateliê Cresceu" icone="🌱">
          <BalaoBrilha comAudio={aula.atelieCresceu.falaBrilha}>
            {aula.atelieCresceu.falaBrilha}
          </BalaoBrilha>
          <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-4 text-center">
            <div className="text-6xl">{aula.atelieCresceu.decoracao.emoji}</div>
            <div className="text-[10px] uppercase tracking-widest text-primary font-black mt-2">
              Nova decoração desbloqueada
            </div>
            <div className="text-xl font-black font-display capitalize">
              {aula.atelieCresceu.decoracao.nome}
            </div>
            {!novaDecoracaoDesbloqueada && !decoracoes.some((d) => d.id === aula.atelieCresceu.decoracao.id) ? (
              <button
                type="button"
                onClick={desbloquearDecoracao}
                className="mt-3 px-5 py-2 rounded-2xl bg-primary text-primary-foreground font-black shadow-kid hover:opacity-90"
              >
                🌟 Colocar no meu ateliê
              </button>
            ) : (
              <div className="mt-3 text-sm text-success font-bold">
                ✅ Já está no seu ateliê — olhe lá em cima!
              </div>
            )}
          </div>
        </Etapa>

        {/* ENCERRAMENTO — PINCEL DOURADO */}
        <section className="rounded-3xl border-4 border-amber-400 bg-gradient-to-b from-amber-50 to-amber-100 p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 text-9xl select-none flex items-center justify-center pointer-events-none">
            ✨
          </div>
          <div className="relative space-y-3">
            <div className="text-[10px] uppercase tracking-widest text-amber-700 font-black">
              🏆 Encerramento
            </div>
            <div className="text-7xl">{aula.encerramento.icone}</div>
            <div className="text-xs uppercase tracking-widest text-amber-700 font-bold">
              Você conquistou
            </div>
            <div className="text-2xl font-black font-display text-amber-900">
              {aula.encerramento.recompensa}
            </div>
            <p className="italic text-foreground/80 max-w-md mx-auto">
              "{aula.encerramento.mensagem}"
            </p>
            <button
              type="button"
              onClick={() => speakChunked(aula.encerramento.mensagem)}
              className="text-xs px-3 py-1.5 rounded-full bg-amber-200 text-amber-900 font-bold"
            >
              🔊 Ouvir Brilha
            </button>
          </div>
        </section>

        <div className="text-center pt-2 pb-10">
          <button
            onClick={() => { stopSpeech(); onSair(); }}
            className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-black shadow-kid hover:opacity-90 transition"
          >
            ✨ Terminei minha aula de arte
          </button>
        </div>
      </main>
    </div>
  );
}
