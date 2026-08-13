import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useMascot, Mascot } from "@/contexts/MascotContext";
import { motion, AnimatePresence } from "framer-motion";
import { KidCard } from "@/components/ui/KidCard";
import { KidButton } from "@/components/ui/KidButton";
import { ShoppingBag, Star, Sparkles, ChevronRight, Globe2, Check, Lock } from "lucide-react";
import { supabase } from "@/database/supabase/client";
import { useAppState } from "@/core/store";
import { EggHatchCinematic, shouldShowEggHatch } from "@/components/pip/EggHatchCinematic";
import { url as pipMascot } from "@/assets/pip-mascot.png.asset.json";
import { url as pipEgg } from "@/assets/pip-egg.png.asset.json";
import { url as pipHatching } from "@/assets/pip-hatching.png.asset.json";
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
import { url as pipaMascot } from "@/assets/pip-girl-mascot.png.asset.json";
import { url as pipaEgg } from "@/assets/pipa-egg.png.asset.json";
import { url as pipaHatching } from "@/assets/pipa-hatching.png.asset.json";
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
import { url as pipTeenSuperHeroi } from "@/assets/pip-teen-super-heroi.png.asset.json";
import { url as pipaTeenSuperHeroina } from "@/assets/pipa-teen-super-heroina.png.asset.json";
import { url as pipTeenPrincipe } from "@/assets/pip-teen-principe.png.asset.json";
import { url as pipaTeenPrincesa } from "@/assets/pipa-teen-princesa.png.asset.json";
import { url as pipTeenRoqueiro } from "@/assets/pip-teen-roqueiro.png.asset.json";
import { url as pipaTeenRoqueira } from "@/assets/pipa-teen-roqueira.png.asset.json";
import { url as pipTeenCyber } from "@/assets/pip-teen-cyber.png.asset.json";
import { url as pipaTeenCyber } from "@/assets/pipa-teen-cyber.png.asset.json";
import { url as pipTeenUrsinho } from "@/assets/pip-teen-ursinho.png.asset.json";
import { url as pipaTeenUrsinho } from "@/assets/pipa-teen-ursinho.png.asset.json";
import { url as pipTeenCarrinho } from "@/assets/pip-teen-carrinho.png.asset.json";
import { url as pipaTeenBoneca } from "@/assets/pipa-teen-boneca.png.asset.json";
import { url as pipTeenBola } from "@/assets/pip-teen-bola.png.asset.json";
import { url as pipaTeenBola } from "@/assets/pipa-teen-bola.png.asset.json";
import KidLiveMascot from "@/components/ui/KidLiveMascot";
import { PipEvolution } from "@/components/pip/PipEvolution";
import { getMascoteImagem } from "@/lib/mascote-imagens";
import { cn } from "@/utils/utils";
import { useHiperfoco } from "@/context/HiperfocoContext";
import { toast } from "sonner";

// World thumbnails (cenários) — using the same illustrated worlds from Neuro-Treino
import { url as worldAnimais } from "@/assets/neuro-treino/worlds/animais.jpg.asset.json";
import { url as worldArte } from "@/assets/neuro-treino/worlds/arte.jpg.asset.json";
import { url as worldCarros } from "@/assets/neuro-treino/worlds/carros.jpg.asset.json";
import { url as worldDinossauros } from "@/assets/neuro-treino/worlds/dinossauros.jpg.asset.json";
import { url as worldEspaco } from "@/assets/neuro-treino/worlds/espaco.jpg.asset.json";
import { url as worldFazendinha } from "@/assets/neuro-treino/worlds/fazendinha.jpg.asset.json";
import { url as worldHerois } from "@/assets/neuro-treino/worlds/herois.jpg.asset.json";
import { url as worldMinecraft } from "@/assets/neuro-treino/worlds/minecraft.jpg.asset.json";
import { url as worldMusica } from "@/assets/neuro-treino/worlds/musica.jpg.asset.json";
import { url as worldPrincesas } from "@/assets/neuro-treino/worlds/princesas.jpg.asset.json";
import { url as worldRobos } from "@/assets/neuro-treino/worlds/robos.jpg.asset.json";
import { url as worldTrens } from "@/assets/neuro-treino/worlds/trens.jpg.asset.json";
import { url as worldVeiculos } from "@/assets/neuro-treino/worlds/veiculos.jpg.asset.json";
import { url as worldOceano } from "@/assets/neuro-treino/worlds/oceano.jpg.asset.json";
import { url as worldFloresta } from "@/assets/neuro-treino/worlds/floresta.jpg.asset.json";
import { url as worldCastelo } from "@/assets/neuro-treino/worlds/castelo.jpg.asset.json";

