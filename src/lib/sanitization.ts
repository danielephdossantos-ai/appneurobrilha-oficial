import DOMPurify from 'dompurify';

export class SanitizationService {
  static sanitizeHTML(html: string): string {
    return DOMPurify.sanitize(html);
  }

  static sanitizeObject<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) return obj;
    
    const sanitized: any = Array.isArray(obj) ? [] : {};
    
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        sanitized[key] = this.sanitizeHTML(value);
      } else if (typeof value === 'object') {
        sanitized[key] = this.sanitizeObject(value);
      } else {
        sanitized[key] = value;
      }
    }
    
    return sanitized as T;
  }
}
