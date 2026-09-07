import { listAulas } from "./registry";
import { listCursos } from "./curso-v4/registry";
import { cursosEI } from "./curso-portugues-ei/registry";
import { cursosMatematicaEI } from "./curso-matematica-ei/registry";
import { cursosInglesEI } from "./curso-ingles-ei/registry";
import { trilhaBibliotecaEncantada } from "./biblioteca-encantada/registry";
import { trilhaDislexia } from "./dislexia/registry";

export type OrigemManifesto =
  | "bncc-legado"
  | "curso-v4"
  | "portugues-ei"
  | "matematica-ei"
  | "ingles-ei"
  | "biblioteca-encantada"
  | "dislexia";

export interface ItemManifestoEscolaBrilha {
  id: string;
  origem: OrigemManifesto;
  curso: string;
  unidade?: string;
  aula: string;
  titulo: string;
  rota: string;
  player: string;
  progresso: string;
}

function rotaV4(tipo: string | undefined): { rota: string; player: string } {
  if (tipo === "portugues") return { rota: "/escola-brilha/aula-pt-v4/$curso/$aula", player: "PlayerPortuguesV4" };
  if (tipo === "geo-v1") return { rota: "/escola-brilha/aula-geo-v1/$curso/$aula", player: "PlayerGeoV1" };
  if (tipo === "arte-v1") return { rota: "/escola-brilha/aula-arte-v1/$curso/$aula", player: "PlayerArteV1" };
  return { rota: "/escola-brilha/aula-v4/$curso/$aula", player: "PlayerV4" };
}

function cursosComUnidades(
  origem: OrigemManifesto,
  cursos: readonly any[],
  rota: string,
  player: string,
  progresso: string,
): ItemManifestoEscolaBrilha[] {
  return cursos.flatMap((curso) =>
    (curso.unidades ?? []).flatMap((unidade: any) =>
      (unidade.aulas ?? []).map((aula: any) => ({
        id: `${origem}:${curso.slug}:${aula.slug}`,
        origem,
        curso: curso.slug,
        unidade: unidade.slug,
        aula: aula.slug,
        titulo: aula.titulo,
        rota,
        player,
        progresso,
      })),
    ),
  );
}

/**
 * Inventário somente-leitura. Ele reúne os catálogos existentes sem substituir
 * registries, rotas, players ou mecanismos de progresso.
 */
export function gerarManifestoEscolaBrilha(): ItemManifestoEscolaBrilha[] {
  const legado = listAulas().map((aula) => ({
    id: `bncc-legado:${aula.codigo}`,
    origem: "bncc-legado" as const,
    curso: "bncc-legado",
    aula: aula.codigo,
    titulo: aula.titulo,
    rota: "/escola-brilha/$codigo",
    player: "UniversalPlayer",
    progresso: "escola_progresso",
  }));

  const v4 = listCursos().flatMap((curso) => {
    const destino = rotaV4(curso.tipoAula);
    return curso.unidades.flatMap((unidade) =>
      unidade.aulas.map((aula) => ({
        id: `curso-v4:${curso.slug}:${aula.slug}`,
        origem: "curso-v4" as const,
        curso: curso.slug,
        unidade: unidade.slug,
        aula: aula.slug,
        titulo: aula.titulo,
        rota: destino.rota,
        player: destino.player,
        progresso: "eb.v4.progresso.<crianca>.<curso>",
      })),
    );
  });

  const ingles = cursosInglesEI.flatMap((curso: any) => {
    const unidades = [...(curso.niveis ?? []).flatMap((nivel: any) => nivel.unidades), ...(curso.unidades ?? [])];
    return cursosComUnidades(
      "ingles-ei",
      [{ ...curso, unidades }],
      "/escola-brilha/ingles-ei/$serie/$aula",
      "PlayerInglesEI",
      "eb.ei.en.concluidas.<curso>",
    );
  });

  const biblioteca = trilhaBibliotecaEncantada.aulas.map((aula) => ({
    id: `biblioteca-encantada:${aula.slug}`,
    origem: "biblioteca-encantada" as const,
    curso: trilhaBibliotecaEncantada.slug,
    aula: aula.slug,
    titulo: aula.titulo,
    rota: "/escola-brilha/biblioteca-encantada/$aula",
    player: "PlayerBibliotecaEncantada",
    progresso: "localStorage por criança",
  }));

  const dislexia = trilhaDislexia.aulas.map((aula) => ({
    id: `dislexia:${aula.slug}`,
    origem: "dislexia" as const,
    curso: trilhaDislexia.slug,
    aula: aula.slug,
    titulo: aula.titulo,
    rota: "/escola-brilha/dislexia/$aula",
    player: "PlayerDislexia",
    progresso: "localStorage por criança",
  }));

  return [
    ...legado,
    ...v4,
    ...cursosComUnidades("portugues-ei", cursosEI, "/escola-brilha/portugues-ei/$serie/$aula", "PlayerPortuguesEI", "eb.ei.pt.concluidas.<curso>"),
    ...cursosComUnidades("matematica-ei", cursosMatematicaEI, "/escola-brilha/matematica-ei/$serie/$aula", "PlayerPortuguesEI", "localStorage por criança"),
    ...ingles,
    ...biblioteca,
    ...dislexia,
  ];
}

export function resumirManifestoEscolaBrilha() {
  const itens = gerarManifestoEscolaBrilha();
  const porOrigem = Object.fromEntries(
    [...new Set(itens.map((item) => item.origem))].map((origem) => [origem, itens.filter((item) => item.origem === origem).length]),
  );
  const idsDuplicados = [...new Set(itens.map((item) => item.id).filter((id, i, ids) => ids.indexOf(id) !== i))];
  return { total: itens.length, porOrigem, idsDuplicados };
}
