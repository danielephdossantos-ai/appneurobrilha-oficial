import { describe, expect, it } from "vitest";
import { listCursos } from "./curso-v4/registry";
import { UNIDADES_6ANO } from "./curso-v4/geografia-6ano/dados-fund2";
import { UNIDADES_7ANO } from "./curso-v4/geografia-7ano/dados-fund2";
import { UNIDADES_8ANO } from "./curso-v4/geografia-8ano/dados-fund2";
import { UNIDADES_9ANO } from "./curso-v4/geografia-9ano/dados-fund2";
import { gerarManifestoEscolaBrilha, resumirManifestoEscolaBrilha } from "./manifesto";

describe("manifesto da Escola Brilha", () => {
  it("mapeia toda aula com rota, player e progresso", () => {
    const itens = gerarManifestoEscolaBrilha();
    expect(itens.length).toBeGreaterThan(0);
    for (const item of itens) {
      expect(item.id).toBeTruthy();
      expect(item.aula).toBeTruthy();
      expect(item.rota).toBeTruthy();
      expect(item.player).toBeTruthy();
      expect(item.progresso).toBeTruthy();
    }
  });

  it("não cria identificadores duplicados", () => {
    expect(resumirManifestoEscolaBrilha().idsDuplicados).toEqual([]);
  });

  it("mantém íntegros os seis cursos oficiais do 2º ano", () => {
    const esperados = [
      "arte-2ano",
      "ciencias-2ano",
      "geografia-2ano",
      "historia-2ano",
      "matematica-2ano",
      "portugues-2ano",
    ];
    const cursos = listCursos().filter((curso) => esperados.includes(curso.slug));

    expect(cursos.map((curso) => curso.slug).sort()).toEqual(esperados);
    for (const curso of cursos) {
      expect(curso.unidades.length).toBeGreaterThan(0);
      expect(curso.unidades.map((unidade) => unidade.numero)).toEqual(
        curso.unidades.map((_, indice) => indice + 1),
      );

      const slugs = curso.unidades.flatMap((unidade) => {
        expect(unidade.aulas.length).toBeGreaterThan(0);
        return unidade.aulas.map((aula) => aula.slug);
      });
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it("mantém íntegros os seis cursos oficiais do 3º ano", () => {
    const esperados = [
      "arte-3ano",
      "ciencias-3ano",
      "geografia-3ano",
      "historia-3ano",
      "matematica-3ano",
      "portugues-3ano",
    ];
    const cursos = listCursos().filter((curso) => esperados.includes(curso.slug));

    expect(cursos.map((curso) => curso.slug).sort()).toEqual(esperados);
    for (const curso of cursos) {
      expect(curso.unidades.length).toBeGreaterThan(0);
      expect(curso.unidades.map((unidade) => unidade.numero)).toEqual(
        curso.unidades.map((_, indice) => indice + 1),
      );

      const slugs = curso.unidades.flatMap((unidade) => {
        expect(unidade.aulas.length).toBeGreaterThan(0);
        return unidade.aulas.map((aula) => aula.slug);
      });
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it("mantém íntegros os seis cursos oficiais do 4º ano", () => {
    const esperados = [
      "arte-4ano",
      "ciencias-4ano",
      "geografia-4ano",
      "historia-4ano",
      "matematica-4ano",
      "portugues-4ano",
    ];
    const cursos = listCursos().filter((curso) => esperados.includes(curso.slug));

    expect(cursos.map((curso) => curso.slug).sort()).toEqual(esperados);
    for (const curso of cursos) {
      expect(curso.unidades.length).toBeGreaterThan(0);
      expect(curso.unidades.map((unidade) => unidade.numero)).toEqual(
        curso.unidades.map((_, indice) => indice + 1),
      );

      const slugs = curso.unidades.flatMap((unidade) => {
        expect(unidade.aulas.length).toBeGreaterThan(0);
        return unidade.aulas.map((aula) => aula.slug);
      });
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it("mantém íntegros os sete cursos oficiais do 5º ano", () => {
    const esperados = [
      "arte-5ano",
      "ciencias-5ano",
      "ensino-religioso-5ano",
      "geografia-5ano",
      "historia-5ano",
      "matematica-5ano",
      "portugues-5ano",
    ];
    const cursos = listCursos().filter((curso) => esperados.includes(curso.slug));

    expect(cursos.map((curso) => curso.slug).sort()).toEqual(esperados);
    for (const curso of cursos) {
      expect(curso.unidades.length).toBeGreaterThan(0);
      expect(curso.unidades.map((unidade) => unidade.numero)).toEqual(
        curso.unidades.map((_, indice) => indice + 1),
      );

      const slugs = curso.unidades.flatMap((unidade) => {
        expect(unidade.aulas.length).toBeGreaterThan(0);
        return unidade.aulas.map((aula) => aula.slug);
      });
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it("mantém íntegros os cursos oficiais e a trilha de Geografia do 6º ano", () => {
    const esperados = [
      "arte-6ano",
      "ciencias-6ano",
      "ensino-religioso-6ano",
      "filosofia-6ano",
      "historia-6ano",
      "matematica-6ano",
      "portugues-6ano",
    ];
    const cursos = listCursos().filter((curso) => esperados.includes(curso.slug));

    expect(cursos.map((curso) => curso.slug).sort()).toEqual(esperados);
    for (const curso of cursos) {
      const unidadesPublicadas = curso.unidades.filter((unidade) => unidade.aulas.length > 0);
      expect(unidadesPublicadas.length).toBeGreaterThan(0);
      expect(unidadesPublicadas.map((unidade) => unidade.numero)).toEqual(
        unidadesPublicadas.map((_, indice) => indice + 1),
      );

      const slugs = unidadesPublicadas.flatMap((unidade) => unidade.aulas.map((aula) => aula.slug));
      expect(new Set(slugs).size).toBe(slugs.length);
    }

    const portugues = cursos.find((curso) => curso.slug === "portugues-6ano");
    expect(portugues?.unidades.filter((unidade) => unidade.aulas.length > 0)).toHaveLength(10);
    expect(portugues?.unidades.reduce((total, unidade) => total + unidade.aulas.length, 0)).toBe(
      42,
    );
    expect(UNIDADES_6ANO.map((unidade) => unidade.unidade)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    ]);
    expect(new Set(UNIDADES_6ANO.map((unidade) => unidade.slug)).size).toBe(16);
  });

  it("mantém íntegros os cursos oficiais e a trilha de Geografia do 7º ano", () => {
    const esperados = [
      "arte-7ano",
      "ciencias-7ano",
      "ensino-religioso-7ano",
      "filosofia-7ano",
      "historia-7ano",
      "matematica-7ano",
      "portugues-7ano",
    ];
    const cursos = listCursos().filter((curso) => esperados.includes(curso.slug));

    expect(cursos.map((curso) => curso.slug).sort()).toEqual(esperados);
    for (const curso of cursos) {
      expect(curso.unidades.length).toBeGreaterThan(0);
      expect(curso.unidades.map((unidade) => unidade.numero)).toEqual(
        curso.unidades.map((_, indice) => indice + 1),
      );
      expect(curso.unidades.every((unidade) => Boolean(unidade.slug))).toBe(true);

      const slugs = curso.unidades.flatMap((unidade) => unidade.aulas.map((aula) => aula.slug));
      expect(new Set(slugs).size).toBe(slugs.length);
    }

    expect(UNIDADES_7ANO.map((unidade) => unidade.unidade)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    expect(new Set(UNIDADES_7ANO.map((unidade) => unidade.slug)).size).toBe(15);
  });

  it("mantém íntegros os cursos publicados e a trilha de Geografia do 8º ano", () => {
    const esperados = [
      "arte-8ano",
      "ciencias-8ano",
      "ensino-religioso-8ano",
      "filosofia-8ano",
      "historia-8ano",
      "matematica-8ano",
      "portugues-8ano",
    ];
    const cursos = listCursos().filter((curso) => esperados.includes(curso.slug));

    expect(cursos.map((curso) => curso.slug).sort()).toEqual(esperados);
    for (const curso of cursos) {
      const publicadas = curso.unidades.filter((unidade) => unidade.aulas.length > 0);
      expect(publicadas.length).toBeGreaterThan(0);
      expect(publicadas.every((unidade) => Boolean(unidade.slug))).toBe(true);

      const slugs = publicadas.flatMap((unidade) => unidade.aulas.map((aula) => aula.slug));
      expect(new Set(slugs).size).toBe(slugs.length);
    }

    const portugues = cursos.find((curso) => curso.slug === "portugues-8ano");
    expect(
      portugues?.unidades
        .filter((unidade) => unidade.aulas.length > 0)
        .map((unidade) => unidade.numero),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(portugues?.unidades.reduce((total, unidade) => total + unidade.aulas.length, 0)).toBe(
      41,
    );
    expect(UNIDADES_8ANO.map((unidade) => unidade.unidade)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    ]);
    expect(new Set(UNIDADES_8ANO.map((unidade) => unidade.slug)).size).toBe(23);
  });

  it("mantém íntegros os cursos publicados e a trilha de Geografia do 9º ano", () => {
    const esperados = [
      "arte-9ano",
      "ciencias-9ano",
      "ensino-religioso-9ano",
      "filosofia-9ano",
      "historia-9ano",
      "matematica-9ano",
      "portugues-9ano",
    ];
    const cursos = listCursos().filter((curso) => esperados.includes(curso.slug));

    expect(cursos.map((curso) => curso.slug).sort()).toEqual(esperados);
    for (const curso of cursos) {
      const publicadas = curso.unidades.filter((unidade) => unidade.aulas.length > 0);
      expect(publicadas.length).toBeGreaterThan(0);
      expect(curso.unidades.every((unidade) => Boolean(unidade.slug))).toBe(true);

      const slugs = publicadas.flatMap((unidade) => unidade.aulas.map((aula) => aula.slug));
      expect(new Set(slugs).size).toBe(slugs.length);
    }

    const portugues = cursos.find((curso) => curso.slug === "portugues-9ano");
    expect(
      portugues?.unidades
        .filter((unidade) => unidade.aulas.length > 0)
        .map((unidade) => unidade.numero),
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(portugues?.unidades.reduce((total, unidade) => total + unidade.aulas.length, 0)).toBe(
      37,
    );
    expect(UNIDADES_9ANO.map((unidade) => unidade.unidade)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    ]);
    expect(new Set(UNIDADES_9ANO.map((unidade) => unidade.slug)).size).toBe(13);
  });

  it("mantém identificação e endereços em todas as unidades oficiais publicadas", () => {
    const problemas: string[] = [];
    for (const curso of listCursos().filter((item) => !item.slug.endsWith("-v2"))) {
      for (const unidade of curso.unidades) {
        if (!unidade.aulas.length) continue;
        if (!unidade.slug) problemas.push(`${curso.slug}: unidade ${unidade.numero} sem endereço`);
        if (!unidade.titulo) problemas.push(`${curso.slug}: unidade ${unidade.numero} sem título`);
        if (!Number.isInteger(unidade.numero)) problemas.push(`${curso.slug}: unidade sem número`);
        for (const aula of unidade.aulas) {
          if (!aula.slug)
            problemas.push(`${curso.slug}: aula sem endereço na unidade ${unidade.numero}`);
          if (!aula.titulo)
            problemas.push(`${curso.slug}: aula sem título na unidade ${unidade.numero}`);
        }
      }
    }
    expect(problemas).toEqual([]);
  });

  it("mantém os códigos BNCC compatíveis com série e disciplina", () => {
    const siglas: Record<string, string> = {
      "Língua Portuguesa": "LP",
      Matemática: "MA",
      Ciências: "CI",
      Geografia: "GE",
      História: "HI",
      Arte: "AR",
      "Ensino Religioso": "ER",
    };
    const problemas: string[] = [];

    for (const curso of listCursos().filter((item) => !item.slug.endsWith("-v2"))) {
      const anosDeclarados = [...curso.ano.matchAll(/\d/g)].map((item) => Number(item[0]));
      const anoInicial = anosDeclarados[0];
      const anoFinal = anosDeclarados.at(-1) ?? anoInicial;
      const sigla = siglas[curso.disciplina];
      if (!anoInicial || !sigla) continue;

      for (const unidade of curso.unidades) {
        for (const aula of unidade.aulas) {
          const codigos = JSON.stringify(aula).match(/EF\d{2}[A-Z]{2}\d{2}/g) ?? [];
          for (const codigo of new Set(codigos)) {
            const faixa = codigo.slice(2, 4);
            const componente = codigo.slice(4, 6);
            const faixasCompartilhadas: Record<string, [number, number]> = {
              "12": [1, 2],
              "15": [1, 5],
              "35": [3, 5],
              "67": [6, 7],
              "69": [6, 9],
              "89": [8, 9],
            };
            const intervaloCodigo = faixasCompartilhadas[faixa] ?? [Number(faixa), Number(faixa)];
            const serieCompativel =
              intervaloCodigo[0] <= anoFinal && intervaloCodigo[1] >= anoInicial;
            if (!serieCompativel || componente !== sigla) {
              problemas.push(`${curso.slug}/${aula.slug}: ${codigo}`);
            }
          }
        }
      }
    }
    expect(problemas).toEqual([]);
  });

  it("mantém os 11 momentos em todas as aulas de Português do 6º ao 9º ano", () => {
    const camposObrigatorios = [
      "momento01_motivacao",
      "momento02_previsao",
      "momento03_vocabulario",
      "momento04_leituraGuiada",
      "momento05_compreensao",
      "momento06_personagensCenario",
      "momento07_sequencia",
      "momento08_leituraIndependente",
      "momento09_revisao",
      "momento10_avaliacao",
      "momento11_missaoFamilia",
    ] as const;
    const problemas: string[] = [];

    for (const curso of listCursos().filter((item) => /^portugues-[6-9]ano$/.test(item.slug))) {
      for (const unidade of curso.unidades) {
        for (const aula of unidade.aulas) {
          const camposDaAula = aula as unknown as Record<string, unknown>;
          for (const campo of camposObrigatorios) {
            if (!camposDaAula[campo]) problemas.push(`${curso.slug}/${aula.slug}: sem ${campo}`);
          }
          if (!aula.bncc?.length) problemas.push(`${curso.slug}/${aula.slug}: sem BNCC`);
          if (!aula.recompensa?.xp || !aula.recompensa?.moedas) {
            problemas.push(`${curso.slug}/${aula.slug}: recompensa incompleta`);
          }
        }
      }
    }

    expect(problemas).toEqual([]);
  });

  it("mantém conteúdo visível e respostas válidas nas aulas de Português do 6º ao 9º ano", () => {
    const problemas: string[] = [];
    const textoValido = (valor: unknown) => typeof valor === "string" && valor.trim().length > 0;

    for (const curso of listCursos().filter((item) => /^portugues-[6-9]ano$/.test(item.slug))) {
      for (const unidade of curso.unidades) {
        for (const aulaBase of unidade.aulas) {
          const aula = aulaBase as any;
          const endereco = `${curso.slug}/${aula.slug}`;
          if (!textoValido(aula.titulo)) problemas.push(`${endereco}: título vazio`);
          if (!Number.isFinite(aula.duracaoMin) || aula.duracaoMin <= 0) {
            problemas.push(`${endereco}: duração inválida`);
          }
          if (
            !textoValido(aula.momento01_motivacao?.titulo) ||
            !textoValido(aula.momento01_motivacao?.historia)
          ) {
            problemas.push(`${endereco}: motivação incompleta`);
          }
          if (!textoValido(aula.momento04_leituraGuiada?.instrucao)) {
            problemas.push(`${endereco}: leitura guiada sem instrução`);
          }
          const paragrafos = aula.momento04_leituraGuiada?.leitura?.paragrafos;
          if (
            !Array.isArray(paragrafos) ||
            paragrafos.length === 0 ||
            paragrafos.some((item: unknown) => !textoValido(item))
          ) {
            problemas.push(`${endereco}: leitura guiada sem texto`);
          }
          const revisao = aula.momento09_revisao?.pontos;
          if (
            !Array.isArray(revisao) ||
            revisao.length === 0 ||
            revisao.some((item: unknown) => !textoValido(item))
          ) {
            problemas.push(`${endereco}: revisão incompleta`);
          }
          const missao = aula.momento11_missaoFamilia;
          if (
            !textoValido(missao?.titulo) ||
            !Array.isArray(missao?.passos) ||
            missao.passos.length === 0
          ) {
            problemas.push(`${endereco}: missão prática incompleta`);
          }

          for (const momento of [
            "momento05_compreensao",
            "momento08_leituraIndependente",
            "momento10_avaliacao",
          ]) {
            const perguntas = aula[momento]?.perguntas;
            if (!Array.isArray(perguntas) || perguntas.length === 0) {
              problemas.push(`${endereco}: ${momento} sem perguntas`);
              continue;
            }
            perguntas.forEach((questao: any, indice: number) => {
              const opcoes = questao?.opcoes;
              if (!textoValido(questao?.pergunta)) {
                problemas.push(`${endereco}: ${momento} pergunta ${indice + 1} vazia`);
              }
              if (
                !Array.isArray(opcoes) ||
                opcoes.length < 2 ||
                opcoes.some((item: unknown) => !textoValido(item))
              ) {
                problemas.push(
                  `${endereco}: ${momento} pergunta ${indice + 1} sem alternativas válidas`,
                );
              } else if (
                !Number.isInteger(questao?.correta) ||
                questao.correta < 0 ||
                questao.correta >= opcoes.length
              ) {
                problemas.push(
                  `${endereco}: ${momento} pergunta ${indice + 1} com resposta inválida`,
                );
              }
            });
          }
        }
      }
    }

    expect(problemas).toEqual([]);
  });

  it("resume a cobertura publicada sem contar pilotos", () => {
    const resumo = listCursos()
      .filter((curso) => !curso.slug.endsWith("-v2") && /\dº Ano/.test(curso.ano))
      .map((curso) => ({
        ano: curso.ano,
        disciplina: curso.disciplina,
        unidadesPublicadas: curso.unidades.filter((unidade) => unidade.aulas.length > 0).length,
        unidadesVazias: curso.unidades.filter((unidade) => unidade.aulas.length === 0).length,
        aulas: curso.unidades.reduce((total, unidade) => total + unidade.aulas.length, 0),
      }))
      .sort((a, b) => a.ano.localeCompare(b.ano) || a.disciplina.localeCompare(b.disciplina));
    expect(resumo.length).toBeGreaterThan(0);
    expect(resumo.filter((item) => item.unidadesVazias > 0)).toEqual([]);
  });
});
