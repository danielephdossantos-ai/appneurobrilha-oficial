# ROTEIRO DE MIGRAÇÃO - FASE 2

## 📊 Status da Reestruturação

### Fase 1: ✅ CONCLUÍDA
- [x] Análise da estrutura atual
- [x] Criação do plano detalhado
- [x] Documentação completa
- [x] Estrutura de pastas criada
- [x] Sistema de erro handling implementado
- [x] Sistema de logging implementado
- [x] Componentes de skeleton loading criados
- [x] Services centralizados criados
- [x] Tipos globais definidos
- [x] Constantes globais definidas
- [x] Hooks custom implementados
- [x] Exemplo de feature (anamnese) criado

---

## 📋 Fase 2: Migração Gradual do Código (PRÓXIMA)

### Passo 1: Features Críticas

#### 1.1 Feature: Autenticação
**Localização Atual:** `modules/auth/`, `integrations/lovable/`
**Localização Nova:** `features/auth/`

**Checklist:**
- [ ] Copiar componentes de autenticação
- [ ] Implementar `auth.service.ts` em `features/auth/services/`
- [ ] Criar hooks específicos de autenticação
- [ ] Atualizar imports em rotas
- [ ] Testar login/logout
- [ ] Remover código antigo

#### 1.2 Feature: Perfil de Criança
**Localização Atual:** `modules/child-profile/`
**Localização Nova:** `features/child-profile/`

**Checklist:**
- [ ] Migrar tipos para `features/child-profile/types.ts`
- [ ] Criar service em `features/child-profile/services/`
- [ ] Migrar componentes
- [ ] Atualizar imports
- [ ] Testar funcionamento
- [ ] Remover código antigo

---

### Passo 2: Features de Conteúdo

#### 2.1 Feature: Alfabetização
**Localização Atual:** `components/literacy/`, `data/literacy/`
**Localização Nova:** `features/alfabetizacao/`

**Detalhes:**
- Atividades de alfabetização
- Banco de dados de palavras/sílabas
- Progresso do aluno

**Checklist:**
- [ ] Consolidar dados em `features/alfabetizacao/data/`
- [ ] Criar service
- [ ] Migrar componentes
- [ ] Implementar hooks
- [ ] Testes

#### 2.2 Feature: Histórias
**Localização Atual:** `modules/historias/`
**Localização Nova:** `features/historias/`

**Checklist:**
- [ ] Migrar dados e componentes
- [ ] Criar service
- [ ] Integrar com novo padrão
- [ ] Testes

#### 2.3 Feature: BNCC
**Localização Atual:** `bncc_matrix.ts`, `data/curriculum/`
**Localização Nova:** `features/bncc/`

**Checklist:**
- [ ] Migrar matriz BNCC
- [ ] Criar service
- [ ] Componentes de visualização
- [ ] Testes

---

### Passo 3: Gamificação e Recompensas

#### 3.1 Feature: Hiperfoco
**Localização Atual:** `context/HiperfocoContext.tsx`, `data/hiperfocos.ts`
**Localização Nova:** `features/hiperfoco/`

**Checklist:**
- [ ] Converter Context para feature com Context local
- [ ] Criar service
- [ ] Migrar dados
- [ ] Atualizar componentes
- [ ] Testes

#### 3.2 Feature: Recompensas
**Localização Atual:** `modules/rewards-engine/`, `pages/MascotStore.tsx`
**Localização Nova:** `features/recompensas/`

**Checklist:**
- [ ] Consolidar sistema de recompensas
- [ ] Integrar mascote
- [ ] Criar service
- [ ] Migrar loja de mascotes
- [ ] Testes

---

### Passo 4: Relatórios e Analytics

#### 4.1 Feature: Relatórios
**Localização Atual:** `modules/relatorios/`
**Localização Nova:** `features/relatorios/`

**Checklist:**
- [ ] Migrar componentes
- [ ] Criar service de relatórios
- [ ] Implementar export (PDF, CSV)
- [ ] Testes

---

### Passo 5: Painel de Responsáveis

#### 5.1 Feature: Pais
**Localização Atual:** `modules/parental/`, `contexts/ParentModeContext.tsx`
**Localização Nova:** `features/pais/`

**Checklist:**
- [ ] Migrar componentes
- [ ] Converter Context para feature
- [ ] Criar service
- [ ] Integrar painel
- [ ] Testes

---

### Passo 6: Features Restantes

