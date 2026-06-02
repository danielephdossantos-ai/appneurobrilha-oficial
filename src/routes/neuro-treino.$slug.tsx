import { createFileRoute, Link, useNavigate, Navigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { AlertCircle, ArrowLeft, ChevronRight, RotateCcw, Sparkles } from "lucide-react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { toast } from "sonner";
import { CATEGORIAS, VARIATIONS, type CategoriaSlug } from "@/data/neuro-treino/variations";
import { useHiperfoco } from "@/context/HiperfocoContext";
import { applyHiperfoco, pickElemento, pipFraseAcerto, pipFraseIncentivo } from "@/data/hiperfocos";

export const Route = createFileRoute("/neuro-treino/$slug")({
  component: NeuroAtividade,
});

function NeuroAtividade() {
  const { slug } = Route.useParams() as { slug: CategoriaSlug };
  const navigate = useNavigate();
  const { hiperfoco } = useHiperfoco();

  const [index, setIndex] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Gate: sem hiperfoco selecionado → manda para a tela de configuração
  // Usamos useEffect para evitar renderização condicional de hooks (Navigate é um componente, mas por segurança)
  if (!hiperfoco) {
    return <Navigate to="/neuro-treino/configurar" search={{ next: slug }} />;
  }

  const meta = CATEGORIAS[slug];
  const vars = VARIATIONS[slug];

  useEffect(() => {
    // Simula carregamento do banco de dados/Supabase
    // Já temos os dados localmente em VARIATIONS, mas o usuário pediu lógica de carregamento e tratamento de erro
    try {
      console.log(`Buscando atividades para categoria: ${slug} com hiperfoco: ${hiperfoco.label}`);
      
      if (!meta || !vars) {
        throw new Error(`Dados não encontrados para a categoria: ${slug}`);
      }

      // Simulamos um delay de rede para mostrar o loading
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } catch (err: any) {
      console.error("Erro ao carregar atividade Neuro-Treino:", err);
      setError(err.message || "Falha ao carregar atividade");
      setIsLoading(false);
    }
  }, [slug, meta, vars, hiperfoco]);

  if (isLoading) {
    return (
      <Shell>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mb-4" />
          <h2 className="text-xl font-bold text-muted-foreground">Preparando treino personalizado...</h2>
          <p className="text-sm text-muted-foreground mt-2">Aplicando hiperfoco: {hiperfoco.emoji} {hiperfoco.label}</p>
        </div>
      </Shell>
    );
  }

  if (error || !meta || !vars) {
    return (
      <Shell>
        <Card className="text-center p-8">
          <div className="bg-destructive/10 text-destructive rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <AlertCircle size={32} />
          </div>
          <h2 className="text-2xl font-extrabold mb-2">Ops! Algo deu errado</h2>
          <p className="text-muted-foreground mb-6">{error || "Atividade não encontrada no banco de dados."}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => window.location.reload()} 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <RotateCcw size={18} /> Tentar Novamente
            </button>
            <button 
              onClick={() => navigate({ to: "/neuro-treino" })} 
              className="bg-muted text-muted-foreground px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <ArrowLeft size={18} /> Voltar ao Painel
            </button>
          </div>
        </Card>
      </Shell>
    );
  }

  const variation = vars[index % vars.length];
  const seed = `${slug}:${variation.id}`;
  const elemento = pickElemento(hiperfoco, seed);
  const instrucaoTematica = applyHiperfoco(meta.instrucao, hiperfoco, seed);

  const onConcluir = (correto: boolean) => {
    if (correto) {
      setAcertos((a) => a + 1);
      toast.success(pipFraseAcerto(hiperfoco));
    } else {
      toast(pipFraseIncentivo(hiperfoco));
    }
    setTimeout(() => setIndex((i) => i + 1), 600);
  };

  return (
    <Shell>
      <div className="flex items-center justify-between gap-3 mb-2">
        <Link to="/neuro-treino" className="flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> Voltar
        </Link>
        <Link
          to="/neuro-treino/configurar"
          search={{ next: slug }}
          className="flex items-center gap-1 text-xs font-bold rounded-full bg-primary/10 border border-primary/30 px-3 py-1 hover:bg-primary/20"
        >
          {hiperfoco.emoji} Hiperfoco: {hiperfoco.label} <span className="text-primary">· trocar</span>
        </Link>
      </div>
      <PageHeader emoji={meta.emoji} title={meta.nome} subtitle={instrucaoTematica} />

      <div className="flex items-center justify-between mb-4 text-sm font-bold">
        <span className="text-muted-foreground">Exercício {(index % vars.length) + 1} de {vars.length}</span>
        <span className="text-success">⭐ {acertos}</span>
      </div>

      <div className="mb-3 rounded-2xl bg-card border-2 border-dashed border-primary/30 px-4 py-2 text-sm text-center">
        <span className="font-bold text-primary">{hiperfoco.emoji} {elemento}</span>
        <span className="text-muted-foreground"> está aqui treinando com você!</span>
      </div>

      <Card className={`bg-gradient-to-br ${meta.cor} border-2`}>
        <MechanicRenderer slug={slug} variation={variation} onConcluir={onConcluir} key={variation.id} />
      </Card>

      <div className="mt-4 flex justify-end">
        <button onClick={() => setIndex((i)=>i+1)} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted font-bold hover:bg-muted/70">
          Pular <ChevronRight size={16} />
        </button>
      </div>
    </Shell>
  );
}


