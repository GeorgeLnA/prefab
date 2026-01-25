import { useState, useEffect, useCallback } from 'react';
import {
  isAdminAuthenticated,
  setAdminSession,
  clearAdminSession,
  checkPassword,
} from '../lib/admin-auth';

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setAuthenticated(isAdminAuthenticated());
    setChecked(true);
  }, []);

  const login = useCallback((password: string) => {
    if (!checkPassword(password)) return false;
    setAdminSession();
    setAuthenticated(true);
    return true;
  }, []);

  const logout = useCallback(() => {
    clearAdminSession();
    setAuthenticated(false);
  }, []);

  return { authenticated, checked, login, logout };
}
