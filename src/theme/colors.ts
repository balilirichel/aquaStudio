export const colors = {
  background: '#0B1614',
  foreground: '#DCEEE6',
  primary: '#C08552',
  primaryForeground: '#0B1614',
  secondary: '#6FA287',
  secondaryForeground: '#0B1614',
  muted: '#1A2B25',
  mutedForeground: '#8A8F87',
  accent: '#1F3830',
  accentForeground: '#DCEEE6',
  destructive: '#8B4A4A',
  card: '#16241F',
  cardForeground: '#DCEEE6',
  popover: '#16241F',
  popoverForeground: '#DCEEE6',
  border: '#2B3D36',
  input: '#16241F',
  ring: '#C08552',
  white: '#FFFFFF',
} as const;

const hexToRgb = (hex: string): [number, number, number] => {
  const value = hex.replace('#', '');
  const full = value.length === 3 ? value.split('').map((c) => c + c).join('') : value;
  const int = parseInt(full, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
};

export const alpha = (hex: string, percentage: number): string => {
  const [r, g, b] = hexToRgb(hex);
  const a = Math.max(0, Math.min(1, percentage));
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
