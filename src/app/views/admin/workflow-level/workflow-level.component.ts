import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CmInput } from '../../../components/cm-input/cm-input';
import { CmToggle } from '../../../components/cm-toggle/cm-toggle';
import { CmAutoselect } from '../../../components/cm-autoselect/cm-autoselect';
import { CmSelectComponent } from '../../../components/cm-select/cm-select.component';
import { CmTableComponent } from '../../../components/cm-table/cm-table.component';

@Component({
  selector: 'app-workflow-level',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CmInput,
    CmToggle,
    CmAutoselect,
    CmSelectComponent,
    CmTableComponent
  ],
  templateUrl: './workflow-level.component.html',
  styleUrl: './workflow-level.component.css',
})
export class WorkflowLevelComponent implements OnInit {

  workflowLevelForm!: FormGroup;

  /** 🔹 Role dropdown */
  userList = [
    { label: '--Select--', value: '' },
    { label: 'Supervisor', value: 'sv' },
    { label: 'Admin', value: 'admin' },
    { label: 'Super Admin', value: 'sa' }
  ];

  /** 🔹 Datatable columns */
  columns = [
    { key: 'workflow', title: 'Workflow' },
    { key: 'levelName', title: 'Level Name' },
    { key: 'levelNumber', title: 'Level Number' },
    { key: 'assignedTo', title: 'Role' },
    { key: 'isFinal', title: 'Final' }
  ];

  /** 🔹 Data shown in cm-datatable */
  datatableData: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.workflowLevelForm = this.fb.group({
      workflow: ['', Validators.required],
      levels: this.fb.array([this.createLevelForm()])
    });
  }

  /** 🔹 Single input row (NOT dynamic) */
  createLevelForm(): FormGroup {
    return this.fb.group({
      levelName: ['', Validators.required],
      levelNumber: ['', Validators.required],
      assignedTo: ['', Validators.required],
      isFinal: [false]
    });
  }

  /** 🔹 Getter */
  get levels(): FormArray {
    return this.workflowLevelForm.get('levels') as FormArray;
  }

  /** 🔹 ADD → Push data into datatable only */
  addLevels(): void {

    const levelForm = this.levels.at(0);

    if (levelForm.invalid || this.workflowLevelForm.get('workflow')?.invalid) {
      levelForm.markAllAsTouched();
      this.workflowLevelForm.get('workflow')?.markAsTouched();
      return;
    }

    const level = levelForm.value;

    this.datatableData = [
      ...this.datatableData,
      {
        workflow: this.workflowLevelForm.value.workflow,
        levelName: level.levelName,
        levelNumber: level.levelNumber,
        assignedTo: level.assignedTo,
        isFinal: level.isFinal ? 'Yes' : 'No'
      }
    ];

    /** 🔹 Reset SAME controls */
    levelForm.reset({
      levelName: '',
      levelNumber: '',
      assignedTo: '',
      isFinal: false
    });
  }

  /** 🔹 Remove row from table */
  removeLevel(index: number): void {
    this.datatableData.splice(index, 1);
    this.datatableData = [...this.datatableData];
  }

  /** 🔹 FINAL SUBMIT */
  submitForm(): void {

    if (!this.datatableData.length) {
      alert('Please add at least one workflow level');
      return;
    }

    const payload = {
      workflow: this.workflowLevelForm.value.workflow,
      levels: this.datatableData.map(l => ({
        levelName: l.levelName,
        levelNumber: l.levelNumber,
        assignedTo: l.assignedTo,
        isFinal: l.isFinal === 'Yes'
      }))
    };

    console.log('FINAL PAYLOAD 👉', payload);

    // TODO: API call here
  }

  onSelect(event: any): void {
    console.log('Selected Workflow:', event);
  }
}
