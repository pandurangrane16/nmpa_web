import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cm-autoselect',
  imports: [CommonModule, FormsModule],
  templateUrl: './cm-autoselect.html',
  styleUrl: './cm-autoselect.css',
})
export class CmAutoselect {

  @Output() selectOut = new EventEmitter<string>();

  options = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];

  searchText = '';
  filteredList = [...this.options];
  showDropdown = false;

  filterOptions() {
    this.showDropdown = true;
    const query = this.searchText.toLowerCase();

    this.filteredList = this.options.filter(x =>
      x.toLowerCase().includes(query)
    );
  }

  selectOption(option: string) {
    this.searchText = option;
    this.showDropdown = false;
    this.selectOut.emit(option);
  }
}
