import { AdminRole, AdminPermission } from "../types";

export class PermissionService {
  private static rolePermissions: Record<AdminRole, AdminPermission[]> = {
    super_admin: [
      { module: "users", actions: ["manage"] },
      { module: "activities", actions: ["manage"] },
      { module: "bncc", actions: ["manage"] },
      { module: "mascots", actions: ["manage"] },
      { module: "content", actions: ["manage"] },
      { module: "plans", actions: ["manage"] },
      { module: "system", actions: ["manage"] },
    ],
    administrator: [
      { module: "users", actions: ["read", "update"] },
      { module: "activities", actions: ["manage"] },
      { module: "bncc", actions: ["read", "update"] },
      { module: "mascots", actions: ["read", "update"] },
      { module: "content", actions: ["manage"] },
      { module: "plans", actions: ["read", "update"] },
    ],
    support: [
      { module: "users", actions: ["read"] },
      { module: "activities", actions: ["read"] },
      { module: "system", actions: ["read"] },
    ],
    pedagogical_editor: [
      { module: "activities", actions: ["manage"] },
      { module: "bncc", actions: ["manage"] },
      { module: "content", actions: ["manage"] },
    ],
  };

  static getPermissionsForRole(role: AdminRole): AdminPermission[] {
    return this.rolePermissions[role] || [];
  }

  static hasPermission(
    user: { role: AdminRole },
    module: AdminPermission["module"],
    action: AdminPermission["actions"][number],
  ): boolean {
    const perms = this.getPermissionsForRole(user.role);
    const modulePerm = perms.find((p) => p.module === module);
    if (!modulePerm) return false;
    return modulePerm.actions.includes("manage") || modulePerm.actions.includes(action);
  }
}
