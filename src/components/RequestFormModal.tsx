import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { insertQuote, insertFloorPlan } from '../lib/submission-insert';
import type { RequestModalParams } from '../types/submissions';
import { cn } from '../lib/utils';

interface RequestFormModalProps {
  params: RequestModalParams;
  onClose: () => void;
}

export function RequestFormModal({ params, onClose }: RequestFormModalProps) {
  const navigate = useNavigate();
  const { requestType, sourceSlug, context } = params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

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
    const payload = { name, email, phone, message, source_slug: sourceSlug ?? undefined, context: context ?? undefined };
    try {
      const { error: err } = requestType === 'floor_plan'
        ? await insertFloorPlan(payload)
        : await insertQuote(payload);
      if (err) throw err;
      onClose();
      navigate('/thanks');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Щось пішло не так');
    } finally {
      setSubmitting(false);
    }
  };

  const title =
    requestType === 'floor_plan'
      ? 'Запит на планування'
      : context
        ? `Комерційна пропозиція: ${context}`
        : 'Запит комерційної пропозиції';

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
            aria-label="Закрити"
          >
            <span className="text-xl leading-none">×</span>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3 pb-4">
            <div>
              <label htmlFor="request-name" className="block text-xs font-medium text-gray-600 mb-1">
                Ім’я *
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
                placeholder="Ваше ім’я"
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
                placeholder="email@приклад.com"
              />
            </div>
            <div>
              <label htmlFor="request-phone" className="block text-xs font-medium text-gray-600 mb-1">
                Телефон
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
                placeholder="+380 00 000 0000"
              />
            </div>
            <div>
              <label htmlFor="request-message" className="block text-xs font-medium text-gray-600 mb-1">
                Повідомлення
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
                placeholder="Деталі вашого запиту…"
              />
            </div>
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
                disabled={submitting}
                className={cn(
                  'flex-1 px-4 py-2 bg-primary text-black rounded-lg text-sm font-thin',
                  'hover:bg-primary/90 disabled:opacity-50 touch-manipulation'
                )}
              >
                {submitting ? 'Надсилаємо…' : 'Надіслати'}
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}
