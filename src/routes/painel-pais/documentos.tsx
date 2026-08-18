import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { TermosHistorico } from "@/components/legal/TermosHistorico";
import { ArrowLeft, FileText, Shield } from "lucide-react";

export const Route = createFileRoute("/painel-pais/documentos")({
  component: DocumentosPage,
});

function DocumentosPage() {
  return (
    <Shell>
      <div className="max-w-4xl mx-auto py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/painel-pais" 
            className="h-10 w-10 rounded-full bg-white border-2 flex items-center justify-center hover:border-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-black">Documentos e Termos</h1>
            <p className="text-sm text-muted-foreground font-medium">
              Consulte aqui os termos de ciência e privacidade aceitos por você.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <TermosHistorico />
          </div>
          
          <div className="space-y-6">
            <div className="bg-primary/5 border-2 border-primary/10 rounded-[2rem] p-6">
              <div className="h-12 w-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-black mb-2">Segurança de Dados</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                O NeuroBrilha Kids segue as diretrizes da LGPD (Lei Geral de Proteção de Dados) 
                para garantir que as informações do seu filho sejam tratadas com o máximo cuidado 
                e foco exclusivo no desenvolvimento pedagógico.
              </p>
            </div>

            <div className="grid gap-3">
              <Link 
                to="/termos" 
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border-2 hover:border-primary transition-colors text-sm font-bold"
              >
                <FileText className="w-4 h-4 text-primary" />
                Termo de Consentimento
              </Link>
              <Link 
                to="/privacidade" 
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border-2 hover:border-primary transition-colors text-sm font-bold"
              >
                <FileText className="w-4 h-4 text-primary" />
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
