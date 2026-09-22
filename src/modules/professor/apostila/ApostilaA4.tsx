/**
 * Renderizador A4 da apostila impressa (área do professor).
 * Tudo em preto no branco, sem dependência de cor, pronto para fotocópia.
 */

import type { Apostila, ApostilaBloco, ApostilaPagina } from "./gerar-apostila";

function Linhas({ quantidade }: { quantidade: number }) {
  return (
    <div className="mt-3 space-y-6">
      {Array.from({ length: quantidade }).map((_, i) => (
        <div key={i} className="border-b border-slate-400" />
      ))}
    </div>
  );
}

function Bloco({ bloco }: { bloco: ApostilaBloco }) {
  const titulo = "titulo" in bloco && bloco.titulo ? bloco.titulo : null;
  return (
    <section className="mt-5 break-inside-avoid">
      {titulo && (
        <h3 className="text-[13pt] font-black uppercase tracking-wide text-slate-900">{titulo}</h3>
      )}
      {bloco.tipo === "texto" && (
        <p className="mt-2 whitespace-pre-wrap text-[12pt] leading-relaxed">{bloco.texto}</p>
      )}
      {bloco.tipo === "aviso" && (
        <p className="mt-2 rounded-lg border-2 border-slate-800 p-3 text-[11.5pt] leading-relaxed">
          {bloco.texto}
        </p>
      )}
      {bloco.tipo === "lista" && (
        <ul className="mt-2 list-disc space-y-1.5 pl-6 text-[12pt] leading-relaxed">
          {bloco.itens.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      )}
      {bloco.tipo === "passos" && (
        <ol className="mt-2 list-decimal space-y-1.5 pl-6 text-[12pt] leading-relaxed">
          {bloco.passos.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ol>
      )}
      {bloco.tipo === "imagens" && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {bloco.imagens.map((img, i) => (
            <figure key={i} className="rounded-lg border border-slate-400 p-2 text-center">
              <img src={img.url} alt={img.legenda ?? ""} className="mx-auto h-20 w-20 object-contain" />
              <figcaption className="mt-1 text-[9pt] font-bold uppercase">
                {img.legenda ?? ""}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
      {bloco.tipo === "contagem" && (
        <div className="mt-3 rounded-lg border-2 border-slate-800 p-3">
          <p className="text-[12pt] font-bold">{bloco.rotulo}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {Array.from({ length: bloco.quantidade }).map((_, i) => (
              <img key={i} src={bloco.imagem} alt="" className="h-16 w-16 object-contain" />
            ))}
          </div>
          <div className="mt-3 flex items-center gap-3 text-[12pt] font-bold">
            Resposta:
            <span className="inline-block h-10 w-24 border-2 border-slate-800" />
          </div>
        </div>
      )}
      {bloco.tipo === "linhas" && (
        <>
          <p className="mt-2 text-[12pt] font-semibold leading-relaxed">{bloco.enunciado}</p>
          <Linhas quantidade={bloco.linhas} />
        </>
      )}
      {bloco.tipo === "alternativas" && (
        <ol className="mt-2 space-y-4">
          {bloco.questoes.map((q, i) => (
            <li key={i} className="break-inside-avoid">
              <p className="text-[12pt] font-semibold">
                {i + 1}. {q.enunciado}
              </p>
              <ul className="mt-2 space-y-1.5 pl-2 text-[12pt]">
                {q.opcoes.map((o, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="inline-block h-4 w-4 shrink-0 border-2 border-slate-800" />
                    {o}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

function Folha({ pagina, apostila }: { pagina: ApostilaPagina; apostila: Apostila }) {
  return (
    <article
      data-etiqueta={pagina.etiqueta}
      className="apostila-folha mx-auto flex w-full max-w-[210mm] flex-col bg-white p-[14mm] text-slate-900 shadow-sm ring-1 ring-slate-200 print:shadow-none print:ring-0"
    >
      <header className="flex items-baseline justify-between border-b-2 border-slate-800 pb-2">
        <p className="text-[10pt] font-black uppercase tracking-widest">{pagina.etiqueta}</p>
        <p className="font-mono text-[10pt] font-bold">
          {apostila.codigo} · {apostila.ano} · {apostila.disciplina}
        </p>
      </header>
      <h2 className="mt-4 text-[19pt] font-black leading-tight">{pagina.titulo}</h2>
      {pagina.subtitulo && <p className="mt-1 text-[11pt] font-semibold">{pagina.subtitulo}</p>}
      <div className="flex-1">
        {pagina.blocos.map((b, i) => (
          <Bloco key={i} bloco={b} />
        ))}
      </div>
      <footer className="mt-6 flex items-center justify-between border-t border-slate-400 pt-2 text-[9pt] font-bold uppercase tracking-wider">
        <span>NeuroBrilha Kids · uso pedagógico</span>
        <span>{apostila.codigo}</span>
      </footer>
    </article>
  );
}

export function ApostilaA4({
  apostila,
  filtro,
}: {
  apostila: Apostila;
  filtro: "tudo" | "professor" | "estudante" | "familia";
}) {
  const paginas = apostila.paginas.filter((p) => {
    if (filtro === "tudo") return true;
    if (filtro === "professor") return p.etiqueta === "Guia do professor" || p.etiqueta === "Gabarito";
    if (filtro === "estudante") return p.etiqueta === "Folha do estudante";
    return p.etiqueta === "Carta para a família";
  });
  return (
    <div className="apostila space-y-6 print:space-y-0">
      <style>{`
        @page { size: A4; margin: 0; }
        @media print {
          .apostila-folha { break-after: page; min-height: 297mm; }
          .apostila-folha:last-child { break-after: auto; }
        }
      `}</style>
      {paginas.map((p, i) => (
        <Folha key={i} pagina={p} apostila={apostila} />
      ))}
    </div>
  );
}
