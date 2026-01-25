/**
 * Simple admin auth using sessionStorage.
 * Change ADMIN_PASSWORD before production use.
 */

export const ADMIN_PASSWORD = '1234';

const SESSION_KEY = 'prefab_admin_session';

export function setAdminSession(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, 'authenticated');
  } catch {
    // ignore
  }
}

export function clearAdminSession(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}

export function isAdminAuthenticated(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === 'authenticated';
  } catch {
    return false;
  }
}

export function checkPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}
