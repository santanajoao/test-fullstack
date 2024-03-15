export function toOnlyDigits(text: string): string {
  return text.replace(/[^\d]/g, '');
}
