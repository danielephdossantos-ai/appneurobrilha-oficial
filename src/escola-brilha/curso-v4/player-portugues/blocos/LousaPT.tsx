import { useState } from "react";
import { speakChunked, stopSpeaking } from "@/lib/native-tts";
import type { LousaPTBloco } from "../../types";

/**
 * LOUSA DA LÍNGUA — o equivalente da "conta armada" da Matemática.
 *
 * Em Matemática o aluno vê a conta ARMADA e o professor resolve passo a
 * passo, com cores e setas. Aqui é igual: a FRASE é armada na lousa,
 * dissecada pedaço a pedaço, com rótulo colorido, explicação por passo,
 * erro comum e checagem interativa. Nada de parágrafo de apostila.
 */

const COR: Record<string, { bg: string; br: string; tx: string }> = {
  verde: { bg: "bg-emerald-500/15", br: "border-emerald-400/60", tx: "text-emerald-300" },
  vermelho: { bg: "bg-rose-500/15", br: "border-rose-400/60", tx: "text-rose-300" },
  azul: { bg: "bg-sky-500/15", br: "border-sky-400/60", tx: "text-sky-300" },
  amarelo: { bg: "bg-amber-500/15", br: "border-amber-400/60", tx: "text-amber-300" },
  roxo: { bg: "bg-violet-500/15", br: "border-violet-400/60", tx: "text-violet-300" },
  neutro: { bg: "bg-white/5", br: "border-white/25", tx: "text-white/70" },
};

