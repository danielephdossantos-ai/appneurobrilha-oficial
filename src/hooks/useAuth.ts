/**
 * useAuth - Hook personalizado para autenticação
 */

import { useState, useEffect, useCallback } from 'react';
import { AuthService } from '../services/auth/auth.service';
import { useErrorHandler } from '../core/error-handling/useErrorHandler';
import { logger } from '../core/logging/logger';
import type { User } from '../types/app.types';

export interface UseAuthReturn {
  user: User | null;
  isLoading: boolean;
  error: any;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { error, handleError, clearError } = useErrorHandler();

  // Carregar usuário atual ao montar
  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsLoading(true);
        const currentUser = await AuthService.getCurrentUser();
        setUser(currentUser as User);
      } catch (err) {
        // Usuário não autenticado é esperado
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();

    // Escutar mudanças de autenticação
    const subscription = AuthService.onAuthStateChange((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      clearError();
      setIsLoading(true);
      await AuthService.login(email, password);
      const currentUser = await AuthService.getCurrentUser();
      setUser(currentUser as User);
      logger.success('Login realizado com sucesso');
    } catch (err) {
      handleError(err, 'useAuth.login');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [clearError, handleError]);

  const signup = useCallback(async (email: string, password: string) => {
    try {
      clearError();
      setIsLoading(true);
      await AuthService.signup(email, password);
      logger.success('Conta criada com sucesso');
    } catch (err) {
      handleError(err, 'useAuth.signup');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [clearError, handleError]);

  const logout = useCallback(async () => {
    try {
      clearError();
      setIsLoading(true);
      await AuthService.logout();
      setUser(null);
      logger.success('Logout realizado com sucesso');
    } catch (err) {
      handleError(err, 'useAuth.logout');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [clearError, handleError]);

  return {
    user,
    isLoading,
    error,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };
}
