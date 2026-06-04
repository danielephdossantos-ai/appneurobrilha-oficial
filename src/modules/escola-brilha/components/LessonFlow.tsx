import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SupabasePedagogicalService, Activity, Explanation, BNCCSkill } from '../services/SupabasePedagogicalService';
import { MasteryMotor } from '../engine/MasteryMotor';
import { ChevronRight, Star, CheckCircle2, AlertCircle, Play, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import KidLiveMascot from '@/components/ui/KidLiveMascot';

interface LessonFlowProps {
  skillCode: string;
  alunoId: string;
  onComplete: () => void;
  onExit: () => void;
}

type LessonStep = 'explicação' | 'demonstração' | 'treino_guiado' | 'prática' | 'desafio' | 'avaliação' | 'domínio';

export const LessonFlow: React.FC<LessonFlowProps> = ({ skillCode, alunoId, onComplete, onExit }) => {
  const [step, setStep] = useState<LessonStep>('explicação');
  const [skill, setSkill] = useState<BNCCSkill | null>(null);
  const [explanation, setExplanation] = useState<Explanation | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [score, setScore] = useState({ hits: 0, errors: 0 });
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const pedagogicalService = SupabasePedagogicalService.getInstance();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [s, e, a] = await Promise.all([
        pedagogicalService.getSkillByCode(skillCode),
        pedagogicalService.getExplanationByCode(skillCode),
        pedagogicalService.getActivitiesByCode(skillCode)
      ]);
      setSkill(s);
      setExplanation(e);
      setActivities(a.sort((x, y) => (x.ordem || 0) - (y.ordem || 0)));
      setLoading(false);
    };
    loadData();
  }, [skillCode]);

  const handleNextStep = async () => {
    if (step === 'explicação') setStep('demonstração');
    else if (step === 'demonstração') setStep('treino_guiado');
    else if (step === 'treino_guiado') setStep('prática');
    else if (step === 'prática') setStep('desafio');
    else if (step === 'desafio') setStep('avaliação');
    else if (step === 'avaliação') {
      const mastery = MasteryMotor.calculateMastery(score.hits, score.errors, score.hits + score.errors);
      await pedagogicalService.saveProgress({
        aluno_id: alunoId,
        codigo_bncc: skillCode,
        tentativas: 1,
        acertos: score.hits,
        erros: score.errors,
        dominio: mastery
      });
      setStep('domínio');
    } else {
      onComplete();
    }
  };

  const handleAnswer = (option: string) => {
    if (feedback) return;
    
    const activity = activities[currentActivityIndex];
    const isCorrect = option === activity.resposta;
    
    setSelectedOption(option);
    setFeedback({
      type: isCorrect ? 'success' : 'error',
      message: isCorrect ? (activity.feedback || 'Muito bem!') : 'Tente novamente!'
    });

    if (isCorrect) {
      setScore(prev => ({ ...prev, hits: prev.hits + 1 }));
    } else {
      setScore(prev => ({ ...prev, errors: prev.errors + 1 }));
    }
  };

  const nextActivity = () => {
    setFeedback(null);
    setSelectedOption(null);
    if (currentActivityIndex < activities.length - 1) {
      setCurrentActivityIndex(prev => prev + 1);
    } else {
      handleNextStep();
    }
  };

  if (loading) return <div className="p-8 text-center">Carregando aula...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-900">{skill?.titulo}</h2>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase">
            {skillCode}
          </span>
        </div>
        <Button variant="ghost" onClick={onExit}>Sair</Button>
      </header>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {['explicação', 'demonstração', 'treino_guiado', 'prática', 'desafio', 'avaliação', 'domínio'].map((s) => (
          <div 
            key={s}
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase whitespace-nowrap ${
              step === s ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
            }`}
          >
            {s.replace('_', ' ')}
          </div>
        ))}
      </div>

      <Card className="border-4 border-blue-100 shadow-xl overflow-hidden min-h-[400px]">
        <CardContent className="p-8">
          {step === 'explicação' && (
            <div className="space-y-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-48 h-48">
                  <KidLiveMascot size="xl" showBadge={false} emotion="thinking" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Hora de aprender com o Pip!</h3>
              <p className="text-xl text-slate-600 leading-relaxed italic">
                " {explanation?.texto_professor} "
              </p>
              {explanation?.imagem && (
                <img src={explanation.imagem} alt="Explicação" className="mx-auto max-h-48 rounded-lg shadow-sm" />
              )}
              <div className="pt-8">
                <Button onClick={handleNextStep} size="lg" className="rounded-full px-8 gap-2 bg-blue-600 hover:bg-blue-700">
                  Entendi, Pip! <ChevronRight />
                </Button>
              </div>
            </div>
          )}

          {step === 'demonstração' && (
            <div className="space-y-6 text-center">
              <h3 className="text-2xl font-bold text-slate-800">Veja como se faz!</h3>
              <div className="p-12 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                {/* Aqui viria uma animação ou exemplo visual baseado na habilidade */}
                <p className="text-slate-500">Exemplo visual da habilidade {skillCode}</p>
              </div>
              <div className="pt-8">
                <Button onClick={handleNextStep} size="lg" className="rounded-full px-8 gap-2 bg-blue-600 hover:bg-blue-700">
                  Próximo <ChevronRight />
                </Button>
              </div>
            </div>
          )}

          {(step === 'treino_guiado' || step === 'prática' || step === 'desafio' || step === 'avaliação') && activities.length > 0 && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-slate-400 uppercase tracking-widest text-xs">Questão {currentActivityIndex + 1} de {activities.length}</span>
                <Progress value={((currentActivityIndex + 1) / activities.length) * 100} className="w-32 h-2" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
                {activities[currentActivityIndex]?.pergunta}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['alternativa_a', 'alternativa_b', 'alternativa_c', 'alternativa_d'].map((key) => {
                  const option = (activities[currentActivityIndex] as any)[key];
                  if (!option) return null;
                  
                  return (
                    <Button
                      key={key}
                      variant="outline"
                      className={`h-20 text-xl font-bold rounded-2xl border-2 transition-all ${
                        selectedOption === option 
                          ? (option === activities[currentActivityIndex].resposta ? 'bg-green-50 border-green-500 text-green-700' : 'bg-red-50 border-red-500 text-red-700')
                          : 'hover:border-blue-400 hover:bg-blue-50'
                      }`}
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </Button>
                  );
                })}
              </div>

              {feedback && (
                <div className={`mt-8 p-4 rounded-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 ${
                  feedback.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {feedback.type === 'success' ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                  <p className="font-bold">{feedback.message}</p>
                  <Button className="ml-auto" onClick={nextActivity}>
                    {currentActivityIndex < activities.length - 1 ? 'Próxima' : 'Continuar'} <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          )}

          {step === 'domínio' && (
            <div className="text-center space-y-8 py-8">
              <div className="flex justify-center mb-4">
                <div className="w-48 h-48">
                  <KidLiveMascot size="xl" showBadge={false} emotion="excited" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-50 border-2 border-slate-100 rounded-3xl p-8 max-w-sm mx-auto shadow-sm">
                  <p className="text-slate-400 text-sm font-black uppercase tracking-widest mb-2">Relatório de Domínio</p>
                  <div className="flex flex-col items-center">
                    <span className="text-6xl font-black text-slate-900 mb-1">
                      {MasteryMotor.calculateMastery(score.hits, score.errors, score.hits + score.errors)}%
                    </span>
                    <span className="text-lg font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Domina {skillCode}
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl font-black text-slate-800">
                  {MasteryMotor.isMastered(MasteryMotor.calculateMastery(score.hits, score.errors, score.hits + score.errors)) 
                    ? 'Incrível! Você dominou!' 
                    : 'Bom esforço! Vamos tentar de novo?'}
                </h3>
                <p className="text-slate-500 text-lg max-w-md mx-auto">
                  {MasteryMotor.isMastered(MasteryMotor.calculateMastery(score.hits, score.errors, score.hits + score.errors))
                    ? 'Seu progresso foi registrado e a próxima habilidade foi desbloqueada.'
                    : 'Precisamos de pelo menos 80% de domínio para avançar para a próxima habilidade.'}
                </p>
              </div>

              <div className="pt-4 flex flex-col items-center gap-4">
                {MasteryMotor.isMastered(MasteryMotor.calculateMastery(score.hits, score.errors, score.hits + score.errors)) ? (
                  <Button onClick={onComplete} size="lg" className="rounded-full px-12 bg-green-600 hover:bg-green-700 h-16 text-xl font-black shadow-xl scale-110 transition-transform hover:scale-115">
                    CONCLUIR MISSÃO <CheckCircle2 className="ml-2 w-6 h-6" />
                  </Button>
                ) : (
                  <Button onClick={() => window.location.reload()} size="lg" className="rounded-full px-12 bg-orange-600 hover:bg-orange-700 h-16 text-xl font-black shadow-xl">
                    TENTAR NOVAMENTE <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <footer className="flex justify-between text-slate-400 text-xs font-bold uppercase tracking-widest">
        <div className="flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          Acertos: {score.hits}
        </div>
        <div className="flex items-center gap-1">
          <AlertCircle className="w-4 h-4 text-red-500" />
          Erros: {score.errors}
        </div>
      </footer>
    </div>
  );
};