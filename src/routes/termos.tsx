import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Layout";
import { CURRENT_CONSENT_VERSION, COMPANY_NAME, DPO_EMAIL, COMPANY_ADDRESS } from "@/lib/legal/consent";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termo de Consentimento Parental — Neuro Brilha Kids" },
      { name: "description", content: "Termo de consentimento dos pais e responsáveis para uso do Neuro Brilha Kids por crianças e adolescentes (LGPD art. 14)." },
      { property: "og:title", content: "Termo de Consentimento Parental — Neuro Brilha Kids" },
      { property: "og:description", content: "Termo de consentimento parental para tratamento de dados de crianças e adolescentes." },
    ],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <Shell>
      <div className="max-w-3xl mx-auto py-10 px-4 space-y-6 text-sm leading-relaxed">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Termo de Consentimento Parental</h1>
          <p className="text-muted-foreground">
            Versão {CURRENT_CONSENT_VERSION} · Última atualização: 24/06/2026
          </p>
          <p className="text-xs text-muted-foreground">
            Esta página é mantida por {COMPANY_NAME} para esclarecer pais e responsáveis sobre o
            tratamento de dados pessoais de crianças e adolescentes no app Neuro Brilha Kids.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">1. A quem se destina</h2>
          <p>
            Este termo é dirigido aos pais ou responsáveis legais por crianças (menores de 12 anos)
            e adolescentes (12 a 18 anos) usuários do Neuro Brilha Kids, em conformidade com a
            <strong> Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018, art. 14)</strong> e com
            o <strong>Estatuto da Criança e do Adolescente (ECA)</strong>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">2. Quem é o controlador dos dados</h2>
          <p>
            <strong>{COMPANY_NAME}</strong>, com sede em {COMPANY_ADDRESS}, é o controlador dos
            dados pessoais tratados neste aplicativo. O encarregado pelo tratamento de dados (DPO)
            pode ser contatado em <a className="underline" href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">3. Dados coletados da criança/adolescente</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Identificação:</strong> nome ou apelido, idade/data de nascimento, ano escolar.</li>
            <li><strong>Pedagógicos:</strong> respostas em atividades, acertos/erros, tempo de resposta, progresso por habilidade BNCC.</li>
            <li><strong>Anamnese (opcional):</strong> informações fornecidas pelos pais sobre desenvolvimento, hiperfocos, sensibilidades sensoriais, diagnósticos. Tratados como dados sensíveis (LGPD art. 11).</li>
            <li><strong>Uso do app:</strong> sessões, atividades acessadas, conquistas, moedas virtuais.</li>
          </ul>
          <p>
            <strong>Não coletamos:</strong> localização precisa, contatos, fotos da câmera, microfone
            sem ação explícita, dados biométricos ou informações de pagamento da criança.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">4. Finalidade do tratamento</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Personalizar atividades pedagógicas ao perfil cognitivo e sensorial da criança.</li>
            <li>Gerar relatórios para os pais/responsáveis acompanharem o desenvolvimento.</li>
            <li>Adaptar dificuldade e estilo das atividades (gamificação, reforço positivo).</li>
            <li>Apoiar profissionais (PEI, terapeutas) autorizados pelos pais.</li>
          </ul>
          <p>
            <strong>Não usamos dados de crianças para publicidade comportamental nem
            compartilhamos com terceiros para fins comerciais.</strong>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">5. Base legal</h2>
          <p>
            O tratamento ocorre com base no <strong>consentimento específico e em destaque</strong>
            dado por pelo menos um dos pais ou responsável legal (LGPD art. 14, §1º), e no
            cumprimento de obrigação legal e legítimo interesse pedagógico, sempre no melhor
            interesse da criança e do adolescente (LGPD art. 14, caput).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">6. Compartilhamento</h2>
          <p>
            Os dados são processados por operadores técnicos contratados (provedor de nuvem,
            serviços de IA generativa para feedback pedagógico). Esses operadores atuam sob
            instruções de {COMPANY_NAME} e contratos de confidencialidade. Dados sensíveis da
            anamnese <strong>nunca</strong> são enviados a sistemas de IA generativa.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">7. Retenção</h2>
          <p>
            Dados são mantidos enquanto a conta estiver ativa. Após exclusão pelo responsável,
            todos os dados pessoais da criança são apagados em até <strong>30 dias</strong>,
            mantendo-se apenas registros agregados e anonimizados para fins estatísticos.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">8. Direitos do titular (e dos responsáveis)</h2>
          <p>Em nome da criança/adolescente, o responsável pode:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confirmar a existência de tratamento;</li>
            <li>Acessar os dados;</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>Solicitar anonimização, bloqueio ou eliminação;</li>
            <li>Solicitar portabilidade dos dados;</li>
            <li><strong>Revogar o consentimento a qualquer momento</strong>, no painel dos pais ou por e-mail ao DPO.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">9. Segurança</h2>
          <p>
            Adotamos criptografia em trânsito (HTTPS) e em repouso, controle de acesso por perfil,
            verificação de senha contra vazamentos conhecidos (HIBP) e Row Level Security no banco
            de dados, garantindo que cada responsável só acesse os dados das próprias crianças.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">10. Contato</h2>
          <p>
            Dúvidas, solicitações ou reclamações:
            <a className="underline ml-1" href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>.
          </p>
          <p className="text-xs text-muted-foreground">
            Você também pode acionar a Autoridade Nacional de Proteção de Dados (ANPD) em
            <a className="underline ml-1" href="https://www.gov.br/anpd" target="_blank" rel="noreferrer">gov.br/anpd</a>.
          </p>
        </section>

        <div className="pt-6 border-t flex flex-wrap gap-4">
          <Link to="/privacidade" className="text-primary underline">Política de Privacidade</Link>
          <Link to="/" className="text-muted-foreground underline">Voltar ao início</Link>
        </div>
      </div>
    </Shell>
  );
}
