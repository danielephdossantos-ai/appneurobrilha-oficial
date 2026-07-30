import { useEffect, useMemo, useRef, useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { EscritaBloco } from "../../types";

/**
 * BLOCO DE ESCRITA — Fase 3 do contrato de Português do 1º ano.
 *
 *  - tracadoLetra  → a criança traça a letra com o dedo em cima do
 *                    modelo e o app mede se ela cobriu o caminho.
 *  - ditadoSilabas → o app FALA a palavra; a criança monta com
 *                    sílabas móveis (arrasta/toca na ordem certa).
 *  - escritaReal   → produção de texto de verdade (lista/bilhete),
 *                    guardada no aparelho pra virar portfólio.
 */
export function Escrita({ bloco, aulaSlug }: { bloco: EscritaBloco; aulaSlug: string }) {
  if (bloco.tipo === "tracadoLetra") return <TracadoLetra bloco={bloco} />;
  if (bloco.tipo === "ditadoSilabas") return <DitadoSilabas bloco={bloco} />;
  return <EscritaReal bloco={bloco} aulaSlug={aulaSlug} />;
}

// =====================================================================
// 1) TRAÇADO DE LETRA
// =====================================================================

const TAM = 260;

function TracadoLetra({
  bloco,
}: {
  bloco: Extract<EscritaBloco, { tipo: "tracadoLetra" }>;
}) {
  const [i, setI] = useState(0);
  const item = bloco.letras[i];
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const inkRef = useRef<HTMLCanvasElement | null>(null);
  const maskRef = useRef<HTMLCanvasElement | null>(null);
  const desenhando = useRef(false);
  const ultimo = useRef<{ x: number; y: number } | null>(null);
  const [temTinta, setTemTinta] = useState(false);
  const [resultado, setResultado] = useState<null | { ok: boolean; msg: string }>(null);

  const desenharGuia = () => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    ctx.clearRect(0, 0, TAM, TAM);
    ctx.font = `bold ${TAM * 0.8}px Georgia, serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(255,255,255,0.10)";
    ctx.fillText(item.letra, TAM / 2, TAM / 2 + 8);
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 8]);
    ctx.strokeStyle = "rgba(255,255,255,0.55)";
    ctx.strokeText(item.letra, TAM / 2, TAM / 2 + 8);
    ctx.setLineDash([]);
  };

  // (re)monta a máscara da letra e limpa a tinta quando troca de letra
  useEffect(() => {
    const mask = maskRef.current ?? document.createElement("canvas");
    mask.width = TAM;
    mask.height = TAM;
    maskRef.current = mask;
    const mctx = mask.getContext("2d")!;
    mctx.clearRect(0, 0, TAM, TAM);
    mctx.font = `bold ${TAM * 0.8}px Georgia, serif`;
    mctx.textAlign = "center";
    mctx.textBaseline = "middle";
    mctx.fillStyle = "#fff";
    mctx.fillText(item.letra, TAM / 2, TAM / 2 + 8);
    mctx.lineWidth = 26; // tolerância: engrossa o caminho aceito
    mctx.strokeStyle = "#fff";
    mctx.strokeText(item.letra, TAM / 2, TAM / 2 + 8);

    const ink = inkRef.current ?? document.createElement("canvas");
    ink.width = TAM;
    ink.height = TAM;
    inkRef.current = ink;
    ink.getContext("2d")!.clearRect(0, 0, TAM, TAM);

    setTemTinta(false);
    setResultado(null);
    desenharGuia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, item.letra]);

  const pos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return {
      x: ((e.clientX - r.left) / r.width) * TAM,
      y: ((e.clientY - r.top) / r.height) * TAM,
    };
  };

  const traco = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    for (const c of [canvasRef.current, inkRef.current]) {
      if (!c) continue;
      const ctx = c.getContext("2d")!;
      ctx.strokeStyle = c === inkRef.current ? "#fff" : "#f59e0b";
      ctx.lineWidth = 14;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
  };

  const onDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    desenhando.current = true;
    const p = pos(e);
    ultimo.current = p;
    traco(p, { x: p.x + 0.1, y: p.y + 0.1 });
    setTemTinta(true);
    setResultado(null);
  };
  const onMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!desenhando.current || !ultimo.current) return;
    const p = pos(e);
    traco(ultimo.current, p);
    ultimo.current = p;
  };
  const onUp = () => {
    desenhando.current = false;
    ultimo.current = null;
  };

  const limpar = () => {
    inkRef.current?.getContext("2d")!.clearRect(0, 0, TAM, TAM);
    setTemTinta(false);
    setResultado(null);
    desenharGuia();
  };

  const conferir = () => {
    const mask = maskRef.current;
    const ink = inkRef.current;
    if (!mask || !ink) return;
    const m = mask.getContext("2d")!.getImageData(0, 0, TAM, TAM).data;
    const t = ink.getContext("2d")!.getImageData(0, 0, TAM, TAM).data;
    let letra = 0;
    let cobertos = 0;
    let fora = 0;
    let tinta = 0;
    for (let p = 3; p < m.length; p += 4) {
      const naLetra = m[p] > 40;
      const temT = t[p] > 40;
      if (naLetra) letra++;
      if (temT) tinta++;
      if (naLetra && temT) cobertos++;
      if (!naLetra && temT) fora++;
    }
    const cobertura = letra ? cobertos / letra : 0;
    const escapou = tinta ? fora / tinta : 0;
    stopSpeaking();
    if (cobertura >= 0.45 && escapou <= 0.45) {
      const fala = item.exemplo
        ? `${item.letra}. ${item.letra} de ${item.exemplo}.`
        : `Letra ${item.letra}.`;
      speakChunked(`Muito bem! ${fala}`, { rate: 0.72 });
      setResultado({
        ok: true,
        msg: `🎉 Você traçou o ${item.letra}${item.exemplo ? ` de ${item.exemplo}` : ""}!`,
      });
    } else if (escapou > 0.45) {
      speakChunked("Quase! Tente ficar em cima do caminho pontilhado.", { rate: 0.72 });
      setResultado({ ok: false, msg: "Quase! Fique EM CIMA do caminho pontilhado. Apague e tente de novo." });
    } else {
      speakChunked("Falta um pedaço da letra. Vamos completar.", { rate: 0.72 });
      setResultado({ ok: false, msg: "Faltou cobrir um pedaço da letra. Continue traçando ou apague e comece de novo." });
    }
  };

  const ouvirDica = () => {
    stopSpeaking();
    const dica = item.dicaTracado ?? "Siga o caminho pontilhado com o dedo, sem sair fora.";
    speakChunked(`Letra ${item.letra}. ${dica}`, { rate: 0.7 });
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-white font-bold">✏️ Trace a letra {item.letra} com o dedo</div>
        <div className="text-xs text-white/60">
          {i + 1} / {bloco.letras.length}
        </div>
      </div>

      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          width={TAM}
          height={TAM}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          className="touch-none rounded-2xl bg-slate-900/70 border-2 border-dashed border-white/25 w-[min(260px,80vw)] h-[min(260px,80vw)]"
        />
      </div>

      {resultado && (
        <div
          className={`rounded-xl p-3 text-sm ${
            resultado.ok
              ? "bg-emerald-500/15 border border-emerald-400/30 text-emerald-100"
              : "bg-amber-500/15 border border-amber-400/30 text-amber-100"
          }`}
        >
          {resultado.msg}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          onClick={ouvirDica}
          className="rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm text-white"
        >
          🔊 Como faz
        </button>
        <button
          onClick={limpar}
          className="rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm text-white"
        >
          🧽 Apagar
        </button>
        <button
          onClick={conferir}
          disabled={!temTinta}
          className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900 disabled:opacity-40"
        >
          ✅ Conferir
        </button>
        {resultado?.ok && i < bloco.letras.length - 1 && (
          <button
            onClick={() => setI(i + 1)}
            className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-900"
          >
            Próxima letra →
          </button>
        )}
      </div>
    </div>
  );
}

// =====================================================================
// 2) DITADO COM SÍLABAS MÓVEIS
// =====================================================================

function embaralhar<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function DitadoSilabas({
  bloco,
}: {
  bloco: Extract<EscritaBloco, { tipo: "ditadoSilabas" }>;
}) {
  const [i, setI] = useState(0);
  const item = bloco.palavras[i];
  const [montado, setMontado] = useState<number[]>([]);
  const [erro, setErro] = useState(false);
  const [acertou, setAcertou] = useState(false);

  const banco = useMemo(
    () => embaralhar([...item.silabas, ...(item.distratores ?? [])]),
    [item],
  );

  useEffect(() => {
    setMontado([]);
    setErro(false);
    setAcertou(false);
  }, [i]);

  const falarPalavra = () => {
    stopSpeaking();
    speakChunked(item.palavra, { rate: 0.68 });
  };

  useEffect(() => {
    const t = setTimeout(falarPalavra, 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  const escrito = montado.map((idx) => banco[idx]).join("");

  const tocar = (idx: number) => {
    if (acertou || montado.includes(idx)) return;
    stopSpeaking();
    speakChunked(banco[idx], { rate: 0.6 });
    const novo = [...montado, idx];
    setMontado(novo);
    const texto = novo.map((k) => banco[k]).join("");
    const alvo = item.silabas.join("");
    if (texto === alvo) {
      setAcertou(true);
      setErro(false);
      setTimeout(() => speakChunked(`Isso! ${item.palavra}.`, { rate: 0.72 }), 600);
    } else if (!alvo.startsWith(texto)) {
      setErro(true);
    }
  };

  const apagar = () => {
    setMontado(montado.slice(0, -1));
    setErro(false);
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-white font-bold">🔊 Ouça e escreva com as sílabas</div>
        <div className="text-xs text-white/60">
          {i + 1} / {bloco.palavras.length}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={falarPalavra}
          className="rounded-xl bg-sky-400 px-4 py-2 text-sm font-bold text-slate-900"
        >
          🔊 Ouvir de novo
        </button>
        {item.imagemUrl && (
          <img src={item.imagemUrl} alt="" className="h-16 w-16 object-contain" />
        )}
      </div>

      {/* linha de escrita */}
      <div className="flex flex-wrap items-center gap-2 rounded-xl bg-slate-900/70 border-2 border-dashed border-white/25 p-3 min-h-[64px]">
        {montado.length === 0 && (
          <span className="text-white/40 text-sm">Toque nas sílabas na ordem certa…</span>
        )}
        {montado.map((idx, k) => (
          <span
            key={k}
            className="rounded-lg bg-amber-400 px-3 py-2 text-lg font-black text-slate-900"
          >
            {banco[idx]}
          </span>
        ))}
      </div>

      {/* sílabas móveis */}
      <div className="flex flex-wrap gap-2">
        {banco.map((s, idx) => (
          <button
            key={idx}
            onClick={() => tocar(idx)}
            disabled={montado.includes(idx) || acertou}
            className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-lg font-black text-white disabled:opacity-25"
          >
            {s}
          </button>
        ))}
      </div>

      {erro && !acertou && (
        <div className="rounded-xl bg-amber-500/15 border border-amber-400/30 p-3 text-sm text-amber-100">
          Essa sílaba não é a próxima. {item.dica ?? `Escute de novo e comece pelo primeiro pedacinho de ${item.palavra}.`}
        </div>
      )}

      {acertou && (
        <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-3 text-sm text-emerald-100">
          🎉 Você escreveu <b>{escrito}</b>! São {item.silabas.length} pedacinhos:{" "}
          {item.silabas.join(" · ")}.
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={apagar}
          disabled={!montado.length || acertou}
          className="rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm text-white disabled:opacity-40"
        >
          ⬅ Apagar sílaba
        </button>
        {acertou && i < bloco.palavras.length - 1 && (
          <button
            onClick={() => setI(i + 1)}
            className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-900"
          >
            Próxima palavra →
          </button>
        )}
      </div>
    </div>
  );
}

// =====================================================================
// 3) ESCRITA REAL (lista / bilhete) — guardada no aparelho
// =====================================================================

function EscritaReal({
  bloco,
  aulaSlug,
}: {
  bloco: Extract<EscritaBloco, { tipo: "escritaReal" }>;
  aulaSlug: string;
}) {
  const chave = `escola-brilha:escrita:${aulaSlug}:${bloco.formato}:${bloco.titulo}`;
  const qtdLinhas = bloco.linhas ?? 4;
  const campos = bloco.campos ?? [];
  const vazio = bloco.formato === "lista" ? Array(qtdLinhas).fill("") : campos.map(() => "");

  const [valores, setValores] = useState<string[]>(vazio);
  const [salvo, setSalvo] = useState(false);
  const [verModelo, setVerModelo] = useState(false);
  const [conferido, setConferido] = useState<string[] | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(chave);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) {
          setValores(vazio.map((_, i) => arr[i] ?? ""));
          setSalvo(true);
        }
      }
    } catch {
      /* storage indisponível — segue sem rascunho */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chave]);

  const editar = (i: number, v: string) => {
    const novo = [...valores];
    novo[i] = v;
    setValores(novo);
    setSalvo(false);
    setConferido(null);
  };

  const conferir = () => {
    const problemas: string[] = [];
    if (bloco.formato === "lista") {
      const preenchidas = valores.filter((v) => v.trim().length >= 2).length;
      if (preenchidas < Math.min(3, qtdLinhas)) {
        problemas.push(`Escreva pelo menos ${Math.min(3, qtdLinhas)} itens, um em cada linha.`);
      }
    } else {
      campos.forEach((c, i) => {
        const min = c.minLetras ?? 2;
        if ((valores[i] ?? "").trim().length < min) {
          problemas.push(`Falta preencher "${c.rotulo}".`);
        }
      });
    }
    setConferido(problemas);
    if (!problemas.length) salvar();
  };

  const salvar = () => {
    try {
      localStorage.setItem(chave, JSON.stringify(valores));
      setSalvo(true);
    } catch {
      /* ignora */
    }
  };

  const ouvirComando = () => {
    stopSpeaking();
    speakChunked(bloco.comando, { rate: 0.72 });
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-white font-bold">
          {bloco.formato === "lista" ? "📝" : "✉️"} {bloco.titulo}
        </div>
        <button
          onClick={ouvirComando}
          className="rounded-xl bg-white/10 border border-white/20 px-3 py-1.5 text-xs text-white"
        >
          🔊 Ouvir
        </button>
      </div>

      <p className="text-sm text-white/80">{bloco.comando}</p>

      {/* papel */}
      <div className="rounded-xl bg-amber-50 p-4 space-y-2 shadow-inner">
        {bloco.formato === "lista"
          ? valores.map((v, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-5 text-right text-slate-500 font-bold">{i + 1}.</span>
                <input
                  value={v}
                  onChange={(e) => editar(i, e.target.value)}
                  placeholder={`item ${i + 1}`}
                  className="flex-1 min-w-0 bg-transparent border-b-2 border-dashed border-slate-300 py-1 text-lg text-slate-800 placeholder:text-slate-400 outline-none focus:border-amber-500"
                />
              </div>
            ))
          : campos.map((c, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  {c.rotulo}
                </div>
                <textarea
                  value={valores[i] ?? ""}
                  onChange={(e) => editar(i, e.target.value)}
                  placeholder={c.placeholder}
                  rows={c.rotulo.toLowerCase().includes("recado") || c.rotulo.toLowerCase().includes("mensagem") ? 3 : 1}
                  className="w-full resize-none bg-transparent border-b-2 border-dashed border-slate-300 py-1 text-lg text-slate-800 placeholder:text-slate-400 outline-none focus:border-amber-500"
                />
              </div>
            ))}
      </div>

      {bloco.modelo && (
        <div>
          <button
            onClick={() => setVerModelo((v) => !v)}
            className="rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm text-white"
          >
            {verModelo ? "🙈 Esconder modelo" : "👀 Espiar um modelo"}
          </button>
          {verModelo && (
            <div className="mt-2 rounded-xl bg-white/5 border border-white/15 p-3 text-sm text-white/80 space-y-1">
              {bloco.modelo.map((l, i) => (
                <div key={i}>{l}</div>
              ))}
            </div>
          )}
        </div>
      )}

      {bloco.checklist && (
        <ul className="space-y-1 text-sm text-white/75">
          {bloco.checklist.map((c, i) => (
            <li key={i}>☑ {c}</li>
          ))}
        </ul>
      )}

      {conferido && conferido.length > 0 && (
        <div className="rounded-xl bg-amber-500/15 border border-amber-400/30 p-3 text-sm text-amber-100 space-y-1">
          {conferido.map((p, i) => (
            <div key={i}>• {p}</div>
          ))}
        </div>
      )}

      {conferido && conferido.length === 0 && (
        <div className="rounded-xl bg-emerald-500/15 border border-emerald-400/30 p-3 text-sm text-emerald-100">
          🎉 Escrita guardada! Mostre pra sua família o que você escreveu.
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={conferir}
          className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-900"
        >
          ✅ Conferir e guardar
        </button>
        {salvo && <span className="text-xs text-emerald-200">Guardado no aparelho ✓</span>}
      </div>
    </div>
  );
}
