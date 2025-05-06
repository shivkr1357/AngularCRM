import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  showCharts = true;

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

  constructor(private router: Router) {
    // Subscribe to router events to detect route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Show charts only on the main dashboard route
        this.showCharts = event.url === '/dashboard';
      });
  }

  ngOnInit(): void {
    // Set initial state based on current route
    this.showCharts = this.router.url === '/dashboard';
  }
}