// ====================================================================
// Renderizador — escolhe a mecânica única conforme a categoria
// ====================================================================
function MechanicRenderer({ slug, variation, onConcluir }: { slug: CategoriaSlug; variation: any; onConcluir: (c:boolean)=>void }) {
  switch (slug) {
    case "sons-iniciais": return <SonsIniciais p={variation.payload} onDone={onConcluir} />;
    case "motorzinho-dos-sons": return <Motorzinho p={variation.payload} onDone={onConcluir} />;
    case "rimas": return <Rimas p={variation.payload} onDone={onConcluir} />;
    case "pedacinhos-da-palavra": return <Pedacinhos p={variation.payload} onDone={onConcluir} />;
    case "onde-esta": return <OndeEsta p={variation.payload} onDone={onConcluir} />;
    case "sequencia-e-padrao": return <SequenciaPadrao p={variation.payload} onDone={onConcluir} />;
    case "cade-o-par": return <CadeOPar p={variation.payload} onDone={onConcluir} />;
    case "foco-total": return <FocoTotal p={variation.payload} onDone={onConcluir} />;
    case "labirinto-do-som": return <LabirintoSom p={variation.payload} onDone={onConcluir} />;
    case "foco-sustentado": return <FocoSustentado p={variation.payload} onDone={onConcluir} />;
    case "rastreamento-sacadico": return <Sacadico p={variation.payload} onDone={onConcluir} />;
    case "mosaico-de-formas": return <Mosaico p={variation.payload} onDone={onConcluir} />;
    case "sequencia-de-cores": return <SequenciaCores p={variation.payload} onDone={onConcluir} />;
    case "simetria": return <Simetria p={variation.payload} onDone={onConcluir} />;
    case "decoracao-criativa": return <Decoracao p={variation.payload} onDone={onConcluir} />;
    case "onomatopeias-animadas": return <Onomatopeias p={variation.payload} onDone={onConcluir} />;
    case "ritmo-e-sopro": return <RitmoSopro p={variation.payload} onDone={onConcluir} />;
    case "paromatopeias-corpo": return <SonsCorpo p={variation.payload} onDone={onConcluir} />;
    case "tracado-letras": return <TracadoLetras p={variation.payload} onDone={onConcluir} />;
    case "caminho-dos-pontos": return <CaminhoPontos p={variation.payload} onDone={onConcluir} />;
    case "labirinto-precisao": return <LabirintoPrecisao p={variation.payload} onDone={onConcluir} />;
    case "triagem-categorias": return <TriagemCategorias p={variation.payload} onDone={onConcluir} />;
    case "expressao-emocao": return <ExpressaoEmocao p={variation.payload} onDone={onConcluir} />;
  }
}

