import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './components/leads/leads.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LeadDetailsComponent } from './components/lead-details/lead-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'leads', pathMatch: 'full' },
      {
        path: 'leads',
        component: LeadsComponent,
      },
      {
        path: 'clients',
        component: ClientsComponent,
      },
      {
        path: 'clients/:id',
        component: ClientDetailsComponent,
      },
      {
        path: 'leads/:id',
        component: LeadDetailsComponent,
      },
    ],
  },
];
