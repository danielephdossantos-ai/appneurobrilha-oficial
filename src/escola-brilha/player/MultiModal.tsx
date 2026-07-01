import { useMemo, useState, useRef } from "react";
import { motion, Reorder } from "framer-motion";
import {
  Image as ImageIcon,
  Volume2,
  Sparkles,
  MousePointerClick,
  ListOrdered,
  Link2,
  Palette,
  Puzzle,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { Secao } from "./blocos/Secao";
import type { Aula } from "../types";

/**
 * MultiModal — renderiza mídias (imagem/áudio/animação) e mini-jogos
 * interativos (arrastar, ordenar, ligar, colorir, montar) definidos na
 * própria aula. Objetivo: atender diferentes estilos de aprendizagem
 * (visual, auditivo, cinestésico, lógico).
 *
 * Silencioso quando a aula não define `midias` nem `interativas`.
 */
export function MultiModal({ aula }: { aula: Aula }) {
  if (!aula.midias?.length && !aula.interativas?.length) return null;
  return (
    <div className="space-y-4">
      {aula.midias?.map((m, i) => <Midia key={`m${i}`} midia={m} />)}
      {aula.interativas?.map((jogo, i) => <Interativa key={`j${i}`} jogo={jogo} />)}
    </div>
  );
}

/* ------------------------------ MÍDIAS ------------------------------ */

function Midia({ midia }: { midia: NonNullable<Aula["midias"]>[number] }) {
  if (midia.tipo === "imagem") {
    return (
      <Secao icon={ImageIcon} rotulo="Imagem" cor="#A78BFA">
        <img
          src={midia.url}
          alt={midia.alt}
          className="w-full rounded-2xl border-2 border-white/20"
          loading="lazy"
        />
        {midia.legenda && (
          <p className="mt-2 text-sm text-white/70 italic">{midia.legenda}</p>
        )}
      </Secao>
    );
  }
  if (midia.tipo === "audio") {
    return (
      <Secao icon={Volume2} rotulo="Áudio" cor="#4C9EFF">
        <p className="font-black mb-2">{midia.titulo}</p>
        <audio controls src={midia.url} className="w-full" />
      </Secao>
    );
  }
  return (
    <Secao icon={Sparkles} rotulo="Animação" cor="#FFC93C">
      <div className="flex justify-center gap-3 text-5xl py-3">
        {midia.emojis.map((e, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -8, 0], rotate: [0, -6, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.15 }}
          >
            {e}
          </motion.span>
        ))}
      </div>
      {midia.legenda && (
        <p className="text-center text-sm text-white/70 italic">{midia.legenda}</p>
      )}
    </Secao>
  );
}

/* --------------------------- INTERATIVAS --------------------------- */

function Interativa({ jogo }: { jogo: NonNullable<Aula["interativas"]>[number] }) {
  switch (jogo.tipo) {
    case "arrastar":
      return <JogoArrastar jogo={jogo} />;
    case "ordenar":
      return <JogoOrdenar jogo={jogo} />;
    case "ligar":
      return <JogoLigar jogo={jogo} />;
    case "colorir":
      return <JogoColorir jogo={jogo} />;
    case "montar":
      return <JogoMontar jogo={jogo} />;
  }
}

function Status({ ok, texto }: { ok: boolean; texto: string }) {
  return (
    <div
      className={`mt-3 flex items-center gap-2 rounded-xl p-2 border ${
        ok
          ? "bg-[#22C55E]/15 border-[#22C55E]/30 text-[#86EFAC]"
          : "bg-[#EF4444]/15 border-[#EF4444]/30 text-[#FCA5A5]"
      }`}
    >
      <CheckCircle2 className="h-4 w-4" />
      <span className="text-sm font-black">{texto}</span>
    </div>
  );
}

