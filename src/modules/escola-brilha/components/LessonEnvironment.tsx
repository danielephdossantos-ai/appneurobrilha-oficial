import React from 'react';

interface LessonEnvironmentProps {
  children: React.ReactNode;
}

export const LessonEnvironment: React.FC<LessonEnvironmentProps> = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-sky-50 font-sans">
      {/* Background Decor - Minimal to avoid distraction */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
      
      {/* Ground/Floor */}
      <div className="absolute bottom-0 w-full h-[25vh] bg-green-50 rounded-t-[100px]" />
      
      {/* Content Area */}
      <div className="relative z-10 w-full h-full flex flex-col items-center pt-10 px-4">
        {children}
      </div>
    </div>
  );
};
