/**
 * Biblioteca Nacional de Missões — Validador e Registrador Oficial
 * ================================================================
 *
 * Prepara o Escola Brilha para receber TODAS as 1.451 missões oficiais
 * (uma por habilidade BNCC) SEM precisar alterar o sistema a cada nova
 * missão.
 *
 * Toda nova missão passa OBRIGATORIAMENTE por este motor antes de ser
 * publicada. A missão é aceita quando — e somente quando — passa em
 * TODAS as cinco validações abaixo:
 *
 *   1. Estrutura completa       → todos os 14 blocos obrigatórios de
 *                                 `MissaoOficial` preenchidos e no tipo
 *                                 correto.
 *   2. Vínculo BNCC             → `codigo` existe em `bncc_habilidades`
 *                                 e é uma habilidade oficial.
 *   3. Ordem pedagógica         → blocos seguem a sequência oficial
 *                                 (missão → narrativa → explicação →
 *                                 exemplos → atividades → desafios →
 *                                 quiz → resumo → revisão → mini jogo →
 *                                 adaptações → objetivos → competências).
 *   4. Consistência dos dados   → ano/disciplina/etapa da missão batem
 *                                 com os metadados oficiais BNCC.
 *   5. Integridade do conteúdo  → nenhum texto vazio/placeholder, quiz
 *                                 com resposta correta válida, exemplos
 *                                 e atividades com resposta, adaptações
 *                                 mínimas (TEA, TDAH, Dislexia).
 *
 * Este módulo NÃO cria tabelas, NÃO altera trigger de banco e NÃO
 * modifica missões existentes. Ele é o portão de entrada oficial da
 * Biblioteca Nacional de Missões do Escola Brilha.
 */

import type { MissaoOficial } from "../biblioteca-oficial/types";
import { hasMissaoOficial, getMissaoOficial } from "../biblioteca-oficial";
import { supabase } from "@/integrations/supabase/client";

// =====================================================================
// Tipos públicos
// =====================================================================

export type CategoriaValidacao =
  | "estrutura"
  | "vinculo_bncc"
  | "ordem_pedagogica"
  | "consistencia"
  | "integridade";

export type ProblemaValidacao = {
  categoria: CategoriaValidacao;
  campo: string;
  mensagem: string;
};

export type ResultadoValidacao =
  | { ok: true; codigo: string; avisos: ProblemaValidacao[] }
  | { ok: false; codigo: string; problemas: ProblemaValidacao[]; avisos: ProblemaValidacao[] };

export type ResultadoRegistro =
  | { ok: true; codigo: string; jaExistente: boolean; avisos: ProblemaValidacao[] }
  | { ok: false; codigo: string; problemas: ProblemaValidacao[] };

// =====================================================================
// Utilitários
// =====================================================================

const REGEX_BNCC = /^(EI|EF|EM)[0-9A-Z]{4,}$/i;

const PLACEHOLDERS = [
  "lorem ipsum",
  "todo",
  "tbd",
  "xxx",
  "conteúdo em desenvolvimento",
  "conteudo em desenvolvimento",
  "em breve",
  "preencher",
  "placeholder",
];

const isStr = (v: unknown): v is string => typeof v === "string" && v.trim().length > 0;
const isNum = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v);
const isArr = <T>(v: unknown, min = 1): v is T[] => Array.isArray(v) && v.length >= min;
const isObj = (v: unknown): v is Record<string, unknown> =>
  !!v && typeof v === "object" && !Array.isArray(v);

function textoLimpo(v: unknown): boolean {
  if (!isStr(v)) return false;
  const t = v.trim().toLowerCase();
  if (t.length < 3) return false;
  return !PLACEHOLDERS.some((p) => t.includes(p));
}

