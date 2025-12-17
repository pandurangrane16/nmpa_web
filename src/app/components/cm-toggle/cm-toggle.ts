import { CommonModule } from '@angular/common';
import {
  Component,
  forwardRef,
  Input,
  OnInit
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule
} from '@angular/forms';

@Component({
  selector: 'app-cm-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cm-toggle.html',
  styleUrl: './cm-toggle.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CmToggle),
      multi: true
    }
  ]
})
export class CmToggle implements ControlValueAccessor,OnInit {
  ngOnInit(): void {
    console.log('CmToggle initialized : '+this.isDisabled);
  }

  @Input() labelVal: string = 'Toggle';
  @Input() isDisabled: boolean = false;

  isChecked = false;

  /** 🔹 CVA callbacks */
  private onChange = (_: boolean) => {};
  private onTouched = () => {};

  /** 🔹 Called by Angular */
  writeValue(value: boolean): void {
    this.isChecked = !!value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  /** 🔹 UI change handler */
  toggleChanged(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.isChecked = checked;
    this.onChange(checked);
    this.onTouched();
  }
}
