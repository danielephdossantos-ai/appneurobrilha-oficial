import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Component, ReactNode, useState, useEffect, useCallback } from "react";
import { 
  AlertCircle, 
  Play, 
  CheckCircle2, 
  XCircle, 
  Brain, 
  Target, 
  Star, 
  ArrowLeft, 
  Heart, 
  Volume2, 
  Smile, 
  Sparkles, 
  Activity,
  Mic,
  Move,
  Pencil,
  VolumeX,
  Volume2 as VolIcon,
  Sparkle,
  RefreshCw
} from "lucide-react";
import { useAppState } from "@/core/store";
import { PipPedagogicalGuidance } from "@/components/rewards/PipPedagogicalGuidance";
import { useMascot } from "@/contexts/MascotContext";
import { toast } from "sonner";
import { cn } from "@/utils/utils";
import { NEURO_ACTIVITIES, NeuroActivity } from "@/data/neuro-treino/activities";
import { motion, AnimatePresence } from "framer-motion";

class NeuroTreinoErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) { return { hasError: true, error }; }
  componentDidCatch(error: Error, errorInfo: any) { console.error("NeuroTreinoErrorBoundary:", error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <Shell>
          <div className="flex flex-col items-center justify-center p-8 text-center bg-destructive/5 rounded-3xl border-2 border-dashed border-destructive/20">
            <AlertCircle className="h-16 w-16 text-destructive mb-4" />
            <h2 className="text-2xl font-bold text-destructive">Erro no Neuro-Treino</h2>
            <p className="text-muted-foreground mt-2 mb-6"><b>Erro:</b> {this.state.error?.message}</p>
          </div>
        </Shell>
      );
    }
    return this.props.children;
  }
}

export const Route = createFileRoute("/neuro-treino")({
  component: () => (
    <NeuroTreinoErrorBoundary>
      <Treino />
    </NeuroTreinoErrorBoundary>
  ),
});

// === MOTOR DE BANCO DE DADOS CLÍNICO (50+ VARIAÇÕES TOTAIS) ===
const BANCO_DE_DADOS_CLINICO: any = {
  atencao: [
    { id: 'at_1', elementos: ['🤖', '🤖', '🐒', '🤖'], correto: '🐒', dicaAudio: 'Olhe bem os robôs! Quem não é robô aqui? Ache o macaquinho!' },
    { id: 'at_2', elementos: ['🍎', '🍌', '🍎', '🍎'], correto: '🍌', dicaAudio: 'Hum, que delícia de maçãs! Mas tem uma banana intrusa ali! Toque nela!' },
    { id: 'at_3', elementos: ['🚗', '🚗', '🚗', '✈️'], correto: '✈️', dicaAudio: 'Os carros andam no chão! Quem está voando de intruso? Ache o avião!' },
    { id: 'at_4', elementos: ['🐶', '🐱', '🐶', '🐶'], correto: '🐱', dicaAudio: 'Muitos cachorrinhos latindo! Mas um gatinho fez miau de intruso! Ache o gato!' },
    { id: 'at_5', elementos: ['🦁', '🦁', '🐻', '🦁'], correto: '🐻', dicaAudio: 'O rei leão chamou os amigos! Mas um urso apareceu ali! Cadê o urso?' },
  ],
  sons_iniciais: [
    { id: 'si_1', letra: 'A', somExplicacao: 'Abra bem a boquinha: AAAA. De Abelha e de Avião! Repita comigo: AAAA.', opcoes: ['🍎', '🚗', '🐱'], correto: '🍎', nomeCorreto: 'Maçã/Abelha', dicaAudio: 'Qual desses desenhos começa com o som AAAA? Toque na Maçã/Abelha!' },
    { id: 'si_2', letra: 'B', somExplicacao: 'Feche os lábios e solte: BBBB. De Bola e de Boneca! Repita: BBBB.', opcoes: ['⚽', '✈️', '🦁'], correto: '⚽', nomeCorreto: 'Bola', dicaAudio: 'Qual começa com o som BBBB? Toque na Bola!' },
    { id: 'si_3', letra: 'M', somExplicacao: 'Junte bem os lábios: MMMM. De Macaco e de Melancia! Repita: MMMM.', opcoes: ['🐒', '🚗', '🎈'], correto: '🐒', nomeCorreto: 'Macaco', dicaAudio: 'Qual começa com o som MMMM? Toque no Macaco!' },
    { id: 'si_4', letra: 'O', somExplicacao: 'Faça um biquinho redondo: OOOO. De Ovo e de Óculos! Repita: OOOO.', opcoes: ['🥚', '🍌', '🤖'], correto: '🥚', nomeCorreto: 'Ovo', dicaAudio: 'Qual começa com o som OOOO? Toque no Ovo!' },
    { id: 'si_5', letra: 'S', somExplicacao: 'Dente com dente fazendo som de cobrinha: SSSS. De Sapo e Sol! Repita: SSSS.', opcoes: ['🐸', '🍦', '🐶'], correto: '🐸', nomeCorreto: 'Sapo', dicaAudio: 'Qual começa com o som SSSS? Toque no Sapo!' },
  ],
  memoria: [
    { id: 'me_1', elementos: ['🍎', '🍌', '🍇'], ordem: ['🍎', '🍌', '🍇'], dicaAudio: 'Guarde bem esta ordem: Maçã, Banana e Uva! O que vem primeiro?', correto: '🍎' },
  ],
  motorzinho: [
    { id: 'mo_1', dicaAudio: 'Respire fundo e solte o ar devagarinho para apagar a vela! Vamos lá!' },
  ],
  rimas: [
    { id: 'ri_1', palavra: 'GATO', opcoes: ['RATO', 'BOLO', 'CASA'], correto: 'RATO', dicaAudio: 'O que rima com GATO? RATO ou BOLO?' },
  ],
  regulacao: [
    { id: 're_1', dicaAudio: 'Respire fundo com o Pip... inspire e expire... sinta a calma chegar.' },
  ]
};

