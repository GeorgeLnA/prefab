import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { AdminLogin } from '../components/admin/AdminLogin';
import { SubmissionsList } from '../components/admin/SubmissionsList';
import { cn } from '../lib/utils';

export default function AdminPage() {
  const navigate = useNavigate();
  const { authenticated, checked, logout } = useAdminAuth();

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-500">Loading…</p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-5">
        <div className="w-full">
          <AdminLogin />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 sm:pt-28 pb-12">
      <div className="w-full px-4 sm:px-5">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-xl sm:text-2xl font-heading font-light text-gray-900">
            Submissions
          </h1>
          <button
            type="button"
            onClick={() => {
              logout();
              navigate('/');
            }}
            className={cn(
              'self-start sm:self-auto px-4 py-2 border border-gray-300 rounded-lg',
              'text-sm font-thin text-gray-700 hover:bg-gray-100 touch-manipulation'
            )}
          >
            Log out
          </button>
        </header>

        <main className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <SubmissionsList />
        </main>
      </div>
    </div>
  );
}
