import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cm-autoselect',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cm-autoselect.html',
  styleUrl: './cm-autoselect.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CmAutoselect),
      multi: true
    }
  ]
})
export class CmAutoselect implements ControlValueAccessor {

  constructor(private eRef: ElementRef) {}

  @Output() selectOut = new EventEmitter<string>();

  options = [
    'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
    'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
    'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan',
    'Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'
  ];

  value = '';               // Current value of formControl 
  searchText = '';
  filteredList = [...this.options];
  showDropdown = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.searchText = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  filterOptions() {
    this.showDropdown = true;
    const query = this.searchText.toLowerCase();

    this.filteredList = this.options.filter(x =>
      x.toLowerCase().includes(query)
    );
  }

  selectOption(option: string) {
    this.value = option;
    this.searchText = option;
    this.showDropdown = false;

    this.onChange(option);     // update reactive form
    this.selectOut.emit(option);
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }
}
