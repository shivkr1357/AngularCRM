import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../shared/components/table/table.component';
import { PolicyService } from '../../services/policy.service';
import { Router } from '@angular/router';
import { Policy, PolicyStatus } from '../../interfaces/policy.interface';
import { TableColumn } from '../../shared/components/table/table.interface';
@Component({
  selector: 'app-policies',
  imports: [CommonModule, TableComponent],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css',
})
export class PoliciesComponent {
  policyData: Policy[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  constructor(private policyService: PolicyService, private router: Router) {
    this.policyData = this.policyService.getAllPolicy();
  }

  columns: TableColumn[] = [
    { key: 'id', label: 'Id', type: 'number' },
    { key: 'policy_type', label: 'Policy Type', type: 'text' },
    {
      key: 'status',
      label: 'Policy Status',
      type: 'badge',
      badgeConfig: {
        active: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
        inactive: { bg: 'bg-amber-100', text: 'text-amber-700' },
        [PolicyStatus.active]: {
          bg: 'bg-emerald-100',
          text: 'text-emerald-700',
        },
        [PolicyStatus.pending]: { bg: 'bg-amber-100', text: 'text-amber-700' },
        [PolicyStatus.pending_cms]: {
          bg: 'bg-blue-100',
          text: 'text-blue-700',
        },
        [PolicyStatus.pending_aor]: {
          bg: 'bg-purple-100',
          text: 'text-purple-700',
        },
        [PolicyStatus.pending_application_request]: {
          bg: 'bg-indigo-100',
          text: 'text-indigo-700',
        },
        [PolicyStatus.issued]: { bg: 'bg-green-100', text: 'text-green-700' },
        [PolicyStatus.placed]: { bg: 'bg-teal-100', text: 'text-teal-700' },
        [PolicyStatus.withdrawn]: { bg: 'bg-gray-100', text: 'text-gray-700' },
        [PolicyStatus.wrong_sep]: {
          bg: 'bg-orange-100',
          text: 'text-orange-700',
        },
        [PolicyStatus.rejected]: { bg: 'bg-red-100', text: 'text-red-700' },
        [PolicyStatus.future_cancellation]: {
          bg: 'bg-pink-100',
          text: 'text-pink-700',
        },
        [PolicyStatus.cancelled]: { bg: 'bg-red-100', text: 'text-red-700' },
        [PolicyStatus.unknown]: { bg: 'bg-gray-100', text: 'text-gray-700' },
      },
    },
    { key: 'carrier', label: 'Carrier', type: 'text' },
    { key: 'assignedTo', label: 'Assigned To', type: 'text' },
    { key: 'agent_one', label: 'Agent One', type: 'text' },
    { key: 'contact', label: 'Contact', type: 'text' },
    // { key: 'date_Sale_made', label: 'Date Sale Made', type: 'text' },
    { key: 'policy_number', label: 'Policy Number', type: 'text' },
    { key: 'medicare_number', label: 'Medicare Number', type: 'text' },
    { key: 'plan_and_network_id', label: 'Plan & Network ID', type: 'text' },
  ];

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onRowClick(policy: Policy): void {
    this.router.navigate(['/policies', policy.id]);
  }
}
