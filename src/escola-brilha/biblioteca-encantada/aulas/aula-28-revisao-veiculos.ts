/**
 * Aula 28 — "REVISÃO VEÍCULOS"
 * Fecha a Semana 7. Generaliza CARRO, MOTO, ÔNIBUS, CAMINHÃO, TREM + TRATOR.
 */
import type { AulaBE } from "../types";
import { url as carro } from "@/assets/hiperfocos/carros/carro-corrida.png.asset.json";
import { url as moto } from "@/assets/hiperfocos/carros/moto.png.asset.json";
import { url as onibus } from "@/assets/hiperfocos/carros/onibus.png.asset.json";
import { url as caminhao } from "@/assets/hiperfocos/carros/caminhao.png.asset.json";
import { url as trem } from "@/assets/hiperfocos/trens/locomotiva.png.asset.json";
import { url as trator } from "@/assets/hiperfocos/carros/trator.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula28RevisaoVeiculos: AulaBE = {
  slug: "aula-28-revisao-veiculos",
  numero: 28,
  titulo: "REVISÃO VEÍCULOS",
  objetivo:
    "Fechar a Semana 7. Recuperar CARRO, MOTO, ÔNIBUS, CAMINHÃO, TREM e introduzir TRATOR.",
  palavrasAlvo: ["VEICULOS", "TRATOR"],
  cenas: [
    {
      tipo: "abertura",
      fala: "Oi! Festa dos VEÍCULOS! Vamos lembrar tudo! Vrum!",
      imagem: pipVet,
    },
    {
      tipo: "pecs",
      fala: "Toca no CARRO!",
      palavra: "CARRO",
      imagem: carro,
      distratores: [{ palavra: "MOTO", imagem: moto }],
    },
    {
      tipo: "reforco",
      fala: "Isso! CARRO! Vrum vrum!",
      imagem: carro,
    },
    {
      tipo: "pecs",
      fala: "Toca no ÔNIBUS, o que ANDA cheio de gente.",
      palavra: "ONIBUS",
      imagem: onibus,
      distratores: [{ palavra: "CAMINHAO", imagem: caminhao }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! ÔNIBUS ANDA!",
      imagem: onibus,
    },
    {
      tipo: "pecs",
      fala: "Toca no TREM, o que faz PIUÍ no trilho.",
      palavra: "TREM",
      imagem: trem,
      distratores: [{ palavra: "MOTO", imagem: moto }],
    },
    {
      tipo: "reforco",
      fala: "Isso! TREM! Piuí!",
      imagem: trem,
    },
    {
      tipo: "olha",
      fala: "OLHA um TRATOR! Tra-tor. Ele ANDA na roça e ajuda o vovô!",
      imagem: trator,
      palavra: "TRATOR",
    },
    {
      tipo: "pecs",
      fala: "Toca no TRATOR.",
      palavra: "TRATOR",
      imagem: trator,
      distratores: [{ palavra: "CARRO", imagem: carro }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! TRATOR!",
      imagem: trator,
    },
    {
      tipo: "fim",
      fala:
        "Você conhece os VEÍCULOS! CARRO, MOTO, ÔNIBUS, CAMINHÃO, TREM e TRATOR. Você arrasou! Beijo da Pip!",
      imagem: pipVet,
    },
  ],
};