// Novos mundos de quebra-cabeca
import { url as worldJardimPuzzle } from "@/assets/mundos/mundo-jardim-quebra-cabeca.jpg.asset.json";
import { url as worldMusicaPuzzle } from "@/assets/mundos/mundo-musica-quebra-cabeca.jpg.asset.json";
import { url as worldCasteloPuzzle } from "@/assets/mundos/mundo-castelo-quebra-cabeca.jpg.asset.json";
import { url as worldCidadePuzzle } from "@/assets/mundos/mundo-cidade-quebra-cabeca.jpg.asset.json";
import { url as worldEspacoPuzzle } from "@/assets/mundos/mundo-espacial-quebra-cabeca.jpg.asset.json";
import { url as worldEngrenagensPuzzle } from "@/assets/mundos/mundo-engrenagens-quebra-cabeca.jpg.asset.json";
import { url as worldClinicaPuzzle } from "@/assets/mundos/mundo-clinica-quebra-cabeca.jpg.asset.json";
import { url as worldEscolaPuzzle } from "@/assets/mundos/mundo-escola-quebra-cabeca.jpg.asset.json";
import { url as worldDoutoraPuzzle } from "@/assets/mundos/mundo-doutora-quebra-cabeca.jpg.asset.json";
import { url as worldDocesPuzzle } from "@/assets/mundos/mundo-doces-quebra-cabeca.jpg.asset.json";
import { url as worldTremPuzzle } from "@/assets/mundos/mundo-trem-quebra-cabeca.jpg.asset.json";
import { url as worldPistaPuzzle } from "@/assets/mundos/mundo-pista-quebra-cabeca.jpg.asset.json";
import { url as worldArtistaPuzzle } from "@/assets/mundos/mundo-artista-quebra-cabeca.jpg.asset.json";
import { url as worldAmigosPuzzle } from "@/assets/mundos/mundo-amigos-quebra-cabeca.jpg.asset.json";

type WorldOption = {
  id: string;
  label: string;
  emoji: string;
  description: string;
  image: string;
  hiperfocoId?: "minecraft" | "dinossauros" | "herois" | "animais" | "carros";
  customLabel?: string;
};

