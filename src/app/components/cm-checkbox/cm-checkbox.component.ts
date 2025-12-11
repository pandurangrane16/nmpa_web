import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-cm-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cm-checkbox.component.html',
  styleUrl: './cm-checkbox.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CmCheckbox),
      multi: true
    }
  ]
})
export class CmCheckbox implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() linkLabel: string = '';
  @Input() linkUrl: string | null = null;

  checked = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleCheckbox(event: any) {
    this.checked = event.target.checked;
    this.onChange(this.checked);
    this.onTouched();
  }
}
