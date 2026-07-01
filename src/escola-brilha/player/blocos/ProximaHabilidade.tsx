import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass } from "lucide-react";
import { Secao } from "./Secao";
import { hasAula } from "../../registry";

export function ProximaHabilidade({
  proxima,
}: {
  proxima?: { codigo: string; titulo?: string };
}) {
  if (!proxima) {
    return (
      <Secao icon={Compass} rotulo="Próxima habilidade" cor="#4C9EFF">
        <p className="text-sm text-white/80">
          Você chegou ao fim desta aula. Volte ao catálogo pra escolher a próxima!
        </p>
        <Link
          to="/escola-brilha"
          className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white text-[#0d1f55] font-black text-sm"
        >
          Voltar ao catálogo <ArrowRight className="h-4 w-4" />
        </Link>
      </Secao>
    );
  }
  const disponivel = hasAula(proxima.codigo);
  return (
    <Secao icon={Compass} rotulo="Próxima habilidade" cor="#4C9EFF">
      <div className="rounded-2xl bg-white/10 border border-white/20 p-3 mb-3">
        <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
          {proxima.codigo}
        </div>
        {proxima.titulo && <div className="font-black mt-0.5">{proxima.titulo}</div>}
      </div>
      {disponivel ? (
        <Link
          to="/escola-brilha/$codigo"
          params={{ codigo: proxima.codigo }}
          className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-2xl bg-gradient-to-r from-[#FFC93C] to-[#FF8A4C] text-[#0d1f55] font-black active:scale-[0.98]"
        >
          Continuar <ArrowRight className="h-5 w-5" />
        </Link>
      ) : (
        <div className="text-sm text-white/70">
          Essa próxima aula ainda está sendo escrita. Volte em breve!
        </div>
      )}
    </Secao>
  );
}
