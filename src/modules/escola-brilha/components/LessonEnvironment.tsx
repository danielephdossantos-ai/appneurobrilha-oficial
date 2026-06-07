import React from 'react';

interface LessonEnvironmentProps {
  children: React.ReactNode;
  variant?: 'A' | 'B' | 'C' | 'Modern';
}

export const LessonEnvironment: React.FC<LessonEnvironmentProps> = ({ children, variant = 'A' }) => {
  // Interface A (Pré/1º): cenário lúdico com nuvens e grama
  if (variant === 'A') {
    return (
      <div className="relative w-full min-h-screen overflow-hidden font-sans bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50">
        <div className="absolute top-24 left-6 w-20 h-8 bg-white rounded-full opacity-80 blur-sm" />
        <div className="absolute top-32 right-10 w-28 h-10 bg-white rounded-full opacity-80 blur-sm" />
        <div className="absolute top-52 left-1/3 w-16 h-6 bg-white rounded-full opacity-70 blur-sm" />
        <div className="absolute bottom-0 w-full h-[28vh] bg-gradient-to-t from-green-300 to-green-200 rounded-t-[60%]" />
        <div className="relative z-10 w-full min-h-screen flex flex-col items-center">
          {children}
        </div>
      </div>
    );
  }

  // Interface B (2º-5º): fundo violeta lúdico com gradiente suave
  if (variant === 'B') {
    return (
      <div className="relative w-full min-h-screen overflow-hidden font-sans bg-gradient-to-b from-violet-100 via-purple-50 to-emerald-50">
        <div className="absolute top-20 left-8 w-24 h-10 bg-white rounded-full opacity-60 blur-md" />
        <div className="absolute top-40 right-12 w-32 h-12 bg-white rounded-full opacity-50 blur-md" />
        <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-emerald-200/70 to-transparent rounded-t-[40%]" />
        <div className="relative z-10 w-full min-h-screen flex flex-col items-center">
          {children}
        </div>
      </div>
    );
  }

  // Interface C / Moderna (6º-9º): plataforma educacional sóbria
  return (
    <div className="relative w-full min-h-screen font-sans bg-slate-100">
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};
