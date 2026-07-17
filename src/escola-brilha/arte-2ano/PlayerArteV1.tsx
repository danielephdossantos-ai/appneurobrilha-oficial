import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { speakChunked } from "@/lib/native-tts";
import type { AulaArte } from "./types";
import { DrawingCanvas } from "./DrawingCanvas";
import { AlbumRecordacoes } from "@/components/AlbumRecordacoes";

/**
 * PlayerArteV1 — Identidade visual OFICIAL do app (Menta Brilha).
 * - Fonte: Nunito (font-display), tokens semânticos.
 * - Estrutura pedagógica: Contrato SPEB 1.0 · Arte (10 etapas + projeto +
 *   avaliação + encerramento com medalha).
 */

const BUCKET = "missao-familia-fotos";
const CURSO_SLUG = "arte-2ano";

type Props = { aula: AulaArte; onSair: () => void };
type Salvo = { id: string; foto_path: string; legenda: string | null; criado_em?: string };

type Tom = "primary" | "sky" | "petal" | "sun" | "coral" | "lilac";

const TOM_MAP: Record<
  Tom,
  { chip: string; card: string; ring: string; label: string; solid: string; solidText: string }
> = {
  primary: {
    chip: "bg-primary/15 text-primary",
    card: "border-primary/25 bg-card",
    ring: "ring-primary/40",
    label: "text-primary",
    solid: "bg-primary",
    solidText: "text-primary-foreground",
  },
  sky: {
    chip: "bg-sky/25 text-foreground",
    card: "border-sky/40 bg-card",
    ring: "ring-sky/60",
    label: "text-foreground",
    solid: "bg-sky",
    solidText: "text-foreground",
  },
  petal: {
    chip: "bg-petal/30 text-foreground",
    card: "border-petal/40 bg-card",
    ring: "ring-petal/60",
    label: "text-foreground",
    solid: "bg-petal",
    solidText: "text-foreground",
  },
  sun: {
    chip: "bg-sun/25 text-foreground",
    card: "border-sun/40 bg-card",
    ring: "ring-sun/60",
    label: "text-foreground",
    solid: "bg-sun",
    solidText: "text-foreground",
  },
  coral: {
    chip: "bg-coral/25 text-foreground",
    card: "border-coral/40 bg-card",
    ring: "ring-coral/60",
    label: "text-foreground",
    solid: "bg-coral",
    solidText: "text-foreground",
  },
  lilac: {
    chip: "bg-lilac/25 text-foreground",
    card: "border-lilac/40 bg-card",
    ring: "ring-lilac/60",
    label: "text-foreground",
    solid: "bg-lilac",
    solidText: "text-foreground",
  },
};

function Falante({ texto, rotulo = "Brilha lê" }: { texto: string; rotulo?: string }) {
  return (
    <button
      type="button"
      onClick={() => speakChunked(texto)}
      className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 font-bold whitespace-nowrap transition"
    >
      🔊 {rotulo}
    </button>
  );
}

function Etapa({
  numero,
  titulo,
  icone,
  tom = "primary",
  children,
  narracao,
}: {
  numero: number;
  titulo: string;
  icone: string;
  tom?: Tom;
  children: React.ReactNode;
  narracao?: string;
}) {
  const t = TOM_MAP[tom];
  return (
    <section
      className={`rounded-3xl border-2 ${t.card} p-5 sm:p-6 shadow-[0_4px_0_0_hsl(var(--foreground)/0.05)]`}
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`w-12 h-12 rounded-2xl ${t.solid} ${t.solidText} grid place-items-center text-xl font-black shrink-0 shadow-kid`}
          >
            {icone}
          </div>
          <div className="min-w-0">
            <div className={`text-[10px] uppercase tracking-widest font-black ${t.label}`}>
              Etapa {String(numero).padStart(2, "0")}
            </div>
            <h2 className="text-lg sm:text-xl font-black text-foreground leading-tight font-display">
              {titulo}
            </h2>
          </div>
        </div>
        {narracao && <Falante texto={narracao} />}
      </div>
      <div className="text-foreground/85 leading-relaxed space-y-3 font-sans">{children}</div>
    </section>
  );
}