const clinicaCategorias = [
  {
    id: 'atencao',
    nome: "Atenção Super Focada",
    descricao: "Inclui: Ache o Intruso e Alvo Móvel",
    cor: "bg-amber-400",
    corTexto: "text-amber-950",
    icone: <Target className="w-8 h-8" />,
    atividades: NEURO_ACTIVITIES["Atenção Super Focada"] || []
  },
  {
    id: 'memoria',
    nome: "Memória de Elefante",
    descricao: "Sequências e Comandos Auditivos",
    cor: "bg-purple-400",
    corTexto: "text-white",
    icone: <Brain className="w-8 h-8" />,
    atividades: NEURO_ACTIVITIES["Memória de Elefante"] || []
  },
  {
    id: 'sons_iniciais',
    nome: "Sons Iniciais",
    descricao: "Inclui: Traçado da Letra A",
    cor: "bg-sky-400",
    corTexto: "text-sky-950",
    icone: <Volume2 className="w-8 h-8" />,
    atividades: NEURO_ACTIVITIES["Sons Iniciais"] || []
  },
  {
    id: 'motorzinho',
    nome: "Motorzinho dos Sons",
    descricao: "Inclui: Assopro da Vela e Voz",
    cor: "bg-emerald-400",
    corTexto: "text-emerald-950",
    icone: <Activity className="w-8 h-8" />,
    atividades: NEURO_ACTIVITIES["Motorzinho dos Sons"] || []
  },
  {
    id: 'rimas',
    nome: "Rimas",
    descricao: "Pares Rimados e Intrusos Sonoros",
    cor: "bg-pink-400",
    corTexto: "text-white",
    icone: <Sparkles className="w-8 h-8" />,
    atividades: NEURO_ACTIVITIES["Rimas Divertidas"] || []
  },
  {
    id: 'regulacao',
    nome: "Regulação Emocional",
    descricao: "Âncora da Calma e Emoções",
    cor: "bg-rose-400",
    corTexto: "text-white",
    icone: <Smile className="w-8 h-8" />,
    atividades: NEURO_ACTIVITIES["Regulação Emocional"] || []
  },
];

