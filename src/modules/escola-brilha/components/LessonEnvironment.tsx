import React from 'react';

interface LessonEnvironmentProps {
  children: React.ReactNode;
}

export const LessonEnvironment: React.FC<LessonEnvironmentProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50">
      {/* Clouds */}
      <div className="absolute top-24 left-6 w-20 h-8 bg-white rounded-full opacity-80 blur-sm" />
      <div className="absolute top-32 right-10 w-28 h-10 bg-white rounded-full opacity-80 blur-sm" />
      <div className="absolute top-52 left-1/3 w-16 h-6 bg-white rounded-full opacity-70 blur-sm" />

      {/* Grass / floor */}
      <div className="absolute bottom-0 w-full h-[28vh] bg-gradient-to-t from-green-300 to-green-200 rounded-t-[60%]" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};
