import { Component } from '@angular/core';
import { CmTableComponent } from "../../../../components/cm-table/cm-table.component";

@Component({
  selector: 'app-list-view',
  imports: [CmTableComponent],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css',
})
export class ListViewComponent {
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
}
