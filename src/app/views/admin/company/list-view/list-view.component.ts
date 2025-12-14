import { Component } from '@angular/core';
import { CmTableComponent } from "../../../../components/cm-table/cm-table.component";

@Component({
  selector: 'app-list-view',
  imports: [CmTableComponent],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
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
    class: 'bg-green-500 text-white',
    callback: (row: any) => console.log('View', row)
  },
  {
    label: 'Edit',
    class: 'bg-yellow-500 text-black',
    callback: (row: any) => console.log('Edit', row)
  },
  {
    label: 'Delete',
    class: 'bg-red-500 text-white',
    callback: (row: any) => console.log('Delete', row),
    //show: (row: { isDeletable: any; }) => row.isDeletable
  }
];
}