// ============== 1. Sons Iniciais ==============
function SonsIniciais({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="text-7xl font-black text-primary mb-6">{p.letra}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((o:any, i:number) => (
          <button key={i} onClick={()=>onDone(o.nome === p.correctName)} className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary hover:scale-105 transition-all">
            <div className="text-5xl mb-2">{o.emoji}</div>
            <div className="font-bold text-sm">{o.nome}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============== 2. Motorzinho dos Sons ==============
function Motorzinho({ p, onDone }: any) {
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    if (holding) {
      const start = Date.now();
      ref.current = window.setInterval(() => {
        const pct = Math.min(100, ((Date.now() - start) / (p.holdSeconds * 1000)) * 100);
        setProgress(pct);
        if (pct >= 100) { window.clearInterval(ref.current!); onDone(true); }
      }, 50);
    } else if (ref.current) window.clearInterval(ref.current);
    return () => { if (ref.current) window.clearInterval(ref.current); };
  }, [holding]);
  return (
    <div className="text-center">
      <div className="text-8xl font-black text-coral mb-2">{p.fonema}</div>
      <div className="text-sm text-muted-foreground mb-4">Pista: {p.pista}</div>
      <div className="relative h-6 bg-muted rounded-full overflow-hidden mb-4">
        <div className="h-full bg-gradient-to-r from-coral to-sun transition-all" style={{ width: `${progress}%` }} />
        <div className="absolute top-0 text-2xl transition-all" style={{ left: `${progress}%`, transform: "translateX(-50%) translateY(-30%)" }}>🚂</div>
      </div>
      <button onMouseDown={()=>setHolding(true)} onMouseUp={()=>setHolding(false)} onTouchStart={()=>setHolding(true)} onTouchEnd={()=>setHolding(false)} className="bg-coral text-white px-12 py-6 rounded-2xl font-black text-xl shadow-lg active:scale-95">
        SEGURE AQUI
      </button>
    </div>
  );
}

// ============== 3. Rimas ==============
function Rimas({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Que palavra rima com</div>
      <div className="text-5xl font-black text-coral mb-6">{p.palavra}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {p.options.map((o:string, i:number) => (
          <button key={i} onClick={()=>onDone(o === p.correta)} className="bg-card border-2 border-border rounded-xl py-6 px-4 font-black text-xl hover:border-coral hover:scale-105 transition-all">{o}</button>
        ))}
      </div>
    </div>
  );
}

// ============== 4. Pedacinhos da Palavra ==============
function Pedacinhos({ p, onDone }: any) {
  const [claps, setClaps] = useState(0);
  return (
    <div className="text-center">
      <div className="text-5xl font-black mb-4">{p.palavra}</div>
      <div className="flex justify-center gap-2 mb-6">
        {p.silabas.map((s:string, i:number) => (
          <div key={i} className={`px-4 py-2 rounded-xl font-bold ${i < claps ? "bg-success text-white" : "bg-muted"}`}>{s}</div>
        ))}
      </div>
      <button onClick={()=>setClaps(c=>c+1)} className="bg-coral text-white text-4xl px-12 py-8 rounded-2xl shadow-lg active:scale-95 mb-4">👏</button>
      <div className="text-muted-foreground mb-4">Palmas: <b>{claps}</b></div>
      <div className="flex gap-2 justify-center">
        <button onClick={()=>setClaps(0)} className="bg-muted px-4 py-2 rounded-xl font-bold flex items-center gap-1"><RotateCcw size={14}/> Recomeçar</button>
        <button onClick={()=>onDone(claps === p.total)} className="bg-success text-white px-6 py-2 rounded-xl font-bold">Confirmar</button>
      </div>
    </div>
  );
}

// ============== 5. Onde Está ==============
function OndeEsta({ p, onDone }: any) {
  const cols = Math.ceil(Math.sqrt(p.grid.length));
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Encontre:</div>
      <div className="text-5xl mb-4">{p.alvo}</div>
      <div className="grid gap-2 mx-auto" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, maxWidth: cols * 64 }}>
        {p.grid.map((e:string, i:number) => (
          <button key={i} onClick={()=>onDone(i === p.correctIndex)} className="text-3xl p-2 bg-card border-2 border-border rounded-lg hover:border-primary">{e}</button>
        ))}
      </div>
    </div>
  );
}

// ============== 6. Sequência e Padrão ==============
function SequenciaPadrao({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="flex justify-center gap-3 text-5xl mb-6">
        {p.seq.map((s:string, i:number) => <span key={i}>{s}</span>)}
        <span className="text-primary">?</span>
      </div>
      <div className="flex justify-center gap-3">
        {p.opts.map((o:string, i:number) => (
          <button key={i} onClick={()=>onDone(o === p.next)} className="text-5xl p-4 bg-card border-2 border-border rounded-xl hover:border-primary hover:scale-110 transition-all">{o}</button>
        ))}
      </div>
    </div>
  );
}

