import { Injectable } from '@angular/core';
import { Lead } from '../interfaces/lead.interface';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private leads: Lead[] = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+1 234-567-8900',
      status: 'New',
      company: 'Tech Solutions Inc',
      source: 'Website',
      value: '$10,000',
      probability: 30,
      notes: 'Interested in enterprise solution',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1 345-678-9012',
      status: 'Contacted',
      company: 'Global Industries',
      source: 'Referral',
      value: '$15,000',
      probability: 60,
      notes: 'Follow up scheduled for next week',
    },
    {
      id: 3,
      name: 'Mike Brown',
      email: 'mike@example.com',
      phone: '+1 456-789-0123',
      status: 'Qualified',
      company: 'Acme Corp',
      source: 'Trade Show',
      value: '$20,000',
      probability: 80,
      notes: 'Ready for proposal',
    },
  ];

  constructor() {}

  getLeadById(id: number): Lead | undefined {
    return this.leads.find((lead) => lead.id === id);
  }

  getAllLeads(): Lead[] {
    return this.leads;
  }
}
