import { Component } from '@angular/core';
import { CmInput } from '../../../components/cm-input/cm-input';
import { CmTextarea } from '../../../components/cm-textarea/cm-textarea';
import { CmToggle } from '../../../components/cm-toggle/cm-toggle';
import { CmAutoselect } from "../../../components/cm-autoselect/cm-autoselect";
import { CmSelectComponent } from "../../../components/cm-select/cm-select.component";

@Component({
  selector: 'app-workflow-level',
  imports: [CmInput, CmToggle, CmAutoselect, CmSelectComponent],
  templateUrl: './workflow-level.component.html',
  styleUrl: './workflow-level.component.css',
})
export class WorkflowLevelComponent {

  userList: any[] = [
    { label: "--Select--", value: "0" },
    { label: "Supervisor", value: "sv" },
    { label: "Admin", value: "admin" },
    { label: "Super Admin", value: "sa" },
  ];

  submitForm() {

  }

  onSelect(event: any) {
    console.log("Selected Workflow: ", event);
  }
}
