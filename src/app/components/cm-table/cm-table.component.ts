import { Component, Input, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface TableColumn {
  key: string;
  title: string;
}

@Component({
  selector: 'cm-datatable',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cm-table.component.html'
})
export class CmTableComponent implements OnInit {

  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() pageSize = 10;

  searchText = signal('');
  currentPage = signal(1);

  sortedColumn = signal<string | null>(null);
  sortDirection = signal<'asc' | 'desc'>('asc');

  ngOnInit(): void {}

  // Filter Data
  filteredData = computed(() => {
    const text = this.searchText().toLowerCase();

    return this.data.filter(row =>
      Object.values(row).some(val =>
        String(val).toLowerCase().includes(text)
      )
    );
  });

  // Sorting
  sort(col: string) {
    if (this.sortedColumn() === col) {
      this.sortDirection.update(dir => (dir === 'asc' ? 'desc' : 'asc'));
    } else {
      this.sortedColumn.set(col);
      this.sortDirection.set('asc');
    }
  }

  sortedData = computed(() => {
    const data = [...this.filteredData()];
    const col = this.sortedColumn();
    if (!col) return data;

    const dir = this.sortDirection();
    return data.sort((a, b) => {
      let x = a[col];
      let y = b[col];

      if (typeof x === 'string') x = x.toLowerCase();
      if (typeof y === 'string') y = y.toLowerCase();

      return dir === 'asc' ? (x > y ? 1 : -1) : (x < y ? 1 : -1);
    });
  });

  // Pagination
  paginatedData = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.sortedData().slice(start, start + this.pageSize);
  });

  totalPages = computed(() =>
    Math.ceil(this.sortedData().length / this.pageSize)
  );

  changePage(p: number) {
    if (p < 1 || p > this.totalPages()) return;
    this.currentPage.set(p);
  }
}