#### 6.1 Feature: PEI
**Localização Atual:** `modules/` (se existir)
**Localização Nova:** `features/pei/`

#### 6.2 Feature: Anamnese (JÁ INICIADA)
**Status:** Exemplo já criado em `features/anamnese/`

#### 6.3 Feature: Sensorial
**Localização Atual:** `modules/sensorial/`
**Localização Nova:** `features/sensorial/`

---

## 🔄 Ordem Recomendada de Migração

1. **Semana 1:**
   - Auth (crítico)
   - Child Profile (crítico)

2. **Semana 2:**
   - Alfabetização
   - BNCC

3. **Semana 3:**
   - Histórias
   - Hiperfoco

4. **Semana 4:**
   - Recompensas
   - Sensorial

5. **Semana 5:**
   - Relatórios
   - Pais (Responsáveis)

6. **Semana 6:**
   - Limpeza final
   - Testes

---

## 📚 Como Migrar Uma Feature

### Template de Migração

```bash
# 1. Criar estrutura
mkdir -p src/features/minha-feature/{components,services,hooks,utils,__tests__}

# 2. Criar arquivos base
touch src/features/minha-feature/{index.ts,types.ts,constants.ts}

# 3. Copiar código antigo para novo local
cp src/modules/minha-feature/* src/features/minha-feature/

# 4. Refatorar para novo padrão
# - Renomear exports
# - Atualizar imports
# - Dividir em service/components/hooks

# 5. Atualizar imports em toda a aplicação
# - Usar find/replace
# - Buscar: from '@/modules/minha-feature'
# - Substituir: from '@/features/minha-feature'

# 6. Testar
npm test

# 7. Validar ESLint
npm run lint

# 8. Remover código antigo
rm -rf src/modules/minha-feature
```

---

## 🔍 Checklist de Validação Pós-Migração

Para cada feature migrada:

- [ ] Código no novo local
- [ ] Estrutura segue padrão
- [ ] Index.ts exporta public API
- [ ] Sem imports diretos de DB (usando service)
- [ ] TypeScript sem erros
- [ ] ESLint passando
- [ ] Testes unitários passando
- [ ] Componentes com skeleton loading
- [ ] Erros tratados com ErrorHandler
- [ ] Logs com logger
- [ ] Imports atualizados em toda app
- [ ] Sem código duplicado
- [ ] Código antigo removido
- [ ] Documentação atualizada

---

## 📊 Métricas de Progresso

### Por Semana

| Semana | Features | Status | % |
|--------|----------|--------|---|
| 1 | Auth, Child Profile | 📋 Planejado | 0% |
| 2 | Alfabetização, BNCC | ⏳ Próximo | 0% |
| 3 | Histórias, Hiperfoco | 📋 Planejado | 0% |
| 4 | Recompensas, Sensorial | 📋 Planejado | 0% |
| 5 | Relatórios, Pais | 📋 Planejado | 0% |
| 6 | Limpeza, Testes | 📋 Planejado | 0% |

---

## 🚀 Próximas Ações

1. **Imediatas (Hoje):**
   - [ ] Revisar estrutura criada
   - [ ] Validar TypeScript
   - [ ] Revisar documentação

2. **Esta Semana:**
   - [ ] Começar migração de Auth
   - [ ] Começar migração de Child Profile
   - [ ] Adaptar rotas para novo padrão

3. **Este Mês:**
   - [ ] Completar Fase 2 de migração
   - [ ] Validar todo código
   - [ ] Testes de regressão

---

## 💡 Dicas para Migração Suave

1. **Não quebrar em produção:**
   - Manter código antigo até validar novo
   - Usar feature flags para gradualmente migrar
   - Testar cada mudança

2. **Evitar imports circulares:**
   - Index.ts exporta public API
   - Nenhuma feature importa de outra feature
   - Services centralizados para cross-feature

3. **Performance:**
   - Medir tempo de carregamento antes/depois
   - Tree-shaking automático removerá código antigo

4. **Documentação:**
   - Atualizar guides conforme migra
   - Registrar decisões de design
   - Exemplos de código correto

---

## 📞 Suporte

Se tiver dúvidas sobre como migrar uma feature específica:

1. Consultar [GUIA_REFERENCIA_RAPIDA.md](./GUIA_REFERENCIA_RAPIDA.md)
2. Consultar [PADROES_CODIGO.md](./PADROES_CODIGO.md)
3. Verificar exemplo em `features/anamnese/`
4. Ver template em `features/FEATURE_TEMPLATE.ts`

