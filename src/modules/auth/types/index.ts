import type { ReplitUser } from "../auth-server-fn";

export type { ReplitUser };

export interface AuthPrivacySettings {
  terms_accepted?: boolean;
  marketing_consent?: boolean;
  analytics_consent?: boolean;
  data_usage_consent?: boolean;
}

export interface AuthSession {
  user: ReplitUser;
}
