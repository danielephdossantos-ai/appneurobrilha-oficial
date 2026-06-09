import React, { useEffect, useMemo, useState } from 'react';
import { computeProfiles, classificationForProfiles, generateReportHTML, AnamneseData, ProfileScores } from '@/lib/anamnese';
import { KidButton } from '@/components/ui/KidButton';

const STORAGE_KEY = 'anamnese:draft';

const steps = [
  'Identificação',
  'Gestação e Nascimento',
  'Marcos do Desenvolvimento',
  'Histórico Médico',
  'Histórico Familiar',
  'Desempenho Escolar',
  'Atenção e Funções Executivas',
  'Hiperatividade e Impulsividade',
  'Comunicação Social',
  'Comportamentos Repetitivos',
  'Processamento Sensorial',
  'Linguagem',
  'Memória',
  'Coordenação Motora',
  'Aspectos Emocionais',
  'Autonomia',
];

export default function AnamnesePage() {
  const [data, setData] = useState<Partial<AnamneseData>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  });
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }, 500);
    return () => clearTimeout(t);
  }, [data]);

  const scores: ProfileScores = useMemo(() => computeProfiles(data), [data]);
  const classes = useMemo(() => classificationForProfiles(scores), [scores]);

  function updatePath(path: string, value: any) {
    setData(prev => {
      const copy = { ...prev } as any;
      const parts = path.split('.');
      let cur = copy;
      for (let i = 0; i < parts.length - 1; i++) {
        const p = parts[i];
        cur[p] = cur[p] || {};
        cur = cur[p];
      }
      cur[parts[parts.length - 1]] = value;
      return copy;
    });
  }

  function next() { setStepIndex(i => Math.min(steps.length - 1, i + 1)); }
  function prev() { setStepIndex(i => Math.max(0, i - 1)); }

  function exportReport() {
    const html = generateReportHTML(data, scores, classes as any);
    const w = window.open('', '_blank');
    if (!w) return;
    w.document.write(html);
    w.document.close();
    w.print();
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <strong>Aviso:</strong> Este aplicativo não realiza diagnóstico clínico. Os resultados são apenas indicativos e não substituem avaliação profissional.
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-black">Anamnese — Triagem de Desenvolvimento</h1>
        <div className="text-sm">Etapa {stepIndex + 1} de {steps.length}</div>
      </div>

      <div className="h-3 bg-primary/10 rounded-full mb-6 overflow-hidden">
        <div style={{ width: `${((stepIndex+1)/steps.length)*100}%` }} className="h-full bg-primary transition-all" />
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">{steps[stepIndex]}</h2>

        {/* Simple renderer for each step - for brevity we include a few controls and autosave */}
        {stepIndex === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold">Nome da criança</label>
              <input value={data.identification?.childName || ''} onChange={e=>updatePath('identification.childName', e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block font-bold">Data de nascimento</label>
              <input type="date" value={data.identification?.birthDate || ''} onChange={e=>updatePath('identification.birthDate', e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block font-bold">Sexo</label>
              <select value={data.identification?.sex || ''} onChange={e=>updatePath('identification.sex', e.target.value)} className="w-full p-2 border rounded">
                <option value="">--</option>
                <option value="female">Feminino</option>
                <option value="male">Masculino</option>
                <option value="other">Outro</option>
              </select>
            </div>
            <div>
              <label className="block font-bold">Série escolar</label>
              <input value={data.identification?.grade || ''} onChange={e=>updatePath('identification.grade', e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block font-bold">Nome do responsável</label>
              <input value={data.identification?.guardianName || ''} onChange={e=>updatePath('identification.guardianName', e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block font-bold">Escola</label>
              <input value={data.identification?.school || ''} onChange={e=>updatePath('identification.school', e.target.value)} className="w-full p-2 border rounded" />
            </div>
          </div>
        )}

        {stepIndex === 6 && (
          <div>
            <p className="mb-3 font-bold">Use a escala: 0=Nunca ... 4=Muito frequentemente</p>
            {['Distrai-se facilmente','Esquece instruções','Perde objetos','Dificuldade para concluir tarefas','Evita atividades de concentração','Mantém foco em atividades escolares'].map((q,i)=> (
              <div key={q} className="mb-3">
                <label className="block">{q}</label>
                <select value={(data.attention && data.attention[`q${i}`]) ?? ''} onChange={e=>{
                  const v = e.target.value === '' ? undefined : Number(e.target.value);
                  updatePath(`attention.q${i}`, v);
                }} className="p-2 border rounded">
                  <option value="">--</option>
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
            ))}
          </div>
        )}

        {/* Simplified: allow navigation */}
        <div className="mt-6 flex gap-3">
          <button onClick={prev} disabled={stepIndex===0} className="px-4 py-2 bg-gray-200 rounded">Anterior</button>
          <button onClick={next} disabled={stepIndex===steps.length-1} className="px-4 py-2 bg-primary text-white rounded">Próxima</button>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={()=>{ localStorage.removeItem(STORAGE_KEY); setData({}); }} className="px-3 py-2 bg-red-100 text-red-700 rounded">Limpar</button>
            <button onClick={exportReport} className="px-3 py-2 bg-green-600 text-white rounded">Gerar Relatório (imprimir)</button>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white rounded shadow">
        <h3 className="font-bold">Visão Rápida</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-3">
          <div className="p-3 bg-green-50 rounded">Cognitivo: {classes.cognitive}</div>
          <div className="p-3 bg-yellow-50 rounded">Escolar: {classes.escolar}</div>
          <div className="p-3 bg-orange-50 rounded">Comportamental: {classes.behavioral}</div>
          <div className="p-3 bg-pink-50 rounded">Socioemocional: {classes.socioemotional}</div>
          <div className="p-3 bg-slate-50 rounded">Adaptativo: {classes.adaptive}</div>
        </div>
      </div>
    </div>
  );
}
