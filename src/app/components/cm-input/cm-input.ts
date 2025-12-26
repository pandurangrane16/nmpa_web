import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-cm-input',
  templateUrl: './cm-input.html',
  styleUrl: './cm-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CmInput),
      multi: true
    }
  ]
})
export class CmInput implements ControlValueAccessor {

  @Input() class: string =
    "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150";
  @Input() readOnly: boolean = false;
  @Input() placeholder: string = "Full Name";
  @Input() autocomplete: string = "off";
  @Input() type: string = "text";
  value: any = "";

  onChange = (_: any) => {};
  onTouched = () => {};

  // Angular writes form value here
  writeValue(value: any): void {
    this.value = value ?? "";
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(val: any) {
    this.value = val;
    this.onChange(val);  // update form control
    this.onTouched();
  }
}
