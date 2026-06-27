import { useState } from "react";
import type { AulaDinamica } from "@/lib/groq-professor.functions";

function imgUrl(term: string, w = 800, h = 500) {
  // Free, no-auth illustrative image (Unsplash Source)
  const q = encodeURIComponent(term.trim());
  return `https://source.unsplash.com/${w}x${h}/?${q}`;
}

type Screen = keyof AulaDinamica["telas"];
const ORDER: Screen[] = [
  "missao",
  "exploracao",
  "explicacao",
  "passoAPasso",
  "exemploAplicado",
  "atividadeGuiada",
  "desafio",
  "revisao",
  "conclusao",
];

export function AulaDinamicaViewer({ aula }: { aula: AulaDinamica }) {
  const [i, setI] = useState(0);
  const screen = ORDER[i];
  const t = aula.telas[screen];

  return (
    <div className="mx-auto max-w-3xl p-6 space-y-5">
      <header>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          Tela {i + 1} de {ORDER.length}
        </p>
        <h1 className="text-2xl font-bold">{aula.titulo}</h1>
        <p className="text-sm text-muted-foreground italic">{aula.metafora}</p>
      </header>

      <article className="rounded-2xl border bg-card p-5 shadow-sm space-y-4">
        <h2 className="text-xl font-semibold">{t.titulo}</h2>

        {"termoBusca" in t && (
          <img
            src={imgUrl(t.termoBusca)}
            alt={t.titulo}
            className="w-full h-56 object-cover rounded-xl border"
            loading="lazy"
          />
        )}

        {screen === "missao" && <p>{(t as AulaDinamica["telas"]["missao"]).texto}</p>}

        {screen === "exploracao" && (
          <ExploracaoView data={t as AulaDinamica["telas"]["exploracao"]} />
        )}

        {screen === "explicacao" && (
          <div className="space-y-2">
            {(t as AulaDinamica["telas"]["explicacao"]).paragrafos.map((p, k) => (
              <p key={k}>{p}</p>
            ))}
          </div>
        )}

        {screen === "passoAPasso" && (
          <ol className="list-decimal list-inside space-y-2">
            {(t as AulaDinamica["telas"]["passoAPasso"]).passos.map((p, k) => (
              <li key={k}>{p}</li>
            ))}
          </ol>
        )}

        {screen === "exemploAplicado" && (
          <div className="space-y-2">
            <p className="font-medium">
              {(t as AulaDinamica["telas"]["exemploAplicado"]).enunciado}
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              {(t as AulaDinamica["telas"]["exemploAplicado"]).resolucao.map((r, k) => (
                <li key={k}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        {screen === "atividadeGuiada" && (
          <DesafioView data={t as AulaDinamica["telas"]["atividadeGuiada"]} />
        )}

        {screen === "desafio" && (
          <DesafioView data={t as AulaDinamica["telas"]["desafio"]} />
        )}

        {screen === "revisao" && (
          <ul className="list-disc list-inside space-y-1">
            {(t as AulaDinamica["telas"]["revisao"]).pontosChave.map((p, k) => (
              <li key={k}>{p}</li>
            ))}
          </ul>
        )}

        {screen === "conclusao" && (
          <p className="text-lg">
            {(t as AulaDinamica["telas"]["conclusao"]).mensagemFinal}
          </p>
        )}
      </article>

      <nav className="flex justify-between">
        <button
          className="px-4 py-2 rounded-lg border disabled:opacity-40"
          onClick={() => setI((v) => Math.max(0, v - 1))}
          disabled={i === 0}
        >
          ← Voltar
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-40"
          onClick={() => setI((v) => Math.min(ORDER.length - 1, v + 1))}
          disabled={i === ORDER.length - 1}
        >
          Próximo →
        </button>
      </nav>
    </div>
  );
}

function ExploracaoView({
  data,
}: {
  data: AulaDinamica["telas"]["exploracao"];
}) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      <p>{data.texto}</p>
      <p className="text-sm text-muted-foreground">
        Toque em uma figura para descobrir mais ✨
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {data.interativos.map((it, k) => (
          <button
            key={k}
            onClick={() => setActive(active === k ? null : k)}
            className={`group rounded-xl border overflow-hidden text-left transition hover:scale-[1.02] ${
              active === k ? "ring-2 ring-primary" : ""
            }`}
          >
            <img
              src={imgUrl(it.termoBusca, 400, 300)}
              alt={it.label}
              className="w-full h-24 object-cover"
              loading="lazy"
            />
            <div className="px-2 py-1 text-sm font-medium">{it.label}</div>
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="rounded-xl bg-muted p-3 text-sm">
          <strong>{data.interativos[active].label}:</strong>{" "}
          {data.interativos[active].explicacao}
        </div>
      )}
    </div>
  );
}

function DesafioView({
  data,
}: {
  data: AulaDinamica["telas"]["desafio"] | AulaDinamica["telas"]["atividadeGuiada"];
}) {
  const [pick, setPick] = useState<"A" | "B" | "C" | null>(null);
  const letters: Array<"A" | "B" | "C"> = ["A", "B", "C"];
  const enunciado = "enunciado" in data ? data.enunciado : data.pergunta;
  return (
    <div className="space-y-3">
      {"dica" in data && <p className="text-sm text-muted-foreground">Dica: {data.dica}</p>}
      <p className="font-medium">{enunciado}</p>
      <div className="space-y-2">
        {data.opcoes.map((op, k) => {
          const L = letters[k];
          const isPick = pick === L;
          const correct = pick && L === data.respostaCorreta;
          return (
            <button
              key={k}
              onClick={() => setPick(L)}
              className={`w-full text-left px-3 py-2 rounded-lg border transition ${
                isPick
                  ? L === data.respostaCorreta
                    ? "bg-green-100 border-green-500"
                    : "bg-red-100 border-red-500"
                  : "hover:bg-muted"
              }`}
            >
              {op}
            </button>
          );
        })}
      </div>
      {pick && (
        <div className="rounded-xl bg-muted p-3 text-sm">
          {pick === data.respostaCorreta ? "✅ Mandou bem! " : "🤔 Quase! "}
          {data.explicacaoResposta}
        </div>
      )}
    </div>
  );
}
