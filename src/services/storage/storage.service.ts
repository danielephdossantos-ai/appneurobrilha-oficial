/**
 * Storage Service - Serviço centralizado de armazenamento (arquivos)
 * 
 * Centraliza todas as operações de upload/download de arquivos.
 * Nenhum componente deve acessar storage diretamente.
 */

import { supabaseClient } from './client';
import { logger } from '../../core/logging/logger';
import { ErrorHandler } from '../../core/error-handling/errorHandler';
import { ErrorType } from '../../core/error-handling/errorTypes';
import { LIMITS } from '../../constants/app.constants';

export class StorageService {
  /**
   * Upload de arquivo
   */
  static async uploadFile(
    bucket: string,
    path: string,
    file: File,
    options?: { public?: boolean }
  ) {
    try {
      // Validar tamanho do arquivo
      if (file.size > LIMITS.MAX_FILE_SIZE) {
        throw new Error(`Arquivo muito grande. Máximo: ${LIMITS.MAX_FILE_SIZE / 1024 / 1024}MB`);
      }

      logger.userAction('file_upload_start', {
        bucket,
        path,
        size: file.size,
        type: file.type,
      });

      const startTime = Date.now();

      const { data, error } = await supabaseClient.storage
        .from(bucket)
        .upload(path, file, { upsert: true });

      if (error) {
        throw ErrorHandler.handle(
          {
            type: ErrorType.UPLOAD_FAILED,
            message: error.message,
          },
          `StorageService.uploadFile(${bucket}/${path})`
        );
      }

      const duration = Date.now() - startTime;
      logger.performance({
        name: 'file_upload',
        value: duration,
        status: duration > 5000 ? 'slow' : 'ok',
      });

      return data;
    } catch (error) {
      throw ErrorHandler.handle(error, `StorageService.uploadFile(${bucket}/${path})`);
    }
  }

  /**
   * Download de arquivo
   */
  static async downloadFile(bucket: string, path: string) {
    try {
      const { data, error } = await supabaseClient.storage
        .from(bucket)
        .download(path);

      if (error) {
        throw ErrorHandler.handle(
          {
            type: ErrorType.FILE_NOT_FOUND,
            message: error.message,
          },
          `StorageService.downloadFile(${bucket}/${path})`
        );
      }

      return data;
    } catch (error) {
      throw ErrorHandler.handle(error, `StorageService.downloadFile(${bucket}/${path})`);
    }
  }

  /**
   * Obter URL pública de um arquivo
   */
  static getPublicUrl(bucket: string, path: string): string {
    const { data } = supabaseClient.storage.from(bucket).getPublicUrl(path);
    return data?.publicUrl || '';
  }

  /**
   * Deletar arquivo
   */
  static async deleteFile(bucket: string, path: string) {
    try {
      const { error } = await supabaseClient.storage
        .from(bucket)
        .remove([path]);

      if (error) {
        throw ErrorHandler.handle(
          {
            type: ErrorType.STORAGE_ERROR,
            message: error.message,
          },
          `StorageService.deleteFile(${bucket}/${path})`
        );
      }

      logger.userAction('file_deleted', { bucket, path });
    } catch (error) {
      throw ErrorHandler.handle(error, `StorageService.deleteFile(${bucket}/${path})`);
    }
  }

  /**
   * Listar arquivos em uma pasta
   */
  static async listFiles(bucket: string, path?: string) {
    try {
      const { data, error } = await supabaseClient.storage.from(bucket).list(path);

      if (error) {
        throw ErrorHandler.handle(
          {
            type: ErrorType.STORAGE_ERROR,
            message: error.message,
          },
          `StorageService.listFiles(${bucket}/${path || ''})`
        );
      }

      return data || [];
    } catch (error) {
      throw ErrorHandler.handle(error, `StorageService.listFiles(${bucket}/${path || ''})`);
    }
  }

  /**
   * Gerar URL de upload assinada
   */
  static async getSignedUrl(bucket: string, path: string, expiresIn?: number) {
    try {
      const { data, error } = await supabaseClient.storage
        .from(bucket)
        .createSignedUrl(path, expiresIn || 3600);

      if (error) {
        throw ErrorHandler.handle(
          {
            type: ErrorType.STORAGE_ERROR,
            message: error.message,
          },
          `StorageService.getSignedUrl(${bucket}/${path})`
        );
      }

      return data?.signedUrl;
    } catch (error) {
      throw ErrorHandler.handle(error, `StorageService.getSignedUrl(${bucket}/${path})`);
    }
  }
}

export default StorageService;
