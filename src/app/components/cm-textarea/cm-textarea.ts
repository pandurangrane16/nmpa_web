import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-cm-textarea',
  templateUrl: './cm-textarea.html',
  styleUrl: './cm-textarea.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CmTextarea),
      multi: true
    }
  ]
})
export class CmTextarea implements ControlValueAccessor {

  @Input() class: string = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded right-container text-sm shadow focus:outline-none focus:ring w-full";
  @Input() placeholder: string = "Type a message for support";
  @Input() autocomplete: string = "off";
  @Input() rows: number = 4;
  @Input() cols: number = 80;
  @Input() readOnly: boolean = false;
  @Input() inputText: string = "";

  value: any = "";

  onChange = (_: any) => { };
  onTouched = () => { };

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
