import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { RequestModalParams, FormType } from '../types/submissions';
import { cn } from '../lib/utils';

interface RequestFormModalProps {
  params: RequestModalParams;
  onClose: () => void;
}

export function RequestFormModal({ params, onClose }: RequestFormModalProps) {
  const { requestType, sourceSlug, context } = params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const formType: FormType = requestType === 'floor_plan' ? 'floor_plan' : 'quote';

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const { error: err } = await supabase.from('submissions').insert({
        form_type: formType,
        name,
        email,
        phone: phone || null,
        message: message || null,
        source_slug: sourceSlug || null,
        context: context || null,
      });
      if (err) throw new Error(err.message);
      setSuccess(true);
      setTimeout(() => onClose(), 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  const title =
    requestType === 'floor_plan'
      ? 'Request Floor Plan'
      : context
        ? `Request Quote: ${context}`
        : 'Request Quote';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-modal-title"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-h-[90vh] overflow-y-auto px-4 sm:px-5">
        <div className="sticky top-0 bg-white border-b py-3 flex justify-between items-center">
          <h2 id="request-modal-title" className="text-lg font-heading font-light text-gray-900">
            {title}
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
        {success ? (
          <div className="text-center py-6">
            <p className="text-primary font-medium">Thanks! We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 pb-4">
            <div>
              <label htmlFor="request-name" className="block text-xs font-medium text-gray-600 mb-1">
                Name *
              </label>
              <input
                id="request-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={cn(
                  'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm',
                  'focus:ring-2 focus:ring-primary focus:border-transparent'
                )}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="request-email" className="block text-xs font-medium text-gray-600 mb-1">
                Email *
              </label>
              <input
                id="request-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={cn(
                  'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm',
                  'focus:ring-2 focus:ring-primary focus:border-transparent'
                )}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="request-phone" className="block text-xs font-medium text-gray-600 mb-1">
                Phone
              </label>
              <input
                id="request-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={cn(
                  'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm',
                  'focus:ring-2 focus:ring-primary focus:border-transparent'
                )}
                placeholder="+44 123 456 7890"
              />
            </div>
            <div>
              <label htmlFor="request-message" className="block text-xs font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="request-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className={cn(
                  'w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none',
                  'focus:ring-2 focus:ring-primary focus:border-transparent'
                )}
                placeholder="Any details about your request…"
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
                disabled={submitting}
                className={cn(
                  'flex-1 px-4 py-2 bg-primary text-black rounded-lg text-sm font-thin',
                  'hover:bg-primary/90 disabled:opacity-50 touch-manipulation'
                )}
              >
                {submitting ? 'Sending…' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
