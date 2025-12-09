import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cm-input',
  imports: [FormsModule],
  templateUrl: './cm-input.html',
  styleUrl: './cm-input.css',
})
export class CmInput implements OnInit {
  @Input() class: string = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150";
  @Input() placeholder: string = "Full Name";
  @Input() inputText: string = "";
  @Output() inputOut = new EventEmitter<any>();
  inputVal: any;
 @Input() autocomplete: string = "off";
  ngOnInit(): void {
    this.inputVal = this.inputText;
  }

  SubmitData() {
    this.inputOut.emit(this.inputVal);
  }
}
