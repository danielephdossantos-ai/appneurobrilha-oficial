# Plano Detalhado: Minha Jornada (Unificação 1º Ano + Alfabetização + Plano Neuro)

Este plano descreve a criação da nova categoria **"Minha Jornada"**, integrando o Currículo Anual, Plano de Alfabetização e Plano Neuro em uma trilha única com travas temporais.

## 1. Arquitetura de Dados
- **Motor de Unificação (`src/lib/motor-jornada.ts`):** Criar um resolvedor que mescla as tabelas `bncc_habilidades` (1º Ano), `curriculo_anual` (Alfabetização) e `neuro_atividades` (Plano Neuro).
- **Tabela `jornada_diaria`:** Registrar qual "Dia" a criança está e o estado de conclusão de cada missão do dia.

## 2. Interface (UI/UX)
- **Nova Rota `/minha-jornada`:** Uma trilha vertical estilo Duolingo usando o componente `MundoTrilha`.
- **Intercalação Pedagógica:**
    - Missão 1: Neuro (Despertar Cognitivo)
    - Missão 2: Alfabetização (Foco principal)
    - Missão 3: Escola Brilha (Conhecimento Geral)
- **Sistema de Travas:**
    - Visual de "Caminho Trancado" para dias futuros.
    - Animação de liberação ao concluir o dia atual.

## 3. Lógica Pedagógica
- **Trava por Dia:** Apenas um bloco de atividades por dia.
- **Nivelamento Dinâmico:** Se a criança tiver facilidade, o Gemini pode ser acionado para subir o nível da próxima missão na trilha unificada.
- **Regra de Idade:** Manter a restrição de 8+ anos para o conteúdo Neuro.

## 4. Etapas de Implementação
1. **Infraestrutura:** Criar a função de servidor para buscar a "Missão do Dia Unificada".
2. **Trilha:** Implementar a nova página de navegação.
3. **Persistência:** Garantir que concluir uma aula na Jornada também marque como concluída na Escola Brilha e no Plano Neuro.

---
**Deseja que eu inicie a implementação da Fase 1 (Arquitetura e Motor de Busca)?**