function Treino() {
  const { activeChild, addCoins } = useAppState();
  const coins = activeChild?.coins || 0;
  const [catAtiva, setCatAtiva] = useState<string | null>(null);
  const [atvAtiva, setAtvAtiva] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const { gainExperience, gainAffinity } = useMascot();

  // Estados do Motor de Variações Premium
  const [variacaoAtual, setVariacaoAtual] = useState<any>(null);
  const [faseIndex, setFaseIndex] = useState(1);
  const [pontos, setPontos] = useState(0);
  const [textoBalao, setTextoBalao] = useState<string>('Olá, meu amiguinho! Toque em uma missão para a gente treinar juntos!');
  const [mascoteAnimando, setMascoteAnimando] = useState(false);
  const [audioMutado, setAudioMutado] = useState(false);

  // Função para a Terapeuta IA falar com a criança
  const terapeutaFalar = useCallback((texto: string) => {
    setTextoBalao(texto);
    setMascoteAnimando(true);
    
    if (!audioMutado && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const falar = new SpeechSynthesisUtterance(texto);
      falar.lang = 'pt-BR';
      falar.rate = 1.1; 
      falar.pitch = 1.3; 
      falar.onend = () => setMascoteAnimando(false);
      window.speechSynthesis.speak(falar);
    } else {
      setTimeout(() => setMascoteAnimando(false), 3000);
    }
  }, [audioMutado]);

  useEffect(() => {
    terapeutaFalar('Olá, pequeno gênio! Vamos treinar o seu cérebro hoje? Escolha uma especialidade para começar!');
  }, [terapeutaFalar]); 


  // Estados para mecânicas específicas
  const [nivelAcao, setNivelAcao] = useState(0);
  const [interagindo, setInteragindo] = useState(false);
  const [tracadoPassos, setTracadoPassos] = useState<any[]>([]);
  const [assoprou, setAssoprou] = useState(false);

  const categoriaAtual = clinicaCategorias.find(c => c.id === catAtiva);
  const atividadeAtual = categoriaAtual?.atividades.find(a => a.id === atvAtiva);

  const triggerFeedback = (msg: string) => {
    setFeedback(msg);
    terapeutaFalar(msg);
    setTimeout(() => setFeedback(null), 3500);
  };

  // Carrega uma variação aleatória (entre as 50 disponíveis) sempre que muda de fase
  const carregarNovaVariacao = useCallback((categoria: string) => {
    const lista = BANCO_DE_DADOS_CLINICO[categoria as keyof typeof BANCO_DE_DADOS_CLINICO] || BANCO_DE_DADOS_CLINICO.atencao;
    // Pega um item aleatório do banco de dados de 50 variações
    const aleatorio = lista[Math.floor(Math.random() * lista.length)];
    setVariacaoAtual(aleatorio);
    setIsAnswered(false);
    setIsCorrect(null);
    setNivelAcao(0);
    setInteragindo(false);
    setAssoprou(false);
    setTracadoPassos([]);
    
    // Faz a Terapeuta IA explicar o jogo imediatamente por áudio para a criança não precisar ler
    setTimeout(() => {
      if (categoria === 'sons_iniciais') {
        terapeutaFalar(`${aleatorio.somExplicacao} ... Agora me diz: ${aleatorio.dicaAudio}`);
      } else {
        terapeutaFalar(aleatorio.dicaAudio);
      }
    }, 200);
  }, [terapeutaFalar]);

  const selecionarCategoria = (id: string) => {
    setCatAtiva(id);
    setAtvAtiva(null); // Reseta atividade para mostrar a lista e permitir ver os jogos específicos
    setFaseIndex(1);
    terapeutaFalar(`Ótima escolha! Vamos trabalhar ${clinicaCategorias.find(c => c.id === id)?.nome}. Escolha um dos exercícios abaixo!`);
  };

  const handleAcaoInterativa = () => {
    if (!atividadeAtual) return;
    setInteragindo(true);
    let progresso = 0;
    
    // Simulador de captação de áudio/esforço (Sopro da Vela/Controle de Voz)
    const interval = setInterval(() => {
      progresso += 20;
      setNivelAcao(progresso);
      if (progresso >= 100) {
        clearInterval(interval);
        setInteragindo(false);
        setAssoprou(true);
        handleAnswer(atividadeAtual.content.target);
        
        if (atividadeAtual.type === 'microfone') {
          triggerFeedback('Parabéns! Você controlou o ar perfeitamente e apagou a vela! 🎂✨');
        }
      }
    }, 300);
  };

  const handleAnswer = (escolha: string) => {
    if (isAnswered) return;
    
    // Se houver variação premium, valida por ela. Caso contrário, valida pelo target fixo.
    const isCorrectChoice = variacaoAtual 
      ? escolha === variacaoAtual.correto 
      : (escolha === atividadeAtual?.content.target || ['interaction', 'microfone', 'tracado', 'emocional'].includes(atividadeAtual?.type || ''));

    if (isCorrectChoice) {
      setIsCorrect(true);
      setIsAnswered(true);
      setPontos(prev => prev + 20);
      setFaseIndex(prev => prev + 1);
      terapeutaFalar('Uau! Você acertou! Parabéns, estou muito orgulhosa! Vamos para o próximo?! 🌟');
      
      // Progride para uma nova variação inédita
      setTimeout(() => {
        if (catAtiva) carregarNovaVariacao(catAtiva);
      }, 2500);
    } else {
      terapeutaFalar('Ah, quase! Olhe com atenção, você consegue encontrar! Tente outra vez.');
      toast.error("Tente novamente!", { 
        description: "O Pip está aqui para te ajudar.",
        icon: <XCircle className="text-rose-500" />
      });
    }
  };

  const handleSelectAtv = (activityId: string) => {
    setAtvAtiva(activityId);
    setFaseIndex(1);
    if (catAtiva) carregarNovaVariacao(catAtiva);
  };

  const handleConcluir = () => {
    gainExperience(30);
    gainAffinity(10);
    addCoins(100);
    terapeutaFalar("Parabéns! Você concluiu toda a sessão clínica de hoje! Estou muito orgulhoso!");
    triggerFeedback("Recompensa Coletada! Você ganhou +30 XP e 100 BrilhoCoins!");
    setAtvAtiva(null);
    setIsAnswered(false);
  };

  return (
    <Shell>
      {/* Alerta de Feedback Terapêutico Positivo */}
      {feedback && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-indigo-900 text-white p-4 rounded-2xl shadow-2xl border-2 border-indigo-400 flex items-center gap-3 font-black text-md max-w-md text-center animate-bounce">
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {/* HUD Superior Premium - Cabeçalho da Clínica Digital */}
      <div className="flex justify-between items-center z-10 mb-6 max-w-md mx-auto w-full">
        <div className="bg-white/90 px-4 py-2 rounded-xl border-4 border-[#4B7BFF] shadow-[0_4px_0_#2B53C6] flex items-center gap-2">
          <Brain className="w-6 h-6 text-[#4B7BFF]" />
          <span className="text-base font-black text-[#1E3A8A] uppercase tracking-tighter">TREINO</span>
        </div>
        <div className="bg-[#FFD23F] text-[#5C3E00] font-black px-5 py-2 rounded-xl border-4 border-[#B58A00] shadow-[0_4px_0_#806200] text-lg">
          ⭐ {pontos}
        </div>
      </div>

      {/* ================= TERAPEUTA IA / MASCOTE INTERATIVA (GUIANDO POR ÁUDIO) ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="bg-white rounded-3xl p-4 my-4 border-2 border-indigo-100 shadow-md flex items-center gap-4 relative">
          {/* Mascote Animado */}
          <div className="relative">
            <div className={`w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-500 flex items-center justify-center text-4xl shadow-md border-4 border-white transition-transform duration-300 ${mascoteAnimando ? 'animate-bounce scale-110' : 'hover:scale-105'}`}>
              🐶
            </div>
            {mascoteAnimando && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
              </span>
            )}
          </div>

          {/* Balão de Fala da Terapeuta IA */}
          <div className="flex-1 bg-indigo-50/80 border border-indigo-100 rounded-2xl p-3 relative">
            <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-indigo-50 border-b-[8px] border-b-transparent"></div>
            <p className="text-sm md:text-base font-bold text-indigo-950 leading-relaxed">{textoBalao}</p>
            <div className="flex items-center gap-4 mt-1">
              <button 
                onClick={() => variacaoAtual ? terapeutaFalar(variacaoAtual.dicaAudio) : terapeutaFalar(textoBalao)}
                className="text-[11px] text-indigo-600 font-black underline uppercase tracking-wider hover:text-indigo-800"
              >
                🗣️ Ouvir de Novo
              </button>
              <button 
                onClick={() => setAudioMutado(!audioMutado)}
                className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1 hover:text-slate-600"
              >
                {audioMutado ? <VolumeX size={12} /> : <VolIcon size={12} />}
                {audioMutado ? "Ativar Som" : "Silenciar"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {!catAtiva ? (
              <motion.div 
                key="categorias"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1 items-center py-2"
              >
                {[
                  { id: 'atencao', nome: 'Atenção', cor: 'bg-[#FF6B6B] border-[#C93B3B] text-white', icone: '🎯' },
                  { id: 'memoria', nome: 'Memória', cor: 'bg-[#B467FF] border-[#7F3BC9] text-white', icone: '🧠' },
                  { id: 'sons_iniciais', nome: 'Sons', cor: 'bg-[#4CE3FF] border-[#1B99B5] text-slate-900', icone: '🗣️' },
                  { id: 'motorzinho', nome: 'Motorzinho', cor: 'bg-[#4EFF91] border-[#1BB553] text-slate-900', icone: '⚡' },
                  { id: 'rimas', nome: 'Rimas', cor: 'bg-[#FF6BD5] border-[#C93B9F] text-white', icone: '✨' },
                  { id: 'regulacao', nome: 'Calminha', cor: 'bg-[#FF9F43] border-[#C96F16] text-white', icone: '🎈' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => selecionarCategoria(cat.id)}
                    className={cn(
                      "p-4 rounded-[24px] border-4 shadow-[0_8px_0_rgba(0,0,0,0.15)] flex flex-col items-center justify-center text-center gap-2 transition-all transform active:translate-y-2 active:shadow-none h-28",
                      cat.cor
                    )}
                  >
                    <span className="text-3xl filter drop-shadow-sm">{cat.icone}</span>
                    <span className="text-md font-black tracking-wide uppercase">{cat.nome}</span>
                  </button>
                ))}
              </motion.div>
            ) : !atvAtiva ? (
              <motion.div 
                key="atividades"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-[28px] p-6 border border-slate-100 shadow-sm"
              >
                <button onClick={() => setCatAtiva(null)} className="flex items-center gap-2 text-slate-400 font-bold hover:text-slate-700 mb-6 transition-colors text-sm">
                  <ArrowLeft className="w-4 h-4" /> Voltar às Especialidades
                </button>

                <div className={cn("p-4 rounded-2xl mb-6 flex items-center gap-3", categoriaAtual?.cor, categoriaAtual?.corTexto)}>
                  {categoriaAtual?.icone}
                  <h3 className="text-xl font-black">{categoriaAtual?.nome}</h3>
                </div>

                <p className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Selecione o exercício clínico recomendado:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoriaAtual?.atividades.map((atv) => (
                    <div key={atv.id} className="p-5 rounded-2xl border-2 border-slate-100 bg-slate-50 flex flex-col justify-between hover:border-indigo-200 transition-all group">
                      <div>
                        <h4 className="text-lg font-black text-slate-800 mb-1">{atv.title}</h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">{atv.therapeuticGoal}</p>
                      </div>
                      <button
                        onClick={() => handleSelectAtv(atv.id)}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-3 rounded-xl shadow-md text-sm transition-all active:scale-95"
                      >
                        Iniciar Terapia
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="game-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[28px] p-6 border-2 border-slate-100 shadow-inner flex-1 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Barra de Controle de Voltar / Status do Exercício */}
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <button 
                    onClick={() => { setCatAtiva(null); setAtvAtiva(null); setVariacaoAtual(null); }}
                    className="flex items-center gap-2 text-slate-400 font-bold hover:text-slate-700 transition-colors text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" /> Sair do Treino
                  </button>
                  <div className="bg-slate-100 text-slate-600 font-black px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 animate-spin text-indigo-500" /> Missão {faseIndex} (Fases Infinitas)
                  </div>
                </div>

                {atividadeAtual && (
                  <>
                    <div className="text-center mb-12 mt-4 relative z-10">
                      <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-4 block">
                        {atividadeAtual.category} • Missão {atividadeAtual.id}
                      </span>
                      <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter max-w-2xl mx-auto leading-tight">
                        {atividadeAtual.content.prompt}
                      </h3>
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-50/50 border border-indigo-100 rounded-3xl text-sm font-bold text-indigo-700">
                        <AlertCircle size={18} /> {atividadeAtual.description}
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center min-h-[300px] relative z-10">
                      {/* JOGO MOTOR FINO: DESENHAR O ALFABETO (SONS INICIAIS) */}
                      {catAtiva === 'sons_iniciais' && atvAtiva === 'sons-2' && (
                        <div className="text-center max-w-md mx-auto py-4">
                          <div className="flex justify-center mb-2 text-indigo-600"><Pencil className="w-8 h-8" /></div>
                          <h3 className="text-xl font-black text-slate-800 mb-1">Traçado Técnico da Letra "A"</h3>
                          <p className="text-xs font-bold text-slate-400 mb-6">Objetivo: Coordenação visuo-motora fina, fixação e direcionalidade grafomotora.</p>

                          <div className="bg-slate-900 rounded-3xl p-6 mb-6 aspect-square max-w-[280px] mx-auto flex items-center justify-center relative border-4 border-slate-800 shadow-inner select-none">
                            {/* Linhas guia da letra de forma pontilhada */}
                            <span className="text-slate-700/40 text-[180px] font-mono absolute font-bold select-none pointer-events-none">A</span>
                            
                            {/* Nós/Âncoras Interativas de Ligação Terapêutica */}
                            <div className="w-full h-full relative">
                              <button 
                                onClick={() => !tracadoPassos.includes(1) && setTracadoPassos([...tracadoPassos, 1])}
                                className={`w-10 h-10 rounded-full absolute top-[80%] left-[15%] font-black text-xs flex items-center justify-center border-2 transition-all ${tracadoPassos.includes(1) ? 'bg-emerald-500 border-white text-white shadow-glow' : 'bg-white border-slate-300 text-slate-800'}`}
                              >
                                1
                              </button>
                              <button 
                                onClick={() => tracadoPassos.includes(1) && !tracadoPassos.includes(2) && setTracadoPassos([...tracadoPassos, 2])}
                                className={`w-10 h-10 rounded-full absolute top-[10%] left-[43%] font-black text-xs flex items-center justify-center border-2 transition-all ${tracadoPassos.includes(2) ? 'bg-emerald-500 border-white text-white shadow-glow' : 'bg-white border-slate-300 text-slate-800'}`}
                              >
                                2
                              </button>
                              <button 
                                onClick={() => tracadoPassos.includes(2) && !tracadoPassos.includes(3) && setTracadoPassos([...tracadoPassos, 3])}
                                className={`w-10 h-10 rounded-full absolute top-[80%] left-[73%] font-black text-xs flex items-center justify-center border-2 transition-all ${tracadoPassos.includes(3) ? 'bg-emerald-500 border-white text-white shadow-glow' : 'bg-white border-slate-300 text-slate-800'}`}
                              >
                                3
                              </button>
                            </div>

                            {/* Validação de Traçado Completo */}
                            {tracadoPassos.length === 3 && (
                              <div className="absolute inset-0 bg-emerald-950/90 rounded-2xl flex flex-col items-center justify-center p-4 animate-fadeIn z-20">
                                <span className="text-4xl block mb-2">🍎</span>
                                <span className="text-sm font-black text-emerald-400 uppercase">A de Abelha! Traçado Correto!</span>
                                <button 
                                  onClick={() => handleAnswer('Letra A')}
                                  className="mt-4 bg-white text-emerald-900 font-bold text-xs px-4 py-2 rounded-lg"
                                >
                                  Finalizar Letra
                                </button>
                              </div>
                            )}
                          </div>
                          <p className="text-xs font-bold text-slate-400">Guie o dedo clicando nos números em sequência correta (1➔2➔3) para fixar a coordenação.</p>
                        </div>
                      )}

                      {/* JOGO 1: JOGO DO INTRUSO (ATENÇÃO SUPER FOCADA) - Roda 50 variações */}
                      {catAtiva === 'atencao' && variacaoAtual && (
                        <div className="flex-1 flex items-center justify-center py-6 animate-scaleUp">
                          <div className="grid grid-cols-2 gap-4 w-full max-w-[280px]">
                            {variacaoAtual.elementos.map((item: string, index: number) => (
                              <button
                                key={index}
                                onClick={() => {
                                  if (item === variacaoAtual.correto) {
                                    handleAnswer(item);
                                    triggerFeedback('Excelente discriminação de foco sustentado! 🎯');
                                  } else {
                                    triggerFeedback('Padrão idêntico. Continue rastreando! 🔍');
                                  }
                                }}
                                className="aspect-square bg-gradient-to-b from-white to-[#F1F5F9] border-4 border-[#CBD5E1] hover:border-[#4B7BFF] rounded-[24px] flex items-center justify-center text-5xl shadow-[0_6px_0_#CBD5E1] hover:shadow-[0_6px_0_rgba(75,123,255,0.4)] transition-all transform active:translate-y-1 active:shadow-none"
                              >
                                <span className="filter drop-shadow-sm">{item}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* JOGO 2: TREINO DE FONOAUDIOLOGIA / ALFABETO (SONS INICIAIS) - Roda 50 variações */}
                      {catAtiva === 'sons_iniciais' && variacaoAtual && (
                        <div className="text-center flex-1 flex flex-col justify-center items-center">
                          <div className="bg-indigo-900 text-white rounded-3xl px-8 py-4 mb-6 shadow-md border-b-8 border-indigo-950 flex items-center gap-4 animate-pulse">
                            <span className="text-6xl font-black font-mono">{variacaoAtual.letra}</span>
                            <span className="text-4xl">🗣️</span>
                          </div>
                          
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Qual começa com o som {variacaoAtual.letra}?</p>

                          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                            {variacaoAtual.opcoes.map((opcao: string, index: number) => (
                              <button
                                key={index}
                                onClick={() => {
                                  if (opcao === variacaoAtual.correto) {
                                    handleAnswer(opcao);
                                    triggerFeedback(`Isso mesmo! ${variacaoAtual.nomeCorreto} começa com ${variacaoAtual.letra}! ✨`);
                                  } else {
                                    triggerFeedback('Escute o som novamente... tente outra vez! 👂');
                                  }
                                }}
                                className="aspect-square bg-slate-50 border-4 border-slate-200 hover:border-sky-400 rounded-2xl flex items-center justify-center text-5xl shadow-sm transition-all transform hover:scale-105 active:scale-95"
                              >
                                {opcao}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* JOGO 3: MEMÓRIA DE ELEFANTE - Roda variações */}
                      {catAtiva === 'memoria' && variacaoAtual && (
                        <div className="text-center flex-1 flex flex-col justify-center items-center">
                          <h3 className="text-xl font-black text-slate-800 mb-1">Memória de Trabalho</h3>
                          <p className="text-xs font-bold text-slate-400 mb-6">Memorize a ordem e toque no que foi pedido!</p>
                          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                            {variacaoAtual.elementos.map((item: string, index: number) => (
                              <button
                                key={index}
                                onClick={() => {
                                  if (item === variacaoAtual.correto) {
                                    handleAnswer(item);
                                    triggerFeedback('Memória excelente! Você guardou tudo direitinho! 🧠✨');
                                  } else {
                                    triggerFeedback('Tente lembrar... qual era a ordem? 🧐');
                                  }
                                }}
                                className="aspect-square bg-slate-50 border-4 border-slate-200 hover:border-purple-400 rounded-2xl flex items-center justify-center text-5xl shadow-sm transition-all transform hover:scale-105 active:scale-95"
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* JOGO 4: MOTORZINHO DOS SONS - Roda variações */}
                      {catAtiva === 'motorzinho' && (
                        <div className="text-center max-w-md mx-auto py-4">
                          <div className="flex justify-center mb-2 text-indigo-600"><Mic className="w-8 h-8 animate-pulse" /></div>
                          <h3 className="text-xl font-black text-slate-800 mb-1">Controle de Sopro Fonoaudiológico</h3>
                          <p className="text-xs font-bold text-slate-400 mb-6">Objetivo: Exercitar musculatura orbicular e controle de ar expiratório.</p>

                          <div className="bg-slate-50 border-2 border-dashed rounded-3xl p-8 mb-6 flex flex-col items-center justify-center relative min-h-[200px] w-full">
                            {assoprou ? (
                              <div className="animate-bounce">
                                <span className="text-6xl block">🎂</span>
                                <span className="text-sm font-black text-emerald-600 uppercase block mt-2">Vela Apagada com Sucesso!</span>
                              </div>
                            ) : (
                              <div>
                                <span className="text-6xl block animate-pulse">🕯️</span>
                                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mt-3">Aguardando som estável...</span>
                              </div>
                            )}
                            
                            <div className="w-full bg-slate-200 h-4 rounded-full mt-6 overflow-hidden border border-slate-300">
                              <div className="bg-gradient-to-r from-sky-400 to-indigo-600 h-full transition-all duration-300" style={{ width: `${nivelAcao}%` }} />
                            </div>
                          </div>

                          <button
                            onMouseDown={handleAcaoInterativa}
                            onMouseUp={() => setInteragindo(false)}
                            onTouchStart={handleAcaoInterativa}
                            onTouchEnd={() => setInteragindo(false)}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-6 py-3.5 rounded-xl text-sm w-full shadow-md transition-all active:scale-95"
                          >
                            {assoprou ? 'Treinar Novamente' : 'Simular Captura de Microfone (Sopro)'}
                          </button>
                        </div>
                      )}

                      {/* JOGO 5: RIMAS DIVERTIDAS - Roda variações */}
                      {catAtiva === 'rimas' && variacaoAtual && (
                        <div className="text-center flex-1 flex flex-col justify-center items-center">
                          <div className="bg-pink-100 text-pink-600 rounded-3xl px-8 py-4 mb-6 shadow-sm border-2 border-pink-200">
                            <span className="text-4xl font-black uppercase tracking-widest">{variacaoAtual.palavra}</span>
                          </div>
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">O que rima com {variacaoAtual.palavra}?</p>
                          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                            {variacaoAtual.opcoes.map((opcao: string, index: number) => (
                              <button
                                key={index}
                                onClick={() => {
                                  if (opcao === variacaoAtual.correto) {
                                    handleAnswer(opcao);
                                    triggerFeedback('Rima perfeita! Você é um poeta! 🎶✨');
                                  } else {
                                    triggerFeedback('Ouça o finalzinho da palavra... rima com... 👂');
                                  }
                                }}
                                className="aspect-square bg-slate-50 border-4 border-slate-200 hover:border-pink-400 rounded-2xl flex items-center justify-center text-3xl font-bold text-slate-700 shadow-sm transition-all transform hover:scale-105 active:scale-95"
                              >
                                {opcao}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* JOGO 6: REGULAÇÃO EMOCIONAL - Roda variações */}
                      {catAtiva === 'regulacao' && (
                        <div className="text-center max-w-md mx-auto py-4">
                          <div className="flex justify-center mb-2 text-rose-500"><Smile className="w-12 h-12" /></div>
                          <h3 className="text-xl font-black text-slate-800 mb-1">Âncora da Calma</h3>
                          <p className="text-xs font-bold text-slate-400 mb-8">Respire fundo com o Pip para encontrar sua paz interior.</p>
                          
                          <div className="flex justify-center mb-10">
                            <motion.div 
                              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                              className="w-40 h-40 bg-rose-100 rounded-full flex items-center justify-center border-4 border-rose-200 shadow-lg relative"
                            >
                              <div className="w-24 h-24 bg-rose-400 rounded-full opacity-20 absolute" />
                              <span className="text-6xl z-10">🧘</span>
                            </motion.div>
                          </div>

                          <button
                            onClick={() => handleAnswer('calma')}
                            className="bg-rose-500 hover:bg-rose-600 text-white font-black px-8 py-4 rounded-2xl text-sm w-full shadow-md transition-all active:scale-95"
                          >
                            Encontrei minha Calma ✨
                          </button>
                        </div>
                      )}

                      {/* ESTADO DE ESPERA GENÉRICO PARA OUTRAS CATEGORIAS DA ENGINE */}
                      {!['atencao', 'sons_iniciais', 'memoria', 'motorzinho', 'rimas', 'regulacao'].includes(atvAtiva!) && (
                        <div className="text-center py-12 flex-1 flex flex-col justify-center items-center">
                          <span className="text-5xl mb-3">✨</span>
                          <h4 className="text-lg font-black text-slate-700">Mapeando Variações de Consultório...</h4>
                          <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1 mb-4">A Terapeuta IA está preparando a voz e as figuras dinâmicas para esta categoria.</p>
                          <button 
                            onClick={() => { setPontos(pontos + 15); setFaseIndex(faseIndex + 1); terapeutaFalar("Muito bem! Concluímos esse estímulo clínico! Vamos para o próximo!"); }}
                            className="bg-indigo-600 text-white font-black px-6 py-2.5 rounded-xl text-xs shadow-md"
                          >
                            Simular Acerto Clínico
                          </button>
                        </div>
                      )}

                    </div>

                    {isAnswered && (
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="mt-12 flex flex-col items-center gap-6"
                      >
                        {isCorrect ? (
                          <>
                            <div className="flex items-center gap-4 text-emerald-600 font-black text-3xl animate-bounce">
                               <Sparkles size={40} /> MISSÃO CUMPRIDA!
                            </div>
                            <button 
                              onClick={handleConcluir}
                              className="bg-emerald-500 hover:bg-emerald-600 text-white px-20 py-8 rounded-[2.5rem] font-black shadow-2xl border-b-[12px] border-emerald-800 hover:scale-105 transition-all uppercase tracking-[0.2em] text-2xl flex items-center gap-4"
                            >
                              COLETAR PRÊMIO <Star fill="currentColor" />
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center gap-4 text-rose-500 font-black text-2xl">
                               <AlertCircle size={32} /> QUASE CONSEGUIMOS!
                            </div>
                            <button 
                              onClick={() => { setIsAnswered(false); setIsCorrect(null); setNivelAcao(0); }}
                              className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-[2rem] font-black shadow-xl border-b-8 border-indigo-900 transition-all uppercase tracking-widest text-lg"
                            >
                              Tentar Novamente 🚀
                            </button>
                          </>
                        )}
                      </motion.div>
                    )}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-indigo-600 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
               <Sparkles className="absolute top-[-10px] right-[-10px] w-20 h-20 text-white/10 rotate-12" />
               <h4 className="text-xl font-black mb-2 relative z-10">Sessão Premium</h4>
               <p className="text-xs font-bold text-indigo-100 leading-relaxed mb-6 relative z-10">
                 Você está em um ambiente controlado e seguro. O Pip está monitorando o progresso para o relatório terapêutico.
               </p>
               <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl">🐶</div>
                 <div>
                   <span className="text-[10px] font-black uppercase tracking-widest block opacity-70">Acompanhamento</span>
                   <span className="text-sm font-black">Pip Inteligente Ativo</span>
                 </div>
               </div>
            </div>
            
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
               <div className="flex items-center gap-3 text-indigo-900 font-black uppercase tracking-tighter">
                  <Heart className="text-rose-500" fill="currentColor" />
                  <span>Dica Clínica</span>
               </div>
               <p className="text-xs font-bold text-slate-500 leading-relaxed italic">
                 "O estímulo visual associado ao motor fortalece as sinapses do pequeno gênio. Continue incentivando!"
               </p>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
