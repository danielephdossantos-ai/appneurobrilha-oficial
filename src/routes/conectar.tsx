import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Copy,
  Check,
  Bot,
  MessageSquare,
  Terminal,
  ExternalLink,
  RefreshCw,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/conectar")({
  head: () => ({
    meta: [
      { title: "Conectar Agente de IA — NeuroBrilha Kids" },
      {
        name: "description",
        content:
          "Conecte ChatGPT, Claude ou outro assistente de IA ao NeuroBrilha Kids via MCP.",
      },
      {
        property: "og:title",
        content: "Conectar Agente de IA — NeuroBrilha Kids",
      },
      {
        property: "og:description",
        content:
          "Conecte ChatGPT, Claude ou outro assistente de IA ao NeuroBrilha Kids via MCP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ConectarPage,
});

function ConectarPage() {
  const [mcpUrl, setMcpUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMcpUrl(new URL("/mcp", window.location.origin).toString());
    }
  }, []);

  async function copyUrl() {
    if (!mcpUrl) return;
    try {
      await navigator.clipboard.writeText(mcpUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Se a API de clipboard falhar, o usuário pode selecionar manualmente.
    }
  }

  const appName = "NeuroBrilha Kids";
  const appSlug = "neurobrilha-kids";
  const encodedName = encodeURIComponent(appName);
  const encodedUrl = encodeURIComponent(mcpUrl);

  const chatgptUrl =
    "https://chatgpt.com/plugins#settings/Connectors?create-connector=true&redirectAfter=%2Fplugins";
  const claudeUrl = `https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=${encodedName}&connectorUrl=${encodedUrl}`;
  const claudeCodeCommand = `claude mcp add --scope user ${appSlug} '${mcpUrl.replace(/'/g, "'\\''")}'`;

  return (
    <Shell>
      <PageHeader
        title="Conectar Agente de IA"
        subtitle="Use ChatGPT, Claude ou outro assistente para consultar aulas e conteúdos do NeuroBrilha Kids."
        icon={Bot}
      />

      <Card className="mb-6 border-2 border-primary/10">
        <h2 className="text-lg font-black mb-2">URL do servidor MCP</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Copie este endereço e cole no assistente de IA escolhido.
        </p>
        <div className="flex items-center gap-2">
          <code className="flex-1 bg-muted px-4 py-3 rounded-xl text-sm font-mono break-all">
            {mcpUrl || "Carregando..."}
          </code>
          <Button
            onClick={copyUrl}
            disabled={!mcpUrl}
            size="icon"
            aria-label="Copiar URL"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </Card>

      <Card className="mb-6 bg-accent/30 border-2 border-accent/30">
        <div className="flex items-start gap-3">
          <Bot className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <p className="text-sm font-medium">
            O assistente pode listar e buscar aulas da biblioteca oficial do
            NeuroBrilha Kids pelos códigos BNCC.
          </p>
        </div>
      </Card>

      <div className="space-y-6">
        <ClientSection
          icon={MessageSquare}
          title="ChatGPT"
          connectSteps={[
            <>
              Abra{" "}
              <a
                href="https://chatgpt.com/#settings/Connectors/Advanced"
                target="_blank"
                rel="noreferrer"
                className="text-primary font-bold underline underline-offset-2 inline-flex items-center gap-1"
              >
                Configurações de Conectores do ChatGPT
                <ExternalLink className="h-3 w-3" />
              </a>{" "}
              e ative o modo Desenvolvedor (se não aparecer, peça ao administrador
              da conta para liberar).
            </>,
            <>
              Depois, abra a página de{" "}
              <a
                href={chatgptUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary font-bold underline underline-offset-2 inline-flex items-center gap-1"
              >
                novo conector
                <ExternalLink className="h-3 w-3" />
              </a>{" "}
              diretamente.
            </>,
            <>Cole o nome "NeuroBrilha Kids" e a URL copiada acima nos campos.</>,
            <>
              Leia o aviso de segurança, marque "Eu entendo e quero continuar" e
              clique em "Criar".
            </>,
            <>
              Ative o app no compositor de conversa e peça: "Use o NeuroBrilha
              Kids para me mostrar aulas de matemática do 1º ano."
            </>,
          ]}
          refreshSteps={[
            "Abra a página de Plugins do ChatGPT e selecione o NeuroBrilha Kids.",
            "Role até a seção Informações e clique em Atualizar.",
            "Se a URL mudou, remova o app e repita os passos de conexão com a URL atual.",
            "Inicie um novo chat e peça para usar o app.",
          ]}
        />

        <ClientSection
          icon={Bot}
          title="Claude"
          connectSteps={[
            <>
              Abra o{" "}
              <a
                href={claudeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary font-bold underline underline-offset-2 inline-flex items-center gap-1"
              >
                formulário de conector personalizado do Claude
                <ExternalLink className="h-3 w-3" />
              </a>{" "}
              (nome e URL já vêm preenchidos).
            </>,
            <>Revise os dados e clique em "Adicionar".</>,
            <>
              Se o formulário não abrir, vá em Conectores do Claude, escolha
              "Adicionar conector personalizado" e cole a URL manualmente.
            </>,
            <>
              Ative o conector no compositor de conversa e peça: "Use o
              NeuroBrilha Kids."
            </>,
          ]}
          refreshSteps={[
            "Abra a página de Conectores do Claude e selecione o NeuroBrilha Kids.",
            "Clique em Atualizar ou Recarregar ferramentas.",
            "Se a URL mudou, remova o conector e repita a conexão com a URL atual.",
            "Peça ao Claude para usar o app novamente.",
          ]}
        />

        <ClientSection
          icon={Terminal}
          title="Claude Code"
          connectSteps={[
            <>
              Copie o comando abaixo e execute no terminal:
              <pre className="mt-2 p-3 bg-muted rounded-xl text-xs font-mono break-all overflow-x-auto">
                {claudeCodeCommand}
              </pre>
            </>,
            <>
              Inicie o Claude Code e rode o comando{" "}
              <code className="bg-muted px-1 rounded text-xs">/mcp</code> para
              confirmar que o app aparece na lista.
            </>,
            <>
              Se o app exigir login, faça a autorização quando solicitado.
            </>,
            <>Pronto. Agora peça ao Claude Code para usar o NeuroBrilha Kids.</>,
          ]}
          refreshSteps={[
            "Inicie uma nova sessão do Claude Code — ela carrega as ferramentas mais recentes automaticamente.",
            "Se a URL mudou, rode: claude mcp remove neurobrilha-kids",
            "Execute o comando de instalação novamente com a URL atual.",
            "Peça ao Claude Code para usar o app.",
          ]}
        />

        <ClientSection
          icon={ExternalLink}
          title="Outros clientes MCP"
          connectSteps={[
            "Abra as configurações de MCP ou conectores personalizados do assistente.",
            "Crie uma conexão de servidor MCP remoto.",
            "Dê o nome \"NeuroBrilha Kids\" e cole a URL copiada acima.",
            "Complete qualquer etapa de login ou autorização.",
            "Ative a conexão e peça ao assistente para usar o app.",
          ]}
          refreshSteps={[
            "Abra as configurações do servidor MCP no cliente escolhido.",
            "Selecione a conexão do NeuroBrilha Kids.",
            "Recarregue a lista de ferramentas ou reconecte o servidor.",
            "Se a URL mudou, cole a URL atual e reinicie o chat.",
          ]}
        />
      </div>

      <div className="mt-8 flex justify-start">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Voltar para o Início
        </Link>
      </div>
    </Shell>
  );
}

function ClientSection({
  icon: Icon,
  title,
  connectSteps,
  refreshSteps,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  connectSteps: React.ReactNode[];
  refreshSteps: string[];
}) {
  return (
    <Card className="border-2 border-border/60">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-black">{title}</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider text-muted-foreground mb-2">
            Conectar
          </h4>
          <ol className="space-y-2">
            {connectSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-medium">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-black grid place-items-center mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="pt-4 border-t border-border/60">
          <h4 className="text-sm font-black uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
            <RefreshCw className="h-3.5 w-3.5" />
            Atualizar depois de mudanças no app
          </h4>
          <ol className="space-y-2">
            {refreshSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-medium">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-muted text-muted-foreground text-xs font-black grid place-items-center mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed text-muted-foreground">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Card>
  );
}
