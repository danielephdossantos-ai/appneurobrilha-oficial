import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Palette, Music, Drama, Wind, Sparkles } from "lucide-react";
import { CURSO_ARTE_1ANO } from "@/escola-brilha/arte-1ano/registry";

export const Route = createFileRoute("/escola-brilha/arte-1ano/")({
  head: () => ({
    meta: [
      { title: "Estúdio Brilha — Arte · 1º Ano" },
      { name: "description", content: "Curso de Arte para o 1º Ano com Artes Visuais, Música, Dança, Teatro e Artes Integradas." },
      { property: "og:title", content: "Estúdio Brilha — Arte · 1º Ano" },
      { property: "og:description", content: "Cores, formas, música, teatro, dança e uma exposição digital ao longo do ano." },
    ],
  }),
  component: MapaArte,
});

const EIXOS = [
  { icon: Palette, cor: "#7C3AED", nome: "Artes Visuais" },
  { icon: Music, cor: "#A855F7", nome: "Música" },
  { icon: Wind, cor: "#7BA05B", nome: "Dança" },
  { icon: Drama, cor: "#E63946", nome: "Teatro" },
  { icon: Sparkles, cor: "#F4B740", nome: "Integradas" },
];

const TINTA = "#3B1D6E";

function MapaArte() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(circle at 20% 10%, #A855F725 0%, transparent 50%), radial-gradient(circle at 80% 90%, #A855F720 0%, transparent 50%), #F5F0FF",
      }}
    >
      <style>{`.arte-serif{font-family:'Nunito',system-ui,sans-serif}.arte-body{font-family:'Nunito',system-ui,sans-serif}`}</style>

      <header className="border-b-4" style={{ borderColor: TINTA, background: "#F5F0FFD9" }}>
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link to="/escola-brilha" className="h-10 w-10 rounded-full grid place-items-center border-2" style={{ background: "white", color: TINTA, borderColor: TINTA }} aria-label="Voltar">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: TINTA + "80" }}>
              Escola Brilha · SPEB 1.0
            </div>
            <h1 className="arte-serif text-2xl font-black" style={{ color: TINTA }}>🎨 Estúdio Brilha — Arte · 1º Ano</h1>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 arte-body">
        <div className="rounded-3xl p-5 mb-5 bg-white border-4" style={{ borderColor: TINTA }}>
          <p className="arte-serif text-lg" style={{ color: TINTA }}>
            Bem-vindo ao <strong>Estúdio Brilha</strong>. Aqui, arte não é só pintar — a gente <strong>pinta, canta, dança, dramatiza, observa a natureza e monta uma exposição</strong> ao longo do ano.
          </p>
          <div className="grid grid-cols-5 gap-2 mt-4">
            {EIXOS.map((e) => (
              <div key={e.nome} className="text-center">
                <div className="h-12 w-12 mx-auto rounded-full grid place-items-center text-white" style={{ background: e.cor }}>
                  <e.icon className="h-5 w-5" />
                </div>
                <div className="text-[10px] font-black mt-1" style={{ color: TINTA }}>{e.nome}</div>
              </div>
            ))}
          </div>
        </div>

        {CURSO_ARTE_1ANO.unidades.map((u) => (
          <section key={u.slug} className="mb-6">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="arte-serif text-4xl font-black" style={{ color: u.corPrincipal }}>{u.numero}</span>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: TINTA + "80" }}>Unidade {u.numero}</div>
                <h2 className="arte-serif text-xl font-black" style={{ color: TINTA }}>{u.emoji} {u.titulo}</h2>
                <div className="text-sm" style={{ color: TINTA + "99" }}>Projeto: <em>{u.projeto}</em></div>
              </div>
            </div>

            <div className="space-y-2">
              {u.aulas.map((a) => (
                <Link
                  key={a.slug}
                  to="/escola-brilha/arte-1ano/$unidade/$aula"
                  params={{ unidade: u.slug, aula: a.slug }}
                  className="flex items-center gap-3 rounded-2xl p-4 bg-white border-2 active:scale-[0.98]"
                  style={{ borderColor: TINTA + "20" }}
                >
                  <div className="h-11 w-11 rounded-full grid place-items-center text-white font-black" style={{ background: u.corPrincipal }}>
                    {a.numero}
                  </div>
                  <div className="flex-1">
                    <div className="arte-serif font-black text-lg leading-tight" style={{ color: TINTA }}>{a.titulo}</div>
                    <div className="text-xs" style={{ color: TINTA + "80" }}>{a.subtitulo}</div>
                  </div>
                  <span className="text-2xl">→</span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center text-xs mt-8" style={{ color: TINTA + "60" }}>
          Unidades 2–7 chegam em breve. Depois de validar a Unidade 1, propagamos o formato.
        </div>
      </main>
    </div>
  );
}