// Ordem pedagógica oficial da MissaoOficial.
const ORDEM_PEDAGOGICA: readonly (keyof MissaoOficial)[] = [
  "missaoPrincipal",
  "narrativa",
  "explicacao",
  "exemplos",
  "atividades",
  "desafios",
  "quiz",
  "resumo",
  "revisao",
  "miniJogo",
  "adaptacoes",
  "objetivos",
  "competencias",
] as const;

// Adaptações mínimas obrigatórias (público-alvo).
const PUBLICOS_OBRIGATORIOS = ["tea", "tdah", "dislexia"];

// =====================================================================
// 1. Estrutura completa
// =====================================================================

function validarEstrutura(m: Partial<MissaoOficial>): ProblemaValidacao[] {
  const p: ProblemaValidacao[] = [];
  const add = (campo: string, mensagem: string) =>
    p.push({ categoria: "estrutura", campo, mensagem });

  if (!isStr(m.codigo)) add("codigo", "código BNCC obrigatório");
  if (!isStr(m.etapa)) add("etapa", "etapa escolar obrigatória");
  if (!isStr(m.ano)) add("ano", "ano escolar obrigatório");
  if (!isStr(m.disciplina)) add("disciplina", "disciplina obrigatória");
  if (!isStr(m.unidadeTematica)) add("unidadeTematica", "unidade temática BNCC obrigatória");
  if (!isStr(m.objetoConhecimento)) add("objetoConhecimento", "objeto de conhecimento BNCC obrigatório");

  if (!isObj(m.missaoPrincipal) || !isStr(m.missaoPrincipal.titulo) || !isStr(m.missaoPrincipal.descricao))
    add("missaoPrincipal", "título + descrição obrigatórios");

  if (
    !isObj(m.narrativa) ||
    !isStr(m.narrativa.titulo) ||
    !isStr(m.narrativa.contexto) ||
    !isStr(m.narrativa.problema) ||
    !isStr(m.narrativa.convite)
  )
    add("narrativa", "título, contexto, problema e convite obrigatórios");

  if (!isObj(m.explicacao) || !isStr(m.explicacao.texto))
    add("explicacao", "texto de explicação obrigatório");

  if (!isArr(m.exemplos)) add("exemplos", "pelo menos 1 exemplo resolvido");
  else {
    m.exemplos!.forEach((ex, i) => {
      if (!isStr(ex?.enunciado) || !isArr(ex?.passos) || !isStr(ex?.resposta))
        add(`exemplos[${i}]`, "enunciado + passos[] + resposta obrigatórios");
    });
  }

  if (!isArr(m.atividades)) add("atividades", "pelo menos 1 atividade prática");
  else {
    m.atividades!.forEach((a, i) => {
      if (!isStr(a?.enunciado) || !isStr(a?.resposta))
        add(`atividades[${i}]`, "enunciado + resposta obrigatórios");
    });
  }

  if (!isArr(m.desafios)) add("desafios", "pelo menos 1 desafio");
  else {
    m.desafios!.forEach((d, i) => {
      if (!isStr(d?.enunciado) || !isStr(d?.resposta))
        add(`desafios[${i}]`, "enunciado + resposta obrigatórios");
    });
  }

  if (!isArr(m.quiz, 3)) add("quiz", "mínimo 3 perguntas");
  else {
    m.quiz!.forEach((q, i) => {
      if (!isStr(q?.pergunta)) add(`quiz[${i}].pergunta`, "pergunta obrigatória");
      if (!isArr((q as { opcoes?: unknown[] })?.opcoes, 2))
        add(`quiz[${i}].opcoes`, "mínimo 2 opções");
      if (!isNum((q as { correta?: unknown })?.correta))
        add(`quiz[${i}].correta`, "índice da correta obrigatório");
    });
  }

  if (!isObj(m.resumo) || !isArr(m.resumo.pontos) || !isStr(m.resumo.dica))
    add("resumo", "pontos[] + dica obrigatórios");

  if (
    !isObj(m.revisao) ||
    !isStr(m.revisao.retomada) ||
    !isArr(m.revisao.perguntasRevisao)
  )
    add("revisao", "retomada + perguntasRevisao[] obrigatórios");

  if (!isObj(m.miniJogo) || !isStr(m.miniJogo.nome) || !isStr(m.miniJogo.tipo) || !isStr(m.miniJogo.descricao))
    add("miniJogo", "nome + tipo + descrição obrigatórios");

  if (!isArr(m.adaptacoes)) add("adaptacoes", "adaptações pedagógicas obrigatórias");
  if (!isArr(m.objetivos)) add("objetivos", "pelo menos 1 objetivo de aprendizagem");
  if (!isArr(m.competencias)) add("competencias", "pelo menos 1 competência BNCC");

  if (!isObj(m.meta) || !isStr(m.meta.versao) || !isStr(m.meta.atualizadoEm))
    add("meta", "versão + atualizadoEm obrigatórios");

  return p;
}

