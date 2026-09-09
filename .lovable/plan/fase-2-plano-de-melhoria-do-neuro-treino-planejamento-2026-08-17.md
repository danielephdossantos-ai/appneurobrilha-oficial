---
name: Plano de Melhoria do Neuro-Treino
description: Plano técnico e pedagógico para equilibrar a estimulação cognitiva no Neuro-Treino, com foco em Matemática, Funções Executivas e Percepção Auditiva.
type: feature
---
# FASE 2 — PLANO DE MELHORIA DO NEURO-TREINO (PLANEJAMENTO)

## 1. Lista de Lacunas e Oportunidades
- **Matemática Clínica:** Ausência de atividades para subitização avançada, conservação de quantidade, decomposição e raciocínio numérico abstrato.
- **Funções Executivas:** Foco excessivo em atenção visual. Falta flexibilidade cognitiva (mudança de regra) e controle inibitório complexo (Stop-Signal / Go-NoGo).
- **Memória de Trabalho:** Atividades atuais são estáticas. Necessidade de manipulação de informação (ex: ordem inversa).
- **Percepção Auditiva:** Pouca variação em discriminação de frequência e ritmo complexo.
- **Game Design:** Muitas atividades seguem o padrão "exercício digital". Necessidade de "camadas de jogo" (recompensa, feedback narrativo).

## 2. Ordem de Prioridade
1. **Grupo Matemática Cognitiva** (Base para aprendizagem).
2. **Grupo Funções Executivas Avançadas** (Controle inibitório e Flexibilidade).
3. **Grupo Processamento Auditivo Central** (Discriminação e Memória Auditiva).
4. **Camada de Feedback Adaptativo de Erro**.

## 3. Novas Atividades Recomendadas (Exemplos de Mecânicas)

### A. Matemática: "O Banquete dos Dinos" (Subitização e Quantidade)
- **Mecânica:** Mostrar grupos de itens (ex: frutas) por 1-2 segundos. A criança deve identificar "quantos têm" sem contar um a um.
- **Progressão:** Começa com 1-3 itens (subitização imediata). Aumenta para arranjos não estruturados e quantidades maiores (até 7).
- **Adaptação:** Se errar, os itens permanecem na tela e o mentor ajuda a contar um a um (ajuda verbal/visual).
- **Hiperfoco:** O "Dino" pede comida. A quantidade de comida deve bater com o pedido.

### B. Controle Inibitório: "Sinal Verde, Sinal Vermelho" (Go/No-Go)
- **Mecânica:** Personagem do hiperfoco faz uma ação (ex: pula). A criança clica rápido. Mas se aparecer um "obstáculo" (sinal de pare), ela NÃO pode clicar.
- **Progressão:** Aumenta a velocidade e a proporção de estímulos "No-Go". Introduz distratores visuais e auditivos.
- **Feedback:** "Uau, que freio bom!" para acertos No-Go. "Ops, escapou!" para erros de comissão.

### C. Flexibilidade Cognitiva: "Troca-Troca de Regras"
- **Mecânica:** Classificar objetos por COR. No meio da atividade, o mentor diz: "Agora vamos mudar! Classifique por FORMA".
- **Progressão:** Aumenta a frequência de trocas. Introduz 3 critérios (Cor, Forma, Tamanho).
- **Adaptação:** Se a criança continuar usando a regra antiga, o sistema destaca a nova regra com borda brilhante (ajuda visual).

## 4. Evolução do Feedback de Erro
- **Erro 1:** Feedback visual simples + Repetição do comando.
- **Erro 2:** Redução de distratores (escurece o que não é importante).
- **Erro 3 (Ponto de Frustração):** Mudança de representação (ex: de número abstrato para pontos visuais) ou exemplo guiado pelo mentor.
- **Evolução:** Ao acertar após ajuda, o próximo desafio retoma a complexidade anterior sem o auxílio (Fading).

## 5. Estrutura Técnica e Persistência
- **Tabela `activity_logs`:** Registrar `response_time`, `prompt_level_used`, `error_type` (omissão/comissão).
- **Tabela `child_skill_mastery`:** Manter scores por habilidade (Matemática, Atenção, etc.).
- **Motor ABA:** Manter a lógica de 3 acertos/1 erro para ajuste de `PromptLevel`.
- **Gemini (Futuro):** Geração de novas histórias e contextos de hiperfoco para as mecânicas fixas.

## 6. Estimativa de Cobertura
- **Atual:** ~75% (Forte em Fono/Alfa).
- **Meta:** 95% de equilíbrio clínico.
- **Esforço:** Criação de 8 a 12 novas mecânicas baseadas nestes planos.

---
**ESTA FASE É APENAS PLANEJAMENTO. NENHUM CÓDIGO FOI ALTERADO.**
