import { createFileRoute } from "@tanstack/react-router";
import { RenderVisualMat } from "@/escola-brilha/curso-v4/player/blocos/VisuaisMat";
import { lousaDeTexto } from "@/escola-brilha/curso-v4/player/blocos/lousa-auto";

export const Route = createFileRoute("/auth/lousa-test")({
  head: () => ({
    meta: [
      { title: "Teste da lousa interativa" },
      { name: "description", content: "Rota temporária de teste da lousa." },
    ],
  }),
  component: () => {
    const v = lousaDeTexto("Vamos calcular 315.240 + 234.135 passo a passo.");
    return (
      <div className="min-h-screen bg-[#0d1f55] p-4">
        {v ? <RenderVisualMat v={v} /> : <div className="text-white">sem lousa</div>}
      </div>
    );
  },
});
