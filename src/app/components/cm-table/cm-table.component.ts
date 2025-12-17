import { Component, Input, signal, computed, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "../../app-routing.module";
import { RouterModule } from '@angular/router';

export interface TableColumn {
  key: string;
  title: string;
}

export interface TableAction {
  label: string;
  class?: string;                    // Tailwind classes
  callback: (row: any) => void;       // Click handler
  show?: (row: any) => boolean;       // Optional condition
}

@Component({
  selector: 'cm-datatable',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cm-table.component.html',
  standalone : true
})
export class CmTableComponent implements OnInit {

  /* ================= Inputs ================= */
  @Input() columns: TableColumn[] = [];
  //@Input() data: any[] = [];
  @Input() pageSize = 10;
  @Input() enableSearch = true;
  @Input() actions: TableAction[] = [];
  @Input() showActions = false;

  /* ================= Signals ================= */
  searchText = signal('');
  currentPage = signal(1);

  sortedColumn = signal<string | null>(null);
  sortDirection = signal<'asc' | 'desc'>('asc');
  data = input<any[]>([]);

  ngOnInit(): void {
    console.log(this.data);
  }


  /* ================= Filtering ================= */
 filteredData = computed(() => {
  const text = this.searchText().toLowerCase();
  const rows = this.data(); // 👈 signal read

  return rows.filter(row =>
    Object.values(row).some(val =>
      String(val).toLowerCase().includes(text)
    )
  );
});

  /* ================= Sorting ================= */
  sort(column: string) {
    if (this.sortedColumn() === column) {
      this.sortDirection.update(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortedColumn.set(column);
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

      return dir === 'asc'
        ? x > y ? 1 : -1
        : x < y ? 1 : -1;
    });
  });

  /* ================= Pagination ================= */
  paginatedData = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.sortedData().slice(start, start + this.pageSize);
  });

  totalPages = computed(() =>
    Math.ceil(this.sortedData().length / this.pageSize)
  );

  changePage(page: number) {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage.set(page);
  }

  
}
