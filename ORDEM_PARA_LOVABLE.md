# ORDEM PARA O LOVABLE — NEUROBRILHA FINAL

## REGRA PRINCIPAL
Este pacote é a fonte de verdade. NÃO recriar arquitetura, NÃO substituir módulos por versões antigas e NÃO “simplificar” removendo as integrações Premium.

## ORDEM OBRIGATÓRIA
1. Importar o projeto exatamente como está.
2. Instalar dependências com o lockfile do projeto.
3. Regenerar o TanStack route tree durante o build e confirmar que `/apoio-escolar` entrou em `src/routeTree.gen.ts`.
4. Aplicar todas as migrations pendentes no Supabase, incluindo obrigatoriamente:
   - `20260821123000_premium_plans_core.sql`
   - `20260821183000_routine_premium.sql`
   - `20260821210000_mascot_journey_premium.sql`
5. Configurar os secrets/variáveis descritos em `SECRETS_E_AMBIENTE.md`.
6. Configurar o agendamento da Edge Function `send-daily-push` em frequência curta (recomendado: a cada 5 minutos), sem gravar credenciais no repositório.
7. Rodar os testes automatizados.
8. Rodar lint.
9. Rodar `npm run build`.
10. Corrigir somente erros comprovados pelo build/testes. NÃO criar um novo motor paralelo.
11. Executar o checklist funcional de `CHECKLIST_TESTE_ACEITE.md`.
12. Só depois publicar no Vercel/produção.

## NÃO FAZER
- Não reativar “Minha Jornada”.
- Não voltar a usar `/reforco-brilha` como categoria principal. A navegação principal usa Central de Apoio Escolar.
- Não restaurar o antigo Plano Anual como planejador principal.
- Não remover `learning_plans`, `learning_plan_items` ou a integração Premium com `routine_items`.
- Não devolver IDs temporários para aulas geradas por IA.
- Não colocar VAPID private key ou outras chaves privadas no código.
- Não trocar o Professor Mentor por múltiplos tutores independentes.
- Não remover `child_id` de progresso, mascotes, professores, rotina ou notificações.
- Não transformar Anamnese/rastreio em diagnóstico.

## BLOQUEIOS DE PUBLICAÇÃO
Não publicar se qualquer um destes falhar:
- build;
- migrations;
- `/apoio-escolar` inexistente no route tree gerado;
- troca entre duas crianças misturando dados;
- mascote/skin/moedas/professores misturados entre irmãos;
- Rotina abrindo aula errada;
- Push indo para a criança errada;
- voz lendo números/frações/português de forma incorreta;
- aula IA sem explicação antes da atividade.
