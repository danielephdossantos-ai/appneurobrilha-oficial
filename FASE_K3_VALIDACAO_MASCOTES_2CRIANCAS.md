# FASE K3 — Validação técnica pós-Mascotes / 2 crianças / 3 dispositivos

Data: 2026-08-21
Base: NeuroBrilha Fase J.2 — Mascotes Premium

## Escopo

Validação focada em:
- duas crianças na mesma conta;
- troca de criança no mesmo aparelho;
- um aparelho do responsável + um aparelho para cada criança;
- Pip/Pipa por criança;
- nascimento, estágio, skin, professores, moedas, XP e afinidade;
- push por papel do dispositivo;
- isolamento de hiperfoco, perfil sensorial e favoritos;
- integridade estática TypeScript/TSX e imports locais.

## Correções aplicadas nesta Fase K

1. Compra de skin/professor agora é idempotente: item já comprado não debita moedas novamente.
2. Hiperfoco passou a ser escopado por child_id no armazenamento local e sincronizado com o perfil da criança no Supabase.
3. Perfil sensorial passou a ser escopado por criança e recarrega ao trocar a criança ativa no mesmo aparelho.
4. Favoritos do Neuro-Treino passaram a ser separados pela criança ativa.
5. Push ganhou papel explícito do dispositivo: parent ou child.
6. Área dos Pais ganhou ação para registrar aquele aparelho como dispositivo do responsável.
7. Rotina ganhou ação para registrar aquele aparelho como dispositivo da criança ativa.
8. Loja de mascotes passou a respeitar o nome Pip/Pipa escolhido.
9. KidLiveMascot passou a renderizar todas as skins atuais da Pipa equipadas na coleção.
10. Service Worker legado public/sw.js foi removido; sw-push.js permanece como único arquivo SW de push.

## Teste família com 2 crianças

### Criança A
- activeChildId é local ao navegador/aparelho;
- child_mascot_profiles usa child_id como chave primária;
- skins, professores e afinidade usam tabelas com child_id;
- hiperfoco, sensorial e favoritos ficam separados por criança.

### Criança B
- mesma estrutura independente;
- trocar A -> B no mesmo aparelho faz os contextos recarregarem usando o child_id ativo.

Veredito estrutural: PASSA.

## Teste 3 dispositivos

Arquitetura esperada:
- aparelho da mãe: device_role=parent, child_id=null;
- aparelho criança A: device_role=child, child_id=A;
- aparelho criança B: device_role=child, child_id=B.

A seleção activeChildId fica no localStorage de cada dispositivo. Alterar a criança no aparelho da mãe não altera o localStorage dos aparelhos das crianças.

Veredito estrutural: PASSA.

Observação: o teste físico com três dispositivos reais ainda é obrigatório antes de produção.

## Mascotes

- Pip/Pipa por criança: PASSA estruturalmente.
- nascimento salva starter_mascot, stage=bebe e born_at: PASSA.
- contexto recarrega após nascimento: PASSA.
- evolução por reward_child_journey: PASSA estruturalmente.
- compra atômica de skin/professor: PASSA, com correção para impedir cobrança duplicada.
- skin equipada no mascote global: PASSA para a coleção atual Pip/Pipa.
- professores por disciplina armazenados por child_id: PASSA.
- XP/afinidade por child_id: PASSA.

## Push

- um único registro de serviceWorker.register no código: PASSA.
- apenas public/sw-push.js permanece: PASSA.
- chave VAPID privada hard-coded: não encontrada.
- registro explícito parent/child: PASSA.
- cron/Edge Function e entrega real com app fechado: exigem ambiente Supabase/PWA real.

## TypeScript / imports / rotas

- TS/TSX analisados: 2.562
- erros de sintaxe: 0
- imports locais quebrados: 0
- paths duplicados em createFileRoute: 0
- /apoio-escolar existe como arquivo de rota, mas ainda não aparece em src/routeTree.gen.ts. O route tree deve ser regenerado no build TanStack Router.

## Build

Tentativa de `npm ci --ignore-scripts --no-audit --no-fund` excedeu a janela de execução deste ambiente. Por isso NÃO é afirmado build de produção aprovado.

Antes de publicar:
1. npm ci / bun install;
2. regenerar routeTree;
3. npm run build;
4. aplicar migrations em Supabase de teste;
5. configurar VITE_VAPID_PUBLIC_KEY e VAPID_PRIVATE_KEY em secrets;
6. configurar cron para send-daily-push;
7. testar família com 2 crianças e 3 dispositivos físicos;
8. testar compra, evolução, skin, professor, rotina e push em cada criança.

## Veredito

🟢 Arquitetura de duas crianças: aprovada para seguir.
🟢 Pip/Pipa e gamificação por criança: aprovada estruturalmente.
🟢 Troca de criança no mesmo aparelho: aprovada estruturalmente.
🟢 Arquitetura para três dispositivos: aprovada estruturalmente.
🟡 Build real: ainda não comprovado.
🟡 Push físico em três aparelhos: ainda não comprovado.
🟡 routeTree: precisa regeneração no build.

O projeto pode avançar para a Fase L de empacotamento, desde que o pacote de entrega deixe esses testes operacionais como obrigatórios antes da publicação.
