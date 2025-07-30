import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user.interface';

const baseUrl = 'http://localhost:3000/users'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  private http = inject(HttpClient);
  private userList = new BehaviorSubject<User[]>([]);

  public get userList$(): Observable<User[]> {
    return this.userList.asObservable();
  }

  public getUserList() {
    return this.http.get<User[]>(baseUrl).pipe(
      tap((list) => this.userList.next(list)))
  }

  public createUser(user: User): Observable<any> {
    return this.http.post(baseUrl, user);
  };
}
