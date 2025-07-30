import { Component,  Input } from '@angular/core';
import { User } from '../../models/user.interface';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'user-table',
  standalone: true,
  imports: [MatTableModule,MatIconModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent {
  displayedColumns: string[] = ['position', 'name', 'email', 'job','actions'];
  @Input({ required: true }) dataSource: User[] = [];

  deleteUser(id:string){

  }
}
