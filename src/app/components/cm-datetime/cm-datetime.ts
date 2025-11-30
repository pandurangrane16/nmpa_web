import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cm-datetime',
  imports: [CommonModule, FormsModule],
  templateUrl: './cm-datetime.html',
  styleUrl: './cm-datetime.css',
})
export class CmDatetime implements OnInit {

  @Input() includeTime:any;
  selectedTime:any;
  selectedDate:any;
  ngOnInit(): void {
    
  }

}