// ============== 7. Cadê o Par ==============
function CadeOPar({ p, onDone }: any) {
  const cards = useMemo(() => {
    const dup = [...p.pares, ...p.pares].map((v,i)=>({v, i, id: Math.random()}));
    return dup.sort(()=>Math.random()-0.5);
  }, [p]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  useEffect(() => {
    if (matched.length === p.pares.length) setTimeout(()=>onDone(true), 400);
  }, [matched.length]);
  const handleClick = (idx:number) => {
    if (flipped.length === 2 || flipped.includes(idx) || matched.includes(cards[idx].v)) return;
    const next = [...flipped, idx];
    setFlipped(next);
    if (next.length === 2) {
      if (cards[next[0]].v === cards[next[1]].v) {
        setMatched(m=>[...m, cards[next[0]].v]);
        setTimeout(()=>setFlipped([]), 500);
      } else setTimeout(()=>setFlipped([]), 900);
    }
  };
  return (
    <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
      {cards.map((c, i) => {
        const show = flipped.includes(i) || matched.includes(c.v);
        return (
          <button key={i} onClick={()=>handleClick(i)} className={`aspect-square rounded-xl text-4xl border-2 transition-all ${show ? "bg-card border-primary" : "bg-primary/20 border-border"}`}>
            {show ? c.v : "?"}
          </button>
        );
      })}
    </div>
  );
}

// ============== 8. Foco Total (Stroop) ==============
function FocoTotal({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="font-black text-7xl mb-8" style={{ color: p.corExibida }}>{p.palavra}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {p.options.map((c:any, i:number) => (
          <button key={i} onClick={()=>onDone(c.nome === p.corCerta)} className="rounded-xl py-8 font-black text-white shadow-lg hover:scale-105 transition-all" style={{ background: c.hex }}>
            ●
          </button>
        ))}
      </div>
    </div>
  );
}

// ============== 9. Labirinto do Som ==============
function LabirintoSom({ p, onDone }: any) {
  const [passo, setPasso] = useState(0);
  const atual = p.caminho[passo];
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Pista sonora 🔊</div>
      <div className="text-4xl font-black text-primary mb-6">"{atual.nome}"</div>
      <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
        <div />
        <button onClick={()=>handleDir("CIMA")} className={btnDir()}>⬆️</button>
        <div />
        <button onClick={()=>handleDir("ESQUERDA")} className={btnDir()}>⬅️</button>
        <div className="text-3xl flex items-center justify-center">🌀</div>
        <button onClick={()=>handleDir("DIREITA")} className={btnDir()}>➡️</button>
        <div />
        <button onClick={()=>handleDir("BAIXO")} className={btnDir()}>⬇️</button>
        <div />
      </div>
      <div className="mt-4 text-sm text-muted-foreground">Passo {passo+1} de {p.caminho.length}</div>
    </div>
  );
  function handleDir(d:string) {
    if (d === atual.nome) {
      if (passo + 1 >= p.caminho.length) onDone(true);
      else { setPasso(passo+1); toast.success("Boa!"); }
    } else onDone(false);
  }
}
function btnDir() { return "text-4xl p-4 bg-card border-2 border-border rounded-xl hover:border-primary"; }

// ============== 10. Foco Sustentado ==============
function FocoSustentado({ p, onDone }: any) {
  const [k, setK] = useState(0);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  useEffect(() => {
    if (k >= p.stream.length) { onDone(score > 0 && missed === 0); return; }
    const t = setTimeout(()=>setK(k+1), p.intervaloMs);
    return ()=>clearTimeout(t);
  }, [k]);
  const handleTap = () => {
    if (p.stream[k] === p.alvo) setScore(s=>s+1);
    else setMissed(m=>m+1);
    setK(k+1);
  };
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Alvo: <span className="text-3xl">{p.alvo}</span></div>
      <button onClick={handleTap} className="text-9xl p-8 bg-card border-4 border-primary rounded-3xl my-6 mx-auto active:scale-95">
        {p.stream[k] ?? "✅"}
      </button>
      <div className="text-sm text-muted-foreground">Acertos: <b className="text-success">{score}</b> · Enganos: <b className="text-destructive">{missed}</b></div>
      <div className="text-xs text-muted-foreground mt-1">{k}/{p.stream.length}</div>
    </div>
  );
}

