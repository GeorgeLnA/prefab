import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { cn } from '../../lib/utils';

interface AdminLoginProps {
  onSuccess?: () => void;
  className?: string;
}

export function AdminLogin({ onSuccess, className }: AdminLoginProps) {
  const { login } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (login(password)) {
      onSuccess?.();
    } else {
      setError('Invalid password');
    }
    setLoading(false);
  };

  return (
    <div className={cn('w-full px-4 sm:px-5 py-8', className)}>
      <h1 className="text-xl font-heading font-light text-gray-900 mb-2">Admin</h1>
      <p className="text-sm text-gray-600 mb-6">Enter password to continue.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="admin-password" className="sr-only">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
            autoComplete="current-password"
            autoFocus
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-black px-4 py-3 rounded-lg font-thin hover:bg-primary/90 transition-colors disabled:opacity-50 touch-manipulation"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
