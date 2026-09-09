/**
 * Supabase Client - Cliente único centralizado
 * 
 * Todas as operações de banco de dados devem usar este cliente.
 * Isso garante que há um único ponto de entrada para acesso a dados.
 */

import { createClient } from '@supabase/supabase-js';
import { logger } from '../../core/logging/logger';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Supabase URL ou ANON KEY não configuradas');
}

/**
 * Cliente Supabase único para toda a aplicação
 */
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

/**
 * Log de inicialização
 */
logger.info('Supabase client inicializado', {
  url: SUPABASE_URL,
});

export default supabaseClient;
