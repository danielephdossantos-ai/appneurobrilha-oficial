/**
 * Feature Template - Template padrão para criar novas features
 * 
 * Copie esta estrutura para criar uma nova feature
 */

// types.ts
export interface FeatureItem {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

// constants.ts
export const FEATURE_NAME = 'feature-name';
export const FEATURE_LABELS = {
  title: 'Título da Feature',
  description: 'Descrição',
};

// services/feature.service.ts
// export class FeatureService {
//   static async getItems() { ... }
//   static async getItem(id: string) { ... }
//   static async createItem(data: any) { ... }
//   static async updateItem(id: string, data: any) { ... }
//   static async deleteItem(id: string) { ... }
// }

// hooks/useFeature.ts
// export function useFeature() {
//   // Implementar hook personalizado
// }

// components/FeatureComponent.tsx
// export function FeatureComponent() {
//   // Componente principal da feature
// }

// index.ts
// export { default as FeatureComponent } from './components/FeatureComponent';
// export { useFeature } from './hooks/useFeature';
// export { FeatureService } from './services/feature.service';
// export type { FeatureItem } from './types';
