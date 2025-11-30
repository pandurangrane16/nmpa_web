import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cm-toggle',
  imports: [CommonModule,FormsModule],
  templateUrl: './cm-toggle.html',
  styleUrl: './cm-toggle.css',
})
export class CmToggle implements OnInit {

  @Input() isChecked: boolean = true;
  @Input() labelVal: string = "Toggle Label"
  @Output() toggleOut = new EventEmitter<any>();
change: any;

  ngOnInit(): void {
    
  }

  ToggleSwitch(evt: any) {
    this.isChecked = evt.target.checked;
    if(evt.target.checked){
      this.change = "Yes";
    } else {
      this.change = "No";
    }
    this.toggleOut.emit(this.isChecked);
  }

}
