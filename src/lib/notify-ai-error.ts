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
export function notificarErroIA(motivo: MotivoErroIA, contexto?: string) {
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
    toast.warning(`${prefixo}A IA está com muita gente falando agora ⏳`, {
      id: "ia-rate-limit",
      description: "Espere alguns minutinhos e tente de novo — não é problema no seu app.",
      duration: 6000,
    });
    return;
  }
  toast.error(`${prefixo}Não consegui falar com a IA agora`, {
    id: "ia-erro",
    description: "Verifique a internet e tente de novo em instantes.",
    duration: 5000,
  });
}
