export function normalizeRegistration(input: string): string {
  return input.toUpperCase().replace(/[^A-Z0-9]/g, "");
}
