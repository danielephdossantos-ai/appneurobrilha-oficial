import type { UnidadeArteV1 } from "../../types";
import { aula01 } from "./aula-01-corpo-hibrido";

export const unidade1: UnidadeArteV1 = {
  slug: "unidade-1",
  numero: 1,
  titulo: "O Corpo Híbrido — Arte e Tecnologia Vestível",
  subtitulo: "Wearable art, cultura maker e performance contemporânea",
  descricao:
    "Primeira página dos Eco-Simulacros: o corpo humano vira laboratório da arte. Próteses poéticas, LEDs, circuitos flexíveis e a filosofia DIY entram em cena.",
  corTema: "#f97316",
  aulas: [aula01],
};
