/**
 * Resolver de Missão — Motor Pedagógico
 * -------------------------------------
 * Ao abrir uma missão pelo código BNCC, este módulo localiza AUTOMATICAMENTE:
 *   • habilidade BNCC (código normalizado)
 *   • disciplina        (parseada do código: MA, LP, CI, HI, GE, AR, EF, EN, ER)
 *   • ano               (parseado: 01..09, "EI" p/ Infantil, "EM" p/ Médio)
 *   • etapa             ("Educação Infantil" | "Ensino Fundamental" | "Ensino Médio")
 *   • missão correspondente (biblioteca oficial ou aula base)
 *   • progresso do aluno
 *   • adaptações necessárias (idade + desempenho)
 *
 * Se a missão não existir:
 *   - NÃO lança erro técnico.
 *   - Retorna `{ existe: false }` com a mensagem oficial de "em construção".
 *   - Registra em `missoes_pendentes` via RPC para produção futura.
 */
import { supabase } from "@/integrations/supabase/client";
import { getMissaoOficial, hasMissaoOficial } from "../biblioteca-oficial";
import { getAula, hasAula } from "../registry";
export const MENSAGEM_MISSAO_EM_CONSTRUCAO = "Esta missão ainda está em construção.";
const DISCIPLINAS = {
    MA: "Matemática",
    LP: "Língua Portuguesa",
    CI: "Ciências",
    HI: "História",
    GE: "Geografia",
    AR: "Arte",
    EF: "Educação Física",
    EN: "Língua Inglesa",
    ER: "Ensino Religioso",
    EO: "Campos de Experiência",
};
/** Normaliza e parseia um código BNCC (ex: EF01MA01, EI02EO01, EM13MAT101). */
export function parseBNCC(codigo) {
    const c = (codigo || "").toUpperCase().trim();
    const etapaSigla = c.slice(0, 2) || "??";
    const anoSigla = c.slice(2, 4);
    const disciplinaSigla = c.slice(4, 6);
    const etapa = etapaSigla === "EI" ? "Educação Infantil" :
        etapaSigla === "EF" ? "Ensino Fundamental" :
            etapaSigla === "EM" ? "Ensino Médio" :
                "Desconhecida";
    const anoNum = parseInt(anoSigla, 10);
    const ano = etapaSigla === "EI" ? "Educação Infantil" :
        etapaSigla === "EM" ? "Ensino Médio" :
            Number.isFinite(anoNum) && anoNum > 0 ? `${anoNum}º Ano` : anoSigla;
    return {
        codigo: c,
        etapaSigla,
        etapa,
        anoSigla,
        ano,
        disciplinaSigla,
        disciplina: DISCIPLINAS[disciplinaSigla] ?? disciplinaSigla,
    };
}
/**
 * Registra silenciosamente a ausência de uma missão. Nunca lança.
 */
async function registrarAusencia(codigo, childId) {
    try {
        await supabase.rpc("registrar_missao_pendente", {
            _codigo_bncc: codigo,
            _child_id: childId ?? undefined,
        });
    }
    catch (e) {
        // silencioso — a tela nunca deve exibir erro técnico.
        console.warn("[MotorPedagogico] não foi possível registrar missão pendente:", e);
    }
}
/**
 * Fachada de resolução — usada pelo Player Universal e por qualquer rota
 * que precise abrir uma missão a partir do código BNCC.
 */
