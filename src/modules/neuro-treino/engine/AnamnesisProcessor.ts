import type { Child, AnamnesisData } from "@/core/store";
import type { AnamneseV2Responses, PerfilScores } from "@/modules/anamnese/v2/types";

export interface InternalProfile {
  leitura: number;
  atencao: number;
  linguagem: number;
  autonomia: number;
  emocional: number;
  social: number;
  niveis: {
    geral: number;
    portugues: number;
    matematica: number;
  };
  flags: {
    apoioVisual: boolean;
    passoAPasso: boolean;
    preferAudio: boolean;
    focoComunicao: boolean;
    atividadesCurtas: boolean;
  };
}

export class AnamnesisProcessor {
  static process(data: AnamnesisData["responses"]): InternalProfile {
    const profile: InternalProfile = {
      leitura: 50,
      atencao: 50,
      linguagem: 50,
      autonomia: 50,
      emocional: 50,
      social: 50,
      niveis: {
        geral: 2,
        portugues: 2,
        matematica: 2,
      },
      flags: {
        apoioVisual: true,
        passoAPasso: true,
        preferAudio: false,
        focoComunicao: false,
        atividadesCurtas: false,
      },
    };

    // 1. Desenvolvimento - Leitura
    if (data.desenvolvimento.leitura === "nao_sabe_ler") {
      profile.leitura = 10;
      profile.niveis.portugues = 1;
      profile.flags.apoioVisual = true;
      profile.flags.preferAudio = true;
    } else if (data.desenvolvimento.leitura === "aprendendo") {
      profile.leitura = 40;
      profile.niveis.portugues = 2;
    } else {
      profile.leitura = 80;
      profile.niveis.portugues = 3;
    }

    // 2. Desenvolvimento - Fala
    if (data.desenvolvimento.fala === "nao_fala") {
      profile.linguagem = 10;
      profile.flags.focoComunicao = true;
    } else if (data.desenvolvimento.fala === "fala_pouco") {
      profile.linguagem = 40;
    } else {
      profile.linguagem = 80;
    }

    // 3. Comportamento - Atenção
    if (data.comportamento.dificuldade_atencao || data.comportamento.distrai_facil) {
      profile.atencao = 30;
      profile.flags.atividadesCurtas = true;
      profile.flags.passoAPasso = true;
    }

    if (data.comportamento.frustrado_facil) {
      profile.emocional = 30;
      // Reforço positivo mais frequente (lógica interna do app)
    }

    // 4. Aprendizagem
    if (data.aprendizagem.dificuldade_letras) {
      profile.leitura = Math.min(profile.leitura, 30);
    }
    if (data.aprendizagem.dificuldade_numeros) {
      profile.niveis.matematica = 1;
    }

    // 5. Comunicação
    if (
      !data.comunicacao.usa_palavras &&
      (data.comunicacao.aponta_quer || data.comunicacao.usa_gestos)
    ) {
      profile.flags.focoComunicao = true;
    }

    return profile;
  }

  static mapToChildPatch(
    internal: InternalProfile,
    originalResponses: AnamnesisData["responses"],
  ): Partial<Child> {
    // Try to map professional diagnosis to app's categories
    let diagnostico: any = "nenhum";
    if (
      originalResponses.diagnostico_profissional.possui &&
      originalResponses.diagnostico_profissional.quais
    ) {
      const q = originalResponses.diagnostico_profissional.quais.toLowerCase();
      if (q.includes("tea") || q.includes("autis")) diagnostico = "tea";
      else if (q.includes("tdah")) diagnostico = "tdah";
      else if (q.includes("dislexia")) diagnostico = "dislexia";
      else if (q.includes("tod")) diagnostico = "tod";
      else if (q.includes("discalc")) diagnostico = "discalculia";
    }

    return {
      diagnostico,
      perfil: {
        leitura: internal.leitura,
        escrita: 50,
        matematica: 50,
        atencao: internal.atencao,
        linguagem: internal.linguagem,
        autonomia: internal.autonomia,
        emocional: internal.emocional,
        social: internal.social,
      },
      niveis: {
        geral: internal.niveis.geral as any,
        portugues: internal.niveis.portugues as any,
        matematica: internal.niveis.matematica as any,
        ciencias: internal.niveis.geral as any,
        historia: internal.niveis.geral as any,
        geografia: internal.niveis.geral as any,
      },
      flags: {
        apoioVisual: internal.flags.apoioVisual,
        passoAPasso: internal.flags.passoAPasso,
        preferAudio: internal.flags.preferAudio,
        contaNosDedos: false,
        trocaLetras: false,
        palavrasLongas: internal.leitura < 40,
      },
    };
  }

