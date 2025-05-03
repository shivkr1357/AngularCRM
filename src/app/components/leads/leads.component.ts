import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeadService } from '../../services/lead.service';
import { Router } from '@angular/router';
import { Lead } from '../../interfaces/lead.interface';
@Component({
  selector: 'app-leads',
  imports: [CommonModule],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css',
})
export class LeadsComponent {
  leads: Lead[];

  constructor(private leadService: LeadService, private router: Router) {
    this.leads = this.leadService.getAllLeads();
  }

  navigateToLeadsDetails(id: number) {
    this.router.navigate(['/dashboard/leads', id]);
  }
}
