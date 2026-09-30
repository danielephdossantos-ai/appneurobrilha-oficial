/**
 * Catálogo do Guarda-Roupa (Pip e Pipa) — usa SOMENTE imagens já existentes.
 * Acessórios = itens que já vêm desenhados em cada fantasia.
 */
import { url as pipMascot } from "@/assets/pip-mascot.png.asset.json";
import { url as pipBaby } from "@/assets/pip-baby.png.asset.json";
import { url as pipDinossauros } from "@/assets/pip-dinossauros.png.asset.json";
import { url as pipEspaco } from "@/assets/pip-espaco.png.asset.json";
import { url as pipArte } from "@/assets/pip-arte.png.asset.json";
import { url as pipAnimais } from "@/assets/pip-animais.png.asset.json";
import { url as pipMusica } from "@/assets/pip-musica.png.asset.json";
import { url as pipFazendinha } from "@/assets/pip-fazendinha.png.asset.json";
import { url as pipSuperHerois } from "@/assets/pip-super-herois.png.asset.json";
import { url as pipPrincesas } from "@/assets/pip-princesas.png.asset.json";
import { url as pipMinecraft } from "@/assets/pip-minecraft.png.asset.json";
import { url as pipCarros } from "@/assets/pip-carros.png.asset.json";
import { url as pipTrens } from "@/assets/pip-trens.png.asset.json";
import { url as pipRobos } from "@/assets/pip-robos.png.asset.json";
import { url as pipVeiculos } from "@/assets/pip-veiculos.png.asset.json";
import { url as pipTeenBola } from "@/assets/pip-teen-bola.png.asset.json";
import { url as pipTeenCarrinho } from "@/assets/pip-teen-carrinho.png.asset.json";
import { url as pipTeenCyber } from "@/assets/pip-teen-cyber.png.asset.json";
import { url as pipTeenPrincipe } from "@/assets/pip-teen-principe.png.asset.json";
import { url as pipTeenRoqueiro } from "@/assets/pip-teen-roqueiro.png.asset.json";
import { url as pipTeenSuperHeroi } from "@/assets/pip-teen-super-heroi.png.asset.json";
import { url as pipTeenTrator } from "@/assets/pip-teen-trator.png.asset.json";
import { url as pipTeenUrsinho } from "@/assets/pip-teen-ursinho.png.asset.json";
import { url as pipaMascot } from "@/assets/pip-girl-mascot.png.asset.json";
import { url as pipaBaby } from "@/assets/pipa-baby.png.asset.json";
import { url as pipaPrincesa } from "@/assets/pip-girl-princesas.png.asset.json";
import { url as pipaUnicornio } from "@/assets/pip-girl-unicornio.png.asset.json";
import { url as pipaDoutora } from "@/assets/pip-girl-doutora.png.asset.json";
import { url as pipaAstronauta } from "@/assets/pip-girl-astronauta.png.asset.json";
import { url as pipaBailarina } from "@/assets/pip-girl-bailarina.png.asset.json";
import { url as pipaFada } from "@/assets/pip-girl-fada.png.asset.json";
import { url as pipaSereia } from "@/assets/pip-girl-sereia.png.asset.json";
import { url as pipaConfeiteira } from "@/assets/pip-girl-confeiteira.png.asset.json";
import { url as pipaVeterinaria } from "@/assets/pip-girl-veterinaria.png.asset.json";
import { url as pipaProfessora } from "@/assets/pip-girl-professora.png.asset.json";
import { url as pipaArte } from "@/assets/pip-girl-arte.png.asset.json";
import { url as pipaMusica } from "@/assets/pip-girl-musica.png.asset.json";
import { url as pipaSuperHeroina } from "@/assets/pip-girl-super-heroina.png.asset.json";
import { url as pipaTeenBola } from "@/assets/pipa-teen-bola.png.asset.json";
import { url as pipaTeenBoneca } from "@/assets/pipa-teen-boneca.png.asset.json";
import { url as pipaTeenCyber } from "@/assets/pipa-teen-cyber.png.asset.json";
import { url as pipaTeenPrincesa } from "@/assets/pipa-teen-princesa.png.asset.json";
import { url as pipaTeenRoqueira } from "@/assets/pipa-teen-roqueira.png.asset.json";
import { url as pipaTeenSuperHeroina } from "@/assets/pipa-teen-super-heroina.png.asset.json";
import { url as pipaTeenTrator } from "@/assets/pipa-teen-trator.png.asset.json";
import { url as pipaTeenUrsinho } from "@/assets/pipa-teen-ursinho.png.asset.json";

