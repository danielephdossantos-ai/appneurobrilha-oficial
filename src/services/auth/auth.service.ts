/**
 * Auth Service - Serviço centralizado de autenticação
 * 
 * Centraliza todas as operações de autenticação.
 * Nenhum componente deve acessar autenticação diretamente.
 */

import { supabase as supabaseClient } from '@/database/supabase/client';
import { logger } from '../../core/logging/logger';
import { ErrorHandler } from '../../core/error-handling/errorHandler';
import { ErrorType } from '../../core/error-handling/errorTypes';
import type { User } from '../../types/app.types';

export class AuthService {
  /**
   * Login com email e senha
   */
  static async login(email: string, password: string) {
    try {
      logger.userAction('login_attempt', { email });

      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        logger.security({
          userId: email,
          action: 'login',
          result: 'failure',
          details: { reason: error.message },
        });

        throw ErrorHandler.handle(
          {
            type: ErrorType.AUTH_ERROR,
            message: error.message,
            statusCode: error.status,
          },
          'AuthService.login'
        );
      }

      logger.security({
        userId: data.user.id,
        action: 'login',
        result: 'success',
      });

      return data;
    } catch (error) {
      throw ErrorHandler.handle(error, 'AuthService.login');
    }
  }

  /**
   * Registrar novo usuário
   */
  static async signup(email: string, password: string, userData?: Record<string, unknown>) {
    try {
      logger.userAction('signup_attempt', { email });

      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: userData,
        },
      });

      if (error) {
        logger.security({
          userId: email,
          action: 'signup',
          result: 'failure',
          details: { reason: error.message },
        });

        throw ErrorHandler.handle(
          {
            type: ErrorType.AUTH_ERROR,
            message: error.message,
          },
          'AuthService.signup'
        );
      }

      logger.security({
        userId: data.user?.id || email,
        action: 'signup',
        result: 'success',
      });

      return data;
    } catch (error) {
      throw ErrorHandler.handle(error, 'AuthService.signup');
    }
  }

  /**
   * Logout
   */
  static async logout() {
    try {
      const { error } = await supabaseClient.auth.signOut();

      if (error) {
        throw ErrorHandler.handle(error, 'AuthService.logout');
      }

      logger.userAction('logout_success');
    } catch (error) {
      throw ErrorHandler.handle(error, 'AuthService.logout');
    }
  }

  /**
   * Obter usuário atual
   */
  static async getCurrentUser() {
    try {
      const { data, error } = await supabaseClient.auth.getUser();

      if (error) {
        throw ErrorHandler.handle(error, 'AuthService.getCurrentUser');
      }

      return data.user;
    } catch (error) {
      throw ErrorHandler.handle(error, 'AuthService.getCurrentUser');
    }
  }

  /**
   * Atualizar perfil do usuário
   */
  static async updateProfile(updates: Partial<User>) {
    try {
      const { error } = await supabaseClient.auth.updateUser({
        data: updates,
      });

      if (error) {
        throw ErrorHandler.handle(error, 'AuthService.updateProfile');
      }

      logger.userAction('profile_updated', updates);
    } catch (error) {
      throw ErrorHandler.handle(error, 'AuthService.updateProfile');
    }
  }

  /**
   * Resetar senha
   */
  static async resetPassword(email: string) {
    try {
      logger.userAction('password_reset_request', { email });

      const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        throw ErrorHandler.handle(error, 'AuthService.resetPassword');
      }

      logger.success('Email de reset de senha enviado', { email });
    } catch (error) {
      throw ErrorHandler.handle(error, 'AuthService.resetPassword');
    }
  }

  /**
   * Obter sessão atual
   */
  static async getSession() {
    try {
      const { data, error } = await supabaseClient.auth.getSession();

      if (error) {
        throw ErrorHandler.handle(error, 'AuthService.getSession');
      }

      return data.session;
    } catch (error) {
      throw ErrorHandler.handle(error, 'AuthService.getSession');
    }
  }

  /**
   * Escuta mudanças de autenticação
   */
  static onAuthStateChange(callback: (user: any) => void) {
    const { data } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      callback(session?.user);
    });

    return data.subscription;
  }
}

export default AuthService;
