import { toast } from "sonner";

export type MotivoErroIA = "creditos" | "limite" | "erro";

/**
 * Notificação padronizada para falhas da IA (Professor Brilha, Tutor IA,
 * Missão Prova, Missão Trabalho, Reforço, Revisor de Português).
 *
 * - "creditos": os créditos diários da IA acabaram → volta amanhã.
 * - "limite":   muitos pedidos ao mesmo tempo → espera alguns minutos.
 * - "erro":     falha genérica de rede/servidor.
 *
 * Usa sonner toast com id fixo pra não empilhar várias notificações iguais.
 */
export function notificarErroIA(motivo: MotivoErroIA | string, contexto?: string) {
  const prefixo = contexto ? `${contexto}: ` : "";
  
  if (motivo === "creditos") {
    toast.warning(`${prefixo}A ajuda da IA acabou por hoje 💤`, {
      id: "ia-limite-diario",
      description:
        "A criança já usou toda a cota de IA do dia. Volte amanhã que o Professor Brilha estará descansado e pronto pra ajudar de novo!",
      duration: 8000,
    });
    return;
  }
  
  if (motivo === "limite") {
    toast.warning(`${prefixo}Estamos com muita gente falando agora ⏳`, {
      id: "ia-rate-limit",
      description: "Aguarde um instante. Estamos tentando outro sistema de inteligência artificial para você.",
      duration: 6000,
    });
    return;
  }

  // Erros técnicos reais
  const description = typeof motivo === "string" && motivo !== "erro" 
    ? `Erro técnico: ${motivo}. Tente novamente em alguns minutos.`
    : "Não foi possível gerar a aula agora. Tente novamente em alguns minutos.";

  toast.error(`${prefixo}Opa! Tivemos um probleminha técnico`, {
    id: "ia-erro",
    description,
    duration: 5000,
  });
}
