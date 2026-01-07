import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CmInput } from '../../../../components/cm-input/cm-input';
import { CmTextarea } from '../../../../components/cm-textarea/cm-textarea';
import { CmToggle } from '../../../../components/cm-toggle/cm-toggle';
import { CmButton } from '../../../../components/cm-button/cm-button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CmTableComponent } from '../../../../components/cm-table/cm-table.component';
import { CmSelectComponent } from '../../../../components/cm-select/cm-select.component';

@Component({
  selector: 'app-role-master',
  imports: [CmInput, CmTextarea, CmToggle, CmButton, CommonModule, CmTableComponent,CmSelectComponent],
  templateUrl: './role-master.component.html',
  styleUrl: './role-master.component.css',
})
export class RoleMasterComponent {
  constructor(private router: Router) { }

  @Input() company: any;
  @Input() actionType!: string;

  @Input() open = false;
  @Output() closeForm = new EventEmitter<void>();
  columns = [
    { key: 'menuName', title: 'Menu Name', type: 'text' },
    { key: 'isView', title: 'View Access', type: 'checkbox' },
    { key: 'isAdd', title: 'Add Access', type: 'checkbox' },
    { key: 'isEdit', title: 'Edit Access', type: 'checkbox' },
    { key: 'isDelete', title: 'Delete Access', type: 'checkbox' },
  ];
  roleTypes = [
    { label: 'Admin', value: 'admin' },
    { label: 'Company', value: 'company' }
  ];
  userList = [
    { menuName: 'User Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Role Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Workflow Configuration', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'User Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Role Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Workflow Configuration', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'User Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Role Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Workflow Configuration', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'User Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Role Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Workflow Configuration', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'User Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Role Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Workflow Configuration', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'User Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Role Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Workflow Configuration', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'User Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Role Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Workflow Configuration', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'User Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Role Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Workflow Configuration', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'User Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Role Master', isView: null, isAdd: null, isEdit: null, isDelete: null },
    { menuName: 'Workflow Configuration', isView: null, isAdd: null, isEdit: null, isDelete: null },
  ];

  actions = [];
  submitForm() {

  }

  backToList() {
    this.router.navigate(['admin/role-list']);
  }


  currentStep = 1;

  // next() {
  //   if (this.currentStep < 3) {
  //     this.currentStep++;
  //   }
  // }

  // prev() {
  //   if (this.currentStep > 1) {
  //     this.currentStep--;
  //   }
  // }

  goTo(step: number) {
    this.currentStep = step;
  }
  close() {
    this.closeForm.emit();
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  step = 1;

  next(): void {
    if (this.step < 3) {
      this.step++;
    }
  }

  prev(): void {
    if (this.step > 1) {
      this.step--;
    }
  }

  isActiveStep(current: number): boolean {
    return this.step === current;
  }

}