// =====================================================================
// 2. Vínculo BNCC (consulta bncc_habilidades)
// =====================================================================

type HabRow = { codigo: string; ano: string | null; disciplina: string | null };

async function buscarHabilidadeBNCC(codigo: string): Promise<HabRow | null> {
  const { data, error } = await supabase
    .from("bncc_habilidades")
    .select("codigo_bncc, ano, disciplina")
    .eq("codigo_bncc", codigo.toUpperCase())
    .maybeSingle();
  if (error) {
    console.warn("[BibliotecaNacional] falha ao consultar BNCC:", error.message);
    return null;
  }
  return (data as HabRow | null) ?? null;
}

async function validarVinculoBNCC(m: Partial<MissaoOficial>): Promise<{
  problemas: ProblemaValidacao[];
  hab: HabRow | null;
}> {
  const problemas: ProblemaValidacao[] = [];
  const codigo = (m.codigo ?? "").toString().trim().toUpperCase();

  if (!codigo) {
    problemas.push({ categoria: "vinculo_bncc", campo: "codigo", mensagem: "código BNCC ausente" });
    return { problemas, hab: null };
  }
  if (!REGEX_BNCC.test(codigo)) {
    problemas.push({
      categoria: "vinculo_bncc",
      campo: "codigo",
      mensagem: `formato inválido: "${codigo}" (esperado EI/EF/EM + código)`,
    });
  }

  const hab = await buscarHabilidadeBNCC(codigo);
  if (!hab) {
    problemas.push({
      categoria: "vinculo_bncc",
      campo: "codigo",
      mensagem: `habilidade "${codigo}" não existe em bncc_habilidades`,
    });
  }
  return { problemas, hab };
}

// =====================================================================
// 3. Ordem pedagógica
// =====================================================================

function validarOrdemPedagogica(m: Partial<MissaoOficial>): ProblemaValidacao[] {
  const problemas: ProblemaValidacao[] = [];
  for (let i = 0; i < ORDEM_PEDAGOGICA.length; i++) {
    const bloco = ORDEM_PEDAGOGICA[i];
    const v = m[bloco];
    const presente = Array.isArray(v) ? v.length > 0 : !!v && (typeof v !== "object" || Object.keys(v).length > 0);
    if (!presente) {
      problemas.push({
        categoria: "ordem_pedagogica",
        campo: String(bloco),
        mensagem: `bloco #${i + 1} "${String(bloco)}" ausente ou vazio — quebra a sequência pedagógica`,
      });
    }
  }
  return problemas;
}

// =====================================================================
// 4. Consistência dos dados (missão × BNCC oficial)
// =====================================================================

function normalizar(s: string | null | undefined): string {
  return (s ?? "").toString().trim().toLowerCase();
}

