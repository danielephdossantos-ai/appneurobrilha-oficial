// ============================================================
// Roda em background pra TODA criança ativa, em QUALQUER tela:
//  - Gera o plano PEI/Jornada 365 assim que a anamnese é concluída
//    (a mãe não precisa abrir a Jornada — já fica pronto).
//  - Dispara 1 notificação por dia no celular lembrando de estudar
//    (precisa de permissão concedida via botão; oncePerDay no SW).
// ============================================================

import { useEffect } from "react";
import { useAppState } from "@/core/store";
import { usePEIAutoGenerate } from "@/modules/pei/usePEIAutoGenerate";
import { usePushNotifications } from "@/hooks/usePushNotifications";

export function GlobalLearningBootstrap() {
  const { activeChild } = useAppState();
  const childId = activeChild?.id ?? null;
  const anamneseCompleta = !!activeChild?.anamnese_completa;

  // Gera/atualiza o plano em segundo plano em qualquer rota.
  usePEIAutoGenerate({ childId, anamneseCompleta });

  // Lembrete diário (só dispara se o pai já concedeu permissão).
  const { permission, notify } = usePushNotifications();

  useEffect(() => {
    if (!anamneseCompleta) return;
    if (permission !== "granted") return;
    const nome = activeChild?.nome?.split(" ")[0] ?? "amiguinho";
    // oncePerDay com tag por criança — não floda.
    notify(
      "Hora de brilhar! ✨",
      `${nome}, sua aula de hoje está pronta na Jornada 365.`,
      { tag: `jornada-daily-${childId ?? "x"}`, oncePerDay: true }
    );
  }, [permission, anamneseCompleta, childId, activeChild?.nome, notify]);

  return null;
}
