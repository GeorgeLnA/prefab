import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  isAdminAuthenticated,
  setAdminSession,
  clearAdminSession,
  checkPassword,
} from '../lib/admin-auth';

interface AdminAuthContextValue {
  authenticated: boolean;
  checked: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
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

  const value: AdminAuthContextValue = { authenticated, checked, login, logout };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth(): AdminAuthContextValue {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
}
