# Plano Detalhado: Trilha Unificada (Pipeline do Aluno)

Este plano descreve a implementação da **Trilha Híbrida Sequencial** para crianças de 3 a 7 anos, unificando Alfabetização, Plano Neuro e BNCC em uma única jornada estilo Duolingo.

## Objetivos
- Eliminar a sobrecarga visual de ver 30+ aulas liberadas.
- Criar uma rotina profissional: 1 aula de cada categoria por "estágio".
- Aplicar bloqueio sequencial (próxima aula só libera após concluir a anterior).
- Automatizar a seleção de conteúdos com base na idade (Regra 3-6-7-8+).

## Arquitetura do Sistema

### 1. O Motor de Seleção (Pipeline Builder)
Criaremos um novo serviço `src/lib/pipeline-builder.ts` que decide a próxima aula da criança seguindo a ordem:
- **Estágio 1:** Neuro-Treino (Foco Cognitivo)
- **Estágio 2:** Alfabetização (Primeiros Anos)
- **Estágio 3:** BNCC (Currículo Anual - ativado apenas para 1º e 2º ano)

### 2. Interface Visual (Mundo Híbrido)
Adaptaremos o componente `MundoTrilha` para exibir uma linha única de progressão:
- O visual será o de um "Mapa de Aventura" (Pipeline).
- Cada nó na trilha representará um tipo de missão (Ícones diferentes para Neuro, Letras e Escola).
- **Bloqueio:** Apenas o nó atual e os concluídos ficam coloridos; os futuros ficam em cinza com cadeado.

### 3. Regras de Conteúdo por Currículo
- **Educação Infantil:** A trilha alterna entre **Neuro** e **Alfabetização** (Primeiros Anos).
- **Ensino Fundamental (1º e 2º Ano):** A trilha alterna entre **Neuro**, **Alfabetização** e **BNCC**.
- **Ensino Fundamental (3º Ano em diante):** A trilha foca 100% no **BNCC** (Neuro-Treino removido conforme regra 8+ anos).

## Etapas de Implementação

### Fase 1: Motor Sequencial
- Implementar a função `obterProximaMissaoPipeline(childId)` que consulta o histórico e define qual a próxima peça do quebra-cabeça.
- Garantir que se a criança terminou o Neuro daquele nível, ela "pule" para a Alfabetização antes de voltar ao próximo Neuro.

### Fase 2: Nova Rota de Trilha Unificada
- Criar `src/routes/trilha-unificada.tsx`.
- Esta tela substituirá a visualização de "catálogo" para as idades alvo.
- Exibir o progresso total (Ex: "Dia 5 da sua Jornada").

### Fase 3: Migração do ProximaMissao
- O card "Próxima Missão" na Home passará a apontar sempre para o próximo nó dessa trilha unificada, garantindo que a mãe não precise escolher o que o filho vai estudar.

## Detalhes Técnicos
- **Persistência:** Uso da tabela `escola_progresso` para rastrear a conclusão de cada nó da trilha híbrida.
- **Componentes:** Reuso dos mascotes da disciplina para indicar o tipo da aula no pipeline.
- **Navegação:** Integração com o `NavigationContext` para retornar sempre ao mapa da trilha após a aula.
