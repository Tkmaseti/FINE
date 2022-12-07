import { User } from 'src/app/_interface/users';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const AUTH_API = environment.apiURL +'api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username, password
    },
      httpOptions);
  }
  register(username: string, email: string, password: string, profession: string, roles: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username, email, password, profession, roles,
    },
      httpOptions);
  }
  update(id: string, user: User): Observable<any> {
    return this.http.put(AUTH_API + 'signin', {id, user }, httpOptions);
  }
}
