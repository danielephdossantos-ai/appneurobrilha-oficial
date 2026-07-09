import type { UnidadeGeoV1 } from "../../types";
import { aula01 } from "./aula-01-rota-do-leite";

export const unidade3: UnidadeGeoV1 = {
  slug: "unidade-3",
  numero: 3,
  titulo: "Campo e Cidade Trabalham Juntos",
  subtitulo: "A Rota do Leite e a parceria de todo dia",
  descricao:
    "Brilha segue o leite do café da manhã pela rota completa — fazenda, caminhão resfriado, fábrica e mercado — e descobre que campo e cidade dependem um do outro pra tudo funcionar.",
  corTema: "#10b981",
  aulas: [aula01],
};
