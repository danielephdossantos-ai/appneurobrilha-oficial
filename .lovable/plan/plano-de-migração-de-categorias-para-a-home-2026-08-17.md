# Plano de Migração de Categorias para a Home

Este plano descreve a movimentação das categorias especiais do **Neuro-Treino** diretamente para a **Home Inicial** (Área da Cidade do Pip), mantendo o visual e o sistema original, apenas mudando a localização para facilitar o acesso.

## Alterações Propostas

### 1. Preparação dos Dados (Home)
- Adicionar as categorias do Neuro-Treino à lista `DESTINOS_KIDS` em `src/routes/index.tsx`.
- As categorias a serem movidas são:
    - **My First English** (Inglês Ed. Infantil)
    - **Matemática Kawaii** (Matemática Ed. Infantil)
    - **Ler com Aurora** (Alfabetização Pré II + 1º Ano)
    - **Biblioteca Alfa** (Histórias por nível)
    - **Biblioteca Encantada** (Comunicação Funcional)
    - **Alfabetização Brilha** (Consciência Fonológica)
    - **Trilha da Leitura** (Programa Dislexia)
    - **Contar com Pip** (Programa Discalculia)
    - **Aventuras Ed. Infantil** (Trilhas 3-6 anos)

### 2. Ajuste na Home (`src/routes/index.tsx`)
- Atualizar a grade de destinos para acomodar as novas categorias.
- Manter o estilo visual de "cards coloridos com gradiente e emoji" padrão da home.

### 3. Ajuste no Neuro-Treino (`src/routes/neuro-treino.tsx`)
- Remover essas seções específicas do arquivo, mantendo apenas o "Consultório Digital" e a grade de grupos clínicos (Fono, Motora, Atenção, etc.).

## Detalhes Técnicos
- Nenhuma funcionalidade de roteamento ou lógica de negócio será alterada.
- As rotas (`/escola-brilha/ingles-ei`, `/alfabetizacao`, etc.) continuarão as mesmas.
- O visual dos cards na home seguirá o padrão já estabelecido em `DESTINOS_KIDS`.

## Próximos Passos
- Implementar as mudanças no arquivo da Home.
- Limpar o arquivo do Neuro-Treino.
- Verificar se a navegação continua funcionando corretamente.
