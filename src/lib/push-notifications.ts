/** @deprecated Use usePushNotifications. Push deve ser ativado por ação explícita da família. */
export async function registerPushNotifications() {
  console.warn('[push] registro automático legado desativado; use o fluxo contextual de lembretes.');
  return null;
}
