import { Component } from '@angular/core';
import { CmTableComponent } from '../../../../components/cm-table/cm-table.component';
import { MdlCompanyViewComponent } from '../../company/mdl-company-view/mdl-company-view.component';
import { CommonModule } from '@angular/common';
import { CmButton } from '../../../../components/cm-button/cm-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-list',
  imports: [CmTableComponent, MdlCompanyViewComponent, CommonModule, CmButton],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css',
})
export class RoleListComponent {

  open = false; // ✅ boolean
  actionType: 'view' | 'edit' | 'delete' = 'view';
  selectedRow: any;
  constructor(private router: Router) { }
  columns = [
    { key: 'id', title: 'Role ID' },
    { key: 'name', title: 'Role Name' },
    { key: 'desc', title: 'Description' },
  ];

  userList = [
    { id: 1, name: 'John', desc: 'john@gmail.com' },
    { id: 2, name: 'Smith', desc: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', desc: 'alice@outlook.com' },
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
  CreateNewRole() {
    this.router.navigate(['admin/role-config']);
  }
}
