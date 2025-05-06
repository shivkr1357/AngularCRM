import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeadService } from '../../services/lead.service';
import { Router } from '@angular/router';
import { Lead } from '../../interfaces/lead.interface';
import { TableComponent } from '../../shared/components/table/table.component';
import { TableColumn } from '../../shared/components/table/table.interface';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css',
})
export class LeadsComponent {
  leads: Lead[];
  currentPage = 1;
  pageSize = 10;

  columns: TableColumn[] = [
    { key: 'id', label: 'ID', type: 'text' },
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'email', label: 'Email', type: 'text' },
    { key: 'phone', label: 'Phone', type: 'text' },
    { key: 'source', label: 'Source', type: 'text' },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeConfig: {
        active: { bg: 'bg-green-100', text: 'text-green-700' },
        inactive: { bg: 'bg-red-100', text: 'text-red-700' },
        new: { bg: 'bg-blue-100', text: 'text-blue-700' },
        contacted: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
        qualified: { bg: 'bg-green-100', text: 'text-green-700' },
        lost: { bg: 'bg-red-100', text: 'text-red-700' },
      },
    },
    { key: 'createdAt', label: 'Created At', type: 'text' },
  ];

  constructor(private leadService: LeadService, private router: Router) {
    this.leads = this.leadService.getAllLeads();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onRowClick(lead: Lead): void {
    this.router.navigate(['/leads', lead.id]);
  }
}
