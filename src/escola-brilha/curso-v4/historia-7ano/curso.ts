import type { CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: História 7º Ano — "A Bússola do Novo Mundo"
 *
 * Categoria TEEN — continuação natural do 6º Ano.
 * Motor: PlayerGeoV1 em modo `estilo: "teen"` — HUD acadêmico, fotografia
 * real, infográficos PT-BR, sem mascote infantil.
 *
 * Sete Engrenagens da Bússola:
 *  1. Selo da Ruína Feudal (Mundo Feudal e crise do séc. XIV)
 *  2. Astrolábio da Razão (Renascimento cultural e científico)
 *  3. Selo das Teses Ocultas (Reformas Religiosas)
 *  4. Cetro de Ouro do Monarca (Absolutismo e Mercantilismo)
 *  5. Astrolábio dos Oceanos (Grandes Navegações)
 *  6. Painel do Templo Indígena Subjugado (Conquista da América)
 *  7. Estandarte da Sociedade Colonial e da Resistência (Brasil Colonial)
 */
const curso: CursoGeoV1 = {
  slug: "historia-7ano",
  disciplina: "História",
  ano: "7º Ano",
  titulo: "A Bússola do Novo Mundo",
  descricao:
    "Brilha e Aurora guiam o estudante por uma era de grandes transformações. O velho mundo feudal se choca com o Renascimento, as Reformas rachaam o cristianismo, o Absolutismo concentra poder e as Grandes Navegações abrem — pela violência — o Novo Mundo, culminando no Brasil colonial.",
  corPrimaria: "#0f766e",
  corSecundaria: "#0f172a",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7],
};

export default curso;
