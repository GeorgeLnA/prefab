/** Ukrainian display labels for `submissions.form_type` (site, admin, EmailJS). */
export const FORM_TYPE_LABELS_UK: Record<string, string> = {
  contact: 'Контакт',
  design_request: 'Запит на дизайн',
  quote: 'Комерційна пропозиція',
  floor_plan: 'План поверху',
};

export function formTypeLabelUk(formType: string): string {
  return FORM_TYPE_LABELS_UK[formType] ?? formType.replaceAll('_', ' ');
}
