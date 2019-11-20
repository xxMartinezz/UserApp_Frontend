import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPage, User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private restApiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserPage>
  {
    return this.httpClient.get<UserPage>(`${this.restApiUrl}/users`);
  }

  addUser(user: User): Observable<User>
  {
    return this.httpClient.post<User>(`${this.restApiUrl}/users`, user);
  }
}
