import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/core/store";

/**
 * Rota de compatibilidade do antigo Plano Anual.
 * O gerador legado foi aposentado: o app encaminha para o planejador
 * canônico da etapa da criança, preservando links antigos sem criar
 * um quarto plano concorrente.
 */
export const Route = createFileRoute("/plano-anual")({
  head: () => ({ meta: [{ title: "Plano de Aprendizagem — NeuroBrilha" }] }),
  component: PlanoAnualCompat,
});

function PlanoAnualCompat() {
  const { activeChild } = useAppState();
  const navigate = useNavigate();
  const idade = Number(activeChild?.idade ?? 0);
  const destino = idade > 0 && idade <= 6 ? "/primeiros-anos" : "/curriculo-anual";

  useEffect(() => {
    if (activeChild) navigate({ to: destino, replace: true });
  }, [activeChild, destino, navigate]);

  return (
    <Shell>
      <PageHeader emoji="🧭" title="Plano de Aprendizagem" subtitle="Organizando a trilha certa para esta criança" />
      <Card className="text-center space-y-3">
        <p className="font-bold">O antigo Plano Anual foi integrado aos planejadores atuais.</p>
        <p className="text-sm text-muted-foreground">Alfabetização e currículo escolar agora seguem fluxos separados, com menos duplicação.</p>
        <Link to={destino} className="inline-flex rounded-xl bg-primary text-primary-foreground px-5 py-3 font-black">Abrir plano</Link>
      </Card>
    </Shell>
  );
}
