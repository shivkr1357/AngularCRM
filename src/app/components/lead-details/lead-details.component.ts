import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../services/lead.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Lead } from '../../interfaces/lead.interface';

@Component({
  selector: 'app-lead-details',
  imports: [CommonModule],
  templateUrl: './lead-details.component.html',
  styleUrl: './lead-details.component.css',
})
export class LeadDetailsComponent implements OnInit {
  private id: number = 0;
  lead: Lead | undefined;
  isLoading = false;
  error: string | null = null;

  constructor(
    private leadService: LeadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.lead = this.leadService.getLeadById(this.id);
    });
  }
}
