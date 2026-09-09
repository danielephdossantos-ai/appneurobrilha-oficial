/**
 * App Types - Tipos globais compartilhados
 */

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'teacher' | 'parent' | 'student';
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Child {
  id: string;
  name: string;
  dateOfBirth: Date;
  parentId: string;
  grade?: string;
  schoolName?: string;
  profileImage?: string;
  neurodiversityTypes?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: string;
  duration?: number;
  difficulty: 'easy' | 'medium' | 'hard';
  ageGroup?: string;
  category?: string;
  content: Record<string, unknown>;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProgressRecord {
  id: string;
  childId: string;
  activityId: string;
  completedAt: Date;
  score?: number;
  duration?: number;
  metadata?: Record<string, unknown>;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
  pagination?: Pagination;
  message?: string;
}

export interface QueryOptions {
  page?: number;
  pageSize?: number;
  sort?: string;
  filter?: Record<string, unknown>;
}
