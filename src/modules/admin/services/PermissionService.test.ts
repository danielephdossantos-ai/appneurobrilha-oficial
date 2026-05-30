import { describe, it, expect } from 'vitest';
import { PermissionService } from './PermissionService';

describe('PermissionService', () => {
  it('should grant full access to super_admin', () => {
    const user = { role: 'super_admin' as const };
    expect(PermissionService.hasPermission(user, 'users', 'manage')).toBe(true);
    expect(PermissionService.hasPermission(user, 'system', 'manage')).toBe(true);
  });

  it('should restrict support role', () => {
    const user = { role: 'support' as const };
    expect(PermissionService.hasPermission(user, 'users', 'read')).toBe(true);
    expect(PermissionService.hasPermission(user, 'users', 'delete')).toBe(false);
    expect(PermissionService.hasPermission(user, 'plans', 'manage')).toBe(false);
  });

  it('should allow pedagogical editors to manage content but not system', () => {
    const user = { role: 'pedagogical_editor' as const };
    expect(PermissionService.hasPermission(user, 'content', 'manage')).toBe(true);
    expect(PermissionService.hasPermission(user, 'system', 'manage')).toBe(false);
  });
});
