/**
 * Aula 13 — "NÃO"
 * Rejeição funcional (mand de rejeição · ABA/PECS).
 * Palavras-alvo: NÃO e TARTARUGA.
 */
import type { AulaBE } from "../types";
import { url as tartaruga } from "@/assets/hiperfocos/animais/tartaruga.png.asset.json";
import { url as leao } from "@/assets/hiperfocos/animais/leao.png.asset.json";
import { url as coruja } from "@/assets/hiperfocos/animais/coruja.png.asset.json";
import { url as pipVet } from "@/assets/pip-girl-veterinaria.png.asset.json";

export const aula13Nao: AulaBE = {
  slug: "aula-13-nao",
  numero: 13,
  titulo: "NÃO",
  objetivo:
    "Rejeição funcional (mand de rejeição). Dizer NÃO com segurança — habilidade ABA/PECS.",
  palavrasAlvo: ["NÃO", "TARTARUGA"],
  cenas: [
    {
      tipo: "abertura",
      fala:
        "Oi! Hoje a gente aprende: NÃO. Quando a gente não quer, a gente fala NÃO. Pode falar NÃO!",
      imagem: pipVet,
    },
    {
      tipo: "olha",
      fala: "OLHA a TARTARUGA! TAR-TA-RU-GA. Devagarinho.",
      imagem: tartaruga,
      palavra: "TARTARUGA",
    },
    {
      tipo: "pecs",
      fala: "A tartaruga quer dormir. Toca na TARTARUGA.",
      palavra: "TARTARUGA",
      imagem: tartaruga,
      distratores: [{ palavra: "LEÃO", imagem: leao }],
    },
    {
      tipo: "reforco",
      fala: "Isso! A TARTARUGA disse NÃO pro leão. Ela quer paz!",
      imagem: tartaruga,
    },
    {
      tipo: "olha",
      fala: "OLHA a CORUJA! A coruja disse NÃO pro sol. Ela quer a noite.",
      imagem: coruja,
      palavra: "NÃO",
    },
    {
      tipo: "pecs",
      fala: "Toca na CORUJA que disse NÃO.",
      palavra: "CORUJA",
      imagem: coruja,
      distratores: [{ palavra: "LEÃO", imagem: leao }],
    },
    {
      tipo: "reforco",
      fala: "Perfeito! Você pode dizer NÃO. É seu direito!",
      imagem: coruja,
    },
    {
      tipo: "fim",
      fala: "NÃO! Você aprendeu a dizer NÃO. Muito bem! Beijo da Pip.",
      imagem: pipVet,
    },
  ],
};
