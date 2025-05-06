import { Component } from '@angular/core';
import { TableColumn } from '../../shared/components/table/table.interface';
import { TableComponent } from '../../shared/components/table/table.component';
import { Agency } from '../../interfaces/agency.interface';
import { AgencyService } from '../../services/agency.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agencies',
  imports: [CommonModule, TableComponent],
  standalone: true,
  templateUrl: './agencies.component.html',
  styleUrl: './agencies.component.css',
})
export class AgenciesComponent {
  agencyData: Agency[] = [];
  currentPage: number = 1;
  pageSize = 10;

  constructor(private agencyService: AgencyService, private router: Router) {
    this.agencyData = this.agencyService.getAllAgency();
  }

  columns: TableColumn[] = [
    { key: 'id', label: 'Id', type: 'text' },
    { key: 'name', label: 'Name', type: 'text' },
    { key: 'code', label: 'Code', type: 'text' },
    { key: 'primary_contact', label: 'Primary Contact', type: 'text' },
    { key: 'email', label: 'Email', type: 'text' },
    { key: 'phone', label: 'Phone', type: 'text' },
    { key: 'commission_rate', label: 'Commission Rate', type: 'text' },
    { key: 'revenue', label: 'Revenue', type: 'currency' },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeConfig: {
        active: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
        inactive: { bg: 'bg-amber-100', text: 'text-amber-700' },
      },
    },
  ];

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onRowClick(agency: Agency): void {
    this.router.navigate(['/agency', agency.id]);
  }
}
