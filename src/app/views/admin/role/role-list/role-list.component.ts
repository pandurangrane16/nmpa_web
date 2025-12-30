import { Component } from '@angular/core';
import { CmTableComponent } from '../../../../components/cm-table/cm-table.component';
import { MdlCompanyViewComponent } from '../../company/mdl-company-view/mdl-company-view.component';
import { CommonModule } from '@angular/common';
import { CmButton } from '../../../../components/cm-button/cm-button';
import { Router } from '@angular/router';
import { MdlViewRoleComponent } from '../mdl-view-role/mdl-view-role.component';
import { RoleMasterComponent } from '../role-master/role-master.component';

@Component({
  selector: 'app-role-list',
  imports: [CmTableComponent, MdlViewRoleComponent, CommonModule, CmButton, RoleMasterComponent],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css',
})
export class RoleListComponent {

  open = false; // ✅ boolean
  actionType: 'view' | 'edit' | 'delete' | 'create' = 'view';
  selectedRow: any;
  constructor(private router: Router) { }
  columns = [
    { key: 'id', title: 'Role ID', type: 'string' },
    { key: 'name', title: 'Role Name', type: 'string' },
    { key: 'desc', title: 'Description', type: 'string' },
  ];

  userList = [
    { id: 1, name: 'John', desc: 'john@gmail.com' },
    { id: 2, name: 'Smith', desc: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', desc: 'alice@outlook.com' },
    // …
  ];
  permissions = {
    view: true,
    update: true,
    delete: false
  };

  actions = [
    {
      label: 'View',
      class: 'bg-emerald-500 text-black gap-3',
      show: () => this.permissions.view,
      callback: (row: any) => this.tableClick(row, 'view')
    },
    {
      label: 'Edit',
      class: 'bg-yellow-500 text-black gap-3',
      show: () => this.permissions.update,
      callback: (row: any) => this.tableClick(row, 'edit')
    },
    {
      label: 'Delete',
      class: 'bg-red-500 text-black gap-3',
      show: () => this.permissions.delete,
      callback: (row: any) => this.tableClick(row, 'delete')
    }
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
    this.openCreateForm();
  }

  openCreateForm() {
    this.open = true;
    this.actionType = 'create';
  }
}
