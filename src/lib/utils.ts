// Utility for conditional class names (shadcn/ui standard)
export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
} 