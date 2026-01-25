import React, { createContext, useContext, useState, useCallback } from 'react';
import type { RequestModalParams } from '../types/submissions';
import { RequestFormModal } from '../components/RequestFormModal';

interface RequestModalContextValue {
  openRequestModal: (params: RequestModalParams) => void;
  closeRequestModal: () => void;
}

const RequestModalContext = createContext<RequestModalContextValue | null>(null);

export function RequestModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [params, setParams] = useState<RequestModalParams | null>(null);

  const openRequestModal = useCallback((p: RequestModalParams) => {
    setParams(p);
    setOpen(true);
  }, []);

  const closeRequestModal = useCallback(() => {
    setOpen(false);
    setParams(null);
  }, []);

  return (
    <RequestModalContext.Provider
      value={{ openRequestModal, closeRequestModal }}
    >
      {children}
      {open && params && (
        <RequestFormModal
          params={params}
          onClose={closeRequestModal}
        />
      )}
    </RequestModalContext.Provider>
  );
}

export function useRequestModal(): RequestModalContextValue {
  const ctx = useContext(RequestModalContext);
  if (!ctx) {
    throw new Error('useRequestModal must be used within RequestModalProvider');
  }
  return ctx;
}
