import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clients = [
    {
      id: 1,
      name: 'Acme Corp',
      contact: 'Jane Doe',
      email: 'jane@acme.com',
      status: 'Active',
      address: '123 Business St, New York',
      phone: '+1 234-567-8900',
      industry: 'Technology',
      revenue: '$5M',
      employees: 50,
      notes: 'Long-term client with multiple projects',
    },
    {
      id: 2,
      name: 'Tech Solutions',
      contact: 'Bob Wilson',
      email: 'bob@tech.com',
      status: 'Active',
      address: '456 Tech Ave, San Francisco',
      phone: '+1 345-678-9012',
      industry: 'Software',
      revenue: '$10M',
      employees: 100,
      notes: 'Strategic partner for cloud solutions',
    },
    {
      id: 3,
      name: 'Global Industries',
      contact: 'Alice Brown',
      email: 'alice@global.com',
      status: 'Inactive',
      address: '789 Global Blvd, London',
      phone: '+44 123-456-7890',
      industry: 'Manufacturing',
      revenue: '$20M',
      employees: 200,
      notes: 'On hold due to restructuring',
    },
  ];

  getClientById(id: number) {
    return this.clients.find((client) => client.id === id);
  }

  getAllClients() {
    return this.clients;
  }
}
