# Plano de Reorganização: Categoria Brilha Kids (3 a 6 anos)

Reorganizar as atividades de Educação Infantil e Alfabetização inicial em uma nova categoria dedicada chamada "BRILHA KIDS (3 a 6 anos)" na Home inicial, removendo-as do Neuro Treino para facilitar o acesso.

## Alterações Sugeridas

### Frontend

- **src/routes/index.tsx**:
    - Adicionar uma nova categoria no array `DESTINOS_KIDS` chamada "BRILHA KIDS (3 a 6 anos)" com um gradiente e ícone distintivo.
    - Esta categoria será o destino central para as atividades de 3 a 6 anos.

- **src/routes/neuro-treino.tsx**:
    - Remover os cards de atividades que serão migrados:
        - My First English
        - Matemática Kawaii
        - Ler com Aurora
        - Histórias por nível leitor (Biblioteca Alfa)
        - Biblioteca Encantada
        - Alfabetização Brilha (Progressão por etapas)
        - Trilha da Leitura (Dislexia)
        - Contar com Pip (Matemática Terapêutica)
        - Português - Educação Infantil
        - Campos de Experiência - Educação Infantil
    - Nota: O código de limpeza de cache em `useEffect` será mantido e reforçado se necessário para garantir que o estado local do Neuro Treino não "lembre" dessas rotas como as últimas visitadas.

### Detalhes Técnicos
- Apenas reordenação de arrays e componentes.
- Sem modificações de CSS global ou estilos visuais dos componentes existentes.
- A categoria "Primeiros Anos" no início da home será renomeada ou integrada conforme o fluxo solicitado para "BRILHA KIDS (3 a 6 anos)".

## Regras de Ouro
- Não alterar cores, estilos, paddings ou outros componentes.
- Manter a integridade das rotas.
- Limpar o cache local relacionado a essas atividades no módulo Neuro Treino.
