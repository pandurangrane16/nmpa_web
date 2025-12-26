import { Component } from '@angular/core';
import { CmTableComponent } from '../../../../components/cm-table/cm-table.component';
import { MdlCompanyViewComponent } from '../mdl-company-view/mdl-company-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CmTableComponent, MdlCompanyViewComponent,CommonModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {

  open = false; // ✅ boolean
  actionType: 'view' | 'edit' | 'delete' = 'view';
  selectedRow: any;

  columns = [
    { key: 'id', title: 'Company ID' },
    { key: 'name', title: 'Company Name' },
    { key: 'email', title: 'Email' },
  ];

  userList = [
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    // …
  ];

  actions = [
    {
      label: 'View',
      class: 'bg-black text-white',
      callback: (row: any) => this.tableClick(row, 'view')
    },
    // {
    //   label: 'Edit',
    //   class: 'bg-yellow-500 text-black',
    //   callback: (row: any) => this.tableClick(row, 'edit')
    // },
    // {
    //   label: 'Delete',
    //   class: 'bg-red-500 text-white',
    //   callback: (row: any) => this.tableClick(row, 'delete')
    // }
  ];

  tableClick(row: any, type: 'view' | 'edit' | 'delete') {
    this.selectedRow = row;   // ✅ store row
    this.actionType = type;   // ✅ store action
    this.openDrawer();
  }

  openDrawer() {
    this.open = true;
  }

  closeDrawer() {
    this.open = false;
  }
}
