export enum Status {
  active = 'active',
  inactive = 'inactive',
}

export interface Agency {
  id: number;
  name: string;
  code: string;
  primary_contact: string;
  email: string;
  phone: string;
  commission_rate: string;
  revenue: number;
  status: Status;
  createdAt: string;
}
