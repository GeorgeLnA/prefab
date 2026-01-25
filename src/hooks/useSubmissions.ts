import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type { Submission, SubmissionInsert, SubmissionUpdate } from '../types/submissions';

export function useSubmissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: e } = await supabase
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false });
    if (e) {
      setError(e.message);
      setSubmissions([]);
    } else {
      setSubmissions((data as Submission[]) ?? []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const insert = useCallback(async (row: SubmissionInsert) => {
    const { data, error: e } = await supabase.from('submissions').insert(row).select().single();
    if (e) throw new Error(e.message);
    return data as Submission;
  }, []);

  const update = useCallback(async (id: string, updates: SubmissionUpdate) => {
    const { data, error: e } = await supabase
      .from('submissions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (e) throw new Error(e.message);
    return data as Submission;
  }, []);

  const remove = useCallback(async (id: string) => {
    const { error: e } = await supabase.from('submissions').delete().eq('id', id);
    if (e) throw new Error(e.message);
  }, []);

  return {
    submissions,
    loading,
    error,
    refetch: fetchSubmissions,
    insert,
    update,
    remove,
  };
}
