import {  Component, inject, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.interface';
import { UserTableComponent } from "../../components/user-table/user-table.component";
import { MatDialog } from '@angular/material/dialog';
import { first, Observable, Subscription } from 'rxjs';
import { UserModalComponent } from '../../components/user-modal/user-modal.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserTableComponent, AsyncPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit, OnDestroy {

  public usersService = inject(UsersService);
  public userList?: Observable<User[]> = this.usersService.userList$;
  private subscription = new Subscription;
  private dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(UserModalComponent, {
      width: '500px',
      data: {
        title: "Introduce user details"
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.createUser(result).pipe(first()).subscribe(() => this.fetchList())
      }
    });
  }

  ngOnInit(): void {
    this.fetchList();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  private fetchList(): void {
    this.subscription.add(
      this.usersService.getUserList().subscribe(),
    )
  }

}
