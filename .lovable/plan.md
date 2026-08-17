# Plano: Nova Categoria "Primeiros Anos (3 a 6 anos)" na Home

Este plano descreve a reorganização da página inicial para incluir a nova categoria "Primeiros Anos (3 a 6 anos)", agrupando atividades específicas conforme solicitado.

## Alterações

### Frontend
- **Página Inicial (`src/routes/index.tsx`)**:
  - Adicionar o novo destino "Primeiros Anos (3 a 6 anos)" ao array `DESTINOS_KIDS`.
  - Reordenar o array `DESTINOS_KIDS` para que a nova categoria apareça junto com "Escola Brilha" e "Neuro Treino".
- **Página Neuro Treino (`src/routes/neuro-treino.tsx`)**:
  - Remover as atividades solicitadas da listagem principal do Neuro Treino, pois agora estarão agrupadas na nova categoria da Home.
  - *Nota: As rotas e funcionalidades das atividades permanecem inalteradas, apenas sua localização na interface é modificada.*

## Detalhes Técnicos
- Nenhuma alteração de estilo (CSS), padding ou cores será realizada, conforme a regra estrita do usuário.
- O agrupamento será feito apenas via reordenação e filtragem de dados no código.
- As atividades migradas são:
  1. My First English
  2. Matemática Kawaii
  3. Ler com Aurora
  4. Histórias por nível leitor
  5. Biblioteca Encantada
  6. Alfabetização Brilha
  7. Trilha da Leitura (Dislexia)
  8. Contar com Pip (Matemática Terapêutica)
  9. Português - Educação Infantil
  10. Campos de Experiência - Educação Infantil

## Checklist de Validação
- [ ] Nova categoria "Primeiros Anos" visível na Home (Mobile e Desktop).
- [ ] Atividades listadas corretamente dentro da nova categoria.
- [ ] Navegação para cada atividade funcionando como antes.
- [ ] Sem alterações visuais indesejadas (paddings, cores, estilos).
