import { Heart } from "lucide-react";
import { useFavoritos, toggleFavorito, type FavoritoAtividade } from "@/lib/favoritos-neurotreino";

/**
 * Botão de coração (favoritar) usado nos cards do Neuro-Treino.
 * Funciona dentro de <Link> — o clique não navega.
 */
export function BotaoFavorito({
  atividade,
  className = "",
}: {
  atividade: FavoritoAtividade;
  className?: string;
}) {
  const favoritos = useFavoritos();
  const ativo = favoritos.some((f) => f.id === atividade.id);

  return (
    <button
      type="button"
      aria-label={ativo ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      aria-pressed={ativo}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorito(atividade);
      }}
      className={`grid place-items-center h-8 w-8 rounded-full bg-white/90 dark:bg-slate-900/80 shadow border border-black/5 active:scale-90 transition ${className}`}
    >
      <Heart
        className={`h-4 w-4 transition ${ativo ? "text-rose-500" : "text-slate-400"}`}
        fill={ativo ? "currentColor" : "none"}
      />
    </button>
  );
}
