import { useContext } from "react";
import { KidsCtx } from "../PlayerPortuguesV4";

export function TeenBlackboard({ children, titulo }: { children: React.ReactNode; titulo?: string }) {
  const skin = useContext(KidsCtx);
  if (!skin.teen) return <>{children}</>;

  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-cyan-900/50 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-md">
      {/* Grid line background overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>
      
      {titulo && (
        <div className="relative z-10 mb-4 flex items-center gap-2 border-b border-cyan-500/30 pb-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></div>
          <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400">{titulo}</h3>
        </div>
      )}
      
      <div className="relative z-10">{children}</div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 h-4 w-4 border-l-2 border-t-2 border-cyan-500/50"></div>
      <div className="absolute top-0 right-0 h-4 w-4 border-r-2 border-t-2 border-cyan-500/50"></div>
      <div className="absolute bottom-0 left-0 h-4 w-4 border-l-2 border-b-2 border-cyan-500/50"></div>
      <div className="absolute bottom-0 right-0 h-4 w-4 border-r-2 border-b-2 border-cyan-500/50"></div>
    </div>
  );
}