// ============== 11. Rastreamento Sacádico ==============
function Sacadico({ p, onDone }: any) {
  const [fase, setFase] = useState<"mostrar"|"jogar"|"fim">("mostrar");
  const [showIdx, setShowIdx] = useState(0);
  const [piscando, setPiscando] = useState<number | null>(null);
  const [userSeq, setUserSeq] = useState<number[]>([]);
  useEffect(() => {
    if (fase !== "mostrar") return;
    if (showIdx >= p.sequencia.length) { setFase("jogar"); setPiscando(null); return; }
    setPiscando(p.sequencia[showIdx]);
    const t = setTimeout(()=>{ setPiscando(null); setTimeout(()=>setShowIdx(showIdx+1), 150); }, p.flashMs);
    return ()=>clearTimeout(t);
  }, [showIdx, fase]);
  const tap = (pos:number) => {
    if (fase !== "jogar") return;
    const next = [...userSeq, pos];
    setUserSeq(next);
    if (p.sequencia[next.length-1] !== pos) { onDone(false); return; }
    if (next.length === p.sequencia.length) onDone(true);
  };
  const posClass = (pos:number) => {
    const map = ["top-2 left-2","top-2 right-2","bottom-2 left-2","bottom-2 right-2"];
    return map[pos];
  };
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">{fase === "mostrar" ? "Observe a ordem…" : "Toque na mesma ordem"}</div>
      <div className="relative h-64 w-64 mx-auto bg-card border-2 border-border rounded-2xl">
        {[0,1,2,3].map(pos => (
          <button key={pos} onClick={()=>tap(pos)} className={`absolute ${posClass(pos)} w-16 h-16 rounded-full transition-all ${piscando === pos ? "bg-sun scale-125 shadow-glow" : "bg-muted"}`} />
        ))}
      </div>
    </div>
  );
}

// ============== 12. Mosaico de Formas ==============
function Mosaico({ p, onDone }: any) {
  const [selecionadas, setSelecionadas] = useState<string[]>([]);
  const toggle = (op:string) => setSelecionadas(s => s.includes(op) ? s.filter(x=>x!==op) : [...s, op]);
  const verificar = () => {
    const ok = p.pecas.every((x:string)=>selecionadas.includes(x)) && selecionadas.length === p.pecas.length;
    onDone(ok);
  };
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Monte:</div>
      <div className="text-4xl font-black mb-6">{p.figura}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {p.opcoes.map((op:string, i:number) => (
          <button key={i} onClick={()=>toggle(op)} className={`text-5xl p-4 rounded-xl border-2 transition-all ${selecionadas.includes(op) ? "border-primary bg-primary/10 scale-110" : "border-border bg-card"}`}>{op}</button>
        ))}
      </div>
      <button onClick={verificar} className="bg-success text-white px-8 py-3 rounded-xl font-black">Conferir</button>
    </div>
  );
}

