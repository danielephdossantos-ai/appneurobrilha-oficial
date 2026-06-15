# PADRÕES DE CÓDIGO - NEUROBRILHA KIDS v2

## 📋 Índice
- [Nomenclatura](#nomenclatura)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Componentes React](#componentes-react)
- [Services](#services)
- [Hooks](#hooks)
- [Types](#types)
- [Comentários](#comentários)
- [Imports](#imports)

---

## 📝 Nomenclatura

### Componentes
**Padrão: PascalCase**

```tsx
// ✅ CORRETO
export function UserProfile() {}
export function ActivityCard() {}
export function ProgressBar() {}

// ❌ ERRADO
export function userProfile() {}
export function activity_card() {}
export function progressbar() {}
```

**Arquivo: Mesmo nome do componente**

```
✅ UserProfile.tsx
✅ ActivityCard.tsx

❌ userProfile.tsx
❌ activity-card.tsx
```

### Funções e Métodos
**Padrão: camelCase**

```tsx
// ✅ CORRETO
function calculateScore() {}
const fetchActivities = () => {}
const updateUserProfile = async () => {}

// ❌ ERRADO
function calculate_score() {}
const FetchActivities = () => {}
const UpdateUserProfile = async () => {}
```

### Constantes
**Padrão: UPPER_SNAKE_CASE**

```tsx
// ✅ CORRETO
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const API_TIMEOUT = 30000;
const DEFAULT_PAGE_SIZE = 10;

// ❌ ERRADO
const maxFileSize = 10 * 1024 * 1024;
const ApiTimeout = 30000;
const default_page_size = 10;
```

### Arquivos
**Padrão: kebab-case para pastas, snake_case ou PascalCase para arquivos**

```
✅ features/
   └── minha-feature/
       ├── types.ts
       ├── constants.ts
       ├── MyComponent.tsx
       └── services/
           └── myFeature.service.ts

❌ features/
   └── MinhaFeature/
       ├── Types.ts
       ├── Constants.ts
       └── MyComponent.tsx
```

### Variáveis Booleanas
**Prefixo: is, has, can, should**

```tsx
// ✅ CORRETO
const isLoading = false;
const hasError = true;
const canDelete = false;
const shouldRefresh = true;

// ❌ ERRADO
const loading = false;
const error = true;
const delete = false;
const refresh = true;
```

---

## 🗂️ Estrutura de Arquivos

### Feature Padrão

```
features/[feature-name]/
├── index.ts                   # Exporta public API
├── types.ts                   # Interfaces
├── constants.ts               # Constantes
├── components/
│   ├── index.ts              # Exports
│   ├── FeatureMain.tsx       # Componente principal
│   ├── FeatureForm.tsx       # Formulário
│   └── FeatureCard.tsx       # Card
├── hooks/
│   ├── index.ts              # Exports
│   └── useFeature.ts         # Hook customizado
├── services/
│   ├── index.ts              # Exports
│   └── feature.service.ts    # Service
├── utils/
│   └── formatFeature.ts      # Utilitários
├── __tests__/
│   ├── feature.service.test.ts
│   └── useFeature.test.ts
└── README.md                  # Documentação
```

### Service Pattern

```tsx
// ✅ CORRETO
export class FeatureService {
  private static TABLE = 'features';

  static async getAll() { }
  static async getById(id: string) { }
  static async create(data: any) { }
  static async update(id: string, data: any) { }
  static async delete(id: string) { }
}

// Usar assim
import { FeatureService } from '@/features/feature/services/feature.service';
await FeatureService.getAll();
```

---

## ⚛️ Componentes React

### Componente Funcional

```tsx
import { useState, useEffect } from 'react';
import { useErrorHandler } from '@/core/error-handling/useErrorHandler';
import { logger } from '@/core/logging/logger';
import { SkeletonCard } from '@/components/ui/skeletons';

interface UserCardProps {
  userId: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function UserCard({ userId, onSelect, className = '' }: UserCardProps) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { error, handleError, getUserMessage } = useErrorHandler();

  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsLoading(true);
        // Carregar usuário
      } catch (err) {
        handleError(err, 'UserCard.loadUser');
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, [userId]);

  if (isLoading) return <SkeletonCard />;

  if (error) {
    return <div className="error">{getUserMessage()}</div>;
  }

  return (
    <div className={`user-card ${className}`}>
      {/* conteúdo */}
    </div>
  );
}
```

### Componente com Props

```tsx
// ✅ CORRETO - Interface clara
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
}

// ❌ ERRADO - Props implícitas
export function Button(props: any) {
  return <button {...props}>{props.children}</button>;
}
```

---

## 🔧 Services

### Padrão de Service

```tsx
import { DatabaseService } from '@/services/supabase/database.service';
import { logger } from '@/core/logging/logger';
import { ErrorHandler } from '@/core/error-handling/errorHandler';

export class MyFeatureService {
  private static TABLE = 'my_feature_table';

  /**
   * Descrição do que faz
   * @param param Descrição do parâmetro
   * @returns Descrição do retorno
   */
  static async getAll() {
    try {
      const result = await DatabaseService.select(this.TABLE);
      logger.debug('Items recuperados', { count: result.count });
      return result.data;
    } catch (error) {
      logger.error('Erro ao buscar items');
      throw ErrorHandler.handle(error, 'MyFeatureService.getAll');
    }
  }

  static async getById(id: string) {
    try {
      return await DatabaseService.selectOne(this.TABLE, id);
    } catch (error) {
      throw ErrorHandler.handle(error, 'MyFeatureService.getById');
    }
  }

  static async create(data: any) {
    try {
      const result = await DatabaseService.insert(this.TABLE, data);
      logger.success('Item criado', { id: result?.id });
      return result;
    } catch (error) {
      throw ErrorHandler.handle(error, 'MyFeatureService.create');
    }
  }

  static async update(id: string, data: any) {
    try {
      const result = await DatabaseService.update(this.TABLE, id, data);
      logger.success('Item atualizado', { id });
      return result;
    } catch (error) {
      throw ErrorHandler.handle(error, 'MyFeatureService.update');
    }
  }

  static async delete(id: string) {
    try {
      await DatabaseService.delete(this.TABLE, id);
      logger.success('Item deletado', { id });
    } catch (error) {
      throw ErrorHandler.handle(error, 'MyFeatureService.delete');
    }
  }
}

export default MyFeatureService;
```

---

## 🎣 Hooks

### Custom Hook

```tsx
import { useState, useCallback, useEffect } from 'react';
import { useErrorHandler } from '@/core/error-handling/useErrorHandler';

interface UseMyFeatureReturn {
  data: any | null;
  isLoading: boolean;
  error: any;
  fetch: () => Promise<void>;
  refetch: () => Promise<void>;
}

/**
 * Hook para gerenciar dados da feature
 * @returns Objeto com dados e funções
 */
export function useMyFeature(): UseMyFeatureReturn {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { error, handleError } = useErrorHandler();

  const fetch = useCallback(async () => {
    try {
      setIsLoading(true);
      // Fazer algo
    } catch (err) {
      handleError(err, 'useMyFeature.fetch');
    } finally {
      setIsLoading(false);
    }
  }, [handleError]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    data,
    isLoading,
    error,
    fetch,
    refetch: fetch,
  };
}
```

---

## 📦 Types

### Definição de Types

```tsx
/**
 * Usuário da aplicação
 */
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Papéis de usuário
 */
export type UserRole = 'admin' | 'teacher' | 'parent' | 'student';

/**
 * Status de um item
 */
export enum ItemStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  ARCHIVED = 'archived',
}

/**
 * Propriedades de um componente
 */
export interface MyComponentProps {
  title: string;
  items: Item[];
  onItemSelect?: (id: string) => void;
  isLoading?: boolean;
  className?: string;
}
```

---

## 💬 Comentários

### Comentários de Bloco

```tsx
/**
 * UserCard - Componente que exibe informações de usuário
 * 
 * Responsabilidades:
 * - Renderizar informações do usuário
 * - Permitir seleção do usuário
 * 
 * @component
 * @example
 * <UserCard userId="123" onSelect={handleSelect} />
 */
export function UserCard() {
  // implementação
}
```

### Comentários Inline

```tsx
// ✅ CORRETO - Explica o porquê
const MAX_RETRIES = 3; // Retry 3 vezes antes de falhar

// ❌ ERRADO - Óbvio
const MAX_RETRIES = 3; // Máximo de retries

// ✅ CORRETO - Explica a lógica
if (error && ErrorHandler.isConnectionError(error)) {
  // Tentar reconectar em caso de erro de conexão
  await retryConnection();
}
```

### TODO Comments

```tsx
// TODO: Implementar validação de email
// FIXME: Bug ao carregar dados em produção
// NOTE: Esta função é crítica para performance
// HACK: Workaround temporário - remover após fix #123
```

---

## 📥 Imports

### Ordem de Imports

```tsx
// 1. React
import React, { useState, useEffect } from 'react';

// 2. Bibliotecas externas
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// 3. Imports internos - Core
import { logger } from '@/core/logging/logger';
import { ErrorHandler } from '@/core/error-handling/errorHandler';

// 4. Services
import { DatabaseService } from '@/services/supabase/database.service';
import { UserService } from '@/features/user/services/user.service';

// 5. Hooks
import { useAuth } from '@/hooks/useAuth';
import { useMyFeature } from '@/features/myfeature/hooks/useMyFeature';

// 6. Components
import { Button } from '@/components/ui/Button';
import { UserCard } from '@/features/user/components/UserCard';

// 7. Types
import type { User } from '@/types/app.types';
import type { MyFeatureProps } from './types';

// 8. Styles
import '@/styles/global.css';
```

### Alias de Imports

```tsx
// ✅ USAR ALIAS (definido em tsconfig.json)
import { useAuth } from '@/hooks/useAuth';
import { DatabaseService } from '@/services/supabase/database.service';

// ❌ NÃO USAR CAMINHOS RELATIVOS
import { useAuth } from '../../hooks/useAuth';
import { DatabaseService } from '../../../services/supabase/database.service';
```

---

## 🎯 Checklist

- [ ] Nomenclatura segue padrões (PascalCase, camelCase, UPPER_CASE)
- [ ] Sem console.log (usar logger)
- [ ] Tratamento de erro com ErrorHandler
- [ ] Imports em ordem correta
- [ ] TypeScript sem erros
- [ ] Sem any types (usar types específicos)
- [ ] Componentes têm JSDoc
- [ ] Props têm interface
- [ ] Sem imports circulares
- [ ] Testes unitários (quando aplicável)
- [ ] Variáveis booleanas começam com is/has/can/should