export type Tamanho = "baby" | "grande" | "teen";
export type Mascote = "pip" | "pipa";

export type Fantasia = {
  key: string;
  mascote: Mascote;
  tamanho: Tamanho;
  nome: string;
  image: string;
  acessorios: string[];
};

const f = (mascote: Mascote, tamanho: Tamanho, key: string, nome: string, image: string, acessorios: string[]): Fantasia => ({ key, mascote, tamanho, nome, image, acessorios });

export const FANTASIAS: Fantasia[] = [
  // Pip · Baby
  f("pip", "baby", "baby", "Pip Bebê", pipBaby, ["Chupeta", "Roupinha de bebê"]),
  // Pip · Grande
  f("pip", "grande", "original", "Pip Clássico", pipMascot, ["Roupa clássica"]),
  f("pip", "grande", "dinossauros", "Pip Explorador", pipDinossauros, ["Fantasia de dino", "Chapéu de explorador"]),
  f("pip", "grande", "espaco", "Pip Astronauta", pipEspaco, ["Traje espacial", "Capacete"]),
  f("pip", "grande", "arte", "Pip Artista", pipArte, ["Boina", "Pincel", "Paleta de cores"]),
  f("pip", "grande", "animais", "Pip Veterinário", pipAnimais, ["Jaleco", "Estetoscópio"]),
  f("pip", "grande", "musica", "Pip Maestro", pipMusica, ["Roupa de maestro", "Instrumento"]),
  f("pip", "grande", "fazendinha", "Pip Fazendeiro", pipFazendinha, ["Chapéu de palha", "Macacão"]),
  f("pip", "grande", "super-herois", "Pip Super", pipSuperHerois, ["Capa", "Máscara"]),
  f("pip", "grande", "princesas", "Pip Realeza", pipPrincesas, ["Coroa", "Manto real"]),
  f("pip", "grande", "minecraft", "Pip Builder", pipMinecraft, ["Roupa de bloquinhos", "Picareta"]),
  f("pip", "grande", "carros", "Pip Piloto", pipCarros, ["Macacão de piloto", "Capacete"]),
  f("pip", "grande", "trens", "Pip Maquinista", pipTrens, ["Boné de maquinista", "Macacão"]),
  f("pip", "grande", "robos", "Pip Robô", pipRobos, ["Armadura robô", "Antena"]),
  f("pip", "grande", "veiculos", "Pip Aventureiro", pipVeiculos, ["Mapa", "Binóculos"]),
  // Pip · Teen
  f("pip", "teen", "teen-bola", "Pip Teen Jogador", pipTeenBola, ["Uniforme", "Bola"]),
  f("pip", "teen", "teen-carrinho", "Pip Teen Piloto", pipTeenCarrinho, ["Carrinho", "Boné"]),
  f("pip", "teen", "teen-cyber", "Pip Teen Cyber", pipTeenCyber, ["Óculos futuristas", "Jaqueta cyber"]),
  f("pip", "teen", "teen-principe", "Pip Teen Príncipe", pipTeenPrincipe, ["Coroa", "Roupa de príncipe"]),
  f("pip", "teen", "teen-roqueiro", "Pip Teen Roqueiro", pipTeenRoqueiro, ["Guitarra", "Jaqueta"]),
  f("pip", "teen", "teen-super-heroi", "Pip Teen Super-Herói", pipTeenSuperHeroi, ["Capa", "Máscara"]),
  f("pip", "teen", "teen-trator", "Pip Teen Fazendeiro", pipTeenTrator, ["Trator", "Chapéu"]),
  f("pip", "teen", "teen-ursinho", "Pip Teen Ursinho", pipTeenUrsinho, ["Ursinho de pelúcia"]),
  // Pipa · Baby
  f("pipa", "baby", "pipa-baby", "Pipa Bebê", pipaBaby, ["Chupeta", "Roupinha de bebê"]),
  // Pipa · Grande
  f("pipa", "grande", "pipa-original", "Pipa Clássica", pipaMascot, ["Roupa clássica"]),
  f("pipa", "grande", "pipa-princesa", "Pipa Princesa", pipaPrincesa, ["Coroa", "Vestido", "Varinha"]),
  f("pipa", "grande", "pipa-unicornio", "Pipa Unicórnio", pipaUnicornio, ["Chifre brilhante", "Asas"]),
  f("pipa", "grande", "pipa-doutora", "Pipa Doutora", pipaDoutora, ["Jaleco", "Estetoscópio"]),
  f("pipa", "grande", "pipa-astronauta", "Pipa Astronauta", pipaAstronauta, ["Traje espacial", "Capacete"]),
  f("pipa", "grande", "pipa-bailarina", "Pipa Bailarina", pipaBailarina, ["Tutu", "Sapatilhas"]),
  f("pipa", "grande", "pipa-fada", "Pipa Fada", pipaFada, ["Asas de fada", "Varinha"]),
  f("pipa", "grande", "pipa-sereia", "Pipa Sereia", pipaSereia, ["Cauda de sereia", "Concha"]),
  f("pipa", "grande", "pipa-confeiteira", "Pipa Confeiteira", pipaConfeiteira, ["Chapéu de chef", "Avental"]),
  f("pipa", "grande", "pipa-veterinaria", "Pipa Veterinária", pipaVeterinaria, ["Jaleco", "Bichinho"]),
  f("pipa", "grande", "pipa-professora", "Pipa Professora", pipaProfessora, ["Óculos", "Livro"]),
  f("pipa", "grande", "pipa-arte", "Pipa Artista", pipaArte, ["Boina", "Pincel", "Paleta"]),
  f("pipa", "grande", "pipa-musica", "Pipa Musicista", pipaMusica, ["Microfone", "Notas musicais"]),
  f("pipa", "grande", "pipa-super-heroina", "Pipa Super", pipaSuperHeroina, ["Capa", "Máscara"]),
  // Pipa · Teen
  f("pipa", "teen", "pipa-teen-bola", "Pipa Teen Jogadora", pipaTeenBola, ["Uniforme", "Bola"]),
  f("pipa", "teen", "pipa-teen-boneca", "Pipa Teen Boneca", pipaTeenBoneca, ["Boneca"]),
  f("pipa", "teen", "pipa-teen-cyber", "Pipa Teen Cyber", pipaTeenCyber, ["Óculos futuristas", "Jaqueta cyber"]),
  f("pipa", "teen", "pipa-teen-princesa", "Pipa Teen Princesa", pipaTeenPrincesa, ["Coroa", "Vestido"]),
  f("pipa", "teen", "pipa-teen-roqueira", "Pipa Teen Roqueira", pipaTeenRoqueira, ["Guitarra", "Jaqueta"]),
  f("pipa", "teen", "pipa-teen-super-heroina", "Pipa Teen Super-Heroína", pipaTeenSuperHeroina, ["Capa", "Máscara"]),
  f("pipa", "teen", "pipa-teen-trator", "Pipa Teen Fazendeira", pipaTeenTrator, ["Trator", "Chapéu"]),
  f("pipa", "teen", "pipa-teen-ursinho", "Pipa Teen Ursinho", pipaTeenUrsinho, ["Ursinho de pelúcia"]),
];

export const IMAGEM_POR_FANTASIA: Record<string, string> = Object.fromEntries(FANTASIAS.map((x) => [x.key, x.image]));

export const precoFantasia = (key: string, gratis: string) =>
  key === gratis ? 0 : 120 + (Math.abs(key.split("").reduce((a, c) => a + c.charCodeAt(0), 0)) % 5) * 40;
