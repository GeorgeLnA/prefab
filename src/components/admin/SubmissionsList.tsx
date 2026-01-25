import React, { useState } from 'react';
import type { Submission, SubmissionUpdate } from '../../types/submissions';
import { useSubmissions } from '../../hooks/useSubmissions';
import { EditSubmissionModal } from './EditSubmissionModal';
import { cn } from '../../lib/utils';

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      dateStyle: 'short',
      timeStyle: 'short',
    });
  } catch {
    return iso;
  }
}

function FormTypeBadge({ formType }: { formType: string }) {
  const colors: Record<string, string> = {
    contact: 'bg-blue-100 text-blue-800',
    design_request: 'bg-amber-100 text-amber-800',
    quote: 'bg-green-100 text-green-800',
    floor_plan: 'bg-purple-100 text-purple-800',
  };
  const c = colors[formType] ?? 'bg-gray-100 text-gray-800';
  return (
    <span
      className={cn('inline-block px-2 py-0.5 rounded text-xs font-medium', c)}
    >
      {formType.replace('_', ' ')}
    </span>
  );
}

export function SubmissionsList() {
  const {
    submissions,
    loading,
    error,
    refetch,
    update,
    remove,
  } = useSubmissions();
  const [editing, setEditing] = useState<Submission | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleDelete = async (s: Submission) => {
    if (!window.confirm(`Delete submission from ${s.name}?`)) return;
    setDeleting(s.id);
    try {
      await remove(s.id);
      refetch();
    } finally {
      setDeleting(null);
    }
  };

  const handleSave = async (id: string, updates: SubmissionUpdate) => {
    await update(id, updates);
    setEditing(null);
    refetch();
  };

  if (loading) {
    return (
      <div className="py-8 text-center text-gray-500 text-sm">
        Loading submissions…
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 px-4">
        <p className="text-red-600 text-sm mb-4">{error}</p>
        <button
          type="button"
          onClick={refetch}
          className="px-4 py-2 bg-primary text-black rounded-lg text-sm font-thin hover:bg-primary/90 touch-manipulation"
        >
          Retry
        </button>
      </div>
    );
  }

  if (submissions.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500 text-sm">
        No submissions yet.
      </div>
    );
  }

  return (
    <>
      {/* Mobile: cards */}
      <div className="md:hidden space-y-3 p-4">
        {submissions.map((s) => (
          <div
            key={s.id}
            className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="min-w-0">
                <p className="font-medium text-gray-900 truncate">{s.name}</p>
                <p className="text-xs text-gray-500 truncate">{s.email}</p>
              </div>
              <FormTypeBadge formType={s.form_type} />
            </div>
            {s.phone && (
              <p className="text-xs text-gray-600 mb-1 truncate">{s.phone}</p>
            )}
            {s.message && (
              <p className="text-xs text-gray-600 line-clamp-2 mb-2">{s.message}</p>
            )}
            <p className="text-xs text-gray-400 mb-3">{formatDate(s.created_at)}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setEditing(s)}
                className="flex-1 px-3 py-2 bg-primary text-black rounded-lg text-xs font-thin hover:bg-primary/90 touch-manipulation"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDelete(s)}
                disabled={deleting === s.id}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs font-thin text-gray-700 hover:bg-gray-50 disabled:opacity-50 touch-manipulation"
              >
                {deleting === s.id ? '…' : 'Delete'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: table */}
      <div className="hidden md:block overflow-x-auto p-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-3 font-medium text-gray-700">Date</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700">Type</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700">Name</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700">Email</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700">Phone</th>
              <th className="text-left py-2 px-3 font-medium text-gray-700">Message</th>
              <th className="text-right py-2 px-3 font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 px-3 text-gray-500 whitespace-nowrap">
                  {formatDate(s.created_at)}
                </td>
                <td className="py-2 px-3">
                  <FormTypeBadge formType={s.form_type} />
                </td>
                <td className="py-2 px-3 font-medium text-gray-900">{s.name}</td>
                <td className="py-2 px-3 text-gray-700 truncate max-w-[140px]">
                  {s.email}
                </td>
                <td className="py-2 px-3 text-gray-600">{s.phone ?? '—'}</td>
                <td className="py-2 px-3 text-gray-600 max-w-[180px] truncate">
                  {s.message ?? '—'}
                </td>
                <td className="py-2 px-3 text-right">
                  <button
                    type="button"
                    onClick={() => setEditing(s)}
                    className="mr-2 px-3 py-1.5 bg-primary text-black rounded text-xs font-thin hover:bg-primary/90 touch-manipulation"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(s)}
                    disabled={deleting === s.id}
                    className="px-3 py-1.5 border border-gray-300 rounded text-xs font-thin text-gray-700 hover:bg-gray-50 disabled:opacity-50 touch-manipulation"
                  >
                    {deleting === s.id ? '…' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <EditSubmissionModal
          submission={editing}
          onClose={() => setEditing(null)}
          onSave={handleSave}
        />
      )}
    </>
  );
}
