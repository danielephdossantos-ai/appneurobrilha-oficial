/**
 * Renderizador A4 da apostila impressa (área do professor).
 * Tudo em preto no branco, sem dependência de cor, pronto para fotocópia.
 */

import type { Apostila, ApostilaBloco, ApostilaItemVisual, ApostilaPagina } from "./gerar-apostila";

function Linhas({ quantidade }: { quantidade: number }) {
  return (
    <div className="mt-3 space-y-6">
      {Array.from({ length: quantidade }).map((_, i) => (
        <div key={i} className="border-b border-slate-400" />
      ))}
    </div>
  );
}

function ImagemAtividade({ imagem }: { imagem: { url: string; legenda?: string } }) {
  return (
    <figure className="flex min-h-44 flex-col items-center justify-center gap-3 rounded-md border border-foreground/20 p-4 text-center">
      <img
        src={imagem.url}
        alt={imagem.legenda ?? ""}
        className="h-28 w-28 object-contain grayscale contrast-125 print:grayscale print:contrast-150"
      />
      {imagem.legenda && <figcaption className="text-[14pt] font-semibold">{imagem.legenda}</figcaption>}
    </figure>
  );
}

function ItemVisual({ item }: { item: ApostilaItemVisual }) {
  if ("texto" in item) {
    return (
      <div className="flex min-h-36 items-center justify-center rounded-md border border-foreground/20 p-4 text-center">
        <span className="text-[54pt] font-bold leading-none">{item.texto}</span>
      </div>
    );
  }
  return <ImagemAtividade imagem={item} />;
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
      {bloco.tipo === "escolha-visual" && (
        <div className="mt-6">
          <p className="max-w-[150mm] text-left text-[16pt] font-semibold leading-relaxed">{bloco.comando}</p>
          {bloco.modelo && (
            <div className="mt-8 flex flex-col items-center gap-3 border-b border-foreground/20 pb-7">
              <span className="text-[11pt] font-semibold uppercase">Modelo</span>
              <div className="w-48"><ImagemAtividade imagem={bloco.modelo} /></div>
            </div>
          )}
          <div className="mt-8 grid grid-cols-2 gap-8">
            {bloco.imagens.map((imagem, index) => <ImagemAtividade key={`${imagem.url}-${index}`} imagem={imagem} />)}
          </div>
        </div>
      )}
      {bloco.tipo === "ligar-imagens" && (
        <div className="mt-6">
          <p className="max-w-[150mm] text-left text-[16pt] font-semibold leading-relaxed">{bloco.comando}</p>
          <div className="mt-10 grid grid-cols-[1fr_70mm_1fr] items-center gap-y-14">
            {bloco.esquerda.map((item, index) => (
              <div className="contents" key={`${"texto" in item ? item.texto : item.url}-${index}`}>
                <ItemVisual item={item} />
                <div className="border-b-2 border-dashed border-foreground/40" />
                {bloco.direita[index] ? <ItemVisual item={bloco.direita[index]} /> : <div />}
              </div>
            ))}
          </div>
        </div>
      )}
      {bloco.tipo === "tracado" && (
        <div className="mt-6">
          <p className="max-w-[150mm] text-left text-[16pt] font-semibold leading-relaxed">{bloco.comando}</p>
          <div className="mt-10 space-y-12">
            {bloco.itens.map((item) => (
              <div key={item} className="grid grid-cols-[40mm_1fr] items-end gap-8">
                <span className="select-none border-b-2 border-dashed border-foreground/40 pb-2 text-center text-[64pt] font-bold text-foreground/70 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1.5px_currentColor]">
                  {item}
                </span>
                <div className="h-20 border-b-2 border-foreground/60" />
              </div>
            ))}
          </div>
        </div>
      )}
      {bloco.tipo === "marcar-som" && (
        <div className="mt-6">
          <p className="max-w-[150mm] text-left text-[16pt] font-semibold leading-relaxed">{bloco.comando}</p>
          <div className="mt-8 space-y-7">
            {bloco.itens.map((item, index) => (
              <div key={`${item.imagem.url}-${index}`} className="grid grid-cols-[38mm_1fr] items-center gap-6 border-b border-foreground/20 pb-6">
                <ImagemAtividade imagem={item.imagem} />
                <div className="grid grid-cols-3 gap-4">
                  {item.opcoes.map((opcao) => (
                    <div key={opcao} className="flex min-h-16 items-center justify-center gap-3 rounded-md border-2 border-foreground/60 text-[26pt] font-bold">
                      <span className="h-6 w-6 border-2 border-foreground" />
                      {opcao}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {bloco.tipo === "marcar-figura" && (
        <div className="mt-6">
          <p className="max-w-[150mm] text-left text-[16pt] font-semibold leading-relaxed">{bloco.comando}</p>
          <div className="mt-8 space-y-8">
            {bloco.questoes.map((questao, index) => (
              <div key={`${questao.pergunta}-${index}`} className="break-inside-avoid">
                <p className="text-[15pt] font-semibold">{questao.pergunta}</p>
                <div className="mt-4 grid grid-cols-3 gap-5">
                  {questao.imagens.map((imagem, i) => (
                    <div key={`${imagem.url}-${i}`} className="relative">
                      <span className="absolute left-3 top-3 z-10 h-6 w-6 border-2 border-foreground bg-background" />
                      <ImagemAtividade imagem={imagem} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {bloco.tipo === "procurar-letras" && (
        <div className="mt-6">
          <p className="max-w-[150mm] text-left text-[16pt] font-semibold leading-relaxed">{bloco.comando}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-[15pt] font-bold">
            {bloco.alvos.map((alvo) => <span key={alvo} className="rounded-md border-2 border-foreground px-4 py-2">{alvo}</span>)}
          </div>
          <div className="mt-8 grid grid-cols-4 gap-5">
            {bloco.letras.map((letra, index) => (
              <div key={`${letra}-${index}`} className="flex aspect-square items-center justify-center rounded-full border-2 border-foreground/70 text-[30pt] font-bold">
                {letra}
              </div>
            ))}
          </div>
        </div>
      )}
      {bloco.tipo === "colorir-inicial" && (
        <div className="mt-6">
          <p className="max-w-[150mm] text-left text-[16pt] font-semibold leading-relaxed">{bloco.comando}</p>
          <div className="mt-8 grid grid-cols-2 gap-7">
            {bloco.itens.map((item, index) => (
              <div key={`${item.imagem.url}-${index}`} className="break-inside-avoid rounded-md border border-foreground/30 p-4">
                <ImagemAtividade imagem={item.imagem} />
                <div className="mt-4 flex items-center gap-3 text-[15pt] font-semibold">
                  Primeira letra:
                  <span className="inline-flex h-14 w-14 items-center justify-center border-2 border-foreground text-[28pt] font-bold">{item.inicial}</span>
                  <span className="h-14 flex-1 border-b-2 border-foreground/60" />
                </div>
              </div>
            ))}
          </div>
        </div>
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
  const infantil = pagina.etiqueta === "Folha do estudante";
  return (
    <article
      data-etiqueta={pagina.etiqueta}
      className="apostila-folha mx-auto flex min-h-[297mm] w-full max-w-[210mm] flex-col bg-background p-[18mm] text-foreground shadow-sm ring-1 ring-border print:bg-background print:shadow-none print:ring-0"
    >
      {infantil ? (
        <header className="grid grid-cols-[1fr_42mm] gap-8 border-b border-foreground/25 pb-3 text-[11pt]">
          <span>Nome: __________________________________</span>
          <span>Data: ____/____/______</span>
        </header>
      ) : (
        <header className="flex items-baseline justify-between border-b-2 border-foreground pb-2">
          <p className="text-[10pt] font-black uppercase">{pagina.etiqueta}</p>
          <p className="font-mono text-[10pt] font-bold">
            {apostila.codigo} · {apostila.ano} · {apostila.disciplina}
          </p>
        </header>
      )}
      <h2 className={`${infantil ? "mt-10 text-[26pt] font-semibold" : "mt-4 text-[19pt] font-black"} leading-tight`}>{pagina.titulo}</h2>
      {pagina.subtitulo && <p className="mt-1 text-[11pt] font-semibold">{pagina.subtitulo}</p>}
      <div className="flex-1">
        {pagina.blocos.map((b, i) => (
          <Bloco key={i} bloco={b} />
        ))}
      </div>
      {!infantil && (
        <footer className="mt-6 flex items-center justify-between border-t border-foreground/40 pt-2 text-[9pt] font-bold uppercase">
          <span>NeuroBrilha Kids · uso pedagógico</span>
          <span>{apostila.codigo}</span>
        </footer>
      )}
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
