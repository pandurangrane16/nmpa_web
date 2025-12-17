import { Component } from '@angular/core';
import { CmInput } from '../../../../components/cm-input/cm-input';
import { CmTextarea } from "../../../../components/cm-textarea/cm-textarea";
import { CmToggle } from "../../../../components/cm-toggle/cm-toggle";
import { CmButton } from '../../../../components/cm-button/cm-button';

@Component({
  selector: 'app-workflow-master',
  imports: [CmInput, CmTextarea, CmToggle,CmButton],
  templateUrl: './workflow-master.component.html',
  styleUrl: './workflow-master.component.css',
})
export class WorkflowMasterComponent {

  submitForm() {

  }
}
