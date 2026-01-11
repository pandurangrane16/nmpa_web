import { Component, ViewChild } from '@angular/core';
import { CmTableComponent } from '../../../../components/cm-table/cm-table.component';
import { CmButton } from '../../../../components/cm-button/cm-button';
import { CmModal } from '../../../../components/cm-modal/cm-modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workflow-list',
  imports: [CmTableComponent, CmButton, CmModal],
  templateUrl: './workflow-list.component.html',
  styleUrl: './workflow-list.component.css',
})
export class WorkflowListComponent {
  @ViewChild('confirmModal') confirmModal!: CmModal;

  pendingDeleteRow: any = null;

  constructor(private router: Router) { }
  columns = [
    { key: 'id', title: 'Company ID', type: "string" },
    { key: 'name', title: 'Company Name', type: "string" },
    { key: 'email', title: 'Email', type: "string" },
  ];

  userList = [
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
  ];


  actions: any[] = [];

  ngOnInit() {
    this.actions = [
      {
        label: 'View',
        class: 'bg-green-500 text-white',
        callback: (row: any) => console.log('View', row)
      },
      {
        label: 'Edit',
        class: 'bg-yellow-500 text-black',
        callback: (row: any) => console.log('Edit', row)
      },
      {
        label: 'Delete',
        class: 'bg-red-500 text-white',
        callback: (row: any) => this.openDeleteConfirmation(row),
      }
    ];
  }

  CreateWorkflow() {
    this.router.navigate(['admin/workflow-master']);
  }

  openDeleteConfirmation(row: any) {
    this.pendingDeleteRow = row;
    this.confirmModal.openModal();
  }

  onDeleteConfirmed() {
    if (this.pendingDeleteRow) {
      console.log('Deleting:', this.pendingDeleteRow);
      // Add your actual delete logic here
      // For example: this.userList = this.userList.filter(item => item !== this.pendingDeleteRow);
      this.pendingDeleteRow = null;
    }
  }

  onDeleteCancelled() {
    this.pendingDeleteRow = null;
  }
}

