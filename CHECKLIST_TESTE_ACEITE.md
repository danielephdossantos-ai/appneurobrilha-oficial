# CHECKLIST DE TESTE DE ACEITE — ANTES DE PUBLICAR

## 1. Conta com duas crianças no MESMO aparelho
- Cadastrar/usar Criança A e Criança B.
- Alternar A → B → A → B.
- Confirmar que não vazam: plano, progresso, rotina, Anamnese, hiperfoco, perfil sensorial, BrilhoCoins, Pip/Pipa, skin, professores, afinidade, Missão Prova/Tarefa/Trabalho.

## 2. Três dispositivos
- Dispositivo da mãe: `device_role=parent`.
- Dispositivo da Criança A: `device_role=child`, `child_id=A`.
- Dispositivo da Criança B: `device_role=child`, `child_id=B`.
- Trocar criança no celular da mãe e confirmar que isso não troca a criança ativa dos outros dispositivos.

## 3. Nascimento e mascote
- Criança A escolhe Pip.
- Criança B escolhe Pipa.
- Fechar nascimento e confirmar que aparece imediatamente o personagem escolhido.
- Confirmar estágio inicial bebê.
- Equipar skins diferentes e recarregar em outro dispositivo.
- Comprar professor/skin e confirmar débito uma única vez.

## 4. Escola Brilha
- Criança acessa somente sua série.
- Admin acessa todas.
- Concluir aula e confirmar progresso somente daquela criança.
- Confirmar recompensa da aula e atualização de mascote/gamificação.

## 5. Anamnese
- Autosave.
- Continuar depois.
- Troca por idade/etapa.
- Concluir e verificar criação/garantia dos planos aplicáveis.
- Confirmar que não apresenta diagnóstico.

## 6. Planos Premium
- Alfabetização, Escolar e Apoio conforme aplicabilidade.
- Item concluído atualiza plano.
- Próxima atividade abre corretamente.
- Ciclo termina e fica `completed`.

## 7. Rotina Premium
- Criar rotina manual.
- Usar modelo pronto.
- Agora/Depois correto.
- Recorrência.
- Excluir só hoje e todos os próximos dias.
- Lembrete antecipado.
- Play abre a rota exata.
- Concluir avisa responsável somente quando configurado.

## 8. Central de Apoio Escolar
- `/apoio-escolar` abre.
- Prova, Tarefa e Trabalho abrem fluxos corretos.
- Reforço atua nos bastidores, não como quarta categoria principal.
- Professor Mentor retorna ao mesmo contexto.

## 9. IA / Professor Mentor
- Aula oficial é preferida quando existe.
- Aula IA já validada é reutilizada.
- Nova aula só é liberada após persistência real.
- Não existe `temp-*` como aula válida.
- Aula tem explicação antes de atividade.

## 10. Leitura/TTS
Ouvir em Android e desktop:
- `3` → três
- `3/4` → três quartos
- `2,5` → dois vírgula cinco
- `25%` → vinte e cinco por cento
- `3²` → três ao quadrado
- `√9` → raiz quadrada de nove
- `R$ 12,50` → doze reais e cinquenta centavos
- `7h30` → sete horas e trinta minutos
- frase normal em Português sem soletração indevida
- exercício de letra/sílaba com leitura pedagógica correta
- Inglês usando idioma/voz apropriados

## 11. Push
- PWA aberto e fechado.
- Horário de rotina real.
- Criança A não recebe notificação da Criança B.
- Mãe recebe conclusão quando configurado.
- Clique abre rota correta.
- Push inválido/expirado é removido.

## 12. Área dos Pais
- Troca de criança atualiza todos os dados.
- Sem cards mockados/vazios fingindo análise.
- Relatórios reais.
- Anamnese acessível.
- Rotina acessível.
- Documentos/consentimento funcionando.

## 13. Responsividade
Testar pelo menos:
- 360 px
- 768 px
- 1366 px
- 1920 px

## 14. Build
- `npm test` / suíte equivalente: aprovado.
- `npm run lint`: sem bloqueadores.
- `npm run build`: aprovado.
- sem import quebrado.
- sem rota duplicada.
- `routeTree.gen.ts` contém `/apoio-escolar` após geração.
