import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cm-button',
  imports: [],
  templateUrl: './cm-button.html',
  styleUrl: './cm-button.css',
})
export class CmButton {
  @Input() class :string = "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-box pointer";
  @Input() btnText : string = "Send Message";
  @Output() clicked = new EventEmitter<any>();
  @Input() inputVal: any;

  OnButtonClick(){
    this.clicked.emit(this.inputVal);
  }
}