/* --- Arrastar --- */
function JogoArrastar({
  jogo,
}: {
  jogo: Extract<NonNullable<Aula["interativas"]>[number], { tipo: "arrastar" }>;
}) {
  const alvos = useMemo(
    () => Array.from(new Set(jogo.pares.map((p) => p.alvo))),
    [jogo],
  );
  const [drops, setDrops] = useState<Record<string, string | null>>(
    Object.fromEntries(jogo.pares.map((p) => [p.item, null])),
  );
  const [checked, setChecked] = useState(false);
  const dragged = useRef<string | null>(null);

  const conferir = () => setChecked(true);
  const reset = () => {
    setDrops(Object.fromEntries(jogo.pares.map((p) => [p.item, null])));
    setChecked(false);
  };
  const acertos = jogo.pares.filter(
    (p) => drops[p.item] === p.alvo,
  ).length;

  return (
    <Secao icon={MousePointerClick} rotulo="Arraste" cor="#F472B6">
      <p className="font-black mb-1">{jogo.titulo}</p>
      <p className="text-sm text-white/70 mb-3">{jogo.instrucao}</p>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {alvos.map((alvo) => (
          <div
            key={alvo}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              if (!dragged.current) return;
              setDrops((d) => ({ ...d, [dragged.current!]: alvo }));
              dragged.current = null;
            }}
            className="rounded-2xl border-2 border-dashed border-white/30 bg-white/5 p-3 min-h-[72px]"
          >
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">
              {alvo}
            </div>
            <div className="flex flex-wrap gap-1">
              {Object.entries(drops)
                .filter(([, a]) => a === alvo)
                .map(([item]) => (
                  <span
                    key={item}
                    onClick={() =>
                      setDrops((d) => ({ ...d, [item]: null }))
                    }
                    className="px-2 py-1 rounded-lg bg-[#F472B6] text-[#0d1f55] text-sm font-black cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {Object.entries(drops)
          .filter(([, a]) => a === null)
          .map(([item]) => (
            <div
              key={item}
              draggable
              onDragStart={() => (dragged.current = item)}
              onClick={() => {
                // fallback mobile: seleciona o primeiro alvo vazio
                const alvo = alvos[0];
                setDrops((d) => ({ ...d, [item]: alvo }));
              }}
              className="px-3 py-2 rounded-xl bg-white text-[#0d1f55] font-black cursor-grab active:cursor-grabbing shadow"
            >
              {item}
            </div>
          ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={conferir}
          className="flex-1 h-10 rounded-xl bg-[#F472B6] text-[#0d1f55] font-black"
        >
          Conferir
        </button>
        <button
          onClick={reset}
          className="h-10 px-3 rounded-xl bg-white/15 grid place-items-center"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      {checked && (
        <Status
          ok={acertos === jogo.pares.length}
          texto={`${acertos} / ${jogo.pares.length} corretos`}
        />
      )}
    </Secao>
  );
}

/* --- Ordenar --- */
function JogoOrdenar({
  jogo,
}: {
  jogo: Extract<NonNullable<Aula["interativas"]>[number], { tipo: "ordenar" }>;
}) {
  const embaralhados = useMemo(
    () => [...jogo.itens].sort(() => Math.random() - 0.5),
    [jogo],
  );
  const [ordem, setOrdem] = useState(embaralhados);
  const [checked, setChecked] = useState(false);
  const ok = ordem.every((v, i) => v === jogo.itens[i]);
  return (
    <Secao icon={ListOrdered} rotulo="Ordene" cor="#34D399">
      <p className="font-black mb-1">{jogo.titulo}</p>
      <p className="text-sm text-white/70 mb-3">{jogo.instrucao}</p>
      <Reorder.Group axis="y" values={ordem} onReorder={setOrdem} className="space-y-2">
        {ordem.map((v) => (
          <Reorder.Item
            key={v}
            value={v}
            className="rounded-xl bg-white text-[#0d1f55] font-black px-3 py-3 cursor-grab active:cursor-grabbing shadow"
          >
            ≡ {v}
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <button
        onClick={() => setChecked(true)}
        className="mt-3 w-full h-10 rounded-xl bg-[#34D399] text-[#0d1f55] font-black"
      >
        Conferir ordem
      </button>
      {checked && (
        <Status ok={ok} texto={ok ? "Ordem correta!" : "Ainda não está certa"} />
      )}
    </Secao>
  );
}

/* --- Ligar --- */
function JogoLigar({
  jogo,
}: {
  jogo: Extract<NonNullable<Aula["interativas"]>[number], { tipo: "ligar" }>;
}) {
  const colB = useMemo(
    () => [...jogo.pares.map((p) => p.b)].sort(() => Math.random() - 0.5),
    [jogo],
  );
  const [selA, setSelA] = useState<string | null>(null);
  const [ligacoes, setLigacoes] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const clicarA = (a: string) => setSelA(a);
  const clicarB = (b: string) => {
    if (!selA) return;
    setLigacoes((l) => ({ ...l, [selA]: b }));
    setSelA(null);
  };
  const acertos = jogo.pares.filter((p) => ligacoes[p.a] === p.b).length;

  return (
    <Secao icon={Link2} rotulo="Ligue" cor="#60A5FA">
      <p className="font-black mb-1">{jogo.titulo}</p>
      <p className="text-sm text-white/70 mb-3">{jogo.instrucao}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {jogo.pares.map((p) => {
            const ligado = ligacoes[p.a];
            const sel = selA === p.a;
            return (
              <button
                key={p.a}
                onClick={() => clicarA(p.a)}
                className={`w-full text-left px-3 py-2 rounded-xl font-black ${
                  sel
                    ? "bg-[#FBBF24] text-[#0d1f55]"
                    : ligado
                      ? "bg-white/25 text-white"
                      : "bg-white text-[#0d1f55]"
                }`}
              >
                {p.a}
                {ligado && (
                  <span className="ml-2 text-xs text-white/70">→ {ligado}</span>
                )}
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {colB.map((b) => (
            <button
              key={b}
              onClick={() => clicarB(b)}
              className="w-full text-left px-3 py-2 rounded-xl bg-white/20 text-white font-black"
            >
              {b}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => setChecked(true)}
        className="mt-3 w-full h-10 rounded-xl bg-[#60A5FA] text-[#0d1f55] font-black"
      >
        Conferir
      </button>
      {checked && (
        <Status
          ok={acertos === jogo.pares.length}
          texto={`${acertos} / ${jogo.pares.length} ligações certas`}
        />
      )}
    </Secao>
  );
}

/* --- Colorir --- */
function JogoColorir({
  jogo,
}: {
  jogo: Extract<NonNullable<Aula["interativas"]>[number], { tipo: "colorir" }>;
}) {
  const [cores, setCores] = useState<Record<string, string | null>>(
    Object.fromEntries(jogo.regioes.map((r) => [r.nome, null])),
  );
  const [ativa, setAtiva] = useState<string>(jogo.paleta[0]);
  const [checked, setChecked] = useState(false);
  const acertos = jogo.regioes.filter(
    (r) => cores[r.nome] === r.corCorreta,
  ).length;
  return (
    <Secao icon={Palette} rotulo="Colorir" cor="#FF8A4C">
      <p className="font-black mb-1">{jogo.titulo}</p>
      <p className="text-sm text-white/70 mb-3">{jogo.instrucao}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {jogo.paleta.map((c) => (
          <button
            key={c}
            onClick={() => setAtiva(c)}
            style={{ background: c }}
            className={`h-9 w-9 rounded-full border-4 ${
              ativa === c ? "border-white" : "border-white/30"
            }`}
            aria-label={`cor ${c}`}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {jogo.regioes.map((r) => (
          <button
            key={r.nome}
            onClick={() => setCores((s) => ({ ...s, [r.nome]: ativa }))}
            style={{ background: cores[r.nome] ?? "rgba(255,255,255,0.1)" }}
            className="rounded-2xl border-2 border-white/30 p-4 min-h-[70px] font-black text-[#0d1f55] bg-white/10"
          >
            {r.nome}
          </button>
        ))}
      </div>
      <button
        onClick={() => setChecked(true)}
        className="mt-3 w-full h-10 rounded-xl bg-[#FF8A4C] text-[#0d1f55] font-black"
      >
        Conferir cores
      </button>
      {checked && (
        <Status
          ok={acertos === jogo.regioes.length}
          texto={`${acertos} / ${jogo.regioes.length} regiões corretas`}
        />
      )}
    </Secao>
  );
}

/* --- Montar --- */
function JogoMontar({
  jogo,
}: {
  jogo: Extract<NonNullable<Aula["interativas"]>[number], { tipo: "montar" }>;
}) {
  const disponiveis = useMemo(
    () => [...jogo.pecas].sort(() => Math.random() - 0.5),
    [jogo],
  );
  const [restam, setRestam] = useState(disponiveis);
  const [montado, setMontado] = useState<string[]>([]);
  const escolher = (p: string) => {
    setMontado((m) => [...m, p]);
    setRestam((r) => r.filter((x) => x !== p));
  };
  const desfazer = () => {
    const ultimo = montado[montado.length - 1];
    if (!ultimo) return;
    setMontado((m) => m.slice(0, -1));
    setRestam((r) => [...r, ultimo]);
  };
  const completo = montado.length === jogo.pecas.length;
  const correto = completo && montado.every((v, i) => v === jogo.pecas[i]);
  return (
    <Secao icon={Puzzle} rotulo="Montar" cor="#A78BFA">
      <p className="font-black mb-1">{jogo.titulo}</p>
      <p className="text-sm text-white/70 mb-3">{jogo.instrucao}</p>
      <div className="min-h-[60px] rounded-2xl bg-white/5 border-2 border-dashed border-white/30 p-2 flex flex-wrap gap-2 mb-3">
        {montado.map((p, i) => (
          <span
            key={i}
            className="px-3 py-2 rounded-xl bg-[#A78BFA] text-[#0d1f55] font-black"
          >
            {i + 1}. {p}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {restam.map((p) => (
          <button
            key={p}
            onClick={() => escolher(p)}
            className="px-3 py-2 rounded-xl bg-white text-[#0d1f55] font-black"
          >
            {p}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={desfazer}
          className="h-10 px-3 rounded-xl bg-white/15 font-black text-white"
        >
          Voltar
        </button>
        {completo && (
          <Status
            ok={correto}
            texto={correto ? "Montagem correta!" : "Ordem incorreta — tente de novo"}
          />
        )}
      </div>
    </Secao>
  );
}
