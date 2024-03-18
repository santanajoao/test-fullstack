export function addExtraNineOnPhone(phone: string): string {
  if (phone.length === 10) return phone.slice(0, 3) + '9' + phone.slice(3);
  return phone;
}
