import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { speakChunked } from "@/lib/native-tts";
import type { AulaArte } from "./types";
import { DrawingCanvas } from "./DrawingCanvas";
import { AlbumRecordacoes } from "@/components/AlbumRecordacoes";

/**
 * PlayerArteV1 — Ateliê Kawaii.
 * Skin: fundo textura papel creme, rosa/amarelo, mascote pintora.
 * Sequência FIXA de 17 seções (SPEB 1.0 · Arte).
 */

const BUCKET = "missao-familia-fotos";
const CURSO_SLUG = "arte-2ano";

type Props = { aula: AulaArte; onSair: () => void };

type Salvos = { id: string; foto_path: string; legenda: string | null };

function Falante({ texto }: { texto: string }) {
  return (
    <button
      type="button"
      onClick={() => speakChunked(texto)}
      aria-label="Aurora lê"
      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-rose-100 text-rose-700 hover:bg-rose-200 font-bold"
    >
      🔊 Aurora lê
    </button>
  );
}

function Secao({
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
  cor?: "rose" | "amber" | "emerald" | "sky" | "violet";
  children: React.ReactNode;
  narracao?: string;
}) {
  const cores = {
    rose: "border-rose-200 bg-white",
    amber: "border-amber-200 bg-amber-50/40",
    emerald: "border-emerald-200 bg-emerald-50/40",
    sky: "border-sky-200 bg-sky-50/40",
    violet: "border-violet-200 bg-violet-50/40",
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
  const [salvos, setSalvos] = useState<Salvos[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const [avaliacao, setAvaliacao] = useState<Record<string, number>>({});
  const [reflexao, setReflexao] = useState("");

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
      .select("id, foto_path, legenda")
      .eq("user_id", uid)
      .eq("curso_slug", CURSO_SLUG)
      .eq("aula_slug", aula.slug)
      .order("criado_em", { ascending: false });
    setSalvos((data ?? []) as Salvos[]);
  }

  async function salvarDesenho(
    blob: Blob,
    _dataUrl: string,
    legenda: string,
  ) {
    setErro(null);
    if (!userId) {
      setErro("Entre na sua conta para salvar no álbum.");
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
        .upload(path, blob, {
          contentType: "image/png",
          upsert: false,
        });
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
    } catch (err: any) {
      setErro("Não deu pra salvar: " + (err?.message ?? String(err)));
    }
  }

  const rubricaConcluida = useMemo(
    () =>
      aula.rubrica.criterios.every(
        (c) => typeof avaliacao[c.nome] === "number",
      ),
    [avaliacao, aula.rubrica.criterios],
  );

  return (
    <div
      className="min-h-screen text-stone-800"
      style={{
        background:
          "radial-gradient(1200px 600px at 20% -10%, #fde7f0 0%, transparent 60%), radial-gradient(900px 500px at 90% 10%, #fff3c4 0%, transparent 55%), #fffbf3",
      }}
    >
      {/* Paper texture overlay */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(180,140,120,0.08) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />

      {/* Top bar */}
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
              🎨 Ateliê Brilha · Arte · 2º Ano
            </div>
            <div className="text-sm font-black truncate">
              {aula.unidade.titulo} — {aula.titulo}
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-3xl mx-auto px-4 py-6 space-y-5">
        {/* Capa */}
        <div className="rounded-3xl bg-gradient-to-br from-rose-400 via-pink-400 to-amber-300 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute -right-6 -top-6 text-8xl opacity-30 select-none">
            🎨
          </div>
          <div className="absolute -right-2 bottom-2 text-6xl opacity-40 select-none">
            🖌️
          </div>
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

        {/* 1-2 já mostrados no topo (unidade+aula). Etapa 3: BNCC */}
        <Secao numero={3} titulo="O que você vai aprender" icone="🎯" cor="emerald">
          <ul className="space-y-3">
            {aula.bncc.map((b) => (
              <li
                key={b.codigo}
                className="rounded-2xl bg-white border border-emerald-100 p-3"
              >
                <div className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">
                  BNCC {b.codigo}
                </div>
                <div className="font-black text-stone-800 mt-0.5">
                  {b.oQueOAlunoAprende}
                </div>
                <div className="text-xs text-stone-500 mt-1 italic">
                  {b.descricao}
                </div>
              </li>
            ))}
          </ul>
        </Secao>

        {/* 4. Materiais */}
        <Secao numero={4} titulo="O que vamos usar" icone="🧰" cor="amber">
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white border border-amber-100 p-3">
              <div className="font-black text-amber-700 mb-1">💻 Digitais</div>
              <ul className="text-sm list-disc pl-4 space-y-1">
                {aula.materiais.digitais.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-amber-100 p-3">
              <div className="font-black text-amber-700 mb-1">✋ Físicos</div>
              <ul className="text-sm list-disc pl-4 space-y-1">
                {aula.materiais.fisicos.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-amber-100 p-3">
              <div className="font-black text-amber-700 mb-1">✨ Opcionais</div>
              <ul className="text-sm list-disc pl-4 space-y-1">
                {aula.materiais.opcionais.map((m) => <li key={m}>{m}</li>)}
              </ul>
            </div>
          </div>
        </Secao>

        {/* 5. História */}
        <Secao
          numero={5}
          titulo={aula.historia.titulo}
          icone="📖"
          cor="violet"
          narracao={aula.historia.narrativa.join(" ")}
        >
          {aula.historia.narrativa.map((p, i) => (
            <p key={i} className="text-base leading-relaxed">
              {p}
            </p>
          ))}
        </Secao>

        {/* 6. Descoberta */}
        <Secao
          numero={6}
          titulo="Observe. Analise. Descubra."
          icone="🔍"
          cor="sky"
        >
          <div className="rounded-2xl bg-white border border-sky-200 p-3">
            <div className="text-xs uppercase tracking-widest text-sky-600 font-bold">
              Pergunta guia
            </div>
            <div className="font-black text-lg text-stone-800">
              {aula.descoberta.perguntaGuia}
            </div>
          </div>
          <div>
            <div className="font-bold text-sky-700 mb-1">🔎 Observe:</div>
            <ul className="list-disc pl-5 space-y-1">
              {aula.descoberta.observacoes.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </div>
          <div>
            <div className="font-bold text-sky-700 mb-1">💭 Hipóteses:</div>
            <ul className="list-disc pl-5 space-y-1">
              {aula.descoberta.hipoteses.map((o) => <li key={o}>{o}</li>)}
            </ul>
          </div>
        </Secao>

        {/* 7. Explicação */}
        <Secao numero={7} titulo="Explicação (bem curtinha!)" icone="💡">
          <div className="rounded-2xl bg-rose-50 border border-rose-200 p-3 text-lg font-black text-rose-800">
            {aula.explicacao.ideia}
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {aula.explicacao.exemplos.map((e) => (
              <div
                key={e.artista}
                className="rounded-2xl bg-white border border-rose-100 p-3"
              >
                <div className="text-xs text-rose-600 font-black">
                  {e.artista}
                </div>
                <div className="text-sm mt-1">{e.detalhe}</div>
              </div>
            ))}
          </div>
          <div className="text-sm bg-amber-50 border border-amber-200 rounded-xl p-2 font-semibold text-amber-800">
            ✨ {aula.explicacao.regraSimples}
          </div>
        </Secao>

        {/* 8. Demonstração */}
        <Secao numero={8} titulo={aula.demonstracao.titulo} icone="👩‍🎨">
          <ol className="space-y-1.5">
            {aula.demonstracao.passos.map((p) => (
              <li key={p} className="text-base">{p}</li>
            ))}
          </ol>
          <div className="text-sm bg-rose-50 border border-rose-200 rounded-xl p-2 font-semibold text-rose-800">
            💗 {aula.demonstracao.dica}
          </div>
        </Secao>

        {/* 9. Experimentação */}
        <Secao
          numero={9}
          titulo="Hora de testar (pode errar!)"
          icone="🧪"
          cor="emerald"
        >
          <p className="font-semibold text-emerald-800">
            {aula.experimentacao.convite}
          </p>
          <ul className="list-disc pl-5 space-y-1">
            {aula.experimentacao.desafios.map((d) => <li key={d}>{d}</li>)}
          </ul>
          <div className="pt-1">
            <div className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-1">
              Rascunho livre
            </div>
            <DrawingCanvas altura={280} ocultarExportar />
          </div>
        </Secao>

        {/* 10. Produção Guiada */}
        <Secao
          numero={10}
          titulo="Produção Guiada — Aurora com você"
          icone="🤝"
          cor="amber"
        >
          <ol className="space-y-1.5">
            {aula.producaoGuiada.passoAPasso.map((p, i) => (
              <li
                key={i}
                className="rounded-xl bg-white border border-amber-100 p-2.5"
              >
                {p}
              </li>
            ))}
          </ol>
        </Secao>

        {/* 11. Produção Livre + canvas grande */}
        <Secao
          numero={11}
          titulo={aula.producaoLivre.titulo}
          icone="🌟"
          cor="rose"
        >
          <p className="font-semibold text-stone-800">
            {aula.producaoLivre.instrucao}
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {aula.producaoLivre.dicas.map((d) => <li key={d}>{d}</li>)}
          </ul>
          <div className="pt-1">
            <DrawingCanvas
              altura={440}
              textoBotao="🎨 Salvar rascunho no meu ateliê"
              onExportar={(blob, du) =>
                salvarDesenho(blob, du, "Rascunho da produção livre")
              }
            />
          </div>
        </Secao>

        {/* 12. Compartilhar */}
        <Secao
          numero={12}
          titulo="Compartilhar — conte pra alguém"
          icone="🗣️"
          cor="sky"
        >
          <p className="text-sm">
            Chame alguém da casa e mostre seu autorretrato. Responda:
          </p>
          <ul className="list-decimal pl-5 space-y-1">
            {aula.compartilhar.perguntas.map((p) => (
              <li key={p} className="font-semibold">
                {p}
              </li>
            ))}
          </ul>
          <textarea
            value={reflexao}
            onChange={(e) => setReflexao(e.target.value)}
            placeholder="Escreva aqui o que você quer dizer sobre seu autorretrato…"
            rows={3}
            className="mt-1 w-full rounded-xl border-2 border-sky-200 bg-white p-3 text-sm focus:outline-none focus:border-sky-400"
          />
        </Secao>

        {/* 13. Curiosidade */}
        <Secao
          numero={13}
          titulo={aula.curiosidade.titulo}
          icone="🤯"
          cor="violet"
        >
          <ul className="space-y-2">
            {aula.curiosidade.fatos.map((f) => (
              <li
                key={f}
                className="rounded-xl bg-white border border-violet-200 p-3"
              >
                💜 {f}
              </li>
            ))}
          </ul>
        </Secao>

        {/* 14. Projeto Final */}
        <Secao
          numero={14}
          titulo={`Projeto Final — ${aula.projetoFinal.titulo}`}
          icone="🏆"
          cor="rose"
        >
          <p className="text-sm">{aula.projetoFinal.entregavel}</p>
          <DrawingCanvas
            altura={480}
            textoBotao="🏆 Enviar OBRA OFICIAL para o Álbum"
            onExportar={(blob, du) =>
              salvarDesenho(blob, du, aula.projetoFinal.legendaSugerida)
            }
          />
          {!userId && (
            <div className="text-xs bg-amber-100 text-amber-800 rounded-xl p-2">
              Entre na sua conta para que a obra fique guardada pra sempre.
            </div>
          )}
          {erro && (
            <div className="text-xs bg-rose-100 text-rose-800 rounded-xl p-2">
              {erro}
            </div>
          )}
          {salvos.length > 0 && (
            <div className="text-xs bg-emerald-50 border border-emerald-200 rounded-xl p-2 text-emerald-800 font-semibold">
              ✅ {salvos.length}{" "}
              {salvos.length === 1 ? "obra salva" : "obras salvas"} nesta aula!
            </div>
          )}
        </Secao>

        {/* 15. Portfólio */}
        <Secao
          numero={15}
          titulo="Meu Ateliê — Portfólio de Arte"
          icone="🖼️"
          cor="amber"
        >
          <p className="text-sm">
            Tudo que você criou fica guardado aqui. Você pode voltar quando
            quiser.
          </p>
          <AlbumRecordacoes cursoSlug={CURSO_SLUG} />
        </Secao>

        {/* 16. Avaliação por rubrica */}
        <Secao
          numero={16}
          titulo="Auto-avaliação (não é prova!)"
          icone="🌡️"
          cor="emerald"
        >
          <p className="text-sm">
            Marque como VOCÊ se sente sobre cada parte. Não tem certo nem errado
            — arte não é prova.
          </p>
          <div className="space-y-3">
            {aula.rubrica.criterios.map((c) => (
              <div
                key={c.nome}
                className="rounded-2xl bg-white border border-emerald-100 p-3"
              >
                <div className="font-black text-stone-800">{c.nome}</div>
                <div className="text-xs text-stone-500 mb-2">{c.descricao}</div>
                <div className="flex flex-wrap gap-2">
                  {aula.rubrica.niveis.map((n, i) => (
                    <button
                      key={n.nome}
                      type="button"
                      onClick={() =>
                        setAvaliacao((a) => ({ ...a, [c.nome]: i }))
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                        avaliacao[c.nome] === i
                          ? "ring-2 ring-emerald-500 " + n.cor
                          : n.cor + " opacity-60 hover:opacity-100"
                      }`}
                    >
                      {n.nome}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {rubricaConcluida && (
            <div className="rounded-xl bg-emerald-100 border border-emerald-300 p-3 text-emerald-900 font-bold">
              🎉 Auto-avaliação concluída! Você é um(a) artista brilhante.
            </div>
          )}
        </Secao>

        {/* 17. Relatório */}
        <Secao
          numero={17}
          titulo="Relatório da aula"
          icone="📋"
          cor="sky"
        >
          <div className="grid md:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white border border-sky-100 p-3">
              <div className="text-xs uppercase tracking-widest text-sky-600 font-bold">
                👨‍👩 Para os pais
              </div>
              <p className="text-sm mt-1">{aula.relatorio.paraPais}</p>
            </div>
            <div className="rounded-2xl bg-white border border-sky-100 p-3">
              <div className="text-xs uppercase tracking-widest text-sky-600 font-bold">
                👩‍🏫 Para o professor
              </div>
              <p className="text-sm mt-1">{aula.relatorio.paraProfessor}</p>
            </div>
            <div className="rounded-2xl bg-white border border-sky-100 p-3">
              <div className="text-xs uppercase tracking-widest text-sky-600 font-bold">
                🛠️ Para o admin
              </div>
              <p className="text-sm mt-1">{aula.relatorio.paraAdmin}</p>
            </div>
          </div>
        </Secao>

        <div className="text-center pt-4 pb-10">
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
