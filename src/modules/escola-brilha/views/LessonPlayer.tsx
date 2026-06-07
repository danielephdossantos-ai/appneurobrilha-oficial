import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Volume2, Star, Trophy, BookOpen, Microscope, Globe, FileText, Settings, User, Layout, MessageSquare, HelpCircle, CheckCircle2, RotateCcw } from 'lucide-react';
import { LessonEnvironment } from '../components/LessonEnvironment';
import { MascotTeacher } from '../components/MascotTeacher';
import { LessonHeader } from '../components/LessonHeader';
import { AudioSpeechService } from '../services/AudioSpeechService';
import { Lesson, LessonPerformance } from '../types/lesson';
import { useSearch } from '@tanstack/react-router';
import { RenderEmoji } from '@/components/neuro-treino/RenderEmoji';
import { semEmoji, objetoImg } from '@/data/neuro-treino/objetos';

const CIDADE_LETRAS_LESSON: Lesson = {
  id: 'cidade-letras-1ano',
  title: 'Cidade das Letras',
  grade: 1,
  bncc_field: 'escuta_fala',
  skill_bncc: 'EF01LP07',
  steps: [
    // 1. Vogais
    { id: 'v1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'As vogais são as letras mais amigáveis! Vamos conhecer a letra A.',
      elements: [{ id: 'a-vogal', type: 'text', content: 'A', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'v2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual destas figuras começa com a vogal A?',
      interaction: { type: 'click', correctAnswer: '🍎 MAÇÃ', options: ['🍎 MAÇÃ', '🐶 CACHORRO', '🐱 GATO'] } },
    { id: 'v3', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Agora a letra E de Estrela!',
      elements: [{ id: 'e-vogal', type: 'text', content: 'E', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'v4', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Onde está a Estrela que começa com E?',
      interaction: { type: 'click', correctAnswer: '⭐ ESTRELA', options: ['⭐ ESTRELA', '☀️ SOL', '🌙 LUA'] } },

    // 2. Método Fônico (Consoantes)
    { id: 'l1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Esta é a letra B. O som dela é /b/. B de Bola!',
      elements: [{ id: 'b', type: 'text', content: 'B', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'l2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Escolha a imagem que começa com o som /b/!',
      interaction: { type: 'click', correctAnswer: '⚽ BOLA', options: ['⚽ BOLA', '🐱 GATO', '🐸 SAPO'] } },
    
    // 3. Sílabas
    { id: 'l3', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Quando juntamos B com A, formamos a sílaba BA!',
      elements: [
        { id: 'b-syll', type: 'text', content: 'B', position: { x: -40, y: 0 }, animation: 'pop', delay: 0.1 },
        { id: 'plus', type: 'text', content: '+', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.3 },
        { id: 'a-syll', type: 'text', content: 'A', position: { x: 40, y: 0 }, animation: 'pop', delay: 0.5 }
      ] },
    { id: 'l4', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'B + A faz...',
      interaction: { type: 'click', correctAnswer: 'BA', options: ['BA', 'BE', 'BO'] } },

    // 4. Completar e Ler
    { id: 'l5', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Olhe o Gato! Complete o nome dele: GA-TO.',
      elements: [
        { id: 'gato-img', type: 'text', content: 'GATO', position: { x: 0, y: -40 }, animation: 'bounce', delay: 0.2 },
        { id: 'gato-txt', type: 'text', content: 'GA _ O', position: { x: 0, y: 40 }, animation: 'pop', delay: 0.5 }
      ],
      interaction: { type: 'click', correctAnswer: 'TO', options: ['TO', 'TA', 'TU'] } }
  ]
};

const VALE_NUMEROS_LESSON: Lesson = {
  id: 'vale-numeros-1ano',
  title: 'Vale dos Números',
  grade: 1,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF01MA06',
  steps: [
    // 1. Soma Visual com Frutas
    { id: 'n1', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Vamos somar! Se eu tenho duas maçãs e ganho mais uma, com quantas eu fico?',
      elements: [
        { id: 'a1', type: 'text', content: 'MAÇÃ', position: { x: -80, y: 0 }, animation: 'pop', delay: 0.1 },
        { id: 'a2', type: 'text', content: 'MAÇÃ', position: { x: -40, y: 0 }, animation: 'pop', delay: 0.2 },
        { id: 'p', type: 'text', content: '+', position: { x: 0, y: 0 }, animation: 'fade', delay: 0.4 },
        { id: 'a3', type: 'text', content: 'MAÇÃ', position: { x: 40, y: 0 }, animation: 'pop', delay: 0.5 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } },
    
    // 2. Subtração Visual (Tirar Frutas)
    { id: 'n2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Tínhamos quatro bananas e o macaco comeu uma. Quantas sobraram?',
      elements: [
        { id: 'b1', type: 'text', content: 'BANANA', position: { x: -60, y: -20 }, animation: 'pop', delay: 0.1 },
        { id: 'b2', type: 'text', content: 'BANANA', position: { x: 0, y: -20 }, animation: 'pop', delay: 0.2 },
        { id: 'b3', type: 'text', content: 'BANANA', position: { x: 60, y: -20 }, animation: 'pop', delay: 0.3 },
        { id: 'b4', type: 'text', content: 'BANANA', position: { x: 0, y: 30 }, animation: 'pop', delay: 0.4 },
      ],
      interaction: { type: 'click', correctAnswer: '3', options: ['2', '3', '4'] } },

    // 3. Dezenas
    { id: 'n3', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Quanto valem 2 dezenas?',
      elements: [{ id: 'dez', type: 'text', content: '10 + 10', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }],
      interaction: { type: 'click', correctAnswer: '20', options: ['10', '20', '30'] } }
  ]
};

const MUNDO_DESCOBERTAS_LESSON: Lesson = {
  id: 'mundo-descobertas-1ano',
  title: 'Mundo das Descobertas',
  grade: 1,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF01CI01',
  steps: [
    // Corpo Humano
    { id: 'd1', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Onde está o coração no corpo humano?',
      interaction: { type: 'click', correctAnswer: '❤️', options: ['❤️', '👃', '👂'] } },
    // Animais
    { id: 'd2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual destes animais vive na água?',
      interaction: { type: 'click', correctAnswer: '🐟', options: ['🐶', '🐟', '🐦'] } },
    // Plantas
    { id: 'd3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'O que as plantas precisam para crescer?',
      interaction: { type: 'click', correctAnswer: '☀️', options: ['☀️', '⚽', '🚗'] } },
    // Higiene
    { id: 'd4', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'O que usamos para lavar as mãos?',
      interaction: { type: 'click', correctAnswer: '🧼', options: ['🧼', '🍪', '🧸'] } }
  ]
};

const NOSSO_LUGAR_LESSON: Lesson = {
  id: 'nosso-lugar-1ano',
  title: 'Nosso Lugar',
  grade: 1,
  bncc_field: 'eu_outro_nos',
  skill_bncc: 'EF01HI01',
  steps: [
    // Família
    { id: 'h1', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Quem faz parte da nossa família?',
      interaction: { type: 'click', correctAnswer: 'FAMÍLIA', options: ['FAMÍLIA', 'ESCOLA', 'LOJA'] } },
    // Escola
    { id: 'h2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Onde nós vamos para aprender e brincar com os amigos?',
      interaction: { type: 'click', correctAnswer: '🏫', options: ['🏫', '🏖️', '🍿'] } },
    // Bairro/Localização
    { id: 'h3', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual imagem representa a nossa casa?',
      interaction: { type: 'click', correctAnswer: '🏠', options: ['🏠', '🌳', '☁️'] } }
  ]
};

const SINONIMOS_LESSON: Lesson = {
  id: 'sinonimos-2ano',
  title: 'Sinônimos',
  grade: 2,
  bncc_field: 'escuta_fala',
  skill_bncc: 'EF02LP03',
  steps: [
    { id: 's1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Vamos aprender sobre SINÔNIMOS! Sinônimos são palavras que têm significados parecidos.',
      elements: [{ id: 'sin-1', type: 'text', content: 'ALEGRE = FELIZ', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 's2', phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: 'Veja este exemplo: Ele está alegre. Ele está feliz. As duas palavras têm o mesmo significado.',
      elements: [{ id: 'sin-2', type: 'text', content: 'BONITO = LINDO', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 's3', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Qual palavra é sinônimo de FELIZ?',
      interaction: { type: 'choice', correctAnswer: 'ALEGRE', options: ['TRISTE', 'ALEGRE', 'BRAVO'] } }
  ]
};

const ADICAO_SUBTRACAO_2ANO_LESSON: Lesson = {
  id: 'matematica-2ano',
  title: 'Adição e Subtração',
  grade: 2,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF02MA05',
  steps: [
    { id: 'm1', phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: 'Vamos praticar somas maiores! Se você tem 15 figurinhas e ganha 5, quantas você tem?',
      elements: [{ id: 'sum-2', type: 'text', content: '15 + 5 = 20', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'm2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Quanto é 25 + 10?',
      interaction: { type: 'choice', correctAnswer: '35', options: ['30', '35', '40'] } }
  ]
};

const MULTIPLICACAO_3ANO_LESSON: Lesson = {
  id: 'matematica-3ano',
  title: 'Multiplicação',
  grade: 3,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF03MA07',
  steps: [
    { id: 'mu1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Multiplicar é somar o mesmo número várias vezes! 3 vezes 2 é igual a 2+2+2.',
      elements: [{ id: 'mult-1', type: 'text', content: '3 x 2 = 6', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'mu2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Quanto é 4 vezes 2?',
      interaction: { type: 'choice', correctAnswer: '8', options: ['6', '8', '10'] } }
  ]
};

const FRACOES_4ANO_LESSON: Lesson = {
  id: 'matematica-4ano',
  title: 'Frações',
  grade: 4,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF04MA09',
  steps: [
    { id: 'f1', phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: 'Uma fração representa uma parte de um inteiro. Como uma pizza cortada!',
      elements: [{ id: 'frac-1', type: 'text', content: '1/2 (Metade)', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'f2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Se eu divido uma maçã em 4 partes e como 1, qual a fração?',
      interaction: { type: 'choice', correctAnswer: '1/4', options: ['1/2', '1/4', '3/4'] } }
  ]
};

const PORCENTAGEM_5ANO_LESSON: Lesson = {
  id: 'matematica-5ano',
  title: 'Porcentagem',
  grade: 5,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF05MA06',
  steps: [
    { id: 'p1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Porcentagem é uma parte de 100! 50% é o mesmo que a metade.',
      elements: [{ id: 'por-1', type: 'text', content: '50% de 100 = 50', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'p2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Quanto é 10% de 100?',
      interaction: { type: 'choice', correctAnswer: '10', options: ['1', '10', '20'] } }
  ]
};

const OCEANOS_LESSON: Lesson = {
  id: 'oceanos-6ano',
  title: 'Importância dos Oceanos',
  grade: 6,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF06CI11',
  steps: [
    { id: 'o1', phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: 'Por que os oceanos são importantes para o planeta? Nesta missão você vai entender o papel dos oceanos.',
      elements: [{ id: 'oce-1', type: 'text', content: '🌊 OCEANO', position: { x: 0, y: -20 }, animation: 'fade', delay: 0.2 }] },
    { id: 'o2', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'Os oceanos cobrem mais de 70% da superfície da Terra e regulam o clima.',
      elements: [{ id: 'oce-2', type: 'text', content: '🌡️ REGULA CLIMA', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'o3', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual alternativa melhor explica por que os oceanos regulam o clima do planeta?',
      interaction: { type: 'choice', correctAnswer: 'A', options: ['A) Porque absorvem e liberam calor', 'B) Porque produzem ventos fortes', 'C) Porque formam nuvens'] } }
  ]
};

const ECOSSISTEMAS_7ANO_LESSON: Lesson = {
  id: 'ciencias-7ano',
  title: 'Ecossistemas Brasileiros',
  grade: 7,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF07CI07',
  steps: [
    { id: 'ec1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'O Brasil possui diversos ecossistemas como a Amazônia e o Cerrado.',
      elements: [{ id: 'eco-1', type: 'text', content: '🌳 AMAZÔNIA', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'ec2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual bioma é conhecido como a "Savana Brasileira"?',
      interaction: { type: 'choice', correctAnswer: 'Cerrado', options: ['Caatinga', 'Cerrado', 'Pantanal'] } }
  ]
};

const GENETICA_8ANO_LESSON: Lesson = {
  id: 'ciencias-8ano',
  title: 'Genética Básica',
  grade: 8,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF08CI07',
  steps: [
    { id: 'g1', phase: 'explanation', type: 'explanation', mascot: 'pip',
      speech: 'O DNA contém todas as informações que definem quem nós somos!',
      elements: [{ id: 'gen-1', type: 'text', content: '🧬 DNA', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'g2', phase: 'practice', type: 'interaction', mascot: 'pipa',
      speech: 'Onde fica guardado o DNA na célula?',
      interaction: { type: 'choice', correctAnswer: 'Núcleo', options: ['Núcleo', 'Parede', 'Citoplasma'] } }
  ]
};

const QUIMICA_9ANO_LESSON: Lesson = {
  id: 'ciencias-9ano',
  title: 'Tabela Periódica',
  grade: 9,
  bncc_field: 'espacos_tempos',
  skill_bncc: 'EF09CI03',
  steps: [
    { id: 'q1', phase: 'explanation', type: 'explanation', mascot: 'pipa',
      speech: 'A Tabela Periódica organiza todos os elementos químicos conhecidos.',
      elements: [{ id: 'qui-1', type: 'text', content: 'H (Hidrogênio)', position: { x: 0, y: 0 }, animation: 'pop', delay: 0.2 }] },
    { id: 'q2', phase: 'practice', type: 'interaction', mascot: 'pip',
      speech: 'Qual o símbolo químico do Oxigênio?',
      interaction: { type: 'choice', correctAnswer: 'O', options: ['Ox', 'O', 'Og'] } }
  ]
};

export const LessonPlayer: React.FC = () => {
  const search = useSearch({ from: '/escola-brilha/aula' }) as { category: string };
  
  const currentLesson =
    search.category === 'sinonimos' ? SINONIMOS_LESSON :
    search.category === 'oceanos' ? OCEANOS_LESSON :
    search.category === 'matematica-2ano' ? ADICAO_SUBTRACAO_2ANO_LESSON :
    search.category === 'matematica-3ano' ? MULTIPLICACAO_3ANO_LESSON :
    search.category === 'matematica-4ano' ? FRACOES_4ANO_LESSON :
    search.category === 'matematica-5ano' ? PORCENTAGEM_5ANO_LESSON :
    search.category === 'ciencias-7ano' ? ECOSSISTEMAS_7ANO_LESSON :
    search.category === 'ciencias-8ano' ? GENETICA_8ANO_LESSON :
    search.category === 'ciencias-9ano' ? QUIMICA_9ANO_LESSON :
    search.category === 'matematica' ? VALE_NUMEROS_LESSON :
    search.category === 'ciencias' ? MUNDO_DESCOBERTAS_LESSON :
    search.category === 'historia_geografia' ? NOSSO_LUGAR_LESSON : CIDADE_LETRAS_LESSON;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showElements, setShowElements] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [highlightedElementId, setHighlightedElementId] = useState<string | null>(null);
  const [visibleOptions, setVisibleOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ kind: 'ok' | 'err' | 'done'; msg: string } | null>(null);
  const [, setPerformance] = useState<LessonPerformance>({ hits: 0, misses: 0, startTime: Date.now(), percentage: 0 });

  const currentStep = currentLesson.steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / currentLesson.steps.length) * 100;

  useEffect(() => {
    runStep();
    return () => AudioSpeechService.stop();
  }, [currentStepIndex, currentLesson.id]);

  const getStepSpeech = (step: any) => {
    let text = step.speech;
    if (step.elements) {
      const elementsText = step.elements
        .filter((el: any) => el.type === 'text')
        .map((el: any) => objetoImg(el.content) ? '' : semEmoji(el.content))
        .filter((txt: string) => txt.length > 0)
        .join('. ');
      if (elementsText && !text.includes(elementsText)) text += '. ' + elementsText;
    }
    return text;
  };

  const runStep = async () => {
    setShowElements([]);
    setVisibleOptions([]);
    setFeedback(null);
    setHighlightedElementId(null);
    await new Promise(r => setTimeout(r, 300));

    if (currentStep.elements) {
      for (const el of currentStep.elements) {
        await new Promise(r => setTimeout(r, (el.delay || 0) * 1000));
        setShowElements(prev => [...prev, el.id]);
        if (currentStep.type === 'explanation') {
          setHighlightedElementId(el.id);
          setIsSpeaking(true);
          await AudioSpeechService.speak(el.content);
          setIsSpeaking(false);
          setHighlightedElementId(null);
          await new Promise(r => setTimeout(r, 400));
        }
      }
    }

    const fullSpeech = getStepSpeech(currentStep);
    setIsSpeaking(true);
    const speechPromise = AudioSpeechService.speak(fullSpeech);
    
    if (currentStep.type === 'interaction' && currentStep.interaction?.options) {
      await new Promise(r => setTimeout(r, 1000)); 
      for (const opt of currentStep.interaction.options) {
        setVisibleOptions(prev => [...prev, opt]);
        await new Promise(r => setTimeout(r, 300));
      }
    }
    await speechPromise;
    setIsSpeaking(false);
  };

  const handleInteraction = async (answer: string) => {
    const isCorrect = answer === currentStep.interaction?.correctAnswer;
    if (isCorrect) {
      setFeedback({ kind: 'ok', msg: 'Isso mesmo!' });
      setIsSpeaking(true);
      await AudioSpeechService.speak('Isso mesmo! Você é demais!');
      setIsSpeaking(false);
      await new Promise(r => setTimeout(r, 600));
      if (currentStepIndex < currentLesson.steps.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
      } else {
        setFeedback({ kind: 'done', msg: 'Missão Cumprida!' });
        await AudioSpeechService.speak('Parabéns! Você completou toda a missão!');
      }
    } else {
      setFeedback({ kind: 'err', msg: 'Tente de novo!' });
      setIsSpeaking(true);
      await AudioSpeechService.speak('Vamos tentar juntos! Olhe com atenção.');
      setIsSpeaking(false);
      await new Promise(r => setTimeout(r, 800));
      runStep();
    }
  };

  if (currentLesson.grade >= 6) {
    // Interface C: 6º ao 9º Ano
    return (
      <div className="flex min-h-screen bg-slate-50 overflow-hidden">
        {/* Sidebar */}
        <div className="w-20 bg-slate-900 flex flex-col items-center py-8 gap-8 border-r border-slate-800">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
            <Layout className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <BookOpen className="w-6 h-6 text-slate-500 hover:text-white cursor-pointer" />
            <Microscope className="w-6 h-6 text-slate-500 hover:text-white cursor-pointer" />
            <Globe className="w-6 h-6 text-slate-500 hover:text-white cursor-pointer" />
            <FileText className="w-6 h-6 text-slate-500 hover:text-white cursor-pointer" />
          </div>
          <div className="flex flex-col gap-6">
            <Settings className="w-6 h-6 text-slate-500" />
            <User className="w-6 h-6 text-slate-500" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Missão</span>
              <h1 className="text-slate-800 font-bold">{currentLesson.title}</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-1 rounded-full border border-blue-100">
                <Trophy className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-bold text-blue-600">230 XP</span>
              </div>
              <div className="w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500" 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </header>

          <main className="flex-1 p-10 flex gap-8">
            <div className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-200 p-10 relative overflow-hidden">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-start justify-between mb-8">
                  <span className="bg-slate-100 px-3 py-1 rounded-lg text-[10px] font-black text-slate-500 uppercase">Fase {currentStepIndex + 1} de {currentLesson.steps.length}</span>
                  <button onClick={() => runStep()} className="p-2 rounded-full hover:bg-slate-50 transition-colors">
                    <Volume2 className="w-6 h-6 text-slate-400" />
                  </button>
                </div>

                <motion.div key={currentStep.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">{currentStep.speech}</h2>
                  
                  {currentStep.elements && (
                    <div className="w-full min-h-[200px] flex items-center justify-center gap-10 flex-wrap mb-10">
                      <AnimatePresence>
                        {currentStep.elements.map((el: any) => showElements.includes(el.id) && (
                          <motion.div key={el.id} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`p-8 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center min-w-[200px] ${highlightedElementId === el.id ? 'ring-4 ring-blue-500' : ''}`}>
                            <div className="text-4xl font-black text-slate-700">{el.content}</div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  )}

                  {currentStep.type === 'interaction' && currentStep.interaction?.options && (
                    <div className="grid grid-cols-1 gap-4 mt-8">
                      {currentStep.interaction.options.map((opt, i) => (
                        <motion.button
                          key={opt}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          onClick={() => handleInteraction(opt)}
                          className="flex items-center gap-4 w-full p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                        >
                          <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center font-bold text-slate-400 group-hover:border-blue-500 group-hover:text-blue-500">
                            {String.fromCharCode(65 + i)}
                          </div>
                          <span className="text-lg font-bold text-slate-700 group-hover:text-blue-700">{opt}</span>
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Mentorship Area */}
              <div className="absolute bottom-8 right-8">
                <MascotTeacher type={currentStep.mascot} isSpeaking={isSpeaking} />
                <div className="mt-4 bg-slate-900 text-white text-[10px] px-3 py-1 rounded-full text-center font-bold">
                  MENTOR ESPECIALISTA
                </div>
              </div>
            </div>

            {/* Right Panel Tools */}
            <div className="w-72 flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Ferramentas</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Layout, label: 'Modo Foco' },
                    { icon: FileText, label: 'Anotações' },
                    { icon: BookOpen, label: 'Dicionário' },
                    { icon: HelpCircle, label: 'Dúvidas' },
                    { icon: RotateCcw, label: 'Revisar' },
                    { icon: MessageSquare, label: 'IA' }
                  ].map((tool, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <tool.icon className="w-5 h-5 text-slate-400 group-hover:text-white" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500">{tool.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-600 rounded-3xl p-6 shadow-lg text-white">
                <h3 className="text-xs font-black text-blue-200 uppercase tracking-widest mb-2">Desempenho</h3>
                <p className="text-2xl font-black mb-4">Excelente!</p>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-bold">Acompanhando BNCC</span>
                </div>
                <div className="w-full h-1 bg-blue-400/30 rounded-full">
                  <div className="h-full bg-white w-3/4 rounded-full" />
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Feedback Overlay */}
        <AnimatePresence>
          {feedback && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 flex items-center justify-center z-[100] bg-slate-900/40 backdrop-blur-sm pointer-events-none">
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className={`px-12 py-8 rounded-[2rem] text-4xl font-black shadow-2xl border-b-8 ${feedback.kind === 'ok' ? 'bg-emerald-500 border-emerald-700 text-white' : feedback.kind === 'done' ? 'bg-yellow-400 border-yellow-600 text-white' : 'bg-pink-500 border-pink-700 text-white'}`}>
                {feedback.msg}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (currentLesson.grade >= 2) {
    // Interface B: 2º ao 5º Ano
    return (
      <div className="min-h-screen bg-[#FDF7FF] p-8 flex flex-col items-center overflow-hidden">
        {/* Top Progress Bar */}
        <div className="w-full max-w-4xl flex items-center gap-6 mb-12">
          <div className="flex-1 h-12 bg-white rounded-full shadow-lg border-2 border-purple-100 p-2 flex items-center px-6 relative">
             <motion.div 
               className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full" 
               initial={{ width: 0 }}
               animate={{ width: `${progress}%` }}
             />
             <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                <Star className={`w-6 h-6 ${progress > 30 ? 'text-yellow-500' : 'text-slate-200'} fill-current`} />
                <Star className={`w-6 h-6 ${progress > 60 ? 'text-yellow-500' : 'text-slate-200'} fill-current`} />
                <Trophy className={`w-6 h-6 ${progress > 95 ? 'text-yellow-500' : 'text-slate-200'}`} />
             </div>
          </div>
          <div className="bg-white px-8 py-2 rounded-full shadow-lg border-2 border-purple-100 flex items-center gap-3">
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
            <span className="text-2xl font-black text-purple-600">120</span>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex gap-4 mb-8">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className={`w-12 h-2 rounded-full ${s <= currentStepIndex + 1 ? 'bg-purple-500' : 'bg-purple-100'}`} />
          ))}
        </div>

        <div className="w-full max-w-5xl flex flex-col items-center relative">
          {/* Main Activity Card */}
          <motion.div 
            key={currentStep.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-white rounded-[4rem] shadow-[0_32px_0_0_rgba(240,230,255,1)] border-4 border-purple-100 p-12 flex flex-col items-center min-h-[500px]"
          >
            <div className="w-full flex justify-end mb-4">
              <button onClick={() => runStep()} className="p-4 bg-blue-100 rounded-full text-blue-600 hover:scale-110 transition-transform">
                <Volume2 className="w-8 h-8" />
              </button>
            </div>

            <h2 className="text-4xl font-black text-purple-900 text-center mb-12 max-w-2xl leading-tight">
              {currentStep.speech}
            </h2>

            {currentStep.elements && (
              <div className="w-full flex items-center justify-center gap-12 flex-wrap mb-12">
                <AnimatePresence>
                  {currentStep.elements.map((el: any) => showElements.includes(el.id) && (
                    <motion.div 
                      key={el.id} 
                      initial={{ scale: 0, rotate: -10 }} 
                      animate={{ scale: 1, rotate: 0 }} 
                      className={`bg-purple-50 p-12 rounded-[3rem] border-2 border-purple-100 shadow-xl transition-all ${highlightedElementId === el.id ? 'scale-110 ring-8 ring-yellow-400' : ''}`}
                    >
                      <div className="text-5xl font-black text-purple-600">{el.content}</div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {currentStep.type === 'interaction' && currentStep.interaction?.options && (
              <div className="w-full flex flex-col items-center gap-6 mt-auto">
                {currentStep.interaction.options.map((opt, i) => (
                  <motion.button
                    key={opt}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => handleInteraction(opt)}
                    className="w-full max-w-lg bg-white h-20 rounded-[2rem] border-4 border-slate-100 text-3xl font-black text-slate-700 hover:border-emerald-400 hover:text-emerald-500 hover:bg-emerald-50 shadow-xl transition-all active:scale-95"
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Mascots at the bottom left */}
          <div className="absolute -bottom-24 -left-20 flex gap-4 pointer-events-none">
            <MascotTeacher type="pip" isSpeaking={isSpeaking && currentStep.mascot === 'pip'} />
            <MascotTeacher type="pipa" isSpeaking={isSpeaking && currentStep.mascot === 'pipa'} />
          </div>

          {/* Navigation Controls */}
          <div className="w-full flex justify-center gap-8 mt-48 mb-20">
             <button className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 hover:bg-purple-200 transition-colors">
               <RotateCcw className="w-10 h-10" />
             </button>
             <button className="px-12 h-20 rounded-full bg-purple-600 text-white font-black text-2xl shadow-xl hover:bg-purple-700 transition-all flex items-center gap-4">
               PRÓXIMO PASSO
               <Layout className="w-6 h-6 rotate-90" />
             </button>
          </div>
        </div>

        {/* Feedback Popup */}
        <AnimatePresence>
          {feedback && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[200] pointer-events-none">
              <div className={`px-16 py-8 rounded-[3rem] text-5xl font-black shadow-[0_20px_0_0_rgba(0,0,0,0.1)] ${feedback.kind === 'ok' ? 'bg-emerald-400 text-white' : feedback.kind === 'done' ? 'bg-yellow-400 text-white' : 'bg-pink-400 text-white'}`}>
                {feedback.msg}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Interface A: 1º Ano (Default/Current)
  return (
    <LessonEnvironment>
      <LessonHeader progress={progress} missionName={currentLesson.title} field={currentLesson.bncc_field} stepIndex={currentStepIndex} totalSteps={currentLesson.steps.length} />
      <div className="w-full max-w-md px-4 pt-24 pb-56 flex flex-col items-center">
        <motion.div key={currentStep.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-5">
          <div className="w-full flex items-start gap-2">
            <p className="flex-1 text-center text-xl font-black text-slate-700">{currentStep.speech}</p>
            <button onClick={() => runStep()} className="shrink-0 w-9 h-9 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center"><Volume2 className="w-5 h-5" /></button>
          </div>
          {currentStep.elements && (
            <div className="w-full min-h-[140px] flex items-center justify-center gap-6 flex-wrap">
              <AnimatePresence>
                {currentStep.elements.map((el: any) => showElements.includes(el.id) && (
                  <motion.div key={el.id} initial={{ scale: 0 }} animate={{ scale: 1 }} className={`flex flex-col items-center transition-all ${highlightedElementId === el.id ? 'scale-110' : 'scale-100'}`}>
                    {objetoImg(el.content) ? <RenderEmoji e={el.content} className="w-32 h-32" /> : <div className="text-6xl font-black text-blue-600">{el.content}</div>}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
          {currentStep.type === 'interaction' && currentStep.interaction?.options && (
            <div className="w-full flex flex-wrap items-center justify-center gap-4 pt-4">
              <AnimatePresence>
                {visibleOptions.map((opt, i) => (
                  <motion.button key={opt} initial={{ scale: 0 }} animate={{ scale: 1 }} onClick={() => handleInteraction(opt)} className="bg-blue-500 text-white w-28 h-28 rounded-3xl text-4xl font-black shadow-xl flex items-center justify-center p-4">
                    {objetoImg(opt) || /\p{Emoji}/u.test(opt) ? <RenderEmoji e={opt} className="w-full h-full" /> : <span>{opt}</span>}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
      <MascotTeacher type={currentStep.mascot} isSpeaking={isSpeaking} />
      <AnimatePresence>
        {feedback && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none">
            <div className={`px-8 py-5 rounded-3xl text-5xl font-black shadow-2xl ${feedback.kind === 'ok' ? 'bg-emerald-400 text-white' : feedback.kind === 'done' ? 'bg-yellow-400 text-white' : 'bg-pink-400 text-white'}`}>{feedback.msg}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </LessonEnvironment>
  );
};