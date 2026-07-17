import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { speakChunked } from "@/lib/native-tts";
import type { AulaArte } from "./types";
import { DrawingCanvas } from "./DrawingCanvas";
import { AlbumRecordacoes } from "@/components/AlbumRecordacoes";

/**
 * PlayerArteV1 — Ateliê Kawaii · Contrato SPEB 1.0 · Arte
 * Sequência OFICIAL: 10 Etapas + Projeto + Avaliação + Encerramento.
 * Proibido reduzir a jogos/quizzes.
 */

const BUCKET = "missao-familia-fotos";
const CURSO_SLUG = "arte-2ano";

type Props = { aula: AulaArte; onSair: () => void };
type Salvo = { id: string; foto_path: string; legenda: string | null; criado_em?: string };

function Falante({ texto, rotulo = "Brilha lê" }: { texto: string; rotulo?: string }) {
  return (
    <button
      type="button"
      onClick={() => speakChunked(texto)}
      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-rose-100 text-rose-700 hover:bg-rose-200 font-bold whitespace-nowrap"
    >
      🔊 {rotulo}
    </button>
  );
}

function Etapa({
  numero,
  titulo,
  icone,
  cor = "rose",
  children,
  narracao,
}: {
  numero: number;
  titulo: string;
  icone: string;
  cor?: "rose" | "amber" | "emerald" | "sky" | "violet" | "pink";
  children: React.ReactNode;
  narracao?: string;
}) {
  const cores = {
    rose: "border-rose-200 bg-white",
    amber: "border-amber-200 bg-amber-50/40",
    emerald: "border-emerald-200 bg-emerald-50/40",
    sky: "border-sky-200 bg-sky-50/40",
    violet: "border-violet-200 bg-violet-50/40",
    pink: "border-pink-200 bg-pink-50/40",
  }[cor];
  return (
    <section
      className={`rounded-3xl border-2 ${cores} p-5 sm:p-6 shadow-[0_2px_0_rgba(0,0,0,0.02)]`}
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-300 to-pink-400 text-white grid place-items-center text-xl font-black shadow shrink-0">
            {icone}
          </div>
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-widest text-rose-500 font-bold">
              Etapa {String(numero).padStart(2, "0")}
            </div>
            <h2 className="text-lg sm:text-xl font-black text-stone-800 leading-tight">
              {titulo}
            </h2>
          </div>
        </div>
        {narracao && <Falante texto={narracao} />}
      </div>
      <div className="text-stone-700 leading-relaxed space-y-3">{children}</div>
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
    <div
      className="min-h-screen text-stone-800"
      style={{
        background:
          "radial-gradient(1200px 600px at 20% -10%, #fde7f0 0%, transparent 60%), radial-gradient(900px 500px at 90% 10%, #fff3c4 0%, transparent 55%), #fffbf3",
      }}
    >
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(180,140,120,0.08) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />

      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b-2 border-rose-100">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onSair}
            className="text-rose-600 font-bold text-sm px-3 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100"
          >
            ← Sair
          </button>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] uppercase tracking-widest text-rose-500 font-bold">
              🎨 Ateliê Brilha · Arte · 2º Ano · ⏱ {aula.duracaoMin}
            </div>
            <div className="text-sm font-black truncate">
              {aula.unidade.titulo} — {aula.titulo}
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-3xl mx-auto px-4 py-6 space-y-5">
        {/* CAPA */}
        <div className="rounded-3xl bg-gradient-to-br from-rose-400 via-pink-400 to-amber-300 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute -right-6 -top-6 text-8xl opacity-30 select-none">🎨</div>
          <div className="absolute -right-2 bottom-2 text-6xl opacity-40 select-none">🖌️</div>
          <div className="text-[11px] uppercase tracking-widest font-bold opacity-90">
            {aula.unidade.titulo}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mt-1 leading-tight drop-shadow-sm">
            {aula.titulo}
          </h1>
          <p className="mt-2 text-white/95 text-sm sm:text-base">
            {aula.unidade.subtitulo}
          </p>
        </div>

        {/* OBJETIVOS */}
        <section className="rounded-3xl bg-white border-2 border-rose-100 p-5">
          <div className="text-[10px] uppercase tracking-widest text-rose-500 font-bold mb-1">
            🎯 Ao final desta aula você será capaz de:
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {aula.objetivos.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </section>

        {/* MATERIAIS */}
        <section className="rounded-3xl bg-amber-50/60 border-2 border-amber-200 p-5">
          <div className="text-[10px] uppercase tracking-widest text-amber-600 font-bold mb-2">
            📚 Materiais
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white border border-amber-100 p-3">
              <div className="font-black text-amber-700 mb-1">💻 Ferramentas do app</div>
              <ul className="text-sm list-disc pl-4 space-y-1">
                {aula.materiais.ferramentasApp.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-amber-100 p-3">
              <div className="font-black text-amber-700 mb-1">✋ Físicos (opcional)</div>
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
          cor="violet"
          narracao={`${aula.historia.cenario} ${aula.historia.carta.join(" ")} ${aula.historia.pergunta}`}
        >
          <p className="text-base">{aula.historia.cenario}</p>
          <div className="rounded-2xl bg-amber-50 border-2 border-dashed border-amber-300 p-4 relative">
            <div className="absolute -top-3 left-4 bg-amber-200 text-amber-900 text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest">
              ✉️ Carta no ateliê
            </div>
            {aula.historia.carta.map((linha, i) => (
              <p key={i} className="italic text-amber-900 leading-relaxed">
                "{linha}"
              </p>
            ))}
          </div>
          <div className="rounded-2xl bg-rose-100 border border-rose-200 p-3 flex items-start gap-2">
            <span className="text-2xl">🌸</span>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-rose-600">
                Brilha pergunta
              </div>
              <p className="font-bold text-rose-800">{aula.historia.pergunta}</p>
            </div>
          </div>
          {!comecou && (
            <button
              onClick={() => setComecou(true)}
              className="w-full py-3 rounded-2xl bg-rose-500 text-white font-black shadow hover:bg-rose-600"
            >
              {aula.historia.botao}
            </button>
          )}
          {comecou && (
            <div className="text-sm text-emerald-700 font-bold">
              ✅ Vamos nessa, artista!
            </div>
          )}
        </Etapa>

        {/* ETAPA 2 — OBSERVAÇÃO */}
        <Etapa
          numero={2}
          titulo="Observando Como um Artista"
          icone="🔍"
          cor="sky"
          narracao={`${aula.observacao.convite} ${aula.observacao.faladoPeloBrilha}`}
        >
          <p>{aula.observacao.convite}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {aula.observacao.partesDoRosto.map((p) => (
              <div
                key={p}
                className="rounded-xl bg-white border border-sky-200 p-2 text-sm font-semibold text-sky-900"
              >
                👁 {p}
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-sky-100 border border-sky-200 p-3 text-sm">
            <b>Brilha:</b> {aula.observacao.faladoPeloBrilha}
          </div>
        </Etapa>

        {/* ETAPA 3 — OBRAS */}
        <Etapa
          numero={3}
          titulo="Conhecendo Obras"
          icone="🖼️"
          cor="violet"
          narracao={`${aula.obras.intro} ${aula.obras.referencias.map((r) => `${r.artista}: ${r.sobre}`).join(" ")}`}
        >
          <p>{aula.obras.intro}</p>
          <div className="space-y-3">
            {aula.obras.referencias.map((r) => (
              <div
                key={r.artista}
                className="rounded-2xl bg-white border border-violet-200 p-3"
              >
                <div className="text-[10px] uppercase tracking-widest text-violet-600 font-black">
                  {r.artista}
                </div>
                <div className="font-black text-stone-800">🖼 {r.obra}</div>
                <p className="text-sm mt-1">{r.sobre}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-violet-50 border border-violet-200 p-3">
            <div className="text-[10px] font-black uppercase tracking-widest text-violet-700 mb-1">
              Perguntas para você
            </div>
            <ul className="list-decimal pl-5 space-y-1 text-sm">
              {aula.obras.perguntas.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-sm">
            <b>Brilha:</b> {aula.obras.faladoPeloBrilha}
          </div>
        </Etapa>

        {/* ETAPA 4 — PASSO A PASSO */}
        <Etapa
          numero={4}
          titulo="Aprendendo a Desenhar o Rosto"
          icone="✏️"
          cor="amber"
          narracao={`${aula.passoAPasso.intro} ${aula.passoAPasso.passos.map((p) => `${p.titulo}. ${p.descricao}`).join(" ")}`}
        >
          <p>{aula.passoAPasso.intro}</p>
          <ol className="space-y-2">
            {aula.passoAPasso.passos.map((p, i) => (
              <li
                key={i}
                className="rounded-2xl bg-white border border-amber-200 p-3 flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-amber-400 text-white grid place-items-center font-black shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-black text-stone-800">{p.titulo}</div>
                  <div className="text-sm text-stone-600">{p.descricao}</div>
                </div>
              </li>
            ))}
          </ol>
          <div className="pt-1">
            <div className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-1">
              Treine aqui antes (rascunho livre)
            </div>
            <DrawingCanvas altura={280} ocultarExportar />
          </div>
        </Etapa>

        {/* ETAPA 5 — PRODUÇÃO (canvas oficial) */}
        <Etapa
          numero={5}
          titulo="Meu Primeiro Autorretrato"
          icone="🎨"
          cor="rose"
          narracao={`${aula.producao.instrucao} ${aula.producao.dicasDoBrilha.join(" ")}`}
        >
          <p className="font-semibold">{aula.producao.instrucao}</p>
          <ul className="space-y-1">
            {aula.producao.dicasDoBrilha.map((d) => (
              <li key={d} className="text-sm bg-rose-50 border border-rose-200 rounded-xl px-3 py-2">
                🌸 <b>Brilha:</b> "{d}"
              </li>
            ))}
          </ul>
          <DrawingCanvas
            altura={480}
            textoBotao="🏆 Salvar OBRA OFICIAL no meu portfólio"
            onExportar={(blob, du) => salvarDesenho(blob, du, aula.producao.legendaSalvar)}
          />
          {!userId && (
            <div className="text-xs bg-amber-100 text-amber-800 rounded-xl p-2">
              Entre na sua conta para que a obra fique guardada no portfólio.
            </div>
          )}
          {erro && (
            <div className="text-xs bg-rose-100 text-rose-800 rounded-xl p-2">
              {erro}
            </div>
          )}
          {salvos.length > 0 && (
            <div className="text-xs bg-emerald-50 border border-emerald-200 rounded-xl p-2 text-emerald-800 font-semibold">
              ✅ {salvos.length} {salvos.length === 1 ? "obra salva" : "obras salvas"} nesta aula.
            </div>
          )}
        </Etapa>

        {/* ETAPA 6 — CONVERSA */}
        <Etapa
          numero={6}
          titulo="Conversa de Artista"
          icone="🎙"
          cor="sky"
          narracao={`${aula.conversa.intro} ${aula.conversa.perguntas.join(" ")}`}
        >
          <p>{aula.conversa.intro}</p>
          <div className="space-y-3">
            {aula.conversa.perguntas.map((p, i) => (
              <div key={i} className="rounded-2xl bg-white border border-sky-200 p-3">
                <div className="font-black text-stone-800 mb-1">{i + 1}. {p}</div>
                <textarea
                  value={respostasConversa[i] ?? ""}
                  onChange={(e) =>
                    setRespostasConversa((r) => ({ ...r, [i]: e.target.value }))
                  }
                  rows={2}
                  placeholder="Escreva sua resposta aqui…"
                  className="w-full rounded-xl border-2 border-sky-100 bg-sky-50/40 p-2 text-sm focus:outline-none focus:border-sky-400"
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
          cor="pink"
          narracao={`${aula.cores.explicacao} ${aula.cores.perguntaEmocao}`}
        >
          <p className="font-semibold">{aula.cores.explicacao}</p>
          <div className="rounded-2xl bg-white border border-pink-200 p-3">
            <div className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-2">
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
                      ? "border-stone-800 shadow-lg scale-[1.02]"
                      : "border-transparent hover:border-stone-300"
                  }`}
                  style={{ background: e.hex }}
                >
                  <div className="font-black text-stone-800">{e.nome}</div>
                  <div className="text-[11px] text-stone-700">cor {e.cor}</div>
                </button>
              ))}
            </div>
            {emocaoSelecionada && (
              <div className="mt-3 rounded-xl bg-pink-50 border border-pink-200 p-2 text-sm text-pink-800 font-semibold">
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
          cor="emerald"
          narracao={`${aula.missaoCasa.convite} ${aula.missaoCasa.entregavel}`}
        >
          <p>{aula.missaoCasa.convite}</p>
          <div className="grid grid-cols-2 gap-2">
            {aula.missaoCasa.observarNaFamilia.map((o) => (
              <div key={o} className="rounded-xl bg-white border border-emerald-200 p-2 text-sm font-semibold text-emerald-900">
                👀 {o}
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-emerald-100 border border-emerald-200 p-3 text-sm text-emerald-900 font-semibold">
            📸 {aula.missaoCasa.entregavel}
          </div>
          <div className="pt-1">
            <div className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-1">
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
        <Etapa
          numero={9}
          titulo="Minha Pequena Galeria"
          icone="🖼️"
          cor="violet"
        >
          <p>{aula.galeria.intro}</p>

          {/* Moldura estilo museu com a obra oficial */}
          <div className="rounded-2xl bg-stone-100 border-4 border-stone-800 p-4 sm:p-6">
            <div className="bg-white border border-stone-300 shadow-inner p-3 sm:p-4">
              {primeiraObra && urlsSalvas[primeiraObra.foto_path] ? (
                <img
                  src={urlsSalvas[primeiraObra.foto_path]}
                  alt="Sua obra"
                  className="w-full max-h-80 object-contain mx-auto"
                />
              ) : (
                <div className="aspect-[4/3] grid place-items-center text-stone-400 text-sm border-2 border-dashed border-stone-300 rounded">
                  Salve seu autorretrato na Etapa 5 para ele aparecer aqui na
                  galeria.
                </div>
              )}
              <div className="mt-3 border-t border-stone-200 pt-3 text-center">
                <div className="text-[10px] uppercase tracking-widest text-stone-500">
                  Título da obra
                </div>
                <div className="font-black text-stone-800">
                  {primeiraObra?.legenda ?? aula.galeria.exemploTitulo}
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Artista: <b>Você</b> · Data: {dataObra}
                </div>
              </div>
            </div>
          </div>

          {/* Portfólio completo */}
          <div className="pt-2">
            <AlbumRecordacoes cursoSlug={CURSO_SLUG} />
          </div>
        </Etapa>

        {/* ETAPA 10 — CURIOSIDADE */}
        <Etapa
          numero={10}
          titulo="Curiosidade"
          icone="🌟"
          cor="amber"
          narracao={`${aula.curiosidade.fato} ${aula.curiosidade.conexaoFuturo}`}
        >
          <div className="rounded-2xl bg-white border border-amber-200 p-4">
            <div className="text-[10px] uppercase tracking-widest text-amber-600 font-black">
              Você sabia?
            </div>
            <p className="mt-1 text-stone-800">{aula.curiosidade.fato}</p>
          </div>
          <div className="rounded-xl bg-amber-100 border border-amber-200 p-3 text-sm text-amber-900 font-semibold">
            🕰 {aula.curiosidade.conexaoFuturo}
          </div>
        </Etapa>

        {/* PROJETO */}
        <section className="rounded-3xl border-2 border-rose-300 bg-gradient-to-br from-rose-50 to-pink-50 p-5 sm:p-6">
          <div className="text-[10px] uppercase tracking-widest text-rose-500 font-black">
            🎯 Projeto da Aula
          </div>
          <h3 className="text-xl font-black text-rose-800">{aula.projeto.nome}</h3>
          <p className="text-sm text-stone-700 mt-1">{aula.projeto.descricao}</p>
        </section>

        {/* AVALIAÇÃO */}
        <section className="rounded-3xl border-2 border-emerald-200 bg-emerald-50/40 p-5 sm:p-6">
          <div className="text-[10px] uppercase tracking-widest text-emerald-600 font-black">
            📊 Avaliação
          </div>
          <p className="text-sm mt-1">{aula.avaliacao.intro}</p>
          <ul className="grid grid-cols-2 gap-2 mt-2">
            {aula.avaliacao.criterios.map((c) => (
              <li
                key={c}
                className="rounded-xl bg-white border border-emerald-200 p-2 text-sm font-semibold text-emerald-900"
              >
                ✅ {c}
              </li>
            ))}
          </ul>
          <div className="mt-3 text-xs italic text-emerald-800 bg-white/70 border border-emerald-200 rounded-xl p-2">
            {aula.avaliacao.obs}
          </div>
        </section>

        {/* ENCERRAMENTO — MEDALHA */}
        <section className="rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-100 via-yellow-50 to-rose-100 p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 text-9xl select-none flex items-center justify-center">
            🏅
          </div>
          <div className="relative">
            <div className="text-[10px] uppercase tracking-widest text-amber-700 font-black">
              🏅 Encerramento
            </div>
            <div className="text-7xl mt-2">{aula.encerramento.medalhaIcone}</div>
            <div className="text-xs uppercase tracking-widest text-amber-600 mt-2 font-bold">
              Medalha desbloqueada
            </div>
            <div className="text-2xl font-black text-stone-800 mt-1">
              {aula.encerramento.medalhaNome}
            </div>
            <p className="mt-3 text-stone-700 italic max-w-md mx-auto">
              "{aula.encerramento.mensagem}"
            </p>
            {!entregou && (
              <div className="mt-3 text-xs bg-amber-200/60 border border-amber-300 rounded-xl p-2 text-amber-900 font-semibold inline-block">
                Salve sua obra na Etapa 5 para conquistar sua medalha oficial.
              </div>
            )}
            {entregou && (
              <div className="mt-3 text-xs bg-emerald-200/70 border border-emerald-300 rounded-xl p-2 text-emerald-900 font-black inline-block">
                🎉 Medalha CONQUISTADA! Sua obra está no portfólio.
              </div>
            )}
          </div>
        </section>

        <div className="text-center pt-2 pb-10">
          <button
            onClick={onSair}
            className="px-6 py-3 rounded-2xl bg-rose-500 text-white font-black shadow hover:bg-rose-600"
          >
            ✨ Terminei minha aula de arte
          </button>
        </div>
      </main>
    </div>
  );
}
