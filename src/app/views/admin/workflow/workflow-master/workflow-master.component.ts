import { Component } from '@angular/core';
import { CmInput } from '../../../../components/cm-input/cm-input';
import { CmTextarea } from "../../../../components/cm-textarea/cm-textarea";
import { CmToggle } from "../../../../components/cm-toggle/cm-toggle";
import { CmButton } from '../../../../components/cm-button/cm-button';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-workflow-master',
  imports: [CmInput, CmTextarea, CmToggle, CmButton,NgbModule],
  templateUrl: './workflow-master.component.html',
  styleUrl: './workflow-master.component.css',
})
export class WorkflowMasterComponent {
  constructor(private router: Router) { }

  submitForm() {

  }

  backToList() {
    this.router.navigate(['admin/workflow']);
  }

}