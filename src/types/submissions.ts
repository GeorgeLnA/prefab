export type FormType = 'contact' | 'design_request' | 'quote' | 'floor_plan';

export interface Submission {
  id: string;
  created_at: string;
  form_type: FormType;
  name: string;
  email: string;
  phone: string | null;
  message: string | null;
  project_type: string | null;
  budget: string | null;
  source_slug: string | null;
  context: string | null;
  payload: Record<string, unknown> | null;
}

export type SubmissionInsert = {
  form_type: FormType;
  name: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  project_type?: string | null;
  budget?: string | null;
  source_slug?: string | null;
  context?: string | null;
  payload?: Record<string, unknown> | null;
};

export type SubmissionUpdate = Partial<Omit<Submission, 'id' | 'created_at'>>;

export interface RequestModalParams {
  requestType: 'quote' | 'floor_plan';
  sourceSlug?: string;
  context?: string;
}
