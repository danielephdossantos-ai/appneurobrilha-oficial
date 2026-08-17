
// ============== NOVAS MECÂNICAS IMPLEMENTADAS ==============

// 43. PARES SONOROS
function ParesSonoros({ p, onDone }: any) {
  const { speak } = usePipVoice();
  const [virados, setVirados] = useState<number[]>([]);
  const [paresEncontrados, setParesEncontrados] = useState<string[]>([]);
  const [cartas, setCartas] = useState<any[]>([]);

  useEffect(() => {
    const double = [...p.sons, ...p.sons].sort(() => Math.random() - 0.5);
    setCartas(double.map((s, i) => ({ id: i, som: s })));
  }, [p.sons]);

  const handleCarta = (idx: number) => {
    if (virados.length === 2 || virados.includes(idx) || paresEncontrados.includes(cartas[idx].som)) return;
    
    speak(cartas[idx].som); // Simula o som (ou usa emoji como pista visual-auditiva)
    const novos = [...virados, idx];
    setVirados(novos);

    if (novos.length === 2) {
      const c1 = cartas[novos[0]];
      const c2 = cartas[novos[1]];
      if (c1.som === c2.som) {
        setParesEncontrados(prev => [...prev, c1.som]);
        setVirados([]);
        if (paresEncontrados.length + 1 === p.numPares) {
          setTimeout(() => onDone(true), 1000);
        }
      } else {
        setTimeout(() => setVirados([]), 1500);
      }
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
      {cartas.map((c, i) => {
        const isVirada = virados.includes(i) || paresEncontrados.includes(c.som);
        return (
          <button
            key={i}
            onClick={() => handleCarta(i)}
            className={`h-32 rounded-3xl border-4 transition-all flex items-center justify-center ${isVirada ? 'bg-white border-primary shadow-inner' : 'bg-primary/20 border-primary/40 shadow-lg'}`}
          >
            {isVirada ? <RenderEmoji e={c.som} className="w-16 h-16" /> : <div className="text-4xl">🔔</div>}
          </button>
        );
      })}
    </div>
  );
}

// 44. SEQUÊNCIA AUDITIVA
function SequenciaAuditiva({ p, onDone }: any) {
  const { speak } = usePipVoice();
  const [fase, setFase] = useState<"ouvir" | "repetir">("ouvir");
  const [selecionados, setSelecionados] = useState<string[]>([]);
  const [tocandoIdx, setTocandoIdx] = useState(-1);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= p.seq.length) {
        clearInterval(interval);
        setTocandoIdx(-1);
        setTimeout(() => setFase("repetir"), 500);
        return;
      }
      setTocandoIdx(i);
      speak(p.seq[i]);
      i++;
    }, 1200);
    return () => clearInterval(interval);
  }, [p.seq]);

  const handleItem = (som: string) => {
    if (fase !== "repetir") return;
    const novos = [...selecionados, som];
    setSelecionados(novos);
    if (novos.length === p.seq.length) {
      const correto = novos.every((v, idx) => v === p.seq[idx]);
      setTimeout(() => onDone(correto), 600);
    }
  };

  return (
    <div className="text-center py-8 space-y-8">
      <div className="text-xl font-black text-primary uppercase">{fase === "ouvir" ? "OUÇA COM ATENÇÃO!" : "AGORA REPITA!"}</div>
      <div className="flex justify-center gap-4">
        {p.seq.map((s: any, i: number) => (
          <div key={i} className={`w-20 h-20 rounded-2xl border-4 flex items-center justify-center transition-all ${tocandoIdx === i ? 'bg-yellow-100 border-yellow-400 scale-110' : 'bg-white border-border'}`}>
             {tocandoIdx === i && <RenderEmoji e={s} className="w-12 h-12" />}
             {fase === "repetir" && selecionados[i] && <RenderEmoji e={selecionados[i]} className="w-12 h-12" />}
          </div>
        ))}
      </div>
      {fase === "repetir" && (
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {Array.from(new Set(p.seq)).map((s: any, i: number) => (
            <button key={i} onClick={() => handleItem(s)} className="w-24 h-24 bg-card rounded-3xl border-2 border-border shadow-md hover:scale-105 active:scale-95 flex items-center justify-center text-4xl">
              <RenderEmoji e={s} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// 45. BANQUETE DOS DINOS (Subitização)
function BanqueteDinos({ p, onDone }: any) {
  return (
    <div className="py-8 text-center space-y-8">
      <div className="flex justify-center items-end gap-2">
        <div className="text-9xl mb-4">{p.dino}</div>
        <div className="bg-white/40 p-6 rounded-t-[50px] border-x-4 border-t-4 border-white/60 flex flex-wrap justify-center gap-2 max-w-[200px]">
          {range(p.qtd).map(i => <RenderEmoji key={i} e={p.comida} className="w-10 h-10" />)}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
        {p.opts.map((opt: number, i: number) => (
          <button key={i} onClick={() => onDone(opt === p.qtd)} className="py-6 bg-white rounded-3xl border-4 border-primary/20 text-4xl font-black text-primary hover:bg-primary/10 transition-all">
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

// 46. TREM NUMÉRICO
function TremNumerico({ p, onDone }: any) {
  const [seq, setSeq] = useState([...p.seq]);
  const handleSlot = (idx: number, val: number) => {
    if (!p.buracos.includes(idx)) return;
    onDone(val === p.seq[idx]);
  };

  return (
    <div className="py-10 flex flex-col items-center gap-8">
      <div className="flex items-center gap-2 overflow-x-auto pb-4 max-w-full">
        <div className="text-6xl">🚂</div>
        {p.seq.map((n: number, i: number) => {
          const isBuraco = p.buracos.includes(i);
          return (
            <div key={i} className={`w-20 h-24 rounded-t-2xl border-x-4 border-t-4 flex items-center justify-center text-3xl font-black ${isBuraco ? 'bg-primary/5 border-dashed border-primary/30' : 'bg-white border-primary/20'}`}>
              {!isBuraco ? n : "?"}
            </div>
          );
        })}
      </div>
      <div className="flex gap-4">
        {p.buracos.map((bIdx: number) => (
          <button key={bIdx} onClick={() => handleSlot(bIdx, p.seq[bIdx])} className="w-20 h-20 bg-primary text-white rounded-3xl text-3xl font-black shadow-lg hover:scale-110 active:scale-95 transition-all">
            {p.seq[bIdx]}
          </button>
        ))}
        <button onClick={() => onDone(false)} className="w-20 h-20 bg-muted text-muted-foreground rounded-3xl text-3xl font-black opacity-50">
          {p.seq[0] - 1}
        </button>
      </div>
    </div>
  );
}

// 47. TROCA-TROCA DE REGRAS
function TrocaRegras({ p, onDone }: any) {
  const [regra, setRegra] = useState(p.regras[0]);
  const [round, setRound] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [alvo, setAlvo] = useState<any>(null);
  const [opts, setOpts] = useState<any[]>([]);

  const gerarRound = () => {
    const r = p.regras[Math.floor(Math.random() * p.regras.length)];
    setRegra(r);
    const cores = ["🔴", "🔵", "🟢", "🟡"];
    const formas = ["🔺", "🟦", "🟢", "⭐"];
    const items = range(4).map(i => ({ cor: cores[i], forma: formas[(i+1)%4] }));
    setAlvo(items[Math.floor(Math.random() * items.length)]);
    setOpts(items.sort(() => Math.random() - 0.5));
  };

  useEffect(() => gerarRound(), []);

  const handleOpt = (o: any) => {
    const match = regra === "cor" ? o.cor === alvo.cor : o.forma === alvo.forma;
    if (match) setAcertos(a => a + 1);
    
    if (round + 1 >= p.rounds) {
      onDone(acertos + (match ? 1 : 0) >= p.rounds * 0.8);
    } else {
      setRound(r => r + 1);
      gerarRound();
    }
  };

  if (!alvo) return null;

  return (
    <div className="py-6 text-center space-y-6">
      <div className="inline-block px-6 py-2 rounded-full bg-primary text-white font-black text-xl animate-bounce">
        REGRA: {regra.toUpperCase()}
      </div>
      <div className="bg-white/50 p-8 rounded-full inline-block border-4 border-white">
        <div className="text-6xl flex gap-2">
          <span>{alvo.cor}</span>
          <span>{alvo.forma}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
        {opts.map((o, i) => (
          <button key={i} onClick={() => handleOpt(o)} className="p-6 bg-white rounded-3xl border-4 border-primary/20 hover:scale-105 active:scale-95 transition-all flex gap-2 justify-center text-4xl">
            <span>{o.cor}</span>
            <span>{o.forma}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// 48. PONTE DE BLOCOS
function PonteBlocos({ p, onDone }: any) {
  return (
    <div className="py-10 text-center space-y-10">
      <div className="flex items-center justify-center gap-1">
        <div className="h-16 w-32 bg-slate-400 rounded-l-2xl"></div>
        <div className="h-16 w-32 border-4 border-dashed border-white/60 rounded-xl flex items-center justify-center text-4xl opacity-50">
          {p.target}
        </div>
        <div className="h-16 w-32 bg-slate-400 rounded-r-2xl"></div>
      </div>
      <div className="flex justify-center gap-4">
        {p.opts.map((o: any, i: number) => (
          <button key={i} onClick={() => onDone(o === p.target)} className="w-24 h-24 bg-white rounded-3xl shadow-lg hover:scale-110 active:scale-95 transition-all text-5xl flex items-center justify-center border-4 border-primary/10">
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
