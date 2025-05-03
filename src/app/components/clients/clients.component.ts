import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.clients = this.clientService.getAllClients();
  }

  navigateToClientDetails(id: number) {
    this.router.navigate(['/dashboard/clients', id]);
  }
}
