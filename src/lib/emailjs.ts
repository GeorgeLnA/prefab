import emailjs from '@emailjs/browser';
import { formTypeLabelUk } from '@/lib/form-type-labels';
import { SITE_ORIGIN } from '@/lib/utils';

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

let initialized = false;

function init(): boolean {
  if (initialized) return true;
  const key = typeof publicKey === 'string' && publicKey.length > 0 ? publicKey : '';
  if (!key) return false;
  try {
    emailjs.init(key);
    initialized = true;
    return true;
  } catch {
    return false;
  }
}

export function isEmailJsConfigured(): boolean {
  return (
    typeof publicKey === 'string' && publicKey.length > 0 &&
    typeof serviceId === 'string' && serviceId.length > 0 &&
    typeof adminTemplateId === 'string' && adminTemplateId.length > 0 &&
    typeof adminEmail === 'string' && adminEmail.length > 0
  );
}

/**
 * Admin template variable schema (for EmailJS dashboard).
 * Use these in your admin HTML template as {{variable_name}}.
 *
 * Required in template:
 * - to_email (admin recipient)
 *
 * Submission fields (use in your HTML):
 * - form_type        internal slug: "contact" | "design_request" | "quote" | "floor_plan"
 * - form_type_label  same type, Ukrainian label for humans (duplicate in template if needed)
 * - site_url         public site origin (footer link), e.g. https://prefabhomes.com.ua
 * - name             Ім'я
 * - email            Email
 * - phone            Телефон or "—"
 * - message          Повідомлення or "—"
 * - project_type     (контакт) or "—"
 * - budget           or "—"
 * - source_slug      (quote/floor_plan) or "—"
 * - context          or "—"
 * - payload_preview  (design_request: HTML-safe lines) or "—"
 * - submitted_at     дата/час у форматі uk-UA
 */
export type AdminTemplateParams = {
  to_email: string;
  form_type: string;
  form_type_label: string;
  site_url: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  project_type: string;
  budget: string;
  source_slug: string;
  context: string;
  payload_preview: string;
  submitted_at: string;
};

function buildAdminParams(partial: Partial<AdminTemplateParams>): AdminTemplateParams {
  const def = (v: string | undefined) => (v != null && v !== '' ? String(v) : '—');
  const formType = partial.form_type != null && partial.form_type !== '' ? String(partial.form_type) : '';
  const formTypeLabel =
    partial.form_type_label != null && partial.form_type_label !== ''
      ? String(partial.form_type_label)
      : formType
        ? formTypeLabelUk(formType)
        : '—';
  return {
    to_email: def(partial.to_email) || adminEmail || '—',
    form_type: formType ? formType : def(partial.form_type),
    form_type_label: formTypeLabel,
    site_url: partial.site_url != null && partial.site_url !== '' ? String(partial.site_url) : SITE_ORIGIN,
    name: def(partial.name),
    email: def(partial.email),
    phone: def(partial.phone),
    message: def(partial.message),
    project_type: def(partial.project_type),
    budget: def(partial.budget),
    source_slug: def(partial.source_slug),
    context: def(partial.context),
    payload_preview: def(partial.payload_preview),
    submitted_at: def(partial.submitted_at) || new Date().toISOString(),
  };
}

/**
 * Send admin notification email. Non-blocking: returns immediately,
 * sends in background. Does nothing if env is not configured.
 */
export function sendAdminNotification(params: Partial<AdminTemplateParams>): void {
  if (!isEmailJsConfigured() || !init()) return;
  const full = buildAdminParams({ ...params, to_email: adminEmail });
  emailjs.send(serviceId!, adminTemplateId!, full).catch(() => {
    // non-blocking: ignore errors (e.g. network)
  });
}

/** Format camelCase key for display (e.g. selectedBase → Selected base) */
function formatPayloadKey(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

/** Escape for safe HTML insert (e.g. when using {{{ }}} in template). */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Turn design request payload into HTML-safe readable lines for email. */
function formatPayloadForEmail(payload: Record<string, unknown>): string {
  const skipKeys = new Set(['name', 'email', 'phone', 'message', 'budget']);
  const entries = Object.entries(payload).filter(([k]) => !skipKeys.has(k));
  if (entries.length === 0) return '—';
  const lines = entries.map(([key, value]) => {
    const label = escapeHtml(formatPayloadKey(key));
    const displayValue =
      value === null || value === undefined
        ? '—'
        : typeof value === 'boolean'
          ? value ? 'Так' : 'Ні'
          : typeof value === 'object'
            ? escapeHtml(JSON.stringify(value))
            : escapeHtml(String(value));
    return `${label}: ${displayValue}`;
  });
  return lines.join('<br>').slice(0, 4000);
}

/**
 * Build admin template params from submission-like data and send (non-blocking).
 * Call after successful Supabase insert. Safe to call with missing env.
 */
export function sendAdminNotificationForSubmission(data: {
  form_type: string;
  name: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  project_type?: string | null;
  budget?: string | null;
  source_slug?: string | null;
  context?: string | null;
  payload?: Record<string, unknown> | null;
}): void {
  const payloadPreview =
    data.payload != null && Object.keys(data.payload).length > 0
      ? formatPayloadForEmail(data.payload)
      : '—';
  sendAdminNotification({
    form_type: data.form_type,
    form_type_label: formTypeLabelUk(data.form_type),
    name: data.name,
    email: data.email,
    phone: data.phone ?? '—',
    message: data.message ?? '—',
    project_type: data.project_type ?? '—',
    budget: data.budget ?? '—',
    source_slug: data.source_slug ?? '—',
    context: data.context ?? '—',
    payload_preview: payloadPreview,
    submitted_at: new Date().toLocaleString('uk-UA', { dateStyle: 'medium', timeStyle: 'short' }),
  });
}

/*
  Example send usage:

  // After successful form submit (non-blocking; already wired in submission-insert.ts):
  import { sendAdminNotificationForSubmission } from '@/lib/emailjs';
  const { data } = await insertContact({ name, email, phone, message, projectType, budget });
  if (data) sendAdminNotificationForSubmission(data);  // optional: insert handlers already do this

  // Direct admin notification with custom params:
  import { sendAdminNotification } from '@/lib/emailjs';
  sendAdminNotification({ form_type: 'contact', name: 'Jane', email: 'jane@example.com', message: 'Hello' });
*/
