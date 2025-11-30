import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cm-textarea',
  imports: [FormsModule],
  templateUrl: './cm-textarea.html',
  styleUrl: './cm-textarea.css',
})
export class CmTextarea implements OnInit {
  @Input() inputText: string = "";
  @Input() class : string = "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded right-container text-sm shadow focus:outline-none focus:ring w-full";
  @Input() placeholder : string = "Type a message for support";
  @Output() inputOut = new EventEmitter<any>();
  inputVal: any;


  ngOnInit(): void {
    this.inputVal = this.inputText;
  }

  SubmitData() {
    this.inputOut.emit(this.inputVal);
  }
}