  static processV2(responses: AnamneseV2Responses, scores: PerfilScores): InternalProfile {
    const competence = (riskScore: number) => Math.max(0, Math.min(100, 100 - riskScore));
    const levelFromCompetence = (value: number): 1 | 2 | 3 | 4 => {
      if (value < 35) return 1;
      if (value < 60) return 2;
      if (value < 80) return 3;
      return 4;
    };

    const escolar = competence(scores.escolar);
    const cognitivo = competence(scores.cognitivo);
    const adaptativo = competence(scores.adaptativo);
    const socioemocional = competence(scores.socioemocional);

    return {
      leitura: escolar,
      atencao: cognitivo,
      linguagem: Math.round((adaptativo + socioemocional) / 2),
      autonomia: adaptativo,
      emocional: socioemocional,
      social: socioemocional,
      niveis: {
        geral: levelFromCompetence(Math.round((escolar + cognitivo + adaptativo + socioemocional) / 4)),
        portugues: levelFromCompetence(escolar),
        matematica: levelFromCompetence(escolar),
      },
      flags: {
        apoioVisual: scores.escolar >= 35 || scores.adaptativo >= 35,
        passoAPasso: scores.cognitivo >= 35 || scores.escolar >= 35,
        preferAudio: scores.escolar >= 55 || scores.adaptativo >= 55,
        focoComunicao: scores.socioemocional >= 45 || scores.adaptativo >= 55,
        atividadesCurtas: scores.cognitivo >= 45 || scores.comportamental >= 45,
      },
    };
  }

  static mapV2ToChildPatch(
    internal: InternalProfile,
    responses: AnamneseV2Responses,
    scores: PerfilScores,
  ): Partial<Child> {
    const hasFamilyTea = responses.step5?.tea === "sim";
    const hasFamilyTdah = responses.step5?.tdah === "sim";
    const diagnostico = hasFamilyTea && scores.socioemocional >= 65
      ? "tea"
      : hasFamilyTdah && scores.cognitivo >= 65
        ? "tdah"
        : "nenhum";

    return {
      ...this.mapToChildPatch(internal, {
        dados_crianca: {
          nome: responses.step1?.nome ?? "",
          idade: responses.step1?.idade ?? 0,
          sexo: responses.step1?.sexo,
        },
        desenvolvimento: {
          fala: internal.linguagem < 35 ? "fala_pouco" : "fala_bem",
          leitura: internal.leitura < 35 ? "nao_sabe_ler" : internal.leitura < 70 ? "aprendendo" : "ja_le",
        },
        comportamento: {
          dificuldade_atencao: scores.cognitivo >= 45,
          distrai_facil: scores.cognitivo >= 45,
          frustrado_facil: scores.socioemocional >= 45,
        },
        comunicacao: {
          aponta_quer: true,
          usa_gestos: true,
          usa_palavras: internal.linguagem >= 35,
        },
        aprendizagem: {
          dificuldade_letras: scores.escolar >= 45,
          dificuldade_numeros: scores.escolar >= 55,
        },
        diagnostico_profissional: {
          possui: false,
        },
        preferencias: {
          musica: false,
          desenho: false,
          jogos: true,
          historias: true,
        },
        rotina: {
          periodo_estudo: "",
          tem_terapia: Boolean(responses.step4?.terapias_atuais?.trim()),
        },
      }),
      diagnostico,
      anamnese_completa: true,
      observacoes: "Perfil pedagógico atualizado pela anamnese científica completa.",
    };
  }
}
