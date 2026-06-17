/**
 * Index - Exporta todos os services
 */

export { default as AuthService } from './auth/auth.service';
export { default as StorageService } from './storage/storage.service';

// Supabase
export { supabase as supabaseClient } from '@/database/supabase/client';
