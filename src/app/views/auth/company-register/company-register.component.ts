import { Component, input, OnInit } from '@angular/core';
import { CmInput } from '../../../components/cm-input/cm-input';
import { CmAutoselect } from "../../../components/cm-autoselect/cm-autoselect";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CmCheckbox } from '../../../components/cm-checkbox/cm-checkbox.component';

@Component({
  selector: 'app-company-register',
  imports: [CmInput, CmAutoselect,ReactiveFormsModule,CmCheckbox],
  templateUrl: './company-register.component.html',
  styleUrl: './company-register.component.css',
})
export class CompanyRegisterComponent implements OnInit {

  signUpForm!: FormGroup;
  inputEmail: string = '';
  inputCompanyName: string = ''
  inputContact: string = '';
  isFormValid: boolean = false;
companyForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(3)]],
      state: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      retypePassword: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      agree: [false, Validators.requiredTrue]
    });
  }

  get f() {
    return this.signUpForm.controls;
  }

  submitForm() {
    if (this.signUpForm.valid) {
      console.log('Form Data =>', this.signUpForm.value);
    }
  }

  onSelect(selectedState: string) {
    this.signUpForm.get('state')?.setValue(selectedState);
  }
}