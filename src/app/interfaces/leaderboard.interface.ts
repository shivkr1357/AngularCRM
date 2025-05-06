export enum Status {
  'active',
  'inactive',
  'on leave',
}

export interface Leaderboard {
  id: number;
  rank: number;
  name: string;
  image: string;
  agency: string;
  leads: number;
  conversion: string;
  revenue: number;
  status: Status;
}