// ============== 13. Sequência de Cores ==============
function SequenciaCores({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="flex justify-center gap-2 mb-6">
        {p.sequencia.map((c:string, i:number) => <div key={i} className="w-12 h-12 rounded-lg shadow" style={{ background: c }} />)}
        <div className="w-12 h-12 rounded-lg border-2 border-dashed border-muted-foreground flex items-center justify-center font-black">?</div>
      </div>
      <div className="flex justify-center gap-3">
        {p.options.map((c:string, i:number) => (
          <button key={i} onClick={()=>onDone(c === p.next)} className="w-16 h-16 rounded-xl shadow-lg hover:scale-110 transition-all" style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}

// ============== 14. Simetria ==============
function Simetria({ p, onDone }: any) {
  const [right, setRight] = useState<number[][]>(() => Array(p.rows).fill(0).map(()=>Array(p.halfCols).fill(0)));
  const toggle = (r:number, c:number) => setRight(rt => rt.map((row,i)=> i===r ? row.map((v,j)=> j===c ? (v?0:1) : v) : row));
  const conferir = () => {
    // mirror: right[r][c] deve corresponder a left[r][halfCols-1-c]
    const ok = p.left.every((row:number[], r:number) => row.every((v:number, c:number) => v === right[r][p.halfCols-1-c]));
    onDone(ok);
  };
  return (
    <div className="text-center">
      <div className="flex justify-center gap-1 mb-4">
        <div>
          {p.left.map((row:number[], r:number) => (
            <div key={r} className="flex gap-1">
              {row.map((v:number, c:number) => <div key={c} className={`w-10 h-10 rounded ${v ? "bg-primary" : "bg-muted"}`} />)}
            </div>
          ))}
        </div>
        <div className="w-px bg-foreground/30 mx-1" />
        <div>
          {right.map((row, r) => (
            <div key={r} className="flex gap-1">
              {row.map((v, c) => <button key={c} onClick={()=>toggle(r,c)} className={`w-10 h-10 rounded border ${v ? "bg-lilac" : "bg-card border-border"}`} />)}
            </div>
          ))}
        </div>
      </div>
      <button onClick={conferir} className="bg-success text-white px-8 py-3 rounded-xl font-black">Conferir simetria</button>
    </div>
  );
}

// ============== 15. Decoração Criativa ==============
function Decoracao({ p, onDone }: any) {
  const [placed, setPlaced] = useState<{e:string;x:number;y:number}[]>([]);
  const [dragging, setDragging] = useState<string | null>(null);
  const drop = (e: React.DragEvent) => {
    if (!dragging) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPlaced(p => [...p, { e: dragging, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setDragging(null);
  };
  return (
    <div className="text-center">
      <div className="text-2xl font-black mb-2">{p.cenario}</div>
      <div onDragOver={(e)=>e.preventDefault()} onDrop={drop} className={`relative h-72 rounded-2xl bg-gradient-to-b ${p.fundo} border-2 border-dashed border-border mb-4 overflow-hidden`}>
        {placed.map((it, i) => <span key={i} className="absolute text-4xl" style={{ left: it.x - 16, top: it.y - 16 }}>{it.e}</span>)}
        {placed.length === 0 && <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Arraste para cá</div>}
      </div>
      <div className="flex gap-2 justify-center mb-4 flex-wrap">
        {p.stickers.map((s:string, i:number) => (
          <div key={i} draggable onDragStart={()=>setDragging(s)} className="text-4xl p-2 bg-card border-2 border-border rounded-xl cursor-grab active:cursor-grabbing">{s}</div>
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        <button onClick={()=>setPlaced([])} className="bg-muted px-4 py-2 rounded-xl font-bold flex items-center gap-1"><RotateCcw size={14}/> Limpar</button>
        <button onClick={()=>onDone(placed.length >= 3)} className="bg-success text-white px-6 py-2 rounded-xl font-black flex items-center gap-1"><Sparkles size={16}/> Finalizar arte</button>
      </div>
    </div>
  );
}

// ============== 16. Onomatopeias Animadas ==============
// Mecânica única: balão grande com som textual + opções com emoji
function Onomatopeias({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="inline-block bg-card border-4 border-coral rounded-3xl px-8 py-6 mb-6 shadow-glow">
        <div className="text-xs uppercase text-muted-foreground tracking-widest mb-1">🔊 Som</div>
        <div className="text-5xl font-black text-coral">{p.som}</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {p.options.map((o:any, i:number) => (
          <button key={i} onClick={()=>onDone(o.nome === p.correctName)} className="bg-card border-2 border-border rounded-2xl p-5 hover:border-coral hover:scale-105 transition-all">
            <div className="text-6xl mb-1">{o.emoji}</div>
            <div className="font-bold text-xs">{o.nome}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============== 17. Ritmo e Sopro Visual ==============
// Mecânica única: barra horizontal de comprimento variável; segurar = encher
function RitmoSopro({ p, onDone }: any) {
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef<number | null>(null);
  useEffect(() => {
    if (holding) {
      const start = Date.now();
      ref.current = window.setInterval(() => {
        const pct = Math.min(100, ((Date.now() - start) / (p.holdSeconds * 1000)) * 100);
        setProgress(pct);
        if (pct >= 100) { window.clearInterval(ref.current!); onDone(true); }
      }, 50);
    } else if (ref.current) window.clearInterval(ref.current);
    return () => { if (ref.current) window.clearInterval(ref.current); };
  }, [holding]);
  return (
    <div className="text-center">
      <div className="text-6xl mb-2">{p.veiculo}</div>
      <div className="text-3xl font-black text-coral mb-4">{p.silaba}</div>
      <div className="mx-auto h-8 bg-muted rounded-full overflow-hidden mb-2" style={{ width: `${p.tamanho}%`, maxWidth: "90%" }}>
        <div className="h-full bg-gradient-to-r from-sun to-coral transition-all" style={{ width: `${progress}%` }} />
      </div>
      <div className="text-xs text-muted-foreground mb-4">Tamanho do sopro: {p.tamanho}%</div>
      <button
        onMouseDown={()=>setHolding(true)} onMouseUp={()=>setHolding(false)} onMouseLeave={()=>setHolding(false)}
        onTouchStart={()=>setHolding(true)} onTouchEnd={()=>setHolding(false)}
        className="bg-coral text-white px-12 py-6 rounded-2xl font-black text-lg shadow-lg active:scale-95"
      >
        SOPRE AQUI
      </button>
    </div>
  );
}

// ============== 18. Sons do Corpo / Paromatopeias ==============
// Mecânica única: som textual → escolher ação (texto + emoji)
function SonsCorpo({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="text-xs uppercase text-muted-foreground tracking-widest mb-1">🔊 Ouça</div>
      <div className="text-5xl font-black text-coral mb-6">"{p.som}"</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {p.opts.map((o:string, i:number) => (
          <button key={i} onClick={()=>onDone(o === p.correta)} className="bg-card border-2 border-border rounded-xl py-5 px-3 font-bold text-lg hover:border-coral hover:scale-105 transition-all">{o}</button>
        ))}
      </div>
    </div>
  );
}

// ============== 19. Traçado de Letras ==============
// Mecânica única: tocar setas direcionais na ordem correta (1→2→3)
function TracadoLetras({ p, onDone }: any) {
  const [step, setStep] = useState(0);
  const tap = (i:number) => {
    if (i === step) {
      if (step + 1 >= p.passos.length) { toast.success("Letra completa!"); onDone(true); }
      else setStep(step+1);
    } else {
      toast("Ops, comece pela seta 1");
    }
  };
  return (
    <div className="text-center">
      <div className="text-[10rem] leading-none font-black text-success/20 select-none mb-4">{p.letra}</div>
      <div className="text-sm text-muted-foreground mb-3">Toque as setas em ordem:</div>
      <div className="flex justify-center gap-3 flex-wrap">
        {p.passos.map((seta:string, i:number) => {
          const done = i < step;
          const current = i === step;
          return (
            <button key={i} onClick={()=>tap(i)} className={`relative w-20 h-20 rounded-2xl text-4xl border-4 transition-all ${done ? "bg-success text-white border-success" : current ? "bg-card border-success animate-pulse" : "bg-muted border-border"}`}>
              <span className="absolute top-0 left-1 text-xs font-black bg-success text-white rounded-full px-1.5">{i+1}</span>
              {seta}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============== 20. Caminho dos Pontos ==============
// Mecânica única: SVG com pontos numerados; tocar em ordem desenha linhas
function CaminhoPontos({ p, onDone }: any) {
  const [next, setNext] = useState(0);
  const [linhas, setLinhas] = useState<{x1:number;y1:number;x2:number;y2:number}[]>([]);
  const tap = (i:number) => {
    if (i !== next) { toast("Próximo é o " + (next+1)); return; }
    if (i > 0) {
      const a = p.pontos[i-1], b = p.pontos[i];
      setLinhas(l => [...l, { x1:a.x, y1:a.y, x2:b.x, y2:b.y }]);
    }
    if (i + 1 >= p.pontos.length) { toast.success("Figura completa!"); onDone(true); }
    else setNext(i+1);
  };
  return (
    <div className="text-center">
      <div className="text-lg font-black mb-2">{p.figura}</div>
      <svg viewBox="0 0 100 100" className="mx-auto bg-card border-2 border-border rounded-2xl" style={{ width: 280, height: 280 }}>
        {linhas.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="hsl(var(--success))" strokeWidth={1.2} />)}
        {p.pontos.map((pt:any, i:number) => (
          <g key={i} onClick={()=>tap(i)} style={{ cursor:"pointer" }}>
            <circle cx={pt.x} cy={pt.y} r={i === next ? 4 : 3} fill={i < next ? "hsl(var(--success))" : i === next ? "hsl(var(--coral))" : "hsl(var(--muted-foreground))"} />
            <text x={pt.x} y={pt.y - 5} fontSize={4.5} textAnchor="middle" fontWeight="900" fill="hsl(var(--foreground))">{i+1}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ============== 21. Labirinto de Precisão ==============
// Mecânica única: arrastar bolinha; sair dos corredores reseta progresso
function LabirintoPrecisao({ p, onDone }: any) {
  const [pos, setPos] = useState({ x: 12, y: 53 });
  const [erros, setErros] = useState(0);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dentroDeAlgum = (x:number, y:number) =>
    p.segmentos.some((s:any) => x >= s.x && x <= s.x + s.w && y >= s.y && y <= s.y + s.h);

  const move = (clientX:number, clientY:number) => {
    if (!dragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    if (dentroDeAlgum(x, y)) {
      setPos({ x, y });
      // chegou no fim (último segmento, canto inferior direito)
      const last = p.segmentos[p.segmentos.length - 1];
      if (x >= last.x + last.w - 6 && y >= last.y + last.h - 6) { onDone(true); }
    } else {
      setErros(e => e + 1);
      setDragging(false);
      toast("Saiu do caminho — recomece");
      setPos({ x: 12, y: 53 });
    }
  };
  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground mb-2">Tema: {p.tema} · Erros: {erros}</div>
      <div
        ref={containerRef}
        onMouseMove={(e)=>move(e.clientX, e.clientY)}
        onMouseUp={()=>setDragging(false)}
        onTouchMove={(e)=>{ const t = e.touches[0]; move(t.clientX, t.clientY); }}
        onTouchEnd={()=>setDragging(false)}
        className="relative mx-auto bg-muted/30 border-2 border-border rounded-2xl"
        style={{ width: 360, height: 280 }}
      >
        {p.segmentos.map((s:any, i:number) => (
          <div key={i} className="absolute bg-success/20 border border-success/40 rounded" style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.w}%`, height: `${s.h}%` }} />
        ))}
        <button
          onMouseDown={()=>setDragging(true)}
          onTouchStart={()=>setDragging(true)}
          className="absolute w-7 h-7 bg-coral rounded-full shadow-lg border-2 border-white cursor-grab active:cursor-grabbing"
          style={{ left: `calc(${pos.x}% - 14px)`, top: `calc(${pos.y}% - 14px)` }}
          aria-label="Bolinha"
        />
      </div>
      <div className="text-xs text-muted-foreground mt-2">Arraste a bolinha pelo corredor verde até o final</div>
    </div>
  );
}

// ============== 22. Triagem de Categorias ==============
// Mecânica única: arrastar itens para caixas; valida ao colocar todos
function TriagemCategorias({ p, onDone }: any) {
  const [assigned, setAssigned] = useState<Record<number, string>>({}); // itemIndex → caixaName
  const [dragging, setDragging] = useState<number | null>(null);
  const drop = (caixa:string) => {
    if (dragging === null) return;
    setAssigned(a => ({ ...a, [dragging]: caixa }));
    setDragging(null);
  };
  useEffect(() => {
    if (Object.keys(assigned).length === p.itens.length) {
      const acertou = p.itens.every((it:any, i:number) => assigned[i] === it.cat);
      onDone(acertou);
    }
  }, [assigned]);
  return (
    <div className="text-center">
      <div className="flex gap-3 justify-center mb-4 flex-wrap">
        {p.itens.map((it:any, i:number) => assigned[i] ? null : (
          <div key={i} draggable onDragStart={()=>setDragging(i)} className="text-4xl p-2 bg-card border-2 border-border rounded-xl cursor-grab active:cursor-grabbing">{it.e}</div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {p.caixas.map((c:any) => (
          <div key={c.nome} onDragOver={(e)=>e.preventDefault()} onDrop={()=>drop(c.nome)} className="min-h-[140px] bg-lilac/10 border-2 border-dashed border-lilac rounded-2xl p-3">
            <div className="font-black mb-2">{c.emoji} {c.nome}</div>
            <div className="flex flex-wrap gap-1 justify-center">
              {p.itens.map((it:any, i:number) => assigned[i] === c.nome ? <span key={i} className="text-3xl">{it.e}</span> : null)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============== 23. Expressão e Emoção ==============
// Mecânica única: cena descritiva → escolher rosto que combina
function ExpressaoEmocao({ p, onDone }: any) {
  return (
    <div className="text-center">
      <div className="bg-card border-2 border-border rounded-2xl p-6 mb-6">
        <div className="text-xs uppercase text-muted-foreground mb-2">Situação</div>
        <div className="text-xl font-bold">{p.cena}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {p.opts.map((o:string, i:number) => (
          <button key={i} onClick={()=>onDone(o === p.correta)} className="bg-card border-2 border-border rounded-2xl py-6 font-black text-xl hover:border-lilac hover:scale-105 transition-all">{o}</button>
        ))}
      </div>
    </div>
  );
}
