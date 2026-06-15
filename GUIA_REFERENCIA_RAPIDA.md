# GUIA DE REFERÊNCIA RÁPIDA - NEUROBRILHA KIDS v2

## 📚 Índice
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Como Usar Services](#como-usar-services)
- [Como Criar uma Feature](#como-criar-uma-feature)
- [Padrões de Componentes](#padrões-de-componentes)
- [Tratamento de Erros](#tratamento-de-erros)
- [Logging](#logging)
- [Skeleton Loading](#skeleton-loading)

---

## 🗂️ Estrutura de Pastas

```
src/
├── app/                 # Layout global e providers
├── features/            # Features independentes
├── pages/              # Páginas não associadas a feature
├── components/         # Componentes compartilhados
│   └── ui/            # Design system
├── services/          # Serviços centralizados
├── hooks/             # Custom hooks
├── contexts/          # Context API
├── stores/            # State management
├── core/              # Lógica crítica
│   ├── error-handling/
│   └── logging/
├── utils/             # Utilitários
├── types/             # Type definitions
├── constants/         # Constantes
└── assets/            # Assets
```

---

## 🔌 Como Usar Services

### Autenticação

```tsx
import { AuthService } from '@/services/auth/auth.service';

// Login
await AuthService.login('user@email.com', 'password');

// Logout
await AuthService.logout();

// Obter usuário atual
const user = await AuthService.getCurrentUser();

// Ou use o hook
import { useAuth } from '@/hooks/useAuth';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  return <div>{user?.name}</div>;
}
```

### Banco de Dados

```tsx
import { DatabaseService } from '@/services/supabase/database.service';

// Buscar registros
const { data, count } = await DatabaseService.select('users', {
  filter: { role: 'teacher' },
  sort: 'name:asc',
  page: 1,
  pageSize: 10,
});

// Buscar um registro
const user = await DatabaseService.selectOne('users', 'user-id');

// Inserir
const newUser = await DatabaseService.insert('users', {
  name: 'João',
  email: 'joao@email.com',
});

// Atualizar
const updated = await DatabaseService.update('users', 'user-id', {
  name: 'João Silva',
});

// Deletar
await DatabaseService.delete('users', 'user-id');

// Ou use o hook
import { useDatabase } from '@/hooks/useDatabase';

function UsersList() {
  const { data, isLoading, fetch, insert, update, delete: deleteUser } = 
    useDatabase('users');

  useEffect(() => {
    fetch();
  }, []);

  if (isLoading) return <SkeletonActivityList />;

  return <div>{/* render data */}</div>;
}
```

### Armazenamento (Files)

```tsx
import { StorageService } from '@/services/storage/storage.service';

// Upload de arquivo
const result = await StorageService.uploadFile(
  'bucket-name',
  'path/to/file.pdf',
  file
);

// Obter URL pública
const url = StorageService.getPublicUrl('bucket-name', 'path/to/file.pdf');

// Download
const fileData = await StorageService.downloadFile('bucket-name', 'path/to/file.pdf');

// Deletar
await StorageService.deleteFile('bucket-name', 'path/to/file.pdf');

// Listar arquivos
const files = await StorageService.listFiles('bucket-name', 'path/');
```

---

## ✨ Como Criar uma Feature

### 1. Criar pasta da feature

```bash
mkdir -p src/features/minha-feature
```

### 2. Criar arquivos base

```
features/minha-feature/
├── index.ts              # Exporta public API
├── types.ts              # Tipos da feature
├── constants.ts          # Constantes
├── components/           # Componentes
│   └── MinhaFeature.tsx
├── hooks/                # Hooks customizados
│   └── useMinhaFeature.ts
├── services/             # Services
│   └── minhaFeature.service.ts
├── utils/                # Utilitários
└── __tests__/            # Testes
```

### 3. Implementar types.ts

```tsx
export interface MeuItem {
  id: string;
  titulo: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### 4. Implementar constants.ts

```tsx
export const MEU_LABELS = {
  titulo: 'Título',
  descricao: 'Descrição',
};
```

### 5. Implementar service

```tsx
import { DatabaseService } from '@/services/supabase/database.service';

export class MinhaFeatureService {
  private static TABLE = 'minha_tabela';

  static async getAll() {
    return DatabaseService.select(this.TABLE);
  }

  static async getById(id: string) {
    return DatabaseService.selectOne(this.TABLE, id);
  }

  // ... mais métodos
}
```

### 6. Exportar em index.ts

```tsx
export { default as MinhaFeatureService } from './services/minhaFeature.service';
export { default as MinhaFeatureComponent } from './components/MinhaFeature';
export { useMinhaFeature } from './hooks/useMinhaFeature';
export type { MeuItem } from './types';
```

### 7. Usar a feature

```tsx
import { 
  MinhaFeatureComponent, 
  MinhaFeatureService,
  useMinhaFeature,
  type MeuItem 
} from '@/features/minha-feature';

// Usar em componente
<MinhaFeatureComponent />
```

---

## 🎨 Padrões de Componentes

### Componente Funcional com Loader

```tsx
import { SkeletonCard } from '@/components/ui/skeletons';

interface MeuComponenteProps {
  id: string;
}

export function MeuComponente({ id }: MeuComponenteProps) {
  const { data, isLoading, error } = useDatabase('minha_tabela');

  if (isLoading) return <SkeletonCard />;

  if (error) return <div>Erro ao carregar</div>;

  return (
    <div>
      {/* conteúdo */}
    </div>
  );
}
```

### Componente com Erro Tratado

```tsx
import { useErrorHandler } from '@/core/error-handling/useErrorHandler';

export function MeuComponente() {
  const { error, handleError, clearError, getUserMessage } = useErrorHandler();

  const handleAction = async () => {
    try {
      // fazer algo
    } catch (err) {
      handleError(err, 'MeuComponente.handleAction');
    }
  };

  return (
    <div>
      {error && <div className="error">{getUserMessage()}</div>}
      <button onClick={handleAction}>Ação</button>
    </div>
  );
}
```

---

## ⚠️ Tratamento de Erros

### Usar ErrorHandler

```tsx
import { ErrorHandler } from '@/core/error-handling/errorHandler';

try {
  // código
} catch (error) {
  const appError = ErrorHandler.handle(error, 'MeuModulo.minhaFuncao');
  
  // Mensagem amigável para usuário
  console.log(ErrorHandler.getUserMessage(appError));
  
  // Mensagem técnica para debug
  console.log(ErrorHandler.getDebugMessage(appError));
  
  // Verificar tipo de erro
  if (ErrorHandler.isConnectionError(appError)) {
    // tratar erro de conexão
  }
  
  if (ErrorHandler.isAuthError(appError)) {
    // redirecionar para login
  }
}
```

### Tipos de Erro

```tsx
import { ErrorType } from '@/core/error-handling/errorTypes';

// Erros disponíveis:
ErrorType.NETWORK_ERROR
ErrorType.TIMEOUT_ERROR
ErrorType.AUTH_ERROR
ErrorType.DATABASE_ERROR
ErrorType.PERMISSION_DENIED
ErrorType.VALIDATION_ERROR
ErrorType.STORAGE_ERROR
ErrorType.UNKNOWN_ERROR
```

---

## 📊 Logging

### Usar Logger

```tsx
import { logger } from '@/core/logging/logger';

// Info
logger.info('Página carregada', { page: 'dashboard' });

// Warning
logger.warn('Performance degradada', { duration: 5000 });

// Error
logger.error('Falha no upload', { file: 'documento.pdf' });

// Success
logger.success('Atividade concluída');

// Debug (apenas em development)
logger.debug('Variável de debug', { valor: 123 });

// Performance
logger.performance({
  name: 'atividade_carregada',
  value: 234, // ms
  status: 'ok',
});

// Evento Pedagógico
logger.pedagogical({
  studentId: 'aluno-123',
  activityId: 'atividade-456',
  action: 'complete',
  score: 95,
});

// Segurança
logger.security({
  userId: 'user-123',
  action: 'login',
  result: 'success',
});
```

---

## ⏳ Skeleton Loading

### Componentes Disponíveis

```tsx
import {
  SkeletonCard,
  SkeletonText,
  SkeletonAvatar,
  SkeletonActivityList,
  SkeletonDashboard,
} from '@/components/ui/skeletons';

// Usar como loader enquanto carrega
function MinhaLista() {
  const { data, isLoading } = useDatabase('items');

  if (isLoading) return <SkeletonActivityList />;

  return <div>{/* render data */}</div>;
}
```

---

## 📋 Checklist para Nova Feature

- [ ] Pasta criada em `src/features/`
- [ ] `index.ts` com exports públicos
- [ ] `types.ts` com interfaces
- [ ] `constants.ts` com labels e constantes
- [ ] `services/` com classe de service
- [ ] `components/` com componentes
- [ ] `hooks/` com hooks customizados
- [ ] `__tests__/` com testes
- [ ] Importações seguem padrão (alias @/)
- [ ] Sem imports circulares
- [ ] TypeScript sem erros
- [ ] Documentação README.md (opcional)

---

## 🚫 NÃO FAZER

```tsx
// ❌ NÃO FAZER: Acessar Supabase diretamente
import { supabaseClient } from '@supabase/supabase-js';
const { data } = await supabaseClient.from('users').select();

// ✅ FAZER: Usar service
import { DatabaseService } from '@/services/supabase/database.service';
const { data } = await DatabaseService.select('users');

// ❌ NÃO FAZER: Nomes inconsistentes
const myUser = getUSER();
const MY_USER = getUserData();

// ✅ FAZER: Nomes consistentes
const myUser = getUser();
const MY_USER_COUNT = 5;

// ❌ NÃO FAZER: Componentes sem skeleton
if (loading) return <div>Carregando...</div>;

// ✅ FAZER: Usar skeleton apropriado
if (loading) return <SkeletonActivityList />;

// ❌ NÃO FAZER: Erros sem tratamento
const result = await minhaAcao();

// ✅ FAZER: Tratar erros
try {
  const result = await minhaAcao();
} catch (error) {
  handleError(error, 'contexto');
}
```

---

## 📚 Links Úteis

- [Documentação do Plano](./PLANO_REESTRUTURACAO_FASE2.md)
- [Tipos Globais](./src/types/)
- [Services](./src/services/)
- [Hooks](./src/hooks/)

