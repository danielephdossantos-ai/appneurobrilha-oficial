/**
 * Wrapper visual único: renderiza a foto real quando existir, ou um
 * placeholder com gradiente + emoji quando ainda não temos a foto.
 * Assim a criança nunca vê uma imagem quebrada.
 */
export function FotoLugar({
  imagemUrl,
  corPlaceholder,
  emoji,
  nome,
  className = "",
}: {
  imagemUrl?: string;
  corPlaceholder?: string;
  emoji: string;
  nome: string;
  className?: string;
}) {
  if (imagemUrl) {
    return (
      <img
        src={imagemUrl}
        alt={nome}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }
  const bg =
    corPlaceholder ||
    "linear-gradient(135deg, #0f766e 0%, #164e63 50%, #1e293b 100%)";
  return (
    <div
      className={`w-full h-full grid place-items-center ${className}`}
      style={{ background: bg }}
    >
      <div className="text-center">
        <div className="text-7xl md:text-8xl drop-shadow-lg">{emoji}</div>
        <div className="mt-2 text-xs uppercase tracking-widest text-white/80 font-bold">
          {nome}
        </div>
      </div>
    </div>
  );
}