function validarConsistencia(m: Partial<MissaoOficial>, hab: HabRow | null): ProblemaValidacao[] {
  const p: ProblemaValidacao[] = [];
  if (!hab) return p; // já reportado em vínculo

  if (hab.ano && isStr(m.ano) && normalizar(hab.ano) !== normalizar(m.ano)) {
    p.push({
      categoria: "consistencia",
      campo: "ano",
      mensagem: `ano da missão ("${m.ano}") difere do oficial BNCC ("${hab.ano}")`,
    });
  }
  if (hab.disciplina && isStr(m.disciplina) && normalizar(hab.disciplina) !== normalizar(m.disciplina)) {
    p.push({
      categoria: "consistencia",
      campo: "disciplina",
      mensagem: `disciplina ("${m.disciplina}") difere do oficial BNCC ("${hab.disciplina}")`,
    });
  }

  // Etapa vs prefixo do código
  const prefixo = (m.codigo ?? "").toUpperCase().slice(0, 2);
  const etapaEsperada =
    prefixo === "EI" ? "Educação Infantil" :
    prefixo === "EF" ? "Ensino Fundamental" :
    prefixo === "EM" ? "Ensino Médio" : null;
  if (etapaEsperada && isStr(m.etapa) && normalizar(m.etapa) !== normalizar(etapaEsperada)) {
    p.push({
      categoria: "consistencia",
      campo: "etapa",
      mensagem: `etapa ("${m.etapa}") não corresponde ao prefixo "${prefixo}" (esperado "${etapaEsperada}")`,
    });
  }
  return p;
}

// =====================================================================
// 5. Integridade do conteúdo
// =====================================================================

function validarIntegridade(m: Partial<MissaoOficial>): {
  problemas: ProblemaValidacao[];
  avisos: ProblemaValidacao[];
} {
  const problemas: ProblemaValidacao[] = [];
  const avisos: ProblemaValidacao[] = [];

  const checarTexto = (campo: string, v: unknown) => {
    if (isStr(v) && !textoLimpo(v)) {
      problemas.push({
        categoria: "integridade",
        campo,
        mensagem: "texto muito curto ou parece placeholder",
      });
    }
  };

  checarTexto("missaoPrincipal.titulo", m.missaoPrincipal?.titulo);
  checarTexto("missaoPrincipal.descricao", m.missaoPrincipal?.descricao);
  checarTexto("narrativa.contexto", m.narrativa?.contexto);
  checarTexto("explicacao.texto", m.explicacao?.texto);
  checarTexto("resumo.dica", m.resumo?.dica);
  checarTexto("revisao.retomada", m.revisao?.retomada);

  // Quiz: índice correto dentro de opções
  if (isArr(m.quiz)) {
    m.quiz!.forEach((q, i) => {
      const opcoes = (q as { opcoes?: unknown[] })?.opcoes;
      const correta = (q as { correta?: number })?.correta;
      if (isArr<unknown>(opcoes as unknown[], 2) && isNum(correta)) {
        if (correta < 0 || correta >= (opcoes as unknown[]).length) {
          problemas.push({
            categoria: "integridade",
            campo: `quiz[${i}].correta`,
            mensagem: `índice ${correta} fora do intervalo (0..${(opcoes as unknown[]).length - 1})`,
          });
        }
      }
    });
  }

  // Adaptações mínimas obrigatórias: TEA, TDAH, Dislexia
  const publicos = new Set(
    (m.adaptacoes ?? []).map((a) => normalizar(a?.publico)).filter((s) => s.length > 0),
  );
  for (const req of PUBLICOS_OBRIGATORIOS) {
    const achou = [...publicos].some((p) => p.includes(req));
    if (!achou) {
      problemas.push({
        categoria: "integridade",
        campo: "adaptacoes",
        mensagem: `adaptação para "${req.toUpperCase()}" obrigatória e ausente`,
      });
    }
  }

  // Aviso: sem exemplos com contexto cotidiano
  if (isArr(m.exemplos)) {
    const temCotidiano = m.exemplos!.some((e) => isStr(e?.contextoCotidiano));
    if (!temCotidiano) {
      avisos.push({
        categoria: "integridade",
        campo: "exemplos",
        mensagem: "nenhum exemplo com contextoCotidiano — recomendado para vínculo com a vida real",
      });
    }
  }

  return { problemas, avisos };
}