export function PlayerArteV1({ aula, onSair }: Props) {
  const [userId, setUserId] = useState<string | null>(null);
  const [salvos, setSalvos] = useState<Salvo[]>([]);
  const [urlsSalvas, setUrlsSalvas] = useState<Record<string, string>>({});
  const [erro, setErro] = useState<string | null>(null);
  const [comecou, setComecou] = useState(false);
  const [respostasConversa, setRespostasConversa] = useState<Record<number, string>>({});
  const [emocaoSelecionada, setEmocaoSelecionada] = useState<string | null>(null);
  const [entregou, setEntregou] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      const uid = data?.user?.id ?? null;
      setUserId(uid);
      if (uid) await recarregar(uid);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  async function salvarDesenho(blob: Blob, _dataUrl: string, legenda: string) {
    setErro(null);
    if (!userId) {
      setErro("Entre na sua conta para salvar no portfólio.");
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
      setEntregou(true);
    } catch (err: any) {
      setErro("Não deu pra salvar: " + (err?.message ?? String(err)));
    }
  }

  const primeiraObra = salvos[salvos.length - 1] ?? salvos[0];
  const dataObra = useMemo(() => {
    const d = primeiraObra?.criado_em ? new Date(primeiraObra.criado_em) : new Date();
    return d.toLocaleDateString("pt-BR");
  }, [primeiraObra]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Top bar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-background/85 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onSair}
            className="text-primary font-bold text-sm px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition"
          >
            ← Sair
          </button>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] uppercase tracking-widest text-primary font-black">
              🎨 Escola Brilha · Arte · 2º Ano · ⏱ {aula.duracaoMin}
            </div>
            <div className="text-sm font-black truncate font-display">
              {aula.unidade.titulo} — {aula.titulo}
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-3xl mx-auto px-4 py-6 space-y-5">
        {/* CAPA — identidade Menta Brilha */}
        <div className="rounded-3xl bg-primary text-primary-foreground p-6 sm:p-8 shadow-kid relative overflow-hidden">
          <div className="absolute -right-6 -top-6 text-8xl opacity-20 select-none">🎨</div>
          <div className="absolute -right-2 bottom-2 text-6xl opacity-25 select-none">🖌️</div>
          <div className="text-[11px] uppercase tracking-widest font-black opacity-90">
            {aula.unidade.titulo}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mt-1 leading-tight font-display">
            {aula.titulo}
          </h1>
          <p className="mt-2 text-primary-foreground/90 text-sm sm:text-base">
            {aula.unidade.subtitulo}
          </p>
        </div>

        {/* OBJETIVOS */}
        <section className="rounded-3xl bg-card border-2 border-border p-5">
          <div className="text-[10px] uppercase tracking-widest text-primary font-black mb-2">
            🎯 Ao final desta aula você será capaz de:
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {aula.objetivos.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>

        {/* MATERIAIS */}
        <section className="rounded-3xl bg-secondary/40 border-2 border-secondary p-5">
          <div className="text-[10px] uppercase tracking-widest text-primary font-black mb-2">
            📚 Materiais
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-2xl bg-card border border-border p-3">
              <div className="font-black text-primary mb-1">💻 Ferramentas do app</div>
              <ul className="text-sm list-disc pl-4 space-y-1">
                {aula.materiais.ferramentasApp.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-card border border-border p-3">
              <div className="font-black text-primary mb-1">✋ Físicos (opcional)</div>
              <ul className="text-sm list-disc pl-4 space-y-1">
                {aula.materiais.fisicos.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* ETAPA 1 — HISTÓRIA */}
        <Etapa
          numero={1}
          titulo="A História"
          icone="📖"
          tom="lilac"
          narracao={`${aula.historia.cenario} ${aula.historia.carta.join(" ")} ${aula.historia.pergunta}`}
        >
          <p className="text-base">{aula.historia.cenario}</p>
          <div className="rounded-2xl bg-sun/15 border-2 border-dashed border-sun/60 p-4 relative">
            <div className="absolute -top-3 left-4 bg-sun text-foreground text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest">
              ✉️ Carta no ateliê
            </div>
            {aula.historia.carta.map((linha, i) => (
              <p key={i} className="italic text-foreground/90 leading-relaxed">
                "{linha}"
              </p>
            ))}
          </div>
          <div className="rounded-2xl bg-primary/10 border border-primary/20 p-3 flex items-start gap-2">
            <span className="text-2xl">🌱</span>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-primary">
                Brilha pergunta
              </div>
              <p className="font-bold text-foreground">{aula.historia.pergunta}</p>
            </div>
          </div>
          {!comecou ? (
            <button
              onClick={() => setComecou(true)}
              className="w-full py-3 rounded-2xl bg-primary text-primary-foreground font-black shadow-kid hover:opacity-90 transition"
            >
              {aula.historia.botao}
            </button>
          ) : (
            <div className="text-sm text-success font-bold">✅ Vamos nessa, artista!</div>
          )}
        </Etapa>

        {/* ETAPA 2 — OBSERVAÇÃO */}
        <Etapa
          numero={2}
          titulo="Observando Como um Artista"
          icone="🔍"
          tom="sky"
          narracao={`${aula.observacao.convite} ${aula.observacao.faladoPeloBrilha}`}
        >
          <p>{aula.observacao.convite}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {aula.observacao.partesDoRosto.map((p) => (
              <div
                key={p}
                className="rounded-xl bg-card border border-sky/50 p-2 text-sm font-semibold text-foreground"
              >
                👁 {p}
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-sky/25 border border-sky/40 p-3 text-sm">
            <b>Brilha:</b> {aula.observacao.faladoPeloBrilha}
          </div>
        </Etapa>

        {/* ETAPA 3 — OBRAS */}
        <Etapa
          numero={3}
          titulo="Conhecendo Obras"
          icone="🖼️"
          tom="lilac"
          narracao={`${aula.obras.intro} ${aula.obras.referencias.map((r) => `${r.artista}: ${r.sobre}`).join(" ")}`}
        >
          <p>{aula.obras.intro}</p>
          <div className="space-y-3">
            {aula.obras.referencias.map((r) => (
              <div
                key={r.artista}
                className="rounded-2xl bg-card border border-lilac/50 p-3"
              >
                <div className="text-[10px] uppercase tracking-widest text-primary font-black">
                  {r.artista}
                </div>
                <div className="font-black text-foreground">🖼 {r.obra}</div>
                <p className="text-sm mt-1">{r.sobre}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-lilac/20 border border-lilac/40 p-3">
            <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">
              Perguntas para você
            </div>
            <ul className="list-decimal pl-5 space-y-1 text-sm">
              {aula.obras.perguntas.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div className="rounded-xl bg-primary/10 border border-primary/20 p-3 text-sm">
            <b>Brilha:</b> {aula.obras.faladoPeloBrilha}
          </div>
        </Etapa>

        {/* ETAPA 4 — PASSO A PASSO */}
        <Etapa
          numero={4}
          titulo="Aprendendo a Desenhar o Rosto"
          icone="✏️"
          tom="sun"
          narracao={`${aula.passoAPasso.intro} ${aula.passoAPasso.passos.map((p) => `${p.titulo}. ${p.descricao}`).join(" ")}`}
        >
          <p>{aula.passoAPasso.intro}</p>
          <ol className="space-y-2">
            {aula.passoAPasso.passos.map((p, i) => (
              <li
                key={i}
                className="rounded-2xl bg-card border border-sun/50 p-3 flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-sun text-foreground grid place-items-center font-black shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-black text-foreground">{p.titulo}</div>
                  <div className="text-sm text-foreground/75">{p.descricao}</div>
                </div>
              </li>
            ))}
          </ol>
          <div className="pt-1">
            <div className="text-xs uppercase tracking-widest text-primary font-black mb-1">
              Treine aqui antes (rascunho livre)
            </div>
            <DrawingCanvas altura={280} ocultarExportar />
          </div>
        </Etapa>

        {/* ETAPA 5 — PRODUÇÃO OFICIAL */}
        <Etapa
          numero={5}
          titulo="Meu Primeiro Autorretrato"
          icone="🎨"
          tom="primary"
          narracao={`${aula.producao.instrucao} ${aula.producao.dicasDoBrilha.join(" ")}`}
        >
          <p className="font-semibold">{aula.producao.instrucao}</p>
          <ul className="space-y-1">
            {aula.producao.dicasDoBrilha.map((d) => (
              <li
                key={d}
                className="text-sm bg-primary/10 border border-primary/20 rounded-xl px-3 py-2"
              >
                🌱 <b>Brilha:</b> "{d}"
              </li>
            ))}
          </ul>
          <DrawingCanvas
            altura={480}
            textoBotao="🏆 Salvar OBRA OFICIAL no meu portfólio"
            onExportar={(blob, du) => salvarDesenho(blob, du, aula.producao.legendaSalvar)}
          />
          {!userId && (
            <div className="text-xs bg-warning/20 text-warning-foreground rounded-xl p-2">
              Entre na sua conta para que a obra fique guardada no portfólio.
            </div>
          )}
          {erro && (
            <div className="text-xs bg-destructive/15 text-destructive rounded-xl p-2">
              {erro}
            </div>
          )}
          {salvos.length > 0 && (
            <div className="text-xs bg-success/15 border border-success/30 rounded-xl p-2 text-success font-semibold">
              ✅ {salvos.length} {salvos.length === 1 ? "obra salva" : "obras salvas"} nesta aula.
            </div>
          )}
        </Etapa>

        {/* ETAPA 6 — CONVERSA */}
        <Etapa
          numero={6}
          titulo="Conversa de Artista"
          icone="🎙"
          tom="sky"
          narracao={`${aula.conversa.intro} ${aula.conversa.perguntas.join(" ")}`}
        >
          <p>{aula.conversa.intro}</p>
          <div className="space-y-3">
            {aula.conversa.perguntas.map((p, i) => (
              <div key={i} className="rounded-2xl bg-card border border-sky/50 p-3">
                <div className="font-black text-foreground mb-1">
                  {i + 1}. {p}
                </div>
                <textarea
                  value={respostasConversa[i] ?? ""}
                  onChange={(e) =>
                    setRespostasConversa((r) => ({ ...r, [i]: e.target.value }))
                  }
                  rows={2}
                  placeholder="Escreva sua resposta aqui…"
                  className="w-full rounded-xl border-2 border-border bg-background p-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
            ))}
          </div>
        </Etapa>

        {/* ETAPA 7 — CORES/EMOÇÃO */}
        <Etapa
          numero={7}
          titulo="Dando Vida ao Retrato"
          icone="🌈"
          tom="petal"
          narracao={`${aula.cores.explicacao} ${aula.cores.perguntaEmocao}`}
        >
          <p className="font-semibold">{aula.cores.explicacao}</p>
          <div className="rounded-2xl bg-card border border-petal/40 p-3">
            <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">
              {aula.cores.perguntaEmocao}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {aula.cores.emocoes.map((e) => (
                <button
                  key={e.nome}
                  type="button"
                  onClick={() => setEmocaoSelecionada(e.nome)}
                  className={`rounded-xl p-3 text-left border-2 transition ${
                    emocaoSelecionada === e.nome
                      ? "border-foreground shadow-kid scale-[1.02]"
                      : "border-transparent hover:border-foreground/30"
                  }`}
                  style={{ background: e.hex }}
                >
                  <div className="font-black text-foreground">{e.nome}</div>
                  <div className="text-[11px] text-foreground/70">cor {e.cor}</div>
                </button>
              ))}
            </div>
            {emocaoSelecionada && (
              <div className="mt-3 rounded-xl bg-petal/20 border border-petal/40 p-2 text-sm text-foreground font-semibold">
                ✨ Volte na Etapa 5 e experimente pintar detalhes do seu retrato usando a cor que combina com <b>{emocaoSelecionada}</b>.
              </div>
            )}
          </div>
        </Etapa>

        {/* ETAPA 8 — MISSÃO EM CASA */}
        <Etapa
          numero={8}
          titulo="Missão em Casa"
          icone="🏠"
          tom="coral"
          narracao={`${aula.missaoCasa.convite} ${aula.missaoCasa.entregavel}`}
        >
          <p>{aula.missaoCasa.convite}</p>
          <div className="grid grid-cols-2 gap-2">
            {aula.missaoCasa.observarNaFamilia.map((o) => (
              <div
                key={o}
                className="rounded-xl bg-card border border-coral/50 p-2 text-sm font-semibold text-foreground"
              >
                👀 {o}
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-coral/20 border border-coral/40 p-3 text-sm text-foreground font-semibold">
            📸 {aula.missaoCasa.entregavel}
          </div>
          <div className="pt-1">
            <div className="text-xs uppercase tracking-widest text-primary font-black mb-1">
              Desenho de alguém da família
            </div>
            <DrawingCanvas
              altura={360}
              textoBotao="📸 Enviar retrato da família ao portfólio"
              onExportar={(blob, du) =>
                salvarDesenho(blob, du, "Retrato de alguém da minha família")
              }
            />
          </div>
        </Etapa>

        {/* ETAPA 9 — GALERIA */}
        <Etapa numero={9} titulo="Minha Pequena Galeria" icone="🖼️" tom="lilac">
          <p>{aula.galeria.intro}</p>
          <div className="rounded-2xl bg-muted border-4 border-foreground p-4 sm:p-6">
            <div className="bg-card border border-border shadow-inner p-3 sm:p-4">
              {primeiraObra && urlsSalvas[primeiraObra.foto_path] ? (
                <img
                  src={urlsSalvas[primeiraObra.foto_path]}
                  alt="Sua obra"
                  className="w-full max-h-80 object-contain mx-auto"
                />
              ) : (
                <div className="aspect-[4/3] grid place-items-center text-muted-foreground text-sm border-2 border-dashed border-border rounded">
                  Salve seu autorretrato na Etapa 5 para ele aparecer aqui na galeria.
                </div>
              )}
              <div className="mt-3 border-t border-border pt-3 text-center">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Título da obra
                </div>
                <div className="font-black text-foreground font-display">
                  {primeiraObra?.legenda ?? aula.galeria.exemploTitulo}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Artista: <b>Você</b> · Data: {dataObra}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <AlbumRecordacoes cursoSlug={CURSO_SLUG} />
          </div>
        </Etapa>

        {/* ETAPA 10 — CURIOSIDADE */}
        <Etapa
          numero={10}
          titulo="Curiosidade"
          icone="🌟"
          tom="sun"
          narracao={`${aula.curiosidade.fato} ${aula.curiosidade.conexaoFuturo}`}
        >
          <div className="rounded-2xl bg-card border border-sun/50 p-4">
            <div className="text-[10px] uppercase tracking-widest text-primary font-black">
              Você sabia?
            </div>
            <p className="mt-1 text-foreground">{aula.curiosidade.fato}</p>
          </div>
          <div className="rounded-xl bg-sun/20 border border-sun/40 p-3 text-sm text-foreground font-semibold">
            🕰 {aula.curiosidade.conexaoFuturo}
          </div>
        </Etapa>

        {/* PROJETO */}
        <section className="rounded-3xl border-2 border-primary/30 bg-primary/5 p-5 sm:p-6">
          <div className="text-[10px] uppercase tracking-widest text-primary font-black">
            🎯 Projeto da Aula
          </div>
          <h3 className="text-xl font-black text-foreground font-display">
            {aula.projeto.nome}
          </h3>
          <p className="text-sm text-foreground/80 mt-1">{aula.projeto.descricao}</p>
        </section>

        {/* AVALIAÇÃO */}
        <section className="rounded-3xl border-2 border-success/30 bg-success/5 p-5 sm:p-6">
          <div className="text-[10px] uppercase tracking-widest text-success font-black">
            📊 Avaliação
          </div>
          <p className="text-sm mt-1">{aula.avaliacao.intro}</p>
          <ul className="grid grid-cols-2 gap-2 mt-2">
            {aula.avaliacao.criterios.map((c) => (
              <li
                key={c}
                className="rounded-xl bg-card border border-success/30 p-2 text-sm font-semibold text-foreground"
              >
                ✅ {c}
              </li>
            ))}
          </ul>
          <div className="mt-3 text-xs italic text-foreground/75 bg-card border border-border rounded-xl p-2">
            {aula.avaliacao.obs}
          </div>
        </section>

        {/* ENCERRAMENTO — MEDALHA */}
        <section className="rounded-3xl border-2 border-sun/40 bg-sun/10 p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 text-9xl select-none flex items-center justify-center">
            🏅
          </div>
          <div className="relative">
            <div className="text-[10px] uppercase tracking-widest text-primary font-black">
              🏅 Encerramento
            </div>
            <div className="text-7xl mt-2">{aula.encerramento.medalhaIcone}</div>
            <div className="text-xs uppercase tracking-widest text-primary mt-2 font-bold">
              Medalha desbloqueada
            </div>
            <div className="text-2xl font-black text-foreground mt-1 font-display">
              {aula.encerramento.medalhaNome}
            </div>
            <p className="mt-3 text-foreground/80 italic max-w-md mx-auto">
              "{aula.encerramento.mensagem}"
            </p>
            {!entregou ? (
              <div className="mt-3 text-xs bg-sun/30 border border-sun/50 rounded-xl p-2 text-foreground font-semibold inline-block">
                Salve sua obra na Etapa 5 para conquistar sua medalha oficial.
              </div>
            ) : (
              <div className="mt-3 text-xs bg-success/20 border border-success/40 rounded-xl p-2 text-success font-black inline-block">
                🎉 Medalha CONQUISTADA! Sua obra está no portfólio.
              </div>
            )}
          </div>
        </section>

        <div className="text-center pt-2 pb-10">
          <button
            onClick={onSair}
            className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-black shadow-kid hover:opacity-90 transition"
          >
            ✨ Terminei minha aula de arte
          </button>
        </div>
      </main>
    </div>
  );
}
