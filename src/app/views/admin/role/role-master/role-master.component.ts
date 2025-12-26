import { Component } from '@angular/core';
import { CmInput } from '../../../../components/cm-input/cm-input';
import { CmTextarea } from '../../../../components/cm-textarea/cm-textarea';
import { CmToggle } from '../../../../components/cm-toggle/cm-toggle';
import { CmButton } from '../../../../components/cm-button/cm-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-master',
  imports: [CmInput, CmTextarea, CmToggle, CmButton],
  templateUrl: './role-master.component.html',
  styleUrl: './role-master.component.css',
})
export class RoleMasterComponent {
  constructor(private router: Router) { }

  submitForm() {

  }

  backToList() {
    this.router.navigate(['admin/role-config']);
  }
}
