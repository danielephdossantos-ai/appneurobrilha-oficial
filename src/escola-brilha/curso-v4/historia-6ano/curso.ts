import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";

/**
 * Curso: História 6º Ano — "O Códice dos Impérios Perdidos"
 *
 * Categoria TEEN — entrada no Ensino Fundamental II.
 * Skin narrativa: Brilha e Aurora encontram um artefato complexo — O Códice.
 * A cada unidade, decifram um fragmento que revela uma civilização perdida.
 *
 * Motor: PlayerGeoV1 em modo `estilo: "teen"` — HUD acadêmico, fotografia
 * real, infográficos PT-BR, sem mascote infantil.
 *
 * PILOTO: Unidade 1 (Ciência da História). Aguardando validação
 * antes de seguir com Unidades 2 a 7.
 *
 * Sete Fragmentos previstos:
 *  1. Selo do Cronista Crítico (Ciência da História)
 *  2. Fragmento do Crânio Ancestral (Evolução Humana / Povoamento das Américas)
 *  3. Selo do Escriba Real (Neolítico, Mesopotâmia e Egito)
 *  4. Escudo do Hoplita (Grécia Antiga)
 *  5. Águia Imperial (Roma Antiga)
 *  6. Painel das Rainhas Candaces (Reinos Africanos: Kush e Axum)
 *  7. Códice Decifrado (Maias, Astecas e Incas)
 */
const curso: CursoGeoV1 = {
  slug: "historia-6ano",
  disciplina: "História",
  ano: "6º Ano",
  titulo: "O Códice dos Impérios Perdidos",
  descricao:
    "Brilha e Aurora encontram um artefato complexo: O Códice dos Impérios. Pra decifrá-lo, os estudantes viram arqueólogos e historiadores críticos — analisando fontes, primeiras sociedades e as estruturas de poder que moldaram o mundo antigo.",
  corPrimaria: "#0f766e",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1],
};

export default curso;
