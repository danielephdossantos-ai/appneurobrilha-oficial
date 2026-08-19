/**
 * Avaliação Contínua — módulo do Motor Pedagógico
 * ------------------------------------------------
 * A avaliação acontece DURANTE toda a missão, não apenas no final.
 *
 * Para cada interação da criança (resposta, tentativa, dica pedida,
 * abandono, retorno, explicação repetida), este módulo:
 *
 *   1. registra o evento com carimbo de tempo,
 *   2. atualiza indicadores contínuos:
 *        • compreensão   — % de acertos ponderada por tentativas/dicas
 *        • erros          — quantidade e sequência
 *        • evolução       — variação dos últimos N eventos vs. inicial
 *        • tempo          — médio por resposta e total de estudo
 *        • autonomia      — % de respostas sem pedir dica/reexplicação
 *        • persistência   — capacidade de continuar após erro
 *   3. estima o nível de domínio da habilidade BNCC em tempo real,
 *   4. persiste em `localStorage` para sobreviver a recarregamentos,
 *   5. expõe `snapshot()` a qualquer momento (não apenas no fim).
 *
 * O objetivo do módulo é ALIMENTAR o Motor — nunca fixar nota final
 * antes da hora, nunca alterar objetivo pedagógico BNCC.
 */
const STORAGE_KEY = "eb_avaliacao_continua_v1";
function chave(childId, codigoBncc) {
    return `${STORAGE_KEY}::${childId}::${codigoBncc}`;
}
const INDICADORES_VAZIOS = {
    compreensao: 0,
    erros: 0,
    errosSeguidos: 0,
    acertos: 0,
    totalRespostas: 0,
    evolucaoDelta: 0,
    tempoMedioMs: 0,
    tempoTotalMs: 0,
    autonomia: 100,
    persistencia: 100,
    nivelDominio: "nao_iniciada",
    ultimaAtualizacao: new Date(0).toISOString(),
};
function ler(childId, codigoBncc) {
    try {
        const raw = localStorage.getItem(chave(childId, codigoBncc));
        if (!raw)
            return null;
        return JSON.parse(raw);
    }
    catch {
        return null;
    }
}
function gravar(estado) {
    try {
        localStorage.setItem(chave(estado.childId, estado.codigoBncc), JSON.stringify(estado));
    }
    catch {
        /* silencioso */
    }
}
function calcularNivel(i) {
    if (i.totalRespostas === 0)
        return "nao_iniciada";
    if (i.compreensao >= 85 && i.autonomia >= 70)
        return "dominada";
    if (i.compreensao >= 60)
        return "parcialmente_dominada";
    return "em_aprendizagem";
}
function recalcular(eventos) {
    const respostas = eventos.filter((e) => e.tipo === "resposta_correta" || e.tipo === "resposta_incorreta");
    const acertos = respostas.filter((e) => e.tipo === "resposta_correta").length;
    const erros = respostas.filter((e) => e.tipo === "resposta_incorreta").length;
    const total = respostas.length;
    // sequência de erros consecutivos no final
    let errosSeguidos = 0;
    for (let i = respostas.length - 1; i >= 0; i--) {
        if (respostas[i].tipo === "resposta_incorreta")
            errosSeguidos++;
        else
            break;
    }
    // compreensão ponderada por peso e por tentativas
    let somaPeso = 0;
    let somaScore = 0;
    for (const r of respostas) {
        const peso = r.peso ?? 1;
        const penalTentativas = Math.max(0.4, 1 - Math.max(0, (r.tentativas ?? 1) - 1) * 0.2);
        const penalDica = r.usouDica ? 0.85 : 1;
        const acerto = r.tipo === "resposta_correta" ? 1 : 0;
        somaScore += acerto * peso * penalTentativas * penalDica;
        somaPeso += peso;
    }
    const compreensao = somaPeso > 0 ? Math.round((somaScore / somaPeso) * 100) : 0;
    // tempo
    const temposMs = respostas
        .map((r) => r.tempoRespostaMs ?? 0)
        .filter((n) => n > 0);
    const tempoMedioMs = temposMs.length > 0 ? Math.round(temposMs.reduce((a, b) => a + b, 0) / temposMs.length) : 0;
    const tempoTotalMs = temposMs.reduce((a, b) => a + b, 0);
    // evolução: score do último terço vs. score do primeiro terço
    const evolucaoDelta = (() => {
        if (respostas.length < 3)
            return 0;
        const t = Math.max(1, Math.floor(respostas.length / 3));
        const ini = respostas.slice(0, t);
        const fim = respostas.slice(-t);
        const s = (arr) => arr.length === 0
            ? 0
            : Math.round((arr.filter((e) => e.tipo === "resposta_correta").length / arr.length) * 100);
        return s(fim) - s(ini);
    })();
    // autonomia: % de respostas sem dica e sem tentativa extra
    const respostasAutonomas = respostas.filter((r) => !r.usouDica && (r.tentativas ?? 1) <= 1).length;
    const autonomia = total > 0 ? Math.round((respostasAutonomas / total) * 100) : 100;
    // persistência: recuperação após erro (acerto que veio depois de um erro)
    let recuperacoes = 0;
    let oportunidades = 0;
    for (let i = 0; i < respostas.length - 1; i++) {
        if (respostas[i].tipo === "resposta_incorreta") {
            oportunidades++;
            if (respostas[i + 1].tipo === "resposta_correta")
                recuperacoes++;
        }
    }
    const abandonos = eventos.filter((e) => e.tipo === "pausa").length;
    const retornos = eventos.filter((e) => e.tipo === "retomou").length;
    const persistenciaBase = oportunidades > 0 ? Math.round((recuperacoes / oportunidades) * 100) : 100;
    const bonusRetorno = abandonos > 0 ? Math.round((retornos / abandonos) * 20) : 0;
    const persistencia = Math.max(0, Math.min(100, persistenciaBase + bonusRetorno));
    const parcial = {
        compreensao,
        erros,
        errosSeguidos,
        acertos,
        totalRespostas: total,
        evolucaoDelta,
        tempoMedioMs,
        tempoTotalMs,
        autonomia,
        persistencia,
    };
    return {
        ...parcial,
        nivelDominio: calcularNivel(parcial),
        ultimaAtualizacao: new Date().toISOString(),
    };
}
export const AvaliacaoContinua = {
    /** Inicia (ou retoma) sessão de avaliação da missão. */
    iniciar(childId, codigoBncc) {
        const existente = ler(childId, codigoBncc);
        if (existente) {
            const eventos = [
                ...existente.eventos,
                { em: new Date().toISOString(), tipo: "retomou" },
            ];
            const estado = {
                ...existente,
                eventos,
                indicadores: recalcular(eventos),
            };
            gravar(estado);
            return estado;
        }
        const iniciouEm = new Date().toISOString();
        const eventos = [{ em: iniciouEm, tipo: "iniciou" }];
        const estado = {
            childId,
            codigoBncc,
            iniciouEm,
            eventos,
            indicadores: { ...INDICADORES_VAZIOS, ultimaAtualizacao: iniciouEm },
        };
        gravar(estado);
        return estado;
    },
    /** Registra um evento durante a missão e devolve indicadores atualizados. */
    registrar(childId, codigoBncc, evento) {
        const atual = ler(childId, codigoBncc) ?? AvaliacaoContinua.iniciar(childId, codigoBncc);
        const eventos = [
            ...atual.eventos,
            { ...evento, em: evento.em ?? new Date().toISOString() },
        ];
        const indicadores = recalcular(eventos);
        const estado = { ...atual, eventos, indicadores };
        gravar(estado);
        return indicadores;
    },
    /** Snapshot dos indicadores contínuos — pode ser lido a qualquer momento. */
    snapshot(childId, codigoBncc) {
        const estado = ler(childId, codigoBncc);
        if (!estado)
            return { ...INDICADORES_VAZIOS };
        return estado.indicadores;
    },
    /** Estado completo (eventos + indicadores) para relatórios. */
    estado(childId, codigoBncc) {
        return ler(childId, codigoBncc);
    },
    /** Encerra a missão marcando conclusão — indicadores continuam disponíveis. */
    concluir(childId, codigoBncc) {
        return AvaliacaoContinua.registrar(childId, codigoBncc, { tipo: "concluiu" });
    },
    /** Zera o histórico dessa (child, habilidade). */
    reiniciar(childId, codigoBncc) {
        try {
            localStorage.removeItem(chave(childId, codigoBncc));
        }
        catch {
            /* silencioso */
        }
    },
};
