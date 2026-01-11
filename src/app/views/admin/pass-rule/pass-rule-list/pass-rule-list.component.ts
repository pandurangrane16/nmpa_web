import { Component } from '@angular/core';
import { CmTableComponent } from '../../../../components/cm-table/cm-table.component';
import { MdlCompanyViewComponent } from '../../company/mdl-company-view/mdl-company-view.component';
import { CommonModule } from '@angular/common';
import { CmButton } from '../../../../components/cm-button/cm-button';
import { PassRuleManagementComponent } from "../pass-rule-management/pass-rule-management.component";

@Component({
  selector: 'app-pass-rule-list',
  imports: [CmTableComponent, CommonModule, CmButton, PassRuleManagementComponent],
  templateUrl: './pass-rule-list.component.html',
  styleUrl: './pass-rule-list.component.css',
})
export class PassRuleListComponent {

  open = false; // ✅ boolean
  actionType: 'view' | 'edit' | 'delete' | 'create' = 'view';
  selectedRow: any;

  columns: any = [
    { key: 'id', title: 'Sr No', tpe: "string" },
    { key: 'type', title: 'Type', type: "string" },
    { key: 'desc', title: 'Description', type: "string" },
  ];

  userList = [
    { id: 1, type: 'John', desc: 'john@gmail.com' },
    { id: 2, type: 'Smith', desc: 'smith@yahoo.com' },
    { id: 3, type: 'Alice', desc: 'alice@outlook.com' },
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

  CreatePassRule() {
    this.openCreateForm();
  }

  openCreateForm() {
    this.open = true;
    this.actionType = 'create';
  }
}
