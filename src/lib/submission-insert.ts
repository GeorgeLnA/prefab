import { supabase } from './supabase';
import { sendAdminNotificationForSubmission } from './emailjs';
import type { Submission, SubmissionInsert } from '../types/submissions';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  message?: string;
  budget?: string;
}

export interface DesignRequestFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  budget?: string;
  payload?: Record<string, unknown>;
}

export interface QuoteFloorPlanFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  source_slug?: string;
  context?: string;
}

export async function insertContact(data: ContactFormData): Promise<{ data: Submission | null; error: Error | null }> {
  const row: SubmissionInsert = {
    form_type: 'contact',
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    message: data.message || null,
    project_type: data.projectType || null,
    budget: data.budget || null,
  };
  const { data: out, error } = await supabase.from('submissions').insert(row).select().single();
  if (!error && out) sendAdminNotificationForSubmission(out as Submission);
  return { data: out as Submission | null, error: error ? new Error(error.message) : null };
}

export async function insertDesignRequest(data: DesignRequestFormData): Promise<{ data: Submission | null; error: Error | null }> {
  const row: SubmissionInsert = {
    form_type: 'design_request',
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    message: data.message || null,
    budget: data.budget || null,
    payload: data.payload ?? null,
  };
  const { data: out, error } = await supabase.from('submissions').insert(row).select().single();
  if (!error && out) sendAdminNotificationForSubmission(out as Submission);
  return { data: out as Submission | null, error: error ? new Error(error.message) : null };
}

export async function insertQuote(data: QuoteFloorPlanFormData): Promise<{ data: Submission | null; error: Error | null }> {
  const row: SubmissionInsert = {
    form_type: 'quote',
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    message: data.message || null,
    source_slug: data.source_slug ?? null,
    context: data.context ?? null,
  };
  const { data: out, error } = await supabase.from('submissions').insert(row).select().single();
  if (!error && out) sendAdminNotificationForSubmission(out as Submission);
  return { data: out as Submission | null, error: error ? new Error(error.message) : null };
}

export async function insertFloorPlan(data: QuoteFloorPlanFormData): Promise<{ data: Submission | null; error: Error | null }> {
  const row: SubmissionInsert = {
    form_type: 'floor_plan',
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    message: data.message || null,
    source_slug: data.source_slug ?? null,
    context: data.context ?? null,
  };
  const { data: out, error } = await supabase.from('submissions').insert(row).select().single();
  if (!error && out) sendAdminNotificationForSubmission(out as Submission);
  return { data: out as Submission | null, error: error ? new Error(error.message) : null };
}
