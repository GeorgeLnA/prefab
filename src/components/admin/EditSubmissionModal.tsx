import React, { useState, useEffect } from 'react';
import type { Submission, SubmissionUpdate } from '../../types/submissions';
import { cn } from '../../lib/utils';

/** Format camelCase key for display */
function formatPayloadKey(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

function DesignRequestDetails({ payload }: { payload: Record<string, unknown> }) {
  const skipKeys = new Set(['name', 'email', 'phone', 'message', 'budget']);
  const entries = Object.entries(payload).filter(([k]) => !skipKeys.has(k));
  if (entries.length === 0) return null;

  return (
    <div className="border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
      <div className="px-3 py-2 bg-gray-100 border-b border-gray-200">
        <h3 className="text-sm font-medium text-gray-700">Деталі запиту на дизайн</h3>
      </div>
      <dl className="divide-y divide-gray-200">
        {entries.map(([key, value]) => {
          const displayValue =
            value === null || value === undefined
              ? '—'
              : typeof value === 'boolean'
                ? value ? 'Так' : 'Ні'
                : typeof value === 'object'
                  ? JSON.stringify(value)
                  : String(value);
          return (
            <div key={key} className="px-3 py-2 flex flex-wrap gap-x-2">
              <dt className="text-xs font-medium text-gray-600 shrink-0">
                {formatPayloadKey(key)}:
              </dt>
              <dd className="text-sm text-gray-800 break-words min-w-0">{displayValue}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

interface EditSubmissionModalProps {
  submission: Submission | null;
  onClose: () => void;
  onSave: (id: string, updates: SubmissionUpdate) => Promise<void>;
}

export function EditSubmissionModal({
  submission,
  onClose,
  onSave,
}: EditSubmissionModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [sourceSlug, setSourceSlug] = useState('');
  const [context, setContext] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (submission) {
      setName(submission.name);
      setEmail(submission.email);
      setPhone(submission.phone ?? '');
      setMessage(submission.message ?? '');
      setProjectType(submission.project_type ?? '');
      setBudget(submission.budget ?? '');
      setSourceSlug(submission.source_slug ?? '');
      setContext(submission.context ?? '');
    }
  }, [submission]);

  if (!submission) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      await onSave(submission.id, {
        name,
        email,
        phone: phone || null,
        message: message || null,
        project_type: projectType || null,
        budget: budget || null,
        source_slug: sourceSlug || null,
        context: context || null,
      });
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не вдалося зберегти');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-modal-title"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-h-[90vh] overflow-y-auto px-4 sm:px-5">
        <div className="sticky top-0 bg-white border-b py-3 flex justify-between items-center">
          <h2 id="edit-modal-title" className="text-lg font-heading font-light text-gray-900">
            Редагувати заявку
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 rounded-lg touch-manipulation"
            aria-label="Закрити"
          >
            <span className="text-xl leading-none">×</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Ім’я</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={cn(
                'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm',
                'focus:ring-2 focus:ring-primary focus:border-transparent'
              )}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={cn(
                'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm',
                'focus:ring-2 focus:ring-primary focus:border-transparent'
              )}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Телефон</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={cn(
                'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm',
                'focus:ring-2 focus:ring-primary focus:border-transparent'
              )}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Повідомлення</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className={cn(
                'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none',
                'focus:ring-2 focus:ring-primary focus:border-transparent'
              )}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Тип проєкту</label>
            <input
              type="text"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className={cn(
                'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm',
                'focus:ring-2 focus:ring-primary focus:border-transparent'
              )}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Бюджет</label>
            <input
              type="text"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={cn(
                'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm',
                'focus:ring-2 focus:ring-primary focus:border-transparent'
              )}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Джерело (slug)</label>
            <input
              type="text"
              value={sourceSlug}
              onChange={(e) => setSourceSlug(e.target.value)}
              className={cn(
                'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm',
                'focus:ring-2 focus:ring-primary focus:border-transparent'
              )}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Контекст</label>
            <input
              type="text"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className={cn(
                'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm',
                'focus:ring-2 focus:ring-primary focus:border-transparent'
              )}
            />
          </div>
          {submission.form_type === 'design_request' &&
            submission.payload &&
            Object.keys(submission.payload).length > 0 && (
              <DesignRequestDetails payload={submission.payload} />
            )}
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-thin text-gray-700 hover:bg-gray-50 touch-manipulation"
            >
              Скасувати
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-4 py-2 bg-primary text-black rounded-lg text-sm font-thin hover:bg-primary/90 disabled:opacity-50 touch-manipulation"
            >
              {saving ? 'Збереження…' : 'Зберегти'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
