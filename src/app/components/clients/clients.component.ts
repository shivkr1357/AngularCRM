import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { TableComponent } from '../../shared/components/table/table.component';
import { TableColumn } from '../../shared/components/table/table.interface';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: any[] = [];
  currentPage = 1;
  pageSize = 10;

  columns: TableColumn[] = [
    { key: 'id', label: 'ID', type: 'text' },
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'email', label: 'Email', type: 'text' },
    { key: 'phone', label: 'Phone', type: 'text' },
    { key: 'company', label: 'Company', type: 'text' },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeConfig: {
        active: { bg: 'bg-green-100', text: 'text-green-700' },
        inactive: { bg: 'bg-red-100', text: 'text-red-700' },
        pending: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
      },
    },
    { key: 'createdAt', label: 'Created At', type: 'text' },
  ];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.clients = this.clientService.getAllClients();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onRowClick(client: any): void {
    this.router.navigate(['/clients', client.id]);
  }
}
