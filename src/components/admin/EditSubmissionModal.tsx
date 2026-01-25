import React, { useState, useEffect } from 'react';
import type { Submission, SubmissionUpdate } from '../../types/submissions';
import { cn } from '../../lib/utils';

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
      setError(err instanceof Error ? err.message : 'Failed to save');
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
            Edit submission
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 rounded-lg touch-manipulation"
            aria-label="Close"
          >
            <span className="text-xl leading-none">×</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Name</label>
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
            <label className="block text-xs font-medium text-gray-600 mb-1">Phone</label>
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
            <label className="block text-xs font-medium text-gray-600 mb-1">Message</label>
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
            <label className="block text-xs font-medium text-gray-600 mb-1">Project type</label>
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
            <label className="block text-xs font-medium text-gray-600 mb-1">Budget</label>
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
            <label className="block text-xs font-medium text-gray-600 mb-1">Source (slug)</label>
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
            <label className="block text-xs font-medium text-gray-600 mb-1">Context</label>
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
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-thin text-gray-700 hover:bg-gray-50 touch-manipulation"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-4 py-2 bg-primary text-black rounded-lg text-sm font-thin hover:bg-primary/90 disabled:opacity-50 touch-manipulation"
            >
              {saving ? 'Saving…' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