const WORLDS: WorldOption[] = [
  {
    id: "w-dino",
    label: "Dinossauros",
    emoji: "🦖",
    description: "Era jurássica cheia de rugidos e fósseis.",
    image: worldDinossauros,
    hiperfocoId: "dinossauros",
  },
  {
    id: "w-minecraft",
    label: "Minecraft",
    emoji: "🟩",
    description: "Construa aventuras bloco a bloco.",
    image: worldMinecraft,
    hiperfocoId: "minecraft",
  },
  {
    id: "w-espaco",
    label: "Espaço",
    emoji: "🚀",
    description: "Foguetes, planetas e estrelas brilhando.",
    image: worldEspaco,
    customLabel: "Espaço",
  },
  {
    id: "w-herois",
    label: "Super-Heróis",
    emoji: "🦸",
    description: "Poderes incríveis para salvar o dia!",
    image: worldHerois,
    hiperfocoId: "herois",
  },
  {
    id: "w-animais",
    label: "Animais",
    emoji: "🐾",
    description: "Floresta cheia de amigos peludos.",
    image: worldAnimais,
    hiperfocoId: "animais",
  },
  {
    id: "w-carros",
    label: "Carros",
    emoji: "🚗",
    description: "Acelere na pista de corrida!",
    image: worldCarros,
    hiperfocoId: "carros",
  },
  {
    id: "w-fazendinha",
    label: "Fazendinha",
    emoji: "🚜",
    description: "Bichinhos, plantação e muito sol.",
    image: worldFazendinha,
    customLabel: "Fazendinha",
  },
  {
    id: "w-arte",
    label: "Arte",
    emoji: "🎨",
    description: "Cores, pincéis e muita imaginação.",
    image: worldArte,
    customLabel: "Arte",
  },
  {
    id: "w-musica",
    label: "Música",
    emoji: "🎵",
    description: "Instrumentos mágicos e ritmo no ar.",
    image: worldMusica,
    customLabel: "Música",
  },
  {
    id: "w-princesas",
    label: "Princesas",
    emoji: "👑",
    description: "Castelos encantados e reinos mágicos.",
    image: worldPrincesas,
    customLabel: "Princesas",
  },
  {
    id: "w-robos",
    label: "Robôs",
    emoji: "🤖",
    description: "Tecnologia, engrenagens e futuro.",
    image: worldRobos,
    customLabel: "Robôs",
  },
  {
    id: "w-trens",
    label: "Trens",
    emoji: "🚂",
    description: "Estações, trilhos e grandes viagens.",
    image: worldTrens,
    customLabel: "Trens",
  },
  {
    id: "w-veiculos",
    label: "Veículos",
    emoji: "🚙",
    description: "Caminhões, motos e muita ação.",
    image: worldVeiculos,
    customLabel: "Veículos",
  },
  {
    id: "w-oceano",
    label: "Oceano",
    emoji: "🐠",
    description: "Mergulhe no fundo do mar cheio de vida.",
    image: worldOceano,
    customLabel: "Oceano",
  },
  {
    id: "w-floresta",
    label: "Floresta Encantada",
    emoji: "🍄",
    description: "Trilhas mágicas, fadas e cogumelos brilhantes.",
    image: worldFloresta,
    customLabel: "Floresta",
  },
  {
    id: "w-castelo",
    label: "Castelo Mágico",
    emoji: "🏰",
    description: "Torres nas nuvens com dragões amigos.",
    image: worldCastelo,
    customLabel: "Castelo",
  },
  {
    id: "w-jardim-puzzle",
    label: "Jardim Mágico",
    emoji: "🧩",
    description: "Um jardim encantado feito de peças coloridas.",
    image: worldJardimPuzzle,
  },
  {
    id: "w-musica-puzzle",
    label: "Palco Melodia",
    emoji: "🎹",
    description: "Um show de luzes e notas musicais vibrantes.",
    image: worldMusicaPuzzle,
  },
  {
    id: "w-castelo-puzzle",
    label: "Reino Brilhante",
    emoji: "✨",
    description: "O castelo dos sonhos com carruagens e fontes.",
    image: worldCasteloPuzzle,
  },
  {
    id: "w-cidade-puzzle",
    label: "Cidade Futuro",
    emoji: "🏙️",
    description: "Metropole de quebra-cabeca com luzes de neon.",
    image: worldCidadePuzzle,
  },
  {
    id: "w-espaco-puzzle",
    label: "Portal Galactico",
    emoji: "🌀",
    description: "Viaje pelo cosmos em uma estacao espacial.",
    image: worldEspacoPuzzle,
  },
  {
    id: "w-engrenagens-puzzle",
    label: "Fábrica de Ideias",
    emoji: "⚙️",
    description: "Engrenagens e invenções em um mundo de peças.",
    image: worldEngrenagensPuzzle,
  },
  {
    id: "w-clinica-puzzle",
    label: "Clínica Divertida",
    emoji: "🏥",
    description: "Um lugar de cuidado e carinho todo colorido.",
    image: worldClinicaPuzzle,
  },
  {
    id: "w-escola-puzzle",
    label: "Escola Mágica",
    emoji: "🏫",
    description: "Aprender é uma grande aventura de montar.",
    image: worldEscolaPuzzle,
  },
  {
    id: "w-doutora-puzzle",
    label: "Consultório da Pip",
    emoji: "👩‍⚕️",
    description: "Brincando de médica em um mundo de quebra-cabeça.",
    image: worldDoutoraPuzzle,
  },
  {
    id: "w-doces-puzzle",
    label: "Mundo dos Doces",
    emoji: "🍭",
    description: "Doces, cores e muitas peças açucaradas.",
    image: worldDocesPuzzle,
  },
  {
    id: "w-trem-puzzle",
    label: "Estação Alegria",
    emoji: "🚂",
    description: "Viaje nos trilhos de um mundo montável.",
    image: worldTremPuzzle,
  },
  {
    id: "w-pista-puzzle",
    label: "Pista Radical",
    emoji: "🏎️",
    description: "Acelere fundo nas curvas de quebra-cabeça.",
    image: worldPistaPuzzle,
  },
  {
    id: "w-artista-puzzle",
    label: "Ateliê Colorido",
    emoji: "🎨",
    description: "Pinte e monte o seu próprio cenário.",
    image: worldArtistaPuzzle,
  },
  {
    id: "w-amigos-puzzle",
    label: "Vale dos Amigos",
    emoji: "🤝",
    description: "Onde todos se unem como peças perfeitas.",
    image: worldAmigosPuzzle,
  },
];

// O RESTANTE DO ARQUIVO CONTINUA AQUI - NÃO FOI ALTERADO NAS LINHAS ABAIXO
// (Vou ler o resto para completar o write)