function Lousa({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-white/15 bg-[#0a0f16] p-4 shadow-[inset_0_0_60px_rgba(255,255,255,0.04)] overflow-x-auto">
      {children}
    </div>
  );
}

function Titulo({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/60">
      {children}
    </div>
  );
}

export function LousaPT({ bloco }: { bloco: LousaPTBloco }) {
  if (bloco.tipo === "fraseAnatomia") return <FraseAnatomia bloco={bloco} />;
  if (bloco.tipo === "passoAPasso") return <PassoAPasso bloco={bloco} />;
  if (bloco.tipo === "duasColunas") return <DuasColunas bloco={bloco} />;
  if (bloco.tipo === "cacaMarcas") return <CacaMarcas bloco={bloco} />;
  if (bloco.tipo === "erroComum") return <ErroComum bloco={bloco} />;
  return null;
}

// ---------------------------------------------------------------- anatomia

function FraseAnatomia({
  bloco,
}: {
  bloco: Extract<LousaPTBloco, { tipo: "fraseAnatomia" }>;
}) {
  const [passo, setPasso] = useState(0); // quantas partes já foram reveladas
  const total = bloco.partes.length;
  const pronto = passo >= total;

  const avancar = () => {
    if (pronto) return;
    const p = bloco.partes[passo];
    stopSpeaking();
    speakChunked(`${p.texto}. ${p.explicacao ?? ""}`);
    setPasso(passo + 1);
  };

  return (
    <Lousa>
      <Titulo>✍️ {bloco.titulo}</Titulo>

      <div className="rounded-xl bg-white/5 border border-white/10 p-3 mb-4">
        <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Frase na lousa</div>
        <p className="text-lg font-black leading-snug">{bloco.frase}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {bloco.partes.map((p, i) => {
          const on = i < passo;
          const c = COR[p.cor ?? "neutro"];
          return (
            <div
              key={i}
              className={`rounded-xl border-2 px-3 py-2 transition-all ${
                on ? `${c.bg} ${c.br}` : "border-dashed border-white/15 bg-transparent opacity-50"
              }`}
            >
              <div className="font-black text-base">{p.texto}</div>
              {on && p.rotulo && (
                <div className={`text-[10px] font-black uppercase tracking-widest ${c.tx}`}>
                  {p.rotulo}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <ol className="space-y-2 mb-4">
        {bloco.partes.slice(0, passo).map((p, i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span className="h-6 w-6 shrink-0 grid place-items-center rounded-full bg-white/10 font-black text-xs">
              {i + 1}
            </span>
            <span className="text-white/85">
              <b className={COR[p.cor ?? "neutro"].tx}>{p.texto}</b>
              {p.explicacao ? ` → ${p.explicacao}` : ""}
            </span>
          </li>
        ))}
      </ol>

      {!pronto ? (
        <button
          onClick={avancar}
          className="w-full rounded-xl bg-white/10 border-2 border-white/20 py-3 font-black hover:bg-white/15"
        >
          {passo === 0 ? "▶️ Começar a destrinchar" : `▶️ Próximo pedaço (${passo}/${total})`}
        </button>
      ) : (
        <div className="rounded-xl bg-emerald-500/15 border-2 border-emerald-400/50 p-3">
          <div className="text-[10px] font-black uppercase tracking-widest text-emerald-300 mb-1">
            Conclusão
          </div>
          <p className="font-bold leading-snug">{bloco.conclusao}</p>
        </div>
      )}
    </Lousa>
  );
}

// -------------------------------------------------------------- passo a passo

function PassoAPasso({
  bloco,
}: {
  bloco: Extract<LousaPTBloco, { tipo: "passoAPasso" }>;
}) {
  const [n, setN] = useState(0);
  const total = bloco.passos.length;
  const pronto = n >= total;

  return (
    <Lousa>
      <Titulo>🧮 {bloco.titulo}</Titulo>

      <div className="rounded-xl bg-amber-500/10 border border-amber-300/30 p-3 mb-4">
        <div className="text-[10px] uppercase tracking-widest text-amber-300/80 mb-1">Enunciado</div>
        <p className="font-black leading-snug">{bloco.enunciado}</p>
      </div>

      <div className="space-y-3 mb-4">
        {bloco.passos.slice(0, n).map((p, i) => (
          <div key={i} className="rounded-xl border-l-4 border-violet-400 bg-white/5 p-3">
            <div className="text-xs font-black text-violet-300 mb-1">
              PASSO {i + 1} · {p.pergunta}
            </div>
            <div className="font-black text-base leading-snug">{p.resultado}</div>
            {p.porque && <div className="text-xs text-white/60 mt-1">💡 {p.porque}</div>}
          </div>
        ))}
      </div>

      {!pronto ? (
        <button
          onClick={() => {
            const p = bloco.passos[n];
            stopSpeaking();
            speakChunked(`${p.pergunta}. ${p.resultado}`);
            setN(n + 1);
          }}
          className="w-full rounded-xl bg-violet-500/20 border-2 border-violet-400/50 py-3 font-black hover:bg-violet-500/30"
        >
          {n === 0 ? "▶️ Resolver passo 1" : `▶️ Passo ${n + 1} de ${total}`}
        </button>
      ) : (
        <div className="rounded-xl bg-emerald-500/15 border-2 border-emerald-400/50 p-3">
          <div className="text-[10px] font-black uppercase tracking-widest text-emerald-300 mb-1">
            Resposta
          </div>
          <p className="font-black leading-snug">{bloco.resposta}</p>
        </div>
      )}
    </Lousa>
  );
}

// -------------------------------------------------------------- duas colunas

function DuasColunas({
  bloco,
}: {
  bloco: Extract<LousaPTBloco, { tipo: "duasColunas" }>;
}) {
  const col = (
    lado: Extract<LousaPTBloco, { tipo: "duasColunas" }>["esquerda"],
    tom: "emerald" | "rose",
  ) => (
    <div
      className={`flex-1 min-w-0 rounded-xl border-2 p-3 ${
        tom === "emerald"
          ? "border-emerald-400/50 bg-emerald-500/10"
          : "border-rose-400/50 bg-rose-500/10"
      }`}
    >
      <div
        className={`text-xs font-black uppercase tracking-widest mb-2 ${
          tom === "emerald" ? "text-emerald-300" : "text-rose-300"
        }`}
      >
        {lado.rotulo}
      </div>
      <ul className="space-y-2 text-sm">
        {lado.itens.map((it, i) => (
          <li key={i} className="rounded-lg bg-black/25 px-2 py-1.5 leading-snug">
            {it}
          </li>
        ))}
      </ul>
      {!!lado.marcas?.length && (
        <div className="mt-3">
          <div className="text-[10px] uppercase tracking-widest text-white/45 mb-1">Marcas</div>
          <div className="flex flex-wrap gap-1">
            {lado.marcas.map((m) => (
              <span key={m} className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-bold">
                {m}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Lousa>
      <Titulo>⚖️ {bloco.titulo}</Titulo>
      <div className="flex flex-col sm:flex-row gap-3">
        {col(bloco.esquerda, "emerald")}
        {col(bloco.direita, "rose")}
      </div>
      {bloco.dica && (
        <div className="mt-3 rounded-xl bg-white/5 border border-white/15 p-3 text-sm">
          🔎 {bloco.dica}
        </div>
      )}
    </Lousa>
  );
}

// --------------------------------------------------------------- caça-marcas

function CacaMarcas({
  bloco,
}: {
  bloco: Extract<LousaPTBloco, { tipo: "cacaMarcas" }>;
}) {
  const tokens = bloco.frase.split(/(\s+)/);
  const [sel, setSel] = useState<number[]>([]);
  const norm = (s: string) => s.toLowerCase().replace(/[.,;:!?"']/g, "").trim();
  const alvos = bloco.alvos.map(norm);
  const acertou =
    sel.length > 0 &&
    sel.every((i) => alvos.includes(norm(tokens[i]))) &&
    alvos.every((a) => sel.some((i) => norm(tokens[i]) === a));

  return (
    <Lousa>
      <Titulo>🔦 {bloco.titulo}</Titulo>
      <p className="text-sm text-white/70 mb-3">{bloco.instrucao}</p>

      <p className="mb-4 text-lg font-bold leading-relaxed">
        {tokens.map((t, i) =>
          t.trim() === "" ? (
            <span key={i}> </span>
          ) : (
            <button
              key={i}
              onClick={() => {
                stopSpeaking();
                speakChunked(t);
                setSel((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
              }}
              className={`rounded-lg px-1.5 transition-colors ${
                sel.includes(i)
                  ? alvos.includes(norm(t))
                    ? "bg-emerald-500/30 text-emerald-200"
                    : "bg-rose-500/30 text-rose-200"
                  : "hover:bg-white/10"
              }`}
            >
              {t}
            </button>
          ),
        )}
      </p>

      {acertou && (
        <div className="rounded-xl bg-emerald-500/15 border-2 border-emerald-400/50 p-3 text-sm font-bold">
          ✅ {bloco.explicacao}
        </div>
      )}
    </Lousa>
  );
}

// --------------------------------------------------------------- erro comum

function ErroComum({
  bloco,
}: {
  bloco: Extract<LousaPTBloco, { tipo: "erroComum" }>;
}) {
  return (
    <Lousa>
      <Titulo>⚠️ {bloco.titulo}</Titulo>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 min-w-0 rounded-xl border-2 border-rose-400/50 bg-rose-500/10 p-3">
          <div className="text-[10px] font-black uppercase tracking-widest text-rose-300 mb-1">
            Erro comum
          </div>
          <p className="font-black line-through decoration-rose-400/70 leading-snug">
            {bloco.errado}
          </p>
          <p className="text-xs text-white/70 mt-2">{bloco.porqueErrado}</p>
        </div>
        <div className="flex-1 min-w-0 rounded-xl border-2 border-emerald-400/50 bg-emerald-500/10 p-3">
          <div className="text-[10px] font-black uppercase tracking-widest text-emerald-300 mb-1">
            Jeito certo
          </div>
          <p className="font-black leading-snug">{bloco.certo}</p>
          <p className="text-xs text-white/70 mt-2">{bloco.porqueCerto}</p>
        </div>
      </div>
    </Lousa>
  );
}
