function AulaView({ aula, setAula, childNome, activeMascot, tier, onCompleted }: { aula: any; setAula: (a: any) => void; childNome: string; hiperfoco: string; activeMascot: any; tier: GradeTier; onCompleted?: (activityId: string) => void }) {
  const [step, setStep] = useState(1);
  const [practiceCount, setPracticeCount] = useState(0);
  const [performance, setPerformance] = useState({ hits: 0, misses: 0, startTime: Date.now() });
  const [feedback, setFeedback] = useState<null | boolean>(null);
  const subjectList: any[] = aula.isEI ? (materiasInfantil as any) : (materias as any);
  const materiaMeta = subjectList.find((m: any) => m.id === aula.materia) || subjectList[0];
  
  const isPipaMateria = aula.isEI || aula.materia === 'portugues';
  const mascotImg = isPipaMateria ? imgPipa : imgPip;
  const mascotNome = isPipaMateria ? "Professora Pipa" : "Professor Pip";

  const steps = [
    { id: 1, label: "EXPLICAÇÃO", icon: Lightbulb },
    { id: 2, label: "DEMONSTRAÇÃO", icon: Eye },
    { id: 3, label: "TREINO GUIADO", icon: Target },
    { id: 4, label: "PRÁTICA", icon: PenTool },
    { id: 5, label: "DESAFIO", icon: Flag },
    { id: 6, label: "AVALIAÇÃO", icon: Trophy },
    { id: 7, label: "DOMÍNIO", icon: Star },
  ];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setPerformance(p => ({ ...p, hits: p.hits + 1 }));
      setFeedback(true);
      setTimeout(() => {
        setFeedback(null);
        if (step === 3) {
          setStep(4);
          setPracticeCount(0);
        } else if (step === 4) {
          if (practiceCount < 2) {
            setPracticeCount(prev => prev + 1);
          } else {
            setStep(5);
          }
        } else if (step === 5) {
          setStep(6);
        } else if (step === 6) {
          setStep(7);
        }
      }, 1500);
    } else {
      setPerformance(p => ({ ...p, misses: p.misses + 1 }));
      setFeedback(false);
      setTimeout(() => setFeedback(null), 1500);
    }
  };

  useEffect(() => {
    const playAudio = (msg: string) => {
      if (!msg) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(msg);
      u.lang = 'pt-BR';
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    };

    if (step === 1) playAudio(aula.etapa1_explicação || "Vamos aprender algo novo!");
    if (step === 2) playAudio(aula.etapa2_demonstração || "Veja como é fácil!");
    if (step === 3) playAudio(aula.etapa3_treino_guiado || "Vamos tentar juntos?");
    if (step === 4) playAudio(aula.etapa4_prática || "Agora é sua vez!");
    if (step === 5) playAudio(aula.etapa5_desafio || "Desafio final!");
    if (step === 7) playAudio(aula.etapa7_domínio || "Parabéns, você conseguiu!");
  }, [step, aula]);

  return (
    <Shell>
      <div className="flex flex-col h-full w-full max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {steps.map((s) => (
            <div key={s.id} className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all shrink-0 ${step === s.id ? 'bg-primary text-white scale-105 shadow-glow' : s.id < step ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'}`}>
              <s.icon className="h-4 w-4" />
              <span className="text-xs font-black uppercase whitespace-nowrap">{s.label}</span>
            </div>
          ))}
        </div>

        <Card className="flex-1 flex flex-col items-center justify-center p-8 relative min-h-[500px] bg-gradient-to-b from-white to-primary/5">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-8 w-full max-w-lg">
                <h2 className="text-4xl font-black text-primary uppercase leading-tight">{aula.topic || materiaMeta.nome}</h2>
                <div className="bg-white rounded-[3rem] p-10 border-4 border-primary/10 shadow-soft">
                  <RenderVisual value={aula.visual || "book"} className="h-40 w-40 text-primary mx-auto" />
                </div>
                <p className="text-xl font-bold text-foreground/80 p-4 bg-white/50 rounded-2xl">{aula.etapa1_explicação}</p>
                <button onClick={() => setStep(2)} className="btn-tap bg-primary text-white px-12 py-5 rounded-full text-2xl font-black border-4 border-white">CONTINUAR</button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-8 w-full max-w-lg">
                <h2 className="text-3xl font-black text-primary uppercase">DEMONSTRAÇÃO</h2>
                <p className="text-xl font-bold">{aula.etapa2_demonstração}</p>
                <button onClick={() => setStep(3)} className="btn-tap bg-primary text-white px-12 py-5 rounded-full font-black">ENTENDI!</button>
              </motion.div>
            )}

            {(step >= 3 && step <= 5) && (
              <motion.div key="activity" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full flex flex-col items-center justify-center">
                 <h3 className="text-3xl font-black text-primary uppercase">{steps[step-1].label}</h3>
                 <div className="w-full max-w-2xl my-8">
                   <EIMiniGame aula={aula} onAnswer={handleAnswer} disabled={feedback !== null} />
                 </div>
              </motion.div>
            )}

            {step === 6 && (
               <motion.div key="step6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-8">
                  <h2 className="text-4xl font-black text-primary uppercase">AVALIAÇÃO</h2>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-6 bg-white rounded-3xl shadow-soft font-black text-4xl text-primary">{performance.hits} <span className="text-sm">Acertos</span></div>
                     <div className="p-6 bg-white rounded-3xl shadow-soft font-black text-4xl text-sun">{performance.misses} <span className="text-sm">Erros</span></div>
                  </div>
                  <button onClick={() => setStep(7)} className="btn-tap bg-success text-white px-12 py-5 rounded-full font-black">FINALIZAR</button>
               </motion.div>
            )}

            {step === 7 && (
              <motion.div key="step7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-8 w-full max-w-md">
                <Trophy className="h-24 w-24 text-sun mx-auto animate-bounce" />
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">DOMÍNIO ATINGIDO!</h2>
                <p className="text-xl font-bold text-muted-foreground">{aula.etapa7_domínio}</p>
                <button 
                  onClick={() => {
                    if (aula.activityId) onCompleted?.(aula.activityId);
                    setAula(null);
                  }}
                  className="btn-tap bg-success text-white px-12 py-6 rounded-full text-2xl font-black mt-8 w-full"
                >
                  CONCLUIR AULA
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </div>
    </Shell>
  );
}