import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableColumn } from './table.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() title: string = '';
  @Input() showHeader: boolean = true;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Output() rowClick = new EventEmitter<any>();
  @Output() pageChange = new EventEmitter<number>();

  // Make Math available in the template
  protected Math = Math;

  get totalPages(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  get paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    if (this.totalPages <= maxVisiblePages) {
      // Show all pages if total pages are less than maxVisiblePages
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate start and end of visible pages
      let start = Math.max(2, this.currentPage - 1);
      let end = Math.min(this.totalPages - 1, this.currentPage + 1);

      // Adjust if at the start
      if (this.currentPage <= 2) {
        end = 4;
      }
      // Adjust if at the end
      if (this.currentPage >= this.totalPages - 1) {
        start = this.totalPages - 3;
      }

      // Add ellipsis if needed
      if (start > 2) {
        pages.push(-1); // -1 represents ellipsis
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis if needed
      if (end < this.totalPages - 1) {
        pages.push(-1); // -1 represents ellipsis
      }

      // Always show last page
      pages.push(this.totalPages);
    }

    return pages;
  }

  onRowClick(row: any) {
    this.rowClick.emit(row);
  }

  getBadgeClass(value: string, config: any): string {
    const status = value.toLowerCase();
    const badgeStyle = config[status] || config.inactive;
    return `px-2 py-1 text-xs font-medium rounded-full ${badgeStyle.bg} ${badgeStyle.text}`;
  }
}
