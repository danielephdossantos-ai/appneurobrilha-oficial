import dinoImg from "@/assets/mascotes/dino.png";
import roboImg from "@/assets/mascotes/robo.png";
import unicornioImg from "@/assets/mascotes/unicornio.png";
import { url as pipaImg } from "@/assets/pip-girl-mascot.png.asset.json";
import { url as pipImg } from "@/assets/pip-mascot.png.asset.json";

/**
 * Imagens locais dos mascotes base (Dino, Robo, Unicórnio, Pipa, Pip).
 * O banco não tem (ou tem caminhos inválidos) para esses mascotes, então
 * a imagem local por nome é a fonte oficial na loja e no inventário.
 */
const POR_NOME: Record<string, string> = {
  dino: dinoImg,
  robo: roboImg,
  robô: roboImg,
  unicornio: unicornioImg,
  unicórnio: unicornioImg,
  pipa: pipaImg,
  pip: pipImg,
};

export function getMascoteImagem(nome: string, imageUrl?: string | null): string | undefined {
  const local = POR_NOME[(nome ?? "").trim().toLowerCase()];
  if (local) return local;
  // ignora caminhos inválidos gravados no banco (ex.: /src/assets/...)
  if (imageUrl && !imageUrl.startsWith("/src/")) return imageUrl;
  return undefined;
}
