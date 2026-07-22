import type { TrilhaBE } from "./types";
import { aula01Olha } from "./aulas/aula-01-olha";
import { aula02Quero } from "./aulas/aula-02-quero";
import { aula03Mais } from "./aulas/aula-03-mais";
import { aula04Acabou } from "./aulas/aula-04-acabou";
import { aula05Oi } from "./aulas/aula-05-oi";
import { aula06QueroVer } from "./aulas/aula-06-quero-ver";
import { aula07Grande } from "./aulas/aula-07-grande";
import { aula08Dorme } from "./aulas/aula-08-dorme";
import { aula09Pequeno } from "./aulas/aula-09-pequeno";
import { aula10Come } from "./aulas/aula-10-come";
import { aula11Igual } from "./aulas/aula-11-igual";
import { aula12Revisao } from "./aulas/aula-12-revisao";
import { aula13Nao } from "./aulas/aula-13-nao";
import { aula14Sim } from "./aulas/aula-14-sim";
import { aula15Diferente } from "./aulas/aula-15-diferente";
import { aula16RevisaoModulo } from "./aulas/aula-16-revisao-modulo";
import { aula17OlhaDinossauro } from "./aulas/aula-17-olha-dinossauro";
import { aula18Corre } from "./aulas/aula-18-corre";
import { aula19Forte } from "./aulas/aula-19-forte";
import { aula20RevisaoDinossauros } from "./aulas/aula-20-revisao-dinossauros";
import { aula21OlhaFoguete } from "./aulas/aula-21-olha-foguete";
import { aula22Sobe } from "./aulas/aula-22-sobe";
import { aula23Brilha } from "./aulas/aula-23-brilha";
import { aula24RevisaoEspaco } from "./aulas/aula-24-revisao-espaco";

export const trilhaBibliotecaEncantada: TrilhaBE = {
  slug: "biblioteca-encantada",
  titulo: "A Biblioteca Encantada",
  descricao:
    "Curso de linguagem para os anos iniciais, neuroinclusivo. Une ABA, método fônico, TEACCH, PECS, Denver e Orton-Gillingham. Uma aula por vez, no ritmo da criança.",
  aulas: [
    aula01Olha,
    aula02Quero,
    aula03Mais,
    aula04Acabou,
    aula05Oi,
    aula06QueroVer,
    aula07Grande,
    aula08Dorme,
    aula09Pequeno,
    aula10Come,
    aula11Igual,
    aula12Revisao,
    aula13Nao,
    aula14Sim,
    aula15Diferente,
    aula16RevisaoModulo,
    aula17OlhaDinossauro,
    aula18Corre,
    aula19Forte,
    aula20RevisaoDinossauros,
    aula21OlhaFoguete,
    aula22Sobe,
    aula23Brilha,
    aula24RevisaoEspaco,
  ],
};

export function getAulaBE(slug: string) {
  return trilhaBibliotecaEncantada.aulas.find((a) => a.slug === slug);
}
