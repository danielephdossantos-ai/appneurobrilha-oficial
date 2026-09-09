import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { COMPANY_NAME, DPO_EMAIL, COMPANY_ADDRESS } from "@/lib/legal/consent";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Neuro Brilha Kids" },
      { name: "description", content: "Como o Neuro Brilha Kids coleta, usa, armazena e protege os dados pessoais, com foco em crianças e adolescentes (LGPD)." },
      { property: "og:title", content: "Política de Privacidade — Neuro Brilha Kids" },
      { property: "og:description", content: "Política de privacidade do Neuro Brilha Kids em conformidade com a LGPD." },
    ],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <Shell>
      <div className="max-w-3xl mx-auto py-10 px-4 space-y-6 text-sm leading-relaxed">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Política de Privacidade</h1>
          <p className="text-muted-foreground">Última atualização: 24/06/2026</p>
          <p className="text-xs text-muted-foreground">
            Mantida por {COMPANY_NAME}. Esta página descreve como tratamos dados pessoais no
            Neuro Brilha Kids; ela complementa o <Link to="/termos" className="underline">Termo de Consentimento Parental</Link>.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">1. Controlador</h2>
          <p>{COMPANY_NAME}, {COMPANY_ADDRESS}. Encarregado (DPO): <a className="underline" href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">2. Dados do responsável (conta dos pais)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>E-mail e nome (para autenticação).</li>
            <li>Vínculo com a(s) criança(s) cadastrada(s).</li>
            <li>Registros de aceite do termo: data, IP, versão, navegador.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">3. Dados da criança/adolescente</h2>
          <p>Listados em detalhe no <Link to="/termos" className="underline">Termo de Consentimento Parental, seção 3</Link>.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">4. Cookies e tecnologias</h2>
          <p>
            Usamos armazenamento local do navegador (localStorage) apenas para manter a sessão
            ativa e preferências de acessibilidade. Não utilizamos cookies de publicidade nem
            rastreamento de terceiros.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">5. Subprocessadores</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provedor de banco de dados e autenticação em nuvem.</li>
            <li>Serviços de IA generativa para conteúdo pedagógico (sem envio de dados sensíveis da anamnese).</li>
            <li>Provedor de geração de áudio (text-to-speech) para narração das atividades.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">6. Direitos e como exercê-los</h2>
          <p>
            Acesse o <strong>Painel dos Pais → Privacidade</strong> para baixar os dados, revogar
            o consentimento ou solicitar exclusão. Resposta em até 15 dias úteis. Em caso de
            dúvida, escreva ao DPO.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">7. Crianças e adolescentes</h2>
          <p>
            O tratamento de dados de menores depende do consentimento específico e em destaque
            do responsável legal, dado no primeiro acesso e revogável a qualquer momento. Todo o
            processamento é feito no melhor interesse da criança (LGPD art. 14).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">8. Alterações</h2>
          <p>
            Mudanças relevantes nesta política sobem a versão do termo e exigem novo aceite do
            responsável antes do próximo acesso ao painel.
          </p>
        </section>

        <div className="pt-6 border-t flex flex-wrap gap-4">
          <Link to="/termos" className="text-primary underline">Termo de Consentimento Parental</Link>
          <Link to="/" className="text-muted-foreground underline">Voltar ao início</Link>
        </div>
      </div>
    </Shell>
  );
}
