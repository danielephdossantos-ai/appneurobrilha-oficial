# FASE 2 - REESTRUTURAÇÃO PROFISSIONAL DO NEUROBRILHA KIDS

## 📋 Plano de Ação Detalhado

### FASE 1: Preparação e Estrutura Base
- [x] Analisar estrutura atual
- [ ] Criar nova arquitetura de pastas
- [ ] Documentar mapeamento de migração
- [ ] Criar padrões de código

### FASE 2: Reorganização de Features
- [ ] Criar features como módulos independentes
- [ ] Migrar código de modules/ → features/
- [ ] Criar entry points para cada feature

### FASE 3: Padronização
- [ ] Normalizar nomenclatura (PascalCase, camelCase, UPPER_CASE)
- [ ] Padronizar componentes UI
- [ ] Remover duplicatas

### FASE 4: Services e Dados
- [ ] Centralizar Supabase (services/supabase)
- [ ] Criar abstração para auth
- [ ] Criar abstração para storage
- [ ] Remover acessos diretos ao BD

### FASE 5: UX e Tratamento de Erros
- [ ] Sistema global de erros
- [ ] Sistema de skeleton loading
- [ ] Sistema de logs unificado

---

## 🗂️ NOVA ARQUITETURA

```
src/
├── app/                          # Layout e configurações globais
│   ├── providers.tsx            # Providers da aplicação
│   └── routes.tsx               # Configuração de rotas
├── features/                     # Features independentes
│   ├── anamnese/
│   ├── alfabetizacao/
│   ├── historias/
│   ├── hiperfoco/
│   ├── recompensas/
│   ├── pei/
│   ├── relatorios/
│   ├── bncc/
│   └── pais/
├── pages/                        # Páginas não associadas a feature
├── components/                   # Componentes compartilhados
│   └── ui/                      # Design system
├── services/                     # Serviços centralizados
│   ├── supabase/
│   ├── auth/
│   ├── storage/
│   ├── reports/
│   └── activities/
├── hooks/                        # Custom hooks
├── contexts/                     # Context API
├── stores/                       # State management
├── utils/                        # Utilitários
├── types/                        # Type definitions
├── constants/                    # Constantes
└── assets/                       # Assets
```

---

## 🏗️ ESTRUTURA DE FEATURE

Cada feature segue este padrão:

```
features/[feature-name]/
├── index.ts                     # Export público
├── types.ts                     # Tipos específicos
├── constants.ts                 # Constantes
├── components/                  # Componentes da feature
├── hooks/                       # Hooks específicos
├── services/                    # Serviços/APIs
├── utils/                       # Utilitários
├── context/                     # Context local (se necessário)
├── routes/                      # Rotas (se houver)
└── __tests__/                   # Testes
```

---

## 📦 FEATURES A CRIAR

### 1. **anamnese**
   - Funcionalidade: Questionário de histórico do aluno
   - Origem: `modules/anamnese/`
   - Componentes principais: Forms, ResultsView

### 2. **alfabetizacao**
   - Funcionalidade: Atividades de alfabetização
   - Origem: `components/literacy/`, `data/literacy/`
   - Serviços: Banco de atividades

### 3. **historias**
   - Funcionalidade: Histórias e narrativas
   - Origem: `modules/historias/`

### 4. **hiperfoco**
   - Funcionalidade: Sistema de hiperfoco (gamificação)
   - Origem: `context/HiperfocoContext.tsx`, `data/hiperfocos.ts`

### 5. **recompensas**
   - Funcionalidade: Sistema de recompensas e mascote
   - Origem: `modules/rewards-engine/`, `pages/MascotStore.tsx`

### 6. **pei**
   - Funcionalidade: Plano Educacional Individualizado
   - Origem: `modules/` (se existir)

### 7. **relatorios**
   - Funcionalidade: Geração de relatórios
   - Origem: `modules/relatorios/`
   - Serviços: Analytics, Export

### 8. **bncc**
   - Funcionalidade: Mapeamento BNCC
   - Origem: `bncc_matrix.ts`, `data/curriculum/`

### 9. **pais**
   - Funcionalidade: Painel de responsáveis/pais
   - Origem: `modules/parental/`, `contexts/ParentModeContext.tsx`

---

## 🎨 COMPONENTES UI PADRÃO

Criar componentes reutilizáveis em `components/ui/`:

```
Button.tsx
Card.tsx
Modal.tsx
Input.tsx
Select.tsx
Progress.tsx
Avatar.tsx
Badge.tsx
Dialog.tsx
SkeletonLoading.tsx
Toast.tsx
```

---

## 📋 PADRONIZAÇÃO DE NOMES

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Componentes | PascalCase | `ProfileCard`, `ActivityList` |
| Funções | camelCase | `calculateProgress`, `fetchActivities` |
| Constantes | UPPER_SNAKE_CASE | `MAX_RETRIES`, `API_TIMEOUT` |
| Arquivos Componente | PascalCase | `Button.tsx` |
| Arquivos Função | camelCase | `useAuth.ts`, `calculateScore.ts` |
| Arquivos Tipo | padrão.types.ts | `activity.types.ts` |
| Pastas | kebab-case | `hiperfoco-component`, `auth-service` |

---

## 🔌 SERVICES - CENTRALIZAÇÃO

### services/supabase/
- `client.ts` - Cliente único do Supabase
- `auth.service.ts` - Autenticação
- `database.service.ts` - Operações no BD
- `storage.service.ts` - Uploads

### services/auth/
- `useAuth.ts` - Hook de autenticação
- `authProviders.ts` - Provedores

### services/reports/
- `reportGenerator.ts`
- `exportService.ts`

### services/activities/
- `activityService.ts`
- `progressService.ts`

---

## ⚠️ TRATAMENTO DE ERROS

### ErrorHandler Global
```
core/error-handling/
├── errorHandler.ts
├── errorTypes.ts
├── errorBoundary.tsx
└── useErrorHandler.ts
```

Tipos de erro:
- `NetworkError`
- `AuthenticationError`
- `DatabaseError`
- `PermissionError`
- `ValidationError`
- `AppError`

---

## ⏳ SKELETON LOADING

Criar componentes de skeleton:
```
components/ui/skeletons/
├── SkeletonCard.tsx
├── SkeletonText.tsx
├── SkeletonAvatar.tsx
├── SkeletonActivityList.tsx
└── SkeletonDashboard.tsx
```

---

## 📊 SISTEMA DE LOGS

### core/logging/
```
├── logger.ts
├── logTypes.ts
├── loggers/
│   ├── errorLogger.ts
│   ├── performanceLogger.ts
│   ├── securityLogger.ts
│   └── pedagogicalLogger.ts
```

---

## 📈 Timeline de Implementação

| Fase | Duração | Atividades |
|------|---------|-----------|
| 1 | 1-2 dias | Estrutura + Features |
| 2 | 2-3 dias | Reorganização de código |
| 3 | 2-3 dias | Padronização + Services |
| 4 | 1-2 dias | Tratamento de erros |
| 5 | 1 dia | Skeleton + Logs |
| 6 | 1 dia | Testes e validação |

**Total: 8-12 dias**

---

## ✅ Checklist de Validação

- [ ] Todas as features funcionando
- [ ] Sem imports circulares
- [ ] TypeScript sem erros
- [ ] ESLint configurado
- [ ] Testes passando
- [ ] Performance mantida/melhorada
- [ ] Documentação atualizada

