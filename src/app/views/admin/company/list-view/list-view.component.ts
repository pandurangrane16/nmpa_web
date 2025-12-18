import { Component, inject } from '@angular/core';
import { CmTableComponent } from "../../../../components/cm-table/cm-table.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdlViewCompany } from '../mdl-view-company/mdl-view-company';

@Component({
  selector: 'app-list-view',
  imports: [CmTableComponent],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
  modalService = inject(NgbModal);
  columns = [
  { key: 'id', title: 'Company ID' },
  { key: 'name', title: 'Company Name' },
  { key: 'email', title: 'Email' },
];

  userList = [
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Smith', email: 'smith@yahoo.com' },
    { id: 3, name: 'Alice', email: 'alice@outlook.com' },
];


actions = [
  {
    label: 'View',
    class: 'bg-green-500 text-black',
    callback: (row: any) => {(this.tableClick(row,'view'))}
  },
  {
    label: 'Edit',
    class: 'bg-yellow-500 text-black',
    callback: (row: any) => {(this.tableClick(row,'edit'))}
  },
  {
    label: 'Delete',
    class: 'bg-red-500 text-white',
    callback: (row: any) => {(this.tableClick(row,'delete'))}
    //show: (row: { isDeletable: any; }) => row.isDeletable
  }
];

openModal() {
    this.modalService.open(MdlViewCompany, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
  }

tableClick(event: any,type:string) {
  this.modalService.open(MdlViewCompany, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
}

}
