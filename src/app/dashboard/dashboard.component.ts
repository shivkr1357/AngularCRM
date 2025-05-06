import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TableComponent } from '../shared/components/table/table.component';
import { TableColumn } from '../shared/components/table/table.interface';
import { DashboardService } from '../services/dashboard.service';
import { Leaderboard } from '../interfaces/leaderboard.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule, RouterOutlet, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  leaderboardData: Leaderboard[] = [];
  showCharts = true;
  currentPage = 1;
  pageSize = 5;

  // Table Configuration
  leaderboardColumns: TableColumn[] = [
    { key: 'rank', label: 'Rank', type: 'text' },
    { key: 'image', label: 'Agent', type: 'image' },
    { key: 'agency', label: 'Agency', type: 'text' },
    { key: 'leads', label: 'Leads', type: 'number' },
    { key: 'conversion', label: 'Conversion', type: 'text' },
    { key: 'revenue', label: 'Revenue', type: 'currency' },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeConfig: {
        active: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
        inactive: { bg: 'bg-amber-100', text: 'text-amber-700' },
        'on leave': { bg: 'bg-amber-100', text: 'text-amber-700' },
      },
    },
  ];

  // Line Chart
  lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        label: 'Leads',
        fill: true,
        tension: 0.5,
        borderColor: '#4F46E5', // Indigo
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
      },
    ],
  };
  lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Monthly Leads Overview',
      },
    },
  };

  // Pie Chart
  pieChartData = {
    labels: ['Active', 'Pending', 'Closed'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          '#10B981', // Emerald
          '#F59E0B', // Amber
          '#EF4444', // Red
        ],
      },
    ],
  };
  pieChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Lead Status Distribution',
      },
    },
  };

  // Bar Chart
  barChartData = {
    labels: ['Agency 1', 'Agency 2', 'Agency 3', 'Agency 4', 'Agency 5'],
    datasets: [
      {
        label: 'Clients per Agency',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(99, 102, 241, 0.5)', // Indigo with opacity
        borderColor: '#6366F1', // Indigo
        borderWidth: 1,
      },
    ],
  };
  barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Agency Performance',
      },
    },
  };

  constructor(
    private leaderboardService: DashboardService,
    private router: Router
  ) {
    this.leaderboardData = this.leaderboardService.getAllLeaderboardData();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showCharts = event.url === '/dashboard';
      });
  }

  ngOnInit(): void {
    this.showCharts = this.router.url === '/dashboard';
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onRowClick(row: any): void {
    console.log('Clicked row:', row);
  }
}
