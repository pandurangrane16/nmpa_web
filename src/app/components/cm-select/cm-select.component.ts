import {
  Component,
  Input,
  forwardRef
} from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-cm-select",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CmSelectComponent),
      multi: true,
    },
  ],
  templateUrl: "./cm-select.component.html",
})
export class CmSelectComponent implements ControlValueAccessor {
  @Input() options: Array<{ label: string; value: any }> = [];
  @Input() placeholder: string = "Select";

  value: any = null;
  disabled = false;

  onChange = (value: any) => {};
  onTouch = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleSelect(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouch();
  }
}