export async function resolverMissao(codigo, perfil = {}) {
    const bncc = parseBNCC(codigo);
    const childId = perfil.childId;
    const idade = perfil.idade || 0;
    const serie = perfil.serie || bncc.ano;
    // 1. Regra Definitiva Neuro-Treino: 8+ anos bloqueado
    if (bncc.codigo.startsWith("NT") && idade >= 8) {
        return {
            existe: false,
            bncc,
            mensagem: "Neuro-Treino disponível apenas até 7 anos. Explore o conteúdo pedagógico!",
        };
    }
    // 2. Integração com o Motor de Decisão de Conteúdo (Implementação 4/8 + 8/8)
    const { decidirConteudoAula, gerarAulaGemini } = await import("@/lib/aulas-continuas.functions");
    // Nível atual baseado no domínio da aprendizagem (Implementação 3/8)
    let nivelAtual = 1;
    if (childId) {
        const { DominioAprendizagem } = await import("./dominio-aprendizagem");
        const dominio = await DominioAprendizagem.avaliar(childId, bncc.codigo);
        // Mapeamos o nível de domínio para a progressão numérica (1 a 4)
        if (dominio.nivel === "nivel_1_introducao")
            nivelAtual = 1;
        else if (dominio.nivel === "nivel_2_pratica")
            nivelAtual = 2;
        else if (dominio.nivel === "nivel_3_consolidacao")
            nivelAtual = 3;
        else if (dominio.nivel === "dominada")
            nivelAtual = 4;
    }
    // 3. Busca de Aula (Local -> Biblioteca IA -> Geração)
    const oficial = hasMissaoOficial(bncc.codigo) ? getMissaoOficial(bncc.codigo) ?? null : null;
    const base = hasAula(bncc.codigo) ? getAula(bncc.codigo) ?? null : null;
    let aulaFinal = oficial ? oficial : (base || null);
    if (!aulaFinal && childId) {
        const decisao = await decidirConteudoAula({
            data: {
                codigoBNCC: bncc.codigo,
                childId,
                idade,
                serie,
                nivelAtual
            }
        });
        if (decisao.status === "pronta" && decisao.conteudo) {
            aulaFinal = {
                id: decisao.aulaId,
                codigo: bncc.codigo,
                titulo: decisao.titulo || bncc.codigo,
                ano: bncc.ano,
                disciplina: bncc.disciplina,
                ...decisao.conteudo
            };
        }
        else if (decisao.status === "necessita_geracao") {
            // 4. Solicitar Gemini se não existir aula adequada
            const gerada = await gerarAulaGemini({
                data: {
                    childId,
                    codigoBNCC: bncc.codigo,
                    nivel: nivelAtual,
                    idade,
                    serie,
                    disciplina: bncc.disciplina
                }
            });
            if (gerada.status === "sucesso" && gerada.aula) {
                aulaFinal = {
                    id: gerada.aula.id,
                    codigo: bncc.codigo,
                    titulo: gerada.aula.titulo || bncc.codigo,
                    ano: bncc.ano,
                    disciplina: bncc.disciplina,
                    ...gerada.aula.conteudo
                };
            }
            else if (gerada.status === "validacao_falhou") {
                return {
                    existe: false,
                    bncc,
                    mensagem: "Estamos ajustando esta aula para garantir a melhor qualidade pedagógica. Tente novamente em alguns instantes!",
                };
            }
        }
    }
    if (!aulaFinal) {
        void registrarAusencia(bncc.codigo, perfil.childId);
        return {
            existe: false,
            bncc,
            mensagem: MENSAGEM_MISSAO_EM_CONSTRUCAO,
        };
    }
    // 5. Registrar uso para evitar repetição (Implementação Motor de Hiperfoco)
    if (childId && aulaFinal.id) {
        const { supabase: sb } = await import("@/integrations/supabase/client");
        await sb
            .from("historico_uso_aulas")
            .upsert({
            child_id: childId,
            aula_id: aulaFinal.id
        }, { onConflict: 'child_id,aula_id' });
    }
    // Adaptações — imports diretos evitam ciclo em tempo de execução.
    const { MotorPedagogico } = await import("./index");
    const resultIdade = MotorPedagogico.adaptacaoIdade.calcular({
        childId: perfil.childId ?? "",
        idade: perfil.idade,
        serie: perfil.serie ?? bncc.ano,
        perfilNeuro: perfil.perfilNeuro,
    });
    // Progresso — precisamos do desempenho recente pra sugerir dificuldade.
    let progresso = null;
    let desempenhoAtual = 0;
    let tentativas = 0;
    let acertos = 0;
    let erros = 0;
    let tempoMedio = 0;
    let evolucaoDelta = 0;
    let revisoes = 0;
    let nivelDom = "nao_iniciada";
    if (perfil.childId) {
        const p = await MotorPedagogico.progresso.carregar(perfil.childId, bncc.codigo);
        if (p) {
            acertos = p.acertos ?? 0;
            erros = p.erros ?? 0;
            const total = acertos + erros;
            desempenhoAtual = total > 0 ? Math.round((acertos / total) * 100) : (p.percentual ?? 0);
            tentativas = p.tentativas ?? 0;
            tempoMedio = p.tempo_medio_segundos ?? 0;
            evolucaoDelta = p.evolucao_delta ?? 0;
            revisoes = p.revisoes_realizadas ?? 0;
            nivelDom = (p.nivel_dominio ?? "nao_iniciada");
            progresso = {
                concluida: !!p.concluida,
                percentual: p.percentual ?? 0,
                nivelDominio: p.nivel_dominio ?? "nao_iniciada",
                tentativas,
            };
        }
    }
    const desempenho = MotorPedagogico.adaptacaoDesempenho.calcular({
        desempenho: desempenhoAtual,
    });
    const { planejarAdaptacao } = await import("./adaptacao-missao");
    const missao = planejarAdaptacao({
        idade: perfil.idade,
        serie: perfil.serie ?? bncc.ano,
        desempenho: desempenhoAtual,
        desempenhoMedio: desempenhoAtual,
        tentativas,
        erros,
        acertos,
        tempoMedioSegundos: tempoMedio,
        nivelDominio: nivelDom,
        evolucaoDelta,
        revisoesRealizadas: revisoes,
    });
    return {
        existe: true,
        bncc,
        missaoOficial: oficial,
        aulaBase: base,
        progresso,
        adaptacoes: { idade: resultIdade, desempenho, missao },
    };
}
