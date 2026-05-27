
import React from 'react';
import { pedagogicalSystem } from './components/PedagogicalSystem';

function App() {
  return (
    <div className="min-h-screen bg-indigo-50 p-4 md:p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-indigo-900 tracking-tight">NeuroSaber <span className="text-indigo-500">Pedagógico</span></h1>
          <p className="text-indigo-600 font-medium italic">Sistema de Geração Dinâmica de Atividades</p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-indigo-100 flex items-center gap-2">
            <span className="text-yellow-500 text-xl">⭐</span>
            <span className="font-bold text-indigo-900">125</span>
          </div>
          <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-indigo-100 flex items-center gap-2">
            <span className="text-yellow-600 text-xl">🪙</span>
            <span className="font-bold text-indigo-900">450</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
             <PedagogicalDemo />
          </div>
          
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-indigo-50">
              <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-indigo-500 rounded-full" />
                Motor Adaptativo
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Performance</span>
                  <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400" style={{ width: '75%' }} />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Nível de Foco</span>
                  <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400" style={{ width: '90%' }} />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Fadiga</span>
                  <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400" style={{ width: '15%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-3xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Mascote do Nível 2</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl">🦁</div>
                <div>
                  <p className="font-bold">Leo, o Corajoso</p>
                  <p className="text-sm opacity-80">Faltam 12 ⭐ para o nível 3</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

// Wrapper to use the render function in App
const PedagogicalDemo = () => {
  return pedagogicalSystem.renderActivity();
};

export default App;