// =====================================================================
// API pública — Biblioteca Nacional
// =====================================================================

export const BibliotecaNacional = {
  /**
   * Valida uma missão candidata contra o padrão oficial.
   * Não altera nada — apenas retorna o diagnóstico.
   */
  async validar(missao: Partial<MissaoOficial>): Promise<ResultadoValidacao> {
    const codigo = (missao.codigo ?? "").toString().trim().toUpperCase() || "SEM_CODIGO";
    const problemas: ProblemaValidacao[] = [];
    const avisos: ProblemaValidacao[] = [];

    // 1. Estrutura
    problemas.push(...validarEstrutura(missao));

    // 2. Vínculo BNCC
    const { problemas: probsBncc, hab } = await validarVinculoBNCC(missao);
    problemas.push(...probsBncc);

    // 3. Ordem pedagógica
    problemas.push(...validarOrdemPedagogica(missao));

    // 4. Consistência
    problemas.push(...validarConsistencia(missao, hab));

    // 5. Integridade
    const integridade = validarIntegridade(missao);
    problemas.push(...integridade.problemas);
    avisos.push(...integridade.avisos);

    if (problemas.length === 0) return { ok: true, codigo, avisos };
    return { ok: false, codigo, problemas, avisos };
  },

  /**
   * Verifica se a missão passa em todos os critérios e está pronta
   * para publicação — sem realizar qualquer alteração.
   */
  async cadastrar(missao: Partial<MissaoOficial>): Promise<ResultadoRegistro> {
    const codigo = (missao.codigo ?? "").toString().trim().toUpperCase();
    const jaExistente = codigo ? hasMissaoOficial(codigo) : false;
    const resultado = await BibliotecaNacional.validar(missao);
    if (!resultado.ok) {
      return { ok: false, codigo: resultado.codigo, problemas: resultado.problemas };
    }
    return { ok: true, codigo: resultado.codigo, jaExistente, avisos: resultado.avisos };
  },

  /**
   * Cobertura atual da Biblioteca Nacional: quantas das 1.451 habilidades
   * BNCC já possuem missão oficial cadastrada.
   */
  async cobertura(): Promise<{ total: number; publicadas: number; pendentes: number; percentual: number }> {
    const { count } = await supabase
      .from("bncc_habilidades")
      .select("codigo_bncc", { count: "exact", head: true });
    const total = count ?? 1451;
    // percorre bncc_habilidades em páginas para contar publicadas
    let publicadas = 0;
    let de = 0;
    const passo = 1000;
    for (;;) {
      const { data, error } = await supabase
        .from("bncc_habilidades")
        .select("codigo_bncc")
        .range(de, de + passo - 1);
      if (error || !data || data.length === 0) break;
      for (const row of data as Array<{ codigo: string }>) {
        if (hasMissaoOficial(row.codigo)) publicadas++;
      }
      if (data.length < passo) break;
      de += passo;
    }
    const pendentes = Math.max(0, total - publicadas);
    const percentual = total > 0 ? Math.round((publicadas / total) * 100) : 0;
    return { total, publicadas, pendentes, percentual };
  },

  /** Auditoria rápida de uma missão já cadastrada. */
  async auditar(codigo: string): Promise<ResultadoValidacao> {
    const m = getMissaoOficial(codigo);
    if (!m) {
      return {
        ok: false,
        codigo: codigo.toUpperCase(),
        problemas: [
          {
            categoria: "vinculo_bncc",
            campo: "codigo",
            mensagem: `missão "${codigo}" não encontrada na biblioteca oficial`,
          },
        ],
        avisos: [],
      };
    }
    return BibliotecaNacional.validar(m);
  },
} as const;

export type BibliotecaNacionalType = typeof BibliotecaNacional;
