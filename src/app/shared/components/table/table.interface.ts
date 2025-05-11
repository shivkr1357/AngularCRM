export interface TableColumn {
  key: string;
  label: string;
  type?: 'text' | 'image' | 'badge' | 'number' | 'currency' | 'date';
  badgeConfig?: {
    active: { bg: string; text: string };
    inactive: { bg: string; text: string };
    [key: string]: { bg: string; text: string };
  };
}
