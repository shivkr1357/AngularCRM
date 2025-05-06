import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './components/leads/leads.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LeadDetailsComponent } from './components/lead-details/lead-details.component';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { AgencyDetailsComponent } from './components/agency-details/agency-details.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'leads', component: LeadsComponent },
  { path: 'leads/:id', component: LeadDetailsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/:id', component: ClientDetailsComponent },
  { path: 'agencies', component: AgenciesComponent },
  { path: 'agencies/:id', component: AgencyDetailsComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'policies/:id', component: PolicyDetailsComponent },
];
