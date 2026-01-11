import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CmInput } from '../../../../components/cm-input/cm-input';
import { CmAutoselect } from '../../../../components/cm-autoselect/cm-autoselect';
import { CmButton } from '../../../../components/cm-button/cm-button';

@Component({
  selector: 'app-pass-rule-management',
  imports: [CommonModule, FormsModule, CmInput, ReactiveFormsModule, CmAutoselect, CmButton],
  templateUrl: './pass-rule-management.component.html',
  styleUrl: './pass-rule-management.component.css',
})
export class PassRuleManagementComponent implements OnInit {

  signUpForm!: FormGroup;
  inputEmail: string = '';
  inputCompanyName: string = ''
  inputContact: string = '';
  isFormValid: boolean = false;
  companyForm: any;
  fb = inject(FormBuilder);
  @Input() company: any;
  @Input() actionType!: string;

  @Input() open = false;
  @Output() closeForm = new EventEmitter<void>();

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(3)]],
      state: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  close() {
    this.closeForm.emit();
  }

  get f() {
    return this.signUpForm.controls;
  }

  submitForm() {
    if (this.signUpForm.valid) {
      console.log('Form Data =>', this.signUpForm.value);
    }
  }

  onSelect(selectedState: any) {
    this.signUpForm.get('state')?.setValue(selectedState);
  }

  documents = [
    { name: 'Aadhar Card', type: 'image', url: 'assets/aadhar.jpg' },
    { name: 'PAN Card', type: 'image', url: 'assets/pan.png' },
    { name: 'Company Agreement', type: 'pdf', url: 'assets/agreement.pdf' }
  ];

  currentIndex = 0;
  viewerOpen = false;

  openViewer(index: number) {
    this.currentIndex = index;
    this.viewerOpen = true;
  }

  closeViewer() {
    this.viewerOpen = false;
  }

  prev() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  next() {
    if (this.currentIndex < this.documents.length - 1) this.currentIndex++;
  }
}
